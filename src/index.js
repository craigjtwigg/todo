import './style.css'
import generateUI, { generateProjectCard, generateProjectForm } from './dom'
import Project from './project'
import Task from './task'
import { projectsArr } from './project'



generateUI()
generateProjectForm()


const formInput = () => {
    const name = document.querySelector("#projectInput").value;
    return new Project(name)
}

const resetForm = () => {
    const name = document.querySelector("#projectInput")
    name.value = ""
}

const projectSubBtn = document.querySelector("#projectSubBtn")
projectSubBtn.addEventListener("click", () => {
    projectsArr.push(formInput())
    //generateProjectCard(formInput())
    console.table(projectsArr)
    resetForm();
    
})
