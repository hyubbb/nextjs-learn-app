"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(movies)/movies/[id]/page",{

/***/ "(app-pages-browser)/./components/modal/modal.tsx":
/*!************************************!*\
  !*** ./components/modal/modal.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/constants */ \"(app-pages-browser)/./app/constants.ts\");\n/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/modal.module.scss */ \"(app-pages-browser)/./styles/modal.module.scss\");\n/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Modal(param) {\n    let { casts, toggleModal } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleModal,\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/modal/modal.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().casts),\n                children: casts.map((cast, idx)=>{\n                    const { profile_path, name, character } = cast;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),\n                        children: [\n                            profile_path ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\".concat(_app_constants__WEBPACK_IMPORTED_MODULE_1__.IMG_URL).concat(profile_path),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/modal/modal.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().noImage),\n                                children: \"no image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/modal/modal.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().characterName),\n                                children: character\n                            }, void 0, false, {\n                                fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/modal/modal.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/modal/modal.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, idx, true, {\n                        fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/modal/modal.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/modal/modal.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/modal/modal.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUNNO0FBRXJDLFNBQVNFLE1BQU0sS0FBc0I7UUFBdEIsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBdEI7SUFDNUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdMLDRFQUFnQjs7MEJBQzlCLDhEQUFDTztnQkFBT0MsU0FBU0w7MEJBQWE7Ozs7OzswQkFDOUIsOERBQUNDO2dCQUFJQyxXQUFXTCx3RUFBWTswQkFDekJFLE1BQU1PLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztvQkFDaEIsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFLEdBQUdKO29CQUMxQyxxQkFDRSw4REFBQ047d0JBQWNDLFdBQVdMLHVFQUFXOzs0QkFDbENZLDZCQUNDLDhEQUFDSTtnQ0FBSUMsS0FBSyxHQUFhTCxPQUFWYixtREFBT0EsRUFBZ0IsT0FBYmE7Z0NBQWdCTSxLQUFJOzs7OztxREFFM0MsOERBQUNkO2dDQUFJQyxXQUFXTCwwRUFBYzswQ0FBRTs7Ozs7OzBDQUVsQyw4REFBQ0k7Z0NBQUlDLFdBQVdMLGdGQUFvQjswQ0FBR2M7Ozs7OzswQ0FDdkMsOERBQUNWO2dDQUFJQyxXQUFXTCx1RUFBVzswQ0FBR2E7Ozs7Ozs7dUJBUHRCRjs7Ozs7Z0JBVWQ7Ozs7Ozs7Ozs7OztBQUlSO0tBdEJ3QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC50c3g/M2QwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTUdfVVJMIH0gZnJvbSBcIi4uLy4uL2FwcC9jb25zdGFudHNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9tb2RhbC5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IGNhc3RzLCB0b2dnbGVNb2RhbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+WDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXN0c30+XG4gICAgICAgIHtjYXN0cy5tYXAoKGNhc3QsIGlkeCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgcHJvZmlsZV9wYXRoLCBuYW1lLCBjaGFyYWN0ZXIgfSA9IGNhc3Q7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICB7cHJvZmlsZV9wYXRoID8gKFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtJTUdfVVJMfSR7cHJvZmlsZV9wYXRofWB9IGFsdD0nJyAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9JbWFnZX0+bm8gaW1hZ2U8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJOYW1lfT57Y2hhcmFjdGVyfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJTUdfVVJMIiwic3R5bGVzIiwiTW9kYWwiLCJjYXN0cyIsInRvZ2dsZU1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImNhc3QiLCJpZHgiLCJwcm9maWxlX3BhdGgiLCJuYW1lIiwiY2hhcmFjdGVyIiwiY2FyZCIsImltZyIsInNyYyIsImFsdCIsIm5vSW1hZ2UiLCJjaGFyYWN0ZXJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/modal/modal.tsx\n"));

/***/ })

});