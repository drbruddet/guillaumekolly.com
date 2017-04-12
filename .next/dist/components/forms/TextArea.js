'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _css;

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  name: _react.PropTypes.string.isRequired,
  placeholder: _react.PropTypes.string,
  style: _react.PropTypes.object,
  cols: _react.PropTypes.number,
  raws: _react.PropTypes.number
};

var TextArea = function TextArea(props) {
  return _react2.default.createElement(
    'div',
    { className: props.style },
    _react2.default.createElement('label', { htmlFor: props.name }),
    _react2.default.createElement('textarea', (0, _extends3.default)({}, (0, _css2.placeholder)({ color: placeholderColor }), {
      className: textarea,
      type: 'text',
      name: props.name,
      placeholder: props.placeholder ? props.placeholder : props.name,
      cols: props.cols ? props.cols : 30,
      rows: props.rows ? props.rows : 5,
      required: true })),
    _react2.default.createElement('span', { className: animation })
  );
};

var textarea = (0, _css2.css)((_css = {
  font: 'inherit',
  margin: '0',
  lineHeight: 'normal',
  background: 'none',
  border: 'none',
  borderBottom: 'solid 2px #fff',
  fontSize: '1em'
}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'boxShadow', 'none'), (0, _defineProperty3.default)(_css, 'MozBoxShadow', 'none'), (0, _defineProperty3.default)(_css, 'WebkitBoxShadow', 'none'), (0, _defineProperty3.default)(_css, 'height', '150px'), (0, _defineProperty3.default)(_css, 'resize', 'none'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'lineHeight', '150%'), (0, _defineProperty3.default)(_css, 'overflow', 'auto'), (0, _defineProperty3.default)(_css, ':focus', { outline: 'none', padding: '0 0 0.875em 0' }), (0, _defineProperty3.default)(_css, ':focus ~ span', { marginLeft: '-50px' }), _css));

var placeholderColor = '#242424';

var animation = (0, _css2.css)({
  WebkitTransition: 'all 0.5s linear',
  MozTransition: 'all 0.5s linear',
  MsTransition: 'all 0.5s linear',
  OTransition: 'all 0.5s linear',
  transition: 'all 0.5s linear',
  content: ''
});

TextArea.propTypes = propTypes;
exports.default = TextArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJhd3MiLCJUZXh0QXJlYSIsInByb3BzIiwiY29sb3IiLCJwbGFjZWhvbGRlckNvbG9yIiwidGV4dGFyZWEiLCJyb3dzIiwiYW5pbWF0aW9uIiwiZm9udCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJvdXRsaW5lIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk1zVHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsUUFBYyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEZjtBQUVoQkMsZUFBYyxpQkFBVUYsTUFGUjtBQUdoQkcsU0FBYyxpQkFBVUMsTUFIUjtBQUloQkMsUUFBYyxpQkFBVUMsTUFKUjtBQUtoQkMsUUFBYyxpQkFBVUQ7QUFMUixDQUFsQjs7QUFRQSxJQUFNRSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQUssV0FBV0EsTUFBTU4sS0FBdEI7QUFDRSw2Q0FBTyxTQUFTTSxNQUFNVixJQUF0QixHQURGO0FBRUUseUVBQWMsdUJBQVksRUFBQ1csT0FBT0MsZ0JBQVIsRUFBWixDQUFkO0FBQ1UsaUJBQVdDLFFBRHJCO0FBRVUsWUFBSyxNQUZmO0FBR1UsWUFBTUgsTUFBTVYsSUFIdEI7QUFJVSxtQkFBYVUsTUFBTVAsV0FBTixHQUFvQk8sTUFBTVAsV0FBMUIsR0FBd0NPLE1BQU1WLElBSnJFO0FBS1UsWUFBTVUsTUFBTUosSUFBTixHQUFhSSxNQUFNSixJQUFuQixHQUEwQixFQUwxQztBQU1VLFlBQU1JLE1BQU1JLElBQU4sR0FBYUosTUFBTUksSUFBbkIsR0FBMEIsQ0FOMUM7QUFPVSxvQkFQVixJQUZGO0FBV0UsNENBQU0sV0FBV0MsU0FBakI7QUFYRixHQURlO0FBQUEsQ0FBakI7O0FBZUEsSUFBTUYsV0FBVztBQUNmRyxRQUFNLFNBRFM7QUFFZkMsVUFBUSxHQUZPO0FBR2ZDLGNBQVksUUFIRztBQUlmQyxjQUFZLE1BSkc7QUFLZkMsVUFBUSxNQUxPO0FBTWZDLGdCQUFjLGdCQU5DO0FBT2ZDLFlBQVU7QUFQSyxpREFRUCxpQkFSTyxrREFTTixlQVRNLGdEQVVSLE1BVlEsb0RBV0osTUFYSSx1REFZRCxNQVpDLDBEQWFFLE1BYkYsaURBY1AsT0FkTyxpREFlUCxNQWZPLGdEQWdCUixNQWhCUSxxREFpQkgsTUFqQkcsbURBa0JMLE1BbEJLLHVDQW1CZixRQW5CZSxFQW1CTCxFQUFFQyxTQUFTLE1BQVgsRUFBbUJDLFNBQVMsZUFBNUIsRUFuQkssdUNBb0JmLGVBcEJlLEVBb0JFLEVBQUVDLFlBQVksT0FBZCxFQXBCRixTQUFqQjs7QUF1QkEsSUFBTWIsbUJBQW1CLFNBQXpCOztBQUVBLElBQU1HLFlBQVksZUFBSTtBQUNwQlcsb0JBQWtCLGlCQURFO0FBRXBCQyxpQkFBZSxpQkFGSztBQUdwQkMsZ0JBQWMsaUJBSE07QUFJcEJDLGVBQWEsaUJBSk87QUFLcEJDLGNBQVksaUJBTFE7QUFNcEJDLFdBQVM7QUFOVyxDQUFKLENBQWxCOztBQVNBdEIsU0FBU1YsU0FBVCxHQUFxQkEsU0FBckI7a0JBQ2VVLFEiLCJmaWxlIjoiVGV4dEFyZWEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGxhY2Vob2xkZXIsIGNzcyB9IGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sczogICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICByYXdzOiAgICAgICAgIFByb3BUeXBlcy5udW1iZXJcbn1cblxuY29uc3QgVGV4dEFyZWEgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIHsuLi5wbGFjZWhvbGRlcih7Y29sb3I6IHBsYWNlaG9sZGVyQ29sb3J9KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0ZXh0YXJlYX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IHByb3BzLm5hbWV9XG4gICAgICAgICAgICAgIGNvbHM9e3Byb3BzLmNvbHMgPyBwcm9wcy5jb2xzIDogMzB9XG4gICAgICAgICAgICAgIHJvd3M9e3Byb3BzLnJvd3MgPyBwcm9wcy5yb3dzIDogNX1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgPC90ZXh0YXJlYT5cbiAgICA8c3BhbiBjbGFzc05hbWU9e2FuaW1hdGlvbn0vPlxuICA8L2Rpdj5cblxuY29uc3QgdGV4dGFyZWEgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICNmZmYnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgYm94U2hhZG93OiAnbm9uZScsXG4gIE1vekJveFNoYWRvdzogJ25vbmUnLFxuICBXZWJraXRCb3hTaGFkb3c6ICdub25lJyxcbiAgaGVpZ2h0OiAnMTUwcHgnLFxuICByZXNpemU6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbGluZUhlaWdodDogJzE1MCUnLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxuICAnOmZvY3VzJzogeyBvdXRsaW5lOiAnbm9uZScsIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyB9LFxuICAnOmZvY3VzIH4gc3Bhbic6IHsgbWFyZ2luTGVmdDogJy01MHB4JyB9XG59KVxuXG5jb25zdCBwbGFjZWhvbGRlckNvbG9yID0gJyMyNDI0MjQnXG5cbmNvbnN0IGFuaW1hdGlvbiA9IGNzcyh7XG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgY29udGVudDogJycsXG59KVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG4iXX0=