// to create a faulty calculator 
// which does :

// opposite of operation mostly 10percent of time

let random = Math.random()
let a = prompt("enter first number")
let c = prompt("Enter the operations")
let b = prompt("enter Second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}



if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    c = obj[c];
    alert(`the result is ${ eval(`${a} ${b} ${c}` )}`) 
}
