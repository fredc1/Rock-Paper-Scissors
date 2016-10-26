
var wins=0;
var ties=0;
var loses=0;
function refresh(){
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

document.getElementById("rock").addEventListener("click", runGame("rock"));
document.getElementById("paper").addEventListener("click",runGame("paper"));
document.getElementById("scissors").addEventListener("click", runGame("scissors"));



function runGame(p){
	var aiWeapon="";
	var weapons = ["rock", "paper", "scissors"];
	aiWeapon=weapons[Math.trunc(Math.random()*3)];
	if(p=="rock"){
		if(p==aiWeapon){document.getElementById("result").innerHTML = "It's a tie! Your "+p+" ties the computer's "+aiWeapon+" ";ties++;}	
		else if(aiWeapon=="paper"){document.getElementById("result").innerHTML="Your rock loses to the computer's "+aiWeapon+" ";loses++;}	
		else {document.getElementById("result").innerHTML="Your rock wins against the computer's "+aiWeapon+" ";wins++;}
		document.getElementById("ratio").innerHTML="Wins: "+wins+" Loses: "+loses+" Ties: "+ties;
			
	}
	if(p=="paper"){
		if(p==aiWeapon){document.getElementById("result").innerHTML = "It's a tie! your "+p+" ties the computer's "+aiWeapon+" ";ties++;}
		else if(aiWeapon=="scissors"){document.getElementById("result").innerHTML = "Your paper loses to the computer's "+aiWeapon+" ";loses++;}
		else {document.getElementById("result").innerHTML = "Your paper wins against the computer's "+aiWeapon+" ";wins++;}
		document.getElementById("ratio").innerHTML="Wins: "+wins+" Loses: "+loses+" Ties: "+ties;

	}
	if(p=="scissors"){
		if(p==aiWeapon){document.getElementById("result").innerHTML = "It's a tie! your "+p+" tie the computer's "+aiWeapon+" ";ties++;}
		else if(aiWeapon=="rock"){document.getElementById("result").innerHTML = "Your scissors lose to the computer's "+aiWeapon+" ";loses++;}
		else {document.getElementById("result").innerHTML = "Your scissors win against the computer's "+aiWeapon+" ";wins++;}
		document.getElementById("ratio").innerHTML="Wins: "+wins+" Loses: "+loses+" Ties: "+ties;

	}
	
}

