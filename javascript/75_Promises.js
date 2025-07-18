// console.log('this is promise');


let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random()
    if (rand > 0.5) {

        reject("no random no didnt support you")

    } else {

        setTimeout(() => {
            // console.log("Yes I am done");
            resolve("Resolved babe")

        }, 1000);
    }
})


let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random()
    if (rand > 0.5) {

        reject("no random no didnt support you 2")

    } else {

        setTimeout(() => {
            // console.log("Yes I am done");
            resolve("Resolved babe 2")

        }, 1000);
    }
})

// prom1.then((a) => {
//     console.log(a);

// }).catch((err) => {
//     console.log(err);
    
  
// }

// )

let prom3 = Promise.all([prom1,prom2]);

prom3.then((a) => {
  console.log(a)
}
).catch((err) => {
  console.log(err)
}
)


