var questionContainer = document.getElementById('questions');
var answersContainer = document.getElementById('answers');
var gradeButton = document.getElementById('grade');
var quizQuestions = [
{
question:"javascript is a ______ language?",
answers:{
a:'english',
b:'dead',
c:'object-oriented'
},
correctAnswer:'c'
},
{
question:"how can a datatype be declared to be a constant type?",
answers:{
a:'const',
b:'by asking your computer nicely',
c:'var'
},
correctAnswer:'a'
},
{
question:"what does the toLocateString() medthod do in JS?",
answers:{
a:'orders a 6 piece mcnugget happy meal',
b:'returns a localized string representation of an object',
c:'prints the entire script for Srek 2 on the nearest printer'
},
correctAnswer:'b'
}
];

function startTimer() {
  totalTimeInterval = setInterval(function() {
  totalTime--;
  displayTime();
  checkTime();
  }, 1000);
}

generateQuiz(quizQuestions, questionContainer, answersContainer, gradeButton);

function generateQuiz(questions, questionContainer, answersContainer, gradeButton){
function showQuestions(questions, questionContainer){
var output = [];
var answers;

startTimer();

for(var i=0; i<questions.length; i++){       
answers = [];
for(letter in questions[i].answers){
answers.push(
    '<label>'
    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
    + letter + ': '
    + questions[i].answers[letter]
    + '</label>'
);
}
output.push(
  '<div class="question">' + questions[i].question + '</div>'
  + '<div class="answers">' + answers.join('') + '</div>'
);
}
questionContainer.innerHTML = output.join('');
}

function showAnswers(questions, questionContainer, answersContainer){
var answerContainers = questionContainer.querySelectorAll('.answers');
var userAnswer = '';
var numCorrect = 0;

for(var i=0; i<questions.length; i++){
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
if(userAnswer===questions[i].correctAnswer){
  numCorrect++;
    answerContainers[i].style.color = 'blue';
}
  else{
  answerContainers[i].style.color = 'pink';
  }
}
  answersContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
  showQuestions(questions, questionContainer);
  gradeButton.onclick = function(){
    showAnswers(questions, questionContainer, answersContainer);
  }
}