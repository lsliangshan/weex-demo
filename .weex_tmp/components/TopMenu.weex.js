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
	__vue_styles__.push(__webpack_require__(14)
	)

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(16)
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
	__vue_options__.__file = "/Keith/git/zl/weex/weex-demo/src/components/TopMenu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3f87f571"
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

/***/ 14:
/***/ (function(module, exports) {

	module.exports = {
	  "top-menu-container": {
	    "marginTop": 30,
	    "width": 750,
	    "minHeight": 100,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "padding": 0
	  },
	  "top": {
	    "width": 690,
	    "flexDirection": "row",
	    "overflow": "hidden",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#cccccc"
	  },
	  "top-scroller": {
	    "width": 690,
	    "height": 236
	  },
	  "item-menu": {
	    "width": 172,
	    "backgroundColor:active": "#e5e5e5"
	  },
	  "menu-image-container": {
	    "width": 172,
	    "height": 172,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "menu-image": {
	    "width": 128,
	    "height": 128,
	    "borderRadius": 64
	  },
	  "menu-title": {
	    "width": 172,
	    "height": 64,
	    "fontSize": 28,
	    "color": "#888888",
	    "textAlign": "center"
	  },
	  "bottom": {
	    "width": 750
	  },
	  "item-news": {
	    "width": 750,
	    "height": 200,
	    "paddingLeft": 30,
	    "backgroundColor:active": "#e5e5e5"
	  },
	  "item-news-inner": {
	    "width": 690,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#f5f5f5"
	  },
	  "news-image-container": {
	    "width": 128,
	    "height": 200,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "news-image": {
	    "width": 128,
	    "height": 128
	  },
	  "news-title": {
	    "width": 476,
	    "color": "#999999",
	    "fontSize": 28,
	    "textOverflow": "ellipsis",
	    "wordWrap": "break-word",
	    "lines": 1
	  },
	  "news-detail-icon": {
	    "width": 64,
	    "height": 200,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "news-detail": {
	    "width": 64,
	    "height": 64
	  }
	}

/***/ }),

/***/ 15:
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
	  data: function data() {
	    return {
	      topMenus: [{
	        image: 'http://static.dei2.com/imgs/128*128.png',
	        title: '实习招聘',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/128*128.png',
	        title: '求职干货',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/128*128.png',
	        title: '宣讲会',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/128*128.png',
	        title: '个人中心',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/128*128.png',
	        title: '实习招聘2',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/128*128.png',
	        title: '求职干货2',
	        href: ''
	      }],
	      news: [{
	        image: 'http://static.dei2.com/imgs/128*128.png',
	        title: '来智联找工作，实现人生巅峰妥妥哒~',
	        href: ''
	      }]
	    };
	  },

	  methods: {
	    getDefaultImage: function getDefaultImage(width, height, text, color, bgColor) {
	      return 'http://iph.href.lu/' + width + '*' + height + (!!text ? 'text=' + text : '') + (!!color ? 'fg=' + color.substring(1) : '') + (!!bgColor ? 'bg=' + bgColor.substring(1) : '');
	    },
	    redirectTo: function redirectTo(url) {
	      this.$parent.redirectTo(url);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["top-menu-container"]
	  }, [_c('div', {
	    staticClass: ["top"]
	  }, [_c('scroller', {
	    staticClass: ["top-scroller"],
	    attrs: {
	      "scrollDirection": "horizontal"
	    }
	  }, _vm._l((_vm.topMenus), function(menu, index) {
	    return _c('div', {
	      key: menu,
	      staticClass: ["item-menu"],
	      on: {
	        "click": function($event) {
	          _vm.redirectTo('profile')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["menu-image-container"]
	    }, [_c('image', {
	      staticClass: ["menu-image"],
	      attrs: {
	        "resize": "cover",
	        "src": menu.image
	      }
	    })]), _c('text', {
	      staticClass: ["menu-title"],
	      attrs: {
	        "lines": "1"
	      }
	    }, [_vm._v(_vm._s(menu.title))])])
	  }))]), _c('div', {
	    staticClass: ["bottom"]
	  }, _vm._l((_vm.news), function(item, index) {
	    return _c('div', {
	      key: item,
	      staticClass: ["item-news"]
	    }, [_c('div', {
	      staticClass: ["item-news-inner"]
	    }, [_c('div', {
	      staticClass: ["news-image-container"]
	    }, [_c('image', {
	      staticClass: ["news-image"],
	      attrs: {
	        "src": item.image,
	        "resize": "cover"
	      }
	    })]), _c('text', {
	      staticClass: ["news-title"]
	    }, [_vm._v(_vm._s(item.title))]), _vm._m(0, true)])])
	  }))])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["news-detail-icon"]
	  }, [_c('image', {
	    staticClass: ["news-detail"],
	    attrs: {
	      "src": "../assets/images/icon-more.png"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });