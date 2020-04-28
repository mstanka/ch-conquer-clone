// toggle menu on click on the menu icon to display the menu or hide
const navCollapsed = document.getElementById("nav__collapsed");
const menuOpen = document.getElementById("js-menu-open");
const menuClose = document.getElementById("js-menu-close");
let navStatus = true; 

function toggleMenu() {
  if (navStatus === false) {
    navCollapsed.style.opacity = 1;
    menuOpen.style.visibility = "hidden";
    menuClose.style.visibility = "visible";   
    navStatus = true;

  } else {
    navCollapsed.style.opacity = 0;
    menuClose.style.visibility = "hidden";
    menuOpen.style.visibility = "visible";
    navStatus = false;
  }
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
