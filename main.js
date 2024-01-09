import './style.css'

let back = document.querySelector("#back");
let skip = document.querySelector("#skip");
let reset = document.querySelector("#reset");
let video = document.querySelector("#myVideo");
let scrollbar = document.querySelector("#scrollbar");

back.addEventListener("click", ()=>{
    video.currentTime -= 10;
});

skip.addEventListener("click", ()=>{
    video.currentTime += 10;
});

reset.addEventListener("click", ()=>{
    video.load();
});

video.addEventListener("click", ()=>{
    scrollbar.setAttribute('max', parseInt(video.duration));
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

scrollbar.addEventListener("input", ()=>{
    
    video.currentTime = scrollbar.value
})

video.addEventListener("timeupdate", ()=>{
    scrollbar.value = video.currentTime;
    // scrollbarMax.value = video.currentTime;
});

