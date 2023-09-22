function receivesAFunction(callback){
    //calling the callback function
     callback(); // this is the return value of the function, which will be passed to the next function in line.
}
function mycallback(){
console.log("callback function is called!");
}

receivesAFunction(mycallback);