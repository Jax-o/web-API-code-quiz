// declare variables
var startButton = document.querySelector("#start-button");
var mainContent = document.querySelector("#content");
var timerEl = document.getElementById('countdown');
var questions = document.querySelector('#questions');
var choices = document.querySelector('#choices');
var instructions = document.querySelector('#instructions');
var finished = document.querySelector('#finihsed');
var done = document.querySelector('#done');
var currentQuestion = 0;
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
	instructions.style.display = 'none'
	countdown();
	quizSelection();
}

function quizSelection() {
	mainContent.style.display = 'block'
	questions.innerHTML = quizQuestions[currentQuestion].questionTitle;
	choices.innerHTML = '';
	for (var i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
		console.log('each answer', quizQuestions[currentQuestion].answers[i]);
	document.createElement("button")
	answerBtn = document.createElement("button");
	answerBtn.textContent = quizQuestions[currentQuestion].answers[i];
	answerBtn.addEventListener('click', function (event) {
	answerBtn.style.display = 'list-item'
	checkAnswers(event.target.innerText);	
	})
	choices.appendChild(answerBtn);
	}
}
function checkAnswers(answerClicked) {
	if (quizQuestions[currentQuestion].answer === answerClicked) {
		alert('Correct')
	} else {
		alert('incorrect')
	}
	currentQuestion++
	quizSelection();
}

	
function allDone() {
	finished.style.display = 'none'
	done.innerHTML = ''
	document.createElement("button")
	doneBtn = document.createElement("button");
	doneBtn.textContent = "All Done"
	doneBtn.style.display = 'list-item'
	done.appendChild(doneBtn);
	doneBtn.addEventListener("click", function () {
	allDone();
		
})}	