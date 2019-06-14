let number = [1,2,3,4,5]

let square = function(number){
    return number.map(function(peso){
        return peso-3;
    })
};

console.log(square(number));