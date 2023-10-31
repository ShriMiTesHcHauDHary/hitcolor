const colors =["green","red","blue","red"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let randomNum = getran()
    document.body.style.background = colors[randomNum]
    color.textContent = colors[randomNum]
})

function getran(){
    return parseInt(Math.random()*colors.length)
}