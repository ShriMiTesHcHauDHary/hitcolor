const colors = ["green","red","blue","pink"]

const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener("click",function(){
  color.textContent = colors[randomNum()]
  document.body.style.backgroundColor = colors[randomNum()]
})


function randomNum(){
    return parseInt(Math.random()*colors.length)
}