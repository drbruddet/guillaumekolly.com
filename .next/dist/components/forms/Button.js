'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  type: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};

var Button = function Button(props) {
  return _react2.default.createElement('input', {
    type: props.type,
    value: props.value,
    className: (0, _css2.default)(button, props.style)
  });
};

var button = (0, _css2.default)({
  color: '#000',
  float: 'left',
  padding: '15px 5px',
  border: '4px solid #fff',
  background: 'transparent',
  letterSpacing: '0.12em',
  width: '100%',
  fontSize: '1.3em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  WebkitTransition: 'all 600ms',
  MozTransition: 'all 600ms',
  OTransition: 'all 600ms',
  MsTransition: 'all 600ms',
  transition: 'all 600ms',
  ':hover': { backgroundColor: 'rgba(0,0,0,0)', color: '#fff' }
});

Button.propTypes = propTypes;
exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInR5cGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJzdHlsZSIsIm9iamVjdCIsIkJ1dHRvbiIsInByb3BzIiwiYnV0dG9uIiwiY29sb3IiLCJmbG9hdCIsInBhZGRpbmciLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwibGV0dGVyU3BhY2luZyIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxRQUFRLGlCQUFVQyxNQUFWLENBQWlCQyxVQURUO0FBRWhCQyxTQUFRLGlCQUFVRixNQUFWLENBQWlCQyxVQUZUO0FBR2hCRSxTQUFRLGlCQUFVQztBQUhGLENBQWxCOztBQU1BLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUNFLFVBQU1BLE1BQU1QLElBRGQ7QUFFRSxXQUFPTyxNQUFNSixLQUZmO0FBR0UsZUFBVyxtQkFBSUssTUFBSixFQUFZRCxNQUFNSCxLQUFsQjtBQUhiLElBRGE7QUFBQSxDQUFmOztBQU9BLElBQU1JLFNBQVMsbUJBQUk7QUFDakJDLFNBQU8sTUFEVTtBQUVqQkMsU0FBTyxNQUZVO0FBR2pCQyxXQUFTLFVBSFE7QUFJakJDLFVBQVEsZ0JBSlM7QUFLakJDLGNBQVksYUFMSztBQU1qQkMsaUJBQWUsUUFORTtBQU9qQkMsU0FBTyxNQVBVO0FBUWpCQyxZQUFVLE9BUk87QUFTakJDLGNBQVksTUFUSztBQVVqQkMsaUJBQWUsV0FWRTtBQVdqQkMsVUFBUSxTQVhTO0FBWWpCQyxvQkFBa0IsV0FaRDtBQWFqQkMsaUJBQWUsV0FiRTtBQWNqQkMsZUFBYSxXQWRJO0FBZWpCQyxnQkFBYyxXQWZHO0FBZ0JqQkMsY0FBWSxXQWhCSztBQWlCakIsWUFBVSxFQUFFQyxpQkFBaUIsZUFBbkIsRUFBb0NoQixPQUFPLE1BQTNDO0FBakJPLENBQUosQ0FBZjs7QUFvQkFILE9BQU9QLFNBQVAsR0FBbUJBLFNBQW5CO2tCQUNlTyxNIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHR5cGU6ICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6ICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+XG4gIDxpbnB1dFxuICAgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgIGNsYXNzTmFtZT17Y3NzKGJ1dHRvbiwgcHJvcHMuc3R5bGUpfVxuICAvPlxuXG5jb25zdCBidXR0b24gPSBjc3Moe1xuICBjb2xvcjogJyMwMDAnLFxuICBmbG9hdDogJ2xlZnQnLFxuICBwYWRkaW5nOiAnMTVweCA1cHgnLFxuICBib3JkZXI6ICc0cHggc29saWQgI2ZmZicsXG4gIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gIGxldHRlclNwYWNpbmc6ICcwLjEyZW0nLFxuICB3aWR0aDogJzEwMCUnLFxuICBmb250U2l6ZTogJzEuM2VtJyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICBNc1RyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICB0cmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgJzpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsIGNvbG9yOiAnI2ZmZicgfVxufSlcblxuQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0=