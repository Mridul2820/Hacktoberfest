const button = document.querySelector('.toggler')
const close = document.querySelector('.bi-x')
const navbar = document.querySelector('.nav-toggle')
button.addEventListener('click', () => {
    console.log('clicked')
    navbar.classList.add('nav-open');
}
)

close.addEventListener('click', () => {
    console.log('clicked')
    navbar.classList.remove('nav-open');
}
)