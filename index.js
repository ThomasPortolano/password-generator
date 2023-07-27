const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let array1 = [];
let array2 = [];
let maxCharacters = 15;
let password1EL = document.getElementById("password1");
let password2EL = document.getElementById("password2");
let maxLengthEL = document.getElementById("max-length");

function generatePassword(){
// generate a password on click to the Generate Password button 
if (array1.length === 0){
    generateNewPassword();
    }
// Clear password fields if they are not empty    
    else {
        array1 = []; 
        array2 = []; 
// Generate a new password afterward    
        generateNewPassword();
        }
    }
    
// Generate a new password function that takes 7 characters from the array 
function generateNewPassword(){
// Function for field 1
for (let i = 0; i < maxCharacters; i++){
    let j = Math.floor(Math.random() * characters.length)
    array1.push(characters[j]);
}
// Function for field 2
for (let k = 0; k < maxCharacters; k++){
    let l = Math.floor(Math.random() * characters.length)
    array2.push(characters[l]);
}
// Concatenate the arrays and display them in the password fields
password1EL.textContent = array1.join("");
password2EL.textContent = array2.join("");
}

