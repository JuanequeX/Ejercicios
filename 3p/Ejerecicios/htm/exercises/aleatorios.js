function aleatorio() {
    for(let x = 0; x <= 10; x++){
    document.getElementById("out").innerHTML = ('<p>'+ Math.random(x.toFixed(5))+'</p>')
    }
}