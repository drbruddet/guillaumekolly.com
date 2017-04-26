'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Theme = require('../layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  type: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired
};

var Button = function Button(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 2774337569
  }, _react2.default.createElement('input', { type: props.type, value: props.value, 'data-jsx': 2774337569
  }), _react2.default.createElement(_style2.default, {
    styleId: 2774337569,
    css: 'input[data-jsx="2774337569"] {color: ' + _Theme.theme.colors.white + ';float: left;padding: 15px 5px;border: 4px solid ' + _Theme.theme.colors.white + ';background: transparent;letter-spacing: 0.12em;width: 100%;font-size: 1.3em;font-weight: bold;text-transform: uppercase;cursor: pointer;-webkit-transition: all 600ms;-moz-transition: all 600ms;-o-transition: all 600ms;-ms-transition: all 600ms;-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}input[data-jsx="2774337569"]:hover {background-color: ' + _Theme.theme.colors.white + ';color: ' + _Theme.theme.colors.primary + ';}'
  }));
};

exports.default = Button;