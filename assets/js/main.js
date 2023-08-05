import { projects } from "./data.js"

const portfolio = document.getElementById("portfolio")

const tabs = document.querySelectorAll("[data-target]")
const tabContents = document.querySelectorAll("[data-content]")
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "bx-sun"
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"

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
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  )
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  )
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

function getPortfolio() {
  let portfolioHtml = ""
  projects.map(
    ({ title, description, link, repository, image, alt }) =>
      (portfolioHtml += `
      <article class="portfolio-card">
              <img src=${image} alt=${alt}" class="portfolio-img" />

              <div class="portfolio-modal">
                <div>
                  <span class="portfolio-sub">${description}</span>
                  <h3 class="portfolio-title">${title}</h3>
                  <div class="portfolio-links">
                  <a href=${link} target="_blank" class="portfolio-button button button-small">
                    <i class="bx bx-link-alt"></i>
                  </a>
                  <a href=${repository} target="_blank" class="portfolio-button button button-small">
                    <i class='bx bxl-github'></i>
                  </a>
                </div>
                </div>
              </div>
            </article>
      `)
  )
  return portfolioHtml
}

function render() {
  portfolio.innerHTML = getPortfolio()
}

render()
