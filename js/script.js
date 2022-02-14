//Unordered list where the player's guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters"); 
//Guess! Button
const buttonGuess = document.querySelector(".guess");
//Text input to guess a letter
const letterInput = document.querySelector(".letter");
//Word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//Remaining guesses paragraph
const remainingGuessesElement = document.querySelector(".remaining");
//Span with number of remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
//Messages when player guesses a letter
const message = document.querySelector(".message");
//Button prompting player to play again
const buttonAgain = document.querySelector(".play-again");

//Test word
const word = "magnolia";
//Guessed Letters 
const guessedLetters = [];

//Display placeholder circle symbols for each letter in word
const placeholder = function (word) {
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
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validate(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validate = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
       message.innerText = "Please enter a letter.";
    }   else if (input.length > 1) {
       message.innerText = "Only enter 1 letter.";
    }   else if (!input.match(acceptedLetter)) {
        message.innerText = "Only enter alpha letters A - Z.";
    }   else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

//replace circle symbols with correctly guessed letters
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
      if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
      } else {
        revealWord.push("●");
      }
    }
    // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
  };
  
  const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
      message.classList.add("win");
      message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
  };