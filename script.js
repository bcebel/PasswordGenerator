let conca="";
const upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower ="abcdefghijklmnopqrstuvwxyz";
const nums ="123456789";
const specialChar ="~!@#$%^&*()_+`?/.,><";

  let charTotal = prompt("Please enter a password length between 8 and 128");
    while  (charTotal <8 || charTotal>128 || isNaN(charTotal)) {
      charTotal = prompt("Try again!  Please enter a password length between 8 and 128 characters");
    }

function upperQuestion() {
  if(confirm("Do you want upper case letters in your password?")==true){
    conca=conca.concat(upper);
  };
}
upperQuestion();

function lowerQuestion() {
  if (confirm("Do you want lower case letters in your password?")==true){
    conca=conca.concat(lower);

  };
}
lowerQuestion();

function numberQuestion() {
  if (confirm("Do you want numbers in your password?")==true) {
    conca=conca.concat(nums);
   
  };
}
numberQuestion();

function charQuestion() {
  if (confirm("Do you want special characters in your password?")==true){
    conca=conca.concat(specialChar);
  }
  };
charQuestion();

if (conca ==""){confirm("You need to select either Uppercase, Lowercase, Number or Special Character.  Please refresh the page and try again")};

var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);


function generatePassword (){
let arrray=[];
for (let i = 0; i < charTotal; i++) {
  arrray.push((conca[Math.floor(Math.random() * conca.length)]));
}
var pwdigits=arrray.join("");
return pwdigits;
}

