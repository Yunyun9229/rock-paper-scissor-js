let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//caching the DOM, storing sth for future use
//good for performace, don't need to run the process to get that refernce point everytime

//Helper Functions
function getComputerChoice() {
   const choices = ["r", "p", "s"];
   const randomNum = Math.floor(Math.random() * 3);
   return choices[randomNum];
}

function convertLetterToWord(letter) {
   if (letter === "r") return "Rock";
   if (letter === "p") return "Paper";
   if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = `${convertLetterToWord(userChoice)} 
       beats 
      ${convertLetterToWord(computerChoice)}.  You Win!`;
}

function lose(userChoice, computerChoice) {
   computerScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = `${convertLetterToWord(
      userChoice
   )} doesn't beat ${convertLetterToWord(computerChoice)}. You Lose!`;
}

function draw(userChoice, computerChoice) {
   return (result_p.innerHTML = `It's a draw.`);
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
         win(userChoice, computerChoice);
         break;
      case "rp":
      case "ps":
      case "sr":
         lose(userChoice, computerChoice);
         break;
      case "rr":
      case "pp":
      case "ss":
         draw(userChoice, computerChoice);
         break;
   }
}

function main() {
   rock_div.addEventListener("click", function () {
      game("r");
   });

   paper_div.addEventListener("click", function () {
      game("p");
   });

   scissor_div.addEventListener("click", function () {
      game("s");
   });
}

main();
