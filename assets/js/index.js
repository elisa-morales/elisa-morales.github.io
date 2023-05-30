const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".nav-bar")

function toggle() {
  navbar.classList.toggle("active")
  hamburger.classList.toggle("active")
}

hamburger.addEventListener("click", toggle)
navbar.addEventListener("click", toggle)

/*const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button")
  const mobileMenu = document.getElementById("mobile-menu")

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("flex")
    hamburgerBtn.classList.toggle("toggle-btn")
  }

  hamburgerBtn.addEventListener("click", toggleMenu)
  mobileMenu.addEventListener("click", toggleMenu)
}

document.addEventListener("DOMContentLoaded", initApp)
*/
