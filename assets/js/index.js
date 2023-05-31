const initApp = () => {
  const hamburger = document.querySelector(".hamburger")
  const navbar = document.querySelector(".nav-bar")

  function toggle() {
    hamburger.classList.toggle("active")
    navbar.classList.toggle("active")
  }

  hamburger.addEventListener("click", toggle)
  navbar.addEventListener("click", toggle)
}

document.addEventListener("DOMContentLoaded", initApp)
