const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let array1 = [];
let array2 = [];
let password1EL = document.getElementById("password1");
let password2EL = document.getElementById("password2");

function generatePassword(){
// generate a password on click to the Generate Password button, and clear the arrays if they are not empty
if (array1.length === 0){
    generateNewPassword();
    } else {
        array1 = []; 
        array2 = []; 
        generateNewPassword();
        }
    }
    // if array is empty, fill it with random characters
    
function generateNewPassword(){
for (let i = 0; i < 7; i++){
    let j = Math.floor(Math.random() * characters.length)
    array1.push(characters[j]);
}
for (let k = 0; k < 7; k++){
    let l = Math.floor(Math.random() * characters.length)
    array2.push(characters[l]);
}
// if array is not empty, clear it and call the function again
password1EL.textContent = array1.join("");
password2EL.textContent = array2.join("");
}