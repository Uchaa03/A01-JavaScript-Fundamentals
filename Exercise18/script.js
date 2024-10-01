let num = Number(prompt("Enter a number"));
let str
let result = 0

//For check if the value is a number
if (!isNaN(num)) {
    //Convert to string for run in a loop
    str = String(num);
    for (let i = 0; i < str.length; i++) {
        //Convert array string to number for addition
        result += Number(str[i]);
    }
    alert(`The addition of the numbers introduced are: ${result}`);
}else alert('ERROR, Please enter a number!!');


