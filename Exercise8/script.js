let input = prompt("Enter your Age");
let age = Number(input);

//Check age
if (input === `${age}` && age >= 0){
    if (age >= 18){
        alert("You are adult")
        if (age <= 25) {
            alert("You have between 18 and 25 years old")
        }
    } else {
        alert("You aren\'t adult")
    }
}else{
    alert("Please, introduce a real age")
}
