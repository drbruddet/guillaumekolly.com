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

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

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
          _react2.default.createElement(
            'h1',
            { className: errornumber },
            this.props.statusCode
          ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsImNlbnRlcmVkYm94IiwiY2VudGVyZWR2ZXJ0IiwiZXJyb3J0ZXh0IiwicmVuZGVyRXJyb3IiLCJlcnJvcm51bWJlciIsImxpbmsiLCJyZXMiLCJqc29uUGFnZVJlcyIsInN0YXR1cyIsIkNvbXBvbmVudCIsImZvbnRTaXplIiwicGFkZGluZyIsIm1hcmdpbiIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsInpJbmRleCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7OztrQ0FTTDtBQUNaLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxVQUFYLHFDQUVILCtCQUZKO0FBR0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0MsV0FBaEI7QUFDRSxxRUFERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVdDLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBV0MsU0FBZjtBQUFBO0FBRUcsaUJBQUtDLFdBQUw7QUFGSCxXQURGO0FBS0U7QUFBQTtBQUFBLGNBQUksV0FBV0MsV0FBZjtBQUNHLGlCQUFLTixLQUFMLENBQVdDO0FBRGQsV0FMRjtBQVFFO0FBQUE7QUFBQSxjQUFNLE1BQUssR0FBWDtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFXTSxJQUFkO0FBQUE7QUFBQTtBQURGO0FBUkY7QUFGRixPQURGO0FBaUJEOzs7MENBL0I2QztBQUFBLFVBQXBCQyxHQUFvQixRQUFwQkEsR0FBb0I7QUFBQSxVQUFmQyxXQUFlLFFBQWZBLFdBQWU7O0FBQzVDLFVBQU1SLGFBQWFPLE1BQ2ZBLElBQUlQLFVBRFcsR0FFZFEsY0FBY0EsWUFBWUMsTUFBMUIsR0FBbUMsSUFGeEM7QUFHQSxhQUFPLEVBQUVULHNCQUFGLEVBQVA7QUFDRDs7O0VBUGdDLGdCQUFNVSxTOztrQkFBcEJaLEs7OztBQW9DckIsSUFBTUssWUFBWSxtQkFBSTtBQUNwQlEsWUFBVSxNQURVO0FBRXBCQyxXQUFTLEdBRlc7QUFHcEJDLFVBQVEsR0FIWTtBQUlwQiw4QkFBNEI7QUFDMUJGLGNBQVU7QUFEZ0I7QUFKUixDQUFKLENBQWxCOztBQVNBLElBQU1OLGNBQWMsbUJBQUk7QUFDdEJNLFlBQVUsT0FEWTtBQUV0QkMsV0FBUyxHQUZhO0FBR3RCQyxVQUFRLEdBSGM7QUFJdEIsOEJBQTRCO0FBQzFCRixjQUFVLE1BRGdCO0FBRTFCQyxhQUFTLFdBRmlCO0FBRzFCQyxZQUFRO0FBSGtCO0FBSk4sQ0FBSixDQUFwQjs7QUFXQSxJQUFNUCxPQUFPLG1CQUFJO0FBQ2ZRLFNBQU8sU0FEUTtBQUVmQyxrQkFBZ0IsTUFGRDtBQUdmQyxVQUFRLG1CQUhPO0FBSWZKLFdBQVM7QUFKTSxDQUFKLENBQWI7O0FBT0EsSUFBTVgsY0FBYyxtQkFBSTtBQUN0QmdCLFdBQVMsTUFEYTtBQUV0QkMsY0FBWSxRQUZVO0FBR3RCQyxrQkFBZ0IsUUFITTtBQUl0QkMsU0FBTyxPQUplO0FBS3RCQyxVQUFRO0FBTGMsQ0FBSixDQUFwQjs7QUFRQSxJQUFNbkIsZUFBZSxtQkFBSTtBQUN2QlUsV0FBUyxLQURjO0FBRXZCVSxZQUFVLEtBRmE7QUFHdkJDLGFBQVcsUUFIWTtBQUl2QkMsVUFBUSxHQUplO0FBS3ZCQyxjQUFZLGFBTFc7QUFNdkJYLFNBQU87QUFOZ0IsQ0FBSixDQUFyQiIsImZpbGUiOiJfZXJyb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcywganNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNcbiAgICAgID8gcmVzLnN0YXR1c0NvZGVcbiAgICAgIDogKGpzb25QYWdlUmVzID8ganNvblBhZ2VSZXMuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbiAgfVxuXG4gIHJlbmRlckVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXR1c0NvZGVcbiAgICAgID8gYCBBbiBlcnJvciBvY2N1cnJlZCBvbiBzZXJ2ZXIuYFxuICAgICAgOiAnIEFuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudC4nXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWRib3h9PlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NlbnRlcmVkdmVydH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17ZXJyb3J0ZXh0fT5cbiAgICAgICAgICAgIFRoZSBwYWdlIHlvdXIgbG9va2luZyBmb3IgY2FuJ3QgYmUgZm91bmQuXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJFcnJvcigpfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17ZXJyb3JudW1iZXJ9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzQ29kZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmt9PkdvIEJhY2sgSG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGVycm9ydGV4dCA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTQwJScsXG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgZm9udFNpemU6ICc5MCUnLFxuICB9XG59KVxuXG5jb25zdCBlcnJvcm51bWJlciA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMjAwMCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnNjAwJScsXG4gICAgcGFkZGluZzogJzIwcHggMTBweCcsXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gIH1cbn0pXG5cbmNvbnN0IGxpbmsgPSBjc3Moe1xuICBjb2xvcjogJyMyNDI0MjQnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBib3JkZXI6ICczcHggc29saWQgIzI0MjQyNCcsXG4gIHBhZGRpbmc6ICcxMHB4Jyxcbn0pXG5cbmNvbnN0IGNlbnRlcmVkYm94ID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnXG59KVxuXG5jb25zdCBjZW50ZXJlZHZlcnQgPSBjc3Moe1xuICBwYWRkaW5nOiAnMmVtJyxcbiAgbWF4V2lkdGg6ICc1MCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgY29sb3I6ICcjMjQyNDI0Jyxcbn0pXG4iXX0=