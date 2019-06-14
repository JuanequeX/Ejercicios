function numeros(){
    let t = document.getElementById("numero").value

    let lis = " ";
    let res = null;
    let min = 0;
    let max =0;
    let tot = null;

    for(let x = 0; x<t;x++){
    res = res + Math.round(Math.random()*10);
    lis = lis + res + "\n";
    document.getElementById("txt").innerHTML = lis;
    tot = tot + res;
    if(min!=0 & max!=0){
        if(res <min){min = res;}
    if(res > max){max = res;}
    }else{min = res; max = res;}
    }
    document.getElementById("x").innerHTML = min;
    document.getElementById("y").innerHTML = max;
    document.getElementById("z").innerHTML = tot/t;
    }