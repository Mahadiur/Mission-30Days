console.log('Reduce');

let Numbers = [28, 39,49, 93, 29];
let total = Numbers.reduce(average);
console.log(total/5);
function average(previous, next){
    return (previous + next)
}

// max number
let max = Numbers.reduce(ismax);
function ismax(previous, next){
    return Math.max(previous, next);
}
console.log(max);


// min number 
let min = Numbers.reduce(ismin);
function ismin(previous, next){
    return Math.min(previous, next);
}
console.log(min);