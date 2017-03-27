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
    return _react2.default.createElement(_TimelineItem2.default, { key: i, item: item });
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

Timeline.propTypes = propTypes;
exports.default = Timeline;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiaXRlbXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJyZW5kZXJUaW1lbGluZUl0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJUaW1lbGluZSIsInByb3BzIiwiY29udGFpbmVyIiwiY29udGFpbmVyQmVmb3JlIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwibWFyZ2luTGVmdCIsImhlaWdodCIsImJhY2tncm91bmQiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsU0FBTyxpQkFBVUMsS0FBVixDQUFnQkM7QUFEUCxDQUFsQjs7QUFJQSxJQUFNQyxzQkFBc0IsU0FBdEJBLG1CQUFzQixDQUFDSCxLQUFELEVBQVc7QUFDckMsU0FBT0EsTUFBTUksR0FBTixDQUFXLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzdCLFdBQU8sd0RBQWMsS0FBS0EsQ0FBbkIsRUFBc0IsTUFBTUQsSUFBNUIsR0FBUDtBQUNELEdBRk0sQ0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUUsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdDLFNBQWhCO0FBQ0UsNkNBQUssV0FBV0MsZUFBaEIsR0FERjtBQUVHUCwwQkFBb0JLLE1BQU1SLEtBQTFCO0FBRkg7QUFERixHQURlO0FBQUEsQ0FBakI7O0FBUUEsSUFBTVMsWUFBWSxtQkFBSTtBQUNwQkUsU0FBTyxLQURhO0FBRXBCQyxXQUFTLFFBRlc7QUFHcEJDLFVBQVEsV0FIWTtBQUlwQkMsWUFBVSxVQUpVO0FBS3BCQyxZQUFVO0FBTFUsQ0FBSixDQUFsQjs7QUFRQSxJQUFNTCxrQkFBa0IsbUJBQUk7QUFDMUJNLFdBQVMsRUFEaUI7QUFFMUJGLFlBQVUsVUFGZ0I7QUFHMUJHLE9BQUssR0FIcUI7QUFJMUJDLFFBQU0sS0FKb0I7QUFLMUJDLGNBQVksTUFMYztBQU0xQlIsU0FBTyxLQU5tQjtBQU8xQlMsVUFBUSxNQVBrQjtBQVExQkMsY0FBWSxTQVJjO0FBUzFCQyxVQUFRLEdBVGtCO0FBVTFCLDBDQUF3QztBQUN0Q0osVUFBTSxLQURnQztBQUV0Q1AsV0FBTztBQUYrQjtBQVZkLENBQUosQ0FBeEI7O0FBZ0JBSixTQUFTUixTQUFULEdBQXFCQSxTQUFyQjtrQkFDZVEsUSIsImZpbGUiOiJUaW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5pbXBvcnQgVGltZWxpbmVJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvVGltZWxpbmVJdGVtJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn1cblxuY29uc3QgcmVuZGVyVGltZWxpbmVJdGVtcyA9IChpdGVtcykgPT4ge1xuICByZXR1cm4gaXRlbXMubWFwKCAoaXRlbSwgaSkgPT4ge1xuICAgIHJldHVybiA8VGltZWxpbmVJdGVtIGtleT17aX0gaXRlbT17aXRlbX0gLz5cbiAgfSlcbn1cblxuY29uc3QgVGltZWxpbmUgPSAocHJvcHMpID0+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQmVmb3JlfSAvPlxuICAgICAge3JlbmRlclRpbWVsaW5lSXRlbXMocHJvcHMuaXRlbXMpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgd2lkdGg6ICc4MCUnLFxuICBwYWRkaW5nOiAnNTBweCAwJyxcbiAgbWFyZ2luOiAnNTBweCBhdXRvJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pXG5cbmNvbnN0IGNvbnRhaW5lckJlZm9yZSA9IGNzcyh7XG4gIGNvbnRlbnQ6ICcnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICc1MCUnLFxuICBtYXJnaW5MZWZ0OiAnLTFweCcsXG4gIHdpZHRoOiAnMnB4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGJhY2tncm91bmQ6ICcjQ0NEMUQ5JyxcbiAgekluZGV4OiAnMScsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgbGVmdDogJzhweCcsXG4gICAgd2lkdGg6ICcycHgnLFxuICB9XG59KVxuXG5UaW1lbGluZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lXG4iXX0=