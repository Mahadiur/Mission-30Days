// Select all id 
let increaseid = document.getElementById('increaseid');
let decreaseid = document.getElementById('decreaseid');
let resetid = document.getElementById('resetid');
let leaderboard = document.getElementById('leaderboard');

let Count = 0;

increaseid.onclick = function(){
    Count++;
    leaderboard.textContent = Count;
}

decreaseid.onclick = function(){
    Count--;
    leaderboard.textContent = Count;
}
resetid.onclick = function(){
    Count = 0;
    leaderboard.textContent = Count
}