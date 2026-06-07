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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // On app load, restore user from localStorage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"crm_token\");\n        const userData = localStorage.getItem(\"crm_user\");\n        if (token && userData) {\n            setUser(JSON.parse(userData));\n        }\n        setLoading(false);\n    }, []);\n    const login = async (email, password)=>{\n        const { data } = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.loginUser)({\n            email,\n            password\n        });\n        localStorage.setItem(\"crm_token\", data.token);\n        localStorage.setItem(\"crm_user\", JSON.stringify(data.user));\n        setUser(data.user);\n        router.push(\"/dashboard\");\n        return data;\n    };\n    const register = async (name, email, password)=>{\n        const { data } = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.registerUser)({\n            name,\n            email,\n            password\n        });\n        localStorage.setItem(\"crm_token\", data.token);\n        localStorage.setItem(\"crm_user\", JSON.stringify(data.user));\n        setUser(data.user);\n        router.push(\"/dashboard\");\n        return data;\n    };\n    const logout = ()=>{\n        localStorage.removeItem(\"crm_token\");\n        localStorage.removeItem(\"crm_user\");\n        setUser(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            loading,\n            login,\n            register,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\6th Semester\\\\Full Stack Dev Lab\\\\CRM_Project\\\\frontend\\\\context\\\\AuthContext.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!ctx) throw new Error(\"useAuth must be used inside AuthProvider\");\n    return ctx;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDL0I7QUFDYTtBQUVyRCxNQUFNTyw0QkFBY1Asb0RBQWFBLENBQUM7QUFFM0IsTUFBTVEsZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQVNDLFFBQVEsR0FBTVQsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUV4Qiw4Q0FBOEM7SUFDOUNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksUUFBV0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3RDLE1BQU1DLFdBQVdGLGFBQWFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJRixTQUFTRyxVQUFVO1lBQ3JCUCxRQUFRUSxLQUFLQyxLQUFLLENBQUNGO1FBQ3JCO1FBQ0FMLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTCxNQUFNUSxRQUFRLE9BQU9DLE9BQU9DO1FBQzFCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTW5CLG1EQUFTQSxDQUFDO1lBQUVpQjtZQUFPQztRQUFTO1FBQ25EUCxhQUFhUyxPQUFPLENBQUMsYUFBYUQsS0FBS1QsS0FBSztRQUM1Q0MsYUFBYVMsT0FBTyxDQUFDLFlBQWFOLEtBQUtPLFNBQVMsQ0FBQ0YsS0FBS2QsSUFBSTtRQUMxREMsUUFBUWEsS0FBS2QsSUFBSTtRQUNqQkksT0FBT2EsSUFBSSxDQUFDO1FBQ1osT0FBT0g7SUFDVDtJQUVBLE1BQU1JLFdBQVcsT0FBT0MsTUFBTVAsT0FBT0M7UUFDbkMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNbEIsc0RBQVlBLENBQUM7WUFBRXVCO1lBQU1QO1lBQU9DO1FBQVM7UUFDNURQLGFBQWFTLE9BQU8sQ0FBQyxhQUFhRCxLQUFLVCxLQUFLO1FBQzVDQyxhQUFhUyxPQUFPLENBQUMsWUFBYU4sS0FBS08sU0FBUyxDQUFDRixLQUFLZCxJQUFJO1FBQzFEQyxRQUFRYSxLQUFLZCxJQUFJO1FBQ2pCSSxPQUFPYSxJQUFJLENBQUM7UUFDWixPQUFPSDtJQUNUO0lBRUEsTUFBTU0sU0FBUztRQUNiZCxhQUFhZSxVQUFVLENBQUM7UUFDeEJmLGFBQWFlLFVBQVUsQ0FBQztRQUN4QnBCLFFBQVE7UUFDUkcsT0FBT2EsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ3BCLFlBQVl5QixRQUFRO1FBQUNDLE9BQU87WUFBRXZCO1lBQU1FO1lBQVNTO1lBQU9PO1lBQVVFO1FBQU87a0JBQ25FckI7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNeUIsVUFBVTtJQUNyQixNQUFNQyxNQUFNbEMsaURBQVVBLENBQUNNO0lBQ3ZCLElBQUksQ0FBQzRCLEtBQUssTUFBTSxJQUFJQyxNQUFNO0lBQzFCLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS1mcm9udGVuZC8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/MTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgbG9naW5Vc2VyLCByZWdpc3RlclVzZXIgfSBmcm9tICcuLi9saWIvYXBpJztcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgICAgc2V0VXNlcl0gICAgPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIE9uIGFwcCBsb2FkLCByZXN0b3JlIHVzZXIgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiAgICA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcm1fdG9rZW4nKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcm1fdXNlcicpO1xuICAgIGlmICh0b2tlbiAmJiB1c2VyRGF0YSkge1xuICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHVzZXJEYXRhKSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBsb2dpblVzZXIoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NybV90b2tlbicsIGRhdGEudG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjcm1fdXNlcicsICBKU09OLnN0cmluZ2lmeShkYXRhLnVzZXIpKTtcbiAgICBzZXRVc2VyKGRhdGEudXNlcik7XG4gICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jIChuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlZ2lzdGVyVXNlcih7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3JtX3Rva2VuJywgZGF0YS50b2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NybV91c2VyJywgIEpTT04uc3RyaW5naWZ5KGRhdGEudXNlcikpO1xuICAgIHNldFVzZXIoZGF0YS51c2VyKTtcbiAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3JtX3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NybV91c2VyJyk7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9hZGluZywgbG9naW4sIHJlZ2lzdGVyLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgaW5zaWRlIEF1dGhQcm92aWRlcicpO1xuICByZXR1cm4gY3R4O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwibG9naW5Vc2VyIiwicmVnaXN0ZXJVc2VyIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGEiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHVzaCIsInJlZ2lzdGVyIiwibmFtZSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsImN0eCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCustomer: () => (/* binding */ createCustomer),\n/* harmony export */   createInvoice: () => (/* binding */ createInvoice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deleteCustomer: () => (/* binding */ deleteCustomer),\n/* harmony export */   deleteInvoice: () => (/* binding */ deleteInvoice),\n/* harmony export */   getCustomerById: () => (/* binding */ getCustomerById),\n/* harmony export */   getCustomerStats: () => (/* binding */ getCustomerStats),\n/* harmony export */   getCustomers: () => (/* binding */ getCustomers),\n/* harmony export */   getInvoiceById: () => (/* binding */ getInvoiceById),\n/* harmony export */   getInvoices: () => (/* binding */ getInvoices),\n/* harmony export */   getMe: () => (/* binding */ getMe),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   updateCustomer: () => (/* binding */ updateCustomer)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst API = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:5000/api\" || 0,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n// Attach JWT token to every request automatically\nAPI.interceptors.request.use((config)=>{\n    if (false) {}\n    return config;\n}, (error)=>Promise.reject(error));\n// ─── Auth ──────────────────────────────────────────────────────────────────────\nconst registerUser = (data)=>API.post(\"/auth/register\", data);\nconst loginUser = (data)=>API.post(\"/auth/login\", data);\nconst getMe = ()=>API.get(\"/auth/me\");\n// ─── Customers ────────────────────────────────────────────────────────────────\nconst getCustomers = (params)=>API.get(\"/customers\", {\n        params\n    });\nconst getCustomerById = (id)=>API.get(`/customers/${id}`);\nconst createCustomer = (data)=>API.post(\"/customers\", data);\nconst updateCustomer = (id, data)=>API.put(`/customers/${id}`, data);\nconst deleteCustomer = (id)=>API.delete(`/customers/${id}`);\nconst getCustomerStats = ()=>API.get(\"/customers/stats\");\n// ─── Invoices ─────────────────────────────────────────────────────────────────\nconst getInvoices = ()=>API.get(\"/invoices\");\nconst getInvoiceById = (id)=>API.get(`/invoices/${id}`);\nconst createInvoice = (data)=>API.post(\"/invoices\", data);\nconst deleteInvoice = (id)=>API.delete(`/invoices/${id}`);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxNQUFNRCxvREFBWSxDQUFDO0lBQ3ZCRyxTQUFTQywyQkFBK0IsSUFBSTtJQUM1Q0csU0FBUztRQUFFLGdCQUFnQjtJQUFtQjtBQUNoRDtBQUVBLGtEQUFrRDtBQUNsRE4sSUFBSU8sWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FDMUIsQ0FBQ0M7SUFDQyxJQUFJLEtBQWtCLEVBQWEsRUFLbEM7SUFDRCxPQUFPQTtBQUNULEdBQ0EsQ0FBQ0ssUUFBVUMsUUFBUUMsTUFBTSxDQUFDRjtBQUc1QixrRkFBa0Y7QUFDM0UsTUFBTUcsZUFBZ0IsQ0FBQ0MsT0FBU25CLElBQUlvQixJQUFJLENBQUMsa0JBQWtCRCxNQUFNO0FBQ2pFLE1BQU1FLFlBQWdCLENBQUNGLE9BQVNuQixJQUFJb0IsSUFBSSxDQUFDLGVBQWVELE1BQU07QUFDOUQsTUFBTUcsUUFBZ0IsSUFBVXRCLElBQUl1QixHQUFHLENBQUMsWUFBWTtBQUUzRCxpRkFBaUY7QUFDMUUsTUFBTUMsZUFBbUIsQ0FBQ0MsU0FBV3pCLElBQUl1QixHQUFHLENBQUMsY0FBYztRQUFFRTtJQUFPLEdBQUc7QUFDdkUsTUFBTUMsa0JBQW1CLENBQUNDLEtBQVczQixJQUFJdUIsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFSSxHQUFHLENBQUMsRUFBRTtBQUNqRSxNQUFNQyxpQkFBbUIsQ0FBQ1QsT0FBV25CLElBQUlvQixJQUFJLENBQUMsY0FBY0QsTUFBTTtBQUNsRSxNQUFNVSxpQkFBbUIsQ0FBQ0YsSUFBSVIsT0FBU25CLElBQUk4QixHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUVILEdBQUcsQ0FBQyxFQUFFUixNQUFNO0FBQ3pFLE1BQU1ZLGlCQUFtQixDQUFDSixLQUFXM0IsSUFBSWdDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRUwsR0FBRyxDQUFDLEVBQUU7QUFDcEUsTUFBTU0sbUJBQW1CLElBQVlqQyxJQUFJdUIsR0FBRyxDQUFDLG9CQUFvQjtBQUV4RSxpRkFBaUY7QUFDMUUsTUFBTVcsY0FBaUIsSUFBWWxDLElBQUl1QixHQUFHLENBQUMsYUFBYTtBQUN4RCxNQUFNWSxpQkFBaUIsQ0FBQ1IsS0FBVzNCLElBQUl1QixHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUVJLEdBQUcsQ0FBQyxFQUFFO0FBQzlELE1BQU1TLGdCQUFpQixDQUFDakIsT0FBV25CLElBQUlvQixJQUFJLENBQUMsYUFBYUQsTUFBTTtBQUMvRCxNQUFNa0IsZ0JBQWlCLENBQUNWLEtBQVczQixJQUFJZ0MsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFTCxHQUFHLENBQUMsRUFBRTtBQUV4RSxpRUFBZTNCLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZnJvbnRlbmQvLi9saWIvYXBpLmpzPzQ1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQVBJID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaScsXG4gIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG59KTtcblxuLy8gQXR0YWNoIEpXVCB0b2tlbiB0byBldmVyeSByZXF1ZXN0IGF1dG9tYXRpY2FsbHlcbkFQSS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gIChjb25maWcpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NybV90b2tlbicpO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSxcbiAgKGVycm9yKSA9PiBQcm9taXNlLnJlamVjdChlcnJvcilcbik7XG5cbi8vIOKUgOKUgOKUgCBBdXRoIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciAgPSAoZGF0YSkgPT4gQVBJLnBvc3QoJy9hdXRoL3JlZ2lzdGVyJywgZGF0YSk7XG5leHBvcnQgY29uc3QgbG9naW5Vc2VyICAgICA9IChkYXRhKSA9PiBBUEkucG9zdCgnL2F1dGgvbG9naW4nLCBkYXRhKTtcbmV4cG9ydCBjb25zdCBnZXRNZSAgICAgICAgID0gKCkgICAgID0+IEFQSS5nZXQoJy9hdXRoL21lJyk7XG5cbi8vIOKUgOKUgOKUgCBDdXN0b21lcnMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5leHBvcnQgY29uc3QgZ2V0Q3VzdG9tZXJzICAgICA9IChwYXJhbXMpID0+IEFQSS5nZXQoJy9jdXN0b21lcnMnLCB7IHBhcmFtcyB9KTtcbmV4cG9ydCBjb25zdCBnZXRDdXN0b21lckJ5SWQgID0gKGlkKSAgICAgPT4gQVBJLmdldChgL2N1c3RvbWVycy8ke2lkfWApO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUN1c3RvbWVyICAgPSAoZGF0YSkgICA9PiBBUEkucG9zdCgnL2N1c3RvbWVycycsIGRhdGEpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1c3RvbWVyICAgPSAoaWQsIGRhdGEpID0+IEFQSS5wdXQoYC9jdXN0b21lcnMvJHtpZH1gLCBkYXRhKTtcbmV4cG9ydCBjb25zdCBkZWxldGVDdXN0b21lciAgID0gKGlkKSAgICAgPT4gQVBJLmRlbGV0ZShgL2N1c3RvbWVycy8ke2lkfWApO1xuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVyU3RhdHMgPSAoKSAgICAgICA9PiBBUEkuZ2V0KCcvY3VzdG9tZXJzL3N0YXRzJyk7XG5cbi8vIOKUgOKUgOKUgCBJbnZvaWNlcyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbmV4cG9ydCBjb25zdCBnZXRJbnZvaWNlcyAgICA9ICgpICAgICAgID0+IEFQSS5nZXQoJy9pbnZvaWNlcycpO1xuZXhwb3J0IGNvbnN0IGdldEludm9pY2VCeUlkID0gKGlkKSAgICAgPT4gQVBJLmdldChgL2ludm9pY2VzLyR7aWR9YCk7XG5leHBvcnQgY29uc3QgY3JlYXRlSW52b2ljZSAgPSAoZGF0YSkgICA9PiBBUEkucG9zdCgnL2ludm9pY2VzJywgZGF0YSk7XG5leHBvcnQgY29uc3QgZGVsZXRlSW52b2ljZSAgPSAoaWQpICAgICA9PiBBUEkuZGVsZXRlKGAvaW52b2ljZXMvJHtpZH1gKTtcblxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiaGVhZGVycyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBdXRob3JpemF0aW9uIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVnaXN0ZXJVc2VyIiwiZGF0YSIsInBvc3QiLCJsb2dpblVzZXIiLCJnZXRNZSIsImdldCIsImdldEN1c3RvbWVycyIsInBhcmFtcyIsImdldEN1c3RvbWVyQnlJZCIsImlkIiwiY3JlYXRlQ3VzdG9tZXIiLCJ1cGRhdGVDdXN0b21lciIsInB1dCIsImRlbGV0ZUN1c3RvbWVyIiwiZGVsZXRlIiwiZ2V0Q3VzdG9tZXJTdGF0cyIsImdldEludm9pY2VzIiwiZ2V0SW52b2ljZUJ5SWQiLCJjcmVhdGVJbnZvaWNlIiwiZGVsZXRlSW52b2ljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);\n([_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\6th Semester\\\\Full Stack Dev Lab\\\\CRM_Project\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {\n                position: \"top-right\",\n                toastOptions: {\n                    duration: 3000,\n                    style: {\n                        borderRadius: \"8px\",\n                        fontSize: \"14px\"\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\6th Semester\\\\Full Stack Dev Lab\\\\CRM_Project\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\6th Semester\\\\Full Stack Dev Lab\\\\CRM_Project\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1A7QUFDaEI7QUFFaEIsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0osOERBQVlBOzswQkFDWCw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0gsb0RBQU9BO2dCQUNOSSxVQUFTO2dCQUNUQyxjQUFjO29CQUNaQyxVQUFVO29CQUNWQyxPQUFPO3dCQUFFQyxjQUFjO3dCQUFPQyxVQUFVO29CQUFPO2dCQUNqRDs7Ozs7Ozs7Ozs7O0FBSVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0tZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XG5pbXBvcnQgeyBUb2FzdGVyIH0gICAgICBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxUb2FzdGVyXG4gICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgICAgdG9hc3RPcHRpb25zPXt7XG4gICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgc3R5bGU6IHsgYm9yZGVyUmFkaXVzOiAnOHB4JywgZm9udFNpemU6ICcxNHB4JyB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIlRvYXN0ZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwb3NpdGlvbiIsInRvYXN0T3B0aW9ucyIsImR1cmF0aW9uIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();