const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")


btn.addEventListener("click", function(){
    let addhas = "#"

    for(let i = 0 ; i <=5; i++){
        addhas += hex[ranDomNum()]
        // console.log(addhas);.
    }

    document.body.style.backgroundColor = addhas

    color.textContent = addhas


})

function ranDomNum(){
    return parseInt(Math.random()*hex.length)
}