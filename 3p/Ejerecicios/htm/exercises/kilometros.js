function convert() {
    let t = document.getElementById("LT").value
    let o = (t)/1.609
    document.getElementById("out").innerHTML = o.toFixed(2) + " Millas"
}

function convert1() {
    let t = document.getElementById("GL").value
    let o = t*1.609
    document.getElementById("out1").innerHTML = o.toFixed(2) + " Kilometros"
}