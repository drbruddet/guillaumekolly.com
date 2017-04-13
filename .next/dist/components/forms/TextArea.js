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
  rows: _react.PropTypes.number
};

var defaultProps = {
  style: null,
  cols: 30,
  rows: 5
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
      cols: props.cols,
      rows: props.rows,
      required: true
    })),
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
TextArea.defaultProps = defaultProps;
exports.default = TextArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJvd3MiLCJkZWZhdWx0UHJvcHMiLCJUZXh0QXJlYSIsInByb3BzIiwiY29sb3IiLCJwbGFjZWhvbGRlckNvbG9yIiwidGV4dGFyZWEiLCJhbmltYXRpb24iLCJmb250IiwibWFyZ2luIiwibGluZUhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJmb250U2l6ZSIsIm91dGxpbmUiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiTXNUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxRQUFjLGlCQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRWhCQyxlQUFjLGlCQUFVRixNQUZSO0FBR2hCRyxTQUFjLGlCQUFVQyxNQUhSO0FBSWhCQyxRQUFjLGlCQUFVQyxNQUpSO0FBS2hCQyxRQUFjLGlCQUFVRDtBQUxSLENBQWxCOztBQVFBLElBQU1FLGVBQWU7QUFDbkJMLFNBQU8sSUFEWTtBQUVuQkUsUUFBTSxFQUZhO0FBR25CRSxRQUFNO0FBSGEsQ0FBckI7O0FBTUEsSUFBTUUsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1QLEtBQXRCO0FBQ0UsNkNBQU8sU0FBU08sTUFBTVgsSUFBdEIsR0FERjtBQUVFLHlFQUNNLHVCQUFZLEVBQUNZLE9BQU9DLGdCQUFSLEVBQVosQ0FETjtBQUVFLGlCQUFXQyxRQUZiO0FBR0UsWUFBSyxNQUhQO0FBSUUsWUFBTUgsTUFBTVgsSUFKZDtBQUtFLG1CQUFhVyxNQUFNUixXQUFOLEdBQW9CUSxNQUFNUixXQUExQixHQUF3Q1EsTUFBTVgsSUFMN0Q7QUFNRSxZQUFNVyxNQUFNTCxJQU5kO0FBT0UsWUFBTUssTUFBTUgsSUFQZDtBQVFFO0FBUkYsT0FGRjtBQVlFLDRDQUFNLFdBQVdPLFNBQWpCO0FBWkYsR0FEZTtBQUFBLENBQWpCOztBQWdCQSxJQUFNRCxXQUFXO0FBQ2ZFLFFBQU0sU0FEUztBQUVmQyxVQUFRLEdBRk87QUFHZkMsY0FBWSxRQUhHO0FBSWZDLGNBQVksTUFKRztBQUtmQyxVQUFRLE1BTE87QUFNZkMsZ0JBQWMsZ0JBTkM7QUFPZkMsWUFBVTtBQVBLLGlEQVFQLGlCQVJPLGtEQVNOLGVBVE0sZ0RBVVIsTUFWUSxvREFXSixNQVhJLHVEQVlELE1BWkMsMERBYUUsTUFiRixpREFjUCxPQWRPLGlEQWVQLE1BZk8sZ0RBZ0JSLE1BaEJRLHFEQWlCSCxNQWpCRyxtREFrQkwsTUFsQkssdUNBbUJmLFFBbkJlLEVBbUJMLEVBQUVDLFNBQVMsTUFBWCxFQUFtQkMsU0FBUyxlQUE1QixFQW5CSyx1Q0FvQmYsZUFwQmUsRUFvQkUsRUFBRUMsWUFBWSxPQUFkLEVBcEJGLFNBQWpCOztBQXVCQSxJQUFNWixtQkFBbUIsU0FBekI7O0FBRUEsSUFBTUUsWUFBWSxlQUFJO0FBQ3BCVyxvQkFBa0IsaUJBREU7QUFFcEJDLGlCQUFlLGlCQUZLO0FBR3BCQyxnQkFBYyxpQkFITTtBQUlwQkMsZUFBYSxpQkFKTztBQUtwQkMsY0FBWSxpQkFMUTtBQU1wQkMsV0FBUztBQU5XLENBQUosQ0FBbEI7O0FBU0FyQixTQUFTWCxTQUFULEdBQXFCQSxTQUFyQjtBQUNBVyxTQUFTRCxZQUFULEdBQXdCQSxZQUF4QjtrQkFDZUMsUSIsImZpbGUiOiJUZXh0QXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwbGFjZWhvbGRlciwgY3NzIH0gZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgbmFtZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICBjb2xzOiAgICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIHJvd3M6ICAgICAgICAgUHJvcFR5cGVzLm51bWJlclxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiBudWxsLFxuICBjb2xzOiAzMCxcbiAgcm93czogNVxufVxuXG5jb25zdCBUZXh0QXJlYSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlfT5cbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0gLz5cbiAgICA8dGV4dGFyZWFcbiAgICAgIHsuLi5wbGFjZWhvbGRlcih7Y29sb3I6IHBsYWNlaG9sZGVyQ29sb3J9KX1cbiAgICAgIGNsYXNzTmFtZT17dGV4dGFyZWF9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgY29scz17cHJvcHMuY29sc31cbiAgICAgIHJvd3M9e3Byb3BzLnJvd3N9XG4gICAgICByZXF1aXJlZFxuICAgIC8+XG4gICAgPHNwYW4gY2xhc3NOYW1lPXthbmltYXRpb259Lz5cbiAgPC9kaXY+XG5cbmNvbnN0IHRleHRhcmVhID0gY3NzKHtcbiAgZm9udDogJ2luaGVyaXQnLFxuICBtYXJnaW46ICcwJyxcbiAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCAjZmZmJyxcbiAgZm9udFNpemU6ICcxZW0nLFxuICBtYXJnaW46ICcwZW0gMCAxLjg3NWVtIDAnLFxuICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGJveFNoYWRvdzogJ25vbmUnLFxuICBNb3pCb3hTaGFkb3c6ICdub25lJyxcbiAgV2Via2l0Qm94U2hhZG93OiAnbm9uZScsXG4gIGhlaWdodDogJzE1MHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGxpbmVIZWlnaHQ6ICcxNTAlJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgJzpmb2N1cyc6IHsgb3V0bGluZTogJ25vbmUnLCBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcgfSxcbiAgJzpmb2N1cyB+IHNwYW4nOiB7IG1hcmdpbkxlZnQ6ICctNTBweCcgfVxufSlcblxuY29uc3QgcGxhY2Vob2xkZXJDb2xvciA9ICcjMjQyNDI0J1xuXG5jb25zdCBhbmltYXRpb24gPSBjc3Moe1xuICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgTW96VHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIE1zVHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIE9UcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIGNvbnRlbnQ6ICcnLFxufSlcblxuVGV4dEFyZWEucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG4iXX0=