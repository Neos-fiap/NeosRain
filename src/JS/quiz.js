const questions = [
    {
        question: "Quanto é 2+2",  
        answers: [
            {id: 1, text:"1", correct:false},
            {id: 2, text:"5", correct:false},
            {id: 3, text:"2", correct:false},
            {id: 4, text:"4", correct:true},
        ]
    }
];

const questionsElement = document.getElementById("question");
const answersButton = document.getElementById("ansers-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){  
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";  
    showQuestion();
}

function resetState(){
    nextButton.style.display = "none";
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild);
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + "." + currentQuestion.question;  

    currentQuestion.answers.forEach((answer) => {  
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answersButton.appendChild(button);
    });
}

function selectAnswer(e){
    const answers = questions[currentQuestionIndex].answers;  
    const correctAnswer = answers.filter((answer) => answer.correct === true)[0];  

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButton.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

function showScore(){
    resetState();
    questionsElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;  
    nextButton.innerHTML = "Jogar novamente";  
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();  
    }
});

startQuiz();  