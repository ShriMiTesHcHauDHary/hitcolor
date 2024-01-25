const colors =[0,1,2,3,4,5,6,"A","B","C","D","E","F"]


// for(let i = 0; i < 7;i++){
//     let hastag =+ colors[getran()]
//     console.log(hastag);
// }

function getran(){
    return Math.floor(Math.random()*colors.length)
}


let hastag = "#"
for(let i = 0; i< 7;i++){
    let random = getran().join(" ")
    console.log(random);
}



