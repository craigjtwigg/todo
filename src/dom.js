import { active, projectsArr } from "./project"

let activeProject = null

const generateUI = () => {
   
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

}

export const container = document.querySelector(".container")
export const headerDiv = document.querySelector(".headerDiv")
export const sideBarDiv = document.querySelector(".sideBarDiv")
//export const mainContentContainer = document.querySelector(".mainContentContainer")

export const generateProjectCard = (project) => {
    const sideBarDiv = document.querySelector(".sideBarDiv")
        const projectDiv = document.createElement("div")
        const projectIndex = projectsArr.length - 1
        projectDiv.classList.add("projectDiv")
        projectDiv.textContent = project.name
        sideBarDiv.appendChild(projectDiv)
        projectsArr.forEach(obj => { 
        projectDiv.setAttribute("id", projectIndex)
})
    
//const eachProject = document.querySelectorAll(".projectDiv")
//eachProject.forEach(project => { project.addEventListener("click", () => { console.log(project.id) } ) } )    

    document.getElementById(`${projectIndex}`).addEventListener("click", () => {
        console.log(projectIndex)
       activeProject = projectsArr[`${projectIndex}`]
    console.log("The active project is: " + activeProject.name)
    })

}






export const generateProjectForm = () => {
    const mainContentContainer = document.querySelector(".mainContentContainer")
    const projectFormDiv = document.createElement("div")
    projectFormDiv.classList.add("projectFormDiv")
    mainContentContainer.appendChild(projectFormDiv)
    const projectInput = document.createElement("input")
    projectInput.setAttribute("id", "projectInput")
    projectInput.setAttribute("type", "text")
    projectInput.setAttribute("placeholder", "What is the name of your project?")
    projectInput.classList.add("projectForm")
    projectInput.querySelector(".projectInput")
    projectInput.required = true;
    const projectSubBtn = document.createElement("button")
    projectSubBtn.setAttribute("type", "submit")
    projectSubBtn.textContent = "CREATE PROJECT"
    projectSubBtn.classList.add("projectForm")
    projectSubBtn.setAttribute("id", "projectSubBtn")
    projectFormDiv.appendChild(projectInput)
    projectFormDiv.appendChild(projectSubBtn)
}


export default generateUI
               