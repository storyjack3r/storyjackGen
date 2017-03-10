	console.log('boo hoo!');
	var storyLog ="";
	var lastChoice=null;

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
	    //trying to make less repetition in choice
	    if (x==lastChoice){
	    	// console.log('lastChoice is same as x');
	    	var plusOrMinus=Math.round(Math.random()) * 2 - 1;
	    	var z=x+plusOrMinus;
	    	if (z>=0 | z<=numOfChoices){
	    		x=z;
	    		lastChoice=x;
	    	}
	    	console.log(lastChoice);
	    }
	    storyLog = storyLog + " " + choiceArray[x];
		document.getElementById("newText").value = storyLog;
	});
	
	document.getElementById("tf-reset").addEventListener("click", function () {
		document.getElementById("oldText").value = "";
		document.getElementById("newText").value = "";
		document.getElementById("oldText").focus();
	});
	
});