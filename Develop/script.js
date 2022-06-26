// Assignment code here

// Defining specialCharacters variable, listing individual special characters
var specialCharacters = ["!", "”", "#", "$", "%", "&", "`", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ","];
// Defining uppercaseLetters variable, listing individual uppercase letters
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Defining lowercaseLetters variable, listing individual lowercase letters
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Defining numbers variable, listing individual numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
var possibleCharacters = []

  // Getting the user input for the length
  var length = prompt("How many characters should your password have? Please enter a number between 8 and 128.")
  length = parseInt(length)
 
  // Validating user input (length of the password)
  if (length < 8 || length > 128) {
    alert("You have chosen a number that is smaller than 8 or bigger than 128. Please try again.")
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

 
