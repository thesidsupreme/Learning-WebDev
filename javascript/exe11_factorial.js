// we have to calculate factorial using reduce() and for loop;




// first with for loop


var num = prompt("Enter the number you want factorial of")
num = parseInt(num)
let fact = 1;

for (let i = 1; i <= num; i++) {
    
    fact = fact*i;

    
}

console.log(fact)








let a = 6;

function factorial (number) {
    let arr = Array.from(Array(number + 1).keys()) // for making array without loop
    console.log(arr.slice(1,))                  // This will print array from 1 to 6

    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })

    console.log(c)
    
}

factorial(3)