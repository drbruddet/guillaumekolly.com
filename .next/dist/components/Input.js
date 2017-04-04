'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _css;

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css3 = _interopRequireDefault(_css2);

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
    _react2.default.createElement('input', { type: props.type,
      name: props.name,
      className: input,
      placeholder: props.placeholder ? props.placeholder : props.name,
      required: true })
  );
};

var input = (0, _css3.default)((_css = {
  font: 'inherit',
  margin: '0',
  lineHeight: 'normal',
  background: 'none',
  border: 'none',
  borderBottom: 'solid 2px #fff',
  fontSize: '1em'
}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, ':focus', {
  outline: 'none',
  padding: '0 0 0.875em 0'
}), _css));

Input.propTypes = propTypes;
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJpbnB1dCIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwib3V0bGluZSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLFFBQWMsaUJBQVVGLE1BQVYsQ0FBaUJDLFVBRmY7QUFHaEJFLGVBQWMsaUJBQVVILE1BSFI7QUFJaEJJLFNBQWMsaUJBQVVDO0FBSlIsQ0FBbEI7O0FBT0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1ILEtBQXRCO0FBQ0UsNkNBQU8sU0FBU0csTUFBTUwsSUFBdEIsR0FERjtBQUVFLDZDQUFPLE1BQU1LLE1BQU1SLElBQW5CO0FBQ08sWUFBTVEsTUFBTUwsSUFEbkI7QUFFTyxpQkFBV00sS0FGbEI7QUFHTyxtQkFBYUQsTUFBTUosV0FBTixHQUFvQkksTUFBTUosV0FBMUIsR0FBd0NJLE1BQU1MLElBSGxFO0FBSU8sb0JBSlA7QUFGRixHQURZO0FBQUEsQ0FBZDs7QUFVQSxJQUFNTSxRQUFRO0FBQ1pDLFFBQU0sU0FETTtBQUVaQyxVQUFRLEdBRkk7QUFHWkMsY0FBWSxRQUhBO0FBSVpDLGNBQVksTUFKQTtBQUtaQyxVQUFRLE1BTEk7QUFNWkMsZ0JBQWMsZ0JBTkY7QUFPWkMsWUFBVTtBQVBFLGlEQVFKLGlCQVJJLGtEQVNILGVBVEcsZ0RBVUwsTUFWSyx1Q0FXWixRQVhZLEVBV0Y7QUFDUkMsV0FBUyxNQUREO0FBRVJDLFdBQVM7QUFGRCxDQVhFLFNBQWQ7O0FBaUJBWCxNQUFNUixTQUFOLEdBQWtCQSxTQUFsQjtrQkFDZVEsSyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHR5cGU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2Vob2xkZXI6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG59XG5cbmNvbnN0IElucHV0ID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGV9PlxuICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT48L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPXtwcm9wcy50eXBlfVxuICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0fVxuICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IHByb3BzLm5hbWV9XG4gICAgICAgICAgIHJlcXVpcmVkIC8+XG4gIDwvZGl2PlxuXG5jb25zdCBpbnB1dCA9IGNzcyh7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWFyZ2luOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJCb3R0b206ICdzb2xpZCAycHggI2ZmZicsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcbiAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB3aWR0aDogJzEwMCUnLFxuICAnOmZvY3VzJzoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIH1cbn0pXG5cbklucHV0LnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiJdfQ==