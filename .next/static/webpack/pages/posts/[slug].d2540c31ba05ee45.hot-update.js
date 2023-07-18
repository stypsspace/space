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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Avatar */ \"./src/components/ui/Avatar.jsx\");\n/* harmony import */ var _ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ContentfulImage */ \"./src/components/ui/ContentfulImage.jsx\");\n/* harmony import */ var _ui_DateComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/DateComponent */ \"./src/components/ui/DateComponent.jsx\");\n\n\n\n\n\nconst PostHeader = (param)=>{\n    let { post  } = param;\n    const { title , coverImage , author , date , externalUrl  } = post.fields;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"post-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"post-externalurl\",\n                        children: externalUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: externalUrl,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Visit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex md:justify-between md:items-center md:mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"post-avatar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: author.fields.name,\n                            picture: author.fields.picture\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 33\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"post-date\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_DateComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            dateString: date,\n                            className: \"text-sm text-gray-400\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 33\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"post-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-8 md:mb-16 sm:mx-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        alt: \"Cover Image for \".concat(title),\n                        src: coverImage.fields.file.url,\n                        width: coverImage.fields.file.details.image.width,\n                        height: coverImage.fields.file.details.image.height\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center md:hidden mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"post-avatar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: author.fields.name,\n                            picture: author.fields.picture\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 33\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"post-date\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_DateComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            dateString: date,\n                            className: \"text-sm text-gray-400\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 31\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostHeader.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = PostHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostHeader);\nvar _c;\n$RefreshReg$(_c, \"PostHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3N0cy9Qb3N0SGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlCO0FBQ1E7QUFDa0I7QUFDSjtBQUUvQyxNQUFNSSxhQUFhLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFDMUIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFdBQVUsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFlBQVcsRUFBRSxHQUFHTCxLQUFLTSxNQUFNO0lBRXBFLHFCQUNFOzswQkFFRSw4REFBQ0M7Z0JBQUlDLE9BQU07O2tDQUNYLDhEQUFDQztrQ0FBSVI7Ozs7OztrQ0FDTCw4REFBQ1M7d0JBQUtGLE9BQU07a0NBQ1hILDZCQUNDLDhEQUFDTTs0QkFBRUMsTUFBTVA7NEJBQWFRLFFBQU87NEJBQVNDLEtBQUk7c0NBQ3hDLDRFQUFDQzswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNWiw4REFBQ1I7Z0JBQUlTLFdBQVU7O2tDQUdmLDhEQUFDTjt3QkFBS0YsT0FBTTtrQ0FBYyw0RUFBQ1osa0RBQU1BOzRCQUFDcUIsTUFBTWQsT0FBT0csTUFBTSxDQUFDVyxJQUFJOzRCQUFFQyxTQUFTZixPQUFPRyxNQUFNLENBQUNZLE9BQU87Ozs7Ozs7Ozs7O2tDQUN4Riw4REFBQ1I7d0JBQUtGLE9BQU07a0NBQVksNEVBQUNWLHlEQUFhQTs0QkFBQ3FCLFlBQVlmOzRCQUFNWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLckUsOERBQUNUO2dCQUFJQyxPQUFNOzBCQUNYLDRFQUFDRDtvQkFBSVMsV0FBVTs4QkFDYiw0RUFBQ25CLDJEQUFlQTt3QkFDZHVCLEtBQUssbUJBQXlCLE9BQU5uQjt3QkFDeEJvQixLQUFLbkIsV0FBV0ksTUFBTSxDQUFDZ0IsSUFBSSxDQUFDQyxHQUFHO3dCQUMvQkMsT0FBT3RCLFdBQVdJLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNGLEtBQUs7d0JBQ2pERyxRQUFRekIsV0FBV0ksTUFBTSxDQUFDZ0IsSUFBSSxDQUFDRyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdkQsOERBQUNwQjtnQkFBSVMsV0FBVTs7a0NBQ2YsOERBQUNOO3dCQUFLRixPQUFNO2tDQUFjLDRFQUFDWixrREFBTUE7NEJBQUNxQixNQUFNZCxPQUFPRyxNQUFNLENBQUNXLElBQUk7NEJBQUVDLFNBQVNmLE9BQU9HLE1BQU0sQ0FBQ1ksT0FBTzs7Ozs7Ozs7Ozs7a0NBQzFGLDhEQUFDUjt3QkFBS0YsT0FBTTtrQ0FBWSw0RUFBQ1YseURBQWFBOzRCQUFDcUIsWUFBWWY7NEJBQU1ZLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekU7S0EzQ01qQjtBQTZDTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3N0cy9Qb3N0SGVhZGVyLmpzeD8wYWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vdWkvQXZhdGFyJ1xuaW1wb3J0IENvbnRlbnRmdWxJbWFnZSBmcm9tICcuLi91aS9Db250ZW50ZnVsSW1hZ2UnXG5pbXBvcnQgRGF0ZUNvbXBvbmVudCBmcm9tICcuLi91aS9EYXRlQ29tcG9uZW50J1xuXG5jb25zdCBQb3N0SGVhZGVyID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGNvdmVySW1hZ2UsIGF1dGhvciwgZGF0ZSwgZXh0ZXJuYWxVcmwgfSA9IHBvc3QuZmllbGRzXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdC1oZWFkZXJcIj5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdC1leHRlcm5hbHVybFwiPlxuICAgICAge2V4dGVybmFsVXJsICYmIChcbiAgICAgICAgPGEgaHJlZj17ZXh0ZXJuYWxVcmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8YnV0dG9uPlZpc2l0PC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgICl9XG4gICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIG1kOmZsZXggbWQ6anVzdGlmeS1iZXR3ZWVuIG1kOml0ZW1zLWNlbnRlciBtZDptYi0xMCc+XG4gICAgICAgXG4gICAgICAgXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3QtYXZhdGFyXCI+PEF2YXRhciBuYW1lPXthdXRob3IuZmllbGRzLm5hbWV9IHBpY3R1cmU9e2F1dGhvci5maWVsZHMucGljdHVyZX0gLz48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicG9zdC1kYXRlXCI+PERhdGVDb21wb25lbnQgZGF0ZVN0cmluZz17ZGF0ZX0gY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS00MDAnIC8+PC9zcGFuPlxuICAgICAgXG4gICAgICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdC1pbWFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTggbWQ6bWItMTYgc206bXgtMCc+XG4gICAgICAgIDxDb250ZW50ZnVsSW1hZ2VcbiAgICAgICAgICBhbHQ9e2BDb3ZlciBJbWFnZSBmb3IgJHt0aXRsZX1gfVxuICAgICAgICAgIHNyYz17Y292ZXJJbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgd2lkdGg9e2NvdmVySW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2NvdmVySW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS5oZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1kOmhpZGRlbiBtYi02Jz5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdC1hdmF0YXJcIj48QXZhdGFyIG5hbWU9e2F1dGhvci5maWVsZHMubmFtZX0gcGljdHVyZT17YXV0aG9yLmZpZWxkcy5waWN0dXJlfSAvPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdC1kYXRlXCI+PERhdGVDb21wb25lbnQgZGF0ZVN0cmluZz17ZGF0ZX0gY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS00MDAnIC8+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEhlYWRlclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiQ29udGVudGZ1bEltYWdlIiwiRGF0ZUNvbXBvbmVudCIsIlBvc3RIZWFkZXIiLCJwb3N0IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiYXV0aG9yIiwiZGF0ZSIsImV4dGVybmFsVXJsIiwiZmllbGRzIiwiZGl2IiwiY2xhc3MiLCJoMiIsInNwYW4iLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm5hbWUiLCJwaWN0dXJlIiwiZGF0ZVN0cmluZyIsImFsdCIsInNyYyIsImZpbGUiLCJ1cmwiLCJ3aWR0aCIsImRldGFpbHMiLCJpbWFnZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/posts/PostHeader.jsx\n"));

/***/ })

});