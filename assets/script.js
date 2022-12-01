// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {

// Variable Decleration

var passwordLowerCase = false;
var passwordUpperCase = false;
var passwordNumbers = false;
var passwordSpecial = false;
var password = [];

// Array Decleration
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "p", "w", "x", "y", "z"];
var charactersCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "P", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!","?", "#", "$", "%", "&", "(", ")", "?", "@", "[", "]", "^", "_", "{", "}", "~", "'", "/", "+", "-" ];

// Set and verify password length
//passwordLength <8
//passwordLength >128

do {
  var passwordLength = window.prompt ("What length should password be? (Pick between 8 to 128 characters" );
  
  console.log ("User has inputed " + passwordLength + " characters.");

  var checkNumbers = passwordLength <8 || passwordLength >128;

  if (passwordLength == undefined) {
    password = "Program cancelled by user";
    return password;
  } else if (checkNumbers) {
      window.alert ("Password is an invalid length , please try again");
  }
} while (checkNumbers);

console.log ("Password length will be "+ passwordLength);
window.alert("Password length will be "+ passwordLength + " characters.");


// Set characters to use in password
window.alert("Please select what characters you would like to use in the generated password");

do {

passwordLowerCase = window.confirm("Click okay if you would like your password to contain lowercase letters.");
passwordUpperCase = window.confirm("Click okay if you would like your password to contain capital letters.");
passwordNumbers = window.confirm("Click okay if you would like your password to contain numbers.");
passwordSpecial = window.confirm("Click okay if you would like your password to contain special characters.");

console.log("Lowercase " + passwordLowerCase);
console.log("Capitals " + passwordUpperCase);
console.log("Numbers " + passwordNumbers);
console.log("Special " + passwordSpecial);

// Confirm at least one option is selected  
var confirmOption = passwordLowerCase || passwordUpperCase || passwordNumbers || passwordSpecial;

if (!confirmOption) {
  window.alert("Please select at least one option");
}
} while (!confirmOption);

// Concatenate arrays into password 
var passwordCharacters = []

if (passwordLowerCase) {
  passwordCharacters = passwordCharacters.concat(characters);
}

if (passwordUpperCase) {
  passwordCharacters = passwordCharacters.concat(charactersCaps);
}

if (passwordNumbers) {
  passwordCharacters = passwordCharacters.concat(numbers);
}

if (passwordSpecial) {
  passwordCharacters = passwordCharacters.concat(specialCharacters);
}

console.log("Password generator can pick from: " +passwordCharacters);

// Generate password from password character array

var password = []

for (let i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random()*passwordCharacters.length);
  password.splice(i, 0, passwordCharacters[randomNumber])
}

// Console log to verify array length
console.log("Requested password length " + passwordLength + " characters");
console.log("Actual password length " + password.length + " characters");

password = password.join('')
console.log ("Users password is: " + password);

return password;

}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
