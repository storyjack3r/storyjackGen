	console.log('Javascript rockets are functioning');
	var storyLog ="";
	var lastChoice=-1;
	var lastChoice = [ -1, -1, -1, -1, -1, -1 ];

	
function randomiser(listNumber){
		var allText = document.getElementsByClassName("oldText")[listNumber].value;
		
		allText = allText.trim();
		
		var theSep = document.getElementById("sep").value;
		if(theSep == "lines"){
			theSep='\n';
		}else if(theSep == "commas"){
			theSep=',';
		}else if(theSep == "semi-colons"){
			theSep=';';
		}else if(theSep == "space"){
			theSep=' ';
		}
		var choiceArray = allText.split(theSep);
		var numOfChoices = (choiceArray.length);

	    var x=Math.floor(Math.random()*numOfChoices);
		console.log('last choice = ' + lastChoice[listNumber]);
	    console.log('x = ' + x);
	    //trying to make less repetition in choice
	    	if (numOfChoices!=1){
	    		// console.log('Theres more than one choice')
	    while (x==lastChoice[listNumber]){
	    
	    x=Math.floor(Math.random()*numOfChoices);	

	    }
	    }
	    lastChoice[listNumber]=x;
	    storyLog = storyLog + " " + choiceArray[x];
		document.getElementById("newText").value = storyLog;
	
}

function resetter(){
		document.getElementById("oldText").value = "";
		document.getElementById("newText").value = "";
		document.getElementById("oldText").focus();
	
}
function storyResetter(){
		storyLog= "";
		document.getElementById("newText").value = "";
	
}


function sentenceBuilder(){
	console.log('sentence Builder is running');
	var thisSentence = randomiser(0) + " " + randomiser(1) + " "+ randomiser(2);
	// console.log(thisSentence);
	// var editedStoryLog = document.getElementById("newText").value;
	// console.log(editedStoryLog);
	// storyLog = editedStoryLog + ".. " + thisSentence;
	// document.getElementById("newText").value = storyLog;

}



