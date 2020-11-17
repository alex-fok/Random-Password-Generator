// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user and return a set of characters
function getChars() {
  
  const input = prompt("Type in one or more character type from the following categories: Lowercase, Uppercase, Numeric, Special Character");

  const regex = /lowercase|uppercase|numeric|special character/g;
  const result = input.toLowerCase().match(regex);

  if(result)
    return [];  

  return null;
}
// Prompt user and return a number representing password length
function getPwdLength() {
  return 0;
}

// Generate password 
function generatePassword() {
  var chars = getChars();
  var length = getPwdLengths();
  console.log("Characters allowed: ", chars);
  console.log("Length: ", length);

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
