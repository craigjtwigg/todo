import './style.css';
import Project from './project';
import Task from './todo';
import { saveToStorage, loadFromStorage, clearStorage } from './storage';

export let activeProject = null;

export let projectsArr = [];

export const setProjectsArr = (value) => {
  projectsArr = value;
};

export const setActiveProject = (project) => {
  activeProject = project;
};

//loadFromStorage();

//generateUI();
//generateProjectForm();
