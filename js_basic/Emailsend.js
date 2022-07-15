/**
 * It takes the values of the input fields and sends them to the emailjs server
 * @param params - {
 */
function sendMail(params) {
  var tempv = {
    name: document.getElementById("Name").value,
    email: document.getElementById("Email").value,
    message: document.getElementById("msg").value,
  };

  var ye = document.getElementById("success");
  var nah = document.getElementById("failure");

  if (tempv.name != "" && tempv.email != "") {
    emailjs
      .send("service_svyxp0d", "template_p1xdv1g", tempv)
      .then((result) => {
        ye.classList.remove("nodisplaynow");

        const inputs = document.querySelectorAll("#Name, #msg, #Email");
        inputs.forEach((input) => {
          input.value = "";
        });
      })
      .catch((e) => {
        nah.classList.remove("nodisplaynow");
      });
  }
}
