let num = Number(prompt("Enter a number"));

//Validate if the value is a number and if it is odd or even
!isNaN(num)? num % 2 === 0?
     alert(`Number ${num} is even`):
     alert(`Number ${num} is odd`):
     alert(`ERROR, Introduce a valid number`)