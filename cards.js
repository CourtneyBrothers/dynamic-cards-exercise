let inputFromTextarea = document.getElementById("input-for-cards");
console.log(inputFromTextarea);
console.log(inputFromTextarea.value);
inputFromTextarea.onkeyup = ()=> console.log(inputFromTextarea.value);
let flexContainer = document.getElementById("flex-container");
let createButton = document.getElementById("create");

createButton.addEventListener("cick", makeCard(inputFromTextarea.value));
console.log(inputFromTextarea.value);

function makeCard (cardText) {
    var card = document.createElement('div');
    card.className="card";
    flexContainer.appendChild(card);
    console.log("here");
    
};