console.log('CallBack');

// Callback
function hello(callback){
    console.log('Hello');
    callback();
}

function goodbye(){
    console.log('Goodbye');
}

hello(goodbye);

// Squre
let Natural_num = [1,2,3,4,5];
function number(element){
    console.log(element)
}

number(Natural_num);