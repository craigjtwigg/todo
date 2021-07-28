/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  box-sizing: border-box;\n}\nbutton {\n  background: transparent;\n  border: none;\n\n}\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  background-color: rgb(212, 209, 209);\n}\n\n.container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 25% 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    'header header header'\n    'sidebar main main';\n}\n\n.headerDiv {\n  grid-area: header;\n  display: flex;\n  background: rgb(98, 66, 241);\n  background: linear-gradient(\n    70deg,\n    rgba(65, 33, 203, 1) 8%,\n    rgba(61, 32, 200, 1) 27%,\n    rgba(5, 15, 156, 1) 48%,\n    rgb(141, 71, 233) 100%\n  );\n  color: white;\n  width: 100%;\n  height: 5rem;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 0 6rem;\n}\n\nh1 {\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n  display: block;\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.sideBarDiv {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-area: sidebar;\n  margin: 0 1rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  min-height: 500px;\n  width: 100%;\n}\n\n.projectsHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n.projectDiv {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(161, 160, 160, 0.137);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.projectDiv:hover {\n  cursor: pointer;\n  background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n  grid-area: main;\n  margin: 0 1rem;\n  border-radius: 5%;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  min-height: 500px;\n  width: 92%;\n}\n\n.projectFormDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  padding-top: 2rem;\n  align-items: center;\n}\n\n#projectInput {\n  display: block;\n  width: 60%;\n  border-radius: 0.5rem;\n  height: 3rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n  border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn, #editSubmitButton {\n  display: block;\n  background-color: rgb(5, 15, 156);\n  color: rgb(255, 255, 255);\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover,\n#toDoSubBtn:hover,\n#editSubmitButton {\n  cursor: pointer;\n  background-color: rgb(23, 36, 218);\n}\n\n.projectContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 1rem;\n}\n\n.toDoFormDiv {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr fr 1fr;\n  grid-template-areas:\n    'title title'\n    'date priority'\n    'notes notes'\n    'button button';\n  justify-items: center;\n  padding: 1.5rem;\n}\n\n#toDoNameInput {\n  grid-area: title;\n  display: block;\n  width: 90%;\n  border-radius: 0.5rem;\n  height: 2.2rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n  grid-area: date;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: right;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n  grid-area: priority;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: left;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n  grid-area: notes;\n  resize: none;\n  display: block;\n  width: 90%;\n  min-height: 80px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background-color: rgba(161, 160, 160, 0.137);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.toDoTitleDiv {\n  font-size: 2rem;\n}\n\n.done {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: linear-gradient(\n    70deg,\n    rgb(88, 88, 88) 8%,\n    rgb(70, 70, 70)  27%,\n    rgb(95, 95, 95)  48%,\n    rgb(97, 97, 97)  100%\n  );\n  color: rgb(172, 172, 172);\n  border: rgb(117, 117, 117);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.strike {\n  align-self: center;\n  justify-self: center;\n  text-decoration: line-through;\n}\n\n.deleteToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 0, 0) 8%,\n    rgb(252, 59, 0)  27%,\n    rgb(177, 0, 0)  48%,\n    rgb(233, 51, 51)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.doneToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(0, 175, 73) 8%,\n    rgb(0, 189, 101)  27%,\n    rgb(0, 255, 106)  48%,\n    rgb(30, 240, 100)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.doneToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.undoToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 132, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.undoToDo:hover {\n  cursor: pointer;\n  background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  margin: 0 1rem;\n  cursor: pointer;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 217, 0) 8%,\n    rgb(252, 185, 0)  27%,\n    rgb(255, 208, 0)  48%,\n    rgb(240, 140, 30)  100%\n  );\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.editToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.buttonsDiv {\n  display: flex;\n}\n\n.modalBlur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.719);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  transform: scale(0);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  transform: scale(0);\n  width: 60%;\n  height: 60%;\n  background-color: rgb(218, 218, 218);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n  cursor: pointer;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 15px;\n}\n\n.modalLabels {\n  font-weight: 900;\n}\n\n.addProjectButton {\n  grid-area: button;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  height: 150px;\n  width: max-content;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n  cursor: pointer;\n  background: rgb(23, 36, 218);\n}\n\n.clearProjectsButton {\n  grid-area: button;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  height: 150px;\n  width: max-content;\n  display: block;\n  background: rgb(203, 33, 33);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  margin: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.clearProjectsButton:hover {\n  cursor: pointer;\n  background: rgb(197, 49, 49);\n}\n\n.addSVG, .clearSVG {\n  min-height: 80%;\n}\n\n.newProjectHeader {\n  text-align: center;\n  margin: 1.5rem;\n}\n\n.illustration {\n  height: 200px;\n}\n\n.removeProject {\n  background: transparent;\n  position: absolute;\n}\n\n.removeProjectBtn {\n  position: absolute;\n  top: 7rem;\n  right: 7%;\n}\n\n.removeProjectBtn:hover {\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 450px) {\n  .illustration {\n    height: 100px;\n  }\n\n  .addProjectButton, .clearProjectsButton {\n    width: 80px;\n    height: 80px;\n  }\n\n  .addSVG, .clearSVG {\n    position: relative;\n    bottom: 5px;\n    right: 5px;\n    height: 60px;\n  }\n\n  .projectsHeader {\n    font-size: 1rem;\n  }\n\n  .toDoCard, .done{\n    font-size: 1.2rem;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .doneToDo, .editToDo, .deleteToDo {\n    transform: scale(0.7);\n    margin: 0.2rem;\n  }\n  \n  .projectForm {\n    font-size: 0.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\nbutton {\n  background: transparent;\n  border: none;\n\n}\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  background-color: rgb(212, 209, 209);\n}\n\n.container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 25% 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    'header header header'\n    'sidebar main main';\n}\n\n.headerDiv {\n  grid-area: header;\n  display: flex;\n  background: rgb(98, 66, 241);\n  background: linear-gradient(\n    70deg,\n    rgba(65, 33, 203, 1) 8%,\n    rgba(61, 32, 200, 1) 27%,\n    rgba(5, 15, 156, 1) 48%,\n    rgb(141, 71, 233) 100%\n  );\n  color: white;\n  width: 100%;\n  height: 5rem;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 0 6rem;\n}\n\nh1 {\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n  display: block;\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.sideBarDiv {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-area: sidebar;\n  margin: 0 1rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  min-height: 500px;\n  width: 100%;\n}\n\n.projectsHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n.projectDiv {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(161, 160, 160, 0.137);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.projectDiv:hover {\n  cursor: pointer;\n  background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n  grid-area: main;\n  margin: 0 1rem;\n  border-radius: 5%;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  min-height: 500px;\n  width: 92%;\n}\n\n.projectFormDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  padding-top: 2rem;\n  align-items: center;\n}\n\n#projectInput {\n  display: block;\n  width: 60%;\n  border-radius: 0.5rem;\n  height: 3rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n  border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn, #editSubmitButton {\n  display: block;\n  background-color: rgb(5, 15, 156);\n  color: rgb(255, 255, 255);\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover,\n#toDoSubBtn:hover,\n#editSubmitButton {\n  cursor: pointer;\n  background-color: rgb(23, 36, 218);\n}\n\n.projectContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 1rem;\n}\n\n.toDoFormDiv {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr fr 1fr;\n  grid-template-areas:\n    'title title'\n    'date priority'\n    'notes notes'\n    'button button';\n  justify-items: center;\n  padding: 1.5rem;\n}\n\n#toDoNameInput {\n  grid-area: title;\n  display: block;\n  width: 90%;\n  border-radius: 0.5rem;\n  height: 2.2rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n  grid-area: date;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: right;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n  grid-area: priority;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: left;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n  grid-area: notes;\n  resize: none;\n  display: block;\n  width: 90%;\n  min-height: 80px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background-color: rgba(161, 160, 160, 0.137);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.toDoTitleDiv {\n  font-size: 2rem;\n}\n\n.done {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: linear-gradient(\n    70deg,\n    rgb(88, 88, 88) 8%,\n    rgb(70, 70, 70)  27%,\n    rgb(95, 95, 95)  48%,\n    rgb(97, 97, 97)  100%\n  );\n  color: rgb(172, 172, 172);\n  border: rgb(117, 117, 117);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.strike {\n  align-self: center;\n  justify-self: center;\n  text-decoration: line-through;\n}\n\n.deleteToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 0, 0) 8%,\n    rgb(252, 59, 0)  27%,\n    rgb(177, 0, 0)  48%,\n    rgb(233, 51, 51)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.doneToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(0, 175, 73) 8%,\n    rgb(0, 189, 101)  27%,\n    rgb(0, 255, 106)  48%,\n    rgb(30, 240, 100)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.doneToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.undoToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 132, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.undoToDo:hover {\n  cursor: pointer;\n  background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  margin: 0 1rem;\n  cursor: pointer;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 217, 0) 8%,\n    rgb(252, 185, 0)  27%,\n    rgb(255, 208, 0)  48%,\n    rgb(240, 140, 30)  100%\n  );\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.editToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.buttonsDiv {\n  display: flex;\n}\n\n.modalBlur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.719);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  transform: scale(0);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  transform: scale(0);\n  width: 60%;\n  height: 60%;\n  background-color: rgb(218, 218, 218);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n  cursor: pointer;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 15px;\n}\n\n.modalLabels {\n  font-weight: 900;\n}\n\n.addProjectButton {\n  grid-area: button;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  height: 150px;\n  width: max-content;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n  cursor: pointer;\n  background: rgb(23, 36, 218);\n}\n\n.clearProjectsButton {\n  grid-area: button;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  height: 150px;\n  width: max-content;\n  display: block;\n  background: rgb(203, 33, 33);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  margin: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.clearProjectsButton:hover {\n  cursor: pointer;\n  background: rgb(197, 49, 49);\n}\n\n.addSVG, .clearSVG {\n  min-height: 80%;\n}\n\n.newProjectHeader {\n  text-align: center;\n  margin: 1.5rem;\n}\n\n.illustration {\n  height: 200px;\n}\n\n.removeProject {\n  background: transparent;\n  position: absolute;\n}\n\n.removeProjectBtn {\n  position: absolute;\n  top: 7rem;\n  right: 7%;\n}\n\n.removeProjectBtn:hover {\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 450px) {\n  .illustration {\n    height: 100px;\n  }\n\n  .addProjectButton, .clearProjectsButton {\n    width: 80px;\n    height: 80px;\n  }\n\n  .addSVG, .clearSVG {\n    position: relative;\n    bottom: 5px;\n    right: 5px;\n    height: 60px;\n  }\n\n  .projectsHeader {\n    font-size: 1rem;\n  }\n\n  .toDoCard, .done{\n    font-size: 1.2rem;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .doneToDo, .editToDo, .deleteToDo {\n    transform: scale(0.7);\n    margin: 0.2rem;\n  }\n  \n  .projectForm {\n    font-size: 0.5rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/add.svg":
/*!*********************!*\
  !*** ./src/add.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdef8b6d5a8f66decf79.svg";

/***/ }),

/***/ "./src/clear.svg":
/*!***********************!*\
  !*** ./src/clear.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f0e35864e5a5eac1023.svg";

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateDemoProject": () => (/* binding */ generateDemoProject),
/* harmony export */   "refreshProjects": () => (/* binding */ refreshProjects),
/* harmony export */   "generateProjectCard": () => (/* binding */ generateProjectCard),
/* harmony export */   "generateProjectForm": () => (/* binding */ generateProjectForm)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _illustration_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./illustration.svg */ "./src/illustration.svg");
/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deleteProject */ "./src/deleteProject.js");









const generateDemoProject = () => {
if (___WEBPACK_IMPORTED_MODULE_1__.projectsArr.length == 0){  
const demoProject = new _project__WEBPACK_IMPORTED_MODULE_4__.default('Demo Project')
___WEBPACK_IMPORTED_MODULE_1__.projectsArr.push(demoProject)
generateProjectCard(demoProject)
}
}

const refreshProjects = () => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projects.textContent = '';
  ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.forEach((project) => generateProjectCard(project));
};

const generateProjectCard = (project) => {
  if (project.name == ''){
    console.log("no dice")
  } else {
  const projectDiv = document.createElement('div');
  console.log('this is the index: ' + ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(project));
  const projectIndex = ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(project);
  projectDiv.classList.add('projectDiv');
  projectDiv.textContent = project.name;
  ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.forEach((obj) => projectDiv.setAttribute('id', projectIndex));
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projects.appendChild(projectDiv);

  document.getElementById(`${projectIndex}`).addEventListener('click', () => {
    (0,___WEBPACK_IMPORTED_MODULE_1__.setActiveProject)(___WEBPACK_IMPORTED_MODULE_1__.projectsArr[`${projectIndex}`]);
    console.log(
      'The active project is: ' +
        'ID: ' +
        projectIndex +
        ' Name: ' +
        ___WEBPACK_IMPORTED_MODULE_1__.activeProject.name
    );
    console.table(___WEBPACK_IMPORTED_MODULE_1__.activeProject.tasks);
    _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.mainContentContainer.textContent = '';
    _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.mainContentContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectContent)());
    (0,_createTodo__WEBPACK_IMPORTED_MODULE_2__.generateToDoForm)();
    (0,_createTodo__WEBPACK_IMPORTED_MODULE_2__.refreshToDos)();
    (0,_deleteProject__WEBPACK_IMPORTED_MODULE_6__.renderRemoveProjectBtn)()
  });
}
};

const projectFormInput = () => {
  const name = document.querySelector('#projectInput').value;
  return new _project__WEBPACK_IMPORTED_MODULE_4__.default(name)
};

const resetProjectForm = () => {
  const name = document.querySelector('#projectInput');
  name.value = '';
};

const submitProjectEvent = () => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectSubBtn.addEventListener('click', () => {
    ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.push(projectFormInput());
    generateProjectCard(projectFormInput());
    //domElements.addProjectButton.style.transform = 'scale(1)';
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveToStorage)();
    refreshProjects();
    resetProjectForm();
  });
};

const illustration = new Image()
  illustration.src = _illustration_svg__WEBPACK_IMPORTED_MODULE_5__
  illustration.classList.add('illustration')

const generateProjectForm = () => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.mainContentContainer.textContent = '';
  const newProjectHeader = document.createElement('h2')
  newProjectHeader.classList.add('newProjectHeader')
  newProjectHeader.textContent = "Start a New Project!"
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.mainContentContainer.appendChild(newProjectHeader)
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectFormDiv.classList.add('projectFormDiv');
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.mainContentContainer.appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectFormDiv);
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectInput.setAttribute('id', 'projectInput');
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectInput.setAttribute('type', 'text');
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectInput.setAttribute(
    'placeholder',
    'What is the name of your project?'
  );
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectInput.classList.add('projectForm');
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectInput.querySelector('.projectInput');
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectInput.required = true;
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectSubBtn.setAttribute('type', 'submit');
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectSubBtn.textContent = 'CREATE PROJECT';
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectSubBtn.classList.add('projectForm');
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectSubBtn.setAttribute('id', 'projectSubBtn');
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectFormDiv.appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectInput);
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectFormDiv.appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectSubBtn);
  
  _dom__WEBPACK_IMPORTED_MODULE_0__.domElements.projectFormDiv.appendChild(illustration)


  projectFormInput();
  submitProjectEvent();
  resetProjectForm();
};


/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "latestToDo": () => (/* binding */ latestToDo),
/* harmony export */   "activeToDo": () => (/* binding */ activeToDo),
/* harmony export */   "activeToDoID": () => (/* binding */ activeToDoID),
/* harmony export */   "refreshToDos": () => (/* binding */ refreshToDos),
/* harmony export */   "generateToDoCard": () => (/* binding */ generateToDoCard),
/* harmony export */   "generateToDoNameInput": () => (/* binding */ generateToDoNameInput),
/* harmony export */   "generateToDoDateInput": () => (/* binding */ generateToDoDateInput),
/* harmony export */   "generateToDoPriorityInput": () => (/* binding */ generateToDoPriorityInput),
/* harmony export */   "generateToDoNotesInput": () => (/* binding */ generateToDoNotesInput),
/* harmony export */   "generateToDoSubmitInput": () => (/* binding */ generateToDoSubmitInput),
/* harmony export */   "generateToDoForm": () => (/* binding */ generateToDoForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTodo */ "./src/editTodo.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete.svg */ "./src/delete.svg");
/* harmony import */ var _tick_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tick.svg */ "./src/tick.svg");
/* harmony import */ var _details_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details.svg */ "./src/details.svg");









let latestToDo = null;
let activeToDo = null;
let activeToDoID = null;

const setActiveToDo = (value) => {
  activeToDo = value;
};

const setLatestToDo = (value) => {
  latestToDo = value;
};

const setActiveToDoID = (value) => {
  activeToDoID = value;
};

const refreshToDos = () => {
  const toDoContainer = document.querySelector('.projectContentContainer');
  toDoContainer.textContent = '';
  (0,_dom__WEBPACK_IMPORTED_MODULE_4__.projectContent)()
  generateToDoForm();
  ___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks.forEach((task) => generateToDoCard(task));
};

const generateToDoCard = (todo) => {
  const toDoContainer = document.querySelector('.projectContentContainer');
  const toDoCard = document.createElement('div');

  toDoCard.classList.add('toDoCard');
  toDoContainer.appendChild(toDoCard);

  console.log('please be right below');
  console.log(`${___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks.indexOf(todo)}`);
  let cardIndex = ___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks.indexOf(todo);
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
  tick.src = _tick_svg__WEBPACK_IMPORTED_MODULE_6__
  doneToDo.appendChild(tick)
    buttonsDiv.appendChild(doneToDo);
    doneToDo.addEventListener('click', () => {
      let toDoIndex = buttonsDiv.parentNode.id.slice(4);
      toDoIndex = parseInt(toDoIndex);
      activeToDo = ___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks[toDoIndex];
      activeToDo.status = 'complete';
      console.log('to do:');
      console.table(___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks);
      console.log('done:');
      console.table(___WEBPACK_IMPORTED_MODULE_0__.activeProject.done);

      markAsDone();
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)();
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
  details.src = _details_svg__WEBPACK_IMPORTED_MODULE_7__
  editToDo.appendChild(details)
  editToDo.addEventListener('click', () => {
    setActiveToDoID(buttonsDiv.parentNode.id);
    let editMe = buttonsDiv.parentNode.id.slice(4);
    editMe = parseInt(editMe);
    setActiveToDo(___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks[editMe]);
    (0,_editTodo__WEBPACK_IMPORTED_MODULE_3__.generateToDoModal)();
  });
  buttonsDiv.appendChild(editToDo);

  const deleteToDo = document.createElement('button');
  deleteToDo.classList.add('deleteToDo');
  const trash = new Image()
  trash.src = _delete_svg__WEBPACK_IMPORTED_MODULE_5__
  deleteToDo.appendChild(trash)
  deleteToDo.addEventListener('click', () => {
    const deleteMe = buttonsDiv.parentNode.id.slice(4);
    setActiveToDo(___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks[deleteMe]);
    const indexOfActive = ___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks.indexOf(activeToDo);
    console.log('delete this: ' + indexOfActive);
    ___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks.splice(indexOfActive, 1);
    console.table(___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks);
    refreshToDos();
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)();
  });
  buttonsDiv.appendChild(deleteToDo);
};

const generateToDoNameInput = (id, parent) => {
  const toDoNameInput = document.createElement('input');
  toDoNameInput.setAttribute('id', id);
  toDoNameInput.setAttribute('type', 'text');
  toDoNameInput.setAttribute('placeholder', "'To-Do' title...");
  toDoNameInput.classList.add('toDoForm');
  toDoNameInput.required = true;
  parent.appendChild(toDoNameInput);
};

const generateToDoDateInput = (id, parent) => {
  const toDoDueDate = document.createElement('input');
  toDoDueDate.setAttribute('type', 'date');
  toDoDueDate.setAttribute('id', id);
  toDoDueDate.classList.add('toDoForm');
  parent.appendChild(toDoDueDate);
};

const generateToDoPriorityInput = (id, parent) => {
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

const generateToDoNotesInput = (id, parent) => {
  const toDoNotesInput = document.createElement('textarea');
  toDoNotesInput.setAttribute('id', id);
  toDoNotesInput.setAttribute('placeholder', 'Notes...');
  toDoNotesInput.classList.add('toDoForm');

  parent.appendChild(toDoNotesInput);
};

const generateToDoSubmitInput = (id, text, parent) => {
  const toDoSubBtn = document.createElement('button');
  toDoSubBtn.setAttribute('id', id);
  toDoSubBtn.setAttribute('type', 'submit');
  toDoSubBtn.textContent = text;
  toDoSubBtn.classList.add('toDoForm');

  parent.appendChild(toDoSubBtn);
};

const generateToDoForm = () => {
     const toDoContainer = document.querySelector('.projectContentContainer');
    const projectHeader = document.createElement('h2');
  projectHeader.classList.add('projectHeader');
  projectHeader.textContent = ___WEBPACK_IMPORTED_MODULE_0__.activeProject.name;
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
    return new _todo__WEBPACK_IMPORTED_MODULE_2__.default(name, date, priority, notes, status);
  };

  const toDoSubBtn = document.querySelector('#toDoSubBtn');
  toDoSubBtn.addEventListener('click', () => {
    ___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks.push(toDoFormInput());
    setLatestToDo(___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks.length - 1);
    setActiveToDo(latestToDo);
    console.log('latest ' + latestToDo);
    refreshToDos();
    setActiveToDo(null);
    console.log('this projects todos:');
    console.table(___WEBPACK_IMPORTED_MODULE_0__.activeProject.tasks);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)();
  });
};


/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5405a2bd72286b4c589b.svg";

/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateButton": () => (/* binding */ generateButton),
/* harmony export */   "postRemoveReset": () => (/* binding */ postRemoveReset),
/* harmony export */   "removeProjectEvent": () => (/* binding */ removeProjectEvent),
/* harmony export */   "renderRemoveProjectBtn": () => (/* binding */ renderRemoveProjectBtn)
/* harmony export */ });
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.svg */ "./src/remove.svg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");







const generateButton = () => {
    const removeButton = document.createElement('button')
    removeButton.classList.add = ('removeProject')
    const removeIcon = new Image()
    removeIcon.src = _remove_svg__WEBPACK_IMPORTED_MODULE_0__
    removeIcon.classList.add('removeProjectBtn')
    removeButton.appendChild(removeIcon)
    _dom__WEBPACK_IMPORTED_MODULE_4__.domElements.mainContentContainer.appendChild(removeButton)
    const activeProjectIndex = ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(___WEBPACK_IMPORTED_MODULE_1__.activeProject)
    removeButton.addEventListener('click', () => {
        ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.splice(activeProjectIndex, 1)
        postRemoveReset()
        ;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveToStorage)()
        _dom__WEBPACK_IMPORTED_MODULE_4__.domElements.mainContentContainer.appendChild((0,_createProject__WEBPACK_IMPORTED_MODULE_3__.generateProjectForm)());
    })
} 

const postRemoveReset = () => {
    const newActiveProject = ___WEBPACK_IMPORTED_MODULE_1__.projectsArr[0];
    (0,___WEBPACK_IMPORTED_MODULE_1__.setActiveProject)(newActiveProject)
    _dom__WEBPACK_IMPORTED_MODULE_4__.domElements.mainContentContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_4__.projectContent)());
    (0,_createProject__WEBPACK_IMPORTED_MODULE_3__.refreshProjects)();
}

const removeProjectEvent = () => {
    const removeButton = document.querySelector('.removeProject')
    const activeProjectIndex = ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.indexOf(___WEBPACK_IMPORTED_MODULE_1__.activeProject)
    removeButton.addEventListener('click', () => {
        ___WEBPACK_IMPORTED_MODULE_1__.projectsArr.splice(activeProjectIndex, 1)
        postRemoveReset()
    })
}



const renderRemoveProjectBtn = () => {
    generateButton()
    //removeProjectEvent()
}

/***/ }),

/***/ "./src/details.svg":
/*!*************************!*\
  !*** ./src/details.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0213982ca985980e6c0.svg";

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domElements": () => (/* binding */ domElements),
/* harmony export */   "projectContent": () => (/* binding */ projectContent),
/* harmony export */   "renderModalBlur": () => (/* binding */ renderModalBlur),
/* harmony export */   "renderModal": () => (/* binding */ renderModal)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.svg */ "./src/add.svg");
/* harmony import */ var _clear_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear.svg */ "./src/clear.svg");







// dom elements

const domElements = (() => {
  const container = document.createElement('div');
  const headerDiv = document.createElement('div');
  const logo = document.createElement('h1');
  const sideBarDiv = document.createElement('div');
  const projectsHeader = document.createElement('div');
  const projects = document.createElement('div');
  const addProjectButton = document.createElement('button');
  const clearProjectsButton = document.createElement('button')
  const mainContentContainer = document.createElement('div');
  const projectFormDiv = document.createElement('div');
  const projectInput = document.createElement('input');
  const projectSubBtn = document.createElement('button');
  const modalBlur = document.createElement('div');
  const modal = document.createElement('div');

  return {
    container,
    headerDiv,
    logo,
    sideBarDiv,
    projectsHeader,
    projects,
    addProjectButton,
    clearProjectsButton,
    mainContentContainer,
    projectFormDiv,
    projectInput,
    projectSubBtn,
    modal,
    modalBlur
  };
})();

// window container

const renderMasterContainer = () => {
  domElements.container.classList.add('container');
  document.body.appendChild(domElements.container);
};

// header

const renderHeader = () => {
  domElements.headerDiv.classList.add('headerDiv');
  domElements.container.appendChild(domElements.headerDiv);
};

//logo

const renderLogo = () => {
  domElements.logo.classList.add('logo');
  domElements.logo.textContent = 'Project TODOs';
  domElements.headerDiv.appendChild(domElements.logo);
};

//sidebar

//sidebar container


const renderSideBarContainer = () => {
  domElements.sideBarDiv.classList.add('sideBarDiv');
  domElements.container.appendChild(domElements.sideBarDiv);
};

//sidebar header

const renderSideBarHeader = () => {
  domElements.projectsHeader.classList.add('projectsHeader');
  domElements.sideBarDiv.appendChild(domElements.projectsHeader);
  domElements.projectsHeader.textContent = 'PROJECTS';
};

//sidebar project nav container

const renderProjectsContainer = () => {
  domElements.projects.classList.add('projectsDiv');
  domElements.sideBarDiv.appendChild(domElements.projects);
};

//sidebar add new project

const renderAddProjectBtn = () => {
  const add = new Image()
  add.src = _add_svg__WEBPACK_IMPORTED_MODULE_3__
  add.classList.add('addSVG')
  domElements.addProjectButton.appendChild(add)
  domElements.addProjectButton.classList.add('addProjectButton');
  domElements.sideBarDiv.appendChild(domElements.addProjectButton);
  domElements.addProjectButton.style.transform = 'scale(1)';
};

//sidebar clear projects
const renderClearProjectBtn = () => {
  const clear = new Image()
  clear.src = _clear_svg__WEBPACK_IMPORTED_MODULE_4__
  clear.classList.add('clearSVG')
  domElements.clearProjectsButton.appendChild(clear)
  domElements.clearProjectsButton.classList.add('clearProjectsButton');
  domElements.sideBarDiv.appendChild(domElements.clearProjectsButton);
  domElements.clearProjectsButton.style.transform = 'scale(1)';
};

//sidebar rendering

const renderSideBar = () => {
  renderSideBarContainer();
  renderSideBarHeader();
  renderProjectsContainer();
  renderAddProjectBtn();
  renderClearProjectBtn()
  ;(0,_createProject__WEBPACK_IMPORTED_MODULE_1__.refreshProjects)();
  
  domElements.addProjectButton.addEventListener('click', () => {
    (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.generateProjectForm)();
  });

  domElements.clearProjectsButton.addEventListener('click', () => {
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.clearStorage)()
    ;(0,_createProject__WEBPACK_IMPORTED_MODULE_1__.refreshProjects)()
  })
  
}

//main content container

const renderContentContainer = () => {
  domElements.mainContentContainer.classList.add('mainContentContainer');
  domElements.container.appendChild(domElements.mainContentContainer);
}





const projectContent = () => {
  const projectContentContainer = document.createElement('div');
  projectContentContainer.classList.add('projectContentContainer');
  const projectHeader = document.createElement('h2');
  projectHeader.classList.add('projectHeader');
  projectHeader.textContent = ___WEBPACK_IMPORTED_MODULE_0__.activeProject.name;
  projectContentContainer.appendChild(projectHeader);

  return projectContentContainer;
};








//modal functions

const renderModalBlur = () => {
domElements.modalBlur.classList.add('modalBlur');
document.body.appendChild(domElements.modalBlur);

}

const renderModal = () => {
  renderModalBlur()
  domElements.modal.classList.add('modal');
  domElements.modalBlur.appendChild(domElements.modal);
}




//full ui render

const renderUI = (() => {
  //clearStorage()
  ;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadFromStorage)()
  renderMasterContainer();
  renderHeader();
  renderLogo();
  renderSideBar()
  renderContentContainer()
  ;(0,_createProject__WEBPACK_IMPORTED_MODULE_1__.generateDemoProject)()
  ;(0,_createProject__WEBPACK_IMPORTED_MODULE_1__.generateProjectForm)()
  renderModal()
  //refreshProjects()
})();

/***/ }),

/***/ "./src/edit.svg":
/*!**********************!*\
  !*** ./src/edit.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2d2d5b642df2417668e.svg";

/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateToDoModal": () => (/* binding */ generateToDoModal)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.svg */ "./src/edit.svg");





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

const generateToDoModal = () => {
  const modalBlur = document.querySelector('.modalBlur');
  const modal = document.querySelector('.modal');
  modalBlur.style.transform = 'scale(1)';
  modal.style.transform = 'scale(1)';

  const toDoName = document.createElement('h2');
  toDoName.classList.add('toDoNameModal');
  console.log(_createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo);
  toDoName.textContent = `${_createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.name}`;
  modal.appendChild(toDoName);

  const toDoDueDate = document.createElement('div');
  toDoDueDate.classList.add('toDoDueDateModal');
  toDoDueDate.innerHTML = `<span class ="modalLabels">Due Date: </span>${_createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.date}`;
  modal.appendChild(toDoDueDate);

  const toDoPriority = document.createElement('div');
  toDoPriority.classList.add('toDoPriorityModal');
  toDoPriority.innerHTML = `<span class ="modalLabels">Priority: </span>${_createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.priority}`;
  modal.appendChild(toDoPriority);

  const toDoNotes = document.createElement('div');
  toDoNotes.classList.add('toDoNotesModal');
  toDoNotes.innerHTML = `<span class ="modalLabels">Notes: </span>${_createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.notes}`;
  modal.appendChild(toDoNotes);

  genererateCloseButton();

  const editToDo = document.createElement('button');
  editToDo.classList.add('editToDo');
  const edit = new Image()
  edit.src = _edit_svg__WEBPACK_IMPORTED_MODULE_3__
  editToDo.appendChild(edit)
  modal.appendChild(editToDo);
  editToDo.addEventListener('click', () => {
    console.log('hello');
    modal.textContent = '';
    (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__.generateToDoNameInput)('editNameInput', modal);
    (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__.generateToDoDateInput)('editDateInput', modal);
    (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__.generateToDoPriorityInput)('editPriorityInput', modal);
    (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__.generateToDoNotesInput)('editNotesInput', modal);
    (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__.generateToDoSubmitInput)('editSubmitButton', 'SUBMIT CHANGES', modal);
    genererateCloseButton();
    const editName = document.getElementById('editNameInput');
    editName.value = _createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.name;
    const editDate = document.getElementById('editDateInput');
    editDate.value = _createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.date;
    const editPriority = document.getElementById('editPriorityInput');
    editPriority.value = _createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.priority;
    const editNotes = document.getElementById('editNotesInput');
    editNotes.value = _createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.notes;
    document
      .getElementById('editSubmitButton')
      .addEventListener('click', () => {
        _createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.name = editName.value;
        _createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.date = editDate.value;
        _createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.priority = editPriority.value;
        _createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo.notes = editNotes.value;
        modal.textContent = '';
        modalBlur.style.transform = 'scale(0)';
        modal.style.transform = 'scale(0)';

        let cardIndex = ___WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks.indexOf(_createTodo__WEBPACK_IMPORTED_MODULE_1__.activeToDo);
        const titleClass = '.titleDiv' + cardIndex;

        const titleDiv = document.querySelector(titleClass);

        titleDiv.textContent = editName.value;

        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)();
      });
  });
};


/***/ }),

/***/ "./src/illustration.svg":
/*!******************************!*\
  !*** ./src/illustration.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7f99c722ba72aff46a5.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "projectsArr": () => (/* binding */ projectsArr),
/* harmony export */   "setProjectsArr": () => (/* binding */ setProjectsArr),
/* harmony export */   "setActiveProject": () => (/* binding */ setActiveProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





let activeProject = null;

let projectsArr = [];

const setProjectsArr = (value) => {
  projectsArr = value;
};

const setActiveProject = (project) => {
  activeProject = project;
};

//loadFromStorage();

//generateUI();
//generateProjectForm();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(name) {
    this.tasks = [];
    this.done = [];
    this.name = name;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/remove.svg":
/*!************************!*\
  !*** ./src/remove.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9900c8333aa594ad2592.svg";

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveToStorage": () => (/* binding */ saveToStorage),
/* harmony export */   "loadFromStorage": () => (/* binding */ loadFromStorage),
/* harmony export */   "clearStorage": () => (/* binding */ clearStorage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


//LOCAL STORAGE

function saveToStorage() {
  localStorage.setItem('projectsArr', JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.projectsArr));
}

function loadFromStorage() {
  const loadProjects = JSON.parse(localStorage.getItem('projectsArr'));

  (0,___WEBPACK_IMPORTED_MODULE_0__.setProjectsArr)(loadProjects);
  if (___WEBPACK_IMPORTED_MODULE_0__.projectsArr === null) (0,___WEBPACK_IMPORTED_MODULE_0__.setProjectsArr)([]);
  console.table(___WEBPACK_IMPORTED_MODULE_0__.projectsArr);
}

function clearStorage() {
  localStorage.clear();
  (0,___WEBPACK_IMPORTED_MODULE_0__.setProjectsArr)([]);
 // resetDisplay();
}




/***/ }),

/***/ "./src/tick.svg":
/*!**********************!*\
  !*** ./src/tick.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98967384e9f640ce4bb2.svg";

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ToDo {
  constructor(name, date, priority, notes, status) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
    this.status = status;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMElBQTBJO0FBQzFJLG1JQUFtSTtBQUNuSTtBQUNBLDZDQUE2QyxjQUFjLDJCQUEyQixHQUFHLFVBQVUsNEJBQTRCLGlCQUFpQixLQUFLLFFBQVEsNENBQTRDLG9CQUFvQixjQUFjLHlDQUF5QyxHQUFHLGdCQUFnQixrQkFBa0IsY0FBYyx1Q0FBdUMsa0NBQWtDLDhFQUE4RSxHQUFHLGdCQUFnQixzQkFBc0Isa0JBQWtCLGlDQUFpQyx5S0FBeUssaUJBQWlCLGdCQUFnQixpQkFBaUIsb0JBQW9CLDRCQUE0Qix3QkFBd0IsOEJBQThCLEdBQUcsUUFBUSxpQkFBaUIsNENBQTRDLDJEQUEyRCxHQUFHLG9CQUFvQixtQkFBbUIsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLDJCQUEyQix1QkFBdUIsbUJBQW1CLHdCQUF3QixpREFBaUQsMERBQTBELHNCQUFzQixnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLHNCQUFzQixHQUFHLGlCQUFpQix1QkFBdUIsa0JB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QVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFNBQVMsT0FBTyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sMkhBQTJILDZGQUE2RixPQUFPLGNBQWMsMkJBQTJCLEdBQUcsVUFBVSw0QkFBNEIsaUJBQWlCLEtBQUssUUFBUSw0Q0FBNEMsb0JBQW9CLGNBQWMseUNBQXlDLEdBQUcsZ0JBQWdCLGtCQUFrQixjQUFjLHVDQUF1QyxrQ0FBa0MsOEVBQThFLEdBQUcsZ0JBQWdCLHNCQUFzQixrQkFBa0IsaUNBQWlDLHlLQUF5SyxpQkFBaUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsNEJBQTRCLHdCQUF3Qiw4QkFBOEIsR0FBRyxRQUFRLGlCQUFpQiw0Q0FBNEMsMkRBQTJELEdBQUcsb0JBQW9CLG1CQUFtQix1QkFBdUIsb0JBQW9CLEdBQUcsaUJBQWlCLGtCQUFrQix3QkFBd0IsMkJBQTJCLHVCQUF1QixtQkFBbUIsd0JBQXdCLGlEQUFpRCwwREFBMEQsc0JBQXNCLGdCQUFnQixHQUFHLHFCQUFxQixrQkFBa0Isd0JBQXdCLDRCQUE0QixrQkFBa0Isc0JBQXNCLEdBQUcsaUJBQWlCLHVCQUF1QixrQkFBa0Isd0JBQXdCLDRCQUE0QixpREFBaUQsb0JBQW9CLDBCQUEwQiwwREFBMEQsZUFBZSxHQUFHLHVCQUF1QixvQkFBb0IsaURBQWlELEdBQUcsMkJBQTJCLG9CQUFvQixtQkFBbUIsc0JBQXNCLGlEQUFpRCwwREFBMEQsc0JBQXNCLGVBQWUsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQixjQUFjLGlCQUFpQixzQkFBc0Isd0JBQXdCLEdBQUcsbUJBQW1CLG1CQUFtQixlQUFlLDBCQUEwQixpQkFBaUIsdUJBQXVCLGlCQUFpQiwwREFBMEQsR0FBRyx5QkFBeUIsdUNBQXVDLEdBQUcsdUNBQXVDLG1CQUFtQixzQ0FBc0MsOEJBQThCLGtCQUFrQixpQkFBaUIsMEJBQTBCLDBEQUEwRCxHQUFHLGtFQUFrRSxvQkFBb0IsdUNBQXVDLEdBQUcsOEJBQThCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLG9CQUFvQixHQUFHLGtCQUFrQixnQkFBZ0Isa0JBQWtCLGNBQWMsbUNBQW1DLHVDQUF1Qyx5R0FBeUcsMEJBQTBCLG9CQUFvQixHQUFHLG9CQUFvQixxQkFBcUIsbUJBQW1CLGVBQWUsMEJBQTBCLG1CQUFtQix1QkFBdUIsaUJBQWlCLDBEQUEwRCxHQUFHLHVCQUF1QixvQkFBb0IsbUJBQW1CLGVBQWUsMEJBQTBCLGlCQUFpQixzQkFBc0IsaUJBQWlCLDBEQUEwRCxHQUFHLHdCQUF3Qix3QkFBd0IsbUJBQW1CLGVBQWUsMEJBQTBCLGlCQUFpQixxQkFBcUIsaUJBQWlCLDBEQUEwRCxHQUFHLHFCQUFxQixxQkFBcUIsaUJBQWlCLG1CQUFtQixlQUFlLHFCQUFxQiwyQkFBMkIsb0JBQW9CLDBCQUEwQixtQkFBbUIsdUJBQXVCLGlCQUFpQiwwREFBMEQsR0FBRyxpQkFBaUIsc0JBQXNCLGVBQWUsbUJBQW1CLGlDQUFpQywwQkFBMEIsa0JBQWtCLGlCQUFpQiwwQkFBMEIsMERBQTBELEdBQUcsZUFBZSxrQkFBa0IsbUNBQW1DLHlCQUF5Qix3QkFBd0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsaURBQWlELDBCQUEwQiwwREFBMEQsZUFBZSxHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQixtQ0FBbUMseUJBQXlCLHdCQUF3Qix1QkFBdUIsa0JBQWtCLG1CQUFtQiw0SkFBNEosOEJBQThCLCtCQUErQiwwQkFBMEIsMERBQTBELGVBQWUsR0FBRyxhQUFhLHVCQUF1Qix5QkFBeUIsa0NBQWtDLEdBQUcsaUJBQWlCLGtCQUFrQix3QkFBd0IsMkpBQTJKLGlCQUFpQixpQkFBaUIsd0JBQXdCLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsMEJBQTBCLDBEQUEwRCxHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QixnS0FBZ0ssaUJBQWlCLGlCQUFpQix3QkFBd0Isb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQiwwQkFBMEIsMERBQTBELEdBQUcsZUFBZSxtQkFBbUIsb0JBQW9CLHdDQUF3Qyx3QkFBd0IsaUJBQWlCLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLHdDQUF3QyxHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QiwwQkFBMEIsNEJBQTRCLG1CQUFtQixvQkFBb0IsaUtBQWlLLHdCQUF3QixpQkFBaUIsd0JBQXdCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0IsMEJBQTBCLDBEQUEwRCxHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsaURBQWlELGdCQUFnQixrQkFBa0IsaUJBQWlCLHdCQUF3Qix1QkFBdUIsV0FBVyxZQUFZLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLGNBQWMsa0JBQWtCLHdCQUF3QixlQUFlLGdCQUFnQix5Q0FBeUMsMEJBQTBCLDBEQUEwRCxHQUFHLGlCQUFpQixvQkFBb0IsdUJBQXVCLGVBQWUsaUJBQWlCLDBCQUEwQixpQkFBaUIsaUJBQWlCLGdCQUFnQixpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLHFCQUFxQixHQUFHLHVCQUF1QixzQkFBc0Isa0JBQWtCLHdCQUF3QiwwQkFBMEIsa0JBQWtCLHVCQUF1QixtQkFBbUIsaUNBQWlDLDBCQUEwQix1QkFBdUIsa0JBQWtCLGlCQUFpQiwwQkFBMEIsMERBQTBELEdBQUcsNkJBQTZCLG9CQUFvQixpQ0FBaUMsR0FBRywwQkFBMEIsc0JBQXNCLGtCQUFrQix3QkFBd0IsMEJBQTBCLGtCQUFrQix1QkFBdUIsbUJBQW1CLGlDQUFpQywwQkFBMEIsdUJBQXVCLG1CQUFtQixrQkFBa0IsaUJBQWlCLDBCQUEwQiwwREFBMEQsR0FBRyxnQ0FBZ0Msb0JBQW9CLGlDQUFpQyxHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyx1QkFBdUIsdUJBQXVCLG1CQUFtQixHQUFHLG1CQUFtQixrQkFBa0IsR0FBRyxvQkFBb0IsNEJBQTRCLHVCQUF1QixHQUFHLHVCQUF1Qix1QkFBdUIsY0FBYyxjQUFjLEdBQUcsNkJBQTZCLG9CQUFvQixHQUFHLCtDQUErQyxtQkFBbUIsb0JBQW9CLEtBQUssK0NBQStDLGtCQUFrQixtQkFBbUIsS0FBSywwQkFBMEIseUJBQXlCLGtCQUFrQixpQkFBaUIsbUJBQW1CLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLHVCQUF1Qix3QkFBd0IsNkJBQTZCLHNCQUFzQiw4QkFBOEIsS0FBSyx5Q0FBeUMsNEJBQTRCLHFCQUFxQixLQUFLLHNCQUFzQix3QkFBd0IsS0FBSyxHQUFHLG1CQUFtQjtBQUNuenZCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFbmYsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBc0Y7QUFDdEYsTUFBd0c7QUFDeEcsTUFBbUc7Ozs7QUFJbkc7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkZBQVM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQ2pEaEU7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7OztBQzFCYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NvRDtBQUNhO0FBQ0g7QUFDcEI7QUFDVjtBQUNhO0FBQ1k7OztBQUdsRDtBQUNQLElBQUksaURBQWtCLE87QUFDdEIsd0JBQXdCLDZDQUFPO0FBQy9CLCtDQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRU87QUFDUCxFQUFFLGtFQUFnQztBQUNsQyxFQUFFLGtEQUFtQjtBQUNyQjs7QUFFTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0Msa0RBQW1CO0FBQ3pELHVCQUF1QixrREFBbUI7QUFDMUM7QUFDQTtBQUNBLEVBQUUsa0RBQW1CO0FBQ3JCLEVBQUUsa0VBQWdDOztBQUVsQyw2QkFBNkIsYUFBYTtBQUMxQyxJQUFJLG1EQUFnQixDQUFDLDBDQUFXLElBQUksYUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBa0I7QUFDMUI7QUFDQSxrQkFBa0Isa0RBQW1CO0FBQ3JDLElBQUksOEVBQTRDO0FBQ2hELElBQUksOEVBQTRDLENBQUMsb0RBQWM7QUFDL0QsSUFBSSw2REFBZ0I7QUFDcEIsSUFBSSx5REFBWTtBQUNoQixJQUFJLHNFQUFzQjtBQUMxQixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSw2Q0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNEVBQTBDO0FBQzVDLElBQUksK0NBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxJQUFJLHVEQUFhO0FBQ2pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxxQkFBcUIsOENBQVk7QUFDakM7O0FBRU87QUFDUCxFQUFFLDhFQUE0QztBQUM5QztBQUNBO0FBQ0E7QUFDQSxFQUFFLDhFQUE0QztBQUM5QyxFQUFFLDBFQUF3QztBQUMxQyxFQUFFLDhFQUE0QyxDQUFDLDREQUEwQjtBQUN6RSxFQUFFLHVFQUFxQztBQUN2QyxFQUFFLHVFQUFxQztBQUN2QyxFQUFFLHVFQUFxQztBQUN2QztBQUNBO0FBQ0E7QUFDQSxFQUFFLHdFQUFzQztBQUN4QyxFQUFFLHdFQUFzQztBQUN4QyxFQUFFLG1FQUFpQztBQUNuQyxFQUFFLHdFQUFzQztBQUN4QyxFQUFFLHVFQUFxQztBQUN2QyxFQUFFLHlFQUF1QztBQUN6QyxFQUFFLHdFQUFzQztBQUN4QyxFQUFFLHdFQUFzQyxDQUFDLDBEQUF3QjtBQUNqRSxFQUFFLHdFQUFzQyxDQUFDLDJEQUF5Qjs7QUFFbEUsRUFBRSx3RUFBc0M7OztBQUd4QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdrQztBQUNRO0FBQ2hCO0FBQ3FCO0FBQ1I7QUFDUDtBQUNIO0FBQ007O0FBRTVCO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxFQUFFLG9EQUFjO0FBQ2hCO0FBQ0EsRUFBRSwwREFBMkI7QUFDN0I7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMERBQTJCLE9BQU87QUFDbkQsa0JBQWtCLDBEQUEyQjtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQW1CO0FBQ3RDO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQW1CO0FBQ3ZDO0FBQ0Esb0JBQW9CLGlEQUFrQjs7QUFFdEM7QUFDQSxNQUFNLHVEQUFhO0FBQ25CLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVc7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5Q0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFtQjtBQUNyQyxJQUFJLDREQUFpQjtBQUNyQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0RBQW1CO0FBQ3JDLDBCQUEwQiwwREFBMkI7QUFDckQ7QUFDQSxJQUFJLHlEQUEwQjtBQUM5QixrQkFBa0Isa0RBQW1CO0FBQ3JDO0FBQ0EsSUFBSSx1REFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlEQUFrQjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBSTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1REFBd0I7QUFDNUIsa0JBQWtCLHlEQUEwQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFtQjtBQUNyQyxJQUFJLHVEQUFhO0FBQ2pCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hPaUM7QUFDK0M7QUFDdkM7QUFDNkI7QUFDbkI7QUFDVTs7QUFFdEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0NBQU07QUFDM0I7QUFDQTtBQUNBLElBQUksOEVBQTRDO0FBQ2hELCtCQUErQixrREFBbUIsQ0FBQyw0Q0FBYTtBQUNoRTtBQUNBLFFBQVEsaURBQWtCO0FBQzFCO0FBQ0EsUUFBUSx3REFBYTtBQUNyQixRQUFRLDhFQUE0QyxDQUFDLG1FQUFtQjtBQUN4RSxLQUFLO0FBQ0wsQzs7QUFFTztBQUNQLDZCQUE2Qiw2Q0FBYztBQUMzQyxJQUFJLG1EQUFnQjtBQUNwQixJQUFJLDhFQUE0QyxDQUFDLG9EQUFjO0FBQy9ELElBQUksK0RBQWU7QUFDbkI7O0FBRU87QUFDUDtBQUNBLCtCQUErQixrREFBbUIsQ0FBQyw0Q0FBYTtBQUNoRTtBQUNBLFFBQVEsaURBQWtCO0FBQzFCO0FBQ0EsS0FBSztBQUNMOzs7O0FBSU87QUFDUDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2tDO0FBQzBEO0FBQ25CO0FBQzlDO0FBQ0k7OztBQUcvQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVkscUNBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBZTs7QUFFakI7QUFDQSxJQUFJLG1FQUFtQjtBQUN2QixHQUFHOztBQUVIO0FBQ0EsSUFBSSxzREFBWTtBQUNoQixJQUFJLGdFQUFlO0FBQ25CLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaURBQWtCO0FBQ2hEOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQVNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDBEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9FQUFtQjtBQUNyQixFQUFFLG9FQUFtQjtBQUNyQjtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE15QztBQVFwQjtBQUNZO0FBQ0w7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxtREFBVTtBQUN4Qiw0QkFBNEIsd0RBQWUsQ0FBQztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLHdEQUFlLENBQUM7QUFDekY7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRSw0REFBbUIsQ0FBQztBQUM5Rjs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FLHlEQUFnQixDQUFDO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0NBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQXFCO0FBQ3pCLElBQUksa0VBQXFCO0FBQ3pCLElBQUksc0VBQXlCO0FBQzdCLElBQUksbUVBQXNCO0FBQzFCLElBQUksb0VBQXVCO0FBQzNCO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQWU7QUFDcEM7QUFDQSxxQkFBcUIsd0RBQWU7QUFDcEM7QUFDQSx5QkFBeUIsNERBQW1CO0FBQzVDO0FBQ0Esc0JBQXNCLHlEQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCLFFBQVEsd0RBQWU7QUFDdkIsUUFBUSw0REFBbUI7QUFDM0IsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QiwwREFBMkIsQ0FBQyxtREFBVTtBQUM5RDs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRLHVEQUFhO0FBQ3JCLE9BQU87QUFDUCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdxQjtBQUNXO0FBQ047QUFDK0M7O0FBRWxFOztBQUVBOztBQUVBO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J5Qjs7QUFFaEQ7O0FBRUE7QUFDQSxxREFBcUQsMENBQVc7QUFDaEU7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLGlEQUFjO0FBQ2hCLE1BQU0sMENBQVcsV0FBVyxpREFBYztBQUMxQyxnQkFBZ0IsMENBQVc7QUFDM0I7O0FBRUE7QUFDQTtBQUNBLEVBQUUsaURBQWM7QUFDaEI7QUFDQTs7QUFFd0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUNWcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7VUNmQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJkb20ubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICdzaWRlYmFyIG1haW4gbWFpbic7XFxufVxcblxcbi5oZWFkZXJEaXYge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogcmdiKDk4LCA2NiwgMjQxKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYmEoNjUsIDMzLCAyMDMsIDEpIDglLFxcbiAgICByZ2JhKDYxLCAzMiwgMjAwLCAxKSAyNyUsXFxuICAgIHJnYmEoNSwgMTUsIDE1NiwgMSkgNDglLFxcbiAgICByZ2IoMTQxLCA3MSwgMjMzKSAxMDAlXFxuICApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA2cmVtO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0SGVhZGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4uc2lkZUJhckRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3REaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjEzNyk7XFxufVxcblxcbi5tYWluQ29udGVudENvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDkyJTtcXG59XFxuXFxuLnByb2plY3RGb3JtRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdElucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdElucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogcmdiKDIzLCAzNiwgMjE4KSBzb2xpZCAxcHg7XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuLCAjZWRpdFN1Ym1pdEJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAxNSwgMTU2KTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuOmhvdmVyLFxcbiN0b0RvU3ViQnRuOmhvdmVyLFxcbiNlZGl0U3VibWl0QnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMzYsIDIxOCk7XFxufVxcblxcbi5wcm9qZWN0Q29udGVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRvRG9Gb3JtRGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciBmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAndGl0bGUgdGl0bGUnXFxuICAgICdkYXRlIHByaW9yaXR5J1xcbiAgICAnbm90ZXMgbm90ZXMnXFxuICAgICdidXR0b24gYnV0dG9uJztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuI3RvRG9OYW1lSW5wdXQge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvRHVlRGF0ZUlucHV0IHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvUHJpb3JpdHlJbnB1dCB7XFxuICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb05vdGVzSW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBub3RlcztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9TdWJCdG4ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDMzLCAyMDMpO1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4udG9Eb0NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjAsIDE2MCwgMC4xMzcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udG9Eb1RpdGxlRGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRvbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYig4OCwgODgsIDg4KSA4JSxcXG4gICAgcmdiKDcwLCA3MCwgNzApICAyNyUsXFxuICAgIHJnYig5NSwgOTUsIDk1KSAgNDglLFxcbiAgICByZ2IoOTcsIDk3LCA5NykgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogcmdiKDE3MiwgMTcyLCAxNzIpO1xcbiAgYm9yZGVyOiByZ2IoMTE3LCAxMTcsIDExNyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRlbGV0ZVRvRG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoMjU1LCAwLCAwKSA4JSxcXG4gICAgcmdiKDI1MiwgNTksIDApICAyNyUsXFxuICAgIHJnYigxNzcsIDAsIDApICA0OCUsXFxuICAgIHJnYigyMzMsIDUxLCA1MSkgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG59XFxuXFxuLmRvbmVUb0RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiKDAsIDE3NSwgNzMpIDglLFxcbiAgICByZ2IoMCwgMTg5LCAxMDEpICAyNyUsXFxuICAgIHJnYigwLCAyNTUsIDEwNikgIDQ4JSxcXG4gICAgcmdiKDMwLCAyNDAsIDEwMCkgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZG9uZVRvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxufVxcblxcbi51bmRvVG9EbyB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDEzMiwgMTApO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi51bmRvVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNTMsIDI4KTtcXG59XFxuXFxuLmVkaXRUb0RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYigyNTUsIDIxNywgMCkgOCUsXFxuICAgIHJnYigyNTIsIDE4NSwgMCkgIDI3JSxcXG4gICAgcmdiKDI1NSwgMjA4LCAwKSAgNDglLFxcbiAgICByZ2IoMjQwLCAxNDAsIDMwKSAgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZWRpdFRvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxufVxcblxcbi5idXR0b25zRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbEJsdXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MTkpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4zcmVtIDAuM3JlbSAwLjNyZW07XFxufVxcblxcbi5jbG9zZU1vZGFsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEwcHg7XFxuICByaWdodDogLTEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbExhYmVscyB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCAzMywgMjAzKTtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDIzLCAzNiwgMjE4KTtcXG59XFxuXFxuLmNsZWFyUHJvamVjdHNCdXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQ6IHJnYigyMDMsIDMzLCAzMyk7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBtYXJnaW46IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLmNsZWFyUHJvamVjdHNCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDE5NywgNDksIDQ5KTtcXG59XFxuXFxuLmFkZFNWRywgLmNsZWFyU1ZHIHtcXG4gIG1pbi1oZWlnaHQ6IDgwJTtcXG59XFxuXFxuLm5ld1Byb2plY3RIZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjVyZW07XFxufVxcblxcbi5pbGx1c3RyYXRpb24ge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLnJlbW92ZVByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5yZW1vdmVQcm9qZWN0QnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3JlbTtcXG4gIHJpZ2h0OiA3JTtcXG59XFxuXFxuLnJlbW92ZVByb2plY3RCdG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICAuaWxsdXN0cmF0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC5hZGRQcm9qZWN0QnV0dG9uLCAuY2xlYXJQcm9qZWN0c0J1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICB9XFxuXFxuICAuYWRkU1ZHLCAuY2xlYXJTVkcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICByaWdodDogNXB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdHNIZWFkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAudG9Eb0NhcmQsIC5kb25le1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kb25lVG9EbywgLmVkaXRUb0RvLCAuZGVsZXRlVG9EbyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gICAgbWFyZ2luOiAwLjJyZW07XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0Rm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsU0FBUztFQUNULG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3Qjs7dUJBRXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUI7Ozs7OztHQU1DO0VBQ0QsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixXQUFX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SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnc2lkZWJhciBtYWluIG1haW4nO1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6IHJnYig5OCwgNjYsIDI0MSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2JhKDY1LCAzMywgMjAzLCAxKSA4JSxcXG4gICAgcmdiYSg2MSwgMzIsIDIwMCwgMSkgMjclLFxcbiAgICByZ2JhKDUsIDE1LCAxNTYsIDEpIDQ4JSxcXG4gICAgcmdiKDE0MSwgNzEsIDIzMykgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnNpZGVCYXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0RGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDEsIDEwMSwgMC4xMzcpO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnRDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA5MiU7XFxufVxcblxcbi5wcm9qZWN0Rm9ybURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA2MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RJbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IHJnYigyMywgMzYsIDIxOCkgc29saWQgMXB4O1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0biwgI2VkaXRTdWJtaXRCdXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTUsIDE1Nik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0bjpob3ZlcixcXG4jdG9Eb1N1YkJ0bjpob3ZlcixcXG4jZWRpdFN1Ym1pdEJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDM2LCAyMTgpO1xcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3RpdGxlIHRpdGxlJ1xcbiAgICAnZGF0ZSBwcmlvcml0eSdcXG4gICAgJ25vdGVzIG5vdGVzJ1xcbiAgICAnYnV0dG9uIGJ1dHRvbic7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbiN0b0RvTmFtZUlucHV0IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb0R1ZURhdGVJbnB1dCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Ob3Rlc0lucHV0IHtcXG4gIGdyaWQtYXJlYTogbm90ZXM7XFxuICByZXNpemU6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvU3ViQnRuIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCAzMywgMjAzKTtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnRvRG9DYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnRvRG9UaXRsZURpdiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kb25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoODgsIDg4LCA4OCkgOCUsXFxuICAgIHJnYig3MCwgNzAsIDcwKSAgMjclLFxcbiAgICByZ2IoOTUsIDk1LCA5NSkgIDQ4JSxcXG4gICAgcmdiKDk3LCA5NywgOTcpICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcXG4gIGJvcmRlcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kZWxldGVUb0RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiKDI1NSwgMCwgMCkgOCUsXFxuICAgIHJnYigyNTIsIDU5LCAwKSAgMjclLFxcbiAgICByZ2IoMTc3LCAwLCAwKSAgNDglLFxcbiAgICByZ2IoMjMzLCA1MSwgNTEpICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxufVxcblxcbi5kb25lVG9EbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYigwLCAxNzUsIDczKSA4JSxcXG4gICAgcmdiKDAsIDE4OSwgMTAxKSAgMjclLFxcbiAgICByZ2IoMCwgMjU1LCAxMDYpICA0OCUsXFxuICAgIHJnYigzMCwgMjQwLCAxMDApICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRvbmVUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbn1cXG5cXG4udW5kb1RvRG8ge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMzIsIDEwKTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4udW5kb1RvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTUzLCAyOCk7XFxufVxcblxcbi5lZGl0VG9EbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoMjU1LCAyMTcsIDApIDglLFxcbiAgICByZ2IoMjUyLCAxODUsIDApICAyNyUsXFxuICAgIHJnYigyNTUsIDIwOCwgMCkgIDQ4JSxcXG4gICAgcmdiKDI0MCwgMTQwLCAzMCkgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmVkaXRUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbn1cXG5cXG4uYnV0dG9uc0RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWxCbHVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbn1cXG5cXG4uY2xvc2VNb2RhbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWxMYWJlbHMge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQ6IHJnYig2NSwgMzMsIDIwMyk7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYigyMywgMzYsIDIxOCk7XFxufVxcblxcbi5jbGVhclByb2plY3RzQnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjAzLCAzMywgMzMpO1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbWFyZ2luOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi5jbGVhclByb2plY3RzQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTcsIDQ5LCA0OSk7XFxufVxcblxcbi5hZGRTVkcsIC5jbGVhclNWRyB7XFxuICBtaW4taGVpZ2h0OiA4MCU7XFxufVxcblxcbi5uZXdQcm9qZWN0SGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMS41cmVtO1xcbn1cXG5cXG4uaWxsdXN0cmF0aW9uIHtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5yZW1vdmVQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucmVtb3ZlUHJvamVjdEJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdyZW07XFxuICByaWdodDogNyU7XFxufVxcblxcbi5yZW1vdmVQcm9qZWN0QnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLmlsbHVzdHJhdGlvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuXFxuICAuYWRkUHJvamVjdEJ1dHRvbiwgLmNsZWFyUHJvamVjdHNCdXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgfVxcblxcbiAgLmFkZFNWRywgLmNsZWFyU1ZHIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDVweDtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLnRvRG9DYXJkLCAuZG9uZXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZG9uZVRvRG8sIC5lZGl0VG9EbywgLmRlbGV0ZVRvRG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAgIG1hcmdpbjogMC4ycmVtO1xcbiAgfVxcbiAgXFxuICAucHJvamVjdEZvcm0ge1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IHsgZG9tRWxlbWVudHMsIHByb2plY3RDb250ZW50IH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgcHJvamVjdHNBcnIsIHNldEFjdGl2ZVByb2plY3QsIGFjdGl2ZVByb2plY3QgfSBmcm9tICcuJztcbmltcG9ydCB7IGdlbmVyYXRlVG9Eb0Zvcm0sIHJlZnJlc2hUb0RvcyB9IGZyb20gJy4vY3JlYXRlVG9kbyc7XG5pbXBvcnQgeyBzYXZlVG9TdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgSWxsdXN0cmF0aW9uIGZyb20gJy4vaWxsdXN0cmF0aW9uLnN2ZydcbmltcG9ydCB7IHJlbmRlclJlbW92ZVByb2plY3RCdG4gfSBmcm9tICcuL2RlbGV0ZVByb2plY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZURlbW9Qcm9qZWN0ID0gKCkgPT4ge1xuaWYgKHByb2plY3RzQXJyLmxlbmd0aCA9PSAwKXsgIFxuY29uc3QgZGVtb1Byb2plY3QgPSBuZXcgUHJvamVjdCgnRGVtbyBQcm9qZWN0JylcbnByb2plY3RzQXJyLnB1c2goZGVtb1Byb2plY3QpXG5nZW5lcmF0ZVByb2plY3RDYXJkKGRlbW9Qcm9qZWN0KVxufVxufVxuXG5leHBvcnQgY29uc3QgcmVmcmVzaFByb2plY3RzID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5wcm9qZWN0cy50ZXh0Q29udGVudCA9ICcnO1xuICBwcm9qZWN0c0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiBnZW5lcmF0ZVByb2plY3RDYXJkKHByb2plY3QpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RDYXJkID0gKHByb2plY3QpID0+IHtcbiAgaWYgKHByb2plY3QubmFtZSA9PSAnJyl7XG4gICAgY29uc29sZS5sb2coXCJubyBkaWNlXCIpXG4gIH0gZWxzZSB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIGluZGV4OiAnICsgcHJvamVjdHNBcnIuaW5kZXhPZihwcm9qZWN0KSk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzQXJyLmluZGV4T2YocHJvamVjdCk7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdERpdicpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0c0Fyci5mb3JFYWNoKChvYmopID0+IHByb2plY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3RJbmRleCkpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwcm9qZWN0SW5kZXh9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c0FycltgJHtwcm9qZWN0SW5kZXh9YF0pO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ1RoZSBhY3RpdmUgcHJvamVjdCBpczogJyArXG4gICAgICAgICdJRDogJyArXG4gICAgICAgIHByb2plY3RJbmRleCArXG4gICAgICAgICcgTmFtZTogJyArXG4gICAgICAgIGFjdGl2ZVByb2plY3QubmFtZVxuICAgICk7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KCkpO1xuICAgIGdlbmVyYXRlVG9Eb0Zvcm0oKTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICByZW5kZXJSZW1vdmVQcm9qZWN0QnRuKClcbiAgfSk7XG59XG59O1xuXG5jb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpLnZhbHVlO1xuICByZXR1cm4gbmV3IFByb2plY3QobmFtZSlcbn07XG5cbmNvbnN0IHJlc2V0UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0Jyk7XG4gIG5hbWUudmFsdWUgPSAnJztcbn07XG5cbmNvbnN0IHN1Ym1pdFByb2plY3RFdmVudCA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMucHJvamVjdFN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0c0Fyci5wdXNoKHByb2plY3RGb3JtSW5wdXQoKSk7XG4gICAgZ2VuZXJhdGVQcm9qZWN0Q2FyZChwcm9qZWN0Rm9ybUlucHV0KCkpO1xuICAgIC8vZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbiAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICByZXNldFByb2plY3RGb3JtKCk7XG4gIH0pO1xufTtcblxuY29uc3QgaWxsdXN0cmF0aW9uID0gbmV3IEltYWdlKClcbiAgaWxsdXN0cmF0aW9uLnNyYyA9IElsbHVzdHJhdGlvblxuICBpbGx1c3RyYXRpb24uY2xhc3NMaXN0LmFkZCgnaWxsdXN0cmF0aW9uJylcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IG5ld1Byb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIG5ld1Byb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdEhlYWRlcicpXG4gIG5ld1Byb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN0YXJ0IGEgTmV3IFByb2plY3QhXCJcbiAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEhlYWRlcilcbiAgZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm1EaXYnKTtcbiAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0SW5wdXQnKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXG4gICAgJ3BsYWNlaG9sZGVyJyxcbiAgICAnV2hhdCBpcyB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3Q/J1xuICApO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdElucHV0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SW5wdXQnKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZG9tRWxlbWVudHMucHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4udGV4dENvbnRlbnQgPSAnQ1JFQVRFIFBST0pFQ1QnO1xuICBkb21FbGVtZW50cy5wcm9qZWN0U3ViQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3ViQnRuJyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dCk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4pO1xuICBcbiAgZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQoaWxsdXN0cmF0aW9uKVxuXG5cbiAgcHJvamVjdEZvcm1JbnB1dCgpO1xuICBzdWJtaXRQcm9qZWN0RXZlbnQoKTtcbiAgcmVzZXRQcm9qZWN0Rm9ybSgpO1xufTtcbiIsImltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tICcuJztcbmltcG9ydCB7IHNhdmVUb1N0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IFRvRG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGdlbmVyYXRlVG9Eb01vZGFsIH0gZnJvbSAnLi9lZGl0VG9kbyc7XG5pbXBvcnQgeyBwcm9qZWN0Q29udGVudCB9IGZyb20gJy4vZG9tJztcbmltcG9ydCBUcmFzaCBmcm9tICcuL2RlbGV0ZS5zdmcnXG5pbXBvcnQgVGljayBmcm9tICcuL3RpY2suc3ZnJ1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9kZXRhaWxzLnN2ZydcblxuZXhwb3J0IGxldCBsYXRlc3RUb0RvID0gbnVsbDtcbmV4cG9ydCBsZXQgYWN0aXZlVG9EbyA9IG51bGw7XG5leHBvcnQgbGV0IGFjdGl2ZVRvRG9JRCA9IG51bGw7XG5cbmNvbnN0IHNldEFjdGl2ZVRvRG8gPSAodmFsdWUpID0+IHtcbiAgYWN0aXZlVG9EbyA9IHZhbHVlO1xufTtcblxuY29uc3Qgc2V0TGF0ZXN0VG9EbyA9ICh2YWx1ZSkgPT4ge1xuICBsYXRlc3RUb0RvID0gdmFsdWU7XG59O1xuXG5jb25zdCBzZXRBY3RpdmVUb0RvSUQgPSAodmFsdWUpID0+IHtcbiAgYWN0aXZlVG9Eb0lEID0gdmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgcmVmcmVzaFRvRG9zID0gKCkgPT4ge1xuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50Q29udGFpbmVyJyk7XG4gIHRvRG9Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgcHJvamVjdENvbnRlbnQoKVxuICBnZW5lcmF0ZVRvRG9Gb3JtKCk7XG4gIGFjdGl2ZVByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4gZ2VuZXJhdGVUb0RvQ2FyZCh0YXNrKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvQ2FyZCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRlbnRDb250YWluZXInKTtcbiAgY29uc3QgdG9Eb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICB0b0RvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b0RvQ2FyZCcpO1xuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9DYXJkKTtcblxuICBjb25zb2xlLmxvZygncGxlYXNlIGJlIHJpZ2h0IGJlbG93Jyk7XG4gIGNvbnNvbGUubG9nKGAke2FjdGl2ZVByb2plY3QudGFza3MuaW5kZXhPZih0b2RvKX1gKTtcbiAgbGV0IGNhcmRJbmRleCA9IGFjdGl2ZVByb2plY3QudGFza3MuaW5kZXhPZih0b2RvKTtcbiAgY29uc3QgY2FyZElEID0gJ3RvZG8nICsgY2FyZEluZGV4O1xuICB0b0RvQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgY2FyZElEKTtcblxuICBjb25zdCB0b0RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGVDbGFzcyA9ICd0aXRsZURpdicgKyBjYXJkSW5kZXg7XG4gIHRvRG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKHRpdGxlQ2xhc3MpO1xuICB0b0RvVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLm5hbWU7XG4gIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9UaXRsZURpdik7XG5cbiAgY29uc3QgdG9Eb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0RhdGVEaXYuY2xhc3NMaXN0LmFkZCgndG9Eb0RhdGVEaXYnKTtcbiAgdG9Eb0RhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9Qcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCd0b0RvUHJpb3JpdHlEaXYnKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgY29uc3QgdG9Eb05vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b0RvTm90ZXNEaXYnKTtcbiAgdG9Eb05vdGVzRGl2LnRleHRDb250ZW50ID0gdG9kby5ub3RlcztcblxuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc0RpdicpO1xuICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcblxuICBjb25zdCBkb25lQnV0dG9uVG9nZ2xlID0gKCgpID0+IHtcbiAgICBjb25zdCBkb25lVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRvbmVUb0RvLmNsYXNzTGlzdC5hZGQoJ2RvbmVUb0RvJyk7XG4gICAgY29uc3QgdGljayA9IG5ldyBJbWFnZSgpXG4gIHRpY2suc3JjID0gVGlja1xuICBkb25lVG9Eby5hcHBlbmRDaGlsZCh0aWNrKVxuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZG9uZVRvRG8pO1xuICAgIGRvbmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGV0IHRvRG9JbmRleCA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZC5zbGljZSg0KTtcbiAgICAgIHRvRG9JbmRleCA9IHBhcnNlSW50KHRvRG9JbmRleCk7XG4gICAgICBhY3RpdmVUb0RvID0gYWN0aXZlUHJvamVjdC50YXNrc1t0b0RvSW5kZXhdO1xuICAgICAgYWN0aXZlVG9Eby5zdGF0dXMgPSAnY29tcGxldGUnO1xuICAgICAgY29uc29sZS5sb2coJ3RvIGRvOicpO1xuICAgICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICAgIGNvbnNvbGUubG9nKCdkb25lOicpO1xuICAgICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LmRvbmUpO1xuXG4gICAgICBtYXJrQXNEb25lKCk7XG4gICAgICBzYXZlVG9TdG9yYWdlKCk7XG4gICAgfSk7XG5cbiAgICB0b2RvLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJyA/IG1hcmtBc0RvbmUoKSA6IG51bGw7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gbWFya0FzRG9uZSgpIHtcbiAgICBjb25zdCB0b0RvSUQgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQ7XG4gICAgY29uc3QgdGhpc0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b0RvSUQpO1xuICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3RvRG9DYXJkJyk7XG4gICAgdGhpc0NhcmQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgIGxldCB0aXRsZUNsYXNzID0gJy50aXRsZURpdicgKyBjYXJkSW5kZXg7XG4gICAgdGl0bGVDbGFzcyA9IHRpdGxlQ2xhc3MudG9TdHJpbmcoKTtcbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3RpdGxlQ2xhc3N9YCk7XG4gICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUodGl0bGVDbGFzcyk7XG4gICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICB9XG5cbiAgY29uc3QgZWRpdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZCgnZWRpdFRvRG8nKTtcbiAgY29uc3QgZGV0YWlscyA9IG5ldyBJbWFnZSgpXG4gIGRldGFpbHMuc3JjID0gRGV0YWlsc1xuICBlZGl0VG9Eby5hcHBlbmRDaGlsZChkZXRhaWxzKVxuICBlZGl0VG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRBY3RpdmVUb0RvSUQoYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkKTtcbiAgICBsZXQgZWRpdE1lID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIGVkaXRNZSA9IHBhcnNlSW50KGVkaXRNZSk7XG4gICAgc2V0QWN0aXZlVG9EbyhhY3RpdmVQcm9qZWN0LnRhc2tzW2VkaXRNZV0pO1xuICAgIGdlbmVyYXRlVG9Eb01vZGFsKCk7XG4gIH0pO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGVkaXRUb0RvKTtcblxuICBjb25zdCBkZWxldGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZVRvRG8uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVG9EbycpO1xuICBjb25zdCB0cmFzaCA9IG5ldyBJbWFnZSgpXG4gIHRyYXNoLnNyYyA9IFRyYXNoXG4gIGRlbGV0ZVRvRG8uYXBwZW5kQ2hpbGQodHJhc2gpXG4gIGRlbGV0ZVRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlTWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgc2V0QWN0aXZlVG9EbyhhY3RpdmVQcm9qZWN0LnRhc2tzW2RlbGV0ZU1lXSk7XG4gICAgY29uc3QgaW5kZXhPZkFjdGl2ZSA9IGFjdGl2ZVByb2plY3QudGFza3MuaW5kZXhPZihhY3RpdmVUb0RvKTtcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlIHRoaXM6ICcgKyBpbmRleE9mQWN0aXZlKTtcbiAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleE9mQWN0aXZlLCAxKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIHJlZnJlc2hUb0RvcygpO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbiAgfSk7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Ebyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvTmFtZUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIidUby1EbycgdGl0bGUuLi5cIik7XG4gIHRvRG9OYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm0nKTtcbiAgdG9Eb05hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvTmFtZUlucHV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9EYXRlSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvRG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRvRG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvRG9Gb3JtJyk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICB0b0RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvRG9Gb3JtJyk7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyBQcmlvcml0eSc7XG4gIGNvbnN0IHJlZ3VsYXJQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICByZWd1bGFyUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdSZWd1bGFyJyk7XG4gIHJlZ3VsYXJQcmlvcml0eS50ZXh0Q29udGVudCA9ICdSZWd1bGFyIFByaW9yaXR5JztcbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0hpZ2gnKTtcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2ggUHJpb3JpdHknO1xuXG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChyZWd1bGFyUHJpb3JpdHkpO1xuICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05vdGVzLi4uJyk7XG4gIHRvRG9Ob3Rlc0lucHV0LmNsYXNzTGlzdC5hZGQoJ3RvRG9Gb3JtJyk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9Ob3Rlc0lucHV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCA9IChpZCwgdGV4dCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICB0b0RvU3ViQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgdG9Eb1N1YkJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHRvRG9TdWJCdG4uY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm0nKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb1N1YkJ0bik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcbiAgICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGVudENvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RIZWFkZXInKTtcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGFjdGl2ZVByb2plY3QubmFtZTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgY29uc3QgdG9Eb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0Zvcm1EaXYuY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm1EaXYnKTtcblxuICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoJ3RvRG9OYW1lSW5wdXQnLCB0b0RvRm9ybURpdik7XG4gIGdlbmVyYXRlVG9Eb0RhdGVJbnB1dCgndG9Eb0R1ZURhdGVJbnB1dCcsIHRvRG9Gb3JtRGl2KTtcbiAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dCgndG9Eb1ByaW9yaXR5SW5wdXQnLCB0b0RvRm9ybURpdik7XG4gIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoJ3RvRG9Ob3Rlc0lucHV0JywgdG9Eb0Zvcm1EaXYpO1xuICBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCgndG9Eb1N1YkJ0bicsICdBREQgVE9ETycsIHRvRG9Gb3JtRGl2KTtcblxuIFxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9Gb3JtRGl2KTtcblxuICBjb25zdCB0b0RvRm9ybUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb05hbWVJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb0R1ZURhdGVJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRG9Qcmlvcml0eUlucHV0JykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb05vdGVzSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBzdGF0dXMgPSAnaW5jb21wbGV0ZSc7XG4gICAgcmV0dXJuIG5ldyBUb0RvKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzKTtcbiAgfTtcblxuICBjb25zdCB0b0RvU3ViQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRG9TdWJCdG4nKTtcbiAgdG9Eb1N1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnB1c2godG9Eb0Zvcm1JbnB1dCgpKTtcbiAgICBzZXRMYXRlc3RUb0RvKGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoIC0gMSk7XG4gICAgc2V0QWN0aXZlVG9EbyhsYXRlc3RUb0RvKTtcbiAgICBjb25zb2xlLmxvZygnbGF0ZXN0ICcgKyBsYXRlc3RUb0RvKTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICBzZXRBY3RpdmVUb0RvKG51bGwpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIHByb2plY3RzIHRvZG9zOicpO1xuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgUmVtb3ZlIGZyb20gJy4vcmVtb3ZlLnN2ZydcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QsIHNldEFjdGl2ZVByb2plY3QsIHByb2plY3RzQXJyLCBzZXRQcm9qZWN0c0FyciB9IGZyb20gJy4nXG5pbXBvcnQgeyBzYXZlVG9TdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJ1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0Rm9ybSwgcmVmcmVzaFByb2plY3RzIH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0J1xuaW1wb3J0IHsgZG9tRWxlbWVudHMsIHByb2plY3RDb250ZW50IH0gZnJvbSAnLi9kb20nXG5pbXBvcnQgeyBnZW5lcmF0ZVRvRG9Gb3JtLCByZWZyZXNoVG9Eb3MgfSBmcm9tICcuL2NyZWF0ZVRvZG8nXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkID0gKCdyZW1vdmVQcm9qZWN0JylcbiAgICBjb25zdCByZW1vdmVJY29uID0gbmV3IEltYWdlKClcbiAgICByZW1vdmVJY29uLnNyYyA9IFJlbW92ZVxuICAgIHJlbW92ZUljb24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlUHJvamVjdEJ0bicpXG4gICAgcmVtb3ZlQnV0dG9uLmFwcGVuZENoaWxkKHJlbW92ZUljb24pXG4gICAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKVxuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RJbmRleCA9IHByb2plY3RzQXJyLmluZGV4T2YoYWN0aXZlUHJvamVjdClcbiAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzQXJyLnNwbGljZShhY3RpdmVQcm9qZWN0SW5kZXgsIDEpXG4gICAgICAgIHBvc3RSZW1vdmVSZXNldCgpXG4gICAgICAgIHNhdmVUb1N0b3JhZ2UoKVxuICAgICAgICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RGb3JtKCkpO1xuICAgIH0pXG59IFxuXG5leHBvcnQgY29uc3QgcG9zdFJlbW92ZVJlc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0FjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0FyclswXTtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KG5ld0FjdGl2ZVByb2plY3QpXG4gICAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQoKSk7XG4gICAgcmVmcmVzaFByb2plY3RzKCk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVQcm9qZWN0RXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZVByb2plY3QnKVxuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RJbmRleCA9IHByb2plY3RzQXJyLmluZGV4T2YoYWN0aXZlUHJvamVjdClcbiAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzQXJyLnNwbGljZShhY3RpdmVQcm9qZWN0SW5kZXgsIDEpXG4gICAgICAgIHBvc3RSZW1vdmVSZXNldCgpXG4gICAgfSlcbn1cblxuXG5cbmV4cG9ydCBjb25zdCByZW5kZXJSZW1vdmVQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgIGdlbmVyYXRlQnV0dG9uKClcbiAgICAvL3JlbW92ZVByb2plY3RFdmVudCgpXG59IiwiaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZURlbW9Qcm9qZWN0LCBnZW5lcmF0ZVByb2plY3RGb3JtLCByZWZyZXNoUHJvamVjdHMgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBzYXZlVG9TdG9yYWdlLCBsb2FkRnJvbVN0b3JhZ2UsIGNsZWFyU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBBZGQgZnJvbSAnLi9hZGQuc3ZnJ1xuaW1wb3J0IENsZWFyIGZyb20gJy4vY2xlYXIuc3ZnJ1xuXG5cbi8vIGRvbSBlbGVtZW50c1xuXG5leHBvcnQgY29uc3QgZG9tRWxlbWVudHMgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2xlYXJQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHByb2plY3RTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgaGVhZGVyRGl2LFxuICAgIGxvZ28sXG4gICAgc2lkZUJhckRpdixcbiAgICBwcm9qZWN0c0hlYWRlcixcbiAgICBwcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0QnV0dG9uLFxuICAgIGNsZWFyUHJvamVjdHNCdXR0b24sXG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIsXG4gICAgcHJvamVjdEZvcm1EaXYsXG4gICAgcHJvamVjdElucHV0LFxuICAgIHByb2plY3RTdWJCdG4sXG4gICAgbW9kYWwsXG4gICAgbW9kYWxCbHVyXG4gIH07XG59KSgpO1xuXG4vLyB3aW5kb3cgY29udGFpbmVyXG5cbmNvbnN0IHJlbmRlck1hc3RlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLmNvbnRhaW5lcik7XG59O1xuXG4vLyBoZWFkZXJcblxuY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5oZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyRGl2Jyk7XG4gIGRvbUVsZW1lbnRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5oZWFkZXJEaXYpO1xufTtcblxuLy9sb2dvXG5cbmNvbnN0IHJlbmRlckxvZ28gPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLmxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICBkb21FbGVtZW50cy5sb2dvLnRleHRDb250ZW50ID0gJ1Byb2plY3QgVE9ET3MnO1xuICBkb21FbGVtZW50cy5oZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMubG9nbyk7XG59O1xuXG4vL3NpZGViYXJcblxuLy9zaWRlYmFyIGNvbnRhaW5lclxuXG5cbmNvbnN0IHJlbmRlclNpZGVCYXJDb250YWluZXIgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLnNpZGVCYXJEaXYuY2xhc3NMaXN0LmFkZCgnc2lkZUJhckRpdicpO1xuICBkb21FbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMuc2lkZUJhckRpdik7XG59O1xuXG4vL3NpZGViYXIgaGVhZGVyXG5cbmNvbnN0IHJlbmRlclNpZGVCYXJIZWFkZXIgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzSGVhZGVyJyk7XG4gIGRvbUVsZW1lbnRzLnNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMucHJvamVjdHNIZWFkZXIpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9ICdQUk9KRUNUUyc7XG59O1xuXG4vL3NpZGViYXIgcHJvamVjdCBuYXYgY29udGFpbmVyXG5cbmNvbnN0IHJlbmRlclByb2plY3RzQ29udGFpbmVyID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5wcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0RpdicpO1xuICBkb21FbGVtZW50cy5zaWRlQmFyRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnByb2plY3RzKTtcbn07XG5cbi8vc2lkZWJhciBhZGQgbmV3IHByb2plY3RcblxuY29uc3QgcmVuZGVyQWRkUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgY29uc3QgYWRkID0gbmV3IEltYWdlKClcbiAgYWRkLnNyYyA9IEFkZFxuICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkU1ZHJylcbiAgZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGQpXG4gIGRvbUVsZW1lbnRzLmFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICBkb21FbGVtZW50cy5zaWRlQmFyRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLmFkZFByb2plY3RCdXR0b24pO1xuICBkb21FbGVtZW50cy5hZGRQcm9qZWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG59O1xuXG4vL3NpZGViYXIgY2xlYXIgcHJvamVjdHNcbmNvbnN0IHJlbmRlckNsZWFyUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgY29uc3QgY2xlYXIgPSBuZXcgSW1hZ2UoKVxuICBjbGVhci5zcmMgPSBDbGVhclxuICBjbGVhci5jbGFzc0xpc3QuYWRkKCdjbGVhclNWRycpXG4gIGRvbUVsZW1lbnRzLmNsZWFyUHJvamVjdHNCdXR0b24uYXBwZW5kQ2hpbGQoY2xlYXIpXG4gIGRvbUVsZW1lbnRzLmNsZWFyUHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xlYXJQcm9qZWN0c0J1dHRvbicpO1xuICBkb21FbGVtZW50cy5zaWRlQmFyRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLmNsZWFyUHJvamVjdHNCdXR0b24pO1xuICBkb21FbGVtZW50cy5jbGVhclByb2plY3RzQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG59O1xuXG4vL3NpZGViYXIgcmVuZGVyaW5nXG5cbmNvbnN0IHJlbmRlclNpZGVCYXIgPSAoKSA9PiB7XG4gIHJlbmRlclNpZGVCYXJDb250YWluZXIoKTtcbiAgcmVuZGVyU2lkZUJhckhlYWRlcigpO1xuICByZW5kZXJQcm9qZWN0c0NvbnRhaW5lcigpO1xuICByZW5kZXJBZGRQcm9qZWN0QnRuKCk7XG4gIHJlbmRlckNsZWFyUHJvamVjdEJ0bigpXG4gIHJlZnJlc2hQcm9qZWN0cygpO1xuICBcbiAgZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnZW5lcmF0ZVByb2plY3RGb3JtKCk7XG4gIH0pO1xuXG4gIGRvbUVsZW1lbnRzLmNsZWFyUHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJTdG9yYWdlKClcbiAgICByZWZyZXNoUHJvamVjdHMoKVxuICB9KVxuICBcbn1cblxuLy9tYWluIGNvbnRlbnQgY29udGFpbmVyXG5cbmNvbnN0IHJlbmRlckNvbnRlbnRDb250YWluZXIgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50Q29udGFpbmVyJyk7XG4gIGRvbUVsZW1lbnRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lcik7XG59XG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IHByb2plY3RDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGVudENvbnRhaW5lcicpO1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SGVhZGVyJyk7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBhY3RpdmVQcm9qZWN0Lm5hbWU7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGVudENvbnRhaW5lcjtcbn07XG5cblxuXG5cblxuXG5cblxuLy9tb2RhbCBmdW5jdGlvbnNcblxuZXhwb3J0IGNvbnN0IHJlbmRlck1vZGFsQmx1ciA9ICgpID0+IHtcbmRvbUVsZW1lbnRzLm1vZGFsQmx1ci5jbGFzc0xpc3QuYWRkKCdtb2RhbEJsdXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMubW9kYWxCbHVyKTtcblxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyTW9kYWwgPSAoKSA9PiB7XG4gIHJlbmRlck1vZGFsQmx1cigpXG4gIGRvbUVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gIGRvbUVsZW1lbnRzLm1vZGFsQmx1ci5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5tb2RhbCk7XG59XG5cblxuXG5cbi8vZnVsbCB1aSByZW5kZXJcblxuY29uc3QgcmVuZGVyVUkgPSAoKCkgPT4ge1xuICAvL2NsZWFyU3RvcmFnZSgpXG4gIGxvYWRGcm9tU3RvcmFnZSgpXG4gIHJlbmRlck1hc3RlckNvbnRhaW5lcigpO1xuICByZW5kZXJIZWFkZXIoKTtcbiAgcmVuZGVyTG9nbygpO1xuICByZW5kZXJTaWRlQmFyKClcbiAgcmVuZGVyQ29udGVudENvbnRhaW5lcigpXG4gIGdlbmVyYXRlRGVtb1Byb2plY3QoKVxuICBnZW5lcmF0ZVByb2plY3RGb3JtKClcbiAgcmVuZGVyTW9kYWwoKVxuICAvL3JlZnJlc2hQcm9qZWN0cygpXG59KSgpOyIsImltcG9ydCB7IHNhdmVUb1N0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgYWN0aXZlVG9EbyxcbiAgZ2VuZXJhdGVUb0RvTmFtZUlucHV0LFxuICBnZW5lcmF0ZVRvRG9EYXRlSW5wdXQsXG4gIGdlbmVyYXRlVG9Eb1ByaW9yaXR5SW5wdXQsXG4gIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQsXG4gIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0LFxufSBmcm9tICcuL2NyZWF0ZVRvZG8nO1xuaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gJy4nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0LnN2ZydcblxuY29uc3QgZ2VuZXJlcmF0ZUNsb3NlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxCbHVyJyk7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VNb2RhbC50ZXh0Q29udGVudCA9ICd4JztcbiAgY2xvc2VNb2RhbC5jbGFzc0xpc3QuYWRkKCdjbG9zZU1vZGFsJyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlTW9kYWwpO1xuICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwKSc7XG4gICAgbW9kYWwudGV4dENvbnRlbnQgPSAnJztcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbEJsdXInKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG5cbiAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0b0RvTmFtZS5jbGFzc0xpc3QuYWRkKCd0b0RvTmFtZU1vZGFsJyk7XG4gIGNvbnNvbGUubG9nKGFjdGl2ZVRvRG8pO1xuICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVRvRG8ubmFtZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XG5cbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9Eb0R1ZURhdGVNb2RhbCcpO1xuICB0b0RvRHVlRGF0ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5EdWUgRGF0ZTogPC9zcGFuPiR7YWN0aXZlVG9Eby5kYXRlfWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKTtcblxuICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvRG9Qcmlvcml0eU1vZGFsJyk7XG4gIHRvRG9Qcmlvcml0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Qcmlvcml0eTogPC9zcGFuPiR7YWN0aXZlVG9Eby5wcmlvcml0eX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvTm90ZXMuY2xhc3NMaXN0LmFkZCgndG9Eb05vdGVzTW9kYWwnKTtcbiAgdG9Eb05vdGVzLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPk5vdGVzOiA8L3NwYW4+JHthY3RpdmVUb0RvLm5vdGVzfWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Ob3Rlcyk7XG5cbiAgZ2VuZXJlcmF0ZUNsb3NlQnV0dG9uKCk7XG5cbiAgY29uc3QgZWRpdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZCgnZWRpdFRvRG8nKTtcbiAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpXG4gIGVkaXQuc3JjID0gRWRpdFxuICBlZGl0VG9Eby5hcHBlbmRDaGlsZChlZGl0KVxuICBtb2RhbC5hcHBlbmRDaGlsZChlZGl0VG9Ebyk7XG4gIGVkaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgIG1vZGFsLnRleHRDb250ZW50ID0gJyc7XG4gICAgZ2VuZXJhdGVUb0RvTmFtZUlucHV0KCdlZGl0TmFtZUlucHV0JywgbW9kYWwpO1xuICAgIGdlbmVyYXRlVG9Eb0RhdGVJbnB1dCgnZWRpdERhdGVJbnB1dCcsIG1vZGFsKTtcbiAgICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0KCdlZGl0UHJpb3JpdHlJbnB1dCcsIG1vZGFsKTtcbiAgICBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0KCdlZGl0Tm90ZXNJbnB1dCcsIG1vZGFsKTtcbiAgICBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCgnZWRpdFN1Ym1pdEJ1dHRvbicsICdTVUJNSVQgQ0hBTkdFUycsIG1vZGFsKTtcbiAgICBnZW5lcmVyYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBjb25zdCBlZGl0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0TmFtZUlucHV0Jyk7XG4gICAgZWRpdE5hbWUudmFsdWUgPSBhY3RpdmVUb0RvLm5hbWU7XG4gICAgY29uc3QgZWRpdERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdERhdGVJbnB1dCcpO1xuICAgIGVkaXREYXRlLnZhbHVlID0gYWN0aXZlVG9Eby5kYXRlO1xuICAgIGNvbnN0IGVkaXRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHJpb3JpdHlJbnB1dCcpO1xuICAgIGVkaXRQcmlvcml0eS52YWx1ZSA9IGFjdGl2ZVRvRG8ucHJpb3JpdHk7XG4gICAgY29uc3QgZWRpdE5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXROb3Rlc0lucHV0Jyk7XG4gICAgZWRpdE5vdGVzLnZhbHVlID0gYWN0aXZlVG9Eby5ub3RlcztcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdlZGl0U3VibWl0QnV0dG9uJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWN0aXZlVG9Eby5uYW1lID0gZWRpdE5hbWUudmFsdWU7XG4gICAgICAgIGFjdGl2ZVRvRG8uZGF0ZSA9IGVkaXREYXRlLnZhbHVlO1xuICAgICAgICBhY3RpdmVUb0RvLnByaW9yaXR5ID0gZWRpdFByaW9yaXR5LnZhbHVlO1xuICAgICAgICBhY3RpdmVUb0RvLm5vdGVzID0gZWRpdE5vdGVzLnZhbHVlO1xuICAgICAgICBtb2RhbC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcbiAgICAgICAgbW9kYWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcblxuICAgICAgICBsZXQgY2FyZEluZGV4ID0gYWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKGFjdGl2ZVRvRG8pO1xuICAgICAgICBjb25zdCB0aXRsZUNsYXNzID0gJy50aXRsZURpdicgKyBjYXJkSW5kZXg7XG5cbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlQ2xhc3MpO1xuXG4gICAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gZWRpdE5hbWUudmFsdWU7XG5cbiAgICAgICAgc2F2ZVRvU3RvcmFnZSgpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBzYXZlVG9TdG9yYWdlLCBsb2FkRnJvbVN0b3JhZ2UsIGNsZWFyU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHNBcnIgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RzQXJyID0gKHZhbHVlKSA9PiB7XG4gIHByb2plY3RzQXJyID0gdmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xufTtcblxuLy9sb2FkRnJvbVN0b3JhZ2UoKTtcblxuLy9nZW5lcmF0ZVVJKCk7XG4vL2dlbmVyYXRlUHJvamVjdEZvcm0oKTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuZG9uZSA9IFtdO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCB7IHByb2plY3RzQXJyLCBzZXRQcm9qZWN0c0FyciB9IGZyb20gJy4nO1xuXG4vL0xPQ0FMIFNUT1JBR0VcblxuZnVuY3Rpb24gc2F2ZVRvU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzQXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnIpKTtcbn1cblxuZnVuY3Rpb24gbG9hZEZyb21TdG9yYWdlKCkge1xuICBjb25zdCBsb2FkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0FycicpKTtcblxuICBzZXRQcm9qZWN0c0Fycihsb2FkUHJvamVjdHMpO1xuICBpZiAocHJvamVjdHNBcnIgPT09IG51bGwpIHNldFByb2plY3RzQXJyKFtdKTtcbiAgY29uc29sZS50YWJsZShwcm9qZWN0c0Fycik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIHNldFByb2plY3RzQXJyKFtdKTtcbiAvLyByZXNldERpc3BsYXkoKTtcbn1cblxuZXhwb3J0IHsgc2F2ZVRvU3RvcmFnZSwgbG9hZEZyb21TdG9yYWdlLCBjbGVhclN0b3JhZ2UgfTtcbiIsImNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RvbS5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=