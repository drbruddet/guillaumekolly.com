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
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string
};

var Input = function Input(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 3444613253
  }, _react2.default.createElement('label', { htmlFor: props.name, 'data-jsx': 3444613253
  }), _react2.default.createElement('input', {
    type: props.type,
    name: props.name,
    className: 'input',
    placeholder: props.placeholder ? props.placeholder : props.name,
    required: true,
    'data-jsx': 3444613253
  }), _react2.default.createElement('span', { className: 'animation', 'data-jsx': 3444613253
  }), _react2.default.createElement(_style2.default, {
    styleId: 3444613253,
    css: '.input[data-jsx="3444613253"] {font: inherit;margin: 0;line-height: normal;background: none;border: none;border-bottom: solid 2px ' + _Theme.theme.colors.white + ';font-size: 1em;box-shadow: none;-moz-box-shadow: none;-webkit-box-shadow: none;margin: 0 0 1.875em 0;padding: 0 0 0.875em 0;width: 100%;}[data-jsx="3444613253"]::-webkit-input-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3444613253"]::-moz-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3444613253"]:-ms-input-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3444613253"]:-moz-placeholder {color: ' + _Theme.theme.colors.black + ';}.input[data-jsx="3444613253"]:focus {outline: none;padding: 0 0 0.875em 0;}.input[data-jsx="3444613253"]:focus ~ span[data-jsx="3444613253"] {margin-left: -50px;}.name[data-jsx="3444613253"] {float: right;width: 45%;}.email[data-jsx="3444613253"] {float: right;width: 45%;margin-right: 10%;}.subject[data-jsx="3444613253"] {width: 100%;}.animation[data-jsx="3444613253"] {-webkit-transition: all 0.5s linear;-moz-transition: all 0.5s linear;-ms-transition: all 0.5s linear;-o-transition: all 0.5s linear;-webkit-transition: all 0.5s linear;-moz-transition: all 0.5s linear;-ms-transition: all 0.5s linear;transition: all 0.5s linear;content: \'\';}'
  }));
};

exports.default = Input;