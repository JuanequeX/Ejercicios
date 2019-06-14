let a = [2,2];

class vector{    
    constructor(a){
      this.data = a
    }  
    min(){   
    let t= this.data[0]
    for (let x of this.data){
    if(t>x)
    t=x 
    }
    console.log(t);
    }

   max(){     
    let t= this.data[0]
    for (let x of this.data){
     if(t<x)
     t=x 
    }
     console.log(t);
    }

    sum(){   
        let t =0;
        for (let x of this.data){
          t = t+x
        }
         console.log(t);
    }


   avg(){   
    let t =0;
    for (let x of this.data){
      t = t+x
    }
     console.log(t/a.length);
    }

    vectorize(a,b,n){
         let r = (b - a) / n

        this.data = []

        let t = 0

        for (let i = 0; i < n; i++ ) {
            this.data.push(t+=r)
            
        } 
        for (let x of this.data) {
            console.log(x)
        }
    }
} 


let v = new vector(a)


v.vectorize(.3,.6, 300)