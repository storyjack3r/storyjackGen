	console.log('Javascript rockets are functioning');
	var storyLog ="";
	var lastFiller =-1;
	var lastChoice=-1;
	var lastChoice = [ -1, -1, -1, -1, -1, -1 ];
	var storedTextNew = [
  ['I, you, they, we', 'know, love, despise, hate, do not care about, know','me, you, her, him, them'],
  ['They, Jonathan, Samantha, Jane, Ellen, The staff of the Daily Mail, Your childhood sweetheart, The worst person in the world ever', 'lost themselves to the bottle, was forced to eat a 60 kilos of lard cake, ran into an ogre, made mincemeat of the opposition, lost some monkeys, was stranded on a desert island for three years','because the tide went out, because I fell asleep on a lilo, because nothing was as good as smelling your t-shirt whilst you took a shower, because Napoleon was stung by a wasp, because he ignored a stop sign, because of trusting Google maps, because... just because that is what happened, because it was the secret burial ground of an Indian high priestess, because they were playing kiss chase.'],
  ['Poles, Judges, Immigrants, Immoral poor, Super rich, Banker, Liberal, Ordinary people', 'victory, defeat, shock, win, loss, greed, love trist, anger, controversy, shame, reversal','as Remainers ignore majority, as mortgage rates rise, as Brussels tries to take our cash, as normal people say no, as country "overrun", as Muslim mayor defies logic, as interest rates rise AGAIN, as the benefits cheats get ANOTHER handout, as sane people told THEY are the crazy ones, as liberals in sleazy heaven, as banks get £200 billion payout, as the Mail asks has country gone mad?, as love rat sneaks off on luxury cruise']
  ];


	
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
	
	    //trying to make less repetition in choice
	    	if (numOfChoices!=1){
	    		// Theres more than one choice
	    while (x==lastChoice[listNumber]){
	    
	    x=Math.floor(Math.random()*numOfChoices);	

	    }
	    }
	    lastChoice[listNumber]=x;
	    storyLog = storyLog + " " + choiceArray[x];
		document.getElementById("newText").innerHTML= storyLog;
	
}

function resetter(){
	for (i = 0; i < storedTextNew.length; i++){	
document.getElementsByClassName("oldText")[i].value="";
	}

}
function storyResetter(){
		storyLog= "";
		document.getElementById("newText").innerHTML= "";
	
}


function sentenceBuilder(){
	console.log('sentence Builder is running');
	var thisSentence = randomiser(0) + " " + randomiser(1) + " "+ randomiser(2);
	storyLog = storyLog + "</br>";

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

