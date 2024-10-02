let input = prompt("Enter a Number");
let num = Number(input);

//Validate if the value is a number
if (input === `${num}`){
    num !== 0? num % 2 === 0?
            //If not 0 and the number is even
            alert(`Number ${num} is even`):
            //If not 0 and the number is odd
            alert(`Number ${num} is odd`):
            //If is 0
            alert(`Number ${num} is neutral`)
}else alert("ERROR, Intoduce a valid number")