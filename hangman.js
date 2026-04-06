const possibleWords = ["obdurate", "verisimillitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var word = "";
var guesses = "";
var guessCount;
const MAXGUESS = 6;

let newGame = function () {
    guessCount = MAXGUESS;
    let randomIndex = parseInt(Math.random() * possibleWords.length);
    word = possibleWords[randomIndex];
    guesses = "";
    let button = document.getElementById("button");
    button.hidden = false;
    let input = document.getElementById("guess");
    input.hidden = false;

    updatePage();
}

let updatePage = function () {
    let input = document.getElementById("guess");
    let button = document.getElementById("button");
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        } else {
            clueString += "_ ";
        }

    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    if (clueString.indexOf("_") == -1) {
        guessArea.textContent = "You won!";
        button.hidden = true;
        input.hidden = true;
    } else if (guessCount === 0 && clueString.indexOf("_") >= 0) {
        guessArea.textContent = "You lost!";
        button.hidden = true;
        input.hidden = true;
    } else {
        guessArea.textContent = "Guesses: " + guesses;
    }


    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;

}

let guessLetter = function () {
    let input = document.getElementById("guess");
    let letter = input.value;
    if (word.indexOf(letter) < 0 && guesses.indexOf(letter) <0) {
        guessCount--;
    }
    letter = letter.toLowerCase();
    if (guesses.indexOf(letter) <0){
        guesses += letter;
    }
    input.value = "";
    updatePage();

}

//do not let ppl guess same letter the time