function calculateFactorial() {
    let number = document.getElementById("number").value;
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    document.getElementById("result").innerHTML = "The factorial of " + number + " is " + result;
}

const inputField = document.getElementById("number");

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateFactorial();
    }
});