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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merienda+One&family=Yanone+Kaffeesatz&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Yanone Kaffeesatz', sans-serif;\n    font-size: 16px;\n    margin: 0;\n    background-color: rgb(212, 209, 209);\n}\n\n.container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 25% 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas: \"header header header\"\n                         \"sidebar main main\";\n}\n\n.headerDiv {\n    grid-area: header;\n    display: flex;\n    background-color: rgb(0, 128, 79);\n    color: white;\n    width: 100%;\n    height: 5rem;\n    padding: 0.5rem;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    color: white;\n    font-family: 'Merienda One', cursive;\n}\n\n.projectHeader {\n    display: block;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.sideBarDiv {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-area: sidebar;\n    margin: 0 1rem;\n    border-radius: 1rem;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 100%;\n}\n\n.projectsHeader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    font-size: 2rem;\n}\n\n.projectDiv {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(161, 160, 160, 0.137);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.projectDiv:hover {\n    cursor: pointer;\n    background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n    grid-area: main;\n    margin: 0 1rem;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 92%;\n}\n\n.projectFormDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    height: 100%;\n    padding-top: 2rem;\n    align-items: center;\n}\n\n#projectInput {\n    display: block;\n    width: 60%;\n    border-radius: 0.5rem;\n    height: 3rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n    border: rgb(2, 175, 109) solid 1px;\n}\n\n#projectSubBtn {\n    display: block;\n    background-color: rgb(0, 128, 79);\n    color: blanchedalmond;\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover, #toDoSubBtn:hover {\n    cursor: pointer;\n    background-color: rgb(2, 175, 109);\n   \n}\n\n.projectContentContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    \n    padding: 1rem;\n}\n\n.toDoFormDiv {\n    width: 100%;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr fr 1fr;\n    grid-template-areas: \"title title\"\n                         \"date priority\"\n                         \"notes notes\"\n                         \"button button\"   ;\n    justify-items: center;         \n    padding: 1.5rem;            \n}\n\n#toDoNameInput {\n    grid-area: title;\n    display: block;\n    width: 90%;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n    grid-area: date;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n    grid-area: priority;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n    grid-area: notes;\n    resize: none;\n    display: block;\n    width: 90%;\n    height: 7rem;\n    box-sizing: border-box;\n    font-size: 16px;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n    grid-area: button;\n    width: 90%;\n    display: block;\n    background-color: rgb(0, 128, 79);\n    color: blanchedalmond;\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    padding: 1.5rem;\n    background-color: rgba(161, 160, 160, 0.137);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.done {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    padding: 1.5rem;\n    background-color: rgb(2, 175, 109);\n    border: rgb(0, 102, 63);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merienda+One&family=Yanone+Kaffeesatz&display=swap');\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Yanone Kaffeesatz', sans-serif;\n    font-size: 16px;\n    margin: 0;\n    background-color: rgb(212, 209, 209);\n}\n\n.container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 25% 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas: \"header header header\"\n                         \"sidebar main main\";\n}\n\n.headerDiv {\n    grid-area: header;\n    display: flex;\n    background-color: rgb(0, 128, 79);\n    color: white;\n    width: 100%;\n    height: 5rem;\n    padding: 0.5rem;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    color: white;\n    font-family: 'Merienda One', cursive;\n}\n\n.projectHeader {\n    display: block;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.sideBarDiv {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-area: sidebar;\n    margin: 0 1rem;\n    border-radius: 1rem;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 100%;\n}\n\n.projectsHeader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    font-size: 2rem;\n}\n\n.projectDiv {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(161, 160, 160, 0.137);\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.projectDiv:hover {\n    cursor: pointer;\n    background-color: rgba(102, 101, 101, 0.137);\n}\n\n.mainContentContainer {\n    grid-area: main;\n    margin: 0 1rem;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 255, 0.281);\n    box-shadow: rgba(0, 0, 0, 0.432) 0.5rem 0.5rem 0.5rem;\n    height: 500px;\n    width: 92%;\n}\n\n.projectFormDiv {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    height: 100%;\n    padding-top: 2rem;\n    align-items: center;\n}\n\n#projectInput {\n    display: block;\n    width: 60%;\n    border-radius: 0.5rem;\n    height: 3rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectInput:focus {\n    border: rgb(2, 175, 109) solid 1px;\n}\n\n#projectSubBtn {\n    display: block;\n    background-color: rgb(0, 128, 79);\n    color: blanchedalmond;\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#projectSubBtn:hover, #toDoSubBtn:hover {\n    cursor: pointer;\n    background-color: rgb(2, 175, 109);\n   \n}\n\n.projectContentContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    \n    padding: 1rem;\n}\n\n.toDoFormDiv {\n    width: 100%;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr fr 1fr;\n    grid-template-areas: \"title title\"\n                         \"date priority\"\n                         \"notes notes\"\n                         \"button button\"   ;\n    justify-items: center;         \n    padding: 1.5rem;            \n}\n\n#toDoNameInput {\n    grid-area: title;\n    display: block;\n    width: 90%;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoDueDateInput {\n    grid-area: date;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoPriorityInput {\n    grid-area: priority;\n    display: block;\n    width: 80%;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoNotesInput {\n    grid-area: notes;\n    resize: none;\n    display: block;\n    width: 90%;\n    height: 7rem;\n    box-sizing: border-box;\n    font-size: 16px;\n    border-radius: 0.5rem;\n    height: 1.5rem;\n    text-align: center;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n#toDoSubBtn {\n    grid-area: button;\n    width: 90%;\n    display: block;\n    background-color: rgb(0, 128, 79);\n    color: blanchedalmond;\n    padding: 1rem;\n    border: none;\n    border-radius: 0.7rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.2rem 0.2rem 0.2rem;\n}\n\n.toDoCard {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    padding: 1.5rem;\n    background-color: rgba(161, 160, 160, 0.137);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}\n\n.done {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    padding: 1.5rem;\n    background-color: rgb(2, 175, 109);\n    border: rgb(0, 102, 63);\n    border-radius: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.432) 0.1rem 0.1rem 0.1rem;\n    width: 90%;\n}"],"sourceRoot":""}]);
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
    toDoSubBtn.textContent = "+"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNl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ZGV4Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcmllbmRhK09uZSZmYW1pbHk9WWFub25lK0thZmZlZXNhdHomZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwic2lkZWJhciBtYWluIG1haW5cXFwiO1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDc5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYSBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4ucHJvamVjdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnNpZGVCYXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYwLCAxNjAsIDAuMTM3KTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucHJvamVjdERpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjEzNyk7XFxufVxcblxcbi5tYWluQ29udGVudENvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC41cmVtIDAuNXJlbSAwLjVyZW07XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA5MiU7XFxufVxcblxcbi5wcm9qZWN0Rm9ybURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jcHJvamVjdElucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiByZ2IoMiwgMTc1LCAxMDkpIHNvbGlkIDFweDtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgNzkpO1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RTdWJCdG46aG92ZXIsICN0b0RvU3ViQnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTc1LCAxMDkpO1xcbiAgIFxcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b0RvRm9ybURpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiZGF0ZSBwcmlvcml0eVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5vdGVzIG5vdGVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiYnV0dG9uIGJ1dHRvblxcXCIgICA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgICAgICAgICBcXG4gICAgcGFkZGluZzogMS41cmVtOyAgICAgICAgICAgIFxcbn1cXG5cXG4jdG9Eb05hbWVJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiN0b0RvRHVlRGF0ZUlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1ByaW9yaXR5SW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb05vdGVzSW5wdXQge1xcbiAgICBncmlkLWFyZWE6IG5vdGVzO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDdyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb1N1YkJ0biB7XFxuICAgIGdyaWQtYXJlYTogYnV0dG9uO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgNzkpO1xcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuLnRvRG9DYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5kb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDE3NSwgMTA5KTtcXG4gICAgYm9yZGVyOiByZ2IoMCwgMTAyLCA2Myk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGVBQWU7SUFDZixTQUFTO0lBQ1Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCOzRDQUN3QztBQUM1Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxxREFBcUQ7SUFDckQsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIscURBQXFEO0lBQ3JELFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw0Q0FBNEM7SUFDNUMscURBQXFEO0lBQ3JELGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0lBRXZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDOzs7MkNBR3VDO0lBQ3ZDLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw0Q0FBNEM7SUFDNUMscUJBQXFCO0lBQ3JCLHFEQUFxRDtJQUNyRCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscURBQXFEO0lBQ3JELFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJpZW5kYStPbmUmZmFtaWx5PVlhbm9uZStLYWZmZWVzYXR6JmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcInNpZGViYXIgbWFpbiBtYWluXFxcIjtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTI4LCA3OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuLnByb2plY3RIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5zaWRlQmFyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MCwgMTYwLCAwLjEzNyk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnByb2plY3REaXY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDEsIDEwMSwgMC4xMzcpO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnRDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogOTIlO1xcbn1cXG5cXG4ucHJvamVjdEZvcm1EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0SW5wdXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3Byb2plY3RJbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogcmdiKDIsIDE3NSwgMTA5KSBzb2xpZCAxcHg7XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDc5KTtcXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbiNwcm9qZWN0U3ViQnRuOmhvdmVyLCAjdG9Eb1N1YkJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDE3NSwgMTA5KTtcXG4gICBcXG59XFxuXFxuLnByb2plY3RDb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9Eb0Zvcm1EaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciBmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZSB0aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRhdGUgcHJpb3JpdHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJub3RlcyBub3Rlc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImJ1dHRvbiBidXR0b25cXFwiICAgO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgXFxuICAgIHBhZGRpbmc6IDEuNXJlbTsgICAgICAgICAgICBcXG59XFxuXFxuI3RvRG9OYW1lSW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMnJlbSAwLjJyZW0gMC4ycmVtO1xcbn1cXG5cXG4jdG9Eb0R1ZURhdGVJbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Qcmlvcml0eUlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9Ob3Rlc0lucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBub3RlcztcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDMyKSAwLjJyZW0gMC4ycmVtIDAuMnJlbTtcXG59XFxuXFxuI3RvRG9TdWJCdG4ge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDc5KTtcXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQzMikgMC4ycmVtIDAuMnJlbSAwLjJyZW07XFxufVxcblxcbi50b0RvQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjAsIDE2MCwgMC4xMzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZG9uZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxNzUsIDEwOSk7XFxuICAgIGJvcmRlcjogcmdiKDAsIDEwMiwgNjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40MzIpIDAuMXJlbSAwLjFyZW0gMC4xcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcbmltcG9ydCB7IGFjdGl2ZSwgcHJvamVjdHNBcnIgfSBmcm9tIFwiLi9wcm9qZWN0XCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIlxuXG5cbmV4cG9ydCBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGxcbmV4cG9ydCBsZXQgbGF0ZXN0VG9EbyA9IG51bGxcblxuY29uc3QgZ2VuZXJhdGVVSSA9ICgpID0+IHtcbiAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG5jb25zdCBnZW5lcmF0ZUhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyRGl2XCIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckRpdilcbiAgICBcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIlRoZSBQcm9qZWN0IFBsYW5uZXJcIlxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvKVxufSkoKVxuXG5jb25zdCBnZW5lcmF0ZVNpZGVCYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc2lkZUJhckRpdi5jbGFzc0xpc3QuYWRkKFwic2lkZUJhckRpdlwiKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyRGl2KVxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c0hlYWRlclwiKVxuICAgIHNpZGVCYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpXG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCJcbn0pKClcblxuY29uc3QgZ2VuZXJhdGVNYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRDb250YWluZXIpXG59KSgpXG5cbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvQ2FyZCA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIilcbiAgICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBjYXJkSW5kZXggPSBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDFcbiAgICBjb25zdCBjYXJkSUQgPSBcInRvZG9cIiArIGNhcmRJbmRleFxuICAgIHRvRG9DYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGNhcmRJRClcbiAgICB0b0RvQ2FyZC5jbGFzc0xpc3QuYWRkKFwidG9Eb0NhcmRcIilcbiAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9DYXJkKVxuICAgIGNvbnN0IHRvRG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b0RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9UaXRsZURpdlwiKVxuICAgIHRvRG9UaXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8ubmFtZVxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9UaXRsZURpdilcbiAgICBjb25zdCB0b0RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b0RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb0RhdGVEaXZcIilcbiAgICB0b0RvRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZVxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9EYXRlRGl2KVxuICAgIGNvbnN0IHRvRG9Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b0RvUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9Qcmlvcml0eURpdlwiKVxuICAgIHRvRG9Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHlcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHlEaXYpXG4gICAgY29uc3QgdG9Eb05vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvRG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb05vdGVzRGl2XCIpXG4gICAgdG9Eb05vdGVzRGl2LnRleHRDb250ZW50ID0gdG9kby5ub3Rlc1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9Ob3Rlc0RpdilcbiAgICBjb25zdCBkb25lVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBkb25lVG9Eby5jbGFzc0xpc3QuYWRkKFwiZG9uZVRvRG9cIilcbiAgICBkb25lVG9Eby50ZXh0Q29udGVudCA9IFwiRE9ORT9cIlxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGRvbmVUb0RvKVxuICAgIGRvbmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZU1lID0gZGVsZXRlVG9Eby5wYXJlbnROb2RlLmlkXG4gICAgICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlTWUpXG4gICAgICAgIGFjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpXG4gICAgICAgIGFjdGl2ZVByb2plY3QuZG9uZS5wdXNoKGAke2RlbGV0ZU1lfWApXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG8gZG86XCIpXG4gICAgICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcylcbiAgICAgICAgY29uc29sZS5sb2coXCJkb25lOlwiKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QuZG9uZSlcbiAgICAgICAgdGhpc0NhcmQuY2xhc3NMaXN0LnJlbW92ZShcInRvRG9DYXJkXCIpXG4gICAgICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpXG4gICAgICAgIFxuICAgIH0pXG4gICAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBkZWxldGVUb0RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVUb0RvXCIpXG4gICAgZGVsZXRlVG9Eby50ZXh0Q29udGVudCA9IFwiREVMRVRFXCJcbiAgICBkZWxldGVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZU1lID0gZGVsZXRlVG9Eby5wYXJlbnROb2RlLmlkXG4gICAgICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlTWUpXG4gICAgICAgIGFjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGAke2RlbGV0ZU1lfWAsIDEpXG4gICAgICAgIGNvbnNvbGUudGFibGUoYWN0aXZlUHJvamVjdC50YXNrcylcbiAgICAgICAgdGhpc0NhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzQ2FyZClcbiAgICAgICAgXG4gICAgfSlcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVUb0RvKVxuICAgIFxufVxuICAgIFxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB0b0RvRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b0RvRm9ybURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1EaXZcIilcbiAgICBjb25zdCB0b0RvTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9OYW1lSW5wdXRcIilcbiAgICB0b0RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgdG9Eb05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIidUby1EbycgdGl0bGUuLi5cIilcbiAgICB0b0RvTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0b0RvRm9ybVwiKVxuICAgIFxuICAgIHRvRG9OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgdG9Eb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcbiAgICB0b0RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9EdWVEYXRlSW5wdXRcIilcbiAgICB0b0RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIilcblxuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICB0b0RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvUHJpb3JpdHlJbnB1dFwiKVxuICAgIHRvRG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIilcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKVxuICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIlxuICAgIGNvbnN0IHJlZ3VsYXJQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICByZWd1bGFyUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJyZWd1bGFyXCIpXG4gICAgcmVndWxhclByaW9yaXR5LnRleHRDb250ZW50ID0gXCJSZWd1bGFyIFByaW9yaXR5XCJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKVxuICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaCBQcmlvcml0eVwiXG5cblxuICAgIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSlcbiAgICB0b0RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQocmVndWxhclByaW9yaXR5KVxuICAgIHRvRG9Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpXG5cblxuICAgIGNvbnN0IHRvRG9Ob3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvTm90ZXNJbnB1dFwiKVxuICAgLy8gdG9Eb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgICB0b0RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5vdGVzLi4uXCIpXG4gICAgdG9Eb05vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpXG5cbiAgICBjb25zdCB0b0RvU3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHRvRG9TdWJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxuICAgIHRvRG9TdWJCdG4udGV4dENvbnRlbnQgPSBcIitcIlxuICAgIHRvRG9TdWJCdG4uY2xhc3NMaXN0LmFkZChcInRvRG9Gb3JtXCIpXG4gICAgdG9Eb1N1YkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9TdWJCdG5cIilcblxuICAgIHRvRG9Gb3JtRGl2LmFwcGVuZENoaWxkKHRvRG9OYW1lSW5wdXQpXG4gICAgdG9Eb0Zvcm1EaXYuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpXG4gICAgdG9Eb0Zvcm1EaXYuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5KVxuICAgIHRvRG9Gb3JtRGl2LmFwcGVuZENoaWxkKHRvRG9Ob3Rlc0lucHV0KVxuICAgIHRvRG9Gb3JtRGl2LmFwcGVuZENoaWxkKHRvRG9TdWJCdG4pXG5cbiAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGVudENvbnRhaW5lclwiKVxuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EaXYpXG5cbiAgICBjb25zdCB0b0RvRm9ybUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvTmFtZUlucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvRHVlRGF0ZUlucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb1ByaW9yaXR5SW5wdXRcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvTm90ZXNJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBUYXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3RlcylcbiAgICB9XG4gICAgXG4gICAgLy9jb25zdCB0b0RvU3ViQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvU3ViQnRuXCIpXG4gICAgICAgIHRvRG9TdWJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWN0aXZlUHJvamVjdC50YXNrcy5wdXNoKHRvRG9Gb3JtSW5wdXQoKSlcbiAgICAgICAgbGF0ZXN0VG9EbyA9IGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoIC0gMVxuICAgICAgICBjb25zb2xlLmxvZyhcImxhdGVzdCBcIiArIGxhdGVzdFRvRG8pXG4gICAgICAgIGdlbmVyYXRlVG9Eb0NhcmQodG9Eb0Zvcm1JbnB1dCgpKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGFjdGl2ZVByb2plY3QudGFza3MpXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KVxufVxuXG5jb25zdCBwcm9qZWN0Q29udGVudCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENvbnRlbnRDb250YWluZXJcIilcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEhlYWRlclwiKVxuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBhY3RpdmVQcm9qZWN0Lm5hbWVcbiAgICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKVxuICAgXG5cbiAgICByZXR1cm4gcHJvamVjdENvbnRlbnRDb250YWluZXJcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpXG5leHBvcnQgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJEaXZcIilcbmV4cG9ydCBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyRGl2XCIpXG4vL2V4cG9ydCBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRDb250YWluZXJcIilcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJEaXZcIilcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNBcnIubGVuZ3RoIC0gMVxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGl2XCIpXG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgc2lkZUJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgICAgICBwcm9qZWN0c0Fyci5mb3JFYWNoKG9iaiA9PiB7IFxuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RJbmRleClcbn0pXG5cblxuLy9jb25zdCBlYWNoUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERpdlwiKVxuLy9lYWNoUHJvamVjdC5mb3JFYWNoKHByb2plY3QgPT4geyBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IGNvbnNvbGUubG9nKHByb2plY3QuaWQpIH0gKSB9ICkgICAgXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwcm9qZWN0SW5kZXh9YCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEluZGV4KVxuICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0FycltgJHtwcm9qZWN0SW5kZXh9YF1cbiAgICBjb25zb2xlLmxvZyhcIlRoZSBhY3RpdmUgcHJvamVjdCBpczogXCIgKyBhY3RpdmVQcm9qZWN0Lm5hbWUpXG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250ZW50Q29udGFpbmVyXCIpXG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KCkpXG4gICAgZ2VuZXJhdGVUb0RvRm9ybSgpXG5cbiAgICBcbiAgICB9KVxuXG59XG5cblxuXG5cblxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRlbnRDb250YWluZXJcIilcbiAgICBjb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEZvcm1EaXZcIilcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybURpdilcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0SW5wdXRcIilcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHlvdXIgcHJvamVjdD9cIilcbiAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RGb3JtXCIpXG4gICAgcHJvamVjdElucHV0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdElucHV0XCIpXG4gICAgcHJvamVjdElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBjb25zdCBwcm9qZWN0U3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxuICAgIHByb2plY3RTdWJCdG4udGV4dENvbnRlbnQgPSBcIkNSRUFURSBQUk9KRUNUXCJcbiAgICBwcm9qZWN0U3ViQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Rm9ybVwiKVxuICAgIHByb2plY3RTdWJCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3ViQnRuXCIpXG4gICAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KVxuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RTdWJCdG4pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVVSVxuICAgICAgICAgICAgICAgIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzQXJyID0gW11cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgICAgICB0aGlzLmRvbmUgPSBbXVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG5cbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gYCR7bmFtZX1gLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIilcbiAgICAgICBcbiAgICAgICAgdGhpcy5pZCA9IHByb2plY3RJRFxuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3Rlcyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBnZW5lcmF0ZVVJLCB7IGdlbmVyYXRlUHJvamVjdENhcmQsIGdlbmVyYXRlUHJvamVjdEZvcm0gfSBmcm9tICcuL2RvbSdcbmltcG9ydCBQcm9qZWN0LCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snXG5pbXBvcnQgeyBwcm9qZWN0c0FyciB9IGZyb20gJy4vcHJvamVjdCdcblxuXG5cbmdlbmVyYXRlVUkoKVxuZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpXG5cblxuY29uc3QgcHJvamVjdEZvcm1JbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIikudmFsdWU7XG4gICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpXG59XG5cbmNvbnN0IHJlc2V0UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdElucHV0XCIpXG4gICAgbmFtZS52YWx1ZSA9IFwiXCJcbn1cblxuY29uc3QgcHJvamVjdFN1YkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFN1YkJ0blwiKVxucHJvamVjdFN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RzQXJyLnB1c2gocHJvamVjdEZvcm1JbnB1dCgpKVxuICAgIGdlbmVyYXRlUHJvamVjdENhcmQocHJvamVjdEZvcm1JbnB1dCgpKVxuICAgIGNvbnNvbGUudGFibGUocHJvamVjdHNBcnIpXG4gICAgcmVzZXRQcm9qZWN0Rm9ybSgpO1xuICAgIFxufSlcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9