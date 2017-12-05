let inputFromTextarea = document.getElementById("input-for-cards");
console.log(inputFromTextarea);
console.log(inputFromTextarea.value);



let flexContainer = document.getElementById("flex-container");
let createButton = document.getElementById("create");

createButton.addEventListener("cick", makeCard());
console.log(inputFromTextarea.value);

function makeCard () {
    inputFromTextarea.onkeyup = ()=> console.log(cardText);
    let cardText = inputFromTextarea.value;
    let cardTextNode = document.createTextNode(cardText);
    var card = document.createElement('div');
    card.className="card";

    flexContainer.appendChild(card);
    console.log("here");
    
};