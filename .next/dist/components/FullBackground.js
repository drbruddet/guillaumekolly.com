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