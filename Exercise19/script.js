let num = Number(prompt("Enter a number"));
let result = 1

//For check if the value is a number
if (!isNaN(num)) {
    for (let i = 1; i <= num; i++) {
        //Convert array string to number for addition
        result *= i;
    }
    alert(`The factorial of the number introduced is: ${result}`);
}else alert('ERROR, Please enter a number!!');

