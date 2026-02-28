// HTML variable
const humanreseltid = document.getElementById('humanresultid');
const computerresltid = document.getElementById('computerresultid');
const humanresetid = document.getElementById('humanresetid');
const computerresetid = document.getElementById('computerresetid');
const leaderboard = document.getElementById('leaderboard');
const id1 = document.getElementById('ID1');
const id2 = document.getElementById('ID2');
const id3 = document.getElementById('ID3');
const id4 = document.getElementById('ID4');
const id5 = document.getElementById('ID5');
const id6 = document.getElementById('ID6');
const id7 = document.getElementById('ID7');
const id8 = document.getElementById('ID8');
const id9 = document.getElementById('ID9');
const id10 = document.getElementById('ID10');
const id11 = document.getElementById('ID11');
const id12 = document.getElementById('ID12');

// Js Variable
let humancount = 0;
let computercount = 0;
let RandomNumber = Math.floor(Math.random() * 13);


// Reset Buttons
humanresetid.onclick = function(){
    humancount = 0;
    humanreseltid.value = humancount;
}
computerresetid.onclick = function(){
    computercount= 0;
    computerresltid.value = computercount;
}
