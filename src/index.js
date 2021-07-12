import './style.css'
import generateUI, { generateProjectCard, generateProjectForm } from './dom'
import Project, { activeProject } from './project'
import Task from './task'
import { projectsArr } from './project'



generateUI()
generateProjectForm()


const projectFormInput = () => {
    const name = document.querySelector("#projectInput").value;
    return new Project(name)
}

const resetProjectForm = () => {
    const name = document.querySelector("#projectInput")
    name.value = ""
}

const projectSubBtn = document.querySelector("#projectSubBtn")
projectSubBtn.addEventListener("click", () => {
    projectsArr.push(projectFormInput())
    generateProjectCard(projectFormInput())
    console.table(projectsArr)
    resetProjectForm();
    
})


