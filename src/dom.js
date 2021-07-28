import { activeProject } from ".";
import { generateDemoProject, generateProjectForm, refreshProjects } from "./createProject";
import { saveToStorage, loadFromStorage, clearStorage } from "./storage";
import Add from './add.svg'
import Clear from './clear.svg'


// dom elements

export const domElements = (() => {
  const container = document.createElement('div');
  const headerDiv = document.createElement('div');
  const logo = document.createElement('h1');
  const sideBarDiv = document.createElement('div');
  const projectsHeader = document.createElement('div');
  const projects = document.createElement('div');
  const addProjectButton = document.createElement('button');
  const clearProjectsButton = document.createElement('button')
  const mainContentContainer = document.createElement('div');
  const projectFormDiv = document.createElement('div');
  const projectInput = document.createElement('input');
  const projectSubBtn = document.createElement('button');
  const modalBlur = document.createElement('div');
  const modal = document.createElement('div');

  return {
    container,
    headerDiv,
    logo,
    sideBarDiv,
    projectsHeader,
    projects,
    addProjectButton,
    clearProjectsButton,
    mainContentContainer,
    projectFormDiv,
    projectInput,
    projectSubBtn,
    modal,
    modalBlur
  };
})();

// window container

const renderMasterContainer = () => {
  domElements.container.classList.add('container');
  document.body.appendChild(domElements.container);
};

// header

const renderHeader = () => {
  domElements.headerDiv.classList.add('headerDiv');
  domElements.container.appendChild(domElements.headerDiv);
};

//logo

const renderLogo = () => {
  domElements.logo.classList.add('logo');
  domElements.logo.textContent = 'Project TODOs';
  domElements.headerDiv.appendChild(domElements.logo);
};

//sidebar

//sidebar container


const renderSideBarContainer = () => {
  domElements.sideBarDiv.classList.add('sideBarDiv');
  domElements.container.appendChild(domElements.sideBarDiv);
};

//sidebar header

const renderSideBarHeader = () => {
  domElements.projectsHeader.classList.add('projectsHeader');
  domElements.sideBarDiv.appendChild(domElements.projectsHeader);
  domElements.projectsHeader.textContent = 'PROJECTS';
};

//sidebar project nav container

const renderProjectsContainer = () => {
  domElements.projects.classList.add('projectsDiv');
  domElements.sideBarDiv.appendChild(domElements.projects);
};

//sidebar add new project

const renderAddProjectBtn = () => {
  const add = new Image()
  add.src = Add
  add.classList.add('addSVG')
  domElements.addProjectButton.appendChild(add)
  domElements.addProjectButton.classList.add('addProjectButton');
  domElements.sideBarDiv.appendChild(domElements.addProjectButton);
  domElements.addProjectButton.style.transform = 'scale(1)';
};

//sidebar clear projects
const renderClearProjectBtn = () => {
  const clear = new Image()
  clear.src = Clear
  clear.classList.add('clearSVG')
  domElements.clearProjectsButton.appendChild(clear)
  domElements.clearProjectsButton.classList.add('clearProjectsButton');
  domElements.sideBarDiv.appendChild(domElements.clearProjectsButton);
  domElements.clearProjectsButton.style.transform = 'scale(1)';
};

//sidebar rendering

const renderSideBar = () => {
  renderSideBarContainer();
  renderSideBarHeader();
  renderProjectsContainer();
  renderAddProjectBtn();
  renderClearProjectBtn()
  refreshProjects();
  
  domElements.addProjectButton.addEventListener('click', () => {
    generateProjectForm();
  });

  domElements.clearProjectsButton.addEventListener('click', () => {
    clearStorage()
    refreshProjects()
  })
  
}

//main content container

const renderContentContainer = () => {
  domElements.mainContentContainer.classList.add('mainContentContainer');
  domElements.container.appendChild(domElements.mainContentContainer);
}





export const projectContent = () => {
  const projectContentContainer = document.createElement('div');
  projectContentContainer.classList.add('projectContentContainer');
  const projectHeader = document.createElement('h2');
  projectHeader.classList.add('projectHeader');
  projectHeader.textContent = activeProject.name;
  projectContentContainer.appendChild(projectHeader);

  return projectContentContainer;
};








//modal functions

export const renderModalBlur = () => {
domElements.modalBlur.classList.add('modalBlur');
document.body.appendChild(domElements.modalBlur);

}

export const renderModal = () => {
  renderModalBlur()
  domElements.modal.classList.add('modal');
  domElements.modalBlur.appendChild(domElements.modal);
}




//full ui render

const renderUI = (() => {
  //clearStorage()
  loadFromStorage()
  renderMasterContainer();
  renderHeader();
  renderLogo();
  renderSideBar()
  renderContentContainer()
  generateDemoProject()
  generateProjectForm()
  renderModal()
  //refreshProjects()
})();