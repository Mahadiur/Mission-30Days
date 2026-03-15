console.log('Filter');

let NatutalNum = [1, 2, 3, 4, 5, 6];
// EVEN
function iseven(element){
    return element % 2 === 0;
}
let even = NatutalNum.filter(iseven);
console.log(even);


// ODD
function isodd(element){
    return element % 2 == 1;
}
let odd = NatutalNum.filter(isodd);
console.log(odd)
