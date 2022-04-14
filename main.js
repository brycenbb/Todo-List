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
        // item.display();
    };

    let lastLoaded = null;
    const listArray = [];
    let testList = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList)();
    listArray.push(testList);
    let test = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)("This is a test item", "not implemented yet","Dec 12","high",false);
    testList.addItem(test);
    let test2 = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)("This is also a test item", "not implemented yet","Dec 12","medium",true);
    testList.addItem(test2);
    // listArray[0].loadList();
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

    //Bug here: .array() is a function that just consolelogs the todoList to see its items.
    //The problem is that somehwere between the foreach loop and the event listener one of 
    //the objects is lost in memory. This can be tested by clicking the delete button.
    //UPDATE: the issue is that i am passing in the div object to the array, when the array
    //has todoItem objects. I need to get the todoItem object related to the overall div!
    //UPDATE2: cleardisplay and loadlist are called when an element is deleted but this
    //is only called once, upon page load. it needs to to be moved
    //UPDATE3: FUNCTION moved inside todoList, can delete multiple elements but not new ones.
    //not until the list is loaded entirely, then it can be.

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
        clearDisplay();
        loadList();
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
        for(let i = 0; i < itemArray.length; i++){
            let returnedBox = itemArray[i].display();
            returnedBox.lastChild.addEventListener('click', function() {
                removeItem(i);
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMVztBQUNJOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUNBQUc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRTRCO0FBQzVCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2Y4Qjs7QUFFOUIscURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbG9ycyB7XFxuICAgIGNvbG9yOiBcXG4gICAgIzFDMUQyMVxcbiAgICAjQTI4OEE2XFxuICAgICNCQjlCQjBcXG4gICAgI0NDQkNCQ1xcbiAgICAjRjFFM0U0XFxufVxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIHotaW5kZXg6IDE7ICovXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hY2NlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NCQ0JDO1xcbn1cXG5cXG4ucHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUUzRTQ7XFxufVxcblxcbi50YXNrYmFyIHtcXG4gICAgcGFkZGluZzogNTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4udGFza2Jhckl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TGlzdCA+IDpudGgtY2hpbGQobisyKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IDpudGgtY2hpbGQobisyKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNDQ0JDO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmxpc3RJdGVtIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbmltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDI1JSkgc2VwaWEoOSUpIHNhdHVyYXRlKDc0MjclKSBodWUtcm90YXRlKDY2ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODglKTtcXG59XFxuXFxuLmNyb3Nzb3V0ICB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmxpc3RIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ubmV3TGlzdEl0ZW1CdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5cXG4ubmV3TGlzdEl0ZW1CdXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5uZXdJdGVtRm9ybSB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAgXFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDo1MCU7XFxuICAgIGxlZnQ6NTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ld0l0ZW1Gb3JtLmNsaWNrZWQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9ybUhlYWRlciB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0NDQkNCQztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMzBweDsgKi9cXG59XFxuXFxuLmZvcm1Cb2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCOUJCMDsgIFxcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtQm9keSA+ICoge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5kdWVEYXRlRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcmlvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmlvRGl2ID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5wcmlvRGl2ID4gZGl2ID4gaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5kYXRlRGlzcGxheURpdiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnRlc3R7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkI5QkIwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnRlc3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDEyMCUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7Ozs7OztBQU1KO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw2RkFBNkY7QUFDakc7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsT0FBTztJQUNQLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbG9ycyB7XFxuICAgIGNvbG9yOiBcXG4gICAgIzFDMUQyMVxcbiAgICAjQTI4OEE2XFxuICAgICNCQjlCQjBcXG4gICAgI0NDQkNCQ1xcbiAgICAjRjFFM0U0XFxufVxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIHotaW5kZXg6IDE7ICovXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hY2NlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NCQ0JDO1xcbn1cXG5cXG4ucHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUUzRTQ7XFxufVxcblxcbi50YXNrYmFyIHtcXG4gICAgcGFkZGluZzogNTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4udGFza2Jhckl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TGlzdCA+IDpudGgtY2hpbGQobisyKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCA+IDpudGgtY2hpbGQobisyKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNDQ0JDO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmxpc3RJdGVtIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbmltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDI1JSkgc2VwaWEoOSUpIHNhdHVyYXRlKDc0MjclKSBodWUtcm90YXRlKDY2ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODglKTtcXG59XFxuXFxuLmNyb3Nzb3V0ICB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmxpc3RIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ubmV3TGlzdEl0ZW1CdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5cXG4ubmV3TGlzdEl0ZW1CdXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5uZXdJdGVtRm9ybSB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAgXFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDo1MCU7XFxuICAgIGxlZnQ6NTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ld0l0ZW1Gb3JtLmNsaWNrZWQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9ybUhlYWRlciB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0NDQkNCQztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMzBweDsgKi9cXG59XFxuXFxuLmZvcm1Cb2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCOUJCMDsgIFxcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtQm9keSA+ICoge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5kdWVEYXRlRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcmlvRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmlvRGl2ID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5wcmlvRGl2ID4gZGl2ID4gaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0QnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5kYXRlRGlzcGxheURpdiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnRlc3R7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkI5QkIwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnRlc3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDEyMCUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7dG9kb0xpc3QsdG9kb0l0ZW19IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmxldCBldmVudFNldHVwID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGZvcm1TdWJtaXR0ZWQoKSB7XG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuZWxlbWVudHM7XG4gICAgICAgIGxldCBtb250aCA9IE51bWJlcihpbnB1dHNbMl0udmFsdWUuc2xpY2UoNSw3KSAtIDEpO1xuICAgICAgICBsZXQgZGF5ID0gaW5wdXRzWzJdLnZhbHVlLnNsaWNlKDgpO1xuICAgICAgICBsZXQgbW9udGhzID0gW1xuICAgICAgICAgICAgJ0phbnVhcnknLFxuICAgICAgICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgICAgICdNYXJjaCcsXG4gICAgICAgICAgICAnQXByaWwnLFxuICAgICAgICAgICAgJ01heScsXG4gICAgICAgICAgICAnSnVuZScsXG4gICAgICAgICAgICAnSnVseScsXG4gICAgICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgICAgICdTZXB0ZW1iZXInLFxuICAgICAgICAgICAgJ09jdG9iZXInLFxuICAgICAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgICAgICdEZWNlbWJlcidcbiAgICAgICAgICAgIF07XG4gICAgICAgIGxldCBjb252ZXJ0ZWREYXRlID0gbW9udGhzW21vbnRoXS5zbGljZSgwLDMpICsgXCIgXCIgKyBkYXk7XG4gICAgICAgIGxldCBpdGVtID0gdG9kb0l0ZW0oaW5wdXRzWzBdLnZhbHVlLGlucHV0c1sxXS52YWx1ZSxjb252ZXJ0ZWREYXRlLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvXCJdOmNoZWNrZWQnKS52YWx1ZSwgZmFsc2UpO1xuICAgICAgICBsaXN0QXJyYXlbbGFzdExvYWRlZF0uYWRkSXRlbShpdGVtKTtcbiAgICAgICAgLy8gaXRlbS5kaXNwbGF5KCk7XG4gICAgfTtcblxuICAgIGxldCBsYXN0TG9hZGVkID0gbnVsbDtcbiAgICBjb25zdCBsaXN0QXJyYXkgPSBbXTtcbiAgICBsZXQgdGVzdExpc3QgPSB0b2RvTGlzdCgpO1xuICAgIGxpc3RBcnJheS5wdXNoKHRlc3RMaXN0KTtcbiAgICBsZXQgdGVzdCA9IHRvZG9JdGVtKFwiVGhpcyBpcyBhIHRlc3QgaXRlbVwiLCBcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIixcIkRlYyAxMlwiLFwiaGlnaFwiLGZhbHNlKTtcbiAgICB0ZXN0TGlzdC5hZGRJdGVtKHRlc3QpO1xuICAgIGxldCB0ZXN0MiA9IHRvZG9JdGVtKFwiVGhpcyBpcyBhbHNvIGEgdGVzdCBpdGVtXCIsIFwibm90IGltcGxlbWVudGVkIHlldFwiLFwiRGVjIDEyXCIsXCJtZWRpdW1cIix0cnVlKTtcbiAgICB0ZXN0TGlzdC5hZGRJdGVtKHRlc3QyKTtcbiAgICAvLyBsaXN0QXJyYXlbMF0ubG9hZExpc3QoKTtcbiAgICBsYXN0TG9hZGVkID0gMDtcbiBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgICAgaWYobGFzdExvYWRlZCAhPSBOdW1iZXIoJzAnKSl7XG4gICAgICAgICAgICBsaXN0QXJyYXlbTnVtYmVyKCcwJyldLmNsZWFyRGlzcGxheSgpO1xuICAgICAgICAgICAgbGlzdEFycmF5W051bWJlcignMCcpXS5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgbGFzdExvYWRlZCA9IE51bWJlcignMCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgbGlzdCBsb2FkZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvL05ldyBpdGVtIGZ1bmN0aW9uYWxpdHkuIENyZWF0ZXMgYSB0b2RvSXRlbSBhbmQgYWRkcyBpdCB0byB0aGUgY3VycmVudCBwcm9qZWN0LiBVc2VzIG1vZGFsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0xpc3RJdGVtQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKS5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgfSk7XG5cbiAgICAvL0Zvcm0gc3VibWlzc2lvbiBkZWZhdWx0IGFjdGlvbiBvdmVycmlkZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW1Gb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICBmb3JtU3VibWl0dGVkKCk7XG4gICAgfSk7XG5cbiAgICAvL05ldyBMaXN0IGZ1bmN0aW9uYWxpdHkuIENyZWF0ZXMgYSBkaXYgd2l0aCBhIG5hbWUsIGFkZHMgaXQgdG8gbGlzdEFycmF5LCBtYWtlcyBhIG5ldyB0b2RvTGlzdFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdMaXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3TGlzdC5pZCA9IGxpc3RBcnJheS5sZW5ndGg7XG4gICAgICAgIG5ld0xpc3QudGV4dENvbnRlbnQgPSB3aW5kb3cucHJvbXB0KCdQbGVhc2UgZ2l2ZSB0aGlzIG5ldyBsaXN0IGEgbmFtZTonKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJykuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG4gICAgICAgIGxldCBsaXN0VG9BZGQgPSB0b2RvTGlzdCgpO1xuICAgICAgICBsaXN0QXJyYXkucHVzaChsaXN0VG9BZGQpO1xuICAgICAgICBsaXN0QXJyYXlbbGlzdEFycmF5Lmxlbmd0aCAtIDFdLmxvYWRMaXN0KCk7XG4gICAgICAgIG5ld0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKGxhc3RMb2FkZWQgIT0gbmV3TGlzdC5pZCl7XG4gICAgICAgICAgICAgICAgbGlzdEFycmF5W2xpc3RBcnJheS5sZW5ndGggLSAxXS5jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICBsaXN0QXJyYXlbbGlzdEFycmF5Lmxlbmd0aCAtIDFdLmxvYWRMaXN0KCk7XG4gICAgICAgICAgICAgICAgbGFzdExvYWRlZCA9IG5ld0xpc3QuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvL0J1ZyBoZXJlOiAuYXJyYXkoKSBpcyBhIGZ1bmN0aW9uIHRoYXQganVzdCBjb25zb2xlbG9ncyB0aGUgdG9kb0xpc3QgdG8gc2VlIGl0cyBpdGVtcy5cbiAgICAvL1RoZSBwcm9ibGVtIGlzIHRoYXQgc29tZWh3ZXJlIGJldHdlZW4gdGhlIGZvcmVhY2ggbG9vcCBhbmQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uZSBvZiBcbiAgICAvL3RoZSBvYmplY3RzIGlzIGxvc3QgaW4gbWVtb3J5LiBUaGlzIGNhbiBiZSB0ZXN0ZWQgYnkgY2xpY2tpbmcgdGhlIGRlbGV0ZSBidXR0b24uXG4gICAgLy9VUERBVEU6IHRoZSBpc3N1ZSBpcyB0aGF0IGkgYW0gcGFzc2luZyBpbiB0aGUgZGl2IG9iamVjdCB0byB0aGUgYXJyYXksIHdoZW4gdGhlIGFycmF5XG4gICAgLy9oYXMgdG9kb0l0ZW0gb2JqZWN0cy4gSSBuZWVkIHRvIGdldCB0aGUgdG9kb0l0ZW0gb2JqZWN0IHJlbGF0ZWQgdG8gdGhlIG92ZXJhbGwgZGl2IVxuICAgIC8vVVBEQVRFMjogY2xlYXJkaXNwbGF5IGFuZCBsb2FkbGlzdCBhcmUgY2FsbGVkIHdoZW4gYW4gZWxlbWVudCBpcyBkZWxldGVkIGJ1dCB0aGlzXG4gICAgLy9pcyBvbmx5IGNhbGxlZCBvbmNlLCB1cG9uIHBhZ2UgbG9hZC4gaXQgbmVlZHMgdG8gdG8gYmUgbW92ZWRcbiAgICAvL1VQREFURTM6IEZVTkNUSU9OIG1vdmVkIGluc2lkZSB0b2RvTGlzdCwgY2FuIGRlbGV0ZSBtdWx0aXBsZSBlbGVtZW50cyBidXQgbm90IG5ldyBvbmVzLlxuICAgIC8vbm90IHVudGlsIHRoZSBsaXN0IGlzIGxvYWRlZCBlbnRpcmVseSwgdGhlbiBpdCBjYW4gYmUuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRTZXR1cDsiLCJpbXBvcnQgZXZlbnRTZXR1cCBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvL0J1dHRvbiB0byBtYWtlIGEgbmV3IGxpc3QgaXRlbSwgaW4gdGhlIHRvcCByaWdodCBjb3JuZXJcbiAgICBsZXQgbmV3SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0l0ZW1CdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgbmV3SXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIC8vIG5ld0l0ZW1CdXR0b24uc3R5bGUuekluZGV4ID0gXCIyXCI7XG4gICAgbmV3SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdMaXN0SXRlbUJ1dHRvbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3SXRlbUJ1dHRvbik7XG5cbiAgICAvL0Zvcm0gdG8gdGFrZSBpbiBuZXcgaXRlbXMsIGF0dGFjaGVkIHRvIGNvbnRlbnQgZGl2IGJ1dCBzaXRzIHVuZGVyIGl0IHVzdWFsbHkuXG4gICAgbGV0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3Rm9ybS5pZCA9IFwiZm9ybVwiO1xuICAgIG5ld0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3SXRlbUZvcm0nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld0Zvcm0pO1xuXG4gICAgLy9Qb3B1bGF0aW5nIGZvcm1cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBuZXcgZXZlbnQ6XCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1IZWFkZXInKTtcbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7ICAgIFxuXG4gICAgbGV0IGZvcm1Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUJvZHkuY2xhc3NMaXN0LmFkZCgnZm9ybUJvZHknKTtcblxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV2ZW50IHRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSBcIjQwXCI7XG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJFdmVudCBkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IFwiM1wiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc3R5bGUucmVzaXplID0gXCJub25lXCI7XG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgXG4gICAgbGV0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVEaXYnKTtcbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBkYXRlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBsZXQgZGF0ZSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGUuaWQgPSBcImRhdGVcIjtcbiAgICBkYXRlLnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG5cbiAgICBsZXQgcHJpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9EaXYuY2xhc3NMaXN0LmFkZCgncHJpb0RpdicpO1xuICAgIHByaW9EaXYudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBsZXQgcHJpb0xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBwcmlvTG93SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByaW9Mb3dJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHByaW9Mb3dJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgcHJpb0xvd0lucHV0LmlkID0gXCJsb3dcIjtcbiAgICBwcmlvTG93SW5wdXQudmFsdWUgPSBcImxvd1wiO1xuICAgIHByaW9Mb3dJbnB1dC5uYW1lID0gXCJwcmlvXCI7XG4gICAgbGV0IHByaW9Mb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb0xvd0xhYmVsLmh0bWxGb3IgPSBcImxvd1wiO1xuICAgIHByaW9Mb3dMYWJlbC50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIHByaW9Mb3cuYXBwZW5kQ2hpbGQocHJpb0xvd0lucHV0KTtcbiAgICBwcmlvTG93LmFwcGVuZENoaWxkKHByaW9Mb3dMYWJlbCk7XG4gICAgcHJpb0Rpdi5hcHBlbmRDaGlsZChwcmlvTG93KTtcbiAgICBcbiAgICBsZXQgcHJpb01lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBwcmlvTWVkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByaW9NZWRJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHByaW9NZWRJbnB1dC5pZCA9IFwibWVkXCI7XG4gICAgcHJpb01lZElucHV0LnZhbHVlID0gXCJtZWRcIjtcbiAgICBwcmlvTWVkSW5wdXQubmFtZSA9IFwicHJpb1wiO1xuICAgIGxldCBwcmlvTWVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9NZWRMYWJlbC5odG1sRm9yID0gXCJtZWRcIjtcbiAgICBwcmlvTWVkTGFiZWwudGV4dENvbnRlbnQgPSAnTWVkJztcbiAgICBwcmlvTWVkLmFwcGVuZENoaWxkKHByaW9NZWRJbnB1dCk7XG4gICAgcHJpb01lZC5hcHBlbmRDaGlsZChwcmlvTWVkTGFiZWwpO1xuICAgIHByaW9EaXYuYXBwZW5kQ2hpbGQocHJpb01lZCk7XG5cbiAgICBsZXQgcHJpb0hpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJpb0hpZ2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb0hpZ2hJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHByaW9IaWdoSW5wdXQuaWQgPSBcImhpZ2hcIjtcbiAgICBwcmlvSGlnaElucHV0LnZhbHVlID0gXCJoaWdoXCI7XG4gICAgcHJpb0hpZ2hJbnB1dC5uYW1lID0gXCJwcmlvXCI7XG4gICAgbGV0IHByaW9IaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9Mb3dMYWJlbC5odG1sRm9yID0gXCJoaWdoXCI7XG4gICAgcHJpb0hpZ2hMYWJlbC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBwcmlvSGlnaC5hcHBlbmRDaGlsZChwcmlvSGlnaElucHV0KTtcbiAgICBwcmlvSGlnaC5hcHBlbmRDaGlsZChwcmlvSGlnaExhYmVsKTtcbiAgICBwcmlvRGl2LmFwcGVuZENoaWxkKHByaW9IaWdoKTtcblxuICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKHByaW9EaXYpO1xuXG5cbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgRXZlbnRcIjtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnc3VibWl0QnV0dG9uJyk7XG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUJvZHkpO1xuXG5cbiAgICAvL1BvcHVsYXRpbmcgdGFza2JhclxuXG4gICAgbGV0IHRhc2tiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrYmFyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXInKTtcblxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXJJdGVtJylcblxuICAgIGxldCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vlay50ZXh0Q29udGVudCA9IFwiV2Vla1wiO1xuICAgIHdlZWsuY2xhc3NMaXN0LmFkZCgndGFza2Jhckl0ZW0nKVxuXG4gICAgbGV0IG1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9udGgudGV4dENvbnRlbnQgPSBcIk1vbnRoXCI7XG4gICAgbW9udGguY2xhc3NMaXN0LmFkZCgndGFza2Jhckl0ZW0nKVxuICAgIG1vbnRoLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNTBweFwiO1xuXG5cbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5pZCA9IFwicHJvamVjdHNcIjtcbiAgICBsZXQgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdsaXN0SGVhZGVyJyk7XG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xuXG4gICAgbGV0IHByb2plY3RzTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUud2lkdGggPSBcImZpdC1jb250ZW50XCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgIHByb2plY3RzTmV3LnN0eWxlLnBhZGRpbmcgPSBcIjAgMnB4XCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUubWFyZ2luTGVmdCA9IFwiNHB4XCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUuZm9udFNpemUgPSBcIjAuOHJlbVwiO1xuICAgIHByb2plY3RzTmV3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICBwcm9qZWN0c05ldy50eXBlID0gXCJidXR0b25cIjtcbiAgICBwcm9qZWN0c05ldy50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIHByb2plY3RzTmV3LmlkID0gXCJuZXdMaXN0XCI7XG4gICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNOZXcpO1xuXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgndGFza2Jhckl0ZW0nKVxuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JylcblxuXG4gICAgdGFza2Jhci5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgdGFza2Jhci5hcHBlbmRDaGlsZCh3ZWVrKTtcbiAgICB0YXNrYmFyLmFwcGVuZENoaWxkKG1vbnRoKTtcbiAgICB0YXNrYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgIC8vUG9wdWxhdGluZyBjb250YWluZXIgZm9yIHRhc2sgaXRlbXMgYW5kIGxpc3Qgdmlld2luZ1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgXG4gICAgLy9Db2xvciBzY2hlbWVcbiAgICB0YXNrYmFyLmNsYXNzTGlzdC5hZGQoJ2FjY2VudCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmltYXJ5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tiYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIC8vRGVmYXVsdCBsaXN0IGxvYWRcblxuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlZmF1bHRQcm9qZWN0LmlkID0gXCIwXCI7XG4gICAgZGVmYXVsdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcblxuICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdCk7XG5cbiAgICBldmVudFNldHVwKCk7XG59XG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCBzdmcgZnJvbSAnLi9jaGVjay5zdmcnO1xuaW1wb3J0IGV2ZW50U2V0dXAgZnJvbSAnLi9ldmVudHMnO1xuXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0aW9uU3RhdHVzKSA9PiB7XG4gICAgbGV0IGluaXRpYWxMb2FkID0gdHJ1ZTtcbiAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGlmKHByaW9yaXR5ID09PSBcImhpZ2hcIil7XG4gICAgICAgICAgICByZXR1cm4gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwcmlvcml0eSA9PT0gXCJtZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiMnB4IHNvbGlkIG9yYW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMnB4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgIH1cbiAgIH1cbiAgIFxuICAgIGNvbnN0IHN3aXRjaFN0YXRlID0gKGNoZWNrQm94KSA9PiB7XG4gICAgICAgIGlmKGNvbXBsZXRpb25TdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gc3ZnO1xuICAgICAgICAgICAgY2hlY2tCb3guYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMyNjU4MEZcIlxuICAgICAgICAgICAgY29tcGxldGlvblN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICBjaGVja0JveC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Nyb3Nzb3V0Jyk7XG4gICAgICAgICAgICBjaGVja0JveC5wYXJlbnROb2RlLnN0eWxlLmJvcmRlckxlZnQgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgaWYoY2hlY2tCb3guZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3NvdXQnKTtcbiAgICAgICAgICAgIGNvbXBsZXRpb25TdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyTGVmdCA9IHByaW9yaXR5Q29sb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdsaXN0SXRlbScpO1xuICAgICAgICBib3guc3R5bGUuYm9yZGVyTGVmdCA9IHByaW9yaXR5Q29sb3IoKTtcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrQm94LnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XG4gICAgICAgIGNoZWNrQm94LnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuXG5cbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgaWYoY29tcGxldGlvblN0YXR1cykge1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHN2ZztcbiAgICAgICAgICAgIGNoZWNrQm94LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjMjY1ODBGXCJcbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY3Jvc3NvdXQnKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyTGVmdCA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgaWYoY2hlY2tCb3guZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3NvdXQnKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyTGVmdCA9IHByaW9yaXR5Q29sb3IoKTtcbiAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzd2l0Y2hTdGF0ZShjaGVja0JveCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja0JveC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdGl0bGU7XG5cblxuICAgICAgICB0ZXh0LnN0eWxlLm1heFdpZHRoID0gXCI1MDBweFwiO1xuICAgICAgICAvLyB0ZXh0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMzUwcHhcIjtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICB0ZXh0LnBhcmVudE5vZGUuc3R5bGUub3ZlcmZsb3dYID0gXCJzY3JvbGxcIjtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlRGlzcGxheURpdicpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgZGF0ZS5zdHlsZS5jb2xvciA9IFwiI0EyODhBNlwiO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIC8vZGVsZXRlIGZ1bmN0aW9uYWxpdHkgYnV0dG9uXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGVzdCcpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQ9XCJYXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5vcGFjaXR5PVwiMTAwJVwiO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gY3JlYXRlZFwiKTtcblxuICAgIHJldHVybiB7ZGlzcGxheX07XG59XG5cbmNvbnN0IHRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGxldCBpdGVtQXJyYXkgPSBbXTtcbiAgICBjb25zdCBhcnJheSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbUFycmF5KTtcbiAgICB9XG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICBjbGVhckRpc3BsYXkoKTtcbiAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbUFycmF5LmluZGV4T2YoaXRlbSkpO1xuICAgICAgICAvL05lZWQgdG8gaW1wbGVtZW50IHNvbWUgc29ydCBvZiBzb3J0aW5nIG9mIGxpc3QgaXRlbXNcbiAgICAgICAgLy8gcmVzdHJ1Y3R1cmUoaXRlbUFycmF5KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIHJlbW92ZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luZGV4IGlzOicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtQXJyYXkuaW5kZXhPZihpdGVtQXJyYXlbaW5kZXhdKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvYmplY3QgaXM6Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgaXRlbUFycmF5LnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgLy8gaXRlbUFycmF5ID0gaXRlbUFycmF5LnNwbGljZShpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSwxKTtcbiAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgIGxvYWRMaXN0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaXRlbUFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCByZXR1cm5lZEJveCA9IGl0ZW1BcnJheVtpXS5kaXNwbGF5KCk7XG4gICAgICAgICAgICByZXR1cm5lZEJveC5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKGkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZShjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnTGlzdCBjcmVhdGVkJyk7XG5cbiAgICByZXR1cm4ge2FkZEl0ZW0scmVtb3ZlSXRlbSxsb2FkTGlzdCxjbGVhckRpc3BsYXksYXJyYXl9O1xufVxuXG5leHBvcnQge3RvZG9JdGVtLCB0b2RvTGlzdH07XG4vLyBleHBvcnQgZnVuY3Rpb24gdG9kb0xpc3QoKTtcbi8vIGV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcblxuaG9tZSgpOyBcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9