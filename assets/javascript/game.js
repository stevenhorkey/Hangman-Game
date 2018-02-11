// Game=============================================

// Sets userWins to html #user-wins
var userWins = document.getElementById("user-wins");
// Sets userWins to html #user-wins
var userLosses = document.getElementById("user-losses");
// Sets userWins to html #user-wins
var userWins = document.getElementById("user-wins");
// Sets userWins to html #current-word
var currentWord = document.getElementById("current-word");
// Sets userWins to html #user-guess
var userGuess = document.getElementById("user-guess");
// Sets userWins to html #guess-remain
var guessRemain = document.getElementById("guess-remain");

// Sets band info for different games
var bands = ['hendrix', 'santana','beatles','who','pinkfloyd','kingcrimson','gratefuldead','rollingstones','cream','ledzeppelin']

// Alphabet array used to compare user input
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Initializing variables and arrays
var wins = 0;
var losses = 0;
var guessedLetters = [];
var correctGuess = [];
var guessCount = 0;
var band = "";
var lettersInBand = [];
var underScores = 0;

// Function to pick a band/word, insert blanks on screen, and prepare for next functions.
function startGame() {

    guessedLetters = [];
    correctGuess = [];

    band = bands[Math.floor(Math.random() * bands.length)];
    lettersInBand = band.split("");
    underScores = lettersInBand.length;

    for(var i = 0; i < underScores; i++){
        correctGuess.push("_");
    }

    guessCount = band.length + 3;
    currentWord.innerHTML = correctGuess.join(" ");
    guessRemain.innerHTML = guessCount;

};

// Checks if userInput is letter, lowers guess count remaining, and checks if letter is in band/word. If it is, it is then pushed to a correct guess array where it is displayed on screen.
function checkLetter(userInput) {  

    if (letters.includes(userInput.toLowerCase())){

        if(!guessedLetters.includes(userInput)) {
            guessedLetters.push(userInput);
            guessCount-- ;
            userGuess.innerHTML = guessedLetters;
        }
    
        var lettersInWord = false;

        for(var i = 0; i < underScores; i++){
            if(band[i] === userInput){
                lettersInWord = true;

            }
        }

        if(lettersInWord){
            for(i = 0; i < underScores; i++){
                if(band[i] === userInput){
                correctGuess[i] = userInput;
                }
            }
        }
    }
};

// Displays remaining info on screen for user. Checks if word/band is complete and if is, win count goes up. If not, game restarts and loss count goes up. 
function checkWin() {
   
   currentWord.innerHTML = correctGuess.join(" ");
   userGuess.innerHTML = guessedLetters.join(" ");
   guessRemain.innerHTML = guessCount;

    setTimeout(function(){
    if(lettersInBand.join(" ") === correctGuess.join(" ")){
        wins++;
        alert("You win!!");
        userWins.innerHTML = wins;
        startGame();
    } else if(guessCount <= 0){
        losses++;
        userLosses.innerHTML = losses;  
        userGuess.innerHTML = "";
        alert("You don't have any more guesses. Starting you OVER DUDE!!!");      
        startGame();
    }}, 500);
};


// Running the functions and games. Runs through all each time key is pressed. 
startGame()
document.onkeyup = function(event) {
    
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(userInput);
    checkWin();
            
           
};
    

