
const container = document.querySelector('.container')
const button1 = document.querySelector('.header__button-light')
const button2 = document.querySelector('.header__button-dark')

button2.addEventListener('click', () => {
    if(button2){
        container.classList.add('dark-theme')
        button2.classList.add('border-line')
        button1.classList.remove('border-active')
    }
})

button1.addEventListener('click', () => {
    if(button1){
        container.classList.remove('dark-theme')
        button2.classList.remove('border-line')
        button1.classList.add('border-active')
    }
})
