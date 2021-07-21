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

  //todo.status === "complete" ? markAsDone() : null;

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
  
    let toDoIndex = buttonsDiv.parentNode.id.slice(4);
    toDoIndex = parseInt(toDoIndex);
    activeToDo = activeProject.tasks[toDoIndex];
    activeToDo.status = "complete"
    //activeProject.tasks.splice(`${deleteMe}`, 1);
    //activeProject.done.push(`${deleteMe}`);
    
    //activeProject.tasks.splice(`${deleteMe}`, 1);
    //activeProject.done.push(`${deleteMe}`);
    //activeToDo.status = "complete"
    markAsDone()
    refreshToDos()
  })
})()

const markAsDone = () => {
  const doneToDo = document.createElement("button");
  const toDoID = buttonsDiv.parentNode.id;
  const thisCard = document.getElementById(toDoID);
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
}

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
  const projectIndex = projectsArr.indexOf(project);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNl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YUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8s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QUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3plMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsS0FBSzs7QUFFbEM7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxPOzs7Ozs7Ozs7Ozs7OztBQ2ZmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7O1VDZG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDd0Q7QUFDMUI7QUFDekI7QUFDYzs7OztBQUl2Qyw2Q0FBVTtBQUNWLDBEQUFtQiIsImZpbGUiOiJpbmRleC5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwic2lkZWJhciBtYWluIG1haW5cXFwiO1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig5OCwgNjYsIDI0MSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgcmdiYSg2NSwzMywyMDMsMSkgOCUsIHJnYmEoNjEsMzIsMjAwLDEpIDI3JSwgcmdiYSg1LDE1LDE1NiwxKSA0OCUsIHJnYigxNDEsIDcxLCAyMzMpIDEwMCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDZyZW07XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnByb2plY3RIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5zaWRlQmFyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucHJvamVjdERpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjEzNyk7XFxufVxcblxcbi5tYWluQ29udGVudENvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA5MiU7XFxufVxcblxcbi5wcm9qZWN0Rm9ybURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdElucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiByZ2IoMjMsIDM2LCAyMTgpIHNvbGlkIDFweDtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDE1LCAxNTYpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuOmhvdmVyLCAjdG9Eb1N1YkJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAzNiwgMjE4KTtcXG4gICBcXG59XFxuXFxuLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9Eb0Zvcm1EaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciBmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZSB0aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRhdGUgcHJpb3JpdHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJub3RlcyBub3Rlc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImJ1dHRvbiBidXR0b25cXFwiICAgO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgXFxuICAgIHBhZGRpbmc6IDEuNXJlbTsgICAgICAgICAgICBcXG59XFxuXFxuI3RvRG9OYW1lSW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb0R1ZURhdGVJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Qcmlvcml0eUlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb05vdGVzSW5wdXQge1xcbiAgICBncmlkLWFyZWE6IG5vdGVzO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9TdWJCdG4ge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NSwzMywyMDMpO1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnRvRG9DYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMy4zcmVtO1xcbn1cXG5cXG4udG9Eb1RpdGxlRGl2IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZG9uZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCk7XFxuICAgIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxuICAgIGJvcmRlcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1pbi1oZWlnaHQ6IDNweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEuMnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDE1LCAxNSk7XFxufVxcblxcbi5kb25lVG9EbyB7XFxuICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAxNTUsIDI4KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRvbmVUb0RvOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE5MiwgMzgpO1xcbn1cXG5cXG4udW5kb1RvRG8ge1xcbiAgICBcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTMyLCAxMCk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4udW5kb1RvRG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE1MywgMjgpO1xcbn1cXG5cXG4uZWRpdFRvRG8ge1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxOTQsIDEwKTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi5lZGl0VG9Ebzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIxNywgMjgpO1xcbn1cXG5cXG4uYnV0dG9uc0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbEJsdXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcxOSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4zcmVtIDAuM3JlbSAwLjNyZW07XFxufVxcblxcbi5jbG9zZU1vZGFsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTEwcHg7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsTGFiZWxzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBidXR0b247XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNjUsMzMsMjAzKTtcXG4gICAgICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMywgMzYsIDIxOCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7SUFDSSxTQUFTO0lBQ1Qsc0JB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QTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO1FBQ1EsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixjQUFjO1FBQ2QsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFlBQVk7UUFDWixxQkFBcUI7UUFDckIscURBQXFEO0FBQzdEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwic2lkZWJhciBtYWluIG1haW5cXFwiO1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig5OCwgNjYsIDI0MSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgcmdiYSg2NSwzMywyMDMsMSkgOCUsIHJnYmEoNjEsMzIsMjAwLDEpIDI3JSwgcmdiYSg1LDE1LDE1NiwxKSA0OCUsIHJnYigxNDEsIDcxLCAyMzMpIDEwMCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDZyZW07XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnByb2plY3RIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5zaWRlQmFyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucHJvamVjdERpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjEzNyk7XFxufVxcblxcbi5tYWluQ29udGVudENvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA5MiU7XFxufVxcblxcbi5wcm9qZWN0Rm9ybURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdElucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiByZ2IoMjMsIDM2LCAyMTgpIHNvbGlkIDFweDtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDE1LCAxNTYpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuOmhvdmVyLCAjdG9Eb1N1YkJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAzNiwgMjE4KTtcXG4gICBcXG59XFxuXFxuLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9Eb0Zvcm1EaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciBmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZSB0aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRhdGUgcHJpb3JpdHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJub3RlcyBub3Rlc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImJ1dHRvbiBidXR0b25cXFwiICAgO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgXFxuICAgIHBhZGRpbmc6IDEuNXJlbTsgICAgICAgICAgICBcXG59XFxuXFxuI3RvRG9OYW1lSW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb0R1ZURhdGVJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Qcmlvcml0eUlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb05vdGVzSW5wdXQge1xcbiAgICBncmlkLWFyZWE6IG5vdGVzO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9TdWJCdG4ge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NSwzMywyMDMpO1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnRvRG9DYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMy4zcmVtO1xcbn1cXG5cXG4udG9Eb1RpdGxlRGl2IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZG9uZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCk7XFxuICAgIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxuICAgIGJvcmRlcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1pbi1oZWlnaHQ6IDNweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEuMnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRlbGV0ZVRvRG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDE1LCAxNSk7XFxufVxcblxcbi5kb25lVG9EbyB7XFxuICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAxNTUsIDI4KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmRvbmVUb0RvOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE5MiwgMzgpO1xcbn1cXG5cXG4udW5kb1RvRG8ge1xcbiAgICBcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTMyLCAxMCk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4udW5kb1RvRG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE1MywgMjgpO1xcbn1cXG5cXG4uZWRpdFRvRG8ge1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxOTQsIDEwKTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi5lZGl0VG9Ebzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIxNywgMjgpO1xcbn1cXG5cXG4uYnV0dG9uc0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbEJsdXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcxOSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4zcmVtIDAuM3JlbSAwLjNyZW07XFxufVxcblxcbi5jbG9zZU1vZGFsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTEwcHg7XFxuICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsTGFiZWxzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b24ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBidXR0b247XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNjUsMzMsMjAzKTtcXG4gICAgICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLmFkZFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMywgMzYsIDIxOCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImltcG9ydCBQcm9qZWN0LCB7IGFjdGl2ZSB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcbmV4cG9ydCBsZXQgbGF0ZXN0VG9EbyA9IG51bGw7XG5leHBvcnQgbGV0IGFjdGl2ZVRvRG8gPSBudWxsO1xuZXhwb3J0IGxldCBhY3RpdmVUb0RvSUQgPSBudWxsO1xuXG5jb25zdCBnZW5lcmF0ZVVJID0gKCkgPT4ge1xuICBsb2FkRnJvbVN0b3JhZ2UoKVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGdlbmVyYXRlSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyRGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlByb2plY3QgVE9ET3NcIjtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVTaWRlQmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlQmFyRGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlQmFyRGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyRGl2KTtcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzSGVhZGVyXCIpO1xuICAgIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xuICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c0RpdlwiKVxuICAgIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgUFJPSkVDVFwiXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdEJ1dHRvblwiKVxuICAgIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbilcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIlxuICAgIHJlZnJlc2hQcm9qZWN0cygpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpXG4gICAgICBcbiAgICB9KVxuXG4gIH0pKCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVNYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250ZW50Q29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGVudENvbnRhaW5lcik7XG4gIH0pKCk7XG5cbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxCbHVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEJsdXJcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxCbHVyKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsQmx1ci5hcHBlbmRDaGlsZChtb2RhbCk7XG59O1xuXG5jb25zdCByZWZyZXNoVG9Eb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250ZW50Q29udGFpbmVyXCIpO1xuICAgICAgdG9Eb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgIGdlbmVyYXRlVG9Eb0Zvcm0oKVxuYWN0aXZlUHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gZ2VuZXJhdGVUb0RvQ2FyZCh0YXNrKSApXG59XG5cbmNvbnN0IHJlZnJlc2hQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzRGl2XCIpXG4gIHByb2plY3RzRGl2LnRleHRDb250ZW50ID0gXCJcIlxuICBjb25zb2xlLmxvZyhcInBsZWFzZSBsb2FkIHRoaXM6XCIpXG4gIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpXG4gIHByb2plY3RzQXJyLmZvckVhY2gocHJvamVjdCA9PiBnZW5lcmF0ZVByb2plY3RDYXJkKHByb2plY3QpKVxufVxuXG5cblxuY29uc3QgZ2VuZXJhdGVUb0RvQ2FyZCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250ZW50Q29udGFpbmVyXCIpO1xuICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICB0b0RvQ2FyZC5jbGFzc0xpc3QuYWRkKFwidG9Eb0NhcmRcIik7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0NhcmQpO1xuXG4gIC8vdG9kby5zdGF0dXMgPT09IFwiY29tcGxldGVcIiA/IG1hcmtBc0RvbmUoKSA6IG51bGw7XG5cbiAgY29uc29sZS5sb2coXCJwbGVhc2UgYmUgcmlnaHQgYmVsb3dcIilcbiAgY29uc29sZS5sb2coYCR7YWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pfWApXG4gIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YodG9kbyk7XG4gIGNvbnN0IGNhcmRJRCA9IFwidG9kb1wiICsgY2FyZEluZGV4O1xuICB0b0RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjYXJkSUQpO1xuXG4gIGNvbnN0IHRvRG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlQ2xhc3MgPSBcInRpdGxlRGl2XCIgKyBjYXJkSW5kZXhcbiAgdG9Eb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQodGl0bGVDbGFzcyk7XG4gIHRvRG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlRGl2KTtcblxuICBjb25zdCB0b0RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRGF0ZURpdlwiKTtcbiAgdG9Eb0RhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0RhdGVEaXYpXG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlEaXZcIik7XG4gIHRvRG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5RGl2KVxuICBjb25zdCB0b0RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Ob3Rlc0RpdlwiKTtcbiAgdG9Eb05vdGVzRGl2LnRleHRDb250ZW50ID0gdG9kby5ub3RlcztcbiAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNEaXYpXG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNEaXZcIilcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG5cbiAgXG5cbiAgY29uc3QgZG9uZUJ1dHRvblRvZ2dsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZG9uZVRvRG8uY2xhc3NMaXN0LmFkZChcImRvbmVUb0RvXCIpO1xuICBkb25lVG9Eby50ZXh0Q29udGVudCA9IFwiRE9ORT9cIjtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkb25lVG9Ebyk7XG4gIGRvbmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIFxuICAgIGxldCB0b0RvSW5kZXggPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgdG9Eb0luZGV4ID0gcGFyc2VJbnQodG9Eb0luZGV4KTtcbiAgICBhY3RpdmVUb0RvID0gYWN0aXZlUHJvamVjdC50YXNrc1t0b0RvSW5kZXhdO1xuICAgIGFjdGl2ZVRvRG8uc3RhdHVzID0gXCJjb21wbGV0ZVwiXG4gICAgLy9hY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShgJHtkZWxldGVNZX1gLCAxKTtcbiAgICAvL2FjdGl2ZVByb2plY3QuZG9uZS5wdXNoKGAke2RlbGV0ZU1lfWApO1xuICAgIFxuICAgIC8vYWN0aXZlUHJvamVjdC50YXNrcy5zcGxpY2UoYCR7ZGVsZXRlTWV9YCwgMSk7XG4gICAgLy9hY3RpdmVQcm9qZWN0LmRvbmUucHVzaChgJHtkZWxldGVNZX1gKTtcbiAgICAvL2FjdGl2ZVRvRG8uc3RhdHVzID0gXCJjb21wbGV0ZVwiXG4gICAgbWFya0FzRG9uZSgpXG4gICAgcmVmcmVzaFRvRG9zKClcbiAgfSlcbn0pKClcblxuY29uc3QgbWFya0FzRG9uZSA9ICgpID0+IHtcbiAgY29uc3QgZG9uZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB0b0RvSUQgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQ7XG4gIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9Eb0lEKTtcbiAgY29uc29sZS5sb2coXCJ0byBkbzpcIik7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICBjb25zb2xlLmxvZyhcImRvbmU6XCIpO1xuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC5kb25lKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwidG9Eb0NhcmRcIik7XG4gICAgdGhpc0NhcmQuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgY29uc3Qgc3RyaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHN0cmlrZS5jbGFzc0xpc3QuYWRkKFwic3RyaWtlXCIpXG4gICAgdG9Eb1RpdGxlRGl2LmFwcGVuZENoaWxkKHN0cmlrZSlcbiAgICBkb25lVG9Eby5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCJcbn1cblxuICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRUb0RvLmNsYXNzTGlzdC5hZGQoXCJlZGl0VG9Eb1wiKTtcbiAgZWRpdFRvRG8udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcbiAgZWRpdFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhY3RpdmVUb0RvSUQgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWRcbiAgICBsZXQgZWRpdE1lID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIGVkaXRNZSA9IHBhcnNlSW50KGVkaXRNZSk7XG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbZWRpdE1lXTtcbiAgICBnZW5lcmF0ZVRvRG9Nb2RhbCgpO1xuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0VG9Ebyk7XG5cbiAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVRvRG8uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRvRG9cIik7XG4gIGRlbGV0ZVRvRG8udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICBkZWxldGVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlTWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQuc2xpY2UoNCk7XG4gICAgLy9jb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZU1lKVxuICAgIGFjdGl2ZVRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzW2RlbGV0ZU1lXVxuICAgIGNvbnN0IGluZGV4T2ZBY3RpdmUgPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YoYWN0aXZlVG9EbylcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB0aGlzOiBcIiArIGluZGV4T2ZBY3RpdmUpXG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5zcGxpY2UoaW5kZXhPZkFjdGl2ZSwgMSk7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICAvL3RoaXNDYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc0NhcmQpXG4gICAgcmVmcmVzaFRvRG9zKClcbiAgICBzYXZlVG9TdG9yYWdlKClcbiAgfSk7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Ebyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIidUby1EbycgdGl0bGUuLi5cIik7XG4gIHRvRG9OYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuICB0b0RvTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9OYW1lSW5wdXQpXG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb0RhdGVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgdG9Eb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSlcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHRvRG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIik7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIjtcbiAgY29uc3QgcmVndWxhclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcmVndWxhclByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiUmVndWxhclwiKTtcbiAgcmVndWxhclByaW9yaXR5LnRleHRDb250ZW50ID0gXCJSZWd1bGFyIFByaW9yaXR5XCI7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIik7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaCBQcmlvcml0eVwiO1xuXG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChyZWd1bGFyUHJpb3JpdHkpO1xuICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5KVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRvRG9Ob3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgLy8gdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3Rlcy4uLlwiKTtcbiAgdG9Eb05vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNJbnB1dClcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQgPSAoaWQsIHRleHQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvU3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9TdWJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgdG9Eb1N1YkJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHRvRG9TdWJCdG4uY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvU3ViQnRuKVxufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgdG9Eb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1EaXZcIik7XG5cbiAgZ2VuZXJhdGVUb0RvTmFtZUlucHV0KFwidG9Eb05hbWVJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KFwidG9Eb0R1ZURhdGVJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dChcInRvRG9Qcmlvcml0eUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0KFwidG9Eb05vdGVzSW5wdXRcIiwgdG9Eb0Zvcm1EaXYpXG4gIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KFwidG9Eb1N1YkJ0blwiLCBcIkFERCBUT0RPXCIsIHRvRG9Gb3JtRGl2KVxuXG5cbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EaXYpO1xuXG4gIGNvbnN0IHRvRG9Gb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb05hbWVJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvRHVlRGF0ZUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvUHJpb3JpdHlJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb05vdGVzSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3Qgc3RhdHVzID0gXCJpbmNvbXBsZXRlXCJcbiAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9TdWJCdG5cIilcbiAgdG9Eb1N1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QudGFza3MucHVzaCh0b0RvRm9ybUlucHV0KCkpO1xuICAgIGxhdGVzdFRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDE7XG4gICAgYWN0aXZlVG9EbyA9IGxhdGVzdFRvRG9cbiAgICBjb25zb2xlLmxvZyhcImxhdGVzdCBcIiArIGxhdGVzdFRvRG8pO1xuICAgIHJlZnJlc2hUb0RvcygpXG4gICAgYWN0aXZlVG9EbyA9IG51bGxcbiAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpO1xuICAgIHNhdmVUb1N0b3JhZ2UoKVxuICB9KTtcbn07XG5cbmNvbnN0IHByb2plY3RDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q29udGVudENvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlclwiKTtcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGFjdGl2ZVByb2plY3QubmFtZTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgcmV0dXJuIHByb2plY3RDb250ZW50Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuZXhwb3J0IGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyRGl2XCIpO1xuZXhwb3J0IGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJEaXZcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNEaXZcIilcbi8vZXhwb3J0IGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c0RpdlwiKVxuICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyRGl2XCIpO1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBcnIuaW5kZXhPZihwcm9qZWN0KTtcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdlwiKTtcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIHByb2plY3RzQXJyLmZvckVhY2goKG9iaikgPT4ge1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdEluZGV4KTtcbiAgfSk7XG5cbiAgLy9jb25zdCBlYWNoUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERpdlwiKVxuICAvL2VhY2hQcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PiB7IHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgY29uc29sZS5sb2cocHJvamVjdC5pZCkgfSApIH0gKVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Byb2plY3RJbmRleH1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzQXJyW2Ake3Byb2plY3RJbmRleH1gXTtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBhY3RpdmUgcHJvamVjdCBpczogXCIgKyBhY3RpdmVQcm9qZWN0Lm5hbWUpO1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLm1haW5Db250ZW50Q29udGFpbmVyXCJcbiAgICApO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCgpKTtcbiAgICBnZW5lcmF0ZVRvRG9Gb3JtKCk7XG4gICAgcmVmcmVzaFRvRG9zKClcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50Q29udGFpbmVyXCIpO1xuICBtYWluQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcbiAgY29uc3QgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1EaXZcIik7XG4gIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0SW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3Q/XCIpO1xuICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpO1xuICBwcm9qZWN0SW5wdXQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SW5wdXRcIik7XG4gIHByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnN0IHByb2plY3RTdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHByb2plY3RTdWJCdG4udGV4dENvbnRlbnQgPSBcIkNSRUFURSBQUk9KRUNUXCI7XG4gIHByb2plY3RTdWJCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpO1xuICBwcm9qZWN0U3ViQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFN1YkJ0blwiKTtcbiAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcbiAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFN1YkJ0bik7XG5cblxuICBjb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJbnB1dFwiKS52YWx1ZTtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSlcbn1cblxuY29uc3QgcmVzZXRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIilcbiAgICBuYW1lLnZhbHVlID0gXCJcIlxufVxuXG5cbnByb2plY3RTdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0c0Fyci5wdXNoKHByb2plY3RGb3JtSW5wdXQoKSlcbiAgICBnZW5lcmF0ZVByb2plY3RDYXJkKHByb2plY3RGb3JtSW5wdXQoKSlcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RzQXJyKVxuICAgIHJlc2V0UHJvamVjdEZvcm0oKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0dG9uXCIpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCJcbiAgICBzYXZlVG9TdG9yYWdlKClcbn0pXG5cblxuXG5cblxufTtcblxuXG5jb25zdCBnZW5lcmVyYXRlQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbEJsdXJcIik7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZU1vZGFsLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlTW9kYWxcIik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlTW9kYWwpO1xuICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG4gICAgbW9kYWwudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgfSlcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQmx1clwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cbiAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRvRG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b0RvTmFtZU1vZGFsXCIpO1xuICBjb25zb2xlLmxvZyhhY3RpdmVUb0RvKTtcbiAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBgJHthY3RpdmVUb0RvLm5hbWV9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb05hbWUpO1xuXG4gIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvRG9EdWVEYXRlTW9kYWxcIik7XG4gIHRvRG9EdWVEYXRlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPkR1ZSBEYXRlOiA8L3NwYW4+JHthY3RpdmVUb0RvLmRhdGV9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuXG4gIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9Eb1ByaW9yaXR5TW9kYWxcIik7XG4gIHRvRG9Qcmlvcml0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Qcmlvcml0eTogPC9zcGFuPiR7YWN0aXZlVG9Eby5wcmlvcml0eX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Ob3Rlcy5jbGFzc0xpc3QuYWRkKFwidG9Eb05vdGVzTW9kYWxcIik7XG4gIHRvRG9Ob3Rlcy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Ob3RlczogPC9zcGFuPiR7YWN0aXZlVG9Eby5ub3Rlc31gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTm90ZXMpO1xuXG4gIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpXG5cbiAgY29uc3QgZWRpdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGVkaXRUb0RvLmNsYXNzTGlzdC5hZGQoXCJlZGl0VG9Eb1wiKVxuICBlZGl0VG9Eby50ZXh0Q29udGVudCA9IFwiRURJVFwiXG4gIG1vZGFsLmFwcGVuZENoaWxkKGVkaXRUb0RvKVxuICBlZGl0VG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoXCJlZGl0TmFtZUlucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb0RhdGVJbnB1dChcImVkaXREYXRlSW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dChcImVkaXRQcmlvcml0eUlucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoXCJlZGl0Tm90ZXNJbnB1dFwiLCBtb2RhbClcbiAgICBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dChcImVkaXRTdWJtaXRCdXR0b25cIiwgXCJTVUJNSVQgQ0hBTkdFU1wiLCBtb2RhbClcbiAgICBnZW5lcmVyYXRlQ2xvc2VCdXR0b24oKVxuICAgIGNvbnN0IGVkaXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0TmFtZUlucHV0XCIpXG4gICAgZWRpdE5hbWUudmFsdWUgPSBhY3RpdmVUb0RvLm5hbWVcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERhdGVJbnB1dFwiKVxuICAgIGVkaXREYXRlLnZhbHVlID0gYWN0aXZlVG9Eby5kYXRlXG4gICAgY29uc3QgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0UHJpb3JpdHlJbnB1dFwiKVxuICAgIGVkaXRQcmlvcml0eS52YWx1ZSA9IGFjdGl2ZVRvRG8ucHJpb3JpdHlcbiAgICBjb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXROb3Rlc0lucHV0XCIpXG4gICAgZWRpdE5vdGVzLnZhbHVlID0gYWN0aXZlVG9Eby5ub3Rlc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFN1Ym1pdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWN0aXZlVG9Eby5uYW1lID0gZWRpdE5hbWUudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8uZGF0ZSA9IGVkaXREYXRlLnZhbHVlXG4gICAgICBhY3RpdmVUb0RvLnByaW9yaXR5ID0gZWRpdFByaW9yaXR5LnZhbHVlXG4gICAgICBhY3RpdmVUb0RvLm5vdGVzID0gZWRpdE5vdGVzLnZhbHVlXG4gICAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG4gICAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cbiAgICAgIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmluZGV4T2YoYWN0aXZlVG9Ebyk7XG4gICAgICBjb25zdCB0aXRsZUNsYXNzID0gXCIudGl0bGVEaXZcIiArIGNhcmRJbmRleFxuICAgICAgXG5cbiAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZUNsYXNzKVxuICBcbiAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gZWRpdE5hbWUudmFsdWVcblxuICAgICAgc2F2ZVRvU3RvcmFnZSgpXG5cbiAgICB9KVxuICB9KVxuICBcbn07XG5cbi8vTE9DQUwgU1RPUkFHRVxuXG5sZXQgcHJvamVjdHNBcnIgPSBbXVxuXG5mdW5jdGlvbiBzYXZlVG9TdG9yYWdlKCl7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycicsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyKSk7XG5cbn1cblxuZnVuY3Rpb24gbG9hZEZyb21TdG9yYWdlKCl7XG4gIHByb2plY3RzQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNBcnInKSk7XG4gICBpZihwcm9qZWN0c0FyciA9PT0gbnVsbCkgcHJvamVjdHNBcnIgPSBbXTtcbiAgIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpXG59XG5cbmZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpe1xuICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICBwcm9qZWN0c0FyciA9IFtdO1xuICAgcmVzZXREaXNwbGF5KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVUk7XG4iLCIvL2V4cG9ydCBsZXQgcHJvamVjdHNBcnIgPSBbXVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgICAgIHRoaXMuZG9uZSA9IFtdXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcblxuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBgJHtuYW1lfWAudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIlwiKVxuICAgICAgIFxuICAgICAgICB0aGlzLmlkID0gcHJvamVjdElEXG4gICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xuXG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IG5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gOTk5ICsgMTAwKSlcbiAgICAgICAgICAgXG4gICAgICAgIHRoaXMuaWQgPSB0YXNrSURcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGdlbmVyYXRlVUksIHsgZ2VuZXJhdGVQcm9qZWN0Q2FyZCwgZ2VuZXJhdGVQcm9qZWN0Rm9ybSB9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IFByb2plY3QsIHsgYWN0aXZlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcbmltcG9ydCB7IHByb2plY3RzQXJyIH0gZnJvbSAnLi9wcm9qZWN0J1xuXG5cblxuZ2VuZXJhdGVVSSgpXG5nZW5lcmF0ZVByb2plY3RGb3JtKClcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==