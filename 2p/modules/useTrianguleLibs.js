import Triangule from '../../libs/jrga/geometry/Triangule.js';
import Point from '../../libs/jrga/geometry/Point';

a = new Point(1,1);
b = new Point(5,1);
c = new Point(1,5);

Line1 = new Triangule(a,b,c)

console.log(Line1.toString());