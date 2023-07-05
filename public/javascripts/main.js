var guessCount = 0;
var posCount = 0;
var userGuess = [];
const guessCountdown = 5;
var countHold = 0;
const randHold = getSecretNum();
function GuessMade(){
	if(countHold =5){
		return "Game Over";
	}
	else{
		countHold++;
	}

}

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

	if(guessCount != guessCountdown || guessCount <guessCountdown){

	guessCount++;
	var holds = document.getElementsByClassName("actualGuess")[0].value;

	userGuess.push(holds);
	
	console.log(userGuess.toString());
	console.log("Rand- " + randHold);
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
	
	// 	return {
    // guessCount: guessCount,
    // posCount: posCount
	// 	};
	console.log(userGuess);
	console.log(guessCount);
	document.getElementsByClassName("actualGuess")[0].value = "";
	userGuess.length = 0;
}
else{
	console.log("COUNT EXCEEDED");
}


}

