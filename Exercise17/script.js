
let cont = 0
let age

for (let i = 0;i < 5; i++) {
    age = Number(prompt("Enter your age"));
    if (isNaN(age)){
        alert("You don\'t introduce any age")
    }else{
        if (age >= 18){
            ++cont
        }
    }
}

alert(`You introduced an age more than or equal to eighteen ${cont} times`)