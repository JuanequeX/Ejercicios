function convert() {
    let t = document.getElementById("LT").value
    let o = (t*1.12)
    document.getElementById("out").innerHTML = o.toFixed(2) + " Dolar"
}

function convert1() {
    let t = document.getElementById("GL").value
    let o = (t/1.12)
    document.getElementById("out1").innerHTML = o.toFixed(2) + " Euro"
}