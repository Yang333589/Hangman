const possibleWords = ["obdurate", "verisimillitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var word = "";
var guesses = "";
var guessCount;
const MAXGUESS = 6;

let newGame = function(){
    guessCount = MAXGUESS;
    let randomIndex = parseInt(Math.random()*possibleWords.length);
    word = possibleWords[randomIndex];
    guesses = "";

    updatePage();
}

let updatePage = function(){
    let clueString = "";
    for (let i = 0; i < word.length; i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        }else{
            clueString += "_ ";
        }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    if (clueString.indexOf("_") == -1){
        guessArea.textContent = "You won!";
    }else if(guessCount === 0 && clueString.indexOf("_") >= 0){
        guessArea.textContent = "You lost!";
    }else{
        guessArea.textContent = "Guesses: " + guesses;
    }


    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;
    
}

let guessLetter = function(){
    let input = document.getElementById("guess");
    let letter  = input.value;
    if(word.indexOf(letter) < 0){
        guessCount--;
    }
    letter = letter.toLowerCase();
    guesses += letter;
    input.value = "";
    updatePage();

}

//you won and you lost game
//do not let ppl guess same letter the time
//do not let ppl guess before the game starts or after the game ends