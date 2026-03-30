const possibleWords = ["obdurate", "verisimillitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var randomIndex = parseInt(Math.random()*possibleWords.length);
var word = possibleWords[randomIndex];

let newGame = function(){
    var randomIndex = parseInt(Math.random()*possibleWords.length);
    var word = possibleWords[randomIndex];

    let clueString = "";
    for (let i = 0; i < word.length; i++){
        clueString += "_ ";
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}