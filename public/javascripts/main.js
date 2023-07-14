var guessCount=0;

var userGuess = [];
const guessCountdown = 5;
var countHold = 0;
var testHold;
var randHold = getSecretNum();

var answered =document.getElementById("actualAnswer");

//console.log("The secret number is :" +randHold);
var theGuess = document.getElementsByClassName("guessOne");

document.getElementById("centerGuessInput").value = "";

for(var i =0; i< theGuess.length; i++){
	theGuess[i].value = "";
}

// Generating a random number
function randMake(max) {
  return Math.floor(Math.random() * max);
}


function getSecretNum() {
	const arrayAmt = 4;
	var numberCount = 0;
	var holdNum;
	var randHold = [];

	// While the amount of numbers is < 4
	while (numberCount < arrayAmt) {
	// Create a random number and assign it to holdNum
		holdNum = randMake(10);

	//If randHold array already includes the recently created number
    if (randHold.includes(holdNum)) {
	//Create a new random number
		holdNum = randMake(11);
    } else {
	//Otherwise add the original number to the randHold array
		randHold.push(holdNum);

	//Increase the numberCount.
		numberCount++;
    }
	}
	return randHold;
}


function addToGuess(guess) {
	//This checks if any of the inputs are empty.
	//If they are, the guess goes into the next empty space from the top.
	var guessedNum = guess.toString();
	var theGuess = document.getElementsByClassName("guessOne");
	var holdOne = theGuess[0];
	var holdTwo = theGuess[1];
	var holdThree = theGuess[2];
	var holdFour = theGuess[3];
	var holdFive = theGuess[4];

	//If the first input is empty
	if (holdOne.value === null || holdOne.value === "") {
		//Enter the guess value into the first input
		holdOne.value = guessedNum;
		}
	  //Repeat for the next four inputs
		else if (holdTwo.value === null || holdTwo.value === "") {
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
	//Increase the guess count
	guessCount++;
	var correctCount = 0;
	var posCount = 0;
	//If the guess count is less than the guessCountdown
	if(!(guessCount>guessCountdown )){
	//The guess attempt is read into the holdGuess variable
	var holdGuess = document.getElementsByClassName("centerGuess")[0].value;
	var newHoldGuess = holdGuess.split('').map(Number);

	//Iterating over the newHoldGuess variable to add it to the userGuess variable
	for(let j=0; j<newHoldGuess.length; j++) {
		userGuess.push(newHoldGuess[j]);
	}

	//Iterating over the answer in the randHold variable
	for(let j=0; j<randHold.length; j++){
		//Iterating over the userGuess variable
			for (let x = 0; x < userGuess.length; x++) {
			//If a number in the guess is also in the answer
				if (randHold[j] === userGuess[x]) {
				//Increase the correct number count
					correctCount += 1;
					break;
	}
}
}
	for (let i = 0; i < randHold.length; i++) {
		for (let x = 0; x < userGuess.length; x++) {
			if (i == x && randHold[i] === userGuess[x]) {
			posCount += 1;
			break;
			}
		}
		}
	//console.log("HERE\'s the guess - " + userGuess);
	addToGuess(userGuess + "  - Number: "+ correctCount + "  Position:" + posCount);
	// console.log(userGuess);
	// console.log("Guesses:"+correctCount);
	// console.log("Pos Correct:"+posCount)
	document.getElementsByClassName("centerGuess")[0].value = "";
	userGuess.length = 0;
	if(correctCount == 4 && posCount ==4){
		console.log("Correct Answer!");
		answered.value ="ANSWER:" + randHold;
		if(answered.style.visibility = "hidden"){
			answered.style.visibility = "visible";
			answered.style.color = "green";
		}
	}
		return {
				correctCount: correctCount,
				posCount: posCount
			};
}
else{
	console.log("COUNT EXCEEDED");

	answered.value ="ANSWER:" + randHold;

	if(answered.style.visibility = "hidden"){
		answered.style.visibility = "visible";
	}

}


}

function isNumber(evt) {
		var charCode = evt.keyCode || evt.which;
		if ((charCode < 48 || charCode > 57) && // Top number row
		(charCode != 8) && (charCode < 96 || charCode > 105)){ // Numpad keys{
			evt.preventDefault(); // Prevent non-numeric characters
			//console.log(charCode);
			return false;
		}
		return true;
}

document.getElementById("centerGuessInput").addEventListener("keydown", isNumber);

function mainReset(){

	var theGuess = document.getElementsByClassName("guessOne");

document.getElementById("centerGuessInput").value = "";

for(var i =0; i< theGuess.length; i++){
	theGuess[i].value = "";
}
randHold = getSecretNum();

if(answered.style.visibility = "visible"){
	answered.style.visibility = "hidden";
}
return randHold;
	//location.reload();
}