class hora{
        constructor(hora, minuto, segundo){
            this.hora = hora;
            this.minuto = minuto;
            this.segundo = segundo;
        }

        getHora(){
            return this.hora;
                }
            setHora(){
            return this.hora = hora
            }
            getMinuto(){
            return this.minuto;
            }
             setMinuto(){
             return this.minuto = minuto;
            }   
             getsegundo(){
                return this.segundo;
            }
            setsegundo(){
            return this.segundo = segundo;
            }

    tick (){
    if(this.segundo == 59){
        this.segundo = 0;        
    
        if(this.minuto == 59){
            this.minuto = 0;       
    
            if(this.hora == 23){
                this.hora = 0;                              
               
                console.log('hora: '+this.hora+', Minutos: '+ this.minuto+ ', Segundos: '+this.segundo);
    
    
                }else{
                  
                    console.log('hora: '+this.hora+', Minutos: '+ this.minuto+ ', Segundos: '+this.segundo);
                        }
            }else{
                
                console.log('hora: '+this.hora+', Minutos: '+ this.minuto+ ', Segundos: '+this.segundo);
                }
         }else{
            
            console.log('hora: '+this.hora+', Minutos: '+ this.minuto+ ', Segundos: '+this.segundo);
            }
    }
}
let nueva = new hora(23,59,59);
nueva.tick();
