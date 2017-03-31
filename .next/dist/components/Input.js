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
      placeholder: props.placeholder ? props.placeholder : props.name
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJpbnB1dCIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwib3V0bGluZSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLFFBQWMsaUJBQVVGLE1BQVYsQ0FBaUJDLFVBRmY7QUFHaEJFLGVBQWMsaUJBQVVILE1BSFI7QUFJaEJJLFNBQWMsaUJBQVVDO0FBSlIsQ0FBbEI7O0FBT0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1ILEtBQXRCO0FBQ0UsNkNBQU8sU0FBU0csTUFBTUwsSUFBdEIsR0FERjtBQUVFLDZDQUFRLE1BQU1LLE1BQU1SLElBQXBCO0FBQ1EsWUFBTVEsTUFBTUwsSUFEcEI7QUFFUSxpQkFBV00sS0FGbkI7QUFHUSxtQkFBYUQsTUFBTUosV0FBTixHQUFvQkksTUFBTUosV0FBMUIsR0FBd0NJLE1BQU1MO0FBSG5FO0FBRkYsR0FEWTtBQUFBLENBQWQ7O0FBVUEsSUFBTU0sUUFBUTtBQUNaQyxRQUFNLFNBRE07QUFFWkMsVUFBUSxHQUZJO0FBR1pDLGNBQVksUUFIQTtBQUlaQyxjQUFZLE1BSkE7QUFLWkMsVUFBUSxNQUxJO0FBTVpDLGdCQUFjLGdCQU5GO0FBT1pDLFlBQVU7QUFQRSxpREFRSixpQkFSSSxrREFTSCxlQVRHLGdEQVVMLE1BVkssdUNBV1osUUFYWSxFQVdGO0FBQ1JDLFdBQVMsTUFERDtBQUVSQyxXQUFTO0FBRkQsQ0FYRSxTQUFkOztBQWlCQVgsTUFBTVIsU0FBTixHQUFrQkEsU0FBbEI7a0JBQ2VRLEsiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB0eXBlOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlfT5cbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+PC9sYWJlbD5cbiAgICA8aW5wdXQgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlciA/IHByb3BzLnBsYWNlaG9sZGVyIDogcHJvcHMubmFtZX1cbiAgICAvPlxuICA8L2Rpdj5cblxuY29uc3QgaW5wdXQgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICNmZmYnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9XG59KVxuXG5JbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iXX0=