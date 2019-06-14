let number = [1,2,3,4,5]

let square = function(number){
    return number.map(function(peso){
        return peso*peso;
    })
};

console.log(square(number));