console.log("har har mahadev")

let boxes = document.getElementsByClassName("box");

console.log(boxes)

boxes[2].style.backgroundColor="aqua"

document.getElementById("red_colour").style.backgroundColor="aqua";

document.querySelector(".box").style.backgroundColor="aqua";


document.querySelectorAll(".box").forEach((e)=>{
    e.style.backgroundColor="aqua"
})