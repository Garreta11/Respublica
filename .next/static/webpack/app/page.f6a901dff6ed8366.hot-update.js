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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ xmasstree; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-dc6125bc.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xmass_tree.module.scss */ \"(app-pages-browser)/./app/components/xmass_tree/xmass_tree.module.scss\");\n/* harmony import */ var _xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Clone.js\");\n/* harmony import */ var framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion-3d */ \"(app-pages-browser)/./node_modules/framer-motion-3d/dist/es/render/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst transition = {\n    duration: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst transitionImage = {\n    duration: 2,\n    delay: 5,\n    ease: [\n        0.43,\n        0.13,\n        0.23,\n        0.96\n    ]\n};\nconst Scene = (param)=>{\n    let { inView, tree, starTexture, start, shadow } = param;\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const [rot, setRot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [rotationImage, setRotationImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        hidden: {\n            scale: 0,\n            rotateX: 90 * Math.PI / 180\n        },\n        visible: {\n            scale: 1.5,\n            rotateX: 90 * Math.PI / 180\n        },\n        starts: {\n            scale: [\n                1.5,\n                0.45,\n                0.45\n            ],\n            x: isMobile ? [\n                0,\n                0,\n                0\n            ] : [\n                0,\n                0,\n                2\n            ],\n            y: [\n                0,\n                0,\n                1.5\n            ],\n            rotateX: [\n                90 * Math.PI / 180,\n                90 * Math.PI / 180,\n                0\n            ]\n        }\n    };\n    const variantsImage = {\n        hidden: {\n            opacity: 0,\n            scale: 0\n        },\n        visible: {\n            opacity: 1,\n            scale: 0.5\n        }\n    };\n    const variantsShadow = {\n        hidden: {\n            opacity: 0,\n            scale: 0\n        },\n        visible: {\n            opacity: 1,\n            scale: 2\n        }\n    };\n    // handleScroll\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let scrollTimeout;\n        // Add scroll event listener when the component mounts\n        const handleScroll = ()=>{\n            setIsScrolling(true);\n            // Clear the previous timeout (if any) and set a new one\n            clearTimeout(scrollTimeout);\n            scrollTimeout = setTimeout(()=>{\n                setIsScrolling(false);\n            }, 100); // Adjust the timeout duration as needed\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    // handleResize\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            window.innerWidth < 921 ? setIsMobile(true) : setIsMobile(false);\n        };\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const EnableRender = ()=>{\n        _s1();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)((_, delta)=>{\n            let r = rot;\n            const speed = isScrolling ? delta * 1 : delta * 0.1;\n            r += speed;\n            setRot(r);\n            let rotImage = rotationImage;\n            rotImage -= delta * 0.1;\n            setRotationImage(rotImage);\n        });\n    };\n    _s1(EnableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    const DisableRender = ()=>{\n        _s2();\n        return (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)(()=>null, 1000);\n    };\n    _s2(DisableRender, \"xC67171NPRcCAzsbrenetil66NI=\", false, function() {\n        return [\n            _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            inView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EnableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 115,\n                columnNumber: 23\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisableRender, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 115,\n                columnNumber: 42\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 1,\n                color: \"#b0b0b0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: 2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: -2,\n                intensity: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, undefined),\n            starTexture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                position: isMobile ? [\n                    0,\n                    2.3,\n                    0\n                ] : [\n                    2,\n                    2.3,\n                    0\n                ],\n                variants: variantsImage,\n                initial: \"hidden\",\n                animate: start ? \"visible\" : \"\",\n                transition: transitionImage,\n                \"rotation-z\": rotationImage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 129,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                        transparent: true,\n                        map: starTexture\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 130,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 121,\n                columnNumber: 17\n            }, undefined),\n            shadow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                position: isMobile ? [\n                    0,\n                    0,\n                    0\n                ] : [\n                    0,\n                    0,\n                    0\n                ],\n                variants: variantsShadow,\n                initial: \"hidden\",\n                animate: start ? \"visible\" : \"\",\n                transition: transitionImage,\n                \"rotation-z\": rotationImage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 143,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                        transparent: true,\n                        map: shadow\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 144,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 135,\n                columnNumber: 17\n            }, undefined),\n            tree && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                fallback: null,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_3__.motion.mesh, {\n                    initial: \"hidden\",\n                    animate: start ? [\n                        \"starts\"\n                    ] : \"visible\",\n                    variants: variants,\n                    transition: transition,\n                    \"rotation-y\": rot,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Clone, {\n                        object: tree.scenes[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                        lineNumber: 158,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                    lineNumber: 151,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 149,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Scene, \"VFHnbMyiDIX2ctJtDOYbCeaKrL0=\");\n_c = Scene;\nfunction xmasstree(param) {\n    let { tree, start, starTexture, shadow } = param;\n    _s1();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const rotation = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_xmass_tree_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tree),\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.Canvas, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {\n                inView: inView,\n                starTexture: starTexture,\n                tree: tree,\n                rotation: rotation,\n                start: start,\n                shadow: shadow\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n                lineNumber: 175,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n            lineNumber: 174,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\xmass_tree\\\\index.js\",\n        lineNumber: 173,\n        columnNumber: 9\n    }, this);\n}\n_s1(xmasstree, \"oyd/E8SD7Fx4uOp6P7gVV2pVlaE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3htYXNzX3RyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2RDtBQUNSO0FBQ1I7QUFDSDtBQUVhO0FBQ2Q7QUFFYztBQUd2RCxNQUFNWSxhQUFhO0lBQUVDLFVBQVU7SUFBR0MsTUFBTTtRQUFDO1FBQU07UUFBTTtRQUFNO0tBQUs7QUFBQztBQUNqRSxNQUFNQyxrQkFBa0I7SUFBRUYsVUFBVTtJQUFHRyxPQUFPO0lBQUdGLE1BQU07UUFBQztRQUFNO1FBQU07UUFBTTtLQUFLO0FBQUM7QUFFaEYsTUFBTUcsUUFBUTtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFOzs7SUFFdkQsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNzQixlQUFlQyxpQkFBaUIsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ3dCLGFBQWFDLGVBQWUsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU0sQ0FBQzBCLFVBQVVDLFlBQVksR0FBRzNCLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU00QixXQUFXO1FBQ2JDLFFBQVE7WUFDSkMsT0FBTztZQUNQQyxTQUFTLEtBQUtDLEtBQUtDLEVBQUUsR0FBRztRQUM1QjtRQUNBQyxTQUFTO1lBQ0xKLE9BQU87WUFDUEMsU0FBUyxLQUFLQyxLQUFLQyxFQUFFLEdBQUc7UUFDNUI7UUFDQUUsUUFBUTtZQUNKTCxPQUFPO2dCQUFDO2dCQUFLO2dCQUFNO2FBQUs7WUFDeEJNLEdBQUdWLFdBQVc7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRSxHQUFHO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7WUFDbkNXLEdBQUc7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBSTtZQUNkTixTQUFTO2dCQUFDLEtBQUtDLEtBQUtDLEVBQUUsR0FBRztn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NEVBQUMvRCxvREFBTUEsQ0FBQ3VELElBQUk7b0JBQ1JDLFNBQVE7b0JBQ1JDLFNBQVM5QyxRQUFRO3dCQUFDO3FCQUFTLEdBQUU7b0JBQzdCVSxVQUFVQTtvQkFDVm5CLFlBQVlBO29CQUNaOEQsY0FBWW5EOzhCQUVaLDRFQUFDaEIsb0RBQUtBO3dCQUFDb0UsUUFBUXhELEtBQUt5RCxNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJEO0dBbkpNM0Q7S0FBQUE7QUFxSlMsU0FBVTRELFVBQVcsS0FBa0M7UUFBbEMsRUFBQzFELElBQUksRUFBRUUsS0FBSyxFQUFFRCxXQUFXLEVBQUVFLE1BQU0sRUFBQyxHQUFsQzs7SUFFaEMsTUFBTSxFQUFFd0QsR0FBRyxFQUFFNUQsTUFBTSxFQUFFLEdBQUdQLHNFQUFTQTtJQUVqQyxNQUFNb0UsV0FBVztJQUVqQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVzNFLHFFQUFXO1FBQUV3RSxLQUFLQTtrQkFDOUIsNEVBQUMxRSxzREFBTUE7c0JBQ0gsNEVBQUNhO2dCQUFNQyxRQUFRQTtnQkFBUUUsYUFBYUE7Z0JBQWFELE1BQU1BO2dCQUFNNEQsVUFBVUE7Z0JBQVUxRCxPQUFPQTtnQkFBT0MsUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkg7SUFieUJ1RDs7UUFFR2xFLGtFQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy94bWFzc190cmVlL2luZGV4LmpzP2Y2MDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgU3VzcGVuc2UsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3htYXNzX3RyZWUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IENsb25lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xyXG5cclxuaW1wb3J0IHsgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uLTNkXCJcclxuXHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcclxuXHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0geyBkdXJhdGlvbjogNSwgZWFzZTogWzAuNDMsIDAuMTMsIDAuMjMsIDAuOTZdIH07XHJcbmNvbnN0IHRyYW5zaXRpb25JbWFnZSA9IHsgZHVyYXRpb246IDIsIGRlbGF5OiA1LCBlYXNlOiBbMC40MywgMC4xMywgMC4yMywgMC45Nl0gfTtcclxuXHJcbmNvbnN0IFNjZW5lID0gKHsgaW5WaWV3LCB0cmVlLCBzdGFyVGV4dHVyZSwgc3RhcnQsIHNoYWRvdyB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3JvdCwgc2V0Um90XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcm90YXRpb25JbWFnZSwgc2V0Um90YXRpb25JbWFnZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lzU2Nyb2xsaW5nLCBzZXRJc1Njcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgICBoaWRkZW46IHsgXHJcbiAgICAgICAgICAgIHNjYWxlOiAwLFxyXG4gICAgICAgICAgICByb3RhdGVYOiA5MCAqIE1hdGguUEkgLyAxODBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpc2libGU6IHtcclxuICAgICAgICAgICAgc2NhbGU6IDEuNSxcclxuICAgICAgICAgICAgcm90YXRlWDogOTAgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydHM6IHtcclxuICAgICAgICAgICAgc2NhbGU6IFsxLjUsIDAuNDUsIDAuNDVdLFxyXG4gICAgICAgICAgICB4OiBpc01vYmlsZSA/IFswLCAwLCAwXSA6IFswLCAwLCAyXSxcclxuICAgICAgICAgICAgeTogWzAsIDAsIDEuNV0sXHJcbiAgICAgICAgICAgIHJvdGF0ZVg6IFs5MCAqIE1hdGguUEkgLyAxODAsIDkwICogTWF0aC5QSSAvIDE4MCwgMF1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhcmlhbnRzSW1hZ2UgPSB7XHJcbiAgICAgICAgaGlkZGVuOiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHNjYWxlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXNpYmxlOiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHNjYWxlOiAwLjVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFyaWFudHNTaGFkb3cgPSB7XHJcbiAgICAgICAgaGlkZGVuOiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHNjYWxlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXNpYmxlOiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHNjYWxlOiAyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGhhbmRsZVNjcm9sbFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgc2Nyb2xsVGltZW91dDtcclxuICAgICAgICAvLyBBZGQgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzU2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICBcclxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIHRpbWVvdXQgKGlmIGFueSkgYW5kIHNldCBhIG5ldyBvbmVcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xyXG4gICAgICAgICAgICBzY3JvbGxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SXNTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCAxMDApOyAvLyBBZGp1c3QgdGhlIHRpbWVvdXQgZHVyYXRpb24gYXMgbmVlZGVkXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIGhhbmRsZVJlc2l6ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICh3aW5kb3cuaW5uZXJXaWR0aCA8IDkyMSkgPyBzZXRJc01vYmlsZSh0cnVlKSA6IHNldElzTW9iaWxlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZGxlUmVzaXplKClcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBFbmFibGVSZW5kZXIgPSAoKSA9PiB1c2VGcmFtZSgoXywgZGVsdGEpID0+IHtcclxuICAgICAgICBsZXQgciA9IHJvdFxyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gaXNTY3JvbGxpbmcgPyBkZWx0YSAqIDEgOiBkZWx0YSAqIDAuMVxyXG4gICAgICAgIHIgKz0gc3BlZWRcclxuICAgICAgICBzZXRSb3QocilcclxuXHJcbiAgICAgICAgbGV0IHJvdEltYWdlID0gcm90YXRpb25JbWFnZVxyXG4gICAgICAgIHJvdEltYWdlIC09IGRlbHRhICogMC4xXHJcbiAgICAgICAgc2V0Um90YXRpb25JbWFnZShyb3RJbWFnZSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgRGlzYWJsZVJlbmRlciA9ICgpID0+IHVzZUZyYW1lKCgpID0+IG51bGwsIDEwMDApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW5WaWV3ID8gPEVuYWJsZVJlbmRlciAvPiA6IDxEaXNhYmxlUmVuZGVyIC8+fVxyXG5cclxuICAgICAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezF9IGNvbG9yPVwiI2IwYjBiMFwiLz5cclxuICAgICAgICAgICAgPHBvaW50TGlnaHQgcG9zaXRpb249ezJ9IGludGVuc2l0eT17NX0vPlxyXG4gICAgICAgICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17LTJ9IGludGVuc2l0eT17NX0vPlxyXG4gICAgICAgICAgICB7c3RhclRleHR1cmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5tZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e2lzTW9iaWxlID8gWzAsIDIuMywgMF0gOiBbMiwgMi4zLCAwXX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHNJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtzdGFydCA/ICd2aXNpYmxlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb25JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbi16PXtyb3RhdGlvbkltYWdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwbGFuZUdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1lc2hCYXNpY01hdGVyaWFsIHRyYW5zcGFyZW50IG1hcD17c3RhclRleHR1cmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5tZXNoPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3NoYWRvdyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLm1lc2hcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17aXNNb2JpbGUgPyBbMCwgMCwgMF0gOiBbMCwgMCwgMF19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzU2hhZG93fVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3N0YXJ0ID8gJ3Zpc2libGUnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbkltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uLXo9e3JvdGF0aW9uSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBsYW5lR2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWVzaEJhc2ljTWF0ZXJpYWwgdHJhbnNwYXJlbnQgbWFwPXtzaGFkb3d9IC8+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5tZXNoPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3RyZWUgJiYgKCBcclxuICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1haW4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5tZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtzdGFydCA/IFsnc3RhcnRzJ106ICd2aXNpYmxlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvbi15PXtyb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvbmUgb2JqZWN0PXt0cmVlLnNjZW5lc1swXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5tZXNoPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAgeG1hc3N0cmVlKCB7dHJlZSwgc3RhcnQsIHN0YXJUZXh0dXJlLCBzaGFkb3d9ICkge1xyXG5cclxuICAgIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldygpXHJcblxyXG4gICAgY29uc3Qgcm90YXRpb24gPSAwXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlZX0gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8Q2FudmFzPlxyXG4gICAgICAgICAgICAgICAgPFNjZW5lIGluVmlldz17aW5WaWV3fSBzdGFyVGV4dHVyZT17c3RhclRleHR1cmV9IHRyZWU9e3RyZWV9IHJvdGF0aW9uPXtyb3RhdGlvbn0gc3RhcnQ9e3N0YXJ0fSBzaGFkb3c9e3NoYWRvd30gLz5cclxuICAgICAgICAgICAgPC9DYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiU3VzcGVuc2UiLCJ1c2VTdGF0ZSIsIkNhbnZhcyIsInVzZUZyYW1lIiwic3R5bGVzIiwiQ2xvbmUiLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwidHJhbnNpdGlvbkltYWdlIiwiZGVsYXkiLCJTY2VuZSIsImluVmlldyIsInRyZWUiLCJzdGFyVGV4dHVyZSIsInN0YXJ0Iiwic2hhZG93Iiwicm90Iiwic2V0Um90Iiwicm90YXRpb25JbWFnZSIsInNldFJvdGF0aW9uSW1hZ2UiLCJpc1Njcm9sbGluZyIsInNldElzU2Nyb2xsaW5nIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsInZhcmlhbnRzIiwiaGlkZGVuIiwic2NhbGUiLCJyb3RhdGVYIiwiTWF0aCIsIlBJIiwidmlzaWJsZSIsInN0YXJ0cyIsIngiLCJ5IiwidmFyaWFudHNJbWFnZSIsIm9wYWNpdHkiLCJ2YXJpYW50c1NoYWRvdyIsInNjcm9sbFRpbWVvdXQiLCJoYW5kbGVTY3JvbGwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSZXNpemUiLCJpbm5lcldpZHRoIiwiRW5hYmxlUmVuZGVyIiwiXyIsImRlbHRhIiwiciIsInNwZWVkIiwicm90SW1hZ2UiLCJEaXNhYmxlUmVuZGVyIiwiYW1iaWVudExpZ2h0IiwiaW50ZW5zaXR5IiwiY29sb3IiLCJwb2ludExpZ2h0IiwicG9zaXRpb24iLCJtZXNoIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJyb3RhdGlvbi16IiwicGxhbmVHZW9tZXRyeSIsIm1lc2hCYXNpY01hdGVyaWFsIiwidHJhbnNwYXJlbnQiLCJtYXAiLCJmYWxsYmFjayIsInJvdGF0aW9uLXkiLCJvYmplY3QiLCJzY2VuZXMiLCJ4bWFzc3RyZWUiLCJyZWYiLCJyb3RhdGlvbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/xmass_tree/index.js\n"));

/***/ })

});