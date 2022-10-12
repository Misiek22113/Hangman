// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let verbs = ["java", "python", "swift", "javascript"];
let gameInfo = { hearts: 8};
let alphabet = Array();
let player = { wins: 0, lost: 0};

function checkIfIs(letter, game){
  return game.indexOf(letter) !== -1 || alphabet.indexOf(letter) !== -1;
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function checkLower(str){
  return str.charAt(0) === str.charAt(0).toLowerCase();
}

function checkLetter(letter, answer, game){
  let index = 0;
  while(answer.indexOf(letter, index) !== -1){
    game[answer.indexOf(letter, index)] = answer[answer.indexOf(letter, index)];
    index++;
  }
  if(index === 0){
    console.log("That letter doesn't appear in the word.");
    alphabet.push(answer);
    gameInfo.hearts -= 1;
  }

}

console.log("H A N G M A N\n");

while(1){
  let option = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ');

  if(option === `play`){
    let choice = Math.floor(Math.random()*verbs.length);

    let game = Array(verbs[choice].length);

    game.fill("-");

    console.log(game.join(''));


    while(gameInfo.hearts !== 0){
      console.log("Input a letter:")

      let ans = input();

      if(ans.length > 1){
        console.log("Please, input a single letter.");
        continue;
      }
      else if(!checkLower(ans) || !isLetter(ans)){
        console.log("Please, enter a lowercase letter from the English alphabet.");
        continue;
      }
      else if(checkIfIs(ans, game) === true){
        console.log("You've already guessed this letter.");
        continue;
      }
      else{
        checkLetter(ans, verbs[choice], game);
      }

      if(gameInfo.hearts === 0) {
        console.log("You lost!");
        player.lost++;
        break;
      }
      else if(game.join('') === verbs[choice]){
        console.log(`You guessed the word ${verbs[choice]}!`);
        player.wins++;
        break;
      }

      console.log(game.join(''));
    }
  }
  else if(option === `results`){
    console.log(`You won: ${player.wins} times\nYou lost: ${player.lost} times.`);
  }
  else if(option === `exit`){
    process.exit();
  }

}

