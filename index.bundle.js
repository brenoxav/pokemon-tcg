/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS RESET BEGIN */\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    “Segoe UI”,\n    “Roboto”,\n    “Oxygen”,\n    “Ubuntu”,\n    “Cantarell”,\n    “Fira Sans”,\n    “Droid Sans”,\n    “Helvetica Neue”,\n    sans-serif;\n  background-color: #fd0;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* CSS RESET END */\n\n/* MAIN PAGE */\n\n.container {\n  max-width: 960px;\n  min-width: 360px;\n  margin: auto;\n  padding-top: 4rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 4rem;\n  width: 100%;\n  padding: 1rem;\n  border-bottom: 4px solid #f00;\n  font-family: 'Bebas Neue', Helvetica, sans-serif;\n  font-size: 1.5rem;\n  color: #fff;\n  background-color: #44c;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 960px;\n  height: 100%;\n  margin: auto;\n}\n\n.logo {\n  max-height: 3rem;\n}\n\n.cards-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem auto;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 1rem;\n  border: 1rem solid #44c;\n  border-radius: 1rem;\n  background-color: #44c;\n}\n\n.card > div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 1rem 0;\n}\n\n.card-image {\n  max-width: 160px;\n}\n\n.card-name {\n  font-family: 'Bebas Neue', Helvetica, sans-serif;\n  font-size: 1.5rem;\n  color: #fff;\n}\n\n.like-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #fff;\n}\n\n.btn-like {\n  color: #f00;\n  cursor: pointer;\n  margin-bottom: 0.5rem;\n}\n\n.btn {\n  width: 100%;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  text-transform: uppercase;\n  border: 2px solid #fd0;\n  font-weight: bold;\n  color: #fd0;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.btn:hover {\n  color: #44c;\n  background-color: #fd0;\n}\n\nfooter {\n  height: 4rem;\n  width: 100%;\n  margin: auto;\n  padding: 1rem;\n  color: #fff;\n  border-top: 4px solid #f00;\n  background-color: #44c;\n}\n\nfooter a:link,\nfooter a:visited {\n  color: #fff;\n}\n\n.footer-wrapper {\n  max-width: 960px;\n  margin: auto;\n}\n\n/* COMMENTS POP-UP */\n.comments-popup {\n  display: flex;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #0004;\n  justify-content: center;\n  align-items: center;\n}\n\n.comments-content {\n  max-width: 720px;\n  max-height: 720px;\n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  border: solid 1px #000;\n}\n\n.comments-content img {\n  max-width: 300px;\n  margin-right: 1em;\n}\n\n/* RESERVATIONS POP-UP */\n\n.reservations-popup {\n  display: flex;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #0004;\n  justify-content: center;\n  align-items: center;\n}\n\n.reservation-content {\n  max-width: 720px;\n  max-height: 720px;\n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  border: solid 1px #000;\n}\n\n.reservation-content img {\n  max-width: 300px;\n  margin-right: 1em;\n}\n\n/* POP-UP WINDOW */\n.popup {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #000c;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  border: none;\n  background-color: transparent;\n  font-size: 3rem;\n  color: #fff;\n  cursor: pointer;\n}\n\n.popup-content {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-y: auto;\n  padding: 1rem;\n  background-color: #44c;\n}\n\n.popup-image-wrapper {\n  width: 50%;\n  min-width: 300px;\n}\n\n.popup-image {\n  width: 100%;\n  min-width: 300px;\n  max-width: 480px;\n}\n\n.popup-info {\n  width: 50%;\n  min-width: 300px;\n  padding: 2rem;\n  overflow-y: auto;\n  line-height: 1.5rem;\n  color: #fff;\n}\n\n.popup-name {\n  font-size: 3rem;\n}\n\n.popup-type {\n  margin: 1rem auto;\n  font-size: 2rem;\n}\n\n.info-wrapper {\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  border: 1px solid #fff;\n}\n\n.prices-list {\n  padding: 1rem 0;\n  border-bottom: 1px solid #fff;\n}\n\n.popup-counter {\n  margin: 1rem auto;\n  font-size: 2rem;\n}\n\ninput,\ntextarea {\n  width: 100%;\n  border: 1px solid #fd0;\n  background-color: #fff2;\n  color: #fff;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS RESET BEGIN */\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    “Segoe UI”,\n    “Roboto”,\n    “Oxygen”,\n    “Ubuntu”,\n    “Cantarell”,\n    “Fira Sans”,\n    “Droid Sans”,\n    “Helvetica Neue”,\n    sans-serif;\n  background-color: #fd0;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* CSS RESET END */\n\n@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');\n\n/* MAIN PAGE */\n\n.container {\n  max-width: 960px;\n  min-width: 360px;\n  margin: auto;\n  padding-top: 4rem;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 4rem;\n  width: 100%;\n  padding: 1rem;\n  border-bottom: 4px solid #f00;\n  font-family: 'Bebas Neue', Helvetica, sans-serif;\n  font-size: 1.5rem;\n  color: #fff;\n  background-color: #44c;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 960px;\n  height: 100%;\n  margin: auto;\n}\n\n.logo {\n  max-height: 3rem;\n}\n\n.cards-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem auto;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 1rem;\n  border: 1rem solid #44c;\n  border-radius: 1rem;\n  background-color: #44c;\n}\n\n.card > div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 1rem 0;\n}\n\n.card-image {\n  max-width: 160px;\n}\n\n.card-name {\n  font-family: 'Bebas Neue', Helvetica, sans-serif;\n  font-size: 1.5rem;\n  color: #fff;\n}\n\n.like-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #fff;\n}\n\n.btn-like {\n  color: #f00;\n  cursor: pointer;\n  margin-bottom: 0.5rem;\n}\n\n.btn {\n  width: 100%;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  text-transform: uppercase;\n  border: 2px solid #fd0;\n  font-weight: bold;\n  color: #fd0;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.btn:hover {\n  color: #44c;\n  background-color: #fd0;\n}\n\nfooter {\n  height: 4rem;\n  width: 100%;\n  margin: auto;\n  padding: 1rem;\n  color: #fff;\n  border-top: 4px solid #f00;\n  background-color: #44c;\n}\n\nfooter a:link,\nfooter a:visited {\n  color: #fff;\n}\n\n.footer-wrapper {\n  max-width: 960px;\n  margin: auto;\n}\n\n/* COMMENTS POP-UP */\n.comments-popup {\n  display: flex;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #0004;\n  justify-content: center;\n  align-items: center;\n}\n\n.comments-content {\n  max-width: 720px;\n  max-height: 720px;\n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  border: solid 1px #000;\n}\n\n.comments-content img {\n  max-width: 300px;\n  margin-right: 1em;\n}\n\n/* RESERVATIONS POP-UP */\n\n.reservations-popup {\n  display: flex;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #0004;\n  justify-content: center;\n  align-items: center;\n}\n\n.reservation-content {\n  max-width: 720px;\n  max-height: 720px;\n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  border: solid 1px #000;\n}\n\n.reservation-content img {\n  max-width: 300px;\n  margin-right: 1em;\n}\n\n/* POP-UP WINDOW */\n.popup {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #000c;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  border: none;\n  background-color: transparent;\n  font-size: 3rem;\n  color: #fff;\n  cursor: pointer;\n}\n\n.popup-content {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-y: auto;\n  padding: 1rem;\n  background-color: #44c;\n}\n\n.popup-image-wrapper {\n  width: 50%;\n  min-width: 300px;\n}\n\n.popup-image {\n  width: 100%;\n  min-width: 300px;\n  max-width: 480px;\n}\n\n.popup-info {\n  width: 50%;\n  min-width: 300px;\n  padding: 2rem;\n  overflow-y: auto;\n  line-height: 1.5rem;\n  color: #fff;\n}\n\n.popup-name {\n  font-size: 3rem;\n}\n\n.popup-type {\n  margin: 1rem auto;\n  font-size: 2rem;\n}\n\n.info-wrapper {\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  border: 1px solid #fff;\n}\n\n.prices-list {\n  padding: 1rem 0;\n  border-bottom: 1px solid #fff;\n}\n\n.popup-counter {\n  margin: 1rem auto;\n  font-size: 2rem;\n}\n\ninput,\ntextarea {\n  width: 100%;\n  border: 1px solid #fd0;\n  background-color: #fff2;\n  color: #fff;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API)
/* harmony export */ });
class Api {
  pokemon = {
    callApi: async (query) => {
      const url = `https://api.pokemontcg.io/v2/cards?q=${query}`;
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(url, options);
      return response.json();
    },

    getAllCards: () => this.pokemon.callApi('set.id:base1'),

    getCardbyId: (cardId) => this.pokemon.callApi(`id:${cardId}`),
  };

  involvement = {
    callApi: async (method, query, bodyObj) => {
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T2tWRpfkFNscSG5pGg0V/${query}`;
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObj),
      };
      const response = await fetch(url, options);
      return method === 'POST' ? response : response.json();
    },

    getLikes: () => this.involvement.callApi('GET', 'likes'),

    postLike: (cardId) => {
      const bodyObj = {
        item_id: cardId,
      };
      return this.involvement.callApi('POST', 'likes', bodyObj);
    },

    getComments: (cardId) => this.involvement.callApi('GET', `comments?item_id=${cardId}`),

    postComment: (commentObj) => this.involvement.callApi('POST', 'comments', commentObj),

    getReservations: (cardId) => this.involvement.callApi('GET', `reservations?item_id=${cardId}`),

    postReservation: (reservationObj) => this.involvement.callApi('POST', 'reservations', reservationObj),
  }
}

const API = new Api();


/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countComments": () => (/* binding */ countComments),
/* harmony export */   "default": () => (/* binding */ setCommentsListeners)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/API.js");


const commentsPopup = document.querySelector('.comments-popup');

const setCommentsCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    commentsPopup.classList.add('hidden');
    commentsPopup.innerHTML = '';
  });
};

const countComments = () => {
  const numOfComments = document.querySelectorAll('.comments-number').length;
  document.querySelector('.comments-counter').textContent = `(${numOfComments})`;
  return numOfComments;
};

const openCommentsPopup = (cardID) => {
  _API_js__WEBPACK_IMPORTED_MODULE_0__.default.pokemon.getCardbyId(cardID)
    .then((card) => {
      const pokemonCard = card.data[0];
      const pokemonPrices = pokemonCard.tcgplayer.prices;
      commentsPopup.innerHTML = `
      <div class="popup-content">
      <button class="btn-close material-icons">close</button>
      <div class="popup-image-wrapper">
        <img class="popup-image" src="${pokemonCard.images.large}" alt="${pokemonCard.name}">  
      </div>
      <div class="popup-info">
        <h2 class="popup-name">${pokemonCard.name}</h2>
        <h3 class="popup-type">
          <span class="popup-supertype">${pokemonCard.supertype}</span> - 
          <span class="popup-subtype">${pokemonCard.subtypes[0]}</span>
        </h3>
        <div class="info-wrapper">
          <span class="popup-number">Number: ${pokemonCard.number}</span>
          <span class="popup-rarity">Rarity: ${pokemonCard.rarity}</span>
        </div>
        <h3>Prices from TCG Player</h3>
        <ul class="prices-list">
          <li class="popup-price">Market: ${pokemonPrices[Object.keys(pokemonPrices)[0]].market}</li>
          <li class="popup-price">Low: ${pokemonPrices[Object.keys(pokemonPrices)[0]].low}</li>
          <li class="popup-price">Mid: ${pokemonPrices[Object.keys(pokemonPrices)[0]].mid}</li>
          <li class="popup-price">High: ${pokemonPrices[Object.keys(pokemonPrices)[0]].high}</li>
        </ul>
        <div class="comments-generate">
        </div>
      </div>
    </div>
          `;
      commentsPopup.classList.remove('hidden');
      _API_js__WEBPACK_IMPORTED_MODULE_0__.default.involvement.getComments(cardID)
        .then((comments) => {
          if (!('error' in comments)) {
            const commentsContent = document.querySelector('.comments-generate');
            commentsContent.innerHTML += `
          <div class="comments-container">
            <div class="comments-data-container">
              <h3 class="popup-counter comments-count">Comments:<span class="comments-counter"></span></h3>
              <ul class="comments-data"></ul>
            </div>          
          </div>
          <div class="comments-post">
          <form id="post-comment" action="">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="fname" required><br>
            <label for="comment">Comment:</label><br>
            <textarea id="commentText" rows="4" cols="50" name="comment" form="post-comment" required></textarea>
            <input class="btn" id="commentBtn" type="submit" value="Submit">
          </form> 
          </div>
        `;
            const commentsData = document.querySelector('.comments-data');
            comments.forEach((comment) => {
              commentsData.innerHTML += `
            <li class="comments-number">${comment.creation_date} - ${comment.comment} by ${comment.username}</li>
          `;
            });
          }
          const submitComment = document.getElementById('commentBtn');
          submitComment.addEventListener('click', (e) => {
            e.preventDefault();
            const commentObject = {
              item_id: pokemonCard.id,
              username: document.getElementById('name').value,
              comment: document.getElementById('commentText').value,
            };
            _API_js__WEBPACK_IMPORTED_MODULE_0__.default.involvement.postComment(commentObject).then(() => {
              _API_js__WEBPACK_IMPORTED_MODULE_0__.default.involvement.getComments(cardID).then((comments) => {
                const lastComment = comments[comments.length - 1];
                const date = lastComment.creation_date.split('-');
                const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;
                document.querySelector('.comments-data').insertAdjacentHTML('beforeend',
                  `<li>${dateFormated} - ${lastComment.comment} by ${lastComment.username}</li>`);
              });
              document.getElementById('post-comment').reset();
            });
          });
          countComments();
          setCommentsCloseBtnListener(document.querySelector('.btn-close'));
        });
    });
};

const setCommentsListeners = () => {
  const commentsButtons = document.querySelectorAll('.btn-comments');
  commentsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openCommentsPopup(button.dataset.id);
    });
  });
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countCards": () => (/* binding */ countCards),
/* harmony export */   "default": () => (/* binding */ renderCardsList)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/API.js");
/* harmony import */ var _reservations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservations.js */ "./src/reservations.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ "./src/comments.js");




const cardsWrapper = document.querySelector('.cards-wrapper');

const updateLikesCount = () => {
  const counterElements = document.querySelectorAll('.like-count');
  const countersArr = [...counterElements];
  _API_js__WEBPACK_IMPORTED_MODULE_0__.default.involvement.getLikes()
    .then((likesArr) => {
      likesArr.forEach((likeCount) => {
        const likeCounter = countersArr.find((counter) => counter.dataset.id === likeCount.item_id);
        if (likeCounter) {
          likeCounter.textContent = `${likeCount.likes} likes`;
        }
      });
    });
};

const AddLikeNumber = (likesText) => {
  const indexEnd = likesText.indexOf(' ') + 1;
  const numText = likesText.substring(0, indexEnd);
  const likesNum = Number.parseInt(numText, 10);
  return likesNum + 1;
};

const setLikeListener = () => {
  document.addEventListener('click', (e) => {
    const likeBtn = e.target;
    const likeCounter = likeBtn.nextElementSibling;
    if (likeBtn.classList.contains('btn-like')) {
      likeCounter.textContent = `${AddLikeNumber(likeCounter.textContent)} likes`;
      _API_js__WEBPACK_IMPORTED_MODULE_0__.default.involvement.postLike(likeCounter.dataset.id);
    }
  });
};

const countCards = () => {
  const numOfCards = document.querySelectorAll('.card').length;
  document.querySelector('.cards-counter').textContent = `(${numOfCards})`;
  return numOfCards;
};

const renderCardsList = () => {
  _API_js__WEBPACK_IMPORTED_MODULE_0__.default.pokemon.getAllCards()
    .then((data) => {
      const cardsArr = data.data.slice(0, 12);
      cardsArr.forEach((card) => {
        const newCard = `
          <div class="card">
            <img src="${card.images.large}" alt="${card.name}" class="card-image">
            <div>
              <span class="card-name">${card.name}</span>
              <span class="like-wrapper">
                <span class="btn-like material-icons">favorite</span>
                <span data-id="${card.id}" class="like-count">0 likes</span>
              </span>
            </div>
            <button data-id="${card.id}" class="btn btn-comments">Comments</button>
            <button data-id="${card.id}" class="btn btn-reservations">Reservations</button>
          </div>
        `;
        cardsWrapper.innerHTML += newCard;
      });
      return cardsArr;
    })
    .then(() => {
      countCards();
      setLikeListener();
      updateLikesCount();
    })
    .then(() => {
      (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.default)();
    })
    .then(() => {
      (0,_reservations_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    });
};



/***/ }),

/***/ "./src/images/pokeball-logo.png":
/*!**************************************!*\
  !*** ./src/images/pokeball-logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45cde093d00907acb5c6.png";

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countReservations": () => (/* binding */ countReservations),
/* harmony export */   "default": () => (/* binding */ setReservationListeners)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/API.js");


const reservationPopup = document.querySelector('.reservations-popup');

const generatePopupWindow = () => {
  reservationPopup.innerHTML = `
    <div class="popup-content">
    <button class="btn-close material-icons">close</button>
  
      <div class="popup-image-wrapper">
        <img class="popup-image" src="" alt="">  
      </div>

      <div class="popup-info">
        <h2 class="popup-name"></h2>
        <h3 class="popup-type">
          <span class="popup-supertype"></span> - 
          <span class="popup-subtype"></span>
        </h3>
        <div class="info-wrapper">
          <span class="popup-number">Number: </span> - 
          <span class="popup-rarity">Rarity: </span>
        </div>
        <h3>Prices from TCG Player</h3>
        <ul class="prices-list">
        </ul>

        <div class="reservations-container">
          <div class="reservation-data-container">
            <h3 class="popup-counter reservations-count">Reservations: X</h3>
            <ul class="reservations-data"></ul>
          </div>
          <div class="reservation-form-container">
            <h2>Add a reservation</h2>
            <form class="reservations-fill">
              <input type="text" id="username" class="username" required><br>
              <label for="date-start">Start date:</label><br>
              <input type="date" id="date-start" name="date-start" min="2021-8-13 required><br>
              <label for="date-end">Date end:</label><br>
              <input type="date" id="date-end" name="date-end" min="2021-8-14" required>
              <button class="btn btn-reservation">Submit</button>
            </form>
          </div>          
        </div>
      </div>
    </div>
  `;
};

const countReservations = () => {
  const reservationNumber = document.querySelectorAll('.reservations-data li').length;
  document.querySelector('.reservations-count').textContent = `Reservations: ${reservationNumber}`;
  return reservationNumber;
};

const populateCardInfo = (pokeCard) => {
  const pokemonPrices = pokeCard.tcgplayer.prices;
  document.querySelector('.popup-image-wrapper img').src = pokeCard.images.large;
  document.querySelector('.popup-image-wrapper img').alt = pokeCard.name;
  document.querySelector('.popup-name').textContent = pokeCard.name;
  document.querySelector('.popup-supertype').textContent = pokeCard.supertype;
  document.querySelector('.popup-subtype').textContent = `${pokeCard.subtypes[0]}`;
  document.querySelector('.popup-number').textContent = pokeCard.number;
  document.querySelector('.popup-rarity').textContent = pokeCard.rarity;
  const pricesList = document.querySelector('.prices-list');
  pricesList.innerHTML = `
    <li class="popup-price">Low: ${pokemonPrices[Object.keys(pokemonPrices)[0]].low}</li>
    <li class="popup-price">Mid: ${pokemonPrices[Object.keys(pokemonPrices)[0]].mid}</li>
    <li class="popup-price">High ${pokemonPrices[Object.keys(pokemonPrices)[0]].high}</li>
    <li class="popup-price">Market: ${pokemonPrices[Object.keys(pokemonPrices)[0]].market}</li>
  `;
};

const populateCardReservations = (reservations) => {
  const reservationsList = document.querySelector('.reservations-data');
  reservationsList.innerHTML = '';
  reservations.forEach((reservation) => {
    reservationsList.innerHTML += `
      <li>${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>
    `;
  });
  countReservations();
};

const setCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    reservationPopup.classList.add('hidden');
    reservationPopup.innerHTML = '';
  });
};

const postReservation = async (submitBtn, cardID) => {
  const newReservation = {
    item_id: cardID,
    username: document.querySelector('#username').value,
    date_start: document.querySelector('#date-start').value,
    date_end: document.querySelector('#date-end').value,
  };
  await _API_js__WEBPACK_IMPORTED_MODULE_0__.default.involvement.postReservation(newReservation);
  submitBtn.parentNode.reset();
  const reservations = await _API_js__WEBPACK_IMPORTED_MODULE_0__.default.involvement.getReservations(cardID);
  populateCardReservations(reservations);
};

const setSubmitListener = (submitBtn, cardID) => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    postReservation(submitBtn, cardID);
  });
};

const openPopup = (cardID) => {
  Promise.allSettled([
    _API_js__WEBPACK_IMPORTED_MODULE_0__.default.pokemon.getCardbyId(cardID),
    _API_js__WEBPACK_IMPORTED_MODULE_0__.default.involvement.getReservations(cardID),
  ]).then((values) => {
    const pokemonCard = values[0].value.data[0];
    generatePopupWindow();
    populateCardInfo(pokemonCard);
    reservationPopup.classList.remove('hidden');
    setCloseBtnListener(document.querySelector('.btn-close'));
    setSubmitListener(document.querySelector('.btn-reservation'), cardID);
    const reservations = values[1].value;
    if (!('error' in reservations)) {
      populateCardReservations(reservations);
    }
  });
};

const setReservationListeners = () => {
  const reservationButtons = document.querySelectorAll('.btn-reservations');
  reservationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openPopup(button.dataset.id);
    });
  });
};



/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _images_pokeball_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pokeball-logo.png */ "./src/images/pokeball-logo.png");




const logoItem = document.querySelector('.logo-item');
const logo = document.createElement('img');
logo.src = _images_pokeball_logo_png__WEBPACK_IMPORTED_MODULE_2__;
logo.classList.add('logo');

logoItem.appendChild(logo);

window.addEventListener('load', () => {
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlbW9uLWN0Zy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Bva2Vtb24tY3RnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Bva2Vtb24tY3RnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Bva2Vtb24tY3RnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Bva2Vtb24tY3RnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWN0Zy8uL3NyYy9BUEkuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvLi9zcmMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWN0Zy8uL3NyYy9yZXNlcnZhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bva2Vtb24tY3RnL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1jdGcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb2tlbW9uLWN0Zy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bva2Vtb24tY3RnL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Bva2Vtb24tY3RnLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysd0hBQXdIO0FBQ3hIO0FBQ0Esb0VBQW9FLDJCQUEyQixHQUFHLGdrQkFBZ2tCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQiw2QkFBNkIsR0FBRyx1R0FBdUcsbUJBQW1CLEdBQUcsVUFBVSxtQkFBbUIsME5BQTBOLDJCQUEyQixHQUFHLGFBQWEscUJBQXFCLEdBQUcsb0JBQW9CLGlCQUFpQixHQUFHLG1FQUFtRSxnQkFBZ0Isa0JBQWtCLEdBQUcsV0FBVyw4QkFBOEIsc0JBQXNCLEdBQUcsMERBQTBELHFCQUFxQixxQkFBcUIsaUJBQWlCLHNCQUFzQixHQUFHLFlBQVksb0JBQW9CLFdBQVcsWUFBWSxpQkFBaUIsZ0JBQWdCLGtCQUFrQixrQ0FBa0Ms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YSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFB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a0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNtQjtBQUNTOztBQUVqRDtBQUNBO0FBQ0EsV0FBVyxzREFBTztBQUNsQjs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsaURBQWU7QUFDakIsQ0FBQyxFIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDU1MgUkVTRVQgQkVHSU4gKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAg4oCcU2Vnb2UgVUnigJ0sXFxuICAgIOKAnFJvYm90b+KAnSxcXG4gICAg4oCcT3h5Z2Vu4oCdLFxcbiAgICDigJxVYnVudHXigJ0sXFxuICAgIOKAnENhbnRhcmVsbOKAnSxcXG4gICAg4oCcRmlyYSBTYW5z4oCdLFxcbiAgICDigJxEcm9pZCBTYW5z4oCdLFxcbiAgICDigJxIZWx2ZXRpY2EgTmV1ZeKAnSxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDA7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6OmJlZm9yZSxcXG5ibG9ja3F1b3RlOjphZnRlcixcXG5xOjpiZWZvcmUsXFxucTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIENTUyBSRVNFVCBFTkQgKi9cXG5cXG4vKiBNQUlOIFBBR0UgKi9cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogOTYwcHg7XFxuICBtaW4td2lkdGg6IDM2MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDRyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmMDA7XFxuICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YztcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC13aWR0aDogOTYwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5sb2dvIHtcXG4gIG1heC1oZWlnaHQ6IDNyZW07XFxufVxcblxcbi5jYXJkcy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkICM0NGM7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YztcXG59XFxuXFxuLmNhcmQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gIG1heC13aWR0aDogMTYwcHg7XFxufVxcblxcbi5jYXJkLW5hbWUge1xcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmxpa2Utd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJ0bi1saWtlIHtcXG4gIGNvbG9yOiAjZjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmQwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgY29sb3I6ICM0NGM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgI2YwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGM7XFxufVxcblxcbmZvb3RlciBhOmxpbmssXFxuZm9vdGVyIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogOTYwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIENPTU1FTlRTIFBPUC1VUCAqL1xcbi5jb21tZW50cy1wb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50cy1jb250ZW50IHtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBtYXgtaGVpZ2h0OiA3MjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDA7XFxufVxcblxcbi5jb21tZW50cy1jb250ZW50IGltZyB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qIFJFU0VSVkFUSU9OUyBQT1AtVVAgKi9cXG5cXG4ucmVzZXJ2YXRpb25zLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWNvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIG1heC1oZWlnaHQ6IDcyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWNvbnRlbnQgaW1nIHtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLyogUE9QLVVQIFdJTkRPVyAqL1xcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBjO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRjO1xcbn1cXG5cXG4ucG9wdXAtaW1hZ2Utd3JhcHBlciB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnBvcHVwLWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxufVxcblxcbi5wb3B1cC1pbmZvIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5wb3B1cC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnBvcHVwLXR5cGUge1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG59XFxuXFxuLnByaWNlcy1saXN0IHtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4ucG9wdXAtY291bnRlciB7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmQwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7Ozs7Ozs7Ozs7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QU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBSRVNFVCBCRUdJTiAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LWZhbWlseTpcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICDigJxTZWdvZSBVSeKAnSxcXG4gICAg4oCcUm9ib3Rv4oCdLFxcbiAgICDigJxPeHlnZW7igJ0sXFxuICAgIOKAnFVidW50deKAnSxcXG4gICAg4oCcQ2FudGFyZWxs4oCdLFxcbiAgICDigJxGaXJhIFNhbnPigJ0sXFxuICAgIOKAnERyb2lkIFNhbnPigJ0sXFxuICAgIOKAnEhlbHZldGljYSBOZXVl4oCdLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTo6YmVmb3JlLFxcbmJsb2NrcXVvdGU6OmFmdGVyLFxcbnE6OmJlZm9yZSxcXG5xOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogQ1NTIFJFU0VUIEVORCAqL1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogTUFJTiBQQUdFICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgbWluLXdpZHRoOiAzNjBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjAwO1xcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGM7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXgtaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4uY2FyZHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJvcmRlcjogMXJlbSBzb2xpZCAjNDRjO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGM7XFxufVxcblxcbi5jYXJkID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4uY2FyZC1pbWFnZSB7XFxuICBtYXgtd2lkdGg6IDE2MHB4O1xcbn1cXG5cXG4uY2FyZC1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5saWtlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5idG4tbGlrZSB7XFxuICBjb2xvcjogI2YwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmQwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2ZkMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDRjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRjO1xcbn1cXG5cXG5mb290ZXIgYTpsaW5rLFxcbmZvb3RlciBhOnZpc2l0ZWQge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItd3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBDT01NRU5UUyBQT1AtVVAgKi9cXG4uY29tbWVudHMtcG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudHMtY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgbWF4LWhlaWdodDogNzIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDAwO1xcbn1cXG5cXG4uY29tbWVudHMtY29udGVudCBpbWcge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4vKiBSRVNFUlZBVElPTlMgUE9QLVVQICovXFxuXFxuLnJlc2VydmF0aW9ucy1wb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1jb250ZW50IHtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBtYXgtaGVpZ2h0OiA3MjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDA7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1jb250ZW50IGltZyB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qIFBPUC1VUCBXSU5ET1cgKi9cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICByaWdodDogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YztcXG59XFxuXFxuLnBvcHVwLWltYWdlLXdyYXBwZXIge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbi5wb3B1cC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbn1cXG5cXG4ucG9wdXAtaW5mbyB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucG9wdXAtbmFtZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5wb3B1cC10eXBlIHtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaW5mby13cmFwcGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5wcmljZXMtbGlzdCB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG59XFxuXFxuLnBvcHVwLWNvdW50ZXIge1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIEFwaSB7XG4gIHBva2Vtb24gPSB7XG4gICAgY2FsbEFwaTogYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkucG9rZW1vbnRjZy5pby92Mi9jYXJkcz9xPSR7cXVlcnl9YDtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSxcblxuICAgIGdldEFsbENhcmRzOiAoKSA9PiB0aGlzLnBva2Vtb24uY2FsbEFwaSgnc2V0LmlkOmJhc2UxJyksXG5cbiAgICBnZXRDYXJkYnlJZDogKGNhcmRJZCkgPT4gdGhpcy5wb2tlbW9uLmNhbGxBcGkoYGlkOiR7Y2FyZElkfWApLFxuICB9O1xuXG4gIGludm9sdmVtZW50ID0ge1xuICAgIGNhbGxBcGk6IGFzeW5jIChtZXRob2QsIHF1ZXJ5LCBib2R5T2JqKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVDJ0V1JwZmtGTnNjU0c1cEdnMFYvJHtxdWVyeX1gO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keU9iaiksXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG1ldGhvZCA9PT0gJ1BPU1QnID8gcmVzcG9uc2UgOiByZXNwb25zZS5qc29uKCk7XG4gICAgfSxcblxuICAgIGdldExpa2VzOiAoKSA9PiB0aGlzLmludm9sdmVtZW50LmNhbGxBcGkoJ0dFVCcsICdsaWtlcycpLFxuXG4gICAgcG9zdExpa2U6IChjYXJkSWQpID0+IHtcbiAgICAgIGNvbnN0IGJvZHlPYmogPSB7XG4gICAgICAgIGl0ZW1faWQ6IGNhcmRJZCxcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcy5pbnZvbHZlbWVudC5jYWxsQXBpKCdQT1NUJywgJ2xpa2VzJywgYm9keU9iaik7XG4gICAgfSxcblxuICAgIGdldENvbW1lbnRzOiAoY2FyZElkKSA9PiB0aGlzLmludm9sdmVtZW50LmNhbGxBcGkoJ0dFVCcsIGBjb21tZW50cz9pdGVtX2lkPSR7Y2FyZElkfWApLFxuXG4gICAgcG9zdENvbW1lbnQ6IChjb21tZW50T2JqKSA9PiB0aGlzLmludm9sdmVtZW50LmNhbGxBcGkoJ1BPU1QnLCAnY29tbWVudHMnLCBjb21tZW50T2JqKSxcblxuICAgIGdldFJlc2VydmF0aW9uczogKGNhcmRJZCkgPT4gdGhpcy5pbnZvbHZlbWVudC5jYWxsQXBpKCdHRVQnLCBgcmVzZXJ2YXRpb25zP2l0ZW1faWQ9JHtjYXJkSWR9YCksXG5cbiAgICBwb3N0UmVzZXJ2YXRpb246IChyZXNlcnZhdGlvbk9iaikgPT4gdGhpcy5pbnZvbHZlbWVudC5jYWxsQXBpKCdQT1NUJywgJ3Jlc2VydmF0aW9ucycsIHJlc2VydmF0aW9uT2JqKSxcbiAgfVxufVxuXG5jb25zdCBBUEkgPSBuZXcgQXBpKCk7XG5leHBvcnQgeyBBUEkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBBUEkgZnJvbSAnLi9BUEkuanMnO1xuXG5jb25zdCBjb21tZW50c1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLXBvcHVwJyk7XG5cbmNvbnN0IHNldENvbW1lbnRzQ2xvc2VCdG5MaXN0ZW5lciA9IChjbG9zZUJ0bikgPT4ge1xuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb21tZW50c1BvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbW1lbnRzUG9wdXAuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3QgY291bnRDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgbnVtT2ZDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cy1udW1iZXInKS5sZW5ndGg7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1jb3VudGVyJykudGV4dENvbnRlbnQgPSBgKCR7bnVtT2ZDb21tZW50c30pYDtcbiAgcmV0dXJuIG51bU9mQ29tbWVudHM7XG59O1xuXG5jb25zdCBvcGVuQ29tbWVudHNQb3B1cCA9IChjYXJkSUQpID0+IHtcbiAgQVBJLnBva2Vtb24uZ2V0Q2FyZGJ5SWQoY2FyZElEKVxuICAgIC50aGVuKChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBwb2tlbW9uQ2FyZCA9IGNhcmQuZGF0YVswXTtcbiAgICAgIGNvbnN0IHBva2Vtb25QcmljZXMgPSBwb2tlbW9uQ2FyZC50Y2dwbGF5ZXIucHJpY2VzO1xuICAgICAgY29tbWVudHNQb3B1cC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZSBtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaW1hZ2Utd3JhcHBlclwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwicG9wdXAtaW1hZ2VcIiBzcmM9XCIke3Bva2Vtb25DYXJkLmltYWdlcy5sYXJnZX1cIiBhbHQ9XCIke3Bva2Vtb25DYXJkLm5hbWV9XCI+ICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWluZm9cIj5cbiAgICAgICAgPGgyIGNsYXNzPVwicG9wdXAtbmFtZVwiPiR7cG9rZW1vbkNhcmQubmFtZX08L2gyPlxuICAgICAgICA8aDMgY2xhc3M9XCJwb3B1cC10eXBlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cC1zdXBlcnR5cGVcIj4ke3Bva2Vtb25DYXJkLnN1cGVydHlwZX08L3NwYW4+IC0gXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cC1zdWJ0eXBlXCI+JHtwb2tlbW9uQ2FyZC5zdWJ0eXBlc1swXX08L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcHVwLW51bWJlclwiPk51bWJlcjogJHtwb2tlbW9uQ2FyZC5udW1iZXJ9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXAtcmFyaXR5XCI+UmFyaXR5OiAke3Bva2Vtb25DYXJkLnJhcml0eX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+UHJpY2VzIGZyb20gVENHIFBsYXllcjwvaDM+XG4gICAgICAgIDx1bCBjbGFzcz1cInByaWNlcy1saXN0XCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicG9wdXAtcHJpY2VcIj5NYXJrZXQ6ICR7cG9rZW1vblByaWNlc1tPYmplY3Qua2V5cyhwb2tlbW9uUHJpY2VzKVswXV0ubWFya2V0fTwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicG9wdXAtcHJpY2VcIj5Mb3c6ICR7cG9rZW1vblByaWNlc1tPYmplY3Qua2V5cyhwb2tlbW9uUHJpY2VzKVswXV0ubG93fTwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicG9wdXAtcHJpY2VcIj5NaWQ6ICR7cG9rZW1vblByaWNlc1tPYmplY3Qua2V5cyhwb2tlbW9uUHJpY2VzKVswXV0ubWlkfTwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicG9wdXAtcHJpY2VcIj5IaWdoOiAke3Bva2Vtb25QcmljZXNbT2JqZWN0LmtleXMocG9rZW1vblByaWNlcylbMF1dLmhpZ2h9PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWdlbmVyYXRlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgICAgYDtcbiAgICAgIGNvbW1lbnRzUG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBBUEkuaW52b2x2ZW1lbnQuZ2V0Q29tbWVudHMoY2FyZElEKVxuICAgICAgICAudGhlbigoY29tbWVudHMpID0+IHtcbiAgICAgICAgICBpZiAoISgnZXJyb3InIGluIGNvbW1lbnRzKSkge1xuICAgICAgICAgICAgY29uc3QgY29tbWVudHNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWdlbmVyYXRlJyk7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRlbnQuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtZGF0YS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicG9wdXAtY291bnRlciBjb21tZW50cy1jb3VudFwiPkNvbW1lbnRzOjxzcGFuIGNsYXNzPVwiY29tbWVudHMtY291bnRlclwiPjwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50cy1kYXRhXCI+PC91bD5cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtcG9zdFwiPlxuICAgICAgICAgIDxmb3JtIGlkPVwicG9zdC1jb21tZW50XCIgYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwiZm5hbWVcIiByZXF1aXJlZD48YnI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tbWVudFwiPkNvbW1lbnQ6PC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb21tZW50VGV4dFwiIHJvd3M9XCI0XCIgY29scz1cIjUwXCIgbmFtZT1cImNvbW1lbnRcIiBmb3JtPVwicG9zdC1jb21tZW50XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0blwiIGlkPVwiY29tbWVudEJ0blwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICAgIDwvZm9ybT4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50c0RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtZGF0YScpO1xuICAgICAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICAgICAgICBjb21tZW50c0RhdGEuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvbW1lbnRzLW51bWJlclwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAtICR7Y29tbWVudC5jb21tZW50fSBieSAke2NvbW1lbnQudXNlcm5hbWV9PC9saT5cbiAgICAgICAgICBgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHN1Ym1pdENvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudEJ0bicpO1xuICAgICAgICAgIHN1Ym1pdENvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY29tbWVudE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgaXRlbV9pZDogcG9rZW1vbkNhcmQuaWQsXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlLFxuICAgICAgICAgICAgICBjb21tZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudFRleHQnKS52YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBBUEkuaW52b2x2ZW1lbnQucG9zdENvbW1lbnQoY29tbWVudE9iamVjdCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIEFQSS5pbnZvbHZlbWVudC5nZXRDb21tZW50cyhjYXJkSUQpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdENvbW1lbnQgPSBjb21tZW50c1tjb21tZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbGFzdENvbW1lbnQuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVGb3JtYXRlZCA9IGAke2RhdGVbMV19LyR7ZGF0ZVsyXX0vJHtkYXRlWzBdfWA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWRhdGEnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICAgICAgICAgICAgICBgPGxpPiR7ZGF0ZUZvcm1hdGVkfSAtICR7bGFzdENvbW1lbnQuY29tbWVudH0gYnkgJHtsYXN0Q29tbWVudC51c2VybmFtZX08L2xpPmApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3QtY29tbWVudCcpLnJlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb3VudENvbW1lbnRzKCk7XG4gICAgICAgICAgc2V0Q29tbWVudHNDbG9zZUJ0bkxpc3RlbmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UnKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3Qgc2V0Q29tbWVudHNMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY29tbWVudHMnKTtcbiAgY29tbWVudHNCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG9wZW5Db21tZW50c1BvcHVwKGJ1dHRvbi5kYXRhc2V0LmlkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjb3VudENvbW1lbnRzLCBzZXRDb21tZW50c0xpc3RlbmVycyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IEFQSSBmcm9tICcuL0FQSS5qcyc7XG5pbXBvcnQgc2V0UmVzZXJ2YXRpb25MaXN0ZW5lcnMgZnJvbSAnLi9yZXNlcnZhdGlvbnMuanMnO1xuaW1wb3J0IHNldENvbW1lbnRzTGlzdGVuZXJzIGZyb20gJy4vY29tbWVudHMuanMnO1xuXG5jb25zdCBjYXJkc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtd3JhcHBlcicpO1xuXG5jb25zdCB1cGRhdGVMaWtlc0NvdW50ID0gKCkgPT4ge1xuICBjb25zdCBjb3VudGVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1jb3VudCcpO1xuICBjb25zdCBjb3VudGVyc0FyciA9IFsuLi5jb3VudGVyRWxlbWVudHNdO1xuICBBUEkuaW52b2x2ZW1lbnQuZ2V0TGlrZXMoKVxuICAgIC50aGVuKChsaWtlc0FycikgPT4ge1xuICAgICAgbGlrZXNBcnIuZm9yRWFjaCgobGlrZUNvdW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpa2VDb3VudGVyID0gY291bnRlcnNBcnIuZmluZCgoY291bnRlcikgPT4gY291bnRlci5kYXRhc2V0LmlkID09PSBsaWtlQ291bnQuaXRlbV9pZCk7XG4gICAgICAgIGlmIChsaWtlQ291bnRlcikge1xuICAgICAgICAgIGxpa2VDb3VudGVyLnRleHRDb250ZW50ID0gYCR7bGlrZUNvdW50Lmxpa2VzfSBsaWtlc2A7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgQWRkTGlrZU51bWJlciA9IChsaWtlc1RleHQpID0+IHtcbiAgY29uc3QgaW5kZXhFbmQgPSBsaWtlc1RleHQuaW5kZXhPZignICcpICsgMTtcbiAgY29uc3QgbnVtVGV4dCA9IGxpa2VzVGV4dC5zdWJzdHJpbmcoMCwgaW5kZXhFbmQpO1xuICBjb25zdCBsaWtlc051bSA9IE51bWJlci5wYXJzZUludChudW1UZXh0LCAxMCk7XG4gIHJldHVybiBsaWtlc051bSArIDE7XG59O1xuXG5jb25zdCBzZXRMaWtlTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBsaWtlQnRuID0gZS50YXJnZXQ7XG4gICAgY29uc3QgbGlrZUNvdW50ZXIgPSBsaWtlQnRuLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAobGlrZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1saWtlJykpIHtcbiAgICAgIGxpa2VDb3VudGVyLnRleHRDb250ZW50ID0gYCR7QWRkTGlrZU51bWJlcihsaWtlQ291bnRlci50ZXh0Q29udGVudCl9IGxpa2VzYDtcbiAgICAgIEFQSS5pbnZvbHZlbWVudC5wb3N0TGlrZShsaWtlQ291bnRlci5kYXRhc2V0LmlkKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY291bnRDYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgbnVtT2ZDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykubGVuZ3RoO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtY291bnRlcicpLnRleHRDb250ZW50ID0gYCgke251bU9mQ2FyZHN9KWA7XG4gIHJldHVybiBudW1PZkNhcmRzO1xufTtcblxuY29uc3QgcmVuZGVyQ2FyZHNMaXN0ID0gKCkgPT4ge1xuICBBUEkucG9rZW1vbi5nZXRBbGxDYXJkcygpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNhcmRzQXJyID0gZGF0YS5kYXRhLnNsaWNlKDAsIDEyKTtcbiAgICAgIGNhcmRzQXJyLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2NhcmQuaW1hZ2VzLmxhcmdlfVwiIGFsdD1cIiR7Y2FyZC5uYW1lfVwiIGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLW5hbWVcIj4ke2NhcmQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4tbGlrZSBtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtaWQ9XCIke2NhcmQuaWR9XCIgY2xhc3M9XCJsaWtlLWNvdW50XCI+MCBsaWtlczwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtaWQ9XCIke2NhcmQuaWR9XCIgY2xhc3M9XCJidG4gYnRuLWNvbW1lbnRzXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1pZD1cIiR7Y2FyZC5pZH1cIiBjbGFzcz1cImJ0biBidG4tcmVzZXJ2YXRpb25zXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGNhcmRzV3JhcHBlci5pbm5lckhUTUwgKz0gbmV3Q2FyZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhcmRzQXJyO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY291bnRDYXJkcygpO1xuICAgICAgc2V0TGlrZUxpc3RlbmVyKCk7XG4gICAgICB1cGRhdGVMaWtlc0NvdW50KCk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBzZXRDb21tZW50c0xpc3RlbmVycygpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0UmVzZXJ2YXRpb25MaXN0ZW5lcnMoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IGNvdW50Q2FyZHMsIHJlbmRlckNhcmRzTGlzdCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IEFQSSBmcm9tICcuL0FQSS5qcyc7XG5cbmNvbnN0IHJlc2VydmF0aW9uUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25zLXBvcHVwJyk7XG5cbmNvbnN0IGdlbmVyYXRlUG9wdXBXaW5kb3cgPSAoKSA9PiB7XG4gIHJlc2VydmF0aW9uUG9wdXAuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZSBtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9idXR0b24+XG4gIFxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWltYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInBvcHVwLWltYWdlXCIgc3JjPVwiXCIgYWx0PVwiXCI+ICBcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaW5mb1wiPlxuICAgICAgICA8aDIgY2xhc3M9XCJwb3B1cC1uYW1lXCI+PC9oMj5cbiAgICAgICAgPGgzIGNsYXNzPVwicG9wdXAtdHlwZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXAtc3VwZXJ0eXBlXCI+PC9zcGFuPiAtIFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXAtc3VidHlwZVwiPjwvc3Bhbj5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8td3JhcHBlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXAtbnVtYmVyXCI+TnVtYmVyOiA8L3NwYW4+IC0gXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cC1yYXJpdHlcIj5SYXJpdHk6IDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz5QcmljZXMgZnJvbSBUQ0cgUGxheWVyPC9oMz5cbiAgICAgICAgPHVsIGNsYXNzPVwicHJpY2VzLWxpc3RcIj5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbi1kYXRhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicG9wdXAtY291bnRlciByZXNlcnZhdGlvbnMtY291bnRcIj5SZXNlcnZhdGlvbnM6IFg8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicmVzZXJ2YXRpb25zLWRhdGFcIj48L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbi1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyPkFkZCBhIHJlc2VydmF0aW9uPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwicmVzZXJ2YXRpb25zLWZpbGxcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIGNsYXNzPVwidXNlcm5hbWVcIiByZXF1aXJlZD48YnI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlLXN0YXJ0XCI+U3RhcnQgZGF0ZTo8L2xhYmVsPjxicj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlLXN0YXJ0XCIgbmFtZT1cImRhdGUtc3RhcnRcIiBtaW49XCIyMDIxLTgtMTMgcmVxdWlyZWQ+PGJyPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZS1lbmRcIj5EYXRlIGVuZDo8L2xhYmVsPjxicj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlLWVuZFwiIG5hbWU9XCJkYXRlLWVuZFwiIG1pbj1cIjIwMjEtOC0xNFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1yZXNlcnZhdGlvblwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG5cbmNvbnN0IGNvdW50UmVzZXJ2YXRpb25zID0gKCkgPT4ge1xuICBjb25zdCByZXNlcnZhdGlvbk51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNlcnZhdGlvbnMtZGF0YSBsaScpLmxlbmd0aDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9ucy1jb3VudCcpLnRleHRDb250ZW50ID0gYFJlc2VydmF0aW9uczogJHtyZXNlcnZhdGlvbk51bWJlcn1gO1xuICByZXR1cm4gcmVzZXJ2YXRpb25OdW1iZXI7XG59O1xuXG5jb25zdCBwb3B1bGF0ZUNhcmRJbmZvID0gKHBva2VDYXJkKSA9PiB7XG4gIGNvbnN0IHBva2Vtb25QcmljZXMgPSBwb2tlQ2FyZC50Y2dwbGF5ZXIucHJpY2VzO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaW1hZ2Utd3JhcHBlciBpbWcnKS5zcmMgPSBwb2tlQ2FyZC5pbWFnZXMubGFyZ2U7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1pbWFnZS13cmFwcGVyIGltZycpLmFsdCA9IHBva2VDYXJkLm5hbWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1uYW1lJykudGV4dENvbnRlbnQgPSBwb2tlQ2FyZC5uYW1lO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtc3VwZXJ0eXBlJykudGV4dENvbnRlbnQgPSBwb2tlQ2FyZC5zdXBlcnR5cGU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1zdWJ0eXBlJykudGV4dENvbnRlbnQgPSBgJHtwb2tlQ2FyZC5zdWJ0eXBlc1swXX1gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtbnVtYmVyJykudGV4dENvbnRlbnQgPSBwb2tlQ2FyZC5udW1iZXI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1yYXJpdHknKS50ZXh0Q29udGVudCA9IHBva2VDYXJkLnJhcml0eTtcbiAgY29uc3QgcHJpY2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZXMtbGlzdCcpO1xuICBwcmljZXNMaXN0LmlubmVySFRNTCA9IGBcbiAgICA8bGkgY2xhc3M9XCJwb3B1cC1wcmljZVwiPkxvdzogJHtwb2tlbW9uUHJpY2VzW09iamVjdC5rZXlzKHBva2Vtb25QcmljZXMpWzBdXS5sb3d9PC9saT5cbiAgICA8bGkgY2xhc3M9XCJwb3B1cC1wcmljZVwiPk1pZDogJHtwb2tlbW9uUHJpY2VzW09iamVjdC5rZXlzKHBva2Vtb25QcmljZXMpWzBdXS5taWR9PC9saT5cbiAgICA8bGkgY2xhc3M9XCJwb3B1cC1wcmljZVwiPkhpZ2ggJHtwb2tlbW9uUHJpY2VzW09iamVjdC5rZXlzKHBva2Vtb25QcmljZXMpWzBdXS5oaWdofTwvbGk+XG4gICAgPGxpIGNsYXNzPVwicG9wdXAtcHJpY2VcIj5NYXJrZXQ6ICR7cG9rZW1vblByaWNlc1tPYmplY3Qua2V5cyhwb2tlbW9uUHJpY2VzKVswXV0ubWFya2V0fTwvbGk+XG4gIGA7XG59O1xuXG5jb25zdCBwb3B1bGF0ZUNhcmRSZXNlcnZhdGlvbnMgPSAocmVzZXJ2YXRpb25zKSA9PiB7XG4gIGNvbnN0IHJlc2VydmF0aW9uc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25zLWRhdGEnKTtcbiAgcmVzZXJ2YXRpb25zTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgcmVzZXJ2YXRpb25zLmZvckVhY2goKHJlc2VydmF0aW9uKSA9PiB7XG4gICAgcmVzZXJ2YXRpb25zTGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgPGxpPiR7cmVzZXJ2YXRpb24uZGF0ZV9zdGFydH0gLSAke3Jlc2VydmF0aW9uLmRhdGVfZW5kfSBieSAke3Jlc2VydmF0aW9uLnVzZXJuYW1lfTwvbGk+XG4gICAgYDtcbiAgfSk7XG4gIGNvdW50UmVzZXJ2YXRpb25zKCk7XG59O1xuXG5jb25zdCBzZXRDbG9zZUJ0bkxpc3RlbmVyID0gKGNsb3NlQnRuKSA9PiB7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2VydmF0aW9uUG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcmVzZXJ2YXRpb25Qb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG59O1xuXG5jb25zdCBwb3N0UmVzZXJ2YXRpb24gPSBhc3luYyAoc3VibWl0QnRuLCBjYXJkSUQpID0+IHtcbiAgY29uc3QgbmV3UmVzZXJ2YXRpb24gPSB7XG4gICAgaXRlbV9pZDogY2FyZElELFxuICAgIHVzZXJuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKS52YWx1ZSxcbiAgICBkYXRlX3N0YXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1zdGFydCcpLnZhbHVlLFxuICAgIGRhdGVfZW5kOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1lbmQnKS52YWx1ZSxcbiAgfTtcbiAgYXdhaXQgQVBJLmludm9sdmVtZW50LnBvc3RSZXNlcnZhdGlvbihuZXdSZXNlcnZhdGlvbik7XG4gIHN1Ym1pdEJ0bi5wYXJlbnROb2RlLnJlc2V0KCk7XG4gIGNvbnN0IHJlc2VydmF0aW9ucyA9IGF3YWl0IEFQSS5pbnZvbHZlbWVudC5nZXRSZXNlcnZhdGlvbnMoY2FyZElEKTtcbiAgcG9wdWxhdGVDYXJkUmVzZXJ2YXRpb25zKHJlc2VydmF0aW9ucyk7XG59O1xuXG5jb25zdCBzZXRTdWJtaXRMaXN0ZW5lciA9IChzdWJtaXRCdG4sIGNhcmRJRCkgPT4ge1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwb3N0UmVzZXJ2YXRpb24oc3VibWl0QnRuLCBjYXJkSUQpO1xuICB9KTtcbn07XG5cbmNvbnN0IG9wZW5Qb3B1cCA9IChjYXJkSUQpID0+IHtcbiAgUHJvbWlzZS5hbGxTZXR0bGVkKFtcbiAgICBBUEkucG9rZW1vbi5nZXRDYXJkYnlJZChjYXJkSUQpLFxuICAgIEFQSS5pbnZvbHZlbWVudC5nZXRSZXNlcnZhdGlvbnMoY2FyZElEKSxcbiAgXSkudGhlbigodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vbkNhcmQgPSB2YWx1ZXNbMF0udmFsdWUuZGF0YVswXTtcbiAgICBnZW5lcmF0ZVBvcHVwV2luZG93KCk7XG4gICAgcG9wdWxhdGVDYXJkSW5mbyhwb2tlbW9uQ2FyZCk7XG4gICAgcmVzZXJ2YXRpb25Qb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBzZXRDbG9zZUJ0bkxpc3RlbmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UnKSk7XG4gICAgc2V0U3VibWl0TGlzdGVuZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1yZXNlcnZhdGlvbicpLCBjYXJkSUQpO1xuICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IHZhbHVlc1sxXS52YWx1ZTtcbiAgICBpZiAoISgnZXJyb3InIGluIHJlc2VydmF0aW9ucykpIHtcbiAgICAgIHBvcHVsYXRlQ2FyZFJlc2VydmF0aW9ucyhyZXNlcnZhdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzZXRSZXNlcnZhdGlvbkxpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXJ2YXRpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZXNlcnZhdGlvbnMnKTtcbiAgcmVzZXJ2YXRpb25CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG9wZW5Qb3B1cChidXR0b24uZGF0YXNldC5pZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY291bnRSZXNlcnZhdGlvbnMsIHNldFJlc2VydmF0aW9uTGlzdGVuZXJzIGFzIGRlZmF1bHQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHJlbmRlckNhcmRzTGlzdCBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi9pbWFnZXMvcG9rZWJhbGwtbG9nby5wbmcnO1xuXG5jb25zdCBsb2dvSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWl0ZW0nKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmxvZ28uc3JjID0gbG9nb0ltZztcbmxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuXG5sb2dvSXRlbS5hcHBlbmRDaGlsZChsb2dvKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIHJlbmRlckNhcmRzTGlzdCgpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==