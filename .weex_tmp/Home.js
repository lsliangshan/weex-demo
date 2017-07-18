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

	var App = __webpack_require__(16);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(17)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(19),
	  /* template */
	  __webpack_require__(53),
	  /* scopeId */
	  "data-v-764a1590",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Keith/git/zl/weex/weex-demo/src/Home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-764a1590", Component.options)
	  } else {
	    hotAPI.reload("data-v-764a1590", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("0834916a", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-764a1590&scoped=true!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
	     var newContent = require("!!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-764a1590&scoped=true!../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.home-scroller[data-v-764a1590] {\n  /*background-color: cyan;*/\n}\n.main-search[data-v-764a1590] {\n  width: 750px;\n  height: 100px;\n  background-color: transparent;\n  margin-top: -48px;\n}\n.main-search-fixed-true[data-v-764a1590] {\n  position: sticky;\n  top: 0;\n  left: 0;\n}\n.main-search-inner[data-v-764a1590] {\n  width: 600px;\n  height: 100px;\n  background-color: #ffffff;\n  /*position: absolute;*/\n  margin-left: 75px;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 10px 5px #ccc;\n  border-radius: 3px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.search-icon-container[data-v-764a1590] {\n  width: 100px;\n  height: 100px;\n  align-items: center;\n  justify-content: center;\n}\n.search-icon[data-v-764a1590] {\n  width: 48px;\n  height: 48px;\n}\n.search[data-v-764a1590] {\n  /*background-color: cyan;*/\n  placeholder-color: #ccc;\n  color: #999;\n  width: 500px;\n  height: 96px;\n  float: right;\n  right: 0;\n  font-size: 28px;\n  line-height: 96px;\n}\n", ""]);

	// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Banner = __webpack_require__(20);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _TopMenu = __webpack_require__(25);

	var _TopMenu2 = _interopRequireDefault(_TopMenu);

	var _HotRecruitment = __webpack_require__(30);

	var _HotRecruitment2 = _interopRequireDefault(_HotRecruitment);

	var _HotIndustry = __webpack_require__(38);

	var _HotIndustry2 = _interopRequireDefault(_HotIndustry);

	var _HotSubject = __webpack_require__(43);

	var _HotSubject2 = _interopRequireDefault(_HotSubject);

	var _Feedback = __webpack_require__(48);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(21)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(23),
	  /* template */
	  __webpack_require__(24),
	  /* scopeId */
	  "data-v-914d2e08",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Keith/git/zl/weex/weex-demo/src/components/Banner.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Banner.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-914d2e08", Component.options)
	  } else {
	    hotAPI.reload("data-v-914d2e08", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("b64573b4", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-914d2e08&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Banner.vue", function() {
	     var newContent = require("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-914d2e08&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Banner.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.slider[data-v-914d2e08] {\n  position: relative;\n}\n.frame[data-v-914d2e08] {\n}\n.image-item[data-v-914d2e08] {\n  width: 750px;\n  height: 400px;\n  flex: 2;\n}\n.indicator[data-v-914d2e08] {\n  width: 750px;\n  height: 80px;\n  item-color: green;\n  item-selected-color: red;\n  item-size: 20px;\n  position: absolute;\n  bottom: 0;\n}\n", ""]);

	// exports


/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "banner-container"
	  }, [_c('slider', {
	    staticClass: "slider"
	  }, [_vm._l((_vm.dataImages), function(img, index) {
	    return _c('div', {
	      key: img,
	      staticClass: "frame"
	    }, [_c('image', {
	      staticClass: "image-item",
	      style: (_vm.sliderStyle),
	      attrs: {
	        "src": img.src,
	        "resize": "cover"
	      }
	    })])
	  }), _vm._v(" "), _c('indicator', {
	    staticClass: "indicator",
	    style: (_vm.indicatorStyle)
	  })], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-914d2e08", module.exports)
	  }
	}

/***/ }),
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

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(31)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(33),
	  /* template */
	  __webpack_require__(37),
	  /* scopeId */
	  "data-v-1e02a75f",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Keith/git/zl/weex/weex-demo/src/components/HotRecruitment.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] HotRecruitment.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1e02a75f", Component.options)
	  } else {
	    hotAPI.reload("data-v-1e02a75f", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("70bfb649", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e02a75f&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HotRecruitment.vue", function() {
	     var newContent = require("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e02a75f&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HotRecruitment.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.hot-recruitment-container[data-v-1e02a75f] {\n  margin-top: 30px;\n  width: 750px;\n  min-height: 100px;\n  background-color: transparent;\n  padding: 0;\n}\n.title[data-v-1e02a75f] {\n  color: #333;\n  font-size: 32px;\n  line-height: 64px;\n  text-align: left;\n  margin-left: 30px;\n}\n.hot-recruitment-items[data-v-1e02a75f] {\n  width: 750px;\n  min-height: 100px;\n}\n.item-hot-recruitment-row[data-v-1e02a75f] {\n  margin-top: 15px;\n  flex-direction: row;\n}\n.item-hot-recruitment[data-v-1e02a75f] {\n  margin-left: 15px;\n}\n.item-hot-recruitment-0[data-v-1e02a75f] {\n  margin-left: 0;\n}\n", ""]);

	// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(34);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(36)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "hot-recruitment-container"
	  }, [_c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.dataTitle || '名企热招'))]), _vm._v(" "), _c('div', {
	    staticClass: "hot-recruitment-items"
	  }, _vm._l((_vm.formatRecruitment), function(items, index) {
	    return _c('div', {
	      key: items,
	      staticClass: "item-hot-recruitment-row"
	    }, _vm._l((items), function(item, idx) {
	      return _c('div', {
	        key: items,
	        staticClass: "item-hot-recruitment",
	        class: ['item-hot-recruitment-' + idx]
	      }, [_c('div', {
	        staticClass: "image-container"
	      }, [_c('image', {
	        style: ({
	          'height': item.height + 'px',
	          'width': _vm.getWidth(item.col) + 'px'
	        }),
	        attrs: {
	          "src": item.image,
	          "resize": "cover"
	        }
	      })])])
	    }))
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1e02a75f", module.exports)
	  }
	}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(39)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(41),
	  /* template */
	  __webpack_require__(42),
	  /* scopeId */
	  "data-v-8544efaa",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Keith/git/zl/weex/weex-demo/src/components/HotIndustry.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] HotIndustry.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8544efaa", Component.options)
	  } else {
	    hotAPI.reload("data-v-8544efaa", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("28e239d2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8544efaa&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HotIndustry.vue", function() {
	     var newContent = require("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8544efaa&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HotIndustry.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.hot-industry-container[data-v-8544efaa] {\n  margin-top: 30px;\n  width: 750px;\n  min-height: 100px;\n  background-color: transparent;\n  padding: 0;\n}\n.title[data-v-8544efaa] {\n  color: #333;\n  font-size: 32px;\n  line-height: 64px;\n  text-align: left;\n  margin-left: 30px;\n}\n.industry-scroller[data-v-8544efaa] {\n  width: 690px;\n  height: 300px;\n  margin-top: 15px;\n  margin-left: 30px;\n  overflow: hidden;\n  background-color: transparent;\n}\n.item-industry-container[data-v-8544efaa] {\n  width: 240px;\n  height: 300px;\n  margin-right: 30px;\n  background-color: #fff;\n}\n.item-industry-container[data-v-8544efaa]:active {\n  background-color: #eee;\n}\n.industry-image-container[data-v-8544efaa] {\n  width: 240px;\n  height: 180px;\n  align-items: center;\n  justify-content: center;\n  /*background-color: red;*/\n}\n.industry-image[data-v-8544efaa] {\n  width: 200px;\n  height: 150px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e5e5e5;\n}\n.industry-title[data-v-8544efaa] {\n  line-height: 48px;\n  font-size: 28px;\n  color: #666;\n  height: 48px;\n  margin-left: 20px;\n  text-align: left;\n  lines: 1;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n}\n.job-title[data-v-8544efaa] {\n  line-height: 32px;\n  font-size: 24px;\n  color: #ccc;\n  margin-left: 15px;\n  text-align: left;\n  lines: 1;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n}\n", ""]);

	// exports


/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "hot-industry-container"
	  }, [_c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.dataTitle || '热门行业'))]), _vm._v(" "), _c('scroller', {
	    staticClass: "industry-scroller",
	    attrs: {
	      "scroll-direction": "horizontal"
	    }
	  }, _vm._l((_vm.hotIndustry), function(item, index) {
	    return _c('div', {
	      key: item,
	      staticClass: "item-industry-container"
	    }, [_c('div', {
	      staticClass: "industry-image-container"
	    }, [_c('image', {
	      staticClass: "industry-image",
	      attrs: {
	        "src": item.image,
	        "resize": "cover"
	      }
	    })]), _vm._v(" "), _c('text', {
	      staticClass: "industry-title"
	    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _vm._l((item.jobs), function(job, idx) {
	      return _c('text', {
	        key: job,
	        staticClass: "job-title"
	      }, [_vm._v(" " + _vm._s(job.name))])
	    })], 2)
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8544efaa", module.exports)
	  }
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(44)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(46),
	  /* template */
	  __webpack_require__(47),
	  /* scopeId */
	  "data-v-9aa79722",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Keith/git/zl/weex/weex-demo/src/components/HotSubject.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] HotSubject.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9aa79722", Component.options)
	  } else {
	    hotAPI.reload("data-v-9aa79722", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("f08d1ccc", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9aa79722&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HotSubject.vue", function() {
	     var newContent = require("!!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/css-loader/index.js!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9aa79722&scoped=true!../../../../../../../usr/local/lib/node_modules/weex-toolkit/node_modules/weex-builder/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HotSubject.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.hot-subject-container[data-v-9aa79722] {\n  margin-top: 30px;\n  width: 750px;\n  min-height: 100px;\n  background-color: #ffffff;\n  padding: 0;\n}\n.hot-subject-header[data-v-9aa79722] {\n  width: 500px;\n  height: 64px;\n  margin-left: 125px;\n  margin-top: 30px;\n  text-align: center;\n  /*position: relative;*/\n  background-color: transparent;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.dividing[data-v-9aa79722] {\n  position: absolute;\n  width: 500px;\n  height: 6px;\n  background-color: #888;\n  top: 30px;\n}\n.title[data-v-9aa79722] {\n  color: #333;\n  font-size: 32px;\n  line-height: 64px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #fff;\n}\n.item-subject-container[data-v-9aa79722] {\n  margin-top: 30px;\n  width: 690px;\n  margin-left: 30px;\n  min-height: 100px;\n  overflow: hidden;\n}\n.item-subject-row[data-v-9aa79722] {\n  flex-direction: row;\n  margin-bottom: 30px;\n}\n.item-subject[data-v-9aa79722] {\n  width: 172px;\n  height: 240px;\n}\n.item-subject[data-v-9aa79722]:active {\n  background-color: #e5e5e5;\n}\n.item-subject-image-container[data-v-9aa79722] {\n  width: 172px;\n  height: 172px;\n  align-items: center;\n  justify-content: center;\n}\n.item-subject-image[data-v-9aa79722] {\n  width: 88px;\n  height: 88px;\n}\n.item-subject-title[data-v-9aa79722] {\n  color: #333;\n  font-size: 28px;\n  line-height: 32px;\n  padding-left: 30px;\n  padding-right: 30px;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ }),
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "hot-subject-container"
	  }, [_c('div', {
	    staticClass: "hot-subject-header"
	  }, [_c('div', {
	    staticClass: "dividing"
	  }), _vm._v(" "), _c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.dataTitle || '热门学科'))])]), _vm._v(" "), _c('div', {
	    staticClass: "item-subject-container"
	  }, _vm._l((_vm.formatHotSubject), function(subjects, index) {
	    return _c('div', {
	      key: subjects,
	      staticClass: "item-subject-row"
	    }, _vm._l((subjects), function(subject, idx) {
	      return _c('div', {
	        key: subject,
	        staticClass: "item-subject"
	      }, [_c('div', {
	        staticClass: "item-subject-image-container"
	      }, [_c('image', {
	        staticClass: "item-subject-image",
	        attrs: {
	          "src": subject.image,
	          "resize": "cover"
	        }
	      })]), _vm._v(" "), _c('text', {
	        staticClass: "item-subject-title"
	      }, [_vm._v(_vm._s(subject.title))])])
	    }))
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-9aa79722", module.exports)
	  }
	}

/***/ }),
/* 48 */
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
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.feedback-container[data-v-12f8da56] {\n  margin-top: 30px;\n  width: 750px;\n  min-height: 100px;\n  background-color: #ffffff;\n  padding: 0;\n}\n.feedback-header[data-v-12f8da56] {\n  width: 500px;\n  height: 64px;\n  margin-left: 125px;\n  margin-top: 30px;\n  text-align: center;\n  /*position: relative;*/\n  background-color: transparent;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.dividing[data-v-12f8da56] {\n  position: absolute;\n  width: 500px;\n  height: 6px;\n  background-color: #888;\n  top: 30px;\n}\n.title[data-v-12f8da56] {\n  color: #333;\n  font-size: 32px;\n  line-height: 64px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #fff;\n}\n.feedback-users-container[data-v-12f8da56] {\n  width: 690px;\n  margin-left: 30px;\n  margin-top: 30px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #ccc;\n}\n.feedback-users-scroller[data-v-12f8da56] {\n  width: 690px;\n  height: 240px;\n}\n.item-feedback-users[data-v-12f8da56] {\n  width: 138px;\n  height: 240px;\n}\n.user-image-container[data-v-12f8da56] {\n  width: 138px;\n  height: 138px;\n  align-items: center;\n  justify-content: center;\n}\n.user-image[data-v-12f8da56] {\n  width: 108px;\n  height: 108px;\n  border-radius: 54px;\n}\n.user-name[data-v-12f8da56] {\n  width: 138px;\n  height: 64px;\n  line-height: 48px;\n  font-size: 28px;\n  color: #888;\n  text-align: center;\n}\n.feedback-message-container[data-v-12f8da56] {\n  width: 750px;\n  /*height: 200px;*/\n}\n.item-message[data-v-12f8da56] {\n  width: 750px;\n  /*min-height: 200px;*/\n  /*padding-left: 30px;*/\n}\n.item-message[data-v-12f8da56]:active {\n  background-color: #e5e5e5;\n}\n.item-message-inner[data-v-12f8da56] {\n  width: 690px;\n  margin-left: 30px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #f5f5f5;\n}\n.message-image-container[data-v-12f8da56] {\n  width: 128px;\n  /*height: 200px;*/\n  align-items: center;\n  justify-content: center;\n}\n.message-image[data-v-12f8da56] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n}\n.message-container[data-v-12f8da56] {\n  width: 476px;\n}\n.message-title[data-v-12f8da56] {\n  width: 476px;\n  color: #666;\n  font-size: 28px;\n  line-height: 48px;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  lines: 1;\n}\n.message-content[data-v-12f8da56] {\n  width: 476px;\n  color: #ccc;\n  font-size: 24px;\n  line-height: 32px;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  lines: 4;\n}\n.message-detail-icon[data-v-12f8da56] {\n  width: 64px;\n  /*height: 200px;*/\n  align-items: center;\n  justify-content: center;\n}\n.message-detail[data-v-12f8da56] {\n  width: 64px;\n  height: 64px;\n}\n", ""]);

	// exports


/***/ }),
/* 51 */
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
/* 52 */
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

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "home"
	  }, [_c('scroller', {
	    staticClass: "home-scroller",
	    attrs: {
	      "offset-accuracy": "10"
	    },
	    on: {
	      "scroll": _vm.mainScroll
	    }
	  }, [_c('transition', {
	    attrs: {
	      "name": "banner-transition",
	      "enter-active-class": "animated fadeIn",
	      "leave-active-class": "animated fadeOut"
	    }
	  }, [(_vm.state.banner.shown) ? _c('banner', {
	    attrs: {
	      "data-images": _vm.banner.images,
	      "indicator-style": _vm.banner.indicatorStyle,
	      "slider-style": _vm.banner.sliderStyle
	    }
	  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
	    ref: "mainSearch",
	    staticClass: "main-search",
	    class: ['main-search-fixed-' + _vm.fixSearch]
	  }, [_c('div', {
	    staticClass: "main-search-inner"
	  }, [_c('div', {
	    staticClass: "search-icon-container"
	  }, [_c('image', {
	    staticClass: "search-icon",
	    attrs: {
	      "src": "../assets/images/icon-search.png"
	    }
	  })]), _vm._v(" "), _c('input', {
	    staticClass: "search",
	    attrs: {
	      "type": "text",
	      "placeholder": "搜索你感兴趣的职位",
	      "return-key-type": "search"
	    }
	  })])]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "top-menu-transition",
	      "enter-active-class": "animated fadeIn",
	      "leave-active-class": "animated fadeOut"
	    }
	  }, [(_vm.state.topMenu.shown) ? _c('top-menu') : _vm._e()], 1), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "hot-recruitment-transition",
	      "enter-active-class": "animated fadeIn",
	      "leave-active-class": "animated fadeOut"
	    }
	  }, [(_vm.state.hotRecruitment.shown) ? _c('hot-recruitment', {
	    attrs: {
	      "data-title": '名企热招'
	    }
	  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "hot-industry-transition",
	      "enter-active-class": "animated fadeIn",
	      "leave-active-class": "animated fadeOut"
	    }
	  }, [(_vm.state.hotIndustry.shown) ? _c('hot-industry', {
	    attrs: {
	      "data-title": '热门行业'
	    }
	  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "hot-subject-transition",
	      "enter-active-class": "animated fadeIn",
	      "leave-active-class": "animated fadeOut"
	    }
	  }, [(_vm.state.hotSubject.shown) ? _c('hot-subject', {
	    attrs: {
	      "data-title": '热门学科'
	    }
	  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "feedback-transition",
	      "enter-active-class": "animated fadeIn",
	      "leave-active-class": "animated fadeOut"
	    }
	  }, [(_vm.state.feedback.shown) ? _c('feedback', {
	    attrs: {
	      "data-title": '学长对你说'
	    }
	  }) : _vm._e()], 1)], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-764a1590", module.exports)
	  }
	}

/***/ })
/******/ ]);