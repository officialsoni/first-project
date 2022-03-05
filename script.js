let lineicon = document.querySelector('.line-icon');
let leftoption = document.querySelector('.left-option');
let closebtn = document.querySelector('.close-btn > i');

lineicon.addEventListener('click', () => {
    leftoption.style.left = '0%';

})

closebtn.addEventListener('click', () => {
    leftoption.style.left = '-100%';

})