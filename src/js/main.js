const openModal = document.querySelector('.first-section__btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const bgModal = document.querySelector('.modal__bg');
const spanTimesClicked = document.querySelector('.modal__span');
const resetClicks = document.querySelector('.modal__reset-clicks');

const timesClicked = localStorage.getItem('timesClicked');

let counter = timesClicked;

openModal.addEventListener('click', () => {
    modal.classList.add('active');
    counter++;
    if (counter > 5) {
        resetClicks.classList.add('active-reset-btn');
    }
    localStorage.setItem('timesClicked', counter);
    spanTimesClicked.textContent = counter;
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    resetClicks.classList.remove('active-reset-btn');
})

bgModal.addEventListener('click', () => {
    modal.classList.remove('active');
    resetClicks.classList.remove('active-reset-btn');
})

resetClicks.addEventListener('click', () => {
    counter = 0;
    localStorage.setItem('timesClicked', counter);
    spanTimesClicked.textContent = counter;
    resetClicks.classList.remove('active-reset-btn');
})