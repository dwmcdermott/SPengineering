// Array of Questions
var TriviaQuestions = new Array(5)
	// Questions
	TriviaQuestions[0] = "The main sensors present in autonomous vehicles are cameras, INUs, GPS, Lidar and Radar.";
	TriviaQuestions[1] = "Lidar stabs for Light detection and ranging.";
	TriviaQuestions[2] = "GPS stands for Ground Positioning Unit.";
	TriviaQuestions[3] = "GPU stands for Graphical Processing Units.";
	TriviaQuestions[4] = "There are 5 levels of driving automation.";

// Array of Answers - in the same order as the questions
var TriviaAnswers = new Array(5)
	// Answers
    TriviaAnswers[0] = "true";
    TriviaAnswers[1] = "true";
    TriviaAnswers[2] = "false";
    TriviaAnswers[3] = "true";
    TriviaAnswers[4] = "false";

// This tracks if the question has been already asked - because we are asking them in random order
var TriviaAsked = new Array(5)
    // Has question been asked
    TriviaAsked[0] = "no";
    TriviaAsked[1] = "no";
    TriviaAsked[2] = "no";
    TriviaAsked[3] = "no";
    TriviaAsked[4] = "no";

// Variables to track state of the game
// i.e. number questions asked, current correct total and current question
var questionsAsked = 0;
var totalCorrect = 0;
var currentQuestion = 0;
var selectionValid = false;

// Load up first question
setQuestion();

//This function randomly selects a starting question and writes it to the web page
function setQuestion() {
	selectionValid = false; 
	while (selectionValid == false) {
		currentQuestion = Math.floor(Math.random() * 5); //create a random number
		if (TriviaAsked[currentQuestion] == "no") {
			selectionValid = true;
		}
	}
	//write to the page
	document.getElementById("TriviaQuestion").innerHTML = TriviaQuestions[currentQuestion];
	TriviaAsked[currentQuestion] = "yes";
	questionsAsked = questionsAsked + 1;
}

// This function checks the answer the user has chosen and if it is correct, updates correct total
function processAnswer(myAnswer) {
	if (TriviaAnswers[currentQuestion] == myAnswer) {
		// answer correct
		totalCorrect = totalCorrect + 1;
	}
}

// This function checks the answer, updates correct total
// and randomly selects the next question
function checkAnswer() {
	if (document.getElementById("RadioTrue").checked) {
		processAnswer("true");
	}
	else {
		processAnswer("false");
	}
	// get next question if not asked all yet
	if (questionsAsked < 5) {
		setQuestion();
	}
	// final question asked - disable button and show final results
	else {
		alert("Quiz complete! You got " + totalCorrect + " correct out of 5.");
		document.getElementById("ButtonContinue").disabled = true;
	}
	// update totals
	document.getElementById("NumberAsked").innerHTML = questionsAsked;
	document.getElementById("NumberCorrect").innerHTML = totalCorrect;
}