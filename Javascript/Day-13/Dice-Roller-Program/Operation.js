const userinput = document.querySelector('#userinput');
const randomdicenum = document.querySelector('#randomdicenum');
const resultimagehum = document.querySelector('.resultimagehum');
const resultimagecom = document.querySelector('.resultimagecom');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    valueofinput = userinput.value;
    Genrandomnum = Math.floor(Math.random() * (6 -1) + 1);
    randomdicenum.innerText = `${valueofinput} and ${Genrandomnum}`;
    resultimagehum.innerHTML = `<img src='./Dice-Images/${valueofinput}.png'>`
    resultimagecom.innerHTML = `<img src='./Dice-Images/${Genrandomnum}.png'>`

})