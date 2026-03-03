const Subscribe = document.getElementById('sub');
const Visa = document.getElementById('Visa');
const MasterCard = document.getElementById('MasterCard');
const Paypal = document.getElementById('Paypal');
const btn = document.getElementById('btn');
const resultsub = document.getElementById('resultsub');
const resultpay= document.getElementById('resultpay');


btn.onclick = () =>{
    // Subscribe
    if (Subscribe.checked){
        resultsub.innerText = 'Your Subscribe Succssfully';
        resultsub.style.color = 'green';
    }
    else{
        resultsub.innerText = "Your do not Subcribe.";
        resultsub.style.color = 'red';
    }

    // Payment
    if (Visa.checked){
        resultpay.innerText = `Your Payment Method is Visa`;
        resultpay.style.color = 'blue';
    }
    else if (MasterCard.checked){
        resultpay.innerText = `Your Payment Method is MasterCard`;
        resultpay.style.color = 'blue';

    }
    else if (Paypal.checked){
        resultpay.innerText = `Your Payment Method is Paypal`;
        resultpay.style.color = 'blue';
    }
    else{
        resultpay.innerText = `Your do no choose Payment Method`;
        resultpay.style.color = 'red';

    }

}