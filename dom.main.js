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
/* harmony export */   "projectsArr": () => (/* binding */ projectsArr),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectsArr = []

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



const generateToDoCard = (todo) => {
  const toDoContainer = document.querySelector(".projectContentContainer");
  const toDoCard = document.createElement("div");
  
  toDoCard.classList.add("toDoCard");
  toDoContainer.appendChild(toDoCard);

  console.log("please be right below")
  console.log(`${activeProject.tasks.indexOf(todo)}`)
  let cardIndex = activeProject.tasks.length - 1;
  const cardID = "todo" + cardIndex++;
  toDoCard.setAttribute("id", cardID);

  const toDoTitleDiv = document.createElement("div");
  toDoTitleDiv.classList.add("toDoTitleDiv");
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
    const deleteMe = buttonsDiv.parentNode.id;
    const thisCard = document.getElementById(deleteMe);
    activeProject.tasks.splice(`${deleteMe}`, 1);
    console.table(activeProject.tasks);
    thisCard.parentNode.removeChild(thisCard);
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
    console.log("latest " + latestToDo);
    refreshToDos()
    console.table(activeProject.tasks);
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
//export const mainContentContainer = document.querySelector(".mainContentContainer")

const generateProjectCard = (project) => {
  const sideBarDiv = document.querySelector(".sideBarDiv");
  const projectDiv = document.createElement("div");
  const projectIndex = _project__WEBPACK_IMPORTED_MODULE_0__.projectsArr.length - 1;
  projectDiv.classList.add("projectDiv");
  projectDiv.textContent = project.name;
  sideBarDiv.appendChild(projectDiv);
  _project__WEBPACK_IMPORTED_MODULE_0__.projectsArr.forEach((obj) => {
    projectDiv.setAttribute("id", projectIndex);
  });

  //const eachProject = document.querySelectorAll(".projectDiv")
  //eachProject.forEach(project => { project.addEventListener("click", () => { console.log(project.id) } ) } )

  document.getElementById(`${projectIndex}`).addEventListener("click", () => {
    console.log(projectIndex);
    activeProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectsArr[`${projectIndex}`];
    console.log("The active project is: " + activeProject.name);
    const mainContentContainer = document.querySelector(
      ".mainContentContainer"
    );
    mainContentContainer.textContent = "";
    mainContentContainer.appendChild(projectContent());
    generateToDoForm();
  });
};

const generateProjectForm = () => {
  const mainContentContainer = document.querySelector(".mainContentContainer");
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
      
      refreshToDos()

    })
  })
  
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateUI);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixLQUFLOztBQUVsQzs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7Ozs7Ozs7Ozs7O0FDZmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7VUNkbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05nRDtBQUN0Qjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQ0FBa0M7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QyxpQ0FBaUMsU0FBUztBQUMxQztBQUNBLG9DQUFvQyxTQUFTO0FBQzdDLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBSTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ0E7QUFDQTtBQUNQOztBQUVPO0FBQ1A7QUFDQTtBQUNBLHVCQUF1Qix3REFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBbUI7QUFDckI7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0NBQW9DLDBDQUEwQywwQkFBMEIsSUFBSTs7QUFFNUcsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQSxvQkFBb0IsaURBQVcsSUFBSSxhQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQSwwRUFBMEUsb0JBQW9CO0FBQzlGOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0UsaUJBQWlCO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7O0FBRUEsaUVBQWUsVUFBVSxFQUFDIiwiZmlsZSI6ImRvbS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzQXJyID0gW11cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgICAgICB0aGlzLmRvbmUgPSBbXVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG5cbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gYCR7bmFtZX1gLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIilcbiAgICAgICBcbiAgICAgICAgdGhpcy5pZCA9IHByb2plY3RJRFxuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXNcblxuICAgICAgICBjb25zdCB0YXNrSUQgPSBuYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDk5OSArIDEwMCkpXG4gICAgICAgICAgIFxuICAgICAgICB0aGlzLmlkID0gdGFza0lEXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFjdGl2ZSwgcHJvamVjdHNBcnIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG5leHBvcnQgbGV0IGxhdGVzdFRvRG8gPSBudWxsO1xuZXhwb3J0IGxldCBhY3RpdmVUb0RvID0gbnVsbDtcbmV4cG9ydCBsZXQgYWN0aXZlVG9Eb0lEID0gbnVsbDtcblxuY29uc3QgZ2VuZXJhdGVVSSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBnZW5lcmF0ZUhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlckRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IFRPRE9zXCI7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGxvZ28pO1xuICB9KSgpO1xuXG4gIGNvbnN0IGdlbmVyYXRlU2lkZUJhciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZUJhckRpdi5jbGFzc0xpc3QuYWRkKFwic2lkZUJhckRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhckRpdik7XG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c0hlYWRlclwiKTtcbiAgICBzaWRlQmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcbiAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcbiAgfSkoKTtcblxuICBjb25zdCBnZW5lcmF0ZU1haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50Q29udGFpbmVyKTtcbiAgfSkoKTtcblxuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbEJsdXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsQmx1clwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbEJsdXIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWxCbHVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbn07XG5cbmNvbnN0IHJlZnJlc2hUb0RvcyA9ICgpID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gICAgICB0b0RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgZ2VuZXJhdGVUb0RvRm9ybSgpXG5hY3RpdmVQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiBnZW5lcmF0ZVRvRG9DYXJkKHRhc2spIClcbn1cblxuXG5cbmNvbnN0IGdlbmVyYXRlVG9Eb0NhcmQgPSAodG9kbykgPT4ge1xuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGVudENvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9Eb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBcbiAgdG9Eb0NhcmQuY2xhc3NMaXN0LmFkZChcInRvRG9DYXJkXCIpO1xuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9DYXJkKTtcblxuICBjb25zb2xlLmxvZyhcInBsZWFzZSBiZSByaWdodCBiZWxvd1wiKVxuICBjb25zb2xlLmxvZyhgJHthY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YodG9kbyl9YClcbiAgbGV0IGNhcmRJbmRleCA9IGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoIC0gMTtcbiAgY29uc3QgY2FyZElEID0gXCJ0b2RvXCIgKyBjYXJkSW5kZXgrKztcbiAgdG9Eb0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgY2FyZElEKTtcblxuICBjb25zdCB0b0RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9UaXRsZURpdlwiKTtcbiAgdG9Eb1RpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvVGl0bGVEaXYpO1xuXG4gIGNvbnN0IHRvRG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9EYXRlRGl2XCIpO1xuICB0b0RvRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvRGF0ZURpdilcblxuICBjb25zdCB0b0RvUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Qcmlvcml0eURpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHlEaXYpXG4gIGNvbnN0IHRvRG9Ob3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb05vdGVzRGl2XCIpO1xuICB0b0RvTm90ZXNEaXYudGV4dENvbnRlbnQgPSB0b2RvLm5vdGVzO1xuICAvL3RvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9Ob3Rlc0RpdilcblxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgXG5cbiAgY29uc3QgZG9uZUJ1dHRvblRvZ2dsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZChcImRvbmVUb0RvXCIpO1xuICBkb25lVG9Eby50ZXh0Q29udGVudCA9IFwiRE9ORT9cIjtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkb25lVG9Ebyk7XG4gIGRvbmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0lEID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkO1xuICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9Eb0lEKTtcbiAgICBsZXQgdG9Eb0luZGV4ID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIHRvRG9JbmRleCA9IHBhcnNlSW50KHRvRG9JbmRleCk7XG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbdG9Eb0luZGV4XTtcbiAgICAvL2FjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpO1xuICAgIC8vYWN0aXZlUHJvamVjdC5kb25lLnB1c2goYCR7ZGVsZXRlTWV9YCk7XG4gICAgYWN0aXZlVG9Eby5zdGF0dXMgPSBcImNvbXBsZXRlXCJcbiAgICAvL2FjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpO1xuICAgIC8vYWN0aXZlUHJvamVjdC5kb25lLnB1c2goYCR7ZGVsZXRlTWV9YCk7XG4gICAgYWN0aXZlVG9Eby5zdGF0dXMgPSBcImNvbXBsZXRlXCJcbiAgICBjb25zb2xlLmxvZyhcInRvIGRvOlwiKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIGNvbnNvbGUubG9nKFwiZG9uZTpcIik7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LmRvbmUpO1xuICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b0RvQ2FyZFwiKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgICBjb25zdCBzdHJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3RyaWtlLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2VcIilcbiAgICB0b0RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQoc3RyaWtlKVxuICAgIGRvbmVUb0RvLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIlxuICB9KVxufSkoKVxuXG4gIGNvbnN0IGVkaXRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZChcImVkaXRUb0RvXCIpO1xuICBlZGl0VG9Eby50ZXh0Q29udGVudCA9IFwiREVUQUlMU1wiO1xuICBlZGl0VG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBlZGl0TWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgZWRpdE1lID0gcGFyc2VJbnQoZWRpdE1lKTtcbiAgICBhY3RpdmVUb0RvID0gYWN0aXZlUHJvamVjdC50YXNrc1tlZGl0TWVdO1xuICAgIGdlbmVyYXRlVG9Eb01vZGFsKCk7XG4gIH0pO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGVkaXRUb0RvKTtcblxuICBjb25zdCBkZWxldGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlVG9Eby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVG9Eb1wiKTtcbiAgZGVsZXRlVG9Eby50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gIGRlbGV0ZVRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVNZSA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZDtcbiAgICBjb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZU1lKTtcbiAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShgJHtkZWxldGVNZX1gLCAxKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIHRoaXNDYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc0NhcmQpO1xuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUb0RvKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb05hbWVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiJ1RvLURvJyB0aXRsZS4uLlwiKTtcbiAgdG9Eb05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIHRvRG9OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb05hbWVJbnB1dClcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvRG9EdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgdG9Eb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKTtcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvdyBQcmlvcml0eVwiO1xuICBjb25zdCByZWd1bGFyUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICByZWd1bGFyUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJSZWd1bGFyXCIpO1xuICByZWd1bGFyUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIjtcbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoIFByaW9yaXR5XCI7XG5cbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKHJlZ3VsYXJQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpXG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAvLyB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5vdGVzLi4uXCIpO1xuICB0b0RvTm90ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9Ob3Rlc0lucHV0KVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCA9IChpZCwgdGV4dCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b0RvU3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICB0b0RvU3ViQnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgdG9Eb1N1YkJ0bi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9TdWJCdG4pXG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCB0b0RvRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Gb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybURpdlwiKTtcblxuICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoXCJ0b0RvTmFtZUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9EYXRlSW5wdXQoXCJ0b0RvRHVlRGF0ZUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0KFwidG9Eb1ByaW9yaXR5SW5wdXRcIiwgdG9Eb0Zvcm1EaXYpXG4gIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoXCJ0b0RvTm90ZXNJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQoXCJ0b0RvU3ViQnRuXCIsIFwiQUREIFRPRE9cIiwgdG9Eb0Zvcm1EaXYpXG5cblxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGVudENvbnRhaW5lclwiKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRm9ybURpdik7XG5cbiAgY29uc3QgdG9Eb0Zvcm1JbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvTmFtZUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9EdWVEYXRlSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9Qcmlvcml0eUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvTm90ZXNJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBzdGF0dXMgPSBcImluY29tcGxldGVcIlxuICAgIHJldHVybiBuZXcgVGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cyk7XG4gIH07XG5cbiAgY29uc3QgdG9Eb1N1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb1N1YkJ0blwiKVxuICB0b0RvU3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5wdXNoKHRvRG9Gb3JtSW5wdXQoKSk7XG4gICAgbGF0ZXN0VG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoIC0gMTtcbiAgICBjb25zb2xlLmxvZyhcImxhdGVzdCBcIiArIGxhdGVzdFRvRG8pO1xuICAgIHJlZnJlc2hUb0RvcygpXG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcm9qZWN0Q29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RIZWFkZXJcIik7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBhY3RpdmVQcm9qZWN0Lm5hbWU7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGVudENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbmV4cG9ydCBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlckRpdlwiKTtcbmV4cG9ydCBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyRGl2XCIpO1xuLy9leHBvcnQgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50Q29udGFpbmVyXCIpXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RDYXJkID0gKHByb2plY3QpID0+IHtcbiAgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhckRpdlwiKTtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQXJyLmxlbmd0aCAtIDE7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIik7XG4gIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIHByb2plY3RzQXJyLmZvckVhY2goKG9iaikgPT4ge1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdEluZGV4KTtcbiAgfSk7XG5cbiAgLy9jb25zdCBlYWNoUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERpdlwiKVxuICAvL2VhY2hQcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PiB7IHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgY29uc29sZS5sb2cocHJvamVjdC5pZCkgfSApIH0gKVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Byb2plY3RJbmRleH1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzQXJyW2Ake3Byb2plY3RJbmRleH1gXTtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBhY3RpdmUgcHJvamVjdCBpczogXCIgKyBhY3RpdmVQcm9qZWN0Lm5hbWUpO1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLm1haW5Db250ZW50Q29udGFpbmVyXCJcbiAgICApO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCgpKTtcbiAgICBnZW5lcmF0ZVRvRG9Gb3JtKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1EaXZcIik7XG4gIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0SW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3Q/XCIpO1xuICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpO1xuICBwcm9qZWN0SW5wdXQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IHByb2plY3RTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHByb2plY3RTdWJCdG4udGV4dENvbnRlbnQgPSBcIkNSRUFURSBQUk9KRUNUXCI7XG4gIHByb2plY3RTdWJCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpO1xuICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFN1YkJ0blwiKTtcbiAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcbiAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFN1YkJ0bik7XG59O1xuXG5cbmNvbnN0IGdlbmVyZXJhdGVDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQmx1clwiKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgY2xvc2VNb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VNb2RhbFwiKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VNb2RhbCk7XG4gIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICB9KVxufTtcblxuY29uc3QgZ2VuZXJhdGVUb0RvTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxCbHVyXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG4gIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblxuICBjb25zdCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdG9Eb05hbWUuY2xhc3NMaXN0LmFkZChcInRvRG9OYW1lTW9kYWxcIik7XG4gIGNvbnNvbGUubG9nKGFjdGl2ZVRvRG8pO1xuICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVRvRG8ubmFtZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XG5cbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9Eb0R1ZURhdGVNb2RhbFwiKTtcbiAgdG9Eb0R1ZURhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzID1cIm1vZGFsTGFiZWxzXCI+RHVlIERhdGU6IDwvc3Bhbj4ke2FjdGl2ZVRvRG8uZGF0ZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSk7XG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlNb2RhbFwiKTtcbiAgdG9Eb1ByaW9yaXR5LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPlByaW9yaXR5OiA8L3NwYW4+JHthY3RpdmVUb0RvLnByaW9yaXR5fWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Qcmlvcml0eSk7XG5cbiAgY29uc3QgdG9Eb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb05vdGVzLmNsYXNzTGlzdC5hZGQoXCJ0b0RvTm90ZXNNb2RhbFwiKTtcbiAgdG9Eb05vdGVzLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPk5vdGVzOiA8L3NwYW4+JHthY3RpdmVUb0RvLm5vdGVzfWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Ob3Rlcyk7XG5cbiAgZ2VuZXJlcmF0ZUNsb3NlQnV0dG9uKClcblxuICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZChcImVkaXRUb0RvXCIpXG4gIGVkaXRUb0RvLnRleHRDb250ZW50ID0gXCJFRElUXCJcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZWRpdFRvRG8pXG4gIGVkaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgIG1vZGFsLnRleHRDb250ZW50ID0gXCJcIlxuICAgIGdlbmVyYXRlVG9Eb05hbWVJbnB1dChcImVkaXROYW1lSW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KFwiZWRpdERhdGVJbnB1dFwiLCBtb2RhbClcbiAgICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0KFwiZWRpdFByaW9yaXR5SW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvTm90ZXNJbnB1dChcImVkaXROb3Rlc0lucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KFwiZWRpdFN1Ym1pdEJ1dHRvblwiLCBcIlNVQk1JVCBDSEFOR0VTXCIsIG1vZGFsKVxuICAgIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpXG4gICAgY29uc3QgZWRpdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXROYW1lSW5wdXRcIilcbiAgICBlZGl0TmFtZS52YWx1ZSA9IGFjdGl2ZVRvRG8ubmFtZVxuICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0RGF0ZUlucHV0XCIpXG4gICAgZWRpdERhdGUudmFsdWUgPSBhY3RpdmVUb0RvLmRhdGVcbiAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRQcmlvcml0eUlucHV0XCIpXG4gICAgZWRpdFByaW9yaXR5LnZhbHVlID0gYWN0aXZlVG9Eby5wcmlvcml0eVxuICAgIGNvbnN0IGVkaXROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdE5vdGVzSW5wdXRcIilcbiAgICBlZGl0Tm90ZXMudmFsdWUgPSBhY3RpdmVUb0RvLm5vdGVzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0U3VibWl0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhY3RpdmVUb0RvLm5hbWUgPSBlZGl0TmFtZS52YWx1ZVxuICAgICAgYWN0aXZlVG9Eby5kYXRlID0gZWRpdERhdGUudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8ucHJpb3JpdHkgPSBlZGl0UHJpb3JpdHkudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8ubm90ZXMgPSBlZGl0Tm90ZXMudmFsdWVcbiAgICAgIG1vZGFsLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICAgIFxuICAgICAgcmVmcmVzaFRvRG9zKClcblxuICAgIH0pXG4gIH0pXG4gIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVVSTtcbiJdLCJzb3VyY2VSb290IjoiIn0=