/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { errorFn } = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nerrorFn();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxVQUFVLEVBQUUsbUJBQU8sQ0FBQywrQkFBUzs7QUFFckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNl93ZWJwYWNrX3NvdXJjZV9tYXAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGVycm9yRm4gfSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZXJyb3JGbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("function errorFn() {\n  console.log('hello error');\n\n  throw new Error('something wrong...');\n}\n\nmodule.exports = { errorFn };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovLzA2X3dlYnBhY2tfc291cmNlX21hcC8uL3NyYy91dGlscy5qcz8wMjVlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGVycm9yRm4oKSB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbyBlcnJvcicpO1xuXG4gIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIHdyb25nLi4uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBlcnJvckZuIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils.js\n");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;