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
    toDoCard.appendChild(toDoDateDiv)
    const toDoPriorityDiv = document.createElement("div")
    toDoPriorityDiv.classList.add("toDoPriorityDiv")
    toDoPriorityDiv.textContent = todo.priority
    toDoCard.appendChild(toDoPriorityDiv)
    const toDoNotesDiv = document.createElement("div")
    toDoNotesDiv.classList.add("toDoNotesDiv")
    toDoNotesDiv.textContent = todo.notes
    toDoCard.appendChild(toDoNotesDiv)
    const doneToDo = document.createElement("button")
    doneToDo.classList.add("doneToDo")
    doneToDo.textContent = "DONE?"
    toDoCard.appendChild(doneToDo)
    doneToDo.addEventListener("click", () => {
        const deleteMe = deleteToDo.parentNode.id
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
    const deleteToDo = document.createElement("button")
    deleteToDo.classList.add("deleteToDo")
    deleteToDo.textContent = "DELETE"
    deleteToDo.addEventListener("click", () => {
        const deleteMe = deleteToDo.parentNode.id
        const thisCard = document.getElementById(deleteMe)
        activeProject.tasks.splice(`${deleteMe}`, 1)
        console.table(activeProject.tasks)
        thisCard.parentNode.removeChild(thisCard)
        
    })
    toDoCard.appendChild(deleteToDo)
    
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
    lowPriority.setAttribute("value", "low")
    lowPriority.textContent = "Low Priority"
    const regularPriority = document.createElement("option")
    regularPriority.setAttribute("value", "regular")
    regularPriority.textContent = "Regular Priority"
    const highPriority = document.createElement("option")
    highPriority.setAttribute("value", "high")
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateUI);
               
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixLQUFLOztBQUVsQzs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7Ozs7Ozs7Ozs7O0FDZmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7O1VDVG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0wrQztBQUN0Qjs7O0FBR2xCO0FBQ0E7O0FBRVA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQyxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQUk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRU87QUFDQTtBQUNBO0FBQ1A7O0FBRU87QUFDUDtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFtQixTO0FBQzNCO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxrQ0FBa0MsMENBQTBDLDBCQUEwQixJQUFJOztBQUUxRywrQkFBK0IsYUFBYTtBQUM1QztBQUNBLHVCQUF1QixpREFBVyxJQUFJLGFBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDs7Ozs7OztBQU9PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFVBQVUiLCJmaWxlIjoiZG9tLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHNBcnIgPSBbXVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgICAgIHRoaXMuZG9uZSA9IFtdXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcblxuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBgJHtuYW1lfWAudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIlwiKVxuICAgICAgIFxuICAgICAgICB0aGlzLmlkID0gcHJvamVjdElEXG4gICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyBhY3RpdmUsIHByb2plY3RzQXJyIH0gZnJvbSBcIi4vcHJvamVjdFwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCJcblxuXG5leHBvcnQgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsXG5leHBvcnQgbGV0IGxhdGVzdFRvRG8gPSBudWxsXG5cbmNvbnN0IGdlbmVyYXRlVUkgPSAoKSA9PiB7XG4gICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIilcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxuY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlckRpdlwiKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJEaXYpXG4gICAgXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIilcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IFRPRE9zXCJcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nbylcbn0pKClcblxuY29uc3QgZ2VuZXJhdGVTaWRlQmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHNpZGVCYXJEaXYuY2xhc3NMaXN0LmFkZChcInNpZGVCYXJEaXZcIilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhckRpdilcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNIZWFkZXJcIilcbiAgICBzaWRlQmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKVxuICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiXG59KSgpXG5cbmNvbnN0IGdlbmVyYXRlTWFpbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250ZW50Q29udGFpbmVyXCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50Q29udGFpbmVyKVxufSkoKVxuXG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb0NhcmQgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250ZW50Q29udGFpbmVyXCIpXG4gICAgY29uc3QgdG9Eb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgY2FyZEluZGV4ID0gYWN0aXZlUHJvamVjdC50YXNrcy5sZW5ndGggLSAxXG4gICAgY29uc3QgY2FyZElEID0gXCJ0b2RvXCIgKyBjYXJkSW5kZXhcbiAgICB0b0RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjYXJkSUQpXG4gICAgdG9Eb0NhcmQuY2xhc3NMaXN0LmFkZChcInRvRG9DYXJkXCIpXG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQ2FyZClcbiAgICBjb25zdCB0b0RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdG9Eb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvVGl0bGVEaXZcIilcbiAgICB0b0RvVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLm5hbWVcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvVGl0bGVEaXYpXG4gICAgY29uc3QgdG9Eb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdG9Eb0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9EYXRlRGl2XCIpXG4gICAgdG9Eb0RhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGVcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvRGF0ZURpdilcbiAgICBjb25zdCB0b0RvUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlEaXZcIilcbiAgICB0b0RvUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5RGl2KVxuICAgIGNvbnN0IHRvRG9Ob3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b0RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Ob3Rlc0RpdlwiKVxuICAgIHRvRG9Ob3Rlc0Rpdi50ZXh0Q29udGVudCA9IHRvZG8ubm90ZXNcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNEaXYpXG4gICAgY29uc3QgZG9uZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZChcImRvbmVUb0RvXCIpXG4gICAgZG9uZVRvRG8udGV4dENvbnRlbnQgPSBcIkRPTkU/XCJcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChkb25lVG9EbylcbiAgICBkb25lVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGVNZSA9IGRlbGV0ZVRvRG8ucGFyZW50Tm9kZS5pZFxuICAgICAgICBjb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZU1lKVxuICAgICAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShgJHtkZWxldGVNZX1gLCAxKVxuICAgICAgICBhY3RpdmVQcm9qZWN0LmRvbmUucHVzaChgJHtkZWxldGVNZX1gKVxuICAgICAgICBjb25zb2xlLmxvZyhcInRvIGRvOlwiKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG9uZTpcIilcbiAgICAgICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LmRvbmUpXG4gICAgICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b0RvQ2FyZFwiKVxuICAgICAgICB0aGlzQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKVxuICAgICAgICBcbiAgICB9KVxuICAgIGNvbnN0IGRlbGV0ZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZGVsZXRlVG9Eby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVG9Eb1wiKVxuICAgIGRlbGV0ZVRvRG8udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiXG4gICAgZGVsZXRlVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGVNZSA9IGRlbGV0ZVRvRG8ucGFyZW50Tm9kZS5pZFxuICAgICAgICBjb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZU1lKVxuICAgICAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShgJHtkZWxldGVNZX1gLCAxKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpXG4gICAgICAgIHRoaXNDYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc0NhcmQpXG4gICAgICAgIFxuICAgIH0pXG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlVG9EbylcbiAgICBcbn1cbiAgICBcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdG9Eb0Zvcm1EaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtRGl2XCIpXG4gICAgY29uc3QgdG9Eb05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvTmFtZUlucHV0XCIpXG4gICAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCInVG8tRG8nIHRpdGxlLi4uXCIpXG4gICAgdG9Eb05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIilcbiAgICBcbiAgICB0b0RvTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBcbiAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHRvRG9EdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXG4gICAgdG9Eb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvRHVlRGF0ZUlucHV0XCIpXG4gICAgdG9Eb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpXG5cbiAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgdG9Eb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9Eb1ByaW9yaXR5SW5wdXRcIilcbiAgICB0b0RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpXG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIilcbiAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93IFByaW9yaXR5XCJcbiAgICBjb25zdCByZWd1bGFyUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgcmVndWxhclByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwicmVndWxhclwiKVxuICAgIHJlZ3VsYXJQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUmVndWxhciBQcmlvcml0eVwiXG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIilcbiAgICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhpZ2ggUHJpb3JpdHlcIlxuXG5cbiAgICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpXG4gICAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKHJlZ3VsYXJQcmlvcml0eSlcbiAgICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KVxuXG5cbiAgICBjb25zdCB0b0RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxuICAgIHRvRG9Ob3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9Eb05vdGVzSW5wdXRcIilcbiAgIC8vIHRvRG9Ob3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3Rlcy4uLlwiKVxuICAgIHRvRG9Ob3Rlc0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKVxuXG4gICAgY29uc3QgdG9Eb1N1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICB0b0RvU3ViQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcbiAgICB0b0RvU3ViQnRuLnRleHRDb250ZW50ID0gXCJBREQgVE9ET1wiXG4gICAgdG9Eb1N1YkJ0bi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIilcbiAgICB0b0RvU3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9Eb1N1YkJ0blwiKVxuXG4gICAgdG9Eb0Zvcm1EaXYuYXBwZW5kQ2hpbGQodG9Eb05hbWVJbnB1dClcbiAgICB0b0RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSlcbiAgICB0b0RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpXG4gICAgdG9Eb0Zvcm1EaXYuYXBwZW5kQ2hpbGQodG9Eb05vdGVzSW5wdXQpXG4gICAgdG9Eb0Zvcm1EaXYuYXBwZW5kQ2hpbGQodG9Eb1N1YkJ0bilcblxuICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250ZW50Q29udGFpbmVyXCIpXG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRm9ybURpdilcblxuICAgIGNvbnN0IHRvRG9Gb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9OYW1lSW5wdXRcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9EdWVEYXRlSW5wdXRcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvUHJpb3JpdHlJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9Ob3Rlc0lucHV0XCIpLnZhbHVlO1xuICAgICAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzKVxuICAgIH1cbiAgICBcbiAgICAvL2NvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9TdWJCdG5cIilcbiAgICAgICAgdG9Eb1N1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnB1c2godG9Eb0Zvcm1JbnB1dCgpKVxuICAgICAgICBsYXRlc3RUb0RvID0gYWN0aXZlUHJvamVjdC50YXNrcy5sZW5ndGggLSAxXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGF0ZXN0IFwiICsgbGF0ZXN0VG9EbylcbiAgICAgICAgZ2VuZXJhdGVUb0RvQ2FyZCh0b0RvRm9ybUlucHV0KCkpXG4gICAgICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcylcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG59XG5cbmNvbnN0IHByb2plY3RDb250ZW50ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q29udGVudENvbnRhaW5lclwiKVxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SGVhZGVyXCIpXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGFjdGl2ZVByb2plY3QubmFtZVxuICAgIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXG4gICBcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGVudENvbnRhaW5lclxufVxuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIilcbmV4cG9ydCBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlckRpdlwiKVxuZXhwb3J0IGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJEaXZcIilcbi8vZXhwb3J0IGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhckRpdlwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5sZW5ndGggLSAxXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIilcbiAgICAgICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZVxuICAgICAgICBzaWRlQmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgICAgIHByb2plY3RzQXJyLmZvckVhY2gob2JqID0+IHsgXG4gICAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdEluZGV4KVxufSlcblxuXG4vL2NvbnN0IGVhY2hQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RGl2XCIpXG4vL2VhY2hQcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PiB7IHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgY29uc29sZS5sb2cocHJvamVjdC5pZCkgfSApIH0gKSAgICBcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Byb2plY3RJbmRleH1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpXG4gICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzQXJyW2Ake3Byb2plY3RJbmRleH1gXVxuICAgIGNvbnNvbGUubG9nKFwiVGhlIGFjdGl2ZSBwcm9qZWN0IGlzOiBcIiArIGFjdGl2ZVByb2plY3QubmFtZSlcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRDb250YWluZXJcIilcbiAgICBtYWluQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQoKSlcbiAgICBnZW5lcmF0ZVRvRG9Gb3JtKClcblxuICAgIFxuICAgIH0pXG5cbn1cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuICAgIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybURpdlwiKVxuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KVxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKVxuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIldoYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0P1wiKVxuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIilcbiAgICBwcm9qZWN0SW5wdXQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SW5wdXRcIilcbiAgICBwcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGNvbnN0IHByb2plY3RTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgcHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXG4gICAgcHJvamVjdFN1YkJ0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFBST0pFQ1RcIlxuICAgIHByb2plY3RTdWJCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpXG4gICAgcHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RTdWJCdG5cIilcbiAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpXG4gICAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFN1YkJ0bilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVVJXG4gICAgICAgICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9