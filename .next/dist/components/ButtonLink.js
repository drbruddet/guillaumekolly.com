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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Theme = require('../components/layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  url: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  blank: _propTypes2.default.bool,
  alt: _propTypes2.default.string
};

var defaultProps = {
  alt: "",
  black: false
};

var ButtonLink = function ButtonLink(props) {
  return _react2.default.createElement('div', { className: props.table ? 'buttonlink fixed' : 'buttonlink', 'data-jsx': 1364179150
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: props.url }, _react2.default.createElement('a', { target: "_blank" ? props.blank : "", alt: props.alt, 'data-jsx': 1364179150
  }, props.title)), _react2.default.createElement(_style2.default, {
    styleId: 1364179150,
    css: '.buttonlink[data-jsx="1364179150"] {font-size: 1.1em;letter-spacing: -0.04em;font-weight: bold;text-transform: uppercase;text-align: center;background-color: ' + _Theme.theme.colors.white + ';margin: 10px auto;width: 100%;cursor: pointer;-webkit-transition: all 600ms;-moz-transition: all 600ms;-o-transition: all 600ms;-ms-transition: all 600ms;-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}.buttonlink[data-jsx="1364179150"]:hover {color: white;background-color: ' + _Theme.theme.colors.primary + ';}.buttonlink[data-jsx="1364179150"] > a[data-jsx="1364179150"] {color: ' + _Theme.theme.colors.black + ';border: 4px solid ' + _Theme.theme.colors.primary + ';display: block;padding: 10px;box-sizing: border-box;text-decoration: none;width: 100%;height: 100%;}@media(max-width: 640px) {.buttonlink[data-jsx="1364179150"] {width: 80%;font-size: 1em;padding: 0;line-height: 0.8em;}.fixed[data-jsx="1364179150"] {display: table-cell;vertical-align: middle;width: 45%;}}'
  }));
};

ButtonLink.defaultProps = defaultProps;
exports.default = ButtonLink;