function findGreatest() {
	// Get the input values
	let a = parseFloat(document.getElementById("num1").value);
	let b = parseFloat(document.getElementById("num2").value);
	let c = parseFloat(document.getElementById("num3").value);

	// Find the greatest number
	let greatest = a;
	if (b > greatest) {
		greatest = b;
	}
	if (c > greatest) {
		greatest = c;
	}

	// Display the result
	let resultDiv = document.getElementById("result");
	resultDiv.innerText = `The greatest of ${a}, ${b}, and ${c} is ${greatest}.`;
}
