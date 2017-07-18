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
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 29:
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

/***/ 30:
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

/***/ 31:
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

/***/ })

/******/ });