let acc = document.querySelectorAll(".accordion");
//selecciono a todos los elem que tengan clase accordion

let i;

/*/
Creo un bucle for que contenga la funcionalidad de
la barra de accordion.
Uso Event Listener con el clic como evento
y agregando una función para los botones.
/*/
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight =panel.scrollHeight + "px";
        }
    })
}