"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_posts_PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/posts/PostCard */ \"./src/components/posts/PostCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Posts = (param)=>{\n    let { posts  } = param;\n    _s();\n    const [selectedFilter, setSelectedFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"All\");\n    const handleFilterSelect = (filter)=>{\n        setSelectedFilter(filter);\n    };\n    const filteredPosts = selectedFilter === \"All\" ? posts : posts.filter((post)=>post.fields.category === selectedFilter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"filter-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"All\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"All\"),\n                            children: \"All\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"Portfolio\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"Portfolio\"),\n                            children: \"Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"Commerce\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"Commerce\"),\n                            children: \"Commerce\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"App\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"App\"),\n                            children: \"App\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10\",\n                    children: filteredPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_PostCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            post: post\n                        }, post.id, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined) // Use the correct property for the key attribute\n                    )\n                }, void 0, false, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Posts, \"JdWGyIgyAxNJ5jxPXev2qsEkOZ0=\");\n_c = Posts;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNtRDtBQUNsQjtBQUVqQyxNQUFNRSxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7O0lBQ3RCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0osK0NBQVFBLENBQUM7SUFFckQsTUFBTUsscUJBQXFCLENBQUNDLFNBQVc7UUFDckNGLGtCQUFrQkU7SUFDcEI7SUFFQSxNQUFNQyxnQkFBZ0JKLG1CQUFtQixRQUFRRCxRQUFRQSxNQUFNSSxNQUFNLENBQUNFLENBQUFBLE9BQVFBLEtBQUtDLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLUCxlQUFlO0lBRXRILHFCQUNFLDhEQUFDUTtRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQU9GLFdBQVdULG1CQUFtQixRQUFRLFdBQVcsRUFBRTs0QkFBRVksU0FBUyxJQUFNVixtQkFBbUI7c0NBQVE7Ozs7OztzQ0FHdkcsOERBQUNTOzRCQUFPRixXQUFXVCxtQkFBbUIsY0FBYyxXQUFXLEVBQUU7NEJBQUVZLFNBQVMsSUFBTVYsbUJBQW1CO3NDQUFjOzs7Ozs7c0NBR25ILDhEQUFDUzs0QkFBT0YsV0FBV1QsbUJBQW1CLGFBQWEsV0FBVyxFQUFFOzRCQUFFWSxTQUFTLElBQU1WLG1CQUFtQjtzQ0FBYTs7Ozs7O3NDQUdqSCw4REFBQ1M7NEJBQU9GLFdBQVdULG1CQUFtQixRQUFRLFdBQVcsRUFBRTs0QkFBRVksU0FBUyxJQUFNVixtQkFBbUI7c0NBQVE7Ozs7Ozs7Ozs7Ozs4QkFLekcsOERBQUNXO29CQUFHSixXQUFVOzhCQUNYTCxjQUFjVSxHQUFHLENBQUMsQ0FBQ1QscUJBQ2xCLDhEQUFDVCxrRUFBUUE7NEJBQWVTLE1BQU1BOzJCQUFmQSxLQUFLVSxFQUFFOzs7O3NDQUFpQixpREFBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRztHQW5DTWpCO0tBQUFBOztBQXFETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnQC9saWIvY29udGVudGZ1bC9jbGllbnQnO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9wb3N0cy9Qb3N0Q2FyZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUG9zdHMgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbHRlciwgc2V0U2VsZWN0ZWRGaWx0ZXJdID0gdXNlU3RhdGUoJ0FsbCcpO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlclNlbGVjdCA9IChmaWx0ZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpbHRlcihmaWx0ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkUG9zdHMgPSBzZWxlY3RlZEZpbHRlciA9PT0gJ0FsbCcgPyBwb3N0cyA6IHBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QuZmllbGRzLmNhdGVnb3J5ID09PSBzZWxlY3RlZEZpbHRlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItY29udGFpbmVyJz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c2VsZWN0ZWRGaWx0ZXIgPT09ICdBbGwnID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyU2VsZWN0KCdBbGwnKX0+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c2VsZWN0ZWRGaWx0ZXIgPT09ICdQb3J0Zm9saW8nID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyU2VsZWN0KCdQb3J0Zm9saW8nKX0+XG4gICAgICAgICAgICBQb3J0Zm9saW9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c2VsZWN0ZWRGaWx0ZXIgPT09ICdDb21tZXJjZScgPyAnYWN0aXZlJyA6ICcnfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJTZWxlY3QoJ0NvbW1lcmNlJyl9PlxuICAgICAgICAgICAgQ29tbWVyY2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c2VsZWN0ZWRGaWx0ZXIgPT09ICdBcHAnID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyU2VsZWN0KCdBcHAnKX0+XG4gICAgICAgICAgICBBcHBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBzbTpnYXAtMTAnPlxuICAgICAgICAgIHtmaWx0ZXJlZFBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4gLy8gVXNlIHRoZSBjb3JyZWN0IHByb3BlcnR5IGZvciB0aGUga2V5IGF0dHJpYnV0ZVxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAncG9zdCcgfSk7XG5cbiAgY29uc3QgcG9zdHMgPSByZXNwb25zZS5pdGVtcy5tYXAoKHBvc3QpID0+ICh7XG4gICAgLi4ucG9zdC5maWVsZHMsXG4gICAgZXh0ZXJuYWxMaW5rOiBwb3N0LmZpZWxkcy5leHRlcm5hbExpbmsgfHwgJycsXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICAgIHJldmFsaWRhdGU6IDYwLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInVzZVN0YXRlIiwiUG9zdHMiLCJwb3N0cyIsInNlbGVjdGVkRmlsdGVyIiwic2V0U2VsZWN0ZWRGaWx0ZXIiLCJoYW5kbGVGaWx0ZXJTZWxlY3QiLCJmaWx0ZXIiLCJmaWx0ZXJlZFBvc3RzIiwicG9zdCIsImZpZWxkcyIsImNhdGVnb3J5Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});