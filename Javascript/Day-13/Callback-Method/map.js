console.log('Map');

let fruits = ['apple', 'orange', 'banana'];
// UPPERCASE
function isuppercase(element){
    return element.toUpperCase();
}
let upper = fruits.map(isuppercase);
console.log(upper);

// LOWERCASE
function islowercase(element){
    return element.toLowerCase();
}
let lower = fruits.map(islowercase);
console.log(lower);

// CONCAT  
function concat(element){
    return element.concat('Fruit');
}
let concating = fruits.map(concat);
console.log(concating)
