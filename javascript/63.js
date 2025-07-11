// let arr = [1,2,3,4,5,6];

// console.log(arr)
// console.log(arr.length)

// arr[3] = 555;
// console.log(arr[3])


// console.log(typeof(arr))

// console.log(arr.toString())

// console.log(arr.join(" and "))



// let arr1 = [1,2,3] 
// let arr2 = [4,5,6] 
// let arr3 = [7,8,9] 


// console.log(arr1.concat(arr2,arr3));

// let a = [2,55,5,77,4]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)

// }

// a.forEach((value,index,array) => {
//     console.log(value,index,array)
// });


// let obj = {
//     "1" : "sid",
//     "2" : "tannu",
//     "3" : "maggie",
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
//     }
// }

// for (const element of a) {

//     console.log(element)

// }


// to find sqaure of the arrays


// let newarr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

// console.log(newarr)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let narray = arr.map((e) => {
    return e ** 2
})

console.log(narray)

const GreaterThanSeven = (e)=>{
    if(e>7){
        return true;
    }
    else{
        return false;
    }
}

console.log(arr.filter(GreaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a + b
}

console.log(arr.reduce(red))