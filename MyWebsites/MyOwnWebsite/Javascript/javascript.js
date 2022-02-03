let toggleButton = document.querySelector('toggle-button')[0];
let navbarLinks = document.querySelector('navigation-bar-header')[0];


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

function myFunc() {
    let nameOfFunction = document.getElementById('demo').innerHTML = 'Everything will be ready soon.'
    nameOfFunction = document.getElementById('demo').style.color = "red";
}