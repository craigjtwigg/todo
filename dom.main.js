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
        this.name = name

        const projectID = `${name}`.toLowerCase().split(" ").join("")
       
        this.id = projectID
    
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

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
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "headerDiv": () => (/* binding */ headerDiv),
/* harmony export */   "sideBarDiv": () => (/* binding */ sideBarDiv),
/* harmony export */   "generateProjectCard": () => (/* binding */ generateProjectCard),
/* harmony export */   "generateProjectForm": () => (/* binding */ generateProjectForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");



let activeProject = null

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
    logo.textContent = "The Project Planner"
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

const projectContent = () => {
    const projectContentContainer = document.createElement("div")
    const projectHeader = document.createElement("h2")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixLQUFLOztBQUVsQzs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7OztVQ2RmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0wrQzs7QUFFeEM7O0FBRVA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ0E7QUFDQTtBQUNQOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDZCQUE2Qix3REFBa0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBbUIsUztBQUMzQjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxrQ0FBa0MsMENBQTBDLDBCQUEwQixJQUFJOztBQUUxRywrQkFBK0IsYUFBYTtBQUM1QztBQUNBLHVCQUF1QixpREFBVyxJQUFJLGFBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7Ozs7O0FBT087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsVUFBVSIsImZpbGUiOiJkb20ubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0c0FyciA9IFtdXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IGAke25hbWV9YC50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpXG4gICAgICAgXG4gICAgICAgIHRoaXMuaWQgPSBwcm9qZWN0SURcbiAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHsgYWN0aXZlLCBwcm9qZWN0c0FyciB9IGZyb20gXCIuL3Byb2plY3RcIlxuXG5leHBvcnQgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsXG5cbmNvbnN0IGdlbmVyYXRlVUkgPSAoKSA9PiB7XG4gICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIilcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxuY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlckRpdlwiKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJEaXYpXG4gICAgXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIilcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJUaGUgUHJvamVjdCBQbGFubmVyXCJcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nbylcbn0pKClcblxuY29uc3QgZ2VuZXJhdGVTaWRlQmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHNpZGVCYXJEaXYuY2xhc3NMaXN0LmFkZChcInNpZGVCYXJEaXZcIilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhckRpdilcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNIZWFkZXJcIilcbiAgICBzaWRlQmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKVxuICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiXG59KSgpXG5cbmNvbnN0IGdlbmVyYXRlTWFpbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250ZW50Q29udGFpbmVyXCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50Q29udGFpbmVyKVxufSkoKVxuXG59XG5cbmNvbnN0IHByb2plY3RDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gYWN0aXZlUHJvamVjdC5uYW1lXG4gICAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcilcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGVudENvbnRhaW5lclxufVxuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIilcbmV4cG9ydCBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlckRpdlwiKVxuZXhwb3J0IGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJEaXZcIilcbi8vZXhwb3J0IGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhckRpdlwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5sZW5ndGggLSAxXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIilcbiAgICAgICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZVxuICAgICAgICBzaWRlQmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgICAgIHByb2plY3RzQXJyLmZvckVhY2gob2JqID0+IHsgXG4gICAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdEluZGV4KVxufSlcbiAgICBcbi8vY29uc3QgZWFjaFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3REaXZcIilcbi8vZWFjaFByb2plY3QuZm9yRWFjaChwcm9qZWN0ID0+IHsgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKSB9ICkgfSApICAgIFxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdEluZGV4fWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleClcbiAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHNBcnJbYCR7cHJvamVjdEluZGV4fWBdXG4gICAgY29uc29sZS5sb2coXCJUaGUgYWN0aXZlIHByb2plY3QgaXM6IFwiICsgYWN0aXZlUHJvamVjdC5uYW1lKVxuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCgpKVxuICAgIH0pXG5cbn1cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuICAgIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybURpdlwiKVxuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KVxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKVxuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIldoYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0P1wiKVxuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIilcbiAgICBwcm9qZWN0SW5wdXQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SW5wdXRcIilcbiAgICBwcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGNvbnN0IHByb2plY3RTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgcHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXG4gICAgcHJvamVjdFN1YkJ0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFBST0pFQ1RcIlxuICAgIHByb2plY3RTdWJCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpXG4gICAgcHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RTdWJCdG5cIilcbiAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpXG4gICAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFN1YkJ0bilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVVJXG4gICAgICAgICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9