(function (x){return x;}) (2);

(function (x){
    return function (y) {
        return x*y;
    }
}) 

(function hola(c) {
    c('Hola js mundo...')
    return 0; 
})(console.log)

(function (x){
    return function (y){
        return function (z){
            return x+y+z;
        }
    }
})(1)(2)(3)

