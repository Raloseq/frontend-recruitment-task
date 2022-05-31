const openModal = document.querySelector('.first-section__btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const bgModal = document.querySelector('.modal__bg');
const spanTimesClicked = document.querySelector('.modal__span');
const resetClicks = document.querySelector('.modal__reset-clicks');
const modalTable = document.querySelector('.modal__table');

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

const getData = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let dataTable = "";
            data.forEach(e => {
                const address = `${e.address.city}${e.address.street}${e.address.suite}`;
                
                dataTable += `
                <tr>
                        <td>${e.name}</td>
                        <td>${e.email}</td>
                        <td>${address}</td>
                        <td>${e.phone}</td>
                        <td>${e.company.name}</td>
                </tr>
                `;
            });
            modalTable.innerHTML += dataTable;
        })

}

getData();