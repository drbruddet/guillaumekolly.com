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
  item: _propTypes2.default.object.isRequired,
  side: _propTypes2.default.string
};

var defaultProps = {
  side: ""
};

var giveClass = function giveClass(side) {
  return side == "right" ? 'timelineblock right' : 'timelineblock left';
};

var TimelineItem = function TimelineItem(props) {
  return _react2.default.createElement('div', { className: giveClass(props.side), 'data-jsx': 1756301545
  }, _react2.default.createElement('div', { className: 'marker', 'data-jsx': 1756301545
  }), _react2.default.createElement('div', { className: 'timelinecontent', 'data-jsx': 1756301545
  }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 1756301545
  }, props.item.title), _react2.default.createElement('span', { className: 'subtitle', 'data-jsx': 1756301545
  }, props.item.subtitle), _react2.default.createElement('p', { className: 'description', 'data-jsx': 1756301545
  }, props.item.description)), _react2.default.createElement(_style2.default, {
    styleId: 1756301545,
    css: '.timelineblock[data-jsx="1756301545"] {width: calc(50% + 8px);width: -webkit-calc(50% + 8px);width: -moz-calc(50% + 8px);display: -webkit-box;display:-webkit-inline-flex; display:inline-flex;display: -moz-box;display:-webkit-flex; display:flex;-webkit-box-pack: justify;-webkit-justify-content: space-between;-moz-box-pack: justify;justify-content: space-between;clear: both;}.left[data-jsx="1756301545"] {float: left;direction: rtl;}.right[data-jsx="1756301545"] {float: right;}.marker[data-jsx="1756301545"] {width: 10px;height: 10px;border-radius: 50%;border: 2px solid #F5F7FA;margin-top: 10px;z-index: 888;background: ' + _Theme.theme.colors.primary + ';}.timelinecontent[data-jsx="1756301545"] {width: 95%;padding: 0 15px;}.title[data-jsx="1756301545"] {margin-top: 5px;margin-bottom: 5px;font-size: 25px;font-weight: 500;color: ' + _Theme.theme.colors.time_line_title + ';}.subtitle[data-jsx="1756301545"] {font-size: 15px;color: ' + _Theme.theme.colors.light_text + ';}.description[data-jsx="1756301545"] {font-size: 14px;line-height: 1.5em;word-spacing: 1px;color: ' + _Theme.theme.colors.text + ';}@media screen and (max-width: 768px) {.timelineblock[data-jsx="1756301545"] {margin-bottom: 30px;width: 100%;}.left[data-jsx="1756301545"] {float: none;direction: ltr;}.right[data-jsx="1756301545"] {float: none;}}'
  }));
};

TimelineItem.defaultProps = defaultProps;
exports.default = TimelineItem;