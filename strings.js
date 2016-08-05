var testString = document.getElementById("testString");
var reversalOutput = document.getElementById("reverse");
var alphabetOutput = document.getElementById("alphabet");
var palindromeOutput = document.getElementById("palindrome");
var submitBtn = document.getElementById("submitBtn");

/*Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.*/
submitBtn.addEventListener("click", function () {
	testStr(testString);
}, false) 


function reversal(str) {
	var strReversal = str.split("").reverse().join("");
	reversalOutput.innerHTML = strReversal;
	console.log(strReversal);
	return strReversal
}


/*Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.*/
function alphabits(str) {
	var strAlphabits = str.split("").sort();
	alphabetOutput.innerHTML = strAlphabits;
	console.log(strAlphabits);
	return strAlphabits
}
/*Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.*/
function palindrome(str) {
	if (str == str.split('').reverse().join('')){
		palindromeOutput.innerHTML = "Your string is a palindrome";
	} else {
		palindromeOutput.innerHTML = "Your string is NOT a palindrome";
	}
	console.log(str);
}


//document.getElementById("testString").innerHTML;
function testStr (str) {
	str = str.value;
	reversal(str);
	alphabits(str);
	palindrome(str);
}
