	console.log('Javascript rockets are functioning');
	var storyLog ="";
	var lastFiller =-1;
	var lastChoice=-1;
	var lastChoice = [ -1, -1, -1, -1, -1, -1 ];
	var storedTextNew = [
  ['I, you, they, we', 'know, love, despise, hate, do not care about, know','me, you, her, him, them'],
  ['Jonathan, Samantha, Jane, Ellen, The staff of the Daily Mail, Your childhood sweetheart, The worst person in the world ever', 'lost themselves to the bottle, was forced to eat a 60 kilos of lard cake, ran into an ogre, made mincemeat of the opposition, lost some monkeys, was stranded on a desert island for three years','because the tide went out, because I fell asleep on a lilo, because nothing was as good as smelling your t-shirt whilst you took a shower, because Napoleon was stung by a wasp, because he ignored a stop sign, because of trusting Google maps, because... just because that is what happened, because it was the secret burial ground of an Indian high priestess, because they were playing kiss chase.'],
  ['Judges, Immigrants, Super rich, Banker, Liberal, Ordinary people', 'victory, defeat, shock, win, loss, greed, love trist, anger, controversy, shame, reversal','as Remainers ignore majority, as mortgage rates rise, as Brussels tries to take our cash, as normal people say no more, as country "overrun", as scientists say TOAST causes cancer, as interest rates rise AGAIN, as the benefits cheats get ANOTHER handout, as sane people told THEY are the crazy ones, as liberals in sleazy heaven, as banks get bumper payout, as the Mail asks has country gone mad?, as love rat sneaks off on luxury cruise, as pensioners starve in their beds, as out-of-touch elite ignore electorate, as Westminister CONTINUES to ignore the public, after fog strands holiday makers in Heathrow chaos']
  ];
  var freeTextNo=0;
  var onoff=0;
  var pause=0;
  var milliseconds = 10000; 

	
function randomiser(listNumber){

		var allText = document.getElementsByClassName("oldText")[listNumber].value;
		if (allText==""){
		document.getElementById("warning").innerHTML="SHTOP! Add at least TWO pieces of text to the each of the boxes above to create random texts <a href='#' onclick='formFiller()'>or try a pre-written example</a>.";	
		return;
		}
		else{
		document.getElementById("warning").innerHTML="";	
		}
		allText = allText.trim();
		
		var theSep = ',';

		// var theSep = document.getElementById("sep").value;
		// if(theSep == "lines"){
		// 	theSep='\n';
		// }else if(theSep == "commas"){
		// 	theSep=',';
		// }else if(theSep == "semi-colons"){
		// 	theSep=';';
		// }else if(theSep == "space"){
		// 	theSep=' ';
		// }
		var choiceArray = allText.split(theSep);
		var numOfChoices = (choiceArray.length);

	    var x=Math.floor(Math.random()*numOfChoices);
	
	    //trying to make less repetition in choice
	    	if (numOfChoices!=1){
	    		// Theres more than one choice
	    while (x==lastChoice[listNumber]){
	    
	    x=Math.floor(Math.random()*numOfChoices);	

	    }
	    }
	    lastChoice[listNumber]=x;
	    storyLog = choiceArray[x] + " " + storyLog;
		document.getElementById("newText").innerHTML= storyLog;
	
}

function resetter(){
	localStorage.clear();
	for (i = 0; i < storedTextNew.length; i++){	
document.getElementsByClassName("oldText")[i].value="";
	}

}
function storyResetter(){
		storyLog= "";
		document.getElementById("newText").innerHTML= "";
	
}


function sentenceBuilder(){
	// console.log('sentence Builder is running');
	var thisSentence = randomiser(2) + " " + randomiser(1) + " "+ randomiser(0);
	storyLog = storyLog;

}



function formFiller() {

console.log('form filler running. Last filler number was ' + lastFiller);
		var numOfChoices = (storedTextNew.length);
	    do {
	    // console.log('that was the same - will try again');
	    x=Math.floor(Math.random()*numOfChoices);
	    }
	    while (x==lastFiller);
	    lastFiller=x;
for (i = 0; i < storedTextNew.length; i++){	
document.getElementsByClassName("oldText")[i].value=storedTextNew[x][i];
	}
}

function compositionBuilder(){
 var x=Math.floor(Math.random()*10);
 for (i = 0; i < x; i++){	
formFiller();
sentenceBuilder();
	}


}
function addFreeText(){
console.log("add free text but no free love");
var newFreeText = '<input type="text" id="freeForm"> </input><button onclick="freeTextCaptured()">Add</button>';

document.getElementById("newText").innerHTML= storyLog + newFreeText;
}


function freeTextCaptured(){
	console.log("booom!");
	// var freeForm=document.getElementById("freeForm");
}

function hideForms(){
if (onoff==0){
	// document.getElementById("hide-me").style.display='none';
document.getElementById("theBigForm").style.display='none';
document.getElementById("h-three").style.display='none';
document.getElementById("hider").innerHTML='Switch back to making view';
document.getElementById("hider").style.opacity = '.3';
onoff=1;
}
else{
	// document.getElementById("hide-me").style.display='inline';
	document.getElementById("theBigForm").style.display='inline';
	document.getElementById("h-three").style.display='inline';
	document.getElementById("hider").innerHTML='Switch to playing view';
	document.getElementById("hider").style.opacity = '1';

	onoff=0;

}

// 	for (i = 0; i < storedTextNew.length; i++){	
// document.getElementsByClassName("oldText")[i].style.visibility='collapse';
// 	}

}

function pauseText(){
	if(pause==1){
		pause=0;
		document.getElementById("pause-play").innerHTML='Pause text';
		document.getElementById("pause-play").style.opacity = '1';
	}
	else{pause=1;
		document.getElementById("pause-play").innerHTML='Play text';
		document.getElementById("pause-play").style.opacity = '.3';
	};
}
//need to dynamically change this...
setInterval(function() {
	var seconds = document.getElementById("seconds").value;
	milliseconds = seconds * 1000;
	console.log("milliseconds="+milliseconds)
	if (pause===0){
		sentenceBuilder();
	}

}, milliseconds);




function HtmlPageMaker(pageTitle,author) {

	var headerHTM ="<html><head>";

}