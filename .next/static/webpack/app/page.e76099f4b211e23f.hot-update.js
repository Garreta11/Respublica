"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/title/index.js":
/*!***************************************!*\
  !*** ./app/components/title/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title.module.scss */ \"(app-pages-browser)/./app/components/title/title.module.scss\");\n/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_title_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\nfunction title(param) {\n    let { text, button, btnlink, download } = param;\n    const scrollToSection = (e)=>{\n        if (download) return;\n        e.preventDefault();\n        const section = document.querySelector(btnlink); // Replace with the target section's id\n        const yOffset = -100;\n        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;\n        if (section) {\n            window.scrollTo({\n                top: y,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h2, {\n                initial: {\n                    translateX: 0\n                },\n                whileInView: {\n                    translateX: 0\n                },\n                // viewport={{ once: true }}\n                className: (_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title_text),\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\title\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            button && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: btnlink,\n                download: true,\n                target: \"_blank\",\n                onClick: scrollToSection,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title_btn),\n                    children: button\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\title\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\title\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\title\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3RpdGxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1g7QUFDVTtBQUV4QixTQUFVRyxNQUFNLEtBQWlDO1FBQWpDLEVBQUNDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBQyxHQUFqQztJQUUzQixNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDckIsSUFBSUYsVUFBVTtRQUNkRSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFVBQVVDLFNBQVNDLGFBQWEsQ0FBQ1AsVUFBVSx1Q0FBdUM7UUFDeEYsTUFBTVEsVUFBVSxDQUFDO1FBQ2pCLE1BQU1DLElBQUlKLFFBQVFLLHFCQUFxQixHQUFHQyxHQUFHLEdBQUdDLE9BQU9DLFdBQVcsR0FBR0w7UUFFckUsSUFBSUgsU0FBUztZQUNUTyxPQUFPRSxRQUFRLENBQUM7Z0JBQUNILEtBQUtGO2dCQUFHTSxVQUFVO1lBQVE7UUFDL0M7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXdkIsaUVBQVk7OzBCQUN4Qiw4REFBQ0UsaURBQU1BLENBQUNzQixFQUFFO2dCQUNOQyxTQUFTO29CQUFFQyxZQUFZO2dCQUFFO2dCQUN6QkMsYUFBYTtvQkFBRUQsWUFBWTtnQkFBRTtnQkFDN0IsNEJBQTRCO2dCQUM1QkgsV0FBV3ZCLHNFQUFpQjswQkFFM0JJOzs7Ozs7WUFHSkMsd0JBQ0csOERBQUNKLGtEQUFJQTtnQkFBQzRCLE1BQU12QjtnQkFBU0MsUUFBUTtnQkFBQ3VCLFFBQU87Z0JBQVNDLFNBQVN2QjswQkFDbkQsNEVBQUNIO29CQUFPa0IsV0FBV3ZCLHFFQUFnQjs4QkFDOUJLOzs7Ozs7Ozs7Ozs7Ozs7OztBQU96QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy90aXRsZS9pbmRleC5qcz9mMDkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi90aXRsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAgdGl0bGUoe3RleHQsIGJ1dHRvbiwgYnRubGluaywgZG93bmxvYWR9KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvd25sb2FkKSByZXR1cm47XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ0bmxpbmspOyAvLyBSZXBsYWNlIHdpdGggdGhlIHRhcmdldCBzZWN0aW9uJ3MgaWRcclxuICAgICAgICBjb25zdCB5T2Zmc2V0ID0gLTEwMDsgXHJcbiAgICAgICAgY29uc3QgeSA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0ICsgeU9mZnNldDtcclxuXHJcbiAgICAgICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IHksIGJlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uaDJcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgdHJhbnNsYXRlWDogMCB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgdHJhbnNsYXRlWDogMCB9fVxyXG4gICAgICAgICAgICAgICAgLy8gdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfdGV4dH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmgyPlxyXG5cclxuICAgICAgICAgICAge2J1dHRvbiAmJiAoIC8vIENoZWNrIGlmIHRoZSAnYnV0dG9uJyBwcm9wIGlzIGRlZmluZWRcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2J0bmxpbmt9IGRvd25sb2FkIHRhcmdldD0nX2JsYW5rJyBvbkNsaWNrPXtzY3JvbGxUb1NlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsIm1vdGlvbiIsInRpdGxlIiwidGV4dCIsImJ1dHRvbiIsImJ0bmxpbmsiLCJkb3dubG9hZCIsInNjcm9sbFRvU2VjdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ5T2Zmc2V0IiwieSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaW5pdGlhbCIsInRyYW5zbGF0ZVgiLCJ3aGlsZUluVmlldyIsInRpdGxlX3RleHQiLCJocmVmIiwidGFyZ2V0Iiwib25DbGljayIsInRpdGxlX2J0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/title/index.js\n"));

/***/ })

});