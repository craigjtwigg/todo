import './style.css'
import generateUI, { generateProjectCard, generateProjectForm } from './dom'
import Project, { activeProject } from './project'
import Task from './task'
import { projectsArr } from './project'



generateUI()
generateProjectForm()

