"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./src/components/posts/PostCard.jsx":
/*!*******************************************!*\
  !*** ./src/components/posts/PostCard.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Avatar */ \"./src/components/ui/Avatar.jsx\");\n/* harmony import */ var _ui_DateComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/DateComponent */ \"./src/components/ui/DateComponent.jsx\");\n/* harmony import */ var _ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ContentfulImage */ \"./src/components/ui/ContentfulImage.jsx\");\n\n\n\n\n\nconst PostCard = (param)=>{\n    let { post  } = param;\n    if (!post || !post.fields) {\n        // Handle case when post or post.fields is undefined\n        return null; // You can render a fallback component or return null to skip rendering\n    }\n    const { title , slug , excerpt , coverImage , author , date , externalUrl  } = post.fields;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"rounded-md overflow-hidden shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl mb-1 leading-snug\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    externalUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: externalUrl,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"mt-4 text-blue-500 underline\",\n                        children: \"Visit Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm mb-4 text-gray-400\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_DateComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            dateString: date\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base mb-4\",\n                        children: excerpt\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: author.fields.name,\n                        picture: author.fields.picture\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/posts/\".concat(slug),\n                \"aria-label\": title,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        alt: \"Cover Image for \".concat(title),\n                        src: coverImage.fields.file.url,\n                        width: coverImage.fields.file.details.image.width,\n                        height: coverImage.fields.file.details.image.height\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3N0cy9Qb3N0Q2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNLO0FBQ2M7QUFDSTtBQUVwRCxNQUFNSSxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFDeEIsSUFBSSxDQUFDQSxRQUFRLENBQUNBLEtBQUtDLE1BQU0sRUFBRTtRQUN6QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLEVBQUUsdUVBQXVFO0lBQ3RGLENBQUM7SUFFRCxNQUFNLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLFdBQVUsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFlBQVcsRUFBRSxHQUFHUixLQUFLQyxNQUFNO0lBRW5GLHFCQUNFLDhEQUFDUTtRQUFHQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBNkJSOzs7Ozs7b0JBQzFDTSw2QkFDQyw4REFBQ0s7d0JBQUVDLE1BQU1OO3dCQUFhTyxRQUFPO3dCQUFTQyxLQUFJO3dCQUFzQk4sV0FBVTtrQ0FBK0I7Ozs7OztrQ0FJM0csOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDYix5REFBYUE7NEJBQUNvQixZQUFZVjs7Ozs7Ozs7Ozs7a0NBRTdCLDhEQUFDVzt3QkFBRVIsV0FBVTtrQ0FBa0JOOzs7Ozs7a0NBQy9CLDhEQUFDUixrREFBTUE7d0JBQUN1QixNQUFNYixPQUFPTCxNQUFNLENBQUNrQixJQUFJO3dCQUFFQyxTQUFTZCxPQUFPTCxNQUFNLENBQUNtQixPQUFPOzs7Ozs7Ozs7Ozs7MEJBR2xFLDhEQUFDekIsa0RBQUlBO2dCQUFDbUIsTUFBTSxVQUFlLE9BQUxYO2dCQUFRa0IsY0FBWW5COzBCQUN4Qyw0RUFBQ1M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNaLDJEQUFlQTt3QkFDZHdCLEtBQUssbUJBQXlCLE9BQU5wQjt3QkFDeEJxQixLQUFLbEIsV0FBV0osTUFBTSxDQUFDdUIsSUFBSSxDQUFDQyxHQUFHO3dCQUMvQkMsT0FBT3JCLFdBQVdKLE1BQU0sQ0FBQ3VCLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNGLEtBQUs7d0JBQ2pERyxRQUFReEIsV0FBV0osTUFBTSxDQUFDdUIsSUFBSSxDQUFDRyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vRDtLQXJDTTlCO0FBdUNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL1Bvc3RDYXJkLmpzeD8zYzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL3VpL0F2YXRhcic7XG5pbXBvcnQgRGF0ZUNvbXBvbmVudCBmcm9tICcuLi91aS9EYXRlQ29tcG9uZW50JztcbmltcG9ydCBDb250ZW50ZnVsSW1hZ2UgZnJvbSAnLi4vdWkvQ29udGVudGZ1bEltYWdlJztcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgaWYgKCFwb3N0IHx8ICFwb3N0LmZpZWxkcykge1xuICAgIC8vIEhhbmRsZSBjYXNlIHdoZW4gcG9zdCBvciBwb3N0LmZpZWxkcyBpcyB1bmRlZmluZWRcbiAgICByZXR1cm4gbnVsbDsgLy8gWW91IGNhbiByZW5kZXIgYSBmYWxsYmFjayBjb21wb25lbnQgb3IgcmV0dXJuIG51bGwgdG8gc2tpcCByZW5kZXJpbmdcbiAgfVxuXG4gIGNvbnN0IHsgdGl0bGUsIHNsdWcsIGV4Y2VycHQsIGNvdmVySW1hZ2UsIGF1dGhvciwgZGF0ZSwgZXh0ZXJuYWxVcmwgfSA9IHBvc3QuZmllbGRzO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT0ncm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kJz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC00Jz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC14bCBtYi0xIGxlYWRpbmctc251Zyc+e3RpdGxlfTwvaDM+XG4gICAgICAgIHtleHRlcm5hbFVybCAmJiAoXG4gICAgICAgICAgPGEgaHJlZj17ZXh0ZXJuYWxVcmx9IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInIGNsYXNzTmFtZT0nbXQtNCB0ZXh0LWJsdWUtNTAwIHVuZGVybGluZSc+XG4gICAgICAgICAgICBWaXNpdCBXZWJzaXRlXG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSBtYi00IHRleHQtZ3JheS00MDAnPlxuICAgICAgICAgIDxEYXRlQ29tcG9uZW50IGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSBtYi00Jz57ZXhjZXJwdH08L3A+XG4gICAgICAgIDxBdmF0YXIgbmFtZT17YXV0aG9yLmZpZWxkcy5uYW1lfSBwaWN0dXJlPXthdXRob3IuZmllbGRzLnBpY3R1cmV9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH0gYXJpYS1sYWJlbD17dGl0bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMic+XG4gICAgICAgICAgPENvbnRlbnRmdWxJbWFnZVxuICAgICAgICAgICAgYWx0PXtgQ292ZXIgSW1hZ2UgZm9yICR7dGl0bGV9YH1cbiAgICAgICAgICAgIHNyYz17Y292ZXJJbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICB3aWR0aD17Y292ZXJJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtjb3ZlckltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2UuaGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICBcbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iXSwibmFtZXMiOlsiTGluayIsIkF2YXRhciIsIkRhdGVDb21wb25lbnQiLCJDb250ZW50ZnVsSW1hZ2UiLCJQb3N0Q2FyZCIsInBvc3QiLCJmaWVsZHMiLCJ0aXRsZSIsInNsdWciLCJleGNlcnB0IiwiY292ZXJJbWFnZSIsImF1dGhvciIsImRhdGUiLCJleHRlcm5hbFVybCIsImxpIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImRhdGVTdHJpbmciLCJwIiwibmFtZSIsInBpY3R1cmUiLCJhcmlhLWxhYmVsIiwiYWx0Iiwic3JjIiwiZmlsZSIsInVybCIsIndpZHRoIiwiZGV0YWlscyIsImltYWdlIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/posts/PostCard.jsx\n"));

/***/ })

});