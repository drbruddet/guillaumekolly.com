'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Theme = require('../layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  sendTo: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};

var sendToAddress = function sendToAddress(email) {
  return "https://formspree.io/" + email;
};

var ContactForm = function ContactForm(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _css2.default)(formblock, props.style) },
    _react2.default.createElement(
      'h1',
      { className: (0, _css2.default)(title, props.style.title) },
      'CONTACT ME'
    ),
    _react2.default.createElement(
      'form',
      { action: sendToAddress(props.sendTo), method: 'POST' },
      _react2.default.createElement(_Input2.default, { type: 'text', name: 'name', style: name }),
      _react2.default.createElement(_Input2.default, { type: 'email', name: 'email', style: email }),
      _react2.default.createElement(_Input2.default, { type: 'text', name: 'subject', style: subject }),
      _react2.default.createElement(_TextArea2.default, { name: 'message', style: message }),
      _react2.default.createElement('input', { type: 'hidden', name: '_next', value: 'http://localhost:3000' }),
      _react2.default.createElement(_Button2.default, { type: 'submit', value: 'Send', style: _Theme._button })
    )
  );
};

var formblock = (0, _css2.default)({
  padding: '2em',
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
  '@media(max-width: 1240px)': {
    padding: '2em',
    width: '80%'
  },
  '@media(max-width: 600px)': {
    padding: '1em',
    width: '90%',
    height: '100%'
  }
});

var title = (0, _css2.default)({
  fontSize: '400%',
  color: _Theme.theme.colors.white,
  '@media(max-width: 1240px)': { fontSize: '200%' },
  '@media(max-width: 600px)': { fontSize: '200%' }
});

var name = (0, _css2.default)({ float: 'right', width: '45%' });
var email = (0, _css2.default)({ float: 'right', width: '45%', marginRight: '10%' });
var subject = (0, _css2.default)({ width: '100%' });
var message = (0, _css2.default)({ float: 'none' });

ContactForm.propTypes = propTypes;
exports.default = ContactForm;