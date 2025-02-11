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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n    const data = {\n        model: \"gpt-3.5-turbo\",\n        messages: [\n            {\n                role: \"user\",\n                content: \"hello\"\n            }\n        ]\n    };\n    const resp = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n        headers: {\n            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n            \"Content-Type\": \"application/json\"\n        },\n        method: \"POST\",\n        body: JSON.stringify(data)\n    });\n    const json = await resp.json();\n    res.status(200).json(json);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZFQUE2RTtBQU85RCxlQUFlQSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCO0lBRUEsTUFBTUMsT0FBTztRQUNYQyxPQUFPO1FBQ1BDLFVBQVU7WUFDUjtnQkFDRUMsTUFBTTtnQkFDTkMsU0FBUztZQUNYO1NBQ0Q7SUFDSDtJQUVBLE1BQU1DLE9BQU8sTUFBTUMsTUFBTSw4Q0FBOEM7UUFDckVDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxnQkFBZ0I7UUFDbEI7UUFDQUMsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNmO0lBQ3ZCO0lBRUEsTUFBTWdCLE9BQU8sTUFBTVgsS0FBS1csSUFBSTtJQUM1QmpCLElBQUlrQixNQUFNLENBQUMsS0FBS0QsSUFBSSxDQUFDQTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGJvdC8uL3NyYy9wYWdlcy9hcGkvY2hhdC50cz83Mjk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+LFxuKSB7XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiaGVsbG9cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWX1gLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9KTtcblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGpzb24pO1xufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsInJlc3AiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat.ts\n");

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