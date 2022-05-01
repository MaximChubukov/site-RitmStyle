
const logoBtn = document.querySelector('.logo-btn')
const modalWindow = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')

logoBtn.addEventListener('click', () => {
    modalWindow.classList.add('modal-active')
})
modalClose.addEventListener('click', () => {
    modalWindow.classList.remove('modal-active')
})

