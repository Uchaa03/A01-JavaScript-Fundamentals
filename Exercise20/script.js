//Regular expression to verify if is a string
const regex  = /^[A-Za-zñÑ\s]+$/;
let aux = ""

let str = prompt("Enter a phrase or word")
//For check de value entries
if (regex.test(str)) {
    //For remove whitespace and capital letters
    str = str.split(" ").join("").toLowerCase()
    for (let i = str.length -1; i >= 0; i--) {
        aux += str[i]
    }
    str === aux?alert("Is palindromo"):alert("Isn\'t palindromo")
}else alert("ERROR, Please enter a phrase or word(string)")