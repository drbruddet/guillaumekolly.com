webpackHotUpdate(1,{

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(8);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(9);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(10);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(12);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(11);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(17);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _link = __webpack_require__(88);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _HeadBloc = __webpack_require__(143);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _Menu = __webpack_require__(140);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _FullBackground = __webpack_require__(139);
	
	var _FullBackground2 = _interopRequireDefault(_FullBackground);
	
	var _MovingText = __webpack_require__(141);
	
	var _MovingText2 = _interopRequireDefault(_MovingText);
	
	var _TextTyped = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/TextTyped\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _TextTyped2 = _interopRequireDefault(_TextTyped);
	
	var _socials = __webpack_require__(144);
	
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
	        _react2.default.createElement(_HeadBloc2.default, null),
	        _react2.default.createElement(_FullBackground2.default, null),
	        _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
	        _react2.default.createElement(_MovingText2.default, {
	          text: 'I\'m',
	          movingtext: 'Guillaume Kolly',
	          style: backgroundSize }),
	        _react2.default.createElement(
	          _TextTyped2.default,
	          null,
	          'I\u2019m a full stack developer born and raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. I also have skills with Photoshop / Illustrator. Do not hezitate to ',
	          _react2.default.createElement(
	            _link2.default,
	            { href: '#' },
	            _react2.default.createElement(
	              'a',
	              null,
	              'contact me'
	            )
	          ),
	          '.'
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
	
	
	var backgroundSize = (0, _css2.default)({
	  height: '100vh',
	  width: 'calc(100vw - 30px)',
	  position: 'absolute',
	  top: '0',
	  left: '30px'
	});
	
	var social = (0, _css2.default)({
	  display: 'inline-block',
	  margin: '5px 10px',
	  transformOrigin: 'left top',
	  transform: 'rotate(270deg) translateX(-100%)',
	  textTransform: 'uppercase',
	  zIndex: '1',
	  textDecoration: 'none'
	});
	
	var text = (0, _css2.default)({
	  width: '602px',
	  position: 'absolute',
	  right: '10%',
	  top: 'calc(30% + 4em + 4em)'
	});
	
	var container = (0, _css2.default)({
	  height: '100vh',
	  width: '100vw',
	  position: 'relative'
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsImJhY2tncm91bmRTaXplIiwiQ29tcG9uZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInpJbmRleCIsInRleHREZWNvcmF0aW9uIiwidGV4dCIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUFBLFVBQ0NBLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdFLFNBQWhCO0FBQ0UsK0RBREY7QUFFRSxxRUFGRjtBQUdFLHdEQUFNLE9BQU9GLE9BQWIsRUFBc0IsT0FBT0csTUFBN0IsR0FIRjtBQUlFO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLHNCQUFXLGlCQUZiO0FBR0UsaUJBQU9DLGNBSFQsR0FKRjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBTUs7QUFBQTtBQUFBLGNBQU0sTUFBSyxHQUFYO0FBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmLFdBTkw7QUFBQTtBQUFBO0FBUkYsT0FERjtBQW1CRDs7O3NDQTFCeUI7QUFDeEIsYUFBTyxFQUFFSiwwQkFBRixFQUFQO0FBQ0Q7OztFQUowQixnQkFBTUssUzs7Ozs7QUErQm5DLElBQU1ELGlCQUFpQixtQkFBSTtBQUN6QkUsVUFBUSxPQURpQjtBQUV6QkMsU0FBTyxvQkFGa0I7QUFHekJDLFlBQVUsVUFIZTtBQUl6QkMsT0FBSyxHQUpvQjtBQUt6QkMsUUFBTTtBQUxtQixDQUFKLENBQXZCOztBQVFBLElBQU1QLFNBQVMsbUJBQUk7QUFDakJRLFdBQVMsY0FEUTtBQUVqQkMsVUFBUSxVQUZTO0FBR2pCQyxtQkFBaUIsVUFIQTtBQUlqQkMsYUFBVyxrQ0FKTTtBQUtqQkMsaUJBQWUsV0FMRTtBQU1qQkMsVUFBUSxHQU5TO0FBT2pCQyxrQkFBZ0I7QUFQQyxDQUFKLENBQWY7O0FBVUEsSUFBTUMsT0FBTyxtQkFBSTtBQUNmWCxTQUFPLE9BRFE7QUFFZkMsWUFBVSxVQUZLO0FBR2ZXLFNBQU8sS0FIUTtBQUlmVixPQUFLO0FBSlUsQ0FBSixDQUFiOztBQU9BLElBQU1QLFlBQVksbUJBQUk7QUFDcEJJLFVBQVEsT0FEWTtBQUVwQkMsU0FBTyxPQUZhO0FBR3BCQyxZQUFVO0FBSFUsQ0FBSixDQUFsQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNb3ZpbmdUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aW5nVGV4dCdcbmltcG9ydCBUZXh0VHlwZWQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0VHlwZWQnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4geyBzb2NpYWxzOiBzb2NpYWxzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jIC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgPE1vdmluZ1RleHRcbiAgICAgICAgICB0ZXh0PVwiSSdtXCJcbiAgICAgICAgICBtb3Zpbmd0ZXh0PVwiR3VpbGxhdW1lIEtvbGx5XCJcbiAgICAgICAgICBzdHlsZT17YmFja2dyb3VuZFNpemV9IC8+XG4gICAgICAgIDxUZXh0VHlwZWQ+XG4gICAgICAgICAgSeKAmW0gYSBmdWxsIHN0YWNrIGRldmVsb3BlciBib3JuIGFuZCByYWlzZWQgaW4gdGhlIEZyZW5jaCBBbHBzLFxuICAgICAgICAgIGJ1dCBJ4oCZbSBjdXJyZW50bHkgbGl2aW5nIGluIEx5b24gLSBGcmFuY2UuIEnigJltIGZsdWVudCBpblxuICAgICAgICAgIE5vZGUgLyBNZXRlb3IgLyBKUyAvIFJlYWN0LCBidXQgSeKAmW0gcmVjZW50bHkgc3RhcnRlZFxuICAgICAgICAgIGV4cGVyaW1lbnRpbmcgd2l0aCBHcmFwaFFMLCBSZWR1eCBhbmQgV2VicGFjay4gSSBhbHNvXG4gICAgICAgICAgaGF2ZSBza2lsbHMgd2l0aCBQaG90b3Nob3AgLyBJbGx1c3RyYXRvci4gRG8gbm90IGhleml0YXRlXG4gICAgICAgICAgdG8gPExpbmsgaHJlZj1cIiNcIj48YT5jb250YWN0IG1lPC9hPjwvTGluaz4uXG4gICAgICAgIDwvVGV4dFR5cGVkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJhY2tncm91bmRTaXplID0gY3NzKHtcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICB3aWR0aDogJ2NhbGMoMTAwdncgLSAzMHB4KScsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgbGVmdDogJzMwcHgnLFxufSlcblxuY29uc3Qgc29jaWFsID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIG1hcmdpbjogJzVweCAxMHB4JyxcbiAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICB6SW5kZXg6ICcxJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJ1xufSlcblxuY29uc3QgdGV4dCA9IGNzcyh7XG4gIHdpZHRoOiAnNjAycHgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDRlbSknXG59KVxuXG5jb25zdCBjb250YWluZXIgPSBjc3Moe1xuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbn0pXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9mN2VlIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsImJhY2tncm91bmRTaXplIiwiQ29tcG9uZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInpJbmRleCIsInRleHREZWNvcmF0aW9uIiwidGV4dCIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzhCQVFXO0FBQUEsV0FDQ0EsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7OztBQUdQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBV0UsU0FBaEI7QUFDRSxnRUFERjtBQUVFLHNFQUZGO0FBR0UseURBQU0sT0FBT0YsT0FBYixFQUFzQixPQUFPRyxNQUE3QixHQUhGO0FBSUU7QUFDRSxpQkFBSyxNQURQO0FBRUUsdUJBQVcsaUJBRmI7QUFHRSxrQkFBT0MsY0FIVCxHQUpGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFNSztBQUFBO0FBQUEsZUFBTSxNQUFLLEdBQVg7QUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWYsWUFOTDtBQUFBO0FBQUE7QUFSRixRQURGO0FBbUJEOzs7dUNBMUJ5QjtBQUN4QixjQUFPLEVBQUVKLDBCQUFGLEVBQVA7QUFDRDs7O0dBSjBCLGdCQUFNSyxTOzs7OztBQStCbkMsS0FBTUQsaUJBQWlCLG1CQUFJO0FBQ3pCRSxXQUFRLE9BRGlCO0FBRXpCQyxVQUFPLG9CQUZrQjtBQUd6QkMsYUFBVSxVQUhlO0FBSXpCQyxRQUFLLEdBSm9CO0FBS3pCQyxTQUFNO0FBTG1CLEVBQUosQ0FBdkI7O0FBUUEsS0FBTVAsU0FBUyxtQkFBSTtBQUNqQlEsWUFBUyxjQURRO0FBRWpCQyxXQUFRLFVBRlM7QUFHakJDLG9CQUFpQixVQUhBO0FBSWpCQyxjQUFXLGtDQUpNO0FBS2pCQyxrQkFBZSxXQUxFO0FBTWpCQyxXQUFRLEdBTlM7QUFPakJDLG1CQUFnQjtBQVBDLEVBQUosQ0FBZjs7QUFVQSxLQUFNQyxPQUFPLG1CQUFJO0FBQ2ZYLFVBQU8sT0FEUTtBQUVmQyxhQUFVLFVBRks7QUFHZlcsVUFBTyxLQUhRO0FBSWZWLFFBQUs7QUFKVSxFQUFKLENBQWI7O0FBT0EsS0FBTVAsWUFBWSxtQkFBSTtBQUNwQkksV0FBUSxPQURZO0FBRXBCQyxVQUFPLE9BRmE7QUFHcEJDLGFBQVU7QUFIVSxFQUFKLENBQWxCIiwiZmlsZSI6IjEuNmUyNTExOWM4ODllMDYxYWI2NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IFRleHRUeXBlZCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRUeXBlZCdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHNvY2lhbHM6IHNvY2lhbHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxuICAgICAgICA8SGVhZEJsb2MgLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICAgICAgICA8TW92aW5nVGV4dFxuICAgICAgICAgIHRleHQ9XCJJJ21cIlxuICAgICAgICAgIG1vdmluZ3RleHQ9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kU2l6ZX0gLz5cbiAgICAgICAgPFRleHRUeXBlZD5cbiAgICAgICAgICBJ4oCZbSBhIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyIGJvcm4gYW5kIHJhaXNlZCBpbiB0aGUgRnJlbmNoIEFscHMsXG4gICAgICAgICAgYnV0IEnigJltIGN1cnJlbnRseSBsaXZpbmcgaW4gTHlvbiAtIEZyYW5jZS4gSeKAmW0gZmx1ZW50IGluXG4gICAgICAgICAgTm9kZSAvIE1ldGVvciAvIEpTIC8gUmVhY3QsIGJ1dCBJ4oCZbSByZWNlbnRseSBzdGFydGVkXG4gICAgICAgICAgZXhwZXJpbWVudGluZyB3aXRoIEdyYXBoUUwsIFJlZHV4IGFuZCBXZWJwYWNrLiBJIGFsc29cbiAgICAgICAgICBoYXZlIHNraWxscyB3aXRoIFBob3Rvc2hvcCAvIElsbHVzdHJhdG9yLiBEbyBub3QgaGV6aXRhdGVcbiAgICAgICAgICB0byA8TGluayBocmVmPVwiI1wiPjxhPmNvbnRhY3QgbWU8L2E+PC9MaW5rPi5cbiAgICAgICAgPC9UZXh0VHlwZWQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYmFja2dyb3VuZFNpemUgPSBjc3Moe1xuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHdpZHRoOiAnY2FsYygxMDB2dyAtIDMwcHgpJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogJzAnLFxuICBsZWZ0OiAnMzBweCcsXG59KVxuXG5jb25zdCBzb2NpYWwgPSBjc3Moe1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgbWFyZ2luOiAnNXB4IDEwcHgnLFxuICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gIHRyYW5zZm9ybTogJ3JvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIHpJbmRleDogJzEnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG59KVxuXG5jb25zdCB0ZXh0ID0gY3NzKHtcbiAgd2lkdGg6ICc2MDJweCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzEwJScsXG4gIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgNGVtKSdcbn0pXG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7XG4gIGhlaWdodDogJzEwMHZoJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==