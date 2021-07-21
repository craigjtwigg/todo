/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//export let projectsArr = []

class Project {
    constructor(name){
        this.tasks = []
        this.done = []
        this.name = name

        const projectID = `${name}`.toLowerCase().split(" ").join("")
       
        this.id = projectID
    
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    constructor(name, date, priority, notes, status){
        this.name = name
        this.date = date
        this.priority = priority
        this.notes = notes
        this.status = status

        const taskID = name.split(" ").join("") + Math.floor(Math.random() * (100 - 999 + 100))
           
        this.id = taskID
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "latestToDo": () => (/* binding */ latestToDo),
/* harmony export */   "activeToDo": () => (/* binding */ activeToDo),
/* harmony export */   "activeToDoID": () => (/* binding */ activeToDoID),
/* harmony export */   "generateToDoForm": () => (/* binding */ generateToDoForm),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "headerDiv": () => (/* binding */ headerDiv),
/* harmony export */   "sideBarDiv": () => (/* binding */ sideBarDiv),
/* harmony export */   "generateProjectCard": () => (/* binding */ generateProjectCard),
/* harmony export */   "generateProjectForm": () => (/* binding */ generateProjectForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



let activeProject = null;
let latestToDo = null;
let activeToDo = null;
let activeToDoID = null;

const generateUI = () => {
  loadFromStorage()
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const generateHeader = (() => {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");
    container.appendChild(headerDiv);

    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.textContent = "Project TODOs";
    headerDiv.appendChild(logo);
  })();

  const generateSideBar = (() => {
    const sideBarDiv = document.createElement("div");
    sideBarDiv.classList.add("sideBarDiv");
    container.appendChild(sideBarDiv);
    const projectsHeader = document.createElement("div");
    projectsHeader.classList.add("projectsHeader");
    sideBarDiv.appendChild(projectsHeader);
    projectsHeader.textContent = "PROJECTS";
    const projects = document.createElement("div")
    projects.classList.add("projectsDiv")
    sideBarDiv.appendChild(projects)
    const addProjectButton = document.createElement("button")
    addProjectButton.textContent = "ADD PROJECT"
    addProjectButton.classList.add("addProjectButton")
    sideBarDiv.appendChild(addProjectButton)
    addProjectButton.style.transform = "scale(0)"
    refreshProjects()
    addProjectButton.addEventListener("click", () => {
      generateProjectForm()
      
    })

  })();

  const generateMain = (() => {
    const mainContentContainer = document.createElement("div");
    mainContentContainer.classList.add("mainContentContainer");
    container.appendChild(mainContentContainer);
  })();

  const modalBlur = document.createElement("div");
  modalBlur.classList.add("modalBlur");
  document.body.appendChild(modalBlur);
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modalBlur.appendChild(modal);
};

const refreshToDos = () => {
  const toDoContainer = document.querySelector(".projectContentContainer");
      toDoContainer.textContent = ""
      generateToDoForm()
activeProject.tasks.forEach(task => generateToDoCard(task) )
}

const refreshProjects = () => {
  const projectsDiv = document.querySelector(".projectsDiv")
  projectsDiv.textContent = ""
  console.log("please load this:")
  console.table(projectsArr)
  projectsArr.forEach(project => generateProjectCard(project))
}



const generateToDoCard = (todo) => {
  const toDoContainer = document.querySelector(".projectContentContainer");
  const toDoCard = document.createElement("div");
  
  toDoCard.classList.add("toDoCard");
  toDoContainer.appendChild(toDoCard);

  //todo.status === "complete" ? markAsDone() : null;

  console.log("please be right below")
  console.log(`${activeProject.tasks.indexOf(todo)}`)
  let cardIndex = activeProject.tasks.indexOf(todo);
  const cardID = "todo" + cardIndex;
  toDoCard.setAttribute("id", cardID);

  const toDoTitleDiv = document.createElement("div");
  const titleClass = "titleDiv" + cardIndex
  toDoTitleDiv.classList.add(titleClass);
  toDoTitleDiv.textContent = todo.name;
  toDoCard.appendChild(toDoTitleDiv);

  const toDoDateDiv = document.createElement("div");
  toDoDateDiv.classList.add("toDoDateDiv");
  toDoDateDiv.textContent = todo.date;
  //toDoCard.appendChild(toDoDateDiv)

  const toDoPriorityDiv = document.createElement("div");
  toDoPriorityDiv.classList.add("toDoPriorityDiv");
  toDoPriorityDiv.textContent = todo.priority;
  //toDoCard.appendChild(toDoPriorityDiv)
  const toDoNotesDiv = document.createElement("div");
  toDoNotesDiv.classList.add("toDoNotesDiv");
  toDoNotesDiv.textContent = todo.notes;
  //toDoCard.appendChild(toDoNotesDiv)

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttonsDiv")
  toDoCard.appendChild(buttonsDiv);

  

  const doneButtonToggle = (() => {
  const doneToDo = document.createElement("button");
  doneToDo.classList.add("doneToDo");
  doneToDo.textContent = "DONE?";
  buttonsDiv.appendChild(doneToDo);
  doneToDo.addEventListener("click", () => {
  
    let toDoIndex = buttonsDiv.parentNode.id.slice(4);
    toDoIndex = parseInt(toDoIndex);
    activeToDo = activeProject.tasks[toDoIndex];
    activeToDo.status = "complete"
    //activeProject.tasks.splice(`${deleteMe}`, 1);
    //activeProject.done.push(`${deleteMe}`);
    
    //activeProject.tasks.splice(`${deleteMe}`, 1);
    //activeProject.done.push(`${deleteMe}`);
    //activeToDo.status = "complete"
    markAsDone()
    refreshToDos()
  })
})()

const markAsDone = () => {
  const doneToDo = document.createElement("button");
  const toDoID = buttonsDiv.parentNode.id;
  const thisCard = document.getElementById(toDoID);
  console.log("to do:");
    console.table(activeProject.tasks);
    console.log("done:");
    console.table(activeProject.done);
    thisCard.classList.remove("toDoCard");
    thisCard.classList.add("done");
    const strike = document.createElement("div")
    strike.classList.add("strike")
    toDoTitleDiv.appendChild(strike)
    doneToDo.style.transform = "scale(0)"
}

  const editToDo = document.createElement("button");
  editToDo.classList.add("editToDo");
  editToDo.textContent = "DETAILS";
  editToDo.addEventListener("click", () => {
    activeToDoID = buttonsDiv.parentNode.id
    let editMe = buttonsDiv.parentNode.id.slice(4);
    editMe = parseInt(editMe);
    activeToDo = activeProject.tasks[editMe];
    generateToDoModal();
  });
  buttonsDiv.appendChild(editToDo);

  const deleteToDo = document.createElement("button");
  deleteToDo.classList.add("deleteToDo");
  deleteToDo.textContent = "DELETE";
  deleteToDo.addEventListener("click", () => {
    const deleteMe = buttonsDiv.parentNode.id.slice(4);
    //const thisCard = document.getElementById(deleteMe)
    activeToDo = activeProject.tasks[deleteMe]
    const indexOfActive = activeProject.tasks.indexOf(activeToDo)
    console.log("delete this: " + indexOfActive)
    activeProject.tasks.splice(indexOfActive, 1);
    console.table(activeProject.tasks);
    //thisCard.parentNode.removeChild(thisCard)
    refreshToDos()
    saveToStorage()
  });
  buttonsDiv.appendChild(deleteToDo);
};

const generateToDoNameInput = (id, parent) => {
  const toDoNameInput = document.createElement("input");
  toDoNameInput.setAttribute("id", id);
  toDoNameInput.setAttribute("type", "text");
  toDoNameInput.setAttribute("placeholder", "'To-Do' title...");
  toDoNameInput.classList.add("toDoForm");
  toDoNameInput.required = true;
  parent.appendChild(toDoNameInput)
}

const generateToDoDateInput = (id, parent) => {
  const toDoDueDate = document.createElement("input");
  toDoDueDate.setAttribute("type", "date");
  toDoDueDate.setAttribute("id", id);
  toDoDueDate.classList.add("toDoForm");
  parent.appendChild(toDoDueDate)
}

const generateToDoPriorityInput = (id, parent) => {
  const toDoPriority = document.createElement("select");
  toDoPriority.setAttribute("id", id);
  toDoPriority.classList.add("toDoForm");
  const lowPriority = document.createElement("option");
  lowPriority.setAttribute("value", "Low");
  lowPriority.textContent = "Low Priority";
  const regularPriority = document.createElement("option");
  regularPriority.setAttribute("value", "Regular");
  regularPriority.textContent = "Regular Priority";
  const highPriority = document.createElement("option");
  highPriority.setAttribute("value", "High");
  highPriority.textContent = "High Priority";

  toDoPriority.appendChild(lowPriority);
  toDoPriority.appendChild(regularPriority);
  toDoPriority.appendChild(highPriority);

  parent.appendChild(toDoPriority)
}

const generateToDoNotesInput = (id, parent) => {
  const toDoNotesInput = document.createElement("textarea");
  toDoNotesInput.setAttribute("id", id);
  // toDoNotesInput.setAttribute("type", "text")
  toDoNotesInput.setAttribute("placeholder", "Notes...");
  toDoNotesInput.classList.add("toDoForm");

  parent.appendChild(toDoNotesInput)
}

const generateToDoSubmitInput = (id, text, parent) => {
  const toDoSubBtn = document.createElement("button");
  toDoSubBtn.setAttribute("id", id);
  toDoSubBtn.setAttribute("type", "submit");
  toDoSubBtn.textContent = text;
  toDoSubBtn.classList.add("toDoForm");

  parent.appendChild(toDoSubBtn)
}

const generateToDoForm = () => {
  const toDoFormDiv = document.createElement("div");
  toDoFormDiv.classList.add("toDoFormDiv");

  generateToDoNameInput("toDoNameInput", toDoFormDiv)
  generateToDoDateInput("toDoDueDateInput", toDoFormDiv)
  generateToDoPriorityInput("toDoPriorityInput", toDoFormDiv)
  generateToDoNotesInput("toDoNotesInput", toDoFormDiv)
  generateToDoSubmitInput("toDoSubBtn", "ADD TODO", toDoFormDiv)


  const toDoContainer = document.querySelector(".projectContentContainer");
  toDoContainer.appendChild(toDoFormDiv);

  const toDoFormInput = () => {
    const name = document.querySelector("#toDoNameInput").value;
    const date = document.querySelector("#toDoDueDateInput").value;
    const priority = document.querySelector("#toDoPriorityInput").value;
    const notes = document.querySelector("#toDoNotesInput").value;
    const status = "incomplete"
    return new _task__WEBPACK_IMPORTED_MODULE_1__.default(name, date, priority, notes, status);
  };

  const toDoSubBtn = document.querySelector("#toDoSubBtn")
  toDoSubBtn.addEventListener("click", () => {
    activeProject.tasks.push(toDoFormInput());
    latestToDo = activeProject.tasks.length - 1;
    activeToDo = latestToDo
    console.log("latest " + latestToDo);
    refreshToDos()
    activeToDo = null
    console.table(activeProject.tasks);
    saveToStorage()
  });
};

const projectContent = () => {
  const projectContentContainer = document.createElement("div");
  projectContentContainer.classList.add("projectContentContainer");
  const projectHeader = document.createElement("h2");
  projectHeader.classList.add("projectHeader");
  projectHeader.textContent = activeProject.name;
  projectContentContainer.appendChild(projectHeader);

  return projectContentContainer;
};

const container = document.querySelector(".container");
const headerDiv = document.querySelector(".headerDiv");
const sideBarDiv = document.querySelector(".sideBarDiv");
const projects = document.querySelector(".projectsDiv")
//export const mainContentContainer = document.querySelector(".mainContentContainer")

const generateProjectCard = (project) => {
  const projects = document.querySelector(".projectsDiv")
  const sideBarDiv = document.querySelector(".sideBarDiv");
  const projectDiv = document.createElement("div");
  const projectIndex = projectsArr.indexOf(project);
  projectDiv.classList.add("projectDiv");
  projectDiv.textContent = project.name;
  projects.appendChild(projectDiv);
  projectsArr.forEach((obj) => {
    projectDiv.setAttribute("id", projectIndex);
  });

  //const eachProject = document.querySelectorAll(".projectDiv")
  //eachProject.forEach(project => { project.addEventListener("click", () => { console.log(project.id) } ) } )

  document.getElementById(`${projectIndex}`).addEventListener("click", () => {
    console.log(projectIndex);
    activeProject = projectsArr[`${projectIndex}`];
    console.log("The active project is: " + activeProject.name);
    const mainContentContainer = document.querySelector(
      ".mainContentContainer"
    );
    mainContentContainer.textContent = "";
    mainContentContainer.appendChild(projectContent());
    generateToDoForm();
    refreshToDos()
  });
};

const generateProjectForm = () => {
  const mainContentContainer = document.querySelector(".mainContentContainer");
  mainContentContainer.textContent = ""
  const projectFormDiv = document.createElement("div");
  projectFormDiv.classList.add("projectFormDiv");
  mainContentContainer.appendChild(projectFormDiv);
  const projectInput = document.createElement("input");
  projectInput.setAttribute("id", "projectInput");
  projectInput.setAttribute("type", "text");
  projectInput.setAttribute("placeholder", "What is the name of your project?");
  projectInput.classList.add("projectForm");
  projectInput.querySelector(".projectInput");
  projectInput.required = true;
  const projectSubBtn = document.createElement("button");
  projectSubBtn.setAttribute("type", "submit");
  projectSubBtn.textContent = "CREATE PROJECT";
  projectSubBtn.classList.add("projectForm");
  projectSubBtn.setAttribute("id", "projectSubBtn");
  projectFormDiv.appendChild(projectInput);
  projectFormDiv.appendChild(projectSubBtn);


  const projectFormInput = () => {
    const name = document.querySelector("#projectInput").value;
    return new _project__WEBPACK_IMPORTED_MODULE_0__.default(name)
}

const resetProjectForm = () => {
    const name = document.querySelector("#projectInput")
    name.value = ""
}


projectSubBtn.addEventListener("click", () => {
    projectsArr.push(projectFormInput())
    generateProjectCard(projectFormInput())
    console.table(projectsArr)
    resetProjectForm();
    const addProjectButton = document.querySelector(".addProjectButton")
    addProjectButton.style.transform = "scale(1)"
    saveToStorage()
})





};


const genererateCloseButton = () => {
  const modal = document.querySelector(".modal");
  const modalBlur = document.querySelector(".modalBlur");
  const closeModal = document.createElement("button");
  closeModal.textContent = "x";
  closeModal.classList.add("closeModal");
  modal.appendChild(closeModal);
  closeModal.addEventListener("click", () => {
    modalBlur.style.transform = "scale(0)";
    modal.style.transform = "scale(0)";
    modal.textContent = ""
    })
};

const generateToDoModal = () => {
  const modalBlur = document.querySelector(".modalBlur");
  const modal = document.querySelector(".modal");
  modalBlur.style.transform = "scale(1)";
  modal.style.transform = "scale(1)";

  const toDoName = document.createElement("h2");
  toDoName.classList.add("toDoNameModal");
  console.log(activeToDo);
  toDoName.textContent = `${activeToDo.name}`;
  modal.appendChild(toDoName);

  const toDoDueDate = document.createElement("div");
  toDoDueDate.classList.add("toDoDueDateModal");
  toDoDueDate.innerHTML = `<span class ="modalLabels">Due Date: </span>${activeToDo.date}`;
  modal.appendChild(toDoDueDate);

  const toDoPriority = document.createElement("div");
  toDoPriority.classList.add("toDoPriorityModal");
  toDoPriority.innerHTML = `<span class ="modalLabels">Priority: </span>${activeToDo.priority}`;
  modal.appendChild(toDoPriority);

  const toDoNotes = document.createElement("div");
  toDoNotes.classList.add("toDoNotesModal");
  toDoNotes.innerHTML = `<span class ="modalLabels">Notes: </span>${activeToDo.notes}`;
  modal.appendChild(toDoNotes);

  genererateCloseButton()

  const editToDo = document.createElement("button")
  editToDo.classList.add("editToDo")
  editToDo.textContent = "EDIT"
  modal.appendChild(editToDo)
  editToDo.addEventListener("click", () => {
    console.log("hello")
    modal.textContent = ""
    generateToDoNameInput("editNameInput", modal)
    generateToDoDateInput("editDateInput", modal)
    generateToDoPriorityInput("editPriorityInput", modal)
    generateToDoNotesInput("editNotesInput", modal)
    generateToDoSubmitInput("editSubmitButton", "SUBMIT CHANGES", modal)
    genererateCloseButton()
    const editName = document.getElementById("editNameInput")
    editName.value = activeToDo.name
    const editDate = document.getElementById("editDateInput")
    editDate.value = activeToDo.date
    const editPriority = document.getElementById("editPriorityInput")
    editPriority.value = activeToDo.priority
    const editNotes = document.getElementById("editNotesInput")
    editNotes.value = activeToDo.notes
    document.getElementById("editSubmitButton").addEventListener("click", () => {
      activeToDo.name = editName.value
      activeToDo.date = editDate.value
      activeToDo.priority = editPriority.value
      activeToDo.notes = editNotes.value
      modal.textContent = ""
      modalBlur.style.transform = "scale(0)";
      modal.style.transform = "scale(0)";

      let cardIndex = activeProject.tasks.indexOf(activeToDo);
      const titleClass = ".titleDiv" + cardIndex
      

      const titleDiv = document.querySelector(titleClass)
  
      titleDiv.textContent = editName.value

      saveToStorage()

    })
  })
  
};

//LOCAL STORAGE

let projectsArr = []

function saveToStorage(){
  localStorage.setItem('projectsArr', JSON.stringify(projectsArr));

}

function loadFromStorage(){
  projectsArr = JSON.parse(localStorage.getItem('projectsArr'));
   if(projectsArr === null) projectsArr = [];
   console.table(projectsArr)
}

function clearStorage(){
   localStorage.clear();
   projectsArr = [];
   resetDisplay();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateUI);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLEtBQUs7O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsTzs7Ozs7Ozs7Ozs7Ozs7QUNmZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7OztVQ2RuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2xCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDLGlDQUFpQyxTQUFTOztBQUUxQyxvQ0FBb0MsU0FBUztBQUM3QyxpQ0FBaUMsU0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBSTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0NBQW9DLDBDQUEwQywwQkFBMEIsSUFBSTs7QUFFNUcsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxlQUFlLDZDQUFPO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQSwwRUFBMEUsb0JBQW9CO0FBQzlGOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0UsaUJBQWlCO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDIiwiZmlsZSI6ImRvbS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9leHBvcnQgbGV0IHByb2plY3RzQXJyID0gW11cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgICAgICB0aGlzLmRvbmUgPSBbXVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG5cbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gYCR7bmFtZX1gLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIilcbiAgICAgICBcbiAgICAgICAgdGhpcy5pZCA9IHByb2plY3RJRFxuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXNcblxuICAgICAgICBjb25zdCB0YXNrSUQgPSBuYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDk5OSArIDEwMCkpXG4gICAgICAgICAgIFxuICAgICAgICB0aGlzLmlkID0gdGFza0lEXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0LCB7IGFjdGl2ZSB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcbmV4cG9ydCBsZXQgbGF0ZXN0VG9EbyA9IG51bGw7XG5leHBvcnQgbGV0IGFjdGl2ZVRvRG8gPSBudWxsO1xuZXhwb3J0IGxldCBhY3RpdmVUb0RvSUQgPSBudWxsO1xuXG5jb25zdCBnZW5lcmF0ZVVJID0gKCkgPT4ge1xuICBsb2FkRnJvbVN0b3JhZ2UoKVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGdlbmVyYXRlSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyRGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlByb2plY3QgVE9ET3NcIjtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVTaWRlQmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlQmFyRGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlQmFyRGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyRGl2KTtcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzSGVhZGVyXCIpO1xuICAgIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xuICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c0RpdlwiKVxuICAgIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgUFJPSkVDVFwiXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdEJ1dHRvblwiKVxuICAgIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbilcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIlxuICAgIHJlZnJlc2hQcm9qZWN0cygpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpXG4gICAgICBcbiAgICB9KVxuXG4gIH0pKCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVNYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250ZW50Q29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGVudENvbnRhaW5lcik7XG4gIH0pKCk7XG5cbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxCbHVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEJsdXJcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxCbHVyKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsQmx1ci5hcHBlbmRDaGlsZChtb2RhbCk7XG59O1xuXG5jb25zdCByZWZyZXNoVG9Eb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250ZW50Q29udGFpbmVyXCIpO1xuICAgICAgdG9Eb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgIGdlbmVyYXRlVG9Eb0Zvcm0oKVxuYWN0aXZlUHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gZ2VuZXJhdGVUb0RvQ2FyZCh0YXNrKSApXG59XG5cbmNvbnN0IHJlZnJlc2hQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzRGl2XCIpXG4gIHByb2plY3RzRGl2LnRleHRDb250ZW50ID0gXCJcIlxuICBjb25zb2xlLmxvZyhcInBsZWFzZSBsb2FkIHRoaXM6XCIpXG4gIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpXG4gIHByb2plY3RzQXJyLmZvckVhY2gocHJvamVjdCA9PiBnZW5lcmF0ZVByb2plY3RDYXJkKHByb2plY3QpKVxufVxuXG5cblxuY29uc3QgZ2VuZXJhdGVUb0RvQ2FyZCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250ZW50Q29udGFpbmVyXCIpO1xuICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICB0b0RvQ2FyZC5jbGFzc0xpc3QuYWRkKFwidG9Eb0NhcmRcIik7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0NhcmQpO1xuXG4gIC8vdG9kby5zdGF0dXMgPT09IFwiY29tcGxldGVcIiA/IG1hcmtBc0RvbmUoKSA6IG51bGw7XG5cbiAgY29uc29sZS5sb2coXCJwbGVhc2UgYmUgcmlnaHQgYmVsb3dcIilcbiAgY29uc29sZS5sb2coYCR7YWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pfWApXG4gIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YodG9kbyk7XG4gIGNvbnN0IGNhcmRJRCA9IFwidG9kb1wiICsgY2FyZEluZGV4O1xuICB0b0RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjYXJkSUQpO1xuXG4gIGNvbnN0IHRvRG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlQ2xhc3MgPSBcInRpdGxlRGl2XCIgKyBjYXJkSW5kZXhcbiAgdG9Eb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQodGl0bGVDbGFzcyk7XG4gIHRvRG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlRGl2KTtcblxuICBjb25zdCB0b0RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRGF0ZURpdlwiKTtcbiAgdG9Eb0RhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0RhdGVEaXYpXG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlEaXZcIik7XG4gIHRvRG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5RGl2KVxuICBjb25zdCB0b0RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Ob3Rlc0RpdlwiKTtcbiAgdG9Eb05vdGVzRGl2LnRleHRDb250ZW50ID0gdG9kby5ub3RlcztcbiAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNEaXYpXG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNEaXZcIilcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgXG5cbiAgY29uc3QgZG9uZUJ1dHRvblRvZ2dsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZChcImRvbmVUb0RvXCIpO1xuICBkb25lVG9Eby50ZXh0Q29udGVudCA9IFwiRE9ORT9cIjtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkb25lVG9Ebyk7XG4gIGRvbmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIFxuICAgIGxldCB0b0RvSW5kZXggPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgdG9Eb0luZGV4ID0gcGFyc2VJbnQodG9Eb0luZGV4KTtcbiAgICBhY3RpdmVUb0RvID0gYWN0aXZlUHJvamVjdC50YXNrc1t0b0RvSW5kZXhdO1xuICAgIGFjdGl2ZVRvRG8uc3RhdHVzID0gXCJjb21wbGV0ZVwiXG4gICAgLy9hY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShgJHtkZWxldGVNZX1gLCAxKTtcbiAgICAvL2FjdGl2ZVByb2plY3QuZG9uZS5wdXNoKGAke2RlbGV0ZU1lfWApO1xuICAgIFxuICAgIC8vYWN0aXZlUHJvamVjdC50YXNrcy5zcGxpY2UoYCR7ZGVsZXRlTWV9YCwgMSk7XG4gICAgLy9hY3RpdmVQcm9qZWN0LmRvbmUucHVzaChgJHtkZWxldGVNZX1gKTtcbiAgICAvL2FjdGl2ZVRvRG8uc3RhdHVzID0gXCJjb21wbGV0ZVwiXG4gICAgbWFya0FzRG9uZSgpXG4gICAgcmVmcmVzaFRvRG9zKClcbiAgfSlcbn0pKClcblxuY29uc3QgbWFya0FzRG9uZSA9ICgpID0+IHtcbiAgY29uc3QgZG9uZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB0b0RvSUQgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQ7XG4gIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9Eb0lEKTtcbiAgY29uc29sZS5sb2coXCJ0byBkbzpcIik7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICBjb25zb2xlLmxvZyhcImRvbmU6XCIpO1xuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC5kb25lKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwidG9Eb0NhcmRcIik7XG4gICAgdGhpc0NhcmQuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgY29uc3Qgc3RyaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHN0cmlrZS5jbGFzc0xpc3QuYWRkKFwic3RyaWtlXCIpXG4gICAgdG9Eb1RpdGxlRGl2LmFwcGVuZENoaWxkKHN0cmlrZSlcbiAgICBkb25lVG9Eby5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCJcbn1cblxuICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRUb0RvLmNsYXNzTGlzdC5hZGQoXCJlZGl0VG9Eb1wiKTtcbiAgZWRpdFRvRG8udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcbiAgZWRpdFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhY3RpdmVUb0RvSUQgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWRcbiAgICBsZXQgZWRpdE1lID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIGVkaXRNZSA9IHBhcnNlSW50KGVkaXRNZSk7XG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbZWRpdE1lXTtcbiAgICBnZW5lcmF0ZVRvRG9Nb2RhbCgpO1xuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0VG9Ebyk7XG5cbiAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVRvRG8uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRvRG9cIik7XG4gIGRlbGV0ZVRvRG8udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICBkZWxldGVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlTWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgLy9jb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZU1lKVxuICAgIGFjdGl2ZVRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzW2RlbGV0ZU1lXVxuICAgIGNvbnN0IGluZGV4T2ZBY3RpdmUgPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YoYWN0aXZlVG9EbylcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB0aGlzOiBcIiArIGluZGV4T2ZBY3RpdmUpXG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5zcGxpY2UoaW5kZXhPZkFjdGl2ZSwgMSk7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICAvL3RoaXNDYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc0NhcmQpXG4gICAgcmVmcmVzaFRvRG9zKClcbiAgICBzYXZlVG9TdG9yYWdlKClcbiAgfSk7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Ebyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIidUby1EbycgdGl0bGUuLi5cIik7XG4gIHRvRG9OYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuICB0b0RvTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9OYW1lSW5wdXQpXG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb0RhdGVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgdG9Eb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSlcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHRvRG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIik7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIjtcbiAgY29uc3QgcmVndWxhclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcmVndWxhclByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiUmVndWxhclwiKTtcbiAgcmVndWxhclByaW9yaXR5LnRleHRDb250ZW50ID0gXCJSZWd1bGFyIFByaW9yaXR5XCI7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIik7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaCBQcmlvcml0eVwiO1xuXG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChyZWd1bGFyUHJpb3JpdHkpO1xuICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5KVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRvRG9Ob3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgLy8gdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3Rlcy4uLlwiKTtcbiAgdG9Eb05vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNJbnB1dClcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQgPSAoaWQsIHRleHQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvU3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9TdWJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgdG9Eb1N1YkJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHRvRG9TdWJCdG4uY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvU3ViQnRuKVxufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgdG9Eb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1EaXZcIik7XG5cbiAgZ2VuZXJhdGVUb0RvTmFtZUlucHV0KFwidG9Eb05hbWVJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KFwidG9Eb0R1ZURhdGVJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dChcInRvRG9Qcmlvcml0eUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0KFwidG9Eb05vdGVzSW5wdXRcIiwgdG9Eb0Zvcm1EaXYpXG4gIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KFwidG9Eb1N1YkJ0blwiLCBcIkFERCBUT0RPXCIsIHRvRG9Gb3JtRGl2KVxuXG5cbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EaXYpO1xuXG4gIGNvbnN0IHRvRG9Gb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb05hbWVJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvRHVlRGF0ZUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvUHJpb3JpdHlJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb05vdGVzSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3Qgc3RhdHVzID0gXCJpbmNvbXBsZXRlXCJcbiAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9TdWJCdG5cIilcbiAgdG9Eb1N1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QudGFza3MucHVzaCh0b0RvRm9ybUlucHV0KCkpO1xuICAgIGxhdGVzdFRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDE7XG4gICAgYWN0aXZlVG9EbyA9IGxhdGVzdFRvRG9cbiAgICBjb25zb2xlLmxvZyhcImxhdGVzdCBcIiArIGxhdGVzdFRvRG8pO1xuICAgIHJlZnJlc2hUb0RvcygpXG4gICAgYWN0aXZlVG9EbyA9IG51bGxcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIHNhdmVUb1N0b3JhZ2UoKVxuICB9KTtcbn07XG5cbmNvbnN0IHByb2plY3RDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q29udGVudENvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlclwiKTtcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGFjdGl2ZVByb2plY3QubmFtZTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgcmV0dXJuIHByb2plY3RDb250ZW50Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuZXhwb3J0IGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyRGl2XCIpO1xuZXhwb3J0IGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJEaXZcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNEaXZcIilcbi8vZXhwb3J0IGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c0RpdlwiKVxuICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyRGl2XCIpO1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihwcm9qZWN0KTtcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdlwiKTtcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIHByb2plY3RzQXJyLmZvckVhY2goKG9iaikgPT4ge1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdEluZGV4KTtcbiAgfSk7XG5cbiAgLy9jb25zdCBlYWNoUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERpdlwiKVxuICAvL2VhY2hQcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PiB7IHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgY29uc29sZS5sb2cocHJvamVjdC5pZCkgfSApIH0gKVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Byb2plY3RJbmRleH1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzQXJyW2Ake3Byb2plY3RJbmRleH1gXTtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBhY3RpdmUgcHJvamVjdCBpczogXCIgKyBhY3RpdmVQcm9qZWN0Lm5hbWUpO1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLm1haW5Db250ZW50Q29udGFpbmVyXCJcbiAgICApO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCgpKTtcbiAgICBnZW5lcmF0ZVRvRG9Gb3JtKCk7XG4gICAgcmVmcmVzaFRvRG9zKClcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50Q29udGFpbmVyXCIpO1xuICBtYWluQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcbiAgY29uc3QgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1EaXZcIik7XG4gIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0SW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3Q/XCIpO1xuICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpO1xuICBwcm9qZWN0SW5wdXQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IHByb2plY3RTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHByb2plY3RTdWJCdG4udGV4dENvbnRlbnQgPSBcIkNSRUFURSBQUk9KRUNUXCI7XG4gIHByb2plY3RTdWJCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpO1xuICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFN1YkJ0blwiKTtcbiAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcbiAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFN1YkJ0bik7XG5cblxuICBjb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJbnB1dFwiKS52YWx1ZTtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSlcbn1cblxuY29uc3QgcmVzZXRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIilcbiAgICBuYW1lLnZhbHVlID0gXCJcIlxufVxuXG5cbnByb2plY3RTdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0c0Fyci5wdXNoKHByb2plY3RGb3JtSW5wdXQoKSlcbiAgICBnZW5lcmF0ZVByb2plY3RDYXJkKHByb2plY3RGb3JtSW5wdXQoKSlcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RzQXJyKVxuICAgIHJlc2V0UHJvamVjdEZvcm0oKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0dG9uXCIpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCJcbiAgICBzYXZlVG9TdG9yYWdlKClcbn0pXG5cblxuXG5cblxufTtcblxuXG5jb25zdCBnZW5lcmVyYXRlQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbEJsdXJcIik7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZU1vZGFsLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlTW9kYWxcIik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlTW9kYWwpO1xuICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG4gICAgbW9kYWwudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgfSlcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQmx1clwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cbiAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRvRG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b0RvTmFtZU1vZGFsXCIpO1xuICBjb25zb2xlLmxvZyhhY3RpdmVUb0RvKTtcbiAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBgJHthY3RpdmVUb0RvLm5hbWV9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb05hbWUpO1xuXG4gIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvRG9EdWVEYXRlTW9kYWxcIik7XG4gIHRvRG9EdWVEYXRlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPkR1ZSBEYXRlOiA8L3NwYW4+JHthY3RpdmVUb0RvLmRhdGV9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuXG4gIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9Eb1ByaW9yaXR5TW9kYWxcIik7XG4gIHRvRG9Qcmlvcml0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Qcmlvcml0eTogPC9zcGFuPiR7YWN0aXZlVG9Eby5wcmlvcml0eX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Ob3Rlcy5jbGFzc0xpc3QuYWRkKFwidG9Eb05vdGVzTW9kYWxcIik7XG4gIHRvRG9Ob3Rlcy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Ob3RlczogPC9zcGFuPiR7YWN0aXZlVG9Eby5ub3Rlc31gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTm90ZXMpO1xuXG4gIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpXG5cbiAgY29uc3QgZWRpdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGVkaXRUb0RvLmNsYXNzTGlzdC5hZGQoXCJlZGl0VG9Eb1wiKVxuICBlZGl0VG9Eby50ZXh0Q29udGVudCA9IFwiRURJVFwiXG4gIG1vZGFsLmFwcGVuZENoaWxkKGVkaXRUb0RvKVxuICBlZGl0VG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoXCJlZGl0TmFtZUlucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb0RhdGVJbnB1dChcImVkaXREYXRlSW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dChcImVkaXRQcmlvcml0eUlucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoXCJlZGl0Tm90ZXNJbnB1dFwiLCBtb2RhbClcbiAgICBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dChcImVkaXRTdWJtaXRCdXR0b25cIiwgXCJTVUJNSVQgQ0hBTkdFU1wiLCBtb2RhbClcbiAgICBnZW5lcmVyYXRlQ2xvc2VCdXR0b24oKVxuICAgIGNvbnN0IGVkaXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0TmFtZUlucHV0XCIpXG4gICAgZWRpdE5hbWUudmFsdWUgPSBhY3RpdmVUb0RvLm5hbWVcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERhdGVJbnB1dFwiKVxuICAgIGVkaXREYXRlLnZhbHVlID0gYWN0aXZlVG9Eby5kYXRlXG4gICAgY29uc3QgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0UHJpb3JpdHlJbnB1dFwiKVxuICAgIGVkaXRQcmlvcml0eS52YWx1ZSA9IGFjdGl2ZVRvRG8ucHJpb3JpdHlcbiAgICBjb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXROb3Rlc0lucHV0XCIpXG4gICAgZWRpdE5vdGVzLnZhbHVlID0gYWN0aXZlVG9Eby5ub3Rlc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFN1Ym1pdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWN0aXZlVG9Eby5uYW1lID0gZWRpdE5hbWUudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8uZGF0ZSA9IGVkaXREYXRlLnZhbHVlXG4gICAgICBhY3RpdmVUb0RvLnByaW9yaXR5ID0gZWRpdFByaW9yaXR5LnZhbHVlXG4gICAgICBhY3RpdmVUb0RvLm5vdGVzID0gZWRpdE5vdGVzLnZhbHVlXG4gICAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG4gICAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cbiAgICAgIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YoYWN0aXZlVG9Ebyk7XG4gICAgICBjb25zdCB0aXRsZUNsYXNzID0gXCIudGl0bGVEaXZcIiArIGNhcmRJbmRleFxuICAgICAgXG5cbiAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZUNsYXNzKVxuICBcbiAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gZWRpdE5hbWUudmFsdWVcblxuICAgICAgc2F2ZVRvU3RvcmFnZSgpXG5cbiAgICB9KVxuICB9KVxuICBcbn07XG5cbi8vTE9DQUwgU1RPUkFHRVxuXG5sZXQgcHJvamVjdHNBcnIgPSBbXVxuXG5mdW5jdGlvbiBzYXZlVG9TdG9yYWdlKCl7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycicsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyKSk7XG5cbn1cblxuZnVuY3Rpb24gbG9hZEZyb21TdG9yYWdlKCl7XG4gIHByb2plY3RzQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNBcnInKSk7XG4gICBpZihwcm9qZWN0c0FyciA9PT0gbnVsbCkgcHJvamVjdHNBcnIgPSBbXTtcbiAgIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpXG59XG5cbmZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpe1xuICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICBwcm9qZWN0c0FyciA9IFtdO1xuICAgcmVzZXREaXNwbGF5KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVUk7XG4iXSwic291cmNlUm9vdCI6IiJ9