const bar = document.getElementById("bar");
const navLinks = document.getElementById("navLinks");

if (bar && navLinks) {
  bar.addEventListener("click", (event) => {
    event.stopPropagation();
    navLinks.classList.toggle("show");
  });

  
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !bar.contains(event.target)) {
      navLinks.classList.remove("show");
    }
  });
}