var readLineSync=require("readline-sync");
var userName=readLineSync.question("What is your name? ");
console.log("Hi "+userName+". Welcome to the MARVEL Quiz");
var score=0;
console.log("You get a point for every correct answer.");
questionOne = {
  question:"Which year was the first Iron Man movie released?",
  answer:"2008"
}
questionTwo = {
  question:"Which avenger did Thor team up with in Thor:Ragnarok?",
  answer:"Hulk"
}
questionThree = {
  question:"In which fictional country is Black Panther set?",
  answer:"Wakanda"
}
questionFour = {
  question:"In which film did Black Widow appear first?",
  answer:"Iron Man 2"
}
questionFive = {
  question:"What is the name of the little boy Tony befriends while stranded?",
  answer: "Harley"
}
var arrquestions=[questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i=0;i<5;i++){
  console.log(arrquestions[i].question);
  var userAnswer=readLineSync.question();
  if(userAnswer===arrquestions[i].answer){
    console.log("right");
    score++;
  }
  else{
    console.log("wrong");
  }
}
console.log("Final Score is: ",score);