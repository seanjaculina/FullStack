// grab the about and contact list items
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

// Grab the dropdown containers
const aboutDrop = document.querySelector(".about-dropdown");
const contactDrop = document.querySelector(".contact-dropdown");

// hover listener on about hover
about.addEventListener("mouseover", () => {
  aboutDrop.classList.add("show");
});
about.addEventListener("mouseleave", () => {
  aboutDrop.classList.remove("show");
});

// hover listener on contact hover
contact.addEventListener("mouseover", () => {
  contactDrop.classList.add("show");
});
contact.addEventListener("mouseleave", () => {
  contactDrop.classList.remove("show");
});
