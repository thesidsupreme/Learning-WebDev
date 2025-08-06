let arr_names = ["siddharth", "tannu", "Saksham", "hariom", "Jaadugar", "HasinaParker"];
let houses = [];

for (const student of arr_names) {
    if (student.length <= 5) {
        houses.push("Gryffindor");
    } else if (student.length <= 7) {
        houses.push("Slytherin");
    } else if (student.length <= 10) {
        houses.push("Hufflepuff");
    } else {
        houses.push("Ravenclaw");
    }
}

console.log(houses);
