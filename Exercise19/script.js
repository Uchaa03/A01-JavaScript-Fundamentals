let input = prompt("Enter a Number");
let num = Number(input);
let result = 1

//For check if the value is a number
if (input === `${num}`) {
    for (let i = 1; i <= num; i++) {
        //Convert array string to number for addition
        result *= i;
    }
    alert(`The factorial of the number introduced is: ${result}`);
}else alert('ERROR, Please enter a number!!');

