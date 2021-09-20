
var questionDiv = document.querySelector('#quizQuestions');

var answerDiv = document.querySelector('#quizAnswers');

quizAnswers.addEventListener("click", pickAnswer);

// change questions to JS fundamentals
var quizChoices = [
	{
		question: 'Inside which HTML element do you put the JavaScript',
		selection: ['scripting', 'script', 'javascript', 'js'],
	},
	{
		question: 'How do you call a function named myFunction',
		selection: ['myFunction()', 'call function myFunction()', 'call myFunction()', 'call Function'],
	},
	{
		question: 'What does HTML stand for',
		selection: ['Hperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Model Language'],
	},
	{
		question: 'What does CSS stand for',
		selection: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
	},

];
currentQuestion = 0;
correctAnswers = 0;
