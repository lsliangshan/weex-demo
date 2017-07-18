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

	'use strict';

	var App = __webpack_require__(48);
	App.el = '#root';
	new Vue(App);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(49)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(51),
	  /* template */
	  __webpack_require__(52),
	  /* scopeId */
	  "data-v-12f8da56",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Keith/git/zl/weex/weex-demo/src/components/Feedback.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Feedback.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-12f8da56", Component.options)
	  } else {
	    hotAPI.reload("data-v-12f8da56", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("92337742", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-12f8da56&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Feedback.vue", function() {
	     var newContent = require("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-12f8da56&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Feedback.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.feedback-container[data-v-12f8da56] {\n  margin-top: 30px;\n  width: 750px;\n  min-height: 100px;\n  background-color: #ffffff;\n  padding: 0;\n}\n.feedback-header[data-v-12f8da56] {\n  width: 500px;\n  height: 64px;\n  margin-left: 125px;\n  margin-top: 30px;\n  text-align: center;\n  /*position: relative;*/\n  background-color: transparent;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.dividing[data-v-12f8da56] {\n  position: absolute;\n  width: 500px;\n  height: 6px;\n  background-color: #888;\n  top: 30px;\n}\n.title[data-v-12f8da56] {\n  color: #333;\n  font-size: 32px;\n  line-height: 64px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #fff;\n}\n.feedback-users-container[data-v-12f8da56] {\n  width: 690px;\n  margin-left: 30px;\n  margin-top: 30px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #ccc;\n}\n.feedback-users-scroller[data-v-12f8da56] {\n  width: 690px;\n  height: 240px;\n}\n.item-feedback-users[data-v-12f8da56] {\n  width: 138px;\n  height: 240px;\n}\n.user-image-container[data-v-12f8da56] {\n  width: 138px;\n  height: 138px;\n  align-items: center;\n  justify-content: center;\n}\n.user-image[data-v-12f8da56] {\n  width: 108px;\n  height: 108px;\n  border-radius: 54px;\n}\n.user-name[data-v-12f8da56] {\n  width: 138px;\n  height: 64px;\n  line-height: 48px;\n  font-size: 28px;\n  color: #888;\n  text-align: center;\n}\n.feedback-message-container[data-v-12f8da56] {\n  width: 750px;\n  /*height: 200px;*/\n}\n.item-message[data-v-12f8da56] {\n  width: 750px;\n  /*min-height: 200px;*/\n  /*padding-left: 30px;*/\n}\n.item-message[data-v-12f8da56]:active {\n  background-color: #e5e5e5;\n}\n.item-message-inner[data-v-12f8da56] {\n  width: 690px;\n  margin-left: 30px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #f5f5f5;\n}\n.message-image-container[data-v-12f8da56] {\n  width: 128px;\n  /*height: 200px;*/\n  align-items: center;\n  justify-content: center;\n}\n.message-image[data-v-12f8da56] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n}\n.message-container[data-v-12f8da56] {\n  width: 476px;\n}\n.message-title[data-v-12f8da56] {\n  width: 476px;\n  color: #666;\n  font-size: 28px;\n  line-height: 48px;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  lines: 1;\n}\n.message-content[data-v-12f8da56] {\n  width: 476px;\n  color: #ccc;\n  font-size: 24px;\n  line-height: 32px;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  lines: 4;\n}\n.message-detail-icon[data-v-12f8da56] {\n  width: 64px;\n  /*height: 200px;*/\n  align-items: center;\n  justify-content: center;\n}\n.message-detail[data-v-12f8da56] {\n  width: 64px;\n  height: 64px;\n}\n", ""]);

	// exports


/***/ }),

/***/ 51:
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "feedback-container"
	  }, [_c('div', {
	    staticClass: "feedback-header"
	  }, [_c('div', {
	    staticClass: "dividing"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.dataTitle || '学长对你说'))])]), _vm._v(" "), _c('div', {
	    staticClass: "feedback-users-container"
	  }, [_c('scroller', {
	    staticClass: "feedback-users-scroller",
	    attrs: {
	      "scroll-direction": "horizontal"
	    }
	  }, _vm._l((_vm.feedback.users), function(user, index) {
	    return _c('div', {
	      key: user,
	      staticClass: "item-feedback-users"
	    }, [_c('div', {
	      staticClass: "user-image-container"
	    }, [_c('image', {
	      staticClass: "user-image",
	      attrs: {
	        "src": user.image,
	        "resize": "cover"
	      }
	    })]), _vm._v(" "), _c('text', {
	      staticClass: "user-name"
	    }, [_vm._v(_vm._s(user.name))])])
	  }))], 1), _vm._v(" "), _c('div', {
	    staticClass: "feedback-message-container"
	  }, _vm._l((_vm.feedback.messages), function(item, index) {
	    return _c('div', {
	      key: item,
	      staticClass: "item-message"
	    }, [_c('div', {
	      staticClass: "item-message-inner"
	    }, [_c('div', {
	      staticClass: "message-image-container"
	    }, [_c('image', {
	      staticClass: "message-image",
	      attrs: {
	        "src": item.image,
	        "resize": "cover"
	      }
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "message-container"
	    }, [_c('text', {
	      staticClass: "message-title"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('text', {
	      staticClass: "message-content"
	    }, [_vm._v(_vm._s(item.name) + "：" + _vm._s(item.message))])]), _vm._v(" "), _c('div', {
	      staticClass: "message-detail-icon"
	    }, [_c('image', {
	      staticClass: "message-detail",
	      attrs: {
	        "src": "../assets/images/icon-more.png"
	      }
	    })])])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-12f8da56", module.exports)
	  }
	}

/***/ })

/******/ });