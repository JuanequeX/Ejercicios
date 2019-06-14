const Point = require ('./Point')

class Triangule{
    constructor(x,y,z){

        if (x instanceof Point && y instanceof Point && z instanceof Point) {
            this.x = x
            this.y =y;
            this.z =z;
        } else {
            throw new Error ("Estas bien indio")
        }

        
    }
   toString (){   
    return "Primer punto: ("+this.x.x+","+ this.x.y+")" + " Segundo punto: ("+this.y.x+","+this.y.y+") tercer punto: ("+this.z.x+","+this.z.y+")"
    }
   } 

   module.exports = Triangule