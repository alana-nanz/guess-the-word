//Unordered list where the player's guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters"); 
//Guess! Button
const buttonGuess = document.querySelector(".guess");
//Text input to guess a letter
const letterInput = document.querySelector(".letter");
//Word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//Remaining guesses paragraph
const remainingGuesses = document.querySelector(".remaining");
//Span with number of remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
//Messages when player guesses a letter
const message = document.querySelector(".message");
//Button prompting player to play again
const buttonAgain = document.querySelector(".play-again");

//Test word
const word = "magnolia";

//Display placeholder circle symbols for each letter in word
const placeholder = function () {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

buttonGuess.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});