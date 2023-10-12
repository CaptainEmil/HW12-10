"use strict";

console.clear();
alert('You should register.');
let regName=prompt("Enter the name: ");
let regPass=prompt("Enter the password: ");
let cnt=3;
let reReg=false;
alert('You should log in.');
while(true){
    let logName=prompt("Enter the name: ");
    let logPass=prompt("Enter the password: ");
    if(logName===regName || logPass===regPass) break;
    if(!cnt--){
        reReg=confirm("Would you like to register again?");
        cnt=3;
    }
    if(reReg){
        regName=prompt("Enter the name: ");
        regPass=prompt("Enter the password: ");
        continue;
    }
    alert("Name or password were invalid. Try to login again.");
}

alert("You have successfuly loged in.");