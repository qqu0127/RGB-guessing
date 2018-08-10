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

easyBtn.levelNum = 3;
midBtn.levelNum = 6;
hardBtn.levelNum = 9;

var levelDict = {"easy": 3, "medium": 6, "hard": 9};
var level = 6;
var btn = [easyBtn, midBtn, hardBtn];

resetGame(6);



easyBtn.addEventListener("click", function(){
	if(!easyBtn.classList.contains("selected")){
		removeBtnSelect();
		easyBtn.classList.add("selected");
		level = 3;
		resetGame(easyBtn.levelNum);
	}
});

midBtn.addEventListener("click", function(){
	if(!midBtn.classList.contains("selected")){
		removeBtnSelect();
		midBtn.classList.add("selected");
		level = 6;
		resetGame(6);
	}
})
hardBtn.addEventListener("click", function(){
	if(!hardBtn.classList.contains("selected")){
		removeBtnSelect();
		hardBtn.classList.add("selected");
		level = 9;
		resetGame(9);
	}
})

for(var i = 0; i < squares.length; i++){
	//add eventListeners
	squares[i].addEventListener("click", function(){
		clickedColor = this.style.backgroundColor; 
		console.log(this.style.backgroundColor);
		if(pickedColor === clickedColor){	
			msg.textContent = "Correct!";
			changeColorAll(pickedColor);
			//resetGame();
		}
		else{
			msg.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});
}
restart.addEventListener("click", function(){
	if(easyBtn.classList.contains("selected"))
		resetGame(3);
	else if(midBtn.classList.contains("selected"))
		resetGame(6);
	else if(hardBtn.classList.contains("selected"))
		resetGame(9);
})

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
	stripe.style.backgroundColor = "white";
	header.style.backgroundColor = "steelblue";
	colors = generateRandColor(num);
	for(var i = 0; i < num; i++)
		squares[i].style.backgroundColor = colors[i];
	for(var i = num; i < squares.length; i++)
		squares[i].style.backgroundColor = "#232323";

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
		squares[i].style.backgroundColor = "#232323";
}