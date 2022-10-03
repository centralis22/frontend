"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/SignIn.jsx":
/*!*******************************!*\
  !*** ./components/SignIn.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"@mui/material/FormControlLabel\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Checkbox */ \"@mui/material/Checkbox\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"@mui/icons-material/LockOutlined\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.createTheme)();\nfunction SignIn() {\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const data = new FormData(event.currentTarget);\n        console.log({\n            email: data.get(\"email\"),\n            password: data.get(\"password\")\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.ThemeProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default()), {\n            component: \"main\",\n            maxWidth: \"xs\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n                    sx: {\n                        marginTop: 8,\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                            variant: \"h1\",\n                            fontWeight: \"bold\",\n                            children: \"Centralis\"\n                        }, void 0, false, {\n                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                            component: \"h1\",\n                            variant: \"h4\",\n                            color: \"#850000\",\n                            children: \"USC Marshall ELC\"\n                        }, void 0, false, {\n                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            sx: {\n                                m: 1,\n                                bgcolor: \"secondary.main\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                            component: \"h1\",\n                            variant: \"h5\",\n                            children: \"Join with a Session ID!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n                            component: \"form\",\n                            onSubmit: handleSubmit,\n                            noValidate: true,\n                            sx: {\n                                mt: 1\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    margin: \"normal\",\n                                    required: true,\n                                    fullWidth: true,\n                                    id: \"email\",\n                                    label: \"Session ID\",\n                                    name: \"email\",\n                                    autoComplete: \"email\",\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    margin: \"normal\",\n                                    required: true,\n                                    fullWidth: true,\n                                    name: \"password\",\n                                    label: \"Room Name\",\n                                    type: \"password\",\n                                    id: \"password\",\n                                    autoComplete: \"current-password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    type: \"submit\",\n                                    fullWidth: true,\n                                    variant: \"contained\",\n                                    sx: {\n                                        mt: 3,\n                                        mb: 2\n                                    },\n                                    children: \"Join Room\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                    container: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        item: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                            href: \"/SignUp\",\n                                            variant: \"body2\",\n                                            children: \"Not a student? Click here\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUUsQ0FBQzt3Q0FBRVUsRUFBRSxFQUFFLENBQUM7cUNBQUU7OENBQ3JCLFdBRUQ7Ozs7O3dDQUFTOzhDQUNULDhEQUFDNUMsMkRBQUk7b0NBQUM2QyxTQUFTOzhDQUNiLDRFQUFDN0MsMkRBQUk7d0NBQUM4QyxJQUFJO2tEQUNSLDRFQUFDL0MsMkRBQUk7NENBQUNnRCxJQUFJLEVBQUMsU0FBUzs0Q0FBQ3BCLE9BQU8sRUFBQyxPQUFPO3NEQUNqQywyQkFBMkI7Ozs7O2dEQUN2Qjs7Ozs7NENBQ0Y7Ozs7O3dDQUNGOzs7Ozs7Z0NBQ0g7Ozs7Ozt3QkFDRjs7Ozs7O2dCQUNJOzs7OztZQUNFLENBQ2hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9TaWduSW4uanN4PzQ0MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbXVpL21hdGVyaWFsL0F2YXRhcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbXVpL21hdGVyaWFsL0NoZWNrYm94JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2tPdXRsaW5lZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICBlbWFpbDogZGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICBwYXNzd29yZDogZGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBmb250V2VpZ2h0PXsnYm9sZCd9PlxuICAgICAgICAgICAgQ2VudHJhbGlzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg0XCIgY29sb3I9XCIjODUwMDAwXCI+XG4gICAgICAgICAgICBVU0MgTWFyc2hhbGwgRUxDXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxBdmF0YXIgc3g9e3sgbTogMSwgYmdjb2xvcjogJ3NlY29uZGFyeS5tYWluJyB9fT5cbiAgICAgICAgICAgIDxMb2NrT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgIEpvaW4gd2l0aCBhIFNlc3Npb24gSUQhXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGUgc3g9e3sgbXQ6IDEgfX0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZXNzaW9uIElEXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlJvb20gTmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIHN4PXt7IG10OiAzLCBtYjogMiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBKb2luIFJvb21cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvU2lnblVwXCIgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICB7XCJOb3QgYSBzdHVkZW50PyBDbGljayBoZXJlXCJ9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkJ1dHRvbiIsIkNzc0Jhc2VsaW5lIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiTGluayIsIkdyaWQiLCJCb3giLCJMb2NrT3V0bGluZWRJY29uIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiU2lnbkluIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsImNvbXBvbmVudCIsIm1heFdpZHRoIiwic3giLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImNvbG9yIiwibSIsImJnY29sb3IiLCJvblN1Ym1pdCIsIm5vVmFsaWRhdGUiLCJtdCIsIm1hcmdpbiIsInJlcXVpcmVkIiwiZnVsbFdpZHRoIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJ0eXBlIiwibWIiLCJjb250YWluZXIiLCJpdGVtIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignIn.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SignIn */ \"./components/SignIn.jsx\");\n\n\n\nfunction LoginPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignIn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNnQjtBQUUxQyxTQUFTRSxTQUFTLEdBQUc7SUFDbkIscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNGLDBEQUFNOzs7O2dCQUFHOzs7OztZQUNOLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVDLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25JbiBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25Jbic7XG5cbmZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNpZ25JbiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiU2lnbkluIiwiTG9naW5QYWdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@mui/icons-material/LockOutlined":
/*!***************************************************!*\
  !*** external "@mui/icons-material/LockOutlined" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/LockOutlined");

/***/ }),

/***/ "@mui/material/Avatar":
/*!***************************************!*\
  !*** external "@mui/material/Avatar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Checkbox":
/*!*****************************************!*\
  !*** external "@mui/material/Checkbox" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/FormControlLabel":
/*!*************************************************!*\
  !*** external "@mui/material/FormControlLabel" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();