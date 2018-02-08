// Game=============================================

// Sets userWins to html #user-wins
var userWins = document.getElementById("user-wins");
// Sets userWins to html #current-word
var currentWord = document.getElementById("current-word");
// Sets userWins to html #user-guess
var userGuess = document.getElementById("user-guess");
// Sets userWins to html #guess-remain
var guessRemain = document.getElementById("guess-remain");

// Sets html elements with underscores to corresponding letter variables to manipulate in js
var letter1 = document.getElementById("letter-one");
var letter2 = document.getElementById("letter-two");
var letter3 = document.getElementById("letter-three");
var letter4 = document.getElementById("letter-four");
var letter5 = document.getElementById("letter-five");
var letter6 = document.getElementById("letter-six");
var letter7 = document.getElementById("letter-seven");

// Sets band info for different games
var bands = {
    hendrix : {name:'hendrix', solution:['h','e','n','d','r','i','x']},
    santana : {name:'santana', solution:['s','a','n','t']},
    beatles : {name:'beatles', solution:['b','e','a','t','l','s']},
}

// Sets variables to use in gameSelection function calls
var jimi = bands.hendrix;
var carlos = bands.santana;
var fabFour = bands.beatles;

// Alphabet array used to compare user input
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Sets initial score
var wins = 2;
// Displays wins on page for use to see
userWins.textContent = wins;

// Sets empty arrays for use later
var guessedLetters = [];
var currentBandGuess = [];
    
function gameSelection(band) {
    console.log(band.name);
    // Sets available guesses to string length
    var guessCount = band.name.length + 3;
    // Displays intial guesses remaining
    guessRemain.textContent = guessCount;
    // Once a key is pressed, this function runs
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
                // Drecreases remaining guesses and once it reaches 0, an alert appears and asks the user if they would like to try again
                if (guessRemain.textContent > 1 ) {
                guessRemain.textContent = guessRemain.textContent - 1;
                } else {
                    var retry = confirm("SOOOORRY! You failed :( Want to try again?")
                    if (retry) {
                        location.reload();
                    }
                }
            } 
            // Checks if input is a correct guess and if so, adds it to currentBandGuess array to compare later to full solution. If the correct guess has already been guessed, than nothing is appended to currentBandGuess
            for(i = 0; i < band.name.length; i ++) {
                if (userInput === band.name[i] && !currentBandGuess.includes(band.name[i])) {
                    currentBandGuess.push(band.name[i]);                    
                    console.log(currentBandGuess);
                    // displays correct letters on screen when pressed
                    if (userInput === band.name[0]) {
                        letter1.textContent = band.name[i];
                    }  
                    if (userInput === band.name[1]) {
                        letter2.textContent = band.name[i];
                    }  
                    if (userInput === band.name[2]) {
                        letter3.textContent = band.name[i];
                    }  
                    if (userInput === band.name[3]) {
                        letter4.textContent = band.name[i];
                    }  
                    if (userInput === band.name[4]) {
                        letter5.textContent = band.name[i];
                    }
                    if (userInput === band.name[5]) {
                        letter6.textContent = band.name[i];
                    }  
                    if (userInput === band.name[6]) {
                        letter7.textContent = band.name[i];
                    } 
                } 
            }
            // Checks if user's correct inputs equals the solution and if so, adds a win to their score. Moves onto next game/page.
            if (band.solution.length === currentBandGuess.length) {
                console.log('win!');
                userWins.textContent = wins + 1;
                var next = confirm("Great Job! You won all three games! Want to start over!!!")
                if (next) {
                    window.location = "index.html";
                }
            }
        }
    }
}

gameSelection(fabFour)