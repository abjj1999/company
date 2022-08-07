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

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const modemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const { google  } = __webpack_require__(/*! googleapis */ \"googleapis\");\n    const CLIENTID = \"564391500952-02mcbbknphlcn20vl4ivbirb49rkk4f3.apps.googleusercontent.com\";\n    const CLIENT_SECRET = \"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\";\n    const REDIRECT_URL = process.env.REDIRECT_URI;\n    const REFRESH_TOKEN = \"1//045tbWu6XOeN3CgYIARAAGAQSNwF-L9IrIt7knG_o-Ouak5NHUmjJZxSfWM59658JWF4Ay7jhp_CR_jbh3oJnR0bJ-NkyE_n5heQ\";\n    const oAuth2Client = new google.auth.OAuth2(CLIENTID, CLIENT_SECRET, REDIRECT_URL);\n    oAuth2Client.setCredentials({\n        refresh_token: REFRESH_TOKEN\n    });\n    try {\n        const accessToken = oAuth2Client.getAccessToken();\n        const transport = modemailer.createTransport({\n            service: \"gmail\",\n            auth: {\n                type: \"OAuth2\",\n                user: \"abdullahalhilfi21@gmail.com\",\n                clientId: CLIENTID,\n                clientSecret: CLIENT_SECRET,\n                refreshToken: REFRESH_TOKEN,\n                accessToken: accessToken\n            }\n        });\n        const mailData = {\n            from: \"abdullahalhilfi21@gmail.com <abdullahalhilfi21@gmail.com>\",\n            to: \"abdullahalhilfi21@gmail.com\",\n            subject: `Message From ${req.body.name} || Potential Customer`,\n            text: `\r\n      A customer has filled out the contact form for ${req.body.option}\r\n  \r\n        - Name: ${req.body.name}\r\n  \r\n        ----------------------\r\n        To Contact them back:\r\n  \r\n        - Email: ${req.body.email}\r\n        - Phone: ${req.body.phone}\r\n        ----------------------\r\n  \r\n        Here is their message:\r\n        ${req.body.comment}\r\n      `\n        };\n        const result = transport.sendMail(mailData);\n        result.then(()=>{\n            console.log(\"email has been sent\", result);\n            res.status(200).send(result);\n        });\n    } catch (error) {}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVVBLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2pDLE1BQU1DLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0lBQ3hDLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdELG1CQUFPLENBQUMsOEJBQVksQ0FBQztJQUV4QyxNQUFNRSxRQUFRLEdBQUdDLDBFQUFpQztJQUNsRCxNQUFNRyxhQUFhLEdBQUdILHFDQUFxQztJQUMzRCxNQUFNSyxZQUFZLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxZQUFZO0lBQzdDLE1BQU1DLGFBQWEsR0FBR1AseUdBQXFDO0lBRTNELE1BQU1TLFlBQVksR0FBRyxJQUFJWCxNQUFNLENBQUNZLElBQUksQ0FBQ0MsTUFBTSxDQUN6Q1osUUFBUSxFQUNSSSxhQUFhLEVBQ2JFLFlBQVksQ0FDYjtJQUNESSxZQUFZLENBQUNHLGNBQWMsQ0FBQztRQUFFQyxhQUFhLEVBQUVOLGFBQWE7S0FBRSxDQUFDLENBQUM7SUFFOUQsSUFBSTtRQUNGLE1BQU1PLFdBQVcsR0FBR0wsWUFBWSxDQUFDTSxjQUFjLEVBQUU7UUFFakQsTUFBTUMsU0FBUyxHQUFHcEIsVUFBVSxDQUFDcUIsZUFBZSxDQUFDO1lBQzNDQyxPQUFPLEVBQUUsT0FBTztZQUNoQlIsSUFBSSxFQUFFO2dCQUNKUyxJQUFJLEVBQUUsUUFBUTtnQkFDZEMsSUFBSSxFQUFFLDZCQUE2QjtnQkFDbkNDLFFBQVEsRUFBRXRCLFFBQVE7Z0JBQ2xCdUIsWUFBWSxFQUFFbkIsYUFBYTtnQkFDM0JvQixZQUFZLEVBQUVoQixhQUFhO2dCQUMzQk8sV0FBVyxFQUFFQSxXQUFXO2FBQ3pCO1NBQ0YsQ0FBQztRQUNGLE1BQU1VLFFBQVEsR0FBRztZQUNmQyxJQUFJLEVBQUUsMkRBQTJEO1lBQ2pFQyxFQUFFLEVBQUUsNkJBQTZCO1lBQ2pDQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUVqQyxHQUFHLENBQUNrQyxJQUFJLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUM5REMsSUFBSSxFQUFFLENBQUM7U0FlUjs7UUFFREssTUFBTSxDQUFDRSxJQUFJLENBQUMsSUFBTTs7WUFFaEIxQyxHQUFHLENBQUM2QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDO1NBQ2pCLENBQUMsQ0FBQzs7Q0FFTiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBhbnkvLi9wYWdlcy9hcGkvc2VuZC5qcz9lM2EyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGNvbnN0IG1vZGVtYWlsZXIgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTtcclxuICBjb25zdCB7IGdvb2dsZSB9ID0gcmVxdWlyZShcImdvb2dsZWFwaXNcIik7XHJcblxyXG4gIGNvbnN0IENMSUVOVElEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lEO1xyXG4gIGNvbnN0IENMSUVOVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVUO1xyXG4gIGNvbnN0IFJFRElSRUNUX1VSTCA9IHByb2Nlc3MuZW52LlJFRElSRUNUX1VSSTtcclxuICBjb25zdCBSRUZSRVNIX1RPS0VOID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVGUkVTSF9UT0tFTjtcclxuXHJcbiAgY29uc3Qgb0F1dGgyQ2xpZW50ID0gbmV3IGdvb2dsZS5hdXRoLk9BdXRoMihcclxuICAgIENMSUVOVElELFxyXG4gICAgQ0xJRU5UX1NFQ1JFVCxcclxuICAgIFJFRElSRUNUX1VSTFxyXG4gICk7XHJcbiAgb0F1dGgyQ2xpZW50LnNldENyZWRlbnRpYWxzKHsgcmVmcmVzaF90b2tlbjogUkVGUkVTSF9UT0tFTiB9KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gb0F1dGgyQ2xpZW50LmdldEFjY2Vzc1Rva2VuKCk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNwb3J0ID0gbW9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICBzZXJ2aWNlOiBcImdtYWlsXCIsXHJcbiAgICAgIGF1dGg6IHtcclxuICAgICAgICB0eXBlOiBcIk9BdXRoMlwiLFxyXG4gICAgICAgIHVzZXI6IFwiYWJkdWxsYWhhbGhpbGZpMjFAZ21haWwuY29tXCIsXHJcbiAgICAgICAgY2xpZW50SWQ6IENMSUVOVElELFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgICByZWZyZXNoVG9rZW46IFJFRlJFU0hfVE9LRU4sXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBtYWlsRGF0YSA9IHtcclxuICAgICAgZnJvbTogXCJhYmR1bGxhaGFsaGlsZmkyMUBnbWFpbC5jb20gPGFiZHVsbGFoYWxoaWxmaTIxQGdtYWlsLmNvbT5cIixcclxuICAgICAgdG86IFwiYWJkdWxsYWhhbGhpbGZpMjFAZ21haWwuY29tXCIsXHJcbiAgICAgIHN1YmplY3Q6IGBNZXNzYWdlIEZyb20gJHtyZXEuYm9keS5uYW1lfSB8fCBQb3RlbnRpYWwgQ3VzdG9tZXJgLFxyXG4gICAgICB0ZXh0OiBgXHJcbiAgICAgIEEgY3VzdG9tZXIgaGFzIGZpbGxlZCBvdXQgdGhlIGNvbnRhY3QgZm9ybSBmb3IgJHtyZXEuYm9keS5vcHRpb259XHJcbiAgXHJcbiAgICAgICAgLSBOYW1lOiAke3JlcS5ib2R5Lm5hbWV9XHJcbiAgXHJcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIFRvIENvbnRhY3QgdGhlbSBiYWNrOlxyXG4gIFxyXG4gICAgICAgIC0gRW1haWw6ICR7cmVxLmJvZHkuZW1haWx9XHJcbiAgICAgICAgLSBQaG9uZTogJHtyZXEuYm9keS5waG9uZX1cclxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgXHJcbiAgICAgICAgSGVyZSBpcyB0aGVpciBtZXNzYWdlOlxyXG4gICAgICAgICR7cmVxLmJvZHkuY29tbWVudH1cclxuICAgICAgYCxcclxuICAgIH07XHJcbiAgICBjb25zdCByZXN1bHQgPSB0cmFuc3BvcnQuc2VuZE1haWwobWFpbERhdGEpO1xyXG4gICAgcmVzdWx0LnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVtYWlsIGhhcyBiZWVuIHNlbnRcIiwgcmVzdWx0KTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtb2RlbWFpbGVyIiwicmVxdWlyZSIsImdvb2dsZSIsIkNMSUVOVElEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsIkNMSUVOVF9TRUNSRVQiLCJORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVUIiwiUkVESVJFQ1RfVVJMIiwiUkVESVJFQ1RfVVJJIiwiUkVGUkVTSF9UT0tFTiIsIk5FWFRfUFVCTElDX1JFRlJFU0hfVE9LRU4iLCJvQXV0aDJDbGllbnQiLCJhdXRoIiwiT0F1dGgyIiwic2V0Q3JlZGVudGlhbHMiLCJyZWZyZXNoX3Rva2VuIiwiYWNjZXNzVG9rZW4iLCJnZXRBY2Nlc3NUb2tlbiIsInRyYW5zcG9ydCIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJ0eXBlIiwidXNlciIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwicmVmcmVzaFRva2VuIiwibWFpbERhdGEiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiYm9keSIsIm5hbWUiLCJ0ZXh0Iiwib3B0aW9uIiwiZW1haWwiLCJwaG9uZSIsImNvbW1lbnQiLCJyZXN1bHQiLCJzZW5kTWFpbCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/send.js\n");

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