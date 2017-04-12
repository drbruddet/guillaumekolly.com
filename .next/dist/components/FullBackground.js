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
        { className: style,
          style: {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiRnVsbEJhY2tncm91bmQiLCJzdHlsZSIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInBhcnRpY2xlcyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs2QkFVVjtBQUFBLFVBQ0NDLEtBREQsR0FDVyxLQUFLQyxLQURoQixDQUNDRCxLQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdBLEtBQWhCO0FBQ0ssaUJBQU87QUFDTkUsc0JBQVUsT0FESjtBQUVOQyxtQkFBTyxPQUZEO0FBR05DLG9CQUFRLE9BSEY7QUFJTkMsaUJBQUssR0FKQztBQUtOQyxrQkFBTSxHQUxBO0FBTU5DLG1CQUFPLEdBTkQ7QUFPTkMsb0JBQVE7QUFQRixXQURaO0FBVUUsb0VBQVcsUUFBTyxPQUFsQixFQUEwQixPQUFNLE9BQWhDLEVBQXdDLDJCQUF4QztBQVZGLE9BREY7QUFjRDs7O3NDQXJCeUI7QUFDeEIsYUFBTyxFQUFFQyw4QkFBRixFQUFQO0FBQ0Q7OztFQVJ5QyxnQkFBTUMsUzs7QUFBN0JYLGMsQ0FFWlksUyxHQUFZO0FBQ2pCWCxTQUFPLGlCQUFVWTtBQURBLEM7a0JBRkFiLGMiLCJmaWxlIjoiRnVsbEJhY2tncm91bmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxCYWNrZ3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4geyBwYXJ0aWNsZXM6IHBhcnRpY2xlcyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX1cbiAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICAgICAgICBib3R0b206ICcwJ1xuICAgICAgfX0gPlxuICAgICAgICA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17cGFydGljbGVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=