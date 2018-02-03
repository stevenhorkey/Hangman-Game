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

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]

// Sets initial score to 0
var wins = 0;
userWins.textContent = wins

currentWord.textContent = word;


    var guessedLetters = [];
    var currentBand = [];
    

document.onkeyup = function(event) {
    var userInput = event.key;
    userInput = userInput.toLowerCase();    
        
    if (letters.includes(userInput)){

        // Alerts in the console which key was pressed
        console.log(userInput + " was pressed!")

        var guessCount = word.length + 1;

        if(!guessedLetters.includes(userInput)) {
            guessedLetters.push(userInput);
            userGuess.textContent = guessedLetters;
        }
        
        for(i = 0; i < word.length; i ++) {
            if (userInput === word[i] && !currentBand.includes(word[i])) {
                currentBand.push(word[i]);
                console.log(currentBand);
            } else if(userInput !== word[i]) {
                // guessCount = guessCount - 1;
                guessRemain.textContent = guessCount - 1;
            } else {
                console.log('already includes');
            
        }
        }
    }
}
    



    




// // Sets a new word for next game
// function wordChoice() {
//     var words = ['hendrix', 'santana', 'beatles'];
//     var word = words[Math.floor(Math.random() * words.length)];
//     console.log(word)
// }