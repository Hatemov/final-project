let line = document.querySelector(".line")
let cancel = document.querySelector(".cancel")
let menu = document.querySelector(".menu")

menu.addEventListener("click",()=>{
    line.style.display = "block"
    menu.style.visibility = "hidden"
})
cancel.addEventListener("click",()=>{
    line.style.display = "none"
menu.style.visibility = "visible"
})