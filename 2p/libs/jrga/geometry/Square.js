class Square {
    constructor (point) {

        if ( point instanceof Point ){
            this.point = point
        } else {
            throw new Error ('Error de dato')
        }        
    }
    toString() {
        return "point: " + this.point.x + " , " + this.point.y 
    }
}


module.exports = Square