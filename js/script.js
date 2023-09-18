///menu///
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click",function(){
    menu.classList.toggle("mostrar");
});
const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i = 0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener("click",function(){
        if(window.innerWidth<768){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");

            }else{
                subMenu.classList.add("desplegar");
                subMenu.style.height = height+"px";
            }
        }
    });
}


///api//
function onYouTubeIframeAPIReady() {
    var player = new YT.Player('player', {
        height: '200',
        width: '300',
        videoId: 'ar52Rv6KnnI', 
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0, 
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    
}

function onPlayerStateChange(event) {
}
//modo oscuro//
const botonCambioTema = document.getElementById("cambiar-tema");
const body = document.body;
const iconoModo = document.getElementById("icono");
botonCambioTema.addEventListener("click", () => {
    body.classList.toggle("modo-oscuro");
    const modoOscuroActivado = body.classList.contains("modo-oscuro");
    if (modoOscuroActivado) {
        iconoModo.className = "fa-regular fa-moon";
    } else {
        iconoModo.className = "fa-regular fa-sun";
    }
});


///carrusel de imagenes//
const urlsImagenes = [
    'https://a-z-animals.com/media/az-banner-bg.jpg',
    'https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?cs=srgb&dl=pexels-anthony-%F0%9F%93%B7%F0%9F%93%B9%F0%9F%99%82-133459.jpg&fm=jpg',
    'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg',
    'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww&w=1000&q=80'
    
];
const elementoImagen = document.getElementById('slider-image');
let indiceActual = 0;
function cambiarImagen() {
    elementoImagen.src = urlsImagenes[indiceActual];
    indiceActual = (indiceActual + 1) % urlsImagenes.length;
}
setInterval(cambiarImagen, 5000);

//alerta//
document.getElementById("botonAlerta").addEventListener("click", function() {
    alert("Esta página no está disponible");
});

