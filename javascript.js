const types = ['grass', 'fire', 'water'];
const winners = [];

function game () {
for (let i = 1; i <= 5; i++) {
   playRound(i);
}
logWins();
}

function playRound (round) {
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
   const winner = declareWinner(playerSelection, computerSelection);
   winners.push(winner);
   logRound(playerSelection, computerSelection, winner, round);
 }

function playerChoice () {
   let input = prompt('Choose Grass, Fire, or Water.');
   while (input == null) {
      input = prompt('Choose Grass, Fire, or Water.');
   }
   input = input.toLowerCase();
   let check = validateInput(input);
   while (check == false) {
      input = prompt('Error! Try again!');
   while (input == null) {
   input = prompt('Error! Try again!');
}
input = input.toLowerCase();
check = validateInput (input);
}
return input;
}


function computerChoice () {
 return types[Math.floor(Math.random()*types.length)];
 }
 
 function validateInput (type) {
   return types.includes(type);
   }
 
function declareWinner (typeP, typeC) {
   if(typeP === typeC){
      return 'Tie';
   } else if (
   (typeP === 'grass' && typeC === 'water') || 
   (typeP === 'fire' && typeC === 'grass')||
   (typeP === 'water' && typeC === 'fire')
   ) 
   {
   return 'You win!';
   } else {
      return 'You lose!';
   }
}

function logWins() {
   let playerWins = winners.filter((item) => item == 'You win!').length;
   let computerWins = winners.filter((item) => item == 'You lose!').length;
   let ties = winners.filter((item) => item == 'Tie').length;
   console.log("Results:");
   console.log("Player Wins:", playerWins);
   console.log("Computer Wins:", computerWins);
   console.log("Tie:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
   console.log("Round:", round);
   console.log("Player Chose:", playerChoice);
   console.log("Computer Chose:", computerChoice);
   console.log(winner);
   console.log("-------------------------------");
 }

game ();
