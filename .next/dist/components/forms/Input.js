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
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  placeholder: _react.PropTypes.string,
  style: _react.PropTypes.object
};

var Input = function Input(props) {
  return _react2.default.createElement(
    'div',
    { className: props.style },
    _react2.default.createElement('label', { htmlFor: props.name }),
    _react2.default.createElement('input', (0, _extends3.default)({}, (0, _css2.placeholder)({ color: placeholderColor }), {
      type: props.type,
      name: props.name,
      className: input,
      placeholder: props.placeholder ? props.placeholder : props.name,
      required: true })),
    _react2.default.createElement('span', { className: animation })
  );
};

var input = (0, _css2.css)((_css = {
  font: 'inherit',
  margin: '0',
  lineHeight: 'normal',
  background: 'none',
  border: 'none',
  borderBottom: 'solid 2px #fff',
  fontSize: '1em',
  boxShadow: 'none',
  MozBoxShadow: 'none',
  WebkitBoxShadow: 'none'
}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, ':focus', { outline: 'none', padding: '0 0 0.875em 0' }), (0, _defineProperty3.default)(_css, ':focus ~ span', { marginLeft: '-50px' }), _css));

var placeholderColor = '#242424';

var animation = (0, _css2.css)({
  WebkitTransition: 'all 0.5s linear',
  MozTransition: 'all 0.5s linear',
  MsTransition: 'all 0.5s linear',
  OTransition: 'all 0.5s linear',
  transition: 'all 0.5s linear',
  content: ''
});

Input.propTypes = propTypes;
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJjb2xvciIsInBsYWNlaG9sZGVyQ29sb3IiLCJpbnB1dCIsImFuaW1hdGlvbiIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwiYm94U2hhZG93IiwiTW96Qm94U2hhZG93IiwiV2Via2l0Qm94U2hhZG93Iiwib3V0bGluZSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLFFBQWMsaUJBQVVGLE1BQVYsQ0FBaUJDLFVBRmY7QUFHaEJFLGVBQWMsaUJBQVVILE1BSFI7QUFJaEJJLFNBQWMsaUJBQVVDO0FBSlIsQ0FBbEI7O0FBT0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1ILEtBQXRCO0FBQ0UsNkNBQU8sU0FBU0csTUFBTUwsSUFBdEIsR0FERjtBQUVFLHNFQUFXLHVCQUFZLEVBQUNNLE9BQU9DLGdCQUFSLEVBQVosQ0FBWDtBQUNPLFlBQU1GLE1BQU1SLElBRG5CO0FBRU8sWUFBTVEsTUFBTUwsSUFGbkI7QUFHTyxpQkFBV1EsS0FIbEI7QUFJTyxtQkFBYUgsTUFBTUosV0FBTixHQUFvQkksTUFBTUosV0FBMUIsR0FBd0NJLE1BQU1MLElBSmxFO0FBS08sb0JBTFAsSUFGRjtBQVFFLDRDQUFNLFdBQVdTLFNBQWpCO0FBUkYsR0FEWTtBQUFBLENBQWQ7O0FBWUEsSUFBTUQsUUFBUTtBQUNaRSxRQUFNLFNBRE07QUFFWkMsVUFBUSxHQUZJO0FBR1pDLGNBQVksUUFIQTtBQUlaQyxjQUFZLE1BSkE7QUFLWkMsVUFBUSxNQUxJO0FBTVpDLGdCQUFjLGdCQU5GO0FBT1pDLFlBQVUsS0FQRTtBQVFaQyxhQUFXLE1BUkM7QUFTWkMsZ0JBQWMsTUFURjtBQVVaQyxtQkFBaUI7QUFWTCxpREFXSixpQkFYSSxrREFZSCxlQVpHLGdEQWFMLE1BYkssdUNBY1osUUFkWSxFQWNGLEVBQUVDLFNBQVMsTUFBWCxFQUFtQkMsU0FBUyxlQUE1QixFQWRFLHVDQWVaLGVBZlksRUFlSyxFQUFFQyxZQUFZLE9BQWQsRUFmTCxTQUFkOztBQWtCQSxJQUFNZixtQkFBbUIsU0FBekI7O0FBRUEsSUFBTUUsWUFBWSxlQUFJO0FBQ3BCYyxvQkFBa0IsaUJBREU7QUFFcEJDLGlCQUFlLGlCQUZLO0FBR3BCQyxnQkFBYyxpQkFITTtBQUlwQkMsZUFBYSxpQkFKTztBQUtwQkMsY0FBWSxpQkFMUTtBQU1wQkMsV0FBUztBQU5XLENBQUosQ0FBbEI7O0FBU0F4QixNQUFNUixTQUFOLEdBQWtCQSxTQUFsQjtrQkFDZVEsSyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwbGFjZWhvbGRlciwgY3NzIH0gZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdHlwZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuY29uc3QgSW5wdXQgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPGlucHV0IHsuLi5wbGFjZWhvbGRlcih7Y29sb3I6IHBsYWNlaG9sZGVyQ29sb3J9KX1cbiAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cbiAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dH1cbiAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17YW5pbWF0aW9ufSAvPlxuICA8L2Rpdj5cblxuY29uc3QgaW5wdXQgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICNmZmYnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIGJveFNoYWRvdzogJ25vbmUnLFxuICBNb3pCb3hTaGFkb3c6ICdub25lJyxcbiAgV2Via2l0Qm94U2hhZG93OiAnbm9uZScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJzpmb2N1cyc6IHsgb3V0bGluZTogJ25vbmUnLCBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcgfSxcbiAgJzpmb2N1cyB+IHNwYW4nOiB7IG1hcmdpbkxlZnQ6ICctNTBweCcgfVxufSlcblxuY29uc3QgcGxhY2Vob2xkZXJDb2xvciA9ICcjMjQyNDI0J1xuXG5jb25zdCBhbmltYXRpb24gPSBjc3Moe1xuICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgTW96VHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIE1zVHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIE9UcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIGNvbnRlbnQ6ICcnLFxufSlcblxuSW5wdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIl19