var guessCount=0;

var userGuess = [];
const guessCountdown = 5;
var countHold = 0;
var testHold;
var randHold = getSecretNum();

var answered = document.getElementById("actualAnswer");
document.getElementById("centerGuessInput").addEventListener("keydown", isNumber);
document.addEventListener("DOMContentLoaded", () => {
    const numberDivs = document.querySelectorAll(".numbers");
    for (const numberDiv of numberDivs) {
      numberDiv.addEventListener("click", () => console.log(numberDiv.innerText)); // Replace console.log with the action you want to perform
    }
  });
//console.log("The secret number is :" +randHold);
var theGuess = document.getElementsByClassName("guessOne");

document.getElementById("centerGuessInput").value = "";


document.addEventListener("DOMContentLoaded", () => {
    const numberDivs = document.querySelectorAll("#numbers");
    for (const numberDiv of numberDivs) {
      numberDiv.addEventListener("click", () => console.log("test")); // Replace console.log with the action you want to perform
    }
  });


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
	var guessedNum = guess.toString();
	var theGuess = document.getElementsByClassName("guessOne");
  
	// Iterate over the input elements with class "guessOne"
	for (var i = 0; i < theGuess.length; i++) {
	  // If the input is empty, fill it with the guessed number and return
	  if (theGuess[i].value === null || theGuess[i].value === "") {
		theGuess[i].value = guessedNum;
		return;
	  }
	}
  
	// If all inputs are filled, return 0
	return 0;
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

	addToGuess(userGuess + "  - Number: "+ correctCount + "  Position:" + posCount);


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
	//console.log("COUNT EXCEEDED");

	answered.value ="ANSWER:" + randHold;

	if (answered.style.visibility === "hidden") {
    answered.style.visibility = "visible";
    answered.style.color = "green";
}

}


}

function isNumber(evt) {
	var charCode = evt.keyCode || evt.which;
	var isNumericKey =
	  (charCode >= 48 && charCode <= 57) || // Top number row
	  (charCode >= 96 && charCode <= 105); // Numpad keys

	if (!isNumericKey && charCode !== 8) {
	  	evt.preventDefault(); // Prevent non-numeric characters
		return false;
	}
	else{
	// If the input is valid, you may want to do something with it
	var guess = document.getElementById("centerGuessInput");
	// console.log(evt.key);
	return true;
	}
}

document.getElementById("bod").addEventListener("keydown", isNumber);

function mainReset(){

	var theGuess = document.getElementsByClassName("guessOne");
	guessCount=0
	countHold = 0;
document.getElementById("centerGuessInput").value = "";

for(var i =0; i< theGuess.length; i++){
	theGuess[i].value = "";
}
randHold = getSecretNum();

if(answered.style.visibility === "visible"){
	answered.style.visibility = "hidden";
}
return randHold;
	//location.reload();
}