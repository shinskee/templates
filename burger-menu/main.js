const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const bodyEl = document.body;

if(menuToggle) {
    menuToggle.addEventListener('click', ()=> {
        if (menuToggle.classList.contains('active')) {

            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            bodyEl.classList.remove('lock');
    

        } else {
            menuToggle.classList.add('active');
            mobileMenu.classList.add('active');
            bodyEl.classList.add('lock');
        }
    })
}

