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
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#colors {\n    color: \n    #1C1D21\n    #A288A6\n    #BB9BB0\n    #CCBCBC\n    #F1E3E4\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* z-index: 1; */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr;\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n}\n\n.accent {\n    background-color: #CCBCBC;\n}\n\n.primary {\n    background-color: #F1E3E4;\n}\n\n.taskbar {\n    padding: 50px 10px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.taskbarItem {\n    font-weight: bold;\n    font-size: 2rem;\n    padding: 10px;\n}\n\n.projectList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectList > :first-child {\n    align-items: center;\n}\n.projectList > :nth-child(n+2) {\n    font-weight: normal;\n    font-size: 1.5rem;\n    padding: 5px 0 5px 20px;\n    margin-left: 10px;\n}\n\n.projectList > :nth-child(n+2):hover {\n    background: #CCBC;\n    cursor: pointer;\n}\n\n.container {\n    padding: 40px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.listItem {\n    width: 75%;\n    padding: 10px;\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\nimg {\n    filter: invert(25%) sepia(9%) saturate(7427%) hue-rotate(66deg) brightness(92%) contrast(88%);\n}\n\n.crossout  {\n    opacity: 0.5;\n}\n\n.listHeader {\n    display: flex;\n    flex-direction: row;\n}\n\n.newListItemButton {\n    position: absolute;\n    top:0;\n    right:0;\n    margin: 10px;\n    font-size: 1.5rem;\n    padding: 0px 5px;\n}\n\n.newListItemButton:hover {\n    cursor: pointer;\n}\n\n\n.newItemForm {\n    width: 50vw;\n    height: 60vh;\n    border: 1px solid black;  \n    margin-left: 150px;\n    visibility: hidden;\n    position: absolute;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n}\n\n.newItemForm.clicked {\n    visibility: visible;\n}\n\n.formHeader {\n    width:100%;\n    height:12%;\n    background-color:#CCBCBC;\n    display:flex;\n    align-items:center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    padding-left: 10px;\n    /* padding-top: 30px; */\n}\n\n.formBody {\n    background-color: #BB9BB0;  \n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.formBody > * {\n    border: none;\n    outline: none;\n}\n\n\n.dueDateDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.prioDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.prioDiv > div {\n    font-size: 1.2rem;\n    font-weight: normal;\n}\n\n.prioDiv > div > input {\n    padding: 10px;\n}\n\n.submitButton {\n    width: 30%;\n    padding: 10px 10px 10px 10px;\n    font-size: 2rem;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 30px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;;;;;;AAMJ;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,6FAA6F;AACjG;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,OAAO;IACP,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,gCAAgC;IAChC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,UAAU;IACV,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB","sourcesContent":["#colors {\n    color: \n    #1C1D21\n    #A288A6\n    #BB9BB0\n    #CCBCBC\n    #F1E3E4\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* z-index: 1; */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr;\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n}\n\n.accent {\n    background-color: #CCBCBC;\n}\n\n.primary {\n    background-color: #F1E3E4;\n}\n\n.taskbar {\n    padding: 50px 10px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.taskbarItem {\n    font-weight: bold;\n    font-size: 2rem;\n    padding: 10px;\n}\n\n.projectList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectList > :first-child {\n    align-items: center;\n}\n.projectList > :nth-child(n+2) {\n    font-weight: normal;\n    font-size: 1.5rem;\n    padding: 5px 0 5px 20px;\n    margin-left: 10px;\n}\n\n.projectList > :nth-child(n+2):hover {\n    background: #CCBC;\n    cursor: pointer;\n}\n\n.container {\n    padding: 40px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.listItem {\n    width: 75%;\n    padding: 10px;\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\nimg {\n    filter: invert(25%) sepia(9%) saturate(7427%) hue-rotate(66deg) brightness(92%) contrast(88%);\n}\n\n.crossout  {\n    opacity: 0.5;\n}\n\n.listHeader {\n    display: flex;\n    flex-direction: row;\n}\n\n.newListItemButton {\n    position: absolute;\n    top:0;\n    right:0;\n    margin: 10px;\n    font-size: 1.5rem;\n    padding: 0px 5px;\n}\n\n.newListItemButton:hover {\n    cursor: pointer;\n}\n\n\n.newItemForm {\n    width: 50vw;\n    height: 60vh;\n    border: 1px solid black;  \n    margin-left: 150px;\n    visibility: hidden;\n    position: absolute;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n}\n\n.newItemForm.clicked {\n    visibility: visible;\n}\n\n.formHeader {\n    width:100%;\n    height:12%;\n    background-color:#CCBCBC;\n    display:flex;\n    align-items:center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    padding-left: 10px;\n    /* padding-top: 30px; */\n}\n\n.formBody {\n    background-color: #BB9BB0;  \n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.formBody > * {\n    border: none;\n    outline: none;\n}\n\n\n.dueDateDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.prioDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.prioDiv > div {\n    font-size: 1.2rem;\n    font-weight: normal;\n}\n\n.prioDiv > div > input {\n    padding: 10px;\n}\n\n.submitButton {\n    width: 30%;\n    padding: 10px 10px 10px 10px;\n    font-size: 2rem;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 30px;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");

// import todoItem from "./todoList";

let eventSetup = () => {
    function formSubmitted() {
        console.log("form submitted successfully");
        let inputs = document.getElementById("form").elements;
        console.log(inputs);
        let item = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)(inputs[0].value,inputs[1].value,inputs[2].value,document.querySelector('input[name="prio"]:checked').value, false);
        console.log(lastLoaded);
        console.log(listArray);
        console.log(listArray[lastLoaded])
        listArray[lastLoaded].addItem(item);
        item.display();
    };

    let lastLoaded = null;
    // console.log('to be completed');
    const listArray = [];
    let testList = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList)();
    listArray.push(testList);
    let test = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)("This is a test item", "not implemented yet","Dec 12","high",false);
    let test2 = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)("This is also a test item", "not implemented yet","Dec 12","medium",true);
    testList.addItem(test);
    testList.addItem(test2);

    document.getElementById('0').addEventListener('click',function() {
        if(lastLoaded != Number('0')){
            listArray[Number('0')].clearDisplay();
            listArray[Number('0')].loadList();
            lastLoaded = Number('0');
            console.log('default list loaded');
        }
    });
    //New item functionality. Creates a todoItem and adds it to the current project. Uses modal
    document.querySelector('.newListItemButton').addEventListener('click', function() {
        document.getElementById('form').classList.add('clicked');
    });

    //Form submission default action override
    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault();
        event.stopPropagation();
        document.querySelector('.newItemForm').classList.remove('clicked');
        formSubmitted();
    });

    //New List functionality. Creates a div with a name, adds it to listArray, makes a new todoList
    document.getElementById('newList').addEventListener('click', function() {
        let newList = document.createElement('div');
        newList.id = listArray.length;
        newList.textContent = window.prompt('Please give this new list a name:');
        document.getElementById('projects').appendChild(newList);
        let listToAdd = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList)();
        listArray.push(listToAdd);
        listArray[listArray.length - 1].loadList();
        newList.addEventListener('click', function() {
            if(lastLoaded != newList.id){
                listArray[listArray.length - 1].clearDisplay();
                listArray[listArray.length - 1].loadList();
                lastLoaded = newList.id;
            }
        })
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventSetup);

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



let home = () => {
    const content = document.getElementById('content');

    //Button to make a new list item, in the top right corner
    let newItemButton = document.createElement('button');
    newItemButton.type = "button";
    newItemButton.textContent = "+";
    // newItemButton.style.zIndex = "2";
    newItemButton.classList.add('newListItemButton');
    content.appendChild(newItemButton);

    //Form to take in new items, attached to content div but sits under it usually.
    let newForm = document.createElement('form');
    newForm.id = "form";
    newForm.classList.add('newItemForm');
    content.appendChild(newForm);

    //Populating form
    let header = document.createElement('div');
    header.textContent = "Create a new event:";
    header.classList.add('formHeader');
    newForm.appendChild(header);    

    let formBody = document.createElement('div');
    formBody.classList.add('formBody');

    let titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.required = true;
    titleInput.placeholder = "Event title";
    titleInput.maxLength = "40";
    formBody.appendChild(titleInput);

    let descriptionInput = document.createElement('textarea');
    descriptionInput.id = "description";
    descriptionInput.required = true;
    descriptionInput.placeholder = "Event description";
    descriptionInput.rows = "3";
    descriptionInput.style.resize = "none";
    formBody.appendChild(descriptionInput);
    
    let dateDiv = document.createElement('div');
    dateDiv.classList.add('dueDateDiv');
    dateDiv.textContent = "Due Date:";
    dateDiv.style.fontWeight = "bold";
    let date =  document.createElement('input');
    date.required = true;
    date.type = "date";
    date.id = "date";
    date.valueAsDate = new Date();
    dateDiv.appendChild(date);
    formBody.appendChild(dateDiv);


    let prioDiv = document.createElement('div');
    prioDiv.classList.add('prioDiv');
    prioDiv.textContent = "Priority: ";
    let prioLow = document.createElement('div');
    let prioLowInput = document.createElement('input');
    prioLowInput.type = "radio";
    prioLowInput.required = true;
    prioLowInput.id = "low";
    prioLowInput.value = "low";
    prioLowInput.name = "prio";
    let prioLowLabel = document.createElement('label');
    prioLowLabel.htmlFor = "low";
    prioLowLabel.textContent = 'Low';
    prioLow.appendChild(prioLowInput);
    prioLow.appendChild(prioLowLabel);
    prioDiv.appendChild(prioLow);
    
    let prioMed = document.createElement('div');
    let prioMedInput = document.createElement('input');
    prioMedInput.type = "radio";
    prioMedInput.id = "med";
    prioMedInput.value = "med";
    prioMedInput.name = "prio";
    let prioMedLabel = document.createElement('label');
    prioMedLabel.htmlFor = "med";
    prioMedLabel.textContent = 'Med';
    prioMed.appendChild(prioMedInput);
    prioMed.appendChild(prioMedLabel);
    prioDiv.appendChild(prioMed);

    let prioHigh = document.createElement('div');
    let prioHighInput = document.createElement('input');
    prioHighInput.type = "radio";
    prioHighInput.id = "high";
    prioHighInput.value = "high";
    prioHighInput.name = "prio";
    let prioHighLabel = document.createElement('label');
    prioLowLabel.htmlFor = "high";
    prioHighLabel.textContent = 'High';
    prioHigh.appendChild(prioHighInput);
    prioHigh.appendChild(prioHighLabel);
    prioDiv.appendChild(prioHigh);

    formBody.appendChild(prioDiv);


    let submit = document.createElement('button');
    submit.textContent = "Add Event";
    submit.classList.add('submitButton');
    formBody.appendChild(submit);

    newForm.appendChild(formBody);


    //Populating taskbar

    let taskbar = document.createElement('div');
    taskbar.classList.add('taskbar');

    let today = document.createElement('div');
    today.textContent = "Today";
    today.classList.add('taskbarItem')

    let week = document.createElement('div');
    week.textContent = "Week";
    week.classList.add('taskbarItem')

    let month = document.createElement('div');
    month.textContent = "Month";
    month.classList.add('taskbarItem')
    month.style.marginBottom = "50px";


    let projects = document.createElement('div');
    projects.id = "projects";
    let projectsHeader = document.createElement('div');
    projectsHeader.classList.add('listHeader');
    projectsHeader.textContent = "Projects";
    projects.appendChild(projectsHeader);

    let projectsNew = document.createElement('button');
    projectsNew.style.width = "fit-content";
    projectsNew.style.height = "fit-content";
    projectsNew.style.padding = "0 2px";
    projectsNew.style.marginLeft = "4px";
    projectsNew.style.fontSize = "0.8rem";
    projectsNew.style.display = "block";
    projectsNew.style.cursor = "pointer";

    projectsNew.type = "button";
    projectsNew.textContent = "+";
    projectsNew.id = "newList";
    projectsHeader.appendChild(projectsNew);

    projects.classList.add('taskbarItem')
    projects.classList.add('projectList')


    taskbar.appendChild(today);
    taskbar.appendChild(week);
    taskbar.appendChild(month);
    taskbar.appendChild(projects);

    //Populating container for task items and list viewing
    let container = document.createElement('div');
    container.classList.add('container');
    
    //Color scheme
    taskbar.classList.add('accent');
    container.classList.add('primary');

    content.appendChild(taskbar);
    content.appendChild(container);

    //Default list load

    let defaultProject = document.createElement('div');
    defaultProject.id = "0";
    defaultProject.textContent = "Default";

    let projectDiv = document.querySelector('.projectList');
    projectDiv.appendChild(defaultProject);

    (0,_events__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItem": () => (/* binding */ todoItem),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.svg */ "./src/check.svg");


const todoItem = (title, description, dueDate, priority, completionStatus) => {

   const priorityColor = () => {
       console.log(priority);
        if(priority === "high"){
            return "2px solid red";
        }
        else if(priority === "med") {
            return "2px solid orange";
        }
        else {
            return "2px solid green";
        }
   }
   
   
    const switchState = (checkBox) => {
        if(completionStatus) {
            checkBox.classList.remove('unchecked');
            let img = document.createElement('img');
            img.src = _check_svg__WEBPACK_IMPORTED_MODULE_0__;
            checkBox.appendChild(img);
            checkBox.style.border = "2px solid #26580F"
            completionStatus = false;
            checkBox.parentNode.classList.add('crossout');
            checkBox.parentNode.style.borderLeft = "2px solid black";
        }
        else {
            checkBox.style.border = "2px solid red"
            if(checkBox.firstChild){
                checkBox.firstChild.remove();
            }
            checkBox.parentNode.classList.remove('crossout');
            completionStatus = true;
            checkBox.parentNode.style.borderLeft = priorityColor();

        }
    }

    const display = () => {
        const container = document.querySelector('.container');

        let box = document.createElement('div');
        box.classList.add('listItem');
        box.style.borderLeft = priorityColor();
 
        let checkBox = document.createElement('div');
        checkBox.style.width = "20px";
        checkBox.style.height = "20px";

        box.appendChild(checkBox);
        switchState(checkBox);
        checkBox.addEventListener('click', function() {
            switchState(checkBox);
        });
        checkBox.style.cursor = "pointer";

        let text = document.createElement('div');
        text.textContent = title;
        //This is a note about aligning the various components inside each listItem
        //As different text lengths change the alignment, maxWidth is not helping
        //By itself.
        text.style.maxWidth = "500px";
        text.style.paddingRight = "350px";
        box.appendChild(text);
        text.parentNode.style.overflowX = "scroll";
        let date = document.createElement('div');
        date.textContent = dueDate;
        date.style.color = "#A288A6";
        box.appendChild(date);
        container.appendChild(box);
        return box;
    }
    console.log("Item created");

    return {display};
}

const todoList = () => {
    const itemArray = [];

    const addItem = (item) => {
        itemArray.push(item);
        //Need to implement some sort of sorting of list items
        // restructure(itemArray);
    };

    const removeItem = (item) => {
        itemArray.splice(itemArray.indexOf(item),1);
    };

    const loadList = () => {
        itemArray.forEach(element => {
            element.display();
        });
    };

    const clearDisplay = () => {
        const container = document.querySelector('.container');
        let child = container.firstChild;
        while(child) {
            child.remove();
            child = container.firstChild;
        }
    };
    console.log('List created');

    return {addItem,removeItem,loadList,clearDisplay};
}


// export function todoList();
// export function todoItem();

/***/ }),

/***/ "./src/check.svg":
/*!***********************!*\
  !*** ./src/check.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f799ba497f6d6baa535.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");


(0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])(); 


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRVM7QUFDYjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxtREFBVTtBQUNkO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMVzs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRTRCO0FBQzVCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2Y4Qjs7QUFFOUIscURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbG9ycyB7XFxuICAgIGNvbG9yOiBcXG4gICAgIzFDMUQyMVxcbiAgICAjQTI4OEE2XFxuICAgICNCQjlCQjBcXG4gICAgI0NDQkNCQ1xcbiAgICAjRjFFM0U0XFxufVxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIHotaW5kZXg6IDE7ICovXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hY2NlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NCQ0JDO1xcbn1cXG5cXG4ucHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUUzRTQ7XFxufVxcblxcbi50YXNrYmFyIHtcXG4gICAgcGFkZGluZzogNTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4udGFza2Jhckl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TGlzdCA+IDpudGgtY2hpbGQobisyKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IDpudGgtY2hpbGQobisyKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNDQ0JDO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmxpc3RJdGVtIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5pbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgyNSUpIHNlcGlhKDklKSBzYXR1cmF0ZSg3NDI3JSkgaHVlLXJvdGF0ZSg2NmRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5jcm9zc291dCAge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5saXN0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLm5ld0xpc3RJdGVtQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLm5ld0xpc3RJdGVtQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ubmV3SXRlbUZvcm0ge1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6NTAlO1xcbiAgICBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXdJdGVtRm9ybS5jbGlja2VkIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvcm1IZWFkZXIge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDQ0JDQkM7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgLyogcGFkZGluZy10b3A6IDMwcHg7ICovXFxufVxcblxcbi5mb3JtQm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQjlCQjA7ICBcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybUJvZHkgPiAqIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uZHVlRGF0ZURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJpb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpb0RpdiA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ucHJpb0RpdiA+IGRpdiA+IGlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7Ozs7OztBQU1KO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDZGQUE2RjtBQUNqRzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbG9ycyB7XFxuICAgIGNvbG9yOiBcXG4gICAgIzFDMUQyMVxcbiAgICAjQTI4OEE2XFxuICAgICNCQjlCQjBcXG4gICAgI0NDQkNCQ1xcbiAgICAjRjFFM0U0XFxufVxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIHotaW5kZXg6IDE7ICovXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hY2NlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NCQ0JDO1xcbn1cXG5cXG4ucHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUUzRTQ7XFxufVxcblxcbi50YXNrYmFyIHtcXG4gICAgcGFkZGluZzogNTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4udGFza2Jhckl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TGlzdCA+IDpudGgtY2hpbGQobisyKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IDpudGgtY2hpbGQobisyKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNDQ0JDO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmxpc3RJdGVtIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5pbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgyNSUpIHNlcGlhKDklKSBzYXR1cmF0ZSg3NDI3JSkgaHVlLXJvdGF0ZSg2NmRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5jcm9zc291dCAge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5saXN0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLm5ld0xpc3RJdGVtQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLm5ld0xpc3RJdGVtQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ubmV3SXRlbUZvcm0ge1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6NTAlO1xcbiAgICBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXdJdGVtRm9ybS5jbGlja2VkIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvcm1IZWFkZXIge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDQ0JDQkM7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgLyogcGFkZGluZy10b3A6IDMwcHg7ICovXFxufVxcblxcbi5mb3JtQm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQjlCQjA7ICBcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybUJvZHkgPiAqIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uZHVlRGF0ZURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJpb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpb0RpdiA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ucHJpb0RpdiA+IGRpdiA+IGlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7dG9kb0xpc3QsdG9kb0l0ZW19IGZyb20gXCIuL3RvZG9MaXN0XCI7XG4vLyBpbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcblxubGV0IGV2ZW50U2V0dXAgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gZm9ybVN1Ym1pdHRlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuZWxlbWVudHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgICAgIGxldCBpdGVtID0gdG9kb0l0ZW0oaW5wdXRzWzBdLnZhbHVlLGlucHV0c1sxXS52YWx1ZSxpbnB1dHNbMl0udmFsdWUsZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9cIl06Y2hlY2tlZCcpLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3RMb2FkZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhsaXN0QXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhsaXN0QXJyYXlbbGFzdExvYWRlZF0pXG4gICAgICAgIGxpc3RBcnJheVtsYXN0TG9hZGVkXS5hZGRJdGVtKGl0ZW0pO1xuICAgICAgICBpdGVtLmRpc3BsYXkoKTtcbiAgICB9O1xuXG4gICAgbGV0IGxhc3RMb2FkZWQgPSBudWxsO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0byBiZSBjb21wbGV0ZWQnKTtcbiAgICBjb25zdCBsaXN0QXJyYXkgPSBbXTtcbiAgICBsZXQgdGVzdExpc3QgPSB0b2RvTGlzdCgpO1xuICAgIGxpc3RBcnJheS5wdXNoKHRlc3RMaXN0KTtcbiAgICBsZXQgdGVzdCA9IHRvZG9JdGVtKFwiVGhpcyBpcyBhIHRlc3QgaXRlbVwiLCBcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIixcIkRlYyAxMlwiLFwiaGlnaFwiLGZhbHNlKTtcbiAgICBsZXQgdGVzdDIgPSB0b2RvSXRlbShcIlRoaXMgaXMgYWxzbyBhIHRlc3QgaXRlbVwiLCBcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIixcIkRlYyAxMlwiLFwibWVkaXVtXCIsdHJ1ZSk7XG4gICAgdGVzdExpc3QuYWRkSXRlbSh0ZXN0KTtcbiAgICB0ZXN0TGlzdC5hZGRJdGVtKHRlc3QyKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgICBpZihsYXN0TG9hZGVkICE9IE51bWJlcignMCcpKXtcbiAgICAgICAgICAgIGxpc3RBcnJheVtOdW1iZXIoJzAnKV0uY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgICAgICBsaXN0QXJyYXlbTnVtYmVyKCcwJyldLmxvYWRMaXN0KCk7XG4gICAgICAgICAgICBsYXN0TG9hZGVkID0gTnVtYmVyKCcwJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBsaXN0IGxvYWRlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9OZXcgaXRlbSBmdW5jdGlvbmFsaXR5LiBDcmVhdGVzIGEgdG9kb0l0ZW0gYW5kIGFkZHMgaXQgdG8gdGhlIGN1cnJlbnQgcHJvamVjdC4gVXNlcyBtb2RhbFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdMaXN0SXRlbUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgIH0pO1xuXG4gICAgLy9Gb3JtIHN1Ym1pc3Npb24gZGVmYXVsdCBhY3Rpb24gb3ZlcnJpZGVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtRm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgICAgZm9ybVN1Ym1pdHRlZCgpO1xuICAgIH0pO1xuXG4gICAgLy9OZXcgTGlzdCBmdW5jdGlvbmFsaXR5LiBDcmVhdGVzIGEgZGl2IHdpdGggYSBuYW1lLCBhZGRzIGl0IHRvIGxpc3RBcnJheSwgbWFrZXMgYSBuZXcgdG9kb0xpc3RcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0xpc3QuaWQgPSBsaXN0QXJyYXkubGVuZ3RoO1xuICAgICAgICBuZXdMaXN0LnRleHRDb250ZW50ID0gd2luZG93LnByb21wdCgnUGxlYXNlIGdpdmUgdGhpcyBuZXcgbGlzdCBhIG5hbWU6Jyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpLmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuICAgICAgICBsZXQgbGlzdFRvQWRkID0gdG9kb0xpc3QoKTtcbiAgICAgICAgbGlzdEFycmF5LnB1c2gobGlzdFRvQWRkKTtcbiAgICAgICAgbGlzdEFycmF5W2xpc3RBcnJheS5sZW5ndGggLSAxXS5sb2FkTGlzdCgpO1xuICAgICAgICBuZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihsYXN0TG9hZGVkICE9IG5ld0xpc3QuaWQpe1xuICAgICAgICAgICAgICAgIGxpc3RBcnJheVtsaXN0QXJyYXkubGVuZ3RoIC0gMV0uY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgbGlzdEFycmF5W2xpc3RBcnJheS5sZW5ndGggLSAxXS5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgICAgIGxhc3RMb2FkZWQgPSBuZXdMaXN0LmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudFNldHVwOyIsImltcG9ydCBldmVudFNldHVwIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgaG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vQnV0dG9uIHRvIG1ha2UgYSBuZXcgbGlzdCBpdGVtLCBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lclxuICAgIGxldCBuZXdJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3SXRlbUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBuZXdJdGVtQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgLy8gbmV3SXRlbUJ1dHRvbi5zdHlsZS56SW5kZXggPSBcIjJcIjtcbiAgICBuZXdJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ld0xpc3RJdGVtQnV0dG9uJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdJdGVtQnV0dG9uKTtcblxuICAgIC8vRm9ybSB0byB0YWtlIGluIG5ldyBpdGVtcywgYXR0YWNoZWQgdG8gY29udGVudCBkaXYgYnV0IHNpdHMgdW5kZXIgaXQgdXN1YWxseS5cbiAgICBsZXQgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmlkID0gXCJmb3JtXCI7XG4gICAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXdJdGVtRm9ybScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG5cbiAgICAvL1BvcHVsYXRpbmcgZm9ybVxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIG5ldyBldmVudDpcIjtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUhlYWRlcicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTsgICAgXG5cbiAgICBsZXQgZm9ybUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQm9keS5jbGFzc0xpc3QuYWRkKCdmb3JtQm9keScpO1xuXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRXZlbnQgdGl0bGVcIjtcbiAgICB0aXRsZUlucHV0Lm1heExlbmd0aCA9IFwiNDBcIjtcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV2ZW50IGRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gXCIzXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICBcbiAgICBsZXQgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZURpdicpO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIGRhdGVEaXYuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIGxldCBkYXRlID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZS5pZCA9IFwiZGF0ZVwiO1xuICAgIGRhdGUudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cblxuICAgIGxldCBwcmlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb0Rpdi5jbGFzc0xpc3QuYWRkKCdwcmlvRGl2Jyk7XG4gICAgcHJpb0Rpdi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIGxldCBwcmlvTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByaW9Mb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb0xvd0lucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgcHJpb0xvd0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBwcmlvTG93SW5wdXQuaWQgPSBcImxvd1wiO1xuICAgIHByaW9Mb3dJbnB1dC52YWx1ZSA9IFwibG93XCI7XG4gICAgcHJpb0xvd0lucHV0Lm5hbWUgPSBcInByaW9cIjtcbiAgICBsZXQgcHJpb0xvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvTG93TGFiZWwuaHRtbEZvciA9IFwibG93XCI7XG4gICAgcHJpb0xvd0xhYmVsLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgcHJpb0xvdy5hcHBlbmRDaGlsZChwcmlvTG93SW5wdXQpO1xuICAgIHByaW9Mb3cuYXBwZW5kQ2hpbGQocHJpb0xvd0xhYmVsKTtcbiAgICBwcmlvRGl2LmFwcGVuZENoaWxkKHByaW9Mb3cpO1xuICAgIFxuICAgIGxldCBwcmlvTWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByaW9NZWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb01lZElucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgcHJpb01lZElucHV0LmlkID0gXCJtZWRcIjtcbiAgICBwcmlvTWVkSW5wdXQudmFsdWUgPSBcIm1lZFwiO1xuICAgIHByaW9NZWRJbnB1dC5uYW1lID0gXCJwcmlvXCI7XG4gICAgbGV0IHByaW9NZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb01lZExhYmVsLmh0bWxGb3IgPSBcIm1lZFwiO1xuICAgIHByaW9NZWRMYWJlbC50ZXh0Q29udGVudCA9ICdNZWQnO1xuICAgIHByaW9NZWQuYXBwZW5kQ2hpbGQocHJpb01lZElucHV0KTtcbiAgICBwcmlvTWVkLmFwcGVuZENoaWxkKHByaW9NZWRMYWJlbCk7XG4gICAgcHJpb0Rpdi5hcHBlbmRDaGlsZChwcmlvTWVkKTtcblxuICAgIGxldCBwcmlvSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBwcmlvSGlnaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcmlvSGlnaElucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgcHJpb0hpZ2hJbnB1dC5pZCA9IFwiaGlnaFwiO1xuICAgIHByaW9IaWdoSW5wdXQudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBwcmlvSGlnaElucHV0Lm5hbWUgPSBcInByaW9cIjtcbiAgICBsZXQgcHJpb0hpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb0xvd0xhYmVsLmh0bWxGb3IgPSBcImhpZ2hcIjtcbiAgICBwcmlvSGlnaExhYmVsLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIHByaW9IaWdoLmFwcGVuZENoaWxkKHByaW9IaWdoSW5wdXQpO1xuICAgIHByaW9IaWdoLmFwcGVuZENoaWxkKHByaW9IaWdoTGFiZWwpO1xuICAgIHByaW9EaXYuYXBwZW5kQ2hpbGQocHJpb0hpZ2gpO1xuXG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQocHJpb0Rpdik7XG5cblxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBFdmVudFwiO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdXR0b24nKTtcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChmb3JtQm9keSk7XG5cblxuICAgIC8vUG9wdWxhdGluZyB0YXNrYmFyXG5cbiAgICBsZXQgdGFza2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tiYXIuY2xhc3NMaXN0LmFkZCgndGFza2JhcicpO1xuXG4gICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuY2xhc3NMaXN0LmFkZCgndGFza2Jhckl0ZW0nKVxuXG4gICAgbGV0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrLnRleHRDb250ZW50ID0gXCJXZWVrXCI7XG4gICAgd2Vlay5jbGFzc0xpc3QuYWRkKCd0YXNrYmFySXRlbScpXG5cbiAgICBsZXQgbW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb250aC50ZXh0Q29udGVudCA9IFwiTW9udGhcIjtcbiAgICBtb250aC5jbGFzc0xpc3QuYWRkKCd0YXNrYmFySXRlbScpXG4gICAgbW9udGguc3R5bGUubWFyZ2luQm90dG9tID0gXCI1MHB4XCI7XG5cblxuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLmlkID0gXCJwcm9qZWN0c1wiO1xuICAgIGxldCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RIZWFkZXInKTtcbiAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG5cbiAgICBsZXQgcHJvamVjdHNOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUucGFkZGluZyA9IFwiMCAycHhcIjtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS5mb250U2l6ZSA9IFwiMC44cmVtXCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIHByb2plY3RzTmV3LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHByb2plY3RzTmV3LnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgcHJvamVjdHNOZXcuaWQgPSBcIm5ld0xpc3RcIjtcbiAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c05ldyk7XG5cbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCd0YXNrYmFySXRlbScpXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKVxuXG5cbiAgICB0YXNrYmFyLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICB0YXNrYmFyLmFwcGVuZENoaWxkKHdlZWspO1xuICAgIHRhc2tiYXIuYXBwZW5kQ2hpbGQobW9udGgpO1xuICAgIHRhc2tiYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgLy9Qb3B1bGF0aW5nIGNvbnRhaW5lciBmb3IgdGFzayBpdGVtcyBhbmQgbGlzdCB2aWV3aW5nXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBcbiAgICAvL0NvbG9yIHNjaGVtZVxuICAgIHRhc2tiYXIuY2xhc3NMaXN0LmFkZCgnYWNjZW50Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza2Jhcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy9EZWZhdWx0IGxpc3QgbG9hZFxuXG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVmYXVsdFByb2plY3QuaWQgPSBcIjBcIjtcbiAgICBkZWZhdWx0UHJvamVjdC50ZXh0Q29udGVudCA9IFwiRGVmYXVsdFwiO1xuXG4gICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0KTtcblxuICAgIGV2ZW50U2V0dXAoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiaW1wb3J0IHN2ZyBmcm9tICcuL2NoZWNrLnN2Zyc7XG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRpb25TdGF0dXMpID0+IHtcblxuICAgY29uc3QgcHJpb3JpdHlDb2xvciA9ICgpID0+IHtcbiAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eSk7XG4gICAgICAgIGlmKHByaW9yaXR5ID09PSBcImhpZ2hcIil7XG4gICAgICAgICAgICByZXR1cm4gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwcmlvcml0eSA9PT0gXCJtZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiMnB4IHNvbGlkIG9yYW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMnB4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgIH1cbiAgIH1cbiAgIFxuICAgXG4gICAgY29uc3Qgc3dpdGNoU3RhdGUgPSAoY2hlY2tCb3gpID0+IHtcbiAgICAgICAgaWYoY29tcGxldGlvblN0YXR1cykge1xuICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LnJlbW92ZSgndW5jaGVja2VkJyk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gc3ZnO1xuICAgICAgICAgICAgY2hlY2tCb3guYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMyNjU4MEZcIlxuICAgICAgICAgICAgY29tcGxldGlvblN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjcm9zc291dCcpO1xuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICBpZihjaGVja0JveC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICBjaGVja0JveC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zc291dCcpO1xuICAgICAgICAgICAgY29tcGxldGlvblN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICBjaGVja0JveC5wYXJlbnROb2RlLnN0eWxlLmJvcmRlckxlZnQgPSBwcmlvcml0eUNvbG9yKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdsaXN0SXRlbScpO1xuICAgICAgICBib3guc3R5bGUuYm9yZGVyTGVmdCA9IHByaW9yaXR5Q29sb3IoKTtcbiBcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrQm94LnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XG4gICAgICAgIGNoZWNrQm94LnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHN3aXRjaFN0YXRlKGNoZWNrQm94KTtcbiAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN3aXRjaFN0YXRlKGNoZWNrQm94KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrQm94LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgLy9UaGlzIGlzIGEgbm90ZSBhYm91dCBhbGlnbmluZyB0aGUgdmFyaW91cyBjb21wb25lbnRzIGluc2lkZSBlYWNoIGxpc3RJdGVtXG4gICAgICAgIC8vQXMgZGlmZmVyZW50IHRleHQgbGVuZ3RocyBjaGFuZ2UgdGhlIGFsaWdubWVudCwgbWF4V2lkdGggaXMgbm90IGhlbHBpbmdcbiAgICAgICAgLy9CeSBpdHNlbGYuXG4gICAgICAgIHRleHQuc3R5bGUubWF4V2lkdGggPSBcIjUwMHB4XCI7XG4gICAgICAgIHRleHQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIzNTBweFwiO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHRleHQucGFyZW50Tm9kZS5zdHlsZS5vdmVyZmxvd1ggPSBcInNjcm9sbFwiO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9IFwiI0EyODhBNlwiO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gY3JlYXRlZFwiKTtcblxuICAgIHJldHVybiB7ZGlzcGxheX07XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1BcnJheSA9IFtdO1xuXG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICAvL05lZWQgdG8gaW1wbGVtZW50IHNvbWUgc29ydCBvZiBzb3J0aW5nIG9mIGxpc3QgaXRlbXNcbiAgICAgICAgLy8gcmVzdHJ1Y3R1cmUoaXRlbUFycmF5KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW1BcnJheS5zcGxpY2UoaXRlbUFycmF5LmluZGV4T2YoaXRlbSksMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBpdGVtQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuZGlzcGxheSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZShjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnTGlzdCBjcmVhdGVkJyk7XG5cbiAgICByZXR1cm4ge2FkZEl0ZW0scmVtb3ZlSXRlbSxsb2FkTGlzdCxjbGVhckRpc3BsYXl9O1xufVxuXG5leHBvcnQge3RvZG9JdGVtLCB0b2RvTGlzdH07XG4vLyBleHBvcnQgZnVuY3Rpb24gdG9kb0xpc3QoKTtcbi8vIGV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcblxuaG9tZSgpOyBcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9