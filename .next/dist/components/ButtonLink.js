'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  url: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  blank: _react.PropTypes.bool,
  alt: _react.PropTypes.string,
  style: _react.PropTypes.object
};

var ButtonLink = function ButtonLink(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _css2.default)(button, props.style) },
    _react2.default.createElement(
      _link2.default,
      { href: props.url },
      _react2.default.createElement(
        'a',
        { target: "_blank" ? props.blank : "", alt: props.alt },
        props.title
      )
    )
  );
};

var button = (0, _css2.default)({
  margin: '5px 5px 5px 5px',
  padding: '15px 5px',
  border: "4px solid #000",
  background: 'transparent',
  letterSpacing: '0.12em',
  fontSize: '1.3em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  WebkitTransition: 'all 600ms',
  MozTransition: 'all 600ms',
  OTransition: 'all 600ms',
  MsTransition: 'all 600ms',
  transition: 'all 600ms',
  ':hover': {
    backgroundColor: '#000',
    color: '#fff',
    '> a': { color: '#fff' }
  },
  '> a': { color: '#000', textDecoration: 'none', padding: '10px' }
});

ButtonLink.propTypes = propTypes;
exports.default = ButtonLink;