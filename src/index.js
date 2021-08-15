const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

/*variable to store score*/
var score=0;

/*Array to store the question and answer*/
var objectArray=[
  {
    query :"What is my nick name? ",
    response:"Dip"
  },
  {
    query :"Tell me my favourite detective character : ",
    response:"Sherlock Holmes"
  },
  {
    query :"Which sports I love most? ",
    response:"Football"
  },
  {
    query :"According to me which is the best TV series ever produced? ",
    response:"Breaking Bad"
  },
  {
    query :"Can you tell me my favourite colour? ",
    response:"Blue"
  }
]

function questionAnswer(query, response){

  let userResponse=readlineSync.question(chalk.bold.yellow(query));
  if(userResponse == response.toLowerCase()){
    score++;
    log(chalk.rgb(19, 84, 37)("Hola! You are right."));
  }
  else{
    log(chalk.bold.red("Oops...WRONG"));
    log(chalk.yellow.white.bold(`The correct answer is ${response} `));
  }
  log(chalk.dim.green(`Current score : ${score}`));
}

function checkAnswer(objectArray){
  log(chalk.italic.bgBlue("Starting your quiz..."+ chalk.underline(" give answer in lowercease")));
  
  log('----------------');
 
  for(let i=0;i<objectArray.length;i++){
    questionAnswer(objectArray[i].query,objectArray[i].response);
    log('----------------');
  }
  log("Game Over and your final score is " + chalk.bold.green(score));

}


var response=readlineSync.question(chalk.yellow("Do you want to play a quiz on me? (YES/NO) "));


if(response.toLowerCase() ==='yes'){
    
    var userName=readlineSync.question(chalk.dim.yellow("May I know your name ? "));
    log("\n");
    log("Welcome " +chalk.bold.yellow(userName)+" !" );
    log("\n");
    checkAnswer(objectArray);
}
else{
    log(chalk.bold.yellow("Avada Kedavra!!!"));
    log(chalk.bold.red("BOOM....vanished"));
    
}



