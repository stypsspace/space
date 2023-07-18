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

/***/ "./src/components/posts/PostHeader.jsx":
/*!*********************************************!*\
  !*** ./src/components/posts/PostHeader.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Avatar */ \"./src/components/ui/Avatar.jsx\");\n/* harmony import */ var _ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ContentfulImage */ \"./src/components/ui/ContentfulImage.jsx\");\n/* harmony import */ var _ui_DateComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/DateComponent */ \"./src/components/ui/DateComponent.jsx\");\n\n\n\n\n\nconst PostHeader = (param)=>{\n    let { post  } = param;\n    const { title , coverImage , author , date , externalUrl  } = post.fields;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"post-title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"post-externalurl\",\n                        children: externalUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: externalUrl,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Visit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex md:justify-between md:items-center md:mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"post-avatar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: author.fields.name,\n                            picture: author.fields.picture\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 37\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"post-date\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_DateComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            dateString: date,\n                            className: \"text-sm text-gray-400\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 37\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-8 md:mb-16 sm:mx-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        alt: \"Cover Image for \".concat(title),\n                        src: coverImage.fields.file.url,\n                        width: coverImage.fields.file.details.image.width,\n                        height: coverImage.fields.file.details.image.height\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center md:hidden mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"post-avatar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: author.fields.name,\n                            picture: author.fields.picture\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 37\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"post-date\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_DateComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            dateString: date,\n                            className: \"text-sm text-gray-400\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 35\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = PostHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostHeader);\nvar _c;\n$RefreshReg$(_c, \"PostHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3N0cy9Qb3N0SGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlCO0FBQ1E7QUFDa0I7QUFDSjtBQUUvQyxNQUFNSSxhQUFhLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFDMUIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFdBQVUsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFlBQVcsRUFBRSxHQUFHTCxLQUFLTSxNQUFNO0lBRXBFLHFCQUNFOzswQkFFRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDQzt3QkFBS0QsV0FBVTtrQ0FDaEIsNEVBQUNFO3NDQUFJVDs7Ozs7Ozs7Ozs7a0NBRUwsOERBQUNRO3dCQUFLRCxXQUFVO2tDQUNmSCw2QkFDQyw4REFBQ007NEJBQUVDLE1BQU1QOzRCQUFhUSxRQUFPOzRCQUFTQyxLQUFJO3NDQUN4Qyw0RUFBQ0M7MENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVosOERBQUNSO2dCQUFJQyxXQUFVOztrQ0FHZiw4REFBQ0M7d0JBQUtELFdBQVU7a0NBQWMsNEVBQUNaLGtEQUFNQTs0QkFBQ29CLE1BQU1iLE9BQU9HLE1BQU0sQ0FBQ1UsSUFBSTs0QkFBRUMsU0FBU2QsT0FBT0csTUFBTSxDQUFDVyxPQUFPOzs7Ozs7Ozs7OztrQ0FDNUYsOERBQUNSO3dCQUFLRCxXQUFVO2tDQUFZLDRFQUFDVix5REFBYUE7NEJBQUNvQixZQUFZZDs0QkFBTUksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3pFLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNYLDJEQUFlQTt3QkFDZHNCLEtBQUssbUJBQXlCLE9BQU5sQjt3QkFDeEJtQixLQUFLbEIsV0FBV0ksTUFBTSxDQUFDZSxJQUFJLENBQUNDLEdBQUc7d0JBQy9CQyxPQUFPckIsV0FBV0ksTUFBTSxDQUFDZSxJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixLQUFLO3dCQUNqREcsUUFBUXhCLFdBQVdJLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDRyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdkQsOERBQUNuQjtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNDO3dCQUFLRCxXQUFVO2tDQUFjLDRFQUFDWixrREFBTUE7NEJBQUNvQixNQUFNYixPQUFPRyxNQUFNLENBQUNVLElBQUk7NEJBQUVDLFNBQVNkLE9BQU9HLE1BQU0sQ0FBQ1csT0FBTzs7Ozs7Ozs7Ozs7a0NBQzlGLDhEQUFDUjt3QkFBS0QsV0FBVTtrQ0FBWSw0RUFBQ1YseURBQWFBOzRCQUFDb0IsWUFBWWQ7NEJBQU1JLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0U7S0E3Q01UO0FBK0NOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL1Bvc3RIZWFkZXIuanN4PzBhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF2YXRhciBmcm9tICcuLi91aS9BdmF0YXInXG5pbXBvcnQgQ29udGVudGZ1bEltYWdlIGZyb20gJy4uL3VpL0NvbnRlbnRmdWxJbWFnZSdcbmltcG9ydCBEYXRlQ29tcG9uZW50IGZyb20gJy4uL3VpL0RhdGVDb21wb25lbnQnXG5cbmNvbnN0IFBvc3RIZWFkZXIgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgY292ZXJJbWFnZSwgYXV0aG9yLCBkYXRlLCBleHRlcm5hbFVybCB9ID0gcG9zdC5maWVsZHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1oZWFkZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3QtZXh0ZXJuYWx1cmxcIj5cbiAgICAgIHtleHRlcm5hbFVybCAmJiAoXG4gICAgICAgIDxhIGhyZWY9e2V4dGVybmFsVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbj5WaXNpdDwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICApfVxuICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IG1kOmp1c3RpZnktYmV0d2VlbiBtZDppdGVtcy1jZW50ZXIgbWQ6bWItMTAnPlxuICAgICAgIFxuICAgICAgIFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdC1hdmF0YXJcIj48QXZhdGFyIG5hbWU9e2F1dGhvci5maWVsZHMubmFtZX0gcGljdHVyZT17YXV0aG9yLmZpZWxkcy5waWN0dXJlfSAvPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+PERhdGVDb21wb25lbnQgZGF0ZVN0cmluZz17ZGF0ZX0gY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS00MDAnIC8+PC9zcGFuPlxuICAgICAgXG4gICAgICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW1hZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi04IG1kOm1iLTE2IHNtOm14LTAnPlxuICAgICAgICA8Q29udGVudGZ1bEltYWdlXG4gICAgICAgICAgYWx0PXtgQ292ZXIgSW1hZ2UgZm9yICR7dGl0bGV9YH1cbiAgICAgICAgICBzcmM9e2NvdmVySW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgIHdpZHRoPXtjb3ZlckltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2Uud2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtjb3ZlckltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2UuaGVpZ2h0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtZDpoaWRkZW4gbWItNic+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0LWF2YXRhclwiPjxBdmF0YXIgbmFtZT17YXV0aG9yLmZpZWxkcy5uYW1lfSBwaWN0dXJlPXthdXRob3IuZmllbGRzLnBpY3R1cmV9IC8+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+PERhdGVDb21wb25lbnQgZGF0ZVN0cmluZz17ZGF0ZX0gY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS00MDAnIC8+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEhlYWRlclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiQ29udGVudGZ1bEltYWdlIiwiRGF0ZUNvbXBvbmVudCIsIlBvc3RIZWFkZXIiLCJwb3N0IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiYXV0aG9yIiwiZGF0ZSIsImV4dGVybmFsVXJsIiwiZmllbGRzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImgxIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJidXR0b24iLCJuYW1lIiwicGljdHVyZSIsImRhdGVTdHJpbmciLCJhbHQiLCJzcmMiLCJmaWxlIiwidXJsIiwid2lkdGgiLCJkZXRhaWxzIiwiaW1hZ2UiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/posts/PostHeader.jsx\n"));

/***/ })

});