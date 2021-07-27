import Remove from './remove.svg'
import { activeProject, setActiveProject, projectsArr, setProjectsArr } from '.'
import { saveToStorage } from './storage'
import { refreshProjects } from './createProject'
import { domElements, projectContent } from './dom'
import { generateToDoForm, refreshToDos } from './createTodo'

export const generateButton = () => {
    const removeButton = document.createElement('button')
    removeButton.classList.add = ('removeProject')
    const removeIcon = new Image()
    removeIcon.src = Remove
    removeButton.appendChild(removeIcon)
    domElements.mainContentContainer.appendChild(removeButton)
    const activeProjectIndex = projectsArr.indexOf(activeProject)
    removeButton.addEventListener('click', () => {
        projectsArr.splice(activeProjectIndex, 1)
        postRemoveReset()
    })
} 

export const postRemoveReset = () => {
    const newActiveProject = projectsArr[0];
    setActiveProject(newActiveProject)
    domElements.mainContentContainer.appendChild(projectContent());
    generateToDoForm();
    refreshToDos();
    refreshProjects();
}

export const removeProjectEvent = () => {
    const removeButton = document.querySelector('.removeProject')
    const activeProjectIndex = projectsArr.indexOf(activeProject)
    removeButton.addEventListener('click', () => {
        projectsArr.splice(activeProjectIndex, 1)
        postRemoveReset()
    })
}



export const renderRemoveProjectBtn = () => {
    generateButton()
    //removeProjectEvent()
}