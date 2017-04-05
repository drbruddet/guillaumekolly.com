webpackHotUpdate(2,{

/***/ 161:
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(5);
	
	var _link = __webpack_require__(74);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _Theme = __webpack_require__(6);
	
	var _HeadBloc = __webpack_require__(63);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _Menu = __webpack_require__(102);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _FullBackground = __webpack_require__(85);
	
	var _FullBackground2 = _interopRequireDefault(_FullBackground);
	
	var _MovingText = __webpack_require__(103);
	
	var _MovingText2 = _interopRequireDefault(_MovingText);
	
	var _TextTyped = __webpack_require__(155);
	
	var _TextTyped2 = _interopRequireDefault(_TextTyped);
	
	var _config = __webpack_require__(64);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _socials = __webpack_require__(104);
	
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
	      var _props = this.props,
	          config = _props.config,
	          socials = _props.socials;
	
	      var meta = config.meta.index;
	
	      return _react2.default.createElement(
	        'div',
	        { className: container },
	        _react2.default.createElement(_HeadBloc2.default, { title: meta.title, description: meta.description, keywords: meta.keywords }),
	        _react2.default.createElement(_FullBackground2.default, null),
	        _react2.default.createElement(_Menu2.default, { links: socials, style: _Theme._verticalMenu }),
	        _react2.default.createElement(_MovingText2.default, { beforetext: 'Hi, I\'m ',
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
	          ' born & raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. You can discover',
	          _react2.default.createElement(
	            _link2.default,
	            { prefetch: true, href: '/resume' },
	            _react2.default.createElement(
	              'a',
	              { className: _Theme._tag },
	              'my resume here'
	            )
	          ),
	          '. Do not hezitate to ',
	          _react2.default.createElement(
	            _link2.default,
	            { prefetch: true, href: '/contact' },
	            _react2.default.createElement(
	              'a',
	              { className: _Theme._tag },
	              'contact me'
	            )
	          ),
	          '.',
	          _react2.default.createElement('br', null),
	          'PS: This website is made with NextJS / ReactJS / Glamor.'
	        )
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function getInitialProps() {
	      return {
	        socials: _socials2.default,
	        config: _config2.default
	      };
	    }
	  }]);
	  return _class;
	}(_react2.default.Component);
	
	exports.default = _class;
	
	
	var texttyped = (0, _css.css)({
	  width: '598px',
	  position: 'absolute',
	  right: '10%',
	  fontSize: '1.1em',
	  lineHeight: '1.8em',
	  letterSpacing: '-0.3px',
	  textAlign: 'justify',
	  textJustify: 'inter-word',
	  top: 'calc(30% + 4em + 3.2em)',
	  color: _Theme.theme.colors.black,
	  '@media(max-width: 1240px)': {
	    fontSize: '1em',
	    width: '467px',
	    top: 'calc(30% + 4em + 4em)'
	  },
	  '@media(max-width: 640px)': {
	    width: '280px',
	    top: 'calc(30% + 2em)'
	  }
	});
	
	var movingText = {
	  background: (0, _css.style)({
	    height: 'calc(100vh)',
	    width: 'calc(100vw - 55px)',
	    position: 'absolute',
	    top: '0',
	    left: '50px',
	    fontFamily: _Theme.theme.font.title
	  }),
	  beforetext: (0, _css.style)({
	    position: 'absolute',
	    fontSize: '15em',
	    right: '28.6%',
	    letterSpacing: '-0.07em',
	    top: '30%',
	    color: _Theme.theme.colors.almost_white,
	    '@media(max-width: 1240px)': { fontSize: '10em', top: '34%', right: '40%' },
	    '@media(max-width: 640px)': { fontSize: '8em', top: '21%', right: '20%' },
	    '@media(max-width: 440px)': { display: 'none' }
	  }),
	  fixedtitle: (0, _css.style)({
	    position: 'absolute',
	    fontSize: '6em',
	    right: '10%',
	    top: '30%',
	    letterSpacing: '-6px',
	    '@media(max-width: 640px)': { top: '10%' }
	  }),
	  movingtitle: (0, _css.style)({
	    color: _Theme.theme.colors.black,
	    letterSpacing: '-6px',
	    '@media(max-width: 1240px)': { fontSize: '0.8em' },
	    '@media(max-width: 640px)': { fontSize: '0.47em', letterSpacing: '-4px' }
	  }),
	  movingtitlebackground: _Theme.theme.colors.primary,
	  animation: {
	    transform_mouse_pos_x: '-100',
	    transform_mouse_pos_y: '-100',
	    shadow_mouse_pos_x: '-70',
	    shadow_mouse_pos_y: '80'
	  }
	};
	
	var container = (0, _css.css)({
	  height: '100vh',
	  width: '100vw',
	  position: 'relative'
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29uZmlnIiwic29jaWFscyIsIm1ldGEiLCJpbmRleCIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImxlZnQiLCJmb250RmFtaWx5IiwiZm9udCIsImJlZm9yZXRleHQiLCJhbG1vc3Rfd2hpdGUiLCJkaXNwbGF5IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBV1c7QUFBQSxtQkFDcUIsS0FBS0EsS0FEMUI7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxPQURULFVBQ1NBLE9BRFQ7O0FBRVAsVUFBTUMsT0FBT0YsT0FBT0UsSUFBUCxDQUFZQyxLQUF6Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdDLFNBQWhCO0FBQ0UsNERBQVUsT0FBT0YsS0FBS0csS0FBdEIsRUFBNkIsYUFBYUgsS0FBS0ksV0FBL0MsRUFBNEQsVUFBVUosS0FBS0ssUUFBM0UsR0FERjtBQUVFLHFFQUZGO0FBR0Usd0RBQU0sT0FBT04sT0FBYixFQUFzQiwyQkFBdEIsR0FIRjtBQUlFLDhEQUFZLFlBQVcsV0FBdkI7QUFDWSxzQkFBVyxpQkFEdkI7QUFFWSxxQkFBVSxHQUZ0QjtBQUdZLGlCQUFPTyxVQUhuQixHQUpGO0FBUUU7QUFBQTtBQUFBLFlBQVcsT0FBT0MsU0FBbEI7QUFBQTtBQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUjtBQUFBO0FBS0U7QUFBQTtBQUFBLGNBQU0sY0FBTixFQUFlLE1BQUssU0FBcEI7QUFBOEI7QUFBQTtBQUFBLGdCQUFHLHNCQUFIO0FBQUE7QUFBQTtBQUE5QixXQUxGO0FBQUE7QUFNcUI7QUFBQTtBQUFBLGNBQU0sY0FBTixFQUFlLE1BQUssVUFBcEI7QUFBK0I7QUFBQTtBQUFBLGdCQUFHLHNCQUFIO0FBQUE7QUFBQTtBQUEvQixXQU5yQjtBQUFBO0FBT0UsbURBUEY7QUFBQTtBQUFBO0FBUkYsT0FERjtBQW9CRDs7O3NDQS9CeUI7QUFDeEIsYUFBTztBQUNMUixrQ0FESztBQUVMRDtBQUZLLE9BQVA7QUFJRDs7O0VBUDBCLGdCQUFNVSxTOzs7OztBQW9DbkMsSUFBTUQsWUFBWSxjQUFJO0FBQ3BCRSxTQUFPLE9BRGE7QUFFcEJDLFlBQVUsVUFGVTtBQUdwQkMsU0FBTyxLQUhhO0FBSXBCQyxZQUFVLE9BSlU7QUFLcEJDLGNBQVksT0FMUTtBQU1wQkMsaUJBQWUsUUFOSztBQU9wQkMsYUFBVyxTQVBTO0FBUXBCQyxlQUFhLFlBUk87QUFTcEJDLE9BQUsseUJBVGU7QUFVcEJDLFNBQU8sYUFBTUMsTUFBTixDQUFhQyxLQVZBO0FBV3BCLCtCQUE2QjtBQUMzQlIsY0FBVSxLQURpQjtBQUUzQkgsV0FBTyxPQUZvQjtBQUczQlEsU0FBSztBQUhzQixHQVhUO0FBZ0JwQiw4QkFBNEI7QUFDMUJSLFdBQU8sT0FEbUI7QUFFMUJRLFNBQUs7QUFGcUI7QUFoQlIsQ0FBSixDQUFsQjs7QUFzQkEsSUFBTVgsYUFBYTtBQUNqQmUsY0FBWSxnQkFBTTtBQUNoQkMsWUFBUSxhQURRO0FBRWhCYixXQUFPLG9CQUZTO0FBR2hCQyxjQUFVLFVBSE07QUFJaEJPLFNBQUssR0FKVztBQUtoQk0sVUFBTSxNQUxVO0FBTWhCQyxnQkFBWSxhQUFNQyxJQUFOLENBQVd0QjtBQU5QLEdBQU4sQ0FESztBQVNqQnVCLGNBQVksZ0JBQU07QUFDaEJoQixjQUFVLFVBRE07QUFFaEJFLGNBQVUsTUFGTTtBQUdoQkQsV0FBTyxPQUhTO0FBSWhCRyxtQkFBZSxTQUpDO0FBS2hCRyxTQUFLLEtBTFc7QUFNaEJDLFdBQU8sYUFBTUMsTUFBTixDQUFhUSxZQU5KO0FBT2hCLGlDQUE2QixFQUFFZixVQUFVLE1BQVosRUFBb0JLLEtBQUssS0FBekIsRUFBZ0NOLE9BQU8sS0FBdkMsRUFQYjtBQVFoQixnQ0FBNEIsRUFBRUMsVUFBVSxLQUFaLEVBQW1CSyxLQUFLLEtBQXhCLEVBQStCTixPQUFPLEtBQXRDLEVBUlo7QUFTaEIsZ0NBQTRCLEVBQUVpQixTQUFTLE1BQVg7QUFUWixHQUFOLENBVEs7QUFvQmpCQyxjQUFZLGdCQUFNO0FBQ2hCbkIsY0FBVSxVQURNO0FBRWhCRSxjQUFVLEtBRk07QUFHaEJELFdBQU8sS0FIUztBQUloQk0sU0FBSyxLQUpXO0FBS2hCSCxtQkFBZSxNQUxDO0FBTWhCLGdDQUE0QixFQUFFRyxLQUFLLEtBQVA7QUFOWixHQUFOLENBcEJLO0FBNEJqQmEsZUFBYSxnQkFBTTtBQUNqQlosV0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBREg7QUFFakJOLG1CQUFlLE1BRkU7QUFHakIsaUNBQTZCLEVBQUVGLFVBQVUsT0FBWixFQUhaO0FBSWpCLGdDQUE0QixFQUFFQSxVQUFVLFFBQVosRUFBc0JFLGVBQWUsTUFBckM7QUFKWCxHQUFOLENBNUJJO0FBa0NqQmlCLHlCQUF1QixhQUFNWixNQUFOLENBQWFhLE9BbENuQjtBQW1DakJDLGFBQVc7QUFDVEMsMkJBQXVCLE1BRGQ7QUFFVEMsMkJBQXVCLE1BRmQ7QUFHVEMsd0JBQW9CLEtBSFg7QUFJVEMsd0JBQW9CO0FBSlg7QUFuQ00sQ0FBbkI7O0FBMkNBLElBQU1uQyxZQUFZLGNBQUk7QUFDcEJvQixVQUFRLE9BRFk7QUFFcEJiLFNBQU8sT0FGYTtBQUdwQkMsWUFBVTtBQUhVLENBQUosQ0FBbEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX3RhZywgX3ZlcnRpY2FsTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgVGV4dFR5cGVkIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dFR5cGVkJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvY2lhbHM6IHNvY2lhbHMsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5pbmRleFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e21ldGEudGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufSBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17X3ZlcnRpY2FsTWVudX0gLz5cbiAgICAgICAgPE1vdmluZ1RleHQgYmVmb3JldGV4dD1cIkhpLCBJJ20gXCJcbiAgICAgICAgICAgICAgICAgICAgbW92aW5ndGV4dD1cIkd1aWxsYXVtZSBLb2xseVwiXG4gICAgICAgICAgICAgICAgICAgIGFmdGVydGV4dD1cIi5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgPFRleHRUeXBlZCBzdHlsZT17dGV4dHR5cGVkfT5cbiAgICAgICAgICBJ4oCZbSBhIDxzdHJvbmc+RnVsbCBTdGFjayBEZXZlbG9wZXI8L3N0cm9uZz4gYm9ybiAmIHJhaXNlZFxuICAgICAgICAgIGluIHRoZSBGcmVuY2ggQWxwcywgYnV0IEnigJltIGN1cnJlbnRseSBsaXZpbmcgaW4gTHlvbiAtIEZyYW5jZS5cbiAgICAgICAgICBJ4oCZbSBmbHVlbnQgaW4gTm9kZSAvIE1ldGVvciAvIEpTIC8gUmVhY3QsIGJ1dCBJ4oCZbSByZWNlbnRseVxuICAgICAgICAgIHN0YXJ0ZWQgZXhwZXJpbWVudGluZyB3aXRoIEdyYXBoUUwsIFJlZHV4IGFuZCBXZWJwYWNrLiBZb3UgY2FuIGRpc2NvdmVyXG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj48YSBjbGFzc05hbWU9e190YWd9Pm15IHJlc3VtZSBoZXJlPC9hPjwvTGluaz4uXG4gICAgICAgICAgRG8gbm90IGhleml0YXRlIHRvIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT17X3RhZ30+Y29udGFjdCBtZTwvYT48L0xpbms+LlxuICAgICAgICAgIDxici8+UFM6IFRoaXMgd2Vic2l0ZSBpcyBtYWRlIHdpdGggTmV4dEpTIC8gUmVhY3RKUyAvIEdsYW1vci5cbiAgICAgICAgPC9UZXh0VHlwZWQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgdGV4dHR5cGVkID0gY3NzKHtcbiAgd2lkdGg6ICc1OThweCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzEwJScsXG4gIGZvbnRTaXplOiAnMS4xZW0nLFxuICBsaW5lSGVpZ2h0OiAnMS44ZW0nLFxuICBsZXR0ZXJTcGFjaW5nOiAnLTAuM3B4JyxcbiAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gIHRleHRKdXN0aWZ5OiAnaW50ZXItd29yZCcsXG4gIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgMy4yZW0pJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgZm9udFNpemU6ICcxZW0nLFxuICAgIHdpZHRoOiAnNDY3cHgnLFxuICAgIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgNGVtKScsXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgd2lkdGg6ICcyODBweCcsXG4gICAgdG9wOiAnY2FsYygzMCUgKyAyZW0pJyxcbiAgfSxcbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICdjYWxjKDEwMHZoKScsXG4gICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gNTVweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICc1MHB4JyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICB9KSxcbiAgYmVmb3JldGV4dDogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnMTVlbScsXG4gICAgcmlnaHQ6ICcyOC42JScsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3ZW0nLFxuICAgIHRvcDogJzMwJScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5hbG1vc3Rfd2hpdGUsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IGZvbnRTaXplOiAnMTBlbScsIHRvcDogJzM0JScsIHJpZ2h0OiAnNDAlJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnOGVtJywgdG9wOiAnMjElJywgcmlnaHQ6ICcyMCUnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gIH0pLFxuICBmaXhlZHRpdGxlOiBzdHlsZSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZm9udFNpemU6ICc2ZW0nLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICB0b3A6ICczMCUnLFxuICAgIGxldHRlclNwYWNpbmc6ICctNnB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB0b3A6ICcxMCUnIH0sXG4gIH0pLFxuICBtb3Zpbmd0aXRsZTogc3R5bGUoe1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgbGV0dGVyU3BhY2luZzogJy02cHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBmb250U2l6ZTogJzAuOGVtJywgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzAuNDdlbScsIGxldHRlclNwYWNpbmc6ICctNHB4Jyx9LFxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTcwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICc4MCcsXG4gIH1cbn1cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59KVxuIl19
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
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9mN2VlIl0sIm5hbWVzIjpbInByb3BzIiwiY29uZmlnIiwic29jaWFscyIsIm1ldGEiLCJpbmRleCIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImxlZnQiLCJmb250RmFtaWx5IiwiZm9udCIsImJlZm9yZXRleHQiLCJhbG1vc3Rfd2hpdGUiLCJkaXNwbGF5IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFXVztBQUFBLG9CQUNxQixLQUFLQSxLQUQxQjtBQUFBLFdBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFdBQ1NDLE9BRFQsVUFDU0EsT0FEVDs7QUFFUCxXQUFNQyxPQUFPRixPQUFPRSxJQUFQLENBQVlDLEtBQXpCOztBQUVBLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBV0MsU0FBaEI7QUFDRSw2REFBVSxPQUFPRixLQUFLRyxLQUF0QixF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LDRCQUF1QixNQUZkO0FBR1RDLHlCQUFvQixLQUhYO0FBSVRDLHlCQUFvQjtBQUpYO0FBbkNNLEVBQW5COztBQTJDQSxLQUFNbkMsWUFBWSxjQUFJO0FBQ3BCb0IsV0FBUSxPQURZO0FBRXBCYixVQUFPLE9BRmE7QUFHcEJDLGFBQVU7QUFIVSxFQUFKLENBQWxCIiwiZmlsZSI6IjIuMWYxZDU2MWFhYzA5NjM2MmJkNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcsIF92ZXJ0aWNhbE1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IFRleHRUeXBlZCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRUeXBlZCdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb2NpYWxzOiBzb2NpYWxzLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEuaW5kZXhcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXttZXRhLnRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn0ga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e192ZXJ0aWNhbE1lbnV9IC8+XG4gICAgICAgIDxNb3ZpbmdUZXh0IGJlZm9yZXRleHQ9XCJIaSwgSSdtIFwiXG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ3RleHQ9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgICAgICAgICAgICBhZnRlcnRleHQ9XCIuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e21vdmluZ1RleHR9IC8+XG4gICAgICAgIDxUZXh0VHlwZWQgc3R5bGU9e3RleHR0eXBlZH0+XG4gICAgICAgICAgSeKAmW0gYSA8c3Ryb25nPkZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9zdHJvbmc+IGJvcm4gJiByYWlzZWRcbiAgICAgICAgICBpbiB0aGUgRnJlbmNoIEFscHMsIGJ1dCBJ4oCZbSBjdXJyZW50bHkgbGl2aW5nIGluIEx5b24gLSBGcmFuY2UuXG4gICAgICAgICAgSeKAmW0gZmx1ZW50IGluIE5vZGUgLyBNZXRlb3IgLyBKUyAvIFJlYWN0LCBidXQgSeKAmW0gcmVjZW50bHlcbiAgICAgICAgICBzdGFydGVkIGV4cGVyaW1lbnRpbmcgd2l0aCBHcmFwaFFMLCBSZWR1eCBhbmQgV2VicGFjay4gWW91IGNhbiBkaXNjb3ZlclxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcmVzdW1lXCI+PGEgY2xhc3NOYW1lPXtfdGFnfT5teSByZXN1bWUgaGVyZTwvYT48L0xpbms+LlxuICAgICAgICAgIERvIG5vdCBoZXppdGF0ZSB0byA8TGluayBwcmVmZXRjaCBocmVmPVwiL2NvbnRhY3RcIj48YSBjbGFzc05hbWU9e190YWd9PmNvbnRhY3QgbWU8L2E+PC9MaW5rPi5cbiAgICAgICAgICA8YnIvPlBTOiBUaGlzIHdlYnNpdGUgaXMgbWFkZSB3aXRoIE5leHRKUyAvIFJlYWN0SlMgLyBHbGFtb3IuXG4gICAgICAgIDwvVGV4dFR5cGVkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHRleHR0eXBlZCA9IGNzcyh7XG4gIHdpZHRoOiAnNTk4cHgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICBmb250U2l6ZTogJzEuMWVtJyxcbiAgbGluZUhlaWdodDogJzEuOGVtJyxcbiAgbGV0dGVyU3BhY2luZzogJy0wLjNweCcsXG4gIHRleHRBbGlnbjogJ2p1c3RpZnknLFxuICB0ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnLFxuICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDMuMmVtKScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICB3aWR0aDogJzQ2N3B4JyxcbiAgICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDRlbSknLFxuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIHdpZHRoOiAnMjgwcHgnLFxuICAgIHRvcDogJ2NhbGMoMzAlICsgMmVtKScsXG4gIH0sXG59KVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBiYWNrZ3JvdW5kOiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnY2FsYygxMDB2aCknLFxuICAgIHdpZHRoOiAnY2FsYygxMDB2dyAtIDU1cHgpJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwJyxcbiAgICBsZWZ0OiAnNTBweCcsXG4gICAgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSxcbiAgfSksXG4gIGJlZm9yZXRleHQ6IHN0eWxlKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBmb250U2l6ZTogJzE1ZW0nLFxuICAgIHJpZ2h0OiAnMjguNiUnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4wN2VtJyxcbiAgICB0b3A6ICczMCUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYWxtb3N0X3doaXRlLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBmb250U2l6ZTogJzEwZW0nLCB0b3A6ICczNCUnLCByaWdodDogJzQwJScgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzhlbScsIHRvcDogJzIxJScsIHJpZ2h0OiAnMjAlJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA0NDBweCknOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICB9KSxcbiAgZml4ZWR0aXRsZTogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnNmVtJyxcbiAgICByaWdodDogJzEwJScsXG4gICAgdG9wOiAnMzAlJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTZweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgdG9wOiAnMTAlJyB9LFxuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGxldHRlclNwYWNpbmc6ICctNnB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgZm9udFNpemU6ICcwLjhlbScsIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICcwLjQ3ZW0nLCBsZXR0ZXJTcGFjaW5nOiAnLTRweCcsfSxcbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy03MCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnODAnLFxuICB9XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7XG4gIGhlaWdodDogJzEwMHZoJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==