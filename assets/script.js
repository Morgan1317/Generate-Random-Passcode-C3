// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// initialize functions
function getLength(){
  var promptLength = window.prompt("How long would you like your password to be? Please select a number between 8 and 128."); 
  passwordLength = parseInt(promptLength);

  if (promptLength === "" || promptLength === null){
    window.alert("Please provide a valid number between 8 and 128.")
    return getLength();
  }

  while (passwordLength < 8 || passwordLength > 128){
    delete passwordLength
    promptLength = window.prompt("Please enter a number between 8 and 128");
    passwordLength = parseInt(promptLength);
  }
};
// generates a random letter that is lowercase
function genRandomLetter(){
  var ranLetter = "qwertyuiopasdfghjklzxcvbnm";
  letter =  ranLetter[Math.floor(Math.random()*ranLetter.length)];
  return letter;
};
// generates a random number between 0 and 9 including 0 and 9 to keep the characters from becoming longer than what the client wants
function genRandomNumber(){
  var value = Math.floor(Math.random()*10);
  return value;
};
function randomSpecial(){
  var ranSpecial = [" ","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  special =  ranSpecial[Math.floor(Math.random()*ranSpecial.length)];
  return special; 
};

function generatePassword(){
  getLength();  
  promptLower = confirm("Would you like the password to contain lowercase letters?");
  promptUpper = confirm("Would you like the password to contain uppercase letters?");
  promptNumber = confirm("Would you like the password to contain Numbers?");
  promptSpecial = confirm("Would you like the password to contain special characters?");
  

  // initialize array 
  passwordArray = [];

    while ( passwordArray.length < passwordLength){
  
      // it seems redundant but by adding the && it is insuring the letters/numbers etc don't get pushed onto the array if it is "full" already. 
      if (promptLower && passwordArray.length < passwordLength){
        low = genRandomLetter();
        passwordArray.push(low);
      }
    
      if (promptUpper && passwordArray.length < passwordLength){
        letter = genRandomLetter();
        upper = letter.toUpperCase();
        passwordArray.push(upper);
      } 
    
      if(promptNumber && passwordArray.length < passwordLength){
        number = genRandomNumber();
        passwordArray.push(number);
      } 

      if(promptSpecial && passwordArray.length < passwordLength){
        spec = randomSpecial();
        passwordArray.push(spec);
      } 
      
      if (promptUpper === false && promptLower === false && promptNumber === false && promptSpecial === false){
        window.alert("Please select at least one type of character");
        promptLower = confirm("Would you like the password to contain lowercase letters?");
        promptUpper = confirm("Would you like the password to contain uppercase letters?");
        promptNumber = confirm("Would you like the password to contain Numbers?");
        promptSpecial = confirm("Would you like the password to contain special characters?");
      } 
    };
    
    // utilize the fisher yates method of shuffle to further ensure the output of the array is in a random order, and not following the pattern of Lower Upper Number Special depending on which were selected
    // This was found here https://www.w3schools.com/js/js_array_sort.asp
    for (let i = passwordArray.length -1; i > 0; i--){
      let j = Math.floor(Math.random()*i);
      let k = passwordArray[i];
      passwordArray[i] = passwordArray [j];
      passwordArray [j] = k;
    }
    password = passwordArray.join(''); 
    return password;
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

   