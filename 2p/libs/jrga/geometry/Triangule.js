class Triangule{
    constructor(x,y,z){
        this.x =x;
        this.y =y;
        this.z =z;
    }
   toString (){   
    return "Primer punto: ("+this.x.x+","+ this.x.y+")" + " Segundo punto: ("+this.y.x+","+this.y.y+") tercer punto: ("+this.z.x+","+this.z.y+")"
    }
   } 

   module.export = Triangule;