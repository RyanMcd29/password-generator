// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

// Variable Decleration

var passwordLength = 1;
var passwordCaps = false;
var passwordNumbers = false;
var passwordSpecial = false;

// Array Decleration
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "p", "w", "x", "y", "z"];
var charactersCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "P", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!","?", "#", "$", "%", "&", "(", ")", "*", "+", "-", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "~" ];

// Set and verify password length

passwordLength <=8;
passwordLength >128;


do {
  passwordLength = window.prompt ("What length should password be? (Pick between 8 to 128 characters" );
  console.log (passwordLength);

  console.log (passwordLength <8);
  console.log (passwordLength >128);
    if (passwordLength <8 || passwordLength >128) {
      window.alert ("Password is an invalid length, please try again")
    } else {
      console.log ("Password length will be "+ passwordLength)
    }
} while (passwordLength <8 || passwordLength >128);

// Set characters to use in password

passwordCaps = window.confirm("Would you like your password to contain capital letters?")
passwordNumbers = window.confirm("Would you like your password to contain numbers?")
passwordSpecial = window.confirm("Would you like your password to contain special characters?")

console.log("Capitals " + passwordCaps)
console.log("Numbers " + passwordNumbers)
console.log("Special " + passwordSpecial)






return;

}

//

// Concat Arrays

//
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
