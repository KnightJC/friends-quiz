const questions = [
    {
        question: "Who plays the character of Ross Geller in Friends?",
        answer: [
            { text: "David Schwimmer", correct: true},
            { text: "Tom Hardy", correct: false},
            { text: "Tom Cruise", correct: false},
            { text: "Henry Cavill", correct: false},
        ]
    },
    {
        question: "Which character had a pet monkey named Marcel in Friends?",
        answer: [
            { text: "Gunther", correct: false},
            { text: "Rachel Barry", correct: false},
            { text: "Ross Geller", correct: true},
            { text: "Chandler Bing", correct: false},
        ]
    },
    {
        question: "What was the name of the character played by Paul Rudd in Friends?",
        answer: [
            { text: "Gunther", correct: false},
            { text: "Rachel Barry", correct: false},
            { text: "Pete Becker", correct: false},
            { text: "Mike Hannigan", correct: true},
        ]
    },
    {
        question: "What is the name of the coffee shop the Friends characters frequently visit?",
        answer: [
            { text: "Central Perk", correct: true},
            { text: "Spice Lounge", correct: false},
            { text: "Coffee Bean", correct: false},
            { text: "Tavern Espresso", correct: false},
        ]
    },
    {
        question: "What is the name of the Friends character who is a chef?",
        answer: [
            { text: "Richard Burke", correct: false},
            { text: "Gill Green", correct: false},
            { text: "Chandler Bing", correct: false},
            { text: "Monica Geller", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
/*Choosing question */
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
/* Correct and Incorrect Answer*/
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = "true";
    });
    nextButton.style.display = "block";
}
/* Show scores */
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

/* Next question */
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
