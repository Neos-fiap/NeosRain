const questions = [
    {
        question: "O que é uma enchente?",  
        answers: [
            {id: 1, text: "Um terremoto na cidade", correct: false},
            {id: 2, text: "Um acúmulo excessivo de água em uma área", correct: true},
            {id: 3, text: "Um vento muito forte", correct: false},
            {id: 4, text: "Uma tempestade de neve", correct: false},
        ]
    },
    {
        question: "Qual é a principal causa de enchente nas cidades?",  
        answers: [
            {id: 1, text: "Plantação de árvores", correct: false},
            {id: 2, text: "Canais limpos", correct: false},
            {id: 3, text: "Chuvas fortes e falta de drenagem adequada", correct: true},
            {id: 4, text: "Falta de sol", correct: false},
        ]
    },
    {
        question: "O que pode piorar as enchentes nas áreas urbanas?",  
        answers: [
            {id: 1, text: "Presença de rios limpos", correct: false},
            {id: 2, text: "Arborização das ruas", correct: false},
            {id: 3, text: "Lixo jogado nas ruas e bueiros entupidos", correct: true},
            {id: 4, text: "Parques públicos", correct: false},
        ]
    },
    {
        question: "O que devemos evitar fazer durante uma enchente?",  
        answers: [
            {id: 1, text: "Evitar andar nas ruas alagadas", correct: true},
            {id: 2, text: "Ficar atento aos alertas das autoridades", correct: false},
            {id: 3, text: "Procurar um lugar seguro", correct: false},
            {id: 4, text: "Tentar atravessar a correnteza", correct: false},
        ]
    },
    {
        question: "Qual órgão geralmente avisa sobre o risco de enchentes?",  
        answers: [
            {id: 1, text: "Receita federal", correct: false},
            {id: 2, text: "Corpo de Bombeiros e Defesa Civil", correct: true},
            {id: 3, text: "Cartório", correct: false},
            {id: 4, text: "Prefeitura de Cultura", correct: false},
        ]
    },
    {
        question: "Por que é importante manter os bueiros limpos?",  
        answers: [
            {id: 1, text: "Para evitar acidentes de carro", correct: false},
            {id: 2, text: "Para deixar a cidade mais bonita", correct: false},
            {id: 3, text: "Para impedir o acúmulo de água e evitar enchentes", correct: true},
            {id: 4, text: "Para animais beberem água", correct: false},
        ]
    },
    {
        question: "O que pode acontecer com as casas durante uma enchente forte?",  
        answers: [
            {id: 1, text: "Elas viram pontos turísticos", correct: false},
            {id: 2, text: "Elas podem ser alagadas ou destruídas", correct: true},
            {id: 3, text: "Elas se tornam mais resistentes", correct: false},
            {id: 4, text: "Nada acontece", correct: false},
        ]
    },
    {
        question: "Quais são os sinais de que uma enchente pode acontecer?",  
        answers: [
            {id: 1, text: "Céu limpo e sol forte", correct: false},
            {id: 2, text: "Canto dos pássaros", correct: false},
            {id: 3, text: "Chuvas intensas por várias horas", correct: true},
            {id: 4, text: "Barulhos de carros", correct: false},
        ]
    },
    {
        question: "Qual é uma atitude que ajuda a prevenir enchentes?",  
        answers: [
            {id: 1, text: "Jogar lixo no rio", correct: false},
            {id: 2, text: "Construir casas em áreas de risco", correct: false},
            {id: 3, text: "Plantar árvores e cuidar do meio ambiente", correct: true},
            {id: 4, text: "Deixar os bueiros tampados", correct: false},
        ]
    },
    {
        question: "O que é um abrigo temporário em situações de enchentes?",  
        answers: [
            {id: 1, text: "Um shopping center", correct: false},
            {id: 2, text: "Um lugar seguro onde pessoas afetadas podem ficar", correct: true},
            {id: 3, text: "Uma escola qualquer", correct: false},
            {id: 4, text: "Campo de futebol", correct: false},
        ]
    }
];

const questionsElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons"); // Corrigido aqui
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