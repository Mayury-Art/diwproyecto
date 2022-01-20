let boton1 = document.getElementById("audio1");
let audio1 = new Audio();
audio1.src = "./media/audio1.mp3";
boton1.addEventListener("click", function (e) {
    if (!audio1.paused && !audio1.ended) {
        audio1.pause();
    } else {
        audio1.play();
    }
});

let boton2 = document.getElementById("audio2");
let audio2 = new Audio();
audio2.src = "./media/audio2.mp3";
boton2.addEventListener("click", function (e) {
    if (!audio2.paused && !audio2.ended) {
        audio2.pause();
    } else {
        audio2.play();
    }
});

let boton3 = document.getElementById("audio3");
let audio3 = new Audio();
audio3.src = "./media/audio3.wav";
boton3.addEventListener("click", function (e) {
    if (!audio3.paused && !audio3.ended) {
        audio3.pause();
    } else {
        audio3.play();
    }
});

let boton4 = document.getElementById("audio4");
let audio4 = new Audio();
audio4.src = "./media/audio4.mp3";
boton4.addEventListener("click", function (e) {
    if (!audio4.paused && !audio4.ended) {
        audio4.pause();
    } else {
        audio4.play();
    }
});

let boton5 = document.getElementById("audio5");
let audio5 = new Audio();
audio5.src = "./media/audio5.mp3";
boton5.addEventListener("click", function (e) {
    if (!audio5.paused && !audio5.ended) {
        audio5.pause();
    } else {
        audio5.play();
    }
});