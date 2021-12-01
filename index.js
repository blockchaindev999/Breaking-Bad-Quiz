var rls = require('readline-sync');
var playerName = rls.question("What is your name?");
console.log("Welcome to Breaking Bad Quiz " + playerName + "!!!");


var questions = [{
  question: "Jesse’s girlfriend Andrea has a son. What’s his name?\n1.Bill\n2.Brock\n3.Buck\n4.Bob\n",
  answer: 2},
  {
  question: "Saul’s birth name was…\n1.Jimmy McKay\n2.Jimmy McCormick\n3.Jimmy O'Connor\n4.Jimmy McGill\n",
  answer: 4},
  {
  question: "What’s Jesse’s old dream?\n1.To be an artist\n2.To be a chef\n3.To be a professional video gamer\n4.To be a surfer\n",
  answer: 1},
  {
  question: "What’s Walt’s middle name?\n1.Hartley\n2.Harvard\n3.Hartwell\n4.Harvey\n",
  answer: 3},
  {
  question: "What street do Walt and Skyler live on?\n1.Muerto Parkway\n2.Negra Arroyo Lane\n3.Rio Blanco Avenue\n4.Calle Ocho\n",
  answer: 2}]

var playerAnswer;
var score = 0;
  
for(var i=0; i<=questions.length-1; i++){
  playerAnswer = rls.question(questions[i].question);
  if(playerAnswer == questions[i].answer){
    console.log("Right answer!!!"); 
    score++;
  }
  else
    console.log("Wrong answer!!!");
  console.log("Your current score is " + score*10 + "\n---------------------------------------");
}

console.log("Congratulations!!! Your final score is " + score*10);
