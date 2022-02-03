'use strict';
const modal = document.querySelector('.modal');
const modalss = document.querySelector('.modalss');
const modalsss = document.querySelector('.modalsss');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModals = document.querySelectorAll('.show-modals');
const btnsOpenModalss = document.querySelectorAll('.show-modalss');
const btnsOpenModalsss = document.querySelectorAll('.show-modalsss');


const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModalss = function() {
    modalss.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModalsss = function() {
    modalsss.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModals.length; i++) {
    btnsOpenModals[i].addEventListener('click', function() {
        console.log('Button clicked ')
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    });
}

for (let i = 0; i < btnsOpenModalss.length; i++) {
    btnsOpenModalss[i].addEventListener('click', function() {
        console.log('Button clicked ')
        modalss.classList.remove('hidden');
        overlay.classList.remove('hidden')
    });
}
for (let i = 0; i < btnsOpenModalsss.length; i++) {
    btnsOpenModalsss[i].addEventListener('click', function() {
        console.log('Button clicked ')
        modalsss.classList.remove('hidden')
        overlay.classList.remove('hidden')
    });
}


btnCloseModal.addEventListener('click', closeModal)
btnCloseModal.addEventListener('click', closeModalss)
btnCloseModal.addEventListener('click', closeModalsss)
overlay.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModalss);
overlay.addEventListener('click', closeModalsss);

document.addEventListener("keydown", function(e) {
    console.log(e.key)
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
        if (!modalss.classList.contains('hidden')) {
            closeModalss();
        }
        if (!modalsss.classList.contains('hidden')) {
            closeModalsss();
        }
    }
})