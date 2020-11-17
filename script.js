// Assignment Code
let generateBtn = document.querySelector("#generate");

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

    const length = parseInt(input);
    
    if (!isNaN(length))
      if (length >= 8 && length <= 128)
        return length;
      else
        alert("Password must be at least 8 characters and no more than 128 characters");
    else
      alert("Invalid input. Please try again.");
  }
  return 0;
}

// Generate password 
function generatePassword() {
  let chars, length;

  if (!(chars = getChars()) || !(length = getPwdLength()))
    return "";

  var pwdArr = [length];
  
  for (let i = 0; i < length; i++) {
    const j = Math.floor(Math.random() * chars.length);
    pwdArr[i] = chars[j];
  }

  return pwdArr.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
