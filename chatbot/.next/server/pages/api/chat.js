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
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "(api)/./src/pages/api/chat.ts":
/*!*******************************!*\
  !*** ./src/pages/api/chat.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n    const data = {\n        model: \"gpt-3.5-turbo\",\n        messages: [\n            {\n                role: \"user\",\n                content: \"hello\"\n            }\n        ]\n    };\n    const resp = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n        headers: {\n            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n            \"Content-Type\": \"application/json\"\n        },\n        method: \"POST\",\n        body: JSON.stringify(data)\n    });\n    const json = await resp.json();\n    res.status(200).json({\n        ...json.choices[0].message\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZFQUE2RTtBQU85RCxlQUFlQSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCO0lBRUEsTUFBTUMsT0FBTztRQUNYQyxPQUFPO1FBQ1BDLFVBQVU7WUFDUjtnQkFDRUMsTUFBTTtnQkFDTkMsU0FBUztZQUNYO1NBQ0Q7SUFDSDtJQUVBLE1BQU1DLE9BQU8sTUFBTUMsTUFBTSw4Q0FBOEM7UUFDckVDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxnQkFBZ0I7UUFDbEI7UUFDQUMsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNmO0lBQ3ZCO0lBRUEsTUFBTWdCLE9BQVksTUFBTVgsS0FBS1csSUFBSTtJQUNqQ2pCLElBQUlrQixNQUFNLENBQUMsS0FBS0QsSUFBSSxDQUFDO1FBQUMsR0FBR0EsS0FBS0UsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTztJQUFBO0FBQ2xELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Ym90Ly4vc3JjL3BhZ2VzL2FwaS9jaGF0LnRzPzcyOTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT4sXG4pIHtcblxuICBjb25zdCBkYXRhID0ge1xuICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICBtZXNzYWdlczogW1xuICAgICAge1xuICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgY29udGVudDogXCJoZWxsb1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc1wiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZfWAsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pO1xuXG4gIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7Li4uanNvbi5jaG9pY2VzWzBdLm1lc3NhZ2V9KTtcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGEiLCJtb2RlbCIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJyZXNwIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsInN0YXR1cyIsImNob2ljZXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();