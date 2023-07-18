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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Avatar */ \"./src/components/ui/Avatar.jsx\");\n/* harmony import */ var _ui_DateComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/DateComponent */ \"./src/components/ui/DateComponent.jsx\");\n/* harmony import */ var _ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ContentfulImage */ \"./src/components/ui/ContentfulImage.jsx\");\n\n\n\n\n\nconst PostCard = (param)=>{\n    let { post  } = param;\n    const { title , slug , excerpt , coverImage , author , date , externalLink  } = post.fields;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"rounded-md overflow-hidden shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/posts/\".concat(slug),\n                \"aria-label\": title,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ContentfulImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        alt: \"Cover Image for \".concat(title),\n                        src: coverImage.fields.file.url,\n                        width: coverImage.fields.file.details.image.width,\n                        height: coverImage.fields.file.details.image.height\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl mb-1 leading-snug\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm mb-4 text-gray-400\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_DateComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            dateString: date\n                        }, void 0, false, {\n                            fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base mb-4\",\n                        children: excerpt\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: author.fields.name,\n                        picture: author.fields.picture\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    externalLink && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: externalLink,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"mt-4 text-blue-500 underline\",\n                        children: \"Visit Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mytch/Documents/GitHub/space/src/components/posts/PostCard.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3N0cy9Qb3N0Q2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNLO0FBQ2M7QUFDSTtBQUVwRCxNQUFNSSxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFDeEIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBRUMsS0FBSSxFQUFFQyxhQUFZLEVBQUUsR0FBR1AsS0FBS1EsTUFBTTtJQUVwRixxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNmLGtEQUFJQTtnQkFBQ2dCLE1BQU0sVUFBZSxPQUFMVDtnQkFBUVUsY0FBWVg7MEJBQ3hDLDRFQUFDWTtvQkFBSUgsV0FBVTs4QkFDYiw0RUFBQ1osMkRBQWVBO3dCQUNkZ0IsS0FBSyxtQkFBeUIsT0FBTmI7d0JBQ3hCYyxLQUFLWCxXQUFXSSxNQUFNLENBQUNRLElBQUksQ0FBQ0MsR0FBRzt3QkFDL0JDLE9BQU9kLFdBQVdJLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDRyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsS0FBSzt3QkFDakRHLFFBQVFqQixXQUFXSSxNQUFNLENBQUNRLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpELDhEQUFDUjtnQkFBSUgsV0FBVTs7a0NBQ2IsOERBQUNZO3dCQUFHWixXQUFVO2tDQUE2QlQ7Ozs7OztrQ0FDM0MsOERBQUNZO3dCQUFJSCxXQUFVO2tDQUNiLDRFQUFDYix5REFBYUE7NEJBQUMwQixZQUFZakI7Ozs7Ozs7Ozs7O2tDQUU3Qiw4REFBQ2tCO3dCQUFFZCxXQUFVO2tDQUFrQlA7Ozs7OztrQ0FDL0IsOERBQUNQLGtEQUFNQTt3QkFBQzZCLE1BQU1wQixPQUFPRyxNQUFNLENBQUNpQixJQUFJO3dCQUFFQyxTQUFTckIsT0FBT0csTUFBTSxDQUFDa0IsT0FBTzs7Ozs7O29CQUMvRG5CLDhCQUNDLDhEQUFDb0I7d0JBQ0NoQixNQUFNSjt3QkFDTnFCLFFBQU87d0JBQ1BDLEtBQUk7d0JBQ0puQixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtLQW5DTVg7QUFxQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9zdHMvUG9zdENhcmQuanN4PzNjNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vdWkvQXZhdGFyJztcbmltcG9ydCBEYXRlQ29tcG9uZW50IGZyb20gJy4uL3VpL0RhdGVDb21wb25lbnQnO1xuaW1wb3J0IENvbnRlbnRmdWxJbWFnZSBmcm9tICcuLi91aS9Db250ZW50ZnVsSW1hZ2UnO1xuXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBzbHVnLCBleGNlcnB0LCBjb3ZlckltYWdlLCBhdXRob3IsIGRhdGUsIGV4dGVybmFsTGluayB9ID0gcG9zdC5maWVsZHM7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPSdyb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbWQnPlxuICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH0gYXJpYS1sYWJlbD17dGl0bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMic+XG4gICAgICAgICAgPENvbnRlbnRmdWxJbWFnZVxuICAgICAgICAgICAgYWx0PXtgQ292ZXIgSW1hZ2UgZm9yICR7dGl0bGV9YH1cbiAgICAgICAgICAgIHNyYz17Y292ZXJJbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICB3aWR0aD17Y292ZXJJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtjb3ZlckltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2UuaGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNCc+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQteGwgbWItMSBsZWFkaW5nLXNudWcnPnt0aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSBtYi00IHRleHQtZ3JheS00MDAnPlxuICAgICAgICAgIDxEYXRlQ29tcG9uZW50IGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSBtYi00Jz57ZXhjZXJwdH08L3A+XG4gICAgICAgIDxBdmF0YXIgbmFtZT17YXV0aG9yLmZpZWxkcy5uYW1lfSBwaWN0dXJlPXthdXRob3IuZmllbGRzLnBpY3R1cmV9IC8+XG4gICAgICAgIHtleHRlcm5hbExpbmsgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtleHRlcm5hbExpbmt9XG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNCB0ZXh0LWJsdWUtNTAwIHVuZGVybGluZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaXNpdCBXZWJzaXRlXG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJBdmF0YXIiLCJEYXRlQ29tcG9uZW50IiwiQ29udGVudGZ1bEltYWdlIiwiUG9zdENhcmQiLCJwb3N0IiwidGl0bGUiLCJzbHVnIiwiZXhjZXJwdCIsImNvdmVySW1hZ2UiLCJhdXRob3IiLCJkYXRlIiwiZXh0ZXJuYWxMaW5rIiwiZmllbGRzIiwibGkiLCJjbGFzc05hbWUiLCJocmVmIiwiYXJpYS1sYWJlbCIsImRpdiIsImFsdCIsInNyYyIsImZpbGUiLCJ1cmwiLCJ3aWR0aCIsImRldGFpbHMiLCJpbWFnZSIsImhlaWdodCIsImgzIiwiZGF0ZVN0cmluZyIsInAiLCJuYW1lIiwicGljdHVyZSIsImEiLCJ0YXJnZXQiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/posts/PostCard.jsx\n"));

/***/ })

});