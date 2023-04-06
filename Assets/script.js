 // Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask user for length (Minimum of 8 characters, maximum of 128)
  let passwordLength = parseInt(prompt("How long should the password be?"));
  
  // Validate length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length. \nPlease choose a password length greater than 8 and less than 128 characters.");
    return "";
  }

  // Ask for which characters to include
  var includeLowercase = confirm("Include lowercase letters in password?");
  var includeUppercase = confirm("Include uppercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters = confirm("Include special characters in password?");
  
  // Validate types of characters
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters)
  {
    alert("Error, insufficient character types. \nPlease include at least one type of characte");
    return "";
  } 

  // Generate random password & return
  let passwordCharacters = [];
  const specialCharacters =  " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  
  // TODO handle other character types
  
  if (includeSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
  }
  let results = "";
  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    let randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter;    
  }





}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
