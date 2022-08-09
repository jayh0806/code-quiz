var quizBody = document.getElementById("quiz");
var resultsel = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var endgameDiv = document.getElementById("endgame");
var questionsEl = document.getElementById("questions");
var quizTime = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

var quizQuestions = [{
    1: "Which company was behind the creation of Java?",
    choiceA: "Yahoo",
    choiceB: "Sun Microsystems",
    choiceC: "Microsoft",
    choiceD: "None of the above",
    correctAnswer: "b"},
    
    {
     2: "What is the name that all Java classes inherit (directly or indirectly) from?",
     choiceA: "Object",
     choiceB: "Class",
     choiceC: "ClassLoader",
     choiceD: "None of the above",
     correctAnswer: "a"},
     
     {
        3: "What is used to add styling to a web page?",
        choiceA: "HTML",
        choiceB: "CSS",
        choiceC: "Javascript",
        choiceD: "All the above",
        correctAnswer: "b"},

        {
            4: "Which HTML attribute points to images,audio files, and video clips?",
            choiceA: "href",
            choiceB: "src",
            choiceC: "class",
            choiceD: "id",
            correctAnswer: "b"},

            {
                5: "The SCRIPT tag enables you to enhance a web page with code written in which programming language?",
                choiceA: "SQL",
                choiceB: "FORTRAN",
                choiceC; "JavaScript",
                choiceD; "Pascal",
                correctAnswer: "c"},
            {    
                6: "How many NBA championships do the Boston Celtics have?",
                choiceA: "20",
                choiceB: "17",
                choiceC: "5",
                choiceD: "15",
                correctAnswer: "b"},

                {
                    7: "How many Super Bowl rings does Tom Brady have?",
                    choiceA: "6",
                    choiceB: "5",
                    choiceC: "7",
                    choiceD: "4",
                    correctAnswer: "c"},

                    8: "Who was the first president of the United States of America?",
                    choiceA: "George Washington",
                    choiceB: "Abraham Lincoln",
                    choiceC: "Bill Gates",
                    ChoiceD: "Ronald Reagan",
                    correctAnswer: "a"},

                    9: "Is Die Hard a Christmas movie?",
                    choiceA: "Yes",
                    choiceB: "Absolutely",
                    choiceC: "100%",
                    choiceD: "All the Above",
                    correctAnswer: "d"},

                    10: "How many heading tags are in HTML?",
                     choiceA: "Unlimited",
                     choiceB: "6",
                     choiceC: "1",
                     choiceD: "10",
                     correctAnswer: "b"},
                

];
// quiz questions found at https://www.funtrivia.com/trivia-quiz/SciTech/HTML-Fundamentals-407860.html and https://www.funtrivia.com/trivia-quiz/SciTech/Java-47826.html
// some are for fun and to add more questions
// more variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 90;
var timerInterval;
var score = 0;
var correct;

function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){return showScore();}
}

var currentQuestion = quizQuestions[currentQuestionIndex];
questionsEl.INNERHTML = "<p>" + currentQuestion.question + "<?p>";
buttonA.innerHTML = currentQuestion.choiceA;
buttonB.innerHTML = currentQuestion.choiceB;
buttonC.innerHTML = currentQuestion.choiceC;
buttonD.innerHTML = currentQuestion.choiceD;
];

//Start Quiz function starts, timer and shows first question
function startQuiz()[
    endgameDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time Left: " + timeLeft;

        if(timeLeft === 0) [
            clearInterval(timerInterval);
            showScore();
        ]

    }, 10000;
    quizBody.style.display = "block";
    }
//displays score when finished 
function showScore(){
    quizBody.style.display = "none";
    gameoverDiv.style.display = "flex";
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = `You got${score}out of${quizQuestions.length}correct!`;
    //above was suggested bu visual studio

// click submit button highscore is saved and ranked

    submitScoreBtn.addEventListener("click", function highscore(){
        
        if(highscoreInputName.value === "") {
            alert("Name cannot be blank");
            return false;
        }else{
            var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
            var currentUser = highscoreInputName.value.trim();
            var currentHighscore = {name : currentUser, score: score 
            };
            
            endgameDiv.style.display = " none ";
            highscoreContainer.style.display = "flex";
            highscoreDiv.style.display = "block";
            endGameBtns.style.display = " flex " ;

            savedHighscores.push(currentHighscore);
            localStorage.setItem("savedHighscores",JSON.stringify(savedHighscores));
            generateHighscores();

        }

    });

    // allows repay of quiz by clearing data and setting back to original
    function replayQuiz(){
        highscoreContainer.style.display = "none";
        endgameDiv.style.display = "none";
        startQuizDiv.style.display = "flex";
        timeLeft = 90;
        score = 0;
        currentQuestionIndex = 0;
    }

    //function checks the answer
    function checkAnswer(answer){
        correct = quizQuestions[currentQuestionIndex].correctAnswer;

        if (answer === correct && currentQuestionIndex == finalQuestionIndex){
            score++;
            alert("Good Job");
            currentQuestionIndex++;
            generateQuizQuestion();
            // shows if correct
        }else if (answer == correct && currentQuestionIndex == finalQuestionIndex){
            alert("You are Incorrect!")
            currentQuestionIndex++;
            generateQuizQuestion();
            //shows if incorrect
        }else{
            showScore();
        }
    }

    //start the quiz
    startQuizButton.addEventListener("click",startQuiz);
    
}
]
     