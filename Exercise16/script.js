//Declaration of a variable string convert directly with Number to a number
let num = Number(prompt("Enter a number"));

//Validate if the value is a number and if it is odd or even
!isNaN(num)? num % 2 === 0?
        //If not NaN and the number is even
        alert(`Number ${num} is even`):
        //If not NaN and the number is odd
        alert(`Number ${num} is odd`):
        //If is NaN
        alert(`ERROR, Introduce a valid number`)