const elBtn = document.querySelector('.header-btn');
const elHeader = document.querySelector('.header')
const elClose = document.querySelector('.header-close');

const elRadiosHeadingLink = document.querySelectorAll('.radios__left-heading-link')
const elRadiosHeading = document.querySelectorAll('.radios__left-heading')

elRadiosHeadingLink[0].addEventListener('click', ()=> {
    elRadiosHeading[0].classList.toggle('radios__left-heading-open')
})
elRadiosHeadingLink[1].addEventListener('click', ()=> {
    elRadiosHeading[1].classList.toggle('radios__left-heading-open')
})
elRadiosHeadingLink[2].addEventListener('click', ()=> {
    elRadiosHeading[2].classList.toggle('radios__left-heading-open')
})
elRadiosHeadingLink[3].addEventListener('click', ()=> {
    elRadiosHeading[3].classList.toggle('radios__left-heading-open')
})
elRadiosHeadingLink[4].addEventListener('click', ()=> {
    elRadiosHeading[4].classList.toggle('radios__left-heading-open')
})

const elRadiosBtn = document.querySelectorAll('.radios__right-select')
const elRadiosSection = document.querySelectorAll('.radios__section')

elRadiosBtn[0].addEventListener('click', ()=> {
    elRadiosSection[0].classList.toggle('radios__right-select-open')
})
elRadiosBtn[1].addEventListener('click', ()=> {
    elRadiosSection[1].classList.toggle('radios__right-select-open')
})
elRadiosBtn[2].addEventListener('click', ()=> {
    elRadiosSection[2].classList.toggle('radios__right-select-open')
})
elRadiosBtn[3].addEventListener('click', ()=> {
    elRadiosSection[3].classList.toggle('radios__right-select-open')
})
elRadiosBtn[4].addEventListener('click', ()=> {
    elRadiosSection[4].classList.toggle('radios__right-select-open')
})




elBtn.addEventListener('click', ()=> {
    elHeader.classList.toggle('header--open')
})

elClose.addEventListener('click', ()=> {
    elHeader.classList.remove('header--open')
})