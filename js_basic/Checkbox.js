/* The above code is disabling the buttons when the checkbox is not checked. */
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const reset = document.querySelector("#reset");
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function () {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
reset.addEventListener("click", function () {
  for (const btn of btns) {
    btn.disabled = true;
  }
  checkbox.checked = false;
  const inputs = document.querySelectorAll("#Name, #msg, #Email, #Phone");

  inputs.forEach((input) => {
    input.value = "";
  });
});
