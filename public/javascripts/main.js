var guessCount = 0;
var posCount = 0;
var userGuess = [];
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

function checkGuess() {
	const randHold = getSecretNum();
	var holds = document.getElementsByClassName("actualGuess").value;
	for( var i in holds ){
	userGuess.push(i.value);
	}
	if(userGuess.length <=0){
		return 0;
	}
	else{
	console.log(userGuess);
	console.log("Rand- " + randHold);
	let guessCount = 0;
	let posCount = 0;

	for (let i = 0; i < userGuess.length; i++) {
		if (randHold.includes(userGuess[i])) {
			guessCount += 1;
		}
		}

	for (let i = 0; i < randHold.length; i++) {
		if (randHold[i] === userGuess[i]) {
			posCount += 1;
    }
		}
		return {
    guessCount: guessCount,
    posCount: posCount
		};
	}
}

