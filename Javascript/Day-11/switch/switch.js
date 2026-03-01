// voting program 
userinput = window.prompt('Enter Your Number of day within 1 to 3:');

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