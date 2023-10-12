"use strict";

console.clear();
alert('You should register.');
let regName=prompt("Enter the name: ");
let regPass=prompt("Enter the password: ");
let cnt=3;
let reReg=false;
let rePass=false;
alert('You should log in.');
outerLoop: while(true){
    let logName=prompt("Enter the name: ");
    let logPass=prompt("Enter the password: ");
    let rightName=logName===regName;
    let rightPass=logPass===regPass;
    if(rightName && rightPass) {
        console.log(logName, regName);
        console.log(logPass, regPass);
        break;
    }
    if(!cnt--){
        reReg=confirm("Would you like to register again?");
        cnt=3;
        while(true){
            if(reReg){
                regName=prompt("Enter the name: ");
                regPass=prompt("Enter the password: ");
                continue outerLoop;
            }
            else{
                rePass=confirm("Would you like to change password again?");
            }
            if(rePass){
                logName=prompt("Enter the name: ");
                rightName=logName===regName;
                if(rightName){
                    regPass=prompt("Enter the password: ");
                    continue outerLoop;
                }
                reReg=confirm("Would you like to register again?");
                if(reReg){
                    continue;
                }
                continue outerLoop;
            }
        }

    }

    alert("Name or password were invalid. Try to login again.");
}

alert("You have successfuly loged in.");