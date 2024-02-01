const variables = ["rock", "paper", "scissors"];

function getComputerChoice(variables) {
  let randomChoice = variables[Math.floor(Math.random() * variables.length)];

  return randomChoice;
}

function gameChoice(playerSelection, computerSelection) {
  if(computerSelection === playerSelection) {
    return 'tie';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'player win';
  } else {
    return 'computer win';
  }
}

function playRound(playerSelection, computerSelection) {
  const result = gameChoice(playerSelection, computerSelection);

  if(result === 'tie') {
    return `It's a tie ${playerSelection} is equal to ${computerSelection}`;
  } else if (result === 'player win') {
    return `You win ${playerSelection} beats ${computerSelection}`;
  } else if (result === 'computer win') {
    return `You lose ${computerSelection} beats ${playerSelection}`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper or scissors:").toLowerCase();
    const computerSelection = getComputerChoice(variables);
    if (playRound(playerSelection, computerSelection) === `It's a tie ${playerSelection} is equal to ${computerSelection}`) {
      console.log(playRound(playerSelection, computerSelection));
    } else if (playRound(playerSelection, computerSelection) === `You win ${playerSelection} beats ${computerSelection}`) {
      playerScore++;
      console.log(playRound(playerSelection, computerSelection));
    } else {
      computerScore++;
      console.log(playRound(playerSelection, computerSelection));
    }
  }

  if (playerScore > computerScore) {
    console.log(`Congratulations, you got ${playerScore} and the computer got ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Game Over, you got ${playerScore} and the computer got ${computerScore}`);
  } else {
    console.log(`It's a tie, you got ${playerScore} and the computer got ${computerScore}`);
  }
}

playGame();
