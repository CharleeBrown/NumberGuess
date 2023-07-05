var guessCount = 0;
var posCount = 0;
var userGuess = [];
const guessCountdown = 5;
var countHold = 0;
const randHold = getSecretNum();
var answered =document.getElementById("actualAnswer");
//var guessedNum = guess.toString();
var theGuess = document.getElementsByClassName("guessOne");
document.getElementById("centerGuessInput").value = "";
for(var i =0; i< theGuess.length; i++){
	theGuess[i].value = "";
}
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
function addToGuess(guess) {
	var guessedNum = guess.toString();
	var theGuess = document.getElementsByClassName("guessOne");
	var holdOne = theGuess[0];
	var holdTwo = theGuess[1];
	var holdThree = theGuess[2];
	var holdFour = theGuess[3];
	var holdFive = theGuess[4];
	if (holdOne.value === null || holdOne.value === "") {
		holdOne.value = guessedNum;
	  } else if (holdTwo.value === null || holdTwo.value === "") {
		holdTwo.value = guessedNum;
	  } else if (holdThree.value === null || holdThree.value === "") {
		holdThree.value = guessedNum;
	  } else if (holdFour.value === null || holdFour.value === "") {
		holdFour.value = guessedNum;
	  } else if (holdFive.value === null || holdFive.value === "") {
		holdFive.value = guessedNum;
	  } else {

		return 0;
	}

}
function checkGuess() {

	if(guessCount != guessCountdown ){

	
	var holds = document.getElementsByClassName("centerGuess")[0].value;

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
	console.log("HERE\'s the guess");
	addToGuess(userGuess);
	console.log(userGuess);
	console.log(guessCount);
	document.getElementsByClassName("centerGuess")[0].value = "";
	userGuess.length = 0;
	guessCount++;
}
else{
	console.log("COUNT EXCEEDED");

	answered.value ="ANSWER:" + randHold;
	
	if(answered.style.visibility = "hidden"){
		answered.style.visibility = "visible";
	}
	
}


}

