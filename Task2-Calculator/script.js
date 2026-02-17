function calculate() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var resultBox = document.getElementById("resultBox");
    var resultText = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultText.innerHTML = "Please enter valid numbers!";
        resultBox.style.backgroundColor = "orange";
        return;
    }

    var result;

    if (operation === "+") {
        result = num1 + num2;
    }
    else if (operation === "-") {
        result = num1 - num2;
    }
    else if (operation === "*") {
        result = num1 * num2;
    }
    else if (operation === "/") {
        if (num2 === 0) {
            resultText.innerHTML = "Cannot divide by zero!";
            resultBox.style.backgroundColor = "red";
            return;
        }

        result = num1 / num2;
    }

    resultText.innerHTML = result;

    if (result > 0) {
        resultBox.style.backgroundColor = "lightgreen";
    }
    else if (result < 0) {
        resultBox.style.backgroundColor = "lightcoral";
    }
    else {
        resultBox.style.backgroundColor = "lightgray";
    }
}
