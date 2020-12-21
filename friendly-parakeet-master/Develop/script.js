// Assignment code here 
// Get references to the #generate element - variables to tie for the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - adds multiple requests
var writePassword = function() {
  var selections = lowerCases + upperCases + numbers + symbols;
  var passwordLength = window.prompt("How long would you like your password to be? Please type in a number between 8 and 128.");

    if (passwordLength >= 8 && passwordLenth <= 128) {
      var lowerCaseConfirm = window.confirm("Do you want your password to contain lower case letters? 'Yes' for YES, 'No' for NO.");
      if (lowerCaseConfirm) {
        var lowerCases = true;
      }

      var upperCaseConfirm = window.confirm("Do you want your password to contain upper case letters? 'Yes' for YES, 'No' for No.");
      if (upperCaseConfirm) {
        var upperCases = true;
      }

      var numberConfirm = window.confirm("Do you want your password to contain numbers? 'Yes' for YES, 'No' for NO.");
      if (numberConfirm) {
        var numbers = true;
      }

      var symbolConfirm = window.confirm("Do you want your password to contain special characters? 'Yes' for YES, 'No' for NO.");
      if (symbolConfirm) {
        var symbols = true;
      }
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
