const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const bodyEl = document.body;

if(menuToggle) {
    menuToggle.addEventListener('click', ()=> {
        if (menuToggle.classList.contains('active')) {

            menuToggle.classList.remove('active');

    

        } else {
            menuToggle.classList.add('active');
        }
    })
}

