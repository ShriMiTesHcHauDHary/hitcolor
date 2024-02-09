let colors = ["red","orange","blue","green"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")


btn.addEventListener("click",function(){
  color.textContent = colors[ranDomNum()]
  document.body.style.backgroundColor = colors[ranDomNum()]
})


function ranDomNum(){
    return parseInt(Math.random()*colors.length)
}