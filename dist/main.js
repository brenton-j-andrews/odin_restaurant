/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --nav-bar-slate: #64748B;\\n    --text-slate: #E2E8F0;\\n    --nav-bar-btn-slate: #94A3B8;\\n    --nav-bar-btn-hover-slate: #1E293B;\\n}\\n\\n* {\\n    margin: 0px;\\n    padding: 0px;\\n    background-color: var(--nav-bar-slate);\\n}\\n\\n\\n/* Nav Bar Styling. Search || to jump sections */\\n\\n.nav-bar {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 25px 20px 25px 20px;\\n\\n    background-color: var(--nav-bar-slate);\\n    color: var(--text-slate);\\n}\\n\\n.home_page_title {\\n    font-size: 32px;\\n}\\n\\n.nav-bar button {\\n    padding: 15px 0px 15px 0px;\\n    margin: 0px 15px 0px 15px;\\n    width: 150px;\\n\\n    border: 5px solid var(--nav-bar-slate);\\n    border-radius: 10px;\\n\\n    background-color: var(--nav-bar-btn-slate);\\n    color: var(--text-slate);\\n    font-size: 16px;\\n}\\n\\nbutton:hover {\\n    background-color: var(--nav-bar-btn-hover-slate);\\n    color: white;\\n\\n    transition: all .5s ease-in-out;\\n}\\n\\n.nav-btn.active {\\n    background-color: var(--nav-bar-btn-hover-slate);\\n    color: white;\\n}\\n\\n\\n /*  || Main section styling */\\n .main-section-wrapper {\\n    background-color: var(--text-slate);\\n\\n    display: flex;\\n    flex-direction: column;\\n    padding: 15px;\\n}\\n\\n/* || Home Page Styling - Daily Special section*/\\n.special-wrapper {\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--text-slate);\\n}\\n\\n.daily-special-title, .about-us-title {\\n    color: var(--nav-bar-btn-hover-slate);\\n    background-color: var(--text-slate);\\n    font-size: 24px;\\n    margin: 15px;\\n}\\n\\n.daily-special-lower {\\n    display: flex;\\n    background-color: var(--nav-bar-slate);\\n    width: 60%;\\n\\n    padding: 15px;\\n    border-radius: 10px;    \\n}\\n\\n.daily-special-lower img {\\n    width: 480px;\\n    height: auto;\\n\\n    border: 3px solid var(--text-slate);\\n    border-radius: 10px;\\n}\\n\\n.daily-special-paragraph {\\n    width: 150px;\\n    padding: 25px;\\n\\n    font-size: 20px;\\n    color: var(--text-slate);\\n}\\n\\n/* || Home Page Styling - About section */\\n\\n.about-wrapper {\\n    width: 60%;\\n    height: auto;\\n    border-radius: 10px;\\n    \\n    margin-left: auto;\\n    margin-right: 0;\\n    margin-top: 25px;\\n    margin-bottom: 75px;\\n\\n    background-color: var(--text-slate);\\n}\\n\\n.about-inner-wrapper {\\n    width: auto;\\n    height: auto;\\n    padding: 25px;\\n    border-radius: 10px;   \\n\\n    background-color: var(--nav-bar-slate);\\n}\\n\\n.about-paragraph {\\n    font-size: 20px;\\n    color: var(--text-slate);\\n    line-height: 1.6rem;\\n}\\n\\n.michelin-star {\\n    width: 200px;\\n    height: auto;\\n    background-color: var(--text-slate);\\n}\\n\\n/* Information bar Styling */\\n.information-bar-wrapper {\\n    background-color: var(--nav-bar-slate);\\n\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    grid-template-rows: auto;\\n    padding: 25px;\\n\\n    font-size: 20px;\\n    color: var(--text-slate);\\n}\\n\\n.information-bar-wrapper > * {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.order-div {\\n    grid-area: 1 / 1 / 2 / 2;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: center;\\n}\\n\\n.order-btn {\\n    width: 60%;\\n    height: 50%;\\n\\n    border: 5px solid var(--nav-bar-slate);\\n    border-radius: 10px;\\n\\n    background-color: var(--nav-bar-btn-slate);\\n    color: var(--text-slate);\\n    font-size: 16px;\\n}\\n\\n.map-wrapper {\\n    grid-area: 1 / 2 / 2 / 3;\\n}\\n\\n.contact-info {\\n    grid-area: 1 / 3 / 2 / 4;\\n    flex-direction: column;\\n    align-items: center;\\n    font-size: 16px;\\n} \\n\\n.address-1 {\\n    margin-top: 15px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_restraunt/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin_restraunt/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_restraunt/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_restraunt/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_restraunt/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_restraunt/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_restraunt/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_restraunt/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_restraunt/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_restraunt/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/food_objects.js":
/*!*****************************!*\
  !*** ./src/food_objects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// This script holds the objects associated with each menu item. Each object has a dish name, photo file path, description and image source.\n\nlet foodObjectArr = [];\n\nconst dish_1 = {\n    dish_name:\"Hainanese Chicken Rice\",\n    image_url: \"../src/assets/pictures/chicken_rice.jpg\", \n    description: \"The national dish of Singapore! It might sound like a minute rice flavour but it is so much more.\",\n    source: \"Image sourced from SeriousEats.com\"\n}\n\nfoodObjectArr.push(dish_1);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodObjectArr);\n\n//# sourceURL=webpack://odin_restraunt/./src/food_objects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/website */ \"./src/pages/website.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n\n\n\n(0,_pages_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://odin_restraunt/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact_page.js":
/*!***********************************!*\
  !*** ./src/pages/contact_page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Create the main page content -> \"About\" paragraph and special of the day!\nconst contactPage = function() {\n    const contact_contents = document.querySelector(\"main\");\n    contact_contents.innerHTML = \"\";\n    contact_contents.textContent = \"hello from the contact page!\"; \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://odin_restraunt/./src/pages/contact_page.js?");

/***/ }),

/***/ "./src/pages/home_page.js":
/*!********************************!*\
  !*** ./src/pages/home_page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_pictures_chicken_rice_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pictures/chicken_rice.jpg */ \"./src/assets/pictures/chicken_rice.jpg\");\n/* harmony import */ var _food_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food_objects */ \"./src/food_objects.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact_page */ \"./src/pages/contact_page.js\");\n\n\n\n\n// Create the main page content -> \"About\" paragraph and special of the day!\nconst homePage = function() {\n    const home_contents = document.querySelector(\"main\");\n    home_contents.innerHTML = \"\";\n    home_contents.className = \"main-section-wrapper\";\n\n    // \"Special of the day\" content wrapper.\n    const daily_special_wrapper = document.createElement(\"div\");\n    daily_special_wrapper.className = \"special-wrapper\";\n\n    // Daily special header.\n    const daily_special_title = document.createElement(\"p\");\n    daily_special_title.className = \"daily-special-title\";\n    daily_special_title.textContent = `Special of the day: ${_food_objects__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0].dish_name}`;\n    daily_special_wrapper.appendChild(daily_special_title);\n\n\n    // Daily special lower div...\n    const daily_special_lower = document.createElement(\"div\");\n    daily_special_lower.className = \"daily-special-lower\";\n\n\n    // Daily special image.\n    const special_of_the_day = document.createElement(\"img\");\n    special_of_the_day.src = _food_objects__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0].image_url;\n    daily_special_lower.appendChild(special_of_the_day);\n\n    // Daily special description.\n    const daily_special_description = document.createElement(\"p\");\n    daily_special_description.className = \"daily-special-paragraph\";\n    daily_special_description.textContent = _food_objects__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0].description;\n    daily_special_lower.appendChild(daily_special_description);\n\n    daily_special_wrapper.appendChild(daily_special_lower);\n\n\n    // \"About Us\" section styling.\n    const about_wrapper = document.createElement(\"div\");\n    about_wrapper.className = \"about-wrapper\";\n\n    // About Us header.\n    const about_us_title = document.createElement(\"p\");\n    about_us_title.className = \"about-us-title\";\n    about_us_title.textContent = `About Us:`;\n    about_wrapper.appendChild(about_us_title);\n\n    //  \"About Us\" paragraph and box.\n    const about_inner_wrapper = document.createElement(\"div\");\n    about_inner_wrapper.className = \"about-inner-wrapper\";\n    about_wrapper.appendChild(about_inner_wrapper);\n    \n    const about_paragraph = document.createElement(\"p\");\n    about_paragraph.className = \"about-paragraph\";\n    about_paragraph.textContent = \"Some people say that the sign of a good restaurant is a small menu focused on one particular style of food. They are probably correct, but that is alright because this isn't a real restaurant! The menu here is just a bunch of my favorite foods.\"\n    about_inner_wrapper.appendChild(about_paragraph);\n\n\n\n    home_contents.appendChild(daily_special_wrapper);\n    home_contents.appendChild(about_wrapper);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://odin_restraunt/./src/pages/home_page.js?");

/***/ }),

/***/ "./src/pages/menu_page.js":
/*!********************************!*\
  !*** ./src/pages/menu_page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/pages/website.js\");\n\n\nfunction menuPage() {\n    const menu_contents = document.querySelector(\"main\");\n    menu_contents.innerHTML = \"\";\n    menu_contents.textContent = \"hello?\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://odin_restraunt/./src/pages/menu_page.js?");

/***/ }),

/***/ "./src/pages/website.js":
/*!******************************!*\
  !*** ./src/pages/website.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_page */ \"./src/pages/home_page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_page */ \"./src/pages/menu_page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact_page */ \"./src/pages/contact_page.js\");\n\n\n\n\n// Create the nav bar.\nconst createNavBar = function(content) {\n    const nav_bar = document.createElement(\"nav\");\n    nav_bar.className = \"nav-bar\";\n    content.appendChild(nav_bar);\n\n    // Page Title\n    const title = document.createElement(\"div\");\n    title.textContent = \"Favorite Foods Eatery\";\n    title.className = \"home_page_title\";\n    nav_bar.appendChild(title);\n \n    // Nav bar button section.\n    const nav_bar_btns = document.createElement(\"div\");\n    nav_bar_btns.className = \"nav-bar-btns\";\n    nav_bar.appendChild(nav_bar_btns);\n\n    // Nav Bar button elements\n    const home_btn = document.createElement(\"button\");\n    home_btn.className = \"nav-btn active\";\n    home_btn.textContent = \"Home\";\n\n    home_btn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        activeButton(e);\n        (0,_home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n\n    const menu_btn = document.createElement(\"button\");\n    menu_btn.className = \"nav-btn\";\n    menu_btn.textContent = \"Menu\";\n\n    menu_btn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        activeButton(e);\n        (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n\n    const contact_btn = document.createElement(\"button\");\n    contact_btn.className = \"nav-btn\";\n    contact_btn.textContent = \"Contact Us\";\n\n    contact_btn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        activeButton(e);\n        (0,_contact_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    nav_bar_btns.appendChild(home_btn);\n    nav_bar_btns.appendChild(menu_btn);\n    nav_bar_btns.appendChild(contact_btn);\n}\n\n// Information bar -> contains \"click to order\" time sensitive button, embedded map, contact info and hours.\nconst informationBar = function(content) {\n    const information_bar_wrapper = document.createElement(\"div\");\n    information_bar_wrapper.className = \"information-bar-wrapper\";\n\n    const order_div = document.createElement(\"div\");\n    order_div.className = \"order-div\";\n    information_bar_wrapper.appendChild(order_div);\n    \n    const order_div_title = document.createElement(\"div\");\n    order_div_title.className = \"order-div-title\";\n\n    const order_btn = document.createElement(\"button\");\n    order_btn.className = \"order-btn\";\n\n    // Time check!\n    let current_hour = new Date().getHours() + 2;\n    if (11 <= current_hour && current_hour < 20) {\n        order_div_title.textContent = \"We are open!\"\n        order_btn.textContent = \"Order Now\";\n    } else {\n        order_div_title.textContent = \"We are closed. Sorry!\"\n        order_btn.textContent = \"Order Tomorrow!\";\n    }\n\n    order_div.appendChild(order_div_title);\n    order_div.appendChild(order_btn);\n\n\n    const map_wrapper = document.createElement(\"div\");\n    map_wrapper.className = \"map-wrapper\";\n   \n    const embedded_map = document.createElement(\"iframe\");\n    embedded_map.src = \"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d738.3155151085128!2d-71.7925368!3d42.2515759!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645024420249!5m2!1sen!2sus\";\n    embedded_map.className = \"embedded-map\";\n    map_wrapper.appendChild(embedded_map);\n    information_bar_wrapper.appendChild(map_wrapper);\n\n\n    const contact_info = document.createElement(\"div\");\n    contact_info.className = \"contact-info\";\n    contact_info.textContent = \"Hours\";\n\n\n    const hours1 = document.createElement(\"p\");\n    hours1.textContent = \"11:00 - 22:00 Monday - Friday\";\n    contact_info.appendChild(hours1);\n\n    const hours2 = document.createElement(\"p\");\n    hours2.textContent = \"12:00 - 23:00 Weekends\";\n    contact_info.appendChild(hours2);\n\n    const address1 = document.createElement(\"p\");\n    address1.textContent = \"1054 Somewhere Street\";\n    contact_info.appendChild(address1);\n\n    const address2 = document.createElement(\"p\");\n    address2.textContent = \"Worcestor, MA 01601\";\n    contact_info.appendChild(address2);\n\n    const phone_number = document.createElement(\"p\");\n    phone_number .textContent = \"508-XXX-YYYY\";\n    contact_info.appendChild(phone_number);\n\n\n    information_bar_wrapper.appendChild(contact_info);\n    content.appendChild(information_bar_wrapper);\n\n\n}\n\n// Add \"active\" class to the button who's page is open. Remove \"active\" from other page buttons.\nconst activeButton = function(button) {\n\n    const buttons = document.querySelectorAll(\".nav-btn\");\n    \n    buttons.forEach(button => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n    button.target.classList.add(\"active\");\n}\n\n// \"page_content\" div reset. This div is where elements unique to each page are rendered.\nconst pageContentDiv = function(content) {\n    const page_content = document.createElement(\"main\");\n    content.appendChild(page_content);\n}\n\nconst siteContents = function() {\n    const content = document.querySelector(\"#content\");\n    createNavBar(content);\n    pageContentDiv(content);\n    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    informationBar(content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siteContents);\n\n\n//# sourceURL=webpack://odin_restraunt/./src/pages/website.js?");

/***/ }),

/***/ "./src/assets/pictures/chicken_rice.jpg":
/*!**********************************************!*\
  !*** ./src/assets/pictures/chicken_rice.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fdf97606a90f55351d07.jpg\";\n\n//# sourceURL=webpack://odin_restraunt/./src/assets/pictures/chicken_rice.jpg?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;