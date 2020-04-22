// toggle menu on click on the menu icon to display the menu or hide
const mainNav = document.getElementById("js-menu");
const bars = document.getElementById("js-bars");
const times = document.getElementById("js-times");
const navLink = document.querySelectorAll("nav__link");

function toggleMenu() {
  if (mainNav.style.display === "none") {
    mainNav.style.display = "block";
    bars.style.visibility = "hidden";
    times.style.visibility = "visible";    
  } else {
    mainNav.style.display = "none";
    times.style.visibility = "hidden";
    bars.style.visibility = "visible";
  }
  // TODO - onclick close the menu back to display none
  navLink.onclick(function()  {
    mainNav.style.display = "none";
  });
}

// parallax effect - to scroll images at different speed than the foreground content when scrolling
const introParallax = document.getElementById("js-intro-parallax");
const serviceParallax = document.getElementById("js-service-parallax");
const contactParallax = document.getElementById("js-contact-parallax");
//const parallax = [introParallax, serviceParallax, contactParallax];

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  introParallax.style.backgroundPositionY =
    (offset - introParallax.offsetTop) * -0.7 + "px";
  serviceParallax.style.backgroundPositionY =
    (offset - serviceParallax.offsetTop) * -0.7 + "px";
  contactParallax.style.backgroundPositionY =
    (offset - contactParallax.offsetTop) * -0.7 + "px";

  // parallax.forEach = (prllx) => {
  //   prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * -.7 + "px";
  // };
});

// Nav links active when scrolling
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll(".main-section");

window.addEventListener("scroll", function () {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[index].classList.add("active");
});
