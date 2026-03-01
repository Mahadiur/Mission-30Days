// HTML variable
const humanreseltid = document.getElementById('humanresultid');
const computerresltid = document.getElementById('computerresultid');
const humanresetid = document.getElementById('humanresetid');
const computerresetid = document.getElementById('computerresetid');
const leaderboard = document.getElementById('leaderboard');
const computergussnum = document.getElementById('comgussnum');
const humangussnum = document.getElementById('humgussnum');
const btn = document.getElementById('submit');
const inputnum = document.getElementById('inputnum');


// Js Variable
let humancount = 0;
let computercount = 0;

btn.onclick=()=>{
    let RandomNumber = Math.floor(Math.random() * 21);
    let actualvalue = Number(inputnum.value);
    computergussnum.innerText = RandomNumber;
    humangussnum.innerText = actualvalue;
    if (actualvalue == RandomNumber){
        humancount++;
        humanreseltid.innerText = humancount;
        leaderboard.innerText = 'True';
        leaderboard.style.color = 'green';

    }
    else if (actualvalue != RandomNumber){
        computercount++;
        computerresltid.innerText = computercount;
        leaderboard.innerText = 'False';
        leaderboard.style.color = 'red';
    }

}

// Reset Buttons
humanresetid.onclick = function(){
    humancount = 0;
    humanreseltid.innerText = humancount;
}
computerresetid.onclick = function(){
    computercount= 0;
    computerresltid.innerText = computercount;
}
