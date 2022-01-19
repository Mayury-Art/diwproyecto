function accionPlay() {
    var reproducir = new Audio();
    reproducir.src = "./media/audio1.mp3";
    reproducir.play();
}



function iniciar() {
    button = document.querySelectorAll("button");
    button[0].addEventListener("click", accionPlay, false);
    
    /* for (let i = 0; i < button.lenght; i++) {
        button[i].addEventListener("click", accionPlay, false);
    } */
}

window.addEventListener("load", iniciar, false);