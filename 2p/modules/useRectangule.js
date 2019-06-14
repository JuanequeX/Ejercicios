const Rectangulo = require ('../../libs/jrga/geometry/Rectangulo.js');
const Point = require('../../libs/jrga/geometry/Point').default;

let p1 = new Point(3,6);
let p2 = new Point(4,4);

let RectanguloPrube = new Rectangulo(p1,p2)

RectanguloPrube.toString()