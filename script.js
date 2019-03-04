// Play and Pause The Video
var video = document.querySelector(".video")
var playPause = document.querySelector("#play-pause")

function play01() {

    if (video.paused) {
        console.log("Video Is Played")
        video.play()
        playPause.innerHTML = "<i class='fas fa-pause'></i>"

    } else {
        console.log("Video Is Paused")
        video.pause()
        playPause.innerHTML = "<i class='fas fa-play'></i>"
    }
}

// Progress Bar  
var progress = document.querySelector(".orange-juice")
var Vid = document.querySelector(".video")



Vid.addEventListener('timeupdate', function () {
    var myTime = Vid.currentTime / Vid.duration
    progress.style.width = myTime * 100 + "%"
})

// Muted Button 
var muteButton = document.getElementById("mute");

// Event listener for the mute button
muteButton.addEventListener("click", function () {
    if (video.muted == false) {
        // Mute the video
        console.log("Video is Muted")
        video.muted = true;

        // Update the button text
        muteButton.innerHTML = "<i class='fas fa-volume-mute'></i>"
    } else {
        // Unmute the video
        console.log("Video is UnMuted")
        video.muted = false;

        // Update the button text
        muteButton.innerHTML = "<i class='fas fa-volume-up'></i>"
    }
});

// Full Screen 
var fullScreenButton = document.getElementById("full-screen");

// Event listener for the full-screen button
fullScreenButton.addEventListener("click", function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome and Safari
    }
});