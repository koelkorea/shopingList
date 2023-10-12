const logo = document.querySelector('.logo');

const shirt = document.querySelector('.filter .action .shirts');
const pants = document.querySelector('.filter .action .pants');
const skirt = document.querySelector('.filter .action .skirt');

const blue = document.querySelector('.filter .action.blue');
const yellow = document.querySelector('.filter .action.yellow');
const pink = document.querySelector('.filter .action.pink');

const eachItem = document.querySelectorAll('.items .container li');

logo.addEventListener('click', () => {
    eachItem.forEach( (li) => {
        li.style.display = '';
    });
});

shirt.addEventListener('click', () => {
    eachItem.forEach( (li) => {
        (li.querySelector('img').src.slice(-5, -4) != 't') ? li.style.display = 'none' : li.style.display = '';
    });
});

pants.addEventListener('click', () => {
    eachItem.forEach( (li) => {
        (li.querySelector('img').src.slice(-5, -4) != 'p') ? li.style.display = 'none' : li.style.display = '';
    });
});

skirt.addEventListener('click', () => {
    eachItem.forEach( (li) => {
        (li.querySelector('img').src.slice(-5, -4) != 's') ? li.style.display = 'none' : li.style.display = '';
    });
});

blue.addEventListener('click', () => {
    eachItem.forEach( (li) => {
        (li.querySelector('img').src.slice(53, -6) != 'blue') ? li.style.display = 'none' : li.style.display = '';
    });
});

yellow.addEventListener('click', () => {
    eachItem.forEach( (li) => {
        (li.querySelector('img').src.slice(53, -6) != 'yellow') ? li.style.display = 'none' : li.style.display = '';
    });
});

pink.addEventListener('click', () => {
    eachItem.forEach( (li) => {
        (li.querySelector('img').src.slice(53, -6) != 'pink') ? li.style.display = 'none' : li.style.display = '';
    });
});