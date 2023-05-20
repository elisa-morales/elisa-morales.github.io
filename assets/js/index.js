const initApp = () => {
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

function activeLink() {
  const activePage = window.location.href
  const navLinks = document.querySelectorAll("nav a").forEach((link) => {
    if (link.href === activePage) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

window.addEventListener("scroll", activeLink)
