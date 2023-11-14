const elBtn = document.querySelector('.header-btn');
const elHeader = document.querySelector('.header')
const elNavbar = document.querySelector('.header-nav');
const elClose = document.querySelector('.header-close');


elBtn.addEventListener('click', ()=> {
    elHeader.classList.toggle('header--open')
    // elBtn.style.display = 'none';
    // elClose.style.display = 'inline-block';
})

elClose.addEventListener('click', ()=> {
    elHeader.classList.remove('header--open')
})