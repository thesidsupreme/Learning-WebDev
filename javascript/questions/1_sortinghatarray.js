// Magical sorting hat: Imagine you are creating a magical soritng hat for a wizard school. Implement a js function takes an array of student name and assign them one of the four houses of harry potter based on their lenghts

let arr_names = ["siddharth", "tannu", "Saksham", "hariom", "Jaadugar", "HasinaParker"];

let houses = [];

for (const student of arr_names) {
    if (student.length <=3 ) {
        houses.push("Gyriffindor");
    }
    else if (student.length <= 4) {    
        houses.push("Slythiring");
    }
    else if (student.length <=6) {
        houses.push("hufflepuff");
    }
    else {
        houses.push("RavenClawelse");
    }
}

console.log(houses)

