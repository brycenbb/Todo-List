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
___CSS_LOADER_EXPORT___.push([module.id, "#colors {\n    color: \n    #1C1D21\n    #A288A6\n    #BB9BB0\n    #CCBCBC\n    #F1E3E4\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* z-index: 1; */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr;\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n}\n\n.accent {\n    background-color: #CCBCBC;\n}\n\n.primary {\n    background-color: #F1E3E4;\n}\n\n.taskbar {\n    padding: 50px 10px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.taskbarItem {\n    font-weight: bold;\n    font-size: 2rem;\n    padding: 10px;\n}\n\n.projectList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectList > :first-child {\n    align-items: center;\n}\n.projectList > :nth-child(n+2) {\n    font-weight: normal;\n    font-size: 1.5rem;\n    padding: 5px 0 5px 20px;\n    margin-left: 10px;\n}\n\n.projectList > :nth-child(n+2):hover {\n    background: #CCBC;\n    cursor: pointer;\n}\n\n.container {\n    padding: 40px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.listItem {\n    width: 75%;\n    padding: 10px;\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    /* position: relative; */\n}\n\nimg {\n    filter: invert(25%) sepia(9%) saturate(7427%) hue-rotate(66deg) brightness(92%) contrast(88%);\n}\n\n.crossout  {\n    opacity: 0.5;\n}\n\n.listHeader {\n    display: flex;\n    flex-direction: row;\n}\n\n.newListItemButton {\n    position: absolute;\n    top:0;\n    right:0;\n    margin: 10px;\n    font-size: 1.5rem;\n    padding: 0px 5px;\n}\n\n.newListItemButton:hover {\n    cursor: pointer;\n}\n\n\n.newItemForm {\n    width: 50vw;\n    height: 60vh;\n    border: 1px solid black;  \n    margin-left: 150px;\n    visibility: hidden;\n    position: absolute;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n}\n\n.newItemForm.clicked {\n    visibility: visible;\n}\n\n.formHeader {\n    width:100%;\n    height:12%;\n    background-color:#CCBCBC;\n    display:flex;\n    align-items:center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    padding-left: 10px;\n    /* padding-top: 30px; */\n}\n\n.formBody {\n    background-color: #BB9BB0;  \n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.formBody > * {\n    border: none;\n    outline: none;\n}\n\n\n.dueDateDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.prioDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.prioDiv > div {\n    font-size: 1.2rem;\n    font-weight: normal;\n}\n\n.prioDiv > div > input {\n    padding: 10px;\n}\n\n.submitButton {\n    width: 30%;\n    padding: 10px 10px 10px 10px;\n    font-size: 2rem;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 30px;\n}\n\n.dateDisplayDiv {\n    flex: 1;\n    text-align: end;\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n}\n\n#test{\n    width: 20px;\n    height: 20px;\n    border: 2px solid black;\n    background-color: #BB9BB0;\n    font-weight: bold;\n    opacity: 1;\n    z-index: 2;\n}\n\n#test:hover {\n    cursor: pointer;\n    filter:brightness(120%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;;;;;;AAMJ;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;AAC5B;;AAEA;IACI,6FAA6F;AACjG;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,OAAO;IACP,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,gCAAgC;IAChC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,UAAU;IACV,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,iBAAiB;IACjB,UAAU;IACV,UAAU;AACd;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B","sourcesContent":["#colors {\n    color: \n    #1C1D21\n    #A288A6\n    #BB9BB0\n    #CCBCBC\n    #F1E3E4\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* z-index: 1; */\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr;\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n}\n\n.accent {\n    background-color: #CCBCBC;\n}\n\n.primary {\n    background-color: #F1E3E4;\n}\n\n.taskbar {\n    padding: 50px 10px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.taskbarItem {\n    font-weight: bold;\n    font-size: 2rem;\n    padding: 10px;\n}\n\n.projectList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectList > :first-child {\n    align-items: center;\n}\n.projectList > :nth-child(n+2) {\n    font-weight: normal;\n    font-size: 1.5rem;\n    padding: 5px 0 5px 20px;\n    margin-left: 10px;\n}\n\n.projectList > :nth-child(n+2):hover {\n    background: #CCBC;\n    cursor: pointer;\n}\n\n.container {\n    padding: 40px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.listItem {\n    width: 75%;\n    padding: 10px;\n    border: 2px solid black;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    /* position: relative; */\n}\n\nimg {\n    filter: invert(25%) sepia(9%) saturate(7427%) hue-rotate(66deg) brightness(92%) contrast(88%);\n}\n\n.crossout  {\n    opacity: 0.5;\n}\n\n.listHeader {\n    display: flex;\n    flex-direction: row;\n}\n\n.newListItemButton {\n    position: absolute;\n    top:0;\n    right:0;\n    margin: 10px;\n    font-size: 1.5rem;\n    padding: 0px 5px;\n}\n\n.newListItemButton:hover {\n    cursor: pointer;\n}\n\n\n.newItemForm {\n    width: 50vw;\n    height: 60vh;\n    border: 1px solid black;  \n    margin-left: 150px;\n    visibility: hidden;\n    position: absolute;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n}\n\n.newItemForm.clicked {\n    visibility: visible;\n}\n\n.formHeader {\n    width:100%;\n    height:12%;\n    background-color:#CCBCBC;\n    display:flex;\n    align-items:center;\n    font-weight: bold;\n    font-size: 1.5rem;\n    padding-left: 10px;\n    /* padding-top: 30px; */\n}\n\n.formBody {\n    background-color: #BB9BB0;  \n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.formBody > * {\n    border: none;\n    outline: none;\n}\n\n\n.dueDateDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.prioDiv {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.prioDiv > div {\n    font-size: 1.2rem;\n    font-weight: normal;\n}\n\n.prioDiv > div > input {\n    padding: 10px;\n}\n\n.submitButton {\n    width: 30%;\n    padding: 10px 10px 10px 10px;\n    font-size: 2rem;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 30px;\n}\n\n.dateDisplayDiv {\n    flex: 1;\n    text-align: end;\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n}\n\n#test{\n    width: 20px;\n    height: 20px;\n    border: 2px solid black;\n    background-color: #BB9BB0;\n    font-weight: bold;\n    opacity: 1;\n    z-index: 2;\n}\n\n#test:hover {\n    cursor: pointer;\n    filter:brightness(120%);\n}"],"sourceRoot":""}]);
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
        console.log("form submitted successfully");
        let inputs = document.getElementById("form").elements;
        console.log(inputs);
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
        console.log(lastLoaded);
        console.log(listArray);
        console.log(listArray[lastLoaded])
        listArray[lastLoaded].addItem(item);
        item.display();
    };

    let lastLoaded = null;
    const listArray = [];
    let testList = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList)();
    listArray.push(testList);
    let test = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)("This is a test item", "not implemented yet","Dec 12","high",false);
    let test2 = (0,_todoList__WEBPACK_IMPORTED_MODULE_0__.todoItem)("This is also a test item", "not implemented yet","Dec 12","medium",true);
    testList.addItem(test);
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

    //deleting list item functionality
    document.getElementById('test').addEventListener('click', function() {
        document.getElementById('test').parentNode;
    })
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
        if(completionStatus === false) {
            console.log("not completed");
            let img = document.createElement('img');
            img.src = _check_svg__WEBPACK_IMPORTED_MODULE_0__;
            checkBox.appendChild(img);
            checkBox.style.border = "2px solid #26580F"
            completionStatus = true;
            console.log("completion status:" + completionStatus);
            checkBox.parentNode.classList.add('crossout');
            checkBox.parentNode.style.borderLeft = "2px solid black";
        }
        else{
            console.log("completed");
            checkBox.style.border = "2px solid red"
            if(checkBox.firstChild){
                checkBox.firstChild.remove();
            }
            checkBox.parentNode.classList.remove('crossout');
            completionStatus = false;
            console.log("completion status:" + completionStatus);
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

        //This is a note about aligning the various components inside each listItem
        //As different text lengths change the alignment, maxWidth is not helping
        //By itself.
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
        deleteButton.id ='test';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMVztBQUNJOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUNBQUc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFNEI7QUFDNUI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQy9JQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZjhCOztBQUU5QixxREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29sb3JzIHtcXG4gICAgY29sb3I6IFxcbiAgICAjMUMxRDIxXFxuICAgICNBMjg4QTZcXG4gICAgI0JCOUJCMFxcbiAgICAjQ0NCQ0JDXFxuICAgICNGMUUzRTRcXG59XFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogei1pbmRleDogMTsgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFjY2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0JDQkM7XFxufVxcblxcbi5wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRTNFNDtcXG59XFxuXFxuLnRhc2tiYXIge1xcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi50YXNrYmFySXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3RMaXN0ID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RMaXN0ID4gOm50aC1jaGlsZChuKzIpIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3RMaXN0ID4gOm50aC1jaGlsZChuKzIpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI0NDQkM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubGlzdEl0ZW0ge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjUlKSBzZXBpYSg5JSkgc2F0dXJhdGUoNzQyNyUpIGh1ZS1yb3RhdGUoNjZkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4uY3Jvc3NvdXQgIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubGlzdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5uZXdMaXN0SXRlbUJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi5uZXdMaXN0SXRlbUJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLm5ld0l0ZW1Gb3JtIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICBcXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjUwJTtcXG4gICAgbGVmdDo1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmV3SXRlbUZvcm0uY2xpY2tlZCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb3JtSGVhZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQ0NCQ0JDO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIC8qIHBhZGRpbmctdG9wOiAzMHB4OyAqL1xcbn1cXG5cXG4uZm9ybUJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkI5QkIwOyAgXFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm1Cb2R5ID4gKiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLmR1ZURhdGVEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByaW9EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaW9EaXYgPiBkaXYge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnByaW9EaXYgPiBkaXYgPiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zdWJtaXRCdXR0b24ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLmRhdGVEaXNwbGF5RGl2IHtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jdGVzdHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQjlCQjA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jdGVzdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoMTIwJSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTs7Ozs7O0FBTUo7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDZGQUE2RjtBQUNqRzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29sb3JzIHtcXG4gICAgY29sb3I6IFxcbiAgICAjMUMxRDIxXFxuICAgICNBMjg4QTZcXG4gICAgI0JCOUJCMFxcbiAgICAjQ0NCQ0JDXFxuICAgICNGMUUzRTRcXG59XFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogei1pbmRleDogMTsgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFjY2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0JDQkM7XFxufVxcblxcbi5wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRTNFNDtcXG59XFxuXFxuLnRhc2tiYXIge1xcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi50YXNrYmFySXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3RMaXN0ID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RMaXN0ID4gOm50aC1jaGlsZChuKzIpIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3RMaXN0ID4gOm50aC1jaGlsZChuKzIpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI0NDQkM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubGlzdEl0ZW0ge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjUlKSBzZXBpYSg5JSkgc2F0dXJhdGUoNzQyNyUpIGh1ZS1yb3RhdGUoNjZkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4uY3Jvc3NvdXQgIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubGlzdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5uZXdMaXN0SXRlbUJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi5uZXdMaXN0SXRlbUJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLm5ld0l0ZW1Gb3JtIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICBcXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjUwJTtcXG4gICAgbGVmdDo1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmV3SXRlbUZvcm0uY2xpY2tlZCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb3JtSGVhZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQ0NCQ0JDO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIC8qIHBhZGRpbmctdG9wOiAzMHB4OyAqL1xcbn1cXG5cXG4uZm9ybUJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkI5QkIwOyAgXFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm1Cb2R5ID4gKiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLmR1ZURhdGVEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByaW9EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaW9EaXYgPiBkaXYge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnByaW9EaXYgPiBkaXYgPiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zdWJtaXRCdXR0b24ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLmRhdGVEaXNwbGF5RGl2IHtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jdGVzdHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQjlCQjA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jdGVzdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoMTIwJSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHt0b2RvTGlzdCx0b2RvSXRlbX0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcblxubGV0IGV2ZW50U2V0dXAgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gZm9ybVN1Ym1pdHRlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuZWxlbWVudHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgICAgIGxldCBtb250aCA9IE51bWJlcihpbnB1dHNbMl0udmFsdWUuc2xpY2UoNSw3KSAtIDEpO1xuICAgICAgICBsZXQgZGF5ID0gaW5wdXRzWzJdLnZhbHVlLnNsaWNlKDgpO1xuICAgICAgICBsZXQgbW9udGhzID0gW1xuICAgICAgICAgICAgJ0phbnVhcnknLFxuICAgICAgICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgICAgICdNYXJjaCcsXG4gICAgICAgICAgICAnQXByaWwnLFxuICAgICAgICAgICAgJ01heScsXG4gICAgICAgICAgICAnSnVuZScsXG4gICAgICAgICAgICAnSnVseScsXG4gICAgICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgICAgICdTZXB0ZW1iZXInLFxuICAgICAgICAgICAgJ09jdG9iZXInLFxuICAgICAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgICAgICdEZWNlbWJlcidcbiAgICAgICAgICAgIF07XG4gICAgICAgIGxldCBjb252ZXJ0ZWREYXRlID0gbW9udGhzW21vbnRoXS5zbGljZSgwLDMpICsgXCIgXCIgKyBkYXk7XG4gICAgICAgIGxldCBpdGVtID0gdG9kb0l0ZW0oaW5wdXRzWzBdLnZhbHVlLGlucHV0c1sxXS52YWx1ZSxjb252ZXJ0ZWREYXRlLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvXCJdOmNoZWNrZWQnKS52YWx1ZSwgZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhsYXN0TG9hZGVkKTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdEFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdEFycmF5W2xhc3RMb2FkZWRdKVxuICAgICAgICBsaXN0QXJyYXlbbGFzdExvYWRlZF0uYWRkSXRlbShpdGVtKTtcbiAgICAgICAgaXRlbS5kaXNwbGF5KCk7XG4gICAgfTtcblxuICAgIGxldCBsYXN0TG9hZGVkID0gbnVsbDtcbiAgICBjb25zdCBsaXN0QXJyYXkgPSBbXTtcbiAgICBsZXQgdGVzdExpc3QgPSB0b2RvTGlzdCgpO1xuICAgIGxpc3RBcnJheS5wdXNoKHRlc3RMaXN0KTtcbiAgICBsZXQgdGVzdCA9IHRvZG9JdGVtKFwiVGhpcyBpcyBhIHRlc3QgaXRlbVwiLCBcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIixcIkRlYyAxMlwiLFwiaGlnaFwiLGZhbHNlKTtcbiAgICBsZXQgdGVzdDIgPSB0b2RvSXRlbShcIlRoaXMgaXMgYWxzbyBhIHRlc3QgaXRlbVwiLCBcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIixcIkRlYyAxMlwiLFwibWVkaXVtXCIsdHJ1ZSk7XG4gICAgdGVzdExpc3QuYWRkSXRlbSh0ZXN0KTtcbiAgICB0ZXN0TGlzdC5hZGRJdGVtKHRlc3QyKTtcbiAgICBsaXN0QXJyYXlbMF0ubG9hZExpc3QoKTtcbiAgICBsYXN0TG9hZGVkID0gMDtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgICBpZihsYXN0TG9hZGVkICE9IE51bWJlcignMCcpKXtcbiAgICAgICAgICAgIGxpc3RBcnJheVtOdW1iZXIoJzAnKV0uY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgICAgICBsaXN0QXJyYXlbTnVtYmVyKCcwJyldLmxvYWRMaXN0KCk7XG4gICAgICAgICAgICBsYXN0TG9hZGVkID0gTnVtYmVyKCcwJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBsaXN0IGxvYWRlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vTmV3IGl0ZW0gZnVuY3Rpb25hbGl0eS4gQ3JlYXRlcyBhIHRvZG9JdGVtIGFuZCBhZGRzIGl0IHRvIHRoZSBjdXJyZW50IHByb2plY3QuIFVzZXMgbW9kYWxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3TGlzdEl0ZW1CdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICB9KTtcblxuICAgIC8vRm9ybSBzdWJtaXNzaW9uIGRlZmF1bHQgYWN0aW9uIG92ZXJyaWRlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3SXRlbUZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgIGZvcm1TdWJtaXR0ZWQoKTtcbiAgICB9KTtcblxuICAgIC8vTmV3IExpc3QgZnVuY3Rpb25hbGl0eS4gQ3JlYXRlcyBhIGRpdiB3aXRoIGEgbmFtZSwgYWRkcyBpdCB0byBsaXN0QXJyYXksIG1ha2VzIGEgbmV3IHRvZG9MaXN0XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0xpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdMaXN0LmlkID0gbGlzdEFycmF5Lmxlbmd0aDtcbiAgICAgICAgbmV3TGlzdC50ZXh0Q29udGVudCA9IHdpbmRvdy5wcm9tcHQoJ1BsZWFzZSBnaXZlIHRoaXMgbmV3IGxpc3QgYSBuYW1lOicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKS5hcHBlbmRDaGlsZChuZXdMaXN0KTtcbiAgICAgICAgbGV0IGxpc3RUb0FkZCA9IHRvZG9MaXN0KCk7XG4gICAgICAgIGxpc3RBcnJheS5wdXNoKGxpc3RUb0FkZCk7XG4gICAgICAgIGxpc3RBcnJheVtsaXN0QXJyYXkubGVuZ3RoIC0gMV0ubG9hZExpc3QoKTtcbiAgICAgICAgbmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYobGFzdExvYWRlZCAhPSBuZXdMaXN0LmlkKXtcbiAgICAgICAgICAgICAgICBsaXN0QXJyYXlbbGlzdEFycmF5Lmxlbmd0aCAtIDFdLmNsZWFyRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIGxpc3RBcnJheVtsaXN0QXJyYXkubGVuZ3RoIC0gMV0ubG9hZExpc3QoKTtcbiAgICAgICAgICAgICAgICBsYXN0TG9hZGVkID0gbmV3TGlzdC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIC8vZGVsZXRpbmcgbGlzdCBpdGVtIGZ1bmN0aW9uYWxpdHlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0JykucGFyZW50Tm9kZTtcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudFNldHVwOyIsImltcG9ydCBldmVudFNldHVwIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgaG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vQnV0dG9uIHRvIG1ha2UgYSBuZXcgbGlzdCBpdGVtLCBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lclxuICAgIGxldCBuZXdJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3SXRlbUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBuZXdJdGVtQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgLy8gbmV3SXRlbUJ1dHRvbi5zdHlsZS56SW5kZXggPSBcIjJcIjtcbiAgICBuZXdJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ld0xpc3RJdGVtQnV0dG9uJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdJdGVtQnV0dG9uKTtcblxuICAgIC8vRm9ybSB0byB0YWtlIGluIG5ldyBpdGVtcywgYXR0YWNoZWQgdG8gY29udGVudCBkaXYgYnV0IHNpdHMgdW5kZXIgaXQgdXN1YWxseS5cbiAgICBsZXQgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdGb3JtLmlkID0gXCJmb3JtXCI7XG4gICAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXdJdGVtRm9ybScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG5cbiAgICAvL1BvcHVsYXRpbmcgZm9ybVxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIG5ldyBldmVudDpcIjtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUhlYWRlcicpO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTsgICAgXG5cbiAgICBsZXQgZm9ybUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQm9keS5jbGFzc0xpc3QuYWRkKCdmb3JtQm9keScpO1xuXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRXZlbnQgdGl0bGVcIjtcbiAgICB0aXRsZUlucHV0Lm1heExlbmd0aCA9IFwiNDBcIjtcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV2ZW50IGRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gXCIzXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICBcbiAgICBsZXQgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZURpdicpO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIGRhdGVEaXYuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIGxldCBkYXRlID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZS5pZCA9IFwiZGF0ZVwiO1xuICAgIGRhdGUudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cblxuICAgIGxldCBwcmlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb0Rpdi5jbGFzc0xpc3QuYWRkKCdwcmlvRGl2Jyk7XG4gICAgcHJpb0Rpdi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIGxldCBwcmlvTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByaW9Mb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb0xvd0lucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgcHJpb0xvd0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBwcmlvTG93SW5wdXQuaWQgPSBcImxvd1wiO1xuICAgIHByaW9Mb3dJbnB1dC52YWx1ZSA9IFwibG93XCI7XG4gICAgcHJpb0xvd0lucHV0Lm5hbWUgPSBcInByaW9cIjtcbiAgICBsZXQgcHJpb0xvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvTG93TGFiZWwuaHRtbEZvciA9IFwibG93XCI7XG4gICAgcHJpb0xvd0xhYmVsLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgcHJpb0xvdy5hcHBlbmRDaGlsZChwcmlvTG93SW5wdXQpO1xuICAgIHByaW9Mb3cuYXBwZW5kQ2hpbGQocHJpb0xvd0xhYmVsKTtcbiAgICBwcmlvRGl2LmFwcGVuZENoaWxkKHByaW9Mb3cpO1xuICAgIFxuICAgIGxldCBwcmlvTWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByaW9NZWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb01lZElucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgcHJpb01lZElucHV0LmlkID0gXCJtZWRcIjtcbiAgICBwcmlvTWVkSW5wdXQudmFsdWUgPSBcIm1lZFwiO1xuICAgIHByaW9NZWRJbnB1dC5uYW1lID0gXCJwcmlvXCI7XG4gICAgbGV0IHByaW9NZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb01lZExhYmVsLmh0bWxGb3IgPSBcIm1lZFwiO1xuICAgIHByaW9NZWRMYWJlbC50ZXh0Q29udGVudCA9ICdNZWQnO1xuICAgIHByaW9NZWQuYXBwZW5kQ2hpbGQocHJpb01lZElucHV0KTtcbiAgICBwcmlvTWVkLmFwcGVuZENoaWxkKHByaW9NZWRMYWJlbCk7XG4gICAgcHJpb0Rpdi5hcHBlbmRDaGlsZChwcmlvTWVkKTtcblxuICAgIGxldCBwcmlvSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBwcmlvSGlnaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcmlvSGlnaElucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgcHJpb0hpZ2hJbnB1dC5pZCA9IFwiaGlnaFwiO1xuICAgIHByaW9IaWdoSW5wdXQudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBwcmlvSGlnaElucHV0Lm5hbWUgPSBcInByaW9cIjtcbiAgICBsZXQgcHJpb0hpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb0xvd0xhYmVsLmh0bWxGb3IgPSBcImhpZ2hcIjtcbiAgICBwcmlvSGlnaExhYmVsLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIHByaW9IaWdoLmFwcGVuZENoaWxkKHByaW9IaWdoSW5wdXQpO1xuICAgIHByaW9IaWdoLmFwcGVuZENoaWxkKHByaW9IaWdoTGFiZWwpO1xuICAgIHByaW9EaXYuYXBwZW5kQ2hpbGQocHJpb0hpZ2gpO1xuXG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQocHJpb0Rpdik7XG5cblxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBFdmVudFwiO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdXR0b24nKTtcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChmb3JtQm9keSk7XG5cblxuICAgIC8vUG9wdWxhdGluZyB0YXNrYmFyXG5cbiAgICBsZXQgdGFza2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tiYXIuY2xhc3NMaXN0LmFkZCgndGFza2JhcicpO1xuXG4gICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgdG9kYXkuY2xhc3NMaXN0LmFkZCgndGFza2Jhckl0ZW0nKVxuXG4gICAgbGV0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWVrLnRleHRDb250ZW50ID0gXCJXZWVrXCI7XG4gICAgd2Vlay5jbGFzc0xpc3QuYWRkKCd0YXNrYmFySXRlbScpXG5cbiAgICBsZXQgbW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb250aC50ZXh0Q29udGVudCA9IFwiTW9udGhcIjtcbiAgICBtb250aC5jbGFzc0xpc3QuYWRkKCd0YXNrYmFySXRlbScpXG4gICAgbW9udGguc3R5bGUubWFyZ2luQm90dG9tID0gXCI1MHB4XCI7XG5cblxuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLmlkID0gXCJwcm9qZWN0c1wiO1xuICAgIGxldCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RIZWFkZXInKTtcbiAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG5cbiAgICBsZXQgcHJvamVjdHNOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS53aWR0aCA9IFwiZml0LWNvbnRlbnRcIjtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUucGFkZGluZyA9IFwiMCAycHhcIjtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0cHhcIjtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS5mb250U2l6ZSA9IFwiMC44cmVtXCI7XG4gICAgcHJvamVjdHNOZXcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwcm9qZWN0c05ldy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIHByb2plY3RzTmV3LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHByb2plY3RzTmV3LnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgcHJvamVjdHNOZXcuaWQgPSBcIm5ld0xpc3RcIjtcbiAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c05ldyk7XG5cbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCd0YXNrYmFySXRlbScpXG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKVxuXG5cbiAgICB0YXNrYmFyLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICB0YXNrYmFyLmFwcGVuZENoaWxkKHdlZWspO1xuICAgIHRhc2tiYXIuYXBwZW5kQ2hpbGQobW9udGgpO1xuICAgIHRhc2tiYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgLy9Qb3B1bGF0aW5nIGNvbnRhaW5lciBmb3IgdGFzayBpdGVtcyBhbmQgbGlzdCB2aWV3aW5nXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBcbiAgICAvL0NvbG9yIHNjaGVtZVxuICAgIHRhc2tiYXIuY2xhc3NMaXN0LmFkZCgnYWNjZW50Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza2Jhcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy9EZWZhdWx0IGxpc3QgbG9hZFxuXG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVmYXVsdFByb2plY3QuaWQgPSBcIjBcIjtcbiAgICBkZWZhdWx0UHJvamVjdC50ZXh0Q29udGVudCA9IFwiRGVmYXVsdFwiO1xuXG4gICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0KTtcblxuICAgIGV2ZW50U2V0dXAoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiaW1wb3J0IHN2ZyBmcm9tICcuL2NoZWNrLnN2Zyc7XG5pbXBvcnQgZXZlbnRTZXR1cCBmcm9tICcuL2V2ZW50cyc7XG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRpb25TdGF0dXMpID0+IHtcbiAgICBsZXQgaW5pdGlhbExvYWQgPSB0cnVlO1xuICAgY29uc3QgcHJpb3JpdHlDb2xvciA9ICgpID0+IHtcbiAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eSk7XG4gICAgICAgIGlmKHByaW9yaXR5ID09PSBcImhpZ2hcIil7XG4gICAgICAgICAgICByZXR1cm4gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwcmlvcml0eSA9PT0gXCJtZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiMnB4IHNvbGlkIG9yYW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMnB4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgIH1cbiAgIH1cbiAgIFxuICAgIGNvbnN0IHN3aXRjaFN0YXRlID0gKGNoZWNrQm94KSA9PiB7XG4gICAgICAgIGlmKGNvbXBsZXRpb25TdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gc3ZnO1xuICAgICAgICAgICAgY2hlY2tCb3guYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMyNjU4MEZcIlxuICAgICAgICAgICAgY29tcGxldGlvblN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRpb24gc3RhdHVzOlwiICsgY29tcGxldGlvblN0YXR1cyk7XG4gICAgICAgICAgICBjaGVja0JveC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Nyb3Nzb3V0Jyk7XG4gICAgICAgICAgICBjaGVja0JveC5wYXJlbnROb2RlLnN0eWxlLmJvcmRlckxlZnQgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICBpZihjaGVja0JveC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICBjaGVja0JveC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zc291dCcpO1xuICAgICAgICAgICAgY29tcGxldGlvblN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0aW9uIHN0YXR1czpcIiArIGNvbXBsZXRpb25TdGF0dXMpO1xuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5zdHlsZS5ib3JkZXJMZWZ0ID0gcHJpb3JpdHlDb2xvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2xpc3RJdGVtJyk7XG4gICAgICAgIGJveC5zdHlsZS5ib3JkZXJMZWZ0ID0gcHJpb3JpdHlDb2xvcigpO1xuIFxuICAgICAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tCb3guc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcbiAgICAgICAgY2hlY2tCb3guc3R5bGUuaGVpZ2h0ID0gXCIyMHB4XCI7XG5cblxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgICAgICBpZihjb21wbGV0aW9uU3RhdHVzKSB7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gc3ZnO1xuICAgICAgICAgICAgY2hlY2tCb3guYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMyNjU4MEZcIlxuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjcm9zc291dCcpO1xuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICBpZihjaGVja0JveC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICBjaGVja0JveC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zc291dCcpO1xuICAgICAgICAgICAgY2hlY2tCb3gucGFyZW50Tm9kZS5zdHlsZS5ib3JkZXJMZWZ0ID0gcHJpb3JpdHlDb2xvcigpO1xuICAgICAgICB9XG4gICAgXG5cbiAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN3aXRjaFN0YXRlKGNoZWNrQm94KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrQm94LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgICAvL1RoaXMgaXMgYSBub3RlIGFib3V0IGFsaWduaW5nIHRoZSB2YXJpb3VzIGNvbXBvbmVudHMgaW5zaWRlIGVhY2ggbGlzdEl0ZW1cbiAgICAgICAgLy9BcyBkaWZmZXJlbnQgdGV4dCBsZW5ndGhzIGNoYW5nZSB0aGUgYWxpZ25tZW50LCBtYXhXaWR0aCBpcyBub3QgaGVscGluZ1xuICAgICAgICAvL0J5IGl0c2VsZi5cbiAgICAgICAgdGV4dC5zdHlsZS5tYXhXaWR0aCA9IFwiNTAwcHhcIjtcbiAgICAgICAgLy8gdGV4dC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjM1MHB4XCI7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgdGV4dC5wYXJlbnROb2RlLnN0eWxlLm92ZXJmbG93WCA9IFwic2Nyb2xsXCI7XG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZURpc3BsYXlEaXYnKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIGRhdGUuc3R5bGUuY29sb3IgPSBcIiNBMjg4QTZcIjtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAvL2RlbGV0ZSBmdW5jdGlvbmFsaXR5IGJ1dHRvblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlkID0ndGVzdCc7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudD1cIlhcIjtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLm9wYWNpdHk9XCIxMDAlXCI7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJJdGVtIGNyZWF0ZWRcIik7XG5cbiAgICByZXR1cm4ge2Rpc3BsYXl9O1xufVxuXG5jb25zdCB0b2RvTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtQXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtQXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgLy9OZWVkIHRvIGltcGxlbWVudCBzb21lIHNvcnQgb2Ygc29ydGluZyBvZiBsaXN0IGl0ZW1zXG4gICAgICAgIC8vIHJlc3RydWN0dXJlKGl0ZW1BcnJheSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtQXJyYXkuc3BsaWNlKGl0ZW1BcnJheS5pbmRleE9mKGl0ZW0pLDEpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgaXRlbUFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmRpc3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyRGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgd2hpbGUoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ0xpc3QgY3JlYXRlZCcpO1xuXG4gICAgcmV0dXJuIHthZGRJdGVtLHJlbW92ZUl0ZW0sbG9hZExpc3QsY2xlYXJEaXNwbGF5fTtcbn1cblxuZXhwb3J0IHt0b2RvSXRlbSwgdG9kb0xpc3R9O1xuLy8gZXhwb3J0IGZ1bmN0aW9uIHRvZG9MaXN0KCk7XG4vLyBleHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW0oKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBob21lIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5cbmhvbWUoKTsgXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==