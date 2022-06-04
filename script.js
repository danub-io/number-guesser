let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generate random number between 0 and 9
const generateTarget = () => {
    secretTargetNumber = Math.floor(Math.random() * 10);
    return secretTargetNumber;
};

//Generate random number between 0 and 9
const generateHumanTarget = () => {
    secretHumanNumber = Math.floor(Math.random() * 10);
    return secretHumanNumber;
};

//Generate random number between 0 and 9
const generateComputerTarget = () => {
    secretComputerNumber = Math.floor(Math.random() * 10);
    return secretComputerNumber;
};

//Compares human, computer and random numbers
function compareGuesses(guessOne, guessTwo, guessThree) {
    guessOne = generateTarget();
    guessTwo = generateHumanTarget();
    guessThree = generateComputerTarget();
    humanDif = Math.abs(guessOne - guessTwo);
    computerDif = Math.abs(guessOne - guessThree);

    // console.log(guessOne);
    // console.log(guessTwo);
    // console.log(humanDif);
    // console.log(guessThree);
    // console.log(computerDif);

    if (humanDif < computerDif) {
      winnerString = 'human wins';
      return true
    } else {
      winnerString = 'computer wins';
      return false
    } 
};

const updateScore = () => {
    if (compareGuesses() === true) {
        humanScore++;
        return winnerString;     
    } else { 
        computerScore++;
        return winnerString;
    };
}; 

const advanceRound = () => 
    currentRoundNumber++
  
