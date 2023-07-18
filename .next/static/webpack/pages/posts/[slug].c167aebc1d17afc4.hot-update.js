"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./src/components/posts/PostCard.jsx":
/*!*******************************************!*\
  !*** ./src/components/posts/PostCard.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Avatar */ \"./src/components/ui/Avatar.jsx\");\n/* harmony import */ var _ui_DateComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/DateComponent */ \"./src/components/ui/DateComponent.jsx\");\n/* harmony import */ var _ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ContentfulImage */ \"./src/components/ui/ContentfulImage.jsx\");\n\n\n\n\n\nconst PostCard = (param)=>{\n    let { post  } = param;\n    if (!post || !post.fields) {\n        // Handle case when post or post.fields is undefined\n        return null; // You can render a fallback component or return null to skip rendering\n    }\n    const { title , slug , excerpt , coverImage , author , date , externalUrl  } = post.fields;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"rounded-md overflow-hidden shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"post-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                class: \"post-title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl mb-1 leading-snug\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                class: \"post-externalurl\",\n                                children: externalUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: externalUrl,\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"mt-4 text-blue-500 underline\",\n                                    children: \"Visit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm mb-4 text-gray-400\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            class: \"post-date\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_DateComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                dateString: date\n                            }, void 0, false, {\n                                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 35\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"post-excerpt\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base mb-4\",\n                            children: excerpt\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"post-avatar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: author.fields.name,\n                            picture: author.fields.picture\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"post-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/posts/\".concat(slug),\n                    \"aria-label\": title,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            alt: \"Cover Image for \".concat(title),\n                            src: coverImage.fields.file.url,\n                            width: coverImage.fields.file.details.image.width,\n                            height: coverImage.fields.file.details.image.height\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3N0cy9Qb3N0Q2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNLO0FBQ2M7QUFDSTtBQUVwRCxNQUFNSSxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFDeEIsSUFBSSxDQUFDQSxRQUFRLENBQUNBLEtBQUtDLE1BQU0sRUFBRTtRQUN6QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLEVBQUUsdUVBQXVFO0lBQ3RGLENBQUM7SUFFRCxNQUFNLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLFdBQVUsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFlBQVcsRUFBRSxHQUFHUixLQUFLQyxNQUFNO0lBRW5GLHFCQUNFLDhEQUFDUTtRQUFHQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUVmLDhEQUFDQzt3QkFBSUMsT0FBTTs7MENBQ1IsOERBQUNDO2dDQUFLRCxPQUFNOzBDQUNYLDRFQUFDRTtvQ0FBR0osV0FBVTs4Q0FBNkJSOzs7Ozs7Ozs7OzswQ0FHM0MsOERBQUNXO2dDQUFLRCxPQUFNOzBDQUNYSiw2QkFDQyw4REFBQ087b0NBQUVDLE1BQU1SO29DQUFhUyxRQUFPO29DQUFTQyxLQUFJO29DQUFzQlIsV0FBVTs4Q0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU8zRyw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUFLRCxPQUFNO3NDQUFZLDRFQUFDZix5REFBYUE7Z0NBQUNzQixZQUFZWjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFckQsOERBQUNJO3dCQUFJQyxPQUFNO2tDQUNYLDRFQUFDUTs0QkFBRVYsV0FBVTtzQ0FBa0JOOzs7Ozs7Ozs7OztrQ0FFL0IsOERBQUNPO3dCQUFJQyxPQUFNO2tDQUFjLDRFQUFDaEIsa0RBQU1BOzRCQUFDeUIsTUFBTWYsT0FBT0wsTUFBTSxDQUFDb0IsSUFBSTs0QkFBRUMsU0FBU2hCLE9BQU9MLE1BQU0sQ0FBQ3FCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkzRiw4REFBQ1g7Z0JBQUlDLE9BQU07MEJBQ1gsNEVBQUNqQixrREFBSUE7b0JBQUNxQixNQUFNLFVBQWUsT0FBTGI7b0JBQVFvQixjQUFZckI7OEJBQ3hDLDRFQUFDUzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ1osMkRBQWVBOzRCQUNkMEIsS0FBSyxtQkFBeUIsT0FBTnRCOzRCQUN4QnVCLEtBQUtwQixXQUFXSixNQUFNLENBQUN5QixJQUFJLENBQUNDLEdBQUc7NEJBQy9CQyxPQUFPdkIsV0FBV0osTUFBTSxDQUFDeUIsSUFBSSxDQUFDRyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsS0FBSzs0QkFDakRHLFFBQVExQixXQUFXSixNQUFNLENBQUN5QixJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRL0Q7S0FuRE1oQztBQXFETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3N0cy9Qb3N0Q2FyZC5qc3g/M2M0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEF2YXRhciBmcm9tICcuLi91aS9BdmF0YXInO1xuaW1wb3J0IERhdGVDb21wb25lbnQgZnJvbSAnLi4vdWkvRGF0ZUNvbXBvbmVudCc7XG5pbXBvcnQgQ29udGVudGZ1bEltYWdlIGZyb20gJy4uL3VpL0NvbnRlbnRmdWxJbWFnZSc7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XG4gIGlmICghcG9zdCB8fCAhcG9zdC5maWVsZHMpIHtcbiAgICAvLyBIYW5kbGUgY2FzZSB3aGVuIHBvc3Qgb3IgcG9zdC5maWVsZHMgaXMgdW5kZWZpbmVkXG4gICAgcmV0dXJuIG51bGw7IC8vIFlvdSBjYW4gcmVuZGVyIGEgZmFsbGJhY2sgY29tcG9uZW50IG9yIHJldHVybiBudWxsIHRvIHNraXAgcmVuZGVyaW5nXG4gIH1cblxuICBjb25zdCB7IHRpdGxlLCBzbHVnLCBleGNlcnB0LCBjb3ZlckltYWdlLCBhdXRob3IsIGRhdGUsIGV4dGVybmFsVXJsIH0gPSBwb3N0LmZpZWxkcztcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9J3JvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1tZCc+XG4gICAgPGRpdiBjbGFzc05hbWU9J3AtNCc+XG5cbiAgICA8ZGl2IGNsYXNzPVwicG9zdC1oZWFkZXJcIj5cbiAgICAgICA8c3BhbiBjbGFzcz1cInBvc3QtdGl0bGVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14bCBtYi0xIGxlYWRpbmctc251Zyc+e3RpdGxlfTwvaDE+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cInBvc3QtZXh0ZXJuYWx1cmxcIj5cbiAgICAgICAge2V4dGVybmFsVXJsICYmIChcbiAgICAgICAgICA8YSBocmVmPXtleHRlcm5hbFVybH0gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgY2xhc3NOYW1lPSdtdC00IHRleHQtYmx1ZS01MDAgdW5kZXJsaW5lJz5cbiAgICAgICAgICAgIFZpc2l0XG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIG1iLTQgdGV4dC1ncmF5LTQwMCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0LWRhdGVcIj48RGF0ZUNvbXBvbmVudCBkYXRlU3RyaW5nPXtkYXRlfSAvPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0LWV4Y2VycHRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgbWItNCc+e2V4Y2VycHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvc3QtYXZhdGFyXCI+PEF2YXRhciBuYW1lPXthdXRob3IuZmllbGRzLm5hbWV9IHBpY3R1cmU9e2F1dGhvci5maWVsZHMucGljdHVyZX0gLz48L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3QtaW1hZ2VcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtzbHVnfWB9IGFyaWEtbGFiZWw9e3RpdGxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTInPlxuICAgICAgICAgIDxDb250ZW50ZnVsSW1hZ2VcbiAgICAgICAgICAgIGFsdD17YENvdmVyIEltYWdlIGZvciAke3RpdGxlfWB9XG4gICAgICAgICAgICBzcmM9e2NvdmVySW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgICAgd2lkdGg9e2NvdmVySW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS53aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17Y292ZXJJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgPC9kaXY+XG5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iXSwibmFtZXMiOlsiTGluayIsIkF2YXRhciIsIkRhdGVDb21wb25lbnQiLCJDb250ZW50ZnVsSW1hZ2UiLCJQb3N0Q2FyZCIsInBvc3QiLCJmaWVsZHMiLCJ0aXRsZSIsInNsdWciLCJleGNlcnB0IiwiY292ZXJJbWFnZSIsImF1dGhvciIsImRhdGUiLCJleHRlcm5hbFVybCIsImxpIiwiY2xhc3NOYW1lIiwiZGl2IiwiY2xhc3MiLCJzcGFuIiwiaDEiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImRhdGVTdHJpbmciLCJwIiwibmFtZSIsInBpY3R1cmUiLCJhcmlhLWxhYmVsIiwiYWx0Iiwic3JjIiwiZmlsZSIsInVybCIsIndpZHRoIiwiZGV0YWlscyIsImltYWdlIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/posts/PostCard.jsx\n"));

/***/ })

});