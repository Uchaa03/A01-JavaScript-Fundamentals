let input = prompt("Enter your Age");
let age = Number(input);
let str = prompt("Enter your Nacionality");

//Regular expression to verify if is a string value in nationality
const regex  = /^[A-Za-zñÑ]+$/;

//Regular expression to verify if you are spanish
const nationality = /^(español|española)$/;

//Check if the values are a real age and a string
if (input === `${age}` && age >= 0 && regex.test(str)) {
    //Check age and nationality
    if (age >= 18 && nationality.test(str.toLowerCase())) {
        alert("You can vote")
    }else{
        alert("You can\'t vote")
    }
}else {
    alert("Error, please introduce real values!");
}