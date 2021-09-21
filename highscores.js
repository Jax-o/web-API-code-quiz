var backButton = document.querySelector("#back");
var clearButton = document.querySelector("#clear");

var score = localStorage.getItem("score");

backButton.addEventListener("click", function() {

	localStorage.setItem("score", score);
	}
 });
 
 clearButton.addEventListener("click", function() {
	localStorage.setItem("score", score);
 });
 
