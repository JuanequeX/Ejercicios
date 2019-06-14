class Circle{
    constructor(point,r){
        if( point instanceof Point && Number.isInteger(r)){
            this.point = point
            this.r =r;       
        }
        else{
             
        }
    };
   toString (){   
    return "("+this.point.x+","+ this.point.y+") radio: "+this.r;
    };
   } 

module.exports = Circle