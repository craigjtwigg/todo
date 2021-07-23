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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  background-color: rgb(212, 209, 209);\n}\n\n.container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 25% 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    'header header header'\n    'sidebar main main';\n}\n\n.headerDiv {\n  grid-area: header;\n  display: flex;\n  background: rgb(98, 66, 241);\n  background: linear-gradient(\n    70deg,\n    rgba(65, 33, 203, 1) 8%,\n    rgba(61, 32, 200, 1) 27%,\n    rgba(5, 15, 156, 1) 48%,\n    rgb(141, 71, 233) 100%\n  );\n  color: white;\n  width: 100%;\n  height: 5rem;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 0 6rem;\n}\n\nh1 {\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n  display: block;\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.sideBarDiv {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-area: sidebar;\n  margin: 0 1rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  height: 500px;\n  width: 100%;\n}\n\n.projectsHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n.projectDiv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(161, 160, 160, 0.137);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.projectDiv:hover {\n  cursor: pointer;\n  background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n  grid-area: main;\n  margin: 0 1rem;\n  border-radius: 5%;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  height: 500px;\n  width: 92%;\n}\n\n.projectFormDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  padding-top: 2rem;\n  align-items: center;\n}\n\n#projectInput {\n  display: block;\n  width: 60%;\n  border-radius: 0.5rem;\n  height: 3rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n  border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn {\n  display: block;\n  background-color: rgb(5, 15, 156);\n  color: rgb(255, 255, 255);\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover,\n#toDoSubBtn:hover {\n  cursor: pointer;\n  background-color: rgb(23, 36, 218);\n}\n\n.projectContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 1rem;\n}\n\n.toDoFormDiv {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr fr 1fr;\n  grid-template-areas:\n    'title title'\n    'date priority'\n    'notes notes'\n    'button button';\n  justify-items: center;\n  padding: 1.5rem;\n}\n\n#toDoNameInput {\n  grid-area: title;\n  display: block;\n  width: 90%;\n  border-radius: 0.5rem;\n  height: 2.2rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n  grid-area: date;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: right;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n  grid-area: priority;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: left;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n  grid-area: notes;\n  resize: none;\n  display: block;\n  width: 90%;\n  min-height: 80px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background-color: rgba(161, 160, 160, 0.137);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n  height: 3.3rem;\n}\n\n.toDoTitleDiv {\n  font-size: 2rem;\n}\n\n.done {\n  display: flex;\n  justify-content: space-between;\n  align-self: center;\n  padding: 0.5rem;\n  margin: 0.5rem;\n  background-color: rgb(128, 128, 128);\n  color: rgb(59, 59, 59);\n  border: rgb(117, 117, 117);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.strike {\n  background-color: black;\n  width: 95%;\n  min-height: 3px;\n  z-index: 2;\n  position: relative;\n  bottom: 1.2rem;\n}\n\n.deleteToDo {\n  background-color: rgb(190, 0, 0);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n  cursor: pointer;\n  background-color: rgb(224, 15, 15);\n}\n\n.doneToDo {\n  background-color: rgb(9, 155, 28);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.doneToDo:hover {\n  cursor: pointer;\n  background-color: rgb(15, 192, 38);\n}\n\n.undoToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 132, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.undoToDo:hover {\n  cursor: pointer;\n  background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 194, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.editToDo:hover {\n  background-color: rgb(250, 217, 28);\n}\n\n.buttonsDiv {\n  display: flex;\n}\n\n.modalBlur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.719);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  transform: scale(0);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  transform: scale(0);\n  width: 60%;\n  height: 60%;\n  background-color: rgb(218, 218, 218);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n  cursor: pointer;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 15px;\n}\n\n.modalLabels {\n  font-weight: 900;\n}\n\n.addProjectButton {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n  cursor: pointer;\n  background: rgb(23, 36, 218);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  background-color: rgb(212, 209, 209);\n}\n\n.container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 25% 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    'header header header'\n    'sidebar main main';\n}\n\n.headerDiv {\n  grid-area: header;\n  display: flex;\n  background: rgb(98, 66, 241);\n  background: linear-gradient(\n    70deg,\n    rgba(65, 33, 203, 1) 8%,\n    rgba(61, 32, 200, 1) 27%,\n    rgba(5, 15, 156, 1) 48%,\n    rgb(141, 71, 233) 100%\n  );\n  color: white;\n  width: 100%;\n  height: 5rem;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 0 0 6rem;\n}\n\nh1 {\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n  text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n  display: block;\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.sideBarDiv {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-area: sidebar;\n  margin: 0 1rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  height: 500px;\n  width: 100%;\n}\n\n.projectsHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n.projectDiv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(161, 160, 160, 0.137);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.projectDiv:hover {\n  cursor: pointer;\n  background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n  grid-area: main;\n  margin: 0 1rem;\n  border-radius: 5%;\n  background-color: rgba(255, 255, 255, 0.281);\n  box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n  height: 500px;\n  width: 92%;\n}\n\n.projectFormDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 100%;\n  padding-top: 2rem;\n  align-items: center;\n}\n\n#projectInput {\n  display: block;\n  width: 60%;\n  border-radius: 0.5rem;\n  height: 3rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n  border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn {\n  display: block;\n  background-color: rgb(5, 15, 156);\n  color: rgb(255, 255, 255);\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover,\n#toDoSubBtn:hover {\n  cursor: pointer;\n  background-color: rgb(23, 36, 218);\n}\n\n.projectContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 1rem;\n}\n\n.toDoFormDiv {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr fr 1fr;\n  grid-template-areas:\n    'title title'\n    'date priority'\n    'notes notes'\n    'button button';\n  justify-items: center;\n  padding: 1.5rem;\n}\n\n#toDoNameInput {\n  grid-area: title;\n  display: block;\n  width: 90%;\n  border-radius: 0.5rem;\n  height: 2.2rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n  grid-area: date;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: right;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n  grid-area: priority;\n  display: block;\n  width: 80%;\n  border-radius: 0.5rem;\n  height: 2rem;\n  text-align: left;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n  grid-area: notes;\n  resize: none;\n  display: block;\n  width: 90%;\n  min-height: 80px;\n  box-sizing: border-box;\n  font-size: 16px;\n  border-radius: 0.5rem;\n  height: 1.5rem;\n  text-align: center;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n  display: flex;\n  justify-content: space-between;\n  justify-self: center;\n  align-items: center;\n  align-self: center;\n  padding: 1rem;\n  margin: 0.5rem;\n  background-color: rgba(161, 160, 160, 0.137);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n  height: 3.3rem;\n}\n\n.toDoTitleDiv {\n  font-size: 2rem;\n}\n\n.done {\n  display: flex;\n  justify-content: space-between;\n  align-self: center;\n  padding: 0.5rem;\n  margin: 0.5rem;\n  background-color: rgb(128, 128, 128);\n  color: rgb(59, 59, 59);\n  border: rgb(117, 117, 117);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n  width: 90%;\n}\n\n.strike {\n  background-color: black;\n  width: 95%;\n  min-height: 3px;\n  z-index: 2;\n  position: relative;\n  bottom: 1.2rem;\n}\n\n.deleteToDo {\n  background-color: rgb(190, 0, 0);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n  cursor: pointer;\n  background-color: rgb(224, 15, 15);\n}\n\n.doneToDo {\n  background-color: rgb(9, 155, 28);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.doneToDo:hover {\n  cursor: pointer;\n  background-color: rgb(15, 192, 38);\n}\n\n.undoToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 132, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.undoToDo:hover {\n  cursor: pointer;\n  background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n  margin: 0 1rem;\n  cursor: pointer;\n  background-color: rgb(226, 194, 10);\n  color: rgb(0, 0, 0);\n  border: none;\n  border-radius: 10px;\n  padding: 0.6rem;\n}\n\n.editToDo:hover {\n  background-color: rgb(250, 217, 28);\n}\n\n.buttonsDiv {\n  display: flex;\n}\n\n.modalBlur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.719);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n  transform: scale(0);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  transform: scale(0);\n  width: 60%;\n  height: 60%;\n  background-color: rgb(218, 218, 218);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n  cursor: pointer;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: red;\n  color: white;\n  height: 30px;\n  width: 30px;\n  border: none;\n  border-radius: 15px;\n}\n\n.modalLabels {\n  font-weight: 900;\n}\n\n.addProjectButton {\n  grid-area: button;\n  width: 90%;\n  display: block;\n  background: rgb(65, 33, 203);\n  color: blanchedalmond;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.7rem;\n  box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n  cursor: pointer;\n  background: rgb(23, 36, 218);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsArr": () => (/* binding */ projectsArr),
/* harmony export */   "setProjectsArr": () => (/* binding */ setProjectsArr),
/* harmony export */   "generateToDoForm": () => (/* binding */ generateToDoForm),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "headerDiv": () => (/* binding */ headerDiv),
/* harmony export */   "sideBarDiv": () => (/* binding */ sideBarDiv),
/* harmony export */   "generateProjectCard": () => (/* binding */ generateProjectCard),
/* harmony export */   "generateProjectForm": () => (/* binding */ generateProjectForm)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





let activeProject = null;
let latestToDo = null;
let activeToDo = null;
//let activeToDoID = null;

let projectsArr = [];

const setProjectsArr = (value) => {
    projectsArr = value
}

;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.loadFromStorage)();





const refreshToDos = () => {
  const toDoContainer = document.querySelector('.projectContentContainer');
  toDoContainer.textContent = '';
  generateToDoForm();
  activeProject.tasks.forEach((task) => generateToDoCard(task));
};

const refreshProjects = () => {
  const projectsDiv = document.querySelector('.projectsDiv');
  projectsDiv.textContent = '';
  console.log('please load this:');
  console.table(projectsArr);
  projectsArr.forEach((project) => generateProjectCard(project));
};

const generateToDoCard = (todo) => {
  const toDoContainer = document.querySelector('.projectContentContainer');
  const toDoCard = document.createElement('div');

  toDoCard.classList.add('toDoCard');
  toDoContainer.appendChild(toDoCard);

  console.log('please be right below');
  console.log(`${activeProject.tasks.indexOf(todo)}`);
  let cardIndex = activeProject.tasks.indexOf(todo);
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
    doneToDo.textContent = 'DONE?';
    buttonsDiv.appendChild(doneToDo);
    doneToDo.addEventListener('click', () => {
      let toDoIndex = buttonsDiv.parentNode.id.slice(4);
      toDoIndex = parseInt(toDoIndex);
      activeToDo = activeProject.tasks[toDoIndex];
      activeToDo.status = 'complete';
      markAsDone();
      refreshToDos();
    });
  })();

  const markAsDone = () => {
    const doneToDo = document.createElement('button');
    const toDoID = buttonsDiv.parentNode.id;
    const thisCard = document.getElementById(toDoID);
    console.log('to do:');
    console.table(activeProject.tasks);
    console.log('done:');
    console.table(activeProject.done);
    thisCard.classList.remove('toDoCard');
    thisCard.classList.add('done');
    const strike = document.createElement('div');
    strike.classList.add('strike');
    toDoTitleDiv.appendChild(strike);
    doneToDo.style.transform = 'scale(0)';
  };

  const editToDo = document.createElement('button');
  editToDo.classList.add('editToDo');
  editToDo.textContent = 'DETAILS';
  editToDo.addEventListener('click', () => {
    activeToDoID = buttonsDiv.parentNode.id;
    let editMe = buttonsDiv.parentNode.id.slice(4);
    editMe = parseInt(editMe);
    activeToDo = activeProject.tasks[editMe];
    generateToDoModal();
  });
  buttonsDiv.appendChild(editToDo);

  const deleteToDo = document.createElement('button');
  deleteToDo.classList.add('deleteToDo');
  deleteToDo.textContent = 'DELETE';
  deleteToDo.addEventListener('click', () => {
    const deleteMe = buttonsDiv.parentNode.id.slice(4);
    activeToDo = activeProject.tasks[deleteMe];
    const indexOfActive = activeProject.tasks.indexOf(activeToDo);
    console.log('delete this: ' + indexOfActive);
    activeProject.tasks.splice(indexOfActive, 1);
    console.table(activeProject.tasks);
    refreshToDos();
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveToStorage)();
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
  const toDoFormDiv = document.createElement('div');
  toDoFormDiv.classList.add('toDoFormDiv');

  generateToDoNameInput('toDoNameInput', toDoFormDiv);
  generateToDoDateInput('toDoDueDateInput', toDoFormDiv);
  generateToDoPriorityInput('toDoPriorityInput', toDoFormDiv);
  generateToDoNotesInput('toDoNotesInput', toDoFormDiv);
  generateToDoSubmitInput('toDoSubBtn', 'ADD TODO', toDoFormDiv);

  const toDoContainer = document.querySelector('.projectContentContainer');
  toDoContainer.appendChild(toDoFormDiv);

  const toDoFormInput = () => {
    const name = document.querySelector('#toDoNameInput').value;
    const date = document.querySelector('#toDoDueDateInput').value;
    const priority = document.querySelector('#toDoPriorityInput').value;
    const notes = document.querySelector('#toDoNotesInput').value;
    const status = 'incomplete';
    return new _task__WEBPACK_IMPORTED_MODULE_2__.default(name, date, priority, notes, status);
  };

  const toDoSubBtn = document.querySelector('#toDoSubBtn');
  toDoSubBtn.addEventListener('click', () => {
    activeProject.tasks.push(toDoFormInput());
    latestToDo = activeProject.tasks.length - 1;
    activeToDo = latestToDo;
    console.log('latest ' + latestToDo);
    refreshToDos();
    activeToDo = null;
    console.table(activeProject.tasks);
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveToStorage)();
  });
};

const projectContent = () => {
  const projectContentContainer = document.createElement('div');
  projectContentContainer.classList.add('projectContentContainer');
  const projectHeader = document.createElement('h2');
  projectHeader.classList.add('projectHeader');
  projectHeader.textContent = activeProject.name;
  projectContentContainer.appendChild(projectHeader);

  return projectContentContainer;
};

const container = document.querySelector('.container');
const headerDiv = document.querySelector('.headerDiv');
const sideBarDiv = document.querySelector('.sideBarDiv');

const generateProjectCard = (project) => {
  const projects = document.querySelector('.projectsDiv');
  const projectDiv = document.createElement('div');
  const projectIndex = projectsArr.indexOf(project);
  projectDiv.classList.add('projectDiv');
  projectDiv.textContent = project.name;
  projects.appendChild(projectDiv);
  projectsArr.forEach((obj) => {
    projectDiv.setAttribute('id', projectIndex);
  });

  document.getElementById(`${projectIndex}`).addEventListener('click', () => {
    console.log(projectIndex);
    activeProject = projectsArr[`${projectIndex}`];
    console.log('The active project is: ' + activeProject.name);
    const mainContentContainer = document.querySelector(
      '.mainContentContainer'
    );
    mainContentContainer.textContent = '';
    mainContentContainer.appendChild(projectContent());
    generateToDoForm();
    refreshToDos();
  });
};

const generateProjectForm = () => {
  const mainContentContainer = document.querySelector('.mainContentContainer');
  mainContentContainer.textContent = '';
  const projectFormDiv = document.createElement('div');
  projectFormDiv.classList.add('projectFormDiv');
  mainContentContainer.appendChild(projectFormDiv);
  const projectInput = document.createElement('input');
  projectInput.setAttribute('id', 'projectInput');
  projectInput.setAttribute('type', 'text');
  projectInput.setAttribute('placeholder', 'What is the name of your project?');
  projectInput.classList.add('projectForm');
  projectInput.querySelector('.projectInput');
  projectInput.required = true;
  const projectSubBtn = document.createElement('button');
  projectSubBtn.setAttribute('type', 'submit');
  projectSubBtn.textContent = 'CREATE PROJECT';
  projectSubBtn.classList.add('projectForm');
  projectSubBtn.setAttribute('id', 'projectSubBtn');
  projectFormDiv.appendChild(projectInput);
  projectFormDiv.appendChild(projectSubBtn);

  const projectFormInput = () => {
    const name = document.querySelector('#projectInput').value;
    return new _project__WEBPACK_IMPORTED_MODULE_1__.default(name);
  };

  const resetProjectForm = () => {
    const name = document.querySelector('#projectInput');
    name.value = '';
  };

  projectSubBtn.addEventListener('click', () => {
    projectsArr.push(projectFormInput());
    generateProjectCard(projectFormInput());
    console.table(projectsArr);
    resetProjectForm();
    const addProjectButton = document.querySelector('.addProjectButton');
    addProjectButton.style.transform = 'scale(1)';
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveToStorage)();
  });
};

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
  editToDo.textContent = 'EDIT';
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

        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveToStorage)();
      });
  });
};



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
  if (___WEBPACK_IMPORTED_MODULE_0__.projectsArr === null) ___WEBPACK_IMPORTED_MODULE_0__.projectsArr = [];
  console.table(___WEBPACK_IMPORTED_MODULE_0__.projectsArr);
}

function clearStorage() {
  localStorage.clear();
  ___WEBPACK_IMPORTED_MODULE_0__.projectsArr = [];
  resetDisplay();
}




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
  constructor(name, date, priority, notes, status) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
    this.status = status;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLDBJQUEwSTtBQUMxSSxtSUFBbUk7QUFDbkk7QUFDQSw2Q0FBNkMsY0FBYywyQkFBMkIsR0FBRyxVQUFVLDRDQUE0QyxvQkFBb0IsY0FBYyx5Q0FBeUMsR0FBRyxnQkFBZ0Isa0JBQWtCLGNBQWMsdUNBQXVDLGtDQUFrQyw4RUFBOEUsR0FBRyxnQkFBZ0Isc0JBQXNCLGtCQUFrQixpQ0FBaUMseUtBQXlLLGlCQUFpQixnQkFBZ0IsaUJBQWlCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLDhCQUE4QixHQUFHLFFBQVEsaUJBQWlCLDRDQUE0QywyREFBMkQsR0FBRyxvQkFBb0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QiwyQkFBMkIsdUJBQXVCLG1CQUFtQix3QkFBd0IsaURBQWlELDBEQUEwRCxrQkFBa0IsZ0JBQWdCLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGtCQUFrQixzQkFBc0IsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaURBQWlELG9CQUFvQiwwQkFBMEIsMERBQTBELGVBQWUsR0FBRyx1QkFBdUIsb0JBQW9CLGlEQUFpRCxHQUFHLDJCQUEyQixvQkFBb0IsbUJBQW1CLHNCQUFzQixpREFBaUQsMERBQTBELGtCQUFrQixlQUFlLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsY0FBYyxpQkFBaUIsc0JBQXNCLHdCQUF3QixHQUFHLG1CQUFtQixtQkFBbUIsZUFBZSwwQkFBMEIsaUJBQWlCLHVCQUF1QixpQkFBaUIsMERBQTBELEdBQUcseUJBQXlCLHVDQUF1QyxHQUFHLG9CQUFvQixtQkFBbUIsc0NBQXNDLDhCQUE4QixrQkFBa0IsaUJBQWlCLDBCQUEwQiwwREFBMEQsR0FBRyw4Q0FBOEMsb0JBQW9CLHVDQUF1QyxHQUFHLDhCQUE4QixrQkFBa0IsMkJBQTJCLDRCQUE0QixvQkFBb0IsR0FBRyxrQkFBa0IsZ0JBQWdCLGtCQUFrQixjQUFjLG1DQUFtQyx1Q0FBdUMseUdBQXlHLDBCQUEwQixvQkFBb0IsR0FBRyxvQkFBb0IscUJBQXFCLG1CQUFtQixlQUFlLDBCQUEwQixtQkFBbUIsdUJBQXVCLGlCQUFpQiwwREFBMEQsR0FBRyx1QkFBdUIsb0JBQW9CLG1CQUFtQixlQUFlLDBCQUEwQixpQkFBaUIsc0JBQXNCLGlCQUFpQiwwREFBMEQsR0FBRyx3QkFBd0Isd0JBQXdCLG1CQUFtQixlQUFlLDBCQUEwQixpQkFBaUIscUJBQXFCLGlCQUFpQiwwREFBMEQsR0FBRyxxQkFBcUIscUJBQXFCLGlCQUFpQixtQkFBbUIsZUFBZSxxQkFBcUIsMkJBQTJCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHVCQUF1QixpQkFBaUIsMERBQTBELEdBQUcsaUJBQWlCLHNCQUFzQixlQUFlLG1CQUFtQixpQ0FBaUMsMEJBQTBCLGtCQUFrQixpQkFBaUIsMEJBQTBCLDBEQUEwRCxHQUFHLGVBQWUsa0JBQWtCLG1DQUFtQyx5QkFBeUIsd0JBQXdCLHVCQUF1QixrQkFBa0IsbUJBQW1CLGlEQUFpRCwwQkFBMEIsMERBQTBELGVBQWUsbUJBQW1CLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLFdBQVcsa0JBQWtCLG1DQUFtQyx1QkFBdUIsb0JBQW9CLG1CQUFtQix5Q0FBeUMsMkJBQTJCLCtCQUErQiwwQkFBMEIsMERBQTBELGVBQWUsR0FBRyxhQUFhLDRCQUE0QixlQUFlLG9CQUFvQixlQUFlLHVCQUF1QixtQkFBbUIsR0FBRyxpQkFBaUIscUNBQXFDLGlCQUFpQixpQkFBaUIsd0JBQXdCLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsdUNBQXVDLEdBQUcsZUFBZSxzQ0FBc0MsaUJBQWlCLGlCQUFpQix3QkFBd0Isb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQix1Q0FBdUMsR0FBRyxlQUFlLG1CQUFtQixvQkFBb0Isd0NBQXdDLHdCQUF3QixpQkFBaUIsd0JBQXdCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0Isd0NBQXdDLEdBQUcsZUFBZSxtQkFBbUIsb0JBQW9CLHdDQUF3Qyx3QkFBd0IsaUJBQWlCLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsd0NBQXdDLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QixpREFBaUQsZ0JBQWdCLGtCQUFrQixpQkFBaUIsd0JBQXdCLHVCQUF1QixXQUFXLFlBQVksR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsY0FBYyxrQkFBa0Isd0JBQXdCLGVBQWUsZ0JBQWdCLHlDQUF5QywwQkFBMEIsMERBQTBELEdBQUcsaUJBQWlCLG9CQUFvQix1QkFBdUIsZUFBZSxpQkFBaUIsMEJBQTBCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGlCQUFpQix3QkFBd0IsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsdUJBQXVCLHNCQUFzQixlQUFlLG1CQUFtQixpQ0FBaUMsMEJBQTBCLHVCQUF1QixrQkFBa0IsaUJBQWlCLDBCQUEwQiwwREFBMEQsR0FBRyw2QkFBNkIsb0JBQW9CLGlDQUFpQyxHQUFHLFNBQVMsZ0ZBQWdGLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8s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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnc2lkZWJhciBtYWluIG1haW4nO1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6IHJnYig5OCwgNjYsIDI0MSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2JhKDY1LCAzMywgMjAzLCAxKSA4JSxcXG4gICAgcmdiYSg2MSwgMzIsIDIwMCwgMSkgMjclLFxcbiAgICByZ2JhKDUsIDE1LCAxNTYsIDEpIDQ4JSxcXG4gICAgcmdiKDE0MSwgNzEsIDIzMykgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnNpZGVCYXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3REaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjEzNyk7XFxufVxcblxcbi5tYWluQ29udGVudENvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogOTIlO1xcbn1cXG5cXG4ucHJvamVjdEZvcm1EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0SW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0SW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiByZ2IoMjMsIDM2LCAyMTgpIHNvbGlkIDFweDtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTUsIDE1Nik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0bjpob3ZlcixcXG4jdG9Eb1N1YkJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDM2LCAyMTgpO1xcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3RpdGxlIHRpdGxlJ1xcbiAgICAnZGF0ZSBwcmlvcml0eSdcXG4gICAgJ25vdGVzIG5vdGVzJ1xcbiAgICAnYnV0dG9uIGJ1dHRvbic7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbiN0b0RvTmFtZUlucHV0IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb0R1ZURhdGVJbnB1dCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Ob3Rlc0lucHV0IHtcXG4gIGdyaWQtYXJlYTogbm90ZXM7XFxuICByZXNpemU6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvU3ViQnRuIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCAzMywgMjAzKTtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnRvRG9DYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMy4zcmVtO1xcbn1cXG5cXG4udG9Eb1RpdGxlRGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRvbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xcbiAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcXG4gIGJvcmRlcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1pbi1oZWlnaHQ6IDNweDtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDEuMnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAxNSwgMTUpO1xcbn1cXG5cXG4uZG9uZVRvRG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE1NSwgMjgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRvbmVUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTkyLCAzOCk7XFxufVxcblxcbi51bmRvVG9EbyB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDEzMiwgMTApO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi51bmRvVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNTMsIDI4KTtcXG59XFxuXFxuLmVkaXRUb0RvIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTk0LCAxMCk7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmVkaXRUb0RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIxNywgMjgpO1xcbn1cXG5cXG4uYnV0dG9uc0RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWxCbHVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbn1cXG5cXG4uY2xvc2VNb2RhbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWxMYWJlbHMge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDMzLCAyMDMpO1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMsIDM2LCAyMTgpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsU0FBUztFQUNULG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qs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WUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnc2lkZWJhciBtYWluIG1haW4nO1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6IHJnYig5OCwgNjYsIDI0MSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDcwZGVnLFxcbiAgICByZ2JhKDY1LCAzMywgMjAzLCAxKSA4JSxcXG4gICAgcmdiYSg2MSwgMzIsIDIwMCwgMSkgMjclLFxcbiAgICByZ2JhKDUsIDE1LCAxNTYsIDEpIDQ4JSxcXG4gICAgcmdiKDE0MSwgNzEsIDIzMykgMTAwJVxcbiAgKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnNpZGVCYXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3REaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjEzNyk7XFxufVxcblxcbi5tYWluQ29udGVudENvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogOTIlO1xcbn1cXG5cXG4ucHJvamVjdEZvcm1EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0SW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0SW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiByZ2IoMjMsIDM2LCAyMTgpIHNvbGlkIDFweDtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTUsIDE1Nik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0bjpob3ZlcixcXG4jdG9Eb1N1YkJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDM2LCAyMTgpO1xcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3RpdGxlIHRpdGxlJ1xcbiAgICAnZGF0ZSBwcmlvcml0eSdcXG4gICAgJ25vdGVzIG5vdGVzJ1xcbiAgICAnYnV0dG9uIGJ1dHRvbic7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbiN0b0RvTmFtZUlucHV0IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb0R1ZURhdGVJbnB1dCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Ob3Rlc0lucHV0IHtcXG4gIGdyaWQtYXJlYTogbm90ZXM7XFxuICByZXNpemU6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvU3ViQnRuIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCAzMywgMjAzKTtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnRvRG9DYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMy4zcmVtO1xcbn1cXG5cXG4udG9Eb1RpdGxlRGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRvbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xcbiAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcXG4gIGJvcmRlcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1pbi1oZWlnaHQ6IDNweDtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDEuMnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAxNSwgMTUpO1xcbn1cXG5cXG4uZG9uZVRvRG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE1NSwgMjgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRvbmVUb0RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTkyLCAzOCk7XFxufVxcblxcbi51bmRvVG9EbyB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDEzMiwgMTApO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi51bmRvVG9Ebzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNTMsIDI4KTtcXG59XFxuXFxuLmVkaXRUb0RvIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTk0LCAxMCk7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmVkaXRUb0RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIxNywgMjgpO1xcbn1cXG5cXG4uYnV0dG9uc0RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWxCbHVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbn1cXG5cXG4uY2xvc2VNb2RhbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMHB4O1xcbiAgcmlnaHQ6IC0xMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWxMYWJlbHMge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDMzLCAyMDMpO1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMsIDM2LCAyMTgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgc2F2ZVRvU3RvcmFnZSwgbG9hZEZyb21TdG9yYWdlLCBjbGVhclN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnXG5cbmxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcbmxldCBsYXRlc3RUb0RvID0gbnVsbDtcbmxldCBhY3RpdmVUb0RvID0gbnVsbDtcbi8vbGV0IGFjdGl2ZVRvRG9JRCA9IG51bGw7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHNBcnIgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHNldFByb2plY3RzQXJyID0gKHZhbHVlKSA9PiB7XG4gICAgcHJvamVjdHNBcnIgPSB2YWx1ZVxufVxuXG5sb2FkRnJvbVN0b3JhZ2UoKTtcblxuXG5cblxuXG5jb25zdCByZWZyZXNoVG9Eb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRlbnRDb250YWluZXInKTtcbiAgdG9Eb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBnZW5lcmF0ZVRvRG9Gb3JtKCk7XG4gIGFjdGl2ZVByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4gZ2VuZXJhdGVUb0RvQ2FyZCh0YXNrKSk7XG59O1xuXG5jb25zdCByZWZyZXNoUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzRGl2Jyk7XG4gIHByb2plY3RzRGl2LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnNvbGUubG9nKCdwbGVhc2UgbG9hZCB0aGlzOicpO1xuICBjb25zb2xlLnRhYmxlKHByb2plY3RzQXJyKTtcbiAgcHJvamVjdHNBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4gZ2VuZXJhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9DYXJkID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGVudENvbnRhaW5lcicpO1xuICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRvRG9DYXJkLmNsYXNzTGlzdC5hZGQoJ3RvRG9DYXJkJyk7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0NhcmQpO1xuXG4gIGNvbnNvbGUubG9nKCdwbGVhc2UgYmUgcmlnaHQgYmVsb3cnKTtcbiAgY29uc29sZS5sb2coYCR7YWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pfWApO1xuICBsZXQgY2FyZEluZGV4ID0gYWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pO1xuICBjb25zdCBjYXJkSUQgPSAndG9kbycgKyBjYXJkSW5kZXg7XG4gIHRvRG9DYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBjYXJkSUQpO1xuXG4gIGNvbnN0IHRvRG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZUNsYXNzID0gJ3RpdGxlRGl2JyArIGNhcmRJbmRleDtcbiAgdG9Eb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQodGl0bGVDbGFzcyk7XG4gIHRvRG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlRGl2KTtcblxuICBjb25zdCB0b0RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0b0RvRGF0ZURpdicpO1xuICB0b0RvRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcblxuICBjb25zdCB0b0RvUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvRG9Qcmlvcml0eURpdicpO1xuICB0b0RvUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICBjb25zdCB0b0RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb05vdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ3RvRG9Ob3Rlc0RpdicpO1xuICB0b0RvTm90ZXNEaXYudGV4dENvbnRlbnQgPSB0b2RvLm5vdGVzO1xuXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zRGl2Jyk7XG4gIHRvRG9DYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuXG4gIGNvbnN0IGRvbmVCdXR0b25Ub2dnbGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRvbmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZCgnZG9uZVRvRG8nKTtcbiAgICBkb25lVG9Eby50ZXh0Q29udGVudCA9ICdET05FPyc7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkb25lVG9Ebyk7XG4gICAgZG9uZVRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgdG9Eb0luZGV4ID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgICAgdG9Eb0luZGV4ID0gcGFyc2VJbnQodG9Eb0luZGV4KTtcbiAgICAgIGFjdGl2ZVRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzW3RvRG9JbmRleF07XG4gICAgICBhY3RpdmVUb0RvLnN0YXR1cyA9ICdjb21wbGV0ZSc7XG4gICAgICBtYXJrQXNEb25lKCk7XG4gICAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICB9KTtcbiAgfSkoKTtcblxuICBjb25zdCBtYXJrQXNEb25lID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvbmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdG9Eb0lEID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkO1xuICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9Eb0lEKTtcbiAgICBjb25zb2xlLmxvZygndG8gZG86Jyk7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICBjb25zb2xlLmxvZygnZG9uZTonKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QuZG9uZSk7XG4gICAgdGhpc0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgndG9Eb0NhcmQnKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgY29uc3Qgc3RyaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RyaWtlLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgIHRvRG9UaXRsZURpdi5hcHBlbmRDaGlsZChzdHJpa2UpO1xuICAgIGRvbmVUb0RvLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwKSc7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZCgnZWRpdFRvRG8nKTtcbiAgZWRpdFRvRG8udGV4dENvbnRlbnQgPSAnREVUQUlMUyc7XG4gIGVkaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFjdGl2ZVRvRG9JRCA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZDtcbiAgICBsZXQgZWRpdE1lID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIGVkaXRNZSA9IHBhcnNlSW50KGVkaXRNZSk7XG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbZWRpdE1lXTtcbiAgICBnZW5lcmF0ZVRvRG9Nb2RhbCgpO1xuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0VG9Ebyk7XG5cbiAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVUb0RvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRvRG8nKTtcbiAgZGVsZXRlVG9Eby50ZXh0Q29udGVudCA9ICdERUxFVEUnO1xuICBkZWxldGVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZU1lID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIGFjdGl2ZVRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzW2RlbGV0ZU1lXTtcbiAgICBjb25zdCBpbmRleE9mQWN0aXZlID0gYWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKGFjdGl2ZVRvRG8pO1xuICAgIGNvbnNvbGUubG9nKCdkZWxldGUgdGhpczogJyArIGluZGV4T2ZBY3RpdmUpO1xuICAgIGFjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGluZGV4T2ZBY3RpdmUsIDEpO1xuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUb0RvKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb05hbWVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCInVG8tRG8nIHRpdGxlLi4uXCIpO1xuICB0b0RvTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvRG9Gb3JtJyk7XG4gIHRvRG9OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb05hbWVJbnB1dCk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9EYXRlSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRvRG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRvRG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvRG9Gb3JtJyk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRvRG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICB0b0RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm0nKTtcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKTtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93IFByaW9yaXR5JztcbiAgY29uc3QgcmVndWxhclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIHJlZ3VsYXJQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1JlZ3VsYXInKTtcbiAgcmVndWxhclByaW9yaXR5LnRleHRDb250ZW50ID0gJ1JlZ3VsYXIgUHJpb3JpdHknO1xuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCBQcmlvcml0eSc7XG5cbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKHJlZ3VsYXJQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVUb0RvTm90ZXNJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9Ob3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOb3Rlcy4uLicpO1xuICB0b0RvTm90ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b0RvRm9ybScpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNJbnB1dCk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCA9IChpZCwgdGV4dCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICB0b0RvU3ViQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgdG9Eb1N1YkJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHRvRG9TdWJCdG4uY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm0nKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb1N1YkJ0bik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgdG9Eb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0Zvcm1EaXYuY2xhc3NMaXN0LmFkZCgndG9Eb0Zvcm1EaXYnKTtcblxuICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoJ3RvRG9OYW1lSW5wdXQnLCB0b0RvRm9ybURpdik7XG4gIGdlbmVyYXRlVG9Eb0RhdGVJbnB1dCgndG9Eb0R1ZURhdGVJbnB1dCcsIHRvRG9Gb3JtRGl2KTtcbiAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dCgndG9Eb1ByaW9yaXR5SW5wdXQnLCB0b0RvRm9ybURpdik7XG4gIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoJ3RvRG9Ob3Rlc0lucHV0JywgdG9Eb0Zvcm1EaXYpO1xuICBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCgndG9Eb1N1YkJ0bicsICdBREQgVE9ETycsIHRvRG9Gb3JtRGl2KTtcblxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50Q29udGFpbmVyJyk7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EaXYpO1xuXG4gIGNvbnN0IHRvRG9Gb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvTmFtZUlucHV0JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvRHVlRGF0ZUlucHV0JykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb1ByaW9yaXR5SW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0RvTm90ZXNJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHN0YXR1cyA9ICdpbmNvbXBsZXRlJztcbiAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9Eb1N1YkJ0bicpO1xuICB0b0RvU3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QudGFza3MucHVzaCh0b0RvRm9ybUlucHV0KCkpO1xuICAgIGxhdGVzdFRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDE7XG4gICAgYWN0aXZlVG9EbyA9IGxhdGVzdFRvRG87XG4gICAgY29uc29sZS5sb2coJ2xhdGVzdCAnICsgbGF0ZXN0VG9Ebyk7XG4gICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgYWN0aXZlVG9EbyA9IG51bGw7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJvamVjdENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250ZW50Q29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RIZWFkZXInKTtcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGFjdGl2ZVByb2plY3QubmFtZTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgcmV0dXJuIHByb2plY3RDb250ZW50Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyRGl2Jyk7XG5leHBvcnQgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyRGl2Jyk7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RDYXJkID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNEaXYnKTtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5pbmRleE9mKHByb2plY3QpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REaXYnKTtcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIHByb2plY3RzQXJyLmZvckVhY2goKG9iaikgPT4ge1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3RJbmRleCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Byb2plY3RJbmRleH1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpO1xuICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0FycltgJHtwcm9qZWN0SW5kZXh9YF07XG4gICAgY29uc29sZS5sb2coJ1RoZSBhY3RpdmUgcHJvamVjdCBpczogJyArIGFjdGl2ZVByb2plY3QubmFtZSk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5tYWluQ29udGVudENvbnRhaW5lcidcbiAgICApO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQoKSk7XG4gICAgZ2VuZXJhdGVUb0RvRm9ybSgpO1xuICAgIHJlZnJlc2hUb0RvcygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudENvbnRhaW5lcicpO1xuICBtYWluQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybURpdicpO1xuICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybURpdik7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdCBpcyB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3Q/Jyk7XG4gIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICBwcm9qZWN0SW5wdXQucXVlcnlTZWxlY3RvcignLnByb2plY3RJbnB1dCcpO1xuICBwcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBjb25zdCBwcm9qZWN0U3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBwcm9qZWN0U3ViQnRuLnRleHRDb250ZW50ID0gJ0NSRUFURSBQUk9KRUNUJztcbiAgcHJvamVjdFN1YkJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFN1YkJ0bicpO1xuICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0U3ViQnRuKTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0JykudmFsdWU7XG4gICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKTtcbiAgICBuYW1lLnZhbHVlID0gJyc7XG4gIH07XG5cbiAgcHJvamVjdFN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0c0Fyci5wdXNoKHByb2plY3RGb3JtSW5wdXQoKSk7XG4gICAgZ2VuZXJhdGVQcm9qZWN0Q2FyZChwcm9qZWN0Rm9ybUlucHV0KCkpO1xuICAgIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpO1xuICAgIHJlc2V0UHJvamVjdEZvcm0oKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGdlbmVyZXJhdGVDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQmx1cicpO1xuICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSAneCc7XG4gIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2xvc2VNb2RhbCcpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZU1vZGFsKTtcbiAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcbiAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuICAgIG1vZGFsLnRleHRDb250ZW50ID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3QgZ2VuZXJhdGVUb0RvTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbEJsdXInKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG5cbiAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0b0RvTmFtZS5jbGFzc0xpc3QuYWRkKCd0b0RvTmFtZU1vZGFsJyk7XG4gIGNvbnNvbGUubG9nKGFjdGl2ZVRvRG8pO1xuICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVRvRG8ubmFtZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XG5cbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9Eb0R1ZURhdGVNb2RhbCcpO1xuICB0b0RvRHVlRGF0ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5EdWUgRGF0ZTogPC9zcGFuPiR7YWN0aXZlVG9Eby5kYXRlfWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKTtcblxuICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvRG9Qcmlvcml0eU1vZGFsJyk7XG4gIHRvRG9Qcmlvcml0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Qcmlvcml0eTogPC9zcGFuPiR7YWN0aXZlVG9Eby5wcmlvcml0eX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvTm90ZXMuY2xhc3NMaXN0LmFkZCgndG9Eb05vdGVzTW9kYWwnKTtcbiAgdG9Eb05vdGVzLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPk5vdGVzOiA8L3NwYW4+JHthY3RpdmVUb0RvLm5vdGVzfWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Ob3Rlcyk7XG5cbiAgZ2VuZXJlcmF0ZUNsb3NlQnV0dG9uKCk7XG5cbiAgY29uc3QgZWRpdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZCgnZWRpdFRvRG8nKTtcbiAgZWRpdFRvRG8udGV4dENvbnRlbnQgPSAnRURJVCc7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGVkaXRUb0RvKTtcbiAgZWRpdFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gICAgbW9kYWwudGV4dENvbnRlbnQgPSAnJztcbiAgICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoJ2VkaXROYW1lSW5wdXQnLCBtb2RhbCk7XG4gICAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KCdlZGl0RGF0ZUlucHV0JywgbW9kYWwpO1xuICAgIGdlbmVyYXRlVG9Eb1ByaW9yaXR5SW5wdXQoJ2VkaXRQcmlvcml0eUlucHV0JywgbW9kYWwpO1xuICAgIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoJ2VkaXROb3Rlc0lucHV0JywgbW9kYWwpO1xuICAgIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KCdlZGl0U3VibWl0QnV0dG9uJywgJ1NVQk1JVCBDSEFOR0VTJywgbW9kYWwpO1xuICAgIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpO1xuICAgIGNvbnN0IGVkaXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXROYW1lSW5wdXQnKTtcbiAgICBlZGl0TmFtZS52YWx1ZSA9IGFjdGl2ZVRvRG8ubmFtZTtcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RGF0ZUlucHV0Jyk7XG4gICAgZWRpdERhdGUudmFsdWUgPSBhY3RpdmVUb0RvLmRhdGU7XG4gICAgY29uc3QgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcmlvcml0eUlucHV0Jyk7XG4gICAgZWRpdFByaW9yaXR5LnZhbHVlID0gYWN0aXZlVG9Eby5wcmlvcml0eTtcbiAgICBjb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdE5vdGVzSW5wdXQnKTtcbiAgICBlZGl0Tm90ZXMudmFsdWUgPSBhY3RpdmVUb0RvLm5vdGVzO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRTdWJtaXRCdXR0b24nKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhY3RpdmVUb0RvLm5hbWUgPSBlZGl0TmFtZS52YWx1ZTtcbiAgICAgICAgYWN0aXZlVG9Eby5kYXRlID0gZWRpdERhdGUudmFsdWU7XG4gICAgICAgIGFjdGl2ZVRvRG8ucHJpb3JpdHkgPSBlZGl0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgIGFjdGl2ZVRvRG8ubm90ZXMgPSBlZGl0Tm90ZXMudmFsdWU7XG4gICAgICAgIG1vZGFsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuICAgICAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuXG4gICAgICAgIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YoYWN0aXZlVG9Ebyk7XG4gICAgICAgIGNvbnN0IHRpdGxlQ2xhc3MgPSAnLnRpdGxlRGl2JyArIGNhcmRJbmRleDtcblxuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGl0bGVDbGFzcyk7XG5cbiAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBlZGl0TmFtZS52YWx1ZTtcblxuICAgICAgICBzYXZlVG9TdG9yYWdlKCk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5cblxuLy9nZW5lcmF0ZVVJKCk7XG4vL2dlbmVyYXRlUHJvamVjdEZvcm0oKTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuZG9uZSA9IFtdO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCB7IHByb2plY3RzQXJyLCBzZXRQcm9qZWN0c0FyciB9IGZyb20gJy4nO1xuXG4vL0xPQ0FMIFNUT1JBR0VcblxuZnVuY3Rpb24gc2F2ZVRvU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzQXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnIpKTtcbn1cblxuZnVuY3Rpb24gbG9hZEZyb21TdG9yYWdlKCkge1xuICBjb25zdCBsb2FkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0FycicpKTtcbiAgc2V0UHJvamVjdHNBcnIobG9hZFByb2plY3RzKTtcbiAgaWYgKHByb2plY3RzQXJyID09PSBudWxsKSBwcm9qZWN0c0FyciA9IFtdO1xuICBjb25zb2xlLnRhYmxlKHByb2plY3RzQXJyKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgcHJvamVjdHNBcnIgPSBbXTtcbiAgcmVzZXREaXNwbGF5KCk7XG59XG5cbmV4cG9ydCB7IHNhdmVUb1N0b3JhZ2UsIGxvYWRGcm9tU3RvcmFnZSwgY2xlYXJTdG9yYWdlIH07XG4iLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==