// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// REMOVE MENU MOBILE WHEN A LINK IS CLICKED
const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => navMenu.addEventListener('click', linkAction))

// SWITCHING BACKGROUND HEADER
const scrolllHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')

}

window.addEventListener('scroll', scrolllHeader)

// SWIPER POPULAR
