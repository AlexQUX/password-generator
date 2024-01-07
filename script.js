// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Initialises the charAmount variable outside of the function to allow for global use
let charAmount = "";
// Function to prompt user for password options
function getPasswordOptions() {
  charAmount = prompt("How many characters would you like the password to contain?");
  // Converts the variable from a string to an integer
  charAmount = parseInt(charAmount);
  // Checks to ensure given number is within min/max limits
  if(charAmount < 8 || charAmount > 128) {
    alert("Please enter an amount between 8 and 128 characters.");
    getPasswordOptions();
    return
  }
  return charAmount;
}

// Start of prompting user password structure options
getPasswordOptions();
// Initialises the variable to undefined, so they can be used in a do, while loop
let lowerCase, upperCase, numeric, specialChar;

do {
  lowerCase = confirm("Include lowercase letters in the password?");
  upperCase = confirm("Include uppercase letters in the password?");
  numeric = confirm("Include numbers in the password?");
  specialChar = confirm("Include special characters in the password?");

// Checks if the user has not selected at least one character type, and prompts them to do so
  if (!lowerCase && !upperCase && !numeric && !specialChar) {
    alert("Please select at least one type of character to include in the password");
  }
// Runs the loop as long as the user has not selected a character type
} while (!lowerCase && !upperCase && !numeric && !specialChar)
// End of prompting user password structure options


// Function for getting a random element from an array
function getRandom(arr) {
  // Selects a random element from the given array, using Math.floor to ensure that number is an integer
  let elementNum = arr[Math.floor(Math.random() * arr.length)];
  return elementNum;
}

// Function to generate password with user input
function generatePassword() {
  // Creates a new array to store the password's characters
  let output = [];
  // Runs in a loop while the length of the array, stopping when the user-specified length has been reached
  while(output.length < charAmount) {
    if (lowerCase) output.push(getRandom(lowerCasedCharacters));
    if (upperCase) output.push(getRandom(upperCasedCharacters));
    if (numeric) output.push(getRandom(numericCharacters));
    if (specialChar) output.push(getRandom(specialCharacters));
  }
  // Removes the commas, joining the characters together
  output = output.join('');
  return output;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);