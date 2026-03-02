// String Formating
let Name = 'Mahadiur';
let Position = 'AI/ML';

console.log(`Mentor Name : ${Name}\nPosition in Asian IT Tech : ${Position}`);


// Slicing list
fruits = ['Apple', 'Orange', 'Banana'];
console.log(`Fruit NO 1 : ${fruits[0]}`);

// String slicing
let text = 'My Name is Al Mahadiur Rahman';
console.log(`text Length ${text.length}`);
console.log(text.startsWith('M'));
console.log(text.endsWith('p'));

// Operation with string
let context = 'I am A Ml enGinner  ';
let sameword = 'Bad student are Bad in Life ';
let concatword1 = 'Who';
let concatword2 = 'are you?';
console.log(`Uppercase: ${context.toUpperCase()}`);
console.log(`Lowercase: ${context.toLowerCase()}`);
console.log(sameword.replaceAll('Bad', 'Good'));
console.log(context.indexOf('A'));
console.log(`Concating: ${concatword1.concat(concatword2)}`);

// Method Chaining
let context2  = '  i Am a Bad Student    ';
let concat2 = 'and a Good Programmer';
let chaining = context2.toLowerCase()
console.log(chaining);