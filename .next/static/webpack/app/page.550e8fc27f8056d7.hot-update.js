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

/***/ "(app-pages-browser)/./app/components/video/index.js":
/*!***************************************!*\
  !*** ./app/components/video/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ video; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ \"(app-pages-browser)/./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/all */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _video_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video.module.scss */ \"(app-pages-browser)/./app/components/video/video.module.scss\");\n/* harmony import */ var _video_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_video_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\nfunction video() {\n    _s();\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [heightVideo, setHeightVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [autoplayVideo, setAutoplayVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: window.innerWidth,\n        height: window.innerHeight\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to update window size\n        function handleResize() {\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n            if (window.innerWidth < 921) {\n                setAutoplayVideo(false);\n            } else {\n                setAutoplayVideo(true);\n            }\n            videoRef.current.style.maxHeight = window.innerWidth / (16 / 9) + \"px\";\n        }\n        // Add event listener for window resize\n        window.addEventListener(\"resize\", handleResize);\n        videoRef.current.style.maxHeight = windowSize.width / (16 / 9) + \"px\";\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array means this effect runs once after the initial render\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let st = gsap_all__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger.create({\n            trigger: textRef.current,\n            pin: textRef.current,\n            start: \"10% center\",\n            markers: false,\n            end: ()=>\"+=\" + screen.height,\n            onUpdate: (self)=>{\n                const h = self.progress * 100;\n                setHeightVideo(h);\n            },\n            onComplete: (self)=>{\n                console.log(\"Scroll complete\");\n                videoRef.current.pause();\n            }\n        });\n        return ()=>st.kill();\n    }, [\n        windowSize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"video\",\n        className: (_video_module_scss__WEBPACK_IMPORTED_MODULE_5___default().vid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_video_module_scss__WEBPACK_IMPORTED_MODULE_5___default().vid_wrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: textRef,\n                        className: (_video_module_scss__WEBPACK_IMPORTED_MODULE_5___default().vid_wrapper_text)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\video\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.video, {\n                        className: (_video_module_scss__WEBPACK_IMPORTED_MODULE_5___default().vid_wrapper_video),\n                        ref: videoRef,\n                        controls: true,\n                        style: {\n                            height: heightVideo + \"%\"\n                        },\n                        autoPlay: autoplayVideo,\n                        muted: true,\n                        loop: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                            src: \"/video.mp4\",\n                            type: \"video/mp4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\video\\\\index.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\video\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\video\\\\index.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_video_module_scss__WEBPACK_IMPORTED_MODULE_5___default().vid_btn),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"download.pdf\",\n                    target: \"_blank\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Anleitung herunterladen\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\video\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\video\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\video\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jordi\\\\Documents\\\\00_Projectes\\\\00_Respublica\\\\Respublica\\\\app\\\\components\\\\video\\\\index.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n}\n_s(video, \"Xbqwrry2rRhsGPwlpS63/2EBDrE=\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3ZpZGVvL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0M7QUFDTjtBQUNVO0FBQ2E7QUFDbkM7QUFFN0JBLDBDQUFJQSxDQUFDVSxjQUFjLENBQUNULG1EQUFhQTtBQUVsQixTQUFTVTs7SUFFcEIsTUFBTUMsVUFBVVQsNkNBQU1BO0lBQ3RCLE1BQU1VLFdBQVdWLDZDQUFNQTtJQUV2QixNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUM7SUFFbkQsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO1FBQ3pDZSxPQUFPQyxPQUFPQyxVQUFVO1FBQ3hCQyxRQUFRRixPQUFPRyxXQUFXO0lBQzlCO0lBRUFwQixnREFBU0EsQ0FBQztRQUNOLGlDQUFpQztRQUNqQyxTQUFTcUI7WUFDUE4sY0FBYztnQkFDWkMsT0FBT0MsT0FBT0MsVUFBVTtnQkFDeEJDLFFBQVFGLE9BQU9HLFdBQVc7WUFDNUI7WUFFQSxJQUFJSCxPQUFPQyxVQUFVLEdBQUcsS0FBSztnQkFDM0JMLGlCQUFpQjtZQUNuQixPQUFPO2dCQUNMQSxpQkFBaUI7WUFDbkI7WUFFQUosU0FBU2EsT0FBTyxDQUFDQyxLQUFLLENBQUNDLFNBQVMsR0FBR1AsT0FBT0MsVUFBVSxHQUFLLE1BQUcsS0FBSztRQUNuRTtRQUVBLHVDQUF1QztRQUN2Q0QsT0FBT1EsZ0JBQWdCLENBQUMsVUFBVUo7UUFFbENaLFNBQVNhLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEdBQUdWLFdBQVdFLEtBQUssR0FBSyxNQUFHLEtBQUs7UUFFaEUsMERBQTBEO1FBQzFELE9BQU87WUFDTEMsT0FBT1MsbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDSixHQUFHLEVBQUUsR0FBRyw4RUFBOEU7SUFHdEZyQixnREFBU0EsQ0FBQztRQUNOLElBQUkyQixLQUFLOUIsbURBQWFBLENBQUMrQixNQUFNLENBQUM7WUFDMUJDLFNBQVNyQixRQUFRYyxPQUFPO1lBQ3hCUSxLQUFLdEIsUUFBUWMsT0FBTztZQUNwQlMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLEtBQUssSUFBTSxPQUFPQyxPQUFPZixNQUFNO1lBQy9CZ0IsVUFBVSxDQUFDQztnQkFDUCxNQUFNQyxJQUFJRCxLQUFLRSxRQUFRLEdBQUc7Z0JBQzFCM0IsZUFBZTBCO1lBQ25CO1lBQ0FFLFlBQVksQ0FBQ0g7Z0JBQ1RJLFFBQVFDLEdBQUcsQ0FBQztnQkFDWmhDLFNBQVNhLE9BQU8sQ0FBQ29CLEtBQUs7WUFDMUI7UUFDSjtRQUNBLE9BQU8sSUFBTWYsR0FBR2dCLElBQUk7SUFDeEIsR0FBRztRQUFDN0I7S0FBVztJQUlmLHFCQUNJLDhEQUFDOEI7UUFBSUMsSUFBRztRQUFRQyxXQUFXaEQsK0RBQVU7OzBCQUNqQyw4REFBQzhDO2dCQUFJRSxXQUFXaEQsdUVBQWtCOztrQ0FDOUIsOERBQUM4Qzt3QkFDR0ssS0FBS3pDO3dCQUNMc0MsV0FBV2hELDRFQUF1Qjs7Ozs7O2tDQUl0Qyw4REFBQ0ssaURBQU1BLENBQUNJLEtBQUs7d0JBQ1R1QyxXQUFXaEQsNkVBQXdCO3dCQUNuQ21ELEtBQUt4Qzt3QkFDTDJDLFVBQVU7d0JBQ1Y3QixPQUFPOzRCQUFDSixRQUFRVCxjQUFjO3dCQUFHO3dCQUNqQzJDLFVBQVV6Qzt3QkFDVjBDLEtBQUs7d0JBQ0xDLElBQUk7a0NBRUosNEVBQUNDOzRCQUFPQyxLQUFJOzRCQUFhQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEMsOERBQUNkO2dCQUFJRSxXQUFXaEQsbUVBQWM7MEJBQzFCLDRFQUFDTyxrREFBSUE7b0JBQUN1RCxNQUFLO29CQUFlQyxRQUFPOzhCQUM3Qiw0RUFBQ0M7a0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUI7R0EvRndCdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvdmlkZW8vaW5kZXguanM/ODIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IGdzYXAsIFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9hbGxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi92aWRlby5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2Nyb2xsLCBtb3Rpb24sIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlbygpIHtcclxuXHJcbiAgICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKClcclxuICAgIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKClcclxuXHJcbiAgICBjb25zdCBbaGVpZ2h0VmlkZW8sIHNldEhlaWdodFZpZGVvXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbYXV0b3BsYXlWaWRlbywgc2V0QXV0b3BsYXlWaWRlb10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB3aW5kb3cgc2l6ZVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTIxKSB7XHJcbiAgICAgICAgICAgIHNldEF1dG9wbGF5VmlkZW8oZmFsc2UpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBdXRvcGxheVZpZGVvKHRydWUpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zdHlsZS5tYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAgLyAoMTYvOSkgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB3aW5kb3cgcmVzaXplXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQuc3R5bGUubWF4SGVpZ2h0ID0gd2luZG93U2l6ZS53aWR0aCAgLyAoMTYvOSkgKyBcInB4XCI7XHJcbiAgICBcclxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgbWVhbnMgdGhpcyBlZmZlY3QgcnVucyBvbmNlIGFmdGVyIHRoZSBpbml0aWFsIHJlbmRlclxyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgc3QgPSBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6IHRleHRSZWYuY3VycmVudCxcclxuICAgICAgICAgICAgcGluOiB0ZXh0UmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBcIjEwJSBjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFya2VyczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVuZDogKCkgPT4gXCIrPVwiICsgc2NyZWVuLmhlaWdodCxcclxuICAgICAgICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gc2VsZi5wcm9ncmVzcyAqIDEwMFxyXG4gICAgICAgICAgICAgICAgc2V0SGVpZ2h0VmlkZW8oaClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Db21wbGV0ZTogKHNlbGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2Nyb2xsIGNvbXBsZXRlXCIpXHJcbiAgICAgICAgICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnBhdXNlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBzdC5raWxsKCk7XHJcbiAgICB9LCBbd2luZG93U2l6ZV0pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD1cInZpZGVvXCIgY2xhc3NOYW1lPXtzdHlsZXMudmlkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZpZF93cmFwcGVyX3RleHR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxNZXJyeVhtYXNzIHRleHR1cmU9e3RleHR1cmV9Lz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24udmlkZW9cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52aWRfd3JhcHBlcl92aWRlb31cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHRWaWRlbyArIFwiJVwifX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheT17YXV0b3BsYXlWaWRlb31cclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIi92aWRlby5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLnZpZGVvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkX2J0bn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiZG93bmxvYWQucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQW5sZWl0dW5nIGhlcnVudGVybGFkZW5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwic3R5bGVzIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTY3JvbGwiLCJtb3Rpb24iLCJ1c2VUcmFuc2Zvcm0iLCJMaW5rIiwicmVnaXN0ZXJQbHVnaW4iLCJ2aWRlbyIsInRleHRSZWYiLCJ2aWRlb1JlZiIsImhlaWdodFZpZGVvIiwic2V0SGVpZ2h0VmlkZW8iLCJhdXRvcGxheVZpZGVvIiwic2V0QXV0b3BsYXlWaWRlbyIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVSZXNpemUiLCJjdXJyZW50Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0IiwiY3JlYXRlIiwidHJpZ2dlciIsInBpbiIsInN0YXJ0IiwibWFya2VycyIsImVuZCIsInNjcmVlbiIsIm9uVXBkYXRlIiwic2VsZiIsImgiLCJwcm9ncmVzcyIsIm9uQ29tcGxldGUiLCJjb25zb2xlIiwibG9nIiwicGF1c2UiLCJraWxsIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJ2aWQiLCJ2aWRfd3JhcHBlciIsInJlZiIsInZpZF93cmFwcGVyX3RleHQiLCJ2aWRfd3JhcHBlcl92aWRlbyIsImNvbnRyb2xzIiwiYXV0b1BsYXkiLCJtdXRlZCIsImxvb3AiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwidmlkX2J0biIsImhyZWYiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/video/index.js\n"));

/***/ })

});