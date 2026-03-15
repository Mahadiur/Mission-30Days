console.log('ForEach');
// Double
let Num = [1, 2, 3, 4, 5];
Num.forEach(double);
function double(element){
    console.log(element * 2);
}

// squre
Num.forEach(squre);
function squre(element){
    console.log(element ** 2);
}

// cube
Num.forEach(cube);
function cube(element){
    console.log(Math.pow(element,3));
}



