var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask user for password length (Minimum of 8 characters, maximum of 128)
  let passwordLength = parseInt(prompt("How long should the password be?"));
  
  // Check password length, alert if out of specified bounds
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length. \nPlease choose a password length greater than 8 and less than 128 characters.");
    return "";
  }

  // Ask for which character types to include using confirmation bubbles
  var includeLowercase = confirm("Include lowercase letters in password?");
  var includeUppercase = confirm("Include uppercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters = confirm("Include special characters in password?");
  
  // Error message if no character types selected. 
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Error, insufficient character types. \nPlease include at least one type of characte");
    return "";
  } 

  // Defining character types as const strings
  let passwordCharacters = [];
  const specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharacters = "0123456789";
  
  // Concatenating, if confirmed, characters from aforementioned strings to array, passwordCharacters
  if (includeSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
  }
  if (includeLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters.split(""));
  }
  if (includeUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters.split(""));
  }
  if (includeNumbers) {
    passwordCharacters = passwordCharacters.concat(numberCharacters.split(""));
  }

  // Adding random characters from confirmed character type array to password result
  let results = "";
  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    let randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter;    
  }

  // Return generated password
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);