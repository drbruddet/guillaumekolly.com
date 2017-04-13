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

var defaultProps = {
  type: "",
  style: null
};

var renderTimelineItems = function renderTimelineItems(items, type, style) {
  return items.map(function (item, i) {
    switch (type) {
      case "right":
        return _react2.default.createElement(_TimelineItem2.default, {
          key: i,
          item: item,
          side: timelineBlockRight,
          style: style
        });
        break;
      case "left":
        return _react2.default.createElement(_TimelineItem2.default, {
          key: i,
          item: item,
          side: timelineBlockLeft,
          style: style });
        break;
      default:
        return i % 2 === 0 ? _react2.default.createElement(_TimelineItem2.default, {
          key: i,
          item: item,
          side: timelineBlockRight,
          style: style }) : _react2.default.createElement(_TimelineItem2.default, {
          key: i,
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
Timeline.defaultProps = defaultProps;
exports.default = Timeline;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiaXRlbXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJ0eXBlIiwic3RyaW5nIiwic3R5bGUiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJyZW5kZXJUaW1lbGluZUl0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJ0aW1lbGluZUJsb2NrUmlnaHQiLCJ0aW1lbGluZUJsb2NrTGVmdCIsIlRpbWVsaW5lIiwicHJvcHMiLCJjb250YWluZXIiLCJjb250YWluZXJCZWZvcmUiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJtYXJnaW5MZWZ0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZsb2F0IiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFNBQU8saUJBQVVDLEtBQVYsQ0FBZ0JDLFVBRFA7QUFFaEJDLFFBQU0saUJBQVVDLE1BRkE7QUFHaEJDLFNBQU8saUJBQVVDO0FBSEQsQ0FBbEI7O0FBTUEsSUFBTUMsZUFBZTtBQUNuQkosUUFBUSxFQURXO0FBRW5CRSxTQUFRO0FBRlcsQ0FBckI7O0FBS0EsSUFBTUcsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ1IsS0FBRCxFQUFRRyxJQUFSLEVBQWNFLEtBQWQsRUFBd0I7QUFDbEQsU0FBT0wsTUFBTVMsR0FBTixDQUFXLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzdCLFlBQVFSLElBQVI7QUFDRSxXQUFLLE9BQUw7QUFDRSxlQUNFO0FBQ0UsZUFBS1EsQ0FEUDtBQUVFLGdCQUFNRCxJQUZSO0FBR0UsZ0JBQU1FLGtCQUhSO0FBSUUsaUJBQU9QO0FBSlQsVUFERjtBQVFBO0FBQ0YsV0FBSyxNQUFMO0FBQ0UsZUFDRTtBQUNFLGVBQUtNLENBRFA7QUFFRSxnQkFBTUQsSUFGUjtBQUdFLGdCQUFNRyxpQkFIUjtBQUlFLGlCQUFPUixLQUpULEdBREY7QUFPQTtBQUNGO0FBQ0UsZUFBUU0sSUFBSSxDQUFKLEtBQVUsQ0FBWCxHQUNMO0FBQ0UsZUFBS0EsQ0FEUDtBQUVFLGdCQUFNRCxJQUZSO0FBR0UsZ0JBQU1FLGtCQUhSO0FBSUUsaUJBQU9QLEtBSlQsR0FESyxHQU9MO0FBQ0UsZUFBS00sQ0FEUDtBQUVFLGdCQUFNRCxJQUZSO0FBR0UsZ0JBQU1HLGlCQUhSO0FBSUUsaUJBQU9SLEtBSlQsR0FQRjtBQWFBO0FBbENKO0FBb0NELEdBckNNLENBQVA7QUFzQ0QsQ0F2Q0Q7O0FBeUNBLElBQU1TLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFEO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFXLG1CQUFJQyxTQUFKLEVBQWVELE1BQU1WLEtBQU4sQ0FBWVcsU0FBM0IsQ0FBaEI7QUFDRSw2Q0FBSyxXQUFXLG1CQUFJQyxlQUFKLEVBQXFCRixNQUFNVixLQUFOLENBQVlZLGVBQWpDLENBQWhCLEdBREY7QUFFR1QsMEJBQW9CTyxNQUFNZixLQUExQixFQUFpQ2UsTUFBTVosSUFBdkMsRUFBNkNZLE1BQU1WLEtBQW5EO0FBRkg7QUFERixHQURlO0FBQUEsQ0FBakI7O0FBUUEsSUFBTVcsWUFBWSxtQkFBSTtBQUNwQkUsU0FBTyxLQURhO0FBRXBCQyxXQUFTLFFBRlc7QUFHcEJDLFVBQVEsV0FIWTtBQUlwQkMsWUFBVSxVQUpVO0FBS3BCQyxZQUFVO0FBTFUsQ0FBSixDQUFsQjs7QUFRQSxJQUFNTCxrQkFBa0IsbUJBQUk7QUFDMUJNLFdBQVMsRUFEaUI7QUFFMUJGLFlBQVUsVUFGZ0I7QUFHMUJHLE9BQUssR0FIcUI7QUFJMUJDLFFBQU0sS0FKb0I7QUFLMUJDLGNBQVksTUFMYztBQU0xQlIsU0FBTyxLQU5tQjtBQU8xQlMsVUFBUSxNQVBrQjtBQVExQkMsY0FBWSxNQVJjO0FBUzFCQyxVQUFRLEdBVGtCO0FBVTFCLDBDQUF3QyxFQUFFSixNQUFNLEtBQVIsRUFBZVAsT0FBTyxLQUF0QjtBQVZkLENBQUosQ0FBeEI7O0FBYUEsSUFBTUwsb0JBQW9CLG1CQUFJO0FBQzVCaUIsU0FBTyxNQURxQjtBQUU1QkMsYUFBVyxLQUZpQjtBQUc1QiwwQ0FBd0MsRUFBRUQsT0FBTyxNQUFULEVBQWlCQyxXQUFXLEtBQTVCO0FBSFosQ0FBSixDQUExQjs7QUFNQSxJQUFNbkIscUJBQXFCLG1CQUFJO0FBQzdCa0IsU0FBTyxPQURzQjtBQUU3QiwwQ0FBd0MsRUFBRUEsT0FBTyxNQUFUO0FBRlgsQ0FBSixDQUEzQjs7QUFLQWhCLFNBQVNmLFNBQVQsR0FBcUJBLFNBQXJCO0FBQ0FlLFNBQVNQLFlBQVQsR0FBd0JBLFlBQXhCO2tCQUNlTyxRIiwiZmlsZSI6IlRpbWVsaW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnLi9UaW1lbGluZUl0ZW0nXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogICBcIlwiLFxuICBzdHlsZTogIG51bGxcbn1cblxuY29uc3QgcmVuZGVyVGltZWxpbmVJdGVtcyA9IChpdGVtcywgdHlwZSwgc3R5bGUpID0+IHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCggKGl0ZW0sIGkpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUaW1lbGluZUl0ZW1cbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBzaWRlPXt0aW1lbGluZUJsb2NrUmlnaHR9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGltZWxpbmVJdGVtXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgc2lkZT17dGltZWxpbmVCbG9ja0xlZnR9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgIClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoaSAlIDIgPT09IDApID8gKFxuICAgICAgICAgIDxUaW1lbGluZUl0ZW1cbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBzaWRlPXt0aW1lbGluZUJsb2NrUmlnaHR9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRpbWVsaW5lSXRlbVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIHNpZGU9e3RpbWVsaW5lQmxvY2tMZWZ0fVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICApXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBUaW1lbGluZSA9IChwcm9wcykgPT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGNvbnRhaW5lciwgcHJvcHMuc3R5bGUuY29udGFpbmVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGNvbnRhaW5lckJlZm9yZSwgcHJvcHMuc3R5bGUuY29udGFpbmVyQmVmb3JlKX0gLz5cbiAgICAgIHtyZW5kZXJUaW1lbGluZUl0ZW1zKHByb3BzLml0ZW1zLCBwcm9wcy50eXBlLCBwcm9wcy5zdHlsZSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5jb25zdCBjb250YWluZXIgPSBjc3Moe1xuICB3aWR0aDogJzgwJScsXG4gIHBhZGRpbmc6ICc1MHB4IDAnLFxuICBtYXJnaW46ICc1MHB4IGF1dG8nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxufSlcblxuY29uc3QgY29udGFpbmVyQmVmb3JlID0gY3NzKHtcbiAgY29udGVudDogJycsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgbGVmdDogJzUwJScsXG4gIG1hcmdpbkxlZnQ6ICctMXB4JyxcbiAgd2lkdGg6ICcycHgnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgYmFja2dyb3VuZDogJyMwMDAnLFxuICB6SW5kZXg6ICcxJyxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHsgbGVmdDogJzhweCcsIHdpZHRoOiAnMnB4JyB9XG59KVxuXG5jb25zdCB0aW1lbGluZUJsb2NrTGVmdCA9IGNzcyh7XG4gIGZsb2F0OiAnbGVmdCcsXG4gIGRpcmVjdGlvbjogJ3J0bCcsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7IGZsb2F0OiAnbm9uZScsIGRpcmVjdGlvbjogJ2x0cicgfVxufSlcblxuY29uc3QgdGltZWxpbmVCbG9ja1JpZ2h0ID0gY3NzKHtcbiAgZmxvYXQ6ICdyaWdodCcsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7IGZsb2F0OiAnbm9uZScgfVxufSlcblxuVGltZWxpbmUucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5UaW1lbGluZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lXG4iXX0=