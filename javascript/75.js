console.log("sid is supreme!!!!!")

// setTimeout(() => {
//     alert("hogya set timeout bhai")
//     console.log("chal chal Timeout kar")
// }, 2000);

// console.log("chal chal ke dikha")



const callback = (arg) => {

    console.log(arg);
  
}



const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("SID");

}

loadScript("https://cdn.jsdelivr.net/npm/prismjs@1.30.0/prism.min.js",callback);

