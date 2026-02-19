// voting 
let age = prompt('Enter Your Age:');

if (age >= 18){
    alert('You Can Vote');
}
else if (age < 18){
    alert('Your Can not vote now.');
}


// Result

let result = prompt('Enter Your Mark:');

if (result >= 80 && result <= 100 ){
    alert('A+');
}
else if (result >= 70 && result < 80 ){
    alert('A');
}
else if (result >=60 && result < 70){
    alert('A-');
}
else if (result >=50 && result < 60){
    alert('B');
}
else if (result >= 40 && result < 50 ){
    alert('C');
}
else if (result >=33 && result < 40){
    alert('D');
}
else if (result < 33){
    alert('F');
}

// Calculator
while (true) {
    console.log('1. Addition\n2. Subtraction\n3. Multiplication\n4. Devide\n5. Exit');
    userinput = prompt('Enter Your Choice No:')
    if (userinput == '5'){
        break
    }
    let num1 = Number(prompt('Enter First Number:'));
    let num2 = Number(prompt('Enter Second Number:'));

    // Logic
    if (userinput == '1'){
        console.log(`Addition : ${num1 + num2}`);
    }
    else if (userinput == '2'){
        console.log(`Subtraction : ${num1 - num2}`);
    }
    else if (userinput == '3'){
        console.log(`Multiplication : ${num1 * num2}`);
    }
    else if (userinput == '4'){
        console.log(`Devide : ${num1 / num2}`)
    }

}
