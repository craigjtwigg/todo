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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  box-sizing: border-box;\n}\nbutton {\n  background: transparent;\n  border: none;\n\n}\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  background-color: rgb(212, 209, 209);\n}\n\n.container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 25% 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    'header header header'\n    'sidebar main main';\n}\n\n.headerDiv {\n  grid-area: header;\n  display: flex;\n  background: rgb(98, 66, 241);\n  background: linear-gradient(\n    70deg,\n    rgba(65, 33, 203, 1) 8%,\n    rgba(61, 32, 200, 1) 27%,\n    rgba(5, 15, 156, 1) 48%,\n    rgb(141, 71, 233) 100%\n  );\n  color: white;\n  width: 100%;\n  height: 5rem;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 0 6rem;\n}\n\nh1 {\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n  display: block;\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.sideBarDiv {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-area: sidebar;\n  margin: 0 1rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  height: 500px;\n  width: 100%;\n}\n\n.projectsHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n.projectDiv {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(161, 160, 160, 0.137);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.projectDiv:hover {\n  cursor: pointer;\n  background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n  grid-area: main;\n  margin: 0 1rem;\n  border-radius: 5%;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  min-height: 500px;\n  width: 92%;\n}\n\n.projectFormDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  padding-top: 2rem;\n  align-items: center;\n}\n\n#projectInput {\n  display: block;\n  width: 60%;\n  border-radius: 0.5rem;\n  height: 3rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n  border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn, #editSubmitButton {\n  display: block;\n  background-color: rgb(5, 15, 156);\n  color: rgb(255, 255, 255);\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover,\n#toDoSubBtn:hover,\n#editSubmitButton {\n  cursor: pointer;\n  background-color: rgb(23, 36, 218);\n}\n\n.projectContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 1rem;\n}\n\n.toDoFormDiv {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr fr 1fr;\n  grid-template-areas:\n    'title title'\n    'date priority'\n    'notes notes'\n    'button button';\n  justify-items: center;\n  padding: 1.5rem;\n}\n\n#toDoNameInput {\n  grid-area: title;\n  display: block;\n  width: 90%;\n  border-radius: 0.5rem;\n  height: 2.2rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n  grid-area: date;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: right;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n  grid-area: priority;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: left;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n  grid-area: notes;\n  resize: none;\n  display: block;\n  width: 90%;\n  min-height: 80px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background-color: rgba(161, 160, 160, 0.137);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.toDoTitleDiv {\n  font-size: 2rem;\n}\n\n.done {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: linear-gradient(\n    70deg,\n    rgb(88, 88, 88) 8%,\n    rgb(70, 70, 70)  27%,\n    rgb(95, 95, 95)  48%,\n    rgb(97, 97, 97)  100%\n  );\n  color: rgb(172, 172, 172);\n  border: rgb(117, 117, 117);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.strike {\n  align-self: center;\n  justify-self: center;\n  text-decoration: line-through;\n}\n\n.deleteToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 0, 0) 8%,\n    rgb(252, 59, 0)  27%,\n    rgb(177, 0, 0)  48%,\n    rgb(233, 51, 51)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.doneToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(0, 175, 73) 8%,\n    rgb(0, 189, 101)  27%,\n    rgb(0, 255, 106)  48%,\n    rgb(30, 240, 100)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.doneToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.undoToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 132, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.undoToDo:hover {\n  cursor: pointer;\n  background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  margin: 0 1rem;\n  cursor: pointer;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 217, 0) 8%,\n    rgb(252, 185, 0)  27%,\n    rgb(255, 208, 0)  48%,\n    rgb(240, 140, 30)  100%\n  );\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.editToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.buttonsDiv {\n  display: flex;\n}\n\n.modalBlur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.719);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  transform: scale(0);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  transform: scale(0);\n  width: 60%;\n  height: 60%;\n  background-color: rgb(218, 218, 218);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n  cursor: pointer;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 15px;\n}\n\n.modalLabels {\n  font-weight: 900;\n}\n\n.addProjectButton {\n  grid-area: button;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  height: 150px;\n  width: max-content;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n  cursor: pointer;\n  background: rgb(23, 36, 218);\n}\n\n.addSVG {\n  min-height: 80%;\n}\n\n.newProjectHeader {\n  text-align: center;\n  margin: 1.5rem;\n}\n\n.illustration {\n  height: 200px;\n}\n\n.removeProject {\n  background: transparent;\n  position: absolute;\n}\n\n.removeProjectBtn {\n  position: absolute;\n  top: 7rem;\n  right: 7%;\n}\n\n.removeProjectBtn:hover {\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 450px) {\n  .illustration {\n    height: 100px;\n  }\n\n  .addProjectButton {\n    width: 80px;\n    height: 80px;\n  }\n\n  .addSVG {\n    position: relative;\n    bottom: 5px;\n    right: 5px;\n    height: 60px;\n  }\n\n  .projectsHeader {\n    font-size: 1rem;\n  }\n\n  .toDoCard, .done{\n    font-size: 1.2rem;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .doneToDo, .editToDo, .deleteToDo {\n    transform: scale(0.7);\n    margin: 0.2rem;\n  }\n  \n  .projectForm {\n    font-size: 0.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\nbutton {\n  background: transparent;\n  border: none;\n\n}\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  background-color: rgb(212, 209, 209);\n}\n\n.container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 25% 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    'header header header'\n    'sidebar main main';\n}\n\n.headerDiv {\n  grid-area: header;\n  display: flex;\n  background: rgb(98, 66, 241);\n  background: linear-gradient(\n    70deg,\n    rgba(65, 33, 203, 1) 8%,\n    rgba(61, 32, 200, 1) 27%,\n    rgba(5, 15, 156, 1) 48%,\n    rgb(141, 71, 233) 100%\n  );\n  color: white;\n  width: 100%;\n  height: 5rem;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 0 6rem;\n}\n\nh1 {\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n  display: block;\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.sideBarDiv {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-area: sidebar;\n  margin: 0 1rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  height: 500px;\n  width: 100%;\n}\n\n.projectsHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n.projectDiv {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(161, 160, 160, 0.137);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.projectDiv:hover {\n  cursor: pointer;\n  background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n  grid-area: main;\n  margin: 0 1rem;\n  border-radius: 5%;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  min-height: 500px;\n  width: 92%;\n}\n\n.projectFormDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  padding-top: 2rem;\n  align-items: center;\n}\n\n#projectInput {\n  display: block;\n  width: 60%;\n  border-radius: 0.5rem;\n  height: 3rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n  border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn, #editSubmitButton {\n  display: block;\n  background-color: rgb(5, 15, 156);\n  color: rgb(255, 255, 255);\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover,\n#toDoSubBtn:hover,\n#editSubmitButton {\n  cursor: pointer;\n  background-color: rgb(23, 36, 218);\n}\n\n.projectContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 1rem;\n}\n\n.toDoFormDiv {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr fr 1fr;\n  grid-template-areas:\n    'title title'\n    'date priority'\n    'notes notes'\n    'button button';\n  justify-items: center;\n  padding: 1.5rem;\n}\n\n#toDoNameInput {\n  grid-area: title;\n  display: block;\n  width: 90%;\n  border-radius: 0.5rem;\n  height: 2.2rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n  grid-area: date;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: right;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n  grid-area: priority;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: left;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n  grid-area: notes;\n  resize: none;\n  display: block;\n  width: 90%;\n  min-height: 80px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background-color: rgba(161, 160, 160, 0.137);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.toDoTitleDiv {\n  font-size: 2rem;\n}\n\n.done {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: linear-gradient(\n    70deg,\n    rgb(88, 88, 88) 8%,\n    rgb(70, 70, 70)  27%,\n    rgb(95, 95, 95)  48%,\n    rgb(97, 97, 97)  100%\n  );\n  color: rgb(172, 172, 172);\n  border: rgb(117, 117, 117);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.strike {\n  align-self: center;\n  justify-self: center;\n  text-decoration: line-through;\n}\n\n.deleteToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 0, 0) 8%,\n    rgb(252, 59, 0)  27%,\n    rgb(177, 0, 0)  48%,\n    rgb(233, 51, 51)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.doneToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(0, 175, 73) 8%,\n    rgb(0, 189, 101)  27%,\n    rgb(0, 255, 106)  48%,\n    rgb(30, 240, 100)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.doneToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.undoToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 132, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.undoToDo:hover {\n  cursor: pointer;\n  background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  margin: 0 1rem;\n  cursor: pointer;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 217, 0) 8%,\n    rgb(252, 185, 0)  27%,\n    rgb(255, 208, 0)  48%,\n    rgb(240, 140, 30)  100%\n  );\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.editToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.buttonsDiv {\n  display: flex;\n}\n\n.modalBlur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.719);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  transform: scale(0);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  transform: scale(0);\n  width: 60%;\n  height: 60%;\n  background-color: rgb(218, 218, 218);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n  cursor: pointer;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 15px;\n}\n\n.modalLabels {\n  font-weight: 900;\n}\n\n.addProjectButton {\n  grid-area: button;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  height: 150px;\n  width: max-content;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n  cursor: pointer;\n  background: rgb(23, 36, 218);\n}\n\n.addSVG {\n  min-height: 80%;\n}\n\n.newProjectHeader {\n  text-align: center;\n  margin: 1.5rem;\n}\n\n.illustration {\n  height: 200px;\n}\n\n.removeProject {\n  background: transparent;\n  position: absolute;\n}\n\n.removeProjectBtn {\n  position: absolute;\n  top: 7rem;\n  right: 7%;\n}\n\n.removeProjectBtn:hover {\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 450px) {\n  .illustration {\n    height: 100px;\n  }\n\n  .addProjectButton {\n    width: 80px;\n    height: 80px;\n  }\n\n  .addSVG {\n    position: relative;\n    bottom: 5px;\n    right: 5px;\n    height: 60px;\n  }\n\n  .projectsHeader {\n    font-size: 1rem;\n  }\n\n  .toDoCard, .done{\n    font-size: 1.2rem;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .doneToDo, .editToDo, .deleteToDo {\n    transform: scale(0.7);\n    margin: 0.2rem;\n  }\n  \n  .projectForm {\n    font-size: 0.5rem;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _add_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add.svg */ "./src/add.svg");







// dom elements

const domElements = (() => {
  const container = document.createElement('div');
  const headerDiv = document.createElement('div');
  const logo = document.createElement('h1');
  const sideBarDiv = document.createElement('div');
  const projectsHeader = document.createElement('div');
  const projects = document.createElement('div');
  const addProjectButton = document.createElement('button');
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
  add.src = _add_svg__WEBPACK_IMPORTED_MODULE_4__
  add.classList.add('addSVG')
  domElements.addProjectButton.appendChild(add)
  domElements.addProjectButton.classList.add('addProjectButton');
  domElements.sideBarDiv.appendChild(domElements.addProjectButton);
  domElements.addProjectButton.style.transform = 'scale(1)';
};

//sidebar rendering

const renderSideBar = () => {
  renderSideBarContainer();
  renderSideBarHeader();
  renderProjectsContainer();
  renderAddProjectBtn();
  (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.refreshProjects)();
  
  domElements.addProjectButton.addEventListener('click', () => {
    (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.generateProjectForm)();
  });
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMElBQTBJO0FBQzFJLG1JQUFtSTtBQUNuSTtBQUNBLDZDQUE2QyxjQUFjLDJCQUEyQixHQUFHLFVBQVUsNEJBQTRCLGlCQUFpQixLQUFLLFFBQVEsNENBQTRDLG9CQUFvQixjQUFjLHlDQUF5QyxHQUFHLGdCQUFnQixrQkFBa0IsY0FBYyx1Q0FBdUMsa0NBQWtDLDhFQUE4RSxHQUFHLGdCQUFnQixzQkFBc0Isa0JBQWtCLGlDQUFpQyx5S0FBeUssaUJBQWlCLGdCQUFnQixpQkFBaUIsb0JBQW9CLDRCQUE0Qix3QkFBd0IsOEJBQThCLEdBQUcsUUFBUSxpQkFBaUIsNENBQTRDLDJEQUEyRCxHQUFHLG9CQUFvQixtQkFBbUIsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLDJCQUEyQix1QkFBdUIsbUJBQW1CLHdCQUF3QixpREFBaUQsMERBQTBELGtCQUFrQixnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLHNCQUFzQixHQUFHLGlCQUFpQix1QkFBdUIsa0JB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LFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFNBQVMsT0FBTyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFh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O1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1VDZkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZG9tLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnc2lkZWJhciBtYWluIG1haW4nO1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6IHJnYig5OCwgNjYsIDI0MSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2JhKDY1LCAzMywgMjAzLCAxKSA4JSxcXG4gICAgcmdiYSg2MSwgMzIsIDIwMCwgMSkgMjclLFxcbiAgICByZ2JhKDUsIDE1LCAxNTYsIDEpIDQ4JSxcXG4gICAgcmdiKDE0MSwgNzEsIDIzMykgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnNpZGVCYXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3REaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjEzNyk7XFxufVxcblxcbi5tYWluQ29udGVudENvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDkyJTtcXG59XFxuXFxuLnByb2plY3RGb3JtRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdElucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdElucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogcmdiKDIzLCAzNiwgMjE4KSBzb2xpZCAxcHg7XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuLCAjZWRpdFN1Ym1pdEJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAxNSwgMTU2KTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuOmhvdmVyLFxcbiN0b0RvU3ViQnRuOmhvdmVyLFxcbiNlZGl0U3VibWl0QnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMzYsIDIxOCk7XFxufVxcblxcbi5wcm9qZWN0Q29udGVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRvRG9Gb3JtRGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciBmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAndGl0bGUgdGl0bGUnXFxuICAgICdkYXRlIHByaW9yaXR5J1xcbiAgICAnbm90ZXMgbm90ZXMnXFxuICAgICdidXR0b24gYnV0dG9uJztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuI3RvRG9OYW1lSW5wdXQge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvRHVlRGF0ZUlucHV0IHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvUHJpb3JpdHlJbnB1dCB7XFxuICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb05vdGVzSW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBub3RlcztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9TdWJCdG4ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDMzLCAyMDMpO1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4udG9Eb0NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjAsIDE2MCwgMC4xMzcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udG9Eb1RpdGxlRGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRvbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYig4OCwgODgsIDg4KSA4JSxcXG4gICAgcmdiKDcwLCA3MCwgNzApICAyNyUsXFxuICAgIHJnYig5NSwgOTUsIDk1KSAgNDglLFxcbiAgICByZ2IoOTcsIDk3LCA5NykgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogcmdiKDE3MiwgMTcyLCAxNzIpO1xcbiAgYm9yZGVyOiByZ2IoMTE3LCAxMTcsIDExNyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRlbGV0ZVRvRG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoMjU1LCAwLCAwKSA4JSxcXG4gICAgcmdiKDI1MiwgNTksIDApICAyNyUsXFxuICAgIHJnYigxNzcsIDAsIDApICA0OCUsXFxuICAgIHJnYigyMzMsIDUxLCA1MSkgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG59XFxuXFxuLmRvbmVUb0RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiKDAsIDE3NSwgNzMpIDglLFxcbiAgICByZ2IoMCwgMTg5LCAxMDEpICAyNyUsXFxuICAgIHJnYigwLCAyNTUsIDEwNikgIDQ4JSxcXG4gICAgcmdiKDMwLCAyNDAsIDEwMCkgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZG9uZVRvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxufVxcblxcbi51bmRvVG9EbyB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDEzMiwgMTApO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi51bmRvVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNTMsIDI4KTtcXG59XFxuXFxuLmVkaXRUb0RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYigyNTUsIDIxNywgMCkgOCUsXFxuICAgIHJnYigyNTIsIDE4NSwgMCkgIDI3JSxcXG4gICAgcmdiKDI1NSwgMjA4LCAwKSAgNDglLFxcbiAgICByZ2IoMjQwLCAxNDAsIDMwKSAgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZWRpdFRvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxufVxcblxcbi5idXR0b25zRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbEJsdXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MTkpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4zcmVtIDAuM3JlbSAwLjNyZW07XFxufVxcblxcbi5jbG9zZU1vZGFsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEwcHg7XFxuICByaWdodDogLTEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbExhYmVscyB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCAzMywgMjAzKTtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDIzLCAzNiwgMjE4KTtcXG59XFxuXFxuLmFkZFNWRyB7XFxuICBtaW4taGVpZ2h0OiA4MCU7XFxufVxcblxcbi5uZXdQcm9qZWN0SGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMS41cmVtO1xcbn1cXG5cXG4uaWxsdXN0cmF0aW9uIHtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5yZW1vdmVQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucmVtb3ZlUHJvamVjdEJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDdyZW07XFxuICByaWdodDogNyU7XFxufVxcblxcbi5yZW1vdmVQcm9qZWN0QnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLmlsbHVzdHJhdGlvbiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuXFxuICAuYWRkUHJvamVjdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICB9XFxuXFxuICAuYWRkU1ZHIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDVweDtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLnRvRG9DYXJkLCAuZG9uZXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZG9uZVRvRG8sIC5lZGl0VG9EbywgLmRlbGV0ZVRvRG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAgIG1hcmdpbjogMC4ycmVtO1xcbiAgfVxcbiAgXFxuICAucHJvamVjdEZvcm0ge1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZOztBQUVkO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGtDQUFrQztFQUNsQyw2QkFBNkI7RUFDN0I7O3VCQUVxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCOzs7Ozs7R0FNQztFQUNELFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLHFEQUFxRDtFQUNyRCxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxREFBcUQ7RUFDckQsVUFBVTtBQUNaOztB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QjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMDksIDIwOSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ3NpZGViYXIgbWFpbiBtYWluJztcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoOTgsIDY2LCAyNDEpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiYSg2NSwgMzMsIDIwMywgMSkgOCUsXFxuICAgIHJnYmEoNjEsIDMyLCAyMDAsIDEpIDI3JSxcXG4gICAgcmdiYSg1LCAxNSwgMTU2LCAxKSA0OCUsXFxuICAgIHJnYigxNDEsIDcxLCAyMzMpIDEwMCVcXG4gICk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDZyZW07XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnByb2plY3RIZWFkZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5zaWRlQmFyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0RGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDEsIDEwMSwgMC4xMzcpO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnRDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA5MiU7XFxufVxcblxcbi5wcm9qZWN0Rm9ybURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA2MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RJbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IHJnYigyMywgMzYsIDIxOCkgc29saWQgMXB4O1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0biwgI2VkaXRTdWJtaXRCdXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTUsIDE1Nik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0bjpob3ZlcixcXG4jdG9Eb1N1YkJ0bjpob3ZlcixcXG4jZWRpdFN1Ym1pdEJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDM2LCAyMTgpO1xcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3RpdGxlIHRpdGxlJ1xcbiAgICAnZGF0ZSBwcmlvcml0eSdcXG4gICAgJ25vdGVzIG5vdGVzJ1xcbiAgICAnYnV0dG9uIGJ1dHRvbic7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbiN0b0RvTmFtZUlucHV0IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb0R1ZURhdGVJbnB1dCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Ob3Rlc0lucHV0IHtcXG4gIGdyaWQtYXJlYTogbm90ZXM7XFxuICByZXNpemU6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvU3ViQnRuIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCAzMywgMjAzKTtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnRvRG9DYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnRvRG9UaXRsZURpdiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kb25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoODgsIDg4LCA4OCkgOCUsXFxuICAgIHJnYig3MCwgNzAsIDcwKSAgMjclLFxcbiAgICByZ2IoOTUsIDk1LCA5NSkgIDQ4JSxcXG4gICAgcmdiKDk3LCA5NywgOTcpICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcXG4gIGJvcmRlcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kZWxldGVUb0RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiKDI1NSwgMCwgMCkgOCUsXFxuICAgIHJnYigyNTIsIDU5LCAwKSAgMjclLFxcbiAgICByZ2IoMTc3LCAwLCAwKSAgNDglLFxcbiAgICByZ2IoMjMzLCA1MSwgNTEpICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxufVxcblxcbi5kb25lVG9EbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYigwLCAxNzUsIDczKSA4JSxcXG4gICAgcmdiKDAsIDE4OSwgMTAxKSAgMjclLFxcbiAgICByZ2IoMCwgMjU1LCAxMDYpICA0OCUsXFxuICAgIHJnYigzMCwgMjQwLCAxMDApICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRvbmVUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbn1cXG5cXG4udW5kb1RvRG8ge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMzIsIDEwKTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4udW5kb1RvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTUzLCAyOCk7XFxufVxcblxcbi5lZGl0VG9EbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoMjU1LCAyMTcsIDApIDglLFxcbiAgICByZ2IoMjUyLCAxODUsIDApICAyNyUsXFxuICAgIHJnYigyNTUsIDIwOCwgMCkgIDQ4JSxcXG4gICAgcmdiKDI0MCwgMTQwLCAzMCkgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmVkaXRUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbn1cXG5cXG4uYnV0dG9uc0RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWxCbHVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbn1cXG5cXG4uY2xvc2VNb2RhbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWxMYWJlbHMge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQ6IHJnYig2NSwgMzMsIDIwMyk7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYigyMywgMzYsIDIxOCk7XFxufVxcblxcbi5hZGRTVkcge1xcbiAgbWluLWhlaWdodDogODAlO1xcbn1cXG5cXG4ubmV3UHJvamVjdEhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEuNXJlbTtcXG59XFxuXFxuLmlsbHVzdHJhdGlvbiB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4ucmVtb3ZlUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJlbW92ZVByb2plY3RCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cmVtO1xcbiAgcmlnaHQ6IDclO1xcbn1cXG5cXG4ucmVtb3ZlUHJvamVjdEJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5pbGx1c3RyYXRpb24ge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgfVxcblxcbiAgLmFkZFByb2plY3RCdXR0b24ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgfVxcblxcbiAgLmFkZFNWRyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0c0hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC50b0RvQ2FyZCwgLmRvbmV7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRvbmVUb0RvLCAuZWRpdFRvRG8sIC5kZWxldGVUb0RvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgICBtYXJnaW46IDAuMnJlbTtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3RGb3JtIHtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImltcG9ydCB7IGRvbUVsZW1lbnRzLCBwcm9qZWN0Q29udGVudCB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHByb2plY3RzQXJyLCBzZXRBY3RpdmVQcm9qZWN0LCBhY3RpdmVQcm9qZWN0IH0gZnJvbSAnLic7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvRG9Gb3JtLCByZWZyZXNoVG9Eb3MgfSBmcm9tICcuL2NyZWF0ZVRvZG8nO1xuaW1wb3J0IHsgc2F2ZVRvU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IElsbHVzdHJhdGlvbiBmcm9tICcuL2lsbHVzdHJhdGlvbi5zdmcnXG5pbXBvcnQgeyByZW5kZXJSZW1vdmVQcm9qZWN0QnRuIH0gZnJvbSAnLi9kZWxldGVQcm9qZWN0JztcblxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEZW1vUHJvamVjdCA9ICgpID0+IHtcbmlmIChwcm9qZWN0c0Fyci5sZW5ndGggPT0gMCl7ICBcbmNvbnN0IGRlbW9Qcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlbW8gUHJvamVjdCcpXG5wcm9qZWN0c0Fyci5wdXNoKGRlbW9Qcm9qZWN0KVxuZ2VuZXJhdGVQcm9qZWN0Q2FyZChkZW1vUHJvamVjdClcbn1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hQcm9qZWN0cyA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMucHJvamVjdHMudGV4dENvbnRlbnQgPSAnJztcbiAgcHJvamVjdHNBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4gZ2VuZXJhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gIGlmIChwcm9qZWN0Lm5hbWUgPT0gJycpe1xuICAgIGNvbnNvbGUubG9nKFwibm8gZGljZVwiKVxuICB9IGVsc2Uge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSBpbmRleDogJyArIHByb2plY3RzQXJyLmluZGV4T2YocHJvamVjdCkpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5pbmRleE9mKHByb2plY3QpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REaXYnKTtcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdHNBcnIuZm9yRWFjaCgob2JqKSA9PiBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0SW5kZXgpKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdEluZGV4fWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNBcnJbYCR7cHJvamVjdEluZGV4fWBdKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdUaGUgYWN0aXZlIHByb2plY3QgaXM6ICcgK1xuICAgICAgICAnSUQ6ICcgK1xuICAgICAgICBwcm9qZWN0SW5kZXggK1xuICAgICAgICAnIE5hbWU6ICcgK1xuICAgICAgICBhY3RpdmVQcm9qZWN0Lm5hbWVcbiAgICApO1xuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCgpKTtcbiAgICBnZW5lcmF0ZVRvRG9Gb3JtKCk7XG4gICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgcmVuZGVyUmVtb3ZlUHJvamVjdEJ0bigpXG4gIH0pO1xufVxufTtcblxuY29uc3QgcHJvamVjdEZvcm1JbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKS52YWx1ZTtcbiAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpXG59O1xuXG5jb25zdCByZXNldFByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICBuYW1lLnZhbHVlID0gJyc7XG59O1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0RXZlbnQgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdHNBcnIucHVzaChwcm9qZWN0Rm9ybUlucHV0KCkpO1xuICAgIGdlbmVyYXRlUHJvamVjdENhcmQocHJvamVjdEZvcm1JbnB1dCgpKTtcbiAgICAvL2RvbUVsZW1lbnRzLmFkZFByb2plY3RCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG4gICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgcmVzZXRQcm9qZWN0Rm9ybSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGlsbHVzdHJhdGlvbiA9IG5ldyBJbWFnZSgpXG4gIGlsbHVzdHJhdGlvbi5zcmMgPSBJbGx1c3RyYXRpb25cbiAgaWxsdXN0cmF0aW9uLmNsYXNzTGlzdC5hZGQoJ2lsbHVzdHJhdGlvbicpXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBuZXdQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBuZXdQcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RIZWFkZXInKVxuICBuZXdQcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJTdGFydCBhIE5ldyBQcm9qZWN0IVwiXG4gIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkZXIpXG4gIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtRGl2Jyk7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2KTtcbiAgZG9tRWxlbWVudHMucHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdElucHV0Jyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFxuICAgICdwbGFjZWhvbGRlcicsXG4gICAgJ1doYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0PydcbiAgKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdElucHV0Jyk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0U3ViQnRuLnRleHRDb250ZW50ID0gJ0NSRUFURSBQUk9KRUNUJztcbiAgZG9tRWxlbWVudHMucHJvamVjdFN1YkJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFN1YkJ0bicpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5wcm9qZWN0U3ViQnRuKTtcbiAgXG4gIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKGlsbHVzdHJhdGlvbilcblxuXG4gIHByb2plY3RGb3JtSW5wdXQoKTtcbiAgc3VibWl0UHJvamVjdEV2ZW50KCk7XG4gIHJlc2V0UHJvamVjdEZvcm0oKTtcbn07XG4iLCJpbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSAnLic7XG5pbXBvcnQgeyBzYXZlVG9TdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCBUb0RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvRG9Nb2RhbCB9IGZyb20gJy4vZWRpdFRvZG8nO1xuaW1wb3J0IHsgcHJvamVjdENvbnRlbnQgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgVHJhc2ggZnJvbSAnLi9kZWxldGUuc3ZnJ1xuaW1wb3J0IFRpY2sgZnJvbSAnLi90aWNrLnN2ZydcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vZGV0YWlscy5zdmcnXG5cbmV4cG9ydCBsZXQgbGF0ZXN0VG9EbyA9IG51bGw7XG5leHBvcnQgbGV0IGFjdGl2ZVRvRG8gPSBudWxsO1xuZXhwb3J0IGxldCBhY3RpdmVUb0RvSUQgPSBudWxsO1xuXG5jb25zdCBzZXRBY3RpdmVUb0RvID0gKHZhbHVlKSA9PiB7XG4gIGFjdGl2ZVRvRG8gPSB2YWx1ZTtcbn07XG5cbmNvbnN0IHNldExhdGVzdFRvRG8gPSAodmFsdWUpID0+IHtcbiAgbGF0ZXN0VG9EbyA9IHZhbHVlO1xufTtcblxuY29uc3Qgc2V0QWN0aXZlVG9Eb0lEID0gKHZhbHVlKSA9PiB7XG4gIGFjdGl2ZVRvRG9JRCA9IHZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb0RvcyA9ICgpID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGVudENvbnRhaW5lcicpO1xuICB0b0RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIHByb2plY3RDb250ZW50KClcbiAgZ2VuZXJhdGVUb0RvRm9ybSgpO1xuICBhY3RpdmVQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IGdlbmVyYXRlVG9Eb0NhcmQodGFzaykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb0NhcmQgPSAodG9kbykgPT4ge1xuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50Q29udGFpbmVyJyk7XG4gIGNvbnN0IHRvRG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgdG9Eb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9Eb0NhcmQnKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQ2FyZCk7XG5cbiAgY29uc29sZS5sb2coJ3BsZWFzZSBiZSByaWdodCBiZWxvdycpO1xuICBjb25zb2xlLmxvZyhgJHthY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YodG9kbyl9YCk7XG4gIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YodG9kbyk7XG4gIGNvbnN0IGNhcmRJRCA9ICd0b2RvJyArIGNhcmRJbmRleDtcbiAgdG9Eb0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGNhcmRJRCk7XG5cbiAgY29uc3QgdG9Eb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlQ2xhc3MgPSAndGl0bGVEaXYnICsgY2FyZEluZGV4O1xuICB0b0RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCh0aXRsZUNsYXNzKTtcbiAgdG9Eb1RpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvVGl0bGVEaXYpO1xuXG4gIGNvbnN0IHRvRG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvRG9EYXRlRGl2Jyk7XG4gIHRvRG9EYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuXG4gIGNvbnN0IHRvRG9Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgndG9Eb1ByaW9yaXR5RGl2Jyk7XG4gIHRvRG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gIGNvbnN0IHRvRG9Ob3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZCgndG9Eb05vdGVzRGl2Jyk7XG4gIHRvRG9Ob3Rlc0Rpdi50ZXh0Q29udGVudCA9IHRvZG8ubm90ZXM7XG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnNEaXYnKTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgY29uc3QgZG9uZUJ1dHRvblRvZ2dsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZG9uZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lVG9Eby5jbGFzc0xpc3QuYWRkKCdkb25lVG9EbycpO1xuICAgIGNvbnN0IHRpY2sgPSBuZXcgSW1hZ2UoKVxuICB0aWNrLnNyYyA9IFRpY2tcbiAgZG9uZVRvRG8uYXBwZW5kQ2hpbGQodGljaylcbiAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGRvbmVUb0RvKTtcbiAgICBkb25lVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxldCB0b0RvSW5kZXggPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgICB0b0RvSW5kZXggPSBwYXJzZUludCh0b0RvSW5kZXgpO1xuICAgICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbdG9Eb0luZGV4XTtcbiAgICAgIGFjdGl2ZVRvRG8uc3RhdHVzID0gJ2NvbXBsZXRlJztcbiAgICAgIGNvbnNvbGUubG9nKCd0byBkbzonKTtcbiAgICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgICBjb25zb2xlLmxvZygnZG9uZTonKTtcbiAgICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC5kb25lKTtcblxuICAgICAgbWFya0FzRG9uZSgpO1xuICAgICAgc2F2ZVRvU3RvcmFnZSgpO1xuICAgIH0pO1xuXG4gICAgdG9kby5zdGF0dXMgPT09ICdjb21wbGV0ZScgPyBtYXJrQXNEb25lKCkgOiBudWxsO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIG1hcmtBc0RvbmUoKSB7XG4gICAgY29uc3QgdG9Eb0lEID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkO1xuICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9Eb0lEKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCd0b0RvQ2FyZCcpO1xuICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICBsZXQgdGl0bGVDbGFzcyA9ICcudGl0bGVEaXYnICsgY2FyZEluZGV4O1xuICAgIHRpdGxlQ2xhc3MgPSB0aXRsZUNsYXNzLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0aXRsZUNsYXNzfWApO1xuICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKHRpdGxlQ2xhc3MpO1xuICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRUb0RvLmNsYXNzTGlzdC5hZGQoJ2VkaXRUb0RvJyk7XG4gIGNvbnN0IGRldGFpbHMgPSBuZXcgSW1hZ2UoKVxuICBkZXRhaWxzLnNyYyA9IERldGFpbHNcbiAgZWRpdFRvRG8uYXBwZW5kQ2hpbGQoZGV0YWlscylcbiAgZWRpdFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0QWN0aXZlVG9Eb0lEKGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZCk7XG4gICAgbGV0IGVkaXRNZSA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZC5zbGljZSg0KTtcbiAgICBlZGl0TWUgPSBwYXJzZUludChlZGl0TWUpO1xuICAgIHNldEFjdGl2ZVRvRG8oYWN0aXZlUHJvamVjdC50YXNrc1tlZGl0TWVdKTtcbiAgICBnZW5lcmF0ZVRvRG9Nb2RhbCgpO1xuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0VG9Ebyk7XG5cbiAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVUb0RvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRvRG8nKTtcbiAgY29uc3QgdHJhc2ggPSBuZXcgSW1hZ2UoKVxuICB0cmFzaC5zcmMgPSBUcmFzaFxuICBkZWxldGVUb0RvLmFwcGVuZENoaWxkKHRyYXNoKVxuICBkZWxldGVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZU1lID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIHNldEFjdGl2ZVRvRG8oYWN0aXZlUHJvamVjdC50YXNrc1tkZWxldGVNZV0pO1xuICAgIGNvbnN0IGluZGV4T2ZBY3RpdmUgPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YoYWN0aXZlVG9Ebyk7XG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZSB0aGlzOiAnICsgaW5kZXhPZkFjdGl2ZSk7XG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5zcGxpY2UoaW5kZXhPZkFjdGl2ZSwgMSk7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG4gIH0pO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRvRG8pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb05hbWVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCInVG8tRG8nIHRpdGxlLi4uXCIpO1xuICB0b0RvTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvRG9Gb3JtJyk7XG4gIHRvRG9OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb05hbWVJbnB1dCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b0RvRm9ybScpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb1ByaW9yaXR5SW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdG9Eb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b0RvRm9ybScpO1xuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpO1xuICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cgUHJpb3JpdHknO1xuICBjb25zdCByZWd1bGFyUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgcmVndWxhclByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnUmVndWxhcicpO1xuICByZWd1bGFyUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUmVndWxhciBQcmlvcml0eSc7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoIFByaW9yaXR5JztcblxuICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQocmVndWxhclByaW9yaXR5KTtcbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9Qcmlvcml0eSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvTm90ZXNJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9Ob3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOb3Rlcy4uLicpO1xuICB0b0RvTm90ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b0RvRm9ybScpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNJbnB1dCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQgPSAoaWQsIHRleHQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvU3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvRG9TdWJCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHRvRG9TdWJCdG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICB0b0RvU3ViQnRuLmNsYXNzTGlzdC5hZGQoJ3RvRG9Gb3JtJyk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9TdWJCdG4pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb0Zvcm0gPSAoKSA9PiB7XG4gICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRlbnRDb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SGVhZGVyJyk7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBhY3RpdmVQcm9qZWN0Lm5hbWU7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gIGNvbnN0IHRvRG9Gb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9Gb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ3RvRG9Gb3JtRGl2Jyk7XG5cbiAgZ2VuZXJhdGVUb0RvTmFtZUlucHV0KCd0b0RvTmFtZUlucHV0JywgdG9Eb0Zvcm1EaXYpO1xuICBnZW5lcmF0ZVRvRG9EYXRlSW5wdXQoJ3RvRG9EdWVEYXRlSW5wdXQnLCB0b0RvRm9ybURpdik7XG4gIGdlbmVyYXRlVG9Eb1ByaW9yaXR5SW5wdXQoJ3RvRG9Qcmlvcml0eUlucHV0JywgdG9Eb0Zvcm1EaXYpO1xuICBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0KCd0b0RvTm90ZXNJbnB1dCcsIHRvRG9Gb3JtRGl2KTtcbiAgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQoJ3RvRG9TdWJCdG4nLCAnQUREIFRPRE8nLCB0b0RvRm9ybURpdik7XG5cbiBcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRm9ybURpdik7XG5cbiAgY29uc3QgdG9Eb0Zvcm1JbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRG9OYW1lSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRG9EdWVEYXRlSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvUHJpb3JpdHlJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvRG9Ob3Rlc0lucHV0JykudmFsdWU7XG4gICAgY29uc3Qgc3RhdHVzID0gJ2luY29tcGxldGUnO1xuICAgIHJldHVybiBuZXcgVG9EbyhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cyk7XG4gIH07XG5cbiAgY29uc3QgdG9Eb1N1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvU3ViQnRuJyk7XG4gIHRvRG9TdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5wdXNoKHRvRG9Gb3JtSW5wdXQoKSk7XG4gICAgc2V0TGF0ZXN0VG9EbyhhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDEpO1xuICAgIHNldEFjdGl2ZVRvRG8obGF0ZXN0VG9Ebyk7XG4gICAgY29uc29sZS5sb2coJ2xhdGVzdCAnICsgbGF0ZXN0VG9Ebyk7XG4gICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgc2V0QWN0aXZlVG9EbyhudWxsKTtcbiAgICBjb25zb2xlLmxvZygndGhpcyBwcm9qZWN0cyB0b2RvczonKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFJlbW92ZSBmcm9tICcuL3JlbW92ZS5zdmcnXG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0LCBzZXRBY3RpdmVQcm9qZWN0LCBwcm9qZWN0c0Fyciwgc2V0UHJvamVjdHNBcnIgfSBmcm9tICcuJ1xuaW1wb3J0IHsgc2F2ZVRvU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSdcbmltcG9ydCB7IGdlbmVyYXRlUHJvamVjdEZvcm0sIHJlZnJlc2hQcm9qZWN0cyB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCdcbmltcG9ydCB7IGRvbUVsZW1lbnRzLCBwcm9qZWN0Q29udGVudCB9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IHsgZ2VuZXJhdGVUb0RvRm9ybSwgcmVmcmVzaFRvRG9zIH0gZnJvbSAnLi9jcmVhdGVUb2RvJ1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCA9ICgncmVtb3ZlUHJvamVjdCcpXG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IG5ldyBJbWFnZSgpXG4gICAgcmVtb3ZlSWNvbi5zcmMgPSBSZW1vdmVcbiAgICByZW1vdmVJY29uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3RCdG4nKVxuICAgIHJlbW92ZUJ1dHRvbi5hcHBlbmRDaGlsZChyZW1vdmVJY29uKVxuICAgIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbilcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5pbmRleE9mKGFjdGl2ZVByb2plY3QpXG4gICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0c0Fyci5zcGxpY2UoYWN0aXZlUHJvamVjdEluZGV4LCAxKVxuICAgICAgICBwb3N0UmVtb3ZlUmVzZXQoKVxuICAgICAgICBzYXZlVG9TdG9yYWdlKClcbiAgICAgICAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpKTtcbiAgICB9KVxufSBcblxuZXhwb3J0IGNvbnN0IHBvc3RSZW1vdmVSZXNldCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdBY3RpdmVQcm9qZWN0ID0gcHJvamVjdHNBcnJbMF07XG4gICAgc2V0QWN0aXZlUHJvamVjdChuZXdBY3RpdmVQcm9qZWN0KVxuICAgIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KCkpO1xuICAgIHJlZnJlc2hQcm9qZWN0cygpO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvamVjdEV2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmVQcm9qZWN0JylcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5pbmRleE9mKGFjdGl2ZVByb2plY3QpXG4gICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0c0Fyci5zcGxpY2UoYWN0aXZlUHJvamVjdEluZGV4LCAxKVxuICAgICAgICBwb3N0UmVtb3ZlUmVzZXQoKVxuICAgIH0pXG59XG5cblxuXG5leHBvcnQgY29uc3QgcmVuZGVyUmVtb3ZlUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBnZW5lcmF0ZUJ1dHRvbigpXG4gICAgLy9yZW1vdmVQcm9qZWN0RXZlbnQoKVxufSIsImltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVEZW1vUHJvamVjdCwgZ2VuZXJhdGVQcm9qZWN0Rm9ybSwgcmVmcmVzaFByb2plY3RzIH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgc2F2ZVRvU3RvcmFnZSwgbG9hZEZyb21TdG9yYWdlLCBjbGVhclN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBhY3RpdmVUb0RvLCBhY3RpdmVUb0RvSUQgfSBmcm9tIFwiLi9jcmVhdGVUb2RvXCI7XG5pbXBvcnQgQWRkIGZyb20gJy4vYWRkLnN2ZydcblxuXG4vLyBkb20gZWxlbWVudHNcblxuZXhwb3J0IGNvbnN0IGRvbUVsZW1lbnRzID0gKCgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHByb2plY3RTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgaGVhZGVyRGl2LFxuICAgIGxvZ28sXG4gICAgc2lkZUJhckRpdixcbiAgICBwcm9qZWN0c0hlYWRlcixcbiAgICBwcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0QnV0dG9uLFxuICAgIG1haW5Db250ZW50Q29udGFpbmVyLFxuICAgIHByb2plY3RGb3JtRGl2LFxuICAgIHByb2plY3RJbnB1dCxcbiAgICBwcm9qZWN0U3ViQnRuLFxuICAgIG1vZGFsLFxuICAgIG1vZGFsQmx1clxuICB9O1xufSkoKTtcblxuLy8gd2luZG93IGNvbnRhaW5lclxuXG5jb25zdCByZW5kZXJNYXN0ZXJDb250YWluZXIgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5jb250YWluZXIpO1xufTtcblxuLy8gaGVhZGVyXG5cbmNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlckRpdicpO1xuICBkb21FbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMuaGVhZGVyRGl2KTtcbn07XG5cbi8vbG9nb1xuXG5jb25zdCByZW5kZXJMb2dvID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5sb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgZG9tRWxlbWVudHMubG9nby50ZXh0Q29udGVudCA9ICdQcm9qZWN0IFRPRE9zJztcbiAgZG9tRWxlbWVudHMuaGVhZGVyRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLmxvZ28pO1xufTtcblxuLy9zaWRlYmFyXG5cbi8vc2lkZWJhciBjb250YWluZXJcblxuXG5jb25zdCByZW5kZXJTaWRlQmFyQ29udGFpbmVyID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5zaWRlQmFyRGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJEaXYnKTtcbiAgZG9tRWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnNpZGVCYXJEaXYpO1xufTtcblxuLy9zaWRlYmFyIGhlYWRlclxuXG5jb25zdCByZW5kZXJTaWRlQmFySGVhZGVyID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5wcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0hlYWRlcicpO1xuICBkb21FbGVtZW50cy5zaWRlQmFyRGl2LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLnByb2plY3RzSGVhZGVyKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSAnUFJPSkVDVFMnO1xufTtcblxuLy9zaWRlYmFyIHByb2plY3QgbmF2IGNvbnRhaW5lclxuXG5jb25zdCByZW5kZXJQcm9qZWN0c0NvbnRhaW5lciA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMucHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNEaXYnKTtcbiAgZG9tRWxlbWVudHMuc2lkZUJhckRpdi5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5wcm9qZWN0cyk7XG59O1xuXG4vL3NpZGViYXIgYWRkIG5ldyBwcm9qZWN0XG5cbmNvbnN0IHJlbmRlckFkZFByb2plY3RCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZCA9IG5ldyBJbWFnZSgpXG4gIGFkZC5zcmMgPSBBZGRcbiAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZFNWRycpXG4gIGRvbUVsZW1lbnRzLmFkZFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkKVxuICBkb21FbGVtZW50cy5hZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgZG9tRWxlbWVudHMuc2lkZUJhckRpdi5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5hZGRQcm9qZWN0QnV0dG9uKTtcbiAgZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xufTtcblxuLy9zaWRlYmFyIHJlbmRlcmluZ1xuXG5jb25zdCByZW5kZXJTaWRlQmFyID0gKCkgPT4ge1xuICByZW5kZXJTaWRlQmFyQ29udGFpbmVyKCk7XG4gIHJlbmRlclNpZGVCYXJIZWFkZXIoKTtcbiAgcmVuZGVyUHJvamVjdHNDb250YWluZXIoKTtcbiAgcmVuZGVyQWRkUHJvamVjdEJ0bigpO1xuICByZWZyZXNoUHJvamVjdHMoKTtcbiAgXG4gIGRvbUVsZW1lbnRzLmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpO1xuICB9KTtcbiAgXG59XG5cbi8vbWFpbiBjb250ZW50IGNvbnRhaW5lclxuXG5jb25zdCByZW5kZXJDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGVudENvbnRhaW5lcicpO1xuICBkb21FbGVtZW50cy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIpO1xufVxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0Q29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdENvbnRlbnRDb250YWluZXInKTtcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcicpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gYWN0aXZlUHJvamVjdC5uYW1lO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICByZXR1cm4gcHJvamVjdENvbnRlbnRDb250YWluZXI7XG59O1xuXG5cblxuXG5cblxuXG5cbi8vbW9kYWwgZnVuY3Rpb25zXG5cbmV4cG9ydCBjb25zdCByZW5kZXJNb2RhbEJsdXIgPSAoKSA9PiB7XG5kb21FbGVtZW50cy5tb2RhbEJsdXIuY2xhc3NMaXN0LmFkZCgnbW9kYWxCbHVyJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLm1vZGFsQmx1cik7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlck1vZGFsID0gKCkgPT4ge1xuICByZW5kZXJNb2RhbEJsdXIoKVxuICBkb21FbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBkb21FbGVtZW50cy5tb2RhbEJsdXIuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMubW9kYWwpO1xufVxuXG5cblxuXG4vL2Z1bGwgdWkgcmVuZGVyXG5cbmNvbnN0IHJlbmRlclVJID0gKCgpID0+IHtcbiAgLy9jbGVhclN0b3JhZ2UoKVxuICBsb2FkRnJvbVN0b3JhZ2UoKVxuICByZW5kZXJNYXN0ZXJDb250YWluZXIoKTtcbiAgcmVuZGVySGVhZGVyKCk7XG4gIHJlbmRlckxvZ28oKTtcbiAgcmVuZGVyU2lkZUJhcigpXG4gIHJlbmRlckNvbnRlbnRDb250YWluZXIoKVxuICBnZW5lcmF0ZURlbW9Qcm9qZWN0KClcbiAgZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpXG4gIHJlbmRlck1vZGFsKClcbiAgLy9yZWZyZXNoUHJvamVjdHMoKVxufSkoKTsiLCJpbXBvcnQgeyBzYXZlVG9TdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7XG4gIGFjdGl2ZVRvRG8sXG4gIGdlbmVyYXRlVG9Eb05hbWVJbnB1dCxcbiAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0LFxuICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0LFxuICBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0LFxuICBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCxcbn0gZnJvbSAnLi9jcmVhdGVUb2RvJztcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tICcuJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdC5zdmcnXG5cbmNvbnN0IGdlbmVyZXJhdGVDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQmx1cicpO1xuICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSAneCc7XG4gIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2xvc2VNb2RhbCcpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZU1vZGFsKTtcbiAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcbiAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuICAgIG1vZGFsLnRleHRDb250ZW50ID0gJyc7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxCbHVyJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuXG4gIGNvbnN0IHRvRG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdG9Eb05hbWUuY2xhc3NMaXN0LmFkZCgndG9Eb05hbWVNb2RhbCcpO1xuICBjb25zb2xlLmxvZyhhY3RpdmVUb0RvKTtcbiAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBgJHthY3RpdmVUb0RvLm5hbWV9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb05hbWUpO1xuXG4gIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvRG9EdWVEYXRlTW9kYWwnKTtcbiAgdG9Eb0R1ZURhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzID1cIm1vZGFsTGFiZWxzXCI+RHVlIERhdGU6IDwvc3Bhbj4ke2FjdGl2ZVRvRG8uZGF0ZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSk7XG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b0RvUHJpb3JpdHlNb2RhbCcpO1xuICB0b0RvUHJpb3JpdHkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzID1cIm1vZGFsTGFiZWxzXCI+UHJpb3JpdHk6IDwvc3Bhbj4ke2FjdGl2ZVRvRG8ucHJpb3JpdHl9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5KTtcblxuICBjb25zdCB0b0RvTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb05vdGVzLmNsYXNzTGlzdC5hZGQoJ3RvRG9Ob3Rlc01vZGFsJyk7XG4gIHRvRG9Ob3Rlcy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Ob3RlczogPC9zcGFuPiR7YWN0aXZlVG9Eby5ub3Rlc31gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTm90ZXMpO1xuXG4gIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpO1xuXG4gIGNvbnN0IGVkaXRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRUb0RvLmNsYXNzTGlzdC5hZGQoJ2VkaXRUb0RvJyk7XG4gIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKVxuICBlZGl0LnNyYyA9IEVkaXRcbiAgZWRpdFRvRG8uYXBwZW5kQ2hpbGQoZWRpdClcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZWRpdFRvRG8pO1xuICBlZGl0VG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGdlbmVyYXRlVG9Eb05hbWVJbnB1dCgnZWRpdE5hbWVJbnB1dCcsIG1vZGFsKTtcbiAgICBnZW5lcmF0ZVRvRG9EYXRlSW5wdXQoJ2VkaXREYXRlSW5wdXQnLCBtb2RhbCk7XG4gICAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dCgnZWRpdFByaW9yaXR5SW5wdXQnLCBtb2RhbCk7XG4gICAgZ2VuZXJhdGVUb0RvTm90ZXNJbnB1dCgnZWRpdE5vdGVzSW5wdXQnLCBtb2RhbCk7XG4gICAgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQoJ2VkaXRTdWJtaXRCdXR0b24nLCAnU1VCTUlUIENIQU5HRVMnLCBtb2RhbCk7XG4gICAgZ2VuZXJlcmF0ZUNsb3NlQnV0dG9uKCk7XG4gICAgY29uc3QgZWRpdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdE5hbWVJbnB1dCcpO1xuICAgIGVkaXROYW1lLnZhbHVlID0gYWN0aXZlVG9Eby5uYW1lO1xuICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXREYXRlSW5wdXQnKTtcbiAgICBlZGl0RGF0ZS52YWx1ZSA9IGFjdGl2ZVRvRG8uZGF0ZTtcbiAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFByaW9yaXR5SW5wdXQnKTtcbiAgICBlZGl0UHJpb3JpdHkudmFsdWUgPSBhY3RpdmVUb0RvLnByaW9yaXR5O1xuICAgIGNvbnN0IGVkaXROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Tm90ZXNJbnB1dCcpO1xuICAgIGVkaXROb3Rlcy52YWx1ZSA9IGFjdGl2ZVRvRG8ubm90ZXM7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZCgnZWRpdFN1Ym1pdEJ1dHRvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZVRvRG8ubmFtZSA9IGVkaXROYW1lLnZhbHVlO1xuICAgICAgICBhY3RpdmVUb0RvLmRhdGUgPSBlZGl0RGF0ZS52YWx1ZTtcbiAgICAgICAgYWN0aXZlVG9Eby5wcmlvcml0eSA9IGVkaXRQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgYWN0aXZlVG9Eby5ub3RlcyA9IGVkaXROb3Rlcy52YWx1ZTtcbiAgICAgICAgbW9kYWwudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwKSc7XG4gICAgICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwKSc7XG5cbiAgICAgICAgbGV0IGNhcmRJbmRleCA9IGFjdGl2ZVByb2plY3QudGFza3MuaW5kZXhPZihhY3RpdmVUb0RvKTtcbiAgICAgICAgY29uc3QgdGl0bGVDbGFzcyA9ICcudGl0bGVEaXYnICsgY2FyZEluZGV4O1xuXG4gICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZUNsYXNzKTtcblxuICAgICAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IGVkaXROYW1lLnZhbHVlO1xuXG4gICAgICAgIHNhdmVUb1N0b3JhZ2UoKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgc2F2ZVRvU3RvcmFnZSwgbG9hZEZyb21TdG9yYWdlLCBjbGVhclN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xuXG5leHBvcnQgbGV0IHByb2plY3RzQXJyID0gW107XG5cbmV4cG9ydCBjb25zdCBzZXRQcm9qZWN0c0FyciA9ICh2YWx1ZSkgPT4ge1xuICBwcm9qZWN0c0FyciA9IHZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbn07XG5cbi8vbG9hZEZyb21TdG9yYWdlKCk7XG5cbi8vZ2VuZXJhdGVVSSgpO1xuLy9nZW5lcmF0ZVByb2plY3RGb3JtKCk7XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmRvbmUgPSBbXTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgeyBwcm9qZWN0c0Fyciwgc2V0UHJvamVjdHNBcnIgfSBmcm9tICcuJztcblxuLy9MT0NBTCBTVE9SQUdFXG5cbmZ1bmN0aW9uIHNhdmVUb1N0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycicsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRGcm9tU3RvcmFnZSgpIHtcbiAgY29uc3QgbG9hZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNBcnInKSk7XG5cbiAgc2V0UHJvamVjdHNBcnIobG9hZFByb2plY3RzKTtcbiAgaWYgKHByb2plY3RzQXJyID09PSBudWxsKSBzZXRQcm9qZWN0c0FycihbXSk7XG4gIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBzZXRQcm9qZWN0c0FycihbXSk7XG4gLy8gcmVzZXREaXNwbGF5KCk7XG59XG5cbmV4cG9ydCB7IHNhdmVUb1N0b3JhZ2UsIGxvYWRGcm9tU3RvcmFnZSwgY2xlYXJTdG9yYWdlIH07XG4iLCJjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kb20uanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9