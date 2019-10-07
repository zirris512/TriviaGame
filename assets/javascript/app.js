var seconds = 120;
var interval;
var questions = {
    question1: {
        question: "Who is Nintendo's iconic red plumber?",
        options: {
            choice1: "Luigi",
            choice2: "Mario",
            choice3: "Link",
            choice4: "Toad"
        }
    },
    question2: {
        question: "Where did the fairy, Navi, get her name from?",
        options: {
            choice1: "Navel",
            choice2: "Navy",
            choice3: "Navigation",
            choice4: "North American Vampire"
        }
    },
    question3: {
        question: "What is Nintendo's best-selling exclusive title?",
        options: {
            choice1: "Duck Hunt",
            choice2: "Super Mario Bros",
            choice3: "Wii Sports",
            choice4: "Mario Kart Wii"
        }
    },
    question4: {
        question: "What is the first Nintendo game to feature Mario?",
        options: {
            choice1: "Mario Bros",
            choice2: "Tennis",
            choice3: "Donkey Kong",
            choice4: "Wrecking Crew"
        }
    },
    question5: {
        question: "Which film inspired the enemies in Nintendo's Metroid series?",
        options: {
            choice1: "Star Wars",
            choice2: "Galaxy of Terror",
            choice3: "Predator",
            choice4: "Alien"
        }
    }
}
console.log(questions);

function quizTimer() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;
    $("#countdown").text(seconds);
    if (seconds === 0) {
        alert("Time Up!");
        alert(score());
        gameReset();
    }
}

function gameReset() {
    clearInterval(interval);
    $("#questions").empty();
}

function score() {

}

$("#start").on("click", function() {
    for(var i = 0; i < questions.length; i++) {
        var p = $("<p>");
        p.addClass("question");
        $("#questions").append(p);
        $(".question").append(questions[i]);
    }
})