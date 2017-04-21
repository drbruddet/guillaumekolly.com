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

var _TimelineItem = require('./TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

var _Theme = require('../layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  items: _propTypes2.default.array.isRequired,
  type: _propTypes2.default.string
};

var defaultProps = {
  type: ""
};

var renderTimelineItems = function renderTimelineItems(items, type) {
  return items.map(function (item, i) {
    switch (type) {
      case "right":
        return _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: 'right' });
        break;
      case "left":
        return _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: 'left' });
        break;
      default:
        return i % 2 === 0 ? _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: 'right' }) : _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: 'left' });
        break;
    }
  });
};

var Timeline = function Timeline(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 2716784595
  }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2716784595
  }, _react2.default.createElement('div', { className: 'containerbefore', 'data-jsx': 2716784595
  }), renderTimelineItems(props.items, props.type)), _react2.default.createElement(_style2.default, {
    styleId: 2716784595,
    css: '.container[data-jsx="2716784595"] {width: 80%;padding: 50px 0;margin: 50px auto;position: relative;overflow: hidden;}.containerbefore[data-jsx="2716784595"] {content: \'\';position: absolute;background: ' + _Theme.theme.colors.time_line + ';top: 0;left: 50%;margin-left: -1px;width: 2px;height: 100%;z-index: 1;}@media screen and (max-width: 768px) {.containerbefore[data-jsx="2716784595"] {left: 8px;}}'
  }));
};

Timeline.defaultProps = defaultProps;
exports.default = Timeline;