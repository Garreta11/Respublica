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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ xmasstree; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-dc6125bc.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xmass_tree.module.scss */ \"(app-pages-browser)/./app/components/xmass_tree/xmass_tree.module.scss\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Clone.js\");\n/* harmony import */ var framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion-3d */ \"(app-pages-browser)/./node_modules/framer-motion-3d/dist/es/render/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst transition = {\n    duration: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst transitionImage = {\n    duration: 2,\n    delay: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst Scene = (param)=>{\n    let { inView, tree, starTexture, start } = param;\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const [rot, setRot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        hidden: {\n            scale: 0,\n            rotateX: 90 * Math.PI / 180\n        },\n        visible: {\n            scale: 1.5,\n            rotateX: 90 * Math.PI / 180\n        },\n        starts: {\n            scale: [\n                1.5,\n                0.45,\n                0.45\n            ],\n            x: [\n                0,\n                0,\n                2\n            ],\n            y: [\n                0,\n                0,\n                1.5\n            ],\n            rotateX: [\n                90 * Math.PI / 180,\n                90 * Math.PI / 180,\n                0\n            ]\n        }\n    };\n    const variantsImage = {\n        hidden: {\n            opacity: 0,\n            scale: 0\n        },\n        visible: {\n            opacity: 1,\n            scale: 1\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let scrollTimeout;\n        // Add scroll event listener when the component mounts\n        const handleScroll = ()=>{\n            setIsScrolling(true);\n            // Clear the previous timeout (if any) and set a new one\n            clearTimeout(scrollTimeout);\n            scrollTimeout = setTimeout(()=>{\n                setIsScrolling(false);\n            }, 100); // Adjust the timeout duration as needed\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const EnableRender = ()=>{\n        _s1();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)((_, delta)=>{\n            let r = rot;\n            const speed = isScrolling ? delta * 1 : delta * 0.1;\n            r += speed;\n            setRot(r);\n        });\n    };\n    _s1(EnableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    const DisableRender = ()=>{\n        _s2();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)(()=>null, 1000);\n    };\n    _s2(DisableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            inView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EnableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 23\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 42\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 1,\n                color: \"#b0b0b0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: 2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: -2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            starTexture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                position: [\n                    2,\n                    2.5,\n                    0\n                ],\n                variants: variantsImage,\n                initial: \"hidden\",\n                animate: start ? \"visible\" : \"\",\n                transition: transitionImage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                        transparent: true,\n                        map: starTexture\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 17\n            }, undefined),\n            tree && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                    initial: \"hidden\",\n                    animate: start ? [\n                        \"starts\"\n                    ] : \"visible\",\n                    variants: variants,\n                    transition: transition,\n                    \"rotation-y\": rot,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Clone, {\n                        object: tree.scenes[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 111,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                    lineNumber: 104,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 102,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Scene, \"qzJlXBjDyjfTTbo4g7bqS9Iu9OY=\");\n_c = Scene;\nfunction xmasstree(param) {\n    let { tree, start, starTexture } = param;\n    _s1();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const rotation = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tree),\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.Canvas, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {\n                inView: inView,\n                starTexture: starTexture,\n                tree: tree,\n                rotation: rotation,\n                start: start\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 128,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n            lineNumber: 127,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n        lineNumber: 126,\n        columnNumber: 9\n    }, this);\n}\n_s1(xmasstree, \"oyd/E8SD7Fx4uOp6P7gVV2pVlaE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3htYXNzX3RyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2RDtBQUNSO0FBQ1I7QUFDSDtBQUVhO0FBQ2Q7QUFFYztBQUd2RCxNQUFNWSxhQUFhO0lBQUVDLFVBQVU7SUFBR0MsTUFBTTtRQUFDO1FBQU07UUFBTTtRQUFNO0tBQUs7QUFBQztBQUNqRSxNQUFNQyxrQkFBa0I7SUFBRUYsVUFBVTtJQUFHRyxPQUFPO0lBQUdGLE1BQU07UUFBQztRQUFNO1FBQU07UUFBTTtLQUFLO0FBQUM7QUFFaEYsTUFBTUcsUUFBUTtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRTs7O0lBRS9DLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHcEIsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXVCLFdBQVc7UUFDYkMsUUFBUTtZQUNKQyxPQUFPO1lBQ1BDLFNBQVMsS0FBS0MsS0FBS0MsRUFBRSxHQUFHO1FBQzVCO1FBQ0FDLFNBQVM7WUFDTEosT0FBTztZQUNQQyxTQUFTLEtBQUtDLEtBQUtDLEVBQUUsR0FBRztRQUM1QjtRQUNBRSxRQUFRO1lBQ0pMLE9BQU87Z0JBQUM7Z0JBQUs7Z0JBQU07YUFBSztZQUN4Qk0sR0FBRztnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQ1pDLEdBQUc7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBSTtZQUNkTixTQUFTO2dCQUFDLEtBQUtDLEtBQUtDLEVBQUUsR0FBRztnQkFBSyxLQUFLRCxLQUFLQyxFQUFFLEdBQUc7Z0JBQUs7YUFBRTtRQUN4RDtJQUNKO0lBRUEsTUFBTUssZ0JBQWdCO1FBQ2xCVCxRQUFRO1lBQ0pVLFNBQVM7WUFDVFQsT0FBTztRQUNYO1FBQ0FJLFNBQVM7WUFDTEssU0FBUztZQUNUVCxPQUFPO1FBQ1g7SUFDSjtJQUVBNUIsZ0RBQVNBLENBQUM7UUFDTixJQUFJc0M7UUFDSixzREFBc0Q7UUFDdEQsTUFBTUMsZUFBZTtZQUNqQmQsZUFBZTtZQUVmLHdEQUF3RDtZQUN4RGUsYUFBYUY7WUFDYkEsZ0JBQWdCRyxXQUFXO2dCQUN6QmhCLGVBQWU7WUFDakIsR0FBRyxNQUFNLHdDQUF3QztRQUNyRDtRQUVBaUIsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsMERBQTBEO1FBQzFELE9BQU87WUFDTEcsT0FBT0UsbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNTSxlQUFlOztRQUFNeEMsT0FBQUEscURBQVFBLENBQUMsQ0FBQ3lDLEdBQUdDO1lBQ3BDLElBQUlDLElBQUkxQjtZQUVSLE1BQU0yQixRQUFRekIsY0FBY3VCLFFBQVEsSUFBSUEsUUFBUTtZQUNoREMsS0FBS0M7WUFFTDFCLE9BQU95QjtRQUNYO0lBQUM7UUFQS0g7O1lBQXFCeEMsaURBQVFBOzs7SUFTbkMsTUFBTTZDLGdCQUFnQjs7UUFBTTdDLE9BQUFBLHFEQUFRQSxDQUFDLElBQU0sTUFBTTtJQUFJO1FBQS9DNkM7O1lBQXNCN0MsaURBQVFBOzs7SUFFcEMscUJBQ0k7O1lBQ0thLHVCQUFTLDhEQUFDMkI7Ozs7MENBQWtCLDhEQUFDSzs7Ozs7MEJBRTlCLDhEQUFDQztnQkFBYUMsV0FBVztnQkFBR0MsT0FBTTs7Ozs7OzBCQUNsQyw4REFBQ0M7Z0JBQVdDLFVBQVU7Z0JBQUdILFdBQVc7Ozs7OzswQkFDcEMsOERBQUNFO2dCQUFXQyxVQUFVLENBQUM7Z0JBQUdILFdBQVc7Ozs7OztZQUNwQ2hDLDZCQUNHLDhEQUFDVixvREFBTUEsQ0FBQzhDLElBQUk7Z0JBQ1JELFVBQVU7b0JBQUM7b0JBQUc7b0JBQUs7aUJBQUU7Z0JBQ3JCN0IsVUFBVVU7Z0JBQ1ZxQixTQUFRO2dCQUNSQyxTQUFTckMsUUFBUSxZQUFZO2dCQUM3QlQsWUFBWUc7O2tDQUVaLDhEQUFDNEM7Ozs7O2tDQUNELDhEQUFDQzt3QkFBa0JDLFdBQVc7d0JBQUNDLEtBQUsxQzs7Ozs7Ozs7Ozs7O1lBRzNDRCxzQkFDRyw4REFBQ2pCLDJDQUFRQTtnQkFBQzZELFVBQVU7MEJBRWhCLDRFQUFDckQsb0RBQU1BLENBQUM4QyxJQUFJO29CQUNSQyxTQUFRO29CQUNSQyxTQUFTckMsUUFBUTt3QkFBQztxQkFBUyxHQUFFO29CQUM3QkssVUFBVUE7b0JBQ1ZkLFlBQVlBO29CQUNab0QsY0FBWTFDOzhCQUVaLDRFQUFDZixvREFBS0E7d0JBQUMwRCxRQUFROUMsS0FBSytDLE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0FwR01qRDtLQUFBQTtBQXNHUyxTQUFVa0QsVUFBVyxLQUEwQjtRQUExQixFQUFDaEQsSUFBSSxFQUFFRSxLQUFLLEVBQUVELFdBQVcsRUFBQyxHQUExQjs7SUFFaEMsTUFBTSxFQUFFZ0QsR0FBRyxFQUFFbEQsTUFBTSxFQUFFLEdBQUdQLHNFQUFTQTtJQUVqQyxNQUFNMEQsV0FBVztJQUVqQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV2pFLHFFQUFXO1FBQUU4RCxLQUFLQTtrQkFDOUIsNEVBQUNoRSxzREFBTUE7c0JBQ0gsNEVBQUNhO2dCQUFNQyxRQUFRQTtnQkFBUUUsYUFBYUE7Z0JBQWFELE1BQU1BO2dCQUFNa0QsVUFBVUE7Z0JBQVVoRCxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQUl4RztJQWJ5QjhDOztRQUVHeEQsa0VBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3htYXNzX3RyZWUvaW5kZXguanM/ZjYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCBTdXNwZW5zZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FudmFzLCB1c2VGcmFtZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4veG1hc3NfdHJlZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQ2xvbmUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XHJcblxyXG5pbXBvcnQgeyB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb24tM2RcIlxyXG5cclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xyXG5cclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiA1LCBlYXNlOiBbMC40MywgMC4xMywgMC4yMywgMC45Nl0gfTtcclxuY29uc3QgdHJhbnNpdGlvbkltYWdlID0geyBkdXJhdGlvbjogMiwgZGVsYXk6IDUsIGVhc2U6IFswLjQzLCAwLjEzLCAwLjIzLCAwLjk2XSB9O1xyXG5cclxuY29uc3QgU2NlbmUgPSAoeyBpblZpZXcsIHRyZWUsIHN0YXJUZXh0dXJlLCBzdGFydCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3JvdCwgc2V0Um90XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbaXNTY3JvbGxpbmcsIHNldElzU2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgICBoaWRkZW46IHsgXHJcbiAgICAgICAgICAgIHNjYWxlOiAwLFxyXG4gICAgICAgICAgICByb3RhdGVYOiA5MCAqIE1hdGguUEkgLyAxODBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpc2libGU6IHtcclxuICAgICAgICAgICAgc2NhbGU6IDEuNSxcclxuICAgICAgICAgICAgcm90YXRlWDogOTAgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydHM6IHtcclxuICAgICAgICAgICAgc2NhbGU6IFsxLjUsIDAuNDUsIDAuNDVdLFxyXG4gICAgICAgICAgICB4OiBbMCwgMCwgMl0sXHJcbiAgICAgICAgICAgIHk6IFswLCAwLCAxLjVdLFxyXG4gICAgICAgICAgICByb3RhdGVYOiBbOTAgKiBNYXRoLlBJIC8gMTgwLCA5MCAqIE1hdGguUEkgLyAxODAsIDBdXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YXJpYW50c0ltYWdlID0ge1xyXG4gICAgICAgIGhpZGRlbjoge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICBzY2FsZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlzaWJsZToge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBzY3JvbGxUaW1lb3V0O1xyXG4gICAgICAgIC8vIEFkZCBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgcHJldmlvdXMgdGltZW91dCAoaWYgYW55KSBhbmQgc2V0IGEgbmV3IG9uZVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dCk7XHJcbiAgICAgICAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJc1Njcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7IC8vIEFkanVzdCB0aGUgdGltZW91dCBkdXJhdGlvbiBhcyBuZWVkZWRcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBcclxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgRW5hYmxlUmVuZGVyID0gKCkgPT4gdXNlRnJhbWUoKF8sIGRlbHRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSByb3RcclxuXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc1Njcm9sbGluZyA/IGRlbHRhICogMSA6IGRlbHRhICogMC4xXHJcbiAgICAgICAgciArPSBzcGVlZFxyXG5cclxuICAgICAgICBzZXRSb3QocilcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgRGlzYWJsZVJlbmRlciA9ICgpID0+IHVzZUZyYW1lKCgpID0+IG51bGwsIDEwMDApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW5WaWV3ID8gPEVuYWJsZVJlbmRlciAvPiA6IDxEaXNhYmxlUmVuZGVyIC8+fVxyXG5cclxuICAgICAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezF9IGNvbG9yPVwiI2IwYjBiMFwiLz5cclxuICAgICAgICAgICAgPHBvaW50TGlnaHQgcG9zaXRpb249ezJ9IGludGVuc2l0eT17NX0vPlxyXG4gICAgICAgICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17LTJ9IGludGVuc2l0eT17NX0vPlxyXG4gICAgICAgICAgICB7c3RhclRleHR1cmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5tZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e1syLCAyLjUsIDBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3N0YXJ0ID8gJ3Zpc2libGUnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbkltYWdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwbGFuZUdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1lc2hCYXNpY01hdGVyaWFsIHRyYW5zcGFyZW50IG1hcD17c3RhclRleHR1cmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5tZXNoPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dHJlZSAmJiAoIFxyXG4gICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTWFpbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLm1lc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3N0YXJ0ID8gWydzdGFydHMnXTogJ3Zpc2libGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uLXk9e3JvdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9uZSBvYmplY3Q9e3RyZWUuc2NlbmVzWzBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLm1lc2g+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICB4bWFzc3RyZWUoIHt0cmVlLCBzdGFydCwgc3RhclRleHR1cmV9ICkge1xyXG5cclxuICAgIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpXHJcblxyXG4gICAgY29uc3Qgcm90YXRpb24gPSAwXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlZX0gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8Q2FudmFzPlxyXG4gICAgICAgICAgICAgICAgPFNjZW5lIGluVmlldz17aW5WaWV3fSBzdGFyVGV4dHVyZT17c3RhclRleHR1cmV9IHRyZWU9e3RyZWV9IHJvdGF0aW9uPXtyb3RhdGlvbn0gc3RhcnQ9e3N0YXJ0fS8+XHJcbiAgICAgICAgICAgIDwvQ2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIlN1c3BlbnNlIiwidXNlU3RhdGUiLCJDYW52YXMiLCJ1c2VGcmFtZSIsInN0eWxlcyIsIkNsb25lIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwibW90aW9uIiwidXNlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInRyYW5zaXRpb25JbWFnZSIsImRlbGF5IiwiU2NlbmUiLCJpblZpZXciLCJ0cmVlIiwic3RhclRleHR1cmUiLCJzdGFydCIsInJvdCIsInNldFJvdCIsImlzU2Nyb2xsaW5nIiwic2V0SXNTY3JvbGxpbmciLCJ2YXJpYW50cyIsImhpZGRlbiIsInNjYWxlIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInZpc2libGUiLCJzdGFydHMiLCJ4IiwieSIsInZhcmlhbnRzSW1hZ2UiLCJvcGFjaXR5Iiwic2Nyb2xsVGltZW91dCIsImhhbmRsZVNjcm9sbCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVuYWJsZVJlbmRlciIsIl8iLCJkZWx0YSIsInIiLCJzcGVlZCIsIkRpc2FibGVSZW5kZXIiLCJhbWJpZW50TGlnaHQiLCJpbnRlbnNpdHkiLCJjb2xvciIsInBvaW50TGlnaHQiLCJwb3NpdGlvbiIsIm1lc2giLCJpbml0aWFsIiwiYW5pbWF0ZSIsInBsYW5lR2VvbWV0cnkiLCJtZXNoQmFzaWNNYXRlcmlhbCIsInRyYW5zcGFyZW50IiwibWFwIiwiZmFsbGJhY2siLCJyb3RhdGlvbi15Iiwib2JqZWN0Iiwic2NlbmVzIiwieG1hc3N0cmVlIiwicmVmIiwicm90YXRpb24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/xmass_tree/index.js\n"));

/***/ })

});