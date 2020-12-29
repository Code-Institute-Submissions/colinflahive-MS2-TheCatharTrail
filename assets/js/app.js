const navbarToggler = document.getElementsByClassName('navbar-toggler')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

navbarToggler.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})