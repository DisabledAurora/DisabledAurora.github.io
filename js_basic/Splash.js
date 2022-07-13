/* Making the fire zoom in and fade out. */
var fire = document.getElementById("Intro");
$("body").fadeIn(1500);
setTimeout(function () {
  fire.classList.add("zoom");
  $(".fire").fadeOut(1500);
}, 5500);