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

// wait
function wait(callback){
    setTimeout(()=>{
        console.log('Wait ...')
    }, 3000);
    callback();
}

function HI(){
    console.log('HI')
}
wait(HI);

// leave
function leave(callback){
    console.log('Goodbye');
    callback();
}

function seeyou(){
    console.log('See You.')
}

leave(seeyou);