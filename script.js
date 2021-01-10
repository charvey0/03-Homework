// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var numeric = "123456789";
var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// ASKS user to input number of characters desired for password
// VERIFIES that it is a number between 8 and 128 inclucive.
// RETURNS the user input once varified.
function verifyLength() {
  input = prompt(`How many character would you like?
  
  Please enter a number between 8 and 128`);

  if (input < 8) {
    alert ("Please choose a larger number.");
    input = verifyLength();
  } else if (input > 128) {
    alert ("Please choose a smaller number.");
    input = verifyLength();
  }
  return input;
}

// ASKS user to choose type of characters to be available in password
// VERIFIES that at lease one type has been chosen
// RETURNS the array of all possible characters for user password
function getCharacters() {
  var characters = '';

  // get user choices
  var addLow = confirm(`Would you like to include lowercase letters?
  
  choose 'OK' for yes or 'Cancel' for no.`);
  var addUp = confirm(`Would you like to include uppercase letters?
  
  choose 'OK' for yes or 'Cancel' for no.`);
  var addNum = confirm(`Would you like to include numbers?
  
  choose 'OK' for yes or 'Cancel' for no.`);
  var addChar = confirm(`Would you like to include special characters?
  
  choose 'OK' for yes or 'Cancel' for no.`);

  // add characters based on user choices
  if (addLow === true){
    characters += lower;
  }
  if (addUp === true){
    characters += upper;
  }
  if (addNum === true){
    characters += numeric;
  }
  if (addChar === true){
    characters += special;
  }

  // check to make sure there is at least one type of character
  while (characters.length == 0) {
    alert("Please choose at least one type of character to generate your password.");
    characters = getCharacters();
  }
  return characters;
}

// INPUT is two integers (lowest possible output, highest possible output)
// RETURNS a random integer between the inputs
function randomInt(low = 1, high = 10){
  return Math.floor((Math.random() * high) + low);
}


// RETURNS requested password
function generatePassword() {
  var password = '';
  var passLength = verifyLength();
  var characters = getCharacters();
  var charIndex;
  for (var i = 0 ; i < passLength ; i++) {
  // get a random index from 0 to the length
      charIndex = randomInt(0, characters.length);
  // push the character onto password
    password += characters[charIndex];
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
