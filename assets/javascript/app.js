var seconds = 120;
var interval;
var timerStart = false;

function quizTimer() {
    timerStart = true;
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;
    $("#countdown").text(seconds);
    if (seconds === 0) {
        alert("Time Up!");
        score();
        gameReset();
    }
}

function gameReset() {
    clearInterval(interval);
    $("input[name=Question1]").prop("checked", false);
    $("input[name=Question2]").prop("checked", false);
    $("input[name=Question3]").prop("checked", false);
    $("input[name=Question4]").prop("checked", false);
    $("input[name=Question5]").prop("checked", false);
    seconds=120;
    $("#countdown").text(seconds);
}

function score() {
    var q1 = $('input[name=Question1]:checked').val();
    var q2 = $('input[name=Question2]:checked').val();
    var q3 = $('input[name=Question3]:checked').val();
    var q4 = $('input[name=Question4]:checked').val();
    var q5 = $('input[name=Question5]:checked').val();
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    if (q1 === "Mario") {
        correct++;
    }
    else if (q1 === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }
    if (q2 === "Navigation") {
        correct++;
    }
    else if (q2 === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }
    if (q3 === "Wii Sports") {
        correct++;
    }
    else if (q3 === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }
    if (q4 === "Donkey Kong") {
        correct++;
    }
    else if (q4 === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }
    if (q5 === "Alien") {
        correct++;
    }
    else if (q5 === undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }
    alert("Correct: " + correct + "\nIncorrect: " + incorrect + "\nUnanswered: " + unanswered);
}

$("#start").on("click", function() {
    quizTimer();
})

$("#reset-button").on("click", function() {
    if (timerStart) {
        score();
        gameReset();
        timerStart = false;
    }
})