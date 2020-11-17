// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user and return a set of characters
function getChars() {
  while(true){
  
    const input = prompt("Type in one or more character type from the following categories: Lowercase, Uppercase, Numeric, Special Character");

    if (input === null)
      break;

    const regex = /lowercase|uppercase|numeric|special character/g;
    const result = input.toLowerCase().match(regex);

    if(result) {
      const charSet = {
        lowercase:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        uppercase:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        numeric: [0,1,2,3,4,5,6,7,8,9],
        specialChar:[' ','!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
      };

      return (
        [].concat(
          result.includes("lowercase") ? charSet.lowercase : [],
          result.includes("uppercase") ? charSet.uppercase : [],
          result.includes("numeric") ? charSet.numeric : [],
          result.includes("special character") ? charSet.specialChar : []
        )
      );
    }  
    else {
      alert("Invalid input. Please try again."); 
    }
  }

  return null;
}
// Prompt user and return a number representing password length
function getPwdLength() {
  while(true) {
    const input = prompt("Type in a number for the length of password (From 8-128)");

    if (input === null)
      break;
    
    return parseInt(input);
  }
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
