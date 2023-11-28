const elBtn = document.querySelector('.header-btn');
const elHeader = document.querySelector('.header')
const elClose = document.querySelector('.header-close');

const elRadiosHeadingSection = document.querySelector('.radios__left')

elRadiosHeadingSection.addEventListener('click', (e) => {
    if(e.target.closest('.radios__left-heading')){
        e.target.closest('.radios__left-heading').classList.toggle('radios__left-heading-open')
    }
})


const elList = document.querySelector('.radios__right')

elList.addEventListener('click', (evt) => {
    if(evt.target.closest('.radios__section')){
        evt.target.closest('.radios__section').classList.toggle('radios__right-select-open')
    }
})




elBtn.addEventListener('click', ()=> {
    elHeader.classList.toggle('header--open')
})

elClose.addEventListener('click', ()=> {
    elHeader.classList.remove('header--open')
})


// RESULT
let elForm = document.querySelector('.radios__form')
let elFormInput = document.querySelectorAll('.radios__input')
let elFormDesc = document.querySelector('.radios__result-desc')

let newArr = {
    drink: '',
    coffee: '',
    delicious: '',
    drip: '',
    free: '',
}

elForm.addEventListener('change', (evt) => {
    evt.preventDefault()
    let res = evt.target.closest('.radios__input')
     
    if(res.name === 'drink'){
        newArr.drink = res.value
    }else if(res.name === 'coffee'){
        newArr.coffee = res.value

    }else if(res.name === 'delicious'){
        newArr.delicious = res.value

    }else if(res.name === 'drip'){
        newArr.drip = res.value
        
    }else if(res.name === 'free'){
        newArr.free = res.value
        
    }

    elFormDesc.textContent = `“I drink my coffee as ${newArr.drink}, with a ${newArr.coffee} 
    type of bean. ${newArr.delicious} ground ala ${newArr.drip}, sent to me ${newArr.free}.”`


})