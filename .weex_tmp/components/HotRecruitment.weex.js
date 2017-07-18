// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(18)
	)

	/* script */
	__vue_exports__ = __webpack_require__(19)

	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Keith/git/zl/weex/weex-demo/src/components/HotRecruitment.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6322e3fc"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	module.exports = {
	  "hot-recruitment-container": {
	    "marginTop": 30,
	    "width": 750,
	    "minHeight": 100,
	    "backgroundColor": "rgba(0,0,0,0)",
	    "padding": 0
	  },
	  "title": {
	    "color": "#333333",
	    "fontSize": 32,
	    "lineHeight": 64,
	    "textAlign": "left",
	    "marginLeft": 30
	  },
	  "hot-recruitment-items": {
	    "width": 750,
	    "minHeight": 100
	  },
	  "item-hot-recruitment-row": {
	    "marginTop": 15,
	    "flexDirection": "row"
	  },
	  "item-hot-recruitment": {
	    "marginLeft": 15
	  },
	  "item-hot-recruitment-0": {
	    "marginLeft": 0
	  }
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(20);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: ['dataTitle'],
	  data: function data() {
	    return {
	      hotRecruitment: [{
	        image: 'http://static.dei2.com/imgs/500*250.png',
	        col: 2,
	        height: 250,
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/250*250.png',
	        col: 1,
	        height: 250,
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/250*200.png',
	        col: 1,
	        height: 200,
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/250*200.png',
	        col: 1,
	        height: 200,
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/250*200.png',
	        col: 1,
	        height: 200,
	        href: ''
	      }]
	    };
	  },

	  computed: {
	    formatRecruitment: function formatRecruitment() {
	      var out = [];
	      var _hotRecruitment = this.hotRecruitment;
	      var i = 0;
	      var tempCol = 0;
	      var tempRecruitment = void 0;
	      var tempArr = [];
	      for (i; i < _hotRecruitment.length; i++) {
	        tempRecruitment = _hotRecruitment[i];
	        if (tempCol + Number(tempRecruitment.col) < 3) {
	          tempCol += Number(tempRecruitment.col);
	          tempArr.push(tempRecruitment);
	        } else if (tempCol + Number(tempRecruitment.col) === 3) {
	          tempArr.push(tempRecruitment);
	          out.push(JSON.parse((0, _stringify2.default)(tempArr)));
	          tempArr = [];
	          tempCol = 0;
	        } else {
	          out.push(JSON.parse((0, _stringify2.default)(tempArr)));
	          tempArr = [tempRecruitment];
	          tempCol = Number(tempRecruitment.col);
	        }
	      }
	      if (tempCol !== 0 || tempArr.length !== 0) {
	        out.push(JSON.parse((0, _stringify2.default)(tempArr)));
	        tempArr = [];
	        tempCol = 0;
	      }
	      return out;
	    }
	  },
	  methods: {
	    getWidth: function getWidth(type) {
	      var _width = 0;
	      switch (Number(type)) {
	        case 1:
	          _width = 240;
	          break;
	        case 2:
	          _width = 495;
	          break;
	        case 3:
	          _width = 750;
	          break;
	        default:
	          break;
	      }
	      return _width;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(22)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["hot-recruitment-container"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.dataTitle || '名企热招'))]), _c('div', {
	    staticClass: ["hot-recruitment-items"]
	  }, _vm._l((_vm.formatRecruitment), function(items, index) {
	    return _c('div', {
	      key: items,
	      staticClass: ["item-hot-recruitment-row"]
	    }, _vm._l((items), function(item, idx) {
	      return _c('div', {
	        key: items,
	        staticClass: ["item-hot-recruitment"],
	        class: ['item-hot-recruitment-' + idx]
	      }, [_c('div', {
	        staticClass: ["image-container"]
	      }, [_c('image', {
	        style: {
	          'height': item.height + 'px',
	          'width': _vm.getWidth(item.col) + 'px'
	        },
	        attrs: {
	          "src": item.image,
	          "resize": "cover"
	        }
	      })])])
	    }))
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);