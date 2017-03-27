module.exports =
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	module.exports = __webpack_require__(156);


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
/* 86 */
/***/ function(module, exports) {

	module.exports = require("next/link");

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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(19);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
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
	
	var _css = __webpack_require__(6);
	
	var _css2 = _interopRequireDefault(_css);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MovingText = function (_React$Component) {
	  (0, _inherits3.default)(MovingText, _React$Component);
	
	  function MovingText(props) {
	    (0, _classCallCheck3.default)(this, MovingText);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (MovingText.__proto__ || (0, _getPrototypeOf2.default)(MovingText)).call(this, props));
	
	    _this.init();
	    return _this;
	  }
	
	  (0, _createClass3.default)(MovingText, [{
	    key: 'init',
	    value: function init() {
	      this.state = { mousePos: { x: 0, y: 0 } };
	    }
	  }, {
	    key: 'mouseMove',
	    value: function mouseMove(e) {
	      this.setState({
	        mousePos: {
	          x: e.pageX - window.innerWidth / 2,
	          y: e.pageY - window.innerHeight / 2
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          beforetext = _props.beforetext,
	          aftertext = _props.aftertext,
	          movingtext = _props.movingtext,
	          style = _props.style;
	
	
	      var offset = {
	        transform: 'translate3d( ' + this.state.mousePos.x / this.props.style.animation.transform_mouse_pos_x + 'px,\n        ' + this.state.mousePos.y / this.props.style.animation.transform_mouse_pos_y + 'px, 0 )',
	        textShadow: -this.state.mousePos.x / this.props.style.animation.shadow_mouse_pos_x + 'px\n        ' + this.state.mousePos.y / this.props.style.animation.shadow_mouse_pos_y + 'px\n        ' + this.props.style.movingtitlebackground
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: style.background,
	          onMouseMove: this.mouseMove.bind(this) },
	        _react2.default.createElement(
	          'h1',
	          { style: { whiteSpace: 'nowrap' }, className: style.fixedtitle },
	          beforetext,
	          _react2.default.createElement(
	            'span',
	            (0, _defineProperty3.default)({ style: { display: 'inline-block',
	                willChange: 'transform' },
	              className: style.movingtitle
	            }, 'style', offset),
	            movingtext
	          ),
	          aftertext
	        )
	      );
	    }
	  }]);
	  return MovingText;
	}(_react2.default.Component);
	
	MovingText.propTypes = {
	  beforetext: _react.PropTypes.string,
	  aftertext: _react.PropTypes.string,
	  movingtext: _react.PropTypes.string.isRequired,
	  style: _react.PropTypes.object
	};
	exports.default = MovingText;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpbmdUZXh0IiwicHJvcHMiLCJpbml0Iiwic3RhdGUiLCJtb3VzZVBvcyIsIngiLCJ5IiwiZSIsInNldFN0YXRlIiwicGFnZVgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVkiLCJpbm5lckhlaWdodCIsImJlZm9yZXRleHQiLCJhZnRlcnRleHQiLCJtb3Zpbmd0ZXh0Iiwic3R5bGUiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJ0ZXh0U2hhZG93Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYmFja2dyb3VuZCIsIm1vdXNlTW92ZSIsImJpbmQiLCJ3aGl0ZVNwYWNlIiwiZml4ZWR0aXRsZSIsImRpc3BsYXkiLCJ3aWxsQ2hhbmdlIiwibW92aW5ndGl0bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFU7OztBQVNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhJQUNYQSxLQURXOztBQUVqQixVQUFLQyxJQUFMO0FBRmlCO0FBR2xCOzs7OzJCQUVNO0FBQ0wsV0FBS0MsS0FBTCxHQUFhLEVBQUVDLFVBQVUsRUFBRUMsR0FBRyxDQUFMLEVBQVFDLEdBQUcsQ0FBWCxFQUFaLEVBQWI7QUFDRDs7OzhCQUVTQyxDLEVBQUc7QUFDWCxXQUFLQyxRQUFMLENBQWM7QUFDWkosa0JBQVU7QUFDUkMsYUFBR0UsRUFBRUUsS0FBRixHQUFXQyxPQUFPQyxVQUFQLEdBQW9CLENBRDFCO0FBRVJMLGFBQUdDLEVBQUVLLEtBQUYsR0FBV0YsT0FBT0csV0FBUCxHQUFxQjtBQUYzQjtBQURFLE9BQWQ7QUFNRDs7OzZCQUVRO0FBQUEsbUJBQzhDLEtBQUtaLEtBRG5EO0FBQUEsVUFDQ2EsVUFERCxVQUNDQSxVQUREO0FBQUEsVUFDYUMsU0FEYixVQUNhQSxTQURiO0FBQUEsVUFDd0JDLFVBRHhCLFVBQ3dCQSxVQUR4QjtBQUFBLFVBQ29DQyxLQURwQyxVQUNvQ0EsS0FEcEM7OztBQUdQLFVBQUlDLFNBQVM7QUFDWEMscUNBQTJCLEtBQUtoQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLENBQXBCLEdBQXdCLEtBQUtKLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUJHLFNBQWpCLENBQTJCQyxxQkFBOUUscUJBQ0ksS0FBS2xCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsS0FBS0wsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkcsU0FBakIsQ0FBMkJFLHFCQUR2RCxZQURXO0FBR1hDLG9CQUFlLENBQUUsS0FBS3BCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsQ0FBdEIsR0FBMEIsS0FBS0osS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkcsU0FBakIsQ0FBMkJJLGtCQUFwRSxvQkFDSSxLQUFLckIsS0FBTCxDQUFXQyxRQUFYLENBQW9CRSxDQUFwQixHQUF3QixLQUFLTCxLQUFMLENBQVdnQixLQUFYLENBQWlCRyxTQUFqQixDQUEyQkssa0JBRHZELG9CQUVJLEtBQUt4QixLQUFMLENBQVdnQixLQUFYLENBQWlCUztBQUxWLE9BQWI7O0FBUUEsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXVCxNQUFNVSxVQUF0QjtBQUNJLHVCQUFjLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQURsQjtBQUVFO0FBQUE7QUFBQSxZQUFJLE9BQU8sRUFBQ0MsWUFBWSxRQUFiLEVBQVgsRUFBbUMsV0FBV2IsTUFBTWMsVUFBcEQ7QUFDR2pCLG9CQURIO0FBR0U7QUFBQTtBQUFBLDRDQUFNLE9BQU8sRUFBQ2tCLFNBQVMsY0FBVjtBQUNMQyw0QkFBWSxXQURQLEVBQWI7QUFFTSx5QkFBV2hCLE1BQU1pQjtBQUZ2Qix3QkFHYWhCLE1BSGI7QUFJR0Y7QUFKSCxXQUhGO0FBVUdEO0FBVkg7QUFGRixPQURGO0FBaUJEOzs7RUF2RHFDLGdCQUFNb0IsUzs7QUFBekJuQyxVLENBRVpvQyxTLEdBQVk7QUFDakJ0QixjQUFZLGlCQUFVdUIsTUFETDtBQUVqQnRCLGFBQVksaUJBQVVzQixNQUZMO0FBR2pCckIsY0FBWSxpQkFBVXFCLE1BQVYsQ0FBaUJDLFVBSFo7QUFJakJyQixTQUFZLGlCQUFVc0I7QUFKTCxDO2tCQUZBdkMsVSIsImZpbGUiOiJNb3ZpbmdUZXh0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ1RleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYmVmb3JldGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhZnRlcnRleHQ6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1vdmluZ3RleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdHlsZTogICAgICBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhdGUgPSB7IG1vdXNlUG9zOiB7IHg6IDAsIHk6IDAgfSB9XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW91c2VQb3M6IHtcbiAgICAgICAgeDogZS5wYWdlWCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpLFxuICAgICAgICB5OiBlLnBhZ2VZIC0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJlZm9yZXRleHQsIGFmdGVydGV4dCwgbW92aW5ndGV4dCwgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBvZmZzZXQgPSB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCggJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnggLyB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi50cmFuc2Zvcm1fbW91c2VfcG9zX3h9cHgsXG4gICAgICAgICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy55IC8gdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24udHJhbnNmb3JtX21vdXNlX3Bvc195fXB4LCAwIClgLFxuICAgICAgdGV4dFNoYWRvdzogYCR7LSB0aGlzLnN0YXRlLm1vdXNlUG9zLnggLyB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi5zaGFkb3dfbW91c2VfcG9zX3h9cHhcbiAgICAgICAgJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgLyB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi5zaGFkb3dfbW91c2VfcG9zX3l9cHhcbiAgICAgICAgJHt0aGlzLnByb3BzLnN0eWxlLm1vdmluZ3RpdGxlYmFja2dyb3VuZH1gXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5iYWNrZ3JvdW5kfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXsgdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSB9ID5cbiAgICAgICAgPGgxIHN0eWxlPXt7d2hpdGVTcGFjZTogJ25vd3JhcCd9fSBjbGFzc05hbWU9e3N0eWxlLmZpeGVkdGl0bGV9PlxuICAgICAgICAgIHtiZWZvcmV0ZXh0fVxuXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm1vdmluZ3RpdGxlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtvZmZzZXR9PlxuICAgICAgICAgICAge21vdmluZ3RleHR9XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAge2FmdGVydGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19

/***/ },
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
/* 145 */,
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(6);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _link = __webpack_require__(86);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJsaW5rcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInN0eWxlIiwib2JqZWN0IiwicmVuZGVyTGlua3MiLCJtYXAiLCJsaW5rIiwiaSIsInR5cGUiLCJ1cmwiLCJuYW1lIiwiTWVudSIsInByb3BzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFNBQU8saUJBQVVDLEtBQVYsQ0FBZ0JDLFVBRFA7QUFFaEJDLFNBQU8saUJBQVVDO0FBRkQsQ0FBbEI7O0FBS0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNMLEtBQUQsRUFBUUcsS0FBUixFQUFrQjtBQUNwQyxTQUFPSCxNQUFNTSxHQUFOLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDN0IsV0FBT0QsS0FBS0UsSUFBTCxLQUFjLE9BQWQsR0FDSDtBQUFBO0FBQUEsUUFBRyxLQUFLRCxDQUFSLEVBQVcsV0FBV0wsTUFBTUksSUFBNUIsRUFBa0MsTUFBT0EsS0FBS0csR0FBOUM7QUFBc0RILFdBQUtJO0FBQTNELEtBREcsR0FFSDtBQUFBO0FBQUEsUUFBTSxLQUFLSCxDQUFYLEVBQWMsTUFBT0QsS0FBS0csR0FBMUI7QUFDRTtBQUFBO0FBQUEsVUFBRyxXQUFXUCxNQUFNSSxJQUFwQixFQUEwQixRQUFPLFFBQWpDO0FBQTRDQSxhQUFLSTtBQUFqRDtBQURGLEtBRko7QUFLRCxHQU5NLENBQVA7QUFPRCxDQVJEOztBQVVBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBSyxXQUFXQSxNQUFNVixLQUFOLENBQVlXLFNBQTVCO0FBQ0dULGdCQUFZUSxNQUFNYixLQUFsQixFQUF5QmEsTUFBTVYsS0FBL0I7QUFESCxHQURXO0FBQUEsQ0FBYjs7QUFLQVMsS0FBS2IsU0FBTCxHQUFpQkEsU0FBakI7a0JBQ2VhLEkiLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuY29uc3QgcmVuZGVyTGlua3MgPSAobGlua3MsIHN0eWxlKSA9PiB7XG4gIHJldHVybiBsaW5rcy5tYXAoIChsaW5rLCBpKSA9PiB7XG4gICAgcmV0dXJuIGxpbmsudHlwZSA9PT0gJ2VtYWlsJ1xuICAgICAgPyA8YSBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGUubGlua30gaHJlZj17IGxpbmsudXJsIH0+eyBsaW5rLm5hbWUgfTwvYT5cbiAgICAgIDogPExpbmsga2V5PXtpfSBocmVmPXsgbGluay51cmwgfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPnsgbGluay5uYW1lIH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgfSlcbn1cblxuY29uc3QgTWVudSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlLmNvbXBvbmVudH0+XG4gICAge3JlbmRlckxpbmtzKHByb3BzLmxpbmtzLCBwcm9wcy5zdHlsZSl9XG4gIDwvZGl2PlxuXG5NZW51LnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19

/***/ },
/* 147 */,
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactTypist = __webpack_require__(157);
	
	var _reactTypist2 = _interopRequireDefault(_reactTypist);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  style: _react.PropTypes.object,
	  children: _react.PropTypes.array.isRequired
	};
	
	var TextTyped = function TextTyped(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: props.style },
	    _react2.default.createElement(
	      _reactTypist2.default,
	      {
	        avgTypingSpeed: 10,
	        stdTypingDelay: 30,
	        startDelay: 1000,
	        cursor: { hideWhenDone: true } },
	      props.children
	    )
	  );
	};
	
	TextTyped.propTypes = propTypes;
	exports.default = TextTyped;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGV4dFR5cGVkLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInN0eWxlIiwib2JqZWN0IiwiY2hpbGRyZW4iLCJhcnJheSIsImlzUmVxdWlyZWQiLCJUZXh0VHlwZWQiLCJwcm9wcyIsImhpZGVXaGVuRG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsU0FBVSxpQkFBVUMsTUFESjtBQUVoQkMsWUFBVSxpQkFBVUMsS0FBVixDQUFnQkM7QUFGVixDQUFsQjs7QUFLQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1OLEtBQXRCO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBQWdCLEVBRGxCO0FBRUUsd0JBQWdCLEVBRmxCO0FBR0Usb0JBQVksSUFIZDtBQUlFLGdCQUFRLEVBQUVPLGNBQWMsSUFBaEIsRUFKVjtBQU1HRCxZQUFNSjtBQU5UO0FBREYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFZQUcsVUFBVU4sU0FBVixHQUFzQkEsU0FBdEI7a0JBQ2VNLFMiLCJmaWxlIjoiVGV4dFR5cGVkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUeXBpc3QgZnJvbSAncmVhY3QtdHlwaXN0J1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHN0eWxlOiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59XG5cbmNvbnN0IFRleHRUeXBlZCA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlfT5cbiAgICA8VHlwaXN0XG4gICAgICBhdmdUeXBpbmdTcGVlZD17MTB9XG4gICAgICBzdGRUeXBpbmdEZWxheT17MzB9XG4gICAgICBzdGFydERlbGF5PXsxMDAwfVxuICAgICAgY3Vyc29yPXt7IGhpZGVXaGVuRG9uZTogdHJ1ZSB9fSA+XG5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1R5cGlzdD5cbiAgPC9kaXY+XG5cblRleHRUeXBlZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRUeXBlZFxuIl19

/***/ },
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
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
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
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
	
	var _css = __webpack_require__(6);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _glamor = __webpack_require__(12);
	
	var _link = __webpack_require__(86);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _HeadBloc = __webpack_require__(62);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _Menu = __webpack_require__(146);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _FullBackground = __webpack_require__(81);
	
	var _FullBackground2 = _interopRequireDefault(_FullBackground);
	
	var _MovingText = __webpack_require__(99);
	
	var _MovingText2 = _interopRequireDefault(_MovingText);
	
	var _TextTyped = __webpack_require__(148);
	
	var _TextTyped2 = _interopRequireDefault(_TextTyped);
	
	var _socials = __webpack_require__(152);
	
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
	        { className: container },
	        _react2.default.createElement(_HeadBloc2.default, {
	          title: 'Guillaume Kolly',
	          description: 'Guillaume Kolly | Full stack developer living in Lyon.'
	        }),
	        _react2.default.createElement(_FullBackground2.default, { style: background }),
	        _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
	        _react2.default.createElement(_MovingText2.default, {
	          beforetext: 'Hi, I\'m ',
	          movingtext: 'Guillaume Kolly',
	          aftertext: '.',
	          style: movingText }),
	        _react2.default.createElement(
	          _TextTyped2.default,
	          { style: texttyped },
	          'I\u2019m a ',
	          _react2.default.createElement(
	            'strong',
	            null,
	            'Full Stack Developer'
	          ),
	          ' born & raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. I also have skills with Photoshop / Illustrator. Do not hezitate to ',
	          _react2.default.createElement(
	            _link2.default,
	            { href: '#' },
	            _react2.default.createElement(
	              'a',
	              { className: 'a' },
	              'contact me'
	            )
	          ),
	          '. ',
	          _react2.default.createElement('br', null),
	          'PS: This website is made with NextJS / ReactJS / Glamor.'
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
	
	exports.default = _class;
	
	
	var texttyped = (0, _css2.default)({
	  width: '702px',
	  position: 'absolute',
	  right: '10%',
	  fontSize: '18px',
	  lineHeight: '1.7',
	  textAlign: 'justify',
	  textJustify: 'inter-word',
	  top: 'calc(30% + 4em + 3em)'
	});
	
	var movingText = {
	  background: (0, _glamor.style)({
	    height: '100vh',
	    width: 'calc(100vw - 50px)',
	    position: 'absolute',
	    top: '0',
	    left: '50px'
	  }),
	  fixedtitle: (0, _glamor.style)({
	    position: 'absolute',
	    fontSize: '4em',
	    right: '10%',
	    top: '30%'
	  }),
	  movingtitle: (0, _glamor.style)({
	    color: '#2b2b2b'
	  }),
	  movingtitlebackground: 'rgba(99, 231, 175, 0.8)',
	  animation: {
	    transform_mouse_pos_x: '-100',
	    transform_mouse_pos_y: '-100',
	    shadow_mouse_pos_x: '-70',
	    shadow_mouse_pos_y: '80'
	  }
	};
	
	var social = {
	  component: (0, _glamor.style)({
	    display: 'inline-block',
	    margin: '15px 20px',
	    transformOrigin: 'left top',
	    transform: 'rotate(270deg) translateX(-100%)',
	    textTransform: 'uppercase',
	    zIndex: '1',
	    textDecoration: 'none'
	  }),
	  link: (0, _glamor.style)({
	    margin: '0 10px 0 0',
	    textDecoration: 'none',
	    color: '#000',
	    ':hover': {
	      textDecoration: 'line-through'
	    }
	  })
	};
	
	var background = (0, _css2.default)({
	  zIndex: '-1'
	});
	
	var container = (0, _css2.default)({
	  height: '100vh',
	  width: '100vw',
	  position: 'relative'
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsImJhY2tncm91bmQiLCJzb2NpYWwiLCJtb3ZpbmdUZXh0IiwidGV4dHR5cGVkIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJwb3NpdGlvbiIsInJpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJoZWlnaHQiLCJsZWZ0IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwiY29sb3IiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJzaGFkb3dfbW91c2VfcG9zX3giLCJzaGFkb3dfbW91c2VfcG9zX3kiLCJjb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInpJbmRleCIsInRleHREZWNvcmF0aW9uIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBUVc7QUFBQSxVQUNDQSxPQURELEdBQ2EsS0FBS0MsS0FEbEIsQ0FDQ0QsT0FERDs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXRSxTQUFoQjtBQUNFO0FBQ0UsaUJBQU0saUJBRFI7QUFFRSx1QkFBWTtBQUZkLFVBREY7QUFLRSxrRUFBZ0IsT0FBT0MsVUFBdkIsR0FMRjtBQU1FLHdEQUFNLE9BQU9ILE9BQWIsRUFBc0IsT0FBT0ksTUFBN0IsR0FORjtBQU9FO0FBQ0Usc0JBQVcsV0FEYjtBQUVFLHNCQUFXLGlCQUZiO0FBR0UscUJBQVUsR0FIWjtBQUlFLGlCQUFPQyxVQUpULEdBUEY7QUFZRTtBQUFBO0FBQUEsWUFBVyxPQUFPQyxTQUFsQjtBQUFBO0FBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSO0FBQUE7QUFNSztBQUFBO0FBQUEsY0FBTSxNQUFLLEdBQVg7QUFBZTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxHQUFiO0FBQUE7QUFBQTtBQUFmLFdBTkw7QUFBQTtBQU00RCxtREFONUQ7QUFBQTtBQUFBO0FBWkYsT0FERjtBQXdCRDs7O3NDQS9CeUI7QUFDeEIsYUFBTyxFQUFFTiwwQkFBRixFQUFQO0FBQ0Q7OztFQUowQixnQkFBTU8sUzs7Ozs7QUFvQ25DLElBQU1ELFlBQVksbUJBQUk7QUFDcEJFLFNBQU8sT0FEYTtBQUVwQkMsWUFBVSxVQUZVO0FBR3BCQyxTQUFPLEtBSGE7QUFJcEJDLFlBQVUsTUFKVTtBQUtwQkMsY0FBWSxLQUxRO0FBTXBCQyxhQUFXLFNBTlM7QUFPcEJDLGVBQWEsWUFQTztBQVFwQkMsT0FBSztBQVJlLENBQUosQ0FBbEI7O0FBV0EsSUFBTVYsYUFBYTtBQUNqQkYsY0FBWSxtQkFBTTtBQUNoQmEsWUFBUSxPQURRO0FBRWhCUixXQUFPLG9CQUZTO0FBR2hCQyxjQUFVLFVBSE07QUFJaEJNLFNBQUssR0FKVztBQUtoQkUsVUFBTTtBQUxVLEdBQU4sQ0FESztBQVFqQkMsY0FBWSxtQkFBTTtBQUNoQlQsY0FBVSxVQURNO0FBRWhCRSxjQUFVLEtBRk07QUFHaEJELFdBQU8sS0FIUztBQUloQkssU0FBSztBQUpXLEdBQU4sQ0FSSztBQWNqQkksZUFBYSxtQkFBTTtBQUNqQkMsV0FBTztBQURVLEdBQU4sQ0FkSTtBQWlCakJDLHlCQUF1Qix5QkFqQk47QUFrQmpCQyxhQUFXO0FBQ1RDLDJCQUF1QixNQURkO0FBRVRDLDJCQUF1QixNQUZkO0FBR1RDLHdCQUFvQixLQUhYO0FBSVRDLHdCQUFvQjtBQUpYO0FBbEJNLENBQW5COztBQTBCQSxJQUFNdEIsU0FBUztBQUNidUIsYUFBVyxtQkFBTTtBQUNmQyxhQUFTLGNBRE07QUFFZkMsWUFBUSxXQUZPO0FBR2ZDLHFCQUFpQixVQUhGO0FBSWZDLGVBQVcsa0NBSkk7QUFLZkMsbUJBQWUsV0FMQTtBQU1mQyxZQUFRLEdBTk87QUFPZkMsb0JBQWdCO0FBUEQsR0FBTixDQURFO0FBVWJDLFFBQU0sbUJBQU07QUFDVk4sWUFBUSxZQURFO0FBRVZLLG9CQUFnQixNQUZOO0FBR1ZkLFdBQU8sTUFIRztBQUlWLGNBQVU7QUFDUmMsc0JBQWdCO0FBRFI7QUFKQSxHQUFOO0FBVk8sQ0FBZjs7QUFvQkEsSUFBTS9CLGFBQWEsbUJBQUk7QUFDckI4QixVQUFRO0FBRGEsQ0FBSixDQUFuQjs7QUFJQSxJQUFNL0IsWUFBWSxtQkFBSTtBQUNwQmMsVUFBUSxPQURZO0FBRXBCUixTQUFPLE9BRmE7QUFHcEJDLFlBQVU7QUFIVSxDQUFKLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgVGV4dFR5cGVkIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dFR5cGVkJ1xuXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4geyBzb2NpYWxzOiBzb2NpYWxzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIHN0eWxlPXtiYWNrZ3JvdW5kfS8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICAgICAgICA8TW92aW5nVGV4dFxuICAgICAgICAgIGJlZm9yZXRleHQ9XCJIaSwgSSdtIFwiXG4gICAgICAgICAgbW92aW5ndGV4dD1cIkd1aWxsYXVtZSBLb2xseVwiXG4gICAgICAgICAgYWZ0ZXJ0ZXh0PVwiLlwiXG4gICAgICAgICAgc3R5bGU9e21vdmluZ1RleHR9IC8+XG4gICAgICAgIDxUZXh0VHlwZWQgc3R5bGU9e3RleHR0eXBlZH0+XG4gICAgICAgICAgSeKAmW0gYSA8c3Ryb25nPkZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9zdHJvbmc+IGJvcm4gJiByYWlzZWRcbiAgICAgICAgICBpbiB0aGUgRnJlbmNoIEFscHMsIGJ1dCBJ4oCZbSBjdXJyZW50bHkgbGl2aW5nIGluIEx5b24gLSBGcmFuY2UuXG4gICAgICAgICAgSeKAmW0gZmx1ZW50IGluIE5vZGUgLyBNZXRlb3IgLyBKUyAvIFJlYWN0LCBidXQgSeKAmW0gcmVjZW50bHlcbiAgICAgICAgICBzdGFydGVkIGV4cGVyaW1lbnRpbmcgd2l0aCBHcmFwaFFMLCBSZWR1eCBhbmQgV2VicGFjay4gSSBhbHNvXG4gICAgICAgICAgaGF2ZSBza2lsbHMgd2l0aCBQaG90b3Nob3AgLyBJbGx1c3RyYXRvci4gRG8gbm90IGhleml0YXRlXG4gICAgICAgICAgdG8gPExpbmsgaHJlZj1cIiNcIj48YSBjbGFzc05hbWU9J2EnPmNvbnRhY3QgbWU8L2E+PC9MaW5rPi4gPGJyLz5cbiAgICAgICAgICBQUzogVGhpcyB3ZWJzaXRlIGlzIG1hZGUgd2l0aCBOZXh0SlMgLyBSZWFjdEpTIC8gR2xhbW9yLlxuICAgICAgICA8L1RleHRUeXBlZD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCB0ZXh0dHlwZWQgPSBjc3Moe1xuICB3aWR0aDogJzcwMnB4JyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnMTAlJyxcbiAgZm9udFNpemU6ICcxOHB4JyxcbiAgbGluZUhlaWdodDogJzEuNycsXG4gIHRleHRBbGlnbjogJ2p1c3RpZnknLFxuICB0ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnLFxuICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDNlbSknXG59KVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBiYWNrZ3JvdW5kOiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHdpZHRoOiAnY2FsYygxMDB2dyAtIDUwcHgpJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwJyxcbiAgICBsZWZ0OiAnNTBweCdcbiAgfSksXG4gIGZpeGVkdGl0bGU6IHN0eWxlKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBmb250U2l6ZTogJzRlbScsXG4gICAgcmlnaHQ6ICcxMCUnLFxuICAgIHRvcDogJzMwJSdcbiAgfSksXG4gIG1vdmluZ3RpdGxlOiBzdHlsZSh7XG4gICAgY29sb3I6ICcjMmIyYjJiJ1xuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiAncmdiYSg5OSwgMjMxLCAxNzUsIDAuOCknLFxuICBhbmltYXRpb246IHtcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3g6ICctMTAwJyxcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3k6ICctMTAwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3g6ICctNzAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeTogJzgwJyxcbiAgfVxufVxuXG5jb25zdCBzb2NpYWwgPSB7XG4gIGNvbXBvbmVudDogc3R5bGUoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1hcmdpbjogJzE1cHggMjBweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAxMHB4IDAgMCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCdcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGJhY2tncm91bmQgPSBjc3Moe1xuICB6SW5kZXg6ICctMScsXG59KVxuXG5jb25zdCBjb250YWluZXIgPSBjc3Moe1xuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufSlcbiJdfQ==
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
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
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
		var _react = __webpack_require__(1);
	
		var _react2 = _interopRequireDefault(_react);
	
		var _Cursor = __webpack_require__(2);
	
		var _Cursor2 = _interopRequireDefault(_Cursor);
	
		var _utils = __webpack_require__(4);
	
		var utils = _interopRequireWildcard(_utils);
	
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
		var Typist = function (_Component) {
		  _inherits(Typist, _Component);
	
		  function Typist(props) {
		    _classCallCheck(this, Typist);
	
		    var _this = _possibleConstructorReturn(this, (Typist.__proto__ || Object.getPrototypeOf(Typist)).call(this, props));
	
		    _this.state = {
		      text: [],
		      isDone: false
		    };
	
		    _this.onTypingDone = function () {
		      if (!_this.mounted) {
		        return;
		      }
		      _this.setState({ isDone: true });
		      _this.props.onTypingDone();
		    };
	
		    _this.delayGenerator = function (line, lineIdx, character, charIdx) {
		      var mean = _this.props.avgTypingDelay;
		      var std = _this.props.stdTypingDelay;
		      return _this.props.delayGenerator(mean, std, {
		        line: line,
		        lineIdx: lineIdx,
		        character: character,
		        charIdx: charIdx,
		        defDelayGenerator: function defDelayGenerator() {
		          var mn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mean;
		          var st = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : std;
		          return utils.gaussianRnd(mn, st);
		        }
		      });
		    };
	
		    _this.mounted = false;
		    _this.linesToType = [];
	
		    if (props.children) {
		      _this.linesToType = utils.extractText(props.children);
		    }
		    return _this;
		  }
	
		  _createClass(Typist, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      this.mounted = true;
		      var _props = this.props;
		      var children = _props.children;
		      var startDelay = _props.startDelay;
	
		      if (children) {
		        if (startDelay > 0 && typeof window !== 'undefined') {
		          setTimeout(this.typeAllLines.bind(this), startDelay);
		        } else {
		          this.typeAllLines();
		        }
		      } else {
		        this.onTypingDone();
		      }
		    }
		  }, {
		    key: 'shouldComponentUpdate',
		    value: function shouldComponentUpdate(nextProps, nextState) {
		      for (var idx = 0; idx < nextState.text.length; idx++) {
		        var txt = this.state.text[idx];
		        var ntxt = nextState.text[idx];
		        if (txt !== ntxt && ntxt.length > 0) return true;
		      }
		      return this.state.isDone !== nextState.isDone;
		    }
		  }, {
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      this.mounted = false;
		    }
		  }, {
		    key: 'typeAllLines',
		    value: function typeAllLines() {
		      var _this2 = this;
	
		      var lines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.linesToType;
	
		      return utils.eachPromise(lines, function (line, idx) {
		        if (!_this2.mounted) {
		          return Promise.resolve();
		        }
		        return new Promise(function (resolve) {
		          _this2.setState({ text: _this2.state.text.concat(['']) }, function () {
		            _this2.typeLine(line, idx).then(resolve);
		          });
		        });
		      }).then(function () {
		        return _this2.onTypingDone();
		      });
		    }
		  }, {
		    key: 'typeLine',
		    value: function typeLine(line, lineIdx) {
		      var _this3 = this;
	
		      return utils.eachPromise(line, function (character, charIdx) {
		        if (!_this3.mounted) {
		          return Promise.resolve();
		        }
		        return new Promise(function (resolve) {
		          var text = _this3.state.text.slice();
		          text[lineIdx] += character;
		          _this3.setState({ text: text }, function () {
		            var delay = _this3.delayGenerator(line, lineIdx, character, charIdx);
		            setTimeout(resolve, delay);
		          });
		        });
		      });
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var _props2 = this.props;
		      var className = _props2.className;
		      var cursor = _props2.cursor;
		      var isDone = this.state.isDone;
	
		      var innerTree = utils.extractTreeWithText(this.props.children, this.state.text);
	
		      return _react2.default.createElement(
		        'div',
		        { className: 'Typist ' + className },
		        innerTree,
		        _react2.default.createElement(_Cursor2.default, _extends({ isDone: isDone }, cursor))
		      );
		    }
		  }]);
	
		  return Typist;
		}(_react.Component);
	
		Typist.propTypes = {
		  children: _react.PropTypes.node,
		  className: _react.PropTypes.string,
		  avgTypingDelay: _react.PropTypes.number,
		  stdTypingDelay: _react.PropTypes.number,
		  startDelay: _react.PropTypes.number,
		  cursor: _react.PropTypes.object,
		  onTypingDone: _react.PropTypes.func,
		  delayGenerator: _react.PropTypes.func
		};
		Typist.defaultProps = {
		  className: '',
		  avgTypingDelay: 70,
		  stdTypingDelay: 25,
		  startDelay: 0,
		  cursor: {},
		  onTypingDone: function onTypingDone() {},
		  delayGenerator: utils.gaussianRnd
		};
		exports.default = Typist;
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(3);
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
		var _react = __webpack_require__(1);
	
		var _react2 = _interopRequireDefault(_react);
	
		__webpack_require__(3);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
		var Cursor = function (_Component) {
		  _inherits(Cursor, _Component);
	
		  function Cursor() {
		    var _ref;
	
		    var _temp, _this, _ret;
	
		    _classCallCheck(this, Cursor);
	
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }
	
		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
		      shouldRender: _this.props.show
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }
	
		  _createClass(Cursor, [{
		    key: 'componentWillReceiveProps',
		    value: function componentWillReceiveProps(nextProps) {
		      var _this2 = this;
	
		      var shouldHide = !this.props.isDone && nextProps.isDone && this.props.hideWhenDone;
		      if (shouldHide) {
		        setTimeout(function () {
		          return _this2.setState({ shouldRender: false });
		        }, this.props.hideWhenDoneDelay);
		      }
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      if (this.state.shouldRender) {
		        var className = this.props.blink ? ' Cursor--blinking' : '';
		        return _react2.default.createElement(
		          'span',
		          { className: 'Cursor' + className },
		          this.props.element
		        );
		      }
		      return null;
		    }
		  }]);
	
		  return Cursor;
		}(_react.Component);
	
		Cursor.propTypes = {
		  blink: _react.PropTypes.bool,
		  show: _react.PropTypes.bool,
		  element: _react.PropTypes.node,
		  hideWhenDone: _react.PropTypes.bool,
		  hideWhenDoneDelay: _react.PropTypes.number,
		  isDone: _react.PropTypes.bool
		};
		Cursor.defaultProps = {
		  blink: true,
		  show: true,
		  element: '|',
		  hideWhenDone: false,
		  hideWhenDoneDelay: 1000,
		  isDone: false
		};
		exports.default = Cursor;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.sleep = undefined;
	
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
		exports.gaussianRnd = gaussianRnd;
		exports.eachPromise = eachPromise;
		exports.exclude = exclude;
		exports.extractText = extractText;
		exports.elementFactoryMaker = elementFactoryMaker;
		exports.extractTreeWithText = extractTreeWithText;
	
		var _react = __webpack_require__(1);
	
		var _react2 = _interopRequireDefault(_react);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
		var sleep = exports.sleep = function sleep(val) {
		  return new Promise(function (resolve) {
		    return setTimeout(resolve, val);
		  });
		};
	
		function gaussianRnd(mean, std) {
		  var times = 12;
		  var sum = 0;
		  for (var idx = 0; idx < times; idx++) {
		    sum += Math.random();
		  }
		  sum -= times / 2;
		  return Math.round(sum * std) + mean;
		}
	
		function eachPromise(arr, iterator) {
		  var length = arr.length;
	
		  return Array.from(arr).reduce(function (prev, current, idx) {
		    return prev.then(function () {
		      return Promise.resolve(current).then(function (val) {
		        return iterator(val, idx, length);
		      });
		    });
		  }, Promise.resolve());
		}
	
		function exclude(obj, keys) {
		  var res = {};
		  for (var key in obj) {
		    if (keys.indexOf(key) === -1) {
		      res[key] = obj[key];
		    }
		  }
		  return res;
		}
	
		function extractText(toType) {
		  var st = toType ? [toType] : [];
		  var lines = [];
	
		  while (st.length > 0) {
		    var cur = st.pop();
	
		    if (_react2.default.isValidElement(cur)) {
		      _react2.default.Children.forEach(cur.props.children, function (child) {
		        st.push(child);
		      });
		    } else {
		      if (Array.isArray(cur)) {
		        var _iteratorNormalCompletion = true;
		        var _didIteratorError = false;
		        var _iteratorError = undefined;
	
		        try {
		          for (var _iterator = cur[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		            var el = _step.value;
	
		            st.push(el);
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
		      } else {
		        lines.unshift(cur);
		      }
		    }
		  }
		  return lines;
		}
	
		function elementFactoryMaker() {
		  var key = 0;
		  return function (el) {
		    var tag = el.type;
		    var props = exclude(el.props, ['children']);
		    props.key = 'Typist-el-' + key++;
		    return _react2.default.createElement.bind(null, tag, props);
		  };
		}
	
		function extractTreeWithText() {
		  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		    args[_key] = arguments[_key];
		  }
	
		  if (!args[0]) return void 0;
		  var factMaker = elementFactoryMaker();
	
		  var inner = function inner(tree, text, textIdx) {
		    if (textIdx >= text.length) return [null, textIdx];
		    var idx = textIdx;
		    var recurse = function recurse(ch) {
		      var _inner = inner(ch, text, idx);
	
		      var _inner2 = _slicedToArray(_inner, 2);
	
		      var child = _inner2[0];
		      var advIdx = _inner2[1];
	
		      idx = advIdx;
		      return child;
		    };
	
		    // Recursively call on children of React Element
		    if (_react2.default.isValidElement(tree)) {
		      var fact = factMaker(tree);
		      var children = _react2.default.Children.map(tree.props.children, recurse) || [];
		      return [fact.apply(undefined, _toConsumableArray(children)), idx];
		    }
	
		    // Recursively call on array
		    if (Array.isArray(tree)) {
		      var _children = tree.map(recurse);
		      return [_children, idx];
		    }
	
		    // Return text
		    return [text[idx], idx + 1];
		  };
		  return inner.apply(undefined, args.concat([0]))[0];
		}
	
	/***/ }
	/******/ ]);

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcz8zNTRhZmRkIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzM1NGFmZGQiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi93YXJuaW5nLmpzPzM1NGFmZGQiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9pbmRleC5qcz8zNTRhZmRkIiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9pbmRleC5qcz8zNTRhZmRkIiwid2VicGFjazovLy8uL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDUtZW50aXRpZXMuanM/MzU0YWZkZCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz8zNTRhZmRkIiwid2VicGFjazovLy8uL34vYW5zaS1yZWdleC9pbmRleC5qcz8zNTRhZmRkIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanM/MzU0YWZkZCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2NhbWVsaXplLmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZS5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvaHlwaGVuYXRlLmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5LmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9DU1NQcm9wZXJ0eS5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvZGFuZ2Vyb3VzU3R5bGVWYWx1ZS5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9jbGVhbi5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9oYXNoLmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2luZGV4LmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL3BsdWdpbnMuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvc2hlZXQuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvaW5kZXguanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9odG1sLWVudGl0aWVzL2xpYi94bWwtZW50aXRpZXMuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYy5qcz84YjI4ODA3Iiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9lbmNvZGUuanM/OGIyODgwNyIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2luZGV4LmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLy4vfi9zdHJpcC1hbnNpL2luZGV4LmpzPzhiMjg4MDciLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9jbGllbnQtb3ZlcmxheS5qcz84YjI4ODA3Iiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LmpzP2I5YjZhOWEiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9wcm9jZXNzLXVwZGF0ZS5qcz9iOWI2YTlhIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YjliNmE5YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kLmpzP2I5YjZhOWEiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9wYXJ0aWNsZXMuanM/YjliNmE5YSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXBhcnRpY2xlcy1qcy9saWIvcGFydGljbGVzLmpzP2I5YjZhOWEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9saW5rXCI/YjliNmE5YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vdmluZ1RleHQuanM/YjliNmE5YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUuanM/YjliNmE5YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHRUeXBlZC5qcz9iOWI2YTlhIiwid2VicGFjazovLy8uL2RhdGEvc29jaWFscy5qcz9iOWI2YTlhIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2I5YjZhOWEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10eXBpc3QvZGlzdC9UeXBpc3QuanM/YjliNmE5YSJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ0aXRsZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsIkhlYWRCbG9jIiwicHJvcHMiLCJnbG9iYWwiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRTaGFkb3ciLCJXZWJraXRGb250U21vb3RoaW5nIiwiTW96T3N4Rm9udFNtb290aGluZyIsIkZ1bGxCYWNrZ3JvdW5kIiwic3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsInBhcnRpY2xlcyIsIkNvbXBvbmVudCIsIm9iamVjdCIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiLCJNb3ZpbmdUZXh0IiwiaW5pdCIsInN0YXRlIiwibW91c2VQb3MiLCJ4IiwieSIsImUiLCJzZXRTdGF0ZSIsInBhZ2VYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInBhZ2VZIiwiaW5uZXJIZWlnaHQiLCJiZWZvcmV0ZXh0IiwiYWZ0ZXJ0ZXh0IiwibW92aW5ndGV4dCIsIm9mZnNldCIsInRyYW5zZm9ybSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSIsIm1vdmluZ3RpdGxlYmFja2dyb3VuZCIsImJhY2tncm91bmQiLCJtb3VzZU1vdmUiLCJiaW5kIiwid2hpdGVTcGFjZSIsImZpeGVkdGl0bGUiLCJkaXNwbGF5Iiwid2lsbENoYW5nZSIsIm1vdmluZ3RpdGxlIiwibGlua3MiLCJhcnJheSIsInJlbmRlckxpbmtzIiwibWFwIiwibGluayIsImkiLCJ0eXBlIiwidXJsIiwibmFtZSIsIk1lbnUiLCJjb21wb25lbnQiLCJjaGlsZHJlbiIsIlRleHRUeXBlZCIsImhpZGVXaGVuRG9uZSIsInNvY2lhbHMiLCJjb250YWluZXIiLCJzb2NpYWwiLCJtb3ZpbmdUZXh0IiwidGV4dHR5cGVkIiwicmlnaHQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0SnVzdGlmeSIsInRyYW5zZm9ybU9yaWdpbiIsInRleHRUcmFuc2Zvcm0iLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsOENBQTZDO0FBQzdDOztBQUVBLHdCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsUUFBTztBQUNQLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkM7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGdCQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUCxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxFQUFDLEU7Ozs7OztBQ3RWRDs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBLHFHQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLG1DQUFrQywwQkFBMEIsMENBQTBDLGdCQUFnQixPQUFPLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxPQUFPLHdCQUF3QixFQUFFOztBQUVqTSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsdUVBQXNFLGFBQWE7QUFDbkY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdFQUF1RSxlQUFlO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0VBQW1FO0FBQ25FO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRUFBK0Q7QUFDL0Q7QUFDQSxRQUFPLElBQUk7QUFDWDtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLDBCQUEwQjtBQUM3QyxFOzs7Ozs7O0FDbEhBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUEsbUNBQWtDLDBCQUEwQiwwQ0FBMEMsZ0JBQWdCLE9BQU8sa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE9BQU8sd0JBQXdCLEVBQUU7O0FBRWpNOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUF5Qix1QkFBdUIsRUFBRTtBQUNsRDs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUIsaUNBQWlDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNEU7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxnQkFBZ0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQW9EO0FBQ3BELE1BQUs7QUFDTDtBQUNBO0FBQ0EsNkRBQTREO0FBQzVEO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBLFM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTRELGdCQUFnQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7QUMzTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QyxVQUFTO0FBQ1QscUNBQW9DO0FBQ3BDLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsVUFBUztBQUNULFlBQVc7QUFDWCxZQUFXO0FBQ1gsV0FBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYztBQUNkLGVBQWM7QUFDZCxpQkFBZ0I7QUFDaEIsa0JBQWlCO0FBQ2pCLGdCQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUpBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2R0FBNEcsZ0VBQWdFO0FBQzVLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsbURBQWtEO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7Ozs7Ozs7OztBQzlFRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxLQUFNQSxZQUFZO0FBQ2hCQyxVQUFjLGlCQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRWhCQyxnQkFBYyxpQkFBVUY7QUFGUixFQUFsQjs7QUFLQSxLQUFNRyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFVBQ2Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVFBLGFBQU1MO0FBQWQsTUFERjtBQUVFLDZDQUFNLFNBQVEsT0FBZCxHQUZGO0FBR0UsNkNBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsdUNBQTlCLEdBSEY7QUFJRSw2Q0FBTSxNQUFLLGFBQVgsRUFBeUIsU0FBU0ssTUFBTUYsV0FBeEMsR0FKRjtBQUtFLDZDQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLG1IQUE5QixHQUxGO0FBTUUsNkNBQU0sTUFBSyxXQUFYLEVBQXVCLFNBQVEsaUJBQS9CO0FBTkYsSUFEZTtBQUFBLEVBQWpCOztBQVVBLGFBQUlHLE1BQUosQ0FBVyxZQUFYLEVBQTBCO0FBQ3hCQyxZQUFTLEdBRGU7QUFFeEJDLFdBQVEsR0FGZ0I7QUFHeEJDLFdBQVEsR0FIZ0I7QUFJeEJDLGVBQVksWUFKWTtBQUt4QkMsZUFBWSxNQUxZO0FBTXhCQyxhQUFVLEtBTmM7QUFPeEJDLGVBQVksS0FQWTtBQVF4QkMsY0FBVyxRQVJhO0FBU3hCQyxtQkFBZ0IsTUFUUTtBQVV4QkMsZUFBWSxHQVZZO0FBV3hCQyx3QkFBcUIsYUFYRztBQVl4QkMsd0JBQXFCO0FBWkcsRUFBMUI7O0FBZUFkLFVBQVNMLFNBQVQsR0FBcUJBLFNBQXJCO21CQUNlSyxROzs7Ozs7O0FDbkNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsWUFBWSxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHNCQUFzQixFQUFFO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkZBQTBGOztBQUUxRjtBQUNBLHdCQUF1QjtBQUN2QixxQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxnQ0FBK0IsY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTBGLHdDQUF3QztBQUNsSTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNEgscUNBQXFDO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGNBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLGtDQUFpQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0EsVUFB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UixPQUFNO0FBQ04sS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1IsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQThELGdFQUFnRTtBQUM5SDs7QUFFQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQWtFLGFBQWE7QUFDL0U7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGEiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoICh4KSB7fVxuICAgIH07XG5cbiAgICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnByb2Nlc3NTdHlsZU5hbWUgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmNyZWF0ZU1hcmt1cEZvclN0eWxlcyA9IGNyZWF0ZU1hcmt1cEZvclN0eWxlcztcblxudmFyIF9jYW1lbGl6ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lJyk7XG5cbnZhciBfY2FtZWxpemVTdHlsZU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemVTdHlsZU5hbWUpO1xuXG52YXIgX2Rhbmdlcm91c1N0eWxlVmFsdWUgPSByZXF1aXJlKCcuL2Rhbmdlcm91c1N0eWxlVmFsdWUnKTtcblxudmFyIF9kYW5nZXJvdXNTdHlsZVZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rhbmdlcm91c1N0eWxlVmFsdWUpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG52YXIgX21lbW9pemVTdHJpbmdPbmx5ID0gcmVxdWlyZSgnZmJqcy9saWIvbWVtb2l6ZVN0cmluZ09ubHknKTtcblxudmFyIF9tZW1vaXplU3RyaW5nT25seTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZW1vaXplU3RyaW5nT25seSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IGV4cG9ydHMucHJvY2Vzc1N0eWxlTmFtZSA9ICgwLCBfbWVtb2l6ZVN0cmluZ09ubHkyLmRlZmF1bHQpKF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcHJvdmlkZXNNb2R1bGUgQ1NTUHJvcGVydHlPcGVyYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHdhcm5WYWxpZFN0eWxlO1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gJ21zVHJhbnNmb3JtJyBpcyBjb3JyZWN0LCBidXQgdGhlIG90aGVyIHByZWZpeGVzIHNob3VsZCBiZSBjYXBpdGFsaXplZFxuICAgIHZhciBiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4gPSAvXig/OndlYmtpdHxtb3p8bylbQS1aXS87XG5cbiAgICAvLyBzdHlsZSB2YWx1ZXMgc2hvdWxkbid0IGNvbnRhaW4gYSBzZW1pY29sb25cbiAgICB2YXIgYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuID0gLztcXHMqJC87XG5cbiAgICB2YXIgd2FybmVkU3R5bGVOYW1lcyA9IHt9O1xuICAgIHZhciB3YXJuZWRTdHlsZVZhbHVlcyA9IHt9O1xuICAgIHZhciB3YXJuZWRGb3JOYU5WYWx1ZSA9IGZhbHNlO1xuXG4gICAgdmFyIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lID0gZnVuY3Rpb24gd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpIHtcbiAgICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnVW5zdXBwb3J0ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8lcycsIG5hbWUsICgwLCBfY2FtZWxpemVTdHlsZU5hbWUyLmRlZmF1bHQpKG5hbWUpLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZShuYW1lLCBvd25lcikge1xuICAgICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdVbnN1cHBvcnRlZCB2ZW5kb3ItcHJlZml4ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8lcycsIG5hbWUsIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbiA9IGZ1bmN0aW9uIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSwgb3duZXIpIHtcbiAgICAgIGlmICh3YXJuZWRTdHlsZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgJiYgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdID0gdHJ1ZTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnU3R5bGUgcHJvcGVydHkgdmFsdWVzIHNob3VsZG5cXCd0IGNvbnRhaW4gYSBzZW1pY29sb24uJXMgJyArICdUcnkgXCIlczogJXNcIiBpbnN0ZWFkLicsIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lciksIG5hbWUsIHZhbHVlLnJlcGxhY2UoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLCAnJykpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICB2YXIgd2FyblN0eWxlVmFsdWVJc05hTiA9IGZ1bmN0aW9uIHdhcm5TdHlsZVZhbHVlSXNOYU4obmFtZSwgdmFsdWUsIG93bmVyKSB7XG4gICAgICBpZiAod2FybmVkRm9yTmFOVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRGb3JOYU5WYWx1ZSA9IHRydWU7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2BOYU5gIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4lcycsIG5hbWUsIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICB2YXIgY2hlY2tSZW5kZXJNZXNzYWdlID0gZnVuY3Rpb24gY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSB7XG4gICAgICBpZiAob3duZXIpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBvd25lci5nZXROYW1lKCk7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuICcgQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1JlYWN0RE9NQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICAgKi9cblxuICAgIHdhcm5WYWxpZFN0eWxlID0gZnVuY3Rpb24gd2FyblZhbGlkU3R5bGUobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAgICAgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLXZhclxuICAgICAgdmFyIG93bmVyID0gdm9pZCAwO1xuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBvd25lciA9IGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgICAgd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpO1xuICAgICAgfSBlbHNlIGlmIChiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4udGVzdChuYW1lKSkge1xuICAgICAgICB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpO1xuICAgICAgfSBlbHNlIGlmIChiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uKG5hbWUsIHZhbHVlLCBvd25lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSkge1xuICAgICAgICB3YXJuU3R5bGVWYWx1ZUlzTmFOKG5hbWUsIHZhbHVlLCBvd25lcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtYXBwaW5nIG9mIHN0eWxlIHByb3BlcnRpZXMgZm9yIHVzZSBhcyBpbmxpbmUgc3R5bGVzOlxuICAgKlxuICAgKiAgID4gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHt3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAwfSlcbiAgICogICBcIndpZHRoOjIwMHB4O2hlaWdodDowO1wiXG4gICAqXG4gICAqIFVuZGVmaW5lZCB2YWx1ZXMgYXJlIGlnbm9yZWQgc28gdGhhdCBkZWNsYXJhdGl2ZSBwcm9ncmFtbWluZyBpcyBlYXNpZXIuXG4gICAqIFRoZSByZXN1bHQgc2hvdWxkIGJlIEhUTUwtZXNjYXBlZCBiZWZvcmUgaW5zZXJ0aW9uIGludG8gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0eWxlc1xuICAgKiBAcGFyYW0ge1JlYWN0RE9NQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICogQHJldHVybiB7P3N0cmluZ31cbiAgICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhzdHlsZXMsIGNvbXBvbmVudCkge1xuICB2YXIgc2VyaWFsaXplZCA9ICcnO1xuICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgdmFyIGlzQ3VzdG9tUHJvcCA9IHN0eWxlTmFtZS5pbmRleE9mKCctLScpID09PSAwO1xuICAgIGlmICghc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgc3R5bGVWYWx1ZSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc0N1c3RvbVByb3ApIHtcbiAgICAgIHdhcm5WYWxpZFN0eWxlKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSwgY29tcG9uZW50KTtcbiAgICB9XG4gICAgaWYgKHN0eWxlVmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzQ3VzdG9tUHJvcCkge1xuICAgICAgICBzZXJpYWxpemVkICs9IHN0eWxlTmFtZSArICc6JyArIHN0eWxlVmFsdWUgKyAnOyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXJpYWxpemVkICs9IHByb2Nlc3NTdHlsZU5hbWUoc3R5bGVOYW1lKSArICc6JztcbiAgICAgICAgc2VyaWFsaXplZCArPSAoMCwgX2Rhbmdlcm91c1N0eWxlVmFsdWUyLmRlZmF1bHQpKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSwgY29tcG9uZW50KSArICc7JztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcmlhbGl6ZWQgfHwgbnVsbDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29tcG9zZSA9IGV4cG9ydHMubWVyZ2UgPSBleHBvcnRzLiQgPSBleHBvcnRzLnN0eWxlID0gZXhwb3J0cy5wcmVzZXRzID0gZXhwb3J0cy5rZXlmcmFtZXMgPSBleHBvcnRzLmZvbnRGYWNlID0gZXhwb3J0cy5pbnNlcnRHbG9iYWwgPSBleHBvcnRzLmluc2VydFJ1bGUgPSBleHBvcnRzLnBsdWdpbnMgPSBleHBvcnRzLnN0eWxlU2hlZXQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnNwZWVkeSA9IHNwZWVkeTtcbmV4cG9ydHMuc2ltdWxhdGlvbnMgPSBzaW11bGF0aW9ucztcbmV4cG9ydHMuc2ltdWxhdGUgPSBzaW11bGF0ZTtcbmV4cG9ydHMuY3NzTGFiZWxzID0gY3NzTGFiZWxzO1xuZXhwb3J0cy5pc0xpa2VSdWxlID0gaXNMaWtlUnVsZTtcbmV4cG9ydHMuaWRGb3IgPSBpZEZvcjtcbmV4cG9ydHMuY3NzID0gY3NzO1xuZXhwb3J0cy5yZWh5ZHJhdGUgPSByZWh5ZHJhdGU7XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbmV4cG9ydHMucGFyZW50ID0gcGFyZW50O1xuZXhwb3J0cy5tZWRpYSA9IG1lZGlhO1xuZXhwb3J0cy5wc2V1ZG8gPSBwc2V1ZG87XG5leHBvcnRzLmFjdGl2ZSA9IGFjdGl2ZTtcbmV4cG9ydHMuYW55ID0gYW55O1xuZXhwb3J0cy5jaGVja2VkID0gY2hlY2tlZDtcbmV4cG9ydHMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLl9kZWZhdWx0ID0gX2RlZmF1bHQ7XG5leHBvcnRzLmZpcnN0ID0gZmlyc3Q7XG5leHBvcnRzLmZpcnN0Q2hpbGQgPSBmaXJzdENoaWxkO1xuZXhwb3J0cy5maXJzdE9mVHlwZSA9IGZpcnN0T2ZUeXBlO1xuZXhwb3J0cy5mdWxsc2NyZWVuID0gZnVsbHNjcmVlbjtcbmV4cG9ydHMuZm9jdXMgPSBmb2N1cztcbmV4cG9ydHMuaG92ZXIgPSBob3ZlcjtcbmV4cG9ydHMuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7XG5leHBvcnRzLmluUmFuZ2UgPSBpblJhbmdlO1xuZXhwb3J0cy5pbnZhbGlkID0gaW52YWxpZDtcbmV4cG9ydHMubGFzdENoaWxkID0gbGFzdENoaWxkO1xuZXhwb3J0cy5sYXN0T2ZUeXBlID0gbGFzdE9mVHlwZTtcbmV4cG9ydHMubGVmdCA9IGxlZnQ7XG5leHBvcnRzLmxpbmsgPSBsaW5rO1xuZXhwb3J0cy5vbmx5Q2hpbGQgPSBvbmx5Q2hpbGQ7XG5leHBvcnRzLm9ubHlPZlR5cGUgPSBvbmx5T2ZUeXBlO1xuZXhwb3J0cy5vcHRpb25hbCA9IG9wdGlvbmFsO1xuZXhwb3J0cy5vdXRPZlJhbmdlID0gb3V0T2ZSYW5nZTtcbmV4cG9ydHMucmVhZE9ubHkgPSByZWFkT25seTtcbmV4cG9ydHMucmVhZFdyaXRlID0gcmVhZFdyaXRlO1xuZXhwb3J0cy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuZXhwb3J0cy5yaWdodCA9IHJpZ2h0O1xuZXhwb3J0cy5yb290ID0gcm9vdDtcbmV4cG9ydHMuc2NvcGUgPSBzY29wZTtcbmV4cG9ydHMudGFyZ2V0ID0gdGFyZ2V0O1xuZXhwb3J0cy52YWxpZCA9IHZhbGlkO1xuZXhwb3J0cy52aXNpdGVkID0gdmlzaXRlZDtcbmV4cG9ydHMuZGlyID0gZGlyO1xuZXhwb3J0cy5sYW5nID0gbGFuZztcbmV4cG9ydHMubm90ID0gbm90O1xuZXhwb3J0cy5udGhDaGlsZCA9IG50aENoaWxkO1xuZXhwb3J0cy5udGhMYXN0Q2hpbGQgPSBudGhMYXN0Q2hpbGQ7XG5leHBvcnRzLm50aExhc3RPZlR5cGUgPSBudGhMYXN0T2ZUeXBlO1xuZXhwb3J0cy5udGhPZlR5cGUgPSBudGhPZlR5cGU7XG5leHBvcnRzLmFmdGVyID0gYWZ0ZXI7XG5leHBvcnRzLmJlZm9yZSA9IGJlZm9yZTtcbmV4cG9ydHMuZmlyc3RMZXR0ZXIgPSBmaXJzdExldHRlcjtcbmV4cG9ydHMuZmlyc3RMaW5lID0gZmlyc3RMaW5lO1xuZXhwb3J0cy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG5leHBvcnRzLmJhY2tkcm9wID0gYmFja2Ryb3A7XG5leHBvcnRzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5leHBvcnRzLmNzc0ZvciA9IGNzc0ZvcjtcbmV4cG9ydHMuYXR0cmlic0ZvciA9IGF0dHJpYnNGb3I7XG5cbnZhciBfc2hlZXQgPSByZXF1aXJlKCcuL3NoZWV0LmpzJyk7XG5cbnZhciBfQ1NTUHJvcGVydHlPcGVyYXRpb25zID0gcmVxdWlyZSgnLi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMnKTtcblxudmFyIF9jbGVhbiA9IHJlcXVpcmUoJy4vY2xlYW4uanMnKTtcblxudmFyIF9jbGVhbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGVhbik7XG5cbnZhciBfcGx1Z2lucyA9IHJlcXVpcmUoJy4vcGx1Z2lucycpO1xuXG52YXIgX2hhc2ggPSByZXF1aXJlKCcuL2hhc2gnKTtcblxudmFyIF9oYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfSAvKiBzdHlsZXNoZWV0ICovXG5cblxudmFyIHN0eWxlU2hlZXQgPSBleHBvcnRzLnN0eWxlU2hlZXQgPSBuZXcgX3NoZWV0LlN0eWxlU2hlZXQoKTtcbi8vIGFuIGlzb21vcnBoaWMgU3R5bGVTaGVldCBzaGltLiBoaWRlcyBhbGwgdGhlIG5pdHR5IGdyaXR0eS5cblxuLy8gLyoqKioqKioqKioqKioqKiogTElGVE9GRiBJTiAzLi4uIDIuLi4gMS4uLiAqKioqKioqKioqKioqKioqL1xuc3R5bGVTaGVldC5pbmplY3QoKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuLy8gLyoqKioqKioqKioqKioqKiogICAgICBUTyBUSEUgTU9PT09PT09OICAgICAqKioqKioqKioqKioqKioqL1xuXG4vLyBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byB0b2dnbGUgc3BlZWR5XG5mdW5jdGlvbiBzcGVlZHkoYm9vbCkge1xuICByZXR1cm4gc3R5bGVTaGVldC5zcGVlZHkoYm9vbCk7XG59XG5cbi8vIHBsdWdpbnNcbi8vIHdlIGluY2x1ZGUgdGhlc2UgYnkgZGVmYXVsdFxudmFyIHBsdWdpbnMgPSBleHBvcnRzLnBsdWdpbnMgPSBzdHlsZVNoZWV0LnBsdWdpbnMgPSBuZXcgX3BsdWdpbnMuUGx1Z2luU2V0KF9wbHVnaW5zLnByZWZpeGVzLCBfcGx1Z2lucy5mYWxsYmFja3MpO1xucGx1Z2lucy5tZWRpYSA9IG5ldyBfcGx1Z2lucy5QbHVnaW5TZXQoKTsgLy8gbmVhdCEgbWVkaWEsIGZvbnQtZmFjZSwga2V5ZnJhbWVzXG5wbHVnaW5zLmZvbnRGYWNlID0gbmV3IF9wbHVnaW5zLlBsdWdpblNldCgpO1xucGx1Z2lucy5rZXlmcmFtZXMgPSBuZXcgX3BsdWdpbnMuUGx1Z2luU2V0KF9wbHVnaW5zLnByZWZpeGVzKTtcblxuLy8gZGVmaW5lIHNvbWUgY29uc3RhbnRzXG5cbnZhciBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8ICFwcm9jZXNzLmVudi5OT0RFX0VOVjtcbnZhciBpc1Rlc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnO1xuXG4vKioqKiBzaW11bGF0aW9ucyAgKioqKi9cblxuLy8gYSBmbGFnIHRvIGVuYWJsZSBzaW11bGF0aW9uIG1ldGEgdGFncyBvbiBkb20gbm9kZXNcbi8vIGRlZmF1bHRzIHRvIHRydWUgaW4gZGV2IG1vZGUuIHJlY29tbWVuZCAqbm90KiB0b1xuLy8gdG9nZ2xlIG9mdGVuLlxudmFyIGNhblNpbXVsYXRlID0gaXNEZXY7XG5cbi8vIHdlIHVzZSB0aGVzZSBmbGFncyBmb3IgaXNzdWluZyB3YXJuaW5ncyB3aGVuIHNpbXVsYXRlIGlzIGNhbGxlZFxuLy8gaW4gcHJvZCAvIGluIGluY29ycmVjdCBvcmRlclxudmFyIHdhcm5lZDEgPSBmYWxzZSxcbiAgICB3YXJuZWQyID0gZmFsc2U7XG5cbi8vIHRvZ2dsZXMgc2ltdWxhdGlvbiBhY3Rpdml0eS4gc2hvdWxkbid0IGJlIG5lZWRlZCBpbiBtb3N0IGNhc2VzXG5mdW5jdGlvbiBzaW11bGF0aW9ucygpIHtcbiAgdmFyIGJvb2wgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgY2FuU2ltdWxhdGUgPSAhIWJvb2w7XG59XG5cbi8vIHVzZSB0aGlzIG9uIGRvbSBub2RlcyB0byAnc2ltdWxhdGUnIHBzZXVkb2NsYXNzZXNcbi8vIDxkaXYgey4uLmhvdmVyKHsgY29sb3I6ICdyZWQnIH0pfSB7Li4uc2ltdWxhdGUoJ2hvdmVyJywgJ3Zpc2l0ZWQnKX0+Li4uPC9kaXY+XG4vLyB5b3UgY2FuIGV2ZW4gc2VuZCBpbiBzb21lIHdlaXJkIG9uZXMsIGFzIGxvbmcgYXMgaXQncyBpbiBzaW1wbGUgZm9ybWF0XG4vLyBhbmQgbWF0Y2hlcyBhbiBleGlzdGluZyBydWxlIG9uIHRoZSBlbGVtZW50XG4vLyBlZyBzaW11bGF0ZSgnbnRoQ2hpbGQyJywgJzpob3ZlcjphY3RpdmUnKSBldGNcbmZ1bmN0aW9uIHNpbXVsYXRlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHNldWRvcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBzZXVkb3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBwc2V1ZG9zID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkocHNldWRvcyk7XG4gIGlmICghcHNldWRvcykgcmV0dXJuIHt9O1xuICBpZiAoIWNhblNpbXVsYXRlKSB7XG4gICAgaWYgKCF3YXJuZWQxKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhblxcJ3Qgc2ltdWxhdGUgd2l0aG91dCBvbmNlIGNhbGxpbmcgc2ltdWxhdGlvbnModHJ1ZSknKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIHdhcm5lZDEgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzRGV2ICYmICFpc1Rlc3QgJiYgIXdhcm5lZDIpIHtcbiAgICAgIGNvbnNvbGUud2FybignZG9uXFwndCB1c2Ugc2ltdWxhdGlvbiBvdXRzaWRlIGRldicpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgd2FybmVkMiA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gcHNldWRvcy5yZWR1Y2UoZnVuY3Rpb24gKG8sIHApIHtcbiAgICByZXR1cm4gb1snZGF0YS1zaW11bGF0ZS0nICsgc2ltcGxlKHApXSA9ICcnLCBvO1xuICB9LCB7fSk7XG59XG5cbi8qKioqIGxhYmVscyAqKioqL1xuLy8gdG9nZ2xlIGZvciBkZWJ1ZyBsYWJlbHMuXG4vLyAqc2hvdWxkbid0KiBoYXZlIHRvIG1lc3Mgd2l0aCB0aGlzIG1hbnVhbGx5XG52YXIgaGFzTGFiZWxzID0gaXNEZXY7XG5cbmZ1bmN0aW9uIGNzc0xhYmVscyhib29sKSB7XG4gIGhhc0xhYmVscyA9ICEhYm9vbDtcbn1cblxuLy8gdGFrZXMgYSBzdHJpbmcsIGNvbnZlcnRzIHRvIGxvd2VyY2FzZSwgc3RyaXBzIG91dCBub25hbHBoYW51bWVyaWMuXG5mdW5jdGlvbiBzaW1wbGUoc3RyKSB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpO1xufVxuXG4vLyBoYXNoZXMgYSBzdHJpbmcgdG8gc29tZXRoaW5nICd1bmlxdWUnXG4vLyB3ZSB1c2UgdGhpcyB0byBnZW5lcmF0ZSBpZHMgZm9yIHN0eWxlc1xuXG5cbmZ1bmN0aW9uIGhhc2hpZnkoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgb2JqcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgb2Jqc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfaGFzaDIuZGVmYXVsdCkob2Jqcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeCk7XG4gIH0pLmpvaW4oJycpKS50b1N0cmluZygzNik7XG59XG5cbi8vIG9mIHNoYXBlIHsgJ2RhdGEtY3NzLTxpZD4nOiAnJyB9XG5mdW5jdGlvbiBpc0xpa2VSdWxlKHJ1bGUpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhydWxlKS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geCAhPT0gJ3RvU3RyaW5nJztcbiAgfSk7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gISEvZGF0YVxcLWNzc1xcLShbYS16QS1aMC05XSspLy5leGVjKGtleXNbMF0pO1xufVxuXG4vLyBleHRyYWN0cyBpZCBmcm9tIGEgeyAnZGF0YS1jc3MtPGlkPic6ICcnfSBsaWtlIG9iamVjdFxuZnVuY3Rpb24gaWRGb3IocnVsZSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJ1bGUpLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4ICE9PSAndG9TdHJpbmcnO1xuICB9KTtcbiAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIHJ1bGUnKTtcbiAgdmFyIHJlZ2V4ID0gL2RhdGFcXC1jc3NcXC0oW2EtekEtWjAtOV0rKS87XG4gIHZhciBtYXRjaCA9IHJlZ2V4LmV4ZWMoa2V5c1swXSk7XG4gIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcignbm90IGEgcnVsZScpO1xuICByZXR1cm4gbWF0Y2hbMV07XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yKGlkLCBwYXRoKSB7XG5cbiAgaWYgKCFpZCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcJi9nLCAnJyk7XG4gIH1cbiAgaWYgKCFwYXRoKSByZXR1cm4gJy5jc3MtJyArIGlkICsgJyxbZGF0YS1jc3MtJyArIGlkICsgJ10nO1xuXG4gIHZhciB4ID0gcGF0aC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4LmluZGV4T2YoJyYnKSA+PSAwID8gW3gucmVwbGFjZSgvXFwmL21nLCAnLmNzcy0nICsgaWQpLCB4LnJlcGxhY2UoL1xcJi9tZywgJ1tkYXRhLWNzcy0nICsgaWQgKyAnXScpXS5qb2luKCcsJykgLy8gdG9kbyAtIG1ha2Ugc3VyZSBlYWNoIHN1YiBzZWxlY3RvciBoYXMgYW4gJlxuICAgIDogJy5jc3MtJyArIGlkICsgeCArICcsW2RhdGEtY3NzLScgKyBpZCArICddJyArIHg7XG4gIH0pLmpvaW4oJywnKTtcblxuICBpZiAoY2FuU2ltdWxhdGUgJiYgL15cXCZcXDovLmV4ZWMocGF0aCkgJiYgIS9cXHMvLmV4ZWMocGF0aCkpIHtcbiAgICB4ICs9ICcsLmNzcy0nICsgaWQgKyAnW2RhdGEtc2ltdWxhdGUtJyArIHNpbXBsZShwYXRoKSArICddLFtkYXRhLWNzcy0nICsgaWQgKyAnXVtkYXRhLXNpbXVsYXRlLScgKyBzaW1wbGUocGF0aCkgKyAnXSc7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIHRvQ1NTKF9yZWYpIHtcbiAgdmFyIHNlbGVjdG9yID0gX3JlZi5zZWxlY3RvcixcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICB2YXIgcmVzdWx0ID0gcGx1Z2lucy50cmFuc2Zvcm0oeyBzZWxlY3Rvcjogc2VsZWN0b3IsIHN0eWxlOiBzdHlsZSB9KTtcbiAgcmV0dXJuIHJlc3VsdC5zZWxlY3RvciArICd7JyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvclN0eWxlcykocmVzdWx0LnN0eWxlKSArICd9Jztcbn1cblxuZnVuY3Rpb24gZGVjb25zdHJ1Y3Qoc3R5bGUpIHtcbiAgLy8gd2UgY2FuIGJlIHN1cmUgaXQncyBub3QgaW5maW5pdGVseSBuZXN0ZWQgaGVyZSBcbiAgdmFyIHBsYWluID0gdm9pZCAwLFxuICAgICAgc2VsZWN0cyA9IHZvaWQgMCxcbiAgICAgIG1lZGlhcyA9IHZvaWQgMCxcbiAgICAgIHN1cHBvcnRzID0gdm9pZCAwO1xuICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleS5pbmRleE9mKCcmJykgPj0gMCkge1xuICAgICAgc2VsZWN0cyA9IHNlbGVjdHMgfHwge307XG4gICAgICBzZWxlY3RzW2tleV0gPSBzdHlsZVtrZXldO1xuICAgIH0gZWxzZSBpZiAoa2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBtZWRpYXMgPSBtZWRpYXMgfHwge307XG4gICAgICBtZWRpYXNba2V5XSA9IGRlY29uc3RydWN0KHN0eWxlW2tleV0pO1xuICAgIH0gZWxzZSBpZiAoa2V5LmluZGV4T2YoJ0BzdXBwb3J0cycpID09PSAwKSB7XG4gICAgICBzdXBwb3J0cyA9IHN1cHBvcnRzIHx8IHt9O1xuICAgICAgc3VwcG9ydHNba2V5XSA9IGRlY29uc3RydWN0KHN0eWxlW2tleV0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbGFiZWwnKSB7XG4gICAgICBpZiAoc3R5bGUubGFiZWwubGVuZ3RoID4gMCkge1xuICAgICAgICBwbGFpbiA9IHBsYWluIHx8IHt9O1xuICAgICAgICBwbGFpbi5sYWJlbCA9IHN0eWxlLmxhYmVsLmpvaW4oJy4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGxhaW4gPSBwbGFpbiB8fCB7fTtcbiAgICAgIHBsYWluW2tleV0gPSBzdHlsZVtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7IHBsYWluOiBwbGFpbiwgc2VsZWN0czogc2VsZWN0cywgbWVkaWFzOiBtZWRpYXMsIHN1cHBvcnRzOiBzdXBwb3J0cyB9O1xufVxuXG5mdW5jdGlvbiBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhpZCwgc3R5bGUpIHtcbiAgdmFyIGNzcyA9IFtdO1xuXG4gIC8vIHBsdWdpbnMgaGVyZVxuICB2YXIgcGxhaW4gPSBzdHlsZS5wbGFpbixcbiAgICAgIHNlbGVjdHMgPSBzdHlsZS5zZWxlY3RzLFxuICAgICAgbWVkaWFzID0gc3R5bGUubWVkaWFzLFxuICAgICAgc3VwcG9ydHMgPSBzdHlsZS5zdXBwb3J0cztcblxuICBpZiAocGxhaW4pIHtcbiAgICBjc3MucHVzaCh0b0NTUyh7IHN0eWxlOiBwbGFpbiwgc2VsZWN0b3I6IHNlbGVjdG9yKGlkKSB9KSk7XG4gIH1cbiAgaWYgKHNlbGVjdHMpIHtcbiAgICBPYmplY3Qua2V5cyhzZWxlY3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjc3MucHVzaCh0b0NTUyh7IHN0eWxlOiBzZWxlY3RzW2tleV0sIHNlbGVjdG9yOiBzZWxlY3RvcihpZCwga2V5KSB9KSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG1lZGlhcykge1xuICAgIE9iamVjdC5rZXlzKG1lZGlhcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gY3NzLnB1c2goa2V5ICsgJ3snICsgZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1MoaWQsIG1lZGlhc1trZXldKS5qb2luKCcnKSArICd9Jyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHN1cHBvcnRzKSB7XG4gICAgT2JqZWN0LmtleXMoc3VwcG9ydHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGNzcy5wdXNoKGtleSArICd7JyArIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGlkLCBzdXBwb3J0c1trZXldKS5qb2luKCcnKSArICd9Jyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNzcztcbn1cblxuLy8gdGhpcyBjYWNoZSB0byB0cmFjayB3aGljaCBydWxlcyBoYXZlXG4vLyBiZWVuIGluc2VydGVkIGludG8gdGhlIHN0eWxlc2hlZXRcbnZhciBpbnNlcnRlZCA9IHN0eWxlU2hlZXQuaW5zZXJ0ZWQgPSB7fTtcblxuLy8gYW5kIGhlbHBlcnMgdG8gaW5zZXJ0IHJ1bGVzIGludG8gc2FpZCBzdHlsZVNoZWV0XG5mdW5jdGlvbiBpbnNlcnQoc3BlYykge1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSB0cnVlO1xuICAgIHZhciBkZWNvbnN0cnVjdGVkID0gZGVjb25zdHJ1Y3Qoc3BlYy5zdHlsZSk7XG4gICAgZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1Moc3BlYy5pZCwgZGVjb25zdHJ1Y3RlZCkubWFwKGZ1bmN0aW9uIChjc3NSdWxlKSB7XG4gICAgICByZXR1cm4gc3R5bGVTaGVldC5pbnNlcnQoY3NzUnVsZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gYSBzaW1wbGUgY2FjaGUgdG8gc3RvcmUgZ2VuZXJhdGVkIHJ1bGVzXG52YXIgcmVnaXN0ZXJlZCA9IHN0eWxlU2hlZXQucmVnaXN0ZXJlZCA9IHt9O1xuZnVuY3Rpb24gcmVnaXN0ZXIoc3BlYykge1xuICBpZiAoIXJlZ2lzdGVyZWRbc3BlYy5pZF0pIHtcbiAgICByZWdpc3RlcmVkW3NwZWMuaWRdID0gc3BlYztcbiAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0UmVnaXN0ZXJlZChydWxlKSB7XG4gIGlmIChpc0xpa2VSdWxlKHJ1bGUpKSB7XG4gICAgdmFyIHJldCA9IHJlZ2lzdGVyZWRbaWRGb3IocnVsZSldO1xuICAgIGlmIChyZXQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbZ2xhbW9yXSBhbiB1bmV4cGVjdGVkIHJ1bGUgY2FjaGUgbWlzcyBvY2N1cnJlZC4gVGhpcyBpcyBwcm9iYWJseSBhIHNpZ24gb2YgbXVsdGlwbGUgZ2xhbW9yIGluc3RhbmNlcyBpbiB5b3VyIGFwcC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9pc3N1ZXMvNzknKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICByZXR1cm4gcnVsZTtcbn1cblxuLy8gdG9kbyAtIHBlcmZcbnZhciBydWxlQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIHRvUnVsZShzcGVjKSB7XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpbnNlcnQoc3BlYyk7XG4gIGlmIChydWxlQ2FjaGVbc3BlYy5pZF0pIHtcbiAgICByZXR1cm4gcnVsZUNhY2hlW3NwZWMuaWRdO1xuICB9XG5cbiAgdmFyIHJldCA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgJ2RhdGEtY3NzLScgKyBzcGVjLmlkLCBoYXNMYWJlbHMgPyBzcGVjLmxhYmVsIHx8ICcnIDogJycpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0LCAndG9TdHJpbmcnLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiAnY3NzLScgKyBzcGVjLmlkO1xuICAgIH1cbiAgfSk7XG4gIHJ1bGVDYWNoZVtzcGVjLmlkXSA9IHJldDtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29uc29sZS5sb2codGhpcyk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yKGtleSkge1xuICB2YXIgcG9zc2libGVzID0gWyc6JywgJy4nLCAnWycsICc+JywgJyAnXSxcbiAgICAgIGZvdW5kID0gZmFsc2UsXG4gICAgICBjaCA9IGtleS5jaGFyQXQoMCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zc2libGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNoID09PSBwb3NzaWJsZXNbaV0pIHtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm91bmQgfHwga2V5LmluZGV4T2YoJyYnKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBqb2luU2VsZWN0b3JzKGEsIGIpIHtcbiAgdmFyIGFzID0gYS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiAhKGEuaW5kZXhPZignJicpID49IDApID8gJyYnICsgYSA6IGE7XG4gIH0pO1xuICB2YXIgYnMgPSBiLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuICEoYi5pbmRleE9mKCcmJykgPj0gMCkgPyAnJicgKyBiIDogYjtcbiAgfSk7XG5cbiAgcmV0dXJuIGJzLnJlZHVjZShmdW5jdGlvbiAoYXJyLCBiKSB7XG4gICAgcmV0dXJuIGFyci5jb25jYXQoYXMubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gYi5yZXBsYWNlKC9cXCYvZywgYSk7XG4gICAgfSkpO1xuICB9LCBbXSkuam9pbignLCcpO1xufVxuXG5mdW5jdGlvbiBqb2luTWVkaWFRdWVyaWVzKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyAnQG1lZGlhICcgKyBhLnN1YnN0cmluZyg2KSArICcgYW5kICcgKyBiLnN1YnN0cmluZyg2KSA6IGI7XG59XG5cbmZ1bmN0aW9uIGlzTWVkaWFRdWVyeShrZXkpIHtcbiAgcmV0dXJuIGtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNTdXBwb3J0cyhrZXkpIHtcbiAgcmV0dXJuIGtleS5pbmRleE9mKCdAc3VwcG9ydHMnKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gam9pblN1cHBvcnRzKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyAnQHN1cHBvcnRzICcgKyBhLnN1YnN0cmluZyg5KSArICcgYW5kICcgKyBiLnN1YnN0cmluZyg5KSA6IGI7XG59XG5cbi8vIGZsYXR0ZW4gYSBuZXN0ZWQgYXJyYXlcbmZ1bmN0aW9uIGZsYXR0ZW4oaW5BcnIpIHtcbiAgdmFyIGFyciA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5BcnJbaV0pKSBhcnIgPSBhcnIuY29uY2F0KGZsYXR0ZW4oaW5BcnJbaV0pKTtlbHNlIGFyciA9IGFyci5jb25jYXQoaW5BcnJbaV0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbi8vIG11dGFibGUhIG1vZGlmaWVzIGRlc3QuXG5mdW5jdGlvbiBidWlsZChkZXN0LCBfcmVmMikge1xuICB2YXIgX3JlZjIkc2VsZWN0b3IgPSBfcmVmMi5zZWxlY3RvcixcbiAgICAgIHNlbGVjdG9yID0gX3JlZjIkc2VsZWN0b3IgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjIkc2VsZWN0b3IsXG4gICAgICBfcmVmMiRtcSA9IF9yZWYyLm1xLFxuICAgICAgbXEgPSBfcmVmMiRtcSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiRtcSxcbiAgICAgIF9yZWYyJHN1cHAgPSBfcmVmMi5zdXBwLFxuICAgICAgc3VwcCA9IF9yZWYyJHN1cHAgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjIkc3VwcCxcbiAgICAgIF9yZWYyJHNyYyA9IF9yZWYyLnNyYyxcbiAgICAgIHNyYyA9IF9yZWYyJHNyYyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMiRzcmM7XG5cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgIHNyYyA9IFtzcmNdO1xuICB9XG4gIHNyYyA9IGZsYXR0ZW4oc3JjKTtcblxuICBzcmMuZm9yRWFjaChmdW5jdGlvbiAoX3NyYykge1xuICAgIGlmIChpc0xpa2VSdWxlKF9zcmMpKSB7XG4gICAgICB2YXIgcmVnID0gX2dldFJlZ2lzdGVyZWQoX3NyYyk7XG4gICAgICBpZiAocmVnLnR5cGUgIT09ICdjc3MnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IG1lcmdlIHRoaXMgcnVsZScpO1xuICAgICAgfVxuICAgICAgX3NyYyA9IHJlZy5zdHlsZTtcbiAgICB9XG4gICAgX3NyYyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKF9zcmMpO1xuICAgIGlmIChfc3JjLmNvbXBvc2VzKSB7XG4gICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgbXE6IG1xLCBzdXBwOiBzdXBwLCBzcmM6IF9zcmMuY29tcG9zZXMgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKF9zcmMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGlzU2VsZWN0b3Ioa2V5KSkge1xuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yID09PSAnOjpwbGFjZWhvbGRlcicgPyAnOjpwbGFjZWhvbGRlciwgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCA6Oi1tb3otcGxhY2Vob2xkZXIsIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJyA6IHNlbGVjdG9yO1xuXG4gICAgICAgIGJ1aWxkKGRlc3QsIHsgc2VsZWN0b3I6IGpvaW5TZWxlY3RvcnMoc2VsZWN0b3IsIGtleSksIG1xOiBtcSwgc3VwcDogc3VwcCwgc3JjOiBfc3JjW2tleV0gfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTWVkaWFRdWVyeShrZXkpKSB7XG4gICAgICAgIGJ1aWxkKGRlc3QsIHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBtcTogam9pbk1lZGlhUXVlcmllcyhtcSwga2V5KSwgc3VwcDogc3VwcCwgc3JjOiBfc3JjW2tleV0gfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU3VwcG9ydHMoa2V5KSkge1xuICAgICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgbXE6IG1xLCBzdXBwOiBqb2luU3VwcG9ydHMoc3VwcCwga2V5KSwgc3JjOiBfc3JjW2tleV0gfSk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NvbXBvc2VzJykge1xuICAgICAgICAvLyBpZ25vcmUsIHdlIGFscmVhZHkgZGVhbHRoIHdpdGggaXRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfZGVzdCA9IGRlc3Q7XG4gICAgICAgIGlmIChzdXBwKSB7XG4gICAgICAgICAgX2Rlc3Rbc3VwcF0gPSBfZGVzdFtzdXBwXSB8fCB7fTtcbiAgICAgICAgICBfZGVzdCA9IF9kZXN0W3N1cHBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtcSkge1xuICAgICAgICAgIF9kZXN0W21xXSA9IF9kZXN0W21xXSB8fCB7fTtcbiAgICAgICAgICBfZGVzdCA9IF9kZXN0W21xXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICBfZGVzdFtzZWxlY3Rvcl0gPSBfZGVzdFtzZWxlY3Rvcl0gfHwge307XG4gICAgICAgICAgX2Rlc3QgPSBfZGVzdFtzZWxlY3Rvcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnbGFiZWwnICYmIGhhc0xhYmVscykge1xuICAgICAgICAgIGRlc3QubGFiZWwgPSBkZXN0LmxhYmVsLmNvbmNhdChfc3JjLmxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfZGVzdFtrZXldID0gX3NyY1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfY3NzKHJ1bGVzKSB7XG4gIHZhciBzdHlsZSA9IHsgbGFiZWw6IFtdIH07XG4gIGJ1aWxkKHN0eWxlLCB7IHNyYzogcnVsZXMgfSk7IC8vIG11dGF0aXZlISBidXQgd29ydGggaXQuIFxuXG4gIHZhciBzcGVjID0ge1xuICAgIGlkOiBoYXNoaWZ5KHN0eWxlKSxcbiAgICBzdHlsZTogc3R5bGUsIGxhYmVsOiBzdHlsZS5sYWJlbC5qb2luKCcuJyksXG4gICAgdHlwZTogJ2NzcydcbiAgfTtcbiAgcmV0dXJuIHRvUnVsZShzcGVjKTtcbn1cblxudmFyIG51bGxydWxlID0ge1xuICAvLyAnZGF0YS1jc3MtbmlsJzogJydcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobnVsbHJ1bGUsICd0b1N0cmluZycsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICByZXR1cm4gJ2Nzcy1uaWwnO1xuICB9XG59KTtcblxuZnVuY3Rpb24gY3NzKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBydWxlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgaWYgKHJ1bGVzWzBdICYmIHJ1bGVzWzBdLmxlbmd0aCAmJiBydWxlc1swXS5yYXcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBmb3Jnb3QgdG8gaW5jbHVkZSBnbGFtb3IvYmFiZWwgaW4geW91ciBiYWJlbCBwbHVnaW5zLicpO1xuICB9XG5cbiAgcnVsZXMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShydWxlcyk7XG4gIGlmICghcnVsZXMpIHtcbiAgICByZXR1cm4gbnVsbHJ1bGU7IC8vIHRvZG8gLSBudWxscnVsZSBcbiAgfVxuXG4gIHJldHVybiBfY3NzKHJ1bGVzKTtcbn1cblxuY3NzLmluc2VydCA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkoY3NzKSxcbiAgICBjc3M6IGNzcyxcbiAgICB0eXBlOiAncmF3J1xuICB9O1xuICByZWdpc3RlcihzcGVjKTtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0KHNwZWMuY3NzKTtcbiAgICBpbnNlcnRlZFtzcGVjLmlkXSA9IHRydWU7XG4gIH1cbn07XG5cbnZhciBpbnNlcnRSdWxlID0gZXhwb3J0cy5pbnNlcnRSdWxlID0gY3NzLmluc2VydDtcblxuY3NzLmdsb2JhbCA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc3R5bGUpIHtcbiAgcmV0dXJuIGNzcy5pbnNlcnQoc2VsZWN0b3IgKyAneycgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMpKHN0eWxlKSArICd9Jyk7XG59O1xuXG52YXIgaW5zZXJ0R2xvYmFsID0gZXhwb3J0cy5pbnNlcnRHbG9iYWwgPSBjc3MuZ2xvYmFsO1xuXG5mdW5jdGlvbiBpbnNlcnRLZXlmcmFtZShzcGVjKSB7XG4gIGlmICghaW5zZXJ0ZWRbc3BlYy5pZF0pIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyID0gT2JqZWN0LmtleXMoc3BlYy5rZXlmcmFtZXMpLm1hcChmdW5jdGlvbiAoa2YpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBsdWdpbnMua2V5ZnJhbWVzLnRyYW5zZm9ybSh7IGlkOiBzcGVjLmlkLCBuYW1lOiBrZiwgc3R5bGU6IHNwZWMua2V5ZnJhbWVzW2tmXSB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5uYW1lICsgJ3snICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9yU3R5bGVzKShyZXN1bHQuc3R5bGUpICsgJ30nO1xuICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgIFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJyddLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICByZXR1cm4gc3R5bGVTaGVldC5pbnNlcnQoJ0AnICsgcHJlZml4ICsgJ2tleWZyYW1lcyAnICsgKHNwZWMubmFtZSArICdfJyArIHNwZWMuaWQpICsgJ3snICsgaW5uZXIgKyAnfScpO1xuICAgICAgfSk7XG5cbiAgICAgIGluc2VydGVkW3NwZWMuaWRdID0gdHJ1ZTtcbiAgICB9KSgpO1xuICB9XG59XG5jc3Mua2V5ZnJhbWVzID0gZnVuY3Rpb24gKG5hbWUsIGtmcykge1xuICBpZiAoIWtmcykge1xuICAgIGtmcyA9IG5hbWUsIG5hbWUgPSAnYW5pbWF0aW9uJztcbiAgfVxuXG4gIC8vIGRvIG5vdCBpZ25vcmUgZW1wdHkga2V5ZnJhbWUgZGVmaW5pdGlvbnMgZm9yIG5vdy5cbiAga2ZzID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkoa2ZzKSB8fCB7fTtcbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkobmFtZSwga2ZzKSxcbiAgICB0eXBlOiAna2V5ZnJhbWVzJyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIGtleWZyYW1lczoga2ZzXG4gIH07XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpbnNlcnRLZXlmcmFtZShzcGVjKTtcbiAgcmV0dXJuIG5hbWUgKyAnXycgKyBzcGVjLmlkO1xufTtcblxudmFyIGZvbnRGYWNlID0gZXhwb3J0cy5mb250RmFjZSA9IGNzcy5mb250RmFjZTtcbnZhciBrZXlmcmFtZXMgPSBleHBvcnRzLmtleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXM7XG5cbmZ1bmN0aW9uIGluc2VydEZvbnRGYWNlKHNwZWMpIHtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0KCdAZm9udC1mYWNleycgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMpKHNwZWMuZm9udCkgKyAnfScpO1xuICAgIGluc2VydGVkW3NwZWMuaWRdID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyB3ZSBkb24ndCBnbyBhbGwgb3V0IGZvciBmb250cyBhcyBtdWNoLCBnaXZpbmcgYSBzaW1wbGUgZm9udCBsb2FkaW5nIHN0cmF0ZWd5XG4vLyB1c2UgYSBmYW5jaWVyIGxpYiBpZiB5b3UgbmVlZCBtb2FyIHBvd2VyXG5jc3MuZm9udEZhY2UgPSBmdW5jdGlvbiAoZm9udCkge1xuICBmb250ID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkoZm9udCk7XG4gIHZhciBzcGVjID0ge1xuICAgIGlkOiBoYXNoaWZ5KGZvbnQpLFxuICAgIHR5cGU6ICdmb250LWZhY2UnLFxuICAgIGZvbnQ6IGZvbnRcbiAgfTtcbiAgcmVnaXN0ZXIoc3BlYyk7XG4gIGluc2VydEZvbnRGYWNlKHNwZWMpO1xuXG4gIHJldHVybiBmb250LmZvbnRGYW1pbHk7XG59O1xuXG4vLyByZWh5ZHJhdGUgdGhlIGluc2VydGlvbiBjYWNoZSB3aXRoIGlkcyBzZW50IGZyb21cbi8vIHJlbmRlclN0YXRpYyAvIHJlbmRlclN0YXRpY09wdGltaXplZFxuZnVuY3Rpb24gcmVoeWRyYXRlKGlkcykge1xuICAvLyBsb2FkIHVwIGlkc1xuICBPYmplY3QuYXNzaWduKGluc2VydGVkLCBpZHMucmVkdWNlKGZ1bmN0aW9uIChvLCBpKSB7XG4gICAgcmV0dXJuIG9baV0gPSB0cnVlLCBvO1xuICB9LCB7fSkpO1xuICAvLyBhc3N1bWUgY3NzIGxvYWRlZCBzZXBhcmF0ZWx5XG59XG5cbi8vIGNsZWFycyBvdXQgdGhlIGNhY2hlIGFuZCBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0XG4vLyBiZXN0IGZvciB0ZXN0cywgdGhvdWdoIHRoZXJlIG1pZ2h0IGJlIHNvbWUgdmFsdWUgZm9yIFNTUi5cblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIGluc2VydGVkID0gc3R5bGVTaGVldC5pbnNlcnRlZCA9IHt9O1xuICByZWdpc3RlcmVkID0gc3R5bGVTaGVldC5yZWdpc3RlcmVkID0ge307XG4gIHJ1bGVDYWNoZSA9IHt9O1xuICBzdHlsZVNoZWV0LmZsdXNoKCk7XG4gIHN0eWxlU2hlZXQuaW5qZWN0KCk7XG59XG5cbnZhciBwcmVzZXRzID0gZXhwb3J0cy5wcmVzZXRzID0ge1xuICBtb2JpbGU6ICcobWluLXdpZHRoOiA0MDBweCknLFxuICBNb2JpbGU6ICdAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpJyxcbiAgcGhhYmxldDogJyhtaW4td2lkdGg6IDU1MHB4KScsXG4gIFBoYWJsZXQ6ICdAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpJyxcbiAgdGFibGV0OiAnKG1pbi13aWR0aDogNzUwcHgpJyxcbiAgVGFibGV0OiAnQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KScsXG4gIGRlc2t0b3A6ICcobWluLXdpZHRoOiAxMDAwcHgpJyxcbiAgRGVza3RvcDogJ0BtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpJyxcbiAgaGQ6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgSGQ6ICdAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSdcbn07XG5cbnZhciBzdHlsZSA9IGV4cG9ydHMuc3R5bGUgPSBjc3M7XG5cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBzdHlsZXNbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHN0eWxlKHN0eWxlcyk7XG4gIH1cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdG9yLCBzdHlsZXMpKTtcbn1cbnZhciAkID0gZXhwb3J0cy4kID0gc2VsZWN0O1xuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgc3R5bGVzW19rZXk1IC0gMV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdG9yICsgJyAmJywgc3R5bGVzKSk7XG59XG5cbnZhciBtZXJnZSA9IGV4cG9ydHMubWVyZ2UgPSBjc3M7XG52YXIgY29tcG9zZSA9IGV4cG9ydHMuY29tcG9zZSA9IGNzcztcblxuZnVuY3Rpb24gbWVkaWEocXVlcnkpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBydWxlcyA9IEFycmF5KF9sZW42ID4gMSA/IF9sZW42IC0gMSA6IDApLCBfa2V5NiA9IDE7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBydWxlc1tfa2V5NiAtIDFdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgfVxuXG4gIHJldHVybiBjc3MoX2RlZmluZVByb3BlcnR5KHt9LCAnQG1lZGlhICcgKyBxdWVyeSwgcnVsZXMpKTtcbn1cblxuZnVuY3Rpb24gcHNldWRvKHNlbGVjdG9yKSB7XG4gIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbjcgPiAxID8gX2xlbjcgLSAxIDogMCksIF9rZXk3ID0gMTsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgIHN0eWxlc1tfa2V5NyAtIDFdID0gYXJndW1lbnRzW19rZXk3XTtcbiAgfVxuXG4gIHJldHVybiBjc3MoX2RlZmluZVByb3BlcnR5KHt9LCBzZWxlY3Rvciwgc3R5bGVzKSk7XG59XG5cbi8vIGFsbGxsbGwgdGhlIHBzZXVkb2NsYXNzZXNcblxuZnVuY3Rpb24gYWN0aXZlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmFjdGl2ZScsIHgpO1xufVxuXG5mdW5jdGlvbiBhbnkoeCkge1xuICByZXR1cm4gcHNldWRvKCc6YW55JywgeCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Y2hlY2tlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpkaXNhYmxlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBlbXB0eSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzplbXB0eScsIHgpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmVuYWJsZWQnLCB4KTtcbn1cblxuZnVuY3Rpb24gX2RlZmF1bHQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZGVmYXVsdCcsIHgpOyAvLyBub3RlICdfZGVmYXVsdCcgbmFtZVxufVxuXG5mdW5jdGlvbiBmaXJzdCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmaXJzdCcsIHgpO1xufVxuXG5mdW5jdGlvbiBmaXJzdENoaWxkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZpcnN0LWNoaWxkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0T2ZUeXBlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZpcnN0LW9mLXR5cGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gZnVsbHNjcmVlbih4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmdWxsc2NyZWVuJywgeCk7XG59XG5cbmZ1bmN0aW9uIGZvY3VzKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZvY3VzJywgeCk7XG59XG5cbmZ1bmN0aW9uIGhvdmVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmhvdmVyJywgeCk7XG59XG5cbmZ1bmN0aW9uIGluZGV0ZXJtaW5hdGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aW5kZXRlcm1pbmF0ZScsIHgpO1xufVxuXG5mdW5jdGlvbiBpblJhbmdlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmluLXJhbmdlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGludmFsaWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aW52YWxpZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBsYXN0Q2hpbGQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGFzdC1jaGlsZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBsYXN0T2ZUeXBlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxhc3Qtb2YtdHlwZScsIHgpO1xufVxuXG5mdW5jdGlvbiBsZWZ0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxlZnQnLCB4KTtcbn1cblxuZnVuY3Rpb24gbGluayh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsaW5rJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpvbmx5LWNoaWxkJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9ubHlPZlR5cGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b25seS1vZi10eXBlJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm9wdGlvbmFsJywgeCk7XG59XG5cbmZ1bmN0aW9uIG91dE9mUmFuZ2UoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b3V0LW9mLXJhbmdlJywgeCk7XG59XG5cbmZ1bmN0aW9uIHJlYWRPbmx5KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJlYWQtb25seScsIHgpO1xufVxuXG5mdW5jdGlvbiByZWFkV3JpdGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cmVhZC13cml0ZScsIHgpO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyZXF1aXJlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiByaWdodCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyaWdodCcsIHgpO1xufVxuXG5mdW5jdGlvbiByb290KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJvb3QnLCB4KTtcbn1cblxuZnVuY3Rpb24gc2NvcGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6c2NvcGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnRhcmdldCcsIHgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzp2YWxpZCcsIHgpO1xufVxuXG5mdW5jdGlvbiB2aXNpdGVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnZpc2l0ZWQnLCB4KTtcbn1cblxuLy8gcGFyYW1ldGVyaXplZCBwc2V1ZG9jbGFzc2VzXG5mdW5jdGlvbiBkaXIocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZGlyKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIGxhbmcocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGFuZygnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBub3QocCwgeCkge1xuICAvLyBzaG91bGQgdGhpcyBiZSBhIHBsdWdpbj9cbiAgdmFyIHNlbGVjdG9yID0gcC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4LnRyaW0oKTtcbiAgfSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuICc6bm90KCcgKyB4ICsgJyknO1xuICB9KTtcbiAgaWYgKHNlbGVjdG9yLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBwc2V1ZG8oJzpub3QoJyArIHAgKyAnKScsIHgpO1xuICB9XG4gIHJldHVybiBzZWxlY3Qoc2VsZWN0b3Iuam9pbignJyksIHgpO1xufVxuZnVuY3Rpb24gbnRoQ2hpbGQocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bnRoLWNoaWxkKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIG50aExhc3RDaGlsZChwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpudGgtbGFzdC1jaGlsZCgnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBudGhMYXN0T2ZUeXBlKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1sYXN0LW9mLXR5cGUoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbnRoT2ZUeXBlKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1vZi10eXBlKCcgKyBwICsgJyknLCB4KTtcbn1cblxuLy8gcHNldWRvZWxlbWVudHNcbmZ1bmN0aW9uIGFmdGVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjphZnRlcicsIHgpO1xufVxuZnVuY3Rpb24gYmVmb3JlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpiZWZvcmUnLCB4KTtcbn1cbmZ1bmN0aW9uIGZpcnN0TGV0dGVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpmaXJzdC1sZXR0ZXInLCB4KTtcbn1cbmZ1bmN0aW9uIGZpcnN0TGluZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzo6Zmlyc3QtbGluZScsIHgpO1xufVxuZnVuY3Rpb24gc2VsZWN0aW9uKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpzZWxlY3Rpb24nLCB4KTtcbn1cbmZ1bmN0aW9uIGJhY2tkcm9wKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpiYWNrZHJvcCcsIHgpO1xufVxuZnVuY3Rpb24gcGxhY2Vob2xkZXIoeCkge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvaXNzdWVzLzE0XG4gIHJldHVybiBjc3MoeyAnOjpwbGFjZWhvbGRlcic6IHggfSk7XG59XG5cbi8qKiogaGVscGVycyBmb3Igd2ViIGNvbXBvbmVudHMgKioqL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2lzc3Vlcy8xNlxuXG5mdW5jdGlvbiBjc3NGb3IoKSB7XG4gIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgcnVsZXMgPSBBcnJheShfbGVuOCksIF9rZXk4ID0gMDsgX2tleTggPCBfbGVuODsgX2tleTgrKykge1xuICAgIHJ1bGVzW19rZXk4XSA9IGFyZ3VtZW50c1tfa2V5OF07XG4gIH1cblxuICBydWxlcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKHJ1bGVzKTtcbiAgcmV0dXJuIHJ1bGVzID8gcnVsZXMubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgdmFyIHN0eWxlID0geyBsYWJlbDogW10gfTtcbiAgICBidWlsZChzdHlsZSwgeyBzcmM6IHIgfSk7IC8vIG11dGF0aXZlISBidXQgd29ydGggaXQuICAgXG4gICAgcmV0dXJuIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGhhc2hpZnkoc3R5bGUpLCBkZWNvbnN0cnVjdChzdHlsZSkpLmpvaW4oJycpO1xuICB9KS5qb2luKCcnKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJzRm9yKCkge1xuICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICBydWxlc1tfa2V5OV0gPSBhcmd1bWVudHNbX2tleTldO1xuICB9XG5cbiAgcnVsZXMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShydWxlcyk7XG4gIHZhciBodG1sQXR0cmlidXRlcyA9IHJ1bGVzID8gcnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgaWRGb3IocnVsZSk7IC8vIHRocm93YXdheSBjaGVjayBmb3IgcnVsZVxuICAgIHZhciBrZXkgPSBPYmplY3Qua2V5cyhydWxlKVswXSxcbiAgICAgICAgdmFsdWUgPSBydWxlW2tleV07XG4gICAgcmV0dXJuIGtleSArICc9XCInICsgKHZhbHVlIHx8ICcnKSArICdcIic7XG4gIH0pLmpvaW4oJyAnKSA6ICcnO1xuXG4gIHJldHVybiBodG1sQXR0cmlidXRlcztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIEVOVElUSUVTID0gW1snQWFjdXRlJywgWzE5M11dLCBbJ2FhY3V0ZScsIFsyMjVdXSwgWydBYnJldmUnLCBbMjU4XV0sIFsnYWJyZXZlJywgWzI1OV1dLCBbJ2FjJywgWzg3NjZdXSwgWydhY2QnLCBbODc2N11dLCBbJ2FjRScsIFs4NzY2LCA4MTldXSwgWydBY2lyYycsIFsxOTRdXSwgWydhY2lyYycsIFsyMjZdXSwgWydhY3V0ZScsIFsxODBdXSwgWydBY3knLCBbMTA0MF1dLCBbJ2FjeScsIFsxMDcyXV0sIFsnQUVsaWcnLCBbMTk4XV0sIFsnYWVsaWcnLCBbMjMwXV0sIFsnYWYnLCBbODI4OV1dLCBbJ0FmcicsIFsxMjAwNjhdXSwgWydhZnInLCBbMTIwMDk0XV0sIFsnQWdyYXZlJywgWzE5Ml1dLCBbJ2FncmF2ZScsIFsyMjRdXSwgWydhbGVmc3ltJywgWzg1MDFdXSwgWydhbGVwaCcsIFs4NTAxXV0sIFsnQWxwaGEnLCBbOTEzXV0sIFsnYWxwaGEnLCBbOTQ1XV0sIFsnQW1hY3InLCBbMjU2XV0sIFsnYW1hY3InLCBbMjU3XV0sIFsnYW1hbGcnLCBbMTA4MTVdXSwgWydhbXAnLCBbMzhdXSwgWydBTVAnLCBbMzhdXSwgWydhbmRhbmQnLCBbMTA4MzddXSwgWydBbmQnLCBbMTA4MzVdXSwgWydhbmQnLCBbODc0M11dLCBbJ2FuZGQnLCBbMTA4NDRdXSwgWydhbmRzbG9wZScsIFsxMDg0MF1dLCBbJ2FuZHYnLCBbMTA4NDJdXSwgWydhbmcnLCBbODczNl1dLCBbJ2FuZ2UnLCBbMTA2NjBdXSwgWydhbmdsZScsIFs4NzM2XV0sIFsnYW5nbXNkYWEnLCBbMTA2NjRdXSwgWydhbmdtc2RhYicsIFsxMDY2NV1dLCBbJ2FuZ21zZGFjJywgWzEwNjY2XV0sIFsnYW5nbXNkYWQnLCBbMTA2NjddXSwgWydhbmdtc2RhZScsIFsxMDY2OF1dLCBbJ2FuZ21zZGFmJywgWzEwNjY5XV0sIFsnYW5nbXNkYWcnLCBbMTA2NzBdXSwgWydhbmdtc2RhaCcsIFsxMDY3MV1dLCBbJ2FuZ21zZCcsIFs4NzM3XV0sIFsnYW5ncnQnLCBbODczNV1dLCBbJ2FuZ3J0dmInLCBbODg5NF1dLCBbJ2FuZ3J0dmJkJywgWzEwNjUzXV0sIFsnYW5nc3BoJywgWzg3MzhdXSwgWydhbmdzdCcsIFsxOTddXSwgWydhbmd6YXJyJywgWzkwODRdXSwgWydBb2dvbicsIFsyNjBdXSwgWydhb2dvbicsIFsyNjFdXSwgWydBb3BmJywgWzEyMDEyMF1dLCBbJ2FvcGYnLCBbMTIwMTQ2XV0sIFsnYXBhY2lyJywgWzEwODYzXV0sIFsnYXAnLCBbODc3Nl1dLCBbJ2FwRScsIFsxMDg2NF1dLCBbJ2FwZScsIFs4Nzc4XV0sIFsnYXBpZCcsIFs4Nzc5XV0sIFsnYXBvcycsIFszOV1dLCBbJ0FwcGx5RnVuY3Rpb24nLCBbODI4OV1dLCBbJ2FwcHJveCcsIFs4Nzc2XV0sIFsnYXBwcm94ZXEnLCBbODc3OF1dLCBbJ0FyaW5nJywgWzE5N11dLCBbJ2FyaW5nJywgWzIyOV1dLCBbJ0FzY3InLCBbMTE5OTY0XV0sIFsnYXNjcicsIFsxMTk5OTBdXSwgWydBc3NpZ24nLCBbODc4OF1dLCBbJ2FzdCcsIFs0Ml1dLCBbJ2FzeW1wJywgWzg3NzZdXSwgWydhc3ltcGVxJywgWzg3ODFdXSwgWydBdGlsZGUnLCBbMTk1XV0sIFsnYXRpbGRlJywgWzIyN11dLCBbJ0F1bWwnLCBbMTk2XV0sIFsnYXVtbCcsIFsyMjhdXSwgWydhd2NvbmludCcsIFs4NzU1XV0sIFsnYXdpbnQnLCBbMTA3NjldXSwgWydiYWNrY29uZycsIFs4NzgwXV0sIFsnYmFja2Vwc2lsb24nLCBbMTAxNF1dLCBbJ2JhY2twcmltZScsIFs4MjQ1XV0sIFsnYmFja3NpbScsIFs4NzY1XV0sIFsnYmFja3NpbWVxJywgWzg5MDldXSwgWydCYWNrc2xhc2gnLCBbODcyNl1dLCBbJ0JhcnYnLCBbMTA5ODNdXSwgWydiYXJ2ZWUnLCBbODg5M11dLCBbJ2JhcndlZCcsIFs4OTY1XV0sIFsnQmFyd2VkJywgWzg5NjZdXSwgWydiYXJ3ZWRnZScsIFs4OTY1XV0sIFsnYmJyaycsIFs5MTQxXV0sIFsnYmJya3RicmsnLCBbOTE0Ml1dLCBbJ2Jjb25nJywgWzg3ODBdXSwgWydCY3knLCBbMTA0MV1dLCBbJ2JjeScsIFsxMDczXV0sIFsnYmRxdW8nLCBbODIyMl1dLCBbJ2JlY2F1cycsIFs4NzU3XV0sIFsnYmVjYXVzZScsIFs4NzU3XV0sIFsnQmVjYXVzZScsIFs4NzU3XV0sIFsnYmVtcHR5dicsIFsxMDY3Ml1dLCBbJ2JlcHNpJywgWzEwMTRdXSwgWydiZXJub3UnLCBbODQ5Ml1dLCBbJ0Jlcm5vdWxsaXMnLCBbODQ5Ml1dLCBbJ0JldGEnLCBbOTE0XV0sIFsnYmV0YScsIFs5NDZdXSwgWydiZXRoJywgWzg1MDJdXSwgWydiZXR3ZWVuJywgWzg4MTJdXSwgWydCZnInLCBbMTIwMDY5XV0sIFsnYmZyJywgWzEyMDA5NV1dLCBbJ2JpZ2NhcCcsIFs4ODk4XV0sIFsnYmlnY2lyYycsIFs5NzExXV0sIFsnYmlnY3VwJywgWzg4OTldXSwgWydiaWdvZG90JywgWzEwNzUyXV0sIFsnYmlnb3BsdXMnLCBbMTA3NTNdXSwgWydiaWdvdGltZXMnLCBbMTA3NTRdXSwgWydiaWdzcWN1cCcsIFsxMDc1OF1dLCBbJ2JpZ3N0YXInLCBbOTczM11dLCBbJ2JpZ3RyaWFuZ2xlZG93bicsIFs5NjYxXV0sIFsnYmlndHJpYW5nbGV1cCcsIFs5NjUxXV0sIFsnYmlndXBsdXMnLCBbMTA3NTZdXSwgWydiaWd2ZWUnLCBbODg5N11dLCBbJ2JpZ3dlZGdlJywgWzg4OTZdXSwgWydia2Fyb3cnLCBbMTA1MDldXSwgWydibGFja2xvemVuZ2UnLCBbMTA3MzFdXSwgWydibGFja3NxdWFyZScsIFs5NjQyXV0sIFsnYmxhY2t0cmlhbmdsZScsIFs5NjUyXV0sIFsnYmxhY2t0cmlhbmdsZWRvd24nLCBbOTY2Ml1dLCBbJ2JsYWNrdHJpYW5nbGVsZWZ0JywgWzk2NjZdXSwgWydibGFja3RyaWFuZ2xlcmlnaHQnLCBbOTY1Nl1dLCBbJ2JsYW5rJywgWzkyNTFdXSwgWydibGsxMicsIFs5NjE4XV0sIFsnYmxrMTQnLCBbOTYxN11dLCBbJ2JsazM0JywgWzk2MTldXSwgWydibG9jaycsIFs5NjA4XV0sIFsnYm5lJywgWzYxLCA4NDIxXV0sIFsnYm5lcXVpdicsIFs4ODAxLCA4NDIxXV0sIFsnYk5vdCcsIFsxMDk4OV1dLCBbJ2Jub3QnLCBbODk3Nl1dLCBbJ0JvcGYnLCBbMTIwMTIxXV0sIFsnYm9wZicsIFsxMjAxNDddXSwgWydib3QnLCBbODg2OV1dLCBbJ2JvdHRvbScsIFs4ODY5XV0sIFsnYm93dGllJywgWzg5MDRdXSwgWydib3hib3gnLCBbMTA2OTddXSwgWydib3hkbCcsIFs5NDg4XV0sIFsnYm94ZEwnLCBbOTU1N11dLCBbJ2JveERsJywgWzk1NThdXSwgWydib3hETCcsIFs5NTU5XV0sIFsnYm94ZHInLCBbOTQ4NF1dLCBbJ2JveGRSJywgWzk1NTRdXSwgWydib3hEcicsIFs5NTU1XV0sIFsnYm94RFInLCBbOTU1Nl1dLCBbJ2JveGgnLCBbOTQ3Ml1dLCBbJ2JveEgnLCBbOTU1Ml1dLCBbJ2JveGhkJywgWzk1MTZdXSwgWydib3hIZCcsIFs5NTcyXV0sIFsnYm94aEQnLCBbOTU3M11dLCBbJ2JveEhEJywgWzk1NzRdXSwgWydib3hodScsIFs5NTI0XV0sIFsnYm94SHUnLCBbOTU3NV1dLCBbJ2JveGhVJywgWzk1NzZdXSwgWydib3hIVScsIFs5NTc3XV0sIFsnYm94bWludXMnLCBbODg2M11dLCBbJ2JveHBsdXMnLCBbODg2Ml1dLCBbJ2JveHRpbWVzJywgWzg4NjRdXSwgWydib3h1bCcsIFs5NDk2XV0sIFsnYm94dUwnLCBbOTU2M11dLCBbJ2JveFVsJywgWzk1NjRdXSwgWydib3hVTCcsIFs5NTY1XV0sIFsnYm94dXInLCBbOTQ5Ml1dLCBbJ2JveHVSJywgWzk1NjBdXSwgWydib3hVcicsIFs5NTYxXV0sIFsnYm94VVInLCBbOTU2Ml1dLCBbJ2JveHYnLCBbOTQ3NF1dLCBbJ2JveFYnLCBbOTU1M11dLCBbJ2JveHZoJywgWzk1MzJdXSwgWydib3h2SCcsIFs5NTc4XV0sIFsnYm94VmgnLCBbOTU3OV1dLCBbJ2JveFZIJywgWzk1ODBdXSwgWydib3h2bCcsIFs5NTA4XV0sIFsnYm94dkwnLCBbOTU2OV1dLCBbJ2JveFZsJywgWzk1NzBdXSwgWydib3hWTCcsIFs5NTcxXV0sIFsnYm94dnInLCBbOTUwMF1dLCBbJ2JveHZSJywgWzk1NjZdXSwgWydib3hWcicsIFs5NTY3XV0sIFsnYm94VlInLCBbOTU2OF1dLCBbJ2JwcmltZScsIFs4MjQ1XV0sIFsnYnJldmUnLCBbNzI4XV0sIFsnQnJldmUnLCBbNzI4XV0sIFsnYnJ2YmFyJywgWzE2Nl1dLCBbJ2JzY3InLCBbMTE5OTkxXV0sIFsnQnNjcicsIFs4NDkyXV0sIFsnYnNlbWknLCBbODI3MV1dLCBbJ2JzaW0nLCBbODc2NV1dLCBbJ2JzaW1lJywgWzg5MDldXSwgWydic29sYicsIFsxMDY5M11dLCBbJ2Jzb2wnLCBbOTJdXSwgWydic29saHN1YicsIFsxMDE4NF1dLCBbJ2J1bGwnLCBbODIyNl1dLCBbJ2J1bGxldCcsIFs4MjI2XV0sIFsnYnVtcCcsIFs4NzgyXV0sIFsnYnVtcEUnLCBbMTA5MjZdXSwgWydidW1wZScsIFs4NzgzXV0sIFsnQnVtcGVxJywgWzg3ODJdXSwgWydidW1wZXEnLCBbODc4M11dLCBbJ0NhY3V0ZScsIFsyNjJdXSwgWydjYWN1dGUnLCBbMjYzXV0sIFsnY2FwYW5kJywgWzEwODIwXV0sIFsnY2FwYnJjdXAnLCBbMTA4MjVdXSwgWydjYXBjYXAnLCBbMTA4MjddXSwgWydjYXAnLCBbODc0NV1dLCBbJ0NhcCcsIFs4OTE0XV0sIFsnY2FwY3VwJywgWzEwODIzXV0sIFsnY2FwZG90JywgWzEwODE2XV0sIFsnQ2FwaXRhbERpZmZlcmVudGlhbEQnLCBbODUxN11dLCBbJ2NhcHMnLCBbODc0NSwgNjUwMjRdXSwgWydjYXJldCcsIFs4MjU3XV0sIFsnY2Fyb24nLCBbNzExXV0sIFsnQ2F5bGV5cycsIFs4NDkzXV0sIFsnY2NhcHMnLCBbMTA4MjldXSwgWydDY2Fyb24nLCBbMjY4XV0sIFsnY2Nhcm9uJywgWzI2OV1dLCBbJ0NjZWRpbCcsIFsxOTldXSwgWydjY2VkaWwnLCBbMjMxXV0sIFsnQ2NpcmMnLCBbMjY0XV0sIFsnY2NpcmMnLCBbMjY1XV0sIFsnQ2NvbmludCcsIFs4NzUyXV0sIFsnY2N1cHMnLCBbMTA4MjhdXSwgWydjY3Vwc3NtJywgWzEwODMyXV0sIFsnQ2RvdCcsIFsyNjZdXSwgWydjZG90JywgWzI2N11dLCBbJ2NlZGlsJywgWzE4NF1dLCBbJ0NlZGlsbGEnLCBbMTg0XV0sIFsnY2VtcHR5dicsIFsxMDY3NF1dLCBbJ2NlbnQnLCBbMTYyXV0sIFsnY2VudGVyZG90JywgWzE4M11dLCBbJ0NlbnRlckRvdCcsIFsxODNdXSwgWydjZnInLCBbMTIwMDk2XV0sIFsnQ2ZyJywgWzg0OTNdXSwgWydDSGN5JywgWzEwNjNdXSwgWydjaGN5JywgWzEwOTVdXSwgWydjaGVjaycsIFsxMDAwM11dLCBbJ2NoZWNrbWFyaycsIFsxMDAwM11dLCBbJ0NoaScsIFs5MzVdXSwgWydjaGknLCBbOTY3XV0sIFsnY2lyYycsIFs3MTBdXSwgWydjaXJjZXEnLCBbODc5MV1dLCBbJ2NpcmNsZWFycm93bGVmdCcsIFs4NjM0XV0sIFsnY2lyY2xlYXJyb3dyaWdodCcsIFs4NjM1XV0sIFsnY2lyY2xlZGFzdCcsIFs4ODU5XV0sIFsnY2lyY2xlZGNpcmMnLCBbODg1OF1dLCBbJ2NpcmNsZWRkYXNoJywgWzg4NjFdXSwgWydDaXJjbGVEb3QnLCBbODg1N11dLCBbJ2NpcmNsZWRSJywgWzE3NF1dLCBbJ2NpcmNsZWRTJywgWzk0MTZdXSwgWydDaXJjbGVNaW51cycsIFs4ODU0XV0sIFsnQ2lyY2xlUGx1cycsIFs4ODUzXV0sIFsnQ2lyY2xlVGltZXMnLCBbODg1NV1dLCBbJ2NpcicsIFs5Njc1XV0sIFsnY2lyRScsIFsxMDY5MV1dLCBbJ2NpcmUnLCBbODc5MV1dLCBbJ2NpcmZuaW50JywgWzEwNzY4XV0sIFsnY2lybWlkJywgWzEwOTkxXV0sIFsnY2lyc2NpcicsIFsxMDY5MF1dLCBbJ0Nsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzU0XV0sIFsnQ2xvc2VDdXJseURvdWJsZVF1b3RlJywgWzgyMjFdXSwgWydDbG9zZUN1cmx5UXVvdGUnLCBbODIxN11dLCBbJ2NsdWJzJywgWzk4MjddXSwgWydjbHVic3VpdCcsIFs5ODI3XV0sIFsnY29sb24nLCBbNThdXSwgWydDb2xvbicsIFs4NzU5XV0sIFsnQ29sb25lJywgWzEwODY4XV0sIFsnY29sb25lJywgWzg3ODhdXSwgWydjb2xvbmVxJywgWzg3ODhdXSwgWydjb21tYScsIFs0NF1dLCBbJ2NvbW1hdCcsIFs2NF1dLCBbJ2NvbXAnLCBbODcwNV1dLCBbJ2NvbXBmbicsIFs4NzI4XV0sIFsnY29tcGxlbWVudCcsIFs4NzA1XV0sIFsnY29tcGxleGVzJywgWzg0NTBdXSwgWydjb25nJywgWzg3NzNdXSwgWydjb25nZG90JywgWzEwODYxXV0sIFsnQ29uZ3J1ZW50JywgWzg4MDFdXSwgWydjb25pbnQnLCBbODc1MF1dLCBbJ0NvbmludCcsIFs4NzUxXV0sIFsnQ29udG91ckludGVncmFsJywgWzg3NTBdXSwgWydjb3BmJywgWzEyMDE0OF1dLCBbJ0NvcGYnLCBbODQ1MF1dLCBbJ2NvcHJvZCcsIFs4NzIwXV0sIFsnQ29wcm9kdWN0JywgWzg3MjBdXSwgWydjb3B5JywgWzE2OV1dLCBbJ0NPUFknLCBbMTY5XV0sIFsnY29weXNyJywgWzg0NzFdXSwgWydDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsJywgWzg3NTVdXSwgWydjcmFycicsIFs4NjI5XV0sIFsnY3Jvc3MnLCBbMTAwMDddXSwgWydDcm9zcycsIFsxMDc5OV1dLCBbJ0NzY3InLCBbMTE5OTY2XV0sIFsnY3NjcicsIFsxMTk5OTJdXSwgWydjc3ViJywgWzEwOTU5XV0sIFsnY3N1YmUnLCBbMTA5NjFdXSwgWydjc3VwJywgWzEwOTYwXV0sIFsnY3N1cGUnLCBbMTA5NjJdXSwgWydjdGRvdCcsIFs4OTQzXV0sIFsnY3VkYXJybCcsIFsxMDU1Ml1dLCBbJ2N1ZGFycnInLCBbMTA1NDldXSwgWydjdWVwcicsIFs4OTI2XV0sIFsnY3Vlc2MnLCBbODkyN11dLCBbJ2N1bGFycicsIFs4NjMwXV0sIFsnY3VsYXJycCcsIFsxMDU1N11dLCBbJ2N1cGJyY2FwJywgWzEwODI0XV0sIFsnY3VwY2FwJywgWzEwODIyXV0sIFsnQ3VwQ2FwJywgWzg3ODFdXSwgWydjdXAnLCBbODc0Nl1dLCBbJ0N1cCcsIFs4OTE1XV0sIFsnY3VwY3VwJywgWzEwODI2XV0sIFsnY3VwZG90JywgWzg4NDVdXSwgWydjdXBvcicsIFsxMDgyMV1dLCBbJ2N1cHMnLCBbODc0NiwgNjUwMjRdXSwgWydjdXJhcnInLCBbODYzMV1dLCBbJ2N1cmFycm0nLCBbMTA1NTZdXSwgWydjdXJseWVxcHJlYycsIFs4OTI2XV0sIFsnY3VybHllcXN1Y2MnLCBbODkyN11dLCBbJ2N1cmx5dmVlJywgWzg5MTBdXSwgWydjdXJseXdlZGdlJywgWzg5MTFdXSwgWydjdXJyZW4nLCBbMTY0XV0sIFsnY3VydmVhcnJvd2xlZnQnLCBbODYzMF1dLCBbJ2N1cnZlYXJyb3dyaWdodCcsIFs4NjMxXV0sIFsnY3V2ZWUnLCBbODkxMF1dLCBbJ2N1d2VkJywgWzg5MTFdXSwgWydjd2NvbmludCcsIFs4NzU0XV0sIFsnY3dpbnQnLCBbODc1M11dLCBbJ2N5bGN0eScsIFs5MDA1XV0sIFsnZGFnZ2VyJywgWzgyMjRdXSwgWydEYWdnZXInLCBbODIyNV1dLCBbJ2RhbGV0aCcsIFs4NTA0XV0sIFsnZGFycicsIFs4NTk1XV0sIFsnRGFycicsIFs4NjA5XV0sIFsnZEFycicsIFs4NjU5XV0sIFsnZGFzaCcsIFs4MjA4XV0sIFsnRGFzaHYnLCBbMTA5ODBdXSwgWydkYXNodicsIFs4ODY3XV0sIFsnZGJrYXJvdycsIFsxMDUxMV1dLCBbJ2RibGFjJywgWzczM11dLCBbJ0RjYXJvbicsIFsyNzBdXSwgWydkY2Fyb24nLCBbMjcxXV0sIFsnRGN5JywgWzEwNDRdXSwgWydkY3knLCBbMTA3Nl1dLCBbJ2RkYWdnZXInLCBbODIyNV1dLCBbJ2RkYXJyJywgWzg2NTBdXSwgWydERCcsIFs4NTE3XV0sIFsnZGQnLCBbODUxOF1dLCBbJ0REb3RyYWhkJywgWzEwNTEzXV0sIFsnZGRvdHNlcScsIFsxMDg3MV1dLCBbJ2RlZycsIFsxNzZdXSwgWydEZWwnLCBbODcxMV1dLCBbJ0RlbHRhJywgWzkxNl1dLCBbJ2RlbHRhJywgWzk0OF1dLCBbJ2RlbXB0eXYnLCBbMTA2NzNdXSwgWydkZmlzaHQnLCBbMTA2MjNdXSwgWydEZnInLCBbMTIwMDcxXV0sIFsnZGZyJywgWzEyMDA5N11dLCBbJ2RIYXInLCBbMTA1OTddXSwgWydkaGFybCcsIFs4NjQzXV0sIFsnZGhhcnInLCBbODY0Ml1dLCBbJ0RpYWNyaXRpY2FsQWN1dGUnLCBbMTgwXV0sIFsnRGlhY3JpdGljYWxEb3QnLCBbNzI5XV0sIFsnRGlhY3JpdGljYWxEb3VibGVBY3V0ZScsIFs3MzNdXSwgWydEaWFjcml0aWNhbEdyYXZlJywgWzk2XV0sIFsnRGlhY3JpdGljYWxUaWxkZScsIFs3MzJdXSwgWydkaWFtJywgWzg5MDBdXSwgWydkaWFtb25kJywgWzg5MDBdXSwgWydEaWFtb25kJywgWzg5MDBdXSwgWydkaWFtb25kc3VpdCcsIFs5ODMwXV0sIFsnZGlhbXMnLCBbOTgzMF1dLCBbJ2RpZScsIFsxNjhdXSwgWydEaWZmZXJlbnRpYWxEJywgWzg1MThdXSwgWydkaWdhbW1hJywgWzk4OV1dLCBbJ2Rpc2luJywgWzg5NDZdXSwgWydkaXYnLCBbMjQ3XV0sIFsnZGl2aWRlJywgWzI0N11dLCBbJ2RpdmlkZW9udGltZXMnLCBbODkwM11dLCBbJ2Rpdm9ueCcsIFs4OTAzXV0sIFsnREpjeScsIFsxMDI2XV0sIFsnZGpjeScsIFsxMTA2XV0sIFsnZGxjb3JuJywgWzg5OTBdXSwgWydkbGNyb3AnLCBbODk3M11dLCBbJ2RvbGxhcicsIFszNl1dLCBbJ0RvcGYnLCBbMTIwMTIzXV0sIFsnZG9wZicsIFsxMjAxNDldXSwgWydEb3QnLCBbMTY4XV0sIFsnZG90JywgWzcyOV1dLCBbJ0RvdERvdCcsIFs4NDEyXV0sIFsnZG90ZXEnLCBbODc4NF1dLCBbJ2RvdGVxZG90JywgWzg3ODVdXSwgWydEb3RFcXVhbCcsIFs4Nzg0XV0sIFsnZG90bWludXMnLCBbODc2MF1dLCBbJ2RvdHBsdXMnLCBbODcyNF1dLCBbJ2RvdHNxdWFyZScsIFs4ODY1XV0sIFsnZG91YmxlYmFyd2VkZ2UnLCBbODk2Nl1dLCBbJ0RvdWJsZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzUxXV0sIFsnRG91YmxlRG90JywgWzE2OF1dLCBbJ0RvdWJsZURvd25BcnJvdycsIFs4NjU5XV0sIFsnRG91YmxlTGVmdEFycm93JywgWzg2NTZdXSwgWydEb3VibGVMZWZ0UmlnaHRBcnJvdycsIFs4NjYwXV0sIFsnRG91YmxlTGVmdFRlZScsIFsxMDk4MF1dLCBbJ0RvdWJsZUxvbmdMZWZ0QXJyb3cnLCBbMTAyMzJdXSwgWydEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3cnLCBbMTAyMzRdXSwgWydEb3VibGVMb25nUmlnaHRBcnJvdycsIFsxMDIzM11dLCBbJ0RvdWJsZVJpZ2h0QXJyb3cnLCBbODY1OF1dLCBbJ0RvdWJsZVJpZ2h0VGVlJywgWzg4NzJdXSwgWydEb3VibGVVcEFycm93JywgWzg2NTddXSwgWydEb3VibGVVcERvd25BcnJvdycsIFs4NjYxXV0sIFsnRG91YmxlVmVydGljYWxCYXInLCBbODc0MV1dLCBbJ0Rvd25BcnJvd0JhcicsIFsxMDUxNV1dLCBbJ2Rvd25hcnJvdycsIFs4NTk1XV0sIFsnRG93bkFycm93JywgWzg1OTVdXSwgWydEb3duYXJyb3cnLCBbODY1OV1dLCBbJ0Rvd25BcnJvd1VwQXJyb3cnLCBbODY5M11dLCBbJ0Rvd25CcmV2ZScsIFs3ODVdXSwgWydkb3duZG93bmFycm93cycsIFs4NjUwXV0sIFsnZG93bmhhcnBvb25sZWZ0JywgWzg2NDNdXSwgWydkb3duaGFycG9vbnJpZ2h0JywgWzg2NDJdXSwgWydEb3duTGVmdFJpZ2h0VmVjdG9yJywgWzEwNTc2XV0sIFsnRG93bkxlZnRUZWVWZWN0b3InLCBbMTA1OTBdXSwgWydEb3duTGVmdFZlY3RvckJhcicsIFsxMDU4Ml1dLCBbJ0Rvd25MZWZ0VmVjdG9yJywgWzg2MzddXSwgWydEb3duUmlnaHRUZWVWZWN0b3InLCBbMTA1OTFdXSwgWydEb3duUmlnaHRWZWN0b3JCYXInLCBbMTA1ODNdXSwgWydEb3duUmlnaHRWZWN0b3InLCBbODY0MV1dLCBbJ0Rvd25UZWVBcnJvdycsIFs4NjE1XV0sIFsnRG93blRlZScsIFs4ODY4XV0sIFsnZHJia2Fyb3cnLCBbMTA1MTJdXSwgWydkcmNvcm4nLCBbODk5MV1dLCBbJ2RyY3JvcCcsIFs4OTcyXV0sIFsnRHNjcicsIFsxMTk5NjddXSwgWydkc2NyJywgWzExOTk5M11dLCBbJ0RTY3knLCBbMTAyOV1dLCBbJ2RzY3knLCBbMTEwOV1dLCBbJ2Rzb2wnLCBbMTA3NDJdXSwgWydEc3Ryb2snLCBbMjcyXV0sIFsnZHN0cm9rJywgWzI3M11dLCBbJ2R0ZG90JywgWzg5NDVdXSwgWydkdHJpJywgWzk2NjNdXSwgWydkdHJpZicsIFs5NjYyXV0sIFsnZHVhcnInLCBbODY5M11dLCBbJ2R1aGFyJywgWzEwNjA3XV0sIFsnZHdhbmdsZScsIFsxMDY2Ml1dLCBbJ0RaY3knLCBbMTAzOV1dLCBbJ2R6Y3knLCBbMTExOV1dLCBbJ2R6aWdyYXJyJywgWzEwMjM5XV0sIFsnRWFjdXRlJywgWzIwMV1dLCBbJ2VhY3V0ZScsIFsyMzNdXSwgWydlYXN0ZXInLCBbMTA4NjJdXSwgWydFY2Fyb24nLCBbMjgyXV0sIFsnZWNhcm9uJywgWzI4M11dLCBbJ0VjaXJjJywgWzIwMl1dLCBbJ2VjaXJjJywgWzIzNF1dLCBbJ2VjaXInLCBbODc5MF1dLCBbJ2Vjb2xvbicsIFs4Nzg5XV0sIFsnRWN5JywgWzEwNjldXSwgWydlY3knLCBbMTEwMV1dLCBbJ2VERG90JywgWzEwODcxXV0sIFsnRWRvdCcsIFsyNzhdXSwgWydlZG90JywgWzI3OV1dLCBbJ2VEb3QnLCBbODc4NV1dLCBbJ2VlJywgWzg1MTldXSwgWydlZkRvdCcsIFs4Nzg2XV0sIFsnRWZyJywgWzEyMDA3Ml1dLCBbJ2VmcicsIFsxMjAwOThdXSwgWydlZycsIFsxMDkwNl1dLCBbJ0VncmF2ZScsIFsyMDBdXSwgWydlZ3JhdmUnLCBbMjMyXV0sIFsnZWdzJywgWzEwOTAyXV0sIFsnZWdzZG90JywgWzEwOTA0XV0sIFsnZWwnLCBbMTA5MDVdXSwgWydFbGVtZW50JywgWzg3MTJdXSwgWydlbGludGVycycsIFs5MTkxXV0sIFsnZWxsJywgWzg0NjddXSwgWydlbHMnLCBbMTA5MDFdXSwgWydlbHNkb3QnLCBbMTA5MDNdXSwgWydFbWFjcicsIFsyNzRdXSwgWydlbWFjcicsIFsyNzVdXSwgWydlbXB0eScsIFs4NzA5XV0sIFsnZW1wdHlzZXQnLCBbODcwOV1dLCBbJ0VtcHR5U21hbGxTcXVhcmUnLCBbOTcyM11dLCBbJ2VtcHR5dicsIFs4NzA5XV0sIFsnRW1wdHlWZXJ5U21hbGxTcXVhcmUnLCBbOTY0M11dLCBbJ2Vtc3AxMycsIFs4MTk2XV0sIFsnZW1zcDE0JywgWzgxOTddXSwgWydlbXNwJywgWzgxOTVdXSwgWydFTkcnLCBbMzMwXV0sIFsnZW5nJywgWzMzMV1dLCBbJ2Vuc3AnLCBbODE5NF1dLCBbJ0VvZ29uJywgWzI4MF1dLCBbJ2VvZ29uJywgWzI4MV1dLCBbJ0VvcGYnLCBbMTIwMTI0XV0sIFsnZW9wZicsIFsxMjAxNTBdXSwgWydlcGFyJywgWzg5MTddXSwgWydlcGFyc2wnLCBbMTA3MjNdXSwgWydlcGx1cycsIFsxMDg2NV1dLCBbJ2Vwc2knLCBbOTQ5XV0sIFsnRXBzaWxvbicsIFs5MTddXSwgWydlcHNpbG9uJywgWzk0OV1dLCBbJ2Vwc2l2JywgWzEwMTNdXSwgWydlcWNpcmMnLCBbODc5MF1dLCBbJ2VxY29sb24nLCBbODc4OV1dLCBbJ2Vxc2ltJywgWzg3NzBdXSwgWydlcXNsYW50Z3RyJywgWzEwOTAyXV0sIFsnZXFzbGFudGxlc3MnLCBbMTA5MDFdXSwgWydFcXVhbCcsIFsxMDg2OV1dLCBbJ2VxdWFscycsIFs2MV1dLCBbJ0VxdWFsVGlsZGUnLCBbODc3MF1dLCBbJ2VxdWVzdCcsIFs4Nzk5XV0sIFsnRXF1aWxpYnJpdW0nLCBbODY1Ml1dLCBbJ2VxdWl2JywgWzg4MDFdXSwgWydlcXVpdkREJywgWzEwODcyXV0sIFsnZXF2cGFyc2wnLCBbMTA3MjVdXSwgWydlcmFycicsIFsxMDYwOV1dLCBbJ2VyRG90JywgWzg3ODddXSwgWydlc2NyJywgWzg0OTVdXSwgWydFc2NyJywgWzg0OTZdXSwgWydlc2RvdCcsIFs4Nzg0XV0sIFsnRXNpbScsIFsxMDg2N11dLCBbJ2VzaW0nLCBbODc3MF1dLCBbJ0V0YScsIFs5MTldXSwgWydldGEnLCBbOTUxXV0sIFsnRVRIJywgWzIwOF1dLCBbJ2V0aCcsIFsyNDBdXSwgWydFdW1sJywgWzIwM11dLCBbJ2V1bWwnLCBbMjM1XV0sIFsnZXVybycsIFs4MzY0XV0sIFsnZXhjbCcsIFszM11dLCBbJ2V4aXN0JywgWzg3MDddXSwgWydFeGlzdHMnLCBbODcwN11dLCBbJ2V4cGVjdGF0aW9uJywgWzg0OTZdXSwgWydleHBvbmVudGlhbGUnLCBbODUxOV1dLCBbJ0V4cG9uZW50aWFsRScsIFs4NTE5XV0sIFsnZmFsbGluZ2RvdHNlcScsIFs4Nzg2XV0sIFsnRmN5JywgWzEwNjBdXSwgWydmY3knLCBbMTA5Ml1dLCBbJ2ZlbWFsZScsIFs5NzkyXV0sIFsnZmZpbGlnJywgWzY0MjU5XV0sIFsnZmZsaWcnLCBbNjQyNTZdXSwgWydmZmxsaWcnLCBbNjQyNjBdXSwgWydGZnInLCBbMTIwMDczXV0sIFsnZmZyJywgWzEyMDA5OV1dLCBbJ2ZpbGlnJywgWzY0MjU3XV0sIFsnRmlsbGVkU21hbGxTcXVhcmUnLCBbOTcyNF1dLCBbJ0ZpbGxlZFZlcnlTbWFsbFNxdWFyZScsIFs5NjQyXV0sIFsnZmpsaWcnLCBbMTAyLCAxMDZdXSwgWydmbGF0JywgWzk4MzddXSwgWydmbGxpZycsIFs2NDI1OF1dLCBbJ2ZsdG5zJywgWzk2NDldXSwgWydmbm9mJywgWzQwMl1dLCBbJ0ZvcGYnLCBbMTIwMTI1XV0sIFsnZm9wZicsIFsxMjAxNTFdXSwgWydmb3JhbGwnLCBbODcwNF1dLCBbJ0ZvckFsbCcsIFs4NzA0XV0sIFsnZm9yaycsIFs4OTE2XV0sIFsnZm9ya3YnLCBbMTA5NjldXSwgWydGb3VyaWVydHJmJywgWzg0OTddXSwgWydmcGFydGludCcsIFsxMDc2NV1dLCBbJ2ZyYWMxMicsIFsxODldXSwgWydmcmFjMTMnLCBbODUzMV1dLCBbJ2ZyYWMxNCcsIFsxODhdXSwgWydmcmFjMTUnLCBbODUzM11dLCBbJ2ZyYWMxNicsIFs4NTM3XV0sIFsnZnJhYzE4JywgWzg1MzldXSwgWydmcmFjMjMnLCBbODUzMl1dLCBbJ2ZyYWMyNScsIFs4NTM0XV0sIFsnZnJhYzM0JywgWzE5MF1dLCBbJ2ZyYWMzNScsIFs4NTM1XV0sIFsnZnJhYzM4JywgWzg1NDBdXSwgWydmcmFjNDUnLCBbODUzNl1dLCBbJ2ZyYWM1NicsIFs4NTM4XV0sIFsnZnJhYzU4JywgWzg1NDFdXSwgWydmcmFjNzgnLCBbODU0Ml1dLCBbJ2ZyYXNsJywgWzgyNjBdXSwgWydmcm93bicsIFs4OTk0XV0sIFsnZnNjcicsIFsxMTk5OTVdXSwgWydGc2NyJywgWzg0OTddXSwgWydnYWN1dGUnLCBbNTAxXV0sIFsnR2FtbWEnLCBbOTE1XV0sIFsnZ2FtbWEnLCBbOTQ3XV0sIFsnR2FtbWFkJywgWzk4OF1dLCBbJ2dhbW1hZCcsIFs5ODldXSwgWydnYXAnLCBbMTA4ODZdXSwgWydHYnJldmUnLCBbMjg2XV0sIFsnZ2JyZXZlJywgWzI4N11dLCBbJ0djZWRpbCcsIFsyOTBdXSwgWydHY2lyYycsIFsyODRdXSwgWydnY2lyYycsIFsyODVdXSwgWydHY3knLCBbMTA0M11dLCBbJ2djeScsIFsxMDc1XV0sIFsnR2RvdCcsIFsyODhdXSwgWydnZG90JywgWzI4OV1dLCBbJ2dlJywgWzg4MDVdXSwgWydnRScsIFs4ODA3XV0sIFsnZ0VsJywgWzEwODkyXV0sIFsnZ2VsJywgWzg5MjNdXSwgWydnZXEnLCBbODgwNV1dLCBbJ2dlcXEnLCBbODgwN11dLCBbJ2dlcXNsYW50JywgWzEwODc4XV0sIFsnZ2VzY2MnLCBbMTA5MjFdXSwgWydnZXMnLCBbMTA4NzhdXSwgWydnZXNkb3QnLCBbMTA4ODBdXSwgWydnZXNkb3RvJywgWzEwODgyXV0sIFsnZ2VzZG90b2wnLCBbMTA4ODRdXSwgWydnZXNsJywgWzg5MjMsIDY1MDI0XV0sIFsnZ2VzbGVzJywgWzEwOTAwXV0sIFsnR2ZyJywgWzEyMDA3NF1dLCBbJ2dmcicsIFsxMjAxMDBdXSwgWydnZycsIFs4ODExXV0sIFsnR2cnLCBbODkyMV1dLCBbJ2dnZycsIFs4OTIxXV0sIFsnZ2ltZWwnLCBbODUwM11dLCBbJ0dKY3knLCBbMTAyN11dLCBbJ2dqY3knLCBbMTEwN11dLCBbJ2dsYScsIFsxMDkxN11dLCBbJ2dsJywgWzg4MjNdXSwgWydnbEUnLCBbMTA4OThdXSwgWydnbGonLCBbMTA5MTZdXSwgWydnbmFwJywgWzEwODkwXV0sIFsnZ25hcHByb3gnLCBbMTA4OTBdXSwgWydnbmUnLCBbMTA4ODhdXSwgWydnbkUnLCBbODgwOV1dLCBbJ2duZXEnLCBbMTA4ODhdXSwgWydnbmVxcScsIFs4ODA5XV0sIFsnZ25zaW0nLCBbODkzNV1dLCBbJ0dvcGYnLCBbMTIwMTI2XV0sIFsnZ29wZicsIFsxMjAxNTJdXSwgWydncmF2ZScsIFs5Nl1dLCBbJ0dyZWF0ZXJFcXVhbCcsIFs4ODA1XV0sIFsnR3JlYXRlckVxdWFsTGVzcycsIFs4OTIzXV0sIFsnR3JlYXRlckZ1bGxFcXVhbCcsIFs4ODA3XV0sIFsnR3JlYXRlckdyZWF0ZXInLCBbMTA5MTRdXSwgWydHcmVhdGVyTGVzcycsIFs4ODIzXV0sIFsnR3JlYXRlclNsYW50RXF1YWwnLCBbMTA4NzhdXSwgWydHcmVhdGVyVGlsZGUnLCBbODgxOV1dLCBbJ0dzY3InLCBbMTE5OTcwXV0sIFsnZ3NjcicsIFs4NDU4XV0sIFsnZ3NpbScsIFs4ODE5XV0sIFsnZ3NpbWUnLCBbMTA4OTRdXSwgWydnc2ltbCcsIFsxMDg5Nl1dLCBbJ2d0Y2MnLCBbMTA5MTldXSwgWydndGNpcicsIFsxMDg3NF1dLCBbJ2d0JywgWzYyXV0sIFsnR1QnLCBbNjJdXSwgWydHdCcsIFs4ODExXV0sIFsnZ3Rkb3QnLCBbODkxOV1dLCBbJ2d0bFBhcicsIFsxMDY0NV1dLCBbJ2d0cXVlc3QnLCBbMTA4NzZdXSwgWydndHJhcHByb3gnLCBbMTA4ODZdXSwgWydndHJhcnInLCBbMTA2MTZdXSwgWydndHJkb3QnLCBbODkxOV1dLCBbJ2d0cmVxbGVzcycsIFs4OTIzXV0sIFsnZ3RyZXFxbGVzcycsIFsxMDg5Ml1dLCBbJ2d0cmxlc3MnLCBbODgyM11dLCBbJ2d0cnNpbScsIFs4ODE5XV0sIFsnZ3ZlcnRuZXFxJywgWzg4MDksIDY1MDI0XV0sIFsnZ3ZuRScsIFs4ODA5LCA2NTAyNF1dLCBbJ0hhY2VrJywgWzcxMV1dLCBbJ2hhaXJzcCcsIFs4MjAyXV0sIFsnaGFsZicsIFsxODldXSwgWydoYW1pbHQnLCBbODQ1OV1dLCBbJ0hBUkRjeScsIFsxMDY2XV0sIFsnaGFyZGN5JywgWzEwOThdXSwgWydoYXJyY2lyJywgWzEwNTY4XV0sIFsnaGFycicsIFs4NTk2XV0sIFsnaEFycicsIFs4NjYwXV0sIFsnaGFycncnLCBbODYyMV1dLCBbJ0hhdCcsIFs5NF1dLCBbJ2hiYXInLCBbODQ2M11dLCBbJ0hjaXJjJywgWzI5Ml1dLCBbJ2hjaXJjJywgWzI5M11dLCBbJ2hlYXJ0cycsIFs5ODI5XV0sIFsnaGVhcnRzdWl0JywgWzk4MjldXSwgWydoZWxsaXAnLCBbODIzMF1dLCBbJ2hlcmNvbicsIFs4ODg5XV0sIFsnaGZyJywgWzEyMDEwMV1dLCBbJ0hmcicsIFs4NDYwXV0sIFsnSGlsYmVydFNwYWNlJywgWzg0NTldXSwgWydoa3NlYXJvdycsIFsxMDUzM11dLCBbJ2hrc3dhcm93JywgWzEwNTM0XV0sIFsnaG9hcnInLCBbODcwM11dLCBbJ2hvbXRodCcsIFs4NzYzXV0sIFsnaG9va2xlZnRhcnJvdycsIFs4NjE3XV0sIFsnaG9va3JpZ2h0YXJyb3cnLCBbODYxOF1dLCBbJ2hvcGYnLCBbMTIwMTUzXV0sIFsnSG9wZicsIFs4NDYxXV0sIFsnaG9yYmFyJywgWzgyMTNdXSwgWydIb3Jpem9udGFsTGluZScsIFs5NDcyXV0sIFsnaHNjcicsIFsxMTk5OTddXSwgWydIc2NyJywgWzg0NTldXSwgWydoc2xhc2gnLCBbODQ2M11dLCBbJ0hzdHJvaycsIFsyOTRdXSwgWydoc3Ryb2snLCBbMjk1XV0sIFsnSHVtcERvd25IdW1wJywgWzg3ODJdXSwgWydIdW1wRXF1YWwnLCBbODc4M11dLCBbJ2h5YnVsbCcsIFs4MjU5XV0sIFsnaHlwaGVuJywgWzgyMDhdXSwgWydJYWN1dGUnLCBbMjA1XV0sIFsnaWFjdXRlJywgWzIzN11dLCBbJ2ljJywgWzgyOTFdXSwgWydJY2lyYycsIFsyMDZdXSwgWydpY2lyYycsIFsyMzhdXSwgWydJY3knLCBbMTA0OF1dLCBbJ2ljeScsIFsxMDgwXV0sIFsnSWRvdCcsIFszMDRdXSwgWydJRWN5JywgWzEwNDVdXSwgWydpZWN5JywgWzEwNzddXSwgWydpZXhjbCcsIFsxNjFdXSwgWydpZmYnLCBbODY2MF1dLCBbJ2lmcicsIFsxMjAxMDJdXSwgWydJZnInLCBbODQ2NV1dLCBbJ0lncmF2ZScsIFsyMDRdXSwgWydpZ3JhdmUnLCBbMjM2XV0sIFsnaWknLCBbODUyMF1dLCBbJ2lpaWludCcsIFsxMDc2NF1dLCBbJ2lpaW50JywgWzg3NDldXSwgWydpaW5maW4nLCBbMTA3MTZdXSwgWydpaW90YScsIFs4NDg5XV0sIFsnSUpsaWcnLCBbMzA2XV0sIFsnaWpsaWcnLCBbMzA3XV0sIFsnSW1hY3InLCBbMjk4XV0sIFsnaW1hY3InLCBbMjk5XV0sIFsnaW1hZ2UnLCBbODQ2NV1dLCBbJ0ltYWdpbmFyeUknLCBbODUyMF1dLCBbJ2ltYWdsaW5lJywgWzg0NjRdXSwgWydpbWFncGFydCcsIFs4NDY1XV0sIFsnaW1hdGgnLCBbMzA1XV0sIFsnSW0nLCBbODQ2NV1dLCBbJ2ltb2YnLCBbODg4N11dLCBbJ2ltcGVkJywgWzQzN11dLCBbJ0ltcGxpZXMnLCBbODY1OF1dLCBbJ2luY2FyZScsIFs4NDUzXV0sIFsnaW4nLCBbODcxMl1dLCBbJ2luZmluJywgWzg3MzRdXSwgWydpbmZpbnRpZScsIFsxMDcxN11dLCBbJ2lub2RvdCcsIFszMDVdXSwgWydpbnRjYWwnLCBbODg5MF1dLCBbJ2ludCcsIFs4NzQ3XV0sIFsnSW50JywgWzg3NDhdXSwgWydpbnRlZ2VycycsIFs4NDg0XV0sIFsnSW50ZWdyYWwnLCBbODc0N11dLCBbJ2ludGVyY2FsJywgWzg4OTBdXSwgWydJbnRlcnNlY3Rpb24nLCBbODg5OF1dLCBbJ2ludGxhcmhrJywgWzEwNzc1XV0sIFsnaW50cHJvZCcsIFsxMDgxMl1dLCBbJ0ludmlzaWJsZUNvbW1hJywgWzgyOTFdXSwgWydJbnZpc2libGVUaW1lcycsIFs4MjkwXV0sIFsnSU9jeScsIFsxMDI1XV0sIFsnaW9jeScsIFsxMTA1XV0sIFsnSW9nb24nLCBbMzAyXV0sIFsnaW9nb24nLCBbMzAzXV0sIFsnSW9wZicsIFsxMjAxMjhdXSwgWydpb3BmJywgWzEyMDE1NF1dLCBbJ0lvdGEnLCBbOTIxXV0sIFsnaW90YScsIFs5NTNdXSwgWydpcHJvZCcsIFsxMDgxMl1dLCBbJ2lxdWVzdCcsIFsxOTFdXSwgWydpc2NyJywgWzExOTk5OF1dLCBbJ0lzY3InLCBbODQ2NF1dLCBbJ2lzaW4nLCBbODcxMl1dLCBbJ2lzaW5kb3QnLCBbODk0OV1dLCBbJ2lzaW5FJywgWzg5NTNdXSwgWydpc2lucycsIFs4OTQ4XV0sIFsnaXNpbnN2JywgWzg5NDddXSwgWydpc2ludicsIFs4NzEyXV0sIFsnaXQnLCBbODI5MF1dLCBbJ0l0aWxkZScsIFsyOTZdXSwgWydpdGlsZGUnLCBbMjk3XV0sIFsnSXVrY3knLCBbMTAzMF1dLCBbJ2l1a2N5JywgWzExMTBdXSwgWydJdW1sJywgWzIwN11dLCBbJ2l1bWwnLCBbMjM5XV0sIFsnSmNpcmMnLCBbMzA4XV0sIFsnamNpcmMnLCBbMzA5XV0sIFsnSmN5JywgWzEwNDldXSwgWydqY3knLCBbMTA4MV1dLCBbJ0pmcicsIFsxMjAwNzddXSwgWydqZnInLCBbMTIwMTAzXV0sIFsnam1hdGgnLCBbNTY3XV0sIFsnSm9wZicsIFsxMjAxMjldXSwgWydqb3BmJywgWzEyMDE1NV1dLCBbJ0pzY3InLCBbMTE5OTczXV0sIFsnanNjcicsIFsxMTk5OTldXSwgWydKc2VyY3knLCBbMTAzMl1dLCBbJ2pzZXJjeScsIFsxMTEyXV0sIFsnSnVrY3knLCBbMTAyOF1dLCBbJ2p1a2N5JywgWzExMDhdXSwgWydLYXBwYScsIFs5MjJdXSwgWydrYXBwYScsIFs5NTRdXSwgWydrYXBwYXYnLCBbMTAwOF1dLCBbJ0tjZWRpbCcsIFszMTBdXSwgWydrY2VkaWwnLCBbMzExXV0sIFsnS2N5JywgWzEwNTBdXSwgWydrY3knLCBbMTA4Ml1dLCBbJ0tmcicsIFsxMjAwNzhdXSwgWydrZnInLCBbMTIwMTA0XV0sIFsna2dyZWVuJywgWzMxMl1dLCBbJ0tIY3knLCBbMTA2MV1dLCBbJ2toY3knLCBbMTA5M11dLCBbJ0tKY3knLCBbMTAzNl1dLCBbJ2tqY3knLCBbMTExNl1dLCBbJ0tvcGYnLCBbMTIwMTMwXV0sIFsna29wZicsIFsxMjAxNTZdXSwgWydLc2NyJywgWzExOTk3NF1dLCBbJ2tzY3InLCBbMTIwMDAwXV0sIFsnbEFhcnInLCBbODY2Nl1dLCBbJ0xhY3V0ZScsIFszMTNdXSwgWydsYWN1dGUnLCBbMzE0XV0sIFsnbGFlbXB0eXYnLCBbMTA2NzZdXSwgWydsYWdyYW4nLCBbODQ2Nl1dLCBbJ0xhbWJkYScsIFs5MjNdXSwgWydsYW1iZGEnLCBbOTU1XV0sIFsnbGFuZycsIFsxMDIxNl1dLCBbJ0xhbmcnLCBbMTAyMThdXSwgWydsYW5nZCcsIFsxMDY0MV1dLCBbJ2xhbmdsZScsIFsxMDIxNl1dLCBbJ2xhcCcsIFsxMDg4NV1dLCBbJ0xhcGxhY2V0cmYnLCBbODQ2Nl1dLCBbJ2xhcXVvJywgWzE3MV1dLCBbJ2xhcnJiJywgWzg2NzZdXSwgWydsYXJyYmZzJywgWzEwNTI3XV0sIFsnbGFycicsIFs4NTkyXV0sIFsnTGFycicsIFs4NjA2XV0sIFsnbEFycicsIFs4NjU2XV0sIFsnbGFycmZzJywgWzEwNTI1XV0sIFsnbGFycmhrJywgWzg2MTddXSwgWydsYXJybHAnLCBbODYxOV1dLCBbJ2xhcnJwbCcsIFsxMDU1M11dLCBbJ2xhcnJzaW0nLCBbMTA2MTFdXSwgWydsYXJydGwnLCBbODYxMF1dLCBbJ2xhdGFpbCcsIFsxMDUyMV1dLCBbJ2xBdGFpbCcsIFsxMDUyM11dLCBbJ2xhdCcsIFsxMDkyM11dLCBbJ2xhdGUnLCBbMTA5MjVdXSwgWydsYXRlcycsIFsxMDkyNSwgNjUwMjRdXSwgWydsYmFycicsIFsxMDUwOF1dLCBbJ2xCYXJyJywgWzEwNTEwXV0sIFsnbGJicmsnLCBbMTAwOThdXSwgWydsYnJhY2UnLCBbMTIzXV0sIFsnbGJyYWNrJywgWzkxXV0sIFsnbGJya2UnLCBbMTA2MzVdXSwgWydsYnJrc2xkJywgWzEwNjM5XV0sIFsnbGJya3NsdScsIFsxMDYzN11dLCBbJ0xjYXJvbicsIFszMTddXSwgWydsY2Fyb24nLCBbMzE4XV0sIFsnTGNlZGlsJywgWzMxNV1dLCBbJ2xjZWRpbCcsIFszMTZdXSwgWydsY2VpbCcsIFs4OTY4XV0sIFsnbGN1YicsIFsxMjNdXSwgWydMY3knLCBbMTA1MV1dLCBbJ2xjeScsIFsxMDgzXV0sIFsnbGRjYScsIFsxMDU1MF1dLCBbJ2xkcXVvJywgWzgyMjBdXSwgWydsZHF1b3InLCBbODIyMl1dLCBbJ2xkcmRoYXInLCBbMTA1OTldXSwgWydsZHJ1c2hhcicsIFsxMDU3MV1dLCBbJ2xkc2gnLCBbODYyNl1dLCBbJ2xlJywgWzg4MDRdXSwgWydsRScsIFs4ODA2XV0sIFsnTGVmdEFuZ2xlQnJhY2tldCcsIFsxMDIxNl1dLCBbJ0xlZnRBcnJvd0JhcicsIFs4Njc2XV0sIFsnbGVmdGFycm93JywgWzg1OTJdXSwgWydMZWZ0QXJyb3cnLCBbODU5Ml1dLCBbJ0xlZnRhcnJvdycsIFs4NjU2XV0sIFsnTGVmdEFycm93UmlnaHRBcnJvdycsIFs4NjQ2XV0sIFsnbGVmdGFycm93dGFpbCcsIFs4NjEwXV0sIFsnTGVmdENlaWxpbmcnLCBbODk2OF1dLCBbJ0xlZnREb3VibGVCcmFja2V0JywgWzEwMjE0XV0sIFsnTGVmdERvd25UZWVWZWN0b3InLCBbMTA1OTNdXSwgWydMZWZ0RG93blZlY3RvckJhcicsIFsxMDU4NV1dLCBbJ0xlZnREb3duVmVjdG9yJywgWzg2NDNdXSwgWydMZWZ0Rmxvb3InLCBbODk3MF1dLCBbJ2xlZnRoYXJwb29uZG93bicsIFs4NjM3XV0sIFsnbGVmdGhhcnBvb251cCcsIFs4NjM2XV0sIFsnbGVmdGxlZnRhcnJvd3MnLCBbODY0N11dLCBbJ2xlZnRyaWdodGFycm93JywgWzg1OTZdXSwgWydMZWZ0UmlnaHRBcnJvdycsIFs4NTk2XV0sIFsnTGVmdHJpZ2h0YXJyb3cnLCBbODY2MF1dLCBbJ2xlZnRyaWdodGFycm93cycsIFs4NjQ2XV0sIFsnbGVmdHJpZ2h0aGFycG9vbnMnLCBbODY1MV1dLCBbJ2xlZnRyaWdodHNxdWlnYXJyb3cnLCBbODYyMV1dLCBbJ0xlZnRSaWdodFZlY3RvcicsIFsxMDU3NF1dLCBbJ0xlZnRUZWVBcnJvdycsIFs4NjEyXV0sIFsnTGVmdFRlZScsIFs4ODY3XV0sIFsnTGVmdFRlZVZlY3RvcicsIFsxMDU4Nl1dLCBbJ2xlZnR0aHJlZXRpbWVzJywgWzg5MDddXSwgWydMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDNdXSwgWydMZWZ0VHJpYW5nbGUnLCBbODg4Ml1dLCBbJ0xlZnRUcmlhbmdsZUVxdWFsJywgWzg4ODRdXSwgWydMZWZ0VXBEb3duVmVjdG9yJywgWzEwNTc3XV0sIFsnTGVmdFVwVGVlVmVjdG9yJywgWzEwNTkyXV0sIFsnTGVmdFVwVmVjdG9yQmFyJywgWzEwNTg0XV0sIFsnTGVmdFVwVmVjdG9yJywgWzg2MzldXSwgWydMZWZ0VmVjdG9yQmFyJywgWzEwNTc4XV0sIFsnTGVmdFZlY3RvcicsIFs4NjM2XV0sIFsnbEVnJywgWzEwODkxXV0sIFsnbGVnJywgWzg5MjJdXSwgWydsZXEnLCBbODgwNF1dLCBbJ2xlcXEnLCBbODgwNl1dLCBbJ2xlcXNsYW50JywgWzEwODc3XV0sIFsnbGVzY2MnLCBbMTA5MjBdXSwgWydsZXMnLCBbMTA4NzddXSwgWydsZXNkb3QnLCBbMTA4NzldXSwgWydsZXNkb3RvJywgWzEwODgxXV0sIFsnbGVzZG90b3InLCBbMTA4ODNdXSwgWydsZXNnJywgWzg5MjIsIDY1MDI0XV0sIFsnbGVzZ2VzJywgWzEwODk5XV0sIFsnbGVzc2FwcHJveCcsIFsxMDg4NV1dLCBbJ2xlc3Nkb3QnLCBbODkxOF1dLCBbJ2xlc3NlcWd0cicsIFs4OTIyXV0sIFsnbGVzc2VxcWd0cicsIFsxMDg5MV1dLCBbJ0xlc3NFcXVhbEdyZWF0ZXInLCBbODkyMl1dLCBbJ0xlc3NGdWxsRXF1YWwnLCBbODgwNl1dLCBbJ0xlc3NHcmVhdGVyJywgWzg4MjJdXSwgWydsZXNzZ3RyJywgWzg4MjJdXSwgWydMZXNzTGVzcycsIFsxMDkxM11dLCBbJ2xlc3NzaW0nLCBbODgxOF1dLCBbJ0xlc3NTbGFudEVxdWFsJywgWzEwODc3XV0sIFsnTGVzc1RpbGRlJywgWzg4MThdXSwgWydsZmlzaHQnLCBbMTA2MjBdXSwgWydsZmxvb3InLCBbODk3MF1dLCBbJ0xmcicsIFsxMjAwNzldXSwgWydsZnInLCBbMTIwMTA1XV0sIFsnbGcnLCBbODgyMl1dLCBbJ2xnRScsIFsxMDg5N11dLCBbJ2xIYXInLCBbMTA1OTRdXSwgWydsaGFyZCcsIFs4NjM3XV0sIFsnbGhhcnUnLCBbODYzNl1dLCBbJ2xoYXJ1bCcsIFsxMDYwMl1dLCBbJ2xoYmxrJywgWzk2MDRdXSwgWydMSmN5JywgWzEwMzNdXSwgWydsamN5JywgWzExMTNdXSwgWydsbGFycicsIFs4NjQ3XV0sIFsnbGwnLCBbODgxMF1dLCBbJ0xsJywgWzg5MjBdXSwgWydsbGNvcm5lcicsIFs4OTkwXV0sIFsnTGxlZnRhcnJvdycsIFs4NjY2XV0sIFsnbGxoYXJkJywgWzEwNjAzXV0sIFsnbGx0cmknLCBbOTcyMl1dLCBbJ0xtaWRvdCcsIFszMTldXSwgWydsbWlkb3QnLCBbMzIwXV0sIFsnbG1vdXN0YWNoZScsIFs5MTM2XV0sIFsnbG1vdXN0JywgWzkxMzZdXSwgWydsbmFwJywgWzEwODg5XV0sIFsnbG5hcHByb3gnLCBbMTA4ODldXSwgWydsbmUnLCBbMTA4ODddXSwgWydsbkUnLCBbODgwOF1dLCBbJ2xuZXEnLCBbMTA4ODddXSwgWydsbmVxcScsIFs4ODA4XV0sIFsnbG5zaW0nLCBbODkzNF1dLCBbJ2xvYW5nJywgWzEwMjIwXV0sIFsnbG9hcnInLCBbODcwMV1dLCBbJ2xvYnJrJywgWzEwMjE0XV0sIFsnbG9uZ2xlZnRhcnJvdycsIFsxMDIyOV1dLCBbJ0xvbmdMZWZ0QXJyb3cnLCBbMTAyMjldXSwgWydMb25nbGVmdGFycm93JywgWzEwMjMyXV0sIFsnbG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjMxXV0sIFsnTG9uZ0xlZnRSaWdodEFycm93JywgWzEwMjMxXV0sIFsnTG9uZ2xlZnRyaWdodGFycm93JywgWzEwMjM0XV0sIFsnbG9uZ21hcHN0bycsIFsxMDIzNl1dLCBbJ2xvbmdyaWdodGFycm93JywgWzEwMjMwXV0sIFsnTG9uZ1JpZ2h0QXJyb3cnLCBbMTAyMzBdXSwgWydMb25ncmlnaHRhcnJvdycsIFsxMDIzM11dLCBbJ2xvb3BhcnJvd2xlZnQnLCBbODYxOV1dLCBbJ2xvb3BhcnJvd3JpZ2h0JywgWzg2MjBdXSwgWydsb3BhcicsIFsxMDYyOV1dLCBbJ0xvcGYnLCBbMTIwMTMxXV0sIFsnbG9wZicsIFsxMjAxNTddXSwgWydsb3BsdXMnLCBbMTA3OTddXSwgWydsb3RpbWVzJywgWzEwODA0XV0sIFsnbG93YXN0JywgWzg3MjddXSwgWydsb3diYXInLCBbOTVdXSwgWydMb3dlckxlZnRBcnJvdycsIFs4NjAxXV0sIFsnTG93ZXJSaWdodEFycm93JywgWzg2MDBdXSwgWydsb3onLCBbOTY3NF1dLCBbJ2xvemVuZ2UnLCBbOTY3NF1dLCBbJ2xvemYnLCBbMTA3MzFdXSwgWydscGFyJywgWzQwXV0sIFsnbHBhcmx0JywgWzEwNjQzXV0sIFsnbHJhcnInLCBbODY0Nl1dLCBbJ2xyY29ybmVyJywgWzg5OTFdXSwgWydscmhhcicsIFs4NjUxXV0sIFsnbHJoYXJkJywgWzEwNjA1XV0sIFsnbHJtJywgWzgyMDZdXSwgWydscnRyaScsIFs4ODk1XV0sIFsnbHNhcXVvJywgWzgyNDldXSwgWydsc2NyJywgWzEyMDAwMV1dLCBbJ0xzY3InLCBbODQ2Nl1dLCBbJ2xzaCcsIFs4NjI0XV0sIFsnTHNoJywgWzg2MjRdXSwgWydsc2ltJywgWzg4MThdXSwgWydsc2ltZScsIFsxMDg5M11dLCBbJ2xzaW1nJywgWzEwODk1XV0sIFsnbHNxYicsIFs5MV1dLCBbJ2xzcXVvJywgWzgyMTZdXSwgWydsc3F1b3InLCBbODIxOF1dLCBbJ0xzdHJvaycsIFszMjFdXSwgWydsc3Ryb2snLCBbMzIyXV0sIFsnbHRjYycsIFsxMDkxOF1dLCBbJ2x0Y2lyJywgWzEwODczXV0sIFsnbHQnLCBbNjBdXSwgWydMVCcsIFs2MF1dLCBbJ0x0JywgWzg4MTBdXSwgWydsdGRvdCcsIFs4OTE4XV0sIFsnbHRocmVlJywgWzg5MDddXSwgWydsdGltZXMnLCBbODkwNV1dLCBbJ2x0bGFycicsIFsxMDYxNF1dLCBbJ2x0cXVlc3QnLCBbMTA4NzVdXSwgWydsdHJpJywgWzk2NjddXSwgWydsdHJpZScsIFs4ODg0XV0sIFsnbHRyaWYnLCBbOTY2Nl1dLCBbJ2x0clBhcicsIFsxMDY0Nl1dLCBbJ2x1cmRzaGFyJywgWzEwNTcwXV0sIFsnbHVydWhhcicsIFsxMDU5OF1dLCBbJ2x2ZXJ0bmVxcScsIFs4ODA4LCA2NTAyNF1dLCBbJ2x2bkUnLCBbODgwOCwgNjUwMjRdXSwgWydtYWNyJywgWzE3NV1dLCBbJ21hbGUnLCBbOTc5NF1dLCBbJ21hbHQnLCBbMTAwMTZdXSwgWydtYWx0ZXNlJywgWzEwMDE2XV0sIFsnTWFwJywgWzEwNTAxXV0sIFsnbWFwJywgWzg2MTRdXSwgWydtYXBzdG8nLCBbODYxNF1dLCBbJ21hcHN0b2Rvd24nLCBbODYxNV1dLCBbJ21hcHN0b2xlZnQnLCBbODYxMl1dLCBbJ21hcHN0b3VwJywgWzg2MTNdXSwgWydtYXJrZXInLCBbOTY0Nl1dLCBbJ21jb21tYScsIFsxMDc5M11dLCBbJ01jeScsIFsxMDUyXV0sIFsnbWN5JywgWzEwODRdXSwgWydtZGFzaCcsIFs4MjEyXV0sIFsnbUREb3QnLCBbODc2Ml1dLCBbJ21lYXN1cmVkYW5nbGUnLCBbODczN11dLCBbJ01lZGl1bVNwYWNlJywgWzgyODddXSwgWydNZWxsaW50cmYnLCBbODQ5OV1dLCBbJ01mcicsIFsxMjAwODBdXSwgWydtZnInLCBbMTIwMTA2XV0sIFsnbWhvJywgWzg0ODddXSwgWydtaWNybycsIFsxODFdXSwgWydtaWRhc3QnLCBbNDJdXSwgWydtaWRjaXInLCBbMTA5OTJdXSwgWydtaWQnLCBbODczOV1dLCBbJ21pZGRvdCcsIFsxODNdXSwgWydtaW51c2InLCBbODg2M11dLCBbJ21pbnVzJywgWzg3MjJdXSwgWydtaW51c2QnLCBbODc2MF1dLCBbJ21pbnVzZHUnLCBbMTA3OTRdXSwgWydNaW51c1BsdXMnLCBbODcyM11dLCBbJ21sY3AnLCBbMTA5NzFdXSwgWydtbGRyJywgWzgyMzBdXSwgWydtbnBsdXMnLCBbODcyM11dLCBbJ21vZGVscycsIFs4ODcxXV0sIFsnTW9wZicsIFsxMjAxMzJdXSwgWydtb3BmJywgWzEyMDE1OF1dLCBbJ21wJywgWzg3MjNdXSwgWydtc2NyJywgWzEyMDAwMl1dLCBbJ01zY3InLCBbODQ5OV1dLCBbJ21zdHBvcycsIFs4NzY2XV0sIFsnTXUnLCBbOTI0XV0sIFsnbXUnLCBbOTU2XV0sIFsnbXVsdGltYXAnLCBbODg4OF1dLCBbJ211bWFwJywgWzg4ODhdXSwgWyduYWJsYScsIFs4NzExXV0sIFsnTmFjdXRlJywgWzMyM11dLCBbJ25hY3V0ZScsIFszMjRdXSwgWyduYW5nJywgWzg3MzYsIDg0MDJdXSwgWyduYXAnLCBbODc3N11dLCBbJ25hcEUnLCBbMTA4NjQsIDgyNF1dLCBbJ25hcGlkJywgWzg3NzksIDgyNF1dLCBbJ25hcG9zJywgWzMyOV1dLCBbJ25hcHByb3gnLCBbODc3N11dLCBbJ25hdHVyYWwnLCBbOTgzOF1dLCBbJ25hdHVyYWxzJywgWzg0NjldXSwgWyduYXR1cicsIFs5ODM4XV0sIFsnbmJzcCcsIFsxNjBdXSwgWyduYnVtcCcsIFs4NzgyLCA4MjRdXSwgWyduYnVtcGUnLCBbODc4MywgODI0XV0sIFsnbmNhcCcsIFsxMDgxOV1dLCBbJ05jYXJvbicsIFszMjddXSwgWyduY2Fyb24nLCBbMzI4XV0sIFsnTmNlZGlsJywgWzMyNV1dLCBbJ25jZWRpbCcsIFszMjZdXSwgWyduY29uZycsIFs4Nzc1XV0sIFsnbmNvbmdkb3QnLCBbMTA4NjEsIDgyNF1dLCBbJ25jdXAnLCBbMTA4MThdXSwgWydOY3knLCBbMTA1M11dLCBbJ25jeScsIFsxMDg1XV0sIFsnbmRhc2gnLCBbODIxMV1dLCBbJ25lYXJoaycsIFsxMDUzMl1dLCBbJ25lYXJyJywgWzg1OTldXSwgWyduZUFycicsIFs4NjYzXV0sIFsnbmVhcnJvdycsIFs4NTk5XV0sIFsnbmUnLCBbODgwMF1dLCBbJ25lZG90JywgWzg3ODQsIDgyNF1dLCBbJ05lZ2F0aXZlTWVkaXVtU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVGhpY2tTcGFjZScsIFs4MjAzXV0sIFsnTmVnYXRpdmVUaGluU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVmVyeVRoaW5TcGFjZScsIFs4MjAzXV0sIFsnbmVxdWl2JywgWzg4MDJdXSwgWyduZXNlYXInLCBbMTA1MzZdXSwgWyduZXNpbScsIFs4NzcwLCA4MjRdXSwgWydOZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFs4ODExXV0sIFsnTmVzdGVkTGVzc0xlc3MnLCBbODgxMF1dLCBbJ25leGlzdCcsIFs4NzA4XV0sIFsnbmV4aXN0cycsIFs4NzA4XV0sIFsnTmZyJywgWzEyMDA4MV1dLCBbJ25mcicsIFsxMjAxMDddXSwgWyduZ0UnLCBbODgwNywgODI0XV0sIFsnbmdlJywgWzg4MTddXSwgWyduZ2VxJywgWzg4MTddXSwgWyduZ2VxcScsIFs4ODA3LCA4MjRdXSwgWyduZ2Vxc2xhbnQnLCBbMTA4NzgsIDgyNF1dLCBbJ25nZXMnLCBbMTA4NzgsIDgyNF1dLCBbJ25HZycsIFs4OTIxLCA4MjRdXSwgWyduZ3NpbScsIFs4ODIxXV0sIFsnbkd0JywgWzg4MTEsIDg0MDJdXSwgWyduZ3QnLCBbODgxNV1dLCBbJ25ndHInLCBbODgxNV1dLCBbJ25HdHYnLCBbODgxMSwgODI0XV0sIFsnbmhhcnInLCBbODYyMl1dLCBbJ25oQXJyJywgWzg2NTRdXSwgWyduaHBhcicsIFsxMDk5NF1dLCBbJ25pJywgWzg3MTVdXSwgWyduaXMnLCBbODk1Nl1dLCBbJ25pc2QnLCBbODk1NF1dLCBbJ25pdicsIFs4NzE1XV0sIFsnTkpjeScsIFsxMDM0XV0sIFsnbmpjeScsIFsxMTE0XV0sIFsnbmxhcnInLCBbODYwMl1dLCBbJ25sQXJyJywgWzg2NTNdXSwgWydubGRyJywgWzgyMjldXSwgWydubEUnLCBbODgwNiwgODI0XV0sIFsnbmxlJywgWzg4MTZdXSwgWydubGVmdGFycm93JywgWzg2MDJdXSwgWyduTGVmdGFycm93JywgWzg2NTNdXSwgWydubGVmdHJpZ2h0YXJyb3cnLCBbODYyMl1dLCBbJ25MZWZ0cmlnaHRhcnJvdycsIFs4NjU0XV0sIFsnbmxlcScsIFs4ODE2XV0sIFsnbmxlcXEnLCBbODgwNiwgODI0XV0sIFsnbmxlcXNsYW50JywgWzEwODc3LCA4MjRdXSwgWydubGVzJywgWzEwODc3LCA4MjRdXSwgWydubGVzcycsIFs4ODE0XV0sIFsnbkxsJywgWzg5MjAsIDgyNF1dLCBbJ25sc2ltJywgWzg4MjBdXSwgWyduTHQnLCBbODgxMCwgODQwMl1dLCBbJ25sdCcsIFs4ODE0XV0sIFsnbmx0cmknLCBbODkzOF1dLCBbJ25sdHJpZScsIFs4OTQwXV0sIFsnbkx0dicsIFs4ODEwLCA4MjRdXSwgWydubWlkJywgWzg3NDBdXSwgWydOb0JyZWFrJywgWzgyODhdXSwgWydOb25CcmVha2luZ1NwYWNlJywgWzE2MF1dLCBbJ25vcGYnLCBbMTIwMTU5XV0sIFsnTm9wZicsIFs4NDY5XV0sIFsnTm90JywgWzEwOTg4XV0sIFsnbm90JywgWzE3Ml1dLCBbJ05vdENvbmdydWVudCcsIFs4ODAyXV0sIFsnTm90Q3VwQ2FwJywgWzg4MTNdXSwgWydOb3REb3VibGVWZXJ0aWNhbEJhcicsIFs4NzQyXV0sIFsnTm90RWxlbWVudCcsIFs4NzEzXV0sIFsnTm90RXF1YWwnLCBbODgwMF1dLCBbJ05vdEVxdWFsVGlsZGUnLCBbODc3MCwgODI0XV0sIFsnTm90RXhpc3RzJywgWzg3MDhdXSwgWydOb3RHcmVhdGVyJywgWzg4MTVdXSwgWydOb3RHcmVhdGVyRXF1YWwnLCBbODgxN11dLCBbJ05vdEdyZWF0ZXJGdWxsRXF1YWwnLCBbODgwNywgODI0XV0sIFsnTm90R3JlYXRlckdyZWF0ZXInLCBbODgxMSwgODI0XV0sIFsnTm90R3JlYXRlckxlc3MnLCBbODgyNV1dLCBbJ05vdEdyZWF0ZXJTbGFudEVxdWFsJywgWzEwODc4LCA4MjRdXSwgWydOb3RHcmVhdGVyVGlsZGUnLCBbODgyMV1dLCBbJ05vdEh1bXBEb3duSHVtcCcsIFs4NzgyLCA4MjRdXSwgWydOb3RIdW1wRXF1YWwnLCBbODc4MywgODI0XV0sIFsnbm90aW4nLCBbODcxM11dLCBbJ25vdGluZG90JywgWzg5NDksIDgyNF1dLCBbJ25vdGluRScsIFs4OTUzLCA4MjRdXSwgWydub3RpbnZhJywgWzg3MTNdXSwgWydub3RpbnZiJywgWzg5NTFdXSwgWydub3RpbnZjJywgWzg5NTBdXSwgWydOb3RMZWZ0VHJpYW5nbGVCYXInLCBbMTA3MDMsIDgyNF1dLCBbJ05vdExlZnRUcmlhbmdsZScsIFs4OTM4XV0sIFsnTm90TGVmdFRyaWFuZ2xlRXF1YWwnLCBbODk0MF1dLCBbJ05vdExlc3MnLCBbODgxNF1dLCBbJ05vdExlc3NFcXVhbCcsIFs4ODE2XV0sIFsnTm90TGVzc0dyZWF0ZXInLCBbODgyNF1dLCBbJ05vdExlc3NMZXNzJywgWzg4MTAsIDgyNF1dLCBbJ05vdExlc3NTbGFudEVxdWFsJywgWzEwODc3LCA4MjRdXSwgWydOb3RMZXNzVGlsZGUnLCBbODgyMF1dLCBbJ05vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyJywgWzEwOTE0LCA4MjRdXSwgWydOb3ROZXN0ZWRMZXNzTGVzcycsIFsxMDkxMywgODI0XV0sIFsnbm90bmknLCBbODcxNl1dLCBbJ25vdG5pdmEnLCBbODcxNl1dLCBbJ25vdG5pdmInLCBbODk1OF1dLCBbJ25vdG5pdmMnLCBbODk1N11dLCBbJ05vdFByZWNlZGVzJywgWzg4MzJdXSwgWydOb3RQcmVjZWRlc0VxdWFsJywgWzEwOTI3LCA4MjRdXSwgWydOb3RQcmVjZWRlc1NsYW50RXF1YWwnLCBbODkyOF1dLCBbJ05vdFJldmVyc2VFbGVtZW50JywgWzg3MTZdXSwgWydOb3RSaWdodFRyaWFuZ2xlQmFyJywgWzEwNzA0LCA4MjRdXSwgWydOb3RSaWdodFRyaWFuZ2xlJywgWzg5MzldXSwgWydOb3RSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODk0MV1dLCBbJ05vdFNxdWFyZVN1YnNldCcsIFs4ODQ3LCA4MjRdXSwgWydOb3RTcXVhcmVTdWJzZXRFcXVhbCcsIFs4OTMwXV0sIFsnTm90U3F1YXJlU3VwZXJzZXQnLCBbODg0OCwgODI0XV0sIFsnTm90U3F1YXJlU3VwZXJzZXRFcXVhbCcsIFs4OTMxXV0sIFsnTm90U3Vic2V0JywgWzg4MzQsIDg0MDJdXSwgWydOb3RTdWJzZXRFcXVhbCcsIFs4ODQwXV0sIFsnTm90U3VjY2VlZHMnLCBbODgzM11dLCBbJ05vdFN1Y2NlZWRzRXF1YWwnLCBbMTA5MjgsIDgyNF1dLCBbJ05vdFN1Y2NlZWRzU2xhbnRFcXVhbCcsIFs4OTI5XV0sIFsnTm90U3VjY2VlZHNUaWxkZScsIFs4ODMxLCA4MjRdXSwgWydOb3RTdXBlcnNldCcsIFs4ODM1LCA4NDAyXV0sIFsnTm90U3VwZXJzZXRFcXVhbCcsIFs4ODQxXV0sIFsnTm90VGlsZGUnLCBbODc2OV1dLCBbJ05vdFRpbGRlRXF1YWwnLCBbODc3Ml1dLCBbJ05vdFRpbGRlRnVsbEVxdWFsJywgWzg3NzVdXSwgWydOb3RUaWxkZVRpbGRlJywgWzg3NzddXSwgWydOb3RWZXJ0aWNhbEJhcicsIFs4NzQwXV0sIFsnbnBhcmFsbGVsJywgWzg3NDJdXSwgWyducGFyJywgWzg3NDJdXSwgWyducGFyc2wnLCBbMTEwMDUsIDg0MjFdXSwgWyducGFydCcsIFs4NzA2LCA4MjRdXSwgWyducG9saW50JywgWzEwNzcyXV0sIFsnbnByJywgWzg4MzJdXSwgWyducHJjdWUnLCBbODkyOF1dLCBbJ25wcmVjJywgWzg4MzJdXSwgWyducHJlY2VxJywgWzEwOTI3LCA4MjRdXSwgWyducHJlJywgWzEwOTI3LCA4MjRdXSwgWyducmFycmMnLCBbMTA1NDcsIDgyNF1dLCBbJ25yYXJyJywgWzg2MDNdXSwgWyduckFycicsIFs4NjU1XV0sIFsnbnJhcnJ3JywgWzg2MDUsIDgyNF1dLCBbJ25yaWdodGFycm93JywgWzg2MDNdXSwgWyduUmlnaHRhcnJvdycsIFs4NjU1XV0sIFsnbnJ0cmknLCBbODkzOV1dLCBbJ25ydHJpZScsIFs4OTQxXV0sIFsnbnNjJywgWzg4MzNdXSwgWyduc2NjdWUnLCBbODkyOV1dLCBbJ25zY2UnLCBbMTA5MjgsIDgyNF1dLCBbJ05zY3InLCBbMTE5OTc3XV0sIFsnbnNjcicsIFsxMjAwMDNdXSwgWyduc2hvcnRtaWQnLCBbODc0MF1dLCBbJ25zaG9ydHBhcmFsbGVsJywgWzg3NDJdXSwgWyduc2ltJywgWzg3NjldXSwgWyduc2ltZScsIFs4NzcyXV0sIFsnbnNpbWVxJywgWzg3NzJdXSwgWyduc21pZCcsIFs4NzQwXV0sIFsnbnNwYXInLCBbODc0Ml1dLCBbJ25zcXN1YmUnLCBbODkzMF1dLCBbJ25zcXN1cGUnLCBbODkzMV1dLCBbJ25zdWInLCBbODgzNl1dLCBbJ25zdWJFJywgWzEwOTQ5LCA4MjRdXSwgWyduc3ViZScsIFs4ODQwXV0sIFsnbnN1YnNldCcsIFs4ODM0LCA4NDAyXV0sIFsnbnN1YnNldGVxJywgWzg4NDBdXSwgWyduc3Vic2V0ZXFxJywgWzEwOTQ5LCA4MjRdXSwgWyduc3VjYycsIFs4ODMzXV0sIFsnbnN1Y2NlcScsIFsxMDkyOCwgODI0XV0sIFsnbnN1cCcsIFs4ODM3XV0sIFsnbnN1cEUnLCBbMTA5NTAsIDgyNF1dLCBbJ25zdXBlJywgWzg4NDFdXSwgWyduc3Vwc2V0JywgWzg4MzUsIDg0MDJdXSwgWyduc3Vwc2V0ZXEnLCBbODg0MV1dLCBbJ25zdXBzZXRlcXEnLCBbMTA5NTAsIDgyNF1dLCBbJ250Z2wnLCBbODgyNV1dLCBbJ050aWxkZScsIFsyMDldXSwgWydudGlsZGUnLCBbMjQxXV0sIFsnbnRsZycsIFs4ODI0XV0sIFsnbnRyaWFuZ2xlbGVmdCcsIFs4OTM4XV0sIFsnbnRyaWFuZ2xlbGVmdGVxJywgWzg5NDBdXSwgWydudHJpYW5nbGVyaWdodCcsIFs4OTM5XV0sIFsnbnRyaWFuZ2xlcmlnaHRlcScsIFs4OTQxXV0sIFsnTnUnLCBbOTI1XV0sIFsnbnUnLCBbOTU3XV0sIFsnbnVtJywgWzM1XV0sIFsnbnVtZXJvJywgWzg0NzBdXSwgWydudW1zcCcsIFs4MTk5XV0sIFsnbnZhcCcsIFs4NzgxLCA4NDAyXV0sIFsnbnZkYXNoJywgWzg4NzZdXSwgWydudkRhc2gnLCBbODg3N11dLCBbJ25WZGFzaCcsIFs4ODc4XV0sIFsnblZEYXNoJywgWzg4NzldXSwgWydudmdlJywgWzg4MDUsIDg0MDJdXSwgWydudmd0JywgWzYyLCA4NDAyXV0sIFsnbnZIYXJyJywgWzEwNTAwXV0sIFsnbnZpbmZpbicsIFsxMDcxOF1dLCBbJ252bEFycicsIFsxMDQ5OF1dLCBbJ252bGUnLCBbODgwNCwgODQwMl1dLCBbJ252bHQnLCBbNjAsIDg0MDJdXSwgWydudmx0cmllJywgWzg4ODQsIDg0MDJdXSwgWydudnJBcnInLCBbMTA0OTldXSwgWydudnJ0cmllJywgWzg4ODUsIDg0MDJdXSwgWydudnNpbScsIFs4NzY0LCA4NDAyXV0sIFsnbndhcmhrJywgWzEwNTMxXV0sIFsnbndhcnInLCBbODU5OF1dLCBbJ253QXJyJywgWzg2NjJdXSwgWydud2Fycm93JywgWzg1OThdXSwgWydud25lYXInLCBbMTA1MzVdXSwgWydPYWN1dGUnLCBbMjExXV0sIFsnb2FjdXRlJywgWzI0M11dLCBbJ29hc3QnLCBbODg1OV1dLCBbJ09jaXJjJywgWzIxMl1dLCBbJ29jaXJjJywgWzI0NF1dLCBbJ29jaXInLCBbODg1OF1dLCBbJ09jeScsIFsxMDU0XV0sIFsnb2N5JywgWzEwODZdXSwgWydvZGFzaCcsIFs4ODYxXV0sIFsnT2RibGFjJywgWzMzNl1dLCBbJ29kYmxhYycsIFszMzddXSwgWydvZGl2JywgWzEwODA4XV0sIFsnb2RvdCcsIFs4ODU3XV0sIFsnb2Rzb2xkJywgWzEwNjg0XV0sIFsnT0VsaWcnLCBbMzM4XV0sIFsnb2VsaWcnLCBbMzM5XV0sIFsnb2ZjaXInLCBbMTA2ODddXSwgWydPZnInLCBbMTIwMDgyXV0sIFsnb2ZyJywgWzEyMDEwOF1dLCBbJ29nb24nLCBbNzMxXV0sIFsnT2dyYXZlJywgWzIxMF1dLCBbJ29ncmF2ZScsIFsyNDJdXSwgWydvZ3QnLCBbMTA2ODldXSwgWydvaGJhcicsIFsxMDY3N11dLCBbJ29obScsIFs5MzddXSwgWydvaW50JywgWzg3NTBdXSwgWydvbGFycicsIFs4NjM0XV0sIFsnb2xjaXInLCBbMTA2ODZdXSwgWydvbGNyb3NzJywgWzEwNjgzXV0sIFsnb2xpbmUnLCBbODI1NF1dLCBbJ29sdCcsIFsxMDY4OF1dLCBbJ09tYWNyJywgWzMzMl1dLCBbJ29tYWNyJywgWzMzM11dLCBbJ09tZWdhJywgWzkzN11dLCBbJ29tZWdhJywgWzk2OV1dLCBbJ09taWNyb24nLCBbOTI3XV0sIFsnb21pY3JvbicsIFs5NTldXSwgWydvbWlkJywgWzEwNjc4XV0sIFsnb21pbnVzJywgWzg4NTRdXSwgWydPb3BmJywgWzEyMDEzNF1dLCBbJ29vcGYnLCBbMTIwMTYwXV0sIFsnb3BhcicsIFsxMDY3OV1dLCBbJ09wZW5DdXJseURvdWJsZVF1b3RlJywgWzgyMjBdXSwgWydPcGVuQ3VybHlRdW90ZScsIFs4MjE2XV0sIFsnb3BlcnAnLCBbMTA2ODFdXSwgWydvcGx1cycsIFs4ODUzXV0sIFsnb3JhcnInLCBbODYzNV1dLCBbJ09yJywgWzEwODM2XV0sIFsnb3InLCBbODc0NF1dLCBbJ29yZCcsIFsxMDg0NV1dLCBbJ29yZGVyJywgWzg1MDBdXSwgWydvcmRlcm9mJywgWzg1MDBdXSwgWydvcmRmJywgWzE3MF1dLCBbJ29yZG0nLCBbMTg2XV0sIFsnb3JpZ29mJywgWzg4ODZdXSwgWydvcm9yJywgWzEwODM4XV0sIFsnb3JzbG9wZScsIFsxMDgzOV1dLCBbJ29ydicsIFsxMDg0M11dLCBbJ29TJywgWzk0MTZdXSwgWydPc2NyJywgWzExOTk3OF1dLCBbJ29zY3InLCBbODUwMF1dLCBbJ09zbGFzaCcsIFsyMTZdXSwgWydvc2xhc2gnLCBbMjQ4XV0sIFsnb3NvbCcsIFs4ODU2XV0sIFsnT3RpbGRlJywgWzIxM11dLCBbJ290aWxkZScsIFsyNDVdXSwgWydvdGltZXNhcycsIFsxMDgwNl1dLCBbJ090aW1lcycsIFsxMDgwN11dLCBbJ290aW1lcycsIFs4ODU1XV0sIFsnT3VtbCcsIFsyMTRdXSwgWydvdW1sJywgWzI0Nl1dLCBbJ292YmFyJywgWzkwMjFdXSwgWydPdmVyQmFyJywgWzgyNTRdXSwgWydPdmVyQnJhY2UnLCBbOTE4Ml1dLCBbJ092ZXJCcmFja2V0JywgWzkxNDBdXSwgWydPdmVyUGFyZW50aGVzaXMnLCBbOTE4MF1dLCBbJ3BhcmEnLCBbMTgyXV0sIFsncGFyYWxsZWwnLCBbODc0MV1dLCBbJ3BhcicsIFs4NzQxXV0sIFsncGFyc2ltJywgWzEwOTk1XV0sIFsncGFyc2wnLCBbMTEwMDVdXSwgWydwYXJ0JywgWzg3MDZdXSwgWydQYXJ0aWFsRCcsIFs4NzA2XV0sIFsnUGN5JywgWzEwNTVdXSwgWydwY3knLCBbMTA4N11dLCBbJ3BlcmNudCcsIFszN11dLCBbJ3BlcmlvZCcsIFs0Nl1dLCBbJ3Blcm1pbCcsIFs4MjQwXV0sIFsncGVycCcsIFs4ODY5XV0sIFsncGVydGVuaycsIFs4MjQxXV0sIFsnUGZyJywgWzEyMDA4M11dLCBbJ3BmcicsIFsxMjAxMDldXSwgWydQaGknLCBbOTM0XV0sIFsncGhpJywgWzk2Nl1dLCBbJ3BoaXYnLCBbOTgxXV0sIFsncGhtbWF0JywgWzg0OTldXSwgWydwaG9uZScsIFs5NzQyXV0sIFsnUGknLCBbOTI4XV0sIFsncGknLCBbOTYwXV0sIFsncGl0Y2hmb3JrJywgWzg5MTZdXSwgWydwaXYnLCBbOTgyXV0sIFsncGxhbmNrJywgWzg0NjNdXSwgWydwbGFuY2toJywgWzg0NjJdXSwgWydwbGFua3YnLCBbODQ2M11dLCBbJ3BsdXNhY2lyJywgWzEwNzg3XV0sIFsncGx1c2InLCBbODg2Ml1dLCBbJ3BsdXNjaXInLCBbMTA3ODZdXSwgWydwbHVzJywgWzQzXV0sIFsncGx1c2RvJywgWzg3MjRdXSwgWydwbHVzZHUnLCBbMTA3ODldXSwgWydwbHVzZScsIFsxMDg2Nl1dLCBbJ1BsdXNNaW51cycsIFsxNzddXSwgWydwbHVzbW4nLCBbMTc3XV0sIFsncGx1c3NpbScsIFsxMDc5MF1dLCBbJ3BsdXN0d28nLCBbMTA3OTFdXSwgWydwbScsIFsxNzddXSwgWydQb2luY2FyZXBsYW5lJywgWzg0NjBdXSwgWydwb2ludGludCcsIFsxMDc3M11dLCBbJ3BvcGYnLCBbMTIwMTYxXV0sIFsnUG9wZicsIFs4NDczXV0sIFsncG91bmQnLCBbMTYzXV0sIFsncHJhcCcsIFsxMDkzNV1dLCBbJ1ByJywgWzEwOTM5XV0sIFsncHInLCBbODgyNl1dLCBbJ3ByY3VlJywgWzg4MjhdXSwgWydwcmVjYXBwcm94JywgWzEwOTM1XV0sIFsncHJlYycsIFs4ODI2XV0sIFsncHJlY2N1cmx5ZXEnLCBbODgyOF1dLCBbJ1ByZWNlZGVzJywgWzg4MjZdXSwgWydQcmVjZWRlc0VxdWFsJywgWzEwOTI3XV0sIFsnUHJlY2VkZXNTbGFudEVxdWFsJywgWzg4MjhdXSwgWydQcmVjZWRlc1RpbGRlJywgWzg4MzBdXSwgWydwcmVjZXEnLCBbMTA5MjddXSwgWydwcmVjbmFwcHJveCcsIFsxMDkzN11dLCBbJ3ByZWNuZXFxJywgWzEwOTMzXV0sIFsncHJlY25zaW0nLCBbODkzNl1dLCBbJ3ByZScsIFsxMDkyN11dLCBbJ3ByRScsIFsxMDkzMV1dLCBbJ3ByZWNzaW0nLCBbODgzMF1dLCBbJ3ByaW1lJywgWzgyNDJdXSwgWydQcmltZScsIFs4MjQzXV0sIFsncHJpbWVzJywgWzg0NzNdXSwgWydwcm5hcCcsIFsxMDkzN11dLCBbJ3BybkUnLCBbMTA5MzNdXSwgWydwcm5zaW0nLCBbODkzNl1dLCBbJ3Byb2QnLCBbODcxOV1dLCBbJ1Byb2R1Y3QnLCBbODcxOV1dLCBbJ3Byb2ZhbGFyJywgWzkwMDZdXSwgWydwcm9mbGluZScsIFs4OTc4XV0sIFsncHJvZnN1cmYnLCBbODk3OV1dLCBbJ3Byb3AnLCBbODczM11dLCBbJ1Byb3BvcnRpb25hbCcsIFs4NzMzXV0sIFsnUHJvcG9ydGlvbicsIFs4NzU5XV0sIFsncHJvcHRvJywgWzg3MzNdXSwgWydwcnNpbScsIFs4ODMwXV0sIFsncHJ1cmVsJywgWzg4ODBdXSwgWydQc2NyJywgWzExOTk3OV1dLCBbJ3BzY3InLCBbMTIwMDA1XV0sIFsnUHNpJywgWzkzNl1dLCBbJ3BzaScsIFs5NjhdXSwgWydwdW5jc3AnLCBbODIwMF1dLCBbJ1FmcicsIFsxMjAwODRdXSwgWydxZnInLCBbMTIwMTEwXV0sIFsncWludCcsIFsxMDc2NF1dLCBbJ3FvcGYnLCBbMTIwMTYyXV0sIFsnUW9wZicsIFs4NDc0XV0sIFsncXByaW1lJywgWzgyNzldXSwgWydRc2NyJywgWzExOTk4MF1dLCBbJ3FzY3InLCBbMTIwMDA2XV0sIFsncXVhdGVybmlvbnMnLCBbODQ2MV1dLCBbJ3F1YXRpbnQnLCBbMTA3NzRdXSwgWydxdWVzdCcsIFs2M11dLCBbJ3F1ZXN0ZXEnLCBbODc5OV1dLCBbJ3F1b3QnLCBbMzRdXSwgWydRVU9UJywgWzM0XV0sIFsnckFhcnInLCBbODY2N11dLCBbJ3JhY2UnLCBbODc2NSwgODE3XV0sIFsnUmFjdXRlJywgWzM0MF1dLCBbJ3JhY3V0ZScsIFszNDFdXSwgWydyYWRpYycsIFs4NzMwXV0sIFsncmFlbXB0eXYnLCBbMTA2NzVdXSwgWydyYW5nJywgWzEwMjE3XV0sIFsnUmFuZycsIFsxMDIxOV1dLCBbJ3JhbmdkJywgWzEwNjQyXV0sIFsncmFuZ2UnLCBbMTA2NjFdXSwgWydyYW5nbGUnLCBbMTAyMTddXSwgWydyYXF1bycsIFsxODddXSwgWydyYXJyYXAnLCBbMTA2MTNdXSwgWydyYXJyYicsIFs4Njc3XV0sIFsncmFycmJmcycsIFsxMDUyOF1dLCBbJ3JhcnJjJywgWzEwNTQ3XV0sIFsncmFycicsIFs4NTk0XV0sIFsnUmFycicsIFs4NjA4XV0sIFsnckFycicsIFs4NjU4XV0sIFsncmFycmZzJywgWzEwNTI2XV0sIFsncmFycmhrJywgWzg2MThdXSwgWydyYXJybHAnLCBbODYyMF1dLCBbJ3JhcnJwbCcsIFsxMDU2NV1dLCBbJ3JhcnJzaW0nLCBbMTA2MTJdXSwgWydSYXJydGwnLCBbMTA1MThdXSwgWydyYXJydGwnLCBbODYxMV1dLCBbJ3JhcnJ3JywgWzg2MDVdXSwgWydyYXRhaWwnLCBbMTA1MjJdXSwgWydyQXRhaWwnLCBbMTA1MjRdXSwgWydyYXRpbycsIFs4NzU4XV0sIFsncmF0aW9uYWxzJywgWzg0NzRdXSwgWydyYmFycicsIFsxMDUwOV1dLCBbJ3JCYXJyJywgWzEwNTExXV0sIFsnUkJhcnInLCBbMTA1MTJdXSwgWydyYmJyaycsIFsxMDA5OV1dLCBbJ3JicmFjZScsIFsxMjVdXSwgWydyYnJhY2snLCBbOTNdXSwgWydyYnJrZScsIFsxMDYzNl1dLCBbJ3JicmtzbGQnLCBbMTA2MzhdXSwgWydyYnJrc2x1JywgWzEwNjQwXV0sIFsnUmNhcm9uJywgWzM0NF1dLCBbJ3JjYXJvbicsIFszNDVdXSwgWydSY2VkaWwnLCBbMzQyXV0sIFsncmNlZGlsJywgWzM0M11dLCBbJ3JjZWlsJywgWzg5NjldXSwgWydyY3ViJywgWzEyNV1dLCBbJ1JjeScsIFsxMDU2XV0sIFsncmN5JywgWzEwODhdXSwgWydyZGNhJywgWzEwNTUxXV0sIFsncmRsZGhhcicsIFsxMDYwMV1dLCBbJ3JkcXVvJywgWzgyMjFdXSwgWydyZHF1b3InLCBbODIyMV1dLCBbJ3Jkc2gnLCBbODYyN11dLCBbJ3JlYWwnLCBbODQ3Nl1dLCBbJ3JlYWxpbmUnLCBbODQ3NV1dLCBbJ3JlYWxwYXJ0JywgWzg0NzZdXSwgWydyZWFscycsIFs4NDc3XV0sIFsnUmUnLCBbODQ3Nl1dLCBbJ3JlY3QnLCBbOTY0NV1dLCBbJ3JlZycsIFsxNzRdXSwgWydSRUcnLCBbMTc0XV0sIFsnUmV2ZXJzZUVsZW1lbnQnLCBbODcxNV1dLCBbJ1JldmVyc2VFcXVpbGlicml1bScsIFs4NjUxXV0sIFsnUmV2ZXJzZVVwRXF1aWxpYnJpdW0nLCBbMTA2MDddXSwgWydyZmlzaHQnLCBbMTA2MjFdXSwgWydyZmxvb3InLCBbODk3MV1dLCBbJ3JmcicsIFsxMjAxMTFdXSwgWydSZnInLCBbODQ3Nl1dLCBbJ3JIYXInLCBbMTA1OTZdXSwgWydyaGFyZCcsIFs4NjQxXV0sIFsncmhhcnUnLCBbODY0MF1dLCBbJ3JoYXJ1bCcsIFsxMDYwNF1dLCBbJ1JobycsIFs5MjldXSwgWydyaG8nLCBbOTYxXV0sIFsncmhvdicsIFsxMDA5XV0sIFsnUmlnaHRBbmdsZUJyYWNrZXQnLCBbMTAyMTddXSwgWydSaWdodEFycm93QmFyJywgWzg2NzddXSwgWydyaWdodGFycm93JywgWzg1OTRdXSwgWydSaWdodEFycm93JywgWzg1OTRdXSwgWydSaWdodGFycm93JywgWzg2NThdXSwgWydSaWdodEFycm93TGVmdEFycm93JywgWzg2NDRdXSwgWydyaWdodGFycm93dGFpbCcsIFs4NjExXV0sIFsnUmlnaHRDZWlsaW5nJywgWzg5NjldXSwgWydSaWdodERvdWJsZUJyYWNrZXQnLCBbMTAyMTVdXSwgWydSaWdodERvd25UZWVWZWN0b3InLCBbMTA1ODldXSwgWydSaWdodERvd25WZWN0b3JCYXInLCBbMTA1ODFdXSwgWydSaWdodERvd25WZWN0b3InLCBbODY0Ml1dLCBbJ1JpZ2h0Rmxvb3InLCBbODk3MV1dLCBbJ3JpZ2h0aGFycG9vbmRvd24nLCBbODY0MV1dLCBbJ3JpZ2h0aGFycG9vbnVwJywgWzg2NDBdXSwgWydyaWdodGxlZnRhcnJvd3MnLCBbODY0NF1dLCBbJ3JpZ2h0bGVmdGhhcnBvb25zJywgWzg2NTJdXSwgWydyaWdodHJpZ2h0YXJyb3dzJywgWzg2NDldXSwgWydyaWdodHNxdWlnYXJyb3cnLCBbODYwNV1dLCBbJ1JpZ2h0VGVlQXJyb3cnLCBbODYxNF1dLCBbJ1JpZ2h0VGVlJywgWzg4NjZdXSwgWydSaWdodFRlZVZlY3RvcicsIFsxMDU4N11dLCBbJ3JpZ2h0dGhyZWV0aW1lcycsIFs4OTA4XV0sIFsnUmlnaHRUcmlhbmdsZUJhcicsIFsxMDcwNF1dLCBbJ1JpZ2h0VHJpYW5nbGUnLCBbODg4M11dLCBbJ1JpZ2h0VHJpYW5nbGVFcXVhbCcsIFs4ODg1XV0sIFsnUmlnaHRVcERvd25WZWN0b3InLCBbMTA1NzVdXSwgWydSaWdodFVwVGVlVmVjdG9yJywgWzEwNTg4XV0sIFsnUmlnaHRVcFZlY3RvckJhcicsIFsxMDU4MF1dLCBbJ1JpZ2h0VXBWZWN0b3InLCBbODYzOF1dLCBbJ1JpZ2h0VmVjdG9yQmFyJywgWzEwNTc5XV0sIFsnUmlnaHRWZWN0b3InLCBbODY0MF1dLCBbJ3JpbmcnLCBbNzMwXV0sIFsncmlzaW5nZG90c2VxJywgWzg3ODddXSwgWydybGFycicsIFs4NjQ0XV0sIFsncmxoYXInLCBbODY1Ml1dLCBbJ3JsbScsIFs4MjA3XV0sIFsncm1vdXN0YWNoZScsIFs5MTM3XV0sIFsncm1vdXN0JywgWzkxMzddXSwgWydybm1pZCcsIFsxMDk5MF1dLCBbJ3JvYW5nJywgWzEwMjIxXV0sIFsncm9hcnInLCBbODcwMl1dLCBbJ3JvYnJrJywgWzEwMjE1XV0sIFsncm9wYXInLCBbMTA2MzBdXSwgWydyb3BmJywgWzEyMDE2M11dLCBbJ1JvcGYnLCBbODQ3N11dLCBbJ3JvcGx1cycsIFsxMDc5OF1dLCBbJ3JvdGltZXMnLCBbMTA4MDVdXSwgWydSb3VuZEltcGxpZXMnLCBbMTA2MDhdXSwgWydycGFyJywgWzQxXV0sIFsncnBhcmd0JywgWzEwNjQ0XV0sIFsncnBwb2xpbnQnLCBbMTA3NzBdXSwgWydycmFycicsIFs4NjQ5XV0sIFsnUnJpZ2h0YXJyb3cnLCBbODY2N11dLCBbJ3JzYXF1bycsIFs4MjUwXV0sIFsncnNjcicsIFsxMjAwMDddXSwgWydSc2NyJywgWzg0NzVdXSwgWydyc2gnLCBbODYyNV1dLCBbJ1JzaCcsIFs4NjI1XV0sIFsncnNxYicsIFs5M11dLCBbJ3JzcXVvJywgWzgyMTddXSwgWydyc3F1b3InLCBbODIxN11dLCBbJ3J0aHJlZScsIFs4OTA4XV0sIFsncnRpbWVzJywgWzg5MDZdXSwgWydydHJpJywgWzk2NTddXSwgWydydHJpZScsIFs4ODg1XV0sIFsncnRyaWYnLCBbOTY1Nl1dLCBbJ3J0cmlsdHJpJywgWzEwNzAyXV0sIFsnUnVsZURlbGF5ZWQnLCBbMTA3NDBdXSwgWydydWx1aGFyJywgWzEwNjAwXV0sIFsncngnLCBbODQ3OF1dLCBbJ1NhY3V0ZScsIFszNDZdXSwgWydzYWN1dGUnLCBbMzQ3XV0sIFsnc2JxdW8nLCBbODIxOF1dLCBbJ3NjYXAnLCBbMTA5MzZdXSwgWydTY2Fyb24nLCBbMzUyXV0sIFsnc2Nhcm9uJywgWzM1M11dLCBbJ1NjJywgWzEwOTQwXV0sIFsnc2MnLCBbODgyN11dLCBbJ3NjY3VlJywgWzg4MjldXSwgWydzY2UnLCBbMTA5MjhdXSwgWydzY0UnLCBbMTA5MzJdXSwgWydTY2VkaWwnLCBbMzUwXV0sIFsnc2NlZGlsJywgWzM1MV1dLCBbJ1NjaXJjJywgWzM0OF1dLCBbJ3NjaXJjJywgWzM0OV1dLCBbJ3NjbmFwJywgWzEwOTM4XV0sIFsnc2NuRScsIFsxMDkzNF1dLCBbJ3NjbnNpbScsIFs4OTM3XV0sIFsnc2Nwb2xpbnQnLCBbMTA3NzFdXSwgWydzY3NpbScsIFs4ODMxXV0sIFsnU2N5JywgWzEwNTddXSwgWydzY3knLCBbMTA4OV1dLCBbJ3Nkb3RiJywgWzg4NjVdXSwgWydzZG90JywgWzg5MDFdXSwgWydzZG90ZScsIFsxMDg1NF1dLCBbJ3NlYXJoaycsIFsxMDUzM11dLCBbJ3NlYXJyJywgWzg2MDBdXSwgWydzZUFycicsIFs4NjY0XV0sIFsnc2VhcnJvdycsIFs4NjAwXV0sIFsnc2VjdCcsIFsxNjddXSwgWydzZW1pJywgWzU5XV0sIFsnc2Vzd2FyJywgWzEwNTM3XV0sIFsnc2V0bWludXMnLCBbODcyNl1dLCBbJ3NldG1uJywgWzg3MjZdXSwgWydzZXh0JywgWzEwMDM4XV0sIFsnU2ZyJywgWzEyMDA4Nl1dLCBbJ3NmcicsIFsxMjAxMTJdXSwgWydzZnJvd24nLCBbODk5NF1dLCBbJ3NoYXJwJywgWzk4MzldXSwgWydTSENIY3knLCBbMTA2NV1dLCBbJ3NoY2hjeScsIFsxMDk3XV0sIFsnU0hjeScsIFsxMDY0XV0sIFsnc2hjeScsIFsxMDk2XV0sIFsnU2hvcnREb3duQXJyb3cnLCBbODU5NV1dLCBbJ1Nob3J0TGVmdEFycm93JywgWzg1OTJdXSwgWydzaG9ydG1pZCcsIFs4NzM5XV0sIFsnc2hvcnRwYXJhbGxlbCcsIFs4NzQxXV0sIFsnU2hvcnRSaWdodEFycm93JywgWzg1OTRdXSwgWydTaG9ydFVwQXJyb3cnLCBbODU5M11dLCBbJ3NoeScsIFsxNzNdXSwgWydTaWdtYScsIFs5MzFdXSwgWydzaWdtYScsIFs5NjNdXSwgWydzaWdtYWYnLCBbOTYyXV0sIFsnc2lnbWF2JywgWzk2Ml1dLCBbJ3NpbScsIFs4NzY0XV0sIFsnc2ltZG90JywgWzEwODU4XV0sIFsnc2ltZScsIFs4NzcxXV0sIFsnc2ltZXEnLCBbODc3MV1dLCBbJ3NpbWcnLCBbMTA5MTBdXSwgWydzaW1nRScsIFsxMDkxMl1dLCBbJ3NpbWwnLCBbMTA5MDldXSwgWydzaW1sRScsIFsxMDkxMV1dLCBbJ3NpbW5lJywgWzg3NzRdXSwgWydzaW1wbHVzJywgWzEwNzg4XV0sIFsnc2ltcmFycicsIFsxMDYxMF1dLCBbJ3NsYXJyJywgWzg1OTJdXSwgWydTbWFsbENpcmNsZScsIFs4NzI4XV0sIFsnc21hbGxzZXRtaW51cycsIFs4NzI2XV0sIFsnc21hc2hwJywgWzEwODAzXV0sIFsnc21lcGFyc2wnLCBbMTA3MjRdXSwgWydzbWlkJywgWzg3MzldXSwgWydzbWlsZScsIFs4OTk1XV0sIFsnc210JywgWzEwOTIyXV0sIFsnc210ZScsIFsxMDkyNF1dLCBbJ3NtdGVzJywgWzEwOTI0LCA2NTAyNF1dLCBbJ1NPRlRjeScsIFsxMDY4XV0sIFsnc29mdGN5JywgWzExMDBdXSwgWydzb2xiYXInLCBbOTAyM11dLCBbJ3NvbGInLCBbMTA2OTJdXSwgWydzb2wnLCBbNDddXSwgWydTb3BmJywgWzEyMDEzOF1dLCBbJ3NvcGYnLCBbMTIwMTY0XV0sIFsnc3BhZGVzJywgWzk4MjRdXSwgWydzcGFkZXN1aXQnLCBbOTgyNF1dLCBbJ3NwYXInLCBbODc0MV1dLCBbJ3NxY2FwJywgWzg4NTFdXSwgWydzcWNhcHMnLCBbODg1MSwgNjUwMjRdXSwgWydzcWN1cCcsIFs4ODUyXV0sIFsnc3FjdXBzJywgWzg4NTIsIDY1MDI0XV0sIFsnU3FydCcsIFs4NzMwXV0sIFsnc3FzdWInLCBbODg0N11dLCBbJ3Nxc3ViZScsIFs4ODQ5XV0sIFsnc3FzdWJzZXQnLCBbODg0N11dLCBbJ3Nxc3Vic2V0ZXEnLCBbODg0OV1dLCBbJ3Nxc3VwJywgWzg4NDhdXSwgWydzcXN1cGUnLCBbODg1MF1dLCBbJ3Nxc3Vwc2V0JywgWzg4NDhdXSwgWydzcXN1cHNldGVxJywgWzg4NTBdXSwgWydzcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZScsIFs5NjMzXV0sIFsnU3F1YXJlSW50ZXJzZWN0aW9uJywgWzg4NTFdXSwgWydTcXVhcmVTdWJzZXQnLCBbODg0N11dLCBbJ1NxdWFyZVN1YnNldEVxdWFsJywgWzg4NDldXSwgWydTcXVhcmVTdXBlcnNldCcsIFs4ODQ4XV0sIFsnU3F1YXJlU3VwZXJzZXRFcXVhbCcsIFs4ODUwXV0sIFsnU3F1YXJlVW5pb24nLCBbODg1Ml1dLCBbJ3NxdWFyZicsIFs5NjQyXV0sIFsnc3F1JywgWzk2MzNdXSwgWydzcXVmJywgWzk2NDJdXSwgWydzcmFycicsIFs4NTk0XV0sIFsnU3NjcicsIFsxMTk5ODJdXSwgWydzc2NyJywgWzEyMDAwOF1dLCBbJ3NzZXRtbicsIFs4NzI2XV0sIFsnc3NtaWxlJywgWzg5OTVdXSwgWydzc3RhcmYnLCBbODkwMl1dLCBbJ1N0YXInLCBbODkwMl1dLCBbJ3N0YXInLCBbOTczNF1dLCBbJ3N0YXJmJywgWzk3MzNdXSwgWydzdHJhaWdodGVwc2lsb24nLCBbMTAxM11dLCBbJ3N0cmFpZ2h0cGhpJywgWzk4MV1dLCBbJ3N0cm5zJywgWzE3NV1dLCBbJ3N1YicsIFs4ODM0XV0sIFsnU3ViJywgWzg5MTJdXSwgWydzdWJkb3QnLCBbMTA5NDFdXSwgWydzdWJFJywgWzEwOTQ5XV0sIFsnc3ViZScsIFs4ODM4XV0sIFsnc3ViZWRvdCcsIFsxMDk0N11dLCBbJ3N1Ym11bHQnLCBbMTA5NDVdXSwgWydzdWJuRScsIFsxMDk1NV1dLCBbJ3N1Ym5lJywgWzg4NDJdXSwgWydzdWJwbHVzJywgWzEwOTQzXV0sIFsnc3VicmFycicsIFsxMDYxN11dLCBbJ3N1YnNldCcsIFs4ODM0XV0sIFsnU3Vic2V0JywgWzg5MTJdXSwgWydzdWJzZXRlcScsIFs4ODM4XV0sIFsnc3Vic2V0ZXFxJywgWzEwOTQ5XV0sIFsnU3Vic2V0RXF1YWwnLCBbODgzOF1dLCBbJ3N1YnNldG5lcScsIFs4ODQyXV0sIFsnc3Vic2V0bmVxcScsIFsxMDk1NV1dLCBbJ3N1YnNpbScsIFsxMDk1MV1dLCBbJ3N1YnN1YicsIFsxMDk2NV1dLCBbJ3N1YnN1cCcsIFsxMDk2M11dLCBbJ3N1Y2NhcHByb3gnLCBbMTA5MzZdXSwgWydzdWNjJywgWzg4MjddXSwgWydzdWNjY3VybHllcScsIFs4ODI5XV0sIFsnU3VjY2VlZHMnLCBbODgyN11dLCBbJ1N1Y2NlZWRzRXF1YWwnLCBbMTA5MjhdXSwgWydTdWNjZWVkc1NsYW50RXF1YWwnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzVGlsZGUnLCBbODgzMV1dLCBbJ3N1Y2NlcScsIFsxMDkyOF1dLCBbJ3N1Y2NuYXBwcm94JywgWzEwOTM4XV0sIFsnc3VjY25lcXEnLCBbMTA5MzRdXSwgWydzdWNjbnNpbScsIFs4OTM3XV0sIFsnc3VjY3NpbScsIFs4ODMxXV0sIFsnU3VjaFRoYXQnLCBbODcxNV1dLCBbJ3N1bScsIFs4NzIxXV0sIFsnU3VtJywgWzg3MjFdXSwgWydzdW5nJywgWzk4MzRdXSwgWydzdXAxJywgWzE4NV1dLCBbJ3N1cDInLCBbMTc4XV0sIFsnc3VwMycsIFsxNzldXSwgWydzdXAnLCBbODgzNV1dLCBbJ1N1cCcsIFs4OTEzXV0sIFsnc3VwZG90JywgWzEwOTQyXV0sIFsnc3VwZHN1YicsIFsxMDk2OF1dLCBbJ3N1cEUnLCBbMTA5NTBdXSwgWydzdXBlJywgWzg4MzldXSwgWydzdXBlZG90JywgWzEwOTQ4XV0sIFsnU3VwZXJzZXQnLCBbODgzNV1dLCBbJ1N1cGVyc2V0RXF1YWwnLCBbODgzOV1dLCBbJ3N1cGhzb2wnLCBbMTAxODVdXSwgWydzdXBoc3ViJywgWzEwOTY3XV0sIFsnc3VwbGFycicsIFsxMDYxOV1dLCBbJ3N1cG11bHQnLCBbMTA5NDZdXSwgWydzdXBuRScsIFsxMDk1Nl1dLCBbJ3N1cG5lJywgWzg4NDNdXSwgWydzdXBwbHVzJywgWzEwOTQ0XV0sIFsnc3Vwc2V0JywgWzg4MzVdXSwgWydTdXBzZXQnLCBbODkxM11dLCBbJ3N1cHNldGVxJywgWzg4MzldXSwgWydzdXBzZXRlcXEnLCBbMTA5NTBdXSwgWydzdXBzZXRuZXEnLCBbODg0M11dLCBbJ3N1cHNldG5lcXEnLCBbMTA5NTZdXSwgWydzdXBzaW0nLCBbMTA5NTJdXSwgWydzdXBzdWInLCBbMTA5NjRdXSwgWydzdXBzdXAnLCBbMTA5NjZdXSwgWydzd2FyaGsnLCBbMTA1MzRdXSwgWydzd2FycicsIFs4NjAxXV0sIFsnc3dBcnInLCBbODY2NV1dLCBbJ3N3YXJyb3cnLCBbODYwMV1dLCBbJ3N3bndhcicsIFsxMDUzOF1dLCBbJ3N6bGlnJywgWzIyM11dLCBbJ1RhYicsIFs5XV0sIFsndGFyZ2V0JywgWzg5ODJdXSwgWydUYXUnLCBbOTMyXV0sIFsndGF1JywgWzk2NF1dLCBbJ3RicmsnLCBbOTE0MF1dLCBbJ1RjYXJvbicsIFszNTZdXSwgWyd0Y2Fyb24nLCBbMzU3XV0sIFsnVGNlZGlsJywgWzM1NF1dLCBbJ3RjZWRpbCcsIFszNTVdXSwgWydUY3knLCBbMTA1OF1dLCBbJ3RjeScsIFsxMDkwXV0sIFsndGRvdCcsIFs4NDExXV0sIFsndGVscmVjJywgWzg5ODFdXSwgWydUZnInLCBbMTIwMDg3XV0sIFsndGZyJywgWzEyMDExM11dLCBbJ3RoZXJlNCcsIFs4NzU2XV0sIFsndGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGVyZWZvcmUnLCBbODc1Nl1dLCBbJ1RoZXRhJywgWzkyMF1dLCBbJ3RoZXRhJywgWzk1Ml1dLCBbJ3RoZXRhc3ltJywgWzk3N11dLCBbJ3RoZXRhdicsIFs5NzddXSwgWyd0aGlja2FwcHJveCcsIFs4Nzc2XV0sIFsndGhpY2tzaW0nLCBbODc2NF1dLCBbJ1RoaWNrU3BhY2UnLCBbODI4NywgODIwMl1dLCBbJ1RoaW5TcGFjZScsIFs4MjAxXV0sIFsndGhpbnNwJywgWzgyMDFdXSwgWyd0aGthcCcsIFs4Nzc2XV0sIFsndGhrc2ltJywgWzg3NjRdXSwgWydUSE9STicsIFsyMjJdXSwgWyd0aG9ybicsIFsyNTRdXSwgWyd0aWxkZScsIFs3MzJdXSwgWydUaWxkZScsIFs4NzY0XV0sIFsnVGlsZGVFcXVhbCcsIFs4NzcxXV0sIFsnVGlsZGVGdWxsRXF1YWwnLCBbODc3M11dLCBbJ1RpbGRlVGlsZGUnLCBbODc3Nl1dLCBbJ3RpbWVzYmFyJywgWzEwODAxXV0sIFsndGltZXNiJywgWzg4NjRdXSwgWyd0aW1lcycsIFsyMTVdXSwgWyd0aW1lc2QnLCBbMTA4MDBdXSwgWyd0aW50JywgWzg3NDldXSwgWyd0b2VhJywgWzEwNTM2XV0sIFsndG9wYm90JywgWzkwMTRdXSwgWyd0b3BjaXInLCBbMTA5OTNdXSwgWyd0b3AnLCBbODg2OF1dLCBbJ1RvcGYnLCBbMTIwMTM5XV0sIFsndG9wZicsIFsxMjAxNjVdXSwgWyd0b3Bmb3JrJywgWzEwOTcwXV0sIFsndG9zYScsIFsxMDUzN11dLCBbJ3RwcmltZScsIFs4MjQ0XV0sIFsndHJhZGUnLCBbODQ4Ml1dLCBbJ1RSQURFJywgWzg0ODJdXSwgWyd0cmlhbmdsZScsIFs5NjUzXV0sIFsndHJpYW5nbGVkb3duJywgWzk2NjNdXSwgWyd0cmlhbmdsZWxlZnQnLCBbOTY2N11dLCBbJ3RyaWFuZ2xlbGVmdGVxJywgWzg4ODRdXSwgWyd0cmlhbmdsZXEnLCBbODc5Nl1dLCBbJ3RyaWFuZ2xlcmlnaHQnLCBbOTY1N11dLCBbJ3RyaWFuZ2xlcmlnaHRlcScsIFs4ODg1XV0sIFsndHJpZG90JywgWzk3MDhdXSwgWyd0cmllJywgWzg3OTZdXSwgWyd0cmltaW51cycsIFsxMDgxMF1dLCBbJ1RyaXBsZURvdCcsIFs4NDExXV0sIFsndHJpcGx1cycsIFsxMDgwOV1dLCBbJ3RyaXNiJywgWzEwNzAxXV0sIFsndHJpdGltZScsIFsxMDgxMV1dLCBbJ3RycGV6aXVtJywgWzkxODZdXSwgWydUc2NyJywgWzExOTk4M11dLCBbJ3RzY3InLCBbMTIwMDA5XV0sIFsnVFNjeScsIFsxMDYyXV0sIFsndHNjeScsIFsxMDk0XV0sIFsnVFNIY3knLCBbMTAzNV1dLCBbJ3RzaGN5JywgWzExMTVdXSwgWydUc3Ryb2snLCBbMzU4XV0sIFsndHN0cm9rJywgWzM1OV1dLCBbJ3R3aXh0JywgWzg4MTJdXSwgWyd0d29oZWFkbGVmdGFycm93JywgWzg2MDZdXSwgWyd0d29oZWFkcmlnaHRhcnJvdycsIFs4NjA4XV0sIFsnVWFjdXRlJywgWzIxOF1dLCBbJ3VhY3V0ZScsIFsyNTBdXSwgWyd1YXJyJywgWzg1OTNdXSwgWydVYXJyJywgWzg2MDddXSwgWyd1QXJyJywgWzg2NTddXSwgWydVYXJyb2NpcicsIFsxMDU2OV1dLCBbJ1VicmN5JywgWzEwMzhdXSwgWyd1YnJjeScsIFsxMTE4XV0sIFsnVWJyZXZlJywgWzM2NF1dLCBbJ3VicmV2ZScsIFszNjVdXSwgWydVY2lyYycsIFsyMTldXSwgWyd1Y2lyYycsIFsyNTFdXSwgWydVY3knLCBbMTA1OV1dLCBbJ3VjeScsIFsxMDkxXV0sIFsndWRhcnInLCBbODY0NV1dLCBbJ1VkYmxhYycsIFszNjhdXSwgWyd1ZGJsYWMnLCBbMzY5XV0sIFsndWRoYXInLCBbMTA2MDZdXSwgWyd1ZmlzaHQnLCBbMTA2MjJdXSwgWydVZnInLCBbMTIwMDg4XV0sIFsndWZyJywgWzEyMDExNF1dLCBbJ1VncmF2ZScsIFsyMTddXSwgWyd1Z3JhdmUnLCBbMjQ5XV0sIFsndUhhcicsIFsxMDU5NV1dLCBbJ3VoYXJsJywgWzg2MzldXSwgWyd1aGFycicsIFs4NjM4XV0sIFsndWhibGsnLCBbOTYwMF1dLCBbJ3VsY29ybicsIFs4OTg4XV0sIFsndWxjb3JuZXInLCBbODk4OF1dLCBbJ3VsY3JvcCcsIFs4OTc1XV0sIFsndWx0cmknLCBbOTcyMF1dLCBbJ1VtYWNyJywgWzM2Ml1dLCBbJ3VtYWNyJywgWzM2M11dLCBbJ3VtbCcsIFsxNjhdXSwgWydVbmRlckJhcicsIFs5NV1dLCBbJ1VuZGVyQnJhY2UnLCBbOTE4M11dLCBbJ1VuZGVyQnJhY2tldCcsIFs5MTQxXV0sIFsnVW5kZXJQYXJlbnRoZXNpcycsIFs5MTgxXV0sIFsnVW5pb24nLCBbODg5OV1dLCBbJ1VuaW9uUGx1cycsIFs4ODQ2XV0sIFsnVW9nb24nLCBbMzcwXV0sIFsndW9nb24nLCBbMzcxXV0sIFsnVW9wZicsIFsxMjAxNDBdXSwgWyd1b3BmJywgWzEyMDE2Nl1dLCBbJ1VwQXJyb3dCYXInLCBbMTA1MTRdXSwgWyd1cGFycm93JywgWzg1OTNdXSwgWydVcEFycm93JywgWzg1OTNdXSwgWydVcGFycm93JywgWzg2NTddXSwgWydVcEFycm93RG93bkFycm93JywgWzg2NDVdXSwgWyd1cGRvd25hcnJvdycsIFs4NTk3XV0sIFsnVXBEb3duQXJyb3cnLCBbODU5N11dLCBbJ1VwZG93bmFycm93JywgWzg2NjFdXSwgWydVcEVxdWlsaWJyaXVtJywgWzEwNjA2XV0sIFsndXBoYXJwb29ubGVmdCcsIFs4NjM5XV0sIFsndXBoYXJwb29ucmlnaHQnLCBbODYzOF1dLCBbJ3VwbHVzJywgWzg4NDZdXSwgWydVcHBlckxlZnRBcnJvdycsIFs4NTk4XV0sIFsnVXBwZXJSaWdodEFycm93JywgWzg1OTldXSwgWyd1cHNpJywgWzk2NV1dLCBbJ1Vwc2knLCBbOTc4XV0sIFsndXBzaWgnLCBbOTc4XV0sIFsnVXBzaWxvbicsIFs5MzNdXSwgWyd1cHNpbG9uJywgWzk2NV1dLCBbJ1VwVGVlQXJyb3cnLCBbODYxM11dLCBbJ1VwVGVlJywgWzg4NjldXSwgWyd1cHVwYXJyb3dzJywgWzg2NDhdXSwgWyd1cmNvcm4nLCBbODk4OV1dLCBbJ3VyY29ybmVyJywgWzg5ODldXSwgWyd1cmNyb3AnLCBbODk3NF1dLCBbJ1VyaW5nJywgWzM2Nl1dLCBbJ3VyaW5nJywgWzM2N11dLCBbJ3VydHJpJywgWzk3MjFdXSwgWydVc2NyJywgWzExOTk4NF1dLCBbJ3VzY3InLCBbMTIwMDEwXV0sIFsndXRkb3QnLCBbODk0NF1dLCBbJ1V0aWxkZScsIFszNjBdXSwgWyd1dGlsZGUnLCBbMzYxXV0sIFsndXRyaScsIFs5NjUzXV0sIFsndXRyaWYnLCBbOTY1Ml1dLCBbJ3V1YXJyJywgWzg2NDhdXSwgWydVdW1sJywgWzIyMF1dLCBbJ3V1bWwnLCBbMjUyXV0sIFsndXdhbmdsZScsIFsxMDY2M11dLCBbJ3ZhbmdydCcsIFsxMDY1Ml1dLCBbJ3ZhcmVwc2lsb24nLCBbMTAxM11dLCBbJ3ZhcmthcHBhJywgWzEwMDhdXSwgWyd2YXJub3RoaW5nJywgWzg3MDldXSwgWyd2YXJwaGknLCBbOTgxXV0sIFsndmFycGknLCBbOTgyXV0sIFsndmFycHJvcHRvJywgWzg3MzNdXSwgWyd2YXJyJywgWzg1OTddXSwgWyd2QXJyJywgWzg2NjFdXSwgWyd2YXJyaG8nLCBbMTAwOV1dLCBbJ3ZhcnNpZ21hJywgWzk2Ml1dLCBbJ3ZhcnN1YnNldG5lcScsIFs4ODQyLCA2NTAyNF1dLCBbJ3ZhcnN1YnNldG5lcXEnLCBbMTA5NTUsIDY1MDI0XV0sIFsndmFyc3Vwc2V0bmVxJywgWzg4NDMsIDY1MDI0XV0sIFsndmFyc3Vwc2V0bmVxcScsIFsxMDk1NiwgNjUwMjRdXSwgWyd2YXJ0aGV0YScsIFs5NzddXSwgWyd2YXJ0cmlhbmdsZWxlZnQnLCBbODg4Ml1dLCBbJ3ZhcnRyaWFuZ2xlcmlnaHQnLCBbODg4M11dLCBbJ3ZCYXInLCBbMTA5ODRdXSwgWydWYmFyJywgWzEwOTg3XV0sIFsndkJhcnYnLCBbMTA5ODVdXSwgWydWY3knLCBbMTA0Ml1dLCBbJ3ZjeScsIFsxMDc0XV0sIFsndmRhc2gnLCBbODg2Nl1dLCBbJ3ZEYXNoJywgWzg4NzJdXSwgWydWZGFzaCcsIFs4ODczXV0sIFsnVkRhc2gnLCBbODg3NV1dLCBbJ1ZkYXNobCcsIFsxMDk4Ml1dLCBbJ3ZlZWJhcicsIFs4ODkxXV0sIFsndmVlJywgWzg3NDRdXSwgWydWZWUnLCBbODg5N11dLCBbJ3ZlZWVxJywgWzg3OTRdXSwgWyd2ZWxsaXAnLCBbODk0Ml1dLCBbJ3ZlcmJhcicsIFsxMjRdXSwgWydWZXJiYXInLCBbODIxNF1dLCBbJ3ZlcnQnLCBbMTI0XV0sIFsnVmVydCcsIFs4MjE0XV0sIFsnVmVydGljYWxCYXInLCBbODczOV1dLCBbJ1ZlcnRpY2FsTGluZScsIFsxMjRdXSwgWydWZXJ0aWNhbFNlcGFyYXRvcicsIFsxMDA3Ml1dLCBbJ1ZlcnRpY2FsVGlsZGUnLCBbODc2OF1dLCBbJ1ZlcnlUaGluU3BhY2UnLCBbODIwMl1dLCBbJ1ZmcicsIFsxMjAwODldXSwgWyd2ZnInLCBbMTIwMTE1XV0sIFsndmx0cmknLCBbODg4Ml1dLCBbJ3Zuc3ViJywgWzg4MzQsIDg0MDJdXSwgWyd2bnN1cCcsIFs4ODM1LCA4NDAyXV0sIFsnVm9wZicsIFsxMjAxNDFdXSwgWyd2b3BmJywgWzEyMDE2N11dLCBbJ3Zwcm9wJywgWzg3MzNdXSwgWyd2cnRyaScsIFs4ODgzXV0sIFsnVnNjcicsIFsxMTk5ODVdXSwgWyd2c2NyJywgWzEyMDAxMV1dLCBbJ3ZzdWJuRScsIFsxMDk1NSwgNjUwMjRdXSwgWyd2c3VibmUnLCBbODg0MiwgNjUwMjRdXSwgWyd2c3VwbkUnLCBbMTA5NTYsIDY1MDI0XV0sIFsndnN1cG5lJywgWzg4NDMsIDY1MDI0XV0sIFsnVnZkYXNoJywgWzg4NzRdXSwgWyd2emlnemFnJywgWzEwNjUwXV0sIFsnV2NpcmMnLCBbMzcyXV0sIFsnd2NpcmMnLCBbMzczXV0sIFsnd2VkYmFyJywgWzEwODQ3XV0sIFsnd2VkZ2UnLCBbODc0M11dLCBbJ1dlZGdlJywgWzg4OTZdXSwgWyd3ZWRnZXEnLCBbODc5M11dLCBbJ3dlaWVycCcsIFs4NDcyXV0sIFsnV2ZyJywgWzEyMDA5MF1dLCBbJ3dmcicsIFsxMjAxMTZdXSwgWydXb3BmJywgWzEyMDE0Ml1dLCBbJ3dvcGYnLCBbMTIwMTY4XV0sIFsnd3AnLCBbODQ3Ml1dLCBbJ3dyJywgWzg3NjhdXSwgWyd3cmVhdGgnLCBbODc2OF1dLCBbJ1dzY3InLCBbMTE5OTg2XV0sIFsnd3NjcicsIFsxMjAwMTJdXSwgWyd4Y2FwJywgWzg4OThdXSwgWyd4Y2lyYycsIFs5NzExXV0sIFsneGN1cCcsIFs4ODk5XV0sIFsneGR0cmknLCBbOTY2MV1dLCBbJ1hmcicsIFsxMjAwOTFdXSwgWyd4ZnInLCBbMTIwMTE3XV0sIFsneGhhcnInLCBbMTAyMzFdXSwgWyd4aEFycicsIFsxMDIzNF1dLCBbJ1hpJywgWzkyNl1dLCBbJ3hpJywgWzk1OF1dLCBbJ3hsYXJyJywgWzEwMjI5XV0sIFsneGxBcnInLCBbMTAyMzJdXSwgWyd4bWFwJywgWzEwMjM2XV0sIFsneG5pcycsIFs4OTU1XV0sIFsneG9kb3QnLCBbMTA3NTJdXSwgWydYb3BmJywgWzEyMDE0M11dLCBbJ3hvcGYnLCBbMTIwMTY5XV0sIFsneG9wbHVzJywgWzEwNzUzXV0sIFsneG90aW1lJywgWzEwNzU0XV0sIFsneHJhcnInLCBbMTAyMzBdXSwgWyd4ckFycicsIFsxMDIzM11dLCBbJ1hzY3InLCBbMTE5OTg3XV0sIFsneHNjcicsIFsxMjAwMTNdXSwgWyd4c3FjdXAnLCBbMTA3NThdXSwgWyd4dXBsdXMnLCBbMTA3NTZdXSwgWyd4dXRyaScsIFs5NjUxXV0sIFsneHZlZScsIFs4ODk3XV0sIFsneHdlZGdlJywgWzg4OTZdXSwgWydZYWN1dGUnLCBbMjIxXV0sIFsneWFjdXRlJywgWzI1M11dLCBbJ1lBY3knLCBbMTA3MV1dLCBbJ3lhY3knLCBbMTEwM11dLCBbJ1ljaXJjJywgWzM3NF1dLCBbJ3ljaXJjJywgWzM3NV1dLCBbJ1ljeScsIFsxMDY3XV0sIFsneWN5JywgWzEwOTldXSwgWyd5ZW4nLCBbMTY1XV0sIFsnWWZyJywgWzEyMDA5Ml1dLCBbJ3lmcicsIFsxMjAxMThdXSwgWydZSWN5JywgWzEwMzFdXSwgWyd5aWN5JywgWzExMTFdXSwgWydZb3BmJywgWzEyMDE0NF1dLCBbJ3lvcGYnLCBbMTIwMTcwXV0sIFsnWXNjcicsIFsxMTk5ODhdXSwgWyd5c2NyJywgWzEyMDAxNF1dLCBbJ1lVY3knLCBbMTA3MF1dLCBbJ3l1Y3knLCBbMTEwMl1dLCBbJ3l1bWwnLCBbMjU1XV0sIFsnWXVtbCcsIFszNzZdXSwgWydaYWN1dGUnLCBbMzc3XV0sIFsnemFjdXRlJywgWzM3OF1dLCBbJ1pjYXJvbicsIFszODFdXSwgWyd6Y2Fyb24nLCBbMzgyXV0sIFsnWmN5JywgWzEwNDddXSwgWyd6Y3knLCBbMTA3OV1dLCBbJ1pkb3QnLCBbMzc5XV0sIFsnemRvdCcsIFszODBdXSwgWyd6ZWV0cmYnLCBbODQ4OF1dLCBbJ1plcm9XaWR0aFNwYWNlJywgWzgyMDNdXSwgWydaZXRhJywgWzkxOF1dLCBbJ3pldGEnLCBbOTUwXV0sIFsnemZyJywgWzEyMDExOV1dLCBbJ1pmcicsIFs4NDg4XV0sIFsnWkhjeScsIFsxMDQ2XV0sIFsnemhjeScsIFsxMDc4XV0sIFsnemlncmFycicsIFs4NjY5XV0sIFsnem9wZicsIFsxMjAxNzFdXSwgWydab3BmJywgWzg0ODRdXSwgWydac2NyJywgWzExOTk4OV1dLCBbJ3pzY3InLCBbMTIwMDE1XV0sIFsnendqJywgWzgyMDVdXSwgWyd6d25qJywgWzgyMDRdXV07XG5cbnZhciBhbHBoYUluZGV4ID0ge307XG52YXIgY2hhckluZGV4ID0ge307XG5cbmNyZWF0ZUluZGV4ZXMoYWxwaGFJbmRleCwgY2hhckluZGV4KTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSHRtbDVFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYoIz9bXFx3XFxkXSspOz8vZywgZnVuY3Rpb24ocywgZW50aXR5KSB7XG4gICAgICAgIHZhciBjaHI7XG4gICAgICAgIGlmIChlbnRpdHkuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlbnRpdHkuY2hhckF0KDEpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDEpKTtcblxuICAgICAgICAgICAgaWYgKCEoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociA9IGFscGhhSW5kZXhbZW50aXR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hyIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmRlY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXJJbmZvID0gY2hhckluZGV4W3N0ci5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgaWYgKGNoYXJJbmZvKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBjaGFySW5mb1tzdHIuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGNoYXJJbmZvWycnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGNoYXJJbmZvID0gY2hhckluZGV4W2NdO1xuICAgICAgICBpZiAoY2hhckluZm8pIHtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9IGNoYXJJbmZvW3N0ci5jaGFyQ29kZUF0KGkgKyAxKV07XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFscGhhID0gY2hhckluZm9bJyddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZU5vblVURihzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDVFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBIdG1sNUVudGl0aWVzLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNUVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbHBoYUluZGV4IFBhc3NlZCBieSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhckluZGV4IFBhc3NlZCBieSByZWZlcmVuY2UuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4ZXMoYWxwaGFJbmRleCwgY2hhckluZGV4KSB7XG4gICAgdmFyIGkgPSBFTlRJVElFUy5sZW5ndGg7XG4gICAgdmFyIF9yZXN1bHRzID0gW107XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgZSA9IEVOVElUSUVTW2ldO1xuICAgICAgICB2YXIgYWxwaGEgPSBlWzBdO1xuICAgICAgICB2YXIgY2hhcnMgPSBlWzFdO1xuICAgICAgICB2YXIgY2hyID0gY2hhcnNbMF07XG4gICAgICAgIHZhciBhZGRDaGFyID0gKGNociA8IDMyIHx8IGNociA+IDEyNikgfHwgY2hyID09PSA2MiB8fCBjaHIgPT09IDYwIHx8IGNociA9PT0gMzggfHwgY2hyID09PSAzNCB8fCBjaHIgPT09IDM5O1xuICAgICAgICB2YXIgY2hhckluZm87XG4gICAgICAgIGlmIChhZGRDaGFyKSB7XG4gICAgICAgICAgICBjaGFySW5mbyA9IGNoYXJJbmRleFtjaHJdID0gY2hhckluZGV4W2Nocl0gfHwge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJzWzFdKSB7XG4gICAgICAgICAgICB2YXIgY2hyMiA9IGNoYXJzWzFdO1xuICAgICAgICAgICAgYWxwaGFJbmRleFthbHBoYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocikgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChhZGRDaGFyICYmIChjaGFySW5mb1tjaHIyXSA9IGFscGhhKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbHBoYUluZGV4W2FscGhhXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goYWRkQ2hhciAmJiAoY2hhckluZm9bJyddID0gYWxwaGEpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sNUVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw1LWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIC9bXFx1MDAxYlxcdTAwOWJdW1soKSM7P10qKD86WzAtOV17MSw0fSg/OjtbMC05XXswLDR9KSopP1swLTlBLVBSWmNmLW5xcnk9PjxdL2c7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Fuc2ktcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF9oeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcblxuLyoqXG4gKiBDYW1lbGNhc2VzIGEgaHlwaGVuYXRlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKF8sIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2NhbWVsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcblxudmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG5cbi8qKlxuICogQ2FtZWxjYXNlcyBhIGh5cGhlbmF0ZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCctbW96LXRyYW5zaXRpb24nKVxuICogICA8IFwiTW96VHJhbnNpdGlvblwiXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJy1tcy10cmFuc2l0aW9uJylcbiAqICAgPCBcIm1zVHJhbnNpdGlvblwiXG4gKlxuICogQXMgQW5kaSBTbWl0aCBzdWdnZXN0c1xuICogKGh0dHA6Ly93d3cuYW5kaXNtaXRoLmNvbS9ibG9nLzIwMTIvMDIvbW9kZXJuaXpyLXByZWZpeGVkLyksIGFuIGAtbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGxvd2VyY2FzZSBgbXNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBjYW1lbGl6ZShzdHJpbmcucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemVTdHlsZU5hbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbnZhciBfdXBwZXJjYXNlUGF0dGVybiA9IC8oW0EtWl0pL2c7XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgc3RyaW5nLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKlxuICogRm9yIENTUyBzdHlsZSBuYW1lcywgdXNlIGBoeXBoZW5hdGVTdHlsZU5hbWVgIGluc3RlYWQgd2hpY2ggd29ya3MgcHJvcGVybHlcbiAqIHdpdGggYWxsIHZlbmRvciBwcmVmaXhlcywgaW5jbHVkaW5nIGBtc2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfdXBwZXJjYXNlUGF0dGVybiwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9oeXBoZW5hdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGh5cGhlbmF0ZSA9IHJlcXVpcmUoJy4vaHlwaGVuYXRlJyk7XG5cbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxuICogICA8IFwiLW1vei10cmFuc2l0aW9uXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ21zVHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXG4gKlxuICogQXMgTW9kZXJuaXpyIHN1Z2dlc3RzIChodHRwOi8vbW9kZXJuaXpyLmNvbS9kb2NzLyNwcmVmaXhlZCksIGFuIGBtc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqIEB0eXBlY2hlY2tzIHN0YXRpYy1vbmx5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1lbW9pemVzIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIHN0cmluZyBhcmd1bWVudC5cbiAqL1xuXG5mdW5jdGlvbiBtZW1vaXplU3RyaW5nT25seShjYWxsYmFjaykge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoIWNhY2hlLmhhc093blByb3BlcnR5KHN0cmluZykpIHtcbiAgICAgIGNhY2hlW3N0cmluZ10gPSBjYWxsYmFjay5jYWxsKHRoaXMsIHN0cmluZyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZVtzdHJpbmddO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVTdHJpbmdPbmx5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9tZW1vaXplU3RyaW5nT25seS5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIENTU1Byb3BlcnR5XG4gKi9cblxuLyoqXG4gKiBDU1MgcHJvcGVydGllcyB3aGljaCBhY2NlcHQgbnVtYmVycyBidXQgYXJlIG5vdCBpbiB1bml0cyBvZiBcInB4XCIuXG4gKi9cblxudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3JkZXJJbWFnZU91dHNldDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VTbGljZTogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgbGluZUNsYW1wOiB0cnVlLFxuICBsaW5lSGVpZ2h0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JwaGFuczogdHJ1ZSxcbiAgdGFiU2l6ZTogdHJ1ZSxcbiAgd2lkb3dzOiB0cnVlLFxuICB6SW5kZXg6IHRydWUsXG4gIHpvb206IHRydWUsXG5cbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgZmxvb2RPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaGFycmF5OiB0cnVlLFxuICBzdHJva2VEYXNob2Zmc2V0OiB0cnVlLFxuICBzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuICBzdHJva2VPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VXaWR0aDogdHJ1ZVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IHZlbmRvci1zcGVjaWZpYyBwcmVmaXgsIGVnOiBXZWJraXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgc3R5bGUgbmFtZSwgZWc6IHRyYW5zaXRpb25EdXJhdGlvblxuICogQHJldHVybiB7c3RyaW5nfSBzdHlsZSBuYW1lIHByZWZpeGVkIHdpdGggYHByZWZpeGAsIHByb3Blcmx5IGNhbWVsQ2FzZWQsIGVnOlxuICogV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uXG4gKi9cbmZ1bmN0aW9uIHByZWZpeEtleShwcmVmaXgsIGtleSkge1xuICByZXR1cm4gcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHN0eWxlIG5hbWVzIHRoYXQgbWF5IGNvbWUgcGFzc2VkIGluIHByZWZpeGVkIGJ5IGFkZGluZyBwZXJtdXRhdGlvbnNcbiAqIG9mIHZlbmRvciBwcmVmaXhlcy5cbiAqL1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnbXMnLCAnTW96JywgJ08nXTtcblxuLy8gVXNpbmcgT2JqZWN0LmtleXMgaGVyZSwgb3IgZWxzZSB0aGUgdmFuaWxsYSBmb3ItaW4gbG9vcCBtYWtlcyBJRTggZ28gaW50byBhblxuLy8gaW5maW5pdGUgbG9vcCwgYmVjYXVzZSBpdCBpdGVyYXRlcyBvdmVyIHRoZSBuZXdseSBhZGRlZCBwcm9wcyB0b28uXG5PYmplY3Qua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIGlzVW5pdGxlc3NOdW1iZXJbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gaXNVbml0bGVzc051bWJlcltwcm9wXTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBNb3N0IHN0eWxlIHByb3BlcnRpZXMgY2FuIGJlIHVuc2V0IGJ5IGRvaW5nIC5zdHlsZVtwcm9wXSA9ICcnIGJ1dCBJRThcbiAqIGRvZXNuJ3QgbGlrZSBkb2luZyB0aGF0IHdpdGggc2hvcnRoYW5kIHByb3BlcnRpZXMgc28gZm9yIHRoZSBwcm9wZXJ0aWVzIHRoYXRcbiAqIElFOCBicmVha3Mgb24sIHdoaWNoIGFyZSBsaXN0ZWQgaGVyZSwgd2UgaW5zdGVhZCB1bnNldCBlYWNoIG9mIHRoZVxuICogaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLiBTZWUgaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIzODUuXG4gKiBUaGUgNC12YWx1ZSAnY2xvY2snIHByb3BlcnRpZXMgbGlrZSBtYXJnaW4sIHBhZGRpbmcsIGJvcmRlci13aWR0aCBzZWVtIHRvXG4gKiBiZWhhdmUgd2l0aG91dCBhbnkgcHJvYmxlbXMuIEN1cmlvdXNseSwgbGlzdC1zdHlsZSB3b3JrcyB0b28gd2l0aG91dCBhbnlcbiAqIHNwZWNpYWwgcHJvZGRpbmcuXG4gKi9cbnZhciBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnMgPSB7XG4gIGJhY2tncm91bmQ6IHtcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRydWUsXG4gICAgYmFja2dyb3VuZEltYWdlOiB0cnVlLFxuICAgIGJhY2tncm91bmRQb3NpdGlvblg6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWTogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiB0cnVlXG4gIH0sXG4gIGJhY2tncm91bmRQb3NpdGlvbjoge1xuICAgIGJhY2tncm91bmRQb3NpdGlvblg6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWTogdHJ1ZVxuICB9LFxuICBib3JkZXI6IHtcbiAgICBib3JkZXJXaWR0aDogdHJ1ZSxcbiAgICBib3JkZXJTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJCb3R0b206IHtcbiAgICBib3JkZXJCb3R0b21XaWR0aDogdHJ1ZSxcbiAgICBib3JkZXJCb3R0b21TdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJMZWZ0OiB7XG4gICAgYm9yZGVyTGVmdFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlckxlZnRTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IHRydWVcbiAgfSxcbiAgYm9yZGVyUmlnaHQ6IHtcbiAgICBib3JkZXJSaWdodFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlclJpZ2h0U3R5bGU6IHRydWUsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJUb3A6IHtcbiAgICBib3JkZXJUb3BXaWR0aDogdHJ1ZSxcbiAgICBib3JkZXJUb3BTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJUb3BDb2xvcjogdHJ1ZVxuICB9LFxuICBmb250OiB7XG4gICAgZm9udFN0eWxlOiB0cnVlLFxuICAgIGZvbnRWYXJpYW50OiB0cnVlLFxuICAgIGZvbnRXZWlnaHQ6IHRydWUsXG4gICAgZm9udFNpemU6IHRydWUsXG4gICAgbGluZUhlaWdodDogdHJ1ZSxcbiAgICBmb250RmFtaWx5OiB0cnVlXG4gIH0sXG4gIG91dGxpbmU6IHtcbiAgICBvdXRsaW5lV2lkdGg6IHRydWUsXG4gICAgb3V0bGluZVN0eWxlOiB0cnVlLFxuICAgIG91dGxpbmVDb2xvcjogdHJ1ZVxuICB9XG59O1xuXG52YXIgQ1NTUHJvcGVydHkgPSB7XG4gIGlzVW5pdGxlc3NOdW1iZXI6IGlzVW5pdGxlc3NOdW1iZXIsXG4gIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9uczogc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDU1NQcm9wZXJ0eTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvQ1NTUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DU1NQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHknKTtcblxudmFyIF9DU1NQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DU1NQcm9wZXJ0eSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZGFuZ2Vyb3VzU3R5bGVWYWx1ZVxuICovXG5cbnZhciBpc1VuaXRsZXNzTnVtYmVyID0gX0NTU1Byb3BlcnR5Mi5kZWZhdWx0LmlzVW5pdGxlc3NOdW1iZXI7XG52YXIgc3R5bGVXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9IE5vcm1hbGl6ZWQgc3R5bGUgdmFsdWUgd2l0aCBkaW1lbnNpb25zIGFwcGxpZWQuXG4gKi9cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAvLyBOb3RlIHRoYXQgd2UndmUgcmVtb3ZlZCBlc2NhcGVUZXh0Rm9yQnJvd3NlcigpIGNhbGxzIGhlcmUgc2luY2UgdGhlXG4gIC8vIHdob2xlIHN0cmluZyB3aWxsIGJlIGVzY2FwZWQgd2hlbiB0aGUgYXR0cmlidXRlIGlzIGluamVjdGVkIGludG9cbiAgLy8gdGhlIG1hcmt1cC4gSWYgeW91IHByb3ZpZGUgdW5zYWZlIHVzZXIgZGF0YSBoZXJlIHRoZXkgY2FuIGluamVjdFxuICAvLyBhcmJpdHJhcnkgQ1NTIHdoaWNoIG1heSBiZSBwcm9ibGVtYXRpYyAoSSBjb3VsZG4ndCByZXBybyB0aGlzKTpcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9YU1NfRmlsdGVyX0V2YXNpb25fQ2hlYXRfU2hlZXRcbiAgLy8gaHR0cDovL3d3dy50aGVzcGFubmVyLmNvLnVrLzIwMDcvMTEvMjYvdWx0aW1hdGUteHNzLWNzcy1pbmplY3Rpb24vXG4gIC8vIFRoaXMgaXMgbm90IGFuIFhTUyBob2xlIGJ1dCBpbnN0ZWFkIGEgcG90ZW50aWFsIENTUyBpbmplY3Rpb24gaXNzdWVcbiAgLy8gd2hpY2ggaGFzIGxlYWQgdG8gYSBncmVhdGVyIGRpc2N1c3Npb24gYWJvdXQgaG93IHdlJ3JlIGdvaW5nIHRvXG4gIC8vIHRydXN0IFVSTHMgbW92aW5nIGZvcndhcmQuIFNlZSAjMjExNTkwMVxuXG4gIHZhciBpc0VtcHR5ID0gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJyc7XG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGlzTm9uTnVtZXJpYyA9IGlzTmFOKHZhbHVlKTtcbiAgaWYgKGlzTm9uTnVtZXJpYyB8fCB2YWx1ZSA9PT0gMCB8fCBpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pIHtcbiAgICByZXR1cm4gJycgKyB2YWx1ZTsgLy8gY2FzdCB0byBzdHJpbmdcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIEFsbG93ICcwJyB0byBwYXNzIHRocm91Z2ggd2l0aG91dCB3YXJuaW5nLiAwIGlzIGFscmVhZHkgc3BlY2lhbCBhbmRcbiAgICAgIC8vIGRvZXNuJ3QgcmVxdWlyZSB1bml0cywgc28gd2UgZG9uJ3QgbmVlZCB0byB3YXJuIGFib3V0IGl0LlxuICAgICAgaWYgKGNvbXBvbmVudCAmJiB2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgIHZhciBvd25lciA9IGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuICAgICAgICB2YXIgb3duZXJOYW1lID0gb3duZXIgPyBvd25lci5nZXROYW1lKCkgOiBudWxsO1xuICAgICAgICBpZiAob3duZXJOYW1lICYmICFzdHlsZVdhcm5pbmdzW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBzdHlsZVdhcm5pbmdzW293bmVyTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2FybmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvd25lck5hbWUpIHtcbiAgICAgICAgICB2YXIgd2FybmluZ3MgPSBzdHlsZVdhcm5pbmdzW293bmVyTmFtZV07XG4gICAgICAgICAgd2FybmVkID0gd2FybmluZ3NbbmFtZV07XG4gICAgICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgICAgIHdhcm5pbmdzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2EgYCVzYCB0YWcgKG93bmVyOiBgJXNgKSB3YXMgcGFzc2VkIGEgbnVtZXJpYyBzdHJpbmcgdmFsdWUgJyArICdmb3IgQ1NTIHByb3BlcnR5IGAlc2AgKHZhbHVlOiBgJXNgKSB3aGljaCB3aWxsIGJlIHRyZWF0ZWQgJyArICdhcyBhIHVuaXRsZXNzIG51bWJlciBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIFJlYWN0LicsIGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQudHlwZSwgb3duZXJOYW1lIHx8ICd1bmtub3duJywgbmFtZSwgdmFsdWUpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICB9XG4gIHJldHVybiB2YWx1ZSArICdweCc7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRhbmdlcm91c1N0eWxlVmFsdWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL2Rhbmdlcm91c1N0eWxlVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjbGVhbjtcbi8vIFJldHVybnMgdHJ1ZSBmb3IgbnVsbCwgZmFsc2UsIHVuZGVmaW5lZCBhbmQge31cbmZ1bmN0aW9uIGlzRmFsc3kodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IGZhbHNlIHx8ICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGNsZWFuT2JqZWN0KG9iamVjdCkge1xuICBpZiAoaXNGYWxzeShvYmplY3QpKSByZXR1cm4gbnVsbDtcbiAgaWYgKCh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmplY3QpKSAhPT0gJ29iamVjdCcpIHJldHVybiBvYmplY3Q7XG5cbiAgdmFyIGFjYyA9IHt9LFxuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICBoYXNGYWxzeSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5c1tpXV07XG4gICAgdmFyIGZpbHRlcmVkVmFsdWUgPSBjbGVhbih2YWx1ZSk7XG4gICAgaWYgKGZpbHRlcmVkVmFsdWUgPT09IG51bGwgfHwgZmlsdGVyZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGhhc0ZhbHN5ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGFjY1trZXlzW2ldXSA9IGZpbHRlcmVkVmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhhY2MpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBoYXNGYWxzeSA/IGFjYyA6IG9iamVjdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5BcnJheShydWxlcykge1xuICB2YXIgaGFzRmFsc3kgPSBmYWxzZTtcbiAgdmFyIGZpbHRlcmVkID0gW107XG4gIHJ1bGVzLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICB2YXIgZmlsdGVyZWRSdWxlID0gY2xlYW4ocnVsZSk7XG4gICAgaWYgKGZpbHRlcmVkUnVsZSA9PT0gbnVsbCB8fCBmaWx0ZXJlZFJ1bGUgIT09IHJ1bGUpIHtcbiAgICAgIGhhc0ZhbHN5ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgZmlsdGVyZWQucHVzaChmaWx0ZXJlZFJ1bGUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZC5sZW5ndGggPT0gMCA/IG51bGwgOiBoYXNGYWxzeSA/IGZpbHRlcmVkIDogcnVsZXM7XG59XG5cbi8vIFRha2VzIHN0eWxlIGFycmF5IG9yIG9iamVjdCBwcm92aWRlZCBieSB1c2VyIGFuZCBjbGVhcnMgYWxsIHRoZSBmYWxzeSBkYXRhIFxuLy8gSWYgdGhlcmUgaXMgbm8gc3R5bGVzIGxlZnQgYWZ0ZXIgZmlsdHJhdGlvbiByZXR1cm5zIG51bGxcbmZ1bmN0aW9uIGNsZWFuKGlucHV0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSA/IGNsZWFuQXJyYXkoaW5wdXQpIDogY2xlYW5PYmplY3QoaW5wdXQpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2NsZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRvSGFzaDtcbi8vIG11cm11cmhhc2gyIHZpYSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yYXljbW9yZ2FuLzU4ODQyM1xuXG5mdW5jdGlvbiBkb0hhc2goc3RyLCBzZWVkKSB7XG4gIHZhciBtID0gMHg1YmQxZTk5NTtcbiAgdmFyIHIgPSAyNDtcbiAgdmFyIGggPSBzZWVkIF4gc3RyLmxlbmd0aDtcbiAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xuXG4gIHdoaWxlIChsZW5ndGggPj0gNCkge1xuICAgIHZhciBrID0gVUludDMyKHN0ciwgY3VycmVudEluZGV4KTtcblxuICAgIGsgPSBVbXVsMzIoaywgbSk7XG4gICAgayBePSBrID4+PiByO1xuICAgIGsgPSBVbXVsMzIoaywgbSk7XG5cbiAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgIGggXj0gaztcblxuICAgIGN1cnJlbnRJbmRleCArPSA0O1xuICAgIGxlbmd0aCAtPSA0O1xuICB9XG5cbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IFVJbnQxNihzdHIsIGN1cnJlbnRJbmRleCk7XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGN1cnJlbnRJbmRleCArIDIpIDw8IDE2O1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSBVSW50MTYoc3RyLCBjdXJyZW50SW5kZXgpO1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChjdXJyZW50SW5kZXgpO1xuICAgICAgaCA9IFVtdWwzMihoLCBtKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9IFVtdWwzMihoLCBtKTtcbiAgaCBePSBoID4+PiAxNTtcblxuICByZXR1cm4gaCA+Pj4gMDtcbn1cblxuZnVuY3Rpb24gVUludDMyKHN0ciwgcG9zKSB7XG4gIHJldHVybiBzdHIuY2hhckNvZGVBdChwb3MrKykgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDgpICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCAxNikgKyAoc3RyLmNoYXJDb2RlQXQocG9zKSA8PCAyNCk7XG59XG5cbmZ1bmN0aW9uIFVJbnQxNihzdHIsIHBvcykge1xuICByZXR1cm4gc3RyLmNoYXJDb2RlQXQocG9zKyspICsgKHN0ci5jaGFyQ29kZUF0KHBvcysrKSA8PCA4KTtcbn1cblxuZnVuY3Rpb24gVW11bDMyKG4sIG0pIHtcbiAgbiA9IG4gfCAwO1xuICBtID0gbSB8IDA7XG4gIHZhciBubG8gPSBuICYgMHhmZmZmO1xuICB2YXIgbmhpID0gbiA+Pj4gMTY7XG4gIHZhciByZXMgPSBubG8gKiBtICsgKChuaGkgKiBtICYgMHhmZmZmKSA8PCAxNikgfCAwO1xuICByZXR1cm4gcmVzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAodHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGV4cG9ydHMpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6IGdsb2JhbC5JbmxpbmVTdHlsZVByZWZpeEFsbCA9IGZhY3RvcnkoKTtcbn0pKHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGJhYmVsSGVscGVycyA9IHt9O1xuXG4gIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLmNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG4gIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnM7XG5cbiAgZnVuY3Rpb24gX19jb21tb25qcyhmbiwgbW9kdWxlKSB7XG4gICAgcmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgdmFyIHByZWZpeFByb3BzID0geyBcIldlYmtpdFwiOiB7IFwidHJhbnNmb3JtXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpbllcIjogdHJ1ZSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZVwiOiB0cnVlLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtU3R5bGVcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IHRydWUsIFwiYW5pbWF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRGVsYXlcIjogdHJ1ZSwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiB0cnVlLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdHJ1ZSwgXCJhbmltYXRpb25OYW1lXCI6IHRydWUsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IHRydWUsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSwgXCJhcHBlYXJhbmNlXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcImZvbnRLZXJuaW5nXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiB0cnVlLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IHRydWUsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IHRydWUsIFwiY2xpcFBhdGhcIjogdHJ1ZSwgXCJtYXNrSW1hZ2VcIjogdHJ1ZSwgXCJtYXNrTW9kZVwiOiB0cnVlLCBcIm1hc2tSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrUG9zaXRpb25cIjogdHJ1ZSwgXCJtYXNrQ2xpcFwiOiB0cnVlLCBcIm1hc2tPcmlnaW5cIjogdHJ1ZSwgXCJtYXNrU2l6ZVwiOiB0cnVlLCBcIm1hc2tDb21wb3NpdGVcIjogdHJ1ZSwgXCJtYXNrXCI6IHRydWUsIFwibWFza0JvcmRlclNvdXJjZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJNb2RlXCI6IHRydWUsIFwibWFza0JvcmRlclNsaWNlXCI6IHRydWUsIFwibWFza0JvcmRlcldpZHRoXCI6IHRydWUsIFwibWFza0JvcmRlck91dHNldFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyXCI6IHRydWUsIFwibWFza1R5cGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB0cnVlLCBcImZpbHRlclwiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUsIFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiB0cnVlLCBcImZsZXhEaXJlY3Rpb25cIjogdHJ1ZSwgXCJmbGV4R3Jvd1wiOiB0cnVlLCBcImZsZXhGbG93XCI6IHRydWUsIFwiZmxleFNocmlua1wiOiB0cnVlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IHRydWUsIFwiYWxpZ25JdGVtc1wiOiB0cnVlLCBcImFsaWduU2VsZlwiOiB0cnVlLCBcImp1c3RpZnlDb250ZW50XCI6IHRydWUsIFwib3JkZXJcIjogdHJ1ZSwgXCJiYWNrZHJvcEZpbHRlclwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOiB0cnVlLCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogdHJ1ZSwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmbG93SW50b1wiOiB0cnVlLCBcImZsb3dGcm9tXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlLCBcInRyYW5zaXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSB9LCBcIk1velwiOiB7IFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJib3hTaXppbmdcIjogdHJ1ZSwgXCJ0ZXh0QWxpZ25MYXN0XCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJ0YWJTaXplXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUgfSwgXCJtc1wiOiB7IFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiBmYWxzZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogZmFsc2UsIFwiZmxleEZsb3dcIjogdHJ1ZSwgXCJmbGV4U2hyaW5rXCI6IGZhbHNlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IGZhbHNlLCBcImFsaWduSXRlbXNcIjogZmFsc2UsIFwiYWxpZ25TZWxmXCI6IGZhbHNlLCBcImp1c3RpZnlDb250ZW50XCI6IGZhbHNlLCBcIm9yZGVyXCI6IGZhbHNlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJ3cmFwRmxvd1wiOiB0cnVlLCBcIndyYXBUaHJvdWdoXCI6IHRydWUsIFwid3JhcE1hcmdpblwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwidG91Y2hBY3Rpb25cIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZmxvd0ludG9cIjogdHJ1ZSwgXCJmbG93RnJvbVwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVDb2x1bW5zXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlXCI6IHRydWUsIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IHRydWUsIFwiZ3JpZEF1dG9Sb3dzXCI6IHRydWUsIFwiZ3JpZEF1dG9GbG93XCI6IHRydWUsIFwiZ3JpZFwiOiB0cnVlLCBcImdyaWRSb3dTdGFydFwiOiB0cnVlLCBcImdyaWRDb2x1bW5TdGFydFwiOiB0cnVlLCBcImdyaWRSb3dFbmRcIjogdHJ1ZSwgXCJncmlkUm93XCI6IHRydWUsIFwiZ3JpZENvbHVtblwiOiB0cnVlLCBcImdyaWRDb2x1bW5FbmRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uR2FwXCI6IHRydWUsIFwiZ3JpZFJvd0dhcFwiOiB0cnVlLCBcImdyaWRBcmVhXCI6IHRydWUsIFwiZ3JpZEdhcFwiOiB0cnVlLCBcInRleHRTaXplQWRqdXN0XCI6IHRydWUgfSB9O1xuXG4gIC8vIGhlbHBlciB0byBjYXBpdGFsaXplIHN0cmluZ3NcbiAgdmFyIGNhcGl0YWxpemVTdHJpbmcgPSBmdW5jdGlvbiBjYXBpdGFsaXplU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH07XG5cbiAgdmFyIGlzUHJlZml4ZWRQcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzUHJlZml4ZWRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwcm9wZXJ0eS5tYXRjaCgvXihXZWJraXR8TW96fE98bXMpLykgIT09IG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gc29ydFByZWZpeGVkU3R5bGUoc3R5bGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgICBpZiAoaXNQcmVmaXhlZFByb3BlcnR5KGxlZnQpICYmICFpc1ByZWZpeGVkUHJvcGVydHkocmlnaHQpKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzUHJlZml4ZWRQcm9wZXJ0eShsZWZ0KSAmJiBpc1ByZWZpeGVkUHJvcGVydHkocmlnaHQpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChzb3J0ZWRTdHlsZSwgcHJvcCkge1xuICAgICAgc29ydGVkU3R5bGVbcHJvcF0gPSBzdHlsZVtwcm9wXTtcbiAgICAgIHJldHVybiBzb3J0ZWRTdHlsZTtcbiAgICB9LCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knKSB7XG4gICAgICByZXR1cm4geyBwb3NpdGlvbjogWyctd2Via2l0LXN0aWNreScsICdzdGlja3knXSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybnMgYSBzdHlsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBjb25jYXRlZCBwcmVmaXhlZCB2YWx1ZSBzdHJpbmdcbiAgdmFyIGpvaW5QcmVmaXhlZFZhbHVlID0gZnVuY3Rpb24gam9pblByZWZpeGVkVmFsdWUocHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIHJlcGxhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmdW5jdGlvbiAocHJlZml4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ10ubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiByZXBsYWNlcihwcmVmaXgsIHZhbHVlKTtcbiAgICB9KSk7XG4gIH07XG5cbiAgdmFyIGlzUHJlZml4ZWRWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS5qb2luKCcsJyk7XG5cbiAgICByZXR1cm4gdmFsdWUubWF0Y2goLy13ZWJraXQtfC1tb3otfC1tcy0vKSAhPT0gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBjYWxjKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc1ByZWZpeGVkVmFsdWUodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2NhbGNcXCgvZywgcHJlZml4ICsgJ2NhbGMoJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdmFsdWVzID0ge1xuICAgICd6b29tLWluJzogdHJ1ZSxcbiAgICAnem9vbS1vdXQnOiB0cnVlLFxuICAgIGdyYWI6IHRydWUsXG4gICAgZ3JhYmJpbmc6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm4gam9pblByZWZpeGVkVmFsdWUocHJvcGVydHksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdmFsdWVzJDEgPSB7IGZsZXg6IHRydWUsICdpbmxpbmUtZmxleCc6IHRydWUgfTtcblxuICBmdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlcyQxW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogWyctd2Via2l0LWJveCcsICctbW96LWJveCcsICctbXMtJyArIHZhbHVlICsgJ2JveCcsICctd2Via2l0LScgKyB2YWx1ZSwgdmFsdWVdXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgIG1heEhlaWdodDogdHJ1ZSxcbiAgICBtYXhXaWR0aDogdHJ1ZSxcbiAgICB3aWR0aDogdHJ1ZSxcbiAgICBoZWlnaHQ6IHRydWUsXG4gICAgY29sdW1uV2lkdGg6IHRydWUsXG4gICAgbWluV2lkdGg6IHRydWUsXG4gICAgbWluSGVpZ2h0OiB0cnVlXG4gIH07XG4gIHZhciB2YWx1ZXMkMiA9IHtcbiAgICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAgICdtYXgtY29udGVudCc6IHRydWUsXG4gICAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAgICdjb250YWluLWZsb2F0cyc6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldICYmIHZhbHVlcyQyW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbHVlcyQzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuICBmdW5jdGlvbiBncmFkaWVudChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5tYXRjaCh2YWx1ZXMkMykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBqb2luUHJlZml4ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbmRleCA9IF9fY29tbW9uanMoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG4gICAgdmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbiAgICB2YXIgY2FjaGUgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcgaW4gY2FjaGUgPyBjYWNoZVtzdHJpbmddIDogY2FjaGVbc3RyaW5nXSA9IHN0cmluZy5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJCYnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuICB9KTtcblxuICB2YXIgaHlwaGVuYXRlU3R5bGVOYW1lID0gaW5kZXggJiYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaW5kZXgpKSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGluZGV4ID8gaW5kZXhbJ2RlZmF1bHQnXSA6IGluZGV4O1xuXG4gIHZhciBwcm9wZXJ0aWVzJDEgPSB7XG4gICAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBXZWJraXRUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzJDFbcHJvcGVydHldKSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlKTtcbiAgICAgIHZhciB3ZWJraXRPdXRwdXQgPSBvdXRwdXRWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvLW1vei18LW1zLS8pID09PSBudWxsO1xuICAgICAgfSkuam9pbignLCcpO1xuXG4gICAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVmaXhlZFxuICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ1dlYmtpdCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIHdlYmtpdE91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVmMiA9IHt9LCBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoX3JlZjIsICdXZWJraXQnICsgY2FwaXRhbGl6ZVN0cmluZyhwcm9wZXJ0eSksIHdlYmtpdE91dHB1dCksIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eShfcmVmMiwgcHJvcGVydHksIG91dHB1dFZhbHVlKSwgX3JlZjI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlZml4VmFsdWUodmFsdWUpIHtcbiAgICBpZiAoaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICAgIHZhciBtdWx0aXBsZVZhbHVlcyA9IHZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpO1xuXG4gICAgLy8gaXRlcmF0ZSBlYWNoIHNpbmdsZSB2YWx1ZSBhbmQgY2hlY2sgZm9yIHRyYW5zaXRpb25lZCBwcm9wZXJ0aWVzXG4gICAgLy8gdGhhdCBuZWVkIHRvIGJlIHByZWZpeGVkIGFzIHdlbGxcbiAgICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICBtdWx0aXBsZVZhbHVlc1tpbmRleF0gPSBPYmplY3Qua2V5cyhwcmVmaXhQcm9wcykucmVkdWNlKGZ1bmN0aW9uIChvdXQsIHByZWZpeCkge1xuICAgICAgICB2YXIgZGFzaENhc2VQcmVmaXggPSAnLScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJztcblxuICAgICAgICBPYmplY3Qua2V5cyhwcmVmaXhQcm9wc1twcmVmaXhdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgdmFyIGRhc2hDYXNlUHJvcGVydHkgPSBoeXBoZW5hdGVTdHlsZU5hbWUocHJvcCk7XG5cbiAgICAgICAgICBpZiAodmFsLmluZGV4T2YoZGFzaENhc2VQcm9wZXJ0eSkgPiAtMSAmJiBkYXNoQ2FzZVByb3BlcnR5ICE9PSAnb3JkZXInKSB7XG4gICAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgICBvdXQgPSB2YWwucmVwbGFjZShkYXNoQ2FzZVByb3BlcnR5LCBkYXNoQ2FzZVByZWZpeCArIGRhc2hDYXNlUHJvcGVydHkpICsgJywnICsgb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgICB9LCB2YWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG11bHRpcGxlVmFsdWVzLmpvaW4oJywnKTtcbiAgfVxuXG4gIHZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAgICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAgICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgICAnZmxleC1lbmQnOiAnZW5kJ1xuICB9O1xuICB2YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgICBhbGlnbkNvbnRlbnQ6ICdtc0ZsZXhMaW5lUGFjaycsXG4gICAgYWxpZ25TZWxmOiAnbXNGbGV4SXRlbUFsaWduJyxcbiAgICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbXNGbGV4UGFjaycsXG4gICAgb3JkZXI6ICdtc0ZsZXhPcmRlcicsXG4gICAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gICAgZmxleFNocmluazogJ21zRmxleE5lZ2F0aXZlJyxcbiAgICBmbGV4QmFzaXM6ICdtc1ByZWZlcnJlZFNpemUnXG4gIH07XG5cbiAgZnVuY3Rpb24gZmxleGJveElFKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFsdGVybmF0aXZlVmFsdWVzJDEgPSB7XG4gICAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyxcbiAgICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICAgJ2ZsZXgtZW5kJzogJ2VuZCcsXG4gICAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gICAgd3JhcDogJ211bHRpcGxlJ1xuICB9O1xuXG4gIHZhciBhbHRlcm5hdGl2ZVByb3BzJDEgPSB7XG4gICAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICAgIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG4gIH07XG5cbiAgZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBXZWJraXRCb3hPcmllbnQ6IHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICBXZWJraXRCb3hEaXJlY3Rpb246IHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xID8gJ3JldmVyc2UnIDogJ25vcm1hbCdcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzJDFbcHJvcGVydHldKSB7XG4gICAgICByZXR1cm4gYmFiZWxIZWxwZXJzLmRlZmluZVByb3BlcnR5KHt9LCBhbHRlcm5hdGl2ZVByb3BzJDFbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlcyQxW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsdWdpbnMgPSBbcG9zaXRpb24sIGNhbGMsIGN1cnNvciwgc2l6aW5nLCBncmFkaWVudCwgdHJhbnNpdGlvbiwgZmxleGJveElFLCBmbGV4Ym94T2xkLCBmbGV4XTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICovXG4gIGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAvLyByZWN1cnNlIHRocm91Z2ggbmVzdGVkIHN0eWxlIG9iamVjdHNcbiAgICAgICAgc3R5bGVzW3Byb3BlcnR5XSA9IHByZWZpeEFsbCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhwcmVmaXhQcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBwcmVmaXhQcm9wc1twcmVmaXhdO1xuICAgICAgICAgIC8vIGFkZCBwcmVmaXhlcyBpZiBuZWVkZWRcbiAgICAgICAgICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgIHN0eWxlc1twcmVmaXggKyBjYXBpdGFsaXplU3RyaW5nKHByb3BlcnR5KV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgW10uY29uY2F0KHN0eWxlc1twcm9wZXJ0eV0pLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAvLyByZXNvbHZlIGV2ZXJ5IHNwZWNpYWwgcGx1Z2luc1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgIHJldHVybiBhc3NpZ25TdHlsZXMoc3R5bGVzLCBwbHVnaW4ocHJvcGVydHksIHZhbHVlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc29ydFByZWZpeGVkU3R5bGUoc3R5bGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblN0eWxlcyhiYXNlKSB7XG4gICAgdmFyIGV4dGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBPYmplY3Qua2V5cyhleHRlbmQpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICB2YXIgYmFzZVZhbHVlID0gYmFzZVtwcm9wZXJ0eV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNlVmFsdWUpKSB7XG4gICAgICAgIFtdLmNvbmNhdChleHRlbmRbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWx1ZUluZGV4ID0gYmFzZVZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgIGlmICh2YWx1ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGJhc2VbcHJvcGVydHldLnNwbGljZSh2YWx1ZUluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmFzZVtwcm9wZXJ0eV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFzZVtwcm9wZXJ0eV0gPSBleHRlbmRbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByZWZpeEFsbDtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlBsdWdpblNldCA9IHVuZGVmaW5lZDtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmZhbGxiYWNrcyA9IGZhbGxiYWNrcztcbmV4cG9ydHMucHJlZml4ZXMgPSBwcmVmaXhlcztcblxudmFyIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMgPSByZXF1aXJlKCcuL0NTU1Byb3BlcnR5T3BlcmF0aW9ucycpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgaXNEZXYgPSBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geCA9PT0gJ2RldmVsb3BtZW50JyB8fCAheDtcbn0ocHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuXG52YXIgUGx1Z2luU2V0ID0gZXhwb3J0cy5QbHVnaW5TZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBsdWdpblNldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGx1Z2luU2V0KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbml0aWFsID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBpbml0aWFsW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHRoaXMuZm5zID0gaW5pdGlhbCB8fCBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQbHVnaW5TZXQsIFt7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmbnMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBmbnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGlmIChfdGhpcy5mbnMuaW5kZXhPZihmbikgPj0gMCkge1xuICAgICAgICAgIGlmIChpc0Rldikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdhZGRpbmcgdGhlIHNhbWUgcGx1Z2luIGFnYWluLCBpZ25vcmluZycpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5mbnMgPSBbZm5dLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3RoaXMuZm5zKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShmbikge1xuICAgICAgdGhpcy5mbnMgPSB0aGlzLmZucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IGZuO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXMuZm5zID0gW107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndHJhbnNmb3JtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNmb3JtKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLmZucy5yZWR1Y2UoZnVuY3Rpb24gKG8sIGZuKSB7XG4gICAgICAgIHJldHVybiBmbihvKTtcbiAgICAgIH0sIG8pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQbHVnaW5TZXQ7XG59KCk7XG5cbmZ1bmN0aW9uIGZhbGxiYWNrcyhub2RlKSB7XG4gIHZhciBoYXNBcnJheSA9IE9iamVjdC5rZXlzKG5vZGUuc3R5bGUpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG5vZGUuc3R5bGVbeF0pO1xuICB9KS5pbmRleE9mKHRydWUpID49IDA7XG4gIGlmIChoYXNBcnJheSkge1xuICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZSxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG5vZGUsIFsnc3R5bGUnXSk7XG5cbiAgICAgIHZhciBmbGF0dGVuZWQgPSBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChvLCBrZXkpIHtcbiAgICAgICAgb1trZXldID0gQXJyYXkuaXNBcnJheShzdHlsZVtrZXldKSA/IHN0eWxlW2tleV0uam9pbignOyAnICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMucHJvY2Vzc1N0eWxlTmFtZSkoa2V5KSArICc6ICcpIDogc3R5bGVba2V5XTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9LCB7fSk7XG4gICAgICAvLyB0b2RvIC0gXG4gICAgICAvLyBmbGF0dGVuIGFycmF5cyB3aGljaCBoYXZlbid0IGJlZW4gZmxhdHRlbmVkIHlldCBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IF9leHRlbmRzKHsgc3R5bGU6IGZsYXR0ZW5lZCB9LCByZXN0KVxuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBpZiAoKHR5cGVvZiBfcmV0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihfcmV0KSkgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbnZhciBwcmVmaXhBbGwgPSByZXF1aXJlKCcuL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2luZGV4LmpzJyk7XG5cbmZ1bmN0aW9uIHByZWZpeGVzKF9yZWYpIHtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydzdHlsZSddKTtcblxuICByZXR1cm4gX2V4dGVuZHMoeyBzdHlsZTogcHJlZml4QWxsKHN0eWxlKSB9LCByZXN0KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9wbHVnaW5zLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlN0eWxlU2hlZXQgPSBTdHlsZVNoZWV0O1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuLyogXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXMgXG5cbi0gdXNlcyBtdWx0aXBsZSBzdHlsZSB0YWdzIGJlaGluZCB0aGUgc2NlbmVzIGZvciBtaWxsaW9ucyBvZiBydWxlcyBcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG4tICdwb2x5ZmlsbHMnIG9uIHNlcnZlciBzaWRlIFxuXG5cbi8vIHVzYWdlXG5cbmltcG9ydCBTdHlsZVNoZWV0IGZyb20gJ2dsYW1vci9saWIvc2hlZXQnXG5sZXQgc3R5bGVTaGVldCA9IG5ldyBTdHlsZVNoZWV0KClcblxuc3R5bGVTaGVldC5pbmplY3QoKSBcbi0gJ2luamVjdHMnIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlIHBhZ2UgKG9yIGludG8gbWVtb3J5IGlmIG9uIHNlcnZlcilcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKSBcbi0gYXBwZW5kcyBhIGNzcyBydWxlIGludG8gdGhlIHN0eWxlc2hlZXQgXG5cbnN0eWxlU2hlZXQuZmx1c2goKSBcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cblxuKi9cblxuZnVuY3Rpb24gbGFzdChhcnIpIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfVxuXG4gIC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3ggXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgIXByb2Nlc3MuZW52Lk5PREVfRU5WOyAvLyh4ID0+ICh4ID09PSAnZGV2ZWxvcG1lbnQnKSB8fCAheCkocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXG52YXIgaXNUZXN0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JztcblxudmFyIG9sZElFID0gZnVuY3Rpb24gKCkge1xuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSAnPCEtLVtpZiBsdCBJRSAxMF0+PGk+PC9pPjwhW2VuZGlmXS0tPic7XG4gICAgcmV0dXJuIGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaScpLmxlbmd0aCA9PT0gMTtcbiAgfVxufSgpO1xuXG5mdW5jdGlvbiBtYWtlU3R5bGVUYWcoKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKS5hcHBlbmRDaGlsZCh0YWcpO1xuICByZXR1cm4gdGFnO1xufVxuXG5mdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJHNwZWVkeSA9IF9yZWYuc3BlZWR5LFxuICAgICAgc3BlZWR5ID0gX3JlZiRzcGVlZHkgPT09IHVuZGVmaW5lZCA/ICFpc0RldiAmJiAhaXNUZXN0IDogX3JlZiRzcGVlZHksXG4gICAgICBfcmVmJG1heExlbmd0aCA9IF9yZWYubWF4TGVuZ3RoLFxuICAgICAgbWF4TGVuZ3RoID0gX3JlZiRtYXhMZW5ndGggPT09IHVuZGVmaW5lZCA/IGlzQnJvd3NlciAmJiBvbGRJRSA/IDQwMDAgOiA2NTAwMCA6IF9yZWYkbWF4TGVuZ3RoO1xuXG4gIHRoaXMuaXNTcGVlZHkgPSBzcGVlZHk7IC8vIHRoZSBiaWcgZHJhd2JhY2sgaGVyZSBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcbiAgdGhpcy5zaGVldCA9IHVuZGVmaW5lZDtcbiAgdGhpcy50YWdzID0gW107XG4gIHRoaXMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuICB0aGlzLmN0ciA9IDA7XG59XG5cbk9iamVjdC5hc3NpZ24oU3R5bGVTaGVldC5wcm90b3R5cGUsIHtcbiAgZ2V0U2hlZXQ6IGZ1bmN0aW9uIGdldFNoZWV0KCkge1xuICAgIHJldHVybiBzaGVldEZvclRhZyhsYXN0KHRoaXMudGFncykpO1xuICB9LFxuICBpbmplY3Q6IGZ1bmN0aW9uIGluamVjdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuaW5qZWN0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBpbmplY3RlZCBzdHlsZXNoZWV0IScpO1xuICAgIH1cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnRhZ3NbMF0gPSBtYWtlU3R5bGVUYWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2VydmVyIHNpZGUgJ3BvbHlmaWxsJy4ganVzdCBlbm91Z2ggYmVoYXZpb3IgdG8gYmUgdXNlZnVsLlxuICAgICAgdGhpcy5zaGVldCA9IHtcbiAgICAgICAgY3NzUnVsZXM6IFtdLFxuICAgICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUpIHtcbiAgICAgICAgICAvLyBlbm91Z2ggJ3NwZWMgY29tcGxpYW5jZScgdG8gYmUgYWJsZSB0byBleHRyYWN0IHRoZSBydWxlcyBsYXRlciAgXG4gICAgICAgICAgLy8gaW4gb3RoZXIgd29yZHMsIGp1c3QgdGhlIGNzc1RleHQgZmllbGQgXG4gICAgICAgICAgX3RoaXMuc2hlZXQuY3NzUnVsZXMucHVzaCh7IGNzc1RleHQ6IHJ1bGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0ZWQgPSB0cnVlO1xuICB9LFxuICBzcGVlZHk6IGZ1bmN0aW9uIHNwZWVkeShib29sKSB7XG4gICAgaWYgKHRoaXMuY3RyICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjaGFuZ2Ugc3BlZWR5IG1vZGUgYWZ0ZXIgaW5zZXJ0aW5nIGFueSBydWxlIHRvIHNoZWV0LiBFaXRoZXIgY2FsbCBzcGVlZHkoJyArIGJvb2wgKyAnKSBlYXJsaWVyIGluIHlvdXIgYXBwLCBvciBjYWxsIGZsdXNoKCkgYmVmb3JlIHNwZWVkeSgnICsgYm9vbCArICcpJyk7XG4gICAgfVxuICAgIHRoaXMuaXNTcGVlZHkgPSAhIWJvb2w7XG4gIH0sXG4gIF9pbnNlcnQ6IGZ1bmN0aW9uIF9pbnNlcnQocnVsZSkge1xuICAgIC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnIFxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMDA3OTkyL2Nocm9tZS1zdWRkZW5seS1zdG9wcGVkLWFjY2VwdGluZy1pbnNlcnRydWxlXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcbiAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTsgLy8gdG9kbyAtIGNvcnJlY3QgaW5kZXggaGVyZSAgICAgXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGlzRGV2KSB7XG4gICAgICAgIC8vIG1pZ2h0IG5lZWQgYmV0ZXIgZHggZm9yIHRoaXMgXG4gICAgICAgIGNvbnNvbGUud2Fybignd2hvb3BzLCBpbGxlZ2FsIHJ1bGUgaW5zZXJ0ZWQnLCBydWxlKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnMgXG4gICAgICBpZiAodGhpcy5pc1NwZWVkeSAmJiB0aGlzLmdldFNoZWV0KCkuaW5zZXJ0UnVsZSkge1xuICAgICAgICB0aGlzLl9pbnNlcnQocnVsZSk7XG4gICAgICB9XG4gICAgICAvLyBtb3JlIGJyb3dzZXIgd2VpcmRuZXNzLiBJIGRvbid0IGV2ZW4ga25vdyAgICBcbiAgICAgIC8vIGVsc2UgaWYodGhpcy50YWdzLmxlbmd0aCA+IDAgJiYgdGhpcy50YWdzOjpsYXN0KCkuc3R5bGVTaGVldCkgeyAgICAgIFxuICAgICAgLy8gICB0aGlzLnRhZ3M6Omxhc3QoKS5zdHlsZVNoZWV0LmNzc1RleHQrPSBydWxlXG4gICAgICAvLyB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICBsYXN0KHRoaXMudGFncykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlcnZlciBzaWRlIGlzIHByZXR0eSBzaW1wbGUgICAgICAgICBcbiAgICAgIHRoaXMuc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgdGhpcy5jdHIgJSB0aGlzLm1heExlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy50YWdzLnB1c2gobWFrZVN0eWxlVGFnKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdHIgLSAxO1xuICB9LFxuXG4gIC8vIGNvbW1lbnRpbmcgdGhpcyBvdXQgdGlsbCB3ZSBkZWNpZGUgb24gdjMncyBkZWNpc2lvbiBcbiAgLy8gX3JlcGxhY2UoaW5kZXgsIHJ1bGUpIHtcbiAgLy8gICAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1ZyBcbiAgLy8gICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuICAvLyAgIHRyeSB7ICBcbiAgLy8gICAgIGxldCBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKSAgICAgICAgXG4gIC8vICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KSAvLyB0b2RvIC0gY29ycmVjdCBpbmRleCBoZXJlICAgICBcbiAgLy8gICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpXG4gIC8vICAgfVxuICAvLyAgIGNhdGNoKGUpIHtcbiAgLy8gICAgIGlmKGlzRGV2KSB7XG4gIC8vICAgICAgIC8vIG1pZ2h0IG5lZWQgYmV0ZXIgZHggZm9yIHRoaXMgXG4gIC8vICAgICAgIGNvbnNvbGUud2Fybignd2hvb3BzLCBwcm9ibGVtIHJlcGxhY2luZyBydWxlJywgcnVsZSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgLy8gICAgIH0gICAgICAgICAgXG4gIC8vICAgfSAgICAgICAgICBcblxuICAvLyB9XG4gIC8vIHJlcGxhY2UoaW5kZXgsIHJ1bGUpIHtcbiAgLy8gICBpZihpc0Jyb3dzZXIpIHtcbiAgLy8gICAgIGlmKHRoaXMuaXNTcGVlZHkgJiYgdGhpcy5nZXRTaGVldCgpLmluc2VydFJ1bGUpIHtcbiAgLy8gICAgICAgdGhpcy5fcmVwbGFjZShpbmRleCwgcnVsZSlcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsc2Uge1xuICAvLyAgICAgICBsZXQgX3Nsb3QgPSBNYXRoLmZsb29yKChpbmRleCAgKyB0aGlzLm1heExlbmd0aCkgLyB0aGlzLm1heExlbmd0aCkgLSAxICAgICAgICBcbiAgLy8gICAgICAgbGV0IF9pbmRleCA9IChpbmRleCAlIHRoaXMubWF4TGVuZ3RoKSArIDFcbiAgLy8gICAgICAgbGV0IHRhZyA9IHRoaXMudGFnc1tfc2xvdF1cbiAgLy8gICAgICAgdGFnLnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSwgdGFnLmNoaWxkTm9kZXNbX2luZGV4XSlcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgZWxzZSB7XG4gIC8vICAgICBsZXQgcnVsZXMgPSB0aGlzLnNoZWV0LmNzc1J1bGVzXG4gIC8vICAgICB0aGlzLnNoZWV0LmNzc1J1bGVzID0gWyAuLi5ydWxlcy5zbGljZSgwLCBpbmRleCksIHsgY3NzVGV4dDogcnVsZSB9LCAuLi5ydWxlcy5zbGljZShpbmRleCArIDEpIF1cbiAgLy8gICB9XG4gIC8vIH1cbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKGluZGV4KSB7XG4gICAgLy8gd2UgaW5zZXJ0IGEgYmxhbmsgcnVsZSB3aGVuICdkZWxldGluZycgc28gcHJldmlvdXNseSByZXR1cm5lZCBpbmRleGVzIHJlbWFpbiBzdGFibGVcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGluZGV4LCAnJyk7XG4gIH0sXG4gIGZsdXNoOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICAgIHRoaXMuc2hlZXQgPSBudWxsO1xuICAgICAgdGhpcy5jdHIgPSAwO1xuICAgICAgLy8gdG9kbyAtIGxvb2sgZm9yIHJlbW5hbnRzIGluIGRvY3VtZW50LnN0eWxlU2hlZXRzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyIFxuICAgICAgdGhpcy5zaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmluamVjdGVkID0gZmFsc2U7XG4gIH0sXG4gIHJ1bGVzOiBmdW5jdGlvbiBydWxlcygpIHtcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2hlZXQuY3NzUnVsZXM7XG4gICAgfVxuICAgIHZhciBhcnIgPSBbXTtcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZS5hcHBseShhcnIsIFthcnIubGVuZ3RoLCAwXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KEFycmF5LmZyb20oc2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcykpKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvc2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBYbWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIveG1sLWVudGl0aWVzLmpzJyksXG4gIEh0bWw0RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw0LWVudGl0aWVzLmpzJyksXG4gIEh0bWw1RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw1LWVudGl0aWVzLmpzJyksXG4gIEFsbEh0bWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDUtZW50aXRpZXMuanMnKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJ2YXIgSFRNTF9BTFBIQSA9IFsnYXBvcycsICduYnNwJywgJ2lleGNsJywgJ2NlbnQnLCAncG91bmQnLCAnY3VycmVuJywgJ3llbicsICdicnZiYXInLCAnc2VjdCcsICd1bWwnLCAnY29weScsICdvcmRmJywgJ2xhcXVvJywgJ25vdCcsICdzaHknLCAncmVnJywgJ21hY3InLCAnZGVnJywgJ3BsdXNtbicsICdzdXAyJywgJ3N1cDMnLCAnYWN1dGUnLCAnbWljcm8nLCAncGFyYScsICdtaWRkb3QnLCAnY2VkaWwnLCAnc3VwMScsICdvcmRtJywgJ3JhcXVvJywgJ2ZyYWMxNCcsICdmcmFjMTInLCAnZnJhYzM0JywgJ2lxdWVzdCcsICdBZ3JhdmUnLCAnQWFjdXRlJywgJ0FjaXJjJywgJ0F0aWxkZScsICdBdW1sJywgJ0FyaW5nJywgJ0FlbGlnJywgJ0NjZWRpbCcsICdFZ3JhdmUnLCAnRWFjdXRlJywgJ0VjaXJjJywgJ0V1bWwnLCAnSWdyYXZlJywgJ0lhY3V0ZScsICdJY2lyYycsICdJdW1sJywgJ0VUSCcsICdOdGlsZGUnLCAnT2dyYXZlJywgJ09hY3V0ZScsICdPY2lyYycsICdPdGlsZGUnLCAnT3VtbCcsICd0aW1lcycsICdPc2xhc2gnLCAnVWdyYXZlJywgJ1VhY3V0ZScsICdVY2lyYycsICdVdW1sJywgJ1lhY3V0ZScsICdUSE9STicsICdzemxpZycsICdhZ3JhdmUnLCAnYWFjdXRlJywgJ2FjaXJjJywgJ2F0aWxkZScsICdhdW1sJywgJ2FyaW5nJywgJ2FlbGlnJywgJ2NjZWRpbCcsICdlZ3JhdmUnLCAnZWFjdXRlJywgJ2VjaXJjJywgJ2V1bWwnLCAnaWdyYXZlJywgJ2lhY3V0ZScsICdpY2lyYycsICdpdW1sJywgJ2V0aCcsICdudGlsZGUnLCAnb2dyYXZlJywgJ29hY3V0ZScsICdvY2lyYycsICdvdGlsZGUnLCAnb3VtbCcsICdkaXZpZGUnLCAnT3NsYXNoJywgJ3VncmF2ZScsICd1YWN1dGUnLCAndWNpcmMnLCAndXVtbCcsICd5YWN1dGUnLCAndGhvcm4nLCAneXVtbCcsICdxdW90JywgJ2FtcCcsICdsdCcsICdndCcsICdvZWxpZycsICdvZWxpZycsICdzY2Fyb24nLCAnc2Nhcm9uJywgJ3l1bWwnLCAnY2lyYycsICd0aWxkZScsICdlbnNwJywgJ2Vtc3AnLCAndGhpbnNwJywgJ3p3bmonLCAnendqJywgJ2xybScsICdybG0nLCAnbmRhc2gnLCAnbWRhc2gnLCAnbHNxdW8nLCAncnNxdW8nLCAnc2JxdW8nLCAnbGRxdW8nLCAncmRxdW8nLCAnYmRxdW8nLCAnZGFnZ2VyJywgJ2RhZ2dlcicsICdwZXJtaWwnLCAnbHNhcXVvJywgJ3JzYXF1bycsICdldXJvJywgJ2Zub2YnLCAnYWxwaGEnLCAnYmV0YScsICdnYW1tYScsICdkZWx0YScsICdlcHNpbG9uJywgJ3pldGEnLCAnZXRhJywgJ3RoZXRhJywgJ2lvdGEnLCAna2FwcGEnLCAnbGFtYmRhJywgJ211JywgJ251JywgJ3hpJywgJ29taWNyb24nLCAncGknLCAncmhvJywgJ3NpZ21hJywgJ3RhdScsICd1cHNpbG9uJywgJ3BoaScsICdjaGknLCAncHNpJywgJ29tZWdhJywgJ2FscGhhJywgJ2JldGEnLCAnZ2FtbWEnLCAnZGVsdGEnLCAnZXBzaWxvbicsICd6ZXRhJywgJ2V0YScsICd0aGV0YScsICdpb3RhJywgJ2thcHBhJywgJ2xhbWJkYScsICdtdScsICdudScsICd4aScsICdvbWljcm9uJywgJ3BpJywgJ3JobycsICdzaWdtYWYnLCAnc2lnbWEnLCAndGF1JywgJ3Vwc2lsb24nLCAncGhpJywgJ2NoaScsICdwc2knLCAnb21lZ2EnLCAndGhldGFzeW0nLCAndXBzaWgnLCAncGl2JywgJ2J1bGwnLCAnaGVsbGlwJywgJ3ByaW1lJywgJ3ByaW1lJywgJ29saW5lJywgJ2ZyYXNsJywgJ3dlaWVycCcsICdpbWFnZScsICdyZWFsJywgJ3RyYWRlJywgJ2FsZWZzeW0nLCAnbGFycicsICd1YXJyJywgJ3JhcnInLCAnZGFycicsICdoYXJyJywgJ2NyYXJyJywgJ2xhcnInLCAndWFycicsICdyYXJyJywgJ2RhcnInLCAnaGFycicsICdmb3JhbGwnLCAncGFydCcsICdleGlzdCcsICdlbXB0eScsICduYWJsYScsICdpc2luJywgJ25vdGluJywgJ25pJywgJ3Byb2QnLCAnc3VtJywgJ21pbnVzJywgJ2xvd2FzdCcsICdyYWRpYycsICdwcm9wJywgJ2luZmluJywgJ2FuZycsICdhbmQnLCAnb3InLCAnY2FwJywgJ2N1cCcsICdpbnQnLCAndGhlcmU0JywgJ3NpbScsICdjb25nJywgJ2FzeW1wJywgJ25lJywgJ2VxdWl2JywgJ2xlJywgJ2dlJywgJ3N1YicsICdzdXAnLCAnbnN1YicsICdzdWJlJywgJ3N1cGUnLCAnb3BsdXMnLCAnb3RpbWVzJywgJ3BlcnAnLCAnc2RvdCcsICdsY2VpbCcsICdyY2VpbCcsICdsZmxvb3InLCAncmZsb29yJywgJ2xhbmcnLCAncmFuZycsICdsb3onLCAnc3BhZGVzJywgJ2NsdWJzJywgJ2hlYXJ0cycsICdkaWFtcyddO1xudmFyIEhUTUxfQ09ERVMgPSBbMzksIDE2MCwgMTYxLCAxNjIsIDE2MywgMTY0LCAxNjUsIDE2NiwgMTY3LCAxNjgsIDE2OSwgMTcwLCAxNzEsIDE3MiwgMTczLCAxNzQsIDE3NSwgMTc2LCAxNzcsIDE3OCwgMTc5LCAxODAsIDE4MSwgMTgyLCAxODMsIDE4NCwgMTg1LCAxODYsIDE4NywgMTg4LCAxODksIDE5MCwgMTkxLCAxOTIsIDE5MywgMTk0LCAxOTUsIDE5NiwgMTk3LCAxOTgsIDE5OSwgMjAwLCAyMDEsIDIwMiwgMjAzLCAyMDQsIDIwNSwgMjA2LCAyMDcsIDIwOCwgMjA5LCAyMTAsIDIxMSwgMjEyLCAyMTMsIDIxNCwgMjE1LCAyMTYsIDIxNywgMjE4LCAyMTksIDIyMCwgMjIxLCAyMjIsIDIyMywgMjI0LCAyMjUsIDIyNiwgMjI3LCAyMjgsIDIyOSwgMjMwLCAyMzEsIDIzMiwgMjMzLCAyMzQsIDIzNSwgMjM2LCAyMzcsIDIzOCwgMjM5LCAyNDAsIDI0MSwgMjQyLCAyNDMsIDI0NCwgMjQ1LCAyNDYsIDI0NywgMjQ4LCAyNDksIDI1MCwgMjUxLCAyNTIsIDI1MywgMjU0LCAyNTUsIDM0LCAzOCwgNjAsIDYyLCAzMzgsIDMzOSwgMzUyLCAzNTMsIDM3NiwgNzEwLCA3MzIsIDgxOTQsIDgxOTUsIDgyMDEsIDgyMDQsIDgyMDUsIDgyMDYsIDgyMDcsIDgyMTEsIDgyMTIsIDgyMTYsIDgyMTcsIDgyMTgsIDgyMjAsIDgyMjEsIDgyMjIsIDgyMjQsIDgyMjUsIDgyNDAsIDgyNDksIDgyNTAsIDgzNjQsIDQwMiwgOTEzLCA5MTQsIDkxNSwgOTE2LCA5MTcsIDkxOCwgOTE5LCA5MjAsIDkyMSwgOTIyLCA5MjMsIDkyNCwgOTI1LCA5MjYsIDkyNywgOTI4LCA5MjksIDkzMSwgOTMyLCA5MzMsIDkzNCwgOTM1LCA5MzYsIDkzNywgOTQ1LCA5NDYsIDk0NywgOTQ4LCA5NDksIDk1MCwgOTUxLCA5NTIsIDk1MywgOTU0LCA5NTUsIDk1NiwgOTU3LCA5NTgsIDk1OSwgOTYwLCA5NjEsIDk2MiwgOTYzLCA5NjQsIDk2NSwgOTY2LCA5NjcsIDk2OCwgOTY5LCA5NzcsIDk3OCwgOTgyLCA4MjI2LCA4MjMwLCA4MjQyLCA4MjQzLCA4MjU0LCA4MjYwLCA4NDcyLCA4NDY1LCA4NDc2LCA4NDgyLCA4NTAxLCA4NTkyLCA4NTkzLCA4NTk0LCA4NTk1LCA4NTk2LCA4NjI5LCA4NjU2LCA4NjU3LCA4NjU4LCA4NjU5LCA4NjYwLCA4NzA0LCA4NzA2LCA4NzA3LCA4NzA5LCA4NzExLCA4NzEyLCA4NzEzLCA4NzE1LCA4NzE5LCA4NzIxLCA4NzIyLCA4NzI3LCA4NzMwLCA4NzMzLCA4NzM0LCA4NzM2LCA4NzQzLCA4NzQ0LCA4NzQ1LCA4NzQ2LCA4NzQ3LCA4NzU2LCA4NzY0LCA4NzczLCA4Nzc2LCA4ODAwLCA4ODAxLCA4ODA0LCA4ODA1LCA4ODM0LCA4ODM1LCA4ODM2LCA4ODM4LCA4ODM5LCA4ODUzLCA4ODU1LCA4ODY5LCA4OTAxLCA4OTY4LCA4OTY5LCA4OTcwLCA4OTcxLCA5MDAxLCA5MDAyLCA5Njc0LCA5ODI0LCA5ODI3LCA5ODI5LCA5ODMwXTtcblxudmFyIGFscGhhSW5kZXggPSB7fTtcbnZhciBudW1JbmRleCA9IHt9O1xuXG52YXIgaSA9IDA7XG52YXIgbGVuZ3RoID0gSFRNTF9BTFBIQS5sZW5ndGg7XG53aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgIHZhciBhID0gSFRNTF9BTFBIQVtpXTtcbiAgICB2YXIgYyA9IEhUTUxfQ09ERVNbaV07XG4gICAgYWxwaGFJbmRleFthXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgbnVtSW5kZXhbY10gPSBhO1xuICAgIGkrKztcbn1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSHRtbDRFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYoIz9bXFx3XFxkXSspOz8vZywgZnVuY3Rpb24ocywgZW50aXR5KSB7XG4gICAgICAgIHZhciBjaHI7XG4gICAgICAgIGlmIChlbnRpdHkuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBlbnRpdHkuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigyKSwgMTYpIDpcbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDEpKTtcblxuICAgICAgICAgICAgaWYgKCEoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociA9IGFscGhhSW5kZXhbZW50aXR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hyIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZGVjb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZGVjb2RlKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBhbHBoYSA9IG51bUluZGV4W3N0ci5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgcmVzdWx0ICs9IGFscGhhID8gXCImXCIgKyBhbHBoYSArIFwiO1wiIDogc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZShzdHIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgY2MgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gbnVtSW5kZXhbY2NdO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2MgPCAzMiB8fCBjYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiJiNcIiArIGNjICsgXCI7XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDRFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEh0bWw0RW50aXRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1lbnRpdGllcy9saWIvaHRtbDQtZW50aXRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsInZhciBBTFBIQV9JTkRFWCA9IHtcbiAgICAnJmx0JzogJzwnLFxuICAgICcmZ3QnOiAnPicsXG4gICAgJyZxdW90JzogJ1wiJyxcbiAgICAnJmFwb3MnOiAnXFwnJyxcbiAgICAnJmFtcCc6ICcmJyxcbiAgICAnJmx0Oyc6ICc8JyxcbiAgICAnJmd0Oyc6ICc+JyxcbiAgICAnJnF1b3Q7JzogJ1wiJyxcbiAgICAnJmFwb3M7JzogJ1xcJycsXG4gICAgJyZhbXA7JzogJyYnXG59O1xuXG52YXIgQ0hBUl9JTkRFWCA9IHtcbiAgICA2MDogJ2x0JyxcbiAgICA2MjogJ2d0JyxcbiAgICAzNDogJ3F1b3QnLFxuICAgIDM5OiAnYXBvcycsXG4gICAgMzg6ICdhbXAnXG59O1xuXG52YXIgQ0hBUl9TX0lOREVYID0ge1xuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgICdcXCcnOiAnJmFwb3M7JyxcbiAgICAnJic6ICcmYW1wOydcbn07XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFhtbEVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzx8PnxcInwnfCYvZywgZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gQ0hBUl9TX0lOREVYW3NdO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBYbWxFbnRpdGllcygpLmVuY29kZShzdHIpO1xuIH07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIz9bMC05YS16QS1aXSs7Py9nLCBmdW5jdGlvbihzKSB7XG4gICAgICAgIGlmIChzLmNoYXJBdCgxKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IHMuY2hhckF0KDIpLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQocy5zdWJzdHIoMyksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQocy5zdWJzdHIoMikpO1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oY29kZSkgfHwgY29kZSA8IC0zMjc2OCB8fCBjb2RlID4gNjU1MzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQUxQSEFfSU5ERVhbc10gfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgYWxwaGEgPSBDSEFSX0lOREVYW2NdO1xuICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA8IDMyIHx8IGMgPiAxMjYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGVOb25VVEYoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5naHQgPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5naHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ2h0KSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDw9IDI1NSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0cltpKytdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGVOb25BU0NJSShzdHIpO1xuIH07XG5cbm1vZHVsZS5leHBvcnRzID0gWG1sRW50aXRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1lbnRpdGllcy9saWIveG1sLWVudGl0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxudmFyIF9rZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxudmFyIF9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlID0gcmVxdWlyZSgnd2VicGFjay1ob3QtbWlkZGxld2FyZS9jbGllbnQ/b3ZlcmxheT1mYWxzZSZyZWxvYWQ9dHJ1ZScpO1xuXG52YXIgX2NsaWVudE92ZXJsYXlGYWxzZVJlbG9hZFRydWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoYW5kbGVycyA9IHtcbiAgcmVsb2FkOiBmdW5jdGlvbiByZWxvYWQocm91dGUpIHtcbiAgICBpZiAocm91dGUgPT09ICcvX2Vycm9yJykge1xuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKCgwLCBfa2V5czIuZGVmYXVsdCkobmV4dC5yb3V0ZXIuY29tcG9uZW50cykpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tyXS5Db21wb25lbnQ7XG5cbiAgICAgICAgICBpZiAoQ29tcG9uZW50Ll9fcm91dGUgPT09ICcvX2Vycm9yLWRlYnVnJykge1xuICAgICAgICAgICAgLy8gcmVsb2FkIGFsbCAnL19lcnJvci1kZWJ1ZydcbiAgICAgICAgICAgIC8vIHdoaWNoIGFyZSBleHBlY3RlZCB0byBiZSBlcnJvcnMgb2YgJy9fZXJyb3InIHJvdXRlc1xuICAgICAgICAgICAgbmV4dC5yb3V0ZXIucmVsb2FkKHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0LnJvdXRlci5yZWxvYWQocm91dGUpO1xuICB9LFxuICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShyb3V0ZSkge1xuICAgIHZhciBfcmVmID0gbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tyb3V0ZV0gfHwge30sXG4gICAgICAgIENvbXBvbmVudCA9IF9yZWYuQ29tcG9uZW50O1xuXG4gICAgaWYgKENvbXBvbmVudCAmJiBDb21wb25lbnQuX19yb3V0ZSA9PT0gJy9fZXJyb3ItZGVidWcnKSB7XG4gICAgICAvLyByZWxvYWQgdG8gcmVjb3ZlciBmcm9tIHJ1bnRpbWUgZXJyb3JzXG4gICAgICBuZXh0LnJvdXRlci5yZWxvYWQocm91dGUpO1xuICAgIH1cbiAgfVxufTsgLyogZ2xvYmFsIG5leHQgKi9cblxuXG5fY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZTIuZGVmYXVsdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG9iaikge1xuICB2YXIgZm4gPSBoYW5kbGVyc1tvYmouYWN0aW9uXTtcbiAgaWYgKGZuKSB7XG4gICAgdmFyIGRhdGEgPSBvYmouZGF0YSB8fCBbXTtcbiAgICBmbi5hcHBseSh1bmRlZmluZWQsICgwLCBfdG9Db25zdW1hYmxlQXJyYXkzLmRlZmF1bHQpKGRhdGEpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgYWN0aW9uICcgKyBvYmouYWN0aW9uKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB0aXRsZTogICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246ICBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmNvbnN0IEhlYWRCbG9jID0gKHByb3BzKSA9PlxuICA8SGVhZD5cbiAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxuICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdndWlsbGF1bWUsIGtvbGx5LCBmcm9udGVuZCwgYmFja2VuZCwgZnVsbCBzdGFjaywgZGV2ZWxvcGVyLCB3ZWIsIGphdmFzY3JpcHQsIHJlYWN0SlMsIE1ldGVvciwgSnMsIE5leHRKUywgV2VicGFjaycgLz5cbiAgICA8bWV0YSBuYW1lPSdjb3B5cmlnaHQnIGNvbnRlbnQ9J0d1aWxsYXVtZSBLb2xseScgLz5cbiAgPC9IZWFkPlxuXG5jc3MuZ2xvYmFsKCdodG1sLCBib2R5JywgIHtcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgYm9yZGVyOiAnMCcsXG4gIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgbGluZUhlaWdodDogJzEuMTUnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIGZvbnRXZWlnaHQ6ICczMDAnLFxuICBmb250U3R5bGU6ICdub3JtYWwnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0ZXh0U2hhZG93OiAnMCcsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxufSlcblxuSGVhZEJsb2MucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBIZWFkQmxvY1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MuanMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVlcnlzdHJpbmcvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBhbnNpUmVnZXggPSByZXF1aXJlKCdhbnNpLXJlZ2V4JykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ci5yZXBsYWNlKGFuc2lSZWdleCwgJycpIDogc3RyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHJpcC1hbnNpL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG5cbnZhciBjbGllbnRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG52YXIgc3R5bGVzID0ge1xuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjg1KScsXG4gIGNvbG9yOiAnI0U4RThFOCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjInLFxuICB3aGl0ZVNwYWNlOiAncHJlJyxcbiAgZm9udEZhbWlseTogJ01lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlJyxcbiAgZm9udFNpemU6ICcxM3B4JyxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHpJbmRleDogOTk5OSxcbiAgcGFkZGluZzogJzEwcHgnLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gIGRpcjogJ2x0cidcbn07XG5mb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gIGNsaWVudE92ZXJsYXkuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xufVxuXG52YXIgYW5zaUhUTUwgPSByZXF1aXJlKCdhbnNpLWh0bWwnKTtcbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ3RyYW5zcGFyZW50JywgJ3RyYW5zcGFyZW50J10sXG4gIGJsYWNrOiAnMTgxODE4JyxcbiAgcmVkOiAnRTM2MDQ5JyxcbiAgZ3JlZW46ICdCM0NCNzQnLFxuICB5ZWxsb3c6ICdGRkQwODAnLFxuICBibHVlOiAnN0NBRkMyJyxcbiAgbWFnZW50YTogJzdGQUNDQScsXG4gIGN5YW46ICdDM0MyRUYnLFxuICBsaWdodGdyZXk6ICdFQkU3RTMnLFxuICBkYXJrZ3JleTogJzZENzg5MSdcbn07XG5hbnNpSFRNTC5zZXRDb2xvcnMoY29sb3JzKTtcblxudmFyIEVudGl0aWVzID0gcmVxdWlyZSgnaHRtbC1lbnRpdGllcycpLkFsbEh0bWxFbnRpdGllcztcbnZhciBlbnRpdGllcyA9IG5ldyBFbnRpdGllcygpO1xuXG5leHBvcnRzLnNob3dQcm9ibGVtcyA9XG5mdW5jdGlvbiBzaG93UHJvYmxlbXModHlwZSwgbGluZXMpIHtcbiAgY2xpZW50T3ZlcmxheS5pbm5lckhUTUwgPSAnJztcbiAgbGluZXMuZm9yRWFjaChmdW5jdGlvbihtc2cpIHtcbiAgICBtc2cgPSBhbnNpSFRNTChlbnRpdGllcy5lbmNvZGUobXNnKSk7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMjZweCc7XG4gICAgZGl2LmlubmVySFRNTCA9IHByb2JsZW1UeXBlKHR5cGUpICsgJyBpbiAnICsgbXNnO1xuICAgIGNsaWVudE92ZXJsYXkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbGllbnRPdmVybGF5KTtcbiAgfVxufTtcblxuZXhwb3J0cy5jbGVhciA9XG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgaWYgKGRvY3VtZW50LmJvZHkgJiYgY2xpZW50T3ZlcmxheS5wYXJlbnROb2RlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbGllbnRPdmVybGF5KTtcbiAgfVxufTtcblxudmFyIHByb2JsZW1Db2xvcnMgPSB7XG4gIGVycm9yczogY29sb3JzLnJlZCxcbiAgd2FybmluZ3M6IGNvbG9ycy55ZWxsb3dcbn07XG5cbmZ1bmN0aW9uIHByb2JsZW1UeXBlICh0eXBlKSB7XG4gIHZhciBjb2xvciA9IHByb2JsZW1Db2xvcnNbdHlwZV0gfHwgY29sb3JzLnJlZDtcbiAgcmV0dXJuIChcbiAgICAnPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMnICsgY29sb3IgKyAnOyBjb2xvcjojZmZmOyBwYWRkaW5nOjJweCA0cHg7IGJvcmRlci1yYWRpdXM6IDJweFwiPicgK1xuICAgICAgdHlwZS5zbGljZSgwLCAtMSkudG9VcHBlckNhc2UoKSArXG4gICAgJzwvc3Bhbj4nXG4gICk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LW92ZXJsYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIi8qZXNsaW50LWVudiBicm93c2VyKi9cbi8qZ2xvYmFsIF9fcmVzb3VyY2VRdWVyeSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyovXG5cbnZhciBvcHRpb25zID0ge1xuICBwYXRoOiBcIi9fX3dlYnBhY2tfaG1yXCIsXG4gIHRpbWVvdXQ6IDIwICogMTAwMCxcbiAgb3ZlcmxheTogdHJ1ZSxcbiAgcmVsb2FkOiBmYWxzZSxcbiAgbG9nOiB0cnVlLFxuICB3YXJuOiB0cnVlXG59O1xuaWYgKF9fcmVzb3VyY2VRdWVyeSkge1xuICB2YXIgcXVlcnlzdHJpbmcgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xuICB2YXIgb3ZlcnJpZGVzID0gcXVlcnlzdHJpbmcucGFyc2UoX19yZXNvdXJjZVF1ZXJ5LnNsaWNlKDEpKTtcbiAgaWYgKG92ZXJyaWRlcy5wYXRoKSBvcHRpb25zLnBhdGggPSBvdmVycmlkZXMucGF0aDtcbiAgaWYgKG92ZXJyaWRlcy50aW1lb3V0KSBvcHRpb25zLnRpbWVvdXQgPSBvdmVycmlkZXMudGltZW91dDtcbiAgaWYgKG92ZXJyaWRlcy5vdmVybGF5KSBvcHRpb25zLm92ZXJsYXkgPSBvdmVycmlkZXMub3ZlcmxheSAhPT0gJ2ZhbHNlJztcbiAgaWYgKG92ZXJyaWRlcy5yZWxvYWQpIG9wdGlvbnMucmVsb2FkID0gb3ZlcnJpZGVzLnJlbG9hZCAhPT0gJ2ZhbHNlJztcbiAgaWYgKG92ZXJyaWRlcy5ub0luZm8gJiYgb3ZlcnJpZGVzLm5vSW5mbyAhPT0gJ2ZhbHNlJykge1xuICAgIG9wdGlvbnMubG9nID0gZmFsc2U7XG4gIH1cbiAgaWYgKG92ZXJyaWRlcy5xdWlldCAmJiBvdmVycmlkZXMucXVpZXQgIT09ICdmYWxzZScpIHtcbiAgICBvcHRpb25zLmxvZyA9IGZhbHNlO1xuICAgIG9wdGlvbnMud2FybiA9IGZhbHNlO1xuICB9XG4gIGlmIChvdmVycmlkZXMuZHluYW1pY1B1YmxpY1BhdGgpIHtcbiAgICBvcHRpb25zLnBhdGggPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIG9wdGlvbnMucGF0aDtcbiAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gZG8gbm90aGluZ1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LkV2ZW50U291cmNlID09PSAndW5kZWZpbmVkJykge1xuICBjb25zb2xlLndhcm4oXG4gICAgXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlJ3MgY2xpZW50IHJlcXVpcmVzIEV2ZW50U291cmNlIHRvIHdvcmsuIFwiICtcbiAgICBcIllvdSBzaG91bGQgaW5jbHVkZSBhIHBvbHlmaWxsIGlmIHlvdSB3YW50IHRvIHN1cHBvcnQgdGhpcyBicm93c2VyOiBcIiArXG4gICAgXCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmVyLXNlbnRfZXZlbnRzI1Rvb2xzXCJcbiAgKTtcbn0gZWxzZSB7XG4gIGNvbm5lY3Qod2luZG93LkV2ZW50U291cmNlKTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdChFdmVudFNvdXJjZSkge1xuICB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKG9wdGlvbnMucGF0aCk7XG4gIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuXG4gIHNvdXJjZS5vbm9wZW4gPSBoYW5kbGVPbmxpbmU7XG4gIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICBzb3VyY2Uub25lcnJvciA9IGhhbmRsZURpc2Nvbm5lY3Q7XG5cbiAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKChuZXcgRGF0ZSgpIC0gbGFzdEFjdGl2aXR5KSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgaGFuZGxlRGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMik7XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coXCJbSE1SXSBjb25uZWN0ZWRcIik7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChldmVudC5kYXRhID09IFwiXFx1RDgzRFxcdURDOTNcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcHJvY2Vzc01lc3NhZ2UoSlNPTi5wYXJzZShldmVudC5kYXRhKSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCBITVIgbWVzc2FnZTogXCIgKyBldmVudC5kYXRhICsgXCJcXG5cIiArIGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIHNvdXJjZS5jbG9zZSgpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNvbm5lY3QoRXZlbnRTb3VyY2UpOyB9LCBvcHRpb25zLnRpbWVvdXQpO1xuICB9XG5cbn1cblxudmFyIHJlcG9ydGVyO1xuLy8gdGhlIHJlcG9ydGVyIG5lZWRzIHRvIGJlIGEgc2luZ2xldG9uIG9uIHRoZSBwYWdlXG4vLyBpbiBjYXNlIHRoZSBjbGllbnQgaXMgYmVpbmcgdXNlZCBieSBtdXRsaXBsZSBidW5kbGVzXG4vLyB3ZSBvbmx5IHdhbnQgdG8gcmVwb3J0IG9uY2UuXG4vLyBhbGwgdGhlIGVycm9ycyB3aWxsIGdvIHRvIGFsbCBjbGllbnRzXG52YXIgc2luZ2xldG9uS2V5ID0gJ19fd2VicGFja19ob3RfbWlkZGxld2FyZV9yZXBvcnRlcl9fJztcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93W3NpbmdsZXRvbktleV0pIHtcbiAgcmVwb3J0ZXIgPSB3aW5kb3dbc2luZ2xldG9uS2V5XSA9IGNyZWF0ZVJlcG9ydGVyKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcG9ydGVyKCkge1xuICB2YXIgc3RyaXAgPSByZXF1aXJlKCdzdHJpcC1hbnNpJyk7XG5cbiAgdmFyIG92ZXJsYXk7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIG9wdGlvbnMub3ZlcmxheSkge1xuICAgIG92ZXJsYXkgPSByZXF1aXJlKCcuL2NsaWVudC1vdmVybGF5Jyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb2JsZW1zOiBmdW5jdGlvbih0eXBlLCBvYmopIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gYnVuZGxlIGhhcyBcIiArIHR5cGUgKyBcIjpcIik7XG4gICAgICAgIG9ialt0eXBlXS5mb3JFYWNoKGZ1bmN0aW9uKG1zZykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIFwiICsgc3RyaXAobXNnKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJsYXkgJiYgdHlwZSAhPT0gJ3dhcm5pbmdzJykgb3ZlcmxheS5zaG93UHJvYmxlbXModHlwZSwgb2JqW3R5cGVdKTtcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG92ZXJsYXkpIG92ZXJsYXkuY2xlYXIoKTtcbiAgICB9LFxuICAgIHVzZUN1c3RvbU92ZXJsYXk6IGZ1bmN0aW9uKGN1c3RvbU92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkgPSBjdXN0b21PdmVybGF5O1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHByb2Nlc3NVcGRhdGUgPSByZXF1aXJlKCcuL3Byb2Nlc3MtdXBkYXRlJyk7XG5cbnZhciBjdXN0b21IYW5kbGVyO1xudmFyIHN1YnNjcmliZUFsbEhhbmRsZXI7XG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShvYmopIHtcbiAgc3dpdGNoKG9iai5hY3Rpb24pIHtcbiAgICBjYXNlIFwiYnVpbGRpbmdcIjpcbiAgICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coXCJbSE1SXSBidW5kbGUgcmVidWlsZGluZ1wiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJidWlsdFwiOlxuICAgICAgaWYgKG9wdGlvbnMubG9nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiW0hNUl0gYnVuZGxlIFwiICsgKG9iai5uYW1lID8gb2JqLm5hbWUgKyBcIiBcIiA6IFwiXCIpICtcbiAgICAgICAgICBcInJlYnVpbHQgaW4gXCIgKyBvYmoudGltZSArIFwibXNcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gZmFsbCB0aHJvdWdoXG4gICAgY2FzZSBcInN5bmNcIjpcbiAgICAgIGlmIChvYmouZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHJlcG9ydGVyKSByZXBvcnRlci5wcm9ibGVtcygnZXJyb3JzJywgb2JqKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXBvcnRlcikge1xuICAgICAgICAgIGlmIChvYmoud2FybmluZ3MubGVuZ3RoID4gMCkgcmVwb3J0ZXIucHJvYmxlbXMoJ3dhcm5pbmdzJywgb2JqKTtcbiAgICAgICAgICByZXBvcnRlci5zdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc1VwZGF0ZShvYmouaGFzaCwgb2JqLm1vZHVsZXMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChjdXN0b21IYW5kbGVyKSB7XG4gICAgICAgIGN1c3RvbUhhbmRsZXIob2JqKTtcbiAgICAgIH1cbiAgfVxuXG4gIGlmIChzdWJzY3JpYmVBbGxIYW5kbGVyKSB7XG4gICAgc3Vic2NyaWJlQWxsSGFuZGxlcihvYmopO1xuICB9XG59XG5cbmlmIChtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc3Vic2NyaWJlQWxsOiBmdW5jdGlvbiBzdWJzY3JpYmVBbGwoaGFuZGxlcikge1xuICAgICAgc3Vic2NyaWJlQWxsSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyKSB7XG4gICAgICBjdXN0b21IYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9LFxuICAgIHVzZUN1c3RvbU92ZXJsYXk6IGZ1bmN0aW9uIHVzZUN1c3RvbU92ZXJsYXkoY3VzdG9tT3ZlcmxheSkge1xuICAgICAgaWYgKHJlcG9ydGVyKSByZXBvcnRlci51c2VDdXN0b21PdmVybGF5KGN1c3RvbU92ZXJsYXkpO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9jbGllbnQuanM/b3ZlcmxheT1mYWxzZSZyZWxvYWQ9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiLyoqXG4gKiBCYXNlZCBoZWF2aWx5IG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svYmxvYi9cbiAqICBjMGFmZGY5YzZhYmMxZGQ3MDcwN2M1OTRlNDczODAyYTU2NmY3YjZlL2hvdC9vbmx5LWRldi1zZXJ2ZXIuanNcbiAqIE9yaWdpbmFsIGNvcHlyaWdodCBUb2JpYXMgS29wcGVycyBAc29rcmEgKE1JVCBsaWNlbnNlKVxuICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgX193ZWJwYWNrX2hhc2hfXyAqL1xuXG5pZiAoIW1vZHVsZS5ob3QpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG5cbnZhciBobXJEb2NzVXJsID0gXCJodHRwOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50LXdpdGgtd2VicGFjay5odG1sXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuXG52YXIgbGFzdEhhc2g7XG52YXIgZmFpbHVyZVN0YXR1c2VzID0geyBhYm9ydDogMSwgZmFpbDogMSB9O1xudmFyIGFwcGx5T3B0aW9ucyA9IHsgaWdub3JlVW5hY2NlcHRlZDogdHJ1ZSB9O1xuXG5mdW5jdGlvbiB1cFRvRGF0ZShoYXNoKSB7XG4gIGlmIChoYXNoKSBsYXN0SGFzaCA9IGhhc2g7XG4gIHJldHVybiBsYXN0SGFzaCA9PSBfX3dlYnBhY2tfaGFzaF9fO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhhc2gsIG1vZHVsZU1hcCwgb3B0aW9ucykge1xuICB2YXIgcmVsb2FkID0gb3B0aW9ucy5yZWxvYWQ7XG4gIGlmICghdXBUb0RhdGUoaGFzaCkgJiYgbW9kdWxlLmhvdC5zdGF0dXMoKSA9PSBcImlkbGVcIikge1xuICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coXCJbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uXCIpO1xuICAgIGNoZWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICB2YXIgY2IgPSBmdW5jdGlvbihlcnIsIHVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoZXJyKTtcblxuICAgICAgaWYoIXVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBDYW5ub3QgZmluZCB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZClcIik7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gKFByb2JhYmx5IGJlY2F1c2Ugb2YgcmVzdGFydGluZyB0aGUgc2VydmVyKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXBwbHlDYWxsYmFjayA9IGZ1bmN0aW9uKGFwcGx5RXJyLCByZW5ld2VkTW9kdWxlcykge1xuICAgICAgICBpZiAoYXBwbHlFcnIpIHJldHVybiBoYW5kbGVFcnJvcihhcHBseUVycik7XG5cbiAgICAgICAgaWYgKCF1cFRvRGF0ZSgpKSBjaGVjaygpO1xuXG4gICAgICAgIGxvZ1VwZGF0ZXModXBkYXRlZE1vZHVsZXMsIHJlbmV3ZWRNb2R1bGVzKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhcHBseVJlc3VsdCA9IG1vZHVsZS5ob3QuYXBwbHkoYXBwbHlPcHRpb25zLCBhcHBseUNhbGxiYWNrKTtcbiAgICAgIC8vIHdlYnBhY2sgMiBwcm9taXNlXG4gICAgICBpZiAoYXBwbHlSZXN1bHQgJiYgYXBwbHlSZXN1bHQudGhlbikge1xuICAgICAgICAvLyBIb3RNb2R1bGVSZXBsYWNlbWVudC5ydW50aW1lLmpzIHJlZmVycyB0byB0aGUgcmVzdWx0IGFzIGBvdXRkYXRlZE1vZHVsZXNgXG4gICAgICAgIGFwcGx5UmVzdWx0LnRoZW4oZnVuY3Rpb24ob3V0ZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgICAgYXBwbHlDYWxsYmFjayhudWxsLCBvdXRkYXRlZE1vZHVsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwbHlSZXN1bHQuY2F0Y2goYXBwbHlDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgdmFyIHJlc3VsdCA9IG1vZHVsZS5ob3QuY2hlY2soZmFsc2UsIGNiKTtcbiAgICAvLyB3ZWJwYWNrIDIgcHJvbWlzZVxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24odXBkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgICAgIGNiKG51bGwsIHVwZGF0ZWRNb2R1bGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdC5jYXRjaChjYik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9nVXBkYXRlcyh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcbiAgICB2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgIHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG4gICAgfSk7XG5cbiAgICBpZih1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogXCIgK1xuICAgICAgICAgIFwiKEZ1bGwgcmVsb2FkIG5lZWRlZClcXG5cIiArXG4gICAgICAgICAgXCJUaGlzIGlzIHVzdWFsbHkgYmVjYXVzZSB0aGUgbW9kdWxlcyB3aGljaCBoYXZlIGNoYW5nZWQgXCIgK1xuICAgICAgICAgIFwiKGFuZCB0aGVpciBwYXJlbnRzKSBkbyBub3Qga25vdyBob3cgdG8gaG90IHJlbG9hZCB0aGVtc2VsdmVzLiBcIiArXG4gICAgICAgICAgXCJTZWUgXCIgKyBobXJEb2NzVXJsICsgXCIgZm9yIG1vcmUgZGV0YWlscy5cIlxuICAgICAgICApO1xuICAgICAgICB1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVNYXBbbW9kdWxlSWRdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubG9nKSB7XG4gICAgICBpZighcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG4gICAgICAgIHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdICAtIFwiICsgbW9kdWxlTWFwW21vZHVsZUlkXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodXBUb0RhdGUoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIpIHtcbiAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSBpbiBmYWlsdXJlU3RhdHVzZXMpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gQ2Fubm90IGNoZWNrIGZvciB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZClcIik7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIFwiICsgZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gVXBkYXRlIGNoZWNrIGZhaWxlZDogXCIgKyBlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm1SZWxvYWQoKSB7XG4gICAgaWYgKHJlbG9hZCkge1xuICAgICAgaWYgKG9wdGlvbnMud2FybikgY29uc29sZS53YXJuKFwiW0hNUl0gUmVsb2FkaW5nIHBhZ2VcIik7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL3Byb2Nlc3MtdXBkYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJ1xuXG5pbXBvcnQgcGFydGljbGVzIGZyb20gJy4uL2RhdGEvcGFydGljbGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsQmFja2dyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgcGFydGljbGVzOiBwYXJ0aWNsZXMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB9fSA+XG4gICAgICAgIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanMiLCJjb25zdCBwYXJ0aWNsZXMgPSB7XG4gIHBhcnRpY2xlczoge1xuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHZhbHVlOiA4MCxcbiAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHZhbHVlOiBcIiMwMDBcIlxuICAgICAgfSxcbiAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAuMSxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgICAgc2l6ZV9taW46IDAuMSxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBkaXN0YW5jZTogMTUwLFxuICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDYsXG4gICAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgb3V0X21vZGU6IFwib3V0XCIsXG4gICAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcbiAgICAgICAgICByb3RhdGVZOiAxMjAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgIGRldGVjdF9vbjogXCJjYW52YXNcIixcbiAgICAgIGV2ZW50czoge1xuICAgICAgb25ob3Zlcjoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG1vZGU6IFwicmVwdWxzZVwiXG4gICAgICB9LFxuICAgICAgb25jbGljazoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG1vZGU6IFwicHVzaFwiXG4gICAgICB9LFxuICAgICAgcmVzaXplOiB0cnVlXG4gICAgfSxcbiAgICBtb2Rlczoge1xuICAgICAgZ3JhYjoge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1YmJsZToge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBzaXplOiA0MCxcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIG9wYWNpdHk6IDgsXG4gICAgICAgIHNwZWVkOiAzXG4gICAgICB9LFxuICAgICAgcmVwdWxzZToge1xuICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICB9LFxuICAgICAgcHVzaDoge1xuICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXRpbmFfZGV0ZWN0OiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnRpY2xlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGEvcGFydGljbGVzLmpzIiwiIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdChyZXF1aXJlKFwicmVhY3RcIikpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwicmVhY3RcIiBdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzLlBhcnRpY2xlcyA9IHQocmVxdWlyZShcInJlYWN0XCIpKSA6IGUuUGFydGljbGVzID0gdChlLlJlYWN0KTtcbn0odGhpcywgZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHQoaSkge1xuICAgICAgICAgICAgaWYgKGFbaV0pIHJldHVybiBhW2ldLmV4cG9ydHM7XG4gICAgICAgICAgICB2YXIgciA9IGFbaV0gPSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgaWQ6IGksXG4gICAgICAgICAgICAgICAgbG9hZGVkOiAhMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBlW2ldLmNhbGwoci5leHBvcnRzLCByLCByLmV4cG9ydHMsIHQpLCByLmxvYWRlZCA9ICEwLCByLmV4cG9ydHM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSB7fTtcbiAgICAgICAgcmV0dXJuIHQubSA9IGUsIHQuYyA9IGEsIHQucCA9IFwiXCIsIHQoMCk7XG4gICAgfShbIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaSA9IGEoMyk7XG4gICAgICAgIHQuUGFydGljbGVzID0gaS5kZWZhdWx0LCB0LmRlZmF1bHQgPSBpLmRlZmF1bHQ7XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhIGluIGUpIHQuaGFzT3duUHJvcGVydHkoYSkgfHwgKHRbYV0gPSBlW2FdKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgaShhKDExKSksIGkoYSg5KSk7XG4gICAgICAgIHZhciByID0gYSg0KTtcbiAgICAgICAgdC5JbnRlcmFjdCA9IHIuZGVmYXVsdDtcbiAgICAgICAgdmFyIHMgPSBhKDUpO1xuICAgICAgICB0Lk1vZGVzID0gcy5kZWZhdWx0O1xuICAgICAgICB2YXIgbiA9IGEoNik7XG4gICAgICAgIHQuUGFydGljbGUgPSBuLmRlZmF1bHQ7XG4gICAgICAgIHZhciBvID0gYSg3KTtcbiAgICAgICAgdC5QYXJ0aWNsZU1hbmFnZXIgPSBvLmRlZmF1bHQ7XG4gICAgICAgIHZhciBjID0gYSg4KTtcbiAgICAgICAgdC5QYXJ0aWNsZXNMaWJyYXJ5ID0gYy5kZWZhdWx0O1xuICAgICAgICB2YXIgbCA9IGEoMTApO1xuICAgICAgICB0LlZlbmRvcnMgPSBsLmRlZmF1bHQ7XG4gICAgfSwgZnVuY3Rpb24odCwgYSkge1xuICAgICAgICB0LmV4cG9ydHMgPSBlO1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCFlKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gIXQgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgdCAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgPyBlIDogdDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzKGUsIHQpIHtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2YgdCk7XG4gICAgICAgICAgICBlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUodCAmJiB0LnByb3RvdHlwZSwge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIHQgJiYgKE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihlLCB0KSA6IGUuX19wcm90b19fID0gdCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbYV07XG4gICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgZSh0LnByb3RvdHlwZSwgYSksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvID0gYSgyKSwgYyA9IGEoMiksIGwgPSBhKDEpLCB1ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gdChlKSB7XG4gICAgICAgICAgICAgICAgaSh0aGlzLCB0KTtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHIodGhpcywgKHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLCBlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhczogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICBsaWJyYXJ5OiB2b2lkIDBcbiAgICAgICAgICAgICAgICB9LCBhLmxvYWRDYW52YXMgPSBhLmxvYWRDYW52YXMuYmluZChhKSwgYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzKHQsIGUpLCBuKHQsIFsge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpYnJhcnkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibG9hZENhbnZhc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgZSAmJiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhczogZVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuc3RhdGUubGlicmFyeS5sb2FkQ2FudmFzKHQuc3RhdGUuY2FudmFzKSwgdC5zdGF0ZS5saWJyYXJ5LnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29tcG9uZW50V2lsbE1vdW50XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpYnJhcnk6IG5ldyBsLlBhcnRpY2xlc0xpYnJhcnkodGhpcy5wcm9wcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlicmFyeS5kZXN0cm95KCksIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlicmFyeTogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMucHJvcHMsIHQgPSBlLndpZHRoLCBhID0gZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgby5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogdGhpcy5sb2FkQ2FudmFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGwuZGVlcEV4dGVuZCh0aGlzLnByb3BzLnN0eWxlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKSwgdDtcbiAgICAgICAgfShjLlB1cmVDb21wb25lbnQpO1xuICAgICAgICB1LmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgIH0sIHQuZGVmYXVsdCA9IHU7XG4gICAgfSwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gYShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbYV07XG4gICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgZSh0LnByb3RvdHlwZSwgYSksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQsIGkpIHtcbiAgICAgICAgICAgICAgICBhKHRoaXMsIGUpLCB0aGlzLnBhcmFtcyA9IHQsIHRoaXMubGlicmFyeSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaShlLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibGlua1BhcnRpY2xlc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gZS54IC0gdC54LCBpID0gZS55IC0gdC55LCByID0gTWF0aC5zcXJ0KGEgKiBhICsgaSAqIGkpLCBzID0gdGhpcy5saWJyYXJ5LmNhbnZhcywgbiA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIgPD0gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5IC0gciAvICgxIC8gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkpIC8gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmUsIGwgPSBjLnIsIHUgPSBjLmcsIHAgPSBjLmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jdHguc2F2ZSgpLCBzLmN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSggXCIgKyBsICsgXCIsIFwiICsgdSArIFwiLCBcIiArIHAgKyBcIiwgXCIgKyBvICsgXCIgKVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmN0eC5saW5lV2lkdGggPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsIHMuY3R4LmJlZ2luUGF0aCgpLCBuLnNoYWRvdy5lbmFibGUgJiYgKHMuY3R4LnNoYWRvd0JsdXIgPSBuLnNoYWRvdy5ibHVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmN0eC5zaGFkb3dDb2xvciA9IG4uc2hhZG93LmNvbG9yKSwgcy5jdHgubW92ZVRvKGUueCwgZS55KSwgcy5jdHgubGluZVRvKHQueCwgdC55KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jdHguc3Ryb2tlKCksIHMuY3R4LmNsb3NlUGF0aCgpLCBzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImF0dHJhY3RQYXJ0aWNsZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGUueCAtIHQueCwgaSA9IGUueSAtIHQueSwgciA9IE1hdGguc3FydChhICogYSArIGkgKiBpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIgPD0gdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGEgLyAoMWUzICogdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYKSwgbiA9IGkgLyAoMWUzICogdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudnggLT0gcywgZS52eSAtPSBuLCB0LnZ4ICs9IHMsIHQudnkgKz0gbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYm91bmNlUGFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLnggLSB0LngsIGkgPSBlLnkgLSB0LnksIHIgPSBNYXRoLnNxcnQoYSAqIGEgKyBpICogaSksIHMgPSBlLnJhZGl1cyArIHQucmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICByIDw9IHMgJiYgKGUudnggPSAtZS52eCwgZS52eSA9IC1lLnZ5LCB0LnZ4ID0gLXQudngsIHQudnkgPSAtdC52eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKSwgZTtcbiAgICAgICAgfSgpO1xuICAgICAgICB0LmRlZmF1bHQgPSByO1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcyA9IGEoMSksIG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgYSkge1xuICAgICAgICAgICAgICAgIGkodGhpcywgZSksIHRoaXMucGFyYW1zID0gdCwgdGhpcy5saWJyYXJ5ID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByKGUsIFsge1xuICAgICAgICAgICAgICAgIGtleTogXCJwdXNoUGFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmxpYnJhcnksIGkgPSBhLmNhbnZhcywgciA9IGEudG1wLCBuID0gYS5tYW5hZ2VyO1xuICAgICAgICAgICAgICAgICAgICByLnB1c2hpbmcgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBlOyBvKyspIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBzLlBhcnRpY2xlKHRoaXMucGFyYW1zLCB0aGlzLmxpYnJhcnksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5jb2xvciwgdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHQgPyB0LnBvc194IDogTWF0aC5yYW5kb20oKSAqIGkud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB0ID8gdC5wb3NfeSA6IE1hdGgucmFuZG9tKCkgKiBpLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KSksIG8gPT0gZSAtIDEgJiYgKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSB8fCBuLnBhcnRpY2xlc0RyYXcoKSwgci5wdXNoaW5nID0gITEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicmVtb3ZlUGFydGljbGVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmxpYnJhcnkubWFuYWdlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5LnNwbGljZSgwLCBlKSwgdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuZW5hYmxlIHx8IHQucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYnViYmxlUGFydGljbGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsIGEgPSB0aGlzLmxpYnJhcnkudG1wO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgcy5pc0luQXJyYXkoXCJidWJibGVcIiwgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlLnggLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LCByID0gZS55IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSwgbiA9IE1hdGguc3FydChpICogaSArIHIgKiByKSwgbyA9IDEgLSBuIC8gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsIGMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9wYWNpdHlfYnViYmxlID0gZS5vcGFjaXR5LCBlLnJhZGl1c19idWJibGUgPSBlLnJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA8PSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvID49IDAgJiYgXCJtb3VzZW1vdmVcIiA9PSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSAhPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBlLnJhZGl1cyArIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgKiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA+PSAwICYmIChlLnJhZGl1c19idWJibGUgPSBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZS5yYWRpdXMgLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLCBwID0gZS5yYWRpdXMgLSB1ICogbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPiAwID8gZS5yYWRpdXNfYnViYmxlID0gcCA6IGUucmFkaXVzX2J1YmJsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgIT0gdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ID4gdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAqIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID4gZS5vcGFjaXR5ICYmIGggPD0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAmJiAoZS5vcGFjaXR5X2J1YmJsZSA9IGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBlLm9wYWNpdHkgLSAodGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkudmFsdWUgLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KSAqIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtIDwgZS5vcGFjaXR5ICYmIG0gPj0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAmJiAoZS5vcGFjaXR5X2J1YmJsZSA9IG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW91c2VsZWF2ZVwiID09IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuc3RhdHVzICYmIGMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBzLmlzSW5BcnJheShcImJ1YmJsZVwiLCB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpICYmIGEuYnViYmxlX2NsaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGUueCAtIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsIGQgPSBlLnkgLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195LCB5ID0gTWF0aC5zcXJ0KHYgKiB2ICsgZCAqIGQpLCBiID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lKSAvIDFlMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiAmJiAoYS5idWJibGVfZHVyYXRpb25fZW5kID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPiAyICogdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24gJiYgKGEuYnViYmxlX2NsaWNraW5nID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5idWJibGVfZHVyYXRpb25fZW5kID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBmdW5jdGlvbihpLCByLCBzLCBuLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT0gcikgaWYgKGEuYnViYmxlX2R1cmF0aW9uX2VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9IHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbiAtIGIgKiAobiAtIGkpIC8gdC5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24sIGwgPSBpIC0gYywgdSA9IGkgKyBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCIgPT0gbyAmJiAoZS5yYWRpdXNfYnViYmxlID0gdSksIFwib3BhY2l0eVwiID09IG8gJiYgKGUub3BhY2l0eV9idWJibGUgPSB1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA8PSB0LnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAgPSB2b2lkIDAgIT0gcyA/IHMgOiBuLCBwICE9IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gbiAtIGIgKiAobiAtIGkpIC8gdC5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVcIiA9PSBvICYmIChlLnJhZGl1c19idWJibGUgPSBoKSwgXCJvcGFjaXR5XCIgPT0gbyAmJiAoZS5vcGFjaXR5X2J1YmJsZSA9IGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIFwic2l6ZVwiID09IG8gJiYgKGUucmFkaXVzX2J1YmJsZSA9IHZvaWQgMCksIFwib3BhY2l0eVwiID09IG8gJiYgKGUub3BhY2l0eV9idWJibGUgPSB2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYnViYmxlX2NsaWNraW5nICYmIChmKHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLnZhbHVlLCBlLnJhZGl1c19idWJibGUsIGUucmFkaXVzLCBcInNpemVcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5LCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgZS5vcGFjaXR5X2J1YmJsZSwgZS5vcGFjaXR5LCBcIm9wYWNpdHlcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJyZXB1bHNlUGFydGljbGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsIGEgPSB0aGlzLmxpYnJhcnksIGkgPSBhLmNhbnZhcywgciA9IGEudG1wO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgcy5pc0luQXJyYXkoXCJyZXB1bHNlXCIsIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgJiYgXCJtb3VzZW1vdmVcIiA9PSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlLnggLSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LCBvID0gZS55IC0gdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSwgYyA9IE1hdGguc3FydChuICogbiArIG8gKiBvKSwgbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBuIC8gYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBvIC8gY1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdSA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSwgcCA9IDEwMCwgaCA9IHMuY2xhbXAoMSAvIHUgKiAoLTEgKiBNYXRoLnBvdyhjIC8gdSwgMikgKyAxKSAqIHUgKiBwLCAwLCA1MCksIG0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogZS54ICsgbC54ICogaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBlLnkgKyBsLnkgKiBoXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3VuY2VcIiA9PSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA/IChtLnggLSBlLnJhZGl1cyA+IDAgJiYgbS54ICsgZS5yYWRpdXMgPCBpLndpZHRoICYmIChlLnggPSBtLngpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG0ueSAtIGUucmFkaXVzID4gMCAmJiBtLnkgKyBlLnJhZGl1cyA8IGkuaGVpZ2h0ICYmIChlLnkgPSBtLnkpKSA6IChlLnggPSBtLngsIGUueSA9IG0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgcy5pc0luQXJyYXkoXCJyZXB1bHNlXCIsIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpIGlmIChyLnJlcHVsc2VfZmluaXNoIHx8IChyLnJlcHVsc2VfY291bnQrKywgXG4gICAgICAgICAgICAgICAgICAgIHIucmVwdWxzZV9jb3VudCA9PSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoICYmIChyLnJlcHVsc2VfZmluaXNoID0gITApKSwgXG4gICAgICAgICAgICAgICAgICAgIHIucmVwdWxzZV9jbGlja2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBNYXRoLnBvdyh0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UgLyA2LCAzKSwgZCA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBlLngsIHkgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gZS55LCBiID0gZCAqIGQgKyB5ICogeSwgZiA9IC12IC8gYiAqIDEsIF8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IE1hdGguYXRhbjIoeSwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudnggPSBmICogTWF0aC5jb3MoYSksIGUudnkgPSBmICogTWF0aC5zaW4oYSksIFwiYm91bmNlXCIgPT0gdC5wYXJhbXMucGFydGljbGVzLm1vdmUub3V0X21vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBlLnggKyBlLnZ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogZS55ICsgZS52eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnggKyBlLnJhZGl1cyA+IGkud2lkdGggPyBlLnZ4ID0gLWUudnggOiByLnggLSBlLnJhZGl1cyA8IDAgJiYgKGUudnggPSAtZS52eCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnkgKyBlLnJhZGl1cyA+IGkuaGVpZ2h0ID8gZS52eSA9IC1lLnZ5IDogci55IC0gZS5yYWRpdXMgPCAwICYmIChlLnZ5ID0gLWUudnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBiIDw9IHYgJiYgXygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgMCA9PSByLnJlcHVsc2VfY2xpY2tpbmcgJiYgKGUudnggPSBlLnZ4X2ksIGUudnkgPSBlLnZ5X2kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ3JhYlBhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmxpYnJhcnkuY2FudmFzLCBhID0gdGhpcy5wYXJhbXMsIGkgPSBhLmludGVyYWN0aXZpdHksIHIgPSBhLnBhcnRpY2xlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIFwibW91c2Vtb3ZlXCIgPT0gaS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gZS54IC0gaS5tb3VzZS5wb3NfeCwgbiA9IGUueSAtIGkubW91c2UucG9zX3ksIG8gPSBNYXRoLnNxcnQocyAqIHMgKyBuICogbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobyA8PSBpLm1vZGVzLmdyYWIuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGkubW9kZXMuZ3JhYiwgbCA9IGMubGluZV9saW5rZWQub3BhY2l0eSAtIG8gLyAoMSAvIGMubGluZV9saW5rZWQub3BhY2l0eSkgLyBjLmRpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IHIubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmUsIHAgPSB1LnIsIGggPSB1LmcsIG0gPSB1LmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKCBcIiArIHAgKyBcIiwgXCIgKyBoICsgXCIsIFwiICsgbSArIFwiLCBcIiArIGwgKyBcIiApXCIsIHQuY3R4LmxpbmVXaWR0aCA9IHIubGluZV9saW5rZWQud2lkdGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmN0eC5iZWdpblBhdGgoKSwgdC5jdHgubW92ZVRvKGUueCwgZS55KSwgdC5jdHgubGluZVRvKGkubW91c2UucG9zX3gsIGkubW91c2UucG9zX3kpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jdHguc3Ryb2tlKCksIHQuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIGU7XG4gICAgICAgIH0oKTtcbiAgICAgICAgdC5kZWZhdWx0ID0gbjtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICB9LCBzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbiA9IGEoMSksIG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgYSwgciwgcywgbikge1xuICAgICAgICAgICAgICAgIGkodGhpcywgZSksIHRoaXMucGFyYW1zID0gdCwgdGhpcy5saWJyYXJ5ID0gYSwgdGhpcy5zZXR1cFNpemUoKSwgdGhpcy5zZXR1cFBvc2l0aW9uKG4pLCBcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwQ29sb3IociksIHRoaXMuc2V0dXBPcGFjaXR5KCksIHRoaXMuc2V0dXBBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzKGUsIFsge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXR1cFNpemVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFkaXVzID0gKHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUgJiYgKHRoaXMuc2l6ZV9zdGF0dXMgPSAhMSwgdGhpcy52cyA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgLyAxMDAsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnN5bmMgfHwgKHRoaXMudnMgPSB0aGlzLnZzICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0dXBQb3NpdGlvblwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5saWJyYXJ5LCBhID0gdC5jYW52YXMsIGkgPSB0LnZlbmRvcnM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IGUgPyBlLnggOiBNYXRoLnJhbmRvbSgpICogYS53aWR0aCwgdGhpcy55ID0gZSA/IGUueSA6IE1hdGgucmFuZG9tKCkgKiBhLmhlaWdodCwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA+IGEud2lkdGggLSAyICogdGhpcy5yYWRpdXMgPyB0aGlzLnggPSB0aGlzLnggLSB0aGlzLnJhZGl1cyA6IHRoaXMueCA8IDIgKiB0aGlzLnJhZGl1cyAmJiAodGhpcy54ID0gdGhpcy54ICsgdGhpcy5yYWRpdXMpLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID4gYS5oZWlnaHQgLSAyICogdGhpcy5yYWRpdXMgPyB0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLnJhZGl1cyA6IHRoaXMueSA8IDIgKiB0aGlzLnJhZGl1cyAmJiAodGhpcy55ID0gdGhpcy55ICsgdGhpcy5yYWRpdXMpLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuYm91bmNlICYmIGkuY2hlY2tPdmVybGFwKHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0dXBDb2xvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBuLmdldENvbG9yKGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0dXBPcGFjaXR5XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAodGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSAmJiAodGhpcy5vcGFjaXR5X3N0YXR1cyA9ICExLCB0aGlzLnZvID0gdGhpcy5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zcGVlZCAvIDEwMCwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3luYyB8fCAodGhpcy52byA9IHRoaXMudm8gKiBNYXRoLnJhbmRvbSgpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXR1cEFuaW1hdGlvblwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLnRtcCwgYSA9IGUudmVuZG9ycywgaSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidG9wLXJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0uNVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1yaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAuNVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b20tbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRvcC1sZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IC0uNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtLjVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5zdHJhaWdodCA/ICh0aGlzLnZ4ID0gaS54LCB0aGlzLnZ5ID0gaS55LCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5yYW5kb20gJiYgKHRoaXMudnggPSB0aGlzLnZ4ICogTWF0aC5yYW5kb20oKSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSB0aGlzLnZ5ICogTWF0aC5yYW5kb20oKSkpIDogKHRoaXMudnggPSBpLnggKyBNYXRoLnJhbmRvbSgpIC0gLjUsIHRoaXMudnkgPSBpLnkgKyBNYXRoLnJhbmRvbSgpIC0gLjUpLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eF9pID0gdGhpcy52eCwgdGhpcy52eV9pID0gdGhpcy52eTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHMgPyBcInVuZGVmaW5lZFwiIDogcihzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXBlID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc2hhcGUgPSBzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJpbWFnZVwiID09IHRoaXMuc2hhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBvLmltYWdlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogby5pbWFnZS53aWR0aCAvIG8uaW1hZ2UuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmltZy5yYXRpbyB8fCAodGhpcy5pbWcucmF0aW8gPSAxKSwgXCJzdmdcIiA9PSB0LmltZ190eXBlICYmIHZvaWQgMCAhPSB0LnNvdXJjZV9zdmcgJiYgKGEuY3JlYXRlU3ZnSW1nKHRoaXMpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHVzaGluZyAmJiAodGhpcy5pbWcubG9hZGVkID0gITEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZHJhd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsIGEgPSB0aGlzLmxpYnJhcnksIGkgPSBhLmNhbnZhcywgciA9IGEudG1wLCBzID0gYS52ZW5kb3JzLCBuID0gKHRoaXMucGFyYW1zLnBhcnRpY2xlcywgXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgIG4gPSB2b2lkIDAgIT0gdGhpcy5yYWRpdXNfYnViYmxlID8gdGhpcy5yYWRpdXNfYnViYmxlIDogdGhpcy5yYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBvID0gdm9pZCAwICE9IHRoaXMub3BhY2l0eV9idWJibGUgPyB0aGlzLm9wYWNpdHlfYnViYmxlIDogdGhpcy5vcGFjaXR5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3IucmdiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHRoaXMuY29sb3IucmdiLCB1ID0gbC5yLCBwID0gbC5nLCBoID0gbC5iO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IFwicmdiYSggXCIgKyB1ICsgXCIsIFwiICsgcCArIFwiLCBcIiArIGggKyBcIiwgXCIgKyBvICsgXCIgKVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSB0aGlzLmNvbG9yLmhzbCwgdiA9IG0uaCwgZCA9IG0ucywgeSA9IG0ubDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBcImhzbGEoIFwiICsgdiArIFwiLCBcIiArIGQgKyBcIiwgXCIgKyB5ICsgXCIsIFwiICsgbyArIFwiIClcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkuY3R4LmZpbGxTdHlsZSA9IGMsIGkuY3R4LmJlZ2luUGF0aCgpLCB0aGlzLnNoYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaS5jdHguYXJjKHRoaXMueCwgdGhpcy55LCBuLCAwLCAyICogTWF0aC5QSSwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZWRnZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaS5jdHgucmVjdCh0aGlzLnggLSBuLCB0aGlzLnkgLSBuLCAyICogbiwgMiAqIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJpYW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZHJhd1NoYXBlKGkuY3R4LCB0aGlzLnggLSBuLCB0aGlzLnkgKyBuIC8gMS42NiwgMiAqIG4sIDMsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicG9seWdvblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcy5kcmF3U2hhcGUoaS5jdHgsIHRoaXMueCAtIG4gLyAodGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyAzLjUpLCB0aGlzLnkgLSBuIC8gLjc2LCAyLjY2ICogbiAvICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcyAvIDMpLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmRyYXdTaGFwZShpLmN0eCwgdGhpcy54IC0gMiAqIG4gLyAodGhpcy5wYXJhbXMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyA0KSwgdGhpcy55IC0gbiAvIDEuNTIsIDIgKiBuICogMi42NiAvICh0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcyAvIDMpLCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jdHguZHJhd0ltYWdlKGUsIHQueCAtIG4sIHQueSAtIG4sIDIgKiBuLCAyICogbiAvIHQuaW1nLnJhdGlvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiID0gXCJzdmdcIiA9PSByLmltZ190eXBlID8gdGhpcy5pbWcub2JqIDogci5pbWdfb2JqLCBiICYmIGUoYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaS5jdHguY2xvc2VQYXRoKCksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGggPiAwICYmIChpLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3IsIFxuICAgICAgICAgICAgICAgICAgICBpLmN0eC5saW5lV2lkdGggPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoLCBpLmN0eC5zdHJva2UoKSksIGkuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pLCBlO1xuICAgICAgICB9KCk7XG4gICAgICAgIHQuZGVmYXVsdCA9IG87XG4gICAgfSwgZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbYV07XG4gICAgICAgICAgICAgICAgICAgIGkuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0LCBhLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgZSh0LnByb3RvdHlwZSwgYSksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzID0gYSgxKSwgbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZSh0LCBhLCByLCBzLCBuKSB7XG4gICAgICAgICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5wYXJhbXMgPSB0LCB0aGlzLmludGVyYWN0ID0gYSwgdGhpcy5tb2RlcyA9IHIsIHRoaXMudmVuZG9ycyA9IHMsIFxuICAgICAgICAgICAgICAgIHRoaXMubGlicmFyeSA9IG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcihlLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicGFydGljbGVzQ3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gdGhpcy5wYXJhbXMucGFydGljbGVzLCB0ID0gZS5jb2xvciwgYSA9IGUub3BhY2l0eSwgaSA9IDA7IGkgPCB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlOyBpKyspIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBzLlBhcnRpY2xlKHRoaXMucGFyYW1zLCB0aGlzLmxpYnJhcnksIHQsIGEudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBhcnRpY2xlc1VwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLCB0ID0gdGhpcy5saWJyYXJ5LCBhID0gdC5jYW52YXMsIGkgPSB0LmludGVyYWN0LCByID0gdC5tb2RlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLmFycmF5LmZvckVhY2goZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5wYXJhbXMucGFydGljbGVzLm1vdmUuc3BlZWQgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQueCArPSB0LnZ4ICogbywgdC55ICs9IHQudnkgKiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUgJiYgKDEgPT0gdC5vcGFjaXR5X3N0YXR1cyA/ICh0Lm9wYWNpdHkgPj0gZS5wYXJhbXMucGFydGljbGVzLm9wYWNpdHkudmFsdWUgJiYgKHQub3BhY2l0eV9zdGF0dXMgPSAhMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5vcGFjaXR5ICs9IHQudm8pIDogKHQub3BhY2l0eSA8PSBlLnBhcmFtcy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLm9wYWNpdHlfbWluICYmICh0Lm9wYWNpdHlfc3RhdHVzID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQub3BhY2l0eSAtPSB0LnZvKSwgdC5vcGFjaXR5IDwgMCAmJiAodC5vcGFjaXR5ID0gMCkpLCBlLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSAmJiAoMSA9PSB0LnNpemVfc3RhdHVzID8gKHQucmFkaXVzID49IGUucGFyYW1zLnBhcnRpY2xlcy5zaXplLnZhbHVlICYmICh0LnNpemVfc3RhdHVzID0gITEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucmFkaXVzICs9IHQudnMpIDogKHQucmFkaXVzIDw9IGUucGFyYW1zLnBhcnRpY2xlcy5zaXplLmFuaW0uc2l6ZV9taW4gJiYgKHQuc2l6ZV9zdGF0dXMgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5yYWRpdXMgLT0gdC52cyksIHQucmFkaXVzIDwgMCAmJiAodC5yYWRpdXMgPSAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYyA9IFwiYm91bmNlXCIgPT0gZS5wYXJhbXMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeF9sZWZ0OiB0LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4X3JpZ2h0OiBhLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlfdG9wOiB0LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5X2JvdHRvbTogYS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeF9sZWZ0OiAtdC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeF9yaWdodDogYS53aWR0aCArIHQucmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlfdG9wOiAtdC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeV9ib3R0b206IGEuaGVpZ2h0ICsgdC5yYWRpdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHQueCAtIHQucmFkaXVzID4gYS53aWR0aCA/ICh0LnggPSBjLnhfbGVmdCwgdC55ID0gTWF0aC5yYW5kb20oKSAqIGEuaGVpZ2h0KSA6IHQueCArIHQucmFkaXVzIDwgMCAmJiAodC54ID0gYy54X3JpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQueSA9IE1hdGgucmFuZG9tKCkgKiBhLmhlaWdodCksIHQueSAtIHQucmFkaXVzID4gYS5oZWlnaHQgPyAodC55ID0gYy55X3RvcCwgdC54ID0gTWF0aC5yYW5kb20oKSAqIGEud2lkdGgpIDogdC55ICsgdC5yYWRpdXMgPCAwICYmICh0LnkgPSBjLnlfYm90dG9tLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQueCA9IE1hdGgucmFuZG9tKCkgKiBhLndpZHRoKSwgZS5wYXJhbXMucGFydGljbGVzLm1vdmUub3V0X21vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvdW5jZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQueCArIHQucmFkaXVzID4gYS53aWR0aCA/IHQudnggPSAtdC52eCA6IHQueCAtIHQucmFkaXVzIDwgMCAmJiAodC52eCA9IC10LnZ4KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC55ICsgdC5yYWRpdXMgPiBhLmhlaWdodCA/IHQudnkgPSAtdC52eSA6IHQueSAtIHQucmFkaXVzIDwgMCAmJiAodC52eSA9IC10LnZ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmlzSW5BcnJheShcImdyYWJcIiwgZS5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiByLmdyYWJQYXJ0aWNsZSh0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAocy5pc0luQXJyYXkoXCJidWJibGVcIiwgZS5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBzLmlzSW5BcnJheShcImJ1YmJsZVwiLCBlLnBhcmFtcy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSAmJiByLmJ1YmJsZVBhcnRpY2xlKHQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChzLmlzSW5BcnJheShcInJlcHVsc2VcIiwgZS5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBzLmlzSW5BcnJheShcInJlcHVsc2VcIiwgZS5wYXJhbXMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkgJiYgci5yZXB1bHNlUGFydGljbGUodCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSB8fCBlLnBhcmFtcy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSkgZm9yICh2YXIgbCA9IG4gKyAxOyBsIDwgZS5wYXJhbXMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBlLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXlbbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSAmJiBpLmxpbmtQYXJ0aWNsZXModCwgdSksIGUucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlICYmIGkuYXR0cmFjdFBhcnRpY2xlcyh0LCB1KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wYXJhbXMucGFydGljbGVzLm1vdmUuYm91bmNlICYmIGkuYm91bmNlUGFydGljbGVzKHQsIHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBhcnRpY2xlc0RyYXdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS5jYW52YXMsIGEgPSBlLm1hbmFnZXI7XG4gICAgICAgICAgICAgICAgICAgIHQuY3R4LmNsZWFyUmVjdCgwLCAwLCB0LndpZHRoLCB0LmhlaWdodCksIGEucGFydGljbGVzVXBkYXRlKCksIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBhcnRpY2xlc0VtcHR5XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuYXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBhcnRpY2xlc1JlZnJlc2hcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS50bXA7XG4gICAgICAgICAgICAgICAgICAgIGUudmVuZG9ycztcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5jaGVja0FuaW1GcmFtZSksIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuZHJhd0FuaW1GcmFtZSksIHQuc291cmNlX3N2ZyA9IHZvaWQgMCwgXG4gICAgICAgICAgICAgICAgICAgIHQuaW1nX29iaiA9IHZvaWQgMCwgdC5jb3VudF9zdmcgPSAwLCB0aGlzLnBhcnRpY2xlc0VtcHR5KCksIHRoaXMubGlicmFyeS5jYW52YXNDbGVhcigpLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWJyYXJ5LnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdKSwgZTtcbiAgICAgICAgfSgpO1xuICAgICAgICB0LmRlZmF1bHQgPSBuO1xuICAgIH0sIGZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0W2FdO1xuICAgICAgICAgICAgICAgICAgICBpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGUodC5wcm90b3R5cGUsIGEpLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcyA9IGEoMSksIG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCkge1xuICAgICAgICAgICAgICAgIGkodGhpcywgZSksIHRoaXMudG1wID0ge30sIHRoaXMudG1wID0ge30sIHRoaXMubG9hZFBhcmFtZXRlcnModCksIHRoaXMuZXh0ZW5kUGFyYW1zKCksIFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3QgPSBuZXcgcy5JbnRlcmFjdCh0aGlzLnBhcmFtcywgdGhpcyksIHRoaXMubW9kZXMgPSBuZXcgcy5Nb2Rlcyh0aGlzLnBhcmFtcywgdGhpcyksIFxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9ycyA9IG5ldyBzLlZlbmRvcnModGhpcy5wYXJhbXMsIHRoaXMpLCB0aGlzLm1hbmFnZXIgPSBuZXcgcy5QYXJ0aWNsZU1hbmFnZXIodGhpcy5wYXJhbXMsIHRoaXMuaW50ZXJhY3QsIHRoaXMubW9kZXMsIHRoaXMudmVuZG9ycywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcihlLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibG9hZFBhcmFtZXRlcnNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHMuZ2V0RGVmYXVsdFBhcmFtcygpLCBhID0gcy5kZWVwRXh0ZW5kKHQsIGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyA9IGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJsb2FkQ2FudmFzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGUub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnZlbmRvcnM7XG4gICAgICAgICAgICAgICAgICAgIGUuZXZlbnRzTGlzdGVuZXJzKCksIGUuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy50bXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWNoTGlzdGVuZXJzKCksIHRoaXMudmVuZG9ycy5kZXRhY2hMaXN0ZW5lcnMoKSwgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZS5kcmF3QW5pbUZyYW1lKSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzQ2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRldGFjaExpc3RlbmVyc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJleHRlbmRQYXJhbXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZW5kVG1wRGVmaW5pdGlvbigpLCB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXh0ZW5kVG1wRGVmaW5pdGlvblwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnRtcDtcbiAgICAgICAgICAgICAgICAgICAgZS5vYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplX3ZhbHVlOiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVfYW5pbV9zcGVlZDogdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVfc3BlZWQ6IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZV9saW5rZWRfZGlzdGFuY2U6IHRoaXMucGFyYW1zLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkX3dpZHRoOiB0aGlzLnBhcmFtcy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlX2dyYWJfZGlzdGFuY2U6IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVfYnViYmxlX2Rpc3RhbmNlOiB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVfYnViYmxlX3NpemU6IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlX3JlcHVsc2VfZGlzdGFuY2U6IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicmV0aW5hSW5pdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcywgdCA9IHRoaXMudG1wO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5yZXRpbmFfZGV0ZWN0ICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSA/IChlLnB4cmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHQucmV0aW5hID0gITAsIGUud2lkdGggPSBlLmVsZW1lbnQub2Zmc2V0V2lkdGggKiBlLnB4cmF0aW8sIGUuaGVpZ2h0ID0gZS5lbGVtZW50Lm9mZnNldEhlaWdodCAqIGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5zaXplLnZhbHVlID0gdC5vYmouc2l6ZV92YWx1ZSAqIGUucHhyYXRpbywgdGhpcy5wYXJhbXMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCA9IHQub2JqLnNpemVfYW5pbV9zcGVlZCAqIGUucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLnBhcnRpY2xlcy5tb3ZlLnNwZWVkID0gdC5vYmoubW92ZV9zcGVlZCAqIGUucHhyYXRpbywgdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlID0gdC5vYmoubGluZV9saW5rZWRfZGlzdGFuY2UgKiBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UgPSB0Lm9iai5tb2RlX2dyYWJfZGlzdGFuY2UgKiBlLnB4cmF0aW8sIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSA9IHQub2JqLm1vZGVfYnViYmxlX2Rpc3RhbmNlICogZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoID0gdC5vYmoubGluZV9saW5rZWRfd2lkdGggKiBlLnB4cmF0aW8sIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPSB0Lm9iai5tb2RlX2J1YmJsZV9zaXplICogZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlID0gdC5vYmoubW9kZV9yZXB1bHNlX2Rpc3RhbmNlICogZS5weHJhdGlvKSA6IChlLnB4cmF0aW8gPSAxLCBcbiAgICAgICAgICAgICAgICAgICAgdC5yZXRpbmEgPSAhMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjYW52YXNJbml0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgICBlLmN0eCA9IGUuZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjYW52YXNTaXplXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgICBlLmVsZW1lbnQud2lkdGggPSBlLndpZHRoLCBlLmVsZW1lbnQuaGVpZ2h0ID0gZS5oZWlnaHQsIHRoaXMucGFyYW1zICYmIHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHkuZXZlbnRzLnJlc2l6ZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNhbnZhc1BhaW50XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgICBlLmN0eC5maWxsUmVjdCgwLCAwLCBlLndpZHRoLCBlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjYW52YXNDbGVhclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgICAgICAgICAgICAgZS5jdHguY2xlYXJSZWN0KDAsIDAsIGUud2lkdGgsIGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm9uV2luZG93UmVzaXplXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuY2FudmFzLCB0ID0gdGhpcy5tYW5hZ2VyLCBhID0gdGhpcy50bXAsIGkgPSB0aGlzLnZlbmRvcnM7XG4gICAgICAgICAgICAgICAgICAgIGUud2lkdGggPSBlLmVsZW1lbnQub2Zmc2V0V2lkdGgsIGUuaGVpZ2h0ID0gZS5lbGVtZW50Lm9mZnNldEhlaWdodCwgYS5yZXRpbmEgJiYgKGUud2lkdGggKj0gZS5weHJhdGlvLCBcbiAgICAgICAgICAgICAgICAgICAgZS5oZWlnaHQgKj0gZS5weHJhdGlvKSwgZS5lbGVtZW50LndpZHRoID0gZS53aWR0aCwgZS5lbGVtZW50LmhlaWdodCA9IGUuaGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMucGFydGljbGVzLm1vdmUuZW5hYmxlIHx8ICh0LnBhcnRpY2xlc0VtcHR5KCksIHQucGFydGljbGVzQ3JlYXRlKCksIHQucGFydGljbGVzRHJhdygpLCBcbiAgICAgICAgICAgICAgICAgICAgaS5kZW5zaXR5QXV0b1BhcnRpY2xlcygpKSwgaS5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIGU7XG4gICAgICAgIH0oKTtcbiAgICAgICAgdC5kZWZhdWx0ID0gbjtcbiAgICB9LCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgYSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgdC5oZXhUb1JnYiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgICAgICAgICAgIGUgPSBlLnJlcGxhY2UodCwgZnVuY3Rpb24oZSwgdCwgYSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ICsgdCArIGEgKyBhICsgaSArIGk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBhID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGUpO1xuICAgICAgICAgICAgcmV0dXJuIGEgPyB7XG4gICAgICAgICAgICAgICAgcjogcGFyc2VJbnQoYVsxXSwgMTYpLFxuICAgICAgICAgICAgICAgIGc6IHBhcnNlSW50KGFbMl0sIDE2KSxcbiAgICAgICAgICAgICAgICBiOiBwYXJzZUludChhWzNdLCAxNilcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICB9LCB0LmNsYW1wID0gZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGUsIHQpLCBhKTtcbiAgICAgICAgfSwgdC5pc0luQXJyYXkgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC5pbmRleE9mKGUpID4gLTE7XG4gICAgICAgIH0sIHQuZGVlcEV4dGVuZCA9IGZ1bmN0aW9uKGUsIGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gYSkgYVtpXSAmJiBhW2ldLmNvbnN0cnVjdG9yICYmIGFbaV0uY29uc3RydWN0b3IgPT09IE9iamVjdCA/IChlW2ldID0gZVtpXSB8fCB7fSwgXG4gICAgICAgICAgICB0LmRlZXBFeHRlbmQoZVtpXSwgYVtpXSkpIDogZVtpXSA9IGFbaV07XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfSwgdC5nZXRDb2xvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBpID0ge307XG4gICAgICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgZSA/IFwidW5kZWZpbmVkXCIgOiBhKGUpKSkgaWYgKGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciByID0gZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGkucmdiID0gdC5oZXhUb1JnYihyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBlLnIsIG4gPSBlLmcsIG8gPSBlLmI7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gcyAmJiB2b2lkIDAgIT09IG4gJiYgdm9pZCAwICE9PSBvKSBpLnJnYiA9IHtcbiAgICAgICAgICAgICAgICAgICAgcjogcyxcbiAgICAgICAgICAgICAgICAgICAgZzogbixcbiAgICAgICAgICAgICAgICAgICAgYjogb1xuICAgICAgICAgICAgICAgIH07IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGUuaCwgbCA9IGUucywgdSA9IGUubDtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBjICYmIHZvaWQgMCAhPT0gbiAmJiB2b2lkIDAgIT09IG8gJiYgKGkuaHNsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaDogYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHM6IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsOiB1XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBcInJhbmRvbVwiID09IGUgPyBpLnJnYiA9IHtcbiAgICAgICAgICAgICAgICByOiBNYXRoLmZsb29yKDI1NSAqIE1hdGgucmFuZG9tKCkpICsgMSxcbiAgICAgICAgICAgICAgICBnOiBNYXRoLmZsb29yKDI1NSAqIE1hdGgucmFuZG9tKCkpICsgMSxcbiAgICAgICAgICAgICAgICBiOiBNYXRoLmZsb29yKDI1NSAqIE1hdGgucmFuZG9tKCkpICsgMVxuICAgICAgICAgICAgfSA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgJiYgKGkucmdiID0gdC5oZXhUb1JnYihlKSk7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfTtcbiAgICB9LCBmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdFthXTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQsIGEsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBlKHQucHJvdG90eXBlLCBhKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHMgPSBhKDEpLCBuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKHQsIGEpIHtcbiAgICAgICAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLnBhcmFtcyA9IHQsIHRoaXMubGlicmFyeSA9IGEsIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyksIFxuICAgICAgICAgICAgICAgIHRoaXMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKSwgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcihlLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXZlbnRzTGlzdGVuZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMucGFyYW1zLmludGVyYWN0aXZpdHksIHQgPSB0aGlzLmxpYnJhcnkuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgICBcIndpbmRvd1wiID09IGUuZGV0ZWN0X29uID8gZS5lbCA9IHdpbmRvdyA6IGUuZWwgPSB0LmVsZW1lbnQsIChlLmV2ZW50cy5vbmhvdmVyLmVuYWJsZSB8fCBlLmV2ZW50cy5vbmNsaWNrLmVuYWJsZSkgJiYgKGUuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKSwgXG4gICAgICAgICAgICAgICAgICAgIGUuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbk1vdXNlTGVhdmUpKSwgZS5ldmVudHMub25jbGljay5lbmFibGUgJiYgZS5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRldGFjaExpc3RlbmVyc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LCB0ID0gdGhpcy5saWJyYXJ5LnRtcDtcbiAgICAgICAgICAgICAgICAgICAgZS5lbCAmJiAoKGUuZXZlbnRzLm9uaG92ZXIuZW5hYmxlIHx8IGUuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSAmJiAoZS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpLCBcbiAgICAgICAgICAgICAgICAgICAgZS5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uTW91c2VMZWF2ZSkpLCBlLmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBlLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2spKSwgXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0LmRyYXdBbmltRnJhbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwib25Nb3VzZU1vdmVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubGlicmFyeSwgYSA9IHQuY2FudmFzLCBpID0gdC50bXAsIHIgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5LCBzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBzID0gci5lbCA9PSB3aW5kb3cgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlLmNsaWVudFlcbiAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUub2Zmc2V0WCB8fCBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlLm9mZnNldFkgfHwgZS5jbGllbnRZXG4gICAgICAgICAgICAgICAgICAgIH0sIHIubW91c2UucG9zX3ggPSBzLngsIHIubW91c2UucG9zX3kgPSBzLnksIGkucmV0aW5hICYmIChyLm1vdXNlLnBvc194ICo9IGEucHhyYXRpbywgXG4gICAgICAgICAgICAgICAgICAgIHIubW91c2UucG9zX3kgKj0gYS5weHJhdGlvKSwgci5zdGF0dXMgPSBcIm1vdXNlbW92ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwib25Nb3VzZUxlYXZlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnBhcmFtcy5pbnRlcmFjdGl2aXR5O1xuICAgICAgICAgICAgICAgICAgICB0Lm1vdXNlLnBvc194ID0gbnVsbCwgdC5tb3VzZS5wb3NfeSA9IG51bGwsIHQuc3RhdHVzID0gXCJtb3VzZWxlYXZlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUubW9kZXMsIGEgPSBlLnRtcCwgaSA9IHRoaXMucGFyYW1zLCByID0gaS5pbnRlcmFjdGl2aXR5LCBzID0gaS5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLm1vdXNlLmNsaWNrX3Bvc194ID0gci5tb3VzZS5wb3NfeCwgci5tb3VzZS5jbGlja19wb3NfeSA9IHIubW91c2UucG9zX3ksIHIubW91c2UuY2xpY2tfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgci5ldmVudHMub25jbGljay5lbmFibGUpIHN3aXRjaCAoci5ldmVudHMub25jbGljay5tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInB1c2hcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubW92ZS5lbmFibGUgPyB0LnB1c2hQYXJ0aWNsZXMoci5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgci5tb3VzZSkgOiAxID09IHIubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPyB0LnB1c2hQYXJ0aWNsZXMoci5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgci5tb3VzZSkgOiByLm1vZGVzLnB1c2gucGFydGljbGVzX25iID4gMSAmJiB0LnB1c2hQYXJ0aWNsZXMoci5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZW1vdmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucmVtb3ZlUGFydGljbGVzKHIubW9kZXMucmVtb3ZlLnBhcnRpY2xlc19uYik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJidWJibGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYnViYmxlX2NsaWNraW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXB1bHNlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhLnJlcHVsc2VfY2xpY2tpbmcgPSAhMCwgYS5yZXB1bHNlX2NvdW50ID0gMCwgYS5yZXB1bHNlX2ZpbmlzaCA9ICExLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucmVwdWxzZV9jbGlja2luZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMWUzICogci5tb2Rlcy5yZXB1bHNlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVuc2l0eUF1dG9QYXJ0aWNsZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS5jYW52YXMsIGEgPSBlLm1vZGVzLCBpID0gZS50bXAsIHIgPSB0aGlzLnBhcmFtcy5wYXJ0aWNsZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLm51bWJlci5kZW5zaXR5LmVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0LmVsZW1lbnQud2lkdGggKiB0LmVsZW1lbnQuaGVpZ2h0IC8gMWUzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5yZXRpbmEgJiYgKHMgPSBzIC8gdC5weHJhdGlvICogMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHMgKiByLm51bWJlci52YWx1ZSAvIHIubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYSwgbyA9IHIuYXJyYXkubGVuZ3RoIC0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPCAwID8gYS5wdXNoUGFydGljbGVzKE1hdGguYWJzKG8pKSA6IGEucmVtb3ZlUGFydGljbGVzKG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjaGVja092ZXJsYXBcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMubGlicmFyeSwgaSA9IGEuY2FudmFzLCByID0gYS52ZW5kb3JzLCBzID0gdGhpcy5wYXJhbXMucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBzLmFycmF5LmZvckVhY2goZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhLCBuID0gZS54IC0gcy54LCBvID0gZS55IC0gcy55LCBjID0gTWF0aC5zcXJ0KG4gKiBuICsgbyAqIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA8PSBlLnJhZGl1cyArIHMucmFkaXVzICYmIChlLnggPSB0ID8gdC54IDogTWF0aC5yYW5kb20oKSAqIGkud2lkdGgsIGUueSA9IHQgPyB0LnkgOiBNYXRoLnJhbmRvbSgpICogaS5oZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgci5jaGVja092ZXJsYXAoZSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNyZWF0ZVN2Z0ltZ1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5saWJyYXJ5LnRtcCwgYSA9IHQuc291cmNlX3N2ZywgaSA9IC8jKFswLTlBLUZdezMsNn0pL2dpLCByID0gYS5yZXBsYWNlKGksIGZ1bmN0aW9uKHQsIGEsIGksIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29sb3IucmdiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlLmNvbG9yLnJnYiwgbyA9IG4uciwgYyA9IG4uZywgbCA9IG4uYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gXCJyZ2JhKCBcIiArIG8gKyBcIiwgXCIgKyBjICsgXCIsIFwiICsgbCArIFwiLCBcIiArIGUub3BhY2l0eSArIFwiIClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBlLmNvbG9yLmhzbCwgcCA9IHUuaCwgaCA9IHUucywgbSA9IHUubDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gXCJyZ2JhKCBcIiArIHAgKyBcIiwgXCIgKyBoICsgXCIsIFwiICsgbSArIFwiLCBcIiArIGUub3BhY2l0eSArIFwiIClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgICAgICAgICB9KSwgcyA9IG5ldyBCbG9iKFsgciBdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOFwiXG4gICAgICAgICAgICAgICAgICAgIH0pLCBuID0gd2luZG93LlVSTCB8fCB3aW5kb3csIG8gPSBuLmNyZWF0ZU9iamVjdFVSTChzKSwgYyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBjLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbWcub2JqID0gYywgZS5pbWcubG9hZGVkID0gITAsIG4ucmV2b2tlT2JqZWN0VVJMKG8pLCB0LmNvdW50X3N2ZysrO1xuICAgICAgICAgICAgICAgICAgICB9KSwgYy5zcmMgPSBvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnksIHQgPSBlLmNhbnZhcywgYSA9IGUudG1wO1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhLmRyYXdBbmltRnJhbWUpLCB0LmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkcmF3U2hhcGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCwgYSwgaSwgciwgcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHIgKiBzLCBvID0gciAvIHMsIGMgPSAxODAgKiAobyAtIDIpIC8gbywgbCA9IE1hdGguUEkgLSBNYXRoLlBJICogYyAvIDE4MDtcbiAgICAgICAgICAgICAgICAgICAgZS5zYXZlKCksIGUuYmVnaW5QYXRoKCksIGUudHJhbnNsYXRlKHQsIGEpLCBlLm1vdmVUbygwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdSA9IDA7IHUgPCBuOyB1KyspIGUubGluZVRvKGksIDApLCBlLnRyYW5zbGF0ZShpLCAwKSwgZS5yb3RhdGUobCk7XG4gICAgICAgICAgICAgICAgICAgIGUuZmlsbCgpLCBlLnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImV4cG9ydEltZ1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxpYnJhcnkuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihlLmVsZW1lbnQudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCBcIl9ibGFua1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxvYWRJbWdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubGlicmFyeSwgYSA9IHQudG1wLCBpID0gdC52ZW5kb3JzLCByID0gdGhpcy5wYXJhbXMucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5pbWdfZXJyb3IgPSB2b2lkIDAsIFwiXCIgIT0gci5zaGFwZS5pbWFnZS5zcmMpIGlmIChcInN2Z1wiID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm9wZW4oXCJHRVRcIiwgci5zaGFwZS5pbWFnZS5zcmMpLCBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0ID09IHMucmVhZHlTdGF0ZSAmJiAoMjAwID09IHMuc3RhdHVzID8gKGEuc291cmNlX3N2ZyA9IGUuY3VycmVudFRhcmdldC5yZXNwb25zZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jaGVja0JlZm9yZURyYXcoKSkgOiAoY29uc29sZS5sb2coXCJFcnJvciByZWFjdC1wYXJ0aWNsZXMtanMgLSBpbWFnZSBub3QgZm91bmRcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuaW1nX2Vycm9yID0gITApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHMuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5pbWdfb2JqID0gbiwgaS5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBuLnNyYyA9IHIuc2hhcGUuaW1hZ2Uuc3JjO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgY29uc29sZS5sb2coXCJFcnJvciByZWFjdC1wYXJ0aWNsZXMtanMgLSBubyBpbWFnZS5zcmNcIiksIGEuaW1nX2Vycm9yID0gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkcmF3XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUudG1wLCBhID0gZS5tYW5hZ2VyLCBpID0gZS52ZW5kb3JzLCByID0gdGhpcy5wYXJhbXMucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBcImltYWdlXCIgPT0gci5zaGFwZS50eXBlID8gXCJzdmdcIiA9PSB0LmltZ190eXBlID8gdC5jb3VudF9zdmcgPj0gci5udW1iZXIudmFsdWUgPyAoYS5wYXJ0aWNsZXNEcmF3KCksIFxuICAgICAgICAgICAgICAgICAgICByLm1vdmUuZW5hYmxlID8gdC5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGkuZHJhdy5iaW5kKGkpKSA6IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuZHJhd0FuaW1GcmFtZSkpIDogdC5pbWdfZXJyb3IgfHwgKHQuZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpLmRyYXcuYmluZChpKSkpIDogdm9pZCAwICE9IHQuaW1nX29iaiA/IChhLnBhcnRpY2xlc0RyYXcoKSwgXG4gICAgICAgICAgICAgICAgICAgIHIubW92ZS5lbmFibGUgPyB0LmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaS5kcmF3LmJpbmQoaSkpIDogY2FuY2VsQW5pbWF0aW9uRnJhbWUodC5kcmF3QW5pbUZyYW1lKSkgOiB0LmltZ19lcnJvciB8fCAodC5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGkuZHJhdy5iaW5kKGkpKSkgOiAoYS5wYXJ0aWNsZXNEcmF3KCksIFxuICAgICAgICAgICAgICAgICAgICByLm1vdmUuZW5hYmxlID8gdC5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGkuZHJhdy5iaW5kKGkpKSA6IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHQuZHJhd0FuaW1GcmFtZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2hlY2tCZWZvcmVEcmF3XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUudG1wLCBhID0gZS52ZW5kb3JzLCBpID0gdGhpcy5wYXJhbXMucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJpbWFnZVwiID09IGkuc2hhcGUudHlwZSkgaWYgKFwic3ZnXCIgPT0gdC5pbWdfdHlwZSAmJiB2b2lkIDAgPT0gdC5zb3VyY2Vfc3ZnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuY2hlY2tBbmltRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjYW5jZWxBbmltYXRpb25GcmFtZSh0LmNoZWNrQW5pbUZyYW1lKSwgdC5pbWdfZXJyb3IgfHwgKGEuaW5pdCgpLCBhLmRyYXcoKSk7IGVsc2UgYS5pbml0KCksIFxuICAgICAgICAgICAgICAgICAgICBhLmRyYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImluaXRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5saWJyYXJ5LCB0ID0gZS5tYW5hZ2VyLCBhID0gZS52ZW5kb3JzLCBpID0gdGhpcy5wYXJhbXMucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBlLnJldGluYUluaXQoKSwgZS5jYW52YXNJbml0KCksIGUuY2FudmFzU2l6ZSgpLCB0LnBhcnRpY2xlc0NyZWF0ZSgpLCBhLmRlbnNpdHlBdXRvUGFydGljbGVzKCksIFxuICAgICAgICAgICAgICAgICAgICBpLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lID0gcy5oZXhUb1JnYihpLmxpbmVfbGlua2VkLmNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubGlicmFyeSwgdCA9IGUudG1wLCBhID0gZS52ZW5kb3JzLCBpID0gdGhpcy5wYXJhbXMucGFydGljbGVzO1xuICAgICAgICAgICAgICAgICAgICBzLmlzSW5BcnJheShcImltYWdlXCIsIGkuc2hhcGUudHlwZSkgPyAodC5pbWdfdHlwZSA9IGkuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihpLnNoYXBlLmltYWdlLnNyYy5sZW5ndGggLSAzKSwgXG4gICAgICAgICAgICAgICAgICAgIGEubG9hZEltZyh0LmltZ190eXBlKSkgOiBhLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXSksIGU7XG4gICAgICAgIH0oKTtcbiAgICAgICAgdC5kZWZhdWx0ID0gbjtcbiAgICB9LCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KSwgdC5nZXREZWZhdWx0UGFyYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDEyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIiNGRkZcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYl9zaWRlczogNVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlfbWluOiAuMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW5jOiAhMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZV9taW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3luYzogITFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjYsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1cjogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJsaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhaWdodDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRfbW9kZTogXCJib3VuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5jZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyYWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYOiAzZTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWTogM2UzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFycmF5OiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgICAgICAgICAgICAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25ob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJncmFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcInJlcHVsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogITBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAuNFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VzZToge31cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJldGluYV9kZXRlY3Q6ICEwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH0gXSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcGFydGljbGVzLWpzL2xpYi9wYXJ0aWNsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2xpbmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZXh0L2xpbmtcIlxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJlZm9yZXRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWZ0ZXJ0ZXh0OiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtb3Zpbmd0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3R5bGU6ICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN0YXRlID0geyBtb3VzZVBvczogeyB4OiAwLCB5OiAwIH0gfVxuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdXNlUG9zOiB7XG4gICAgICAgIHg6IGUucGFnZVggLSAod2luZG93LmlubmVyV2lkdGggLyAyKSxcbiAgICAgICAgeTogZS5wYWdlWSAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBiZWZvcmV0ZXh0LCBhZnRlcnRleHQsIG1vdmluZ3RleHQsIHN0eWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgb2Zmc2V0ID0ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy54IC8gdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24udHJhbnNmb3JtX21vdXNlX3Bvc194fXB4LFxuICAgICAgICAke3RoaXMuc3RhdGUubW91c2VQb3MueSAvIHRoaXMucHJvcHMuc3R5bGUuYW5pbWF0aW9uLnRyYW5zZm9ybV9tb3VzZV9wb3NfeX1weCwgMCApYCxcbiAgICAgIHRleHRTaGFkb3c6IGAkey0gdGhpcy5zdGF0ZS5tb3VzZVBvcy54IC8gdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24uc2hhZG93X21vdXNlX3Bvc194fXB4XG4gICAgICAgICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy55IC8gdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24uc2hhZG93X21vdXNlX3Bvc195fXB4XG4gICAgICAgICR7dGhpcy5wcm9wcy5zdHlsZS5tb3Zpbmd0aXRsZWJhY2tncm91bmR9YFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmFja2dyb3VuZH1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykgfSA+XG4gICAgICAgIDxoMSBzdHlsZT17e3doaXRlU3BhY2U6ICdub3dyYXAnfX0gY2xhc3NOYW1lPXtzdHlsZS5maXhlZHRpdGxlfT5cbiAgICAgICAgICB7YmVmb3JldGV4dH1cblxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ319XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5tb3Zpbmd0aXRsZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17b2Zmc2V0fT5cbiAgICAgICAgICAgIHttb3Zpbmd0ZXh0fVxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIHthZnRlcnRleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTW92aW5nVGV4dC5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgbGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5jb25zdCByZW5kZXJMaW5rcyA9IChsaW5rcywgc3R5bGUpID0+IHtcbiAgcmV0dXJuIGxpbmtzLm1hcCggKGxpbmssIGkpID0+IHtcbiAgICByZXR1cm4gbGluay50eXBlID09PSAnZW1haWwnXG4gICAgICA/IDxhIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPXsgbGluay51cmwgfT57IGxpbmsubmFtZSB9PC9hPlxuICAgICAgOiA8TGluayBrZXk9e2l9IGhyZWY9eyBsaW5rLnVybCB9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+eyBsaW5rLm5hbWUgfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICB9KVxufVxuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGUuY29tcG9uZW50fT5cbiAgICB7cmVuZGVyTGlua3MocHJvcHMubGlua3MsIHByb3BzLnN0eWxlKX1cbiAgPC9kaXY+XG5cbk1lbnUucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBNZW51XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL01lbnUuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVHlwaXN0IGZyb20gJ3JlYWN0LXR5cGlzdCdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBzdHlsZTogICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufVxuXG5jb25zdCBUZXh0VHlwZWQgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPFR5cGlzdFxuICAgICAgYXZnVHlwaW5nU3BlZWQ9ezEwfVxuICAgICAgc3RkVHlwaW5nRGVsYXk9ezMwfVxuICAgICAgc3RhcnREZWxheT17MTAwMH1cbiAgICAgIGN1cnNvcj17eyBoaWRlV2hlbkRvbmU6IHRydWUgfX0gPlxuXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9UeXBpc3Q+XG4gIDwvZGl2PlxuXG5UZXh0VHlwZWQucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBUZXh0VHlwZWRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVGV4dFR5cGVkLmpzIiwiY29uc3Qgc29jaWFscyA9IFtcbiAge1xuICAgIFwibmFtZVwiOiBcIkxpbmtlZEluXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ3VpbGxhdW1la29sbHkvXCIsXG4gICAgXCJ0eXBlXCI6IFwidXJsXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkdpdGh1YlwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2d1aWxsYXVtZWtvXCIsXG4gICAgXCJ0eXBlXCI6IFwidXJsXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcImd1aWxsYXVtZS5rb2xseVthdF1nbWFpbC5jb21cIixcbiAgICBcInVybFwiOiBcIm1haWx0bzpndWlsbGF1bWUua29sbHlAZ21haWwuY29tXCIsXG4gICAgXCJ0eXBlXCI6IFwiZW1haWxcIlxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBzb2NpYWxzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGF0YS9zb2NpYWxzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNb3ZpbmdUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aW5nVGV4dCdcbmltcG9ydCBUZXh0VHlwZWQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0VHlwZWQnXG5cbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHNvY2lhbHM6IHNvY2lhbHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxuICAgICAgICA8SGVhZEJsb2NcbiAgICAgICAgICB0aXRsZT1cIkd1aWxsYXVtZSBLb2xseVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJHdWlsbGF1bWUgS29sbHkgfCBGdWxsIHN0YWNrIGRldmVsb3BlciBsaXZpbmcgaW4gTHlvbi5cIlxuICAgICAgICAvPlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgc3R5bGU9e2JhY2tncm91bmR9Lz5cbiAgICAgICAgPE1lbnUgbGlua3M9e3NvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gICAgICAgIDxNb3ZpbmdUZXh0XG4gICAgICAgICAgYmVmb3JldGV4dD1cIkhpLCBJJ20gXCJcbiAgICAgICAgICBtb3Zpbmd0ZXh0PVwiR3VpbGxhdW1lIEtvbGx5XCJcbiAgICAgICAgICBhZnRlcnRleHQ9XCIuXCJcbiAgICAgICAgICBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgPFRleHRUeXBlZCBzdHlsZT17dGV4dHR5cGVkfT5cbiAgICAgICAgICBJ4oCZbSBhIDxzdHJvbmc+RnVsbCBTdGFjayBEZXZlbG9wZXI8L3N0cm9uZz4gYm9ybiAmIHJhaXNlZFxuICAgICAgICAgIGluIHRoZSBGcmVuY2ggQWxwcywgYnV0IEnigJltIGN1cnJlbnRseSBsaXZpbmcgaW4gTHlvbiAtIEZyYW5jZS5cbiAgICAgICAgICBJ4oCZbSBmbHVlbnQgaW4gTm9kZSAvIE1ldGVvciAvIEpTIC8gUmVhY3QsIGJ1dCBJ4oCZbSByZWNlbnRseVxuICAgICAgICAgIHN0YXJ0ZWQgZXhwZXJpbWVudGluZyB3aXRoIEdyYXBoUUwsIFJlZHV4IGFuZCBXZWJwYWNrLiBJIGFsc29cbiAgICAgICAgICBoYXZlIHNraWxscyB3aXRoIFBob3Rvc2hvcCAvIElsbHVzdHJhdG9yLiBEbyBub3QgaGV6aXRhdGVcbiAgICAgICAgICB0byA8TGluayBocmVmPVwiI1wiPjxhIGNsYXNzTmFtZT0nYSc+Y29udGFjdCBtZTwvYT48L0xpbms+LiA8YnIvPlxuICAgICAgICAgIFBTOiBUaGlzIHdlYnNpdGUgaXMgbWFkZSB3aXRoIE5leHRKUyAvIFJlYWN0SlMgLyBHbGFtb3IuXG4gICAgICAgIDwvVGV4dFR5cGVkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHRleHR0eXBlZCA9IGNzcyh7XG4gIHdpZHRoOiAnNzAycHgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICBmb250U2l6ZTogJzE4cHgnLFxuICBsaW5lSGVpZ2h0OiAnMS43JyxcbiAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gIHRleHRKdXN0aWZ5OiAnaW50ZXItd29yZCcsXG4gIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgM2VtKSdcbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gNTBweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICc1MHB4J1xuICB9KSxcbiAgZml4ZWR0aXRsZTogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnNGVtJyxcbiAgICByaWdodDogJzEwJScsXG4gICAgdG9wOiAnMzAlJ1xuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogJyMyYjJiMmInXG4gIH0pLFxuICBtb3Zpbmd0aXRsZWJhY2tncm91bmQ6ICdyZ2JhKDk5LCAyMzEsIDE3NSwgMC44KScsXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy03MCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnODAnLFxuICB9XG59XG5cbmNvbnN0IHNvY2lhbCA9IHtcbiAgY29tcG9uZW50OiBzdHlsZSh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnMTVweCAyMHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSknLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgfSksXG4gIGxpbms6IHN0eWxlKHtcbiAgICBtYXJnaW46ICcwIDEwcHggMCAwJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJ1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgYmFja2dyb3VuZCA9IGNzcyh7XG4gIHpJbmRleDogJy0xJyxcbn0pXG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7XG4gIGhlaWdodDogJzEwMHZoJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuXHR2YXIgX0N1cnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIF9DdXJzb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3Vyc29yKTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHR2YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5cdGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5cdHZhciBUeXBpc3QgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHQgIF9pbmhlcml0cyhUeXBpc3QsIF9Db21wb25lbnQpO1xuXG5cdCAgZnVuY3Rpb24gVHlwaXN0KHByb3BzKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHlwaXN0KTtcblxuXHQgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFR5cGlzdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFR5cGlzdCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHQgICAgX3RoaXMuc3RhdGUgPSB7XG5cdCAgICAgIHRleHQ6IFtdLFxuXHQgICAgICBpc0RvbmU6IGZhbHNlXG5cdCAgICB9O1xuXG5cdCAgICBfdGhpcy5vblR5cGluZ0RvbmUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGlmICghX3RoaXMubW91bnRlZCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzRG9uZTogdHJ1ZSB9KTtcblx0ICAgICAgX3RoaXMucHJvcHMub25UeXBpbmdEb25lKCk7XG5cdCAgICB9O1xuXG5cdCAgICBfdGhpcy5kZWxheUdlbmVyYXRvciA9IGZ1bmN0aW9uIChsaW5lLCBsaW5lSWR4LCBjaGFyYWN0ZXIsIGNoYXJJZHgpIHtcblx0ICAgICAgdmFyIG1lYW4gPSBfdGhpcy5wcm9wcy5hdmdUeXBpbmdEZWxheTtcblx0ICAgICAgdmFyIHN0ZCA9IF90aGlzLnByb3BzLnN0ZFR5cGluZ0RlbGF5O1xuXHQgICAgICByZXR1cm4gX3RoaXMucHJvcHMuZGVsYXlHZW5lcmF0b3IobWVhbiwgc3RkLCB7XG5cdCAgICAgICAgbGluZTogbGluZSxcblx0ICAgICAgICBsaW5lSWR4OiBsaW5lSWR4LFxuXHQgICAgICAgIGNoYXJhY3RlcjogY2hhcmFjdGVyLFxuXHQgICAgICAgIGNoYXJJZHg6IGNoYXJJZHgsXG5cdCAgICAgICAgZGVmRGVsYXlHZW5lcmF0b3I6IGZ1bmN0aW9uIGRlZkRlbGF5R2VuZXJhdG9yKCkge1xuXHQgICAgICAgICAgdmFyIG1uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBtZWFuO1xuXHQgICAgICAgICAgdmFyIHN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBzdGQ7XG5cdCAgICAgICAgICByZXR1cm4gdXRpbHMuZ2F1c3NpYW5SbmQobW4sIHN0KTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgfTtcblxuXHQgICAgX3RoaXMubW91bnRlZCA9IGZhbHNlO1xuXHQgICAgX3RoaXMubGluZXNUb1R5cGUgPSBbXTtcblxuXHQgICAgaWYgKHByb3BzLmNoaWxkcmVuKSB7XG5cdCAgICAgIF90aGlzLmxpbmVzVG9UeXBlID0gdXRpbHMuZXh0cmFjdFRleHQocHJvcHMuY2hpbGRyZW4pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIF90aGlzO1xuXHQgIH1cblxuXHQgIF9jcmVhdGVDbGFzcyhUeXBpc3QsIFt7XG5cdCAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdCAgICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG5cdCAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuXHQgICAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG5cdCAgICAgIHZhciBzdGFydERlbGF5ID0gX3Byb3BzLnN0YXJ0RGVsYXk7XG5cblx0ICAgICAgaWYgKGNoaWxkcmVuKSB7XG5cdCAgICAgICAgaWYgKHN0YXJ0RGVsYXkgPiAwICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMudHlwZUFsbExpbmVzLmJpbmQodGhpcyksIHN0YXJ0RGVsYXkpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB0aGlzLnR5cGVBbGxMaW5lcygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLm9uVHlwaW5nRG9uZSgpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcblx0ICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbmV4dFN0YXRlLnRleHQubGVuZ3RoOyBpZHgrKykge1xuXHQgICAgICAgIHZhciB0eHQgPSB0aGlzLnN0YXRlLnRleHRbaWR4XTtcblx0ICAgICAgICB2YXIgbnR4dCA9IG5leHRTdGF0ZS50ZXh0W2lkeF07XG5cdCAgICAgICAgaWYgKHR4dCAhPT0gbnR4dCAmJiBudHh0Lmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB0aGlzLnN0YXRlLmlzRG9uZSAhPT0gbmV4dFN0YXRlLmlzRG9uZTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdCAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ3R5cGVBbGxMaW5lcycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZUFsbExpbmVzKCkge1xuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuXHQgICAgICB2YXIgbGluZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMubGluZXNUb1R5cGU7XG5cblx0ICAgICAgcmV0dXJuIHV0aWxzLmVhY2hQcm9taXNlKGxpbmVzLCBmdW5jdGlvbiAobGluZSwgaWR4KSB7XG5cdCAgICAgICAgaWYgKCFfdGhpczIubW91bnRlZCkge1xuXHQgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0ICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHRleHQ6IF90aGlzMi5zdGF0ZS50ZXh0LmNvbmNhdChbJyddKSB9LCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi50eXBlTGluZShsaW5lLCBpZHgpLnRoZW4ocmVzb2x2ZSk7XG5cdCAgICAgICAgICB9KTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIF90aGlzMi5vblR5cGluZ0RvbmUoKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAndHlwZUxpbmUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGVMaW5lKGxpbmUsIGxpbmVJZHgpIHtcblx0ICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cblx0ICAgICAgcmV0dXJuIHV0aWxzLmVhY2hQcm9taXNlKGxpbmUsIGZ1bmN0aW9uIChjaGFyYWN0ZXIsIGNoYXJJZHgpIHtcblx0ICAgICAgICBpZiAoIV90aGlzMy5tb3VudGVkKSB7XG5cdCAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHQgICAgICAgICAgdmFyIHRleHQgPSBfdGhpczMuc3RhdGUudGV4dC5zbGljZSgpO1xuXHQgICAgICAgICAgdGV4dFtsaW5lSWR4XSArPSBjaGFyYWN0ZXI7XG5cdCAgICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyB0ZXh0OiB0ZXh0IH0sIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGRlbGF5ID0gX3RoaXMzLmRlbGF5R2VuZXJhdG9yKGxpbmUsIGxpbmVJZHgsIGNoYXJhY3RlciwgY2hhcklkeCk7XG5cdCAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpO1xuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG5cdCAgICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZTtcblx0ICAgICAgdmFyIGN1cnNvciA9IF9wcm9wczIuY3Vyc29yO1xuXHQgICAgICB2YXIgaXNEb25lID0gdGhpcy5zdGF0ZS5pc0RvbmU7XG5cblx0ICAgICAgdmFyIGlubmVyVHJlZSA9IHV0aWxzLmV4dHJhY3RUcmVlV2l0aFRleHQodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5zdGF0ZS50ZXh0KTtcblxuXHQgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgJ2RpdicsXG5cdCAgICAgICAgeyBjbGFzc05hbWU6ICdUeXBpc3QgJyArIGNsYXNzTmFtZSB9LFxuXHQgICAgICAgIGlubmVyVHJlZSxcblx0ICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ3Vyc29yMi5kZWZhdWx0LCBfZXh0ZW5kcyh7IGlzRG9uZTogaXNEb25lIH0sIGN1cnNvcikpXG5cdCAgICAgICk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXG5cdCAgcmV0dXJuIFR5cGlzdDtcblx0fShfcmVhY3QuQ29tcG9uZW50KTtcblxuXHRUeXBpc3QucHJvcFR5cGVzID0ge1xuXHQgIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG5cdCAgY2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0ICBhdmdUeXBpbmdEZWxheTogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cdCAgc3RkVHlwaW5nRGVsYXk6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXHQgIHN0YXJ0RGVsYXk6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXHQgIGN1cnNvcjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdCAgb25UeXBpbmdEb25lOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG5cdCAgZGVsYXlHZW5lcmF0b3I6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuY1xuXHR9O1xuXHRUeXBpc3QuZGVmYXVsdFByb3BzID0ge1xuXHQgIGNsYXNzTmFtZTogJycsXG5cdCAgYXZnVHlwaW5nRGVsYXk6IDcwLFxuXHQgIHN0ZFR5cGluZ0RlbGF5OiAyNSxcblx0ICBzdGFydERlbGF5OiAwLFxuXHQgIGN1cnNvcjoge30sXG5cdCAgb25UeXBpbmdEb25lOiBmdW5jdGlvbiBvblR5cGluZ0RvbmUoKSB7fSxcblx0ICBkZWxheUdlbmVyYXRvcjogdXRpbHMuZ2F1c3NpYW5SbmRcblx0fTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gVHlwaXN0O1xuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHRmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuXHRmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuXHR2YXIgQ3Vyc29yID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0ICBfaW5oZXJpdHMoQ3Vyc29yLCBfQ29tcG9uZW50KTtcblxuXHQgIGZ1bmN0aW9uIEN1cnNvcigpIHtcblx0ICAgIHZhciBfcmVmO1xuXG5cdCAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3Vyc29yKTtcblxuXHQgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IEN1cnNvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEN1cnNvcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuXHQgICAgICBzaG91bGRSZW5kZXI6IF90aGlzLnByb3BzLnNob3dcblx0ICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuXHQgIH1cblxuXHQgIF9jcmVhdGVDbGFzcyhDdXJzb3IsIFt7XG5cdCAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuXHQgICAgICB2YXIgc2hvdWxkSGlkZSA9ICF0aGlzLnByb3BzLmlzRG9uZSAmJiBuZXh0UHJvcHMuaXNEb25lICYmIHRoaXMucHJvcHMuaGlkZVdoZW5Eb25lO1xuXHQgICAgICBpZiAoc2hvdWxkSGlkZSkge1xuXHQgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRTdGF0ZSh7IHNob3VsZFJlbmRlcjogZmFsc2UgfSk7XG5cdCAgICAgICAgfSwgdGhpcy5wcm9wcy5oaWRlV2hlbkRvbmVEZWxheSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvdWxkUmVuZGVyKSB7XG5cdCAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuYmxpbmsgPyAnIEN1cnNvci0tYmxpbmtpbmcnIDogJyc7XG5cdCAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgJ3NwYW4nLFxuXHQgICAgICAgICAgeyBjbGFzc05hbWU6ICdDdXJzb3InICsgY2xhc3NOYW1lIH0sXG5cdCAgICAgICAgICB0aGlzLnByb3BzLmVsZW1lbnRcblx0ICAgICAgICApO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgIH1dKTtcblxuXHQgIHJldHVybiBDdXJzb3I7XG5cdH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblx0Q3Vyc29yLnByb3BUeXBlcyA9IHtcblx0ICBibGluazogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuXHQgIHNob3c6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblx0ICBlbGVtZW50OiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG5cdCAgaGlkZVdoZW5Eb25lOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cdCAgaGlkZVdoZW5Eb25lRGVsYXk6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXHQgIGlzRG9uZTogX3JlYWN0LlByb3BUeXBlcy5ib29sXG5cdH07XG5cdEN1cnNvci5kZWZhdWx0UHJvcHMgPSB7XG5cdCAgYmxpbms6IHRydWUsXG5cdCAgc2hvdzogdHJ1ZSxcblx0ICBlbGVtZW50OiAnfCcsXG5cdCAgaGlkZVdoZW5Eb25lOiBmYWxzZSxcblx0ICBoaWRlV2hlbkRvbmVEZWxheTogMTAwMCxcblx0ICBpc0RvbmU6IGZhbHNlXG5cdH07XG5cdGV4cG9ydHMuZGVmYXVsdCA9IEN1cnNvcjtcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuc2xlZXAgPSB1bmRlZmluZWQ7XG5cblx0dmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG5cdGV4cG9ydHMuZ2F1c3NpYW5SbmQgPSBnYXVzc2lhblJuZDtcblx0ZXhwb3J0cy5lYWNoUHJvbWlzZSA9IGVhY2hQcm9taXNlO1xuXHRleHBvcnRzLmV4Y2x1ZGUgPSBleGNsdWRlO1xuXHRleHBvcnRzLmV4dHJhY3RUZXh0ID0gZXh0cmFjdFRleHQ7XG5cdGV4cG9ydHMuZWxlbWVudEZhY3RvcnlNYWtlciA9IGVsZW1lbnRGYWN0b3J5TWFrZXI7XG5cdGV4cG9ydHMuZXh0cmFjdFRyZWVXaXRoVGV4dCA9IGV4dHJhY3RUcmVlV2l0aFRleHQ7XG5cblx0dmFyIF9yZWFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0dmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHRmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuXHR2YXIgc2xlZXAgPSBleHBvcnRzLnNsZWVwID0gZnVuY3Rpb24gc2xlZXAodmFsKSB7XG5cdCAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdCAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB2YWwpO1xuXHQgIH0pO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGdhdXNzaWFuUm5kKG1lYW4sIHN0ZCkge1xuXHQgIHZhciB0aW1lcyA9IDEyO1xuXHQgIHZhciBzdW0gPSAwO1xuXHQgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHRpbWVzOyBpZHgrKykge1xuXHQgICAgc3VtICs9IE1hdGgucmFuZG9tKCk7XG5cdCAgfVxuXHQgIHN1bSAtPSB0aW1lcyAvIDI7XG5cdCAgcmV0dXJuIE1hdGgucm91bmQoc3VtICogc3RkKSArIG1lYW47XG5cdH1cblxuXHRmdW5jdGlvbiBlYWNoUHJvbWlzZShhcnIsIGl0ZXJhdG9yKSB7XG5cdCAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cblx0ICByZXR1cm4gQXJyYXkuZnJvbShhcnIpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCwgaWR4KSB7XG5cdCAgICByZXR1cm4gcHJldi50aGVuKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjdXJyZW50KS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcblx0ICAgICAgICByZXR1cm4gaXRlcmF0b3IodmFsLCBpZHgsIGxlbmd0aCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfSk7XG5cdCAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXhjbHVkZShvYmosIGtleXMpIHtcblx0ICB2YXIgcmVzID0ge307XG5cdCAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXHQgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuXHQgICAgICByZXNba2V5XSA9IG9ialtrZXldO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gcmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0cmFjdFRleHQodG9UeXBlKSB7XG5cdCAgdmFyIHN0ID0gdG9UeXBlID8gW3RvVHlwZV0gOiBbXTtcblx0ICB2YXIgbGluZXMgPSBbXTtcblxuXHQgIHdoaWxlIChzdC5sZW5ndGggPiAwKSB7XG5cdCAgICB2YXIgY3VyID0gc3QucG9wKCk7XG5cblx0ICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoY3VyKSkge1xuXHQgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjdXIucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuXHQgICAgICAgIHN0LnB1c2goY2hpbGQpO1xuXHQgICAgICB9KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cikpIHtcblx0ICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGN1cltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgdmFyIGVsID0gX3N0ZXAudmFsdWU7XG5cblx0ICAgICAgICAgICAgc3QucHVzaChlbCk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGxpbmVzLnVuc2hpZnQoY3VyKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gbGluZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBlbGVtZW50RmFjdG9yeU1ha2VyKCkge1xuXHQgIHZhciBrZXkgPSAwO1xuXHQgIHJldHVybiBmdW5jdGlvbiAoZWwpIHtcblx0ICAgIHZhciB0YWcgPSBlbC50eXBlO1xuXHQgICAgdmFyIHByb3BzID0gZXhjbHVkZShlbC5wcm9wcywgWydjaGlsZHJlbiddKTtcblx0ICAgIHByb3BzLmtleSA9ICdUeXBpc3QtZWwtJyArIGtleSsrO1xuXHQgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdGFnLCBwcm9wcyk7XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dHJhY3RUcmVlV2l0aFRleHQoKSB7XG5cdCAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgfVxuXG5cdCAgaWYgKCFhcmdzWzBdKSByZXR1cm4gdm9pZCAwO1xuXHQgIHZhciBmYWN0TWFrZXIgPSBlbGVtZW50RmFjdG9yeU1ha2VyKCk7XG5cblx0ICB2YXIgaW5uZXIgPSBmdW5jdGlvbiBpbm5lcih0cmVlLCB0ZXh0LCB0ZXh0SWR4KSB7XG5cdCAgICBpZiAodGV4dElkeCA+PSB0ZXh0Lmxlbmd0aCkgcmV0dXJuIFtudWxsLCB0ZXh0SWR4XTtcblx0ICAgIHZhciBpZHggPSB0ZXh0SWR4O1xuXHQgICAgdmFyIHJlY3Vyc2UgPSBmdW5jdGlvbiByZWN1cnNlKGNoKSB7XG5cdCAgICAgIHZhciBfaW5uZXIgPSBpbm5lcihjaCwgdGV4dCwgaWR4KTtcblxuXHQgICAgICB2YXIgX2lubmVyMiA9IF9zbGljZWRUb0FycmF5KF9pbm5lciwgMik7XG5cblx0ICAgICAgdmFyIGNoaWxkID0gX2lubmVyMlswXTtcblx0ICAgICAgdmFyIGFkdklkeCA9IF9pbm5lcjJbMV07XG5cblx0ICAgICAgaWR4ID0gYWR2SWR4O1xuXHQgICAgICByZXR1cm4gY2hpbGQ7XG5cdCAgICB9O1xuXG5cdCAgICAvLyBSZWN1cnNpdmVseSBjYWxsIG9uIGNoaWxkcmVuIG9mIFJlYWN0IEVsZW1lbnRcblx0ICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQodHJlZSkpIHtcblx0ICAgICAgdmFyIGZhY3QgPSBmYWN0TWFrZXIodHJlZSk7XG5cdCAgICAgIHZhciBjaGlsZHJlbiA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAodHJlZS5wcm9wcy5jaGlsZHJlbiwgcmVjdXJzZSkgfHwgW107XG5cdCAgICAgIHJldHVybiBbZmFjdC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShjaGlsZHJlbikpLCBpZHhdO1xuXHQgICAgfVxuXG5cdCAgICAvLyBSZWN1cnNpdmVseSBjYWxsIG9uIGFycmF5XG5cdCAgICBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuXHQgICAgICB2YXIgX2NoaWxkcmVuID0gdHJlZS5tYXAocmVjdXJzZSk7XG5cdCAgICAgIHJldHVybiBbX2NoaWxkcmVuLCBpZHhdO1xuXHQgICAgfVxuXG5cdCAgICAvLyBSZXR1cm4gdGV4dFxuXHQgICAgcmV0dXJuIFt0ZXh0W2lkeF0sIGlkeCArIDFdO1xuXHQgIH07XG5cdCAgcmV0dXJuIGlubmVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncy5jb25jYXQoWzBdKSlbMF07XG5cdH1cblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXR5cGlzdC9kaXN0L1R5cGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=