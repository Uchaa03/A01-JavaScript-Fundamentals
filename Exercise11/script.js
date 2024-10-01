//Basic
//let num = prompt("Enter a number");
//
// while (num >= 0) {
//     num = prompt("Enter a number");
// }

//Advanced with checking values
let num

while (true) {
    num = Number(prompt("Enter a number"))
    if (isNaN(num)){
        alert("Please enter a real number")
    }else{
        if (num < 0){
            alert("The program has finished")
            break
        }else{
            alert(`You introduced ${num}`)
        }
    }
}