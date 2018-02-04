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
var words = {
    hendrix : {name:'hendrix', solution:['h','e','n','d','r','i','x']},
    santana : {name:'santana', solution:['s','a','n','t']},
    beatles : {name:'beatles', solution:['b','e','a','t','l','s']},
}

// Chooses a random band objcet for the game goal and sets it equall to variable word.
var word = words.hendrix;
// var random = Math.floor(Math.random() * 3)
// if(random === 0) {
//     word = words.hendrix;
// } else if(random === 1) {
//     word = words.santana;
// } else {
//     word = words.beatles;
// }



// Alphabet array used to compare user input
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Sets initial score to 0
var wins = 0;
// Sets word value on screen from array words
currentWord.textContent = word.name;
console.log(word.name);
// Sets empty arrays for use later
var guessedLetters = [];
var currentBandGuess = [];
    
// Sets available guesses to string length
var guessCount = word.name.length;
// Displays intial guesses remaining
guessRemain.textContent = guessCount;

document.onkeyup = function(event) {
    // Sets variable userInput  equall to key released
    var userInput = event.key;
    // Makes all inputs lowercase
    userInput = userInput.toLowerCase();    
        
    // Tests to make sure input is a letter
    if (letters.includes(userInput)){
        // Alerts in the console which key was pressed
        console.log(userInput + " was pressed!")
       
        // Checks if the user input is already in guessedLettesr array and if not, appends it.
        if(!guessedLetters.includes(userInput)) {
            guessedLetters.push(userInput);
            userGuess.textContent = guessedLetters;
            if (guessRemain.textContent > 1) {
            guessRemain.textContent = guessRemain.textContent - 1;
            } else {
                var retry = confirm("SOOOORRY! You failed :( Want to try again?")
                if (retry) {
                    location.reload();
                }
            }
        } 

        for(i = 0; i < word.solution.length; i ++) {
            if (userInput === word.solution[i] && !currentBandGuess.includes(word.solution[i])) {
                currentBandGuess.push(word.solution[i]);
                console.log(currentBandGuess);
            } else {
                console.log('already includes');
            }
        }
            
        if (word.solution.length === currentBandGuess.length) {
            console.log('winning');
            userWins.textContent = wins + 1;
        }
    }
}

    



    



    




// // Sets a new word for next game
// function wordChoice() {
//     var words = ['hendrix', 'santana', 'beatles'];
//     var word = words[Math.floor(Math.random() * words.length)];
//     console.log(word)
// }