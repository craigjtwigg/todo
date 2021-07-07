import './style.css'

const generateUI = (() => {
    const container = document.createElement("div")
    container.classList.add("container")
    document.body.appendChild(container)
   
    const generateHeader = (() => {
        const headerDiv = document.createElement("div")
        headerDiv.classList.add("headerDiv")
        container.appendChild(headerDiv)
        const logo = document.createElement("h1")
        logo.classList.add("logo")
        logo.textContent = "The Project Planner"
        headerDiv.appendChild(logo)
    })()

    const generateSideBar = (() => {
        const sideBarDiv = document.createElement("div")
        sideBarDiv.classList.add("sideBarDiv")
        container.appendChild(sideBarDiv)
        const projectsHeader = document.createElement("div")
        projectsHeader.classList.add("projectsHeader")
        sideBarDiv.appendChild(projectsHeader)
        projectsHeader.textContent = "PROJECTS"
    })()

    const generateMain = (() => {
        const mainContentContainer = document.createElement("div")
        mainContentContainer.classList.add("mainContentContainer")
        container.appendChild(mainContentContainer)
    })()


})()



