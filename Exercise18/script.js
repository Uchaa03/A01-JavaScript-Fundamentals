let input = prompt("Enter a Number");
let num = Number(input);
let result = 0

//For check if the value is a number
if (input === `${num}`) {
    for (let i = 0; i < input.length; i++) {
        //Convert array string to number for addition
        result += Number(input[i]);
    }
    alert(`The addition of the numbers introduced are: ${result}`);
}else alert('ERROR, Please enter a number!!');


