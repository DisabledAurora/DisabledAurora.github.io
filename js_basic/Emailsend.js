/**
 * It takes the values of the input fields and sends them to the emailjs server
 * @param params - {
 */
function sendMail(params) {
  var tempv = {
    name: document.getElementById("Name").value,
    email: document.getElementById("Email").value,
    phone: document.getElementById("Phone").value,
    message: document.getElementById("msg").value,
  };
  if (tempv.name != "" && tempv.email != "") {
    emailjs
      .send("service_svyxp0d", "template_p1xdv1g", tempv)
      .then((result) => {
        alert("Successfully sent!");

        const inputs = document.querySelectorAll("#Name, #msg, #Email, #Phone");

        inputs.forEach((input) => {
          input.value = "";
        });
      })
      .catch((e) => {
        alert("Request was not submitted! Try again later");
      });
  }
}
