//1. find odd or even add two numers and the sum is odd number print odd
// the sum is even number print the even
// let a = 10
// let b = 25
// let c = a + b
// if(c%2===0){
//     console.log(c + " Even")
// }else{
//     console.log(c + " Odd")
// }

// 2. function type odd or even
// function odd(e){
//    if(e%2 ===0){
//     console.log(e + " the number is even number")
//    }else{
//     console.log(e + " the number is odd number")
//    }
// }
// odd(8)

// 3. prompt type odd or even
// let ask = prompt("enter your number")

// let change = Number(ask)
// if(change%2===0){
//     document.getElementById("display").innerText = change + " the number is even  number"
// }else{
//         document.getElementById("display").innerText = change + " the number is odd  number"

// }

// 4. normal number check odd or even

let x = 0
if(x%2===0){
    console.log(x + " this is a even number")
}else{
    console.log( x  + " this is a odd number")
}

// ternary operator
let n = 17
console.log(n%2 ===0 ? "even" :"false")