"use strict";

console.clear();
alert('You should register.');
let regName=prompt("Enter the name: ");
let regPass=prompt("Enter the password: ");


alert('You should log in.');
while(true){
    let logName=prompt("Enter the name: ");
    let logPass=prompt("Enter the password: ");
    if(logName===regName || logPass===regPass) break;
    alert("Name or password were invalid. Try to login again.");
}

alert("You have successfuly loged in.");