var colors = ["rgb(255, 0, 0)", 
"rgb(0, 255, 0)", 
"rgb(0, 255, 255)",
"rgb(0, 255, 100)",
"rgb(255, 255, 0)",
"rgb(255, 100, 180)"
];

var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var clickedColor = 0;
var colorInd = getRandomInt(6);
var pickedColor = colors[colorInd];

for(var i = 0; i < squares.length; i++){
	//set initial color
	squares[i].style.backgroundColor = colors[i];
	//add eventListener
	squares[i].addEventListener("click", function(){
		//colorDisplay.style.color = this.style.backgroundColor;
		//colorDisplay.textContent = this.style.backgroundColor;
		clickedColor = this.style.backgroundColor; 

		if(pickedColor === clickedColor){
			alert("You are right");
			colorInd = getRandomInt(6);
			resetGame();
			pickedColor = colors[colorInd];
			colorDisplay.textContent = pickedColor;
		}
		else
			this.style.backgroundColor = "#232323";
	});
}
colorDisplay.textContent = pickedColor;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function resetGame(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

	}
}