// function for getting players names from app.js;

function getPlayerInfo(event){
    //event.target directly selects the element that has been chosen from event listener
    playerID = +event.target.dataset.playerid; // + "1" ==> 1
                                                        // + string ==> number  
    playerDetailsElement.style.display = "block";
    backgroundDetailsElement.style.display = "block";

}

function closePlayerInfo(){
    playerDetailsElement.style.display = "none";
    backgroundDetailsElement.style.display = "none";
    formElement.firstElementChild.classList.remove("nameError");
    nameError.textContent = "";
    //after function complete reset the value
    formElement.firstElementChild.lastElementChild.value =  "";
}

function savePlayerInfo(event){
    event.preventDefault();
    //created new var for form element

    const formData = new FormData(event.target); // form element inside var

    let enteredName = formData.get("playername").trim();  // entered value form get method

    if(!enteredName){
        event.target.firstElementChild.classList.add("nameError"); 
        nameError.innerHTML = " * please enter a valid name"
        return;
    }
    const updatedPlayerdata = document.getElementById("player-" + playerID + "-data");
    updatedPlayerdata.children[1].innerHTML = enteredName;  


    players[playerID - 1].name = enteredName;
        //playerID = 1,2

    closePlayerInfo();    
}
