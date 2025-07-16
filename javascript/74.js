let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML="Thanks for clicking "
})



button.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode)
})