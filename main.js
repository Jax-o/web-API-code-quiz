var startButton = document.querySelector("#start-button");
var mainContent = document.querySelector("#content");
var choices = document.querySelector("choices");

var listEl = document.createElement('ol');

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = 'scripting'
li2.textContent = 'script'
li3.textContent = 'javascript'
li4.textContent = 'js'


var quizQuestions = [
	{
		questionTitle: 'Inside which HTML element do you put the JavaScript?',
		answers: ['scripting', 'script', 'javascript', 'js'],
	},
	

	{	
		questionTitle: 'How do you call a function named myFunction',
		answers: ['myFunction()', 'call function myFunction()', 'call myFunction()', 'call Function'],
	},
	
	{
		questionTitle: 'What does HTML stand for',
		answers: ['Hperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Model Language'],
	},
	
	{
		questionTitle: 'What does CSS stand for',
		answers: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
	},
]

startButton.addEventListener("click", function() {
mainContent.innerHTML = (quizQuestions[0].questionTitle + 
	listEl.appendChild(li1));
	listEl.appendChild(li2);
	listEl.appendChild(li3);
	listEl.appendChild(li4);

});