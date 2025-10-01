const left = document.getElementById('left');
const right = document.getElementById('right');
const webTwo = document.querySelector('.test-1');
const web = document.querySelector('.test');

left.addEventListener('click', (e) => {
        web.classList.add('clicked');
        webTwo.classList.add('click');

});

right.addEventListener('click', () => {
    web.classList.remove('clicked');
    webTwo.classList.remove('click');
});


const basicPlan = document.querySelector('input.basic');
const standardPlan = document.querySelector('input.stand');
const delivery = document.querySelector('input.delivery');
const extra = document.querySelector('input.extra');
const btn = document.querySelector('.btn-5');
const amount = document.getElementById('amt');

btn.addEventListener('click', () => {
    const basicChecked = basicPlan?.checked;
    const standardChecked = standardPlan?.checked;
    const deliveryChecked = delivery?.checked;
    const extraChecked = extra?.checked;

    function add() {
        let total = 0;

        if (basicChecked) total += 1000;
        if (standardChecked) total += 1200;
        if (deliveryChecked) total += 250;
        if (extraChecked) total += 100;

        return `$${total}`;
    }

    if (!basicChecked && !standardChecked && !deliveryChecked && !extraChecked) {
        alert('check atleast one plan');
    } else if (basicChecked) {
    } else if (standardChecked) {
    } else if (deliveryChecked) {
        alert('choose atleast one plan above')
    } else {
        alert('choose any one plan')
    }

    amount.textContent = add();

});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const contactForm = document.querySelector('.inputs');
const Name = document.getElementById('name');
const bName = document.getElementById('bName');
const mail = document.getElementById('mail');
const number = document.getElementById('num');
const state = document.getElementById('country');
const butn = document.getElementById('btn-6');

butn.addEventListener('click', () => {
    if (Name.value === '') {
        alert('Enter your Name');
    } else if (bName.value === '') {
        alert('Enter your Bussiness Name')
    } else if (!mail.value.includes('@')) {
        alert('Enter proper Email');

    } else if (!number.value) {
        alert('Enter your Phone Number')
    } else if (!state.value) {
        alert('Enter your Country')
    }
})

function openTwitter(){
    const x = document.querySelector('.emoji');
    x.addEventListener('click', (e) =>{
        window.open("https://www.twitter.com/iss48934665");
    });
}

function openlink(){
    const link = document.getElementById('link');
    link.addEventListener('click', () =>{
        window.open('https://www.linkedin.com/in/issam-issam-b48b33230/');
    });
}

function opengit(){
    const git = document.getElementById('git');
    git.addEventListener('click', () =>{
        window.open('https://github.com/iss-webdev');
    });
}

function openmail(){
    const mail = document.getElementById('mail');
    mail.addEventListener('click', () =>{
        window.open('https://mail.google.com/mail/u/0/?hl=en#inbox?compose=GTvVlcSKjDcxrkCJTHbHPGmXLhGJGZlLQxXFxMNRFsqmsKMBTGZvPKHGGJRMLdwHvKVVssRXLVGCN');
    });
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".ul");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



