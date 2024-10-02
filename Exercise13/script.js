let num
let input
//While the number isn't a real number the loop don't stop
do {
    input =prompt("Enter a number")
    num = Number(input);
    input !== `${num}` ? alert("ERROR, Introduce a number please"): alert(`The number introduced is ${num}`);
}while (input !== `${num}`);

