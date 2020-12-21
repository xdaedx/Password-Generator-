// Assignment code here 
// Get references to the #generate element - variables to tie for the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - adds multiple requests
var writePassword = function() {
  var selections = lowerCases + upperCases + numbers + symbols;
  var passwordLength = window.prompt("How long would you like your password to be? Please type in a number between 8 and 128.");

    if (passwordLength >= 8 && passwordLenth <= 128) {
      var lowerCaseConfirm = window.confirm("Do you want your password to contain lower case letters? 'Ok' for YES, 'Cancel' for NO.");
      if (lowerCaseConfirm) {
        var lowerCases = true;
      }

      var upperCaseConfirm = window.confirm("Do you want your password to contain upper case letters? 'Ok' for YES, 'Cancel' for NO.");
      if (upperCaseConfirm) {
        var upperCases = true;
      }

      var numberConfirm = window.confirm("Do you want your password to contain numbers? 'Ok' for YES, 'Cancel' for NO.");
      if (numberConfirm) {
        var numbers = true;
      }

      var symbolConfirm = window.confirm("Do you want your password to contain special characters? 'Ok' for YES, 'Cancel' for NO.");
      if (symbolConfirm) {
        var symbols = true;
      }

      // One of these options needs to be selected
      if (lowerCases || upperCases || numbers || symbols) {
        generatePassword(passwordLength, lowerCases, upperCases, numbers, symbols);
      } else {
        window.alert("You must select at least one character type. Please try again.");
        return writePassword();

      }

    } else {
      window.alert("Your password length is invalid, please try again.");
      return writePassword();
    }

}

// Password selection for the writePassword
var generatePassword = function(passwordLength, lowerCases, upperCases, numbers, symbols) {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var symbol = " !$&)'(*]+[-.#/:;<=>?@|^_`{|~";
  var passwordContainer;
  var passwordValue = "";

  if (lowerCases) {
    passwordContainer = lowerCase;
  }
  if (upperCases) {
    passwordContainer += upperCase;
  }
  if (numbers) {
    passwordContainer += number;
  }
  if (symbols) {
    passwordContainer += symbol;
  }

  for (var i = 0, x = passwordContainer.length; i < passwordLength; i++) {
    passwordValue += passwordContainer.charAt(Math.floor(Math.random() * x));
  }

  document.querySelector("#password").innerHTML = passwordValue;

}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
