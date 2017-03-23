'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _glamor = require('glamor');

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

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
      return _react2.default.createElement(
        'div',
        { className: centeredbox },
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(
          'div',
          { className: centeredvert },
          _react2.default.createElement(
            'h2',
            { className: errortext },
            'The page your looking for can\'t be found.',
            this.renderError()
          ),
          _react2.default.createElement(_MovingText2.default, {
            movingtext: this.props.statusCode,
            style: movingText }),
          _react2.default.createElement(
            _link2.default,
            { href: '/' },
            _react2.default.createElement(
              'a',
              { className: link },
              'Go Back Home'
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          jsonPageRes = _ref.jsonPageRes;

      var statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
      return { statusCode: statusCode };
    }
  }]);
  return Error;
}(_react2.default.Component);

exports.default = Error;


var movingText = {
  background: (0, _glamor.style)({
    height: '100%',
    width: '100%'
  }),
  movingtitle: (0, _glamor.style)({
    color: '#2b2b2b',
    fontSize: '1000%'
  }),
  movingtitlebackground: 'rgba(99, 231, 175, 0.8)',
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-20',
    shadow_mouse_pos_y: '20'
  }
};

var errortext = (0, _css2.default)({
  fontSize: '140%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '90%'
  }
});

var errornumber = (0, _css2.default)({
  fontSize: '2000%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '600%',
    padding: '20px 10px',
    margin: 'auto'
  }
});

var link = (0, _css2.default)({
  color: '#242424',
  textDecoration: 'none',
  border: '3px solid #242424',
  padding: '10px'
});

var centeredbox = (0, _css2.default)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
});

var centeredvert = (0, _css2.default)({
  padding: '2em',
  maxWidth: '50%',
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: '#242424'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsImNlbnRlcmVkYm94IiwiY2VudGVyZWR2ZXJ0IiwiZXJyb3J0ZXh0IiwicmVuZGVyRXJyb3IiLCJtb3ZpbmdUZXh0IiwibGluayIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibW92aW5ndGl0bGUiLCJjb2xvciIsImZvbnRTaXplIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwicGFkZGluZyIsIm1hcmdpbiIsImVycm9ybnVtYmVyIiwidGV4dERlY29yYXRpb24iLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7O2tDQVNMO0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLFVBQVgscUNBRUgsK0JBRko7QUFHRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXQyxXQUFoQjtBQUNFLHFFQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBV0MsWUFBaEI7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFXQyxTQUFmO0FBQUE7QUFFRyxpQkFBS0MsV0FBTDtBQUZILFdBREY7QUFLRTtBQUNFLHdCQUFZLEtBQUtMLEtBQUwsQ0FBV0MsVUFEekI7QUFFRSxtQkFBT0ssVUFGVCxHQUxGO0FBUUU7QUFBQTtBQUFBLGNBQU0sTUFBSyxHQUFYO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLFdBQVdDLElBQWQ7QUFBQTtBQUFBO0FBREY7QUFSRjtBQUZGLE9BREY7QUFpQkQ7OzswQ0EvQjZDO0FBQUEsVUFBcEJDLEdBQW9CLFFBQXBCQSxHQUFvQjtBQUFBLFVBQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFDNUMsVUFBTVIsYUFBYU8sTUFDZkEsSUFBSVAsVUFEVyxHQUVkUSxjQUFjQSxZQUFZQyxNQUExQixHQUFtQyxJQUZ4QztBQUdBLGFBQU8sRUFBRVQsc0JBQUYsRUFBUDtBQUNEOzs7RUFQZ0MsZ0JBQU1VLFM7O2tCQUFwQlosSzs7O0FBb0NyQixJQUFNTyxhQUFhO0FBQ2pCTSxjQUFZLG1CQUFNO0FBQ2hCQyxZQUFRLE1BRFE7QUFFaEJDLFdBQU87QUFGUyxHQUFOLENBREs7QUFLakJDLGVBQWEsbUJBQU07QUFDakJDLFdBQU8sU0FEVTtBQUVqQkMsY0FBVTtBQUZPLEdBQU4sQ0FMSTtBQVNqQkMseUJBQXVCLHlCQVROO0FBVWpCQyxhQUFXO0FBQ1RDLDJCQUF1QixNQURkO0FBRVRDLDJCQUF1QixNQUZkO0FBR1RDLHdCQUFvQixLQUhYO0FBSVRDLHdCQUFvQjtBQUpYO0FBVk0sQ0FBbkI7O0FBa0JBLElBQU1uQixZQUFZLG1CQUFJO0FBQ3BCYSxZQUFVLE1BRFU7QUFFcEJPLFdBQVMsR0FGVztBQUdwQkMsVUFBUSxHQUhZO0FBSXBCLDhCQUE0QjtBQUMxQlIsY0FBVTtBQURnQjtBQUpSLENBQUosQ0FBbEI7O0FBU0EsSUFBTVMsY0FBYyxtQkFBSTtBQUN0QlQsWUFBVSxPQURZO0FBRXRCTyxXQUFTLEdBRmE7QUFHdEJDLFVBQVEsR0FIYztBQUl0Qiw4QkFBNEI7QUFDMUJSLGNBQVUsTUFEZ0I7QUFFMUJPLGFBQVMsV0FGaUI7QUFHMUJDLFlBQVE7QUFIa0I7QUFKTixDQUFKLENBQXBCOztBQVdBLElBQU1sQixPQUFPLG1CQUFJO0FBQ2ZTLFNBQU8sU0FEUTtBQUVmVyxrQkFBZ0IsTUFGRDtBQUdmQyxVQUFRLG1CQUhPO0FBSWZKLFdBQVM7QUFKTSxDQUFKLENBQWI7O0FBT0EsSUFBTXRCLGNBQWMsbUJBQUk7QUFDdEIyQixXQUFTLE1BRGE7QUFFdEJDLGNBQVksUUFGVTtBQUd0QkMsa0JBQWdCLFFBSE07QUFJdEJqQixTQUFPLE9BSmU7QUFLdEJELFVBQVE7QUFMYyxDQUFKLENBQXBCOztBQVFBLElBQU1WLGVBQWUsbUJBQUk7QUFDdkJxQixXQUFTLEtBRGM7QUFFdkJRLFlBQVUsS0FGYTtBQUd2QkMsYUFBVyxRQUhZO0FBSXZCQyxVQUFRLEdBSmU7QUFLdkJ0QixjQUFZLGFBTFc7QUFNdkJJLFNBQU87QUFOZ0IsQ0FBSixDQUFyQiIsImZpbGUiOiJfZXJyb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnZ2xhbW9yJ1xuXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNb3ZpbmdUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aW5nVGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVzLCBqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc1xuICAgICAgPyByZXMuc3RhdHVzQ29kZVxuICAgICAgOiAoanNvblBhZ2VSZXMgPyBqc29uUGFnZVJlcy5zdGF0dXMgOiBudWxsKVxuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuICB9XG5cbiAgcmVuZGVyRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc3RhdHVzQ29kZVxuICAgICAgPyBgIEFuIGVycm9yIG9jY3VycmVkIG9uIHNlcnZlci5gXG4gICAgICA6ICcgQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50LidcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjZW50ZXJlZGJveH0+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWR2ZXJ0fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtlcnJvcnRleHR9PlxuICAgICAgICAgICAgVGhlIHBhZ2UgeW91ciBsb29raW5nIGZvciBjYW4ndCBiZSBmb3VuZC5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckVycm9yKCl9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TW92aW5nVGV4dFxuICAgICAgICAgICAgbW92aW5ndGV4dD17dGhpcy5wcm9wcy5zdGF0dXNDb2RlfVxuICAgICAgICAgICAgc3R5bGU9e21vdmluZ1RleHR9IC8+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua30+R28gQmFjayBIb21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbW92aW5nVGV4dCA9IHtcbiAgYmFja2dyb3VuZDogc3R5bGUoe1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0pLFxuICBtb3Zpbmd0aXRsZTogc3R5bGUoe1xuICAgIGNvbG9yOiAnIzJiMmIyYicsXG4gICAgZm9udFNpemU6ICcxMDAwJSdcbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogJ3JnYmEoOTksIDIzMSwgMTc1LCAwLjgpJyxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTIwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICcyMCcsXG4gIH1cbn1cblxuY29uc3QgZXJyb3J0ZXh0ID0gY3NzKHtcbiAgZm9udFNpemU6ICcxNDAlJyxcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzkwJScsXG4gIH1cbn0pXG5cbmNvbnN0IGVycm9ybnVtYmVyID0gY3NzKHtcbiAgZm9udFNpemU6ICcyMDAwJScsXG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgZm9udFNpemU6ICc2MDAlJyxcbiAgICBwYWRkaW5nOiAnMjBweCAxMHB4JyxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgfVxufSlcblxuY29uc3QgbGluayA9IGNzcyh7XG4gIGNvbG9yOiAnIzI0MjQyNCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGJvcmRlcjogJzNweCBzb2xpZCAjMjQyNDI0JyxcbiAgcGFkZGluZzogJzEwcHgnLFxufSlcblxuY29uc3QgY2VudGVyZWRib3ggPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCdcbn0pXG5cbmNvbnN0IGNlbnRlcmVkdmVydCA9IGNzcyh7XG4gIHBhZGRpbmc6ICcyZW0nLFxuICBtYXhXaWR0aDogJzUwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHpJbmRleDogJzEnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJyMyNDI0MjQnLFxufSlcbiJdfQ==