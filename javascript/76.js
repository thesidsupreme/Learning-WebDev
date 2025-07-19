// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(420)
//         }, 4000);

//     })
async function getData() {
   let api = fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = (await api).text()
   console.log(data);
   return(data)
      

}
async function main() {

    console.log("transferring data");
    console.log("making changes");

    let data = await getData();

    console.log(getData());

    console.log("data is transferring bla bal");
    console.log("DONE!");
}

main()



