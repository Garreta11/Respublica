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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./app/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _utils_MousePositionContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/MousePositionContext */ \"(app-pages-browser)/./app/utils/MousePositionContext.js\");\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @studio-freight/lenis */ \"(app-pages-browser)/./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_loadingpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loadingpage */ \"(app-pages-browser)/./app/components/loadingpage/index.js\");\n/* harmony import */ var _components_xmass_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/xmass_tree */ \"(app-pages-browser)/./app/components/xmass_tree/index.js\");\n/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/intro */ \"(app-pages-browser)/./app/components/intro/index.js\");\n/* harmony import */ var _components_wedonate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/wedonate */ \"(app-pages-browser)/./app/components/wedonate/index.js\");\n/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/video */ \"(app-pages-browser)/./app/components/video/index.js\");\n/* harmony import */ var _components_merryXmass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/merryXmass */ \"(app-pages-browser)/./app/components/merryXmass/index.js\");\n/* harmony import */ var _components_wishes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/wishes */ \"(app-pages-browser)/./app/components/wishes/index.js\");\n/* harmony import */ var _components_audio_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/audio_icon */ \"(app-pages-browser)/./app/components/audio_icon/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer */ \"(app-pages-browser)/./app/components/footer/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header */ \"(app-pages-browser)/./app/components/header/index.js\");\n/* harmony import */ var _components_headerInit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/headerInit */ \"(app-pages-browser)/./app/components/headerInit/index.js\");\n/* harmony import */ var _utils_sources__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/sources */ \"(app-pages-browser)/./app/utils/sources.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"(app-pages-browser)/./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_examples_jsm_loaders_SVGLoader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! three/examples/jsm/loaders/SVGLoader */ \"(app-pages-browser)/./node_modules/three/examples/jsm/loaders/SVGLoader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [start, setStart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [audio, setAudio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [santaModel, setSantaModel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [treeModel, setTreeModel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [merryText, setMerryText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [starTexture, setStarTexture] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let loaders;\n    let toLoad;\n    let items = {};\n    let loaded = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        toLoad = _utils_sources__WEBPACK_IMPORTED_MODULE_14__[\"default\"].length;\n        setLoaders();\n        startLoading(_utils_sources__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_15__[\"default\"]();\n        const raf = (time)=>{\n            lenis.raf(time);\n            requestAnimationFrame(raf);\n        };\n        requestAnimationFrame(raf);\n    }, []);\n    const setLoaders = ()=>{\n        loaders = {};\n        loaders.gltfLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_16__.GLTFLoader();\n        loaders.textureLoader = new three__WEBPACK_IMPORTED_MODULE_17__.TextureLoader();\n        loaders.svgLoader = new three_examples_jsm_loaders_SVGLoader__WEBPACK_IMPORTED_MODULE_18__.SVGLoader();\n    };\n    const startLoading = (allSources)=>{\n        for (const source of allSources){\n            if (source.type === \"gltfModel\") {\n                loaders.gltfLoader.load(source.path, (model)=>{\n                    if (source.name === \"santaclaus\") {\n                        setSantaModel(model);\n                    }\n                    if (source.name === \"tree\") {\n                        setTreeModel(model);\n                    }\n                    sourceLoaded(source, model);\n                });\n            } else if (source.type === \"textureModel\") {\n                loaders.textureLoader.load(source.path, (texture)=>{\n                    if (source.name === \"merryChristmas\") {\n                        setMerryText(texture);\n                    }\n                    if (source.name === \"star\") {\n                        setStarTexture(texture);\n                    }\n                    sourceLoaded(source, texture);\n                });\n            } else if (source.type === \"svgModel\") {\n                loaders.svgLoader.load(source.path, (svg)=>{\n                // console.log(svg)\n                });\n            }\n        }\n    };\n    const sourceLoaded = (source, file)=>{\n        items[source.name] = file;\n        loaded++;\n        if (loaded === toLoad) {\n            console.log(\"** READY **\");\n            setIsLoaded(true);\n        }\n    };\n    const receiveDataFromButton = (data)=>{\n        setStart(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_19___default().main),\n        children: [\n            !start && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_headerInit__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loadingpage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        tree: treeModel,\n                        showbtn: isLoaded,\n                        sendDataToParent: receiveDataFromButton\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_MousePositionContext__WEBPACK_IMPORTED_MODULE_1__.MousePositionProvider, {\n                children: [\n                    treeModel && starTexture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_xmass_tree__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        tree: treeModel,\n                        starTexture: starTexture,\n                        start: start\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, this),\n                    start && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                                lineNumber: 130,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wedonate__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                santa: santaModel\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                                lineNumber: 131,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                                lineNumber: 132,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_merryXmass__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                texture: merryText\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wishes__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                                lineNumber: 134,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audio_icon__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                                lineNumber: 135,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                                lineNumber: 136,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\page.js\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"e1IjDOLGNyHdR1cd30MMnusNn54=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVN1QztJQUNYO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVdqRSxnRUFBVzs7WUFDekIsQ0FBQ3VCLHVCQUNBOztrQ0FDRSw4REFBQ1IsK0RBQVVBOzs7OztrQ0FDWCw4REFBQ1YsK0RBQVdBO3dCQUFDNkQsTUFBTXJDO3dCQUFXc0MsU0FBUzlDO3dCQUFVK0Msa0JBQWtCTjs7Ozs7Ozs7MEJBR3JFLDhEQUFDN0QsOEVBQXFCQTs7b0JBRWxCNEIsYUFBYUksNkJBQ2IsOERBQUMzQiw4REFBU0E7d0JBQUM0RCxNQUFNckM7d0JBQVdJLGFBQWFBO3dCQUFhVixPQUFPQTs7Ozs7O29CQUk5REEsdUJBQ0M7OzBDQUNFLDhEQUFDVCwyREFBTUE7Ozs7OzBDQUNQLDhEQUFDUCx5REFBS0E7Ozs7OzBDQUNOLDhEQUFDQyw0REFBUUE7Z0NBQUM2RCxPQUFPMUM7Ozs7OzswQ0FDakIsOERBQUNsQix5REFBS0E7Ozs7OzBDQUNOLDhEQUFDQyw4REFBVUE7Z0NBQUMrQyxTQUFTMUI7Ozs7OzswQ0FDckIsOERBQUNwQiwwREFBTUE7Ozs7OzBDQUNQLDhEQUFDQywrREFBU0E7Ozs7OzBDQUNWLDhEQUFDQywyREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0FqSHdCTztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uUHJvdmlkZXIgfSBmcm9tICcuL3V0aWxzL01vdXNlUG9zaXRpb25Db250ZXh0J1xyXG5cclxuaW1wb3J0IExlbmlzIGZyb20gJ0BzdHVkaW8tZnJlaWdodC9sZW5pcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZ3BhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmdwYWdlJ1xyXG5pbXBvcnQgWG1hc3N0cmVlIGZyb20gXCIuL2NvbXBvbmVudHMveG1hc3NfdHJlZVwiXHJcbmltcG9ydCBJbnRybyBmcm9tICcuL2NvbXBvbmVudHMvaW50cm8nXHJcbmltcG9ydCBXZWRvbmF0ZSBmcm9tICcuL2NvbXBvbmVudHMvd2Vkb25hdGUnXHJcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8nXHJcbmltcG9ydCBNZXJyeVhtYXNzIGZyb20gXCIuL2NvbXBvbmVudHMvbWVycnlYbWFzc1wiO1xyXG5pbXBvcnQgV2lzaGVzIGZyb20gJy4vY29tcG9uZW50cy93aXNoZXMnXHJcbmltcG9ydCBBdWRpb0ljb24gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvX2ljb24nXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3RlcidcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEhlYWRlckluaXQgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlckluaXQnXHJcblxyXG5pbXBvcnQgc291cmNlcyBmcm9tICcuL3V0aWxzL3NvdXJjZXMnO1xyXG5cclxuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlcidcclxuaW1wb3J0IHsgU1ZHTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL1NWR0xvYWRlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3N0YXJ0LCBzZXRTdGFydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYXVkaW8sIHNldEF1ZGlvXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgY29uc3QgW3NhbnRhTW9kZWwsIHNldFNhbnRhTW9kZWxdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFt0cmVlTW9kZWwsIHNldFRyZWVNb2RlbF0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW21lcnJ5VGV4dCwgc2V0TWVycnlUZXh0XSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbc3RhclRleHR1cmUsIHNldFN0YXJUZXh0dXJlXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgbGV0IGxvYWRlcnNcclxuICBsZXQgdG9Mb2FkXHJcbiAgbGV0IGl0ZW1zID0ge31cclxuICBsZXQgbG9hZGVkID0gMFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdG9Mb2FkID0gc291cmNlcy5sZW5ndGg7XHJcbiAgICBzZXRMb2FkZXJzKClcclxuICAgIHN0YXJ0TG9hZGluZyhzb3VyY2VzKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGVuaXMgPSBuZXcgTGVuaXMoKVxyXG4gICAgY29uc3QgcmFmID0gKHRpbWUpID0+IHtcclxuICAgICAgbGVuaXMucmFmKHRpbWUpXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzZXRMb2FkZXJzID0gKCkgPT4ge1xyXG4gICAgbG9hZGVycyA9IHt9O1xyXG4gICAgbG9hZGVycy5nbHRmTG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuICAgIGxvYWRlcnMudGV4dHVyZUxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCk7XHJcbiAgICBsb2FkZXJzLnN2Z0xvYWRlciA9IG5ldyBTVkdMb2FkZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0TG9hZGluZyA9IChhbGxTb3VyY2VzKSA9PiB7XHJcbiAgICBcclxuICAgIGZvciAoY29uc3Qgc291cmNlIG9mIGFsbFNvdXJjZXMpIHtcclxuICAgICAgICBpZiAoc291cmNlLnR5cGUgPT09IFwiZ2x0Zk1vZGVsXCIpIHtcclxuICAgICAgICAgIGxvYWRlcnMuZ2x0ZkxvYWRlci5sb2FkKHNvdXJjZS5wYXRoLCAobW9kZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZS5uYW1lID09PSAnc2FudGFjbGF1cycpIHtcclxuICAgICAgICAgICAgICBzZXRTYW50YU1vZGVsKG1vZGVsKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc291cmNlLm5hbWUgPT09ICd0cmVlJykge1xyXG4gICAgICAgICAgICAgIHNldFRyZWVNb2RlbChtb2RlbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzb3VyY2VMb2FkZWQoc291cmNlLCBtb2RlbCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS50eXBlID09PSBcInRleHR1cmVNb2RlbFwiKSB7XHJcbiAgICAgICAgICBsb2FkZXJzLnRleHR1cmVMb2FkZXIubG9hZChzb3VyY2UucGF0aCwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZS5uYW1lID09PSAnbWVycnlDaHJpc3RtYXMnKSB7XHJcbiAgICAgICAgICAgICAgc2V0TWVycnlUZXh0KHRleHR1cmUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNvdXJjZS5uYW1lID09PSAnc3RhcicpIHtcclxuICAgICAgICAgICAgICBzZXRTdGFyVGV4dHVyZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvdXJjZUxvYWRlZChzb3VyY2UsIHRleHR1cmUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UudHlwZSA9PT0gXCJzdmdNb2RlbFwiKSB7XHJcbiAgICAgICAgICBsb2FkZXJzLnN2Z0xvYWRlci5sb2FkKHNvdXJjZS5wYXRoLCAoc3ZnKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN2ZylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3VyY2VMb2FkZWQgPSAoc291cmNlLCBmaWxlKSA9PiB7XHJcbiAgICBpdGVtc1tzb3VyY2UubmFtZV0gPSBmaWxlO1xyXG4gICAgbG9hZGVkKys7XHJcbiAgICBpZiAobG9hZGVkID09PSB0b0xvYWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJyoqIFJFQURZICoqJylcclxuICAgICAgc2V0SXNMb2FkZWQodHJ1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2VpdmVEYXRhRnJvbUJ1dHRvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXRTdGFydChkYXRhKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICB7IXN0YXJ0ICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEhlYWRlckluaXQgLz5cclxuICAgICAgICAgIDxMb2FkaW5ncGFnZSB0cmVlPXt0cmVlTW9kZWx9IHNob3didG49e2lzTG9hZGVkfSBzZW5kRGF0YVRvUGFyZW50PXtyZWNlaXZlRGF0YUZyb21CdXR0b259Lz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgICA8TW91c2VQb3NpdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7KHRyZWVNb2RlbCAmJiBzdGFyVGV4dHVyZSkgJiYgKCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8WG1hc3N0cmVlIHRyZWU9e3RyZWVNb2RlbH0gc3RhclRleHR1cmU9e3N0YXJUZXh0dXJlfSBzdGFydD17c3RhcnR9Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICB7c3RhcnQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICA8SW50cm8gLz5cclxuICAgICAgICAgICAgICA8V2Vkb25hdGUgc2FudGE9e3NhbnRhTW9kZWx9IC8+XHJcbiAgICAgICAgICAgICAgPFZpZGVvIC8+XHJcbiAgICAgICAgICAgICAgPE1lcnJ5WG1hc3MgdGV4dHVyZT17bWVycnlUZXh0fSAvPlxyXG4gICAgICAgICAgICAgIDxXaXNoZXMgLz5cclxuICAgICAgICAgICAgICA8QXVkaW9JY29uLz5cclxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L01vdXNlUG9zaXRpb25Qcm92aWRlcj4gICAgXHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNb3VzZVBvc2l0aW9uUHJvdmlkZXIiLCJMZW5pcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9hZGluZ3BhZ2UiLCJYbWFzc3RyZWUiLCJJbnRybyIsIldlZG9uYXRlIiwiVmlkZW8iLCJNZXJyeVhtYXNzIiwiV2lzaGVzIiwiQXVkaW9JY29uIiwiRm9vdGVyIiwiSGVhZGVyIiwiSGVhZGVySW5pdCIsInNvdXJjZXMiLCJUZXh0dXJlTG9hZGVyIiwiR0xURkxvYWRlciIsIlNWR0xvYWRlciIsIkhvbWUiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwic3RhcnQiLCJzZXRTdGFydCIsImF1ZGlvIiwic2V0QXVkaW8iLCJzYW50YU1vZGVsIiwic2V0U2FudGFNb2RlbCIsInRyZWVNb2RlbCIsInNldFRyZWVNb2RlbCIsIm1lcnJ5VGV4dCIsInNldE1lcnJ5VGV4dCIsInN0YXJUZXh0dXJlIiwic2V0U3RhclRleHR1cmUiLCJsb2FkZXJzIiwidG9Mb2FkIiwiaXRlbXMiLCJsb2FkZWQiLCJsZW5ndGgiLCJzZXRMb2FkZXJzIiwic3RhcnRMb2FkaW5nIiwibGVuaXMiLCJyYWYiLCJ0aW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2x0ZkxvYWRlciIsInRleHR1cmVMb2FkZXIiLCJzdmdMb2FkZXIiLCJhbGxTb3VyY2VzIiwic291cmNlIiwidHlwZSIsImxvYWQiLCJwYXRoIiwibW9kZWwiLCJuYW1lIiwic291cmNlTG9hZGVkIiwidGV4dHVyZSIsInN2ZyIsImZpbGUiLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZURhdGFGcm9tQnV0dG9uIiwiZGF0YSIsIm1haW4iLCJjbGFzc05hbWUiLCJ0cmVlIiwic2hvd2J0biIsInNlbmREYXRhVG9QYXJlbnQiLCJzYW50YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});