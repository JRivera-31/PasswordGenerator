// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Need array of uppercase, lowercase, special chars, and numbers (4 arrays) | 
// In an object-Uppercase = Arr of all uppercase letters
function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
