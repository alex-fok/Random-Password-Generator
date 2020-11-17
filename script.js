// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user and return a set of characters
function getChars() {
  return [];
}

// Generate password 
function generatePassword() {
  var chars = getChars();
  console.log("Characters allowed: ", chars);

  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
