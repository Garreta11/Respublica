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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ xmasstree; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-dc6125bc.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xmass_tree.module.scss */ \"(app-pages-browser)/./app/components/xmass_tree/xmass_tree.module.scss\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Clone.js\");\n/* harmony import */ var framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion-3d */ \"(app-pages-browser)/./node_modules/framer-motion-3d/dist/es/render/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst transition = {\n    duration: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst transitionImage = {\n    duration: 2,\n    delay: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst Scene = (param)=>{\n    let { inView, tree, starTexture, start } = param;\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const [rot, setRot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        hidden: {\n            scale: 0,\n            rotateX: 90 * Math.PI / 180\n        },\n        visible: {\n            scale: 1.5,\n            rotateX: 90 * Math.PI / 180\n        },\n        starts: {\n            scale: [\n                1.5,\n                0.45,\n                0.45\n            ],\n            x: [\n                0,\n                0,\n                2\n            ],\n            y: [\n                0,\n                0,\n                1.5\n            ],\n            rotateX: [\n                90 * Math.PI / 180,\n                90 * Math.PI / 180,\n                0\n            ]\n        }\n    };\n    const variantsImage = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let scrollTimeout;\n        // Add scroll event listener when the component mounts\n        const handleScroll = ()=>{\n            setIsScrolling(true);\n            // Clear the previous timeout (if any) and set a new one\n            clearTimeout(scrollTimeout);\n            scrollTimeout = setTimeout(()=>{\n                setIsScrolling(false);\n            }, 100); // Adjust the timeout duration as needed\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const EnableRender = ()=>{\n        _s1();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)((_, delta)=>{\n            let r = rot;\n            const speed = isScrolling ? delta * 1 : delta * 0.1;\n            r += speed;\n            setRot(r);\n        });\n    };\n    _s1(EnableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    const DisableRender = ()=>{\n        _s2();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)(()=>null, 1000);\n    };\n    _s2(DisableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            inView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EnableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 23\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 42\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 1,\n                color: \"#b0b0b0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: 2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: -2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            starTexture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                variants: variantsImage,\n                initial: \"hidden\",\n                animate: \"visible\",\n                transition: transitionImage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 94,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                        transparent: true,\n                        map: starTexture\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 17\n            }, undefined),\n            tree && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                    initial: \"hidden\",\n                    animate: start ? [\n                        \"starts\"\n                    ] : \"visible\",\n                    variants: variants,\n                    transition: transition,\n                    \"rotation-y\": rot,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Clone, {\n                        object: tree.scenes[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 108,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                    lineNumber: 101,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 99,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Scene, \"qzJlXBjDyjfTTbo4g7bqS9Iu9OY=\");\n_c = Scene;\nfunction xmasstree(param) {\n    let { tree, start, starTexture } = param;\n    _s1();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const rotation = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tree),\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.Canvas, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {\n                inView: inView,\n                starTexture: starTexture,\n                tree: tree,\n                rotation: rotation,\n                start: start\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 125,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n            lineNumber: 124,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n        lineNumber: 123,\n        columnNumber: 9\n    }, this);\n}\n_s1(xmasstree, \"oyd/E8SD7Fx4uOp6P7gVV2pVlaE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3htYXNzX3RyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2RDtBQUNSO0FBQ1I7QUFDSDtBQUVhO0FBQ2Q7QUFFYztBQUd2RCxNQUFNWSxhQUFhO0lBQUVDLFVBQVU7SUFBR0MsTUFBTTtRQUFDO1FBQU07UUFBTTtRQUFNO0tBQUs7QUFBQztBQUNqRSxNQUFNQyxrQkFBa0I7SUFBRUYsVUFBVTtJQUFHRyxPQUFPO0lBQUdGLE1BQU07UUFBQztRQUFNO1FBQU07UUFBTTtLQUFLO0FBQUM7QUFFaEYsTUFBTUcsUUFBUTtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRTs7O0lBRS9DLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXVCLFdBQVc7UUFDYkMsUUFBUTtZQUNKQyxPQUFPO1lBQ1BDLFNBQVMsS0FBS0MsS0FBS0MsRUFBRSxHQUFHO1FBQzVCO1FBQ0FDLFNBQVM7WUFDTEosT0FBTztZQUNQQyxTQUFTLEtBQUtDLEtBQUtDLEVBQUUsR0FBRztRQUM1QjtRQUNBRSxRQUFRO1lBQ0pMLE9BQU87Z0JBQUM7Z0JBQUs7Z0JBQU07YUFBSztZQUN4Qk0sR0FBRztnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQ1pDLEdBQUc7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBSTtZQUNkTixTQUFTO2dCQUFDLEtBQUtDLEtBQUtDLEVBQUUsR0FBRztnQkFBSyxLQUFLRCxLQUFLQyxFQUFFLEdBQUc7Z0JBQUs7YUFBRTtRQUN4RDtJQUNKO0lBRUEsTUFBTUssZ0JBQWdCO1FBQ2xCVCxRQUFRO1lBQ0pVLFNBQVM7UUFDYjtRQUNBTCxTQUFTO1lBQ0xLLFNBQVM7UUFDYjtJQUNKO0lBRUFyQyxnREFBU0EsQ0FBQztRQUNOLElBQUlzQztRQUNKLHNEQUFzRDtRQUN0RCxNQUFNQyxlQUFlO1lBQ2pCZCxlQUFlO1lBRWYsd0RBQXdEO1lBQ3hEZSxhQUFhRjtZQUNiQSxnQkFBZ0JHLFdBQVc7Z0JBQ3pCaEIsZUFBZTtZQUNqQixHQUFHLE1BQU0sd0NBQXdDO1FBQ3JEO1FBRUFpQixPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUVsQywwREFBMEQ7UUFDMUQsT0FBTztZQUNMRyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1NLGVBQWU7O1FBQU14QyxPQUFBQSxxREFBUUEsQ0FBQyxDQUFDeUMsR0FBR0M7WUFDcEMsSUFBSUMsSUFBSTFCO1lBRVIsTUFBTTJCLFFBQVF6QixjQUFjdUIsUUFBUSxJQUFJQSxRQUFRO1lBQ2hEQyxLQUFLQztZQUVMMUIsT0FBT3lCO1FBQ1g7SUFBQztRQVBLSDs7WUFBcUJ4QyxpREFBUUE7OztJQVNuQyxNQUFNNkMsZ0JBQWdCOztRQUFNN0MsT0FBQUEscURBQVFBLENBQUMsSUFBTSxNQUFNO0lBQUk7UUFBL0M2Qzs7WUFBc0I3QyxpREFBUUE7OztJQUVwQyxxQkFDSTs7WUFDS2EsdUJBQVMsOERBQUMyQjs7OzswQ0FBa0IsOERBQUNLOzs7OzswQkFFOUIsOERBQUNDO2dCQUFhQyxXQUFXO2dCQUFHQyxPQUFNOzs7Ozs7MEJBQ2xDLDhEQUFDQztnQkFBV0MsVUFBVTtnQkFBR0gsV0FBVzs7Ozs7OzBCQUNwQyw4REFBQ0U7Z0JBQVdDLFVBQVUsQ0FBQztnQkFBR0gsV0FBVzs7Ozs7O1lBQ3BDaEMsNkJBQ0csOERBQUNWLG9EQUFNQSxDQUFDOEMsSUFBSTtnQkFDUjlCLFVBQVVVO2dCQUNWcUIsU0FBUTtnQkFDUkMsU0FBUTtnQkFDUjlDLFlBQVlHOztrQ0FFWiw4REFBQzRDOzs7OztrQ0FDRCw4REFBQ0M7d0JBQWtCQyxXQUFXO3dCQUFDQyxLQUFLMUM7Ozs7Ozs7Ozs7OztZQUczQ0Qsc0JBQ0csOERBQUNqQiwyQ0FBUUE7Z0JBQUM2RCxVQUFVOzBCQUVoQiw0RUFBQ3JELG9EQUFNQSxDQUFDOEMsSUFBSTtvQkFDUkMsU0FBUTtvQkFDUkMsU0FBU3JDLFFBQVE7d0JBQUM7cUJBQVMsR0FBRTtvQkFDN0JLLFVBQVVBO29CQUNWZCxZQUFZQTtvQkFDWm9ELGNBQVkxQzs4QkFFWiw0RUFBQ2Ysb0RBQUtBO3dCQUFDMEQsUUFBUTlDLEtBQUsrQyxNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJEO0dBakdNakQ7S0FBQUE7QUFtR1MsU0FBVWtELFVBQVcsS0FBMEI7UUFBMUIsRUFBQ2hELElBQUksRUFBRUUsS0FBSyxFQUFFRCxXQUFXLEVBQUMsR0FBMUI7O0lBRWhDLE1BQU0sRUFBRWdELEdBQUcsRUFBRWxELE1BQU0sRUFBRSxHQUFHUCxzRUFBU0E7SUFFakMsTUFBTTBELFdBQVc7SUFFakIscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdqRSxxRUFBVztRQUFFOEQsS0FBS0E7a0JBQzlCLDRFQUFDaEUsc0RBQU1BO3NCQUNILDRFQUFDYTtnQkFBTUMsUUFBUUE7Z0JBQVFFLGFBQWFBO2dCQUFhRCxNQUFNQTtnQkFBTWtELFVBQVVBO2dCQUFVaEQsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEc7SUFieUI4Qzs7UUFFR3hELGtFQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy94bWFzc190cmVlL2luZGV4LmpzP2Y2MDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgU3VzcGVuc2UsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3htYXNzX3RyZWUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IENsb25lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xyXG5cclxuaW1wb3J0IHsgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uLTNkXCJcclxuXHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcclxuXHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0geyBkdXJhdGlvbjogNSwgZWFzZTogWzAuNDMsIDAuMTMsIDAuMjMsIDAuOTZdIH07XHJcbmNvbnN0IHRyYW5zaXRpb25JbWFnZSA9IHsgZHVyYXRpb246IDIsIGRlbGF5OiA1LCBlYXNlOiBbMC40MywgMC4xMywgMC4yMywgMC45Nl0gfTtcclxuXHJcbmNvbnN0IFNjZW5lID0gKHsgaW5WaWV3LCB0cmVlLCBzdGFyVGV4dHVyZSwgc3RhcnQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtyb3QsIHNldFJvdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lzU2Nyb2xsaW5nLCBzZXRJc1Njcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgICAgICAgaGlkZGVuOiB7IFxyXG4gICAgICAgICAgICBzY2FsZTogMCxcclxuICAgICAgICAgICAgcm90YXRlWDogOTAgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXNpYmxlOiB7XHJcbiAgICAgICAgICAgIHNjYWxlOiAxLjUsXHJcbiAgICAgICAgICAgIHJvdGF0ZVg6IDkwICogTWF0aC5QSSAvIDE4MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRzOiB7XHJcbiAgICAgICAgICAgIHNjYWxlOiBbMS41LCAwLjQ1LCAwLjQ1XSxcclxuICAgICAgICAgICAgeDogWzAsIDAsIDJdLFxyXG4gICAgICAgICAgICB5OiBbMCwgMCwgMS41XSxcclxuICAgICAgICAgICAgcm90YXRlWDogWzkwICogTWF0aC5QSSAvIDE4MCwgOTAgKiBNYXRoLlBJIC8gMTgwLCAwXVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFyaWFudHNJbWFnZSA9IHtcclxuICAgICAgICBoaWRkZW46IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlzaWJsZToge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNjcm9sbFRpbWVvdXQ7XHJcbiAgICAgICAgLy8gQWRkIHNjcm9sbCBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc1Njcm9sbGluZyh0cnVlKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBwcmV2aW91cyB0aW1lb3V0IChpZiBhbnkpIGFuZCBzZXQgYSBuZXcgb25lXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0KTtcclxuICAgICAgICAgICAgc2Nyb2xsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldElzU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSwgMTAwKTsgLy8gQWRqdXN0IHRoZSB0aW1lb3V0IGR1cmF0aW9uIGFzIG5lZWRlZFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIFxyXG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBFbmFibGVSZW5kZXIgPSAoKSA9PiB1c2VGcmFtZSgoXywgZGVsdGEpID0+IHtcclxuICAgICAgICBsZXQgciA9IHJvdFxyXG5cclxuICAgICAgICBjb25zdCBzcGVlZCA9IGlzU2Nyb2xsaW5nID8gZGVsdGEgKiAxIDogZGVsdGEgKiAwLjFcclxuICAgICAgICByICs9IHNwZWVkXHJcblxyXG4gICAgICAgIHNldFJvdChyKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBEaXNhYmxlUmVuZGVyID0gKCkgPT4gdXNlRnJhbWUoKCkgPT4gbnVsbCwgMTAwMClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpblZpZXcgPyA8RW5hYmxlUmVuZGVyIC8+IDogPERpc2FibGVSZW5kZXIgLz59XHJcblxyXG4gICAgICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MX0gY29sb3I9XCIjYjBiMGIwXCIvPlxyXG4gICAgICAgICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17Mn0gaW50ZW5zaXR5PXs1fS8+XHJcbiAgICAgICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXstMn0gaW50ZW5zaXR5PXs1fS8+XHJcbiAgICAgICAgICAgIHtzdGFyVGV4dHVyZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLm1lc2hcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHNJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbkltYWdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwbGFuZUdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1lc2hCYXNpY01hdGVyaWFsIHRyYW5zcGFyZW50IG1hcD17c3RhclRleHR1cmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5tZXNoPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dHJlZSAmJiAoIFxyXG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTWFpbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLm1lc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3N0YXJ0ID8gWydzdGFydHMnXTogJ3Zpc2libGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uLXk9e3JvdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9uZSBvYmplY3Q9e3RyZWUuc2NlbmVzWzBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLm1lc2g+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICB4bWFzc3RyZWUoIHt0cmVlLCBzdGFydCwgc3RhclRleHR1cmV9ICkge1xyXG5cclxuICAgIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpXHJcblxyXG4gICAgY29uc3Qgcm90YXRpb24gPSAwXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlZX0gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8Q2FudmFzPlxyXG4gICAgICAgICAgICAgICAgPFNjZW5lIGluVmlldz17aW5WaWV3fSBzdGFyVGV4dHVyZT17c3RhclRleHR1cmV9IHRyZWU9e3RyZWV9IHJvdGF0aW9uPXtyb3RhdGlvbn0gc3RhcnQ9e3N0YXJ0fS8+XHJcbiAgICAgICAgICAgIDwvQ2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIlN1c3BlbnNlIiwidXNlU3RhdGUiLCJDYW52YXMiLCJ1c2VGcmFtZSIsInN0eWxlcyIsIkNsb25lIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwibW90aW9uIiwidXNlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInRyYW5zaXRpb25JbWFnZSIsImRlbGF5IiwiU2NlbmUiLCJpblZpZXciLCJ0cmVlIiwic3RhclRleHR1cmUiLCJzdGFydCIsInJvdCIsInNldFJvdCIsImlzU2Nyb2xsaW5nIiwic2V0SXNTY3JvbGxpbmciLCJ2YXJpYW50cyIsImhpZGRlbiIsInNjYWxlIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInZpc2libGUiLCJzdGFydHMiLCJ4IiwieSIsInZhcmlhbnRzSW1hZ2UiLCJvcGFjaXR5Iiwic2Nyb2xsVGltZW91dCIsImhhbmRsZVNjcm9sbCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVuYWJsZVJlbmRlciIsIl8iLCJkZWx0YSIsInIiLCJzcGVlZCIsIkRpc2FibGVSZW5kZXIiLCJhbWJpZW50TGlnaHQiLCJpbnRlbnNpdHkiLCJjb2xvciIsInBvaW50TGlnaHQiLCJwb3NpdGlvbiIsIm1lc2giLCJpbml0aWFsIiwiYW5pbWF0ZSIsInBsYW5lR2VvbWV0cnkiLCJtZXNoQmFzaWNNYXRlcmlhbCIsInRyYW5zcGFyZW50IiwibWFwIiwiZmFsbGJhY2siLCJyb3RhdGlvbi15Iiwib2JqZWN0Iiwic2NlbmVzIiwieG1hc3N0cmVlIiwicmVmIiwicm90YXRpb24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/xmass_tree/index.js\n"));

/***/ })

});