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
    _react2.default.createElement('textarea', { className: textarea,
      type: 'text',
      name: props.name,
      placeholder: props.placeholder ? props.placeholder : props.name,
      cols: props.cols ? props.cols : 30,
      rows: props.rows ? props.rows : 5,
      required: true }),
    _react2.default.createElement('span', { className: animation })
  );
};

var textarea = (0, _css3.default)((_css = {
  font: 'inherit',
  margin: '0',
  lineHeight: 'normal',
  background: 'none',
  border: 'none',
  borderBottom: 'solid 2px #fff',
  fontSize: '1em'
}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'boxShadow', 'none'), (0, _defineProperty3.default)(_css, 'MozBoxShadow', 'none'), (0, _defineProperty3.default)(_css, 'WebkitBoxShadow', 'none'), (0, _defineProperty3.default)(_css, 'height', '150px'), (0, _defineProperty3.default)(_css, 'resize', 'none'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'lineHeight', '150%'), (0, _defineProperty3.default)(_css, 'overflow', 'auto'), (0, _defineProperty3.default)(_css, ':focus', { outline: 'none', padding: '0 0 0.875em 0' }), (0, _defineProperty3.default)(_css, ':focus ~ span', { marginLeft: '-50px' }), _css));

var animation = (0, _css3.default)({
  WebkitTransition: 'all 0.5s linear',
  MozTransition: 'all 0.5s linear',
  MsTransition: 'all 0.5s linear',
  OTransition: 'all 0.5s linear',
  transition: 'all 0.5s linear',
  content: ''
});

TextArea.propTypes = propTypes;
exports.default = TextArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJhd3MiLCJUZXh0QXJlYSIsInByb3BzIiwidGV4dGFyZWEiLCJyb3dzIiwiYW5pbWF0aW9uIiwiZm9udCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJvdXRsaW5lIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk1zVHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLGVBQWMsaUJBQVVGLE1BRlI7QUFHaEJHLFNBQWMsaUJBQVVDLE1BSFI7QUFJaEJDLFFBQWMsaUJBQVVDLE1BSlI7QUFLaEJDLFFBQWMsaUJBQVVEO0FBTFIsQ0FBbEI7O0FBUUEsSUFBTUUsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1OLEtBQXRCO0FBQ0UsNkNBQU8sU0FBU00sTUFBTVYsSUFBdEIsR0FERjtBQUVFLGdEQUFVLFdBQVdXLFFBQXJCO0FBQ1UsWUFBSyxNQURmO0FBRVUsWUFBTUQsTUFBTVYsSUFGdEI7QUFHVSxtQkFBYVUsTUFBTVAsV0FBTixHQUFvQk8sTUFBTVAsV0FBMUIsR0FBd0NPLE1BQU1WLElBSHJFO0FBSVUsWUFBTVUsTUFBTUosSUFBTixHQUFhSSxNQUFNSixJQUFuQixHQUEwQixFQUoxQztBQUtVLFlBQU1JLE1BQU1FLElBQU4sR0FBYUYsTUFBTUUsSUFBbkIsR0FBMEIsQ0FMMUM7QUFNVSxvQkFOVixHQUZGO0FBVUUsNENBQU0sV0FBV0MsU0FBakI7QUFWRixHQURlO0FBQUEsQ0FBakI7O0FBY0EsSUFBTUYsV0FBVztBQUNmRyxRQUFNLFNBRFM7QUFFZkMsVUFBUSxHQUZPO0FBR2ZDLGNBQVksUUFIRztBQUlmQyxjQUFZLE1BSkc7QUFLZkMsVUFBUSxNQUxPO0FBTWZDLGdCQUFjLGdCQU5DO0FBT2ZDLFlBQVU7QUFQSyxpREFRUCxpQkFSTyxrREFTTixlQVRNLGdEQVVSLE1BVlEsb0RBV0osTUFYSSx1REFZRCxNQVpDLDBEQWFFLE1BYkYsaURBY1AsT0FkTyxpREFlUCxNQWZPLGdEQWdCUixNQWhCUSxxREFpQkgsTUFqQkcsbURBa0JMLE1BbEJLLHVDQW1CZixRQW5CZSxFQW1CTCxFQUFFQyxTQUFTLE1BQVgsRUFBbUJDLFNBQVMsZUFBNUIsRUFuQkssdUNBb0JmLGVBcEJlLEVBb0JFLEVBQUVDLFlBQVksT0FBZCxFQXBCRixTQUFqQjs7QUF1QkEsSUFBTVYsWUFBWSxtQkFBSTtBQUNwQlcsb0JBQWtCLGlCQURFO0FBRXBCQyxpQkFBZSxpQkFGSztBQUdwQkMsZ0JBQWMsaUJBSE07QUFJcEJDLGVBQWEsaUJBSk87QUFLcEJDLGNBQVksaUJBTFE7QUFNcEJDLFdBQVM7QUFOVyxDQUFKLENBQWxCOztBQVNBcEIsU0FBU1YsU0FBVCxHQUFxQkEsU0FBckI7a0JBQ2VVLFEiLCJmaWxlIjoiVGV4dEFyZWEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBuYW1lOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2Vob2xkZXI6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbHM6ICAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgcmF3czogICAgICAgICBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IFRleHRBcmVhID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGV9PlxuICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT48L2xhYmVsPlxuICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e3RleHRhcmVhfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlciA/IHByb3BzLnBsYWNlaG9sZGVyIDogcHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgY29scz17cHJvcHMuY29scyA/IHByb3BzLmNvbHMgOiAzMH1cbiAgICAgICAgICAgICAgcm93cz17cHJvcHMucm93cyA/IHByb3BzLnJvd3MgOiA1fVxuICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICA8L3RleHRhcmVhPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17YW5pbWF0aW9ufS8+XG4gIDwvZGl2PlxuXG5jb25zdCB0ZXh0YXJlYSA9IGNzcyh7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWFyZ2luOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJCb3R0b206ICdzb2xpZCAycHggI2ZmZicsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcbiAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBib3hTaGFkb3c6ICdub25lJyxcbiAgTW96Qm94U2hhZG93OiAnbm9uZScsXG4gIFdlYmtpdEJveFNoYWRvdzogJ25vbmUnLFxuICBoZWlnaHQ6ICcxNTBweCcsXG4gIHJlc2l6ZTogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBsaW5lSGVpZ2h0OiAnMTUwJScsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gICc6Zm9jdXMnOiB7IG91dGxpbmU6ICdub25lJywgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnIH0sXG4gICc6Zm9jdXMgfiBzcGFuJzogeyBtYXJnaW5MZWZ0OiAnLTUwcHgnIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvbiA9IGNzcyh7XG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgY29udGVudDogJycsXG59KVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG4iXX0=