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

var _reactParallax = require('react-parallax');

var _Theme = require('../components/layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  title: _propTypes2.default.string.isRequired,
  background: _propTypes2.default.object.isRequired,
  strength: _propTypes2.default.number
};

var defaultProps = {
  strength: 600
};

var ParallaxBlock = function ParallaxBlock(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 1973745885
  }, _react2.default.createElement(_reactParallax.Parallax, { strength: props.strength }, _react2.default.createElement(_reactParallax.Background, null, ' ', props.background, ' '), _react2.default.createElement('div', { className: 'parallax', 'data-jsx': 1973745885
  }, _react2.default.createElement('h2', { className: 'title', 'data-jsx': 1973745885
  }, ' ', props.title, ' '))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 1973745885
  }, ' ', props.children, ' '), _react2.default.createElement(_style2.default, {
    styleId: 1973745885,
    css: '.parallax[data-jsx="1973745885"] {height: 200px;border-top: 1px solid #ddd;}.title[data-jsx="1973745885"] {text-align: center;font-family: ' + _Theme.theme.font.title + ';text-transform: uppercase;font-size: 2.3em;line-height: 2.5em;color: ' + _Theme.theme.colors.black + ';padding-top: 30px;}@media(max-width: 640px) {.parallax[data-jsx="1973745885"] {height: 100px;}.title[data-jsx="1973745885"] {font-size: 1.3em;line-height: 1.5em;}}.content[data-jsx="1973745885"] {margin: 5% auto;}'
  }));
};

ParallaxBlock.defaultProps = defaultProps;
exports.default = ParallaxBlock;