// Store correct answers in separate variables
var answer1 = "4";
var answer2 = "HTML";
var answer3 = "Interactivity";

// Function to check Question 1
function checkQ1() {
    var selected = document.querySelector('input[name="q1"]:checked');
    if (selected.value === answer1) {
        return 1;
    }
    return 0;
}

// Function to check Question 2
function checkQ2() {
    var selected = document.querySelector('input[name="q2"]:checked');
    if (selected.value === answer2) {
        return 1;
    }
    return 0;
}

// Function to check Question 3
function checkQ3() {
    var selected = document.querySelector('input[name="q3"]:checked');
    if (selected.value === answer3) {
        return 1;
    }
    return 0;
}

// Function to calculate total score
function checkQuiz() {
    var score = 0;

    score += checkQ1();
    score += checkQ2();
    score += checkQ3();

    var resultText = "Your Score: " + score + " / 3<br>";

    // Conditional messages
    if (score === 3) {
        resultText += "Excellent!";
    } 
    else if (score === 2) {
        resultText += "Good Job!";
    } 
    else if (score === 1) {
        resultText += "Keep Practicing!";
    } 
    else {
        resultText += "Try Again!";
    }

    document.getElementById("result").innerHTML = resultText;
}

// Reset Function
function resetQuiz() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(function(input) {
        input.checked = false;
    });

    document.getElementById("result").innerHTML = "";
}
