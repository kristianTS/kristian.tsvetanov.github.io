let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navbarLinks = document.getElementsByClassName('aboutUs-navMenu-Header')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})