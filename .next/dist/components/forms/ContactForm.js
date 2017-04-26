'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Theme = require('../layout/Theme');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  sendTo: _propTypes2.default.string.isRequired
};

var ContactForm = function ContactForm(props) {
  var _React$createElement;

  return _react2.default.createElement('div', { className: 'formblock', 'data-jsx': 823214057
  }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 823214057
  }, 'CONTACT ME'), _react2.default.createElement('form', { action: props.sendTo, method: 'POST', 'data-jsx': 823214057
  }, _react2.default.createElement(_Input2.default, (_React$createElement = { name: true, type: 'text' }, (0, _defineProperty3.default)(_React$createElement, 'name', 'name'), (0, _defineProperty3.default)(_React$createElement, 'style', 'name'), _React$createElement)), _react2.default.createElement(_Input2.default, { email: true, type: 'email', name: 'email', style: 'email' }), _react2.default.createElement(_Input2.default, { subject: true, type: 'text', name: 'subject', style: 'subject' }), _react2.default.createElement(_TextArea2.default, { message: true, name: 'message' }), _react2.default.createElement('input', { type: 'hidden', name: '_next', value: '/', 'data-jsx': 823214057
  }), _react2.default.createElement(_Button2.default, { type: 'submit', value: 'Send' })), _react2.default.createElement(_style2.default, {
    styleId: 823214057,
    css: '.formblock[data-jsx="823214057"] {padding: 2em;width: 80%;margin: 0 auto;text-align: center;}.title[data-jsx="823214057"] {font-size: 400%;color: ' + _Theme.theme.colors.white + '      }@media(max-width: 1240px) {.formblock[data-jsx="823214057"] {padding: 2em;width: 80%;}.title[data-jsx="823214057"] {font-size: 200%;}}@media(max-width: 640px) {.formblock[data-jsx="823214057"] {padding: 1em;width: 90%;height: 100%;}}'
  }));
};

exports.default = ContactForm;