'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _TimelineItem = require('../components/TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  items: _react.PropTypes.array.isRequired
};

var renderTimelineItems = function renderTimelineItems(items) {
  return items.map(function (item, i) {
    return i % 2 === 0 ? _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, style: timelineBlockRight }) : _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, style: timelineBlockLeft });
  });
};

var Timeline = function Timeline(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: container },
      _react2.default.createElement('div', { className: containerBefore }),
      renderTimelineItems(props.items)
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
  background: '#CCD1D9',
  zIndex: '1',
  '@media screen and (max-width: 768px)': {
    left: '8px',
    width: '2px'
  }
});

var timelineBlockLeft = (0, _css2.default)({
  float: 'left',
  direction: 'rtl',
  '@media screen and (max-width: 768px)': {
    float: 'none',
    direction: 'ltr'
  }
});

var timelineBlockRight = (0, _css2.default)({
  float: 'right',
  '@media screen and (max-width: 768px)': {
    float: 'none'
  }
});

Timeline.propTypes = propTypes;
exports.default = Timeline;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiaXRlbXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJyZW5kZXJUaW1lbGluZUl0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJ0aW1lbGluZUJsb2NrUmlnaHQiLCJ0aW1lbGluZUJsb2NrTGVmdCIsIlRpbWVsaW5lIiwicHJvcHMiLCJjb250YWluZXIiLCJjb250YWluZXJCZWZvcmUiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJtYXJnaW5MZWZ0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZsb2F0IiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFNBQU8saUJBQVVDLEtBQVYsQ0FBZ0JDO0FBRFAsQ0FBbEI7O0FBSUEsSUFBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ0gsS0FBRCxFQUFXO0FBQ3JDLFNBQU9BLE1BQU1JLEdBQU4sQ0FBVyxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUM3QixXQUFRQSxJQUFJLENBQUosS0FBVSxDQUFYLEdBQ0gsd0RBQWMsS0FBS0EsQ0FBbkIsRUFBc0IsTUFBTUQsSUFBNUIsRUFBa0MsT0FBT0Usa0JBQXpDLEdBREcsR0FFSCx3REFBYyxLQUFLRCxDQUFuQixFQUFzQixNQUFNRCxJQUE1QixFQUFrQyxPQUFPRyxpQkFBekMsR0FGSjtBQUdELEdBSk0sQ0FBUDtBQUtELENBTkQ7O0FBUUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdDLFNBQWhCO0FBQ0UsNkNBQUssV0FBV0MsZUFBaEIsR0FERjtBQUVHVCwwQkFBb0JPLE1BQU1WLEtBQTFCO0FBRkg7QUFERixHQURlO0FBQUEsQ0FBakI7O0FBUUEsSUFBTVcsWUFBWSxtQkFBSTtBQUNwQkUsU0FBTyxLQURhO0FBRXBCQyxXQUFTLFFBRlc7QUFHcEJDLFVBQVEsV0FIWTtBQUlwQkMsWUFBVSxVQUpVO0FBS3BCQyxZQUFVO0FBTFUsQ0FBSixDQUFsQjs7QUFRQSxJQUFNTCxrQkFBa0IsbUJBQUk7QUFDMUJNLFdBQVMsRUFEaUI7QUFFMUJGLFlBQVUsVUFGZ0I7QUFHMUJHLE9BQUssR0FIcUI7QUFJMUJDLFFBQU0sS0FKb0I7QUFLMUJDLGNBQVksTUFMYztBQU0xQlIsU0FBTyxLQU5tQjtBQU8xQlMsVUFBUSxNQVBrQjtBQVExQkMsY0FBWSxTQVJjO0FBUzFCQyxVQUFRLEdBVGtCO0FBVTFCLDBDQUF3QztBQUN0Q0osVUFBTSxLQURnQztBQUV0Q1AsV0FBTztBQUYrQjtBQVZkLENBQUosQ0FBeEI7O0FBZ0JBLElBQU1MLG9CQUFvQixtQkFBSTtBQUM1QmlCLFNBQU8sTUFEcUI7QUFFNUJDLGFBQVcsS0FGaUI7QUFHNUIsMENBQXdDO0FBQ3RDRCxXQUFPLE1BRCtCO0FBRXRDQyxlQUFXO0FBRjJCO0FBSFosQ0FBSixDQUExQjs7QUFTQSxJQUFNbkIscUJBQXFCLG1CQUFJO0FBQzdCa0IsU0FBTyxPQURzQjtBQUU3QiwwQ0FBd0M7QUFDdENBLFdBQU87QUFEK0I7QUFGWCxDQUFKLENBQTNCOztBQU9BaEIsU0FBU1YsU0FBVCxHQUFxQkEsU0FBckI7a0JBQ2VVLFEiLCJmaWxlIjoiVGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IFRpbWVsaW5lSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVsaW5lSXRlbSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59XG5cbmNvbnN0IHJlbmRlclRpbWVsaW5lSXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCggKGl0ZW0sIGkpID0+IHtcbiAgICByZXR1cm4gKGkgJSAyID09PSAwKVxuICAgICAgPyA8VGltZWxpbmVJdGVtIGtleT17aX0gaXRlbT17aXRlbX0gc3R5bGU9e3RpbWVsaW5lQmxvY2tSaWdodH0gLz5cbiAgICAgIDogPFRpbWVsaW5lSXRlbSBrZXk9e2l9IGl0ZW09e2l0ZW19IHN0eWxlPXt0aW1lbGluZUJsb2NrTGVmdH0gLz5cbiAgfSlcbn1cblxuY29uc3QgVGltZWxpbmUgPSAocHJvcHMpID0+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQmVmb3JlfSAvPlxuICAgICAge3JlbmRlclRpbWVsaW5lSXRlbXMocHJvcHMuaXRlbXMpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgd2lkdGg6ICc4MCUnLFxuICBwYWRkaW5nOiAnNTBweCAwJyxcbiAgbWFyZ2luOiAnNTBweCBhdXRvJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pXG5cbmNvbnN0IGNvbnRhaW5lckJlZm9yZSA9IGNzcyh7XG4gIGNvbnRlbnQ6ICcnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICc1MCUnLFxuICBtYXJnaW5MZWZ0OiAnLTFweCcsXG4gIHdpZHRoOiAnMnB4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGJhY2tncm91bmQ6ICcjQ0NEMUQ5JyxcbiAgekluZGV4OiAnMScsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgbGVmdDogJzhweCcsXG4gICAgd2lkdGg6ICcycHgnLFxuICB9XG59KVxuXG5jb25zdCB0aW1lbGluZUJsb2NrTGVmdCA9IGNzcyh7XG4gIGZsb2F0OiAnbGVmdCcsXG4gIGRpcmVjdGlvbjogJ3J0bCcsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgZmxvYXQ6ICdub25lJyxcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICB9XG59KVxuXG5jb25zdCB0aW1lbGluZUJsb2NrUmlnaHQgPSBjc3Moe1xuICBmbG9hdDogJ3JpZ2h0JyxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICBmbG9hdDogJ25vbmUnXG4gIH1cbn0pXG5cblRpbWVsaW5lLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVcbiJdfQ==