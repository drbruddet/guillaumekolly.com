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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiaXRlbXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ0eXBlIiwic3RyaW5nIiwic3R5bGUiLCJvYmplY3QiLCJyZW5kZXJUaW1lbGluZUl0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJ0aW1lbGluZUJsb2NrUmlnaHQiLCJ0aW1lbGluZUJsb2NrTGVmdCIsIlRpbWVsaW5lIiwicHJvcHMiLCJjb250YWluZXIiLCJjb250YWluZXJCZWZvcmUiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJtYXJnaW5MZWZ0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZsb2F0IiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFNBQU8saUJBQVVDLEtBQVYsQ0FBZ0JDLFVBRFA7QUFFaEJDLFFBQU0saUJBQVVDLE1BRkE7QUFHaEJDLFNBQU8saUJBQVVDO0FBSEQsQ0FBbEI7O0FBTUEsSUFBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ1AsS0FBRCxFQUFRRyxJQUFSLEVBQWNFLEtBQWQsRUFBd0I7QUFDbEQsU0FBT0wsTUFBTVEsR0FBTixDQUFXLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzdCLFlBQVFQLElBQVI7QUFDRSxXQUFLLE9BQUw7QUFDRSxlQUFTLHdEQUFjLEtBQUtPLENBQW5CO0FBQ2MsZ0JBQU1ELElBRHBCO0FBRWMsZ0JBQU1FLGtCQUZwQjtBQUdjLGlCQUFPTixLQUhyQixHQUFUO0FBSUE7QUFDRixXQUFLLE1BQUw7QUFDRSxlQUFTLHdEQUFjLEtBQUtLLENBQW5CO0FBQ2MsZ0JBQU1ELElBRHBCO0FBRWMsZ0JBQU1HLGlCQUZwQjtBQUdjLGlCQUFPUCxLQUhyQixHQUFUO0FBSUE7QUFDRjtBQUNFLGVBQVFLLElBQUksQ0FBSixLQUFVLENBQVgsR0FDRCx3REFBYyxLQUFLQSxDQUFuQjtBQUNjLGdCQUFNRCxJQURwQjtBQUVjLGdCQUFNRSxrQkFGcEI7QUFHYyxpQkFBT04sS0FIckIsR0FEQyxHQUtELHdEQUFjLEtBQUtLLENBQW5CO0FBQ2MsZ0JBQU1ELElBRHBCO0FBRWMsZ0JBQU1HLGlCQUZwQjtBQUdjLGlCQUFPUCxLQUhyQixHQUxOO0FBU0E7QUF2Qko7QUF5QkQsR0ExQk0sQ0FBUDtBQTJCRCxDQTVCRDs7QUE4QkEsSUFBTVEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVcsbUJBQUlDLFNBQUosRUFBZUQsTUFBTVQsS0FBTixDQUFZVSxTQUEzQixDQUFoQjtBQUNFLDZDQUFLLFdBQVcsbUJBQUlDLGVBQUosRUFBcUJGLE1BQU1ULEtBQU4sQ0FBWVcsZUFBakMsQ0FBaEIsR0FERjtBQUVHVCwwQkFBb0JPLE1BQU1kLEtBQTFCLEVBQWlDYyxNQUFNWCxJQUF2QyxFQUE2Q1csTUFBTVQsS0FBbkQ7QUFGSDtBQURGLEdBRGU7QUFBQSxDQUFqQjs7QUFRQSxJQUFNVSxZQUFZLG1CQUFJO0FBQ3BCRSxTQUFPLEtBRGE7QUFFcEJDLFdBQVMsUUFGVztBQUdwQkMsVUFBUSxXQUhZO0FBSXBCQyxZQUFVLFVBSlU7QUFLcEJDLFlBQVU7QUFMVSxDQUFKLENBQWxCOztBQVFBLElBQU1MLGtCQUFrQixtQkFBSTtBQUMxQk0sV0FBUyxFQURpQjtBQUUxQkYsWUFBVSxVQUZnQjtBQUcxQkcsT0FBSyxHQUhxQjtBQUkxQkMsUUFBTSxLQUpvQjtBQUsxQkMsY0FBWSxNQUxjO0FBTTFCUixTQUFPLEtBTm1CO0FBTzFCUyxVQUFRLE1BUGtCO0FBUTFCQyxjQUFZLE1BUmM7QUFTMUJDLFVBQVEsR0FUa0I7QUFVMUIsMENBQXdDLEVBQUVKLE1BQU0sS0FBUixFQUFlUCxPQUFPLEtBQXRCO0FBVmQsQ0FBSixDQUF4Qjs7QUFhQSxJQUFNTCxvQkFBb0IsbUJBQUk7QUFDNUJpQixTQUFPLE1BRHFCO0FBRTVCQyxhQUFXLEtBRmlCO0FBRzVCLDBDQUF3QyxFQUFFRCxPQUFPLE1BQVQsRUFBaUJDLFdBQVcsS0FBNUI7QUFIWixDQUFKLENBQTFCOztBQU1BLElBQU1uQixxQkFBcUIsbUJBQUk7QUFDN0JrQixTQUFPLE9BRHNCO0FBRTdCLDBDQUF3QyxFQUFFQSxPQUFPLE1BQVQ7QUFGWCxDQUFKLENBQTNCOztBQUtBaEIsU0FBU2QsU0FBVCxHQUFxQkEsU0FBckI7a0JBQ2VjLFEiLCJmaWxlIjoiVGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IFRpbWVsaW5lSXRlbSBmcm9tICcuL1RpbWVsaW5lSXRlbSdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuY29uc3QgcmVuZGVyVGltZWxpbmVJdGVtcyA9IChpdGVtcywgdHlwZSwgc3R5bGUpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCggKGl0ZW0sIGkpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICByZXR1cm4gKCA8VGltZWxpbmVJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU9e3RpbWVsaW5lQmxvY2tSaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9IC8+IClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHJldHVybiAoIDxUaW1lbGluZUl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZT17dGltZWxpbmVCbG9ja0xlZnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfSAvPiApXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKGkgJSAyID09PSAwKVxuICAgICAgICAgID8gKCA8VGltZWxpbmVJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU9e3RpbWVsaW5lQmxvY2tSaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9IC8+IClcbiAgICAgICAgICA6ICggPFRpbWVsaW5lSXRlbSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlPXt0aW1lbGluZUJsb2NrTGVmdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9IC8+IClcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IFRpbWVsaW5lID0gKHByb3BzKSA9PlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY29udGFpbmVyLCBwcm9wcy5zdHlsZS5jb250YWluZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY29udGFpbmVyQmVmb3JlLCBwcm9wcy5zdHlsZS5jb250YWluZXJCZWZvcmUpfSAvPlxuICAgICAge3JlbmRlclRpbWVsaW5lSXRlbXMocHJvcHMuaXRlbXMsIHByb3BzLnR5cGUsIHByb3BzLnN0eWxlKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7XG4gIHdpZHRoOiAnODAlJyxcbiAgcGFkZGluZzogJzUwcHggMCcsXG4gIG1hcmdpbjogJzUwcHggYXV0bycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG59KVxuXG5jb25zdCBjb250YWluZXJCZWZvcmUgPSBjc3Moe1xuICBjb250ZW50OiAnJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogJzAnLFxuICBsZWZ0OiAnNTAlJyxcbiAgbWFyZ2luTGVmdDogJy0xcHgnLFxuICB3aWR0aDogJzJweCcsXG4gIGhlaWdodDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gIHpJbmRleDogJzEnLFxuICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJzogeyBsZWZ0OiAnOHB4Jywgd2lkdGg6ICcycHgnIH1cbn0pXG5cbmNvbnN0IHRpbWVsaW5lQmxvY2tMZWZ0ID0gY3NzKHtcbiAgZmxvYXQ6ICdsZWZ0JyxcbiAgZGlyZWN0aW9uOiAncnRsJyxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHsgZmxvYXQ6ICdub25lJywgZGlyZWN0aW9uOiAnbHRyJyB9XG59KVxuXG5jb25zdCB0aW1lbGluZUJsb2NrUmlnaHQgPSBjc3Moe1xuICBmbG9hdDogJ3JpZ2h0JyxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHsgZmxvYXQ6ICdub25lJyB9XG59KVxuXG5UaW1lbGluZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lXG4iXX0=