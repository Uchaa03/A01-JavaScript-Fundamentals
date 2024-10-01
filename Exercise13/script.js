let num

//While the number is NaN the loop don't stop
do {
    num = Number(prompt("Enter a number"));
    isNaN(num) ? alert("ERROR, Introduce a number please"): alert(`The number introduced is ${num}`);
}while (isNaN(num));

