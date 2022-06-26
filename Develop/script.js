// Assignment code here

// Listing special characters
var specialCharacters = ["!", "”", "#", "$", "%", "&", "`", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ",",
];
// Listing uppercase letters
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//! Complete the list of special characters
//! Include "space"? 

//! Repeat this for other character types

function generatePassword() {
var possibleCharacters = []

  // Getting the user input for the length
  var length = prompt("enter the length of your password")
  length = parseInt(length)
 
  // Validating user input (length of the password)
  if (length < 8 || length > 128) {
    alert("incorrect value")
    return;
  }

  // Asking users if they want special characters
  var allowSpecialCharacters = confirm ("Do you want spec. characters")
  if (allowSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters)
  }

  // Repeat this for other character types
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
