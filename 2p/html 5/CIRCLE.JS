const Point = require ('./Point')

class Circle{
    constructor(x, r){

        if (x instanceof Point && Number.isInteger(r)) {
            this.x = x
            this.r = r
        } else {
            throw new Error ("Estas bien indio")
        }

        
    }
   toString (){   
    return "Primer punto: ("+this.x.x+","+ this.x.y+")" + " Segundo punto: ("+this.y.x+","+this.y.y+") tercer punto: ("+this.z.x+","+this.z.y+")"
    }
   } 

   module.exports = Circle