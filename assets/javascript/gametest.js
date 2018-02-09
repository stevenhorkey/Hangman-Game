// Game=============================================

// Sets userWins to html #user-wins
var userWins = document.getElementById("user-wins");
// Sets userWins to html #current-word
var currentWord = document.getElementById("current-word");
// Sets userWins to html #user-guess
var userGuess = document.getElementById("user-guess");
// Sets userWins to html #guess-remain
var guessRemain = document.getElementById("guess-remain");

// Sets band info for different games
var bands = {
    hendrix : {
        name:'hendrix', 
        solution:['h','e','n','d','r','i','x'],
    },
    santana : {
        name:'santana', 
        solution:['s','a','n','t']
    },
    beatles : {
        name:'beatles', 
        solution:['b','e','a','t','l','s']
    },
}

var chosenBand = "";
var currentBandGuess = [];
var blanks = 0;
var blanksAndCorrects = [];
var guessedLetters = [];

var winCounter = 0;
var lossCounter = 1;
var guessCounter = 10;

// Alphabet array used to compare user input
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function startGame() {
    currentBandGuess = [];
    guessedLetters = [];
    guessCounter = 10;
    
    for(var i = 0; i < blanks; i++){
        blanksAndCorrects.push("_");
    }
    currentWord.innerHTML = blanksAndSuccesses.join(" ");
    guessRemain.innerHTML = numGuesses;
}

function checkIfLetter() {

    if(!guessedLetters.includes(userInput)) {
        guessedLetters.push(userInput);
        userGuess.innerHTML = guessedLetters;
    } 
    
    for(i = 0; i < band.name.length; i ++) {
        if (userInput === band.name[i] && !currentBandGuess.includes(band.name[i])) {
            currentBandGuess.push(band.name[i]);                    
            console.log(currentBandGuess);
        }
    }
}

function gameComplete() {
    // Checks if input is a correct guess and if so, adds it to currentBandGuess array to compare later to full solution. If the correct guess has already been guessed, than nothing is appended to currentBandGuess
    
}

