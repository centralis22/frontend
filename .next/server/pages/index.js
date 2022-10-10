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

/***/ "./components/StudentSignIn.jsx":
/*!**************************************!*\
  !*** ./components/StudentSignIn.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"@mui/icons-material/LockOutlined\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sockjs-client */ \"sockjs-client\");\n/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.createTheme)();\nvar sock = new sockjs_client__WEBPACK_IMPORTED_MODULE_15__(\"http://localhost:8080/api\");\n//Class function starts here\nfunction SignIn() {\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var isCorrect = true;\n    sock.onmessage = function(e) {\n        var parsedData = JSON.parse(e.data);\n        if (parsedData.respond_id === 4869 && parsedData.status_code === 200) {\n            router.push(\"/introduction\");\n        } else {\n            alert(\"Login failed\");\n            isCorrect = false;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!isCorrect) {}\n    }, [\n        isCorrect\n    ]);\n    const [create, setCreate] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        sessionID: \"\",\n        roomName: \"\"\n    });\n    function saveText(event) {\n        const { value , name  } = event.target;\n        setCreate((prevValue)=>{\n            return {\n                ...prevValue,\n                [name]: value\n            };\n        });\n    }\n    //When Join Button clicked\n    function handleJoinRoom(event) {\n        event.preventDefault();\n        var sendobj = {\n            request_id: 4869,\n            request: \"login\",\n            content: {\n                user_type: \"student\",\n                user_name: create.roomName,\n                user_pswd: \"\",\n                session_id: create.sessionID\n            }\n        };\n        sock.send(JSON.stringify(sendobj));\n        setCreate({\n            sessionID: \"\",\n            roomName: \"\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Centralis\"\n                }, void 0, false, {\n                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default()), {\n                component: \"main\",\n                maxWidth: \"xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        sx: {\n                            marginTop: 8,\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                variant: \"h1\",\n                                fontWeight: \"bold\",\n                                children: \"Centralis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                component: \"h1\",\n                                variant: \"h4\",\n                                color: \"#850000\",\n                                children: \"USC Marshall ELC\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                sx: {\n                                    m: 1,\n                                    bgcolor: \"secondary.main\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n                                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                component: \"h1\",\n                                variant: \"h5\",\n                                children: \"Join with a Session ID!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                component: \"form\",\n                                noValidate: true,\n                                sx: {\n                                    mt: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        margin: \"normal\",\n                                        required: true,\n                                        fullWidth: true,\n                                        id: \"sessionID\",\n                                        label: \"Session ID\",\n                                        name: \"sessionID\",\n                                        value: create.sessionID,\n                                        onChange: saveText,\n                                        autoFocus: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        margin: \"normal\",\n                                        required: true,\n                                        fullWidth: true,\n                                        id: \"roomName\",\n                                        name: \"roomName\",\n                                        label: \"Room Name\",\n                                        type: \"roomName\",\n                                        value: create.roomName,\n                                        onChange: saveText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: isCorrect ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"loginError\",\n                                            children: \"Please enter a valid session ID and room name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        onClick: handleJoinRoom,\n                                        type: \"submit\",\n                                        fullWidth: true,\n                                        variant: \"contained\",\n                                        sx: {\n                                            mt: 3,\n                                            mb: 2\n                                        },\n                                        children: \"Join Room\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        container: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                            item: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                href: \"/signUp\",\n                                                variant: \"body2\",\n                                                children: \"Not a student? Click here\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                                lineNumber: 152,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                            lineNumber: 151,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsUUFBUTt3Q0FDZkMsUUFBUTt3Q0FDUkMsU0FBUzt3Q0FDVEMsRUFBRSxFQUFDLFVBQVU7d0NBQ2JqQyxJQUFJLEVBQUMsVUFBVTt3Q0FDZmtDLEtBQUssRUFBQyxXQUFXO3dDQUNqQkcsSUFBSSxFQUFDLFVBQVU7d0NBQ2Z0QyxLQUFLLEVBQUVQLE1BQU0sQ0FBQ0ksUUFBUTt3Q0FDdEJ1QyxRQUFRLEVBQUV0QyxRQUFROzs7Ozs0Q0FDbEI7a0RBQ0YsOERBQUN5QyxLQUFHO2tEQUNEekQsU0FBUyxHQUFHLElBQUksaUJBQ2YsOERBQUMwRCxNQUFJOzRDQUFDQyxTQUFTLEVBQUMsWUFBWTtzREFBQywrQ0FFN0I7Ozs7O2dEQUFPOzs7Ozs0Q0FFTDtrREFDTiw4REFBQzNFLDZEQUFNO3dDQUNMNEUsT0FBTyxFQUFFdEMsY0FBYzt3Q0FDdkJrQyxJQUFJLEVBQUMsUUFBUTt3Q0FDYkwsU0FBUzt3Q0FDVFQsT0FBTyxFQUFDLFdBQVc7d0NBQ25CTCxFQUFFLEVBQUU7NENBQUVXLEVBQUUsRUFBRSxDQUFDOzRDQUFFYSxFQUFFLEVBQUUsQ0FBQzt5Q0FBRTtrREFDckIsV0FFRDs7Ozs7NENBQVM7a0RBQ1QsOERBQUN6RSwyREFBSTt3Q0FBQzBFLFNBQVM7a0RBQ2IsNEVBQUMxRSwyREFBSTs0Q0FBQzJFLElBQUk7c0RBQ1IsNEVBQUM1RSwyREFBSTtnREFBQzZFLElBQUksRUFBQyxTQUFTO2dEQUFDdEIsT0FBTyxFQUFDLE9BQU87MERBQ2pDLDJCQUEyQjs7Ozs7b0RBQ3ZCOzs7OztnREFDRjs7Ozs7NENBQ0Y7Ozs7OztvQ0FDSDs7Ozs7OzRCQUNGOzs7Ozs7b0JBQ0k7Ozs7OztZQUNFLENBQ2hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9TdHVkZW50U2lnbkluLmpzeD85YWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2tPdXRsaW5lZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5cbmltcG9ydCAqIGFzIFNvY2tKUyBmcm9tIFwic29ja2pzLWNsaWVudFwiO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5cbnZhciBzb2NrID0gbmV3IFNvY2tKUyhcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGlcIik7XG5cbi8vQ2xhc3MgZnVuY3Rpb24gc3RhcnRzIGhlcmVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgdmFyIHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB2YXIgaXNDb3JyZWN0ID0gdHJ1ZTtcblxuICBzb2NrLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG5cbiAgICBpZiAocGFyc2VkRGF0YS5yZXNwb25kX2lkID09PSA0ODY5ICYmIHBhcnNlZERhdGEuc3RhdHVzX2NvZGUgPT09IDIwMCkge1xuICAgICAgXG4gICAgICByb3V0ZXIucHVzaChcIi9pbnRyb2R1Y3Rpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgYWxlcnQoXCJMb2dpbiBmYWlsZWRcIik7XG4gICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighaXNDb3JyZWN0KSB7XG4gICAgICBcbiAgICB9XG4gIH0sIFtpc0NvcnJlY3RdKTtcblxuICBjb25zdCBbY3JlYXRlLCBzZXRDcmVhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHNlc3Npb25JRDogXCJcIixcbiAgICByb29tTmFtZTogXCJcIixcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2F2ZVRleHQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBldmVudC50YXJnZXQ7XG5cbiAgICBzZXRDcmVhdGUoKHByZXZWYWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlZhbHVlLCBbbmFtZV06IHZhbHVlIH07XG4gICAgfSk7XG4gIH1cblxuICAvL1doZW4gSm9pbiBCdXR0b24gY2xpY2tlZFxuICBmdW5jdGlvbiBoYW5kbGVKb2luUm9vbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgc2VuZG9iaiA9IHtcbiAgICAgIHJlcXVlc3RfaWQ6IDQ4NjksXG4gICAgICByZXF1ZXN0OiBcImxvZ2luXCIsXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHVzZXJfdHlwZTogXCJzdHVkZW50XCIsXG4gICAgICAgIHVzZXJfbmFtZTogY3JlYXRlLnJvb21OYW1lLFxuICAgICAgICB1c2VyX3Bzd2Q6IFwiXCIsXG4gICAgICAgIHNlc3Npb25faWQ6IGNyZWF0ZS5zZXNzaW9uSUQsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBzb2NrLnNlbmQoSlNPTi5zdHJpbmdpZnkoc2VuZG9iaikpO1xuXG4gICAgc2V0Q3JlYXRlKHtcbiAgICAgIHNlc3Npb25JRDogXCJcIixcbiAgICAgIHJvb21OYW1lOiBcIlwiLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DZW50cmFsaXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBmb250V2VpZ2h0PXtcImJvbGRcIn0+XG4gICAgICAgICAgICBDZW50cmFsaXNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDRcIiBjb2xvcj1cIiM4NTAwMDBcIj5cbiAgICAgICAgICAgIFVTQyBNYXJzaGFsbCBFTENcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEF2YXRhciBzeD17eyBtOiAxLCBiZ2NvbG9yOiBcInNlY29uZGFyeS5tYWluXCIgfX0+XG4gICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICBKb2luIHdpdGggYSBTZXNzaW9uIElEIVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBub1ZhbGlkYXRlIHN4PXt7IG10OiAxIH19PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJzZXNzaW9uSURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlc3Npb24gSURcIlxuICAgICAgICAgICAgICBuYW1lPVwic2Vzc2lvbklEXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZS5zZXNzaW9uSUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzYXZlVGV4dH1cbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJyb29tTmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJyb29tTmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUm9vbSBOYW1lXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJvb21OYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZS5yb29tTmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NhdmVUZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtpc0NvcnJlY3QgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luRXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIHNlc3Npb24gSUQgYW5kIHJvb20gbmFtZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVKb2luUm9vbX1cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgc3g9e3sgbXQ6IDMsIG1iOiAyIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEpvaW4gUm9vbVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduVXBcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgIHtcIk5vdCBhIHN0dWRlbnQ/IENsaWNrIGhlcmVcIn1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwiQXZhdGFyIiwiQnV0dG9uIiwiQ3NzQmFzZWxpbmUiLCJUZXh0RmllbGQiLCJMaW5rIiwiR3JpZCIsIkJveCIsIkxvY2tPdXRsaW5lZEljb24iLCJUeXBvZ3JhcGh5IiwiQ29udGFpbmVyIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiU29ja0pTIiwidGhlbWUiLCJzb2NrIiwiU2lnbkluIiwicm91dGVyIiwiaXNDb3JyZWN0Iiwib25tZXNzYWdlIiwiZSIsInBhcnNlZERhdGEiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwicmVzcG9uZF9pZCIsInN0YXR1c19jb2RlIiwicHVzaCIsImFsZXJ0IiwiY3JlYXRlIiwic2V0Q3JlYXRlIiwidXNlU3RhdGUiLCJzZXNzaW9uSUQiLCJyb29tTmFtZSIsInNhdmVUZXh0IiwiZXZlbnQiLCJ2YWx1ZSIsIm5hbWUiLCJ0YXJnZXQiLCJwcmV2VmFsdWUiLCJoYW5kbGVKb2luUm9vbSIsInByZXZlbnREZWZhdWx0Iiwic2VuZG9iaiIsInJlcXVlc3RfaWQiLCJyZXF1ZXN0IiwiY29udGVudCIsInVzZXJfdHlwZSIsInVzZXJfbmFtZSIsInVzZXJfcHN3ZCIsInNlc3Npb25faWQiLCJzZW5kIiwic3RyaW5naWZ5IiwidGl0bGUiLCJjb21wb25lbnQiLCJtYXhXaWR0aCIsInN4IiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwidmFyaWFudCIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm0iLCJiZ2NvbG9yIiwibm9WYWxpZGF0ZSIsIm10IiwibWFyZ2luIiwicmVxdWlyZWQiLCJmdWxsV2lkdGgiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJhdXRvRm9jdXMiLCJ0eXBlIiwiZGl2Iiwic3BhbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtYiIsImNvbnRhaW5lciIsIml0ZW0iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StudentSignIn.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_StudentSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StudentSignIn */ \"./components/StudentSignIn.jsx\");\n\n\n\nfunction LoginPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StudentSignIn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUN1QjtBQUVqRCxTQUFTRSxTQUFTLEdBQUc7SUFDbkIscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNGLGlFQUFNOzs7O2dCQUFHOzs7OztZQUNOLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVDLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25JbiBmcm9tICcuLi9jb21wb25lbnRzL1N0dWRlbnRTaWduSW4nO1xuXG5mdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTaWduSW4gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpZ25JbiIsIkxvZ2luUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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