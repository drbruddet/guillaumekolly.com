webpackHotUpdate(3,{

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(13);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(17);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(16);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(5);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _Theme = __webpack_require__(21);
	
	var _HeadBloc = __webpack_require__(63);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _FullBackground = __webpack_require__(85);
	
	var _FullBackground2 = _interopRequireDefault(_FullBackground);
	
	var _MovingText = __webpack_require__(103);
	
	var _MovingText2 = _interopRequireDefault(_MovingText);
	
	var _ButtonLink = __webpack_require__(151);
	
	var _ButtonLink2 = _interopRequireDefault(_ButtonLink);
	
	var _config = __webpack_require__(64);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Error = function (_React$Component) {
	  (0, _inherits3.default)(Error, _React$Component);
	
	  function Error() {
	    (0, _classCallCheck3.default)(this, Error);
	    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Error, [{
	    key: 'renderError',
	    value: function renderError() {
	      return this.props.statusCode ? ' An error occurred on server.' : ' An error occurred on client.';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var meta = this.props.config.meta.error;
	      var title = meta.title + ' ' + this.props.statusCode + ' Page not found';
	      var movingtextstringify = String(this.props.statusCode);
	
	      return _react2.default.createElement(
	        'div',
	        { className: _Theme._centeredBox },
	        _react2.default.createElement(_HeadBloc2.default, { title: title, description: meta.description, keywords: meta.keywords }),
	        _react2.default.createElement(_FullBackground2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: verticalyCentered },
	          _react2.default.createElement(
	            'h2',
	            { className: errorText },
	            'The page your looking for can\'t be found.',
	            _react2.default.createElement('br', null),
	            this.renderError()
	          ),
	          _react2.default.createElement(_MovingText2.default, { movingtext: movingtextstringify, style: movingText }),
	          _react2.default.createElement(_ButtonLink2.default, { url: '/', title: 'Home', alt: 'Home Page', style: button }),
	          _react2.default.createElement(_ButtonLink2.default, { url: '/resume', title: 'Resume', alt: 'Resume Page', style: button }),
	          _react2.default.createElement(_ButtonLink2.default, { url: '/contact', title: 'Contact', alt: 'Contact Page', style: button })
	        )
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function getInitialProps(_ref) {
	      var res = _ref.res,
	          jsonPageRes = _ref.jsonPageRes;
	
	      var statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
	      return {
	        statusCode: statusCode,
	        config: _config2.default
	      };
	    }
	  }]);
	  return Error;
	}(_react2.default.Component);
	
	exports.default = Error;
	
	
	var button = (0, _css2.default)({
	  width: '150px',
	  border: "4px solid " + _Theme.theme.colors.primary,
	  ':hover': {
	    backgroundColor: _Theme.theme.colors.primary,
	    color: _Theme.theme.colors.white,
	    '> a': { color: _Theme.theme.colors.white }
	  },
	  '> a': {
	    color: _Theme.theme.colors.black
	  },
	  '@media(max-width: 640px)': { width: '80%', fontSize: '1em' }
	});
	
	var movingText = {
	  background: (0, _css2.default)({
	    height: '100%',
	    width: '100%'
	  }),
	  movingtitle: (0, _css2.default)({
	    color: _Theme.theme.colors.black,
	    fontSize: '1000%',
	    lineHeight: '90%',
	    '@media(max-width: 640px)': { fontSize: '600%' }
	  }),
	  movingtitlebackground: _Theme.theme.colors.primary,
	  animation: {
	    transform_mouse_pos_x: '-100',
	    transform_mouse_pos_y: '-100',
	    shadow_mouse_pos_x: '-20',
	    shadow_mouse_pos_y: '20'
	  }
	};
	
	var errorText = (0, _css2.default)({
	  fontSize: '140%',
	  width: '100%',
	  margin: '0 auto',
	  lineHeight: '130%',
	  color: _Theme.theme.colors.light_text,
	  '@media(max-width: 640px)': {
	    fontSize: '100%'
	  }
	});
	
	var verticalyCentered = (0, _css2.default)({
	  textAlign: 'center',
	  zIndex: '1',
	  background: 'transparent',
	  color: _Theme.theme.colors.black
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1ldGEiLCJjb25maWciLCJlcnJvciIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ2ZXJ0aWNhbHlDZW50ZXJlZCIsImVycm9yVGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImJ1dHRvbiIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJib3JkZXIiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aGl0ZSIsImJsYWNrIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwibW92aW5ndGl0bGUiLCJsaW5lSGVpZ2h0IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwibWFyZ2luIiwibGlnaHRfdGV4dCIsInRleHRBbGlnbiIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7O2tDQVlMO0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLFVBQVgscUNBRUgsK0JBRko7QUFHRDs7OzZCQUVTO0FBQ1IsVUFBTUMsT0FBTyxLQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JELElBQWxCLENBQXVCRSxLQUFwQztBQUNBLFVBQU1DLFFBQVdILEtBQUtHLEtBQWhCLFNBQXlCLEtBQUtMLEtBQUwsQ0FBV0MsVUFBcEMsb0JBQU47QUFD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dWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCB7IHRoZW1lLCBfY2VudGVyZWRCb3ggfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25MaW5rJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXMsIGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzXG4gICAgICA/IHJlcy5zdGF0dXNDb2RlXG4gICAgICA6IChqc29uUGFnZVJlcyA/IGpzb25QYWdlUmVzLnN0YXR1cyA6IG51bGwpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGUsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXR1c0NvZGVcbiAgICAgID8gYCBBbiBlcnJvciBvY2N1cnJlZCBvbiBzZXJ2ZXIuYFxuICAgICAgOiAnIEFuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudC4nXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IG1ldGEgPSB0aGlzLnByb3BzLmNvbmZpZy5tZXRhLmVycm9yXG4gICAgY29uc3QgdGl0bGUgPSBgJHttZXRhLnRpdGxlfSAke3RoaXMucHJvcHMuc3RhdHVzQ29kZX0gUGFnZSBub3QgZm91bmRgXG4gICAgY29uc3QgbW92aW5ndGV4dHN0cmluZ2lmeSA9IFN0cmluZyh0aGlzLnByb3BzLnN0YXR1c0NvZGUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e19jZW50ZXJlZEJveH0+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufSBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt2ZXJ0aWNhbHlDZW50ZXJlZH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17ZXJyb3JUZXh0fT5cbiAgICAgICAgICAgIFRoZSBwYWdlIHlvdXIgbG9va2luZyBmb3IgY2FuJ3QgYmUgZm91bmQuPGJyLz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckVycm9yKCl9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TW92aW5nVGV4dCBtb3Zpbmd0ZXh0PXttb3Zpbmd0ZXh0c3RyaW5naWZ5fSBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvXCIgdGl0bGU9XCJIb21lXCIgYWx0PVwiSG9tZSBQYWdlXCIgc3R5bGU9e2J1dHRvbn0gLz5cbiAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvcmVzdW1lXCIgdGl0bGU9XCJSZXN1bWVcIiBhbHQ9XCJSZXN1bWUgUGFnZVwiIHN0eWxlPXtidXR0b259IC8+XG4gICAgICAgICAgPEJ1dHRvbkxpbmsgdXJsPVwiL2NvbnRhY3RcIiB0aXRsZT1cIkNvbnRhY3RcIiBhbHQ9XCJDb250YWN0IFBhZ2VcIiBzdHlsZT17YnV0dG9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBidXR0b24gPSBjc3Moe1xuICB3aWR0aDogJzE1MHB4JyxcbiAgYm9yZGVyOiBcIjRweCBzb2xpZCBcIiArIHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAnPiBhJzogeyBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlIH1cbiAgfSxcbiAgJz4gYSc6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB3aWR0aDogJzgwJScsIGZvbnRTaXplOiAnMWVtJyB9XG59KVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBiYWNrZ3JvdW5kOiBjc3Moe1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0pLFxuICBtb3Zpbmd0aXRsZTogY3NzKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMTAwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICc5MCUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnNjAwJScgfVxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTIwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICcyMCcsXG4gIH0sXG59XG5cbmNvbnN0IGVycm9yVGV4dCA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTQwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIGxpbmVIZWlnaHQ6ICcxMzAlJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnMTAwJSdcbiAgfVxufSlcblxuY29uc3QgdmVydGljYWx5Q2VudGVyZWQgPSBjc3Moe1xuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbn0pXG4iXX0=
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/_error"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/_error") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IuanM/YmM0NSJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1ldGEiLCJjb25maWciLCJlcnJvciIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ2ZXJ0aWNhbHlDZW50ZXJlZCIsImVycm9yVGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImJ1dHRvbiIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJib3JkZXIiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aGl0ZSIsImJsYWNrIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwibW92aW5ndGl0bGUiLCJsaW5lSGVpZ2h0IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwibWFyZ2luIiwibGlnaHRfdGV4dCIsInRleHRBbGlnbiIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7S0FFcUJBLEs7Ozs7Ozs7Ozs7bUNBWUw7QUFDWixjQUFPLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxxQ0FFSCwrQkFGSjtBQUdEOzs7OEJBRVM7QUFDUixXQUFNQyxPQUFPLEtBQUtGLEtBQUwsQ0FBV0csTUFBWCxDQUFrQkQsSUFBbEIsQ0FBdUJFLEtBQXBDO0FBQ0EsV0FBTUMsUUFBV0gsS0FBS0csS0FBaEIsU0FBeUIsS0FBS0wsS0FB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ZGNlZjIxYjAwMDU0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IHsgdGhlbWUsIF9jZW50ZXJlZEJveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgQnV0dG9uTGluayBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkxpbmsnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcywganNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNcbiAgICAgID8gcmVzLnN0YXR1c0NvZGVcbiAgICAgIDogKGpzb25QYWdlUmVzID8ganNvblBhZ2VSZXMuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZSxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc3RhdHVzQ29kZVxuICAgICAgPyBgIEFuIGVycm9yIG9jY3VycmVkIG9uIHNlcnZlci5gXG4gICAgICA6ICcgQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50LidcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbWV0YSA9IHRoaXMucHJvcHMuY29uZmlnLm1ldGEuZXJyb3JcbiAgICBjb25zdCB0aXRsZSA9IGAke21ldGEudGl0bGV9ICR7dGhpcy5wcm9wcy5zdGF0dXNDb2RlfSBQYWdlIG5vdCBmb3VuZGBcbiAgICBjb25zdCBtb3Zpbmd0ZXh0c3RyaW5naWZ5ID0gU3RyaW5nKHRoaXMucHJvcHMuc3RhdHVzQ29kZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17X2NlbnRlcmVkQm94fT5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259IGtleXdvcmRzPXttZXRhLmtleXdvcmRzfSAvPlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ZlcnRpY2FseUNlbnRlcmVkfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtlcnJvclRleHR9PlxuICAgICAgICAgICAgVGhlIHBhZ2UgeW91ciBsb29raW5nIGZvciBjYW4ndCBiZSBmb3VuZC48YnIvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXJyb3IoKX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxNb3ZpbmdUZXh0IG1vdmluZ3RleHQ9e21vdmluZ3RleHRzdHJpbmdpZnl9IHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9cIiB0aXRsZT1cIkhvbWVcIiBhbHQ9XCJIb21lIFBhZ2VcIiBzdHlsZT17YnV0dG9ufSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9yZXN1bWVcIiB0aXRsZT1cIlJlc3VtZVwiIGFsdD1cIlJlc3VtZSBQYWdlXCIgc3R5bGU9e2J1dHRvbn0gLz5cbiAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvY29udGFjdFwiIHRpdGxlPVwiQ29udGFjdFwiIGFsdD1cIkNvbnRhY3QgUGFnZVwiIHN0eWxlPXtidXR0b259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJ1dHRvbiA9IGNzcyh7XG4gIHdpZHRoOiAnMTUwcHgnLFxuICBib3JkZXI6IFwiNHB4IHNvbGlkIFwiICsgdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICc+IGEnOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUgfVxuICB9LFxuICAnPiBhJzoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IHdpZHRoOiAnODAlJywgZm9udFNpemU6ICcxZW0nIH1cbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IGNzcyh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSksXG4gIG1vdmluZ3RpdGxlOiBjc3Moe1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgZm9udFNpemU6ICcxMDAwJScsXG4gICAgbGluZUhlaWdodDogJzkwJScsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICc2MDAlJyB9XG4gIH0pLFxuICBtb3Zpbmd0aXRsZWJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICBhbmltYXRpb246IHtcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3g6ICctMTAwJyxcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3k6ICctMTAwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3g6ICctMjAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeTogJzIwJyxcbiAgfSxcbn1cblxuY29uc3QgZXJyb3JUZXh0ID0gY3NzKHtcbiAgZm9udFNpemU6ICcxNDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgbGluZUhlaWdodDogJzEzMCUnLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0X3RleHQsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgZm9udFNpemU6ICcxMDAlJ1xuICB9XG59KVxuXG5jb25zdCB2ZXJ0aWNhbHlDZW50ZXJlZCA9IGNzcyh7XG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHpJbmRleDogJzEnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19lcnJvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=