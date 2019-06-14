class Fraction{
    constructor(n,d){
        if( Number.isInteger(n)&& Number.isInteger(d)){
            this.n =n;
            this.d =d;       
        }
        else{
            this.n =0;
            this.d =0;    
        }
    };
    euclides(n,d){
     
        while(n != d){
            if(n>d){
                n = n - d;
            }else{
                d = d - n;
            }
        }
        console.log('Euclides')
        console.log(n);
    }

    sum (f){
        let n = this.n*f.d + f.n *this.d;
        let d = this.d*f.d;
        return new Fraction(n,d);
    }
    subt(f){
        let n = this.n*f.d - f.n *this.d;
        let d = this.d*f.d;
        this.euclides(n,d);
        return new Fraction(n,d);
        
    }
    div(f){
        let n = this.n*f.d;
        let d = this.d*f.n;
        return new Fraction(n,d);
    }
    mul(f){//validate
        let n = this.n*f.n;
        let d = this.d*f.d;
        this.euclides(n,d);
        return new Fraction(n,d);
    }
}

let f1 = new Fraction(5,3)
let f2 = new Fraction(20,3)


console.log('Suma: ' )
console.log(f1.sum(f2))
console.log('Resta: ')
console.log(f1.subt(f2))
console.log('División: ')
console.log(f1.div(f2))
console.log('Multiplicación: ')
console.log(f1.mul(f2))