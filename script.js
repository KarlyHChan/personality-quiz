//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var hermioneScore = 0;
var elleScore = 0;
var katnissScore = 0;
var leiaScore = 0;
var result = document.getElementById("result");
var maximum = 0;
var maxCount = 0;
//maxCount is to see if more than one person have had the maximum score and so the quiz is inconclusive

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");



//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", hermione);
q1a2.addEventListener("click", elle);
q1a3.addEventListener("click", leia);
q1a4.addEventListener("click", katniss);

q2a1.addEventListener("click", elle);
q2a2.addEventListener("click", katniss);
q2a3.addEventListener("click", leia);
q2a4.addEventListener("click", hermione);

q3a1.addEventListener("click", katniss);
q3a2.addEventListener("click", leia);
q3a3.addEventListener("click", elle);
q3a4.addEventListener("click", hermione);

q4a1.addEventListener("click", elle);
q4a2.addEventListener("click", katniss);
q4a3.addEventListener("click", hermione);
q4a4.addEventListener("click", leia);

//#TODO: Define quiz functions here
function hermione(){
  hermioneScore += 1;
  questionCount += 1;
  //alert("One point to Hermione!");
  if (questionCount >= 4){
    updateResult();
  }
}

function elle(){
  elleScore += 1;
  questionCount += 1;
  //alert("One point to Elle Woods!");
  if (questionCount >= 4){
    updateResult();
  }
}

function leia(){
  leiaScore += 1;
  questionCount += 1;
  //alert("One point to Princess Leia!");
  if (questionCount >= 4){
    updateResult();
  }
}

function katniss(){
  katnissScore += 1;
  questionCount += 1;
  //alert("One point to Katniss Everdeen!")
  if (questionCount >= 4){
    updateResult();
  }
}

function updateResult(){
  if (hermioneScore > maximum){
    maximum = hermioneScore
  } 
  
  if (elleScore > maximum) {
    maximum = elleScore
  }
  
  if (katnissScore > maximum) {
    maximum = katnissScore
  }
  
  if (leiaScore > maximum) {
    maximum = leiaScore
  }
    
  if (hermioneScore == maximum) {
    maxCount += 1;
    if (maxCount > 1) {
      result.innerHTML = "Hmm... you are a mixture of two characters! Try Again.";
    }
    result.innerHTML = "You are Hermione Granger!";
  }
  
  if (elleScore == maximum) {
    maxCount += 1;
    if (maxCount > 1) {
      result.innerHTML = "Hmm... you are a mixture of " + maxCount + " characters! Try Again.";
    }
    result.innerHTML = "You are Elle Woods!";
  }
  
  if (katnissScore == maximum) {
    maxCount += 1;
    if (maxCount > 1) {result.innerHTML = "Hmm... you are a mixture of two characters! Try Again.";
    }
    result.innerHTML = "You are Katniss Everdeen!";
  }
  
  if (leiaScore == maximum) {
    maxCount += 1;
    if (maxCount > 1) {result.innerHTML = "Hmm... you are a mixture of two characters! Try Again.";
    }
    result.innerHTML = "You are Princess Leia!";
  }
  
}