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

/***/ "(app-pages-browser)/./app/components/xmass_tree/index.js":
/*!********************************************!*\
  !*** ./app/components/xmass_tree/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ xmasstree; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-dc6125bc.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xmass_tree.module.scss */ \"(app-pages-browser)/./app/components/xmass_tree/xmass_tree.module.scss\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Clone.js\");\n/* harmony import */ var framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion-3d */ \"(app-pages-browser)/./node_modules/framer-motion-3d/dist/es/render/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst transition = {\n    duration: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst Scene = (param)=>{\n    let { inView, tree, starTexture, start } = param;\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const [rot, setRot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        hidden: {\n            scale: 0,\n            rotateX: 90 * Math.PI / 180\n        },\n        visible: {\n            scale: 1.5,\n            rotateX: 90 * Math.PI / 180\n        },\n        starts: {\n            scale: [\n                1.5,\n                0.45,\n                0.45\n            ],\n            x: [\n                0,\n                0,\n                2\n            ],\n            y: [\n                0,\n                0,\n                1.5\n            ],\n            rotateX: [\n                90 * Math.PI / 180,\n                90 * Math.PI / 180,\n                0\n            ]\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let scrollTimeout;\n        // Add scroll event listener when the component mounts\n        const handleScroll = ()=>{\n            setIsScrolling(true);\n            // Clear the previous timeout (if any) and set a new one\n            clearTimeout(scrollTimeout);\n            scrollTimeout = setTimeout(()=>{\n                setIsScrolling(false);\n            }, 100); // Adjust the timeout duration as needed\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const EnableRender = ()=>{\n        _s1();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)((_, delta)=>{\n            let r = rot;\n            const speed = isScrolling ? delta * 1 : delta * 0.1;\n            r += speed;\n            setRot(r);\n        });\n    };\n    _s1(EnableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    const DisableRender = ()=>{\n        _s2();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)(()=>null, 1000);\n    };\n    _s2(DisableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    console.log(\"hello\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            inView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EnableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 23\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 42\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 1,\n                color: \"#b0b0b0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: 2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: -2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined),\n            tree && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                    initial: \"hidden\",\n                    animate: start ? [\n                        \"starts\"\n                    ] : \"visible\",\n                    variants: variants,\n                    transition: transition,\n                    \"rotation-y\": rot,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Clone, {\n                        object: tree.scenes[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                    lineNumber: 81,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Scene, \"qzJlXBjDyjfTTbo4g7bqS9Iu9OY=\");\n_c = Scene;\nfunction xmasstree(param) {\n    let { tree, start } = param;\n    _s1();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const rotation = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tree),\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.Canvas, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {\n                inView: inView,\n                tree: tree,\n                rotation: rotation,\n                start: start\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 105,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n            lineNumber: 104,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n}\n_s1(xmasstree, \"oyd/E8SD7Fx4uOp6P7gVV2pVlaE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3htYXNzX3RyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2RDtBQUNSO0FBQ1I7QUFDSDtBQUVhO0FBQ2Q7QUFFYztBQUV2RCxNQUFNWSxhQUFhO0lBQUVDLFVBQVU7SUFBR0MsTUFBTTtRQUFDO1FBQU07UUFBTTtRQUFNO0tBQUs7QUFBQztBQUVqRSxNQUFNQyxRQUFRO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFOzs7SUFFL0MsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNtQixhQUFhQyxlQUFlLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNcUIsV0FBVztRQUNiQyxRQUFRO1lBQ0pDLE9BQU87WUFDUEMsU0FBUyxLQUFLQyxLQUFLQyxFQUFFLEdBQUc7UUFDNUI7UUFDQUMsU0FBUztZQUNMSixPQUFPO1lBQ1BDLFNBQVMsS0FBS0MsS0FBS0MsRUFBRSxHQUFHO1FBQzVCO1FBQ0FFLFFBQVE7WUFDSkwsT0FBTztnQkFBQztnQkFBSztnQkFBTTthQUFLO1lBQ3hCTSxHQUFHO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7WUFDWkMsR0FBRztnQkFBQztnQkFBRztnQkFBRzthQUFJO1lBQ2ROLFNBQVM7Z0JBQUMsS0FBS0MsS0FBS0MsRUFBRSxHQUFHO2dCQUFLLEtBQUtELEtBQUtDLEVBQUUsR0FBRztnQkFBSzthQUFFO1FBQ3hEO0lBQ0o7SUFFQTdCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWtDO1FBQ0osc0RBQXNEO1FBQ3RELE1BQU1DLGVBQWU7WUFDakJaLGVBQWU7WUFFZix3REFBd0Q7WUFDeERhLGFBQWFGO1lBQ2JBLGdCQUFnQkcsV0FBVztnQkFDekJkLGVBQWU7WUFDakIsR0FBRyxNQUFNLHdDQUF3QztRQUNyRDtRQUVBZSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUVsQywwREFBMEQ7UUFDMUQsT0FBTztZQUNMRyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1NLGVBQWU7O1FBQU1wQyxPQUFBQSxxREFBUUEsQ0FBQyxDQUFDcUMsR0FBR0M7WUFDcEMsSUFBSUMsSUFBSXhCO1lBRVIsTUFBTXlCLFFBQVF2QixjQUFjcUIsUUFBUSxJQUFJQSxRQUFRO1lBQ2hEQyxLQUFLQztZQUVMeEIsT0FBT3VCO1FBQ1g7SUFBQztRQVBLSDs7WUFBcUJwQyxpREFBUUE7OztJQVNuQyxNQUFNeUMsZ0JBQWdCOztRQUFNekMsT0FBQUEscURBQVFBLENBQUMsSUFBTSxNQUFNO0lBQUk7UUFBL0N5Qzs7WUFBc0J6QyxpREFBUUE7OztJQUVwQzBDLFFBQVFDLEdBQUcsQ0FBQztJQUVaLHFCQUNJOztZQUNLaEMsdUJBQVMsOERBQUN5Qjs7OzswQ0FBa0IsOERBQUNLOzs7OzswQkFFOUIsOERBQUNHO2dCQUFhQyxXQUFXO2dCQUFHQyxPQUFNOzs7Ozs7MEJBQ2xDLDhEQUFDQztnQkFBV0MsVUFBVTtnQkFBR0gsV0FBVzs7Ozs7OzBCQUNwQyw4REFBQ0U7Z0JBQVdDLFVBQVUsQ0FBQztnQkFBR0gsV0FBVzs7Ozs7O1lBQ3BDakMsc0JBQ0csOERBQUNmLDJDQUFRQTtnQkFBQ29ELFVBQVU7MEJBRWhCLDRFQUFDNUMsb0RBQU1BLENBQUM2QyxJQUFJO29CQUNSQyxTQUFRO29CQUNSQyxTQUFTdEMsUUFBUTt3QkFBQztxQkFBUyxHQUFFO29CQUM3QkssVUFBVUE7b0JBQ1ZaLFlBQVlBO29CQUNaOEMsY0FBWXRDOzhCQUVaLDRFQUFDYixvREFBS0E7d0JBQUNvRCxRQUFRMUMsS0FBSzJDLE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0EvRU03QztLQUFBQTtBQWlGUyxTQUFVOEMsVUFBVyxLQUFhO1FBQWIsRUFBQzVDLElBQUksRUFBRUUsS0FBSyxFQUFDLEdBQWI7O0lBRWhDLE1BQU0sRUFBRTJDLEdBQUcsRUFBRTlDLE1BQU0sRUFBRSxHQUFHTCxzRUFBU0E7SUFFakMsTUFBTW9ELFdBQVc7SUFFakIscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVczRCxxRUFBVztRQUFFd0QsS0FBS0E7a0JBQzlCLDRFQUFDMUQsc0RBQU1BO3NCQUNILDRFQUFDVztnQkFBTUMsUUFBUUE7Z0JBQVFDLE1BQU1BO2dCQUFNOEMsVUFBVUE7Z0JBQVU1QyxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RTtJQWJ5QjBDOztRQUVHbEQsa0VBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3htYXNzX3RyZWUvaW5kZXguanM/ZjYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCBTdXNwZW5zZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FudmFzLCB1c2VGcmFtZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4veG1hc3NfdHJlZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQ2xvbmUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XHJcblxyXG5pbXBvcnQgeyB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb24tM2RcIlxyXG5cclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDUsIGVhc2U6IFswLjQzLCAwLjEzLCAwLjIzLCAwLjk2XSB9O1xyXG5cclxuY29uc3QgU2NlbmUgPSAoeyBpblZpZXcsIHRyZWUsIHN0YXJUZXh0dXJlLCBzdGFydCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3JvdCwgc2V0Um90XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbaXNTY3JvbGxpbmcsIHNldElzU2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgICBoaWRkZW46IHsgXHJcbiAgICAgICAgICAgIHNjYWxlOiAwLFxyXG4gICAgICAgICAgICByb3RhdGVYOiA5MCAqIE1hdGguUEkgLyAxODBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpc2libGU6IHtcclxuICAgICAgICAgICAgc2NhbGU6IDEuNSxcclxuICAgICAgICAgICAgcm90YXRlWDogOTAgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydHM6IHtcclxuICAgICAgICAgICAgc2NhbGU6IFsxLjUsIDAuNDUsIDAuNDVdLFxyXG4gICAgICAgICAgICB4OiBbMCwgMCwgMl0sXHJcbiAgICAgICAgICAgIHk6IFswLCAwLCAxLjVdLFxyXG4gICAgICAgICAgICByb3RhdGVYOiBbOTAgKiBNYXRoLlBJIC8gMTgwLCA5MCAqIE1hdGguUEkgLyAxODAsIDBdXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBzY3JvbGxUaW1lb3V0O1xyXG4gICAgICAgIC8vIEFkZCBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgcHJldmlvdXMgdGltZW91dCAoaWYgYW55KSBhbmQgc2V0IGEgbmV3IG9uZVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dCk7XHJcbiAgICAgICAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJc1Njcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7IC8vIEFkanVzdCB0aGUgdGltZW91dCBkdXJhdGlvbiBhcyBuZWVkZWRcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBcclxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgRW5hYmxlUmVuZGVyID0gKCkgPT4gdXNlRnJhbWUoKF8sIGRlbHRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSByb3RcclxuXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc1Njcm9sbGluZyA/IGRlbHRhICogMSA6IGRlbHRhICogMC4xXHJcbiAgICAgICAgciArPSBzcGVlZFxyXG5cclxuICAgICAgICBzZXRSb3QocilcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgRGlzYWJsZVJlbmRlciA9ICgpID0+IHVzZUZyYW1lKCgpID0+IG51bGwsIDEwMDApXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2luVmlldyA/IDxFbmFibGVSZW5kZXIgLz4gOiA8RGlzYWJsZVJlbmRlciAvPn1cclxuXHJcbiAgICAgICAgICAgIDxhbWJpZW50TGlnaHQgaW50ZW5zaXR5PXsxfSBjb2xvcj1cIiNiMGIwYjBcIi8+XHJcbiAgICAgICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXsyfSBpbnRlbnNpdHk9ezV9Lz5cclxuICAgICAgICAgICAgPHBvaW50TGlnaHQgcG9zaXRpb249ey0yfSBpbnRlbnNpdHk9ezV9Lz5cclxuICAgICAgICAgICAge3RyZWUgJiYgKCBcclxuICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1haW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5tZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtzdGFydCA/IFsnc3RhcnRzJ106ICd2aXNpYmxlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvbi15PXtyb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvbmUgb2JqZWN0PXt0cmVlLnNjZW5lc1swXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5tZXNoPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAgeG1hc3N0cmVlKCB7dHJlZSwgc3RhcnR9ICkge1xyXG5cclxuICAgIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpXHJcblxyXG4gICAgY29uc3Qgcm90YXRpb24gPSAwXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlZX0gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8Q2FudmFzPlxyXG4gICAgICAgICAgICAgICAgPFNjZW5lIGluVmlldz17aW5WaWV3fSB0cmVlPXt0cmVlfSByb3RhdGlvbj17cm90YXRpb259IHN0YXJ0PXtzdGFydH0vPlxyXG4gICAgICAgICAgICA8L0NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJTdXNwZW5zZSIsInVzZVN0YXRlIiwiQ2FudmFzIiwidXNlRnJhbWUiLCJzdHlsZXMiLCJDbG9uZSIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIm1vdGlvbiIsInVzZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJTY2VuZSIsImluVmlldyIsInRyZWUiLCJzdGFyVGV4dHVyZSIsInN0YXJ0Iiwicm90Iiwic2V0Um90IiwiaXNTY3JvbGxpbmciLCJzZXRJc1Njcm9sbGluZyIsInZhcmlhbnRzIiwiaGlkZGVuIiwic2NhbGUiLCJyb3RhdGVYIiwiTWF0aCIsIlBJIiwidmlzaWJsZSIsInN0YXJ0cyIsIngiLCJ5Iiwic2Nyb2xsVGltZW91dCIsImhhbmRsZVNjcm9sbCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVuYWJsZVJlbmRlciIsIl8iLCJkZWx0YSIsInIiLCJzcGVlZCIsIkRpc2FibGVSZW5kZXIiLCJjb25zb2xlIiwibG9nIiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5IiwiY29sb3IiLCJwb2ludExpZ2h0IiwicG9zaXRpb24iLCJmYWxsYmFjayIsIm1lc2giLCJpbml0aWFsIiwiYW5pbWF0ZSIsInJvdGF0aW9uLXkiLCJvYmplY3QiLCJzY2VuZXMiLCJ4bWFzc3RyZWUiLCJyZWYiLCJyb3RhdGlvbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/xmass_tree/index.js\n"));

/***/ })

});