// Assignment Code - Input Variables
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialcharCheck;

//Following the acceptance criteria, this determines the length of the password
function determinelength()  {
  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters"); 
  
  //Paramaters ensuring adherence to password length     
    if (passwordLength < 8) {
      alert("Password length must be a number between 8-128 characters \nPlease try again");
      determineLength();  
    }
    else if (passwordLength > 128)  {
      alert("Password length must be a number between 8-128 characters \nPlease try again");
      determineLength();
    }
    else if (isNaN(passwordLength)) {
      alert("Password length must be a number between 8-128 characters \nPlease try again");
      determineLength();
    }
    {alert("You will now be prompted what type of characters to be included in the password. \nIf you answer 'No' to all questions, your password will consist of only lower case letters")}
    return passwordLength;
}


//Following the acceptance criteria, this determines whether to use uppercase letters
function determineUppercase() {
  uppercaseCheck = prompt("Do you want to include uppercase letters? (Yes or No)");

  //Parameters to ensure adherence on whether to include uppercase letters 
    if (uppercaseCheck === null || uppercaseCheck === "") {
  alert("Please answer Yes or No");
  determineUppercase();

  } 
    else if (uppercaseCheck === "Yes" || uppercaseCheck ==="y") {
      uppercaseCheck = true;
    return uppercaseCheck;
  } 
    else if (uppercaseCheck === "No" || uppercaseCheck ==="n")  {
      uppercaseCheck = false;
    return uppercaseCheck;
  } 
    else {
      alert("Please answer Yes or No");
      determineUppercase();
}
    return uppercaseCheck;
}


//Following the acceptance criteria, this determines whether to use numbers
function determineNumber()  {
  numberCheck = prompt("Do you want to include numbers? (Yes or No)");

  //Parameters to ensure adherence on whether to include numbers
 if (numberCheck === null || numberCheck === "")  {
    alert("Please answer Yes or No");
    determineNumber();
  }
    else if (numberCheck === "Yes" || numberCheck ==="y") {
      numberCheck = true;
    return numberCheck;
  }
    else if (numberCheck === "No" || numberCheck ==="n"){
      numberCheck = false;
    return numberCheck;
   }
    else {
    alert("Please answer Yes or No");
    determineNumber();
  }
  return numberCheck;
}


//Following the acceptance criteria, this determines whether to use special characters
function determineSpecialchar() {
  specialcharCheck = prompt("Do you want to include special characters? (Yes or No)");

  //Parameters to ensure adherence on whether to include special characters
 if (specialcharCheck === null || specialcharCheck === "")  {
  alert("Please answer Yes or No");
  determineNumber();
}
  else if (specialcharCheck === "Yes" || specialcharCheck ==="y") {
    specialcharCheck = true;
  return numberCheck;
}
  else if (specialcharCheck === "No" || specialcharCheck ==="n") {
    specialcharCheck = false;
  return specialcharCheck;
 }
  else {
  alert("Please answer Yes or No");
  determineNumber();
}
return specialcharCheck;
}

//Takes the inputs to generate a password using random number generator
function generatePassword() {
  determinelength();
    console.log(passwordLength);
  determineUppercase();
    console.log(uppercaseCheck);
  determineNumber();
    console.log(numberCheck);
  determineSpecialchar();
    console.log(specialcharCheck);

  var characters = lowerCase;
  var password = "";
  if (uppercaseCheck && numberCheck && specialcharCheck){
    characters += upperCase + number + specialChar;
  }
  else if (uppercaseCheck && numberCheck){
    characters += upperCase + number;
  }
  else if (numberCheck && specialcharCheck){
    characters += number + specialChar;
  }
  else if (uppercaseCheck && specialcharCheck){
    characters += upperCase + specialChar;
  }
  else if (uppercaseCheck){
    characters += upperCase;
  }
  else if(numberCheck){
    characters += number;
  }
  else if (specialcharCheck){
    characters += specialChar;
  }
  else{
    characters === lowerCase;
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
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
