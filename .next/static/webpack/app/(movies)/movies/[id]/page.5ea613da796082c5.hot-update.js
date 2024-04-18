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

/***/ "(app-pages-browser)/./components/movie/movie-similar.tsx":
/*!********************************************!*\
  !*** ./components/movie/movie-similar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieSimilar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/constants */ \"(app-pages-browser)/./app/constants.ts\");\n/* harmony import */ var _styles_movie_similar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/movie-similar.module.scss */ \"(app-pages-browser)/./styles/movie-similar.module.scss\");\n/* harmony import */ var _styles_movie_similar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_similar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst getVideos = async (param)=>{\n    let { id, type } = param;\n    const response = await fetch(\"\".concat(_app_constants__WEBPACK_IMPORTED_MODULE_2__.API_URL, \"/\").concat(type, \"/\").concat(id, \"/similar?language=ko&region=KR\"), _app_constants__WEBPACK_IMPORTED_MODULE_2__.options);\n    const { results } = await response.json();\n    return results;\n};\nasync function MovieSimilar(param) {\n    let { id, type } = param;\n    const newType = type === \"movie\" ? \"movies\" : \"tv\";\n    const videos = await getVideos({\n        id,\n        type\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_movie_similar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: videos.map((video, idx)=>{\n                const { poster_path, title, name, id } = video;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    prefetch: true,\n                    href: \"/\".concat(newType, \"/\").concat(id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_similar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            poster_path ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\".concat(_app_constants__WEBPACK_IMPORTED_MODULE_2__.IMG_URL).concat(poster_path),\n                                alt: title\n                            }, void 0, false, {\n                                fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/movie/movie-similar.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 19\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_movie_similar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().noImage),\n                                children: \"no image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/movie/movie-similar.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 19\n                            }, this),\n                            title || name\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/movie/movie-similar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/movie/movie-similar.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/hyublee/Desktop/hyub/dev/learn-nextjs14/components/movie/movie-similar.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = MovieSimilar;\nvar _c;\n$RefreshReg$(_c, \"MovieSimilar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW92aWUvbW92aWUtc2ltaWxhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QjtBQUNrRDtBQUNuQjtBQUM1RCxNQUFNSyxZQUFZO1FBQU8sRUFBRUMsRUFBRSxFQUFFQyxJQUFJLEVBQWdDO0lBQ2pFLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsR0FBY0YsT0FBWE4sbURBQU9BLEVBQUMsS0FBV0ssT0FBUkMsTUFBSyxLQUFNLE9BQUhELElBQUcsbUNBQ3pCSCxtREFBT0E7SUFFVCxNQUFNLEVBQUVPLE9BQU8sRUFBRSxHQUFHLE1BQU1GLFNBQVNHLElBQUk7SUFDdkMsT0FBT0Q7QUFDVDtBQUVlLGVBQWVFLGFBQWEsS0FNMUM7UUFOMEMsRUFDekNOLEVBQUUsRUFDRkMsSUFBSSxFQUlMLEdBTjBDO0lBT3pDLE1BQU1NLFVBQVVOLFNBQVMsVUFBVSxXQUFXO0lBQzlDLE1BQU1PLFNBQVMsTUFBTVQsVUFBVTtRQUFFQztRQUFJQztJQUFLO0lBRTFDLHFCQUNFO2tCQUNFLDRFQUFDUTtZQUFJQyxXQUFXWixvRkFBZ0I7c0JBQzdCVSxPQUFPSSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0M7Z0JBQ2xCLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRWpCLEVBQUUsRUFBRSxHQUFHYTtnQkFDekMscUJBQ0UsOERBQUNuQixpREFBSUE7b0JBQUN3QixRQUFRO29CQUFDQyxNQUFNLElBQWVuQixPQUFYTyxTQUFRLEtBQU0sT0FBSFA7OEJBQ2xDLDRFQUFDUzt3QkFBYUMsV0FBV1osK0VBQVc7OzRCQUNqQ2lCLDRCQUNDLDhEQUFDTTtnQ0FBSUMsS0FBSyxHQUFhUCxPQUFWbkIsbURBQU9BLEVBQWUsT0FBWm1CO2dDQUFlUSxLQUFLUDs7Ozs7cURBRTNDLDhEQUFDUDtnQ0FBSUMsV0FBV1osa0ZBQWM7MENBQUU7Ozs7Ozs0QkFFakNrQixTQUFTQzs7dUJBTkZqQjs7Ozs7Ozs7OztZQVVoQjs7Ozs7OztBQUlSO0tBL0I4Qk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3ZpZS9tb3ZpZS1zaW1pbGFyLnRzeD84YzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFQSV9VUkwsIElNR19VUkwsIE1PVklFX1NJTUlMQVIsIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYXBwL2NvbnN0YW50c1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL21vdmllLXNpbWlsYXIubW9kdWxlLnNjc3NcIjtcbmNvbnN0IGdldFZpZGVvcyA9IGFzeW5jICh7IGlkLCB0eXBlIH06IHsgaWQ6IHN0cmluZzsgdHlwZTogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtBUElfVVJMfS8ke3R5cGV9LyR7aWR9L3NpbWlsYXI/bGFuZ3VhZ2U9a28mcmVnaW9uPUtSYCxcbiAgICBvcHRpb25zXG4gICk7XG4gIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIE1vdmllU2ltaWxhcih7XG4gIGlkLFxuICB0eXBlLFxufToge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IG5ld1R5cGUgPSB0eXBlID09PSBcIm1vdmllXCIgPyBcIm1vdmllc1wiIDogXCJ0dlwiO1xuICBjb25zdCB2aWRlb3MgPSBhd2FpdCBnZXRWaWRlb3MoeyBpZCwgdHlwZSB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHt2aWRlb3MubWFwKCh2aWRlbywgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBwb3N0ZXJfcGF0aCwgdGl0bGUsIG5hbWUsIGlkIH0gPSB2aWRlbztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC8ke25ld1R5cGV9LyR7aWR9YH0+XG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICAgICAge3Bvc3Rlcl9wYXRoID8gKFxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0lNR19VUkx9JHtwb3N0ZXJfcGF0aH1gfSBhbHQ9e3RpdGxlfT48L2ltZz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub0ltYWdlfT5ubyBpbWFnZTwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3RpdGxlIHx8IG5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkFQSV9VUkwiLCJJTUdfVVJMIiwib3B0aW9ucyIsInN0eWxlcyIsImdldFZpZGVvcyIsImlkIiwidHlwZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHRzIiwianNvbiIsIk1vdmllU2ltaWxhciIsIm5ld1R5cGUiLCJ2aWRlb3MiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYXAiLCJ2aWRlbyIsImlkeCIsInBvc3Rlcl9wYXRoIiwidGl0bGUiLCJuYW1lIiwicHJlZmV0Y2giLCJocmVmIiwiY2FyZCIsImltZyIsInNyYyIsImFsdCIsIm5vSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/movie/movie-similar.tsx\n"));

/***/ })

});