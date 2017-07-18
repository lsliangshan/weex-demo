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

	'use strict';

	var App = __webpack_require__(25);
	App.el = '#root';
	new Vue(App);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(26)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(28),
	  /* template */
	  __webpack_require__(29),
	  /* scopeId */
	  "data-v-6d3a0a98",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Keith/git/zl/weex/weex-demo/src/components/TopMenu.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] TopMenu.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6d3a0a98", Component.options)
	  } else {
	    hotAPI.reload("data-v-6d3a0a98", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("0f0a1637", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6d3a0a98&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TopMenu.vue", function() {
	     var newContent = require("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6d3a0a98&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TopMenu.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.top-menu-container[data-v-6d3a0a98] {\n  margin-top: 30px;\n  width: 750px;\n  min-height: 100px;\n  background-color: #ffffff;\n  align-items: center;\n  padding: 0;\n}\n.top[data-v-6d3a0a98] {\n  width: 690px;\n  /*height: 300px;*/\n  flex-direction: row;\n  overflow: hidden;\n  /*justify-content: space-around;*/\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #ccc;\n}\n.top-scroller[data-v-6d3a0a98] {\n  width: 690px;\n  height: 236px;\n}\n.item-menu[data-v-6d3a0a98] {\n  width: 172px;\n  /*height: 300px;*/\n  /*background-color: cyan;*/\n}\n.item-menu[data-v-6d3a0a98]:active {\n  background-color: #e5e5e5;\n}\n.menu-image-container[data-v-6d3a0a98] {\n  width: 172px;\n  height: 172px;\n  align-items: center;\n  justify-content: center;\n}\n.menu-image[data-v-6d3a0a98] {\n  width: 128px;\n  height: 128px;\n  border-radius: 64px;\n}\n.menu-title[data-v-6d3a0a98] {\n  width: 172px;\n  height: 64px;\n  /*line-height: 64px;*/\n  font-size: 28px;\n  color: #888;\n  text-align: center;\n}\n.bottom[data-v-6d3a0a98] {\n  width: 750px;\n  /*height: 200px;*/\n}\n.item-news[data-v-6d3a0a98] {\n  width: 750px;\n  height: 200px;\n  padding-left: 30px;\n}\n.item-news[data-v-6d3a0a98]:active {\n  background-color: #e5e5e5;\n}\n.item-news-inner[data-v-6d3a0a98] {\n  width: 690px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #f5f5f5;\n}\n.news-image-container[data-v-6d3a0a98] {\n  width: 128px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n.news-image[data-v-6d3a0a98] {\n  width: 128px;\n  height: 128px;\n}\n.news-title[data-v-6d3a0a98] {\n  width: 476px;\n  color: #999;\n  font-size: 28px;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  lines: 1;\n}\n.news-detail-icon[data-v-6d3a0a98] {\n  width: 64px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n.news-detail[data-v-6d3a0a98] {\n  width: 64px;\n  height: 64px;\n}\n", ""]);

	// exports


/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "top-menu-container"
	  }, [_c('div', {
	    staticClass: "top"
	  }, [_c('scroller', {
	    staticClass: "top-scroller",
	    attrs: {
	      "scroll-direction": "horizontal"
	    }
	  }, _vm._l((_vm.topMenus), function(menu, index) {
	    return _c('div', {
	      key: menu,
	      staticClass: "item-menu",
	      on: {
	        "click": function($event) {
	          _vm.redirectTo('profile')
	        }
	      }
	    }, [_c('div', {
	      staticClass: "menu-image-container"
	    }, [_c('image', {
	      staticClass: "menu-image",
	      attrs: {
	        "resize": "cover",
	        "src": menu.image
	      }
	    })]), _vm._v(" "), _c('text', {
	      staticClass: "menu-title",
	      attrs: {
	        "lines": "1"
	      }
	    }, [_vm._v(_vm._s(menu.title))])])
	  }))], 1), _vm._v(" "), _c('div', {
	    staticClass: "bottom"
	  }, _vm._l((_vm.news), function(item, index) {
	    return _c('div', {
	      key: item,
	      staticClass: "item-news"
	    }, [_c('div', {
	      staticClass: "item-news-inner"
	    }, [_c('div', {
	      staticClass: "news-image-container"
	    }, [_c('image', {
	      staticClass: "news-image",
	      attrs: {
	        "src": item.image,
	        "resize": "cover"
	      }
	    })]), _vm._v(" "), _c('text', {
	      staticClass: "news-title"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
	      staticClass: "news-detail-icon"
	    }, [_c('image', {
	      staticClass: "news-detail",
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
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6d3a0a98", module.exports)
	  }
	}

/***/ })
/******/ ]);