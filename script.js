// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess').value);
    attempts++;

    let resultText = '';

    if (guess < 1 || guess > 100) {
        resultText = 'Please enter a number between 1 and 100.';
    } else if (guess < randomNumber) {
        resultText = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        resultText = 'Too high! Try again.';
    } else {
        resultText = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('restart').style.display = 'block';
        document.getElementById('submit').disabled = true;
    }

    document.getElementById('result').innerText = resultText;
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('guess').value = '';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('submit').disabled = false;
});
