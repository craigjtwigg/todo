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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Josefin Sans', sans-serif;\n    font-size: 16px;\n    margin: 0;\n    background-color: rgb(212, 209, 209);\n}\n\n.container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 25% 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas: \"header header header\"\n                         \"sidebar main main\";\n}\n\n.headerDiv {\n    grid-area: header;\n    display: flex;\n    background: rgb(98, 66, 241);\n    background: linear-gradient(70deg, rgba(65,33,203,1) 8%, rgba(61,32,200,1) 27%, rgba(5,15,156,1) 48%, rgb(141, 71, 233) 100%);\n    color: white;\n    width: 100%;\n    height: 5rem;\n    padding: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0 0 0 6rem;\n}\n\nh1 {\n    color: white;\n    font-family: 'Josefin Sans', sans-serif;\n    text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n    display: block;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.sideBarDiv {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-area: sidebar;\n    margin: 0 1rem;\n    border-radius: 1rem;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 100%;\n}\n\n.projectsHeader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    font-size: 1.3rem;\n}\n\n.projectDiv {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(161, 160, 160, 0.137);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.projectDiv:hover {\n    cursor: pointer;\n    background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n    grid-area: main;\n    margin: 0 1rem;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 92%;\n}\n\n.projectFormDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    height: 100%;\n    padding-top: 2rem;\n    align-items: center;\n}\n\n#projectInput {\n    display: block;\n    width: 60%;\n    border-radius: 0.5rem;\n    height: 3rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n    border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn {\n    display: block;\n    background-color: rgb(5, 15, 156);\n    color: rgb(255, 255, 255);\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover, #toDoSubBtn:hover {\n    cursor: pointer;\n    background-color: rgb(23, 36, 218);\n   \n}\n\n.projectContentContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    \n    padding: 1rem;\n}\n\n.toDoFormDiv {\n    width: 100%;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr fr 1fr;\n    grid-template-areas: \"title title\"\n                         \"date priority\"\n                         \"notes notes\"\n                         \"button button\"   ;\n    justify-items: center;         \n    padding: 1.5rem;            \n}\n\n#toDoNameInput {\n    grid-area: title;\n    display: block;\n    width: 90%;\n    border-radius: 0.5rem;\n    height: 2.2rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n    grid-area: date;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 2rem;\n    text-align: right;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n    grid-area: priority;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 2rem;\n    text-align: left;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n    grid-area: notes;\n    resize: none;\n    display: block;\n    width: 90%;\n    min-height: 80px;\n    box-sizing: border-box;\n    font-size: 16px;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n    grid-area: button;\n    width: 90%;\n    display: block;\n    background: rgb(65,33,203);\n    color: blanchedalmond;\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n    display: flex;\n    justify-content: space-between;\n    justify-self: center;\n    align-items: center;\n    align-self: center;\n    padding: 1rem;\n    margin: 0.5rem;\n    background-color: rgba(161, 160, 160, 0.137);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n    height: 3.3rem;\n}\n\n.toDoTitleDiv {\n    font-size: 2rem;\n}\n\n.done {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    padding: 0.5rem;\n    margin: 0.5rem;\n    background-color: rgb(128, 128, 128);\n    color: rgb(59, 59, 59);\n    border: rgb(117, 117, 117);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.strike {\n    background-color: black;\n    width: 95%;\n    min-height: 3px;\n    z-index: 2;\n    position: relative;\n    bottom: 1.2rem;\n}\n\n.deleteToDo {\n    background-color: rgb(190, 0, 0);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n    cursor: pointer;\n    background-color: rgb(224, 15, 15);\n}\n\n.doneToDo {\n   \n    background-color: rgb(9, 155, 28);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.doneToDo:hover {\n    cursor: pointer;\n    background-color: rgb(15, 192, 38);\n}\n\n.undoToDo {\n    \n    margin: 0 1rem;\n    cursor: pointer;\n    background-color: rgb(226, 132, 10);\n    color: rgb(0, 0, 0);\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.undoToDo:hover {\n    cursor: pointer;\n    background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n    margin: 0 1rem;\n    cursor: pointer;\n    background-color: rgb(226, 194, 10);\n    color: rgb(0, 0, 0);\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.editToDo:hover {\n    background-color: rgb(250, 217, 28);\n}\n\n.buttonsDiv {\n    display: flex;\n}\n\n.modalBlur {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.719);\n    width: 100%;\n    height: 100vh;\n    z-index: 100;\n    transform: scale(0);\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    transform: scale(0);\n    width: 60%;\n    height: 60%;\n    background-color: rgb(218, 218, 218);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n    cursor: pointer;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    background-color: red;\n    color: white;\n    height: 30px;\n    width: 30px;\n    border: none;\n    border-radius: 15px;\n}\n\n.modalLabels {\n    font-weight: 900;\n}\n\n.addProjectButton {\n        grid-area: button;\n        width: 90%;\n        display: block;\n        background: rgb(65,33,203);\n        color: blanchedalmond;\n        margin-top: 1.5rem;\n        padding: 1rem;\n        border: none;\n        border-radius: 0.7rem;\n        box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n    cursor: pointer;\n    background: rgb(23, 36, 218);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');\n\n\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Josefin Sans', sans-serif;\n    font-size: 16px;\n    margin: 0;\n    background-color: rgb(212, 209, 209);\n}\n\n.container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 25% 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas: \"header header header\"\n                         \"sidebar main main\";\n}\n\n.headerDiv {\n    grid-area: header;\n    display: flex;\n    background: rgb(98, 66, 241);\n    background: linear-gradient(70deg, rgba(65,33,203,1) 8%, rgba(61,32,200,1) 27%, rgba(5,15,156,1) 48%, rgb(141, 71, 233) 100%);\n    color: white;\n    width: 100%;\n    height: 5rem;\n    padding: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0 0 0 6rem;\n}\n\nh1 {\n    color: white;\n    font-family: 'Josefin Sans', sans-serif;\n    text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n    display: block;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.sideBarDiv {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-area: sidebar;\n    margin: 0 1rem;\n    border-radius: 1rem;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 100%;\n}\n\n.projectsHeader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    font-size: 1.3rem;\n}\n\n.projectDiv {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(161, 160, 160, 0.137);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.projectDiv:hover {\n    cursor: pointer;\n    background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n    grid-area: main;\n    margin: 0 1rem;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 92%;\n}\n\n.projectFormDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    height: 100%;\n    padding-top: 2rem;\n    align-items: center;\n}\n\n#projectInput {\n    display: block;\n    width: 60%;\n    border-radius: 0.5rem;\n    height: 3rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n    border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn {\n    display: block;\n    background-color: rgb(5, 15, 156);\n    color: rgb(255, 255, 255);\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover, #toDoSubBtn:hover {\n    cursor: pointer;\n    background-color: rgb(23, 36, 218);\n   \n}\n\n.projectContentContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    \n    padding: 1rem;\n}\n\n.toDoFormDiv {\n    width: 100%;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr fr 1fr;\n    grid-template-areas: \"title title\"\n                         \"date priority\"\n                         \"notes notes\"\n                         \"button button\"   ;\n    justify-items: center;         \n    padding: 1.5rem;            \n}\n\n#toDoNameInput {\n    grid-area: title;\n    display: block;\n    width: 90%;\n    border-radius: 0.5rem;\n    height: 2.2rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n    grid-area: date;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 2rem;\n    text-align: right;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n    grid-area: priority;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 2rem;\n    text-align: left;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n    grid-area: notes;\n    resize: none;\n    display: block;\n    width: 90%;\n    min-height: 80px;\n    box-sizing: border-box;\n    font-size: 16px;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n    grid-area: button;\n    width: 90%;\n    display: block;\n    background: rgb(65,33,203);\n    color: blanchedalmond;\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n    display: flex;\n    justify-content: space-between;\n    justify-self: center;\n    align-items: center;\n    align-self: center;\n    padding: 1rem;\n    margin: 0.5rem;\n    background-color: rgba(161, 160, 160, 0.137);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n    height: 3.3rem;\n}\n\n.toDoTitleDiv {\n    font-size: 2rem;\n}\n\n.done {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    padding: 0.5rem;\n    margin: 0.5rem;\n    background-color: rgb(128, 128, 128);\n    color: rgb(59, 59, 59);\n    border: rgb(117, 117, 117);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.strike {\n    background-color: black;\n    width: 95%;\n    min-height: 3px;\n    z-index: 2;\n    position: relative;\n    bottom: 1.2rem;\n}\n\n.deleteToDo {\n    background-color: rgb(190, 0, 0);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n    cursor: pointer;\n    background-color: rgb(224, 15, 15);\n}\n\n.doneToDo {\n   \n    background-color: rgb(9, 155, 28);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.doneToDo:hover {\n    cursor: pointer;\n    background-color: rgb(15, 192, 38);\n}\n\n.undoToDo {\n    \n    margin: 0 1rem;\n    cursor: pointer;\n    background-color: rgb(226, 132, 10);\n    color: rgb(0, 0, 0);\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.undoToDo:hover {\n    cursor: pointer;\n    background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n    margin: 0 1rem;\n    cursor: pointer;\n    background-color: rgb(226, 194, 10);\n    color: rgb(0, 0, 0);\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.editToDo:hover {\n    background-color: rgb(250, 217, 28);\n}\n\n.buttonsDiv {\n    display: flex;\n}\n\n.modalBlur {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.719);\n    width: 100%;\n    height: 100vh;\n    z-index: 100;\n    transform: scale(0);\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    transform: scale(0);\n    width: 60%;\n    height: 60%;\n    background-color: rgb(218, 218, 218);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n    cursor: pointer;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    background-color: red;\n    color: white;\n    height: 30px;\n    width: 30px;\n    border: none;\n    border-radius: 15px;\n}\n\n.modalLabels {\n    font-weight: 900;\n}\n\n.addProjectButton {\n        grid-area: button;\n        width: 90%;\n        display: block;\n        background: rgb(65,33,203);\n        color: blanchedalmond;\n        margin-top: 1.5rem;\n        padding: 1rem;\n        border: none;\n        border-radius: 0.7rem;\n        box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.addProjectButton:hover {\n    cursor: pointer;\n    background: rgb(23, 36, 218);\n}"],"sourceRoot":""}]);
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");








(0,_dom__WEBPACK_IMPORTED_MODULE_1__.default)()
;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.generateProjectForm)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNl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YUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8s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QUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0Esb0NBQW9DLFNBQVM7QUFDN0MsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMENBQUk7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNBO0FBQ0E7QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9DQUFvQywwQ0FBMEMsMEJBQTBCLElBQUk7O0FBRTVHLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0EsbUNBQW1DLGFBQWE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZSw2Q0FBTztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLGdCQUFnQjtBQUN6Rjs7QUFFQTtBQUNBO0FBQ0EsMEVBQTBFLG9CQUFvQjtBQUM5Rjs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FLGlCQUFpQjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7QUFDTCxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL2QxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixLQUFLOztBQUVsQzs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7Ozs7Ozs7Ozs7O0FDZmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7VUNkbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05vQjtBQUN3RDtBQUMxQjtBQUN6QjtBQUNjOzs7O0FBSXZDLDZDQUFVO0FBQ1YsMERBQW1CIiwiZmlsZSI6ImluZGV4Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMDksIDIwOSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCI7XFxufVxcblxcbi5oZWFkZXJEaXYge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDk4LCA2NiwgMjQxKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDcwZGVnLCByZ2JhKDY1LDMzLDIwMywxKSA4JSwgcmdiYSg2MSwzMiwyMDAsMSkgMjclLCByZ2JhKDUsMTUsMTU2LDEpIDQ4JSwgcmdiKDE0MSwgNzEsIDIzMykgMTAwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnNpZGVCYXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjAsIDE2MCwgMC4xMzcpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0RGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTAxLCAxMDEsIDAuMTM3KTtcXG59XFxuXFxuLm1haW5Db250ZW50Q29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDkyJTtcXG59XFxuXFxuLnByb2plY3RGb3JtRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdElucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0SW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IHJnYigyMywgMzYsIDIxOCkgc29saWQgMXB4O1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTUsIDE1Nik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG46aG92ZXIsICN0b0RvU3ViQnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDM2LCAyMTgpO1xcbiAgIFxcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiZGF0ZSBwcmlvcml0eVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5vdGVzIG5vdGVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiYnV0dG9uIGJ1dHRvblxcXCIgICA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgICAgICAgICBcXG4gICAgcGFkZGluZzogMS41cmVtOyAgICAgICAgICAgIFxcbn1cXG5cXG4jdG9Eb05hbWVJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogMi4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvRHVlRGF0ZUlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvTm90ZXNJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogbm90ZXM7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1N1YkJ0biB7XFxuICAgIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogcmdiKDY1LDMzLDIwMyk7XFxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4udG9Eb0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAzLjNyZW07XFxufVxcblxcbi50b0RvVGl0bGVEaXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4KTtcXG4gICAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcXG4gICAgYm9yZGVyOiByZ2IoMTE3LCAxMTcsIDExNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWluLWhlaWdodDogM3B4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMS4ycmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9EbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9Ebzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTUsIDE1KTtcXG59XFxuXFxuLmRvbmVUb0RvIHtcXG4gICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE1NSwgMjgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZG9uZVRvRG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTkyLCAzOCk7XFxufVxcblxcbi51bmRvVG9EbyB7XFxuICAgIFxcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMzIsIDEwKTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi51bmRvVG9Ebzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTUzLCAyOCk7XFxufVxcblxcbi5lZGl0VG9EbyB7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDE5NCwgMTApO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmVkaXRUb0RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjE3LCAyOCk7XFxufVxcblxcbi5idXR0b25zRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsQmx1ciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjNyZW0gMC4zcmVtIDAuM3JlbTtcXG59XFxuXFxuLmNsb3NlTW9kYWwge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTBweDtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWxMYWJlbHMge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbiB7XFxuICAgICAgICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig2NSwzMywyMDMpO1xcbiAgICAgICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzLCAzNiwgMjE4KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMs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SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7UUFDUSxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixxREFBcUQ7QUFDN0Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMDksIDIwOSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCI7XFxufVxcblxcbi5oZWFkZXJEaXYge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDk4LCA2NiwgMjQxKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDcwZGVnLCByZ2JhKDY1LDMzLDIwMywxKSA4JSwgcmdiYSg2MSwzMiwyMDAsMSkgMjclLCByZ2JhKDUsMTUsMTU2LDEpIDQ4JSwgcmdiKDE0MSwgNzEsIDIzMykgMTAwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnNpZGVCYXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjAsIDE2MCwgMC4xMzcpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0RGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTAxLCAxMDEsIDAuMTM3KTtcXG59XFxuXFxuLm1haW5Db250ZW50Q29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDkyJTtcXG59XFxuXFxuLnByb2plY3RGb3JtRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdElucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0SW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IHJnYigyMywgMzYsIDIxOCkgc29saWQgMXB4O1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTUsIDE1Nik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG46aG92ZXIsICN0b0RvU3ViQnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDM2LCAyMTgpO1xcbiAgIFxcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiZGF0ZSBwcmlvcml0eVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5vdGVzIG5vdGVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiYnV0dG9uIGJ1dHRvblxcXCIgICA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgICAgICAgICBcXG4gICAgcGFkZGluZzogMS41cmVtOyAgICAgICAgICAgIFxcbn1cXG5cXG4jdG9Eb05hbWVJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogMi4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvRHVlRGF0ZUlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvTm90ZXNJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogbm90ZXM7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1N1YkJ0biB7XFxuICAgIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogcmdiKDY1LDMzLDIwMyk7XFxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4udG9Eb0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAzLjNyZW07XFxufVxcblxcbi50b0RvVGl0bGVEaXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4KTtcXG4gICAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcXG4gICAgYm9yZGVyOiByZ2IoMTE3LCAxMTcsIDExNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWluLWhlaWdodDogM3B4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMS4ycmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9EbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9Ebzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTUsIDE1KTtcXG59XFxuXFxuLmRvbmVUb0RvIHtcXG4gICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE1NSwgMjgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZG9uZVRvRG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTkyLCAzOCk7XFxufVxcblxcbi51bmRvVG9EbyB7XFxuICAgIFxcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMzIsIDEwKTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi51bmRvVG9Ebzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTUzLCAyOCk7XFxufVxcblxcbi5lZGl0VG9EbyB7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDE5NCwgMTApO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmVkaXRUb0RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjE3LCAyOCk7XFxufVxcblxcbi5idXR0b25zRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsQmx1ciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjNyZW0gMC4zcmVtIDAuM3JlbTtcXG59XFxuXFxuLmNsb3NlTW9kYWwge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTBweDtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWxMYWJlbHMge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbiB7XFxuICAgICAgICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig2NSwzMywyMDMpO1xcbiAgICAgICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzLCAzNiwgMjE4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IFByb2plY3QsIHsgYWN0aXZlIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xuZXhwb3J0IGxldCBsYXRlc3RUb0RvID0gbnVsbDtcbmV4cG9ydCBsZXQgYWN0aXZlVG9EbyA9IG51bGw7XG5leHBvcnQgbGV0IGFjdGl2ZVRvRG9JRCA9IG51bGw7XG5cbmNvbnN0IGdlbmVyYXRlVUkgPSAoKSA9PiB7XG4gIGxvYWRGcm9tU3RvcmFnZSgpXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJEaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUT0RPc1wiO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgfSkoKTtcblxuICBjb25zdCBnZW5lcmF0ZVNpZGVCYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGVCYXJEaXYuY2xhc3NMaXN0LmFkZChcInNpZGVCYXJEaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXJEaXYpO1xuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNIZWFkZXJcIik7XG4gICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzRGl2XCIpXG4gICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0cylcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBQUk9KRUNUXCJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0QnV0dG9uXCIpXG4gICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKVxuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiXG4gICAgcmVmcmVzaFByb2plY3RzKClcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBnZW5lcmF0ZVByb2plY3RGb3JtKClcbiAgICAgIFxuICAgIH0pXG5cbiAgfSkoKTtcblxuICBjb25zdCBnZW5lcmF0ZU1haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50Q29udGFpbmVyKTtcbiAgfSkoKTtcblxuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbEJsdXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsQmx1clwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbEJsdXIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWxCbHVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbn07XG5cbmNvbnN0IHJlZnJlc2hUb0RvcyA9ICgpID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gICAgICB0b0RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgZ2VuZXJhdGVUb0RvRm9ybSgpXG5hY3RpdmVQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiBnZW5lcmF0ZVRvRG9DYXJkKHRhc2spIClcbn1cblxuY29uc3QgcmVmcmVzaFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNEaXZcIilcbiAgcHJvamVjdHNEaXYudGV4dENvbnRlbnQgPSBcIlwiXG4gIGNvbnNvbGUubG9nKFwicGxlYXNlIGxvYWQgdGhpczpcIilcbiAgY29uc29sZS50YWJsZShwcm9qZWN0c0FycilcbiAgcHJvamVjdHNBcnIuZm9yRWFjaChwcm9qZWN0ID0+IGdlbmVyYXRlUHJvamVjdENhcmQocHJvamVjdCkpXG59XG5cblxuXG5jb25zdCBnZW5lcmF0ZVRvRG9DYXJkID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gIGNvbnN0IHRvRG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gIHRvRG9DYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ2FyZFwiKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQ2FyZCk7XG5cbiAgY29uc29sZS5sb2coXCJwbGVhc2UgYmUgcmlnaHQgYmVsb3dcIilcbiAgY29uc29sZS5sb2coYCR7YWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pfWApXG4gIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YodG9kbyk7XG4gIGNvbnN0IGNhcmRJRCA9IFwidG9kb1wiICsgY2FyZEluZGV4O1xuICB0b0RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjYXJkSUQpO1xuXG4gIGNvbnN0IHRvRG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlQ2xhc3MgPSBcInRpdGxlRGl2XCIgKyBjYXJkSW5kZXhcbiAgdG9Eb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQodGl0bGVDbGFzcyk7XG4gIHRvRG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlRGl2KTtcblxuICBjb25zdCB0b0RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRGF0ZURpdlwiKTtcbiAgdG9Eb0RhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0RhdGVEaXYpXG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlEaXZcIik7XG4gIHRvRG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5RGl2KVxuICBjb25zdCB0b0RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Ob3Rlc0RpdlwiKTtcbiAgdG9Eb05vdGVzRGl2LnRleHRDb250ZW50ID0gdG9kby5ub3RlcztcbiAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNEaXYpXG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNEaXZcIilcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgXG5cbiAgY29uc3QgZG9uZUJ1dHRvblRvZ2dsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZChcImRvbmVUb0RvXCIpO1xuICBkb25lVG9Eby50ZXh0Q29udGVudCA9IFwiRE9ORT9cIjtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkb25lVG9Ebyk7XG4gIGRvbmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0lEID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkO1xuICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9Eb0lEKTtcbiAgICBsZXQgdG9Eb0luZGV4ID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIHRvRG9JbmRleCA9IHBhcnNlSW50KHRvRG9JbmRleCk7XG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbdG9Eb0luZGV4XTtcbiAgICAvL2FjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpO1xuICAgIC8vYWN0aXZlUHJvamVjdC5kb25lLnB1c2goYCR7ZGVsZXRlTWV9YCk7XG4gICAgYWN0aXZlVG9Eby5zdGF0dXMgPSBcImNvbXBsZXRlXCJcbiAgICAvL2FjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpO1xuICAgIC8vYWN0aXZlUHJvamVjdC5kb25lLnB1c2goYCR7ZGVsZXRlTWV9YCk7XG4gICAgYWN0aXZlVG9Eby5zdGF0dXMgPSBcImNvbXBsZXRlXCJcbiAgICBjb25zb2xlLmxvZyhcInRvIGRvOlwiKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIGNvbnNvbGUubG9nKFwiZG9uZTpcIik7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LmRvbmUpO1xuICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b0RvQ2FyZFwiKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgICBjb25zdCBzdHJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3RyaWtlLmNsYXNzTGlzdC5hZGQoXCJzdHJpa2VcIilcbiAgICB0b0RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQoc3RyaWtlKVxuICAgIGRvbmVUb0RvLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIlxuICB9KVxufSkoKVxuXG4gIGNvbnN0IGVkaXRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZChcImVkaXRUb0RvXCIpO1xuICBlZGl0VG9Eby50ZXh0Q29udGVudCA9IFwiREVUQUlMU1wiO1xuICBlZGl0VG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFjdGl2ZVRvRG9JRCA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZFxuICAgIGxldCBlZGl0TWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgZWRpdE1lID0gcGFyc2VJbnQoZWRpdE1lKTtcbiAgICBhY3RpdmVUb0RvID0gYWN0aXZlUHJvamVjdC50YXNrc1tlZGl0TWVdO1xuICAgIGdlbmVyYXRlVG9Eb01vZGFsKCk7XG4gIH0pO1xuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGVkaXRUb0RvKTtcblxuICBjb25zdCBkZWxldGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlVG9Eby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVG9Eb1wiKTtcbiAgZGVsZXRlVG9Eby50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gIGRlbGV0ZVRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVNZSA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZC5zbGljZSg0KTtcbiAgICAvL2NvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlTWUpXG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbZGVsZXRlTWVdXG4gICAgY29uc3QgaW5kZXhPZkFjdGl2ZSA9IGFjdGl2ZVByb2plY3QudGFza3MuaW5kZXhPZihhY3RpdmVUb0RvKVxuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIHRoaXM6IFwiICsgaW5kZXhPZkFjdGl2ZSlcbiAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleE9mQWN0aXZlLCAxKTtcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIC8vdGhpc0NhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzQ2FyZClcbiAgICByZWZyZXNoVG9Eb3MoKVxuICAgIHNhdmVUb1N0b3JhZ2UoKVxuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUb0RvKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb05hbWVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvRG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiJ1RvLURvJyB0aXRsZS4uLlwiKTtcbiAgdG9Eb05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIHRvRG9OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb05hbWVJbnB1dClcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvRG9EdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgdG9Eb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKTtcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKTtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvdyBQcmlvcml0eVwiO1xuICBjb25zdCByZWd1bGFyUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICByZWd1bGFyUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJSZWd1bGFyXCIpO1xuICByZWd1bGFyUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlJlZ3VsYXIgUHJpb3JpdHlcIjtcbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoIFByaW9yaXR5XCI7XG5cbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgdG9Eb1ByaW9yaXR5LmFwcGVuZENoaWxkKHJlZ3VsYXJQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpXG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAvLyB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5vdGVzLi4uXCIpO1xuICB0b0RvTm90ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9Ob3Rlc0lucHV0KVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dCA9IChpZCwgdGV4dCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0b0RvU3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICB0b0RvU3ViQnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgdG9Eb1N1YkJ0bi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9TdWJCdG4pXG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRvRG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCB0b0RvRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Gb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybURpdlwiKTtcblxuICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoXCJ0b0RvTmFtZUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9EYXRlSW5wdXQoXCJ0b0RvRHVlRGF0ZUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0KFwidG9Eb1ByaW9yaXR5SW5wdXRcIiwgdG9Eb0Zvcm1EaXYpXG4gIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoXCJ0b0RvTm90ZXNJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQoXCJ0b0RvU3ViQnRuXCIsIFwiQUREIFRPRE9cIiwgdG9Eb0Zvcm1EaXYpXG5cblxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGVudENvbnRhaW5lclwiKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRm9ybURpdik7XG5cbiAgY29uc3QgdG9Eb0Zvcm1JbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvTmFtZUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9EdWVEYXRlSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9Qcmlvcml0eUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvTm90ZXNJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBzdGF0dXMgPSBcImluY29tcGxldGVcIlxuICAgIHJldHVybiBuZXcgVGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cyk7XG4gIH07XG5cbiAgY29uc3QgdG9Eb1N1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb1N1YkJ0blwiKVxuICB0b0RvU3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5wdXNoKHRvRG9Gb3JtSW5wdXQoKSk7XG4gICAgbGF0ZXN0VG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoIC0gMTtcbiAgICBhY3RpdmVUb0RvID0gbGF0ZXN0VG9Eb1xuICAgIGNvbnNvbGUubG9nKFwibGF0ZXN0IFwiICsgbGF0ZXN0VG9Ebyk7XG4gICAgcmVmcmVzaFRvRG9zKClcbiAgICBhY3RpdmVUb0RvID0gbnVsbFxuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpXG4gIH0pO1xufTtcblxuY29uc3QgcHJvamVjdENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250ZW50Q29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SGVhZGVyXCIpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gYWN0aXZlUHJvamVjdC5uYW1lO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICByZXR1cm4gcHJvamVjdENvbnRlbnRDb250YWluZXI7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJEaXZcIik7XG5leHBvcnQgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhckRpdlwiKTtcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c0RpdlwiKVxuLy9leHBvcnQgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50Q29udGFpbmVyXCIpXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RDYXJkID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzRGl2XCIpXG4gIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJEaXZcIik7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5sZW5ndGggLSAxO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGl2XCIpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgcHJvamVjdHNBcnIuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0SW5kZXgpO1xuICB9KTtcblxuICAvL2NvbnN0IGVhY2hQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RGl2XCIpXG4gIC8vZWFjaFByb2plY3QuZm9yRWFjaChwcm9qZWN0ID0+IHsgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKSB9ICkgfSApXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdEluZGV4fWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEluZGV4KTtcbiAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHNBcnJbYCR7cHJvamVjdEluZGV4fWBdO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIGFjdGl2ZSBwcm9qZWN0IGlzOiBcIiArIGFjdGl2ZVByb2plY3QubmFtZSk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubWFpbkNvbnRlbnRDb250YWluZXJcIlxuICAgICk7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KCkpO1xuICAgIGdlbmVyYXRlVG9Eb0Zvcm0oKTtcbiAgICByZWZyZXNoVG9Eb3MoKVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gIG1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybURpdlwiKTtcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHlvdXIgcHJvamVjdD9cIik7XG4gIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gIHByb2plY3RJbnB1dC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbnB1dFwiKTtcbiAgcHJvamVjdElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgcHJvamVjdFN1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgcHJvamVjdFN1YkJ0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFBST0pFQ1RcIjtcbiAgcHJvamVjdFN1YkJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1cIik7XG4gIHByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3ViQnRuXCIpO1xuICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0U3ViQnRuKTtcblxuXG4gIGNvbnN0IHByb2plY3RGb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdElucHV0XCIpLnZhbHVlO1xuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKVxufVxuXG5jb25zdCByZXNldFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJbnB1dFwiKVxuICAgIG5hbWUudmFsdWUgPSBcIlwiXG59XG5cblxucHJvamVjdFN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RzQXJyLnB1c2gocHJvamVjdEZvcm1JbnB1dCgpKVxuICAgIGdlbmVyYXRlUHJvamVjdENhcmQocHJvamVjdEZvcm1JbnB1dCgpKVxuICAgIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpXG4gICAgcmVzZXRQcm9qZWN0Rm9ybSgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdXR0b25cIilcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIlxuICAgIHNhdmVUb1N0b3JhZ2UoKVxufSlcblxuXG5cblxuXG59O1xuXG5cbmNvbnN0IGdlbmVyZXJhdGVDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQmx1clwiKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSBcInhcIjtcbiAgY2xvc2VNb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VNb2RhbFwiKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VNb2RhbCk7XG4gIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICB9KVxufTtcblxuY29uc3QgZ2VuZXJhdGVUb0RvTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxCbHVyXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG4gIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblxuICBjb25zdCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdG9Eb05hbWUuY2xhc3NMaXN0LmFkZChcInRvRG9OYW1lTW9kYWxcIik7XG4gIGNvbnNvbGUubG9nKGFjdGl2ZVRvRG8pO1xuICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVRvRG8ubmFtZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XG5cbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9Eb0R1ZURhdGVNb2RhbFwiKTtcbiAgdG9Eb0R1ZURhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzID1cIm1vZGFsTGFiZWxzXCI+RHVlIERhdGU6IDwvc3Bhbj4ke2FjdGl2ZVRvRG8uZGF0ZX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSk7XG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlNb2RhbFwiKTtcbiAgdG9Eb1ByaW9yaXR5LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPlByaW9yaXR5OiA8L3NwYW4+JHthY3RpdmVUb0RvLnByaW9yaXR5fWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Qcmlvcml0eSk7XG5cbiAgY29uc3QgdG9Eb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb05vdGVzLmNsYXNzTGlzdC5hZGQoXCJ0b0RvTm90ZXNNb2RhbFwiKTtcbiAgdG9Eb05vdGVzLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPk5vdGVzOiA8L3NwYW4+JHthY3RpdmVUb0RvLm5vdGVzfWA7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvRG9Ob3Rlcyk7XG5cbiAgZ2VuZXJlcmF0ZUNsb3NlQnV0dG9uKClcblxuICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgZWRpdFRvRG8uY2xhc3NMaXN0LmFkZChcImVkaXRUb0RvXCIpXG4gIGVkaXRUb0RvLnRleHRDb250ZW50ID0gXCJFRElUXCJcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZWRpdFRvRG8pXG4gIGVkaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgIG1vZGFsLnRleHRDb250ZW50ID0gXCJcIlxuICAgIGdlbmVyYXRlVG9Eb05hbWVJbnB1dChcImVkaXROYW1lSW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KFwiZWRpdERhdGVJbnB1dFwiLCBtb2RhbClcbiAgICBnZW5lcmF0ZVRvRG9Qcmlvcml0eUlucHV0KFwiZWRpdFByaW9yaXR5SW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvTm90ZXNJbnB1dChcImVkaXROb3Rlc0lucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KFwiZWRpdFN1Ym1pdEJ1dHRvblwiLCBcIlNVQk1JVCBDSEFOR0VTXCIsIG1vZGFsKVxuICAgIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpXG4gICAgY29uc3QgZWRpdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXROYW1lSW5wdXRcIilcbiAgICBlZGl0TmFtZS52YWx1ZSA9IGFjdGl2ZVRvRG8ubmFtZVxuICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0RGF0ZUlucHV0XCIpXG4gICAgZWRpdERhdGUudmFsdWUgPSBhY3RpdmVUb0RvLmRhdGVcbiAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRQcmlvcml0eUlucHV0XCIpXG4gICAgZWRpdFByaW9yaXR5LnZhbHVlID0gYWN0aXZlVG9Eby5wcmlvcml0eVxuICAgIGNvbnN0IGVkaXROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdE5vdGVzSW5wdXRcIilcbiAgICBlZGl0Tm90ZXMudmFsdWUgPSBhY3RpdmVUb0RvLm5vdGVzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0U3VibWl0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhY3RpdmVUb0RvLm5hbWUgPSBlZGl0TmFtZS52YWx1ZVxuICAgICAgYWN0aXZlVG9Eby5kYXRlID0gZWRpdERhdGUudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8ucHJpb3JpdHkgPSBlZGl0UHJpb3JpdHkudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8ubm90ZXMgPSBlZGl0Tm90ZXMudmFsdWVcbiAgICAgIG1vZGFsLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICAgIG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblxuICAgICAgbGV0IGNhcmRJbmRleCA9IGFjdGl2ZVByb2plY3QudGFza3MuaW5kZXhPZihhY3RpdmVUb0RvKTtcbiAgICAgIGNvbnN0IHRpdGxlQ2xhc3MgPSBcIi50aXRsZURpdlwiICsgY2FyZEluZGV4XG4gICAgICBcblxuICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlQ2xhc3MpXG4gIFxuICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBlZGl0TmFtZS52YWx1ZVxuXG4gICAgICBzYXZlVG9TdG9yYWdlKClcblxuICAgIH0pXG4gIH0pXG4gIFxufTtcblxuLy9MT0NBTCBTVE9SQUdFXG5cbmxldCBwcm9qZWN0c0FyciA9IFtdXG5cbmZ1bmN0aW9uIHNhdmVUb1N0b3JhZ2UoKXtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzQXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnIpKTtcblxufVxuXG5mdW5jdGlvbiBsb2FkRnJvbVN0b3JhZ2UoKXtcbiAgcHJvamVjdHNBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0FycicpKTtcbiAgIGlmKHByb2plY3RzQXJyID09PSBudWxsKSBwcm9qZWN0c0FyciA9IFtdO1xuICAgY29uc29sZS50YWJsZShwcm9qZWN0c0Fycilcbn1cblxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCl7XG4gICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgIHByb2plY3RzQXJyID0gW107XG4gICByZXNldERpc3BsYXkoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVVSTtcbiIsIi8vZXhwb3J0IGxldCBwcm9qZWN0c0FyciA9IFtdXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICAgICAgdGhpcy5kb25lID0gW11cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IGAke25hbWV9YC50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpXG4gICAgICAgXG4gICAgICAgIHRoaXMuaWQgPSBwcm9qZWN0SURcbiAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0YXR1cyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzXG5cbiAgICAgICAgY29uc3QgdGFza0lEID0gbmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAgLSA5OTkgKyAxMDApKVxuICAgICAgICAgICBcbiAgICAgICAgdGhpcy5pZCA9IHRhc2tJRFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgZ2VuZXJhdGVVSSwgeyBnZW5lcmF0ZVByb2plY3RDYXJkLCBnZW5lcmF0ZVByb2plY3RGb3JtIH0gZnJvbSAnLi9kb20nXG5pbXBvcnQgUHJvamVjdCwgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJ1xuaW1wb3J0IHsgcHJvamVjdHNBcnIgfSBmcm9tICcuL3Byb2plY3QnXG5cblxuXG5nZW5lcmF0ZVVJKClcbmdlbmVyYXRlUHJvamVjdEZvcm0oKVxuXG4iXSwic291cmNlUm9vdCI6IiJ9