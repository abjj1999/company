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
exports.id = "pages/api/send";
exports.ids = ["pages/api/send"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/send.js":
/*!***************************!*\
  !*** ./pages/api/send.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        service: \"gmail\",\n        auth: {\n            user: \"abdullahalhilfi21@gmail.com\",\n            pass: \"1Abdala7\"\n        },\n        secure: true\n    });\n    const mailData = {\n        from: \"abdullahalhilfi21@gmail.com\",\n        to: \"abdullahalhilfi21@gmail.com\",\n        subject: `Message From ${req.body.name} || Potential Customer`,\n        text: `\r\n    A customer has filled out the contact form for ${req.body.option}\r\n\r\n      - Name: ${req.body.name}\r\n\r\n      ----------------------\r\n      To Contact them back:\r\n\r\n      - Email: ${req.body.email}\r\n      - Phone: ${req.body.phone}\r\n      ----------------------\r\n\r\n      Here is their message:\r\n      ${req.body.comment}\r\n    `\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVVBLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2pDLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0lBQ3RDLE1BQU1DLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxlQUFlLENBQUM7UUFDN0NDLE9BQU8sRUFBRUMsT0FBK0I7UUFDeENHLElBQUksRUFBRTtZQUNKQyxJQUFJLEVBQUVKLDZCQUE0QjtZQUNsQ00sSUFBSSxFQUFFTixVQUE0QjtTQUNuQztRQUNEUSxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRixNQUFNQyxRQUFRLEdBQUc7UUFDZkMsSUFBSSxFQUFFLDZCQUE2QjtRQUNuQ0MsRUFBRSxFQUFFLDZCQUE2QjtRQUNqQ0MsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFbkIsR0FBRyxDQUFDb0IsSUFBSSxDQUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDOURDLElBQUksRUFBRSxDQUFDO0tBZVI7O1FBRUMsSUFBSU0sR0FBRyxFQUFFRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0g7O0tBRXRCLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGFueS8uL3BhZ2VzL2FwaS9zZW5kLmpzP2UzYTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgbGV0IG5vZGVtYWlsZXIgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTtcclxuICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIHNlcnZpY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZJQ0UsXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVIsXHJcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBU1MsXHJcbiAgICB9LFxyXG4gICAgc2VjdXJlOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG1haWxEYXRhID0ge1xyXG4gICAgZnJvbTogXCJhYmR1bGxhaGFsaGlsZmkyMUBnbWFpbC5jb21cIixcclxuICAgIHRvOiBcImFiZHVsbGFoYWxoaWxmaTIxQGdtYWlsLmNvbVwiLFxyXG4gICAgc3ViamVjdDogYE1lc3NhZ2UgRnJvbSAke3JlcS5ib2R5Lm5hbWV9IHx8IFBvdGVudGlhbCBDdXN0b21lcmAsXHJcbiAgICB0ZXh0OiBgXHJcbiAgICBBIGN1c3RvbWVyIGhhcyBmaWxsZWQgb3V0IHRoZSBjb250YWN0IGZvcm0gZm9yICR7cmVxLmJvZHkub3B0aW9ufVxyXG5cclxuICAgICAgLSBOYW1lOiAke3JlcS5ib2R5Lm5hbWV9XHJcblxyXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgIFRvIENvbnRhY3QgdGhlbSBiYWNrOlxyXG5cclxuICAgICAgLSBFbWFpbDogJHtyZXEuYm9keS5lbWFpbH1cclxuICAgICAgLSBQaG9uZTogJHtyZXEuYm9keS5waG9uZX1cclxuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgSGVyZSBpcyB0aGVpciBtZXNzYWdlOlxyXG4gICAgICAke3JlcS5ib2R5LmNvbW1lbnR9XHJcbiAgICBgLFxyXG4gIH07XHJcbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcclxuICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBlbHNlIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJub2RlbWFpbGVyIiwicmVxdWlyZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRVJWSUNFIiwiYXV0aCIsInVzZXIiLCJORVhUX1BVQkxJQ19VU0VSIiwicGFzcyIsIk5FWFRfUFVCTElDX1BBU1MiLCJzZWN1cmUiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsInN1YmplY3QiLCJib2R5IiwibmFtZSIsInRleHQiLCJvcHRpb24iLCJlbWFpbCIsInBob25lIiwiY29tbWVudCIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/send.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/send.js"));
module.exports = __webpack_exports__;

})();