// Variables:
var x = 1;
var y = 4;
var z = x + y;

// Debugging:
alert("I'm awesome!");

// Comment:
// 20 more days til basketball season starts! 

// The Console:
var favePlayer = "Carmelo";
var faveTeam = "Bulls";
console.log("favePlayer + faveTeam");

// Different Data Types:
	//Number:
var length = 20;
	//String:
var firstName = "Mehak";
	//Object:
var x = {color: "blue"};
	//Undefined:
var person;

//Array:
var teams = ["Bulls", "Knicks", "Warriors", "Cavs"];

//Boolean:
var m = true;
var k = false;

//Testing:
	//true:
(20-10) === 10;
	//false:
(20-10) === "10";
	//false:
20>19
	//true:
m !== k;

//Logic:
	//if statement:
var myName = "Mehak";
if (myName !== "Elena"){
	console.log("Nope, that's mommy, not me!");
}
	//if and else statement:
var blueColor = 8 
if (blueColor > 5){
	console.log("Yay! You're good at math!");
} else{
	console.log("Nah, you suck at math.");
}

//Functions:
function changeName(){
	document.getElementById('heading').innerHTML = "Bye!";
}

// 3 different funtions (part 2 of hw)
	//function 1
var me = prompt("choose between three options A, B, or C to get to know me");
function meKnow(meTime){
	if( meTime === "A"){
		alert("I love puggies! But I don't have one...yet");
	}else if( meTime === "B"){
		alert("Basketball is my favorite sport...to watch");
	}else if( meTime === "C"){
		alert("I am a Chicago Bulls fan and a Carmelo Anthony fan");
	}else{
		alert("Nope, you don't get to know me.");
	}
}

meKnow(me);

	//function 2








