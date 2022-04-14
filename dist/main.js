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
___CSS_LOADER_EXPORT___.push([module.id, "#colors {\n    color: \n    #1C1D21\n    #A288A6\n    #BB9BB0\n    #CCBCBC\n    #F1E3E4\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* z-index: 1; */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr;\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n}\n\n.accent {\n    background-color: #CCBCBC;\n}\n\n.primary {\n    background-color: #F1E3E4;\n}\n\n.taskbar {\n    padding: 50px 10px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.taskbarItem {\n    font-weight: bold;\n    font-size: 2rem;\n    padding: 10px;\n}\n\n.projectList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectList > :first-child {\n    align-items: center;\n}\n.projectList > :nth-child(n+2) {\n    font-weight: normal;\n    font-size: 1.5rem;\n    padding: 5px 0 5px 20px;\n    margin-left: 10px;\n}\n\n.projectList > :nth-child(n+2):hover {\n    background: #CCBC;\n    cursor: pointer;\n}\n\n.container {\n    padding: 40px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.listItem {\n    width: 75%;\n    padding: 10px;\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    /* position: relative; */\n}\n\nimg {\n    filter: invert(25%) sepia(9%) saturate(7427%) hue-rotate(66deg) brightness(92%) contrast(88%);\n}\n\n.crossout  {\n    opacity: 0.5;\n}\n\n.listHeader {\n    display: flex;\n    flex-direction: row;\n}\n\n.newListItemButton {\n    position: absolute;\n    top:0;\n    right:0;\n    margin: 10px;\n    font-size: 1.5rem;\n    padding: 0px 5px;\n}\n\n.newListItemButton:hover {\n    cursor: pointer;\n}\n\n\n.newItemForm {\n    width: 50vw;\n    height: 60vh;\n    border: 1px solid black;  \n    margin-left: 150px;\n    visibility: hidden;\n    position: absolute;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n}\n\n.newItemForm.clicked {\n    visibility: visible;\n}\n\n.formHeader {\n    width:100%;\n    height:12%;\n    background-color:#CCBCBC;\n    display:flex;\n    align-items:center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    padding-left: 10px;\n    /* padding-top: 30px; */\n}\n\n.formBody {\n    background-color: #BB9BB0;  \n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.formBody > * {\n    border: none;\n    outline: none;\n}\n\n\n.dueDateDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.prioDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.prioDiv > div {\n    font-size: 1.2rem;\n    font-weight: normal;\n}\n\n.prioDiv > div > input {\n    padding: 10px;\n}\n\n.submitButton {\n    width: 30%;\n    padding: 10px 10px 10px 10px;\n    font-size: 2rem;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 30px;\n}\n\n.dateDisplayDiv {\n    flex: 1;\n    text-align: end;\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n}\n\n.test{\n    width: 20px;\n    height: 20px;\n    border: 2px solid black;\n    background-color: #BB9BB0;\n    font-weight: bold;\n    opacity: 1;\n    z-index: 2;\n}\n\n.test:hover {\n    cursor: pointer;\n    filter:brightness(120%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;;;;;;AAMJ;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;AAC5B;;AAEA;IACI,6FAA6F;AACjG;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,OAAO;IACP,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,gCAAgC;IAChC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,UAAU;IACV,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,iBAAiB;IACjB,UAAU;IACV,UAAU;AACd;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B","sourcesContent":["#colors {\n    color: \n    #1C1D21\n    #A288A6\n    #BB9BB0\n    #CCBCBC\n    #F1E3E4\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* z-index: 1; */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr;\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n}\n\n.accent {\n    background-color: #CCBCBC;\n}\n\n.primary {\n    background-color: #F1E3E4;\n}\n\n.taskbar {\n    padding: 50px 10px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.taskbarItem {\n    font-weight: bold;\n    font-size: 2rem;\n    padding: 10px;\n}\n\n.projectList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectList > :first-child {\n    align-items: center;\n}\n.projectList > :nth-child(n+2) {\n    font-weight: normal;\n    font-size: 1.5rem;\n    padding: 5px 0 5px 20px;\n    margin-left: 10px;\n}\n\n.projectList > :nth-child(n+2):hover {\n    background: #CCBC;\n    cursor: pointer;\n}\n\n.container {\n    padding: 40px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.listItem {\n    width: 75%;\n    padding: 10px;\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    /* position: relative; */\n}\n\nimg {\n    filter: invert(25%) sepia(9%) saturate(7427%) hue-rotate(66deg) brightness(92%) contrast(88%);\n}\n\n.crossout  {\n    opacity: 0.5;\n}\n\n.listHeader {\n    display: flex;\n    flex-direction: row;\n}\n\n.newListItemButton {\n    position: absolute;\n    top:0;\n    right:0;\n    margin: 10px;\n    font-size: 1.5rem;\n    padding: 0px 5px;\n}\n\n.newListItemButton:hover {\n    cursor: pointer;\n}\n\n\n.newItemForm {\n    width: 50vw;\n    height: 60vh;\n    border: 1px solid black;  \n    margin-left: 150px;\n    visibility: hidden;\n    position: absolute;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n}\n\n.newItemForm.clicked {\n    visibility: visible;\n}\n\n.formHeader {\n    width:100%;\n    height:12%;\n    background-color:#CCBCBC;\n    display:flex;\n    align-items:center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    padding-left: 10px;\n    /* padding-top: 30px; */\n}\n\n.formBody {\n    background-color: #BB9BB0;  \n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.formBody > * {\n    border: none;\n    outline: none;\n}\n\n\n.dueDateDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.prioDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.prioDiv > div {\n    font-size: 1.2rem;\n    font-weight: normal;\n}\n\n.prioDiv > div > input {\n    padding: 10px;\n}\n\n.submitButton {\n    width: 30%;\n    padding: 10px 10px 10px 10px;\n    font-size: 2rem;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 30px;\n}\n\n.dateDisplayDiv {\n    flex: 1;\n    text-align: end;\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n}\n\n.test{\n    width: 20px;\n    height: 20px;\n    border: 2px solid black;\n    background-color: #BB9BB0;\n    font-weight: bold;\n    opacity: 1;\n    z-index: 2;\n}\n\n.test:hover {\n    cursor: pointer;\n    filter:brightness(120%);\n}"],"sourceRoot":""}]);
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


let eventSetup = () => {
    function formSubmitted() {
        let inputs = document.getElementById("form").elements;
        let month = Number(inputs[2].value.slice(5,7) - 1);
        let day = inputs[2].value.slice(8);
        let months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
            ];
        let convertedDate = months[month].slice(0,3) + " " + day;
        let item = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)(inputs[0].value,inputs[1].value,convertedDate,document.querySelector('input[name="prio"]:checked').value, false);
        listArray[lastLoaded].addItem(item);
        item.display();
    };

    let lastLoaded = null;
    const listArray = [];
    let testList = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList)();
    listArray.push(testList);
    let test = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)("This is a test item", "not implemented yet","Dec 12","high",false);
    testList.addItem(test);
    let test2 = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)("This is also a test item", "not implemented yet","Dec 12","medium",true);
    testList.addItem(test2);
    listArray[0].loadList();
    lastLoaded = 0;
 
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

    //deleting list item functionality. Should do :lastchild instead of ID, using ID
    //makes it only apply to one item
    // document.getElementById('test').addEventListener('click', function() {
    //     console.log('deleting....');
    //     console.log(listArray[lastLoaded]);
    //     listArray[lastLoaded].removeItem(document.getElementById('test').parentNode);
    // });

    //Bug here: .array() is a function that just consolelogs the todoList to see its items.
    //The problem is that somehwere between the foreach loop and the event listener one of 
    //the objects is lost in memory. This can be tested by clicking the delete button.
    //UPDATE: the issue is that i am passing in the div object to the array, when the array
    //has todoItem objects. I need to get the todoItem object related to the overall div!
    //UPDATE2: cleardisplay and loadlist are called when an element is deleted but this
    //is only called once, upon page load. it needs to to be moved
    function itemDeletion() {
        let listItems = document.querySelectorAll('.listItem');
        for(let i=0; i<listItems.length;i++) {
            listItems[i].lastChild.addEventListener('click', function(){
                console.log('deleting');
                listArray[lastLoaded].array();
                listArray[lastLoaded].removeItem(i);
            }); 
        }
    }

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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");



const todoItem = (title, description, dueDate, priority, completionStatus) => {
    let initialLoad = true;
   const priorityColor = () => {
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
        if(completionStatus === false) {
            let img = document.createElement('img');
            img.src = _check_svg__WEBPACK_IMPORTED_MODULE_0__;
            checkBox.appendChild(img);
            checkBox.style.border = "2px solid #26580F"
            completionStatus = true;
            checkBox.parentNode.classList.add('crossout');
            checkBox.parentNode.style.borderLeft = "2px solid black";
        }
        else{
            checkBox.style.border = "2px solid red"
            if(checkBox.firstChild){
                checkBox.firstChild.remove();
            }
            checkBox.parentNode.classList.remove('crossout');
            completionStatus = false;
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
        if(completionStatus) {
            let img = document.createElement('img');
            img.src = _check_svg__WEBPACK_IMPORTED_MODULE_0__;
            checkBox.appendChild(img);
            checkBox.style.border = "2px solid #26580F"
            checkBox.parentNode.classList.add('crossout');
            checkBox.parentNode.style.borderLeft = "2px solid black";
        }
        else {
            checkBox.style.border = "2px solid red"
            if(checkBox.firstChild){
                checkBox.firstChild.remove();
            }
            checkBox.parentNode.classList.remove('crossout');
            checkBox.parentNode.style.borderLeft = priorityColor();
        }
    

        checkBox.addEventListener('click', function() {
            switchState(checkBox);
        });
        checkBox.style.cursor = "pointer";

        let text = document.createElement('div');
        text.textContent = title;


        text.style.maxWidth = "500px";
        // text.style.paddingRight = "350px";
        box.appendChild(text);
        text.parentNode.style.overflowX = "scroll";
        let date = document.createElement('div');
        date.classList.add('dateDisplayDiv');
        date.textContent = dueDate;
        date.style.color = "#A288A6";
        box.appendChild(date);
        //delete functionality button
        let deleteButton = document.createElement('button');
        deleteButton.type = "button";
        deleteButton.classList.add('test');
        deleteButton.textContent="X";
        deleteButton.style.opacity="100%";
        box.appendChild(deleteButton);
        
        container.appendChild(box);
        return box;
    }
    console.log("Item created");

    return {display};
}

const todoList = () => {
    let itemArray = [];
    const array = () => {
        console.log(itemArray);
    }
    const addItem = (item) => {
        itemArray.push(item);
        // console.log(itemArray);
        // console.log(itemArray.indexOf(item));
        //Need to implement some sort of sorting of list items
        // restructure(itemArray);
    };

    const removeItem = (index) => {
        console.log('inside remove');
        console.log(itemArray[index]);
        // console.log('index is:');
        // console.log(itemArray.indexOf(itemArray[index]));
        // console.log('object is:');
        // console.log(index);
        itemArray.splice(index,1);
        // itemArray = itemArray.splice(itemArray.indexOf(item),1);
        clearDisplay();
        loadList();
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

    return {addItem,removeItem,loadList,clearDisplay,array};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksbURBQVU7QUFDZDtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkxXO0FBQ0k7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUNBQUc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUU0QjtBQUM1QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDckpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmOEI7O0FBRTlCLHFEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb2xvcnMge1xcbiAgICBjb2xvcjogXFxuICAgICMxQzFEMjFcXG4gICAgI0EyODhBNlxcbiAgICAjQkI5QkIwXFxuICAgICNDQ0JDQkNcXG4gICAgI0YxRTNFNFxcbn1cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiB6LWluZGV4OiAxOyAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWNjZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQkNCQztcXG59XFxuXFxuLnByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFFM0U0O1xcbn1cXG5cXG4udGFza2JhciB7XFxuICAgIHBhZGRpbmc6IDUwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnRhc2tiYXJJdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2plY3RMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgPiA6Zmlyc3QtY2hpbGQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdExpc3QgPiA6bnRoLWNoaWxkKG4rMikge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgPiA6bnRoLWNoaWxkKG4rMik6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjQ0NCQztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5saXN0SXRlbSB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG5pbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgyNSUpIHNlcGlhKDklKSBzYXR1cmF0ZSg3NDI3JSkgaHVlLXJvdGF0ZSg2NmRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5jcm9zc291dCAge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5saXN0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLm5ld0xpc3RJdGVtQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLm5ld0xpc3RJdGVtQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ubmV3SXRlbUZvcm0ge1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6NTAlO1xcbiAgICBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXdJdGVtRm9ybS5jbGlja2VkIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvcm1IZWFkZXIge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDQ0JDQkM7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgLyogcGFkZGluZy10b3A6IDMwcHg7ICovXFxufVxcblxcbi5mb3JtQm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQjlCQjA7ICBcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybUJvZHkgPiAqIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uZHVlRGF0ZURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJpb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpb0RpdiA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ucHJpb0RpdiA+IGRpdiA+IGlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uZGF0ZURpc3BsYXlEaXYge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi50ZXN0e1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCOUJCMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50ZXN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcygxMjAlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJOzs7Ozs7QUFNSjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE9BQU87SUFDUCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb2xvcnMge1xcbiAgICBjb2xvcjogXFxuICAgICMxQzFEMjFcXG4gICAgI0EyODhBNlxcbiAgICAjQkI5QkIwXFxuICAgICNDQ0JDQkNcXG4gICAgI0YxRTNFNFxcbn1cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiB6LWluZGV4OiAxOyAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWNjZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQkNCQztcXG59XFxuXFxuLnByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFFM0U0O1xcbn1cXG5cXG4udGFza2JhciB7XFxuICAgIHBhZGRpbmc6IDUwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnRhc2tiYXJJdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2plY3RMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgPiA6Zmlyc3QtY2hpbGQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdExpc3QgPiA6bnRoLWNoaWxkKG4rMikge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgPiA6bnRoLWNoaWxkKG4rMik6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjQ0NCQztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5saXN0SXRlbSB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG5pbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgyNSUpIHNlcGlhKDklKSBzYXR1cmF0ZSg3NDI3JSkgaHVlLXJvdGF0ZSg2NmRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5jcm9zc291dCAge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5saXN0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLm5ld0xpc3RJdGVtQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLm5ld0xpc3RJdGVtQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ubmV3SXRlbUZvcm0ge1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6NTAlO1xcbiAgICBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXdJdGVtRm9ybS5jbGlja2VkIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvcm1IZWFkZXIge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDQ0JDQkM7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgLyogcGFkZGluZy10b3A6IDMwcHg7ICovXFxufVxcblxcbi5mb3JtQm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQjlCQjA7ICBcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybUJvZHkgPiAqIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uZHVlRGF0ZURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJpb0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpb0RpdiA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ucHJpb0RpdiA+IGRpdiA+IGlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uZGF0ZURpc3BsYXlEaXYge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi50ZXN0e1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCOUJCMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50ZXN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcygxMjAlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3RvZG9MaXN0LHRvZG9JdGVtfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuXG5sZXQgZXZlbnRTZXR1cCA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBmb3JtU3VibWl0dGVkKCkge1xuICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmVsZW1lbnRzO1xuICAgICAgICBsZXQgbW9udGggPSBOdW1iZXIoaW5wdXRzWzJdLnZhbHVlLnNsaWNlKDUsNykgLSAxKTtcbiAgICAgICAgbGV0IGRheSA9IGlucHV0c1syXS52YWx1ZS5zbGljZSg4KTtcbiAgICAgICAgbGV0IG1vbnRocyA9IFtcbiAgICAgICAgICAgICdKYW51YXJ5JyxcbiAgICAgICAgICAgICdGZWJydWFyeScsXG4gICAgICAgICAgICAnTWFyY2gnLFxuICAgICAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgICAgICdNYXknLFxuICAgICAgICAgICAgJ0p1bmUnLFxuICAgICAgICAgICAgJ0p1bHknLFxuICAgICAgICAgICAgJ0F1Z3VzdCcsXG4gICAgICAgICAgICAnU2VwdGVtYmVyJyxcbiAgICAgICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgICAgICdOb3ZlbWJlcicsXG4gICAgICAgICAgICAnRGVjZW1iZXInXG4gICAgICAgICAgICBdO1xuICAgICAgICBsZXQgY29udmVydGVkRGF0ZSA9IG1vbnRoc1ttb250aF0uc2xpY2UoMCwzKSArIFwiIFwiICsgZGF5O1xuICAgICAgICBsZXQgaXRlbSA9IHRvZG9JdGVtKGlucHV0c1swXS52YWx1ZSxpbnB1dHNbMV0udmFsdWUsY29udmVydGVkRGF0ZSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb1wiXTpjaGVja2VkJykudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgbGlzdEFycmF5W2xhc3RMb2FkZWRdLmFkZEl0ZW0oaXRlbSk7XG4gICAgICAgIGl0ZW0uZGlzcGxheSgpO1xuICAgIH07XG5cbiAgICBsZXQgbGFzdExvYWRlZCA9IG51bGw7XG4gICAgY29uc3QgbGlzdEFycmF5ID0gW107XG4gICAgbGV0IHRlc3RMaXN0ID0gdG9kb0xpc3QoKTtcbiAgICBsaXN0QXJyYXkucHVzaCh0ZXN0TGlzdCk7XG4gICAgbGV0IHRlc3QgPSB0b2RvSXRlbShcIlRoaXMgaXMgYSB0ZXN0IGl0ZW1cIiwgXCJub3QgaW1wbGVtZW50ZWQgeWV0XCIsXCJEZWMgMTJcIixcImhpZ2hcIixmYWxzZSk7XG4gICAgdGVzdExpc3QuYWRkSXRlbSh0ZXN0KTtcbiAgICBsZXQgdGVzdDIgPSB0b2RvSXRlbShcIlRoaXMgaXMgYWxzbyBhIHRlc3QgaXRlbVwiLCBcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIixcIkRlYyAxMlwiLFwibWVkaXVtXCIsdHJ1ZSk7XG4gICAgdGVzdExpc3QuYWRkSXRlbSh0ZXN0Mik7XG4gICAgbGlzdEFycmF5WzBdLmxvYWRMaXN0KCk7XG4gICAgbGFzdExvYWRlZCA9IDA7XG4gXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKGxhc3RMb2FkZWQgIT0gTnVtYmVyKCcwJykpe1xuICAgICAgICAgICAgbGlzdEFycmF5W051bWJlcignMCcpXS5jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgICAgIGxpc3RBcnJheVtOdW1iZXIoJzAnKV0ubG9hZExpc3QoKTtcbiAgICAgICAgICAgIGxhc3RMb2FkZWQgPSBOdW1iZXIoJzAnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGxpc3QgbG9hZGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy9OZXcgaXRlbSBmdW5jdGlvbmFsaXR5LiBDcmVhdGVzIGEgdG9kb0l0ZW0gYW5kIGFkZHMgaXQgdG8gdGhlIGN1cnJlbnQgcHJvamVjdC4gVXNlcyBtb2RhbFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdMaXN0SXRlbUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgIH0pO1xuXG4gICAgLy9Gb3JtIHN1Ym1pc3Npb24gZGVmYXVsdCBhY3Rpb24gb3ZlcnJpZGVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtRm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgICAgZm9ybVN1Ym1pdHRlZCgpO1xuICAgIH0pO1xuXG4gICAgLy9OZXcgTGlzdCBmdW5jdGlvbmFsaXR5LiBDcmVhdGVzIGEgZGl2IHdpdGggYSBuYW1lLCBhZGRzIGl0IHRvIGxpc3RBcnJheSwgbWFrZXMgYSBuZXcgdG9kb0xpc3RcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0xpc3QuaWQgPSBsaXN0QXJyYXkubGVuZ3RoO1xuICAgICAgICBuZXdMaXN0LnRleHRDb250ZW50ID0gd2luZG93LnByb21wdCgnUGxlYXNlIGdpdmUgdGhpcyBuZXcgbGlzdCBhIG5hbWU6Jyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpLmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuICAgICAgICBsZXQgbGlzdFRvQWRkID0gdG9kb0xpc3QoKTtcbiAgICAgICAgbGlzdEFycmF5LnB1c2gobGlzdFRvQWRkKTtcbiAgICAgICAgbGlzdEFycmF5W2xpc3RBcnJheS5sZW5ndGggLSAxXS5sb2FkTGlzdCgpO1xuICAgICAgICBuZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihsYXN0TG9hZGVkICE9IG5ld0xpc3QuaWQpe1xuICAgICAgICAgICAgICAgIGxpc3RBcnJheVtsaXN0QXJyYXkubGVuZ3RoIC0gMV0uY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgbGlzdEFycmF5W2xpc3RBcnJheS5sZW5ndGggLSAxXS5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgICAgIGxhc3RMb2FkZWQgPSBuZXdMaXN0LmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy9kZWxldGluZyBsaXN0IGl0ZW0gZnVuY3Rpb25hbGl0eS4gU2hvdWxkIGRvIDpsYXN0Y2hpbGQgaW5zdGVhZCBvZiBJRCwgdXNpbmcgSURcbiAgICAvL21ha2VzIGl0IG9ubHkgYXBwbHkgdG8gb25lIGl0ZW1cbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdkZWxldGluZy4uLi4nKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cobGlzdEFycmF5W2xhc3RMb2FkZWRdKTtcbiAgICAvLyAgICAgbGlzdEFycmF5W2xhc3RMb2FkZWRdLnJlbW92ZUl0ZW0oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKS5wYXJlbnROb2RlKTtcbiAgICAvLyB9KTtcblxuICAgIC8vQnVnIGhlcmU6IC5hcnJheSgpIGlzIGEgZnVuY3Rpb24gdGhhdCBqdXN0IGNvbnNvbGVsb2dzIHRoZSB0b2RvTGlzdCB0byBzZWUgaXRzIGl0ZW1zLlxuICAgIC8vVGhlIHByb2JsZW0gaXMgdGhhdCBzb21laHdlcmUgYmV0d2VlbiB0aGUgZm9yZWFjaCBsb29wIGFuZCB0aGUgZXZlbnQgbGlzdGVuZXIgb25lIG9mIFxuICAgIC8vdGhlIG9iamVjdHMgaXMgbG9zdCBpbiBtZW1vcnkuIFRoaXMgY2FuIGJlIHRlc3RlZCBieSBjbGlja2luZyB0aGUgZGVsZXRlIGJ1dHRvbi5cbiAgICAvL1VQREFURTogdGhlIGlzc3VlIGlzIHRoYXQgaSBhbSBwYXNzaW5nIGluIHRoZSBkaXYgb2JqZWN0IHRvIHRoZSBhcnJheSwgd2hlbiB0aGUgYXJyYXlcbiAgICAvL2hhcyB0b2RvSXRlbSBvYmplY3RzLiBJIG5lZWQgdG8gZ2V0IHRoZSB0b2RvSXRlbSBvYmplY3QgcmVsYXRlZCB0byB0aGUgb3ZlcmFsbCBkaXYhXG4gICAgLy9VUERBVEUyOiBjbGVhcmRpc3BsYXkgYW5kIGxvYWRsaXN0IGFyZSBjYWxsZWQgd2hlbiBhbiBlbGVtZW50IGlzIGRlbGV0ZWQgYnV0IHRoaXNcbiAgICAvL2lzIG9ubHkgY2FsbGVkIG9uY2UsIHVwb24gcGFnZSBsb2FkLiBpdCBuZWVkcyB0byB0byBiZSBtb3ZlZFxuICAgIGZ1bmN0aW9uIGl0ZW1EZWxldGlvbigpIHtcbiAgICAgICAgbGV0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0SXRlbScpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxsaXN0SXRlbXMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgbGlzdEl0ZW1zW2ldLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0aW5nJyk7XG4gICAgICAgICAgICAgICAgbGlzdEFycmF5W2xhc3RMb2FkZWRdLmFycmF5KCk7XG4gICAgICAgICAgICAgICAgbGlzdEFycmF5W2xhc3RMb2FkZWRdLnJlbW92ZUl0ZW0oaSk7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRTZXR1cDsiLCJpbXBvcnQgZXZlbnRTZXR1cCBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvL0J1dHRvbiB0byBtYWtlIGEgbmV3IGxpc3QgaXRlbSwgaW4gdGhlIHRvcCByaWdodCBjb3JuZXJcbiAgICBsZXQgbmV3SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0l0ZW1CdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgbmV3SXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIC8vIG5ld0l0ZW1CdXR0b24uc3R5bGUuekluZGV4ID0gXCIyXCI7XG4gICAgbmV3SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdMaXN0SXRlbUJ1dHRvbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3SXRlbUJ1dHRvbik7XG5cbiAgICAvL0Zvcm0gdG8gdGFrZSBpbiBuZXcgaXRlbXMsIGF0dGFjaGVkIHRvIGNvbnRlbnQgZGl2IGJ1dCBzaXRzIHVuZGVyIGl0IHVzdWFsbHkuXG4gICAgbGV0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3Rm9ybS5pZCA9IFwiZm9ybVwiO1xuICAgIG5ld0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3SXRlbUZvcm0nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld0Zvcm0pO1xuXG4gICAgLy9Qb3B1bGF0aW5nIGZvcm1cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBuZXcgZXZlbnQ6XCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1IZWFkZXInKTtcbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7ICAgIFxuXG4gICAgbGV0IGZvcm1Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUJvZHkuY2xhc3NMaXN0LmFkZCgnZm9ybUJvZHknKTtcblxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV2ZW50IHRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSBcIjQwXCI7XG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJFdmVudCBkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IFwiM1wiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc3R5bGUucmVzaXplID0gXCJub25lXCI7XG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgXG4gICAgbGV0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBkYXRlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBsZXQgZGF0ZSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGUuaWQgPSBcImRhdGVcIjtcbiAgICBkYXRlLnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG5cbiAgICBsZXQgcHJpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9EaXYuY2xhc3NMaXN0LmFkZCgncHJpb0RpdicpO1xuICAgIHByaW9EaXYudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBsZXQgcHJpb0xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBwcmlvTG93SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByaW9Mb3dJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHByaW9Mb3dJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgcHJpb0xvd0lucHV0LmlkID0gXCJsb3dcIjtcbiAgICBwcmlvTG93SW5wdXQudmFsdWUgPSBcImxvd1wiO1xuICAgIHByaW9Mb3dJbnB1dC5uYW1lID0gXCJwcmlvXCI7XG4gICAgbGV0IHByaW9Mb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb0xvd0xhYmVsLmh0bWxGb3IgPSBcImxvd1wiO1xuICAgIHByaW9Mb3dMYWJlbC50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIHByaW9Mb3cuYXBwZW5kQ2hpbGQocHJpb0xvd0lucHV0KTtcbiAgICBwcmlvTG93LmFwcGVuZENoaWxkKHByaW9Mb3dMYWJlbCk7XG4gICAgcHJpb0Rpdi5hcHBlbmRDaGlsZChwcmlvTG93KTtcbiAgICBcbiAgICBsZXQgcHJpb01lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBwcmlvTWVkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByaW9NZWRJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHByaW9NZWRJbnB1dC5pZCA9IFwibWVkXCI7XG4gICAgcHJpb01lZElucHV0LnZhbHVlID0gXCJtZWRcIjtcbiAgICBwcmlvTWVkSW5wdXQubmFtZSA9IFwicHJpb1wiO1xuICAgIGxldCBwcmlvTWVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9NZWRMYWJlbC5odG1sRm9yID0gXCJtZWRcIjtcbiAgICBwcmlvTWVkTGFiZWwudGV4dENvbnRlbnQgPSAnTWVkJztcbiAgICBwcmlvTWVkLmFwcGVuZENoaWxkKHByaW9NZWRJbnB1dCk7XG4gICAgcHJpb01lZC5hcHBlbmRDaGlsZChwcmlvTWVkTGFiZWwpO1xuICAgIHByaW9EaXYuYXBwZW5kQ2hpbGQocHJpb01lZCk7XG5cbiAgICBsZXQgcHJpb0hpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJpb0hpZ2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb0hpZ2hJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHByaW9IaWdoSW5wdXQuaWQgPSBcImhpZ2hcIjtcbiAgICBwcmlvSGlnaElucHV0LnZhbHVlID0gXCJoaWdoXCI7XG4gICAgcHJpb0hpZ2hJbnB1dC5uYW1lID0gXCJwcmlvXCI7XG4gICAgbGV0IHByaW9IaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9Mb3dMYWJlbC5odG1sRm9yID0gXCJoaWdoXCI7XG4gICAgcHJpb0hpZ2hMYWJlbC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBwcmlvSGlnaC5hcHBlbmRDaGlsZChwcmlvSGlnaElucHV0KTtcbiAgICBwcmlvSGlnaC5hcHBlbmRDaGlsZChwcmlvSGlnaExhYmVsKTtcbiAgICBwcmlvRGl2LmFwcGVuZENoaWxkKHByaW9IaWdoKTtcblxuICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKHByaW9EaXYpO1xuXG5cbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgRXZlbnRcIjtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnc3VibWl0QnV0dG9uJyk7XG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUJvZHkpO1xuXG5cbiAgICAvL1BvcHVsYXRpbmcgdGFza2JhclxuXG4gICAgbGV0IHRhc2tiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrYmFyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXInKTtcblxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXJJdGVtJylcblxuICAgIGxldCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vlay50ZXh0Q29udGVudCA9IFwiV2Vla1wiO1xuICAgIHdlZWsuY2xhc3NMaXN0LmFkZCgndGFza2Jhckl0ZW0nKVxuXG4gICAgbGV0IG1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9udGgudGV4dENvbnRlbnQgPSBcIk1vbnRoXCI7XG4gICAgbW9udGguY2xhc3NMaXN0LmFkZCgndGFza2Jhckl0ZW0nKVxuICAgIG1vbnRoLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNTBweFwiO1xuXG5cbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5pZCA9IFwicHJvamVjdHNcIjtcbiAgICBsZXQgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdsaXN0SGVhZGVyJyk7XG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xuXG4gICAgbGV0IHByb2plY3RzTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgIHByb2plY3RzTmV3LnN0eWxlLnBhZGRpbmcgPSBcIjAgMnB4XCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUuZm9udFNpemUgPSBcIjAuOHJlbVwiO1xuICAgIHByb2plY3RzTmV3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICBwcm9qZWN0c05ldy50eXBlID0gXCJidXR0b25cIjtcbiAgICBwcm9qZWN0c05ldy50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIHByb2plY3RzTmV3LmlkID0gXCJuZXdMaXN0XCI7XG4gICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNOZXcpO1xuXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgndGFza2Jhckl0ZW0nKVxuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JylcblxuXG4gICAgdGFza2Jhci5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgdGFza2Jhci5hcHBlbmRDaGlsZCh3ZWVrKTtcbiAgICB0YXNrYmFyLmFwcGVuZENoaWxkKG1vbnRoKTtcbiAgICB0YXNrYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIC8vUG9wdWxhdGluZyBjb250YWluZXIgZm9yIHRhc2sgaXRlbXMgYW5kIGxpc3Qgdmlld2luZ1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgXG4gICAgLy9Db2xvciBzY2hlbWVcbiAgICB0YXNrYmFyLmNsYXNzTGlzdC5hZGQoJ2FjY2VudCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmltYXJ5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tiYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIC8vRGVmYXVsdCBsaXN0IGxvYWRcblxuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlZmF1bHRQcm9qZWN0LmlkID0gXCIwXCI7XG4gICAgZGVmYXVsdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcblxuICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdCk7XG5cbiAgICBldmVudFNldHVwKCk7XG59XG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCBzdmcgZnJvbSAnLi9jaGVjay5zdmcnO1xuaW1wb3J0IGV2ZW50U2V0dXAgZnJvbSAnLi9ldmVudHMnO1xuXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0aW9uU3RhdHVzKSA9PiB7XG4gICAgbGV0IGluaXRpYWxMb2FkID0gdHJ1ZTtcbiAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGlmKHByaW9yaXR5ID09PSBcImhpZ2hcIil7XG4gICAgICAgICAgICByZXR1cm4gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwcmlvcml0eSA9PT0gXCJtZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiMnB4IHNvbGlkIG9yYW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMnB4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgIH1cbiAgIH1cbiAgIFxuICAgIGNvbnN0IHN3aXRjaFN0YXRlID0gKGNoZWNrQm94KSA9PiB7XG4gICAgICAgIGlmKGNvbXBsZXRpb25TdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gc3ZnO1xuICAgICAgICAgICAgY2hlY2tCb3guYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMyNjU4MEZcIlxuICAgICAgICAgICAgY29tcGxldGlvblN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICBjaGVja0JveC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Nyb3Nzb3V0Jyk7XG4gICAgICAgICAgICBjaGVja0JveC5wYXJlbnROb2RlLnN0eWxlLmJvcmRlckxlZnQgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgaWYoY2hlY2tCb3guZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3NvdXQnKTtcbiAgICAgICAgICAgIGNvbXBsZXRpb25TdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyTGVmdCA9IHByaW9yaXR5Q29sb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdsaXN0SXRlbScpO1xuICAgICAgICBib3guc3R5bGUuYm9yZGVyTGVmdCA9IHByaW9yaXR5Q29sb3IoKTtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrQm94LnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XG4gICAgICAgIGNoZWNrQm94LnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuXG5cbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgaWYoY29tcGxldGlvblN0YXR1cykge1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHN2ZztcbiAgICAgICAgICAgIGNoZWNrQm94LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjMjY1ODBGXCJcbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY3Jvc3NvdXQnKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyTGVmdCA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgaWYoY2hlY2tCb3guZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3NvdXQnKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyTGVmdCA9IHByaW9yaXR5Q29sb3IoKTtcbiAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzd2l0Y2hTdGF0ZShjaGVja0JveCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja0JveC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdGl0bGU7XG5cblxuICAgICAgICB0ZXh0LnN0eWxlLm1heFdpZHRoID0gXCI1MDBweFwiO1xuICAgICAgICAvLyB0ZXh0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMzUwcHhcIjtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICB0ZXh0LnBhcmVudE5vZGUuc3R5bGUub3ZlcmZsb3dYID0gXCJzY3JvbGxcIjtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlRGlzcGxheURpdicpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9IFwiI0EyODhBNlwiO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIC8vZGVsZXRlIGZ1bmN0aW9uYWxpdHkgYnV0dG9uXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGVzdCcpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQ9XCJYXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5vcGFjaXR5PVwiMTAwJVwiO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gY3JlYXRlZFwiKTtcblxuICAgIHJldHVybiB7ZGlzcGxheX07XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGxldCBpdGVtQXJyYXkgPSBbXTtcbiAgICBjb25zdCBhcnJheSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbUFycmF5KTtcbiAgICB9XG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtQXJyYXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSk7XG4gICAgICAgIC8vTmVlZCB0byBpbXBsZW1lbnQgc29tZSBzb3J0IG9mIHNvcnRpbmcgb2YgbGlzdCBpdGVtc1xuICAgICAgICAvLyByZXN0cnVjdHVyZShpdGVtQXJyYXkpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgcmVtb3ZlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1BcnJheVtpbmRleF0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5kZXggaXM6Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1BcnJheS5pbmRleE9mKGl0ZW1BcnJheVtpbmRleF0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29iamVjdCBpczonKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBpdGVtQXJyYXkuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAvLyBpdGVtQXJyYXkgPSBpdGVtQXJyYXkuc3BsaWNlKGl0ZW1BcnJheS5pbmRleE9mKGl0ZW0pLDEpO1xuICAgICAgICBjbGVhckRpc3BsYXkoKTtcbiAgICAgICAgbG9hZExpc3QoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGl0ZW1BcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5kaXNwbGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckRpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgICAgbGV0IGNoaWxkID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHdoaWxlKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNoaWxkID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdMaXN0IGNyZWF0ZWQnKTtcblxuICAgIHJldHVybiB7YWRkSXRlbSxyZW1vdmVJdGVtLGxvYWRMaXN0LGNsZWFyRGlzcGxheSxhcnJheX07XG59XG5cbmV4cG9ydCB7dG9kb0l0ZW0sIHRvZG9MaXN0fTtcbi8vIGV4cG9ydCBmdW5jdGlvbiB0b2RvTGlzdCgpO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIHRvZG9JdGVtKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuXG5ob21lKCk7IFxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=