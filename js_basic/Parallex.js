/* Moving the elements on the page as the user scrolls. */
var stars = document.getElementById("stars");
var moon = document.getElementById("moon");
var mountb = document.getElementById("mountb");
var txt = document.getElementById("message");
var mountf = document.getElementById("mountf");
var header = document.querySelector("header");

window.addEventListener("scroll", function () {
  var i = window.scrollY;
  stars.style.left = -i * 7 + "px";
  moon.style.top = -i * 1.05 + "px";
  mountb.style.top = i * 0.5 + "px";
  mountf.style.top = i * 0.0 + "px";
  txt.style.marginRight = i * 3 + "px";
  txt.style.marginTop = i * 1.15 + "px";
  header.style.top = i * 0.5 + "px";
});
