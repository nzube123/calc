"use strict"
// variaables holding the text area and also all the button element using 
// .getElementByTagName and hereby turning the variable into an array 
// of button elements which can be accessed by using button[specified number] 
var buttons = document.getElementsByTagName("button");
var input_output = document.getElementById("text");
console.log(input_output);

function myscript(val) {
    input_output.innerText += val;
}
// assigning a job to the equal to button
// the output
var output = document.getElementById("answer");
// The function for the equal button
const eqaulto = document.querySelector("#button-34");
eqaulto.addEventListener("click", () => {
    output.innerHTML = eval(input_output.innerText);

    // creation of a lclstg for the ANS button function below
    if (typeof(Storage) != "undefined") {
        localStorage.setItem("equalto", output.innerHTML)
    }
})

// the clear screen AC button
const clear = document.querySelector("#button-7");
clear.addEventListener("click", () => {
    output.innerHTML = " ";
    input_output.innerHTML = " ";
})

// For the ans Button
// creating a local storage and inputing th final value  of every job immediately the = button is clicked
// look into the function for the equal to
const ans = document.querySelector("#button-29");
ans.addEventListener("click", () => {
    input_output.innerHTML = localStorage.getItem("equalto");
})


// code to determine the next action after the equal to button is clicked
eqaulto.addEventListener("click", () =>{
    equalto = true;
    if (eqaulto == true) {
        
    }
})