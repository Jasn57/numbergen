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

    if (guess < targetNumber) {
        result.innerText = "Too low, try again.";
    } else if (guess > targetNumber) {
        result.innerText = "Too high, try again.";
    } else {
        result.innerText = "You guessed the number!";
        attemptsDisplay.innerText = `You guessed it in ${attempts} attempts.`;
       
        setTimeout(() => {
            targetNumber = Math.floor(Math.random() * 10) + 1;
            attempts = 0;
            document.getElementById('guess').value = '';
            result.innerText = '';
            attemptsDisplay.innerText = '';
        }, 3000); 
    }

    attemptsDisplay.innerText = `Attempts: ${attempts}`;
}
