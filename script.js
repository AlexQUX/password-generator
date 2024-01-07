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

let charAmount = "";
// Function to prompt user for password options
function getPasswordOptions() {
  charAmount = prompt("How many characters would you like the password to contain?");
  charAmount = parseInt(charAmount);
  if(charAmount < 8 || charAmount > 128) {
    alert("Please enter an amount between 8 and 128 characters.");
    getPasswordOptions();
    return
  }
  return charAmount;
}
getPasswordOptions();
let lowerCase = confirm("Include lowercase letters in the password?");
let upperCase = confirm("Include uppercase letters in the password?");
let numeric = confirm("Inlcude numbers in the password?");
let specialChar = confirm("Include special characters in the password?");
// Function for getting a random element from an array
function getRandom(arr) {
  let elementNum = arr[Math.floor(Math.random() * arr.length)];
  return elementNum;
}
// Function to generate password with user input
function generatePassword() {
  // While the password is under charAmount
  let password = "";
  while(password.length < charAmount) {
    if(lowerCase === true) {
      password = password + getRandom(lowerCasedCharacters);
    } 
    if(upperCase === true) {
      password = password + getRandom(upperCasedCharacters);
    } 
    if(numeric === true) {
      password = password + getRandom(numericCharacters);
    } 
    if(specialChar === true) {
      password = password + getRandom(specialCharacters);
    } 
  }
  return password;
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