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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(25)
	)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(27)
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
	__vue_options__.__file = "/Keith/git/zl/weex/weex-demo/src/components/HotIndustry.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4edcdc68"
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

/***/ 25:
/***/ (function(module, exports) {

	module.exports = {
	  "hot-industry-container": {
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
	  "industry-scroller": {
	    "width": 690,
	    "height": 300,
	    "marginTop": 15,
	    "marginLeft": 30,
	    "overflow": "hidden",
	    "backgroundColor": "rgba(0,0,0,0)"
	  },
	  "item-industry-container": {
	    "width": 240,
	    "height": 300,
	    "marginRight": 30,
	    "backgroundColor": "#ffffff",
	    "backgroundColor:active": "#eeeeee"
	  },
	  "industry-image-container": {
	    "width": 240,
	    "height": 180,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "industry-image": {
	    "width": 200,
	    "height": 150,
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#e5e5e5"
	  },
	  "industry-title": {
	    "lineHeight": 48,
	    "fontSize": 28,
	    "color": "#666666",
	    "height": 48,
	    "marginLeft": 20,
	    "textAlign": "left",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "wordWrap": "break-word"
	  },
	  "job-title": {
	    "lineHeight": 32,
	    "fontSize": 24,
	    "color": "#cccccc",
	    "marginLeft": 15,
	    "textAlign": "left",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "wordWrap": "break-word"
	  }
	}

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	      hotIndustry: [{
	        image: 'http://static.dei2.com/imgs/200*140.png',
	        title: '互联网',
	        jobs: [{
	          name: '产品经理'
	        }, {
	          name: '视觉设计师'
	        }],
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/200*140.png',
	        title: '快销品',
	        jobs: [{
	          name: '市场部专员'
	        }, {
	          name: '销售助理'
	        }],
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/200*140.png',
	        title: '金融',
	        jobs: [{
	          name: '银行柜员'
	        }, {
	          name: '综合业务专员'
	        }],
	        href: ''
	      }]
	    };
	  },

	  methods: {}
	};
	module.exports = exports['default'];

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["hot-industry-container"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.dataTitle || '热门行业'))]), _c('scroller', {
	    staticClass: ["industry-scroller"],
	    attrs: {
	      "scrollDirection": "horizontal"
	    }
	  }, _vm._l((_vm.hotIndustry), function(item, index) {
	    return _c('div', {
	      key: item,
	      staticClass: ["item-industry-container"]
	    }, [_c('div', {
	      staticClass: ["industry-image-container"]
	    }, [_c('image', {
	      staticClass: ["industry-image"],
	      attrs: {
	        "src": item.image,
	        "resize": "cover"
	      }
	    })]), _c('text', {
	      staticClass: ["industry-title"]
	    }, [_vm._v(_vm._s(item.title))]), _vm._l((item.jobs), function(job, idx) {
	      return _c('text', {
	        key: job,
	        staticClass: ["job-title"]
	      }, [_vm._v(" " + _vm._s(job.name))])
	    })], 2)
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });