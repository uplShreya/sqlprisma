"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/user/services.ts":
/*!******************************!*\
  !*** ./src/user/services.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new client_1.PrismaClient();\nexports[\"default\"] = {\n    createUser: (req, res) => {\n        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\n            try {\n                const { email, name } = req.body;\n                const user = yield prisma.user.create({\n                    data: {\n                        email,\n                        name\n                    },\n                });\n                const newUser = yield res.json(user);\n                console.log(newUser, \"newUser\");\n                if (newUser) {\n                    return resolve({\n                        status: 200,\n                        error: false,\n                        result: newUser,\n                        code: \"USER_CREATED\",\n                        message: \"USER_CREATED\"\n                    });\n                }\n                else {\n                    return reject({\n                        status: 400,\n                        error: true,\n                        code: \"USER_CREATE_FAILED\",\n                        message: \"USER_CREATE_FAILED\"\n                    });\n                }\n            }\n            catch (err) {\n                console.log(err, \"<<--[USER 001] Error in contacts create\");\n                return reject({\n                    status: 500,\n                    error: true,\n                    result: err,\n                    code: \"INTERNAL_SERVER_ERROR\",\n                    message: \"INTERNAL_SERVER_ERROR\"\n                });\n            }\n        }));\n    }\n};\n\n\n//# sourceURL=webpack://sqlprisma/./src/user/services.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b8902a25018dcd4eb4fd")
/******/ })();
/******/ 
/******/ }
;