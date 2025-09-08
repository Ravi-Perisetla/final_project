// Toggle menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#navbar ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert("Thank you, " + name + "! Your message has been sent.");
      contactForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}
