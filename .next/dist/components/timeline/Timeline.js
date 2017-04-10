'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _TimelineItem = require('./TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

var _Theme = require('../layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  items: _react.PropTypes.array.isRequired,
  type: _react.PropTypes.string,
  style: _react.PropTypes.object
};

var renderTimelineItems = function renderTimelineItems(items, type, style) {
  return items.map(function (item, i) {
    switch (type) {
      case "right":
        return _react2.default.createElement(_TimelineItem2.default, { key: i,
          item: item,
          side: timelineBlockRight,
          style: style });
        break;
      case "left":
        return _react2.default.createElement(_TimelineItem2.default, { key: i,
          item: item,
          side: timelineBlockLeft,
          style: style });
        break;
      default:
        return i % 2 === 0 ? _react2.default.createElement(_TimelineItem2.default, { key: i,
          item: item,
          side: timelineBlockRight,
          style: style }) : _react2.default.createElement(_TimelineItem2.default, { key: i,
          item: item,
          side: timelineBlockLeft,
          style: style });
        break;
    }
  });
};

var Timeline = function Timeline(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: (0, _css2.default)(container, props.style.container) },
      _react2.default.createElement('div', { className: (0, _css2.default)(containerBefore, props.style.containerBefore) }),
      renderTimelineItems(props.items, props.type, props.style)
    )
  );
};

var container = (0, _css2.default)({
  width: '80%',
  padding: '50px 0',
  margin: '50px auto',
  position: 'relative',
  overflow: 'hidden'
});

var containerBefore = (0, _css2.default)({
  content: '',
  position: 'absolute',
  top: '0',
  left: '50%',
  marginLeft: '-1px',
  width: '2px',
  height: '100%',
  background: '#000',
  zIndex: '1',
  '@media screen and (max-width: 768px)': { left: '8px', width: '2px' }
});

var timelineBlockLeft = (0, _css2.default)({
  float: 'left',
  direction: 'rtl',
  '@media screen and (max-width: 768px)': { float: 'none', direction: 'ltr' }
});

var timelineBlockRight = (0, _css2.default)({
  float: 'right',
  '@media screen and (max-width: 768px)': { float: 'none' }
});

Timeline.propTypes = propTypes;
exports.default = Timeline;