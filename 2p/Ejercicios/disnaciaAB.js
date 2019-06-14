let aPoint = {
x: 3,
y: 4
}

let bPoint = {
x:- 3,
y:- 4
}

function distanciaAB(p1,p2){
let d1 = p2.x-p1.x
let d2 = p2.y-p1.y
d1=d1**2
d2=d2**2
return  Math.sqrt(d1+d2)
 }