function accionPlay() {
    let audios = ["./media/audio1.mp3",
        "./media/audio2.mp3",
        "./media/audio3.mp3",
        "./media/audio4.mp3",
        "./media/audio5.mp3"];
    for (let i = 0; i < 5; i++) {
        var i = new Audio();
        i.src = audios[i];
        i.play();
    }
}



function iniciar() {
    button = document.querySelectorAll("button");
    //button[0].addEventListener("click", accionPlay, false);

    for (let i = 0; i < button.lenght; i++) {
        button[i].addEventListener("click", accionPlay, false);
    }
}

window.addEventListener("load", iniciar, false);