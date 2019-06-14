function convert() {
    let t = document.getElementById("X").value
    let o = (t*180)/3.14159265359
    document.getElementById("out").innerHTML = o.toFixed(2) + " Grados"
}

function convert1() {
    let t = document.getElementById("Y").value
    let o = (t*3.14159265359)/180
    document.getElementById("out1").innerHTML = o.toFixed(2) + " Radiones"
}