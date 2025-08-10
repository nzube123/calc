// variaables holding the text area and also all the button element using 
// .getElementByTagName and hereby turning the variable into an array 
// of button elements which can be accessed by using button[specified number] 
var buttons = document.querySelectorAll("button");
var input_output = document.getElementById("text");


function myscript(val) {
    input_output.innerText += val;
}


// the clear screen AC button
const clear = document.querySelector("#button-7");
clear.addEventListener("click", () => {
    output.innerHTML = " ";
    input_output.innerHTML = " ";
})


// assigning a job to the equal to button
// the output
var output = document.getElementById("answer");
// The function for the equal button
const eqaulto = document.querySelector("#button-34");
eqaulto.addEventListener("click", () => {
    output.innerHTML = eval(input_output.innerText);

    // creation of a lclstg for the ANS button function below
    if (typeof(Storage) != "undefined") {
        localStorage.setItem("equalto", output.innerHTML);
    }
})

// For the ans Button
// creating a local storage and inputing th final value  of every job immediately the = button is clicked
// look into the function for the equal to
const ans = document.querySelector("#button-29");
ans.addEventListener("click", () => {
    input_output.innerHTML = localStorage.getItem("equalto");
})


