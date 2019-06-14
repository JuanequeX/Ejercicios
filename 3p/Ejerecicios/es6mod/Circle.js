import {Point} from './Point.js'
class Circle{
    constructor(point,r){        
        if( point instanceof Point ){
            this.point = point
            this.r =r;       
        }      
        
    }
   toString (){   
    return "Punto: ("+this.point.x+","+ this.point.y+") radio: "+this.r;
    }
   } 

export {Circle,Point}