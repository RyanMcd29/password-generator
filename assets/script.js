// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

// Variable Decleration

var passwordLength = 1;
var passwordLowerCase = false;
var passwordUpperCase = false;
var passwordNumbers = false;
var passwordSpecial = false;

// Array Decleration
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "p", "w", "x", "y", "z"];
var charactersCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "P", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!","?", "#", "$", "%", "&", "(", ")", "*", "+", "-", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "~" ];

// Set and verify password length

//passwordLength <8;
//passwordLength >128;


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
window.alert("Please select what characters you would like to use in the generated password")

do {

passwordLowerCase = window.confirm("Would you like your password to contain lowercase letters")
passwordUpperCase = window.confirm("Would you like your password to contain capital letters?")
passwordNumbers = window.confirm("Would you like your password to contain numbers?")
passwordSpecial = window.confirm("Would you like your password to contain special characters?")

console.log("Lowercase" + passwordLowerCase)
console.log("Capitals " + passwordUpperCase)
console.log("Numbers " + passwordNumbers)
console.log("Special " + passwordSpecial)

// Confirm at least one option is selected  
var confirmOption = passwordLowerCase || passwordUpperCase || passwordNumbers || passwordSpecial

if (confirmOption) {
  console.log ("At least one option has been selected")
} else {
  window.alert("Please select at least one option")
}
} while (!confirmOption);

// Concatenate arrays into password 
var passwordCharacters = []

if (passwordLowerCase) {
  passwordCharacters = passwordCharacters.concat(characters)
}

if (passwordUpperCase) {
  passwordCharacters = passwordCharacters.concat(charactersCaps)
}

if (passwordNumbers) {
  passwordCharacters = passwordCharacters.concat(numbers)
}

if (passwordSpecial) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}

console.log(passwordCharacters)

// Generate password from password character array

var generatedPassword = []

for (let i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random()*passwordCharacters.length)
  generatedPassword.splice(i, 0, passwordCharacters[randomNumber])
}

console.log(generatedPassword)

password = generatedPassword.join('')
console.log (password)

return password;

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
