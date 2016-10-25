// Create a variable called msg to hold a new message
//var aiWeapon="";
//var weapons = ["Rock", "Paper", "Scissors"];
var wins=0;
var ties=0;
var loses=0;
function playAgain(){
  var button = document.createElement('button');
  button.innerHTML = 'Play Again?';
  button.onclick = function(){
    location.reload();
  }
  // where do we want to have the button to appear?
  // you can append it to another element just by doing something like
  // document.getElementById('foobutton').appendChild(button);
  document.body.appendChild(button);
}

function runGame(p){
	var aiWeapon="";
	var weapons = ["rock", "paper", "scissors"];
	aiWeapon=weapons[Math.trunc(Math.random()*3)];
	if(p=="rock"){
		if(p==aiWeapon){document.getElementById("result").innerHTML = "It's a tie! Your "+p+" ties the computer's "+aiWeapon+" ";ties++;}

			//document.write("it's a tie! your "+p+" ties the computer's "+aiWeapon+" ");
		else if(aiWeapon=="paper"){document.getElementById("result").innerHTML="Your rock loses to the computer's "+aiWeapon+" ";loses++;}


			//document.write("your rock looses to the computer's "+aiWeapon+" ");
		else {document.getElementById("result").innerHTML="Your rock wins against the computer's "+aiWeapon+" ";wins++;}
		document.getElementById("ratio").innerHTML="Wins: "+wins+" Loses: "+loses+" Ties: "+ties;

			//document.write("your rock wins against the computer's "+aiWeapon+" ");
		//document.write("<br />",playAgain(),"<br />");
	}
	if(p=="paper"){
		if(p==aiWeapon){document.getElementById("result").innerHTML = "It's a tie! your "+p+" ties the computer's "+aiWeapon+" ";ties++;}
		else if(aiWeapon=="scissors"){document.getElementById("result").innerHTML = "Your paper loses to the computer's "+aiWeapon+" ";loses++;}
		else {document.getElementById("result").innerHTML = "Your paper wins against the computer's "+aiWeapon+" ";wins++;}
		document.getElementById("ratio").innerHTML="Wins: "+wins+" Loses: "+loses+" Ties: "+ties;

		//document.write("<br />",playAgain(),"<br />");
	}
	if(p=="scissors"){
		if(p==aiWeapon){document.getElementById("result").innerHTML = "It's a tie! your "+p+" tie the computer's "+aiWeapon+" ";ties++;}
		else if(aiWeapon=="rock"){document.getElementById("result").innerHTML = "Your scissors lose to the computer's "+aiWeapon+" ";loses++;}
		else {document.getElementById("result").innerHTML = "Your scissors win against the computer's "+aiWeapon+" ";wins++;}
		document.getElementById("ratio").innerHTML="Wins: "+wins+" Loses: "+loses+" Ties: "+ties;

		//document.write("<br />",playAgain(),"<br />");
	}
	
}


function updateMessage() {
  document.getElementById('demo').innerHTML = Date();
}

