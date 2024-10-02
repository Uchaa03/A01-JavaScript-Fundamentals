let input = prompt("Enter a Number");
let num = Number(input);


//Example if 0 is even
//Validate if the value is a number and if it is odd or even
//input === `${num}`? num % 2 === 0?
//      alert(`Number ${num} is even`):
//      alert(`Number ${num} is odd`):
//      alert(`ERROR, Introduce a valid number`)


//If 0 is neutral
if (input === `${num}`){
    num !== 0? num % 2 === 0?
        alert(`Number ${num} is even`):
        alert(`Number ${num} is odd`):
        alert(`Number ${num} is neutral`)
}else alert("ERROR, Intoduce a valid number")