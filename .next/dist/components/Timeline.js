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

var _Theme = require('../components/layout/Theme');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiaXRlbXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ0eXBlIiwic3RyaW5nIiwic3R5bGUiLCJvYmplY3QiLCJyZW5kZXJUaW1lbGluZUl0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJ0aW1lbGluZUJsb2NrUmlnaHQiLCJ0aW1lbGluZUJsb2NrTGVmdCIsIlRpbWVsaW5lIiwicHJvcHMiLCJjb250YWluZXIiLCJjb250YWluZXJCZWZvcmUiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJtYXJnaW5MZWZ0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZsb2F0IiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFNBQU8saUJBQVVDLEtBQVYsQ0FBZ0JDLFVBRFA7QUFFaEJDLFFBQU0saUJBQVVDLE1BRkE7QUFHaEJDLFNBQU8saUJBQVVDO0FBSEQsQ0FBbEI7O0FBTUEsSUFBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ1AsS0FBRCxFQUFRRyxJQUFSLEVBQWNFLEtBQWQsRUFBd0I7QUFDbEQsU0FBT0wsTUFBTVEsR0FBTixDQUFXLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzdCLFlBQVFQLElBQVI7QUFDRSxXQUFLLE9BQUw7QUFDRSxlQUFPLHdEQUFjLEtBQUtPLENBQW5CLEVBQXNCLE1BQU1ELElBQTVCLEVBQWtDLE1BQU1FLGtCQUF4QyxFQUE0RCxPQUFPTixLQUFuRSxHQUFQO0FBQ0E7QUFDRixXQUFLLE1BQUw7QUFDRSxlQUFPLHdEQUFjLEtBQUtLLENBQW5CLEVBQXNCLE1BQU1ELElBQTVCLEVBQWtDLE1BQU1HLGlCQUF4QyxFQUEyRCxPQUFPUCxLQUFsRSxHQUFQO0FBQ0E7QUFDRjtBQUNFLGVBQVFLLElBQUksQ0FBSixLQUFVLENBQVgsR0FDSCx3REFBYyxLQUFLQSxDQUFuQixFQUFzQixNQUFNRCxJQUE1QixFQUFrQyxNQUFNRSxrQkFBeEMsRUFBNEQsT0FBT04sS0FBbkUsR0FERyxHQUVILHdEQUFjLEtBQUtLLENBQW5CLEVBQXNCLE1BQU1ELElBQTVCLEVBQWtDLE1BQU1HLGlCQUF4QyxFQUEyRCxPQUFPUCxLQUFsRSxHQUZKO0FBR0E7QUFYSjtBQWFELEdBZE0sQ0FBUDtBQWVELENBaEJEOztBQWtCQSxJQUFNUSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVyxtQkFBSUMsU0FBSixFQUFlRCxNQUFNVCxLQUFOLENBQVlVLFNBQTNCLENBQWhCO0FBQ0UsNkNBQUssV0FBVyxtQkFBSUMsZUFBSixFQUFxQkYsTUFBTVQsS0FBTixDQUFZVyxlQUFqQyxDQUFoQixHQURGO0FBRUdULDBCQUFvQk8sTUFBTWQsS0FBMUIsRUFBaUNjLE1BQU1YLElBQXZDLEVBQTZDVyxNQUFNVCxLQUFuRDtBQUZIO0FBREYsR0FEZTtBQUFBLENBQWpCOztBQVFBLElBQU1VLFlBQVksbUJBQUk7QUFDcEJFLFNBQU8sS0FEYTtBQUVwQkMsV0FBUyxRQUZXO0FBR3BCQyxVQUFRLFdBSFk7QUFJcEJDLFlBQVUsVUFKVTtBQUtwQkMsWUFBVTtBQUxVLENBQUosQ0FBbEI7O0FBUUEsSUFBTUwsa0JBQWtCLG1CQUFJO0FBQzFCTSxXQUFTLEVBRGlCO0FBRTFCRixZQUFVLFVBRmdCO0FBRzFCRyxPQUFLLEdBSHFCO0FBSTFCQyxRQUFNLEtBSm9CO0FBSzFCQyxjQUFZLE1BTGM7QUFNMUJSLFNBQU8sS0FObUI7QUFPMUJTLFVBQVEsTUFQa0I7QUFRMUJDLGNBQVksTUFSYztBQVMxQkMsVUFBUSxHQVRrQjtBQVUxQiwwQ0FBd0M7QUFDdENKLFVBQU0sS0FEZ0M7QUFFdENQLFdBQU87QUFGK0I7QUFWZCxDQUFKLENBQXhCOztBQWdCQSxJQUFNTCxvQkFBb0IsbUJBQUk7QUFDNUJpQixTQUFPLE1BRHFCO0FBRTVCQyxhQUFXLEtBRmlCO0FBRzVCLDBDQUF3QztBQUN0Q0QsV0FBTyxNQUQrQjtBQUV0Q0MsZUFBVztBQUYyQjtBQUhaLENBQUosQ0FBMUI7O0FBU0EsSUFBTW5CLHFCQUFxQixtQkFBSTtBQUM3QmtCLFNBQU8sT0FEc0I7QUFFN0IsMENBQXdDO0FBQ3RDQSxXQUFPO0FBRCtCO0FBRlgsQ0FBSixDQUEzQjs7QUFPQWhCLFNBQVNkLFNBQVQsR0FBcUJBLFNBQXJCO2tCQUNlYyxRIiwiZmlsZSI6IlRpbWVsaW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lbGluZUl0ZW0nXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuY29uc3QgcmVuZGVyVGltZWxpbmVJdGVtcyA9IChpdGVtcywgdHlwZSwgc3R5bGUpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCggKGl0ZW0sIGkpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICByZXR1cm4gPFRpbWVsaW5lSXRlbSBrZXk9e2l9IGl0ZW09e2l0ZW19IHNpZGU9e3RpbWVsaW5lQmxvY2tSaWdodH0gc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcmV0dXJuIDxUaW1lbGluZUl0ZW0ga2V5PXtpfSBpdGVtPXtpdGVtfSBzaWRlPXt0aW1lbGluZUJsb2NrTGVmdH0gc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChpICUgMiA9PT0gMClcbiAgICAgICAgICA/IDxUaW1lbGluZUl0ZW0ga2V5PXtpfSBpdGVtPXtpdGVtfSBzaWRlPXt0aW1lbGluZUJsb2NrUmlnaHR9IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgICA6IDxUaW1lbGluZUl0ZW0ga2V5PXtpfSBpdGVtPXtpdGVtfSBzaWRlPXt0aW1lbGluZUJsb2NrTGVmdH0gc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgVGltZWxpbmUgPSAocHJvcHMpID0+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcyhjb250YWluZXIsIHByb3BzLnN0eWxlLmNvbnRhaW5lcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcyhjb250YWluZXJCZWZvcmUsIHByb3BzLnN0eWxlLmNvbnRhaW5lckJlZm9yZSl9IC8+XG4gICAgICB7cmVuZGVyVGltZWxpbmVJdGVtcyhwcm9wcy5pdGVtcywgcHJvcHMudHlwZSwgcHJvcHMuc3R5bGUpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgd2lkdGg6ICc4MCUnLFxuICBwYWRkaW5nOiAnNTBweCAwJyxcbiAgbWFyZ2luOiAnNTBweCBhdXRvJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pXG5cbmNvbnN0IGNvbnRhaW5lckJlZm9yZSA9IGNzcyh7XG4gIGNvbnRlbnQ6ICcnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICc1MCUnLFxuICBtYXJnaW5MZWZ0OiAnLTFweCcsXG4gIHdpZHRoOiAnMnB4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgekluZGV4OiAnMScsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgbGVmdDogJzhweCcsXG4gICAgd2lkdGg6ICcycHgnLFxuICB9XG59KVxuXG5jb25zdCB0aW1lbGluZUJsb2NrTGVmdCA9IGNzcyh7XG4gIGZsb2F0OiAnbGVmdCcsXG4gIGRpcmVjdGlvbjogJ3J0bCcsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgZmxvYXQ6ICdub25lJyxcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICB9XG59KVxuXG5jb25zdCB0aW1lbGluZUJsb2NrUmlnaHQgPSBjc3Moe1xuICBmbG9hdDogJ3JpZ2h0JyxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICBmbG9hdDogJ25vbmUnXG4gIH1cbn0pXG5cblRpbWVsaW5lLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVcbiJdfQ==