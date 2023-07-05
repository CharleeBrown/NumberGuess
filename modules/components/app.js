var guessCount = 0;
var posCount = 0;

function randMake(max) {
  return Math.floor(Math.random() * max);
}

function getSecretNum() {
  const arrayAmt = 4;
  var x = 0;
  var holdNum;
  var randHold = [];
	
  while (x < arrayAmt) {
    holdNum = randMake(10);

    if (randHold.includes(holdNum)) {
      holdNum = randMake(11);
    } else {
      randHold.push(holdNum);
      x++;
    }
  }

  console.log(randHold);
  return randHold;
}

function checkGuess(guess, randHold) {
  console.log(guess);
  console.log("Rand- " + randHold);
  let guessCount = 0;
  let posCount = 0;

  for (let i = 0; i < guess.length; i++) {
    if (randHold.includes(guess[i])) {
      guessCount += 1;
    }
  }

  for (let i = 0; i < randHold.length; i++) {
    if (randHold[i] === guess[i]) {
      posCount += 1;
    }
  }

  return {
    guessCount: guessCount,
    posCount: posCount
  };
}

console.log(checkGuess([1, 3, 4, 5], getSecretNum()));