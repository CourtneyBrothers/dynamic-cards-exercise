



let flexContainer = document.getElementById("flex-container");
let createButton = document.getElementById("create");

createButton.addEventListener("click", makeCard);


function makeCard () {
    let inputFromTextarea = document.getElementById("input-for-cards");
    let cardText = inputFromTextarea.value;
    let cardTextNode = document.createTextNode(cardText);
    console.log(cardTextNode);
    let card = document.createElement('div');
    card.setAttribute("class", "styleCard");
    let cardAppend = flexContainer.appendChild(card);
    card.appendChild(cardTextNode);
    console.log("here");
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    card.appendChild(deleteButton);
    deleteButton.addEventListener("click",()=>card.parentNode.removeChild(card));
    
    
};

