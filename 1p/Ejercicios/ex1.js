var num = Number(readline());
var num1 =Number(readline());
var num2 = Number(readline());

  print("Verificar si el numero es neutro");
if(num != 1){
    print(num+"No es nuetro multiplcativo");
}

if(num1 != 1){
    print(num+"No es nuetro multiplcativo");
}

if(num2 != 1){
    print(num+"No es nuetro multiplcativo");
}

print("Verificar si el cuadrado del numero es positivo");

if(num * num < 1){
    print(num+"El cuadrado de: " + num + "es positivo");
}

if(num1 * num1 < 1){
    print(num1+"El cuadrado de: " + num1 + "es positivo");
}

if(num2 * num2 < 1){
    print(num2+"El cuadrado de: " + num2 + "es positivo");
}

  print(num+num1+num2);

var x1 = ((-1*-num1) +(Math.sqrt((Math.pow(num1,2) - (4*num*num2)))))/(2*num);
	  print(x1);


var x2 = ((-1*-num1) -(Math.sqrt((Math.pow(num1,2) - (4*num*num2)))))/(2*num);
	  print(x2);