function foo(){
    console.log('Called foo!');
}

let bar = function(){
 console.log('Called bar!');
}

(function() {
console.log('This is invoked inmediately!')
})();

