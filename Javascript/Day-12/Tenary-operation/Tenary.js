// Voting Program
let age = Number(window.prompt('Enter Your Age:'));
let result = age >= 18 ? 'Adult' : 'Minor';
console.log(result);

// odd or even
let userinput = Number(window.prompt('Enter Your Number :'));
let result2 = (userinput % 2 == 0 ? 'Even' : 'Odd');
console.log(result2); 


// guss-number
let userinput2 = Number(window.prompt('Enter Your Number for Guess between(1-4)'));
let max = 4;
let min = 1;
let randomNum = (Math.floor(Math.random() * max - min ) + min);
let result3 = (userinput2 == randomNum ? `Your Number is Correct ${userinput2} and ${randomNum}` : `Your Number is Wrong ${userinput2} and ${randomNum}`);
console.log(result3)