const tabs = document.querySelectorAll("[data-target]")
const tabContents = document.querySelectorAll("[data-content]")

const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "bx-sun"
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light")
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun")

const scroll = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
})

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((item) => {
      item.classList.remove("filters-active")
    })
    target.classList.add("filters-active")

    tabs.forEach((item) => {
      item.classList.remove("filters-tab-active")
    })
    tab.classList.add("filters-tab-active")
  })
})

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

scroll.reveal(`.profile-border`)
scroll.reveal(`.profile-name`, { delay: 500 })
scroll.reveal(`.profile-profession`, { delay: 600 })
scroll.reveal(`.profile-social`, { delay: 700 })
scroll.reveal(`.filters-content`, { delay: 800 })
scroll.reveal(`.filters`, { delay: 900 })
