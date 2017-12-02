function savePageData(){
    if (typeof(Storage) !== "undefined") {
        console.log('You have storage.');

localStorage.setItem("beginning", cleanUp(0));
localStorage.setItem("middle", cleanUp(1));
localStorage.setItem("end", cleanUp(2));  
 getPageData();
    }

else {
    window.alert('Your browser does not allow your words to save locally. Try saving them into another type of document.');
    // Sorry! No Web Storage support..
}
}


function cleanUp(i){
     var allText = document.getElementsByClassName("oldText")[i].value;
        allText = allText.trim();
        return allText;
        }

function getPageData(){
    if (localStorage.getItem("beginning") === null) {
return;
}
    else {
    var x = localStorage.getItem("beginning");
    var y = localStorage.getItem("middle");
    var z = localStorage.getItem("end");
        console.log(x + y + z);
        document.getElementsByClassName("oldText")[0].value=x;
        document.getElementsByClassName("oldText")[1].value=y;
        document.getElementsByClassName("oldText")[2].value=z;
            }
        }

function confirmDelete(){
    if(confirm("Do you want to delete the words you've saved?") == true){
    localStorage.clear();
    }
    else{
        return;
    }
}



