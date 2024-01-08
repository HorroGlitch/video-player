import './style.css'

let back = document.querySelector("#back");
let skip = document.querySelector("#skip");
let reset = document.querySelector("#reset");
let video = document.querySelector("#myVideo");

back.addEventListener("click", ()=>{
    console.log("Wanna get back?");
    video.currentTime -= 10
})

skip.addEventListener("click", ()=>{
    console.log("Wanna skip?");
    video.currentTime += 10
})

reset.addEventListener("click", ()=>{
    console.log("Let's get back from the start");
    video.load();
})

video.addEventListener("click", ()=>{
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});