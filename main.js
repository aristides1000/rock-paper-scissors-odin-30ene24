const variables = ["rock", "paper", "scissors"];

function getComputerChoice(variables) {
  let randomChoice = variables[Math.floor(Math.random() * variables.length)];

  console.log(randomChoice);
}

getComputerChoice(variables);
