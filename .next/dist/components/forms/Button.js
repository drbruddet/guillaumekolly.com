'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  type: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};

var defaultProps = {
  style: null
};

var Button = function Button(props) {
  return _react2.default.createElement('input', {
    type: props.type,
    value: props.value,
    className: (0, _css2.default)(button, props.style)
  });
};

var button = (0, _css2.default)({
  color: '#000',
  float: 'left',
  padding: '15px 5px',
  border: '4px solid #fff',
  background: 'transparent',
  letterSpacing: '0.12em',
  width: '100%',
  fontSize: '1.3em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  WebkitTransition: 'all 600ms',
  MozTransition: 'all 600ms',
  OTransition: 'all 600ms',
  MsTransition: 'all 600ms',
  transition: 'all 600ms',
  ':hover': { backgroundColor: 'rgba(0,0,0,0)', color: '#fff' }
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
exports.default = Button;