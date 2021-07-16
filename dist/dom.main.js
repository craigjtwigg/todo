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
    constructor(name, date, priority, notes){
        this.name = name
        this.date = date
        this.priority = priority
        this.notes = notes
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





let activeProject = null
let latestToDo = null
let activeToDo = null
let activeToDoID = null

const generateUI = () => {
   
    const container = document.createElement("div")
    container.classList.add("container")
    document.body.appendChild(container)

const generateHeader = (() => {
    const headerDiv = document.createElement("div")
    headerDiv.classList.add("headerDiv")
    container.appendChild(headerDiv)
    
    const logo = document.createElement("h1")
    logo.classList.add("logo")
    logo.textContent = "Project TODOs"
    headerDiv.appendChild(logo)
})()

const generateSideBar = (() => {
    const sideBarDiv = document.createElement("div")
    sideBarDiv.classList.add("sideBarDiv")
    container.appendChild(sideBarDiv)
    const projectsHeader = document.createElement("div")
    projectsHeader.classList.add("projectsHeader")
    sideBarDiv.appendChild(projectsHeader)
    projectsHeader.textContent = "PROJECTS"
})()

const generateMain = (() => {
    const mainContentContainer = document.createElement("div")
    mainContentContainer.classList.add("mainContentContainer")
    container.appendChild(mainContentContainer)
})()

const modalBlur = document.createElement("div")
modalBlur.classList.add("modalBlur")
document.body.appendChild(modalBlur)
const modal = document.createElement("div")
modal.classList.add("modal")
modalBlur.appendChild(modal)

}

const generateToDoCard = (todo) => {
    const toDoContainer = document.querySelector(".projectContentContainer")
    const toDoCard = document.createElement("div")
    const cardIndex = activeProject.tasks.length - 1
    const cardID = "todo" + cardIndex
    toDoCard.setAttribute("id", cardID)
    toDoCard.classList.add("toDoCard")
    toDoContainer.appendChild(toDoCard)
    const toDoTitleDiv = document.createElement("div")
    toDoTitleDiv.classList.add("toDoTitleDiv")
    toDoTitleDiv.textContent = todo.name
    toDoCard.appendChild(toDoTitleDiv)
    const toDoDateDiv = document.createElement("div")
    toDoDateDiv.classList.add("toDoDateDiv")
    toDoDateDiv.textContent = todo.date
    //toDoCard.appendChild(toDoDateDiv)
    const toDoPriorityDiv = document.createElement("div")
    toDoPriorityDiv.classList.add("toDoPriorityDiv")
    toDoPriorityDiv.textContent = todo.priority
    //toDoCard.appendChild(toDoPriorityDiv)
    const toDoNotesDiv = document.createElement("div")
    toDoNotesDiv.classList.add("toDoNotesDiv")
    toDoNotesDiv.textContent = todo.notes
    //toDoCard.appendChild(toDoNotesDiv)

    const buttonsDiv = document.createElement("div")
    toDoCard.appendChild(buttonsDiv)

    const doneToDo = document.createElement("button")
    doneToDo.classList.add("doneToDo")
    doneToDo.textContent = "DONE?"
    buttonsDiv.appendChild(doneToDo)
    doneToDo.addEventListener("click", () => {
        const deleteMe = buttonsDiv.parentNode.id
        const thisCard = document.getElementById(deleteMe)
        activeProject.tasks.splice(`${deleteMe}`, 1)
        activeProject.done.push(`${deleteMe}`)
        console.log("to do:")
        console.table(activeProject.tasks)
        console.log("done:")
        console.table(activeProject.done)
        thisCard.classList.remove("toDoCard")
        thisCard.classList.add("done")
        
    })

    const editToDo = document.createElement("button")
    editToDo.classList.add("editToDo")
    editToDo.textContent = "EDIT . INSPECT"
    editToDo.addEventListener("click", () => {
        let editMe = buttonsDiv.parentNode.id.slice(4)
        editMe = parseInt(editMe)
        activeToDo =  activeProject.tasks[editMe]
        generateToDoModal()
        
    })
    buttonsDiv.appendChild(editToDo)

 
    const deleteToDo = document.createElement("button")
    deleteToDo.classList.add("deleteToDo")
    deleteToDo.textContent = "DELETE"
    deleteToDo.addEventListener("click", () => {
        const deleteMe = buttonsDiv.parentNode.id
        const thisCard = document.getElementById(deleteMe)
        activeProject.tasks.splice(`${deleteMe}`, 1)
        console.table(activeProject.tasks)
        thisCard.parentNode.removeChild(thisCard)
        
    })
    buttonsDiv.appendChild(deleteToDo)
    
}
    

const generateToDoForm = () => {
    const toDoFormDiv = document.createElement("div")
    toDoFormDiv.classList.add("toDoFormDiv")
    const toDoNameInput = document.createElement("input")
    toDoNameInput.setAttribute("id", "toDoNameInput")
    toDoNameInput.setAttribute("type", "text")
    toDoNameInput.setAttribute("placeholder", "'To-Do' title...")
    toDoNameInput.classList.add("toDoForm")
    
    toDoNameInput.required = true;
    
    const toDoDueDate = document.createElement("input")
    toDoDueDate.setAttribute("type", "date")
    toDoDueDate.setAttribute("id", "toDoDueDateInput")
    toDoDueDate.classList.add("toDoForm")

    const toDoPriority = document.createElement("select")
    toDoPriority.setAttribute("id", "toDoPriorityInput")
    toDoPriority.classList.add("toDoForm")
    const lowPriority = document.createElement("option")
    lowPriority.setAttribute("value", "Low")
    lowPriority.textContent = "Low Priority"
    const regularPriority = document.createElement("option")
    regularPriority.setAttribute("value", "Regular")
    regularPriority.textContent = "Regular Priority"
    const highPriority = document.createElement("option")
    highPriority.setAttribute("value", "High")
    highPriority.textContent = "High Priority"


    toDoPriority.appendChild(lowPriority)
    toDoPriority.appendChild(regularPriority)
    toDoPriority.appendChild(highPriority)


    const toDoNotesInput = document.createElement("textarea")
    toDoNotesInput.setAttribute("id", "toDoNotesInput")
   // toDoNotesInput.setAttribute("type", "text")
    toDoNotesInput.setAttribute("placeholder", "Notes...")
    toDoNotesInput.classList.add("toDoForm")

    const toDoSubBtn = document.createElement("button")
    toDoSubBtn.setAttribute("type", "submit")
    toDoSubBtn.textContent = "ADD TODO"
    toDoSubBtn.classList.add("toDoForm")
    toDoSubBtn.setAttribute("id", "toDoSubBtn")

    toDoFormDiv.appendChild(toDoNameInput)
    toDoFormDiv.appendChild(toDoDueDate)
    toDoFormDiv.appendChild(toDoPriority)
    toDoFormDiv.appendChild(toDoNotesInput)
    toDoFormDiv.appendChild(toDoSubBtn)

    const toDoContainer = document.querySelector(".projectContentContainer")
    toDoContainer.appendChild(toDoFormDiv)

    const toDoFormInput = () => {
        const name = document.querySelector("#toDoNameInput").value;
        const date = document.querySelector("#toDoDueDateInput").value;
        const priority = document.querySelector("#toDoPriorityInput").value;
        const notes = document.querySelector("#toDoNotesInput").value;
        return new _task__WEBPACK_IMPORTED_MODULE_1__.default(name, date, priority, notes)
    }
    
    //const toDoSubBtn = document.querySelector("#toDoSubBtn")
        toDoSubBtn.addEventListener("click", () => {
        activeProject.tasks.push(toDoFormInput())
        latestToDo = activeProject.tasks.length - 1
        console.log("latest " + latestToDo)
        generateToDoCard(toDoFormInput())
        console.table(activeProject.tasks)
        
        
    })
}

const projectContent = () => {
    
    const projectContentContainer = document.createElement("div")
    projectContentContainer.classList.add("projectContentContainer")
    const projectHeader = document.createElement("h2")
    projectHeader.classList.add("projectHeader")
    projectHeader.textContent = activeProject.name
    projectContentContainer.appendChild(projectHeader)
   

    return projectContentContainer
}

const container = document.querySelector(".container")
const headerDiv = document.querySelector(".headerDiv")
const sideBarDiv = document.querySelector(".sideBarDiv")
//export const mainContentContainer = document.querySelector(".mainContentContainer")

const generateProjectCard = (project) => {
    const sideBarDiv = document.querySelector(".sideBarDiv")
        const projectDiv = document.createElement("div")
        const projectIndex = _project__WEBPACK_IMPORTED_MODULE_0__.projectsArr.length - 1
        projectDiv.classList.add("projectDiv")
        projectDiv.textContent = project.name
        sideBarDiv.appendChild(projectDiv)
        _project__WEBPACK_IMPORTED_MODULE_0__.projectsArr.forEach(obj => { 
        projectDiv.setAttribute("id", projectIndex)
})


//const eachProject = document.querySelectorAll(".projectDiv")
//eachProject.forEach(project => { project.addEventListener("click", () => { console.log(project.id) } ) } )    

    document.getElementById(`${projectIndex}`).addEventListener("click", () => {
        console.log(projectIndex)
       activeProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectsArr[`${projectIndex}`]
    console.log("The active project is: " + activeProject.name)
    const mainContentContainer = document.querySelector(".mainContentContainer")
    mainContentContainer.textContent = "";
    mainContentContainer.appendChild(projectContent())
    generateToDoForm()

    
    })

}






const generateProjectForm = () => {
    const mainContentContainer = document.querySelector(".mainContentContainer")
    const projectFormDiv = document.createElement("div")
    projectFormDiv.classList.add("projectFormDiv")
    mainContentContainer.appendChild(projectFormDiv)
    const projectInput = document.createElement("input")
    projectInput.setAttribute("id", "projectInput")
    projectInput.setAttribute("type", "text")
    projectInput.setAttribute("placeholder", "What is the name of your project?")
    projectInput.classList.add("projectForm")
    projectInput.querySelector(".projectInput")
    projectInput.required = true;
    const projectSubBtn = document.createElement("button")
    projectSubBtn.setAttribute("type", "submit")
    projectSubBtn.textContent = "CREATE PROJECT"
    projectSubBtn.classList.add("projectForm")
    projectSubBtn.setAttribute("id", "projectSubBtn")
    projectFormDiv.appendChild(projectInput)
    projectFormDiv.appendChild(projectSubBtn)
}

const generateToDoModal = () => {
    const modalBlur = document.querySelector(".modalBlur")
    const modal = document.querySelector(".modal")
    modalBlur.style.transform = "scale(1)";
    modal.style.transform = "scale(1)";

    const toDoName = document.createElement("h2")
    toDoName.classList.add("toDoNameModal")
    console.log(activeToDo)
    toDoName.textContent = `${activeToDo.name}`;
    modal.appendChild(toDoName)

    const toDoDueDate = document.createElement("div")
    toDoDueDate.classList.add("toDoDueDateModal")
    toDoDueDate.textContent = `Due Date: ${activeToDo.date}`
    modal.appendChild(toDoDueDate)

    const toDoPriority = document.createElement("div")
    toDoPriority.classList.add("toDoPriorityModal")
    toDoPriority.textContent = `${activeToDo.priority}`
    modal.appendChild(toDoPriority)

    const toDoNotes = document.createElement("div")
    toDoNotes.classList.add("toDoNotesModal")
    toDoNotes.textContent = `${activeToDo.notes}`
    modal.appendChild(toDoNotes)

    const closeModal = document.createElement("button")
    closeModal.textContent = "x"
    closeModal.classList.add("closeModal")
    modal.appendChild(closeModal)
    closeModal.addEventListener("click", () => {
        modalBlur.style.transform = "scale(0)";
        modal.style.transform = "scale(0)";
    })
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateUI);
               
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixLQUFLOztBQUVsQzs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7Ozs7Ozs7Ozs7O0FDZmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7O1VDVG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTCtDO0FBQ3RCOzs7QUFHbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0MsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQUk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRU87QUFDQTtBQUNBO0FBQ1A7O0FBRU87QUFDUDtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFtQixTO0FBQzNCO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxrQ0FBa0MsMENBQTBDLDBCQUEwQixJQUFJOztBQUUxRywrQkFBK0IsYUFBYTtBQUM1QztBQUNBLHVCQUF1QixpREFBVyxJQUFJLGFBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDs7Ozs7OztBQU9PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9CO0FBQ3REOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7O0FBR0EsaUVBQWUsVUFBVSIsImZpbGUiOiJkb20ubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0c0FyciA9IFtdXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICAgICAgdGhpcy5kb25lID0gW11cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IGAke25hbWV9YC50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpXG4gICAgICAgXG4gICAgICAgIHRoaXMuaWQgPSBwcm9qZWN0SURcbiAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCB7IGFjdGl2ZSwgcHJvamVjdHNBcnIgfSBmcm9tIFwiLi9wcm9qZWN0XCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIlxuXG5cbmV4cG9ydCBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGxcbmV4cG9ydCBsZXQgbGF0ZXN0VG9EbyA9IG51bGxcbmV4cG9ydCBsZXQgYWN0aXZlVG9EbyA9IG51bGxcbmV4cG9ydCBsZXQgYWN0aXZlVG9Eb0lEID0gbnVsbFxuXG5jb25zdCBnZW5lcmF0ZVVJID0gKCkgPT4ge1xuICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbmNvbnN0IGdlbmVyYXRlSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJEaXZcIilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KVxuICAgIFxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUT0RPc1wiXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGxvZ28pXG59KSgpXG5cbmNvbnN0IGdlbmVyYXRlU2lkZUJhciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzaWRlQmFyRGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlQmFyRGl2XCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXJEaXYpXG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzSGVhZGVyXCIpXG4gICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcilcbiAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIlxufSkoKVxuXG5jb25zdCBnZW5lcmF0ZU1haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGVudENvbnRhaW5lclwiKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGVudENvbnRhaW5lcilcbn0pKClcblxuY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubW9kYWxCbHVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEJsdXJcIilcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxCbHVyKVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5tb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIilcbm1vZGFsQmx1ci5hcHBlbmRDaGlsZChtb2RhbClcblxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9DYXJkID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGVudENvbnRhaW5lclwiKVxuICAgIGNvbnN0IHRvRG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNhcmRJbmRleCA9IGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoIC0gMVxuICAgIGNvbnN0IGNhcmRJRCA9IFwidG9kb1wiICsgY2FyZEluZGV4XG4gICAgdG9Eb0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgY2FyZElEKVxuICAgIHRvRG9DYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ2FyZFwiKVxuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0NhcmQpXG4gICAgY29uc3QgdG9Eb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvRG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb1RpdGxlRGl2XCIpXG4gICAgdG9Eb1RpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby5uYW1lXG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlRGl2KVxuICAgIGNvbnN0IHRvRG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvRG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRGF0ZURpdlwiKVxuICAgIHRvRG9EYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRlXG4gICAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvRGF0ZURpdilcbiAgICBjb25zdCB0b0RvUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlEaXZcIilcbiAgICB0b0RvUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5XG4gICAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHlEaXYpXG4gICAgY29uc3QgdG9Eb05vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvRG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb05vdGVzRGl2XCIpXG4gICAgdG9Eb05vdGVzRGl2LnRleHRDb250ZW50ID0gdG9kby5ub3Rlc1xuICAgIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb05vdGVzRGl2KVxuXG4gICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChidXR0b25zRGl2KVxuXG4gICAgY29uc3QgZG9uZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZChcImRvbmVUb0RvXCIpXG4gICAgZG9uZVRvRG8udGV4dENvbnRlbnQgPSBcIkRPTkU/XCJcbiAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGRvbmVUb0RvKVxuICAgIGRvbmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZU1lID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkXG4gICAgICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlTWUpXG4gICAgICAgIGFjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpXG4gICAgICAgIGFjdGl2ZVByb2plY3QuZG9uZS5wdXNoKGAke2RlbGV0ZU1lfWApXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG8gZG86XCIpXG4gICAgICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcylcbiAgICAgICAgY29uc29sZS5sb2coXCJkb25lOlwiKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QuZG9uZSlcbiAgICAgICAgdGhpc0NhcmQuY2xhc3NMaXN0LnJlbW92ZShcInRvRG9DYXJkXCIpXG4gICAgICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBlZGl0VG9Eby5jbGFzc0xpc3QuYWRkKFwiZWRpdFRvRG9cIilcbiAgICBlZGl0VG9Eby50ZXh0Q29udGVudCA9IFwiRURJVCAuIElOU1BFQ1RcIlxuICAgIGVkaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBlZGl0TWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNClcbiAgICAgICAgZWRpdE1lID0gcGFyc2VJbnQoZWRpdE1lKVxuICAgICAgICBhY3RpdmVUb0RvID0gIGFjdGl2ZVByb2plY3QudGFza3NbZWRpdE1lXVxuICAgICAgICBnZW5lcmF0ZVRvRG9Nb2RhbCgpXG4gICAgICAgIFxuICAgIH0pXG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0VG9EbylcblxuIFxuICAgIGNvbnN0IGRlbGV0ZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZGVsZXRlVG9Eby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVG9Eb1wiKVxuICAgIGRlbGV0ZVRvRG8udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiXG4gICAgZGVsZXRlVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGVNZSA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZFxuICAgICAgICBjb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZU1lKVxuICAgICAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShgJHtkZWxldGVNZX1gLCAxKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpXG4gICAgICAgIHRoaXNDYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc0NhcmQpXG4gICAgICAgIFxuICAgIH0pXG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUb0RvKVxuICAgIFxufVxuICAgIFxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB0b0RvRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b0RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1EaXZcIilcbiAgICBjb25zdCB0b0RvTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9OYW1lSW5wdXRcIilcbiAgICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIidUby1EbycgdGl0bGUuLi5cIilcbiAgICB0b0RvTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKVxuICAgIFxuICAgIHRvRG9OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgdG9Eb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcbiAgICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9EdWVEYXRlSW5wdXRcIilcbiAgICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIilcblxuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICB0b0RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvUHJpb3JpdHlJbnB1dFwiKVxuICAgIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIilcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKVxuICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIlxuICAgIGNvbnN0IHJlZ3VsYXJQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICByZWd1bGFyUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJSZWd1bGFyXCIpXG4gICAgcmVndWxhclByaW9yaXR5LnRleHRDb250ZW50ID0gXCJSZWd1bGFyIFByaW9yaXR5XCJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKVxuICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaCBQcmlvcml0eVwiXG5cblxuICAgIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSlcbiAgICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQocmVndWxhclByaW9yaXR5KVxuICAgIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpXG5cblxuICAgIGNvbnN0IHRvRG9Ob3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvTm90ZXNJbnB1dFwiKVxuICAgLy8gdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgICB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5vdGVzLi4uXCIpXG4gICAgdG9Eb05vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpXG5cbiAgICBjb25zdCB0b0RvU3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHRvRG9TdWJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxuICAgIHRvRG9TdWJCdG4udGV4dENvbnRlbnQgPSBcIkFERCBUT0RPXCJcbiAgICB0b0RvU3ViQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKVxuICAgIHRvRG9TdWJCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvU3ViQnRuXCIpXG5cbiAgICB0b0RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b0RvTmFtZUlucHV0KVxuICAgIHRvRG9Gb3JtRGl2LmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKVxuICAgIHRvRG9Gb3JtRGl2LmFwcGVuZENoaWxkKHRvRG9Qcmlvcml0eSlcbiAgICB0b0RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b0RvTm90ZXNJbnB1dClcbiAgICB0b0RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b0RvU3ViQnRuKVxuXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIilcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9Gb3JtRGl2KVxuXG4gICAgY29uc3QgdG9Eb0Zvcm1JbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb05hbWVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb0R1ZURhdGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9Qcmlvcml0eUlucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb05vdGVzSW5wdXRcIikudmFsdWU7XG4gICAgICAgIHJldHVybiBuZXcgVGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpXG4gICAgfVxuICAgIFxuICAgIC8vY29uc3QgdG9Eb1N1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb1N1YkJ0blwiKVxuICAgICAgICB0b0RvU3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QudGFza3MucHVzaCh0b0RvRm9ybUlucHV0KCkpXG4gICAgICAgIGxhdGVzdFRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDFcbiAgICAgICAgY29uc29sZS5sb2coXCJsYXRlc3QgXCIgKyBsYXRlc3RUb0RvKVxuICAgICAgICBnZW5lcmF0ZVRvRG9DYXJkKHRvRG9Gb3JtSW5wdXQoKSlcbiAgICAgICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSlcbn1cblxuY29uc3QgcHJvamVjdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250ZW50Q29udGFpbmVyXCIpXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RIZWFkZXJcIilcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gYWN0aXZlUHJvamVjdC5uYW1lXG4gICAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcilcbiAgIFxuXG4gICAgcmV0dXJuIHByb2plY3RDb250ZW50Q29udGFpbmVyXG59XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKVxuZXhwb3J0IGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyRGl2XCIpXG5leHBvcnQgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhckRpdlwiKVxuLy9leHBvcnQgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50Q29udGFpbmVyXCIpXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RDYXJkID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyRGl2XCIpXG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQXJyLmxlbmd0aCAtIDFcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdlwiKVxuICAgICAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lXG4gICAgICAgIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcbiAgICAgICAgcHJvamVjdHNBcnIuZm9yRWFjaChvYmogPT4geyBcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0SW5kZXgpXG59KVxuXG5cbi8vY29uc3QgZWFjaFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3REaXZcIilcbi8vZWFjaFByb2plY3QuZm9yRWFjaChwcm9qZWN0ID0+IHsgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKSB9ICkgfSApICAgIFxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdEluZGV4fWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleClcbiAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHNBcnJbYCR7cHJvamVjdEluZGV4fWBdXG4gICAgY29uc29sZS5sb2coXCJUaGUgYWN0aXZlIHByb2plY3QgaXM6IFwiICsgYWN0aXZlUHJvamVjdC5uYW1lKVxuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCgpKVxuICAgIGdlbmVyYXRlVG9Eb0Zvcm0oKVxuXG4gICAgXG4gICAgfSlcblxufVxuXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50Q29udGFpbmVyXCIpXG4gICAgY29uc3QgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtRGl2XCIpXG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdElucHV0XCIpXG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3Q/XCIpXG4gICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybVwiKVxuICAgIHByb2plY3RJbnB1dC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbnB1dFwiKVxuICAgIHByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgcHJvamVjdFN1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcbiAgICBwcm9qZWN0U3ViQnRuLnRleHRDb250ZW50ID0gXCJDUkVBVEUgUFJPSkVDVFwiXG4gICAgcHJvamVjdFN1YkJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIilcbiAgICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFN1YkJ0blwiKVxuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dClcbiAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0U3ViQnRuKVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQmx1clwiKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKVxuICAgIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG4gICAgbW9kYWwuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXG4gICAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICB0b0RvTmFtZS5jbGFzc0xpc3QuYWRkKFwidG9Eb05hbWVNb2RhbFwiKVxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVRvRG8pXG4gICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBgJHthY3RpdmVUb0RvLm5hbWV9YDtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTmFtZSlcblxuICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRHVlRGF0ZU1vZGFsXCIpXG4gICAgdG9Eb0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7YWN0aXZlVG9Eby5kYXRlfWBcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSlcblxuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b0RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvRG9Qcmlvcml0eU1vZGFsXCIpXG4gICAgdG9Eb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7YWN0aXZlVG9Eby5wcmlvcml0eX1gXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5KVxuXG4gICAgY29uc3QgdG9Eb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvRG9Ob3Rlcy5jbGFzc0xpc3QuYWRkKFwidG9Eb05vdGVzTW9kYWxcIilcbiAgICB0b0RvTm90ZXMudGV4dENvbnRlbnQgPSBgJHthY3RpdmVUb0RvLm5vdGVzfWBcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTm90ZXMpXG5cbiAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSBcInhcIlxuICAgIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlTW9kYWxcIilcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZU1vZGFsKVxuICAgIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICAgICAgbW9kYWwuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuICAgIH0pXG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVVSVxuICAgICAgICAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==