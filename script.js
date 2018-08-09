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
var pickedColor = colors[5];

for(var i = 0; i < squares.length; i++){
	//set initial color
	squares[i].style.backgroundColor = colors[i];
	//add eventListener
	squares[i].addEventListener("click", function(){
		//colorDisplay.style.color = this.style.backgroundColor;
		//colorDisplay.textContent = this.style.backgroundColor;
		clickedColor = this.style.backgroundColor; 

		if(pickedColor === clickedColor)
			alert("You are right");
		else
			alert("Tye again");
	});
}
colorDisplay.textContent = pickedColor;
colorDisplay.style.color = pickedColor;