function countChars(obj){    
    document.getElementById('cont').innerHTML = obj.value.split(".").length-1 + obj.value.split(",").length-1+  obj.value.split(".,").length-1 + ' Sentencias';
    
  } 