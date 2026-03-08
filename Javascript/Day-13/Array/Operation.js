const fruits = ['apple', 'banana', 'Kiwi'];
console.log(fruits);

// apply in for loop
for (let fruit in fruits){
    console.log(fruits[fruit]);
}

// Apply indexes
console.log(fruits[0]);
console.log(fruits[1]);

// Apply push and pop method
let pushArray = fruits.push('Orange');
console.log(`push : ${fruits}`);

let popArray = fruits.pop('banana');
console.log(`pop : ${popArray}`);

// indexof and while loop
let indexofarray = fruits.indexOf('apple');
console.log(`indexof : ${indexofarray}`);

let index = 0;
while (index < fruits.length){
    console.log( 'while loop' + " " + fruits[index]);
    index++;
}
