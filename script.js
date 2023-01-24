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
    console.log('wombat ' + conca);
  };
}
upperQuestion();

function lowerQuestion() {
  if (confirm("Do you want lower case letters in your password?")==true){
    conca=conca.concat(lower);
    console.log('squirrel ' + conca);

  };
}
lowerQuestion();

function numberQuestion() {
  if (confirm("Do you want numbers in your password?")==true) {
    conca=conca.concat(nums);
    console.log('nunchucks ' + conca);
   
  };
}
numberQuestion();

function charQuestion() {
  if (confirm("Do you want special characters in your password?")==true){
    conca=conca.concat(specialChar);
    console.log('scorpions ' + conca);
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
console.log(writePassword +' writePW');


function generatePassword (){
console.log(specialChar[Math.floor(Math.random() * specialChar.length)]);
console.log(conca);
//loop this one as it is the password character generator
let arrray=[];
for (let i = 0; i < charTotal; i++) {
  arrray.push((conca[Math.floor(Math.random() * conca.length)]));
    
}
var pwdigits=arrray.join("");
console.log(pwdigits +'yo');
return pwdigits;
}



/* Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* ou can also access individual characters in a string using bracket notation and the index. For instance, you can write:

const hello = 'Hello World';
console.log(hello[6]);
// Output: W
The console will display W since it is the character that is at index 6.


const yomama ="banaaramadingdonglamadamalinglongwaawaawaawaadingalangdongmydangadongdingdong";
console.log(yomama[Math.floor(Math.random() * yomama.length)]);
const youpapa="123123123123";
console.log(yopapa[Math.floor(Math.random() * yopapa.length)]);
let conca=yomama.concat(yopapa);
console.log(conca);
//loop this one
console.log(conca[Math.floor(Math.random() * conca.length)]);

*/