const choices = document.querySelectorAll('.choice');
const userScoreDiv = document.getElementById('user-score');
const computerScoreDiv = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');
const playAgainBtn = document.getElementById('play-again');

let userScore = 0;
let computerScore = 0;
let gameOver = false;

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

const checkGameOver = () => {
  if (userScore === 3 || computerScore === 3) {
    gameOver = true;
    const winner = userScore === 3 ? "🎉 You won the game!" : "💀 Computer wins the game!";
    resultDiv.textContent = winner;
    playAgainBtn.style.display = 'inline-block';
    choices.forEach(btn => btn.disabled = true);
  }
};

const playGame = (userChoice) => {
  if (gameOver) return;

  const compChoice = getComputerChoice();
  const resultText = getResultMessage(userChoice, compChoice);
  userScoreDiv.textContent = userScore;
  computerScoreDiv.textContent = computerScore;
  resultDiv.textContent = resultText;

  checkGameOver();
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('data-choice');
    playGame(userChoice);
  });
});

playAgainBtn.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  gameOver = false;
  userScoreDiv.textContent = '0';
  computerScoreDiv.textContent = '0';
  resultDiv.textContent = 'Make your move!';
  playAgainBtn.style.display = 'none';
  choices.forEach(btn => btn.disabled = false);
});

