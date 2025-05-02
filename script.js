const choices = document.querySelectorAll('.choice');
const userScoreDiv = document.getElementById('user-score');
const computerScoreDiv = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');

let userScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
};

const getResultMessage = (user, comp) => {
  if (user === comp) return "It's a Draw!";
  if (
    (user === 'rock' && comp === 'scissors') ||
    (user === 'paper' && comp === 'rock') ||
    (user === 'scissors' && comp === 'paper')
  ) {
    userScore++;
    return `You Win! ${user} beats ${comp}`;
  } else {
    computerScore++;
    return `You Lose! ${comp} beats ${user}`;
  }
};

const playGame = (userChoice) => {
  const compChoice = getComputerChoice();
  const resultText = getResultMessage(userChoice, compChoice);
  userScoreDiv.textContent = userScore;
  computerScoreDiv.textContent = computerScore;
  resultDiv.textContent = resultText;
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('data-choice');
    playGame(userChoice);
  });
});
