var colors;
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var msg = document.querySelector("#message");
var pickedColor = 0;
var clickedColor = 0;
var restart = document.querySelector("#restart");
var header = document.querySelector("h1");
var stripe = document.querySelector("#stripe");
var easyBtn = document.querySelector("#easyBtn");
var midBtn = document.querySelector("#midBtn");
var hardBtn = document.querySelector("#hardBtn");
var BACKGROUND_COLOR = "#232323";
var STRIPE_COLOR = "white";
var HEADER_COLOR = "steelblue";

easyBtn.levelNum = 3;
midBtn.levelNum = 6;
hardBtn.levelNum = 9;

var level = 6;
var btn = [easyBtn, midBtn, hardBtn];

resetGame(6);
for(var i = 0; i < btn.length; i++){
	btn[i].addEventListener("click", function(){
		if(!this.classList.contains("selected")){
			removeBtnSelect();
			this.classList.add("selected");
			level = this.levelNum;
			resetGame(level);
		}
	})
}
for(var i = 0; i < squares.length; i++){
	//add eventListeners
	squares[i].addEventListener("click", function(){
		clickedColor = this.style.backgroundColor; 
		console.log(this.style.backgroundColor);
		if(pickedColor === clickedColor){	
			//if guess right
			msg.textContent = "Correct!";
			changeColorAll(pickedColor);
		}
		else{
			msg.textContent = "Try Again";
			this.style.backgroundColor = BACKGROUND_COLOR;
		}
	});
}
restart.addEventListener("click", function(){
	for(var i = 0; i < btn.length; i++){
		if(btn[i].classList.contains("selected"))
			resetGame(btn[i].levelNum);
	}
});

function removeBtnSelect(){
	var btn = [easyBtn, midBtn, hardBtn];
	for(var i = 0; i < btn.length; i++){
		if(btn[i].classList.contains("selected"))
			btn[i].classList.remove("selected");
	}
}

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function resetGame(num){
	msg.textContent = "";
	stripe.style.backgroundColor = STRIPE_COLOR;
	header.style.backgroundColor = HEADER_COLOR;
	colors = generateRandColor(num);
	for(var i = 0; i < num; i++)
		squares[i].style.backgroundColor = colors[i];
	for(var i = num; i < squares.length; i++)
		squares[i].style.backgroundColor = BACKGROUND_COLOR;
	pickedColor = pickColor(num);
	colorDisplay.textContent = pickedColor;
	colorDisplay.color = pickedColor;
}

function pickColor(num){
	//pick a random color from the generated color array
	return colors[getRandomInt(num)];
}

function generateRandColor(num){
	var arr = [];
	for(var i = 0; i < num; i++)
		arr.push(generateSingleColor());
	return arr;
}

function generateSingleColor(){
	var RGB_MAX = 256;
	var r = getRandomInt(RGB_MAX);
	var g = getRandomInt(RGB_MAX);
	var b = getRandomInt(RGB_MAX);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColorAll(color){
	header.style.backgroundColor = color;
	for(var i = 0; i < level; i++)
		squares[i].style.backgroundColor = color;
	for(var i = level; i < squares.length; i++)
		squares[i].style.backgroundColor = BACKGROUND_COLOR;
}