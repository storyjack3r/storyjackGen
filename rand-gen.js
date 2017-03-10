	console.log('boo hoo!');
	var storyLog ="";
	var lastChoice=-1;

	document.addEventListener('DOMContentLoaded', function () {

	document.getElementById("noun-submit").addEventListener("click", function () {
		var allText = document.getElementById("oldText").value;
		
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
		console.log('last choice = ' + lastChoice);
	    console.log('x = ' + x);
	    //trying to make less repetition in choice
	    while (x==lastChoice){
	    x=Math.floor(Math.random()*numOfChoices);	
	    }
	    lastChoice=x;
	    storyLog = storyLog + " " + choiceArray[x];
		document.getElementById("newText").value = storyLog;
	});
	
	document.getElementById("tf-reset").addEventListener("click", function () {
		document.getElementById("oldText").value = "";
		document.getElementById("newText").value = "";
		document.getElementById("oldText").focus();
	});
	
});