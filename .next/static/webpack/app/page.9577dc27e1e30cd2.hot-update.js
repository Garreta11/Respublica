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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ xmasstree; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-dc6125bc.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xmass_tree.module.scss */ \"(app-pages-browser)/./app/components/xmass_tree/xmass_tree.module.scss\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Clone.js\");\n/* harmony import */ var framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion-3d */ \"(app-pages-browser)/./node_modules/framer-motion-3d/dist/es/render/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst transition = {\n    duration: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst Scene = (param)=>{\n    let { inView, tree, rotation, start } = param;\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const [rot, setRot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        hidden: {\n            scale: 0,\n            rotateX: 90 * Math.PI / 180\n        },\n        visible: {\n            scale: 1.5,\n            rotateX: 90 * Math.PI / 180\n        },\n        starts: {\n            scale: [\n                1.5,\n                0.45,\n                0.45\n            ],\n            x: [\n                0,\n                0,\n                2\n            ],\n            y: [\n                0,\n                0,\n                1.5\n            ],\n            rotateX: [\n                90 * Math.PI / 180,\n                90 * Math.PI / 180,\n                0\n            ]\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let scrollTimeout;\n        // Add scroll event listener when the component mounts\n        const handleScroll = ()=>{\n            setIsScrolling(true);\n            // Clear the previous timeout (if any) and set a new one\n            clearTimeout(scrollTimeout);\n            scrollTimeout = setTimeout(()=>{\n                setIsScrolling(false);\n            }, 100); // Adjust the timeout duration as needed\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const EnableRender = ()=>{\n        _s1();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)((_, delta)=>{\n            let r = rot;\n            const speed = isScrolling ? delta * 0.1 : delta * 0.005;\n            r += speed;\n            setRot(r);\n        });\n    };\n    _s1(EnableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    const DisableRender = ()=>{\n        _s2();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)(()=>null, 1000);\n    };\n    _s2(DisableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            inView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EnableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 23\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 42\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 1,\n                color: \"#b0b0b0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: 2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: -2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined),\n            tree && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                    initial: \"hidden\",\n                    animate: start ? [\n                        \"starts\"\n                    ] : \"visible\",\n                    variants: variants,\n                    transition: transition,\n                    \"rotation-y\": rot,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Clone, {\n                        object: tree.scenes[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                    lineNumber: 79,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Scene, \"qzJlXBjDyjfTTbo4g7bqS9Iu9OY=\");\n_c = Scene;\nfunction xmasstree(param) {\n    let { tree, start } = param;\n    _s1();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const rotation = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tree),\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.Canvas, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {\n                inView: inView,\n                tree: tree,\n                rotation: rotation,\n                start: start\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 103,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n            lineNumber: 102,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, this);\n}\n_s1(xmasstree, \"oyd/E8SD7Fx4uOp6P7gVV2pVlaE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3htYXNzX3RyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2RDtBQUNSO0FBQ1I7QUFDSDtBQUVhO0FBQ2Q7QUFFYztBQUV2RCxNQUFNWSxhQUFhO0lBQUVDLFVBQVU7SUFBR0MsTUFBTTtRQUFDO1FBQU07UUFBTTtRQUFNO0tBQUs7QUFBQztBQUVqRSxNQUFNQyxRQUFRO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFOzs7SUFFNUMsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNtQixhQUFhQyxlQUFlLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNcUIsV0FBVztRQUNiQyxRQUFRO1lBQ0pDLE9BQU87WUFDUEMsU0FBUyxLQUFLQyxLQUFLQyxFQUFFLEdBQUc7UUFDNUI7UUFDQUMsU0FBUztZQUNMSixPQUFPO1lBQ1BDLFNBQVMsS0FBS0MsS0FBS0MsRUFBRSxHQUFHO1FBQzVCO1FBQ0FFLFFBQVE7WUFDSkwsT0FBTztnQkFBQztnQkFBSztnQkFBTTthQUFLO1lBQ3hCTSxHQUFHO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7WUFDWkMsR0FBRztnQkFBQztnQkFBRztnQkFBRzthQUFJO1lBQ2ROLFNBQVM7Z0JBQUMsS0FBS0MsS0FBS0MsRUFBRSxHQUFHO2dCQUFLLEtBQUtELEtBQUtDLEVBQUUsR0FBRztnQkFBSzthQUFFO1FBQ3hEO0lBQ0o7SUFFQTdCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWtDO1FBQ0osc0RBQXNEO1FBQ3RELE1BQU1DLGVBQWU7WUFDakJaLGVBQWU7WUFFZix3REFBd0Q7WUFDeERhLGFBQWFGO1lBQ2JBLGdCQUFnQkcsV0FBVztnQkFDekJkLGVBQWU7WUFDakIsR0FBRyxNQUFNLHdDQUF3QztRQUNyRDtRQUVBZSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUVsQywwREFBMEQ7UUFDMUQsT0FBTztZQUNMRyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1NLGVBQWU7O1FBQU1wQyxPQUFBQSxxREFBUUEsQ0FBQyxDQUFDcUMsR0FBR0M7WUFDcEMsSUFBSUMsSUFBSXhCO1lBRVIsTUFBTXlCLFFBQVF2QixjQUFjcUIsUUFBUSxNQUFNQSxRQUFRO1lBQ2xEQyxLQUFLQztZQUVMeEIsT0FBT3VCO1FBQ1g7SUFBQztRQVBLSDs7WUFBcUJwQyxpREFBUUE7OztJQVNuQyxNQUFNeUMsZ0JBQWdCOztRQUFNekMsT0FBQUEscURBQVFBLENBQUMsSUFBTSxNQUFNO0lBQUk7UUFBL0N5Qzs7WUFBc0J6QyxpREFBUUE7OztJQUVwQyxxQkFDSTs7WUFDS1csdUJBQVMsOERBQUN5Qjs7OzswQ0FBa0IsOERBQUNLOzs7OzswQkFFOUIsOERBQUNDO2dCQUFhQyxXQUFXO2dCQUFHQyxPQUFNOzs7Ozs7MEJBQ2xDLDhEQUFDQztnQkFBV0MsVUFBVTtnQkFBR0gsV0FBVzs7Ozs7OzBCQUNwQyw4REFBQ0U7Z0JBQVdDLFVBQVUsQ0FBQztnQkFBR0gsV0FBVzs7Ozs7O1lBQ3BDL0Isc0JBQ0csOERBQUNmLDJDQUFRQTtnQkFBQ2tELFVBQVU7MEJBRWhCLDRFQUFDMUMsb0RBQU1BLENBQUMyQyxJQUFJO29CQUNSQyxTQUFRO29CQUNSQyxTQUFTcEMsUUFBUTt3QkFBQztxQkFBUyxHQUFFO29CQUM3QkssVUFBVUE7b0JBQ1ZaLFlBQVlBO29CQUNaNEMsY0FBWXBDOzhCQUVaLDRFQUFDYixvREFBS0E7d0JBQUNrRCxRQUFReEMsS0FBS3lDLE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0E3RU0zQztLQUFBQTtBQStFUyxTQUFVNEMsVUFBVyxLQUFhO1FBQWIsRUFBQzFDLElBQUksRUFBRUUsS0FBSyxFQUFDLEdBQWI7O0lBRWhDLE1BQU0sRUFBRXlDLEdBQUcsRUFBRTVDLE1BQU0sRUFBRSxHQUFHTCxzRUFBU0E7SUFFakMsTUFBTU8sV0FBVztJQUVqQixxQkFDSSw4REFBQzJDO1FBQUlDLFdBQVd4RCxxRUFBVztRQUFFc0QsS0FBS0E7a0JBQzlCLDRFQUFDeEQsc0RBQU1BO3NCQUNILDRFQUFDVztnQkFBTUMsUUFBUUE7Z0JBQVFDLE1BQU1BO2dCQUFNQyxVQUFVQTtnQkFBVUMsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUU7SUFieUJ3Qzs7UUFFR2hELGtFQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy94bWFzc190cmVlL2luZGV4LmpzP2Y2MDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgU3VzcGVuc2UsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3htYXNzX3RyZWUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IENsb25lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xyXG5cclxuaW1wb3J0IHsgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uLTNkXCJcclxuXHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiA1LCBlYXNlOiBbMC40MywgMC4xMywgMC4yMywgMC45Nl0gfTtcclxuXHJcbmNvbnN0IFNjZW5lID0gKHsgaW5WaWV3LCB0cmVlLCByb3RhdGlvbiwgc3RhcnQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtyb3QsIHNldFJvdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lzU2Nyb2xsaW5nLCBzZXRJc1Njcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgICAgICAgaGlkZGVuOiB7IFxyXG4gICAgICAgICAgICBzY2FsZTogMCxcclxuICAgICAgICAgICAgcm90YXRlWDogOTAgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXNpYmxlOiB7XHJcbiAgICAgICAgICAgIHNjYWxlOiAxLjUsXHJcbiAgICAgICAgICAgIHJvdGF0ZVg6IDkwICogTWF0aC5QSSAvIDE4MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRzOiB7XHJcbiAgICAgICAgICAgIHNjYWxlOiBbMS41LCAwLjQ1LCAwLjQ1XSxcclxuICAgICAgICAgICAgeDogWzAsIDAsIDJdLFxyXG4gICAgICAgICAgICB5OiBbMCwgMCwgMS41XSxcclxuICAgICAgICAgICAgcm90YXRlWDogWzkwICogTWF0aC5QSSAvIDE4MCwgOTAgKiBNYXRoLlBJIC8gMTgwLCAwXVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgc2Nyb2xsVGltZW91dDtcclxuICAgICAgICAvLyBBZGQgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzU2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICBcclxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIHRpbWVvdXQgKGlmIGFueSkgYW5kIHNldCBhIG5ldyBvbmVcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xyXG4gICAgICAgICAgICBzY3JvbGxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SXNTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCAxMDApOyAvLyBBZGp1c3QgdGhlIHRpbWVvdXQgZHVyYXRpb24gYXMgbmVlZGVkXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IEVuYWJsZVJlbmRlciA9ICgpID0+IHVzZUZyYW1lKChfLCBkZWx0YSkgPT4ge1xyXG4gICAgICAgIGxldCByID0gcm90XHJcblxyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gaXNTY3JvbGxpbmcgPyBkZWx0YSAqIDAuMSA6IGRlbHRhICogMC4wMDVcclxuICAgICAgICByICs9IHNwZWVkXHJcblxyXG4gICAgICAgIHNldFJvdChyKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBEaXNhYmxlUmVuZGVyID0gKCkgPT4gdXNlRnJhbWUoKCkgPT4gbnVsbCwgMTAwMClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpblZpZXcgPyA8RW5hYmxlUmVuZGVyIC8+IDogPERpc2FibGVSZW5kZXIgLz59XHJcblxyXG4gICAgICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MX0gY29sb3I9XCIjYjBiMGIwXCIvPlxyXG4gICAgICAgICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17Mn0gaW50ZW5zaXR5PXs1fS8+XHJcbiAgICAgICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXstMn0gaW50ZW5zaXR5PXs1fS8+XHJcbiAgICAgICAgICAgIHt0cmVlICYmICggXHJcbiAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNYWluICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ubWVzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17c3RhcnQgPyBbJ3N0YXJ0cyddOiAndmlzaWJsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb24teT17cm90fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb25lIG9iamVjdD17dHJlZS5zY2VuZXNbMF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ubWVzaD4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gIHhtYXNzdHJlZSgge3RyZWUsIHN0YXJ0fSApIHtcclxuXHJcbiAgICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoKVxyXG5cclxuICAgIGNvbnN0IHJvdGF0aW9uID0gMFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyZWV9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgPENhbnZhcz5cclxuICAgICAgICAgICAgICAgIDxTY2VuZSBpblZpZXc9e2luVmlld30gdHJlZT17dHJlZX0gcm90YXRpb249e3JvdGF0aW9ufSBzdGFydD17c3RhcnR9Lz5cclxuICAgICAgICAgICAgPC9DYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiU3VzcGVuc2UiLCJ1c2VTdGF0ZSIsIkNhbnZhcyIsInVzZUZyYW1lIiwic3R5bGVzIiwiQ2xvbmUiLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiU2NlbmUiLCJpblZpZXciLCJ0cmVlIiwicm90YXRpb24iLCJzdGFydCIsInJvdCIsInNldFJvdCIsImlzU2Nyb2xsaW5nIiwic2V0SXNTY3JvbGxpbmciLCJ2YXJpYW50cyIsImhpZGRlbiIsInNjYWxlIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInZpc2libGUiLCJzdGFydHMiLCJ4IiwieSIsInNjcm9sbFRpbWVvdXQiLCJoYW5kbGVTY3JvbGwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFbmFibGVSZW5kZXIiLCJfIiwiZGVsdGEiLCJyIiwic3BlZWQiLCJEaXNhYmxlUmVuZGVyIiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5IiwiY29sb3IiLCJwb2ludExpZ2h0IiwicG9zaXRpb24iLCJmYWxsYmFjayIsIm1lc2giLCJpbml0aWFsIiwiYW5pbWF0ZSIsInJvdGF0aW9uLXkiLCJvYmplY3QiLCJzY2VuZXMiLCJ4bWFzc3RyZWUiLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/xmass_tree/index.js\n"));

/***/ })

});