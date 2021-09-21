// declare variables
var startButton = document.querySelector("#start-button");
var mainContent = document.querySelector("#content");
var timerEl = document.getElementById('countdown');
var choices = document.querySelector('#choices')
var selectQuestion = 0;
var selectAnswer = 0




// declare quiz array
var quizQuestions = [
	{
		questionTitle: 'Inside which HTML element do you put the JavaScript?',
		answers: ['scripting', 'script', 'javascript', 'js'],
		answer: 'script',
	},


	{
		questionTitle: 'How do you call a function named myFunction',
		answers: ['myFunction()', 'call function myFunction()', 'call myFunction()', 'call Function'],
		answer: 'myFunction()',

	},

	{
		questionTitle: 'What does HTML stand for',
		answers: ['Hperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Model Language'],
		answer: 'Hyper Text Markup Language',
	},

	{
		questionTitle: 'What does CSS stand for',
		answers: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
		answer: 'Cascading Style Sheets',
	},
]



// event listeners

startButton.addEventListener("click", function () {
	startGame()
	} 
);

// answerChoices.addEventListener('click', function () {
// 	answerVerify()
// }

// functions 
function startGame() {
	mainContent.style.display = 'block';
	function countdown() {
		var timeLeft = 10;
	
		var timeInterval = setInterval(function () {
			if (timeLeft > 1) {
				 timerEl.textContent = 'Time: ' + timeLeft;
				timeLeft--;
			} else {
				timerEl.textContent = '';
				clearInterval(timeInterval);
			}
		}, 1000);
	}
	
	countdown();
	quizSelection();
}

function quizSelection() {
	mainContent.style.display = 'block';
	mainContent.innerHTML = quizQuestions[selectQuestion].questionTitle + quizQuestions[selectAnswer].answers

	
}

// function for quizQuestions
// for loop for list items, add event listeners checking the right answer function to answers choices 
// display the question
// function for checking the right answer