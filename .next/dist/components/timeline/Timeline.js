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
        return _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: timelineBlockRight, style: style });
        break;
      case "left":
        return _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: timelineBlockLeft, style: style });
        break;
      default:
        return i % 2 === 0 ? _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: timelineBlockRight, style: style }) : _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: timelineBlockLeft, style: style });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiaXRlbXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ0eXBlIiwic3RyaW5nIiwic3R5bGUiLCJvYmplY3QiLCJyZW5kZXJUaW1lbGluZUl0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJ0aW1lbGluZUJsb2NrUmlnaHQiLCJ0aW1lbGluZUJsb2NrTGVmdCIsIlRpbWVsaW5lIiwicHJvcHMiLCJjb250YWluZXIiLCJjb250YWluZXJCZWZvcmUiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJtYXJnaW5MZWZ0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZsb2F0IiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFNBQU8saUJBQVVDLEtBQVYsQ0FBZ0JDLFVBRFA7QUFFaEJDLFFBQU0saUJBQVVDLE1BRkE7QUFHaEJDLFNBQU8saUJBQVVDO0FBSEQsQ0FBbEI7O0FBTUEsSUFBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ1AsS0FBRCxFQUFRRyxJQUFSLEVBQWNFLEtBQWQsRUFBd0I7QUFDbEQsU0FBT0wsTUFBTVEsR0FBTixDQUFXLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzdCLFlBQVFQLElBQVI7QUFDRSxXQUFLLE9BQUw7QUFDRSxlQUFPLHdEQUFjLEtBQUtPLENBQW5CLEVBQXNCLE1BQU1ELElBQTVCLEVBQWtDLE1BQU1FLGtCQUF4QyxFQUE0RCxPQUFPTixLQUFuRSxHQUFQO0FBQ0E7QUFDRixXQUFLLE1BQUw7QUFDRSxlQUFPLHdEQUFjLEtBQUtLLENBQW5CLEVBQXNCLE1BQU1ELElBQTVCLEVBQWtDLE1BQU1HLGlCQUF4QyxFQUEyRCxPQUFPUCxLQUFsRSxHQUFQO0FBQ0E7QUFDRjtBQUNFLGVBQVFLLElBQUksQ0FBSixLQUFVLENBQVgsR0FDSCx3REFBYyxLQUFLQSxDQUFuQixFQUFzQixNQUFNRCxJQUE1QixFQUFrQyxNQUFNRSxrQkFBeEMsRUFBNEQsT0FBT04sS0FBbkUsR0FERyxHQUVILHdEQUFjLEtBQUtLLENBQW5CLEVBQXNCLE1BQU1ELElBQTVCLEVBQWtDLE1BQU1HLGlCQUF4QyxFQUEyRCxPQUFPUCxLQUFsRSxHQUZKO0FBR0E7QUFYSjtBQWFELEdBZE0sQ0FBUDtBQWVELENBaEJEOztBQWtCQSxJQUFNUSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVyxtQkFBSUMsU0FBSixFQUFlRCxNQUFNVCxLQUFOLENBQVlVLFNBQTNCLENBQWhCO0FBQ0UsNkNBQUssV0FBVyxtQkFBSUMsZUFBSixFQUFxQkYsTUFBTVQsS0FBTixDQUFZVyxlQUFqQyxDQUFoQixHQURGO0FBRUdULDBCQUFvQk8sTUFBTWQsS0FBMUIsRUFBaUNjLE1BQU1YLElBQXZDLEVBQTZDVyxNQUFNVCxLQUFuRDtBQUZIO0FBREYsR0FEZTtBQUFBLENBQWpCOztBQVFBLElBQU1VLFlBQVksbUJBQUk7QUFDcEJFLFNBQU8sS0FEYTtBQUVwQkMsV0FBUyxRQUZXO0FBR3BCQyxVQUFRLFdBSFk7QUFJcEJDLFlBQVUsVUFKVTtBQUtwQkMsWUFBVTtBQUxVLENBQUosQ0FBbEI7O0FBUUEsSUFBTUwsa0JBQWtCLG1CQUFJO0FBQzFCTSxXQUFTLEVBRGlCO0FBRTFCRixZQUFVLFVBRmdCO0FBRzFCRyxPQUFLLEdBSHFCO0FBSTFCQyxRQUFNLEtBSm9CO0FBSzFCQyxjQUFZLE1BTGM7QUFNMUJSLFNBQU8sS0FObUI7QUFPMUJTLFVBQVEsTUFQa0I7QUFRMUJDLGNBQVksTUFSYztBQVMxQkMsVUFBUSxHQVRrQjtBQVUxQiwwQ0FBd0M7QUFDdENKLFVBQU0sS0FEZ0M7QUFFdENQLFdBQU87QUFGK0I7QUFWZCxDQUFKLENBQXhCOztBQWdCQSxJQUFNTCxvQkFBb0IsbUJBQUk7QUFDNUJpQixTQUFPLE1BRHFCO0FBRTVCQyxhQUFXLEtBRmlCO0FBRzVCLDBDQUF3QztBQUN0Q0QsV0FBTyxNQUQrQjtBQUV0Q0MsZUFBVztBQUYyQjtBQUhaLENBQUosQ0FBMUI7O0FBU0EsSUFBTW5CLHFCQUFxQixtQkFBSTtBQUM3QmtCLFNBQU8sT0FEc0I7QUFFN0IsMENBQXdDO0FBQ3RDQSxXQUFPO0FBRCtCO0FBRlgsQ0FBSixDQUEzQjs7QUFPQWhCLFNBQVNkLFNBQVQsR0FBcUJBLFNBQXJCO2tCQUNlYyxRIiwiZmlsZSI6IlRpbWVsaW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnLi9UaW1lbGluZUl0ZW0nXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmNvbnN0IHJlbmRlclRpbWVsaW5lSXRlbXMgPSAoaXRlbXMsIHR5cGUsIHN0eWxlKSA9PiB7XG4gIHJldHVybiBpdGVtcy5tYXAoIChpdGVtLCBpKSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcmV0dXJuIDxUaW1lbGluZUl0ZW0ga2V5PXtpfSBpdGVtPXtpdGVtfSBzaWRlPXt0aW1lbGluZUJsb2NrUmlnaHR9IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHJldHVybiA8VGltZWxpbmVJdGVtIGtleT17aX0gaXRlbT17aXRlbX0gc2lkZT17dGltZWxpbmVCbG9ja0xlZnR9IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoaSAlIDIgPT09IDApXG4gICAgICAgICAgPyA8VGltZWxpbmVJdGVtIGtleT17aX0gaXRlbT17aXRlbX0gc2lkZT17dGltZWxpbmVCbG9ja1JpZ2h0fSBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgICAgOiA8VGltZWxpbmVJdGVtIGtleT17aX0gaXRlbT17aXRlbX0gc2lkZT17dGltZWxpbmVCbG9ja0xlZnR9IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IFRpbWVsaW5lID0gKHByb3BzKSA9PlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY29udGFpbmVyLCBwcm9wcy5zdHlsZS5jb250YWluZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY29udGFpbmVyQmVmb3JlLCBwcm9wcy5zdHlsZS5jb250YWluZXJCZWZvcmUpfSAvPlxuICAgICAge3JlbmRlclRpbWVsaW5lSXRlbXMocHJvcHMuaXRlbXMsIHByb3BzLnR5cGUsIHByb3BzLnN0eWxlKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7XG4gIHdpZHRoOiAnODAlJyxcbiAgcGFkZGluZzogJzUwcHggMCcsXG4gIG1hcmdpbjogJzUwcHggYXV0bycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG59KVxuXG5jb25zdCBjb250YWluZXJCZWZvcmUgPSBjc3Moe1xuICBjb250ZW50OiAnJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogJzAnLFxuICBsZWZ0OiAnNTAlJyxcbiAgbWFyZ2luTGVmdDogJy0xcHgnLFxuICB3aWR0aDogJzJweCcsXG4gIGhlaWdodDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gIHpJbmRleDogJzEnLFxuICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgIGxlZnQ6ICc4cHgnLFxuICAgIHdpZHRoOiAnMnB4JyxcbiAgfVxufSlcblxuY29uc3QgdGltZWxpbmVCbG9ja0xlZnQgPSBjc3Moe1xuICBmbG9hdDogJ2xlZnQnLFxuICBkaXJlY3Rpb246ICdydGwnLFxuICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgIGZsb2F0OiAnbm9uZScsXG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgfVxufSlcblxuY29uc3QgdGltZWxpbmVCbG9ja1JpZ2h0ID0gY3NzKHtcbiAgZmxvYXQ6ICdyaWdodCcsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgZmxvYXQ6ICdub25lJ1xuICB9XG59KVxuXG5UaW1lbGluZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lXG4iXX0=