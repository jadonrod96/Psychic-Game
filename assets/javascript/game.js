    // Create array for computer choices to choose from
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   // have the computer choose a random letter
    var randomLetter = Math.floor(Math.random() * alphabet.length);
    var computerChoice = alphabet[randomIndex];
    // creating variables to hold whether the user won, or lost, and how many guesses are left.
    var wins = 0;
    var loses = 0;
    var guesses = 10;
    var guessSoFar = [];

    var directionsText = document.getElementById("directions-text");
    var userchoiceText = document.getElementById("wins-text");
    var losesText = document.getElementById("loses-text");

    // adding listener to document keys that are pressed 
    document.onkeypress = function(event) {
    var userGuess = event.key;

    var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
      alert("please enter a letter");
    }
    else {
      console.log(userChoice);
    }
    //reset game when loses
    if (guesses <= 0) {
        loses++;
        document.getElementById("loses").innerHTML = loses++;
        console.log("You lost!");
        alert("You lost!");
        guesses = 10;
        guessSoFar = [];
        document.getElementById("guessSoFar").innerHTML = guessSoFar;
        document.getElementById("guesses").innerHTML = 10;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
      }
      // Compute and document whether user wins or loses
      if (computerChoice === userChoice) {
        console.log("You won!");
        alert("You won!");
        document.getElementById("wins").innerHTML = wins++;
        guessSoFar = [];
        document.getElementById("guessSoFar").innerHTML = guessSoFar;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
        guesses = 10;
        document.getElementById("guesses").innerHTML = 10;
      } else {
        console.log("Guess again!");
        document.getElementById("guesses").innerHTML = guesses--;
        guessSoFar.push(userChoice);
        document.getElementById("guessSoFar").innerHTML = guessSoFar;
      }
  }
