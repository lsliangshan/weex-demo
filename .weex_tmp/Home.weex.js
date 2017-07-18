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
	__vue_styles__.push(__webpack_require__(7)
	)

	/* script */
	__vue_exports__ = __webpack_require__(8)

	/* template */
	var __vue_template__ = __webpack_require__(36)
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
	__vue_options__.__file = "/Keith/git/zl/weex/weex-demo/src/Home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-678cceb5"
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
/* 7 */
/***/ (function(module, exports) {

	module.exports = {
	  "main-search": {
	    "width": 750,
	    "height": 100,
	    "backgroundColor": "rgba(0,0,0,0)",
	    "marginTop": -48
	  },
	  "main-search-fixed-true": {
	    "position": "sticky",
	    "top": 0,
	    "left": 0
	  },
	  "main-search-inner": {
	    "width": 600,
	    "height": 100,
	    "backgroundColor": "#ffffff",
	    "marginLeft": 75,
	    "border": "1px solid #ccc",
	    "boxShadow": "0 0 10px 5px #ccc",
	    "borderRadius": 3,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "search-icon-container": {
	    "width": 100,
	    "height": 100,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "search-icon": {
	    "width": 48,
	    "height": 48
	  },
	  "search": {
	    "placeholderColor": "#ccc",
	    "color": "#999999",
	    "width": 500,
	    "height": 96,
	    "float": "right",
	    "right": 0,
	    "fontSize": 28,
	    "lineHeight": 96
	  }
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Banner = __webpack_require__(9);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _TopMenu = __webpack_require__(13);

	var _TopMenu2 = _interopRequireDefault(_TopMenu);

	var _HotRecruitment = __webpack_require__(17);

	var _HotRecruitment2 = _interopRequireDefault(_HotRecruitment);

	var _HotIndustry = __webpack_require__(24);

	var _HotIndustry2 = _interopRequireDefault(_HotIndustry);

	var _HotSubject = __webpack_require__(28);

	var _HotSubject2 = _interopRequireDefault(_HotSubject);

	var _Feedback = __webpack_require__(32);

	var _Feedback2 = _interopRequireDefault(_Feedback);

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

	var animation = weex.requireModule('animation');
	var dom = weex.requireModule('dom');
	var modal = weex.requireModule('modal');
	var navigator = weex.requireModule('navigator');
	exports.default = {
	  data: function data() {
	    return {
	      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
	      target: 'World',
	      banner: {
	        images: [{ src: 'http://static.dei2.com/imgs/750*400.png' }, { src: 'http://static.dei2.com/imgs/750*400.png' }, { src: 'http://static.dei2.com/imgs/750*400.png' }, { src: 'http://static.dei2.com/imgs/750*400.png' }],
	        sliderStyle: {
	          width: '750px',
	          height: '400px',
	          left: '25px'
	        },
	        indicatorStyle: {
	          itemColor: '#ffffff',
	          itemSelectedColor: 'cyan',
	          itemSize: '20px',
	          bottom: '50px',
	          width: '750px'
	        }
	      },
	      fixSearch: false,
	      mainSearchStyle: {
	        width: 0,
	        height: 0,
	        left: 0,
	        top: 0,
	        bottom: 0,
	        right: 0
	      }
	    };
	  },

	  computed: {
	    state: function state() {
	      return this.$store.state;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    dom.getComponentRect(this.$refs.mainSearch, function (option) {
	      _this.mainSearchStyle = option.size;
	    });
	  },

	  methods: {
	    mainScroll: function mainScroll(evt) {
	      if (evt.contentOffset.y < -this.mainSearchStyle.top) {
	        this.fixSearch = true;
	        animation.transition(this.$refs.mainSearch, {
	          styles: {
	            backgroundColor: '#ffffff'
	          },
	          duration: 800, //ms
	          timingFunction: 'ease',
	          delay: 0 //ms
	        }, function () {});
	      } else {
	        this.fixSearch = false;
	      }
	    },
	    showAlert: function showAlert(text) {
	      modal.alert({
	        message: text,
	        duration: 0.3
	      }, function (value) {
	        console.log('alert callback', value);
	      });
	    },
	    redirectTo: function redirectTo(url) {
	      //        this.$router.push(url)
	      navigator.push({
	        url: '/#/profile',
	        animated: "true"
	      }, function (event) {});
	    }
	  },
	  components: {
	    Banner: _Banner2.default,
	    TopMenu: _TopMenu2.default,
	    HotRecruitment: _HotRecruitment2.default,
	    HotIndustry: _HotIndustry2.default,
	    HotSubject: _HotSubject2.default,
	    Feedback: _Feedback2.default
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(10)
	)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
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
	__vue_options__.__file = "/Keith/git/zl/weex/weex-demo/src/components/Banner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-057ba29f"
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


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = {
	  "slider": {
	    "position": "relative"
	  },
	  "image-item": {
	    "width": 750,
	    "height": 400,
	    "flex": 2
	  },
	  "indicator": {
	    "width": 750,
	    "height": 80,
	    "itemColor": "green",
	    "itemSelectedColor": "red",
	    "itemSize": 20,
	    "position": "absolute",
	    "bottom": 0
	  }
	}

/***/ }),
/* 11 */
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

	exports.default = {
	  props: ['dataImages', 'indicatorStyle', 'sliderStyle'],
	  data: function data() {
	    return {};
	  },

	  methods: {
	    getDefaultImage: function getDefaultImage(width, height, text, color, bgColor) {
	      return 'http://iph.href.lu/' + width + '*' + height + (!!text ? 'text=' + text : '') + (!!color ? 'fg=' + color.substring(1) : '') + (!!bgColor ? 'bg=' + bgColor.substring(1) : '');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["banner-container"]
	  }, [_c('slider', {
	    staticClass: ["slider"]
	  }, [_vm._l((_vm.dataImages), function(img, index) {
	    return _c('div', {
	      key: img,
	      staticClass: ["frame"]
	    }, [_c('image', {
	      staticClass: ["image-item"],
	      style: _vm.sliderStyle,
	      attrs: {
	        "src": img.src,
	        "resize": "cover"
	      }
	    })])
	  }), _c('indicator', {
	    staticClass: ["indicator"],
	    style: _vm.indicatorStyle
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 13 */
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


/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
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

/***/ }),
/* 17 */
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


/***/ }),
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

/***/ }),
/* 24 */
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


/***/ }),
/* 25 */
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
/* 26 */
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
/* 27 */
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

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(29)
	)

	/* script */
	__vue_exports__ = __webpack_require__(30)

	/* template */
	var __vue_template__ = __webpack_require__(31)
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
	__vue_options__.__file = "/Keith/git/zl/weex/weex-demo/src/components/HotSubject.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4c02e492"
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


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = {
	  "hot-subject-container": {
	    "marginTop": 30,
	    "width": 750,
	    "minHeight": 100,
	    "backgroundColor": "#ffffff",
	    "padding": 0
	  },
	  "hot-subject-header": {
	    "width": 500,
	    "height": 64,
	    "marginLeft": 125,
	    "marginTop": 30,
	    "textAlign": "center",
	    "backgroundColor": "rgba(0,0,0,0)",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "dividing": {
	    "position": "absolute",
	    "width": 500,
	    "height": 6,
	    "backgroundColor": "#888888",
	    "top": 30
	  },
	  "title": {
	    "color": "#333333",
	    "fontSize": 32,
	    "lineHeight": 64,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "backgroundColor": "#ffffff"
	  },
	  "item-subject-container": {
	    "marginTop": 30,
	    "width": 690,
	    "marginLeft": 30,
	    "minHeight": 100,
	    "overflow": "hidden"
	  },
	  "item-subject-row": {
	    "flexDirection": "row",
	    "marginBottom": 30
	  },
	  "item-subject": {
	    "width": 172,
	    "height": 240,
	    "backgroundColor:active": "#e5e5e5"
	  },
	  "item-subject-image-container": {
	    "width": 172,
	    "height": 172,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "item-subject-image": {
	    "width": 88,
	    "height": 88
	  },
	  "item-subject-title": {
	    "color": "#333333",
	    "fontSize": 28,
	    "lineHeight": 32,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 30 */
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

	var modal = weex.requireModule('modal');
	exports.default = {
	  props: ['dataTitle'],
	  data: function data() {
	    return {
	      hotSubject: [{
	        image: 'http://static.dei2.com/imgs/icon-engineering.png',
	        title: '工学',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/icon-science.png',
	        title: '理学',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/icon-economics.png',
	        title: '经济学',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/icon-agronomy.png',
	        title: '农学',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/icon-management.png',
	        title: '管理学',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/icon-medical.png',
	        title: '医学',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/icon-literature.png',
	        title: '文学',
	        href: ''
	      }, {
	        image: 'http://static.dei2.com/imgs/icon-subjects.png',
	        title: '其他',
	        href: ''
	      }]
	    };
	  },

	  computed: {
	    formatHotSubject: function formatHotSubject() {
	      var num = 4;
	      var _hotSubject = this.hotSubject;
	      var out = [];
	      var i = 0;
	      var tempSubject = void 0;
	      var tempSubjectArr = [];
	      for (i; i < _hotSubject.length; i++) {
	        tempSubject = _hotSubject[i];

	        if (tempSubjectArr.length + 1 < num) {
	          tempSubjectArr.push(tempSubject);
	        } else if (tempSubjectArr.length + 1 === num) {
	          tempSubjectArr.push(tempSubject);
	          out.push(tempSubjectArr);
	          tempSubjectArr = [];
	        } else {}
	      }
	      if (tempSubjectArr.length > 0) {
	        out.push(tempSubjectArr);
	        tempSubjectArr = [];
	      }
	      return out;
	    }
	  },
	  methods: {
	    showAlert: function showAlert(text) {
	      modal.alert({
	        message: text,
	        duration: 0.3
	      }, function (value) {
	        console.log('alert callback', value);
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["hot-subject-container"]
	  }, [_c('div', {
	    staticClass: ["hot-subject-header"]
	  }, [_c('div', {
	    staticClass: ["dividing"]
	  }), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.dataTitle || '热门学科'))])]), _c('div', {
	    staticClass: ["item-subject-container"]
	  }, _vm._l((_vm.formatHotSubject), function(subjects, index) {
	    return _c('div', {
	      key: subjects,
	      staticClass: ["item-subject-row"]
	    }, _vm._l((subjects), function(subject, idx) {
	      return _c('div', {
	        key: subject,
	        staticClass: ["item-subject"]
	      }, [_c('div', {
	        staticClass: ["item-subject-image-container"]
	      }, [_c('image', {
	        staticClass: ["item-subject-image"],
	        attrs: {
	          "src": subject.image,
	          "resize": "cover"
	        }
	      })]), _c('text', {
	        staticClass: ["item-subject-title"]
	      }, [_vm._v(_vm._s(subject.title))])])
	    }))
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(33)
	)

	/* script */
	__vue_exports__ = __webpack_require__(34)

	/* template */
	var __vue_template__ = __webpack_require__(35)
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
	__vue_options__.__file = "/Keith/git/zl/weex/weex-demo/src/components/Feedback.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-44fdefb8"
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


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = {
	  "feedback-container": {
	    "marginTop": 30,
	    "width": 750,
	    "minHeight": 100,
	    "backgroundColor": "#ffffff",
	    "padding": 0
	  },
	  "feedback-header": {
	    "width": 500,
	    "height": 64,
	    "marginLeft": 125,
	    "marginTop": 30,
	    "textAlign": "center",
	    "backgroundColor": "rgba(0,0,0,0)",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "dividing": {
	    "position": "absolute",
	    "width": 500,
	    "height": 6,
	    "backgroundColor": "#888888",
	    "top": 30
	  },
	  "title": {
	    "color": "#333333",
	    "fontSize": 32,
	    "lineHeight": 64,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "backgroundColor": "#ffffff"
	  },
	  "feedback-users-container": {
	    "width": 690,
	    "marginLeft": 30,
	    "marginTop": 30,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#cccccc"
	  },
	  "feedback-users-scroller": {
	    "width": 690,
	    "height": 240
	  },
	  "item-feedback-users": {
	    "width": 138,
	    "height": 240
	  },
	  "user-image-container": {
	    "width": 138,
	    "height": 138,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "user-image": {
	    "width": 108,
	    "height": 108,
	    "borderRadius": 54
	  },
	  "user-name": {
	    "width": 138,
	    "height": 64,
	    "lineHeight": 48,
	    "fontSize": 28,
	    "color": "#888888",
	    "textAlign": "center"
	  },
	  "feedback-message-container": {
	    "width": 750
	  },
	  "item-message": {
	    "width": 750,
	    "backgroundColor:active": "#e5e5e5"
	  },
	  "item-message-inner": {
	    "width": 690,
	    "marginLeft": 30,
	    "paddingTop": 30,
	    "paddingBottom": 30,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#f5f5f5"
	  },
	  "message-image-container": {
	    "width": 128,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "message-image": {
	    "width": 96,
	    "height": 96,
	    "borderRadius": 50
	  },
	  "message-container": {
	    "width": 476
	  },
	  "message-title": {
	    "width": 476,
	    "color": "#666666",
	    "fontSize": 28,
	    "lineHeight": 48,
	    "textOverflow": "ellipsis",
	    "wordWrap": "break-word",
	    "lines": 1
	  },
	  "message-content": {
	    "width": 476,
	    "color": "#cccccc",
	    "fontSize": 24,
	    "lineHeight": 32,
	    "textOverflow": "ellipsis",
	    "wordWrap": "break-word",
	    "lines": 4
	  },
	  "message-detail-icon": {
	    "width": 64,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "message-detail": {
	    "width": 64,
	    "height": 64
	  }
	}

/***/ }),
/* 34 */
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

	var modal = weex.requireModule('modal');
	exports.default = {
	  props: ['dataTitle'],
	  data: function data() {
	    return {
	      feedback: {
	        users: [{
	          image: 'http://static.dei2.com/imgs/default_female.png',
	          name: '吴凡',
	          href: ''
	        }, {
	          image: 'http://static.dei2.com/imgs/default_male.png',
	          name: '张三',
	          href: ''
	        }, {
	          image: 'http://static.dei2.com/imgs/default_female.png',
	          name: '李四',
	          href: ''
	        }, {
	          image: 'http://static.dei2.com/imgs/default_male.png',
	          name: '王五',
	          href: ''
	        }, {
	          image: 'http://static.dei2.com/imgs/default_male.png',
	          name: '赵六',
	          href: ''
	        }, {
	          image: 'http://static.dei2.com/imgs/default_female.png',
	          name: '李四',
	          href: ''
	        }, {
	          image: 'http://static.dei2.com/imgs/default_male.png',
	          name: '王五',
	          href: ''
	        }, {
	          image: 'http://static.dei2.com/imgs/default_male.png',
	          name: '赵六',
	          href: ''
	        }],
	        messages: [{
	          image: 'http://static.dei2.com/imgs/default_female.png',
	          name: '张三',
	          title: '职场新人',
	          message: '到底应该做喜欢的工作，还是擅长的工作'
	        }, {
	          image: 'http://static.dei2.com/imgs/default_male.png',
	          name: '李四',
	          title: '企业对你的期望',
	          message: '我希望年轻的你，可以都会我很多东西'
	        }, {
	          image: 'http://static.dei2.com/imgs/default_female.png',
	          name: '王大锤',
	          title: '高薪没有你想象的那么难',
	          message: '我很努力，所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪所以毕业就拿30万年薪'
	        }]
	      }
	    };
	  },

	  computed: {
	    formatHotSubject: function formatHotSubject() {
	      var num = 4;
	      var _hotSubject = this.hotSubject;
	      var out = [];
	      var i = 0;
	      var tempSubject = void 0;
	      var tempSubjectArr = [];
	      for (i; i < _hotSubject.length; i++) {
	        tempSubject = _hotSubject[i];

	        if (tempSubjectArr.length + 1 < num) {
	          tempSubjectArr.push(tempSubject);
	        } else if (tempSubjectArr.length + 1 === num) {
	          tempSubjectArr.push(tempSubject);
	          out.push(tempSubjectArr);
	          tempSubjectArr = [];
	        } else {}
	      }
	      if (tempSubjectArr.length > 0) {
	        out.push(tempSubjectArr);
	        tempSubjectArr = [];
	      }
	      return out;
	    }
	  },
	  methods: {
	    showAlert: function showAlert(text) {
	      modal.alert({
	        message: text,
	        duration: 0.3
	      }, function (value) {
	        console.log('alert callback', value);
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["feedback-container"]
	  }, [_c('div', {
	    staticClass: ["feedback-header"]
	  }, [_c('div', {
	    staticClass: ["dividing"]
	  }), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.dataTitle || '学长对你说'))])]), _c('div', {
	    staticClass: ["feedback-users-container"]
	  }, [_c('scroller', {
	    staticClass: ["feedback-users-scroller"],
	    attrs: {
	      "scrollDirection": "horizontal"
	    }
	  }, _vm._l((_vm.feedback.users), function(user, index) {
	    return _c('div', {
	      key: user,
	      staticClass: ["item-feedback-users"]
	    }, [_c('div', {
	      staticClass: ["user-image-container"]
	    }, [_c('image', {
	      staticClass: ["user-image"],
	      attrs: {
	        "src": user.image,
	        "resize": "cover"
	      }
	    })]), _c('text', {
	      staticClass: ["user-name"]
	    }, [_vm._v(_vm._s(user.name))])])
	  }))]), _c('div', {
	    staticClass: ["feedback-message-container"]
	  }, _vm._l((_vm.feedback.messages), function(item, index) {
	    return _c('div', {
	      key: item,
	      staticClass: ["item-message"]
	    }, [_c('div', {
	      staticClass: ["item-message-inner"]
	    }, [_c('div', {
	      staticClass: ["message-image-container"]
	    }, [_c('image', {
	      staticClass: ["message-image"],
	      attrs: {
	        "src": item.image,
	        "resize": "cover"
	      }
	    })]), _c('div', {
	      staticClass: ["message-container"]
	    }, [_c('text', {
	      staticClass: ["message-title"]
	    }, [_vm._v(_vm._s(item.title))]), _c('text', {
	      staticClass: ["message-content"]
	    }, [_vm._v(_vm._s(item.name) + "：" + _vm._s(item.message))])]), _vm._m(0, true)])])
	  }))])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["message-detail-icon"]
	  }, [_c('image', {
	    staticClass: ["message-detail"],
	    attrs: {
	      "src": "../assets/images/icon-more.png"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["home"]
	  }, [_c('scroller', {
	    staticClass: ["home-scroller"],
	    attrs: {
	      "offsetAccuracy": "10"
	    },
	    on: {
	      "scroll": _vm.mainScroll
	    }
	  }, [_c('transition', {
	    attrs: {
	      "name": "banner-transition",
	      "enterActiveClass": "animated fadeIn",
	      "leaveActiveClass": "animated fadeOut"
	    }
	  }, [(_vm.state.banner.shown) ? _c('banner', {
	    attrs: {
	      "dataImages": _vm.banner.images,
	      "indicatorStyle": _vm.banner.indicatorStyle,
	      "sliderStyle": _vm.banner.sliderStyle
	    }
	  }) : _vm._e()], 1), _c('div', {
	    ref: "mainSearch",
	    staticClass: ["main-search"],
	    class: ['main-search-fixed-' + _vm.fixSearch]
	  }, [_vm._m(0)]), _c('transition', {
	    attrs: {
	      "name": "top-menu-transition",
	      "enterActiveClass": "animated fadeIn",
	      "leaveActiveClass": "animated fadeOut"
	    }
	  }, [(_vm.state.topMenu.shown) ? _c('top-menu') : _vm._e()], 1), _c('transition', {
	    attrs: {
	      "name": "hot-recruitment-transition",
	      "enterActiveClass": "animated fadeIn",
	      "leaveActiveClass": "animated fadeOut"
	    }
	  }, [(_vm.state.hotRecruitment.shown) ? _c('hot-recruitment', {
	    attrs: {
	      "dataTitle": '名企热招'
	    }
	  }) : _vm._e()], 1), _c('transition', {
	    attrs: {
	      "name": "hot-industry-transition",
	      "enterActiveClass": "animated fadeIn",
	      "leaveActiveClass": "animated fadeOut"
	    }
	  }, [(_vm.state.hotIndustry.shown) ? _c('hot-industry', {
	    attrs: {
	      "dataTitle": '热门行业'
	    }
	  }) : _vm._e()], 1), _c('transition', {
	    attrs: {
	      "name": "hot-subject-transition",
	      "enterActiveClass": "animated fadeIn",
	      "leaveActiveClass": "animated fadeOut"
	    }
	  }, [(_vm.state.hotSubject.shown) ? _c('hot-subject', {
	    attrs: {
	      "dataTitle": '热门学科'
	    }
	  }) : _vm._e()], 1), _c('transition', {
	    attrs: {
	      "name": "feedback-transition",
	      "enterActiveClass": "animated fadeIn",
	      "leaveActiveClass": "animated fadeOut"
	    }
	  }, [(_vm.state.feedback.shown) ? _c('feedback', {
	    attrs: {
	      "dataTitle": '学长对你说'
	    }
	  }) : _vm._e()], 1)], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["main-search-inner"]
	  }, [_c('div', {
	    staticClass: ["search-icon-container"]
	  }, [_c('image', {
	    staticClass: ["search-icon"],
	    attrs: {
	      "src": "../assets/images/icon-search.png"
	    }
	  })]), _c('input', {
	    staticClass: ["search"],
	    attrs: {
	      "type": "text",
	      "placeholder": "搜索你感兴趣的职位",
	      "returnKeyType": "search"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);