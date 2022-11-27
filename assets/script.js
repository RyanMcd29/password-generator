// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

// Variable Decleration

var passwordLength = 1;
var passwordCaps = false;
var passwordNumbers = false;
var passwordSpecial = false;

// Set password length

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
} while (passwordLength <8 || passwordLength >128); //



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
