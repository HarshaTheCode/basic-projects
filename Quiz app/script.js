const questionElements =document.getElementById("question")
const background= document.getElementById("Quizbox-container");
const score =document.getElementById("score")
const truebtn =document.getElementById("true-btn")
const falsebtn =document.getElementById("false-btn")
const restartbtn = document.getElementById("restart-btn")


const quizedata=[
    {question:"Is sky blue ",answer:true},
    {question:"Is your an human",answer:true},
    {question:"Are you on moon ",answer:false}
];
questionElements.textContent=quizedata[0].question;
let currentquestion=0;
let currentscore=0;

truebtn.addEventListener("click", ()=> checkanswer(true))
falsebtn.addEventListener("click",() => checkanswer(false))
restartbtn.addEventListener("click",()=>location.reload())

function checkanswer (useranswer){
    const correctanswer = quizedata[currentquestion].answer;
    if (useranswer===correctanswer) {
        background.style.backgroundColor="rgb(63, 189, 65)";
        currentscore++;        
    }else{
        background.style.backgroundColor="rgb(245, 46, 46)";
        
    }
    currentquestion++;
     if (currentquestion<quizedata.length){
        questionElements.textContent=quizedata[currentquestion].question;
        score.textContent="Score: "+currentscore;
     }
     else{
        questionElements.textContent = `Quiz complete! Your final score is ${currentscore}/${quizedata.length}`;
        score.textContent="Score: "+currentscore;
        background.style.backgroundColor="";
        truebtn.style.display = "none";
        falsebtn.style.display = "none";
     }
}


console.log("it was conneted")