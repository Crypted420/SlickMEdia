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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height: 100vh;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height:22vh;\\n  background-color: black;\\n  display: flex;\\n  align-items: center;\\n  padding-left:5.875rem;\\n  @media screen and (max-width: 768px) {\\n    padding-left: 0;\\n    justify-content: center;\\n  }\\n  h2{\\n    width: 12rem;\\n    height:3.75rem;\\n    color:white;\\n    border: 1px solid white;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height: 78vh;\\n  background-image:url('/background.png');\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n  p{\\n    width: min-content;\\n    letter-spacing: -5%;\\n    font-weight: bold;\\n    font-size: 4.5rem;\\n    color: white;\\n    margin-left:4.8rem;\\n    line-height:93.74px;\\n    @media screen and (max-width: 768px) {\\n      font-size:3rem;\\n      width:100%;\\n      text-align: center;\\n      margin-left: 0;\\n      padding: 1rem;\\n    }\\n  }\\n\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height: auto;\\n  padding-top:3.938rem;\\n  .search--bar{\\n    width: 90%;\\n    padding-left:4.813rem;\\n    @media screen and (max-width: 768px) {\\n      padding-left: 2.5rem;\\n    }\\n    input{\\n      width: 100%;\\n      height:3.375rem;\\n      border: 1px solid black;\\n      margin-top:.5rem;\\n    }\\n    button{\\n      display: inline-block;\\n      padding: 1rem;\\n      margin-top:1rem;\\n      width: 8rem;\\n      background-color: black;\\n      border:0;\\n      color: white;\\n    }\\n  }\\n.categories{\\n  margin-top:3rem;\\n  padding-left:4.188rem;\\n  @media screen and (max-width: 768px) {\\n    padding-left: 2rem;\\n  }\\n  .category{\\n    width: 100%;\\n    margin-top: 1rem;\\n    .movies--container{\\n      width: 100%;\\n      height: auto;\\n      overflow-x: scroll;\\n      white-space: nowrap;\\n\\n      .movie{\\n        width: 18.75rem;\\n        height: 18.75rem;\\n        display: inline-flex;\\n        background-color: black;\\n        border-radius: 12px;\\n        margin: 13px;\\n        color: white;\\n        align-items: center;\\n        justify-content: center;\\n        .poster--container{\\n          width: 100%;\\n          height: 100%;\\n          display: flex;\\n          align-items: center;\\n          justify-content: center;\\n          border-radius: 12px;\\n          p{\\n            color: white;\\n            max-width: 50%;\\n            text-align: center;\\n            background-color: black;\\n            font-size:1.1rem;\\n            word-break: break-all;\\n            white-space: normal;\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height:40vh;\\n  background-color: red;\\n  padding: 2rem;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\nfunction Main(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), startSearch = ref[0], setStartSearch = ref[1];\n    var action_movies = props.action_movies, comedy_movies = props.comedy_movies;\n    var action_moviesElement = action_movies.Search.map(function(result) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"movie\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"poster--container\",\n                style: {\n                    background: \"url(\".concat(result.Poster, \")\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: result.Title\n                }, void 0, false, {\n                    fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this);\n    });\n    var comedy_moviesElement = comedy_movies.Search.map(function(result) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"movie\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"poster--container\",\n                style: {\n                    background: \"url(\".concat(result.Poster, \")\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: result.Title\n                }, void 0, false, {\n                    fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"MyTestApp\"\n                }, void 0, false, {\n                    fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Hero, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"Watch something incrediable\"\n                }, void 0, false, {\n                    fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Content, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"search--bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"search\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"search\"\n                            }, void 0, false, {\n                                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                        className: \"categories\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"category\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: \"Action movies\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"movies--container\",\n                                        children: action_moviesElement\n                                    }, void 0, false, {\n                                        fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"category\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: \"Comedy\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"movies--container\",\n                                        children: comedy_moviesElement\n                                    }, void 0, false, {\n                                        fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchResult, {}, void 0, false, {\n                fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/shedrack/Desktop/HeadSpace/SlickMedia/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n};\n_s(Main, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Main;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header(_templateObject1());\n_c2 = Header;\nvar Hero = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject2());\n_c3 = Hero;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject3());\n_c4 = Content;\nvar SearchResult = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject4());\n_c5 = SearchResult;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"Hero\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"SearchResult\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7b0JBQ0Y7MEJBR1YsOERBQUNhLFlBQVk7Ozs7b0JBRUU7Ozs7OztZQUNMLENBQ2I7Q0FDRjtHQW5FdUI5QixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFvRTVCLElBQU1rQixTQUFTLEdBQUdyQiw2REFBVSxtQkFHM0I7QUFIS3FCLE1BQUFBLFNBQVM7QUFJZixJQUFNQyxNQUFNLEdBQUd0QixnRUFBYSxvQkFvQjNCO0FBcEJLc0IsTUFBQUEsTUFBTTtBQXNCWixJQUFNRSxJQUFJLEdBQUd4QixpRUFBYyxvQkEyQjFCO0FBM0JLd0IsTUFBQUEsSUFBSTtBQTZCVixJQUFNQyxPQUFPLEdBQUd6QixpRUFBYyxvQkF3RTdCO0FBeEVLeUIsTUFBQUEsT0FBTztBQTBFYixJQUFNUSxZQUFZLEdBQUdqQyxpRUFBYyxvQkFLbEM7QUFMS2lDLE1BQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZ2V0X2FjdGlvbl9tb3ZpZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL29tZGJhcGkuY29tLz9pPXR0Mzg5NjE5OCZhcGlrZXk9NzgyOGM4Yzkmcz1tYXplJnBhZ2U9MTAnKTtcbiAgY29uc3QgYWN0aW9uX21vdmllcyA9IGF3YWl0IGdldF9hY3Rpb25fbW92aWVzLmpzb24oKTtcbiAgY29uc3QgZ2V0X2NvbWVkeV9tb3ZpZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL29tZGJhcGkuY29tLz9pPXR0Mzg5NjE5OCZhcGlrZXk9NzgyOGM4Yzkmcz1jb21lZHkmcGFnZT0xMCcpO1xuICBjb25zdCBjb21lZHlfbW92aWVzID0gYXdhaXQgZ2V0X2NvbWVkeV9tb3ZpZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhY3Rpb25fbW92aWVzLFxuICAgICAgY29tZWR5X21vdmllc1xuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbihwcm9wcykge1xuICBjb25zdCBbc3RhcnRTZWFyY2gsIHNldFN0YXJ0U2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBhY3Rpb25fbW92aWVzLCBjb21lZHlfbW92aWVzIH0gPSBwcm9wcztcbiAgY29uc3QgYWN0aW9uX21vdmllc0VsZW1lbnQgPSBhY3Rpb25fbW92aWVzLlNlYXJjaC5tYXAocmVzdWx0ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdGVyLS1jb250YWluZXInIHN0eWxlPXt7IGJhY2tncm91bmQ6IGB1cmwoJHtyZXN1bHQuUG9zdGVyfSlgIH19PlxuICAgICAgICAgIDxwPntyZXN1bHQuVGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2ID5cbiAgICApXG4gIH0pXG5cbiAgY29uc3QgY29tZWR5X21vdmllc0VsZW1lbnQgPSBjb21lZHlfbW92aWVzLlNlYXJjaC5tYXAocmVzdWx0ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdGVyLS1jb250YWluZXInIHN0eWxlPXt7IGJhY2tncm91bmQ6IGB1cmwoJHtyZXN1bHQuUG9zdGVyfSlgIH19PlxuICAgICAgICAgIDxwPntyZXN1bHQuVGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGgyPk15VGVzdEFwcDwvaDI+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAgPEhlcm8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdhdGNoIHNvbWV0aGluZyBpbmNyZWRpYWJsZVxuICAgICAgICA8L3A+XG4gICAgICA8L0hlcm8+XG5cbiAgICAgIDxDb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC0tYmFyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2hcIj5TZWFyY2g8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NhdGVnb3JpZXMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgIDxoMz5BY3Rpb24gbW92aWVzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVzLS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAge2FjdGlvbl9tb3ZpZXNFbGVtZW50fVxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgPGgzPkNvbWVkeTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllcy0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtjb21lZHlfbW92aWVzRWxlbWVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ29udGVudD5cblxuXG4gICAgICA8U2VhcmNoUmVzdWx0PlxuXG4gICAgICA8L1NlYXJjaFJlc3VsdD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG5gXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjIydmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6NS44NzVyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGgye1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBoZWlnaHQ6My43NXJlbTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbmBcblxuY29uc3QgSGVybyA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3OHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnL2JhY2tncm91bmQucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwe1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTUlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDo0LjhyZW07XG4gICAgbGluZS1oZWlnaHQ6OTMuNzRweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZm9udC1zaXplOjNyZW07XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgfVxuXG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6My45MzhyZW07XG4gIC5zZWFyY2gtLWJhcntcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmctbGVmdDo0LjgxM3JlbTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6My4zNzVyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIG1hcmdpbi10b3A6LjVyZW07XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBtYXJnaW4tdG9wOjFyZW07XG4gICAgICB3aWR0aDogOHJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgYm9yZGVyOjA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG4uY2F0ZWdvcmllc3tcbiAgbWFyZ2luLXRvcDozcmVtO1xuICBwYWRkaW5nLWxlZnQ6NC4xODhyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICB9XG4gIC5jYXRlZ29yeXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIC5tb3ZpZXMtLWNvbnRhaW5lcntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgLm1vdmlle1xuICAgICAgICB3aWR0aDogMTguNzVyZW07XG4gICAgICAgIGhlaWdodDogMTguNzVyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgbWFyZ2luOiAxM3B4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAucG9zdGVyLS1jb250YWluZXJ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIHB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOjEuMXJlbTtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gXG5cbmNvbnN0IFNlYXJjaFJlc3VsdCA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjQwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcGFkZGluZzogMnJlbTtcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIk1haW4iLCJwcm9wcyIsInN0YXJ0U2VhcmNoIiwic2V0U3RhcnRTZWFyY2giLCJhY3Rpb25fbW92aWVzIiwiY29tZWR5X21vdmllcyIsImFjdGlvbl9tb3ZpZXNFbGVtZW50IiwiU2VhcmNoIiwibWFwIiwicmVzdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiUG9zdGVyIiwicCIsIlRpdGxlIiwiY29tZWR5X21vdmllc0VsZW1lbnQiLCJDb250YWluZXIiLCJIZWFkZXIiLCJoMiIsIkhlcm8iLCJDb250ZW50IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwic2VjdGlvbiIsImgzIiwiU2VhcmNoUmVzdWx0IiwiaGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});