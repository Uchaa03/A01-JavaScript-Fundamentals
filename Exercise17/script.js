
let cont = 0
let age
let input

for (let i = 0;i < 5; i++) {
    //Check if the values are Numbers
    input = prompt("Enter your age");
    age = Number(input);
    if (input === `${age}`){
        if (age >= 18){
            ++cont
        }
    }else{
        alert("You don\'t introduce any age")
    }
}

alert(`You introduced an age more than or equal to eighteen ${cont} times`)