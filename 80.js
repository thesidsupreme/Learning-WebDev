// console.log("har har mahadev");

// let obj = {
//     1:"Siddharth",
//     2:"kallu",
//     3:"happu",
// }

// console.log(obj);   

// let animal = {
//     eats: true,
// };

// let rabbit = {
//     jumps: true,
// }

// rabbit.__proto__= animal; // set rabbit.[[prototype]] = animal


class Animal{
    constructor(){
        console.log("Object is Created.......")
    }
    eats(){
        console.log("Jumping")
    }
    jumps(){
        console.log("jumpinggg")
    }
}

let a = new Animal();   
console.log(a)