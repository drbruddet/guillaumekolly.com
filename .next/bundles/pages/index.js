module.exports =
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	module.exports = __webpack_require__(144);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
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
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(40)
	  , ITERATOR  = __webpack_require__(2)('iterator')
	  , Iterators = __webpack_require__(9);
	module.exports = __webpack_require__(1).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 25 */,
/* 26 */
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
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(33);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	__webpack_require__(60);
	module.exports = __webpack_require__(1).Array.from;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	__webpack_require__(25);
	module.exports = __webpack_require__(59);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	module.exports = __webpack_require__(1).Object.keys;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(27)
	  , TAG = __webpack_require__(2)('toStringTag')
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(4)
	  , createDesc      = __webpack_require__(14);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(9)
	  , ITERATOR   = __webpack_require__(2)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(3);
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(2)('iterator')
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
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(3)
	  , get      = __webpack_require__(24);
	module.exports = __webpack_require__(1).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(28)
	  , $export        = __webpack_require__(5)
	  , toObject       = __webpack_require__(15)
	  , call           = __webpack_require__(45)
	  , isArrayIter    = __webpack_require__(44)
	  , toLength       = __webpack_require__(55)
	  , createProperty = __webpack_require__(41)
	  , getIterFn      = __webpack_require__(24);
	
	$export($export.S + $export.F * !__webpack_require__(46)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(15)
	  , $keys    = __webpack_require__(13);
	
	__webpack_require__(50)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  XmlEntities: __webpack_require__(65),
	  Html4Entities: __webpack_require__(64),
	  Html5Entities: __webpack_require__(26),
	  AllHtmlEntities: __webpack_require__(26)
	};


/***/ },
/* 64 */
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
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(36);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _keys = __webpack_require__(35);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(34);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _clientOverlayFalseReloadTrue = __webpack_require__(72);
	
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
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(67);
	exports.encode = exports.stringify = __webpack_require__(68);


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(32)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 71 */
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
	
	var ansiHTML = __webpack_require__(31);
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
	
	var Entities = __webpack_require__(63).AllHtmlEntities;
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
/* 72 */
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
	  var querystring = __webpack_require__(69);
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
	  var strip = __webpack_require__(70);
	
	  var overlay;
	  if (typeof document !== 'undefined' && options.overlay) {
	    overlay = __webpack_require__(71);
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
	
	var processUpdate = __webpack_require__(73);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, "?overlay=false&reload=true", __webpack_require__(74)(module)))

/***/ },
/* 73 */
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
/* 74 */
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
/* 75 */
/***/ function(module, exports) {

	module.exports = require("next/head");

/***/ },
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
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
	
	var emptyFunction = __webpack_require__(126);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processStyleName = undefined;
	exports.createMarkupForStyles = createMarkupForStyles;
	
	var _camelizeStyleName = __webpack_require__(125);
	
	var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);
	
	var _dangerousStyleValue = __webpack_require__(131);
	
	var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);
	
	var _hyphenateStyleName = __webpack_require__(128);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _memoizeStringOnly = __webpack_require__(129);
	
	var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);
	
	var _warning = __webpack_require__(86);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
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
/* 124 */
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
/* 125 */
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
	
	var camelize = __webpack_require__(124);
	
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
/* 126 */
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
/* 127 */
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
/* 128 */
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
	
	var hyphenate = __webpack_require__(127);
	
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
/* 129 */
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
/* 130 */
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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _CSSProperty = __webpack_require__(130);
	
	var _CSSProperty2 = _interopRequireDefault(_CSSProperty);
	
	var _warning = __webpack_require__(86);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 132 */
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
/* 133 */
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
/* 134 */
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
	
	var _sheet = __webpack_require__(137);
	
	var _CSSPropertyOperations = __webpack_require__(87);
	
	var _clean = __webpack_require__(132);
	
	var _clean2 = _interopRequireDefault(_clean);
	
	var _plugins = __webpack_require__(136);
	
	var _hash = __webpack_require__(133);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 135 */
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
/* 136 */
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
	
	var _CSSPropertyOperations = __webpack_require__(87);
	
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
	
	var prefixAll = __webpack_require__(135);
	
	function prefixes(_ref) {
	  var style = _ref.style,
	      rest = _objectWithoutProperties(_ref, ['style']);
	
	  return _extends({ style: prefixAll(style) }, rest);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 137 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(17);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(21);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(20);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(30);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _link = __webpack_require__(145);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Menu = function (_React$Component) {
	  (0, _inherits3.default)(Menu, _React$Component);
	
	  function Menu() {
	    (0, _classCallCheck3.default)(this, Menu);
	    return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Menu, [{
	    key: 'renderLinks',
	    value: function renderLinks() {
	      return this.props.links.map(function (link, i) {
	        if (link.type === 'email') {
	          return _react2.default.createElement(
	            'a',
	            { className: a, href: link.url },
	            link.name
	          );
	        } else {
	          return _react2.default.createElement(
	            _link2.default,
	            { key: i, href: link.url },
	            _react2.default.createElement(
	              'a',
	              { className: a, target: '_blank' },
	              link.name
	            )
	          );
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        this.props,
	        this.renderLinks()
	      );
	    }
	  }]);
	  return Menu;
	}(_react2.default.Component);
	
	Menu.propTypes = {
	  links: _react.PropTypes.array.isRequired
	};
	exports.default = Menu;
	
	
	var a = (0, _css2.default)({
	  margin: '0 10px 0 0',
	  textDecoration: 'none',
	  color: '#000',
	  ':hover': {
	    textDecoration: 'line-through'
	  }
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJNZW51IiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidHlwZSIsImEiLCJ1cmwiLCJuYW1lIiwicmVuZGVyTGlua3MiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJtYXJnaW4iLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7O2tDQU1MO0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3hDLFlBQUlELEtBQUtFLElBQUwsS0FBYyxPQUFsQixFQUEyQjtBQUN6QixpQkFBTztBQUFBO0FBQUEsY0FBRyxXQUFXQyxDQUFkLEVBQWlCLE1BQU9ILEtBQUtJLEdBQTdCO0FBQXFDSixpQkFBS0s7QUFBMUMsV0FBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUNFO0FBQUE7QUFBQSxjQUFNLEtBQUtKLENBQVgsRUFBYyxNQUFPRCxLQUFLSSxHQUExQjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFXRCxDQUFkLEVBQWlCLFFBQU8sUUFBeEI7QUFBbUNILG1CQUFLSztBQUF4QztBQURGLFdBREY7QUFLRDtBQUNGLE9BVk0sQ0FBUDtBQVdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBUyxhQUFLUixLQUFkO0FBQ0csYUFBS1MsV0FBTDtBQURILE9BREY7QUFLRDs7O0VBMUIrQixnQkFBTUMsUzs7QUFBbkJYLEksQ0FFWlksUyxHQUFZO0FBQ2pCVixTQUFPLGlCQUFVVyxLQUFWLENBQWdCQztBQUROLEM7a0JBRkFkLEk7OztBQTZCckIsSUFBTU8sSUFBSSxtQkFBSTtBQUNaUSxVQUFRLFlBREk7QUFFWkMsa0JBQWdCLE1BRko7QUFHWkMsU0FBTyxNQUhLO0FBSVosWUFBVTtBQUNSRCxvQkFBZ0I7QUFEUjtBQUpFLENBQUosQ0FBViIsImZpbGUiOiJNZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXJMaW5rcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5saW5rcy5tYXAoIChsaW5rLCBpKSA9PiB7XG4gICAgICBpZiAobGluay50eXBlID09PSAnZW1haWwnKSB7XG4gICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9e2F9IGhyZWY9eyBsaW5rLnVybCB9PnsgbGluay5uYW1lIH08L2E+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17IGxpbmsudXJsIH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2F9IHRhcmdldD1cIl9ibGFua1wiPnsgbGluay5uYW1lIH08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpbmtzKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYSA9IGNzcyh7XG4gIG1hcmdpbjogJzAgMTBweCAwIDAnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBjb2xvcjogJyMwMDAnLFxuICAnOmhvdmVyJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyxcbiAgfVxufSlcbiJdfQ==

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _head = __webpack_require__(75);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _glamor = __webpack_require__(134);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  return _react2.default.createElement(
	    _head2.default,
	    null,
	    _react2.default.createElement(
	      'title',
	      null,
	      'Guillaume Kolly'
	    ),
	    _react2.default.createElement('meta', { charSet: 'utf-8' }),
	    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
	    _react2.default.createElement('meta', { name: 'description', content: 'Guillaume Kolly, <strong>full stack developer</strong> based in Lyon - France.' }),
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXIiLCJmb250RmFtaWx5IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsInRleHREZWNvcmF0aW9uIiwidGV4dFNoYWRvdyIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJNb3pPc3hGb250U21vb3RoaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztrQkFFZTtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUUsNENBQU0sU0FBUSxPQUFkLEdBRkY7QUFHRSw0Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSx1Q0FBOUIsR0FIRjtBQUlFLDRDQUFNLE1BQUssYUFBWCxFQUF5QixTQUFRLGdGQUFqQyxHQUpGO0FBS0UsNENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsbUhBQTlCLEdBTEY7QUFNRSw0Q0FBTSxNQUFLLFdBQVgsRUFBdUIsU0FBUSxpQkFBL0I7QUFORixHQURhO0FBQUEsQzs7QUFXZixZQUFJQSxNQUFKLENBQVcsWUFBWCxFQUEwQjtBQUN4QkMsV0FBUyxHQURlO0FBRXhCQyxVQUFRLEdBRmdCO0FBR3hCQyxVQUFRLEdBSGdCO0FBSXhCQyxjQUFZLFlBSlk7QUFLeEJDLGNBQVksTUFMWTtBQU14QkMsWUFBVSxLQU5jO0FBT3hCQyxjQUFZLEtBUFk7QUFReEJDLGFBQVcsUUFSYTtBQVN4QkMsa0JBQWdCLE1BVFE7QUFVeEJDLGNBQVksR0FWWTtBQVd4QkMsdUJBQXFCLGFBWEc7QUFZeEJDLHVCQUFxQjtBQVpHLENBQTFCIiwiZmlsZSI6IkhlYWRCbG9jLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8SGVhZD5cbiAgICA8dGl0bGU+R3VpbGxhdW1lIEtvbGx5PC90aXRsZT5cbiAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR3VpbGxhdW1lIEtvbGx5LCA8c3Ryb25nPmZ1bGwgc3RhY2sgZGV2ZWxvcGVyPC9zdHJvbmc+IGJhc2VkIGluIEx5b24gLSBGcmFuY2UuJyAvPlxuICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdndWlsbGF1bWUsIGtvbGx5LCBmcm9udGVuZCwgYmFja2VuZCwgZnVsbCBzdGFjaywgZGV2ZWxvcGVyLCB3ZWIsIGphdmFzY3JpcHQsIHJlYWN0SlMsIE1ldGVvciwgSnMsIE5leHRKUywgV2VicGFjaycgLz5cbiAgICA8bWV0YSBuYW1lPSdjb3B5cmlnaHQnIGNvbnRlbnQ9J0d1aWxsYXVtZSBLb2xseScgLz5cbiAgPC9IZWFkPlxuKVxuXG5jc3MuZ2xvYmFsKCdodG1sLCBib2R5JywgIHtcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgYm9yZGVyOiAnMCcsXG4gIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgbGluZUhlaWdodDogJzEuMTUnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIGZvbnRXZWlnaHQ6ICczMDAnLFxuICBmb250U3R5bGU6ICdub3JtYWwnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0ZXh0U2hhZG93OiAnMCcsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxufSlcbiJdfQ==

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(17);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(21);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(20);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var H1 = function (_React$Component) {
	  (0, _inherits3.default)(H1, _React$Component);
	
	  function H1() {
	    (0, _classCallCheck3.default)(this, H1);
	    return (0, _possibleConstructorReturn3.default)(this, (H1.__proto__ || (0, _getPrototypeOf2.default)(H1)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(H1, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'h1',
	        this.props,
	        this.props.title
	      );
	    }
	  }]);
	  return H1;
	}(_react2.default.Component);
	
	H1.propTypes = {
	  title: _react.PropTypes.string.isRequired
	};
	exports.default = H1;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvSDEuanMiXSwibmFtZXMiOlsiSDEiLCJwcm9wcyIsInRpdGxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxFOzs7Ozs7Ozs7OzZCQU1WO0FBQ1AsYUFDRTtBQUFBO0FBQVEsYUFBS0MsS0FBYjtBQUNHLGFBQUtBLEtBQUwsQ0FBV0M7QUFEZCxPQURGO0FBS0Q7OztFQVo2QixnQkFBTUMsUzs7QUFBakJILEUsQ0FFWkksUyxHQUFZO0FBQ2pCRixTQUFPLGlCQUFVRyxNQUFWLENBQWlCQztBQURQLEM7a0JBRkFOLEUiLCJmaWxlIjoiSDEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgPC9oMT5cbiAgICApXG4gIH1cbn1cbiJdfQ==

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(30);
	
	var _css2 = _interopRequireDefault(_css);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'p',
	    { className: p },
	    ' ',
	    children,
	    ' '
	  );
	};
	
	var p = (0, _css2.default)({
	  color: '#000',
	  fontSize: '1em'
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbImNoaWxkcmVuIiwicCIsImNvbG9yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLE1BQUdBLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQWtCO0FBQUE7QUFBQSxNQUFHLFdBQVdDLENBQWQ7QUFBQTtBQUFtQkQsWUFBbkI7QUFBQTtBQUFBLEdBQWxCO0FBQUEsQzs7QUFFZixJQUFNQyxJQUFJLG1CQUFJO0FBQ1pDLFNBQU8sTUFESztBQUVaQyxZQUFVO0FBRkUsQ0FBSixDQUFWIiwiZmlsZSI6IlBhcmFncmFwaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCAoIHtjaGlsZHJlbn0gKSA9PiA8cCBjbGFzc05hbWU9e3B9PiB7Y2hpbGRyZW59IDwvcD5cblxuY29uc3QgcCA9IGNzcyh7XG4gIGNvbG9yOiAnIzAwMCcsXG4gIGZvbnRTaXplOiAnMWVtJyxcbn0pXG4iXX0=

/***/ },
/* 142 */
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
/* 143 */,
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(17);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(21);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(20);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HeadBloc = __webpack_require__(139);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _Menu = __webpack_require__(138);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _H = __webpack_require__(140);
	
	var _H2 = _interopRequireDefault(_H);
	
	var _Paragraph = __webpack_require__(141);
	
	var _Paragraph2 = _interopRequireDefault(_Paragraph);
	
	var _socials = __webpack_require__(142);
	
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
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_HeadBloc2.default, null),
	        _react2.default.createElement(_Menu2.default, { links: this.props.socials,
	          style: {
	            display: 'inline-block',
	            margin: '10px 10px',
	            transformOrigin: 'left top',
	            transform: 'rotate(270deg) translateX(-100%)',
	            textTransform: 'uppercase',
	            textDecoration: 'none'
	          } }),
	        _react2.default.createElement(_H2.default, { title: 'Guillaume Kolly',
	          style: { color: '#000', fontSize: '4em' } }),
	        _react2.default.createElement(
	          _Paragraph2.default,
	          null,
	          'Text of the paragraph'
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic29jaWFscyIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImZvbnRTaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsK0RBREY7QUFFRSx3REFBTSxPQUFPLEtBQUtBLEtBQUwsQ0FBV0MsT0FBeEI7QUFDRSxpQkFBTztBQUNMQyxxQkFBUyxjQURKO0FBRUxDLG9CQUFRLFdBRkg7QUFHTEMsNkJBQWlCLFVBSFo7QUFJTEMsdUJBQVcsa0NBSk47QUFLTEMsMkJBQWUsV0FMVjtBQU1MQyw0QkFBZ0I7QUFOWCxXQURULEdBRkY7QUFXRSxxREFBSSxPQUFNLGlCQUFWO0FBQ0UsaUJBQU8sRUFBRUMsT0FBTyxNQUFULEVBQWlCQyxVQUFVLEtBQTNCLEVBRFQsR0FYRjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiRixPQURGO0FBbUJEOzs7c0NBeEJ5QjtBQUN4QixhQUFPLEVBQUVSLDBCQUFGLEVBQVA7QUFDRDs7O0VBSjBCLGdCQUFNUyxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEgxIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvSDEnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvUGFyYWdyYXBoJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyAvPlxuICAgICAgICA8TWVudSBsaW5rcz17dGhpcy5wcm9wcy5zb2NpYWxzfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogJzEwcHggMTBweCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgICAgICAgICB9fSAvPlxuICAgICAgICA8SDEgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRTaXplOiAnNGVtJyB9fSAvPlxuICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgIFRleHQgb2YgdGhlIHBhcmFncmFwaFxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19
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
/* 145 */
/***/ function(module, exports) {

	module.exports = require("next/link");

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcz8zY2YxNGQwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9odG1sLWVudGl0aWVzL2xpYi9odG1sNS1lbnRpdGllcy5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vYW5zaS1yZWdleC9pbmRleC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvaW5kZXguanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2h0bWwtZW50aXRpZXMvbGliL2h0bWw0LWVudGl0aWVzLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9odG1sLWVudGl0aWVzL2xpYi94bWwtZW50aXRpZXMuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5c3RyaW5nL2RlY29kZS5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vcXVlcnlzdHJpbmcvZW5jb2RlLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9xdWVyeXN0cmluZy9pbmRleC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vc3RyaXAtYW5zaS9pbmRleC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LW92ZXJsYXkuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8od2VicGFjayktaG90LW1pZGRsZXdhcmUvcHJvY2Vzcy11cGRhdGUuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCI/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL3dhcm5pbmcuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL2luZGV4LmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9jYW1lbGl6ZS5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2h5cGhlbmF0ZS5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9tZW1vaXplU3RyaW5nT25seS5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvQ1NTUHJvcGVydHkuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL2Rhbmdlcm91c1N0eWxlVmFsdWUuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvY2xlYW4uanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9+L2dsYW1vci9saWIvaGFzaC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9pbmRleC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9pbmRleC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy8uL34vZ2xhbW9yL2xpYi9wbHVnaW5zLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vfi9nbGFtb3IvbGliL3NoZWV0LmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWxzL0gxLmpzPzUxZWMxZDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlscy9QYXJhZ3JhcGguanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9kYXRhL3NvY2lhbHMuanM/NTFlYzFkOCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz81MWVjMWQ4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvbGlua1wiPzUxZWMxZDgiXSwibmFtZXMiOlsiTWVudSIsInByb3BzIiwibGlua3MiLCJtYXAiLCJsaW5rIiwiaSIsInR5cGUiLCJhIiwidXJsIiwibmFtZSIsInJlbmRlckxpbmtzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwibWFyZ2luIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImdsb2JhbCIsInBhZGRpbmciLCJib3JkZXIiLCJmb250RmFtaWx5IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsInRleHRTaGFkb3ciLCJXZWJraXRGb250U21vb3RoaW5nIiwiTW96T3N4Rm9udFNtb290aGluZyIsIkgxIiwidGl0bGUiLCJzdHJpbmciLCJjaGlsZHJlbiIsInAiLCJzb2NpYWxzIiwiZGlzcGxheSIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsInRleHRUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7OztB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O0FBQ0EsSUFBRztBQUNIO0FBQ0EsbURBQWtEO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQzlFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9EQTs7QUFFQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQWtELFlBQVksaUJBQWlCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixzQkFBc0IsRUFBRTtBQUNuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJGQUEwRjs7QUFFMUY7QUFDQSx3QkFBdUI7QUFDdkIscUJBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Qjs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFFQSxnQ0FBK0I7QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxxQkFBcUI7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNFQUFxRSxlQUFlO0FBQ3BGO0FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs4QkFRVztBQUNQLGNBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0VBREY7QUFFRSx5REFBTSxPQUFPLEtBQUtqQyxLQUFMLENBQVdpQyxPQUF4QjtBQUNFLGtCQUFPO0FBQ0xDLHNCQUFTLGNBREo7QUFFTHBCLHFCQUFRLFdBRkg7QUFHTHFCLDhCQUFpQixVQUhaO0FBSUxDLHdCQUFXLGtDQUpOO0FBS0xDLDRCQUFlLFdBTFY7QUFNTHRCLDZCQUFnQjtBQU5YLFlBRFQsR0FGRjtBQVdFLHNEQUFJLE9BQU0saUJBQVY7QUFDRSxrQkFBTyxFQUFFQyxPQUFPLE1BQVQsRUFBaUJNLFVBQVUsS0FBM0IsRUFEVCxHQVhGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGLFFBREY7QUFtQkQ7Ozt1Q0F4QnlCO0FBQ3hCLGNBQU8sRUFBRVcsMEJBQUYsRUFBUDtBQUNEOzs7R0FKMEIsZ0JBQU12QixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSbkMsdUMiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInZhciBFTlRJVElFUyA9IFtbJ0FhY3V0ZScsIFsxOTNdXSwgWydhYWN1dGUnLCBbMjI1XV0sIFsnQWJyZXZlJywgWzI1OF1dLCBbJ2FicmV2ZScsIFsyNTldXSwgWydhYycsIFs4NzY2XV0sIFsnYWNkJywgWzg3NjddXSwgWydhY0UnLCBbODc2NiwgODE5XV0sIFsnQWNpcmMnLCBbMTk0XV0sIFsnYWNpcmMnLCBbMjI2XV0sIFsnYWN1dGUnLCBbMTgwXV0sIFsnQWN5JywgWzEwNDBdXSwgWydhY3knLCBbMTA3Ml1dLCBbJ0FFbGlnJywgWzE5OF1dLCBbJ2FlbGlnJywgWzIzMF1dLCBbJ2FmJywgWzgyODldXSwgWydBZnInLCBbMTIwMDY4XV0sIFsnYWZyJywgWzEyMDA5NF1dLCBbJ0FncmF2ZScsIFsxOTJdXSwgWydhZ3JhdmUnLCBbMjI0XV0sIFsnYWxlZnN5bScsIFs4NTAxXV0sIFsnYWxlcGgnLCBbODUwMV1dLCBbJ0FscGhhJywgWzkxM11dLCBbJ2FscGhhJywgWzk0NV1dLCBbJ0FtYWNyJywgWzI1Nl1dLCBbJ2FtYWNyJywgWzI1N11dLCBbJ2FtYWxnJywgWzEwODE1XV0sIFsnYW1wJywgWzM4XV0sIFsnQU1QJywgWzM4XV0sIFsnYW5kYW5kJywgWzEwODM3XV0sIFsnQW5kJywgWzEwODM1XV0sIFsnYW5kJywgWzg3NDNdXSwgWydhbmRkJywgWzEwODQ0XV0sIFsnYW5kc2xvcGUnLCBbMTA4NDBdXSwgWydhbmR2JywgWzEwODQyXV0sIFsnYW5nJywgWzg3MzZdXSwgWydhbmdlJywgWzEwNjYwXV0sIFsnYW5nbGUnLCBbODczNl1dLCBbJ2FuZ21zZGFhJywgWzEwNjY0XV0sIFsnYW5nbXNkYWInLCBbMTA2NjVdXSwgWydhbmdtc2RhYycsIFsxMDY2Nl1dLCBbJ2FuZ21zZGFkJywgWzEwNjY3XV0sIFsnYW5nbXNkYWUnLCBbMTA2NjhdXSwgWydhbmdtc2RhZicsIFsxMDY2OV1dLCBbJ2FuZ21zZGFnJywgWzEwNjcwXV0sIFsnYW5nbXNkYWgnLCBbMTA2NzFdXSwgWydhbmdtc2QnLCBbODczN11dLCBbJ2FuZ3J0JywgWzg3MzVdXSwgWydhbmdydHZiJywgWzg4OTRdXSwgWydhbmdydHZiZCcsIFsxMDY1M11dLCBbJ2FuZ3NwaCcsIFs4NzM4XV0sIFsnYW5nc3QnLCBbMTk3XV0sIFsnYW5nemFycicsIFs5MDg0XV0sIFsnQW9nb24nLCBbMjYwXV0sIFsnYW9nb24nLCBbMjYxXV0sIFsnQW9wZicsIFsxMjAxMjBdXSwgWydhb3BmJywgWzEyMDE0Nl1dLCBbJ2FwYWNpcicsIFsxMDg2M11dLCBbJ2FwJywgWzg3NzZdXSwgWydhcEUnLCBbMTA4NjRdXSwgWydhcGUnLCBbODc3OF1dLCBbJ2FwaWQnLCBbODc3OV1dLCBbJ2Fwb3MnLCBbMzldXSwgWydBcHBseUZ1bmN0aW9uJywgWzgyODldXSwgWydhcHByb3gnLCBbODc3Nl1dLCBbJ2FwcHJveGVxJywgWzg3NzhdXSwgWydBcmluZycsIFsxOTddXSwgWydhcmluZycsIFsyMjldXSwgWydBc2NyJywgWzExOTk2NF1dLCBbJ2FzY3InLCBbMTE5OTkwXV0sIFsnQXNzaWduJywgWzg3ODhdXSwgWydhc3QnLCBbNDJdXSwgWydhc3ltcCcsIFs4Nzc2XV0sIFsnYXN5bXBlcScsIFs4NzgxXV0sIFsnQXRpbGRlJywgWzE5NV1dLCBbJ2F0aWxkZScsIFsyMjddXSwgWydBdW1sJywgWzE5Nl1dLCBbJ2F1bWwnLCBbMjI4XV0sIFsnYXdjb25pbnQnLCBbODc1NV1dLCBbJ2F3aW50JywgWzEwNzY5XV0sIFsnYmFja2NvbmcnLCBbODc4MF1dLCBbJ2JhY2tlcHNpbG9uJywgWzEwMTRdXSwgWydiYWNrcHJpbWUnLCBbODI0NV1dLCBbJ2JhY2tzaW0nLCBbODc2NV1dLCBbJ2JhY2tzaW1lcScsIFs4OTA5XV0sIFsnQmFja3NsYXNoJywgWzg3MjZdXSwgWydCYXJ2JywgWzEwOTgzXV0sIFsnYmFydmVlJywgWzg4OTNdXSwgWydiYXJ3ZWQnLCBbODk2NV1dLCBbJ0JhcndlZCcsIFs4OTY2XV0sIFsnYmFyd2VkZ2UnLCBbODk2NV1dLCBbJ2JicmsnLCBbOTE0MV1dLCBbJ2Jicmt0YnJrJywgWzkxNDJdXSwgWydiY29uZycsIFs4NzgwXV0sIFsnQmN5JywgWzEwNDFdXSwgWydiY3knLCBbMTA3M11dLCBbJ2JkcXVvJywgWzgyMjJdXSwgWydiZWNhdXMnLCBbODc1N11dLCBbJ2JlY2F1c2UnLCBbODc1N11dLCBbJ0JlY2F1c2UnLCBbODc1N11dLCBbJ2JlbXB0eXYnLCBbMTA2NzJdXSwgWydiZXBzaScsIFsxMDE0XV0sIFsnYmVybm91JywgWzg0OTJdXSwgWydCZXJub3VsbGlzJywgWzg0OTJdXSwgWydCZXRhJywgWzkxNF1dLCBbJ2JldGEnLCBbOTQ2XV0sIFsnYmV0aCcsIFs4NTAyXV0sIFsnYmV0d2VlbicsIFs4ODEyXV0sIFsnQmZyJywgWzEyMDA2OV1dLCBbJ2JmcicsIFsxMjAwOTVdXSwgWydiaWdjYXAnLCBbODg5OF1dLCBbJ2JpZ2NpcmMnLCBbOTcxMV1dLCBbJ2JpZ2N1cCcsIFs4ODk5XV0sIFsnYmlnb2RvdCcsIFsxMDc1Ml1dLCBbJ2JpZ29wbHVzJywgWzEwNzUzXV0sIFsnYmlnb3RpbWVzJywgWzEwNzU0XV0sIFsnYmlnc3FjdXAnLCBbMTA3NThdXSwgWydiaWdzdGFyJywgWzk3MzNdXSwgWydiaWd0cmlhbmdsZWRvd24nLCBbOTY2MV1dLCBbJ2JpZ3RyaWFuZ2xldXAnLCBbOTY1MV1dLCBbJ2JpZ3VwbHVzJywgWzEwNzU2XV0sIFsnYmlndmVlJywgWzg4OTddXSwgWydiaWd3ZWRnZScsIFs4ODk2XV0sIFsnYmthcm93JywgWzEwNTA5XV0sIFsnYmxhY2tsb3plbmdlJywgWzEwNzMxXV0sIFsnYmxhY2tzcXVhcmUnLCBbOTY0Ml1dLCBbJ2JsYWNrdHJpYW5nbGUnLCBbOTY1Ml1dLCBbJ2JsYWNrdHJpYW5nbGVkb3duJywgWzk2NjJdXSwgWydibGFja3RyaWFuZ2xlbGVmdCcsIFs5NjY2XV0sIFsnYmxhY2t0cmlhbmdsZXJpZ2h0JywgWzk2NTZdXSwgWydibGFuaycsIFs5MjUxXV0sIFsnYmxrMTInLCBbOTYxOF1dLCBbJ2JsazE0JywgWzk2MTddXSwgWydibGszNCcsIFs5NjE5XV0sIFsnYmxvY2snLCBbOTYwOF1dLCBbJ2JuZScsIFs2MSwgODQyMV1dLCBbJ2JuZXF1aXYnLCBbODgwMSwgODQyMV1dLCBbJ2JOb3QnLCBbMTA5ODldXSwgWydibm90JywgWzg5NzZdXSwgWydCb3BmJywgWzEyMDEyMV1dLCBbJ2JvcGYnLCBbMTIwMTQ3XV0sIFsnYm90JywgWzg4NjldXSwgWydib3R0b20nLCBbODg2OV1dLCBbJ2Jvd3RpZScsIFs4OTA0XV0sIFsnYm94Ym94JywgWzEwNjk3XV0sIFsnYm94ZGwnLCBbOTQ4OF1dLCBbJ2JveGRMJywgWzk1NTddXSwgWydib3hEbCcsIFs5NTU4XV0sIFsnYm94REwnLCBbOTU1OV1dLCBbJ2JveGRyJywgWzk0ODRdXSwgWydib3hkUicsIFs5NTU0XV0sIFsnYm94RHInLCBbOTU1NV1dLCBbJ2JveERSJywgWzk1NTZdXSwgWydib3hoJywgWzk0NzJdXSwgWydib3hIJywgWzk1NTJdXSwgWydib3hoZCcsIFs5NTE2XV0sIFsnYm94SGQnLCBbOTU3Ml1dLCBbJ2JveGhEJywgWzk1NzNdXSwgWydib3hIRCcsIFs5NTc0XV0sIFsnYm94aHUnLCBbOTUyNF1dLCBbJ2JveEh1JywgWzk1NzVdXSwgWydib3hoVScsIFs5NTc2XV0sIFsnYm94SFUnLCBbOTU3N11dLCBbJ2JveG1pbnVzJywgWzg4NjNdXSwgWydib3hwbHVzJywgWzg4NjJdXSwgWydib3h0aW1lcycsIFs4ODY0XV0sIFsnYm94dWwnLCBbOTQ5Nl1dLCBbJ2JveHVMJywgWzk1NjNdXSwgWydib3hVbCcsIFs5NTY0XV0sIFsnYm94VUwnLCBbOTU2NV1dLCBbJ2JveHVyJywgWzk0OTJdXSwgWydib3h1UicsIFs5NTYwXV0sIFsnYm94VXInLCBbOTU2MV1dLCBbJ2JveFVSJywgWzk1NjJdXSwgWydib3h2JywgWzk0NzRdXSwgWydib3hWJywgWzk1NTNdXSwgWydib3h2aCcsIFs5NTMyXV0sIFsnYm94dkgnLCBbOTU3OF1dLCBbJ2JveFZoJywgWzk1NzldXSwgWydib3hWSCcsIFs5NTgwXV0sIFsnYm94dmwnLCBbOTUwOF1dLCBbJ2JveHZMJywgWzk1NjldXSwgWydib3hWbCcsIFs5NTcwXV0sIFsnYm94VkwnLCBbOTU3MV1dLCBbJ2JveHZyJywgWzk1MDBdXSwgWydib3h2UicsIFs5NTY2XV0sIFsnYm94VnInLCBbOTU2N11dLCBbJ2JveFZSJywgWzk1NjhdXSwgWydicHJpbWUnLCBbODI0NV1dLCBbJ2JyZXZlJywgWzcyOF1dLCBbJ0JyZXZlJywgWzcyOF1dLCBbJ2JydmJhcicsIFsxNjZdXSwgWydic2NyJywgWzExOTk5MV1dLCBbJ0JzY3InLCBbODQ5Ml1dLCBbJ2JzZW1pJywgWzgyNzFdXSwgWydic2ltJywgWzg3NjVdXSwgWydic2ltZScsIFs4OTA5XV0sIFsnYnNvbGInLCBbMTA2OTNdXSwgWydic29sJywgWzkyXV0sIFsnYnNvbGhzdWInLCBbMTAxODRdXSwgWydidWxsJywgWzgyMjZdXSwgWydidWxsZXQnLCBbODIyNl1dLCBbJ2J1bXAnLCBbODc4Ml1dLCBbJ2J1bXBFJywgWzEwOTI2XV0sIFsnYnVtcGUnLCBbODc4M11dLCBbJ0J1bXBlcScsIFs4NzgyXV0sIFsnYnVtcGVxJywgWzg3ODNdXSwgWydDYWN1dGUnLCBbMjYyXV0sIFsnY2FjdXRlJywgWzI2M11dLCBbJ2NhcGFuZCcsIFsxMDgyMF1dLCBbJ2NhcGJyY3VwJywgWzEwODI1XV0sIFsnY2FwY2FwJywgWzEwODI3XV0sIFsnY2FwJywgWzg3NDVdXSwgWydDYXAnLCBbODkxNF1dLCBbJ2NhcGN1cCcsIFsxMDgyM11dLCBbJ2NhcGRvdCcsIFsxMDgxNl1dLCBbJ0NhcGl0YWxEaWZmZXJlbnRpYWxEJywgWzg1MTddXSwgWydjYXBzJywgWzg3NDUsIDY1MDI0XV0sIFsnY2FyZXQnLCBbODI1N11dLCBbJ2Nhcm9uJywgWzcxMV1dLCBbJ0NheWxleXMnLCBbODQ5M11dLCBbJ2NjYXBzJywgWzEwODI5XV0sIFsnQ2Nhcm9uJywgWzI2OF1dLCBbJ2NjYXJvbicsIFsyNjldXSwgWydDY2VkaWwnLCBbMTk5XV0sIFsnY2NlZGlsJywgWzIzMV1dLCBbJ0NjaXJjJywgWzI2NF1dLCBbJ2NjaXJjJywgWzI2NV1dLCBbJ0Njb25pbnQnLCBbODc1Ml1dLCBbJ2NjdXBzJywgWzEwODI4XV0sIFsnY2N1cHNzbScsIFsxMDgzMl1dLCBbJ0Nkb3QnLCBbMjY2XV0sIFsnY2RvdCcsIFsyNjddXSwgWydjZWRpbCcsIFsxODRdXSwgWydDZWRpbGxhJywgWzE4NF1dLCBbJ2NlbXB0eXYnLCBbMTA2NzRdXSwgWydjZW50JywgWzE2Ml1dLCBbJ2NlbnRlcmRvdCcsIFsxODNdXSwgWydDZW50ZXJEb3QnLCBbMTgzXV0sIFsnY2ZyJywgWzEyMDA5Nl1dLCBbJ0NmcicsIFs4NDkzXV0sIFsnQ0hjeScsIFsxMDYzXV0sIFsnY2hjeScsIFsxMDk1XV0sIFsnY2hlY2snLCBbMTAwMDNdXSwgWydjaGVja21hcmsnLCBbMTAwMDNdXSwgWydDaGknLCBbOTM1XV0sIFsnY2hpJywgWzk2N11dLCBbJ2NpcmMnLCBbNzEwXV0sIFsnY2lyY2VxJywgWzg3OTFdXSwgWydjaXJjbGVhcnJvd2xlZnQnLCBbODYzNF1dLCBbJ2NpcmNsZWFycm93cmlnaHQnLCBbODYzNV1dLCBbJ2NpcmNsZWRhc3QnLCBbODg1OV1dLCBbJ2NpcmNsZWRjaXJjJywgWzg4NThdXSwgWydjaXJjbGVkZGFzaCcsIFs4ODYxXV0sIFsnQ2lyY2xlRG90JywgWzg4NTddXSwgWydjaXJjbGVkUicsIFsxNzRdXSwgWydjaXJjbGVkUycsIFs5NDE2XV0sIFsnQ2lyY2xlTWludXMnLCBbODg1NF1dLCBbJ0NpcmNsZVBsdXMnLCBbODg1M11dLCBbJ0NpcmNsZVRpbWVzJywgWzg4NTVdXSwgWydjaXInLCBbOTY3NV1dLCBbJ2NpckUnLCBbMTA2OTFdXSwgWydjaXJlJywgWzg3OTFdXSwgWydjaXJmbmludCcsIFsxMDc2OF1dLCBbJ2Npcm1pZCcsIFsxMDk5MV1dLCBbJ2NpcnNjaXInLCBbMTA2OTBdXSwgWydDbG9ja3dpc2VDb250b3VySW50ZWdyYWwnLCBbODc1NF1dLCBbJ0Nsb3NlQ3VybHlEb3VibGVRdW90ZScsIFs4MjIxXV0sIFsnQ2xvc2VDdXJseVF1b3RlJywgWzgyMTddXSwgWydjbHVicycsIFs5ODI3XV0sIFsnY2x1YnN1aXQnLCBbOTgyN11dLCBbJ2NvbG9uJywgWzU4XV0sIFsnQ29sb24nLCBbODc1OV1dLCBbJ0NvbG9uZScsIFsxMDg2OF1dLCBbJ2NvbG9uZScsIFs4Nzg4XV0sIFsnY29sb25lcScsIFs4Nzg4XV0sIFsnY29tbWEnLCBbNDRdXSwgWydjb21tYXQnLCBbNjRdXSwgWydjb21wJywgWzg3MDVdXSwgWydjb21wZm4nLCBbODcyOF1dLCBbJ2NvbXBsZW1lbnQnLCBbODcwNV1dLCBbJ2NvbXBsZXhlcycsIFs4NDUwXV0sIFsnY29uZycsIFs4NzczXV0sIFsnY29uZ2RvdCcsIFsxMDg2MV1dLCBbJ0NvbmdydWVudCcsIFs4ODAxXV0sIFsnY29uaW50JywgWzg3NTBdXSwgWydDb25pbnQnLCBbODc1MV1dLCBbJ0NvbnRvdXJJbnRlZ3JhbCcsIFs4NzUwXV0sIFsnY29wZicsIFsxMjAxNDhdXSwgWydDb3BmJywgWzg0NTBdXSwgWydjb3Byb2QnLCBbODcyMF1dLCBbJ0NvcHJvZHVjdCcsIFs4NzIwXV0sIFsnY29weScsIFsxNjldXSwgWydDT1BZJywgWzE2OV1dLCBbJ2NvcHlzcicsIFs4NDcxXV0sIFsnQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbCcsIFs4NzU1XV0sIFsnY3JhcnInLCBbODYyOV1dLCBbJ2Nyb3NzJywgWzEwMDA3XV0sIFsnQ3Jvc3MnLCBbMTA3OTldXSwgWydDc2NyJywgWzExOTk2Nl1dLCBbJ2NzY3InLCBbMTE5OTkyXV0sIFsnY3N1YicsIFsxMDk1OV1dLCBbJ2NzdWJlJywgWzEwOTYxXV0sIFsnY3N1cCcsIFsxMDk2MF1dLCBbJ2NzdXBlJywgWzEwOTYyXV0sIFsnY3Rkb3QnLCBbODk0M11dLCBbJ2N1ZGFycmwnLCBbMTA1NTJdXSwgWydjdWRhcnJyJywgWzEwNTQ5XV0sIFsnY3VlcHInLCBbODkyNl1dLCBbJ2N1ZXNjJywgWzg5MjddXSwgWydjdWxhcnInLCBbODYzMF1dLCBbJ2N1bGFycnAnLCBbMTA1NTddXSwgWydjdXBicmNhcCcsIFsxMDgyNF1dLCBbJ2N1cGNhcCcsIFsxMDgyMl1dLCBbJ0N1cENhcCcsIFs4NzgxXV0sIFsnY3VwJywgWzg3NDZdXSwgWydDdXAnLCBbODkxNV1dLCBbJ2N1cGN1cCcsIFsxMDgyNl1dLCBbJ2N1cGRvdCcsIFs4ODQ1XV0sIFsnY3Vwb3InLCBbMTA4MjFdXSwgWydjdXBzJywgWzg3NDYsIDY1MDI0XV0sIFsnY3VyYXJyJywgWzg2MzFdXSwgWydjdXJhcnJtJywgWzEwNTU2XV0sIFsnY3VybHllcXByZWMnLCBbODkyNl1dLCBbJ2N1cmx5ZXFzdWNjJywgWzg5MjddXSwgWydjdXJseXZlZScsIFs4OTEwXV0sIFsnY3VybHl3ZWRnZScsIFs4OTExXV0sIFsnY3VycmVuJywgWzE2NF1dLCBbJ2N1cnZlYXJyb3dsZWZ0JywgWzg2MzBdXSwgWydjdXJ2ZWFycm93cmlnaHQnLCBbODYzMV1dLCBbJ2N1dmVlJywgWzg5MTBdXSwgWydjdXdlZCcsIFs4OTExXV0sIFsnY3djb25pbnQnLCBbODc1NF1dLCBbJ2N3aW50JywgWzg3NTNdXSwgWydjeWxjdHknLCBbOTAwNV1dLCBbJ2RhZ2dlcicsIFs4MjI0XV0sIFsnRGFnZ2VyJywgWzgyMjVdXSwgWydkYWxldGgnLCBbODUwNF1dLCBbJ2RhcnInLCBbODU5NV1dLCBbJ0RhcnInLCBbODYwOV1dLCBbJ2RBcnInLCBbODY1OV1dLCBbJ2Rhc2gnLCBbODIwOF1dLCBbJ0Rhc2h2JywgWzEwOTgwXV0sIFsnZGFzaHYnLCBbODg2N11dLCBbJ2Ria2Fyb3cnLCBbMTA1MTFdXSwgWydkYmxhYycsIFs3MzNdXSwgWydEY2Fyb24nLCBbMjcwXV0sIFsnZGNhcm9uJywgWzI3MV1dLCBbJ0RjeScsIFsxMDQ0XV0sIFsnZGN5JywgWzEwNzZdXSwgWydkZGFnZ2VyJywgWzgyMjVdXSwgWydkZGFycicsIFs4NjUwXV0sIFsnREQnLCBbODUxN11dLCBbJ2RkJywgWzg1MThdXSwgWydERG90cmFoZCcsIFsxMDUxM11dLCBbJ2Rkb3RzZXEnLCBbMTA4NzFdXSwgWydkZWcnLCBbMTc2XV0sIFsnRGVsJywgWzg3MTFdXSwgWydEZWx0YScsIFs5MTZdXSwgWydkZWx0YScsIFs5NDhdXSwgWydkZW1wdHl2JywgWzEwNjczXV0sIFsnZGZpc2h0JywgWzEwNjIzXV0sIFsnRGZyJywgWzEyMDA3MV1dLCBbJ2RmcicsIFsxMjAwOTddXSwgWydkSGFyJywgWzEwNTk3XV0sIFsnZGhhcmwnLCBbODY0M11dLCBbJ2RoYXJyJywgWzg2NDJdXSwgWydEaWFjcml0aWNhbEFjdXRlJywgWzE4MF1dLCBbJ0RpYWNyaXRpY2FsRG90JywgWzcyOV1dLCBbJ0RpYWNyaXRpY2FsRG91YmxlQWN1dGUnLCBbNzMzXV0sIFsnRGlhY3JpdGljYWxHcmF2ZScsIFs5Nl1dLCBbJ0RpYWNyaXRpY2FsVGlsZGUnLCBbNzMyXV0sIFsnZGlhbScsIFs4OTAwXV0sIFsnZGlhbW9uZCcsIFs4OTAwXV0sIFsnRGlhbW9uZCcsIFs4OTAwXV0sIFsnZGlhbW9uZHN1aXQnLCBbOTgzMF1dLCBbJ2RpYW1zJywgWzk4MzBdXSwgWydkaWUnLCBbMTY4XV0sIFsnRGlmZmVyZW50aWFsRCcsIFs4NTE4XV0sIFsnZGlnYW1tYScsIFs5ODldXSwgWydkaXNpbicsIFs4OTQ2XV0sIFsnZGl2JywgWzI0N11dLCBbJ2RpdmlkZScsIFsyNDddXSwgWydkaXZpZGVvbnRpbWVzJywgWzg5MDNdXSwgWydkaXZvbngnLCBbODkwM11dLCBbJ0RKY3knLCBbMTAyNl1dLCBbJ2RqY3knLCBbMTEwNl1dLCBbJ2RsY29ybicsIFs4OTkwXV0sIFsnZGxjcm9wJywgWzg5NzNdXSwgWydkb2xsYXInLCBbMzZdXSwgWydEb3BmJywgWzEyMDEyM11dLCBbJ2RvcGYnLCBbMTIwMTQ5XV0sIFsnRG90JywgWzE2OF1dLCBbJ2RvdCcsIFs3MjldXSwgWydEb3REb3QnLCBbODQxMl1dLCBbJ2RvdGVxJywgWzg3ODRdXSwgWydkb3RlcWRvdCcsIFs4Nzg1XV0sIFsnRG90RXF1YWwnLCBbODc4NF1dLCBbJ2RvdG1pbnVzJywgWzg3NjBdXSwgWydkb3RwbHVzJywgWzg3MjRdXSwgWydkb3RzcXVhcmUnLCBbODg2NV1dLCBbJ2RvdWJsZWJhcndlZGdlJywgWzg5NjZdXSwgWydEb3VibGVDb250b3VySW50ZWdyYWwnLCBbODc1MV1dLCBbJ0RvdWJsZURvdCcsIFsxNjhdXSwgWydEb3VibGVEb3duQXJyb3cnLCBbODY1OV1dLCBbJ0RvdWJsZUxlZnRBcnJvdycsIFs4NjU2XV0sIFsnRG91YmxlTGVmdFJpZ2h0QXJyb3cnLCBbODY2MF1dLCBbJ0RvdWJsZUxlZnRUZWUnLCBbMTA5ODBdXSwgWydEb3VibGVMb25nTGVmdEFycm93JywgWzEwMjMyXV0sIFsnRG91YmxlTG9uZ0xlZnRSaWdodEFycm93JywgWzEwMjM0XV0sIFsnRG91YmxlTG9uZ1JpZ2h0QXJyb3cnLCBbMTAyMzNdXSwgWydEb3VibGVSaWdodEFycm93JywgWzg2NThdXSwgWydEb3VibGVSaWdodFRlZScsIFs4ODcyXV0sIFsnRG91YmxlVXBBcnJvdycsIFs4NjU3XV0sIFsnRG91YmxlVXBEb3duQXJyb3cnLCBbODY2MV1dLCBbJ0RvdWJsZVZlcnRpY2FsQmFyJywgWzg3NDFdXSwgWydEb3duQXJyb3dCYXInLCBbMTA1MTVdXSwgWydkb3duYXJyb3cnLCBbODU5NV1dLCBbJ0Rvd25BcnJvdycsIFs4NTk1XV0sIFsnRG93bmFycm93JywgWzg2NTldXSwgWydEb3duQXJyb3dVcEFycm93JywgWzg2OTNdXSwgWydEb3duQnJldmUnLCBbNzg1XV0sIFsnZG93bmRvd25hcnJvd3MnLCBbODY1MF1dLCBbJ2Rvd25oYXJwb29ubGVmdCcsIFs4NjQzXV0sIFsnZG93bmhhcnBvb25yaWdodCcsIFs4NjQyXV0sIFsnRG93bkxlZnRSaWdodFZlY3RvcicsIFsxMDU3Nl1dLCBbJ0Rvd25MZWZ0VGVlVmVjdG9yJywgWzEwNTkwXV0sIFsnRG93bkxlZnRWZWN0b3JCYXInLCBbMTA1ODJdXSwgWydEb3duTGVmdFZlY3RvcicsIFs4NjM3XV0sIFsnRG93blJpZ2h0VGVlVmVjdG9yJywgWzEwNTkxXV0sIFsnRG93blJpZ2h0VmVjdG9yQmFyJywgWzEwNTgzXV0sIFsnRG93blJpZ2h0VmVjdG9yJywgWzg2NDFdXSwgWydEb3duVGVlQXJyb3cnLCBbODYxNV1dLCBbJ0Rvd25UZWUnLCBbODg2OF1dLCBbJ2RyYmthcm93JywgWzEwNTEyXV0sIFsnZHJjb3JuJywgWzg5OTFdXSwgWydkcmNyb3AnLCBbODk3Ml1dLCBbJ0RzY3InLCBbMTE5OTY3XV0sIFsnZHNjcicsIFsxMTk5OTNdXSwgWydEU2N5JywgWzEwMjldXSwgWydkc2N5JywgWzExMDldXSwgWydkc29sJywgWzEwNzQyXV0sIFsnRHN0cm9rJywgWzI3Ml1dLCBbJ2RzdHJvaycsIFsyNzNdXSwgWydkdGRvdCcsIFs4OTQ1XV0sIFsnZHRyaScsIFs5NjYzXV0sIFsnZHRyaWYnLCBbOTY2Ml1dLCBbJ2R1YXJyJywgWzg2OTNdXSwgWydkdWhhcicsIFsxMDYwN11dLCBbJ2R3YW5nbGUnLCBbMTA2NjJdXSwgWydEWmN5JywgWzEwMzldXSwgWydkemN5JywgWzExMTldXSwgWydkemlncmFycicsIFsxMDIzOV1dLCBbJ0VhY3V0ZScsIFsyMDFdXSwgWydlYWN1dGUnLCBbMjMzXV0sIFsnZWFzdGVyJywgWzEwODYyXV0sIFsnRWNhcm9uJywgWzI4Ml1dLCBbJ2VjYXJvbicsIFsyODNdXSwgWydFY2lyYycsIFsyMDJdXSwgWydlY2lyYycsIFsyMzRdXSwgWydlY2lyJywgWzg3OTBdXSwgWydlY29sb24nLCBbODc4OV1dLCBbJ0VjeScsIFsxMDY5XV0sIFsnZWN5JywgWzExMDFdXSwgWydlRERvdCcsIFsxMDg3MV1dLCBbJ0Vkb3QnLCBbMjc4XV0sIFsnZWRvdCcsIFsyNzldXSwgWydlRG90JywgWzg3ODVdXSwgWydlZScsIFs4NTE5XV0sIFsnZWZEb3QnLCBbODc4Nl1dLCBbJ0VmcicsIFsxMjAwNzJdXSwgWydlZnInLCBbMTIwMDk4XV0sIFsnZWcnLCBbMTA5MDZdXSwgWydFZ3JhdmUnLCBbMjAwXV0sIFsnZWdyYXZlJywgWzIzMl1dLCBbJ2VncycsIFsxMDkwMl1dLCBbJ2Vnc2RvdCcsIFsxMDkwNF1dLCBbJ2VsJywgWzEwOTA1XV0sIFsnRWxlbWVudCcsIFs4NzEyXV0sIFsnZWxpbnRlcnMnLCBbOTE5MV1dLCBbJ2VsbCcsIFs4NDY3XV0sIFsnZWxzJywgWzEwOTAxXV0sIFsnZWxzZG90JywgWzEwOTAzXV0sIFsnRW1hY3InLCBbMjc0XV0sIFsnZW1hY3InLCBbMjc1XV0sIFsnZW1wdHknLCBbODcwOV1dLCBbJ2VtcHR5c2V0JywgWzg3MDldXSwgWydFbXB0eVNtYWxsU3F1YXJlJywgWzk3MjNdXSwgWydlbXB0eXYnLCBbODcwOV1dLCBbJ0VtcHR5VmVyeVNtYWxsU3F1YXJlJywgWzk2NDNdXSwgWydlbXNwMTMnLCBbODE5Nl1dLCBbJ2Vtc3AxNCcsIFs4MTk3XV0sIFsnZW1zcCcsIFs4MTk1XV0sIFsnRU5HJywgWzMzMF1dLCBbJ2VuZycsIFszMzFdXSwgWydlbnNwJywgWzgxOTRdXSwgWydFb2dvbicsIFsyODBdXSwgWydlb2dvbicsIFsyODFdXSwgWydFb3BmJywgWzEyMDEyNF1dLCBbJ2VvcGYnLCBbMTIwMTUwXV0sIFsnZXBhcicsIFs4OTE3XV0sIFsnZXBhcnNsJywgWzEwNzIzXV0sIFsnZXBsdXMnLCBbMTA4NjVdXSwgWydlcHNpJywgWzk0OV1dLCBbJ0Vwc2lsb24nLCBbOTE3XV0sIFsnZXBzaWxvbicsIFs5NDldXSwgWydlcHNpdicsIFsxMDEzXV0sIFsnZXFjaXJjJywgWzg3OTBdXSwgWydlcWNvbG9uJywgWzg3ODldXSwgWydlcXNpbScsIFs4NzcwXV0sIFsnZXFzbGFudGd0cicsIFsxMDkwMl1dLCBbJ2Vxc2xhbnRsZXNzJywgWzEwOTAxXV0sIFsnRXF1YWwnLCBbMTA4NjldXSwgWydlcXVhbHMnLCBbNjFdXSwgWydFcXVhbFRpbGRlJywgWzg3NzBdXSwgWydlcXVlc3QnLCBbODc5OV1dLCBbJ0VxdWlsaWJyaXVtJywgWzg2NTJdXSwgWydlcXVpdicsIFs4ODAxXV0sIFsnZXF1aXZERCcsIFsxMDg3Ml1dLCBbJ2VxdnBhcnNsJywgWzEwNzI1XV0sIFsnZXJhcnInLCBbMTA2MDldXSwgWydlckRvdCcsIFs4Nzg3XV0sIFsnZXNjcicsIFs4NDk1XV0sIFsnRXNjcicsIFs4NDk2XV0sIFsnZXNkb3QnLCBbODc4NF1dLCBbJ0VzaW0nLCBbMTA4NjddXSwgWydlc2ltJywgWzg3NzBdXSwgWydFdGEnLCBbOTE5XV0sIFsnZXRhJywgWzk1MV1dLCBbJ0VUSCcsIFsyMDhdXSwgWydldGgnLCBbMjQwXV0sIFsnRXVtbCcsIFsyMDNdXSwgWydldW1sJywgWzIzNV1dLCBbJ2V1cm8nLCBbODM2NF1dLCBbJ2V4Y2wnLCBbMzNdXSwgWydleGlzdCcsIFs4NzA3XV0sIFsnRXhpc3RzJywgWzg3MDddXSwgWydleHBlY3RhdGlvbicsIFs4NDk2XV0sIFsnZXhwb25lbnRpYWxlJywgWzg1MTldXSwgWydFeHBvbmVudGlhbEUnLCBbODUxOV1dLCBbJ2ZhbGxpbmdkb3RzZXEnLCBbODc4Nl1dLCBbJ0ZjeScsIFsxMDYwXV0sIFsnZmN5JywgWzEwOTJdXSwgWydmZW1hbGUnLCBbOTc5Ml1dLCBbJ2ZmaWxpZycsIFs2NDI1OV1dLCBbJ2ZmbGlnJywgWzY0MjU2XV0sIFsnZmZsbGlnJywgWzY0MjYwXV0sIFsnRmZyJywgWzEyMDA3M11dLCBbJ2ZmcicsIFsxMjAwOTldXSwgWydmaWxpZycsIFs2NDI1N11dLCBbJ0ZpbGxlZFNtYWxsU3F1YXJlJywgWzk3MjRdXSwgWydGaWxsZWRWZXJ5U21hbGxTcXVhcmUnLCBbOTY0Ml1dLCBbJ2ZqbGlnJywgWzEwMiwgMTA2XV0sIFsnZmxhdCcsIFs5ODM3XV0sIFsnZmxsaWcnLCBbNjQyNThdXSwgWydmbHRucycsIFs5NjQ5XV0sIFsnZm5vZicsIFs0MDJdXSwgWydGb3BmJywgWzEyMDEyNV1dLCBbJ2ZvcGYnLCBbMTIwMTUxXV0sIFsnZm9yYWxsJywgWzg3MDRdXSwgWydGb3JBbGwnLCBbODcwNF1dLCBbJ2ZvcmsnLCBbODkxNl1dLCBbJ2Zvcmt2JywgWzEwOTY5XV0sIFsnRm91cmllcnRyZicsIFs4NDk3XV0sIFsnZnBhcnRpbnQnLCBbMTA3NjVdXSwgWydmcmFjMTInLCBbMTg5XV0sIFsnZnJhYzEzJywgWzg1MzFdXSwgWydmcmFjMTQnLCBbMTg4XV0sIFsnZnJhYzE1JywgWzg1MzNdXSwgWydmcmFjMTYnLCBbODUzN11dLCBbJ2ZyYWMxOCcsIFs4NTM5XV0sIFsnZnJhYzIzJywgWzg1MzJdXSwgWydmcmFjMjUnLCBbODUzNF1dLCBbJ2ZyYWMzNCcsIFsxOTBdXSwgWydmcmFjMzUnLCBbODUzNV1dLCBbJ2ZyYWMzOCcsIFs4NTQwXV0sIFsnZnJhYzQ1JywgWzg1MzZdXSwgWydmcmFjNTYnLCBbODUzOF1dLCBbJ2ZyYWM1OCcsIFs4NTQxXV0sIFsnZnJhYzc4JywgWzg1NDJdXSwgWydmcmFzbCcsIFs4MjYwXV0sIFsnZnJvd24nLCBbODk5NF1dLCBbJ2ZzY3InLCBbMTE5OTk1XV0sIFsnRnNjcicsIFs4NDk3XV0sIFsnZ2FjdXRlJywgWzUwMV1dLCBbJ0dhbW1hJywgWzkxNV1dLCBbJ2dhbW1hJywgWzk0N11dLCBbJ0dhbW1hZCcsIFs5ODhdXSwgWydnYW1tYWQnLCBbOTg5XV0sIFsnZ2FwJywgWzEwODg2XV0sIFsnR2JyZXZlJywgWzI4Nl1dLCBbJ2dicmV2ZScsIFsyODddXSwgWydHY2VkaWwnLCBbMjkwXV0sIFsnR2NpcmMnLCBbMjg0XV0sIFsnZ2NpcmMnLCBbMjg1XV0sIFsnR2N5JywgWzEwNDNdXSwgWydnY3knLCBbMTA3NV1dLCBbJ0dkb3QnLCBbMjg4XV0sIFsnZ2RvdCcsIFsyODldXSwgWydnZScsIFs4ODA1XV0sIFsnZ0UnLCBbODgwN11dLCBbJ2dFbCcsIFsxMDg5Ml1dLCBbJ2dlbCcsIFs4OTIzXV0sIFsnZ2VxJywgWzg4MDVdXSwgWydnZXFxJywgWzg4MDddXSwgWydnZXFzbGFudCcsIFsxMDg3OF1dLCBbJ2dlc2NjJywgWzEwOTIxXV0sIFsnZ2VzJywgWzEwODc4XV0sIFsnZ2VzZG90JywgWzEwODgwXV0sIFsnZ2VzZG90bycsIFsxMDg4Ml1dLCBbJ2dlc2RvdG9sJywgWzEwODg0XV0sIFsnZ2VzbCcsIFs4OTIzLCA2NTAyNF1dLCBbJ2dlc2xlcycsIFsxMDkwMF1dLCBbJ0dmcicsIFsxMjAwNzRdXSwgWydnZnInLCBbMTIwMTAwXV0sIFsnZ2cnLCBbODgxMV1dLCBbJ0dnJywgWzg5MjFdXSwgWydnZ2cnLCBbODkyMV1dLCBbJ2dpbWVsJywgWzg1MDNdXSwgWydHSmN5JywgWzEwMjddXSwgWydnamN5JywgWzExMDddXSwgWydnbGEnLCBbMTA5MTddXSwgWydnbCcsIFs4ODIzXV0sIFsnZ2xFJywgWzEwODk4XV0sIFsnZ2xqJywgWzEwOTE2XV0sIFsnZ25hcCcsIFsxMDg5MF1dLCBbJ2duYXBwcm94JywgWzEwODkwXV0sIFsnZ25lJywgWzEwODg4XV0sIFsnZ25FJywgWzg4MDldXSwgWydnbmVxJywgWzEwODg4XV0sIFsnZ25lcXEnLCBbODgwOV1dLCBbJ2duc2ltJywgWzg5MzVdXSwgWydHb3BmJywgWzEyMDEyNl1dLCBbJ2dvcGYnLCBbMTIwMTUyXV0sIFsnZ3JhdmUnLCBbOTZdXSwgWydHcmVhdGVyRXF1YWwnLCBbODgwNV1dLCBbJ0dyZWF0ZXJFcXVhbExlc3MnLCBbODkyM11dLCBbJ0dyZWF0ZXJGdWxsRXF1YWwnLCBbODgwN11dLCBbJ0dyZWF0ZXJHcmVhdGVyJywgWzEwOTE0XV0sIFsnR3JlYXRlckxlc3MnLCBbODgyM11dLCBbJ0dyZWF0ZXJTbGFudEVxdWFsJywgWzEwODc4XV0sIFsnR3JlYXRlclRpbGRlJywgWzg4MTldXSwgWydHc2NyJywgWzExOTk3MF1dLCBbJ2dzY3InLCBbODQ1OF1dLCBbJ2dzaW0nLCBbODgxOV1dLCBbJ2dzaW1lJywgWzEwODk0XV0sIFsnZ3NpbWwnLCBbMTA4OTZdXSwgWydndGNjJywgWzEwOTE5XV0sIFsnZ3RjaXInLCBbMTA4NzRdXSwgWydndCcsIFs2Ml1dLCBbJ0dUJywgWzYyXV0sIFsnR3QnLCBbODgxMV1dLCBbJ2d0ZG90JywgWzg5MTldXSwgWydndGxQYXInLCBbMTA2NDVdXSwgWydndHF1ZXN0JywgWzEwODc2XV0sIFsnZ3RyYXBwcm94JywgWzEwODg2XV0sIFsnZ3RyYXJyJywgWzEwNjE2XV0sIFsnZ3RyZG90JywgWzg5MTldXSwgWydndHJlcWxlc3MnLCBbODkyM11dLCBbJ2d0cmVxcWxlc3MnLCBbMTA4OTJdXSwgWydndHJsZXNzJywgWzg4MjNdXSwgWydndHJzaW0nLCBbODgxOV1dLCBbJ2d2ZXJ0bmVxcScsIFs4ODA5LCA2NTAyNF1dLCBbJ2d2bkUnLCBbODgwOSwgNjUwMjRdXSwgWydIYWNlaycsIFs3MTFdXSwgWydoYWlyc3AnLCBbODIwMl1dLCBbJ2hhbGYnLCBbMTg5XV0sIFsnaGFtaWx0JywgWzg0NTldXSwgWydIQVJEY3knLCBbMTA2Nl1dLCBbJ2hhcmRjeScsIFsxMDk4XV0sIFsnaGFycmNpcicsIFsxMDU2OF1dLCBbJ2hhcnInLCBbODU5Nl1dLCBbJ2hBcnInLCBbODY2MF1dLCBbJ2hhcnJ3JywgWzg2MjFdXSwgWydIYXQnLCBbOTRdXSwgWydoYmFyJywgWzg0NjNdXSwgWydIY2lyYycsIFsyOTJdXSwgWydoY2lyYycsIFsyOTNdXSwgWydoZWFydHMnLCBbOTgyOV1dLCBbJ2hlYXJ0c3VpdCcsIFs5ODI5XV0sIFsnaGVsbGlwJywgWzgyMzBdXSwgWydoZXJjb24nLCBbODg4OV1dLCBbJ2hmcicsIFsxMjAxMDFdXSwgWydIZnInLCBbODQ2MF1dLCBbJ0hpbGJlcnRTcGFjZScsIFs4NDU5XV0sIFsnaGtzZWFyb3cnLCBbMTA1MzNdXSwgWydoa3N3YXJvdycsIFsxMDUzNF1dLCBbJ2hvYXJyJywgWzg3MDNdXSwgWydob210aHQnLCBbODc2M11dLCBbJ2hvb2tsZWZ0YXJyb3cnLCBbODYxN11dLCBbJ2hvb2tyaWdodGFycm93JywgWzg2MThdXSwgWydob3BmJywgWzEyMDE1M11dLCBbJ0hvcGYnLCBbODQ2MV1dLCBbJ2hvcmJhcicsIFs4MjEzXV0sIFsnSG9yaXpvbnRhbExpbmUnLCBbOTQ3Ml1dLCBbJ2hzY3InLCBbMTE5OTk3XV0sIFsnSHNjcicsIFs4NDU5XV0sIFsnaHNsYXNoJywgWzg0NjNdXSwgWydIc3Ryb2snLCBbMjk0XV0sIFsnaHN0cm9rJywgWzI5NV1dLCBbJ0h1bXBEb3duSHVtcCcsIFs4NzgyXV0sIFsnSHVtcEVxdWFsJywgWzg3ODNdXSwgWydoeWJ1bGwnLCBbODI1OV1dLCBbJ2h5cGhlbicsIFs4MjA4XV0sIFsnSWFjdXRlJywgWzIwNV1dLCBbJ2lhY3V0ZScsIFsyMzddXSwgWydpYycsIFs4MjkxXV0sIFsnSWNpcmMnLCBbMjA2XV0sIFsnaWNpcmMnLCBbMjM4XV0sIFsnSWN5JywgWzEwNDhdXSwgWydpY3knLCBbMTA4MF1dLCBbJ0lkb3QnLCBbMzA0XV0sIFsnSUVjeScsIFsxMDQ1XV0sIFsnaWVjeScsIFsxMDc3XV0sIFsnaWV4Y2wnLCBbMTYxXV0sIFsnaWZmJywgWzg2NjBdXSwgWydpZnInLCBbMTIwMTAyXV0sIFsnSWZyJywgWzg0NjVdXSwgWydJZ3JhdmUnLCBbMjA0XV0sIFsnaWdyYXZlJywgWzIzNl1dLCBbJ2lpJywgWzg1MjBdXSwgWydpaWlpbnQnLCBbMTA3NjRdXSwgWydpaWludCcsIFs4NzQ5XV0sIFsnaWluZmluJywgWzEwNzE2XV0sIFsnaWlvdGEnLCBbODQ4OV1dLCBbJ0lKbGlnJywgWzMwNl1dLCBbJ2lqbGlnJywgWzMwN11dLCBbJ0ltYWNyJywgWzI5OF1dLCBbJ2ltYWNyJywgWzI5OV1dLCBbJ2ltYWdlJywgWzg0NjVdXSwgWydJbWFnaW5hcnlJJywgWzg1MjBdXSwgWydpbWFnbGluZScsIFs4NDY0XV0sIFsnaW1hZ3BhcnQnLCBbODQ2NV1dLCBbJ2ltYXRoJywgWzMwNV1dLCBbJ0ltJywgWzg0NjVdXSwgWydpbW9mJywgWzg4ODddXSwgWydpbXBlZCcsIFs0MzddXSwgWydJbXBsaWVzJywgWzg2NThdXSwgWydpbmNhcmUnLCBbODQ1M11dLCBbJ2luJywgWzg3MTJdXSwgWydpbmZpbicsIFs4NzM0XV0sIFsnaW5maW50aWUnLCBbMTA3MTddXSwgWydpbm9kb3QnLCBbMzA1XV0sIFsnaW50Y2FsJywgWzg4OTBdXSwgWydpbnQnLCBbODc0N11dLCBbJ0ludCcsIFs4NzQ4XV0sIFsnaW50ZWdlcnMnLCBbODQ4NF1dLCBbJ0ludGVncmFsJywgWzg3NDddXSwgWydpbnRlcmNhbCcsIFs4ODkwXV0sIFsnSW50ZXJzZWN0aW9uJywgWzg4OThdXSwgWydpbnRsYXJoaycsIFsxMDc3NV1dLCBbJ2ludHByb2QnLCBbMTA4MTJdXSwgWydJbnZpc2libGVDb21tYScsIFs4MjkxXV0sIFsnSW52aXNpYmxlVGltZXMnLCBbODI5MF1dLCBbJ0lPY3knLCBbMTAyNV1dLCBbJ2lvY3knLCBbMTEwNV1dLCBbJ0lvZ29uJywgWzMwMl1dLCBbJ2lvZ29uJywgWzMwM11dLCBbJ0lvcGYnLCBbMTIwMTI4XV0sIFsnaW9wZicsIFsxMjAxNTRdXSwgWydJb3RhJywgWzkyMV1dLCBbJ2lvdGEnLCBbOTUzXV0sIFsnaXByb2QnLCBbMTA4MTJdXSwgWydpcXVlc3QnLCBbMTkxXV0sIFsnaXNjcicsIFsxMTk5OThdXSwgWydJc2NyJywgWzg0NjRdXSwgWydpc2luJywgWzg3MTJdXSwgWydpc2luZG90JywgWzg5NDldXSwgWydpc2luRScsIFs4OTUzXV0sIFsnaXNpbnMnLCBbODk0OF1dLCBbJ2lzaW5zdicsIFs4OTQ3XV0sIFsnaXNpbnYnLCBbODcxMl1dLCBbJ2l0JywgWzgyOTBdXSwgWydJdGlsZGUnLCBbMjk2XV0sIFsnaXRpbGRlJywgWzI5N11dLCBbJ0l1a2N5JywgWzEwMzBdXSwgWydpdWtjeScsIFsxMTEwXV0sIFsnSXVtbCcsIFsyMDddXSwgWydpdW1sJywgWzIzOV1dLCBbJ0pjaXJjJywgWzMwOF1dLCBbJ2pjaXJjJywgWzMwOV1dLCBbJ0pjeScsIFsxMDQ5XV0sIFsnamN5JywgWzEwODFdXSwgWydKZnInLCBbMTIwMDc3XV0sIFsnamZyJywgWzEyMDEwM11dLCBbJ2ptYXRoJywgWzU2N11dLCBbJ0pvcGYnLCBbMTIwMTI5XV0sIFsnam9wZicsIFsxMjAxNTVdXSwgWydKc2NyJywgWzExOTk3M11dLCBbJ2pzY3InLCBbMTE5OTk5XV0sIFsnSnNlcmN5JywgWzEwMzJdXSwgWydqc2VyY3knLCBbMTExMl1dLCBbJ0p1a2N5JywgWzEwMjhdXSwgWydqdWtjeScsIFsxMTA4XV0sIFsnS2FwcGEnLCBbOTIyXV0sIFsna2FwcGEnLCBbOTU0XV0sIFsna2FwcGF2JywgWzEwMDhdXSwgWydLY2VkaWwnLCBbMzEwXV0sIFsna2NlZGlsJywgWzMxMV1dLCBbJ0tjeScsIFsxMDUwXV0sIFsna2N5JywgWzEwODJdXSwgWydLZnInLCBbMTIwMDc4XV0sIFsna2ZyJywgWzEyMDEwNF1dLCBbJ2tncmVlbicsIFszMTJdXSwgWydLSGN5JywgWzEwNjFdXSwgWydraGN5JywgWzEwOTNdXSwgWydLSmN5JywgWzEwMzZdXSwgWydramN5JywgWzExMTZdXSwgWydLb3BmJywgWzEyMDEzMF1dLCBbJ2tvcGYnLCBbMTIwMTU2XV0sIFsnS3NjcicsIFsxMTk5NzRdXSwgWydrc2NyJywgWzEyMDAwMF1dLCBbJ2xBYXJyJywgWzg2NjZdXSwgWydMYWN1dGUnLCBbMzEzXV0sIFsnbGFjdXRlJywgWzMxNF1dLCBbJ2xhZW1wdHl2JywgWzEwNjc2XV0sIFsnbGFncmFuJywgWzg0NjZdXSwgWydMYW1iZGEnLCBbOTIzXV0sIFsnbGFtYmRhJywgWzk1NV1dLCBbJ2xhbmcnLCBbMTAyMTZdXSwgWydMYW5nJywgWzEwMjE4XV0sIFsnbGFuZ2QnLCBbMTA2NDFdXSwgWydsYW5nbGUnLCBbMTAyMTZdXSwgWydsYXAnLCBbMTA4ODVdXSwgWydMYXBsYWNldHJmJywgWzg0NjZdXSwgWydsYXF1bycsIFsxNzFdXSwgWydsYXJyYicsIFs4Njc2XV0sIFsnbGFycmJmcycsIFsxMDUyN11dLCBbJ2xhcnInLCBbODU5Ml1dLCBbJ0xhcnInLCBbODYwNl1dLCBbJ2xBcnInLCBbODY1Nl1dLCBbJ2xhcnJmcycsIFsxMDUyNV1dLCBbJ2xhcnJoaycsIFs4NjE3XV0sIFsnbGFycmxwJywgWzg2MTldXSwgWydsYXJycGwnLCBbMTA1NTNdXSwgWydsYXJyc2ltJywgWzEwNjExXV0sIFsnbGFycnRsJywgWzg2MTBdXSwgWydsYXRhaWwnLCBbMTA1MjFdXSwgWydsQXRhaWwnLCBbMTA1MjNdXSwgWydsYXQnLCBbMTA5MjNdXSwgWydsYXRlJywgWzEwOTI1XV0sIFsnbGF0ZXMnLCBbMTA5MjUsIDY1MDI0XV0sIFsnbGJhcnInLCBbMTA1MDhdXSwgWydsQmFycicsIFsxMDUxMF1dLCBbJ2xiYnJrJywgWzEwMDk4XV0sIFsnbGJyYWNlJywgWzEyM11dLCBbJ2xicmFjaycsIFs5MV1dLCBbJ2xicmtlJywgWzEwNjM1XV0sIFsnbGJya3NsZCcsIFsxMDYzOV1dLCBbJ2xicmtzbHUnLCBbMTA2MzddXSwgWydMY2Fyb24nLCBbMzE3XV0sIFsnbGNhcm9uJywgWzMxOF1dLCBbJ0xjZWRpbCcsIFszMTVdXSwgWydsY2VkaWwnLCBbMzE2XV0sIFsnbGNlaWwnLCBbODk2OF1dLCBbJ2xjdWInLCBbMTIzXV0sIFsnTGN5JywgWzEwNTFdXSwgWydsY3knLCBbMTA4M11dLCBbJ2xkY2EnLCBbMTA1NTBdXSwgWydsZHF1bycsIFs4MjIwXV0sIFsnbGRxdW9yJywgWzgyMjJdXSwgWydsZHJkaGFyJywgWzEwNTk5XV0sIFsnbGRydXNoYXInLCBbMTA1NzFdXSwgWydsZHNoJywgWzg2MjZdXSwgWydsZScsIFs4ODA0XV0sIFsnbEUnLCBbODgwNl1dLCBbJ0xlZnRBbmdsZUJyYWNrZXQnLCBbMTAyMTZdXSwgWydMZWZ0QXJyb3dCYXInLCBbODY3Nl1dLCBbJ2xlZnRhcnJvdycsIFs4NTkyXV0sIFsnTGVmdEFycm93JywgWzg1OTJdXSwgWydMZWZ0YXJyb3cnLCBbODY1Nl1dLCBbJ0xlZnRBcnJvd1JpZ2h0QXJyb3cnLCBbODY0Nl1dLCBbJ2xlZnRhcnJvd3RhaWwnLCBbODYxMF1dLCBbJ0xlZnRDZWlsaW5nJywgWzg5NjhdXSwgWydMZWZ0RG91YmxlQnJhY2tldCcsIFsxMDIxNF1dLCBbJ0xlZnREb3duVGVlVmVjdG9yJywgWzEwNTkzXV0sIFsnTGVmdERvd25WZWN0b3JCYXInLCBbMTA1ODVdXSwgWydMZWZ0RG93blZlY3RvcicsIFs4NjQzXV0sIFsnTGVmdEZsb29yJywgWzg5NzBdXSwgWydsZWZ0aGFycG9vbmRvd24nLCBbODYzN11dLCBbJ2xlZnRoYXJwb29udXAnLCBbODYzNl1dLCBbJ2xlZnRsZWZ0YXJyb3dzJywgWzg2NDddXSwgWydsZWZ0cmlnaHRhcnJvdycsIFs4NTk2XV0sIFsnTGVmdFJpZ2h0QXJyb3cnLCBbODU5Nl1dLCBbJ0xlZnRyaWdodGFycm93JywgWzg2NjBdXSwgWydsZWZ0cmlnaHRhcnJvd3MnLCBbODY0Nl1dLCBbJ2xlZnRyaWdodGhhcnBvb25zJywgWzg2NTFdXSwgWydsZWZ0cmlnaHRzcXVpZ2Fycm93JywgWzg2MjFdXSwgWydMZWZ0UmlnaHRWZWN0b3InLCBbMTA1NzRdXSwgWydMZWZ0VGVlQXJyb3cnLCBbODYxMl1dLCBbJ0xlZnRUZWUnLCBbODg2N11dLCBbJ0xlZnRUZWVWZWN0b3InLCBbMTA1ODZdXSwgWydsZWZ0dGhyZWV0aW1lcycsIFs4OTA3XV0sIFsnTGVmdFRyaWFuZ2xlQmFyJywgWzEwNzAzXV0sIFsnTGVmdFRyaWFuZ2xlJywgWzg4ODJdXSwgWydMZWZ0VHJpYW5nbGVFcXVhbCcsIFs4ODg0XV0sIFsnTGVmdFVwRG93blZlY3RvcicsIFsxMDU3N11dLCBbJ0xlZnRVcFRlZVZlY3RvcicsIFsxMDU5Ml1dLCBbJ0xlZnRVcFZlY3RvckJhcicsIFsxMDU4NF1dLCBbJ0xlZnRVcFZlY3RvcicsIFs4NjM5XV0sIFsnTGVmdFZlY3RvckJhcicsIFsxMDU3OF1dLCBbJ0xlZnRWZWN0b3InLCBbODYzNl1dLCBbJ2xFZycsIFsxMDg5MV1dLCBbJ2xlZycsIFs4OTIyXV0sIFsnbGVxJywgWzg4MDRdXSwgWydsZXFxJywgWzg4MDZdXSwgWydsZXFzbGFudCcsIFsxMDg3N11dLCBbJ2xlc2NjJywgWzEwOTIwXV0sIFsnbGVzJywgWzEwODc3XV0sIFsnbGVzZG90JywgWzEwODc5XV0sIFsnbGVzZG90bycsIFsxMDg4MV1dLCBbJ2xlc2RvdG9yJywgWzEwODgzXV0sIFsnbGVzZycsIFs4OTIyLCA2NTAyNF1dLCBbJ2xlc2dlcycsIFsxMDg5OV1dLCBbJ2xlc3NhcHByb3gnLCBbMTA4ODVdXSwgWydsZXNzZG90JywgWzg5MThdXSwgWydsZXNzZXFndHInLCBbODkyMl1dLCBbJ2xlc3NlcXFndHInLCBbMTA4OTFdXSwgWydMZXNzRXF1YWxHcmVhdGVyJywgWzg5MjJdXSwgWydMZXNzRnVsbEVxdWFsJywgWzg4MDZdXSwgWydMZXNzR3JlYXRlcicsIFs4ODIyXV0sIFsnbGVzc2d0cicsIFs4ODIyXV0sIFsnTGVzc0xlc3MnLCBbMTA5MTNdXSwgWydsZXNzc2ltJywgWzg4MThdXSwgWydMZXNzU2xhbnRFcXVhbCcsIFsxMDg3N11dLCBbJ0xlc3NUaWxkZScsIFs4ODE4XV0sIFsnbGZpc2h0JywgWzEwNjIwXV0sIFsnbGZsb29yJywgWzg5NzBdXSwgWydMZnInLCBbMTIwMDc5XV0sIFsnbGZyJywgWzEyMDEwNV1dLCBbJ2xnJywgWzg4MjJdXSwgWydsZ0UnLCBbMTA4OTddXSwgWydsSGFyJywgWzEwNTk0XV0sIFsnbGhhcmQnLCBbODYzN11dLCBbJ2xoYXJ1JywgWzg2MzZdXSwgWydsaGFydWwnLCBbMTA2MDJdXSwgWydsaGJsaycsIFs5NjA0XV0sIFsnTEpjeScsIFsxMDMzXV0sIFsnbGpjeScsIFsxMTEzXV0sIFsnbGxhcnInLCBbODY0N11dLCBbJ2xsJywgWzg4MTBdXSwgWydMbCcsIFs4OTIwXV0sIFsnbGxjb3JuZXInLCBbODk5MF1dLCBbJ0xsZWZ0YXJyb3cnLCBbODY2Nl1dLCBbJ2xsaGFyZCcsIFsxMDYwM11dLCBbJ2xsdHJpJywgWzk3MjJdXSwgWydMbWlkb3QnLCBbMzE5XV0sIFsnbG1pZG90JywgWzMyMF1dLCBbJ2xtb3VzdGFjaGUnLCBbOTEzNl1dLCBbJ2xtb3VzdCcsIFs5MTM2XV0sIFsnbG5hcCcsIFsxMDg4OV1dLCBbJ2xuYXBwcm94JywgWzEwODg5XV0sIFsnbG5lJywgWzEwODg3XV0sIFsnbG5FJywgWzg4MDhdXSwgWydsbmVxJywgWzEwODg3XV0sIFsnbG5lcXEnLCBbODgwOF1dLCBbJ2xuc2ltJywgWzg5MzRdXSwgWydsb2FuZycsIFsxMDIyMF1dLCBbJ2xvYXJyJywgWzg3MDFdXSwgWydsb2JyaycsIFsxMDIxNF1dLCBbJ2xvbmdsZWZ0YXJyb3cnLCBbMTAyMjldXSwgWydMb25nTGVmdEFycm93JywgWzEwMjI5XV0sIFsnTG9uZ2xlZnRhcnJvdycsIFsxMDIzMl1dLCBbJ2xvbmdsZWZ0cmlnaHRhcnJvdycsIFsxMDIzMV1dLCBbJ0xvbmdMZWZ0UmlnaHRBcnJvdycsIFsxMDIzMV1dLCBbJ0xvbmdsZWZ0cmlnaHRhcnJvdycsIFsxMDIzNF1dLCBbJ2xvbmdtYXBzdG8nLCBbMTAyMzZdXSwgWydsb25ncmlnaHRhcnJvdycsIFsxMDIzMF1dLCBbJ0xvbmdSaWdodEFycm93JywgWzEwMjMwXV0sIFsnTG9uZ3JpZ2h0YXJyb3cnLCBbMTAyMzNdXSwgWydsb29wYXJyb3dsZWZ0JywgWzg2MTldXSwgWydsb29wYXJyb3dyaWdodCcsIFs4NjIwXV0sIFsnbG9wYXInLCBbMTA2MjldXSwgWydMb3BmJywgWzEyMDEzMV1dLCBbJ2xvcGYnLCBbMTIwMTU3XV0sIFsnbG9wbHVzJywgWzEwNzk3XV0sIFsnbG90aW1lcycsIFsxMDgwNF1dLCBbJ2xvd2FzdCcsIFs4NzI3XV0sIFsnbG93YmFyJywgWzk1XV0sIFsnTG93ZXJMZWZ0QXJyb3cnLCBbODYwMV1dLCBbJ0xvd2VyUmlnaHRBcnJvdycsIFs4NjAwXV0sIFsnbG96JywgWzk2NzRdXSwgWydsb3plbmdlJywgWzk2NzRdXSwgWydsb3pmJywgWzEwNzMxXV0sIFsnbHBhcicsIFs0MF1dLCBbJ2xwYXJsdCcsIFsxMDY0M11dLCBbJ2xyYXJyJywgWzg2NDZdXSwgWydscmNvcm5lcicsIFs4OTkxXV0sIFsnbHJoYXInLCBbODY1MV1dLCBbJ2xyaGFyZCcsIFsxMDYwNV1dLCBbJ2xybScsIFs4MjA2XV0sIFsnbHJ0cmknLCBbODg5NV1dLCBbJ2xzYXF1bycsIFs4MjQ5XV0sIFsnbHNjcicsIFsxMjAwMDFdXSwgWydMc2NyJywgWzg0NjZdXSwgWydsc2gnLCBbODYyNF1dLCBbJ0xzaCcsIFs4NjI0XV0sIFsnbHNpbScsIFs4ODE4XV0sIFsnbHNpbWUnLCBbMTA4OTNdXSwgWydsc2ltZycsIFsxMDg5NV1dLCBbJ2xzcWInLCBbOTFdXSwgWydsc3F1bycsIFs4MjE2XV0sIFsnbHNxdW9yJywgWzgyMThdXSwgWydMc3Ryb2snLCBbMzIxXV0sIFsnbHN0cm9rJywgWzMyMl1dLCBbJ2x0Y2MnLCBbMTA5MThdXSwgWydsdGNpcicsIFsxMDg3M11dLCBbJ2x0JywgWzYwXV0sIFsnTFQnLCBbNjBdXSwgWydMdCcsIFs4ODEwXV0sIFsnbHRkb3QnLCBbODkxOF1dLCBbJ2x0aHJlZScsIFs4OTA3XV0sIFsnbHRpbWVzJywgWzg5MDVdXSwgWydsdGxhcnInLCBbMTA2MTRdXSwgWydsdHF1ZXN0JywgWzEwODc1XV0sIFsnbHRyaScsIFs5NjY3XV0sIFsnbHRyaWUnLCBbODg4NF1dLCBbJ2x0cmlmJywgWzk2NjZdXSwgWydsdHJQYXInLCBbMTA2NDZdXSwgWydsdXJkc2hhcicsIFsxMDU3MF1dLCBbJ2x1cnVoYXInLCBbMTA1OThdXSwgWydsdmVydG5lcXEnLCBbODgwOCwgNjUwMjRdXSwgWydsdm5FJywgWzg4MDgsIDY1MDI0XV0sIFsnbWFjcicsIFsxNzVdXSwgWydtYWxlJywgWzk3OTRdXSwgWydtYWx0JywgWzEwMDE2XV0sIFsnbWFsdGVzZScsIFsxMDAxNl1dLCBbJ01hcCcsIFsxMDUwMV1dLCBbJ21hcCcsIFs4NjE0XV0sIFsnbWFwc3RvJywgWzg2MTRdXSwgWydtYXBzdG9kb3duJywgWzg2MTVdXSwgWydtYXBzdG9sZWZ0JywgWzg2MTJdXSwgWydtYXBzdG91cCcsIFs4NjEzXV0sIFsnbWFya2VyJywgWzk2NDZdXSwgWydtY29tbWEnLCBbMTA3OTNdXSwgWydNY3knLCBbMTA1Ml1dLCBbJ21jeScsIFsxMDg0XV0sIFsnbWRhc2gnLCBbODIxMl1dLCBbJ21ERG90JywgWzg3NjJdXSwgWydtZWFzdXJlZGFuZ2xlJywgWzg3MzddXSwgWydNZWRpdW1TcGFjZScsIFs4Mjg3XV0sIFsnTWVsbGludHJmJywgWzg0OTldXSwgWydNZnInLCBbMTIwMDgwXV0sIFsnbWZyJywgWzEyMDEwNl1dLCBbJ21obycsIFs4NDg3XV0sIFsnbWljcm8nLCBbMTgxXV0sIFsnbWlkYXN0JywgWzQyXV0sIFsnbWlkY2lyJywgWzEwOTkyXV0sIFsnbWlkJywgWzg3MzldXSwgWydtaWRkb3QnLCBbMTgzXV0sIFsnbWludXNiJywgWzg4NjNdXSwgWydtaW51cycsIFs4NzIyXV0sIFsnbWludXNkJywgWzg3NjBdXSwgWydtaW51c2R1JywgWzEwNzk0XV0sIFsnTWludXNQbHVzJywgWzg3MjNdXSwgWydtbGNwJywgWzEwOTcxXV0sIFsnbWxkcicsIFs4MjMwXV0sIFsnbW5wbHVzJywgWzg3MjNdXSwgWydtb2RlbHMnLCBbODg3MV1dLCBbJ01vcGYnLCBbMTIwMTMyXV0sIFsnbW9wZicsIFsxMjAxNThdXSwgWydtcCcsIFs4NzIzXV0sIFsnbXNjcicsIFsxMjAwMDJdXSwgWydNc2NyJywgWzg0OTldXSwgWydtc3Rwb3MnLCBbODc2Nl1dLCBbJ011JywgWzkyNF1dLCBbJ211JywgWzk1Nl1dLCBbJ211bHRpbWFwJywgWzg4ODhdXSwgWydtdW1hcCcsIFs4ODg4XV0sIFsnbmFibGEnLCBbODcxMV1dLCBbJ05hY3V0ZScsIFszMjNdXSwgWyduYWN1dGUnLCBbMzI0XV0sIFsnbmFuZycsIFs4NzM2LCA4NDAyXV0sIFsnbmFwJywgWzg3NzddXSwgWyduYXBFJywgWzEwODY0LCA4MjRdXSwgWyduYXBpZCcsIFs4Nzc5LCA4MjRdXSwgWyduYXBvcycsIFszMjldXSwgWyduYXBwcm94JywgWzg3NzddXSwgWyduYXR1cmFsJywgWzk4MzhdXSwgWyduYXR1cmFscycsIFs4NDY5XV0sIFsnbmF0dXInLCBbOTgzOF1dLCBbJ25ic3AnLCBbMTYwXV0sIFsnbmJ1bXAnLCBbODc4MiwgODI0XV0sIFsnbmJ1bXBlJywgWzg3ODMsIDgyNF1dLCBbJ25jYXAnLCBbMTA4MTldXSwgWydOY2Fyb24nLCBbMzI3XV0sIFsnbmNhcm9uJywgWzMyOF1dLCBbJ05jZWRpbCcsIFszMjVdXSwgWyduY2VkaWwnLCBbMzI2XV0sIFsnbmNvbmcnLCBbODc3NV1dLCBbJ25jb25nZG90JywgWzEwODYxLCA4MjRdXSwgWyduY3VwJywgWzEwODE4XV0sIFsnTmN5JywgWzEwNTNdXSwgWyduY3knLCBbMTA4NV1dLCBbJ25kYXNoJywgWzgyMTFdXSwgWyduZWFyaGsnLCBbMTA1MzJdXSwgWyduZWFycicsIFs4NTk5XV0sIFsnbmVBcnInLCBbODY2M11dLCBbJ25lYXJyb3cnLCBbODU5OV1dLCBbJ25lJywgWzg4MDBdXSwgWyduZWRvdCcsIFs4Nzg0LCA4MjRdXSwgWydOZWdhdGl2ZU1lZGl1bVNwYWNlJywgWzgyMDNdXSwgWydOZWdhdGl2ZVRoaWNrU3BhY2UnLCBbODIwM11dLCBbJ05lZ2F0aXZlVGhpblNwYWNlJywgWzgyMDNdXSwgWydOZWdhdGl2ZVZlcnlUaGluU3BhY2UnLCBbODIwM11dLCBbJ25lcXVpdicsIFs4ODAyXV0sIFsnbmVzZWFyJywgWzEwNTM2XV0sIFsnbmVzaW0nLCBbODc3MCwgODI0XV0sIFsnTmVzdGVkR3JlYXRlckdyZWF0ZXInLCBbODgxMV1dLCBbJ05lc3RlZExlc3NMZXNzJywgWzg4MTBdXSwgWyduZXhpc3QnLCBbODcwOF1dLCBbJ25leGlzdHMnLCBbODcwOF1dLCBbJ05mcicsIFsxMjAwODFdXSwgWyduZnInLCBbMTIwMTA3XV0sIFsnbmdFJywgWzg4MDcsIDgyNF1dLCBbJ25nZScsIFs4ODE3XV0sIFsnbmdlcScsIFs4ODE3XV0sIFsnbmdlcXEnLCBbODgwNywgODI0XV0sIFsnbmdlcXNsYW50JywgWzEwODc4LCA4MjRdXSwgWyduZ2VzJywgWzEwODc4LCA4MjRdXSwgWyduR2cnLCBbODkyMSwgODI0XV0sIFsnbmdzaW0nLCBbODgyMV1dLCBbJ25HdCcsIFs4ODExLCA4NDAyXV0sIFsnbmd0JywgWzg4MTVdXSwgWyduZ3RyJywgWzg4MTVdXSwgWyduR3R2JywgWzg4MTEsIDgyNF1dLCBbJ25oYXJyJywgWzg2MjJdXSwgWyduaEFycicsIFs4NjU0XV0sIFsnbmhwYXInLCBbMTA5OTRdXSwgWyduaScsIFs4NzE1XV0sIFsnbmlzJywgWzg5NTZdXSwgWyduaXNkJywgWzg5NTRdXSwgWyduaXYnLCBbODcxNV1dLCBbJ05KY3knLCBbMTAzNF1dLCBbJ25qY3knLCBbMTExNF1dLCBbJ25sYXJyJywgWzg2MDJdXSwgWydubEFycicsIFs4NjUzXV0sIFsnbmxkcicsIFs4MjI5XV0sIFsnbmxFJywgWzg4MDYsIDgyNF1dLCBbJ25sZScsIFs4ODE2XV0sIFsnbmxlZnRhcnJvdycsIFs4NjAyXV0sIFsnbkxlZnRhcnJvdycsIFs4NjUzXV0sIFsnbmxlZnRyaWdodGFycm93JywgWzg2MjJdXSwgWyduTGVmdHJpZ2h0YXJyb3cnLCBbODY1NF1dLCBbJ25sZXEnLCBbODgxNl1dLCBbJ25sZXFxJywgWzg4MDYsIDgyNF1dLCBbJ25sZXFzbGFudCcsIFsxMDg3NywgODI0XV0sIFsnbmxlcycsIFsxMDg3NywgODI0XV0sIFsnbmxlc3MnLCBbODgxNF1dLCBbJ25MbCcsIFs4OTIwLCA4MjRdXSwgWydubHNpbScsIFs4ODIwXV0sIFsnbkx0JywgWzg4MTAsIDg0MDJdXSwgWydubHQnLCBbODgxNF1dLCBbJ25sdHJpJywgWzg5MzhdXSwgWydubHRyaWUnLCBbODk0MF1dLCBbJ25MdHYnLCBbODgxMCwgODI0XV0sIFsnbm1pZCcsIFs4NzQwXV0sIFsnTm9CcmVhaycsIFs4Mjg4XV0sIFsnTm9uQnJlYWtpbmdTcGFjZScsIFsxNjBdXSwgWydub3BmJywgWzEyMDE1OV1dLCBbJ05vcGYnLCBbODQ2OV1dLCBbJ05vdCcsIFsxMDk4OF1dLCBbJ25vdCcsIFsxNzJdXSwgWydOb3RDb25ncnVlbnQnLCBbODgwMl1dLCBbJ05vdEN1cENhcCcsIFs4ODEzXV0sIFsnTm90RG91YmxlVmVydGljYWxCYXInLCBbODc0Ml1dLCBbJ05vdEVsZW1lbnQnLCBbODcxM11dLCBbJ05vdEVxdWFsJywgWzg4MDBdXSwgWydOb3RFcXVhbFRpbGRlJywgWzg3NzAsIDgyNF1dLCBbJ05vdEV4aXN0cycsIFs4NzA4XV0sIFsnTm90R3JlYXRlcicsIFs4ODE1XV0sIFsnTm90R3JlYXRlckVxdWFsJywgWzg4MTddXSwgWydOb3RHcmVhdGVyRnVsbEVxdWFsJywgWzg4MDcsIDgyNF1dLCBbJ05vdEdyZWF0ZXJHcmVhdGVyJywgWzg4MTEsIDgyNF1dLCBbJ05vdEdyZWF0ZXJMZXNzJywgWzg4MjVdXSwgWydOb3RHcmVhdGVyU2xhbnRFcXVhbCcsIFsxMDg3OCwgODI0XV0sIFsnTm90R3JlYXRlclRpbGRlJywgWzg4MjFdXSwgWydOb3RIdW1wRG93bkh1bXAnLCBbODc4MiwgODI0XV0sIFsnTm90SHVtcEVxdWFsJywgWzg3ODMsIDgyNF1dLCBbJ25vdGluJywgWzg3MTNdXSwgWydub3RpbmRvdCcsIFs4OTQ5LCA4MjRdXSwgWydub3RpbkUnLCBbODk1MywgODI0XV0sIFsnbm90aW52YScsIFs4NzEzXV0sIFsnbm90aW52YicsIFs4OTUxXV0sIFsnbm90aW52YycsIFs4OTUwXV0sIFsnTm90TGVmdFRyaWFuZ2xlQmFyJywgWzEwNzAzLCA4MjRdXSwgWydOb3RMZWZ0VHJpYW5nbGUnLCBbODkzOF1dLCBbJ05vdExlZnRUcmlhbmdsZUVxdWFsJywgWzg5NDBdXSwgWydOb3RMZXNzJywgWzg4MTRdXSwgWydOb3RMZXNzRXF1YWwnLCBbODgxNl1dLCBbJ05vdExlc3NHcmVhdGVyJywgWzg4MjRdXSwgWydOb3RMZXNzTGVzcycsIFs4ODEwLCA4MjRdXSwgWydOb3RMZXNzU2xhbnRFcXVhbCcsIFsxMDg3NywgODI0XV0sIFsnTm90TGVzc1RpbGRlJywgWzg4MjBdXSwgWydOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcicsIFsxMDkxNCwgODI0XV0sIFsnTm90TmVzdGVkTGVzc0xlc3MnLCBbMTA5MTMsIDgyNF1dLCBbJ25vdG5pJywgWzg3MTZdXSwgWydub3RuaXZhJywgWzg3MTZdXSwgWydub3RuaXZiJywgWzg5NThdXSwgWydub3RuaXZjJywgWzg5NTddXSwgWydOb3RQcmVjZWRlcycsIFs4ODMyXV0sIFsnTm90UHJlY2VkZXNFcXVhbCcsIFsxMDkyNywgODI0XV0sIFsnTm90UHJlY2VkZXNTbGFudEVxdWFsJywgWzg5MjhdXSwgWydOb3RSZXZlcnNlRWxlbWVudCcsIFs4NzE2XV0sIFsnTm90UmlnaHRUcmlhbmdsZUJhcicsIFsxMDcwNCwgODI0XV0sIFsnTm90UmlnaHRUcmlhbmdsZScsIFs4OTM5XV0sIFsnTm90UmlnaHRUcmlhbmdsZUVxdWFsJywgWzg5NDFdXSwgWydOb3RTcXVhcmVTdWJzZXQnLCBbODg0NywgODI0XV0sIFsnTm90U3F1YXJlU3Vic2V0RXF1YWwnLCBbODkzMF1dLCBbJ05vdFNxdWFyZVN1cGVyc2V0JywgWzg4NDgsIDgyNF1dLCBbJ05vdFNxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODkzMV1dLCBbJ05vdFN1YnNldCcsIFs4ODM0LCA4NDAyXV0sIFsnTm90U3Vic2V0RXF1YWwnLCBbODg0MF1dLCBbJ05vdFN1Y2NlZWRzJywgWzg4MzNdXSwgWydOb3RTdWNjZWVkc0VxdWFsJywgWzEwOTI4LCA4MjRdXSwgWydOb3RTdWNjZWVkc1NsYW50RXF1YWwnLCBbODkyOV1dLCBbJ05vdFN1Y2NlZWRzVGlsZGUnLCBbODgzMSwgODI0XV0sIFsnTm90U3VwZXJzZXQnLCBbODgzNSwgODQwMl1dLCBbJ05vdFN1cGVyc2V0RXF1YWwnLCBbODg0MV1dLCBbJ05vdFRpbGRlJywgWzg3NjldXSwgWydOb3RUaWxkZUVxdWFsJywgWzg3NzJdXSwgWydOb3RUaWxkZUZ1bGxFcXVhbCcsIFs4Nzc1XV0sIFsnTm90VGlsZGVUaWxkZScsIFs4Nzc3XV0sIFsnTm90VmVydGljYWxCYXInLCBbODc0MF1dLCBbJ25wYXJhbGxlbCcsIFs4NzQyXV0sIFsnbnBhcicsIFs4NzQyXV0sIFsnbnBhcnNsJywgWzExMDA1LCA4NDIxXV0sIFsnbnBhcnQnLCBbODcwNiwgODI0XV0sIFsnbnBvbGludCcsIFsxMDc3Ml1dLCBbJ25wcicsIFs4ODMyXV0sIFsnbnByY3VlJywgWzg5MjhdXSwgWyducHJlYycsIFs4ODMyXV0sIFsnbnByZWNlcScsIFsxMDkyNywgODI0XV0sIFsnbnByZScsIFsxMDkyNywgODI0XV0sIFsnbnJhcnJjJywgWzEwNTQ3LCA4MjRdXSwgWyducmFycicsIFs4NjAzXV0sIFsnbnJBcnInLCBbODY1NV1dLCBbJ25yYXJydycsIFs4NjA1LCA4MjRdXSwgWyducmlnaHRhcnJvdycsIFs4NjAzXV0sIFsnblJpZ2h0YXJyb3cnLCBbODY1NV1dLCBbJ25ydHJpJywgWzg5MzldXSwgWyducnRyaWUnLCBbODk0MV1dLCBbJ25zYycsIFs4ODMzXV0sIFsnbnNjY3VlJywgWzg5MjldXSwgWyduc2NlJywgWzEwOTI4LCA4MjRdXSwgWydOc2NyJywgWzExOTk3N11dLCBbJ25zY3InLCBbMTIwMDAzXV0sIFsnbnNob3J0bWlkJywgWzg3NDBdXSwgWyduc2hvcnRwYXJhbGxlbCcsIFs4NzQyXV0sIFsnbnNpbScsIFs4NzY5XV0sIFsnbnNpbWUnLCBbODc3Ml1dLCBbJ25zaW1lcScsIFs4NzcyXV0sIFsnbnNtaWQnLCBbODc0MF1dLCBbJ25zcGFyJywgWzg3NDJdXSwgWyduc3FzdWJlJywgWzg5MzBdXSwgWyduc3FzdXBlJywgWzg5MzFdXSwgWyduc3ViJywgWzg4MzZdXSwgWyduc3ViRScsIFsxMDk0OSwgODI0XV0sIFsnbnN1YmUnLCBbODg0MF1dLCBbJ25zdWJzZXQnLCBbODgzNCwgODQwMl1dLCBbJ25zdWJzZXRlcScsIFs4ODQwXV0sIFsnbnN1YnNldGVxcScsIFsxMDk0OSwgODI0XV0sIFsnbnN1Y2MnLCBbODgzM11dLCBbJ25zdWNjZXEnLCBbMTA5MjgsIDgyNF1dLCBbJ25zdXAnLCBbODgzN11dLCBbJ25zdXBFJywgWzEwOTUwLCA4MjRdXSwgWyduc3VwZScsIFs4ODQxXV0sIFsnbnN1cHNldCcsIFs4ODM1LCA4NDAyXV0sIFsnbnN1cHNldGVxJywgWzg4NDFdXSwgWyduc3Vwc2V0ZXFxJywgWzEwOTUwLCA4MjRdXSwgWydudGdsJywgWzg4MjVdXSwgWydOdGlsZGUnLCBbMjA5XV0sIFsnbnRpbGRlJywgWzI0MV1dLCBbJ250bGcnLCBbODgyNF1dLCBbJ250cmlhbmdsZWxlZnQnLCBbODkzOF1dLCBbJ250cmlhbmdsZWxlZnRlcScsIFs4OTQwXV0sIFsnbnRyaWFuZ2xlcmlnaHQnLCBbODkzOV1dLCBbJ250cmlhbmdsZXJpZ2h0ZXEnLCBbODk0MV1dLCBbJ051JywgWzkyNV1dLCBbJ251JywgWzk1N11dLCBbJ251bScsIFszNV1dLCBbJ251bWVybycsIFs4NDcwXV0sIFsnbnVtc3AnLCBbODE5OV1dLCBbJ252YXAnLCBbODc4MSwgODQwMl1dLCBbJ252ZGFzaCcsIFs4ODc2XV0sIFsnbnZEYXNoJywgWzg4NzddXSwgWyduVmRhc2gnLCBbODg3OF1dLCBbJ25WRGFzaCcsIFs4ODc5XV0sIFsnbnZnZScsIFs4ODA1LCA4NDAyXV0sIFsnbnZndCcsIFs2MiwgODQwMl1dLCBbJ252SGFycicsIFsxMDUwMF1dLCBbJ252aW5maW4nLCBbMTA3MThdXSwgWydudmxBcnInLCBbMTA0OThdXSwgWydudmxlJywgWzg4MDQsIDg0MDJdXSwgWydudmx0JywgWzYwLCA4NDAyXV0sIFsnbnZsdHJpZScsIFs4ODg0LCA4NDAyXV0sIFsnbnZyQXJyJywgWzEwNDk5XV0sIFsnbnZydHJpZScsIFs4ODg1LCA4NDAyXV0sIFsnbnZzaW0nLCBbODc2NCwgODQwMl1dLCBbJ253YXJoaycsIFsxMDUzMV1dLCBbJ253YXJyJywgWzg1OThdXSwgWydud0FycicsIFs4NjYyXV0sIFsnbndhcnJvdycsIFs4NTk4XV0sIFsnbnduZWFyJywgWzEwNTM1XV0sIFsnT2FjdXRlJywgWzIxMV1dLCBbJ29hY3V0ZScsIFsyNDNdXSwgWydvYXN0JywgWzg4NTldXSwgWydPY2lyYycsIFsyMTJdXSwgWydvY2lyYycsIFsyNDRdXSwgWydvY2lyJywgWzg4NThdXSwgWydPY3knLCBbMTA1NF1dLCBbJ29jeScsIFsxMDg2XV0sIFsnb2Rhc2gnLCBbODg2MV1dLCBbJ09kYmxhYycsIFszMzZdXSwgWydvZGJsYWMnLCBbMzM3XV0sIFsnb2RpdicsIFsxMDgwOF1dLCBbJ29kb3QnLCBbODg1N11dLCBbJ29kc29sZCcsIFsxMDY4NF1dLCBbJ09FbGlnJywgWzMzOF1dLCBbJ29lbGlnJywgWzMzOV1dLCBbJ29mY2lyJywgWzEwNjg3XV0sIFsnT2ZyJywgWzEyMDA4Ml1dLCBbJ29mcicsIFsxMjAxMDhdXSwgWydvZ29uJywgWzczMV1dLCBbJ09ncmF2ZScsIFsyMTBdXSwgWydvZ3JhdmUnLCBbMjQyXV0sIFsnb2d0JywgWzEwNjg5XV0sIFsnb2hiYXInLCBbMTA2NzddXSwgWydvaG0nLCBbOTM3XV0sIFsnb2ludCcsIFs4NzUwXV0sIFsnb2xhcnInLCBbODYzNF1dLCBbJ29sY2lyJywgWzEwNjg2XV0sIFsnb2xjcm9zcycsIFsxMDY4M11dLCBbJ29saW5lJywgWzgyNTRdXSwgWydvbHQnLCBbMTA2ODhdXSwgWydPbWFjcicsIFszMzJdXSwgWydvbWFjcicsIFszMzNdXSwgWydPbWVnYScsIFs5MzddXSwgWydvbWVnYScsIFs5NjldXSwgWydPbWljcm9uJywgWzkyN11dLCBbJ29taWNyb24nLCBbOTU5XV0sIFsnb21pZCcsIFsxMDY3OF1dLCBbJ29taW51cycsIFs4ODU0XV0sIFsnT29wZicsIFsxMjAxMzRdXSwgWydvb3BmJywgWzEyMDE2MF1dLCBbJ29wYXInLCBbMTA2NzldXSwgWydPcGVuQ3VybHlEb3VibGVRdW90ZScsIFs4MjIwXV0sIFsnT3BlbkN1cmx5UXVvdGUnLCBbODIxNl1dLCBbJ29wZXJwJywgWzEwNjgxXV0sIFsnb3BsdXMnLCBbODg1M11dLCBbJ29yYXJyJywgWzg2MzVdXSwgWydPcicsIFsxMDgzNl1dLCBbJ29yJywgWzg3NDRdXSwgWydvcmQnLCBbMTA4NDVdXSwgWydvcmRlcicsIFs4NTAwXV0sIFsnb3JkZXJvZicsIFs4NTAwXV0sIFsnb3JkZicsIFsxNzBdXSwgWydvcmRtJywgWzE4Nl1dLCBbJ29yaWdvZicsIFs4ODg2XV0sIFsnb3JvcicsIFsxMDgzOF1dLCBbJ29yc2xvcGUnLCBbMTA4MzldXSwgWydvcnYnLCBbMTA4NDNdXSwgWydvUycsIFs5NDE2XV0sIFsnT3NjcicsIFsxMTk5NzhdXSwgWydvc2NyJywgWzg1MDBdXSwgWydPc2xhc2gnLCBbMjE2XV0sIFsnb3NsYXNoJywgWzI0OF1dLCBbJ29zb2wnLCBbODg1Nl1dLCBbJ090aWxkZScsIFsyMTNdXSwgWydvdGlsZGUnLCBbMjQ1XV0sIFsnb3RpbWVzYXMnLCBbMTA4MDZdXSwgWydPdGltZXMnLCBbMTA4MDddXSwgWydvdGltZXMnLCBbODg1NV1dLCBbJ091bWwnLCBbMjE0XV0sIFsnb3VtbCcsIFsyNDZdXSwgWydvdmJhcicsIFs5MDIxXV0sIFsnT3ZlckJhcicsIFs4MjU0XV0sIFsnT3ZlckJyYWNlJywgWzkxODJdXSwgWydPdmVyQnJhY2tldCcsIFs5MTQwXV0sIFsnT3ZlclBhcmVudGhlc2lzJywgWzkxODBdXSwgWydwYXJhJywgWzE4Ml1dLCBbJ3BhcmFsbGVsJywgWzg3NDFdXSwgWydwYXInLCBbODc0MV1dLCBbJ3BhcnNpbScsIFsxMDk5NV1dLCBbJ3BhcnNsJywgWzExMDA1XV0sIFsncGFydCcsIFs4NzA2XV0sIFsnUGFydGlhbEQnLCBbODcwNl1dLCBbJ1BjeScsIFsxMDU1XV0sIFsncGN5JywgWzEwODddXSwgWydwZXJjbnQnLCBbMzddXSwgWydwZXJpb2QnLCBbNDZdXSwgWydwZXJtaWwnLCBbODI0MF1dLCBbJ3BlcnAnLCBbODg2OV1dLCBbJ3BlcnRlbmsnLCBbODI0MV1dLCBbJ1BmcicsIFsxMjAwODNdXSwgWydwZnInLCBbMTIwMTA5XV0sIFsnUGhpJywgWzkzNF1dLCBbJ3BoaScsIFs5NjZdXSwgWydwaGl2JywgWzk4MV1dLCBbJ3BobW1hdCcsIFs4NDk5XV0sIFsncGhvbmUnLCBbOTc0Ml1dLCBbJ1BpJywgWzkyOF1dLCBbJ3BpJywgWzk2MF1dLCBbJ3BpdGNoZm9yaycsIFs4OTE2XV0sIFsncGl2JywgWzk4Ml1dLCBbJ3BsYW5jaycsIFs4NDYzXV0sIFsncGxhbmNraCcsIFs4NDYyXV0sIFsncGxhbmt2JywgWzg0NjNdXSwgWydwbHVzYWNpcicsIFsxMDc4N11dLCBbJ3BsdXNiJywgWzg4NjJdXSwgWydwbHVzY2lyJywgWzEwNzg2XV0sIFsncGx1cycsIFs0M11dLCBbJ3BsdXNkbycsIFs4NzI0XV0sIFsncGx1c2R1JywgWzEwNzg5XV0sIFsncGx1c2UnLCBbMTA4NjZdXSwgWydQbHVzTWludXMnLCBbMTc3XV0sIFsncGx1c21uJywgWzE3N11dLCBbJ3BsdXNzaW0nLCBbMTA3OTBdXSwgWydwbHVzdHdvJywgWzEwNzkxXV0sIFsncG0nLCBbMTc3XV0sIFsnUG9pbmNhcmVwbGFuZScsIFs4NDYwXV0sIFsncG9pbnRpbnQnLCBbMTA3NzNdXSwgWydwb3BmJywgWzEyMDE2MV1dLCBbJ1BvcGYnLCBbODQ3M11dLCBbJ3BvdW5kJywgWzE2M11dLCBbJ3ByYXAnLCBbMTA5MzVdXSwgWydQcicsIFsxMDkzOV1dLCBbJ3ByJywgWzg4MjZdXSwgWydwcmN1ZScsIFs4ODI4XV0sIFsncHJlY2FwcHJveCcsIFsxMDkzNV1dLCBbJ3ByZWMnLCBbODgyNl1dLCBbJ3ByZWNjdXJseWVxJywgWzg4MjhdXSwgWydQcmVjZWRlcycsIFs4ODI2XV0sIFsnUHJlY2VkZXNFcXVhbCcsIFsxMDkyN11dLCBbJ1ByZWNlZGVzU2xhbnRFcXVhbCcsIFs4ODI4XV0sIFsnUHJlY2VkZXNUaWxkZScsIFs4ODMwXV0sIFsncHJlY2VxJywgWzEwOTI3XV0sIFsncHJlY25hcHByb3gnLCBbMTA5MzddXSwgWydwcmVjbmVxcScsIFsxMDkzM11dLCBbJ3ByZWNuc2ltJywgWzg5MzZdXSwgWydwcmUnLCBbMTA5MjddXSwgWydwckUnLCBbMTA5MzFdXSwgWydwcmVjc2ltJywgWzg4MzBdXSwgWydwcmltZScsIFs4MjQyXV0sIFsnUHJpbWUnLCBbODI0M11dLCBbJ3ByaW1lcycsIFs4NDczXV0sIFsncHJuYXAnLCBbMTA5MzddXSwgWydwcm5FJywgWzEwOTMzXV0sIFsncHJuc2ltJywgWzg5MzZdXSwgWydwcm9kJywgWzg3MTldXSwgWydQcm9kdWN0JywgWzg3MTldXSwgWydwcm9mYWxhcicsIFs5MDA2XV0sIFsncHJvZmxpbmUnLCBbODk3OF1dLCBbJ3Byb2ZzdXJmJywgWzg5NzldXSwgWydwcm9wJywgWzg3MzNdXSwgWydQcm9wb3J0aW9uYWwnLCBbODczM11dLCBbJ1Byb3BvcnRpb24nLCBbODc1OV1dLCBbJ3Byb3B0bycsIFs4NzMzXV0sIFsncHJzaW0nLCBbODgzMF1dLCBbJ3BydXJlbCcsIFs4ODgwXV0sIFsnUHNjcicsIFsxMTk5NzldXSwgWydwc2NyJywgWzEyMDAwNV1dLCBbJ1BzaScsIFs5MzZdXSwgWydwc2knLCBbOTY4XV0sIFsncHVuY3NwJywgWzgyMDBdXSwgWydRZnInLCBbMTIwMDg0XV0sIFsncWZyJywgWzEyMDExMF1dLCBbJ3FpbnQnLCBbMTA3NjRdXSwgWydxb3BmJywgWzEyMDE2Ml1dLCBbJ1FvcGYnLCBbODQ3NF1dLCBbJ3FwcmltZScsIFs4Mjc5XV0sIFsnUXNjcicsIFsxMTk5ODBdXSwgWydxc2NyJywgWzEyMDAwNl1dLCBbJ3F1YXRlcm5pb25zJywgWzg0NjFdXSwgWydxdWF0aW50JywgWzEwNzc0XV0sIFsncXVlc3QnLCBbNjNdXSwgWydxdWVzdGVxJywgWzg3OTldXSwgWydxdW90JywgWzM0XV0sIFsnUVVPVCcsIFszNF1dLCBbJ3JBYXJyJywgWzg2NjddXSwgWydyYWNlJywgWzg3NjUsIDgxN11dLCBbJ1JhY3V0ZScsIFszNDBdXSwgWydyYWN1dGUnLCBbMzQxXV0sIFsncmFkaWMnLCBbODczMF1dLCBbJ3JhZW1wdHl2JywgWzEwNjc1XV0sIFsncmFuZycsIFsxMDIxN11dLCBbJ1JhbmcnLCBbMTAyMTldXSwgWydyYW5nZCcsIFsxMDY0Ml1dLCBbJ3JhbmdlJywgWzEwNjYxXV0sIFsncmFuZ2xlJywgWzEwMjE3XV0sIFsncmFxdW8nLCBbMTg3XV0sIFsncmFycmFwJywgWzEwNjEzXV0sIFsncmFycmInLCBbODY3N11dLCBbJ3JhcnJiZnMnLCBbMTA1MjhdXSwgWydyYXJyYycsIFsxMDU0N11dLCBbJ3JhcnInLCBbODU5NF1dLCBbJ1JhcnInLCBbODYwOF1dLCBbJ3JBcnInLCBbODY1OF1dLCBbJ3JhcnJmcycsIFsxMDUyNl1dLCBbJ3JhcnJoaycsIFs4NjE4XV0sIFsncmFycmxwJywgWzg2MjBdXSwgWydyYXJycGwnLCBbMTA1NjVdXSwgWydyYXJyc2ltJywgWzEwNjEyXV0sIFsnUmFycnRsJywgWzEwNTE4XV0sIFsncmFycnRsJywgWzg2MTFdXSwgWydyYXJydycsIFs4NjA1XV0sIFsncmF0YWlsJywgWzEwNTIyXV0sIFsnckF0YWlsJywgWzEwNTI0XV0sIFsncmF0aW8nLCBbODc1OF1dLCBbJ3JhdGlvbmFscycsIFs4NDc0XV0sIFsncmJhcnInLCBbMTA1MDldXSwgWydyQmFycicsIFsxMDUxMV1dLCBbJ1JCYXJyJywgWzEwNTEyXV0sIFsncmJicmsnLCBbMTAwOTldXSwgWydyYnJhY2UnLCBbMTI1XV0sIFsncmJyYWNrJywgWzkzXV0sIFsncmJya2UnLCBbMTA2MzZdXSwgWydyYnJrc2xkJywgWzEwNjM4XV0sIFsncmJya3NsdScsIFsxMDY0MF1dLCBbJ1JjYXJvbicsIFszNDRdXSwgWydyY2Fyb24nLCBbMzQ1XV0sIFsnUmNlZGlsJywgWzM0Ml1dLCBbJ3JjZWRpbCcsIFszNDNdXSwgWydyY2VpbCcsIFs4OTY5XV0sIFsncmN1YicsIFsxMjVdXSwgWydSY3knLCBbMTA1Nl1dLCBbJ3JjeScsIFsxMDg4XV0sIFsncmRjYScsIFsxMDU1MV1dLCBbJ3JkbGRoYXInLCBbMTA2MDFdXSwgWydyZHF1bycsIFs4MjIxXV0sIFsncmRxdW9yJywgWzgyMjFdXSwgWydyZHNoJywgWzg2MjddXSwgWydyZWFsJywgWzg0NzZdXSwgWydyZWFsaW5lJywgWzg0NzVdXSwgWydyZWFscGFydCcsIFs4NDc2XV0sIFsncmVhbHMnLCBbODQ3N11dLCBbJ1JlJywgWzg0NzZdXSwgWydyZWN0JywgWzk2NDVdXSwgWydyZWcnLCBbMTc0XV0sIFsnUkVHJywgWzE3NF1dLCBbJ1JldmVyc2VFbGVtZW50JywgWzg3MTVdXSwgWydSZXZlcnNlRXF1aWxpYnJpdW0nLCBbODY1MV1dLCBbJ1JldmVyc2VVcEVxdWlsaWJyaXVtJywgWzEwNjA3XV0sIFsncmZpc2h0JywgWzEwNjIxXV0sIFsncmZsb29yJywgWzg5NzFdXSwgWydyZnInLCBbMTIwMTExXV0sIFsnUmZyJywgWzg0NzZdXSwgWydySGFyJywgWzEwNTk2XV0sIFsncmhhcmQnLCBbODY0MV1dLCBbJ3JoYXJ1JywgWzg2NDBdXSwgWydyaGFydWwnLCBbMTA2MDRdXSwgWydSaG8nLCBbOTI5XV0sIFsncmhvJywgWzk2MV1dLCBbJ3Job3YnLCBbMTAwOV1dLCBbJ1JpZ2h0QW5nbGVCcmFja2V0JywgWzEwMjE3XV0sIFsnUmlnaHRBcnJvd0JhcicsIFs4Njc3XV0sIFsncmlnaHRhcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnUmlnaHRhcnJvdycsIFs4NjU4XV0sIFsnUmlnaHRBcnJvd0xlZnRBcnJvdycsIFs4NjQ0XV0sIFsncmlnaHRhcnJvd3RhaWwnLCBbODYxMV1dLCBbJ1JpZ2h0Q2VpbGluZycsIFs4OTY5XV0sIFsnUmlnaHREb3VibGVCcmFja2V0JywgWzEwMjE1XV0sIFsnUmlnaHREb3duVGVlVmVjdG9yJywgWzEwNTg5XV0sIFsnUmlnaHREb3duVmVjdG9yQmFyJywgWzEwNTgxXV0sIFsnUmlnaHREb3duVmVjdG9yJywgWzg2NDJdXSwgWydSaWdodEZsb29yJywgWzg5NzFdXSwgWydyaWdodGhhcnBvb25kb3duJywgWzg2NDFdXSwgWydyaWdodGhhcnBvb251cCcsIFs4NjQwXV0sIFsncmlnaHRsZWZ0YXJyb3dzJywgWzg2NDRdXSwgWydyaWdodGxlZnRoYXJwb29ucycsIFs4NjUyXV0sIFsncmlnaHRyaWdodGFycm93cycsIFs4NjQ5XV0sIFsncmlnaHRzcXVpZ2Fycm93JywgWzg2MDVdXSwgWydSaWdodFRlZUFycm93JywgWzg2MTRdXSwgWydSaWdodFRlZScsIFs4ODY2XV0sIFsnUmlnaHRUZWVWZWN0b3InLCBbMTA1ODddXSwgWydyaWdodHRocmVldGltZXMnLCBbODkwOF1dLCBbJ1JpZ2h0VHJpYW5nbGVCYXInLCBbMTA3MDRdXSwgWydSaWdodFRyaWFuZ2xlJywgWzg4ODNdXSwgWydSaWdodFRyaWFuZ2xlRXF1YWwnLCBbODg4NV1dLCBbJ1JpZ2h0VXBEb3duVmVjdG9yJywgWzEwNTc1XV0sIFsnUmlnaHRVcFRlZVZlY3RvcicsIFsxMDU4OF1dLCBbJ1JpZ2h0VXBWZWN0b3JCYXInLCBbMTA1ODBdXSwgWydSaWdodFVwVmVjdG9yJywgWzg2MzhdXSwgWydSaWdodFZlY3RvckJhcicsIFsxMDU3OV1dLCBbJ1JpZ2h0VmVjdG9yJywgWzg2NDBdXSwgWydyaW5nJywgWzczMF1dLCBbJ3Jpc2luZ2RvdHNlcScsIFs4Nzg3XV0sIFsncmxhcnInLCBbODY0NF1dLCBbJ3JsaGFyJywgWzg2NTJdXSwgWydybG0nLCBbODIwN11dLCBbJ3Jtb3VzdGFjaGUnLCBbOTEzN11dLCBbJ3Jtb3VzdCcsIFs5MTM3XV0sIFsncm5taWQnLCBbMTA5OTBdXSwgWydyb2FuZycsIFsxMDIyMV1dLCBbJ3JvYXJyJywgWzg3MDJdXSwgWydyb2JyaycsIFsxMDIxNV1dLCBbJ3JvcGFyJywgWzEwNjMwXV0sIFsncm9wZicsIFsxMjAxNjNdXSwgWydSb3BmJywgWzg0NzddXSwgWydyb3BsdXMnLCBbMTA3OThdXSwgWydyb3RpbWVzJywgWzEwODA1XV0sIFsnUm91bmRJbXBsaWVzJywgWzEwNjA4XV0sIFsncnBhcicsIFs0MV1dLCBbJ3JwYXJndCcsIFsxMDY0NF1dLCBbJ3JwcG9saW50JywgWzEwNzcwXV0sIFsncnJhcnInLCBbODY0OV1dLCBbJ1JyaWdodGFycm93JywgWzg2NjddXSwgWydyc2FxdW8nLCBbODI1MF1dLCBbJ3JzY3InLCBbMTIwMDA3XV0sIFsnUnNjcicsIFs4NDc1XV0sIFsncnNoJywgWzg2MjVdXSwgWydSc2gnLCBbODYyNV1dLCBbJ3JzcWInLCBbOTNdXSwgWydyc3F1bycsIFs4MjE3XV0sIFsncnNxdW9yJywgWzgyMTddXSwgWydydGhyZWUnLCBbODkwOF1dLCBbJ3J0aW1lcycsIFs4OTA2XV0sIFsncnRyaScsIFs5NjU3XV0sIFsncnRyaWUnLCBbODg4NV1dLCBbJ3J0cmlmJywgWzk2NTZdXSwgWydydHJpbHRyaScsIFsxMDcwMl1dLCBbJ1J1bGVEZWxheWVkJywgWzEwNzQwXV0sIFsncnVsdWhhcicsIFsxMDYwMF1dLCBbJ3J4JywgWzg0NzhdXSwgWydTYWN1dGUnLCBbMzQ2XV0sIFsnc2FjdXRlJywgWzM0N11dLCBbJ3NicXVvJywgWzgyMThdXSwgWydzY2FwJywgWzEwOTM2XV0sIFsnU2Nhcm9uJywgWzM1Ml1dLCBbJ3NjYXJvbicsIFszNTNdXSwgWydTYycsIFsxMDk0MF1dLCBbJ3NjJywgWzg4MjddXSwgWydzY2N1ZScsIFs4ODI5XV0sIFsnc2NlJywgWzEwOTI4XV0sIFsnc2NFJywgWzEwOTMyXV0sIFsnU2NlZGlsJywgWzM1MF1dLCBbJ3NjZWRpbCcsIFszNTFdXSwgWydTY2lyYycsIFszNDhdXSwgWydzY2lyYycsIFszNDldXSwgWydzY25hcCcsIFsxMDkzOF1dLCBbJ3NjbkUnLCBbMTA5MzRdXSwgWydzY25zaW0nLCBbODkzN11dLCBbJ3NjcG9saW50JywgWzEwNzcxXV0sIFsnc2NzaW0nLCBbODgzMV1dLCBbJ1NjeScsIFsxMDU3XV0sIFsnc2N5JywgWzEwODldXSwgWydzZG90YicsIFs4ODY1XV0sIFsnc2RvdCcsIFs4OTAxXV0sIFsnc2RvdGUnLCBbMTA4NTRdXSwgWydzZWFyaGsnLCBbMTA1MzNdXSwgWydzZWFycicsIFs4NjAwXV0sIFsnc2VBcnInLCBbODY2NF1dLCBbJ3NlYXJyb3cnLCBbODYwMF1dLCBbJ3NlY3QnLCBbMTY3XV0sIFsnc2VtaScsIFs1OV1dLCBbJ3Nlc3dhcicsIFsxMDUzN11dLCBbJ3NldG1pbnVzJywgWzg3MjZdXSwgWydzZXRtbicsIFs4NzI2XV0sIFsnc2V4dCcsIFsxMDAzOF1dLCBbJ1NmcicsIFsxMjAwODZdXSwgWydzZnInLCBbMTIwMTEyXV0sIFsnc2Zyb3duJywgWzg5OTRdXSwgWydzaGFycCcsIFs5ODM5XV0sIFsnU0hDSGN5JywgWzEwNjVdXSwgWydzaGNoY3knLCBbMTA5N11dLCBbJ1NIY3knLCBbMTA2NF1dLCBbJ3NoY3knLCBbMTA5Nl1dLCBbJ1Nob3J0RG93bkFycm93JywgWzg1OTVdXSwgWydTaG9ydExlZnRBcnJvdycsIFs4NTkyXV0sIFsnc2hvcnRtaWQnLCBbODczOV1dLCBbJ3Nob3J0cGFyYWxsZWwnLCBbODc0MV1dLCBbJ1Nob3J0UmlnaHRBcnJvdycsIFs4NTk0XV0sIFsnU2hvcnRVcEFycm93JywgWzg1OTNdXSwgWydzaHknLCBbMTczXV0sIFsnU2lnbWEnLCBbOTMxXV0sIFsnc2lnbWEnLCBbOTYzXV0sIFsnc2lnbWFmJywgWzk2Ml1dLCBbJ3NpZ21hdicsIFs5NjJdXSwgWydzaW0nLCBbODc2NF1dLCBbJ3NpbWRvdCcsIFsxMDg1OF1dLCBbJ3NpbWUnLCBbODc3MV1dLCBbJ3NpbWVxJywgWzg3NzFdXSwgWydzaW1nJywgWzEwOTEwXV0sIFsnc2ltZ0UnLCBbMTA5MTJdXSwgWydzaW1sJywgWzEwOTA5XV0sIFsnc2ltbEUnLCBbMTA5MTFdXSwgWydzaW1uZScsIFs4Nzc0XV0sIFsnc2ltcGx1cycsIFsxMDc4OF1dLCBbJ3NpbXJhcnInLCBbMTA2MTBdXSwgWydzbGFycicsIFs4NTkyXV0sIFsnU21hbGxDaXJjbGUnLCBbODcyOF1dLCBbJ3NtYWxsc2V0bWludXMnLCBbODcyNl1dLCBbJ3NtYXNocCcsIFsxMDgwM11dLCBbJ3NtZXBhcnNsJywgWzEwNzI0XV0sIFsnc21pZCcsIFs4NzM5XV0sIFsnc21pbGUnLCBbODk5NV1dLCBbJ3NtdCcsIFsxMDkyMl1dLCBbJ3NtdGUnLCBbMTA5MjRdXSwgWydzbXRlcycsIFsxMDkyNCwgNjUwMjRdXSwgWydTT0ZUY3knLCBbMTA2OF1dLCBbJ3NvZnRjeScsIFsxMTAwXV0sIFsnc29sYmFyJywgWzkwMjNdXSwgWydzb2xiJywgWzEwNjkyXV0sIFsnc29sJywgWzQ3XV0sIFsnU29wZicsIFsxMjAxMzhdXSwgWydzb3BmJywgWzEyMDE2NF1dLCBbJ3NwYWRlcycsIFs5ODI0XV0sIFsnc3BhZGVzdWl0JywgWzk4MjRdXSwgWydzcGFyJywgWzg3NDFdXSwgWydzcWNhcCcsIFs4ODUxXV0sIFsnc3FjYXBzJywgWzg4NTEsIDY1MDI0XV0sIFsnc3FjdXAnLCBbODg1Ml1dLCBbJ3NxY3VwcycsIFs4ODUyLCA2NTAyNF1dLCBbJ1NxcnQnLCBbODczMF1dLCBbJ3Nxc3ViJywgWzg4NDddXSwgWydzcXN1YmUnLCBbODg0OV1dLCBbJ3Nxc3Vic2V0JywgWzg4NDddXSwgWydzcXN1YnNldGVxJywgWzg4NDldXSwgWydzcXN1cCcsIFs4ODQ4XV0sIFsnc3FzdXBlJywgWzg4NTBdXSwgWydzcXN1cHNldCcsIFs4ODQ4XV0sIFsnc3FzdXBzZXRlcScsIFs4ODUwXV0sIFsnc3F1YXJlJywgWzk2MzNdXSwgWydTcXVhcmUnLCBbOTYzM11dLCBbJ1NxdWFyZUludGVyc2VjdGlvbicsIFs4ODUxXV0sIFsnU3F1YXJlU3Vic2V0JywgWzg4NDddXSwgWydTcXVhcmVTdWJzZXRFcXVhbCcsIFs4ODQ5XV0sIFsnU3F1YXJlU3VwZXJzZXQnLCBbODg0OF1dLCBbJ1NxdWFyZVN1cGVyc2V0RXF1YWwnLCBbODg1MF1dLCBbJ1NxdWFyZVVuaW9uJywgWzg4NTJdXSwgWydzcXVhcmYnLCBbOTY0Ml1dLCBbJ3NxdScsIFs5NjMzXV0sIFsnc3F1ZicsIFs5NjQyXV0sIFsnc3JhcnInLCBbODU5NF1dLCBbJ1NzY3InLCBbMTE5OTgyXV0sIFsnc3NjcicsIFsxMjAwMDhdXSwgWydzc2V0bW4nLCBbODcyNl1dLCBbJ3NzbWlsZScsIFs4OTk1XV0sIFsnc3N0YXJmJywgWzg5MDJdXSwgWydTdGFyJywgWzg5MDJdXSwgWydzdGFyJywgWzk3MzRdXSwgWydzdGFyZicsIFs5NzMzXV0sIFsnc3RyYWlnaHRlcHNpbG9uJywgWzEwMTNdXSwgWydzdHJhaWdodHBoaScsIFs5ODFdXSwgWydzdHJucycsIFsxNzVdXSwgWydzdWInLCBbODgzNF1dLCBbJ1N1YicsIFs4OTEyXV0sIFsnc3ViZG90JywgWzEwOTQxXV0sIFsnc3ViRScsIFsxMDk0OV1dLCBbJ3N1YmUnLCBbODgzOF1dLCBbJ3N1YmVkb3QnLCBbMTA5NDddXSwgWydzdWJtdWx0JywgWzEwOTQ1XV0sIFsnc3VibkUnLCBbMTA5NTVdXSwgWydzdWJuZScsIFs4ODQyXV0sIFsnc3VicGx1cycsIFsxMDk0M11dLCBbJ3N1YnJhcnInLCBbMTA2MTddXSwgWydzdWJzZXQnLCBbODgzNF1dLCBbJ1N1YnNldCcsIFs4OTEyXV0sIFsnc3Vic2V0ZXEnLCBbODgzOF1dLCBbJ3N1YnNldGVxcScsIFsxMDk0OV1dLCBbJ1N1YnNldEVxdWFsJywgWzg4MzhdXSwgWydzdWJzZXRuZXEnLCBbODg0Ml1dLCBbJ3N1YnNldG5lcXEnLCBbMTA5NTVdXSwgWydzdWJzaW0nLCBbMTA5NTFdXSwgWydzdWJzdWInLCBbMTA5NjVdXSwgWydzdWJzdXAnLCBbMTA5NjNdXSwgWydzdWNjYXBwcm94JywgWzEwOTM2XV0sIFsnc3VjYycsIFs4ODI3XV0sIFsnc3VjY2N1cmx5ZXEnLCBbODgyOV1dLCBbJ1N1Y2NlZWRzJywgWzg4MjddXSwgWydTdWNjZWVkc0VxdWFsJywgWzEwOTI4XV0sIFsnU3VjY2VlZHNTbGFudEVxdWFsJywgWzg4MjldXSwgWydTdWNjZWVkc1RpbGRlJywgWzg4MzFdXSwgWydzdWNjZXEnLCBbMTA5MjhdXSwgWydzdWNjbmFwcHJveCcsIFsxMDkzOF1dLCBbJ3N1Y2NuZXFxJywgWzEwOTM0XV0sIFsnc3VjY25zaW0nLCBbODkzN11dLCBbJ3N1Y2NzaW0nLCBbODgzMV1dLCBbJ1N1Y2hUaGF0JywgWzg3MTVdXSwgWydzdW0nLCBbODcyMV1dLCBbJ1N1bScsIFs4NzIxXV0sIFsnc3VuZycsIFs5ODM0XV0sIFsnc3VwMScsIFsxODVdXSwgWydzdXAyJywgWzE3OF1dLCBbJ3N1cDMnLCBbMTc5XV0sIFsnc3VwJywgWzg4MzVdXSwgWydTdXAnLCBbODkxM11dLCBbJ3N1cGRvdCcsIFsxMDk0Ml1dLCBbJ3N1cGRzdWInLCBbMTA5NjhdXSwgWydzdXBFJywgWzEwOTUwXV0sIFsnc3VwZScsIFs4ODM5XV0sIFsnc3VwZWRvdCcsIFsxMDk0OF1dLCBbJ1N1cGVyc2V0JywgWzg4MzVdXSwgWydTdXBlcnNldEVxdWFsJywgWzg4MzldXSwgWydzdXBoc29sJywgWzEwMTg1XV0sIFsnc3VwaHN1YicsIFsxMDk2N11dLCBbJ3N1cGxhcnInLCBbMTA2MTldXSwgWydzdXBtdWx0JywgWzEwOTQ2XV0sIFsnc3VwbkUnLCBbMTA5NTZdXSwgWydzdXBuZScsIFs4ODQzXV0sIFsnc3VwcGx1cycsIFsxMDk0NF1dLCBbJ3N1cHNldCcsIFs4ODM1XV0sIFsnU3Vwc2V0JywgWzg5MTNdXSwgWydzdXBzZXRlcScsIFs4ODM5XV0sIFsnc3Vwc2V0ZXFxJywgWzEwOTUwXV0sIFsnc3Vwc2V0bmVxJywgWzg4NDNdXSwgWydzdXBzZXRuZXFxJywgWzEwOTU2XV0sIFsnc3Vwc2ltJywgWzEwOTUyXV0sIFsnc3Vwc3ViJywgWzEwOTY0XV0sIFsnc3Vwc3VwJywgWzEwOTY2XV0sIFsnc3dhcmhrJywgWzEwNTM0XV0sIFsnc3dhcnInLCBbODYwMV1dLCBbJ3N3QXJyJywgWzg2NjVdXSwgWydzd2Fycm93JywgWzg2MDFdXSwgWydzd253YXInLCBbMTA1MzhdXSwgWydzemxpZycsIFsyMjNdXSwgWydUYWInLCBbOV1dLCBbJ3RhcmdldCcsIFs4OTgyXV0sIFsnVGF1JywgWzkzMl1dLCBbJ3RhdScsIFs5NjRdXSwgWyd0YnJrJywgWzkxNDBdXSwgWydUY2Fyb24nLCBbMzU2XV0sIFsndGNhcm9uJywgWzM1N11dLCBbJ1RjZWRpbCcsIFszNTRdXSwgWyd0Y2VkaWwnLCBbMzU1XV0sIFsnVGN5JywgWzEwNThdXSwgWyd0Y3knLCBbMTA5MF1dLCBbJ3Rkb3QnLCBbODQxMV1dLCBbJ3RlbHJlYycsIFs4OTgxXV0sIFsnVGZyJywgWzEyMDA4N11dLCBbJ3RmcicsIFsxMjAxMTNdXSwgWyd0aGVyZTQnLCBbODc1Nl1dLCBbJ3RoZXJlZm9yZScsIFs4NzU2XV0sIFsnVGhlcmVmb3JlJywgWzg3NTZdXSwgWydUaGV0YScsIFs5MjBdXSwgWyd0aGV0YScsIFs5NTJdXSwgWyd0aGV0YXN5bScsIFs5NzddXSwgWyd0aGV0YXYnLCBbOTc3XV0sIFsndGhpY2thcHByb3gnLCBbODc3Nl1dLCBbJ3RoaWNrc2ltJywgWzg3NjRdXSwgWydUaGlja1NwYWNlJywgWzgyODcsIDgyMDJdXSwgWydUaGluU3BhY2UnLCBbODIwMV1dLCBbJ3RoaW5zcCcsIFs4MjAxXV0sIFsndGhrYXAnLCBbODc3Nl1dLCBbJ3Roa3NpbScsIFs4NzY0XV0sIFsnVEhPUk4nLCBbMjIyXV0sIFsndGhvcm4nLCBbMjU0XV0sIFsndGlsZGUnLCBbNzMyXV0sIFsnVGlsZGUnLCBbODc2NF1dLCBbJ1RpbGRlRXF1YWwnLCBbODc3MV1dLCBbJ1RpbGRlRnVsbEVxdWFsJywgWzg3NzNdXSwgWydUaWxkZVRpbGRlJywgWzg3NzZdXSwgWyd0aW1lc2JhcicsIFsxMDgwMV1dLCBbJ3RpbWVzYicsIFs4ODY0XV0sIFsndGltZXMnLCBbMjE1XV0sIFsndGltZXNkJywgWzEwODAwXV0sIFsndGludCcsIFs4NzQ5XV0sIFsndG9lYScsIFsxMDUzNl1dLCBbJ3RvcGJvdCcsIFs5MDE0XV0sIFsndG9wY2lyJywgWzEwOTkzXV0sIFsndG9wJywgWzg4NjhdXSwgWydUb3BmJywgWzEyMDEzOV1dLCBbJ3RvcGYnLCBbMTIwMTY1XV0sIFsndG9wZm9yaycsIFsxMDk3MF1dLCBbJ3Rvc2EnLCBbMTA1MzddXSwgWyd0cHJpbWUnLCBbODI0NF1dLCBbJ3RyYWRlJywgWzg0ODJdXSwgWydUUkFERScsIFs4NDgyXV0sIFsndHJpYW5nbGUnLCBbOTY1M11dLCBbJ3RyaWFuZ2xlZG93bicsIFs5NjYzXV0sIFsndHJpYW5nbGVsZWZ0JywgWzk2NjddXSwgWyd0cmlhbmdsZWxlZnRlcScsIFs4ODg0XV0sIFsndHJpYW5nbGVxJywgWzg3OTZdXSwgWyd0cmlhbmdsZXJpZ2h0JywgWzk2NTddXSwgWyd0cmlhbmdsZXJpZ2h0ZXEnLCBbODg4NV1dLCBbJ3RyaWRvdCcsIFs5NzA4XV0sIFsndHJpZScsIFs4Nzk2XV0sIFsndHJpbWludXMnLCBbMTA4MTBdXSwgWydUcmlwbGVEb3QnLCBbODQxMV1dLCBbJ3RyaXBsdXMnLCBbMTA4MDldXSwgWyd0cmlzYicsIFsxMDcwMV1dLCBbJ3RyaXRpbWUnLCBbMTA4MTFdXSwgWyd0cnBleml1bScsIFs5MTg2XV0sIFsnVHNjcicsIFsxMTk5ODNdXSwgWyd0c2NyJywgWzEyMDAwOV1dLCBbJ1RTY3knLCBbMTA2Ml1dLCBbJ3RzY3knLCBbMTA5NF1dLCBbJ1RTSGN5JywgWzEwMzVdXSwgWyd0c2hjeScsIFsxMTE1XV0sIFsnVHN0cm9rJywgWzM1OF1dLCBbJ3RzdHJvaycsIFszNTldXSwgWyd0d2l4dCcsIFs4ODEyXV0sIFsndHdvaGVhZGxlZnRhcnJvdycsIFs4NjA2XV0sIFsndHdvaGVhZHJpZ2h0YXJyb3cnLCBbODYwOF1dLCBbJ1VhY3V0ZScsIFsyMThdXSwgWyd1YWN1dGUnLCBbMjUwXV0sIFsndWFycicsIFs4NTkzXV0sIFsnVWFycicsIFs4NjA3XV0sIFsndUFycicsIFs4NjU3XV0sIFsnVWFycm9jaXInLCBbMTA1NjldXSwgWydVYnJjeScsIFsxMDM4XV0sIFsndWJyY3knLCBbMTExOF1dLCBbJ1VicmV2ZScsIFszNjRdXSwgWyd1YnJldmUnLCBbMzY1XV0sIFsnVWNpcmMnLCBbMjE5XV0sIFsndWNpcmMnLCBbMjUxXV0sIFsnVWN5JywgWzEwNTldXSwgWyd1Y3knLCBbMTA5MV1dLCBbJ3VkYXJyJywgWzg2NDVdXSwgWydVZGJsYWMnLCBbMzY4XV0sIFsndWRibGFjJywgWzM2OV1dLCBbJ3VkaGFyJywgWzEwNjA2XV0sIFsndWZpc2h0JywgWzEwNjIyXV0sIFsnVWZyJywgWzEyMDA4OF1dLCBbJ3VmcicsIFsxMjAxMTRdXSwgWydVZ3JhdmUnLCBbMjE3XV0sIFsndWdyYXZlJywgWzI0OV1dLCBbJ3VIYXInLCBbMTA1OTVdXSwgWyd1aGFybCcsIFs4NjM5XV0sIFsndWhhcnInLCBbODYzOF1dLCBbJ3VoYmxrJywgWzk2MDBdXSwgWyd1bGNvcm4nLCBbODk4OF1dLCBbJ3VsY29ybmVyJywgWzg5ODhdXSwgWyd1bGNyb3AnLCBbODk3NV1dLCBbJ3VsdHJpJywgWzk3MjBdXSwgWydVbWFjcicsIFszNjJdXSwgWyd1bWFjcicsIFszNjNdXSwgWyd1bWwnLCBbMTY4XV0sIFsnVW5kZXJCYXInLCBbOTVdXSwgWydVbmRlckJyYWNlJywgWzkxODNdXSwgWydVbmRlckJyYWNrZXQnLCBbOTE0MV1dLCBbJ1VuZGVyUGFyZW50aGVzaXMnLCBbOTE4MV1dLCBbJ1VuaW9uJywgWzg4OTldXSwgWydVbmlvblBsdXMnLCBbODg0Nl1dLCBbJ1VvZ29uJywgWzM3MF1dLCBbJ3VvZ29uJywgWzM3MV1dLCBbJ1VvcGYnLCBbMTIwMTQwXV0sIFsndW9wZicsIFsxMjAxNjZdXSwgWydVcEFycm93QmFyJywgWzEwNTE0XV0sIFsndXBhcnJvdycsIFs4NTkzXV0sIFsnVXBBcnJvdycsIFs4NTkzXV0sIFsnVXBhcnJvdycsIFs4NjU3XV0sIFsnVXBBcnJvd0Rvd25BcnJvdycsIFs4NjQ1XV0sIFsndXBkb3duYXJyb3cnLCBbODU5N11dLCBbJ1VwRG93bkFycm93JywgWzg1OTddXSwgWydVcGRvd25hcnJvdycsIFs4NjYxXV0sIFsnVXBFcXVpbGlicml1bScsIFsxMDYwNl1dLCBbJ3VwaGFycG9vbmxlZnQnLCBbODYzOV1dLCBbJ3VwaGFycG9vbnJpZ2h0JywgWzg2MzhdXSwgWyd1cGx1cycsIFs4ODQ2XV0sIFsnVXBwZXJMZWZ0QXJyb3cnLCBbODU5OF1dLCBbJ1VwcGVyUmlnaHRBcnJvdycsIFs4NTk5XV0sIFsndXBzaScsIFs5NjVdXSwgWydVcHNpJywgWzk3OF1dLCBbJ3Vwc2loJywgWzk3OF1dLCBbJ1Vwc2lsb24nLCBbOTMzXV0sIFsndXBzaWxvbicsIFs5NjVdXSwgWydVcFRlZUFycm93JywgWzg2MTNdXSwgWydVcFRlZScsIFs4ODY5XV0sIFsndXB1cGFycm93cycsIFs4NjQ4XV0sIFsndXJjb3JuJywgWzg5ODldXSwgWyd1cmNvcm5lcicsIFs4OTg5XV0sIFsndXJjcm9wJywgWzg5NzRdXSwgWydVcmluZycsIFszNjZdXSwgWyd1cmluZycsIFszNjddXSwgWyd1cnRyaScsIFs5NzIxXV0sIFsnVXNjcicsIFsxMTk5ODRdXSwgWyd1c2NyJywgWzEyMDAxMF1dLCBbJ3V0ZG90JywgWzg5NDRdXSwgWydVdGlsZGUnLCBbMzYwXV0sIFsndXRpbGRlJywgWzM2MV1dLCBbJ3V0cmknLCBbOTY1M11dLCBbJ3V0cmlmJywgWzk2NTJdXSwgWyd1dWFycicsIFs4NjQ4XV0sIFsnVXVtbCcsIFsyMjBdXSwgWyd1dW1sJywgWzI1Ml1dLCBbJ3V3YW5nbGUnLCBbMTA2NjNdXSwgWyd2YW5ncnQnLCBbMTA2NTJdXSwgWyd2YXJlcHNpbG9uJywgWzEwMTNdXSwgWyd2YXJrYXBwYScsIFsxMDA4XV0sIFsndmFybm90aGluZycsIFs4NzA5XV0sIFsndmFycGhpJywgWzk4MV1dLCBbJ3ZhcnBpJywgWzk4Ml1dLCBbJ3ZhcnByb3B0bycsIFs4NzMzXV0sIFsndmFycicsIFs4NTk3XV0sIFsndkFycicsIFs4NjYxXV0sIFsndmFycmhvJywgWzEwMDldXSwgWyd2YXJzaWdtYScsIFs5NjJdXSwgWyd2YXJzdWJzZXRuZXEnLCBbODg0MiwgNjUwMjRdXSwgWyd2YXJzdWJzZXRuZXFxJywgWzEwOTU1LCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcScsIFs4ODQzLCA2NTAyNF1dLCBbJ3ZhcnN1cHNldG5lcXEnLCBbMTA5NTYsIDY1MDI0XV0sIFsndmFydGhldGEnLCBbOTc3XV0sIFsndmFydHJpYW5nbGVsZWZ0JywgWzg4ODJdXSwgWyd2YXJ0cmlhbmdsZXJpZ2h0JywgWzg4ODNdXSwgWyd2QmFyJywgWzEwOTg0XV0sIFsnVmJhcicsIFsxMDk4N11dLCBbJ3ZCYXJ2JywgWzEwOTg1XV0sIFsnVmN5JywgWzEwNDJdXSwgWyd2Y3knLCBbMTA3NF1dLCBbJ3ZkYXNoJywgWzg4NjZdXSwgWyd2RGFzaCcsIFs4ODcyXV0sIFsnVmRhc2gnLCBbODg3M11dLCBbJ1ZEYXNoJywgWzg4NzVdXSwgWydWZGFzaGwnLCBbMTA5ODJdXSwgWyd2ZWViYXInLCBbODg5MV1dLCBbJ3ZlZScsIFs4NzQ0XV0sIFsnVmVlJywgWzg4OTddXSwgWyd2ZWVlcScsIFs4Nzk0XV0sIFsndmVsbGlwJywgWzg5NDJdXSwgWyd2ZXJiYXInLCBbMTI0XV0sIFsnVmVyYmFyJywgWzgyMTRdXSwgWyd2ZXJ0JywgWzEyNF1dLCBbJ1ZlcnQnLCBbODIxNF1dLCBbJ1ZlcnRpY2FsQmFyJywgWzg3MzldXSwgWydWZXJ0aWNhbExpbmUnLCBbMTI0XV0sIFsnVmVydGljYWxTZXBhcmF0b3InLCBbMTAwNzJdXSwgWydWZXJ0aWNhbFRpbGRlJywgWzg3NjhdXSwgWydWZXJ5VGhpblNwYWNlJywgWzgyMDJdXSwgWydWZnInLCBbMTIwMDg5XV0sIFsndmZyJywgWzEyMDExNV1dLCBbJ3ZsdHJpJywgWzg4ODJdXSwgWyd2bnN1YicsIFs4ODM0LCA4NDAyXV0sIFsndm5zdXAnLCBbODgzNSwgODQwMl1dLCBbJ1ZvcGYnLCBbMTIwMTQxXV0sIFsndm9wZicsIFsxMjAxNjddXSwgWyd2cHJvcCcsIFs4NzMzXV0sIFsndnJ0cmknLCBbODg4M11dLCBbJ1ZzY3InLCBbMTE5OTg1XV0sIFsndnNjcicsIFsxMjAwMTFdXSwgWyd2c3VibkUnLCBbMTA5NTUsIDY1MDI0XV0sIFsndnN1Ym5lJywgWzg4NDIsIDY1MDI0XV0sIFsndnN1cG5FJywgWzEwOTU2LCA2NTAyNF1dLCBbJ3ZzdXBuZScsIFs4ODQzLCA2NTAyNF1dLCBbJ1Z2ZGFzaCcsIFs4ODc0XV0sIFsndnppZ3phZycsIFsxMDY1MF1dLCBbJ1djaXJjJywgWzM3Ml1dLCBbJ3djaXJjJywgWzM3M11dLCBbJ3dlZGJhcicsIFsxMDg0N11dLCBbJ3dlZGdlJywgWzg3NDNdXSwgWydXZWRnZScsIFs4ODk2XV0sIFsnd2VkZ2VxJywgWzg3OTNdXSwgWyd3ZWllcnAnLCBbODQ3Ml1dLCBbJ1dmcicsIFsxMjAwOTBdXSwgWyd3ZnInLCBbMTIwMTE2XV0sIFsnV29wZicsIFsxMjAxNDJdXSwgWyd3b3BmJywgWzEyMDE2OF1dLCBbJ3dwJywgWzg0NzJdXSwgWyd3cicsIFs4NzY4XV0sIFsnd3JlYXRoJywgWzg3NjhdXSwgWydXc2NyJywgWzExOTk4Nl1dLCBbJ3dzY3InLCBbMTIwMDEyXV0sIFsneGNhcCcsIFs4ODk4XV0sIFsneGNpcmMnLCBbOTcxMV1dLCBbJ3hjdXAnLCBbODg5OV1dLCBbJ3hkdHJpJywgWzk2NjFdXSwgWydYZnInLCBbMTIwMDkxXV0sIFsneGZyJywgWzEyMDExN11dLCBbJ3hoYXJyJywgWzEwMjMxXV0sIFsneGhBcnInLCBbMTAyMzRdXSwgWydYaScsIFs5MjZdXSwgWyd4aScsIFs5NThdXSwgWyd4bGFycicsIFsxMDIyOV1dLCBbJ3hsQXJyJywgWzEwMjMyXV0sIFsneG1hcCcsIFsxMDIzNl1dLCBbJ3huaXMnLCBbODk1NV1dLCBbJ3hvZG90JywgWzEwNzUyXV0sIFsnWG9wZicsIFsxMjAxNDNdXSwgWyd4b3BmJywgWzEyMDE2OV1dLCBbJ3hvcGx1cycsIFsxMDc1M11dLCBbJ3hvdGltZScsIFsxMDc1NF1dLCBbJ3hyYXJyJywgWzEwMjMwXV0sIFsneHJBcnInLCBbMTAyMzNdXSwgWydYc2NyJywgWzExOTk4N11dLCBbJ3hzY3InLCBbMTIwMDEzXV0sIFsneHNxY3VwJywgWzEwNzU4XV0sIFsneHVwbHVzJywgWzEwNzU2XV0sIFsneHV0cmknLCBbOTY1MV1dLCBbJ3h2ZWUnLCBbODg5N11dLCBbJ3h3ZWRnZScsIFs4ODk2XV0sIFsnWWFjdXRlJywgWzIyMV1dLCBbJ3lhY3V0ZScsIFsyNTNdXSwgWydZQWN5JywgWzEwNzFdXSwgWyd5YWN5JywgWzExMDNdXSwgWydZY2lyYycsIFszNzRdXSwgWyd5Y2lyYycsIFszNzVdXSwgWydZY3knLCBbMTA2N11dLCBbJ3ljeScsIFsxMDk5XV0sIFsneWVuJywgWzE2NV1dLCBbJ1lmcicsIFsxMjAwOTJdXSwgWyd5ZnInLCBbMTIwMTE4XV0sIFsnWUljeScsIFsxMDMxXV0sIFsneWljeScsIFsxMTExXV0sIFsnWW9wZicsIFsxMjAxNDRdXSwgWyd5b3BmJywgWzEyMDE3MF1dLCBbJ1lzY3InLCBbMTE5OTg4XV0sIFsneXNjcicsIFsxMjAwMTRdXSwgWydZVWN5JywgWzEwNzBdXSwgWyd5dWN5JywgWzExMDJdXSwgWyd5dW1sJywgWzI1NV1dLCBbJ1l1bWwnLCBbMzc2XV0sIFsnWmFjdXRlJywgWzM3N11dLCBbJ3phY3V0ZScsIFszNzhdXSwgWydaY2Fyb24nLCBbMzgxXV0sIFsnemNhcm9uJywgWzM4Ml1dLCBbJ1pjeScsIFsxMDQ3XV0sIFsnemN5JywgWzEwNzldXSwgWydaZG90JywgWzM3OV1dLCBbJ3pkb3QnLCBbMzgwXV0sIFsnemVldHJmJywgWzg0ODhdXSwgWydaZXJvV2lkdGhTcGFjZScsIFs4MjAzXV0sIFsnWmV0YScsIFs5MThdXSwgWyd6ZXRhJywgWzk1MF1dLCBbJ3pmcicsIFsxMjAxMTldXSwgWydaZnInLCBbODQ4OF1dLCBbJ1pIY3knLCBbMTA0Nl1dLCBbJ3poY3knLCBbMTA3OF1dLCBbJ3ppZ3JhcnInLCBbODY2OV1dLCBbJ3pvcGYnLCBbMTIwMTcxXV0sIFsnWm9wZicsIFs4NDg0XV0sIFsnWnNjcicsIFsxMTk5ODldXSwgWyd6c2NyJywgWzEyMDAxNV1dLCBbJ3p3aicsIFs4MjA1XV0sIFsnenduaicsIFs4MjA0XV1dO1xuXG52YXIgYWxwaGFJbmRleCA9IHt9O1xudmFyIGNoYXJJbmRleCA9IHt9O1xuXG5jcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCk7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEh0bWw1RW50aXRpZXMoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mKCM/W1xcd1xcZF0rKTs/L2csIGZ1bmN0aW9uKHMsIGVudGl0eSkge1xuICAgICAgICB2YXIgY2hyO1xuICAgICAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gZW50aXR5LmNoYXJBdCgxKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIDE2KSA6XG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZW50aXR5LnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmICghKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSkge1xuICAgICAgICAgICAgICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaHIgPSBhbHBoYUluZGV4W2VudGl0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNociB8fCBzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFySW5mbyA9IGNoYXJJbmRleFtzdHIuY2hhckNvZGVBdChpKV07XG4gICAgICAgIGlmIChjaGFySW5mbykge1xuICAgICAgICAgICAgdmFyIGFscGhhID0gY2hhckluZm9bc3RyLmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSBjaGFySW5mb1snJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxwaGEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBjaGFySW5mbyA9IGNoYXJJbmRleFtjXTtcbiAgICAgICAgaWYgKGNoYXJJbmZvKSB7XG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBjaGFySW5mb1tzdHIuY2hhckNvZGVBdChpICsgMSldO1xuICAgICAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGNoYXJJbmZvWycnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiZcIiArIGFscGhhICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjIDwgMzIgfHwgYyA+IDEyNikge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmIycgKyBjICsgJzsnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw1RW50aXRpZXMoKS5lbmNvZGVOb25VVEYoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw1RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPD0gMjU1KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyW2krK107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIGkrK1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gSHRtbDVFbnRpdGllcy5lbmNvZGVOb25BU0NJSSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgSHRtbDVFbnRpdGllcygpLmVuY29kZU5vbkFTQ0lJKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYWxwaGFJbmRleCBQYXNzZWQgYnkgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtPYmplY3R9IGNoYXJJbmRleCBQYXNzZWQgYnkgcmVmZXJlbmNlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmRleGVzKGFscGhhSW5kZXgsIGNoYXJJbmRleCkge1xuICAgIHZhciBpID0gRU5USVRJRVMubGVuZ3RoO1xuICAgIHZhciBfcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIGUgPSBFTlRJVElFU1tpXTtcbiAgICAgICAgdmFyIGFscGhhID0gZVswXTtcbiAgICAgICAgdmFyIGNoYXJzID0gZVsxXTtcbiAgICAgICAgdmFyIGNociA9IGNoYXJzWzBdO1xuICAgICAgICB2YXIgYWRkQ2hhciA9IChjaHIgPCAzMiB8fCBjaHIgPiAxMjYpIHx8IGNociA9PT0gNjIgfHwgY2hyID09PSA2MCB8fCBjaHIgPT09IDM4IHx8IGNociA9PT0gMzQgfHwgY2hyID09PSAzOTtcbiAgICAgICAgdmFyIGNoYXJJbmZvO1xuICAgICAgICBpZiAoYWRkQ2hhcikge1xuICAgICAgICAgICAgY2hhckluZm8gPSBjaGFySW5kZXhbY2hyXSA9IGNoYXJJbmRleFtjaHJdIHx8IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyc1sxXSkge1xuICAgICAgICAgICAgdmFyIGNocjIgPSBjaGFyc1sxXTtcbiAgICAgICAgICAgIGFscGhhSW5kZXhbYWxwaGFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goYWRkQ2hhciAmJiAoY2hhckluZm9bY2hyMl0gPSBhbHBoYSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxwaGFJbmRleFthbHBoYV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGFkZENoYXIgJiYgKGNoYXJJbmZvWycnXSA9IGFscGhhKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSHRtbDVFbnRpdGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2xpYi9odG1sNS1lbnRpdGllcy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIC9bXFx1MDAxYlxcdTAwOWJdW1soKSM7P10qKD86WzAtOV17MSw0fSg/OjtbMC05XXswLDR9KSopP1swLTlBLVBSWmNmLW5xcnk9PjxdL2c7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Fuc2ktcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBYbWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIveG1sLWVudGl0aWVzLmpzJyksXG4gIEh0bWw0RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw0LWVudGl0aWVzLmpzJyksXG4gIEh0bWw1RW50aXRpZXM6IHJlcXVpcmUoJy4vbGliL2h0bWw1LWVudGl0aWVzLmpzJyksXG4gIEFsbEh0bWxFbnRpdGllczogcmVxdWlyZSgnLi9saWIvaHRtbDUtZW50aXRpZXMuanMnKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInZhciBIVE1MX0FMUEhBID0gWydhcG9zJywgJ25ic3AnLCAnaWV4Y2wnLCAnY2VudCcsICdwb3VuZCcsICdjdXJyZW4nLCAneWVuJywgJ2JydmJhcicsICdzZWN0JywgJ3VtbCcsICdjb3B5JywgJ29yZGYnLCAnbGFxdW8nLCAnbm90JywgJ3NoeScsICdyZWcnLCAnbWFjcicsICdkZWcnLCAncGx1c21uJywgJ3N1cDInLCAnc3VwMycsICdhY3V0ZScsICdtaWNybycsICdwYXJhJywgJ21pZGRvdCcsICdjZWRpbCcsICdzdXAxJywgJ29yZG0nLCAncmFxdW8nLCAnZnJhYzE0JywgJ2ZyYWMxMicsICdmcmFjMzQnLCAnaXF1ZXN0JywgJ0FncmF2ZScsICdBYWN1dGUnLCAnQWNpcmMnLCAnQXRpbGRlJywgJ0F1bWwnLCAnQXJpbmcnLCAnQWVsaWcnLCAnQ2NlZGlsJywgJ0VncmF2ZScsICdFYWN1dGUnLCAnRWNpcmMnLCAnRXVtbCcsICdJZ3JhdmUnLCAnSWFjdXRlJywgJ0ljaXJjJywgJ0l1bWwnLCAnRVRIJywgJ050aWxkZScsICdPZ3JhdmUnLCAnT2FjdXRlJywgJ09jaXJjJywgJ090aWxkZScsICdPdW1sJywgJ3RpbWVzJywgJ09zbGFzaCcsICdVZ3JhdmUnLCAnVWFjdXRlJywgJ1VjaXJjJywgJ1V1bWwnLCAnWWFjdXRlJywgJ1RIT1JOJywgJ3N6bGlnJywgJ2FncmF2ZScsICdhYWN1dGUnLCAnYWNpcmMnLCAnYXRpbGRlJywgJ2F1bWwnLCAnYXJpbmcnLCAnYWVsaWcnLCAnY2NlZGlsJywgJ2VncmF2ZScsICdlYWN1dGUnLCAnZWNpcmMnLCAnZXVtbCcsICdpZ3JhdmUnLCAnaWFjdXRlJywgJ2ljaXJjJywgJ2l1bWwnLCAnZXRoJywgJ250aWxkZScsICdvZ3JhdmUnLCAnb2FjdXRlJywgJ29jaXJjJywgJ290aWxkZScsICdvdW1sJywgJ2RpdmlkZScsICdPc2xhc2gnLCAndWdyYXZlJywgJ3VhY3V0ZScsICd1Y2lyYycsICd1dW1sJywgJ3lhY3V0ZScsICd0aG9ybicsICd5dW1sJywgJ3F1b3QnLCAnYW1wJywgJ2x0JywgJ2d0JywgJ29lbGlnJywgJ29lbGlnJywgJ3NjYXJvbicsICdzY2Fyb24nLCAneXVtbCcsICdjaXJjJywgJ3RpbGRlJywgJ2Vuc3AnLCAnZW1zcCcsICd0aGluc3AnLCAnenduaicsICd6d2onLCAnbHJtJywgJ3JsbScsICduZGFzaCcsICdtZGFzaCcsICdsc3F1bycsICdyc3F1bycsICdzYnF1bycsICdsZHF1bycsICdyZHF1bycsICdiZHF1bycsICdkYWdnZXInLCAnZGFnZ2VyJywgJ3Blcm1pbCcsICdsc2FxdW8nLCAncnNhcXVvJywgJ2V1cm8nLCAnZm5vZicsICdhbHBoYScsICdiZXRhJywgJ2dhbW1hJywgJ2RlbHRhJywgJ2Vwc2lsb24nLCAnemV0YScsICdldGEnLCAndGhldGEnLCAnaW90YScsICdrYXBwYScsICdsYW1iZGEnLCAnbXUnLCAnbnUnLCAneGknLCAnb21pY3JvbicsICdwaScsICdyaG8nLCAnc2lnbWEnLCAndGF1JywgJ3Vwc2lsb24nLCAncGhpJywgJ2NoaScsICdwc2knLCAnb21lZ2EnLCAnYWxwaGEnLCAnYmV0YScsICdnYW1tYScsICdkZWx0YScsICdlcHNpbG9uJywgJ3pldGEnLCAnZXRhJywgJ3RoZXRhJywgJ2lvdGEnLCAna2FwcGEnLCAnbGFtYmRhJywgJ211JywgJ251JywgJ3hpJywgJ29taWNyb24nLCAncGknLCAncmhvJywgJ3NpZ21hZicsICdzaWdtYScsICd0YXUnLCAndXBzaWxvbicsICdwaGknLCAnY2hpJywgJ3BzaScsICdvbWVnYScsICd0aGV0YXN5bScsICd1cHNpaCcsICdwaXYnLCAnYnVsbCcsICdoZWxsaXAnLCAncHJpbWUnLCAncHJpbWUnLCAnb2xpbmUnLCAnZnJhc2wnLCAnd2VpZXJwJywgJ2ltYWdlJywgJ3JlYWwnLCAndHJhZGUnLCAnYWxlZnN5bScsICdsYXJyJywgJ3VhcnInLCAncmFycicsICdkYXJyJywgJ2hhcnInLCAnY3JhcnInLCAnbGFycicsICd1YXJyJywgJ3JhcnInLCAnZGFycicsICdoYXJyJywgJ2ZvcmFsbCcsICdwYXJ0JywgJ2V4aXN0JywgJ2VtcHR5JywgJ25hYmxhJywgJ2lzaW4nLCAnbm90aW4nLCAnbmknLCAncHJvZCcsICdzdW0nLCAnbWludXMnLCAnbG93YXN0JywgJ3JhZGljJywgJ3Byb3AnLCAnaW5maW4nLCAnYW5nJywgJ2FuZCcsICdvcicsICdjYXAnLCAnY3VwJywgJ2ludCcsICd0aGVyZTQnLCAnc2ltJywgJ2NvbmcnLCAnYXN5bXAnLCAnbmUnLCAnZXF1aXYnLCAnbGUnLCAnZ2UnLCAnc3ViJywgJ3N1cCcsICduc3ViJywgJ3N1YmUnLCAnc3VwZScsICdvcGx1cycsICdvdGltZXMnLCAncGVycCcsICdzZG90JywgJ2xjZWlsJywgJ3JjZWlsJywgJ2xmbG9vcicsICdyZmxvb3InLCAnbGFuZycsICdyYW5nJywgJ2xveicsICdzcGFkZXMnLCAnY2x1YnMnLCAnaGVhcnRzJywgJ2RpYW1zJ107XG52YXIgSFRNTF9DT0RFUyA9IFszOSwgMTYwLCAxNjEsIDE2MiwgMTYzLCAxNjQsIDE2NSwgMTY2LCAxNjcsIDE2OCwgMTY5LCAxNzAsIDE3MSwgMTcyLCAxNzMsIDE3NCwgMTc1LCAxNzYsIDE3NywgMTc4LCAxNzksIDE4MCwgMTgxLCAxODIsIDE4MywgMTg0LCAxODUsIDE4NiwgMTg3LCAxODgsIDE4OSwgMTkwLCAxOTEsIDE5MiwgMTkzLCAxOTQsIDE5NSwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMSwgMjAyLCAyMDMsIDIwNCwgMjA1LCAyMDYsIDIwNywgMjA4LCAyMDksIDIxMCwgMjExLCAyMTIsIDIxMywgMjE0LCAyMTUsIDIxNiwgMjE3LCAyMTgsIDIxOSwgMjIwLCAyMjEsIDIyMiwgMjIzLCAyMjQsIDIyNSwgMjI2LCAyMjcsIDIyOCwgMjI5LCAyMzAsIDIzMSwgMjMyLCAyMzMsIDIzNCwgMjM1LCAyMzYsIDIzNywgMjM4LCAyMzksIDI0MCwgMjQxLCAyNDIsIDI0MywgMjQ0LCAyNDUsIDI0NiwgMjQ3LCAyNDgsIDI0OSwgMjUwLCAyNTEsIDI1MiwgMjUzLCAyNTQsIDI1NSwgMzQsIDM4LCA2MCwgNjIsIDMzOCwgMzM5LCAzNTIsIDM1MywgMzc2LCA3MTAsIDczMiwgODE5NCwgODE5NSwgODIwMSwgODIwNCwgODIwNSwgODIwNiwgODIwNywgODIxMSwgODIxMiwgODIxNiwgODIxNywgODIxOCwgODIyMCwgODIyMSwgODIyMiwgODIyNCwgODIyNSwgODI0MCwgODI0OSwgODI1MCwgODM2NCwgNDAyLCA5MTMsIDkxNCwgOTE1LCA5MTYsIDkxNywgOTE4LCA5MTksIDkyMCwgOTIxLCA5MjIsIDkyMywgOTI0LCA5MjUsIDkyNiwgOTI3LCA5MjgsIDkyOSwgOTMxLCA5MzIsIDkzMywgOTM0LCA5MzUsIDkzNiwgOTM3LCA5NDUsIDk0NiwgOTQ3LCA5NDgsIDk0OSwgOTUwLCA5NTEsIDk1MiwgOTUzLCA5NTQsIDk1NSwgOTU2LCA5NTcsIDk1OCwgOTU5LCA5NjAsIDk2MSwgOTYyLCA5NjMsIDk2NCwgOTY1LCA5NjYsIDk2NywgOTY4LCA5NjksIDk3NywgOTc4LCA5ODIsIDgyMjYsIDgyMzAsIDgyNDIsIDgyNDMsIDgyNTQsIDgyNjAsIDg0NzIsIDg0NjUsIDg0NzYsIDg0ODIsIDg1MDEsIDg1OTIsIDg1OTMsIDg1OTQsIDg1OTUsIDg1OTYsIDg2MjksIDg2NTYsIDg2NTcsIDg2NTgsIDg2NTksIDg2NjAsIDg3MDQsIDg3MDYsIDg3MDcsIDg3MDksIDg3MTEsIDg3MTIsIDg3MTMsIDg3MTUsIDg3MTksIDg3MjEsIDg3MjIsIDg3MjcsIDg3MzAsIDg3MzMsIDg3MzQsIDg3MzYsIDg3NDMsIDg3NDQsIDg3NDUsIDg3NDYsIDg3NDcsIDg3NTYsIDg3NjQsIDg3NzMsIDg3NzYsIDg4MDAsIDg4MDEsIDg4MDQsIDg4MDUsIDg4MzQsIDg4MzUsIDg4MzYsIDg4MzgsIDg4MzksIDg4NTMsIDg4NTUsIDg4NjksIDg5MDEsIDg5NjgsIDg5NjksIDg5NzAsIDg5NzEsIDkwMDEsIDkwMDIsIDk2NzQsIDk4MjQsIDk4MjcsIDk4MjksIDk4MzBdO1xuXG52YXIgYWxwaGFJbmRleCA9IHt9O1xudmFyIG51bUluZGV4ID0ge307XG5cbnZhciBpID0gMDtcbnZhciBsZW5ndGggPSBIVE1MX0FMUEhBLmxlbmd0aDtcbndoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgdmFyIGEgPSBIVE1MX0FMUEhBW2ldO1xuICAgIHZhciBjID0gSFRNTF9DT0RFU1tpXTtcbiAgICBhbHBoYUluZGV4W2FdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICBudW1JbmRleFtjXSA9IGE7XG4gICAgaSsrO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIdG1sNEVudGl0aWVzKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJigjP1tcXHdcXGRdKyk7Py9nLCBmdW5jdGlvbihzLCBlbnRpdHkpIHtcbiAgICAgICAgdmFyIGNocjtcbiAgICAgICAgaWYgKGVudGl0eS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGVudGl0eS5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgICAgICAgICAgICBwYXJzZUludChlbnRpdHkuc3Vic3RyKDIpLCAxNikgOlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMSkpO1xuXG4gICAgICAgICAgICBpZiAoIShpc05hTihjb2RlKSB8fCBjb2RlIDwgLTMyNzY4IHx8IGNvZGUgPiA2NTUzNSkpIHtcbiAgICAgICAgICAgICAgICBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hyID0gYWxwaGFJbmRleFtlbnRpdHldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaHIgfHwgcztcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5kZWNvZGUoc3RyKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGFscGhhID0gbnVtSW5kZXhbc3RyLmNoYXJDb2RlQXQoaSldO1xuICAgICAgICByZXN1bHQgKz0gYWxwaGEgPyBcIiZcIiArIGFscGhhICsgXCI7XCIgOiBzdHIuY2hhckF0KGkpO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMuZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZW5jb2RlKHN0cik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkh0bWw0RW50aXRpZXMucHJvdG90eXBlLmVuY29kZU5vblVURiA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzdHJMZW5ndGggPSBzdHIubGVuZ3RoO1xuICAgIGlmIChzdHJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgYWxwaGEgPSBudW1JbmRleFtjY107XG4gICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiJlwiICsgYWxwaGEgKyBcIjtcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYyA8IDMyIHx8IGNjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImI1wiICsgY2MgKyBcIjtcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IEh0bWw0RW50aXRpZXMoKS5lbmNvZGVOb25VVEYoc3RyKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuSHRtbDRFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5IdG1sNEVudGl0aWVzLmVuY29kZU5vbkFTQ0lJID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIG5ldyBIdG1sNEVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSHRtbDRFbnRpdGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWVudGl0aWVzL2xpYi9odG1sNC1lbnRpdGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJ2YXIgQUxQSEFfSU5ERVggPSB7XG4gICAgJyZsdCc6ICc8JyxcbiAgICAnJmd0JzogJz4nLFxuICAgICcmcXVvdCc6ICdcIicsXG4gICAgJyZhcG9zJzogJ1xcJycsXG4gICAgJyZhbXAnOiAnJicsXG4gICAgJyZsdDsnOiAnPCcsXG4gICAgJyZndDsnOiAnPicsXG4gICAgJyZxdW90Oyc6ICdcIicsXG4gICAgJyZhcG9zOyc6ICdcXCcnLFxuICAgICcmYW1wOyc6ICcmJ1xufTtcblxudmFyIENIQVJfSU5ERVggPSB7XG4gICAgNjA6ICdsdCcsXG4gICAgNjI6ICdndCcsXG4gICAgMzQ6ICdxdW90JyxcbiAgICAzOTogJ2Fwb3MnLFxuICAgIDM4OiAnYW1wJ1xufTtcblxudmFyIENIQVJfU19JTkRFWCA9IHtcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAnXFwnJzogJyZhcG9zOycsXG4gICAgJyYnOiAnJmFtcDsnXG59O1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBYbWxFbnRpdGllcygpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuWG1sRW50aXRpZXMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC88fD58XCJ8J3wmL2csIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIENIQVJfU19JTkRFWFtzXTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuIFhtbEVudGl0aWVzLmVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBuZXcgWG1sRW50aXRpZXMoKS5lbmNvZGUoc3RyKTtcbiB9O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblhtbEVudGl0aWVzLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiM/WzAtOWEtekEtWl0rOz8vZywgZnVuY3Rpb24ocykge1xuICAgICAgICBpZiAocy5jaGFyQXQoMSkgPT09ICcjJykge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBzLmNoYXJBdCgyKS50b0xvd2VyQ2FzZSgpID09PSAneCcgP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KHMuc3Vic3RyKDMpLCAxNikgOlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KHMuc3Vic3RyKDIpKTtcblxuICAgICAgICAgICAgaWYgKGlzTmFOKGNvZGUpIHx8IGNvZGUgPCAtMzI3NjggfHwgY29kZSA+IDY1NTM1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFMUEhBX0lOREVYW3NdIHx8IHM7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5kZWNvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZGVjb2RlKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uVVRGID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKHN0ckxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGFscGhhID0gQ0hBUl9JTkRFWFtjXTtcbiAgICAgICAgaWYgKGFscGhhKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCImXCIgKyBhbHBoYSArIFwiO1wiO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTI2KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYjJyArIGMgKyAnOyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbiBYbWxFbnRpdGllcy5lbmNvZGVOb25VVEYgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlTm9uVVRGKHN0cik7XG4gfTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5YbWxFbnRpdGllcy5wcm90b3R5cGUuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3RyTGVuZ2h0ID0gc3RyLmxlbmd0aDtcbiAgICBpZiAoc3RyTGVuZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ckxlbmdodCkge1xuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8PSAyNTUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaSsrXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSAnJiMnICsgYyArICc7JztcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG4gWG1sRW50aXRpZXMuZW5jb2RlTm9uQVNDSUkgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gbmV3IFhtbEVudGl0aWVzKCkuZW5jb2RlTm9uQVNDSUkoc3RyKTtcbiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhtbEVudGl0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h0bWwtZW50aXRpZXMvbGliL3htbC1lbnRpdGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxudmFyIF9rZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxudmFyIF9jbGllbnRPdmVybGF5RmFsc2VSZWxvYWRUcnVlID0gcmVxdWlyZSgnd2VicGFjay1ob3QtbWlkZGxld2FyZS9jbGllbnQ/b3ZlcmxheT1mYWxzZSZyZWxvYWQ9dHJ1ZScpO1xuXG52YXIgX2NsaWVudE92ZXJsYXlGYWxzZVJlbG9hZFRydWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoYW5kbGVycyA9IHtcbiAgcmVsb2FkOiBmdW5jdGlvbiByZWxvYWQocm91dGUpIHtcbiAgICBpZiAocm91dGUgPT09ICcvX2Vycm9yJykge1xuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKCgwLCBfa2V5czIuZGVmYXVsdCkobmV4dC5yb3V0ZXIuY29tcG9uZW50cykpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tyXS5Db21wb25lbnQ7XG5cbiAgICAgICAgICBpZiAoQ29tcG9uZW50Ll9fcm91dGUgPT09ICcvX2Vycm9yLWRlYnVnJykge1xuICAgICAgICAgICAgLy8gcmVsb2FkIGFsbCAnL19lcnJvci1kZWJ1ZydcbiAgICAgICAgICAgIC8vIHdoaWNoIGFyZSBleHBlY3RlZCB0byBiZSBlcnJvcnMgb2YgJy9fZXJyb3InIHJvdXRlc1xuICAgICAgICAgICAgbmV4dC5yb3V0ZXIucmVsb2FkKHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0LnJvdXRlci5yZWxvYWQocm91dGUpO1xuICB9LFxuICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShyb3V0ZSkge1xuICAgIHZhciBfcmVmID0gbmV4dC5yb3V0ZXIuY29tcG9uZW50c1tyb3V0ZV0gfHwge30sXG4gICAgICAgIENvbXBvbmVudCA9IF9yZWYuQ29tcG9uZW50O1xuXG4gICAgaWYgKENvbXBvbmVudCAmJiBDb21wb25lbnQuX19yb3V0ZSA9PT0gJy9fZXJyb3ItZGVidWcnKSB7XG4gICAgICAvLyByZWxvYWQgdG8gcmVjb3ZlciBmcm9tIHJ1bnRpbWUgZXJyb3JzXG4gICAgICBuZXh0LnJvdXRlci5yZWxvYWQocm91dGUpO1xuICAgIH1cbiAgfVxufTsgLyogZ2xvYmFsIG5leHQgKi9cblxuXG5fY2xpZW50T3ZlcmxheUZhbHNlUmVsb2FkVHJ1ZTIuZGVmYXVsdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG9iaikge1xuICB2YXIgZm4gPSBoYW5kbGVyc1tvYmouYWN0aW9uXTtcbiAgaWYgKGZuKSB7XG4gICAgdmFyIGRhdGEgPSBvYmouZGF0YSB8fCBbXTtcbiAgICBmbi5hcHBseSh1bmRlZmluZWQsICgwLCBfdG9Db25zdW1hYmxlQXJyYXkzLmRlZmF1bHQpKGRhdGEpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgYWN0aW9uICcgKyBvYmouYWN0aW9uKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25leHQvZGlzdC9jbGllbnQvd2VicGFjay1ob3QtbWlkZGxld2FyZS1jbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1ZXJ5c3RyaW5nL2VuY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWVyeXN0cmluZy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIndXNlIHN0cmljdCc7XG52YXIgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBzdHIucmVwbGFjZShhbnNpUmVnZXgsICcnKSA6IHN0cjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RyaXAtYW5zaS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCIvKmVzbGludC1lbnYgYnJvd3NlciovXG5cbnZhciBjbGllbnRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG52YXIgc3R5bGVzID0ge1xuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjg1KScsXG4gIGNvbG9yOiAnI0U4RThFOCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjInLFxuICB3aGl0ZVNwYWNlOiAncHJlJyxcbiAgZm9udEZhbWlseTogJ01lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlJyxcbiAgZm9udFNpemU6ICcxM3B4JyxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHpJbmRleDogOTk5OSxcbiAgcGFkZGluZzogJzEwcHgnLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgdG9wOiAwLFxuICBib3R0b206IDAsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gIGRpcjogJ2x0cidcbn07XG5mb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gIGNsaWVudE92ZXJsYXkuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xufVxuXG52YXIgYW5zaUhUTUwgPSByZXF1aXJlKCdhbnNpLWh0bWwnKTtcbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ3RyYW5zcGFyZW50JywgJ3RyYW5zcGFyZW50J10sXG4gIGJsYWNrOiAnMTgxODE4JyxcbiAgcmVkOiAnRTM2MDQ5JyxcbiAgZ3JlZW46ICdCM0NCNzQnLFxuICB5ZWxsb3c6ICdGRkQwODAnLFxuICBibHVlOiAnN0NBRkMyJyxcbiAgbWFnZW50YTogJzdGQUNDQScsXG4gIGN5YW46ICdDM0MyRUYnLFxuICBsaWdodGdyZXk6ICdFQkU3RTMnLFxuICBkYXJrZ3JleTogJzZENzg5MSdcbn07XG5hbnNpSFRNTC5zZXRDb2xvcnMoY29sb3JzKTtcblxudmFyIEVudGl0aWVzID0gcmVxdWlyZSgnaHRtbC1lbnRpdGllcycpLkFsbEh0bWxFbnRpdGllcztcbnZhciBlbnRpdGllcyA9IG5ldyBFbnRpdGllcygpO1xuXG5leHBvcnRzLnNob3dQcm9ibGVtcyA9XG5mdW5jdGlvbiBzaG93UHJvYmxlbXModHlwZSwgbGluZXMpIHtcbiAgY2xpZW50T3ZlcmxheS5pbm5lckhUTUwgPSAnJztcbiAgbGluZXMuZm9yRWFjaChmdW5jdGlvbihtc2cpIHtcbiAgICBtc2cgPSBhbnNpSFRNTChlbnRpdGllcy5lbmNvZGUobXNnKSk7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMjZweCc7XG4gICAgZGl2LmlubmVySFRNTCA9IHByb2JsZW1UeXBlKHR5cGUpICsgJyBpbiAnICsgbXNnO1xuICAgIGNsaWVudE92ZXJsYXkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbGllbnRPdmVybGF5KTtcbiAgfVxufTtcblxuZXhwb3J0cy5jbGVhciA9XG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgaWYgKGRvY3VtZW50LmJvZHkgJiYgY2xpZW50T3ZlcmxheS5wYXJlbnROb2RlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbGllbnRPdmVybGF5KTtcbiAgfVxufTtcblxudmFyIHByb2JsZW1Db2xvcnMgPSB7XG4gIGVycm9yczogY29sb3JzLnJlZCxcbiAgd2FybmluZ3M6IGNvbG9ycy55ZWxsb3dcbn07XG5cbmZ1bmN0aW9uIHByb2JsZW1UeXBlICh0eXBlKSB7XG4gIHZhciBjb2xvciA9IHByb2JsZW1Db2xvcnNbdHlwZV0gfHwgY29sb3JzLnJlZDtcbiAgcmV0dXJuIChcbiAgICAnPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMnICsgY29sb3IgKyAnOyBjb2xvcjojZmZmOyBwYWRkaW5nOjJweCA0cHg7IGJvcmRlci1yYWRpdXM6IDJweFwiPicgK1xuICAgICAgdHlwZS5zbGljZSgwLCAtMSkudG9VcHBlckNhc2UoKSArXG4gICAgJzwvc3Bhbj4nXG4gICk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjayktaG90LW1pZGRsZXdhcmUvY2xpZW50LW92ZXJsYXkuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiLyplc2xpbnQtZW52IGJyb3dzZXIqL1xuLypnbG9iYWwgX19yZXNvdXJjZVF1ZXJ5IF9fd2VicGFja19wdWJsaWNfcGF0aF9fKi9cblxudmFyIG9wdGlvbnMgPSB7XG4gIHBhdGg6IFwiL19fd2VicGFja19obXJcIixcbiAgdGltZW91dDogMjAgKiAxMDAwLFxuICBvdmVybGF5OiB0cnVlLFxuICByZWxvYWQ6IGZhbHNlLFxuICBsb2c6IHRydWUsXG4gIHdhcm46IHRydWVcbn07XG5pZiAoX19yZXNvdXJjZVF1ZXJ5KSB7XG4gIHZhciBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG4gIHZhciBvdmVycmlkZXMgPSBxdWVyeXN0cmluZy5wYXJzZShfX3Jlc291cmNlUXVlcnkuc2xpY2UoMSkpO1xuICBpZiAob3ZlcnJpZGVzLnBhdGgpIG9wdGlvbnMucGF0aCA9IG92ZXJyaWRlcy5wYXRoO1xuICBpZiAob3ZlcnJpZGVzLnRpbWVvdXQpIG9wdGlvbnMudGltZW91dCA9IG92ZXJyaWRlcy50aW1lb3V0O1xuICBpZiAob3ZlcnJpZGVzLm92ZXJsYXkpIG9wdGlvbnMub3ZlcmxheSA9IG92ZXJyaWRlcy5vdmVybGF5ICE9PSAnZmFsc2UnO1xuICBpZiAob3ZlcnJpZGVzLnJlbG9hZCkgb3B0aW9ucy5yZWxvYWQgPSBvdmVycmlkZXMucmVsb2FkICE9PSAnZmFsc2UnO1xuICBpZiAob3ZlcnJpZGVzLm5vSW5mbyAmJiBvdmVycmlkZXMubm9JbmZvICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgfVxuICBpZiAob3ZlcnJpZGVzLnF1aWV0ICYmIG92ZXJyaWRlcy5xdWlldCAhPT0gJ2ZhbHNlJykge1xuICAgIG9wdGlvbnMubG9nID0gZmFsc2U7XG4gICAgb3B0aW9ucy53YXJuID0gZmFsc2U7XG4gIH1cbiAgaWYgKG92ZXJyaWRlcy5keW5hbWljUHVibGljUGF0aCkge1xuICAgIG9wdGlvbnMucGF0aCA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgb3B0aW9ucy5wYXRoO1xuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAvLyBkbyBub3RoaW5nXG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cuRXZlbnRTb3VyY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnNvbGUud2FybihcbiAgICBcIndlYnBhY2staG90LW1pZGRsZXdhcmUncyBjbGllbnQgcmVxdWlyZXMgRXZlbnRTb3VyY2UgdG8gd29yay4gXCIgK1xuICAgIFwiWW91IHNob3VsZCBpbmNsdWRlIGEgcG9seWZpbGwgaWYgeW91IHdhbnQgdG8gc3VwcG9ydCB0aGlzIGJyb3dzZXI6IFwiICtcbiAgICBcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2ZXItc2VudF9ldmVudHMjVG9vbHNcIlxuICApO1xufSBlbHNlIHtcbiAgY29ubmVjdCh3aW5kb3cuRXZlbnRTb3VyY2UpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0KEV2ZW50U291cmNlKSB7XG4gIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtcbiAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG5cbiAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZTtcbiAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2U7XG4gIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdDtcblxuICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAoKG5ldyBEYXRlKCkgLSBsYXN0QWN0aXZpdHkpID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KCk7XG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKTtcblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIGNvbm5lY3RlZFwiKTtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKGV2ZW50LmRhdGEgPT0gXCJcXHVEODNEXFx1REM5M1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBwcm9jZXNzTWVzc2FnZShKU09OLnBhcnNlKGV2ZW50LmRhdGEpKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIEhNUiBtZXNzYWdlOiBcIiArIGV2ZW50LmRhdGEgKyBcIlxcblwiICsgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgc291cmNlLmNsb3NlKCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY29ubmVjdChFdmVudFNvdXJjZSk7IH0sIG9wdGlvbnMudGltZW91dCk7XG4gIH1cblxufVxuXG52YXIgcmVwb3J0ZXI7XG4vLyB0aGUgcmVwb3J0ZXIgbmVlZHMgdG8gYmUgYSBzaW5nbGV0b24gb24gdGhlIHBhZ2Vcbi8vIGluIGNhc2UgdGhlIGNsaWVudCBpcyBiZWluZyB1c2VkIGJ5IG11dGxpcGxlIGJ1bmRsZXNcbi8vIHdlIG9ubHkgd2FudCB0byByZXBvcnQgb25jZS5cbi8vIGFsbCB0aGUgZXJyb3JzIHdpbGwgZ28gdG8gYWxsIGNsaWVudHNcbnZhciBzaW5nbGV0b25LZXkgPSAnX193ZWJwYWNrX2hvdF9taWRkbGV3YXJlX3JlcG9ydGVyX18nO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3dbc2luZ2xldG9uS2V5XSkge1xuICByZXBvcnRlciA9IHdpbmRvd1tzaW5nbGV0b25LZXldID0gY3JlYXRlUmVwb3J0ZXIoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVwb3J0ZXIoKSB7XG4gIHZhciBzdHJpcCA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcblxuICB2YXIgb3ZlcmxheTtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5vdmVybGF5KSB7XG4gICAgb3ZlcmxheSA9IHJlcXVpcmUoJy4vY2xpZW50LW92ZXJsYXknKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvYmxlbXM6IGZ1bmN0aW9uKHR5cGUsIG9iaikge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBidW5kbGUgaGFzIFwiICsgdHlwZSArIFwiOlwiKTtcbiAgICAgICAgb2JqW3R5cGVdLmZvckVhY2goZnVuY3Rpb24obXNnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gXCIgKyBzdHJpcChtc2cpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcmxheSAmJiB0eXBlICE9PSAnd2FybmluZ3MnKSBvdmVybGF5LnNob3dQcm9ibGVtcyh0eXBlLCBvYmpbdHlwZV0pO1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob3ZlcmxheSkgb3ZlcmxheS5jbGVhcigpO1xuICAgIH0sXG4gICAgdXNlQ3VzdG9tT3ZlcmxheTogZnVuY3Rpb24oY3VzdG9tT3ZlcmxheSkge1xuICAgICAgb3ZlcmxheSA9IGN1c3RvbU92ZXJsYXk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgcHJvY2Vzc1VwZGF0ZSA9IHJlcXVpcmUoJy4vcHJvY2Vzcy11cGRhdGUnKTtcblxudmFyIGN1c3RvbUhhbmRsZXI7XG52YXIgc3Vic2NyaWJlQWxsSGFuZGxlcjtcbmZ1bmN0aW9uIHByb2Nlc3NNZXNzYWdlKG9iaikge1xuICBzd2l0Y2gob2JqLmFjdGlvbikge1xuICAgIGNhc2UgXCJidWlsZGluZ1wiOlxuICAgICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZyhcIltITVJdIGJ1bmRsZSByZWJ1aWxkaW5nXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJ1aWx0XCI6XG4gICAgICBpZiAob3B0aW9ucy5sb2cpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJbSE1SXSBidW5kbGUgXCIgKyAob2JqLm5hbWUgPyBvYmoubmFtZSArIFwiIFwiIDogXCJcIikgK1xuICAgICAgICAgIFwicmVidWlsdCBpbiBcIiArIG9iai50aW1lICsgXCJtc1wiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBmYWxsIHRocm91Z2hcbiAgICBjYXNlIFwic3luY1wiOlxuICAgICAgaWYgKG9iai5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAocmVwb3J0ZXIpIHJlcG9ydGVyLnByb2JsZW1zKCdlcnJvcnMnLCBvYmopO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlcG9ydGVyKSB7XG4gICAgICAgICAgaWYgKG9iai53YXJuaW5ncy5sZW5ndGggPiAwKSByZXBvcnRlci5wcm9ibGVtcygnd2FybmluZ3MnLCBvYmopO1xuICAgICAgICAgIHJlcG9ydGVyLnN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzVXBkYXRlKG9iai5oYXNoLCBvYmoubW9kdWxlcywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGN1c3RvbUhhbmRsZXIpIHtcbiAgICAgICAgY3VzdG9tSGFuZGxlcihvYmopO1xuICAgICAgfVxuICB9XG5cbiAgaWYgKHN1YnNjcmliZUFsbEhhbmRsZXIpIHtcbiAgICBzdWJzY3JpYmVBbGxIYW5kbGVyKG9iaik7XG4gIH1cbn1cblxuaWYgKG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdWJzY3JpYmVBbGw6IGZ1bmN0aW9uIHN1YnNjcmliZUFsbChoYW5kbGVyKSB7XG4gICAgICBzdWJzY3JpYmVBbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgIGN1c3RvbUhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgdXNlQ3VzdG9tT3ZlcmxheTogZnVuY3Rpb24gdXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KSB7XG4gICAgICBpZiAocmVwb3J0ZXIpIHJlcG9ydGVyLnVzZUN1c3RvbU92ZXJsYXkoY3VzdG9tT3ZlcmxheSk7XG4gICAgfVxuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spLWhvdC1taWRkbGV3YXJlL2NsaWVudC5qcz9vdmVybGF5PWZhbHNlJnJlbG9hZD10cnVlXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIi8qKlxuICogQmFzZWQgaGVhdmlseSBvbiBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2Jsb2IvXG4gKiAgYzBhZmRmOWM2YWJjMWRkNzA3MDdjNTk0ZTQ3MzgwMmE1NjZmN2I2ZS9ob3Qvb25seS1kZXYtc2VydmVyLmpzXG4gKiBPcmlnaW5hbCBjb3B5cmlnaHQgVG9iaWFzIEtvcHBlcnMgQHNva3JhIChNSVQgbGljZW5zZSlcbiAqL1xuXG4vKiBnbG9iYWwgd2luZG93IF9fd2VicGFja19oYXNoX18gKi9cblxuaWYgKCFtb2R1bGUuaG90KSB7XG4gIHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuXG52YXIgaG1yRG9jc1VybCA9IFwiaHR0cDovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudC13aXRoLXdlYnBhY2suaHRtbFwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cblxudmFyIGxhc3RIYXNoO1xudmFyIGZhaWx1cmVTdGF0dXNlcyA9IHsgYWJvcnQ6IDEsIGZhaWw6IDEgfTtcbnZhciBhcHBseU9wdGlvbnMgPSB7IGlnbm9yZVVuYWNjZXB0ZWQ6IHRydWUgfTtcblxuZnVuY3Rpb24gdXBUb0RhdGUoaGFzaCkge1xuICBpZiAoaGFzaCkgbGFzdEhhc2ggPSBoYXNoO1xuICByZXR1cm4gbGFzdEhhc2ggPT0gX193ZWJwYWNrX2hhc2hfXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihoYXNoLCBtb2R1bGVNYXAsIG9wdGlvbnMpIHtcbiAgdmFyIHJlbG9hZCA9IG9wdGlvbnMucmVsb2FkO1xuICBpZiAoIXVwVG9EYXRlKGhhc2gpICYmIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT0gXCJpZGxlXCIpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKFwiW0hNUl0gQ2hlY2tpbmcgZm9yIHVwZGF0ZXMgb24gdGhlIHNlcnZlci4uLlwiKTtcbiAgICBjaGVjaygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oZXJyLCB1cGRhdGVkTW9kdWxlcykge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGhhbmRsZUVycm9yKGVycik7XG5cbiAgICAgIGlmKCF1cGRhdGVkTW9kdWxlcykge1xuICAgICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0hNUl0gQ2Fubm90IGZpbmQgdXBkYXRlIChGdWxsIHJlbG9hZCBuZWVkZWQpXCIpO1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIChQcm9iYWJseSBiZWNhdXNlIG9mIHJlc3RhcnRpbmcgdGhlIHNlcnZlcilcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGVyZm9ybVJlbG9hZCgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGFwcGx5Q2FsbGJhY2sgPSBmdW5jdGlvbihhcHBseUVyciwgcmVuZXdlZE1vZHVsZXMpIHtcbiAgICAgICAgaWYgKGFwcGx5RXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoYXBwbHlFcnIpO1xuXG4gICAgICAgIGlmICghdXBUb0RhdGUoKSkgY2hlY2soKTtcblxuICAgICAgICBsb2dVcGRhdGVzKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYXBwbHlSZXN1bHQgPSBtb2R1bGUuaG90LmFwcGx5KGFwcGx5T3B0aW9ucywgYXBwbHlDYWxsYmFjayk7XG4gICAgICAvLyB3ZWJwYWNrIDIgcHJvbWlzZVxuICAgICAgaWYgKGFwcGx5UmVzdWx0ICYmIGFwcGx5UmVzdWx0LnRoZW4pIHtcbiAgICAgICAgLy8gSG90TW9kdWxlUmVwbGFjZW1lbnQucnVudGltZS5qcyByZWZlcnMgdG8gdGhlIHJlc3VsdCBhcyBgb3V0ZGF0ZWRNb2R1bGVzYFxuICAgICAgICBhcHBseVJlc3VsdC50aGVuKGZ1bmN0aW9uKG91dGRhdGVkTW9kdWxlcykge1xuICAgICAgICAgIGFwcGx5Q2FsbGJhY2sobnVsbCwgb3V0ZGF0ZWRNb2R1bGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFwcGx5UmVzdWx0LmNhdGNoKGFwcGx5Q2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgfTtcblxuICAgIHZhciByZXN1bHQgPSBtb2R1bGUuaG90LmNoZWNrKGZhbHNlLCBjYik7XG4gICAgLy8gd2VicGFjayAyIHByb21pc2VcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG4gICAgICAgIHJlc3VsdC50aGVuKGZ1bmN0aW9uKHVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICAgICAgICBjYihudWxsLCB1cGRhdGVkTW9kdWxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQuY2F0Y2goY2IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ1VwZGF0ZXModXBkYXRlZE1vZHVsZXMsIHJlbmV3ZWRNb2R1bGVzKSB7XG4gICAgdmFyIHVuYWNjZXB0ZWRNb2R1bGVzID0gdXBkYXRlZE1vZHVsZXMuZmlsdGVyKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICByZXR1cm4gcmVuZXdlZE1vZHVsZXMgJiYgcmVuZXdlZE1vZHVsZXMuaW5kZXhPZihtb2R1bGVJZCkgPCAwO1xuICAgIH0pO1xuXG4gICAgaWYodW5hY2NlcHRlZE1vZHVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJbSE1SXSBUaGUgZm9sbG93aW5nIG1vZHVsZXMgY291bGRuJ3QgYmUgaG90IHVwZGF0ZWQ6IFwiICtcbiAgICAgICAgICBcIihGdWxsIHJlbG9hZCBuZWVkZWQpXFxuXCIgK1xuICAgICAgICAgIFwiVGhpcyBpcyB1c3VhbGx5IGJlY2F1c2UgdGhlIG1vZHVsZXMgd2hpY2ggaGF2ZSBjaGFuZ2VkIFwiICtcbiAgICAgICAgICBcIihhbmQgdGhlaXIgcGFyZW50cykgZG8gbm90IGtub3cgaG93IHRvIGhvdCByZWxvYWQgdGhlbXNlbHZlcy4gXCIgK1xuICAgICAgICAgIFwiU2VlIFwiICsgaG1yRG9jc1VybCArIFwiIGZvciBtb3JlIGRldGFpbHMuXCJcbiAgICAgICAgKTtcbiAgICAgICAgdW5hY2NlcHRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIltITVJdICAtIFwiICsgbW9kdWxlTWFwW21vZHVsZUlkXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGVyZm9ybVJlbG9hZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmxvZykge1xuICAgICAgaWYoIXJlbmV3ZWRNb2R1bGVzIHx8IHJlbmV3ZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuICAgICAgICByZW5ld2VkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSAgLSBcIiArIG1vZHVsZU1hcFttb2R1bGVJZF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVwVG9EYXRlKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBBcHAgaXMgdXAgdG8gZGF0ZS5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgaW4gZmFpbHVyZVN0YXR1c2VzKSB7XG4gICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltITVJdIENhbm5vdCBjaGVjayBmb3IgdXBkYXRlIChGdWxsIHJlbG9hZCBuZWVkZWQpXCIpO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbSE1SXSBcIiArIGVyci5zdGFjayB8fCBlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltITVJdIFVwZGF0ZSBjaGVjayBmYWlsZWQ6IFwiICsgZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtUmVsb2FkKCkge1xuICAgIGlmIChyZWxvYWQpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIGNvbnNvbGUud2FybihcIltITVJdIFJlbG9hZGluZyBwYWdlXCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS1ob3QtbWlkZGxld2FyZS9wcm9jZXNzLXVwZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmV4dC9oZWFkXCJcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoICh4KSB7fVxuICAgIH07XG5cbiAgICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnByb2Nlc3NTdHlsZU5hbWUgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmNyZWF0ZU1hcmt1cEZvclN0eWxlcyA9IGNyZWF0ZU1hcmt1cEZvclN0eWxlcztcblxudmFyIF9jYW1lbGl6ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lJyk7XG5cbnZhciBfY2FtZWxpemVTdHlsZU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemVTdHlsZU5hbWUpO1xuXG52YXIgX2Rhbmdlcm91c1N0eWxlVmFsdWUgPSByZXF1aXJlKCcuL2Rhbmdlcm91c1N0eWxlVmFsdWUnKTtcblxudmFyIF9kYW5nZXJvdXNTdHlsZVZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rhbmdlcm91c1N0eWxlVmFsdWUpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2ZianMvbGliL2h5cGhlbmF0ZVN0eWxlTmFtZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZU5hbWUpO1xuXG52YXIgX21lbW9pemVTdHJpbmdPbmx5ID0gcmVxdWlyZSgnZmJqcy9saWIvbWVtb2l6ZVN0cmluZ09ubHknKTtcblxudmFyIF9tZW1vaXplU3RyaW5nT25seTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZW1vaXplU3RyaW5nT25seSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IGV4cG9ydHMucHJvY2Vzc1N0eWxlTmFtZSA9ICgwLCBfbWVtb2l6ZVN0cmluZ09ubHkyLmRlZmF1bHQpKF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcHJvdmlkZXNNb2R1bGUgQ1NTUHJvcGVydHlPcGVyYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHdhcm5WYWxpZFN0eWxlO1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gJ21zVHJhbnNmb3JtJyBpcyBjb3JyZWN0LCBidXQgdGhlIG90aGVyIHByZWZpeGVzIHNob3VsZCBiZSBjYXBpdGFsaXplZFxuICAgIHZhciBiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4gPSAvXig/OndlYmtpdHxtb3p8bylbQS1aXS87XG5cbiAgICAvLyBzdHlsZSB2YWx1ZXMgc2hvdWxkbid0IGNvbnRhaW4gYSBzZW1pY29sb25cbiAgICB2YXIgYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuID0gLztcXHMqJC87XG5cbiAgICB2YXIgd2FybmVkU3R5bGVOYW1lcyA9IHt9O1xuICAgIHZhciB3YXJuZWRTdHlsZVZhbHVlcyA9IHt9O1xuICAgIHZhciB3YXJuZWRGb3JOYU5WYWx1ZSA9IGZhbHNlO1xuXG4gICAgdmFyIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lID0gZnVuY3Rpb24gd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpIHtcbiAgICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnVW5zdXBwb3J0ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8lcycsIG5hbWUsICgwLCBfY2FtZWxpemVTdHlsZU5hbWUyLmRlZmF1bHQpKG5hbWUpLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZShuYW1lLCBvd25lcikge1xuICAgICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdVbnN1cHBvcnRlZCB2ZW5kb3ItcHJlZml4ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8lcycsIG5hbWUsIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpLCBjaGVja1JlbmRlck1lc3NhZ2Uob3duZXIpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgdmFyIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbiA9IGZ1bmN0aW9uIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSwgb3duZXIpIHtcbiAgICAgIGlmICh3YXJuZWRTdHlsZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgJiYgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdID0gdHJ1ZTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnU3R5bGUgcHJvcGVydHkgdmFsdWVzIHNob3VsZG5cXCd0IGNvbnRhaW4gYSBzZW1pY29sb24uJXMgJyArICdUcnkgXCIlczogJXNcIiBpbnN0ZWFkLicsIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lciksIG5hbWUsIHZhbHVlLnJlcGxhY2UoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLCAnJykpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICB2YXIgd2FyblN0eWxlVmFsdWVJc05hTiA9IGZ1bmN0aW9uIHdhcm5TdHlsZVZhbHVlSXNOYU4obmFtZSwgdmFsdWUsIG93bmVyKSB7XG4gICAgICBpZiAod2FybmVkRm9yTmFOVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRGb3JOYU5WYWx1ZSA9IHRydWU7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2BOYU5gIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4lcycsIG5hbWUsIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICB2YXIgY2hlY2tSZW5kZXJNZXNzYWdlID0gZnVuY3Rpb24gY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSB7XG4gICAgICBpZiAob3duZXIpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBvd25lci5nZXROYW1lKCk7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuICcgQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1JlYWN0RE9NQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICAgKi9cblxuICAgIHdhcm5WYWxpZFN0eWxlID0gZnVuY3Rpb24gd2FyblZhbGlkU3R5bGUobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAgICAgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLXZhclxuICAgICAgdmFyIG93bmVyID0gdm9pZCAwO1xuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBvd25lciA9IGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgICAgd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpO1xuICAgICAgfSBlbHNlIGlmIChiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4udGVzdChuYW1lKSkge1xuICAgICAgICB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpO1xuICAgICAgfSBlbHNlIGlmIChiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uKG5hbWUsIHZhbHVlLCBvd25lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSkge1xuICAgICAgICB3YXJuU3R5bGVWYWx1ZUlzTmFOKG5hbWUsIHZhbHVlLCBvd25lcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtYXBwaW5nIG9mIHN0eWxlIHByb3BlcnRpZXMgZm9yIHVzZSBhcyBpbmxpbmUgc3R5bGVzOlxuICAgKlxuICAgKiAgID4gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHt3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAwfSlcbiAgICogICBcIndpZHRoOjIwMHB4O2hlaWdodDowO1wiXG4gICAqXG4gICAqIFVuZGVmaW5lZCB2YWx1ZXMgYXJlIGlnbm9yZWQgc28gdGhhdCBkZWNsYXJhdGl2ZSBwcm9ncmFtbWluZyBpcyBlYXNpZXIuXG4gICAqIFRoZSByZXN1bHQgc2hvdWxkIGJlIEhUTUwtZXNjYXBlZCBiZWZvcmUgaW5zZXJ0aW9uIGludG8gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0eWxlc1xuICAgKiBAcGFyYW0ge1JlYWN0RE9NQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICogQHJldHVybiB7P3N0cmluZ31cbiAgICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhzdHlsZXMsIGNvbXBvbmVudCkge1xuICB2YXIgc2VyaWFsaXplZCA9ICcnO1xuICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgdmFyIGlzQ3VzdG9tUHJvcCA9IHN0eWxlTmFtZS5pbmRleE9mKCctLScpID09PSAwO1xuICAgIGlmICghc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgc3R5bGVWYWx1ZSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc0N1c3RvbVByb3ApIHtcbiAgICAgIHdhcm5WYWxpZFN0eWxlKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSwgY29tcG9uZW50KTtcbiAgICB9XG4gICAgaWYgKHN0eWxlVmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzQ3VzdG9tUHJvcCkge1xuICAgICAgICBzZXJpYWxpemVkICs9IHN0eWxlTmFtZSArICc6JyArIHN0eWxlVmFsdWUgKyAnOyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXJpYWxpemVkICs9IHByb2Nlc3NTdHlsZU5hbWUoc3R5bGVOYW1lKSArICc6JztcbiAgICAgICAgc2VyaWFsaXplZCArPSAoMCwgX2Rhbmdlcm91c1N0eWxlVmFsdWUyLmRlZmF1bHQpKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSwgY29tcG9uZW50KSArICc7JztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcmlhbGl6ZWQgfHwgbnVsbDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG52YXIgX2h5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuXG4vKipcbiAqIENhbWVsY2FzZXMgYSBoeXBoZW5hdGVkIHN0cmluZywgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGNhbWVsaXplKCdiYWNrZ3JvdW5kLWNvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmRDb2xvclwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYW1lbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF9oeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoXywgY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbGl6ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvY2FtZWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcblxudmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG5cbi8qKlxuICogQ2FtZWxjYXNlcyBhIGh5cGhlbmF0ZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCctbW96LXRyYW5zaXRpb24nKVxuICogICA8IFwiTW96VHJhbnNpdGlvblwiXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJy1tcy10cmFuc2l0aW9uJylcbiAqICAgPCBcIm1zVHJhbnNpdGlvblwiXG4gKlxuICogQXMgQW5kaSBTbWl0aCBzdWdnZXN0c1xuICogKGh0dHA6Ly93d3cuYW5kaXNtaXRoLmNvbS9ibG9nLzIwMTIvMDIvbW9kZXJuaXpyLXByZWZpeGVkLyksIGFuIGAtbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGxvd2VyY2FzZSBgbXNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBjYW1lbGl6ZShzdHJpbmcucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemVTdHlsZU5hbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2NhbWVsaXplU3R5bGVOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF91cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqXG4gKiBGb3IgQ1NTIHN0eWxlIG5hbWVzLCB1c2UgYGh5cGhlbmF0ZVN0eWxlTmFtZWAgaW5zdGVhZCB3aGljaCB3b3JrcyBwcm9wZXJseVxuICogd2l0aCBhbGwgdmVuZG9yIHByZWZpeGVzLCBpbmNsdWRpbmcgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF91cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2h5cGhlbmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGh5cGhlbmF0ZSA9IHJlcXVpcmUoJy4vaHlwaGVuYXRlJyk7XG5cbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxuICogICA8IFwiLW1vei10cmFuc2l0aW9uXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ21zVHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXG4gKlxuICogQXMgTW9kZXJuaXpyIHN1Z2dlc3RzIChodHRwOi8vbW9kZXJuaXpyLmNvbS9kb2NzLyNwcmVmaXhlZCksIGFuIGBtc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKiBAdHlwZWNoZWNrcyBzdGF0aWMtb25seVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNZW1vaXplcyB0aGUgcmV0dXJuIHZhbHVlIG9mIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBzdHJpbmcgYXJndW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gbWVtb2l6ZVN0cmluZ09ubHkoY2FsbGJhY2spIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKCFjYWNoZS5oYXNPd25Qcm9wZXJ0eShzdHJpbmcpKSB7XG4gICAgICBjYWNoZVtzdHJpbmddID0gY2FsbGJhY2suY2FsbCh0aGlzLCBzdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVbc3RyaW5nXTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplU3RyaW5nT25seTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvbWVtb2l6ZVN0cmluZ09ubHkuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgQ1NTUHJvcGVydHlcbiAqL1xuXG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqL1xuXG52YXIgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxuICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICBib3JkZXJJbWFnZVdpZHRoOiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcblxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdtcycsICdNb3onLCAnTyddO1xuXG4vLyBVc2luZyBPYmplY3Qua2V5cyBoZXJlLCBvciBlbHNlIHRoZSB2YW5pbGxhIGZvci1pbiBsb29wIG1ha2VzIElFOCBnbyBpbnRvIGFuXG4vLyBpbmZpbml0ZSBsb29wLCBiZWNhdXNlIGl0IGl0ZXJhdGVzIG92ZXIgdGhlIG5ld2x5IGFkZGVkIHByb3BzIHRvby5cbk9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIE1vc3Qgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgdW5zZXQgYnkgZG9pbmcgLnN0eWxlW3Byb3BdID0gJycgYnV0IElFOFxuICogZG9lc24ndCBsaWtlIGRvaW5nIHRoYXQgd2l0aCBzaG9ydGhhbmQgcHJvcGVydGllcyBzbyBmb3IgdGhlIHByb3BlcnRpZXMgdGhhdFxuICogSUU4IGJyZWFrcyBvbiwgd2hpY2ggYXJlIGxpc3RlZCBoZXJlLCB3ZSBpbnN0ZWFkIHVuc2V0IGVhY2ggb2YgdGhlXG4gKiBpbmRpdmlkdWFsIHByb3BlcnRpZXMuIFNlZSBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM4NS5cbiAqIFRoZSA0LXZhbHVlICdjbG9jaycgcHJvcGVydGllcyBsaWtlIG1hcmdpbiwgcGFkZGluZywgYm9yZGVyLXdpZHRoIHNlZW0gdG9cbiAqIGJlaGF2ZSB3aXRob3V0IGFueSBwcm9ibGVtcy4gQ3VyaW91c2x5LCBsaXN0LXN0eWxlIHdvcmtzIHRvbyB3aXRob3V0IGFueVxuICogc3BlY2lhbCBwcm9kZGluZy5cbiAqL1xudmFyIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9ucyA9IHtcbiAgYmFja2dyb3VuZDoge1xuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiB0cnVlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IHRydWVcbiAgfSxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIGJvcmRlcldpZHRoOiB0cnVlLFxuICAgIGJvcmRlclN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIGJvcmRlckJvdHRvbVdpZHRoOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbVN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckxlZnQ6IHtcbiAgICBib3JkZXJMZWZ0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyTGVmdFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckxlZnRDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJSaWdodDoge1xuICAgIGJvcmRlclJpZ2h0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyUmlnaHRTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJSaWdodENvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlclRvcDoge1xuICAgIGJvcmRlclRvcFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlclRvcFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlclRvcENvbG9yOiB0cnVlXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBmb250U3R5bGU6IHRydWUsXG4gICAgZm9udFZhcmlhbnQ6IHRydWUsXG4gICAgZm9udFdlaWdodDogdHJ1ZSxcbiAgICBmb250U2l6ZTogdHJ1ZSxcbiAgICBsaW5lSGVpZ2h0OiB0cnVlLFxuICAgIGZvbnRGYW1pbHk6IHRydWVcbiAgfSxcbiAgb3V0bGluZToge1xuICAgIG91dGxpbmVXaWR0aDogdHJ1ZSxcbiAgICBvdXRsaW5lU3R5bGU6IHRydWUsXG4gICAgb3V0bGluZUNvbG9yOiB0cnVlXG4gIH1cbn07XG5cbnZhciBDU1NQcm9wZXJ0eSA9IHtcbiAgaXNVbml0bGVzc051bWJlcjogaXNVbml0bGVzc051bWJlcixcbiAgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zOiBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENTU1Byb3BlcnR5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL0NTU1Byb3BlcnR5T3BlcmF0aW9ucy9DU1NQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DU1NQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHknKTtcblxudmFyIF9DU1NQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DU1NQcm9wZXJ0eSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZGFuZ2Vyb3VzU3R5bGVWYWx1ZVxuICovXG5cbnZhciBpc1VuaXRsZXNzTnVtYmVyID0gX0NTU1Byb3BlcnR5Mi5kZWZhdWx0LmlzVW5pdGxlc3NOdW1iZXI7XG52YXIgc3R5bGVXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9IE5vcm1hbGl6ZWQgc3R5bGUgdmFsdWUgd2l0aCBkaW1lbnNpb25zIGFwcGxpZWQuXG4gKi9cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAvLyBOb3RlIHRoYXQgd2UndmUgcmVtb3ZlZCBlc2NhcGVUZXh0Rm9yQnJvd3NlcigpIGNhbGxzIGhlcmUgc2luY2UgdGhlXG4gIC8vIHdob2xlIHN0cmluZyB3aWxsIGJlIGVzY2FwZWQgd2hlbiB0aGUgYXR0cmlidXRlIGlzIGluamVjdGVkIGludG9cbiAgLy8gdGhlIG1hcmt1cC4gSWYgeW91IHByb3ZpZGUgdW5zYWZlIHVzZXIgZGF0YSBoZXJlIHRoZXkgY2FuIGluamVjdFxuICAvLyBhcmJpdHJhcnkgQ1NTIHdoaWNoIG1heSBiZSBwcm9ibGVtYXRpYyAoSSBjb3VsZG4ndCByZXBybyB0aGlzKTpcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9YU1NfRmlsdGVyX0V2YXNpb25fQ2hlYXRfU2hlZXRcbiAgLy8gaHR0cDovL3d3dy50aGVzcGFubmVyLmNvLnVrLzIwMDcvMTEvMjYvdWx0aW1hdGUteHNzLWNzcy1pbmplY3Rpb24vXG4gIC8vIFRoaXMgaXMgbm90IGFuIFhTUyBob2xlIGJ1dCBpbnN0ZWFkIGEgcG90ZW50aWFsIENTUyBpbmplY3Rpb24gaXNzdWVcbiAgLy8gd2hpY2ggaGFzIGxlYWQgdG8gYSBncmVhdGVyIGRpc2N1c3Npb24gYWJvdXQgaG93IHdlJ3JlIGdvaW5nIHRvXG4gIC8vIHRydXN0IFVSTHMgbW92aW5nIGZvcndhcmQuIFNlZSAjMjExNTkwMVxuXG4gIHZhciBpc0VtcHR5ID0gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJyc7XG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGlzTm9uTnVtZXJpYyA9IGlzTmFOKHZhbHVlKTtcbiAgaWYgKGlzTm9uTnVtZXJpYyB8fCB2YWx1ZSA9PT0gMCB8fCBpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pIHtcbiAgICByZXR1cm4gJycgKyB2YWx1ZTsgLy8gY2FzdCB0byBzdHJpbmdcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIEFsbG93ICcwJyB0byBwYXNzIHRocm91Z2ggd2l0aG91dCB3YXJuaW5nLiAwIGlzIGFscmVhZHkgc3BlY2lhbCBhbmRcbiAgICAgIC8vIGRvZXNuJ3QgcmVxdWlyZSB1bml0cywgc28gd2UgZG9uJ3QgbmVlZCB0byB3YXJuIGFib3V0IGl0LlxuICAgICAgaWYgKGNvbXBvbmVudCAmJiB2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgIHZhciBvd25lciA9IGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQuX293bmVyO1xuICAgICAgICB2YXIgb3duZXJOYW1lID0gb3duZXIgPyBvd25lci5nZXROYW1lKCkgOiBudWxsO1xuICAgICAgICBpZiAob3duZXJOYW1lICYmICFzdHlsZVdhcm5pbmdzW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBzdHlsZVdhcm5pbmdzW293bmVyTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2FybmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvd25lck5hbWUpIHtcbiAgICAgICAgICB2YXIgd2FybmluZ3MgPSBzdHlsZVdhcm5pbmdzW293bmVyTmFtZV07XG4gICAgICAgICAgd2FybmVkID0gd2FybmluZ3NbbmFtZV07XG4gICAgICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgICAgIHdhcm5pbmdzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2EgYCVzYCB0YWcgKG93bmVyOiBgJXNgKSB3YXMgcGFzc2VkIGEgbnVtZXJpYyBzdHJpbmcgdmFsdWUgJyArICdmb3IgQ1NTIHByb3BlcnR5IGAlc2AgKHZhbHVlOiBgJXNgKSB3aGljaCB3aWxsIGJlIHRyZWF0ZWQgJyArICdhcyBhIHVuaXRsZXNzIG51bWJlciBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIFJlYWN0LicsIGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQudHlwZSwgb3duZXJOYW1lIHx8ICd1bmtub3duJywgbmFtZSwgdmFsdWUpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICB9XG4gIHJldHVybiB2YWx1ZSArICdweCc7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRhbmdlcm91c1N0eWxlVmFsdWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zL2Rhbmdlcm91c1N0eWxlVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY2xlYW47XG4vLyBSZXR1cm5zIHRydWUgZm9yIG51bGwsIGZhbHNlLCB1bmRlZmluZWQgYW5kIHt9XG5mdW5jdGlvbiBpc0ZhbHN5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSB8fCAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBjbGVhbk9iamVjdChvYmplY3QpIHtcbiAgaWYgKGlzRmFsc3kob2JqZWN0KSkgcmV0dXJuIG51bGw7XG4gIGlmICgodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgIT09ICdvYmplY3QnKSByZXR1cm4gb2JqZWN0O1xuXG4gIHZhciBhY2MgPSB7fSxcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgaGFzRmFsc3kgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0W2tleXNbaV1dO1xuICAgIHZhciBmaWx0ZXJlZFZhbHVlID0gY2xlYW4odmFsdWUpO1xuICAgIGlmIChmaWx0ZXJlZFZhbHVlID09PSBudWxsIHx8IGZpbHRlcmVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBoYXNGYWxzeSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBhY2Nba2V5c1tpXV0gPSBmaWx0ZXJlZFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMoYWNjKS5sZW5ndGggPT09IDAgPyBudWxsIDogaGFzRmFsc3kgPyBhY2MgOiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGNsZWFuQXJyYXkocnVsZXMpIHtcbiAgdmFyIGhhc0ZhbHN5ID0gZmFsc2U7XG4gIHZhciBmaWx0ZXJlZCA9IFtdO1xuICBydWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgdmFyIGZpbHRlcmVkUnVsZSA9IGNsZWFuKHJ1bGUpO1xuICAgIGlmIChmaWx0ZXJlZFJ1bGUgPT09IG51bGwgfHwgZmlsdGVyZWRSdWxlICE9PSBydWxlKSB7XG4gICAgICBoYXNGYWxzeSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGZpbHRlcmVkLnB1c2goZmlsdGVyZWRSdWxlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWQubGVuZ3RoID09IDAgPyBudWxsIDogaGFzRmFsc3kgPyBmaWx0ZXJlZCA6IHJ1bGVzO1xufVxuXG4vLyBUYWtlcyBzdHlsZSBhcnJheSBvciBvYmplY3QgcHJvdmlkZWQgYnkgdXNlciBhbmQgY2xlYXJzIGFsbCB0aGUgZmFsc3kgZGF0YSBcbi8vIElmIHRoZXJlIGlzIG5vIHN0eWxlcyBsZWZ0IGFmdGVyIGZpbHRyYXRpb24gcmV0dXJucyBudWxsXG5mdW5jdGlvbiBjbGVhbihpbnB1dCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBjbGVhbkFycmF5KGlucHV0KSA6IGNsZWFuT2JqZWN0KGlucHV0KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9jbGVhbi5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZG9IYXNoO1xuLy8gbXVybXVyaGFzaDIgdmlhIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3JheWNtb3JnYW4vNTg4NDIzXG5cbmZ1bmN0aW9uIGRvSGFzaChzdHIsIHNlZWQpIHtcbiAgdmFyIG0gPSAweDViZDFlOTk1O1xuICB2YXIgciA9IDI0O1xuICB2YXIgaCA9IHNlZWQgXiBzdHIubGVuZ3RoO1xuICB2YXIgbGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgd2hpbGUgKGxlbmd0aCA+PSA0KSB7XG4gICAgdmFyIGsgPSBVSW50MzIoc3RyLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgayA9IFVtdWwzMihrLCBtKTtcbiAgICBrIF49IGsgPj4+IHI7XG4gICAgayA9IFVtdWwzMihrLCBtKTtcblxuICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgaCBePSBrO1xuXG4gICAgY3VycmVudEluZGV4ICs9IDQ7XG4gICAgbGVuZ3RoIC09IDQ7XG4gIH1cblxuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gVUludDE2KHN0ciwgY3VycmVudEluZGV4KTtcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoY3VycmVudEluZGV4ICsgMikgPDwgMTY7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IFVJbnQxNihzdHIsIGN1cnJlbnRJbmRleCk7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGN1cnJlbnRJbmRleCk7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBoIF49IGggPj4+IDEzO1xuICBoID0gVW11bDMyKGgsIG0pO1xuICBoIF49IGggPj4+IDE1O1xuXG4gIHJldHVybiBoID4+PiAwO1xufVxuXG5mdW5jdGlvbiBVSW50MzIoc3RyLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQ29kZUF0KHBvcysrKSArIChzdHIuY2hhckNvZGVBdChwb3MrKykgPDwgOCkgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDE2KSArIChzdHIuY2hhckNvZGVBdChwb3MpIDw8IDI0KTtcbn1cblxuZnVuY3Rpb24gVUludDE2KHN0ciwgcG9zKSB7XG4gIHJldHVybiBzdHIuY2hhckNvZGVBdChwb3MrKykgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDgpO1xufVxuXG5mdW5jdGlvbiBVbXVsMzIobiwgbSkge1xuICBuID0gbiB8IDA7XG4gIG0gPSBtIHwgMDtcbiAgdmFyIG5sbyA9IG4gJiAweGZmZmY7XG4gIHZhciBuaGkgPSBuID4+PiAxNjtcbiAgdmFyIHJlcyA9IG5sbyAqIG0gKyAoKG5oaSAqIG0gJiAweGZmZmYpIDw8IDE2KSB8IDA7XG4gIHJldHVybiByZXM7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvaGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29tcG9zZSA9IGV4cG9ydHMubWVyZ2UgPSBleHBvcnRzLiQgPSBleHBvcnRzLnN0eWxlID0gZXhwb3J0cy5wcmVzZXRzID0gZXhwb3J0cy5rZXlmcmFtZXMgPSBleHBvcnRzLmZvbnRGYWNlID0gZXhwb3J0cy5pbnNlcnRHbG9iYWwgPSBleHBvcnRzLmluc2VydFJ1bGUgPSBleHBvcnRzLnBsdWdpbnMgPSBleHBvcnRzLnN0eWxlU2hlZXQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnNwZWVkeSA9IHNwZWVkeTtcbmV4cG9ydHMuc2ltdWxhdGlvbnMgPSBzaW11bGF0aW9ucztcbmV4cG9ydHMuc2ltdWxhdGUgPSBzaW11bGF0ZTtcbmV4cG9ydHMuY3NzTGFiZWxzID0gY3NzTGFiZWxzO1xuZXhwb3J0cy5pc0xpa2VSdWxlID0gaXNMaWtlUnVsZTtcbmV4cG9ydHMuaWRGb3IgPSBpZEZvcjtcbmV4cG9ydHMuY3NzID0gY3NzO1xuZXhwb3J0cy5yZWh5ZHJhdGUgPSByZWh5ZHJhdGU7XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbmV4cG9ydHMucGFyZW50ID0gcGFyZW50O1xuZXhwb3J0cy5tZWRpYSA9IG1lZGlhO1xuZXhwb3J0cy5wc2V1ZG8gPSBwc2V1ZG87XG5leHBvcnRzLmFjdGl2ZSA9IGFjdGl2ZTtcbmV4cG9ydHMuYW55ID0gYW55O1xuZXhwb3J0cy5jaGVja2VkID0gY2hlY2tlZDtcbmV4cG9ydHMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLl9kZWZhdWx0ID0gX2RlZmF1bHQ7XG5leHBvcnRzLmZpcnN0ID0gZmlyc3Q7XG5leHBvcnRzLmZpcnN0Q2hpbGQgPSBmaXJzdENoaWxkO1xuZXhwb3J0cy5maXJzdE9mVHlwZSA9IGZpcnN0T2ZUeXBlO1xuZXhwb3J0cy5mdWxsc2NyZWVuID0gZnVsbHNjcmVlbjtcbmV4cG9ydHMuZm9jdXMgPSBmb2N1cztcbmV4cG9ydHMuaG92ZXIgPSBob3ZlcjtcbmV4cG9ydHMuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7XG5leHBvcnRzLmluUmFuZ2UgPSBpblJhbmdlO1xuZXhwb3J0cy5pbnZhbGlkID0gaW52YWxpZDtcbmV4cG9ydHMubGFzdENoaWxkID0gbGFzdENoaWxkO1xuZXhwb3J0cy5sYXN0T2ZUeXBlID0gbGFzdE9mVHlwZTtcbmV4cG9ydHMubGVmdCA9IGxlZnQ7XG5leHBvcnRzLmxpbmsgPSBsaW5rO1xuZXhwb3J0cy5vbmx5Q2hpbGQgPSBvbmx5Q2hpbGQ7XG5leHBvcnRzLm9ubHlPZlR5cGUgPSBvbmx5T2ZUeXBlO1xuZXhwb3J0cy5vcHRpb25hbCA9IG9wdGlvbmFsO1xuZXhwb3J0cy5vdXRPZlJhbmdlID0gb3V0T2ZSYW5nZTtcbmV4cG9ydHMucmVhZE9ubHkgPSByZWFkT25seTtcbmV4cG9ydHMucmVhZFdyaXRlID0gcmVhZFdyaXRlO1xuZXhwb3J0cy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuZXhwb3J0cy5yaWdodCA9IHJpZ2h0O1xuZXhwb3J0cy5yb290ID0gcm9vdDtcbmV4cG9ydHMuc2NvcGUgPSBzY29wZTtcbmV4cG9ydHMudGFyZ2V0ID0gdGFyZ2V0O1xuZXhwb3J0cy52YWxpZCA9IHZhbGlkO1xuZXhwb3J0cy52aXNpdGVkID0gdmlzaXRlZDtcbmV4cG9ydHMuZGlyID0gZGlyO1xuZXhwb3J0cy5sYW5nID0gbGFuZztcbmV4cG9ydHMubm90ID0gbm90O1xuZXhwb3J0cy5udGhDaGlsZCA9IG50aENoaWxkO1xuZXhwb3J0cy5udGhMYXN0Q2hpbGQgPSBudGhMYXN0Q2hpbGQ7XG5leHBvcnRzLm50aExhc3RPZlR5cGUgPSBudGhMYXN0T2ZUeXBlO1xuZXhwb3J0cy5udGhPZlR5cGUgPSBudGhPZlR5cGU7XG5leHBvcnRzLmFmdGVyID0gYWZ0ZXI7XG5leHBvcnRzLmJlZm9yZSA9IGJlZm9yZTtcbmV4cG9ydHMuZmlyc3RMZXR0ZXIgPSBmaXJzdExldHRlcjtcbmV4cG9ydHMuZmlyc3RMaW5lID0gZmlyc3RMaW5lO1xuZXhwb3J0cy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG5leHBvcnRzLmJhY2tkcm9wID0gYmFja2Ryb3A7XG5leHBvcnRzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5leHBvcnRzLmNzc0ZvciA9IGNzc0ZvcjtcbmV4cG9ydHMuYXR0cmlic0ZvciA9IGF0dHJpYnNGb3I7XG5cbnZhciBfc2hlZXQgPSByZXF1aXJlKCcuL3NoZWV0LmpzJyk7XG5cbnZhciBfQ1NTUHJvcGVydHlPcGVyYXRpb25zID0gcmVxdWlyZSgnLi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMnKTtcblxudmFyIF9jbGVhbiA9IHJlcXVpcmUoJy4vY2xlYW4uanMnKTtcblxudmFyIF9jbGVhbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGVhbik7XG5cbnZhciBfcGx1Z2lucyA9IHJlcXVpcmUoJy4vcGx1Z2lucycpO1xuXG52YXIgX2hhc2ggPSByZXF1aXJlKCcuL2hhc2gnKTtcblxudmFyIF9oYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfSAvKiBzdHlsZXNoZWV0ICovXG5cblxudmFyIHN0eWxlU2hlZXQgPSBleHBvcnRzLnN0eWxlU2hlZXQgPSBuZXcgX3NoZWV0LlN0eWxlU2hlZXQoKTtcbi8vIGFuIGlzb21vcnBoaWMgU3R5bGVTaGVldCBzaGltLiBoaWRlcyBhbGwgdGhlIG5pdHR5IGdyaXR0eS5cblxuLy8gLyoqKioqKioqKioqKioqKiogTElGVE9GRiBJTiAzLi4uIDIuLi4gMS4uLiAqKioqKioqKioqKioqKioqL1xuc3R5bGVTaGVldC5pbmplY3QoKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuLy8gLyoqKioqKioqKioqKioqKiogICAgICBUTyBUSEUgTU9PT09PT09OICAgICAqKioqKioqKioqKioqKioqL1xuXG4vLyBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byB0b2dnbGUgc3BlZWR5XG5mdW5jdGlvbiBzcGVlZHkoYm9vbCkge1xuICByZXR1cm4gc3R5bGVTaGVldC5zcGVlZHkoYm9vbCk7XG59XG5cbi8vIHBsdWdpbnNcbi8vIHdlIGluY2x1ZGUgdGhlc2UgYnkgZGVmYXVsdFxudmFyIHBsdWdpbnMgPSBleHBvcnRzLnBsdWdpbnMgPSBzdHlsZVNoZWV0LnBsdWdpbnMgPSBuZXcgX3BsdWdpbnMuUGx1Z2luU2V0KF9wbHVnaW5zLnByZWZpeGVzLCBfcGx1Z2lucy5mYWxsYmFja3MpO1xucGx1Z2lucy5tZWRpYSA9IG5ldyBfcGx1Z2lucy5QbHVnaW5TZXQoKTsgLy8gbmVhdCEgbWVkaWEsIGZvbnQtZmFjZSwga2V5ZnJhbWVzXG5wbHVnaW5zLmZvbnRGYWNlID0gbmV3IF9wbHVnaW5zLlBsdWdpblNldCgpO1xucGx1Z2lucy5rZXlmcmFtZXMgPSBuZXcgX3BsdWdpbnMuUGx1Z2luU2V0KF9wbHVnaW5zLnByZWZpeGVzKTtcblxuLy8gZGVmaW5lIHNvbWUgY29uc3RhbnRzXG5cbnZhciBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8ICFwcm9jZXNzLmVudi5OT0RFX0VOVjtcbnZhciBpc1Rlc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnO1xuXG4vKioqKiBzaW11bGF0aW9ucyAgKioqKi9cblxuLy8gYSBmbGFnIHRvIGVuYWJsZSBzaW11bGF0aW9uIG1ldGEgdGFncyBvbiBkb20gbm9kZXNcbi8vIGRlZmF1bHRzIHRvIHRydWUgaW4gZGV2IG1vZGUuIHJlY29tbWVuZCAqbm90KiB0b1xuLy8gdG9nZ2xlIG9mdGVuLlxudmFyIGNhblNpbXVsYXRlID0gaXNEZXY7XG5cbi8vIHdlIHVzZSB0aGVzZSBmbGFncyBmb3IgaXNzdWluZyB3YXJuaW5ncyB3aGVuIHNpbXVsYXRlIGlzIGNhbGxlZFxuLy8gaW4gcHJvZCAvIGluIGluY29ycmVjdCBvcmRlclxudmFyIHdhcm5lZDEgPSBmYWxzZSxcbiAgICB3YXJuZWQyID0gZmFsc2U7XG5cbi8vIHRvZ2dsZXMgc2ltdWxhdGlvbiBhY3Rpdml0eS4gc2hvdWxkbid0IGJlIG5lZWRlZCBpbiBtb3N0IGNhc2VzXG5mdW5jdGlvbiBzaW11bGF0aW9ucygpIHtcbiAgdmFyIGJvb2wgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgY2FuU2ltdWxhdGUgPSAhIWJvb2w7XG59XG5cbi8vIHVzZSB0aGlzIG9uIGRvbSBub2RlcyB0byAnc2ltdWxhdGUnIHBzZXVkb2NsYXNzZXNcbi8vIDxkaXYgey4uLmhvdmVyKHsgY29sb3I6ICdyZWQnIH0pfSB7Li4uc2ltdWxhdGUoJ2hvdmVyJywgJ3Zpc2l0ZWQnKX0+Li4uPC9kaXY+XG4vLyB5b3UgY2FuIGV2ZW4gc2VuZCBpbiBzb21lIHdlaXJkIG9uZXMsIGFzIGxvbmcgYXMgaXQncyBpbiBzaW1wbGUgZm9ybWF0XG4vLyBhbmQgbWF0Y2hlcyBhbiBleGlzdGluZyBydWxlIG9uIHRoZSBlbGVtZW50XG4vLyBlZyBzaW11bGF0ZSgnbnRoQ2hpbGQyJywgJzpob3ZlcjphY3RpdmUnKSBldGNcbmZ1bmN0aW9uIHNpbXVsYXRlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHNldWRvcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBzZXVkb3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBwc2V1ZG9zID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkocHNldWRvcyk7XG4gIGlmICghcHNldWRvcykgcmV0dXJuIHt9O1xuICBpZiAoIWNhblNpbXVsYXRlKSB7XG4gICAgaWYgKCF3YXJuZWQxKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhblxcJ3Qgc2ltdWxhdGUgd2l0aG91dCBvbmNlIGNhbGxpbmcgc2ltdWxhdGlvbnModHJ1ZSknKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIHdhcm5lZDEgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzRGV2ICYmICFpc1Rlc3QgJiYgIXdhcm5lZDIpIHtcbiAgICAgIGNvbnNvbGUud2FybignZG9uXFwndCB1c2Ugc2ltdWxhdGlvbiBvdXRzaWRlIGRldicpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgd2FybmVkMiA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gcHNldWRvcy5yZWR1Y2UoZnVuY3Rpb24gKG8sIHApIHtcbiAgICByZXR1cm4gb1snZGF0YS1zaW11bGF0ZS0nICsgc2ltcGxlKHApXSA9ICcnLCBvO1xuICB9LCB7fSk7XG59XG5cbi8qKioqIGxhYmVscyAqKioqL1xuLy8gdG9nZ2xlIGZvciBkZWJ1ZyBsYWJlbHMuXG4vLyAqc2hvdWxkbid0KiBoYXZlIHRvIG1lc3Mgd2l0aCB0aGlzIG1hbnVhbGx5XG52YXIgaGFzTGFiZWxzID0gaXNEZXY7XG5cbmZ1bmN0aW9uIGNzc0xhYmVscyhib29sKSB7XG4gIGhhc0xhYmVscyA9ICEhYm9vbDtcbn1cblxuLy8gdGFrZXMgYSBzdHJpbmcsIGNvbnZlcnRzIHRvIGxvd2VyY2FzZSwgc3RyaXBzIG91dCBub25hbHBoYW51bWVyaWMuXG5mdW5jdGlvbiBzaW1wbGUoc3RyKSB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpO1xufVxuXG4vLyBoYXNoZXMgYSBzdHJpbmcgdG8gc29tZXRoaW5nICd1bmlxdWUnXG4vLyB3ZSB1c2UgdGhpcyB0byBnZW5lcmF0ZSBpZHMgZm9yIHN0eWxlc1xuXG5cbmZ1bmN0aW9uIGhhc2hpZnkoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgb2JqcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgb2Jqc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfaGFzaDIuZGVmYXVsdCkob2Jqcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeCk7XG4gIH0pLmpvaW4oJycpKS50b1N0cmluZygzNik7XG59XG5cbi8vIG9mIHNoYXBlIHsgJ2RhdGEtY3NzLTxpZD4nOiAnJyB9XG5mdW5jdGlvbiBpc0xpa2VSdWxlKHJ1bGUpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhydWxlKS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geCAhPT0gJ3RvU3RyaW5nJztcbiAgfSk7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gISEvZGF0YVxcLWNzc1xcLShbYS16QS1aMC05XSspLy5leGVjKGtleXNbMF0pO1xufVxuXG4vLyBleHRyYWN0cyBpZCBmcm9tIGEgeyAnZGF0YS1jc3MtPGlkPic6ICcnfSBsaWtlIG9iamVjdFxuZnVuY3Rpb24gaWRGb3IocnVsZSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJ1bGUpLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4ICE9PSAndG9TdHJpbmcnO1xuICB9KTtcbiAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIHJ1bGUnKTtcbiAgdmFyIHJlZ2V4ID0gL2RhdGFcXC1jc3NcXC0oW2EtekEtWjAtOV0rKS87XG4gIHZhciBtYXRjaCA9IHJlZ2V4LmV4ZWMoa2V5c1swXSk7XG4gIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcignbm90IGEgcnVsZScpO1xuICByZXR1cm4gbWF0Y2hbMV07XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yKGlkLCBwYXRoKSB7XG5cbiAgaWYgKCFpZCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcJi9nLCAnJyk7XG4gIH1cbiAgaWYgKCFwYXRoKSByZXR1cm4gJy5jc3MtJyArIGlkICsgJyxbZGF0YS1jc3MtJyArIGlkICsgJ10nO1xuXG4gIHZhciB4ID0gcGF0aC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4LmluZGV4T2YoJyYnKSA+PSAwID8gW3gucmVwbGFjZSgvXFwmL21nLCAnLmNzcy0nICsgaWQpLCB4LnJlcGxhY2UoL1xcJi9tZywgJ1tkYXRhLWNzcy0nICsgaWQgKyAnXScpXS5qb2luKCcsJykgLy8gdG9kbyAtIG1ha2Ugc3VyZSBlYWNoIHN1YiBzZWxlY3RvciBoYXMgYW4gJlxuICAgIDogJy5jc3MtJyArIGlkICsgeCArICcsW2RhdGEtY3NzLScgKyBpZCArICddJyArIHg7XG4gIH0pLmpvaW4oJywnKTtcblxuICBpZiAoY2FuU2ltdWxhdGUgJiYgL15cXCZcXDovLmV4ZWMocGF0aCkgJiYgIS9cXHMvLmV4ZWMocGF0aCkpIHtcbiAgICB4ICs9ICcsLmNzcy0nICsgaWQgKyAnW2RhdGEtc2ltdWxhdGUtJyArIHNpbXBsZShwYXRoKSArICddLFtkYXRhLWNzcy0nICsgaWQgKyAnXVtkYXRhLXNpbXVsYXRlLScgKyBzaW1wbGUocGF0aCkgKyAnXSc7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIHRvQ1NTKF9yZWYpIHtcbiAgdmFyIHNlbGVjdG9yID0gX3JlZi5zZWxlY3RvcixcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICB2YXIgcmVzdWx0ID0gcGx1Z2lucy50cmFuc2Zvcm0oeyBzZWxlY3Rvcjogc2VsZWN0b3IsIHN0eWxlOiBzdHlsZSB9KTtcbiAgcmV0dXJuIHJlc3VsdC5zZWxlY3RvciArICd7JyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLmNyZWF0ZU1hcmt1cEZvclN0eWxlcykocmVzdWx0LnN0eWxlKSArICd9Jztcbn1cblxuZnVuY3Rpb24gZGVjb25zdHJ1Y3Qoc3R5bGUpIHtcbiAgLy8gd2UgY2FuIGJlIHN1cmUgaXQncyBub3QgaW5maW5pdGVseSBuZXN0ZWQgaGVyZSBcbiAgdmFyIHBsYWluID0gdm9pZCAwLFxuICAgICAgc2VsZWN0cyA9IHZvaWQgMCxcbiAgICAgIG1lZGlhcyA9IHZvaWQgMCxcbiAgICAgIHN1cHBvcnRzID0gdm9pZCAwO1xuICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleS5pbmRleE9mKCcmJykgPj0gMCkge1xuICAgICAgc2VsZWN0cyA9IHNlbGVjdHMgfHwge307XG4gICAgICBzZWxlY3RzW2tleV0gPSBzdHlsZVtrZXldO1xuICAgIH0gZWxzZSBpZiAoa2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBtZWRpYXMgPSBtZWRpYXMgfHwge307XG4gICAgICBtZWRpYXNba2V5XSA9IGRlY29uc3RydWN0KHN0eWxlW2tleV0pO1xuICAgIH0gZWxzZSBpZiAoa2V5LmluZGV4T2YoJ0BzdXBwb3J0cycpID09PSAwKSB7XG4gICAgICBzdXBwb3J0cyA9IHN1cHBvcnRzIHx8IHt9O1xuICAgICAgc3VwcG9ydHNba2V5XSA9IGRlY29uc3RydWN0KHN0eWxlW2tleV0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbGFiZWwnKSB7XG4gICAgICBpZiAoc3R5bGUubGFiZWwubGVuZ3RoID4gMCkge1xuICAgICAgICBwbGFpbiA9IHBsYWluIHx8IHt9O1xuICAgICAgICBwbGFpbi5sYWJlbCA9IHN0eWxlLmxhYmVsLmpvaW4oJy4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGxhaW4gPSBwbGFpbiB8fCB7fTtcbiAgICAgIHBsYWluW2tleV0gPSBzdHlsZVtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7IHBsYWluOiBwbGFpbiwgc2VsZWN0czogc2VsZWN0cywgbWVkaWFzOiBtZWRpYXMsIHN1cHBvcnRzOiBzdXBwb3J0cyB9O1xufVxuXG5mdW5jdGlvbiBkZWNvbnN0cnVjdGVkU3R5bGVUb0NTUyhpZCwgc3R5bGUpIHtcbiAgdmFyIGNzcyA9IFtdO1xuXG4gIC8vIHBsdWdpbnMgaGVyZVxuICB2YXIgcGxhaW4gPSBzdHlsZS5wbGFpbixcbiAgICAgIHNlbGVjdHMgPSBzdHlsZS5zZWxlY3RzLFxuICAgICAgbWVkaWFzID0gc3R5bGUubWVkaWFzLFxuICAgICAgc3VwcG9ydHMgPSBzdHlsZS5zdXBwb3J0cztcblxuICBpZiAocGxhaW4pIHtcbiAgICBjc3MucHVzaCh0b0NTUyh7IHN0eWxlOiBwbGFpbiwgc2VsZWN0b3I6IHNlbGVjdG9yKGlkKSB9KSk7XG4gIH1cbiAgaWYgKHNlbGVjdHMpIHtcbiAgICBPYmplY3Qua2V5cyhzZWxlY3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjc3MucHVzaCh0b0NTUyh7IHN0eWxlOiBzZWxlY3RzW2tleV0sIHNlbGVjdG9yOiBzZWxlY3RvcihpZCwga2V5KSB9KSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG1lZGlhcykge1xuICAgIE9iamVjdC5rZXlzKG1lZGlhcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gY3NzLnB1c2goa2V5ICsgJ3snICsgZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1MoaWQsIG1lZGlhc1trZXldKS5qb2luKCcnKSArICd9Jyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHN1cHBvcnRzKSB7XG4gICAgT2JqZWN0LmtleXMoc3VwcG9ydHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGNzcy5wdXNoKGtleSArICd7JyArIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGlkLCBzdXBwb3J0c1trZXldKS5qb2luKCcnKSArICd9Jyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNzcztcbn1cblxuLy8gdGhpcyBjYWNoZSB0byB0cmFjayB3aGljaCBydWxlcyBoYXZlXG4vLyBiZWVuIGluc2VydGVkIGludG8gdGhlIHN0eWxlc2hlZXRcbnZhciBpbnNlcnRlZCA9IHN0eWxlU2hlZXQuaW5zZXJ0ZWQgPSB7fTtcblxuLy8gYW5kIGhlbHBlcnMgdG8gaW5zZXJ0IHJ1bGVzIGludG8gc2FpZCBzdHlsZVNoZWV0XG5mdW5jdGlvbiBpbnNlcnQoc3BlYykge1xuICBpZiAoIWluc2VydGVkW3NwZWMuaWRdKSB7XG4gICAgaW5zZXJ0ZWRbc3BlYy5pZF0gPSB0cnVlO1xuICAgIHZhciBkZWNvbnN0cnVjdGVkID0gZGVjb25zdHJ1Y3Qoc3BlYy5zdHlsZSk7XG4gICAgZGVjb25zdHJ1Y3RlZFN0eWxlVG9DU1Moc3BlYy5pZCwgZGVjb25zdHJ1Y3RlZCkubWFwKGZ1bmN0aW9uIChjc3NSdWxlKSB7XG4gICAgICByZXR1cm4gc3R5bGVTaGVldC5pbnNlcnQoY3NzUnVsZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gYSBzaW1wbGUgY2FjaGUgdG8gc3RvcmUgZ2VuZXJhdGVkIHJ1bGVzXG52YXIgcmVnaXN0ZXJlZCA9IHN0eWxlU2hlZXQucmVnaXN0ZXJlZCA9IHt9O1xuZnVuY3Rpb24gcmVnaXN0ZXIoc3BlYykge1xuICBpZiAoIXJlZ2lzdGVyZWRbc3BlYy5pZF0pIHtcbiAgICByZWdpc3RlcmVkW3NwZWMuaWRdID0gc3BlYztcbiAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0UmVnaXN0ZXJlZChydWxlKSB7XG4gIGlmIChpc0xpa2VSdWxlKHJ1bGUpKSB7XG4gICAgdmFyIHJldCA9IHJlZ2lzdGVyZWRbaWRGb3IocnVsZSldO1xuICAgIGlmIChyZXQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbZ2xhbW9yXSBhbiB1bmV4cGVjdGVkIHJ1bGUgY2FjaGUgbWlzcyBvY2N1cnJlZC4gVGhpcyBpcyBwcm9iYWJseSBhIHNpZ24gb2YgbXVsdGlwbGUgZ2xhbW9yIGluc3RhbmNlcyBpbiB5b3VyIGFwcC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9pc3N1ZXMvNzknKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICByZXR1cm4gcnVsZTtcbn1cblxuLy8gdG9kbyAtIHBlcmZcbnZhciBydWxlQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIHRvUnVsZShzcGVjKSB7XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpbnNlcnQoc3BlYyk7XG4gIGlmIChydWxlQ2FjaGVbc3BlYy5pZF0pIHtcbiAgICByZXR1cm4gcnVsZUNhY2hlW3NwZWMuaWRdO1xuICB9XG5cbiAgdmFyIHJldCA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgJ2RhdGEtY3NzLScgKyBzcGVjLmlkLCBoYXNMYWJlbHMgPyBzcGVjLmxhYmVsIHx8ICcnIDogJycpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0LCAndG9TdHJpbmcnLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiAnY3NzLScgKyBzcGVjLmlkO1xuICAgIH1cbiAgfSk7XG4gIHJ1bGVDYWNoZVtzcGVjLmlkXSA9IHJldDtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29uc29sZS5sb2codGhpcyk7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yKGtleSkge1xuICB2YXIgcG9zc2libGVzID0gWyc6JywgJy4nLCAnWycsICc+JywgJyAnXSxcbiAgICAgIGZvdW5kID0gZmFsc2UsXG4gICAgICBjaCA9IGtleS5jaGFyQXQoMCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zc2libGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNoID09PSBwb3NzaWJsZXNbaV0pIHtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm91bmQgfHwga2V5LmluZGV4T2YoJyYnKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBqb2luU2VsZWN0b3JzKGEsIGIpIHtcbiAgdmFyIGFzID0gYS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiAhKGEuaW5kZXhPZignJicpID49IDApID8gJyYnICsgYSA6IGE7XG4gIH0pO1xuICB2YXIgYnMgPSBiLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuICEoYi5pbmRleE9mKCcmJykgPj0gMCkgPyAnJicgKyBiIDogYjtcbiAgfSk7XG5cbiAgcmV0dXJuIGJzLnJlZHVjZShmdW5jdGlvbiAoYXJyLCBiKSB7XG4gICAgcmV0dXJuIGFyci5jb25jYXQoYXMubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gYi5yZXBsYWNlKC9cXCYvZywgYSk7XG4gICAgfSkpO1xuICB9LCBbXSkuam9pbignLCcpO1xufVxuXG5mdW5jdGlvbiBqb2luTWVkaWFRdWVyaWVzKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyAnQG1lZGlhICcgKyBhLnN1YnN0cmluZyg2KSArICcgYW5kICcgKyBiLnN1YnN0cmluZyg2KSA6IGI7XG59XG5cbmZ1bmN0aW9uIGlzTWVkaWFRdWVyeShrZXkpIHtcbiAgcmV0dXJuIGtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNTdXBwb3J0cyhrZXkpIHtcbiAgcmV0dXJuIGtleS5pbmRleE9mKCdAc3VwcG9ydHMnKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gam9pblN1cHBvcnRzKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyAnQHN1cHBvcnRzICcgKyBhLnN1YnN0cmluZyg5KSArICcgYW5kICcgKyBiLnN1YnN0cmluZyg5KSA6IGI7XG59XG5cbi8vIGZsYXR0ZW4gYSBuZXN0ZWQgYXJyYXlcbmZ1bmN0aW9uIGZsYXR0ZW4oaW5BcnIpIHtcbiAgdmFyIGFyciA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5BcnJbaV0pKSBhcnIgPSBhcnIuY29uY2F0KGZsYXR0ZW4oaW5BcnJbaV0pKTtlbHNlIGFyciA9IGFyci5jb25jYXQoaW5BcnJbaV0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbi8vIG11dGFibGUhIG1vZGlmaWVzIGRlc3QuXG5mdW5jdGlvbiBidWlsZChkZXN0LCBfcmVmMikge1xuICB2YXIgX3JlZjIkc2VsZWN0b3IgPSBfcmVmMi5zZWxlY3RvcixcbiAgICAgIHNlbGVjdG9yID0gX3JlZjIkc2VsZWN0b3IgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjIkc2VsZWN0b3IsXG4gICAgICBfcmVmMiRtcSA9IF9yZWYyLm1xLFxuICAgICAgbXEgPSBfcmVmMiRtcSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiRtcSxcbiAgICAgIF9yZWYyJHN1cHAgPSBfcmVmMi5zdXBwLFxuICAgICAgc3VwcCA9IF9yZWYyJHN1cHAgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZjIkc3VwcCxcbiAgICAgIF9yZWYyJHNyYyA9IF9yZWYyLnNyYyxcbiAgICAgIHNyYyA9IF9yZWYyJHNyYyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMiRzcmM7XG5cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgIHNyYyA9IFtzcmNdO1xuICB9XG4gIHNyYyA9IGZsYXR0ZW4oc3JjKTtcblxuICBzcmMuZm9yRWFjaChmdW5jdGlvbiAoX3NyYykge1xuICAgIGlmIChpc0xpa2VSdWxlKF9zcmMpKSB7XG4gICAgICB2YXIgcmVnID0gX2dldFJlZ2lzdGVyZWQoX3NyYyk7XG4gICAgICBpZiAocmVnLnR5cGUgIT09ICdjc3MnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IG1lcmdlIHRoaXMgcnVsZScpO1xuICAgICAgfVxuICAgICAgX3NyYyA9IHJlZy5zdHlsZTtcbiAgICB9XG4gICAgX3NyYyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKF9zcmMpO1xuICAgIGlmIChfc3JjLmNvbXBvc2VzKSB7XG4gICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgbXE6IG1xLCBzdXBwOiBzdXBwLCBzcmM6IF9zcmMuY29tcG9zZXMgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKF9zcmMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGlzU2VsZWN0b3Ioa2V5KSkge1xuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yID09PSAnOjpwbGFjZWhvbGRlcicgPyAnOjpwbGFjZWhvbGRlciwgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCA6Oi1tb3otcGxhY2Vob2xkZXIsIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJyA6IHNlbGVjdG9yO1xuXG4gICAgICAgIGJ1aWxkKGRlc3QsIHsgc2VsZWN0b3I6IGpvaW5TZWxlY3RvcnMoc2VsZWN0b3IsIGtleSksIG1xOiBtcSwgc3VwcDogc3VwcCwgc3JjOiBfc3JjW2tleV0gfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTWVkaWFRdWVyeShrZXkpKSB7XG4gICAgICAgIGJ1aWxkKGRlc3QsIHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBtcTogam9pbk1lZGlhUXVlcmllcyhtcSwga2V5KSwgc3VwcDogc3VwcCwgc3JjOiBfc3JjW2tleV0gfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU3VwcG9ydHMoa2V5KSkge1xuICAgICAgICBidWlsZChkZXN0LCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgbXE6IG1xLCBzdXBwOiBqb2luU3VwcG9ydHMoc3VwcCwga2V5KSwgc3JjOiBfc3JjW2tleV0gfSk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2NvbXBvc2VzJykge1xuICAgICAgICAvLyBpZ25vcmUsIHdlIGFscmVhZHkgZGVhbHRoIHdpdGggaXRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfZGVzdCA9IGRlc3Q7XG4gICAgICAgIGlmIChzdXBwKSB7XG4gICAgICAgICAgX2Rlc3Rbc3VwcF0gPSBfZGVzdFtzdXBwXSB8fCB7fTtcbiAgICAgICAgICBfZGVzdCA9IF9kZXN0W3N1cHBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtcSkge1xuICAgICAgICAgIF9kZXN0W21xXSA9IF9kZXN0W21xXSB8fCB7fTtcbiAgICAgICAgICBfZGVzdCA9IF9kZXN0W21xXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICBfZGVzdFtzZWxlY3Rvcl0gPSBfZGVzdFtzZWxlY3Rvcl0gfHwge307XG4gICAgICAgICAgX2Rlc3QgPSBfZGVzdFtzZWxlY3Rvcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnbGFiZWwnICYmIGhhc0xhYmVscykge1xuICAgICAgICAgIGRlc3QubGFiZWwgPSBkZXN0LmxhYmVsLmNvbmNhdChfc3JjLmxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfZGVzdFtrZXldID0gX3NyY1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfY3NzKHJ1bGVzKSB7XG4gIHZhciBzdHlsZSA9IHsgbGFiZWw6IFtdIH07XG4gIGJ1aWxkKHN0eWxlLCB7IHNyYzogcnVsZXMgfSk7IC8vIG11dGF0aXZlISBidXQgd29ydGggaXQuIFxuXG4gIHZhciBzcGVjID0ge1xuICAgIGlkOiBoYXNoaWZ5KHN0eWxlKSxcbiAgICBzdHlsZTogc3R5bGUsIGxhYmVsOiBzdHlsZS5sYWJlbC5qb2luKCcuJyksXG4gICAgdHlwZTogJ2NzcydcbiAgfTtcbiAgcmV0dXJuIHRvUnVsZShzcGVjKTtcbn1cblxudmFyIG51bGxydWxlID0ge1xuICAvLyAnZGF0YS1jc3MtbmlsJzogJydcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobnVsbHJ1bGUsICd0b1N0cmluZycsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICByZXR1cm4gJ2Nzcy1uaWwnO1xuICB9XG59KTtcblxuZnVuY3Rpb24gY3NzKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBydWxlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgaWYgKHJ1bGVzWzBdICYmIHJ1bGVzWzBdLmxlbmd0aCAmJiBydWxlc1swXS5yYXcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBmb3Jnb3QgdG8gaW5jbHVkZSBnbGFtb3IvYmFiZWwgaW4geW91ciBiYWJlbCBwbHVnaW5zLicpO1xuICB9XG5cbiAgcnVsZXMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShydWxlcyk7XG4gIGlmICghcnVsZXMpIHtcbiAgICByZXR1cm4gbnVsbHJ1bGU7IC8vIHRvZG8gLSBudWxscnVsZSBcbiAgfVxuXG4gIHJldHVybiBfY3NzKHJ1bGVzKTtcbn1cblxuY3NzLmluc2VydCA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkoY3NzKSxcbiAgICBjc3M6IGNzcyxcbiAgICB0eXBlOiAncmF3J1xuICB9O1xuICByZWdpc3RlcihzcGVjKTtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0KHNwZWMuY3NzKTtcbiAgICBpbnNlcnRlZFtzcGVjLmlkXSA9IHRydWU7XG4gIH1cbn07XG5cbnZhciBpbnNlcnRSdWxlID0gZXhwb3J0cy5pbnNlcnRSdWxlID0gY3NzLmluc2VydDtcblxuY3NzLmdsb2JhbCA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc3R5bGUpIHtcbiAgcmV0dXJuIGNzcy5pbnNlcnQoc2VsZWN0b3IgKyAneycgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMpKHN0eWxlKSArICd9Jyk7XG59O1xuXG52YXIgaW5zZXJ0R2xvYmFsID0gZXhwb3J0cy5pbnNlcnRHbG9iYWwgPSBjc3MuZ2xvYmFsO1xuXG5mdW5jdGlvbiBpbnNlcnRLZXlmcmFtZShzcGVjKSB7XG4gIGlmICghaW5zZXJ0ZWRbc3BlYy5pZF0pIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyID0gT2JqZWN0LmtleXMoc3BlYy5rZXlmcmFtZXMpLm1hcChmdW5jdGlvbiAoa2YpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBsdWdpbnMua2V5ZnJhbWVzLnRyYW5zZm9ybSh7IGlkOiBzcGVjLmlkLCBuYW1lOiBrZiwgc3R5bGU6IHNwZWMua2V5ZnJhbWVzW2tmXSB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5uYW1lICsgJ3snICsgKDAsIF9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMuY3JlYXRlTWFya3VwRm9yU3R5bGVzKShyZXN1bHQuc3R5bGUpICsgJ30nO1xuICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgIFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJyddLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICByZXR1cm4gc3R5bGVTaGVldC5pbnNlcnQoJ0AnICsgcHJlZml4ICsgJ2tleWZyYW1lcyAnICsgKHNwZWMubmFtZSArICdfJyArIHNwZWMuaWQpICsgJ3snICsgaW5uZXIgKyAnfScpO1xuICAgICAgfSk7XG5cbiAgICAgIGluc2VydGVkW3NwZWMuaWRdID0gdHJ1ZTtcbiAgICB9KSgpO1xuICB9XG59XG5jc3Mua2V5ZnJhbWVzID0gZnVuY3Rpb24gKG5hbWUsIGtmcykge1xuICBpZiAoIWtmcykge1xuICAgIGtmcyA9IG5hbWUsIG5hbWUgPSAnYW5pbWF0aW9uJztcbiAgfVxuXG4gIC8vIGRvIG5vdCBpZ25vcmUgZW1wdHkga2V5ZnJhbWUgZGVmaW5pdGlvbnMgZm9yIG5vdy5cbiAga2ZzID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkoa2ZzKSB8fCB7fTtcbiAgdmFyIHNwZWMgPSB7XG4gICAgaWQ6IGhhc2hpZnkobmFtZSwga2ZzKSxcbiAgICB0eXBlOiAna2V5ZnJhbWVzJyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIGtleWZyYW1lczoga2ZzXG4gIH07XG4gIHJlZ2lzdGVyKHNwZWMpO1xuICBpbnNlcnRLZXlmcmFtZShzcGVjKTtcbiAgcmV0dXJuIG5hbWUgKyAnXycgKyBzcGVjLmlkO1xufTtcblxudmFyIGZvbnRGYWNlID0gZXhwb3J0cy5mb250RmFjZSA9IGNzcy5mb250RmFjZTtcbnZhciBrZXlmcmFtZXMgPSBleHBvcnRzLmtleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXM7XG5cbmZ1bmN0aW9uIGluc2VydEZvbnRGYWNlKHNwZWMpIHtcbiAgaWYgKCFpbnNlcnRlZFtzcGVjLmlkXSkge1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0KCdAZm9udC1mYWNleycgKyAoMCwgX0NTU1Byb3BlcnR5T3BlcmF0aW9ucy5jcmVhdGVNYXJrdXBGb3JTdHlsZXMpKHNwZWMuZm9udCkgKyAnfScpO1xuICAgIGluc2VydGVkW3NwZWMuaWRdID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyB3ZSBkb24ndCBnbyBhbGwgb3V0IGZvciBmb250cyBhcyBtdWNoLCBnaXZpbmcgYSBzaW1wbGUgZm9udCBsb2FkaW5nIHN0cmF0ZWd5XG4vLyB1c2UgYSBmYW5jaWVyIGxpYiBpZiB5b3UgbmVlZCBtb2FyIHBvd2VyXG5jc3MuZm9udEZhY2UgPSBmdW5jdGlvbiAoZm9udCkge1xuICBmb250ID0gKDAsIF9jbGVhbjIuZGVmYXVsdCkoZm9udCk7XG4gIHZhciBzcGVjID0ge1xuICAgIGlkOiBoYXNoaWZ5KGZvbnQpLFxuICAgIHR5cGU6ICdmb250LWZhY2UnLFxuICAgIGZvbnQ6IGZvbnRcbiAgfTtcbiAgcmVnaXN0ZXIoc3BlYyk7XG4gIGluc2VydEZvbnRGYWNlKHNwZWMpO1xuXG4gIHJldHVybiBmb250LmZvbnRGYW1pbHk7XG59O1xuXG4vLyByZWh5ZHJhdGUgdGhlIGluc2VydGlvbiBjYWNoZSB3aXRoIGlkcyBzZW50IGZyb21cbi8vIHJlbmRlclN0YXRpYyAvIHJlbmRlclN0YXRpY09wdGltaXplZFxuZnVuY3Rpb24gcmVoeWRyYXRlKGlkcykge1xuICAvLyBsb2FkIHVwIGlkc1xuICBPYmplY3QuYXNzaWduKGluc2VydGVkLCBpZHMucmVkdWNlKGZ1bmN0aW9uIChvLCBpKSB7XG4gICAgcmV0dXJuIG9baV0gPSB0cnVlLCBvO1xuICB9LCB7fSkpO1xuICAvLyBhc3N1bWUgY3NzIGxvYWRlZCBzZXBhcmF0ZWx5XG59XG5cbi8vIGNsZWFycyBvdXQgdGhlIGNhY2hlIGFuZCBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0XG4vLyBiZXN0IGZvciB0ZXN0cywgdGhvdWdoIHRoZXJlIG1pZ2h0IGJlIHNvbWUgdmFsdWUgZm9yIFNTUi5cblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIGluc2VydGVkID0gc3R5bGVTaGVldC5pbnNlcnRlZCA9IHt9O1xuICByZWdpc3RlcmVkID0gc3R5bGVTaGVldC5yZWdpc3RlcmVkID0ge307XG4gIHJ1bGVDYWNoZSA9IHt9O1xuICBzdHlsZVNoZWV0LmZsdXNoKCk7XG4gIHN0eWxlU2hlZXQuaW5qZWN0KCk7XG59XG5cbnZhciBwcmVzZXRzID0gZXhwb3J0cy5wcmVzZXRzID0ge1xuICBtb2JpbGU6ICcobWluLXdpZHRoOiA0MDBweCknLFxuICBNb2JpbGU6ICdAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpJyxcbiAgcGhhYmxldDogJyhtaW4td2lkdGg6IDU1MHB4KScsXG4gIFBoYWJsZXQ6ICdAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpJyxcbiAgdGFibGV0OiAnKG1pbi13aWR0aDogNzUwcHgpJyxcbiAgVGFibGV0OiAnQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KScsXG4gIGRlc2t0b3A6ICcobWluLXdpZHRoOiAxMDAwcHgpJyxcbiAgRGVza3RvcDogJ0BtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpJyxcbiAgaGQ6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgSGQ6ICdAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSdcbn07XG5cbnZhciBzdHlsZSA9IGV4cG9ydHMuc3R5bGUgPSBjc3M7XG5cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBzdHlsZXNbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHN0eWxlKHN0eWxlcyk7XG4gIH1cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdG9yLCBzdHlsZXMpKTtcbn1cbnZhciAkID0gZXhwb3J0cy4kID0gc2VsZWN0O1xuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZXMgPSBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgc3R5bGVzW19rZXk1IC0gMV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgcmV0dXJuIGNzcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdG9yICsgJyAmJywgc3R5bGVzKSk7XG59XG5cbnZhciBtZXJnZSA9IGV4cG9ydHMubWVyZ2UgPSBjc3M7XG52YXIgY29tcG9zZSA9IGV4cG9ydHMuY29tcG9zZSA9IGNzcztcblxuZnVuY3Rpb24gbWVkaWEocXVlcnkpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBydWxlcyA9IEFycmF5KF9sZW42ID4gMSA/IF9sZW42IC0gMSA6IDApLCBfa2V5NiA9IDE7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBydWxlc1tfa2V5NiAtIDFdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgfVxuXG4gIHJldHVybiBjc3MoX2RlZmluZVByb3BlcnR5KHt9LCAnQG1lZGlhICcgKyBxdWVyeSwgcnVsZXMpKTtcbn1cblxuZnVuY3Rpb24gcHNldWRvKHNlbGVjdG9yKSB7XG4gIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVzID0gQXJyYXkoX2xlbjcgPiAxID8gX2xlbjcgLSAxIDogMCksIF9rZXk3ID0gMTsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgIHN0eWxlc1tfa2V5NyAtIDFdID0gYXJndW1lbnRzW19rZXk3XTtcbiAgfVxuXG4gIHJldHVybiBjc3MoX2RlZmluZVByb3BlcnR5KHt9LCBzZWxlY3Rvciwgc3R5bGVzKSk7XG59XG5cbi8vIGFsbGxsbGwgdGhlIHBzZXVkb2NsYXNzZXNcblxuZnVuY3Rpb24gYWN0aXZlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmFjdGl2ZScsIHgpO1xufVxuXG5mdW5jdGlvbiBhbnkoeCkge1xuICByZXR1cm4gcHNldWRvKCc6YW55JywgeCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6Y2hlY2tlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpkaXNhYmxlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBlbXB0eSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzplbXB0eScsIHgpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmVuYWJsZWQnLCB4KTtcbn1cblxuZnVuY3Rpb24gX2RlZmF1bHQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZGVmYXVsdCcsIHgpOyAvLyBub3RlICdfZGVmYXVsdCcgbmFtZVxufVxuXG5mdW5jdGlvbiBmaXJzdCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmaXJzdCcsIHgpO1xufVxuXG5mdW5jdGlvbiBmaXJzdENoaWxkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZpcnN0LWNoaWxkJywgeCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0T2ZUeXBlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZpcnN0LW9mLXR5cGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gZnVsbHNjcmVlbih4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpmdWxsc2NyZWVuJywgeCk7XG59XG5cbmZ1bmN0aW9uIGZvY3VzKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmZvY3VzJywgeCk7XG59XG5cbmZ1bmN0aW9uIGhvdmVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmhvdmVyJywgeCk7XG59XG5cbmZ1bmN0aW9uIGluZGV0ZXJtaW5hdGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aW5kZXRlcm1pbmF0ZScsIHgpO1xufVxuXG5mdW5jdGlvbiBpblJhbmdlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmluLXJhbmdlJywgeCk7XG59XG5cbmZ1bmN0aW9uIGludmFsaWQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6aW52YWxpZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBsYXN0Q2hpbGQoeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGFzdC1jaGlsZCcsIHgpO1xufVxuXG5mdW5jdGlvbiBsYXN0T2ZUeXBlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxhc3Qtb2YtdHlwZScsIHgpO1xufVxuXG5mdW5jdGlvbiBsZWZ0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOmxlZnQnLCB4KTtcbn1cblxuZnVuY3Rpb24gbGluayh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpsaW5rJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpvbmx5LWNoaWxkJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9ubHlPZlR5cGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b25seS1vZi10eXBlJywgeCk7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm9wdGlvbmFsJywgeCk7XG59XG5cbmZ1bmN0aW9uIG91dE9mUmFuZ2UoeCkge1xuICByZXR1cm4gcHNldWRvKCc6b3V0LW9mLXJhbmdlJywgeCk7XG59XG5cbmZ1bmN0aW9uIHJlYWRPbmx5KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJlYWQtb25seScsIHgpO1xufVxuXG5mdW5jdGlvbiByZWFkV3JpdGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6cmVhZC13cml0ZScsIHgpO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyZXF1aXJlZCcsIHgpO1xufVxuXG5mdW5jdGlvbiByaWdodCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpyaWdodCcsIHgpO1xufVxuXG5mdW5jdGlvbiByb290KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnJvb3QnLCB4KTtcbn1cblxuZnVuY3Rpb24gc2NvcGUoeCkge1xuICByZXR1cm4gcHNldWRvKCc6c2NvcGUnLCB4KTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0KHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnRhcmdldCcsIHgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZCh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzp2YWxpZCcsIHgpO1xufVxuXG5mdW5jdGlvbiB2aXNpdGVkKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOnZpc2l0ZWQnLCB4KTtcbn1cblxuLy8gcGFyYW1ldGVyaXplZCBwc2V1ZG9jbGFzc2VzXG5mdW5jdGlvbiBkaXIocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6ZGlyKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIGxhbmcocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bGFuZygnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBub3QocCwgeCkge1xuICAvLyBzaG91bGQgdGhpcyBiZSBhIHBsdWdpbj9cbiAgdmFyIHNlbGVjdG9yID0gcC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4LnRyaW0oKTtcbiAgfSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuICc6bm90KCcgKyB4ICsgJyknO1xuICB9KTtcbiAgaWYgKHNlbGVjdG9yLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBwc2V1ZG8oJzpub3QoJyArIHAgKyAnKScsIHgpO1xuICB9XG4gIHJldHVybiBzZWxlY3Qoc2VsZWN0b3Iuam9pbignJyksIHgpO1xufVxuZnVuY3Rpb24gbnRoQ2hpbGQocCwgeCkge1xuICByZXR1cm4gcHNldWRvKCc6bnRoLWNoaWxkKCcgKyBwICsgJyknLCB4KTtcbn1cbmZ1bmN0aW9uIG50aExhc3RDaGlsZChwLCB4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzpudGgtbGFzdC1jaGlsZCgnICsgcCArICcpJywgeCk7XG59XG5mdW5jdGlvbiBudGhMYXN0T2ZUeXBlKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1sYXN0LW9mLXR5cGUoJyArIHAgKyAnKScsIHgpO1xufVxuZnVuY3Rpb24gbnRoT2ZUeXBlKHAsIHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOm50aC1vZi10eXBlKCcgKyBwICsgJyknLCB4KTtcbn1cblxuLy8gcHNldWRvZWxlbWVudHNcbmZ1bmN0aW9uIGFmdGVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjphZnRlcicsIHgpO1xufVxuZnVuY3Rpb24gYmVmb3JlKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpiZWZvcmUnLCB4KTtcbn1cbmZ1bmN0aW9uIGZpcnN0TGV0dGVyKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpmaXJzdC1sZXR0ZXInLCB4KTtcbn1cbmZ1bmN0aW9uIGZpcnN0TGluZSh4KSB7XG4gIHJldHVybiBwc2V1ZG8oJzo6Zmlyc3QtbGluZScsIHgpO1xufVxuZnVuY3Rpb24gc2VsZWN0aW9uKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpzZWxlY3Rpb24nLCB4KTtcbn1cbmZ1bmN0aW9uIGJhY2tkcm9wKHgpIHtcbiAgcmV0dXJuIHBzZXVkbygnOjpiYWNrZHJvcCcsIHgpO1xufVxuZnVuY3Rpb24gcGxhY2Vob2xkZXIoeCkge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvaXNzdWVzLzE0XG4gIHJldHVybiBjc3MoeyAnOjpwbGFjZWhvbGRlcic6IHggfSk7XG59XG5cbi8qKiogaGVscGVycyBmb3Igd2ViIGNvbXBvbmVudHMgKioqL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2lzc3Vlcy8xNlxuXG5mdW5jdGlvbiBjc3NGb3IoKSB7XG4gIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgcnVsZXMgPSBBcnJheShfbGVuOCksIF9rZXk4ID0gMDsgX2tleTggPCBfbGVuODsgX2tleTgrKykge1xuICAgIHJ1bGVzW19rZXk4XSA9IGFyZ3VtZW50c1tfa2V5OF07XG4gIH1cblxuICBydWxlcyA9ICgwLCBfY2xlYW4yLmRlZmF1bHQpKHJ1bGVzKTtcbiAgcmV0dXJuIHJ1bGVzID8gcnVsZXMubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgdmFyIHN0eWxlID0geyBsYWJlbDogW10gfTtcbiAgICBidWlsZChzdHlsZSwgeyBzcmM6IHIgfSk7IC8vIG11dGF0aXZlISBidXQgd29ydGggaXQuICAgXG4gICAgcmV0dXJuIGRlY29uc3RydWN0ZWRTdHlsZVRvQ1NTKGhhc2hpZnkoc3R5bGUpLCBkZWNvbnN0cnVjdChzdHlsZSkpLmpvaW4oJycpO1xuICB9KS5qb2luKCcnKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJzRm9yKCkge1xuICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIHJ1bGVzID0gQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICBydWxlc1tfa2V5OV0gPSBhcmd1bWVudHNbX2tleTldO1xuICB9XG5cbiAgcnVsZXMgPSAoMCwgX2NsZWFuMi5kZWZhdWx0KShydWxlcyk7XG4gIHZhciBodG1sQXR0cmlidXRlcyA9IHJ1bGVzID8gcnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgaWRGb3IocnVsZSk7IC8vIHRocm93YXdheSBjaGVjayBmb3IgcnVsZVxuICAgIHZhciBrZXkgPSBPYmplY3Qua2V5cyhydWxlKVswXSxcbiAgICAgICAgdmFsdWUgPSBydWxlW2tleV07XG4gICAgcmV0dXJuIGtleSArICc9XCInICsgKHZhbHVlIHx8ICcnKSArICdcIic7XG4gIH0pLmpvaW4oJyAnKSA6ICcnO1xuXG4gIHJldHVybiBodG1sQXR0cmlidXRlcztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAodHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGV4cG9ydHMpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6IGdsb2JhbC5JbmxpbmVTdHlsZVByZWZpeEFsbCA9IGZhY3RvcnkoKTtcbn0pKHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGJhYmVsSGVscGVycyA9IHt9O1xuXG4gIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH07XG5cbiAgYmFiZWxIZWxwZXJzLmNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG4gIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBiYWJlbEhlbHBlcnM7XG5cbiAgZnVuY3Rpb24gX19jb21tb25qcyhmbiwgbW9kdWxlKSB7XG4gICAgcmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgdmFyIHByZWZpeFByb3BzID0geyBcIldlYmtpdFwiOiB7IFwidHJhbnNmb3JtXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpbllcIjogdHJ1ZSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZVwiOiB0cnVlLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtU3R5bGVcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IHRydWUsIFwiYW5pbWF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRGVsYXlcIjogdHJ1ZSwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiB0cnVlLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdHJ1ZSwgXCJhbmltYXRpb25OYW1lXCI6IHRydWUsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IHRydWUsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSwgXCJhcHBlYXJhbmNlXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcImZvbnRLZXJuaW5nXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiB0cnVlLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IHRydWUsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IHRydWUsIFwiY2xpcFBhdGhcIjogdHJ1ZSwgXCJtYXNrSW1hZ2VcIjogdHJ1ZSwgXCJtYXNrTW9kZVwiOiB0cnVlLCBcIm1hc2tSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrUG9zaXRpb25cIjogdHJ1ZSwgXCJtYXNrQ2xpcFwiOiB0cnVlLCBcIm1hc2tPcmlnaW5cIjogdHJ1ZSwgXCJtYXNrU2l6ZVwiOiB0cnVlLCBcIm1hc2tDb21wb3NpdGVcIjogdHJ1ZSwgXCJtYXNrXCI6IHRydWUsIFwibWFza0JvcmRlclNvdXJjZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJNb2RlXCI6IHRydWUsIFwibWFza0JvcmRlclNsaWNlXCI6IHRydWUsIFwibWFza0JvcmRlcldpZHRoXCI6IHRydWUsIFwibWFza0JvcmRlck91dHNldFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyXCI6IHRydWUsIFwibWFza1R5cGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB0cnVlLCBcImZpbHRlclwiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUsIFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiB0cnVlLCBcImZsZXhEaXJlY3Rpb25cIjogdHJ1ZSwgXCJmbGV4R3Jvd1wiOiB0cnVlLCBcImZsZXhGbG93XCI6IHRydWUsIFwiZmxleFNocmlua1wiOiB0cnVlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IHRydWUsIFwiYWxpZ25JdGVtc1wiOiB0cnVlLCBcImFsaWduU2VsZlwiOiB0cnVlLCBcImp1c3RpZnlDb250ZW50XCI6IHRydWUsIFwib3JkZXJcIjogdHJ1ZSwgXCJiYWNrZHJvcEZpbHRlclwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOiB0cnVlLCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogdHJ1ZSwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmbG93SW50b1wiOiB0cnVlLCBcImZsb3dGcm9tXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlLCBcInRyYW5zaXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSB9LCBcIk1velwiOiB7IFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJib3hTaXppbmdcIjogdHJ1ZSwgXCJ0ZXh0QWxpZ25MYXN0XCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJ0YWJTaXplXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUgfSwgXCJtc1wiOiB7IFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiBmYWxzZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogZmFsc2UsIFwiZmxleEZsb3dcIjogdHJ1ZSwgXCJmbGV4U2hyaW5rXCI6IGZhbHNlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IGZhbHNlLCBcImFsaWduSXRlbXNcIjogZmFsc2UsIFwiYWxpZ25TZWxmXCI6IGZhbHNlLCBcImp1c3RpZnlDb250ZW50XCI6IGZhbHNlLCBcIm9yZGVyXCI6IGZhbHNlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJ3cmFwRmxvd1wiOiB0cnVlLCBcIndyYXBUaHJvdWdoXCI6IHRydWUsIFwid3JhcE1hcmdpblwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwidG91Y2hBY3Rpb25cIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZmxvd0ludG9cIjogdHJ1ZSwgXCJmbG93RnJvbVwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVDb2x1bW5zXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlUm93c1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlXCI6IHRydWUsIFwiZ3JpZEF1dG9Db2x1bW5zXCI6IHRydWUsIFwiZ3JpZEF1dG9Sb3dzXCI6IHRydWUsIFwiZ3JpZEF1dG9GbG93XCI6IHRydWUsIFwiZ3JpZFwiOiB0cnVlLCBcImdyaWRSb3dTdGFydFwiOiB0cnVlLCBcImdyaWRDb2x1bW5TdGFydFwiOiB0cnVlLCBcImdyaWRSb3dFbmRcIjogdHJ1ZSwgXCJncmlkUm93XCI6IHRydWUsIFwiZ3JpZENvbHVtblwiOiB0cnVlLCBcImdyaWRDb2x1bW5FbmRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uR2FwXCI6IHRydWUsIFwiZ3JpZFJvd0dhcFwiOiB0cnVlLCBcImdyaWRBcmVhXCI6IHRydWUsIFwiZ3JpZEdhcFwiOiB0cnVlLCBcInRleHRTaXplQWRqdXN0XCI6IHRydWUgfSB9O1xuXG4gIC8vIGhlbHBlciB0byBjYXBpdGFsaXplIHN0cmluZ3NcbiAgdmFyIGNhcGl0YWxpemVTdHJpbmcgPSBmdW5jdGlvbiBjYXBpdGFsaXplU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH07XG5cbiAgdmFyIGlzUHJlZml4ZWRQcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzUHJlZml4ZWRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwcm9wZXJ0eS5tYXRjaCgvXihXZWJraXR8TW96fE98bXMpLykgIT09IG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gc29ydFByZWZpeGVkU3R5bGUoc3R5bGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgICBpZiAoaXNQcmVmaXhlZFByb3BlcnR5KGxlZnQpICYmICFpc1ByZWZpeGVkUHJvcGVydHkocmlnaHQpKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzUHJlZml4ZWRQcm9wZXJ0eShsZWZ0KSAmJiBpc1ByZWZpeGVkUHJvcGVydHkocmlnaHQpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChzb3J0ZWRTdHlsZSwgcHJvcCkge1xuICAgICAgc29ydGVkU3R5bGVbcHJvcF0gPSBzdHlsZVtwcm9wXTtcbiAgICAgIHJldHVybiBzb3J0ZWRTdHlsZTtcbiAgICB9LCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knKSB7XG4gICAgICByZXR1cm4geyBwb3NpdGlvbjogWyctd2Via2l0LXN0aWNreScsICdzdGlja3knXSB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybnMgYSBzdHlsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBjb25jYXRlZCBwcmVmaXhlZCB2YWx1ZSBzdHJpbmdcbiAgdmFyIGpvaW5QcmVmaXhlZFZhbHVlID0gZnVuY3Rpb24gam9pblByZWZpeGVkVmFsdWUocHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIHJlcGxhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmdW5jdGlvbiAocHJlZml4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ10ubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiByZXBsYWNlcihwcmVmaXgsIHZhbHVlKTtcbiAgICB9KSk7XG4gIH07XG5cbiAgdmFyIGlzUHJlZml4ZWRWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS5qb2luKCcsJyk7XG5cbiAgICByZXR1cm4gdmFsdWUubWF0Y2goLy13ZWJraXQtfC1tb3otfC1tcy0vKSAhPT0gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBjYWxjKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc1ByZWZpeGVkVmFsdWUodmFsdWUpICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2NhbGNcXCgvZywgcHJlZml4ICsgJ2NhbGMoJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdmFsdWVzID0ge1xuICAgICd6b29tLWluJzogdHJ1ZSxcbiAgICAnem9vbS1vdXQnOiB0cnVlLFxuICAgIGdyYWI6IHRydWUsXG4gICAgZ3JhYmJpbmc6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm4gam9pblByZWZpeGVkVmFsdWUocHJvcGVydHksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdmFsdWVzJDEgPSB7IGZsZXg6IHRydWUsICdpbmxpbmUtZmxleCc6IHRydWUgfTtcblxuICBmdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlcyQxW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogWyctd2Via2l0LWJveCcsICctbW96LWJveCcsICctbXMtJyArIHZhbHVlICsgJ2JveCcsICctd2Via2l0LScgKyB2YWx1ZSwgdmFsdWVdXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgIG1heEhlaWdodDogdHJ1ZSxcbiAgICBtYXhXaWR0aDogdHJ1ZSxcbiAgICB3aWR0aDogdHJ1ZSxcbiAgICBoZWlnaHQ6IHRydWUsXG4gICAgY29sdW1uV2lkdGg6IHRydWUsXG4gICAgbWluV2lkdGg6IHRydWUsXG4gICAgbWluSGVpZ2h0OiB0cnVlXG4gIH07XG4gIHZhciB2YWx1ZXMkMiA9IHtcbiAgICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAgICdtYXgtY29udGVudCc6IHRydWUsXG4gICAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAgICdjb250YWluLWZsb2F0cyc6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldICYmIHZhbHVlcyQyW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIGpvaW5QcmVmaXhlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbHVlcyQzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuICBmdW5jdGlvbiBncmFkaWVudChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5tYXRjaCh2YWx1ZXMkMykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBqb2luUHJlZml4ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbmRleCA9IF9fY29tbW9uanMoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG4gICAgdmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbiAgICB2YXIgY2FjaGUgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcgaW4gY2FjaGUgPyBjYWNoZVtzdHJpbmddIDogY2FjaGVbc3RyaW5nXSA9IHN0cmluZy5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJCYnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuICB9KTtcblxuICB2YXIgaHlwaGVuYXRlU3R5bGVOYW1lID0gaW5kZXggJiYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaW5kZXgpKSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGluZGV4ID8gaW5kZXhbJ2RlZmF1bHQnXSA6IGluZGV4O1xuXG4gIHZhciBwcm9wZXJ0aWVzJDEgPSB7XG4gICAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBXZWJraXRUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzJDFbcHJvcGVydHldKSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlKTtcbiAgICAgIHZhciB3ZWJraXRPdXRwdXQgPSBvdXRwdXRWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvLW1vei18LW1zLS8pID09PSBudWxsO1xuICAgICAgfSkuam9pbignLCcpO1xuXG4gICAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYWxyZWFkeSBwcmVmaXhlZFxuICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ1dlYmtpdCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIHdlYmtpdE91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVmMiA9IHt9LCBiYWJlbEhlbHBlcnMuZGVmaW5lUHJvcGVydHkoX3JlZjIsICdXZWJraXQnICsgY2FwaXRhbGl6ZVN0cmluZyhwcm9wZXJ0eSksIHdlYmtpdE91dHB1dCksIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eShfcmVmMiwgcHJvcGVydHksIG91dHB1dFZhbHVlKSwgX3JlZjI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlZml4VmFsdWUodmFsdWUpIHtcbiAgICBpZiAoaXNQcmVmaXhlZFZhbHVlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICAgIHZhciBtdWx0aXBsZVZhbHVlcyA9IHZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpO1xuXG4gICAgLy8gaXRlcmF0ZSBlYWNoIHNpbmdsZSB2YWx1ZSBhbmQgY2hlY2sgZm9yIHRyYW5zaXRpb25lZCBwcm9wZXJ0aWVzXG4gICAgLy8gdGhhdCBuZWVkIHRvIGJlIHByZWZpeGVkIGFzIHdlbGxcbiAgICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICBtdWx0aXBsZVZhbHVlc1tpbmRleF0gPSBPYmplY3Qua2V5cyhwcmVmaXhQcm9wcykucmVkdWNlKGZ1bmN0aW9uIChvdXQsIHByZWZpeCkge1xuICAgICAgICB2YXIgZGFzaENhc2VQcmVmaXggPSAnLScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJztcblxuICAgICAgICBPYmplY3Qua2V5cyhwcmVmaXhQcm9wc1twcmVmaXhdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgdmFyIGRhc2hDYXNlUHJvcGVydHkgPSBoeXBoZW5hdGVTdHlsZU5hbWUocHJvcCk7XG5cbiAgICAgICAgICBpZiAodmFsLmluZGV4T2YoZGFzaENhc2VQcm9wZXJ0eSkgPiAtMSAmJiBkYXNoQ2FzZVByb3BlcnR5ICE9PSAnb3JkZXInKSB7XG4gICAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgICBvdXQgPSB2YWwucmVwbGFjZShkYXNoQ2FzZVByb3BlcnR5LCBkYXNoQ2FzZVByZWZpeCArIGRhc2hDYXNlUHJvcGVydHkpICsgJywnICsgb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgICB9LCB2YWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG11bHRpcGxlVmFsdWVzLmpvaW4oJywnKTtcbiAgfVxuXG4gIHZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAgICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAgICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgICAnZmxleC1lbmQnOiAnZW5kJ1xuICB9O1xuICB2YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgICBhbGlnbkNvbnRlbnQ6ICdtc0ZsZXhMaW5lUGFjaycsXG4gICAgYWxpZ25TZWxmOiAnbXNGbGV4SXRlbUFsaWduJyxcbiAgICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbXNGbGV4UGFjaycsXG4gICAgb3JkZXI6ICdtc0ZsZXhPcmRlcicsXG4gICAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gICAgZmxleFNocmluazogJ21zRmxleE5lZ2F0aXZlJyxcbiAgICBmbGV4QmFzaXM6ICdtc1ByZWZlcnJlZFNpemUnXG4gIH07XG5cbiAgZnVuY3Rpb24gZmxleGJveElFKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGJhYmVsSGVscGVycy5kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFsdGVybmF0aXZlVmFsdWVzJDEgPSB7XG4gICAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyxcbiAgICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICAgJ2ZsZXgtZW5kJzogJ2VuZCcsXG4gICAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gICAgd3JhcDogJ211bHRpcGxlJ1xuICB9O1xuXG4gIHZhciBhbHRlcm5hdGl2ZVByb3BzJDEgPSB7XG4gICAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICAgIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG4gIH07XG5cbiAgZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBXZWJraXRCb3hPcmllbnQ6IHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICBXZWJraXRCb3hEaXJlY3Rpb246IHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xID8gJ3JldmVyc2UnIDogJ25vcm1hbCdcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzJDFbcHJvcGVydHldKSB7XG4gICAgICByZXR1cm4gYmFiZWxIZWxwZXJzLmRlZmluZVByb3BlcnR5KHt9LCBhbHRlcm5hdGl2ZVByb3BzJDFbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlcyQxW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsdWdpbnMgPSBbcG9zaXRpb24sIGNhbGMsIGN1cnNvciwgc2l6aW5nLCBncmFkaWVudCwgdHJhbnNpdGlvbiwgZmxleGJveElFLCBmbGV4Ym94T2xkLCBmbGV4XTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICovXG4gIGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAvLyByZWN1cnNlIHRocm91Z2ggbmVzdGVkIHN0eWxlIG9iamVjdHNcbiAgICAgICAgc3R5bGVzW3Byb3BlcnR5XSA9IHByZWZpeEFsbCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhwcmVmaXhQcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBwcmVmaXhQcm9wc1twcmVmaXhdO1xuICAgICAgICAgIC8vIGFkZCBwcmVmaXhlcyBpZiBuZWVkZWRcbiAgICAgICAgICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgIHN0eWxlc1twcmVmaXggKyBjYXBpdGFsaXplU3RyaW5nKHByb3BlcnR5KV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgW10uY29uY2F0KHN0eWxlc1twcm9wZXJ0eV0pLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAvLyByZXNvbHZlIGV2ZXJ5IHNwZWNpYWwgcGx1Z2luc1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgIHJldHVybiBhc3NpZ25TdHlsZXMoc3R5bGVzLCBwbHVnaW4ocHJvcGVydHksIHZhbHVlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc29ydFByZWZpeGVkU3R5bGUoc3R5bGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnblN0eWxlcyhiYXNlKSB7XG4gICAgdmFyIGV4dGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBPYmplY3Qua2V5cyhleHRlbmQpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICB2YXIgYmFzZVZhbHVlID0gYmFzZVtwcm9wZXJ0eV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNlVmFsdWUpKSB7XG4gICAgICAgIFtdLmNvbmNhdChleHRlbmRbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWx1ZUluZGV4ID0gYmFzZVZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgIGlmICh2YWx1ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGJhc2VbcHJvcGVydHldLnNwbGljZSh2YWx1ZUluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmFzZVtwcm9wZXJ0eV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFzZVtwcm9wZXJ0eV0gPSBleHRlbmRbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByZWZpeEFsbDtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9nbGFtb3IvbGliL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QbHVnaW5TZXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5mYWxsYmFja3MgPSBmYWxsYmFja3M7XG5leHBvcnRzLnByZWZpeGVzID0gcHJlZml4ZXM7XG5cbnZhciBfQ1NTUHJvcGVydHlPcGVyYXRpb25zID0gcmVxdWlyZSgnLi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMnKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGlzRGV2ID0gZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHggPT09ICdkZXZlbG9wbWVudCcgfHwgIXg7XG59KHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcblxudmFyIFBsdWdpblNldCA9IGV4cG9ydHMuUGx1Z2luU2V0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQbHVnaW5TZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsdWdpblNldCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW5pdGlhbCA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgaW5pdGlhbFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLmZucyA9IGluaXRpYWwgfHwgW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGx1Z2luU2V0LCBbe1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgZm5zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICBpZiAoX3RoaXMuZm5zLmluZGV4T2YoZm4pID49IDApIHtcbiAgICAgICAgICBpZiAoaXNEZXYpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYWRkaW5nIHRoZSBzYW1lIHBsdWdpbiBhZ2FpbiwgaWdub3JpbmcnKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZm5zID0gW2ZuXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmZucykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZm4pIHtcbiAgICAgIHRoaXMuZm5zID0gdGhpcy5mbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSBmbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzLmZucyA9IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RyYW5zZm9ybScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zZm9ybShvKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbnMucmVkdWNlKGZ1bmN0aW9uIChvLCBmbikge1xuICAgICAgICByZXR1cm4gZm4obyk7XG4gICAgICB9LCBvKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGx1Z2luU2V0O1xufSgpO1xuXG5mdW5jdGlvbiBmYWxsYmFja3Mobm9kZSkge1xuICB2YXIgaGFzQXJyYXkgPSBPYmplY3Qua2V5cyhub2RlLnN0eWxlKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShub2RlLnN0eWxlW3hdKTtcbiAgfSkuaW5kZXhPZih0cnVlKSA+PSAwO1xuICBpZiAoaGFzQXJyYXkpIHtcbiAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGUsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBbJ3N0eWxlJ10pO1xuXG4gICAgICB2YXIgZmxhdHRlbmVkID0gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAobywga2V5KSB7XG4gICAgICAgIG9ba2V5XSA9IEFycmF5LmlzQXJyYXkoc3R5bGVba2V5XSkgPyBzdHlsZVtrZXldLmpvaW4oJzsgJyArICgwLCBfQ1NTUHJvcGVydHlPcGVyYXRpb25zLnByb2Nlc3NTdHlsZU5hbWUpKGtleSkgKyAnOiAnKSA6IHN0eWxlW2tleV07XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSwge30pO1xuICAgICAgLy8gdG9kbyAtIFxuICAgICAgLy8gZmxhdHRlbiBhcnJheXMgd2hpY2ggaGF2ZW4ndCBiZWVuIGZsYXR0ZW5lZCB5ZXQgXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBfZXh0ZW5kcyh7IHN0eWxlOiBmbGF0dGVuZWQgfSwgcmVzdClcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgcHJlZml4QWxsID0gcmVxdWlyZSgnLi9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9pbmRleC5qcycpO1xuXG5mdW5jdGlvbiBwcmVmaXhlcyhfcmVmKSB7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnc3R5bGUnXSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHsgc3R5bGU6IHByZWZpeEFsbChzdHlsZSkgfSwgcmVzdCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2dsYW1vci9saWIvcGx1Z2lucy5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU3R5bGVTaGVldCA9IFN0eWxlU2hlZXQ7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vKiBcblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtcyBcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzIFxuLSB1c2VzIGBpbnNlcnRSdWxlYCBmb3IgYXBwZW5kaW5nIGluIHByb2R1Y3Rpb24gZm9yICptdWNoKiBmYXN0ZXIgcGVyZm9ybWFuY2Vcbi0gJ3BvbHlmaWxscycgb24gc2VydmVyIHNpZGUgXG5cblxuLy8gdXNhZ2VcblxuaW1wb3J0IFN0eWxlU2hlZXQgZnJvbSAnZ2xhbW9yL2xpYi9zaGVldCdcbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoKVxuXG5zdHlsZVNoZWV0LmluamVjdCgpIFxuLSAnaW5qZWN0cycgdGhlIHN0eWxlc2hlZXQgaW50byB0aGUgcGFnZSAob3IgaW50byBtZW1vcnkgaWYgb24gc2VydmVyKVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpIFxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldCBcblxuc3R5bGVTaGVldC5mbHVzaCgpIFxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuXG4qL1xuXG5mdW5jdGlvbiBsYXN0KGFycikge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIGlmICh0YWcuc2hlZXQpIHtcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9XG5cbiAgLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveCBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB8fCAhcHJvY2Vzcy5lbnYuTk9ERV9FTlY7IC8vKHggPT4gKHggPT09ICdkZXZlbG9wbWVudCcpIHx8ICF4KShwcm9jZXNzLmVudi5OT0RFX0VOVilcbnZhciBpc1Rlc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnO1xuXG52YXIgb2xkSUUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9ICc8IS0tW2lmIGx0IElFIDEwXT48aT48L2k+PCFbZW5kaWZdLS0+JztcbiAgICByZXR1cm4gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJykubGVuZ3RoID09PSAxO1xuICB9XG59KCk7XG5cbmZ1bmN0aW9uIG1ha2VTdHlsZVRhZygpIHtcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pLmFwcGVuZENoaWxkKHRhZyk7XG4gIHJldHVybiB0YWc7XG59XG5cbmZ1bmN0aW9uIFN0eWxlU2hlZXQoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIF9yZWYkc3BlZWR5ID0gX3JlZi5zcGVlZHksXG4gICAgICBzcGVlZHkgPSBfcmVmJHNwZWVkeSA9PT0gdW5kZWZpbmVkID8gIWlzRGV2ICYmICFpc1Rlc3QgOiBfcmVmJHNwZWVkeSxcbiAgICAgIF9yZWYkbWF4TGVuZ3RoID0gX3JlZi5tYXhMZW5ndGgsXG4gICAgICBtYXhMZW5ndGggPSBfcmVmJG1heExlbmd0aCA9PT0gdW5kZWZpbmVkID8gaXNCcm93c2VyICYmIG9sZElFID8gNDAwMCA6IDY1MDAwIDogX3JlZiRtYXhMZW5ndGg7XG5cbiAgdGhpcy5pc1NwZWVkeSA9IHNwZWVkeTsgLy8gdGhlIGJpZyBkcmF3YmFjayBoZXJlIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuICB0aGlzLnNoZWV0ID0gdW5kZWZpbmVkO1xuICB0aGlzLnRhZ3MgPSBbXTtcbiAgdGhpcy5tYXhMZW5ndGggPSBtYXhMZW5ndGg7XG4gIHRoaXMuY3RyID0gMDtcbn1cblxuT2JqZWN0LmFzc2lnbihTdHlsZVNoZWV0LnByb3RvdHlwZSwge1xuICBnZXRTaGVldDogZnVuY3Rpb24gZ2V0U2hlZXQoKSB7XG4gICAgcmV0dXJuIHNoZWV0Rm9yVGFnKGxhc3QodGhpcy50YWdzKSk7XG4gIH0sXG4gIGluamVjdDogZnVuY3Rpb24gaW5qZWN0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5pbmplY3RlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGluamVjdGVkIHN0eWxlc2hlZXQhJyk7XG4gICAgfVxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMudGFnc1swXSA9IG1ha2VTdHlsZVRhZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXJ2ZXIgc2lkZSAncG9seWZpbGwnLiBqdXN0IGVub3VnaCBiZWhhdmlvciB0byBiZSB1c2VmdWwuXG4gICAgICB0aGlzLnNoZWV0ID0ge1xuICAgICAgICBjc3NSdWxlczogW10sXG4gICAgICAgIGluc2VydFJ1bGU6IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSkge1xuICAgICAgICAgIC8vIGVub3VnaCAnc3BlYyBjb21wbGlhbmNlJyB0byBiZSBhYmxlIHRvIGV4dHJhY3QgdGhlIHJ1bGVzIGxhdGVyICBcbiAgICAgICAgICAvLyBpbiBvdGhlciB3b3JkcywganVzdCB0aGUgY3NzVGV4dCBmaWVsZCBcbiAgICAgICAgICBfdGhpcy5zaGVldC5jc3NSdWxlcy5wdXNoKHsgY3NzVGV4dDogcnVsZSB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5pbmplY3RlZCA9IHRydWU7XG4gIH0sXG4gIHNwZWVkeTogZnVuY3Rpb24gc3BlZWR5KGJvb2wpIHtcbiAgICBpZiAodGhpcy5jdHIgIT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGNoYW5nZSBzcGVlZHkgbW9kZSBhZnRlciBpbnNlcnRpbmcgYW55IHJ1bGUgdG8gc2hlZXQuIEVpdGhlciBjYWxsIHNwZWVkeSgnICsgYm9vbCArICcpIGVhcmxpZXIgaW4geW91ciBhcHAsIG9yIGNhbGwgZmx1c2goKSBiZWZvcmUgc3BlZWR5KCcgKyBib29sICsgJyknKTtcbiAgICB9XG4gICAgdGhpcy5pc1NwZWVkeSA9ICEhYm9vbDtcbiAgfSxcbiAgX2luc2VydDogZnVuY3Rpb24gX2luc2VydChydWxlKSB7XG4gICAgLy8gdGhpcyB3ZWlyZG5lc3MgZm9yIHBlcmYsIGFuZCBjaHJvbWUncyB3ZWlyZCBidWcgXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAwMDc5OTIvY2hyb21lLXN1ZGRlbmx5LXN0b3BwZWQtYWNjZXB0aW5nLWluc2VydHJ1bGVcbiAgICB0cnkge1xuICAgICAgdmFyIHNoZWV0ID0gdGhpcy5nZXRTaGVldCgpO1xuICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpOyAvLyB0b2RvIC0gY29ycmVjdCBpbmRleCBoZXJlICAgICBcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoaXNEZXYpIHtcbiAgICAgICAgLy8gbWlnaHQgbmVlZCBiZXRlciBkeCBmb3IgdGhpcyBcbiAgICAgICAgY29uc29sZS53YXJuKCd3aG9vcHMsIGlsbGVnYWwgcnVsZSBpbnNlcnRlZCcsIHJ1bGUpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2VycyBcbiAgICAgIGlmICh0aGlzLmlzU3BlZWR5ICYmIHRoaXMuZ2V0U2hlZXQoKS5pbnNlcnRSdWxlKSB7XG4gICAgICAgIHRoaXMuX2luc2VydChydWxlKTtcbiAgICAgIH1cbiAgICAgIC8vIG1vcmUgYnJvd3NlciB3ZWlyZG5lc3MuIEkgZG9uJ3QgZXZlbiBrbm93ICAgIFxuICAgICAgLy8gZWxzZSBpZih0aGlzLnRhZ3MubGVuZ3RoID4gMCAmJiB0aGlzLnRhZ3M6Omxhc3QoKS5zdHlsZVNoZWV0KSB7ICAgICAgXG4gICAgICAvLyAgIHRoaXMudGFnczo6bGFzdCgpLnN0eWxlU2hlZXQuY3NzVGV4dCs9IHJ1bGVcbiAgICAgIC8vIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGxhc3QodGhpcy50YWdzKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2VydmVyIHNpZGUgaXMgcHJldHR5IHNpbXBsZSAgICAgICAgIFxuICAgICAgdGhpcy5zaGVldC5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gICAgaWYgKGlzQnJvd3NlciAmJiB0aGlzLmN0ciAlIHRoaXMubWF4TGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnRhZ3MucHVzaChtYWtlU3R5bGVUYWcoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN0ciAtIDE7XG4gIH0sXG5cbiAgLy8gY29tbWVudGluZyB0aGlzIG91dCB0aWxsIHdlIGRlY2lkZSBvbiB2MydzIGRlY2lzaW9uIFxuICAvLyBfcmVwbGFjZShpbmRleCwgcnVsZSkge1xuICAvLyAgIC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnIFxuICAvLyAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMDA3OTkyL2Nocm9tZS1zdWRkZW5seS1zdG9wcGVkLWFjY2VwdGluZy1pbnNlcnRydWxlXG4gIC8vICAgdHJ5IHsgIFxuICAvLyAgICAgbGV0IHNoZWV0ID0gdGhpcy5nZXRTaGVldCgpICAgICAgICBcbiAgLy8gICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpIC8vIHRvZG8gLSBjb3JyZWN0IGluZGV4IGhlcmUgICAgIFxuICAvLyAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleClcbiAgLy8gICB9XG4gIC8vICAgY2F0Y2goZSkge1xuICAvLyAgICAgaWYoaXNEZXYpIHtcbiAgLy8gICAgICAgLy8gbWlnaHQgbmVlZCBiZXRlciBkeCBmb3IgdGhpcyBcbiAgLy8gICAgICAgY29uc29sZS53YXJuKCd3aG9vcHMsIHByb2JsZW0gcmVwbGFjaW5nIHJ1bGUnLCBydWxlKSAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAvLyAgICAgfSAgICAgICAgICBcbiAgLy8gICB9ICAgICAgICAgIFxuXG4gIC8vIH1cbiAgLy8gcmVwbGFjZShpbmRleCwgcnVsZSkge1xuICAvLyAgIGlmKGlzQnJvd3Nlcikge1xuICAvLyAgICAgaWYodGhpcy5pc1NwZWVkeSAmJiB0aGlzLmdldFNoZWV0KCkuaW5zZXJ0UnVsZSkge1xuICAvLyAgICAgICB0aGlzLl9yZXBsYWNlKGluZGV4LCBydWxlKVxuICAvLyAgICAgfVxuICAvLyAgICAgZWxzZSB7XG4gIC8vICAgICAgIGxldCBfc2xvdCA9IE1hdGguZmxvb3IoKGluZGV4ICArIHRoaXMubWF4TGVuZ3RoKSAvIHRoaXMubWF4TGVuZ3RoKSAtIDEgICAgICAgIFxuICAvLyAgICAgICBsZXQgX2luZGV4ID0gKGluZGV4ICUgdGhpcy5tYXhMZW5ndGgpICsgMVxuICAvLyAgICAgICBsZXQgdGFnID0gdGhpcy50YWdzW19zbG90XVxuICAvLyAgICAgICB0YWcucmVwbGFjZUNoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpLCB0YWcuY2hpbGROb2Rlc1tfaW5kZXhdKVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICBlbHNlIHtcbiAgLy8gICAgIGxldCBydWxlcyA9IHRoaXMuc2hlZXQuY3NzUnVsZXNcbiAgLy8gICAgIHRoaXMuc2hlZXQuY3NzUnVsZXMgPSBbIC4uLnJ1bGVzLnNsaWNlKDAsIGluZGV4KSwgeyBjc3NUZXh0OiBydWxlIH0sIC4uLnJ1bGVzLnNsaWNlKGluZGV4ICsgMSkgXVxuICAvLyAgIH1cbiAgLy8gfVxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoaW5kZXgpIHtcbiAgICAvLyB3ZSBpbnNlcnQgYSBibGFuayBydWxlIHdoZW4gJ2RlbGV0aW5nJyBzbyBwcmV2aW91c2x5IHJldHVybmVkIGluZGV4ZXMgcmVtYWluIHN0YWJsZVxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoaW5kZXgsICcnKTtcbiAgfSxcbiAgZmx1c2g6IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudGFncyA9IFtdO1xuICAgICAgdGhpcy5zaGVldCA9IG51bGw7XG4gICAgICB0aGlzLmN0ciA9IDA7XG4gICAgICAvLyB0b2RvIC0gbG9vayBmb3IgcmVtbmFudHMgaW4gZG9jdW1lbnQuc3R5bGVTaGVldHNcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2ltcGxlciBvbiBzZXJ2ZXIgXG4gICAgICB0aGlzLnNoZWV0LmNzc1J1bGVzID0gW107XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0ZWQgPSBmYWxzZTtcbiAgfSxcbiAgcnVsZXM6IGZ1bmN0aW9uIHJ1bGVzKCkge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaGVldC5jc3NSdWxlcztcbiAgICB9XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlLmFwcGx5KGFyciwgW2Fyci5sZW5ndGgsIDBdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkuZnJvbShzaGVldEZvclRhZyh0YWcpLmNzc1J1bGVzKSkpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZ2xhbW9yL2xpYi9zaGVldC5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXJMaW5rcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5saW5rcy5tYXAoIChsaW5rLCBpKSA9PiB7XG4gICAgICBpZiAobGluay50eXBlID09PSAnZW1haWwnKSB7XG4gICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9e2F9IGhyZWY9eyBsaW5rLnVybCB9PnsgbGluay5uYW1lIH08L2E+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17IGxpbmsudXJsIH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2F9IHRhcmdldD1cIl9ibGFua1wiPnsgbGluay5uYW1lIH08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpbmtzKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYSA9IGNzcyh7XG4gIG1hcmdpbjogJzAgMTBweCAwIDAnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBjb2xvcjogJyMwMDAnLFxuICAnOmhvdmVyJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyxcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTWVudS5qcyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8SGVhZD5cbiAgICA8dGl0bGU+R3VpbGxhdW1lIEtvbGx5PC90aXRsZT5cbiAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR3VpbGxhdW1lIEtvbGx5LCA8c3Ryb25nPmZ1bGwgc3RhY2sgZGV2ZWxvcGVyPC9zdHJvbmc+IGJhc2VkIGluIEx5b24gLSBGcmFuY2UuJyAvPlxuICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdndWlsbGF1bWUsIGtvbGx5LCBmcm9udGVuZCwgYmFja2VuZCwgZnVsbCBzdGFjaywgZGV2ZWxvcGVyLCB3ZWIsIGphdmFzY3JpcHQsIHJlYWN0SlMsIE1ldGVvciwgSnMsIE5leHRKUywgV2VicGFjaycgLz5cbiAgICA8bWV0YSBuYW1lPSdjb3B5cmlnaHQnIGNvbnRlbnQ9J0d1aWxsYXVtZSBLb2xseScgLz5cbiAgPC9IZWFkPlxuKVxuXG5jc3MuZ2xvYmFsKCdodG1sLCBib2R5JywgIHtcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgYm9yZGVyOiAnMCcsXG4gIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgbGluZUhlaWdodDogJzEuMTUnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIGZvbnRXZWlnaHQ6ICczMDAnLFxuICBmb250U3R5bGU6ICdub3JtYWwnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0ZXh0U2hhZG93OiAnMCcsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgPC9oMT5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdXRpbHMvSDEuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCAoIHtjaGlsZHJlbn0gKSA9PiA8cCBjbGFzc05hbWU9e3B9PiB7Y2hpbGRyZW59IDwvcD5cblxuY29uc3QgcCA9IGNzcyh7XG4gIGNvbG9yOiAnIzAwMCcsXG4gIGZvbnRTaXplOiAnMWVtJyxcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3V0aWxzL1BhcmFncmFwaC5qcyIsImNvbnN0IHNvY2lhbHMgPSBbXG4gIHtcbiAgICBcIm5hbWVcIjogXCJMaW5rZWRJblwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2d1aWxsYXVtZWtvbGx5L1wiLFxuICAgIFwidHlwZVwiOiBcInVybFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJHaXRodWJcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ndWlsbGF1bWVrb1wiLFxuICAgIFwidHlwZVwiOiBcInVybFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJndWlsbGF1bWUua29sbHlbYXRdZ21haWwuY29tXCIsXG4gICAgXCJ1cmxcIjogXCJtYWlsdG86Z3VpbGxhdW1lLmtvbGx5QGdtYWlsLmNvbVwiLFxuICAgIFwidHlwZVwiOiBcImVtYWlsXCJcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgc29jaWFscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGEvc29jaWFscy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEgxIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvSDEnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvUGFyYWdyYXBoJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyAvPlxuICAgICAgICA8TWVudSBsaW5rcz17dGhpcy5wcm9wcy5zb2NpYWxzfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogJzEwcHggMTBweCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgICAgICAgICB9fSAvPlxuICAgICAgICA8SDEgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRTaXplOiAnNGVtJyB9fSAvPlxuICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgIFRleHQgb2YgdGhlIHBhcmFncmFwaFxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2xpbmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZXh0L2xpbmtcIlxuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=