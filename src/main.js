import '/scss/style.scss';

const btnOpen = document.querySelector('#btnOpen');
const body = document.querySelector('body');
const main = document.querySelector('main');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

function openMobileMenu() {
    console.log('Open Menu')

    btnOpen.setAttribute('aria-expanded', 'true');
    body.classList.add('noscroll')
    navContent.removeAttribute('inert');
    main.setAttribute('inert', '');
    btnClose.focus();
}
function closeMobileMenu() {
    console.log('close menu');

    btnOpen.setAttribute('aria-expanded', 'false');

    body.classList.remove('noscroll')
    navContent.setAttribute('inert', '');
    main.removeAttribute('inert');
    btnOpen.focus();
    
}

function setupNav(e) {
    if(e.matches) {
        //is mobile
        console.log('is mobile')
        navContent.setAttribute('inert', '');


        setTimeout(() => {
         navContent.style.display = 'block'
         navOverlay.style.display = 'block'
        }, 500);
         
    } else {
        console.log('is desktop');
        navContent.style.display = ''
        navContent.removeAttribute('inert');
        main.removeAttribute('inert');
    }
}
setupNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu)
media.addEventListener('change', function(e) {
    setupNav(e);
});

document.addEventListener('keyup', (e) => {
    if(e.key === 'Tab') {
        console.log(document.activeElement);
    }
})