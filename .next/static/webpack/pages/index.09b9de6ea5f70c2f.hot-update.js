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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_posts_PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/posts/PostCard */ \"./src/components/posts/PostCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Posts = (param)=>{\n    let { posts  } = param;\n    _s();\n    const [selectedFilter, setSelectedFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"All\");\n    const handleFilterSelect = (filter)=>{\n        setSelectedFilter(filter);\n    };\n    const filteredPosts = selectedFilter === \"All\" ? posts : posts.filter((post)=>post.fields.category === selectedFilter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"filter-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"All\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"All\"),\n                            children: \"All\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"Portfolio\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"Portfolio\"),\n                            children: \"Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"Commerce\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"Commerce\"),\n                            children: \"Commerce\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"Personal\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"Personal\"),\n                            children: \"Personal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: selectedFilter === \"App\" ? \"active\" : \"\",\n                            onClick: ()=>handleFilterSelect(\"App\"),\n                            children: \"App\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10\",\n                    children: filteredPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_PostCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            post: post\n                        }, post.slug, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mytch/Documents/GitHub/space/src/pages/index.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Posts, \"JdWGyIgyAxNJ5jxPXev2qsEkOZ0=\");\n_c = Posts;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNtRDtBQUNsQjtBQUVqQyxNQUFNRSxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7O0lBQ3RCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0osK0NBQVFBLENBQUM7SUFFckQsTUFBTUsscUJBQXFCLENBQUNDLFNBQVc7UUFDckNGLGtCQUFrQkU7SUFDcEI7SUFFQSxNQUFNQyxnQkFBZ0JKLG1CQUFtQixRQUFRRCxRQUFRQSxNQUFNSSxNQUFNLENBQUNFLENBQUFBLE9BQVFBLEtBQUtDLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLUCxlQUFlO0lBRXRILHFCQUNFLDhEQUFDUTtRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQU9GLFdBQVdULG1CQUFtQixRQUFRLFdBQVcsRUFBRTs0QkFBRVksU0FBUyxJQUFNVixtQkFBbUI7c0NBQVE7Ozs7OztzQ0FHdkcsOERBQUNTOzRCQUFPRixXQUFXVCxtQkFBbUIsY0FBYyxXQUFXLEVBQUU7NEJBQUVZLFNBQVMsSUFBTVYsbUJBQW1CO3NDQUFjOzs7Ozs7c0NBR25ILDhEQUFDUzs0QkFBT0YsV0FBV1QsbUJBQW1CLGFBQWEsV0FBVyxFQUFFOzRCQUFFWSxTQUFTLElBQU1WLG1CQUFtQjtzQ0FBYTs7Ozs7O3NDQUdqSCw4REFBQ1M7NEJBQU9GLFdBQVdULG1CQUFtQixhQUFhLFdBQVcsRUFBRTs0QkFBRVksU0FBUyxJQUFNVixtQkFBbUI7c0NBQWE7Ozs7OztzQ0FHakgsOERBQUNTOzRCQUFPRixXQUFXVCxtQkFBbUIsUUFBUSxXQUFXLEVBQUU7NEJBQUVZLFNBQVMsSUFBTVYsbUJBQW1CO3NDQUFROzs7Ozs7Ozs7Ozs7OEJBS3pHLDhEQUFDVztvQkFBR0osV0FBVTs4QkFDWEwsY0FBY1UsR0FBRyxDQUFDLENBQUNULHFCQUNsQiw4REFBQ1Qsa0VBQVFBOzRCQUFpQlMsTUFBTUE7MkJBQWpCQSxLQUFLVSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7R0F0Q01qQjtLQUFBQTs7QUEwRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gJ0AvbGliL2NvbnRlbnRmdWwvY2xpZW50JztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcG9zdHMvUG9zdENhcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBvc3RzID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRGaWx0ZXIsIHNldFNlbGVjdGVkRmlsdGVyXSA9IHVzZVN0YXRlKCdBbGwnKTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXJTZWxlY3QgPSAoZmlsdGVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWx0ZXIoZmlsdGVyKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gc2VsZWN0ZWRGaWx0ZXIgPT09ICdBbGwnID8gcG9zdHMgOiBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmZpZWxkcy5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRGaWx0ZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NlbGVjdGVkRmlsdGVyID09PSAnQWxsJyA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlclNlbGVjdCgnQWxsJyl9PlxuICAgICAgICAgICAgQWxsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NlbGVjdGVkRmlsdGVyID09PSAnUG9ydGZvbGlvJyA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlclNlbGVjdCgnUG9ydGZvbGlvJyl9PlxuICAgICAgICAgICAgUG9ydGZvbGlvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NlbGVjdGVkRmlsdGVyID09PSAnQ29tbWVyY2UnID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyU2VsZWN0KCdDb21tZXJjZScpfT5cbiAgICAgICAgICAgIENvbW1lcmNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NlbGVjdGVkRmlsdGVyID09PSAnUGVyc29uYWwnID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyU2VsZWN0KCdQZXJzb25hbCcpfT5cbiAgICAgICAgICAgIFBlcnNvbmFsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NlbGVjdGVkRmlsdGVyID09PSAnQXBwJyA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlclNlbGVjdCgnQXBwJyl9PlxuICAgICAgICAgICAgQXBwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgc206Z2FwLTEwJz5cbiAgICAgICAgICB7ZmlsdGVyZWRQb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3Quc2x1Z30gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogJ3Bvc3QnIH0pO1xuXG4gIGNvbnN0IHBvc3RzID0gcmVzcG9uc2UuaXRlbXMubWFwKChwb3N0KSA9PiAoe1xuICAgIGZpZWxkczoge1xuICAgICAgLi4ucG9zdC5maWVsZHMsXG4gICAgICBleHRlcm5hbFVybDogcG9zdC5maWVsZHMuZXh0ZXJuYWxVcmwgfHwgJycsIC8vIEFkZCBleHRlcm5hbFVybCBmaWVsZCB3aXRoIGEgZmFsbGJhY2sgdmFsdWVcbiAgICB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgICByZXZhbGlkYXRlOiA2MCxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iXSwibmFtZXMiOlsiUG9zdENhcmQiLCJ1c2VTdGF0ZSIsIlBvc3RzIiwicG9zdHMiLCJzZWxlY3RlZEZpbHRlciIsInNldFNlbGVjdGVkRmlsdGVyIiwiaGFuZGxlRmlsdGVyU2VsZWN0IiwiZmlsdGVyIiwiZmlsdGVyZWRQb3N0cyIsInBvc3QiLCJmaWVsZHMiLCJjYXRlZ29yeSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});