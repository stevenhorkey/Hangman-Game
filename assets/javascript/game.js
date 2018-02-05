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
var bands = {
    hendrix : {name:'hendrix', solution:['h','e','n','d','r','i','x']},
    santana : {name:'santana', solution:['s','a','n','t']},
    beatles : {name:'beatles', solution:['b','e','a','t','l','s']},
}

var jimi = bands.hendrix;
var carlos = bands.santana;
var fabFour = bands.beatles;

// Alphabet array used to compare user input
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Sets initial score to 0
var wins = 0;
var won = false;
// Sets word value on screen from array words

console.log(bands.name);
// Sets empty arrays for use later
var guessedLetters = [];
var currentBandGuess = [];
    

function gameSelection(band) {
    currentWord.textContent = band.name;
    console.log(band.name);
    // Sets available guesses to string length
    var guessCount = band.name.length + 1;
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
                if (guessRemain.textContent > 1 ) {
                guessRemain.textContent = guessRemain.textContent - 1;
                } else {
                    var retry = confirm("SOOOORRY! You failed :( Want to try again?")
                    if (retry) {
                        location.reload();
                    }
                }
            } 
    
            for(i = 0; i < band.solution.length; i ++) {
                if (userInput === band.solution[i] && !currentBandGuess.includes(band.solution[i])) {
                    currentBandGuess.push(band.solution[i]);
                    console.log(currentBandGuess);
                } else {
                    console.log('already includes');
                }
            }
                
            if (band.solution.length === currentBandGuess.length) {
                console.log('winning');
                userWins.textContent = wins + 1;
            }
        }
    }
}


gameSelection(jimi)



    



    

// Chooses a random band objcet for the game goal and sets it equall to variable word.
// var word = words.hendrix;
// var random = Math.floor(Math.random() * 3)
// if(random === 0) {
//     word = words.hendrix;
// } else if(random === 1) {
//     word = words.santana;
// } else {
//     word = words.beatles;
// }



// // Sets a new word for next game
// function wordChoice() {
//     var words = ['hendrix', 'santana', 'beatles'];
//     var word = words[Math.floor(Math.random() * words.length)];
//     console.log(word)
// }