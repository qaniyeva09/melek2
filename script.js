// script.js
document.addEventListener('DOMContentLoaded', function() {
    const words = ['salam'];
    const scrambleDiv = document.getElementById('scramble');
    const guessInput = document.getElementById('guessInput');
    const checkButton = document.getElementById('checkButton');
    const messagePara = document.getElementById('message');
  
    let currentWord;
  
    function getRandomWord() {
      return words[Math.floor(Math.random() * words.length)];
    }
  
    function scrambleWord(word) {
      return word.split('').sort(() => Math.random() - 0.5).join('');
    }
  
    function displayWordScramble() {
      currentWord = getRandomWord();
      scrambleDiv.textContent = scrambleWord(currentWord);
    }
  
    function checkGuess() {
      const guess = guessInput.value.trim().toLowerCase();
      if (guess === currentWord) {
        messagePara.textContent = 'Correct!';
        messagePara.style.color = 'green';
      } else {
        messagePara.textContent = 'Incorrect. Try again.';
        messagePara.style.color = 'red';
      }
      guessInput.value = '';
      displayWordScramble();
    }
  
    checkButton.addEventListener('click', checkGuess);
  
    displayWordScramble();
  });
  
