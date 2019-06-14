class Robot{
    constructor(hola){
        this.hola= hola;
    };
    speak(){
        console.log('Hola, buenos dias, ¿Gusta que le prepare un cafe?')
    };
    makeCoffe(){
        console.log('Preparando su cafe')
    };
    blinkLight(){
        console.log('Ya quedo')
    };
};

let a = new Robot('aRobot');
a.speak()
a.makeCoffe()
a.blinkLight()