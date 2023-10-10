let secretNumber = Math.floor(Math.random() * 10) +1;
let userInput = parseInt(prompt(`Guess the secret number between 1 & 10`));

if (userInput === secretNumber){
    document.getElementById('result').innerHTML = `<p class="result">Congratulations! You guessed the secret Number: ${secretNumber}</p>`;  
} else {
    document.getElementById('result').innerHTML = `<p class="result">Sorry, the secret number was ${secretNumber}</p>`;
}