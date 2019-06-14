let number = [4,3,2,1]

let asignacion = list => list.map(number => {
    switch(number)
    {
        case 3:
            return 'a';
        break;
        case 2:
            return 'b';
            break;
        case 1:
            return 'c';    
        break;
        
        default: 
        return 'Undefind';
        }
})

console.log(asignacion(number));