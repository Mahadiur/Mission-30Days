// Day program 

userinput = Number(window.prompt('Enter Your Number of day within 1 to 3:'));

switch(userinput){
    case 1:
        console.log('Friday');
        break
    case 2:
        console.log('Satarday');
        break
    case 3:
        console.log('Sunday');
    default:
        console.log('Week');
}


// Voting program
let Age = Number(window.prompt('Enter Your Age:'));

switch(Age >= 18){
    case true:
        console.log('Adult');
        break
    default:
        console.log('Minor');
}