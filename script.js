const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
"-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pass_1 = document.getElementById("pass1")
let pass_2 = document.getElementById("pass2")

function randomtext(){
    let ran = Math.floor(Math.random()*characters.length)
    return characters[ran]
}
function generatepassword(){
    pass_1.textContent = randomtext()+randomtext()+randomtext()
    +randomtext()+randomtext()+randomtext()+randomtext()
    +randomtext()+randomtext()+randomtext()+
    randomtext()+randomtext()+randomtext()+randomtext()+randomtext()
    pass_2.textContent = randomtext()+randomtext()+randomtext()
    +randomtext()+randomtext()+randomtext()+randomtext()
    +randomtext()+randomtext()+randomtext()+
    randomtext()+randomtext()+randomtext()+randomtext()+randomtext()
}
