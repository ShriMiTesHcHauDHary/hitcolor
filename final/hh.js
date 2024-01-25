const colors =[0,1,2,3,4,5,6,"A","B","C","D","E","F"]
let addhas = " ";
for(let i = 0;i < 6;i++){
    let random = colors[getran()]
    console.log(random + " ");
    // return addhas
}
//  console.log(random);
function getran(){
    return parseInt(Math.random()*colors.length)
}