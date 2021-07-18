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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Josefin Sans', sans-serif;\n    font-size: 16px;\n    margin: 0;\n    background-color: rgb(212, 209, 209);\n}\n\n.container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 25% 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas: \"header header header\"\n                         \"sidebar main main\";\n}\n\n.headerDiv {\n    grid-area: header;\n    display: flex;\n    background: rgb(98, 66, 241);\n    background: linear-gradient(70deg, rgba(65,33,203,1) 8%, rgba(61,32,200,1) 27%, rgba(5,15,156,1) 48%, rgb(141, 71, 233) 100%);\n    color: white;\n    width: 100%;\n    height: 5rem;\n    padding: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0 0 0 6rem;\n}\n\nh1 {\n    color: white;\n    font-family: 'Josefin Sans', sans-serif;\n    text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n    display: block;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.sideBarDiv {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-area: sidebar;\n    margin: 0 1rem;\n    border-radius: 1rem;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 100%;\n}\n\n.projectsHeader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    font-size: 1.3rem;\n}\n\n.projectDiv {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(161, 160, 160, 0.137);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.projectDiv:hover {\n    cursor: pointer;\n    background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n    grid-area: main;\n    margin: 0 1rem;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 92%;\n}\n\n.projectFormDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    height: 100%;\n    padding-top: 2rem;\n    align-items: center;\n}\n\n#projectInput {\n    display: block;\n    width: 60%;\n    border-radius: 0.5rem;\n    height: 3rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n    border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn {\n    display: block;\n    background-color: rgb(5, 15, 156);\n    color: rgb(255, 255, 255);\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover, #toDoSubBtn:hover {\n    cursor: pointer;\n    background-color: rgb(23, 36, 218);\n   \n}\n\n.projectContentContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    \n    padding: 1rem;\n}\n\n.toDoFormDiv {\n    width: 100%;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr fr 1fr;\n    grid-template-areas: \"title title\"\n                         \"date priority\"\n                         \"notes notes\"\n                         \"button button\"   ;\n    justify-items: center;         \n    padding: 1.5rem;            \n}\n\n#toDoNameInput {\n    grid-area: title;\n    display: block;\n    width: 90%;\n    border-radius: 0.5rem;\n    height: 2.2rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n    grid-area: date;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 2rem;\n    text-align: right;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n    grid-area: priority;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 2rem;\n    text-align: left;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n    grid-area: notes;\n    resize: none;\n    display: block;\n    width: 90%;\n    min-height: 80px;\n    box-sizing: border-box;\n    font-size: 16px;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n    grid-area: button;\n    width: 90%;\n    display: block;\n    background: rgb(65,33,203);\n    color: blanchedalmond;\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n    display: flex;\n    justify-content: space-between;\n    justify-self: center;\n    align-items: center;\n    align-self: center;\n    padding: 1rem;\n    margin: 0.5rem;\n    background-color: rgba(161, 160, 160, 0.137);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n    height: 3.3rem;\n}\n\n.toDoTitleDiv {\n    font-size: 2rem;\n}\n\n.done {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    padding: 0.5rem;\n    margin: 0.5rem;\n    background-color: rgb(128, 128, 128);\n    color: rgb(59, 59, 59);\n    border: rgb(117, 117, 117);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.strike {\n    background-color: black;\n    width: 95%;\n    min-height: 3px;\n    z-index: 2;\n    position: relative;\n    bottom: 1.2rem;\n}\n\n.deleteToDo {\n    background-color: rgb(190, 0, 0);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n    cursor: pointer;\n    background-color: rgb(224, 15, 15);\n}\n\n.doneToDo {\n   \n    background-color: rgb(9, 155, 28);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.doneToDo:hover {\n    cursor: pointer;\n    background-color: rgb(15, 192, 38);\n}\n\n.undoToDo {\n    \n    margin: 0 1rem;\n    cursor: pointer;\n    background-color: rgb(226, 132, 10);\n    color: rgb(0, 0, 0);\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.undoToDo:hover {\n    cursor: pointer;\n    background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n    margin: 0 1rem;\n    cursor: pointer;\n    background-color: rgb(226, 194, 10);\n    color: rgb(0, 0, 0);\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.editToDo:hover {\n    background-color: rgb(250, 217, 28);\n}\n\n.buttonsDiv {\n    display: flex;\n}\n\n.modalBlur {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.719);\n    width: 100%;\n    height: 100vh;\n    z-index: 100;\n    transform: scale(0);\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    transform: scale(0);\n    width: 60%;\n    height: 60%;\n    background-color: rgb(218, 218, 218);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n    cursor: pointer;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    background-color: red;\n    color: white;\n    height: 30px;\n    width: 30px;\n    border: none;\n    border-radius: 15px;\n}\n\n.modalLabels {\n    font-weight: 900;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');\n\n\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Josefin Sans', sans-serif;\n    font-size: 16px;\n    margin: 0;\n    background-color: rgb(212, 209, 209);\n}\n\n.container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 25% 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas: \"header header header\"\n                         \"sidebar main main\";\n}\n\n.headerDiv {\n    grid-area: header;\n    display: flex;\n    background: rgb(98, 66, 241);\n    background: linear-gradient(70deg, rgba(65,33,203,1) 8%, rgba(61,32,200,1) 27%, rgba(5,15,156,1) 48%, rgb(141, 71, 233) 100%);\n    color: white;\n    width: 100%;\n    height: 5rem;\n    padding: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0 0 0 6rem;\n}\n\nh1 {\n    color: white;\n    font-family: 'Josefin Sans', sans-serif;\n    text-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.projectHeader {\n    display: block;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.sideBarDiv {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-area: sidebar;\n    margin: 0 1rem;\n    border-radius: 1rem;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 100%;\n}\n\n.projectsHeader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    font-size: 1.3rem;\n}\n\n.projectDiv {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(161, 160, 160, 0.137);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.projectDiv:hover {\n    cursor: pointer;\n    background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n    grid-area: main;\n    margin: 0 1rem;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 92%;\n}\n\n.projectFormDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    height: 100%;\n    padding-top: 2rem;\n    align-items: center;\n}\n\n#projectInput {\n    display: block;\n    width: 60%;\n    border-radius: 0.5rem;\n    height: 3rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n    border: rgb(23, 36, 218) solid 1px;\n}\n\n#projectSubBtn {\n    display: block;\n    background-color: rgb(5, 15, 156);\n    color: rgb(255, 255, 255);\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover, #toDoSubBtn:hover {\n    cursor: pointer;\n    background-color: rgb(23, 36, 218);\n   \n}\n\n.projectContentContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    \n    padding: 1rem;\n}\n\n.toDoFormDiv {\n    width: 100%;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr fr 1fr;\n    grid-template-areas: \"title title\"\n                         \"date priority\"\n                         \"notes notes\"\n                         \"button button\"   ;\n    justify-items: center;         \n    padding: 1.5rem;            \n}\n\n#toDoNameInput {\n    grid-area: title;\n    display: block;\n    width: 90%;\n    border-radius: 0.5rem;\n    height: 2.2rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n    grid-area: date;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 2rem;\n    text-align: right;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n    grid-area: priority;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 2rem;\n    text-align: left;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n    grid-area: notes;\n    resize: none;\n    display: block;\n    width: 90%;\n    min-height: 80px;\n    box-sizing: border-box;\n    font-size: 16px;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n    grid-area: button;\n    width: 90%;\n    display: block;\n    background: rgb(65,33,203);\n    color: blanchedalmond;\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n    display: flex;\n    justify-content: space-between;\n    justify-self: center;\n    align-items: center;\n    align-self: center;\n    padding: 1rem;\n    margin: 0.5rem;\n    background-color: rgba(161, 160, 160, 0.137);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n    height: 3.3rem;\n}\n\n.toDoTitleDiv {\n    font-size: 2rem;\n}\n\n.done {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    padding: 0.5rem;\n    margin: 0.5rem;\n    background-color: rgb(128, 128, 128);\n    color: rgb(59, 59, 59);\n    border: rgb(117, 117, 117);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.strike {\n    background-color: black;\n    width: 95%;\n    min-height: 3px;\n    z-index: 2;\n    position: relative;\n    bottom: 1.2rem;\n}\n\n.deleteToDo {\n    background-color: rgb(190, 0, 0);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.deleteToDo:hover {\n    cursor: pointer;\n    background-color: rgb(224, 15, 15);\n}\n\n.doneToDo {\n   \n    background-color: rgb(9, 155, 28);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.doneToDo:hover {\n    cursor: pointer;\n    background-color: rgb(15, 192, 38);\n}\n\n.undoToDo {\n    \n    margin: 0 1rem;\n    cursor: pointer;\n    background-color: rgb(226, 132, 10);\n    color: rgb(0, 0, 0);\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.undoToDo:hover {\n    cursor: pointer;\n    background-color: rgb(248, 153, 28);\n}\n\n.editToDo {\n    margin: 0 1rem;\n    cursor: pointer;\n    background-color: rgb(226, 194, 10);\n    color: rgb(0, 0, 0);\n    border: none;\n    border-radius: 10px;\n    padding: 0.6rem;\n}\n\n.editToDo:hover {\n    background-color: rgb(250, 217, 28);\n}\n\n.buttonsDiv {\n    display: flex;\n}\n\n.modalBlur {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.719);\n    width: 100%;\n    height: 100vh;\n    z-index: 100;\n    transform: scale(0);\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    transform: scale(0);\n    width: 60%;\n    height: 60%;\n    background-color: rgb(218, 218, 218);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.3rem 0.3rem 0.3rem;\n}\n\n.closeModal {\n    cursor: pointer;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    background-color: red;\n    color: white;\n    height: 30px;\n    width: 30px;\n    border: none;\n    border-radius: 15px;\n}\n\n.modalLabels {\n    font-weight: 900;\n}"],"sourceRoot":""}]);
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


/***/ }),

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


const projectFormInput = () => {
    const name = document.querySelector("#projectInput").value;
    return new _project__WEBPACK_IMPORTED_MODULE_2__.default(name)
}

const resetProjectForm = () => {
    const name = document.querySelector("#projectInput")
    name.value = ""
}

const projectSubBtn = document.querySelector("#projectSubBtn")
projectSubBtn.addEventListener("click", () => {
    _project__WEBPACK_IMPORTED_MODULE_2__.projectsArr.push(projectFormInput())
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.generateProjectCard)(projectFormInput())
    console.table(_project__WEBPACK_IMPORTED_MODULE_2__.projectsArr)
    resetProjectForm();
    
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMElBQTBJO0FBQzFJLG1JQUFtSTtBQUNuSTtBQUNBLDZDQUE2QyxnQkFBZ0IsNkJBQTZCLEdBQUcsVUFBVSw4Q0FBOEMsc0JBQXNCLGdCQUFnQiwyQ0FBMkMsR0FBRyxnQkFBZ0Isb0JBQW9CLGdCQUFnQix5Q0FBeUMsb0NBQW9DLG9HQUFvRyxHQUFHLGdCQUFnQix3QkFBd0Isb0JBQW9CLG1DQUFtQyxvSUFBb0ksbUJBQW1CLGtCQUFrQixtQkFBbUIsc0JBQXNCLDhCQUE4QiwwQkFBMEIsZ0NBQWdDLEdBQUcsUUFBUSxtQkFBbUIsOENBQThDLDZEQUE2RCxHQUFHLG9CQUFvQixxQkFBcUIseUJBQXlCLHNCQUFzQixHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLDZCQUE2Qix5QkFBeUIscUJBQXFCLDBCQUEwQixtREFBbUQsNERBQTRELG9CQUFvQixrQkFBa0IsR0FBRyxxQkFBcUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsb0JBQW9CLHdCQUF3QixHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhCQUE4QixtREFBbUQsc0JBQXNCLDRCQUE0Qiw0REFBNEQsaUJBQWlCLEdBQUcsdUJBQXVCLHNCQUFzQixtREFBbUQsR0FBRywyQkFBMkIsc0JBQXNCLHFCQUFxQix3QkFBd0IsbURBQW1ELDREQUE0RCxvQkFBb0IsaUJBQWlCLEdBQUcscUJBQXFCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLG1CQUFtQix3QkFBd0IsMEJBQTBCLEdBQUcsbUJBQW1CLHFCQUFxQixpQkFBaUIsNEJBQTRCLG1CQUFtQix5QkFBeUIsbUJBQW1CLDREQUE0RCxHQUFHLHlCQUF5Qix5Q0FBeUMsR0FBRyxvQkFBb0IscUJBQXFCLHdDQUF3QyxnQ0FBZ0Msb0JBQW9CLG1CQUFtQiw0QkFBNEIsNERBQTRELEdBQUcsNkNBQTZDLHNCQUFzQix5Q0FBeUMsUUFBUSw4QkFBOEIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsa0JBQWtCLGtCQUFrQixvQkFBb0IsZ0JBQWdCLHFDQUFxQyx5Q0FBeUMsZ0xBQWdMLDRCQUE0QiwrQkFBK0IsZUFBZSxvQkFBb0IsdUJBQXVCLHFCQUFxQixpQkFBaUIsNEJBQTRCLHFCQUFxQix5QkFBeUIsbUJBQW1CLDREQUE0RCxHQUFHLHVCQUF1QixzQkFBc0IscUJBQXFCLGlCQUFpQiw0QkFBNEIsbUJBQW1CLHdCQUF3QixtQkFBbUIsNERBQTRELEdBQUcsd0JBQXdCLDBCQUEwQixxQkFBcUIsaUJBQWlCLDRCQUE0QixtQkFBbUIsdUJBQXVCLG1CQUFtQiw0REFBNEQsR0FBRyxxQkFBcUIsdUJBQXVCLG1CQUFtQixxQkFBcUIsaUJBQWlCLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLDRCQUE0QixxQkFBcUIseUJBQXlCLG1CQUFtQiw0REFBNEQsR0FBRyxpQkFBaUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsaUNBQWlDLDRCQUE0QixvQkFBb0IsbUJBQW1CLDRCQUE0Qiw0REFBNEQsR0FBRyxlQUFlLG9CQUFvQixxQ0FBcUMsMkJBQTJCLDBCQUEwQix5QkFBeUIsb0JBQW9CLHFCQUFxQixtREFBbUQsNEJBQTRCLDREQUE0RCxpQkFBaUIscUJBQXFCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLFdBQVcsb0JBQW9CLHFDQUFxQyx5QkFBeUIsc0JBQXNCLHFCQUFxQiwyQ0FBMkMsNkJBQTZCLGlDQUFpQyw0QkFBNEIsNERBQTRELGlCQUFpQixHQUFHLGFBQWEsOEJBQThCLGlCQUFpQixzQkFBc0IsaUJBQWlCLHlCQUF5QixxQkFBcUIsR0FBRyxpQkFBaUIsdUNBQXVDLG1CQUFtQixtQkFBbUIsMEJBQTBCLHNCQUFzQixHQUFHLHVCQUF1QixzQkFBc0IseUNBQXlDLEdBQUcsZUFBZSw2Q0FBNkMsbUJBQW1CLG1CQUFtQiwwQkFBMEIsc0JBQXNCLEdBQUcscUJBQXFCLHNCQUFzQix5Q0FBeUMsR0FBRyxlQUFlLDJCQUEyQixzQkFBc0IsMENBQTBDLDBCQUEwQixtQkFBbUIsMEJBQTBCLHNCQUFzQixHQUFHLHFCQUFxQixzQkFBc0IsMENBQTBDLEdBQUcsZUFBZSxxQkFBcUIsc0JBQXNCLDBDQUEwQywwQkFBMEIsbUJBQW1CLDBCQUEwQixzQkFBc0IsR0FBRyxxQkFBcUIsMENBQTBDLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsOEJBQThCLDBCQUEwQixtREFBbUQsa0JBQWtCLG9CQUFvQixtQkFBbUIsMEJBQTBCLHlCQUF5QixhQUFhLGNBQWMsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsaUJBQWlCLGtCQUFrQiwyQ0FBMkMsNEJBQTRCLDREQUE0RCxHQUFHLGlCQUFpQixzQkFBc0IseUJBQXlCLGlCQUFpQixtQkFBbUIsNEJBQTRCLG1CQUFtQixtQkFBbUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFB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Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBZ0I7QUFDcEIsSUFBSSwwREFBbUI7QUFDdkIsa0JBQWtCLGlEQUFXO0FBQzdCOztBQUVBLENBQUMiLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcInNpZGViYXIgbWFpbiBtYWluXFxcIjtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOTgsIDY2LCAyNDEpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzBkZWcsIHJnYmEoNjUsMzMsMjAzLDEpIDglLCByZ2JhKDYxLDMyLDIwMCwxKSAyNyUsIHJnYmEoNSwxNSwxNTYsMSkgNDglLCByZ2IoMTQxLCA3MSwgMjMzKSAxMDAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCA2cmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4uc2lkZUJhckRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3REaXY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDEsIDEwMSwgMC4xMzcpO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnRDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogOTIlO1xcbn1cXG5cXG4ucHJvamVjdEZvcm1EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0SW5wdXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RJbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogcmdiKDIzLCAzNiwgMjE4KSBzb2xpZCAxcHg7XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAxNSwgMTU2KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0bjpob3ZlciwgI3RvRG9TdWJCdG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMzYsIDIxOCk7XFxuICAgXFxufVxcblxcbi5wcm9qZWN0Q29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRvRG9Gb3JtRGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidGl0bGUgdGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJkYXRlIHByaW9yaXR5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwibm90ZXMgbm90ZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJidXR0b24gYnV0dG9uXFxcIiAgIDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOyAgICAgICAgIFxcbiAgICBwYWRkaW5nOiAxLjVyZW07ICAgICAgICAgICAgXFxufVxcblxcbiN0b0RvTmFtZUlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9EdWVEYXRlSW5wdXQge1xcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvUHJpb3JpdHlJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Ob3Rlc0lucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBub3RlcztcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWluLWhlaWdodDogODBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvU3ViQnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBidXR0b247XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjUsMzMsMjAzKTtcXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi50b0RvQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjAsIDE2MCwgMC4xMzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDMuM3JlbTtcXG59XFxuXFxuLnRvRG9UaXRsZURpdiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRvbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xcbiAgICBjb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xcbiAgICBib3JkZXI6IHJnYigxMTcsIDExNywgMTE3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnN0cmlrZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtaW4taGVpZ2h0OiAzcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAxLjJyZW07XFxufVxcblxcbi5kZWxldGVUb0RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi5kZWxldGVUb0RvOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAxNSwgMTUpO1xcbn1cXG5cXG4uZG9uZVRvRG8ge1xcbiAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTU1LCAyOCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi5kb25lVG9Ebzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxOTIsIDM4KTtcXG59XFxuXFxuLnVuZG9Ub0RvIHtcXG4gICAgXFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDEzMiwgMTApO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLnVuZG9Ub0RvOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNTMsIDI4KTtcXG59XFxuXFxuLmVkaXRUb0RvIHtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTk0LCAxMCk7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZWRpdFRvRG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMTcsIDI4KTtcXG59XFxuXFxuLmJ1dHRvbnNEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWxCbHVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MTkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbn1cXG5cXG4uY2xvc2VNb2RhbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICByaWdodDogLTEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbExhYmVscyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixTQUFTO0lBQ1Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNi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LGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMDksIDIwOSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCI7XFxufVxcblxcbi5oZWFkZXJEaXYge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDk4LCA2NiwgMjQxKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDcwZGVnLCByZ2JhKDY1LDMzLDIwMywxKSA4JSwgcmdiYSg2MSwzMiwyMDAsMSkgMjclLCByZ2JhKDUsMTUsMTU2LDEpIDQ4JSwgcmdiKDE0MSwgNzEsIDIzMykgMTAwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnNpZGVCYXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjAsIDE2MCwgMC4xMzcpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0RGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTAxLCAxMDEsIDAuMTM3KTtcXG59XFxuXFxuLm1haW5Db250ZW50Q29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDkyJTtcXG59XFxuXFxuLnByb2plY3RGb3JtRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdElucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0SW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IHJnYigyMywgMzYsIDIxOCkgc29saWQgMXB4O1xcbn1cXG5cXG4jcHJvamVjdFN1YkJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTUsIDE1Nik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG46aG92ZXIsICN0b0RvU3ViQnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDM2LCAyMTgpO1xcbiAgIFxcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiZGF0ZSBwcmlvcml0eVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5vdGVzIG5vdGVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiYnV0dG9uIGJ1dHRvblxcXCIgICA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgICAgICAgICBcXG4gICAgcGFkZGluZzogMS41cmVtOyAgICAgICAgICAgIFxcbn1cXG5cXG4jdG9Eb05hbWVJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogMi4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvRHVlRGF0ZUlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvTm90ZXNJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogbm90ZXM7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1N1YkJ0biB7XFxuICAgIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogcmdiKDY1LDMzLDIwMyk7XFxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4udG9Eb0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAzLjNyZW07XFxufVxcblxcbi50b0RvVGl0bGVEaXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4KTtcXG4gICAgY29sb3I6IHJnYig1OSwgNTksIDU5KTtcXG4gICAgYm9yZGVyOiByZ2IoMTE3LCAxMTcsIDExNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWluLWhlaWdodDogM3B4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMS4ycmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9EbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZGVsZXRlVG9Ebzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTUsIDE1KTtcXG59XFxuXFxuLmRvbmVUb0RvIHtcXG4gICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDE1NSwgMjgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4uZG9uZVRvRG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTkyLCAzOCk7XFxufVxcblxcbi51bmRvVG9EbyB7XFxuICAgIFxcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMzIsIDEwKTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi51bmRvVG9Ebzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTUzLCAyOCk7XFxufVxcblxcbi5lZGl0VG9EbyB7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDE5NCwgMTApO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLmVkaXRUb0RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjE3LCAyOCk7XFxufVxcblxcbi5idXR0b25zRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsQmx1ciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjNyZW0gMC4zcmVtIDAuM3JlbTtcXG59XFxuXFxuLmNsb3NlTW9kYWwge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTBweDtcXG4gICAgcmlnaHQ6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWxMYWJlbHMge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgeyBhY3RpdmUsIHByb2plY3RzQXJyIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xuZXhwb3J0IGxldCBsYXRlc3RUb0RvID0gbnVsbDtcbmV4cG9ydCBsZXQgYWN0aXZlVG9EbyA9IG51bGw7XG5leHBvcnQgbGV0IGFjdGl2ZVRvRG9JRCA9IG51bGw7XG5cbmNvbnN0IGdlbmVyYXRlVUkgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJEaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUT0RPc1wiO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgfSkoKTtcblxuICBjb25zdCBnZW5lcmF0ZVNpZGVCYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGVCYXJEaXYuY2xhc3NMaXN0LmFkZChcInNpZGVCYXJEaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXJEaXYpO1xuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNIZWFkZXJcIik7XG4gICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG4gIH0pKCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVNYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250ZW50Q29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGVudENvbnRhaW5lcik7XG4gIH0pKCk7XG5cbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxCbHVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEJsdXJcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxCbHVyKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsQmx1ci5hcHBlbmRDaGlsZChtb2RhbCk7XG59O1xuXG5jb25zdCByZWZyZXNoVG9Eb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250ZW50Q29udGFpbmVyXCIpO1xuICAgICAgdG9Eb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgIGdlbmVyYXRlVG9Eb0Zvcm0oKVxuYWN0aXZlUHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gZ2VuZXJhdGVUb0RvQ2FyZCh0YXNrKSApXG59XG5cblxuXG5jb25zdCBnZW5lcmF0ZVRvRG9DYXJkID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gIGNvbnN0IHRvRG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gIHRvRG9DYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ2FyZFwiKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQ2FyZCk7XG5cbiAgY29uc29sZS5sb2coXCJwbGVhc2UgYmUgcmlnaHQgYmVsb3dcIilcbiAgY29uc29sZS5sb2coYCR7YWN0aXZlUHJvamVjdC50YXNrcy5pbmRleE9mKHRvZG8pfWApXG4gIGxldCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGNhcmRJRCA9IFwidG9kb1wiICsgY2FyZEluZGV4Kys7XG4gIHRvRG9DYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGNhcmRJRCk7XG5cbiAgY29uc3QgdG9Eb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvVGl0bGVEaXZcIik7XG4gIHRvRG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlRGl2KTtcblxuICBjb25zdCB0b0RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRGF0ZURpdlwiKTtcbiAgdG9Eb0RhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0RhdGVEaXYpXG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvUHJpb3JpdHlEaXZcIik7XG4gIHRvRG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gIC8vdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5RGl2KVxuICBjb25zdCB0b0RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Ob3Rlc0RpdlwiKTtcbiAgdG9Eb05vdGVzRGl2LnRleHRDb250ZW50ID0gdG9kby5ub3RlcztcbiAgLy90b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNEaXYpXG5cbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9DYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuXG4gIFxuXG4gIGNvbnN0IGRvbmVCdXR0b25Ub2dnbGUgPSAoKCkgPT4ge1xuICBjb25zdCBkb25lVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRvbmVUb0RvLmNsYXNzTGlzdC5hZGQoXCJkb25lVG9Eb1wiKTtcbiAgZG9uZVRvRG8udGV4dENvbnRlbnQgPSBcIkRPTkU/XCI7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZG9uZVRvRG8pO1xuICBkb25lVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRvRG9JRCA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZDtcbiAgICBjb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvRG9JRCk7XG4gICAgbGV0IHRvRG9JbmRleCA9IGJ1dHRvbnNEaXYucGFyZW50Tm9kZS5pZC5zbGljZSg0KTtcbiAgICB0b0RvSW5kZXggPSBwYXJzZUludCh0b0RvSW5kZXgpO1xuICAgIGFjdGl2ZVRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzW3RvRG9JbmRleF07XG4gICAgLy9hY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShgJHtkZWxldGVNZX1gLCAxKTtcbiAgICAvL2FjdGl2ZVByb2plY3QuZG9uZS5wdXNoKGAke2RlbGV0ZU1lfWApO1xuICAgIGFjdGl2ZVRvRG8uc3RhdHVzID0gXCJjb21wbGV0ZVwiXG4gICAgLy9hY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShgJHtkZWxldGVNZX1gLCAxKTtcbiAgICAvL2FjdGl2ZVByb2plY3QuZG9uZS5wdXNoKGAke2RlbGV0ZU1lfWApO1xuICAgIGFjdGl2ZVRvRG8uc3RhdHVzID0gXCJjb21wbGV0ZVwiXG4gICAgY29uc29sZS5sb2coXCJ0byBkbzpcIik7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICBjb25zb2xlLmxvZyhcImRvbmU6XCIpO1xuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC5kb25lKTtcbiAgICB0aGlzQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwidG9Eb0NhcmRcIik7XG4gICAgdGhpc0NhcmQuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgY29uc3Qgc3RyaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHN0cmlrZS5jbGFzc0xpc3QuYWRkKFwic3RyaWtlXCIpXG4gICAgdG9Eb1RpdGxlRGl2LmFwcGVuZENoaWxkKHN0cmlrZSlcbiAgICBkb25lVG9Eby5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCJcbiAgfSlcbn0pKClcblxuICBjb25zdCBlZGl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRUb0RvLmNsYXNzTGlzdC5hZGQoXCJlZGl0VG9Eb1wiKTtcbiAgZWRpdFRvRG8udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcbiAgZWRpdFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgZWRpdE1lID0gYnV0dG9uc0Rpdi5wYXJlbnROb2RlLmlkLnNsaWNlKDQpO1xuICAgIGVkaXRNZSA9IHBhcnNlSW50KGVkaXRNZSk7XG4gICAgYWN0aXZlVG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3NbZWRpdE1lXTtcbiAgICBnZW5lcmF0ZVRvRG9Nb2RhbCgpO1xuICB9KTtcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0VG9Ebyk7XG5cbiAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVRvRG8uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRvRG9cIik7XG4gIGRlbGV0ZVRvRG8udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICBkZWxldGVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlTWUgPSBidXR0b25zRGl2LnBhcmVudE5vZGUuaWQ7XG4gICAgY29uc3QgdGhpc0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVNZSk7XG4gICAgYWN0aXZlUHJvamVjdC50YXNrcy5zcGxpY2UoYCR7ZGVsZXRlTWV9YCwgMSk7XG4gICAgY29uc29sZS50YWJsZShhY3RpdmVQcm9qZWN0LnRhc2tzKTtcbiAgICB0aGlzQ2FyZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXNDYXJkKTtcbiAgfSk7XG4gIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Ebyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQgPSAoaWQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIidUby1EbycgdGl0bGUuLi5cIik7XG4gIHRvRG9OYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuICB0b0RvTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRvRG9OYW1lSW5wdXQpXG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb0RhdGVJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgdG9Eb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSlcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dCA9IChpZCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHRvRG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIik7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIjtcbiAgY29uc3QgcmVndWxhclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcmVndWxhclByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiUmVndWxhclwiKTtcbiAgcmVndWxhclByaW9yaXR5LnRleHRDb250ZW50ID0gXCJSZWd1bGFyIFByaW9yaXR5XCI7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIik7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaCBQcmlvcml0eVwiO1xuXG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChyZWd1bGFyUHJpb3JpdHkpO1xuICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5KVxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0ID0gKGlkLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgdG9Eb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRvRG9Ob3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgLy8gdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3Rlcy4uLlwiKTtcbiAgdG9Eb05vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvTm90ZXNJbnB1dClcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvU3VibWl0SW5wdXQgPSAoaWQsIHRleHQsIHBhcmVudCkgPT4ge1xuICBjb25zdCB0b0RvU3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHRvRG9TdWJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgdG9Eb1N1YkJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHRvRG9TdWJCdG4uY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0b0RvU3ViQnRuKVxufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgdG9Eb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1EaXZcIik7XG5cbiAgZ2VuZXJhdGVUb0RvTmFtZUlucHV0KFwidG9Eb05hbWVJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvRGF0ZUlucHV0KFwidG9Eb0R1ZURhdGVJbnB1dFwiLCB0b0RvRm9ybURpdilcbiAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dChcInRvRG9Qcmlvcml0eUlucHV0XCIsIHRvRG9Gb3JtRGl2KVxuICBnZW5lcmF0ZVRvRG9Ob3Rlc0lucHV0KFwidG9Eb05vdGVzSW5wdXRcIiwgdG9Eb0Zvcm1EaXYpXG4gIGdlbmVyYXRlVG9Eb1N1Ym1pdElucHV0KFwidG9Eb1N1YkJ0blwiLCBcIkFERCBUT0RPXCIsIHRvRG9Gb3JtRGl2KVxuXG5cbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIik7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EaXYpO1xuXG4gIGNvbnN0IHRvRG9Gb3JtSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb05hbWVJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvRHVlRGF0ZUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvUHJpb3JpdHlJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb05vdGVzSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3Qgc3RhdHVzID0gXCJpbmNvbXBsZXRlXCJcbiAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHRvRG9TdWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9TdWJCdG5cIilcbiAgdG9Eb1N1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QudGFza3MucHVzaCh0b0RvRm9ybUlucHV0KCkpO1xuICAgIGxhdGVzdFRvRG8gPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDE7XG4gICAgY29uc29sZS5sb2coXCJsYXRlc3QgXCIgKyBsYXRlc3RUb0RvKTtcbiAgICByZWZyZXNoVG9Eb3MoKVxuICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcyk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJvamVjdENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250ZW50Q29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SGVhZGVyXCIpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gYWN0aXZlUHJvamVjdC5uYW1lO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICByZXR1cm4gcHJvamVjdENvbnRlbnRDb250YWluZXI7XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJEaXZcIik7XG5leHBvcnQgY29uc3Qgc2lkZUJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhckRpdlwiKTtcbi8vZXhwb3J0IGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluQ29udGVudENvbnRhaW5lclwiKVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJEaXZcIik7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0Fyci5sZW5ndGggLSAxO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGl2XCIpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBzaWRlQmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICBwcm9qZWN0c0Fyci5mb3JFYWNoKChvYmopID0+IHtcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RJbmRleCk7XG4gIH0pO1xuXG4gIC8vY29uc3QgZWFjaFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3REaXZcIilcbiAgLy9lYWNoUHJvamVjdC5mb3JFYWNoKHByb2plY3QgPT4geyBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IGNvbnNvbGUubG9nKHByb2plY3QuaWQpIH0gKSB9IClcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwcm9qZWN0SW5kZXh9YCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpO1xuICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0FycltgJHtwcm9qZWN0SW5kZXh9YF07XG4gICAgY29uc29sZS5sb2coXCJUaGUgYWN0aXZlIHByb2plY3QgaXM6IFwiICsgYWN0aXZlUHJvamVjdC5uYW1lKTtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5tYWluQ29udGVudENvbnRhaW5lclwiXG4gICAgKTtcbiAgICBtYWluQ29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQoKSk7XG4gICAgZ2VuZXJhdGVUb0RvRm9ybSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtRGl2XCIpO1xuICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybURpdik7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdElucHV0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIldoYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0P1wiKTtcbiAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgcHJvamVjdElucHV0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdElucHV0XCIpO1xuICBwcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBjb25zdCBwcm9qZWN0U3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBwcm9qZWN0U3ViQnRuLnRleHRDb250ZW50ID0gXCJDUkVBVEUgUFJPSkVDVFwiO1xuICBwcm9qZWN0U3ViQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgcHJvamVjdFN1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RTdWJCdG5cIik7XG4gIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RTdWJCdG4pO1xufTtcblxuXG5jb25zdCBnZW5lcmVyYXRlQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgY29uc3QgbW9kYWxCbHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbEJsdXJcIik7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZU1vZGFsLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGNsb3NlTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlTW9kYWxcIik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlTW9kYWwpO1xuICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxCbHVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcbiAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG4gICAgbW9kYWwudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgfSlcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbEJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQmx1clwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBtb2RhbEJsdXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cbiAgY29uc3QgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRvRG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b0RvTmFtZU1vZGFsXCIpO1xuICBjb25zb2xlLmxvZyhhY3RpdmVUb0RvKTtcbiAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBgJHthY3RpdmVUb0RvLm5hbWV9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb05hbWUpO1xuXG4gIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvRG9EdWVEYXRlTW9kYWxcIik7XG4gIHRvRG9EdWVEYXRlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcyA9XCJtb2RhbExhYmVsc1wiPkR1ZSBEYXRlOiA8L3NwYW4+JHthY3RpdmVUb0RvLmRhdGV9YDtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuXG4gIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9Eb1ByaW9yaXR5TW9kYWxcIik7XG4gIHRvRG9Qcmlvcml0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Qcmlvcml0eTogPC9zcGFuPiR7YWN0aXZlVG9Eby5wcmlvcml0eX1gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9Ob3Rlcy5jbGFzc0xpc3QuYWRkKFwidG9Eb05vdGVzTW9kYWxcIik7XG4gIHRvRG9Ob3Rlcy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3MgPVwibW9kYWxMYWJlbHNcIj5Ob3RlczogPC9zcGFuPiR7YWN0aXZlVG9Eby5ub3Rlc31gO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0b0RvTm90ZXMpO1xuXG4gIGdlbmVyZXJhdGVDbG9zZUJ1dHRvbigpXG5cbiAgY29uc3QgZWRpdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGVkaXRUb0RvLmNsYXNzTGlzdC5hZGQoXCJlZGl0VG9Eb1wiKVxuICBlZGl0VG9Eby50ZXh0Q29udGVudCA9IFwiRURJVFwiXG4gIG1vZGFsLmFwcGVuZENoaWxkKGVkaXRUb0RvKVxuICBlZGl0VG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBnZW5lcmF0ZVRvRG9OYW1lSW5wdXQoXCJlZGl0TmFtZUlucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb0RhdGVJbnB1dChcImVkaXREYXRlSW5wdXRcIiwgbW9kYWwpXG4gICAgZ2VuZXJhdGVUb0RvUHJpb3JpdHlJbnB1dChcImVkaXRQcmlvcml0eUlucHV0XCIsIG1vZGFsKVxuICAgIGdlbmVyYXRlVG9Eb05vdGVzSW5wdXQoXCJlZGl0Tm90ZXNJbnB1dFwiLCBtb2RhbClcbiAgICBnZW5lcmF0ZVRvRG9TdWJtaXRJbnB1dChcImVkaXRTdWJtaXRCdXR0b25cIiwgXCJTVUJNSVQgQ0hBTkdFU1wiLCBtb2RhbClcbiAgICBnZW5lcmVyYXRlQ2xvc2VCdXR0b24oKVxuICAgIGNvbnN0IGVkaXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0TmFtZUlucHV0XCIpXG4gICAgZWRpdE5hbWUudmFsdWUgPSBhY3RpdmVUb0RvLm5hbWVcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERhdGVJbnB1dFwiKVxuICAgIGVkaXREYXRlLnZhbHVlID0gYWN0aXZlVG9Eby5kYXRlXG4gICAgY29uc3QgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0UHJpb3JpdHlJbnB1dFwiKVxuICAgIGVkaXRQcmlvcml0eS52YWx1ZSA9IGFjdGl2ZVRvRG8ucHJpb3JpdHlcbiAgICBjb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXROb3Rlc0lucHV0XCIpXG4gICAgZWRpdE5vdGVzLnZhbHVlID0gYWN0aXZlVG9Eby5ub3Rlc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFN1Ym1pdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWN0aXZlVG9Eby5uYW1lID0gZWRpdE5hbWUudmFsdWVcbiAgICAgIGFjdGl2ZVRvRG8uZGF0ZSA9IGVkaXREYXRlLnZhbHVlXG4gICAgICBhY3RpdmVUb0RvLnByaW9yaXR5ID0gZWRpdFByaW9yaXR5LnZhbHVlXG4gICAgICBhY3RpdmVUb0RvLm5vdGVzID0gZWRpdE5vdGVzLnZhbHVlXG4gICAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgIG1vZGFsQmx1ci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG4gICAgICBtb2RhbC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG4gICAgICBcbiAgICAgIHJlZnJlc2hUb0RvcygpXG5cbiAgICB9KVxuICB9KVxuICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVUk7XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdHNBcnIgPSBbXVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgICAgIHRoaXMuZG9uZSA9IFtdXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcblxuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBgJHtuYW1lfWAudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIlwiKVxuICAgICAgIFxuICAgICAgICB0aGlzLmlkID0gcHJvamVjdElEXG4gICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGF0dXMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xuXG4gICAgICAgIGNvbnN0IHRhc2tJRCA9IG5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gOTk5ICsgMTAwKSlcbiAgICAgICAgICAgXG4gICAgICAgIHRoaXMuaWQgPSB0YXNrSURcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGdlbmVyYXRlVUksIHsgZ2VuZXJhdGVQcm9qZWN0Q2FyZCwgZ2VuZXJhdGVQcm9qZWN0Rm9ybSB9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IFByb2plY3QsIHsgYWN0aXZlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcbmltcG9ydCB7IHByb2plY3RzQXJyIH0gZnJvbSAnLi9wcm9qZWN0J1xuXG5cblxuZ2VuZXJhdGVVSSgpXG5nZW5lcmF0ZVByb2plY3RGb3JtKClcblxuXG5jb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJbnB1dFwiKS52YWx1ZTtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSlcbn1cblxuY29uc3QgcmVzZXRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIilcbiAgICBuYW1lLnZhbHVlID0gXCJcIlxufVxuXG5jb25zdCBwcm9qZWN0U3ViQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U3ViQnRuXCIpXG5wcm9qZWN0U3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdHNBcnIucHVzaChwcm9qZWN0Rm9ybUlucHV0KCkpXG4gICAgZ2VuZXJhdGVQcm9qZWN0Q2FyZChwcm9qZWN0Rm9ybUlucHV0KCkpXG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0c0FycilcbiAgICByZXNldFByb2plY3RGb3JtKCk7XG4gICAgXG59KVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=