load ('Point.js')
class Line{
    constructor(x,y){
        this.x =x;
        this.y =y;
    }
   toString (){   
    return "Primer punto: ("+this.x.x+","+ this.x.y+")" + " Segundo punto: ("+this.y.x+","+this.y.y+")"
    }
   } 
   export default Line