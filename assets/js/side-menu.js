let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container') //agarro el contenedor principal del menú

toggle.addEventListener('click', () => {
    //quiero que al hacer click active, agregará la propiedad toggle-function al elemento sideBar
    sideBar.classList.toggle('toggle-function');
})