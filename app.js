let x = 0
let clicks = 1

function buttonPressed(){
    amount = clicks
    x = x + amount
    document.getElementById("number").innerHTML = x
}
function reset(){
    x = 0
    document.getElementById("number").innerHTML = x
}
function buy10(){
    if(x >= 10){
        x = x - 10
        clicks = clicks + 1
        document.getElementById("number").innerHTML = x
        document.getElementById("clicks").innerHTML = clicks
    }
}

