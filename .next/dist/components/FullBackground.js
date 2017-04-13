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

var _reactParticlesJs = require('react-particles-js');

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

var _particles = require('../data/particles');

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
        { className: (0, _css2.default)(fullScreen, style) },
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


var fullScreen = (0, _css2.default)({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiRnVsbEJhY2tncm91bmQiLCJzdHlsZSIsInByb3BzIiwiZnVsbFNjcmVlbiIsInBhcnRpY2xlcyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs2QkFVVjtBQUFBLFVBQ0NDLEtBREQsR0FDVyxLQUFLQyxLQURoQixDQUNDRCxLQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsbUJBQUlFLFVBQUosRUFBZ0JGLEtBQWhCLENBQWhCO0FBQ0Usb0VBQVcsUUFBTyxPQUFsQixFQUEwQixPQUFNLE9BQWhDLEVBQXdDLDJCQUF4QztBQURGLE9BREY7QUFLRDs7O3NDQVp5QjtBQUN4QixhQUFPLEVBQUVHLDhCQUFGLEVBQVA7QUFDRDs7O0VBUnlDLGdCQUFNQyxTOztBQUE3QkwsYyxDQUVaTSxTLEdBQVk7QUFDakJMLFNBQU8saUJBQVVNO0FBREEsQztrQkFGQVAsYzs7O0FBcUJyQixJQUFNRyxhQUFhLG1CQUFJO0FBQ3JCSyxZQUFVLE9BRFc7QUFFckJDLFNBQU8sT0FGYztBQUdyQkMsVUFBUSxPQUhhO0FBSXJCQyxPQUFLLEdBSmdCO0FBS3JCQyxRQUFNLEdBTGU7QUFNckJDLFNBQU8sR0FOYztBQU9yQkMsVUFBUTtBQVBhLENBQUosQ0FBbkIiLCJmaWxlIjoiRnVsbEJhY2tncm91bmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJ1xuXG5pbXBvcnQgcGFydGljbGVzIGZyb20gJy4uL2RhdGEvcGFydGljbGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsQmFja2dyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgcGFydGljbGVzOiBwYXJ0aWNsZXMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGZ1bGxTY3JlZW4sIHN0eWxlKX0+XG4gICAgICAgIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgZnVsbFNjcmVlbiA9IGNzcyh7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICB0b3A6ICcwJyxcbiAgbGVmdDogJzAnLFxuICByaWdodDogJzAnLFxuICBib3R0b206ICcwJ1xufSlcbiJdfQ==