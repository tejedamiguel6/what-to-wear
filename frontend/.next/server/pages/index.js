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

/***/ "./apollo-client.js":
/*!**************************!*\
  !*** ./apollo-client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/core */ \"@apollo/client/core\");\n/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_core__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  uri: 'http://localhost:4000/',\n  cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlGLDZEQUFKLENBQWlCO0FBQzlCRyxFQUFBQSxHQUFHLEVBQUUsd0JBRHlCO0FBRTlCQyxFQUFBQSxLQUFLLEVBQUUsSUFBSUgsOERBQUo7QUFGdUIsQ0FBakIsQ0FBZjtBQUtBLGlFQUFlQyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vYXBvbGxvLWNsaWVudC5qcz8yM2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2NvcmUnXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvJyxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.js\");\n/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/core */ \"@apollo/client/core\");\n/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/tejedamiguel/Desktop/what-to-wear/frontend/pages/index.js\";\n\n\n\nfunction Home({\n  outfits\n}) {\n  console.log(outfits, 'outfits');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Outfits\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().flex),\n      children: outfits.map(outfit => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: outfit.outfitImage\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: [\"Top: \", outfit.top, \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: [\"Bottom: \", outfit.bottom]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: [\"Shoes: \", outfit.shoes]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 17\n            }, this)]\n          }, outfit.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"By:\", outfit.author.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps() {\n  const {\n    data\n  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_1__.default.query({\n    query: _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__.gql`\n      query Outfits {\n        outfits {\n          id\n          outfitImage\n          top\n          bottom\n          shoes\n          author {\n            name\n          }\n        }\n      }\n    `\n  });\n  return {\n    props: {\n      outfits: data.outfits\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNHLElBQVQsQ0FBYztBQUFFQyxFQUFBQTtBQUFGLENBQWQsRUFBMkI7QUFDeENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBQXFCLFNBQXJCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSSxlQUFTLEVBQUVGLHFFQUFmO0FBQUEsZ0JBQ0dFLE9BQU8sQ0FBQ0ksR0FBUixDQUFhQyxNQUFELElBQVk7QUFDdkIsNEJBQ0U7QUFBQSxrQ0FDRTtBQUFBLG9DQUNFO0FBQUssaUJBQUcsRUFBRUEsTUFBTSxDQUFDQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQSxrQ0FBU0QsTUFBTSxDQUFDRSxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRTtBQUFBLHFDQUFZRixNQUFNLENBQUNHLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRixlQUlFO0FBQUEsb0NBQVdILE1BQU0sQ0FBQ0ksS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUEsYUFBU0osTUFBTSxDQUFDSyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFBQSw4QkFBVUwsTUFBTSxDQUFDTSxNQUFQLENBQWNDLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFXRCxPQVpBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBVyxNQUFNbEIseURBQUEsQ0FBYTtBQUNsQ21CLElBQUFBLEtBQUssRUFBRWxCLG9EQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkc0MsR0FBYixDQUF2QjtBQWdCQSxTQUFPO0FBQ0xtQixJQUFBQSxLQUFLLEVBQUU7QUFDTGhCLE1BQUFBLE9BQU8sRUFBRWMsSUFBSSxDQUFDZDtBQURUO0FBREYsR0FBUDtBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gJy4uL2Fwb2xsby1jbGllbnQnXG5pbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9jb3JlJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBvdXRmaXRzIH0pIHtcbiAgY29uc29sZS5sb2cob3V0Zml0cywgJ291dGZpdHMnKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+T3V0Zml0czwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZmxleH0+XG4gICAgICAgIHtvdXRmaXRzLm1hcCgob3V0Zml0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsaSBrZXk9e291dGZpdC5pZH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e291dGZpdC5vdXRmaXRJbWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8cD5Ub3A6IHtvdXRmaXQudG9wfSA8L3A+XG4gICAgICAgICAgICAgICAgPHA+Qm90dG9tOiB7b3V0Zml0LmJvdHRvbX08L3A+XG4gICAgICAgICAgICAgICAgPHA+U2hvZXM6IHtvdXRmaXQuc2hvZXN9PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8c3Bhbj5CeTp7b3V0Zml0LmF1dGhvci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSBPdXRmaXRzIHtcbiAgICAgICAgb3V0Zml0cyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBvdXRmaXRJbWFnZVxuICAgICAgICAgIHRvcFxuICAgICAgICAgIGJvdHRvbVxuICAgICAgICAgIHNob2VzXG4gICAgICAgICAgYXV0aG9yIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBvdXRmaXRzOiBkYXRhLm91dGZpdHMsXG4gICAgfSxcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNsaWVudCIsImdxbCIsInN0eWxlcyIsIkhvbWUiLCJvdXRmaXRzIiwiY29uc29sZSIsImxvZyIsImZsZXgiLCJtYXAiLCJvdXRmaXQiLCJvdXRmaXRJbWFnZSIsInRvcCIsImJvdHRvbSIsInNob2VzIiwiaWQiLCJhdXRob3IiLCJuYW1lIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwicXVlcnkiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"flex\": \"Home_flex__-Lep2\",\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9lMGNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZsZXhcIjogXCJIb21lX2ZsZXhfXy1MZXAyXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@apollo/client/core":
/*!**************************************!*\
  !*** external "@apollo/client/core" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/core");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
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