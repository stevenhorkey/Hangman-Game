// Selects h1 and changes color every 0.75 seconds. 
var headTitle = document.querySelector("h1");
var isPink = false;

setInterval(function() {
    if (isPink) {
        headTitle.style.color = "green";
    } else {
        headTitle.style.color = "hotpink";
    }
    isPink = !isPink;
}, 750);

// Game=============================================
// Sets userWins to html #user-wins
var userWins = document.getElementById("user-wins");
// Sets userWins to html #current-word
var currentWord = document.getElementById("current-word");
// Sets userWins to html #user-guess
var userGuess = document.getElementById("user-guess");
// Sets userWins to html #guess-remain
var guessRemain = document.getElementById("guess-remain");

// Sets a  word for first game
var words = ['hendrix', 'santana', 'beatles'];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word)

var letters = ['']

// Sets initial score to 0
var wins = 0;
userWins.textContent = wins
// Sets remaining guesses to the length of the respective array
// var guessRemain = words[].length;

    var guessedLetters = [];
    var currentBand = [];
    

if(
document.onkeyup = function(event) {

    // Determins which key was pressed
    var userInput = event.key;
    


    // Alerts in the console which key was pressed
    console.log(userInput + " was pressed!")

    var guessCount = word.length + 1;

    guessedLetters.push(userInput);
    userGuess.textContent = guessedLetters;


    for(i = 0; i < word.length; i ++) {
        if (userInput === word[i]) {
            
            currentBand.push(word[i]);
            console.log(currentBand);
            
        } else if(userInput !== word[i]) {
            guessRemain.textContent = guessCount - 1;
        }
    }}


    




// // Sets a new word for next game
// function wordChoice() {
//     var words = ['hendrix', 'santana', 'beatles'];
//     var word = words[Math.floor(Math.random() * words.length)];
//     console.log(word)
// }