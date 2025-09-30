// normally two numbers

function find(a,b){
    if(a===b){
        console.log("Both are equal")
    }
    else if(a > b){
        console.log(`${a} is a ig number`)
    }else{
        console.log(`${b} is a big number`)
    }
}

find(45,34)
find(50,23)
find(10,10);
find(-10,10);


// ternary operator

let c = 10 ,d = 14;
// c > d ? console.log(`${c} big number`):console.log(`${d} big number`);

// suppose equal
c === d ? console.log("both are same value") : (c > d) ? console.log(`${c} is big`) : console.log(`${d} is big`)

// Math.max method
let e = 20 , f = 28 ;
console.log(Math.max(e,f))

// three numbers find big



function maxi(a,b,c){

}