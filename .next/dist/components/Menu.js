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

var _Theme = require('./layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  links: _propTypes2.default.array.isRequired
};

var renderLinks = function renderLinks(links) {
  return links.map(function (link, i) {
    return link.type === "email" ? _react2.default.createElement('a', { key: i, href: link.url, className: 'link' }, link.name) : _react2.default.createElement(_link2.default, { key: i, href: link.url }, _react2.default.createElement('a', { target: '_blank', className: 'link' }, link.name));
  });
};

var Menu = function Menu(props) {
  return _react2.default.createElement('div', { className: props.vertical ? 'vertical menu' : props.horizontal ? 'horizontal menu' : 'menu', 'data-jsx': 3936968010
  }, renderLinks(props.links), _react2.default.createElement(_style2.default, {
    styleId: 1396052925,
    css: '.menu[data-jsx="3936968010"] {text-transform: uppercase;z-index: 1;text-decoration: none;}.vertical[data-jsx="3936968010"] {display: inline-block;margin: 20px 30px;-webkit-transform-origin: left top;-moz-transform-origin: left top;-ms-transform-origin: left top;transform-origin: left top;-webkit-transform: rotate(270deg) translateX(-100%);-moz-transform: rotate(270deg) translateX(-100%);-ms-transform: rotate(270deg) translateX(-100%);transform: rotate(270deg) translateX(-100%);}.horizontal[data-jsx="3936968010"] {display: inline-block;text-align: center;position: relative;}@media(max-width: 1080px) {.horizontal[data-jsx="3936968010"] {font-size: 0.7em;}}@media(max-width: 840px) {.horizontal[data-jsx="3936968010"] {font-size: 1.1em;}}@media(max-width: 640px) {.vertical[data-jsx="3936968010"] {white-space: nowrap;left: 8px;top: 10px;margin: 0;position: absolute;}.horizontal[data-jsx="3936968010"] {font-size: 0.8em;}}'
  }), _react2.default.createElement(_style2.default, {
    styleId: 4082533618,
    css: '\n      .link {\n        margin: 0 10px 0 0;\n        font-size: 140%;\n        text-decoration: none;\n        color: ' + _Theme.theme.colors.black + ';\n        cursor: pointer;\n      }\n\n      .link:hover {\n        text-decoration: line-through;\n      }\n\n      @media(max-width: 640px) {\n        .link {\n          font-size: 100%;\n          display: list-item;\n          list-style-type: none;\n          width: 100%;\n          margin: 5px auto;\n        }\n      }\n    '
  }));
};

exports.default = Menu;