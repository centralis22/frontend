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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"@mui/icons-material/LockOutlined\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sockjs-client */ \"sockjs-client\");\n/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.createTheme)();\nvar sock = new sockjs_client__WEBPACK_IMPORTED_MODULE_15__(\"http://localhost:8080/api\");\nsock.onopen = function() {\n    console.log(\"open\");\n    sock.send(\"test\");\n};\nsock.onclose = function() {\n    console.log(\"close\");\n};\n//Class function starts here\nfunction SignIn() {\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var isCorrect = true;\n    sock.onmessage = function(e) {\n        var parsedData = JSON.parse(e.data);\n        if (parsedData.respond_id === 4869 && parsedData.status_code === 200) {\n            router.push(\"/introduction\");\n        } else {\n            alert(\"Login failed\");\n            isCorrect = false;\n        }\n    };\n    const [create, setCreate] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        sessionID: \"\",\n        roomName: \"\"\n    });\n    function saveText(event) {\n        const { value , name  } = event.target;\n        setCreate((prevValue)=>{\n            return {\n                ...prevValue,\n                [name]: value\n            };\n        });\n    }\n    //When Join Button clicked\n    function handleJoinRoom(event) {\n        event.preventDefault();\n        var sendobj = {\n            request_id: 4869,\n            request: \"login\",\n            content: {\n                user_type: \"student\",\n                user_name: create.roomName,\n                user_pswd: \"\",\n                session_id: create.sessionID\n            }\n        };\n        sock.send(JSON.stringify(sendobj));\n        setCreate({\n            sessionID: \"\",\n            roomName: \"\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Centralis\"\n                }, void 0, false, {\n                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default()), {\n                component: \"main\",\n                maxWidth: \"xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        sx: {\n                            marginTop: 8,\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                variant: \"h1\",\n                                fontWeight: \"bold\",\n                                children: \"Centralis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                component: \"h1\",\n                                variant: \"h4\",\n                                color: \"#850000\",\n                                children: \"USC Marshall ELC\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                sx: {\n                                    m: 1,\n                                    bgcolor: \"secondary.main\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n                                    fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                component: \"h1\",\n                                variant: \"h5\",\n                                children: \"Join with a Session ID!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                component: \"form\",\n                                noValidate: true,\n                                sx: {\n                                    mt: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        margin: \"normal\",\n                                        required: true,\n                                        fullWidth: true,\n                                        id: \"sessionID\",\n                                        label: \"Session ID\",\n                                        name: \"sessionID\",\n                                        value: create.sessionID,\n                                        onChange: saveText,\n                                        autoFocus: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        margin: \"normal\",\n                                        required: true,\n                                        fullWidth: true,\n                                        id: \"roomName\",\n                                        name: \"roomName\",\n                                        label: \"Room Name\",\n                                        type: \"roomName\",\n                                        value: create.roomName,\n                                        onChange: saveText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: isCorrect ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"loginError\",\n                                            children: \"Please enter a valid session ID and room name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        onClick: handleJoinRoom,\n                                        type: \"submit\",\n                                        fullWidth: true,\n                                        variant: \"contained\",\n                                        sx: {\n                                            mt: 3,\n                                            mb: 2\n                                        },\n                                        children: \"Join Room\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        container: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                            item: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                href: \"/signUp\",\n                                                variant: \"body2\",\n                                                children: \"Not a student? Click here\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                                lineNumber: 152,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                            lineNumber: 151,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/William/Downloads/MyCode/MyProject/frontend/components/StudentSignIn.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0dWRlbnRTaWduSW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0Y7QUFDVztBQUVFO0FBQ0E7QUFDVTtBQUNKO0FBQ1Y7QUFDQTtBQUNGO0FBQzRCO0FBQ2Q7QUFDRjtBQUNrQjtBQUUxQjtBQUV4QyxNQUFNZ0IsS0FBSyxHQUFHSCxrRUFBVyxFQUFFO0FBRTNCLElBQUlJLElBQUksR0FBRyxJQUFJRiwyQ0FBTSxDQUFDLDJCQUEyQixDQUFDO0FBRWxERSxJQUFJLENBQUNDLE1BQU0sR0FBRyxXQUFZO0lBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQkgsSUFBSSxDQUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUZKLElBQUksQ0FBQ0ssT0FBTyxHQUFHLFdBQVk7SUFDekJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztBQUVGLDRCQUE0QjtBQUNiLFNBQVNHLE1BQU0sR0FBRztJQUMvQixJQUFJQyxNQUFNLEdBQUd0QixzREFBUyxFQUFFO0lBQ3hCLElBQUl1QixTQUFTLEdBQUcsSUFBSTtJQUVwQlIsSUFBSSxDQUFDUyxTQUFTLEdBQUcsU0FBVUMsQ0FBQyxFQUFFO1FBQzVCLElBQUlDLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILENBQUMsQ0FBQ0ksSUFBSSxDQUFDO1FBRW5DLElBQUlILFVBQVUsQ0FBQ0ksVUFBVSxLQUFLLElBQUksSUFBSUosVUFBVSxDQUFDSyxXQUFXLEtBQUssR0FBRyxFQUFFO1lBQ3BFVCxNQUFNLENBQUNVLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQixPQUFPO1lBQ0xDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0QlYsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDVyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHckMsMkNBQWMsQ0FBQztRQUN6Q3VDLFNBQVMsRUFBRSxFQUFFO1FBQ2JDLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztJQUVGLFNBQVNDLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO1FBQ3ZCLE1BQU0sRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsR0FBR0YsS0FBSyxDQUFDRyxNQUFNO1FBRXBDUixTQUFTLENBQUMsQ0FBQ1MsU0FBUyxHQUFLO1lBQ3ZCLE9BQU87Z0JBQUUsR0FBR0EsU0FBUztnQkFBRSxDQUFDRixJQUFJLENBQUMsRUFBRUQsS0FBSzthQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLFNBQVNJLGNBQWMsQ0FBQ0wsS0FBSyxFQUFFO1FBQzdCQSxLQUFLLENBQUNNLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUlDLE9BQU8sR0FBRztZQUNaQyxVQUFVLEVBQUUsSUFBSTtZQUNoQkMsT0FBTyxFQUFFLE9BQU87WUFDaEJDLE9BQU8sRUFBRTtnQkFDUEMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCQyxTQUFTLEVBQUVsQixNQUFNLENBQUNJLFFBQVE7Z0JBQzFCZSxTQUFTLEVBQUUsRUFBRTtnQkFDYkMsVUFBVSxFQUFFcEIsTUFBTSxDQUFDRyxTQUFTO2FBQzdCO1NBQ0Y7UUFFRHRCLElBQUksQ0FBQ0ksSUFBSSxDQUFDUSxJQUFJLENBQUM0QixTQUFTLENBQUNSLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFbkNaLFNBQVMsQ0FBQztZQUNSRSxTQUFTLEVBQUUsRUFBRTtZQUNiQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFDRSw4REFBQzFCLGdFQUFhO1FBQUNFLEtBQUssRUFBRUEsS0FBSzs7MEJBQ3pCLDhEQUFDZixrREFBSTswQkFDSCw0RUFBQ3lELE9BQUs7OEJBQUMsV0FBUzs7Ozs7d0JBQVE7Ozs7O29CQUNuQjswQkFDUCw4REFBQzlDLGlFQUFTO2dCQUFDK0MsU0FBUyxFQUFDLE1BQU07Z0JBQUNDLFFBQVEsRUFBQyxJQUFJOztrQ0FDdkMsOERBQUN2RCxrRUFBVzs7Ozs0QkFBRztrQ0FDZiw4REFBQ0ksMkRBQUc7d0JBQ0ZvRCxFQUFFLEVBQUU7NEJBQ0ZDLFNBQVMsRUFBRSxDQUFDOzRCQUNaQyxPQUFPLEVBQUUsTUFBTTs0QkFDZkMsYUFBYSxFQUFFLFFBQVE7NEJBQ3ZCQyxVQUFVLEVBQUUsUUFBUTt5QkFDckI7OzBDQUVELDhEQUFDdEQsa0VBQVU7Z0NBQUN1RCxPQUFPLEVBQUMsSUFBSTtnQ0FBQ0MsVUFBVSxFQUFFLE1BQU07MENBQUUsV0FFN0M7Ozs7O29DQUFhOzBDQUNiLDhEQUFDeEQsa0VBQVU7Z0NBQUNnRCxTQUFTLEVBQUMsSUFBSTtnQ0FBQ08sT0FBTyxFQUFDLElBQUk7Z0NBQUNFLEtBQUssRUFBQyxTQUFTOzBDQUFDLGtCQUV4RDs7Ozs7b0NBQWE7MENBQ2IsOERBQUNqRSw2REFBTTtnQ0FBQzBELEVBQUUsRUFBRTtvQ0FBRVEsQ0FBQyxFQUFFLENBQUM7b0NBQUVDLE9BQU8sRUFBRSxnQkFBZ0I7aUNBQUU7MENBQzdDLDRFQUFDNUQsMEVBQWdCOzs7O3dDQUFHOzs7OztvQ0FDYjswQ0FDVCw4REFBQ0Msa0VBQVU7Z0NBQUNnRCxTQUFTLEVBQUMsSUFBSTtnQ0FBQ08sT0FBTyxFQUFDLElBQUk7MENBQUMseUJBRXhDOzs7OztvQ0FBYTswQ0FDYiw4REFBQ3pELDJEQUFHO2dDQUFDa0QsU0FBUyxFQUFDLE1BQU07Z0NBQUNZLFVBQVU7Z0NBQUNWLEVBQUUsRUFBRTtvQ0FBRVcsRUFBRSxFQUFFLENBQUM7aUNBQUU7O2tEQUM1Qyw4REFBQ2xFLGdFQUFTO3dDQUNSbUUsTUFBTSxFQUFDLFFBQVE7d0NBQ2ZDLFFBQVE7d0NBQ1JDLFNBQVM7d0NBQ1RDLEVBQUUsRUFBQyxXQUFXO3dDQUNkQyxLQUFLLEVBQUMsWUFBWTt3Q0FDbEJqQyxJQUFJLEVBQUMsV0FBVzt3Q0FDaEJELEtBQUssRUFBRVAsTUFBTSxDQUFDRyxTQUFTO3dDQUN2QnVDLFFBQVEsRUFBRXJDLFFBQVE7d0NBQ2xCc0MsU0FBUzs7Ozs7NENBQ1Q7a0RBQ0YsOERBQUN6RSxnRUFBUzt3Q0FDUm1FLE1BQU0sRUFBQyxRQUFRO3dDQUNmQyxRQUFRO3dDQUNSQyxTQUFTO3dDQUNUQyxFQUFFLEVBQUMsVUFBVTt3Q0FDYmhDLElBQUksRUFBQyxVQUFVO3dDQUNmaUMsS0FBSyxFQUFDLFdBQVc7d0NBQ2pCRyxJQUFJLEVBQUMsVUFBVTt3Q0FDZnJDLEtBQUssRUFBRVAsTUFBTSxDQUFDSSxRQUFRO3dDQUN0QnNDLFFBQVEsRUFBRXJDLFFBQVE7Ozs7OzRDQUNsQjtrREFDRiw4REFBQ3dDLEtBQUc7a0RBQ0R4RCxTQUFTLEdBQUcsSUFBSSxpQkFDZiw4REFBQ3lELE1BQUk7NENBQUNDLFNBQVMsRUFBQyxZQUFZO3NEQUFDLCtDQUU3Qjs7Ozs7Z0RBQU87Ozs7OzRDQUVMO2tEQUNOLDhEQUFDL0UsNkRBQU07d0NBQ0xnRixPQUFPLEVBQUVyQyxjQUFjO3dDQUN2QmlDLElBQUksRUFBQyxRQUFRO3dDQUNiTCxTQUFTO3dDQUNUVCxPQUFPLEVBQUMsV0FBVzt3Q0FDbkJMLEVBQUUsRUFBRTs0Q0FBRVcsRUFBRSxFQUFFLENBQUM7NENBQUVhLEVBQUUsRUFBRSxDQUFDO3lDQUFFO2tEQUNyQixXQUVEOzs7Ozs0Q0FBUztrREFDVCw4REFBQzdFLDJEQUFJO3dDQUFDOEUsU0FBUztrREFDYiw0RUFBQzlFLDJEQUFJOzRDQUFDK0UsSUFBSTtzREFDUiw0RUFBQ2hGLDJEQUFJO2dEQUFDaUYsSUFBSSxFQUFDLFNBQVM7Z0RBQUN0QixPQUFPLEVBQUMsT0FBTzswREFDakMsMkJBQTJCOzs7OztvREFDdkI7Ozs7O2dEQUNGOzs7Ozs0Q0FDRjs7Ozs7O29DQUNIOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDSTs7Ozs7O1lBQ0UsQ0FDaEI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL1N0dWRlbnRTaWduSW4uanN4PzlhYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaW5rXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTG9ja091dGxpbmVkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcblxuaW1wb3J0ICogYXMgU29ja0pTIGZyb20gXCJzb2NranMtY2xpZW50XCI7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoKTtcblxudmFyIHNvY2sgPSBuZXcgU29ja0pTKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaVwiKTtcblxuc29jay5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgc29jay5zZW5kKFwidGVzdFwiKTtcbn07XG5cbnNvY2sub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coXCJjbG9zZVwiKTtcbn07XG5cbi8vQ2xhc3MgZnVuY3Rpb24gc3RhcnRzIGhlcmVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgdmFyIHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB2YXIgaXNDb3JyZWN0ID0gdHJ1ZTtcblxuICBzb2NrLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG5cbiAgICBpZiAocGFyc2VkRGF0YS5yZXNwb25kX2lkID09PSA0ODY5ICYmIHBhcnNlZERhdGEuc3RhdHVzX2NvZGUgPT09IDIwMCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvaW50cm9kdWN0aW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIkxvZ2luIGZhaWxlZFwiKTtcbiAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbY3JlYXRlLCBzZXRDcmVhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHNlc3Npb25JRDogXCJcIixcbiAgICByb29tTmFtZTogXCJcIixcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2F2ZVRleHQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBldmVudC50YXJnZXQ7XG5cbiAgICBzZXRDcmVhdGUoKHByZXZWYWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlZhbHVlLCBbbmFtZV06IHZhbHVlIH07XG4gICAgfSk7XG4gIH1cblxuICAvL1doZW4gSm9pbiBCdXR0b24gY2xpY2tlZFxuICBmdW5jdGlvbiBoYW5kbGVKb2luUm9vbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgc2VuZG9iaiA9IHtcbiAgICAgIHJlcXVlc3RfaWQ6IDQ4NjksXG4gICAgICByZXF1ZXN0OiBcImxvZ2luXCIsXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHVzZXJfdHlwZTogXCJzdHVkZW50XCIsXG4gICAgICAgIHVzZXJfbmFtZTogY3JlYXRlLnJvb21OYW1lLFxuICAgICAgICB1c2VyX3Bzd2Q6IFwiXCIsXG4gICAgICAgIHNlc3Npb25faWQ6IGNyZWF0ZS5zZXNzaW9uSUQsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBzb2NrLnNlbmQoSlNPTi5zdHJpbmdpZnkoc2VuZG9iaikpO1xuXG4gICAgc2V0Q3JlYXRlKHtcbiAgICAgIHNlc3Npb25JRDogXCJcIixcbiAgICAgIHJvb21OYW1lOiBcIlwiLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DZW50cmFsaXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBmb250V2VpZ2h0PXtcImJvbGRcIn0+XG4gICAgICAgICAgICBDZW50cmFsaXNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDRcIiBjb2xvcj1cIiM4NTAwMDBcIj5cbiAgICAgICAgICAgIFVTQyBNYXJzaGFsbCBFTENcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEF2YXRhciBzeD17eyBtOiAxLCBiZ2NvbG9yOiBcInNlY29uZGFyeS5tYWluXCIgfX0+XG4gICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICBKb2luIHdpdGggYSBTZXNzaW9uIElEIVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBub1ZhbGlkYXRlIHN4PXt7IG10OiAxIH19PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJzZXNzaW9uSURcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlc3Npb24gSURcIlxuICAgICAgICAgICAgICBuYW1lPVwic2Vzc2lvbklEXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZS5zZXNzaW9uSUR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzYXZlVGV4dH1cbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJyb29tTmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJyb29tTmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUm9vbSBOYW1lXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJvb21OYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZS5yb29tTmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NhdmVUZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtpc0NvcnJlY3QgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luRXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIHNlc3Npb24gSUQgYW5kIHJvb20gbmFtZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVKb2luUm9vbX1cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgc3g9e3sgbXQ6IDMsIG1iOiAyIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEpvaW4gUm9vbVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduVXBcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgIHtcIk5vdCBhIHN0dWRlbnQ/IENsaWNrIGhlcmVcIn1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwidXNlUm91dGVyIiwiQXZhdGFyIiwiQnV0dG9uIiwiQ3NzQmFzZWxpbmUiLCJUZXh0RmllbGQiLCJMaW5rIiwiR3JpZCIsIkJveCIsIkxvY2tPdXRsaW5lZEljb24iLCJUeXBvZ3JhcGh5IiwiQ29udGFpbmVyIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiU29ja0pTIiwidGhlbWUiLCJzb2NrIiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJvbmNsb3NlIiwiU2lnbkluIiwicm91dGVyIiwiaXNDb3JyZWN0Iiwib25tZXNzYWdlIiwiZSIsInBhcnNlZERhdGEiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwicmVzcG9uZF9pZCIsInN0YXR1c19jb2RlIiwicHVzaCIsImFsZXJ0IiwiY3JlYXRlIiwic2V0Q3JlYXRlIiwidXNlU3RhdGUiLCJzZXNzaW9uSUQiLCJyb29tTmFtZSIsInNhdmVUZXh0IiwiZXZlbnQiLCJ2YWx1ZSIsIm5hbWUiLCJ0YXJnZXQiLCJwcmV2VmFsdWUiLCJoYW5kbGVKb2luUm9vbSIsInByZXZlbnREZWZhdWx0Iiwic2VuZG9iaiIsInJlcXVlc3RfaWQiLCJyZXF1ZXN0IiwiY29udGVudCIsInVzZXJfdHlwZSIsInVzZXJfbmFtZSIsInVzZXJfcHN3ZCIsInNlc3Npb25faWQiLCJzdHJpbmdpZnkiLCJ0aXRsZSIsImNvbXBvbmVudCIsIm1heFdpZHRoIiwic3giLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImNvbG9yIiwibSIsImJnY29sb3IiLCJub1ZhbGlkYXRlIiwibXQiLCJtYXJnaW4iLCJyZXF1aXJlZCIsImZ1bGxXaWR0aCIsImlkIiwibGFiZWwiLCJvbkNoYW5nZSIsImF1dG9Gb2N1cyIsInR5cGUiLCJkaXYiLCJzcGFuIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1iIiwiY29udGFpbmVyIiwiaXRlbSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StudentSignIn.jsx\n");

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