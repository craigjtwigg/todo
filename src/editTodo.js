import { saveToStorage } from './storage';
import {
  activeToDo,
  generateToDoNameInput,
  generateToDoDateInput,
  generateToDoPriorityInput,
  generateToDoNotesInput,
  generateToDoSubmitInput,
} from './createTodo';
import { activeProject } from '.';
import Edit from './edit.svg'

const genererateCloseButton = () => {
  const modal = document.querySelector('.modal');
  const modalBlur = document.querySelector('.modalBlur');
  const closeModal = document.createElement('button');
  closeModal.textContent = 'x';
  closeModal.classList.add('closeModal');
  modal.appendChild(closeModal);
  closeModal.addEventListener('click', () => {
    modalBlur.style.transform = 'scale(0)';
    modal.style.transform = 'scale(0)';
    modal.textContent = '';
  });
};

export const generateToDoModal = () => {
  const modalBlur = document.querySelector('.modalBlur');
  const modal = document.querySelector('.modal');
  modalBlur.style.transform = 'scale(1)';
  modal.style.transform = 'scale(1)';

  const toDoName = document.createElement('h2');
  toDoName.classList.add('toDoNameModal');
  console.log(activeToDo);
  toDoName.textContent = `${activeToDo.name}`;
  modal.appendChild(toDoName);

  const toDoDueDate = document.createElement('div');
  toDoDueDate.classList.add('toDoDueDateModal');
  toDoDueDate.innerHTML = `<span class ="modalLabels">Due Date: </span>${activeToDo.date}`;
  modal.appendChild(toDoDueDate);

  const toDoPriority = document.createElement('div');
  toDoPriority.classList.add('toDoPriorityModal');
  toDoPriority.innerHTML = `<span class ="modalLabels">Priority: </span>${activeToDo.priority}`;
  modal.appendChild(toDoPriority);

  const toDoNotes = document.createElement('div');
  toDoNotes.classList.add('toDoNotesModal');
  toDoNotes.innerHTML = `<span class ="modalLabels">Notes: </span>${activeToDo.notes}`;
  modal.appendChild(toDoNotes);

  genererateCloseButton();

  const editToDo = document.createElement('button');
  editToDo.classList.add('editToDo');
  const edit = new Image()
  edit.src = Edit
  editToDo.appendChild(edit)
  modal.appendChild(editToDo);
  editToDo.addEventListener('click', () => {
    console.log('hello');
    modal.textContent = '';
    generateToDoNameInput('editNameInput', modal);
    generateToDoDateInput('editDateInput', modal);
    generateToDoPriorityInput('editPriorityInput', modal);
    generateToDoNotesInput('editNotesInput', modal);
    generateToDoSubmitInput('editSubmitButton', 'SUBMIT CHANGES', modal);
    genererateCloseButton();
    const editName = document.getElementById('editNameInput');
    editName.value = activeToDo.name;
    const editDate = document.getElementById('editDateInput');
    editDate.value = activeToDo.date;
    const editPriority = document.getElementById('editPriorityInput');
    editPriority.value = activeToDo.priority;
    const editNotes = document.getElementById('editNotesInput');
    editNotes.value = activeToDo.notes;
    document
      .getElementById('editSubmitButton')
      .addEventListener('click', () => {
        activeToDo.name = editName.value;
        activeToDo.date = editDate.value;
        activeToDo.priority = editPriority.value;
        activeToDo.notes = editNotes.value;
        modal.textContent = '';
        modalBlur.style.transform = 'scale(0)';
        modal.style.transform = 'scale(0)';

        let cardIndex = activeProject.tasks.indexOf(activeToDo);
        const titleClass = '.titleDiv' + cardIndex;

        const titleDiv = document.querySelector(titleClass);

        titleDiv.textContent = editName.value;

        saveToStorage();
      });
  });
};
