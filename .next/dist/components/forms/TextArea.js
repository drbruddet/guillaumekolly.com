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
  raws: _react.PropTypes.number
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
      cols: props.cols ? props.cols : 30,
      rows: props.rows ? props.rows : 5,
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
exports.default = TextArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJhd3MiLCJUZXh0QXJlYSIsInByb3BzIiwiY29sb3IiLCJwbGFjZWhvbGRlckNvbG9yIiwidGV4dGFyZWEiLCJyb3dzIiwiYW5pbWF0aW9uIiwiZm9udCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJvdXRsaW5lIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk1zVHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsUUFBYyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEZjtBQUVoQkMsZUFBYyxpQkFBVUYsTUFGUjtBQUdoQkcsU0FBYyxpQkFBVUMsTUFIUjtBQUloQkMsUUFBYyxpQkFBVUMsTUFKUjtBQUtoQkMsUUFBYyxpQkFBVUQ7QUFMUixDQUFsQjs7QUFRQSxJQUFNRSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQUssV0FBV0EsTUFBTU4sS0FBdEI7QUFDRSw2Q0FBTyxTQUFTTSxNQUFNVixJQUF0QixHQURGO0FBRUUseUVBQ00sdUJBQVksRUFBQ1csT0FBT0MsZ0JBQVIsRUFBWixDQUROO0FBRUUsaUJBQVdDLFFBRmI7QUFHRSxZQUFLLE1BSFA7QUFJRSxZQUFNSCxNQUFNVixJQUpkO0FBS0UsbUJBQWFVLE1BQU1QLFdBQU4sR0FBb0JPLE1BQU1QLFdBQTFCLEdBQXdDTyxNQUFNVixJQUw3RDtBQU1FLFlBQU1VLE1BQU1KLElBQU4sR0FBYUksTUFBTUosSUFBbkIsR0FBMEIsRUFObEM7QUFPRSxZQUFNSSxNQUFNSSxJQUFOLEdBQWFKLE1BQU1JLElBQW5CLEdBQTBCLENBUGxDO0FBUUU7QUFSRixPQUZGO0FBWUUsNENBQU0sV0FBV0MsU0FBakI7QUFaRixHQURlO0FBQUEsQ0FBakI7O0FBZ0JBLElBQU1GLFdBQVc7QUFDZkcsUUFBTSxTQURTO0FBRWZDLFVBQVEsR0FGTztBQUdmQyxjQUFZLFFBSEc7QUFJZkMsY0FBWSxNQUpHO0FBS2ZDLFVBQVEsTUFMTztBQU1mQyxnQkFBYyxnQkFOQztBQU9mQyxZQUFVO0FBUEssaURBUVAsaUJBUk8sa0RBU04sZUFUTSxnREFVUixNQVZRLG9EQVdKLE1BWEksdURBWUQsTUFaQywwREFhRSxNQWJGLGlEQWNQLE9BZE8saURBZVAsTUFmTyxnREFnQlIsTUFoQlEscURBaUJILE1BakJHLG1EQWtCTCxNQWxCSyx1Q0FtQmYsUUFuQmUsRUFtQkwsRUFBRUMsU0FBUyxNQUFYLEVBQW1CQyxTQUFTLGVBQTVCLEVBbkJLLHVDQW9CZixlQXBCZSxFQW9CRSxFQUFFQyxZQUFZLE9BQWQsRUFwQkYsU0FBakI7O0FBdUJBLElBQU1iLG1CQUFtQixTQUF6Qjs7QUFFQSxJQUFNRyxZQUFZLGVBQUk7QUFDcEJXLG9CQUFrQixpQkFERTtBQUVwQkMsaUJBQWUsaUJBRks7QUFHcEJDLGdCQUFjLGlCQUhNO0FBSXBCQyxlQUFhLGlCQUpPO0FBS3BCQyxjQUFZLGlCQUxRO0FBTXBCQyxXQUFTO0FBTlcsQ0FBSixDQUFsQjs7QUFTQXRCLFNBQVNWLFNBQVQsR0FBcUJBLFNBQXJCO2tCQUNlVSxRIiwiZmlsZSI6IlRleHRBcmVhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBsYWNlaG9sZGVyLCBjc3MgfSBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBuYW1lOiAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGxhY2Vob2xkZXI6ICBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbHM6ICAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgcmF3czogICAgICAgICBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IFRleHRBcmVhID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGV9PlxuICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT48L2xhYmVsPlxuICAgIDx0ZXh0YXJlYVxuICAgICAgey4uLnBsYWNlaG9sZGVyKHtjb2xvcjogcGxhY2Vob2xkZXJDb2xvcn0pfVxuICAgICAgY2xhc3NOYW1lPXt0ZXh0YXJlYX1cbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IHByb3BzLm5hbWV9XG4gICAgICBjb2xzPXtwcm9wcy5jb2xzID8gcHJvcHMuY29scyA6IDMwfVxuICAgICAgcm93cz17cHJvcHMucm93cyA/IHByb3BzLnJvd3MgOiA1fVxuICAgICAgcmVxdWlyZWRcbiAgICAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17YW5pbWF0aW9ufS8+XG4gIDwvZGl2PlxuXG5jb25zdCB0ZXh0YXJlYSA9IGNzcyh7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWFyZ2luOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJCb3R0b206ICdzb2xpZCAycHggI2ZmZicsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcbiAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBib3hTaGFkb3c6ICdub25lJyxcbiAgTW96Qm94U2hhZG93OiAnbm9uZScsXG4gIFdlYmtpdEJveFNoYWRvdzogJ25vbmUnLFxuICBoZWlnaHQ6ICcxNTBweCcsXG4gIHJlc2l6ZTogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBsaW5lSGVpZ2h0OiAnMTUwJScsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gICc6Zm9jdXMnOiB7IG91dGxpbmU6ICdub25lJywgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnIH0sXG4gICc6Zm9jdXMgfiBzcGFuJzogeyBtYXJnaW5MZWZ0OiAnLTUwcHgnIH1cbn0pXG5cbmNvbnN0IHBsYWNlaG9sZGVyQ29sb3IgPSAnIzI0MjQyNCdcblxuY29uc3QgYW5pbWF0aW9uID0gY3NzKHtcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIE1velRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBNc1RyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBPVHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIHRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBjb250ZW50OiAnJyxcbn0pXG5cblRleHRBcmVhLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcbiJdfQ==