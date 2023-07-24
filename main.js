// Estilos seleccionado
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // desaparecemos el menu una vez seleccionado
    var x = document.getElementById("nav");
    x.className = "";
}

// MENU R E S P O N S I V E
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

// Detectar scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("photoshop").classList.add("barra-progreso1");
        document.getElementById("lightroom").classList.add("barra-progreso2");
        document.getElementById("snapseed").classList.add("barra-progreso3");
        document.getElementById("picsart").classList.add("barra-progreso4");
    }
}

// Detectar si el navegador es Google Chrome
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

// Mostrar el mensaje de advertencia como una alerta modal si el navegador no es Chrome
if (!isChrome) {
    const modal = document.getElementById("chrome-warning");
    modal.style.display = "block";
}

// Función para cerrar el cuadro de diálogo modal
function closeModal() {
    const modal = document.getElementById("chrome-warning");
    modal.style.display = "none";
}