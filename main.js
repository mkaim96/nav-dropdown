const more = document.querySelector('#more');
const dropdown = document.querySelector(".dropdown");
const overlay = document.querySelector('.overlay');
const arrow = document.querySelector('.arrow');

overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    dropdown.classList.remove('show');
    arrow.classList.remove('flip');
})

more.addEventListener('click', () => {
    overlay.classList.toggle('show');
    dropdown.classList.toggle('show');
    arrow.classList.toggle('flip');
})
