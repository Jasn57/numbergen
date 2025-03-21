let targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function submitGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attempts');
    
    if (isNaN(guess) || guess < 1 || guess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }

    attempts++;
    let message = ''; 

    if (guess < targetNumber) {
        message = "Too low, try again.";
    } else if (guess > targetNumber) {
        message = "Too high, try again.";
    } else {
        message = `You guessed the number in ${attempts} attempts!`;
        setTimeout(resetGame, 3000); 
    }

    result.innerText = message;
    attemptsDisplay.innerText = `Attempts: ${attempts}`;
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('attempts').innerText = '';
}
