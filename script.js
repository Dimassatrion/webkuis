const questions = [
    {
        question: "Apa hewan terbesar di dunia?",
        answers: [
            { text: "Hiu", correct: false},
            { text: "Ayam", correct: false},
            { text: "Gajah", correct: false},
            { text: "Paus", correct: true},
        ]
    },
    {
        question: "Apa hewan yang hanya ada di Indonesia?",
        answers: [
            { text: "Komodo", correct: true},
            { text: "Tuna", correct: false},
            { text: "Badak", correct: false},
            { text: "Monyet", correct: false},
        ]
    },
    {
        question: "Apa benua terbesar di muka bumi?",
        answers: [
            { text: "Asia", correct: true},
            { text: "Australia", correct: false},
            { text: "Afrika", correct: false},
            { text: "Amerika", correct: false},
        ]
    },
    {
        question: "Hewan apa yang suka bergelantung di hutan?",
        answers: [
            { text: "Cacing", correct: false},
            { text: "Monyet", correct: true},
            { text: "Harimau", correct: false},
            { text: "Singa", correct: false},
        ]
    },
    {
        question: "Apa ibukota Indonesia?",
        answers: [
            { text: "London", correct: false},
            { text: "New York", correct: false},
            { text: "Jakarta", correct: true},
            { text: "Yogyakarta", correct: false},
        ]
    },
    {
        question: "Apa kota Indonesia yang berada di paling barat?",
        answers: [
            { text: "Merauke", correct: true},
            { text: "Sabang", correct: false},
            { text: "Jepara", correct: false},
            { text: "Purwokerto", correct: false},
        ]
    },
    {
        question: "Siapa presiden pertama di Indonesia?",
        answers: [
            { text: "Soekarno", correct: true},
            { text: "Soeharto", correct: false},
            { text: "Soebarjo", correct: false},
            { text: "Hatta", correct: false},
        ]
    },
    {
        question: "Apa pulau terbesar di Indonesia?",
        answers: [
            { text: "Jawa", correct: false},
            { text: "Maluku", correct: false},
            { text: "Kalimantan", correct: true},
            { text: "Sumatera", correct: false},
        ]
    },
    {
        question: "Dimanakah letak kota pelajar di Indonesia",
        answers: [
            { text: "Aceh", correct: false},
            { text: "Demak", correct: false},
            { text: "Medan", correct: false},
            { text: "Yogyakarta", correct: true},
        ]
    },
    {
        question: "Siapakah guru WEB di SMK Telkom Purwokerto",
        answers: [
            { text: "Pak Adi", correct: false},
            { text: "Bu Firda", correct: true},
            { text: "Pak Arwa", correct: false},
            { text: "Pak Henok", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

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
        if(button.dataset.corect === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Kamu benar ${score} dari ${questions.length} pertanyaan!`;
    nextButton.innerHTML = "Mulai Lagi";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz();