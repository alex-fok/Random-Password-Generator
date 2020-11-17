// Assignment Code
let generateBtn = document.querySelector("#generate");

// Prompt user and return a set of characters
function getChars() {
  while(true){
    const input = prompt("Type in one or more character type from the following categories: Lowercase, Uppercase, Numeric, Special Character");

    // If user clicks cancel, break out of the loop
    if (input === null)
      break;

    // Compare result with regex. Transform user input to string array for later computation
    const regex = /lowercase|uppercase|numeric|special character/g;
    const result = input.toLowerCase().match(regex);


    // If input contains one or more character type, add in the characters for return value
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
    // If input contains no matching character type, alert user for their invalid input. Go back to the start of the loop
    else {
      alert("Invalid input. Please try again."); 
    }
  }

  // Return falsy (null) if loop breaks
  return null;
}

// Prompt user and return a number representing password length
function getPwdLength() {
  while(true) {
    const input = prompt("Type in a number for the length of password (From 8-128)");

    // If user clicks cancel, break out of the loop
    if (input === null)
      break;

    const length = parseInt(input);
    
    // If input can be converted to a number, check if input is within [8, 128]. If either one is not satisfied, alert user and start over the loop
    if (!isNaN(length))
      if (length >= 8 && length <= 128)
        return length;
      else
        alert("Password must be at least 8 characters and no more than 128 characters");
    else
      alert("Invalid input. Please try again.");
  }

  // If loop ends without returning, return falsy (0)
  return 0;
}

// Generate password 
function generatePassword() {
  let chars, length;

  // Check if user quits in the middle of the operation
  if (!(chars = getChars()) || !(length = getPwdLength()))
    return "";

  var pwdArr = [length];
  
  // Build password with string array and selected character set
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
