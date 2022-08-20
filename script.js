// Jason Hardy assignment here

var generatePasswordBtn= document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
// there must be an easier way

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*" , "." , ")" , "_", "-", "+", "=", "<" , ">" , "?" , "/", "~" , ];


// Get references to the #generate element
var generatePassword= document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePasswordBtn();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generatePasswordBtn.addEventListener("click", writePassword);

//Start Function
function generatePassword() {
  var passwordLength = prompt ("Choose password lenght between 8 and 128");
  console.log("Password length" + passwordLength);

  if(!passwordLength) {
    alert("Required value");

      } else if (passwordLength < 8 || password > 128) {
        passwordLength = prompt("Password must be between 8 and 128");
        console.log("Password length" + passwordLength);

      } else {
        confirmLower = confirm("Do you want lower case letters?");
        console.log("Lower case " + confirmLower);
        confirmUpper = confirm("Do you want upper case letters?");
        console.log("Upper case " + confirmUpper);
        confirmNumber = confirm("Do you want numbers?");
        console.log("Number " + confirmNumber);
        confirmSpecial = confirm("Do you want special characters?");
        console.log("Special Character " + confirmSpecial);
    
    
      };
    
    
      // No answer then
      if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
        userChoices = alert("You must choose a criteria");
      // 4 true options
      } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
        userChoices = lowerCase.concat(upperCase, numbers, special);
        console.log(userChoices);
      }
      // 3 true options
      else if (confirmLower && confirmUpper && confirmNumber) {
        userChoices = lowerCase.concat(upperCase, numbers);
        console.log(userChoices);
      }
      else if (confirmLower && confirmUpper && confirmSpecial) {
        userChoices = lowerCase.concat(upperCase, special);
        console.log(userChoices);
      }
      else if (confirmLower && confirmNumber && confirmSpecial) {
        userChoices = lowerCase.concat(numbers, special);
        console.log(userChoices);
      }
      else if (confirmUpper && confirmNumber && confirmSpecial) {
        userChoices = upperCase.concat(numbers, special);
        console.log(userChoices);
      }
      // 2 true options
      else if (confirmLower && confirmUpper) {
        userChoices = lowerCase.concat(upperCase);
        console.log(userChoices);
      }
      else if (confirmLower && confirmNumber) {
        userChoices = lowerCase.concat(numbers);
        console.log(userChoices);
      }
      else if (confirmLower && confirmSpecial) {
        userChoices = lowerCase.concat(special);
        console.log(userChoices);
      }
      else if (confirmUpper && confirmNumber) {
        userChoices = upperCase.concat(numbers);
        console.log(userChoices);
      }
      else if (confirmUpper && confirmSpecial) {
        userChoices = upperCase.concat(special);
        console.log(userChoices);
      }
      else if (confirmNumber && confirmSpecial) {
        userChoices = numbers.concat(special);
        console.log(userChoices);
      }
      // 1 true option
      else if (confirmLower) {
        userChoices = lowerCase;
        console.log(userChoices);
      }
      else if (confirmUpper) {
        userChoices = upperCase.concat(upperCase);
        console.log(userChoices);
      }
      else if (confirmNumber) {
        userChoices = numbers;
        console.log(userChoices);
      }
      else if (confirmSpecial) {
        userChoices = special;
        console.log(userChoices);
      };
    
    
      // Empty variable for the password lenght
      var passwordBlank = [];
      
      // Loop for random selection
      for (var i = 0; i < passwordLength; i++) {
        var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        passwordBlank.push(allChoices);
        console.log(allChoices);
      }
    
    
      // Join and return the password 
      var password = passwordBlank.join("");
      console.log("Your Pasword is: " + password);
      return password;
      
    }
    
      
//not sure what I am missing. code looks good but when I bring up the page in a browser the button does not click. 
// I showed a friend the code and he said it looks good, but we didn;t test it