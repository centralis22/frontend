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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"@mui/icons-material/LockOutlined\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sockjs-client */ \"sockjs-client\");\n/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.createTheme)();\nvar sock = new sockjs_client__WEBPACK_IMPORTED_MODULE_14__(\"http://localhost:8080/api\");\nsock.onopen = function() {\n    console.log(\"open\");\n    sock.send(\"test\");\n};\nsock.onmessage = function(e) {\n    console.log(\"message\", e.data);\n};\nsock.onclose = function() {\n    console.log(\"close\");\n};\nfunction SignIn() {\n    const [create, setCreate] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        sessionID: \"\",\n        roomName: \"\"\n    });\n    function saveText(event) {\n        const { value , name  } = event.target;\n        setCreate((prevValue)=>{\n            return {\n                ...prevValue,\n                [name]: value\n            };\n        });\n    }\n    function handleJoinRoom(event) {\n        event.preventDefault();\n        var sendobj = {\n            request: \"4869\",\n            content: {\n                user_type: \"student\",\n                user_name: create.roomName,\n                user_pswd: \"\",\n                session_id: create.sessionID\n            }\n        };\n        sock.send(JSON.stringify(sendobj));\n        setCreate({\n            sessionID: \"\",\n            roomName: \"\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_13___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Centralis\"\n                }, void 0, false, {\n                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_11___default()), {\n                component: \"main\",\n                maxWidth: \"xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        sx: {\n                            marginTop: 8,\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                variant: \"h1\",\n                                fontWeight: \"bold\",\n                                children: \"Centralis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                component: \"h1\",\n                                variant: \"h4\",\n                                color: \"#850000\",\n                                children: \"USC Marshall ELC\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                sx: {\n                                    m: 1,\n                                    bgcolor: \"secondary.main\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {\n                                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                component: \"h1\",\n                                variant: \"h5\",\n                                children: \"Join with a Session ID!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                component: \"form\",\n                                noValidate: true,\n                                sx: {\n                                    mt: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        margin: \"normal\",\n                                        required: true,\n                                        fullWidth: true,\n                                        id: \"sessionID\",\n                                        label: \"Session ID\",\n                                        name: \"sessionID\",\n                                        value: create.sessionID,\n                                        onChange: saveText,\n                                        autoFocus: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        margin: \"normal\",\n                                        required: true,\n                                        fullWidth: true,\n                                        id: \"roomName\",\n                                        name: \"roomName\",\n                                        label: \"Room Name\",\n                                        type: \"roomName\",\n                                        value: create.roomName,\n                                        onChange: saveText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        onClick: handleJoinRoom,\n                                        type: \"submit\",\n                                        fullWidth: true,\n                                        variant: \"contained\",\n                                        sx: {\n                                            mt: 3,\n                                            mb: 2\n                                        },\n                                        children: \"Join Room\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        container: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            item: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                href: \"/SignUp\",\n                                                variant: \"body2\",\n                                                children: \"Not a student? Click here\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                                lineNumber: 130,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/SignIn.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0IsNkRBQU07d0NBQ0xxRSxPQUFPLEVBQUVsQyxjQUFjO3dDQUN2QmlDLElBQUksRUFBQyxRQUFRO3dDQUNiTCxTQUFTO3dDQUNUVCxPQUFPLEVBQUMsV0FBVzt3Q0FDbkJMLEVBQUUsRUFBRTs0Q0FBRVcsRUFBRSxFQUFFLENBQUM7NENBQUVVLEVBQUUsRUFBRSxDQUFDO3lDQUFFO2tEQUNyQixXQUVEOzs7Ozs0Q0FBUztrREFDVCw4REFBQ2xFLDJEQUFJO3dDQUFDbUUsU0FBUztrREFDYiw0RUFBQ25FLDJEQUFJOzRDQUFDb0UsSUFBSTtzREFDUiw0RUFBQ3JFLDJEQUFJO2dEQUFDc0UsSUFBSSxFQUFDLFNBQVM7Z0RBQUNuQixPQUFPLEVBQUMsT0FBTzswREFDakMsMkJBQTJCOzs7OztvREFDdkI7Ozs7O2dEQUNGOzs7Ozs0Q0FDRjs7Ozs7O29DQUNIOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDSTs7Ozs7O1lBQ0UsQ0FDaEI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpZ25Jbi5qc3g/NDQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2tPdXRsaW5lZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCAqIGFzIFNvY2tKUyBmcm9tIFwic29ja2pzLWNsaWVudFwiO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5cbnZhciBzb2NrID0gbmV3IFNvY2tKUyhcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGlcIik7XG5cbnNvY2sub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcIm9wZW5cIik7XG4gIHNvY2suc2VuZChcInRlc3RcIik7XG59O1xuXG5zb2NrLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBlLmRhdGEpO1xufTtcblxuc29jay5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcImNsb3NlXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICBjb25zdCBbY3JlYXRlLCBzZXRDcmVhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHNlc3Npb25JRDogXCJcIixcbiAgICByb29tTmFtZTogXCJcIixcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2F2ZVRleHQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBldmVudC50YXJnZXQ7XG5cbiAgICBzZXRDcmVhdGUoKHByZXZWYWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlZhbHVlLCBbbmFtZV06IHZhbHVlIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVKb2luUm9vbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgc2VuZG9iaiA9IHtcbiAgICAgIHJlcXVlc3Q6IFwiNDg2OVwiLFxuICAgICAgY29udGVudDoge1xuICAgICAgICB1c2VyX3R5cGU6IFwic3R1ZGVudFwiLFxuICAgICAgICB1c2VyX25hbWU6IGNyZWF0ZS5yb29tTmFtZSxcbiAgICAgICAgdXNlcl9wc3dkOiBcIlwiLFxuICAgICAgICBzZXNzaW9uX2lkOiBjcmVhdGUuc2Vzc2lvbklELFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgc29jay5zZW5kKEpTT04uc3RyaW5naWZ5KHNlbmRvYmopKTtcblxuICAgIHNldENyZWF0ZSh7XG4gICAgICBzZXNzaW9uSUQ6IFwiXCIsXG4gICAgICByb29tTmFtZTogXCJcIixcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2VudHJhbGlzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgZm9udFdlaWdodD17XCJib2xkXCJ9PlxuICAgICAgICAgICAgQ2VudHJhbGlzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg0XCIgY29sb3I9XCIjODUwMDAwXCI+XG4gICAgICAgICAgICBVU0MgTWFyc2hhbGwgRUxDXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxBdmF0YXIgc3g9e3sgbTogMSwgYmdjb2xvcjogXCJzZWNvbmRhcnkubWFpblwiIH19PlxuICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgSm9pbiB3aXRoIGEgU2Vzc2lvbiBJRCFcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgbm9WYWxpZGF0ZSBzeD17eyBtdDogMSB9fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwic2Vzc2lvbklEXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZXNzaW9uIElEXCJcbiAgICAgICAgICAgICAgbmFtZT1cInNlc3Npb25JRFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjcmVhdGUuc2Vzc2lvbklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2F2ZVRleHR9XG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwicm9vbU5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwicm9vbU5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlJvb20gTmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyb29tTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjcmVhdGUucm9vbU5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzYXZlVGV4dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUpvaW5Sb29tfVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBzeD17eyBtdDogMywgbWI6IDIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSm9pbiBSb29tXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1NpZ25VcFwiIHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAge1wiTm90IGEgc3R1ZGVudD8gQ2xpY2sgaGVyZVwifVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkJ1dHRvbiIsIkNzc0Jhc2VsaW5lIiwiVGV4dEZpZWxkIiwiTGluayIsIkdyaWQiLCJCb3giLCJMb2NrT3V0bGluZWRJY29uIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkhlYWQiLCJTb2NrSlMiLCJ0aGVtZSIsInNvY2siLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwic2VuZCIsIm9ubWVzc2FnZSIsImUiLCJkYXRhIiwib25jbG9zZSIsIlNpZ25JbiIsImNyZWF0ZSIsInNldENyZWF0ZSIsInVzZVN0YXRlIiwic2Vzc2lvbklEIiwicm9vbU5hbWUiLCJzYXZlVGV4dCIsImV2ZW50IiwidmFsdWUiLCJuYW1lIiwidGFyZ2V0IiwicHJldlZhbHVlIiwiaGFuZGxlSm9pblJvb20iLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRvYmoiLCJyZXF1ZXN0IiwiY29udGVudCIsInVzZXJfdHlwZSIsInVzZXJfbmFtZSIsInVzZXJfcHN3ZCIsInNlc3Npb25faWQiLCJKU09OIiwic3RyaW5naWZ5IiwidGl0bGUiLCJjb21wb25lbnQiLCJtYXhXaWR0aCIsInN4IiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwidmFyaWFudCIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm0iLCJiZ2NvbG9yIiwibm9WYWxpZGF0ZSIsIm10IiwibWFyZ2luIiwicmVxdWlyZWQiLCJmdWxsV2lkdGgiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJhdXRvRm9jdXMiLCJ0eXBlIiwib25DbGljayIsIm1iIiwiY29udGFpbmVyIiwiaXRlbSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignIn.jsx\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ }),

/***/ "sockjs-client":
/*!********************************!*\
  !*** external "sockjs-client" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("sockjs-client");

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