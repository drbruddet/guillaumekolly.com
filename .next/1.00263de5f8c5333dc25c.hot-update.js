webpackHotUpdate(1,{

/***/ 144:
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
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(27);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _HeadBloc = __webpack_require__(139);
	
	var _HeadBloc2 = _interopRequireDefault(_HeadBloc);
	
	var _Menu = __webpack_require__(138);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _H = __webpack_require__(140);
	
	var _H2 = _interopRequireDefault(_H);
	
	var _Paragraph = __webpack_require__(141);
	
	var _Paragraph2 = _interopRequireDefault(_Paragraph);
	
	var _MovingText = __webpack_require__(147);
	
	var _MovingText2 = _interopRequireDefault(_MovingText);
	
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
	      var socials = this.props.socials;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: container },
	        _react2.default.createElement(_HeadBloc2.default, null),
	        _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
	        _react2.default.createElement(_MovingText2.default, { text: 'I\'m', movingtext: 'Guillaume Kolly' }),
	        _react2.default.createElement(
	          'section',
	          { className: introduction },
	          _react2.default.createElement(_H2.default, { title: 'Guillaume Kolly',
	            style: { color: '#000', fontSize: '4em' } }),
	          _react2.default.createElement(
	            _Paragraph2.default,
	            null,
	            'Text of the paragraph'
	          )
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
	
	
	var social = (0, _css2.default)({
	  display: 'inline-block',
	  margin: '5px 10px',
	  transformOrigin: 'left top',
	  transform: 'rotate(270deg) translateX(-100%)',
	  textTransform: 'uppercase',
	  textDecoration: 'none',
	  zIndex: '1'
	});
	
	var introduction = (0, _css2.default)({
	  position: 'absolute',
	  right: '20%',
	  top: '30%',
	  border: '1px solid blue',
	  zIndex: '-1'
	});
	
	var container = (0, _css2.default)({
	  minHeight: '100vh',
	  position: 'relative'
	});
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsImludHJvZHVjdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJDb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwiekluZGV4IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImJvcmRlciIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVFXO0FBQUEsVUFDQ0EsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7OztBQUdQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0UsU0FBaEI7QUFDRSwrREFERjtBQUVFLHdEQUFNLE9BQU9GLE9BQWIsRUFBc0IsT0FBT0csTUFBN0IsR0FGRjtBQUdFLDhEQUFZLE1BQUssTUFBakIsRUFBdUIsWUFBVyxpQkFBbEMsR0FIRjtBQUlFO0FBQUE7QUFBQSxZQUFTLFdBQVdDLFlBQXBCO0FBQ0UsdURBQUksT0FBTSxpQkFBVjtBQUNFLG1CQUFPLEVBQUVDLE9BQU8sTUFBVCxFQUFpQkMsVUFBVSxLQUEzQixFQURULEdBREY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFKRixPQURGO0FBY0Q7OztzQ0FyQnlCO0FBQ3hCLGFBQU8sRUFBRU4sMEJBQUYsRUFBUDtBQUNEOzs7RUFKMEIsZ0JBQU1PLFM7Ozs7O0FBMEJuQyxJQUFNSixTQUFTLG1CQUFJO0FBQ2pCSyxXQUFTLGNBRFE7QUFFakJDLFVBQVEsVUFGUztBQUdqQkMsbUJBQWlCLFVBSEE7QUFJakJDLGFBQVcsa0NBSk07QUFLakJDLGlCQUFlLFdBTEU7QUFNakJDLGtCQUFnQixNQU5DO0FBT2pCQyxVQUFRO0FBUFMsQ0FBSixDQUFmOztBQVVBLElBQU1WLGVBQWUsbUJBQUk7QUFDdkJXLFlBQVUsVUFEYTtBQUV2QkMsU0FBTyxLQUZnQjtBQUd2QkMsT0FBSyxLQUhrQjtBQUl2QkMsVUFBUSxnQkFKZTtBQUt2QkosVUFBUTtBQUxlLENBQUosQ0FBckI7O0FBUUEsSUFBTVosWUFBWSxtQkFBSTtBQUNwQmlCLGFBQVcsT0FEUztBQUVwQkosWUFBVTtBQUZVLENBQUosQ0FBbEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEgxIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvSDEnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvUGFyYWdyYXBoJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb2NpYWxzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkQmxvYyAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgPE1vdmluZ1RleHQgdGV4dD1cIkknbVwiIG1vdmluZ3RleHQ9XCJHdWlsbGF1bWUgS29sbHlcIiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2ludHJvZHVjdGlvbn0+XG4gICAgICAgICAgPEgxIHRpdGxlPVwiR3VpbGxhdW1lIEtvbGx5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRTaXplOiAnNGVtJyB9fSAvPlxuICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICBUZXh0IG9mIHRoZSBwYXJhZ3JhcGhcbiAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHNvY2lhbCA9IGNzcyh7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBtYXJnaW46ICc1cHggMTBweCcsXG4gIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgdHJhbnNmb3JtOiAncm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSknLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgekluZGV4OiAnMScsXG59KVxuXG5jb25zdCBpbnRyb2R1Y3Rpb24gPSBjc3Moe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcyMCUnLFxuICB0b3A6ICczMCUnLFxuICBib3JkZXI6ICcxcHggc29saWQgYmx1ZScsXG4gIHpJbmRleDogJy0xJ1xufSlcblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbn0pXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9mN2VlIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsImludHJvZHVjdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJDb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwiekluZGV4IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImJvcmRlciIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUVc7QUFBQSxXQUNDQSxPQURELEdBQ2EsS0FBS0MsS0FEbEIsQ0FDQ0QsT0FERDs7O0FBR1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFXRSxTQUFoQjtBQUNFLGdFQURGO0FBRUUseURBQU0sT0FBT0YsT0FBYixFQUFzQixPQUFPRyxNQUE3QixHQUZGO0FBR0UsK0RBQVksTUFBSyxNQUFqQixFQUF1QixZQUFXLGlCQUFsQyxHQUhGO0FBSUU7QUFBQTtBQUFBLGFBQVMsV0FBV0MsWUFBcEI7QUFDRSx3REFBSSxPQUFNLGlCQUFWO0FBQ0Usb0JBQU8sRUFBRUMsT0FBTyxNQUFULEVBQWlCQyxVQUFVLEtBQTNCLEVBRFQsR0FERjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUpGLFFBREY7QUFjRDs7O3VDQXJCeUI7QUFDeEIsY0FBTyxFQUFFTiwwQkFBRixFQUFQO0FBQ0Q7OztHQUowQixnQkFBTU8sUzs7Ozs7QUEwQm5DLEtBQU1KLFNBQVMsbUJBQUk7QUFDakJLLFlBQVMsY0FEUTtBQUVqQkMsV0FBUSxVQUZTO0FBR2pCQyxvQkFBaUIsVUFIQTtBQUlqQkMsY0FBVyxrQ0FKTTtBQUtqQkMsa0JBQWUsV0FMRTtBQU1qQkMsbUJBQWdCLE1BTkM7QUFPakJDLFdBQVE7QUFQUyxFQUFKLENBQWY7O0FBVUEsS0FBTVYsZUFBZSxtQkFBSTtBQUN2QlcsYUFBVSxVQURhO0FBRXZCQyxVQUFPLEtBRmdCO0FBR3ZCQyxRQUFLLEtBSGtCO0FBSXZCQyxXQUFRLGdCQUplO0FBS3ZCSixXQUFRO0FBTGUsRUFBSixDQUFyQjs7QUFRQSxLQUFNWixZQUFZLG1CQUFJO0FBQ3BCaUIsY0FBVyxPQURTO0FBRXBCSixhQUFVO0FBRlUsRUFBSixDQUFsQiIsImZpbGUiOiIxLjAwMjYzZGU1ZjhjNTMzM2RjMjVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgSDEgZnJvbSAnLi4vY29tcG9uZW50cy91dGlscy9IMSdcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy91dGlscy9QYXJhZ3JhcGgnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4geyBzb2NpYWxzOiBzb2NpYWxzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICAgICAgICA8TW92aW5nVGV4dCB0ZXh0PVwiSSdtXCIgbW92aW5ndGV4dD1cIkd1aWxsYXVtZSBLb2xseVwiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17aW50cm9kdWN0aW9ufT5cbiAgICAgICAgICA8SDEgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMDAwJywgZm9udFNpemU6ICc0ZW0nIH19IC8+XG4gICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgIFRleHQgb2YgdGhlIHBhcmFncmFwaFxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc29jaWFsID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIG1hcmdpbjogJzVweCAxMHB4JyxcbiAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB6SW5kZXg6ICcxJyxcbn0pXG5cbmNvbnN0IGludHJvZHVjdGlvbiA9IGNzcyh7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzIwJScsXG4gIHRvcDogJzMwJScsXG4gIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcbiAgekluZGV4OiAnLTEnXG59KVxuXG5jb25zdCBjb250YWluZXIgPSBjc3Moe1xuICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==