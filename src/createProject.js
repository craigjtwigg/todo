import { domElements, projectContent } from './dom';
import { projectsArr, setActiveProject, activeProject } from '.';
import { generateToDoForm, refreshToDos } from './createTodo';
import { saveToStorage } from './storage';
import Project from './project';
import Illustration from './illustration.svg'


export const generateDemoProject = () => {
if (projectsArr.length == 0){  
const demoProject = new Project('Demo Project')
projectsArr.push(demoProject)
generateProjectCard(demoProject)
}
}

export const refreshProjects = () => {
  domElements.projects.textContent = '';
  projectsArr.forEach((project) => generateProjectCard(project));
};

export const generateProjectCard = (project) => {
  if (project.name == ''){
    console.log("no dice")
  } else {
  const projectDiv = document.createElement('div');
  console.log('this is the index: ' + projectsArr.indexOf(project));
  const projectIndex = projectsArr.indexOf(project);
  projectDiv.classList.add('projectDiv');
  projectDiv.textContent = project.name;
  projectsArr.forEach((obj) => projectDiv.setAttribute('id', projectIndex));
  domElements.projects.appendChild(projectDiv);

  document.getElementById(`${projectIndex}`).addEventListener('click', () => {
    setActiveProject(projectsArr[`${projectIndex}`]);
    console.log(
      'The active project is: ' +
        'ID: ' +
        projectIndex +
        ' Name: ' +
        activeProject.name
    );
    console.table(activeProject.tasks);
    domElements.mainContentContainer.textContent = '';
    domElements.mainContentContainer.appendChild(projectContent());
    generateToDoForm();
    refreshToDos();
  });
}
};

const projectFormInput = () => {
  const name = document.querySelector('#projectInput').value;
  return new Project(name)
};

const resetProjectForm = () => {
  const name = document.querySelector('#projectInput');
  name.value = '';
};

const submitProjectEvent = () => {
  domElements.projectSubBtn.addEventListener('click', () => {
    projectsArr.push(projectFormInput());
    generateProjectCard(projectFormInput());
    //domElements.addProjectButton.style.transform = 'scale(1)';
    saveToStorage();
    refreshProjects();
    resetProjectForm();
  });
};

export const generateProjectForm = () => {
  domElements.mainContentContainer.textContent = '';
  const newProjectHeader = document.createElement('h2')
  newProjectHeader.classList.add('newProjectHeader')
  newProjectHeader.textContent = "Start a New Project!"
  domElements.mainContentContainer.appendChild(newProjectHeader)
  domElements.projectFormDiv.classList.add('projectFormDiv');
  domElements.mainContentContainer.appendChild(domElements.projectFormDiv);
  domElements.projectInput.setAttribute('id', 'projectInput');
  domElements.projectInput.setAttribute('type', 'text');
  domElements.projectInput.setAttribute(
    'placeholder',
    'What is the name of your project?'
  );
  domElements.projectInput.classList.add('projectForm');
  domElements.projectInput.querySelector('.projectInput');
  domElements.projectInput.required = true;
  domElements.projectSubBtn.setAttribute('type', 'submit');
  domElements.projectSubBtn.textContent = 'CREATE PROJECT';
  domElements.projectSubBtn.classList.add('projectForm');
  domElements.projectSubBtn.setAttribute('id', 'projectSubBtn');
  domElements.projectFormDiv.appendChild(domElements.projectInput);
  domElements.projectFormDiv.appendChild(domElements.projectSubBtn);
  const illustration = new Image()
  illustration.src = Illustration
  illustration.classList.add('illustration')
  domElements.projectFormDiv.appendChild(illustration)


  projectFormInput();
  submitProjectEvent();
  resetProjectForm();
};
