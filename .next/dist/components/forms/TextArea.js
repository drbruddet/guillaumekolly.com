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
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string,
  cols: _propTypes2.default.number,
  rows: _propTypes2.default.number
};

var defaultProps = {
  cols: 30,
  rows: 5
};

var TextArea = function TextArea(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 3289696822
  }, _react2.default.createElement('label', { htmlFor: props.name, 'data-jsx': 3289696822
  }), _react2.default.createElement('textarea', {
    className: 'textarea',
    type: 'text',
    name: props.name,
    placeholder: props.placeholder ? props.placeholder : props.name,
    cols: props.cols,
    rows: props.rows,
    required: true,
    'data-jsx': 3289696822
  }), _react2.default.createElement('span', { className: 'animation', 'data-jsx': 3289696822
  }), _react2.default.createElement(_style2.default, {
    styleId: 3289696822,
    css: '.textarea[data-jsx="3289696822"] {font: inherit;margin: 0;background: none;border: none;border-bottom: solid 2px ' + _Theme.theme.colors.white + ';;font-size: 1em;box-shadow: none;-moz-box-shadow: none;-webkit-box-shadow: none;margin: 0 0 1.875em 0;padding: 0 0 0.875em 0;width: 100%;height: 150px;resize: none;line-height: \'150%\',          overflow: auto;}[data-jsx="3289696822"]::-webkit-input-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3289696822"]::-moz-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3289696822"]:-ms-input-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3289696822"]:-moz-placeholder {color: ' + _Theme.theme.colors.black + ';}.textarea[data-jsx="3289696822"]:focus {outline: none;padding: 0 0 0.875em 0;}.textarea[data-jsx="3289696822"]:focus ~ span[data-jsx="3289696822"] {margin-left: -50px;}.message[data-jsx="3289696822"] {float: none;}.animation[data-jsx="3289696822"] {-webkit-transition: all 0.5s linear;-moz-transition: all 0.5s linear;-ms-transition: all 0.5s linear;-o-transition: all 0.5s linear;-webkit-transition: all 0.5s linear;-moz-transition: all 0.5s linear;-ms-transition: all 0.5s linear;transition: all 0.5s linear;content: \'\';}'
  }));
};

exports.default = TextArea;