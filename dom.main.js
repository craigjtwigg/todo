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
    const toDoID = buttonsDiv.parentNode.id;
    const thisCard = document.getElementById(toDoID);
    let toDoIndex = buttonsDiv.parentNode.id.slice(4);
    toDoIndex = parseInt(toDoIndex);
    activeToDo = activeProject.tasks[toDoIndex];
    //activeProject.tasks.splice(`${deleteMe}`, 1);
    //activeProject.done.push(`${deleteMe}`);
    activeToDo.status = "complete"
    //activeProject.tasks.splice(`${deleteMe}`, 1);
    //activeProject.done.push(`${deleteMe}`);
    activeToDo.status = "complete"
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
  })
})()

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
  const projectIndex = projectsArr.length - 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLEtBQUs7O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsTzs7Ozs7Ozs7Ozs7Ozs7QUNmZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7OztVQ2RuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2xCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QyxpQ0FBaUMsU0FBUztBQUMxQztBQUNBLG9DQUFvQyxTQUFTO0FBQzdDLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBDQUFJO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDQTtBQUNBO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxvQ0FBb0MsMENBQTBDLDBCQUEwQixJQUFJOztBQUU1Ryw2QkFBNkIsYUFBYTtBQUMxQztBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGVBQWUsNkNBQU87QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSxnQkFBZ0I7QUFDekY7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRSxvQkFBb0I7QUFDOUY7O0FBRUE7QUFDQTtBQUNBLG9FQUFvRSxpQkFBaUI7QUFDckY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJmaWxlIjoiZG9tLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2V4cG9ydCBsZXQgcHJvamVjdHNBcnIgPSBbXVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgICAgIHRoaXMuZG9uZSA9IFtdXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcblxuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBgJHtuYW1lfWAudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIlwiKVxuICAgICAgIFxuICAgICAgICB0aGlzLmlkID0gcHJvamVjdElEXG4gICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xuXG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IG5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gOTk5ICsgMTAwKSlcbiAgICAgICAgICAgXG4gICAgICAgIHRoaXMuaWQgPSB0YXNrSURcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QsIHsgYWN0aXZlIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xuZXhwb3J0IGxldCBsYXRlc3RUb0RvID0gbnVsbDtcbmV4cG9ydCBsZXQgYWN0aXZlVG9EbyA9IG51bGw7XG5leHBvcnQgbGV0IGFjdGl2ZVRvRG9JRCA9IG51bGw7XG5cbmNvbnN0IGdlbmVyYXRlVUkgPSAoKSA9PiB7XG4gIGxvYWRGcm9tU3RvcmFnZSgpXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJEaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUT0RPc1wiO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgfSkoKTtcblxuICBjb25zdCBnZW5lcmF0ZVNpZGVCYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGVCYXJEaXYuY2xhc3NMaXN0LmFkZChcInNpZGVCYXJEaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXJEaXYpO1xuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNIZWFkZXJcIik7XG4gICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzRGl2XCIpXG4gICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0cylcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBQUk9KRUNUXCJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0QnV0dG9uXCIpXG4gICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKVxuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiXG4gICAgcmVmcmVzaFByb2plY3RzKClcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBnZW5lcmF0ZVByb2plY3RGb3JtKClcbiAgICAgIFxuICAgIH0pXG5cbiAgfSkoKTtcblxuICBjb25zdCBnZW5lcmF0ZU1haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50Q29udGFpbmVyKTtcbiAgfSkoKTtcblxuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbEJsdXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsQmx1clwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbEJsdXIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWxCbHVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbn07XG5cbmNvbnN0IHJlZnJlc2hUb0RvcyA9ICgpID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gICAgICB0b0RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgZ2VuZXJhdGVUb0RvRm9ybSgpXG5hY3RpdmVQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiBnZW5lcmF0ZVRvRG9DYXJkKHRhc2spIClcbn1cblxuY29uc3QgcmVmcmVzaFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNEaXZcIilcbiAgcHJvamVjdHNEaXYudGV4dENvbnRlbnQgPSBcIlwiXG4gIGNvbnNvbGUubG9nKFwicGxlYXNlIGxvYWQgdGhpczpcIilcbiAgY29uc29sZS50YWJsZShwcm9qZWN0c0FycilcbiAgcHJvamVjdHNBcnIuZm9yRWFjaChwcm9qZWN0ID0+IGdlbmVyYXRlUHJvamVjdENhcmQocHJvamVjdCkpXG59XG5cblxuXG5jb25zdCBnZW5lcmF0ZVRvRG9DYXJkID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gIGNvbnN0IHRvRG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gIHRvRG9DYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ2FyZFwiKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQ2FyZCk7XG5cbiAgY29uc29sZS5sb2coXCJwbGVhc2UgYmUgcmlnaHQgYmVsb3dcIilcbiAgY29uc29sZS5sb2coYCR7YWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pfWApXG4gIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YodG9kbyk7XG4gIGNvbnN0IGNhcmRJRCA9IFwidG9kb1wiICsgY2FyZEluZGV4O1xuICB0b0RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjYXJkSUQpO1xuXG4gIGNvbnN0IHRvRG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlQ2xhc3MgPSBcInRpdGxlRGl2XCIgKyBjYXJkSW5kZXhcbiAgdG9Eb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQodGl0bGVDbGFzcyk7XG4gIHRvRG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlRGl2KTtcblxuICBjb25zdCB0b0RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRGF0ZURpdlwiKTtcbiAgdG9Eb0RhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0RhdGVEaXYpXG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlEaXZcIik7XG4gIHRvRG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5RGl2KVxuICBjb25zdCB0b0RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Ob3Rlc0RpdlwiKTtcbiAgdG9Eb05vdGVzRGl2LnRleHRDb250ZW50ID0gdG9kby5ub3RlcztcbiAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNEaXYpXG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNEaXZcIilcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgXG5cbiAgY29uc3QgZG9uZUJ1dHRvblRvZ2dsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZChcImRvbmVUb0RvXCIpO1xuICBkb25lVG9Eby50ZXh0Q29udGVudCA9IFwiRE9ORT9cIjtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkb25lVG9Ebyk7XG4gIGRvbmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0lEID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkO1xuICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9Eb0lEKTtcbiAgICBsZXQgdG9Eb0luZGV4ID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIHRvRG9JbmRleCA9IHBhcnNlSW50KHRvRG9JbmRleCk7XG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbdG9Eb0luZGV4XTtcbiAgICAvL2FjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpO1xuICAgIC8vYWN0aXZlUHJvamVjdC5kb25lLnB1c2goYCR7ZGVsZXRlTWV9YCk7XG4gICAgYWN0aXZlVG9Eby5zdGF0dXMgPSBcImNvbXBsZXRlXCJcbiAgICAvL2FjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpO1xuICAgIC8vYWN0aXZlUHJvamVjdC5kb25lLnB1c2goYCR7ZGVsZXRlTWV9YCk7XG4gICAgYWN0aXZlVG9Eby5zdGF0dXMgPSBcImNvbXBsZXRlXCJcbiAgICBjb25zb2xlLmxvZyhcInRvIGRvOlwiKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIGNvbnNvbGUubG9nKFwiZG9uZTpcIik7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LmRvbmUpO1xuICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b0RvQ2FyZFwiKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgICBjb25zdCBzdHJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3RyaWtlLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2VcIilcbiAgICB0b0RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQoc3RyaWtlKVxuICAgIGRvbmVUb0RvLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIlxuICB9KVxufSkoKVxuXG4gIGNvbnN0IGVkaXRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZChcImVkaXRUb0RvXCIpO1xuICBlZGl0VG9Eby50ZXh0Q29udGVudCA9IFwiREVUQUlMU1wiO1xuICBlZGl0VG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFjdGl2ZVRvRG9JRCA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZFxuICAgIGxldCBlZGl0TWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgZWRpdE1lID0gcGFyc2VJbnQoZWRpdE1lKTtcbiAgICBhY3RpdmVUb0RvID0gYWN0aXZlUHJvamVjdC50YXNrc1tlZGl0TWVdO1xuICAgIGdlbmVyYXRlVG9Eb01vZGFsKCk7XG4gIH0pO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGVkaXRUb0RvKTtcblxuICBjb25zdCBkZWxldGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlVG9Eby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVG9Eb1wiKTtcbiAgZGVsZXRlVG9Eby50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gIGRlbGV0ZVRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVNZSA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZC5zbGljZSg0KTtcbiAgICAvL2NvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlTWUpXG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbZGVsZXRlTWVdXG4gICAgY29uc3QgaW5kZXhPZkFjdGl2ZSA9IGFjdGl2ZVByb2plY3QudGFza3MuaW5kZXhPZihhY3RpdmVUb0RvKVxuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIHRoaXM6IFwiICsgaW5kZXhPZkFjdGl2ZSlcbiAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleE9mQWN0aXZlLCAxKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIC8vdGhpc0NhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzQ2FyZClcbiAgICByZWZyZXNoVG9Eb3MoKVxuICAgIHNhdmVUb1N0b3JhZ2UoKVxuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUb0RvKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb05hbWVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiJ1RvLURvJyB0aXRsZS4uLlwiKTtcbiAgdG9Eb05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIHRvRG9OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb05hbWVJbnB1dClcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvRG9EdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgdG9Eb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKTtcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvdyBQcmlvcml0eVwiO1xuICBjb25zdCByZWd1bGFyUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICByZWd1bGFyUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJSZWd1bGFyXCIpO1xuICByZWd1bGFyUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIjtcbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoIFByaW9yaXR5XCI7XG5cbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKHJlZ3VsYXJQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpXG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAvLyB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5vdGVzLi4uXCIpO1xuICB0b0RvTm90ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9Ob3Rlc0lucHV0KVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCA9IChpZCwgdGV4dCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b0RvU3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICB0b0RvU3ViQnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgdG9Eb1N1YkJ0bi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9TdWJCdG4pXG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCB0b0RvRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Gb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybURpdlwiKTtcblxuICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoXCJ0b0RvTmFtZUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9EYXRlSW5wdXQoXCJ0b0RvRHVlRGF0ZUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0KFwidG9Eb1ByaW9yaXR5SW5wdXRcIiwgdG9Eb0Zvcm1EaXYpXG4gIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoXCJ0b0RvTm90ZXNJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQoXCJ0b0RvU3ViQnRuXCIsIFwiQUREIFRPRE9cIiwgdG9Eb0Zvcm1EaXYpXG5cblxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGVudENvbnRhaW5lclwiKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRm9ybURpdik7XG5cbiAgY29uc3QgdG9Eb0Zvcm1JbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvTmFtZUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9EdWVEYXRlSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9Qcmlvcml0eUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvTm90ZXNJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBzdGF0dXMgPSBcImluY29tcGxldGVcIlxuICAgIHJldHVybiBuZXcgVGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cyk7XG4gIH07XG5cbiAgY29uc3QgdG9Eb1N1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb1N1YkJ0blwiKVxuICB0b0RvU3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5wdXNoKHRvRG9Gb3JtSW5wdXQoKSk7XG4gICAgbGF0ZXN0VG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoIC0gMTtcbiAgICBhY3RpdmVUb0RvID0gbGF0ZXN0VG9Eb1xuICAgIGNvbnNvbGUubG9nKFwibGF0ZXN0IFwiICsgbGF0ZXN0VG9Ebyk7XG4gICAgcmVmcmVzaFRvRG9zKClcbiAgICBhY3RpdmVUb0RvID0gbnVsbFxuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpXG4gIH0pO1xufTtcblxuY29uc3QgcHJvamVjdENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250ZW50Q29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SGVhZGVyXCIpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gYWN0aXZlUHJvamVjdC5uYW1lO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICByZXR1cm4gcHJvamVjdENvbnRlbnRDb250YWluZXI7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJEaXZcIik7XG5leHBvcnQgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhckRpdlwiKTtcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c0RpdlwiKVxuLy9leHBvcnQgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50Q29udGFpbmVyXCIpXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RDYXJkID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzRGl2XCIpXG4gIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJEaXZcIik7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5sZW5ndGggLSAxO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGl2XCIpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgcHJvamVjdHNBcnIuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0SW5kZXgpO1xuICB9KTtcblxuICAvL2NvbnN0IGVhY2hQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RGl2XCIpXG4gIC8vZWFjaFByb2plY3QuZm9yRWFjaChwcm9qZWN0ID0+IHsgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKSB9ICkgfSApXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdEluZGV4fWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEluZGV4KTtcbiAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHNBcnJbYCR7cHJvamVjdEluZGV4fWBdO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIGFjdGl2ZSBwcm9qZWN0IGlzOiBcIiArIGFjdGl2ZVByb2plY3QubmFtZSk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubWFpbkNvbnRlbnRDb250YWluZXJcIlxuICAgICk7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KCkpO1xuICAgIGdlbmVyYXRlVG9Eb0Zvcm0oKTtcbiAgICByZWZyZXNoVG9Eb3MoKVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gIG1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybURpdlwiKTtcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHlvdXIgcHJvamVjdD9cIik7XG4gIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gIHByb2plY3RJbnB1dC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbnB1dFwiKTtcbiAgcHJvamVjdElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgcHJvamVjdFN1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgcHJvamVjdFN1YkJ0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFBST0pFQ1RcIjtcbiAgcHJvamVjdFN1YkJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gIHByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3ViQnRuXCIpO1xuICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0U3ViQnRuKTtcblxuXG4gIGNvbnN0IHByb2plY3RGb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdElucHV0XCIpLnZhbHVlO1xuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKVxufVxuXG5jb25zdCByZXNldFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJbnB1dFwiKVxuICAgIG5hbWUudmFsdWUgPSBcIlwiXG59XG5cblxucHJvamVjdFN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RzQXJyLnB1c2gocHJvamVjdEZvcm1JbnB1dCgpKVxuICAgIGdlbmVyYXRlUHJvamVjdENhcmQocHJvamVjdEZvcm1JbnB1dCgpKVxuICAgIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpXG4gICAgcmVzZXRQcm9qZWN0Rm9ybSgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdXR0b25cIilcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIlxuICAgIHNhdmVUb1N0b3JhZ2UoKVxufSlcblxuXG5cblxuXG59O1xuXG5cbmNvbnN0IGdlbmVyZXJhdGVDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQmx1clwiKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgY2xvc2VNb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VNb2RhbFwiKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VNb2RhbCk7XG4gIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICB9KVxufTtcblxuY29uc3QgZ2VuZXJhdGVUb0RvTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxCbHVyXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG4gIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblxuICBjb25zdCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdG9Eb05hbWUuY2xhc3NMaXN0LmFkZChcInRvRG9OYW1lTW9kYWxcIik7XG4gIGNvbnNvbGUubG9nKGFjdGl2ZVRvRG8pO1xuICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVRvRG8ubmFtZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XG5cbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9Eb0R1ZURhdGVNb2RhbFwiKTtcbiAgdG9Eb0R1ZURhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzID1cIm1vZGFsTGFiZWxzXCI+RHVlIERhdGU6IDwvc3Bhbj4ke2FjdGl2ZVRvRG8uZGF0ZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSk7XG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlNb2RhbFwiKTtcbiAgdG9Eb1ByaW9yaXR5LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPlByaW9yaXR5OiA8L3NwYW4+JHthY3RpdmVUb0RvLnByaW9yaXR5fWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Qcmlvcml0eSk7XG5cbiAgY29uc3QgdG9Eb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb05vdGVzLmNsYXNzTGlzdC5hZGQoXCJ0b0RvTm90ZXNNb2RhbFwiKTtcbiAgdG9Eb05vdGVzLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPk5vdGVzOiA8L3NwYW4+JHthY3RpdmVUb0RvLm5vdGVzfWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Ob3Rlcyk7XG5cbiAgZ2VuZXJlcmF0ZUNsb3NlQnV0dG9uKClcblxuICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZChcImVkaXRUb0RvXCIpXG4gIGVkaXRUb0RvLnRleHRDb250ZW50ID0gXCJFRElUXCJcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZWRpdFRvRG8pXG4gIGVkaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgIG1vZGFsLnRleHRDb250ZW50ID0gXCJcIlxuICAgIGdlbmVyYXRlVG9Eb05hbWVJbnB1dChcImVkaXROYW1lSW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KFwiZWRpdERhdGVJbnB1dFwiLCBtb2RhbClcbiAgICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0KFwiZWRpdFByaW9yaXR5SW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvTm90ZXNJbnB1dChcImVkaXROb3Rlc0lucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KFwiZWRpdFN1Ym1pdEJ1dHRvblwiLCBcIlNVQk1JVCBDSEFOR0VTXCIsIG1vZGFsKVxuICAgIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpXG4gICAgY29uc3QgZWRpdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXROYW1lSW5wdXRcIilcbiAgICBlZGl0TmFtZS52YWx1ZSA9IGFjdGl2ZVRvRG8ubmFtZVxuICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0RGF0ZUlucHV0XCIpXG4gICAgZWRpdERhdGUudmFsdWUgPSBhY3RpdmVUb0RvLmRhdGVcbiAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRQcmlvcml0eUlucHV0XCIpXG4gICAgZWRpdFByaW9yaXR5LnZhbHVlID0gYWN0aXZlVG9Eby5wcmlvcml0eVxuICAgIGNvbnN0IGVkaXROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdE5vdGVzSW5wdXRcIilcbiAgICBlZGl0Tm90ZXMudmFsdWUgPSBhY3RpdmVUb0RvLm5vdGVzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0U3VibWl0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhY3RpdmVUb0RvLm5hbWUgPSBlZGl0TmFtZS52YWx1ZVxuICAgICAgYWN0aXZlVG9Eby5kYXRlID0gZWRpdERhdGUudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8ucHJpb3JpdHkgPSBlZGl0UHJpb3JpdHkudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8ubm90ZXMgPSBlZGl0Tm90ZXMudmFsdWVcbiAgICAgIG1vZGFsLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblxuICAgICAgbGV0IGNhcmRJbmRleCA9IGFjdGl2ZVByb2plY3QudGFza3MuaW5kZXhPZihhY3RpdmVUb0RvKTtcbiAgICAgIGNvbnN0IHRpdGxlQ2xhc3MgPSBcIi50aXRsZURpdlwiICsgY2FyZEluZGV4XG4gICAgICBcblxuICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlQ2xhc3MpXG4gIFxuICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBlZGl0TmFtZS52YWx1ZVxuXG4gICAgICBzYXZlVG9TdG9yYWdlKClcblxuICAgIH0pXG4gIH0pXG4gIFxufTtcblxuLy9MT0NBTCBTVE9SQUdFXG5cbmxldCBwcm9qZWN0c0FyciA9IFtdXG5cbmZ1bmN0aW9uIHNhdmVUb1N0b3JhZ2UoKXtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzQXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnIpKTtcblxufVxuXG5mdW5jdGlvbiBsb2FkRnJvbVN0b3JhZ2UoKXtcbiAgcHJvamVjdHNBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0FycicpKTtcbiAgIGlmKHByb2plY3RzQXJyID09PSBudWxsKSBwcm9qZWN0c0FyciA9IFtdO1xuICAgY29uc29sZS50YWJsZShwcm9qZWN0c0Fycilcbn1cblxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCl7XG4gICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgIHByb2plY3RzQXJyID0gW107XG4gICByZXNldERpc3BsYXkoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVVSTtcbiJdLCJzb3VyY2VSb290IjoiIn0=