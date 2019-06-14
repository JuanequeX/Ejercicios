function convert() {
    let t = document.getElementById("X").value
    let o = t-273.15
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees Celsius"
}

function convert1() {
    let t = Parseint(document.getElementById("GL").value)
    let x = 273.15  
    let o = ops.sumar(x,t)
    document.getElementById("out1").innerHTML = o.toFixed(2) + " Kelvin"
 }