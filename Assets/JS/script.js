// const questions for quiz

const questions = [

    // first question
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        choices: {
          a: "quotes",
          b: "curly brackets",
          c: "parentheses",
          d: "square brackets"
        },
        correctAnswer: "a"
      },
    //   second question
    {
        question: "What does CSS stand for?",
        choices: {
          a: "Colorful Style Sheet",
          b: "Comp Style Sheet",
          c: "Cascades Styling Sheet",
          d: "Cascading Style Sheet"
        },
        correctAnswer: "d"
      },
    //   third question
    {
        question: "Which is a helpful tool used for development and debugging of a webpage?",
        choices: {
          a: "Terminal",
          b: "Console log",
          c: "CSS",
          d: "BootStrap"
        },
        correctAnswer: "b"
      },
    //   forth question
    {
        question: "What does HTML stand for?",
        answers: {
          a: "Hypertext Markup Language",
          b: "Hypertech Markup Language",
          c: "HorizionText Marked Languages",
          d: "Haakontext Markup Language"
        },
        correctAnswer: "a"
    },
    // fifth question
    {
        question: "Which is not a data type?",
        choices: {
          a: "Booleans",
          b: "Numbers",
          c: "Alerts",
          d: "Undefined"
        },
        correctAnswer: "c"
      },
    //   sixth question
    {
      question: "How do you create a function in Javascript?",
      choices: {
        a: "thisFunction()",
        b: "create.Function()",
        c: "function thisFunction()",
        d: "function= thisFunction()"
      },
      correctAnswer: "c"
    },
    // seventh question
    {
      question: "Inside the HTML, which element do we put the Javascript?",
      choices: {
        a: "<addscript>",
        b: "<js-script-file>",
        c: "<JAVASCRIPT-FILE>",
        d: "<script>"
      },
      correctAnswer: "d"
    },
    // Eigth question
    {
      question: "The first index of an array is ____?",
      choices: {
        a: "1",
        b: "0",
        c: "A",
        d: "All choices are correct"
      },
      correctAnswer: "b"
    }
]

// variables for the quiz
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById('quiz');

// for questions 
var questionPage = document.getElementById("questionPage");

// buttons 
var choiceA = document.getElementById("btnA");
var choiceB = document.getElementById("btnB");
var choiceC = document.getElementById("btnC");
var choiceD = document.getElementById("btnD");
var submitButton = document.getElementById('submit');

// timer for quiz
var timerEl = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timeIsUp = document.getElementById("timeIsUp");
var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

function timeDown (){
        var timerInterval = setInterval(function () {

          secondsLeft--;
          timerEl.textContent = "Time left: " + secondsLeft + " s";
    
            if (secondsLeft <= 0){
                clearInterval(timerInterval);
                timerEl.textContent = "Time is up!"; 
                // if time is up, show on score board content instead of "all done!"
                finish.textContent = "Time is up!";
                gameOver();

            } else  if(questionCount >= questionSource.length +1) {
                clearInterval(timerInterval);
                gameOver();
                } 
    }, 1000);
}
function startQuiz (){
    
}

















// timerEl.innerHTML="Time: "+ 0;
// var counter = 0;
// function startTimer(){
//     timerEl.innerHTML="Time: "+ 0
//     var timedOut= setInterval(function(){
//         timerEl.innerHTML="Time: "+ (60 - counter)
//         counter++;
//         if(counter >= 61){
//             clearInterval(timedOut);
//             quiz.style.display="none";
//             introSection.style.display="block";
//         }
//     },1000)
//     }