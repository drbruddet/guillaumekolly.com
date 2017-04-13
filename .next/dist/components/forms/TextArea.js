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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJvd3MiLCJkZWZhdWx0UHJvcHMiLCJUZXh0QXJlYSIsInByb3BzIiwiY29sb3IiLCJwbGFjZWhvbGRlckNvbG9yIiwidGV4dGFyZWEiLCJhbmltYXRpb24iLCJmb250IiwibWFyZ2luIiwibGluZUhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJmb250U2l6ZSIsIm91dGxpbmUiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiTXNUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxRQUFjLGlCQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRWhCQyxlQUFjLGlCQUFVRixNQUZSO0FBR2hCRyxTQUFjLGlCQUFVQyxNQUhSO0FBSWhCQyxRQUFjLGlCQUFVQyxNQUpSO0FBS2hCQyxRQUFjLGlCQUFVRDtBQUxSLENBQWxCOztBQVFBLElBQU1FLGVBQWU7QUFDbkJMLFNBQVEsSUFEVztBQUVuQkUsUUFBUSxFQUZXO0FBR25CRSxRQUFRO0FBSFcsQ0FBckI7O0FBTUEsSUFBTUUsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1QLEtBQXRCO0FBQ0UsNkNBQU8sU0FBU08sTUFBTVgsSUFBdEIsR0FERjtBQUVFLHlFQUNNLHVCQUFZLEVBQUNZLE9BQU9DLGdCQUFSLEVBQVosQ0FETjtBQUVFLGlCQUFXQyxRQUZiO0FBR0UsWUFBSyxNQUhQO0FBSUUsWUFBTUgsTUFBTVgsSUFKZDtBQUtFLG1CQUFhVyxNQUFNUixXQUFOLEdBQW9CUSxNQUFNUixXQUExQixHQUF3Q1EsTUFBTVgsSUFMN0Q7QUFNRSxZQUFNVyxNQUFNTCxJQU5kO0FBT0UsWUFBTUssTUFBTUgsSUFQZDtBQVFFO0FBUkYsT0FGRjtBQVlFLDRDQUFNLFdBQVdPLFNBQWpCO0FBWkYsR0FEZTtBQUFBLENBQWpCOztBQWdCQSxJQUFNRCxXQUFXO0FBQ2ZFLFFBQU0sU0FEUztBQUVmQyxVQUFRLEdBRk87QUFHZkMsY0FBWSxRQUhHO0FBSWZDLGNBQVksTUFKRztBQUtmQyxVQUFRLE1BTE87QUFNZkMsZ0JBQWMsZ0JBTkM7QUFPZkMsWUFBVTtBQVBLLGlEQVFQLGlCQVJPLGtEQVNOLGVBVE0sZ0RBVVIsTUFWUSxvREFXSixNQVhJLHVEQVlELE1BWkMsMERBYUUsTUFiRixpREFjUCxPQWRPLGlEQWVQLE1BZk8sZ0RBZ0JSLE1BaEJRLHFEQWlCSCxNQWpCRyxtREFrQkwsTUFsQkssdUNBbUJmLFFBbkJlLEVBbUJMLEVBQUVDLFNBQVMsTUFBWCxFQUFtQkMsU0FBUyxlQUE1QixFQW5CSyx1Q0FvQmYsZUFwQmUsRUFvQkUsRUFBRUMsWUFBWSxPQUFkLEVBcEJGLFNBQWpCOztBQXVCQSxJQUFNWixtQkFBbUIsU0FBekI7O0FBRUEsSUFBTUUsWUFBWSxlQUFJO0FBQ3BCVyxvQkFBa0IsaUJBREU7QUFFcEJDLGlCQUFlLGlCQUZLO0FBR3BCQyxnQkFBYyxpQkFITTtBQUlwQkMsZUFBYSxpQkFKTztBQUtwQkMsY0FBWSxpQkFMUTtBQU1wQkMsV0FBUztBQU5XLENBQUosQ0FBbEI7O0FBU0FyQixTQUFTWCxTQUFULEdBQXFCQSxTQUFyQjtBQUNBVyxTQUFTRCxZQUFULEdBQXdCQSxZQUF4QjtrQkFDZUMsUSIsImZpbGUiOiJUZXh0QXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwbGFjZWhvbGRlciwgY3NzIH0gZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgbmFtZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICBjb2xzOiAgICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIHJvd3M6ICAgICAgICAgUHJvcFR5cGVzLm51bWJlclxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiAgbnVsbCxcbiAgY29sczogICAzMCxcbiAgcm93czogICA1XG59XG5cbmNvbnN0IFRleHRBcmVhID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGV9PlxuICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfSAvPlxuICAgIDx0ZXh0YXJlYVxuICAgICAgey4uLnBsYWNlaG9sZGVyKHtjb2xvcjogcGxhY2Vob2xkZXJDb2xvcn0pfVxuICAgICAgY2xhc3NOYW1lPXt0ZXh0YXJlYX1cbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IHByb3BzLm5hbWV9XG4gICAgICBjb2xzPXtwcm9wcy5jb2xzfVxuICAgICAgcm93cz17cHJvcHMucm93c31cbiAgICAgIHJlcXVpcmVkXG4gICAgLz5cbiAgICA8c3BhbiBjbGFzc05hbWU9e2FuaW1hdGlvbn0vPlxuICA8L2Rpdj5cblxuY29uc3QgdGV4dGFyZWEgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICNmZmYnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgYm94U2hhZG93OiAnbm9uZScsXG4gIE1vekJveFNoYWRvdzogJ25vbmUnLFxuICBXZWJraXRCb3hTaGFkb3c6ICdub25lJyxcbiAgaGVpZ2h0OiAnMTUwcHgnLFxuICByZXNpemU6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbGluZUhlaWdodDogJzE1MCUnLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxuICAnOmZvY3VzJzogeyBvdXRsaW5lOiAnbm9uZScsIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyB9LFxuICAnOmZvY3VzIH4gc3Bhbic6IHsgbWFyZ2luTGVmdDogJy01MHB4JyB9XG59KVxuXG5jb25zdCBwbGFjZWhvbGRlckNvbG9yID0gJyMyNDI0MjQnXG5cbmNvbnN0IGFuaW1hdGlvbiA9IGNzcyh7XG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgY29udGVudDogJycsXG59KVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcblRleHRBcmVhLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcbiJdfQ==