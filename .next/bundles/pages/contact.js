module.exports =
webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	module.exports = __webpack_require__(155);


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

	var classof   = __webpack_require__(34)
	  , ITERATOR  = __webpack_require__(4)('iterator')
	  , Iterators = __webpack_require__(7);
	module.exports = __webpack_require__(2).getIteratorMethod = function(it){
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
	
	var emptyFunction = __webpack_require__(47);
	
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
	
	var _camelizeStyleName = __webpack_require__(46);
	
	var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);
	
	var _dangerousStyleValue = __webpack_require__(52);
	
	var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);
	
	var _hyphenateStyleName = __webpack_require__(49);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _memoizeStringOnly = __webpack_require__(50);
	
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
	
	var _sheet = __webpack_require__(57);
	
	var _CSSPropertyOperations = __webpack_require__(11);
	
	var _clean = __webpack_require__(53);
	
	var _clean2 = _interopRequireDefault(_clean);
	
	var _plugins = __webpack_require__(56);
	
	var _hash = __webpack_require__(54);
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(75);
	
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

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

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(27);
	
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	__webpack_require__(43);
	module.exports = __webpack_require__(2).Array.from;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	__webpack_require__(22);
	module.exports = __webpack_require__(42);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	module.exports = __webpack_require__(2).Object.keys;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(71)
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(8)
	  , createDesc      = __webpack_require__(25);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(7)
	  , ITERATOR   = __webpack_require__(4)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(5);
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
/* 40 */
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
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(5)
	  , get      = __webpack_require__(9);
	module.exports = __webpack_require__(2).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(72)
	  , $export        = __webpack_require__(14)
	  , toObject       = __webpack_require__(15)
	  , call           = __webpack_require__(39)
	  , isArrayIter    = __webpack_require__(38)
	  , toLength       = __webpack_require__(79)
	  , createProperty = __webpack_require__(35)
	  , getIterFn      = __webpack_require__(9);
	
	$export($export.S + $export.F * !__webpack_require__(40)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(15)
	  , $keys    = __webpack_require__(24);
	
	__webpack_require__(78)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 45 */
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
/* 46 */
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
	
	var camelize = __webpack_require__(45);
	
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
	
	var hyphenate = __webpack_require__(48);
	
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _CSSProperty = __webpack_require__(51);
	
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
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
	
	var prefixAll = __webpack_require__(55);
	
	function prefixes(_ref) {
	  var style = _ref.style,
	      rest = _objectWithoutProperties(_ref, ['style']);
	
	  return _extends({ style: prefixAll(style) }, rest);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  XmlEntities: __webpack_require__(60),
	  Html4Entities: __webpack_require__(59),
	  Html5Entities: __webpack_require__(13),
	  AllHtmlEntities: __webpack_require__(13)
	};


/***/ },
/* 59 */
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
/* 60 */
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(30);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _keys = __webpack_require__(29);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(28);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _clientOverlayFalseReloadTrue = __webpack_require__(68);
	
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _head = __webpack_require__(84);
	
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
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(63);
	exports.encode = exports.stringify = __webpack_require__(64);


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(26)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 67 */
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
	
	var ansiHTML = __webpack_require__(74);
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
	
	var Entities = __webpack_require__(58).AllHtmlEntities;
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
/* 68 */
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
	  var querystring = __webpack_require__(65);
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
	  var strip = __webpack_require__(66);
	
	  var overlay;
	  if (typeof document !== 'undefined' && options.overlay) {
	    overlay = __webpack_require__(67);
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
	
	var processUpdate = __webpack_require__(69);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, "?overlay=false&reload=true", __webpack_require__(70)(module)))

/***/ },
/* 69 */
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
/* 70 */
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
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(16);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(17);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(18);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(21);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(20);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactParticlesJs = __webpack_require__(83);
	
	var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);
	
	var _particles = __webpack_require__(82);
	
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
/* 82 */
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
	    detect_on: "canvas",
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
	  retina_detect: true
	};
	
	exports.default = particles;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvcGFydGljbGVzLmpzIl0sIm5hbWVzIjpbInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwid2lkdGgiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwicmV0aW5hX2RldGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxZQUFZO0FBQ2hCQSxhQUFXO0FBQ1BDLFlBQVE7QUFDTkMsYUFBTyxFQUREO0FBRU5DLGVBQVM7QUFDUEMsZ0JBQVEsSUFERDtBQUVQQyxvQkFBWTtBQUZMO0FBRkgsS0FERDtBQVFQQyxXQUFPO0FBQ0xKLGFBQU87QUFERixLQVJBO0FBV1BLLGFBQVM7QUFDUEwsYUFBTyxHQURBO0FBRVBNLGNBQVEsS0FGRDtBQUdQQyxZQUFNO0FBQ0pMLGdCQUFRLEtBREo7QUFFSk0sZUFBTyxDQUZIO0FBR0pDLHFCQUFhLEdBSFQ7QUFJSkMsY0FBTTtBQUpGO0FBSEMsS0FYRjtBQXFCUEMsVUFBTTtBQUNKWCxhQUFPLENBREg7QUFFSk0sY0FBUSxJQUZKO0FBR0pDLFlBQU07QUFDSkwsZ0JBQVEsS0FESjtBQUVKTSxlQUFPLEVBRkg7QUFHSkksa0JBQVUsR0FITjtBQUlKRixjQUFNO0FBSkY7QUFIRixLQXJCQztBQStCUEcsaUJBQWE7QUFDWFgsY0FBUSxJQURHO0FBRVhZLGdCQUFVLEdBRkM7QUFHWFYsYUFBTyxNQUhJO0FBSVhDLGVBQVMsR0FKRTtBQUtYVSxhQUFPO0FBTEksS0EvQk47QUFzQ1BDLFVBQU07QUFDSmQsY0FBUSxJQURKO0FBRUpNLGFBQU8sQ0FGSDtBQUdKUyxpQkFBVyxNQUhQO0FBSUpYLGNBQVEsS0FKSjtBQUtKWSxnQkFBVSxLQUxOO0FBTUpDLGdCQUFVLEtBTk47QUFPSkMsY0FBUSxLQVBKO0FBUUpDLGVBQVM7QUFDUG5CLGdCQUFRLEtBREQ7QUFFUG9CLGlCQUFTLEdBRkY7QUFHUEMsaUJBQVM7QUFIRjtBQVJMO0FBdENDLEdBREs7QUFzRGRDLGlCQUFlO0FBQ2JDLGVBQVcsUUFERTtBQUViQyxZQUFRO0FBQ1JDLGVBQVM7QUFDUHpCLGdCQUFRLElBREQ7QUFFUDBCLGNBQU07QUFGQyxPQUREO0FBS1JDLGVBQVM7QUFDUDNCLGdCQUFRLElBREQ7QUFFUDBCLGNBQU07QUFGQyxPQUxEO0FBU1JFLGNBQVE7QUFUQSxLQUZLO0FBYWZDLFdBQU87QUFDTEMsWUFBTTtBQUNKbEIsa0JBQVUsR0FETjtBQUVKRCxxQkFBYTtBQUNYUixtQkFBUztBQURFO0FBRlQsT0FERDtBQU9MNEIsY0FBUTtBQUNObkIsa0JBQVUsR0FESjtBQUVOSCxjQUFNLEVBRkE7QUFHTnVCLGtCQUFVLENBSEo7QUFJTjdCLGlCQUFTLENBSkg7QUFLTkcsZUFBTztBQUxELE9BUEg7QUFjTDJCLGVBQVM7QUFDUHJCLGtCQUFVLEdBREg7QUFFUG9CLGtCQUFVO0FBRkgsT0FkSjtBQWtCTEUsWUFBTTtBQUNKQyxzQkFBYztBQURWLE9BbEJEO0FBcUJMQyxjQUFRO0FBQ05ELHNCQUFjO0FBRFI7QUFyQkg7QUFiUSxHQXRERDtBQTZGaEJFLGlCQUFlO0FBN0ZDLENBQWxCOztrQkFnR2V6QyxTIiwiZmlsZSI6InBhcnRpY2xlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJ0aWNsZXMgPSB7XG4gIHBhcnRpY2xlczoge1xuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHZhbHVlOiA4MCxcbiAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHZhbHVlOiBcIiMwMDBcIlxuICAgICAgfSxcbiAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAuMSxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgICAgc2l6ZV9taW46IDAuMSxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBkaXN0YW5jZTogMTUwLFxuICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDYsXG4gICAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgb3V0X21vZGU6IFwib3V0XCIsXG4gICAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcbiAgICAgICAgICByb3RhdGVZOiAxMjAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgIGRldGVjdF9vbjogXCJjYW52YXNcIixcbiAgICAgIGV2ZW50czoge1xuICAgICAgb25ob3Zlcjoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG1vZGU6IFwicmVwdWxzZVwiXG4gICAgICB9LFxuICAgICAgb25jbGljazoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG1vZGU6IFwicHVzaFwiXG4gICAgICB9LFxuICAgICAgcmVzaXplOiB0cnVlXG4gICAgfSxcbiAgICBtb2Rlczoge1xuICAgICAgZ3JhYjoge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1YmJsZToge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBzaXplOiA0MCxcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIG9wYWNpdHk6IDgsXG4gICAgICAgIHNwZWVkOiAzXG4gICAgICB9LFxuICAgICAgcmVwdWxzZToge1xuICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICB9LFxuICAgICAgcHVzaDoge1xuICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXRpbmFfZGV0ZWN0OiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnRpY2xlcztcbiJdfQ==

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	!function(e, t) {
	     true ? module.exports = t(__webpack_require__(3)) : "function" == typeof define && define.amd ? define([ "react" ], t) : "object" == typeof exports ? exports.Particles = t(require("react")) : e.Particles = t(e.React);
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
/* 84 */,
/* 85 */,
/* 86 */,
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
/* 101 */,
/* 102 */,
/* 103 */,
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
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(19);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _css;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css2 = __webpack_require__(6);
	
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
	      placeholder: props.placeholder ? props.placeholder : props.name
	    })
	  );
	};
	
	var input = (0, _css3.default)((_css = {
	  font: 'inherit',
	  margin: '0',
	  lineHeight: 'normal',
	  background: 'none',
	  border: 'none',
	  borderBottom: 'solid 2px #2b2b2b',
	  fontSize: '1em'
	}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'WebkitBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MozBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MsBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'OBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'boxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'WebkitTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MozTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MsTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'OTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'transition', 'all 0.3s'), (0, _defineProperty3.default)(_css, ':focus', {
	  outline: 'none',
	  padding: '0 0 0.875em 0'
	}), _css));
	
	Input.propTypes = propTypes;
	exports.default = Input;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJpbnB1dCIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwib3V0bGluZSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLFFBQWMsaUJBQVVGLE1BQVYsQ0FBaUJDLFVBRmY7QUFHaEJFLGVBQWMsaUJBQVVILE1BSFI7QUFJaEJJLFNBQWMsaUJBQVVDO0FBSlIsQ0FBbEI7O0FBT0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1ILEtBQXRCO0FBQ0UsNkNBQU8sU0FBU0csTUFBTUwsSUFBdEIsR0FERjtBQUVFLDZDQUFRLE1BQU1LLE1BQU1SLElBQXBCO0FBQ1EsWUFBTVEsTUFBTUwsSUFEcEI7QUFFUSxpQkFBV00sS0FGbkI7QUFHUSxtQkFBYUQsTUFBTUosV0FBTixHQUFvQkksTUFBTUosV0FBMUIsR0FBd0NJLE1BQU1MO0FBSG5FO0FBRkYsR0FEWTtBQUFBLENBQWQ7O0FBVUEsSUFBTU0sUUFBUTtBQUNaQyxRQUFNLFNBRE07QUFFWkMsVUFBUSxHQUZJO0FBR1pDLGNBQVksUUFIQTtBQUlaQyxjQUFZLE1BSkE7QUFLWkMsVUFBUSxNQUxJO0FBTVpDLGdCQUFjLG1CQU5GO0FBT1pDLFlBQVU7QUFQRSxpREFRSixpQkFSSSxrREFTSCxlQVRHLGdEQVVMLE1BVkssMERBV0ssWUFYTCx1REFZRSxZQVpGLHNEQWFDLFlBYkQscURBY0EsWUFkQSxvREFlRCxZQWZDLDJEQWdCTSxVQWhCTix3REFpQkcsVUFqQkgsdURBa0JFLFVBbEJGLHNEQW1CQyxVQW5CRCxxREFvQkEsVUFwQkEsdUNBcUJaLFFBckJZLEVBcUJGO0FBQ1JDLFdBQVMsTUFERDtBQUVSQyxXQUFTO0FBRkQsQ0FyQkUsU0FBZDs7QUEyQkFYLE1BQU1SLFNBQU4sR0FBa0JBLFNBQWxCO2tCQUNlUSxLIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdHlwZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuY29uc3QgSW5wdXQgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPGlucHV0ICB0eXBlPXtwcm9wcy50eXBlfVxuICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IHByb3BzLm5hbWV9XG4gICAgLz5cbiAgPC9kaXY+XG5cbmNvbnN0IGlucHV0ID0gY3NzKHtcbiAgZm9udDogJ2luaGVyaXQnLFxuICBtYXJnaW46ICcwJyxcbiAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCAjMmIyYjJiJyxcbiAgZm9udFNpemU6ICcxZW0nLFxuICBtYXJnaW46ICcwZW0gMCAxLjg3NWVtIDAnLFxuICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIFdlYmtpdEJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBNb3pCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgTXNCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgT0JveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgTW96VHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICBPVHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9XG59KVxuXG5JbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iXX0=

/***/ },
/* 146 */,
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(19);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _css;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css2 = __webpack_require__(6);
	
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
	  borderBottom: 'solid 2px #2b2b2b',
	  fontSize: '1em'
	}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'WebkitBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MozBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MsBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'OBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'boxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'WebkitTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MozTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MsTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'OTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'transition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'height', '150px'), (0, _defineProperty3.default)(_css, 'resize', 'none'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'lineHeight', '150%'), (0, _defineProperty3.default)(_css, 'overflow', 'auto'), (0, _defineProperty3.default)(_css, ':focus', {
	  outline: 'none',
	  padding: '0 0 0.875em 0'
	}), _css));
	
	TextArea.propTypes = propTypes;
	exports.default = TextArea;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJhd3MiLCJUZXh0QXJlYSIsInByb3BzIiwidGV4dGFyZWEiLCJyb3dzIiwiZm9udCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJvdXRsaW5lIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsUUFBYyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEZjtBQUVoQkMsZUFBYyxpQkFBVUYsTUFGUjtBQUdoQkcsU0FBYyxpQkFBVUMsTUFIUjtBQUloQkMsUUFBYyxpQkFBVUMsTUFKUjtBQUtoQkMsUUFBYyxpQkFBVUQ7QUFMUixDQUFsQjs7QUFRQSxJQUFNRSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQUssV0FBV0EsTUFBTU4sS0FBdEI7QUFDRSw2Q0FBTyxTQUFTTSxNQUFNVixJQUF0QixHQURGO0FBRUUsZ0RBQVUsV0FBV1csUUFBckI7QUFDVSxZQUFLLE1BRGY7QUFFVSxZQUFNRCxNQUFNVixJQUZ0QjtBQUdVLG1CQUFhVSxNQUFNUCxXQUFOLEdBQW9CTyxNQUFNUCxXQUExQixHQUF3Q08sTUFBTVYsSUFIckU7QUFJVSxZQUFNVSxNQUFNSixJQUFOLEdBQWFJLE1BQU1KLElBQW5CLEdBQTBCLEVBSjFDO0FBS1UsWUFBTUksTUFBTUUsSUFBTixHQUFhRixNQUFNRSxJQUFuQixHQUEwQixDQUwxQztBQU1VLG9CQU5WO0FBRkYsR0FEZTtBQUFBLENBQWpCOztBQWFBLElBQU1ELFdBQVc7QUFDZkUsUUFBTSxTQURTO0FBRWZDLFVBQVEsR0FGTztBQUdmQyxjQUFZLFFBSEc7QUFJZkMsY0FBWSxNQUpHO0FBS2ZDLFVBQVEsTUFMTztBQU1mQyxnQkFBYyxtQkFOQztBQU9mQyxZQUFVO0FBUEssaURBUVAsaUJBUk8sa0RBU04sZUFUTSxnREFVUixNQVZRLDBEQVdFLFlBWEYsdURBWUQsWUFaQyxzREFhRixZQWJFLHFEQWNILFlBZEcsb0RBZUosWUFmSSwyREFnQkcsVUFoQkgsd0RBaUJBLFVBakJBLHVEQWtCRCxVQWxCQyxzREFtQkYsVUFuQkUscURBb0JILFVBcEJHLGlEQXFCUCxPQXJCTyxpREFzQlAsTUF0Qk8sZ0RBdUJSLE1BdkJRLHFEQXdCSCxNQXhCRyxtREF5QkwsTUF6QkssdUNBMEJmLFFBMUJlLEVBMEJMO0FBQ1JDLFdBQVMsTUFERDtBQUVSQyxXQUFTO0FBRkQsQ0ExQkssU0FBakI7O0FBZ0NBWixTQUFTVixTQUFULEdBQXFCQSxTQUFyQjtrQkFDZVUsUSIsImZpbGUiOiJUZXh0QXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sczogICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICByYXdzOiAgICAgICAgIFByb3BUeXBlcy5udW1iZXJcbn1cblxuY29uc3QgVGV4dEFyZWEgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIGNsYXNzTmFtZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICBjb2xzPXtwcm9wcy5jb2xzID8gcHJvcHMuY29scyA6IDMwfVxuICAgICAgICAgICAgICByb3dzPXtwcm9wcy5yb3dzID8gcHJvcHMucm93cyA6IDV9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgIDwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuXG5jb25zdCB0ZXh0YXJlYSA9IGNzcyh7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWFyZ2luOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJCb3R0b206ICdzb2xpZCAycHggIzJiMmIyYicsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcbiAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBXZWJraXRCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgTW96Qm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE1zQm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE9Cb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE1velRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE1zVHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIGhlaWdodDogJzE1MHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGxpbmVIZWlnaHQ6ICcxNTAlJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9XG59KVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG4iXX0=

/***/ },
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(19);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _css;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css2 = __webpack_require__(6);
	
	var _css3 = _interopRequireDefault(_css2);
	
	var _glamor = __webpack_require__(12);
	
	var _HeadBloc = __webpack_require__(62);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _FullBackground = __webpack_require__(81);
	
	var _FullBackground2 = _interopRequireDefault(_FullBackground);
	
	var _Input = __webpack_require__(145);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _TextArea = __webpack_require__(147);
	
	var _TextArea2 = _interopRequireDefault(_TextArea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    { className: centeredbox },
	    _react2.default.createElement(_HeadBloc2.default, {
	      title: 'Guillaume Kolly | Contact',
	      description: 'Guillaume Kolly | Full stack developer living in Lyon. Contact Me here.'
	    }),
	    _react2.default.createElement(_FullBackground2.default, null),
	    _react2.default.createElement(
	      'div',
	      { className: formblock },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'CONTACT ME'
	      ),
	      _react2.default.createElement(
	        'form',
	        { action: 'https://formspree.io/guillaume.kolly@gmail.com' },
	        _react2.default.createElement(_Input2.default, { type: 'text', name: 'name', style: name }),
	        _react2.default.createElement(_Input2.default, { type: 'email', name: 'email', style: email }),
	        _react2.default.createElement(_Input2.default, { type: 'text', name: 'subject', style: subject }),
	        _react2.default.createElement(_TextArea2.default, { name: 'message', style: message }),
	        _react2.default.createElement('input', { type: 'hidden', name: '_next', value: 'http://localhost:3000' }),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('input', { type: 'submit', value: 'Send' })
	        )
	      )
	    )
	  );
	};
	
	var name = (0, _css3.default)({ float: 'right', width: '45%' });
	var email = (0, _css3.default)({ float: 'right', width: '45%', marginRight: '10%' });
	var subject = (0, _css3.default)({ width: '100%' });
	var message = (0, _css3.default)({ float: 'none' });
	
	var formblock = (0, _css3.default)((_css = {
	  border: 'solid 5px #2b2b2b',
	  margin: '0 auto',
	  MsTextSizeAdjust: '100%',
	  WebkitTextSizeAdjust: '100%',
	  position: 'relative',
	  padding: '2em',
	  width: '30%',
	  textAlign: 'center',
	  zIndex: '1',
	  background: 'transparent',
	  color: '#242424'
	}, (0, _defineProperty3.default)(_css, 'zIndex', '1'), (0, _defineProperty3.default)(_css, 'background', '#fff'), (0, _defineProperty3.default)(_css, '@media(max-width: 1240px)', {
	  padding: '2em',
	  width: '50%'
	}), (0, _defineProperty3.default)(_css, '@media(max-width: 600px)', {
	  padding: '1em',
	  width: '100%'
	}), _css));
	
	var centeredbox = (0, _css3.default)({
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  width: '100vw',
	  height: '100vh'
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiY2VudGVyZWRib3giLCJmb3JtYmxvY2siLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsImZsb2F0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImJvcmRlciIsIm1hcmdpbiIsIk1zVGV4dFNpemVBZGp1c3QiLCJXZWJraXRUZXh0U2l6ZUFkanVzdCIsInBvc2l0aW9uIiwicGFkZGluZyIsInRleHRBbGlnbiIsInpJbmRleCIsImJhY2tncm91bmQiLCJjb2xvciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBSyxXQUFXQSxXQUFoQjtBQUNFO0FBQ0UsYUFBTSwyQkFEUjtBQUVFLG1CQUFZO0FBRmQsTUFERjtBQUtFLGlFQUxGO0FBTUU7QUFBQTtBQUFBLFFBQUssV0FBV0MsU0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBTSxRQUFPLGdEQUFiO0FBQ0UseURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsT0FBT0MsSUFBdEMsR0FERjtBQUVFLHlEQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE9BQXpCLEVBQWlDLE9BQU9DLEtBQXhDLEdBRkY7QUFHRSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxTQUF4QixFQUFrQyxPQUFPQyxPQUF6QyxHQUhGO0FBSUUsNERBQVUsTUFBSyxTQUFmLEVBQXlCLE9BQU9DLE9BQWhDLEdBSkY7QUFLRSxpREFBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxPQUExQixFQUFrQyxPQUFNLHVCQUF4QyxHQUxGO0FBTUU7QUFBQTtBQUFBO0FBQ0UsbURBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sTUFBM0I7QUFERjtBQU5GO0FBRkY7QUFORixHQURhO0FBQUEsQzs7QUFzQmYsSUFBTUgsT0FBTyxtQkFBSSxFQUFFSSxPQUFPLE9BQVQsRUFBa0JDLE9BQU8sS0FBekIsRUFBSixDQUFiO0FBQ0EsSUFBTUosUUFBUSxtQkFBSSxFQUFFRyxPQUFPLE9BQVQsRUFBa0JDLE9BQU8sS0FBekIsRUFBZ0NDLGFBQWEsS0FBN0MsRUFBSixDQUFkO0FBQ0EsSUFBTUosVUFBVSxtQkFBSSxFQUFFRyxPQUFPLE1BQVQsRUFBSixDQUFoQjtBQUNBLElBQU1GLFVBQVUsbUJBQUksRUFBRUMsT0FBTyxNQUFULEVBQUosQ0FBaEI7O0FBRUEsSUFBTUwsWUFBWTtBQUNoQlEsVUFBUSxtQkFEUTtBQUVoQkMsVUFBUSxRQUZRO0FBR2hCQyxvQkFBa0IsTUFIRjtBQUloQkMsd0JBQXNCLE1BSk47QUFLaEJDLFlBQVUsVUFMTTtBQU1oQkMsV0FBUyxLQU5PO0FBT2hCUCxTQUFPLEtBUFM7QUFRaEJRLGFBQVcsUUFSSztBQVNoQkMsVUFBUSxHQVRRO0FBVWhCQyxjQUFZLGFBVkk7QUFXaEJDLFNBQU87QUFYUyxpREFZUixHQVpRLHFEQWFKLE1BYkksdUNBY2hCLDJCQWRnQixFQWNhO0FBQzNCSixXQUFTLEtBRGtCO0FBRTNCUCxTQUFPO0FBRm9CLENBZGIsdUNBa0JoQiwwQkFsQmdCLEVBa0JZO0FBQzFCTyxXQUFTLEtBRGlCO0FBRTFCUCxTQUFPO0FBRm1CLENBbEJaLFNBQWxCOztBQXdCQSxJQUFNUCxjQUFjLG1CQUFJO0FBQ3RCbUIsV0FBUyxNQURhO0FBRXRCQyxjQUFZLFFBRlU7QUFHdEJDLGtCQUFnQixRQUhNO0FBSXRCZCxTQUFPLE9BSmU7QUFLdEJlLFVBQVE7QUFMYyxDQUFKLENBQXBCIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlLCBtZXJnZSB9IGZyb20gJ2dsYW1vcidcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL1RleHRBcmVhJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWRib3h9PlxuICAgIDxIZWFkQmxvY1xuICAgICAgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHkgfCBDb250YWN0XCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIENvbnRhY3QgTWUgaGVyZS5cIlxuICAgIC8+XG4gICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1ibG9ja30+XG4gICAgICA8aDE+Q09OVEFDVCBNRTwvaDE+XG4gICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9ndWlsbGF1bWUua29sbHlAZ21haWwuY29tXCI+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgc3R5bGU9e25hbWV9Lz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHN0eWxlPXtlbWFpbH0vPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIHN0eWxlPXtzdWJqZWN0fS8+XG4gICAgICAgIDxUZXh0QXJlYSBuYW1lPVwibWVzc2FnZVwiIHN0eWxlPXttZXNzYWdlfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbmV4dFwiIHZhbHVlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5jb25zdCBuYW1lID0gY3NzKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJyB9KVxuY29uc3QgZW1haWwgPSBjc3MoeyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc0NSUnLCBtYXJnaW5SaWdodDogJzEwJScgfSlcbmNvbnN0IHN1YmplY3QgPSBjc3MoeyB3aWR0aDogJzEwMCUnIH0pXG5jb25zdCBtZXNzYWdlID0gY3NzKHsgZmxvYXQ6ICdub25lJyB9KVxuXG5jb25zdCBmb3JtYmxvY2sgPSBjc3Moe1xuICBib3JkZXI6ICdzb2xpZCA1cHggIzJiMmIyYicsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIE1zVGV4dFNpemVBZGp1c3Q6ICcxMDAlJyxcbiAgV2Via2l0VGV4dFNpemVBZGp1c3Q6ICcxMDAlJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHBhZGRpbmc6ICcyZW0nLFxuICB3aWR0aDogJzMwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHpJbmRleDogJzEnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJyMyNDI0MjQnLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMmVtJyxcbiAgICB3aWR0aDogJzUwJScsXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgcGFkZGluZzogJzFlbScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfVxufSlcblxuY29uc3QgY2VudGVyZWRib3ggPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG59KVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzVhYTdlNzYiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi93YXJuaW5nLmpzPzVhYTdlNzYiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9pbmRleC5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9pbmRleC5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDUtZW50aXRpZXMuanM/NWFhN2U3NiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vYW5zaS1yZWdleC9pbmRleC5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanM/NWFhN2U3NiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanM/NWFhN2U3NiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzPzVhYTdlNzYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzPzVhYTdlNzYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanM/NWFhN2U3NiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/NWFhN2U3NiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanM/NWFhN2U3NiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzPzVhYTdlNzYiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/NWFhN2U3NiIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2NhbWVsaXplLmpzPzVhYTdlNzYiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZS5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvaHlwaGVuYXRlLmpzPzVhYTdlNzYiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUuanM/NWFhN2U3NiIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5LmpzPzVhYTdlNzYiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9DU1NQcm9wZXJ0eS5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvZGFuZ2Vyb3VzU3R5bGVWYWx1ZS5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9jbGVhbi5qcz81YWE3ZTc2Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9oYXNoLmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2luZGV4LmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL3BsdWdpbnMuanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvc2hlZXQuanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvaW5kZXguanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLy4vfi9odG1sLWVudGl0aWVzL2xpYi94bWwtZW50aXRpZXMuanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYy5qcz81ZTk2NDYzIiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHJpcC1hbnNpL2luZGV4LmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9jbGllbnQtb3ZlcmxheS5qcz81ZTk2NDYzIiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9wcm9jZXNzLXVwZGF0ZS5qcz81ZTk2NDYzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kLmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9wYXJ0aWNsZXMuanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXBhcnRpY2xlcy1qcy9saWIvcGFydGljbGVzLmpzPzVlOTY0NjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnB1dC5qcz81ZTk2NDYzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dEFyZWEuanM/NWU5NjQ2MyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzVlOTY0NjMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidGl0bGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJIZWFkQmxvYyIsInByb3BzIiwiZ2xvYmFsIiwicGFkZGluZyIsIm1hcmdpbiIsImJvcmRlciIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0U2hhZG93IiwiV2Via2l0Rm9udFNtb290aGluZyIsIk1vek9zeEZvbnRTbW9vdGhpbmciLCJGdWxsQmFja2dyb3VuZCIsInN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJwYXJ0aWNsZXMiLCJDb21wb25lbnQiLCJvYmplY3QiLCJudW1iZXIiLCJ2YWx1ZSIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInB1c2giLCJwYXJ0aWNsZXNfbmIiLCJyZW1vdmUiLCJyZXRpbmFfZGV0ZWN0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIklucHV0IiwiaW5wdXQiLCJmb250IiwiYmFja2dyb3VuZCIsImJvcmRlckJvdHRvbSIsIm91dGxpbmUiLCJjb2xzIiwicmF3cyIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJyb3dzIiwiY2VudGVyZWRib3giLCJmb3JtYmxvY2siLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwiZmxvYXQiLCJtYXJnaW5SaWdodCIsIk1zVGV4dFNpemVBZGp1c3QiLCJXZWJraXRUZXh0U2l6ZUFkanVzdCIsInRleHRBbGlnbiIsInpJbmRleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7OztBQ25MdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlGQUF3RixhQUFhO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7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TDtBQUNBO0FBQ0EsTUFBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBeUM7QUFDekM7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsOENBQTZDO0FBQzdDOztBQUVBLHdCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsUUFBTztBQUNQLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsWUFBWSxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHNCQUFzQixFQUFFO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkZBQTBGOztBQUUxRjtBQUNBLHdCQUF1QjtBQUN2QixxQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7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Q0EsS0FBTUgsVUFBVSxtQkFBSSxFQUFFaEUsT0FBTyxNQUFULEVBQUosQ0FBaEI7QUFDQSxLQUFNaUUsVUFBVSxtQkFBSSxFQUFFQyxPQUFPLE1BQVQsRUFBSixDQUFoQjs7QUFFQSxLQUFNSixZQUFZO0FBQ2hCM0UsV0FBUSxtQkFEUTtBQUVoQkQsV0FBUSxRQUZRO0FBR2hCa0YscUJBQWtCLE1BSEY7QUFJaEJDLHlCQUFzQixNQUpOO0FBS2hCdEUsYUFBVSxVQUxNO0FBTWhCZCxZQUFTLEtBTk87QUFPaEJlLFVBQU8sS0FQUztBQVFoQnNFLGNBQVcsUUFSSztBQVNoQkMsV0FBUSxHQVRRO0FBVWhCbEIsZUFBWSxhQVZJO0FBV2hCekMsVUFBTztBQVhTLGtEQVlSLEdBWlEscURBYUosTUFiSSx1Q0FjaEIsMkJBZGdCLEVBY2E7QUFDM0IzQixZQUFTLEtBRGtCO0FBRTNCZSxVQUFPO0FBRm9CLEVBZGIsdUNBa0JoQiwwQkFsQmdCLEVBa0JZO0FBQzFCZixZQUFTLEtBRGlCO0FBRTFCZSxVQUFPO0FBRm1CLEVBbEJaLFNBQWxCOztBQXdCQSxLQUFNNkQsY0FBYyxtQkFBSTtBQUN0QlcsWUFBUyxNQURhO0FBRXRCQyxlQUFZLFFBRlU7QUFHdEJDLG1CQUFnQixRQUhNO0FBSXRCMUUsVUFBTyxPQUplO0FBS3RCQyxXQUFRO0FBTGMsRUFBSixDQUFwQiIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCAoeCkge31cbiAgICB9O1xuXG4gICAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wcm9jZXNzU3R5bGVOYW1lID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMgPSBjcmVhdGVNYXJrdXBGb3JTdHlsZXM7XG5cbnZhciBfY2FtZWxpemVTdHlsZU5hbWUgPSByZXF1aXJlKCdmYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZScpO1xuXG52YXIgX2NhbWVsaXplU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplU3R5bGVOYW1lKTtcblxudmFyIF9kYW5nZXJvdXNTdHlsZVZhbHVlID0gcmVxdWlyZSgnLi9kYW5nZXJvdXNTdHlsZVZhbHVlJyk7XG5cbnZhciBfZGFuZ2Vyb3VzU3R5bGVWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYW5nZXJvdXNTdHlsZVZhbHVlKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdmYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUnKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlU3R5bGVOYW1lKTtcblxudmFyIF9tZW1vaXplU3RyaW5nT25seSA9IHJlcXVpcmUoJ2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5Jyk7XG5cbnZhciBfbWVtb2l6ZVN0cmluZ09ubHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVtb2l6ZVN0cmluZ09ubHkpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSBleHBvcnRzLnByb2Nlc3NTdHlsZU5hbWUgPSAoMCwgX21lbW9pemVTdHJpbmdPbmx5Mi5kZWZhdWx0KShfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHByb3ZpZGVzTW9kdWxlIENTU1Byb3BlcnR5T3BlcmF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciB3YXJuVmFsaWRTdHlsZTtcblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vICdtc1RyYW5zZm9ybScgaXMgY29ycmVjdCwgYnV0IHRoZSBvdGhlciBwcmVmaXhlcyBzaG91bGQgYmUgY2FwaXRhbGl6ZWRcbiAgICB2YXIgYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuID0gL14oPzp3ZWJraXR8bW96fG8pW0EtWl0vO1xuXG4gICAgLy8gc3R5bGUgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uXG4gICAgdmFyIGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiA9IC87XFxzKiQvO1xuXG4gICAgdmFyIHdhcm5lZFN0eWxlTmFtZXMgPSB7fTtcbiAgICB2YXIgd2FybmVkU3R5bGVWYWx1ZXMgPSB7fTtcbiAgICB2YXIgd2FybmVkRm9yTmFOVmFsdWUgPSBmYWxzZTtcblxuICAgIHZhciB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lKG5hbWUsIG93bmVyKSB7XG4gICAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1Vuc3VwcG9ydGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JXMnLCBuYW1lLCAoMCwgX2NhbWVsaXplU3R5bGVOYW1lMi5kZWZhdWx0KShuYW1lKSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gICAgfTtcblxuICAgIHZhciB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpIHtcbiAgICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnVW5zdXBwb3J0ZWQgdmVuZG9yLXByZWZpeGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JXMnLCBuYW1lLCBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gICAgfTtcblxuICAgIHZhciB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24gPSBmdW5jdGlvbiB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24obmFtZSwgdmFsdWUsIG93bmVyKSB7XG4gICAgICBpZiAod2FybmVkU3R5bGVWYWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpICYmIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSA9IHRydWU7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1N0eWxlIHByb3BlcnR5IHZhbHVlcyBzaG91bGRuXFwndCBjb250YWluIGEgc2VtaWNvbG9uLiVzICcgKyAnVHJ5IFwiJXM6ICVzXCIgaW5zdGVhZC4nLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpLCBuYW1lLCB2YWx1ZS5yZXBsYWNlKGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiwgJycpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIHdhcm5TdHlsZVZhbHVlSXNOYU4gPSBmdW5jdGlvbiB3YXJuU3R5bGVWYWx1ZUlzTmFOKG5hbWUsIHZhbHVlLCBvd25lcikge1xuICAgICAgaWYgKHdhcm5lZEZvck5hTlZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybmVkRm9yTmFOVmFsdWUgPSB0cnVlO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdgTmFOYCBpcyBhbiBpbnZhbGlkIHZhbHVlIGZvciB0aGUgYCVzYCBjc3Mgc3R5bGUgcHJvcGVydHkuJXMnLCBuYW1lLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrUmVuZGVyTWVzc2FnZSA9IGZ1bmN0aW9uIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikge1xuICAgICAgaWYgKG93bmVyKSB7XG4gICAgICAgIHZhciBuYW1lID0gb3duZXIuZ2V0TmFtZSgpO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiAnIENoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAgICovXG5cbiAgICB3YXJuVmFsaWRTdHlsZSA9IGZ1bmN0aW9uIHdhcm5WYWxpZFN0eWxlKG5hbWUsIHZhbHVlLCBjb21wb25lbnQpIHtcbiAgICAgIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby12YXJcbiAgICAgIHZhciBvd25lciA9IHZvaWQgMDtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgb3duZXIgPSBjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50Ll9vd25lcjtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lKG5hbWUsIG93bmVyKTtcbiAgICAgIH0gZWxzZSBpZiAoYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgICAgd2FybkJhZFZlbmRvcmVkU3R5bGVOYW1lKG5hbWUsIG93bmVyKTtcbiAgICAgIH0gZWxzZSBpZiAoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSwgb3duZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSwgb3duZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG59XG5cbi8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWFwcGluZyBvZiBzdHlsZSBwcm9wZXJ0aWVzIGZvciB1c2UgYXMgaW5saW5lIHN0eWxlczpcbiAgICpcbiAgICogICA+IGNyZWF0ZU1hcmt1cEZvclN0eWxlcyh7d2lkdGg6ICcyMDBweCcsIGhlaWdodDogMH0pXG4gICAqICAgXCJ3aWR0aDoyMDBweDtoZWlnaHQ6MDtcIlxuICAgKlxuICAgKiBVbmRlZmluZWQgdmFsdWVzIGFyZSBpZ25vcmVkIHNvIHRoYXQgZGVjbGFyYXRpdmUgcHJvZ3JhbW1pbmcgaXMgZWFzaWVyLlxuICAgKiBUaGUgcmVzdWx0IHNob3VsZCBiZSBIVE1MLWVzY2FwZWQgYmVmb3JlIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZXNcbiAgICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAqIEByZXR1cm4gez9zdHJpbmd9XG4gICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGVzLCBjb21wb25lbnQpIHtcbiAgdmFyIHNlcmlhbGl6ZWQgPSAnJztcbiAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHN0eWxlcykge1xuICAgIHZhciBpc0N1c3RvbVByb3AgPSBzdHlsZU5hbWUuaW5kZXhPZignLS0nKSA9PT0gMDtcbiAgICBpZiAoIXN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIHN0eWxlVmFsdWUgPSBzdHlsZXNbc3R5bGVOYW1lXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNDdXN0b21Qcm9wKSB7XG4gICAgICB3YXJuVmFsaWRTdHlsZShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGlmIChzdHlsZVZhbHVlICE9IG51bGwpIHtcbiAgICAgIGlmIChpc0N1c3RvbVByb3ApIHtcbiAgICAgICAgc2VyaWFsaXplZCArPSBzdHlsZU5hbWUgKyAnOicgKyBzdHlsZVZhbHVlICsgJzsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZCArPSBwcm9jZXNzU3R5bGVOYW1lKHN0eWxlTmFtZSkgKyAnOic7XG4gICAgICAgIHNlcmlhbGl6ZWQgKz0gKDAsIF9kYW5nZXJvdXNTdHlsZVZhbHVlMi5kZWZhdWx0KShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGNvbXBvbmVudCkgKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzZXJpYWxpemVkIHx8IG51bGw7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbXBvc2UgPSBleHBvcnRzLm1lcmdlID0gZXhwb3J0cy4kID0gZXhwb3J0cy5zdHlsZSA9IGV4cG9ydHMucHJlc2V0cyA9IGV4cG9ydHMua2V5ZnJhbWVzID0gZXhwb3J0cy5mb250RmFjZSA9IGV4cG9ydHMuaW5zZXJ0R2xvYmFsID0gZXhwb3J0cy5pbnNlcnRSdWxlID0gZXhwb3J0cy5wbHVnaW5zID0gZXhwb3J0cy5zdHlsZVNoZWV0ID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5zcGVlZHkgPSBzcGVlZHk7XG5leHBvcnRzLnNpbXVsYXRpb25zID0gc2ltdWxhdGlvbnM7XG5leHBvcnRzLnNpbXVsYXRlID0gc2ltdWxhdGU7XG5leHBvcnRzLmNzc0xhYmVscyA9IGNzc0xhYmVscztcbmV4cG9ydHMuaXNMaWtlUnVsZSA9IGlzTGlrZVJ1bGU7XG5leHBvcnRzLmlkRm9yID0gaWRGb3I7XG5leHBvcnRzLmNzcyA9IGNzcztcbmV4cG9ydHMucmVoeWRyYXRlID0gcmVoeWRyYXRlO1xuZXhwb3J0cy5mbHVzaCA9IGZsdXNoO1xuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG5leHBvcnRzLnBhcmVudCA9IHBhcmVudDtcbmV4cG9ydHMubWVkaWEgPSBtZWRpYTtcbmV4cG9ydHMucHNldWRvID0gcHNldWRvO1xuZXhwb3J0cy5hY3RpdmUgPSBhY3RpdmU7XG5leHBvcnRzLmFueSA9IGFueTtcbmV4cG9ydHMuY2hlY2tlZCA9IGNoZWNrZWQ7XG5leHBvcnRzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5fZGVmYXVsdCA9IF9kZWZhdWx0O1xuZXhwb3J0cy5maXJzdCA9IGZpcnN0O1xuZXhwb3J0cy5maXJzdENoaWxkID0gZmlyc3RDaGlsZDtcbmV4cG9ydHMuZmlyc3RPZlR5cGUgPSBmaXJzdE9mVHlwZTtcbmV4cG9ydHMuZnVsbHNjcmVlbiA9IGZ1bGxzY3JlZW47XG5leHBvcnRzLmZvY3VzID0gZm9jdXM7XG5leHBvcnRzLmhvdmVyID0gaG92ZXI7XG5leHBvcnRzLmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuZXhwb3J0cy5pblJhbmdlID0gaW5SYW5nZTtcbmV4cG9ydHMuaW52YWxpZCA9IGludmFsaWQ7XG5leHBvcnRzLmxhc3RDaGlsZCA9IGxhc3RDaGlsZDtcbmV4cG9ydHMubGFzdE9mVHlwZSA9IGxhc3RPZlR5cGU7XG5leHBvcnRzLmxlZnQgPSBsZWZ0O1xuZXhwb3J0cy5saW5rID0gbGluaztcbmV4cG9ydHMub25seUNoaWxkID0gb25seUNoaWxkO1xuZXhwb3J0cy5vbmx5T2ZUeXBlID0gb25seU9mVHlwZTtcbmV4cG9ydHMub3B0aW9uYWwgPSBvcHRpb25hbDtcbmV4cG9ydHMub3V0T2ZSYW5nZSA9IG91dE9mUmFuZ2U7XG5leHBvcnRzLnJlYWRPbmx5ID0gcmVhZE9ubHk7XG5leHBvcnRzLnJlYWRXcml0ZSA9IHJlYWRXcml0ZTtcbmV4cG9ydHMucmVxdWlyZWQgPSByZXF1aXJlZDtcbmV4cG9ydHMucmlnaHQgPSByaWdodDtcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XG5leHBvcnRzLnNjb3BlID0gc2NvcGU7XG5leHBvcnRzLnRhcmdldCA9IHRhcmdldDtcbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmV4cG9ydHMudmlzaXRlZCA9IHZpc2l0ZWQ7XG5leHBvcnRzLmRpciA9IGRpcjtcbmV4cG9ydHMubGFuZyA9IGxhbmc7XG5leHBvcnRzLm5vdCA9IG5vdDtcbmV4cG9ydHMubnRoQ2hpbGQgPSBudGhDaGlsZDtcbmV4cG9ydHMubnRoTGFzdENoaWxkID0gbnRoTGFzdENoaWxkO1xuZXhwb3J0cy5udGhMYXN0T2ZUeXBlID0gbnRoTGFzdE9mVHlwZTtcbmV4cG9ydHMubnRoT2ZUeXBlID0gbnRoT2ZUeXBlO1xuZXhwb3J0cy5hZnRlciA9IGFmdGVyO1xuZXhwb3J0cy5iZWZvcmUgPSBiZWZvcmU7XG5leHBvcnRzLmZpcnN0TGV0dGVyID0gZmlyc3RMZXR0ZXI7XG5leHBvcnRzLmZpcnN0TGluZSA9IGZpcnN0TGluZTtcbmV4cG9ydHMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuZXhwb3J0cy5iYWNrZHJvcCA9IGJhY2tkcm9wO1xuZXhwb3J0cy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuZXhwb3J0cy5jc3NGb3IgPSBjc3NGb3I7XG5leHBvcnRzLmF0dHJpYnNGb3IgPSBhdHRyaWJzRm9yO1xuXG52YXIgX3NoZWV0ID0gcmVxdWlyZSgnLi9zaGVldC5qcycpO1xuXG52YXIgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucyA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHlPcGVyYXRpb25zJyk7XG5cbnZhciBfY2xlYW4gPSByZXF1aXJlKCcuL2NsZWFuLmpzJyk7XG5cbnZhciBfY2xlYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xlYW4pO1xuXG52YXIgX3BsdWdpbnMgPSByZXF1aXJlKCcuL3BsdWdpbnMnKTtcblxudmFyIF9oYXNoID0gcmVxdWlyZSgnLi9oYXNoJyk7XG5cbnZhciBfaGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH0gLyogc3R5bGVzaGVldCAqL1xuXG5cbnZhciBzdHlsZVNoZWV0ID0gZXhwb3J0cy5zdHlsZVNoZWV0ID0gbmV3IF9zaGVldC5TdHlsZVNoZWV0KCk7XG4vLyBhbiBpc29tb3JwaGljIFN0eWxlU2hlZXQgc2hpbS4gaGlkZXMgYWxsIHRoZSBuaXR0eSBncml0dHkuXG5cbi8vIC8qKioqKioqKioqKioqKioqIExJRlRPRkYgSU4gMy4uLiAyLi4uIDEuLi4gKioqKioqKioqKioqKioqKi9cbnN0eWxlU2hlZXQuaW5qZWN0KCk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbi8vIC8qKioqKioqKioqKioqKioqICAgICAgVE8gVEhFIE1PT09PT09PTiAgICAgKioqKioqKioqKioqKioqKi9cblxuLy8gY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gdG9nZ2xlIHNwZWVkeVxuZnVuY3Rpb24gc3BlZWR5KGJvb2wpIHtcbiAgcmV0dXJuIHN0eWxlU2hlZXQuc3BlZWR5KGJvb2wpO1xufVxuXG4vLyBwbHVnaW5zXG4vLyB3ZSBpbmNsdWRlIHRoZXNlIGJ5IGRlZmF1bHRcbnZhciBwbHVnaW5zID0gZXhwb3J0cy5wbHVnaW5zID0gc3R5bGVTaGVldC5wbHVnaW5zID0gbmV3IF9wbHVnaW5zLlBsdWdpblNldChfcGx1Z2lucy5wcmVmaXhlcywgX3BsdWdpbnMuZmFsbGJhY2tzKTtcbnBsdWdpbnMubWVkaWEgPSBuZXcgX3BsdWdpbnMuUGx1Z2luU2V0KCk7IC8vIG5lYXQhIG1lZGlhLCBmb250LWZhY2UsIGtleWZyYW1lc1xucGx1Z2lucy5mb250RmFjZSA9IG5ldyBfcGx1Z2lucy5QbHVnaW5TZXQoKTtcbnBsdWdpbnMua2V5ZnJhbWVzID0gbmV3IF9wbHVnaW5zLlBsdWdpblNldChfcGx1Z2lucy5wcmVmaXhlcyk7XG5cbi8vIGRlZmluZSBzb21lIGNvbnN0YW50c1xuXG52YXIgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB8fCAhcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG52YXIgaXNUZXN0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JztcblxuLyoqKiogc2ltdWxhdGlvbnMgICoqKiovXG5cbi8vIGEgZmxhZyB0byBlbmFibGUgc2ltdWxhdGlvbiBtZXRhIHRhZ3Mgb24gZG9tIG5vZGVzXG4vLyBkZWZhdWx0cyB0byB0cnVlIGluIGRldiBtb2RlLiByZWNvbW1lbmQgKm5vdCogdG9cbi8vIHRvZ2dsZSBvZnRlbi5cbnZhciBjYW5TaW11bGF0ZSA9IGlzRGV2O1xuXG4vLyB3ZSB1c2UgdGhlc2UgZmxhZ3MgZm9yIGlzc3Vpbmcgd2FybmluZ3Mgd2hlbiBzaW11bGF0ZSBpcyBjYWxsZWRcbi8vIGluIHByb2QgLyBpbiBpbmNvcnJlY3Qgb3JkZXJcbnZhciB3YXJuZWQxID0gZmFsc2UsXG4gICAgd2FybmVkMiA9IGZhbHNlO1xuXG4vLyB0b2dnbGVzIHNpbXVsYXRpb24gYWN0aXZpdHkuIHNob3VsZG4ndCBiZSBuZWVkZWQgaW4gbW9zdCBjYXNlc1xuZnVuY3Rpb24gc2ltdWxhdGlvbnMoKSB7XG4gIHZhciBib29sID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuXG4gIGNhblNpbXVsYXRlID0gISFib29sO1xufVxuXG4vLyB1c2UgdGhpcyBvbiBkb20gbm9kZXMgdG8gJ3NpbXVsYXRlJyBwc2V1ZG9jbGFzc2VzXG4vLyA8ZGl2IHsuLi5ob3Zlcih7IGNvbG9yOiAncmVkJyB9KX0gey4uLnNpbXVsYXRlKCdob3ZlcicsICd2aXNpdGVkJyl9Pi4uLjwvZGl2PlxuLy8geW91IGNhbiBldmVuIHNlbmQgaW4gc29tZSB3ZWlyZCBvbmVzLCBhcyBsb25nIGFzIGl0J3MgaW4gc2ltcGxlIGZvcm1hdFxuLy8gYW5kIG1hdGNoZXMgYW4gZXhpc3RpbmcgcnVsZSBvbiB0aGUgZWxlbWVudFxuLy8gZWcgc2ltdWxhdGUoJ250aENoaWxkMicsICc6aG92ZXI6YWN0aXZlJykgZXRjXG5mdW5jdGlvbiBzaW11bGF0ZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBzZXVkb3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwc2V1ZG9zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcHNldWRvcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKHBzZXVkb3MpO1xuICBpZiAoIXBzZXVkb3MpIHJldHVybiB7fTtcbiAgaWYgKCFjYW5TaW11bGF0ZSkge1xuICAgIGlmICghd2FybmVkMSkge1xuICAgICAgY29uc29sZS53YXJuKCdjYW5cXCd0IHNpbXVsYXRlIHdpdGhvdXQgb25jZSBjYWxsaW5nIHNpbXVsYXRpb25zKHRydWUpJyk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB3YXJuZWQxID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc0RldiAmJiAhaXNUZXN0ICYmICF3YXJuZWQyKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2RvblxcJ3QgdXNlIHNpbXVsYXRpb24gb3V0c2lkZSBkZXYnKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIHdhcm5lZDIgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIHBzZXVkb3MucmVkdWNlKGZ1bmN0aW9uIChvLCBwKSB7XG4gICAgcmV0dXJuIG9bJ2RhdGEtc2ltdWxhdGUtJyArIHNpbXBsZShwKV0gPSAnJywgbztcbiAgfSwge30pO1xufVxuXG4vKioqKiBsYWJlbHMgKioqKi9cbi8vIHRvZ2dsZSBmb3IgZGVidWcgbGFiZWxzLlxuLy8gKnNob3VsZG4ndCogaGF2ZSB0byBtZXNzIHdpdGggdGhpcyBtYW51YWxseVxudmFyIGhhc0xhYmVscyA9IGlzRGV2O1xuXG5mdW5jdGlvbiBjc3NMYWJlbHMoYm9vbCkge1xuICBoYXNMYWJlbHMgPSAhIWJvb2w7XG59XG5cbi8vIHRha2VzIGEgc3RyaW5nLCBjb252ZXJ0cyB0byBsb3dlcmNhc2UsIHN0cmlwcyBvdXQgbm9uYWxwaGFudW1lcmljLlxuZnVuY3Rpb24gc2ltcGxlKHN0cikge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldL2csICcnKTtcbn1cblxuLy8gaGFzaGVzIGEgc3RyaW5nIHRvIHNvbWV0aGluZyAndW5pcXVlJ1xuLy8gd2UgdXNlIHRoaXMgdG8gZ2VuZXJhdGUgaWRzIGZvciBzdHlsZXNcblxuXG5mdW5jdGlvbiBoYXNoaWZ5KCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG9ianMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIG9ianNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2hhc2gyLmRlZmF1bHQpKG9ianMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHgpO1xuICB9KS5qb2luKCcnKSkudG9TdHJpbmcoMzYpO1xufVxuXG4vLyBvZiBzaGFwZSB7ICdkYXRhLWNzcy08aWQ+JzogJycgfVxuZnVuY3Rpb24gaXNMaWtlUnVsZShydWxlKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocnVsZSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggIT09ICd0b1N0cmluZyc7XG4gIH0pO1xuICBpZiAoa2V5cy5sZW5ndGggIT09IDEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuICEhL2RhdGFcXC1jc3NcXC0oW2EtekEtWjAtOV0rKS8uZXhlYyhrZXlzWzBdKTtcbn1cblxuLy8gZXh0cmFjdHMgaWQgZnJvbSBhIHsgJ2RhdGEtY3NzLTxpZD4nOiAnJ30gbGlrZSBvYmplY3RcbmZ1bmN0aW9uIGlkRm9yKHJ1bGUpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhydWxlKS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geCAhPT0gJ3RvU3RyaW5nJztcbiAgfSk7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBydWxlJyk7XG4gIHZhciByZWdleCA9IC9kYXRhXFwtY3NzXFwtKFthLXpBLVowLTldKykvO1xuICB2YXIgbWF0Y2ggPSByZWdleC5leGVjKGtleXNbMF0pO1xuICBpZiAoIW1hdGNoKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIHJ1bGUnKTtcbiAgcmV0dXJuIG1hdGNoWzFdO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RvcihpZCwgcGF0aCkge1xuXG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXCYvZywgJycpO1xuICB9XG4gIGlmICghcGF0aCkgcmV0dXJuICcuY3NzLScgKyBpZCArICcsW2RhdGEtY3NzLScgKyBpZCArICddJztcblxuICB2YXIgeCA9IHBhdGguc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geC5pbmRleE9mKCcmJykgPj0gMCA/IFt4LnJlcGxhY2UoL1xcJi9tZywgJy5jc3MtJyArIGlkKSwgeC5yZXBsYWNlKC9cXCYvbWcsICdbZGF0YS1jc3MtJyArIGlkICsgJ10nKV0uam9pbignLCcpIC8vIHRvZG8gLSBtYWtlIHN1cmUgZWFjaCBzdWIgc2VsZWN0b3IgaGFzIGFuICZcbiAgICA6ICcuY3NzLScgKyBpZCArIHggKyAnLFtkYXRhLWNzcy0nICsgaWQgKyAnXScgKyB4O1xuICB9KS5qb2luKCcsJyk7XG5cbiAgaWYgKGNhblNpbXVsYXRlICYmIC9eXFwmXFw6Ly5leGVjKHBhdGgpICYmICEvXFxzLy5leGVjKHBhdGgpKSB7XG4gICAgeCArPSAnLC5jc3MtJyArIGlkICsgJ1tkYXRhLXNpbXVsYXRlLScgKyBzaW1wbGUocGF0aCkgKyAnXSxbZGF0YS1jc3MtJyArIGlkICsgJ11bZGF0YS1zaW11bGF0ZS0nICsgc2ltcGxlKHBhdGgpICsgJ10nO1xuICB9XG4gIHJldHVybiB4O1xufVxuXG5mdW5jdGlvbiB0b0NTUyhfcmVmKSB7XG4gIHZhciBzZWxlY3RvciA9IF9yZWYuc2VsZWN0b3IsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGU7XG5cbiAgdmFyIHJlc3VsdCA9IHBsdWdpbnMudHJhbnNmb3JtKHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBzdHlsZTogc3R5bGUgfSk7XG4gIHJldHVybiByZXN1bHQuc2VsZWN0b3IgKyAneycgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMpKHJlc3VsdC5zdHlsZSkgKyAnfSc7XG59XG5cbmZ1bmN0aW9uIGRlY29uc3RydWN0KHN0eWxlKSB7XG4gIC8vIHdlIGNhbiBiZSBzdXJlIGl0J3Mgbm90IGluZmluaXRlbHkgbmVzdGVkIGhlcmUgXG4gIHZhciBwbGFpbiA9IHZvaWQgMCxcbiAgICAgIHNlbGVjdHMgPSB2b2lkIDAsXG4gICAgICBtZWRpYXMgPSB2b2lkIDAsXG4gICAgICBzdXBwb3J0cyA9IHZvaWQgMDtcbiAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkuaW5kZXhPZignJicpID49IDApIHtcbiAgICAgIHNlbGVjdHMgPSBzZWxlY3RzIHx8IHt9O1xuICAgICAgc2VsZWN0c1trZXldID0gc3R5bGVba2V5XTtcbiAgICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgbWVkaWFzID0gbWVkaWFzIHx8IHt9O1xuICAgICAgbWVkaWFzW2tleV0gPSBkZWNvbnN0cnVjdChzdHlsZVtrZXldKTtcbiAgICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKCdAc3VwcG9ydHMnKSA9PT0gMCkge1xuICAgICAgc3VwcG9ydHMgPSBzdXBwb3J0cyB8fCB7fTtcbiAgICAgIHN1cHBvcnRzW2tleV0gPSBkZWNvbnN0cnVjdChzdHlsZVtrZXldKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xhYmVsJykge1xuICAgICAgaWYgKHN0eWxlLmxhYmVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGxhaW4gPSBwbGFpbiB8fCB7fTtcbiAgICAgICAgcGxhaW4ubGFiZWwgPSBzdHlsZS5sYWJlbC5qb2luKCcuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWluID0gcGxhaW4gfHwge307XG4gICAgICBwbGFpbltrZXldID0gc3R5bGVba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4geyBwbGFpbjogcGxhaW4sIHNlbGVjdHM6IHNlbGVjdHMsIG1lZGlhczogbWVkaWFzLCBzdXBwb3J0czogc3VwcG9ydHMgfTtcbn1cblxuZnVuY3Rpb24gZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1MoaWQsIHN0eWxlKSB7XG4gIHZhciBjc3MgPSBbXTtcblxuICAvLyBwbHVnaW5zIGhlcmVcbiAgdmFyIHBsYWluID0gc3R5bGUucGxhaW4sXG4gICAgICBzZWxlY3RzID0gc3R5bGUuc2VsZWN0cyxcbiAgICAgIG1lZGlhcyA9IHN0eWxlLm1lZGlhcyxcbiAgICAgIHN1cHBvcnRzID0gc3R5bGUuc3VwcG9ydHM7XG5cbiAgaWYgKHBsYWluKSB7XG4gICAgY3NzLnB1c2godG9DU1MoeyBzdHlsZTogcGxhaW4sIHNlbGVjdG9yOiBzZWxlY3RvcihpZCkgfSkpO1xuICB9XG4gIGlmIChzZWxlY3RzKSB7XG4gICAgT2JqZWN0LmtleXMoc2VsZWN0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gY3NzLnB1c2godG9DU1MoeyBzdHlsZTogc2VsZWN0c1trZXldLCBzZWxlY3Rvcjogc2VsZWN0b3IoaWQsIGtleSkgfSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChtZWRpYXMpIHtcbiAgICBPYmplY3Qua2V5cyhtZWRpYXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGNzcy5wdXNoKGtleSArICd7JyArIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGlkLCBtZWRpYXNba2V5XSkuam9pbignJykgKyAnfScpO1xuICAgIH0pO1xuICB9XG4gIGlmIChzdXBwb3J0cykge1xuICAgIE9iamVjdC5rZXlzKHN1cHBvcnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjc3MucHVzaChrZXkgKyAneycgKyBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhpZCwgc3VwcG9ydHNba2V5XSkuam9pbignJykgKyAnfScpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjc3M7XG59XG5cbi8vIHRoaXMgY2FjaGUgdG8gdHJhY2sgd2hpY2ggcnVsZXMgaGF2ZVxuLy8gYmVlbiBpbnNlcnRlZCBpbnRvIHRoZSBzdHlsZXNoZWV0XG52YXIgaW5zZXJ0ZWQgPSBzdHlsZVNoZWV0Lmluc2VydGVkID0ge307XG5cbi8vIGFuZCBoZWxwZXJzIHRvIGluc2VydCBydWxlcyBpbnRvIHNhaWQgc3R5bGVTaGVldFxuZnVuY3Rpb24gaW5zZXJ0KHNwZWMpIHtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIGluc2VydGVkW3NwZWMuaWRdID0gdHJ1ZTtcbiAgICB2YXIgZGVjb25zdHJ1Y3RlZCA9IGRlY29uc3RydWN0KHNwZWMuc3R5bGUpO1xuICAgIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKHNwZWMuaWQsIGRlY29uc3RydWN0ZWQpLm1hcChmdW5jdGlvbiAoY3NzUnVsZSkge1xuICAgICAgcmV0dXJuIHN0eWxlU2hlZXQuaW5zZXJ0KGNzc1J1bGUpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGEgc2ltcGxlIGNhY2hlIHRvIHN0b3JlIGdlbmVyYXRlZCBydWxlc1xudmFyIHJlZ2lzdGVyZWQgPSBzdHlsZVNoZWV0LnJlZ2lzdGVyZWQgPSB7fTtcbmZ1bmN0aW9uIHJlZ2lzdGVyKHNwZWMpIHtcbiAgaWYgKCFyZWdpc3RlcmVkW3NwZWMuaWRdKSB7XG4gICAgcmVnaXN0ZXJlZFtzcGVjLmlkXSA9IHNwZWM7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2dldFJlZ2lzdGVyZWQocnVsZSkge1xuICBpZiAoaXNMaWtlUnVsZShydWxlKSkge1xuICAgIHZhciByZXQgPSByZWdpc3RlcmVkW2lkRm9yKHJ1bGUpXTtcbiAgICBpZiAocmV0ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2dsYW1vcl0gYW4gdW5leHBlY3RlZCBydWxlIGNhY2hlIG1pc3Mgb2NjdXJyZWQuIFRoaXMgaXMgcHJvYmFibHkgYSBzaWduIG9mIG11bHRpcGxlIGdsYW1vciBpbnN0YW5jZXMgaW4geW91ciBhcHAuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvaXNzdWVzLzc5Jyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbi8vIHRvZG8gLSBwZXJmXG52YXIgcnVsZUNhY2hlID0ge307XG5mdW5jdGlvbiB0b1J1bGUoc3BlYykge1xuICByZWdpc3RlcihzcGVjKTtcbiAgaW5zZXJ0KHNwZWMpO1xuICBpZiAocnVsZUNhY2hlW3NwZWMuaWRdKSB7XG4gICAgcmV0dXJuIHJ1bGVDYWNoZVtzcGVjLmlkXTtcbiAgfVxuXG4gIHZhciByZXQgPSBfZGVmaW5lUHJvcGVydHkoe30sICdkYXRhLWNzcy0nICsgc3BlYy5pZCwgaGFzTGFiZWxzID8gc3BlYy5sYWJlbCB8fCAnJyA6ICcnKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJldCwgJ3RvU3RyaW5nJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICByZXR1cm4gJ2Nzcy0nICsgc3BlYy5pZDtcbiAgICB9XG4gIH0pO1xuICBydWxlQ2FjaGVbc3BlYy5pZF0gPSByZXQ7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbnNvbGUubG9nKHRoaXMpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvcihrZXkpIHtcbiAgdmFyIHBvc3NpYmxlcyA9IFsnOicsICcuJywgJ1snLCAnPicsICcgJ10sXG4gICAgICBmb3VuZCA9IGZhbHNlLFxuICAgICAgY2ggPSBrZXkuY2hhckF0KDApO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc3NpYmxlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjaCA9PT0gcG9zc2libGVzW2ldKSB7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvdW5kIHx8IGtleS5pbmRleE9mKCcmJykgPj0gMDtcbn1cblxuZnVuY3Rpb24gam9pblNlbGVjdG9ycyhhLCBiKSB7XG4gIHZhciBhcyA9IGEuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gIShhLmluZGV4T2YoJyYnKSA+PSAwKSA/ICcmJyArIGEgOiBhO1xuICB9KTtcbiAgdmFyIGJzID0gYi5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiAhKGIuaW5kZXhPZignJicpID49IDApID8gJyYnICsgYiA6IGI7XG4gIH0pO1xuXG4gIHJldHVybiBicy5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgYikge1xuICAgIHJldHVybiBhcnIuY29uY2F0KGFzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGIucmVwbGFjZSgvXFwmL2csIGEpO1xuICAgIH0pKTtcbiAgfSwgW10pLmpvaW4oJywnKTtcbn1cblxuZnVuY3Rpb24gam9pbk1lZGlhUXVlcmllcyhhLCBiKSB7XG4gIHJldHVybiBhID8gJ0BtZWRpYSAnICsgYS5zdWJzdHJpbmcoNikgKyAnIGFuZCAnICsgYi5zdWJzdHJpbmcoNikgOiBiO1xufVxuXG5mdW5jdGlvbiBpc01lZGlhUXVlcnkoa2V5KSB7XG4gIHJldHVybiBrZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzU3VwcG9ydHMoa2V5KSB7XG4gIHJldHVybiBrZXkuaW5kZXhPZignQHN1cHBvcnRzJykgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGpvaW5TdXBwb3J0cyhhLCBiKSB7XG4gIHJldHVybiBhID8gJ0BzdXBwb3J0cyAnICsgYS5zdWJzdHJpbmcoOSkgKyAnIGFuZCAnICsgYi5zdWJzdHJpbmcoOSkgOiBiO1xufVxuXG4vLyBmbGF0dGVuIGEgbmVzdGVkIGFycmF5XG5mdW5jdGlvbiBmbGF0dGVuKGluQXJyKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbkFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGluQXJyW2ldKSkgYXJyID0gYXJyLmNvbmNhdChmbGF0dGVuKGluQXJyW2ldKSk7ZWxzZSBhcnIgPSBhcnIuY29uY2F0KGluQXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG4vLyBtdXRhYmxlISBtb2RpZmllcyBkZXN0LlxuZnVuY3Rpb24gYnVpbGQoZGVzdCwgX3JlZjIpIHtcbiAgdmFyIF9yZWYyJHNlbGVjdG9yID0gX3JlZjIuc2VsZWN0b3IsXG4gICAgICBzZWxlY3RvciA9IF9yZWYyJHNlbGVjdG9yID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYyJHNlbGVjdG9yLFxuICAgICAgX3JlZjIkbXEgPSBfcmVmMi5tcSxcbiAgICAgIG1xID0gX3JlZjIkbXEgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjIkbXEsXG4gICAgICBfcmVmMiRzdXBwID0gX3JlZjIuc3VwcCxcbiAgICAgIHN1cHAgPSBfcmVmMiRzdXBwID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYyJHN1cHAsXG4gICAgICBfcmVmMiRzcmMgPSBfcmVmMi5zcmMsXG4gICAgICBzcmMgPSBfcmVmMiRzcmMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZjIkc3JjO1xuXG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICBzcmMgPSBbc3JjXTtcbiAgfVxuICBzcmMgPSBmbGF0dGVuKHNyYyk7XG5cbiAgc3JjLmZvckVhY2goZnVuY3Rpb24gKF9zcmMpIHtcbiAgICBpZiAoaXNMaWtlUnVsZShfc3JjKSkge1xuICAgICAgdmFyIHJlZyA9IF9nZXRSZWdpc3RlcmVkKF9zcmMpO1xuICAgICAgaWYgKHJlZy50eXBlICE9PSAnY3NzJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBtZXJnZSB0aGlzIHJ1bGUnKTtcbiAgICAgIH1cbiAgICAgIF9zcmMgPSByZWcuc3R5bGU7XG4gICAgfVxuICAgIF9zcmMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShfc3JjKTtcbiAgICBpZiAoX3NyYy5jb21wb3Nlcykge1xuICAgICAgYnVpbGQoZGVzdCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIG1xOiBtcSwgc3VwcDogc3VwcCwgc3JjOiBfc3JjLmNvbXBvc2VzIH0pO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhfc3JjKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChpc1NlbGVjdG9yKGtleSkpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciA9PT0gJzo6cGxhY2Vob2xkZXInID8gJzo6cGxhY2Vob2xkZXIsIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgOjotbW96LXBsYWNlaG9sZGVyLCA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcicgOiBzZWxlY3RvcjtcblxuICAgICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBqb2luU2VsZWN0b3JzKHNlbGVjdG9yLCBrZXkpLCBtcTogbXEsIHN1cHA6IHN1cHAsIHNyYzogX3NyY1trZXldIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc01lZGlhUXVlcnkoa2V5KSkge1xuICAgICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgbXE6IGpvaW5NZWRpYVF1ZXJpZXMobXEsIGtleSksIHN1cHA6IHN1cHAsIHNyYzogX3NyY1trZXldIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc1N1cHBvcnRzKGtleSkpIHtcbiAgICAgICAgYnVpbGQoZGVzdCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIG1xOiBtcSwgc3VwcDogam9pblN1cHBvcnRzKHN1cHAsIGtleSksIHNyYzogX3NyY1trZXldIH0pO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdjb21wb3NlcycpIHtcbiAgICAgICAgLy8gaWdub3JlLCB3ZSBhbHJlYWR5IGRlYWx0aCB3aXRoIGl0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX2Rlc3QgPSBkZXN0O1xuICAgICAgICBpZiAoc3VwcCkge1xuICAgICAgICAgIF9kZXN0W3N1cHBdID0gX2Rlc3Rbc3VwcF0gfHwge307XG4gICAgICAgICAgX2Rlc3QgPSBfZGVzdFtzdXBwXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXEpIHtcbiAgICAgICAgICBfZGVzdFttcV0gPSBfZGVzdFttcV0gfHwge307XG4gICAgICAgICAgX2Rlc3QgPSBfZGVzdFttcV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgX2Rlc3Rbc2VsZWN0b3JdID0gX2Rlc3Rbc2VsZWN0b3JdIHx8IHt9O1xuICAgICAgICAgIF9kZXN0ID0gX2Rlc3Rbc2VsZWN0b3JdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2xhYmVsJyAmJiBoYXNMYWJlbHMpIHtcbiAgICAgICAgICBkZXN0LmxhYmVsID0gZGVzdC5sYWJlbC5jb25jYXQoX3NyYy5sYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2Rlc3Rba2V5XSA9IF9zcmNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX2NzcyhydWxlcykge1xuICB2YXIgc3R5bGUgPSB7IGxhYmVsOiBbXSB9O1xuICBidWlsZChzdHlsZSwgeyBzcmM6IHJ1bGVzIH0pOyAvLyBtdXRhdGl2ZSEgYnV0IHdvcnRoIGl0LiBcblxuICB2YXIgc3BlYyA9IHtcbiAgICBpZDogaGFzaGlmeShzdHlsZSksXG4gICAgc3R5bGU6IHN0eWxlLCBsYWJlbDogc3R5bGUubGFiZWwuam9pbignLicpLFxuICAgIHR5cGU6ICdjc3MnXG4gIH07XG4gIHJldHVybiB0b1J1bGUoc3BlYyk7XG59XG5cbnZhciBudWxscnVsZSA9IHtcbiAgLy8gJ2RhdGEtY3NzLW5pbCc6ICcnXG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KG51bGxydWxlLCAndG9TdHJpbmcnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgcmV0dXJuICdjc3MtbmlsJztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNzcygpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBydWxlcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgcnVsZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIGlmIChydWxlc1swXSAmJiBydWxlc1swXS5sZW5ndGggJiYgcnVsZXNbMF0ucmF3KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgZm9yZ290IHRvIGluY2x1ZGUgZ2xhbW9yL2JhYmVsIGluIHlvdXIgYmFiZWwgcGx1Z2lucy4nKTtcbiAgfVxuXG4gIHJ1bGVzID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkocnVsZXMpO1xuICBpZiAoIXJ1bGVzKSB7XG4gICAgcmV0dXJuIG51bGxydWxlOyAvLyB0b2RvIC0gbnVsbHJ1bGUgXG4gIH1cblxuICByZXR1cm4gX2NzcyhydWxlcyk7XG59XG5cbmNzcy5pbnNlcnQgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIHZhciBzcGVjID0ge1xuICAgIGlkOiBoYXNoaWZ5KGNzcyksXG4gICAgY3NzOiBjc3MsXG4gICAgdHlwZTogJ3JhdydcbiAgfTtcbiAgcmVnaXN0ZXIoc3BlYyk7XG4gIGlmICghaW5zZXJ0ZWRbc3BlYy5pZF0pIHtcbiAgICBzdHlsZVNoZWV0Lmluc2VydChzcGVjLmNzcyk7XG4gICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSB0cnVlO1xuICB9XG59O1xuXG52YXIgaW5zZXJ0UnVsZSA9IGV4cG9ydHMuaW5zZXJ0UnVsZSA9IGNzcy5pbnNlcnQ7XG5cbmNzcy5nbG9iYWwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHN0eWxlKSB7XG4gIHJldHVybiBjc3MuaW5zZXJ0KHNlbGVjdG9yICsgJ3snICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9yU3R5bGVzKShzdHlsZSkgKyAnfScpO1xufTtcblxudmFyIGluc2VydEdsb2JhbCA9IGV4cG9ydHMuaW5zZXJ0R2xvYmFsID0gY3NzLmdsb2JhbDtcblxuZnVuY3Rpb24gaW5zZXJ0S2V5ZnJhbWUoc3BlYykge1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lciA9IE9iamVjdC5rZXlzKHNwZWMua2V5ZnJhbWVzKS5tYXAoZnVuY3Rpb24gKGtmKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBwbHVnaW5zLmtleWZyYW1lcy50cmFuc2Zvcm0oeyBpZDogc3BlYy5pZCwgbmFtZToga2YsIHN0eWxlOiBzcGVjLmtleWZyYW1lc1trZl0gfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQubmFtZSArICd7JyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvclN0eWxlcykocmVzdWx0LnN0eWxlKSArICd9JztcbiAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICcnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlU2hlZXQuaW5zZXJ0KCdAJyArIHByZWZpeCArICdrZXlmcmFtZXMgJyArIChzcGVjLm5hbWUgKyAnXycgKyBzcGVjLmlkKSArICd7JyArIGlubmVyICsgJ30nKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbnNlcnRlZFtzcGVjLmlkXSA9IHRydWU7XG4gICAgfSkoKTtcbiAgfVxufVxuY3NzLmtleWZyYW1lcyA9IGZ1bmN0aW9uIChuYW1lLCBrZnMpIHtcbiAgaWYgKCFrZnMpIHtcbiAgICBrZnMgPSBuYW1lLCBuYW1lID0gJ2FuaW1hdGlvbic7XG4gIH1cblxuICAvLyBkbyBub3QgaWdub3JlIGVtcHR5IGtleWZyYW1lIGRlZmluaXRpb25zIGZvciBub3cuXG4gIGtmcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKGtmcykgfHwge307XG4gIHZhciBzcGVjID0ge1xuICAgIGlkOiBoYXNoaWZ5KG5hbWUsIGtmcyksXG4gICAgdHlwZTogJ2tleWZyYW1lcycsXG4gICAgbmFtZTogbmFtZSxcbiAgICBrZXlmcmFtZXM6IGtmc1xuICB9O1xuICByZWdpc3RlcihzcGVjKTtcbiAgaW5zZXJ0S2V5ZnJhbWUoc3BlYyk7XG4gIHJldHVybiBuYW1lICsgJ18nICsgc3BlYy5pZDtcbn07XG5cbnZhciBmb250RmFjZSA9IGV4cG9ydHMuZm9udEZhY2UgPSBjc3MuZm9udEZhY2U7XG52YXIga2V5ZnJhbWVzID0gZXhwb3J0cy5rZXlmcmFtZXMgPSBjc3Mua2V5ZnJhbWVzO1xuXG5mdW5jdGlvbiBpbnNlcnRGb250RmFjZShzcGVjKSB7XG4gIGlmICghaW5zZXJ0ZWRbc3BlYy5pZF0pIHtcbiAgICBzdHlsZVNoZWV0Lmluc2VydCgnQGZvbnQtZmFjZXsnICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9yU3R5bGVzKShzcGVjLmZvbnQpICsgJ30nKTtcbiAgICBpbnNlcnRlZFtzcGVjLmlkXSA9IHRydWU7XG4gIH1cbn1cblxuLy8gd2UgZG9uJ3QgZ28gYWxsIG91dCBmb3IgZm9udHMgYXMgbXVjaCwgZ2l2aW5nIGEgc2ltcGxlIGZvbnQgbG9hZGluZyBzdHJhdGVneVxuLy8gdXNlIGEgZmFuY2llciBsaWIgaWYgeW91IG5lZWQgbW9hciBwb3dlclxuY3NzLmZvbnRGYWNlID0gZnVuY3Rpb24gKGZvbnQpIHtcbiAgZm9udCA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKGZvbnQpO1xuICB2YXIgc3BlYyA9IHtcbiAgICBpZDogaGFzaGlmeShmb250KSxcbiAgICB0eXBlOiAnZm9udC1mYWNlJyxcbiAgICBmb250OiBmb250XG4gIH07XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpbnNlcnRGb250RmFjZShzcGVjKTtcblxuICByZXR1cm4gZm9udC5mb250RmFtaWx5O1xufTtcblxuLy8gcmVoeWRyYXRlIHRoZSBpbnNlcnRpb24gY2FjaGUgd2l0aCBpZHMgc2VudCBmcm9tXG4vLyByZW5kZXJTdGF0aWMgLyByZW5kZXJTdGF0aWNPcHRpbWl6ZWRcbmZ1bmN0aW9uIHJlaHlkcmF0ZShpZHMpIHtcbiAgLy8gbG9hZCB1cCBpZHNcbiAgT2JqZWN0LmFzc2lnbihpbnNlcnRlZCwgaWRzLnJlZHVjZShmdW5jdGlvbiAobywgaSkge1xuICAgIHJldHVybiBvW2ldID0gdHJ1ZSwgbztcbiAgfSwge30pKTtcbiAgLy8gYXNzdW1lIGNzcyBsb2FkZWQgc2VwYXJhdGVseVxufVxuXG4vLyBjbGVhcnMgb3V0IHRoZSBjYWNoZSBhbmQgZW1wdGllcyB0aGUgc3R5bGVzaGVldFxuLy8gYmVzdCBmb3IgdGVzdHMsIHRob3VnaCB0aGVyZSBtaWdodCBiZSBzb21lIHZhbHVlIGZvciBTU1IuXG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICBpbnNlcnRlZCA9IHN0eWxlU2hlZXQuaW5zZXJ0ZWQgPSB7fTtcbiAgcmVnaXN0ZXJlZCA9IHN0eWxlU2hlZXQucmVnaXN0ZXJlZCA9IHt9O1xuICBydWxlQ2FjaGUgPSB7fTtcbiAgc3R5bGVTaGVldC5mbHVzaCgpO1xuICBzdHlsZVNoZWV0LmluamVjdCgpO1xufVxuXG52YXIgcHJlc2V0cyA9IGV4cG9ydHMucHJlc2V0cyA9IHtcbiAgbW9iaWxlOiAnKG1pbi13aWR0aDogNDAwcHgpJyxcbiAgTW9iaWxlOiAnQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KScsXG4gIHBoYWJsZXQ6ICcobWluLXdpZHRoOiA1NTBweCknLFxuICBQaGFibGV0OiAnQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KScsXG4gIHRhYmxldDogJyhtaW4td2lkdGg6IDc1MHB4KScsXG4gIFRhYmxldDogJ0BtZWRpYSAobWluLXdpZHRoOiA1NTBweCknLFxuICBkZXNrdG9wOiAnKG1pbi13aWR0aDogMTAwMHB4KScsXG4gIERlc2t0b3A6ICdAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KScsXG4gIGhkOiAnKG1pbi13aWR0aDogMTIwMHB4KScsXG4gIEhkOiAnQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCknXG59O1xuXG52YXIgc3R5bGUgPSBleHBvcnRzLnN0eWxlID0gY3NzO1xuXG5mdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgc3R5bGVzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHJldHVybiBzdHlsZShzdHlsZXMpO1xuICB9XG4gIHJldHVybiBjc3MoX2RlZmluZVByb3BlcnR5KHt9LCBzZWxlY3Rvciwgc3R5bGVzKSk7XG59XG52YXIgJCA9IGV4cG9ydHMuJCA9IHNlbGVjdDtcblxuZnVuY3Rpb24gcGFyZW50KHNlbGVjdG9yKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbjUgPiAxID8gX2xlbjUgLSAxIDogMCksIF9rZXk1ID0gMTsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIHN0eWxlc1tfa2V5NSAtIDFdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIHJldHVybiBjc3MoX2RlZmluZVByb3BlcnR5KHt9LCBzZWxlY3RvciArICcgJicsIHN0eWxlcykpO1xufVxuXG52YXIgbWVyZ2UgPSBleHBvcnRzLm1lcmdlID0gY3NzO1xudmFyIGNvbXBvc2UgPSBleHBvcnRzLmNvbXBvc2UgPSBjc3M7XG5cbmZ1bmN0aW9uIG1lZGlhKHF1ZXJ5KSB7XG4gIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgcnVsZXMgPSBBcnJheShfbGVuNiA+IDEgPyBfbGVuNiAtIDEgOiAwKSwgX2tleTYgPSAxOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgcnVsZXNbX2tleTYgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICByZXR1cm4gY3NzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgJ0BtZWRpYSAnICsgcXVlcnksIHJ1bGVzKSk7XG59XG5cbmZ1bmN0aW9uIHBzZXVkbyhzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW43ID4gMSA/IF9sZW43IC0gMSA6IDApLCBfa2V5NyA9IDE7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICBzdHlsZXNbX2tleTcgLSAxXSA9IGFyZ3VtZW50c1tfa2V5N107XG4gIH1cblxuICByZXR1cm4gY3NzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2VsZWN0b3IsIHN0eWxlcykpO1xufVxuXG4vLyBhbGxsbGxsIHRoZSBwc2V1ZG9jbGFzc2VzXG5cbmZ1bmN0aW9uIGFjdGl2ZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzphY3RpdmUnLCB4KTtcbn1cblxuZnVuY3Rpb24gYW55KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmFueScsIHgpO1xufVxuXG5mdW5jdGlvbiBjaGVja2VkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmNoZWNrZWQnLCB4KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZGlzYWJsZWQnLCB4KTtcbn1cblxuZnVuY3Rpb24gZW1wdHkoeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZW1wdHknLCB4KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzplbmFibGVkJywgeCk7XG59XG5cbmZ1bmN0aW9uIF9kZWZhdWx0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmRlZmF1bHQnLCB4KTsgLy8gbm90ZSAnX2RlZmF1bHQnIG5hbWVcbn1cblxuZnVuY3Rpb24gZmlyc3QoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Zmlyc3QnLCB4KTtcbn1cblxuZnVuY3Rpb24gZmlyc3RDaGlsZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmaXJzdC1jaGlsZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBmaXJzdE9mVHlwZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmaXJzdC1vZi10eXBlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGZ1bGxzY3JlZW4oeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZnVsbHNjcmVlbicsIHgpO1xufVxuXG5mdW5jdGlvbiBmb2N1cyh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmb2N1cycsIHgpO1xufVxuXG5mdW5jdGlvbiBob3Zlcih4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpob3ZlcicsIHgpO1xufVxuXG5mdW5jdGlvbiBpbmRldGVybWluYXRlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmluZGV0ZXJtaW5hdGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gaW5SYW5nZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzppbi1yYW5nZScsIHgpO1xufVxuXG5mdW5jdGlvbiBpbnZhbGlkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmludmFsaWQnLCB4KTtcbn1cblxuZnVuY3Rpb24gbGFzdENoaWxkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxhc3QtY2hpbGQnLCB4KTtcbn1cblxuZnVuY3Rpb24gbGFzdE9mVHlwZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsYXN0LW9mLXR5cGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gbGVmdCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsZWZ0JywgeCk7XG59XG5cbmZ1bmN0aW9uIGxpbmsoeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGluaycsIHgpO1xufVxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b25seS1jaGlsZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBvbmx5T2ZUeXBlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm9ubHktb2YtdHlwZScsIHgpO1xufVxuXG5mdW5jdGlvbiBvcHRpb25hbCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpvcHRpb25hbCcsIHgpO1xufVxuXG5mdW5jdGlvbiBvdXRPZlJhbmdlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm91dC1vZi1yYW5nZScsIHgpO1xufVxuXG5mdW5jdGlvbiByZWFkT25seSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyZWFkLW9ubHknLCB4KTtcbn1cblxuZnVuY3Rpb24gcmVhZFdyaXRlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJlYWQtd3JpdGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cmVxdWlyZWQnLCB4KTtcbn1cblxuZnVuY3Rpb24gcmlnaHQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cmlnaHQnLCB4KTtcbn1cblxuZnVuY3Rpb24gcm9vdCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyb290JywgeCk7XG59XG5cbmZ1bmN0aW9uIHNjb3BlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnNjb3BlJywgeCk7XG59XG5cbmZ1bmN0aW9uIHRhcmdldCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzp0YXJnZXQnLCB4KTtcbn1cblxuZnVuY3Rpb24gdmFsaWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6dmFsaWQnLCB4KTtcbn1cblxuZnVuY3Rpb24gdmlzaXRlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzp2aXNpdGVkJywgeCk7XG59XG5cbi8vIHBhcmFtZXRlcml6ZWQgcHNldWRvY2xhc3Nlc1xuZnVuY3Rpb24gZGlyKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmRpcignICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBsYW5nKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxhbmcoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbm90KHAsIHgpIHtcbiAgLy8gc2hvdWxkIHRoaXMgYmUgYSBwbHVnaW4/XG4gIHZhciBzZWxlY3RvciA9IHAuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geC50cmltKCk7XG4gIH0pLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiAnOm5vdCgnICsgeCArICcpJztcbiAgfSk7XG4gIGlmIChzZWxlY3Rvci5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gcHNldWRvKCc6bm90KCcgKyBwICsgJyknLCB4KTtcbiAgfVxuICByZXR1cm4gc2VsZWN0KHNlbGVjdG9yLmpvaW4oJycpLCB4KTtcbn1cbmZ1bmN0aW9uIG50aENoaWxkKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1jaGlsZCgnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBudGhMYXN0Q2hpbGQocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bnRoLWxhc3QtY2hpbGQoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbnRoTGFzdE9mVHlwZShwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpudGgtbGFzdC1vZi10eXBlKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIG50aE9mVHlwZShwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpudGgtb2YtdHlwZSgnICsgcCArICcpJywgeCk7XG59XG5cbi8vIHBzZXVkb2VsZW1lbnRzXG5mdW5jdGlvbiBhZnRlcih4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzo6YWZ0ZXInLCB4KTtcbn1cbmZ1bmN0aW9uIGJlZm9yZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzo6YmVmb3JlJywgeCk7XG59XG5mdW5jdGlvbiBmaXJzdExldHRlcih4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzo6Zmlyc3QtbGV0dGVyJywgeCk7XG59XG5mdW5jdGlvbiBmaXJzdExpbmUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6OmZpcnN0LWxpbmUnLCB4KTtcbn1cbmZ1bmN0aW9uIHNlbGVjdGlvbih4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzo6c2VsZWN0aW9uJywgeCk7XG59XG5mdW5jdGlvbiBiYWNrZHJvcCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzo6YmFja2Ryb3AnLCB4KTtcbn1cbmZ1bmN0aW9uIHBsYWNlaG9sZGVyKHgpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2lzc3Vlcy8xNFxuICByZXR1cm4gY3NzKHsgJzo6cGxhY2Vob2xkZXInOiB4IH0pO1xufVxuXG4vKioqIGhlbHBlcnMgZm9yIHdlYiBjb21wb25lbnRzICoqKi9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9pc3N1ZXMvMTZcblxuZnVuY3Rpb24gY3NzRm9yKCkge1xuICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjgpLCBfa2V5OCA9IDA7IF9rZXk4IDwgX2xlbjg7IF9rZXk4KyspIHtcbiAgICBydWxlc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICB9XG5cbiAgcnVsZXMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShydWxlcyk7XG4gIHJldHVybiBydWxlcyA/IHJ1bGVzLm1hcChmdW5jdGlvbiAocikge1xuICAgIHZhciBzdHlsZSA9IHsgbGFiZWw6IFtdIH07XG4gICAgYnVpbGQoc3R5bGUsIHsgc3JjOiByIH0pOyAvLyBtdXRhdGl2ZSEgYnV0IHdvcnRoIGl0LiAgIFxuICAgIHJldHVybiBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhoYXNoaWZ5KHN0eWxlKSwgZGVjb25zdHJ1Y3Qoc3R5bGUpKS5qb2luKCcnKTtcbiAgfSkuam9pbignJykgOiAnJztcbn1cblxuZnVuY3Rpb24gYXR0cmlic0ZvcigpIHtcbiAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBydWxlcyA9IEFycmF5KF9sZW45KSwgX2tleTkgPSAwOyBfa2V5OSA8IF9sZW45OyBfa2V5OSsrKSB7XG4gICAgcnVsZXNbX2tleTldID0gYXJndW1lbnRzW19rZXk5XTtcbiAgfVxuXG4gIHJ1bGVzID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkocnVsZXMpO1xuICB2YXIgaHRtbEF0dHJpYnV0ZXMgPSBydWxlcyA/IHJ1bGVzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgIGlkRm9yKHJ1bGUpOyAvLyB0aHJvd2F3YXkgY2hlY2sgZm9yIHJ1bGVcbiAgICB2YXIga2V5ID0gT2JqZWN0LmtleXMocnVsZSlbMF0sXG4gICAgICAgIHZhbHVlID0gcnVsZVtrZXldO1xuICAgIHJldHVybiBrZXkgKyAnPVwiJyArICh2YWx1ZSB8fCAnJykgKyAnXCInO1xuICB9KS5qb2luKCcgJykgOiAnJztcblxuICByZXR1cm4gaHRtbEF0dHJpYnV0ZXM7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBFTlRJVElFUyA9IFtbJ0FhY3V0ZScsIFsxOTNdXSwgWydhYWN1dGUnLCBbMjI1XV0sIFsnQWJyZXZlJywgWzI1OF1dLCBbJ2FicmV2ZScsIFsyNTldXSwgWydhYycsIFs4NzY2XV0sIFsnYWNkJywgWzg3NjddXSwgWydhY0UnLCBbODc2NiwgODE5XV0sIFsnQWNpcmMnLCBbMTk0XV0sIFsnYWNpcmMnLCBbMjI2XV0sIFsnYWN1dGUnLCBbMTgwXV0sIFsnQWN5JywgWzEwNDBdXSwgWydhY3knLCBbMTA3Ml1dLCBbJ0FFbGlnJywgWzE5OF1dLCBbJ2FlbGlnJywgWzIzMF1dLCBbJ2FmJywgWzgyODldXSwgWydBZnInLCBbMTIwMDY4XV0sIFsnYWZyJywgWzEyMDA5NF1dLCBbJ0FncmF2ZScsIFsxOTJdXSwgWydhZ3JhdmUnLCBbMjI0XV0sIFsnYWxlZnN5bScsIFs4NTAxXV0sIFsnYWxlcGgnLCBbODUwMV1dLCBbJ0FscGhhJywgWzkxM11dLCBbJ2FscGhhJywgWzk0NV1dLCBbJ0FtYWNyJywgWzI1Nl1dLCBbJ2FtYWNyJywgWzI1N11dLCBbJ2FtYWxnJywgWzEwODE1XV0sIFsnYW1wJywgWzM4XV0sIFsnQU1QJywgWzM4XV0sIFsnYW5kYW5kJywgWzEwODM3XV0sIFsnQW5kJywgWzEwODM1XV0sIFsnYW5kJywgWzg3NDNdXSwgWydhbmRkJywgWzEwODQ0XV0sIFsnYW5kc2xvcGUnLCBbMTA4NDBdXSwgWydhbmR2JywgWzEwODQyXV0sIFsnYW5nJywgWzg3MzZdXSwgWydhbmdlJywgWzEwNjYwXV0sIFsnYW5nbGUnLCBbODczNl1dLCBbJ2FuZ21zZGFhJywgWzEwNjY0XV0sIFsnYW5nbXNkYWInLCBbMTA2NjVdXSwgWydhbmdtc2RhYycsIFsxMDY2Nl1dLCBbJ2FuZ21zZGFkJywgWzEwNjY3XV0sIFsnYW5nbXNkYWUnLCBbMTA2NjhdXSwgWydhbmdtc2RhZicsIFsxMDY2OV1dLCBbJ2FuZ21zZGFnJywgWzEwNjcwXV0sIFsnYW5nbXNkYWgnLCBbMTA2NzFdXSwgWydhbmdtc2QnLCBbODczN11dLCBbJ2FuZ3J0JywgWzg3MzVdXSwgWydhbmdydHZiJywgWzg4OTRdXSwgWydhbmdydHZiZCcsIFsxMDY1M11dLCBbJ2FuZ3NwaCcsIFs4NzM4XV0sIFsnYW5nc3QnLCBbMTk3XV0sIFsnYW5nemFycicsIFs5MDg0XV0sIFsnQW9nb24nLCBbMjYwXV0sIFsnYW9nb24nLCBbMjYxXV0sIFsnQW9wZicsIFsxMjAxMjBdXSwgWydhb3BmJywgWzEyMDE0Nl1dLCBbJ2FwYWNpcicsIFsxMDg2M11dLCBbJ2FwJywgWzg3NzZdXSwgWydhcEUnLCBbMTA4NjRdXSwgWydhcGUnLCBbODc3OF1dLCBbJ2FwaWQnLCBbODc3OV1dLCBbJ2Fwb3MnLCBbMzldXSwgWydBcHBseUZ1bmN0aW9uJywgWzgyODldXSwgWydhcHByb3gnLCBbODc3Nl1dLCBbJ2FwcHJveGVxJywgWzg3NzhdXSwgWydBcmluZycsIFsxOTddXSwgWydhcmluZycsIFsyMjldXSwgWydBc2NyJywgWzExOTk2NF1dLCBbJ2FzY3InLCBbMTE5OTkwXV0sIFsnQXNzaWduJywgWzg3ODhdXSwgWydhc3QnLCBbNDJdXSwgWydhc3ltcCcsIFs4Nzc2XV0sIFsnYXN5bXBlcScsIFs4NzgxXV0sIFsnQXRpbGRlJywgWzE5NV1dLCBbJ2F0aWxkZScsIFsyMjddXSwgWydBdW1sJywgWzE5Nl1dLCBbJ2F1bWwnLCBbMjI4XV0sIFsnYXdjb25pbnQnLCBbODc1NV1dLCBbJ2F3aW50JywgWzEwNzY5XV0sIFsnYmFja2NvbmcnLCBbODc4MF1dLCBbJ2JhY2tlcHNpbG9uJywgWzEwMTRdXSwgWydiYWNrcHJpbWUnLCBbODI0NV1dLCBbJ2JhY2tzaW0nLCBbODc2NV1dLCBbJ2JhY2tzaW1lcScsIFs4OTA5XV0sIFsnQmFja3NsYXNoJywgWzg3MjZdXSwgWydCYXJ2JywgWzEwOTgzXV0sIFsnYmFydmVlJywgWzg4OTNdXSwgWydiYXJ3ZWQnLCBbODk2NV1dLCBbJ0JhcndlZCcsIFs4OTY2XV0sIFsnYmFyd2VkZ2UnLCBbODk2NV1dLCBbJ2JicmsnLCBbOTE0MV1dLCBbJ2Jicmt0YnJrJywgWzkxNDJdXSwgWydiY29uZycsIFs4NzgwXV0sIFsnQmN5JywgWzEwNDFdXSwgWydiY3knLCBbMTA3M11dLCBbJ2JkcXVvJywgWzgyMjJdXSwgWydiZWNhdXMnLCBbODc1N11dLCBbJ2JlY2F1c2UnLCBbODc1N11dLCBbJ0JlY2F1c2UnLCBbODc1N11dLCBbJ2JlbXB0eXYnLCBbMTA2NzJdXSwgWydiZXBzaScsIFsxMDE0XV0sIFsnYmVybm91JywgWzg0OTJdXSwgWydCZXJub3VsbGlzJywgWzg0OTJdXSwgWydCZXRhJywgWzkxNF1dLCBbJ2JldGEnLCBbOTQ2XV0sIFsnYmV0aCcsIFs4NTAyXV0sIFsnYmV0d2VlbicsIFs4ODEyXV0sIFsnQmZyJywgWzEyMDA2OV1dLCBbJ2JmcicsIFsxMjAwOTVdXSwgWydiaWdjYXAnLCBbODg5OF1dLCBbJ2JpZ2NpcmMnLCBbOTcxMV1dLCBbJ2JpZ2N1cCcsIFs4ODk5XV0sIFsnYmlnb2RvdCcsIFsxMDc1Ml1dLCBbJ2JpZ29wbHVzJywgWzEwNzUzXV0sIFsnYmlnb3RpbWVzJywgWzEwNzU0XV0sIFsnYmlnc3FjdXAnLCBbMTA3NThdXSwgWydiaWdzdGFyJywgWzk3MzNdXSwgWydiaWd0cmlhbmdsZWRvd24nLCBbOTY2MV1dLCBbJ2JpZ3RyaWFuZ2xldXAnLCBbOTY1MV1dLCBbJ2JpZ3VwbHVzJywgWzEwNzU2XV0sIFsnYmlndmVlJywgWzg4OTddXSwgWydiaWd3ZWRnZScsIFs4ODk2XV0sIFsnYmthcm93JywgWzEwNTA5XV0sIFsnYmxhY2tsb3plbmdlJywgWzEwNzMxXV0sIFsnYmxhY2tzcXVhcmUnLCBbOTY0Ml1dLCBbJ2JsYWNrdHJpYW5nbGUnLCBbOTY1Ml1dLCBbJ2JsYWNrdHJpYW5nbGVkb3duJywgWzk2NjJdXSwgWydibGFja3RyaWFuZ2xlbGVmdCcsIFs5NjY2XV0sIFsnYmxhY2t0cmlhbmdsZXJpZ2h0JywgWzk2NTZdXSwgWydibGFuaycsIFs5MjUxXV0sIFsnYmxrMTInLCBbOTYxOF1dLCBbJ2JsazE0JywgWzk2MTddXSwgWydibGszNCcsIFs5NjE5XV0sIFsnYmxvY2snLCBbOTYwOF1dLCBbJ2JuZScsIFs2MSwgODQyMV1dLCBbJ2JuZXF1aXYnLCBbODgwMSwgODQyMV1dLCBbJ2JOb3QnLCBbMTA5ODldXSwgWydibm90JywgWzg5NzZdXSwgWydCb3BmJywgWzEyMDEyMV1dLCBbJ2JvcGYnLCBbMTIwMTQ3XV0sIFsnYm90JywgWzg4NjldXSwgWydib3R0b20nLCBbODg2OV1dLCBbJ2Jvd3RpZScsIFs4OTA0XV0sIFsnYm94Ym94JywgWzEwNjk3XV0sIFsnYm94ZGwnLCBbOTQ4OF1dLCBbJ2JveGRMJywgWzk1NTddXSwgWydib3hEbCcsIFs5NTU4XV0sIFsnYm94REwnLCBbOTU1OV1dLCBbJ2JveGRyJywgWzk0ODRdXSwgWydib3hkUicsIFs5NTU0XV0sIFsnYm94RHInLCBbOTU1NV1dLCBbJ2JveERSJywgWzk1NTZdXSwgWydib3hoJywgWzk0NzJdXSwgWydib3hIJywgWzk1NTJdXSwgWydib3hoZCcsIFs5NTE2XV0sIFsnYm94SGQnLCBbOTU3Ml1dLCBbJ2JveGhEJywgWzk1NzNdXSwgWydib3hIRCcsIFs5NTc0XV0sIFsnYm94aHUnLCBbOTUyNF1dLCBbJ2JveEh1JywgWzk1NzVdXSwgWydib3hoVScsIFs5NTc2XV0sIFsnYm94SFUnLCBbOTU3N11dLCBbJ2JveG1pbnVzJywgWzg4NjNdXSwgWydib3hwbHVzJywgWzg4NjJdXSwgWydib3h0aW1lcycsIFs4ODY0XV0sIFsnYm94dWwnLCBbOTQ5Nl1dLCBbJ2JveHVMJywgWzk1NjNdXSwgWydib3hVbCcsIFs5NTY0XV0sIFsnYm94VUwnLCBbOTU2NV1dLCBbJ2JveHVyJywgWzk0OTJdXSwgWydib3h1UicsIFs5NTYwXV0sIFsnYm94VXInLCBbOTU2MV1dLCBbJ2JveFVSJywgWzk1NjJdXSwgWydib3h2JywgWzk0NzRdXSwgWydib3hWJywgWzk1NTNdXSwgWydib3h2aCcsIFs5NTMyXV0sIFsnYm94dkgnLCBbOTU3OF1dLCBbJ2JveFZoJywgWzk1NzldXSwgWydib3hWSCcsIFs5NTgwXV0sIFsnYm94dmwnLCBbOTUwOF1dLCBbJ2JveHZMJywgWzk1NjldXSwgWydib3hWbCcsIFs5NTcwXV0sIFsnYm94VkwnLCBbOTU3MV1dLCBbJ2JveHZyJywgWzk1MDBdXSwgWydib3h2UicsIFs5NTY2XV0sIFsnYm94VnInLCBbOTU2N11dLCBbJ2JveFZSJywgWzk1NjhdXSwgWydicHJpbWUnLCBbODI0NV1dLCBbJ2JyZXZlJywgWzcyOF1dLCBbJ0JyZXZlJywgWzcyOF1dLCBbJ2JydmJhcicsIFsxNjZdXSwgWydic2NyJywgWzExOTk5MV1dLCBbJ0JzY3InLCBbODQ5Ml1dLCBbJ2JzZW1pJywgWzgyNzFdXSwgWydic2ltJywgWzg3NjVdXSwgWydic2ltZScsIFs4OTA5XV0sIFsnYnNvbGInLCBbMTA2OTNdXSwgWydic29sJywgWzkyXV0sIFsnYnNvbGhzdWInLCBbMTAxODRdXSwgWydidWxsJywgWzgyMjZdXSwgWydidWxsZXQnLCBbODIyNl1dLCBbJ2J1bXAnLCBbODc4Ml1dLCBbJ2J1bXBFJywgWzEwOTI2XV0sIFsnYnVtcGUnLCBbODc4M11dLCBbJ0J1bXBlcScsIFs4NzgyXV0sIFsnYnVtcGVxJywgWzg3ODNdXSwgWydDYWN1dGUnLCBbMjYyXV0sIFsnY2FjdXRlJywgWzI2M11dLCBbJ2NhcGFuZCcsIFsxMDgyMF1dLCBbJ2NhcGJyY3VwJywgWzEwODI1XV0sIFsnY2FwY2FwJywgWzEwODI3XV0sIFsnY2FwJywgWzg3NDVdXSwgWydDYXAnLCBbODkxNF1dLCBbJ2NhcGN1cCcsIFsxMDgyM11dLCBbJ2NhcGRvdCcsIFsxMDgxNl1dLCBbJ0NhcGl0YWxEaWZmZXJlbnRpYWxEJywgWzg1MTddXSwgWydjYXBzJywgWzg3NDUsIDY1MDI0XV0sIFsnY2FyZXQnLCBbODI1N11dLCBbJ2Nhcm9uJywgWzcxMV1dLCBbJ0NheWxleXMnLCBbODQ5M11dLCBbJ2NjYXBzJywgWzEwODI5XV0sIFsnQ2Nhcm9uJywgWzI2OF1dLCBbJ2NjYXJvbicsIFsyNjldXSwgWydDY2VkaWwnLCBbMTk5XV0sIFsnY2NlZGlsJywgWzIzMV1dLCBbJ0NjaXJjJywgWzI2NF1dLCBbJ2NjaXJjJywgWzI2NV1dLCBbJ0Njb25pbnQnLCBbODc1Ml1dLCBbJ2NjdXBzJywgWzEwODI4XV0sIFsnY2N1cHNzbScsIFsxMDgzMl1dLCBbJ0Nkb3QnLCBbMjY2XV0sIFsnY2RvdCcsIFsyNjddXSwgWydjZWRpbCcsIFsxODRdXSwgWydDZWRpbGxhJywgWzE4NF1dLCBbJ2NlbXB0eXYnLCBbMTA2NzRdXSwgWydjZW50JywgWzE2Ml1dLCBbJ2NlbnRlcmRvdCcsIFsxODNdXSwgWydDZW50ZXJEb3QnLCBbMTgzXV0sIFsnY2ZyJywgWzEyMDA5Nl1dLCBbJ0NmcicsIFs4NDkzXV0sIFsnQ0hjeScsIFsxMDYzXV0sIFsnY2hjeScsIFsxMDk1XV0sIFsnY2hlY2snLCBbMTAwMDNdXSwgWydjaGVja21hcmsnLCBbMTAwMDNdXSwgWydDaGknLCBbOTM1XV0sIFsnY2hpJywgWzk2N11dLCBbJ2NpcmMnLCBbNzEwXV0sIFsnY2lyY2VxJywgWzg3OTFdXSwgWydjaXJjbGVhcnJvd2xlZnQnLCBbODYzNF1dLCBbJ2NpcmNsZWFycm93cmlnaHQnLCBbODYzNV1dLCBbJ2NpcmNsZWRhc3QnLCBbODg1OV1dLCBbJ2NpcmNsZWRjaXJjJywgWzg4NThdXSwgWydjaXJjbGVkZGFzaCcsIFs4ODYxXV0sIFsnQ2lyY2xlRG90JywgWzg4NTddXSwgWydjaXJjbGVkUicsIFsxNzRdXSwgWydjaXJjbGVkUycsIFs5NDE2XV0sIFsnQ2lyY2xlTWludXMnLCBbODg1NF1dLCBbJ0NpcmNsZVBsdXMnLCBbODg1M11dLCBbJ0NpcmNsZVRpbWVzJywgWzg4NTVdXSwgWydjaXInLCBbOTY3NV1dLCBbJ2NpckUnLCBbMTA2OTFdXSwgWydjaXJlJywgWzg3OTFdXSwgWydjaXJmbmludCcsIFsxMDc2OF1dLCBbJ2Npcm1pZCcsIFsxMDk5MV1dLCBbJ2NpcnNjaXInLCBbMTA2OTBdXSwgWydDbG9ja3dpc2VDb250b3VySW50ZWdyYWwnLCBbODc1NF1dLCBbJ0Nsb3NlQ3VybHlEb3VibGVRdW90ZScsIFs4MjIxXV0sIFsnQ2xvc2VDdXJseVF1b3RlJywgWzgyMTddXSwgWydjbHVicycsIFs5ODI3XV0sIFsnY2x1YnN1aXQnLCBbOTgyN11dLCBbJ2NvbG9uJywgWzU4XV0sIFsnQ29sb24nLCBbODc1OV1dLCBbJ0NvbG9uZScsIFsxMDg2OF1dLCBbJ2NvbG9uZScsIFs4Nzg4XV0sIFsnY29sb25lcScsIFs4Nzg4XV0sIFsnY29tbWEnLCBbNDRdXSwgWydjb21tYXQnLCBbNjRdXSwgWydjb21wJywgWzg3MDVdXSwgWydjb21wZm4nLCBbODcyOF1dLCBbJ2NvbXBsZW1lbnQnLCBbODcwNV1dLCBbJ2NvbXBsZXhlcycsIFs4NDUwXV0sIFsnY29uZycsIFs4NzczXV0sIFsnY29uZ2RvdCcsIFsxMDg2MV1dLCBbJ0NvbmdydWVudCcsIFs4ODAxXV0sIFsnY29uaW50JywgWzg3NTBdXSwgWydDb25pbnQnLCBbODc1MV1dLCBbJ0NvbnRvdXJJbnRlZ3JhbCcsIFs4NzUwXV0sIFsnY29wZicsIFsxMjAxNDhdXSwgWydDb3BmJywgWzg0NTBdXSwgWydjb3Byb2QnLCBbODcyMF1dLCBbJ0NvcHJvZHVjdCcsIFs4NzIwXV0sIFsnY29weScsIFsxNjldXSwgWydDT1BZJywgWzE2OV1dLCBbJ2NvcHlzcicsIFs4NDcxXV0sIFsnQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzU1XV0sIFsnY3JhcnInLCBbODYyOV1dLCBbJ2Nyb3NzJywgWzEwMDA3XV0sIFsnQ3Jvc3MnLCBbMTA3OTldXSwgWydDc2NyJywgWzExOTk2Nl1dLCBbJ2NzY3InLCBbMTE5OTkyXV0sIFsnY3N1YicsIFsxMDk1OV1dLCBbJ2NzdWJlJywgWzEwOTYxXV0sIFsnY3N1cCcsIFsxMDk2MF1dLCBbJ2NzdXBlJywgWzEwOTYyXV0sIFsnY3Rkb3QnLCBbODk0M11dLCBbJ2N1ZGFycmwnLCBbMTA1NTJdXSwgWydjdWRhcnJyJywgWzEwNTQ5XV0sIFsnY3VlcHInLCBbODkyNl1dLCBbJ2N1ZXNjJywgWzg5MjddXSwgWydjdWxhcnInLCBbODYzMF1dLCBbJ2N1bGFycnAnLCBbMTA1NTddXSwgWydjdXBicmNhcCcsIFsxMDgyNF1dLCBbJ2N1cGNhcCcsIFsxMDgyMl1dLCBbJ0N1cENhcCcsIFs4NzgxXV0sIFsnY3VwJywgWzg3NDZdXSwgWydDdXAnLCBbODkxNV1dLCBbJ2N1cGN1cCcsIFsxMDgyNl1dLCBbJ2N1cGRvdCcsIFs4ODQ1XV0sIFsnY3Vwb3InLCBbMTA4MjFdXSwgWydjdXBzJywgWzg3NDYsIDY1MDI0XV0sIFsnY3VyYXJyJywgWzg2MzFdXSwgWydjdXJhcnJtJywgWzEwNTU2XV0sIFsnY3VybHllcXByZWMnLCBbODkyNl1dLCBbJ2N1cmx5ZXFzdWNjJywgWzg5MjddXSwgWydjdXJseXZlZScsIFs4OTEwXV0sIFsnY3VybHl3ZWRnZScsIFs4OTExXV0sIFsnY3VycmVuJywgWzE2NF1dLCBbJ2N1cnZlYXJyb3dsZWZ0JywgWzg2MzBdXSwgWydjdXJ2ZWFycm93cmlnaHQnLCBbODYzMV1dLCBbJ2N1dmVlJywgWzg5MTBdXSwgWydjdXdlZCcsIFs4OTExXV0sIFsnY3djb25pbnQnLCBbODc1NF1dLCBbJ2N3aW50JywgWzg3NTNdXSwgWydjeWxjdHknLCBbOTAwNV1dLCBbJ2RhZ2dlcicsIFs4MjI0XV0sIFsnRGFnZ2VyJywgWzgyMjVdXSwgWydkYWxldGgnLCBbODUwNF1dLCBbJ2RhcnInLCBbODU5NV1dLCBbJ0RhcnInLCBbODYwOV1dLCBbJ2RBcnInLCBbODY1OV1dLCBbJ2Rhc2gnLCBbODIwOF1dLCBbJ0Rhc2h2JywgWzEwOTgwXV0sIFsnZGFzaHYnLCBbODg2N11dLCBbJ2Ria2Fyb3cnLCBbMTA1MTFdXSwgWydkYmxhYycsIFs3MzNdXSwgWydEY2Fyb24nLCBbMjcwXV0sIFsnZGNhcm9uJywgWzI3MV1dLCBbJ0RjeScsIFsxMDQ0XV0sIFsnZGN5JywgWzEwNzZdXSwgWydkZGFnZ2VyJywgWzgyMjVdXSwgWydkZGFycicsIFs4NjUwXV0sIFsnREQnLCBbODUxN11dLCBbJ2RkJywgWzg1MThdXSwgWydERG90cmFoZCcsIFsxMDUxM11dLCBbJ2Rkb3RzZXEnLCBbMTA4NzFdXSwgWydkZWcnLCBbMTc2XV0sIFsnRGVsJywgWzg3MTFdXSwgWydEZWx0YScsIFs5MTZdXSwgWydkZWx0YScsIFs5NDhdXSwgWydkZW1wdHl2JywgWzEwNjczXV0sIFsnZGZpc2h0JywgWzEwNjIzXV0sIFsnRGZyJywgWzEyMDA3MV1dLCBbJ2RmcicsIFsxMjAwOTddXSwgWydkSGFyJywgWzEwNTk3XV0sIFsnZGhhcmwnLCBbODY0M11dLCBbJ2RoYXJyJywgWzg2NDJdXSwgWydEaWFjcml0aWNhbEFjdXRlJywgWzE4MF1dLCBbJ0RpYWNyaXRpY2FsRG90JywgWzcyOV1dLCBbJ0RpYWNyaXRpY2FsRG91YmxlQWN1dGUnLCBbNzMzXV0sIFsnRGlhY3JpdGljYWxHcmF2ZScsIFs5Nl1dLCBbJ0RpYWNyaXRpY2FsVGlsZGUnLCBbNzMyXV0sIFsnZGlhbScsIFs4OTAwXV0sIFsnZGlhbW9uZCcsIFs4OTAwXV0sIFsnRGlhbW9uZCcsIFs4OTAwXV0sIFsnZGlhbW9uZHN1aXQnLCBbOTgzMF1dLCBbJ2RpYW1zJywgWzk4MzBdXSwgWydkaWUnLCBbMTY4XV0sIFsnRGlmZmVyZW50aWFsRCcsIFs4NTE4XV0sIFsnZGlnYW1tYScsIFs5ODldXSwgWydkaXNpbicsIFs4OTQ2XV0sIFsnZGl2JywgWzI0N11dLCBbJ2RpdmlkZScsIFsyNDddXSwgWydkaXZpZGVvbnRpbWVzJywgWzg5MDNdXSwgWydkaXZvbngnLCBbODkwM11dLCBbJ0RKY3knLCBbMTAyNl1dLCBbJ2RqY3knLCBbMTEwNl1dLCBbJ2RsY29ybicsIFs4OTkwXV0sIFsnZGxjcm9wJywgWzg5NzNdXSwgWydkb2xsYXInLCBbMzZdXSwgWydEb3BmJywgWzEyMDEyM11dLCBbJ2RvcGYnLCBbMTIwMTQ5XV0sIFsnRG90JywgWzE2OF1dLCBbJ2RvdCcsIFs3MjldXSwgWydEb3REb3QnLCBbODQxMl1dLCBbJ2RvdGVxJywgWzg3ODRdXSwgWydkb3RlcWRvdCcsIFs4Nzg1XV0sIFsnRG90RXF1YWwnLCBbODc4NF1dLCBbJ2RvdG1pbnVzJywgWzg3NjBdXSwgWydkb3RwbHVzJywgWzg3MjRdXSwgWydkb3RzcXVhcmUnLCBbODg2NV1dLCBbJ2RvdWJsZWJhcndlZGdlJywgWzg5NjZdXSwgWydEb3VibGVDb250b3VySW50ZWdyYWwnLCBbODc1MV1dLCBbJ0RvdWJsZURvdCcsIFsxNjhdXSwgWydEb3VibGVEb3duQXJyb3cnLCBbODY1OV1dLCBbJ0RvdWJsZUxlZnRBcnJvdycsIFs4NjU2XV0sIFsnRG91YmxlTGVmdFJpZ2h0QXJyb3cnLCBbODY2MF1dLCBbJ0RvdWJsZUxlZnRUZWUnLCBbMTA5ODBdXSwgWydEb3VibGVMb25nTGVmdEFycm93JywgWzEwMjMyXV0sIFsnRG91YmxlTG9uZ0xlZnRSaWdodEFycm93JywgWzEwMjM0XV0sIFsnRG91YmxlTG9uZ1JpZ2h0QXJyb3cnLCBbMTAyMzNdXSwgWydEb3VibGVSaWdodEFycm93JywgWzg2NThdXSwgWydEb3VibGVSaWdodFRlZScsIFs4ODcyXV0sIFsnRG91YmxlVXBBcnJvdycsIFs4NjU3XV0sIFsnRG91YmxlVXBEb3duQXJyb3cnLCBbODY2MV1dLCBbJ0RvdWJsZVZlcnRpY2FsQmFyJywgWzg3NDFdXSwgWydEb3duQXJyb3dCYXInLCBbMTA1MTVdXSwgWydkb3duYXJyb3cnLCBbODU5NV1dLCBbJ0Rvd25BcnJvdycsIFs4NTk1XV0sIFsnRG93bmFycm93JywgWzg2NTldXSwgWydEb3duQXJyb3dVcEFycm93JywgWzg2OTNdXSwgWydEb3duQnJldmUnLCBbNzg1XV0sIFsnZG93bmRvd25hcnJvd3MnLCBbODY1MF1dLCBbJ2Rvd25oYXJwb29ubGVmdCcsIFs4NjQzXV0sIFsnZG93bmhhcnBvb25yaWdodCcsIFs4NjQyXV0sIFsnRG93bkxlZnRSaWdodFZlY3RvcicsIFsxMDU3Nl1dLCBbJ0Rvd25MZWZ0VGVlVmVjdG9yJywgWzEwNTkwXV0sIFsnRG93bkxlZnRWZWN0b3JCYXInLCBbMTA1ODJdXSwgWydEb3duTGVmdFZlY3RvcicsIFs4NjM3XV0sIFsnRG93blJpZ2h0VGVlVmVjdG9yJywgWzEwNTkxXV0sIFsnRG93blJpZ2h0VmVjdG9yQmFyJywgWzEwNTgzXV0sIFsnRG93blJpZ2h0VmVjdG9yJywgWzg2NDFdXSwgWydEb3duVGVlQXJyb3cnLCBbODYxNV1dLCBbJ0Rvd25UZWUnLCBbODg2OF1dLCBbJ2RyYmthcm93JywgWzEwNTEyXV0sIFsnZHJjb3JuJywgWzg5OTFdXSwgWydkcmNyb3AnLCBbODk3Ml1dLCBbJ0RzY3InLCBbMTE5OTY3XV0sIFsnZHNjcicsIFsxMTk5OTNdXSwgWydEU2N5JywgWzEwMjldXSwgWydkc2N5JywgWzExMDldXSwgWydkc29sJywgWzEwNzQyXV0sIFsnRHN0cm9rJywgWzI3Ml1dLCBbJ2RzdHJvaycsIFsyNzNdXSwgWydkdGRvdCcsIFs4OTQ1XV0sIFsnZHRyaScsIFs5NjYzXV0sIFsnZHRyaWYnLCBbOTY2Ml1dLCBbJ2R1YXJyJywgWzg2OTNdXSwgWydkdWhhcicsIFsxMDYwN11dLCBbJ2R3YW5nbGUnLCBbMTA2NjJdXSwgWydEWmN5JywgWzEwMzldXSwgWydkemN5JywgWzExMTldXSwgWydkemlncmFycicsIFsxMDIzOV1dLCBbJ0VhY3V0ZScsIFsyMDFdXSwgWydlYWN1dGUnLCBbMjMzXV0sIFsnZWFzdGVyJywgWzEwODYyXV0sIFsnRWNhcm9uJywgWzI4Ml1dLCBbJ2VjYXJvbicsIFsyODNdXSwgWydFY2lyYycsIFsyMDJdXSwgWydlY2lyYycsIFsyMzRdXSwgWydlY2lyJywgWzg3OTBdXSwgWydlY29sb24nLCBbODc4OV1dLCBbJ0VjeScsIFsxMDY5XV0sIFsnZWN5JywgWzExMDFdXSwgWydlRERvdCcsIFsxMDg3MV1dLCBbJ0Vkb3QnLCBbMjc4XV0sIFsnZWRvdCcsIFsyNzldXSwgWydlRG90JywgWzg3ODVdXSwgWydlZScsIFs4NTE5XV0sIFsnZWZEb3QnLCBbODc4Nl1dLCBbJ0VmcicsIFsxMjAwNzJdXSwgWydlZnInLCBbMTIwMDk4XV0sIFsnZWcnLCBbMTA5MDZdXSwgWydFZ3JhdmUnLCBbMjAwXV0sIFsnZWdyYXZlJywgWzIzMl1dLCBbJ2VncycsIFsxMDkwMl1dLCBbJ2Vnc2RvdCcsIFsxMDkwNF1dLCBbJ2VsJywgWzEwOTA1XV0sIFsnRWxlbWVudCcsIFs4NzEyXV0sIFsnZWxpbnRlcnMnLCBbOTE5MV1dLCBbJ2VsbCcsIFs4NDY3XV0sIFsnZWxzJywgWzEwOTAxXV0sIFsnZWxzZG90JywgWzEwOTAzXV0sIFsnRW1hY3InLCBbMjc0XV0sIFsnZW1hY3InLCBbMjc1XV0sIFsnZW1wdHknLCBbODcwOV1dLCBbJ2VtcHR5c2V0JywgWzg3MDldXSwgWydFbXB0eVNtYWxsU3F1YXJlJywgWzk3MjNdXSwgWydlbXB0eXYnLCBbODcwOV1dLCBbJ0VtcHR5VmVyeVNtYWxsU3F1YXJlJywgWzk2NDNdXSwgWydlbXNwMTMnLCBbODE5Nl1dLCBbJ2Vtc3AxNCcsIFs4MTk3XV0sIFsnZW1zcCcsIFs4MTk1XV0sIFsnRU5HJywgWzMzMF1dLCBbJ2VuZycsIFszMzFdXSwgWydlbnNwJywgWzgxOTRdXSwgWydFb2dvbicsIFsyODBdXSwgWydlb2dvbicsIFsyODFdXSwgWydFb3BmJywgWzEyMDEyNF1dLCBbJ2VvcGYnLCBbMTIwMTUwXV0sIFsnZXBhcicsIFs4OTE3XV0sIFsnZXBhcnNsJywgWzEwNzIzXV0sIFsnZXBsdXMnLCBbMTA4NjVdXSwgWydlcHNpJywgWzk0OV1dLCBbJ0Vwc2lsb24nLCBbOTE3XV0sIFsnZXBzaWxvbicsIFs5NDldXSwgWydlcHNpdicsIFsxMDEzXV0sIFsnZXFjaXJjJywgWzg3OTBdXSwgWydlcWNvbG9uJywgWzg3ODldXSwgWydlcXNpbScsIFs4NzcwXV0sIFsnZXFzbGFudGd0cicsIFsxMDkwMl1dLCBbJ2Vxc2xhbnRsZXNzJywgWzEwOTAxXV0sIFsnRXF1YWwnLCBbMTA4NjldXSwgWydlcXVhbHMnLCBbNjFdXSwgWydFcXVhbFRpbGRlJywgWzg3NzBdXSwgWydlcXVlc3QnLCBbODc5OV1dLCBbJ0VxdWlsaWJyaXVtJywgWzg2NTJdXSwgWydlcXVpdicsIFs4ODAxXV0sIFsnZXF1aXZERCcsIFsxMDg3Ml1dLCBbJ2VxdnBhcnNsJywgWzEwNzI1XV0sIFsnZXJhcnInLCBbMTA2MDldXSwgWydlckRvdCcsIFs4Nzg3XV0sIFsnZXNjcicsIFs4NDk1XV0sIFsnRXNjcicsIFs4NDk2XV0sIFsnZXNkb3QnLCBbODc4NF1dLCBbJ0VzaW0nLCBbMTA4NjddXSwgWydlc2ltJywgWzg3NzBdXSwgWydFdGEnLCBbOTE5XV0sIFsnZXRhJywgWzk1MV1dLCBbJ0VUSCcsIFsyMDhdXSwgWydldGgnLCBbMjQwXV0sIFsnRXVtbCcsIFsyMDNdXSwgWydldW1sJywgWzIzNV1dLCBbJ2V1cm8nLCBbODM2NF1dLCBbJ2V4Y2wnLCBbMzNdXSwgWydleGlzdCcsIFs4NzA3XV0sIFsnRXhpc3RzJywgWzg3MDddXSwgWydleHBlY3RhdGlvbicsIFs4NDk2XV0sIFsnZXhwb25lbnRpYWxlJywgWzg1MTldXSwgWydFeHBvbmVudGlhbEUnLCBbODUxOV1dLCBbJ2ZhbGxpbmdkb3RzZXEnLCBbODc4Nl1dLCBbJ0ZjeScsIFsxMDYwXV0sIFsnZmN5JywgWzEwOTJdXSwgWydmZW1hbGUnLCBbOTc5Ml1dLCBbJ2ZmaWxpZycsIFs2NDI1OV1dLCBbJ2ZmbGlnJywgWzY0MjU2XV0sIFsnZmZsbGlnJywgWzY0MjYwXV0sIFsnRmZyJywgWzEyMDA3M11dLCBbJ2ZmcicsIFsxMjAwOTldXSwgWydmaWxpZycsIFs2NDI1N11dLCBbJ0ZpbGxlZFNtYWxsU3F1YXJlJywgWzk3MjRdXSwgWydGaWxsZWRWZXJ5U21hbGxTcXVhcmUnLCBbOTY0Ml1dLCBbJ2ZqbGlnJywgWzEwMiwgMTA2XV0sIFsnZmxhdCcsIFs5ODM3XV0sIFsnZmxsaWcnLCBbNjQyNThdXSwgWydmbHRucycsIFs5NjQ5XV0sIFsnZm5vZicsIFs0MDJdXSwgWydGb3BmJywgWzEyMDEyNV1dLCBbJ2ZvcGYnLCBbMTIwMTUxXV0sIFsnZm9yYWxsJywgWzg3MDRdXSwgWydGb3JBbGwnLCBbODcwNF1dLCBbJ2ZvcmsnLCBbODkxNl1dLCBbJ2Zvcmt2JywgWzEwOTY5XV0sIFsnRm91cmllcnRyZicsIFs4NDk3XV0sIFsnZnBhcnRpbnQnLCBbMTA3NjVdXSwgWydmcmFjMTInLCBbMTg5XV0sIFsnZnJhYzEzJywgWzg1MzFdXSwgWydmcmFjMTQnLCBbMTg4XV0sIFsnZnJhYzE1JywgWzg1MzNdXSwgWydmcmFjMTYnLCBbODUzN11dLCBbJ2ZyYWMxOCcsIFs4NTM5XV0sIFsnZnJhYzIzJywgWzg1MzJdXSwgWydmcmFjMjUnLCBbODUzNF1dLCBbJ2ZyYWMzNCcsIFsxOTBdXSwgWydmcmFjMzUnLCBbODUzNV1dLCBbJ2ZyYWMzOCcsIFs4NTQwXV0sIFsnZnJhYzQ1JywgWzg1MzZdXSwgWydmcmFjNTYnLCBbODUzOF1dLCBbJ2ZyYWM1OCcsIFs4NTQxXV0sIFsnZnJhYzc4JywgWzg1NDJdXSwgWydmcmFzbCcsIFs4MjYwXV0sIFsnZnJvd24nLCBbODk5NF1dLCBbJ2ZzY3InLCBbMTE5OTk1XV0sIFsnRnNjcicsIFs4NDk3XV0sIFsnZ2FjdXRlJywgWzUwMV1dLCBbJ0dhbW1hJywgWzkxNV1dLCBbJ2dhbW1hJywgWzk0N11dLCBbJ0dhbW1hZCcsIFs5ODhdXSwgWydnYW1tYWQnLCBbOTg5XV0sIFsnZ2FwJywgWzEwODg2XV0sIFsnR2JyZXZlJywgWzI4Nl1dLCBbJ2dicmV2ZScsIFsyODddXSwgWydHY2VkaWwnLCBbMjkwXV0sIFsnR2NpcmMnLCBbMjg0XV0sIFsnZ2NpcmMnLCBbMjg1XV0sIFsnR2N5JywgWzEwNDNdXSwgWydnY3knLCBbMTA3NV1dLCBbJ0dkb3QnLCBbMjg4XV0sIFsnZ2RvdCcsIFsyODldXSwgWydnZScsIFs4ODA1XV0sIFsnZ0UnLCBbODgwN11dLCBbJ2dFbCcsIFsxMDg5Ml1dLCBbJ2dlbCcsIFs4OTIzXV0sIFsnZ2VxJywgWzg4MDVdXSwgWydnZXFxJywgWzg4MDddXSwgWydnZXFzbGFudCcsIFsxMDg3OF1dLCBbJ2dlc2NjJywgWzEwOTIxXV0sIFsnZ2VzJywgWzEwODc4XV0sIFsnZ2VzZG90JywgWzEwODgwXV0sIFsnZ2VzZG90bycsIFsxMDg4Ml1dLCBbJ2dlc2RvdG9sJywgWzEwODg0XV0sIFsnZ2VzbCcsIFs4OTIzLCA2NTAyNF1dLCBbJ2dlc2xlcycsIFsxMDkwMF1dLCBbJ0dmcicsIFsxMjAwNzRdXSwgWydnZnInLCBbMTIwMTAwXV0sIFsnZ2cnLCBbODgxMV1dLCBbJ0dnJywgWzg5MjFdXSwgWydnZ2cnLCBbODkyMV1dLCBbJ2dpbWVsJywgWzg1MDNdXSwgWydHSmN5JywgWzEwMjddXSwgWydnamN5JywgWzExMDddXSwgWydnbGEnLCBbMTA5MTddXSwgWydnbCcsIFs4ODIzXV0sIFsnZ2xFJywgWzEwODk4XV0sIFsnZ2xqJywgWzEwOTE2XV0sIFsnZ25hcCcsIFsxMDg5MF1dLCBbJ2duYXBwcm94JywgWzEwODkwXV0sIFsnZ25lJywgWzEwODg4XV0sIFsnZ25FJywgWzg4MDldXSwgWydnbmVxJywgWzEwODg4XV0sIFsnZ25lcXEnLCBbODgwOV1dLCBbJ2duc2ltJywgWzg5MzVdXSwgWydHb3BmJywgWzEyMDEyNl1dLCBbJ2dvcGYnLCBbMTIwMTUyXV0sIFsnZ3JhdmUnLCBbOTZdXSwgWydHcmVhdGVyRXF1YWwnLCBbODgwNV1dLCBbJ0dyZWF0ZXJFcXVhbExlc3MnLCBbODkyM11dLCBbJ0dyZWF0ZXJGdWxsRXF1YWwnLCBbODgwN11dLCBbJ0dyZWF0ZXJHcmVhdGVyJywgWzEwOTE0XV0sIFsnR3JlYXRlckxlc3MnLCBbODgyM11dLCBbJ0dyZWF0ZXJTbGFudEVxdWFsJywgWzEwODc4XV0sIFsnR3JlYXRlclRpbGRlJywgWzg4MTldXSwgWydHc2NyJywgWzExOTk3MF1dLCBbJ2dzY3InLCBbODQ1OF1dLCBbJ2dzaW0nLCBbODgxOV1dLCBbJ2dzaW1lJywgWzEwODk0XV0sIFsnZ3NpbWwnLCBbMTA4OTZdXSwgWydndGNjJywgWzEwOTE5XV0sIFsnZ3RjaXInLCBbMTA4NzRdXSwgWydndCcsIFs2Ml1dLCBbJ0dUJywgWzYyXV0sIFsnR3QnLCBbODgxMV1dLCBbJ2d0ZG90JywgWzg5MTldXSwgWydndGxQYXInLCBbMTA2NDVdXSwgWydndHF1ZXN0JywgWzEwODc2XV0sIFsnZ3RyYXBwcm94JywgWzEwODg2XV0sIFsnZ3RyYXJyJywgWzEwNjE2XV0sIFsnZ3RyZG90JywgWzg5MTldXSwgWydndHJlcWxlc3MnLCBbODkyM11dLCBbJ2d0cmVxcWxlc3MnLCBbMTA4OTJdXSwgWydndHJsZXNzJywgWzg4MjNdXSwgWydndHJzaW0nLCBbODgxOV1dLCBbJ2d2ZXJ0bmVxcScsIFs4ODA5LCA2NTAyNF1dLCBbJ2d2bkUnLCBbODgwOSwgNjUwMjRdXSwgWydIYWNlaycsIFs3MTFdXSwgWydoYWlyc3AnLCBbODIwMl1dLCBbJ2hhbGYnLCBbMTg5XV0sIFsnaGFtaWx0JywgWzg0NTldXSwgWydIQVJEY3knLCBbMTA2Nl1dLCBbJ2hhcmRjeScsIFsxMDk4XV0sIFsnaGFycmNpcicsIFsxMDU2OF1dLCBbJ2hhcnInLCBbODU5Nl1dLCBbJ2hBcnInLCBbODY2MF1dLCBbJ2hhcnJ3JywgWzg2MjFdXSwgWydIYXQnLCBbOTRdXSwgWydoYmFyJywgWzg0NjNdXSwgWydIY2lyYycsIFsyOTJdXSwgWydoY2lyYycsIFsyOTNdXSwgWydoZWFydHMnLCBbOTgyOV1dLCBbJ2hlYXJ0c3VpdCcsIFs5ODI5XV0sIFsnaGVsbGlwJywgWzgyMzBdXSwgWydoZXJjb24nLCBbODg4OV1dLCBbJ2hmcicsIFsxMjAxMDFdXSwgWydIZnInLCBbODQ2MF1dLCBbJ0hpbGJlcnRTcGFjZScsIFs4NDU5XV0sIFsnaGtzZWFyb3cnLCBbMTA1MzNdXSwgWydoa3N3YXJvdycsIFsxMDUzNF1dLCBbJ2hvYXJyJywgWzg3MDNdXSwgWydob210aHQnLCBbODc2M11dLCBbJ2hvb2tsZWZ0YXJyb3cnLCBbODYxN11dLCBbJ2hvb2tyaWdodGFycm93JywgWzg2MThdXSwgWydob3BmJywgWzEyMDE1M11dLCBbJ0hvcGYnLCBbODQ2MV1dLCBbJ2hvcmJhcicsIFs4MjEzXV0sIFsnSG9yaXpvbnRhbExpbmUnLCBbOTQ3Ml1dLCBbJ2hzY3InLCBbMTE5OTk3XV0sIFsnSHNjcicsIFs4NDU5XV0sIFsnaHNsYXNoJywgWzg0NjNdXSwgWydIc3Ryb2snLCBbMjk0XV0sIFsnaHN0cm9rJywgWzI5NV1dLCBbJ0h1bXBEb3duSHVtcCcsIFs4NzgyXV0sIFsnSHVtcEVxdWFsJywgWzg3ODNdXSwgWydoeWJ1bGwnLCBbODI1OV1dLCBbJ2h5cGhlbicsIFs4MjA4XV0sIFsnSWFjdXRlJywgWzIwNV1dLCBbJ2lhY3V0ZScsIFsyMzddXSwgWydpYycsIFs4MjkxXV0sIFsnSWNpcmMnLCBbMjA2XV0sIFsnaWNpcmMnLCBbMjM4XV0sIFsnSWN5JywgWzEwNDhdXSwgWydpY3knLCBbMTA4MF1dLCBbJ0lkb3QnLCBbMzA0XV0sIFsnSUVjeScsIFsxMDQ1XV0sIFsnaWVjeScsIFsxMDc3XV0sIFsnaWV4Y2wnLCBbMTYxXV0sIFsnaWZmJywgWzg2NjBdXSwgWydpZnInLCBbMTIwMTAyXV0sIFsnSWZyJywgWzg0NjVdXSwgWydJZ3JhdmUnLCBbMjA0XV0sIFsnaWdyYXZlJywgWzIzNl1dLCBbJ2lpJywgWzg1MjBdXSwgWydpaWlpbnQnLCBbMTA3NjRdXSwgWydpaWludCcsIFs4NzQ5XV0sIFsnaWluZmluJywgWzEwNzE2XV0sIFsnaWlvdGEnLCBbODQ4OV1dLCBbJ0lKbGlnJywgWzMwNl1dLCBbJ2lqbGlnJywgWzMwN11dLCBbJ0ltYWNyJywgWzI5OF1dLCBbJ2ltYWNyJywgWzI5OV1dLCBbJ2ltYWdlJywgWzg0NjVdXSwgWydJbWFnaW5hcnlJJywgWzg1MjBdXSwgWydpbWFnbGluZScsIFs4NDY0XV0sIFsnaW1hZ3BhcnQnLCBbODQ2NV1dLCBbJ2ltYXRoJywgWzMwNV1dLCBbJ0ltJywgWzg0NjVdXSwgWydpbW9mJywgWzg4ODddXSwgWydpbXBlZCcsIFs0MzddXSwgWydJbXBsaWVzJywgWzg2NThdXSwgWydpbmNhcmUnLCBbODQ1M11dLCBbJ2luJywgWzg3MTJdXSwgWydpbmZpbicsIFs4NzM0XV0sIFsnaW5maW50aWUnLCBbMTA3MTddXSwgWydpbm9kb3QnLCBbMzA1XV0sIFsnaW50Y2FsJywgWzg4OTBdXSwgWydpbnQnLCBbODc0N11dLCBbJ0ludCcsIFs4NzQ4XV0sIFsnaW50ZWdlcnMnLCBbODQ4NF1dLCBbJ0ludGVncmFsJywgWzg3NDddXSwgWydpbnRlcmNhbCcsIFs4ODkwXV0sIFsnSW50ZXJzZWN0aW9uJywgWzg4OThdXSwgWydpbnRsYXJoaycsIFsxMDc3NV1dLCBbJ2ludHByb2QnLCBbMTA4MTJdXSwgWydJbnZpc2libGVDb21tYScsIFs4MjkxXV0sIFsnSW52aXNpYmxlVGltZXMnLCBbODI5MF1dLCBbJ0lPY3knLCBbMTAyNV1dLCBbJ2lvY3knLCBbMTEwNV1dLCBbJ0lvZ29uJywgWzMwMl1dLCBbJ2lvZ29uJywgWzMwM11dLCBbJ0lvcGYnLCBbMTIwMTI4XV0sIFsnaW9wZicsIFsxMjAxNTRdXSwgWydJb3RhJywgWzkyMV1dLCBbJ2lvdGEnLCBbOTUzXV0sIFsnaXByb2QnLCBbMTA4MTJdXSwgWydpcXVlc3QnLCBbMTkxXV0sIFsnaXNjcicsIFsxMTk5OThdXSwgWydJc2NyJywgWzg0NjRdXSwgWydpc2luJywgWzg3MTJdXSwgWydpc2luZG90JywgWzg5NDldXSwgWydpc2luRScsIFs4OTUzXV0sIFsnaXNpbnMnLCBbODk0OF1dLCBbJ2lzaW5zdicsIFs4OTQ3XV0sIFsnaXNpbnYnLCBbODcxMl1dLCBbJ2l0JywgWzgyOTBdXSwgWydJdGlsZGUnLCBbMjk2XV0sIFsnaXRpbGRlJywgWzI5N11dLCBbJ0l1a2N5JywgWzEwMzBdXSwgWydpdWtjeScsIFsxMTEwXV0sIFsnSXVtbCcsIFsyMDddXSwgWydpdW1sJywgWzIzOV1dLCBbJ0pjaXJjJywgWzMwOF1dLCBbJ2pjaXJjJywgWzMwOV1dLCBbJ0pjeScsIFsxMDQ5XV0sIFsnamN5JywgWzEwODFdXSwgWydKZnInLCBbMTIwMDc3XV0sIFsnamZyJywgWzEyMDEwM11dLCBbJ2ptYXRoJywgWzU2N11dLCBbJ0pvcGYnLCBbMTIwMTI5XV0sIFsnam9wZicsIFsxMjAxNTVdXSwgWydKc2NyJywgWzExOTk3M11dLCBbJ2pzY3InLCBbMTE5OTk5XV0sIFsnSnNlcmN5JywgWzEwMzJdXSwgWydqc2VyY3knLCBbMTExMl1dLCBbJ0p1a2N5JywgWzEwMjhdXSwgWydqdWtjeScsIFsxMTA4XV0sIFsnS2FwcGEnLCBbOTIyXV0sIFsna2FwcGEnLCBbOTU0XV0sIFsna2FwcGF2JywgWzEwMDhdXSwgWydLY2VkaWwnLCBbMzEwXV0sIFsna2NlZGlsJywgWzMxMV1dLCBbJ0tjeScsIFsxMDUwXV0sIFsna2N5JywgWzEwODJdXSwgWydLZnInLCBbMTIwMDc4XV0sIFsna2ZyJywgWzEyMDEwNF1dLCBbJ2tncmVlbicsIFszMTJdXSwgWydLSGN5JywgWzEwNjFdXSwgWydraGN5JywgWzEwOTNdXSwgWydLSmN5JywgWzEwMzZdXSwgWydramN5JywgWzExMTZdXSwgWydLb3BmJywgWzEyMDEzMF1dLCBbJ2tvcGYnLCBbMTIwMTU2XV0sIFsnS3NjcicsIFsxMTk5NzRdXSwgWydrc2NyJywgWzEyMDAwMF1dLCBbJ2xBYXJyJywgWzg2NjZdXSwgWydMYWN1dGUnLCBbMzEzXV0sIFsnbGFjdXRlJywgWzMxNF1dLCBbJ2xhZW1wdHl2JywgWzEwNjc2XV0sIFsnbGFncmFuJywgWzg0NjZdXSwgWydMYW1iZGEnLCBbOTIzXV0sIFsnbGFtYmRhJywgWzk1NV1dLCBbJ2xhbmcnLCBbMTAyMTZdXSwgWydMYW5nJywgWzEwMjE4XV0sIFsnbGFuZ2QnLCBbMTA2NDFdXSwgWydsYW5nbGUnLCBbMTAyMTZdXSwgWydsYXAnLCBbMTA4ODVdXSwgWydMYXBsYWNldHJmJywgWzg0NjZdXSwgWydsYXF1bycsIFsxNzFdXSwgWydsYXJyYicsIFs4Njc2XV0sIFsnbGFycmJmcycsIFsxMDUyN11dLCBbJ2xhcnInLCBbODU5Ml1dLCBbJ0xhcnInLCBbODYwNl1dLCBbJ2xBcnInLCBbODY1Nl1dLCBbJ2xhcnJmcycsIFsxMDUyNV1dLCBbJ2xhcnJoaycsIFs4NjE3XV0sIFsnbGFycmxwJywgWzg2MTldXSwgWydsYXJycGwnLCBbMTA1NTNdXSwgWydsYXJyc2ltJywgWzEwNjExXV0sIFsnbGFycnRsJywgWzg2MTBdXSwgWydsYXRhaWwnLCBbMTA1MjFdXSwgWydsQXRhaWwnLCBbMTA1MjNdXSwgWydsYXQnLCBbMTA5MjNdXSwgWydsYXRlJywgWzEwOTI1XV0sIFsnbGF0ZXMnLCBbMTA5MjUsIDY1MDI0XV0sIFsnbGJhcnInLCBbMTA1MDhdXSwgWydsQmFycicsIFsxMDUxMF1dLCBbJ2xiYnJrJywgWzEwMDk4XV0sIFsnbGJyYWNlJywgWzEyM11dLCBbJ2xicmFjaycsIFs5MV1dLCBbJ2xicmtlJywgWzEwNjM1XV0sIFsnbGJya3NsZCcsIFsxMDYzOV1dLCBbJ2xicmtzbHUnLCBbMTA2MzddXSwgWydMY2Fyb24nLCBbMzE3XV0sIFsnbGNhcm9uJywgWzMxOF1dLCBbJ0xjZWRpbCcsIFszMTVdXSwgWydsY2VkaWwnLCBbMzE2XV0sIFsnbGNlaWwnLCBbODk2OF1dLCBbJ2xjdWInLCBbMTIzXV0sIFsnTGN5JywgWzEwNTFdXSwgWydsY3knLCBbMTA4M11dLCBbJ2xkY2EnLCBbMTA1NTBdXSwgWydsZHF1bycsIFs4MjIwXV0sIFsnbGRxdW9yJywgWzgyMjJdXSwgWydsZHJkaGFyJywgWzEwNTk5XV0sIFsnbGRydXNoYXInLCBbMTA1NzFdXSwgWydsZHNoJywgWzg2MjZdXSwgWydsZScsIFs4ODA0XV0sIFsnbEUnLCBbODgwNl1dLCBbJ0xlZnRBbmdsZUJyYWNrZXQnLCBbMTAyMTZdXSwgWydMZWZ0QXJyb3dCYXInLCBbODY3Nl1dLCBbJ2xlZnRhcnJvdycsIFs4NTkyXV0sIFsnTGVmdEFycm93JywgWzg1OTJdXSwgWydMZWZ0YXJyb3cnLCBbODY1Nl1dLCBbJ0xlZnRBcnJvd1JpZ2h0QXJyb3cnLCBbODY0Nl1dLCBbJ2xlZnRhcnJvd3RhaWwnLCBbODYxMF1dLCBbJ0xlZnRDZWlsaW5nJywgWzg5NjhdXSwgWydMZWZ0RG91YmxlQnJhY2tldCcsIFsxMDIxNF1dLCBbJ0xlZnREb3duVGVlVmVjdG9yJywgWzEwNTkzXV0sIFsnTGVmdERvd25WZWN0b3JCYXInLCBbMTA1ODVdXSwgWydMZWZ0RG93blZlY3RvcicsIFs4NjQzXV0sIFsnTGVmdEZsb29yJywgWzg5NzBdXSwgWydsZWZ0aGFycG9vbmRvd24nLCBbODYzN11dLCBbJ2xlZnRoYXJwb29udXAnLCBbODYzNl1dLCBbJ2xlZnRsZWZ0YXJyb3dzJywgWzg2NDddXSwgWydsZWZ0cmlnaHRhcnJvdycsIFs4NTk2XV0sIFsnTGVmdFJpZ2h0QXJyb3cnLCBbODU5Nl1dLCBbJ0xlZnRyaWdodGFycm93JywgWzg2NjBdXSwgWydsZWZ0cmlnaHRhcnJvd3MnLCBbODY0Nl1dLCBbJ2xlZnRyaWdodGhhcnBvb25zJywgWzg2NTFdXSwgWydsZWZ0cmlnaHRzcXVpZ2Fycm93JywgWzg2MjFdXSwgWydMZWZ0UmlnaHRWZWN0b3InLCBbMTA1NzRdXSwgWydMZWZ0VGVlQXJyb3cnLCBbODYxMl1dLCBbJ0xlZnRUZWUnLCBbODg2N11dLCBbJ0xlZnRUZWVWZWN0b3InLCBbMTA1ODZdXSwgWydsZWZ0dGhyZWV0aW1lcycsIFs4OTA3XV0sIFsnTGVmdFRyaWFuZ2xlQmFyJywgWzEwNzAzXV0sIFsnTGVmdFRyaWFuZ2xlJywgWzg4ODJdXSwgWydMZWZ0VHJpYW5nbGVFcXVhbCcsIFs4ODg0XV0sIFsnTGVmdFVwRG93blZlY3RvcicsIFsxMDU3N11dLCBbJ0xlZnRVcFRlZVZlY3RvcicsIFsxMDU5Ml1dLCBbJ0xlZnRVcFZlY3RvckJhcicsIFsxMDU4NF1dLCBbJ0xlZnRVcFZlY3RvcicsIFs4NjM5XV0sIFsnTGVmdFZlY3RvckJhcicsIFsxMDU3OF1dLCBbJ0xlZnRWZWN0b3InLCBbODYzNl1dLCBbJ2xFZycsIFsxMDg5MV1dLCBbJ2xlZycsIFs4OTIyXV0sIFsnbGVxJywgWzg4MDRdXSwgWydsZXFxJywgWzg4MDZdXSwgWydsZXFzbGFudCcsIFsxMDg3N11dLCBbJ2xlc2NjJywgWzEwOTIwXV0sIFsnbGVzJywgWzEwODc3XV0sIFsnbGVzZG90JywgWzEwODc5XV0sIFsnbGVzZG90bycsIFsxMDg4MV1dLCBbJ2xlc2RvdG9yJywgWzEwODgzXV0sIFsnbGVzZycsIFs4OTIyLCA2NTAyNF1dLCBbJ2xlc2dlcycsIFsxMDg5OV1dLCBbJ2xlc3NhcHByb3gnLCBbMTA4ODVdXSwgWydsZXNzZG90JywgWzg5MThdXSwgWydsZXNzZXFndHInLCBbODkyMl1dLCBbJ2xlc3NlcXFndHInLCBbMTA4OTFdXSwgWydMZXNzRXF1YWxHcmVhdGVyJywgWzg5MjJdXSwgWydMZXNzRnVsbEVxdWFsJywgWzg4MDZdXSwgWydMZXNzR3JlYXRlcicsIFs4ODIyXV0sIFsnbGVzc2d0cicsIFs4ODIyXV0sIFsnTGVzc0xlc3MnLCBbMTA5MTNdXSwgWydsZXNzc2ltJywgWzg4MThdXSwgWydMZXNzU2xhbnRFcXVhbCcsIFsxMDg3N11dLCBbJ0xlc3NUaWxkZScsIFs4ODE4XV0sIFsnbGZpc2h0JywgWzEwNjIwXV0sIFsnbGZsb29yJywgWzg5NzBdXSwgWydMZnInLCBbMTIwMDc5XV0sIFsnbGZyJywgWzEyMDEwNV1dLCBbJ2xnJywgWzg4MjJdXSwgWydsZ0UnLCBbMTA4OTddXSwgWydsSGFyJywgWzEwNTk0XV0sIFsnbGhhcmQnLCBbODYzN11dLCBbJ2xoYXJ1JywgWzg2MzZdXSwgWydsaGFydWwnLCBbMTA2MDJdXSwgWydsaGJsaycsIFs5NjA0XV0sIFsnTEpjeScsIFsxMDMzXV0sIFsnbGpjeScsIFsxMTEzXV0sIFsnbGxhcnInLCBbODY0N11dLCBbJ2xsJywgWzg4MTBdXSwgWydMbCcsIFs4OTIwXV0sIFsnbGxjb3JuZXInLCBbODk5MF1dLCBbJ0xsZWZ0YXJyb3cnLCBbODY2Nl1dLCBbJ2xsaGFyZCcsIFsxMDYwM11dLCBbJ2xsdHJpJywgWzk3MjJdXSwgWydMbWlkb3QnLCBbMzE5XV0sIFsnbG1pZG90JywgWzMyMF1dLCBbJ2xtb3VzdGFjaGUnLCBbOTEzNl1dLCBbJ2xtb3VzdCcsIFs5MTM2XV0sIFsnbG5hcCcsIFsxMDg4OV1dLCBbJ2xuYXBwcm94JywgWzEwODg5XV0sIFsnbG5lJywgWzEwODg3XV0sIFsnbG5FJywgWzg4MDhdXSwgWydsbmVxJywgWzEwODg3XV0sIFsnbG5lcXEnLCBbODgwOF1dLCBbJ2xuc2ltJywgWzg5MzRdXSwgWydsb2FuZycsIFsxMDIyMF1dLCBbJ2xvYXJyJywgWzg3MDFdXSwgWydsb2JyaycsIFsxMDIxNF1dLCBbJ2xvbmdsZWZ0YXJyb3cnLCBbMTAyMjldXSwgWydMb25nTGVmdEFycm93JywgWzEwMjI5XV0sIFsnTG9uZ2xlZnRhcnJvdycsIFsxMDIzMl1dLCBbJ2xvbmdsZWZ0cmlnaHRhcnJvdycsIFsxMDIzMV1dLCBbJ0xvbmdMZWZ0UmlnaHRBcnJvdycsIFsxMDIzMV1dLCBbJ0xvbmdsZWZ0cmlnaHRhcnJvdycsIFsxMDIzNF1dLCBbJ2xvbmdtYXBzdG8nLCBbMTAyMzZdXSwgWydsb25ncmlnaHRhcnJvdycsIFsxMDIzMF1dLCBbJ0xvbmdSaWdodEFycm93JywgWzEwMjMwXV0sIFsnTG9uZ3JpZ2h0YXJyb3cnLCBbMTAyMzNdXSwgWydsb29wYXJyb3dsZWZ0JywgWzg2MTldXSwgWydsb29wYXJyb3dyaWdodCcsIFs4NjIwXV0sIFsnbG9wYXInLCBbMTA2MjldXSwgWydMb3BmJywgWzEyMDEzMV1dLCBbJ2xvcGYnLCBbMTIwMTU3XV0sIFsnbG9wbHVzJywgWzEwNzk3XV0sIFsnbG90aW1lcycsIFsxMDgwNF1dLCBbJ2xvd2FzdCcsIFs4NzI3XV0sIFsnbG93YmFyJywgWzk1XV0sIFsnTG93ZXJMZWZ0QXJyb3cnLCBbODYwMV1dLCBbJ0xvd2VyUmlnaHRBcnJvdycsIFs4NjAwXV0sIFsnbG96JywgWzk2NzRdXSwgWydsb3plbmdlJywgWzk2NzRdXSwgWydsb3pmJywgWzEwNzMxXV0sIFsnbHBhcicsIFs0MF1dLCBbJ2xwYXJsdCcsIFsxMDY0M11dLCBbJ2xyYXJyJywgWzg2NDZdXSwgWydscmNvcm5lcicsIFs4OTkxXV0sIFsnbHJoYXInLCBbODY1MV1dLCBbJ2xyaGFyZCcsIFsxMDYwNV1dLCBbJ2xybScsIFs4MjA2XV0sIFsnbHJ0cmknLCBbODg5NV1dLCBbJ2xzYXF1bycsIFs4MjQ5XV0sIFsnbHNjcicsIFsxMjAwMDFdXSwgWydMc2NyJywgWzg0NjZdXSwgWydsc2gnLCBbODYyNF1dLCBbJ0xzaCcsIFs4NjI0XV0sIFsnbHNpbScsIFs4ODE4XV0sIFsnbHNpbWUnLCBbMTA4OTNdXSwgWydsc2ltZycsIFsxMDg5NV1dLCBbJ2xzcWInLCBbOTFdXSwgWydsc3F1bycsIFs4MjE2XV0sIFsnbHNxdW9yJywgWzgyMThdXSwgWydMc3Ryb2snLCBbMzIxXV0sIFsnbHN0cm9rJywgWzMyMl1dLCBbJ2x0Y2MnLCBbMTA5MThdXSwgWydsdGNpcicsIFsxMDg3M11dLCBbJ2x0JywgWzYwXV0sIFsnTFQnLCBbNjBdXSwgWydMdCcsIFs4ODEwXV0sIFsnbHRkb3QnLCBbODkxOF1dLCBbJ2x0aHJlZScsIFs4OTA3XV0sIFsnbHRpbWVzJywgWzg5MDVdXSwgWydsdGxhcnInLCBbMTA2MTRdXSwgWydsdHF1ZXN0JywgWzEwODc1XV0sIFsnbHRyaScsIFs5NjY3XV0sIFsnbHRyaWUnLCBbODg4NF1dLCBbJ2x0cmlmJywgWzk2NjZdXSwgWydsdHJQYXInLCBbMTA2NDZdXSwgWydsdXJkc2hhcicsIFsxMDU3MF1dLCBbJ2x1cnVoYXInLCBbMTA1OThdXSwgWydsdmVydG5lcXEnLCBbODgwOCwgNjUwMjRdXSwgWydsdm5FJywgWzg4MDgsIDY1MDI0XV0sIFsnbWFjcicsIFsxNzVdXSwgWydtYWxlJywgWzk3OTRdXSwgWydtYWx0JywgWzEwMDE2XV0sIFsnbWFsdGVzZScsIFsxMDAxNl1dLCBbJ01hcCcsIFsxMDUwMV1dLCBbJ21hcCcsIFs4NjE0XV0sIFsnbWFwc3RvJywgWzg2MTRdXSwgWydtYXBzdG9kb3duJywgWzg2MTVdXSwgWydtYXBzdG9sZWZ0JywgWzg2MTJdXSwgWydtYXBzdG91cCcsIFs4NjEzXV0sIFsnbWFya2VyJywgWzk2NDZdXSwgWydtY29tbWEnLCBbMTA3OTNdXSwgWydNY3knLCBbMTA1Ml1dLCBbJ21jeScsIFsxMDg0XV0sIFsnbWRhc2gnLCBbODIxMl1dLCBbJ21ERG90JywgWzg3NjJdXSwgWydtZWFzdXJlZGFuZ2xlJywgWzg3MzddXSwgWydNZWRpdW1TcGFjZScsIFs4Mjg3XV0sIFsnTWVsbGludHJmJywgWzg0OTldXSwgWydNZnInLCBbMTIwMDgwXV0sIFsnbWZyJywgWzEyMDEwNl1dLCBbJ21obycsIFs4NDg3XV0sIFsnbWljcm8nLCBbMTgxXV0sIFsnbWlkYXN0JywgWzQyXV0sIFsnbWlkY2lyJywgWzEwOTkyXV0sIFsnbWlkJywgWzg3MzldXSwgWydtaWRkb3QnLCBbMTgzXV0sIFsnbWludXNiJywgWzg4NjNdXSwgWydtaW51cycsIFs4NzIyXV0sIFsnbWludXNkJywgWzg3NjBdXSwgWydtaW51c2R1JywgWzEwNzk0XV0sIFsnTWludXNQbHVzJywgWzg3MjNdXSwgWydtbGNwJywgWzEwOTcxXV0sIFsnbWxkcicsIFs4MjMwXV0sIFsnbW5wbHVzJywgWzg3MjNdXSwgWydtb2RlbHMnLCBbODg3MV1dLCBbJ01vcGYnLCBbMTIwMTMyXV0sIFsnbW9wZicsIFsxMjAxNThdXSwgWydtcCcsIFs4NzIzXV0sIFsnbXNjcicsIFsxMjAwMDJdXSwgWydNc2NyJywgWzg0OTldXSwgWydtc3Rwb3MnLCBbODc2Nl1dLCBbJ011JywgWzkyNF1dLCBbJ211JywgWzk1Nl1dLCBbJ211bHRpbWFwJywgWzg4ODhdXSwgWydtdW1hcCcsIFs4ODg4XV0sIFsnbmFibGEnLCBbODcxMV1dLCBbJ05hY3V0ZScsIFszMjNdXSwgWyduYWN1dGUnLCBbMzI0XV0sIFsnbmFuZycsIFs4NzM2LCA4NDAyXV0sIFsnbmFwJywgWzg3NzddXSwgWyduYXBFJywgWzEwODY0LCA4MjRdXSwgWyduYXBpZCcsIFs4Nzc5LCA4MjRdXSwgWyduYXBvcycsIFszMjldXSwgWyduYXBwcm94JywgWzg3NzddXSwgWyduYXR1cmFsJywgWzk4MzhdXSwgWyduYXR1cmFscycsIFs4NDY5XV0sIFsnbmF0dXInLCBbOTgzOF1dLCBbJ25ic3AnLCBbMTYwXV0sIFsnbmJ1bXAnLCBbODc4MiwgODI0XV0sIFsnbmJ1bXBlJywgWzg3ODMsIDgyNF1dLCBbJ25jYXAnLCBbMTA4MTldXSwgWydOY2Fyb24nLCBbMzI3XV0sIFsnbmNhcm9uJywgWzMyOF1dLCBbJ05jZWRpbCcsIFszMjVdXSwgWyduY2VkaWwnLCBbMzI2XV0sIFsnbmNvbmcnLCBbODc3NV1dLCBbJ25jb25nZG90JywgWzEwODYxLCA4MjRdXSwgWyduY3VwJywgWzEwODE4XV0sIFsnTmN5JywgWzEwNTNdXSwgWyduY3knLCBbMTA4NV1dLCBbJ25kYXNoJywgWzgyMTFdXSwgWyduZWFyaGsnLCBbMTA1MzJdXSwgWyduZWFycicsIFs4NTk5XV0sIFsnbmVBcnInLCBbODY2M11dLCBbJ25lYXJyb3cnLCBbODU5OV1dLCBbJ25lJywgWzg4MDBdXSwgWyduZWRvdCcsIFs4Nzg0LCA4MjRdXSwgWydOZWdhdGl2ZU1lZGl1bVNwYWNlJywgWzgyMDNdXSwgWydOZWdhdGl2ZVRoaWNrU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVGhpblNwYWNlJywgWzgyMDNdXSwgWydOZWdhdGl2ZVZlcnlUaGluU3BhY2UnLCBbODIwM11dLCBbJ25lcXVpdicsIFs4ODAyXV0sIFsnbmVzZWFyJywgWzEwNTM2XV0sIFsnbmVzaW0nLCBbODc3MCwgODI0XV0sIFsnTmVzdGVkR3JlYXRlckdyZWF0ZXInLCBbODgxMV1dLCBbJ05lc3RlZExlc3NMZXNzJywgWzg4MTBdXSwgWyduZXhpc3QnLCBbODcwOF1dLCBbJ25leGlzdHMnLCBbODcwOF1dLCBbJ05mcicsIFsxMjAwODFdXSwgWyduZnInLCBbMTIwMTA3XV0sIFsnbmdFJywgWzg4MDcsIDgyNF1dLCBbJ25nZScsIFs4ODE3XV0sIFsnbmdlcScsIFs4ODE3XV0sIFsnbmdlcXEnLCBbODgwNywgODI0XV0sIFsnbmdlcXNsYW50JywgWzEwODc4LCA4MjRdXSwgWyduZ2VzJywgWzEwODc4LCA4MjRdXSwgWyduR2cnLCBbODkyMSwgODI0XV0sIFsnbmdzaW0nLCBbODgyMV1dLCBbJ25HdCcsIFs4ODExLCA4NDAyXV0sIFsnbmd0JywgWzg4MTVdXSwgWyduZ3RyJywgWzg4MTVdXSwgWyduR3R2JywgWzg4MTEsIDgyNF1dLCBbJ25oYXJyJywgWzg2MjJdXSwgWyduaEFycicsIFs4NjU0XV0sIFsnbmhwYXInLCBbMTA5OTRdXSwgWyduaScsIFs4NzE1XV0sIFsnbmlzJywgWzg5NTZdXSwgWyduaXNkJywgWzg5NTRdXSwgWyduaXYnLCBbODcxNV1dLCBbJ05KY3knLCBbMTAzNF1dLCBbJ25qY3knLCBbMTExNF1dLCBbJ25sYXJyJywgWzg2MDJdXSwgWydubEFycicsIFs4NjUzXV0sIFsnbmxkcicsIFs4MjI5XV0sIFsnbmxFJywgWzg4MDYsIDgyNF1dLCBbJ25sZScsIFs4ODE2XV0sIFsnbmxlZnRhcnJvdycsIFs4NjAyXV0sIFsnbkxlZnRhcnJvdycsIFs4NjUzXV0sIFsnbmxlZnRyaWdodGFycm93JywgWzg2MjJdXSwgWyduTGVmdHJpZ2h0YXJyb3cnLCBbODY1NF1dLCBbJ25sZXEnLCBbODgxNl1dLCBbJ25sZXFxJywgWzg4MDYsIDgyNF1dLCBbJ25sZXFzbGFudCcsIFsxMDg3NywgODI0XV0sIFsnbmxlcycsIFsxMDg3NywgODI0XV0sIFsnbmxlc3MnLCBbODgxNF1dLCBbJ25MbCcsIFs4OTIwLCA4MjRdXSwgWydubHNpbScsIFs4ODIwXV0sIFsnbkx0JywgWzg4MTAsIDg0MDJdXSwgWydubHQnLCBbODgxNF1dLCBbJ25sdHJpJywgWzg5MzhdXSwgWydubHRyaWUnLCBbODk0MF1dLCBbJ25MdHYnLCBbODgxMCwgODI0XV0sIFsnbm1pZCcsIFs4NzQwXV0sIFsnTm9CcmVhaycsIFs4Mjg4XV0sIFsnTm9uQnJlYWtpbmdTcGFjZScsIFsxNjBdXSwgWydub3BmJywgWzEyMDE1OV1dLCBbJ05vcGYnLCBbODQ2OV1dLCBbJ05vdCcsIFsxMDk4OF1dLCBbJ25vdCcsIFsxNzJdXSwgWydOb3RDb25ncnVlbnQnLCBbODgwMl1dLCBbJ05vdEN1cENhcCcsIFs4ODEzXV0sIFsnTm90RG91YmxlVmVydGljYWxCYXInLCBbODc0Ml1dLCBbJ05vdEVsZW1lbnQnLCBbODcxM11dLCBbJ05vdEVxdWFsJywgWzg4MDBdXSwgWydOb3RFcXVhbFRpbGRlJywgWzg3NzAsIDgyNF1dLCBbJ05vdEV4aXN0cycsIFs4NzA4XV0sIFsnTm90R3JlYXRlcicsIFs4ODE1XV0sIFsnTm90R3JlYXRlckVxdWFsJywgWzg4MTddXSwgWydOb3RHcmVhdGVyRnVsbEVxdWFsJywgWzg4MDcsIDgyNF1dLCBbJ05vdEdyZWF0ZXJHcmVhdGVyJywgWzg4MTEsIDgyNF1dLCBbJ05vdEdyZWF0ZXJMZXNzJywgWzg4MjVdXSwgWydOb3RHcmVhdGVyU2xhbnRFcXVhbCcsIFsxMDg3OCwgODI0XV0sIFsnTm90R3JlYXRlclRpbGRlJywgWzg4MjFdXSwgWydOb3RIdW1wRG93bkh1bXAnLCBbODc4MiwgODI0XV0sIFsnTm90SHVtcEVxdWFsJywgWzg3ODMsIDgyNF1dLCBbJ25vdGluJywgWzg3MTNdXSwgWydub3RpbmRvdCcsIFs4OTQ5LCA4MjRdXSwgWydub3RpbkUnLCBbODk1MywgODI0XV0sIFsnbm90aW52YScsIFs4NzEzXV0sIFsnbm90aW52YicsIFs4OTUxXV0sIFsnbm90aW52YycsIFs4OTUwXV0sIFsnTm90TGVmdFRyaWFuZ2xlQmFyJywgWzEwNzAzLCA4MjRdXSwgWydOb3RMZWZ0VHJpYW5nbGUnLCBbODkzOF1dLCBbJ05vdExlZnRUcmlhbmdsZUVxdWFsJywgWzg5NDBdXSwgWydOb3RMZXNzJywgWzg4MTRdXSwgWydOb3RMZXNzRXF1YWwnLCBbODgxNl1dLCBbJ05vdExlc3NHcmVhdGVyJywgWzg4MjRdXSwgWydOb3RMZXNzTGVzcycsIFs4ODEwLCA4MjRdXSwgWydOb3RMZXNzU2xhbnRFcXVhbCcsIFsxMDg3NywgODI0XV0sIFsnTm90TGVzc1RpbGRlJywgWzg4MjBdXSwgWydOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFsxMDkxNCwgODI0XV0sIFsnTm90TmVzdGVkTGVzc0xlc3MnLCBbMTA5MTMsIDgyNF1dLCBbJ25vdG5pJywgWzg3MTZdXSwgWydub3RuaXZhJywgWzg3MTZdXSwgWydub3RuaXZiJywgWzg5NThdXSwgWydub3RuaXZjJywgWzg5NTddXSwgWydOb3RQcmVjZWRlcycsIFs4ODMyXV0sIFsnTm90UHJlY2VkZXNFcXVhbCcsIFsxMDkyNywgODI0XV0sIFsnTm90UHJlY2VkZXNTbGFudEVxdWFsJywgWzg5MjhdXSwgWydOb3RSZXZlcnNlRWxlbWVudCcsIFs4NzE2XV0sIFsnTm90UmlnaHRUcmlhbmdsZUJhcicsIFsxMDcwNCwgODI0XV0sIFsnTm90UmlnaHRUcmlhbmdsZScsIFs4OTM5XV0sIFsnTm90UmlnaHRUcmlhbmdsZUVxdWFsJywgWzg5NDFdXSwgWydOb3RTcXVhcmVTdWJzZXQnLCBbODg0NywgODI0XV0sIFsnTm90U3F1YXJlU3Vic2V0RXF1YWwnLCBbODkzMF1dLCBbJ05vdFNxdWFyZVN1cGVyc2V0JywgWzg4NDgsIDgyNF1dLCBbJ05vdFNxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODkzMV1dLCBbJ05vdFN1YnNldCcsIFs4ODM0LCA4NDAyXV0sIFsnTm90U3Vic2V0RXF1YWwnLCBbODg0MF1dLCBbJ05vdFN1Y2NlZWRzJywgWzg4MzNdXSwgWydOb3RTdWNjZWVkc0VxdWFsJywgWzEwOTI4LCA4MjRdXSwgWydOb3RTdWNjZWVkc1NsYW50RXF1YWwnLCBbODkyOV1dLCBbJ05vdFN1Y2NlZWRzVGlsZGUnLCBbODgzMSwgODI0XV0sIFsnTm90U3VwZXJzZXQnLCBbODgzNSwgODQwMl1dLCBbJ05vdFN1cGVyc2V0RXF1YWwnLCBbODg0MV1dLCBbJ05vdFRpbGRlJywgWzg3NjldXSwgWydOb3RUaWxkZUVxdWFsJywgWzg3NzJdXSwgWydOb3RUaWxkZUZ1bGxFcXVhbCcsIFs4Nzc1XV0sIFsnTm90VGlsZGVUaWxkZScsIFs4Nzc3XV0sIFsnTm90VmVydGljYWxCYXInLCBbODc0MF1dLCBbJ25wYXJhbGxlbCcsIFs4NzQyXV0sIFsnbnBhcicsIFs4NzQyXV0sIFsnbnBhcnNsJywgWzExMDA1LCA4NDIxXV0sIFsnbnBhcnQnLCBbODcwNiwgODI0XV0sIFsnbnBvbGludCcsIFsxMDc3Ml1dLCBbJ25wcicsIFs4ODMyXV0sIFsnbnByY3VlJywgWzg5MjhdXSwgWyducHJlYycsIFs4ODMyXV0sIFsnbnByZWNlcScsIFsxMDkyNywgODI0XV0sIFsnbnByZScsIFsxMDkyNywgODI0XV0sIFsnbnJhcnJjJywgWzEwNTQ3LCA4MjRdXSwgWyducmFycicsIFs4NjAzXV0sIFsnbnJBcnInLCBbODY1NV1dLCBbJ25yYXJydycsIFs4NjA1LCA4MjRdXSwgWyducmlnaHRhcnJvdycsIFs4NjAzXV0sIFsnblJpZ2h0YXJyb3cnLCBbODY1NV1dLCBbJ25ydHJpJywgWzg5MzldXSwgWyducnRyaWUnLCBbODk0MV1dLCBbJ25zYycsIFs4ODMzXV0sIFsnbnNjY3VlJywgWzg5MjldXSwgWyduc2NlJywgWzEwOTI4LCA4MjRdXSwgWydOc2NyJywgWzExOTk3N11dLCBbJ25zY3InLCBbMTIwMDAzXV0sIFsnbnNob3J0bWlkJywgWzg3NDBdXSwgWyduc2hvcnRwYXJhbGxlbCcsIFs4NzQyXV0sIFsnbnNpbScsIFs4NzY5XV0sIFsnbnNpbWUnLCBbODc3Ml1dLCBbJ25zaW1lcScsIFs4NzcyXV0sIFsnbnNtaWQnLCBbODc0MF1dLCBbJ25zcGFyJywgWzg3NDJdXSwgWyduc3FzdWJlJywgWzg5MzBdXSwgWyduc3FzdXBlJywgWzg5MzFdXSwgWyduc3ViJywgWzg4MzZdXSwgWyduc3ViRScsIFsxMDk0OSwgODI0XV0sIFsnbnN1YmUnLCBbODg0MF1dLCBbJ25zdWJzZXQnLCBbODgzNCwgODQwMl1dLCBbJ25zdWJzZXRlcScsIFs4ODQwXV0sIFsnbnN1YnNldGVxcScsIFsxMDk0OSwgODI0XV0sIFsnbnN1Y2MnLCBbODgzM11dLCBbJ25zdWNjZXEnLCBbMTA5MjgsIDgyNF1dLCBbJ25zdXAnLCBbODgzN11dLCBbJ25zdXBFJywgWzEwOTUwLCA4MjRdXSwgWyduc3VwZScsIFs4ODQxXV0sIFsnbnN1cHNldCcsIFs4ODM1LCA4NDAyXV0sIFsnbnN1cHNldGVxJywgWzg4NDFdXSwgWyduc3Vwc2V0ZXFxJywgWzEwOTUwLCA4MjRdXSwgWydudGdsJywgWzg4MjVdXSwgWydOdGlsZGUnLCBbMjA5XV0sIFsnbnRpbGRlJywgWzI0MV1dLCBbJ250bGcnLCBbODgyNF1dLCBbJ250cmlhbmdsZWxlZnQnLCBbODkzOF1dLCBbJ250cmlhbmdsZWxlZnRlcScsIFs4OTQwXV0sIFsnbnRyaWFuZ2xlcmlnaHQnLCBbODkzOV1dLCBbJ250cmlhbmdsZXJpZ2h0ZXEnLCBbODk0MV1dLCBbJ051JywgWzkyNV1dLCBbJ251JywgWzk1N11dLCBbJ251bScsIFszNV1dLCBbJ251bWVybycsIFs4NDcwXV0sIFsnbnVtc3AnLCBbODE5OV1dLCBbJ252YXAnLCBbODc4MSwgODQwMl1dLCBbJ252ZGFzaCcsIFs4ODc2XV0sIFsnbnZEYXNoJywgWzg4NzddXSwgWyduVmRhc2gnLCBbODg3OF1dLCBbJ25WRGFzaCcsIFs4ODc5XV0sIFsnbnZnZScsIFs4ODA1LCA4NDAyXV0sIFsnbnZndCcsIFs2MiwgODQwMl1dLCBbJ252SGFycicsIFsxMDUwMF1dLCBbJ252aW5maW4nLCBbMTA3MThdXSwgWydudmxBcnInLCBbMTA0OThdXSwgWydudmxlJywgWzg4MDQsIDg0MDJdXSwgWydudmx0JywgWzYwLCA4NDAyXV0sIFsnbnZsdHJpZScsIFs4ODg0LCA4NDAyXV0sIFsnbnZyQXJyJywgWzEwNDk5XV0sIFsnbnZydHJpZScsIFs4ODg1LCA4NDAyXV0sIFsnbnZzaW0nLCBbODc2NCwgODQwMl1dLCBbJ253YXJoaycsIFsxMDUzMV1dLCBbJ253YXJyJywgWzg1OThdXSwgWydud0FycicsIFs4NjYyXV0sIFsnbndhcnJvdycsIFs4NTk4XV0sIFsnbnduZWFyJywgWzEwNTM1XV0sIFsnT2FjdXRlJywgWzIxMV1dLCBbJ29hY3V0ZScsIFsyNDNdXSwgWydvYXN0JywgWzg4NTldXSwgWydPY2lyYycsIFsyMTJdXSwgWydvY2lyYycsIFsyNDRdXSwgWydvY2lyJywgWzg4NThdXSwgWydPY3knLCBbMTA1NF1dLCBbJ29jeScsIFsxMDg2XV0sIFsnb2Rhc2gnLCBbODg2MV1dLCBbJ09kYmxhYycsIFszMzZdXSwgWydvZGJsYWMnLCBbMzM3XV0sIFsnb2RpdicsIFsxMDgwOF1dLCBbJ29kb3QnLCBbODg1N11dLCBbJ29kc29sZCcsIFsxMDY4NF1dLCBbJ09FbGlnJywgWzMzOF1dLCBbJ29lbGlnJywgWzMzOV1dLCBbJ29mY2lyJywgWzEwNjg3XV0sIFsnT2ZyJywgWzEyMDA4Ml1dLCBbJ29mcicsIFsxMjAxMDhdXSwgWydvZ29uJywgWzczMV1dLCBbJ09ncmF2ZScsIFsyMTBdXSwgWydvZ3JhdmUnLCBbMjQyXV0sIFsnb2d0JywgWzEwNjg5XV0sIFsnb2hiYXInLCBbMTA2NzddXSwgWydvaG0nLCBbOTM3XV0sIFsnb2ludCcsIFs4NzUwXV0sIFsnb2xhcnInLCBbODYzNF1dLCBbJ29sY2lyJywgWzEwNjg2XV0sIFsnb2xjcm9zcycsIFsxMDY4M11dLCBbJ29saW5lJywgWzgyNTRdXSwgWydvbHQnLCBbMTA2ODhdXSwgWydPbWFjcicsIFszMzJdXSwgWydvbWFjcicsIFszMzNdXSwgWydPbWVnYScsIFs5MzddXSwgWydvbWVnYScsIFs5NjldXSwgWydPbWljcm9uJywgWzkyN11dLCBbJ29taWNyb24nLCBbOTU5XV0sIFsnb21pZCcsIFsxMDY3OF1dLCBbJ29taW51cycsIFs4ODU0XV0sIFsnT29wZicsIFsxMjAxMzRdXSwgWydvb3BmJywgWzEyMDE2MF1dLCBbJ29wYXInLCBbMTA2NzldXSwgWydPcGVuQ3VybHlEb3VibGVRdW90ZScsIFs4MjIwXV0sIFsnT3BlbkN1cmx5UXVvdGUnLCBbODIxNl1dLCBbJ29wZXJwJywgWzEwNjgxXV0sIFsnb3BsdXMnLCBbODg1M11dLCBbJ29yYXJyJywgWzg2MzVdXSwgWydPcicsIFsxMDgzNl1dLCBbJ29yJywgWzg3NDRdXSwgWydvcmQnLCBbMTA4NDVdXSwgWydvcmRlcicsIFs4NTAwXV0sIFsnb3JkZXJvZicsIFs4NTAwXV0sIFsnb3JkZicsIFsxNzBdXSwgWydvcmRtJywgWzE4Nl1dLCBbJ29yaWdvZicsIFs4ODg2XV0sIFsnb3JvcicsIFsxMDgzOF1dLCBbJ29yc2xvcGUnLCBbMTA4MzldXSwgWydvcnYnLCBbMTA4NDNdXSwgWydvUycsIFs5NDE2XV0sIFsnT3NjcicsIFsxMTk5NzhdXSwgWydvc2NyJywgWzg1MDBdXSwgWydPc2xhc2gnLCBbMjE2XV0sIFsnb3NsYXNoJywgWzI0OF1dLCBbJ29zb2wnLCBbODg1Nl1dLCBbJ090aWxkZScsIFsyMTNdXSwgWydvdGlsZGUnLCBbMjQ1XV0sIFsnb3RpbWVzYXMnLCBbMTA4MDZdXSwgWydPdGltZXMnLCBbMTA4MDddXSwgWydvdGltZXMnLCBbODg1NV1dLCBbJ091bWwnLCBbMjE0XV0sIFsnb3VtbCcsIFsyNDZdXSwgWydvdmJhcicsIFs5MDIxXV0sIFsnT3ZlckJhcicsIFs4MjU0XV0sIFsnT3ZlckJyYWNlJywgWzkxODJdXSwgWydPdmVyQnJhY2tldCcsIFs5MTQwXV0sIFsnT3ZlclBhcmVudGhlc2lzJywgWzkxODBdXSwgWydwYXJhJywgWzE4Ml1dLCBbJ3BhcmFsbGVsJywgWzg3NDFdXSwgWydwYXInLCBbODc0MV1dLCBbJ3BhcnNpbScsIFsxMDk5NV1dLCBbJ3BhcnNsJywgWzExMDA1XV0sIFsncGFydCcsIFs4NzA2XV0sIFsnUGFydGlhbEQnLCBbODcwNl1dLCBbJ1BjeScsIFsxMDU1XV0sIFsncGN5JywgWzEwODddXSwgWydwZXJjbnQnLCBbMzddXSwgWydwZXJpb2QnLCBbNDZdXSwgWydwZXJtaWwnLCBbODI0MF1dLCBbJ3BlcnAnLCBbODg2OV1dLCBbJ3BlcnRlbmsnLCBbODI0MV1dLCBbJ1BmcicsIFsxMjAwODNdXSwgWydwZnInLCBbMTIwMTA5XV0sIFsnUGhpJywgWzkzNF1dLCBbJ3BoaScsIFs5NjZdXSwgWydwaGl2JywgWzk4MV1dLCBbJ3BobW1hdCcsIFs4NDk5XV0sIFsncGhvbmUnLCBbOTc0Ml1dLCBbJ1BpJywgWzkyOF1dLCBbJ3BpJywgWzk2MF1dLCBbJ3BpdGNoZm9yaycsIFs4OTE2XV0sIFsncGl2JywgWzk4Ml1dLCBbJ3BsYW5jaycsIFs4NDYzXV0sIFsncGxhbmNraCcsIFs4NDYyXV0sIFsncGxhbmt2JywgWzg0NjNdXSwgWydwbHVzYWNpcicsIFsxMDc4N11dLCBbJ3BsdXNiJywgWzg4NjJdXSwgWydwbHVzY2lyJywgWzEwNzg2XV0sIFsncGx1cycsIFs0M11dLCBbJ3BsdXNkbycsIFs4NzI0XV0sIFsncGx1c2R1JywgWzEwNzg5XV0sIFsncGx1c2UnLCBbMTA4NjZdXSwgWydQbHVzTWludXMnLCBbMTc3XV0sIFsncGx1c21uJywgWzE3N11dLCBbJ3BsdXNzaW0nLCBbMTA3OTBdXSwgWydwbHVzdHdvJywgWzEwNzkxXV0sIFsncG0nLCBbMTc3XV0sIFsnUG9pbmNhcmVwbGFuZScsIFs4NDYwXV0sIFsncG9pbnRpbnQnLCBbMTA3NzNdXSwgWydwb3BmJywgWzEyMDE2MV1dLCBbJ1BvcGYnLCBbODQ3M11dLCBbJ3BvdW5kJywgWzE2M11dLCBbJ3ByYXAnLCBbMTA5MzVdXSwgWydQcicsIFsxMDkzOV1dLCBbJ3ByJywgWzg4MjZdXSwgWydwcmN1ZScsIFs4ODI4XV0sIFsncHJlY2FwcHJveCcsIFsxMDkzNV1dLCBbJ3ByZWMnLCBbODgyNl1dLCBbJ3ByZWNjdXJseWVxJywgWzg4MjhdXSwgWydQcmVjZWRlcycsIFs4ODI2XV0sIFsnUHJlY2VkZXNFcXVhbCcsIFsxMDkyN11dLCBbJ1ByZWNlZGVzU2xhbnRFcXVhbCcsIFs4ODI4XV0sIFsnUHJlY2VkZXNUaWxkZScsIFs4ODMwXV0sIFsncHJlY2VxJywgWzEwOTI3XV0sIFsncHJlY25hcHByb3gnLCBbMTA5MzddXSwgWydwcmVjbmVxcScsIFsxMDkzM11dLCBbJ3ByZWNuc2ltJywgWzg5MzZdXSwgWydwcmUnLCBbMTA5MjddXSwgWydwckUnLCBbMTA5MzFdXSwgWydwcmVjc2ltJywgWzg4MzBdXSwgWydwcmltZScsIFs4MjQyXV0sIFsnUHJpbWUnLCBbODI0M11dLCBbJ3ByaW1lcycsIFs4NDczXV0sIFsncHJuYXAnLCBbMTA5MzddXSwgWydwcm5FJywgWzEwOTMzXV0sIFsncHJuc2ltJywgWzg5MzZdXSwgWydwcm9kJywgWzg3MTldXSwgWydQcm9kdWN0JywgWzg3MTldXSwgWydwcm9mYWxhcicsIFs5MDA2XV0sIFsncHJvZmxpbmUnLCBbODk3OF1dLCBbJ3Byb2ZzdXJmJywgWzg5NzldXSwgWydwcm9wJywgWzg3MzNdXSwgWydQcm9wb3J0aW9uYWwnLCBbODczM11dLCBbJ1Byb3BvcnRpb24nLCBbODc1OV1dLCBbJ3Byb3B0bycsIFs4NzMzXV0sIFsncHJzaW0nLCBbODgzMF1dLCBbJ3BydXJlbCcsIFs4ODgwXV0sIFsnUHNjcicsIFsxMTk5NzldXSwgWydwc2NyJywgWzEyMDAwNV1dLCBbJ1BzaScsIFs5MzZdXSwgWydwc2knLCBbOTY4XV0sIFsncHVuY3NwJywgWzgyMDBdXSwgWydRZnInLCBbMTIwMDg0XV0sIFsncWZyJywgWzEyMDExMF1dLCBbJ3FpbnQnLCBbMTA3NjRdXSwgWydxb3BmJywgWzEyMDE2Ml1dLCBbJ1FvcGYnLCBbODQ3NF1dLCBbJ3FwcmltZScsIFs4Mjc5XV0sIFsnUXNjcicsIFsxMTk5ODBdXSwgWydxc2NyJywgWzEyMDAwNl1dLCBbJ3F1YXRlcm5pb25zJywgWzg0NjFdXSwgWydxdWF0aW50JywgWzEwNzc0XV0sIFsncXVlc3QnLCBbNjNdXSwgWydxdWVzdGVxJywgWzg3OTldXSwgWydxdW90JywgWzM0XV0sIFsnUVVPVCcsIFszNF1dLCBbJ3JBYXJyJywgWzg2NjddXSwgWydyYWNlJywgWzg3NjUsIDgxN11dLCBbJ1JhY3V0ZScsIFszNDBdXSwgWydyYWN1dGUnLCBbMzQxXV0sIFsncmFkaWMnLCBbODczMF1dLCBbJ3JhZW1wdHl2JywgWzEwNjc1XV0sIFsncmFuZycsIFsxMDIxN11dLCBbJ1JhbmcnLCBbMTAyMTldXSwgWydyYW5nZCcsIFsxMDY0Ml1dLCBbJ3JhbmdlJywgWzEwNjYxXV0sIFsncmFuZ2xlJywgWzEwMjE3XV0sIFsncmFxdW8nLCBbMTg3XV0sIFsncmFycmFwJywgWzEwNjEzXV0sIFsncmFycmInLCBbODY3N11dLCBbJ3JhcnJiZnMnLCBbMTA1MjhdXSwgWydyYXJyYycsIFsxMDU0N11dLCBbJ3JhcnInLCBbODU5NF1dLCBbJ1JhcnInLCBbODYwOF1dLCBbJ3JBcnInLCBbODY1OF1dLCBbJ3JhcnJmcycsIFsxMDUyNl1dLCBbJ3JhcnJoaycsIFs4NjE4XV0sIFsncmFycmxwJywgWzg2MjBdXSwgWydyYXJycGwnLCBbMTA1NjVdXSwgWydyYXJyc2ltJywgWzEwNjEyXV0sIFsnUmFycnRsJywgWzEwNTE4XV0sIFsncmFycnRsJywgWzg2MTFdXSwgWydyYXJydycsIFs4NjA1XV0sIFsncmF0YWlsJywgWzEwNTIyXV0sIFsnckF0YWlsJywgWzEwNTI0XV0sIFsncmF0aW8nLCBbODc1OF1dLCBbJ3JhdGlvbmFscycsIFs4NDc0XV0sIFsncmJhcnInLCBbMTA1MDldXSwgWydyQmFycicsIFsxMDUxMV1dLCBbJ1JCYXJyJywgWzEwNTEyXV0sIFsncmJicmsnLCBbMTAwOTldXSwgWydyYnJhY2UnLCBbMTI1XV0sIFsncmJyYWNrJywgWzkzXV0sIFsncmJya2UnLCBbMTA2MzZdXSwgWydyYnJrc2xkJywgWzEwNjM4XV0sIFsncmJya3NsdScsIFsxMDY0MF1dLCBbJ1JjYXJvbicsIFszNDRdXSwgWydyY2Fyb24nLCBbMzQ1XV0sIFsnUmNlZGlsJywgWzM0Ml1dLCBbJ3JjZWRpbCcsIFszNDNdXSwgWydyY2VpbCcsIFs4OTY5XV0sIFsncmN1YicsIFsxMjVdXSwgWydSY3knLCBbMTA1Nl1dLCBbJ3JjeScsIFsxMDg4XV0sIFsncmRjYScsIFsxMDU1MV1dLCBbJ3JkbGRoYXInLCBbMTA2MDFdXSwgWydyZHF1bycsIFs4MjIxXV0sIFsncmRxdW9yJywgWzgyMjFdXSwgWydyZHNoJywgWzg2MjddXSwgWydyZWFsJywgWzg0NzZdXSwgWydyZWFsaW5lJywgWzg0NzVdXSwgWydyZWFscGFydCcsIFs4NDc2XV0sIFsncmVhbHMnLCBbODQ3N11dLCBbJ1JlJywgWzg0NzZdXSwgWydyZWN0JywgWzk2NDVdXSwgWydyZWcnLCBbMTc0XV0sIFsnUkVHJywgWzE3NF1dLCBbJ1JldmVyc2VFbGVtZW50JywgWzg3MTVdXSwgWydSZXZlcnNlRXF1aWxpYnJpdW0nLCBbODY1MV1dLCBbJ1JldmVyc2VVcEVxdWlsaWJyaXVtJywgWzEwNjA3XV0sIFsncmZpc2h0JywgWzEwNjIxXV0sIFsncmZsb29yJywgWzg5NzFdXSwgWydyZnInLCBbMTIwMTExXV0sIFsnUmZyJywgWzg0NzZdXSwgWydySGFyJywgWzEwNTk2XV0sIFsncmhhcmQnLCBbODY0MV1dLCBbJ3JoYXJ1JywgWzg2NDBdXSwgWydyaGFydWwnLCBbMTA2MDRdXSwgWydSaG8nLCBbOTI5XV0sIFsncmhvJywgWzk2MV1dLCBbJ3Job3YnLCBbMTAwOV1dLCBbJ1JpZ2h0QW5nbGVCcmFja2V0JywgWzEwMjE3XV0sIFsnUmlnaHRBcnJvd0JhcicsIFs4Njc3XV0sIFsncmlnaHRhcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRhcnJvdycsIFs4NjU4XV0sIFsnUmlnaHRBcnJvd0xlZnRBcnJvdycsIFs4NjQ0XV0sIFsncmlnaHRhcnJvd3RhaWwnLCBbODYxMV1dLCBbJ1JpZ2h0Q2VpbGluZycsIFs4OTY5XV0sIFsnUmlnaHREb3VibGVCcmFja2V0JywgWzEwMjE1XV0sIFsnUmlnaHREb3duVGVlVmVjdG9yJywgWzEwNTg5XV0sIFsnUmlnaHREb3duVmVjdG9yQmFyJywgWzEwNTgxXV0sIFsnUmlnaHREb3duVmVjdG9yJywgWzg2NDJdXSwgWydSaWdodEZsb29yJywgWzg5NzFdXSwgWydyaWdodGhhcnBvb25kb3duJywgWzg2NDFdXSwgWydyaWdodGhhcnBvb251cCcsIFs4NjQwXV0sIFsncmlnaHRsZWZ0YXJyb3dzJywgWzg2NDRdXSwgWydyaWdodGxlZnRoYXJwb29ucycsIFs4NjUyXV0sIFsncmlnaHRyaWdodGFycm93cycsIFs4NjQ5XV0sIFsncmlnaHRzcXVpZ2Fycm93JywgWzg2MDVdXSwgWydSaWdodFRlZUFycm93JywgWzg2MTRdXSwgWydSaWdodFRlZScsIFs4ODY2XV0sIFsnUmlnaHRUZWVWZWN0b3InLCBbMTA1ODddXSwgWydyaWdodHRocmVldGltZXMnLCBbODkwOF1dLCBbJ1JpZ2h0VHJpYW5nbGVCYXInLCBbMTA3MDRdXSwgWydSaWdodFRyaWFuZ2xlJywgWzg4ODNdXSwgWydSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODg4NV1dLCBbJ1JpZ2h0VXBEb3duVmVjdG9yJywgWzEwNTc1XV0sIFsnUmlnaHRVcFRlZVZlY3RvcicsIFsxMDU4OF1dLCBbJ1JpZ2h0VXBWZWN0b3JCYXInLCBbMTA1ODBdXSwgWydSaWdodFVwVmVjdG9yJywgWzg2MzhdXSwgWydSaWdodFZlY3RvckJhcicsIFsxMDU3OV1dLCBbJ1JpZ2h0VmVjdG9yJywgWzg2NDBdXSwgWydyaW5nJywgWzczMF1dLCBbJ3Jpc2luZ2RvdHNlcScsIFs4Nzg3XV0sIFsncmxhcnInLCBbODY0NF1dLCBbJ3JsaGFyJywgWzg2NTJdXSwgWydybG0nLCBbODIwN11dLCBbJ3Jtb3VzdGFjaGUnLCBbOTEzN11dLCBbJ3Jtb3VzdCcsIFs5MTM3XV0sIFsncm5taWQnLCBbMTA5OTBdXSwgWydyb2FuZycsIFsxMDIyMV1dLCBbJ3JvYXJyJywgWzg3MDJdXSwgWydyb2JyaycsIFsxMDIxNV1dLCBbJ3JvcGFyJywgWzEwNjMwXV0sIFsncm9wZicsIFsxMjAxNjNdXSwgWydSb3BmJywgWzg0NzddXSwgWydyb3BsdXMnLCBbMTA3OThdXSwgWydyb3RpbWVzJywgWzEwODA1XV0sIFsnUm91bmRJbXBsaWVzJywgWzEwNjA4XV0sIFsncnBhcicsIFs0MV1dLCBbJ3JwYXJndCcsIFsxMDY0NF1dLCBbJ3JwcG9saW50JywgWzEwNzcwXV0sIFsncnJhcnInLCBbODY0OV1dLCBbJ1JyaWdodGFycm93JywgWzg2NjddXSwgWydyc2FxdW8nLCBbODI1MF1dLCBbJ3JzY3InLCBbMTIwMDA3XV0sIFsnUnNjcicsIFs4NDc1XV0sIFsncnNoJywgWzg2MjVdXSwgWydSc2gnLCBbODYyNV1dLCBbJ3JzcWInLCBbOTNdXSwgWydyc3F1bycsIFs4MjE3XV0sIFsncnNxdW9yJywgWzgyMTddXSwgWydydGhyZWUnLCBbODkwOF1dLCBbJ3J0aW1lcycsIFs4OTA2XV0sIFsncnRyaScsIFs5NjU3XV0sIFsncnRyaWUnLCBbODg4NV1dLCBbJ3J0cmlmJywgWzk2NTZdXSwgWydydHJpbHRyaScsIFsxMDcwMl1dLCBbJ1J1bGVEZWxheWVkJywgWzEwNzQwXV0sIFsncnVsdWhhcicsIFsxMDYwMF1dLCBbJ3J4JywgWzg0NzhdXSwgWydTYWN1dGUnLCBbMzQ2XV0sIFsnc2FjdXRlJywgWzM0N11dLCBbJ3NicXVvJywgWzgyMThdXSwgWydzY2FwJywgWzEwOTM2XV0sIFsnU2Nhcm9uJywgWzM1Ml1dLCBbJ3NjYXJvbicsIFszNTNdXSwgWydTYycsIFsxMDk0MF1dLCBbJ3NjJywgWzg4MjddXSwgWydzY2N1ZScsIFs4ODI5XV0sIFsnc2NlJywgWzEwOTI4XV0sIFsnc2NFJywgWzEwOTMyXV0sIFsnU2NlZGlsJywgWzM1MF1dLCBbJ3NjZWRpbCcsIFszNTFdXSwgWydTY2lyYycsIFszNDhdXSwgWydzY2lyYycsIFszNDldXSwgWydzY25hcCcsIFsxMDkzOF1dLCBbJ3NjbkUnLCBbMTA5MzRdXSwgWydzY25zaW0nLCBbODkzN11dLCBbJ3NjcG9saW50JywgWzEwNzcxXV0sIFsnc2NzaW0nLCBbODgzMV1dLCBbJ1NjeScsIFsxMDU3XV0sIFsnc2N5JywgWzEwODldXSwgWydzZG90YicsIFs4ODY1XV0sIFsnc2RvdCcsIFs4OTAxXV0sIFsnc2RvdGUnLCBbMTA4NTRdXSwgWydzZWFyaGsnLCBbMTA1MzNdXSwgWydzZWFycicsIFs4NjAwXV0sIFsnc2VBcnInLCBbODY2NF1dLCBbJ3NlYXJyb3cnLCBbODYwMF1dLCBbJ3NlY3QnLCBbMTY3XV0sIFsnc2VtaScsIFs1OV1dLCBbJ3Nlc3dhcicsIFsxMDUzN11dLCBbJ3NldG1pbnVzJywgWzg3MjZdXSwgWydzZXRtbicsIFs4NzI2XV0sIFsnc2V4dCcsIFsxMDAzOF1dLCBbJ1NmcicsIFsxMjAwODZdXSwgWydzZnInLCBbMTIwMTEyXV0sIFsnc2Zyb3duJywgWzg5OTRdXSwgWydzaGFycCcsIFs5ODM5XV0sIFsnU0hDSGN5JywgWzEwNjVdXSwgWydzaGNoY3knLCBbMTA5N11dLCBbJ1NIY3knLCBbMTA2NF1dLCBbJ3NoY3knLCBbMTA5Nl1dLCBbJ1Nob3J0RG93bkFycm93JywgWzg1OTVdXSwgWydTaG9ydExlZnRBcnJvdycsIFs4NTkyXV0sIFsnc2hvcnRtaWQnLCBbODczOV1dLCBbJ3Nob3J0cGFyYWxsZWwnLCBbODc0MV1dLCBbJ1Nob3J0UmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnU2hvcnRVcEFycm93JywgWzg1OTNdXSwgWydzaHknLCBbMTczXV0sIFsnU2lnbWEnLCBbOTMxXV0sIFsnc2lnbWEnLCBbOTYzXV0sIFsnc2lnbWFmJywgWzk2Ml1dLCBbJ3NpZ21hdicsIFs5NjJdXSwgWydzaW0nLCBbODc2NF1dLCBbJ3NpbWRvdCcsIFsxMDg1OF1dLCBbJ3NpbWUnLCBbODc3MV1dLCBbJ3NpbWVxJywgWzg3NzFdXSwgWydzaW1nJywgWzEwOTEwXV0sIFsnc2ltZ0UnLCBbMTA5MTJdXSwgWydzaW1sJywgWzEwOTA5XV0sIFsnc2ltbEUnLCBbMTA5MTFdXSwgWydzaW1uZScsIFs4Nzc0XV0sIFsnc2ltcGx1cycsIFsxMDc4OF1dLCBbJ3NpbXJhcnInLCBbMTA2MTBdXSwgWydzbGFycicsIFs4NTkyXV0sIFsnU21hbGxDaXJjbGUnLCBbODcyOF1dLCBbJ3NtYWxsc2V0bWludXMnLCBbODcyNl1dLCBbJ3NtYXNocCcsIFsxMDgwM11dLCBbJ3NtZXBhcnNsJywgWzEwNzI0XV0sIFsnc21pZCcsIFs4NzM5XV0sIFsnc21pbGUnLCBbODk5NV1dLCBbJ3NtdCcsIFsxMDkyMl1dLCBbJ3NtdGUnLCBbMTA5MjRdXSwgWydzbXRlcycsIFsxMDkyNCwgNjUwMjRdXSwgWydTT0ZUY3knLCBbMTA2OF1dLCBbJ3NvZnRjeScsIFsxMTAwXV0sIFsnc29sYmFyJywgWzkwMjNdXSwgWydzb2xiJywgWzEwNjkyXV0sIFsnc29sJywgWzQ3XV0sIFsnU29wZicsIFsxMjAxMzhdXSwgWydzb3BmJywgWzEyMDE2NF1dLCBbJ3NwYWRlcycsIFs5ODI0XV0sIFsnc3BhZGVzdWl0JywgWzk4MjRdXSwgWydzcGFyJywgWzg3NDFdXSwgWydzcWNhcCcsIFs4ODUxXV0sIFsnc3FjYXBzJywgWzg4NTEsIDY1MDI0XV0sIFsnc3FjdXAnLCBbODg1Ml1dLCBbJ3NxY3VwcycsIFs4ODUyLCA2NTAyNF1dLCBbJ1NxcnQnLCBbODczMF1dLCBbJ3Nxc3ViJywgWzg4NDddXSwgWydzcXN1YmUnLCBbODg0OV1dLCBbJ3Nxc3Vic2V0JywgWzg4NDddXSwgWydzcXN1YnNldGVxJywgWzg4NDldXSwgWydzcXN1cCcsIFs4ODQ4XV0sIFsnc3FzdXBlJywgWzg4NTBdXSwgWydzcXN1cHNldCcsIFs4ODQ4XV0sIFsnc3FzdXBzZXRlcScsIFs4ODUwXV0sIFsnc3F1YXJlJywgWzk2MzNdXSwgWydTcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZUludGVyc2VjdGlvbicsIFs4ODUxXV0sIFsnU3F1YXJlU3Vic2V0JywgWzg4NDddXSwgWydTcXVhcmVTdWJzZXRFcXVhbCcsIFs4ODQ5XV0sIFsnU3F1YXJlU3VwZXJzZXQnLCBbODg0OF1dLCBbJ1NxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODg1MF1dLCBbJ1NxdWFyZVVuaW9uJywgWzg4NTJdXSwgWydzcXVhcmYnLCBbOTY0Ml1dLCBbJ3NxdScsIFs5NjMzXV0sIFsnc3F1ZicsIFs5NjQyXV0sIFsnc3JhcnInLCBbODU5NF1dLCBbJ1NzY3InLCBbMTE5OTgyXV0sIFsnc3NjcicsIFsxMjAwMDhdXSwgWydzc2V0bW4nLCBbODcyNl1dLCBbJ3NzbWlsZScsIFs4OTk1XV0sIFsnc3N0YXJmJywgWzg5MDJdXSwgWydTdGFyJywgWzg5MDJdXSwgWydzdGFyJywgWzk3MzRdXSwgWydzdGFyZicsIFs5NzMzXV0sIFsnc3RyYWlnaHRlcHNpbG9uJywgWzEwMTNdXSwgWydzdHJhaWdodHBoaScsIFs5ODFdXSwgWydzdHJucycsIFsxNzVdXSwgWydzdWInLCBbODgzNF1dLCBbJ1N1YicsIFs4OTEyXV0sIFsnc3ViZG90JywgWzEwOTQxXV0sIFsnc3ViRScsIFsxMDk0OV1dLCBbJ3N1YmUnLCBbODgzOF1dLCBbJ3N1YmVkb3QnLCBbMTA5NDddXSwgWydzdWJtdWx0JywgWzEwOTQ1XV0sIFsnc3VibkUnLCBbMTA5NTVdXSwgWydzdWJuZScsIFs4ODQyXV0sIFsnc3VicGx1cycsIFsxMDk0M11dLCBbJ3N1YnJhcnInLCBbMTA2MTddXSwgWydzdWJzZXQnLCBbODgzNF1dLCBbJ1N1YnNldCcsIFs4OTEyXV0sIFsnc3Vic2V0ZXEnLCBbODgzOF1dLCBbJ3N1YnNldGVxcScsIFsxMDk0OV1dLCBbJ1N1YnNldEVxdWFsJywgWzg4MzhdXSwgWydzdWJzZXRuZXEnLCBbODg0Ml1dLCBbJ3N1YnNldG5lcXEnLCBbMTA5NTVdXSwgWydzdWJzaW0nLCBbMTA5NTFdXSwgWydzdWJzdWInLCBbMTA5NjVdXSwgWydzdWJzdXAnLCBbMTA5NjNdXSwgWydzdWNjYXBwcm94JywgWzEwOTM2XV0sIFsnc3VjYycsIFs4ODI3XV0sIFsnc3VjY2N1cmx5ZXEnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzJywgWzg4MjddXSwgWydTdWNjZWVkc0VxdWFsJywgWzEwOTI4XV0sIFsnU3VjY2VlZHNTbGFudEVxdWFsJywgWzg4MjldXSwgWydTdWNjZWVkc1RpbGRlJywgWzg4MzFdXSwgWydzdWNjZXEnLCBbMTA5MjhdXSwgWydzdWNjbmFwcHJveCcsIFsxMDkzOF1dLCBbJ3N1Y2NuZXFxJywgWzEwOTM0XV0sIFsnc3VjY25zaW0nLCBbODkzN11dLCBbJ3N1Y2NzaW0nLCBbODgzMV1dLCBbJ1N1Y2hUaGF0JywgWzg3MTVdXSwgWydzdW0nLCBbODcyMV1dLCBbJ1N1bScsIFs4NzIxXV0sIFsnc3VuZycsIFs5ODM0XV0sIFsnc3VwMScsIFsxODVdXSwgWydzdXAyJywgWzE3OF1dLCBbJ3N1cDMnLCBbMTc5XV0sIFsnc3VwJywgWzg4MzVdXSwgWydTdXAnLCBbODkxM11dLCBbJ3N1cGRvdCcsIFsxMDk0Ml1dLCBbJ3N1cGRzdWInLCBbMTA5NjhdXSwgWydzdXBFJywgWzEwOTUwXV0sIFsnc3VwZScsIFs4ODM5XV0sIFsnc3VwZWRvdCcsIFsxMDk0OF1dLCBbJ1N1cGVyc2V0JywgWzg4MzVdXSwgWydTdXBlcnNldEVxdWFsJywgWzg4MzldXSwgWydzdXBoc29sJywgWzEwMTg1XV0sIFsnc3VwaHN1YicsIFsxMDk2N11dLCBbJ3N1cGxhcnInLCBbMTA2MTldXSwgWydzdXBtdWx0JywgWzEwOTQ2XV0sIFsnc3VwbkUnLCBbMTA5NTZdXSwgWydzdXBuZScsIFs4ODQzXV0sIFsnc3VwcGx1cycsIFsxMDk0NF1dLCBbJ3N1cHNldCcsIFs4ODM1XV0sIFsnU3Vwc2V0JywgWzg5MTNdXSwgWydzdXBzZXRlcScsIFs4ODM5XV0sIFsnc3Vwc2V0ZXFxJywgWzEwOTUwXV0sIFsnc3Vwc2V0bmVxJywgWzg4NDNdXSwgWydzdXBzZXRuZXFxJywgWzEwOTU2XV0sIFsnc3Vwc2ltJywgWzEwOTUyXV0sIFsnc3Vwc3ViJywgWzEwOTY0XV0sIFsnc3Vwc3VwJywgWzEwOTY2XV0sIFsnc3dhcmhrJywgWzEwNTM0XV0sIFsnc3dhcnInLCBbODYwMV1dLCBbJ3N3QXJyJywgWzg2NjVdXSwgWydzd2Fycm93JywgWzg2MDFdXSwgWydzd253YXInLCBbMTA1MzhdXSwgWydzemxpZycsIFsyMjNdXSwgWydUYWInLCBbOV1dLCBbJ3RhcmdldCcsIFs4OTgyXV0sIFsnVGF1JywgWzkzMl1dLCBbJ3RhdScsIFs5NjRdXSwgWyd0YnJrJywgWzkxNDBdXSwgWydUY2Fyb24nLCBbMzU2XV0sIFsndGNhcm9uJywgWzM1N11dLCBbJ1RjZWRpbCcsIFszNTRdXSwgWyd0Y2VkaWwnLCBbMzU1XV0sIFsnVGN5JywgWzEwNThdXSwgWyd0Y3knLCBbMTA5MF1dLCBbJ3Rkb3QnLCBbODQxMV1dLCBbJ3RlbHJlYycsIFs4OTgxXV0sIFsnVGZyJywgWzEyMDA4N11dLCBbJ3RmcicsIFsxMjAxMTNdXSwgWyd0aGVyZTQnLCBbODc1Nl1dLCBbJ3RoZXJlZm9yZScsIFs4NzU2XV0sIFsnVGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGV0YScsIFs5MjBdXSwgWyd0aGV0YScsIFs5NTJdXSwgWyd0aGV0YXN5bScsIFs5NzddXSwgWyd0aGV0YXYnLCBbOTc3XV0sIFsndGhpY2thcHByb3gnLCBbODc3Nl1dLCBbJ3RoaWNrc2ltJywgWzg3NjRdXSwgWydUaGlja1NwYWNlJywgWzgyODcsIDgyMDJdXSwgWydUaGluU3BhY2UnLCBbODIwMV1dLCBbJ3RoaW5zcCcsIFs4MjAxXV0sIFsndGhrYXAnLCBbODc3Nl1dLCBbJ3Roa3NpbScsIFs4NzY0XV0sIFsnVEhPUk4nLCBbMjIyXV0sIFsndGhvcm4nLCBbMjU0XV0sIFsndGlsZGUnLCBbNzMyXV0sIFsnVGlsZGUnLCBbODc2NF1dLCBbJ1RpbGRlRXF1YWwnLCBbODc3MV1dLCBbJ1RpbGRlRnVsbEVxdWFsJywgWzg3NzNdXSwgWydUaWxkZVRpbGRlJywgWzg3NzZdXSwgWyd0aW1lc2JhcicsIFsxMDgwMV1dLCBbJ3RpbWVzYicsIFs4ODY0XV0sIFsndGltZXMnLCBbMjE1XV0sIFsndGltZXNkJywgWzEwODAwXV0sIFsndGludCcsIFs4NzQ5XV0sIFsndG9lYScsIFsxMDUzNl1dLCBbJ3RvcGJvdCcsIFs5MDE0XV0sIFsndG9wY2lyJywgWzEwOTkzXV0sIFsndG9wJywgWzg4NjhdXSwgWydUb3BmJywgWzEyMDEzOV1dLCBbJ3RvcGYnLCBbMTIwMTY1XV0sIFsndG9wZm9yaycsIFsxMDk3MF1dLCBbJ3Rvc2EnLCBbMTA1MzddXSwgWyd0cHJpbWUnLCBbODI0NF1dLCBbJ3RyYWRlJywgWzg0ODJdXSwgWydUUkFERScsIFs4NDgyXV0sIFsndHJpYW5nbGUnLCBbOTY1M11dLCBbJ3RyaWFuZ2xlZG93bicsIFs5NjYzXV0sIFsndHJpYW5nbGVsZWZ0JywgWzk2NjddXSwgWyd0cmlhbmdsZWxlZnRlcScsIFs4ODg0XV0sIFsndHJpYW5nbGVxJywgWzg3OTZdXSwgWyd0cmlhbmdsZXJpZ2h0JywgWzk2NTddXSwgWyd0cmlhbmdsZXJpZ2h0ZXEnLCBbODg4NV1dLCBbJ3RyaWRvdCcsIFs5NzA4XV0sIFsndHJpZScsIFs4Nzk2XV0sIFsndHJpbWludXMnLCBbMTA4MTBdXSwgWydUcmlwbGVEb3QnLCBbODQxMV1dLCBbJ3RyaXBsdXMnLCBbMTA4MDldXSwgWyd0cmlzYicsIFsxMDcwMV1dLCBbJ3RyaXRpbWUnLCBbMTA4MTFdXSwgWyd0cnBleml1bScsIFs5MTg2XV0sIFsnVHNjcicsIFsxMTk5ODNdXSwgWyd0c2NyJywgWzEyMDAwOV1dLCBbJ1RTY3knLCBbMTA2Ml1dLCBbJ3RzY3knLCBbMTA5NF1dLCBbJ1RTSGN5JywgWzEwMzVdXSwgWyd0c2hjeScsIFsxMTE1XV0sIFsnVHN0cm9rJywgWzM1OF1dLCBbJ3RzdHJvaycsIFszNTldXSwgWyd0d2l4dCcsIFs4ODEyXV0sIFsndHdvaGVhZGxlZnRhcnJvdycsIFs4NjA2XV0sIFsndHdvaGVhZHJpZ2h0YXJyb3cnLCBbODYwOF1dLCBbJ1VhY3V0ZScsIFsyMThdXSwgWyd1YWN1dGUnLCBbMjUwXV0sIFsndWFycicsIFs4NTkzXV0sIFsnVWFycicsIFs4NjA3XV0sIFsndUFycicsIFs4NjU3XV0sIFsnVWFycm9jaXInLCBbMTA1NjldXSwgWydVYnJjeScsIFsxMDM4XV0sIFsndWJyY3knLCBbMTExOF1dLCBbJ1VicmV2ZScsIFszNjRdXSwgWyd1YnJldmUnLCBbMzY1XV0sIFsnVWNpcmMnLCBbMjE5XV0sIFsndWNpcmMnLCBbMjUxXV0sIFsnVWN5JywgWzEwNTldXSwgWyd1Y3knLCBbMTA5MV1dLCBbJ3VkYXJyJywgWzg2NDVdXSwgWydVZGJsYWMnLCBbMzY4XV0sIFsndWRibGFjJywgWzM2OV1dLCBbJ3VkaGFyJywgWzEwNjA2XV0sIFsndWZpc2h0JywgWzEwNjIyXV0sIFsnVWZyJywgWzEyMDA4OF1dLCBbJ3VmcicsIFsxMjAxMTRdXSwgWydVZ3JhdmUnLCBbMjE3XV0sIFsndWdyYXZlJywgWzI0OV1dLCBbJ3VIYXInLCBbMTA1OTVdXSwgWyd1aGFybCcsIFs4NjM5XV0sIFsndWhhcnInLCBbODYzOF1dLCBbJ3VoYmxrJywgWzk2MDBdXSwgWyd1bGNvcm4nLCBbODk4OF1dLCBbJ3VsY29ybmVyJywgWzg5ODhdXSwgWyd1bGNyb3AnLCBbODk3NV1dLCBbJ3VsdHJpJywgWzk3MjBdXSwgWydVbWFjcicsIFszNjJdXSwgWyd1bWFjcicsIFszNjNdXSwgWyd1bWwnLCBbMTY4XV0sIFsnVW5kZXJCYXInLCBbOTVdXSwgWydVbmRlckJyYWNlJywgWzkxODNdXSwgWydVbmRlckJyYWNrZXQnLCBbOTE0MV1dLCBbJ1VuZGVyUGFyZW50aGVzaXMnLCBbOTE4MV1dLCBbJ1VuaW9uJywgWzg4OTldXSwgWydVbmlvblBsdXMnLCBbODg0Nl1dLCBbJ1VvZ29uJywgWzM3MF1dLCBbJ3VvZ29uJywgWzM3MV1dLCBbJ1VvcGYnLCBbMTIwMTQwXV0sIFsndW9wZicsIFsxMjAxNjZdXSwgWydVcEFycm93QmFyJywgWzEwNTE0XV0sIFsndXBhcnJvdycsIFs4NTkzXV0sIFsnVXBBcnJvdycsIFs4NTkzXV0sIFsnVXBhcnJvdycsIFs4NjU3XV0sIFsnVXBBcnJvd0Rvd25BcnJvdycsIFs4NjQ1XV0sIFsndXBkb3duYXJyb3cnLCBbODU5N11dLCBbJ1VwRG93bkFycm93JywgWzg1OTddXSwgWydVcGRvd25hcnJvdycsIFs4NjYxXV0sIFsnVXBFcXVpbGlicml1bScsIFsxMDYwNl1dLCBbJ3VwaGFycG9vbmxlZnQnLCBbODYzOV1dLCBbJ3VwaGFycG9vbnJpZ2h0JywgWzg2MzhdXSwgWyd1cGx1cycsIFs4ODQ2XV0sIFsnVXBwZXJMZWZ0QXJyb3cnLCBbODU5OF1dLCBbJ1VwcGVyUmlnaHRBcnJvdycsIFs4NTk5XV0sIFsndXBzaScsIFs5NjVdXSwgWydVcHNpJywgWzk3OF1dLCBbJ3Vwc2loJywgWzk3OF1dLCBbJ1Vwc2lsb24nLCBbOTMzXV0sIFsndXBzaWxvbicsIFs5NjVdXSwgWydVcFRlZUFycm93JywgWzg2MTNdXSwgWydVcFRlZScsIFs4ODY5XV0sIFsndXB1cGFycm93cycsIFs4NjQ4XV0sIFsndXJjb3JuJywgWzg5ODldXSwgWyd1cmNvcm5lcicsIFs4OTg5XV0sIFsndXJjcm9wJywgWzg5NzRdXSwgWydVcmluZycsIFszNjZdXSwgWyd1cmluZycsIFszNjddXSwgWyd1cnRyaScsIFs5NzIxXV0sIFsnVXNjcicsIFsxMTk5ODRdXSwgWyd1c2NyJywgWzEyMDAxMF1dLCBbJ3V0ZG90JywgWzg5NDRdXSwgWydVdGlsZGUnLCBbMzYwXV0sIFsndXRpbGRlJywgWzM2MV1dLCBbJ3V0cmknLCBbOTY1M11dLCBbJ3V0cmlmJywgWzk2NTJdXSwgWyd1dWFycicsIFs4NjQ4XV0sIFsnVXVtbCcsIFsyMjBdXSwgWyd1dW1sJywgWzI1Ml1dLCBbJ3V3YW5nbGUnLCBbMTA2NjNdXSwgWyd2YW5ncnQnLCBbMTA2NTJdXSwgWyd2YXJlcHNpbG9uJywgWzEwMTNdXSwgWyd2YXJrYXBwYScsIFsxMDA4XV0sIFsndmFybm90aGluZycsIFs4NzA5XV0sIFsndmFycGhpJywgWzk4MV1dLCBbJ3ZhcnBpJywgWzk4Ml1dLCBbJ3ZhcnByb3B0bycsIFs4NzMzXV0sIFsndmFycicsIFs4NTk3XV0sIFsndkFycicsIFs4NjYxXV0sIFsndmFycmhvJywgWzEwMDldXSwgWyd2YXJzaWdtYScsIFs5NjJdXSwgWyd2YXJzdWJzZXRuZXEnLCBbODg0MiwgNjUwMjRdXSwgWyd2YXJzdWJzZXRuZXFxJywgWzEwOTU1LCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcScsIFs4ODQzLCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcXEnLCBbMTA5NTYsIDY1MDI0XV0sIFsndmFydGhldGEnLCBbOTc3XV0sIFsndmFydHJpYW5nbGVsZWZ0JywgWzg4ODJdXSwgWyd2YXJ0cmlhbmdsZXJpZ2h0JywgWzg4ODNdXSwgWyd2QmFyJywgWzEwOTg0XV0sIFsnVmJhcicsIFsxMDk4N11dLCBbJ3ZCYXJ2JywgWzEwOTg1XV0sIFsnVmN5JywgWzEwNDJdXSwgWyd2Y3knLCBbMTA3NF1dLCBbJ3ZkYXNoJywgWzg4NjZdXSwgWyd2RGFzaCcsIFs4ODcyXV0sIFsnVmRhc2gnLCBbODg3M11dLCBbJ1ZEYXNoJywgWzg4NzVdXSwgWydWZGFzaGwnLCBbMTA5ODJdXSwgWyd2ZWViYXInLCBbODg5MV1dLCBbJ3ZlZScsIFs4NzQ0XV0sIFsnVmVlJywgWzg4OTddXSwgWyd2ZWVlcScsIFs4Nzk0XV0sIFsndmVsbGlwJywgWzg5NDJdXSwgWyd2ZXJiYXInLCBbMTI0XV0sIFsnVmVyYmFyJywgWzgyMTRdXSwgWyd2ZXJ0JywgWzEyNF1dLCBbJ1ZlcnQnLCBbODIxNF1dLCBbJ1ZlcnRpY2FsQmFyJywgWzg3MzldXSwgWydWZXJ0aWNhbExpbmUnLCBbMTI0XV0sIFsnVmVydGljYWxTZXBhcmF0b3InLCBbMTAwNzJdXSwgWydWZXJ0aWNhbFRpbGRlJywgWzg3NjhdXSwgWydWZXJ5VGhpblNwYWNlJywgWzgyMDJdXSwgWydWZnInLCBbMTIwMDg5XV0sIFsndmZyJywgWzEyMDExNV1dLCBbJ3ZsdHJpJywgWzg4ODJdXSwgWyd2bnN1YicsIFs4ODM0LCA4NDAyXV0sIFsndm5zdXAnLCBbODgzNSwgODQwMl1dLCBbJ1ZvcGYnLCBbMTIwMTQxXV0sIFsndm9wZicsIFsxMjAxNjddXSwgWyd2cHJvcCcsIFs4NzMzXV0sIFsndnJ0cmknLCBbODg4M11dLCBbJ1ZzY3InLCBbMTE5OTg1XV0sIFsndnNjcicsIFsxMjAwMTFdXSwgWyd2c3VibkUnLCBbMTA5NTUsIDY1MDI0XV0sIFsndnN1Ym5lJywgWzg4NDIsIDY1MDI0XV0sIFsndnN1cG5FJywgWzEwOTU2LCA2NTAyNF1dLCBbJ3ZzdXBuZScsIFs4ODQzLCA2NTAyNF1dLCBbJ1Z2ZGFzaCcsIFs4ODc0XV0sIFsndnppZ3phZycsIFsxMDY1MF1dLCBbJ1djaXJjJywgWzM3Ml1dLCBbJ3djaXJjJywgWzM3M11dLCBbJ3dlZGJhcicsIFsxMDg0N11dLCBbJ3dlZGdlJywgWzg3NDNdXSwgWydXZWRnZScsIFs4ODk2XV0sIFsnd2VkZ2VxJywgWzg3OTNdXSwgWyd3ZWllcnAnLCBbODQ3Ml1dLCBbJ1dmcicsIFsxMjAwOTBdXSwgWyd3ZnInLCBbMTIwMTE2XV0sIFsnV29wZicsIFsxMjAxNDJdXSwgWyd3b3BmJywgWzEyMDE2OF1dLCBbJ3dwJywgWzg0NzJdXSwgWyd3cicsIFs4NzY4XV0sIFsnd3JlYXRoJywgWzg3NjhdXSwgWydXc2NyJywgWzExOTk4Nl1dLCBbJ3dzY3InLCBbMTIwMDEyXV0sIFsneGNhcCcsIFs4ODk4XV0sIFsneGNpcmMnLCBbOTcxMV1dLCBbJ3hjdXAnLCBbODg5OV1dLCBbJ3hkdHJpJywgWzk2NjFdXSwgWydYZnInLCBbMTIwMDkxXV0sIFsneGZyJywgWzEyMDExN11dLCBbJ3hoYXJyJywgWzEwMjMxXV0sIFsneGhBcnInLCBbMTAyMzRdXSwgWydYaScsIFs5MjZdXSwgWyd4aScsIFs5NThdXSwgWyd4bGFycicsIFsxMDIyOV1dLCBbJ3hsQXJyJywgWzEwMjMyXV0sIFsneG1hcCcsIFsxMDIzNl1dLCBbJ3huaXMnLCBbODk1NV1dLCBbJ3hvZG90JywgWzEwNzUyXV0sIFsnWG9wZicsIFsxMjAxNDNdXSwgWyd4b3BmJywgWzEyMDE2OV1dLCBbJ3hvcGx1cycsIFsxMDc1M11dLCBbJ3hvdGltZScsIFsxMDc1NF1dLCBbJ3hyYXJyJywgWzEwMjMwXV0sIFsneHJBcnInLCBbMTAyMzNdXSwgWydYc2NyJywgWzExOTk4N11dLCBbJ3hzY3InLCBbMTIwMDEzXV0sIFsneHNxY3VwJywgWzEwNzU4XV0sIFsneHVwbHVzJywgWzEwNzU2XV0sIFsneHV0cmknLCBbOTY1MV1dLCBbJ3h2ZWUnLCBbODg5N11dLCBbJ3h3ZWRnZScsIFs4ODk2XV0sIFsnWWFjdXRlJywgWzIyMV1dLCBbJ3lhY3V0ZScsIFsyNTNdXSwgWydZQWN5JywgWzEwNzFdXSwgWyd5YWN5JywgWzExMDNdXSwgWydZY2lyYycsIFszNzRdXSwgWyd5Y2lyYycsIFszNzVdXSwgWydZY3knLCBbMTA2N11dLCBbJ3ljeScsIFsxMDk5XV0sIFsneWVuJywgWzE2NV1dLCBbJ1lmcicsIFsxMjAwOTJdXSwgWyd5ZnInLCBbMTIwMTE4XV0sIFsnWUljeScsIFsxMDMxXV0sIFsneWljeScsIFsxMTExXV0sIFsnWW9wZicsIFsxMjAxNDRdXSwgWyd5b3BmJywgWzEyMDE3MF1dLCBbJ1lzY3InLCBbMTE5OTg4XV0sIFsneXNjcicsIFsxMjAwMTRdXSwgWydZVWN5JywgWzEwNzBdXSwgWyd5dWN5JywgWzExMDJdXSwgWyd5dW1sJywgWzI1NV1dLCBbJ1l1bWwnLCBbMzc2XV0sIFsnWmFjdXRlJywgWzM3N11dLCBbJ3phY3V0ZScsIFszNzhdXSwgWydaY2Fyb24nLCBbMzgxXV0sIFsnemNhcm9uJywgWzM4Ml1dLCBbJ1pjeScsIFsxMDQ3XV0sIFsnemN5JywgWzEwNzldXSwgWydaZG90JywgWzM3OV1dLCBbJ3pkb3QnLCBbMzgwXV0sIFsnemVldHJmJywgWzg0ODhdXSwgWydaZXJvV2lkdGhTcGFjZScsIFs4MjAzXV0sIFsnWmV0YScsIFs5MThdXSwgWyd6ZXRhJywgWzk1MF1dLCBbJ3pmcicsIFsxMjAxMTldXSwgWydaZnInLCBbODQ4OF1dLCBbJ1pIY3knLCBbMTA0Nl1dLCBbJ3poY3knLCBbMTA3OF1dLCBbJ3ppZ3JhcnInLCBbODY2OV1dLCBbJ3pvcGYnLCBbMTIwMTcxXV0sIFsnWm9wZicsIFs4NDg0XV0sIFsnWnNjcicsIFsxMTk5ODldXSwgWyd6c2NyJywgWzEyMDAxNV1dLCBbJ3p3aicsIFs4MjA1XV0sIFsnenduaicsIFs4MjA0XV1dO1xuXG52YXIgYWxwaGFJbmRleCA9IHt9O1xudmFyIGNoYXJJbmRleCA9IHt9O1xuXG5jcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCk7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw1RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hyO1xuICAgICAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZW50aXR5LmNoYXJBdCgxKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmICghKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSkge1xuICAgICAgICAgICAgICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNociB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFySW5mbyA9IGNoYXJJbmRleFtzdHIuY2hhckNvZGVBdChpKV07XG4gICAgICAgIGlmIChjaGFySW5mbykge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gY2hhckluZm9bc3RyLmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBjaGFySW5mb1snJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBjaGFySW5mbyA9IGNoYXJJbmRleFtjXTtcbiAgICAgICAgaWYgKGNoYXJJbmZvKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBjaGFySW5mb1tzdHIuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGNoYXJJbmZvWycnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjIDwgMzIgfHwgYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5lbmNvZGVOb25VVEYoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrK1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYWxwaGFJbmRleCBQYXNzZWQgYnkgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtPYmplY3R9IGNoYXJJbmRleCBQYXNzZWQgYnkgcmVmZXJlbmNlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCkge1xuICAgIHZhciBpID0gRU5USVRJRVMubGVuZ3RoO1xuICAgIHZhciBfcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIGUgPSBFTlRJVElFU1tpXTtcbiAgICAgICAgdmFyIGFscGhhID0gZVswXTtcbiAgICAgICAgdmFyIGNoYXJzID0gZVsxXTtcbiAgICAgICAgdmFyIGNociA9IGNoYXJzWzBdO1xuICAgICAgICB2YXIgYWRkQ2hhciA9IChjaHIgPCAzMiB8fCBjaHIgPiAxMjYpIHx8IGNociA9PT0gNjIgfHwgY2hyID09PSA2MCB8fCBjaHIgPT09IDM4IHx8IGNociA9PT0gMzQgfHwgY2hyID09PSAzOTtcbiAgICAgICAgdmFyIGNoYXJJbmZvO1xuICAgICAgICBpZiAoYWRkQ2hhcikge1xuICAgICAgICAgICAgY2hhckluZm8gPSBjaGFySW5kZXhbY2hyXSA9IGNoYXJJbmRleFtjaHJdIHx8IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyc1sxXSkge1xuICAgICAgICAgICAgdmFyIGNocjIgPSBjaGFyc1sxXTtcbiAgICAgICAgICAgIGFscGhhSW5kZXhbYWxwaGFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goYWRkQ2hhciAmJiAoY2hhckluZm9bY2hyMl0gPSBhbHBoYSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxwaGFJbmRleFthbHBoYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGFkZENoYXIgJiYgKGNoYXJJbmZvWycnXSA9IGFscGhhKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSHRtbDVFbnRpdGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2xpYi9odG1sNS1lbnRpdGllcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAvW1xcdTAwMWJcXHUwMDliXVtbKCkjOz9dKig/OlswLTldezEsNH0oPzo7WzAtOV17MCw0fSkqKT9bMC05QS1QUlpjZi1ucXJ5PT48XS9nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbnNpLXJlZ2V4L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRrZXlzICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbnZhciBfaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG5cbi8qKlxuICogQ2FtZWxjYXNlcyBhIGh5cGhlbmF0ZWQgc3RyaW5nLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gY2FtZWxpemUoJ2JhY2tncm91bmQtY29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZENvbG9yXCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoX2h5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChfLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsaXplO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9jYW1lbGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FtZWxpemUgPSByZXF1aXJlKCcuL2NhbWVsaXplJyk7XG5cbnZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuXG4vKipcbiAqIENhbWVsY2FzZXMgYSBoeXBoZW5hdGVkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJ2JhY2tncm91bmQtY29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZENvbG9yXCJcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnLW1vei10cmFuc2l0aW9uJylcbiAqICAgPCBcIk1velRyYW5zaXRpb25cIlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCctbXMtdHJhbnNpdGlvbicpXG4gKiAgIDwgXCJtc1RyYW5zaXRpb25cIlxuICpcbiAqIEFzIEFuZGkgU21pdGggc3VnZ2VzdHNcbiAqIChodHRwOi8vd3d3LmFuZGlzbWl0aC5jb20vYmxvZy8yMDEyLzAyL21vZGVybml6ci1wcmVmaXhlZC8pLCBhbiBgLW1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2UgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsaXplU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gY2FtZWxpemUoc3RyaW5nLnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsaXplU3R5bGVOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG52YXIgX3VwcGVyY2FzZVBhdHRlcm4gPSAvKFtBLVpdKS9nO1xuXG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIHN0cmluZywgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICpcbiAqIEZvciBDU1Mgc3R5bGUgbmFtZXMsIHVzZSBgaHlwaGVuYXRlU3R5bGVOYW1lYCBpbnN0ZWFkIHdoaWNoIHdvcmtzIHByb3Blcmx5XG4gKiB3aXRoIGFsbCB2ZW5kb3IgcHJlZml4ZXMsIGluY2x1ZGluZyBgbXNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHlwaGVuYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoX3VwcGVyY2FzZVBhdHRlcm4sICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvaHlwaGVuYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoeXBoZW5hdGUgPSByZXF1aXJlKCcuL2h5cGhlbmF0ZScpO1xuXG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuXG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdNb3pUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tb3otdHJhbnNpdGlvblwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxuICogICA8IFwiLW1zLXRyYW5zaXRpb25cIlxuICpcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGAtbXMtYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuIGh5cGhlbmF0ZShzdHJpbmcpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKiBAdHlwZWNoZWNrcyBzdGF0aWMtb25seVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNZW1vaXplcyB0aGUgcmV0dXJuIHZhbHVlIG9mIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBzdHJpbmcgYXJndW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gbWVtb2l6ZVN0cmluZ09ubHkoY2FsbGJhY2spIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKCFjYWNoZS5oYXNPd25Qcm9wZXJ0eShzdHJpbmcpKSB7XG4gICAgICBjYWNoZVtzdHJpbmddID0gY2FsbGJhY2suY2FsbCh0aGlzLCBzdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVbc3RyaW5nXTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplU3RyaW5nT25seTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvbWVtb2l6ZVN0cmluZ09ubHkuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBDU1NQcm9wZXJ0eVxuICovXG5cbi8qKlxuICogQ1NTIHByb3BlcnRpZXMgd2hpY2ggYWNjZXB0IG51bWJlcnMgYnV0IGFyZSBub3QgaW4gdW5pdHMgb2YgXCJweFwiLlxuICovXG5cbnZhciBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IHRydWUsXG4gIGJvcmRlckltYWdlU2xpY2U6IHRydWUsXG4gIGJvcmRlckltYWdlV2lkdGg6IHRydWUsXG4gIGJveEZsZXg6IHRydWUsXG4gIGJveEZsZXhHcm91cDogdHJ1ZSxcbiAgYm94T3JkaW5hbEdyb3VwOiB0cnVlLFxuICBjb2x1bW5Db3VudDogdHJ1ZSxcbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhQb3NpdGl2ZTogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleE5lZ2F0aXZlOiB0cnVlLFxuICBmbGV4T3JkZXI6IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGZvbnRXZWlnaHQ6IHRydWUsXG4gIGxpbmVDbGFtcDogdHJ1ZSxcbiAgbGluZUhlaWdodDogdHJ1ZSxcbiAgb3BhY2l0eTogdHJ1ZSxcbiAgb3JkZXI6IHRydWUsXG4gIG9ycGhhbnM6IHRydWUsXG4gIHRhYlNpemU6IHRydWUsXG4gIHdpZG93czogdHJ1ZSxcbiAgekluZGV4OiB0cnVlLFxuICB6b29tOiB0cnVlLFxuXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IHRydWUsXG4gIGZsb29kT3BhY2l0eTogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZURhc2hhcnJheTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWVcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCB2ZW5kb3Itc3BlY2lmaWMgcHJlZml4LCBlZzogV2Via2l0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHN0eWxlIG5hbWUsIGVnOiB0cmFuc2l0aW9uRHVyYXRpb25cbiAqIEByZXR1cm4ge3N0cmluZ30gc3R5bGUgbmFtZSBwcmVmaXhlZCB3aXRoIGBwcmVmaXhgLCBwcm9wZXJseSBjYW1lbENhc2VkLCBlZzpcbiAqIFdlYmtpdFRyYW5zaXRpb25EdXJhdGlvblxuICovXG5mdW5jdGlvbiBwcmVmaXhLZXkocHJlZml4LCBrZXkpIHtcbiAgcmV0dXJuIHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG59XG5cbi8qKlxuICogU3VwcG9ydCBzdHlsZSBuYW1lcyB0aGF0IG1heSBjb21lIHBhc3NlZCBpbiBwcmVmaXhlZCBieSBhZGRpbmcgcGVybXV0YXRpb25zXG4gKiBvZiB2ZW5kb3IgcHJlZml4ZXMuXG4gKi9cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ21zJywgJ01veicsICdPJ107XG5cbi8vIFVzaW5nIE9iamVjdC5rZXlzIGhlcmUsIG9yIGVsc2UgdGhlIHZhbmlsbGEgZm9yLWluIGxvb3AgbWFrZXMgSUU4IGdvIGludG8gYW5cbi8vIGluZmluaXRlIGxvb3AsIGJlY2F1c2UgaXQgaXRlcmF0ZXMgb3ZlciB0aGUgbmV3bHkgYWRkZWQgcHJvcHMgdG9vLlxuT2JqZWN0LmtleXMoaXNVbml0bGVzc051bWJlcikuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICBwcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBpc1VuaXRsZXNzTnVtYmVyW3ByZWZpeEtleShwcmVmaXgsIHByb3ApXSA9IGlzVW5pdGxlc3NOdW1iZXJbcHJvcF07XG4gIH0pO1xufSk7XG5cbi8qKlxuICogTW9zdCBzdHlsZSBwcm9wZXJ0aWVzIGNhbiBiZSB1bnNldCBieSBkb2luZyAuc3R5bGVbcHJvcF0gPSAnJyBidXQgSUU4XG4gKiBkb2Vzbid0IGxpa2UgZG9pbmcgdGhhdCB3aXRoIHNob3J0aGFuZCBwcm9wZXJ0aWVzIHNvIGZvciB0aGUgcHJvcGVydGllcyB0aGF0XG4gKiBJRTggYnJlYWtzIG9uLCB3aGljaCBhcmUgbGlzdGVkIGhlcmUsIHdlIGluc3RlYWQgdW5zZXQgZWFjaCBvZiB0aGVcbiAqIGluZGl2aWR1YWwgcHJvcGVydGllcy4gU2VlIGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMzg1LlxuICogVGhlIDQtdmFsdWUgJ2Nsb2NrJyBwcm9wZXJ0aWVzIGxpa2UgbWFyZ2luLCBwYWRkaW5nLCBib3JkZXItd2lkdGggc2VlbSB0b1xuICogYmVoYXZlIHdpdGhvdXQgYW55IHByb2JsZW1zLiBDdXJpb3VzbHksIGxpc3Qtc3R5bGUgd29ya3MgdG9vIHdpdGhvdXQgYW55XG4gKiBzcGVjaWFsIHByb2RkaW5nLlxuICovXG52YXIgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zID0ge1xuICBiYWNrZ3JvdW5kOiB7XG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IHRydWUsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0cnVlLFxuICAgIGJhY2tncm91bmRJbWFnZTogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25YOiB0cnVlLFxuICAgIGJhY2tncm91bmRQb3NpdGlvblk6IHRydWUsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogdHJ1ZVxuICB9LFxuICBiYWNrZ3JvdW5kUG9zaXRpb246IHtcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25YOiB0cnVlLFxuICAgIGJhY2tncm91bmRQb3NpdGlvblk6IHRydWVcbiAgfSxcbiAgYm9yZGVyOiB7XG4gICAgYm9yZGVyV2lkdGg6IHRydWUsXG4gICAgYm9yZGVyU3R5bGU6IHRydWUsXG4gICAgYm9yZGVyQ29sb3I6IHRydWVcbiAgfSxcbiAgYm9yZGVyQm90dG9tOiB7XG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IHRydWUsXG4gICAgYm9yZGVyQm90dG9tU3R5bGU6IHRydWUsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IHRydWVcbiAgfSxcbiAgYm9yZGVyTGVmdDoge1xuICAgIGJvcmRlckxlZnRXaWR0aDogdHJ1ZSxcbiAgICBib3JkZXJMZWZ0U3R5bGU6IHRydWUsXG4gICAgYm9yZGVyTGVmdENvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlclJpZ2h0OiB7XG4gICAgYm9yZGVyUmlnaHRXaWR0aDogdHJ1ZSxcbiAgICBib3JkZXJSaWdodFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IHRydWVcbiAgfSxcbiAgYm9yZGVyVG9wOiB7XG4gICAgYm9yZGVyVG9wV2lkdGg6IHRydWUsXG4gICAgYm9yZGVyVG9wU3R5bGU6IHRydWUsXG4gICAgYm9yZGVyVG9wQ29sb3I6IHRydWVcbiAgfSxcbiAgZm9udDoge1xuICAgIGZvbnRTdHlsZTogdHJ1ZSxcbiAgICBmb250VmFyaWFudDogdHJ1ZSxcbiAgICBmb250V2VpZ2h0OiB0cnVlLFxuICAgIGZvbnRTaXplOiB0cnVlLFxuICAgIGxpbmVIZWlnaHQ6IHRydWUsXG4gICAgZm9udEZhbWlseTogdHJ1ZVxuICB9LFxuICBvdXRsaW5lOiB7XG4gICAgb3V0bGluZVdpZHRoOiB0cnVlLFxuICAgIG91dGxpbmVTdHlsZTogdHJ1ZSxcbiAgICBvdXRsaW5lQ29sb3I6IHRydWVcbiAgfVxufTtcblxudmFyIENTU1Byb3BlcnR5ID0ge1xuICBpc1VuaXRsZXNzTnVtYmVyOiBpc1VuaXRsZXNzTnVtYmVyLFxuICBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnM6IHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9uc1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ1NTUHJvcGVydHk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL0NTU1Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQ1NTUHJvcGVydHkgPSByZXF1aXJlKCcuL0NTU1Byb3BlcnR5Jyk7XG5cbnZhciBfQ1NTUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ1NTUHJvcGVydHkpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGRhbmdlcm91c1N0eWxlVmFsdWVcbiAqL1xuXG52YXIgaXNVbml0bGVzc051bWJlciA9IF9DU1NQcm9wZXJ0eTIuZGVmYXVsdC5pc1VuaXRsZXNzTnVtYmVyO1xudmFyIHN0eWxlV2FybmluZ3MgPSB7fTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgaW50byB0aGUgcHJvcGVyIGNzcyB3cml0YWJsZSB2YWx1ZS4gVGhlIHN0eWxlIG5hbWUgYG5hbWVgXG4gKiBzaG91bGQgYmUgbG9naWNhbCAobm8gaHlwaGVucyksIGFzIHNwZWNpZmllZFxuICogaW4gYENTU1Byb3BlcnR5LmlzVW5pdGxlc3NOdW1iZXJgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIENTUyBwcm9wZXJ0eSBuYW1lIHN1Y2ggYXMgYHRvcE1hcmdpbmAuXG4gKiBAcGFyYW0geyp9IHZhbHVlIENTUyBwcm9wZXJ0eSB2YWx1ZSBzdWNoIGFzIGAxMHB4YC5cbiAqIEBwYXJhbSB7UmVhY3RET01Db21wb25lbnR9IGNvbXBvbmVudFxuICogQHJldHVybiB7c3RyaW5nfSBOb3JtYWxpemVkIHN0eWxlIHZhbHVlIHdpdGggZGltZW5zaW9ucyBhcHBsaWVkLlxuICovXG5mdW5jdGlvbiBkYW5nZXJvdXNTdHlsZVZhbHVlKG5hbWUsIHZhbHVlLCBjb21wb25lbnQpIHtcbiAgLy8gTm90ZSB0aGF0IHdlJ3ZlIHJlbW92ZWQgZXNjYXBlVGV4dEZvckJyb3dzZXIoKSBjYWxscyBoZXJlIHNpbmNlIHRoZVxuICAvLyB3aG9sZSBzdHJpbmcgd2lsbCBiZSBlc2NhcGVkIHdoZW4gdGhlIGF0dHJpYnV0ZSBpcyBpbmplY3RlZCBpbnRvXG4gIC8vIHRoZSBtYXJrdXAuIElmIHlvdSBwcm92aWRlIHVuc2FmZSB1c2VyIGRhdGEgaGVyZSB0aGV5IGNhbiBpbmplY3RcbiAgLy8gYXJiaXRyYXJ5IENTUyB3aGljaCBtYXkgYmUgcHJvYmxlbWF0aWMgKEkgY291bGRuJ3QgcmVwcm8gdGhpcyk6XG4gIC8vIGh0dHBzOi8vd3d3Lm93YXNwLm9yZy9pbmRleC5waHAvWFNTX0ZpbHRlcl9FdmFzaW9uX0NoZWF0X1NoZWV0XG4gIC8vIGh0dHA6Ly93d3cudGhlc3Bhbm5lci5jby51ay8yMDA3LzExLzI2L3VsdGltYXRlLXhzcy1jc3MtaW5qZWN0aW9uL1xuICAvLyBUaGlzIGlzIG5vdCBhbiBYU1MgaG9sZSBidXQgaW5zdGVhZCBhIHBvdGVudGlhbCBDU1MgaW5qZWN0aW9uIGlzc3VlXG4gIC8vIHdoaWNoIGhhcyBsZWFkIHRvIGEgZ3JlYXRlciBkaXNjdXNzaW9uIGFib3V0IGhvdyB3ZSdyZSBnb2luZyB0b1xuICAvLyB0cnVzdCBVUkxzIG1vdmluZyBmb3J3YXJkLiBTZWUgIzIxMTU5MDFcblxuICB2YXIgaXNFbXB0eSA9IHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnO1xuICBpZiAoaXNFbXB0eSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBpc05vbk51bWVyaWMgPSBpc05hTih2YWx1ZSk7XG4gIGlmIChpc05vbk51bWVyaWMgfHwgdmFsdWUgPT09IDAgfHwgaXNVbml0bGVzc051bWJlci5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpc1VuaXRsZXNzTnVtYmVyW25hbWVdKSB7XG4gICAgcmV0dXJuICcnICsgdmFsdWU7IC8vIGNhc3QgdG8gc3RyaW5nXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBBbGxvdyAnMCcgdG8gcGFzcyB0aHJvdWdoIHdpdGhvdXQgd2FybmluZy4gMCBpcyBhbHJlYWR5IHNwZWNpYWwgYW5kXG4gICAgICAvLyBkb2Vzbid0IHJlcXVpcmUgdW5pdHMsIHNvIHdlIGRvbid0IG5lZWQgdG8gd2FybiBhYm91dCBpdC5cbiAgICAgIGlmIChjb21wb25lbnQgJiYgdmFsdWUgIT09ICcwJykge1xuICAgICAgICB2YXIgb3duZXIgPSBjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50Ll9vd25lcjtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IG93bmVyID8gb3duZXIuZ2V0TmFtZSgpIDogbnVsbDtcbiAgICAgICAgaWYgKG93bmVyTmFtZSAmJiAhc3R5bGVXYXJuaW5nc1tvd25lck5hbWVdKSB7XG4gICAgICAgICAgc3R5bGVXYXJuaW5nc1tvd25lck5hbWVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICAgICAgICBpZiAob3duZXJOYW1lKSB7XG4gICAgICAgICAgdmFyIHdhcm5pbmdzID0gc3R5bGVXYXJuaW5nc1tvd25lck5hbWVdO1xuICAgICAgICAgIHdhcm5lZCA9IHdhcm5pbmdzW25hbWVdO1xuICAgICAgICAgIGlmICghd2FybmVkKSB7XG4gICAgICAgICAgICB3YXJuaW5nc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghd2FybmVkKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdhIGAlc2AgdGFnIChvd25lcjogYCVzYCkgd2FzIHBhc3NlZCBhIG51bWVyaWMgc3RyaW5nIHZhbHVlICcgKyAnZm9yIENTUyBwcm9wZXJ0eSBgJXNgICh2YWx1ZTogYCVzYCkgd2hpY2ggd2lsbCBiZSB0cmVhdGVkICcgKyAnYXMgYSB1bml0bGVzcyBudW1iZXIgaW4gYSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdC4nLCBjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50LnR5cGUsIG93bmVyTmFtZSB8fCAndW5rbm93bicsIG5hbWUsIHZhbHVlKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgfVxuICByZXR1cm4gdmFsdWUgKyAncHgnO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkYW5nZXJvdXNTdHlsZVZhbHVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9kYW5nZXJvdXNTdHlsZVZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY2xlYW47XG4vLyBSZXR1cm5zIHRydWUgZm9yIG51bGwsIGZhbHNlLCB1bmRlZmluZWQgYW5kIHt9XG5mdW5jdGlvbiBpc0ZhbHN5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSB8fCAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBjbGVhbk9iamVjdChvYmplY3QpIHtcbiAgaWYgKGlzRmFsc3kob2JqZWN0KSkgcmV0dXJuIG51bGw7XG4gIGlmICgodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgIT09ICdvYmplY3QnKSByZXR1cm4gb2JqZWN0O1xuXG4gIHZhciBhY2MgPSB7fSxcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgaGFzRmFsc3kgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0W2tleXNbaV1dO1xuICAgIHZhciBmaWx0ZXJlZFZhbHVlID0gY2xlYW4odmFsdWUpO1xuICAgIGlmIChmaWx0ZXJlZFZhbHVlID09PSBudWxsIHx8IGZpbHRlcmVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBoYXNGYWxzeSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBhY2Nba2V5c1tpXV0gPSBmaWx0ZXJlZFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMoYWNjKS5sZW5ndGggPT09IDAgPyBudWxsIDogaGFzRmFsc3kgPyBhY2MgOiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGNsZWFuQXJyYXkocnVsZXMpIHtcbiAgdmFyIGhhc0ZhbHN5ID0gZmFsc2U7XG4gIHZhciBmaWx0ZXJlZCA9IFtdO1xuICBydWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgdmFyIGZpbHRlcmVkUnVsZSA9IGNsZWFuKHJ1bGUpO1xuICAgIGlmIChmaWx0ZXJlZFJ1bGUgPT09IG51bGwgfHwgZmlsdGVyZWRSdWxlICE9PSBydWxlKSB7XG4gICAgICBoYXNGYWxzeSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGZpbHRlcmVkLnB1c2goZmlsdGVyZWRSdWxlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWQubGVuZ3RoID09IDAgPyBudWxsIDogaGFzRmFsc3kgPyBmaWx0ZXJlZCA6IHJ1bGVzO1xufVxuXG4vLyBUYWtlcyBzdHlsZSBhcnJheSBvciBvYmplY3QgcHJvdmlkZWQgYnkgdXNlciBhbmQgY2xlYXJzIGFsbCB0aGUgZmFsc3kgZGF0YSBcbi8vIElmIHRoZXJlIGlzIG5vIHN0eWxlcyBsZWZ0IGFmdGVyIGZpbHRyYXRpb24gcmV0dXJucyBudWxsXG5mdW5jdGlvbiBjbGVhbihpbnB1dCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBjbGVhbkFycmF5KGlucHV0KSA6IGNsZWFuT2JqZWN0KGlucHV0KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9jbGVhbi5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkb0hhc2g7XG4vLyBtdXJtdXJoYXNoMiB2aWEgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcmF5Y21vcmdhbi81ODg0MjNcblxuZnVuY3Rpb24gZG9IYXNoKHN0ciwgc2VlZCkge1xuICB2YXIgbSA9IDB4NWJkMWU5OTU7XG4gIHZhciByID0gMjQ7XG4gIHZhciBoID0gc2VlZCBeIHN0ci5sZW5ndGg7XG4gIHZhciBsZW5ndGggPSBzdHIubGVuZ3RoO1xuICB2YXIgY3VycmVudEluZGV4ID0gMDtcblxuICB3aGlsZSAobGVuZ3RoID49IDQpIHtcbiAgICB2YXIgayA9IFVJbnQzMihzdHIsIGN1cnJlbnRJbmRleCk7XG5cbiAgICBrID0gVW11bDMyKGssIG0pO1xuICAgIGsgXj0gayA+Pj4gcjtcbiAgICBrID0gVW11bDMyKGssIG0pO1xuXG4gICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICBoIF49IGs7XG5cbiAgICBjdXJyZW50SW5kZXggKz0gNDtcbiAgICBsZW5ndGggLT0gNDtcbiAgfVxuXG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSBVSW50MTYoc3RyLCBjdXJyZW50SW5kZXgpO1xuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChjdXJyZW50SW5kZXggKyAyKSA8PCAxNjtcbiAgICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gVUludDE2KHN0ciwgY3VycmVudEluZGV4KTtcbiAgICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoY3VycmVudEluZGV4KTtcbiAgICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPSBVbXVsMzIoaCwgbSk7XG4gIGggXj0gaCA+Pj4gMTU7XG5cbiAgcmV0dXJuIGggPj4+IDA7XG59XG5cbmZ1bmN0aW9uIFVJbnQzMihzdHIsIHBvcykge1xuICByZXR1cm4gc3RyLmNoYXJDb2RlQXQocG9zKyspICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCA4KSArIChzdHIuY2hhckNvZGVBdChwb3MrKykgPDwgMTYpICsgKHN0ci5jaGFyQ29kZUF0KHBvcykgPDwgMjQpO1xufVxuXG5mdW5jdGlvbiBVSW50MTYoc3RyLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQ29kZUF0KHBvcysrKSArIChzdHIuY2hhckNvZGVBdChwb3MrKykgPDwgOCk7XG59XG5cbmZ1bmN0aW9uIFVtdWwzMihuLCBtKSB7XG4gIG4gPSBuIHwgMDtcbiAgbSA9IG0gfCAwO1xuICB2YXIgbmxvID0gbiAmIDB4ZmZmZjtcbiAgdmFyIG5oaSA9IG4gPj4+IDE2O1xuICB2YXIgcmVzID0gbmxvICogbSArICgobmhpICogbSAmIDB4ZmZmZikgPDwgMTYpIHwgMDtcbiAgcmV0dXJuIHJlcztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9oYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgKHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihleHBvcnRzKSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOiBnbG9iYWwuSW5saW5lU3R5bGVQcmVmaXhBbGwgPSBmYWN0b3J5KCk7XG59KSh1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBiYWJlbEhlbHBlcnMgPSB7fTtcblxuICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xuXG4gIGJhYmVsSGVscGVycy5jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzO1xuXG4gIGZ1bmN0aW9uIF9fY29tbW9uanMoZm4sIG1vZHVsZSkge1xuICAgIHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHZhciBwcmVmaXhQcm9wcyA9IHsgXCJXZWJraXRcIjogeyBcInRyYW5zZm9ybVwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblhcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IHRydWUsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IHRydWUsIFwicGVyc3BlY3RpdmVcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybVN0eWxlXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiB0cnVlLCBcImFuaW1hdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkRlbGF5XCI6IHRydWUsIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogdHJ1ZSwgXCJhbmltYXRpb25EdXJhdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsIFwiYW5pbWF0aW9uTmFtZVwiOiB0cnVlLCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiB0cnVlLCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHRydWUsIFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJmb250S2VybmluZ1wiOiB0cnVlLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiB0cnVlLCBcImJveERlY29yYXRpb25CcmVha1wiOiB0cnVlLCBcImNsaXBQYXRoXCI6IHRydWUsIFwibWFza0ltYWdlXCI6IHRydWUsIFwibWFza01vZGVcIjogdHJ1ZSwgXCJtYXNrUmVwZWF0XCI6IHRydWUsIFwibWFza1Bvc2l0aW9uXCI6IHRydWUsIFwibWFza0NsaXBcIjogdHJ1ZSwgXCJtYXNrT3JpZ2luXCI6IHRydWUsIFwibWFza1NpemVcIjogdHJ1ZSwgXCJtYXNrQ29tcG9zaXRlXCI6IHRydWUsIFwibWFza1wiOiB0cnVlLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyTW9kZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJTbGljZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IHRydWUsIFwibWFza0JvcmRlclwiOiB0cnVlLCBcIm1hc2tUeXBlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJmaWx0ZXJcIjogdHJ1ZSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJjb2x1bW5Db3VudFwiOiB0cnVlLCBcImNvbHVtbkZpbGxcIjogdHJ1ZSwgXCJjb2x1bW5HYXBcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZUNvbG9yXCI6IHRydWUsIFwiY29sdW1uUnVsZVN0eWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZVdpZHRoXCI6IHRydWUsIFwiY29sdW1uc1wiOiB0cnVlLCBcImNvbHVtblNwYW5cIjogdHJ1ZSwgXCJjb2x1bW5XaWR0aFwiOiB0cnVlLCBcImZsZXhcIjogdHJ1ZSwgXCJmbGV4QmFzaXNcIjogdHJ1ZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogdHJ1ZSwgXCJmbGV4Rmxvd1wiOiB0cnVlLCBcImZsZXhTaHJpbmtcIjogdHJ1ZSwgXCJmbGV4V3JhcFwiOiB0cnVlLCBcImFsaWduQ29udGVudFwiOiB0cnVlLCBcImFsaWduSXRlbXNcIjogdHJ1ZSwgXCJhbGlnblNlbGZcIjogdHJ1ZSwgXCJqdXN0aWZ5Q29udGVudFwiOiB0cnVlLCBcIm9yZGVyXCI6IHRydWUsIFwiYmFja2Ryb3BGaWx0ZXJcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIjogdHJ1ZSwgXCJzaGFwZUltYWdlTWFyZ2luXCI6IHRydWUsIFwic2hhcGVJbWFnZU91dHNpZGVcIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZmxvd0ludG9cIjogdHJ1ZSwgXCJmbG93RnJvbVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwidGV4dFNpemVBZGp1c3RcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uXCI6IHRydWUsIFwidHJhbnNpdGlvbkRlbGF5XCI6IHRydWUsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IHRydWUsIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHRydWUgfSwgXCJNb3pcIjogeyBcImFwcGVhcmFuY2VcIjogdHJ1ZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwiYm94U2l6aW5nXCI6IHRydWUsIFwidGV4dEFsaWduTGFzdFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IHRydWUsIFwidGFiU2l6ZVwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJjb2x1bW5Db3VudFwiOiB0cnVlLCBcImNvbHVtbkZpbGxcIjogdHJ1ZSwgXCJjb2x1bW5HYXBcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZUNvbG9yXCI6IHRydWUsIFwiY29sdW1uUnVsZVN0eWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZVdpZHRoXCI6IHRydWUsIFwiY29sdW1uc1wiOiB0cnVlLCBcImNvbHVtblNwYW5cIjogdHJ1ZSwgXCJjb2x1bW5XaWR0aFwiOiB0cnVlIH0sIFwibXNcIjogeyBcImZsZXhcIjogdHJ1ZSwgXCJmbGV4QmFzaXNcIjogZmFsc2UsIFwiZmxleERpcmVjdGlvblwiOiB0cnVlLCBcImZsZXhHcm93XCI6IGZhbHNlLCBcImZsZXhGbG93XCI6IHRydWUsIFwiZmxleFNocmlua1wiOiBmYWxzZSwgXCJmbGV4V3JhcFwiOiB0cnVlLCBcImFsaWduQ29udGVudFwiOiBmYWxzZSwgXCJhbGlnbkl0ZW1zXCI6IGZhbHNlLCBcImFsaWduU2VsZlwiOiBmYWxzZSwgXCJqdXN0aWZ5Q29udGVudFwiOiBmYWxzZSwgXCJvcmRlclwiOiBmYWxzZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwid3JhcEZsb3dcIjogdHJ1ZSwgXCJ3cmFwVGhyb3VnaFwiOiB0cnVlLCBcIndyYXBNYXJnaW5cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInRvdWNoQWN0aW9uXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZsb3dJbnRvXCI6IHRydWUsIFwiZmxvd0Zyb21cIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVJvd3NcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVwiOiB0cnVlLCBcImdyaWRBdXRvQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRBdXRvUm93c1wiOiB0cnVlLCBcImdyaWRBdXRvRmxvd1wiOiB0cnVlLCBcImdyaWRcIjogdHJ1ZSwgXCJncmlkUm93U3RhcnRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uU3RhcnRcIjogdHJ1ZSwgXCJncmlkUm93RW5kXCI6IHRydWUsIFwiZ3JpZFJvd1wiOiB0cnVlLCBcImdyaWRDb2x1bW5cIjogdHJ1ZSwgXCJncmlkQ29sdW1uRW5kXCI6IHRydWUsIFwiZ3JpZENvbHVtbkdhcFwiOiB0cnVlLCBcImdyaWRSb3dHYXBcIjogdHJ1ZSwgXCJncmlkQXJlYVwiOiB0cnVlLCBcImdyaWRHYXBcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlIH0gfTtcblxuICAvLyBoZWxwZXIgdG8gY2FwaXRhbGl6ZSBzdHJpbmdzXG4gIHZhciBjYXBpdGFsaXplU3RyaW5nID0gZnVuY3Rpb24gY2FwaXRhbGl6ZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9O1xuXG4gIHZhciBpc1ByZWZpeGVkUHJvcGVydHkgPSBmdW5jdGlvbiBpc1ByZWZpeGVkUHJvcGVydHkocHJvcGVydHkpIHtcbiAgICByZXR1cm4gcHJvcGVydHkubWF0Y2goL14oV2Via2l0fE1venxPfG1zKS8pICE9PSBudWxsO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNvcnRQcmVmaXhlZFN0eWxlKHN0eWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5zb3J0KGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgICAgaWYgKGlzUHJlZml4ZWRQcm9wZXJ0eShsZWZ0KSAmJiAhaXNQcmVmaXhlZFByb3BlcnR5KHJpZ2h0KSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKCFpc1ByZWZpeGVkUHJvcGVydHkobGVmdCkgJiYgaXNQcmVmaXhlZFByb3BlcnR5KHJpZ2h0KSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoc29ydGVkU3R5bGUsIHByb3ApIHtcbiAgICAgIHNvcnRlZFN0eWxlW3Byb3BdID0gc3R5bGVbcHJvcF07XG4gICAgICByZXR1cm4gc29ydGVkU3R5bGU7XG4gICAgfSwge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9zaXRpb24ocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSAncG9zaXRpb24nICYmIHZhbHVlID09PSAnc3RpY2t5Jykge1xuICAgICAgcmV0dXJuIHsgcG9zaXRpb246IFsnLXdlYmtpdC1zdGlja3knLCAnc3RpY2t5J10gfTtcbiAgICB9XG4gIH1cblxuICAvLyByZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgY29uY2F0ZWQgcHJlZml4ZWQgdmFsdWUgc3RyaW5nXG4gIHZhciBqb2luUHJlZml4ZWRWYWx1ZSA9IGZ1bmN0aW9uIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciByZXBsYWNlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBbJy13ZWJraXQtJywgJy1tb3otJywgJyddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcmVwbGFjZXIocHJlZml4LCB2YWx1ZSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIHZhciBpc1ByZWZpeGVkVmFsdWUgPSBmdW5jdGlvbiBpc1ByZWZpeGVkVmFsdWUodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gdmFsdWUuam9pbignLCcpO1xuXG4gICAgcmV0dXJuIHZhbHVlLm1hdGNoKC8td2Via2l0LXwtbW96LXwtbXMtLykgIT09IG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2FsYyhwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdjYWxjKCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBqb2luUHJlZml4ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGZ1bmN0aW9uIChwcmVmaXgsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9jYWxjXFwoL2csIHByZWZpeCArICdjYWxjKCcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbHVlcyA9IHtcbiAgICAnem9vbS1pbic6IHRydWUsXG4gICAgJ3pvb20tb3V0JzogdHJ1ZSxcbiAgICBncmFiOiB0cnVlLFxuICAgIGdyYWJiaW5nOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gY3Vyc29yKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbHVlcyQxID0geyBmbGV4OiB0cnVlLCAnaW5saW5lLWZsZXgnOiB0cnVlIH07XG5cbiAgZnVuY3Rpb24gZmxleChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXMkMVt2YWx1ZV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6IFsnLXdlYmtpdC1ib3gnLCAnLW1vei1ib3gnLCAnLW1zLScgKyB2YWx1ZSArICdib3gnLCAnLXdlYmtpdC0nICsgdmFsdWUsIHZhbHVlXVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICBtYXhIZWlnaHQ6IHRydWUsXG4gICAgbWF4V2lkdGg6IHRydWUsXG4gICAgd2lkdGg6IHRydWUsXG4gICAgaGVpZ2h0OiB0cnVlLFxuICAgIGNvbHVtbldpZHRoOiB0cnVlLFxuICAgIG1pbldpZHRoOiB0cnVlLFxuICAgIG1pbkhlaWdodDogdHJ1ZVxuICB9O1xuICB2YXIgdmFsdWVzJDIgPSB7XG4gICAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAgICdmaWxsLWF2YWlsYWJsZSc6IHRydWUsXG4gICAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gc2l6aW5nKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSAmJiB2YWx1ZXMkMlt2YWx1ZV0pIHtcbiAgICAgIHJldHVybiBqb2luUHJlZml4ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB2YWx1ZXMkMyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC87XG5cbiAgZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkgJiYgdmFsdWUubWF0Y2godmFsdWVzJDMpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gam9pblByZWZpeGVkVmFsdWUocHJvcGVydHksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5kZXggPSBfX2NvbW1vbmpzKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nO1xuICAgIHZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG4gICAgdmFyIGNhY2hlID0ge307XG5cbiAgICBmdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nIGluIGNhY2hlID8gY2FjaGVbc3RyaW5nXSA6IGNhY2hlW3N0cmluZ10gPSBzdHJpbmcucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQmJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcbiAgfSk7XG5cbiAgdmFyIGh5cGhlbmF0ZVN0eWxlTmFtZSA9IGluZGV4ICYmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGluZGV4KSkgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBpbmRleCA/IGluZGV4WydkZWZhdWx0J10gOiBpbmRleDtcblxuICB2YXIgcHJvcGVydGllcyQxID0ge1xuICAgIHRyYW5zaXRpb246IHRydWUsXG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICAgIFdlYmtpdFRyYW5zaXRpb246IHRydWUsXG4gICAgV2Via2l0VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAvLyBhbHNvIGNoZWNrIGZvciBhbHJlYWR5IHByZWZpeGVkIHRyYW5zaXRpb25zXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcHJvcGVydGllcyQxW3Byb3BlcnR5XSkge1xuICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICB2YXIgb3V0cHV0VmFsdWUgPSBwcmVmaXhWYWx1ZSh2YWx1ZSk7XG4gICAgICB2YXIgd2Via2l0T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWF0Y2goLy1tb3otfC1tcy0vKSA9PT0gbnVsbDtcbiAgICAgIH0pLmpvaW4oJywnKTtcblxuICAgICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdXZWJraXQnKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCB3ZWJraXRPdXRwdXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlZjIgPSB7fSwgYmFiZWxIZWxwZXJzLmRlZmluZVByb3BlcnR5KF9yZWYyLCAnV2Via2l0JyArIGNhcGl0YWxpemVTdHJpbmcocHJvcGVydHkpLCB3ZWJraXRPdXRwdXQpLCBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoX3JlZjIsIHByb3BlcnR5LCBvdXRwdXRWYWx1ZSksIF9yZWYyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKGlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IHNwbGl0IG11bHRpIHZhbHVlcywgbm90IGN1YmljIGJlemllcnNcbiAgICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAgIC8vIGl0ZXJhdGUgZWFjaCBzaW5nbGUgdmFsdWUgYW5kIGNoZWNrIGZvciB0cmFuc2l0aW9uZWQgcHJvcGVydGllc1xuICAgIC8vIHRoYXQgbmVlZCB0byBiZSBwcmVmaXhlZCBhcyB3ZWxsXG4gICAgbXVsdGlwbGVWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgbXVsdGlwbGVWYWx1ZXNbaW5kZXhdID0gT2JqZWN0LmtleXMocHJlZml4UHJvcHMpLnJlZHVjZShmdW5jdGlvbiAob3V0LCBwcmVmaXgpIHtcbiAgICAgICAgdmFyIGRhc2hDYXNlUHJlZml4ID0gJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG5cbiAgICAgICAgT2JqZWN0LmtleXMocHJlZml4UHJvcHNbcHJlZml4XSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgIHZhciBkYXNoQ2FzZVByb3BlcnR5ID0gaHlwaGVuYXRlU3R5bGVOYW1lKHByb3ApO1xuXG4gICAgICAgICAgaWYgKHZhbC5pbmRleE9mKGRhc2hDYXNlUHJvcGVydHkpID4gLTEgJiYgZGFzaENhc2VQcm9wZXJ0eSAhPT0gJ29yZGVyJykge1xuICAgICAgICAgICAgLy8gam9pbiBhbGwgcHJlZml4ZXMgYW5kIGNyZWF0ZSBhIG5ldyB2YWx1ZVxuICAgICAgICAgICAgb3V0ID0gdmFsLnJlcGxhY2UoZGFzaENhc2VQcm9wZXJ0eSwgZGFzaENhc2VQcmVmaXggKyBkYXNoQ2FzZVByb3BlcnR5KSArICcsJyArIG91dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgfSwgdmFsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJyk7XG4gIH1cblxuICB2YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICAgJ3NwYWNlLWFyb3VuZCc6ICdkaXN0cmlidXRlJyxcbiAgICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICAgJ2ZsZXgtZW5kJzogJ2VuZCdcbiAgfTtcbiAgdmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gICAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICAgIGFsaWduU2VsZjogJ21zRmxleEl0ZW1BbGlnbicsXG4gICAgYWxpZ25JdGVtczogJ21zRmxleEFsaWduJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICAgIG9yZGVyOiAnbXNGbGV4T3JkZXInLFxuICAgIGZsZXhHcm93OiAnbXNGbGV4UG9zaXRpdmUnLFxuICAgIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gICAgZmxleEJhc2lzOiAnbXNQcmVmZXJyZWRTaXplJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZsZXhib3hJRShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhbHRlcm5hdGl2ZVZhbHVlcyQxID0ge1xuICAgICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAgICdmbGV4LWVuZCc6ICdlbmQnLFxuICAgICd3cmFwLXJldmVyc2UnOiAnbXVsdGlwbGUnLFxuICAgIHdyYXA6ICdtdWx0aXBsZSdcbiAgfTtcblxuICB2YXIgYWx0ZXJuYXRpdmVQcm9wcyQxID0ge1xuICAgIGFsaWduSXRlbXM6ICdXZWJraXRCb3hBbGlnbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZsZXhib3hPbGQocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSAnZmxleERpcmVjdGlvbicgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgV2Via2l0Qm94T3JpZW50OiB2YWx1ZS5pbmRleE9mKCdjb2x1bW4nKSA+IC0xID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgICAgV2Via2l0Qm94RGlyZWN0aW9uOiB2YWx1ZS5pbmRleE9mKCdyZXZlcnNlJykgPiAtMSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wcyQxW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wcyQxW3Byb3BlcnR5XSwgYWx0ZXJuYXRpdmVWYWx1ZXMkMVt2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwbHVnaW5zID0gW3Bvc2l0aW9uLCBjYWxjLCBjdXJzb3IsIHNpemluZywgZ3JhZGllbnQsIHRyYW5zaXRpb24sIGZsZXhib3hJRSwgZmxleGJveE9sZCwgZmxleF07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvYmplY3QgdXNpbmcgYWxsIHZlbmRvciBwcmVmaXhlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIC0gU3R5bGUgb2JqZWN0IHRoYXQgZ2V0cyBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFkZGVkXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAqL1xuICBmdW5jdGlvbiBwcmVmaXhBbGwoc3R5bGVzKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gcmVjdXJzZSB0aHJvdWdoIG5lc3RlZCBzdHlsZSBvYmplY3RzXG4gICAgICAgIHN0eWxlc1twcm9wZXJ0eV0gPSBwcmVmaXhBbGwodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJlZml4UHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gcHJlZml4UHJvcHNbcHJlZml4XTtcbiAgICAgICAgICAvLyBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICAgICAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgICAgICAgICBzdHlsZXNbcHJlZml4ICsgY2FwaXRhbGl6ZVN0cmluZyhwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIFtdLmNvbmNhdChzdHlsZXNbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgLy8gcmVzb2x2ZSBldmVyeSBzcGVjaWFsIHBsdWdpbnNcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICByZXR1cm4gYXNzaWduU3R5bGVzKHN0eWxlcywgcGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvcnRQcmVmaXhlZFN0eWxlKHN0eWxlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NpZ25TdHlsZXMoYmFzZSkge1xuICAgIHZhciBleHRlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoZXh0ZW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgdmFyIGJhc2VWYWx1ZSA9IGJhc2VbcHJvcGVydHldO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZVZhbHVlKSkge1xuICAgICAgICBbXS5jb25jYXQoZXh0ZW5kW3Byb3BlcnR5XSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IGJhc2VWYWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICBpZiAodmFsdWVJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBiYXNlW3Byb3BlcnR5XS5zcGxpY2UodmFsdWVJbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJhc2VbcHJvcGVydHldLnB1c2godmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2VbcHJvcGVydHldID0gZXh0ZW5kW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwcmVmaXhBbGw7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QbHVnaW5TZXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5mYWxsYmFja3MgPSBmYWxsYmFja3M7XG5leHBvcnRzLnByZWZpeGVzID0gcHJlZml4ZXM7XG5cbnZhciBfQ1NTUHJvcGVydHlPcGVyYXRpb25zID0gcmVxdWlyZSgnLi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMnKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGlzRGV2ID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHggPT09ICdkZXZlbG9wbWVudCcgfHwgIXg7XG59KHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcblxudmFyIFBsdWdpblNldCA9IGV4cG9ydHMuUGx1Z2luU2V0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQbHVnaW5TZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsdWdpblNldCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW5pdGlhbCA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgaW5pdGlhbFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLmZucyA9IGluaXRpYWwgfHwgW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGx1Z2luU2V0LCBbe1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgZm5zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICBpZiAoX3RoaXMuZm5zLmluZGV4T2YoZm4pID49IDApIHtcbiAgICAgICAgICBpZiAoaXNEZXYpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYWRkaW5nIHRoZSBzYW1lIHBsdWdpbiBhZ2FpbiwgaWdub3JpbmcnKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZm5zID0gW2ZuXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmZucykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZm4pIHtcbiAgICAgIHRoaXMuZm5zID0gdGhpcy5mbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSBmbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzLmZucyA9IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RyYW5zZm9ybScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zZm9ybShvKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbnMucmVkdWNlKGZ1bmN0aW9uIChvLCBmbikge1xuICAgICAgICByZXR1cm4gZm4obyk7XG4gICAgICB9LCBvKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGx1Z2luU2V0O1xufSgpO1xuXG5mdW5jdGlvbiBmYWxsYmFja3Mobm9kZSkge1xuICB2YXIgaGFzQXJyYXkgPSBPYmplY3Qua2V5cyhub2RlLnN0eWxlKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShub2RlLnN0eWxlW3hdKTtcbiAgfSkuaW5kZXhPZih0cnVlKSA+PSAwO1xuICBpZiAoaGFzQXJyYXkpIHtcbiAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGUsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBbJ3N0eWxlJ10pO1xuXG4gICAgICB2YXIgZmxhdHRlbmVkID0gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAobywga2V5KSB7XG4gICAgICAgIG9ba2V5XSA9IEFycmF5LmlzQXJyYXkoc3R5bGVba2V5XSkgPyBzdHlsZVtrZXldLmpvaW4oJzsgJyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLnByb2Nlc3NTdHlsZU5hbWUpKGtleSkgKyAnOiAnKSA6IHN0eWxlW2tleV07XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSwge30pO1xuICAgICAgLy8gdG9kbyAtIFxuICAgICAgLy8gZmxhdHRlbiBhcnJheXMgd2hpY2ggaGF2ZW4ndCBiZWVuIGZsYXR0ZW5lZCB5ZXQgXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBfZXh0ZW5kcyh7IHN0eWxlOiBmbGF0dGVuZWQgfSwgcmVzdClcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgcHJlZml4QWxsID0gcmVxdWlyZSgnLi9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9pbmRleC5qcycpO1xuXG5mdW5jdGlvbiBwcmVmaXhlcyhfcmVmKSB7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnc3R5bGUnXSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHsgc3R5bGU6IHByZWZpeEFsbChzdHlsZSkgfSwgcmVzdCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvcGx1Z2lucy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TdHlsZVNoZWV0ID0gU3R5bGVTaGVldDtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbi8qIFxuXG5oaWdoIHBlcmZvcm1hbmNlIFN0eWxlU2hlZXQgZm9yIGNzcy1pbi1qcyBzeXN0ZW1zIFxuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXMgXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuLSAncG9seWZpbGxzJyBvbiBzZXJ2ZXIgc2lkZSBcblxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgU3R5bGVTaGVldCBmcm9tICdnbGFtb3IvbGliL3NoZWV0J1xubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCgpXG5cbnN0eWxlU2hlZXQuaW5qZWN0KCkgXG4tICdpbmplY3RzJyB0aGUgc3R5bGVzaGVldCBpbnRvIHRoZSBwYWdlIChvciBpbnRvIG1lbW9yeSBpZiBvbiBzZXJ2ZXIpXG5cbnN0eWxlU2hlZXQuaW5zZXJ0KCcjYm94IHsgYm9yZGVyOiAxcHggc29saWQgcmVkOyB9JykgXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0IFxuXG5zdHlsZVNoZWV0LmZsdXNoKCkgXG4tIGVtcHRpZXMgdGhlIHN0eWxlc2hlZXQgb2YgYWxsIGl0cyBjb250ZW50c1xuXG5cbiovXG5cbmZ1bmN0aW9uIGxhc3QoYXJyKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH1cblxuICAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94IFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbnZhciBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8ICFwcm9jZXNzLmVudi5OT0RFX0VOVjsgLy8oeCA9PiAoeCA9PT0gJ2RldmVsb3BtZW50JykgfHwgIXgpKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxudmFyIGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7XG5cbnZhciBvbGRJRSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgbHQgSUUgMTBdPjxpPjwvaT48IVtlbmRpZl0tLT4nO1xuICAgIHJldHVybiBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2knKS5sZW5ndGggPT09IDE7XG4gIH1cbn0oKTtcblxuZnVuY3Rpb24gbWFrZVN0eWxlVGFnKCkge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSkuYXBwZW5kQ2hpbGQodGFnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxuZnVuY3Rpb24gU3R5bGVTaGVldCgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgX3JlZiRzcGVlZHkgPSBfcmVmLnNwZWVkeSxcbiAgICAgIHNwZWVkeSA9IF9yZWYkc3BlZWR5ID09PSB1bmRlZmluZWQgPyAhaXNEZXYgJiYgIWlzVGVzdCA6IF9yZWYkc3BlZWR5LFxuICAgICAgX3JlZiRtYXhMZW5ndGggPSBfcmVmLm1heExlbmd0aCxcbiAgICAgIG1heExlbmd0aCA9IF9yZWYkbWF4TGVuZ3RoID09PSB1bmRlZmluZWQgPyBpc0Jyb3dzZXIgJiYgb2xkSUUgPyA0MDAwIDogNjUwMDAgOiBfcmVmJG1heExlbmd0aDtcblxuICB0aGlzLmlzU3BlZWR5ID0gc3BlZWR5OyAvLyB0aGUgYmlnIGRyYXdiYWNrIGhlcmUgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG4gIHRoaXMuc2hlZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMudGFncyA9IFtdO1xuICB0aGlzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgdGhpcy5jdHIgPSAwO1xufVxuXG5PYmplY3QuYXNzaWduKFN0eWxlU2hlZXQucHJvdG90eXBlLCB7XG4gIGdldFNoZWV0OiBmdW5jdGlvbiBnZXRTaGVldCgpIHtcbiAgICByZXR1cm4gc2hlZXRGb3JUYWcobGFzdCh0aGlzLnRhZ3MpKTtcbiAgfSxcbiAgaW5qZWN0OiBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLmluamVjdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FscmVhZHkgaW5qZWN0ZWQgc3R5bGVzaGVldCEnKTtcbiAgICB9XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy50YWdzWzBdID0gbWFrZVN0eWxlVGFnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlcnZlciBzaWRlICdwb2x5ZmlsbCcuIGp1c3QgZW5vdWdoIGJlaGF2aW9yIHRvIGJlIHVzZWZ1bC5cbiAgICAgIHRoaXMuc2hlZXQgPSB7XG4gICAgICAgIGNzc1J1bGVzOiBbXSxcbiAgICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlKSB7XG4gICAgICAgICAgLy8gZW5vdWdoICdzcGVjIGNvbXBsaWFuY2UnIHRvIGJlIGFibGUgdG8gZXh0cmFjdCB0aGUgcnVsZXMgbGF0ZXIgIFxuICAgICAgICAgIC8vIGluIG90aGVyIHdvcmRzLCBqdXN0IHRoZSBjc3NUZXh0IGZpZWxkIFxuICAgICAgICAgIF90aGlzLnNoZWV0LmNzc1J1bGVzLnB1c2goeyBjc3NUZXh0OiBydWxlIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmluamVjdGVkID0gdHJ1ZTtcbiAgfSxcbiAgc3BlZWR5OiBmdW5jdGlvbiBzcGVlZHkoYm9vbCkge1xuICAgIGlmICh0aGlzLmN0ciAhPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgY2hhbmdlIHNwZWVkeSBtb2RlIGFmdGVyIGluc2VydGluZyBhbnkgcnVsZSB0byBzaGVldC4gRWl0aGVyIGNhbGwgc3BlZWR5KCcgKyBib29sICsgJykgZWFybGllciBpbiB5b3VyIGFwcCwgb3IgY2FsbCBmbHVzaCgpIGJlZm9yZSBzcGVlZHkoJyArIGJvb2wgKyAnKScpO1xuICAgIH1cbiAgICB0aGlzLmlzU3BlZWR5ID0gISFib29sO1xuICB9LFxuICBfaW5zZXJ0OiBmdW5jdGlvbiBfaW5zZXJ0KHJ1bGUpIHtcbiAgICAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1ZyBcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuICAgIHRyeSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLmdldFNoZWV0KCk7XG4gICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7IC8vIHRvZG8gLSBjb3JyZWN0IGluZGV4IGhlcmUgICAgIFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChpc0Rldikge1xuICAgICAgICAvLyBtaWdodCBuZWVkIGJldGVyIGR4IGZvciB0aGlzIFxuICAgICAgICBjb25zb2xlLndhcm4oJ3dob29wcywgaWxsZWdhbCBydWxlIGluc2VydGVkJywgcnVsZSk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAvLyB0aGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzIFxuICAgICAgaWYgKHRoaXMuaXNTcGVlZHkgJiYgdGhpcy5nZXRTaGVldCgpLmluc2VydFJ1bGUpIHtcbiAgICAgICAgdGhpcy5faW5zZXJ0KHJ1bGUpO1xuICAgICAgfVxuICAgICAgLy8gbW9yZSBicm93c2VyIHdlaXJkbmVzcy4gSSBkb24ndCBldmVuIGtub3cgICAgXG4gICAgICAvLyBlbHNlIGlmKHRoaXMudGFncy5sZW5ndGggPiAwICYmIHRoaXMudGFnczo6bGFzdCgpLnN0eWxlU2hlZXQpIHsgICAgICBcbiAgICAgIC8vICAgdGhpcy50YWdzOjpsYXN0KCkuc3R5bGVTaGVldC5jc3NUZXh0Kz0gcnVsZVxuICAgICAgLy8gfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgbGFzdCh0aGlzLnRhZ3MpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXJ2ZXIgc2lkZSBpcyBwcmV0dHkgc2ltcGxlICAgICAgICAgXG4gICAgICB0aGlzLnNoZWV0Lmluc2VydFJ1bGUocnVsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgICBpZiAoaXNCcm93c2VyICYmIHRoaXMuY3RyICUgdGhpcy5tYXhMZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudGFncy5wdXNoKG1ha2VTdHlsZVRhZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3RyIC0gMTtcbiAgfSxcblxuICAvLyBjb21tZW50aW5nIHRoaXMgb3V0IHRpbGwgd2UgZGVjaWRlIG9uIHYzJ3MgZGVjaXNpb24gXG4gIC8vIF9yZXBsYWNlKGluZGV4LCBydWxlKSB7XG4gIC8vICAgLy8gdGhpcyB3ZWlyZG5lc3MgZm9yIHBlcmYsIGFuZCBjaHJvbWUncyB3ZWlyZCBidWcgXG4gIC8vICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAwMDc5OTIvY2hyb21lLXN1ZGRlbmx5LXN0b3BwZWQtYWNjZXB0aW5nLWluc2VydHJ1bGVcbiAgLy8gICB0cnkgeyAgXG4gIC8vICAgICBsZXQgc2hlZXQgPSB0aGlzLmdldFNoZWV0KCkgICAgICAgIFxuICAvLyAgICAgc2hlZXQuZGVsZXRlUnVsZShpbmRleCkgLy8gdG9kbyAtIGNvcnJlY3QgaW5kZXggaGVyZSAgICAgXG4gIC8vICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KVxuICAvLyAgIH1cbiAgLy8gICBjYXRjaChlKSB7XG4gIC8vICAgICBpZihpc0Rldikge1xuICAvLyAgICAgICAvLyBtaWdodCBuZWVkIGJldGVyIGR4IGZvciB0aGlzIFxuICAvLyAgICAgICBjb25zb2xlLndhcm4oJ3dob29wcywgcHJvYmxlbSByZXBsYWNpbmcgcnVsZScsIHJ1bGUpIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIC8vICAgICB9ICAgICAgICAgIFxuICAvLyAgIH0gICAgICAgICAgXG5cbiAgLy8gfVxuICAvLyByZXBsYWNlKGluZGV4LCBydWxlKSB7XG4gIC8vICAgaWYoaXNCcm93c2VyKSB7XG4gIC8vICAgICBpZih0aGlzLmlzU3BlZWR5ICYmIHRoaXMuZ2V0U2hlZXQoKS5pbnNlcnRSdWxlKSB7XG4gIC8vICAgICAgIHRoaXMuX3JlcGxhY2UoaW5kZXgsIHJ1bGUpXG4gIC8vICAgICB9XG4gIC8vICAgICBlbHNlIHtcbiAgLy8gICAgICAgbGV0IF9zbG90ID0gTWF0aC5mbG9vcigoaW5kZXggICsgdGhpcy5tYXhMZW5ndGgpIC8gdGhpcy5tYXhMZW5ndGgpIC0gMSAgICAgICAgXG4gIC8vICAgICAgIGxldCBfaW5kZXggPSAoaW5kZXggJSB0aGlzLm1heExlbmd0aCkgKyAxXG4gIC8vICAgICAgIGxldCB0YWcgPSB0aGlzLnRhZ3NbX3Nsb3RdXG4gIC8vICAgICAgIHRhZy5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSksIHRhZy5jaGlsZE5vZGVzW19pbmRleF0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIGVsc2Uge1xuICAvLyAgICAgbGV0IHJ1bGVzID0gdGhpcy5zaGVldC5jc3NSdWxlc1xuICAvLyAgICAgdGhpcy5zaGVldC5jc3NSdWxlcyA9IFsgLi4ucnVsZXMuc2xpY2UoMCwgaW5kZXgpLCB7IGNzc1RleHQ6IHJ1bGUgfSwgLi4ucnVsZXMuc2xpY2UoaW5kZXggKyAxKSBdXG4gIC8vICAgfVxuICAvLyB9XG4gIGRlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZShpbmRleCkge1xuICAgIC8vIHdlIGluc2VydCBhIGJsYW5rIHJ1bGUgd2hlbiAnZGVsZXRpbmcnIHNvIHByZXZpb3VzbHkgcmV0dXJuZWQgaW5kZXhlcyByZW1haW4gc3RhYmxlXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShpbmRleCwgJycpO1xuICB9LFxuICBmbHVzaDogZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50YWdzID0gW107XG4gICAgICB0aGlzLnNoZWV0ID0gbnVsbDtcbiAgICAgIHRoaXMuY3RyID0gMDtcbiAgICAgIC8vIHRvZG8gLSBsb29rIGZvciByZW1uYW50cyBpbiBkb2N1bWVudC5zdHlsZVNoZWV0c1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW1wbGVyIG9uIHNlcnZlciBcbiAgICAgIHRoaXMuc2hlZXQuY3NzUnVsZXMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5pbmplY3RlZCA9IGZhbHNlO1xuICB9LFxuICBydWxlczogZnVuY3Rpb24gcnVsZXMoKSB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNoZWV0LmNzc1J1bGVzO1xuICAgIH1cbiAgICB2YXIgYXJyID0gW107XG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UuYXBwbHkoYXJyLCBbYXJyLmxlbmd0aCwgMF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShBcnJheS5mcm9tKHNoZWV0Rm9yVGFnKHRhZykuY3NzUnVsZXMpKSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL3NoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgWG1sRW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL3htbC1lbnRpdGllcy5qcycpLFxuICBIdG1sNEVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi9odG1sNC1lbnRpdGllcy5qcycpLFxuICBIdG1sNUVudGl0aWVzOiByZXF1aXJlKCcuL2xpYi9odG1sNS1lbnRpdGllcy5qcycpLFxuICBBbGxIdG1sRW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw1LWVudGl0aWVzLmpzJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1lbnRpdGllcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIEhUTUxfQUxQSEEgPSBbJ2Fwb3MnLCAnbmJzcCcsICdpZXhjbCcsICdjZW50JywgJ3BvdW5kJywgJ2N1cnJlbicsICd5ZW4nLCAnYnJ2YmFyJywgJ3NlY3QnLCAndW1sJywgJ2NvcHknLCAnb3JkZicsICdsYXF1bycsICdub3QnLCAnc2h5JywgJ3JlZycsICdtYWNyJywgJ2RlZycsICdwbHVzbW4nLCAnc3VwMicsICdzdXAzJywgJ2FjdXRlJywgJ21pY3JvJywgJ3BhcmEnLCAnbWlkZG90JywgJ2NlZGlsJywgJ3N1cDEnLCAnb3JkbScsICdyYXF1bycsICdmcmFjMTQnLCAnZnJhYzEyJywgJ2ZyYWMzNCcsICdpcXVlc3QnLCAnQWdyYXZlJywgJ0FhY3V0ZScsICdBY2lyYycsICdBdGlsZGUnLCAnQXVtbCcsICdBcmluZycsICdBZWxpZycsICdDY2VkaWwnLCAnRWdyYXZlJywgJ0VhY3V0ZScsICdFY2lyYycsICdFdW1sJywgJ0lncmF2ZScsICdJYWN1dGUnLCAnSWNpcmMnLCAnSXVtbCcsICdFVEgnLCAnTnRpbGRlJywgJ09ncmF2ZScsICdPYWN1dGUnLCAnT2NpcmMnLCAnT3RpbGRlJywgJ091bWwnLCAndGltZXMnLCAnT3NsYXNoJywgJ1VncmF2ZScsICdVYWN1dGUnLCAnVWNpcmMnLCAnVXVtbCcsICdZYWN1dGUnLCAnVEhPUk4nLCAnc3psaWcnLCAnYWdyYXZlJywgJ2FhY3V0ZScsICdhY2lyYycsICdhdGlsZGUnLCAnYXVtbCcsICdhcmluZycsICdhZWxpZycsICdjY2VkaWwnLCAnZWdyYXZlJywgJ2VhY3V0ZScsICdlY2lyYycsICdldW1sJywgJ2lncmF2ZScsICdpYWN1dGUnLCAnaWNpcmMnLCAnaXVtbCcsICdldGgnLCAnbnRpbGRlJywgJ29ncmF2ZScsICdvYWN1dGUnLCAnb2NpcmMnLCAnb3RpbGRlJywgJ291bWwnLCAnZGl2aWRlJywgJ09zbGFzaCcsICd1Z3JhdmUnLCAndWFjdXRlJywgJ3VjaXJjJywgJ3V1bWwnLCAneWFjdXRlJywgJ3Rob3JuJywgJ3l1bWwnLCAncXVvdCcsICdhbXAnLCAnbHQnLCAnZ3QnLCAnb2VsaWcnLCAnb2VsaWcnLCAnc2Nhcm9uJywgJ3NjYXJvbicsICd5dW1sJywgJ2NpcmMnLCAndGlsZGUnLCAnZW5zcCcsICdlbXNwJywgJ3RoaW5zcCcsICd6d25qJywgJ3p3aicsICdscm0nLCAncmxtJywgJ25kYXNoJywgJ21kYXNoJywgJ2xzcXVvJywgJ3JzcXVvJywgJ3NicXVvJywgJ2xkcXVvJywgJ3JkcXVvJywgJ2JkcXVvJywgJ2RhZ2dlcicsICdkYWdnZXInLCAncGVybWlsJywgJ2xzYXF1bycsICdyc2FxdW8nLCAnZXVybycsICdmbm9mJywgJ2FscGhhJywgJ2JldGEnLCAnZ2FtbWEnLCAnZGVsdGEnLCAnZXBzaWxvbicsICd6ZXRhJywgJ2V0YScsICd0aGV0YScsICdpb3RhJywgJ2thcHBhJywgJ2xhbWJkYScsICdtdScsICdudScsICd4aScsICdvbWljcm9uJywgJ3BpJywgJ3JobycsICdzaWdtYScsICd0YXUnLCAndXBzaWxvbicsICdwaGknLCAnY2hpJywgJ3BzaScsICdvbWVnYScsICdhbHBoYScsICdiZXRhJywgJ2dhbW1hJywgJ2RlbHRhJywgJ2Vwc2lsb24nLCAnemV0YScsICdldGEnLCAndGhldGEnLCAnaW90YScsICdrYXBwYScsICdsYW1iZGEnLCAnbXUnLCAnbnUnLCAneGknLCAnb21pY3JvbicsICdwaScsICdyaG8nLCAnc2lnbWFmJywgJ3NpZ21hJywgJ3RhdScsICd1cHNpbG9uJywgJ3BoaScsICdjaGknLCAncHNpJywgJ29tZWdhJywgJ3RoZXRhc3ltJywgJ3Vwc2loJywgJ3BpdicsICdidWxsJywgJ2hlbGxpcCcsICdwcmltZScsICdwcmltZScsICdvbGluZScsICdmcmFzbCcsICd3ZWllcnAnLCAnaW1hZ2UnLCAncmVhbCcsICd0cmFkZScsICdhbGVmc3ltJywgJ2xhcnInLCAndWFycicsICdyYXJyJywgJ2RhcnInLCAnaGFycicsICdjcmFycicsICdsYXJyJywgJ3VhcnInLCAncmFycicsICdkYXJyJywgJ2hhcnInLCAnZm9yYWxsJywgJ3BhcnQnLCAnZXhpc3QnLCAnZW1wdHknLCAnbmFibGEnLCAnaXNpbicsICdub3RpbicsICduaScsICdwcm9kJywgJ3N1bScsICdtaW51cycsICdsb3dhc3QnLCAncmFkaWMnLCAncHJvcCcsICdpbmZpbicsICdhbmcnLCAnYW5kJywgJ29yJywgJ2NhcCcsICdjdXAnLCAnaW50JywgJ3RoZXJlNCcsICdzaW0nLCAnY29uZycsICdhc3ltcCcsICduZScsICdlcXVpdicsICdsZScsICdnZScsICdzdWInLCAnc3VwJywgJ25zdWInLCAnc3ViZScsICdzdXBlJywgJ29wbHVzJywgJ290aW1lcycsICdwZXJwJywgJ3Nkb3QnLCAnbGNlaWwnLCAncmNlaWwnLCAnbGZsb29yJywgJ3JmbG9vcicsICdsYW5nJywgJ3JhbmcnLCAnbG96JywgJ3NwYWRlcycsICdjbHVicycsICdoZWFydHMnLCAnZGlhbXMnXTtcbnZhciBIVE1MX0NPREVTID0gWzM5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLCAxNzIsIDE3MywgMTc0LCAxNzUsIDE3NiwgMTc3LCAxNzgsIDE3OSwgMTgwLCAxODEsIDE4MiwgMTgzLCAxODQsIDE4NSwgMTg2LCAxODcsIDE4OCwgMTg5LCAxOTAsIDE5MSwgMTkyLCAxOTMsIDE5NCwgMTk1LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAxLCAyMDIsIDIwMywgMjA0LCAyMDUsIDIwNiwgMjA3LCAyMDgsIDIwOSwgMjEwLCAyMTEsIDIxMiwgMjEzLCAyMTQsIDIxNSwgMjE2LCAyMTcsIDIxOCwgMjE5LCAyMjAsIDIyMSwgMjIyLCAyMjMsIDIyNCwgMjI1LCAyMjYsIDIyNywgMjI4LCAyMjksIDIzMCwgMjMxLCAyMzIsIDIzMywgMjM0LCAyMzUsIDIzNiwgMjM3LCAyMzgsIDIzOSwgMjQwLCAyNDEsIDI0MiwgMjQzLCAyNDQsIDI0NSwgMjQ2LCAyNDcsIDI0OCwgMjQ5LCAyNTAsIDI1MSwgMjUyLCAyNTMsIDI1NCwgMjU1LCAzNCwgMzgsIDYwLCA2MiwgMzM4LCAzMzksIDM1MiwgMzUzLCAzNzYsIDcxMCwgNzMyLCA4MTk0LCA4MTk1LCA4MjAxLCA4MjA0LCA4MjA1LCA4MjA2LCA4MjA3LCA4MjExLCA4MjEyLCA4MjE2LCA4MjE3LCA4MjE4LCA4MjIwLCA4MjIxLCA4MjIyLCA4MjI0LCA4MjI1LCA4MjQwLCA4MjQ5LCA4MjUwLCA4MzY0LCA0MDIsIDkxMywgOTE0LCA5MTUsIDkxNiwgOTE3LCA5MTgsIDkxOSwgOTIwLCA5MjEsIDkyMiwgOTIzLCA5MjQsIDkyNSwgOTI2LCA5MjcsIDkyOCwgOTI5LCA5MzEsIDkzMiwgOTMzLCA5MzQsIDkzNSwgOTM2LCA5MzcsIDk0NSwgOTQ2LCA5NDcsIDk0OCwgOTQ5LCA5NTAsIDk1MSwgOTUyLCA5NTMsIDk1NCwgOTU1LCA5NTYsIDk1NywgOTU4LCA5NTksIDk2MCwgOTYxLCA5NjIsIDk2MywgOTY0LCA5NjUsIDk2NiwgOTY3LCA5NjgsIDk2OSwgOTc3LCA5NzgsIDk4MiwgODIyNiwgODIzMCwgODI0MiwgODI0MywgODI1NCwgODI2MCwgODQ3MiwgODQ2NSwgODQ3NiwgODQ4MiwgODUwMSwgODU5MiwgODU5MywgODU5NCwgODU5NSwgODU5NiwgODYyOSwgODY1NiwgODY1NywgODY1OCwgODY1OSwgODY2MCwgODcwNCwgODcwNiwgODcwNywgODcwOSwgODcxMSwgODcxMiwgODcxMywgODcxNSwgODcxOSwgODcyMSwgODcyMiwgODcyNywgODczMCwgODczMywgODczNCwgODczNiwgODc0MywgODc0NCwgODc0NSwgODc0NiwgODc0NywgODc1NiwgODc2NCwgODc3MywgODc3NiwgODgwMCwgODgwMSwgODgwNCwgODgwNSwgODgzNCwgODgzNSwgODgzNiwgODgzOCwgODgzOSwgODg1MywgODg1NSwgODg2OSwgODkwMSwgODk2OCwgODk2OSwgODk3MCwgODk3MSwgOTAwMSwgOTAwMiwgOTY3NCwgOTgyNCwgOTgyNywgOTgyOSwgOTgzMF07XG5cbnZhciBhbHBoYUluZGV4ID0ge307XG52YXIgbnVtSW5kZXggPSB7fTtcblxudmFyIGkgPSAwO1xudmFyIGxlbmd0aCA9IEhUTUxfQUxQSEEubGVuZ3RoO1xud2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICB2YXIgYSA9IEhUTUxfQUxQSEFbaV07XG4gICAgdmFyIGMgPSBIVE1MX0NPREVTW2ldO1xuICAgIGFscGhhSW5kZXhbYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgIG51bUluZGV4W2NdID0gYTtcbiAgICBpKys7XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw0RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hyO1xuICAgICAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZW50aXR5LmNoYXJBdCgxKS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMiksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmICghKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSkge1xuICAgICAgICAgICAgICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNociB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmRlY29kZShzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYWxwaGEgPSBudW1JbmRleFtzdHIuY2hhckNvZGVBdChpKV07XG4gICAgICAgIHJlc3VsdCArPSBhbHBoYSA/IFwiJlwiICsgYWxwaGEgKyBcIjtcIiA6IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBhbHBoYSA9IG51bUluZGV4W2NjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGNjIDwgMzIgfHwgY2MgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiYjXCIgKyBjYyArIFwiO1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5lbmNvZGVOb25BU0NJSShzdHIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNEVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgQUxQSEFfSU5ERVggPSB7XG4gICAgJyZsdCc6ICc8JyxcbiAgICAnJmd0JzogJz4nLFxuICAgICcmcXVvdCc6ICdcIicsXG4gICAgJyZhcG9zJzogJ1xcJycsXG4gICAgJyZhbXAnOiAnJicsXG4gICAgJyZsdDsnOiAnPCcsXG4gICAgJyZndDsnOiAnPicsXG4gICAgJyZxdW90Oyc6ICdcIicsXG4gICAgJyZhcG9zOyc6ICdcXCcnLFxuICAgICcmYW1wOyc6ICcmJ1xufTtcblxudmFyIENIQVJfSU5ERVggPSB7XG4gICAgNjA6ICdsdCcsXG4gICAgNjI6ICdndCcsXG4gICAgMzQ6ICdxdW90JyxcbiAgICAzOTogJ2Fwb3MnLFxuICAgIDM4OiAnYW1wJ1xufTtcblxudmFyIENIQVJfU19JTkRFWCA9IHtcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAnXFwnJzogJyZhcG9zOycsXG4gICAgJyYnOiAnJmFtcDsnXG59O1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBYbWxFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC88fD58XCJ8J3wmL2csIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIENIQVJfU19JTkRFWFtzXTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiM/WzAtOWEtekEtWl0rOz8vZywgZnVuY3Rpb24ocykge1xuICAgICAgICBpZiAocy5jaGFyQXQoMSkgPT09ICcjJykge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBzLmNoYXJBdCgyKS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KHMuc3Vic3RyKDMpLCAxNikgOlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KHMuc3Vic3RyKDIpKTtcblxuICAgICAgICAgICAgaWYgKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFMUEhBX0lOREVYW3NdIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZGVjb2RlKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gQ0hBUl9JTkRFWFtjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ2h0ID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmdodCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhtbEVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL3htbC1lbnRpdGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheScpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ29uc3VtYWJsZUFycmF5Mik7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcicpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbnZhciBfY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZSA9IHJlcXVpcmUoJ3dlYnBhY2staG90LW1pZGRsZXdhcmUvY2xpZW50P292ZXJsYXk9ZmFsc2UmcmVsb2FkPXRydWUnKTtcblxudmFyIF9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsaWVudE92ZXJsYXlGYWxzZVJlbG9hZFRydWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGFuZGxlcnMgPSB7XG4gIHJlbG9hZDogZnVuY3Rpb24gcmVsb2FkKHJvdXRlKSB7XG4gICAgaWYgKHJvdXRlID09PSAnL19lcnJvcicpIHtcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KSgoMCwgX2tleXMyLmRlZmF1bHQpKG5leHQucm91dGVyLmNvbXBvbmVudHMpKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciByID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgdmFyIENvbXBvbmVudCA9IG5leHQucm91dGVyLmNvbXBvbmVudHNbcl0uQ29tcG9uZW50O1xuXG4gICAgICAgICAgaWYgKENvbXBvbmVudC5fX3JvdXRlID09PSAnL19lcnJvci1kZWJ1ZycpIHtcbiAgICAgICAgICAgIC8vIHJlbG9hZCBhbGwgJy9fZXJyb3ItZGVidWcnXG4gICAgICAgICAgICAvLyB3aGljaCBhcmUgZXhwZWN0ZWQgdG8gYmUgZXJyb3JzIG9mICcvX2Vycm9yJyByb3V0ZXNcbiAgICAgICAgICAgIG5leHQucm91dGVyLnJlbG9hZChyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5yb3V0ZXIucmVsb2FkKHJvdXRlKTtcbiAgfSxcbiAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2Uocm91dGUpIHtcbiAgICB2YXIgX3JlZiA9IG5leHQucm91dGVyLmNvbXBvbmVudHNbcm91dGVdIHx8IHt9LFxuICAgICAgICBDb21wb25lbnQgPSBfcmVmLkNvbXBvbmVudDtcblxuICAgIGlmIChDb21wb25lbnQgJiYgQ29tcG9uZW50Ll9fcm91dGUgPT09ICcvX2Vycm9yLWRlYnVnJykge1xuICAgICAgLy8gcmVsb2FkIHRvIHJlY292ZXIgZnJvbSBydW50aW1lIGVycm9yc1xuICAgICAgbmV4dC5yb3V0ZXIucmVsb2FkKHJvdXRlKTtcbiAgICB9XG4gIH1cbn07IC8qIGdsb2JhbCBuZXh0ICovXG5cblxuX2NsaWVudE92ZXJsYXlGYWxzZVJlbG9hZFRydWUyLmRlZmF1bHQuc3Vic2NyaWJlKGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGZuID0gaGFuZGxlcnNbb2JqLmFjdGlvbl07XG4gIGlmIChmbikge1xuICAgIHZhciBkYXRhID0gb2JqLmRhdGEgfHwgW107XG4gICAgZm4uYXBwbHkodW5kZWZpbmVkLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5My5kZWZhdWx0KShkYXRhKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGFjdGlvbiAnICsgb2JqLmFjdGlvbik7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZXh0L2Rpc3QvY2xpZW50L3dlYnBhY2staG90LW1pZGRsZXdhcmUtY2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdGl0bGU6ICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiAgUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBIZWFkQmxvYyA9IChwcm9wcykgPT5cbiAgPEhlYWQ+XG4gICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbn0gLz5cbiAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nZ3VpbGxhdW1lLCBrb2xseSwgZnJvbnRlbmQsIGJhY2tlbmQsIGZ1bGwgc3RhY2ssIGRldmVsb3Blciwgd2ViLCBqYXZhc2NyaXB0LCByZWFjdEpTLCBNZXRlb3IsIEpzLCBOZXh0SlMsIFdlYnBhY2snIC8+XG4gICAgPG1ldGEgbmFtZT0nY29weXJpZ2h0JyBjb250ZW50PSdHdWlsbGF1bWUgS29sbHknIC8+XG4gIDwvSGVhZD5cblxuY3NzLmdsb2JhbCgnaHRtbCwgYm9keScsICB7XG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gIGJvcmRlcjogJzAnLFxuICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gIGxpbmVIZWlnaHQ6ICcxLjE1JyxcbiAgZm9udFNpemU6ICcxZW0nLFxuICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgdGV4dFNoYWRvdzogJzAnLFxuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICBNb3pPc3hGb250U21vb3RoaW5nOiAnZ3JheXNjYWxlJyxcbn0pXG5cbkhlYWRCbG9jLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgSGVhZEJsb2NcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG52YXIgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBzdHIucmVwbGFjZShhbnNpUmVnZXgsICcnKSA6IHN0cjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RyaXAtYW5zaS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLyplc2xpbnQtZW52IGJyb3dzZXIqL1xuXG52YXIgY2xpZW50T3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudmFyIHN0eWxlcyA9IHtcbiAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC44NSknLFxuICBjb2xvcjogJyNFOEU4RTgnLFxuICBsaW5lSGVpZ2h0OiAnMS4yJyxcbiAgd2hpdGVTcGFjZTogJ3ByZScsXG4gIGZvbnRGYW1pbHk6ICdNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZScsXG4gIGZvbnRTaXplOiAnMTNweCcsXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB6SW5kZXg6IDk5OTksXG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IDAsXG4gIHRvcDogMCxcbiAgYm90dG9tOiAwLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxuICBkaXI6ICdsdHInXG59O1xuZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICBjbGllbnRPdmVybGF5LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbn1cblxudmFyIGFuc2lIVE1MID0gcmVxdWlyZSgnYW5zaS1odG1sJyk7XG52YXIgY29sb3JzID0ge1xuICByZXNldDogWyd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCddLFxuICBibGFjazogJzE4MTgxOCcsXG4gIHJlZDogJ0UzNjA0OScsXG4gIGdyZWVuOiAnQjNDQjc0JyxcbiAgeWVsbG93OiAnRkZEMDgwJyxcbiAgYmx1ZTogJzdDQUZDMicsXG4gIG1hZ2VudGE6ICc3RkFDQ0EnLFxuICBjeWFuOiAnQzNDMkVGJyxcbiAgbGlnaHRncmV5OiAnRUJFN0UzJyxcbiAgZGFya2dyZXk6ICc2RDc4OTEnXG59O1xuYW5zaUhUTUwuc2V0Q29sb3JzKGNvbG9ycyk7XG5cbnZhciBFbnRpdGllcyA9IHJlcXVpcmUoJ2h0bWwtZW50aXRpZXMnKS5BbGxIdG1sRW50aXRpZXM7XG52YXIgZW50aXRpZXMgPSBuZXcgRW50aXRpZXMoKTtcblxuZXhwb3J0cy5zaG93UHJvYmxlbXMgPVxuZnVuY3Rpb24gc2hvd1Byb2JsZW1zKHR5cGUsIGxpbmVzKSB7XG4gIGNsaWVudE92ZXJsYXkuaW5uZXJIVE1MID0gJyc7XG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obXNnKSB7XG4gICAgbXNnID0gYW5zaUhUTUwoZW50aXRpZXMuZW5jb2RlKG1zZykpO1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc3R5bGUubWFyZ2luQm90dG9tID0gJzI2cHgnO1xuICAgIGRpdi5pbm5lckhUTUwgPSBwcm9ibGVtVHlwZSh0eXBlKSArICcgaW4gJyArIG1zZztcbiAgICBjbGllbnRPdmVybGF5LmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xpZW50T3ZlcmxheSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuY2xlYXIgPVxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGlmIChkb2N1bWVudC5ib2R5ICYmIGNsaWVudE92ZXJsYXkucGFyZW50Tm9kZSkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xpZW50T3ZlcmxheSk7XG4gIH1cbn07XG5cbnZhciBwcm9ibGVtQ29sb3JzID0ge1xuICBlcnJvcnM6IGNvbG9ycy5yZWQsXG4gIHdhcm5pbmdzOiBjb2xvcnMueWVsbG93XG59O1xuXG5mdW5jdGlvbiBwcm9ibGVtVHlwZSAodHlwZSkge1xuICB2YXIgY29sb3IgPSBwcm9ibGVtQ29sb3JzW3R5cGVdIHx8IGNvbG9ycy5yZWQ7XG4gIHJldHVybiAoXG4gICAgJzxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojJyArIGNvbG9yICsgJzsgY29sb3I6I2ZmZjsgcGFkZGluZzoycHggNHB4OyBib3JkZXItcmFkaXVzOiAycHhcIj4nICtcbiAgICAgIHR5cGUuc2xpY2UoMCwgLTEpLnRvVXBwZXJDYXNlKCkgK1xuICAgICc8L3NwYW4+J1xuICApO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC1vdmVybGF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG4vKmdsb2JhbCBfX3Jlc291cmNlUXVlcnkgX193ZWJwYWNrX3B1YmxpY19wYXRoX18qL1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgcGF0aDogXCIvX193ZWJwYWNrX2htclwiLFxuICB0aW1lb3V0OiAyMCAqIDEwMDAsXG4gIG92ZXJsYXk6IHRydWUsXG4gIHJlbG9hZDogZmFsc2UsXG4gIGxvZzogdHJ1ZSxcbiAgd2FybjogdHJ1ZVxufTtcbmlmIChfX3Jlc291cmNlUXVlcnkpIHtcbiAgdmFyIHF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcbiAgdmFyIG92ZXJyaWRlcyA9IHF1ZXJ5c3RyaW5nLnBhcnNlKF9fcmVzb3VyY2VRdWVyeS5zbGljZSgxKSk7XG4gIGlmIChvdmVycmlkZXMucGF0aCkgb3B0aW9ucy5wYXRoID0gb3ZlcnJpZGVzLnBhdGg7XG4gIGlmIChvdmVycmlkZXMudGltZW91dCkgb3B0aW9ucy50aW1lb3V0ID0gb3ZlcnJpZGVzLnRpbWVvdXQ7XG4gIGlmIChvdmVycmlkZXMub3ZlcmxheSkgb3B0aW9ucy5vdmVybGF5ID0gb3ZlcnJpZGVzLm92ZXJsYXkgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMucmVsb2FkKSBvcHRpb25zLnJlbG9hZCA9IG92ZXJyaWRlcy5yZWxvYWQgIT09ICdmYWxzZSc7XG4gIGlmIChvdmVycmlkZXMubm9JbmZvICYmIG92ZXJyaWRlcy5ub0luZm8gIT09ICdmYWxzZScpIHtcbiAgICBvcHRpb25zLmxvZyA9IGZhbHNlO1xuICB9XG4gIGlmIChvdmVycmlkZXMucXVpZXQgJiYgb3ZlcnJpZGVzLnF1aWV0ICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgICBvcHRpb25zLndhcm4gPSBmYWxzZTtcbiAgfVxuICBpZiAob3ZlcnJpZGVzLmR5bmFtaWNQdWJsaWNQYXRoKSB7XG4gICAgb3B0aW9ucy5wYXRoID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBvcHRpb25zLnBhdGg7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5FdmVudFNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgIFwid2VicGFjay1ob3QtbWlkZGxld2FyZSdzIGNsaWVudCByZXF1aXJlcyBFdmVudFNvdXJjZSB0byB3b3JrLiBcIiArXG4gICAgXCJZb3Ugc2hvdWxkIGluY2x1ZGUgYSBwb2x5ZmlsbCBpZiB5b3Ugd2FudCB0byBzdXBwb3J0IHRoaXMgYnJvd3NlcjogXCIgK1xuICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZlci1zZW50X2V2ZW50cyNUb29sc1wiXG4gICk7XG59IGVsc2Uge1xuICBjb25uZWN0KHdpbmRvdy5FdmVudFNvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3QoRXZlbnRTb3VyY2UpIHtcbiAgdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO1xuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcblxuICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lO1xuICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZTtcbiAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0O1xuXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSkgPiBvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgIGhhbmRsZURpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKFwiW0hNUl0gY29ubmVjdGVkXCIpO1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBcIlxcdUQ4M0RcXHVEQzkzXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3NNZXNzYWdlKEpTT04ucGFyc2UoZXZlbnQuZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgSE1SIG1lc3NhZ2U6IFwiICsgZXZlbnQuZGF0YSArIFwiXFxuXCIgKyBleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICBzb3VyY2UuY2xvc2UoKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjb25uZWN0KEV2ZW50U291cmNlKTsgfSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgfVxuXG59XG5cbnZhciByZXBvcnRlcjtcbi8vIHRoZSByZXBvcnRlciBuZWVkcyB0byBiZSBhIHNpbmdsZXRvbiBvbiB0aGUgcGFnZVxuLy8gaW4gY2FzZSB0aGUgY2xpZW50IGlzIGJlaW5nIHVzZWQgYnkgbXV0bGlwbGUgYnVuZGxlc1xuLy8gd2Ugb25seSB3YW50IHRvIHJlcG9ydCBvbmNlLlxuLy8gYWxsIHRoZSBlcnJvcnMgd2lsbCBnbyB0byBhbGwgY2xpZW50c1xudmFyIHNpbmdsZXRvbktleSA9ICdfX3dlYnBhY2tfaG90X21pZGRsZXdhcmVfcmVwb3J0ZXJfXyc7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvd1tzaW5nbGV0b25LZXldKSB7XG4gIHJlcG9ydGVyID0gd2luZG93W3NpbmdsZXRvbktleV0gPSBjcmVhdGVSZXBvcnRlcigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXBvcnRlcigpIHtcbiAgdmFyIHN0cmlwID0gcmVxdWlyZSgnc3RyaXAtYW5zaScpO1xuXG4gIHZhciBvdmVybGF5O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLm92ZXJsYXkpIHtcbiAgICBvdmVybGF5ID0gcmVxdWlyZSgnLi9jbGllbnQtb3ZlcmxheScpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9ibGVtczogZnVuY3Rpb24odHlwZSwgb2JqKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIGJ1bmRsZSBoYXMgXCIgKyB0eXBlICsgXCI6XCIpO1xuICAgICAgICBvYmpbdHlwZV0uZm9yRWFjaChmdW5jdGlvbihtc2cpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBcIiArIHN0cmlwKG1zZykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVybGF5ICYmIHR5cGUgIT09ICd3YXJuaW5ncycpIG92ZXJsYXkuc2hvd1Byb2JsZW1zKHR5cGUsIG9ialt0eXBlXSk7XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsZWFyKCk7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbihjdXN0b21PdmVybGF5KSB7XG4gICAgICBvdmVybGF5ID0gY3VzdG9tT3ZlcmxheTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBwcm9jZXNzVXBkYXRlID0gcmVxdWlyZSgnLi9wcm9jZXNzLXVwZGF0ZScpO1xuXG52YXIgY3VzdG9tSGFuZGxlcjtcbnZhciBzdWJzY3JpYmVBbGxIYW5kbGVyO1xuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2Uob2JqKSB7XG4gIHN3aXRjaChvYmouYWN0aW9uKSB7XG4gICAgY2FzZSBcImJ1aWxkaW5nXCI6XG4gICAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKFwiW0hNUl0gYnVuZGxlIHJlYnVpbGRpbmdcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYnVpbHRcIjpcbiAgICAgIGlmIChvcHRpb25zLmxvZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIltITVJdIGJ1bmRsZSBcIiArIChvYmoubmFtZSA/IG9iai5uYW1lICsgXCIgXCIgOiBcIlwiKSArXG4gICAgICAgICAgXCJyZWJ1aWx0IGluIFwiICsgb2JqLnRpbWUgKyBcIm1zXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgIGNhc2UgXCJzeW5jXCI6XG4gICAgICBpZiAob2JqLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIucHJvYmxlbXMoJ2Vycm9ycycsIG9iaik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVwb3J0ZXIpIHtcbiAgICAgICAgICBpZiAob2JqLndhcm5pbmdzLmxlbmd0aCA+IDApIHJlcG9ydGVyLnByb2JsZW1zKCd3YXJuaW5ncycsIG9iaik7XG4gICAgICAgICAgcmVwb3J0ZXIuc3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NVcGRhdGUob2JqLmhhc2gsIG9iai5tb2R1bGVzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoY3VzdG9tSGFuZGxlcikge1xuICAgICAgICBjdXN0b21IYW5kbGVyKG9iaik7XG4gICAgICB9XG4gIH1cblxuICBpZiAoc3Vic2NyaWJlQWxsSGFuZGxlcikge1xuICAgIHN1YnNjcmliZUFsbEhhbmRsZXIob2JqKTtcbiAgfVxufVxuXG5pZiAobW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN1YnNjcmliZUFsbDogZnVuY3Rpb24gc3Vic2NyaWJlQWxsKGhhbmRsZXIpIHtcbiAgICAgIHN1YnNjcmliZUFsbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlcikge1xuICAgICAgY3VzdG9tSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbiB1c2VDdXN0b21PdmVybGF5KGN1c3RvbU92ZXJsYXkpIHtcbiAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIudXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KTtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LmpzP292ZXJsYXk9ZmFsc2UmcmVsb2FkPXRydWVcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8qKlxuICogQmFzZWQgaGVhdmlseSBvbiBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2Jsb2IvXG4gKiAgYzBhZmRmOWM2YWJjMWRkNzA3MDdjNTk0ZTQ3MzgwMmE1NjZmN2I2ZS9ob3Qvb25seS1kZXYtc2VydmVyLmpzXG4gKiBPcmlnaW5hbCBjb3B5cmlnaHQgVG9iaWFzIEtvcHBlcnMgQHNva3JhIChNSVQgbGljZW5zZSlcbiAqL1xuXG4vKiBnbG9iYWwgd2luZG93IF9fd2VicGFja19oYXNoX18gKi9cblxuaWYgKCFtb2R1bGUuaG90KSB7XG4gIHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuXG52YXIgaG1yRG9jc1VybCA9IFwiaHR0cDovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudC13aXRoLXdlYnBhY2suaHRtbFwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cblxudmFyIGxhc3RIYXNoO1xudmFyIGZhaWx1cmVTdGF0dXNlcyA9IHsgYWJvcnQ6IDEsIGZhaWw6IDEgfTtcbnZhciBhcHBseU9wdGlvbnMgPSB7IGlnbm9yZVVuYWNjZXB0ZWQ6IHRydWUgfTtcblxuZnVuY3Rpb24gdXBUb0RhdGUoaGFzaCkge1xuICBpZiAoaGFzaCkgbGFzdEhhc2ggPSBoYXNoO1xuICByZXR1cm4gbGFzdEhhc2ggPT0gX193ZWJwYWNrX2hhc2hfXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihoYXNoLCBtb2R1bGVNYXAsIG9wdGlvbnMpIHtcbiAgdmFyIHJlbG9hZCA9IG9wdGlvbnMucmVsb2FkO1xuICBpZiAoIXVwVG9EYXRlKGhhc2gpICYmIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT0gXCJpZGxlXCIpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKFwiW0hNUl0gQ2hlY2tpbmcgZm9yIHVwZGF0ZXMgb24gdGhlIHNlcnZlci4uLlwiKTtcbiAgICBjaGVjaygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oZXJyLCB1cGRhdGVkTW9kdWxlcykge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGhhbmRsZUVycm9yKGVycik7XG5cbiAgICAgIGlmKCF1cGRhdGVkTW9kdWxlcykge1xuICAgICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gQ2Fubm90IGZpbmQgdXBkYXRlIChGdWxsIHJlbG9hZCBuZWVkZWQpXCIpO1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIChQcm9iYWJseSBiZWNhdXNlIG9mIHJlc3RhcnRpbmcgdGhlIHNlcnZlcilcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGVyZm9ybVJlbG9hZCgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGFwcGx5Q2FsbGJhY2sgPSBmdW5jdGlvbihhcHBseUVyciwgcmVuZXdlZE1vZHVsZXMpIHtcbiAgICAgICAgaWYgKGFwcGx5RXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoYXBwbHlFcnIpO1xuXG4gICAgICAgIGlmICghdXBUb0RhdGUoKSkgY2hlY2soKTtcblxuICAgICAgICBsb2dVcGRhdGVzKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYXBwbHlSZXN1bHQgPSBtb2R1bGUuaG90LmFwcGx5KGFwcGx5T3B0aW9ucywgYXBwbHlDYWxsYmFjayk7XG4gICAgICAvLyB3ZWJwYWNrIDIgcHJvbWlzZVxuICAgICAgaWYgKGFwcGx5UmVzdWx0ICYmIGFwcGx5UmVzdWx0LnRoZW4pIHtcbiAgICAgICAgLy8gSG90TW9kdWxlUmVwbGFjZW1lbnQucnVudGltZS5qcyByZWZlcnMgdG8gdGhlIHJlc3VsdCBhcyBgb3V0ZGF0ZWRNb2R1bGVzYFxuICAgICAgICBhcHBseVJlc3VsdC50aGVuKGZ1bmN0aW9uKG91dGRhdGVkTW9kdWxlcykge1xuICAgICAgICAgIGFwcGx5Q2FsbGJhY2sobnVsbCwgb3V0ZGF0ZWRNb2R1bGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFwcGx5UmVzdWx0LmNhdGNoKGFwcGx5Q2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgfTtcblxuICAgIHZhciByZXN1bHQgPSBtb2R1bGUuaG90LmNoZWNrKGZhbHNlLCBjYik7XG4gICAgLy8gd2VicGFjayAyIHByb21pc2VcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG4gICAgICAgIHJlc3VsdC50aGVuKGZ1bmN0aW9uKHVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgICAgICBjYihudWxsLCB1cGRhdGVkTW9kdWxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQuY2F0Y2goY2IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ1VwZGF0ZXModXBkYXRlZE1vZHVsZXMsIHJlbmV3ZWRNb2R1bGVzKSB7XG4gICAgdmFyIHVuYWNjZXB0ZWRNb2R1bGVzID0gdXBkYXRlZE1vZHVsZXMuZmlsdGVyKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICByZXR1cm4gcmVuZXdlZE1vZHVsZXMgJiYgcmVuZXdlZE1vZHVsZXMuaW5kZXhPZihtb2R1bGVJZCkgPCAwO1xuICAgIH0pO1xuXG4gICAgaWYodW5hY2NlcHRlZE1vZHVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJbSE1SXSBUaGUgZm9sbG93aW5nIG1vZHVsZXMgY291bGRuJ3QgYmUgaG90IHVwZGF0ZWQ6IFwiICtcbiAgICAgICAgICBcIihGdWxsIHJlbG9hZCBuZWVkZWQpXFxuXCIgK1xuICAgICAgICAgIFwiVGhpcyBpcyB1c3VhbGx5IGJlY2F1c2UgdGhlIG1vZHVsZXMgd2hpY2ggaGF2ZSBjaGFuZ2VkIFwiICtcbiAgICAgICAgICBcIihhbmQgdGhlaXIgcGFyZW50cykgZG8gbm90IGtub3cgaG93IHRvIGhvdCByZWxvYWQgdGhlbXNlbHZlcy4gXCIgK1xuICAgICAgICAgIFwiU2VlIFwiICsgaG1yRG9jc1VybCArIFwiIGZvciBtb3JlIGRldGFpbHMuXCJcbiAgICAgICAgKTtcbiAgICAgICAgdW5hY2NlcHRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltITVJdICAtIFwiICsgbW9kdWxlTWFwW21vZHVsZUlkXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGVyZm9ybVJlbG9hZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmxvZykge1xuICAgICAgaWYoIXJlbmV3ZWRNb2R1bGVzIHx8IHJlbmV3ZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuICAgICAgICByZW5ld2VkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSAgLSBcIiArIG1vZHVsZU1hcFttb2R1bGVJZF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVwVG9EYXRlKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBBcHAgaXMgdXAgdG8gZGF0ZS5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgaW4gZmFpbHVyZVN0YXR1c2VzKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIENhbm5vdCBjaGVjayBmb3IgdXBkYXRlIChGdWxsIHJlbG9hZCBuZWVkZWQpXCIpO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBcIiArIGVyci5zdGFjayB8fCBlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltITVJdIFVwZGF0ZSBjaGVjayBmYWlsZWQ6IFwiICsgZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtUmVsb2FkKCkge1xuICAgIGlmIChyZWxvYWQpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIGNvbnNvbGUud2FybihcIltITVJdIFJlbG9hZGluZyBwYWdlXCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9wcm9jZXNzLXVwZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcblxuaW1wb3J0IHBhcnRpY2xlcyBmcm9tICcuLi9kYXRhL3BhcnRpY2xlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbEJhY2tncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHBhcnRpY2xlczogcGFydGljbGVzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgfX0gPlxuICAgICAgICA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17cGFydGljbGVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kLmpzIiwiY29uc3QgcGFydGljbGVzID0ge1xuICBwYXJ0aWNsZXM6IHtcbiAgICAgIG51bWJlcjoge1xuICAgICAgICB2YWx1ZTogODAsXG4gICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogXCIjMDAwXCJcbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIHZhbHVlOiAwLjUsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDQwLFxuICAgICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICAgIHdpZHRoOiAxXG4gICAgICB9LFxuICAgICAgbW92ZToge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA2LFxuICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxuICAgICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgICBhdHRyYWN0OiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICByb3RhdGVYOiA2MDAsXG4gICAgICAgICAgcm90YXRlWTogMTIwMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXG4gICAgICBldmVudHM6IHtcbiAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtb2RlOiBcInJlcHVsc2VcIlxuICAgICAgfSxcbiAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtb2RlOiBcInB1c2hcIlxuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgIH0sXG4gICAgbW9kZXM6IHtcbiAgICAgIGdyYWI6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBidWJibGU6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgc2l6ZTogNDAsXG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBvcGFjaXR5OiA4LFxuICAgICAgICBzcGVlZDogM1xuICAgICAgfSxcbiAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgfSxcbiAgICAgIHB1c2g6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiA0XG4gICAgICB9LFxuICAgICAgcmVtb3ZlOiB7XG4gICAgICAgIHBhcnRpY2xlc19uYjogMlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmV0aW5hX2RldGVjdDogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJ0aWNsZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kYXRhL3BhcnRpY2xlcy5qcyIsIiFmdW5jdGlvbihlLCB0KSB7XG4gICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IHQocmVxdWlyZShcInJlYWN0XCIpKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcInJlYWN0XCIgXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0cy5QYXJ0aWNsZXMgPSB0KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBlLlBhcnRpY2xlcyA9IHQoZS5SZWFjdCk7XG59KHRoaXMsIGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBmdW5jdGlvbiB0KGkpIHtcbiAgICAgICAgICAgIGlmIChhW2ldKSByZXR1cm4gYVtpXS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIHIgPSBhW2ldID0ge1xuICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgIGlkOiBpLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogITFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZVtpXS5jYWxsKHIuZXhwb3J0cywgciwgci5leHBvcnRzLCB0KSwgci5sb2FkZWQgPSAhMCwgci5leHBvcnRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhID0ge307XG4gICAgICAgIHJldHVybiB0Lm0gPSBlLCB0LmMgPSBhLCB0LnAgPSBcIlwiLCB0KDApO1xuICAgIH0oWyBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGkgPSBhKDMpO1xuICAgICAgICB0LlBhcnRpY2xlcyA9IGkuZGVmYXVsdCwgdC5kZWZhdWx0ID0gaS5kZWZhdWx0O1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgYSBpbiBlKSB0Lmhhc093blByb3BlcnR5KGEpIHx8ICh0W2FdID0gZVthXSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIGkoYSgxMSkpLCBpKGEoOSkpO1xuICAgICAgICB2YXIgciA9IGEoNCk7XG4gICAgICAgIHQuSW50ZXJhY3QgPSByLmRlZmF1bHQ7XG4gICAgICAgIHZhciBzID0gYSg1KTtcbiAgICAgICAgdC5Nb2RlcyA9IHMuZGVmYXVsdDtcbiAgICAgICAgdmFyIG4gPSBhKDYpO1xuICAgICAgICB0LlBhcnRpY2xlID0gbi5kZWZhdWx0O1xuICAgICAgICB2YXIgbyA9IGEoNyk7XG4gICAgICAgIHQuUGFydGljbGVNYW5hZ2VyID0gby5kZWZhdWx0O1xuICAgICAgICB2YXIgYyA9IGEoOCk7XG4gICAgICAgIHQuUGFydGljbGVzTGlicmFyeSA9IGMuZGVmYXVsdDtcbiAgICAgICAgdmFyIGwgPSBhKDEwKTtcbiAgICAgICAgdC5WZW5kb3JzID0gbC5kZWZhdWx0O1xuICAgIH0sIGZ1bmN0aW9uKHQsIGEpIHtcbiAgICAgICAgdC5leHBvcnRzID0gZTtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghZSkgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuICF0IHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ID8gZSA6IHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIG51bGwgIT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHQpO1xuICAgICAgICAgICAgZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQgJiYgdC5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCB0ICYmIChPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZSwgdCkgOiBlLl9fcHJvdG9fXyA9IHQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbyA9IGEoMiksIGMgPSBhKDIpLCBsID0gYSgxKSwgdSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHQoZSkge1xuICAgICAgICAgICAgICAgIGkodGhpcywgdCk7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSByKHRoaXMsICh0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcywgZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBjYW52YXM6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgbGlicmFyeTogdm9pZCAwXG4gICAgICAgICAgICAgICAgfSwgYS5sb2FkQ2FudmFzID0gYS5sb2FkQ2FudmFzLmJpbmQoYSksIGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcyh0LCBlKSwgbih0LCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saWJyYXJ5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxvYWRDYW52YXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGUgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXM6IGVcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnN0YXRlLmxpYnJhcnkubG9hZENhbnZhcyh0LnN0YXRlLmNhbnZhcyksIHQuc3RhdGUubGlicmFyeS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxNb3VudFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaWJyYXJ5OiBuZXcgbC5QYXJ0aWNsZXNMaWJyYXJ5KHRoaXMucHJvcHMucGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpYnJhcnkuZGVzdHJveSgpLCB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpYnJhcnk6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnByb3BzLCB0ID0gZS53aWR0aCwgYSA9IGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIG8uY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IHRoaXMubG9hZENhbnZhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBsLmRlZXBFeHRlbmQodGhpcy5wcm9wcy5zdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIHQ7XG4gICAgICAgIH0oYy5QdXJlQ29tcG9uZW50KTtcbiAgICAgICAgdS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICB9LCB0LmRlZmF1bHQgPSB1O1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGEoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZSh0LCBpKSB7XG4gICAgICAgICAgICAgICAgYSh0aGlzLCBlKSwgdGhpcy5wYXJhbXMgPSB0LCB0aGlzLmxpYnJhcnkgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGkoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxpbmtQYXJ0aWNsZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGUueCAtIHQueCwgaSA9IGUueSAtIHQueSwgciA9IE1hdGguc3FydChhICogYSArIGkgKiBpKSwgcyA9IHRoaXMubGlicmFyeS5jYW52YXMsIG4gPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyIDw9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSAtIHIgLyAoMSAvIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5KSAvIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lLCBsID0gYy5yLCB1ID0gYy5nLCBwID0gYy5iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY3R4LnNhdmUoKSwgcy5jdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoIFwiICsgbCArIFwiLCBcIiArIHUgKyBcIiwgXCIgKyBwICsgXCIsIFwiICsgbyArIFwiIClcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jdHgubGluZVdpZHRoID0gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLCBzLmN0eC5iZWdpblBhdGgoKSwgbi5zaGFkb3cuZW5hYmxlICYmIChzLmN0eC5zaGFkb3dCbHVyID0gbi5zaGFkb3cuYmx1ciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jdHguc2hhZG93Q29sb3IgPSBuLnNoYWRvdy5jb2xvciksIHMuY3R4Lm1vdmVUbyhlLngsIGUueSksIHMuY3R4LmxpbmVUbyh0LngsIHQueSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY3R4LnN0cm9rZSgpLCBzLmN0eC5jbG9zZVBhdGgoKSwgcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJhdHRyYWN0UGFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLnggLSB0LngsIGkgPSBlLnkgLSB0LnksIHIgPSBNYXRoLnNxcnQoYSAqIGEgKyBpICogaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyIDw9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhIC8gKDFlMyAqIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCksIG4gPSBpIC8gKDFlMyAqIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnZ4IC09IHMsIGUudnkgLT0gbiwgdC52eCArPSBzLCB0LnZ5ICs9IG47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImJvdW5jZVBhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gZS54IC0gdC54LCBpID0gZS55IC0gdC55LCByID0gTWF0aC5zcXJ0KGEgKiBhICsgaSAqIGkpLCBzID0gZS5yYWRpdXMgKyB0LnJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgciA8PSBzICYmIChlLnZ4ID0gLWUudngsIGUudnkgPSAtZS52eSwgdC52eCA9IC10LnZ4LCB0LnZ5ID0gLXQudnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIGU7XG4gICAgICAgIH0oKTtcbiAgICAgICAgdC5kZWZhdWx0ID0gcjtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHMgPSBhKDEpLCBuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQsIGEpIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLnBhcmFtcyA9IHQsIHRoaXMubGlicmFyeSA9IGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcihlLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicHVzaFBhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcy5saWJyYXJ5LCBpID0gYS5jYW52YXMsIHIgPSBhLnRtcCwgbiA9IGEubWFuYWdlcjtcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoaW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZTsgbysrKSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgcy5QYXJ0aWNsZSh0aGlzLnBhcmFtcywgdGhpcy5saWJyYXJ5LCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuY29sb3IsIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0ID8gdC5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogdCA/IHQucG9zX3kgOiBNYXRoLnJhbmRvbSgpICogaS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSkpLCBvID09IGUgLSAxICYmICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5lbmFibGUgfHwgbi5wYXJ0aWNsZXNEcmF3KCksIHIucHVzaGluZyA9ICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlbW92ZVBhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5saWJyYXJ5Lm1hbmFnZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoMCwgZSksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSB8fCB0LnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImJ1YmJsZVBhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLCBhID0gdGhpcy5saWJyYXJ5LnRtcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIHMuaXNJbkFycmF5KFwiYnViYmxlXCIsIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS54IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgciA9IGUueSAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksIG4gPSBNYXRoLnNxcnQoaSAqIGkgKyByICogciksIG8gPSAxIC0gbiAvIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlLCBjID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5vcGFjaXR5X2J1YmJsZSA9IGUub3BhY2l0eSwgZS5yYWRpdXNfYnViYmxlID0gZS5yYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPD0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobyA+PSAwICYmIFwibW91c2Vtb3ZlXCIgPT0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgIT0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUpIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID4gdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gZS5yYWRpdXMgKyB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICogbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPj0gMCAmJiAoZS5yYWRpdXNfYnViYmxlID0gbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IGUucmFkaXVzIC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSwgcCA9IGUucmFkaXVzIC0gdSAqIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID4gMCA/IGUucmFkaXVzX2J1YmJsZSA9IHAgOiBlLnJhZGl1c19idWJibGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICE9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSA+IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgKiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA+IGUub3BhY2l0eSAmJiBoIDw9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgJiYgKGUub3BhY2l0eV9idWJibGUgPSBoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gZS5vcGFjaXR5IC0gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlIC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkgKiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA8IGUub3BhY2l0eSAmJiBtID49IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgJiYgKGUub3BhY2l0eV9idWJibGUgPSBtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlbGVhdmVcIiA9PSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LnN0YXR1cyAmJiBjKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgcy5pc0luQXJyYXkoXCJidWJibGVcIiwgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSAmJiBhLmJ1YmJsZV9jbGlja2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBlLnggLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194LCBkID0gZS55IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSwgeSA9IE1hdGguc3FydCh2ICogdiArIGQgKiBkKSwgYiA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSkgLyAxZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICBiID4gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24gJiYgKGEuYnViYmxlX2R1cmF0aW9uX2VuZCA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBiID4gMiAqIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uICYmIChhLmJ1YmJsZV9jbGlja2luZyA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYnViYmxlX2R1cmF0aW9uX2VuZCA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gZnVuY3Rpb24oaSwgciwgcywgbiwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICE9IHIpIGlmIChhLmJ1YmJsZV9kdXJhdGlvbl9lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPSBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG4gLSBiICogKG4gLSBpKSAvIHQucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uLCBsID0gaSAtIGMsIHUgPSBpICsgbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiID09IG8gJiYgKGUucmFkaXVzX2J1YmJsZSA9IHUpLCBcIm9wYWNpdHlcIiA9PSBvICYmIChlLm9wYWNpdHlfYnViYmxlID0gdSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHkgPD0gdC5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwID0gdm9pZCAwICE9IHMgPyBzIDogbiwgcCAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IG4gLSBiICogKG4gLSBpKSAvIHQucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCIgPT0gbyAmJiAoZS5yYWRpdXNfYnViYmxlID0gaCksIFwib3BhY2l0eVwiID09IG8gJiYgKGUub3BhY2l0eV9idWJibGUgPSBoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBcInNpemVcIiA9PSBvICYmIChlLnJhZGl1c19idWJibGUgPSB2b2lkIDApLCBcIm9wYWNpdHlcIiA9PSBvICYmIChlLm9wYWNpdHlfYnViYmxlID0gdm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJ1YmJsZV9jbGlja2luZyAmJiAoZih0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgZS5yYWRpdXNfYnViYmxlLCBlLnJhZGl1cywgXCJzaXplXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSwgdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsIGUub3BhY2l0eV9idWJibGUsIGUub3BhY2l0eSwgXCJvcGFjaXR5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicmVwdWxzZVBhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLCBhID0gdGhpcy5saWJyYXJ5LCBpID0gYS5jYW52YXMsIHIgPSBhLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIHMuaXNJbkFycmF5KFwicmVwdWxzZVwiLCB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpICYmIFwibW91c2Vtb3ZlXCIgPT0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS54IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgbyA9IGUueSAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksIGMgPSBNYXRoLnNxcnQobiAqIG4gKyBvICogbyksIGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbiAvIGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbyAvIGNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHUgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UsIHAgPSAxMDAsIGggPSBzLmNsYW1wKDEgLyB1ICogKC0xICogTWF0aC5wb3coYyAvIHUsIDIpICsgMSkgKiB1ICogcCwgMCwgNTApLCBtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUueCArIGwueCAqIGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogZS55ICsgbC55ICogaFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm91bmNlXCIgPT0gdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPyAobS54IC0gZS5yYWRpdXMgPiAwICYmIG0ueCArIGUucmFkaXVzIDwgaS53aWR0aCAmJiAoZS54ID0gbS54KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnkgLSBlLnJhZGl1cyA+IDAgJiYgbS55ICsgZS5yYWRpdXMgPCBpLmhlaWdodCAmJiAoZS55ID0gbS55KSkgOiAoZS54ID0gbS54LCBlLnkgPSBtLnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIHMuaXNJbkFycmF5KFwicmVwdWxzZVwiLCB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSBpZiAoci5yZXB1bHNlX2ZpbmlzaCB8fCAoci5yZXB1bHNlX2NvdW50KyssIFxuICAgICAgICAgICAgICAgICAgICByLnJlcHVsc2VfY291bnQgPT0gdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAmJiAoci5yZXB1bHNlX2ZpbmlzaCA9ICEwKSksIFxuICAgICAgICAgICAgICAgICAgICByLnJlcHVsc2VfY2xpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gTWF0aC5wb3codGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlIC8gNiwgMyksIGQgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gZS54LCB5ID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIGUueSwgYiA9IGQgKiBkICsgeSAqIHksIGYgPSAtdiAvIGIgKiAxLCBfID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBNYXRoLmF0YW4yKHksIGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnZ4ID0gZiAqIE1hdGguY29zKGEpLCBlLnZ5ID0gZiAqIE1hdGguc2luKGEpLCBcImJvdW5jZVwiID09IHQucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogZS54ICsgZS52eCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUueSArIGUudnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci54ICsgZS5yYWRpdXMgPiBpLndpZHRoID8gZS52eCA9IC1lLnZ4IDogci54IC0gZS5yYWRpdXMgPCAwICYmIChlLnZ4ID0gLWUudngpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci55ICsgZS5yYWRpdXMgPiBpLmhlaWdodCA/IGUudnkgPSAtZS52eSA6IHIueSAtIGUucmFkaXVzIDwgMCAmJiAoZS52eSA9IC1lLnZ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYiA8PSB2ICYmIF8oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIDAgPT0gci5yZXB1bHNlX2NsaWNraW5nICYmIChlLnZ4ID0gZS52eF9pLCBlLnZ5ID0gZS52eV9pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImdyYWJQYXJ0aWNsZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5saWJyYXJ5LmNhbnZhcywgYSA9IHRoaXMucGFyYW1zLCBpID0gYS5pbnRlcmFjdGl2aXR5LCByID0gYS5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpLmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBcIm1vdXNlbW92ZVwiID09IGkuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGUueCAtIGkubW91c2UucG9zX3gsIG4gPSBlLnkgLSBpLm1vdXNlLnBvc195LCBvID0gTWF0aC5zcXJ0KHMgKiBzICsgbiAqIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gPD0gaS5tb2Rlcy5ncmFiLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBpLm1vZGVzLmdyYWIsIGwgPSBjLmxpbmVfbGlua2VkLm9wYWNpdHkgLSBvIC8gKDEgLyBjLmxpbmVfbGlua2VkLm9wYWNpdHkpIC8gYy5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSByLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lLCBwID0gdS5yLCBoID0gdS5nLCBtID0gdS5iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSggXCIgKyBwICsgXCIsIFwiICsgaCArIFwiLCBcIiArIG0gKyBcIiwgXCIgKyBsICsgXCIgKVwiLCB0LmN0eC5saW5lV2lkdGggPSByLmxpbmVfbGlua2VkLndpZHRoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jdHguYmVnaW5QYXRoKCksIHQuY3R4Lm1vdmVUbyhlLngsIGUueSksIHQuY3R4LmxpbmVUbyhpLm1vdXNlLnBvc194LCBpLm1vdXNlLnBvc195KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuY3R4LnN0cm9rZSgpLCB0LmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IG47XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgfSwgcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG4gPSBhKDEpLCBvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQsIGEsIHIsIHMsIG4pIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLnBhcmFtcyA9IHQsIHRoaXMubGlicmFyeSA9IGEsIHRoaXMuc2V0dXBTaXplKCksIHRoaXMuc2V0dXBQb3NpdGlvbihuKSwgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cENvbG9yKHIpLCB0aGlzLnNldHVwT3BhY2l0eSgpLCB0aGlzLnNldHVwQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcyhlLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0dXBTaXplXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9ICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlICYmICh0aGlzLnNpemVfc3RhdHVzID0gITEsIHRoaXMudnMgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkIC8gMTAwLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5zeW5jIHx8ICh0aGlzLnZzID0gdGhpcy52cyAqIE1hdGgucmFuZG9tKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwUG9zaXRpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubGlicmFyeSwgYSA9IHQuY2FudmFzLCBpID0gdC52ZW5kb3JzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBlID8gZS54IDogTWF0aC5yYW5kb20oKSAqIGEud2lkdGgsIHRoaXMueSA9IGUgPyBlLnkgOiBNYXRoLnJhbmRvbSgpICogYS5oZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBhLndpZHRoIC0gMiAqIHRoaXMucmFkaXVzID8gdGhpcy54ID0gdGhpcy54IC0gdGhpcy5yYWRpdXMgOiB0aGlzLnggPCAyICogdGhpcy5yYWRpdXMgJiYgKHRoaXMueCA9IHRoaXMueCArIHRoaXMucmFkaXVzKSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA+IGEuaGVpZ2h0IC0gMiAqIHRoaXMucmFkaXVzID8gdGhpcy55ID0gdGhpcy55IC0gdGhpcy5yYWRpdXMgOiB0aGlzLnkgPCAyICogdGhpcy5yYWRpdXMgJiYgKHRoaXMueSA9IHRoaXMueSArIHRoaXMucmFkaXVzKSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSAmJiBpLmNoZWNrT3ZlcmxhcCh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwQ29sb3JcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gbi5nZXRDb2xvcihlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwT3BhY2l0eVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUgJiYgKHRoaXMub3BhY2l0eV9zdGF0dXMgPSAhMSwgdGhpcy52byA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQgLyAxMDAsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmMgfHwgKHRoaXMudm8gPSB0aGlzLnZvICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0dXBBbmltYXRpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS50bXAsIGEgPSBlLnZlbmRvcnMsIGkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRvcC1yaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtLjVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLjVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tLWxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLS41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogLS41XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuc3RyYWlnaHQgPyAodGhpcy52eCA9IGkueCwgdGhpcy52eSA9IGkueSwgdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUucmFuZG9tICYmICh0aGlzLnZ4ID0gdGhpcy52eCAqIE1hdGgucmFuZG9tKCksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIE1hdGgucmFuZG9tKCkpKSA6ICh0aGlzLnZ4ID0gaS54ICsgTWF0aC5yYW5kb20oKSAtIC41LCB0aGlzLnZ5ID0gaS55ICsgTWF0aC5yYW5kb20oKSAtIC41KSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnhfaSA9IHRoaXMudngsIHRoaXMudnlfaSA9IHRoaXMudnk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBzID8gXCJ1bmRlZmluZWRcIiA6IHIocykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHMubGVuZ3RoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNoYXBlID0gcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiaW1hZ2VcIiA9PSB0aGlzLnNoYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogby5pbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IG8uaW1hZ2Uud2lkdGggLyBvLmltYWdlLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5pbWcucmF0aW8gfHwgKHRoaXMuaW1nLnJhdGlvID0gMSksIFwic3ZnXCIgPT0gdC5pbWdfdHlwZSAmJiB2b2lkIDAgIT0gdC5zb3VyY2Vfc3ZnICYmIChhLmNyZWF0ZVN2Z0ltZyh0aGlzKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnB1c2hpbmcgJiYgKHRoaXMuaW1nLmxvYWRlZCA9ICExKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRyYXdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLCBhID0gdGhpcy5saWJyYXJ5LCBpID0gYS5jYW52YXMsIHIgPSBhLnRtcCwgcyA9IGEudmVuZG9ycywgbiA9ICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMsIFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICBuID0gdm9pZCAwICE9IHRoaXMucmFkaXVzX2J1YmJsZSA/IHRoaXMucmFkaXVzX2J1YmJsZSA6IHRoaXMucmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgbyA9IHZvaWQgMCAhPSB0aGlzLm9wYWNpdHlfYnViYmxlID8gdGhpcy5vcGFjaXR5X2J1YmJsZSA6IHRoaXMub3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yLnJnYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB0aGlzLmNvbG9yLnJnYiwgdSA9IGwuciwgcCA9IGwuZywgaCA9IGwuYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBcInJnYmEoIFwiICsgdSArIFwiLCBcIiArIHAgKyBcIiwgXCIgKyBoICsgXCIsIFwiICsgbyArIFwiIClcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5jb2xvci5oc2wsIHYgPSBtLmgsIGQgPSBtLnMsIHkgPSBtLmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gXCJoc2xhKCBcIiArIHYgKyBcIiwgXCIgKyBkICsgXCIsIFwiICsgeSArIFwiLCBcIiArIG8gKyBcIiApXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpLmN0eC5maWxsU3R5bGUgPSBjLCBpLmN0eC5iZWdpblBhdGgoKSwgdGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgbiwgMCwgMiAqIE1hdGguUEksICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuY3R4LnJlY3QodGhpcy54IC0gbiwgdGhpcy55IC0gbiwgMiAqIG4sIDIgKiBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmRyYXdTaGFwZShpLmN0eCwgdGhpcy54IC0gbiwgdGhpcy55ICsgbiAvIDEuNjYsIDIgKiBuLCAzLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBvbHlnb25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZHJhd1NoYXBlKGkuY3R4LCB0aGlzLnggLSBuIC8gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gMy41KSwgdGhpcy55IC0gbiAvIC43NiwgMi42NiAqIG4gLyAodGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyAzKSwgdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcy5kcmF3U2hhcGUoaS5jdHgsIHRoaXMueCAtIDIgKiBuIC8gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gNCksIHRoaXMueSAtIG4gLyAxLjUyLCAyICogbiAqIDIuNjYgLyAodGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyAzKSwgdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuY3R4LmRyYXdJbWFnZShlLCB0LnggLSBuLCB0LnkgLSBuLCAyICogbiwgMiAqIG4gLyB0LmltZy5yYXRpbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBiID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IFwic3ZnXCIgPT0gci5pbWdfdHlwZSA/IHRoaXMuaW1nLm9iaiA6IHIuaW1nX29iaiwgYiAmJiBlKGIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkuY3R4LmNsb3NlUGF0aCgpLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCAmJiAoaS5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLmNvbG9yLCBcbiAgICAgICAgICAgICAgICAgICAgaS5jdHgubGluZVdpZHRoID0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aCwgaS5jdHguc3Ryb2tlKCkpLCBpLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKSwgZTtcbiAgICAgICAgfSgpO1xuICAgICAgICB0LmRlZmF1bHQgPSBvO1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcyA9IGEoMSksIG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgYSwgciwgcywgbikge1xuICAgICAgICAgICAgICAgIGkodGhpcywgZSksIHRoaXMucGFyYW1zID0gdCwgdGhpcy5pbnRlcmFjdCA9IGEsIHRoaXMubW9kZXMgPSByLCB0aGlzLnZlbmRvcnMgPSBzLCBcbiAgICAgICAgICAgICAgICB0aGlzLmxpYnJhcnkgPSBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHIoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBhcnRpY2xlc0NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcywgdCA9IGUuY29sb3IsIGEgPSBlLm9wYWNpdHksIGkgPSAwOyBpIDwgdGhpcy5wYXJhbXMucGFydGljbGVzLm51bWJlci52YWx1ZTsgaSsrKSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgcy5QYXJ0aWNsZSh0aGlzLnBhcmFtcywgdGhpcy5saWJyYXJ5LCB0LCBhLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNVcGRhdGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcywgdCA9IHRoaXMubGlicmFyeSwgYSA9IHQuY2FudmFzLCBpID0gdC5pbnRlcmFjdCwgciA9IHQubW9kZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLnNwZWVkIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnggKz0gdC52eCAqIG8sIHQueSArPSB0LnZ5ICogbztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlICYmICgxID09IHQub3BhY2l0eV9zdGF0dXMgPyAodC5vcGFjaXR5ID49IGUucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlICYmICh0Lm9wYWNpdHlfc3RhdHVzID0gITEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQub3BhY2l0eSArPSB0LnZvKSA6ICh0Lm9wYWNpdHkgPD0gZS5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5vcGFjaXR5X21pbiAmJiAodC5vcGFjaXR5X3N0YXR1cyA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm9wYWNpdHkgLT0gdC52byksIHQub3BhY2l0eSA8IDAgJiYgKHQub3BhY2l0eSA9IDApKSwgZS5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUgJiYgKDEgPT0gdC5zaXplX3N0YXR1cyA/ICh0LnJhZGl1cyA+PSBlLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSAmJiAodC5zaXplX3N0YXR1cyA9ICExKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnJhZGl1cyArPSB0LnZzKSA6ICh0LnJhZGl1cyA8PSBlLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluICYmICh0LnNpemVfc3RhdHVzID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucmFkaXVzIC09IHQudnMpLCB0LnJhZGl1cyA8IDAgJiYgKHQucmFkaXVzID0gMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGMgPSBcImJvdW5jZVwiID09IGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhfbGVmdDogdC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeF9yaWdodDogYS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5X3RvcDogdC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeV9ib3R0b206IGEuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhfbGVmdDogLXQucmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhfcmlnaHQ6IGEud2lkdGggKyB0LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5X3RvcDogLXQucmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlfYm90dG9tOiBhLmhlaWdodCArIHQucmFkaXVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0LnggLSB0LnJhZGl1cyA+IGEud2lkdGggPyAodC54ID0gYy54X2xlZnQsIHQueSA9IE1hdGgucmFuZG9tKCkgKiBhLmhlaWdodCkgOiB0LnggKyB0LnJhZGl1cyA8IDAgJiYgKHQueCA9IGMueF9yaWdodCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnkgPSBNYXRoLnJhbmRvbSgpICogYS5oZWlnaHQpLCB0LnkgLSB0LnJhZGl1cyA+IGEuaGVpZ2h0ID8gKHQueSA9IGMueV90b3AsIHQueCA9IE1hdGgucmFuZG9tKCkgKiBhLndpZHRoKSA6IHQueSArIHQucmFkaXVzIDwgMCAmJiAodC55ID0gYy55X2JvdHRvbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnggPSBNYXRoLnJhbmRvbSgpICogYS53aWR0aCksIGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3VuY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnggKyB0LnJhZGl1cyA+IGEud2lkdGggPyB0LnZ4ID0gLXQudnggOiB0LnggLSB0LnJhZGl1cyA8IDAgJiYgKHQudnggPSAtdC52eCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQueSArIHQucmFkaXVzID4gYS5oZWlnaHQgPyB0LnZ5ID0gLXQudnkgOiB0LnkgLSB0LnJhZGl1cyA8IDAgJiYgKHQudnkgPSAtdC52eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0luQXJyYXkoXCJncmFiXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgJiYgci5ncmFiUGFydGljbGUodCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKHMuaXNJbkFycmF5KFwiYnViYmxlXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgcy5pc0luQXJyYXkoXCJidWJibGVcIiwgZS5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkgJiYgci5idWJibGVQYXJ0aWNsZSh0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAocy5pc0luQXJyYXkoXCJyZXB1bHNlXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgcy5pc0luQXJyYXkoXCJyZXB1bHNlXCIsIGUucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpICYmIHIucmVwdWxzZVBhcnRpY2xlKHQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgfHwgZS5wYXJhbXMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpIGZvciAodmFyIGwgPSBuICsgMTsgbCA8IGUucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZS5wYXJhbXMucGFydGljbGVzLmFycmF5W2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgJiYgaS5saW5rUGFydGljbGVzKHQsIHUpLCBlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSAmJiBpLmF0dHJhY3RQYXJ0aWNsZXModCwgdSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSAmJiBpLmJvdW5jZVBhcnRpY2xlcyh0LCB1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNEcmF3XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUuY2FudmFzLCBhID0gZS5tYW5hZ2VyO1xuICAgICAgICAgICAgICAgICAgICB0LmN0eC5jbGVhclJlY3QoMCwgMCwgdC53aWR0aCwgdC5oZWlnaHQpLCBhLnBhcnRpY2xlc1VwZGF0ZSgpLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNFbXB0eVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJwYXJ0aWNsZXNSZWZyZXNoXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUudG1wO1xuICAgICAgICAgICAgICAgICAgICBlLnZlbmRvcnM7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuY2hlY2tBbmltRnJhbWUpLCBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmRyYXdBbmltRnJhbWUpLCB0LnNvdXJjZV9zdmcgPSB2b2lkIDAsIFxuICAgICAgICAgICAgICAgICAgICB0LmltZ19vYmogPSB2b2lkIDAsIHQuY291bnRfc3ZnID0gMCwgdGhpcy5wYXJ0aWNsZXNFbXB0eSgpLCB0aGlzLmxpYnJhcnkuY2FudmFzQ2xlYXIoKSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlicmFyeS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIGU7XG4gICAgICAgIH0oKTtcbiAgICAgICAgdC5kZWZhdWx0ID0gbjtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHMgPSBhKDEpLCBuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQpIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLnRtcCA9IHt9LCB0aGlzLnRtcCA9IHt9LCB0aGlzLmxvYWRQYXJhbWV0ZXJzKHQpLCB0aGlzLmV4dGVuZFBhcmFtcygpLCBcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0ID0gbmV3IHMuSW50ZXJhY3QodGhpcy5wYXJhbXMsIHRoaXMpLCB0aGlzLm1vZGVzID0gbmV3IHMuTW9kZXModGhpcy5wYXJhbXMsIHRoaXMpLCBcbiAgICAgICAgICAgICAgICB0aGlzLnZlbmRvcnMgPSBuZXcgcy5WZW5kb3JzKHRoaXMucGFyYW1zLCB0aGlzKSwgdGhpcy5tYW5hZ2VyID0gbmV3IHMuUGFydGljbGVNYW5hZ2VyKHRoaXMucGFyYW1zLCB0aGlzLmludGVyYWN0LCB0aGlzLm1vZGVzLCB0aGlzLnZlbmRvcnMsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHIoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxvYWRQYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBzLmdldERlZmF1bHRQYXJhbXMoKSwgYSA9IHMuZGVlcEV4dGVuZCh0LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSBhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibG9hZENhbnZhc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy52ZW5kb3JzO1xuICAgICAgICAgICAgICAgICAgICBlLmV2ZW50c0xpc3RlbmVycygpLCBlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMudG1wO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFjaExpc3RlbmVycygpLCB0aGlzLnZlbmRvcnMuZGV0YWNoTGlzdGVuZXJzKCksIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGUuZHJhd0FuaW1GcmFtZSksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0NsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXRhY2hMaXN0ZW5lcnNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXh0ZW5kUGFyYW1zXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGVuZFRtcERlZmluaXRpb24oKSwgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImV4dGVuZFRtcERlZmluaXRpb25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy50bXA7XG4gICAgICAgICAgICAgICAgICAgIGUub2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZV92YWx1ZTogdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplX2FuaW1fc3BlZWQ6IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlX3NwZWVkOiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkX2Rpc3RhbmNlOiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZF93aWR0aDogdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZV9ncmFiX2Rpc3RhbmNlOiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlX2J1YmJsZV9kaXN0YW5jZTogdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlX2J1YmJsZV9zaXplOiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJldGluYUluaXRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jYW52YXMsIHQgPSB0aGlzLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucmV0aW5hX2RldGVjdCAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgPyAoZS5weHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0LnJldGluYSA9ICEwLCBlLndpZHRoID0gZS5lbGVtZW50Lm9mZnNldFdpZHRoICogZS5weHJhdGlvLCBlLmhlaWdodCA9IGUuZWxlbWVudC5vZmZzZXRIZWlnaHQgKiBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSA9IHQub2JqLnNpemVfdmFsdWUgKiBlLnB4cmF0aW8sIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgPSB0Lm9iai5zaXplX2FuaW1fc3BlZWQgKiBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5zcGVlZCA9IHQub2JqLm1vdmVfc3BlZWQgKiBlLnB4cmF0aW8sIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSA9IHQub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlICogZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlID0gdC5vYmoubW9kZV9ncmFiX2Rpc3RhbmNlICogZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UgPSB0Lm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSAqIGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCA9IHQub2JqLmxpbmVfbGlua2VkX3dpZHRoICogZS5weHJhdGlvLCB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID0gdC5vYmoubW9kZV9idWJibGVfc2l6ZSAqIGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSA9IHQub2JqLm1vZGVfcmVwdWxzZV9kaXN0YW5jZSAqIGUucHhyYXRpbykgOiAoZS5weHJhdGlvID0gMSwgXG4gICAgICAgICAgICAgICAgICAgIHQucmV0aW5hID0gITEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2FudmFzSW5pdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgZS5jdHggPSBlLmVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2FudmFzU2l6ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgZS5lbGVtZW50LndpZHRoID0gZS53aWR0aCwgZS5lbGVtZW50LmhlaWdodCA9IGUuaGVpZ2h0LCB0aGlzLnBhcmFtcyAmJiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5yZXNpemUgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjYW52YXNQYWludFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgZS5jdHguZmlsbFJlY3QoMCwgMCwgZS53aWR0aCwgZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2FudmFzQ2xlYXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5jYW52YXM7XG4gICAgICAgICAgICAgICAgICAgIGUuY3R4LmNsZWFyUmVjdCgwLCAwLCBlLndpZHRoLCBlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJvbldpbmRvd1Jlc2l6ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcywgdCA9IHRoaXMubWFuYWdlciwgYSA9IHRoaXMudG1wLCBpID0gdGhpcy52ZW5kb3JzO1xuICAgICAgICAgICAgICAgICAgICBlLndpZHRoID0gZS5lbGVtZW50Lm9mZnNldFdpZHRoLCBlLmhlaWdodCA9IGUuZWxlbWVudC5vZmZzZXRIZWlnaHQsIGEucmV0aW5hICYmIChlLndpZHRoICo9IGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIGUuaGVpZ2h0ICo9IGUucHhyYXRpbyksIGUuZWxlbWVudC53aWR0aCA9IGUud2lkdGgsIGUuZWxlbWVudC5oZWlnaHQgPSBlLmhlaWdodCwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSB8fCAodC5wYXJ0aWNsZXNFbXB0eSgpLCB0LnBhcnRpY2xlc0NyZWF0ZSgpLCB0LnBhcnRpY2xlc0RyYXcoKSwgXG4gICAgICAgICAgICAgICAgICAgIGkuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKSksIGkuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IG47XG4gICAgfSwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIGEgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIHQuaGV4VG9SZ2IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gICAgICAgICAgICBlID0gZS5yZXBsYWNlKHQsIGZ1bmN0aW9uKGUsIHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdCArIHQgKyBhICsgYSArIGkgKyBpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgYSA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhlKTtcbiAgICAgICAgICAgIHJldHVybiBhID8ge1xuICAgICAgICAgICAgICAgIHI6IHBhcnNlSW50KGFbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICBnOiBwYXJzZUludChhWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgYjogcGFyc2VJbnQoYVszXSwgMTYpXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgfSwgdC5jbGFtcCA9IGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlLCB0KSwgYSk7XG4gICAgICAgIH0sIHQuaXNJbkFycmF5ID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuaW5kZXhPZihlKSA+IC0xO1xuICAgICAgICB9LCB0LmRlZXBFeHRlbmQgPSBmdW5jdGlvbihlLCBhKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGEpIGFbaV0gJiYgYVtpXS5jb25zdHJ1Y3RvciAmJiBhW2ldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgPyAoZVtpXSA9IGVbaV0gfHwge30sIFxuICAgICAgICAgICAgdC5kZWVwRXh0ZW5kKGVbaV0sIGFbaV0pKSA6IGVbaV0gPSBhW2ldO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH0sIHQuZ2V0Q29sb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHt9O1xuICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGUgPyBcInVuZGVmaW5lZFwiIDogYShlKSkpIGlmIChlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZS5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBpLnJnYiA9IHQuaGV4VG9SZ2Iocik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzID0gZS5yLCBuID0gZS5nLCBvID0gZS5iO1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHMgJiYgdm9pZCAwICE9PSBuICYmIHZvaWQgMCAhPT0gbykgaS5yZ2IgPSB7XG4gICAgICAgICAgICAgICAgICAgIHI6IHMsXG4gICAgICAgICAgICAgICAgICAgIGc6IG4sXG4gICAgICAgICAgICAgICAgICAgIGI6IG9cbiAgICAgICAgICAgICAgICB9OyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBlLmgsIGwgPSBlLnMsIHUgPSBlLmw7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gYyAmJiB2b2lkIDAgIT09IG4gJiYgdm9pZCAwICE9PSBvICYmIChpLmhzbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGg6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbDogdVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgXCJyYW5kb21cIiA9PSBlID8gaS5yZ2IgPSB7XG4gICAgICAgICAgICAgICAgcjogTWF0aC5mbG9vcigyNTUgKiBNYXRoLnJhbmRvbSgpKSArIDEsXG4gICAgICAgICAgICAgICAgZzogTWF0aC5mbG9vcigyNTUgKiBNYXRoLnJhbmRvbSgpKSArIDEsXG4gICAgICAgICAgICAgICAgYjogTWF0aC5mbG9vcigyNTUgKiBNYXRoLnJhbmRvbSgpKSArIDFcbiAgICAgICAgICAgIH0gOiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIChpLnJnYiA9IHQuaGV4VG9SZ2IoZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH07XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbYV07XG4gICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgZSh0LnByb3RvdHlwZSwgYSksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzID0gYSgxKSwgbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZSh0LCBhKSB7XG4gICAgICAgICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5wYXJhbXMgPSB0LCB0aGlzLmxpYnJhcnkgPSBhLCB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpLCBcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyksIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHIoZSwgWyB7XG4gICAgICAgICAgICAgICAga2V5OiBcImV2ZW50c0xpc3RlbmVyc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LCB0ID0gdGhpcy5saWJyYXJ5LmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgXCJ3aW5kb3dcIiA9PSBlLmRldGVjdF9vbiA/IGUuZWwgPSB3aW5kb3cgOiBlLmVsID0gdC5lbGVtZW50LCAoZS5ldmVudHMub25ob3Zlci5lbmFibGUgfHwgZS5ldmVudHMub25jbGljay5lbmFibGUpICYmIChlLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSksIFxuICAgICAgICAgICAgICAgICAgICBlLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlKSksIGUuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGUuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25DbGljayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXRhY2hMaXN0ZW5lcnNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eSwgdCA9IHRoaXMubGlicmFyeS50bXA7XG4gICAgICAgICAgICAgICAgICAgIGUuZWwgJiYgKChlLmV2ZW50cy5vbmhvdmVyLmVuYWJsZSB8fCBlLmV2ZW50cy5vbmNsaWNrLmVuYWJsZSkgJiYgKGUuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKSwgXG4gICAgICAgICAgICAgICAgICAgIGUuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbk1vdXNlTGVhdmUpKSwgZS5ldmVudHMub25jbGljay5lbmFibGUgJiYgZS5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrKSksIFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm9uTW91c2VNb3ZlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmxpYnJhcnksIGEgPSB0LmNhbnZhcywgaSA9IHQudG1wLCByID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eSwgcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHIuZWwgPT0gd2luZG93ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5jbGllbnRZXG4gICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLm9mZnNldFggfHwgZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5vZmZzZXRZIHx8IGUuY2xpZW50WVxuICAgICAgICAgICAgICAgICAgICB9LCByLm1vdXNlLnBvc194ID0gcy54LCByLm1vdXNlLnBvc195ID0gcy55LCBpLnJldGluYSAmJiAoci5tb3VzZS5wb3NfeCAqPSBhLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICByLm1vdXNlLnBvc195ICo9IGEucHhyYXRpbyksIHIuc3RhdHVzID0gXCJtb3VzZW1vdmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm9uTW91c2VMZWF2ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eTtcbiAgICAgICAgICAgICAgICAgICAgdC5tb3VzZS5wb3NfeCA9IG51bGwsIHQubW91c2UucG9zX3kgPSBudWxsLCB0LnN0YXR1cyA9IFwibW91c2VsZWF2ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwib25DbGlja1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLm1vZGVzLCBhID0gZS50bXAsIGkgPSB0aGlzLnBhcmFtcywgciA9IGkuaW50ZXJhY3Rpdml0eSwgcyA9IGkucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoci5tb3VzZS5jbGlja19wb3NfeCA9IHIubW91c2UucG9zX3gsIHIubW91c2UuY2xpY2tfcG9zX3kgPSByLm1vdXNlLnBvc195LCByLm1vdXNlLmNsaWNrX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgXG4gICAgICAgICAgICAgICAgICAgIHIuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSBzd2l0Y2ggKHIuZXZlbnRzLm9uY2xpY2subW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwdXNoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm1vdmUuZW5hYmxlID8gdC5wdXNoUGFydGljbGVzKHIubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHIubW91c2UpIDogMSA9PSByLm1vZGVzLnB1c2gucGFydGljbGVzX25iID8gdC5wdXNoUGFydGljbGVzKHIubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHIubW91c2UpIDogci5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA+IDEgJiYgdC5wdXNoUGFydGljbGVzKHIubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZVBhcnRpY2xlcyhyLm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYnViYmxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJ1YmJsZV9jbGlja2luZyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVwdWxzZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5yZXB1bHNlX2NsaWNraW5nID0gITAsIGEucmVwdWxzZV9jb3VudCA9IDAsIGEucmVwdWxzZV9maW5pc2ggPSAhMSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnJlcHVsc2VfY2xpY2tpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDFlMyAqIHIubW9kZXMucmVwdWxzZS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlbnNpdHlBdXRvUGFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUuY2FudmFzLCBhID0gZS5tb2RlcywgaSA9IGUudG1wLCByID0gdGhpcy5wYXJhbXMucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoci5udW1iZXIuZGVuc2l0eS5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdC5lbGVtZW50LndpZHRoICogdC5lbGVtZW50LmhlaWdodCAvIDFlMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGkucmV0aW5hICYmIChzID0gcyAvIHQucHhyYXRpbyAqIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBzICogci5udW1iZXIudmFsdWUgLyByLm51bWJlci5kZW5zaXR5LnZhbHVlX2FyZWEsIG8gPSByLmFycmF5Lmxlbmd0aCAtIG47XG4gICAgICAgICAgICAgICAgICAgICAgICBvIDwgMCA/IGEucHVzaFBhcnRpY2xlcyhNYXRoLmFicyhvKSkgOiBhLnJlbW92ZVBhcnRpY2xlcyhvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2hlY2tPdmVybGFwXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmxpYnJhcnksIGkgPSBhLmNhbnZhcywgciA9IGEudmVuZG9ycywgcyA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgcy5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gYSwgbiA9IGUueCAtIHMueCwgbyA9IGUueSAtIHMueSwgYyA9IE1hdGguc3FydChuICogbiArIG8gKiBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPD0gZS5yYWRpdXMgKyBzLnJhZGl1cyAmJiAoZS54ID0gdCA/IHQueCA6IE1hdGgucmFuZG9tKCkgKiBpLndpZHRoLCBlLnkgPSB0ID8gdC55IDogTWF0aC5yYW5kb20oKSAqIGkuaGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuY2hlY2tPdmVybGFwKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjcmVhdGVTdmdJbWdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubGlicmFyeS50bXAsIGEgPSB0LnNvdXJjZV9zdmcsIGkgPSAvIyhbMC05QS1GXXszLDZ9KS9naSwgciA9IGEucmVwbGFjZShpLCBmdW5jdGlvbih0LCBhLCBpLCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmNvbG9yLnJnYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS5jb2xvci5yZ2IsIG8gPSBuLnIsIGMgPSBuLmcsIGwgPSBuLmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IFwicmdiYSggXCIgKyBvICsgXCIsIFwiICsgYyArIFwiLCBcIiArIGwgKyBcIiwgXCIgKyBlLm9wYWNpdHkgKyBcIiApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZS5jb2xvci5oc2wsIHAgPSB1LmgsIGggPSB1LnMsIG0gPSB1Lmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IFwicmdiYSggXCIgKyBwICsgXCIsIFwiICsgaCArIFwiLCBcIiArIG0gKyBcIiwgXCIgKyBlLm9wYWNpdHkgKyBcIiApXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICAgICAgfSksIHMgPSBuZXcgQmxvYihbIHIgXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLThcIlxuICAgICAgICAgICAgICAgICAgICB9KSwgbiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LCBvID0gbi5jcmVhdGVPYmplY3RVUkwocyksIGMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW1nLm9iaiA9IGMsIGUuaW1nLmxvYWRlZCA9ICEwLCBuLnJldm9rZU9iamVjdFVSTChvKSwgdC5jb3VudF9zdmcrKztcbiAgICAgICAgICAgICAgICAgICAgfSksIGMuc3JjID0gbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS5jYW52YXMsIGEgPSBlLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5kcmF3QW5pbUZyYW1lKSwgdC5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZHJhd1NoYXBlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQsIGEsIGksIHIsIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSByICogcywgbyA9IHIgLyBzLCBjID0gMTgwICogKG8gLSAyKSAvIG8sIGwgPSBNYXRoLlBJIC0gTWF0aC5QSSAqIGMgLyAxODA7XG4gICAgICAgICAgICAgICAgICAgIGUuc2F2ZSgpLCBlLmJlZ2luUGF0aCgpLCBlLnRyYW5zbGF0ZSh0LCBhKSwgZS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgbjsgdSsrKSBlLmxpbmVUbyhpLCAwKSwgZS50cmFuc2xhdGUoaSwgMCksIGUucm90YXRlKGwpO1xuICAgICAgICAgICAgICAgICAgICBlLmZpbGwoKSwgZS5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJleHBvcnRJbWdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oZS5lbGVtZW50LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJsb2FkSW1nXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmxpYnJhcnksIGEgPSB0LnRtcCwgaSA9IHQudmVuZG9ycywgciA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuaW1nX2Vycm9yID0gdm9pZCAwLCBcIlwiICE9IHIuc2hhcGUuaW1hZ2Uuc3JjKSBpZiAoXCJzdmdcIiA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5vcGVuKFwiR0VUXCIsIHIuc2hhcGUuaW1hZ2Uuc3JjKSwgcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCA9PSBzLnJlYWR5U3RhdGUgJiYgKDIwMCA9PSBzLnN0YXR1cyA/IChhLnNvdXJjZV9zdmcgPSBlLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuY2hlY2tCZWZvcmVEcmF3KCkpIDogKGNvbnNvbGUubG9nKFwiRXJyb3IgcmVhY3QtcGFydGljbGVzLWpzIC0gaW1hZ2Ugbm90IGZvdW5kXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmltZ19lcnJvciA9ICEwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuaW1nX29iaiA9IG4sIGkuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgbi5zcmMgPSByLnNoYXBlLmltYWdlLnNyYztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKFwiRXJyb3IgcmVhY3QtcGFydGljbGVzLWpzIC0gbm8gaW1hZ2Uuc3JjXCIpLCBhLmltZ19lcnJvciA9ICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZHJhd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLnRtcCwgYSA9IGUubWFuYWdlciwgaSA9IGUudmVuZG9ycywgciA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiID09IHIuc2hhcGUudHlwZSA/IFwic3ZnXCIgPT0gdC5pbWdfdHlwZSA/IHQuY291bnRfc3ZnID49IHIubnVtYmVyLnZhbHVlID8gKGEucGFydGljbGVzRHJhdygpLCBcbiAgICAgICAgICAgICAgICAgICAgci5tb3ZlLmVuYWJsZSA/IHQuZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpLmRyYXcuYmluZChpKSkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmRyYXdBbmltRnJhbWUpKSA6IHQuaW1nX2Vycm9yIHx8ICh0LmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaS5kcmF3LmJpbmQoaSkpKSA6IHZvaWQgMCAhPSB0LmltZ19vYmogPyAoYS5wYXJ0aWNsZXNEcmF3KCksIFxuICAgICAgICAgICAgICAgICAgICByLm1vdmUuZW5hYmxlID8gdC5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGkuZHJhdy5iaW5kKGkpKSA6IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuZHJhd0FuaW1GcmFtZSkpIDogdC5pbWdfZXJyb3IgfHwgKHQuZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpLmRyYXcuYmluZChpKSkpIDogKGEucGFydGljbGVzRHJhdygpLCBcbiAgICAgICAgICAgICAgICAgICAgci5tb3ZlLmVuYWJsZSA/IHQuZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpLmRyYXcuYmluZChpKSkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmRyYXdBbmltRnJhbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNoZWNrQmVmb3JlRHJhd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLnRtcCwgYSA9IGUudmVuZG9ycywgaSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiaW1hZ2VcIiA9PSBpLnNoYXBlLnR5cGUpIGlmIChcInN2Z1wiID09IHQuaW1nX3R5cGUgJiYgdm9pZCAwID09IHQuc291cmNlX3N2Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNoZWNrQW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5jaGVja0FuaW1GcmFtZSksIHQuaW1nX2Vycm9yIHx8IChhLmluaXQoKSwgYS5kcmF3KCkpOyBlbHNlIGEuaW5pdCgpLCBcbiAgICAgICAgICAgICAgICAgICAgYS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUubWFuYWdlciwgYSA9IGUudmVuZG9ycywgaSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgZS5yZXRpbmFJbml0KCksIGUuY2FudmFzSW5pdCgpLCBlLmNhbnZhc1NpemUoKSwgdC5wYXJ0aWNsZXNDcmVhdGUoKSwgYS5kZW5zaXR5QXV0b1BhcnRpY2xlcygpLCBcbiAgICAgICAgICAgICAgICAgICAgaS5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSA9IHMuaGV4VG9SZ2IoaS5saW5lX2xpbmtlZC5jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLnRtcCwgYSA9IGUudmVuZG9ycywgaSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgcy5pc0luQXJyYXkoXCJpbWFnZVwiLCBpLnNoYXBlLnR5cGUpID8gKHQuaW1nX3R5cGUgPSBpLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIoaS5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoIC0gMyksIFxuICAgICAgICAgICAgICAgICAgICBhLmxvYWRJbWcodC5pbWdfdHlwZSkpIDogYS5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IG47XG4gICAgfSwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSksIHQuZ2V0RGVmYXVsdFBhcmFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiAxMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIjRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJfc2lkZXM6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5X21pbjogLjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3luYzogITFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb206ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVfbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bmM6ICExXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC42LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwibGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb206ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYWlnaHQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0X21vZGU6IFwiYm91bmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuY2U6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWDogM2UzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVk6IDNlM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhcnJheTogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGV0ZWN0X29uOiBcImNhbnZhc1wiLFxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiZ3JhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMzVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogLjRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXB1bHNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW91c2U6IHt9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXRpbmFfZGV0ZWN0OiAhMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9IF0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXBhcnRpY2xlcy1qcy9saWIvcGFydGljbGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB0eXBlOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlfT5cbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+PC9sYWJlbD5cbiAgICA8aW5wdXQgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlciA/IHByb3BzLnBsYWNlaG9sZGVyIDogcHJvcHMubmFtZX1cbiAgICAvPlxuICA8L2Rpdj5cblxuY29uc3QgaW5wdXQgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICMyYjJiMmInLFxuICBmb250U2l6ZTogJzFlbScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgV2Via2l0Qm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE1vekJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBNc0JveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBPQm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICBNc1RyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE9UcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICAnOmZvY3VzJzoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIH1cbn0pXG5cbklucHV0LnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSW5wdXQuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sczogICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICByYXdzOiAgICAgICAgIFByb3BUeXBlcy5udW1iZXJcbn1cblxuY29uc3QgVGV4dEFyZWEgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIGNsYXNzTmFtZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICBjb2xzPXtwcm9wcy5jb2xzID8gcHJvcHMuY29scyA6IDMwfVxuICAgICAgICAgICAgICByb3dzPXtwcm9wcy5yb3dzID8gcHJvcHMucm93cyA6IDV9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgIDwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuXG5jb25zdCB0ZXh0YXJlYSA9IGNzcyh7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWFyZ2luOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJCb3R0b206ICdzb2xpZCAycHggIzJiMmIyYicsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcbiAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBXZWJraXRCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgTW96Qm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE1zQm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE9Cb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE1velRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE1zVHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIGhlaWdodDogJzE1MHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGxpbmVIZWlnaHQ6ICcxNTAlJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9XG59KVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RleHRBcmVhLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlLCBtZXJnZSB9IGZyb20gJ2dsYW1vcidcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL1RleHRBcmVhJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWRib3h9PlxuICAgIDxIZWFkQmxvY1xuICAgICAgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHkgfCBDb250YWN0XCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIENvbnRhY3QgTWUgaGVyZS5cIlxuICAgIC8+XG4gICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1ibG9ja30+XG4gICAgICA8aDE+Q09OVEFDVCBNRTwvaDE+XG4gICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9ndWlsbGF1bWUua29sbHlAZ21haWwuY29tXCI+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgc3R5bGU9e25hbWV9Lz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHN0eWxlPXtlbWFpbH0vPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIHN0eWxlPXtzdWJqZWN0fS8+XG4gICAgICAgIDxUZXh0QXJlYSBuYW1lPVwibWVzc2FnZVwiIHN0eWxlPXttZXNzYWdlfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbmV4dFwiIHZhbHVlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5jb25zdCBuYW1lID0gY3NzKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJyB9KVxuY29uc3QgZW1haWwgPSBjc3MoeyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc0NSUnLCBtYXJnaW5SaWdodDogJzEwJScgfSlcbmNvbnN0IHN1YmplY3QgPSBjc3MoeyB3aWR0aDogJzEwMCUnIH0pXG5jb25zdCBtZXNzYWdlID0gY3NzKHsgZmxvYXQ6ICdub25lJyB9KVxuXG5jb25zdCBmb3JtYmxvY2sgPSBjc3Moe1xuICBib3JkZXI6ICdzb2xpZCA1cHggIzJiMmIyYicsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIE1zVGV4dFNpemVBZGp1c3Q6ICcxMDAlJyxcbiAgV2Via2l0VGV4dFNpemVBZGp1c3Q6ICcxMDAlJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHBhZGRpbmc6ICcyZW0nLFxuICB3aWR0aDogJzMwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHpJbmRleDogJzEnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJyMyNDI0MjQnLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMmVtJyxcbiAgICB3aWR0aDogJzUwJScsXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgcGFkZGluZzogJzFlbScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfVxufSlcblxuY29uc3QgY2VudGVyZWRib3ggPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29udGFjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=