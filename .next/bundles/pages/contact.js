module.exports =
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	module.exports = __webpack_require__(158);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(35)
	  , ITERATOR  = __webpack_require__(4)('iterator')
	  , Iterators = __webpack_require__(7);
	module.exports = __webpack_require__(3).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(48);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processStyleName = undefined;
	exports.createMarkupForStyles = createMarkupForStyles;
	
	var _camelizeStyleName = __webpack_require__(47);
	
	var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);
	
	var _dangerousStyleValue = __webpack_require__(53);
	
	var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);
	
	var _hyphenateStyleName = __webpack_require__(50);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _memoizeStringOnly = __webpack_require__(51);
	
	var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);
	
	var _warning = __webpack_require__(10);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
	                                                                                                                   * Copyright 2013-present, Facebook, Inc.
	                                                                                                                   * All rights reserved.
	                                                                                                                   *
	                                                                                                                   * This source code is licensed under the BSD-style license found in the
	                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
	                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
	                                                                                                                   *
	                                                                                                                   * @providesModule CSSPropertyOperations
	                                                                                                                   */
	
	if (process.env.NODE_ENV !== 'production') {
	  var warnValidStyle;
	
	  (function () {
	    // 'msTransform' is correct, but the other prefixes should be capitalized
	    var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	
	    // style values shouldn't contain a semicolon
	    var badStyleValueWithSemicolonPattern = /;\s*$/;
	
	    var warnedStyleNames = {};
	    var warnedStyleValues = {};
	    var warnedForNaNValue = false;
	
	    var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
	      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	        return;
	      }
	
	      warnedStyleNames[name] = true;
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : void 0;
	    };
	
	    var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
	      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	        return;
	      }
	
	      warnedStyleNames[name] = true;
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
	    };
	
	    var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
	      if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	        return;
	      }
	
	      warnedStyleValues[value] = true;
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
	    };
	
	    var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
	      if (warnedForNaNValue) {
	        return;
	      }
	
	      warnedForNaNValue = true;
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
	    };
	
	    var checkRenderMessage = function checkRenderMessage(owner) {
	      if (owner) {
	        var name = owner.getName();
	        if (name) {
	          return ' Check the render method of `' + name + '`.';
	        }
	      }
	      return '';
	    };
	
	    /**
	     * @param {string} name
	     * @param {*} value
	     * @param {ReactDOMComponent} component
	     */
	
	    warnValidStyle = function warnValidStyle(name, value, component) {
	      //eslint-disable-line no-var
	      var owner = void 0;
	      if (component) {
	        owner = component._currentElement._owner;
	      }
	      if (name.indexOf('-') > -1) {
	        warnHyphenatedStyleName(name, owner);
	      } else if (badVendoredStyleNamePattern.test(name)) {
	        warnBadVendoredStyleName(name, owner);
	      } else if (badStyleValueWithSemicolonPattern.test(value)) {
	        warnStyleValueWithSemicolon(name, value, owner);
	      }
	
	      if (typeof value === 'number' && isNaN(value)) {
	        warnStyleValueIsNaN(name, value, owner);
	      }
	    };
	  })();
	}
	
	/**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   * @return {?string}
	   */
	
	function createMarkupForStyles(styles, component) {
	  var serialized = '';
	  for (var styleName in styles) {
	    var isCustomProp = styleName.indexOf('--') === 0;
	    if (!styles.hasOwnProperty(styleName)) {
	      continue;
	    }
	    var styleValue = styles[styleName];
	    if (process.env.NODE_ENV !== 'production' && !isCustomProp) {
	      warnValidStyle(styleName, styleValue, component);
	    }
	    if (styleValue != null) {
	      if (isCustomProp) {
	        serialized += styleName + ':' + styleValue + ';';
	      } else {
	        serialized += processStyleName(styleName) + ':';
	        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
	      }
	    }
	  }
	  return serialized || null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
	exports.speedy = speedy;
	exports.simulations = simulations;
	exports.simulate = simulate;
	exports.cssLabels = cssLabels;
	exports.isLikeRule = isLikeRule;
	exports.idFor = idFor;
	exports.css = css;
	exports.rehydrate = rehydrate;
	exports.flush = flush;
	exports.select = select;
	exports.parent = parent;
	exports.media = media;
	exports.pseudo = pseudo;
	exports.active = active;
	exports.any = any;
	exports.checked = checked;
	exports.disabled = disabled;
	exports.empty = empty;
	exports.enabled = enabled;
	exports._default = _default;
	exports.first = first;
	exports.firstChild = firstChild;
	exports.firstOfType = firstOfType;
	exports.fullscreen = fullscreen;
	exports.focus = focus;
	exports.hover = hover;
	exports.indeterminate = indeterminate;
	exports.inRange = inRange;
	exports.invalid = invalid;
	exports.lastChild = lastChild;
	exports.lastOfType = lastOfType;
	exports.left = left;
	exports.link = link;
	exports.onlyChild = onlyChild;
	exports.onlyOfType = onlyOfType;
	exports.optional = optional;
	exports.outOfRange = outOfRange;
	exports.readOnly = readOnly;
	exports.readWrite = readWrite;
	exports.required = required;
	exports.right = right;
	exports.root = root;
	exports.scope = scope;
	exports.target = target;
	exports.valid = valid;
	exports.visited = visited;
	exports.dir = dir;
	exports.lang = lang;
	exports.not = not;
	exports.nthChild = nthChild;
	exports.nthLastChild = nthLastChild;
	exports.nthLastOfType = nthLastOfType;
	exports.nthOfType = nthOfType;
	exports.after = after;
	exports.before = before;
	exports.firstLetter = firstLetter;
	exports.firstLine = firstLine;
	exports.selection = selection;
	exports.backdrop = backdrop;
	exports.placeholder = placeholder;
	exports.cssFor = cssFor;
	exports.attribsFor = attribsFor;
	
	var _sheet = __webpack_require__(58);
	
	var _CSSPropertyOperations = __webpack_require__(11);
	
	var _clean = __webpack_require__(54);
	
	var _clean2 = _interopRequireDefault(_clean);
	
	var _plugins = __webpack_require__(57);
	
	var _hash = __webpack_require__(55);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* stylesheet */
	
	
	var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
	// an isomorphic StyleSheet shim. hides all the nitty gritty.
	
	// /**************** LIFTOFF IN 3... 2... 1... ****************/
	styleSheet.inject(); //eslint-disable-line indent
	// /****************      TO THE MOOOOOOON     ****************/
	
	// convenience function to toggle speedy
	function speedy(bool) {
	  return styleSheet.speedy(bool);
	}
	
	// plugins
	// we include these by default
	var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet(_plugins.prefixes, _plugins.fallbacks);
	plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
	plugins.fontFace = new _plugins.PluginSet();
	plugins.keyframes = new _plugins.PluginSet(_plugins.prefixes);
	
	// define some constants
	
	var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
	var isTest = process.env.NODE_ENV === 'test';
	
	/**** simulations  ****/
	
	// a flag to enable simulation meta tags on dom nodes
	// defaults to true in dev mode. recommend *not* to
	// toggle often.
	var canSimulate = isDev;
	
	// we use these flags for issuing warnings when simulate is called
	// in prod / in incorrect order
	var warned1 = false,
	    warned2 = false;
	
	// toggles simulation activity. shouldn't be needed in most cases
	function simulations() {
	  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	  canSimulate = !!bool;
	}
	
	// use this on dom nodes to 'simulate' pseudoclasses
	// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
	// you can even send in some weird ones, as long as it's in simple format
	// and matches an existing rule on the element
	// eg simulate('nthChild2', ':hover:active') etc
	function simulate() {
	  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
	    pseudos[_key] = arguments[_key];
	  }
	
	  pseudos = (0, _clean2.default)(pseudos);
	  if (!pseudos) return {};
	  if (!canSimulate) {
	    if (!warned1) {
	      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
	      warned1 = true;
	    }
	    if (!isDev && !isTest && !warned2) {
	      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
	      warned2 = true;
	    }
	    return {};
	  }
	  return pseudos.reduce(function (o, p) {
	    return o['data-simulate-' + simple(p)] = '', o;
	  }, {});
	}
	
	/**** labels ****/
	// toggle for debug labels.
	// *shouldn't* have to mess with this manually
	var hasLabels = isDev;
	
	function cssLabels(bool) {
	  hasLabels = !!bool;
	}
	
	// takes a string, converts to lowercase, strips out nonalphanumeric.
	function simple(str) {
	  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
	}
	
	// hashes a string to something 'unique'
	// we use this to generate ids for styles
	
	
	function hashify() {
	  for (var _len2 = arguments.length, objs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    objs[_key2] = arguments[_key2];
	  }
	
	  return (0, _hash2.default)(objs.map(function (x) {
	    return JSON.stringify(x);
	  }).join('')).toString(36);
	}
	
	// of shape { 'data-css-<id>': '' }
	function isLikeRule(rule) {
	  var keys = Object.keys(rule).filter(function (x) {
	    return x !== 'toString';
	  });
	  if (keys.length !== 1) {
	    return false;
	  }
	  return !!/data\-css\-([a-zA-Z0-9]+)/.exec(keys[0]);
	}
	
	// extracts id from a { 'data-css-<id>': ''} like object
	function idFor(rule) {
	  var keys = Object.keys(rule).filter(function (x) {
	    return x !== 'toString';
	  });
	  if (keys.length !== 1) throw new Error('not a rule');
	  var regex = /data\-css\-([a-zA-Z0-9]+)/;
	  var match = regex.exec(keys[0]);
	  if (!match) throw new Error('not a rule');
	  return match[1];
	}
	
	function selector(id, path) {
	
	  if (!id) {
	    return path.replace(/\&/g, '');
	  }
	  if (!path) return '.css-' + id + ',[data-css-' + id + ']';
	
	  var x = path.split(',').map(function (x) {
	    return x.indexOf('&') >= 0 ? [x.replace(/\&/mg, '.css-' + id), x.replace(/\&/mg, '[data-css-' + id + ']')].join(',') // todo - make sure each sub selector has an &
	    : '.css-' + id + x + ',[data-css-' + id + ']' + x;
	  }).join(',');
	
	  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
	    x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
	  }
	  return x;
	}
	
	function toCSS(_ref) {
	  var selector = _ref.selector,
	      style = _ref.style;
	
	  var result = plugins.transform({ selector: selector, style: style });
	  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
	}
	
	function deconstruct(style) {
	  // we can be sure it's not infinitely nested here 
	  var plain = void 0,
	      selects = void 0,
	      medias = void 0,
	      supports = void 0;
	  Object.keys(style).forEach(function (key) {
	    if (key.indexOf('&') >= 0) {
	      selects = selects || {};
	      selects[key] = style[key];
	    } else if (key.indexOf('@media') === 0) {
	      medias = medias || {};
	      medias[key] = deconstruct(style[key]);
	    } else if (key.indexOf('@supports') === 0) {
	      supports = supports || {};
	      supports[key] = deconstruct(style[key]);
	    } else if (key === 'label') {
	      if (style.label.length > 0) {
	        plain = plain || {};
	        plain.label = style.label.join('.');
	      }
	    } else {
	      plain = plain || {};
	      plain[key] = style[key];
	    }
	  });
	  return { plain: plain, selects: selects, medias: medias, supports: supports };
	}
	
	function deconstructedStyleToCSS(id, style) {
	  var css = [];
	
	  // plugins here
	  var plain = style.plain,
	      selects = style.selects,
	      medias = style.medias,
	      supports = style.supports;
	
	  if (plain) {
	    css.push(toCSS({ style: plain, selector: selector(id) }));
	  }
	  if (selects) {
	    Object.keys(selects).forEach(function (key) {
	      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
	    });
	  }
	  if (medias) {
	    Object.keys(medias).forEach(function (key) {
	      return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
	    });
	  }
	  if (supports) {
	    Object.keys(supports).forEach(function (key) {
	      return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
	    });
	  }
	  return css;
	}
	
	// this cache to track which rules have
	// been inserted into the stylesheet
	var inserted = styleSheet.inserted = {};
	
	// and helpers to insert rules into said styleSheet
	function insert(spec) {
	  if (!inserted[spec.id]) {
	    inserted[spec.id] = true;
	    var deconstructed = deconstruct(spec.style);
	    deconstructedStyleToCSS(spec.id, deconstructed).map(function (cssRule) {
	      return styleSheet.insert(cssRule);
	    });
	  }
	}
	
	// a simple cache to store generated rules
	var registered = styleSheet.registered = {};
	function register(spec) {
	  if (!registered[spec.id]) {
	    registered[spec.id] = spec;
	  }
	}
	
	function _getRegistered(rule) {
	  if (isLikeRule(rule)) {
	    var ret = registered[idFor(rule)];
	    if (ret == null) {
	      throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
	    }
	    return ret;
	  }
	  return rule;
	}
	
	// todo - perf
	var ruleCache = {};
	function toRule(spec) {
	  register(spec);
	  insert(spec);
	  if (ruleCache[spec.id]) {
	    return ruleCache[spec.id];
	  }
	
	  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
	  Object.defineProperty(ret, 'toString', {
	    enumerable: false, value: function value() {
	      return 'css-' + spec.id;
	    }
	  });
	  ruleCache[spec.id] = ret;
	  return ret;
	}
	
	function log() {
	  //eslint-disable-line no-unused-vars
	  console.log(this); //eslint-disable-line no-console
	  return this;
	}
	
	function isSelector(key) {
	  var possibles = [':', '.', '[', '>', ' '],
	      found = false,
	      ch = key.charAt(0);
	  for (var i = 0; i < possibles.length; i++) {
	    if (ch === possibles[i]) {
	      found = true;
	      break;
	    }
	  }
	  return found || key.indexOf('&') >= 0;
	}
	
	function joinSelectors(a, b) {
	  var as = a.split(',').map(function (a) {
	    return !(a.indexOf('&') >= 0) ? '&' + a : a;
	  });
	  var bs = b.split(',').map(function (b) {
	    return !(b.indexOf('&') >= 0) ? '&' + b : b;
	  });
	
	  return bs.reduce(function (arr, b) {
	    return arr.concat(as.map(function (a) {
	      return b.replace(/\&/g, a);
	    }));
	  }, []).join(',');
	}
	
	function joinMediaQueries(a, b) {
	  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
	}
	
	function isMediaQuery(key) {
	  return key.indexOf('@media') === 0;
	}
	
	function isSupports(key) {
	  return key.indexOf('@supports') === 0;
	}
	
	function joinSupports(a, b) {
	  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
	}
	
	// flatten a nested array
	function flatten(inArr) {
	  var arr = [];
	  for (var i = 0; i < inArr.length; i++) {
	    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
	  }
	  return arr;
	}
	
	// mutable! modifies dest.
	function build(dest, _ref2) {
	  var _ref2$selector = _ref2.selector,
	      selector = _ref2$selector === undefined ? '' : _ref2$selector,
	      _ref2$mq = _ref2.mq,
	      mq = _ref2$mq === undefined ? '' : _ref2$mq,
	      _ref2$supp = _ref2.supp,
	      supp = _ref2$supp === undefined ? '' : _ref2$supp,
	      _ref2$src = _ref2.src,
	      src = _ref2$src === undefined ? {} : _ref2$src;
	
	
	  if (!Array.isArray(src)) {
	    src = [src];
	  }
	  src = flatten(src);
	
	  src.forEach(function (_src) {
	    if (isLikeRule(_src)) {
	      var reg = _getRegistered(_src);
	      if (reg.type !== 'css') {
	        throw new Error('cannot merge this rule');
	      }
	      _src = reg.style;
	    }
	    _src = (0, _clean2.default)(_src);
	    if (_src.composes) {
	      build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
	    }
	    Object.keys(_src).forEach(function (key) {
	      if (isSelector(key)) {
	        selector = selector === '::placeholder' ? '::placeholder, ::-webkit-input-placeholder, ::-moz-placeholder, ::-ms-input-placeholder' : selector;
	
	        build(dest, { selector: joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
	      } else if (isMediaQuery(key)) {
	        build(dest, { selector: selector, mq: joinMediaQueries(mq, key), supp: supp, src: _src[key] });
	      } else if (isSupports(key)) {
	        build(dest, { selector: selector, mq: mq, supp: joinSupports(supp, key), src: _src[key] });
	      } else if (key === 'composes') {
	        // ignore, we already dealth with it
	      } else {
	        var _dest = dest;
	        if (supp) {
	          _dest[supp] = _dest[supp] || {};
	          _dest = _dest[supp];
	        }
	        if (mq) {
	          _dest[mq] = _dest[mq] || {};
	          _dest = _dest[mq];
	        }
	        if (selector) {
	          _dest[selector] = _dest[selector] || {};
	          _dest = _dest[selector];
	        }
	
	        if (key === 'label' && hasLabels) {
	          dest.label = dest.label.concat(_src.label);
	        } else {
	          _dest[key] = _src[key];
	        }
	      }
	    });
	  });
	}
	
	function _css(rules) {
	  var style = { label: [] };
	  build(style, { src: rules }); // mutative! but worth it. 
	
	  var spec = {
	    id: hashify(style),
	    style: style, label: style.label.join('.'),
	    type: 'css'
	  };
	  return toRule(spec);
	}
	
	var nullrule = {
	  // 'data-css-nil': ''
	};
	Object.defineProperty(nullrule, 'toString', {
	  enumerable: false, value: function value() {
	    return 'css-nil';
	  }
	});
	
	function css() {
	  for (var _len3 = arguments.length, rules = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    rules[_key3] = arguments[_key3];
	  }
	
	  if (rules[0] && rules[0].length && rules[0].raw) {
	    throw new Error('you forgot to include glamor/babel in your babel plugins.');
	  }
	
	  rules = (0, _clean2.default)(rules);
	  if (!rules) {
	    return nullrule; // todo - nullrule 
	  }
	
	  return _css(rules);
	}
	
	css.insert = function (css) {
	  var spec = {
	    id: hashify(css),
	    css: css,
	    type: 'raw'
	  };
	  register(spec);
	  if (!inserted[spec.id]) {
	    styleSheet.insert(spec.css);
	    inserted[spec.id] = true;
	  }
	};
	
	var insertRule = exports.insertRule = css.insert;
	
	css.global = function (selector, style) {
	  return css.insert(selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(style) + '}');
	};
	
	var insertGlobal = exports.insertGlobal = css.global;
	
	function insertKeyframe(spec) {
	  if (!inserted[spec.id]) {
	    (function () {
	      var inner = Object.keys(spec.keyframes).map(function (kf) {
	        var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
	        return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
	      }).join('');
	
	      ['-webkit-', '-moz-', '-o-', ''].forEach(function (prefix) {
	        return styleSheet.insert('@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}');
	      });
	
	      inserted[spec.id] = true;
	    })();
	  }
	}
	css.keyframes = function (name, kfs) {
	  if (!kfs) {
	    kfs = name, name = 'animation';
	  }
	
	  // do not ignore empty keyframe definitions for now.
	  kfs = (0, _clean2.default)(kfs) || {};
	  var spec = {
	    id: hashify(name, kfs),
	    type: 'keyframes',
	    name: name,
	    keyframes: kfs
	  };
	  register(spec);
	  insertKeyframe(spec);
	  return name + '_' + spec.id;
	};
	
	var fontFace = exports.fontFace = css.fontFace;
	var keyframes = exports.keyframes = css.keyframes;
	
	function insertFontFace(spec) {
	  if (!inserted[spec.id]) {
	    styleSheet.insert('@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}');
	    inserted[spec.id] = true;
	  }
	}
	
	// we don't go all out for fonts as much, giving a simple font loading strategy
	// use a fancier lib if you need moar power
	css.fontFace = function (font) {
	  font = (0, _clean2.default)(font);
	  var spec = {
	    id: hashify(font),
	    type: 'font-face',
	    font: font
	  };
	  register(spec);
	  insertFontFace(spec);
	
	  return font.fontFamily;
	};
	
	// rehydrate the insertion cache with ids sent from
	// renderStatic / renderStaticOptimized
	function rehydrate(ids) {
	  // load up ids
	  Object.assign(inserted, ids.reduce(function (o, i) {
	    return o[i] = true, o;
	  }, {}));
	  // assume css loaded separately
	}
	
	// clears out the cache and empties the stylesheet
	// best for tests, though there might be some value for SSR.
	
	function flush() {
	  inserted = styleSheet.inserted = {};
	  registered = styleSheet.registered = {};
	  ruleCache = {};
	  styleSheet.flush();
	  styleSheet.inject();
	}
	
	var presets = exports.presets = {
	  mobile: '(min-width: 400px)',
	  Mobile: '@media (min-width: 400px)',
	  phablet: '(min-width: 550px)',
	  Phablet: '@media (min-width: 550px)',
	  tablet: '(min-width: 750px)',
	  Tablet: '@media (min-width: 550px)',
	  desktop: '(min-width: 1000px)',
	  Desktop: '@media (min-width: 1000px)',
	  hd: '(min-width: 1200px)',
	  Hd: '@media (min-width: 1200px)'
	};
	
	var style = exports.style = css;
	
	function select(selector) {
	  for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    styles[_key4 - 1] = arguments[_key4];
	  }
	
	  if (!selector) {
	    return style(styles);
	  }
	  return css(_defineProperty({}, selector, styles));
	}
	var $ = exports.$ = select;
	
	function parent(selector) {
	  for (var _len5 = arguments.length, styles = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	    styles[_key5 - 1] = arguments[_key5];
	  }
	
	  return css(_defineProperty({}, selector + ' &', styles));
	}
	
	var merge = exports.merge = css;
	var compose = exports.compose = css;
	
	function media(query) {
	  for (var _len6 = arguments.length, rules = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	    rules[_key6 - 1] = arguments[_key6];
	  }
	
	  return css(_defineProperty({}, '@media ' + query, rules));
	}
	
	function pseudo(selector) {
	  for (var _len7 = arguments.length, styles = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	    styles[_key7 - 1] = arguments[_key7];
	  }
	
	  return css(_defineProperty({}, selector, styles));
	}
	
	// allllll the pseudoclasses
	
	function active(x) {
	  return pseudo(':active', x);
	}
	
	function any(x) {
	  return pseudo(':any', x);
	}
	
	function checked(x) {
	  return pseudo(':checked', x);
	}
	
	function disabled(x) {
	  return pseudo(':disabled', x);
	}
	
	function empty(x) {
	  return pseudo(':empty', x);
	}
	
	function enabled(x) {
	  return pseudo(':enabled', x);
	}
	
	function _default(x) {
	  return pseudo(':default', x); // note '_default' name
	}
	
	function first(x) {
	  return pseudo(':first', x);
	}
	
	function firstChild(x) {
	  return pseudo(':first-child', x);
	}
	
	function firstOfType(x) {
	  return pseudo(':first-of-type', x);
	}
	
	function fullscreen(x) {
	  return pseudo(':fullscreen', x);
	}
	
	function focus(x) {
	  return pseudo(':focus', x);
	}
	
	function hover(x) {
	  return pseudo(':hover', x);
	}
	
	function indeterminate(x) {
	  return pseudo(':indeterminate', x);
	}
	
	function inRange(x) {
	  return pseudo(':in-range', x);
	}
	
	function invalid(x) {
	  return pseudo(':invalid', x);
	}
	
	function lastChild(x) {
	  return pseudo(':last-child', x);
	}
	
	function lastOfType(x) {
	  return pseudo(':last-of-type', x);
	}
	
	function left(x) {
	  return pseudo(':left', x);
	}
	
	function link(x) {
	  return pseudo(':link', x);
	}
	
	function onlyChild(x) {
	  return pseudo(':only-child', x);
	}
	
	function onlyOfType(x) {
	  return pseudo(':only-of-type', x);
	}
	
	function optional(x) {
	  return pseudo(':optional', x);
	}
	
	function outOfRange(x) {
	  return pseudo(':out-of-range', x);
	}
	
	function readOnly(x) {
	  return pseudo(':read-only', x);
	}
	
	function readWrite(x) {
	  return pseudo(':read-write', x);
	}
	
	function required(x) {
	  return pseudo(':required', x);
	}
	
	function right(x) {
	  return pseudo(':right', x);
	}
	
	function root(x) {
	  return pseudo(':root', x);
	}
	
	function scope(x) {
	  return pseudo(':scope', x);
	}
	
	function target(x) {
	  return pseudo(':target', x);
	}
	
	function valid(x) {
	  return pseudo(':valid', x);
	}
	
	function visited(x) {
	  return pseudo(':visited', x);
	}
	
	// parameterized pseudoclasses
	function dir(p, x) {
	  return pseudo(':dir(' + p + ')', x);
	}
	function lang(p, x) {
	  return pseudo(':lang(' + p + ')', x);
	}
	function not(p, x) {
	  // should this be a plugin?
	  var selector = p.split(',').map(function (x) {
	    return x.trim();
	  }).map(function (x) {
	    return ':not(' + x + ')';
	  });
	  if (selector.length === 1) {
	    return pseudo(':not(' + p + ')', x);
	  }
	  return select(selector.join(''), x);
	}
	function nthChild(p, x) {
	  return pseudo(':nth-child(' + p + ')', x);
	}
	function nthLastChild(p, x) {
	  return pseudo(':nth-last-child(' + p + ')', x);
	}
	function nthLastOfType(p, x) {
	  return pseudo(':nth-last-of-type(' + p + ')', x);
	}
	function nthOfType(p, x) {
	  return pseudo(':nth-of-type(' + p + ')', x);
	}
	
	// pseudoelements
	function after(x) {
	  return pseudo('::after', x);
	}
	function before(x) {
	  return pseudo('::before', x);
	}
	function firstLetter(x) {
	  return pseudo('::first-letter', x);
	}
	function firstLine(x) {
	  return pseudo('::first-line', x);
	}
	function selection(x) {
	  return pseudo('::selection', x);
	}
	function backdrop(x) {
	  return pseudo('::backdrop', x);
	}
	function placeholder(x) {
	  // https://github.com/threepointone/glamor/issues/14
	  return css({ '::placeholder': x });
	}
	
	/*** helpers for web components ***/
	// https://github.com/threepointone/glamor/issues/16
	
	function cssFor() {
	  for (var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	    rules[_key8] = arguments[_key8];
	  }
	
	  rules = (0, _clean2.default)(rules);
	  return rules ? rules.map(function (r) {
	    var style = { label: [] };
	    build(style, { src: r }); // mutative! but worth it.   
	    return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
	  }).join('') : '';
	}
	
	function attribsFor() {
	  for (var _len9 = arguments.length, rules = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	    rules[_key9] = arguments[_key9];
	  }
	
	  rules = (0, _clean2.default)(rules);
	  var htmlAttributes = rules ? rules.map(function (rule) {
	    idFor(rule); // throwaway check for rule
	    var key = Object.keys(rule)[0],
	        value = rule[key];
	    return key + '="' + (value || '') + '"';
	  }).join(' ') : '';
	
	  return htmlAttributes;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['CloseCurlyDoubleQuote', [8221]], ['CloseCurlyQuote', [8217]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
	
	var alphaIndex = {};
	var charIndex = {};
	
	createIndexes(alphaIndex, charIndex);
	
	/**
	 * @constructor
	 */
	function Html5Entities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
	        var chr;
	        if (entity.charAt(0) === "#") {
	            var code = entity.charAt(1) === 'x' ?
	                parseInt(entity.substr(2).toLowerCase(), 16) :
	                parseInt(entity.substr(1));
	
	            if (!(isNaN(code) || code < -32768 || code > 65535)) {
	                chr = String.fromCharCode(code);
	            }
	        } else {
	            chr = alphaIndex[entity];
	        }
	        return chr || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.decode = function(str) {
	    return new Html5Entities().decode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encode = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var charInfo = charIndex[str.charCodeAt(i)];
	        if (charInfo) {
	            var alpha = charInfo[str.charCodeAt(i + 1)];
	            if (alpha) {
	                i++;
	            } else {
	                alpha = charInfo[''];
	            }
	            if (alpha) {
	                result += "&" + alpha + ";";
	                i++;
	                continue;
	            }
	        }
	        result += str.charAt(i);
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encode = function(str) {
	    return new Html5Entities().encode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        var charInfo = charIndex[c];
	        if (charInfo) {
	            var alpha = charInfo[str.charCodeAt(i + 1)];
	            if (alpha) {
	                i++;
	            } else {
	                alpha = charInfo[''];
	            }
	            if (alpha) {
	                result += "&" + alpha + ";";
	                i++;
	                continue;
	            }
	        }
	        if (c < 32 || c > 126) {
	            result += '&#' + c + ';';
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encodeNonUTF = function(str) {
	    return new Html5Entities().encodeNonUTF(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html5Entities.prototype.encodeNonASCII = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 Html5Entities.encodeNonASCII = function(str) {
	    return new Html5Entities().encodeNonASCII(str);
	 };
	
	/**
	 * @param {Object} alphaIndex Passed by reference.
	 * @param {Object} charIndex Passed by reference.
	 */
	function createIndexes(alphaIndex, charIndex) {
	    var i = ENTITIES.length;
	    var _results = [];
	    while (i--) {
	        var e = ENTITIES[i];
	        var alpha = e[0];
	        var chars = e[1];
	        var chr = chars[0];
	        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
	        var charInfo;
	        if (addChar) {
	            charInfo = charIndex[chr] = charIndex[chr] || {};
	        }
	        if (chars[1]) {
	            var chr2 = chars[1];
	            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
	            _results.push(addChar && (charInfo[chr2] = alpha));
	        } else {
	            alphaIndex[alpha] = String.fromCharCode(chr);
	            _results.push(addChar && (charInfo[''] = alpha));
	        }
	    }
	}
	
	module.exports = Html5Entities;


/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._button = exports._tag = exports.theme = undefined;
	
	var _css = __webpack_require__(5);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _theme = __webpack_require__(64);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var theme = _theme2.default;
	
	var _tag = (0, _css2.default)({
	  color: theme.colors.text,
	  fontWeight: '700',
	  transition: 'all 0.4s 0.2s ease-in-out',
	  borderRadius: '5px',
	  padding: '1px 3px 1px 3px',
	  backgroundColor: theme.colors.trans_primary,
	  textDecoration: 'none',
	  ':hover': {
	    transform: 'scale(1.05, 1.4)',
	    transitionDelay: '0s',
	    transitionDuration: '0.2s',
	    backgroundColor: theme.colors.primary
	  }
	});
	
	var _button = (0, _css2.default)({
	  background: theme.colors.white,
	  color: theme.colors.primary
	});
	
	exports.theme = theme;
	exports._tag = _tag;
	exports._button = _button;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L1RoZW1lLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiX3RhZyIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImZvbnRXZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3ByaW1hcnkiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInByaW1hcnkiLCJfYnV0dG9uIiwiYmFja2dyb3VuZCIsIndoaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsdUJBQU47O0FBRUEsSUFBTUMsT0FBTyxtQkFBSTtBQUNmQyxTQUFPRixNQUFNRyxNQUFOLENBQWFDLElBREw7QUFFZkMsY0FBWSxLQUZHO0FBR2ZDLGNBQVksMkJBSEc7QUFJZkMsZ0JBQWMsS0FKQztBQUtmQyxXQUFTLGlCQUxNO0FBTWZDLG1CQUFpQlQsTUFBTUcsTUFBTixDQUFhTyxhQU5mO0FBT2ZDLGtCQUFnQixNQVBEO0FBUWYsWUFBVTtBQUNSQyxlQUFXLGtCQURIO0FBRVJDLHFCQUFpQixJQUZUO0FBR1JDLHdCQUFvQixNQUhaO0FBSVJMLHFCQUFpQlQsTUFBTUcsTUFBTixDQUFhWTtBQUp0QjtBQVJLLENBQUosQ0FBYjs7QUFnQkEsSUFBTUMsVUFBVSxtQkFBSTtBQUNsQkMsY0FBWWpCLE1BQU1HLE1BQU4sQ0FBYWUsS0FEUDtBQUVsQmhCLFNBQU9GLE1BQU1HLE1BQU4sQ0FBYVk7QUFGRixDQUFKLENBQWhCOztRQUtTZixLLEdBQUFBLEs7UUFBT0MsSSxHQUFBQSxJO1FBQU1lLE8sR0FBQUEsTyIsImZpbGUiOiJUaGVtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IG15X3RoZW1lIGZyb20gJy4uLy4uL2RhdGEvdGhlbWUnXG5cbmNvbnN0IHRoZW1lID0gbXlfdGhlbWVcblxuY29uc3QgX3RhZyA9IGNzcyh7XG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbiAgZm9udFdlaWdodDogJzcwMCcsXG4gIHRyYW5zaXRpb246ICdhbGwgMC40cyAwLjJzIGVhc2UtaW4tb3V0JyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgcGFkZGluZzogJzFweCAzcHggMXB4IDNweCcsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zX3ByaW1hcnksXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICc6aG92ZXInOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wNSwgMS40KScsXG4gICAgdHJhbnNpdGlvbkRlbGF5OiAnMHMnLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuMnMnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIH1cbn0pXG5cbmNvbnN0IF9idXR0b24gPSBjc3Moe1xuICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbn0pXG5cbmV4cG9ydCB7IHRoZW1lLCBfdGFnLCBfYnV0dG9uIH1cbiJdfQ==

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(78);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(28);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	__webpack_require__(44);
	module.exports = __webpack_require__(3).Array.from;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(22);
	module.exports = __webpack_require__(43);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	module.exports = __webpack_require__(3).Object.keys;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(74)
	  , TAG = __webpack_require__(4)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(8)
	  , createDesc      = __webpack_require__(26);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(7)
	  , ITERATOR   = __webpack_require__(4)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(6);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(4)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(6)
	  , get      = __webpack_require__(9);
	module.exports = __webpack_require__(3).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(75)
	  , $export        = __webpack_require__(19)
	  , toObject       = __webpack_require__(20)
	  , call           = __webpack_require__(40)
	  , isArrayIter    = __webpack_require__(39)
	  , toLength       = __webpack_require__(82)
	  , createProperty = __webpack_require__(36)
	  , getIterFn      = __webpack_require__(9);
	
	$export($export.S + $export.F * !__webpack_require__(41)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(20)
	  , $keys    = __webpack_require__(25);
	
	__webpack_require__(81)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var camelize = __webpack_require__(46);
	
	var msPattern = /^-ms-/;
	
	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = camelizeStyleName;

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var hyphenate = __webpack_require__(49);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;

/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */
	
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}
	
	module.exports = memoizeStringOnly;

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */
	
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	
	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});
	
	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};
	
	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};
	
	exports.default = CSSProperty;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _CSSProperty = __webpack_require__(52);
	
	var _CSSProperty2 = _interopRequireDefault(_CSSProperty);
	
	var _warning = __webpack_require__(10);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 */
	
	var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
	var styleWarnings = {};
	
	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, component) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901
	
	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }
	
	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }
	
	  if (typeof value === 'string') {
	    if (process.env.NODE_ENV !== 'production') {
	      // Allow '0' to pass through without warning. 0 is already special and
	      // doesn't require units, so we don't need to warn about it.
	      if (component && value !== '0') {
	        var owner = component._currentElement._owner;
	        var ownerName = owner ? owner.getName() : null;
	        if (ownerName && !styleWarnings[ownerName]) {
	          styleWarnings[ownerName] = {};
	        }
	        var warned = false;
	        if (ownerName) {
	          var warnings = styleWarnings[ownerName];
	          warned = warnings[name];
	          if (!warned) {
	            warnings[name] = true;
	          }
	        }
	        if (!warned) {
	          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
	        }
	      }
	    }
	    value = value.trim();
	  }
	  return value + 'px';
	}
	
	exports.default = dangerousStyleValue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = clean;
	// Returns true for null, false, undefined and {}
	function isFalsy(value) {
	  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
	}
	
	function cleanObject(object) {
	  if (isFalsy(object)) return null;
	  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;
	
	  var acc = {},
	      keys = Object.keys(object),
	      hasFalsy = false;
	  for (var i = 0; i < keys.length; i++) {
	    var value = object[keys[i]];
	    var filteredValue = clean(value);
	    if (filteredValue === null || filteredValue !== value) {
	      hasFalsy = true;
	    }
	    if (filteredValue !== null) {
	      acc[keys[i]] = filteredValue;
	    }
	  }
	  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
	}
	
	function cleanArray(rules) {
	  var hasFalsy = false;
	  var filtered = [];
	  rules.forEach(function (rule) {
	    var filteredRule = clean(rule);
	    if (filteredRule === null || filteredRule !== rule) {
	      hasFalsy = true;
	    }
	    if (filteredRule !== null) {
	      filtered.push(filteredRule);
	    }
	  });
	  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
	}
	
	// Takes style array or object provided by user and clears all the falsy data 
	// If there is no styles left after filtration returns null
	function clean(input) {
	  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
	}

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = doHash;
	// murmurhash2 via https://gist.github.com/raycmorgan/588423
	
	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;
	
	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);
	
	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);
	
	    h = Umul32(h, m);
	    h ^= k;
	
	    currentIndex += 4;
	    length -= 4;
	  }
	
	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;
	
	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;
	
	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }
	
	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;
	
	  return h >>> 0;
	}
	
	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}
	
	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}
	
	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.InlineStylePrefixAll = factory();
	})(undefined, function () {
	  'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	
	  babelHelpers.createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  babelHelpers.defineProperty = function (obj, key, value) {
	    if (key in obj) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    } else {
	      obj[key] = value;
	    }
	
	    return obj;
	  };
	
	  babelHelpers;
	
	  function __commonjs(fn, module) {
	    return module = { exports: {} }, fn(module, module.exports), module.exports;
	  }
	
	  var prefixProps = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	
	  // helper to capitalize strings
	  var capitalizeString = function capitalizeString(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  };
	
	  var isPrefixedProperty = function isPrefixedProperty(property) {
	    return property.match(/^(Webkit|Moz|O|ms)/) !== null;
	  };
	
	  function sortPrefixedStyle(style) {
	    return Object.keys(style).sort(function (left, right) {
	      if (isPrefixedProperty(left) && !isPrefixedProperty(right)) {
	        return -1;
	      } else if (!isPrefixedProperty(left) && isPrefixedProperty(right)) {
	        return 1;
	      }
	      return 0;
	    }).reduce(function (sortedStyle, prop) {
	      sortedStyle[prop] = style[prop];
	      return sortedStyle;
	    }, {});
	  }
	
	  function position(property, value) {
	    if (property === 'position' && value === 'sticky') {
	      return { position: ['-webkit-sticky', 'sticky'] };
	    }
	  }
	
	  // returns a style object with a single concated prefixed value string
	  var joinPrefixedValue = function joinPrefixedValue(property, value) {
	    var replacer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (prefix, value) {
	      return prefix + value;
	    };
	    return babelHelpers.defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	      return replacer(prefix, value);
	    }));
	  };
	
	  var isPrefixedValue = function isPrefixedValue(value) {
	    if (Array.isArray(value)) value = value.join(',');
	
	    return value.match(/-webkit-|-moz-|-ms-/) !== null;
	  };
	
	  function calc(property, value) {
	    if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('calc(') > -1) {
	      return joinPrefixedValue(property, value, function (prefix, value) {
	        return value.replace(/calc\(/g, prefix + 'calc(');
	      });
	    }
	  }
	
	  var values = {
	    'zoom-in': true,
	    'zoom-out': true,
	    grab: true,
	    grabbing: true
	  };
	
	  function cursor(property, value) {
	    if (property === 'cursor' && values[value]) {
	      return joinPrefixedValue(property, value);
	    }
	  }
	
	  var values$1 = { flex: true, 'inline-flex': true };
	
	  function flex(property, value) {
	    if (property === 'display' && values$1[value]) {
	      return {
	        display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	      };
	    }
	  }
	
	  var properties = {
	    maxHeight: true,
	    maxWidth: true,
	    width: true,
	    height: true,
	    columnWidth: true,
	    minWidth: true,
	    minHeight: true
	  };
	  var values$2 = {
	    'min-content': true,
	    'max-content': true,
	    'fill-available': true,
	    'fit-content': true,
	    'contain-floats': true
	  };
	
	  function sizing(property, value) {
	    if (properties[property] && values$2[value]) {
	      return joinPrefixedValue(property, value);
	    }
	  }
	
	  var values$3 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	  function gradient(property, value) {
	    if (typeof value === 'string' && !isPrefixedValue(value) && value.match(values$3) !== null) {
	      return joinPrefixedValue(property, value);
	    }
	  }
	
	  var index = __commonjs(function (module) {
	    'use strict';
	
	    var uppercasePattern = /[A-Z]/g;
	    var msPattern = /^ms-/;
	    var cache = {};
	
	    function hyphenateStyleName(string) {
	      return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
	    }
	
	    module.exports = hyphenateStyleName;
	  });
	
	  var hyphenateStyleName = index && (typeof index === 'undefined' ? 'undefined' : _typeof(index)) === 'object' && 'default' in index ? index['default'] : index;
	
	  var properties$1 = {
	    transition: true,
	    transitionProperty: true,
	    WebkitTransition: true,
	    WebkitTransitionProperty: true
	  };
	
	  function transition(property, value) {
	    // also check for already prefixed transitions
	    if (typeof value === 'string' && properties$1[property]) {
	      var _ref2;
	
	      var outputValue = prefixValue(value);
	      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	        return value.match(/-moz-|-ms-/) === null;
	      }).join(',');
	
	      // if the property is already prefixed
	      if (property.indexOf('Webkit') > -1) {
	        return babelHelpers.defineProperty({}, property, webkitOutput);
	      }
	
	      return _ref2 = {}, babelHelpers.defineProperty(_ref2, 'Webkit' + capitalizeString(property), webkitOutput), babelHelpers.defineProperty(_ref2, property, outputValue), _ref2;
	    }
	  }
	
	  function prefixValue(value) {
	    if (isPrefixedValue(value)) {
	      return value;
	    }
	
	    // only split multi values, not cubic beziers
	    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	    // iterate each single value and check for transitioned properties
	    // that need to be prefixed as well
	    multipleValues.forEach(function (val, index) {
	      multipleValues[index] = Object.keys(prefixProps).reduce(function (out, prefix) {
	        var dashCasePrefix = '-' + prefix.toLowerCase() + '-';
	
	        Object.keys(prefixProps[prefix]).forEach(function (prop) {
	          var dashCaseProperty = hyphenateStyleName(prop);
	
	          if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	            // join all prefixes and create a new value
	            out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	          }
	        });
	        return out;
	      }, val);
	    });
	
	    return multipleValues.join(',');
	  }
	
	  var alternativeValues = {
	    'space-around': 'distribute',
	    'space-between': 'justify',
	    'flex-start': 'start',
	    'flex-end': 'end'
	  };
	  var alternativeProps = {
	    alignContent: 'msFlexLinePack',
	    alignSelf: 'msFlexItemAlign',
	    alignItems: 'msFlexAlign',
	    justifyContent: 'msFlexPack',
	    order: 'msFlexOrder',
	    flexGrow: 'msFlexPositive',
	    flexShrink: 'msFlexNegative',
	    flexBasis: 'msPreferredSize'
	  };
	
	  function flexboxIE(property, value) {
	    if (alternativeProps[property]) {
	      return babelHelpers.defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	
	  var alternativeValues$1 = {
	    'space-around': 'justify',
	    'space-between': 'justify',
	    'flex-start': 'start',
	    'flex-end': 'end',
	    'wrap-reverse': 'multiple',
	    wrap: 'multiple'
	  };
	
	  var alternativeProps$1 = {
	    alignItems: 'WebkitBoxAlign',
	    justifyContent: 'WebkitBoxPack',
	    flexWrap: 'WebkitBoxLines'
	  };
	
	  function flexboxOld(property, value) {
	    if (property === 'flexDirection' && typeof value === 'string') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (alternativeProps$1[property]) {
	      return babelHelpers.defineProperty({}, alternativeProps$1[property], alternativeValues$1[value] || value);
	    }
	  }
	
	  var plugins = [position, calc, cursor, sizing, gradient, transition, flexboxIE, flexboxOld, flex];
	
	  /**
	   * Returns a prefixed version of the style object using all vendor prefixes
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */
	  function prefixAll(styles) {
	    Object.keys(styles).forEach(function (property) {
	      var value = styles[property];
	      if (value instanceof Object && !Array.isArray(value)) {
	        // recurse through nested style objects
	        styles[property] = prefixAll(value);
	      } else {
	        Object.keys(prefixProps).forEach(function (prefix) {
	          var properties = prefixProps[prefix];
	          // add prefixes if needed
	          if (properties[property]) {
	            styles[prefix + capitalizeString(property)] = value;
	          }
	        });
	      }
	    });
	
	    Object.keys(styles).forEach(function (property) {
	      [].concat(styles[property]).forEach(function (value, index) {
	        // resolve every special plugins
	        plugins.forEach(function (plugin) {
	          return assignStyles(styles, plugin(property, value));
	        });
	      });
	    });
	
	    return sortPrefixedStyle(styles);
	  }
	
	  function assignStyles(base) {
	    var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    Object.keys(extend).forEach(function (property) {
	      var baseValue = base[property];
	      if (Array.isArray(baseValue)) {
	        [].concat(extend[property]).forEach(function (value) {
	          var valueIndex = baseValue.indexOf(value);
	          if (valueIndex > -1) {
	            base[property].splice(valueIndex, 1);
	          }
	          base[property].push(value);
	        });
	      } else {
	        base[property] = extend[property];
	      }
	    });
	  }
	
	  return prefixAll;
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PluginSet = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.fallbacks = fallbacks;
	exports.prefixes = prefixes;
	
	var _CSSPropertyOperations = __webpack_require__(11);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var isDev = function (x) {
	  return x === 'development' || !x;
	}(process.env.NODE_ENV);
	
	var PluginSet = exports.PluginSet = function () {
	  function PluginSet() {
	    _classCallCheck(this, PluginSet);
	
	    for (var _len = arguments.length, initial = Array(_len), _key = 0; _key < _len; _key++) {
	      initial[_key] = arguments[_key];
	    }
	
	    this.fns = initial || [];
	  }
	
	  _createClass(PluginSet, [{
	    key: 'add',
	    value: function add() {
	      var _this = this;
	
	      for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        fns[_key2] = arguments[_key2];
	      }
	
	      fns.forEach(function (fn) {
	        if (_this.fns.indexOf(fn) >= 0) {
	          if (isDev) {
	            console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
	          }
	        } else {
	          _this.fns = [fn].concat(_toConsumableArray(_this.fns));
	        }
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove(fn) {
	      this.fns = this.fns.filter(function (x) {
	        return x !== fn;
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.fns = [];
	    }
	  }, {
	    key: 'transform',
	    value: function transform(o) {
	      return this.fns.reduce(function (o, fn) {
	        return fn(o);
	      }, o);
	    }
	  }]);
	
	  return PluginSet;
	}();
	
	function fallbacks(node) {
	  var hasArray = Object.keys(node.style).map(function (x) {
	    return Array.isArray(node.style[x]);
	  }).indexOf(true) >= 0;
	  if (hasArray) {
	    var _ret = function () {
	      var style = node.style,
	          rest = _objectWithoutProperties(node, ['style']);
	
	      var flattened = Object.keys(style).reduce(function (o, key) {
	        o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
	        return o;
	      }, {});
	      // todo - 
	      // flatten arrays which haven't been flattened yet 
	      return {
	        v: _extends({ style: flattened }, rest)
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return node;
	}
	
	var prefixAll = __webpack_require__(56);
	
	function prefixes(_ref) {
	  var style = _ref.style,
	      rest = _objectWithoutProperties(_ref, ['style']);
	
	  return _extends({ style: prefixAll(style) }, rest);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StyleSheet = StyleSheet;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* 
	
	high performance StyleSheet for css-in-js systems 
	
	- uses multiple style tags behind the scenes for millions of rules 
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side 
	
	
	// usage
	
	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()
	
	styleSheet.inject() 
	- 'injects' the stylesheet into the page (or into memory if on server)
	
	styleSheet.insert('#box { border: 1px solid red; }') 
	- appends a css rule into the stylesheet 
	
	styleSheet.flush() 
	- empties the stylesheet of all its contents
	
	
	*/
	
	function last(arr) {
	  return arr[arr.length - 1];
	}
	
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    return tag.sheet;
	  }
	
	  // this weirdness brought to you by firefox 
	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      return document.styleSheets[i];
	    }
	  }
	}
	
	var isBrowser = typeof window !== 'undefined';
	var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
	var isTest = process.env.NODE_ENV === 'test';
	
	var oldIE = function () {
	  if (isBrowser) {
	    var div = document.createElement('div');
	    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
	    return div.getElementsByTagName('i').length === 1;
	  }
	}();
	
	function makeStyleTag() {
	  var tag = document.createElement('style');
	  tag.type = 'text/css';
	  tag.appendChild(document.createTextNode(''));
	  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
	  return tag;
	}
	
	function StyleSheet() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$speedy = _ref.speedy,
	      speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
	      _ref$maxLength = _ref.maxLength,
	      maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;
	
	  this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
	  this.sheet = undefined;
	  this.tags = [];
	  this.maxLength = maxLength;
	  this.ctr = 0;
	}
	
	Object.assign(StyleSheet.prototype, {
	  getSheet: function getSheet() {
	    return sheetForTag(last(this.tags));
	  },
	  inject: function inject() {
	    var _this = this;
	
	    if (this.injected) {
	      throw new Error('already injected stylesheet!');
	    }
	    if (isBrowser) {
	      this.tags[0] = makeStyleTag();
	    } else {
	      // server side 'polyfill'. just enough behavior to be useful.
	      this.sheet = {
	        cssRules: [],
	        insertRule: function insertRule(rule) {
	          // enough 'spec compliance' to be able to extract the rules later  
	          // in other words, just the cssText field 
	          _this.sheet.cssRules.push({ cssText: rule });
	        }
	      };
	    }
	    this.injected = true;
	  },
	  speedy: function speedy(bool) {
	    if (this.ctr !== 0) {
	      throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
	    }
	    this.isSpeedy = !!bool;
	  },
	  _insert: function _insert(rule) {
	    // this weirdness for perf, and chrome's weird bug 
	    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	    try {
	      var sheet = this.getSheet();
	      sheet.insertRule(rule, sheet.cssRules.length); // todo - correct index here     
	    } catch (e) {
	      if (isDev) {
	        // might need beter dx for this 
	        console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
	      }
	    }
	  },
	  insert: function insert(rule) {
	
	    if (isBrowser) {
	      // this is the ultrafast version, works across browsers 
	      if (this.isSpeedy && this.getSheet().insertRule) {
	        this._insert(rule);
	      }
	      // more browser weirdness. I don't even know    
	      // else if(this.tags.length > 0 && this.tags::last().styleSheet) {      
	      //   this.tags::last().styleSheet.cssText+= rule
	      // }
	      else {
	          last(this.tags).appendChild(document.createTextNode(rule));
	        }
	    } else {
	      // server side is pretty simple         
	      this.sheet.insertRule(rule);
	    }
	
	    this.ctr++;
	    if (isBrowser && this.ctr % this.maxLength === 0) {
	      this.tags.push(makeStyleTag());
	    }
	    return this.ctr - 1;
	  },
	
	  // commenting this out till we decide on v3's decision 
	  // _replace(index, rule) {
	  //   // this weirdness for perf, and chrome's weird bug 
	  //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	  //   try {  
	  //     let sheet = this.getSheet()        
	  //     sheet.deleteRule(index) // todo - correct index here     
	  //     sheet.insertRule(rule, index)
	  //   }
	  //   catch(e) {
	  //     if(isDev) {
	  //       // might need beter dx for this 
	  //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
	  //     }          
	  //   }          
	
	  // }
	  // replace(index, rule) {
	  //   if(isBrowser) {
	  //     if(this.isSpeedy && this.getSheet().insertRule) {
	  //       this._replace(index, rule)
	  //     }
	  //     else {
	  //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
	  //       let _index = (index % this.maxLength) + 1
	  //       let tag = this.tags[_slot]
	  //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
	  //     }
	  //   }
	  //   else {
	  //     let rules = this.sheet.cssRules
	  //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
	  //   }
	  // }
	  delete: function _delete(index) {
	    // we insert a blank rule when 'deleting' so previously returned indexes remain stable
	    return this.replace(index, '');
	  },
	  flush: function flush() {
	    if (isBrowser) {
	      this.tags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	      });
	      this.tags = [];
	      this.sheet = null;
	      this.ctr = 0;
	      // todo - look for remnants in document.styleSheets
	    } else {
	      // simpler on server 
	      this.sheet.cssRules = [];
	    }
	    this.injected = false;
	  },
	  rules: function rules() {
	    if (!isBrowser) {
	      return this.sheet.cssRules;
	    }
	    var arr = [];
	    this.tags.forEach(function (tag) {
	      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
	    });
	    return arr;
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  XmlEntities: __webpack_require__(61),
	  Html4Entities: __webpack_require__(60),
	  Html5Entities: __webpack_require__(13),
	  AllHtmlEntities: __webpack_require__(13)
	};


/***/ },
/* 60 */
/***/ function(module, exports) {

	var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'Oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'oelig', 'oelig', 'scaron', 'scaron', 'yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
	var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
	
	var alphaIndex = {};
	var numIndex = {};
	
	var i = 0;
	var length = HTML_ALPHA.length;
	while (i < length) {
	    var a = HTML_ALPHA[i];
	    var c = HTML_CODES[i];
	    alphaIndex[a] = String.fromCharCode(c);
	    numIndex[c] = a;
	    i++;
	}
	
	/**
	 * @constructor
	 */
	function Html4Entities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
	        var chr;
	        if (entity.charAt(0) === "#") {
	            var code = entity.charAt(1).toLowerCase() === 'x' ?
	                parseInt(entity.substr(2), 16) :
	                parseInt(entity.substr(1));
	
	            if (!(isNaN(code) || code < -32768 || code > 65535)) {
	                chr = String.fromCharCode(code);
	            }
	        } else {
	            chr = alphaIndex[entity];
	        }
	        return chr || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.decode = function(str) {
	    return new Html4Entities().decode(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encode = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var alpha = numIndex[str.charCodeAt(i)];
	        result += alpha ? "&" + alpha + ";" : str.charAt(i);
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encode = function(str) {
	    return new Html4Entities().encode(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var cc = str.charCodeAt(i);
	        var alpha = numIndex[cc];
	        if (alpha) {
	            result += "&" + alpha + ";";
	        } else if (cc < 32 || cc > 126) {
	            result += "&#" + cc + ";";
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encodeNonUTF = function(str) {
	    return new Html4Entities().encodeNonUTF(str);
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.prototype.encodeNonASCII = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	Html4Entities.encodeNonASCII = function(str) {
	    return new Html4Entities().encodeNonASCII(str);
	};
	
	module.exports = Html4Entities;


/***/ },
/* 61 */
/***/ function(module, exports) {

	var ALPHA_INDEX = {
	    '&lt': '<',
	    '&gt': '>',
	    '&quot': '"',
	    '&apos': '\'',
	    '&amp': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&apos;': '\'',
	    '&amp;': '&'
	};
	
	var CHAR_INDEX = {
	    60: 'lt',
	    62: 'gt',
	    34: 'quot',
	    39: 'apos',
	    38: 'amp'
	};
	
	var CHAR_S_INDEX = {
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    '\'': '&apos;',
	    '&': '&amp;'
	};
	
	/**
	 * @constructor
	 */
	function XmlEntities() {}
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/<|>|"|'|&/g, function(s) {
	        return CHAR_S_INDEX[s];
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encode = function(str) {
	    return new XmlEntities().encode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.decode = function(str) {
	    if (str.length === 0) {
	        return '';
	    }
	    return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
	        if (s.charAt(1) === '#') {
	            var code = s.charAt(2).toLowerCase() === 'x' ?
	                parseInt(s.substr(3), 16) :
	                parseInt(s.substr(2));
	
	            if (isNaN(code) || code < -32768 || code > 65535) {
	                return '';
	            }
	            return String.fromCharCode(code);
	        }
	        return ALPHA_INDEX[s] || s;
	    });
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.decode = function(str) {
	    return new XmlEntities().decode(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encodeNonUTF = function(str) {
	    var strLength = str.length;
	    if (strLength === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLength) {
	        var c = str.charCodeAt(i);
	        var alpha = CHAR_INDEX[c];
	        if (alpha) {
	            result += "&" + alpha + ";";
	            i++;
	            continue;
	        }
	        if (c < 32 || c > 126) {
	            result += '&#' + c + ';';
	        } else {
	            result += str.charAt(i);
	        }
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encodeNonUTF = function(str) {
	    return new XmlEntities().encodeNonUTF(str);
	 };
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	XmlEntities.prototype.encodeNonASCII = function(str) {
	    var strLenght = str.length;
	    if (strLenght === 0) {
	        return '';
	    }
	    var result = '';
	    var i = 0;
	    while (i < strLenght) {
	        var c = str.charCodeAt(i);
	        if (c <= 255) {
	            result += str[i++];
	            continue;
	        }
	        result += '&#' + c + ';';
	        i++;
	    }
	    return result;
	};
	
	/**
	 * @param {String} str
	 * @returns {String}
	 */
	 XmlEntities.encodeNonASCII = function(str) {
	    return new XmlEntities().encodeNonASCII(str);
	 };
	
	module.exports = XmlEntities;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(31);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _keys = __webpack_require__(30);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(29);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _clientOverlayFalseReloadTrue = __webpack_require__(70);
	
	var _clientOverlayFalseReloadTrue2 = _interopRequireDefault(_clientOverlayFalseReloadTrue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var handlers = {
	  reload: function reload(route) {
	    if (route === '/_error') {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(next.router.components)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var r = _step.value;
	          var Component = next.router.components[r].Component;
	
	          if (Component.__route === '/_error-debug') {
	            // reload all '/_error-debug'
	            // which are expected to be errors of '/_error' routes
	            next.router.reload(r);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return;
	    }
	
	    next.router.reload(route);
	  },
	  change: function change(route) {
	    var _ref = next.router.components[route] || {},
	        Component = _ref.Component;
	
	    if (Component && Component.__route === '/_error-debug') {
	      // reload to recover from runtime errors
	      next.router.reload(route);
	    }
	  }
	}; /* global next */
	
	
	_clientOverlayFalseReloadTrue2.default.subscribe(function (obj) {
	  var fn = handlers[obj.action];
	  if (fn) {
	    var data = obj.data || [];
	    fn.apply(undefined, (0, _toConsumableArray3.default)(data));
	  } else {
	    throw new Error('Unexpected action ' + obj.action);
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _head = __webpack_require__(87);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _glamor = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  title: _react.PropTypes.string.isRequired,
	  description: _react.PropTypes.string
	};
	
	var HeadBloc = function HeadBloc(props) {
	  return _react2.default.createElement(
	    _head2.default,
	    null,
	    _react2.default.createElement(
	      'title',
	      null,
	      props.title
	    ),
	    _react2.default.createElement('meta', { charSet: 'utf-8' }),
	    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
	    _react2.default.createElement('meta', { name: 'description', content: props.description }),
	    _react2.default.createElement('meta', { name: 'keywords', content: 'guillaume, kolly, frontend, backend, full stack, developer, web, javascript, reactJS, Meteor, Js, NextJS, Webpack' }),
	    _react2.default.createElement('meta', { name: 'copyright', content: 'Guillaume Kolly' })
	  );
	};
	
	_glamor.css.global('html, body', {
	  padding: '0',
	  margin: '0',
	  border: '0',
	  fontFamily: 'sans-serif',
	  lineHeight: '1.15',
	  fontSize: '1em',
	  fontWeight: '300',
	  fontStyle: 'normal',
	  textDecoration: 'none',
	  textShadow: '0',
	  WebkitFontSmoothing: 'antialiased',
	  MozOsxFontSmoothing: 'grayscale'
	});
	
	HeadBloc.propTypes = propTypes;
	exports.default = HeadBloc;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInRpdGxlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiSGVhZEJsb2MiLCJwcm9wcyIsImdsb2JhbCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXIiLCJmb250RmFtaWx5IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsInRleHREZWNvcmF0aW9uIiwidGV4dFNoYWRvdyIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJNb3pPc3hGb250U21vb3RoaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxTQUFjLGlCQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRWhCQyxlQUFjLGlCQUFVRjtBQUZSLENBQWxCOztBQUtBLElBQU1HLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFEO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBUUEsWUFBTUw7QUFBZCxLQURGO0FBRUUsNENBQU0sU0FBUSxPQUFkLEdBRkY7QUFHRSw0Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSx1Q0FBOUIsR0FIRjtBQUlFLDRDQUFNLE1BQUssYUFBWCxFQUF5QixTQUFTSyxNQUFNRixXQUF4QyxHQUpGO0FBS0UsNENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsbUhBQTlCLEdBTEY7QUFNRSw0Q0FBTSxNQUFLLFdBQVgsRUFBdUIsU0FBUSxpQkFBL0I7QUFORixHQURlO0FBQUEsQ0FBakI7O0FBVUEsWUFBSUcsTUFBSixDQUFXLFlBQVgsRUFBMEI7QUFDeEJDLFdBQVMsR0FEZTtBQUV4QkMsVUFBUSxHQUZnQjtBQUd4QkMsVUFBUSxHQUhnQjtBQUl4QkMsY0FBWSxZQUpZO0FBS3hCQyxjQUFZLE1BTFk7QUFNeEJDLFlBQVUsS0FOYztBQU94QkMsY0FBWSxLQVBZO0FBUXhCQyxhQUFXLFFBUmE7QUFTeEJDLGtCQUFnQixNQVRRO0FBVXhCQyxjQUFZLEdBVlk7QUFXeEJDLHVCQUFxQixhQVhHO0FBWXhCQyx1QkFBcUI7QUFaRyxDQUExQjs7QUFlQWQsU0FBU0wsU0FBVCxHQUFxQkEsU0FBckI7a0JBQ2VLLFEiLCJmaWxlIjoiSGVhZEJsb2MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogIFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgSGVhZEJsb2MgPSAocHJvcHMpID0+XG4gIDxIZWFkPlxuICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XG4gICAgPG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9J2d1aWxsYXVtZSwga29sbHksIGZyb250ZW5kLCBiYWNrZW5kLCBmdWxsIHN0YWNrLCBkZXZlbG9wZXIsIHdlYiwgamF2YXNjcmlwdCwgcmVhY3RKUywgTWV0ZW9yLCBKcywgTmV4dEpTLCBXZWJwYWNrJyAvPlxuICAgIDxtZXRhIG5hbWU9J2NvcHlyaWdodCcgY29udGVudD0nR3VpbGxhdW1lIEtvbGx5JyAvPlxuICA8L0hlYWQ+XG5cbmNzcy5nbG9iYWwoJ2h0bWwsIGJvZHknLCAge1xuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICBib3JkZXI6ICcwJyxcbiAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICBsaW5lSGVpZ2h0OiAnMS4xNScsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgZm9udFdlaWdodDogJzMwMCcsXG4gIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIHRleHRTaGFkb3c6ICcwJyxcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgTW96T3N4Rm9udFNtb290aGluZzogJ2dyYXlzY2FsZScsXG59KVxuXG5IZWFkQmxvYy5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IEhlYWRCbG9jXG4iXX0=

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var my_theme = {
	  colors: {
	    text: '#555',
	    light_text: '#a4a4a4',
	    time_line: '#CCD1D9',
	    time_line_title: '#666',
	    black: '#242424',
	    white: '#fff',
	    trans_primary: 'rgba(111, 209, 189, 0.5)',
	    primary: 'rgba(99, 231, 175, 1)',
	    trans_secondary: 'rgba(255, 243, 133, 0.5)',
	    secondary: 'rgba(255, 243, 133, 1)'
	  }
	};
	
	exports.default = my_theme;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvdGhlbWUuanMiXSwibmFtZXMiOlsibXlfdGhlbWUiLCJjb2xvcnMiLCJ0ZXh0IiwibGlnaHRfdGV4dCIsInRpbWVfbGluZSIsInRpbWVfbGluZV90aXRsZSIsImJsYWNrIiwid2hpdGUiLCJ0cmFuc19wcmltYXJ5IiwicHJpbWFyeSIsInRyYW5zX3NlY29uZGFyeSIsInNlY29uZGFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxXQUFXO0FBQ2ZDLFVBQVE7QUFDTkMsVUFBa0IsTUFEWjtBQUVOQyxnQkFBa0IsU0FGWjtBQUdOQyxlQUFrQixTQUhaO0FBSU5DLHFCQUFrQixNQUpaO0FBS05DLFdBQWtCLFNBTFo7QUFNTkMsV0FBa0IsTUFOWjtBQU9OQyxtQkFBa0IsMEJBUFo7QUFRTkMsYUFBa0IsdUJBUlo7QUFTTkMscUJBQWtCLDBCQVRaO0FBVU5DLGVBQWtCO0FBVlo7QUFETyxDQUFqQjs7a0JBZWVYLFEiLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlfdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIHRleHQgICAgICAgICAgICA6ICcjNTU1JyxcbiAgICBsaWdodF90ZXh0ICAgICAgOiAnI2E0YTRhNCcsXG4gICAgdGltZV9saW5lICAgICAgIDogJyNDQ0QxRDknLFxuICAgIHRpbWVfbGluZV90aXRsZSA6ICcjNjY2JyxcbiAgICBibGFjayAgICAgICAgICAgOiAnIzI0MjQyNCcsXG4gICAgd2hpdGUgICAgICAgICAgIDogJyNmZmYnLFxuICAgIHRyYW5zX3ByaW1hcnkgICA6ICdyZ2JhKDExMSwgMjA5LCAxODksIDAuNSknLFxuICAgIHByaW1hcnkgICAgICAgICA6ICdyZ2JhKDk5LCAyMzEsIDE3NSwgMSknLFxuICAgIHRyYW5zX3NlY29uZGFyeSA6ICdyZ2JhKDI1NSwgMjQzLCAxMzMsIDAuNSknLFxuICAgIHNlY29uZGFyeSAgICAgICA6ICdyZ2JhKDI1NSwgMjQzLCAxMzMsIDEpJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXlfdGhlbWVcbiJdfQ==

/***/ },
/* 65 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 66 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(65);
	exports.encode = exports.stringify = __webpack_require__(66);


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(27)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-env browser*/
	
	var clientOverlay = document.createElement('div');
	var styles = {
	  background: 'rgba(0,0,0,0.85)',
	  color: '#E8E8E8',
	  lineHeight: '1.2',
	  whiteSpace: 'pre',
	  fontFamily: 'Menlo, Consolas, monospace',
	  fontSize: '13px',
	  position: 'fixed',
	  zIndex: 9999,
	  padding: '10px',
	  left: 0,
	  right: 0,
	  top: 0,
	  bottom: 0,
	  overflow: 'auto',
	  dir: 'ltr'
	};
	for (var key in styles) {
	  clientOverlay.style[key] = styles[key];
	}
	
	var ansiHTML = __webpack_require__(77);
	var colors = {
	  reset: ['transparent', 'transparent'],
	  black: '181818',
	  red: 'E36049',
	  green: 'B3CB74',
	  yellow: 'FFD080',
	  blue: '7CAFC2',
	  magenta: '7FACCA',
	  cyan: 'C3C2EF',
	  lightgrey: 'EBE7E3',
	  darkgrey: '6D7891'
	};
	ansiHTML.setColors(colors);
	
	var Entities = __webpack_require__(59).AllHtmlEntities;
	var entities = new Entities();
	
	exports.showProblems =
	function showProblems(type, lines) {
	  clientOverlay.innerHTML = '';
	  lines.forEach(function(msg) {
	    msg = ansiHTML(entities.encode(msg));
	    var div = document.createElement('div');
	    div.style.marginBottom = '26px';
	    div.innerHTML = problemType(type) + ' in ' + msg;
	    clientOverlay.appendChild(div);
	  });
	  if (document.body) {
	    document.body.appendChild(clientOverlay);
	  }
	};
	
	exports.clear =
	function clear() {
	  if (document.body && clientOverlay.parentNode) {
	    document.body.removeChild(clientOverlay);
	  }
	};
	
	var problemColors = {
	  errors: colors.red,
	  warnings: colors.yellow
	};
	
	function problemType (type) {
	  var color = problemColors[type] || colors.red;
	  return (
	    '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' +
	      type.slice(0, -1).toUpperCase() +
	    '</span>'
	  );
	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
	/*global __resourceQuery __webpack_public_path__*/
	
	var options = {
	  path: "/__webpack_hmr",
	  timeout: 20 * 1000,
	  overlay: true,
	  reload: false,
	  log: true,
	  warn: true
	};
	if (true) {
	  var querystring = __webpack_require__(67);
	  var overrides = querystring.parse(__resourceQuery.slice(1));
	  if (overrides.path) options.path = overrides.path;
	  if (overrides.timeout) options.timeout = overrides.timeout;
	  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
	  if (overrides.reload) options.reload = overrides.reload !== 'false';
	  if (overrides.noInfo && overrides.noInfo !== 'false') {
	    options.log = false;
	  }
	  if (overrides.quiet && overrides.quiet !== 'false') {
	    options.log = false;
	    options.warn = false;
	  }
	  if (overrides.dynamicPublicPath) {
	    options.path = __webpack_require__.p + options.path;
	  }
	}
	
	if (typeof window === 'undefined') {
	  // do nothing
	} else if (typeof window.EventSource === 'undefined') {
	  console.warn(
	    "webpack-hot-middleware's client requires EventSource to work. " +
	    "You should include a polyfill if you want to support this browser: " +
	    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
	  );
	} else {
	  connect(window.EventSource);
	}
	
	function connect(EventSource) {
	  var source = new EventSource(options.path);
	  var lastActivity = new Date();
	
	  source.onopen = handleOnline;
	  source.onmessage = handleMessage;
	  source.onerror = handleDisconnect;
	
	  var timer = setInterval(function() {
	    if ((new Date() - lastActivity) > options.timeout) {
	      handleDisconnect();
	    }
	  }, options.timeout / 2);
	
	  function handleOnline() {
	    if (options.log) console.log("[HMR] connected");
	    lastActivity = new Date();
	  }
	
	  function handleMessage(event) {
	    lastActivity = new Date();
	    if (event.data == "\uD83D\uDC93") {
	      return;
	    }
	    try {
	      processMessage(JSON.parse(event.data));
	    } catch (ex) {
	      if (options.warn) {
	        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
	      }
	    }
	  }
	
	  function handleDisconnect() {
	    clearInterval(timer);
	    source.close();
	    setTimeout(function() { connect(EventSource); }, options.timeout);
	  }
	
	}
	
	var reporter;
	// the reporter needs to be a singleton on the page
	// in case the client is being used by mutliple bundles
	// we only want to report once.
	// all the errors will go to all clients
	var singletonKey = '__webpack_hot_middleware_reporter__';
	if (typeof window !== 'undefined' && !window[singletonKey]) {
	  reporter = window[singletonKey] = createReporter();
	}
	
	function createReporter() {
	  var strip = __webpack_require__(68);
	
	  var overlay;
	  if (typeof document !== 'undefined' && options.overlay) {
	    overlay = __webpack_require__(69);
	  }
	
	  return {
	    problems: function(type, obj) {
	      if (options.warn) {
	        console.warn("[HMR] bundle has " + type + ":");
	        obj[type].forEach(function(msg) {
	          console.warn("[HMR] " + strip(msg));
	        });
	      }
	      if (overlay && type !== 'warnings') overlay.showProblems(type, obj[type]);
	    },
	    success: function() {
	      if (overlay) overlay.clear();
	    },
	    useCustomOverlay: function(customOverlay) {
	      overlay = customOverlay;
	    }
	  };
	}
	
	var processUpdate = __webpack_require__(71);
	
	var customHandler;
	var subscribeAllHandler;
	function processMessage(obj) {
	  switch(obj.action) {
	    case "building":
	      if (options.log) console.log("[HMR] bundle rebuilding");
	      break;
	    case "built":
	      if (options.log) {
	        console.log(
	          "[HMR] bundle " + (obj.name ? obj.name + " " : "") +
	          "rebuilt in " + obj.time + "ms"
	        );
	      }
	      // fall through
	    case "sync":
	      if (obj.errors.length > 0) {
	        if (reporter) reporter.problems('errors', obj);
	      } else {
	        if (reporter) {
	          if (obj.warnings.length > 0) reporter.problems('warnings', obj);
	          reporter.success();
	        }
	        processUpdate(obj.hash, obj.modules, options);
	      }
	      break;
	    default:
	      if (customHandler) {
	        customHandler(obj);
	      }
	  }
	
	  if (subscribeAllHandler) {
	    subscribeAllHandler(obj);
	  }
	}
	
	if (module) {
	  module.exports = {
	    subscribeAll: function subscribeAll(handler) {
	      subscribeAllHandler = handler;
	    },
	    subscribe: function subscribe(handler) {
	      customHandler = handler;
	    },
	    useCustomOverlay: function useCustomOverlay(customOverlay) {
	      if (reporter) reporter.useCustomOverlay(customOverlay);
	    }
	  };
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, "?overlay=false&reload=true", __webpack_require__(72)(module)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Based heavily on https://github.com/webpack/webpack/blob/
	 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
	 * Original copyright Tobias Koppers @sokra (MIT license)
	 */
	
	/* global window __webpack_hash__ */
	
	if (false) {
	  throw new Error("[HMR] Hot Module Replacement is disabled.");
	}
	
	var hmrDocsUrl = "http://webpack.github.io/docs/hot-module-replacement-with-webpack.html"; // eslint-disable-line max-len
	
	var lastHash;
	var failureStatuses = { abort: 1, fail: 1 };
	var applyOptions = { ignoreUnaccepted: true };
	
	function upToDate(hash) {
	  if (hash) lastHash = hash;
	  return lastHash == __webpack_require__.h();
	}
	
	module.exports = function(hash, moduleMap, options) {
	  var reload = options.reload;
	  if (!upToDate(hash) && module.hot.status() == "idle") {
	    if (options.log) console.log("[HMR] Checking for updates on the server...");
	    check();
	  }
	
	  function check() {
	    var cb = function(err, updatedModules) {
	      if (err) return handleError(err);
	
	      if(!updatedModules) {
	        if (options.warn) {
	          console.warn("[HMR] Cannot find update (Full reload needed)");
	          console.warn("[HMR] (Probably because of restarting the server)");
	        }
	        performReload();
	        return null;
	      }
	
	      var applyCallback = function(applyErr, renewedModules) {
	        if (applyErr) return handleError(applyErr);
	
	        if (!upToDate()) check();
	
	        logUpdates(updatedModules, renewedModules);
	      };
	
	      var applyResult = module.hot.apply(applyOptions, applyCallback);
	      // webpack 2 promise
	      if (applyResult && applyResult.then) {
	        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
	        applyResult.then(function(outdatedModules) {
	          applyCallback(null, outdatedModules);
	        });
	        applyResult.catch(applyCallback);
	      }
	
	    };
	
	    var result = module.hot.check(false, cb);
	    // webpack 2 promise
	    if (result && result.then) {
	        result.then(function(updatedModules) {
	            cb(null, updatedModules);
	        });
	        result.catch(cb);
	    }
	  }
	
	  function logUpdates(updatedModules, renewedModules) {
	    var unacceptedModules = updatedModules.filter(function(moduleId) {
	      return renewedModules && renewedModules.indexOf(moduleId) < 0;
	    });
	
	    if(unacceptedModules.length > 0) {
	      if (options.warn) {
	        console.warn(
	          "[HMR] The following modules couldn't be hot updated: " +
	          "(Full reload needed)\n" +
	          "This is usually because the modules which have changed " +
	          "(and their parents) do not know how to hot reload themselves. " +
	          "See " + hmrDocsUrl + " for more details."
	        );
	        unacceptedModules.forEach(function(moduleId) {
	          console.warn("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	      performReload();
	      return;
	    }
	
	    if (options.log) {
	      if(!renewedModules || renewedModules.length === 0) {
	        console.log("[HMR] Nothing hot updated.");
	      } else {
	        console.log("[HMR] Updated modules:");
	        renewedModules.forEach(function(moduleId) {
	          console.log("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	
	      if (upToDate()) {
	        console.log("[HMR] App is up to date.");
	      }
	    }
	  }
	
	  function handleError(err) {
	    if (module.hot.status() in failureStatuses) {
	      if (options.warn) {
	        console.warn("[HMR] Cannot check for update (Full reload needed)");
	        console.warn("[HMR] " + err.stack || err.message);
	      }
	      performReload();
	      return;
	    }
	    if (options.warn) {
	      console.warn("[HMR] Update check failed: " + err.stack || err.message);
	    }
	  }
	
	  function performReload() {
	    if (reload) {
	      if (options.warn) console.warn("[HMR] Reloading page");
	      window.location.reload();
	    }
	  }
	};


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("next/link");

/***/ },
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(14);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(15);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(16);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(18);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(17);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactParticlesJs = __webpack_require__(86);
	
	var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);
	
	var _particles = __webpack_require__(85);
	
	var _particles2 = _interopRequireDefault(_particles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FullBackground = function (_React$Component) {
	  (0, _inherits3.default)(FullBackground, _React$Component);
	
	  function FullBackground() {
	    (0, _classCallCheck3.default)(this, FullBackground);
	    return (0, _possibleConstructorReturn3.default)(this, (FullBackground.__proto__ || (0, _getPrototypeOf2.default)(FullBackground)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(FullBackground, [{
	    key: 'render',
	    value: function render() {
	      var style = this.props.style;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: style,
	          style: {
	            position: 'fixed',
	            width: '100%',
	            height: '100vh',
	            top: '0',
	            left: '0'
	          } },
	        _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: _particles2.default })
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function getInitialProps() {
	      return { particles: _particles2.default };
	    }
	  }]);
	  return FullBackground;
	}(_react2.default.Component);
	
	FullBackground.propTypes = {
	  style: _react.PropTypes.object
	};
	exports.default = FullBackground;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiRnVsbEJhY2tncm91bmQiLCJzdHlsZSIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJwYXJ0aWNsZXMiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7NkJBVVY7QUFBQSxVQUNDQyxLQURELEdBQ1csS0FBS0MsS0FEaEIsQ0FDQ0QsS0FERDs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXQSxLQUFoQjtBQUNFLGlCQUFPO0FBQ0xFLHNCQUFVLE9BREw7QUFFTEMsbUJBQU8sTUFGRjtBQUdMQyxvQkFBUSxPQUhIO0FBSUxDLGlCQUFLLEdBSkE7QUFLTEMsa0JBQU07QUFMRCxXQURUO0FBUUUsb0VBQVcsUUFBTyxPQUFsQixFQUEwQixPQUFNLE9BQWhDLEVBQXdDLDJCQUF4QztBQVJGLE9BREY7QUFZRDs7O3NDQW5CeUI7QUFDeEIsYUFBTyxFQUFFQyw4QkFBRixFQUFQO0FBQ0Q7OztFQVJ5QyxnQkFBTUMsUzs7QUFBN0JULGMsQ0FFWlUsUyxHQUFZO0FBQ2pCVCxTQUFPLGlCQUFVVTtBQURBLEM7a0JBRkFYLGMiLCJmaWxlIjoiRnVsbEJhY2tncm91bmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxCYWNrZ3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4geyBwYXJ0aWNsZXM6IHBhcnRpY2xlcyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIH19ID5cbiAgICAgICAgPFBhcnRpY2xlcyBoZWlnaHQ9XCIxMDB2aFwiIHdpZHRoPVwiMTAwdndcIiBwYXJhbXM9e3BhcnRpY2xlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19

/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var particles = {
	  particles: {
	    number: {
	      value: 80,
	      density: {
	        enable: true,
	        value_area: 800
	      }
	    },
	    color: {
	      value: "#000"
	    },
	    opacity: {
	      value: 0.5,
	      random: false,
	      anim: {
	        enable: false,
	        speed: 1,
	        opacity_min: 0.1,
	        sync: false
	      }
	    },
	    size: {
	      value: 3,
	      random: true,
	      anim: {
	        enable: false,
	        speed: 40,
	        size_min: 0.1,
	        sync: false
	      }
	    },
	    line_linked: {
	      enable: true,
	      distance: 150,
	      color: "#000",
	      opacity: 0.4,
	      width: 1
	    },
	    move: {
	      enable: true,
	      speed: 6,
	      direction: "none",
	      random: false,
	      straight: false,
	      out_mode: "out",
	      bounce: false,
	      attract: {
	        enable: false,
	        rotateX: 600,
	        rotateY: 1200
	      }
	    }
	  },
	  interactivity: {
	    detect_on: "window",
	    events: {
	      onhover: {
	        enable: true,
	        mode: "repulse"
	      },
	      onclick: {
	        enable: true,
	        mode: "push"
	      },
	      resize: true
	    },
	    modes: {
	      grab: {
	        distance: 400,
	        line_linked: {
	          opacity: 1
	        }
	      },
	      bubble: {
	        distance: 400,
	        size: 40,
	        duration: 2,
	        opacity: 8,
	        speed: 3
	      },
	      repulse: {
	        distance: 200,
	        duration: 0.4
	      },
	      push: {
	        particles_nb: 4
	      },
	      remove: {
	        particles_nb: 2
	      }
	    }
	  },
	  retina_detect: false
	};
	
	exports.default = particles;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvcGFydGljbGVzLmpzIl0sIm5hbWVzIjpbInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwid2lkdGgiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwicmV0aW5hX2RldGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxZQUFZO0FBQ2hCQSxhQUFXO0FBQ1BDLFlBQVE7QUFDTkMsYUFBTyxFQUREO0FBRU5DLGVBQVM7QUFDUEMsZ0JBQVEsSUFERDtBQUVQQyxvQkFBWTtBQUZMO0FBRkgsS0FERDtBQVFQQyxXQUFPO0FBQ0xKLGFBQU87QUFERixLQVJBO0FBV1BLLGFBQVM7QUFDUEwsYUFBTyxHQURBO0FBRVBNLGNBQVEsS0FGRDtBQUdQQyxZQUFNO0FBQ0pMLGdCQUFRLEtBREo7QUFFSk0sZUFBTyxDQUZIO0FBR0pDLHFCQUFhLEdBSFQ7QUFJSkMsY0FBTTtBQUpGO0FBSEMsS0FYRjtBQXFCUEMsVUFBTTtBQUNKWCxhQUFPLENBREg7QUFFSk0sY0FBUSxJQUZKO0FBR0pDLFlBQU07QUFDSkwsZ0JBQVEsS0FESjtBQUVKTSxlQUFPLEVBRkg7QUFHSkksa0JBQVUsR0FITjtBQUlKRixjQUFNO0FBSkY7QUFIRixLQXJCQztBQStCUEcsaUJBQWE7QUFDWFgsY0FBUSxJQURHO0FBRVhZLGdCQUFVLEdBRkM7QUFHWFYsYUFBTyxNQUhJO0FBSVhDLGVBQVMsR0FKRTtBQUtYVSxhQUFPO0FBTEksS0EvQk47QUFzQ1BDLFVBQU07QUFDSmQsY0FBUSxJQURKO0FBRUpNLGFBQU8sQ0FGSDtBQUdKUyxpQkFBVyxNQUhQO0FBSUpYLGNBQVEsS0FKSjtBQUtKWSxnQkFBVSxLQUxOO0FBTUpDLGdCQUFVLEtBTk47QUFPSkMsY0FBUSxLQVBKO0FBUUpDLGVBQVM7QUFDUG5CLGdCQUFRLEtBREQ7QUFFUG9CLGlCQUFTLEdBRkY7QUFHUEMsaUJBQVM7QUFIRjtBQVJMO0FBdENDLEdBREs7QUFzRGRDLGlCQUFlO0FBQ2JDLGVBQVcsUUFERTtBQUViQyxZQUFRO0FBQ1JDLGVBQVM7QUFDUHpCLGdCQUFRLElBREQ7QUFFUDBCLGNBQU07QUFGQyxPQUREO0FBS1JDLGVBQVM7QUFDUDNCLGdCQUFRLElBREQ7QUFFUDBCLGNBQU07QUFGQyxPQUxEO0FBU1JFLGNBQVE7QUFUQSxLQUZLO0FBYWZDLFdBQU87QUFDTEMsWUFBTTtBQUNKbEIsa0JBQVUsR0FETjtBQUVKRCxxQkFBYTtBQUNYUixtQkFBUztBQURFO0FBRlQsT0FERDtBQU9MNEIsY0FBUTtBQUNObkIsa0JBQVUsR0FESjtBQUVOSCxjQUFNLEVBRkE7QUFHTnVCLGtCQUFVLENBSEo7QUFJTjdCLGlCQUFTLENBSkg7QUFLTkcsZUFBTztBQUxELE9BUEg7QUFjTDJCLGVBQVM7QUFDUHJCLGtCQUFVLEdBREg7QUFFUG9CLGtCQUFVO0FBRkgsT0FkSjtBQWtCTEUsWUFBTTtBQUNKQyxzQkFBYztBQURWLE9BbEJEO0FBcUJMQyxjQUFRO0FBQ05ELHNCQUFjO0FBRFI7QUFyQkg7QUFiUSxHQXRERDtBQTZGaEJFLGlCQUFlO0FBN0ZDLENBQWxCOztrQkFnR2V6QyxTIiwiZmlsZSI6InBhcnRpY2xlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJ0aWNsZXMgPSB7XG4gIHBhcnRpY2xlczoge1xuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHZhbHVlOiA4MCxcbiAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHZhbHVlOiBcIiMwMDBcIlxuICAgICAgfSxcbiAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAuMSxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgICAgc2l6ZV9taW46IDAuMSxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBkaXN0YW5jZTogMTUwLFxuICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDYsXG4gICAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgb3V0X21vZGU6IFwib3V0XCIsXG4gICAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcbiAgICAgICAgICByb3RhdGVZOiAxMjAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgIGRldGVjdF9vbjogXCJ3aW5kb3dcIixcbiAgICAgIGV2ZW50czoge1xuICAgICAgb25ob3Zlcjoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG1vZGU6IFwicmVwdWxzZVwiXG4gICAgICB9LFxuICAgICAgb25jbGljazoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG1vZGU6IFwicHVzaFwiXG4gICAgICB9LFxuICAgICAgcmVzaXplOiB0cnVlXG4gICAgfSxcbiAgICBtb2Rlczoge1xuICAgICAgZ3JhYjoge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1YmJsZToge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBzaXplOiA0MCxcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIG9wYWNpdHk6IDgsXG4gICAgICAgIHNwZWVkOiAzXG4gICAgICB9LFxuICAgICAgcmVwdWxzZToge1xuICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICB9LFxuICAgICAgcHVzaDoge1xuICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXRpbmFfZGV0ZWN0OiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJ0aWNsZXM7XG4iXX0=

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	!function(e, t) {
	     true ? module.exports = t(__webpack_require__(2)) : "function" == typeof define && define.amd ? define([ "react" ], t) : "object" == typeof exports ? exports.Particles = t(require("react")) : e.Particles = t(e.React);
	}(this, function(e) {
	    return function(e) {
	        function t(i) {
	            if (a[i]) return a[i].exports;
	            var r = a[i] = {
	                exports: {},
	                id: i,
	                loaded: !1
	            };
	            return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
	        }
	        var a = {};
	        return t.m = e, t.c = a, t.p = "", t(0);
	    }([ function(e, t, a) {
	        "use strict";
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var i = a(3);
	        t.Particles = i.default, t.default = i.default;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e) {
	            for (var a in e) t.hasOwnProperty(a) || (t[a] = e[a]);
	        }
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        }), i(a(11)), i(a(9));
	        var r = a(4);
	        t.Interact = r.default;
	        var s = a(5);
	        t.Modes = s.default;
	        var n = a(6);
	        t.Particle = n.default;
	        var o = a(7);
	        t.ParticleManager = o.default;
	        var c = a(8);
	        t.ParticlesLibrary = c.default;
	        var l = a(10);
	        t.Vendors = l.default;
	    }, function(t, a) {
	        t.exports = e;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        function r(e, t) {
	            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	            return !t || "object" != typeof t && "function" != typeof t ? e : t;
	        }
	        function s(e, t) {
	            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
	            e.prototype = Object.create(t && t.prototype, {
	                constructor: {
	                    value: e,
	                    enumerable: !1,
	                    writable: !0,
	                    configurable: !0
	                }
	            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	        }
	        var n = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var o = a(2), c = a(2), l = a(1), u = function(e) {
	            function t(e) {
	                i(this, t);
	                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
	                return a.state = {
	                    canvas: void 0,
	                    library: void 0
	                }, a.loadCanvas = a.loadCanvas.bind(a), a;
	            }
	            return s(t, e), n(t, [ {
	                key: "destroy",
	                value: function() {
	                    this.state.library.destroy();
	                }
	            }, {
	                key: "loadCanvas",
	                value: function(e) {
	                    var t = this;
	                    e && this.setState({
	                        canvas: e
	                    }, function() {
	                        t.state.library.loadCanvas(t.state.canvas), t.state.library.start();
	                    });
	                }
	            }, {
	                key: "componentWillMount",
	                value: function() {
	                    this.setState({
	                        library: new l.ParticlesLibrary(this.props.params)
	                    });
	                }
	            }, {
	                key: "componentWillUnmount",
	                value: function() {
	                    this.state.library.destroy(), this.setState({
	                        library: void 0
	                    });
	                }
	            }, {
	                key: "render",
	                value: function() {
	                    var e = this.props, t = e.width, a = e.height;
	                    return o.createElement("div", null, o.createElement("canvas", {
	                        ref: this.loadCanvas,
	                        style: l.deepExtend(this.props.style, {
	                            width: t,
	                            height: a
	                        })
	                    }));
	                }
	            } ]), t;
	        }(c.PureComponent);
	        u.defaultProps = {
	            width: "100%",
	            height: "100%",
	            params: {},
	            style: {}
	        }, t.default = u;
	    }, function(e, t) {
	        "use strict";
	        function a(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var i = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var r = function() {
	            function e(t, i) {
	                a(this, e), this.params = t, this.library = i;
	            }
	            return i(e, [ {
	                key: "linkParticles",
	                value: function(e, t) {
	                    var a = e.x - t.x, i = e.y - t.y, r = Math.sqrt(a * a + i * i), s = this.library.canvas, n = this.params.particles.line_linked;
	                    if (r <= this.params.particles.line_linked.distance) {
	                        var o = this.params.particles.line_linked.opacity - r / (1 / this.params.particles.line_linked.opacity) / this.params.particles.line_linked.distance;
	                        if (o > 0) {
	                            var c = this.params.particles.line_linked.color_rgb_line, l = c.r, u = c.g, p = c.b;
	                            s.ctx.save(), s.ctx.strokeStyle = "rgba( " + l + ", " + u + ", " + p + ", " + o + " )", 
	                            s.ctx.lineWidth = this.params.particles.line_linked.width, s.ctx.beginPath(), n.shadow.enable && (s.ctx.shadowBlur = n.shadow.blur, 
	                            s.ctx.shadowColor = n.shadow.color), s.ctx.moveTo(e.x, e.y), s.ctx.lineTo(t.x, t.y), 
	                            s.ctx.stroke(), s.ctx.closePath(), s.ctx.restore();
	                        }
	                    }
	                }
	            }, {
	                key: "attractParticles",
	                value: function(e, t) {
	                    var a = e.x - t.x, i = e.y - t.y, r = Math.sqrt(a * a + i * i);
	                    if (r <= this.params.particles.line_linked.distance) {
	                        var s = a / (1e3 * this.params.particles.move.attract.rotateX), n = i / (1e3 * this.params.particles.move.attract.rotateY);
	                        e.vx -= s, e.vy -= n, t.vx += s, t.vy += n;
	                    }
	                }
	            }, {
	                key: "bounceParticles",
	                value: function(e, t) {
	                    var a = e.x - t.x, i = e.y - t.y, r = Math.sqrt(a * a + i * i), s = e.radius + t.radius;
	                    r <= s && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy);
	                }
	            } ]), e;
	        }();
	        t.default = r;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var s = a(1), n = function() {
	            function e(t, a) {
	                i(this, e), this.params = t, this.library = a;
	            }
	            return r(e, [ {
	                key: "pushParticles",
	                value: function(e, t) {
	                    var a = this.library, i = a.canvas, r = a.tmp, n = a.manager;
	                    r.pushing = !0;
	                    for (var o = 0; o < e; o++) this.params.particles.array.push(new s.Particle(this.params, this.library, this.params.particles.color, this.params.particles.opacity.value, {
	                        x: t ? t.pos_x : Math.random() * i.width,
	                        y: t ? t.pos_y : Math.random() * i.height
	                    })), o == e - 1 && (this.params.particles.move.enable || n.particlesDraw(), r.pushing = !1);
	                }
	            }, {
	                key: "removeParticles",
	                value: function(e) {
	                    var t = this.library.manager;
	                    this.params.particles.array.splice(0, e), this.params.particles.move.enable || t.particlesDraw();
	                }
	            }, {
	                key: "bubbleParticle",
	                value: function(e) {
	                    var t = this, a = this.library.tmp;
	                    if (this.params.interactivity.events.onhover.enable && s.isInArray("bubble", this.params.interactivity.events.onhover.mode)) {
	                        var i = e.x - this.params.interactivity.mouse.pos_x, r = e.y - this.params.interactivity.mouse.pos_y, n = Math.sqrt(i * i + r * r), o = 1 - n / this.params.interactivity.modes.bubble.distance, c = function() {
	                            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
	                        };
	                        if (n <= this.params.interactivity.modes.bubble.distance) {
	                            if (o >= 0 && "mousemove" == this.params.interactivity.status) {
	                                if (this.params.interactivity.modes.bubble.size != this.params.particles.size.value) if (this.params.interactivity.modes.bubble.size > this.params.particles.size.value) {
	                                    var l = e.radius + this.params.interactivity.modes.bubble.size * o;
	                                    l >= 0 && (e.radius_bubble = l);
	                                } else {
	                                    var u = e.radius - this.params.interactivity.modes.bubble.size, p = e.radius - u * o;
	                                    p > 0 ? e.radius_bubble = p : e.radius_bubble = 0;
	                                }
	                                if (this.params.interactivity.modes.bubble.opacity != this.params.particles.opacity.value) if (this.params.interactivity.modes.bubble.opacity > this.params.particles.opacity.value) {
	                                    var h = this.params.interactivity.modes.bubble.opacity * o;
	                                    h > e.opacity && h <= this.params.interactivity.modes.bubble.opacity && (e.opacity_bubble = h);
	                                } else {
	                                    var m = e.opacity - (this.params.particles.opacity.value - this.params.interactivity.modes.bubble.opacity) * o;
	                                    m < e.opacity && m >= this.params.interactivity.modes.bubble.opacity && (e.opacity_bubble = m);
	                                }
	                            }
	                        } else c();
	                        "mouseleave" == this.params.interactivity.status && c();
	                    } else if (this.params.interactivity.events.onclick.enable && s.isInArray("bubble", this.params.interactivity.events.onclick.mode) && a.bubble_clicking) {
	                        var v = e.x - this.params.interactivity.mouse.click_pos_x, d = e.y - this.params.interactivity.mouse.click_pos_y, y = Math.sqrt(v * v + d * d), b = (new Date().getTime() - this.params.interactivity.mouse.click_time) / 1e3;
	                        b > this.params.interactivity.modes.bubble.duration && (a.bubble_duration_end = !0), 
	                        b > 2 * this.params.interactivity.modes.bubble.duration && (a.bubble_clicking = !1, 
	                        a.bubble_duration_end = !1);
	                        var f = function(i, r, s, n, o) {
	                            if (i != r) if (a.bubble_duration_end) {
	                                if (void 0 != s) {
	                                    var c = n - b * (n - i) / t.params.interactivity.modes.bubble.duration, l = i - c, u = i + l;
	                                    "size" == o && (e.radius_bubble = u), "opacity" == o && (e.opacity_bubble = u);
	                                }
	                            } else if (y <= t.params.interactivity.modes.bubble.distance) {
	                                var p = void 0;
	                                if (p = void 0 != s ? s : n, p != i) {
	                                    var h = n - b * (n - i) / t.params.interactivity.modes.bubble.duration;
	                                    "size" == o && (e.radius_bubble = h), "opacity" == o && (e.opacity_bubble = h);
	                                }
	                            } else "size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0);
	                        };
	                        a.bubble_clicking && (f(this.params.interactivity.modes.bubble.size, this.params.particles.size.value, e.radius_bubble, e.radius, "size"), 
	                        f(this.params.interactivity.modes.bubble.opacity, this.params.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
	                    }
	                }
	            }, {
	                key: "repulseParticle",
	                value: function(e) {
	                    var t = this, a = this.library, i = a.canvas, r = a.tmp;
	                    if (this.params.interactivity.events.onhover.enable && s.isInArray("repulse", this.params.interactivity.events.onhover.mode) && "mousemove" == this.params.interactivity.status) {
	                        var n = e.x - this.params.interactivity.mouse.pos_x, o = e.y - this.params.interactivity.mouse.pos_y, c = Math.sqrt(n * n + o * o), l = {
	                            x: n / c,
	                            y: o / c
	                        }, u = this.params.interactivity.modes.repulse.distance, p = 100, h = s.clamp(1 / u * (-1 * Math.pow(c / u, 2) + 1) * u * p, 0, 50), m = {
	                            x: e.x + l.x * h,
	                            y: e.y + l.y * h
	                        };
	                        "bounce" == this.params.particles.move.out_mode ? (m.x - e.radius > 0 && m.x + e.radius < i.width && (e.x = m.x), 
	                        m.y - e.radius > 0 && m.y + e.radius < i.height && (e.y = m.y)) : (e.x = m.x, e.y = m.y);
	                    } else if (this.params.interactivity.events.onclick.enable && s.isInArray("repulse", this.params.interactivity.events.onclick.mode)) if (r.repulse_finish || (r.repulse_count++, 
	                    r.repulse_count == this.params.particles.array.length && (r.repulse_finish = !0)), 
	                    r.repulse_clicking) {
	                        var v = Math.pow(this.params.interactivity.modes.repulse.distance / 6, 3), d = this.params.interactivity.mouse.click_pos_x - e.x, y = this.params.interactivity.mouse.click_pos_y - e.y, b = d * d + y * y, f = -v / b * 1, _ = function() {
	                            var a = Math.atan2(y, d);
	                            if (e.vx = f * Math.cos(a), e.vy = f * Math.sin(a), "bounce" == t.params.particles.move.out_mode) {
	                                var r = {
	                                    x: e.x + e.vx,
	                                    y: e.y + e.vy
	                                };
	                                r.x + e.radius > i.width ? e.vx = -e.vx : r.x - e.radius < 0 && (e.vx = -e.vx), 
	                                r.y + e.radius > i.height ? e.vy = -e.vy : r.y - e.radius < 0 && (e.vy = -e.vy);
	                            }
	                        };
	                        b <= v && _();
	                    } else 0 == r.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
	                }
	            }, {
	                key: "grabParticle",
	                value: function(e) {
	                    var t = this.library.canvas, a = this.params, i = a.interactivity, r = a.particles;
	                    if (i.events.onhover.enable && "mousemove" == i.status) {
	                        var s = e.x - i.mouse.pos_x, n = e.y - i.mouse.pos_y, o = Math.sqrt(s * s + n * n);
	                        if (o <= i.modes.grab.distance) {
	                            var c = i.modes.grab, l = c.line_linked.opacity - o / (1 / c.line_linked.opacity) / c.distance;
	                            if (l > 0) {
	                                var u = r.line_linked.color_rgb_line, p = u.r, h = u.g, m = u.b;
	                                t.ctx.strokeStyle = "rgba( " + p + ", " + h + ", " + m + ", " + l + " )", t.ctx.lineWidth = r.line_linked.width, 
	                                t.ctx.beginPath(), t.ctx.moveTo(e.x, e.y), t.ctx.lineTo(i.mouse.pos_x, i.mouse.pos_y), 
	                                t.ctx.stroke(), t.ctx.closePath();
	                            }
	                        }
	                    }
	                }
	            } ]), e;
	        }();
	        t.default = n;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	            return typeof e;
	        } : function(e) {
	            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	        }, s = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var n = a(1), o = function() {
	            function e(t, a, r, s, n) {
	                i(this, e), this.params = t, this.library = a, this.setupSize(), this.setupPosition(n), 
	                this.setupColor(r), this.setupOpacity(), this.setupAnimation();
	            }
	            return s(e, [ {
	                key: "setupSize",
	                value: function() {
	                    this.radius = (this.params.particles.size.random ? Math.random() : 1) * this.params.particles.size.value, 
	                    this.params.particles.size.anim.enable && (this.size_status = !1, this.vs = this.params.particles.size.anim.speed / 100, 
	                    this.params.particles.size.anim.sync || (this.vs = this.vs * Math.random()));
	                }
	            }, {
	                key: "setupPosition",
	                value: function(e) {
	                    var t = this.library, a = t.canvas, i = t.vendors;
	                    this.x = e ? e.x : Math.random() * a.width, this.y = e ? e.y : Math.random() * a.height, 
	                    this.x > a.width - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), 
	                    this.y > a.height - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), 
	                    this.params.particles.move.bounce && i.checkOverlap(this, e);
	                }
	            }, {
	                key: "setupColor",
	                value: function(e) {
	                    this.color = n.getColor(e.value);
	                }
	            }, {
	                key: "setupOpacity",
	                value: function() {
	                    this.opacity = (this.params.particles.opacity.random ? Math.random() : 1) * this.params.particles.opacity.value, 
	                    this.params.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = this.params.particles.opacity.anim.speed / 100, 
	                    this.params.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
	                }
	            }, {
	                key: "setupAnimation",
	                value: function() {
	                    var e = this.library, t = e.tmp, a = e.vendors, i = null;
	                    switch (this.params.particles.move.direction) {
	                      case "top":
	                        i = {
	                            x: 0,
	                            y: -1
	                        };
	                        break;
	
	                      case "top-right":
	                        i = {
	                            x: .5,
	                            y: -.5
	                        };
	                        break;
	
	                      case "right":
	                        i = {
	                            x: 1,
	                            y: 0
	                        };
	                        break;
	
	                      case "bottom-right":
	                        i = {
	                            x: .5,
	                            y: .5
	                        };
	                        break;
	
	                      case "bottom":
	                        i = {
	                            x: 0,
	                            y: 1
	                        };
	                        break;
	
	                      case "bottom-left":
	                        i = {
	                            x: -.5,
	                            y: 1
	                        };
	                        break;
	
	                      case "left":
	                        i = {
	                            x: -1,
	                            y: 0
	                        };
	                        break;
	
	                      case "top-left":
	                        i = {
	                            x: -.5,
	                            y: -.5
	                        };
	                        break;
	
	                      default:
	                        i = {
	                            x: 0,
	                            y: 0
	                        };
	                    }
	                    this.params.particles.move.straight ? (this.vx = i.x, this.vy = i.y, this.params.particles.move.random && (this.vx = this.vx * Math.random(), 
	                    this.vy = this.vy * Math.random())) : (this.vx = i.x + Math.random() - .5, this.vy = i.y + Math.random() - .5), 
	                    this.vx_i = this.vx, this.vy_i = this.vy;
	                    var s = this.params.particles.shape.type;
	                    if ("object" == ("undefined" == typeof s ? "undefined" : r(s))) {
	                        if (s instanceof Array) {
	                            var n = s[Math.floor(Math.random() * s.length)];
	                            this.shape = n;
	                        }
	                    } else this.shape = s;
	                    if ("image" == this.shape) {
	                        var o = this.params.particles.shape;
	                        this.img = {
	                            src: o.image.src,
	                            ratio: o.image.width / o.image.height
	                        }, this.img.ratio || (this.img.ratio = 1), "svg" == t.img_type && void 0 != t.source_svg && (a.createSvgImg(this), 
	                        t.pushing && (this.img.loaded = !1));
	                    }
	                }
	            }, {
	                key: "draw",
	                value: function e() {
	                    var t = this, a = this.library, i = a.canvas, r = a.tmp, s = a.vendors, n = (this.params.particles, 
	                    void 0);
	                    n = void 0 != this.radius_bubble ? this.radius_bubble : this.radius;
	                    var o = void 0;
	                    o = void 0 != this.opacity_bubble ? this.opacity_bubble : this.opacity;
	                    var c = void 0;
	                    if (this.color.rgb) {
	                        var l = this.color.rgb, u = l.r, p = l.g, h = l.b;
	                        c = "rgba( " + u + ", " + p + ", " + h + ", " + o + " )";
	                    } else {
	                        var m = this.color.hsl, v = m.h, d = m.s, y = m.l;
	                        c = "hsla( " + v + ", " + d + ", " + y + ", " + o + " )";
	                    }
	                    switch (i.ctx.fillStyle = c, i.ctx.beginPath(), this.shape) {
	                      case "circle":
	                        i.ctx.arc(this.x, this.y, n, 0, 2 * Math.PI, !1);
	                        break;
	
	                      case "edge":
	                        i.ctx.rect(this.x - n, this.y - n, 2 * n, 2 * n);
	                        break;
	
	                      case "triangle":
	                        s.drawShape(i.ctx, this.x - n, this.y + n / 1.66, 2 * n, 3, 2);
	                        break;
	
	                      case "polygon":
	                        s.drawShape(i.ctx, this.x - n / (this.params.particles.shape.polygon.nb_sides / 3.5), this.y - n / .76, 2.66 * n / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 1);
	                        break;
	
	                      case "star":
	                        s.drawShape(i.ctx, this.x - 2 * n / (this.params.particles.shape.polygon.nb_sides / 4), this.y - n / 1.52, 2 * n * 2.66 / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 2);
	                        break;
	
	                      case "image":
	                        var e = function(e) {
	                            i.ctx.drawImage(e, t.x - n, t.y - n, 2 * n, 2 * n / t.img.ratio);
	                        }, b = void 0;
	                        b = "svg" == r.img_type ? this.img.obj : r.img_obj, b && e(b);
	                    }
	                    i.ctx.closePath(), this.params.particles.shape.stroke.width > 0 && (i.ctx.strokeStyle = this.params.particles.shape.stroke.color, 
	                    i.ctx.lineWidth = this.params.particles.shape.stroke.width, i.ctx.stroke()), i.ctx.fill();
	                }
	            } ]), e;
	        }();
	        t.default = o;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var s = a(1), n = function() {
	            function e(t, a, r, s, n) {
	                i(this, e), this.params = t, this.interact = a, this.modes = r, this.vendors = s, 
	                this.library = n;
	            }
	            return r(e, [ {
	                key: "particlesCreate",
	                value: function() {
	                    for (var e = this.params.particles, t = e.color, a = e.opacity, i = 0; i < this.params.particles.number.value; i++) this.params.particles.array.push(new s.Particle(this.params, this.library, t, a.value));
	                }
	            }, {
	                key: "particlesUpdate",
	                value: function() {
	                    var e = this, t = this.library, a = t.canvas, i = t.interact, r = t.modes;
	                    this.params.particles.array.forEach(function(t, n) {
	                        if (e.params.particles.move.enable) {
	                            var o = e.params.particles.move.speed / 2;
	                            t.x += t.vx * o, t.y += t.vy * o;
	                        }
	                        e.params.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= e.params.particles.opacity.value && (t.opacity_status = !1), 
	                        t.opacity += t.vo) : (t.opacity <= e.params.particles.opacity.anim.opacity_min && (t.opacity_status = !0), 
	                        t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), e.params.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= e.params.particles.size.value && (t.size_status = !1), 
	                        t.radius += t.vs) : (t.radius <= e.params.particles.size.anim.size_min && (t.size_status = !0), 
	                        t.radius -= t.vs), t.radius < 0 && (t.radius = 0));
	                        var c = void 0;
	                        switch (c = "bounce" == e.params.particles.move.out_mode ? {
	                            x_left: t.radius,
	                            x_right: a.width,
	                            y_top: t.radius,
	                            y_bottom: a.height
	                        } : {
	                            x_left: -t.radius,
	                            x_right: a.width + t.radius,
	                            y_top: -t.radius,
	                            y_bottom: a.height + t.radius
	                        }, t.x - t.radius > a.width ? (t.x = c.x_left, t.y = Math.random() * a.height) : t.x + t.radius < 0 && (t.x = c.x_right, 
	                        t.y = Math.random() * a.height), t.y - t.radius > a.height ? (t.y = c.y_top, t.x = Math.random() * a.width) : t.y + t.radius < 0 && (t.y = c.y_bottom, 
	                        t.x = Math.random() * a.width), e.params.particles.move.out_mode) {
	                          case "bounce":
	                            t.x + t.radius > a.width ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), 
	                            t.y + t.radius > a.height ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy);
	                        }
	                        if (s.isInArray("grab", e.params.interactivity.events.onhover.mode) && r.grabParticle(t), 
	                        (s.isInArray("bubble", e.params.interactivity.events.onhover.mode) || s.isInArray("bubble", e.params.interactivity.events.onclick.mode)) && r.bubbleParticle(t), 
	                        (s.isInArray("repulse", e.params.interactivity.events.onhover.mode) || s.isInArray("repulse", e.params.interactivity.events.onclick.mode)) && r.repulseParticle(t), 
	                        e.params.particles.line_linked.enable || e.params.particles.move.attract.enable) for (var l = n + 1; l < e.params.particles.array.length; l++) {
	                            var u = e.params.particles.array[l];
	                            e.params.particles.line_linked.enable && i.linkParticles(t, u), e.params.particles.move.attract.enable && i.attractParticles(t, u), 
	                            e.params.particles.move.bounce && i.bounceParticles(t, u);
	                        }
	                    });
	                }
	            }, {
	                key: "particlesDraw",
	                value: function() {
	                    var e = this.library, t = e.canvas, a = e.manager;
	                    t.ctx.clearRect(0, 0, t.width, t.height), a.particlesUpdate(), this.params.particles.array.forEach(function(e) {
	                        e.draw();
	                    });
	                }
	            }, {
	                key: "particlesEmpty",
	                value: function() {
	                    this.params.particles.array = [];
	                }
	            }, {
	                key: "particlesRefresh",
	                value: function() {
	                    var e = this.library, t = e.tmp;
	                    e.vendors;
	                    cancelAnimationFrame(t.checkAnimFrame), cancelAnimationFrame(t.drawAnimFrame), t.source_svg = void 0, 
	                    t.img_obj = void 0, t.count_svg = 0, this.particlesEmpty(), this.library.canvasClear(), 
	                    this.library.start();
	                }
	            } ]), e;
	        }();
	        t.default = n;
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var s = a(1), n = function() {
	            function e(t) {
	                i(this, e), this.tmp = {}, this.tmp = {}, this.loadParameters(t), this.extendParams(), 
	                this.interact = new s.Interact(this.params, this), this.modes = new s.Modes(this.params, this), 
	                this.vendors = new s.Vendors(this.params, this), this.manager = new s.ParticleManager(this.params, this.interact, this.modes, this.vendors, this);
	            }
	            return r(e, [ {
	                key: "loadParameters",
	                value: function(e) {
	                    var t = s.getDefaultParams(), a = s.deepExtend(t, e);
	                    this.params = a;
	                }
	            }, {
	                key: "loadCanvas",
	                value: function(e) {
	                    this.canvas = {
	                        element: e,
	                        width: e.offsetWidth,
	                        height: e.offsetHeight
	                    };
	                }
	            }, {
	                key: "start",
	                value: function() {
	                    var e = this.vendors;
	                    e.eventsListeners(), e.start();
	                }
	            }, {
	                key: "destroy",
	                value: function() {
	                    var e = this.tmp;
	                    this.detachListeners(), this.vendors.detachListeners(), cancelAnimationFrame(e.drawAnimFrame), 
	                    this.canvasClear();
	                }
	            }, {
	                key: "detachListeners",
	                value: function() {
	                    window.removeEventListener("resize", this.onWindowResize);
	                }
	            }, {
	                key: "extendParams",
	                value: function() {
	                    this.extendTmpDefinition(), this.onWindowResize = this.onWindowResize.bind(this);
	                }
	            }, {
	                key: "extendTmpDefinition",
	                value: function() {
	                    var e = this.tmp;
	                    e.obj = {
	                        size_value: this.params.particles.size.value,
	                        size_anim_speed: this.params.particles.size.anim.speed,
	                        move_speed: this.params.particles.move.speed,
	                        line_linked_distance: this.params.particles.line_linked.distance,
	                        line_linked_width: this.params.particles.line_linked.width,
	                        mode_grab_distance: this.params.interactivity.modes.grab.distance,
	                        mode_bubble_distance: this.params.interactivity.modes.bubble.distance,
	                        mode_bubble_size: this.params.interactivity.modes.bubble.size,
	                        mode_repulse_distance: this.params.interactivity.modes.repulse.distance
	                    };
	                }
	            }, {
	                key: "retinaInit",
	                value: function() {
	                    var e = this.canvas, t = this.tmp;
	                    this.params.retina_detect && window.devicePixelRatio > 1 ? (e.pxratio = window.devicePixelRatio, 
	                    t.retina = !0, e.width = e.element.offsetWidth * e.pxratio, e.height = e.element.offsetHeight * e.pxratio, 
	                    this.params.particles.size.value = t.obj.size_value * e.pxratio, this.params.particles.size.anim.speed = t.obj.size_anim_speed * e.pxratio, 
	                    this.params.particles.move.speed = t.obj.move_speed * e.pxratio, this.params.particles.line_linked.distance = t.obj.line_linked_distance * e.pxratio, 
	                    this.params.interactivity.modes.grab.distance = t.obj.mode_grab_distance * e.pxratio, 
	                    this.params.interactivity.modes.bubble.distance = t.obj.mode_bubble_distance * e.pxratio, 
	                    this.params.particles.line_linked.width = t.obj.line_linked_width * e.pxratio, this.params.interactivity.modes.bubble.size = t.obj.mode_bubble_size * e.pxratio, 
	                    this.params.interactivity.modes.repulse.distance = t.obj.mode_repulse_distance * e.pxratio) : (e.pxratio = 1, 
	                    t.retina = !1);
	                }
	            }, {
	                key: "canvasInit",
	                value: function() {
	                    var e = this.canvas;
	                    e.ctx = e.element.getContext("2d");
	                }
	            }, {
	                key: "canvasSize",
	                value: function() {
	                    var e = this.canvas;
	                    e.element.width = e.width, e.element.height = e.height, this.params && this.params.interactivity.events.resize && window.addEventListener("resize", this.onWindowResize);
	                }
	            }, {
	                key: "canvasPaint",
	                value: function() {
	                    var e = this.canvas;
	                    e.ctx.fillRect(0, 0, e.width, e.height);
	                }
	            }, {
	                key: "canvasClear",
	                value: function() {
	                    var e = this.canvas;
	                    e.ctx.clearRect(0, 0, e.width, e.height);
	                }
	            }, {
	                key: "onWindowResize",
	                value: function() {
	                    var e = this.canvas, t = this.manager, a = this.tmp, i = this.vendors;
	                    e.width = e.element.offsetWidth, e.height = e.element.offsetHeight, a.retina && (e.width *= e.pxratio, 
	                    e.height *= e.pxratio), e.element.width = e.width, e.element.height = e.height, 
	                    this.params.particles.move.enable || (t.particlesEmpty(), t.particlesCreate(), t.particlesDraw(), 
	                    i.densityAutoParticles()), i.densityAutoParticles();
	                }
	            } ]), e;
	        }();
	        t.default = n;
	    }, function(e, t) {
	        "use strict";
	        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	            return typeof e;
	        } : function(e) {
	            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	        };
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        }), t.hexToRgb = function(e) {
	            var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	            e = e.replace(t, function(e, t, a, i) {
	                return t + t + a + a + i + i;
	            });
	            var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
	            return a ? {
	                r: parseInt(a[1], 16),
	                g: parseInt(a[2], 16),
	                b: parseInt(a[3], 16)
	            } : null;
	        }, t.clamp = function(e, t, a) {
	            return Math.min(Math.max(e, t), a);
	        }, t.isInArray = function(e, t) {
	            return t.indexOf(e) > -1;
	        }, t.deepExtend = function(e, a) {
	            for (var i in a) a[i] && a[i].constructor && a[i].constructor === Object ? (e[i] = e[i] || {}, 
	            t.deepExtend(e[i], a[i])) : e[i] = a[i];
	            return e;
	        }, t.getColor = function(e) {
	            var i = {};
	            if ("object" == ("undefined" == typeof e ? "undefined" : a(e))) if (e instanceof Array) {
	                var r = e[Math.floor(Math.random() * e.length)];
	                i.rgb = t.hexToRgb(r);
	            } else {
	                var s = e.r, n = e.g, o = e.b;
	                if (void 0 !== s && void 0 !== n && void 0 !== o) i.rgb = {
	                    r: s,
	                    g: n,
	                    b: o
	                }; else {
	                    var c = e.h, l = e.s, u = e.l;
	                    void 0 !== c && void 0 !== n && void 0 !== o && (i.hsl = {
	                        h: c,
	                        s: l,
	                        l: u
	                    });
	                }
	            } else "random" == e ? i.rgb = {
	                r: Math.floor(255 * Math.random()) + 1,
	                g: Math.floor(255 * Math.random()) + 1,
	                b: Math.floor(255 * Math.random()) + 1
	            } : "string" == typeof e && (i.rgb = t.hexToRgb(e));
	            return i;
	        };
	    }, function(e, t, a) {
	        "use strict";
	        function i(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	        }
	        var r = function() {
	            function e(e, t) {
	                for (var a = 0; a < t.length; a++) {
	                    var i = t[a];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
	                    Object.defineProperty(e, i.key, i);
	                }
	            }
	            return function(t, a, i) {
	                return a && e(t.prototype, a), i && e(t, i), t;
	            };
	        }();
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        });
	        var s = a(1), n = function() {
	            function e(t, a) {
	                i(this, e), this.params = t, this.library = a, this.onMouseMove = this.onMouseMove.bind(this), 
	                this.onMouseLeave = this.onMouseLeave.bind(this), this.onClick = this.onClick.bind(this);
	            }
	            return r(e, [ {
	                key: "eventsListeners",
	                value: function() {
	                    var e = this.params.interactivity, t = this.library.canvas;
	                    "window" == e.detect_on ? e.el = window : e.el = t.element, (e.events.onhover.enable || e.events.onclick.enable) && (e.el.addEventListener("mousemove", this.onMouseMove), 
	                    e.el.addEventListener("mouseleave", this.onMouseLeave)), e.events.onclick.enable && e.el.addEventListener("click", this.onClick);
	                }
	            }, {
	                key: "detachListeners",
	                value: function() {
	                    var e = this.params.interactivity, t = this.library.tmp;
	                    e.el && ((e.events.onhover.enable || e.events.onclick.enable) && (e.el.removeEventListener("mousemove", this.onMouseMove), 
	                    e.el.addEventListener("mouseleave", this.onMouseLeave)), e.events.onclick.enable && e.el.addEventListener("click", this.onClick)), 
	                    window.cancelAnimationFrame(t.drawAnimFrame);
	                }
	            }, {
	                key: "onMouseMove",
	                value: function(e) {
	                    var t = this.library, a = t.canvas, i = t.tmp, r = this.params.interactivity, s = void 0;
	                    s = r.el == window ? {
	                        x: e.clientX,
	                        y: e.clientY
	                    } : {
	                        x: e.offsetX || e.clientX,
	                        y: e.offsetY || e.clientY
	                    }, r.mouse.pos_x = s.x, r.mouse.pos_y = s.y, i.retina && (r.mouse.pos_x *= a.pxratio, 
	                    r.mouse.pos_y *= a.pxratio), r.status = "mousemove";
	                }
	            }, {
	                key: "onMouseLeave",
	                value: function(e) {
	                    var t = this.params.interactivity;
	                    t.mouse.pos_x = null, t.mouse.pos_y = null, t.status = "mouseleave";
	                }
	            }, {
	                key: "onClick",
	                value: function() {
	                    var e = this.library, t = e.modes, a = e.tmp, i = this.params, r = i.interactivity, s = i.particles;
	                    if (r.mouse.click_pos_x = r.mouse.pos_x, r.mouse.click_pos_y = r.mouse.pos_y, r.mouse.click_time = new Date().getTime(), 
	                    r.events.onclick.enable) switch (r.events.onclick.mode) {
	                      case "push":
	                        s.move.enable ? t.pushParticles(r.modes.push.particles_nb, r.mouse) : 1 == r.modes.push.particles_nb ? t.pushParticles(r.modes.push.particles_nb, r.mouse) : r.modes.push.particles_nb > 1 && t.pushParticles(r.modes.push.particles_nb);
	                        break;
	
	                      case "remove":
	                        t.removeParticles(r.modes.remove.particles_nb);
	                        break;
	
	                      case "bubble":
	                        a.bubble_clicking = !0;
	                        break;
	
	                      case "repulse":
	                        a.repulse_clicking = !0, a.repulse_count = 0, a.repulse_finish = !1, setTimeout(function() {
	                            a.repulse_clicking = !1;
	                        }, 1e3 * r.modes.repulse.duration);
	                    }
	                }
	            }, {
	                key: "densityAutoParticles",
	                value: function() {
	                    var e = this.library, t = e.canvas, a = e.modes, i = e.tmp, r = this.params.particles;
	                    if (r.number.density.enable) {
	                        var s = t.element.width * t.element.height / 1e3;
	                        i.retina && (s = s / t.pxratio * 2);
	                        var n = s * r.number.value / r.number.density.value_area, o = r.array.length - n;
	                        o < 0 ? a.pushParticles(Math.abs(o)) : a.removeParticles(o);
	                    }
	                }
	            }, {
	                key: "checkOverlap",
	                value: function(e, t) {
	                    var a = this.library, i = a.canvas, r = a.vendors, s = this.params.particles;
	                    s.array.forEach(function(a) {
	                        var s = a, n = e.x - s.x, o = e.y - s.y, c = Math.sqrt(n * n + o * o);
	                        c <= e.radius + s.radius && (e.x = t ? t.x : Math.random() * i.width, e.y = t ? t.y : Math.random() * i.height, 
	                        r.checkOverlap(e));
	                    });
	                }
	            }, {
	                key: "createSvgImg",
	                value: function(e) {
	                    var t = this.library.tmp, a = t.source_svg, i = /#([0-9A-F]{3,6})/gi, r = a.replace(i, function(t, a, i, r) {
	                        var s = void 0;
	                        if (e.color.rgb) {
	                            var n = e.color.rgb, o = n.r, c = n.g, l = n.b;
	                            s = "rgba( " + o + ", " + c + ", " + l + ", " + e.opacity + " )";
	                        } else {
	                            var u = e.color.hsl, p = u.h, h = u.s, m = u.l;
	                            s = "rgba( " + p + ", " + h + ", " + m + ", " + e.opacity + " )";
	                        }
	                        return s;
	                    }), s = new Blob([ r ], {
	                        type: "image/svg+xml;charset=utf-8"
	                    }), n = window.URL || window, o = n.createObjectURL(s), c = new Image();
	                    c.addEventListener("load", function() {
	                        e.img.obj = c, e.img.loaded = !0, n.revokeObjectURL(o), t.count_svg++;
	                    }), c.src = o;
	                }
	            }, {
	                key: "destroy",
	                value: function() {
	                    var e = this.library, t = e.canvas, a = e.tmp;
	                    cancelAnimationFrame(a.drawAnimFrame), t.element.remove();
	                }
	            }, {
	                key: "drawShape",
	                value: function(e, t, a, i, r, s) {
	                    var n = r * s, o = r / s, c = 180 * (o - 2) / o, l = Math.PI - Math.PI * c / 180;
	                    e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
	                    for (var u = 0; u < n; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
	                    e.fill(), e.restore();
	                }
	            }, {
	                key: "exportImg",
	                value: function() {
	                    var e = this.library.canvas;
	                    window.open(e.element.toDataURL("image/png"), "_blank");
	                }
	            }, {
	                key: "loadImg",
	                value: function(e) {
	                    var t = this.library, a = t.tmp, i = t.vendors, r = this.params.particles;
	                    if (a.img_error = void 0, "" != r.shape.image.src) if ("svg" == e) {
	                        var s = new XMLHttpRequest();
	                        s.open("GET", r.shape.image.src), s.onreadystatechange = function(e) {
	                            4 == s.readyState && (200 == s.status ? (a.source_svg = e.currentTarget.response, 
	                            i.checkBeforeDraw()) : (console.log("Error react-particles-js - image not found"), 
	                            a.img_error = !0));
	                        }, s.send();
	                    } else {
	                        var n = new Image();
	                        n.addEventListener("load", function() {
	                            a.img_obj = n, i.checkBeforeDraw();
	                        }), n.src = r.shape.image.src;
	                    } else console.log("Error react-particles-js - no image.src"), a.img_error = !0;
	                }
	            }, {
	                key: "draw",
	                value: function() {
	                    var e = this.library, t = e.tmp, a = e.manager, i = e.vendors, r = this.params.particles;
	                    "image" == r.shape.type ? "svg" == t.img_type ? t.count_svg >= r.number.value ? (a.particlesDraw(), 
	                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame)) : t.img_error || (t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i))) : void 0 != t.img_obj ? (a.particlesDraw(), 
	                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame)) : t.img_error || (t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i))) : (a.particlesDraw(), 
	                    r.move.enable ? t.drawAnimFrame = requestAnimationFrame(i.draw.bind(i)) : cancelAnimationFrame(t.drawAnimFrame));
	                }
	            }, {
	                key: "checkBeforeDraw",
	                value: function() {
	                    var e = this.library, t = e.tmp, a = e.vendors, i = this.params.particles;
	                    if ("image" == i.shape.type) if ("svg" == t.img_type && void 0 == t.source_svg) {
	                        var r = void 0;
	                        t.checkAnimFrame = requestAnimationFrame(r);
	                    } else cancelAnimationFrame(t.checkAnimFrame), t.img_error || (a.init(), a.draw()); else a.init(), 
	                    a.draw();
	                }
	            }, {
	                key: "init",
	                value: function() {
	                    var e = this.library, t = e.manager, a = e.vendors, i = this.params.particles;
	                    e.retinaInit(), e.canvasInit(), e.canvasSize(), t.particlesCreate(), a.densityAutoParticles(), 
	                    i.line_linked.color_rgb_line = s.hexToRgb(i.line_linked.color);
	                }
	            }, {
	                key: "start",
	                value: function() {
	                    var e = this.library, t = e.tmp, a = e.vendors, i = this.params.particles;
	                    s.isInArray("image", i.shape.type) ? (t.img_type = i.shape.image.src.substr(i.shape.image.src.length - 3), 
	                    a.loadImg(t.img_type)) : a.checkBeforeDraw();
	                }
	            } ]), e;
	        }();
	        t.default = n;
	    }, function(e, t) {
	        "use strict";
	        Object.defineProperty(t, "__esModule", {
	            value: !0
	        }), t.getDefaultParams = function() {
	            return {
	                particles: {
	                    number: {
	                        value: 40,
	                        density: {
	                            enable: !1,
	                            value_area: 1200
	                        }
	                    },
	                    color: {
	                        value: "#FFF"
	                    },
	                    shape: {
	                        type: "circle",
	                        stroke: {
	                            width: 0,
	                            color: "#000000"
	                        },
	                        polygon: {
	                            nb_sides: 5
	                        },
	                        image: {
	                            src: "",
	                            width: 100,
	                            height: 100
	                        }
	                    },
	                    opacity: {
	                        value: .5,
	                        random: !1,
	                        anim: {
	                            enable: !0,
	                            speed: 1,
	                            opacity_min: .1,
	                            sync: !1
	                        }
	                    },
	                    size: {
	                        value: 1,
	                        random: !1,
	                        anim: {
	                            enable: !1,
	                            speed: 40,
	                            size_min: 0,
	                            sync: !1
	                        }
	                    },
	                    line_linked: {
	                        enable: !0,
	                        distance: 150,
	                        color: "#FFF",
	                        opacity: .6,
	                        width: 1,
	                        shadow: {
	                            enable: !1,
	                            blur: 5,
	                            color: "lime"
	                        }
	                    },
	                    move: {
	                        enable: !0,
	                        speed: 3,
	                        direction: "none",
	                        random: !1,
	                        straight: !1,
	                        out_mode: "bounce",
	                        bounce: !0,
	                        attract: {
	                            enable: !1,
	                            rotateX: 3e3,
	                            rotateY: 3e3
	                        }
	                    },
	                    array: []
	                },
	                interactivity: {
	                    detect_on: "canvas",
	                    events: {
	                        onhover: {
	                            enable: !1,
	                            mode: "grab"
	                        },
	                        onclick: {
	                            enable: !1,
	                            mode: "repulse"
	                        },
	                        resize: !0
	                    },
	                    modes: {
	                        grab: {
	                            distance: 180,
	                            line_linked: {
	                                opacity: .35
	                            }
	                        },
	                        bubble: {
	                            distance: 200,
	                            size: 80,
	                            duration: .4
	                        },
	                        repulse: {
	                            distance: 100,
	                            duration: 5
	                        },
	                        push: {
	                            particles_nb: 4
	                        },
	                        remove: {
	                            particles_nb: 2
	                        }
	                    },
	                    mouse: {}
	                },
	                retina_detect: !0
	            };
	        };
	    } ]);
	});

/***/ },
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _link = __webpack_require__(73);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  links: _react.PropTypes.array.isRequired,
	  style: _react.PropTypes.object
	};
	
	var renderLinks = function renderLinks(links, style) {
	  return links.map(function (link, i) {
	    return link.type === 'email' ? _react2.default.createElement(
	      'a',
	      { key: i, className: style.link, href: link.url },
	      link.name
	    ) : _react2.default.createElement(
	      _link2.default,
	      { key: i, href: link.url },
	      _react2.default.createElement(
	        'a',
	        { className: style.link, target: '_blank' },
	        link.name
	      )
	    );
	  });
	};
	
	var Menu = function Menu(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: props.style.component },
	    renderLinks(props.links, props.style)
	  );
	};
	
	Menu.propTypes = propTypes;
	exports.default = Menu;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJsaW5rcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInN0eWxlIiwib2JqZWN0IiwicmVuZGVyTGlua3MiLCJtYXAiLCJsaW5rIiwiaSIsInR5cGUiLCJ1cmwiLCJuYW1lIiwiTWVudSIsInByb3BzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxTQUFPLGlCQUFVQyxLQUFWLENBQWdCQyxVQURQO0FBRWhCQyxTQUFPLGlCQUFVQztBQUZELENBQWxCOztBQUtBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDTCxLQUFELEVBQVFHLEtBQVIsRUFBa0I7QUFDcEMsU0FBT0gsTUFBTU0sR0FBTixDQUFXLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzdCLFdBQU9ELEtBQUtFLElBQUwsS0FBYyxPQUFkLEdBQ0g7QUFBQTtBQUFBLFFBQUcsS0FBS0QsQ0FBUixFQUFXLFdBQVdMLE1BQU1JLElBQTVCLEVBQWtDLE1BQU9BLEtBQUtHLEdBQTlDO0FBQXNESCxXQUFLSTtBQUEzRCxLQURHLEdBRUg7QUFBQTtBQUFBLFFBQU0sS0FBS0gsQ0FBWCxFQUFjLE1BQU9ELEtBQUtHLEdBQTFCO0FBQ0U7QUFBQTtBQUFBLFVBQUcsV0FBV1AsTUFBTUksSUFBcEIsRUFBMEIsUUFBTyxRQUFqQztBQUE0Q0EsYUFBS0k7QUFBakQ7QUFERixLQUZKO0FBS0QsR0FOTSxDQUFQO0FBT0QsQ0FSRDs7QUFVQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBV0EsTUFBTVYsS0FBTixDQUFZVyxTQUE1QjtBQUNHVCxnQkFBWVEsTUFBTWIsS0FBbEIsRUFBeUJhLE1BQU1WLEtBQS9CO0FBREgsR0FEVztBQUFBLENBQWI7O0FBS0FTLEtBQUtiLFNBQUwsR0FBaUJBLFNBQWpCO2tCQUNlYSxJIiwiZmlsZSI6Ik1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuY29uc3QgcmVuZGVyTGlua3MgPSAobGlua3MsIHN0eWxlKSA9PiB7XG4gIHJldHVybiBsaW5rcy5tYXAoIChsaW5rLCBpKSA9PiB7XG4gICAgcmV0dXJuIGxpbmsudHlwZSA9PT0gJ2VtYWlsJ1xuICAgICAgPyA8YSBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGUubGlua30gaHJlZj17IGxpbmsudXJsIH0+eyBsaW5rLm5hbWUgfTwvYT5cbiAgICAgIDogPExpbmsga2V5PXtpfSBocmVmPXsgbGluay51cmwgfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPnsgbGluay5uYW1lIH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgfSlcbn1cblxuY29uc3QgTWVudSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlLmNvbXBvbmVudH0+XG4gICAge3JlbmRlckxpbmtzKHByb3BzLmxpbmtzLCBwcm9wcy5zdHlsZSl9XG4gIDwvZGl2PlxuXG5NZW51LnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19

/***/ },
/* 102 */,
/* 103 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var socials = [{
	  "name": "LinkedIn",
	  "url": "https://www.linkedin.com/in/guillaumekolly/",
	  "type": "url"
	}, {
	  "name": "Github",
	  "url": "https://github.com/guillaumeko",
	  "type": "url"
	}, {
	  "name": "guillaume.kolly[at]gmail.com",
	  "url": "mailto:guillaume.kolly@gmail.com",
	  "type": "email"
	}];
	
	exports.default = socials;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc29jaWFscy5qcyJdLCJuYW1lcyI6WyJzb2NpYWxzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFVBQVUsQ0FDZDtBQUNFLFVBQVEsVUFEVjtBQUVFLFNBQU8sNkNBRlQ7QUFHRSxVQUFRO0FBSFYsQ0FEYyxFQU1kO0FBQ0UsVUFBUSxRQURWO0FBRUUsU0FBTyxnQ0FGVDtBQUdFLFVBQVE7QUFIVixDQU5jLEVBV2Q7QUFDRSxVQUFRLDhCQURWO0FBRUUsU0FBTyxrQ0FGVDtBQUdFLFVBQVE7QUFIVixDQVhjLENBQWhCOztrQkFrQmVBLE8iLCJmaWxlIjoic29jaWFscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzb2NpYWxzID0gW1xuICB7XG4gICAgXCJuYW1lXCI6IFwiTGlua2VkSW5cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ndWlsbGF1bWVrb2xseS9cIixcbiAgICBcInR5cGVcIjogXCJ1cmxcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiR2l0aHViXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3VpbGxhdW1la29cIixcbiAgICBcInR5cGVcIjogXCJ1cmxcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiZ3VpbGxhdW1lLmtvbGx5W2F0XWdtYWlsLmNvbVwiLFxuICAgIFwidXJsXCI6IFwibWFpbHRvOmd1aWxsYXVtZS5rb2xseUBnbWFpbC5jb21cIixcbiAgICBcInR5cGVcIjogXCJlbWFpbFwiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHNvY2lhbHM7XG4iXX0=

/***/ },
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(5);
	
	var _css2 = _interopRequireDefault(_css);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  type: _react.PropTypes.string.isRequired,
	  value: _react.PropTypes.string.isRequired,
	  style: _react.PropTypes.object
	};
	
	var Button = function Button(props) {
	  return _react2.default.createElement('input', { type: props.type, value: props.value, className: (0, _css2.default)(button, props.style) });
	};
	
	var button = (0, _css2.default)({
	  color: '#000',
	  float: 'left',
	  padding: '15px 5px',
	  border: '4px solid #fff',
	  background: 'transparent',
	  letterSpacing: '0.12em',
	  width: '100%',
	  fontSize: '1.3em',
	  fontWeight: 'bold',
	  textTransform: 'uppercase',
	  cursor: 'pointer',
	  WebkitTransition: 'all 600ms',
	  MozTransition: 'all 600ms',
	  OTransition: 'all 600ms',
	  MsTransition: 'all 600ms',
	  transition: 'all 600ms',
	  ':hover': {
	    backgroundColor: 'rgba(0,0,0,0)',
	    color: '#fff'
	  }
	});
	
	Button.propTypes = propTypes;
	exports.default = Button;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInR5cGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJzdHlsZSIsIm9iamVjdCIsIkJ1dHRvbiIsInByb3BzIiwiYnV0dG9uIiwiY29sb3IiLCJmbG9hdCIsInBhZGRpbmciLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwibGV0dGVyU3BhY2luZyIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxRQUFRLGlCQUFVQyxNQUFWLENBQWlCQyxVQURUO0FBRWhCQyxTQUFRLGlCQUFVRixNQUFWLENBQWlCQyxVQUZUO0FBR2hCRSxTQUFRLGlCQUFVQztBQUhGLENBQWxCOztBQU1BLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYix5Q0FBTyxNQUFNQSxNQUFNUCxJQUFuQixFQUF5QixPQUFPTyxNQUFNSixLQUF0QyxFQUE2QyxXQUFXLG1CQUFJSyxNQUFKLEVBQVlELE1BQU1ILEtBQWxCLENBQXhELEdBRGE7QUFBQSxDQUFmOztBQUdBLElBQU1JLFNBQVMsbUJBQUk7QUFDakJDLFNBQU8sTUFEVTtBQUVqQkMsU0FBTyxNQUZVO0FBR2pCQyxXQUFTLFVBSFE7QUFJakJDLFVBQVEsZ0JBSlM7QUFLakJDLGNBQVksYUFMSztBQU1qQkMsaUJBQWUsUUFORTtBQU9qQkMsU0FBTyxNQVBVO0FBUWpCQyxZQUFVLE9BUk87QUFTakJDLGNBQVksTUFUSztBQVVqQkMsaUJBQWUsV0FWRTtBQVdqQkMsVUFBUSxTQVhTO0FBWWpCQyxvQkFBa0IsV0FaRDtBQWFqQkMsaUJBQWUsV0FiRTtBQWNqQkMsZUFBYSxXQWRJO0FBZWpCQyxnQkFBYyxXQWZHO0FBZ0JqQkMsY0FBWSxXQWhCSztBQWlCakIsWUFBVTtBQUNSQyxxQkFBaUIsZUFEVDtBQUVSaEIsV0FBTztBQUZDO0FBakJPLENBQUosQ0FBZjs7QUF1QkFILE9BQU9QLFNBQVAsR0FBbUJBLFNBQW5CO2tCQUNlTyxNIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHR5cGU6ICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6ICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+XG4gIDxpbnB1dCB0eXBlPXtwcm9wcy50eXBlfSB2YWx1ZT17cHJvcHMudmFsdWV9IGNsYXNzTmFtZT17Y3NzKGJ1dHRvbiwgcHJvcHMuc3R5bGUpfSAvPlxuXG5jb25zdCBidXR0b24gPSBjc3Moe1xuICBjb2xvcjogJyMwMDAnLFxuICBmbG9hdDogJ2xlZnQnLFxuICBwYWRkaW5nOiAnMTVweCA1cHgnLFxuICBib3JkZXI6ICc0cHggc29saWQgI2ZmZicsXG4gIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gIGxldHRlclNwYWNpbmc6ICcwLjEyZW0nLFxuICB3aWR0aDogJzEwMCUnLFxuICBmb250U2l6ZTogJzEuM2VtJyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICBNc1RyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICB0cmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgJzpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICB9XG59KVxuXG5CdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ==

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(5);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _Input = __webpack_require__(151);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _TextArea = __webpack_require__(152);
	
	var _TextArea2 = _interopRequireDefault(_TextArea);
	
	var _Button = __webpack_require__(149);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Theme = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  sendTo: _react.PropTypes.string.isRequired,
	  style: _react.PropTypes.object
	};
	
	var sendToAddress = function sendToAddress(email) {
	  return "https://formspree.io/" + email;
	};
	
	var ContactForm = function ContactForm(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _css2.default)(formblock, props.style) },
	    _react2.default.createElement(
	      'h1',
	      { className: title },
	      'CONTACT ME'
	    ),
	    _react2.default.createElement(
	      'form',
	      { action: sendToAddress(props.sendTo), method: 'POST' },
	      _react2.default.createElement(_Input2.default, { type: 'text', name: 'name', style: name }),
	      _react2.default.createElement(_Input2.default, { type: 'email', name: 'email', style: email }),
	      _react2.default.createElement(_Input2.default, { type: 'text', name: 'subject', style: subject }),
	      _react2.default.createElement(_TextArea2.default, { name: 'message', style: message }),
	      _react2.default.createElement('input', { type: 'hidden', name: '_next', value: 'http://localhost:3000' }),
	      _react2.default.createElement(_Button2.default, { type: 'submit', value: 'Send', style: _Theme._button })
	    )
	  );
	};
	
	var formblock = (0, _css2.default)({
	  padding: '2em',
	  width: '80%',
	  margin: '0 auto',
	  textAlign: 'center',
	  '@media(max-width: 1240px)': {
	    padding: '2em',
	    width: '80%'
	  },
	  '@media(max-width: 600px)': {
	    padding: '1em',
	    width: '90%',
	    height: '100%'
	  }
	});
	
	var title = (0, _css2.default)({
	  fontSize: '400%',
	  color: _Theme.theme.colors.white,
	  '@media(max-width: 1240px)': { fontSize: '200%' },
	  '@media(max-width: 600px)': { fontSize: '200%' }
	});
	
	var name = (0, _css2.default)({ float: 'right', width: '45%' });
	var email = (0, _css2.default)({ float: 'right', width: '45%', marginRight: '10%' });
	var subject = (0, _css2.default)({ width: '100%' });
	var message = (0, _css2.default)({ float: 'none' });
	
	ContactForm.propTypes = propTypes;
	exports.default = ContactForm;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwic2VuZFRvIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN0eWxlIiwib2JqZWN0Iiwic2VuZFRvQWRkcmVzcyIsImVtYWlsIiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsImZvcm1ibG9jayIsInRpdGxlIiwibmFtZSIsInN1YmplY3QiLCJtZXNzYWdlIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImNvbG9ycyIsIndoaXRlIiwiZmxvYXQiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsVUFBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBTyxpQkFBVUM7QUFGRCxDQUFsQjs7QUFLQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxTQUFXLDBCQUEwQkEsS0FBckM7QUFBQSxDQUF0Qjs7QUFFQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLFdBQVcsbUJBQUlDLFNBQUosRUFBZUQsTUFBTUwsS0FBckIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFXTyxLQUFmO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQU0sUUFBUUwsY0FBY0csTUFBTVIsTUFBcEIsQ0FBZCxFQUEyQyxRQUFPLE1BQWxEO0FBQ0UsdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsT0FBT1csSUFBdEMsR0FERjtBQUVFLHVEQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE9BQXpCLEVBQWlDLE9BQU9MLEtBQXhDLEdBRkY7QUFHRSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxTQUF4QixFQUFrQyxPQUFPTSxPQUF6QyxHQUhGO0FBSUUsMERBQVUsTUFBSyxTQUFmLEVBQXlCLE9BQU9DLE9BQWhDLEdBSkY7QUFLRSwrQ0FBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxPQUExQixFQUFrQyxPQUFNLHVCQUF4QyxHQUxGO0FBTUUsd0RBQVEsTUFBSyxRQUFiLEVBQXNCLE9BQU0sTUFBNUIsRUFBbUMscUJBQW5DO0FBTkY7QUFGRixHQURrQjtBQUFBLENBQXBCOztBQWFBLElBQU1KLFlBQVksbUJBQUk7QUFDcEJLLFdBQVMsS0FEVztBQUVwQkMsU0FBTyxLQUZhO0FBR3BCQyxVQUFRLFFBSFk7QUFJcEJDLGFBQVcsUUFKUztBQUtwQiwrQkFBNkI7QUFDM0JILGFBQVMsS0FEa0I7QUFFM0JDLFdBQU87QUFGb0IsR0FMVDtBQVNwQiw4QkFBNEI7QUFDMUJELGFBQVMsS0FEaUI7QUFFMUJDLFdBQU8sS0FGbUI7QUFHMUJHLFlBQVE7QUFIa0I7QUFUUixDQUFKLENBQWxCOztBQWdCQSxJQUFNUixRQUFRLG1CQUFJO0FBQ2hCUyxZQUFVLE1BRE07QUFFaEJDLFNBQU8sYUFBTUMsTUFBTixDQUFhQyxLQUZKO0FBR2hCLCtCQUE2QixFQUFFSCxVQUFVLE1BQVosRUFIYjtBQUloQiw4QkFBNEIsRUFBRUEsVUFBVSxNQUFaO0FBSlosQ0FBSixDQUFkOztBQU9BLElBQU1SLE9BQU8sbUJBQUksRUFBRVksT0FBTyxPQUFULEVBQWtCUixPQUFPLEtBQXpCLEVBQUosQ0FBYjtBQUNBLElBQU1ULFFBQVEsbUJBQUksRUFBRWlCLE9BQU8sT0FBVCxFQUFrQlIsT0FBTyxLQUF6QixFQUFnQ1MsYUFBYSxLQUE3QyxFQUFKLENBQWQ7QUFDQSxJQUFNWixVQUFVLG1CQUFJLEVBQUVHLE9BQU8sTUFBVCxFQUFKLENBQWhCO0FBQ0EsSUFBTUYsVUFBVSxtQkFBSSxFQUFFVSxPQUFPLE1BQVQsRUFBSixDQUFoQjs7QUFFQWhCLFlBQVlSLFNBQVosR0FBd0JBLFNBQXhCO2tCQUNlUSxXIiwiZmlsZSI6IkNvbnRhY3RGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vVGV4dEFyZWEnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX2J1dHRvbiB9IGZyb20gJy4vbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHNlbmRUbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5jb25zdCBzZW5kVG9BZGRyZXNzID0gKGVtYWlsKSA9PiBcImh0dHBzOi8vZm9ybXNwcmVlLmlvL1wiICsgZW1haWxcblxuY29uc3QgQ29udGFjdEZvcm0gPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtjc3MoZm9ybWJsb2NrLCBwcm9wcy5zdHlsZSl9PlxuICAgIDxoMSBjbGFzc05hbWU9e3RpdGxlfT5DT05UQUNUIE1FPC9oMT5cbiAgICA8Zm9ybSBhY3Rpb249e3NlbmRUb0FkZHJlc3MocHJvcHMuc2VuZFRvKX0gbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBzdHlsZT17bmFtZX0gLz5cbiAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBzdHlsZT17ZW1haWx9IC8+XG4gICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIHN0eWxlPXtzdWJqZWN0fSAvPlxuICAgICAgPFRleHRBcmVhIG5hbWU9XCJtZXNzYWdlXCIgc3R5bGU9e21lc3NhZ2V9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbmV4dFwiIHZhbHVlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIgLz5cbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIHN0eWxlPXtfYnV0dG9ufSAvPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG5cbmNvbnN0IGZvcm1ibG9jayA9IGNzcyh7XG4gIHBhZGRpbmc6ICcyZW0nLFxuICB3aWR0aDogJzgwJScsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgIHBhZGRpbmc6ICcyZW0nLFxuICAgIHdpZHRoOiAnODAlJyxcbiAgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMWVtJyxcbiAgICB3aWR0aDogJzkwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH1cbn0pXG5cbmNvbnN0IHRpdGxlID0gY3NzKHtcbiAgZm9udFNpemU6ICc0MDAlJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IGZvbnRTaXplOiAnMjAwJScsIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7IGZvbnRTaXplOiAnMjAwJScsIH1cbn0pXG5cbmNvbnN0IG5hbWUgPSBjc3MoeyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc0NSUnIH0pXG5jb25zdCBlbWFpbCA9IGNzcyh7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzQ1JScsIG1hcmdpblJpZ2h0OiAnMTAlJyB9KVxuY29uc3Qgc3ViamVjdCA9IGNzcyh7IHdpZHRoOiAnMTAwJScgfSlcbmNvbnN0IG1lc3NhZ2UgPSBjc3MoeyBmbG9hdDogJ25vbmUnIH0pXG5cbkNvbnRhY3RGb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cbiJdfQ==

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(23);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _css;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css2 = __webpack_require__(5);
	
	var _css3 = _interopRequireDefault(_css2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  type: _react.PropTypes.string.isRequired,
	  name: _react.PropTypes.string.isRequired,
	  placeholder: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};
	
	var Input = function Input(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: props.style },
	    _react2.default.createElement('label', { htmlFor: props.name }),
	    _react2.default.createElement('input', { type: props.type,
	      name: props.name,
	      className: input,
	      placeholder: props.placeholder ? props.placeholder : props.name,
	      required: true })
	  );
	};
	
	var input = (0, _css3.default)((_css = {
	  font: 'inherit',
	  margin: '0',
	  lineHeight: 'normal',
	  background: 'none',
	  border: 'none',
	  borderBottom: 'solid 2px #fff',
	  fontSize: '1em'
	}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, ':focus', {
	  outline: 'none',
	  padding: '0 0 0.875em 0'
	}), _css));
	
	Input.propTypes = propTypes;
	exports.default = Input;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJpbnB1dCIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwib3V0bGluZSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLFFBQWMsaUJBQVVGLE1BQVYsQ0FBaUJDLFVBRmY7QUFHaEJFLGVBQWMsaUJBQVVILE1BSFI7QUFJaEJJLFNBQWMsaUJBQVVDO0FBSlIsQ0FBbEI7O0FBT0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1ILEtBQXRCO0FBQ0UsNkNBQU8sU0FBU0csTUFBTUwsSUFBdEIsR0FERjtBQUVFLDZDQUFPLE1BQU1LLE1BQU1SLElBQW5CO0FBQ08sWUFBTVEsTUFBTUwsSUFEbkI7QUFFTyxpQkFBV00sS0FGbEI7QUFHTyxtQkFBYUQsTUFBTUosV0FBTixHQUFvQkksTUFBTUosV0FBMUIsR0FBd0NJLE1BQU1MLElBSGxFO0FBSU8sb0JBSlA7QUFGRixHQURZO0FBQUEsQ0FBZDs7QUFVQSxJQUFNTSxRQUFRO0FBQ1pDLFFBQU0sU0FETTtBQUVaQyxVQUFRLEdBRkk7QUFHWkMsY0FBWSxRQUhBO0FBSVpDLGNBQVksTUFKQTtBQUtaQyxVQUFRLE1BTEk7QUFNWkMsZ0JBQWMsZ0JBTkY7QUFPWkMsWUFBVTtBQVBFLGlEQVFKLGlCQVJJLGtEQVNILGVBVEcsZ0RBVUwsTUFWSyx1Q0FXWixRQVhZLEVBV0Y7QUFDUkMsV0FBUyxNQUREO0FBRVJDLFdBQVM7QUFGRCxDQVhFLFNBQWQ7O0FBaUJBWCxNQUFNUixTQUFOLEdBQWtCQSxTQUFsQjtrQkFDZVEsSyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHR5cGU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2Vob2xkZXI6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG59XG5cbmNvbnN0IElucHV0ID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGV9PlxuICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT48L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPXtwcm9wcy50eXBlfVxuICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0fVxuICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IHByb3BzLm5hbWV9XG4gICAgICAgICAgIHJlcXVpcmVkIC8+XG4gIDwvZGl2PlxuXG5jb25zdCBpbnB1dCA9IGNzcyh7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWFyZ2luOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJCb3R0b206ICdzb2xpZCAycHggI2ZmZicsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcbiAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB3aWR0aDogJzEwMCUnLFxuICAnOmZvY3VzJzoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIH1cbn0pXG5cbklucHV0LnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiJdfQ==

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(23);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _css;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css2 = __webpack_require__(5);
	
	var _css3 = _interopRequireDefault(_css2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  placeholder: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  cols: _react.PropTypes.number,
	  raws: _react.PropTypes.number
	};
	
	var TextArea = function TextArea(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: props.style },
	    _react2.default.createElement('label', { htmlFor: props.name }),
	    _react2.default.createElement('textarea', { className: textarea,
	      type: 'text',
	      name: props.name,
	      placeholder: props.placeholder ? props.placeholder : props.name,
	      cols: props.cols ? props.cols : 30,
	      rows: props.rows ? props.rows : 5,
	      required: true })
	  );
	};
	
	var textarea = (0, _css3.default)((_css = {
	  font: 'inherit',
	  margin: '0',
	  lineHeight: 'normal',
	  background: 'none',
	  border: 'none',
	  borderBottom: 'solid 2px #fff',
	  fontSize: '1em'
	}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'WebkitBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MozBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MsBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'OBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'boxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'WebkitTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MozTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MsTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'OTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'transition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'height', '150px'), (0, _defineProperty3.default)(_css, 'resize', 'none'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'lineHeight', '150%'), (0, _defineProperty3.default)(_css, 'overflow', 'auto'), (0, _defineProperty3.default)(_css, ':focus', {
	  outline: 'none',
	  padding: '0 0 0.875em 0'
	}), _css));
	
	TextArea.propTypes = propTypes;
	exports.default = TextArea;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJhd3MiLCJUZXh0QXJlYSIsInByb3BzIiwidGV4dGFyZWEiLCJyb3dzIiwiZm9udCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJvdXRsaW5lIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsUUFBYyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEZjtBQUVoQkMsZUFBYyxpQkFBVUYsTUFGUjtBQUdoQkcsU0FBYyxpQkFBVUMsTUFIUjtBQUloQkMsUUFBYyxpQkFBVUMsTUFKUjtBQUtoQkMsUUFBYyxpQkFBVUQ7QUFMUixDQUFsQjs7QUFRQSxJQUFNRSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQUssV0FBV0EsTUFBTU4sS0FBdEI7QUFDRSw2Q0FBTyxTQUFTTSxNQUFNVixJQUF0QixHQURGO0FBRUUsZ0RBQVUsV0FBV1csUUFBckI7QUFDVSxZQUFLLE1BRGY7QUFFVSxZQUFNRCxNQUFNVixJQUZ0QjtBQUdVLG1CQUFhVSxNQUFNUCxXQUFOLEdBQW9CTyxNQUFNUCxXQUExQixHQUF3Q08sTUFBTVYsSUFIckU7QUFJVSxZQUFNVSxNQUFNSixJQUFOLEdBQWFJLE1BQU1KLElBQW5CLEdBQTBCLEVBSjFDO0FBS1UsWUFBTUksTUFBTUUsSUFBTixHQUFhRixNQUFNRSxJQUFuQixHQUEwQixDQUwxQztBQU1VLG9CQU5WO0FBRkYsR0FEZTtBQUFBLENBQWpCOztBQWFBLElBQU1ELFdBQVc7QUFDZkUsUUFBTSxTQURTO0FBRWZDLFVBQVEsR0FGTztBQUdmQyxjQUFZLFFBSEc7QUFJZkMsY0FBWSxNQUpHO0FBS2ZDLFVBQVEsTUFMTztBQU1mQyxnQkFBYyxnQkFOQztBQU9mQyxZQUFVO0FBUEssaURBUVAsaUJBUk8sa0RBU04sZUFUTSxnREFVUixNQVZRLDBEQVdFLFlBWEYsdURBWUQsWUFaQyxzREFhRixZQWJFLHFEQWNILFlBZEcsb0RBZUosWUFmSSwyREFnQkcsVUFoQkgsd0RBaUJBLFVBakJBLHVEQWtCRCxVQWxCQyxzREFtQkYsVUFuQkUscURBb0JILFVBcEJHLGlEQXFCUCxPQXJCTyxpREFzQlAsTUF0Qk8sZ0RBdUJSLE1BdkJRLHFEQXdCSCxNQXhCRyxtREF5QkwsTUF6QkssdUNBMEJmLFFBMUJlLEVBMEJMO0FBQ1JDLFdBQVMsTUFERDtBQUVSQyxXQUFTO0FBRkQsQ0ExQkssU0FBakI7O0FBZ0NBWixTQUFTVixTQUFULEdBQXFCQSxTQUFyQjtrQkFDZVUsUSIsImZpbGUiOiJUZXh0QXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sczogICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICByYXdzOiAgICAgICAgIFByb3BUeXBlcy5udW1iZXJcbn1cblxuY29uc3QgVGV4dEFyZWEgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIGNsYXNzTmFtZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICBjb2xzPXtwcm9wcy5jb2xzID8gcHJvcHMuY29scyA6IDMwfVxuICAgICAgICAgICAgICByb3dzPXtwcm9wcy5yb3dzID8gcHJvcHMucm93cyA6IDV9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgIDwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuXG5jb25zdCB0ZXh0YXJlYSA9IGNzcyh7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWFyZ2luOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJCb3R0b206ICdzb2xpZCAycHggI2ZmZicsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcbiAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBXZWJraXRCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgTW96Qm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE1zQm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE9Cb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE1velRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE1zVHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIGhlaWdodDogJzE1MHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGxpbmVIZWlnaHQ6ICcxNTAlJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9XG59KVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG4iXX0=

/***/ },
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(14);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(15);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(16);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(18);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(17);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(5);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _glamor = __webpack_require__(12);
	
	var _link = __webpack_require__(73);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _HeadBloc = __webpack_require__(63);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _FullBackground = __webpack_require__(84);
	
	var _FullBackground2 = _interopRequireDefault(_FullBackground);
	
	var _Menu = __webpack_require__(101);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _ContactForm = __webpack_require__(150);
	
	var _ContactForm2 = _interopRequireDefault(_ContactForm);
	
	var _Theme = __webpack_require__(21);
	
	var _socials = __webpack_require__(103);
	
	var _socials2 = _interopRequireDefault(_socials);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_React$Component) {
	  (0, _inherits3.default)(_class, _React$Component);
	
	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: 'render',
	    value: function render() {
	      var socials = this.props.socials;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_HeadBloc2.default, { title: 'Guillaume Kolly | Contact',
	          description: 'Guillaume Kolly | Full stack developer living in Lyon. Contact Me here.' }),
	        _react2.default.createElement(
	          'section',
	          { className: (0, _css2.default)(halfside, left) },
	          _react2.default.createElement(_FullBackground2.default, null),
	          _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
	          _react2.default.createElement(
	            'div',
	            { className: resume },
	            'You can also watch my\xA0',
	            _react2.default.createElement(
	              _link2.default,
	              { prefetch: true, href: '/resume' },
	              _react2.default.createElement(
	                'a',
	                { className: _Theme._tag },
	                'online resume'
	              )
	            ),
	            ' or\xA0',
	            _react2.default.createElement(
	              _link2.default,
	              { href: '#' },
	              _react2.default.createElement(
	                'a',
	                { className: _Theme._tag },
	                'download it'
	              )
	            ),
	            '.'
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: (0, _css2.default)(halfside, right) },
	          _react2.default.createElement(_ContactForm2.default, { sendTo: 'guillaume.kolly@gmail.com' })
	        )
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function getInitialProps() {
	      return { socials: _socials2.default };
	    }
	  }]);
	  return _class;
	}(_react2.default.Component);
	
	// SOCIAL AND RESUME links
	
	
	exports.default = _class;
	var social = {
	  component: (0, _glamor.style)({
	    textTransform: 'uppercase',
	    zIndex: '999',
	    position: 'relative',
	    top: '50%',
	    display: 'block',
	    margin: '0 auto',
	    textAlign: 'center',
	    '@media(max-width: 600px)': { top: 'calc(80px / 2)' }
	  }),
	  link: (0, _glamor.style)({
	    margin: '0 3% 0 0',
	    textDecoration: 'none',
	    color: _Theme.theme.colors.black,
	    fontSize: '1.2em',
	    fontWeight: 'bold',
	    ':hover': { textDecoration: 'line-through' },
	    '@media(max-width: 1240px)': {
	      fontSize: '1em',
	      display: 'list-item',
	      margin: '10px auto'
	    },
	    '@media(max-width: 600px)': {
	      fontSize: '0.9em',
	      margin: '5px auto'
	    }
	  })
	};
	
	var resume = (0, _css2.default)({
	  position: 'relative',
	  top: 'calc(50% + 20px)',
	  textAlign: 'center',
	  '@media(max-width: 600px)': {
	    fontSize: '0.8em',
	    margin: '5px auto',
	    top: '70px'
	  }
	});
	
	// CONTAINER SETTINGS
	var halfside = (0, _css2.default)({
	  width: '50%',
	  height: '100vh',
	  position: 'absolute',
	  top: '0',
	  '@media(max-width: 600px)': { width: '100%' }
	});
	
	var left = (0, _css2.default)({
	  left: '0',
	  background: 'transparent',
	  '@media(max-width: 600px)': { height: '160px' }
	});
	
	var right = (0, _css2.default)({
	  right: '0',
	  background: _Theme.theme.colors.primary,
	  zIndex: '999',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  '@media(max-width: 600px)': {
	    top: 'calc(160px + 20px)',
	    left: '0',
	    height: '100%',
	    position: 'relative'
	  }
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsic29jaWFscyIsInByb3BzIiwiaGFsZnNpZGUiLCJsZWZ0Iiwic29jaWFsIiwicmVzdW1lIiwicmlnaHQiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJkaXNwbGF5IiwibWFyZ2luIiwidGV4dEFsaWduIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUFBLFVBQ0NBLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDREQUFVLE9BQU0sMkJBQWhCO0FBQ0UsdUJBQVkseUVBRGQsR0FERjtBQUdFO0FBQUE7QUFBQSxZQUFTLFdBQVcsbUJBQUlFLFFBQUosRUFBY0MsSUFBZCxDQUFwQjtBQUNFLHVFQURGO0FBRUUsMERBQU0sT0FBT0gsT0FBYixFQUFzQixPQUFPSSxNQUE3QixHQUZGO0FBR0U7QUFBQTtBQUFBLGNBQUssV0FBV0MsTUFBaEI7QUFBQTtBQUVFO0FBQUE7QUFBQSxnQkFBTSxjQUFOLEVBQWUsTUFBSyxTQUFwQjtBQUE4QjtBQUFBO0FBQUEsa0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQTlCLGFBRkY7QUFBQTtBQUdFO0FBQUE7QUFBQSxnQkFBTSxNQUFLLEdBQVg7QUFBZTtBQUFBO0FBQUEsa0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQWYsYUFIRjtBQUFBO0FBQUE7QUFIRixTQUhGO0FBWUU7QUFBQTtBQUFBLFlBQVMsV0FBVyxtQkFBSUgsUUFBSixFQUFjSSxLQUFkLENBQXBCO0FBQ0UsaUVBQWEsUUFBTywyQkFBcEI7QUFERjtBQVpGLE9BREY7QUFrQkQ7OztzQ0F6QnlCO0FBQ3hCLGFBQU8sRUFBRU4sMEJBQUYsRUFBUDtBQUNEOzs7RUFKMEIsZ0JBQU1PLFM7O0FBOEJuQzs7OztBQUNBLElBQU1ILFNBQVM7QUFDYkksYUFBVyxtQkFBTTtBQUNmQyxtQkFBZSxXQURBO0FBRWZDLFlBQVEsS0FGTztBQUdmQyxjQUFVLFVBSEs7QUFJZkMsU0FBSyxLQUpVO0FBS2ZDLGFBQVMsT0FMTTtBQU1mQyxZQUFRLFFBTk87QUFPZkMsZUFBVyxRQVBJO0FBUWYsZ0NBQTRCLEVBQUVILEtBQUssZ0JBQVA7QUFSYixHQUFOLENBREU7QUFXYkksUUFBTSxtQkFBTTtBQUNWRixZQUFRLFVBREU7QUFFVkcsb0JBQWdCLE1BRk47QUFHVkMsV0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBSFY7QUFJVkMsY0FBVSxPQUpBO0FBS1ZDLGdCQUFZLE1BTEY7QUFNVixjQUFVLEVBQUVMLGdCQUFnQixjQUFsQixFQU5BO0FBT1YsaUNBQTZCO0FBQzNCSSxnQkFBVSxLQURpQjtBQUUzQlIsZUFBUyxXQUZrQjtBQUczQkMsY0FBUTtBQUhtQixLQVBuQjtBQVlWLGdDQUE0QjtBQUMxQk8sZ0JBQVUsT0FEZ0I7QUFFMUJQLGNBQVE7QUFGa0I7QUFabEIsR0FBTjtBQVhPLENBQWY7O0FBOEJBLElBQU1ULFNBQVMsbUJBQUk7QUFDakJNLFlBQVUsVUFETztBQUVqQkMsT0FBSyxrQkFGWTtBQUdqQkcsYUFBVyxRQUhNO0FBSWpCLDhCQUE0QjtBQUMxQk0sY0FBVSxPQURnQjtBQUUxQlAsWUFBUSxVQUZrQjtBQUcxQkYsU0FBSztBQUhxQjtBQUpYLENBQUosQ0FBZjs7QUFXQTtBQUNBLElBQU1WLFdBQVcsbUJBQUk7QUFDbkJxQixTQUFPLEtBRFk7QUFFbkJDLFVBQVEsT0FGVztBQUduQmIsWUFBVSxVQUhTO0FBSW5CQyxPQUFLLEdBSmM7QUFLbkIsOEJBQTRCLEVBQUVXLE9BQU8sTUFBVDtBQUxULENBQUosQ0FBakI7O0FBUUEsSUFBTXBCLE9BQU8sbUJBQUk7QUFDZkEsUUFBTSxHQURTO0FBRWZzQixjQUFZLGFBRkc7QUFHZiw4QkFBNEIsRUFBRUQsUUFBUSxPQUFWO0FBSGIsQ0FBSixDQUFiOztBQU1BLElBQU1sQixRQUFRLG1CQUFJO0FBQ2hCQSxTQUFPLEdBRFM7QUFFaEJtQixjQUFZLGFBQU1OLE1BQU4sQ0FBYU8sT0FGVDtBQUdoQmhCLFVBQVEsS0FIUTtBQUloQkcsV0FBUyxNQUpPO0FBS2hCYyxjQUFZLFFBTEk7QUFNaEJDLGtCQUFnQixRQU5BO0FBT2hCLDhCQUE0QjtBQUMxQmhCLFNBQUssb0JBRHFCO0FBRTFCVCxVQUFNLEdBRm9CO0FBRzFCcUIsWUFBUSxNQUhrQjtBQUkxQmIsY0FBVTtBQUpnQjtBQVBaLENBQUosQ0FBZCIsImZpbGUiOiJjb250YWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHNvY2lhbHM6IHNvY2lhbHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT1cIkd1aWxsYXVtZSBLb2xseSB8IENvbnRhY3RcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIENvbnRhY3QgTWUgaGVyZS5cIiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NzcyhoYWxmc2lkZSwgbGVmdCApfT5cbiAgICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVzdW1lfT5cbiAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB3YXRjaCBteSZuYnNwO1xuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj48YSBjbGFzc05hbWU9e190YWd9Pm9ubGluZSByZXN1bWU8L2E+PC9MaW5rPiBvciZuYnNwO1xuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBjbGFzc05hbWU9e190YWd9PmRvd25sb2FkIGl0PC9hPjwvTGluaz4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MoaGFsZnNpZGUsIHJpZ2h0KX0+XG4gICAgICAgICAgPENvbnRhY3RGb3JtIHNlbmRUbz1cImd1aWxsYXVtZS5rb2xseUBnbWFpbC5jb21cIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBTT0NJQUwgQU5EIFJFU1VNRSBsaW5rc1xuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgdG9wOiAnY2FsYyg4MHB4IC8gMiknLCB9XG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAzJSAwIDAnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBtYXJnaW46ICc1cHggYXV0bycsXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZXN1bWUgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdG9wOiAnY2FsYyg1MCUgKyAyMHB4KScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nLFxuICAgIHRvcDogJzcwcHgnLFxuICB9XG59KVxuXG4vLyBDT05UQUlORVIgU0VUVElOR1NcbmNvbnN0IGhhbGZzaWRlID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgd2lkdGg6ICcxMDAlJyB9XG59KVxuXG5jb25zdCBsZWZ0ID0gY3NzKHtcbiAgbGVmdDogJzAnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzogeyBoZWlnaHQ6ICcxNjBweCcsIH1cbn0pXG5cbmNvbnN0IHJpZ2h0ID0gY3NzKHtcbiAgcmlnaHQ6ICcwJyxcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIHpJbmRleDogJzk5OScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICB0b3A6ICdjYWxjKDE2MHB4ICsgMjBweCknLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfVxufSlcbiJdfQ==
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/contact"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/contact") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi93YXJuaW5nLmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9pbmRleC5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9pbmRleC5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDUtZW50aXRpZXMuanM/ZWQxZThjOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9UaGVtZS5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9hbnNpLXJlZ2V4L2luZGV4LmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanM/ZWQxZThjOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanM/ZWQxZThjOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanM/ZWQxZThjOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvY2FtZWxpemUuanM/ZWQxZThjOCIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lLmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9oeXBoZW5hdGUuanM/ZWQxZThjOCIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZS5qcz9lZDFlOGM4Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvbWVtb2l6ZVN0cmluZ09ubHkuanM/ZWQxZThjOCIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL0NTU1Byb3BlcnR5LmpzP2VkMWU4YzgiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9kYW5nZXJvdXNTdHlsZVZhbHVlLmpzP2RlMDAzYTEiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL2NsZWFuLmpzP2RlMDAzYTEiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL2hhc2guanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvaW5saW5lLXN0eWxlLXByZWZpeC1hbGwvaW5kZXguanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvcGx1Z2lucy5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9zaGVldC5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9pbmRleC5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDQtZW50aXRpZXMuanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL3htbC1lbnRpdGllcy5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL34vbmV4dC9kaXN0L2NsaWVudC93ZWJwYWNrLWhvdC1taWRkbGV3YXJlLWNsaWVudC5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzP2RlMDAzYTEiLCJ3ZWJwYWNrOi8vLy4vZGF0YS90aGVtZS5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzP2RlMDAzYTEiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzP2RlMDAzYTEiLCJ3ZWJwYWNrOi8vLy4vfi9zdHJpcC1hbnNpL2luZGV4LmpzP2RlMDAzYTEiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9jbGllbnQtb3ZlcmxheS5qcz9kZTAwM2ExIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LmpzP2RlMDAzYTEiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9wcm9jZXNzLXVwZGF0ZS5qcz9kZTAwM2ExIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2xpbmtcIj9kZTAwM2ExIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9kYXRhL3BhcnRpY2xlcy5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL34vcmVhY3QtcGFydGljbGVzLWpzL2xpYi9wYXJ0aWNsZXMuanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUuanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9kYXRhL3NvY2lhbHMuanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanM/ZGUwMDNhMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0LmpzP2RlMDAzYTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0QXJlYS5qcz9kZTAwM2ExIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbnRhY3QuanM/ZGUwMDNhMSJdLCJuYW1lcyI6WyJ0aGVtZSIsIl90YWciLCJjb2xvciIsImNvbG9ycyIsInRleHQiLCJmb250V2VpZ2h0IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc19wcmltYXJ5IiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uRGVsYXkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJwcmltYXJ5IiwiX2J1dHRvbiIsImJhY2tncm91bmQiLCJ3aGl0ZSIsInByb3BUeXBlcyIsInRpdGxlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiSGVhZEJsb2MiLCJwcm9wcyIsImdsb2JhbCIsIm1hcmdpbiIsImJvcmRlciIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJ0ZXh0U2hhZG93IiwiV2Via2l0Rm9udFNtb290aGluZyIsIk1vek9zeEZvbnRTbW9vdGhpbmciLCJteV90aGVtZSIsImxpZ2h0X3RleHQiLCJ0aW1lX2xpbmUiLCJ0aW1lX2xpbmVfdGl0bGUiLCJibGFjayIsInRyYW5zX3NlY29uZGFyeSIsInNlY29uZGFyeSIsIkZ1bGxCYWNrZ3JvdW5kIiwic3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsInBhcnRpY2xlcyIsIkNvbXBvbmVudCIsIm9iamVjdCIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInB1c2giLCJwYXJ0aWNsZXNfbmIiLCJyZW1vdmUiLCJyZXRpbmFfZGV0ZWN0IiwibGlua3MiLCJhcnJheSIsInJlbmRlckxpbmtzIiwibWFwIiwibGluayIsImkiLCJ0eXBlIiwidXJsIiwibmFtZSIsIk1lbnUiLCJjb21wb25lbnQiLCJzb2NpYWxzIiwiQnV0dG9uIiwiYnV0dG9uIiwiZmxvYXQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJzZW5kVG8iLCJzZW5kVG9BZGRyZXNzIiwiZW1haWwiLCJDb250YWN0Rm9ybSIsImZvcm1ibG9jayIsInN1YmplY3QiLCJtZXNzYWdlIiwidGV4dEFsaWduIiwibWFyZ2luUmlnaHQiLCJwbGFjZWhvbGRlciIsIklucHV0IiwiaW5wdXQiLCJmb250IiwiYm9yZGVyQm90dG9tIiwib3V0bGluZSIsImNvbHMiLCJyYXdzIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsInJvd3MiLCJoYWxmc2lkZSIsInNvY2lhbCIsInJlc3VtZSIsInJpZ2h0IiwiekluZGV4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsMkZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQSxnQ0FBK0I7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBGQUF5RixlQUFlO0FBQ3hHO0FBQ0E7O0FBRUEsZ0NBQStCO0FBQy9COztBQUVBO0FBQ0EsMkZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQSxnQ0FBK0I7QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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b0M7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Qjs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCOzs7Ozs7QUN0SkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLEVBQUU7QUFDYixZQUFXLGtCQUFrQjtBQUM3QixhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qzs7Ozs7OztBQ3pGQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYztBQUNkO0FBQ0E7QUFDQSxrQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDckRBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ3JFQTs7QUFFQSxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBcUIsWUFBWSxFQUFFO0FBQ25DOztBQUVBLHNCQUFxQixZQUFZLHlvRUFBeW9FLFVBQVUsdWhCQUF1aEIsU0FBUyx5Z0NBQXlnQzs7QUFFN3RIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLDhDQUE2QztBQUM3Qzs7QUFFQSx3QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFFBQU87QUFDUCxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixnQkFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1AsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsRUFBQyxFOzs7Ozs7QUN0VkQ7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQSxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsaUNBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTixtQ0FBa0MsMEJBQTBCLDBDQUEwQyxnQkFBZ0IsT0FBTyxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsT0FBTyx3QkFBd0IsRUFBRTs7QUFFak0sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLHVFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBdUUsZUFBZTtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRTtBQUNuRTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQStEO0FBQy9EO0FBQ0EsUUFBTyxJQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLG1CQUFtQjtBQUN4QztBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQiwwQkFBMEI7QUFDN0MsRTs7Ozs7OztBQ2xIQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBLG1DQUFrQywwQkFBMEIsMENBQTBDLGdCQUFnQixPQUFPLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxPQUFPLHdCQUF3QixFQUFFOztBQUVqTTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBeUIsdUJBQXVCLEVBQUU7QUFDbEQ7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCLGlDQUFpQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTRFO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsZ0JBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRDtBQUNwRCxNQUFLO0FBQ0w7QUFDQTtBQUNBLDZEQUE0RDtBQUM1RDtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQSxTOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RCxnQkFBZ0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7O0FDM05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEMsVUFBUztBQUNULHFDQUFvQztBQUNwQyxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFVBQVM7QUFDVCxZQUFXO0FBQ1gsWUFBVztBQUNYLFdBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWM7QUFDZCxlQUFjO0FBQ2QsaUJBQWdCO0FBQ2hCLGtCQUFpQjtBQUNqQixnQkFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFKQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkdBQTRHLGdFQUFnRTtBQUM1SztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBLG1EQUFrRDtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7Ozs7Ozs7QUM5RUQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsS0FBTUcsWUFBWTtBQUNoQkMsVUFBYyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEZjtBQUVoQkMsZ0JBQWMsaUJBQVVGO0FBRlIsRUFBbEI7O0FBS0EsS0FBTUcsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxVQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFRQSxhQUFNTDtBQUFkLE1BREY7QUFFRSw2Q0FBTSxTQUFRLE9BQWQsR0FGRjtBQUdFLDZDQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHVDQUE5QixHQUhGO0FBSUUsNkNBQU0sTUFBSyxhQUFYLEVBQXlCLFNBQVNLLE1BQU1GLFdBQXhDLEdBSkY7QUFLRSw2Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSxtSEFBOUIsR0FMRjtBQU1FLDZDQUFNLE1BQUssV0FBWCxFQUF1QixTQUFRLGlCQUEvQjtBQU5GLElBRGU7QUFBQSxFQUFqQjs7QUFVQSxhQUFJRyxNQUFKLENBQVcsWUFBWCxFQUEwQjtBQUN4QmxCLFlBQVMsR0FEZTtBQUV4Qm1CLFdBQVEsR0FGZ0I7QUFHeEJDLFdBQVEsR0FIZ0I7QUFJeEJDLGVBQVksWUFKWTtBQUt4QkMsZUFBWSxNQUxZO0FBTXhCQyxhQUFVLEtBTmM7QUFPeEIxQixlQUFZLEtBUFk7QUFReEIyQixjQUFXLFFBUmE7QUFTeEJyQixtQkFBZ0IsTUFUUTtBQVV4QnNCLGVBQVksR0FWWTtBQVd4QkMsd0JBQXFCLGFBWEc7QUFZeEJDLHdCQUFxQjtBQVpHLEVBQTFCOztBQWVBWCxVQUFTTCxTQUFULEdBQXFCQSxTQUFyQjttQkFDZUssUTs7Ozs7Ozs7Ozs7O0FDbkNmLEtBQU1ZLFdBQVc7QUFDZmpDLFdBQVE7QUFDTkMsV0FBa0IsTUFEWjtBQUVOaUMsaUJBQWtCLFNBRlo7QUFHTkMsZ0JBQWtCLFNBSFo7QUFJTkMsc0JBQWtCLE1BSlo7QUFLTkMsWUFBa0IsU0FMWjtBQU1OdEIsWUFBa0IsTUFOWjtBQU9OUixvQkFBa0IsMEJBUFo7QUFRTkssY0FBa0IsdUJBUlo7QUFTTjBCLHNCQUFrQiwwQkFUWjtBQVVOQyxnQkFBa0I7QUFWWjtBQURPLEVBQWpCOzttQkFlZU4sUTs7Ozs7OztBQ2ZmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsWUFBWSxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHNCQUFzQixFQUFFO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkZBQTBGOztBQUUxRjtBQUNBLHdCQUF1QjtBQUN2QixxQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsZ0NBQStCLGNBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEwRix3Q0FBd0M7QUFDbEk7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkhBQTRILHFDQUFxQztBQUNqSztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsMENBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FB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QUFUO0FBTFQsRUFBSixDQUFqQjs7QUFRQSxLQUFNRyxPQUFPLG1CQUFJO0FBQ2ZBLFNBQU0sR0FEUztBQUVmaEMsZUFBWSxhQUZHO0FBR2YsK0JBQTRCLEVBQUU4QixRQUFRLE9BQVY7QUFIYixFQUFKLENBQWI7O0FBTUEsS0FBTTBGLFFBQVEsbUJBQUk7QUFDaEJBLFVBQU8sR0FEUztBQUVoQnhILGVBQVksYUFBTWQsTUFBTixDQUFhWSxPQUZUO0FBR2hCMkgsV0FBUSxLQUhRO0FBSWhCQyxZQUFTLE1BSk87QUFLaEJDLGVBQVksUUFMSTtBQU1oQkMsbUJBQWdCLFFBTkE7QUFPaEIsK0JBQTRCO0FBQzFCN0YsVUFBSyxvQkFEcUI7QUFFMUJDLFdBQU0sR0FGb0I7QUFHMUJGLGFBQVEsTUFIa0I7QUFJMUJGLGVBQVU7QUFKZ0I7QUFQWixFQUFKLENBQWQiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgfTtcblxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvY2Vzc1N0eWxlTmFtZSA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuY3JlYXRlTWFya3VwRm9yU3R5bGVzID0gY3JlYXRlTWFya3VwRm9yU3R5bGVzO1xuXG52YXIgX2NhbWVsaXplU3R5bGVOYW1lID0gcmVxdWlyZSgnZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUnKTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZVN0eWxlTmFtZSk7XG5cbnZhciBfZGFuZ2Vyb3VzU3R5bGVWYWx1ZSA9IHJlcXVpcmUoJy4vZGFuZ2Vyb3VzU3R5bGVWYWx1ZScpO1xuXG52YXIgX2Rhbmdlcm91c1N0eWxlVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGFuZ2Vyb3VzU3R5bGVWYWx1ZSk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lID0gcmVxdWlyZSgnZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbnZhciBfbWVtb2l6ZVN0cmluZ09ubHkgPSByZXF1aXJlKCdmYmpzL2xpYi9tZW1vaXplU3RyaW5nT25seScpO1xuXG52YXIgX21lbW9pemVTdHJpbmdPbmx5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lbW9pemVTdHJpbmdPbmx5KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gZXhwb3J0cy5wcm9jZXNzU3R5bGVOYW1lID0gKDAsIF9tZW1vaXplU3RyaW5nT25seTIuZGVmYXVsdCkoX2h5cGhlbmF0ZVN0eWxlTmFtZTIuZGVmYXVsdCk7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwcm92aWRlc01vZHVsZSBDU1NQcm9wZXJ0eU9wZXJhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgd2FyblZhbGlkU3R5bGU7XG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAnbXNUcmFuc2Zvcm0nIGlzIGNvcnJlY3QsIGJ1dCB0aGUgb3RoZXIgcHJlZml4ZXMgc2hvdWxkIGJlIGNhcGl0YWxpemVkXG4gICAgdmFyIGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybiA9IC9eKD86d2Via2l0fG1venxvKVtBLVpdLztcblxuICAgIC8vIHN0eWxlIHZhbHVlcyBzaG91bGRuJ3QgY29udGFpbiBhIHNlbWljb2xvblxuICAgIHZhciBiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4gPSAvO1xccyokLztcblxuICAgIHZhciB3YXJuZWRTdHlsZU5hbWVzID0ge307XG4gICAgdmFyIHdhcm5lZFN0eWxlVmFsdWVzID0ge307XG4gICAgdmFyIHdhcm5lZEZvck5hTlZhbHVlID0gZmFsc2U7XG5cbiAgICB2YXIgd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZShuYW1lLCBvd25lcikge1xuICAgICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdVbnN1cHBvcnRlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPyVzJywgbmFtZSwgKDAsIF9jYW1lbGl6ZVN0eWxlTmFtZTIuZGVmYXVsdCkobmFtZSksIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICB2YXIgd2FybkJhZFZlbmRvcmVkU3R5bGVOYW1lID0gZnVuY3Rpb24gd2FybkJhZFZlbmRvcmVkU3R5bGVOYW1lKG5hbWUsIG93bmVyKSB7XG4gICAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1Vuc3VwcG9ydGVkIHZlbmRvci1wcmVmaXhlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPyVzJywgbmFtZSwgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSksIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICB2YXIgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uID0gZnVuY3Rpb24gd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uKG5hbWUsIHZhbHVlLCBvd25lcikge1xuICAgICAgaWYgKHdhcm5lZFN0eWxlVmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSAmJiB3YXJuZWRTdHlsZVZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRTdHlsZVZhbHVlc1t2YWx1ZV0gPSB0cnVlO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdTdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgc2hvdWxkblxcJ3QgY29udGFpbiBhIHNlbWljb2xvbi4lcyAnICsgJ1RyeSBcIiVzOiAlc1wiIGluc3RlYWQuJywgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSwgbmFtZSwgdmFsdWUucmVwbGFjZShiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4sICcnKSkgOiB2b2lkIDA7XG4gICAgfTtcblxuICAgIHZhciB3YXJuU3R5bGVWYWx1ZUlzTmFOID0gZnVuY3Rpb24gd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSwgb3duZXIpIHtcbiAgICAgIGlmICh3YXJuZWRGb3JOYU5WYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZEZvck5hTlZhbHVlID0gdHJ1ZTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnYE5hTmAgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIGAlc2AgY3NzIHN0eWxlIHByb3BlcnR5LiVzJywgbmFtZSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gICAgfTtcblxuICAgIHZhciBjaGVja1JlbmRlck1lc3NhZ2UgPSBmdW5jdGlvbiBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpIHtcbiAgICAgIGlmIChvd25lcikge1xuICAgICAgICB2YXIgbmFtZSA9IG93bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7UmVhY3RET01Db21wb25lbnR9IGNvbXBvbmVudFxuICAgICAqL1xuXG4gICAgd2FyblZhbGlkU3R5bGUgPSBmdW5jdGlvbiB3YXJuVmFsaWRTdHlsZShuYW1lLCB2YWx1ZSwgY29tcG9uZW50KSB7XG4gICAgICAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tdmFyXG4gICAgICB2YXIgb3duZXIgPSB2b2lkIDA7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIG93bmVyID0gY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudC5fb3duZXI7XG4gICAgICB9XG4gICAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgICB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZShuYW1lLCBvd25lcik7XG4gICAgICB9IGVsc2UgaWYgKGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZShuYW1lLCBvd25lcik7XG4gICAgICB9IGVsc2UgaWYgKGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybi50ZXN0KHZhbHVlKSkge1xuICAgICAgICB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24obmFtZSwgdmFsdWUsIG93bmVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHdhcm5TdHlsZVZhbHVlSXNOYU4obmFtZSwgdmFsdWUsIG93bmVyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xufVxuXG4vKipcbiAgICogU2VyaWFsaXplcyBhIG1hcHBpbmcgb2Ygc3R5bGUgcHJvcGVydGllcyBmb3IgdXNlIGFzIGlubGluZSBzdHlsZXM6XG4gICAqXG4gICAqICAgPiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoe3dpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6IDB9KVxuICAgKiAgIFwid2lkdGg6MjAwcHg7aGVpZ2h0OjA7XCJcbiAgICpcbiAgICogVW5kZWZpbmVkIHZhbHVlcyBhcmUgaWdub3JlZCBzbyB0aGF0IGRlY2xhcmF0aXZlIHByb2dyYW1taW5nIGlzIGVhc2llci5cbiAgICogVGhlIHJlc3VsdCBzaG91bGQgYmUgSFRNTC1lc2NhcGVkIGJlZm9yZSBpbnNlcnRpb24gaW50byB0aGUgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3R5bGVzXG4gICAqIEBwYXJhbSB7UmVhY3RET01Db21wb25lbnR9IGNvbXBvbmVudFxuICAgKiBAcmV0dXJuIHs/c3RyaW5nfVxuICAgKi9cblxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHN0eWxlcywgY29tcG9uZW50KSB7XG4gIHZhciBzZXJpYWxpemVkID0gJyc7XG4gIGZvciAodmFyIHN0eWxlTmFtZSBpbiBzdHlsZXMpIHtcbiAgICB2YXIgaXNDdXN0b21Qcm9wID0gc3R5bGVOYW1lLmluZGV4T2YoJy0tJykgPT09IDA7XG4gICAgaWYgKCFzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBzdHlsZVZhbHVlID0gc3R5bGVzW3N0eWxlTmFtZV07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzQ3VzdG9tUHJvcCkge1xuICAgICAgd2FyblZhbGlkU3R5bGUoc3R5bGVOYW1lLCBzdHlsZVZhbHVlLCBjb21wb25lbnQpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVWYWx1ZSAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNDdXN0b21Qcm9wKSB7XG4gICAgICAgIHNlcmlhbGl6ZWQgKz0gc3R5bGVOYW1lICsgJzonICsgc3R5bGVWYWx1ZSArICc7JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWQgKz0gcHJvY2Vzc1N0eWxlTmFtZShzdHlsZU5hbWUpICsgJzonO1xuICAgICAgICBzZXJpYWxpemVkICs9ICgwLCBfZGFuZ2Vyb3VzU3R5bGVWYWx1ZTIuZGVmYXVsdCkoc3R5bGVOYW1lLCBzdHlsZVZhbHVlLCBjb21wb25lbnQpICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2VyaWFsaXplZCB8fCBudWxsO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb21wb3NlID0gZXhwb3J0cy5tZXJnZSA9IGV4cG9ydHMuJCA9IGV4cG9ydHMuc3R5bGUgPSBleHBvcnRzLnByZXNldHMgPSBleHBvcnRzLmtleWZyYW1lcyA9IGV4cG9ydHMuZm9udEZhY2UgPSBleHBvcnRzLmluc2VydEdsb2JhbCA9IGV4cG9ydHMuaW5zZXJ0UnVsZSA9IGV4cG9ydHMucGx1Z2lucyA9IGV4cG9ydHMuc3R5bGVTaGVldCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuc3BlZWR5ID0gc3BlZWR5O1xuZXhwb3J0cy5zaW11bGF0aW9ucyA9IHNpbXVsYXRpb25zO1xuZXhwb3J0cy5zaW11bGF0ZSA9IHNpbXVsYXRlO1xuZXhwb3J0cy5jc3NMYWJlbHMgPSBjc3NMYWJlbHM7XG5leHBvcnRzLmlzTGlrZVJ1bGUgPSBpc0xpa2VSdWxlO1xuZXhwb3J0cy5pZEZvciA9IGlkRm9yO1xuZXhwb3J0cy5jc3MgPSBjc3M7XG5leHBvcnRzLnJlaHlkcmF0ZSA9IHJlaHlkcmF0ZTtcbmV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcbmV4cG9ydHMuc2VsZWN0ID0gc2VsZWN0O1xuZXhwb3J0cy5wYXJlbnQgPSBwYXJlbnQ7XG5leHBvcnRzLm1lZGlhID0gbWVkaWE7XG5leHBvcnRzLnBzZXVkbyA9IHBzZXVkbztcbmV4cG9ydHMuYWN0aXZlID0gYWN0aXZlO1xuZXhwb3J0cy5hbnkgPSBhbnk7XG5leHBvcnRzLmNoZWNrZWQgPSBjaGVja2VkO1xuZXhwb3J0cy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuX2RlZmF1bHQgPSBfZGVmYXVsdDtcbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmV4cG9ydHMuZmlyc3RDaGlsZCA9IGZpcnN0Q2hpbGQ7XG5leHBvcnRzLmZpcnN0T2ZUeXBlID0gZmlyc3RPZlR5cGU7XG5leHBvcnRzLmZ1bGxzY3JlZW4gPSBmdWxsc2NyZWVuO1xuZXhwb3J0cy5mb2N1cyA9IGZvY3VzO1xuZXhwb3J0cy5ob3ZlciA9IGhvdmVyO1xuZXhwb3J0cy5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbmV4cG9ydHMuaW5SYW5nZSA9IGluUmFuZ2U7XG5leHBvcnRzLmludmFsaWQgPSBpbnZhbGlkO1xuZXhwb3J0cy5sYXN0Q2hpbGQgPSBsYXN0Q2hpbGQ7XG5leHBvcnRzLmxhc3RPZlR5cGUgPSBsYXN0T2ZUeXBlO1xuZXhwb3J0cy5sZWZ0ID0gbGVmdDtcbmV4cG9ydHMubGluayA9IGxpbms7XG5leHBvcnRzLm9ubHlDaGlsZCA9IG9ubHlDaGlsZDtcbmV4cG9ydHMub25seU9mVHlwZSA9IG9ubHlPZlR5cGU7XG5leHBvcnRzLm9wdGlvbmFsID0gb3B0aW9uYWw7XG5leHBvcnRzLm91dE9mUmFuZ2UgPSBvdXRPZlJhbmdlO1xuZXhwb3J0cy5yZWFkT25seSA9IHJlYWRPbmx5O1xuZXhwb3J0cy5yZWFkV3JpdGUgPSByZWFkV3JpdGU7XG5leHBvcnRzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG5leHBvcnRzLnJpZ2h0ID0gcmlnaHQ7XG5leHBvcnRzLnJvb3QgPSByb290O1xuZXhwb3J0cy5zY29wZSA9IHNjb3BlO1xuZXhwb3J0cy50YXJnZXQgPSB0YXJnZXQ7XG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5leHBvcnRzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuZXhwb3J0cy5kaXIgPSBkaXI7XG5leHBvcnRzLmxhbmcgPSBsYW5nO1xuZXhwb3J0cy5ub3QgPSBub3Q7XG5leHBvcnRzLm50aENoaWxkID0gbnRoQ2hpbGQ7XG5leHBvcnRzLm50aExhc3RDaGlsZCA9IG50aExhc3RDaGlsZDtcbmV4cG9ydHMubnRoTGFzdE9mVHlwZSA9IG50aExhc3RPZlR5cGU7XG5leHBvcnRzLm50aE9mVHlwZSA9IG50aE9mVHlwZTtcbmV4cG9ydHMuYWZ0ZXIgPSBhZnRlcjtcbmV4cG9ydHMuYmVmb3JlID0gYmVmb3JlO1xuZXhwb3J0cy5maXJzdExldHRlciA9IGZpcnN0TGV0dGVyO1xuZXhwb3J0cy5maXJzdExpbmUgPSBmaXJzdExpbmU7XG5leHBvcnRzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbmV4cG9ydHMuYmFja2Ryb3AgPSBiYWNrZHJvcDtcbmV4cG9ydHMucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbmV4cG9ydHMuY3NzRm9yID0gY3NzRm9yO1xuZXhwb3J0cy5hdHRyaWJzRm9yID0gYXR0cmlic0ZvcjtcblxudmFyIF9zaGVldCA9IHJlcXVpcmUoJy4vc2hlZXQuanMnKTtcblxudmFyIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL0NTU1Byb3BlcnR5T3BlcmF0aW9ucycpO1xuXG52YXIgX2NsZWFuID0gcmVxdWlyZSgnLi9jbGVhbi5qcycpO1xuXG52YXIgX2NsZWFuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsZWFuKTtcblxudmFyIF9wbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zJyk7XG5cbnZhciBfaGFzaCA9IHJlcXVpcmUoJy4vaGFzaCcpO1xuXG52YXIgX2hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9IC8qIHN0eWxlc2hlZXQgKi9cblxuXG52YXIgc3R5bGVTaGVldCA9IGV4cG9ydHMuc3R5bGVTaGVldCA9IG5ldyBfc2hlZXQuU3R5bGVTaGVldCgpO1xuLy8gYW4gaXNvbW9ycGhpYyBTdHlsZVNoZWV0IHNoaW0uIGhpZGVzIGFsbCB0aGUgbml0dHkgZ3JpdHR5LlxuXG4vLyAvKioqKioqKioqKioqKioqKiBMSUZUT0ZGIElOIDMuLi4gMi4uLiAxLi4uICoqKioqKioqKioqKioqKiovXG5zdHlsZVNoZWV0LmluamVjdCgpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4vLyAvKioqKioqKioqKioqKioqKiAgICAgIFRPIFRIRSBNT09PT09PT04gICAgICoqKioqKioqKioqKioqKiovXG5cbi8vIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHRvZ2dsZSBzcGVlZHlcbmZ1bmN0aW9uIHNwZWVkeShib29sKSB7XG4gIHJldHVybiBzdHlsZVNoZWV0LnNwZWVkeShib29sKTtcbn1cblxuLy8gcGx1Z2luc1xuLy8gd2UgaW5jbHVkZSB0aGVzZSBieSBkZWZhdWx0XG52YXIgcGx1Z2lucyA9IGV4cG9ydHMucGx1Z2lucyA9IHN0eWxlU2hlZXQucGx1Z2lucyA9IG5ldyBfcGx1Z2lucy5QbHVnaW5TZXQoX3BsdWdpbnMucHJlZml4ZXMsIF9wbHVnaW5zLmZhbGxiYWNrcyk7XG5wbHVnaW5zLm1lZGlhID0gbmV3IF9wbHVnaW5zLlBsdWdpblNldCgpOyAvLyBuZWF0ISBtZWRpYSwgZm9udC1mYWNlLCBrZXlmcmFtZXNcbnBsdWdpbnMuZm9udEZhY2UgPSBuZXcgX3BsdWdpbnMuUGx1Z2luU2V0KCk7XG5wbHVnaW5zLmtleWZyYW1lcyA9IG5ldyBfcGx1Z2lucy5QbHVnaW5TZXQoX3BsdWdpbnMucHJlZml4ZXMpO1xuXG4vLyBkZWZpbmUgc29tZSBjb25zdGFudHNcblxudmFyIGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgIXByb2Nlc3MuZW52Lk5PREVfRU5WO1xudmFyIGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7XG5cbi8qKioqIHNpbXVsYXRpb25zICAqKioqL1xuXG4vLyBhIGZsYWcgdG8gZW5hYmxlIHNpbXVsYXRpb24gbWV0YSB0YWdzIG9uIGRvbSBub2Rlc1xuLy8gZGVmYXVsdHMgdG8gdHJ1ZSBpbiBkZXYgbW9kZS4gcmVjb21tZW5kICpub3QqIHRvXG4vLyB0b2dnbGUgb2Z0ZW4uXG52YXIgY2FuU2ltdWxhdGUgPSBpc0RldjtcblxuLy8gd2UgdXNlIHRoZXNlIGZsYWdzIGZvciBpc3N1aW5nIHdhcm5pbmdzIHdoZW4gc2ltdWxhdGUgaXMgY2FsbGVkXG4vLyBpbiBwcm9kIC8gaW4gaW5jb3JyZWN0IG9yZGVyXG52YXIgd2FybmVkMSA9IGZhbHNlLFxuICAgIHdhcm5lZDIgPSBmYWxzZTtcblxuLy8gdG9nZ2xlcyBzaW11bGF0aW9uIGFjdGl2aXR5LiBzaG91bGRuJ3QgYmUgbmVlZGVkIGluIG1vc3QgY2FzZXNcbmZ1bmN0aW9uIHNpbXVsYXRpb25zKCkge1xuICB2YXIgYm9vbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcblxuICBjYW5TaW11bGF0ZSA9ICEhYm9vbDtcbn1cblxuLy8gdXNlIHRoaXMgb24gZG9tIG5vZGVzIHRvICdzaW11bGF0ZScgcHNldWRvY2xhc3Nlc1xuLy8gPGRpdiB7Li4uaG92ZXIoeyBjb2xvcjogJ3JlZCcgfSl9IHsuLi5zaW11bGF0ZSgnaG92ZXInLCAndmlzaXRlZCcpfT4uLi48L2Rpdj5cbi8vIHlvdSBjYW4gZXZlbiBzZW5kIGluIHNvbWUgd2VpcmQgb25lcywgYXMgbG9uZyBhcyBpdCdzIGluIHNpbXBsZSBmb3JtYXRcbi8vIGFuZCBtYXRjaGVzIGFuIGV4aXN0aW5nIHJ1bGUgb24gdGhlIGVsZW1lbnRcbi8vIGVnIHNpbXVsYXRlKCdudGhDaGlsZDInLCAnOmhvdmVyOmFjdGl2ZScpIGV0Y1xuZnVuY3Rpb24gc2ltdWxhdGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwc2V1ZG9zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHNldWRvc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHBzZXVkb3MgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShwc2V1ZG9zKTtcbiAgaWYgKCFwc2V1ZG9zKSByZXR1cm4ge307XG4gIGlmICghY2FuU2ltdWxhdGUpIHtcbiAgICBpZiAoIXdhcm5lZDEpIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FuXFwndCBzaW11bGF0ZSB3aXRob3V0IG9uY2UgY2FsbGluZyBzaW11bGF0aW9ucyh0cnVlKScpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgd2FybmVkMSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghaXNEZXYgJiYgIWlzVGVzdCAmJiAhd2FybmVkMikge1xuICAgICAgY29uc29sZS53YXJuKCdkb25cXCd0IHVzZSBzaW11bGF0aW9uIG91dHNpZGUgZGV2Jyk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB3YXJuZWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBwc2V1ZG9zLnJlZHVjZShmdW5jdGlvbiAobywgcCkge1xuICAgIHJldHVybiBvWydkYXRhLXNpbXVsYXRlLScgKyBzaW1wbGUocCldID0gJycsIG87XG4gIH0sIHt9KTtcbn1cblxuLyoqKiogbGFiZWxzICoqKiovXG4vLyB0b2dnbGUgZm9yIGRlYnVnIGxhYmVscy5cbi8vICpzaG91bGRuJ3QqIGhhdmUgdG8gbWVzcyB3aXRoIHRoaXMgbWFudWFsbHlcbnZhciBoYXNMYWJlbHMgPSBpc0RldjtcblxuZnVuY3Rpb24gY3NzTGFiZWxzKGJvb2wpIHtcbiAgaGFzTGFiZWxzID0gISFib29sO1xufVxuXG4vLyB0YWtlcyBhIHN0cmluZywgY29udmVydHMgdG8gbG93ZXJjYXNlLCBzdHJpcHMgb3V0IG5vbmFscGhhbnVtZXJpYy5cbmZ1bmN0aW9uIHNpbXBsZShzdHIpIHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05XS9nLCAnJyk7XG59XG5cbi8vIGhhc2hlcyBhIHN0cmluZyB0byBzb21ldGhpbmcgJ3VuaXF1ZSdcbi8vIHdlIHVzZSB0aGlzIHRvIGdlbmVyYXRlIGlkcyBmb3Igc3R5bGVzXG5cblxuZnVuY3Rpb24gaGFzaGlmeSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBvYmpzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBvYmpzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gKDAsIF9oYXNoMi5kZWZhdWx0KShvYmpzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh4KTtcbiAgfSkuam9pbignJykpLnRvU3RyaW5nKDM2KTtcbn1cblxuLy8gb2Ygc2hhcGUgeyAnZGF0YS1jc3MtPGlkPic6ICcnIH1cbmZ1bmN0aW9uIGlzTGlrZVJ1bGUocnVsZSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJ1bGUpLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4ICE9PSAndG9TdHJpbmcnO1xuICB9KTtcbiAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAhIS9kYXRhXFwtY3NzXFwtKFthLXpBLVowLTldKykvLmV4ZWMoa2V5c1swXSk7XG59XG5cbi8vIGV4dHJhY3RzIGlkIGZyb20gYSB7ICdkYXRhLWNzcy08aWQ+JzogJyd9IGxpa2Ugb2JqZWN0XG5mdW5jdGlvbiBpZEZvcihydWxlKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocnVsZSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggIT09ICd0b1N0cmluZyc7XG4gIH0pO1xuICBpZiAoa2V5cy5sZW5ndGggIT09IDEpIHRocm93IG5ldyBFcnJvcignbm90IGEgcnVsZScpO1xuICB2YXIgcmVnZXggPSAvZGF0YVxcLWNzc1xcLShbYS16QS1aMC05XSspLztcbiAgdmFyIG1hdGNoID0gcmVnZXguZXhlYyhrZXlzWzBdKTtcbiAgaWYgKCFtYXRjaCkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBydWxlJyk7XG4gIHJldHVybiBtYXRjaFsxXTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0b3IoaWQsIHBhdGgpIHtcblxuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwmL2csICcnKTtcbiAgfVxuICBpZiAoIXBhdGgpIHJldHVybiAnLmNzcy0nICsgaWQgKyAnLFtkYXRhLWNzcy0nICsgaWQgKyAnXSc7XG5cbiAgdmFyIHggPSBwYXRoLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHguaW5kZXhPZignJicpID49IDAgPyBbeC5yZXBsYWNlKC9cXCYvbWcsICcuY3NzLScgKyBpZCksIHgucmVwbGFjZSgvXFwmL21nLCAnW2RhdGEtY3NzLScgKyBpZCArICddJyldLmpvaW4oJywnKSAvLyB0b2RvIC0gbWFrZSBzdXJlIGVhY2ggc3ViIHNlbGVjdG9yIGhhcyBhbiAmXG4gICAgOiAnLmNzcy0nICsgaWQgKyB4ICsgJyxbZGF0YS1jc3MtJyArIGlkICsgJ10nICsgeDtcbiAgfSkuam9pbignLCcpO1xuXG4gIGlmIChjYW5TaW11bGF0ZSAmJiAvXlxcJlxcOi8uZXhlYyhwYXRoKSAmJiAhL1xccy8uZXhlYyhwYXRoKSkge1xuICAgIHggKz0gJywuY3NzLScgKyBpZCArICdbZGF0YS1zaW11bGF0ZS0nICsgc2ltcGxlKHBhdGgpICsgJ10sW2RhdGEtY3NzLScgKyBpZCArICddW2RhdGEtc2ltdWxhdGUtJyArIHNpbXBsZShwYXRoKSArICddJztcbiAgfVxuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gdG9DU1MoX3JlZikge1xuICB2YXIgc2VsZWN0b3IgPSBfcmVmLnNlbGVjdG9yLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIHZhciByZXN1bHQgPSBwbHVnaW5zLnRyYW5zZm9ybSh7IHNlbGVjdG9yOiBzZWxlY3Rvciwgc3R5bGU6IHN0eWxlIH0pO1xuICByZXR1cm4gcmVzdWx0LnNlbGVjdG9yICsgJ3snICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9yU3R5bGVzKShyZXN1bHQuc3R5bGUpICsgJ30nO1xufVxuXG5mdW5jdGlvbiBkZWNvbnN0cnVjdChzdHlsZSkge1xuICAvLyB3ZSBjYW4gYmUgc3VyZSBpdCdzIG5vdCBpbmZpbml0ZWx5IG5lc3RlZCBoZXJlIFxuICB2YXIgcGxhaW4gPSB2b2lkIDAsXG4gICAgICBzZWxlY3RzID0gdm9pZCAwLFxuICAgICAgbWVkaWFzID0gdm9pZCAwLFxuICAgICAgc3VwcG9ydHMgPSB2b2lkIDA7XG4gIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5LmluZGV4T2YoJyYnKSA+PSAwKSB7XG4gICAgICBzZWxlY3RzID0gc2VsZWN0cyB8fCB7fTtcbiAgICAgIHNlbGVjdHNba2V5XSA9IHN0eWxlW2tleV07XG4gICAgfSBlbHNlIGlmIChrZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIG1lZGlhcyA9IG1lZGlhcyB8fCB7fTtcbiAgICAgIG1lZGlhc1trZXldID0gZGVjb25zdHJ1Y3Qoc3R5bGVba2V5XSk7XG4gICAgfSBlbHNlIGlmIChrZXkuaW5kZXhPZignQHN1cHBvcnRzJykgPT09IDApIHtcbiAgICAgIHN1cHBvcnRzID0gc3VwcG9ydHMgfHwge307XG4gICAgICBzdXBwb3J0c1trZXldID0gZGVjb25zdHJ1Y3Qoc3R5bGVba2V5XSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdsYWJlbCcpIHtcbiAgICAgIGlmIChzdHlsZS5sYWJlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBsYWluID0gcGxhaW4gfHwge307XG4gICAgICAgIHBsYWluLmxhYmVsID0gc3R5bGUubGFiZWwuam9pbignLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGFpbiA9IHBsYWluIHx8IHt9O1xuICAgICAgcGxhaW5ba2V5XSA9IHN0eWxlW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHsgcGxhaW46IHBsYWluLCBzZWxlY3RzOiBzZWxlY3RzLCBtZWRpYXM6IG1lZGlhcywgc3VwcG9ydHM6IHN1cHBvcnRzIH07XG59XG5cbmZ1bmN0aW9uIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGlkLCBzdHlsZSkge1xuICB2YXIgY3NzID0gW107XG5cbiAgLy8gcGx1Z2lucyBoZXJlXG4gIHZhciBwbGFpbiA9IHN0eWxlLnBsYWluLFxuICAgICAgc2VsZWN0cyA9IHN0eWxlLnNlbGVjdHMsXG4gICAgICBtZWRpYXMgPSBzdHlsZS5tZWRpYXMsXG4gICAgICBzdXBwb3J0cyA9IHN0eWxlLnN1cHBvcnRzO1xuXG4gIGlmIChwbGFpbikge1xuICAgIGNzcy5wdXNoKHRvQ1NTKHsgc3R5bGU6IHBsYWluLCBzZWxlY3Rvcjogc2VsZWN0b3IoaWQpIH0pKTtcbiAgfVxuICBpZiAoc2VsZWN0cykge1xuICAgIE9iamVjdC5rZXlzKHNlbGVjdHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGNzcy5wdXNoKHRvQ1NTKHsgc3R5bGU6IHNlbGVjdHNba2V5XSwgc2VsZWN0b3I6IHNlbGVjdG9yKGlkLCBrZXkpIH0pKTtcbiAgICB9KTtcbiAgfVxuICBpZiAobWVkaWFzKSB7XG4gICAgT2JqZWN0LmtleXMobWVkaWFzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjc3MucHVzaChrZXkgKyAneycgKyBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhpZCwgbWVkaWFzW2tleV0pLmpvaW4oJycpICsgJ30nKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoc3VwcG9ydHMpIHtcbiAgICBPYmplY3Qua2V5cyhzdXBwb3J0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gY3NzLnB1c2goa2V5ICsgJ3snICsgZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1MoaWQsIHN1cHBvcnRzW2tleV0pLmpvaW4oJycpICsgJ30nKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY3NzO1xufVxuXG4vLyB0aGlzIGNhY2hlIHRvIHRyYWNrIHdoaWNoIHJ1bGVzIGhhdmVcbi8vIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGUgc3R5bGVzaGVldFxudmFyIGluc2VydGVkID0gc3R5bGVTaGVldC5pbnNlcnRlZCA9IHt9O1xuXG4vLyBhbmQgaGVscGVycyB0byBpbnNlcnQgcnVsZXMgaW50byBzYWlkIHN0eWxlU2hlZXRcbmZ1bmN0aW9uIGluc2VydChzcGVjKSB7XG4gIGlmICghaW5zZXJ0ZWRbc3BlYy5pZF0pIHtcbiAgICBpbnNlcnRlZFtzcGVjLmlkXSA9IHRydWU7XG4gICAgdmFyIGRlY29uc3RydWN0ZWQgPSBkZWNvbnN0cnVjdChzcGVjLnN0eWxlKTtcbiAgICBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhzcGVjLmlkLCBkZWNvbnN0cnVjdGVkKS5tYXAoZnVuY3Rpb24gKGNzc1J1bGUpIHtcbiAgICAgIHJldHVybiBzdHlsZVNoZWV0Lmluc2VydChjc3NSdWxlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBhIHNpbXBsZSBjYWNoZSB0byBzdG9yZSBnZW5lcmF0ZWQgcnVsZXNcbnZhciByZWdpc3RlcmVkID0gc3R5bGVTaGVldC5yZWdpc3RlcmVkID0ge307XG5mdW5jdGlvbiByZWdpc3RlcihzcGVjKSB7XG4gIGlmICghcmVnaXN0ZXJlZFtzcGVjLmlkXSkge1xuICAgIHJlZ2lzdGVyZWRbc3BlYy5pZF0gPSBzcGVjO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRSZWdpc3RlcmVkKHJ1bGUpIHtcbiAgaWYgKGlzTGlrZVJ1bGUocnVsZSkpIHtcbiAgICB2YXIgcmV0ID0gcmVnaXN0ZXJlZFtpZEZvcihydWxlKV07XG4gICAgaWYgKHJldCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tnbGFtb3JdIGFuIHVuZXhwZWN0ZWQgcnVsZSBjYWNoZSBtaXNzIG9jY3VycmVkLiBUaGlzIGlzIHByb2JhYmx5IGEgc2lnbiBvZiBtdWx0aXBsZSBnbGFtb3IgaW5zdGFuY2VzIGluIHlvdXIgYXBwLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2lzc3Vlcy83OScpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIHJldHVybiBydWxlO1xufVxuXG4vLyB0b2RvIC0gcGVyZlxudmFyIHJ1bGVDYWNoZSA9IHt9O1xuZnVuY3Rpb24gdG9SdWxlKHNwZWMpIHtcbiAgcmVnaXN0ZXIoc3BlYyk7XG4gIGluc2VydChzcGVjKTtcbiAgaWYgKHJ1bGVDYWNoZVtzcGVjLmlkXSkge1xuICAgIHJldHVybiBydWxlQ2FjaGVbc3BlYy5pZF07XG4gIH1cblxuICB2YXIgcmV0ID0gX2RlZmluZVByb3BlcnR5KHt9LCAnZGF0YS1jc3MtJyArIHNwZWMuaWQsIGhhc0xhYmVscyA/IHNwZWMubGFiZWwgfHwgJycgOiAnJyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXQsICd0b1N0cmluZycsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgcmV0dXJuICdjc3MtJyArIHNwZWMuaWQ7XG4gICAgfVxuICB9KTtcbiAgcnVsZUNhY2hlW3NwZWMuaWRdID0gcmV0O1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb25zb2xlLmxvZyh0aGlzKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3Ioa2V5KSB7XG4gIHZhciBwb3NzaWJsZXMgPSBbJzonLCAnLicsICdbJywgJz4nLCAnICddLFxuICAgICAgZm91bmQgPSBmYWxzZSxcbiAgICAgIGNoID0ga2V5LmNoYXJBdCgwKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NzaWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2ggPT09IHBvc3NpYmxlc1tpXSkge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3VuZCB8fCBrZXkuaW5kZXhPZignJicpID49IDA7XG59XG5cbmZ1bmN0aW9uIGpvaW5TZWxlY3RvcnMoYSwgYikge1xuICB2YXIgYXMgPSBhLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuICEoYS5pbmRleE9mKCcmJykgPj0gMCkgPyAnJicgKyBhIDogYTtcbiAgfSk7XG4gIHZhciBicyA9IGIuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gIShiLmluZGV4T2YoJyYnKSA+PSAwKSA/ICcmJyArIGIgOiBiO1xuICB9KTtcblxuICByZXR1cm4gYnMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIGIpIHtcbiAgICByZXR1cm4gYXJyLmNvbmNhdChhcy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBiLnJlcGxhY2UoL1xcJi9nLCBhKTtcbiAgICB9KSk7XG4gIH0sIFtdKS5qb2luKCcsJyk7XG59XG5cbmZ1bmN0aW9uIGpvaW5NZWRpYVF1ZXJpZXMoYSwgYikge1xuICByZXR1cm4gYSA/ICdAbWVkaWEgJyArIGEuc3Vic3RyaW5nKDYpICsgJyBhbmQgJyArIGIuc3Vic3RyaW5nKDYpIDogYjtcbn1cblxuZnVuY3Rpb24gaXNNZWRpYVF1ZXJ5KGtleSkge1xuICByZXR1cm4ga2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc1N1cHBvcnRzKGtleSkge1xuICByZXR1cm4ga2V5LmluZGV4T2YoJ0BzdXBwb3J0cycpID09PSAwO1xufVxuXG5mdW5jdGlvbiBqb2luU3VwcG9ydHMoYSwgYikge1xuICByZXR1cm4gYSA/ICdAc3VwcG9ydHMgJyArIGEuc3Vic3RyaW5nKDkpICsgJyBhbmQgJyArIGIuc3Vic3RyaW5nKDkpIDogYjtcbn1cblxuLy8gZmxhdHRlbiBhIG5lc3RlZCBhcnJheVxuZnVuY3Rpb24gZmxhdHRlbihpbkFycikge1xuICB2YXIgYXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5BcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbkFycltpXSkpIGFyciA9IGFyci5jb25jYXQoZmxhdHRlbihpbkFycltpXSkpO2Vsc2UgYXJyID0gYXJyLmNvbmNhdChpbkFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuLy8gbXV0YWJsZSEgbW9kaWZpZXMgZGVzdC5cbmZ1bmN0aW9uIGJ1aWxkKGRlc3QsIF9yZWYyKSB7XG4gIHZhciBfcmVmMiRzZWxlY3RvciA9IF9yZWYyLnNlbGVjdG9yLFxuICAgICAgc2VsZWN0b3IgPSBfcmVmMiRzZWxlY3RvciA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiRzZWxlY3RvcixcbiAgICAgIF9yZWYyJG1xID0gX3JlZjIubXEsXG4gICAgICBtcSA9IF9yZWYyJG1xID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYyJG1xLFxuICAgICAgX3JlZjIkc3VwcCA9IF9yZWYyLnN1cHAsXG4gICAgICBzdXBwID0gX3JlZjIkc3VwcCA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiRzdXBwLFxuICAgICAgX3JlZjIkc3JjID0gX3JlZjIuc3JjLFxuICAgICAgc3JjID0gX3JlZjIkc3JjID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYyJHNyYztcblxuXG4gIGlmICghQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgc3JjID0gW3NyY107XG4gIH1cbiAgc3JjID0gZmxhdHRlbihzcmMpO1xuXG4gIHNyYy5mb3JFYWNoKGZ1bmN0aW9uIChfc3JjKSB7XG4gICAgaWYgKGlzTGlrZVJ1bGUoX3NyYykpIHtcbiAgICAgIHZhciByZWcgPSBfZ2V0UmVnaXN0ZXJlZChfc3JjKTtcbiAgICAgIGlmIChyZWcudHlwZSAhPT0gJ2NzcycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgbWVyZ2UgdGhpcyBydWxlJyk7XG4gICAgICB9XG4gICAgICBfc3JjID0gcmVnLnN0eWxlO1xuICAgIH1cbiAgICBfc3JjID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkoX3NyYyk7XG4gICAgaWYgKF9zcmMuY29tcG9zZXMpIHtcbiAgICAgIGJ1aWxkKGRlc3QsIHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBtcTogbXEsIHN1cHA6IHN1cHAsIHNyYzogX3NyYy5jb21wb3NlcyB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoX3NyYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoaXNTZWxlY3RvcihrZXkpKSB7XG4gICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgPT09ICc6OnBsYWNlaG9sZGVyJyA/ICc6OnBsYWNlaG9sZGVyLCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIDo6LW1vei1wbGFjZWhvbGRlciwgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXInIDogc2VsZWN0b3I7XG5cbiAgICAgICAgYnVpbGQoZGVzdCwgeyBzZWxlY3Rvcjogam9pblNlbGVjdG9ycyhzZWxlY3Rvciwga2V5KSwgbXE6IG1xLCBzdXBwOiBzdXBwLCBzcmM6IF9zcmNba2V5XSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNNZWRpYVF1ZXJ5KGtleSkpIHtcbiAgICAgICAgYnVpbGQoZGVzdCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIG1xOiBqb2luTWVkaWFRdWVyaWVzKG1xLCBrZXkpLCBzdXBwOiBzdXBwLCBzcmM6IF9zcmNba2V5XSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0cyhrZXkpKSB7XG4gICAgICAgIGJ1aWxkKGRlc3QsIHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBtcTogbXEsIHN1cHA6IGpvaW5TdXBwb3J0cyhzdXBwLCBrZXkpLCBzcmM6IF9zcmNba2V5XSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnY29tcG9zZXMnKSB7XG4gICAgICAgIC8vIGlnbm9yZSwgd2UgYWxyZWFkeSBkZWFsdGggd2l0aCBpdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9kZXN0ID0gZGVzdDtcbiAgICAgICAgaWYgKHN1cHApIHtcbiAgICAgICAgICBfZGVzdFtzdXBwXSA9IF9kZXN0W3N1cHBdIHx8IHt9O1xuICAgICAgICAgIF9kZXN0ID0gX2Rlc3Rbc3VwcF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1xKSB7XG4gICAgICAgICAgX2Rlc3RbbXFdID0gX2Rlc3RbbXFdIHx8IHt9O1xuICAgICAgICAgIF9kZXN0ID0gX2Rlc3RbbXFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgIF9kZXN0W3NlbGVjdG9yXSA9IF9kZXN0W3NlbGVjdG9yXSB8fCB7fTtcbiAgICAgICAgICBfZGVzdCA9IF9kZXN0W3NlbGVjdG9yXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdsYWJlbCcgJiYgaGFzTGFiZWxzKSB7XG4gICAgICAgICAgZGVzdC5sYWJlbCA9IGRlc3QubGFiZWwuY29uY2F0KF9zcmMubGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9kZXN0W2tleV0gPSBfc3JjW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9jc3MocnVsZXMpIHtcbiAgdmFyIHN0eWxlID0geyBsYWJlbDogW10gfTtcbiAgYnVpbGQoc3R5bGUsIHsgc3JjOiBydWxlcyB9KTsgLy8gbXV0YXRpdmUhIGJ1dCB3b3J0aCBpdC4gXG5cbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkoc3R5bGUpLFxuICAgIHN0eWxlOiBzdHlsZSwgbGFiZWw6IHN0eWxlLmxhYmVsLmpvaW4oJy4nKSxcbiAgICB0eXBlOiAnY3NzJ1xuICB9O1xuICByZXR1cm4gdG9SdWxlKHNwZWMpO1xufVxuXG52YXIgbnVsbHJ1bGUgPSB7XG4gIC8vICdkYXRhLWNzcy1uaWwnOiAnJ1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShudWxscnVsZSwgJ3RvU3RyaW5nJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgIHJldHVybiAnY3NzLW5pbCc7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcnVsZXMgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIHJ1bGVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICBpZiAocnVsZXNbMF0gJiYgcnVsZXNbMF0ubGVuZ3RoICYmIHJ1bGVzWzBdLnJhdykge1xuICAgIHRocm93IG5ldyBFcnJvcigneW91IGZvcmdvdCB0byBpbmNsdWRlIGdsYW1vci9iYWJlbCBpbiB5b3VyIGJhYmVsIHBsdWdpbnMuJyk7XG4gIH1cblxuICBydWxlcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKHJ1bGVzKTtcbiAgaWYgKCFydWxlcykge1xuICAgIHJldHVybiBudWxscnVsZTsgLy8gdG9kbyAtIG51bGxydWxlIFxuICB9XG5cbiAgcmV0dXJuIF9jc3MocnVsZXMpO1xufVxuXG5jc3MuaW5zZXJ0ID0gZnVuY3Rpb24gKGNzcykge1xuICB2YXIgc3BlYyA9IHtcbiAgICBpZDogaGFzaGlmeShjc3MpLFxuICAgIGNzczogY3NzLFxuICAgIHR5cGU6ICdyYXcnXG4gIH07XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgc3R5bGVTaGVldC5pbnNlcnQoc3BlYy5jc3MpO1xuICAgIGluc2VydGVkW3NwZWMuaWRdID0gdHJ1ZTtcbiAgfVxufTtcblxudmFyIGluc2VydFJ1bGUgPSBleHBvcnRzLmluc2VydFJ1bGUgPSBjc3MuaW5zZXJ0O1xuXG5jc3MuZ2xvYmFsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBzdHlsZSkge1xuICByZXR1cm4gY3NzLmluc2VydChzZWxlY3RvciArICd7JyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvclN0eWxlcykoc3R5bGUpICsgJ30nKTtcbn07XG5cbnZhciBpbnNlcnRHbG9iYWwgPSBleHBvcnRzLmluc2VydEdsb2JhbCA9IGNzcy5nbG9iYWw7XG5cbmZ1bmN0aW9uIGluc2VydEtleWZyYW1lKHNwZWMpIHtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXIgPSBPYmplY3Qua2V5cyhzcGVjLmtleWZyYW1lcykubWFwKGZ1bmN0aW9uIChrZikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGx1Z2lucy5rZXlmcmFtZXMudHJhbnNmb3JtKHsgaWQ6IHNwZWMuaWQsIG5hbWU6IGtmLCBzdHlsZTogc3BlYy5rZXlmcmFtZXNba2ZdIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0Lm5hbWUgKyAneycgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMpKHJlc3VsdC5zdHlsZSkgKyAnfSc7XG4gICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnJ10uZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBzdHlsZVNoZWV0Lmluc2VydCgnQCcgKyBwcmVmaXggKyAna2V5ZnJhbWVzICcgKyAoc3BlYy5uYW1lICsgJ18nICsgc3BlYy5pZCkgKyAneycgKyBpbm5lciArICd9Jyk7XG4gICAgICB9KTtcblxuICAgICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSB0cnVlO1xuICAgIH0pKCk7XG4gIH1cbn1cbmNzcy5rZXlmcmFtZXMgPSBmdW5jdGlvbiAobmFtZSwga2ZzKSB7XG4gIGlmICgha2ZzKSB7XG4gICAga2ZzID0gbmFtZSwgbmFtZSA9ICdhbmltYXRpb24nO1xuICB9XG5cbiAgLy8gZG8gbm90IGlnbm9yZSBlbXB0eSBrZXlmcmFtZSBkZWZpbml0aW9ucyBmb3Igbm93LlxuICBrZnMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShrZnMpIHx8IHt9O1xuICB2YXIgc3BlYyA9IHtcbiAgICBpZDogaGFzaGlmeShuYW1lLCBrZnMpLFxuICAgIHR5cGU6ICdrZXlmcmFtZXMnLFxuICAgIG5hbWU6IG5hbWUsXG4gICAga2V5ZnJhbWVzOiBrZnNcbiAgfTtcbiAgcmVnaXN0ZXIoc3BlYyk7XG4gIGluc2VydEtleWZyYW1lKHNwZWMpO1xuICByZXR1cm4gbmFtZSArICdfJyArIHNwZWMuaWQ7XG59O1xuXG52YXIgZm9udEZhY2UgPSBleHBvcnRzLmZvbnRGYWNlID0gY3NzLmZvbnRGYWNlO1xudmFyIGtleWZyYW1lcyA9IGV4cG9ydHMua2V5ZnJhbWVzID0gY3NzLmtleWZyYW1lcztcblxuZnVuY3Rpb24gaW5zZXJ0Rm9udEZhY2Uoc3BlYykge1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgc3R5bGVTaGVldC5pbnNlcnQoJ0Bmb250LWZhY2V7JyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvclN0eWxlcykoc3BlYy5mb250KSArICd9Jyk7XG4gICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSB0cnVlO1xuICB9XG59XG5cbi8vIHdlIGRvbid0IGdvIGFsbCBvdXQgZm9yIGZvbnRzIGFzIG11Y2gsIGdpdmluZyBhIHNpbXBsZSBmb250IGxvYWRpbmcgc3RyYXRlZ3lcbi8vIHVzZSBhIGZhbmNpZXIgbGliIGlmIHlvdSBuZWVkIG1vYXIgcG93ZXJcbmNzcy5mb250RmFjZSA9IGZ1bmN0aW9uIChmb250KSB7XG4gIGZvbnQgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShmb250KTtcbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkoZm9udCksXG4gICAgdHlwZTogJ2ZvbnQtZmFjZScsXG4gICAgZm9udDogZm9udFxuICB9O1xuICByZWdpc3RlcihzcGVjKTtcbiAgaW5zZXJ0Rm9udEZhY2Uoc3BlYyk7XG5cbiAgcmV0dXJuIGZvbnQuZm9udEZhbWlseTtcbn07XG5cbi8vIHJlaHlkcmF0ZSB0aGUgaW5zZXJ0aW9uIGNhY2hlIHdpdGggaWRzIHNlbnQgZnJvbVxuLy8gcmVuZGVyU3RhdGljIC8gcmVuZGVyU3RhdGljT3B0aW1pemVkXG5mdW5jdGlvbiByZWh5ZHJhdGUoaWRzKSB7XG4gIC8vIGxvYWQgdXAgaWRzXG4gIE9iamVjdC5hc3NpZ24oaW5zZXJ0ZWQsIGlkcy5yZWR1Y2UoZnVuY3Rpb24gKG8sIGkpIHtcbiAgICByZXR1cm4gb1tpXSA9IHRydWUsIG87XG4gIH0sIHt9KSk7XG4gIC8vIGFzc3VtZSBjc3MgbG9hZGVkIHNlcGFyYXRlbHlcbn1cblxuLy8gY2xlYXJzIG91dCB0aGUgY2FjaGUgYW5kIGVtcHRpZXMgdGhlIHN0eWxlc2hlZXRcbi8vIGJlc3QgZm9yIHRlc3RzLCB0aG91Z2ggdGhlcmUgbWlnaHQgYmUgc29tZSB2YWx1ZSBmb3IgU1NSLlxuXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgaW5zZXJ0ZWQgPSBzdHlsZVNoZWV0Lmluc2VydGVkID0ge307XG4gIHJlZ2lzdGVyZWQgPSBzdHlsZVNoZWV0LnJlZ2lzdGVyZWQgPSB7fTtcbiAgcnVsZUNhY2hlID0ge307XG4gIHN0eWxlU2hlZXQuZmx1c2goKTtcbiAgc3R5bGVTaGVldC5pbmplY3QoKTtcbn1cblxudmFyIHByZXNldHMgPSBleHBvcnRzLnByZXNldHMgPSB7XG4gIG1vYmlsZTogJyhtaW4td2lkdGg6IDQwMHB4KScsXG4gIE1vYmlsZTogJ0BtZWRpYSAobWluLXdpZHRoOiA0MDBweCknLFxuICBwaGFibGV0OiAnKG1pbi13aWR0aDogNTUwcHgpJyxcbiAgUGhhYmxldDogJ0BtZWRpYSAobWluLXdpZHRoOiA1NTBweCknLFxuICB0YWJsZXQ6ICcobWluLXdpZHRoOiA3NTBweCknLFxuICBUYWJsZXQ6ICdAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpJyxcbiAgZGVza3RvcDogJyhtaW4td2lkdGg6IDEwMDBweCknLFxuICBEZXNrdG9wOiAnQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCknLFxuICBoZDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxuICBIZDogJ0BtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpJ1xufTtcblxudmFyIHN0eWxlID0gZXhwb3J0cy5zdHlsZSA9IGNzcztcblxuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdG9yKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIHN0eWxlc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc3R5bGUoc3R5bGVzKTtcbiAgfVxuICByZXR1cm4gY3NzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2VsZWN0b3IsIHN0eWxlcykpO1xufVxudmFyICQgPSBleHBvcnRzLiQgPSBzZWxlY3Q7XG5cbmZ1bmN0aW9uIHBhcmVudChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBzdHlsZXNbX2tleTUgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICByZXR1cm4gY3NzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2VsZWN0b3IgKyAnICYnLCBzdHlsZXMpKTtcbn1cblxudmFyIG1lcmdlID0gZXhwb3J0cy5tZXJnZSA9IGNzcztcbnZhciBjb21wb3NlID0gZXhwb3J0cy5jb21wb3NlID0gY3NzO1xuXG5mdW5jdGlvbiBtZWRpYShxdWVyeSkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjYgPiAxID8gX2xlbjYgLSAxIDogMCksIF9rZXk2ID0gMTsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIHJ1bGVzW19rZXk2IC0gMV0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sICdAbWVkaWEgJyArIHF1ZXJ5LCBydWxlcykpO1xufVxuXG5mdW5jdGlvbiBwc2V1ZG8oc2VsZWN0b3IpIHtcbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuNyA+IDEgPyBfbGVuNyAtIDEgOiAwKSwgX2tleTcgPSAxOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgc3R5bGVzW19rZXk3IC0gMV0gPSBhcmd1bWVudHNbX2tleTddO1xuICB9XG5cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdG9yLCBzdHlsZXMpKTtcbn1cblxuLy8gYWxsbGxsbCB0aGUgcHNldWRvY2xhc3Nlc1xuXG5mdW5jdGlvbiBhY3RpdmUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6YWN0aXZlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGFueSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzphbnknLCB4KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpjaGVja2VkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmRpc2FibGVkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGVtcHR5KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmVtcHR5JywgeCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZW5hYmxlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBfZGVmYXVsdCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpkZWZhdWx0JywgeCk7IC8vIG5vdGUgJ19kZWZhdWx0JyBuYW1lXG59XG5cbmZ1bmN0aW9uIGZpcnN0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZpcnN0JywgeCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0Q2hpbGQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Zmlyc3QtY2hpbGQnLCB4KTtcbn1cblxuZnVuY3Rpb24gZmlyc3RPZlR5cGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Zmlyc3Qtb2YtdHlwZScsIHgpO1xufVxuXG5mdW5jdGlvbiBmdWxsc2NyZWVuKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZ1bGxzY3JlZW4nLCB4KTtcbn1cblxuZnVuY3Rpb24gZm9jdXMoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Zm9jdXMnLCB4KTtcbn1cblxuZnVuY3Rpb24gaG92ZXIoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aG92ZXInLCB4KTtcbn1cblxuZnVuY3Rpb24gaW5kZXRlcm1pbmF0ZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzppbmRldGVybWluYXRlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGluUmFuZ2UoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aW4tcmFuZ2UnLCB4KTtcbn1cblxuZnVuY3Rpb24gaW52YWxpZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzppbnZhbGlkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGxhc3RDaGlsZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsYXN0LWNoaWxkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGxhc3RPZlR5cGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGFzdC1vZi10eXBlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGxlZnQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGVmdCcsIHgpO1xufVxuXG5mdW5jdGlvbiBsaW5rKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxpbmsnLCB4KTtcbn1cblxuZnVuY3Rpb24gb25seUNoaWxkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm9ubHktY2hpbGQnLCB4KTtcbn1cblxuZnVuY3Rpb24gb25seU9mVHlwZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpvbmx5LW9mLXR5cGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gb3B0aW9uYWwoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b3B0aW9uYWwnLCB4KTtcbn1cblxuZnVuY3Rpb24gb3V0T2ZSYW5nZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpvdXQtb2YtcmFuZ2UnLCB4KTtcbn1cblxuZnVuY3Rpb24gcmVhZE9ubHkoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cmVhZC1vbmx5JywgeCk7XG59XG5cbmZ1bmN0aW9uIHJlYWRXcml0ZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyZWFkLXdyaXRlJywgeCk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJlcXVpcmVkJywgeCk7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJpZ2h0JywgeCk7XG59XG5cbmZ1bmN0aW9uIHJvb3QoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cm9vdCcsIHgpO1xufVxuXG5mdW5jdGlvbiBzY29wZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpzY29wZScsIHgpO1xufVxuXG5mdW5jdGlvbiB0YXJnZXQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6dGFyZ2V0JywgeCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnZhbGlkJywgeCk7XG59XG5cbmZ1bmN0aW9uIHZpc2l0ZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6dmlzaXRlZCcsIHgpO1xufVxuXG4vLyBwYXJhbWV0ZXJpemVkIHBzZXVkb2NsYXNzZXNcbmZ1bmN0aW9uIGRpcihwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpkaXIoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbGFuZyhwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsYW5nKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIG5vdChwLCB4KSB7XG4gIC8vIHNob3VsZCB0aGlzIGJlIGEgcGx1Z2luP1xuICB2YXIgc2VsZWN0b3IgPSBwLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHgudHJpbSgpO1xuICB9KS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gJzpub3QoJyArIHggKyAnKSc7XG4gIH0pO1xuICBpZiAoc2VsZWN0b3IubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHBzZXVkbygnOm5vdCgnICsgcCArICcpJywgeCk7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdChzZWxlY3Rvci5qb2luKCcnKSwgeCk7XG59XG5mdW5jdGlvbiBudGhDaGlsZChwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpudGgtY2hpbGQoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbnRoTGFzdENoaWxkKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1sYXN0LWNoaWxkKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIG50aExhc3RPZlR5cGUocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bnRoLWxhc3Qtb2YtdHlwZSgnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBudGhPZlR5cGUocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bnRoLW9mLXR5cGUoJyArIHAgKyAnKScsIHgpO1xufVxuXG4vLyBwc2V1ZG9lbGVtZW50c1xuZnVuY3Rpb24gYWZ0ZXIoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmFmdGVyJywgeCk7XG59XG5mdW5jdGlvbiBiZWZvcmUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmJlZm9yZScsIHgpO1xufVxuZnVuY3Rpb24gZmlyc3RMZXR0ZXIoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmZpcnN0LWxldHRlcicsIHgpO1xufVxuZnVuY3Rpb24gZmlyc3RMaW5lKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpmaXJzdC1saW5lJywgeCk7XG59XG5mdW5jdGlvbiBzZWxlY3Rpb24oeCkge1xuICByZXR1cm4gcHNldWRvKCc6OnNlbGVjdGlvbicsIHgpO1xufVxuZnVuY3Rpb24gYmFja2Ryb3AoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmJhY2tkcm9wJywgeCk7XG59XG5mdW5jdGlvbiBwbGFjZWhvbGRlcih4KSB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9pc3N1ZXMvMTRcbiAgcmV0dXJuIGNzcyh7ICc6OnBsYWNlaG9sZGVyJzogeCB9KTtcbn1cblxuLyoqKiBoZWxwZXJzIGZvciB3ZWIgY29tcG9uZW50cyAqKiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvaXNzdWVzLzE2XG5cbmZ1bmN0aW9uIGNzc0ZvcigpIHtcbiAgZm9yICh2YXIgX2xlbjggPSBhcmd1bWVudHMubGVuZ3RoLCBydWxlcyA9IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgcnVsZXNbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgfVxuXG4gIHJ1bGVzID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkocnVsZXMpO1xuICByZXR1cm4gcnVsZXMgPyBydWxlcy5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICB2YXIgc3R5bGUgPSB7IGxhYmVsOiBbXSB9O1xuICAgIGJ1aWxkKHN0eWxlLCB7IHNyYzogciB9KTsgLy8gbXV0YXRpdmUhIGJ1dCB3b3J0aCBpdC4gICBcbiAgICByZXR1cm4gZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1MoaGFzaGlmeShzdHlsZSksIGRlY29uc3RydWN0KHN0eWxlKSkuam9pbignJyk7XG4gIH0pLmpvaW4oJycpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnNGb3IoKSB7XG4gIGZvciAodmFyIF9sZW45ID0gYXJndW1lbnRzLmxlbmd0aCwgcnVsZXMgPSBBcnJheShfbGVuOSksIF9rZXk5ID0gMDsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgIHJ1bGVzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICBydWxlcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKHJ1bGVzKTtcbiAgdmFyIGh0bWxBdHRyaWJ1dGVzID0gcnVsZXMgPyBydWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBpZEZvcihydWxlKTsgLy8gdGhyb3dhd2F5IGNoZWNrIGZvciBydWxlXG4gICAgdmFyIGtleSA9IE9iamVjdC5rZXlzKHJ1bGUpWzBdLFxuICAgICAgICB2YWx1ZSA9IHJ1bGVba2V5XTtcbiAgICByZXR1cm4ga2V5ICsgJz1cIicgKyAodmFsdWUgfHwgJycpICsgJ1wiJztcbiAgfSkuam9pbignICcpIDogJyc7XG5cbiAgcmV0dXJuIGh0bWxBdHRyaWJ1dGVzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgRU5USVRJRVMgPSBbWydBYWN1dGUnLCBbMTkzXV0sIFsnYWFjdXRlJywgWzIyNV1dLCBbJ0FicmV2ZScsIFsyNThdXSwgWydhYnJldmUnLCBbMjU5XV0sIFsnYWMnLCBbODc2Nl1dLCBbJ2FjZCcsIFs4NzY3XV0sIFsnYWNFJywgWzg3NjYsIDgxOV1dLCBbJ0FjaXJjJywgWzE5NF1dLCBbJ2FjaXJjJywgWzIyNl1dLCBbJ2FjdXRlJywgWzE4MF1dLCBbJ0FjeScsIFsxMDQwXV0sIFsnYWN5JywgWzEwNzJdXSwgWydBRWxpZycsIFsxOThdXSwgWydhZWxpZycsIFsyMzBdXSwgWydhZicsIFs4Mjg5XV0sIFsnQWZyJywgWzEyMDA2OF1dLCBbJ2FmcicsIFsxMjAwOTRdXSwgWydBZ3JhdmUnLCBbMTkyXV0sIFsnYWdyYXZlJywgWzIyNF1dLCBbJ2FsZWZzeW0nLCBbODUwMV1dLCBbJ2FsZXBoJywgWzg1MDFdXSwgWydBbHBoYScsIFs5MTNdXSwgWydhbHBoYScsIFs5NDVdXSwgWydBbWFjcicsIFsyNTZdXSwgWydhbWFjcicsIFsyNTddXSwgWydhbWFsZycsIFsxMDgxNV1dLCBbJ2FtcCcsIFszOF1dLCBbJ0FNUCcsIFszOF1dLCBbJ2FuZGFuZCcsIFsxMDgzN11dLCBbJ0FuZCcsIFsxMDgzNV1dLCBbJ2FuZCcsIFs4NzQzXV0sIFsnYW5kZCcsIFsxMDg0NF1dLCBbJ2FuZHNsb3BlJywgWzEwODQwXV0sIFsnYW5kdicsIFsxMDg0Ml1dLCBbJ2FuZycsIFs4NzM2XV0sIFsnYW5nZScsIFsxMDY2MF1dLCBbJ2FuZ2xlJywgWzg3MzZdXSwgWydhbmdtc2RhYScsIFsxMDY2NF1dLCBbJ2FuZ21zZGFiJywgWzEwNjY1XV0sIFsnYW5nbXNkYWMnLCBbMTA2NjZdXSwgWydhbmdtc2RhZCcsIFsxMDY2N11dLCBbJ2FuZ21zZGFlJywgWzEwNjY4XV0sIFsnYW5nbXNkYWYnLCBbMTA2NjldXSwgWydhbmdtc2RhZycsIFsxMDY3MF1dLCBbJ2FuZ21zZGFoJywgWzEwNjcxXV0sIFsnYW5nbXNkJywgWzg3MzddXSwgWydhbmdydCcsIFs4NzM1XV0sIFsnYW5ncnR2YicsIFs4ODk0XV0sIFsnYW5ncnR2YmQnLCBbMTA2NTNdXSwgWydhbmdzcGgnLCBbODczOF1dLCBbJ2FuZ3N0JywgWzE5N11dLCBbJ2FuZ3phcnInLCBbOTA4NF1dLCBbJ0FvZ29uJywgWzI2MF1dLCBbJ2FvZ29uJywgWzI2MV1dLCBbJ0FvcGYnLCBbMTIwMTIwXV0sIFsnYW9wZicsIFsxMjAxNDZdXSwgWydhcGFjaXInLCBbMTA4NjNdXSwgWydhcCcsIFs4Nzc2XV0sIFsnYXBFJywgWzEwODY0XV0sIFsnYXBlJywgWzg3NzhdXSwgWydhcGlkJywgWzg3NzldXSwgWydhcG9zJywgWzM5XV0sIFsnQXBwbHlGdW5jdGlvbicsIFs4Mjg5XV0sIFsnYXBwcm94JywgWzg3NzZdXSwgWydhcHByb3hlcScsIFs4Nzc4XV0sIFsnQXJpbmcnLCBbMTk3XV0sIFsnYXJpbmcnLCBbMjI5XV0sIFsnQXNjcicsIFsxMTk5NjRdXSwgWydhc2NyJywgWzExOTk5MF1dLCBbJ0Fzc2lnbicsIFs4Nzg4XV0sIFsnYXN0JywgWzQyXV0sIFsnYXN5bXAnLCBbODc3Nl1dLCBbJ2FzeW1wZXEnLCBbODc4MV1dLCBbJ0F0aWxkZScsIFsxOTVdXSwgWydhdGlsZGUnLCBbMjI3XV0sIFsnQXVtbCcsIFsxOTZdXSwgWydhdW1sJywgWzIyOF1dLCBbJ2F3Y29uaW50JywgWzg3NTVdXSwgWydhd2ludCcsIFsxMDc2OV1dLCBbJ2JhY2tjb25nJywgWzg3ODBdXSwgWydiYWNrZXBzaWxvbicsIFsxMDE0XV0sIFsnYmFja3ByaW1lJywgWzgyNDVdXSwgWydiYWNrc2ltJywgWzg3NjVdXSwgWydiYWNrc2ltZXEnLCBbODkwOV1dLCBbJ0JhY2tzbGFzaCcsIFs4NzI2XV0sIFsnQmFydicsIFsxMDk4M11dLCBbJ2JhcnZlZScsIFs4ODkzXV0sIFsnYmFyd2VkJywgWzg5NjVdXSwgWydCYXJ3ZWQnLCBbODk2Nl1dLCBbJ2JhcndlZGdlJywgWzg5NjVdXSwgWydiYnJrJywgWzkxNDFdXSwgWydiYnJrdGJyaycsIFs5MTQyXV0sIFsnYmNvbmcnLCBbODc4MF1dLCBbJ0JjeScsIFsxMDQxXV0sIFsnYmN5JywgWzEwNzNdXSwgWydiZHF1bycsIFs4MjIyXV0sIFsnYmVjYXVzJywgWzg3NTddXSwgWydiZWNhdXNlJywgWzg3NTddXSwgWydCZWNhdXNlJywgWzg3NTddXSwgWydiZW1wdHl2JywgWzEwNjcyXV0sIFsnYmVwc2knLCBbMTAxNF1dLCBbJ2Jlcm5vdScsIFs4NDkyXV0sIFsnQmVybm91bGxpcycsIFs4NDkyXV0sIFsnQmV0YScsIFs5MTRdXSwgWydiZXRhJywgWzk0Nl1dLCBbJ2JldGgnLCBbODUwMl1dLCBbJ2JldHdlZW4nLCBbODgxMl1dLCBbJ0JmcicsIFsxMjAwNjldXSwgWydiZnInLCBbMTIwMDk1XV0sIFsnYmlnY2FwJywgWzg4OThdXSwgWydiaWdjaXJjJywgWzk3MTFdXSwgWydiaWdjdXAnLCBbODg5OV1dLCBbJ2JpZ29kb3QnLCBbMTA3NTJdXSwgWydiaWdvcGx1cycsIFsxMDc1M11dLCBbJ2JpZ290aW1lcycsIFsxMDc1NF1dLCBbJ2JpZ3NxY3VwJywgWzEwNzU4XV0sIFsnYmlnc3RhcicsIFs5NzMzXV0sIFsnYmlndHJpYW5nbGVkb3duJywgWzk2NjFdXSwgWydiaWd0cmlhbmdsZXVwJywgWzk2NTFdXSwgWydiaWd1cGx1cycsIFsxMDc1Nl1dLCBbJ2JpZ3ZlZScsIFs4ODk3XV0sIFsnYmlnd2VkZ2UnLCBbODg5Nl1dLCBbJ2JrYXJvdycsIFsxMDUwOV1dLCBbJ2JsYWNrbG96ZW5nZScsIFsxMDczMV1dLCBbJ2JsYWNrc3F1YXJlJywgWzk2NDJdXSwgWydibGFja3RyaWFuZ2xlJywgWzk2NTJdXSwgWydibGFja3RyaWFuZ2xlZG93bicsIFs5NjYyXV0sIFsnYmxhY2t0cmlhbmdsZWxlZnQnLCBbOTY2Nl1dLCBbJ2JsYWNrdHJpYW5nbGVyaWdodCcsIFs5NjU2XV0sIFsnYmxhbmsnLCBbOTI1MV1dLCBbJ2JsazEyJywgWzk2MThdXSwgWydibGsxNCcsIFs5NjE3XV0sIFsnYmxrMzQnLCBbOTYxOV1dLCBbJ2Jsb2NrJywgWzk2MDhdXSwgWydibmUnLCBbNjEsIDg0MjFdXSwgWydibmVxdWl2JywgWzg4MDEsIDg0MjFdXSwgWydiTm90JywgWzEwOTg5XV0sIFsnYm5vdCcsIFs4OTc2XV0sIFsnQm9wZicsIFsxMjAxMjFdXSwgWydib3BmJywgWzEyMDE0N11dLCBbJ2JvdCcsIFs4ODY5XV0sIFsnYm90dG9tJywgWzg4NjldXSwgWydib3d0aWUnLCBbODkwNF1dLCBbJ2JveGJveCcsIFsxMDY5N11dLCBbJ2JveGRsJywgWzk0ODhdXSwgWydib3hkTCcsIFs5NTU3XV0sIFsnYm94RGwnLCBbOTU1OF1dLCBbJ2JveERMJywgWzk1NTldXSwgWydib3hkcicsIFs5NDg0XV0sIFsnYm94ZFInLCBbOTU1NF1dLCBbJ2JveERyJywgWzk1NTVdXSwgWydib3hEUicsIFs5NTU2XV0sIFsnYm94aCcsIFs5NDcyXV0sIFsnYm94SCcsIFs5NTUyXV0sIFsnYm94aGQnLCBbOTUxNl1dLCBbJ2JveEhkJywgWzk1NzJdXSwgWydib3hoRCcsIFs5NTczXV0sIFsnYm94SEQnLCBbOTU3NF1dLCBbJ2JveGh1JywgWzk1MjRdXSwgWydib3hIdScsIFs5NTc1XV0sIFsnYm94aFUnLCBbOTU3Nl1dLCBbJ2JveEhVJywgWzk1NzddXSwgWydib3htaW51cycsIFs4ODYzXV0sIFsnYm94cGx1cycsIFs4ODYyXV0sIFsnYm94dGltZXMnLCBbODg2NF1dLCBbJ2JveHVsJywgWzk0OTZdXSwgWydib3h1TCcsIFs5NTYzXV0sIFsnYm94VWwnLCBbOTU2NF1dLCBbJ2JveFVMJywgWzk1NjVdXSwgWydib3h1cicsIFs5NDkyXV0sIFsnYm94dVInLCBbOTU2MF1dLCBbJ2JveFVyJywgWzk1NjFdXSwgWydib3hVUicsIFs5NTYyXV0sIFsnYm94dicsIFs5NDc0XV0sIFsnYm94VicsIFs5NTUzXV0sIFsnYm94dmgnLCBbOTUzMl1dLCBbJ2JveHZIJywgWzk1NzhdXSwgWydib3hWaCcsIFs5NTc5XV0sIFsnYm94VkgnLCBbOTU4MF1dLCBbJ2JveHZsJywgWzk1MDhdXSwgWydib3h2TCcsIFs5NTY5XV0sIFsnYm94VmwnLCBbOTU3MF1dLCBbJ2JveFZMJywgWzk1NzFdXSwgWydib3h2cicsIFs5NTAwXV0sIFsnYm94dlInLCBbOTU2Nl1dLCBbJ2JveFZyJywgWzk1NjddXSwgWydib3hWUicsIFs5NTY4XV0sIFsnYnByaW1lJywgWzgyNDVdXSwgWydicmV2ZScsIFs3MjhdXSwgWydCcmV2ZScsIFs3MjhdXSwgWydicnZiYXInLCBbMTY2XV0sIFsnYnNjcicsIFsxMTk5OTFdXSwgWydCc2NyJywgWzg0OTJdXSwgWydic2VtaScsIFs4MjcxXV0sIFsnYnNpbScsIFs4NzY1XV0sIFsnYnNpbWUnLCBbODkwOV1dLCBbJ2Jzb2xiJywgWzEwNjkzXV0sIFsnYnNvbCcsIFs5Ml1dLCBbJ2Jzb2xoc3ViJywgWzEwMTg0XV0sIFsnYnVsbCcsIFs4MjI2XV0sIFsnYnVsbGV0JywgWzgyMjZdXSwgWydidW1wJywgWzg3ODJdXSwgWydidW1wRScsIFsxMDkyNl1dLCBbJ2J1bXBlJywgWzg3ODNdXSwgWydCdW1wZXEnLCBbODc4Ml1dLCBbJ2J1bXBlcScsIFs4NzgzXV0sIFsnQ2FjdXRlJywgWzI2Ml1dLCBbJ2NhY3V0ZScsIFsyNjNdXSwgWydjYXBhbmQnLCBbMTA4MjBdXSwgWydjYXBicmN1cCcsIFsxMDgyNV1dLCBbJ2NhcGNhcCcsIFsxMDgyN11dLCBbJ2NhcCcsIFs4NzQ1XV0sIFsnQ2FwJywgWzg5MTRdXSwgWydjYXBjdXAnLCBbMTA4MjNdXSwgWydjYXBkb3QnLCBbMTA4MTZdXSwgWydDYXBpdGFsRGlmZmVyZW50aWFsRCcsIFs4NTE3XV0sIFsnY2FwcycsIFs4NzQ1LCA2NTAyNF1dLCBbJ2NhcmV0JywgWzgyNTddXSwgWydjYXJvbicsIFs3MTFdXSwgWydDYXlsZXlzJywgWzg0OTNdXSwgWydjY2FwcycsIFsxMDgyOV1dLCBbJ0NjYXJvbicsIFsyNjhdXSwgWydjY2Fyb24nLCBbMjY5XV0sIFsnQ2NlZGlsJywgWzE5OV1dLCBbJ2NjZWRpbCcsIFsyMzFdXSwgWydDY2lyYycsIFsyNjRdXSwgWydjY2lyYycsIFsyNjVdXSwgWydDY29uaW50JywgWzg3NTJdXSwgWydjY3VwcycsIFsxMDgyOF1dLCBbJ2NjdXBzc20nLCBbMTA4MzJdXSwgWydDZG90JywgWzI2Nl1dLCBbJ2Nkb3QnLCBbMjY3XV0sIFsnY2VkaWwnLCBbMTg0XV0sIFsnQ2VkaWxsYScsIFsxODRdXSwgWydjZW1wdHl2JywgWzEwNjc0XV0sIFsnY2VudCcsIFsxNjJdXSwgWydjZW50ZXJkb3QnLCBbMTgzXV0sIFsnQ2VudGVyRG90JywgWzE4M11dLCBbJ2NmcicsIFsxMjAwOTZdXSwgWydDZnInLCBbODQ5M11dLCBbJ0NIY3knLCBbMTA2M11dLCBbJ2NoY3knLCBbMTA5NV1dLCBbJ2NoZWNrJywgWzEwMDAzXV0sIFsnY2hlY2ttYXJrJywgWzEwMDAzXV0sIFsnQ2hpJywgWzkzNV1dLCBbJ2NoaScsIFs5NjddXSwgWydjaXJjJywgWzcxMF1dLCBbJ2NpcmNlcScsIFs4NzkxXV0sIFsnY2lyY2xlYXJyb3dsZWZ0JywgWzg2MzRdXSwgWydjaXJjbGVhcnJvd3JpZ2h0JywgWzg2MzVdXSwgWydjaXJjbGVkYXN0JywgWzg4NTldXSwgWydjaXJjbGVkY2lyYycsIFs4ODU4XV0sIFsnY2lyY2xlZGRhc2gnLCBbODg2MV1dLCBbJ0NpcmNsZURvdCcsIFs4ODU3XV0sIFsnY2lyY2xlZFInLCBbMTc0XV0sIFsnY2lyY2xlZFMnLCBbOTQxNl1dLCBbJ0NpcmNsZU1pbnVzJywgWzg4NTRdXSwgWydDaXJjbGVQbHVzJywgWzg4NTNdXSwgWydDaXJjbGVUaW1lcycsIFs4ODU1XV0sIFsnY2lyJywgWzk2NzVdXSwgWydjaXJFJywgWzEwNjkxXV0sIFsnY2lyZScsIFs4NzkxXV0sIFsnY2lyZm5pbnQnLCBbMTA3NjhdXSwgWydjaXJtaWQnLCBbMTA5OTFdXSwgWydjaXJzY2lyJywgWzEwNjkwXV0sIFsnQ2xvY2t3aXNlQ29udG91ckludGVncmFsJywgWzg3NTRdXSwgWydDbG9zZUN1cmx5RG91YmxlUXVvdGUnLCBbODIyMV1dLCBbJ0Nsb3NlQ3VybHlRdW90ZScsIFs4MjE3XV0sIFsnY2x1YnMnLCBbOTgyN11dLCBbJ2NsdWJzdWl0JywgWzk4MjddXSwgWydjb2xvbicsIFs1OF1dLCBbJ0NvbG9uJywgWzg3NTldXSwgWydDb2xvbmUnLCBbMTA4NjhdXSwgWydjb2xvbmUnLCBbODc4OF1dLCBbJ2NvbG9uZXEnLCBbODc4OF1dLCBbJ2NvbW1hJywgWzQ0XV0sIFsnY29tbWF0JywgWzY0XV0sIFsnY29tcCcsIFs4NzA1XV0sIFsnY29tcGZuJywgWzg3MjhdXSwgWydjb21wbGVtZW50JywgWzg3MDVdXSwgWydjb21wbGV4ZXMnLCBbODQ1MF1dLCBbJ2NvbmcnLCBbODc3M11dLCBbJ2Nvbmdkb3QnLCBbMTA4NjFdXSwgWydDb25ncnVlbnQnLCBbODgwMV1dLCBbJ2NvbmludCcsIFs4NzUwXV0sIFsnQ29uaW50JywgWzg3NTFdXSwgWydDb250b3VySW50ZWdyYWwnLCBbODc1MF1dLCBbJ2NvcGYnLCBbMTIwMTQ4XV0sIFsnQ29wZicsIFs4NDUwXV0sIFsnY29wcm9kJywgWzg3MjBdXSwgWydDb3Byb2R1Y3QnLCBbODcyMF1dLCBbJ2NvcHknLCBbMTY5XV0sIFsnQ09QWScsIFsxNjldXSwgWydjb3B5c3InLCBbODQ3MV1dLCBbJ0NvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWwnLCBbODc1NV1dLCBbJ2NyYXJyJywgWzg2MjldXSwgWydjcm9zcycsIFsxMDAwN11dLCBbJ0Nyb3NzJywgWzEwNzk5XV0sIFsnQ3NjcicsIFsxMTk5NjZdXSwgWydjc2NyJywgWzExOTk5Ml1dLCBbJ2NzdWInLCBbMTA5NTldXSwgWydjc3ViZScsIFsxMDk2MV1dLCBbJ2NzdXAnLCBbMTA5NjBdXSwgWydjc3VwZScsIFsxMDk2Ml1dLCBbJ2N0ZG90JywgWzg5NDNdXSwgWydjdWRhcnJsJywgWzEwNTUyXV0sIFsnY3VkYXJycicsIFsxMDU0OV1dLCBbJ2N1ZXByJywgWzg5MjZdXSwgWydjdWVzYycsIFs4OTI3XV0sIFsnY3VsYXJyJywgWzg2MzBdXSwgWydjdWxhcnJwJywgWzEwNTU3XV0sIFsnY3VwYnJjYXAnLCBbMTA4MjRdXSwgWydjdXBjYXAnLCBbMTA4MjJdXSwgWydDdXBDYXAnLCBbODc4MV1dLCBbJ2N1cCcsIFs4NzQ2XV0sIFsnQ3VwJywgWzg5MTVdXSwgWydjdXBjdXAnLCBbMTA4MjZdXSwgWydjdXBkb3QnLCBbODg0NV1dLCBbJ2N1cG9yJywgWzEwODIxXV0sIFsnY3VwcycsIFs4NzQ2LCA2NTAyNF1dLCBbJ2N1cmFycicsIFs4NjMxXV0sIFsnY3VyYXJybScsIFsxMDU1Nl1dLCBbJ2N1cmx5ZXFwcmVjJywgWzg5MjZdXSwgWydjdXJseWVxc3VjYycsIFs4OTI3XV0sIFsnY3VybHl2ZWUnLCBbODkxMF1dLCBbJ2N1cmx5d2VkZ2UnLCBbODkxMV1dLCBbJ2N1cnJlbicsIFsxNjRdXSwgWydjdXJ2ZWFycm93bGVmdCcsIFs4NjMwXV0sIFsnY3VydmVhcnJvd3JpZ2h0JywgWzg2MzFdXSwgWydjdXZlZScsIFs4OTEwXV0sIFsnY3V3ZWQnLCBbODkxMV1dLCBbJ2N3Y29uaW50JywgWzg3NTRdXSwgWydjd2ludCcsIFs4NzUzXV0sIFsnY3lsY3R5JywgWzkwMDVdXSwgWydkYWdnZXInLCBbODIyNF1dLCBbJ0RhZ2dlcicsIFs4MjI1XV0sIFsnZGFsZXRoJywgWzg1MDRdXSwgWydkYXJyJywgWzg1OTVdXSwgWydEYXJyJywgWzg2MDldXSwgWydkQXJyJywgWzg2NTldXSwgWydkYXNoJywgWzgyMDhdXSwgWydEYXNodicsIFsxMDk4MF1dLCBbJ2Rhc2h2JywgWzg4NjddXSwgWydkYmthcm93JywgWzEwNTExXV0sIFsnZGJsYWMnLCBbNzMzXV0sIFsnRGNhcm9uJywgWzI3MF1dLCBbJ2RjYXJvbicsIFsyNzFdXSwgWydEY3knLCBbMTA0NF1dLCBbJ2RjeScsIFsxMDc2XV0sIFsnZGRhZ2dlcicsIFs4MjI1XV0sIFsnZGRhcnInLCBbODY1MF1dLCBbJ0REJywgWzg1MTddXSwgWydkZCcsIFs4NTE4XV0sIFsnRERvdHJhaGQnLCBbMTA1MTNdXSwgWydkZG90c2VxJywgWzEwODcxXV0sIFsnZGVnJywgWzE3Nl1dLCBbJ0RlbCcsIFs4NzExXV0sIFsnRGVsdGEnLCBbOTE2XV0sIFsnZGVsdGEnLCBbOTQ4XV0sIFsnZGVtcHR5dicsIFsxMDY3M11dLCBbJ2RmaXNodCcsIFsxMDYyM11dLCBbJ0RmcicsIFsxMjAwNzFdXSwgWydkZnInLCBbMTIwMDk3XV0sIFsnZEhhcicsIFsxMDU5N11dLCBbJ2RoYXJsJywgWzg2NDNdXSwgWydkaGFycicsIFs4NjQyXV0sIFsnRGlhY3JpdGljYWxBY3V0ZScsIFsxODBdXSwgWydEaWFjcml0aWNhbERvdCcsIFs3MjldXSwgWydEaWFjcml0aWNhbERvdWJsZUFjdXRlJywgWzczM11dLCBbJ0RpYWNyaXRpY2FsR3JhdmUnLCBbOTZdXSwgWydEaWFjcml0aWNhbFRpbGRlJywgWzczMl1dLCBbJ2RpYW0nLCBbODkwMF1dLCBbJ2RpYW1vbmQnLCBbODkwMF1dLCBbJ0RpYW1vbmQnLCBbODkwMF1dLCBbJ2RpYW1vbmRzdWl0JywgWzk4MzBdXSwgWydkaWFtcycsIFs5ODMwXV0sIFsnZGllJywgWzE2OF1dLCBbJ0RpZmZlcmVudGlhbEQnLCBbODUxOF1dLCBbJ2RpZ2FtbWEnLCBbOTg5XV0sIFsnZGlzaW4nLCBbODk0Nl1dLCBbJ2RpdicsIFsyNDddXSwgWydkaXZpZGUnLCBbMjQ3XV0sIFsnZGl2aWRlb250aW1lcycsIFs4OTAzXV0sIFsnZGl2b254JywgWzg5MDNdXSwgWydESmN5JywgWzEwMjZdXSwgWydkamN5JywgWzExMDZdXSwgWydkbGNvcm4nLCBbODk5MF1dLCBbJ2RsY3JvcCcsIFs4OTczXV0sIFsnZG9sbGFyJywgWzM2XV0sIFsnRG9wZicsIFsxMjAxMjNdXSwgWydkb3BmJywgWzEyMDE0OV1dLCBbJ0RvdCcsIFsxNjhdXSwgWydkb3QnLCBbNzI5XV0sIFsnRG90RG90JywgWzg0MTJdXSwgWydkb3RlcScsIFs4Nzg0XV0sIFsnZG90ZXFkb3QnLCBbODc4NV1dLCBbJ0RvdEVxdWFsJywgWzg3ODRdXSwgWydkb3RtaW51cycsIFs4NzYwXV0sIFsnZG90cGx1cycsIFs4NzI0XV0sIFsnZG90c3F1YXJlJywgWzg4NjVdXSwgWydkb3VibGViYXJ3ZWRnZScsIFs4OTY2XV0sIFsnRG91YmxlQ29udG91ckludGVncmFsJywgWzg3NTFdXSwgWydEb3VibGVEb3QnLCBbMTY4XV0sIFsnRG91YmxlRG93bkFycm93JywgWzg2NTldXSwgWydEb3VibGVMZWZ0QXJyb3cnLCBbODY1Nl1dLCBbJ0RvdWJsZUxlZnRSaWdodEFycm93JywgWzg2NjBdXSwgWydEb3VibGVMZWZ0VGVlJywgWzEwOTgwXV0sIFsnRG91YmxlTG9uZ0xlZnRBcnJvdycsIFsxMDIzMl1dLCBbJ0RvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvdycsIFsxMDIzNF1dLCBbJ0RvdWJsZUxvbmdSaWdodEFycm93JywgWzEwMjMzXV0sIFsnRG91YmxlUmlnaHRBcnJvdycsIFs4NjU4XV0sIFsnRG91YmxlUmlnaHRUZWUnLCBbODg3Ml1dLCBbJ0RvdWJsZVVwQXJyb3cnLCBbODY1N11dLCBbJ0RvdWJsZVVwRG93bkFycm93JywgWzg2NjFdXSwgWydEb3VibGVWZXJ0aWNhbEJhcicsIFs4NzQxXV0sIFsnRG93bkFycm93QmFyJywgWzEwNTE1XV0sIFsnZG93bmFycm93JywgWzg1OTVdXSwgWydEb3duQXJyb3cnLCBbODU5NV1dLCBbJ0Rvd25hcnJvdycsIFs4NjU5XV0sIFsnRG93bkFycm93VXBBcnJvdycsIFs4NjkzXV0sIFsnRG93bkJyZXZlJywgWzc4NV1dLCBbJ2Rvd25kb3duYXJyb3dzJywgWzg2NTBdXSwgWydkb3duaGFycG9vbmxlZnQnLCBbODY0M11dLCBbJ2Rvd25oYXJwb29ucmlnaHQnLCBbODY0Ml1dLCBbJ0Rvd25MZWZ0UmlnaHRWZWN0b3InLCBbMTA1NzZdXSwgWydEb3duTGVmdFRlZVZlY3RvcicsIFsxMDU5MF1dLCBbJ0Rvd25MZWZ0VmVjdG9yQmFyJywgWzEwNTgyXV0sIFsnRG93bkxlZnRWZWN0b3InLCBbODYzN11dLCBbJ0Rvd25SaWdodFRlZVZlY3RvcicsIFsxMDU5MV1dLCBbJ0Rvd25SaWdodFZlY3RvckJhcicsIFsxMDU4M11dLCBbJ0Rvd25SaWdodFZlY3RvcicsIFs4NjQxXV0sIFsnRG93blRlZUFycm93JywgWzg2MTVdXSwgWydEb3duVGVlJywgWzg4NjhdXSwgWydkcmJrYXJvdycsIFsxMDUxMl1dLCBbJ2RyY29ybicsIFs4OTkxXV0sIFsnZHJjcm9wJywgWzg5NzJdXSwgWydEc2NyJywgWzExOTk2N11dLCBbJ2RzY3InLCBbMTE5OTkzXV0sIFsnRFNjeScsIFsxMDI5XV0sIFsnZHNjeScsIFsxMTA5XV0sIFsnZHNvbCcsIFsxMDc0Ml1dLCBbJ0RzdHJvaycsIFsyNzJdXSwgWydkc3Ryb2snLCBbMjczXV0sIFsnZHRkb3QnLCBbODk0NV1dLCBbJ2R0cmknLCBbOTY2M11dLCBbJ2R0cmlmJywgWzk2NjJdXSwgWydkdWFycicsIFs4NjkzXV0sIFsnZHVoYXInLCBbMTA2MDddXSwgWydkd2FuZ2xlJywgWzEwNjYyXV0sIFsnRFpjeScsIFsxMDM5XV0sIFsnZHpjeScsIFsxMTE5XV0sIFsnZHppZ3JhcnInLCBbMTAyMzldXSwgWydFYWN1dGUnLCBbMjAxXV0sIFsnZWFjdXRlJywgWzIzM11dLCBbJ2Vhc3RlcicsIFsxMDg2Ml1dLCBbJ0VjYXJvbicsIFsyODJdXSwgWydlY2Fyb24nLCBbMjgzXV0sIFsnRWNpcmMnLCBbMjAyXV0sIFsnZWNpcmMnLCBbMjM0XV0sIFsnZWNpcicsIFs4NzkwXV0sIFsnZWNvbG9uJywgWzg3ODldXSwgWydFY3knLCBbMTA2OV1dLCBbJ2VjeScsIFsxMTAxXV0sIFsnZUREb3QnLCBbMTA4NzFdXSwgWydFZG90JywgWzI3OF1dLCBbJ2Vkb3QnLCBbMjc5XV0sIFsnZURvdCcsIFs4Nzg1XV0sIFsnZWUnLCBbODUxOV1dLCBbJ2VmRG90JywgWzg3ODZdXSwgWydFZnInLCBbMTIwMDcyXV0sIFsnZWZyJywgWzEyMDA5OF1dLCBbJ2VnJywgWzEwOTA2XV0sIFsnRWdyYXZlJywgWzIwMF1dLCBbJ2VncmF2ZScsIFsyMzJdXSwgWydlZ3MnLCBbMTA5MDJdXSwgWydlZ3Nkb3QnLCBbMTA5MDRdXSwgWydlbCcsIFsxMDkwNV1dLCBbJ0VsZW1lbnQnLCBbODcxMl1dLCBbJ2VsaW50ZXJzJywgWzkxOTFdXSwgWydlbGwnLCBbODQ2N11dLCBbJ2VscycsIFsxMDkwMV1dLCBbJ2Vsc2RvdCcsIFsxMDkwM11dLCBbJ0VtYWNyJywgWzI3NF1dLCBbJ2VtYWNyJywgWzI3NV1dLCBbJ2VtcHR5JywgWzg3MDldXSwgWydlbXB0eXNldCcsIFs4NzA5XV0sIFsnRW1wdHlTbWFsbFNxdWFyZScsIFs5NzIzXV0sIFsnZW1wdHl2JywgWzg3MDldXSwgWydFbXB0eVZlcnlTbWFsbFNxdWFyZScsIFs5NjQzXV0sIFsnZW1zcDEzJywgWzgxOTZdXSwgWydlbXNwMTQnLCBbODE5N11dLCBbJ2Vtc3AnLCBbODE5NV1dLCBbJ0VORycsIFszMzBdXSwgWydlbmcnLCBbMzMxXV0sIFsnZW5zcCcsIFs4MTk0XV0sIFsnRW9nb24nLCBbMjgwXV0sIFsnZW9nb24nLCBbMjgxXV0sIFsnRW9wZicsIFsxMjAxMjRdXSwgWydlb3BmJywgWzEyMDE1MF1dLCBbJ2VwYXInLCBbODkxN11dLCBbJ2VwYXJzbCcsIFsxMDcyM11dLCBbJ2VwbHVzJywgWzEwODY1XV0sIFsnZXBzaScsIFs5NDldXSwgWydFcHNpbG9uJywgWzkxN11dLCBbJ2Vwc2lsb24nLCBbOTQ5XV0sIFsnZXBzaXYnLCBbMTAxM11dLCBbJ2VxY2lyYycsIFs4NzkwXV0sIFsnZXFjb2xvbicsIFs4Nzg5XV0sIFsnZXFzaW0nLCBbODc3MF1dLCBbJ2Vxc2xhbnRndHInLCBbMTA5MDJdXSwgWydlcXNsYW50bGVzcycsIFsxMDkwMV1dLCBbJ0VxdWFsJywgWzEwODY5XV0sIFsnZXF1YWxzJywgWzYxXV0sIFsnRXF1YWxUaWxkZScsIFs4NzcwXV0sIFsnZXF1ZXN0JywgWzg3OTldXSwgWydFcXVpbGlicml1bScsIFs4NjUyXV0sIFsnZXF1aXYnLCBbODgwMV1dLCBbJ2VxdWl2REQnLCBbMTA4NzJdXSwgWydlcXZwYXJzbCcsIFsxMDcyNV1dLCBbJ2VyYXJyJywgWzEwNjA5XV0sIFsnZXJEb3QnLCBbODc4N11dLCBbJ2VzY3InLCBbODQ5NV1dLCBbJ0VzY3InLCBbODQ5Nl1dLCBbJ2VzZG90JywgWzg3ODRdXSwgWydFc2ltJywgWzEwODY3XV0sIFsnZXNpbScsIFs4NzcwXV0sIFsnRXRhJywgWzkxOV1dLCBbJ2V0YScsIFs5NTFdXSwgWydFVEgnLCBbMjA4XV0sIFsnZXRoJywgWzI0MF1dLCBbJ0V1bWwnLCBbMjAzXV0sIFsnZXVtbCcsIFsyMzVdXSwgWydldXJvJywgWzgzNjRdXSwgWydleGNsJywgWzMzXV0sIFsnZXhpc3QnLCBbODcwN11dLCBbJ0V4aXN0cycsIFs4NzA3XV0sIFsnZXhwZWN0YXRpb24nLCBbODQ5Nl1dLCBbJ2V4cG9uZW50aWFsZScsIFs4NTE5XV0sIFsnRXhwb25lbnRpYWxFJywgWzg1MTldXSwgWydmYWxsaW5nZG90c2VxJywgWzg3ODZdXSwgWydGY3knLCBbMTA2MF1dLCBbJ2ZjeScsIFsxMDkyXV0sIFsnZmVtYWxlJywgWzk3OTJdXSwgWydmZmlsaWcnLCBbNjQyNTldXSwgWydmZmxpZycsIFs2NDI1Nl1dLCBbJ2ZmbGxpZycsIFs2NDI2MF1dLCBbJ0ZmcicsIFsxMjAwNzNdXSwgWydmZnInLCBbMTIwMDk5XV0sIFsnZmlsaWcnLCBbNjQyNTddXSwgWydGaWxsZWRTbWFsbFNxdWFyZScsIFs5NzI0XV0sIFsnRmlsbGVkVmVyeVNtYWxsU3F1YXJlJywgWzk2NDJdXSwgWydmamxpZycsIFsxMDIsIDEwNl1dLCBbJ2ZsYXQnLCBbOTgzN11dLCBbJ2ZsbGlnJywgWzY0MjU4XV0sIFsnZmx0bnMnLCBbOTY0OV1dLCBbJ2Zub2YnLCBbNDAyXV0sIFsnRm9wZicsIFsxMjAxMjVdXSwgWydmb3BmJywgWzEyMDE1MV1dLCBbJ2ZvcmFsbCcsIFs4NzA0XV0sIFsnRm9yQWxsJywgWzg3MDRdXSwgWydmb3JrJywgWzg5MTZdXSwgWydmb3JrdicsIFsxMDk2OV1dLCBbJ0ZvdXJpZXJ0cmYnLCBbODQ5N11dLCBbJ2ZwYXJ0aW50JywgWzEwNzY1XV0sIFsnZnJhYzEyJywgWzE4OV1dLCBbJ2ZyYWMxMycsIFs4NTMxXV0sIFsnZnJhYzE0JywgWzE4OF1dLCBbJ2ZyYWMxNScsIFs4NTMzXV0sIFsnZnJhYzE2JywgWzg1MzddXSwgWydmcmFjMTgnLCBbODUzOV1dLCBbJ2ZyYWMyMycsIFs4NTMyXV0sIFsnZnJhYzI1JywgWzg1MzRdXSwgWydmcmFjMzQnLCBbMTkwXV0sIFsnZnJhYzM1JywgWzg1MzVdXSwgWydmcmFjMzgnLCBbODU0MF1dLCBbJ2ZyYWM0NScsIFs4NTM2XV0sIFsnZnJhYzU2JywgWzg1MzhdXSwgWydmcmFjNTgnLCBbODU0MV1dLCBbJ2ZyYWM3OCcsIFs4NTQyXV0sIFsnZnJhc2wnLCBbODI2MF1dLCBbJ2Zyb3duJywgWzg5OTRdXSwgWydmc2NyJywgWzExOTk5NV1dLCBbJ0ZzY3InLCBbODQ5N11dLCBbJ2dhY3V0ZScsIFs1MDFdXSwgWydHYW1tYScsIFs5MTVdXSwgWydnYW1tYScsIFs5NDddXSwgWydHYW1tYWQnLCBbOTg4XV0sIFsnZ2FtbWFkJywgWzk4OV1dLCBbJ2dhcCcsIFsxMDg4Nl1dLCBbJ0dicmV2ZScsIFsyODZdXSwgWydnYnJldmUnLCBbMjg3XV0sIFsnR2NlZGlsJywgWzI5MF1dLCBbJ0djaXJjJywgWzI4NF1dLCBbJ2djaXJjJywgWzI4NV1dLCBbJ0djeScsIFsxMDQzXV0sIFsnZ2N5JywgWzEwNzVdXSwgWydHZG90JywgWzI4OF1dLCBbJ2dkb3QnLCBbMjg5XV0sIFsnZ2UnLCBbODgwNV1dLCBbJ2dFJywgWzg4MDddXSwgWydnRWwnLCBbMTA4OTJdXSwgWydnZWwnLCBbODkyM11dLCBbJ2dlcScsIFs4ODA1XV0sIFsnZ2VxcScsIFs4ODA3XV0sIFsnZ2Vxc2xhbnQnLCBbMTA4NzhdXSwgWydnZXNjYycsIFsxMDkyMV1dLCBbJ2dlcycsIFsxMDg3OF1dLCBbJ2dlc2RvdCcsIFsxMDg4MF1dLCBbJ2dlc2RvdG8nLCBbMTA4ODJdXSwgWydnZXNkb3RvbCcsIFsxMDg4NF1dLCBbJ2dlc2wnLCBbODkyMywgNjUwMjRdXSwgWydnZXNsZXMnLCBbMTA5MDBdXSwgWydHZnInLCBbMTIwMDc0XV0sIFsnZ2ZyJywgWzEyMDEwMF1dLCBbJ2dnJywgWzg4MTFdXSwgWydHZycsIFs4OTIxXV0sIFsnZ2dnJywgWzg5MjFdXSwgWydnaW1lbCcsIFs4NTAzXV0sIFsnR0pjeScsIFsxMDI3XV0sIFsnZ2pjeScsIFsxMTA3XV0sIFsnZ2xhJywgWzEwOTE3XV0sIFsnZ2wnLCBbODgyM11dLCBbJ2dsRScsIFsxMDg5OF1dLCBbJ2dsaicsIFsxMDkxNl1dLCBbJ2duYXAnLCBbMTA4OTBdXSwgWydnbmFwcHJveCcsIFsxMDg5MF1dLCBbJ2duZScsIFsxMDg4OF1dLCBbJ2duRScsIFs4ODA5XV0sIFsnZ25lcScsIFsxMDg4OF1dLCBbJ2duZXFxJywgWzg4MDldXSwgWydnbnNpbScsIFs4OTM1XV0sIFsnR29wZicsIFsxMjAxMjZdXSwgWydnb3BmJywgWzEyMDE1Ml1dLCBbJ2dyYXZlJywgWzk2XV0sIFsnR3JlYXRlckVxdWFsJywgWzg4MDVdXSwgWydHcmVhdGVyRXF1YWxMZXNzJywgWzg5MjNdXSwgWydHcmVhdGVyRnVsbEVxdWFsJywgWzg4MDddXSwgWydHcmVhdGVyR3JlYXRlcicsIFsxMDkxNF1dLCBbJ0dyZWF0ZXJMZXNzJywgWzg4MjNdXSwgWydHcmVhdGVyU2xhbnRFcXVhbCcsIFsxMDg3OF1dLCBbJ0dyZWF0ZXJUaWxkZScsIFs4ODE5XV0sIFsnR3NjcicsIFsxMTk5NzBdXSwgWydnc2NyJywgWzg0NThdXSwgWydnc2ltJywgWzg4MTldXSwgWydnc2ltZScsIFsxMDg5NF1dLCBbJ2dzaW1sJywgWzEwODk2XV0sIFsnZ3RjYycsIFsxMDkxOV1dLCBbJ2d0Y2lyJywgWzEwODc0XV0sIFsnZ3QnLCBbNjJdXSwgWydHVCcsIFs2Ml1dLCBbJ0d0JywgWzg4MTFdXSwgWydndGRvdCcsIFs4OTE5XV0sIFsnZ3RsUGFyJywgWzEwNjQ1XV0sIFsnZ3RxdWVzdCcsIFsxMDg3Nl1dLCBbJ2d0cmFwcHJveCcsIFsxMDg4Nl1dLCBbJ2d0cmFycicsIFsxMDYxNl1dLCBbJ2d0cmRvdCcsIFs4OTE5XV0sIFsnZ3RyZXFsZXNzJywgWzg5MjNdXSwgWydndHJlcXFsZXNzJywgWzEwODkyXV0sIFsnZ3RybGVzcycsIFs4ODIzXV0sIFsnZ3Ryc2ltJywgWzg4MTldXSwgWydndmVydG5lcXEnLCBbODgwOSwgNjUwMjRdXSwgWydndm5FJywgWzg4MDksIDY1MDI0XV0sIFsnSGFjZWsnLCBbNzExXV0sIFsnaGFpcnNwJywgWzgyMDJdXSwgWydoYWxmJywgWzE4OV1dLCBbJ2hhbWlsdCcsIFs4NDU5XV0sIFsnSEFSRGN5JywgWzEwNjZdXSwgWydoYXJkY3knLCBbMTA5OF1dLCBbJ2hhcnJjaXInLCBbMTA1NjhdXSwgWydoYXJyJywgWzg1OTZdXSwgWydoQXJyJywgWzg2NjBdXSwgWydoYXJydycsIFs4NjIxXV0sIFsnSGF0JywgWzk0XV0sIFsnaGJhcicsIFs4NDYzXV0sIFsnSGNpcmMnLCBbMjkyXV0sIFsnaGNpcmMnLCBbMjkzXV0sIFsnaGVhcnRzJywgWzk4MjldXSwgWydoZWFydHN1aXQnLCBbOTgyOV1dLCBbJ2hlbGxpcCcsIFs4MjMwXV0sIFsnaGVyY29uJywgWzg4ODldXSwgWydoZnInLCBbMTIwMTAxXV0sIFsnSGZyJywgWzg0NjBdXSwgWydIaWxiZXJ0U3BhY2UnLCBbODQ1OV1dLCBbJ2hrc2Vhcm93JywgWzEwNTMzXV0sIFsnaGtzd2Fyb3cnLCBbMTA1MzRdXSwgWydob2FycicsIFs4NzAzXV0sIFsnaG9tdGh0JywgWzg3NjNdXSwgWydob29rbGVmdGFycm93JywgWzg2MTddXSwgWydob29rcmlnaHRhcnJvdycsIFs4NjE4XV0sIFsnaG9wZicsIFsxMjAxNTNdXSwgWydIb3BmJywgWzg0NjFdXSwgWydob3JiYXInLCBbODIxM11dLCBbJ0hvcml6b250YWxMaW5lJywgWzk0NzJdXSwgWydoc2NyJywgWzExOTk5N11dLCBbJ0hzY3InLCBbODQ1OV1dLCBbJ2hzbGFzaCcsIFs4NDYzXV0sIFsnSHN0cm9rJywgWzI5NF1dLCBbJ2hzdHJvaycsIFsyOTVdXSwgWydIdW1wRG93bkh1bXAnLCBbODc4Ml1dLCBbJ0h1bXBFcXVhbCcsIFs4NzgzXV0sIFsnaHlidWxsJywgWzgyNTldXSwgWydoeXBoZW4nLCBbODIwOF1dLCBbJ0lhY3V0ZScsIFsyMDVdXSwgWydpYWN1dGUnLCBbMjM3XV0sIFsnaWMnLCBbODI5MV1dLCBbJ0ljaXJjJywgWzIwNl1dLCBbJ2ljaXJjJywgWzIzOF1dLCBbJ0ljeScsIFsxMDQ4XV0sIFsnaWN5JywgWzEwODBdXSwgWydJZG90JywgWzMwNF1dLCBbJ0lFY3knLCBbMTA0NV1dLCBbJ2llY3knLCBbMTA3N11dLCBbJ2lleGNsJywgWzE2MV1dLCBbJ2lmZicsIFs4NjYwXV0sIFsnaWZyJywgWzEyMDEwMl1dLCBbJ0lmcicsIFs4NDY1XV0sIFsnSWdyYXZlJywgWzIwNF1dLCBbJ2lncmF2ZScsIFsyMzZdXSwgWydpaScsIFs4NTIwXV0sIFsnaWlpaW50JywgWzEwNzY0XV0sIFsnaWlpbnQnLCBbODc0OV1dLCBbJ2lpbmZpbicsIFsxMDcxNl1dLCBbJ2lpb3RhJywgWzg0ODldXSwgWydJSmxpZycsIFszMDZdXSwgWydpamxpZycsIFszMDddXSwgWydJbWFjcicsIFsyOThdXSwgWydpbWFjcicsIFsyOTldXSwgWydpbWFnZScsIFs4NDY1XV0sIFsnSW1hZ2luYXJ5SScsIFs4NTIwXV0sIFsnaW1hZ2xpbmUnLCBbODQ2NF1dLCBbJ2ltYWdwYXJ0JywgWzg0NjVdXSwgWydpbWF0aCcsIFszMDVdXSwgWydJbScsIFs4NDY1XV0sIFsnaW1vZicsIFs4ODg3XV0sIFsnaW1wZWQnLCBbNDM3XV0sIFsnSW1wbGllcycsIFs4NjU4XV0sIFsnaW5jYXJlJywgWzg0NTNdXSwgWydpbicsIFs4NzEyXV0sIFsnaW5maW4nLCBbODczNF1dLCBbJ2luZmludGllJywgWzEwNzE3XV0sIFsnaW5vZG90JywgWzMwNV1dLCBbJ2ludGNhbCcsIFs4ODkwXV0sIFsnaW50JywgWzg3NDddXSwgWydJbnQnLCBbODc0OF1dLCBbJ2ludGVnZXJzJywgWzg0ODRdXSwgWydJbnRlZ3JhbCcsIFs4NzQ3XV0sIFsnaW50ZXJjYWwnLCBbODg5MF1dLCBbJ0ludGVyc2VjdGlvbicsIFs4ODk4XV0sIFsnaW50bGFyaGsnLCBbMTA3NzVdXSwgWydpbnRwcm9kJywgWzEwODEyXV0sIFsnSW52aXNpYmxlQ29tbWEnLCBbODI5MV1dLCBbJ0ludmlzaWJsZVRpbWVzJywgWzgyOTBdXSwgWydJT2N5JywgWzEwMjVdXSwgWydpb2N5JywgWzExMDVdXSwgWydJb2dvbicsIFszMDJdXSwgWydpb2dvbicsIFszMDNdXSwgWydJb3BmJywgWzEyMDEyOF1dLCBbJ2lvcGYnLCBbMTIwMTU0XV0sIFsnSW90YScsIFs5MjFdXSwgWydpb3RhJywgWzk1M11dLCBbJ2lwcm9kJywgWzEwODEyXV0sIFsnaXF1ZXN0JywgWzE5MV1dLCBbJ2lzY3InLCBbMTE5OTk4XV0sIFsnSXNjcicsIFs4NDY0XV0sIFsnaXNpbicsIFs4NzEyXV0sIFsnaXNpbmRvdCcsIFs4OTQ5XV0sIFsnaXNpbkUnLCBbODk1M11dLCBbJ2lzaW5zJywgWzg5NDhdXSwgWydpc2luc3YnLCBbODk0N11dLCBbJ2lzaW52JywgWzg3MTJdXSwgWydpdCcsIFs4MjkwXV0sIFsnSXRpbGRlJywgWzI5Nl1dLCBbJ2l0aWxkZScsIFsyOTddXSwgWydJdWtjeScsIFsxMDMwXV0sIFsnaXVrY3knLCBbMTExMF1dLCBbJ0l1bWwnLCBbMjA3XV0sIFsnaXVtbCcsIFsyMzldXSwgWydKY2lyYycsIFszMDhdXSwgWydqY2lyYycsIFszMDldXSwgWydKY3knLCBbMTA0OV1dLCBbJ2pjeScsIFsxMDgxXV0sIFsnSmZyJywgWzEyMDA3N11dLCBbJ2pmcicsIFsxMjAxMDNdXSwgWydqbWF0aCcsIFs1NjddXSwgWydKb3BmJywgWzEyMDEyOV1dLCBbJ2pvcGYnLCBbMTIwMTU1XV0sIFsnSnNjcicsIFsxMTk5NzNdXSwgWydqc2NyJywgWzExOTk5OV1dLCBbJ0pzZXJjeScsIFsxMDMyXV0sIFsnanNlcmN5JywgWzExMTJdXSwgWydKdWtjeScsIFsxMDI4XV0sIFsnanVrY3knLCBbMTEwOF1dLCBbJ0thcHBhJywgWzkyMl1dLCBbJ2thcHBhJywgWzk1NF1dLCBbJ2thcHBhdicsIFsxMDA4XV0sIFsnS2NlZGlsJywgWzMxMF1dLCBbJ2tjZWRpbCcsIFszMTFdXSwgWydLY3knLCBbMTA1MF1dLCBbJ2tjeScsIFsxMDgyXV0sIFsnS2ZyJywgWzEyMDA3OF1dLCBbJ2tmcicsIFsxMjAxMDRdXSwgWydrZ3JlZW4nLCBbMzEyXV0sIFsnS0hjeScsIFsxMDYxXV0sIFsna2hjeScsIFsxMDkzXV0sIFsnS0pjeScsIFsxMDM2XV0sIFsna2pjeScsIFsxMTE2XV0sIFsnS29wZicsIFsxMjAxMzBdXSwgWydrb3BmJywgWzEyMDE1Nl1dLCBbJ0tzY3InLCBbMTE5OTc0XV0sIFsna3NjcicsIFsxMjAwMDBdXSwgWydsQWFycicsIFs4NjY2XV0sIFsnTGFjdXRlJywgWzMxM11dLCBbJ2xhY3V0ZScsIFszMTRdXSwgWydsYWVtcHR5dicsIFsxMDY3Nl1dLCBbJ2xhZ3JhbicsIFs4NDY2XV0sIFsnTGFtYmRhJywgWzkyM11dLCBbJ2xhbWJkYScsIFs5NTVdXSwgWydsYW5nJywgWzEwMjE2XV0sIFsnTGFuZycsIFsxMDIxOF1dLCBbJ2xhbmdkJywgWzEwNjQxXV0sIFsnbGFuZ2xlJywgWzEwMjE2XV0sIFsnbGFwJywgWzEwODg1XV0sIFsnTGFwbGFjZXRyZicsIFs4NDY2XV0sIFsnbGFxdW8nLCBbMTcxXV0sIFsnbGFycmInLCBbODY3Nl1dLCBbJ2xhcnJiZnMnLCBbMTA1MjddXSwgWydsYXJyJywgWzg1OTJdXSwgWydMYXJyJywgWzg2MDZdXSwgWydsQXJyJywgWzg2NTZdXSwgWydsYXJyZnMnLCBbMTA1MjVdXSwgWydsYXJyaGsnLCBbODYxN11dLCBbJ2xhcnJscCcsIFs4NjE5XV0sIFsnbGFycnBsJywgWzEwNTUzXV0sIFsnbGFycnNpbScsIFsxMDYxMV1dLCBbJ2xhcnJ0bCcsIFs4NjEwXV0sIFsnbGF0YWlsJywgWzEwNTIxXV0sIFsnbEF0YWlsJywgWzEwNTIzXV0sIFsnbGF0JywgWzEwOTIzXV0sIFsnbGF0ZScsIFsxMDkyNV1dLCBbJ2xhdGVzJywgWzEwOTI1LCA2NTAyNF1dLCBbJ2xiYXJyJywgWzEwNTA4XV0sIFsnbEJhcnInLCBbMTA1MTBdXSwgWydsYmJyaycsIFsxMDA5OF1dLCBbJ2xicmFjZScsIFsxMjNdXSwgWydsYnJhY2snLCBbOTFdXSwgWydsYnJrZScsIFsxMDYzNV1dLCBbJ2xicmtzbGQnLCBbMTA2MzldXSwgWydsYnJrc2x1JywgWzEwNjM3XV0sIFsnTGNhcm9uJywgWzMxN11dLCBbJ2xjYXJvbicsIFszMThdXSwgWydMY2VkaWwnLCBbMzE1XV0sIFsnbGNlZGlsJywgWzMxNl1dLCBbJ2xjZWlsJywgWzg5NjhdXSwgWydsY3ViJywgWzEyM11dLCBbJ0xjeScsIFsxMDUxXV0sIFsnbGN5JywgWzEwODNdXSwgWydsZGNhJywgWzEwNTUwXV0sIFsnbGRxdW8nLCBbODIyMF1dLCBbJ2xkcXVvcicsIFs4MjIyXV0sIFsnbGRyZGhhcicsIFsxMDU5OV1dLCBbJ2xkcnVzaGFyJywgWzEwNTcxXV0sIFsnbGRzaCcsIFs4NjI2XV0sIFsnbGUnLCBbODgwNF1dLCBbJ2xFJywgWzg4MDZdXSwgWydMZWZ0QW5nbGVCcmFja2V0JywgWzEwMjE2XV0sIFsnTGVmdEFycm93QmFyJywgWzg2NzZdXSwgWydsZWZ0YXJyb3cnLCBbODU5Ml1dLCBbJ0xlZnRBcnJvdycsIFs4NTkyXV0sIFsnTGVmdGFycm93JywgWzg2NTZdXSwgWydMZWZ0QXJyb3dSaWdodEFycm93JywgWzg2NDZdXSwgWydsZWZ0YXJyb3d0YWlsJywgWzg2MTBdXSwgWydMZWZ0Q2VpbGluZycsIFs4OTY4XV0sIFsnTGVmdERvdWJsZUJyYWNrZXQnLCBbMTAyMTRdXSwgWydMZWZ0RG93blRlZVZlY3RvcicsIFsxMDU5M11dLCBbJ0xlZnREb3duVmVjdG9yQmFyJywgWzEwNTg1XV0sIFsnTGVmdERvd25WZWN0b3InLCBbODY0M11dLCBbJ0xlZnRGbG9vcicsIFs4OTcwXV0sIFsnbGVmdGhhcnBvb25kb3duJywgWzg2MzddXSwgWydsZWZ0aGFycG9vbnVwJywgWzg2MzZdXSwgWydsZWZ0bGVmdGFycm93cycsIFs4NjQ3XV0sIFsnbGVmdHJpZ2h0YXJyb3cnLCBbODU5Nl1dLCBbJ0xlZnRSaWdodEFycm93JywgWzg1OTZdXSwgWydMZWZ0cmlnaHRhcnJvdycsIFs4NjYwXV0sIFsnbGVmdHJpZ2h0YXJyb3dzJywgWzg2NDZdXSwgWydsZWZ0cmlnaHRoYXJwb29ucycsIFs4NjUxXV0sIFsnbGVmdHJpZ2h0c3F1aWdhcnJvdycsIFs4NjIxXV0sIFsnTGVmdFJpZ2h0VmVjdG9yJywgWzEwNTc0XV0sIFsnTGVmdFRlZUFycm93JywgWzg2MTJdXSwgWydMZWZ0VGVlJywgWzg4NjddXSwgWydMZWZ0VGVlVmVjdG9yJywgWzEwNTg2XV0sIFsnbGVmdHRocmVldGltZXMnLCBbODkwN11dLCBbJ0xlZnRUcmlhbmdsZUJhcicsIFsxMDcwM11dLCBbJ0xlZnRUcmlhbmdsZScsIFs4ODgyXV0sIFsnTGVmdFRyaWFuZ2xlRXF1YWwnLCBbODg4NF1dLCBbJ0xlZnRVcERvd25WZWN0b3InLCBbMTA1NzddXSwgWydMZWZ0VXBUZWVWZWN0b3InLCBbMTA1OTJdXSwgWydMZWZ0VXBWZWN0b3JCYXInLCBbMTA1ODRdXSwgWydMZWZ0VXBWZWN0b3InLCBbODYzOV1dLCBbJ0xlZnRWZWN0b3JCYXInLCBbMTA1NzhdXSwgWydMZWZ0VmVjdG9yJywgWzg2MzZdXSwgWydsRWcnLCBbMTA4OTFdXSwgWydsZWcnLCBbODkyMl1dLCBbJ2xlcScsIFs4ODA0XV0sIFsnbGVxcScsIFs4ODA2XV0sIFsnbGVxc2xhbnQnLCBbMTA4NzddXSwgWydsZXNjYycsIFsxMDkyMF1dLCBbJ2xlcycsIFsxMDg3N11dLCBbJ2xlc2RvdCcsIFsxMDg3OV1dLCBbJ2xlc2RvdG8nLCBbMTA4ODFdXSwgWydsZXNkb3RvcicsIFsxMDg4M11dLCBbJ2xlc2cnLCBbODkyMiwgNjUwMjRdXSwgWydsZXNnZXMnLCBbMTA4OTldXSwgWydsZXNzYXBwcm94JywgWzEwODg1XV0sIFsnbGVzc2RvdCcsIFs4OTE4XV0sIFsnbGVzc2VxZ3RyJywgWzg5MjJdXSwgWydsZXNzZXFxZ3RyJywgWzEwODkxXV0sIFsnTGVzc0VxdWFsR3JlYXRlcicsIFs4OTIyXV0sIFsnTGVzc0Z1bGxFcXVhbCcsIFs4ODA2XV0sIFsnTGVzc0dyZWF0ZXInLCBbODgyMl1dLCBbJ2xlc3NndHInLCBbODgyMl1dLCBbJ0xlc3NMZXNzJywgWzEwOTEzXV0sIFsnbGVzc3NpbScsIFs4ODE4XV0sIFsnTGVzc1NsYW50RXF1YWwnLCBbMTA4NzddXSwgWydMZXNzVGlsZGUnLCBbODgxOF1dLCBbJ2xmaXNodCcsIFsxMDYyMF1dLCBbJ2xmbG9vcicsIFs4OTcwXV0sIFsnTGZyJywgWzEyMDA3OV1dLCBbJ2xmcicsIFsxMjAxMDVdXSwgWydsZycsIFs4ODIyXV0sIFsnbGdFJywgWzEwODk3XV0sIFsnbEhhcicsIFsxMDU5NF1dLCBbJ2xoYXJkJywgWzg2MzddXSwgWydsaGFydScsIFs4NjM2XV0sIFsnbGhhcnVsJywgWzEwNjAyXV0sIFsnbGhibGsnLCBbOTYwNF1dLCBbJ0xKY3knLCBbMTAzM11dLCBbJ2xqY3knLCBbMTExM11dLCBbJ2xsYXJyJywgWzg2NDddXSwgWydsbCcsIFs4ODEwXV0sIFsnTGwnLCBbODkyMF1dLCBbJ2xsY29ybmVyJywgWzg5OTBdXSwgWydMbGVmdGFycm93JywgWzg2NjZdXSwgWydsbGhhcmQnLCBbMTA2MDNdXSwgWydsbHRyaScsIFs5NzIyXV0sIFsnTG1pZG90JywgWzMxOV1dLCBbJ2xtaWRvdCcsIFszMjBdXSwgWydsbW91c3RhY2hlJywgWzkxMzZdXSwgWydsbW91c3QnLCBbOTEzNl1dLCBbJ2xuYXAnLCBbMTA4ODldXSwgWydsbmFwcHJveCcsIFsxMDg4OV1dLCBbJ2xuZScsIFsxMDg4N11dLCBbJ2xuRScsIFs4ODA4XV0sIFsnbG5lcScsIFsxMDg4N11dLCBbJ2xuZXFxJywgWzg4MDhdXSwgWydsbnNpbScsIFs4OTM0XV0sIFsnbG9hbmcnLCBbMTAyMjBdXSwgWydsb2FycicsIFs4NzAxXV0sIFsnbG9icmsnLCBbMTAyMTRdXSwgWydsb25nbGVmdGFycm93JywgWzEwMjI5XV0sIFsnTG9uZ0xlZnRBcnJvdycsIFsxMDIyOV1dLCBbJ0xvbmdsZWZ0YXJyb3cnLCBbMTAyMzJdXSwgWydsb25nbGVmdHJpZ2h0YXJyb3cnLCBbMTAyMzFdXSwgWydMb25nTGVmdFJpZ2h0QXJyb3cnLCBbMTAyMzFdXSwgWydMb25nbGVmdHJpZ2h0YXJyb3cnLCBbMTAyMzRdXSwgWydsb25nbWFwc3RvJywgWzEwMjM2XV0sIFsnbG9uZ3JpZ2h0YXJyb3cnLCBbMTAyMzBdXSwgWydMb25nUmlnaHRBcnJvdycsIFsxMDIzMF1dLCBbJ0xvbmdyaWdodGFycm93JywgWzEwMjMzXV0sIFsnbG9vcGFycm93bGVmdCcsIFs4NjE5XV0sIFsnbG9vcGFycm93cmlnaHQnLCBbODYyMF1dLCBbJ2xvcGFyJywgWzEwNjI5XV0sIFsnTG9wZicsIFsxMjAxMzFdXSwgWydsb3BmJywgWzEyMDE1N11dLCBbJ2xvcGx1cycsIFsxMDc5N11dLCBbJ2xvdGltZXMnLCBbMTA4MDRdXSwgWydsb3dhc3QnLCBbODcyN11dLCBbJ2xvd2JhcicsIFs5NV1dLCBbJ0xvd2VyTGVmdEFycm93JywgWzg2MDFdXSwgWydMb3dlclJpZ2h0QXJyb3cnLCBbODYwMF1dLCBbJ2xveicsIFs5Njc0XV0sIFsnbG96ZW5nZScsIFs5Njc0XV0sIFsnbG96ZicsIFsxMDczMV1dLCBbJ2xwYXInLCBbNDBdXSwgWydscGFybHQnLCBbMTA2NDNdXSwgWydscmFycicsIFs4NjQ2XV0sIFsnbHJjb3JuZXInLCBbODk5MV1dLCBbJ2xyaGFyJywgWzg2NTFdXSwgWydscmhhcmQnLCBbMTA2MDVdXSwgWydscm0nLCBbODIwNl1dLCBbJ2xydHJpJywgWzg4OTVdXSwgWydsc2FxdW8nLCBbODI0OV1dLCBbJ2xzY3InLCBbMTIwMDAxXV0sIFsnTHNjcicsIFs4NDY2XV0sIFsnbHNoJywgWzg2MjRdXSwgWydMc2gnLCBbODYyNF1dLCBbJ2xzaW0nLCBbODgxOF1dLCBbJ2xzaW1lJywgWzEwODkzXV0sIFsnbHNpbWcnLCBbMTA4OTVdXSwgWydsc3FiJywgWzkxXV0sIFsnbHNxdW8nLCBbODIxNl1dLCBbJ2xzcXVvcicsIFs4MjE4XV0sIFsnTHN0cm9rJywgWzMyMV1dLCBbJ2xzdHJvaycsIFszMjJdXSwgWydsdGNjJywgWzEwOTE4XV0sIFsnbHRjaXInLCBbMTA4NzNdXSwgWydsdCcsIFs2MF1dLCBbJ0xUJywgWzYwXV0sIFsnTHQnLCBbODgxMF1dLCBbJ2x0ZG90JywgWzg5MThdXSwgWydsdGhyZWUnLCBbODkwN11dLCBbJ2x0aW1lcycsIFs4OTA1XV0sIFsnbHRsYXJyJywgWzEwNjE0XV0sIFsnbHRxdWVzdCcsIFsxMDg3NV1dLCBbJ2x0cmknLCBbOTY2N11dLCBbJ2x0cmllJywgWzg4ODRdXSwgWydsdHJpZicsIFs5NjY2XV0sIFsnbHRyUGFyJywgWzEwNjQ2XV0sIFsnbHVyZHNoYXInLCBbMTA1NzBdXSwgWydsdXJ1aGFyJywgWzEwNTk4XV0sIFsnbHZlcnRuZXFxJywgWzg4MDgsIDY1MDI0XV0sIFsnbHZuRScsIFs4ODA4LCA2NTAyNF1dLCBbJ21hY3InLCBbMTc1XV0sIFsnbWFsZScsIFs5Nzk0XV0sIFsnbWFsdCcsIFsxMDAxNl1dLCBbJ21hbHRlc2UnLCBbMTAwMTZdXSwgWydNYXAnLCBbMTA1MDFdXSwgWydtYXAnLCBbODYxNF1dLCBbJ21hcHN0bycsIFs4NjE0XV0sIFsnbWFwc3RvZG93bicsIFs4NjE1XV0sIFsnbWFwc3RvbGVmdCcsIFs4NjEyXV0sIFsnbWFwc3RvdXAnLCBbODYxM11dLCBbJ21hcmtlcicsIFs5NjQ2XV0sIFsnbWNvbW1hJywgWzEwNzkzXV0sIFsnTWN5JywgWzEwNTJdXSwgWydtY3knLCBbMTA4NF1dLCBbJ21kYXNoJywgWzgyMTJdXSwgWydtRERvdCcsIFs4NzYyXV0sIFsnbWVhc3VyZWRhbmdsZScsIFs4NzM3XV0sIFsnTWVkaXVtU3BhY2UnLCBbODI4N11dLCBbJ01lbGxpbnRyZicsIFs4NDk5XV0sIFsnTWZyJywgWzEyMDA4MF1dLCBbJ21mcicsIFsxMjAxMDZdXSwgWydtaG8nLCBbODQ4N11dLCBbJ21pY3JvJywgWzE4MV1dLCBbJ21pZGFzdCcsIFs0Ml1dLCBbJ21pZGNpcicsIFsxMDk5Ml1dLCBbJ21pZCcsIFs4NzM5XV0sIFsnbWlkZG90JywgWzE4M11dLCBbJ21pbnVzYicsIFs4ODYzXV0sIFsnbWludXMnLCBbODcyMl1dLCBbJ21pbnVzZCcsIFs4NzYwXV0sIFsnbWludXNkdScsIFsxMDc5NF1dLCBbJ01pbnVzUGx1cycsIFs4NzIzXV0sIFsnbWxjcCcsIFsxMDk3MV1dLCBbJ21sZHInLCBbODIzMF1dLCBbJ21ucGx1cycsIFs4NzIzXV0sIFsnbW9kZWxzJywgWzg4NzFdXSwgWydNb3BmJywgWzEyMDEzMl1dLCBbJ21vcGYnLCBbMTIwMTU4XV0sIFsnbXAnLCBbODcyM11dLCBbJ21zY3InLCBbMTIwMDAyXV0sIFsnTXNjcicsIFs4NDk5XV0sIFsnbXN0cG9zJywgWzg3NjZdXSwgWydNdScsIFs5MjRdXSwgWydtdScsIFs5NTZdXSwgWydtdWx0aW1hcCcsIFs4ODg4XV0sIFsnbXVtYXAnLCBbODg4OF1dLCBbJ25hYmxhJywgWzg3MTFdXSwgWydOYWN1dGUnLCBbMzIzXV0sIFsnbmFjdXRlJywgWzMyNF1dLCBbJ25hbmcnLCBbODczNiwgODQwMl1dLCBbJ25hcCcsIFs4Nzc3XV0sIFsnbmFwRScsIFsxMDg2NCwgODI0XV0sIFsnbmFwaWQnLCBbODc3OSwgODI0XV0sIFsnbmFwb3MnLCBbMzI5XV0sIFsnbmFwcHJveCcsIFs4Nzc3XV0sIFsnbmF0dXJhbCcsIFs5ODM4XV0sIFsnbmF0dXJhbHMnLCBbODQ2OV1dLCBbJ25hdHVyJywgWzk4MzhdXSwgWyduYnNwJywgWzE2MF1dLCBbJ25idW1wJywgWzg3ODIsIDgyNF1dLCBbJ25idW1wZScsIFs4NzgzLCA4MjRdXSwgWyduY2FwJywgWzEwODE5XV0sIFsnTmNhcm9uJywgWzMyN11dLCBbJ25jYXJvbicsIFszMjhdXSwgWydOY2VkaWwnLCBbMzI1XV0sIFsnbmNlZGlsJywgWzMyNl1dLCBbJ25jb25nJywgWzg3NzVdXSwgWyduY29uZ2RvdCcsIFsxMDg2MSwgODI0XV0sIFsnbmN1cCcsIFsxMDgxOF1dLCBbJ05jeScsIFsxMDUzXV0sIFsnbmN5JywgWzEwODVdXSwgWyduZGFzaCcsIFs4MjExXV0sIFsnbmVhcmhrJywgWzEwNTMyXV0sIFsnbmVhcnInLCBbODU5OV1dLCBbJ25lQXJyJywgWzg2NjNdXSwgWyduZWFycm93JywgWzg1OTldXSwgWyduZScsIFs4ODAwXV0sIFsnbmVkb3QnLCBbODc4NCwgODI0XV0sIFsnTmVnYXRpdmVNZWRpdW1TcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVUaGlja1NwYWNlJywgWzgyMDNdXSwgWydOZWdhdGl2ZVRoaW5TcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVWZXJ5VGhpblNwYWNlJywgWzgyMDNdXSwgWyduZXF1aXYnLCBbODgwMl1dLCBbJ25lc2VhcicsIFsxMDUzNl1dLCBbJ25lc2ltJywgWzg3NzAsIDgyNF1dLCBbJ05lc3RlZEdyZWF0ZXJHcmVhdGVyJywgWzg4MTFdXSwgWydOZXN0ZWRMZXNzTGVzcycsIFs4ODEwXV0sIFsnbmV4aXN0JywgWzg3MDhdXSwgWyduZXhpc3RzJywgWzg3MDhdXSwgWydOZnInLCBbMTIwMDgxXV0sIFsnbmZyJywgWzEyMDEwN11dLCBbJ25nRScsIFs4ODA3LCA4MjRdXSwgWyduZ2UnLCBbODgxN11dLCBbJ25nZXEnLCBbODgxN11dLCBbJ25nZXFxJywgWzg4MDcsIDgyNF1dLCBbJ25nZXFzbGFudCcsIFsxMDg3OCwgODI0XV0sIFsnbmdlcycsIFsxMDg3OCwgODI0XV0sIFsnbkdnJywgWzg5MjEsIDgyNF1dLCBbJ25nc2ltJywgWzg4MjFdXSwgWyduR3QnLCBbODgxMSwgODQwMl1dLCBbJ25ndCcsIFs4ODE1XV0sIFsnbmd0cicsIFs4ODE1XV0sIFsnbkd0dicsIFs4ODExLCA4MjRdXSwgWyduaGFycicsIFs4NjIyXV0sIFsnbmhBcnInLCBbODY1NF1dLCBbJ25ocGFyJywgWzEwOTk0XV0sIFsnbmknLCBbODcxNV1dLCBbJ25pcycsIFs4OTU2XV0sIFsnbmlzZCcsIFs4OTU0XV0sIFsnbml2JywgWzg3MTVdXSwgWydOSmN5JywgWzEwMzRdXSwgWyduamN5JywgWzExMTRdXSwgWydubGFycicsIFs4NjAyXV0sIFsnbmxBcnInLCBbODY1M11dLCBbJ25sZHInLCBbODIyOV1dLCBbJ25sRScsIFs4ODA2LCA4MjRdXSwgWydubGUnLCBbODgxNl1dLCBbJ25sZWZ0YXJyb3cnLCBbODYwMl1dLCBbJ25MZWZ0YXJyb3cnLCBbODY1M11dLCBbJ25sZWZ0cmlnaHRhcnJvdycsIFs4NjIyXV0sIFsnbkxlZnRyaWdodGFycm93JywgWzg2NTRdXSwgWydubGVxJywgWzg4MTZdXSwgWydubGVxcScsIFs4ODA2LCA4MjRdXSwgWydubGVxc2xhbnQnLCBbMTA4NzcsIDgyNF1dLCBbJ25sZXMnLCBbMTA4NzcsIDgyNF1dLCBbJ25sZXNzJywgWzg4MTRdXSwgWyduTGwnLCBbODkyMCwgODI0XV0sIFsnbmxzaW0nLCBbODgyMF1dLCBbJ25MdCcsIFs4ODEwLCA4NDAyXV0sIFsnbmx0JywgWzg4MTRdXSwgWydubHRyaScsIFs4OTM4XV0sIFsnbmx0cmllJywgWzg5NDBdXSwgWyduTHR2JywgWzg4MTAsIDgyNF1dLCBbJ25taWQnLCBbODc0MF1dLCBbJ05vQnJlYWsnLCBbODI4OF1dLCBbJ05vbkJyZWFraW5nU3BhY2UnLCBbMTYwXV0sIFsnbm9wZicsIFsxMjAxNTldXSwgWydOb3BmJywgWzg0NjldXSwgWydOb3QnLCBbMTA5ODhdXSwgWydub3QnLCBbMTcyXV0sIFsnTm90Q29uZ3J1ZW50JywgWzg4MDJdXSwgWydOb3RDdXBDYXAnLCBbODgxM11dLCBbJ05vdERvdWJsZVZlcnRpY2FsQmFyJywgWzg3NDJdXSwgWydOb3RFbGVtZW50JywgWzg3MTNdXSwgWydOb3RFcXVhbCcsIFs4ODAwXV0sIFsnTm90RXF1YWxUaWxkZScsIFs4NzcwLCA4MjRdXSwgWydOb3RFeGlzdHMnLCBbODcwOF1dLCBbJ05vdEdyZWF0ZXInLCBbODgxNV1dLCBbJ05vdEdyZWF0ZXJFcXVhbCcsIFs4ODE3XV0sIFsnTm90R3JlYXRlckZ1bGxFcXVhbCcsIFs4ODA3LCA4MjRdXSwgWydOb3RHcmVhdGVyR3JlYXRlcicsIFs4ODExLCA4MjRdXSwgWydOb3RHcmVhdGVyTGVzcycsIFs4ODI1XV0sIFsnTm90R3JlYXRlclNsYW50RXF1YWwnLCBbMTA4NzgsIDgyNF1dLCBbJ05vdEdyZWF0ZXJUaWxkZScsIFs4ODIxXV0sIFsnTm90SHVtcERvd25IdW1wJywgWzg3ODIsIDgyNF1dLCBbJ05vdEh1bXBFcXVhbCcsIFs4NzgzLCA4MjRdXSwgWydub3RpbicsIFs4NzEzXV0sIFsnbm90aW5kb3QnLCBbODk0OSwgODI0XV0sIFsnbm90aW5FJywgWzg5NTMsIDgyNF1dLCBbJ25vdGludmEnLCBbODcxM11dLCBbJ25vdGludmInLCBbODk1MV1dLCBbJ25vdGludmMnLCBbODk1MF1dLCBbJ05vdExlZnRUcmlhbmdsZUJhcicsIFsxMDcwMywgODI0XV0sIFsnTm90TGVmdFRyaWFuZ2xlJywgWzg5MzhdXSwgWydOb3RMZWZ0VHJpYW5nbGVFcXVhbCcsIFs4OTQwXV0sIFsnTm90TGVzcycsIFs4ODE0XV0sIFsnTm90TGVzc0VxdWFsJywgWzg4MTZdXSwgWydOb3RMZXNzR3JlYXRlcicsIFs4ODI0XV0sIFsnTm90TGVzc0xlc3MnLCBbODgxMCwgODI0XV0sIFsnTm90TGVzc1NsYW50RXF1YWwnLCBbMTA4NzcsIDgyNF1dLCBbJ05vdExlc3NUaWxkZScsIFs4ODIwXV0sIFsnTm90TmVzdGVkR3JlYXRlckdyZWF0ZXInLCBbMTA5MTQsIDgyNF1dLCBbJ05vdE5lc3RlZExlc3NMZXNzJywgWzEwOTEzLCA4MjRdXSwgWydub3RuaScsIFs4NzE2XV0sIFsnbm90bml2YScsIFs4NzE2XV0sIFsnbm90bml2YicsIFs4OTU4XV0sIFsnbm90bml2YycsIFs4OTU3XV0sIFsnTm90UHJlY2VkZXMnLCBbODgzMl1dLCBbJ05vdFByZWNlZGVzRXF1YWwnLCBbMTA5MjcsIDgyNF1dLCBbJ05vdFByZWNlZGVzU2xhbnRFcXVhbCcsIFs4OTI4XV0sIFsnTm90UmV2ZXJzZUVsZW1lbnQnLCBbODcxNl1dLCBbJ05vdFJpZ2h0VHJpYW5nbGVCYXInLCBbMTA3MDQsIDgyNF1dLCBbJ05vdFJpZ2h0VHJpYW5nbGUnLCBbODkzOV1dLCBbJ05vdFJpZ2h0VHJpYW5nbGVFcXVhbCcsIFs4OTQxXV0sIFsnTm90U3F1YXJlU3Vic2V0JywgWzg4NDcsIDgyNF1dLCBbJ05vdFNxdWFyZVN1YnNldEVxdWFsJywgWzg5MzBdXSwgWydOb3RTcXVhcmVTdXBlcnNldCcsIFs4ODQ4LCA4MjRdXSwgWydOb3RTcXVhcmVTdXBlcnNldEVxdWFsJywgWzg5MzFdXSwgWydOb3RTdWJzZXQnLCBbODgzNCwgODQwMl1dLCBbJ05vdFN1YnNldEVxdWFsJywgWzg4NDBdXSwgWydOb3RTdWNjZWVkcycsIFs4ODMzXV0sIFsnTm90U3VjY2VlZHNFcXVhbCcsIFsxMDkyOCwgODI0XV0sIFsnTm90U3VjY2VlZHNTbGFudEVxdWFsJywgWzg5MjldXSwgWydOb3RTdWNjZWVkc1RpbGRlJywgWzg4MzEsIDgyNF1dLCBbJ05vdFN1cGVyc2V0JywgWzg4MzUsIDg0MDJdXSwgWydOb3RTdXBlcnNldEVxdWFsJywgWzg4NDFdXSwgWydOb3RUaWxkZScsIFs4NzY5XV0sIFsnTm90VGlsZGVFcXVhbCcsIFs4NzcyXV0sIFsnTm90VGlsZGVGdWxsRXF1YWwnLCBbODc3NV1dLCBbJ05vdFRpbGRlVGlsZGUnLCBbODc3N11dLCBbJ05vdFZlcnRpY2FsQmFyJywgWzg3NDBdXSwgWyducGFyYWxsZWwnLCBbODc0Ml1dLCBbJ25wYXInLCBbODc0Ml1dLCBbJ25wYXJzbCcsIFsxMTAwNSwgODQyMV1dLCBbJ25wYXJ0JywgWzg3MDYsIDgyNF1dLCBbJ25wb2xpbnQnLCBbMTA3NzJdXSwgWyducHInLCBbODgzMl1dLCBbJ25wcmN1ZScsIFs4OTI4XV0sIFsnbnByZWMnLCBbODgzMl1dLCBbJ25wcmVjZXEnLCBbMTA5MjcsIDgyNF1dLCBbJ25wcmUnLCBbMTA5MjcsIDgyNF1dLCBbJ25yYXJyYycsIFsxMDU0NywgODI0XV0sIFsnbnJhcnInLCBbODYwM11dLCBbJ25yQXJyJywgWzg2NTVdXSwgWyducmFycncnLCBbODYwNSwgODI0XV0sIFsnbnJpZ2h0YXJyb3cnLCBbODYwM11dLCBbJ25SaWdodGFycm93JywgWzg2NTVdXSwgWyducnRyaScsIFs4OTM5XV0sIFsnbnJ0cmllJywgWzg5NDFdXSwgWyduc2MnLCBbODgzM11dLCBbJ25zY2N1ZScsIFs4OTI5XV0sIFsnbnNjZScsIFsxMDkyOCwgODI0XV0sIFsnTnNjcicsIFsxMTk5NzddXSwgWyduc2NyJywgWzEyMDAwM11dLCBbJ25zaG9ydG1pZCcsIFs4NzQwXV0sIFsnbnNob3J0cGFyYWxsZWwnLCBbODc0Ml1dLCBbJ25zaW0nLCBbODc2OV1dLCBbJ25zaW1lJywgWzg3NzJdXSwgWyduc2ltZXEnLCBbODc3Ml1dLCBbJ25zbWlkJywgWzg3NDBdXSwgWyduc3BhcicsIFs4NzQyXV0sIFsnbnNxc3ViZScsIFs4OTMwXV0sIFsnbnNxc3VwZScsIFs4OTMxXV0sIFsnbnN1YicsIFs4ODM2XV0sIFsnbnN1YkUnLCBbMTA5NDksIDgyNF1dLCBbJ25zdWJlJywgWzg4NDBdXSwgWyduc3Vic2V0JywgWzg4MzQsIDg0MDJdXSwgWyduc3Vic2V0ZXEnLCBbODg0MF1dLCBbJ25zdWJzZXRlcXEnLCBbMTA5NDksIDgyNF1dLCBbJ25zdWNjJywgWzg4MzNdXSwgWyduc3VjY2VxJywgWzEwOTI4LCA4MjRdXSwgWyduc3VwJywgWzg4MzddXSwgWyduc3VwRScsIFsxMDk1MCwgODI0XV0sIFsnbnN1cGUnLCBbODg0MV1dLCBbJ25zdXBzZXQnLCBbODgzNSwgODQwMl1dLCBbJ25zdXBzZXRlcScsIFs4ODQxXV0sIFsnbnN1cHNldGVxcScsIFsxMDk1MCwgODI0XV0sIFsnbnRnbCcsIFs4ODI1XV0sIFsnTnRpbGRlJywgWzIwOV1dLCBbJ250aWxkZScsIFsyNDFdXSwgWydudGxnJywgWzg4MjRdXSwgWydudHJpYW5nbGVsZWZ0JywgWzg5MzhdXSwgWydudHJpYW5nbGVsZWZ0ZXEnLCBbODk0MF1dLCBbJ250cmlhbmdsZXJpZ2h0JywgWzg5MzldXSwgWydudHJpYW5nbGVyaWdodGVxJywgWzg5NDFdXSwgWydOdScsIFs5MjVdXSwgWydudScsIFs5NTddXSwgWydudW0nLCBbMzVdXSwgWydudW1lcm8nLCBbODQ3MF1dLCBbJ251bXNwJywgWzgxOTldXSwgWydudmFwJywgWzg3ODEsIDg0MDJdXSwgWydudmRhc2gnLCBbODg3Nl1dLCBbJ252RGFzaCcsIFs4ODc3XV0sIFsnblZkYXNoJywgWzg4NzhdXSwgWyduVkRhc2gnLCBbODg3OV1dLCBbJ252Z2UnLCBbODgwNSwgODQwMl1dLCBbJ252Z3QnLCBbNjIsIDg0MDJdXSwgWydudkhhcnInLCBbMTA1MDBdXSwgWydudmluZmluJywgWzEwNzE4XV0sIFsnbnZsQXJyJywgWzEwNDk4XV0sIFsnbnZsZScsIFs4ODA0LCA4NDAyXV0sIFsnbnZsdCcsIFs2MCwgODQwMl1dLCBbJ252bHRyaWUnLCBbODg4NCwgODQwMl1dLCBbJ252ckFycicsIFsxMDQ5OV1dLCBbJ252cnRyaWUnLCBbODg4NSwgODQwMl1dLCBbJ252c2ltJywgWzg3NjQsIDg0MDJdXSwgWydud2FyaGsnLCBbMTA1MzFdXSwgWydud2FycicsIFs4NTk4XV0sIFsnbndBcnInLCBbODY2Ml1dLCBbJ253YXJyb3cnLCBbODU5OF1dLCBbJ253bmVhcicsIFsxMDUzNV1dLCBbJ09hY3V0ZScsIFsyMTFdXSwgWydvYWN1dGUnLCBbMjQzXV0sIFsnb2FzdCcsIFs4ODU5XV0sIFsnT2NpcmMnLCBbMjEyXV0sIFsnb2NpcmMnLCBbMjQ0XV0sIFsnb2NpcicsIFs4ODU4XV0sIFsnT2N5JywgWzEwNTRdXSwgWydvY3knLCBbMTA4Nl1dLCBbJ29kYXNoJywgWzg4NjFdXSwgWydPZGJsYWMnLCBbMzM2XV0sIFsnb2RibGFjJywgWzMzN11dLCBbJ29kaXYnLCBbMTA4MDhdXSwgWydvZG90JywgWzg4NTddXSwgWydvZHNvbGQnLCBbMTA2ODRdXSwgWydPRWxpZycsIFszMzhdXSwgWydvZWxpZycsIFszMzldXSwgWydvZmNpcicsIFsxMDY4N11dLCBbJ09mcicsIFsxMjAwODJdXSwgWydvZnInLCBbMTIwMTA4XV0sIFsnb2dvbicsIFs3MzFdXSwgWydPZ3JhdmUnLCBbMjEwXV0sIFsnb2dyYXZlJywgWzI0Ml1dLCBbJ29ndCcsIFsxMDY4OV1dLCBbJ29oYmFyJywgWzEwNjc3XV0sIFsnb2htJywgWzkzN11dLCBbJ29pbnQnLCBbODc1MF1dLCBbJ29sYXJyJywgWzg2MzRdXSwgWydvbGNpcicsIFsxMDY4Nl1dLCBbJ29sY3Jvc3MnLCBbMTA2ODNdXSwgWydvbGluZScsIFs4MjU0XV0sIFsnb2x0JywgWzEwNjg4XV0sIFsnT21hY3InLCBbMzMyXV0sIFsnb21hY3InLCBbMzMzXV0sIFsnT21lZ2EnLCBbOTM3XV0sIFsnb21lZ2EnLCBbOTY5XV0sIFsnT21pY3JvbicsIFs5MjddXSwgWydvbWljcm9uJywgWzk1OV1dLCBbJ29taWQnLCBbMTA2NzhdXSwgWydvbWludXMnLCBbODg1NF1dLCBbJ09vcGYnLCBbMTIwMTM0XV0sIFsnb29wZicsIFsxMjAxNjBdXSwgWydvcGFyJywgWzEwNjc5XV0sIFsnT3BlbkN1cmx5RG91YmxlUXVvdGUnLCBbODIyMF1dLCBbJ09wZW5DdXJseVF1b3RlJywgWzgyMTZdXSwgWydvcGVycCcsIFsxMDY4MV1dLCBbJ29wbHVzJywgWzg4NTNdXSwgWydvcmFycicsIFs4NjM1XV0sIFsnT3InLCBbMTA4MzZdXSwgWydvcicsIFs4NzQ0XV0sIFsnb3JkJywgWzEwODQ1XV0sIFsnb3JkZXInLCBbODUwMF1dLCBbJ29yZGVyb2YnLCBbODUwMF1dLCBbJ29yZGYnLCBbMTcwXV0sIFsnb3JkbScsIFsxODZdXSwgWydvcmlnb2YnLCBbODg4Nl1dLCBbJ29yb3InLCBbMTA4MzhdXSwgWydvcnNsb3BlJywgWzEwODM5XV0sIFsnb3J2JywgWzEwODQzXV0sIFsnb1MnLCBbOTQxNl1dLCBbJ09zY3InLCBbMTE5OTc4XV0sIFsnb3NjcicsIFs4NTAwXV0sIFsnT3NsYXNoJywgWzIxNl1dLCBbJ29zbGFzaCcsIFsyNDhdXSwgWydvc29sJywgWzg4NTZdXSwgWydPdGlsZGUnLCBbMjEzXV0sIFsnb3RpbGRlJywgWzI0NV1dLCBbJ290aW1lc2FzJywgWzEwODA2XV0sIFsnT3RpbWVzJywgWzEwODA3XV0sIFsnb3RpbWVzJywgWzg4NTVdXSwgWydPdW1sJywgWzIxNF1dLCBbJ291bWwnLCBbMjQ2XV0sIFsnb3ZiYXInLCBbOTAyMV1dLCBbJ092ZXJCYXInLCBbODI1NF1dLCBbJ092ZXJCcmFjZScsIFs5MTgyXV0sIFsnT3ZlckJyYWNrZXQnLCBbOTE0MF1dLCBbJ092ZXJQYXJlbnRoZXNpcycsIFs5MTgwXV0sIFsncGFyYScsIFsxODJdXSwgWydwYXJhbGxlbCcsIFs4NzQxXV0sIFsncGFyJywgWzg3NDFdXSwgWydwYXJzaW0nLCBbMTA5OTVdXSwgWydwYXJzbCcsIFsxMTAwNV1dLCBbJ3BhcnQnLCBbODcwNl1dLCBbJ1BhcnRpYWxEJywgWzg3MDZdXSwgWydQY3knLCBbMTA1NV1dLCBbJ3BjeScsIFsxMDg3XV0sIFsncGVyY250JywgWzM3XV0sIFsncGVyaW9kJywgWzQ2XV0sIFsncGVybWlsJywgWzgyNDBdXSwgWydwZXJwJywgWzg4NjldXSwgWydwZXJ0ZW5rJywgWzgyNDFdXSwgWydQZnInLCBbMTIwMDgzXV0sIFsncGZyJywgWzEyMDEwOV1dLCBbJ1BoaScsIFs5MzRdXSwgWydwaGknLCBbOTY2XV0sIFsncGhpdicsIFs5ODFdXSwgWydwaG1tYXQnLCBbODQ5OV1dLCBbJ3Bob25lJywgWzk3NDJdXSwgWydQaScsIFs5MjhdXSwgWydwaScsIFs5NjBdXSwgWydwaXRjaGZvcmsnLCBbODkxNl1dLCBbJ3BpdicsIFs5ODJdXSwgWydwbGFuY2snLCBbODQ2M11dLCBbJ3BsYW5ja2gnLCBbODQ2Ml1dLCBbJ3BsYW5rdicsIFs4NDYzXV0sIFsncGx1c2FjaXInLCBbMTA3ODddXSwgWydwbHVzYicsIFs4ODYyXV0sIFsncGx1c2NpcicsIFsxMDc4Nl1dLCBbJ3BsdXMnLCBbNDNdXSwgWydwbHVzZG8nLCBbODcyNF1dLCBbJ3BsdXNkdScsIFsxMDc4OV1dLCBbJ3BsdXNlJywgWzEwODY2XV0sIFsnUGx1c01pbnVzJywgWzE3N11dLCBbJ3BsdXNtbicsIFsxNzddXSwgWydwbHVzc2ltJywgWzEwNzkwXV0sIFsncGx1c3R3bycsIFsxMDc5MV1dLCBbJ3BtJywgWzE3N11dLCBbJ1BvaW5jYXJlcGxhbmUnLCBbODQ2MF1dLCBbJ3BvaW50aW50JywgWzEwNzczXV0sIFsncG9wZicsIFsxMjAxNjFdXSwgWydQb3BmJywgWzg0NzNdXSwgWydwb3VuZCcsIFsxNjNdXSwgWydwcmFwJywgWzEwOTM1XV0sIFsnUHInLCBbMTA5MzldXSwgWydwcicsIFs4ODI2XV0sIFsncHJjdWUnLCBbODgyOF1dLCBbJ3ByZWNhcHByb3gnLCBbMTA5MzVdXSwgWydwcmVjJywgWzg4MjZdXSwgWydwcmVjY3VybHllcScsIFs4ODI4XV0sIFsnUHJlY2VkZXMnLCBbODgyNl1dLCBbJ1ByZWNlZGVzRXF1YWwnLCBbMTA5MjddXSwgWydQcmVjZWRlc1NsYW50RXF1YWwnLCBbODgyOF1dLCBbJ1ByZWNlZGVzVGlsZGUnLCBbODgzMF1dLCBbJ3ByZWNlcScsIFsxMDkyN11dLCBbJ3ByZWNuYXBwcm94JywgWzEwOTM3XV0sIFsncHJlY25lcXEnLCBbMTA5MzNdXSwgWydwcmVjbnNpbScsIFs4OTM2XV0sIFsncHJlJywgWzEwOTI3XV0sIFsncHJFJywgWzEwOTMxXV0sIFsncHJlY3NpbScsIFs4ODMwXV0sIFsncHJpbWUnLCBbODI0Ml1dLCBbJ1ByaW1lJywgWzgyNDNdXSwgWydwcmltZXMnLCBbODQ3M11dLCBbJ3BybmFwJywgWzEwOTM3XV0sIFsncHJuRScsIFsxMDkzM11dLCBbJ3BybnNpbScsIFs4OTM2XV0sIFsncHJvZCcsIFs4NzE5XV0sIFsnUHJvZHVjdCcsIFs4NzE5XV0sIFsncHJvZmFsYXInLCBbOTAwNl1dLCBbJ3Byb2ZsaW5lJywgWzg5NzhdXSwgWydwcm9mc3VyZicsIFs4OTc5XV0sIFsncHJvcCcsIFs4NzMzXV0sIFsnUHJvcG9ydGlvbmFsJywgWzg3MzNdXSwgWydQcm9wb3J0aW9uJywgWzg3NTldXSwgWydwcm9wdG8nLCBbODczM11dLCBbJ3Byc2ltJywgWzg4MzBdXSwgWydwcnVyZWwnLCBbODg4MF1dLCBbJ1BzY3InLCBbMTE5OTc5XV0sIFsncHNjcicsIFsxMjAwMDVdXSwgWydQc2knLCBbOTM2XV0sIFsncHNpJywgWzk2OF1dLCBbJ3B1bmNzcCcsIFs4MjAwXV0sIFsnUWZyJywgWzEyMDA4NF1dLCBbJ3FmcicsIFsxMjAxMTBdXSwgWydxaW50JywgWzEwNzY0XV0sIFsncW9wZicsIFsxMjAxNjJdXSwgWydRb3BmJywgWzg0NzRdXSwgWydxcHJpbWUnLCBbODI3OV1dLCBbJ1FzY3InLCBbMTE5OTgwXV0sIFsncXNjcicsIFsxMjAwMDZdXSwgWydxdWF0ZXJuaW9ucycsIFs4NDYxXV0sIFsncXVhdGludCcsIFsxMDc3NF1dLCBbJ3F1ZXN0JywgWzYzXV0sIFsncXVlc3RlcScsIFs4Nzk5XV0sIFsncXVvdCcsIFszNF1dLCBbJ1FVT1QnLCBbMzRdXSwgWydyQWFycicsIFs4NjY3XV0sIFsncmFjZScsIFs4NzY1LCA4MTddXSwgWydSYWN1dGUnLCBbMzQwXV0sIFsncmFjdXRlJywgWzM0MV1dLCBbJ3JhZGljJywgWzg3MzBdXSwgWydyYWVtcHR5dicsIFsxMDY3NV1dLCBbJ3JhbmcnLCBbMTAyMTddXSwgWydSYW5nJywgWzEwMjE5XV0sIFsncmFuZ2QnLCBbMTA2NDJdXSwgWydyYW5nZScsIFsxMDY2MV1dLCBbJ3JhbmdsZScsIFsxMDIxN11dLCBbJ3JhcXVvJywgWzE4N11dLCBbJ3JhcnJhcCcsIFsxMDYxM11dLCBbJ3JhcnJiJywgWzg2NzddXSwgWydyYXJyYmZzJywgWzEwNTI4XV0sIFsncmFycmMnLCBbMTA1NDddXSwgWydyYXJyJywgWzg1OTRdXSwgWydSYXJyJywgWzg2MDhdXSwgWydyQXJyJywgWzg2NThdXSwgWydyYXJyZnMnLCBbMTA1MjZdXSwgWydyYXJyaGsnLCBbODYxOF1dLCBbJ3JhcnJscCcsIFs4NjIwXV0sIFsncmFycnBsJywgWzEwNTY1XV0sIFsncmFycnNpbScsIFsxMDYxMl1dLCBbJ1JhcnJ0bCcsIFsxMDUxOF1dLCBbJ3JhcnJ0bCcsIFs4NjExXV0sIFsncmFycncnLCBbODYwNV1dLCBbJ3JhdGFpbCcsIFsxMDUyMl1dLCBbJ3JBdGFpbCcsIFsxMDUyNF1dLCBbJ3JhdGlvJywgWzg3NThdXSwgWydyYXRpb25hbHMnLCBbODQ3NF1dLCBbJ3JiYXJyJywgWzEwNTA5XV0sIFsnckJhcnInLCBbMTA1MTFdXSwgWydSQmFycicsIFsxMDUxMl1dLCBbJ3JiYnJrJywgWzEwMDk5XV0sIFsncmJyYWNlJywgWzEyNV1dLCBbJ3JicmFjaycsIFs5M11dLCBbJ3JicmtlJywgWzEwNjM2XV0sIFsncmJya3NsZCcsIFsxMDYzOF1dLCBbJ3JicmtzbHUnLCBbMTA2NDBdXSwgWydSY2Fyb24nLCBbMzQ0XV0sIFsncmNhcm9uJywgWzM0NV1dLCBbJ1JjZWRpbCcsIFszNDJdXSwgWydyY2VkaWwnLCBbMzQzXV0sIFsncmNlaWwnLCBbODk2OV1dLCBbJ3JjdWInLCBbMTI1XV0sIFsnUmN5JywgWzEwNTZdXSwgWydyY3knLCBbMTA4OF1dLCBbJ3JkY2EnLCBbMTA1NTFdXSwgWydyZGxkaGFyJywgWzEwNjAxXV0sIFsncmRxdW8nLCBbODIyMV1dLCBbJ3JkcXVvcicsIFs4MjIxXV0sIFsncmRzaCcsIFs4NjI3XV0sIFsncmVhbCcsIFs4NDc2XV0sIFsncmVhbGluZScsIFs4NDc1XV0sIFsncmVhbHBhcnQnLCBbODQ3Nl1dLCBbJ3JlYWxzJywgWzg0NzddXSwgWydSZScsIFs4NDc2XV0sIFsncmVjdCcsIFs5NjQ1XV0sIFsncmVnJywgWzE3NF1dLCBbJ1JFRycsIFsxNzRdXSwgWydSZXZlcnNlRWxlbWVudCcsIFs4NzE1XV0sIFsnUmV2ZXJzZUVxdWlsaWJyaXVtJywgWzg2NTFdXSwgWydSZXZlcnNlVXBFcXVpbGlicml1bScsIFsxMDYwN11dLCBbJ3JmaXNodCcsIFsxMDYyMV1dLCBbJ3JmbG9vcicsIFs4OTcxXV0sIFsncmZyJywgWzEyMDExMV1dLCBbJ1JmcicsIFs4NDc2XV0sIFsnckhhcicsIFsxMDU5Nl1dLCBbJ3JoYXJkJywgWzg2NDFdXSwgWydyaGFydScsIFs4NjQwXV0sIFsncmhhcnVsJywgWzEwNjA0XV0sIFsnUmhvJywgWzkyOV1dLCBbJ3JobycsIFs5NjFdXSwgWydyaG92JywgWzEwMDldXSwgWydSaWdodEFuZ2xlQnJhY2tldCcsIFsxMDIxN11dLCBbJ1JpZ2h0QXJyb3dCYXInLCBbODY3N11dLCBbJ3JpZ2h0YXJyb3cnLCBbODU5NF1dLCBbJ1JpZ2h0QXJyb3cnLCBbODU5NF1dLCBbJ1JpZ2h0YXJyb3cnLCBbODY1OF1dLCBbJ1JpZ2h0QXJyb3dMZWZ0QXJyb3cnLCBbODY0NF1dLCBbJ3JpZ2h0YXJyb3d0YWlsJywgWzg2MTFdXSwgWydSaWdodENlaWxpbmcnLCBbODk2OV1dLCBbJ1JpZ2h0RG91YmxlQnJhY2tldCcsIFsxMDIxNV1dLCBbJ1JpZ2h0RG93blRlZVZlY3RvcicsIFsxMDU4OV1dLCBbJ1JpZ2h0RG93blZlY3RvckJhcicsIFsxMDU4MV1dLCBbJ1JpZ2h0RG93blZlY3RvcicsIFs4NjQyXV0sIFsnUmlnaHRGbG9vcicsIFs4OTcxXV0sIFsncmlnaHRoYXJwb29uZG93bicsIFs4NjQxXV0sIFsncmlnaHRoYXJwb29udXAnLCBbODY0MF1dLCBbJ3JpZ2h0bGVmdGFycm93cycsIFs4NjQ0XV0sIFsncmlnaHRsZWZ0aGFycG9vbnMnLCBbODY1Ml1dLCBbJ3JpZ2h0cmlnaHRhcnJvd3MnLCBbODY0OV1dLCBbJ3JpZ2h0c3F1aWdhcnJvdycsIFs4NjA1XV0sIFsnUmlnaHRUZWVBcnJvdycsIFs4NjE0XV0sIFsnUmlnaHRUZWUnLCBbODg2Nl1dLCBbJ1JpZ2h0VGVlVmVjdG9yJywgWzEwNTg3XV0sIFsncmlnaHR0aHJlZXRpbWVzJywgWzg5MDhdXSwgWydSaWdodFRyaWFuZ2xlQmFyJywgWzEwNzA0XV0sIFsnUmlnaHRUcmlhbmdsZScsIFs4ODgzXV0sIFsnUmlnaHRUcmlhbmdsZUVxdWFsJywgWzg4ODVdXSwgWydSaWdodFVwRG93blZlY3RvcicsIFsxMDU3NV1dLCBbJ1JpZ2h0VXBUZWVWZWN0b3InLCBbMTA1ODhdXSwgWydSaWdodFVwVmVjdG9yQmFyJywgWzEwNTgwXV0sIFsnUmlnaHRVcFZlY3RvcicsIFs4NjM4XV0sIFsnUmlnaHRWZWN0b3JCYXInLCBbMTA1NzldXSwgWydSaWdodFZlY3RvcicsIFs4NjQwXV0sIFsncmluZycsIFs3MzBdXSwgWydyaXNpbmdkb3RzZXEnLCBbODc4N11dLCBbJ3JsYXJyJywgWzg2NDRdXSwgWydybGhhcicsIFs4NjUyXV0sIFsncmxtJywgWzgyMDddXSwgWydybW91c3RhY2hlJywgWzkxMzddXSwgWydybW91c3QnLCBbOTEzN11dLCBbJ3JubWlkJywgWzEwOTkwXV0sIFsncm9hbmcnLCBbMTAyMjFdXSwgWydyb2FycicsIFs4NzAyXV0sIFsncm9icmsnLCBbMTAyMTVdXSwgWydyb3BhcicsIFsxMDYzMF1dLCBbJ3JvcGYnLCBbMTIwMTYzXV0sIFsnUm9wZicsIFs4NDc3XV0sIFsncm9wbHVzJywgWzEwNzk4XV0sIFsncm90aW1lcycsIFsxMDgwNV1dLCBbJ1JvdW5kSW1wbGllcycsIFsxMDYwOF1dLCBbJ3JwYXInLCBbNDFdXSwgWydycGFyZ3QnLCBbMTA2NDRdXSwgWydycHBvbGludCcsIFsxMDc3MF1dLCBbJ3JyYXJyJywgWzg2NDldXSwgWydScmlnaHRhcnJvdycsIFs4NjY3XV0sIFsncnNhcXVvJywgWzgyNTBdXSwgWydyc2NyJywgWzEyMDAwN11dLCBbJ1JzY3InLCBbODQ3NV1dLCBbJ3JzaCcsIFs4NjI1XV0sIFsnUnNoJywgWzg2MjVdXSwgWydyc3FiJywgWzkzXV0sIFsncnNxdW8nLCBbODIxN11dLCBbJ3JzcXVvcicsIFs4MjE3XV0sIFsncnRocmVlJywgWzg5MDhdXSwgWydydGltZXMnLCBbODkwNl1dLCBbJ3J0cmknLCBbOTY1N11dLCBbJ3J0cmllJywgWzg4ODVdXSwgWydydHJpZicsIFs5NjU2XV0sIFsncnRyaWx0cmknLCBbMTA3MDJdXSwgWydSdWxlRGVsYXllZCcsIFsxMDc0MF1dLCBbJ3J1bHVoYXInLCBbMTA2MDBdXSwgWydyeCcsIFs4NDc4XV0sIFsnU2FjdXRlJywgWzM0Nl1dLCBbJ3NhY3V0ZScsIFszNDddXSwgWydzYnF1bycsIFs4MjE4XV0sIFsnc2NhcCcsIFsxMDkzNl1dLCBbJ1NjYXJvbicsIFszNTJdXSwgWydzY2Fyb24nLCBbMzUzXV0sIFsnU2MnLCBbMTA5NDBdXSwgWydzYycsIFs4ODI3XV0sIFsnc2NjdWUnLCBbODgyOV1dLCBbJ3NjZScsIFsxMDkyOF1dLCBbJ3NjRScsIFsxMDkzMl1dLCBbJ1NjZWRpbCcsIFszNTBdXSwgWydzY2VkaWwnLCBbMzUxXV0sIFsnU2NpcmMnLCBbMzQ4XV0sIFsnc2NpcmMnLCBbMzQ5XV0sIFsnc2NuYXAnLCBbMTA5MzhdXSwgWydzY25FJywgWzEwOTM0XV0sIFsnc2Nuc2ltJywgWzg5MzddXSwgWydzY3BvbGludCcsIFsxMDc3MV1dLCBbJ3Njc2ltJywgWzg4MzFdXSwgWydTY3knLCBbMTA1N11dLCBbJ3NjeScsIFsxMDg5XV0sIFsnc2RvdGInLCBbODg2NV1dLCBbJ3Nkb3QnLCBbODkwMV1dLCBbJ3Nkb3RlJywgWzEwODU0XV0sIFsnc2VhcmhrJywgWzEwNTMzXV0sIFsnc2VhcnInLCBbODYwMF1dLCBbJ3NlQXJyJywgWzg2NjRdXSwgWydzZWFycm93JywgWzg2MDBdXSwgWydzZWN0JywgWzE2N11dLCBbJ3NlbWknLCBbNTldXSwgWydzZXN3YXInLCBbMTA1MzddXSwgWydzZXRtaW51cycsIFs4NzI2XV0sIFsnc2V0bW4nLCBbODcyNl1dLCBbJ3NleHQnLCBbMTAwMzhdXSwgWydTZnInLCBbMTIwMDg2XV0sIFsnc2ZyJywgWzEyMDExMl1dLCBbJ3Nmcm93bicsIFs4OTk0XV0sIFsnc2hhcnAnLCBbOTgzOV1dLCBbJ1NIQ0hjeScsIFsxMDY1XV0sIFsnc2hjaGN5JywgWzEwOTddXSwgWydTSGN5JywgWzEwNjRdXSwgWydzaGN5JywgWzEwOTZdXSwgWydTaG9ydERvd25BcnJvdycsIFs4NTk1XV0sIFsnU2hvcnRMZWZ0QXJyb3cnLCBbODU5Ml1dLCBbJ3Nob3J0bWlkJywgWzg3MzldXSwgWydzaG9ydHBhcmFsbGVsJywgWzg3NDFdXSwgWydTaG9ydFJpZ2h0QXJyb3cnLCBbODU5NF1dLCBbJ1Nob3J0VXBBcnJvdycsIFs4NTkzXV0sIFsnc2h5JywgWzE3M11dLCBbJ1NpZ21hJywgWzkzMV1dLCBbJ3NpZ21hJywgWzk2M11dLCBbJ3NpZ21hZicsIFs5NjJdXSwgWydzaWdtYXYnLCBbOTYyXV0sIFsnc2ltJywgWzg3NjRdXSwgWydzaW1kb3QnLCBbMTA4NThdXSwgWydzaW1lJywgWzg3NzFdXSwgWydzaW1lcScsIFs4NzcxXV0sIFsnc2ltZycsIFsxMDkxMF1dLCBbJ3NpbWdFJywgWzEwOTEyXV0sIFsnc2ltbCcsIFsxMDkwOV1dLCBbJ3NpbWxFJywgWzEwOTExXV0sIFsnc2ltbmUnLCBbODc3NF1dLCBbJ3NpbXBsdXMnLCBbMTA3ODhdXSwgWydzaW1yYXJyJywgWzEwNjEwXV0sIFsnc2xhcnInLCBbODU5Ml1dLCBbJ1NtYWxsQ2lyY2xlJywgWzg3MjhdXSwgWydzbWFsbHNldG1pbnVzJywgWzg3MjZdXSwgWydzbWFzaHAnLCBbMTA4MDNdXSwgWydzbWVwYXJzbCcsIFsxMDcyNF1dLCBbJ3NtaWQnLCBbODczOV1dLCBbJ3NtaWxlJywgWzg5OTVdXSwgWydzbXQnLCBbMTA5MjJdXSwgWydzbXRlJywgWzEwOTI0XV0sIFsnc210ZXMnLCBbMTA5MjQsIDY1MDI0XV0sIFsnU09GVGN5JywgWzEwNjhdXSwgWydzb2Z0Y3knLCBbMTEwMF1dLCBbJ3NvbGJhcicsIFs5MDIzXV0sIFsnc29sYicsIFsxMDY5Ml1dLCBbJ3NvbCcsIFs0N11dLCBbJ1NvcGYnLCBbMTIwMTM4XV0sIFsnc29wZicsIFsxMjAxNjRdXSwgWydzcGFkZXMnLCBbOTgyNF1dLCBbJ3NwYWRlc3VpdCcsIFs5ODI0XV0sIFsnc3BhcicsIFs4NzQxXV0sIFsnc3FjYXAnLCBbODg1MV1dLCBbJ3NxY2FwcycsIFs4ODUxLCA2NTAyNF1dLCBbJ3NxY3VwJywgWzg4NTJdXSwgWydzcWN1cHMnLCBbODg1MiwgNjUwMjRdXSwgWydTcXJ0JywgWzg3MzBdXSwgWydzcXN1YicsIFs4ODQ3XV0sIFsnc3FzdWJlJywgWzg4NDldXSwgWydzcXN1YnNldCcsIFs4ODQ3XV0sIFsnc3FzdWJzZXRlcScsIFs4ODQ5XV0sIFsnc3FzdXAnLCBbODg0OF1dLCBbJ3Nxc3VwZScsIFs4ODUwXV0sIFsnc3FzdXBzZXQnLCBbODg0OF1dLCBbJ3Nxc3Vwc2V0ZXEnLCBbODg1MF1dLCBbJ3NxdWFyZScsIFs5NjMzXV0sIFsnU3F1YXJlJywgWzk2MzNdXSwgWydTcXVhcmVJbnRlcnNlY3Rpb24nLCBbODg1MV1dLCBbJ1NxdWFyZVN1YnNldCcsIFs4ODQ3XV0sIFsnU3F1YXJlU3Vic2V0RXF1YWwnLCBbODg0OV1dLCBbJ1NxdWFyZVN1cGVyc2V0JywgWzg4NDhdXSwgWydTcXVhcmVTdXBlcnNldEVxdWFsJywgWzg4NTBdXSwgWydTcXVhcmVVbmlvbicsIFs4ODUyXV0sIFsnc3F1YXJmJywgWzk2NDJdXSwgWydzcXUnLCBbOTYzM11dLCBbJ3NxdWYnLCBbOTY0Ml1dLCBbJ3NyYXJyJywgWzg1OTRdXSwgWydTc2NyJywgWzExOTk4Ml1dLCBbJ3NzY3InLCBbMTIwMDA4XV0sIFsnc3NldG1uJywgWzg3MjZdXSwgWydzc21pbGUnLCBbODk5NV1dLCBbJ3NzdGFyZicsIFs4OTAyXV0sIFsnU3RhcicsIFs4OTAyXV0sIFsnc3RhcicsIFs5NzM0XV0sIFsnc3RhcmYnLCBbOTczM11dLCBbJ3N0cmFpZ2h0ZXBzaWxvbicsIFsxMDEzXV0sIFsnc3RyYWlnaHRwaGknLCBbOTgxXV0sIFsnc3RybnMnLCBbMTc1XV0sIFsnc3ViJywgWzg4MzRdXSwgWydTdWInLCBbODkxMl1dLCBbJ3N1YmRvdCcsIFsxMDk0MV1dLCBbJ3N1YkUnLCBbMTA5NDldXSwgWydzdWJlJywgWzg4MzhdXSwgWydzdWJlZG90JywgWzEwOTQ3XV0sIFsnc3VibXVsdCcsIFsxMDk0NV1dLCBbJ3N1Ym5FJywgWzEwOTU1XV0sIFsnc3VibmUnLCBbODg0Ml1dLCBbJ3N1YnBsdXMnLCBbMTA5NDNdXSwgWydzdWJyYXJyJywgWzEwNjE3XV0sIFsnc3Vic2V0JywgWzg4MzRdXSwgWydTdWJzZXQnLCBbODkxMl1dLCBbJ3N1YnNldGVxJywgWzg4MzhdXSwgWydzdWJzZXRlcXEnLCBbMTA5NDldXSwgWydTdWJzZXRFcXVhbCcsIFs4ODM4XV0sIFsnc3Vic2V0bmVxJywgWzg4NDJdXSwgWydzdWJzZXRuZXFxJywgWzEwOTU1XV0sIFsnc3Vic2ltJywgWzEwOTUxXV0sIFsnc3Vic3ViJywgWzEwOTY1XV0sIFsnc3Vic3VwJywgWzEwOTYzXV0sIFsnc3VjY2FwcHJveCcsIFsxMDkzNl1dLCBbJ3N1Y2MnLCBbODgyN11dLCBbJ3N1Y2NjdXJseWVxJywgWzg4MjldXSwgWydTdWNjZWVkcycsIFs4ODI3XV0sIFsnU3VjY2VlZHNFcXVhbCcsIFsxMDkyOF1dLCBbJ1N1Y2NlZWRzU2xhbnRFcXVhbCcsIFs4ODI5XV0sIFsnU3VjY2VlZHNUaWxkZScsIFs4ODMxXV0sIFsnc3VjY2VxJywgWzEwOTI4XV0sIFsnc3VjY25hcHByb3gnLCBbMTA5MzhdXSwgWydzdWNjbmVxcScsIFsxMDkzNF1dLCBbJ3N1Y2Nuc2ltJywgWzg5MzddXSwgWydzdWNjc2ltJywgWzg4MzFdXSwgWydTdWNoVGhhdCcsIFs4NzE1XV0sIFsnc3VtJywgWzg3MjFdXSwgWydTdW0nLCBbODcyMV1dLCBbJ3N1bmcnLCBbOTgzNF1dLCBbJ3N1cDEnLCBbMTg1XV0sIFsnc3VwMicsIFsxNzhdXSwgWydzdXAzJywgWzE3OV1dLCBbJ3N1cCcsIFs4ODM1XV0sIFsnU3VwJywgWzg5MTNdXSwgWydzdXBkb3QnLCBbMTA5NDJdXSwgWydzdXBkc3ViJywgWzEwOTY4XV0sIFsnc3VwRScsIFsxMDk1MF1dLCBbJ3N1cGUnLCBbODgzOV1dLCBbJ3N1cGVkb3QnLCBbMTA5NDhdXSwgWydTdXBlcnNldCcsIFs4ODM1XV0sIFsnU3VwZXJzZXRFcXVhbCcsIFs4ODM5XV0sIFsnc3VwaHNvbCcsIFsxMDE4NV1dLCBbJ3N1cGhzdWInLCBbMTA5NjddXSwgWydzdXBsYXJyJywgWzEwNjE5XV0sIFsnc3VwbXVsdCcsIFsxMDk0Nl1dLCBbJ3N1cG5FJywgWzEwOTU2XV0sIFsnc3VwbmUnLCBbODg0M11dLCBbJ3N1cHBsdXMnLCBbMTA5NDRdXSwgWydzdXBzZXQnLCBbODgzNV1dLCBbJ1N1cHNldCcsIFs4OTEzXV0sIFsnc3Vwc2V0ZXEnLCBbODgzOV1dLCBbJ3N1cHNldGVxcScsIFsxMDk1MF1dLCBbJ3N1cHNldG5lcScsIFs4ODQzXV0sIFsnc3Vwc2V0bmVxcScsIFsxMDk1Nl1dLCBbJ3N1cHNpbScsIFsxMDk1Ml1dLCBbJ3N1cHN1YicsIFsxMDk2NF1dLCBbJ3N1cHN1cCcsIFsxMDk2Nl1dLCBbJ3N3YXJoaycsIFsxMDUzNF1dLCBbJ3N3YXJyJywgWzg2MDFdXSwgWydzd0FycicsIFs4NjY1XV0sIFsnc3dhcnJvdycsIFs4NjAxXV0sIFsnc3dud2FyJywgWzEwNTM4XV0sIFsnc3psaWcnLCBbMjIzXV0sIFsnVGFiJywgWzldXSwgWyd0YXJnZXQnLCBbODk4Ml1dLCBbJ1RhdScsIFs5MzJdXSwgWyd0YXUnLCBbOTY0XV0sIFsndGJyaycsIFs5MTQwXV0sIFsnVGNhcm9uJywgWzM1Nl1dLCBbJ3RjYXJvbicsIFszNTddXSwgWydUY2VkaWwnLCBbMzU0XV0sIFsndGNlZGlsJywgWzM1NV1dLCBbJ1RjeScsIFsxMDU4XV0sIFsndGN5JywgWzEwOTBdXSwgWyd0ZG90JywgWzg0MTFdXSwgWyd0ZWxyZWMnLCBbODk4MV1dLCBbJ1RmcicsIFsxMjAwODddXSwgWyd0ZnInLCBbMTIwMTEzXV0sIFsndGhlcmU0JywgWzg3NTZdXSwgWyd0aGVyZWZvcmUnLCBbODc1Nl1dLCBbJ1RoZXJlZm9yZScsIFs4NzU2XV0sIFsnVGhldGEnLCBbOTIwXV0sIFsndGhldGEnLCBbOTUyXV0sIFsndGhldGFzeW0nLCBbOTc3XV0sIFsndGhldGF2JywgWzk3N11dLCBbJ3RoaWNrYXBwcm94JywgWzg3NzZdXSwgWyd0aGlja3NpbScsIFs4NzY0XV0sIFsnVGhpY2tTcGFjZScsIFs4Mjg3LCA4MjAyXV0sIFsnVGhpblNwYWNlJywgWzgyMDFdXSwgWyd0aGluc3AnLCBbODIwMV1dLCBbJ3Roa2FwJywgWzg3NzZdXSwgWyd0aGtzaW0nLCBbODc2NF1dLCBbJ1RIT1JOJywgWzIyMl1dLCBbJ3Rob3JuJywgWzI1NF1dLCBbJ3RpbGRlJywgWzczMl1dLCBbJ1RpbGRlJywgWzg3NjRdXSwgWydUaWxkZUVxdWFsJywgWzg3NzFdXSwgWydUaWxkZUZ1bGxFcXVhbCcsIFs4NzczXV0sIFsnVGlsZGVUaWxkZScsIFs4Nzc2XV0sIFsndGltZXNiYXInLCBbMTA4MDFdXSwgWyd0aW1lc2InLCBbODg2NF1dLCBbJ3RpbWVzJywgWzIxNV1dLCBbJ3RpbWVzZCcsIFsxMDgwMF1dLCBbJ3RpbnQnLCBbODc0OV1dLCBbJ3RvZWEnLCBbMTA1MzZdXSwgWyd0b3Bib3QnLCBbOTAxNF1dLCBbJ3RvcGNpcicsIFsxMDk5M11dLCBbJ3RvcCcsIFs4ODY4XV0sIFsnVG9wZicsIFsxMjAxMzldXSwgWyd0b3BmJywgWzEyMDE2NV1dLCBbJ3RvcGZvcmsnLCBbMTA5NzBdXSwgWyd0b3NhJywgWzEwNTM3XV0sIFsndHByaW1lJywgWzgyNDRdXSwgWyd0cmFkZScsIFs4NDgyXV0sIFsnVFJBREUnLCBbODQ4Ml1dLCBbJ3RyaWFuZ2xlJywgWzk2NTNdXSwgWyd0cmlhbmdsZWRvd24nLCBbOTY2M11dLCBbJ3RyaWFuZ2xlbGVmdCcsIFs5NjY3XV0sIFsndHJpYW5nbGVsZWZ0ZXEnLCBbODg4NF1dLCBbJ3RyaWFuZ2xlcScsIFs4Nzk2XV0sIFsndHJpYW5nbGVyaWdodCcsIFs5NjU3XV0sIFsndHJpYW5nbGVyaWdodGVxJywgWzg4ODVdXSwgWyd0cmlkb3QnLCBbOTcwOF1dLCBbJ3RyaWUnLCBbODc5Nl1dLCBbJ3RyaW1pbnVzJywgWzEwODEwXV0sIFsnVHJpcGxlRG90JywgWzg0MTFdXSwgWyd0cmlwbHVzJywgWzEwODA5XV0sIFsndHJpc2InLCBbMTA3MDFdXSwgWyd0cml0aW1lJywgWzEwODExXV0sIFsndHJwZXppdW0nLCBbOTE4Nl1dLCBbJ1RzY3InLCBbMTE5OTgzXV0sIFsndHNjcicsIFsxMjAwMDldXSwgWydUU2N5JywgWzEwNjJdXSwgWyd0c2N5JywgWzEwOTRdXSwgWydUU0hjeScsIFsxMDM1XV0sIFsndHNoY3knLCBbMTExNV1dLCBbJ1RzdHJvaycsIFszNThdXSwgWyd0c3Ryb2snLCBbMzU5XV0sIFsndHdpeHQnLCBbODgxMl1dLCBbJ3R3b2hlYWRsZWZ0YXJyb3cnLCBbODYwNl1dLCBbJ3R3b2hlYWRyaWdodGFycm93JywgWzg2MDhdXSwgWydVYWN1dGUnLCBbMjE4XV0sIFsndWFjdXRlJywgWzI1MF1dLCBbJ3VhcnInLCBbODU5M11dLCBbJ1VhcnInLCBbODYwN11dLCBbJ3VBcnInLCBbODY1N11dLCBbJ1VhcnJvY2lyJywgWzEwNTY5XV0sIFsnVWJyY3knLCBbMTAzOF1dLCBbJ3VicmN5JywgWzExMThdXSwgWydVYnJldmUnLCBbMzY0XV0sIFsndWJyZXZlJywgWzM2NV1dLCBbJ1VjaXJjJywgWzIxOV1dLCBbJ3VjaXJjJywgWzI1MV1dLCBbJ1VjeScsIFsxMDU5XV0sIFsndWN5JywgWzEwOTFdXSwgWyd1ZGFycicsIFs4NjQ1XV0sIFsnVWRibGFjJywgWzM2OF1dLCBbJ3VkYmxhYycsIFszNjldXSwgWyd1ZGhhcicsIFsxMDYwNl1dLCBbJ3VmaXNodCcsIFsxMDYyMl1dLCBbJ1VmcicsIFsxMjAwODhdXSwgWyd1ZnInLCBbMTIwMTE0XV0sIFsnVWdyYXZlJywgWzIxN11dLCBbJ3VncmF2ZScsIFsyNDldXSwgWyd1SGFyJywgWzEwNTk1XV0sIFsndWhhcmwnLCBbODYzOV1dLCBbJ3VoYXJyJywgWzg2MzhdXSwgWyd1aGJsaycsIFs5NjAwXV0sIFsndWxjb3JuJywgWzg5ODhdXSwgWyd1bGNvcm5lcicsIFs4OTg4XV0sIFsndWxjcm9wJywgWzg5NzVdXSwgWyd1bHRyaScsIFs5NzIwXV0sIFsnVW1hY3InLCBbMzYyXV0sIFsndW1hY3InLCBbMzYzXV0sIFsndW1sJywgWzE2OF1dLCBbJ1VuZGVyQmFyJywgWzk1XV0sIFsnVW5kZXJCcmFjZScsIFs5MTgzXV0sIFsnVW5kZXJCcmFja2V0JywgWzkxNDFdXSwgWydVbmRlclBhcmVudGhlc2lzJywgWzkxODFdXSwgWydVbmlvbicsIFs4ODk5XV0sIFsnVW5pb25QbHVzJywgWzg4NDZdXSwgWydVb2dvbicsIFszNzBdXSwgWyd1b2dvbicsIFszNzFdXSwgWydVb3BmJywgWzEyMDE0MF1dLCBbJ3VvcGYnLCBbMTIwMTY2XV0sIFsnVXBBcnJvd0JhcicsIFsxMDUxNF1dLCBbJ3VwYXJyb3cnLCBbODU5M11dLCBbJ1VwQXJyb3cnLCBbODU5M11dLCBbJ1VwYXJyb3cnLCBbODY1N11dLCBbJ1VwQXJyb3dEb3duQXJyb3cnLCBbODY0NV1dLCBbJ3VwZG93bmFycm93JywgWzg1OTddXSwgWydVcERvd25BcnJvdycsIFs4NTk3XV0sIFsnVXBkb3duYXJyb3cnLCBbODY2MV1dLCBbJ1VwRXF1aWxpYnJpdW0nLCBbMTA2MDZdXSwgWyd1cGhhcnBvb25sZWZ0JywgWzg2MzldXSwgWyd1cGhhcnBvb25yaWdodCcsIFs4NjM4XV0sIFsndXBsdXMnLCBbODg0Nl1dLCBbJ1VwcGVyTGVmdEFycm93JywgWzg1OThdXSwgWydVcHBlclJpZ2h0QXJyb3cnLCBbODU5OV1dLCBbJ3Vwc2knLCBbOTY1XV0sIFsnVXBzaScsIFs5NzhdXSwgWyd1cHNpaCcsIFs5NzhdXSwgWydVcHNpbG9uJywgWzkzM11dLCBbJ3Vwc2lsb24nLCBbOTY1XV0sIFsnVXBUZWVBcnJvdycsIFs4NjEzXV0sIFsnVXBUZWUnLCBbODg2OV1dLCBbJ3VwdXBhcnJvd3MnLCBbODY0OF1dLCBbJ3VyY29ybicsIFs4OTg5XV0sIFsndXJjb3JuZXInLCBbODk4OV1dLCBbJ3VyY3JvcCcsIFs4OTc0XV0sIFsnVXJpbmcnLCBbMzY2XV0sIFsndXJpbmcnLCBbMzY3XV0sIFsndXJ0cmknLCBbOTcyMV1dLCBbJ1VzY3InLCBbMTE5OTg0XV0sIFsndXNjcicsIFsxMjAwMTBdXSwgWyd1dGRvdCcsIFs4OTQ0XV0sIFsnVXRpbGRlJywgWzM2MF1dLCBbJ3V0aWxkZScsIFszNjFdXSwgWyd1dHJpJywgWzk2NTNdXSwgWyd1dHJpZicsIFs5NjUyXV0sIFsndXVhcnInLCBbODY0OF1dLCBbJ1V1bWwnLCBbMjIwXV0sIFsndXVtbCcsIFsyNTJdXSwgWyd1d2FuZ2xlJywgWzEwNjYzXV0sIFsndmFuZ3J0JywgWzEwNjUyXV0sIFsndmFyZXBzaWxvbicsIFsxMDEzXV0sIFsndmFya2FwcGEnLCBbMTAwOF1dLCBbJ3Zhcm5vdGhpbmcnLCBbODcwOV1dLCBbJ3ZhcnBoaScsIFs5ODFdXSwgWyd2YXJwaScsIFs5ODJdXSwgWyd2YXJwcm9wdG8nLCBbODczM11dLCBbJ3ZhcnInLCBbODU5N11dLCBbJ3ZBcnInLCBbODY2MV1dLCBbJ3ZhcnJobycsIFsxMDA5XV0sIFsndmFyc2lnbWEnLCBbOTYyXV0sIFsndmFyc3Vic2V0bmVxJywgWzg4NDIsIDY1MDI0XV0sIFsndmFyc3Vic2V0bmVxcScsIFsxMDk1NSwgNjUwMjRdXSwgWyd2YXJzdXBzZXRuZXEnLCBbODg0MywgNjUwMjRdXSwgWyd2YXJzdXBzZXRuZXFxJywgWzEwOTU2LCA2NTAyNF1dLCBbJ3ZhcnRoZXRhJywgWzk3N11dLCBbJ3ZhcnRyaWFuZ2xlbGVmdCcsIFs4ODgyXV0sIFsndmFydHJpYW5nbGVyaWdodCcsIFs4ODgzXV0sIFsndkJhcicsIFsxMDk4NF1dLCBbJ1ZiYXInLCBbMTA5ODddXSwgWyd2QmFydicsIFsxMDk4NV1dLCBbJ1ZjeScsIFsxMDQyXV0sIFsndmN5JywgWzEwNzRdXSwgWyd2ZGFzaCcsIFs4ODY2XV0sIFsndkRhc2gnLCBbODg3Ml1dLCBbJ1ZkYXNoJywgWzg4NzNdXSwgWydWRGFzaCcsIFs4ODc1XV0sIFsnVmRhc2hsJywgWzEwOTgyXV0sIFsndmVlYmFyJywgWzg4OTFdXSwgWyd2ZWUnLCBbODc0NF1dLCBbJ1ZlZScsIFs4ODk3XV0sIFsndmVlZXEnLCBbODc5NF1dLCBbJ3ZlbGxpcCcsIFs4OTQyXV0sIFsndmVyYmFyJywgWzEyNF1dLCBbJ1ZlcmJhcicsIFs4MjE0XV0sIFsndmVydCcsIFsxMjRdXSwgWydWZXJ0JywgWzgyMTRdXSwgWydWZXJ0aWNhbEJhcicsIFs4NzM5XV0sIFsnVmVydGljYWxMaW5lJywgWzEyNF1dLCBbJ1ZlcnRpY2FsU2VwYXJhdG9yJywgWzEwMDcyXV0sIFsnVmVydGljYWxUaWxkZScsIFs4NzY4XV0sIFsnVmVyeVRoaW5TcGFjZScsIFs4MjAyXV0sIFsnVmZyJywgWzEyMDA4OV1dLCBbJ3ZmcicsIFsxMjAxMTVdXSwgWyd2bHRyaScsIFs4ODgyXV0sIFsndm5zdWInLCBbODgzNCwgODQwMl1dLCBbJ3Zuc3VwJywgWzg4MzUsIDg0MDJdXSwgWydWb3BmJywgWzEyMDE0MV1dLCBbJ3ZvcGYnLCBbMTIwMTY3XV0sIFsndnByb3AnLCBbODczM11dLCBbJ3ZydHJpJywgWzg4ODNdXSwgWydWc2NyJywgWzExOTk4NV1dLCBbJ3ZzY3InLCBbMTIwMDExXV0sIFsndnN1Ym5FJywgWzEwOTU1LCA2NTAyNF1dLCBbJ3ZzdWJuZScsIFs4ODQyLCA2NTAyNF1dLCBbJ3ZzdXBuRScsIFsxMDk1NiwgNjUwMjRdXSwgWyd2c3VwbmUnLCBbODg0MywgNjUwMjRdXSwgWydWdmRhc2gnLCBbODg3NF1dLCBbJ3Z6aWd6YWcnLCBbMTA2NTBdXSwgWydXY2lyYycsIFszNzJdXSwgWyd3Y2lyYycsIFszNzNdXSwgWyd3ZWRiYXInLCBbMTA4NDddXSwgWyd3ZWRnZScsIFs4NzQzXV0sIFsnV2VkZ2UnLCBbODg5Nl1dLCBbJ3dlZGdlcScsIFs4NzkzXV0sIFsnd2VpZXJwJywgWzg0NzJdXSwgWydXZnInLCBbMTIwMDkwXV0sIFsnd2ZyJywgWzEyMDExNl1dLCBbJ1dvcGYnLCBbMTIwMTQyXV0sIFsnd29wZicsIFsxMjAxNjhdXSwgWyd3cCcsIFs4NDcyXV0sIFsnd3InLCBbODc2OF1dLCBbJ3dyZWF0aCcsIFs4NzY4XV0sIFsnV3NjcicsIFsxMTk5ODZdXSwgWyd3c2NyJywgWzEyMDAxMl1dLCBbJ3hjYXAnLCBbODg5OF1dLCBbJ3hjaXJjJywgWzk3MTFdXSwgWyd4Y3VwJywgWzg4OTldXSwgWyd4ZHRyaScsIFs5NjYxXV0sIFsnWGZyJywgWzEyMDA5MV1dLCBbJ3hmcicsIFsxMjAxMTddXSwgWyd4aGFycicsIFsxMDIzMV1dLCBbJ3hoQXJyJywgWzEwMjM0XV0sIFsnWGknLCBbOTI2XV0sIFsneGknLCBbOTU4XV0sIFsneGxhcnInLCBbMTAyMjldXSwgWyd4bEFycicsIFsxMDIzMl1dLCBbJ3htYXAnLCBbMTAyMzZdXSwgWyd4bmlzJywgWzg5NTVdXSwgWyd4b2RvdCcsIFsxMDc1Ml1dLCBbJ1hvcGYnLCBbMTIwMTQzXV0sIFsneG9wZicsIFsxMjAxNjldXSwgWyd4b3BsdXMnLCBbMTA3NTNdXSwgWyd4b3RpbWUnLCBbMTA3NTRdXSwgWyd4cmFycicsIFsxMDIzMF1dLCBbJ3hyQXJyJywgWzEwMjMzXV0sIFsnWHNjcicsIFsxMTk5ODddXSwgWyd4c2NyJywgWzEyMDAxM11dLCBbJ3hzcWN1cCcsIFsxMDc1OF1dLCBbJ3h1cGx1cycsIFsxMDc1Nl1dLCBbJ3h1dHJpJywgWzk2NTFdXSwgWyd4dmVlJywgWzg4OTddXSwgWyd4d2VkZ2UnLCBbODg5Nl1dLCBbJ1lhY3V0ZScsIFsyMjFdXSwgWyd5YWN1dGUnLCBbMjUzXV0sIFsnWUFjeScsIFsxMDcxXV0sIFsneWFjeScsIFsxMTAzXV0sIFsnWWNpcmMnLCBbMzc0XV0sIFsneWNpcmMnLCBbMzc1XV0sIFsnWWN5JywgWzEwNjddXSwgWyd5Y3knLCBbMTA5OV1dLCBbJ3llbicsIFsxNjVdXSwgWydZZnInLCBbMTIwMDkyXV0sIFsneWZyJywgWzEyMDExOF1dLCBbJ1lJY3knLCBbMTAzMV1dLCBbJ3lpY3knLCBbMTExMV1dLCBbJ1lvcGYnLCBbMTIwMTQ0XV0sIFsneW9wZicsIFsxMjAxNzBdXSwgWydZc2NyJywgWzExOTk4OF1dLCBbJ3lzY3InLCBbMTIwMDE0XV0sIFsnWVVjeScsIFsxMDcwXV0sIFsneXVjeScsIFsxMTAyXV0sIFsneXVtbCcsIFsyNTVdXSwgWydZdW1sJywgWzM3Nl1dLCBbJ1phY3V0ZScsIFszNzddXSwgWyd6YWN1dGUnLCBbMzc4XV0sIFsnWmNhcm9uJywgWzM4MV1dLCBbJ3pjYXJvbicsIFszODJdXSwgWydaY3knLCBbMTA0N11dLCBbJ3pjeScsIFsxMDc5XV0sIFsnWmRvdCcsIFszNzldXSwgWyd6ZG90JywgWzM4MF1dLCBbJ3plZXRyZicsIFs4NDg4XV0sIFsnWmVyb1dpZHRoU3BhY2UnLCBbODIwM11dLCBbJ1pldGEnLCBbOTE4XV0sIFsnemV0YScsIFs5NTBdXSwgWyd6ZnInLCBbMTIwMTE5XV0sIFsnWmZyJywgWzg0ODhdXSwgWydaSGN5JywgWzEwNDZdXSwgWyd6aGN5JywgWzEwNzhdXSwgWyd6aWdyYXJyJywgWzg2NjldXSwgWyd6b3BmJywgWzEyMDE3MV1dLCBbJ1pvcGYnLCBbODQ4NF1dLCBbJ1pzY3InLCBbMTE5OTg5XV0sIFsnenNjcicsIFsxMjAwMTVdXSwgWyd6d2onLCBbODIwNV1dLCBbJ3p3bmonLCBbODIwNF1dXTtcblxudmFyIGFscGhhSW5kZXggPSB7fTtcbnZhciBjaGFySW5kZXggPSB7fTtcblxuY3JlYXRlSW5kZXhlcyhhbHBoYUluZGV4LCBjaGFySW5kZXgpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIdG1sNUVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNUVudGl0aWVzLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJigjP1tcXHdcXGRdKyk7Py9nLCBmdW5jdGlvbihzLCBlbnRpdHkpIHtcbiAgICAgICAgdmFyIGNocjtcbiAgICAgICAgaWYgKGVudGl0eS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGVudGl0eS5jaGFyQXQoMSkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAxNikgOlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMSkpO1xuXG4gICAgICAgICAgICBpZiAoIShpc05hTihjb2RlKSB8fCBjb2RlIDwgLTMyNzY4IHx8IGNvZGUgPiA2NTUzNSkpIHtcbiAgICAgICAgICAgICAgICBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hyID0gYWxwaGFJbmRleFtlbnRpdHldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaHIgfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIEh0bWw1RW50aXRpZXMuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZGVjb2RlKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNUVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhckluZm8gPSBjaGFySW5kZXhbc3RyLmNoYXJDb2RlQXQoaSldO1xuICAgICAgICBpZiAoY2hhckluZm8pIHtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9IGNoYXJJbmZvW3N0ci5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFscGhhID0gY2hhckluZm9bJyddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIEh0bWw1RW50aXRpZXMuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZW5jb2RlKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNUVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgY2hhckluZm8gPSBjaGFySW5kZXhbY107XG4gICAgICAgIGlmIChjaGFySW5mbykge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gY2hhckluZm9bc3RyLmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBjaGFySW5mb1snJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA8IDMyIHx8IGMgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIEh0bWw1RW50aXRpZXMuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNUVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKytcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIEh0bWw1RW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5lbmNvZGVOb25BU0NJSShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGFscGhhSW5kZXggUGFzc2VkIGJ5IHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFySW5kZXggUGFzc2VkIGJ5IHJlZmVyZW5jZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5kZXhlcyhhbHBoYUluZGV4LCBjaGFySW5kZXgpIHtcbiAgICB2YXIgaSA9IEVOVElUSUVTLmxlbmd0aDtcbiAgICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBlID0gRU5USVRJRVNbaV07XG4gICAgICAgIHZhciBhbHBoYSA9IGVbMF07XG4gICAgICAgIHZhciBjaGFycyA9IGVbMV07XG4gICAgICAgIHZhciBjaHIgPSBjaGFyc1swXTtcbiAgICAgICAgdmFyIGFkZENoYXIgPSAoY2hyIDwgMzIgfHwgY2hyID4gMTI2KSB8fCBjaHIgPT09IDYyIHx8IGNociA9PT0gNjAgfHwgY2hyID09PSAzOCB8fCBjaHIgPT09IDM0IHx8IGNociA9PT0gMzk7XG4gICAgICAgIHZhciBjaGFySW5mbztcbiAgICAgICAgaWYgKGFkZENoYXIpIHtcbiAgICAgICAgICAgIGNoYXJJbmZvID0gY2hhckluZGV4W2Nocl0gPSBjaGFySW5kZXhbY2hyXSB8fCB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhcnNbMV0pIHtcbiAgICAgICAgICAgIHZhciBjaHIyID0gY2hhcnNbMV07XG4gICAgICAgICAgICBhbHBoYUluZGV4W2FscGhhXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGFkZENoYXIgJiYgKGNoYXJJbmZvW2NocjJdID0gYWxwaGEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFscGhhSW5kZXhbYWxwaGFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChhZGRDaGFyICYmIChjaGFySW5mb1snJ10gPSBhbHBoYSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEh0bWw1RW50aXRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDUtZW50aXRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsImltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgbXlfdGhlbWUgZnJvbSAnLi4vLi4vZGF0YS90aGVtZSdcblxuY29uc3QgdGhlbWUgPSBteV90aGVtZVxuXG5jb25zdCBfdGFnID0gY3NzKHtcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LFxuICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIDAuMnMgZWFzZS1pbi1vdXQnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBwYWRkaW5nOiAnMXB4IDNweCAxcHggM3B4JyxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudHJhbnNfcHJpbWFyeSxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgJzpob3Zlcic6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjA1LCAxLjQpJyxcbiAgICB0cmFuc2l0aW9uRGVsYXk6ICcwcycsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC4ycycsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfVxufSlcblxuY29uc3QgX2J1dHRvbiA9IGNzcyh7XG4gIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxufSlcblxuZXhwb3J0IHsgdGhlbWUsIF90YWcsIF9idXR0b24gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIC9bXFx1MDAxYlxcdTAwOWJdW1soKSM7P10qKD86WzAtOV17MSw0fSg/OjtbMC05XXswLDR9KSopP1swLTlBLVBSWmNmLW5xcnk9PjxdL2c7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Fuc2ktcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF9oeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcblxuLyoqXG4gKiBDYW1lbGNhc2VzIGEgaHlwaGVuYXRlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKF8sIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2NhbWVsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcblxudmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG5cbi8qKlxuICogQ2FtZWxjYXNlcyBhIGh5cGhlbmF0ZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCctbW96LXRyYW5zaXRpb24nKVxuICogICA8IFwiTW96VHJhbnNpdGlvblwiXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJy1tcy10cmFuc2l0aW9uJylcbiAqICAgPCBcIm1zVHJhbnNpdGlvblwiXG4gKlxuICogQXMgQW5kaSBTbWl0aCBzdWdnZXN0c1xuICogKGh0dHA6Ly93d3cuYW5kaXNtaXRoLmNvbS9ibG9nLzIwMTIvMDIvbW9kZXJuaXpyLXByZWZpeGVkLyksIGFuIGAtbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGxvd2VyY2FzZSBgbXNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBjYW1lbGl6ZShzdHJpbmcucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemVTdHlsZU5hbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbnZhciBfdXBwZXJjYXNlUGF0dGVybiA9IC8oW0EtWl0pL2c7XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgc3RyaW5nLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKlxuICogRm9yIENTUyBzdHlsZSBuYW1lcywgdXNlIGBoeXBoZW5hdGVTdHlsZU5hbWVgIGluc3RlYWQgd2hpY2ggd29ya3MgcHJvcGVybHlcbiAqIHdpdGggYWxsIHZlbmRvciBwcmVmaXhlcywgaW5jbHVkaW5nIGBtc2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfdXBwZXJjYXNlUGF0dGVybiwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9oeXBoZW5hdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGh5cGhlbmF0ZSA9IHJlcXVpcmUoJy4vaHlwaGVuYXRlJyk7XG5cbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxuICogICA8IFwiLW1vei10cmFuc2l0aW9uXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ21zVHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXG4gKlxuICogQXMgTW9kZXJuaXpyIHN1Z2dlc3RzIChodHRwOi8vbW9kZXJuaXpyLmNvbS9kb2NzLyNwcmVmaXhlZCksIGFuIGBtc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqIEB0eXBlY2hlY2tzIHN0YXRpYy1vbmx5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1lbW9pemVzIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIHN0cmluZyBhcmd1bWVudC5cbiAqL1xuXG5mdW5jdGlvbiBtZW1vaXplU3RyaW5nT25seShjYWxsYmFjaykge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoIWNhY2hlLmhhc093blByb3BlcnR5KHN0cmluZykpIHtcbiAgICAgIGNhY2hlW3N0cmluZ10gPSBjYWxsYmFjay5jYWxsKHRoaXMsIHN0cmluZyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZVtzdHJpbmddO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVTdHJpbmdPbmx5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9tZW1vaXplU3RyaW5nT25seS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIENTU1Byb3BlcnR5XG4gKi9cblxuLyoqXG4gKiBDU1MgcHJvcGVydGllcyB3aGljaCBhY2NlcHQgbnVtYmVycyBidXQgYXJlIG5vdCBpbiB1bml0cyBvZiBcInB4XCIuXG4gKi9cblxudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3JkZXJJbWFnZU91dHNldDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VTbGljZTogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgbGluZUNsYW1wOiB0cnVlLFxuICBsaW5lSGVpZ2h0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JwaGFuczogdHJ1ZSxcbiAgdGFiU2l6ZTogdHJ1ZSxcbiAgd2lkb3dzOiB0cnVlLFxuICB6SW5kZXg6IHRydWUsXG4gIHpvb206IHRydWUsXG5cbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgZmxvb2RPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaGFycmF5OiB0cnVlLFxuICBzdHJva2VEYXNob2Zmc2V0OiB0cnVlLFxuICBzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuICBzdHJva2VPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VXaWR0aDogdHJ1ZVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IHZlbmRvci1zcGVjaWZpYyBwcmVmaXgsIGVnOiBXZWJraXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgc3R5bGUgbmFtZSwgZWc6IHRyYW5zaXRpb25EdXJhdGlvblxuICogQHJldHVybiB7c3RyaW5nfSBzdHlsZSBuYW1lIHByZWZpeGVkIHdpdGggYHByZWZpeGAsIHByb3Blcmx5IGNhbWVsQ2FzZWQsIGVnOlxuICogV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uXG4gKi9cbmZ1bmN0aW9uIHByZWZpeEtleShwcmVmaXgsIGtleSkge1xuICByZXR1cm4gcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHN0eWxlIG5hbWVzIHRoYXQgbWF5IGNvbWUgcGFzc2VkIGluIHByZWZpeGVkIGJ5IGFkZGluZyBwZXJtdXRhdGlvbnNcbiAqIG9mIHZlbmRvciBwcmVmaXhlcy5cbiAqL1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnbXMnLCAnTW96JywgJ08nXTtcblxuLy8gVXNpbmcgT2JqZWN0LmtleXMgaGVyZSwgb3IgZWxzZSB0aGUgdmFuaWxsYSBmb3ItaW4gbG9vcCBtYWtlcyBJRTggZ28gaW50byBhblxuLy8gaW5maW5pdGUgbG9vcCwgYmVjYXVzZSBpdCBpdGVyYXRlcyBvdmVyIHRoZSBuZXdseSBhZGRlZCBwcm9wcyB0b28uXG5PYmplY3Qua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIGlzVW5pdGxlc3NOdW1iZXJbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gaXNVbml0bGVzc051bWJlcltwcm9wXTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBNb3N0IHN0eWxlIHByb3BlcnRpZXMgY2FuIGJlIHVuc2V0IGJ5IGRvaW5nIC5zdHlsZVtwcm9wXSA9ICcnIGJ1dCBJRThcbiAqIGRvZXNuJ3QgbGlrZSBkb2luZyB0aGF0IHdpdGggc2hvcnRoYW5kIHByb3BlcnRpZXMgc28gZm9yIHRoZSBwcm9wZXJ0aWVzIHRoYXRcbiAqIElFOCBicmVha3Mgb24sIHdoaWNoIGFyZSBsaXN0ZWQgaGVyZSwgd2UgaW5zdGVhZCB1bnNldCBlYWNoIG9mIHRoZVxuICogaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLiBTZWUgaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIzODUuXG4gKiBUaGUgNC12YWx1ZSAnY2xvY2snIHByb3BlcnRpZXMgbGlrZSBtYXJnaW4sIHBhZGRpbmcsIGJvcmRlci13aWR0aCBzZWVtIHRvXG4gKiBiZWhhdmUgd2l0aG91dCBhbnkgcHJvYmxlbXMuIEN1cmlvdXNseSwgbGlzdC1zdHlsZSB3b3JrcyB0b28gd2l0aG91dCBhbnlcbiAqIHNwZWNpYWwgcHJvZGRpbmcuXG4gKi9cbnZhciBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnMgPSB7XG4gIGJhY2tncm91bmQ6IHtcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRydWUsXG4gICAgYmFja2dyb3VuZEltYWdlOiB0cnVlLFxuICAgIGJhY2tncm91bmRQb3NpdGlvblg6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWTogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiB0cnVlXG4gIH0sXG4gIGJhY2tncm91bmRQb3NpdGlvbjoge1xuICAgIGJhY2tncm91bmRQb3NpdGlvblg6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWTogdHJ1ZVxuICB9LFxuICBib3JkZXI6IHtcbiAgICBib3JkZXJXaWR0aDogdHJ1ZSxcbiAgICBib3JkZXJTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJCb3R0b206IHtcbiAgICBib3JkZXJCb3R0b21XaWR0aDogdHJ1ZSxcbiAgICBib3JkZXJCb3R0b21TdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJMZWZ0OiB7XG4gICAgYm9yZGVyTGVmdFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlckxlZnRTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IHRydWVcbiAgfSxcbiAgYm9yZGVyUmlnaHQ6IHtcbiAgICBib3JkZXJSaWdodFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlclJpZ2h0U3R5bGU6IHRydWUsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJUb3A6IHtcbiAgICBib3JkZXJUb3BXaWR0aDogdHJ1ZSxcbiAgICBib3JkZXJUb3BTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJUb3BDb2xvcjogdHJ1ZVxuICB9LFxuICBmb250OiB7XG4gICAgZm9udFN0eWxlOiB0cnVlLFxuICAgIGZvbnRWYXJpYW50OiB0cnVlLFxuICAgIGZvbnRXZWlnaHQ6IHRydWUsXG4gICAgZm9udFNpemU6IHRydWUsXG4gICAgbGluZUhlaWdodDogdHJ1ZSxcbiAgICBmb250RmFtaWx5OiB0cnVlXG4gIH0sXG4gIG91dGxpbmU6IHtcbiAgICBvdXRsaW5lV2lkdGg6IHRydWUsXG4gICAgb3V0bGluZVN0eWxlOiB0cnVlLFxuICAgIG91dGxpbmVDb2xvcjogdHJ1ZVxuICB9XG59O1xuXG52YXIgQ1NTUHJvcGVydHkgPSB7XG4gIGlzVW5pdGxlc3NOdW1iZXI6IGlzVW5pdGxlc3NOdW1iZXIsXG4gIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9uczogc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDU1NQcm9wZXJ0eTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvQ1NTUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DU1NQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHknKTtcblxudmFyIF9DU1NQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DU1NQcm9wZXJ0eSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZGFuZ2Vyb3VzU3R5bGVWYWx1ZVxuICovXG5cbnZhciBpc1VuaXRsZXNzTnVtYmVyID0gX0NTU1Byb3BlcnR5Mi5kZWZhdWx0LmlzVW5pdGxlc3NOdW1iZXI7XG52YXIgc3R5bGVXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9IE5vcm1hbGl6ZWQgc3R5bGUgdmFsdWUgd2l0aCBkaW1lbnNpb25zIGFwcGxpZWQuXG4gKi9cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAvLyBOb3RlIHRoYXQgd2UndmUgcmVtb3ZlZCBlc2NhcGVUZXh0Rm9yQnJvd3NlcigpIGNhbGxzIGhlcmUgc2luY2UgdGhlXG4gIC8vIHdob2xlIHN0cmluZyB3aWxsIGJlIGVzY2FwZWQgd2hlbiB0aGUgYXR0cmlidXRlIGlzIGluamVjdGVkIGludG9cbiAgLy8gdGhlIG1hcmt1cC4gSWYgeW91IHByb3ZpZGUgdW5zYWZlIHVzZXIgZGF0YSBoZXJlIHRoZXkgY2FuIGluamVjdFxuICAvLyBhcmJpdHJhcnkgQ1NTIHdoaWNoIG1heSBiZSBwcm9ibGVtYXRpYyAoSSBjb3VsZG4ndCByZXBybyB0aGlzKTpcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9YU1NfRmlsdGVyX0V2YXNpb25fQ2hlYXRfU2hlZXRcbiAgLy8gaHR0cDovL3d3dy50aGVzcGFubmVyLmNvLnVrLzIwMDcvMTEvMjYvdWx0aW1hdGUteHNzLWNzcy1pbmplY3Rpb24vXG4gIC8vIFRoaXMgaXMgbm90IGFuIFhTUyBob2xlIGJ1dCBpbnN0ZWFkIGEgcG90ZW50aWFsIENTUyBpbmplY3Rpb24gaXNzdWVcbiAgLy8gd2hpY2ggaGFzIGxlYWQgdG8gYSBncmVhdGVyIGRpc2N1c3Npb24gYWJvdXQgaG93IHdlJ3JlIGdvaW5nIHRvXG4gIC8vIHRydXN0IFVSTHMgbW92aW5nIGZvcndhcmQuIFNlZSAjMjExNTkwMVxuXG4gIHZhciBpc0VtcHR5ID0gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJyc7XG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGlzTm9uTnVtZXJpYyA9IGlzTmFOKHZhbHVlKTtcbiAgaWYgKGlzTm9uTnVtZXJpYyB8fCB2YWx1ZSA9PT0gMCB8fCBpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pIHtcbiAgICByZXR1cm4gJycgKyB2YWx1ZTsgLy8gY2FzdCB0byBzdHJpbmdcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIEFsbG93ICcwJyB0byBwYXNzIHRocm91Z2ggd2l0aG91dCB3YXJuaW5nLiAwIGlzIGFscmVhZHkgc3BlY2lhbCBhbmRcbiAgICAgIC8vIGRvZXNuJ3QgcmVxdWlyZSB1bml0cywgc28gd2UgZG9uJ3QgbmVlZCB0byB3YXJuIGFib3V0IGl0LlxuICAgICAgaWYgKGNvbXBvbmVudCAmJiB2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgIHZhciBvd25lciA9IGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuICAgICAgICB2YXIgb3duZXJOYW1lID0gb3duZXIgPyBvd25lci5nZXROYW1lKCkgOiBudWxsO1xuICAgICAgICBpZiAob3duZXJOYW1lICYmICFzdHlsZVdhcm5pbmdzW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBzdHlsZVdhcm5pbmdzW293bmVyTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2FybmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvd25lck5hbWUpIHtcbiAgICAgICAgICB2YXIgd2FybmluZ3MgPSBzdHlsZVdhcm5pbmdzW293bmVyTmFtZV07XG4gICAgICAgICAgd2FybmVkID0gd2FybmluZ3NbbmFtZV07XG4gICAgICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgICAgIHdhcm5pbmdzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2EgYCVzYCB0YWcgKG93bmVyOiBgJXNgKSB3YXMgcGFzc2VkIGEgbnVtZXJpYyBzdHJpbmcgdmFsdWUgJyArICdmb3IgQ1NTIHByb3BlcnR5IGAlc2AgKHZhbHVlOiBgJXNgKSB3aGljaCB3aWxsIGJlIHRyZWF0ZWQgJyArICdhcyBhIHVuaXRsZXNzIG51bWJlciBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIFJlYWN0LicsIGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQudHlwZSwgb3duZXJOYW1lIHx8ICd1bmtub3duJywgbmFtZSwgdmFsdWUpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICB9XG4gIHJldHVybiB2YWx1ZSArICdweCc7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRhbmdlcm91c1N0eWxlVmFsdWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL2Rhbmdlcm91c1N0eWxlVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjbGVhbjtcbi8vIFJldHVybnMgdHJ1ZSBmb3IgbnVsbCwgZmFsc2UsIHVuZGVmaW5lZCBhbmQge31cbmZ1bmN0aW9uIGlzRmFsc3kodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IGZhbHNlIHx8ICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGNsZWFuT2JqZWN0KG9iamVjdCkge1xuICBpZiAoaXNGYWxzeShvYmplY3QpKSByZXR1cm4gbnVsbDtcbiAgaWYgKCh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmplY3QpKSAhPT0gJ29iamVjdCcpIHJldHVybiBvYmplY3Q7XG5cbiAgdmFyIGFjYyA9IHt9LFxuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICBoYXNGYWxzeSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5c1tpXV07XG4gICAgdmFyIGZpbHRlcmVkVmFsdWUgPSBjbGVhbih2YWx1ZSk7XG4gICAgaWYgKGZpbHRlcmVkVmFsdWUgPT09IG51bGwgfHwgZmlsdGVyZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGhhc0ZhbHN5ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGFjY1trZXlzW2ldXSA9IGZpbHRlcmVkVmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhhY2MpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBoYXNGYWxzeSA/IGFjYyA6IG9iamVjdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5BcnJheShydWxlcykge1xuICB2YXIgaGFzRmFsc3kgPSBmYWxzZTtcbiAgdmFyIGZpbHRlcmVkID0gW107XG4gIHJ1bGVzLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICB2YXIgZmlsdGVyZWRSdWxlID0gY2xlYW4ocnVsZSk7XG4gICAgaWYgKGZpbHRlcmVkUnVsZSA9PT0gbnVsbCB8fCBmaWx0ZXJlZFJ1bGUgIT09IHJ1bGUpIHtcbiAgICAgIGhhc0ZhbHN5ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgZmlsdGVyZWQucHVzaChmaWx0ZXJlZFJ1bGUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZC5sZW5ndGggPT0gMCA/IG51bGwgOiBoYXNGYWxzeSA/IGZpbHRlcmVkIDogcnVsZXM7XG59XG5cbi8vIFRha2VzIHN0eWxlIGFycmF5IG9yIG9iamVjdCBwcm92aWRlZCBieSB1c2VyIGFuZCBjbGVhcnMgYWxsIHRoZSBmYWxzeSBkYXRhIFxuLy8gSWYgdGhlcmUgaXMgbm8gc3R5bGVzIGxlZnQgYWZ0ZXIgZmlsdHJhdGlvbiByZXR1cm5zIG51bGxcbmZ1bmN0aW9uIGNsZWFuKGlucHV0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSA/IGNsZWFuQXJyYXkoaW5wdXQpIDogY2xlYW5PYmplY3QoaW5wdXQpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2NsZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRvSGFzaDtcbi8vIG11cm11cmhhc2gyIHZpYSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yYXljbW9yZ2FuLzU4ODQyM1xuXG5mdW5jdGlvbiBkb0hhc2goc3RyLCBzZWVkKSB7XG4gIHZhciBtID0gMHg1YmQxZTk5NTtcbiAgdmFyIHIgPSAyNDtcbiAgdmFyIGggPSBzZWVkIF4gc3RyLmxlbmd0aDtcbiAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xuXG4gIHdoaWxlIChsZW5ndGggPj0gNCkge1xuICAgIHZhciBrID0gVUludDMyKHN0ciwgY3VycmVudEluZGV4KTtcblxuICAgIGsgPSBVbXVsMzIoaywgbSk7XG4gICAgayBePSBrID4+PiByO1xuICAgIGsgPSBVbXVsMzIoaywgbSk7XG5cbiAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgIGggXj0gaztcblxuICAgIGN1cnJlbnRJbmRleCArPSA0O1xuICAgIGxlbmd0aCAtPSA0O1xuICB9XG5cbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IFVJbnQxNihzdHIsIGN1cnJlbnRJbmRleCk7XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGN1cnJlbnRJbmRleCArIDIpIDw8IDE2O1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSBVSW50MTYoc3RyLCBjdXJyZW50SW5kZXgpO1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChjdXJyZW50SW5kZXgpO1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9IFVtdWwzMihoLCBtKTtcbiAgaCBePSBoID4+PiAxNTtcblxuICByZXR1cm4gaCA+Pj4gMDtcbn1cblxuZnVuY3Rpb24gVUludDMyKHN0ciwgcG9zKSB7XG4gIHJldHVybiBzdHIuY2hhckNvZGVBdChwb3MrKykgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDgpICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCAxNikgKyAoc3RyLmNoYXJDb2RlQXQocG9zKSA8PCAyNCk7XG59XG5cbmZ1bmN0aW9uIFVJbnQxNihzdHIsIHBvcykge1xuICByZXR1cm4gc3RyLmNoYXJDb2RlQXQocG9zKyspICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCA4KTtcbn1cblxuZnVuY3Rpb24gVW11bDMyKG4sIG0pIHtcbiAgbiA9IG4gfCAwO1xuICBtID0gbSB8IDA7XG4gIHZhciBubG8gPSBuICYgMHhmZmZmO1xuICB2YXIgbmhpID0gbiA+Pj4gMTY7XG4gIHZhciByZXMgPSBubG8gKiBtICsgKChuaGkgKiBtICYgMHhmZmZmKSA8PCAxNikgfCAwO1xuICByZXR1cm4gcmVzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAodHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGV4cG9ydHMpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6IGdsb2JhbC5JbmxpbmVTdHlsZVByZWZpeEFsbCA9IGZhY3RvcnkoKTtcbn0pKHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGJhYmVsSGVscGVycyA9IHt9O1xuXG4gIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLmNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG4gIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnM7XG5cbiAgZnVuY3Rpb24gX19jb21tb25qcyhmbiwgbW9kdWxlKSB7XG4gICAgcmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgdmFyIHByZWZpeFByb3BzID0geyBcIldlYmtpdFwiOiB7IFwidHJhbnNmb3JtXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpbllcIjogdHJ1ZSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZVwiOiB0cnVlLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtU3R5bGVcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IHRydWUsIFwiYW5pbWF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRGVsYXlcIjogdHJ1ZSwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiB0cnVlLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdHJ1ZSwgXCJhbmltYXRpb25OYW1lXCI6IHRydWUsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IHRydWUsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSwgXCJhcHBlYXJhbmNlXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcImZvbnRLZXJuaW5nXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiB0cnVlLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IHRydWUsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IHRydWUsIFwiY2xpcFBhdGhcIjogdHJ1ZSwgXCJtYXNrSW1hZ2VcIjogdHJ1ZSwgXCJtYXNrTW9kZVwiOiB0cnVlLCBcIm1hc2tSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrUG9zaXRpb25cIjogdHJ1ZSwgXCJtYXNrQ2xpcFwiOiB0cnVlLCBcIm1hc2tPcmlnaW5cIjogdHJ1ZSwgXCJtYXNrU2l6ZVwiOiB0cnVlLCBcIm1hc2tDb21wb3NpdGVcIjogdHJ1ZSwgXCJtYXNrXCI6IHRydWUsIFwibWFza0JvcmRlclNvdXJjZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJNb2RlXCI6IHRydWUsIFwibWFza0JvcmRlclNsaWNlXCI6IHRydWUsIFwibWFza0JvcmRlcldpZHRoXCI6IHRydWUsIFwibWFza0JvcmRlck91dHNldFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyXCI6IHRydWUsIFwibWFza1R5cGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB0cnVlLCBcImZpbHRlclwiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUsIFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiB0cnVlLCBcImZsZXhEaXJlY3Rpb25cIjogdHJ1ZSwgXCJmbGV4R3Jvd1wiOiB0cnVlLCBcImZsZXhGbG93XCI6IHRydWUsIFwiZmxleFNocmlua1wiOiB0cnVlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IHRydWUsIFwiYWxpZ25JdGVtc1wiOiB0cnVlLCBcImFsaWduU2VsZlwiOiB0cnVlLCBcImp1c3RpZnlDb250ZW50XCI6IHRydWUsIFwib3JkZXJcIjogdHJ1ZSwgXCJiYWNrZHJvcEZpbHRlclwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOiB0cnVlLCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogdHJ1ZSwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmbG93SW50b1wiOiB0cnVlLCBcImZsb3dGcm9tXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlLCBcInRyYW5zaXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSB9LCBcIk1velwiOiB7IFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJib3hTaXppbmdcIjogdHJ1ZSwgXCJ0ZXh0QWxpZ25MYXN0XCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJ0YWJTaXplXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUgfSwgXCJtc1wiOiB7IFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiBmYWxzZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogZmFsc2UsIFwiZmxleEZsb3dcIjogdHJ1ZSwgXCJmbGV4U2hyaW5rXCI6IGZhbHNlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IGZhbHNlLCBcImFsaWduSXRlbXNcIjogZmFsc2UsIFwiYWxpZ25TZWxmXCI6IGZhbHNlLCBcImp1c3RpZnlDb250ZW50XCI6IGZhbHNlLCBcIm9yZGVyXCI6IGZhbHNlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJ3cmFwRmxvd1wiOiB0cnVlLCBcIndyYXBUaHJvdWdoXCI6IHRydWUsIFwid3JhcE1hcmdpblwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwidG91Y2hBY3Rpb25cIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZmxvd0ludG9cIjogdHJ1ZSwgXCJmbG93RnJvbVwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVDb2x1bW5zXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlXCI6IHRydWUsIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IHRydWUsIFwiZ3JpZEF1dG9Sb3dzXCI6IHRydWUsIFwiZ3JpZEF1dG9GbG93XCI6IHRydWUsIFwiZ3JpZFwiOiB0cnVlLCBcImdyaWRSb3dTdGFydFwiOiB0cnVlLCBcImdyaWRDb2x1bW5TdGFydFwiOiB0cnVlLCBcImdyaWRSb3dFbmRcIjogdHJ1ZSwgXCJncmlkUm93XCI6IHRydWUsIFwiZ3JpZENvbHVtblwiOiB0cnVlLCBcImdyaWRDb2x1bW5FbmRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uR2FwXCI6IHRydWUsIFwiZ3JpZFJvd0dhcFwiOiB0cnVlLCBcImdyaWRBcmVhXCI6IHRydWUsIFwiZ3JpZEdhcFwiOiB0cnVlLCBcInRleHRTaXplQWRqdXN0XCI6IHRydWUgfSB9O1xuXG4gIC8vIGhlbHBlciB0byBjYXBpdGFsaXplIHN0cmluZ3NcbiAgdmFyIGNhcGl0YWxpemVTdHJpbmcgPSBmdW5jdGlvbiBjYXBpdGFsaXplU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH07XG5cbiAgdmFyIGlzUHJlZml4ZWRQcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzUHJlZml4ZWRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwcm9wZXJ0eS5tYXRjaCgvXihXZWJraXR8TW96fE98bXMpLykgIT09IG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gc29ydFByZWZpeGVkU3R5bGUoc3R5bGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgICBpZiAoaXNQcmVmaXhlZFByb3BlcnR5KGxlZnQpICYmICFpc1ByZWZpeGVkUHJvcGVydHkocmlnaHQpKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzUHJlZml4ZWRQcm9wZXJ0eShsZWZ0KSAmJiBpc1ByZWZpeGVkUHJvcGVydHkocmlnaHQpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChzb3J0ZWRTdHlsZSwgcHJvcCkge1xuICAgICAgc29ydGVkU3R5bGVbcHJvcF0gPSBzdHlsZVtwcm9wXTtcbiAgICAgIHJldHVybiBzb3J0ZWRTdHlsZTtcbiAgICB9LCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knKSB7XG4gICAgICByZXR1cm4geyBwb3NpdGlvbjogWyctd2Via2l0LXN0aWNreScsICdzdGlja3knXSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybnMgYSBzdHlsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBjb25jYXRlZCBwcmVmaXhlZCB2YWx1ZSBzdHJpbmdcbiAgdmFyIGpvaW5QcmVmaXhlZFZhbHVlID0gZnVuY3Rpb24gam9pblByZWZpeGVkVmFsdWUocHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIHJlcGxhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmdW5jdGlvbiAocHJlZml4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ10ubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiByZXBsYWNlcihwcmVmaXgsIHZhbHVlKTtcbiAgICB9KSk7XG4gIH07XG5cbiAgdmFyIGlzUHJlZml4ZWRWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS5qb2luKCcsJyk7XG5cbiAgICByZXR1cm4gdmFsdWUubWF0Y2goLy13ZWJraXQtfC1tb3otfC1tcy0vKSAhPT0gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBjYWxjKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc1ByZWZpeGVkVmFsdWUodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2NhbGNcXCgvZywgcHJlZml4ICsgJ2NhbGMoJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdmFsdWVzID0ge1xuICAgICd6b29tLWluJzogdHJ1ZSxcbiAgICAnem9vbS1vdXQnOiB0cnVlLFxuICAgIGdyYWI6IHRydWUsXG4gICAgZ3JhYmJpbmc6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm4gam9pblByZWZpeGVkVmFsdWUocHJvcGVydHksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdmFsdWVzJDEgPSB7IGZsZXg6IHRydWUsICdpbmxpbmUtZmxleCc6IHRydWUgfTtcblxuICBmdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlcyQxW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogWyctd2Via2l0LWJveCcsICctbW96LWJveCcsICctbXMtJyArIHZhbHVlICsgJ2JveCcsICctd2Via2l0LScgKyB2YWx1ZSwgdmFsdWVdXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgIG1heEhlaWdodDogdHJ1ZSxcbiAgICBtYXhXaWR0aDogdHJ1ZSxcbiAgICB3aWR0aDogdHJ1ZSxcbiAgICBoZWlnaHQ6IHRydWUsXG4gICAgY29sdW1uV2lkdGg6IHRydWUsXG4gICAgbWluV2lkdGg6IHRydWUsXG4gICAgbWluSGVpZ2h0OiB0cnVlXG4gIH07XG4gIHZhciB2YWx1ZXMkMiA9IHtcbiAgICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAgICdtYXgtY29udGVudCc6IHRydWUsXG4gICAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAgICdjb250YWluLWZsb2F0cyc6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldICYmIHZhbHVlcyQyW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbHVlcyQzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuICBmdW5jdGlvbiBncmFkaWVudChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5tYXRjaCh2YWx1ZXMkMykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBqb2luUHJlZml4ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbmRleCA9IF9fY29tbW9uanMoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG4gICAgdmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbiAgICB2YXIgY2FjaGUgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcgaW4gY2FjaGUgPyBjYWNoZVtzdHJpbmddIDogY2FjaGVbc3RyaW5nXSA9IHN0cmluZy5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJCYnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuICB9KTtcblxuICB2YXIgaHlwaGVuYXRlU3R5bGVOYW1lID0gaW5kZXggJiYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaW5kZXgpKSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGluZGV4ID8gaW5kZXhbJ2RlZmF1bHQnXSA6IGluZGV4O1xuXG4gIHZhciBwcm9wZXJ0aWVzJDEgPSB7XG4gICAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBXZWJraXRUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzJDFbcHJvcGVydHldKSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlKTtcbiAgICAgIHZhciB3ZWJraXRPdXRwdXQgPSBvdXRwdXRWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvLW1vei18LW1zLS8pID09PSBudWxsO1xuICAgICAgfSkuam9pbignLCcpO1xuXG4gICAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVmaXhlZFxuICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ1dlYmtpdCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIHdlYmtpdE91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVmMiA9IHt9LCBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoX3JlZjIsICdXZWJraXQnICsgY2FwaXRhbGl6ZVN0cmluZyhwcm9wZXJ0eSksIHdlYmtpdE91dHB1dCksIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eShfcmVmMiwgcHJvcGVydHksIG91dHB1dFZhbHVlKSwgX3JlZjI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlZml4VmFsdWUodmFsdWUpIHtcbiAgICBpZiAoaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICAgIHZhciBtdWx0aXBsZVZhbHVlcyA9IHZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpO1xuXG4gICAgLy8gaXRlcmF0ZSBlYWNoIHNpbmdsZSB2YWx1ZSBhbmQgY2hlY2sgZm9yIHRyYW5zaXRpb25lZCBwcm9wZXJ0aWVzXG4gICAgLy8gdGhhdCBuZWVkIHRvIGJlIHByZWZpeGVkIGFzIHdlbGxcbiAgICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICBtdWx0aXBsZVZhbHVlc1tpbmRleF0gPSBPYmplY3Qua2V5cyhwcmVmaXhQcm9wcykucmVkdWNlKGZ1bmN0aW9uIChvdXQsIHByZWZpeCkge1xuICAgICAgICB2YXIgZGFzaENhc2VQcmVmaXggPSAnLScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJztcblxuICAgICAgICBPYmplY3Qua2V5cyhwcmVmaXhQcm9wc1twcmVmaXhdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgdmFyIGRhc2hDYXNlUHJvcGVydHkgPSBoeXBoZW5hdGVTdHlsZU5hbWUocHJvcCk7XG5cbiAgICAgICAgICBpZiAodmFsLmluZGV4T2YoZGFzaENhc2VQcm9wZXJ0eSkgPiAtMSAmJiBkYXNoQ2FzZVByb3BlcnR5ICE9PSAnb3JkZXInKSB7XG4gICAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgICBvdXQgPSB2YWwucmVwbGFjZShkYXNoQ2FzZVByb3BlcnR5LCBkYXNoQ2FzZVByZWZpeCArIGRhc2hDYXNlUHJvcGVydHkpICsgJywnICsgb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgICB9LCB2YWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG11bHRpcGxlVmFsdWVzLmpvaW4oJywnKTtcbiAgfVxuXG4gIHZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAgICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAgICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgICAnZmxleC1lbmQnOiAnZW5kJ1xuICB9O1xuICB2YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgICBhbGlnbkNvbnRlbnQ6ICdtc0ZsZXhMaW5lUGFjaycsXG4gICAgYWxpZ25TZWxmOiAnbXNGbGV4SXRlbUFsaWduJyxcbiAgICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbXNGbGV4UGFjaycsXG4gICAgb3JkZXI6ICdtc0ZsZXhPcmRlcicsXG4gICAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gICAgZmxleFNocmluazogJ21zRmxleE5lZ2F0aXZlJyxcbiAgICBmbGV4QmFzaXM6ICdtc1ByZWZlcnJlZFNpemUnXG4gIH07XG5cbiAgZnVuY3Rpb24gZmxleGJveElFKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFsdGVybmF0aXZlVmFsdWVzJDEgPSB7XG4gICAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyxcbiAgICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICAgJ2ZsZXgtZW5kJzogJ2VuZCcsXG4gICAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gICAgd3JhcDogJ211bHRpcGxlJ1xuICB9O1xuXG4gIHZhciBhbHRlcm5hdGl2ZVByb3BzJDEgPSB7XG4gICAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICAgIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG4gIH07XG5cbiAgZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBXZWJraXRCb3hPcmllbnQ6IHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICBXZWJraXRCb3hEaXJlY3Rpb246IHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xID8gJ3JldmVyc2UnIDogJ25vcm1hbCdcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzJDFbcHJvcGVydHldKSB7XG4gICAgICByZXR1cm4gYmFiZWxIZWxwZXJzLmRlZmluZVByb3BlcnR5KHt9LCBhbHRlcm5hdGl2ZVByb3BzJDFbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlcyQxW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsdWdpbnMgPSBbcG9zaXRpb24sIGNhbGMsIGN1cnNvciwgc2l6aW5nLCBncmFkaWVudCwgdHJhbnNpdGlvbiwgZmxleGJveElFLCBmbGV4Ym94T2xkLCBmbGV4XTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICovXG4gIGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAvLyByZWN1cnNlIHRocm91Z2ggbmVzdGVkIHN0eWxlIG9iamVjdHNcbiAgICAgICAgc3R5bGVzW3Byb3BlcnR5XSA9IHByZWZpeEFsbCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhwcmVmaXhQcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBwcmVmaXhQcm9wc1twcmVmaXhdO1xuICAgICAgICAgIC8vIGFkZCBwcmVmaXhlcyBpZiBuZWVkZWRcbiAgICAgICAgICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgIHN0eWxlc1twcmVmaXggKyBjYXBpdGFsaXplU3RyaW5nKHByb3BlcnR5KV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgW10uY29uY2F0KHN0eWxlc1twcm9wZXJ0eV0pLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAvLyByZXNvbHZlIGV2ZXJ5IHNwZWNpYWwgcGx1Z2luc1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgIHJldHVybiBhc3NpZ25TdHlsZXMoc3R5bGVzLCBwbHVnaW4ocHJvcGVydHksIHZhbHVlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc29ydFByZWZpeGVkU3R5bGUoc3R5bGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblN0eWxlcyhiYXNlKSB7XG4gICAgdmFyIGV4dGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBPYmplY3Qua2V5cyhleHRlbmQpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICB2YXIgYmFzZVZhbHVlID0gYmFzZVtwcm9wZXJ0eV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNlVmFsdWUpKSB7XG4gICAgICAgIFtdLmNvbmNhdChleHRlbmRbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWx1ZUluZGV4ID0gYmFzZVZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgIGlmICh2YWx1ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGJhc2VbcHJvcGVydHldLnNwbGljZSh2YWx1ZUluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmFzZVtwcm9wZXJ0eV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFzZVtwcm9wZXJ0eV0gPSBleHRlbmRbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByZWZpeEFsbDtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlBsdWdpblNldCA9IHVuZGVmaW5lZDtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmZhbGxiYWNrcyA9IGZhbGxiYWNrcztcbmV4cG9ydHMucHJlZml4ZXMgPSBwcmVmaXhlcztcblxudmFyIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL0NTU1Byb3BlcnR5T3BlcmF0aW9ucycpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgaXNEZXYgPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geCA9PT0gJ2RldmVsb3BtZW50JyB8fCAheDtcbn0ocHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuXG52YXIgUGx1Z2luU2V0ID0gZXhwb3J0cy5QbHVnaW5TZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBsdWdpblNldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGx1Z2luU2V0KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbml0aWFsID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBpbml0aWFsW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHRoaXMuZm5zID0gaW5pdGlhbCB8fCBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQbHVnaW5TZXQsIFt7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmbnMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBmbnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGlmIChfdGhpcy5mbnMuaW5kZXhPZihmbikgPj0gMCkge1xuICAgICAgICAgIGlmIChpc0Rldikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdhZGRpbmcgdGhlIHNhbWUgcGx1Z2luIGFnYWluLCBpZ25vcmluZycpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5mbnMgPSBbZm5dLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3RoaXMuZm5zKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShmbikge1xuICAgICAgdGhpcy5mbnMgPSB0aGlzLmZucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IGZuO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXMuZm5zID0gW107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndHJhbnNmb3JtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNmb3JtKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLmZucy5yZWR1Y2UoZnVuY3Rpb24gKG8sIGZuKSB7XG4gICAgICAgIHJldHVybiBmbihvKTtcbiAgICAgIH0sIG8pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQbHVnaW5TZXQ7XG59KCk7XG5cbmZ1bmN0aW9uIGZhbGxiYWNrcyhub2RlKSB7XG4gIHZhciBoYXNBcnJheSA9IE9iamVjdC5rZXlzKG5vZGUuc3R5bGUpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG5vZGUuc3R5bGVbeF0pO1xuICB9KS5pbmRleE9mKHRydWUpID49IDA7XG4gIGlmIChoYXNBcnJheSkge1xuICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZSxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG5vZGUsIFsnc3R5bGUnXSk7XG5cbiAgICAgIHZhciBmbGF0dGVuZWQgPSBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChvLCBrZXkpIHtcbiAgICAgICAgb1trZXldID0gQXJyYXkuaXNBcnJheShzdHlsZVtrZXldKSA/IHN0eWxlW2tleV0uam9pbignOyAnICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMucHJvY2Vzc1N0eWxlTmFtZSkoa2V5KSArICc6ICcpIDogc3R5bGVba2V5XTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9LCB7fSk7XG4gICAgICAvLyB0b2RvIC0gXG4gICAgICAvLyBmbGF0dGVuIGFycmF5cyB3aGljaCBoYXZlbid0IGJlZW4gZmxhdHRlbmVkIHlldCBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IF9leHRlbmRzKHsgc3R5bGU6IGZsYXR0ZW5lZCB9LCByZXN0KVxuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBpZiAoKHR5cGVvZiBfcmV0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihfcmV0KSkgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbnZhciBwcmVmaXhBbGwgPSByZXF1aXJlKCcuL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2luZGV4LmpzJyk7XG5cbmZ1bmN0aW9uIHByZWZpeGVzKF9yZWYpIHtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydzdHlsZSddKTtcblxuICByZXR1cm4gX2V4dGVuZHMoeyBzdHlsZTogcHJlZml4QWxsKHN0eWxlKSB9LCByZXN0KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9wbHVnaW5zLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlN0eWxlU2hlZXQgPSBTdHlsZVNoZWV0O1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuLyogXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXMgXG5cbi0gdXNlcyBtdWx0aXBsZSBzdHlsZSB0YWdzIGJlaGluZCB0aGUgc2NlbmVzIGZvciBtaWxsaW9ucyBvZiBydWxlcyBcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG4tICdwb2x5ZmlsbHMnIG9uIHNlcnZlciBzaWRlIFxuXG5cbi8vIHVzYWdlXG5cbmltcG9ydCBTdHlsZVNoZWV0IGZyb20gJ2dsYW1vci9saWIvc2hlZXQnXG5sZXQgc3R5bGVTaGVldCA9IG5ldyBTdHlsZVNoZWV0KClcblxuc3R5bGVTaGVldC5pbmplY3QoKSBcbi0gJ2luamVjdHMnIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlIHBhZ2UgKG9yIGludG8gbWVtb3J5IGlmIG9uIHNlcnZlcilcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKSBcbi0gYXBwZW5kcyBhIGNzcyBydWxlIGludG8gdGhlIHN0eWxlc2hlZXQgXG5cbnN0eWxlU2hlZXQuZmx1c2goKSBcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cblxuKi9cblxuZnVuY3Rpb24gbGFzdChhcnIpIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfVxuXG4gIC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3ggXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgIXByb2Nlc3MuZW52Lk5PREVfRU5WOyAvLyh4ID0+ICh4ID09PSAnZGV2ZWxvcG1lbnQnKSB8fCAheCkocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXG52YXIgaXNUZXN0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JztcblxudmFyIG9sZElFID0gZnVuY3Rpb24gKCkge1xuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSAnPCEtLVtpZiBsdCBJRSAxMF0+PGk+PC9pPjwhW2VuZGlmXS0tPic7XG4gICAgcmV0dXJuIGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaScpLmxlbmd0aCA9PT0gMTtcbiAgfVxufSgpO1xuXG5mdW5jdGlvbiBtYWtlU3R5bGVUYWcoKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKS5hcHBlbmRDaGlsZCh0YWcpO1xuICByZXR1cm4gdGFnO1xufVxuXG5mdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJHNwZWVkeSA9IF9yZWYuc3BlZWR5LFxuICAgICAgc3BlZWR5ID0gX3JlZiRzcGVlZHkgPT09IHVuZGVmaW5lZCA/ICFpc0RldiAmJiAhaXNUZXN0IDogX3JlZiRzcGVlZHksXG4gICAgICBfcmVmJG1heExlbmd0aCA9IF9yZWYubWF4TGVuZ3RoLFxuICAgICAgbWF4TGVuZ3RoID0gX3JlZiRtYXhMZW5ndGggPT09IHVuZGVmaW5lZCA/IGlzQnJvd3NlciAmJiBvbGRJRSA/IDQwMDAgOiA2NTAwMCA6IF9yZWYkbWF4TGVuZ3RoO1xuXG4gIHRoaXMuaXNTcGVlZHkgPSBzcGVlZHk7IC8vIHRoZSBiaWcgZHJhd2JhY2sgaGVyZSBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcbiAgdGhpcy5zaGVldCA9IHVuZGVmaW5lZDtcbiAgdGhpcy50YWdzID0gW107XG4gIHRoaXMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuICB0aGlzLmN0ciA9IDA7XG59XG5cbk9iamVjdC5hc3NpZ24oU3R5bGVTaGVldC5wcm90b3R5cGUsIHtcbiAgZ2V0U2hlZXQ6IGZ1bmN0aW9uIGdldFNoZWV0KCkge1xuICAgIHJldHVybiBzaGVldEZvclRhZyhsYXN0KHRoaXMudGFncykpO1xuICB9LFxuICBpbmplY3Q6IGZ1bmN0aW9uIGluamVjdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuaW5qZWN0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBpbmplY3RlZCBzdHlsZXNoZWV0IScpO1xuICAgIH1cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnRhZ3NbMF0gPSBtYWtlU3R5bGVUYWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2VydmVyIHNpZGUgJ3BvbHlmaWxsJy4ganVzdCBlbm91Z2ggYmVoYXZpb3IgdG8gYmUgdXNlZnVsLlxuICAgICAgdGhpcy5zaGVldCA9IHtcbiAgICAgICAgY3NzUnVsZXM6IFtdLFxuICAgICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUpIHtcbiAgICAgICAgICAvLyBlbm91Z2ggJ3NwZWMgY29tcGxpYW5jZScgdG8gYmUgYWJsZSB0byBleHRyYWN0IHRoZSBydWxlcyBsYXRlciAgXG4gICAgICAgICAgLy8gaW4gb3RoZXIgd29yZHMsIGp1c3QgdGhlIGNzc1RleHQgZmllbGQgXG4gICAgICAgICAgX3RoaXMuc2hlZXQuY3NzUnVsZXMucHVzaCh7IGNzc1RleHQ6IHJ1bGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0ZWQgPSB0cnVlO1xuICB9LFxuICBzcGVlZHk6IGZ1bmN0aW9uIHNwZWVkeShib29sKSB7XG4gICAgaWYgKHRoaXMuY3RyICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjaGFuZ2Ugc3BlZWR5IG1vZGUgYWZ0ZXIgaW5zZXJ0aW5nIGFueSBydWxlIHRvIHNoZWV0LiBFaXRoZXIgY2FsbCBzcGVlZHkoJyArIGJvb2wgKyAnKSBlYXJsaWVyIGluIHlvdXIgYXBwLCBvciBjYWxsIGZsdXNoKCkgYmVmb3JlIHNwZWVkeSgnICsgYm9vbCArICcpJyk7XG4gICAgfVxuICAgIHRoaXMuaXNTcGVlZHkgPSAhIWJvb2w7XG4gIH0sXG4gIF9pbnNlcnQ6IGZ1bmN0aW9uIF9pbnNlcnQocnVsZSkge1xuICAgIC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnIFxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMDA3OTkyL2Nocm9tZS1zdWRkZW5seS1zdG9wcGVkLWFjY2VwdGluZy1pbnNlcnRydWxlXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcbiAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTsgLy8gdG9kbyAtIGNvcnJlY3QgaW5kZXggaGVyZSAgICAgXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGlzRGV2KSB7XG4gICAgICAgIC8vIG1pZ2h0IG5lZWQgYmV0ZXIgZHggZm9yIHRoaXMgXG4gICAgICAgIGNvbnNvbGUud2Fybignd2hvb3BzLCBpbGxlZ2FsIHJ1bGUgaW5zZXJ0ZWQnLCBydWxlKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnMgXG4gICAgICBpZiAodGhpcy5pc1NwZWVkeSAmJiB0aGlzLmdldFNoZWV0KCkuaW5zZXJ0UnVsZSkge1xuICAgICAgICB0aGlzLl9pbnNlcnQocnVsZSk7XG4gICAgICB9XG4gICAgICAvLyBtb3JlIGJyb3dzZXIgd2VpcmRuZXNzLiBJIGRvbid0IGV2ZW4ga25vdyAgICBcbiAgICAgIC8vIGVsc2UgaWYodGhpcy50YWdzLmxlbmd0aCA+IDAgJiYgdGhpcy50YWdzOjpsYXN0KCkuc3R5bGVTaGVldCkgeyAgICAgIFxuICAgICAgLy8gICB0aGlzLnRhZ3M6Omxhc3QoKS5zdHlsZVNoZWV0LmNzc1RleHQrPSBydWxlXG4gICAgICAvLyB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICBsYXN0KHRoaXMudGFncykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlcnZlciBzaWRlIGlzIHByZXR0eSBzaW1wbGUgICAgICAgICBcbiAgICAgIHRoaXMuc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgdGhpcy5jdHIgJSB0aGlzLm1heExlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy50YWdzLnB1c2gobWFrZVN0eWxlVGFnKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdHIgLSAxO1xuICB9LFxuXG4gIC8vIGNvbW1lbnRpbmcgdGhpcyBvdXQgdGlsbCB3ZSBkZWNpZGUgb24gdjMncyBkZWNpc2lvbiBcbiAgLy8gX3JlcGxhY2UoaW5kZXgsIHJ1bGUpIHtcbiAgLy8gICAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1ZyBcbiAgLy8gICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuICAvLyAgIHRyeSB7ICBcbiAgLy8gICAgIGxldCBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKSAgICAgICAgXG4gIC8vICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KSAvLyB0b2RvIC0gY29ycmVjdCBpbmRleCBoZXJlICAgICBcbiAgLy8gICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpXG4gIC8vICAgfVxuICAvLyAgIGNhdGNoKGUpIHtcbiAgLy8gICAgIGlmKGlzRGV2KSB7XG4gIC8vICAgICAgIC8vIG1pZ2h0IG5lZWQgYmV0ZXIgZHggZm9yIHRoaXMgXG4gIC8vICAgICAgIGNvbnNvbGUud2Fybignd2hvb3BzLCBwcm9ibGVtIHJlcGxhY2luZyBydWxlJywgcnVsZSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgLy8gICAgIH0gICAgICAgICAgXG4gIC8vICAgfSAgICAgICAgICBcblxuICAvLyB9XG4gIC8vIHJlcGxhY2UoaW5kZXgsIHJ1bGUpIHtcbiAgLy8gICBpZihpc0Jyb3dzZXIpIHtcbiAgLy8gICAgIGlmKHRoaXMuaXNTcGVlZHkgJiYgdGhpcy5nZXRTaGVldCgpLmluc2VydFJ1bGUpIHtcbiAgLy8gICAgICAgdGhpcy5fcmVwbGFjZShpbmRleCwgcnVsZSlcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsc2Uge1xuICAvLyAgICAgICBsZXQgX3Nsb3QgPSBNYXRoLmZsb29yKChpbmRleCAgKyB0aGlzLm1heExlbmd0aCkgLyB0aGlzLm1heExlbmd0aCkgLSAxICAgICAgICBcbiAgLy8gICAgICAgbGV0IF9pbmRleCA9IChpbmRleCAlIHRoaXMubWF4TGVuZ3RoKSArIDFcbiAgLy8gICAgICAgbGV0IHRhZyA9IHRoaXMudGFnc1tfc2xvdF1cbiAgLy8gICAgICAgdGFnLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSwgdGFnLmNoaWxkTm9kZXNbX2luZGV4XSlcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgZWxzZSB7XG4gIC8vICAgICBsZXQgcnVsZXMgPSB0aGlzLnNoZWV0LmNzc1J1bGVzXG4gIC8vICAgICB0aGlzLnNoZWV0LmNzc1J1bGVzID0gWyAuLi5ydWxlcy5zbGljZSgwLCBpbmRleCksIHsgY3NzVGV4dDogcnVsZSB9LCAuLi5ydWxlcy5zbGljZShpbmRleCArIDEpIF1cbiAgLy8gICB9XG4gIC8vIH1cbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKGluZGV4KSB7XG4gICAgLy8gd2UgaW5zZXJ0IGEgYmxhbmsgcnVsZSB3aGVuICdkZWxldGluZycgc28gcHJldmlvdXNseSByZXR1cm5lZCBpbmRleGVzIHJlbWFpbiBzdGFibGVcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGluZGV4LCAnJyk7XG4gIH0sXG4gIGZsdXNoOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICAgIHRoaXMuc2hlZXQgPSBudWxsO1xuICAgICAgdGhpcy5jdHIgPSAwO1xuICAgICAgLy8gdG9kbyAtIGxvb2sgZm9yIHJlbW5hbnRzIGluIGRvY3VtZW50LnN0eWxlU2hlZXRzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyIFxuICAgICAgdGhpcy5zaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmluamVjdGVkID0gZmFsc2U7XG4gIH0sXG4gIHJ1bGVzOiBmdW5jdGlvbiBydWxlcygpIHtcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2hlZXQuY3NzUnVsZXM7XG4gICAgfVxuICAgIHZhciBhcnIgPSBbXTtcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZS5hcHBseShhcnIsIFthcnIubGVuZ3RoLCAwXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KEFycmF5LmZyb20oc2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcykpKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvc2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBYbWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIveG1sLWVudGl0aWVzLmpzJyksXG4gIEh0bWw0RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw0LWVudGl0aWVzLmpzJyksXG4gIEh0bWw1RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw1LWVudGl0aWVzLmpzJyksXG4gIEFsbEh0bWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDUtZW50aXRpZXMuanMnKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgSFRNTF9BTFBIQSA9IFsnYXBvcycsICduYnNwJywgJ2lleGNsJywgJ2NlbnQnLCAncG91bmQnLCAnY3VycmVuJywgJ3llbicsICdicnZiYXInLCAnc2VjdCcsICd1bWwnLCAnY29weScsICdvcmRmJywgJ2xhcXVvJywgJ25vdCcsICdzaHknLCAncmVnJywgJ21hY3InLCAnZGVnJywgJ3BsdXNtbicsICdzdXAyJywgJ3N1cDMnLCAnYWN1dGUnLCAnbWljcm8nLCAncGFyYScsICdtaWRkb3QnLCAnY2VkaWwnLCAnc3VwMScsICdvcmRtJywgJ3JhcXVvJywgJ2ZyYWMxNCcsICdmcmFjMTInLCAnZnJhYzM0JywgJ2lxdWVzdCcsICdBZ3JhdmUnLCAnQWFjdXRlJywgJ0FjaXJjJywgJ0F0aWxkZScsICdBdW1sJywgJ0FyaW5nJywgJ0FlbGlnJywgJ0NjZWRpbCcsICdFZ3JhdmUnLCAnRWFjdXRlJywgJ0VjaXJjJywgJ0V1bWwnLCAnSWdyYXZlJywgJ0lhY3V0ZScsICdJY2lyYycsICdJdW1sJywgJ0VUSCcsICdOdGlsZGUnLCAnT2dyYXZlJywgJ09hY3V0ZScsICdPY2lyYycsICdPdGlsZGUnLCAnT3VtbCcsICd0aW1lcycsICdPc2xhc2gnLCAnVWdyYXZlJywgJ1VhY3V0ZScsICdVY2lyYycsICdVdW1sJywgJ1lhY3V0ZScsICdUSE9STicsICdzemxpZycsICdhZ3JhdmUnLCAnYWFjdXRlJywgJ2FjaXJjJywgJ2F0aWxkZScsICdhdW1sJywgJ2FyaW5nJywgJ2FlbGlnJywgJ2NjZWRpbCcsICdlZ3JhdmUnLCAnZWFjdXRlJywgJ2VjaXJjJywgJ2V1bWwnLCAnaWdyYXZlJywgJ2lhY3V0ZScsICdpY2lyYycsICdpdW1sJywgJ2V0aCcsICdudGlsZGUnLCAnb2dyYXZlJywgJ29hY3V0ZScsICdvY2lyYycsICdvdGlsZGUnLCAnb3VtbCcsICdkaXZpZGUnLCAnT3NsYXNoJywgJ3VncmF2ZScsICd1YWN1dGUnLCAndWNpcmMnLCAndXVtbCcsICd5YWN1dGUnLCAndGhvcm4nLCAneXVtbCcsICdxdW90JywgJ2FtcCcsICdsdCcsICdndCcsICdvZWxpZycsICdvZWxpZycsICdzY2Fyb24nLCAnc2Nhcm9uJywgJ3l1bWwnLCAnY2lyYycsICd0aWxkZScsICdlbnNwJywgJ2Vtc3AnLCAndGhpbnNwJywgJ3p3bmonLCAnendqJywgJ2xybScsICdybG0nLCAnbmRhc2gnLCAnbWRhc2gnLCAnbHNxdW8nLCAncnNxdW8nLCAnc2JxdW8nLCAnbGRxdW8nLCAncmRxdW8nLCAnYmRxdW8nLCAnZGFnZ2VyJywgJ2RhZ2dlcicsICdwZXJtaWwnLCAnbHNhcXVvJywgJ3JzYXF1bycsICdldXJvJywgJ2Zub2YnLCAnYWxwaGEnLCAnYmV0YScsICdnYW1tYScsICdkZWx0YScsICdlcHNpbG9uJywgJ3pldGEnLCAnZXRhJywgJ3RoZXRhJywgJ2lvdGEnLCAna2FwcGEnLCAnbGFtYmRhJywgJ211JywgJ251JywgJ3hpJywgJ29taWNyb24nLCAncGknLCAncmhvJywgJ3NpZ21hJywgJ3RhdScsICd1cHNpbG9uJywgJ3BoaScsICdjaGknLCAncHNpJywgJ29tZWdhJywgJ2FscGhhJywgJ2JldGEnLCAnZ2FtbWEnLCAnZGVsdGEnLCAnZXBzaWxvbicsICd6ZXRhJywgJ2V0YScsICd0aGV0YScsICdpb3RhJywgJ2thcHBhJywgJ2xhbWJkYScsICdtdScsICdudScsICd4aScsICdvbWljcm9uJywgJ3BpJywgJ3JobycsICdzaWdtYWYnLCAnc2lnbWEnLCAndGF1JywgJ3Vwc2lsb24nLCAncGhpJywgJ2NoaScsICdwc2knLCAnb21lZ2EnLCAndGhldGFzeW0nLCAndXBzaWgnLCAncGl2JywgJ2J1bGwnLCAnaGVsbGlwJywgJ3ByaW1lJywgJ3ByaW1lJywgJ29saW5lJywgJ2ZyYXNsJywgJ3dlaWVycCcsICdpbWFnZScsICdyZWFsJywgJ3RyYWRlJywgJ2FsZWZzeW0nLCAnbGFycicsICd1YXJyJywgJ3JhcnInLCAnZGFycicsICdoYXJyJywgJ2NyYXJyJywgJ2xhcnInLCAndWFycicsICdyYXJyJywgJ2RhcnInLCAnaGFycicsICdmb3JhbGwnLCAncGFydCcsICdleGlzdCcsICdlbXB0eScsICduYWJsYScsICdpc2luJywgJ25vdGluJywgJ25pJywgJ3Byb2QnLCAnc3VtJywgJ21pbnVzJywgJ2xvd2FzdCcsICdyYWRpYycsICdwcm9wJywgJ2luZmluJywgJ2FuZycsICdhbmQnLCAnb3InLCAnY2FwJywgJ2N1cCcsICdpbnQnLCAndGhlcmU0JywgJ3NpbScsICdjb25nJywgJ2FzeW1wJywgJ25lJywgJ2VxdWl2JywgJ2xlJywgJ2dlJywgJ3N1YicsICdzdXAnLCAnbnN1YicsICdzdWJlJywgJ3N1cGUnLCAnb3BsdXMnLCAnb3RpbWVzJywgJ3BlcnAnLCAnc2RvdCcsICdsY2VpbCcsICdyY2VpbCcsICdsZmxvb3InLCAncmZsb29yJywgJ2xhbmcnLCAncmFuZycsICdsb3onLCAnc3BhZGVzJywgJ2NsdWJzJywgJ2hlYXJ0cycsICdkaWFtcyddO1xudmFyIEhUTUxfQ09ERVMgPSBbMzksIDE2MCwgMTYxLCAxNjIsIDE2MywgMTY0LCAxNjUsIDE2NiwgMTY3LCAxNjgsIDE2OSwgMTcwLCAxNzEsIDE3MiwgMTczLCAxNzQsIDE3NSwgMTc2LCAxNzcsIDE3OCwgMTc5LCAxODAsIDE4MSwgMTgyLCAxODMsIDE4NCwgMTg1LCAxODYsIDE4NywgMTg4LCAxODksIDE5MCwgMTkxLCAxOTIsIDE5MywgMTk0LCAxOTUsIDE5NiwgMTk3LCAxOTgsIDE5OSwgMjAwLCAyMDEsIDIwMiwgMjAzLCAyMDQsIDIwNSwgMjA2LCAyMDcsIDIwOCwgMjA5LCAyMTAsIDIxMSwgMjEyLCAyMTMsIDIxNCwgMjE1LCAyMTYsIDIxNywgMjE4LCAyMTksIDIyMCwgMjIxLCAyMjIsIDIyMywgMjI0LCAyMjUsIDIyNiwgMjI3LCAyMjgsIDIyOSwgMjMwLCAyMzEsIDIzMiwgMjMzLCAyMzQsIDIzNSwgMjM2LCAyMzcsIDIzOCwgMjM5LCAyNDAsIDI0MSwgMjQyLCAyNDMsIDI0NCwgMjQ1LCAyNDYsIDI0NywgMjQ4LCAyNDksIDI1MCwgMjUxLCAyNTIsIDI1MywgMjU0LCAyNTUsIDM0LCAzOCwgNjAsIDYyLCAzMzgsIDMzOSwgMzUyLCAzNTMsIDM3NiwgNzEwLCA3MzIsIDgxOTQsIDgxOTUsIDgyMDEsIDgyMDQsIDgyMDUsIDgyMDYsIDgyMDcsIDgyMTEsIDgyMTIsIDgyMTYsIDgyMTcsIDgyMTgsIDgyMjAsIDgyMjEsIDgyMjIsIDgyMjQsIDgyMjUsIDgyNDAsIDgyNDksIDgyNTAsIDgzNjQsIDQwMiwgOTEzLCA5MTQsIDkxNSwgOTE2LCA5MTcsIDkxOCwgOTE5LCA5MjAsIDkyMSwgOTIyLCA5MjMsIDkyNCwgOTI1LCA5MjYsIDkyNywgOTI4LCA5MjksIDkzMSwgOTMyLCA5MzMsIDkzNCwgOTM1LCA5MzYsIDkzNywgOTQ1LCA5NDYsIDk0NywgOTQ4LCA5NDksIDk1MCwgOTUxLCA5NTIsIDk1MywgOTU0LCA5NTUsIDk1NiwgOTU3LCA5NTgsIDk1OSwgOTYwLCA5NjEsIDk2MiwgOTYzLCA5NjQsIDk2NSwgOTY2LCA5NjcsIDk2OCwgOTY5LCA5NzcsIDk3OCwgOTgyLCA4MjI2LCA4MjMwLCA4MjQyLCA4MjQzLCA4MjU0LCA4MjYwLCA4NDcyLCA4NDY1LCA4NDc2LCA4NDgyLCA4NTAxLCA4NTkyLCA4NTkzLCA4NTk0LCA4NTk1LCA4NTk2LCA4NjI5LCA4NjU2LCA4NjU3LCA4NjU4LCA4NjU5LCA4NjYwLCA4NzA0LCA4NzA2LCA4NzA3LCA4NzA5LCA4NzExLCA4NzEyLCA4NzEzLCA4NzE1LCA4NzE5LCA4NzIxLCA4NzIyLCA4NzI3LCA4NzMwLCA4NzMzLCA4NzM0LCA4NzM2LCA4NzQzLCA4NzQ0LCA4NzQ1LCA4NzQ2LCA4NzQ3LCA4NzU2LCA4NzY0LCA4NzczLCA4Nzc2LCA4ODAwLCA4ODAxLCA4ODA0LCA4ODA1LCA4ODM0LCA4ODM1LCA4ODM2LCA4ODM4LCA4ODM5LCA4ODUzLCA4ODU1LCA4ODY5LCA4OTAxLCA4OTY4LCA4OTY5LCA4OTcwLCA4OTcxLCA5MDAxLCA5MDAyLCA5Njc0LCA5ODI0LCA5ODI3LCA5ODI5LCA5ODMwXTtcblxudmFyIGFscGhhSW5kZXggPSB7fTtcbnZhciBudW1JbmRleCA9IHt9O1xuXG52YXIgaSA9IDA7XG52YXIgbGVuZ3RoID0gSFRNTF9BTFBIQS5sZW5ndGg7XG53aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgIHZhciBhID0gSFRNTF9BTFBIQVtpXTtcbiAgICB2YXIgYyA9IEhUTUxfQ09ERVNbaV07XG4gICAgYWxwaGFJbmRleFthXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgbnVtSW5kZXhbY10gPSBhO1xuICAgIGkrKztcbn1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSHRtbDRFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYoIz9bXFx3XFxkXSspOz8vZywgZnVuY3Rpb24ocywgZW50aXR5KSB7XG4gICAgICAgIHZhciBjaHI7XG4gICAgICAgIGlmIChlbnRpdHkuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlbnRpdHkuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigyKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDEpKTtcblxuICAgICAgICAgICAgaWYgKCEoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociA9IGFscGhhSW5kZXhbZW50aXR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hyIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZGVjb2RlKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBhbHBoYSA9IG51bUluZGV4W3N0ci5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgcmVzdWx0ICs9IGFscGhhID8gXCImXCIgKyBhbHBoYSArIFwiO1wiIDogc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZShzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgY2MgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gbnVtSW5kZXhbY2NdO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2MgPCAzMiB8fCBjYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiJiNcIiArIGNjICsgXCI7XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEh0bWw0RW50aXRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDQtZW50aXRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBBTFBIQV9JTkRFWCA9IHtcbiAgICAnJmx0JzogJzwnLFxuICAgICcmZ3QnOiAnPicsXG4gICAgJyZxdW90JzogJ1wiJyxcbiAgICAnJmFwb3MnOiAnXFwnJyxcbiAgICAnJmFtcCc6ICcmJyxcbiAgICAnJmx0Oyc6ICc8JyxcbiAgICAnJmd0Oyc6ICc+JyxcbiAgICAnJnF1b3Q7JzogJ1wiJyxcbiAgICAnJmFwb3M7JzogJ1xcJycsXG4gICAgJyZhbXA7JzogJyYnXG59O1xuXG52YXIgQ0hBUl9JTkRFWCA9IHtcbiAgICA2MDogJ2x0JyxcbiAgICA2MjogJ2d0JyxcbiAgICAzNDogJ3F1b3QnLFxuICAgIDM5OiAnYXBvcycsXG4gICAgMzg6ICdhbXAnXG59O1xuXG52YXIgQ0hBUl9TX0lOREVYID0ge1xuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgICdcXCcnOiAnJmFwb3M7JyxcbiAgICAnJic6ICcmYW1wOydcbn07XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFhtbEVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzx8PnxcInwnfCYvZywgZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gQ0hBUl9TX0lOREVYW3NdO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmVuY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIz9bMC05YS16QS1aXSs7Py9nLCBmdW5jdGlvbihzKSB7XG4gICAgICAgIGlmIChzLmNoYXJBdCgxKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IHMuY2hhckF0KDIpLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQocy5zdWJzdHIoMyksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQocy5zdWJzdHIoMikpO1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQUxQSEFfSU5ERVhbc10gfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgYWxwaGEgPSBDSEFSX0lOREVYW2NdO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA8IDMyIHx8IGMgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGVOb25VVEYoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5naHQgPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5naHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ2h0KSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGVOb25BU0NJSShzdHIpO1xuIH07XG5cbm1vZHVsZS5leHBvcnRzID0gWG1sRW50aXRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1lbnRpdGllcy9saWIveG1sLWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxudmFyIF9rZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxudmFyIF9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlID0gcmVxdWlyZSgnd2VicGFjay1ob3QtbWlkZGxld2FyZS9jbGllbnQ/b3ZlcmxheT1mYWxzZSZyZWxvYWQ9dHJ1ZScpO1xuXG52YXIgX2NsaWVudE92ZXJsYXlGYWxzZVJlbG9hZFRydWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoYW5kbGVycyA9IHtcbiAgcmVsb2FkOiBmdW5jdGlvbiByZWxvYWQocm91dGUpIHtcbiAgICBpZiAocm91dGUgPT09ICcvX2Vycm9yJykge1xuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKCgwLCBfa2V5czIuZGVmYXVsdCkobmV4dC5yb3V0ZXIuY29tcG9uZW50cykpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tyXS5Db21wb25lbnQ7XG5cbiAgICAgICAgICBpZiAoQ29tcG9uZW50Ll9fcm91dGUgPT09ICcvX2Vycm9yLWRlYnVnJykge1xuICAgICAgICAgICAgLy8gcmVsb2FkIGFsbCAnL19lcnJvci1kZWJ1ZydcbiAgICAgICAgICAgIC8vIHdoaWNoIGFyZSBleHBlY3RlZCB0byBiZSBlcnJvcnMgb2YgJy9fZXJyb3InIHJvdXRlc1xuICAgICAgICAgICAgbmV4dC5yb3V0ZXIucmVsb2FkKHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0LnJvdXRlci5yZWxvYWQocm91dGUpO1xuICB9LFxuICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShyb3V0ZSkge1xuICAgIHZhciBfcmVmID0gbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tyb3V0ZV0gfHwge30sXG4gICAgICAgIENvbXBvbmVudCA9IF9yZWYuQ29tcG9uZW50O1xuXG4gICAgaWYgKENvbXBvbmVudCAmJiBDb21wb25lbnQuX19yb3V0ZSA9PT0gJy9fZXJyb3ItZGVidWcnKSB7XG4gICAgICAvLyByZWxvYWQgdG8gcmVjb3ZlciBmcm9tIHJ1bnRpbWUgZXJyb3JzXG4gICAgICBuZXh0LnJvdXRlci5yZWxvYWQocm91dGUpO1xuICAgIH1cbiAgfVxufTsgLyogZ2xvYmFsIG5leHQgKi9cblxuXG5fY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZTIuZGVmYXVsdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG9iaikge1xuICB2YXIgZm4gPSBoYW5kbGVyc1tvYmouYWN0aW9uXTtcbiAgaWYgKGZuKSB7XG4gICAgdmFyIGRhdGEgPSBvYmouZGF0YSB8fCBbXTtcbiAgICBmbi5hcHBseSh1bmRlZmluZWQsICgwLCBfdG9Db25zdW1hYmxlQXJyYXkzLmRlZmF1bHQpKGRhdGEpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgYWN0aW9uICcgKyBvYmouYWN0aW9uKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB0aXRsZTogICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246ICBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmNvbnN0IEhlYWRCbG9jID0gKHByb3BzKSA9PlxuICA8SGVhZD5cbiAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxuICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdndWlsbGF1bWUsIGtvbGx5LCBmcm9udGVuZCwgYmFja2VuZCwgZnVsbCBzdGFjaywgZGV2ZWxvcGVyLCB3ZWIsIGphdmFzY3JpcHQsIHJlYWN0SlMsIE1ldGVvciwgSnMsIE5leHRKUywgV2VicGFjaycgLz5cbiAgICA8bWV0YSBuYW1lPSdjb3B5cmlnaHQnIGNvbnRlbnQ9J0d1aWxsYXVtZSBLb2xseScgLz5cbiAgPC9IZWFkPlxuXG5jc3MuZ2xvYmFsKCdodG1sLCBib2R5JywgIHtcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgYm9yZGVyOiAnMCcsXG4gIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgbGluZUhlaWdodDogJzEuMTUnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIGZvbnRXZWlnaHQ6ICczMDAnLFxuICBmb250U3R5bGU6ICdub3JtYWwnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0ZXh0U2hhZG93OiAnMCcsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxufSlcblxuSGVhZEJsb2MucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBIZWFkQmxvY1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MuanMiLCJjb25zdCBteV90aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgdGV4dCAgICAgICAgICAgIDogJyM1NTUnLFxuICAgIGxpZ2h0X3RleHQgICAgICA6ICcjYTRhNGE0JyxcbiAgICB0aW1lX2xpbmUgICAgICAgOiAnI0NDRDFEOScsXG4gICAgdGltZV9saW5lX3RpdGxlIDogJyM2NjYnLFxuICAgIGJsYWNrICAgICAgICAgICA6ICcjMjQyNDI0JyxcbiAgICB3aGl0ZSAgICAgICAgICAgOiAnI2ZmZicsXG4gICAgdHJhbnNfcHJpbWFyeSAgIDogJ3JnYmEoMTExLCAyMDksIDE4OSwgMC41KScsXG4gICAgcHJpbWFyeSAgICAgICAgIDogJ3JnYmEoOTksIDIzMSwgMTc1LCAxKScsXG4gICAgdHJhbnNfc2Vjb25kYXJ5IDogJ3JnYmEoMjU1LCAyNDMsIDEzMywgMC41KScsXG4gICAgc2Vjb25kYXJ5ICAgICAgIDogJ3JnYmEoMjU1LCAyNDMsIDEzMywgMSknLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBteV90aGVtZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGF0YS90aGVtZS5qcyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9kZWNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLnJlcGxhY2UoYW5zaVJlZ2V4LCAnJykgOiBzdHI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmlwLWFuc2kvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8qZXNsaW50LWVudiBicm93c2VyKi9cblxudmFyIGNsaWVudE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnZhciBzdHlsZXMgPSB7XG4gIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuODUpJyxcbiAgY29sb3I6ICcjRThFOEU4JyxcbiAgbGluZUhlaWdodDogJzEuMicsXG4gIHdoaXRlU3BhY2U6ICdwcmUnLFxuICBmb250RmFtaWx5OiAnTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2UnLFxuICBmb250U2l6ZTogJzEzcHgnLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgekluZGV4OiA5OTk5LFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIGxlZnQ6IDAsXG4gIHJpZ2h0OiAwLFxuICB0b3A6IDAsXG4gIGJvdHRvbTogMCxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgZGlyOiAnbHRyJ1xufTtcbmZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgY2xpZW50T3ZlcmxheS5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG59XG5cbnZhciBhbnNpSFRNTCA9IHJlcXVpcmUoJ2Fuc2ktaHRtbCcpO1xudmFyIGNvbG9ycyA9IHtcbiAgcmVzZXQ6IFsndHJhbnNwYXJlbnQnLCAndHJhbnNwYXJlbnQnXSxcbiAgYmxhY2s6ICcxODE4MTgnLFxuICByZWQ6ICdFMzYwNDknLFxuICBncmVlbjogJ0IzQ0I3NCcsXG4gIHllbGxvdzogJ0ZGRDA4MCcsXG4gIGJsdWU6ICc3Q0FGQzInLFxuICBtYWdlbnRhOiAnN0ZBQ0NBJyxcbiAgY3lhbjogJ0MzQzJFRicsXG4gIGxpZ2h0Z3JleTogJ0VCRTdFMycsXG4gIGRhcmtncmV5OiAnNkQ3ODkxJ1xufTtcbmFuc2lIVE1MLnNldENvbG9ycyhjb2xvcnMpO1xuXG52YXIgRW50aXRpZXMgPSByZXF1aXJlKCdodG1sLWVudGl0aWVzJykuQWxsSHRtbEVudGl0aWVzO1xudmFyIGVudGl0aWVzID0gbmV3IEVudGl0aWVzKCk7XG5cbmV4cG9ydHMuc2hvd1Byb2JsZW1zID1cbmZ1bmN0aW9uIHNob3dQcm9ibGVtcyh0eXBlLCBsaW5lcykge1xuICBjbGllbnRPdmVybGF5LmlubmVySFRNTCA9ICcnO1xuICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKG1zZykge1xuICAgIG1zZyA9IGFuc2lIVE1MKGVudGl0aWVzLmVuY29kZShtc2cpKTtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcyNnB4JztcbiAgICBkaXYuaW5uZXJIVE1MID0gcHJvYmxlbVR5cGUodHlwZSkgKyAnIGluICcgKyBtc2c7XG4gICAgY2xpZW50T3ZlcmxheS5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsaWVudE92ZXJsYXkpO1xuICB9XG59O1xuXG5leHBvcnRzLmNsZWFyID1cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keSAmJiBjbGllbnRPdmVybGF5LnBhcmVudE5vZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsaWVudE92ZXJsYXkpO1xuICB9XG59O1xuXG52YXIgcHJvYmxlbUNvbG9ycyA9IHtcbiAgZXJyb3JzOiBjb2xvcnMucmVkLFxuICB3YXJuaW5nczogY29sb3JzLnllbGxvd1xufTtcblxuZnVuY3Rpb24gcHJvYmxlbVR5cGUgKHR5cGUpIHtcbiAgdmFyIGNvbG9yID0gcHJvYmxlbUNvbG9yc1t0eXBlXSB8fCBjb2xvcnMucmVkO1xuICByZXR1cm4gKFxuICAgICc8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IycgKyBjb2xvciArICc7IGNvbG9yOiNmZmY7IHBhZGRpbmc6MnB4IDRweDsgYm9yZGVyLXJhZGl1czogMnB4XCI+JyArXG4gICAgICB0eXBlLnNsaWNlKDAsIC0xKS50b1VwcGVyQ2FzZSgpICtcbiAgICAnPC9zcGFuPidcbiAgKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9jbGllbnQtb3ZlcmxheS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLyplc2xpbnQtZW52IGJyb3dzZXIqL1xuLypnbG9iYWwgX19yZXNvdXJjZVF1ZXJ5IF9fd2VicGFja19wdWJsaWNfcGF0aF9fKi9cblxudmFyIG9wdGlvbnMgPSB7XG4gIHBhdGg6IFwiL19fd2VicGFja19obXJcIixcbiAgdGltZW91dDogMjAgKiAxMDAwLFxuICBvdmVybGF5OiB0cnVlLFxuICByZWxvYWQ6IGZhbHNlLFxuICBsb2c6IHRydWUsXG4gIHdhcm46IHRydWVcbn07XG5pZiAoX19yZXNvdXJjZVF1ZXJ5KSB7XG4gIHZhciBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG4gIHZhciBvdmVycmlkZXMgPSBxdWVyeXN0cmluZy5wYXJzZShfX3Jlc291cmNlUXVlcnkuc2xpY2UoMSkpO1xuICBpZiAob3ZlcnJpZGVzLnBhdGgpIG9wdGlvbnMucGF0aCA9IG92ZXJyaWRlcy5wYXRoO1xuICBpZiAob3ZlcnJpZGVzLnRpbWVvdXQpIG9wdGlvbnMudGltZW91dCA9IG92ZXJyaWRlcy50aW1lb3V0O1xuICBpZiAob3ZlcnJpZGVzLm92ZXJsYXkpIG9wdGlvbnMub3ZlcmxheSA9IG92ZXJyaWRlcy5vdmVybGF5ICE9PSAnZmFsc2UnO1xuICBpZiAob3ZlcnJpZGVzLnJlbG9hZCkgb3B0aW9ucy5yZWxvYWQgPSBvdmVycmlkZXMucmVsb2FkICE9PSAnZmFsc2UnO1xuICBpZiAob3ZlcnJpZGVzLm5vSW5mbyAmJiBvdmVycmlkZXMubm9JbmZvICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgfVxuICBpZiAob3ZlcnJpZGVzLnF1aWV0ICYmIG92ZXJyaWRlcy5xdWlldCAhPT0gJ2ZhbHNlJykge1xuICAgIG9wdGlvbnMubG9nID0gZmFsc2U7XG4gICAgb3B0aW9ucy53YXJuID0gZmFsc2U7XG4gIH1cbiAgaWYgKG92ZXJyaWRlcy5keW5hbWljUHVibGljUGF0aCkge1xuICAgIG9wdGlvbnMucGF0aCA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgb3B0aW9ucy5wYXRoO1xuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAvLyBkbyBub3RoaW5nXG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cuRXZlbnRTb3VyY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnNvbGUud2FybihcbiAgICBcIndlYnBhY2staG90LW1pZGRsZXdhcmUncyBjbGllbnQgcmVxdWlyZXMgRXZlbnRTb3VyY2UgdG8gd29yay4gXCIgK1xuICAgIFwiWW91IHNob3VsZCBpbmNsdWRlIGEgcG9seWZpbGwgaWYgeW91IHdhbnQgdG8gc3VwcG9ydCB0aGlzIGJyb3dzZXI6IFwiICtcbiAgICBcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2ZXItc2VudF9ldmVudHMjVG9vbHNcIlxuICApO1xufSBlbHNlIHtcbiAgY29ubmVjdCh3aW5kb3cuRXZlbnRTb3VyY2UpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0KEV2ZW50U291cmNlKSB7XG4gIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG5cbiAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZTtcbiAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2U7XG4gIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdDtcblxuICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAoKG5ldyBEYXRlKCkgLSBsYXN0QWN0aXZpdHkpID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KCk7XG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKTtcblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIGNvbm5lY3RlZFwiKTtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKGV2ZW50LmRhdGEgPT0gXCJcXHVEODNEXFx1REM5M1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBwcm9jZXNzTWVzc2FnZShKU09OLnBhcnNlKGV2ZW50LmRhdGEpKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIEhNUiBtZXNzYWdlOiBcIiArIGV2ZW50LmRhdGEgKyBcIlxcblwiICsgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgc291cmNlLmNsb3NlKCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY29ubmVjdChFdmVudFNvdXJjZSk7IH0sIG9wdGlvbnMudGltZW91dCk7XG4gIH1cblxufVxuXG52YXIgcmVwb3J0ZXI7XG4vLyB0aGUgcmVwb3J0ZXIgbmVlZHMgdG8gYmUgYSBzaW5nbGV0b24gb24gdGhlIHBhZ2Vcbi8vIGluIGNhc2UgdGhlIGNsaWVudCBpcyBiZWluZyB1c2VkIGJ5IG11dGxpcGxlIGJ1bmRsZXNcbi8vIHdlIG9ubHkgd2FudCB0byByZXBvcnQgb25jZS5cbi8vIGFsbCB0aGUgZXJyb3JzIHdpbGwgZ28gdG8gYWxsIGNsaWVudHNcbnZhciBzaW5nbGV0b25LZXkgPSAnX193ZWJwYWNrX2hvdF9taWRkbGV3YXJlX3JlcG9ydGVyX18nO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3dbc2luZ2xldG9uS2V5XSkge1xuICByZXBvcnRlciA9IHdpbmRvd1tzaW5nbGV0b25LZXldID0gY3JlYXRlUmVwb3J0ZXIoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVwb3J0ZXIoKSB7XG4gIHZhciBzdHJpcCA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcblxuICB2YXIgb3ZlcmxheTtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5vdmVybGF5KSB7XG4gICAgb3ZlcmxheSA9IHJlcXVpcmUoJy4vY2xpZW50LW92ZXJsYXknKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvYmxlbXM6IGZ1bmN0aW9uKHR5cGUsIG9iaikge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBidW5kbGUgaGFzIFwiICsgdHlwZSArIFwiOlwiKTtcbiAgICAgICAgb2JqW3R5cGVdLmZvckVhY2goZnVuY3Rpb24obXNnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gXCIgKyBzdHJpcChtc2cpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcmxheSAmJiB0eXBlICE9PSAnd2FybmluZ3MnKSBvdmVybGF5LnNob3dQcm9ibGVtcyh0eXBlLCBvYmpbdHlwZV0pO1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob3ZlcmxheSkgb3ZlcmxheS5jbGVhcigpO1xuICAgIH0sXG4gICAgdXNlQ3VzdG9tT3ZlcmxheTogZnVuY3Rpb24oY3VzdG9tT3ZlcmxheSkge1xuICAgICAgb3ZlcmxheSA9IGN1c3RvbU92ZXJsYXk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgcHJvY2Vzc1VwZGF0ZSA9IHJlcXVpcmUoJy4vcHJvY2Vzcy11cGRhdGUnKTtcblxudmFyIGN1c3RvbUhhbmRsZXI7XG52YXIgc3Vic2NyaWJlQWxsSGFuZGxlcjtcbmZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKG9iaikge1xuICBzd2l0Y2gob2JqLmFjdGlvbikge1xuICAgIGNhc2UgXCJidWlsZGluZ1wiOlxuICAgICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIGJ1bmRsZSByZWJ1aWxkaW5nXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJ1aWx0XCI6XG4gICAgICBpZiAob3B0aW9ucy5sb2cpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJbSE1SXSBidW5kbGUgXCIgKyAob2JqLm5hbWUgPyBvYmoubmFtZSArIFwiIFwiIDogXCJcIikgK1xuICAgICAgICAgIFwicmVidWlsdCBpbiBcIiArIG9iai50aW1lICsgXCJtc1wiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBmYWxsIHRocm91Z2hcbiAgICBjYXNlIFwic3luY1wiOlxuICAgICAgaWYgKG9iai5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAocmVwb3J0ZXIpIHJlcG9ydGVyLnByb2JsZW1zKCdlcnJvcnMnLCBvYmopO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlcG9ydGVyKSB7XG4gICAgICAgICAgaWYgKG9iai53YXJuaW5ncy5sZW5ndGggPiAwKSByZXBvcnRlci5wcm9ibGVtcygnd2FybmluZ3MnLCBvYmopO1xuICAgICAgICAgIHJlcG9ydGVyLnN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzVXBkYXRlKG9iai5oYXNoLCBvYmoubW9kdWxlcywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGN1c3RvbUhhbmRsZXIpIHtcbiAgICAgICAgY3VzdG9tSGFuZGxlcihvYmopO1xuICAgICAgfVxuICB9XG5cbiAgaWYgKHN1YnNjcmliZUFsbEhhbmRsZXIpIHtcbiAgICBzdWJzY3JpYmVBbGxIYW5kbGVyKG9iaik7XG4gIH1cbn1cblxuaWYgKG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdWJzY3JpYmVBbGw6IGZ1bmN0aW9uIHN1YnNjcmliZUFsbChoYW5kbGVyKSB7XG4gICAgICBzdWJzY3JpYmVBbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgIGN1c3RvbUhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgdXNlQ3VzdG9tT3ZlcmxheTogZnVuY3Rpb24gdXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KSB7XG4gICAgICBpZiAocmVwb3J0ZXIpIHJlcG9ydGVyLnVzZUN1c3RvbU92ZXJsYXkoY3VzdG9tT3ZlcmxheSk7XG4gICAgfVxuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC5qcz9vdmVybGF5PWZhbHNlJnJlbG9hZD10cnVlXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKipcbiAqIEJhc2VkIGhlYXZpbHkgb24gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iL1xuICogIGMwYWZkZjljNmFiYzFkZDcwNzA3YzU5NGU0NzM4MDJhNTY2ZjdiNmUvaG90L29ubHktZGV2LXNlcnZlci5qc1xuICogT3JpZ2luYWwgY29weXJpZ2h0IFRvYmlhcyBLb3BwZXJzIEBzb2tyYSAoTUlUIGxpY2Vuc2UpXG4gKi9cblxuLyogZ2xvYmFsIHdpbmRvdyBfX3dlYnBhY2tfaGFzaF9fICovXG5cbmlmICghbW9kdWxlLmhvdCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJbSE1SXSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLlwiKTtcbn1cblxudmFyIGhtckRvY3NVcmwgPSBcImh0dHA6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnQtd2l0aC13ZWJwYWNrLmh0bWxcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG5cbnZhciBsYXN0SGFzaDtcbnZhciBmYWlsdXJlU3RhdHVzZXMgPSB7IGFib3J0OiAxLCBmYWlsOiAxIH07XG52YXIgYXBwbHlPcHRpb25zID0geyBpZ25vcmVVbmFjY2VwdGVkOiB0cnVlIH07XG5cbmZ1bmN0aW9uIHVwVG9EYXRlKGhhc2gpIHtcbiAgaWYgKGhhc2gpIGxhc3RIYXNoID0gaGFzaDtcbiAgcmV0dXJuIGxhc3RIYXNoID09IF9fd2VicGFja19oYXNoX187XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGFzaCwgbW9kdWxlTWFwLCBvcHRpb25zKSB7XG4gIHZhciByZWxvYWQgPSBvcHRpb25zLnJlbG9hZDtcbiAgaWYgKCF1cFRvRGF0ZShoYXNoKSAmJiBtb2R1bGUuaG90LnN0YXR1cygpID09IFwiaWRsZVwiKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIENoZWNraW5nIGZvciB1cGRhdGVzIG9uIHRoZSBzZXJ2ZXIuLi5cIik7XG4gICAgY2hlY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKGVyciwgdXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBoYW5kbGVFcnJvcihlcnIpO1xuXG4gICAgICBpZighdXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIENhbm5vdCBmaW5kIHVwZGF0ZSAoRnVsbCByZWxvYWQgbmVlZGVkKVwiKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSBzZXJ2ZXIpXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcHBseUNhbGxiYWNrID0gZnVuY3Rpb24oYXBwbHlFcnIsIHJlbmV3ZWRNb2R1bGVzKSB7XG4gICAgICAgIGlmIChhcHBseUVycikgcmV0dXJuIGhhbmRsZUVycm9yKGFwcGx5RXJyKTtcblxuICAgICAgICBpZiAoIXVwVG9EYXRlKCkpIGNoZWNrKCk7XG5cbiAgICAgICAgbG9nVXBkYXRlcyh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGFwcGx5UmVzdWx0ID0gbW9kdWxlLmhvdC5hcHBseShhcHBseU9wdGlvbnMsIGFwcGx5Q2FsbGJhY2spO1xuICAgICAgLy8gd2VicGFjayAyIHByb21pc2VcbiAgICAgIGlmIChhcHBseVJlc3VsdCAmJiBhcHBseVJlc3VsdC50aGVuKSB7XG4gICAgICAgIC8vIEhvdE1vZHVsZVJlcGxhY2VtZW50LnJ1bnRpbWUuanMgcmVmZXJzIHRvIHRoZSByZXN1bHQgYXMgYG91dGRhdGVkTW9kdWxlc2BcbiAgICAgICAgYXBwbHlSZXN1bHQudGhlbihmdW5jdGlvbihvdXRkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgICBhcHBseUNhbGxiYWNrKG51bGwsIG91dGRhdGVkTW9kdWxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBseVJlc3VsdC5jYXRjaChhcHBseUNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICB2YXIgcmVzdWx0ID0gbW9kdWxlLmhvdC5jaGVjayhmYWxzZSwgY2IpO1xuICAgIC8vIHdlYnBhY2sgMiBwcm9taXNlXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgICByZXN1bHQudGhlbihmdW5jdGlvbih1cGRhdGVkTW9kdWxlcykge1xuICAgICAgICAgICAgY2IobnVsbCwgdXBkYXRlZE1vZHVsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0LmNhdGNoKGNiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2dVcGRhdGVzKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuICAgIHZhciB1bmFjY2VwdGVkTW9kdWxlcyA9IHVwZGF0ZWRNb2R1bGVzLmZpbHRlcihmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgcmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcbiAgICB9KTtcblxuICAgIGlmKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiBcIiArXG4gICAgICAgICAgXCIoRnVsbCByZWxvYWQgbmVlZGVkKVxcblwiICtcbiAgICAgICAgICBcIlRoaXMgaXMgdXN1YWxseSBiZWNhdXNlIHRoZSBtb2R1bGVzIHdoaWNoIGhhdmUgY2hhbmdlZCBcIiArXG4gICAgICAgICAgXCIoYW5kIHRoZWlyIHBhcmVudHMpIGRvIG5vdCBrbm93IGhvdyB0byBob3QgcmVsb2FkIHRoZW1zZWx2ZXMuIFwiICtcbiAgICAgICAgICBcIlNlZSBcIiArIGhtckRvY3NVcmwgKyBcIiBmb3IgbW9yZSBkZXRhaWxzLlwiXG4gICAgICAgICk7XG4gICAgICAgIHVuYWNjZXB0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSAgLSBcIiArIG1vZHVsZU1hcFttb2R1bGVJZF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5sb2cpIHtcbiAgICAgIGlmKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBOb3RoaW5nIGhvdCB1cGRhdGVkLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gVXBkYXRlZCBtb2R1bGVzOlwiKTtcbiAgICAgICAgcmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVNYXBbbW9kdWxlSWRdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1cFRvRGF0ZSgpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gQXBwIGlzIHVwIHRvIGRhdGUuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycikge1xuICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpIGluIGZhaWx1cmVTdGF0dXNlcykge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBDYW5ub3QgY2hlY2sgZm9yIHVwZGF0ZSAoRnVsbCByZWxvYWQgbmVlZGVkKVwiKTtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gXCIgKyBlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgcGVyZm9ybVJlbG9hZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBVcGRhdGUgY2hlY2sgZmFpbGVkOiBcIiArIGVyci5zdGFjayB8fCBlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGVyZm9ybVJlbG9hZCgpIHtcbiAgICBpZiAocmVsb2FkKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSBjb25zb2xlLndhcm4oXCJbSE1SXSBSZWxvYWRpbmcgcGFnZVwiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjayktaG90LW1pZGRsZXdhcmUvcHJvY2Vzcy11cGRhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9saW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmV4dC9saW5rXCJcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcblxuaW1wb3J0IHBhcnRpY2xlcyBmcm9tICcuLi9kYXRhL3BhcnRpY2xlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbEJhY2tncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHBhcnRpY2xlczogcGFydGljbGVzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgfX0gPlxuICAgICAgICA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17cGFydGljbGVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kLmpzIiwiY29uc3QgcGFydGljbGVzID0ge1xuICBwYXJ0aWNsZXM6IHtcbiAgICAgIG51bWJlcjoge1xuICAgICAgICB2YWx1ZTogODAsXG4gICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogXCIjMDAwXCJcbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIHZhbHVlOiAwLjUsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDQwLFxuICAgICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICAgIHdpZHRoOiAxXG4gICAgICB9LFxuICAgICAgbW92ZToge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA2LFxuICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxuICAgICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgICBhdHRyYWN0OiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICByb3RhdGVYOiA2MDAsXG4gICAgICAgICAgcm90YXRlWTogMTIwMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICBkZXRlY3Rfb246IFwid2luZG93XCIsXG4gICAgICBldmVudHM6IHtcbiAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtb2RlOiBcInJlcHVsc2VcIlxuICAgICAgfSxcbiAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtb2RlOiBcInB1c2hcIlxuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgIH0sXG4gICAgbW9kZXM6IHtcbiAgICAgIGdyYWI6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBidWJibGU6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgc2l6ZTogNDAsXG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBvcGFjaXR5OiA4LFxuICAgICAgICBzcGVlZDogM1xuICAgICAgfSxcbiAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgfSxcbiAgICAgIHB1c2g6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiA0XG4gICAgICB9LFxuICAgICAgcmVtb3ZlOiB7XG4gICAgICAgIHBhcnRpY2xlc19uYjogMlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmV0aW5hX2RldGVjdDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFydGljbGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGF0YS9wYXJ0aWNsZXMuanMiLCIhZnVuY3Rpb24oZSwgdCkge1xuICAgIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsgXCJyZWFjdFwiIF0sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHMuUGFydGljbGVzID0gdChyZXF1aXJlKFwicmVhY3RcIikpIDogZS5QYXJ0aWNsZXMgPSB0KGUuUmVhY3QpO1xufSh0aGlzLCBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZnVuY3Rpb24gdChpKSB7XG4gICAgICAgICAgICBpZiAoYVtpXSkgcmV0dXJuIGFbaV0uZXhwb3J0cztcbiAgICAgICAgICAgIHZhciByID0gYVtpXSA9IHtcbiAgICAgICAgICAgICAgICBleHBvcnRzOiB7fSxcbiAgICAgICAgICAgICAgICBpZDogaSxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6ICExXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGVbaV0uY2FsbChyLmV4cG9ydHMsIHIsIHIuZXhwb3J0cywgdCksIHIubG9hZGVkID0gITAsIHIuZXhwb3J0cztcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IHt9O1xuICAgICAgICByZXR1cm4gdC5tID0gZSwgdC5jID0gYSwgdC5wID0gXCJcIiwgdCgwKTtcbiAgICB9KFsgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpID0gYSgzKTtcbiAgICAgICAgdC5QYXJ0aWNsZXMgPSBpLmRlZmF1bHQsIHQuZGVmYXVsdCA9IGkuZGVmYXVsdDtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGEgaW4gZSkgdC5oYXNPd25Qcm9wZXJ0eShhKSB8fCAodFthXSA9IGVbYV0pO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCBpKGEoMTEpKSwgaShhKDkpKTtcbiAgICAgICAgdmFyIHIgPSBhKDQpO1xuICAgICAgICB0LkludGVyYWN0ID0gci5kZWZhdWx0O1xuICAgICAgICB2YXIgcyA9IGEoNSk7XG4gICAgICAgIHQuTW9kZXMgPSBzLmRlZmF1bHQ7XG4gICAgICAgIHZhciBuID0gYSg2KTtcbiAgICAgICAgdC5QYXJ0aWNsZSA9IG4uZGVmYXVsdDtcbiAgICAgICAgdmFyIG8gPSBhKDcpO1xuICAgICAgICB0LlBhcnRpY2xlTWFuYWdlciA9IG8uZGVmYXVsdDtcbiAgICAgICAgdmFyIGMgPSBhKDgpO1xuICAgICAgICB0LlBhcnRpY2xlc0xpYnJhcnkgPSBjLmRlZmF1bHQ7XG4gICAgICAgIHZhciBsID0gYSgxMCk7XG4gICAgICAgIHQuVmVuZG9ycyA9IGwuZGVmYXVsdDtcbiAgICB9LCBmdW5jdGlvbih0LCBhKSB7XG4gICAgICAgIHQuZXhwb3J0cyA9IGU7XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIWUpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiAhdCB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiB0ICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCA/IGUgOiB0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHMoZSwgdCkge1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCAmJiBudWxsICE9PSB0KSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiB0KTtcbiAgICAgICAgICAgIGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0ICYmIHQucHJvdG90eXBlLCB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgdCAmJiAoT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsIHQpIDogZS5fX3Byb3RvX18gPSB0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG8gPSBhKDIpLCBjID0gYSgyKSwgbCA9IGEoMSksIHUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB0KGUpIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIHQpO1xuICAgICAgICAgICAgICAgIHZhciBhID0gcih0aGlzLCAodC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsIGUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGxpYnJhcnk6IHZvaWQgMFxuICAgICAgICAgICAgICAgIH0sIGEubG9hZENhbnZhcyA9IGEubG9hZENhbnZhcy5iaW5kKGEpLCBhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHModCwgZSksIG4odCwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlicmFyeS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJsb2FkQ2FudmFzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBlICYmIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzOiBlXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5zdGF0ZS5saWJyYXJ5LmxvYWRDYW52YXModC5zdGF0ZS5jYW52YXMpLCB0LnN0YXRlLmxpYnJhcnkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjb21wb25lbnRXaWxsTW91bnRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlicmFyeTogbmV3IGwuUGFydGljbGVzTGlicmFyeSh0aGlzLnByb3BzLnBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saWJyYXJ5LmRlc3Ryb3koKSwgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaWJyYXJ5OiB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5wcm9wcywgdCA9IGUud2lkdGgsIGEgPSBlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBvLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiB0aGlzLmxvYWRDYW52YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogbC5kZWVwRXh0ZW5kKHRoaXMucHJvcHMuc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCB0O1xuICAgICAgICB9KGMuUHVyZUNvbXBvbmVudCk7XG4gICAgICAgIHUuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgfSwgdC5kZWZhdWx0ID0gdTtcbiAgICB9LCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBhKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgaSkge1xuICAgICAgICAgICAgICAgIGEodGhpcywgZSksIHRoaXMucGFyYW1zID0gdCwgdGhpcy5saWJyYXJ5ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpKGUsIFsge1xuICAgICAgICAgICAgICAgIGtleTogXCJsaW5rUGFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLnggLSB0LngsIGkgPSBlLnkgLSB0LnksIHIgPSBNYXRoLnNxcnQoYSAqIGEgKyBpICogaSksIHMgPSB0aGlzLmxpYnJhcnkuY2FudmFzLCBuID0gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkO1xuICAgICAgICAgICAgICAgICAgICBpZiAociA8PSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkgLSByIC8gKDEgLyB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSkgLyB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSwgbCA9IGMuciwgdSA9IGMuZywgcCA9IGMuYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmN0eC5zYXZlKCksIHMuY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKCBcIiArIGwgKyBcIiwgXCIgKyB1ICsgXCIsIFwiICsgcCArIFwiLCBcIiArIG8gKyBcIiApXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY3R4LmxpbmVXaWR0aCA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCwgcy5jdHguYmVnaW5QYXRoKCksIG4uc2hhZG93LmVuYWJsZSAmJiAocy5jdHguc2hhZG93Qmx1ciA9IG4uc2hhZG93LmJsdXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY3R4LnNoYWRvd0NvbG9yID0gbi5zaGFkb3cuY29sb3IpLCBzLmN0eC5tb3ZlVG8oZS54LCBlLnkpLCBzLmN0eC5saW5lVG8odC54LCB0LnkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmN0eC5zdHJva2UoKSwgcy5jdHguY2xvc2VQYXRoKCksIHMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYXR0cmFjdFBhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gZS54IC0gdC54LCBpID0gZS55IC0gdC55LCByID0gTWF0aC5zcXJ0KGEgKiBhICsgaSAqIGkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAociA8PSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gYSAvICgxZTMgKiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVgpLCBuID0gaSAvICgxZTMgKiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS52eCAtPSBzLCBlLnZ5IC09IG4sIHQudnggKz0gcywgdC52eSArPSBuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJib3VuY2VQYXJ0aWNsZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGUueCAtIHQueCwgaSA9IGUueSAtIHQueSwgciA9IE1hdGguc3FydChhICogYSArIGkgKiBpKSwgcyA9IGUucmFkaXVzICsgdC5yYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIHIgPD0gcyAmJiAoZS52eCA9IC1lLnZ4LCBlLnZ5ID0gLWUudnksIHQudnggPSAtdC52eCwgdC52eSA9IC10LnZ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IHI7XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbYV07XG4gICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgZSh0LnByb3RvdHlwZSwgYSksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzID0gYSgxKSwgbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZSh0LCBhKSB7XG4gICAgICAgICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5wYXJhbXMgPSB0LCB0aGlzLmxpYnJhcnkgPSBhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHIoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcInB1c2hQYXJ0aWNsZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMubGlicmFyeSwgaSA9IGEuY2FudmFzLCByID0gYS50bXAsIG4gPSBhLm1hbmFnZXI7XG4gICAgICAgICAgICAgICAgICAgIHIucHVzaGluZyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGU7IG8rKykgdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHMuUGFydGljbGUodGhpcy5wYXJhbXMsIHRoaXMubGlicmFyeSwgdGhpcy5wYXJhbXMucGFydGljbGVzLmNvbG9yLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogdCA/IHQucG9zX3ggOiBNYXRoLnJhbmRvbSgpICogaS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHQgPyB0LnBvc195IDogTWF0aC5yYW5kb20oKSAqIGkuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pKSwgbyA9PSBlIC0gMSAmJiAodGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuZW5hYmxlIHx8IG4ucGFydGljbGVzRHJhdygpLCByLnB1c2hpbmcgPSAhMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJyZW1vdmVQYXJ0aWNsZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubGlicmFyeS5tYW5hZ2VyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKDAsIGUpLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5lbmFibGUgfHwgdC5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJidWJibGVQYXJ0aWNsZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcywgYSA9IHRoaXMubGlicmFyeS50bXA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBzLmlzSW5BcnJheShcImJ1YmJsZVwiLCB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGUueCAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsIHIgPSBlLnkgLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LCBuID0gTWF0aC5zcXJ0KGkgKiBpICsgciAqIHIpLCBvID0gMSAtIG4gLyB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSwgYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUub3BhY2l0eV9idWJibGUgPSBlLm9wYWNpdHksIGUucmFkaXVzX2J1YmJsZSA9IGUucmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuIDw9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gPj0gMCAmJiBcIm1vdXNlbW92ZVwiID09IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICE9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLnZhbHVlKSBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA+IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGUucmFkaXVzICsgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSAqIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID49IDAgJiYgKGUucmFkaXVzX2J1YmJsZSA9IGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBlLnJhZGl1cyAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsIHAgPSBlLnJhZGl1cyAtIHUgKiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA+IDAgPyBlLnJhZGl1c19idWJibGUgPSBwIDogZS5yYWRpdXNfYnViYmxlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAhPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgPiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICogbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPiBlLm9wYWNpdHkgJiYgaCA8PSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICYmIChlLm9wYWNpdHlfYnViYmxlID0gaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGUub3BhY2l0eSAtICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpICogbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPCBlLm9wYWNpdHkgJiYgbSA+PSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICYmIChlLm9wYWNpdHlfYnViYmxlID0gbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtb3VzZWxlYXZlXCIgPT0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgJiYgYygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIHMuaXNJbkFycmF5KFwiYnViYmxlXCIsIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkgJiYgYS5idWJibGVfY2xpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gZS54IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCwgZCA9IGUueSAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ksIHkgPSBNYXRoLnNxcnQodiAqIHYgKyBkICogZCksIGIgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUpIC8gMWUzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYiA+IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uICYmIChhLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgYiA+IDIgKiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiAmJiAoYS5idWJibGVfY2xpY2tpbmcgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKGksIHIsIHMsIG4sIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSByKSBpZiAoYS5idWJibGVfZHVyYXRpb25fZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT0gcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBuIC0gYiAqIChuIC0gaSkgLyB0LnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiwgbCA9IGkgLSBjLCB1ID0gaSArIGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIiA9PSBvICYmIChlLnJhZGl1c19idWJibGUgPSB1KSwgXCJvcGFjaXR5XCIgPT0gbyAmJiAoZS5vcGFjaXR5X2J1YmJsZSA9IHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5IDw9IHQucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocCA9IHZvaWQgMCAhPSBzID8gcyA6IG4sIHAgIT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBuIC0gYiAqIChuIC0gaSkgLyB0LnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiID09IG8gJiYgKGUucmFkaXVzX2J1YmJsZSA9IGgpLCBcIm9wYWNpdHlcIiA9PSBvICYmIChlLm9wYWNpdHlfYnViYmxlID0gaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgXCJzaXplXCIgPT0gbyAmJiAoZS5yYWRpdXNfYnViYmxlID0gdm9pZCAwKSwgXCJvcGFjaXR5XCIgPT0gbyAmJiAoZS5vcGFjaXR5X2J1YmJsZSA9IHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5idWJibGVfY2xpY2tpbmcgJiYgKGYodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSwgdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUsIGUucmFkaXVzX2J1YmJsZSwgZS5yYWRpdXMsIFwic2l6ZVwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCBlLm9wYWNpdHlfYnViYmxlLCBlLm9wYWNpdHksIFwib3BhY2l0eVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlcHVsc2VQYXJ0aWNsZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcywgYSA9IHRoaXMubGlicmFyeSwgaSA9IGEuY2FudmFzLCByID0gYS50bXA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBzLmlzSW5BcnJheShcInJlcHVsc2VcIiwgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiBcIm1vdXNlbW92ZVwiID09IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUueCAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsIG8gPSBlLnkgLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LCBjID0gTWF0aC5zcXJ0KG4gKiBuICsgbyAqIG8pLCBsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IG4gLyBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IG8gLyBjXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB1ID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLCBwID0gMTAwLCBoID0gcy5jbGFtcCgxIC8gdSAqICgtMSAqIE1hdGgucG93KGMgLyB1LCAyKSArIDEpICogdSAqIHAsIDAsIDUwKSwgbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBlLnggKyBsLnggKiBoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUueSArIGwueSAqIGhcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdW5jZVwiID09IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID8gKG0ueCAtIGUucmFkaXVzID4gMCAmJiBtLnggKyBlLnJhZGl1cyA8IGkud2lkdGggJiYgKGUueCA9IG0ueCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbS55IC0gZS5yYWRpdXMgPiAwICYmIG0ueSArIGUucmFkaXVzIDwgaS5oZWlnaHQgJiYgKGUueSA9IG0ueSkpIDogKGUueCA9IG0ueCwgZS55ID0gbS55KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBzLmlzSW5BcnJheShcInJlcHVsc2VcIiwgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkgaWYgKHIucmVwdWxzZV9maW5pc2ggfHwgKHIucmVwdWxzZV9jb3VudCsrLCBcbiAgICAgICAgICAgICAgICAgICAgci5yZXB1bHNlX2NvdW50ID09IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5sZW5ndGggJiYgKHIucmVwdWxzZV9maW5pc2ggPSAhMCkpLCBcbiAgICAgICAgICAgICAgICAgICAgci5yZXB1bHNlX2NsaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IE1hdGgucG93KHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSAvIDYsIDMpLCBkID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIGUueCwgeSA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBlLnksIGIgPSBkICogZCArIHkgKiB5LCBmID0gLXYgLyBiICogMSwgXyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gTWF0aC5hdGFuMih5LCBkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS52eCA9IGYgKiBNYXRoLmNvcyhhKSwgZS52eSA9IGYgKiBNYXRoLnNpbihhKSwgXCJib3VuY2VcIiA9PSB0LnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUueCArIGUudngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBlLnkgKyBlLnZ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIueCArIGUucmFkaXVzID4gaS53aWR0aCA/IGUudnggPSAtZS52eCA6IHIueCAtIGUucmFkaXVzIDwgMCAmJiAoZS52eCA9IC1lLnZ4KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIueSArIGUucmFkaXVzID4gaS5oZWlnaHQgPyBlLnZ5ID0gLWUudnkgOiByLnkgLSBlLnJhZGl1cyA8IDAgJiYgKGUudnkgPSAtZS52eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPD0gdiAmJiBfKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSAwID09IHIucmVwdWxzZV9jbGlja2luZyAmJiAoZS52eCA9IGUudnhfaSwgZS52eSA9IGUudnlfaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJncmFiUGFydGljbGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubGlicmFyeS5jYW52YXMsIGEgPSB0aGlzLnBhcmFtcywgaSA9IGEuaW50ZXJhY3Rpdml0eSwgciA9IGEucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgXCJtb3VzZW1vdmVcIiA9PSBpLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBlLnggLSBpLm1vdXNlLnBvc194LCBuID0gZS55IC0gaS5tb3VzZS5wb3NfeSwgbyA9IE1hdGguc3FydChzICogcyArIG4gKiBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvIDw9IGkubW9kZXMuZ3JhYi5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gaS5tb2Rlcy5ncmFiLCBsID0gYy5saW5lX2xpbmtlZC5vcGFjaXR5IC0gbyAvICgxIC8gYy5saW5lX2xpbmtlZC5vcGFjaXR5KSAvIGMuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gci5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSwgcCA9IHUuciwgaCA9IHUuZywgbSA9IHUuYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoIFwiICsgcCArIFwiLCBcIiArIGggKyBcIiwgXCIgKyBtICsgXCIsIFwiICsgbCArIFwiIClcIiwgdC5jdHgubGluZVdpZHRoID0gci5saW5lX2xpbmtlZC53aWR0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuY3R4LmJlZ2luUGF0aCgpLCB0LmN0eC5tb3ZlVG8oZS54LCBlLnkpLCB0LmN0eC5saW5lVG8oaS5tb3VzZS5wb3NfeCwgaS5tb3VzZS5wb3NfeSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmN0eC5zdHJva2UoKSwgdC5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKSwgZTtcbiAgICAgICAgfSgpO1xuICAgICAgICB0LmRlZmF1bHQgPSBuO1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgIH0sIHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbYV07XG4gICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgZSh0LnByb3RvdHlwZSwgYSksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBuID0gYSgxKSwgbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZSh0LCBhLCByLCBzLCBuKSB7XG4gICAgICAgICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5wYXJhbXMgPSB0LCB0aGlzLmxpYnJhcnkgPSBhLCB0aGlzLnNldHVwU2l6ZSgpLCB0aGlzLnNldHVwUG9zaXRpb24obiksIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBDb2xvcihyKSwgdGhpcy5zZXR1cE9wYWNpdHkoKSwgdGhpcy5zZXR1cEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHMoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwU2l6ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSAodGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSAmJiAodGhpcy5zaXplX3N0YXR1cyA9ICExLCB0aGlzLnZzID0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCAvIDEwMCwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luYyB8fCAodGhpcy52cyA9IHRoaXMudnMgKiBNYXRoLnJhbmRvbSgpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXR1cFBvc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmxpYnJhcnksIGEgPSB0LmNhbnZhcywgaSA9IHQudmVuZG9ycztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gZSA/IGUueCA6IE1hdGgucmFuZG9tKCkgKiBhLndpZHRoLCB0aGlzLnkgPSBlID8gZS55IDogTWF0aC5yYW5kb20oKSAqIGEuaGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID4gYS53aWR0aCAtIDIgKiB0aGlzLnJhZGl1cyA/IHRoaXMueCA9IHRoaXMueCAtIHRoaXMucmFkaXVzIDogdGhpcy54IDwgMiAqIHRoaXMucmFkaXVzICYmICh0aGlzLnggPSB0aGlzLnggKyB0aGlzLnJhZGl1cyksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPiBhLmhlaWdodCAtIDIgKiB0aGlzLnJhZGl1cyA/IHRoaXMueSA9IHRoaXMueSAtIHRoaXMucmFkaXVzIDogdGhpcy55IDwgMiAqIHRoaXMucmFkaXVzICYmICh0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnJhZGl1cyksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5ib3VuY2UgJiYgaS5jaGVja092ZXJsYXAodGhpcywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXR1cENvbG9yXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IG4uZ2V0Q29sb3IoZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXR1cE9wYWNpdHlcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9ICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlICYmICh0aGlzLm9wYWNpdHlfc3RhdHVzID0gITEsIHRoaXMudm8gPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnNwZWVkIC8gMTAwLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zeW5jIHx8ICh0aGlzLnZvID0gdGhpcy52byAqIE1hdGgucmFuZG9tKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwQW5pbWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUudG1wLCBhID0gZS52ZW5kb3JzLCBpID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLS41XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLXJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC41XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC0uNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidG9wLWxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLS41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0uNVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0ID8gKHRoaXMudnggPSBpLngsIHRoaXMudnkgPSBpLnksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSAmJiAodGhpcy52eCA9IHRoaXMudnggKiBNYXRoLnJhbmRvbSgpLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiBNYXRoLnJhbmRvbSgpKSkgOiAodGhpcy52eCA9IGkueCArIE1hdGgucmFuZG9tKCkgLSAuNSwgdGhpcy52eSA9IGkueSArIE1hdGgucmFuZG9tKCkgLSAuNSksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4X2kgPSB0aGlzLnZ4LCB0aGlzLnZ5X2kgPSB0aGlzLnZ5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgcyA/IFwidW5kZWZpbmVkXCIgOiByKHMpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcGUgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5zaGFwZSA9IHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImltYWdlXCIgPT0gdGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IG8uaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGlvOiBvLmltYWdlLndpZHRoIC8gby5pbWFnZS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuaW1nLnJhdGlvIHx8ICh0aGlzLmltZy5yYXRpbyA9IDEpLCBcInN2Z1wiID09IHQuaW1nX3R5cGUgJiYgdm9pZCAwICE9IHQuc291cmNlX3N2ZyAmJiAoYS5jcmVhdGVTdmdJbWcodGhpcyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wdXNoaW5nICYmICh0aGlzLmltZy5sb2FkZWQgPSAhMSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkcmF3XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcywgYSA9IHRoaXMubGlicmFyeSwgaSA9IGEuY2FudmFzLCByID0gYS50bXAsIHMgPSBhLnZlbmRvcnMsIG4gPSAodGhpcy5wYXJhbXMucGFydGljbGVzLCBcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgbiA9IHZvaWQgMCAhPSB0aGlzLnJhZGl1c19idWJibGUgPyB0aGlzLnJhZGl1c19idWJibGUgOiB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIG8gPSB2b2lkIDAgIT0gdGhpcy5vcGFjaXR5X2J1YmJsZSA/IHRoaXMub3BhY2l0eV9idWJibGUgOiB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvci5yZ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gdGhpcy5jb2xvci5yZ2IsIHUgPSBsLnIsIHAgPSBsLmcsIGggPSBsLmI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gXCJyZ2JhKCBcIiArIHUgKyBcIiwgXCIgKyBwICsgXCIsIFwiICsgaCArIFwiLCBcIiArIG8gKyBcIiApXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMuY29sb3IuaHNsLCB2ID0gbS5oLCBkID0gbS5zLCB5ID0gbS5sO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IFwiaHNsYSggXCIgKyB2ICsgXCIsIFwiICsgZCArIFwiLCBcIiArIHkgKyBcIiwgXCIgKyBvICsgXCIgKVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaS5jdHguZmlsbFN0eWxlID0gYywgaS5jdHguYmVnaW5QYXRoKCksIHRoaXMuc2hhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmN0eC5hcmModGhpcy54LCB0aGlzLnksIG4sIDAsIDIgKiBNYXRoLlBJLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGdlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmN0eC5yZWN0KHRoaXMueCAtIG4sIHRoaXMueSAtIG4sIDIgKiBuLCAyICogbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcy5kcmF3U2hhcGUoaS5jdHgsIHRoaXMueCAtIG4sIHRoaXMueSArIG4gLyAxLjY2LCAyICogbiwgMywgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmRyYXdTaGFwZShpLmN0eCwgdGhpcy54IC0gbiAvICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcyAvIDMuNSksIHRoaXMueSAtIG4gLyAuNzYsIDIuNjYgKiBuIC8gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gMyksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZHJhd1NoYXBlKGkuY3R4LCB0aGlzLnggLSAyICogbiAvICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcyAvIDQpLCB0aGlzLnkgLSBuIC8gMS41MiwgMiAqIG4gKiAyLjY2IC8gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gMyksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmN0eC5kcmF3SW1hZ2UoZSwgdC54IC0gbiwgdC55IC0gbiwgMiAqIG4sIDIgKiBuIC8gdC5pbWcucmF0aW8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgYiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcInN2Z1wiID09IHIuaW1nX3R5cGUgPyB0aGlzLmltZy5vYmogOiByLmltZ19vYmosIGIgJiYgZShiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpLmN0eC5jbG9zZVBhdGgoKSwgdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aCA+IDAgJiYgKGkuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnN0cm9rZS5jb2xvciwgXG4gICAgICAgICAgICAgICAgICAgIGkuY3R4LmxpbmVXaWR0aCA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGgsIGkuY3R4LnN0cm9rZSgpKSwgaS5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIGU7XG4gICAgICAgIH0oKTtcbiAgICAgICAgdC5kZWZhdWx0ID0gbztcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHMgPSBhKDEpLCBuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQsIGEsIHIsIHMsIG4pIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLnBhcmFtcyA9IHQsIHRoaXMuaW50ZXJhY3QgPSBhLCB0aGlzLm1vZGVzID0gciwgdGhpcy52ZW5kb3JzID0gcywgXG4gICAgICAgICAgICAgICAgdGhpcy5saWJyYXJ5ID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByKGUsIFsge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNDcmVhdGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMsIHQgPSBlLmNvbG9yLCBhID0gZS5vcGFjaXR5LCBpID0gMDsgaSA8IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykgdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHMuUGFydGljbGUodGhpcy5wYXJhbXMsIHRoaXMubGlicmFyeSwgdCwgYS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicGFydGljbGVzVXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMsIHQgPSB0aGlzLmxpYnJhcnksIGEgPSB0LmNhbnZhcywgaSA9IHQuaW50ZXJhY3QsIHIgPSB0Lm1vZGVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkuZm9yRWFjaChmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5wYXJhbXMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5zcGVlZCAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC54ICs9IHQudnggKiBvLCB0LnkgKz0gdC52eSAqIG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSAmJiAoMSA9PSB0Lm9wYWNpdHlfc3RhdHVzID8gKHQub3BhY2l0eSA+PSBlLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSAmJiAodC5vcGFjaXR5X3N0YXR1cyA9ICExKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm9wYWNpdHkgKz0gdC52bykgOiAodC5vcGFjaXR5IDw9IGUucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4gJiYgKHQub3BhY2l0eV9zdGF0dXMgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5vcGFjaXR5IC09IHQudm8pLCB0Lm9wYWNpdHkgPCAwICYmICh0Lm9wYWNpdHkgPSAwKSksIGUucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlICYmICgxID09IHQuc2l6ZV9zdGF0dXMgPyAodC5yYWRpdXMgPj0gZS5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUgJiYgKHQuc2l6ZV9zdGF0dXMgPSAhMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5yYWRpdXMgKz0gdC52cykgOiAodC5yYWRpdXMgPD0gZS5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5zaXplX21pbiAmJiAodC5zaXplX3N0YXR1cyA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnJhZGl1cyAtPSB0LnZzKSwgdC5yYWRpdXMgPCAwICYmICh0LnJhZGl1cyA9IDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjID0gXCJib3VuY2VcIiA9PSBlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4X2xlZnQ6IHQucmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhfcmlnaHQ6IGEud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeV90b3A6IHQucmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlfYm90dG9tOiBhLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4X2xlZnQ6IC10LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4X3JpZ2h0OiBhLndpZHRoICsgdC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeV90b3A6IC10LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5X2JvdHRvbTogYS5oZWlnaHQgKyB0LnJhZGl1c1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdC54IC0gdC5yYWRpdXMgPiBhLndpZHRoID8gKHQueCA9IGMueF9sZWZ0LCB0LnkgPSBNYXRoLnJhbmRvbSgpICogYS5oZWlnaHQpIDogdC54ICsgdC5yYWRpdXMgPCAwICYmICh0LnggPSBjLnhfcmlnaHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC55ID0gTWF0aC5yYW5kb20oKSAqIGEuaGVpZ2h0KSwgdC55IC0gdC5yYWRpdXMgPiBhLmhlaWdodCA/ICh0LnkgPSBjLnlfdG9wLCB0LnggPSBNYXRoLnJhbmRvbSgpICogYS53aWR0aCkgOiB0LnkgKyB0LnJhZGl1cyA8IDAgJiYgKHQueSA9IGMueV9ib3R0b20sIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC54ID0gTWF0aC5yYW5kb20oKSAqIGEud2lkdGgpLCBlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm91bmNlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC54ICsgdC5yYWRpdXMgPiBhLndpZHRoID8gdC52eCA9IC10LnZ4IDogdC54IC0gdC5yYWRpdXMgPCAwICYmICh0LnZ4ID0gLXQudngpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnkgKyB0LnJhZGl1cyA+IGEuaGVpZ2h0ID8gdC52eSA9IC10LnZ5IDogdC55IC0gdC5yYWRpdXMgPCAwICYmICh0LnZ5ID0gLXQudnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNJbkFycmF5KFwiZ3JhYlwiLCBlLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpICYmIHIuZ3JhYlBhcnRpY2xlKHQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChzLmlzSW5BcnJheShcImJ1YmJsZVwiLCBlLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IHMuaXNJbkFycmF5KFwiYnViYmxlXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpICYmIHIuYnViYmxlUGFydGljbGUodCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKHMuaXNJbkFycmF5KFwicmVwdWxzZVwiLCBlLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IHMuaXNJbkFycmF5KFwicmVwdWxzZVwiLCBlLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSAmJiByLnJlcHVsc2VQYXJ0aWNsZSh0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlIHx8IGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKSBmb3IgKHZhciBsID0gbiArIDE7IGwgPCBlLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IGUucGFyYW1zLnBhcnRpY2xlcy5hcnJheVtsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlICYmIGkubGlua1BhcnRpY2xlcyh0LCB1KSwgZS5wYXJhbXMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUgJiYgaS5hdHRyYWN0UGFydGljbGVzKHQsIHUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5ib3VuY2UgJiYgaS5ib3VuY2VQYXJ0aWNsZXModCwgdSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicGFydGljbGVzRHJhd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLmNhbnZhcywgYSA9IGUubWFuYWdlcjtcbiAgICAgICAgICAgICAgICAgICAgdC5jdHguY2xlYXJSZWN0KDAsIDAsIHQud2lkdGgsIHQuaGVpZ2h0KSwgYS5wYXJ0aWNsZXNVcGRhdGUoKSwgdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5LmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicGFydGljbGVzRW1wdHlcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicGFydGljbGVzUmVmcmVzaFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgZS52ZW5kb3JzO1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmNoZWNrQW5pbUZyYW1lKSwgY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5kcmF3QW5pbUZyYW1lKSwgdC5zb3VyY2Vfc3ZnID0gdm9pZCAwLCBcbiAgICAgICAgICAgICAgICAgICAgdC5pbWdfb2JqID0gdm9pZCAwLCB0LmNvdW50X3N2ZyA9IDAsIHRoaXMucGFydGljbGVzRW1wdHkoKSwgdGhpcy5saWJyYXJ5LmNhbnZhc0NsZWFyKCksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpYnJhcnkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IG47XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbYV07XG4gICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgZSh0LnByb3RvdHlwZSwgYSksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzID0gYSgxKSwgbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy50bXAgPSB7fSwgdGhpcy50bXAgPSB7fSwgdGhpcy5sb2FkUGFyYW1ldGVycyh0KSwgdGhpcy5leHRlbmRQYXJhbXMoKSwgXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdCA9IG5ldyBzLkludGVyYWN0KHRoaXMucGFyYW1zLCB0aGlzKSwgdGhpcy5tb2RlcyA9IG5ldyBzLk1vZGVzKHRoaXMucGFyYW1zLCB0aGlzKSwgXG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gbmV3IHMuVmVuZG9ycyh0aGlzLnBhcmFtcywgdGhpcyksIHRoaXMubWFuYWdlciA9IG5ldyBzLlBhcnRpY2xlTWFuYWdlcih0aGlzLnBhcmFtcywgdGhpcy5pbnRlcmFjdCwgdGhpcy5tb2RlcywgdGhpcy52ZW5kb3JzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByKGUsIFsge1xuICAgICAgICAgICAgICAgIGtleTogXCJsb2FkUGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcy5nZXREZWZhdWx0UGFyYW1zKCksIGEgPSBzLmRlZXBFeHRlbmQodCwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zID0gYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxvYWRDYW52YXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMudmVuZG9ycztcbiAgICAgICAgICAgICAgICAgICAgZS5ldmVudHNMaXN0ZW5lcnMoKSwgZS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhY2hMaXN0ZW5lcnMoKSwgdGhpcy52ZW5kb3JzLmRldGFjaExpc3RlbmVycygpLCBjYW5jZWxBbmltYXRpb25GcmFtZShlLmRyYXdBbmltRnJhbWUpLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNDbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGV0YWNoTGlzdGVuZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImV4dGVuZFBhcmFtc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRlbmRUbXBEZWZpbml0aW9uKCksIHRoaXMub25XaW5kb3dSZXNpemUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJleHRlbmRUbXBEZWZpbml0aW9uXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMudG1wO1xuICAgICAgICAgICAgICAgICAgICBlLm9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVfdmFsdWU6IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZV9hbmltX3NwZWVkOiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZV9zcGVlZDogdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZF9kaXN0YW5jZTogdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZV9saW5rZWRfd2lkdGg6IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVfZ3JhYl9kaXN0YW5jZTogdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZV9idWJibGVfZGlzdGFuY2U6IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZV9idWJibGVfc2l6ZTogdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVfcmVwdWxzZV9kaXN0YW5jZTogdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJyZXRpbmFJbml0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuY2FudmFzLCB0ID0gdGhpcy50bXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnJldGluYV9kZXRlY3QgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxID8gKGUucHhyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdC5yZXRpbmEgPSAhMCwgZS53aWR0aCA9IGUuZWxlbWVudC5vZmZzZXRXaWR0aCAqIGUucHhyYXRpbywgZS5oZWlnaHQgPSBlLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ICogZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUgPSB0Lm9iai5zaXplX3ZhbHVlICogZS5weHJhdGlvLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkID0gdC5vYmouc2l6ZV9hbmltX3NwZWVkICogZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuc3BlZWQgPSB0Lm9iai5tb3ZlX3NwZWVkICogZS5weHJhdGlvLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UgPSB0Lm9iai5saW5lX2xpbmtlZF9kaXN0YW5jZSAqIGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSA9IHQub2JqLm1vZGVfZ3JhYl9kaXN0YW5jZSAqIGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlID0gdC5vYmoubW9kZV9idWJibGVfZGlzdGFuY2UgKiBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGggPSB0Lm9iai5saW5lX2xpbmtlZF93aWR0aCAqIGUucHhyYXRpbywgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA9IHQub2JqLm1vZGVfYnViYmxlX3NpemUgKiBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UgPSB0Lm9iai5tb2RlX3JlcHVsc2VfZGlzdGFuY2UgKiBlLnB4cmF0aW8pIDogKGUucHhyYXRpbyA9IDEsIFxuICAgICAgICAgICAgICAgICAgICB0LnJldGluYSA9ICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNhbnZhc0luaXRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jYW52YXM7XG4gICAgICAgICAgICAgICAgICAgIGUuY3R4ID0gZS5lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNhbnZhc1NpemVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jYW52YXM7XG4gICAgICAgICAgICAgICAgICAgIGUuZWxlbWVudC53aWR0aCA9IGUud2lkdGgsIGUuZWxlbWVudC5oZWlnaHQgPSBlLmhlaWdodCwgdGhpcy5wYXJhbXMgJiYgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2FudmFzUGFpbnRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jYW52YXM7XG4gICAgICAgICAgICAgICAgICAgIGUuY3R4LmZpbGxSZWN0KDAsIDAsIGUud2lkdGgsIGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNhbnZhc0NsZWFyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgICBlLmN0eC5jbGVhclJlY3QoMCwgMCwgZS53aWR0aCwgZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwib25XaW5kb3dSZXNpemVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jYW52YXMsIHQgPSB0aGlzLm1hbmFnZXIsIGEgPSB0aGlzLnRtcCwgaSA9IHRoaXMudmVuZG9ycztcbiAgICAgICAgICAgICAgICAgICAgZS53aWR0aCA9IGUuZWxlbWVudC5vZmZzZXRXaWR0aCwgZS5oZWlnaHQgPSBlLmVsZW1lbnQub2Zmc2V0SGVpZ2h0LCBhLnJldGluYSAmJiAoZS53aWR0aCAqPSBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICBlLmhlaWdodCAqPSBlLnB4cmF0aW8pLCBlLmVsZW1lbnQud2lkdGggPSBlLndpZHRoLCBlLmVsZW1lbnQuaGVpZ2h0ID0gZS5oZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5lbmFibGUgfHwgKHQucGFydGljbGVzRW1wdHkoKSwgdC5wYXJ0aWNsZXNDcmVhdGUoKSwgdC5wYXJ0aWNsZXNEcmF3KCksIFxuICAgICAgICAgICAgICAgICAgICBpLmRlbnNpdHlBdXRvUGFydGljbGVzKCkpLCBpLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKSwgZTtcbiAgICAgICAgfSgpO1xuICAgICAgICB0LmRlZmF1bHQgPSBuO1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBhID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCB0LmhleFRvUmdiID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHQgPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICAgICAgICAgICAgZSA9IGUucmVwbGFjZSh0LCBmdW5jdGlvbihlLCB0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgKyB0ICsgYSArIGEgKyBpICsgaTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGEgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoZSk7XG4gICAgICAgICAgICByZXR1cm4gYSA/IHtcbiAgICAgICAgICAgICAgICByOiBwYXJzZUludChhWzFdLCAxNiksXG4gICAgICAgICAgICAgICAgZzogcGFyc2VJbnQoYVsyXSwgMTYpLFxuICAgICAgICAgICAgICAgIGI6IHBhcnNlSW50KGFbM10sIDE2KVxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgIH0sIHQuY2xhbXAgPSBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZSwgdCksIGEpO1xuICAgICAgICB9LCB0LmlzSW5BcnJheSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmluZGV4T2YoZSkgPiAtMTtcbiAgICAgICAgfSwgdC5kZWVwRXh0ZW5kID0gZnVuY3Rpb24oZSwgYSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBhKSBhW2ldICYmIGFbaV0uY29uc3RydWN0b3IgJiYgYVtpXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ID8gKGVbaV0gPSBlW2ldIHx8IHt9LCBcbiAgICAgICAgICAgIHQuZGVlcEV4dGVuZChlW2ldLCBhW2ldKSkgOiBlW2ldID0gYVtpXTtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9LCB0LmdldENvbG9yID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGkgPSB7fTtcbiAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBlID8gXCJ1bmRlZmluZWRcIiA6IGEoZSkpKSBpZiAoZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGUubGVuZ3RoKV07XG4gICAgICAgICAgICAgICAgaS5yZ2IgPSB0LmhleFRvUmdiKHIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IGUuciwgbiA9IGUuZywgbyA9IGUuYjtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBzICYmIHZvaWQgMCAhPT0gbiAmJiB2b2lkIDAgIT09IG8pIGkucmdiID0ge1xuICAgICAgICAgICAgICAgICAgICByOiBzLFxuICAgICAgICAgICAgICAgICAgICBnOiBuLFxuICAgICAgICAgICAgICAgICAgICBiOiBvXG4gICAgICAgICAgICAgICAgfTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gZS5oLCBsID0gZS5zLCB1ID0gZS5sO1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGMgJiYgdm9pZCAwICE9PSBuICYmIHZvaWQgMCAhPT0gbyAmJiAoaS5oc2wgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoOiBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgczogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGw6IHVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIFwicmFuZG9tXCIgPT0gZSA/IGkucmdiID0ge1xuICAgICAgICAgICAgICAgIHI6IE1hdGguZmxvb3IoMjU1ICogTWF0aC5yYW5kb20oKSkgKyAxLFxuICAgICAgICAgICAgICAgIGc6IE1hdGguZmxvb3IoMjU1ICogTWF0aC5yYW5kb20oKSkgKyAxLFxuICAgICAgICAgICAgICAgIGI6IE1hdGguZmxvb3IoMjU1ICogTWF0aC5yYW5kb20oKSkgKyAxXG4gICAgICAgICAgICB9IDogXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAoaS5yZ2IgPSB0LmhleFRvUmdiKGUpKTtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9O1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcyA9IGEoMSksIG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgYSkge1xuICAgICAgICAgICAgICAgIGkodGhpcywgZSksIHRoaXMucGFyYW1zID0gdCwgdGhpcy5saWJyYXJ5ID0gYSwgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSwgXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpLCB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByKGUsIFsge1xuICAgICAgICAgICAgICAgIGtleTogXCJldmVudHNMaXN0ZW5lcnNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eSwgdCA9IHRoaXMubGlicmFyeS5jYW52YXM7XG4gICAgICAgICAgICAgICAgICAgIFwid2luZG93XCIgPT0gZS5kZXRlY3Rfb24gPyBlLmVsID0gd2luZG93IDogZS5lbCA9IHQuZWxlbWVudCwgKGUuZXZlbnRzLm9uaG92ZXIuZW5hYmxlIHx8IGUuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSAmJiAoZS5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpLCBcbiAgICAgICAgICAgICAgICAgICAgZS5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uTW91c2VMZWF2ZSkpLCBlLmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBlLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGV0YWNoTGlzdGVuZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHksIHQgPSB0aGlzLmxpYnJhcnkudG1wO1xuICAgICAgICAgICAgICAgICAgICBlLmVsICYmICgoZS5ldmVudHMub25ob3Zlci5lbmFibGUgfHwgZS5ldmVudHMub25jbGljay5lbmFibGUpICYmIChlLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSksIFxuICAgICAgICAgICAgICAgICAgICBlLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlKSksIGUuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGUuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljaykpLCBcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuZHJhd0FuaW1GcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJvbk1vdXNlTW92ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5saWJyYXJ5LCBhID0gdC5jYW52YXMsIGkgPSB0LnRtcCwgciA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHksIHMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHMgPSByLmVsID09IHdpbmRvdyA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogZS5vZmZzZXRYIHx8IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUub2Zmc2V0WSB8fCBlLmNsaWVudFlcbiAgICAgICAgICAgICAgICAgICAgfSwgci5tb3VzZS5wb3NfeCA9IHMueCwgci5tb3VzZS5wb3NfeSA9IHMueSwgaS5yZXRpbmEgJiYgKHIubW91c2UucG9zX3ggKj0gYS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgci5tb3VzZS5wb3NfeSAqPSBhLnB4cmF0aW8pLCByLnN0YXR1cyA9IFwibW91c2Vtb3ZlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJvbk1vdXNlTGVhdmVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHk7XG4gICAgICAgICAgICAgICAgICAgIHQubW91c2UucG9zX3ggPSBudWxsLCB0Lm1vdXNlLnBvc195ID0gbnVsbCwgdC5zdGF0dXMgPSBcIm1vdXNlbGVhdmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm9uQ2xpY2tcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS5tb2RlcywgYSA9IGUudG1wLCBpID0gdGhpcy5wYXJhbXMsIHIgPSBpLmludGVyYWN0aXZpdHksIHMgPSBpLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIubW91c2UuY2xpY2tfcG9zX3ggPSByLm1vdXNlLnBvc194LCByLm1vdXNlLmNsaWNrX3Bvc195ID0gci5tb3VzZS5wb3NfeSwgci5tb3VzZS5jbGlja190aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksIFxuICAgICAgICAgICAgICAgICAgICByLmV2ZW50cy5vbmNsaWNrLmVuYWJsZSkgc3dpdGNoIChyLmV2ZW50cy5vbmNsaWNrLm1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHVzaFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcy5tb3ZlLmVuYWJsZSA/IHQucHVzaFBhcnRpY2xlcyhyLm1vZGVzLnB1c2gucGFydGljbGVzX25iLCByLm1vdXNlKSA6IDEgPT0gci5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA/IHQucHVzaFBhcnRpY2xlcyhyLm1vZGVzLnB1c2gucGFydGljbGVzX25iLCByLm1vdXNlKSA6IHIubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPiAxICYmIHQucHVzaFBhcnRpY2xlcyhyLm1vZGVzLnB1c2gucGFydGljbGVzX25iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVQYXJ0aWNsZXMoci5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJ1YmJsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5idWJibGVfY2xpY2tpbmcgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlcHVsc2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucmVwdWxzZV9jbGlja2luZyA9ICEwLCBhLnJlcHVsc2VfY291bnQgPSAwLCBhLnJlcHVsc2VfZmluaXNoID0gITEsIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5yZXB1bHNlX2NsaWNraW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxZTMgKiByLm1vZGVzLnJlcHVsc2UuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZW5zaXR5QXV0b1BhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLmNhbnZhcywgYSA9IGUubW9kZXMsIGkgPSBlLnRtcCwgciA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIubnVtYmVyLmRlbnNpdHkuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHQuZWxlbWVudC53aWR0aCAqIHQuZWxlbWVudC5oZWlnaHQgLyAxZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLnJldGluYSAmJiAocyA9IHMgLyB0LnB4cmF0aW8gKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gcyAqIHIubnVtYmVyLnZhbHVlIC8gci5udW1iZXIuZGVuc2l0eS52YWx1ZV9hcmVhLCBvID0gci5hcnJheS5sZW5ndGggLSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA8IDAgPyBhLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnMobykpIDogYS5yZW1vdmVQYXJ0aWNsZXMobyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNoZWNrT3ZlcmxhcFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcy5saWJyYXJ5LCBpID0gYS5jYW52YXMsIHIgPSBhLnZlbmRvcnMsIHMgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIHMuYXJyYXkuZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGEsIG4gPSBlLnggLSBzLngsIG8gPSBlLnkgLSBzLnksIGMgPSBNYXRoLnNxcnQobiAqIG4gKyBvICogbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjIDw9IGUucmFkaXVzICsgcy5yYWRpdXMgJiYgKGUueCA9IHQgPyB0LnggOiBNYXRoLnJhbmRvbSgpICogaS53aWR0aCwgZS55ID0gdCA/IHQueSA6IE1hdGgucmFuZG9tKCkgKiBpLmhlaWdodCwgXG4gICAgICAgICAgICAgICAgICAgICAgICByLmNoZWNrT3ZlcmxhcChlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY3JlYXRlU3ZnSW1nXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmxpYnJhcnkudG1wLCBhID0gdC5zb3VyY2Vfc3ZnLCBpID0gLyMoWzAtOUEtRl17Myw2fSkvZ2ksIHIgPSBhLnJlcGxhY2UoaSwgZnVuY3Rpb24odCwgYSwgaSwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2xvci5yZ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUuY29sb3IucmdiLCBvID0gbi5yLCBjID0gbi5nLCBsID0gbi5iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBcInJnYmEoIFwiICsgbyArIFwiLCBcIiArIGMgKyBcIiwgXCIgKyBsICsgXCIsIFwiICsgZS5vcGFjaXR5ICsgXCIgKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IGUuY29sb3IuaHNsLCBwID0gdS5oLCBoID0gdS5zLCBtID0gdS5sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBcInJnYmEoIFwiICsgcCArIFwiLCBcIiArIGggKyBcIiwgXCIgKyBtICsgXCIsIFwiICsgZS5vcGFjaXR5ICsgXCIgKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBzID0gbmV3IEJsb2IoWyByIF0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04XCJcbiAgICAgICAgICAgICAgICAgICAgfSksIG4gPSB3aW5kb3cuVVJMIHx8IHdpbmRvdywgbyA9IG4uY3JlYXRlT2JqZWN0VVJMKHMpLCBjID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGMuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmltZy5vYmogPSBjLCBlLmltZy5sb2FkZWQgPSAhMCwgbi5yZXZva2VPYmplY3RVUkwobyksIHQuY291bnRfc3ZnKys7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBjLnNyYyA9IG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUuY2FudmFzLCBhID0gZS50bXA7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGEuZHJhd0FuaW1GcmFtZSksIHQuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRyYXdTaGFwZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0LCBhLCBpLCByLCBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gciAqIHMsIG8gPSByIC8gcywgYyA9IDE4MCAqIChvIC0gMikgLyBvLCBsID0gTWF0aC5QSSAtIE1hdGguUEkgKiBjIC8gMTgwO1xuICAgICAgICAgICAgICAgICAgICBlLnNhdmUoKSwgZS5iZWdpblBhdGgoKSwgZS50cmFuc2xhdGUodCwgYSksIGUubW92ZVRvKDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IG47IHUrKykgZS5saW5lVG8oaSwgMCksIGUudHJhbnNsYXRlKGksIDApLCBlLnJvdGF0ZShsKTtcbiAgICAgICAgICAgICAgICAgICAgZS5maWxsKCksIGUucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXhwb3J0SW1nXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeS5jYW52YXM7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGUuZWxlbWVudC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIiksIFwiX2JsYW5rXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibG9hZEltZ1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5saWJyYXJ5LCBhID0gdC50bXAsIGkgPSB0LnZlbmRvcnMsIHIgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmltZ19lcnJvciA9IHZvaWQgMCwgXCJcIiAhPSByLnNoYXBlLmltYWdlLnNyYykgaWYgKFwic3ZnXCIgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMub3BlbihcIkdFVFwiLCByLnNoYXBlLmltYWdlLnNyYyksIHMub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQgPT0gcy5yZWFkeVN0YXRlICYmICgyMDAgPT0gcy5zdGF0dXMgPyAoYS5zb3VyY2Vfc3ZnID0gZS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmNoZWNrQmVmb3JlRHJhdygpKSA6IChjb25zb2xlLmxvZyhcIkVycm9yIHJlYWN0LXBhcnRpY2xlcy1qcyAtIGltYWdlIG5vdCBmb3VuZFwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5pbWdfZXJyb3IgPSAhMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcy5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmltZ19vYmogPSBuLCBpLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIG4uc3JjID0gci5zaGFwZS5pbWFnZS5zcmM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZyhcIkVycm9yIHJlYWN0LXBhcnRpY2xlcy1qcyAtIG5vIGltYWdlLnNyY1wiKSwgYS5pbWdfZXJyb3IgPSAhMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRyYXdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS50bXAsIGEgPSBlLm1hbmFnZXIsIGkgPSBlLnZlbmRvcnMsIHIgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIiA9PSByLnNoYXBlLnR5cGUgPyBcInN2Z1wiID09IHQuaW1nX3R5cGUgPyB0LmNvdW50X3N2ZyA+PSByLm51bWJlci52YWx1ZSA/IChhLnBhcnRpY2xlc0RyYXcoKSwgXG4gICAgICAgICAgICAgICAgICAgIHIubW92ZS5lbmFibGUgPyB0LmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaS5kcmF3LmJpbmQoaSkpIDogY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5kcmF3QW5pbUZyYW1lKSkgOiB0LmltZ19lcnJvciB8fCAodC5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGkuZHJhdy5iaW5kKGkpKSkgOiB2b2lkIDAgIT0gdC5pbWdfb2JqID8gKGEucGFydGljbGVzRHJhdygpLCBcbiAgICAgICAgICAgICAgICAgICAgci5tb3ZlLmVuYWJsZSA/IHQuZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpLmRyYXcuYmluZChpKSkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmRyYXdBbmltRnJhbWUpKSA6IHQuaW1nX2Vycm9yIHx8ICh0LmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaS5kcmF3LmJpbmQoaSkpKSA6IChhLnBhcnRpY2xlc0RyYXcoKSwgXG4gICAgICAgICAgICAgICAgICAgIHIubW92ZS5lbmFibGUgPyB0LmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaS5kcmF3LmJpbmQoaSkpIDogY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5kcmF3QW5pbUZyYW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjaGVja0JlZm9yZURyYXdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS50bXAsIGEgPSBlLnZlbmRvcnMsIGkgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImltYWdlXCIgPT0gaS5zaGFwZS50eXBlKSBpZiAoXCJzdmdcIiA9PSB0LmltZ190eXBlICYmIHZvaWQgMCA9PSB0LnNvdXJjZV9zdmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5jaGVja0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuY2hlY2tBbmltRnJhbWUpLCB0LmltZ19lcnJvciB8fCAoYS5pbml0KCksIGEuZHJhdygpKTsgZWxzZSBhLmluaXQoKSwgXG4gICAgICAgICAgICAgICAgICAgIGEuZHJhdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLm1hbmFnZXIsIGEgPSBlLnZlbmRvcnMsIGkgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIGUucmV0aW5hSW5pdCgpLCBlLmNhbnZhc0luaXQoKSwgZS5jYW52YXNTaXplKCksIHQucGFydGljbGVzQ3JlYXRlKCksIGEuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKSwgXG4gICAgICAgICAgICAgICAgICAgIGkubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmUgPSBzLmhleFRvUmdiKGkubGluZV9saW5rZWQuY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS50bXAsIGEgPSBlLnZlbmRvcnMsIGkgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIHMuaXNJbkFycmF5KFwiaW1hZ2VcIiwgaS5zaGFwZS50eXBlKSA/ICh0LmltZ190eXBlID0gaS5zaGFwZS5pbWFnZS5zcmMuc3Vic3RyKGkuc2hhcGUuaW1hZ2Uuc3JjLmxlbmd0aCAtIDMpLCBcbiAgICAgICAgICAgICAgICAgICAgYS5sb2FkSW1nKHQuaW1nX3R5cGUpKSA6IGEuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKSwgZTtcbiAgICAgICAgfSgpO1xuICAgICAgICB0LmRlZmF1bHQgPSBuO1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pLCB0LmdldERlZmF1bHRQYXJhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogMTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiI0ZGRlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb206ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eV9taW46IC4xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bmM6ICExXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplX21pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW5jOiAhMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImxpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmFpZ2h0OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dF9tb2RlOiBcImJvdW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6IDNlMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVZOiAzZTNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXk6IFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRldGVjdF9vbjogXCJjYW52YXNcIixcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImdyYWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwicmVwdWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAhMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2Rlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhYjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxODAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjM1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IC40XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwdWxzZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzX25iOiA0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlOiB7fVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmV0aW5hX2RldGVjdDogITBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSBdKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1wYXJ0aWNsZXMtanMvbGliL3BhcnRpY2xlcy5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBsaW5rczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmNvbnN0IHJlbmRlckxpbmtzID0gKGxpbmtzLCBzdHlsZSkgPT4ge1xuICByZXR1cm4gbGlua3MubWFwKCAobGluaywgaSkgPT4ge1xuICAgIHJldHVybiBsaW5rLnR5cGUgPT09ICdlbWFpbCdcbiAgICAgID8gPGEga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9eyBsaW5rLnVybCB9PnsgbGluay5uYW1lIH08L2E+XG4gICAgICA6IDxMaW5rIGtleT17aX0gaHJlZj17IGxpbmsudXJsIH0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57IGxpbmsubmFtZSB9PC9hPlxuICAgICAgICA8L0xpbms+XG4gIH0pXG59XG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZS5jb21wb25lbnR9PlxuICAgIHtyZW5kZXJMaW5rcyhwcm9wcy5saW5rcywgcHJvcHMuc3R5bGUpfVxuICA8L2Rpdj5cblxuTWVudS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IE1lbnVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTWVudS5qcyIsImNvbnN0IHNvY2lhbHMgPSBbXG4gIHtcbiAgICBcIm5hbWVcIjogXCJMaW5rZWRJblwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2d1aWxsYXVtZWtvbGx5L1wiLFxuICAgIFwidHlwZVwiOiBcInVybFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJHaXRodWJcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ndWlsbGF1bWVrb1wiLFxuICAgIFwidHlwZVwiOiBcInVybFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJndWlsbGF1bWUua29sbHlbYXRdZ21haWwuY29tXCIsXG4gICAgXCJ1cmxcIjogXCJtYWlsdG86Z3VpbGxhdW1lLmtvbGx5QGdtYWlsLmNvbVwiLFxuICAgIFwidHlwZVwiOiBcImVtYWlsXCJcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgc29jaWFscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGEvc29jaWFscy5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdHlwZTogICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZTogIFByb3BUeXBlcy5vYmplY3QsXG59XG5cbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT5cbiAgPGlucHV0IHR5cGU9e3Byb3BzLnR5cGV9IHZhbHVlPXtwcm9wcy52YWx1ZX0gY2xhc3NOYW1lPXtjc3MoYnV0dG9uLCBwcm9wcy5zdHlsZSl9IC8+XG5cbmNvbnN0IGJ1dHRvbiA9IGNzcyh7XG4gIGNvbG9yOiAnIzAwMCcsXG4gIGZsb2F0OiAnbGVmdCcsXG4gIHBhZGRpbmc6ICcxNXB4IDVweCcsXG4gIGJvcmRlcjogJzRweCBzb2xpZCAjZmZmJyxcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgbGV0dGVyU3BhY2luZzogJzAuMTJlbScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGZvbnRTaXplOiAnMS4zZW0nLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIE1velRyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICBPVHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIE1zVHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIHRyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gIH1cbn0pXG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9CdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuaW1wb3J0IHsgdGhlbWUsIF9idXR0b24gfSBmcm9tICcuL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBzZW5kVG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuY29uc3Qgc2VuZFRvQWRkcmVzcyA9IChlbWFpbCkgPT4gXCJodHRwczovL2Zvcm1zcHJlZS5pby9cIiArIGVtYWlsXG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGZvcm1ibG9jaywgcHJvcHMuc3R5bGUpfT5cbiAgICA8aDEgY2xhc3NOYW1lPXt0aXRsZX0+Q09OVEFDVCBNRTwvaDE+XG4gICAgPGZvcm0gYWN0aW9uPXtzZW5kVG9BZGRyZXNzKHByb3BzLnNlbmRUbyl9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgc3R5bGU9e25hbWV9IC8+XG4gICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgc3R5bGU9e2VtYWlsfSAvPlxuICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBzdHlsZT17c3ViamVjdH0gLz5cbiAgICAgIDxUZXh0QXJlYSBuYW1lPVwibWVzc2FnZVwiIHN0eWxlPXttZXNzYWdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX25leHRcIiB2YWx1ZT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiIC8+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiBzdHlsZT17X2J1dHRvbn0gLz5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuXG5jb25zdCBmb3JtYmxvY2sgPSBjc3Moe1xuICBwYWRkaW5nOiAnMmVtJyxcbiAgd2lkdGg6ICc4MCUnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMmVtJyxcbiAgICB3aWR0aDogJzgwJScsXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgcGFkZGluZzogJzFlbScsXG4gICAgd2lkdGg6ICc5MCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9XG59KVxuXG5jb25zdCB0aXRsZSA9IGNzcyh7XG4gIGZvbnRTaXplOiAnNDAwJScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBmb250U2l6ZTogJzIwMCUnLCB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzogeyBmb250U2l6ZTogJzIwMCUnLCB9XG59KVxuXG5jb25zdCBuYW1lID0gY3NzKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJyB9KVxuY29uc3QgZW1haWwgPSBjc3MoeyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc0NSUnLCBtYXJnaW5SaWdodDogJzEwJScgfSlcbmNvbnN0IHN1YmplY3QgPSBjc3MoeyB3aWR0aDogJzEwMCUnIH0pXG5jb25zdCBtZXNzYWdlID0gY3NzKHsgZmxvYXQ6ICdub25lJyB9KVxuXG5Db250YWN0Rm9ybS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB0eXBlOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlfT5cbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT17cHJvcHMudHlwZX1cbiAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dH1cbiAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgICAgICByZXF1aXJlZCAvPlxuICA8L2Rpdj5cblxuY29uc3QgaW5wdXQgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICNmZmYnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9XG59KVxuXG5JbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0lucHV0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBuYW1lOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2Vob2xkZXI6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbHM6ICAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgcmF3czogICAgICAgICBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IFRleHRBcmVhID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGV9PlxuICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT48L2xhYmVsPlxuICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e3RleHRhcmVhfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlciA/IHByb3BzLnBsYWNlaG9sZGVyIDogcHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgY29scz17cHJvcHMuY29scyA/IHByb3BzLmNvbHMgOiAzMH1cbiAgICAgICAgICAgICAgcm93cz17cHJvcHMucm93cyA/IHByb3BzLnJvd3MgOiA1fVxuICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICA8L3RleHRhcmVhPlxuICA8L2Rpdj5cblxuY29uc3QgdGV4dGFyZWEgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICNmZmYnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgV2Via2l0Qm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE1vekJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBNc0JveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBPQm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICBNc1RyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE9UcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICBoZWlnaHQ6ICcxNTBweCcsXG4gIHJlc2l6ZTogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBsaW5lSGVpZ2h0OiAnMTUwJScsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gICc6Zm9jdXMnOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgfVxufSlcblxuVGV4dEFyZWEucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9UZXh0QXJlYS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHNvY2lhbHM6IHNvY2lhbHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT1cIkd1aWxsYXVtZSBLb2xseSB8IENvbnRhY3RcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIENvbnRhY3QgTWUgaGVyZS5cIiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NzcyhoYWxmc2lkZSwgbGVmdCApfT5cbiAgICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVzdW1lfT5cbiAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB3YXRjaCBteSZuYnNwO1xuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj48YSBjbGFzc05hbWU9e190YWd9Pm9ubGluZSByZXN1bWU8L2E+PC9MaW5rPiBvciZuYnNwO1xuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBjbGFzc05hbWU9e190YWd9PmRvd25sb2FkIGl0PC9hPjwvTGluaz4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MoaGFsZnNpZGUsIHJpZ2h0KX0+XG4gICAgICAgICAgPENvbnRhY3RGb3JtIHNlbmRUbz1cImd1aWxsYXVtZS5rb2xseUBnbWFpbC5jb21cIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBTT0NJQUwgQU5EIFJFU1VNRSBsaW5rc1xuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgdG9wOiAnY2FsYyg4MHB4IC8gMiknLCB9XG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAzJSAwIDAnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBtYXJnaW46ICc1cHggYXV0bycsXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZXN1bWUgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdG9wOiAnY2FsYyg1MCUgKyAyMHB4KScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nLFxuICAgIHRvcDogJzcwcHgnLFxuICB9XG59KVxuXG4vLyBDT05UQUlORVIgU0VUVElOR1NcbmNvbnN0IGhhbGZzaWRlID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgd2lkdGg6ICcxMDAlJyB9XG59KVxuXG5jb25zdCBsZWZ0ID0gY3NzKHtcbiAgbGVmdDogJzAnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzogeyBoZWlnaHQ6ICcxNjBweCcsIH1cbn0pXG5cbmNvbnN0IHJpZ2h0ID0gY3NzKHtcbiAgcmlnaHQ6ICcwJyxcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIHpJbmRleDogJzk5OScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICB0b3A6ICdjYWxjKDE2MHB4ICsgMjBweCknLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbnRhY3QuanMiXSwic291cmNlUm9vdCI6IiJ9