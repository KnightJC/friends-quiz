const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

// push questions into availableQuestions Array // 

function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

function getNewQuestion(){
    // set question number //
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
    // set question text //
    //random question //
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);
    
    const optionLen = currentQuestion.options.length
    //pushing options into Array //
    for(let i=0; i<optionLen; i++) {
        availableOptions.push(i)
    }

    for(let i=0; optionLen; i++) {
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i]
        option.id = i;
        option.className = "option";
        optionContainer.appendChild(option)
    }

    questionCounter++
}

function next() {
    if(questionCounter === quiz.length) {
        console.log("quiz over")
    } else {
        getNewQuestion();
    }
}

window.onload = function () {
    // set all questions in availableQuestions Array //
    setAvailableQuestions();
    getNewQuestion();

}

