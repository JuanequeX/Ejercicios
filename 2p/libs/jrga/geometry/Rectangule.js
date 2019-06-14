class Rectangulo{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    toString(){
        console.log("Primer Punto: " + this.x.x + "," + this.x.y + "  ,  Seguno punto: " + this.y.x + "," + this.y.y)
    }
}

module.exports=Rectangulo