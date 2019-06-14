class Point{
    constructor(x,y){
        if( Number.isInteger(x)&& Number.isInteger(y)){
            this.x =x;
            this.y =y;       
        }
        else{
            this.x =0;
            this.y =0;    
        }
    }
   toString (){   
    return "("+this.x+","+ this.y+")";
    };
   
   distance(p){

   };
   clone () {
       return new Point(this.x,this.y);
    };
   } 

export default Point