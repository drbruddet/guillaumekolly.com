webpackHotUpdate(1,{

/***/ 160:
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
	
	var _link = __webpack_require__(74);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _Theme = __webpack_require__(21);
	
	var _HeadBloc = __webpack_require__(63);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _FullBackground = __webpack_require__(85);
	
	var _FullBackground2 = _interopRequireDefault(_FullBackground);
	
	var _Menu = __webpack_require__(102);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _ContactForm = __webpack_require__(152);
	
	var _ContactForm2 = _interopRequireDefault(_ContactForm);
	
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
	          socials = _props.socials,
	          config = _props.config;
	
	      var meta = config.meta.contact;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_HeadBloc2.default, { title: meta.title, description: meta.description, keywords: meta.keywords }),
	        _react2.default.createElement(
	          'section',
	          { className: (0, _css.css)(halfside, left) },
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
	              { href: config.application.cv_pdf_url },
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
	          { className: (0, _css.css)(halfside, right) },
	          _react2.default.createElement(_ContactForm2.default, { sendTo: config.application.email, style: contactForm })
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
	
	// SOCIAL AND RESUME links
	
	
	exports.default = _class;
	var social = {
	  component: (0, _css.style)({
	    textTransform: 'uppercase',
	    zIndex: '999',
	    position: 'relative',
	    top: '50%',
	    textAlign: 'center',
	    display: 'block',
	    margin: '0 auto',
	    '@media(max-width: 640px)': { top: 'calc(80px / 2)' }
	  }),
	  link: (0, _css.style)({
	    margin: '0 1% 0 1%',
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
	    '@media(max-width: 640px)': {
	      fontSize: '0.9em',
	      margin: '5px auto'
	    }
	  })
	};
	
	var resume = (0, _css.css)({
	  position: 'relative',
	  top: 'calc(50% + 20px)',
	  textAlign: 'center',
	  letterSpacing: '0.024em',
	  '@media(max-width: 1240px)': { padding: '0 0.2em' },
	  '@media(max-width: 640px)': {
	    fontSize: '0.8em',
	    margin: '5px auto',
	    top: '70px'
	  }
	});
	
	// CONTAINER SETTINGS
	var halfside = (0, _css.css)({
	  width: '50%',
	  height: '100vh',
	  position: 'absolute',
	  top: '0',
	  '@media(max-width: 640px)': { width: '100%' }
	});
	
	var left = (0, _css.css)({
	  left: '0',
	  background: 'transparent',
	  '@media(max-width: 640px)': { height: '160px' }
	});
	
	var right = (0, _css.css)({
	  right: '0',
	  background: _Theme.theme.colors.primary,
	  zIndex: '999',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  '@media(max-width: 640px)': {
	    top: 'calc(160px + 20px)',
	    left: '0',
	    height: '100%',
	    position: 'relative'
	  }
	});
	
	var contactForm = {
	  title: (0, _css.style)({
	    fontFamily: _Theme.theme.font.title,
	    marginBottom: '1.5em'
	  })
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzb2NpYWxzIiwiY29uZmlnIiwibWV0YSIsImNvbnRhY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJoYWxmc2lkZSIsImxlZnQiLCJzb2NpYWwiLCJyZXN1bWUiLCJhcHBsaWNhdGlvbiIsImN2X3BkZl91cmwiLCJyaWdodCIsImVtYWlsIiwiY29udGFjdEZvcm0iLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwibWFyZ2luIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRGYW1pbHkiLCJmb250IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBV1c7QUFBQSxtQkFDcUIsS0FBS0EsS0FEMUI7QUFBQSxVQUNDQyxPQURELFVBQ0NBLE9BREQ7QUFBQSxVQUNVQyxNQURWLFVBQ1VBLE1BRFY7O0FBRVAsVUFBTUMsT0FBT0QsT0FBT0MsSUFBUCxDQUFZQyxPQUF6Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFLDREQUFVLE9BQU9ELEtBQUtFLEtBQXRCLEVBQTZCLGFBQWFGLEtBQUtHLFdBQS9DLEVBQTRELFVBQVVILEtBQUtJLFFBQTNFLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBUyxX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V3JDLEtBRFo7QUFFWHNDLGtCQUFjO0FBRkgsR0FBTjtBQURXLENBQXBCIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX3RhZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb2NpYWxzOiBzb2NpYWxzLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb2NpYWxzLCBjb25maWcgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEuY29udGFjdFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT17bWV0YS50aXRsZX0gZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259IGtleXdvcmRzPXttZXRhLmtleXdvcmRzfSAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NzcyhoYWxmc2lkZSwgbGVmdCApfT5cbiAgICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVzdW1lfT5cbiAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB3YXRjaCBteSZuYnNwO1xuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj48YSBjbGFzc05hbWU9e190YWd9Pm9ubGluZSByZXN1bWU8L2E+PC9MaW5rPiBvciZuYnNwO1xuICAgICAgICAgICAgPExpbmsgaHJlZj17Y29uZmlnLmFwcGxpY2F0aW9uLmN2X3BkZl91cmx9PjxhIGNsYXNzTmFtZT17X3RhZ30+ZG93bmxvYWQgaXQ8L2E+PC9MaW5rPi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NzcyhoYWxmc2lkZSwgcmlnaHQpfT5cbiAgICAgICAgICA8Q29udGFjdEZvcm0gc2VuZFRvPXtjb25maWcuYXBwbGljYXRpb24uZW1haWx9IHN0eWxlPXtjb250YWN0Rm9ybX0vPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gU09DSUFMIEFORCBSRVNVTUUgbGlua3NcbmNvbnN0IHNvY2lhbCA9IHtcbiAgY29tcG9uZW50OiBzdHlsZSh7XG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnOTk5JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IHRvcDogJ2NhbGMoODBweCAvIDIpJywgfSxcbiAgfSksXG4gIGxpbms6IHN0eWxlKHtcbiAgICBtYXJnaW46ICcwIDElIDAgMSUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBtYXJnaW46ICc1cHggYXV0bycsXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZXN1bWUgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdG9wOiAnY2FsYyg1MCUgKyAyMHB4KScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGxldHRlclNwYWNpbmc6ICcwLjAyNGVtJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IHBhZGRpbmc6ICcwIDAuMmVtJyB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnMC44ZW0nLFxuICAgIG1hcmdpbjogJzVweCBhdXRvJyxcbiAgICB0b3A6ICc3MHB4JyxcbiAgfVxufSlcblxuLy8gQ09OVEFJTkVSIFNFVFRJTkdTXG5jb25zdCBoYWxmc2lkZSA9IGNzcyh7XG4gIHdpZHRoOiAnNTAlJyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IHdpZHRoOiAnMTAwJScgfVxufSlcblxuY29uc3QgbGVmdCA9IGNzcyh7XG4gIGxlZnQ6ICcwJyxcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgaGVpZ2h0OiAnMTYwcHgnLCB9XG59KVxuXG5jb25zdCByaWdodCA9IGNzcyh7XG4gIHJpZ2h0OiAnMCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICB6SW5kZXg6ICc5OTknLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgdG9wOiAnY2FsYygxNjBweCArIDIwcHgpJyxcbiAgICBsZWZ0OiAnMCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG59KVxuXG5jb25zdCBjb250YWN0Rm9ybSA9IHtcbiAgdGl0bGU6IHN0eWxlKHtcbiAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICAgIG1hcmdpbkJvdHRvbTogJzEuNWVtJ1xuICB9KSxcbn1cbiJdfQ==
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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzP2Y1NDQiXSwibmFtZXMiOlsicHJvcHMiLCJzb2NpYWxzIiwiY29uZmlnIiwibWV0YSIsImNvbnRhY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJoYWxmc2lkZSIsImxlZnQiLCJzb2NpYWwiLCJyZXN1bWUiLCJhcHBsaWNhdGlvbiIsImN2X3BkZl91cmwiLCJyaWdodCIsImVtYWlsIiwiY29udGFjdEZvcm0iLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwibWFyZ2luIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRGYW1pbHkiLCJmb250IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFXVztBQUFBLG9CQUNxQixLQUFLQSxLQUQxQjtBQUFBLFdBQ0NDLE9BREQsVUFDQ0EsT0FERDtBQUFBLFdBQ1VDLE1BRFYsVUFDVUEsTUFEVjs7QUFFUCxXQUFNQyxPQUFPRCxPQUFPQyxJQUFQLENBQVlDLE9BQXpCOztBQUVBLGNBQ0U7QUFBQTtBQUFBO0FBQ0UsNkRBQVUsT0FBT0QsS0FBS0UsS0FBdEIsRUFBNkIsYUFBYUYsS0FBS0csV0FBL0MsRUFBNEQsVUFBVUgsS0FBS0ksUUFBM0UsR0FE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Q1hvQyxpQkFBWSxhQUFNQyxJQUFOLENBQVdyQyxLQURaO0FBRVhzQyxtQkFBYztBQUZILElBQU47QUFEVyxFQUFwQiIsImZpbGUiOiIxLjdkZTZmY2Y3ZmZjZDg2YzA2ODA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MsIHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvY2lhbHM6IHNvY2lhbHMsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvY2lhbHMsIGNvbmZpZyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5jb250YWN0XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXttZXRhLnRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn0ga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzKGhhbGZzaWRlLCBsZWZ0ICl9PlxuICAgICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyZXN1bWV9PlxuICAgICAgICAgICAgWW91IGNhbiBhbHNvIHdhdGNoIG15Jm5ic3A7XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL3Jlc3VtZVwiPjxhIGNsYXNzTmFtZT17X3RhZ30+b25saW5lIHJlc3VtZTwvYT48L0xpbms+IG9yJm5ic3A7XG4gICAgICAgICAgICA8TGluayBocmVmPXtjb25maWcuYXBwbGljYXRpb24uY3ZfcGRmX3VybH0+PGEgY2xhc3NOYW1lPXtfdGFnfT5kb3dubG9hZCBpdDwvYT48L0xpbms+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzKGhhbGZzaWRlLCByaWdodCl9PlxuICAgICAgICAgIDxDb250YWN0Rm9ybSBzZW5kVG89e2NvbmZpZy5hcHBsaWNhdGlvbi5lbWFpbH0gc3R5bGU9e2NvbnRhY3RGb3JtfS8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBTT0NJQUwgQU5EIFJFU1VNRSBsaW5rc1xuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgdG9wOiAnY2FsYyg4MHB4IC8gMiknLCB9LFxuICB9KSxcbiAgbGluazogc3R5bGUoe1xuICAgIG1hcmdpbjogJzAgMSUgMCAxJScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMS4yZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdsaXN0LWl0ZW0nLFxuICAgICAgbWFyZ2luOiAnMTBweCBhdXRvJyxcbiAgICB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIG1hcmdpbjogJzVweCBhdXRvJyxcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHJlc3VtZSA9IGNzcyh7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB0b3A6ICdjYWxjKDUwJSArIDIwcHgpJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgbGV0dGVyU3BhY2luZzogJzAuMDI0ZW0nLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgcGFkZGluZzogJzAgMC4yZW0nIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nLFxuICAgIHRvcDogJzcwcHgnLFxuICB9XG59KVxuXG4vLyBDT05UQUlORVIgU0VUVElOR1NcbmNvbnN0IGhhbGZzaWRlID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgd2lkdGg6ICcxMDAlJyB9XG59KVxuXG5jb25zdCBsZWZ0ID0gY3NzKHtcbiAgbGVmdDogJzAnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBoZWlnaHQ6ICcxNjBweCcsIH1cbn0pXG5cbmNvbnN0IHJpZ2h0ID0gY3NzKHtcbiAgcmlnaHQ6ICcwJyxcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIHpJbmRleDogJzk5OScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB0b3A6ICdjYWxjKDE2MHB4ICsgMjBweCknLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbn0pXG5cbmNvbnN0IGNvbnRhY3RGb3JtID0ge1xuICB0aXRsZTogc3R5bGUoe1xuICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgbWFyZ2luQm90dG9tOiAnMS41ZW0nXG4gIH0pLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29udGFjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=