/**
 * If the direction is 1, then if the index is 0, set the interval to 1000, otherwise set it to a
 * random number between 50 and 800. If the direction is -1, then if the index is the length of the
 * string, set the interval to 1500, otherwise set it to 100.
 */
var direction = 1;
var i = 0;
var textarea = $(".term");
var text = "Fatal Error: life.deb not found";
var choiceIndex = Math.floor(Math.random() * text.length);

function count() {
  i += direction;
  direction *= i % text.length == 0 ? -1 : 1;
  textarea.text(text.substr(0, i));
  clearInterval(time);

  if (direction === 1) {
    if (i === 0) {
      time = setInterval(count, 1000);
    } else {
      time = setInterval(count, Math.floor(Math.random() * 700));
    }
  } else {
    if (i === text.length) {
      time = setInterval(count, 1500);
    } else {
      /* Setting the interval to 10 milliseconds (Backspace). */
      time = setInterval(count, 10);
    }
  }
}
var time = setInterval(count, 1000);
