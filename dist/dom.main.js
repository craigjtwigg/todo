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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  box-sizing: border-box;\n}\nbutton {\n  background: transparent;\n  border: none;\n\n}\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  background-color: rgb(212, 209, 209);\n}\n\n.container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 25% 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    'header header header'\n    'sidebar main main';\n}\n\n.headerDiv {\n  grid-area: header;\n  display: flex;\n  background: rgb(98, 66, 241);\n  background: linear-gradient(\n    70deg,\n    rgba(65, 33, 203, 1) 8%,\n    rgba(61, 32, 200, 1) 27%,\n    rgba(5, 15, 156, 1) 48%,\n    rgb(141, 71, 233) 100%\n  );\n  color: white;\n  width: 100%;\n  height: 5rem;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 0 6rem;\n}\n\nh1 {\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n  display: block;\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.sideBarDiv {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-area: sidebar;\n  margin: 0 1rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  height: 500px;\n  width: 100%;\n}\n\n.projectsHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n.projectDiv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(161, 160, 160, 0.137);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.projectDiv:hover {\n  cursor: pointer;\n  background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n  grid-area: main;\n  margin: 0 1rem;\n  border-radius: 5%;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  min-height: 500px;\n  width: 92%;\n}\n\n.projectFormDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  padding-top: 2rem;\n  align-items: center;\n}\n\n#projectInput {\n  display: block;\n  width: 60%;\n  border-radius: 0.5rem;\n  height: 3rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n  border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn, #editSubmitButton {\n  display: block;\n  background-color: rgb(5, 15, 156);\n  color: rgb(255, 255, 255);\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover,\n#toDoSubBtn:hover,\n#editSubmitButton {\n  cursor: pointer;\n  background-color: rgb(23, 36, 218);\n}\n\n.projectContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 1rem;\n}\n\n.toDoFormDiv {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr fr 1fr;\n  grid-template-areas:\n    'title title'\n    'date priority'\n    'notes notes'\n    'button button';\n  justify-items: center;\n  padding: 1.5rem;\n}\n\n#toDoNameInput {\n  grid-area: title;\n  display: block;\n  width: 90%;\n  border-radius: 0.5rem;\n  height: 2.2rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n  grid-area: date;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: right;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n  grid-area: priority;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: left;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n  grid-area: notes;\n  resize: none;\n  display: block;\n  width: 90%;\n  min-height: 80px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background-color: rgba(161, 160, 160, 0.137);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.toDoTitleDiv {\n  font-size: 2rem;\n}\n\n.done {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: linear-gradient(\n    70deg,\n    rgb(88, 88, 88) 8%,\n    rgb(70, 70, 70)  27%,\n    rgb(95, 95, 95)  48%,\n    rgb(97, 97, 97)  100%\n  );\n  color: rgb(172, 172, 172);\n  border: rgb(117, 117, 117);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.strike {\n  align-self: center;\n  justify-self: center;\n  text-decoration: line-through;\n}\n\n.deleteToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 0, 0) 8%,\n    rgb(252, 59, 0)  27%,\n    rgb(177, 0, 0)  48%,\n    rgb(233, 51, 51)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.doneToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(0, 175, 73) 8%,\n    rgb(0, 189, 101)  27%,\n    rgb(0, 255, 106)  48%,\n    rgb(30, 240, 100)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.doneToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.undoToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 132, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.undoToDo:hover {\n  cursor: pointer;\n  background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  margin: 0 1rem;\n  cursor: pointer;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 217, 0) 8%,\n    rgb(252, 185, 0)  27%,\n    rgb(255, 208, 0)  48%,\n    rgb(240, 140, 30)  100%\n  );\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.editToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.buttonsDiv {\n  display: flex;\n}\n\n.modalBlur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.719);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  transform: scale(0);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  transform: scale(0);\n  width: 60%;\n  height: 60%;\n  background-color: rgb(218, 218, 218);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n  cursor: pointer;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 15px;\n}\n\n.modalLabels {\n  font-weight: 900;\n}\n\n.addProjectButton {\n  grid-area: button;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  height: 150px;\n  width: max-content;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n  cursor: pointer;\n  background: rgb(23, 36, 218);\n}\n\n.addSVG {\n  min-height: 80%;\n}\n\n.newProjectHeader {\n  text-align: center;\n  margin: 1.5rem;\n}\n\n.illustration {\n  height: 200px;\n}\n\n.removeProject {\n  background: transparent;\n  position: absolute;\n}\n\n.removeProjectBtn {\n  position: absolute;\n  top: 7rem;\n  right: 7%;\n}\n\n.removeProjectBtn:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\nbutton {\n  background: transparent;\n  border: none;\n\n}\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  background-color: rgb(212, 209, 209);\n}\n\n.container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 25% 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    'header header header'\n    'sidebar main main';\n}\n\n.headerDiv {\n  grid-area: header;\n  display: flex;\n  background: rgb(98, 66, 241);\n  background: linear-gradient(\n    70deg,\n    rgba(65, 33, 203, 1) 8%,\n    rgba(61, 32, 200, 1) 27%,\n    rgba(5, 15, 156, 1) 48%,\n    rgb(141, 71, 233) 100%\n  );\n  color: white;\n  width: 100%;\n  height: 5rem;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 0 6rem;\n}\n\nh1 {\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n  display: block;\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.sideBarDiv {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-area: sidebar;\n  margin: 0 1rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  height: 500px;\n  width: 100%;\n}\n\n.projectsHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n.projectDiv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(161, 160, 160, 0.137);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.projectDiv:hover {\n  cursor: pointer;\n  background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n  grid-area: main;\n  margin: 0 1rem;\n  border-radius: 5%;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  min-height: 500px;\n  width: 92%;\n}\n\n.projectFormDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  padding-top: 2rem;\n  align-items: center;\n}\n\n#projectInput {\n  display: block;\n  width: 60%;\n  border-radius: 0.5rem;\n  height: 3rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n  border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn, #editSubmitButton {\n  display: block;\n  background-color: rgb(5, 15, 156);\n  color: rgb(255, 255, 255);\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover,\n#toDoSubBtn:hover,\n#editSubmitButton {\n  cursor: pointer;\n  background-color: rgb(23, 36, 218);\n}\n\n.projectContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 1rem;\n}\n\n.toDoFormDiv {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr fr 1fr;\n  grid-template-areas:\n    'title title'\n    'date priority'\n    'notes notes'\n    'button button';\n  justify-items: center;\n  padding: 1.5rem;\n}\n\n#toDoNameInput {\n  grid-area: title;\n  display: block;\n  width: 90%;\n  border-radius: 0.5rem;\n  height: 2.2rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n  grid-area: date;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: right;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n  grid-area: priority;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: left;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n  grid-area: notes;\n  resize: none;\n  display: block;\n  width: 90%;\n  min-height: 80px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background-color: rgba(161, 160, 160, 0.137);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.toDoTitleDiv {\n  font-size: 2rem;\n}\n\n.done {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background: linear-gradient(\n    70deg,\n    rgb(88, 88, 88) 8%,\n    rgb(70, 70, 70)  27%,\n    rgb(95, 95, 95)  48%,\n    rgb(97, 97, 97)  100%\n  );\n  color: rgb(172, 172, 172);\n  border: rgb(117, 117, 117);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.strike {\n  align-self: center;\n  justify-self: center;\n  text-decoration: line-through;\n}\n\n.deleteToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 0, 0) 8%,\n    rgb(252, 59, 0)  27%,\n    rgb(177, 0, 0)  48%,\n    rgb(233, 51, 51)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.doneToDo {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(\n    70deg,\n    rgb(0, 175, 73) 8%,\n    rgb(0, 189, 101)  27%,\n    rgb(0, 255, 106)  48%,\n    rgb(30, 240, 100)  100%\n  );\n  color: white;\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.doneToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.undoToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 132, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.undoToDo:hover {\n  cursor: pointer;\n  background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  margin: 0 1rem;\n  cursor: pointer;\n  background: linear-gradient(\n    70deg,\n    rgb(255, 217, 0) 8%,\n    rgb(252, 185, 0)  27%,\n    rgb(255, 208, 0)  48%,\n    rgb(240, 140, 30)  100%\n  );\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 30px;\n  padding: 0.6rem;\n}\n\n.editToDo:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n}\n\n.buttonsDiv {\n  display: flex;\n}\n\n.modalBlur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.719);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  transform: scale(0);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  transform: scale(0);\n  width: 60%;\n  height: 60%;\n  background-color: rgb(218, 218, 218);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n  cursor: pointer;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 15px;\n}\n\n.modalLabels {\n  font-weight: 900;\n}\n\n.addProjectButton {\n  grid-area: button;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  height: 150px;\n  width: max-content;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n  cursor: pointer;\n  background: rgb(23, 36, 218);\n}\n\n.addSVG {\n  min-height: 80%;\n}\n\n.newProjectHeader {\n  text-align: center;\n  margin: 1.5rem;\n}\n\n.illustration {\n  height: 200px;\n}\n\n.removeProject {\n  background: transparent;\n  position: absolute;\n}\n\n.removeProjectBtn {\n  position: absolute;\n  top: 7rem;\n  right: 7%;\n}\n\n.removeProjectBtn:hover {\n  cursor: pointer;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMElBQTBJO0FBQzFJLG1JQUFtSTtBQUNuSTtBQUNBLDZDQUE2QyxjQUFjLDJCQUEyQixHQUFHLFVBQVUsNEJBQTRCLGlCQUFpQixLQUFLLFFBQVEsNENBQTRDLG9CQUFvQixjQUFjLHlDQUF5QyxHQUFHLGdCQUFnQixrQkFBa0IsY0FBYyx1Q0FBdUMsa0NBQWtDLDhFQUE4RSxHQUFHLGdCQUFnQixzQkFBc0Isa0JBQWtCLGlDQUFpQyx5S0FBeUssaUJBQWlCLGdCQUFnQixpQkFBaUIsb0JBQW9CLDRCQUE0Qix3QkFBd0IsOEJBQThCLEdBQUcsUUFBUSxpQkFBaUIsNENBQTRDLDJEQUEyRCxHQUFHLG9CQUFvQixtQkFBbUIsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLDJCQUEyQix1QkFBdUIsbUJBQW1CLHdCQUF3QixpREFBaUQsMERBQTBELGtCQUFrQixnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLHNCQUFzQixHQUFHLGlCQUFpQixrQkFBa0Isd0JB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WUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEs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Qjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxpREFBYztBQUNoQjtBQUNBOztBQUV3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ1ZwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRvbS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMDksIDIwOSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ3NpZGViYXIgbWFpbiBtYWluJztcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoOTgsIDY2LCAyNDEpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiYSg2NSwgMzMsIDIwMywgMSkgOCUsXFxuICAgIHJnYmEoNjEsIDMyLCAyMDAsIDEpIDI3JSxcXG4gICAgcmdiYSg1LCAxNSwgMTU2LCAxKSA0OCUsXFxuICAgIHJnYigxNDEsIDcxLCAyMzMpIDEwMCVcXG4gICk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDZyZW07XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnByb2plY3RIZWFkZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5zaWRlQmFyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0RGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDEsIDEwMSwgMC4xMzcpO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnRDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA5MiU7XFxufVxcblxcbi5wcm9qZWN0Rm9ybURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA2MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RJbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IHJnYigyMywgMzYsIDIxOCkgc29saWQgMXB4O1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0biwgI2VkaXRTdWJtaXRCdXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTUsIDE1Nik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0bjpob3ZlcixcXG4jdG9Eb1N1YkJ0bjpob3ZlcixcXG4jZWRpdFN1Ym1pdEJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDM2LCAyMTgpO1xcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3RpdGxlIHRpdGxlJ1xcbiAgICAnZGF0ZSBwcmlvcml0eSdcXG4gICAgJ25vdGVzIG5vdGVzJ1xcbiAgICAnYnV0dG9uIGJ1dHRvbic7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbiN0b0RvTmFtZUlucHV0IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb0R1ZURhdGVJbnB1dCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Ob3Rlc0lucHV0IHtcXG4gIGdyaWQtYXJlYTogbm90ZXM7XFxuICByZXNpemU6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvU3ViQnRuIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCAzMywgMjAzKTtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnRvRG9DYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnRvRG9UaXRsZURpdiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kb25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoODgsIDg4LCA4OCkgOCUsXFxuICAgIHJnYig3MCwgNzAsIDcwKSAgMjclLFxcbiAgICByZ2IoOTUsIDk1LCA5NSkgIDQ4JSxcXG4gICAgcmdiKDk3LCA5NywgOTcpICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcXG4gIGJvcmRlcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kZWxldGVUb0RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiKDI1NSwgMCwgMCkgOCUsXFxuICAgIHJnYigyNTIsIDU5LCAwKSAgMjclLFxcbiAgICByZ2IoMTc3LCAwLCAwKSAgNDglLFxcbiAgICByZ2IoMjMzLCA1MSwgNTEpICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxufVxcblxcbi5kb25lVG9EbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYigwLCAxNzUsIDczKSA4JSxcXG4gICAgcmdiKDAsIDE4OSwgMTAxKSAgMjclLFxcbiAgICByZ2IoMCwgMjU1LCAxMDYpICA0OCUsXFxuICAgIHJnYigzMCwgMjQwLCAxMDApICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRvbmVUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbn1cXG5cXG4udW5kb1RvRG8ge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMzIsIDEwKTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4udW5kb1RvRG86aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTUzLCAyOCk7XFxufVxcblxcbi5lZGl0VG9EbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoMjU1LCAyMTcsIDApIDglLFxcbiAgICByZ2IoMjUyLCAxODUsIDApICAyNyUsXFxuICAgIHJnYigyNTUsIDIwOCwgMCkgIDQ4JSxcXG4gICAgcmdiKDI0MCwgMTQwLCAzMCkgIDEwMCVcXG4gICk7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmVkaXRUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbn1cXG5cXG4uYnV0dG9uc0RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWxCbHVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbn1cXG5cXG4uY2xvc2VNb2RhbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWxMYWJlbHMge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQ6IHJnYig2NSwgMzMsIDIwMyk7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYigyMywgMzYsIDIxOCk7XFxufVxcblxcbi5hZGRTVkcge1xcbiAgbWluLWhlaWdodDogODAlO1xcbn1cXG5cXG4ubmV3UHJvamVjdEhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEuNXJlbTtcXG59XFxuXFxuLmlsbHVzdHJhdGlvbiB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4ucmVtb3ZlUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJlbW92ZVByb2plY3RCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cmVtO1xcbiAgcmlnaHQ6IDclO1xcbn1cXG5cXG4ucmVtb3ZlUHJvamVjdEJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsNkJB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Z2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICdzaWRlYmFyIG1haW4gbWFpbic7XFxufVxcblxcbi5oZWFkZXJEaXYge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogcmdiKDk4LCA2NiwgMjQxKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYmEoNjUsIDMzLCAyMDMsIDEpIDglLFxcbiAgICByZ2JhKDYxLCAzMiwgMjAwLCAxKSAyNyUsXFxuICAgIHJnYmEoNSwgMTUsIDE1NiwgMSkgNDglLFxcbiAgICByZ2IoMTQxLCA3MSwgMjMzKSAxMDAlXFxuICApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA2cmVtO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0SGVhZGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4uc2lkZUJhckRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjAsIDE2MCwgMC4xMzcpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucHJvamVjdERpdjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTAxLCAxMDEsIDAuMTM3KTtcXG59XFxuXFxuLm1haW5Db250ZW50Q29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogOTIlO1xcbn1cXG5cXG4ucHJvamVjdEZvcm1EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0SW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0SW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiByZ2IoMjMsIDM2LCAyMTgpIHNvbGlkIDFweDtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG4sICNlZGl0U3VibWl0QnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDE1LCAxNTYpO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG46aG92ZXIsXFxuI3RvRG9TdWJCdG46aG92ZXIsXFxuI2VkaXRTdWJtaXRCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAzNiwgMjE4KTtcXG59XFxuXFxuLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9Eb0Zvcm1EaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICd0aXRsZSB0aXRsZSdcXG4gICAgJ2RhdGUgcHJpb3JpdHknXFxuICAgICdub3RlcyBub3RlcydcXG4gICAgJ2J1dHRvbiBidXR0b24nO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4jdG9Eb05hbWVJbnB1dCB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9EdWVEYXRlSW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Qcmlvcml0eUlucHV0IHtcXG4gIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvTm90ZXNJbnB1dCB7XFxuICBncmlkLWFyZWE6IG5vdGVzO1xcbiAgcmVzaXplOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbiAgbWluLWhlaWdodDogODBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1N1YkJ0biB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQ6IHJnYig2NSwgMzMsIDIwMyk7XFxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi50b0RvQ2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi50b0RvVGl0bGVEaXYge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZG9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiKDg4LCA4OCwgODgpIDglLFxcbiAgICByZ2IoNzAsIDcwLCA3MCkgIDI3JSxcXG4gICAgcmdiKDk1LCA5NSwgOTUpICA0OCUsXFxuICAgIHJnYig5NywgOTcsIDk3KSAgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiByZ2IoMTcyLCAxNzIsIDE3Mik7XFxuICBib3JkZXI6IHJnYigxMTcsIDExNywgMTE3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnN0cmlrZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZGVsZXRlVG9EbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNzBkZWcsXFxuICAgIHJnYigyNTUsIDAsIDApIDglLFxcbiAgICByZ2IoMjUyLCA1OSwgMCkgIDI3JSxcXG4gICAgcmdiKDE3NywgMCwgMCkgIDQ4JSxcXG4gICAgcmdiKDIzMywgNTEsIDUxKSAgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi5kZWxldGVUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbn1cXG5cXG4uZG9uZVRvRG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2IoMCwgMTc1LCA3MykgOCUsXFxuICAgIHJnYigwLCAxODksIDEwMSkgIDI3JSxcXG4gICAgcmdiKDAsIDI1NSwgMTA2KSAgNDglLFxcbiAgICByZ2IoMzAsIDI0MCwgMTAwKSAgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi5kb25lVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG59XFxuXFxuLnVuZG9Ub0RvIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTMyLCAxMCk7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLnVuZG9Ub0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE1MywgMjgpO1xcbn1cXG5cXG4uZWRpdFRvRG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA3MGRlZyxcXG4gICAgcmdiKDI1NSwgMjE3LCAwKSA4JSxcXG4gICAgcmdiKDI1MiwgMTg1LCAwKSAgMjclLFxcbiAgICByZ2IoMjU1LCAyMDgsIDApICA0OCUsXFxuICAgIHJnYigyNDAsIDE0MCwgMzApICAxMDAlXFxuICApO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi5lZGl0VG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG59XFxuXFxuLmJ1dHRvbnNEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsQmx1ciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcxOSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjNyZW0gMC4zcmVtIDAuM3JlbTtcXG59XFxuXFxuLmNsb3NlTW9kYWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTBweDtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsTGFiZWxzIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5hZGRQcm9qZWN0QnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDMzLCAyMDMpO1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMsIDM2LCAyMTgpO1xcbn1cXG5cXG4uYWRkU1ZHIHtcXG4gIG1pbi1oZWlnaHQ6IDgwJTtcXG59XFxuXFxuLm5ld1Byb2plY3RIZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjVyZW07XFxufVxcblxcbi5pbGx1c3RyYXRpb24ge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLnJlbW92ZVByb2plY3Qge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5yZW1vdmVQcm9qZWN0QnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogN3JlbTtcXG4gIHJpZ2h0OiA3JTtcXG59XFxuXFxuLnJlbW92ZVByb2plY3RCdG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgeyBkb21FbGVtZW50cywgcHJvamVjdENvbnRlbnQgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBwcm9qZWN0c0Fyciwgc2V0QWN0aXZlUHJvamVjdCwgYWN0aXZlUHJvamVjdCB9IGZyb20gJy4nO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb0RvRm9ybSwgcmVmcmVzaFRvRG9zIH0gZnJvbSAnLi9jcmVhdGVUb2RvJztcbmltcG9ydCB7IHNhdmVUb1N0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBJbGx1c3RyYXRpb24gZnJvbSAnLi9pbGx1c3RyYXRpb24uc3ZnJ1xuaW1wb3J0IHsgcmVuZGVyUmVtb3ZlUHJvamVjdEJ0biB9IGZyb20gJy4vZGVsZXRlUHJvamVjdCc7XG5cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRGVtb1Byb2plY3QgPSAoKSA9PiB7XG5pZiAocHJvamVjdHNBcnIubGVuZ3RoID09IDApeyAgXG5jb25zdCBkZW1vUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZW1vIFByb2plY3QnKVxucHJvamVjdHNBcnIucHVzaChkZW1vUHJvamVjdClcbmdlbmVyYXRlUHJvamVjdENhcmQoZGVtb1Byb2plY3QpXG59XG59XG5cbmV4cG9ydCBjb25zdCByZWZyZXNoUHJvamVjdHMgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RzLnRleHRDb250ZW50ID0gJyc7XG4gIHByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IGdlbmVyYXRlUHJvamVjdENhcmQocHJvamVjdCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCkgPT4ge1xuICBpZiAocHJvamVjdC5uYW1lID09ICcnKXtcbiAgICBjb25zb2xlLmxvZyhcIm5vIGRpY2VcIilcbiAgfSBlbHNlIHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgaW5kZXg6ICcgKyBwcm9qZWN0c0Fyci5pbmRleE9mKHByb2plY3QpKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihwcm9qZWN0KTtcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGl2Jyk7XG4gIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3RzQXJyLmZvckVhY2goKG9iaikgPT4gcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdEluZGV4KSk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Byb2plY3RJbmRleH1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzQXJyW2Ake3Byb2plY3RJbmRleH1gXSk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAnVGhlIGFjdGl2ZSBwcm9qZWN0IGlzOiAnICtcbiAgICAgICAgJ0lEOiAnICtcbiAgICAgICAgcHJvamVjdEluZGV4ICtcbiAgICAgICAgJyBOYW1lOiAnICtcbiAgICAgICAgYWN0aXZlUHJvamVjdC5uYW1lXG4gICAgKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQoKSk7XG4gICAgZ2VuZXJhdGVUb0RvRm9ybSgpO1xuICAgIHJlZnJlc2hUb0RvcygpO1xuICAgIHJlbmRlclJlbW92ZVByb2plY3RCdG4oKVxuICB9KTtcbn1cbn07XG5cbmNvbnN0IHByb2plY3RGb3JtSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0JykudmFsdWU7XG4gIHJldHVybiBuZXcgUHJvamVjdChuYW1lKVxufTtcblxuY29uc3QgcmVzZXRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKTtcbiAgbmFtZS52YWx1ZSA9ICcnO1xufTtcblxuY29uc3Qgc3VibWl0UHJvamVjdEV2ZW50ID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5wcm9qZWN0U3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RzQXJyLnB1c2gocHJvamVjdEZvcm1JbnB1dCgpKTtcbiAgICBnZW5lcmF0ZVByb2plY3RDYXJkKHByb2plY3RGb3JtSW5wdXQoKSk7XG4gICAgLy9kb21FbGVtZW50cy5hZGRQcm9qZWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xuICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgIHJlc2V0UHJvamVjdEZvcm0oKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbGx1c3RyYXRpb24gPSBuZXcgSW1hZ2UoKVxuICBpbGx1c3RyYXRpb24uc3JjID0gSWxsdXN0cmF0aW9uXG4gIGlsbHVzdHJhdGlvbi5jbGFzc0xpc3QuYWRkKCdpbGx1c3RyYXRpb24nKVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgbmV3UHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgbmV3UHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0SGVhZGVyJylcbiAgbmV3UHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiU3RhcnQgYSBOZXcgUHJvamVjdCFcIlxuICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SGVhZGVyKVxuICBkb21FbGVtZW50cy5wcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybURpdicpO1xuICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5wcm9qZWN0Rm9ybURpdik7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcbiAgICAncGxhY2Vob2xkZXInLFxuICAgICdXaGF0IGlzIHRoZSBuYW1lIG9mIHlvdXIgcHJvamVjdD8nXG4gICk7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQucXVlcnlTZWxlY3RvcignLnByb2plY3RJbnB1dCcpO1xuICBkb21FbGVtZW50cy5wcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBkb21FbGVtZW50cy5wcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdFN1YkJ0bi50ZXh0Q29udGVudCA9ICdDUkVBVEUgUFJPSkVDVCc7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RTdWJCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RTdWJCdG4nKTtcbiAgZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMucHJvamVjdElucHV0KTtcbiAgZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMucHJvamVjdFN1YkJ0bik7XG4gIFxuICBkb21FbGVtZW50cy5wcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChpbGx1c3RyYXRpb24pXG5cblxuICBwcm9qZWN0Rm9ybUlucHV0KCk7XG4gIHN1Ym1pdFByb2plY3RFdmVudCgpO1xuICByZXNldFByb2plY3RGb3JtKCk7XG59O1xuIiwiaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gJy4nO1xuaW1wb3J0IHsgc2F2ZVRvU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb0RvTW9kYWwgfSBmcm9tICcuL2VkaXRUb2RvJztcbmltcG9ydCB7IHByb2plY3RDb250ZW50IH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IFRyYXNoIGZyb20gJy4vZGVsZXRlLnN2ZydcbmltcG9ydCBUaWNrIGZyb20gJy4vdGljay5zdmcnXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2RldGFpbHMuc3ZnJ1xuXG5leHBvcnQgbGV0IGxhdGVzdFRvRG8gPSBudWxsO1xuZXhwb3J0IGxldCBhY3RpdmVUb0RvID0gbnVsbDtcbmV4cG9ydCBsZXQgYWN0aXZlVG9Eb0lEID0gbnVsbDtcblxuY29uc3Qgc2V0QWN0aXZlVG9EbyA9ICh2YWx1ZSkgPT4ge1xuICBhY3RpdmVUb0RvID0gdmFsdWU7XG59O1xuXG5jb25zdCBzZXRMYXRlc3RUb0RvID0gKHZhbHVlKSA9PiB7XG4gIGxhdGVzdFRvRG8gPSB2YWx1ZTtcbn07XG5cbmNvbnN0IHNldEFjdGl2ZVRvRG9JRCA9ICh2YWx1ZSkgPT4ge1xuICBhY3RpdmVUb0RvSUQgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWZyZXNoVG9Eb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRlbnRDb250YWluZXInKTtcbiAgdG9Eb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBwcm9qZWN0Q29udGVudCgpXG4gIGdlbmVyYXRlVG9Eb0Zvcm0oKTtcbiAgYWN0aXZlUHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBnZW5lcmF0ZVRvRG9DYXJkKHRhc2spKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9DYXJkID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGVudENvbnRhaW5lcicpO1xuICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRvRG9DYXJkLmNsYXNzTGlzdC5hZGQoJ3RvRG9DYXJkJyk7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0NhcmQpO1xuXG4gIGNvbnNvbGUubG9nKCdwbGVhc2UgYmUgcmlnaHQgYmVsb3cnKTtcbiAgY29uc29sZS5sb2coYCR7YWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pfWApO1xuICBsZXQgY2FyZEluZGV4ID0gYWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pO1xuICBjb25zdCBjYXJkSUQgPSAndG9kbycgKyBjYXJkSW5kZXg7XG4gIHRvRG9DYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBjYXJkSUQpO1xuXG4gIGNvbnN0IHRvRG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZUNsYXNzID0gJ3RpdGxlRGl2JyArIGNhcmRJbmRleDtcbiAgdG9Eb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQodGl0bGVDbGFzcyk7XG4gIHRvRG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlRGl2KTtcblxuICBjb25zdCB0b0RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b0RvRGF0ZURpdicpO1xuICB0b0RvRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcblxuICBjb25zdCB0b0RvUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvRG9Qcmlvcml0eURpdicpO1xuICB0b0RvUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICBjb25zdCB0b0RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb05vdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ3RvRG9Ob3Rlc0RpdicpO1xuICB0b0RvTm90ZXNEaXYudGV4dENvbnRlbnQgPSB0b2RvLm5vdGVzO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zRGl2Jyk7XG4gIHRvRG9DYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuXG4gIGNvbnN0IGRvbmVCdXR0b25Ub2dnbGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRvbmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZCgnZG9uZVRvRG8nKTtcbiAgICBjb25zdCB0aWNrID0gbmV3IEltYWdlKClcbiAgdGljay5zcmMgPSBUaWNrXG4gIGRvbmVUb0RvLmFwcGVuZENoaWxkKHRpY2spXG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkb25lVG9Ebyk7XG4gICAgZG9uZVRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgdG9Eb0luZGV4ID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgICAgdG9Eb0luZGV4ID0gcGFyc2VJbnQodG9Eb0luZGV4KTtcbiAgICAgIGFjdGl2ZVRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzW3RvRG9JbmRleF07XG4gICAgICBhY3RpdmVUb0RvLnN0YXR1cyA9ICdjb21wbGV0ZSc7XG4gICAgICBjb25zb2xlLmxvZygndG8gZG86Jyk7XG4gICAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgICAgY29uc29sZS5sb2coJ2RvbmU6Jyk7XG4gICAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QuZG9uZSk7XG5cbiAgICAgIG1hcmtBc0RvbmUoKTtcbiAgICAgIHNhdmVUb1N0b3JhZ2UoKTtcbiAgICB9KTtcblxuICAgIHRvZG8uc3RhdHVzID09PSAnY29tcGxldGUnID8gbWFya0FzRG9uZSgpIDogbnVsbDtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBtYXJrQXNEb25lKCkge1xuICAgIGNvbnN0IHRvRG9JRCA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZDtcbiAgICBjb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvRG9JRCk7XG4gICAgdGhpc0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgndG9Eb0NhcmQnKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgbGV0IHRpdGxlQ2xhc3MgPSAnLnRpdGxlRGl2JyArIGNhcmRJbmRleDtcbiAgICB0aXRsZUNsYXNzID0gdGl0bGVDbGFzcy50b1N0cmluZygpO1xuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dGl0bGVDbGFzc31gKTtcbiAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSh0aXRsZUNsYXNzKTtcbiAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RyaWtlJyk7XG4gIH1cblxuICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0VG9Eby5jbGFzc0xpc3QuYWRkKCdlZGl0VG9EbycpO1xuICBjb25zdCBkZXRhaWxzID0gbmV3IEltYWdlKClcbiAgZGV0YWlscy5zcmMgPSBEZXRhaWxzXG4gIGVkaXRUb0RvLmFwcGVuZENoaWxkKGRldGFpbHMpXG4gIGVkaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEFjdGl2ZVRvRG9JRChidXR0b25zRGl2LnBhcmVudE5vZGUuaWQpO1xuICAgIGxldCBlZGl0TWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgZWRpdE1lID0gcGFyc2VJbnQoZWRpdE1lKTtcbiAgICBzZXRBY3RpdmVUb0RvKGFjdGl2ZVByb2plY3QudGFza3NbZWRpdE1lXSk7XG4gICAgZ2VuZXJhdGVUb0RvTW9kYWwoKTtcbiAgfSk7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZWRpdFRvRG8pO1xuXG4gIGNvbnN0IGRlbGV0ZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlVG9Eby5jbGFzc0xpc3QuYWRkKCdkZWxldGVUb0RvJyk7XG4gIGNvbnN0IHRyYXNoID0gbmV3IEltYWdlKClcbiAgdHJhc2guc3JjID0gVHJhc2hcbiAgZGVsZXRlVG9Eby5hcHBlbmRDaGlsZCh0cmFzaClcbiAgZGVsZXRlVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVNZSA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZC5zbGljZSg0KTtcbiAgICBzZXRBY3RpdmVUb0RvKGFjdGl2ZVByb2plY3QudGFza3NbZGVsZXRlTWVdKTtcbiAgICBjb25zdCBpbmRleE9mQWN0aXZlID0gYWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKGFjdGl2ZVRvRG8pO1xuICAgIGNvbnNvbGUubG9nKCdkZWxldGUgdGhpczogJyArIGluZGV4T2ZBY3RpdmUpO1xuICAgIGFjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGluZGV4T2ZBY3RpdmUsIDEpO1xuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUb0RvKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiJ1RvLURvJyB0aXRsZS4uLlwiKTtcbiAgdG9Eb05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b0RvRm9ybScpO1xuICB0b0RvTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9OYW1lSW5wdXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb0RhdGVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9Eb0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgdG9Eb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgdG9Eb0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm0nKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRvRG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICB0b0RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm0nKTtcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKTtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93IFByaW9yaXR5JztcbiAgY29uc3QgcmVndWxhclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIHJlZ3VsYXJQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1JlZ3VsYXInKTtcbiAgcmVndWxhclByaW9yaXR5LnRleHRDb250ZW50ID0gJ1JlZ3VsYXIgUHJpb3JpdHknO1xuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCBQcmlvcml0eSc7XG5cbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKHJlZ3VsYXJQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRvRG9Ob3Rlc0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHRvRG9Ob3Rlc0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTm90ZXMuLi4nKTtcbiAgdG9Eb05vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm0nKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb05vdGVzSW5wdXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0ID0gKGlkLCB0ZXh0LCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb1N1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0b0RvU3ViQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHRvRG9TdWJCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICB0b0RvU3ViQnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgdG9Eb1N1YkJ0bi5jbGFzc0xpc3QuYWRkKCd0b0RvRm9ybScpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvU3ViQnRuKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9Gb3JtID0gKCkgPT4ge1xuICAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50Q29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcicpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gYWN0aXZlUHJvamVjdC5uYW1lO1xuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICBjb25zdCB0b0RvRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKCd0b0RvRm9ybURpdicpO1xuXG4gIGdlbmVyYXRlVG9Eb05hbWVJbnB1dCgndG9Eb05hbWVJbnB1dCcsIHRvRG9Gb3JtRGl2KTtcbiAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KCd0b0RvRHVlRGF0ZUlucHV0JywgdG9Eb0Zvcm1EaXYpO1xuICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0KCd0b0RvUHJpb3JpdHlJbnB1dCcsIHRvRG9Gb3JtRGl2KTtcbiAgZ2VuZXJhdGVUb0RvTm90ZXNJbnB1dCgndG9Eb05vdGVzSW5wdXQnLCB0b0RvRm9ybURpdik7XG4gIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KCd0b0RvU3ViQnRuJywgJ0FERCBUT0RPJywgdG9Eb0Zvcm1EaXYpO1xuXG4gXG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EaXYpO1xuXG4gIGNvbnN0IHRvRG9Gb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvTmFtZUlucHV0JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvRHVlRGF0ZUlucHV0JykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb1ByaW9yaXR5SW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvTm90ZXNJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHN0YXR1cyA9ICdpbmNvbXBsZXRlJztcbiAgICByZXR1cm4gbmV3IFRvRG8obmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb1N1YkJ0bicpO1xuICB0b0RvU3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QudGFza3MucHVzaCh0b0RvRm9ybUlucHV0KCkpO1xuICAgIHNldExhdGVzdFRvRG8oYWN0aXZlUHJvamVjdC50YXNrcy5sZW5ndGggLSAxKTtcbiAgICBzZXRBY3RpdmVUb0RvKGxhdGVzdFRvRG8pO1xuICAgIGNvbnNvbGUubG9nKCdsYXRlc3QgJyArIGxhdGVzdFRvRG8pO1xuICAgIHJlZnJlc2hUb0RvcygpO1xuICAgIHNldEFjdGl2ZVRvRG8obnVsbCk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgcHJvamVjdHMgdG9kb3M6Jyk7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBSZW1vdmUgZnJvbSAnLi9yZW1vdmUuc3ZnJ1xuaW1wb3J0IHsgYWN0aXZlUHJvamVjdCwgc2V0QWN0aXZlUHJvamVjdCwgcHJvamVjdHNBcnIsIHNldFByb2plY3RzQXJyIH0gZnJvbSAnLidcbmltcG9ydCB7IHNhdmVUb1N0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnXG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RGb3JtLCByZWZyZXNoUHJvamVjdHMgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnXG5pbXBvcnQgeyBkb21FbGVtZW50cywgcHJvamVjdENvbnRlbnQgfSBmcm9tICcuL2RvbSdcbmltcG9ydCB7IGdlbmVyYXRlVG9Eb0Zvcm0sIHJlZnJlc2hUb0RvcyB9IGZyb20gJy4vY3JlYXRlVG9kbydcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQgPSAoJ3JlbW92ZVByb2plY3QnKVxuICAgIGNvbnN0IHJlbW92ZUljb24gPSBuZXcgSW1hZ2UoKVxuICAgIHJlbW92ZUljb24uc3JjID0gUmVtb3ZlXG4gICAgcmVtb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQcm9qZWN0QnRuJylcbiAgICByZW1vdmVCdXR0b24uYXBwZW5kQ2hpbGQocmVtb3ZlSWNvbilcbiAgICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pXG4gICAgY29uc3QgYWN0aXZlUHJvamVjdEluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihhY3RpdmVQcm9qZWN0KVxuICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnIuc3BsaWNlKGFjdGl2ZVByb2plY3RJbmRleCwgMSlcbiAgICAgICAgcG9zdFJlbW92ZVJlc2V0KClcbiAgICAgICAgc2F2ZVRvU3RvcmFnZSgpXG4gICAgICAgIGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdEZvcm0oKSk7XG4gICAgfSlcbn0gXG5cbmV4cG9ydCBjb25zdCBwb3N0UmVtb3ZlUmVzZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3QWN0aXZlUHJvamVjdCA9IHByb2plY3RzQXJyWzBdO1xuICAgIHNldEFjdGl2ZVByb2plY3QobmV3QWN0aXZlUHJvamVjdClcbiAgICBkb21FbGVtZW50cy5tYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCgpKTtcbiAgICByZWZyZXNoUHJvamVjdHMoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb2plY3RFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlUHJvamVjdCcpXG4gICAgY29uc3QgYWN0aXZlUHJvamVjdEluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihhY3RpdmVQcm9qZWN0KVxuICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdHNBcnIuc3BsaWNlKGFjdGl2ZVByb2plY3RJbmRleCwgMSlcbiAgICAgICAgcG9zdFJlbW92ZVJlc2V0KClcbiAgICB9KVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IHJlbmRlclJlbW92ZVByb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgZ2VuZXJhdGVCdXR0b24oKVxuICAgIC8vcmVtb3ZlUHJvamVjdEV2ZW50KClcbn0iLCJpbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdlbmVyYXRlRGVtb1Byb2plY3QsIGdlbmVyYXRlUHJvamVjdEZvcm0sIHJlZnJlc2hQcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCB7IHNhdmVUb1N0b3JhZ2UsIGxvYWRGcm9tU3RvcmFnZSwgY2xlYXJTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgYWN0aXZlVG9EbywgYWN0aXZlVG9Eb0lEIH0gZnJvbSBcIi4vY3JlYXRlVG9kb1wiO1xuaW1wb3J0IEFkZCBmcm9tICcuL2FkZC5zdmcnXG5cblxuLy8gZG9tIGVsZW1lbnRzXG5cbmV4cG9ydCBjb25zdCBkb21FbGVtZW50cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBwcm9qZWN0U3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGhlYWRlckRpdixcbiAgICBsb2dvLFxuICAgIHNpZGVCYXJEaXYsXG4gICAgcHJvamVjdHNIZWFkZXIsXG4gICAgcHJvamVjdHMsXG4gICAgYWRkUHJvamVjdEJ1dHRvbixcbiAgICBtYWluQ29udGVudENvbnRhaW5lcixcbiAgICBwcm9qZWN0Rm9ybURpdixcbiAgICBwcm9qZWN0SW5wdXQsXG4gICAgcHJvamVjdFN1YkJ0bixcbiAgICBtb2RhbCxcbiAgICBtb2RhbEJsdXJcbiAgfTtcbn0pKCk7XG5cbi8vIHdpbmRvdyBjb250YWluZXJcblxuY29uc3QgcmVuZGVyTWFzdGVyQ29udGFpbmVyID0gKCkgPT4ge1xuICBkb21FbGVtZW50cy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMuY29udGFpbmVyKTtcbn07XG5cbi8vIGhlYWRlclxuXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLmhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJEaXYnKTtcbiAgZG9tRWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLmhlYWRlckRpdik7XG59O1xuXG4vL2xvZ29cblxuY29uc3QgcmVuZGVyTG9nbyA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMubG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gIGRvbUVsZW1lbnRzLmxvZ28udGV4dENvbnRlbnQgPSAnUHJvamVjdCBUT0RPcyc7XG4gIGRvbUVsZW1lbnRzLmhlYWRlckRpdi5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5sb2dvKTtcbn07XG5cbi8vc2lkZWJhclxuXG4vL3NpZGViYXIgY29udGFpbmVyXG5cblxuY29uc3QgcmVuZGVyU2lkZUJhckNvbnRhaW5lciA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMuc2lkZUJhckRpdi5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyRGl2Jyk7XG4gIGRvbUVsZW1lbnRzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5zaWRlQmFyRGl2KTtcbn07XG5cbi8vc2lkZWJhciBoZWFkZXJcblxuY29uc3QgcmVuZGVyU2lkZUJhckhlYWRlciA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMucHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNIZWFkZXInKTtcbiAgZG9tRWxlbWVudHMuc2lkZUJhckRpdi5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5wcm9qZWN0c0hlYWRlcik7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJztcbn07XG5cbi8vc2lkZWJhciBwcm9qZWN0IG5hdiBjb250YWluZXJcblxuY29uc3QgcmVuZGVyUHJvamVjdHNDb250YWluZXIgPSAoKSA9PiB7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzRGl2Jyk7XG4gIGRvbUVsZW1lbnRzLnNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMucHJvamVjdHMpO1xufTtcblxuLy9zaWRlYmFyIGFkZCBuZXcgcHJvamVjdFxuXG5jb25zdCByZW5kZXJBZGRQcm9qZWN0QnRuID0gKCkgPT4ge1xuICBjb25zdCBhZGQgPSBuZXcgSW1hZ2UoKVxuICBhZGQuc3JjID0gQWRkXG4gIGFkZC5jbGFzc0xpc3QuYWRkKCdhZGRTVkcnKVxuICBkb21FbGVtZW50cy5hZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZClcbiAgZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gIGRvbUVsZW1lbnRzLnNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHMuYWRkUHJvamVjdEJ1dHRvbik7XG4gIGRvbUVsZW1lbnRzLmFkZFByb2plY3RCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbn07XG5cbi8vc2lkZWJhciByZW5kZXJpbmdcblxuY29uc3QgcmVuZGVyU2lkZUJhciA9ICgpID0+IHtcbiAgcmVuZGVyU2lkZUJhckNvbnRhaW5lcigpO1xuICByZW5kZXJTaWRlQmFySGVhZGVyKCk7XG4gIHJlbmRlclByb2plY3RzQ29udGFpbmVyKCk7XG4gIHJlbmRlckFkZFByb2plY3RCdG4oKTtcbiAgcmVmcmVzaFByb2plY3RzKCk7XG4gIFxuICBkb21FbGVtZW50cy5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdlbmVyYXRlUHJvamVjdEZvcm0oKTtcbiAgfSk7XG4gIFxufVxuXG4vL21haW4gY29udGVudCBjb250YWluZXJcblxuY29uc3QgcmVuZGVyQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcbiAgZG9tRWxlbWVudHMubWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnRDb250YWluZXInKTtcbiAgZG9tRWxlbWVudHMuY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLm1haW5Db250ZW50Q29udGFpbmVyKTtcbn1cblxuXG5cblxuXG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250ZW50Q29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RIZWFkZXInKTtcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGFjdGl2ZVByb2plY3QubmFtZTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgcmV0dXJuIHByb2plY3RDb250ZW50Q29udGFpbmVyO1xufTtcblxuXG5cblxuXG5cblxuXG4vL21vZGFsIGZ1bmN0aW9uc1xuXG5leHBvcnQgY29uc3QgcmVuZGVyTW9kYWxCbHVyID0gKCkgPT4ge1xuZG9tRWxlbWVudHMubW9kYWxCbHVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsQmx1cicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtZW50cy5tb2RhbEJsdXIpO1xuXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJNb2RhbCA9ICgpID0+IHtcbiAgcmVuZGVyTW9kYWxCbHVyKClcbiAgZG9tRWxlbWVudHMubW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgZG9tRWxlbWVudHMubW9kYWxCbHVyLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzLm1vZGFsKTtcbn1cblxuXG5cblxuLy9mdWxsIHVpIHJlbmRlclxuXG5jb25zdCByZW5kZXJVSSA9ICgoKSA9PiB7XG4gIC8vY2xlYXJTdG9yYWdlKClcbiAgbG9hZEZyb21TdG9yYWdlKClcbiAgcmVuZGVyTWFzdGVyQ29udGFpbmVyKCk7XG4gIHJlbmRlckhlYWRlcigpO1xuICByZW5kZXJMb2dvKCk7XG4gIHJlbmRlclNpZGVCYXIoKVxuICByZW5kZXJDb250ZW50Q29udGFpbmVyKClcbiAgZ2VuZXJhdGVEZW1vUHJvamVjdCgpXG4gIGdlbmVyYXRlUHJvamVjdEZvcm0oKVxuICByZW5kZXJNb2RhbCgpXG4gIC8vcmVmcmVzaFByb2plY3RzKClcbn0pKCk7IiwiaW1wb3J0IHsgc2F2ZVRvU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQge1xuICBhY3RpdmVUb0RvLFxuICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQsXG4gIGdlbmVyYXRlVG9Eb0RhdGVJbnB1dCxcbiAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dCxcbiAgZ2VuZXJhdGVUb0RvTm90ZXNJbnB1dCxcbiAgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQsXG59IGZyb20gJy4vY3JlYXRlVG9kbyc7XG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSAnLic7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQuc3ZnJ1xuXG5jb25zdCBnZW5lcmVyYXRlQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbEJsdXInKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbG9zZU1vZGFsLnRleHRDb250ZW50ID0gJ3gnO1xuICBjbG9zZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlTW9kYWwnKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VNb2RhbCk7XG4gIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwKSc7XG4gICAgbW9kYWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9ICcnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9Nb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQmx1cicpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgbW9kYWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcblxuICBjb25zdCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRvRG9OYW1lLmNsYXNzTGlzdC5hZGQoJ3RvRG9OYW1lTW9kYWwnKTtcbiAgY29uc29sZS5sb2coYWN0aXZlVG9Ebyk7XG4gIHRvRG9OYW1lLnRleHRDb250ZW50ID0gYCR7YWN0aXZlVG9Eby5uYW1lfWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcblxuICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b0RvRHVlRGF0ZU1vZGFsJyk7XG4gIHRvRG9EdWVEYXRlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPkR1ZSBEYXRlOiA8L3NwYW4+JHthY3RpdmVUb0RvLmRhdGV9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuXG4gIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9Eb1ByaW9yaXR5TW9kYWwnKTtcbiAgdG9Eb1ByaW9yaXR5LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPlByaW9yaXR5OiA8L3NwYW4+JHthY3RpdmVUb0RvLnByaW9yaXR5fWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Qcmlvcml0eSk7XG5cbiAgY29uc3QgdG9Eb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9Ob3Rlcy5jbGFzc0xpc3QuYWRkKCd0b0RvTm90ZXNNb2RhbCcpO1xuICB0b0RvTm90ZXMuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzID1cIm1vZGFsTGFiZWxzXCI+Tm90ZXM6IDwvc3Bhbj4ke2FjdGl2ZVRvRG8ubm90ZXN9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb05vdGVzKTtcblxuICBnZW5lcmVyYXRlQ2xvc2VCdXR0b24oKTtcblxuICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0VG9Eby5jbGFzc0xpc3QuYWRkKCdlZGl0VG9EbycpO1xuICBjb25zdCBlZGl0ID0gbmV3IEltYWdlKClcbiAgZWRpdC5zcmMgPSBFZGl0XG4gIGVkaXRUb0RvLmFwcGVuZENoaWxkKGVkaXQpXG4gIG1vZGFsLmFwcGVuZENoaWxkKGVkaXRUb0RvKTtcbiAgZWRpdFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gICAgbW9kYWwudGV4dENvbnRlbnQgPSAnJztcbiAgICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoJ2VkaXROYW1lSW5wdXQnLCBtb2RhbCk7XG4gICAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KCdlZGl0RGF0ZUlucHV0JywgbW9kYWwpO1xuICAgIGdlbmVyYXRlVG9Eb1ByaW9yaXR5SW5wdXQoJ2VkaXRQcmlvcml0eUlucHV0JywgbW9kYWwpO1xuICAgIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoJ2VkaXROb3Rlc0lucHV0JywgbW9kYWwpO1xuICAgIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KCdlZGl0U3VibWl0QnV0dG9uJywgJ1NVQk1JVCBDSEFOR0VTJywgbW9kYWwpO1xuICAgIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpO1xuICAgIGNvbnN0IGVkaXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXROYW1lSW5wdXQnKTtcbiAgICBlZGl0TmFtZS52YWx1ZSA9IGFjdGl2ZVRvRG8ubmFtZTtcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RGF0ZUlucHV0Jyk7XG4gICAgZWRpdERhdGUudmFsdWUgPSBhY3RpdmVUb0RvLmRhdGU7XG4gICAgY29uc3QgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcmlvcml0eUlucHV0Jyk7XG4gICAgZWRpdFByaW9yaXR5LnZhbHVlID0gYWN0aXZlVG9Eby5wcmlvcml0eTtcbiAgICBjb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdE5vdGVzSW5wdXQnKTtcbiAgICBlZGl0Tm90ZXMudmFsdWUgPSBhY3RpdmVUb0RvLm5vdGVzO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRTdWJtaXRCdXR0b24nKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhY3RpdmVUb0RvLm5hbWUgPSBlZGl0TmFtZS52YWx1ZTtcbiAgICAgICAgYWN0aXZlVG9Eby5kYXRlID0gZWRpdERhdGUudmFsdWU7XG4gICAgICAgIGFjdGl2ZVRvRG8ucHJpb3JpdHkgPSBlZGl0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgIGFjdGl2ZVRvRG8ubm90ZXMgPSBlZGl0Tm90ZXMudmFsdWU7XG4gICAgICAgIG1vZGFsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuICAgICAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuXG4gICAgICAgIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YoYWN0aXZlVG9Ebyk7XG4gICAgICAgIGNvbnN0IHRpdGxlQ2xhc3MgPSAnLnRpdGxlRGl2JyArIGNhcmRJbmRleDtcblxuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGl0bGVDbGFzcyk7XG5cbiAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBlZGl0TmFtZS52YWx1ZTtcblxuICAgICAgICBzYXZlVG9TdG9yYWdlKCk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IHNhdmVUb1N0b3JhZ2UsIGxvYWRGcm9tU3RvcmFnZSwgY2xlYXJTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcblxuZXhwb3J0IGxldCBwcm9qZWN0c0FyciA9IFtdO1xuXG5leHBvcnQgY29uc3Qgc2V0UHJvamVjdHNBcnIgPSAodmFsdWUpID0+IHtcbiAgcHJvamVjdHNBcnIgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG59O1xuXG4vL2xvYWRGcm9tU3RvcmFnZSgpO1xuXG4vL2dlbmVyYXRlVUkoKTtcbi8vZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpO1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5kb25lID0gW107XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IHsgcHJvamVjdHNBcnIsIHNldFByb2plY3RzQXJyIH0gZnJvbSAnLic7XG5cbi8vTE9DQUwgU1RPUkFHRVxuXG5mdW5jdGlvbiBzYXZlVG9TdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNBcnInLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycikpO1xufVxuXG5mdW5jdGlvbiBsb2FkRnJvbVN0b3JhZ2UoKSB7XG4gIGNvbnN0IGxvYWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzQXJyJykpO1xuXG4gIHNldFByb2plY3RzQXJyKGxvYWRQcm9qZWN0cyk7XG4gIGlmIChwcm9qZWN0c0FyciA9PT0gbnVsbCkgc2V0UHJvamVjdHNBcnIoW10pO1xuICBjb25zb2xlLnRhYmxlKHByb2plY3RzQXJyKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgc2V0UHJvamVjdHNBcnIoW10pO1xuIC8vIHJlc2V0RGlzcGxheSgpO1xufVxuXG5leHBvcnQgeyBzYXZlVG9TdG9yYWdlLCBsb2FkRnJvbVN0b3JhZ2UsIGNsZWFyU3RvcmFnZSB9O1xuIiwiY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3Rlcywgc3RhdHVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9EbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZG9tLmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==