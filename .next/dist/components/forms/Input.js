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
      required: true
    })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJjb2xvciIsInBsYWNlaG9sZGVyQ29sb3IiLCJpbnB1dCIsImFuaW1hdGlvbiIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwiYm94U2hhZG93IiwiTW96Qm94U2hhZG93IiwiV2Via2l0Qm94U2hhZG93Iiwib3V0bGluZSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLFFBQWMsaUJBQVVGLE1BQVYsQ0FBaUJDLFVBRmY7QUFHaEJFLGVBQWMsaUJBQVVILE1BSFI7QUFJaEJJLFNBQWMsaUJBQVVDO0FBSlIsQ0FBbEI7O0FBT0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1ILEtBQXRCO0FBQ0UsNkNBQU8sU0FBU0csTUFBTUwsSUFBdEIsR0FERjtBQUVFLHNFQUNNLHVCQUFZLEVBQUNNLE9BQU9DLGdCQUFSLEVBQVosQ0FETjtBQUVFLFlBQU1GLE1BQU1SLElBRmQ7QUFHRSxZQUFNUSxNQUFNTCxJQUhkO0FBSUUsaUJBQVdRLEtBSmI7QUFLRSxtQkFBYUgsTUFBTUosV0FBTixHQUFvQkksTUFBTUosV0FBMUIsR0FBd0NJLE1BQU1MLElBTDdEO0FBTUU7QUFORixPQUZGO0FBVUUsNENBQU0sV0FBV1MsU0FBakI7QUFWRixHQURZO0FBQUEsQ0FBZDs7QUFjQSxJQUFNRCxRQUFRO0FBQ1pFLFFBQU0sU0FETTtBQUVaQyxVQUFRLEdBRkk7QUFHWkMsY0FBWSxRQUhBO0FBSVpDLGNBQVksTUFKQTtBQUtaQyxVQUFRLE1BTEk7QUFNWkMsZ0JBQWMsZ0JBTkY7QUFPWkMsWUFBVSxLQVBFO0FBUVpDLGFBQVcsTUFSQztBQVNaQyxnQkFBYyxNQVRGO0FBVVpDLG1CQUFpQjtBQVZMLGlEQVdKLGlCQVhJLGtEQVlILGVBWkcsZ0RBYUwsTUFiSyx1Q0FjWixRQWRZLEVBY0YsRUFBRUMsU0FBUyxNQUFYLEVBQW1CQyxTQUFTLGVBQTVCLEVBZEUsdUNBZVosZUFmWSxFQWVLLEVBQUVDLFlBQVksT0FBZCxFQWZMLFNBQWQ7O0FBa0JBLElBQU1mLG1CQUFtQixTQUF6Qjs7QUFFQSxJQUFNRSxZQUFZLGVBQUk7QUFDcEJjLG9CQUFrQixpQkFERTtBQUVwQkMsaUJBQWUsaUJBRks7QUFHcEJDLGdCQUFjLGlCQUhNO0FBSXBCQyxlQUFhLGlCQUpPO0FBS3BCQyxjQUFZLGlCQUxRO0FBTXBCQyxXQUFTO0FBTlcsQ0FBSixDQUFsQjs7QUFTQXhCLE1BQU1SLFNBQU4sR0FBa0JBLFNBQWxCO2tCQUNlUSxLIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBsYWNlaG9sZGVyLCBjc3MgfSBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB0eXBlOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlfT5cbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0gLz5cbiAgICA8aW5wdXRcbiAgICAgIHsuLi5wbGFjZWhvbGRlcih7Y29sb3I6IHBsYWNlaG9sZGVyQ29sb3J9KX1cbiAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgY2xhc3NOYW1lPXtpbnB1dH1cbiAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlciA/IHByb3BzLnBsYWNlaG9sZGVyIDogcHJvcHMubmFtZX1cbiAgICAgIHJlcXVpcmVkXG4gICAgLz5cbiAgICA8c3BhbiBjbGFzc05hbWU9e2FuaW1hdGlvbn0gLz5cbiAgPC9kaXY+XG5cbmNvbnN0IGlucHV0ID0gY3NzKHtcbiAgZm9udDogJ2luaGVyaXQnLFxuICBtYXJnaW46ICcwJyxcbiAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCAjZmZmJyxcbiAgZm9udFNpemU6ICcxZW0nLFxuICBib3hTaGFkb3c6ICdub25lJyxcbiAgTW96Qm94U2hhZG93OiAnbm9uZScsXG4gIFdlYmtpdEJveFNoYWRvdzogJ25vbmUnLFxuICBtYXJnaW46ICcwZW0gMCAxLjg3NWVtIDAnLFxuICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gICc6Zm9jdXMnOiB7IG91dGxpbmU6ICdub25lJywgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnIH0sXG4gICc6Zm9jdXMgfiBzcGFuJzogeyBtYXJnaW5MZWZ0OiAnLTUwcHgnIH1cbn0pXG5cbmNvbnN0IHBsYWNlaG9sZGVyQ29sb3IgPSAnIzI0MjQyNCdcblxuY29uc3QgYW5pbWF0aW9uID0gY3NzKHtcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIE1velRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBNc1RyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBPVHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIHRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBjb250ZW50OiAnJyxcbn0pXG5cbklucHV0LnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiJdfQ==