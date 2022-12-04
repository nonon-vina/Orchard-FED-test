/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordion": function() { return /* binding */ accordion; }
/* harmony export */ });
var accordion = function accordion() {
  $('.js-accordBtn').on('click', function () {
    $('.js-dropDownContent').slideToggle();
    $(this).toggleClass('is-active');
  });
};

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": function() { return /* binding */ modal; }
/* harmony export */ });
var modal = function modal() {
  $('[data-fancybox]').fancybox({
    toolbar: false,
    smallBtn: true,
    iframe: {
      preload: false
    },
    preventCaptionOverlap: false,
    clickOutside: false,
    beforeShow: function beforeShow() {
      $('.is-show').remove();
    },
    afterShow: function afterShow() {
      var modalCaption = $(".fancybox-caption");
      var modalCaptionCopy = modalCaption.clone().addClass('is-show');
      $(".fancybox-slide--current .fancybox-content").append(modalCaptionCopy);
    },
    helpers: {
      overlay: {
        closeClick: false
      }
    },
    clickSlide: false
  });
};

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smoothScroll": function() { return /* binding */ smoothScroll; }
/* harmony export */ });
var smoothScroll = function smoothScroll() {
  $('a[href^="#"]').on("click", function (e) {
    var speed = 600;
    var href = $(e.currentTarget).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body, html").delay(200).animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
};

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swiperSlider": function() { return /* binding */ swiperSlider; }
/* harmony export */ });
var swiperSlider = function swiperSlider() {
  var slider01 = new Swiper('.swiper-container', {
    direction: 'horizontal',
    // スライド方向
    autoHeight: false,
    // 高さがスライドに合わせて変わる
    nested: false,
    // スライダーをネストできる
    grabCursor: false,
    // スライダーを掴むカーソル表示
    watchOverflow: true,
    // スライドが1枚しかなかったらスライダー機能をなくす
    freeMode: false,
    //スライドが停止しなくなる
    autoplay: {
      delay: 3000,
      // 自動スライド・1スライド滞在時間
      disableOnInteraction: false,
      // ユーザーがスライド操作した後もautoplay続行
      waitForTransition: true // スライドの移動を待ったあとに自動再生する

    },
    speed: 3000,
    // スライド切替スピード
    loop: false,
    // ループ(クローンスライドが作られる)
    spaceBetween: 0,
    // スライド間のmarginは0px
    slidesPerView: 1,
    // 1スライド表示
    slidesPerGroup: 1,
    // 1スライドで1グループ
    centeredSlides: false,
    // スライドが中央からスタートする
    observer: true,
    // 初期状態でスライダーが非表示でも動くようにする
    observeParents: true,
    // 初期状態でスライダーが非表示でも動くようにする
    preloadImages: false,
    // 画像の事前読み込みを禁止
    lazy: true,
    // 画像の読み込み遅延
    effect: 'slide',
    // エフェクト
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      // ページャー
      clickable: true // ページャークリッカブル

    },
    navigation: {
      prevEl: '.swiper-button-prev',
      // 前へボタン
      nextEl: '.swiper-button-next' // 次へボタン

    },
    breakpoints: {
      1000: {},
      320: {
        slidesPerView: 2,
        // 1スライド表示
        slidesPerGroup: 1,
        // 1スライドで1グループ
        spaceBetween: 10
      }
    }
  });
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_swiperSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
// import { viewport } from './modules/_viewport';
// import { btnClickFunc } from './modules/_btnClickFunc';
// import { getSearchParams } from './modules/_getSearchParams';
// import { backToTop } from './modules/_backToTop';
// import { checkView } from './modules/_checkView';
// import { customSelect } from './modules/_customSelect';


 // import { stickyHeader } from './modules/_stickyHeader';

 // import { wowEffects } from './modules/_wowEffects';

$(function () {
  // viewport();
  // btnClickFunc();
  // wowEffects();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_0__.accordion)(); // customSelect();
  // backToTop();

  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__.smoothScroll)();
  (0,_modules_swiperSlider__WEBPACK_IMPORTED_MODULE_3__.swiperSlider)();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map