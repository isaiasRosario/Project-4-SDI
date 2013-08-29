// alert("JavaScript works!");

// Isaias Rosario
// SDI Term 1308
// Project 4
// Solving Problems

// My Library of Functions 
var myLib = function() {

	var chkPhnNum = function(phnNum) {
		if(phnNum.length === 12 && phnNum.substring(3, 4) && phnNum.substring(7, 8) === "-") {
			return true;
		} else {
			return false;
		};
	};	
	
	return{
		"chkPhnNum": chkPhnNum
	};
	
}; // end of myLib

var lib = myLib();

console.log("Is this a phone number? " + lib.chkPhnNum("413-555-5555"));