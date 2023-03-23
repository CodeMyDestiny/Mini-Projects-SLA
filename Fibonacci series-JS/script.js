function generateFibonacci() {
	const output = document.getElementById("fib-output");
	const length = document.getElementById("fib-length").value;

	let fibSeries = [];
	fibSeries[0] = 0;
	fibSeries[1] = 1;

	for (let i = 2; i < length; i++) {
		fibSeries[i] = fibSeries[i-1] + fibSeries[i-2];
	}

	output.innerHTML = fibSeries.join(", ");
}

const inputField = document.getElementById("fib-length");

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generateFibonacci();
    }
});