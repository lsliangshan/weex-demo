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
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 33:
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

/***/ 34:
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

/***/ 35:
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

/***/ })

/******/ });