// dom elements

const domElements = (() => {
  const container = document.createElement('div');
  const headerDiv = document.createElement('div');
  const logo = document.createElement('h1');
  const sideBarDiv = document.createElement('div');
  const projectsHeader = document.createElement('div');
  const projects = document.createElement('div');
  const addProjectButton = document.createElement('button');
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
  domElements.addProjectButton.textContent = 'ADD PROJECT';
  domElements.addProjectButton.classList.add('addProjectButton');
  domElements.sideBarDiv.appendChild(domElements.addProjectButton);
  domElements.addProjectButton.style.transform = 'scale(0)';
};

//sidebar rendering

const renderSideBar = () => {
  renderSideBarContainer();
  renderSideBarHeader();
  renderProjectsContainer();
  renderAddProjectBtn();

  //refreshProjects();
  domElements.addProjectButton.addEventListener('click', () => {
    generateProjectForm();
  });
}

//main content container

const renderContentContainer = () => {
  
  domElements.mainContentContainer.classList.add('mainContentContainer');
  domElements.container.appendChild(domElements.mainContentContainer);
  generateProjectForm()
}

const generateProjectForm = () => {
  domElements.mainContentContainer.textContent = '';
 
  domElements.projectFormDiv.classList.add('projectFormDiv');
  domElements.mainContentContainer.appendChild(domElements.projectFormDiv);
  
  domElements.projectInput.setAttribute('id', 'projectInput');
  domElements.projectInput.setAttribute('type', 'text');
  domElements.projectInput.setAttribute('placeholder', 'What is the name of your project?');
  domElements.projectInput.classList.add('projectForm');
  domElements.projectInput.querySelector('.projectInput');
  domElements.projectInput.required = true;
  
  domElements.projectSubBtn.setAttribute('type', 'submit');
  domElements.projectSubBtn.textContent = 'CREATE PROJECT';
  domElements.projectSubBtn.classList.add('projectForm');
  domElements.projectSubBtn.setAttribute('id', 'projectSubBtn');
  domElements.projectFormDiv.appendChild(domElements.projectInput);
  domElements.projectFormDiv.appendChild(domElements.projectSubBtn);

  const projectFormInput = () => {
    const name = document.querySelector('#projectInput').value;
    return new Project(name);
  };

  const resetProjectForm = () => {
    const name = document.querySelector('#projectInput');
    name.value = '';
  };

  domElements.projectSubBtn.addEventListener('click', () => {
    projectsArr.push(projectFormInput());
    generateProjectCard(projectFormInput());
    console.table(domElements.projectsArr);
    resetProjectForm();
   // const addProjectButton = document.querySelector('.addProjectButton');
    domElements.addProjectButton.style.transform = 'scale(1)';
    saveToStorage();
  });
};


//modal functions

const renderModalBlur = () => {
domElements.modalBlur.classList.add('modalBlur');
document.body.appendChild(domElements.modalBlur);

}

const renderModal = () => {
  renderModalBlur()
  domElements.modal.classList.add('modal');
  domElements.modalBlur.appendChild(domElements.modal);
}

//full ui render

const renderUI = (() => {
  renderMasterContainer();
  renderHeader();
  renderLogo();
  renderSideBar()
  renderContentContainer()
  renderModal()
})();