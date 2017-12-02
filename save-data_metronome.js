// STORE THE VARIABLES IN A DATASET
// ++++++++++++++++++++++++++++++++
//1. Take the three fields and put into an array
//2. Stringify array and store in an item called the name set by the user - also timeStamp
//3. Also store the name in a stringified array that acts as a primary key to call samples - DONE 
//4. Mark current sample for quick recall
//
// RETRIEVE THE VARIABLES FROM A DATASET
// +++++++++++++++++++++++++++++++++++++
//1. Retrieve name list and parse
//2. Make a list of the names with JS retrieve function that can parse a name
//3. 
var highestN = 0;
var arrayName = "unset";
var namesList="";
var mostRecentName;


function removeSample(sampleName){
    console.log("sample called - nameList at beginning = " + namesList);
    localStorage.removeItem(sampleName);
    var x=localStorage.getItem("dataName");
    console.log("sample called - nameList at middle = " + x);
    var y = sampleName + ",";
    console.log("x=" + x);
    var z = z.replace(sampleName,'');
    var z = z.replace(',,', ',');
    console.log("sample called - nameList at end = " + z);
    localStorage.setItem("dataName", z);

    namesRetrieve();
    makeList();
}

//stores the name so that it can be found in localStorage - functioning
function nameStore(name){
    //if there are no other samples saved on this computer add the first name to dataName storage item
    if (localStorage.getItem("dataName") === null){
        localStorage.setItem("dataName", name);
        console.log("first name saved!");
    }
    else{
        var prevNames = localStorage.getItem("dataName");
        var newNameList = prevNames + "," + name;
        localStorage.setItem("dataName", newNameList);
        console.log("new name saved!" + newNameList);
    }
}
//retrieve all names stored and turn into list - not functioning
function namesRetrieve(){
    if (localStorage.getItem("dataName")!=null){

    namesList = localStorage.getItem("dataName");
console.log("1. NamesList=" + namesList);
    //turn into array
   namesList = namesList.split(",");
    }
   else{
        console.log("could not retrieve names");
    }
}

//build HTML for list
function makeList(){
    var htmlList= "<ul>";
    if (namesList !="") {
        for (var i = namesList.length - 1; i >= 0; i--) {
            htmlList+= "<li><a href='#' onclick='getPageData(\"" + namesList[i] + "\")'> " + namesList[i] + "</a> <button class='btn-default' onclick='removeSample(\"" + namesList[i] + "\")'> X </button>";
        };
        htmlList+= "</ul>";
        document.getElementById("samplesList").innerHTML = htmlList;
    }
}


//saves to a name
function savePageData(){
    //has the user chosen a name for these data?
    if (document.getElementById("saveName").value===""){
        document.getElementsByClassName("warning").innerHTML="make a name to save."
    }
    else{
        //captures name from saveName field
    var saveName = document.getElementById("saveName").value;
    
    	if (typeof(Storage) !== "undefined") {
        console.log('You have storage.');

        //creates a new array to store the data
        var d = new Date();
        var timeStmp = d.getTime();
		var thisItem = [cleanUp(0), cleanUp(1), cleanUp(2), timeStmp];
		
		arrayName = cleanUp(3);
		//stringifies the array
        thisItem = JSON.stringify(thisItem);
        console.log(thisItem);
		//stores the name of the sample se so it can be found again
        nameStore(arrayName);

		localStorage.setItem(arrayName, thisItem );  
		getPageData();
    	}

	else {
    	window.alert('Your browser does not allow your words to save locally. Try saving them into another type of document.');
    // Sorry! No Web Storage support..
		}
        console.log("savePageData function completed");
	}
}


function cleanUp(i){
     var allText = document.getElementsByClassName("oldText")[i].value;
        allText = allText.trim();
        return allText;
        }

function getPageData(target){
    // default is most recent saved
    //if defined, target is specific file
    namesRetrieve();
    makeList();
    console.log("2. NamesList=" + namesList);
    var trueTarget;
    console.log("get page data working here 1. namesList=" + namesList);
    

    if (namesList === "") {

        console.log("No samples have been created yet...");
        return;
        }
    

    if (target!=undefined){
            trueTarget=target;
            console.log('found my target!');
            // console.log("trueTarget1=" + trueTarget);
        }
    else{
            console.log("get page data working here 2 namesList=" + namesList);
            for (var i = namesList.length - 1; i >= 0; i--) {
                var x=localStorage.getItem(namesList[i]);
                x=JSON.parse(x);
                // console.log(x);
                // console.log(x[3]);
                if(x[3]>highestN){
                    mostRecentName = namesList[i];
                    highestN = mostRecentName;
                }
            };
            trueTarget=mostRecentName;
        }
            console.log("trueTarget=" + trueTarget);
        var thisItem = JSON.parse(localStorage[trueTarget]);
    
        // console.log("thisItem = " + thisItem);
        document.getElementsByClassName("oldText")[0].value=thisItem[0];
        document.getElementsByClassName("oldText")[1].value=thisItem[1];
        document.getElementsByClassName("oldText")[2].value=thisItem[2];
        
}

function confirmDelete(){
    if(confirm("Do you really want to delete ALL your samples? (To delete the text you've generated just click on CLEAR.)") == true){
    localStorage.clear();
    }
    else{
        return;
    }
}

// retrieveList {
// 
// }



