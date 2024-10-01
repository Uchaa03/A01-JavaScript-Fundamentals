//All comparison return a boolean value

let num1 = 10
let num2 = 20
let num3 = 5

//Greater
console.log(num1 > num2)

//Less than
console.log(num1 < num2)

//Equals
console.log(num1 === num2)
//Different
console.log(num1 !== num2)

//If the two conditions are ok return true
console.log(num1 < num2 && num1 < num3)
console.log(num1 < num2 && num1 > num3)

//If one of the two conditions are ok return true
console.log(num1 < num2 || num1 > num3)

//Not change boolean value
console.log(!num1 < !num2)