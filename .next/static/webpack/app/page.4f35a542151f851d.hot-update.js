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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ xmasstree; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-dc6125bc.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xmass_tree.module.scss */ \"(app-pages-browser)/./app/components/xmass_tree/xmass_tree.module.scss\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Clone.js\");\n/* harmony import */ var framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion-3d */ \"(app-pages-browser)/./node_modules/framer-motion-3d/dist/es/render/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst transition = {\n    duration: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst transitionImage = {\n    duration: 2,\n    delay: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst Scene = (param)=>{\n    let { inView, tree, starTexture, start } = param;\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const [rot, setRot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        hidden: {\n            scale: 0,\n            rotateX: 90 * Math.PI / 180\n        },\n        visible: {\n            scale: 1.5,\n            rotateX: 90 * Math.PI / 180\n        },\n        starts: {\n            scale: [\n                1.5,\n                0.45,\n                0.45\n            ],\n            x: [\n                0,\n                0,\n                2\n            ],\n            y: [\n                0,\n                0,\n                1.5\n            ],\n            rotateX: [\n                90 * Math.PI / 180,\n                90 * Math.PI / 180,\n                0\n            ]\n        }\n    };\n    const variantsImage = {\n        hidden: {\n            opacity: 0,\n            scale: 0\n        },\n        visible: {\n            opacity: 1,\n            scale: 1\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let scrollTimeout;\n        // Add scroll event listener when the component mounts\n        const handleScroll = ()=>{\n            setIsScrolling(true);\n            // Clear the previous timeout (if any) and set a new one\n            clearTimeout(scrollTimeout);\n            scrollTimeout = setTimeout(()=>{\n                setIsScrolling(false);\n            }, 100); // Adjust the timeout duration as needed\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const EnableRender = ()=>{\n        _s1();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)((_, delta)=>{\n            let r = rot;\n            const speed = isScrolling ? delta * 1 : delta * 0.1;\n            r += speed;\n            setRot(r);\n        });\n    };\n    _s1(EnableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    const DisableRender = ()=>{\n        _s2();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)(()=>null, 1000);\n    };\n    _s2(DisableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            inView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EnableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 23\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 42\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 1,\n                color: \"#b0b0b0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: 2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: -2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            starTexture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                variants: variantsImage,\n                initial: \"hidden\",\n                animate: start ? \"visible\" : \"\",\n                transition: transitionImage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                        transparent: true,\n                        map: starTexture\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 17\n            }, undefined),\n            tree && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                    initial: \"hidden\",\n                    animate: start ? [\n                        \"starts\"\n                    ] : \"visible\",\n                    variants: variants,\n                    transition: transition,\n                    \"rotation-y\": rot,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Clone, {\n                        object: tree.scenes[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 110,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                    lineNumber: 103,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Scene, \"qzJlXBjDyjfTTbo4g7bqS9Iu9OY=\");\n_c = Scene;\nfunction xmasstree(param) {\n    let { tree, start, starTexture } = param;\n    _s1();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const rotation = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tree),\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.Canvas, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {\n                inView: inView,\n                starTexture: starTexture,\n                tree: tree,\n                rotation: rotation,\n                start: start\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 127,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n            lineNumber: 126,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n        lineNumber: 125,\n        columnNumber: 9\n    }, this);\n}\n_s1(xmasstree, \"oyd/E8SD7Fx4uOp6P7gVV2pVlaE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3htYXNzX3RyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2RDtBQUNSO0FBQ1I7QUFDSDtBQUVhO0FBQ2Q7QUFFYztBQUd2RCxNQUFNWSxhQUFhO0lBQUVDLFVBQVU7SUFBR0MsTUFBTTtRQUFDO1FBQU07UUFBTTtRQUFNO0tBQUs7QUFBQztBQUNqRSxNQUFNQyxrQkFBa0I7SUFBRUYsVUFBVTtJQUFHRyxPQUFPO0lBQUdGLE1BQU07UUFBQztRQUFNO1FBQU07UUFBTTtLQUFLO0FBQUM7QUFFaEYsTUFBTUcsUUFBUTtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRTs7O0lBRS9DLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXVCLFdBQVc7UUFDYkMsUUFBUTtZQUNKQyxPQUFPO1lBQ1BDLFNBQVMsS0FBS0MsS0FBS0MsRUFBRSxHQUFHO1FBQzVCO1FBQ0FDLFNBQVM7WUFDTEosT0FBTztZQUNQQyxTQUFTLEtBQUtDLEtBQUtDLEVBQUUsR0FBRztRQUM1QjtRQUNBRSxRQUFRO1lBQ0pMLE9BQU87Z0JBQUM7Z0JBQUs7Z0JBQU07YUFBSztZQUN4Qk0sR0FBRztnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQ1pDLEdBQUc7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBSTtZQUNkTixTQUFTO2dCQUFDLEtBQUtDLEtBQUtDLEVBQUUsR0FBRztnQkFBSyxLQUFLRCxLQUFLQyxFQUFFLEdBQUc7Z0JBQUs7YUFBRTtRQUN4RDtJQUNKO0lBRUEsTUFBTUssZ0JBQWdCO1FBQ2xCVCxRQUFRO1lBQ0pVLFNBQVM7WUFDVFQsT0FBTztRQUNYO1FBQ0FJLFNBQVM7WUFDTEssU0FBUztZQUNUVCxPQUFPO1FBQ1g7SUFDSjtJQUVBNUIsZ0RBQVNBLENBQUM7UUFDTixJQUFJc0M7UUFDSixzREFBc0Q7UUFDdEQsTUFBTUMsZUFBZTtZQUNqQmQsZUFBZTtZQUVmLHdEQUF3RDtZQUN4RGUsYUFBYUY7WUFDYkEsZ0JBQWdCRyxXQUFXO2dCQUN6QmhCLGVBQWU7WUFDakIsR0FBRyxNQUFNLHdDQUF3QztRQUNyRDtRQUVBaUIsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsMERBQTBEO1FBQzFELE9BQU87WUFDTEcsT0FBT0UsbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNTSxlQUFlOztRQUFNeEMsT0FBQUEscURBQVFBLENBQUMsQ0FBQ3lDLEdBQUdDO1lBQ3BDLElBQUlDLElBQUkxQjtZQUVSLE1BQU0yQixRQUFRekIsY0FBY3VCLFFBQVEsSUFBSUEsUUFBUTtZQUNoREMsS0FBS0M7WUFFTDFCLE9BQU95QjtRQUNYO0lBQUM7UUFQS0g7O1lBQXFCeEMsaURBQVFBOzs7SUFTbkMsTUFBTTZDLGdCQUFnQjs7UUFBTTdDLE9BQUFBLHFEQUFRQSxDQUFDLElBQU0sTUFBTTtJQUFJO1FBQS9DNkM7O1lBQXNCN0MsaURBQVFBOzs7SUFFcEMscUJBQ0k7O1lBQ0thLHVCQUFTLDhEQUFDMkI7Ozs7MENBQWtCLDhEQUFDSzs7Ozs7MEJBRTlCLDhEQUFDQztnQkFBYUMsV0FBVztnQkFBR0MsT0FBTTs7Ozs7OzBCQUNsQyw4REFBQ0M7Z0JBQVdDLFVBQVU7Z0JBQUdILFdBQVc7Ozs7OzswQkFDcEMsOERBQUNFO2dCQUFXQyxVQUFVLENBQUM7Z0JBQUdILFdBQVc7Ozs7OztZQUNwQ2hDLDZCQUNHLDhEQUFDVixvREFBTUEsQ0FBQzhDLElBQUk7Z0JBQ1I5QixVQUFVVTtnQkFDVnFCLFNBQVE7Z0JBQ1JDLFNBQVNyQyxRQUFRLFlBQVk7Z0JBQzdCVCxZQUFZRzs7a0NBRVosOERBQUM0Qzs7Ozs7a0NBQ0QsOERBQUNDO3dCQUFrQkMsV0FBVzt3QkFBQ0MsS0FBSzFDOzs7Ozs7Ozs7Ozs7WUFHM0NELHNCQUNHLDhEQUFDakIsMkNBQVFBO2dCQUFDNkQsVUFBVTswQkFFaEIsNEVBQUNyRCxvREFBTUEsQ0FBQzhDLElBQUk7b0JBQ1JDLFNBQVE7b0JBQ1JDLFNBQVNyQyxRQUFRO3dCQUFDO3FCQUFTLEdBQUU7b0JBQzdCSyxVQUFVQTtvQkFDVmQsWUFBWUE7b0JBQ1pvRCxjQUFZMUM7OEJBRVosNEVBQUNmLG9EQUFLQTt3QkFBQzBELFFBQVE5QyxLQUFLK0MsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRDtHQW5HTWpEO0tBQUFBO0FBcUdTLFNBQVVrRCxVQUFXLEtBQTBCO1FBQTFCLEVBQUNoRCxJQUFJLEVBQUVFLEtBQUssRUFBRUQsV0FBVyxFQUFDLEdBQTFCOztJQUVoQyxNQUFNLEVBQUVnRCxHQUFHLEVBQUVsRCxNQUFNLEVBQUUsR0FBR1Asc0VBQVNBO0lBRWpDLE1BQU0wRCxXQUFXO0lBRWpCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXakUscUVBQVc7UUFBRThELEtBQUtBO2tCQUM5Qiw0RUFBQ2hFLHNEQUFNQTtzQkFDSCw0RUFBQ2E7Z0JBQU1DLFFBQVFBO2dCQUFRRSxhQUFhQTtnQkFBYUQsTUFBTUE7Z0JBQU1rRCxVQUFVQTtnQkFBVWhELE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXhHO0lBYnlCOEM7O1FBRUd4RCxrRUFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMveG1hc3NfdHJlZS9pbmRleC5qcz9mNjA2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIFN1c3BlbnNlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi94bWFzc190cmVlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBDbG9uZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJztcclxuXHJcbmltcG9ydCB7IHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvbi0zZFwiXHJcblxyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInXHJcblxyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDUsIGVhc2U6IFswLjQzLCAwLjEzLCAwLjIzLCAwLjk2XSB9O1xyXG5jb25zdCB0cmFuc2l0aW9uSW1hZ2UgPSB7IGR1cmF0aW9uOiAyLCBkZWxheTogNSwgZWFzZTogWzAuNDMsIDAuMTMsIDAuMjMsIDAuOTZdIH07XHJcblxyXG5jb25zdCBTY2VuZSA9ICh7IGluVmlldywgdHJlZSwgc3RhclRleHR1cmUsIHN0YXJ0IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbcm90LCBzZXRSb3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpc1Njcm9sbGluZywgc2V0SXNTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xyXG4gICAgICAgIGhpZGRlbjogeyBcclxuICAgICAgICAgICAgc2NhbGU6IDAsXHJcbiAgICAgICAgICAgIHJvdGF0ZVg6IDkwICogTWF0aC5QSSAvIDE4MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlzaWJsZToge1xyXG4gICAgICAgICAgICBzY2FsZTogMS41LFxyXG4gICAgICAgICAgICByb3RhdGVYOiA5MCAqIE1hdGguUEkgLyAxODBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0czoge1xyXG4gICAgICAgICAgICBzY2FsZTogWzEuNSwgMC40NSwgMC40NV0sXHJcbiAgICAgICAgICAgIHg6IFswLCAwLCAyXSxcclxuICAgICAgICAgICAgeTogWzAsIDAsIDEuNV0sXHJcbiAgICAgICAgICAgIHJvdGF0ZVg6IFs5MCAqIE1hdGguUEkgLyAxODAsIDkwICogTWF0aC5QSSAvIDE4MCwgMF1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhcmlhbnRzSW1hZ2UgPSB7XHJcbiAgICAgICAgaGlkZGVuOiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHNjYWxlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXNpYmxlOiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHNjYWxlOiAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNjcm9sbFRpbWVvdXQ7XHJcbiAgICAgICAgLy8gQWRkIHNjcm9sbCBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc1Njcm9sbGluZyh0cnVlKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBwcmV2aW91cyB0aW1lb3V0IChpZiBhbnkpIGFuZCBzZXQgYSBuZXcgb25lXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0KTtcclxuICAgICAgICAgICAgc2Nyb2xsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldElzU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSwgMTAwKTsgLy8gQWRqdXN0IHRoZSB0aW1lb3V0IGR1cmF0aW9uIGFzIG5lZWRlZFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIFxyXG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBFbmFibGVSZW5kZXIgPSAoKSA9PiB1c2VGcmFtZSgoXywgZGVsdGEpID0+IHtcclxuICAgICAgICBsZXQgciA9IHJvdFxyXG5cclxuICAgICAgICBjb25zdCBzcGVlZCA9IGlzU2Nyb2xsaW5nID8gZGVsdGEgKiAxIDogZGVsdGEgKiAwLjFcclxuICAgICAgICByICs9IHNwZWVkXHJcblxyXG4gICAgICAgIHNldFJvdChyKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBEaXNhYmxlUmVuZGVyID0gKCkgPT4gdXNlRnJhbWUoKCkgPT4gbnVsbCwgMTAwMClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpblZpZXcgPyA8RW5hYmxlUmVuZGVyIC8+IDogPERpc2FibGVSZW5kZXIgLz59XHJcblxyXG4gICAgICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MX0gY29sb3I9XCIjYjBiMGIwXCIvPlxyXG4gICAgICAgICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17Mn0gaW50ZW5zaXR5PXs1fS8+XHJcbiAgICAgICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXstMn0gaW50ZW5zaXR5PXs1fS8+XHJcbiAgICAgICAgICAgIHtzdGFyVGV4dHVyZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLm1lc2hcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHNJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtzdGFydCA/ICd2aXNpYmxlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb25JbWFnZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGxhbmVHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbCB0cmFuc3BhcmVudCBtYXA9e3N0YXJUZXh0dXJlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ubWVzaD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3RyZWUgJiYgKCBcclxuICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1haW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5tZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtzdGFydCA/IFsnc3RhcnRzJ106ICd2aXNpYmxlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvbi15PXtyb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvbmUgb2JqZWN0PXt0cmVlLnNjZW5lc1swXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5tZXNoPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAgeG1hc3N0cmVlKCB7dHJlZSwgc3RhcnQsIHN0YXJUZXh0dXJlfSApIHtcclxuXHJcbiAgICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoKVxyXG5cclxuICAgIGNvbnN0IHJvdGF0aW9uID0gMFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyZWV9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgPENhbnZhcz5cclxuICAgICAgICAgICAgICAgIDxTY2VuZSBpblZpZXc9e2luVmlld30gc3RhclRleHR1cmU9e3N0YXJUZXh0dXJlfSB0cmVlPXt0cmVlfSByb3RhdGlvbj17cm90YXRpb259IHN0YXJ0PXtzdGFydH0vPlxyXG4gICAgICAgICAgICA8L0NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJTdXNwZW5zZSIsInVzZVN0YXRlIiwiQ2FudmFzIiwidXNlRnJhbWUiLCJzdHlsZXMiLCJDbG9uZSIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIm1vdGlvbiIsInVzZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ0cmFuc2l0aW9uSW1hZ2UiLCJkZWxheSIsIlNjZW5lIiwiaW5WaWV3IiwidHJlZSIsInN0YXJUZXh0dXJlIiwic3RhcnQiLCJyb3QiLCJzZXRSb3QiLCJpc1Njcm9sbGluZyIsInNldElzU2Nyb2xsaW5nIiwidmFyaWFudHMiLCJoaWRkZW4iLCJzY2FsZSIsInJvdGF0ZVgiLCJNYXRoIiwiUEkiLCJ2aXNpYmxlIiwic3RhcnRzIiwieCIsInkiLCJ2YXJpYW50c0ltYWdlIiwib3BhY2l0eSIsInNjcm9sbFRpbWVvdXQiLCJoYW5kbGVTY3JvbGwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFbmFibGVSZW5kZXIiLCJfIiwiZGVsdGEiLCJyIiwic3BlZWQiLCJEaXNhYmxlUmVuZGVyIiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5IiwiY29sb3IiLCJwb2ludExpZ2h0IiwicG9zaXRpb24iLCJtZXNoIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJwbGFuZUdlb21ldHJ5IiwibWVzaEJhc2ljTWF0ZXJpYWwiLCJ0cmFuc3BhcmVudCIsIm1hcCIsImZhbGxiYWNrIiwicm90YXRpb24teSIsIm9iamVjdCIsInNjZW5lcyIsInhtYXNzdHJlZSIsInJlZiIsInJvdGF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/xmass_tree/index.js\n"));

/***/ })

});