// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Create arrays to store characters in
var characters = {
  lowercase:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialChars: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ":", "<", ">", "?"]
}
// To store selected array(s)
var groupArr = [];
  
// Create a function to generate the password
function generatePassword() {  
  // To store generated password
  var generatedPassword = "";

  // Get password length from user and validate
  var passwordLength=parseInt(prompt("How many characters do you want your password to be? Passwords must be between 8-128 characters."));
  while (passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === null) {
    alert("Please choose a password between 8-128 characters.");
    passwordLength=parseInt(prompt("How many characters do you want your password to be? Passwords must be between 8-128 characters."));
  }

  // Get what characters to use from user and validate
  var useLowerCase = confirm("Do you want lowercase letters?");
  var useUpperCase = confirm("Do you want uppercase letters?");
  var useNumbers = confirm("Do you want to numbers?");
  var useSpecialChars = confirm("Do you want special characters?");
  while (useLowerCase === false && useUpperCase === false && useNumbers === false && useSpecialChars === false) {
    alert("PLease choose at least one character to use.");
    var useLowerCase = confirm("Do you want lowercase letters?");
    var useUpperCase = confirm("Do you want uppercase letters?");
    var useNumbers = confirm("Do you want numbers?");
    var useSpecialChars = confirm("Do you want special characters?");
}
  // If character choice is true, push to group array
  if (useLowerCase === true)
    groupArr.push(characters.lowercase);

  if (useUpperCase === true)
    groupArr.push(characters.uppercase);
  
  if (useNumbers === true)
    groupArr.push(characters.numbers);

  if (useSpecialChars === true)
    groupArr.push(characters.specialChars);
    
  // Create for loop to get the length of the password
  for (i = 0; i < passwordLength; i++) {
    var randomNumArr;
    var selectedCharArr;
    var randomNumber;
    var randomChar;
      
    // Stores random number based on length of group array
      randomNumArr = Math.floor(Math.random()*groupArr.length); 
    
      // Stores selected array number
      selectedCharArr = groupArr[randomNumArr]; 
      
      // Stores random number based on array length
      randomNumber = Math.floor(Math.random()*selectedCharArr.length); 
      
      // Stores random character
      randomChar = selectedCharArr[randomNumber]; 
      
      // Accumulate characters
      generatedPassword += randomChar; 
  } 

// Store the generated password
password.textContent=generatedPassword;

// Display password
alert("Your password is " + generatedPassword);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
