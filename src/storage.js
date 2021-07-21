import { projectsArr, setProjectsArr } from ".";

//LOCAL STORAGE

function saveToStorage() {
  localStorage.setItem('projectsArr', JSON.stringify(projectsArr));
}

function loadFromStorage() {
  
  const loadProjects = JSON.parse(localStorage.getItem('projectsArr'));
  setProjectsArr(loadProjects) 
  if (projectsArr === null) projectsArr = [];
  console.table(projectsArr);
}

function clearStorage() {
  localStorage.clear();
  projectsArr = [];
  resetDisplay();
}

export { saveToStorage, loadFromStorage, clearStorage };
