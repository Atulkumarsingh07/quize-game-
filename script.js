// DOM Elements
const startScreen = document.getElementById("start-screen")
const quizeScreen = document.getElementById("quize-screen")
const resultScreen = document.getElementById("result-screen")
const startButton = document.getElementById("start-btn")
const questionText = document.getElementById("question-text")
const answersContainer = document.getElementById("answers-container")
const currentQuestionSpan = document.getElementById("current-question")
const totoalQuestionSpan = document.getElementById("total-question")
const scoreSpan = document.getElementById("score")
const finalScoreSpan = document.getElementById("final-score")
const maxScore = document.getElementById("max-score")
const resultMessage = document.getElementById("result-message")
const restartButton = document.getElementById("restart-btn")
const progressBar = document.getElementById("progress")


const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markdown Language",
    b: "Home Tool Markup Language",
    c: "Hyper Text Markup Language",
    d: "Hyperlinks and Text Markup Language",
    correct: "c"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    a: "bgcolor",
    b: "background-color",
    c: "color",
    d: "backgroundImage",
    correct: "b"
  },
  {
    question: "Which is the correct syntax for referring to an external script called 'main.js'?",
    a: "<script href='main.js'>",
    b: "<script src='main.js'></script>",
    c: "<script ref='main.js'></script>",
    d: "<script name='main.js'></script>",
    correct: "b"
  },
  {
    question: "How do you write 'Hello World' in an alert box using JavaScript?",
    a: "msg('Hello World')",
    b: "alertBox('Hello World')",
    c: "alert('Hello World')",
    d: "msgBox('Hello World')",
    correct: "c"
  },
  {
    question: "Which CSS selector selects all elements with class 'item'?",
    a: ".item",
    b: "#item",
    c: "item",
    d: "*item",
    correct: "a"
  }
]



//QUIZ STATE VARS

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totoalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent=quizQuestion.length

//event listeners

startButton.addEventListener("click",startQuiz);
restartButton.addEventListener("click",restartQuiz;)


function startQuiz() {
    // reset vars 
   currentQuestionIndex = 0;
   scoreSpan.textContent = 0;

   startScreen.classList.removee("active");
   quizeScreen.classList.add("active");

   showQuestion()

}

fuction showQuestion(){
    // reset state 
    answerDisabled=false

    const currentQuestion = quizQuestion[currentQuestionIndex]

    currentQuestionSpan.textContent = currentQuestionIndex + 1

    const progressPercent = (currentQuestionIndex / quizeQuestion .length) * 100;
     progressBar.style.width = progressPercent + "%"

     questionText.textContent = currentQuestion.question


     //todo: explain this in a second 
     answersContainer.innerHTML="";

     currentQuestion.answer.forEach(answer => {
        const button = document.create Element("button")
        button.textContent = answer.text 
        button.classList.add("answer-btn")
        
        button.dataset.correct = answer.correct

        button.addEventListener("click" , selectAnswer)

        answersContainer.appendChild(button)
         })
}

function selectAnswer(event){
    if(answersDisabled) return

    answersDisabled = true 

    const selectedButton = even.target;
    const isCorrect = selectedButton.dataset.correct === "true
    
    
    
    Array .from (answerContainer.children).forEach( button =>{
        if( button.dataset.correct ==="true"){
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }

    )};
        

    if(isCorrect){
        score++;
        scoreSpan.textContent = score 
    }
    setTimeout(() => {
        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.lenth){
        showQuestion()
        }
    },1000

    )
        
    
 
function restartQuiz(){
    console.log("quiz re-started");
}

