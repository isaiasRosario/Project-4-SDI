// alert("JavaScript works!");

// Isaias Rosario
// SDI Term 1308
// Project 4
// Solving Problems

// My Library of Functions 
var myLib = function() {

	// Check if String is a Phone Number
	var chkPhnNum = function(phnNum) {
		if(phnNum.length === 12 && phnNum.substring(3, 4) && phnNum.substring(7, 8) === "-") {
			return true;
		} else {
			return false;
		};
	};	// end of chkPhnNum function
	
	// Check if String is an Email
	var chkEmail = function() {
		if(){
			return true;
		} else {
			return false;
		};
	
	}; // end of chkEmail function
	
	// Check if String is has http:// or https://
	var chkHttp = function() {
		if(){
			return true;
		} else {
			return false;
		};
		
	}; // end of chkHttp function
	
	// Check if String is Title Case
	var chkTiCase = function() {
	
	}; // end of chkTiCase function
	
	// Set Decimal Place for a Given Number
	var setDecPlc = function() {
	
	}; // end of setDecPlc function
	
	// Check for Smallest Number in Array greater then Given Number 
	var chkArrNum = function() {
	
	}; // end of chkArrNum  function
	
	return{
		"chkPhnNum": chkPhnNum
		"chkEmail" : chkEmail,
		"chkHttp"  : chkHttp,
		"chkTiCase": chkCase,
		"setDecPlc": chkDecPlc,
		"chkArrNum": chkArrNum
	};
	
}; // end of myLib

// Start //

var lib = myLib();

console.log("Is this a phone number? " + lib.chkPhnNum("413-555-5555"));
console.log();
console.log();
console.log();
console.log();
console.log();