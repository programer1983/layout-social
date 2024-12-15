
const container = document.querySelector('.container')
const button1 = document.querySelector('.header__button-light')
const button2 = document.querySelector('.header__button-dark')
const title = document.querySelector('.discover__title')
const balanceTitle = document.querySelector('.balance__title')
const balanceTPrice = document.querySelector('.balance__price')
const balanceList = document.querySelector('.balance__list')
const balanceItem = document.querySelectorAll('.balance__item')

button2.addEventListener('click', () => {
    if(button2){
        container.classList.add('dark-theme')
        button2.classList.add('border-line')
        button1.classList.remove('border-active')
        title.classList.add('color-title')
        balanceTitle.classList.add('balance-active')
        balanceTPrice.classList.add('balance-price')
        balanceList.classList.add('balance-item')
        balanceItem.classList.add('balance-color')
    }
})

button1.addEventListener('click', () => {
    if(button1){
        container.classList.remove('dark-theme')
        button2.classList.remove('border-line')
        button1.classList.add('border-active')
        title.classList.remove('color-title')
        balanceTitle.classList.remove('balance-active')
        balanceTPrice.classList.remove('balance-price')
        balanceList.classList.remove('balance-item')
        balanceItem.classList.remove('balance-color')
    }
})
