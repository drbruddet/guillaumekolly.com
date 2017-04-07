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
      required: true }),
    _react2.default.createElement('span', { className: animation })
  );
};

var input = (0, _css3.default)((_css = {
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

var animation = (0, _css3.default)({
  WebkitTransition: 'all 0.5s linear',
  MozTransition: 'all 0.5s linear',
  MsTransition: 'all 0.5s linear',
  OTransition: 'all 0.5s linear',
  transition: 'all 0.5s linear',
  content: ''
});

Input.propTypes = propTypes;
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJpbnB1dCIsImFuaW1hdGlvbiIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwiYm94U2hhZG93IiwiTW96Qm94U2hhZG93IiwiV2Via2l0Qm94U2hhZG93Iiwib3V0bGluZSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxRQUFjLGlCQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRWhCQyxRQUFjLGlCQUFVRixNQUFWLENBQWlCQyxVQUZmO0FBR2hCRSxlQUFjLGlCQUFVSCxNQUhSO0FBSWhCSSxTQUFjLGlCQUFVQztBQUpSLENBQWxCOztBQU9BLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDWjtBQUFBO0FBQUEsTUFBSyxXQUFXQSxNQUFNSCxLQUF0QjtBQUNFLDZDQUFPLFNBQVNHLE1BQU1MLElBQXRCLEdBREY7QUFFRSw2Q0FBTyxNQUFNSyxNQUFNUixJQUFuQjtBQUNPLFlBQU1RLE1BQU1MLElBRG5CO0FBRU8saUJBQVdNLEtBRmxCO0FBR08sbUJBQWFELE1BQU1KLFdBQU4sR0FBb0JJLE1BQU1KLFdBQTFCLEdBQXdDSSxNQUFNTCxJQUhsRTtBQUlPLG9CQUpQLEdBRkY7QUFPRSw0Q0FBTSxXQUFXTyxTQUFqQjtBQVBGLEdBRFk7QUFBQSxDQUFkOztBQVdBLElBQU1ELFFBQVE7QUFDWkUsUUFBTSxTQURNO0FBRVpDLFVBQVEsR0FGSTtBQUdaQyxjQUFZLFFBSEE7QUFJWkMsY0FBWSxNQUpBO0FBS1pDLFVBQVEsTUFMSTtBQU1aQyxnQkFBYyxnQkFORjtBQU9aQyxZQUFVLEtBUEU7QUFRWkMsYUFBVyxNQVJDO0FBU1pDLGdCQUFjLE1BVEY7QUFVWkMsbUJBQWlCO0FBVkwsaURBV0osaUJBWEksa0RBWUgsZUFaRyxnREFhTCxNQWJLLHVDQWNaLFFBZFksRUFjRixFQUFFQyxTQUFTLE1BQVgsRUFBbUJDLFNBQVMsZUFBNUIsRUFkRSx1Q0FlWixlQWZZLEVBZUssRUFBRUMsWUFBWSxPQUFkLEVBZkwsU0FBZDs7QUFrQkEsSUFBTWIsWUFBWSxtQkFBSTtBQUNwQmMsb0JBQWtCLGlCQURFO0FBRXBCQyxpQkFBZSxpQkFGSztBQUdwQkMsZ0JBQWMsaUJBSE07QUFJcEJDLGVBQWEsaUJBSk87QUFLcEJDLGNBQVksaUJBTFE7QUFNcEJDLFdBQVM7QUFOVyxDQUFKLENBQWxCOztBQVNBdEIsTUFBTVIsU0FBTixHQUFrQkEsU0FBbEI7a0JBQ2VRLEsiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB0eXBlOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlfT5cbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT17cHJvcHMudHlwZX1cbiAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dH1cbiAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17YW5pbWF0aW9ufSAvPlxuICA8L2Rpdj5cblxuY29uc3QgaW5wdXQgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICNmZmYnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIGJveFNoYWRvdzogJ25vbmUnLFxuICBNb3pCb3hTaGFkb3c6ICdub25lJyxcbiAgV2Via2l0Qm94U2hhZG93OiAnbm9uZScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJzpmb2N1cyc6IHsgb3V0bGluZTogJ25vbmUnLCBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcgfSxcbiAgJzpmb2N1cyB+IHNwYW4nOiB7IG1hcmdpbkxlZnQ6ICctNTBweCcgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uID0gY3NzKHtcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIE1velRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBNc1RyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBPVHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIHRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBjb250ZW50OiAnJyxcbn0pXG5cbklucHV0LnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiJdfQ==