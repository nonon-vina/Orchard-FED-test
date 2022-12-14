/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "captureLinks": function() { return /* binding */ captureLinks; }
/* harmony export */ });
var captureLinks = function captureLinks() {
  $('.js-links').on('click', function (e) {
    e.preventDefault();
    console.log(this);
  });
};

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInUp": function() { return /* binding */ fadeInUp; }
/* harmony export */ });
var fadeInUp = function fadeInUp() {
  gsap.defaults({
    easeEach: "power3.out"
  });
  gsap.set(".fadeInUp", {
    y: 50
  });
  if (window.innerWidth > 768) {
    ScrollTrigger.batch(".fadeInUp", {
      interval: 0.7,
      onEnter: function onEnter(batch) {
        return gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.23
        });
      }
    });
  } else {
    ScrollTrigger.batch(".fadeInUp", {
      interval: 0.5,
      onEnter: function onEnter(batch) {
        return gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.2
        });
      }
    });
  }
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_captureLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_fadeInUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


$(function () {
  (0,_modules_captureLinks__WEBPACK_IMPORTED_MODULE_0__.captureLinks)();
  (0,_modules_fadeInUp__WEBPACK_IMPORTED_MODULE_1__.fadeInUp)();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map