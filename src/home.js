import { domElements, generateProjectCard, refreshProjects } from "./dom";
import { projectsArr } from ".";
import { saveToStorage } from "./storage";
import Project from "./project";

const projectFormInput = () => {
    const name = document.querySelector('#projectInput').value;
    return new Project(name);
  };

const resetProjectForm = () => {
    const name = document.querySelector('#projectInput');
    name.value = '';
  };

const submitProjectEvent = () => {
    domElements.projectSubBtn.addEventListener('click', () => {
        projectsArr.push(projectFormInput());
        generateProjectCard(projectFormInput());
        domElements.addProjectButton.style.transform = 'scale(1)';
        saveToStorage();
        refreshProjects()
        resetProjectForm();
      });
}  

export const generateProjectForm = () => {
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
  
  
    projectFormInput()
    resetProjectForm()
    submitProjectEvent()


  

  };
  