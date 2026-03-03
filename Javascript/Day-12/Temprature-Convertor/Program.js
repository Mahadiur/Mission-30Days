let userinput = document.getElementById('userinput');
let celtoFahrenhait = document.getElementById('celToFahrenhait');
let fahtoCelsius = document.getElementById('fahToCelsius');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.onclick = () =>{
    let input = Number(userinput.value);
    let fahrenhait;
    let celsius;
    if (celtoFahrenhait.checked){
        fahrenhait = ((input * 1.8) + 32);
        result.innerText = fahrenhait;
        result.style.color = 'green';
    }
    else if (fahtoCelsius.checked){
        celsius = ((5/9) * (input - 32));
        result.innerText = celsius;
        result.style.color = 'green';
    }
    else{
        result.innerText = 'Must be Choose a Option!';
        result.style.color = 'red';
    }
    
}