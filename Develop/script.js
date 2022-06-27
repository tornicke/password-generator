
// Defining specialCharacters variable, listing individual special characters
var specialCharacters = ["!", "”", "#", "$", "%", "&", "`", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ","];
// Defining uppercaseLetters variable, listing individual uppercase letters
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Defining lowercaseLetters variable, listing individual lowercase letters
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Defining numbers variable, listing individual numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var myPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (myPrompts) {
    var myPassword = generatePassword();
    passwordText.value = myPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < length; i++) {
    var randomCharacter = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[randomCharacter];
  }
  return password; 
}

function getPrompts() {
  possibleCharacters = [];

  // Getting the user input for the length
  var length = prompt("How many characters should your password have? Please enter a number between 8 and 128.");
  length = parseInt(length)
 
  // Validating user input (length of the password)
  if (isNaN(length) || length < 8 || length > 128) {
    alert("You have chosen a number that is smaller than 8 or bigger than 128. Please try again.");
    return false;
  }

  // Asking users if they want special characters in their password and giving examples of special characters in case they do not know what those are
  var allowSpecialCharacters = confirm ("Do you want to include special characters in your password (e.g. !, #, $, etc.)? Please click 'OK' to continue.");
  if (allowSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Asking users if they want uppercase letters in their password
  var allowUppercaseLetters = confirm ("Do you want to include uppercase letters in your password? Please click 'OK' to continue.");
  if (allowUppercaseLetters) {
  possibleCharacters = possibleCharacters.concat(uppercaseLetters);
  }

  // Asking users if they want lowercase letters in their password
  var allowLowercaseLetters = confirm ("Do you want to include lowercase letters in your password? Please click 'OK' to continue.");
  if (allowLowercaseLetters) {
  possibleCharacters = possibleCharacters.concat(lowercaseLetters);
  }

  // Asking users if they want numbers in their password
  var allowNumbers = confirm ("Do you want to include numbers in your password? Please click 'OK' to continue.");
  if (allowNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
  }
  return true;
}


