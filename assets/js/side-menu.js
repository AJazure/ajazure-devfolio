let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container') //agarro el contenedor principal del menú

toggle.addEventListener('click', () => {
    //quiero que al hacer click active
    sideBar.classList.toggle('toggle-function');
})