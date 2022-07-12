/* A JavaScript code that is used to make the navbar active when the user scrolls to the section. */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("section.top .menu li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectiontop = section.offsetTop;
    const sectionheight = section.clientHeight;
    if (pageYOffset >= sectiontop - sectionheight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
