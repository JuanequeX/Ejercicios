function convert() {
    let t = document.getElementById("X").value
    let o = t / 4.546
    document.getElementById("out").innerHTML = o.toFixed(2) + " Galones"
}

function convert1() {
    let t = document.getElementById("Y").value
    let o = t * 4.546
    document.getElementById("out1").innerHTML = o.toFixed(2) + " Litros"
}