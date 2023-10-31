const colors =[0,1,2,3,4,5,6,"A","B","C","D","E","F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let addhas = "#";
    for(let i = 0;i < 6;i++){
        addhas += colors[getran()]
    }

    document.body.style.background = addhas
    color.textContent = addhas
});


function getran(){
    return parseInt(Math.random()*colors.length)
}
