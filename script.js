const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let btn = document.getElementById("passwordGenerator")
const firstPw = document.getElementById("firstPw")
const secondPw = document.getElementById("secondPw")
let output = ''

const newArray = []

for (let i = 0; i < 15; i++){
    const randomIndex = Math.floor(Math.random() * characters.length)
    
    newArray.push(characters[randomIndex])
}
console.log(newArray)


function Password(){
    newArray.forEach(e => {
        document.getElementById('firstPw').innerHTML += `${e}`;
    });
    newArray.forEach(e => {
        document.getElementById('secondPw').innerHTML += `${e}`;
    });
};

btn.addEventListener('click', () => {
    console.log("test")
})