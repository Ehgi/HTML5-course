
var video = document.querySelector("#video"),
    button = document.querySelector("button");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".video-player-btn").click(function() {
  $(".video-player-btn").addClass('video-play-btn--hide');
})