import { projectsArr, setProjectsArr } from '.';

//LOCAL STORAGE

function saveToStorage() {
  localStorage.setItem('projectsArr', JSON.stringify(projectsArr));
}

function loadFromStorage() {
  const loadProjects = JSON.parse(localStorage.getItem('projectsArr'));

  setProjectsArr(loadProjects);
  if (projectsArr === null) setProjectsArr([]);
  console.table(projectsArr);
}

function clearStorage() {
  localStorage.clear();
  setProjectsArr([]);
 // resetDisplay();
}

export { saveToStorage, loadFromStorage, clearStorage };
