'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When user does not enter anything
  if (!guess) {
    displayMessage('⛔️ Nu ai introdus numarul!');

    // When user guesses the number and WINS
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Numar corect!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '60rem';
    document.querySelector('.score').value = score;

    // Highscore

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    //When number is wrong:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? '📈 Numarul e prea mare'
      //     : '📉 Numarul e prea mic';
      displayMessage(
        guess > secretNumber
          ? '📈 Numarul e prea mare'
          : '📉 Numarul e prea mic'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // Old method - longer - Not DRY

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Numarul e prea mare';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 Ai pierdut!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When number is smaller
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Numarul e prea mic';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //     // When user loses game
  //   } else {
  //     document.querySelector('.message').textContent = '😭 Ai pierdut!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Incepe sa ghicesti...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
