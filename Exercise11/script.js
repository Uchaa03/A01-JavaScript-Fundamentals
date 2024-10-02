//Basic
//let num = prompt("Enter a number");
//
// while (num >= 0) {
//     num = prompt("Enter a number");
// }

//Advanced with checking values
let num
let input

while (true) {
    input = prompt("Enter a number")
    num = Number(input)
    if (input !== `${num}`){
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