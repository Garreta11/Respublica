"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return App;\n    }\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! react */ \"react?1189\"));\nconst _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils?85b9\");\n/**\r\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\r\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\r\n */ async function appGetInitialProps(param) {\n    let { Component, ctx } = param;\n    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n    return {\n        pageProps\n    };\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component, pageProps } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, pageProps);\n    }\n}\n(()=>{\n    App.origGetInitialProps = appGetInitialProps;\n})();\n(()=>{\n    App.getInitialProps = appGetInitialProps;\n})();\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPO0FBQ1gsQ0FBQyxFQUFDO0FBQ0ZILDJDQUEwQztJQUN0Q0ksWUFBWTtJQUNaQyxLQUFLO1FBQ0QsT0FBT0M7SUFDWDtBQUNKLENBQUMsRUFBQztBQUNGLE1BQU1DLDJCQUEyQkMsbUJBQU9BLENBQUMsNkdBQXlDO0FBQ2xGLE1BQU1DLFNBQVMsV0FBVyxHQUFHRix5QkFBeUJHLENBQUMsQ0FBQ0YsbUJBQU9BLENBQUMseUJBQU87QUFDdkUsTUFBTUcsU0FBU0gsbUJBQU9BLENBQUMscURBQXFCO0FBQzVDOzs7Q0FHQyxHQUFHLGVBQWVJLG1CQUFtQkMsS0FBSztJQUN2QyxJQUFJLEVBQUVDLFNBQVMsRUFBR0MsR0FBRyxFQUFHLEdBQUdGO0lBQzNCLE1BQU1HLFlBQVksTUFBTSxDQUFDLEdBQUdMLE9BQU9NLG1CQUFtQixFQUFFSCxXQUFXQztJQUNuRSxPQUFPO1FBQ0hDO0lBQ0o7QUFDSjtBQUNBLE1BQU1WLFlBQVlHLE9BQU9TLE9BQU8sQ0FBQ0osU0FBUztJQUN0Q0ssU0FBUztRQUNMLE1BQU0sRUFBRUwsU0FBUyxFQUFHRSxTQUFTLEVBQUcsR0FBRyxJQUFJLENBQUNJLEtBQUs7UUFDN0MsT0FBTyxXQUFXLEdBQUdYLE9BQU9TLE9BQU8sQ0FBQ0csYUFBYSxDQUFDUCxXQUFXRTtJQUNqRTtBQUNKO0FBQ0M7SUFDR1YsSUFBSWdCLG1CQUFtQixHQUFHVjtBQUM5QjtBQUNDO0lBQ0dOLElBQUlpQixlQUFlLEdBQUdYO0FBQzFCO0FBRUEsSUFBSSxDQUFDLE9BQU9WLFFBQVFnQixPQUFPLEtBQUssY0FBZSxPQUFPaEIsUUFBUWdCLE9BQU8sS0FBSyxZQUFZaEIsUUFBUWdCLE9BQU8sS0FBSyxJQUFJLEtBQU0sT0FBT2hCLFFBQVFnQixPQUFPLENBQUNNLFVBQVUsS0FBSyxhQUFhO0lBQ3JLeEIsT0FBT0MsY0FBYyxDQUFDQyxRQUFRZ0IsT0FBTyxFQUFFLGNBQWM7UUFBRWYsT0FBTztJQUFLO0lBQ25FSCxPQUFPeUIsTUFBTSxDQUFDdkIsUUFBUWdCLE9BQU8sRUFBRWhCO0lBQy9Cd0IsT0FBT3hCLE9BQU8sR0FBR0EsUUFBUWdCLE9BQU87QUFDbEMsRUFFQSxnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNwdWJsaWNhLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzPzk2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIEFwcDtcclxuICAgIH1cclxufSk7XHJcbmNvbnN0IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHRcIik7XHJcbmNvbnN0IF9yZWFjdCA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3QgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XHJcbi8qKlxyXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXHJcbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxyXG4gKi8gYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHBhcmFtKSB7XHJcbiAgICBsZXQgeyBDb21wb25lbnQgLCBjdHggIH0gPSBwYXJhbTtcclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0ICgwLCBfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LCBjdHgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYWdlUHJvcHNcclxuICAgIH07XHJcbn1cclxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHBhZ2VQcm9wcyk7XHJcbiAgICB9XHJcbn1cclxuKCgpPT57XHJcbiAgICBBcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcclxufSkoKTtcclxuKCgpPT57XHJcbiAgICBBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xyXG59KSgpO1xyXG5cclxuaWYgKCh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnb2JqZWN0JyAmJiBleHBvcnRzLmRlZmF1bHQgIT09IG51bGwpKSAmJiB0eXBlb2YgZXhwb3J0cy5kZWZhdWx0Ll9fZXNNb2R1bGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcclxuICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiQXBwIiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl8iLCJfdXRpbHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJwYXJhbSIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJkZWZhdWx0IiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50Iiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIl9fZXNNb2R1bGUiLCJhc3NpZ24iLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "../shared/lib/utils?85b9":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react?1189":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n\r\nexports._ = exports._interop_require_default = _interop_require_default;\r\nfunction _interop_require_default(obj) {\r\n    return obj && obj.__esModule ? obj : { default: obj };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSxTQUFTLEdBQUcsZ0NBQWdDO0FBQzVDO0FBQ0EsMkNBQTJDO0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzcHVibGljYS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvY2pzL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5janM/NmZiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuXyA9IGV4cG9ydHMuX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0O1xyXG5mdW5jdGlvbiBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_app.js"));
module.exports = __webpack_exports__;

})();