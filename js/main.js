
const wrapper = document.querySelector('.wrapper')
const button1 = document.querySelector('.header__button-light')
const button2 = document.querySelector('.header__button-dark')
const title = document.querySelector('.discover__title')
const nameUser = document.querySelector('.header__useer-name')


button2.addEventListener('click', () => {
    if(button2){
        wrapper.classList.add('dark-theme')
        button2.classList.add('border-line')
        button1.classList.remove('border-active')
        title.classList.add('color-title')
        nameUser.classList.add('name-color')
    }
})

button1.addEventListener('click', () => {
    if(button1){
        wrapper.classList.remove('dark-theme')
        button2.classList.remove('border-line')
        button1.classList.add('border-active')
        title.classList.remove('color-title')
        nameUser.classList.remove('name-color')
    }
})

const menuButton = document.querySelector('.wrapper__button')
const aside = document.querySelector('.aside')
const html = document.querySelector('html')

menuButton.addEventListener('click', () => {
    aside.classList.toggle('show')
    html.classList.toggle('unscroll')
})

