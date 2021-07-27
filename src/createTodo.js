import { activeProject } from '.';
import { saveToStorage } from './storage';
import ToDo from './todo';
import { generateToDoModal } from './editTodo';
import { projectContent } from './dom';
import Trash from './delete.svg'
import Tick from './tick.svg'
import Details from './details.svg'

export let latestToDo = null;
export let activeToDo = null;
export let activeToDoID = null;

const setActiveToDo = (value) => {
  activeToDo = value;
};

const setLatestToDo = (value) => {
  latestToDo = value;
};

const setActiveToDoID = (value) => {
  activeToDoID = value;
};

export const refreshToDos = () => {
  const toDoContainer = document.querySelector('.projectContentContainer');
  toDoContainer.textContent = '';
  projectContent()
  generateToDoForm();
  activeProject.tasks.forEach((task) => generateToDoCard(task));
};

export const generateToDoCard = (todo) => {
  const toDoContainer = document.querySelector('.projectContentContainer');
  const toDoCard = document.createElement('div');

  toDoCard.classList.add('toDoCard');
  toDoContainer.appendChild(toDoCard);

  console.log('please be right below');
  console.log(`${activeProject.tasks.indexOf(todo)}`);
  let cardIndex = activeProject.tasks.indexOf(todo);
  const cardID = 'todo' + cardIndex;
  toDoCard.setAttribute('id', cardID);

  const toDoTitleDiv = document.createElement('div');
  const titleClass = 'titleDiv' + cardIndex;
  toDoTitleDiv.classList.add(titleClass);
  toDoTitleDiv.textContent = todo.name;
  toDoCard.appendChild(toDoTitleDiv);

  const toDoDateDiv = document.createElement('div');
  toDoDateDiv.classList.add('toDoDateDiv');
  toDoDateDiv.textContent = todo.date;

  const toDoPriorityDiv = document.createElement('div');
  toDoPriorityDiv.classList.add('toDoPriorityDiv');
  toDoPriorityDiv.textContent = todo.priority;
  const toDoNotesDiv = document.createElement('div');
  toDoNotesDiv.classList.add('toDoNotesDiv');
  toDoNotesDiv.textContent = todo.notes;

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttonsDiv');
  toDoCard.appendChild(buttonsDiv);

  const doneButtonToggle = (() => {
    const doneToDo = document.createElement('button');
    doneToDo.classList.add('doneToDo');
    const tick = new Image()
  tick.src = Tick
  doneToDo.appendChild(tick)
    buttonsDiv.appendChild(doneToDo);
    doneToDo.addEventListener('click', () => {
      let toDoIndex = buttonsDiv.parentNode.id.slice(4);
      toDoIndex = parseInt(toDoIndex);
      activeToDo = activeProject.tasks[toDoIndex];
      activeToDo.status = 'complete';
      console.log('to do:');
      console.table(activeProject.tasks);
      console.log('done:');
      console.table(activeProject.done);

      markAsDone();
      saveToStorage();
    });

    todo.status === 'complete' ? markAsDone() : null;
  })();

  function markAsDone() {
    const toDoID = buttonsDiv.parentNode.id;
    const thisCard = document.getElementById(toDoID);
    thisCard.classList.remove('toDoCard');
    thisCard.classList.add('done');
    let titleClass = '.titleDiv' + cardIndex;
    titleClass = titleClass.toString();
    const toDoTitle = document.querySelector(`${titleClass}`);
    toDoTitle.classList.remove(titleClass);
    toDoTitle.classList.add('strike');
  }

  const editToDo = document.createElement('button');
  editToDo.classList.add('editToDo');
  const details = new Image()
  details.src = Details
  editToDo.appendChild(details)
  editToDo.addEventListener('click', () => {
    setActiveToDoID(buttonsDiv.parentNode.id);
    let editMe = buttonsDiv.parentNode.id.slice(4);
    editMe = parseInt(editMe);
    setActiveToDo(activeProject.tasks[editMe]);
    generateToDoModal();
  });
  buttonsDiv.appendChild(editToDo);

  const deleteToDo = document.createElement('button');
  deleteToDo.classList.add('deleteToDo');
  const trash = new Image()
  trash.src = Trash
  deleteToDo.appendChild(trash)
  deleteToDo.addEventListener('click', () => {
    const deleteMe = buttonsDiv.parentNode.id.slice(4);
    setActiveToDo(activeProject.tasks[deleteMe]);
    const indexOfActive = activeProject.tasks.indexOf(activeToDo);
    console.log('delete this: ' + indexOfActive);
    activeProject.tasks.splice(indexOfActive, 1);
    console.table(activeProject.tasks);
    refreshToDos();
    saveToStorage();
  });
  buttonsDiv.appendChild(deleteToDo);
};

export const generateToDoNameInput = (id, parent) => {
  const toDoNameInput = document.createElement('input');
  toDoNameInput.setAttribute('id', id);
  toDoNameInput.setAttribute('type', 'text');
  toDoNameInput.setAttribute('placeholder', "'To-Do' title...");
  toDoNameInput.classList.add('toDoForm');
  toDoNameInput.required = true;
  parent.appendChild(toDoNameInput);
};

export const generateToDoDateInput = (id, parent) => {
  const toDoDueDate = document.createElement('input');
  toDoDueDate.setAttribute('type', 'date');
  toDoDueDate.setAttribute('id', id);
  toDoDueDate.classList.add('toDoForm');
  parent.appendChild(toDoDueDate);
};

export const generateToDoPriorityInput = (id, parent) => {
  const toDoPriority = document.createElement('select');
  toDoPriority.setAttribute('id', id);
  toDoPriority.classList.add('toDoForm');
  const lowPriority = document.createElement('option');
  lowPriority.setAttribute('value', 'Low');
  lowPriority.textContent = 'Low Priority';
  const regularPriority = document.createElement('option');
  regularPriority.setAttribute('value', 'Regular');
  regularPriority.textContent = 'Regular Priority';
  const highPriority = document.createElement('option');
  highPriority.setAttribute('value', 'High');
  highPriority.textContent = 'High Priority';

  toDoPriority.appendChild(lowPriority);
  toDoPriority.appendChild(regularPriority);
  toDoPriority.appendChild(highPriority);

  parent.appendChild(toDoPriority);
};

export const generateToDoNotesInput = (id, parent) => {
  const toDoNotesInput = document.createElement('textarea');
  toDoNotesInput.setAttribute('id', id);
  toDoNotesInput.setAttribute('placeholder', 'Notes...');
  toDoNotesInput.classList.add('toDoForm');

  parent.appendChild(toDoNotesInput);
};

export const generateToDoSubmitInput = (id, text, parent) => {
  const toDoSubBtn = document.createElement('button');
  toDoSubBtn.setAttribute('id', id);
  toDoSubBtn.setAttribute('type', 'submit');
  toDoSubBtn.textContent = text;
  toDoSubBtn.classList.add('toDoForm');

  parent.appendChild(toDoSubBtn);
};

export const generateToDoForm = () => {
     const toDoContainer = document.querySelector('.projectContentContainer');
    const projectHeader = document.createElement('h2');
  projectHeader.classList.add('projectHeader');
  projectHeader.textContent = activeProject.name;
  toDoContainer.appendChild(projectHeader);
  const toDoFormDiv = document.createElement('div');
  toDoFormDiv.classList.add('toDoFormDiv');

  generateToDoNameInput('toDoNameInput', toDoFormDiv);
  generateToDoDateInput('toDoDueDateInput', toDoFormDiv);
  generateToDoPriorityInput('toDoPriorityInput', toDoFormDiv);
  generateToDoNotesInput('toDoNotesInput', toDoFormDiv);
  generateToDoSubmitInput('toDoSubBtn', 'ADD TODO', toDoFormDiv);

 
  toDoContainer.appendChild(toDoFormDiv);

  const toDoFormInput = () => {
    const name = document.querySelector('#toDoNameInput').value;
    const date = document.querySelector('#toDoDueDateInput').value;
    const priority = document.querySelector('#toDoPriorityInput').value;
    const notes = document.querySelector('#toDoNotesInput').value;
    const status = 'incomplete';
    return new ToDo(name, date, priority, notes, status);
  };

  const toDoSubBtn = document.querySelector('#toDoSubBtn');
  toDoSubBtn.addEventListener('click', () => {
    activeProject.tasks.push(toDoFormInput());
    setLatestToDo(activeProject.tasks.length - 1);
    setActiveToDo(latestToDo);
    console.log('latest ' + latestToDo);
    refreshToDos();
    setActiveToDo(null);
    console.log('this projects todos:');
    console.table(activeProject.tasks);
    saveToStorage();
  });
};
