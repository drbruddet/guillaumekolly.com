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
  fontSize: '1em'
}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, ':focus', {
  outline: 'none',
  padding: '0 0 0.875em 0'
}), (0, _defineProperty3.default)(_css, ':focus ~ span', {
  marginLeft: '-50px'
}), _css));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJpbnB1dCIsImFuaW1hdGlvbiIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwib3V0bGluZSIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxRQUFjLGlCQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRWhCQyxRQUFjLGlCQUFVRixNQUFWLENBQWlCQyxVQUZmO0FBR2hCRSxlQUFjLGlCQUFVSCxNQUhSO0FBSWhCSSxTQUFjLGlCQUFVQztBQUpSLENBQWxCOztBQU9BLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDWjtBQUFBO0FBQUEsTUFBSyxXQUFXQSxNQUFNSCxLQUF0QjtBQUNFLDZDQUFPLFNBQVNHLE1BQU1MLElBQXRCLEdBREY7QUFFRSw2Q0FBTyxNQUFNSyxNQUFNUixJQUFuQjtBQUNPLFlBQU1RLE1BQU1MLElBRG5CO0FBRU8saUJBQVdNLEtBRmxCO0FBR08sbUJBQWFELE1BQU1KLFdBQU4sR0FBb0JJLE1BQU1KLFdBQTFCLEdBQXdDSSxNQUFNTCxJQUhsRTtBQUlPLG9CQUpQLEdBRkY7QUFPTyw0Q0FBTSxXQUFXTyxTQUFqQjtBQVBQLEdBRFk7QUFBQSxDQUFkOztBQVdBLElBQU1ELFFBQVE7QUFDWkUsUUFBTSxTQURNO0FBRVpDLFVBQVEsR0FGSTtBQUdaQyxjQUFZLFFBSEE7QUFJWkMsY0FBWSxNQUpBO0FBS1pDLFVBQVEsTUFMSTtBQU1aQyxnQkFBYyxnQkFORjtBQU9aQyxZQUFVO0FBUEUsaURBUUosaUJBUkksa0RBU0gsZUFURyxnREFVTCxNQVZLLHVDQVdaLFFBWFksRUFXRjtBQUNSQyxXQUFTLE1BREQ7QUFFUkMsV0FBUztBQUZELENBWEUsdUNBZVosZUFmWSxFQWVLO0FBQ2ZDLGNBQVk7QUFERyxDQWZMLFNBQWQ7O0FBb0JBLElBQU1WLFlBQVksbUJBQUk7QUFDcEJXLG9CQUFrQixpQkFERTtBQUVwQkMsaUJBQWUsaUJBRks7QUFHcEJDLGdCQUFjLGlCQUhNO0FBSXBCQyxlQUFhLGlCQUpPO0FBS3BCQyxjQUFZLGlCQUxRO0FBTXBCQyxXQUFTO0FBTlcsQ0FBSixDQUFsQjs7QUFTQW5CLE1BQU1SLFNBQU4sR0FBa0JBLFNBQWxCO2tCQUNlUSxLIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdHlwZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuY29uc3QgSW5wdXQgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXR9XG4gICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlciA/IHByb3BzLnBsYWNlaG9sZGVyIDogcHJvcHMubmFtZX1cbiAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YW5pbWF0aW9ufSAvPlxuICA8L2Rpdj5cblxuY29uc3QgaW5wdXQgPSBjc3Moe1xuICBmb250OiAnaW5oZXJpdCcsXG4gIG1hcmdpbjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICNmZmYnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIG1hcmdpbjogJzBlbSAwIDEuODc1ZW0gMCcsXG4gIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9LFxuICAnOmZvY3VzIH4gc3Bhbic6IHtcbiAgICBtYXJnaW5MZWZ0OiAnLTUwcHgnXG4gIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvbiA9IGNzcyh7XG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgbGluZWFyJyxcbiAgY29udGVudDogJycsXG59KVxuXG5JbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iXX0=