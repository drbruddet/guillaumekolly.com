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

var _Theme = require('../layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  item: _react.PropTypes.object.isRequired,
  style: _react.PropTypes.object
};

var TimelineItem = function TimelineItem(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _css3.default)(timelineBlock, props.side) },
    _react2.default.createElement('div', { className: (0, _css3.default)(marker, props.style.marker) }),
    _react2.default.createElement(
      'div',
      { className: timelineContent },
      _react2.default.createElement(
        'h3',
        { className: (0, _css3.default)(title, props.style.title) },
        props.item.title
      ),
      _react2.default.createElement(
        'span',
        { className: (0, _css3.default)(subtitle, props.style.subtitle) },
        props.item.subtitle
      ),
      _react2.default.createElement(
        'p',
        { className: (0, _css3.default)(description, props.style.description) },
        props.item.description
      )
    )
  );
};

var timelineBlock = (0, _css3.default)((_css = {
  width: '-webkit-calc(50% + 8px)'
}, (0, _defineProperty3.default)(_css, 'width', '-moz-calc(50% + 8px)'), (0, _defineProperty3.default)(_css, 'width', 'calc(50% + 8px)'), (0, _defineProperty3.default)(_css, 'display', '-webkit-box'), (0, _defineProperty3.default)(_css, 'display', '-webkit-flex'), (0, _defineProperty3.default)(_css, 'display', '-moz-box'), (0, _defineProperty3.default)(_css, 'display', 'flex'), (0, _defineProperty3.default)(_css, 'WebkitBoxPack', 'justify'), (0, _defineProperty3.default)(_css, 'WebkitJustifyContent', 'space-between'), (0, _defineProperty3.default)(_css, 'MozBoxPack', 'justify'), (0, _defineProperty3.default)(_css, 'justifyContent', 'space-between'), (0, _defineProperty3.default)(_css, 'clear', 'both'), (0, _defineProperty3.default)(_css, '@media screen and (max-width: 768px)', {
  marginBottom: '30px',
  width: '100%'
}), _css));

var marker = (0, _css3.default)({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  border: '2px solid #F5F7FA',
  background: '#000',
  marginTop: '10px',
  zIndex: '888'
});

var timelineContent = (0, _css3.default)({
  width: '95%',
  padding: '0 15px'
});

var title = (0, _css3.default)({
  marginTop: '5px',
  marginBottom: '5px',
  fontSize: '25px',
  fontWeight: '500',
  color: '#000'
});

var subtitle = (0, _css3.default)({
  fontSize: '15px',
  color: '#000'
});

var description = (0, _css3.default)({
  fontSize: '14px',
  lineHeight: '1.5em',
  wordSpacing: '1px',
  color: '#000'
});

TimelineItem.propTypes = propTypes;
exports.default = TimelineItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVJdGVtLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsIml0ZW0iLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3R5bGUiLCJUaW1lbGluZUl0ZW0iLCJwcm9wcyIsInRpbWVsaW5lQmxvY2siLCJzaWRlIiwibWFya2VyIiwidGltZWxpbmVDb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwiekluZGV4IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwibGluZUhlaWdodCIsIndvcmRTcGFjaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxRQUFNLGlCQUFVQyxNQUFWLENBQWlCQyxVQURQO0FBRWhCQyxTQUFPLGlCQUFVRjtBQUZELENBQWxCOztBQUtBLElBQU1HLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsU0FDbkI7QUFBQTtBQUFBLE1BQUssV0FBVyxtQkFBSUMsYUFBSixFQUFtQkQsTUFBTUUsSUFBekIsQ0FBaEI7QUFDRSwyQ0FBSyxXQUFXLG1CQUFJQyxNQUFKLEVBQVlILE1BQU1GLEtBQU4sQ0FBWUssTUFBeEIsQ0FBaEIsR0FERjtBQUVFO0FBQUE7QUFBQSxRQUFLLFdBQVdDLGVBQWhCO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVyxtQkFBSUMsS0FBSixFQUFXTCxNQUFNRixLQUFOLENBQVlPLEtBQXZCLENBQWY7QUFBK0NMLGNBQU1MLElBQU4sQ0FBV1U7QUFBMUQsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFNLFdBQVcsbUJBQUlDLFFBQUosRUFBY04sTUFBTUYsS0FBTixDQUFZUSxRQUExQixDQUFqQjtBQUF1RE4sY0FBTUwsSUFBTixDQUFXVztBQUFsRSxPQUZGO0FBR0U7QUFBQTtBQUFBLFVBQUcsV0FBVyxtQkFBSUMsV0FBSixFQUFpQlAsTUFBTUYsS0FBTixDQUFZUyxXQUE3QixDQUFkO0FBQTBEUCxjQUFNTCxJQUFOLENBQVdZO0FBQXJFO0FBSEY7QUFGRixHQURtQjtBQUFBLENBQXJCOztBQVVBLElBQU1OLGdCQUFnQjtBQUNwQk8sU0FBTztBQURhLGdEQUViLHNCQUZhLGdEQUdiLGlCQUhhLGtEQUlYLGFBSlcsa0RBS1gsY0FMVyxrREFNWCxVQU5XLGtEQU9YLE1BUFcsd0RBUUwsU0FSSywrREFTRSxlQVRGLHFEQVVSLFNBVlEseURBV0osZUFYSSxnREFZYixNQVphLHVDQWFwQixzQ0Fib0IsRUFhb0I7QUFDdENDLGdCQUFjLE1BRHdCO0FBRXRDRCxTQUFPO0FBRitCLENBYnBCLFNBQXRCOztBQW1CQSxJQUFNTCxTQUFTLG1CQUFJO0FBQ2pCSyxTQUFPLE1BRFU7QUFFakJFLFVBQVEsTUFGUztBQUdqQkMsZ0JBQWMsS0FIRztBQUlqQkMsVUFBUSxtQkFKUztBQUtqQkMsY0FBWSxNQUxLO0FBTWpCQyxhQUFXLE1BTk07QUFPakJDLFVBQVE7QUFQUyxDQUFKLENBQWY7O0FBVUEsSUFBTVgsa0JBQWtCLG1CQUFJO0FBQzFCSSxTQUFPLEtBRG1CO0FBRTFCUSxXQUFTO0FBRmlCLENBQUosQ0FBeEI7O0FBS0EsSUFBTVgsUUFBUSxtQkFBSTtBQUNoQlMsYUFBVyxLQURLO0FBRWhCTCxnQkFBYyxLQUZFO0FBR2hCUSxZQUFVLE1BSE07QUFJaEJDLGNBQVksS0FKSTtBQUtoQkMsU0FBTztBQUxTLENBQUosQ0FBZDs7QUFRQSxJQUFNYixXQUFXLG1CQUFJO0FBQ25CVyxZQUFVLE1BRFM7QUFFbkJFLFNBQU87QUFGWSxDQUFKLENBQWpCOztBQUtBLElBQU1aLGNBQWMsbUJBQUk7QUFDdEJVLFlBQVUsTUFEWTtBQUV0QkcsY0FBWSxPQUZVO0FBR3RCQyxlQUFhLEtBSFM7QUFJdEJGLFNBQU87QUFKZSxDQUFKLENBQXBCOztBQU9BcEIsYUFBYUwsU0FBYixHQUF5QkEsU0FBekI7a0JBQ2VLLFkiLCJmaWxlIjoiVGltZWxpbmVJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGl0ZW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cbmNvbnN0IFRpbWVsaW5lSXRlbSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e2Nzcyh0aW1lbGluZUJsb2NrLCBwcm9wcy5zaWRlKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NzcyhtYXJrZXIsIHByb3BzLnN0eWxlLm1hcmtlcil9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e3RpbWVsaW5lQ29udGVudH0+XG4gICAgICA8aDMgY2xhc3NOYW1lPXtjc3ModGl0bGUsIHByb3BzLnN0eWxlLnRpdGxlKX0+e3Byb3BzLml0ZW0udGl0bGV9PC9oMz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzKHN1YnRpdGxlLCBwcm9wcy5zdHlsZS5zdWJ0aXRsZSl9Pntwcm9wcy5pdGVtLnN1YnRpdGxlfTwvc3Bhbj5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y3NzKGRlc2NyaXB0aW9uLCBwcm9wcy5zdHlsZS5kZXNjcmlwdGlvbil9Pntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbmNvbnN0IHRpbWVsaW5lQmxvY2sgPSBjc3Moe1xuICB3aWR0aDogJy13ZWJraXQtY2FsYyg1MCUgKyA4cHgpJyxcbiAgd2lkdGg6ICctbW96LWNhbGMoNTAlICsgOHB4KScsXG4gIHdpZHRoOiAnY2FsYyg1MCUgKyA4cHgpJyxcbiAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcbiAgZGlzcGxheTogJy13ZWJraXQtZmxleCcsXG4gIGRpc3BsYXk6ICctbW96LWJveCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgV2Via2l0Qm94UGFjazogJ2p1c3RpZnknLFxuICBXZWJraXRKdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBNb3pCb3hQYWNrOiAnanVzdGlmeScsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGNsZWFyOiAnYm90aCcsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMzBweCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfVxufSlcblxuY29uc3QgbWFya2VyID0gY3NzKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnMTBweCcsXG4gIGJvcmRlclJhZGl1czogJzUwJScsXG4gIGJvcmRlcjogJzJweCBzb2xpZCAjRjVGN0ZBJyxcbiAgYmFja2dyb3VuZDogJyMwMDAnLFxuICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgekluZGV4OiAnODg4J1xufSlcblxuY29uc3QgdGltZWxpbmVDb250ZW50ID0gY3NzKHtcbiAgd2lkdGg6ICc5NSUnLFxuICBwYWRkaW5nOiAnMCAxNXB4J1xufSlcblxuY29uc3QgdGl0bGUgPSBjc3Moe1xuICBtYXJnaW5Ub3A6ICc1cHgnLFxuICBtYXJnaW5Cb3R0b206ICc1cHgnLFxuICBmb250U2l6ZTogJzI1cHgnLFxuICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgY29sb3I6ICcjMDAwJ1xufSlcblxuY29uc3Qgc3VidGl0bGUgPSBjc3Moe1xuICBmb250U2l6ZTogJzE1cHgnLFxuICBjb2xvcjogJyMwMDAnXG59KVxuXG5jb25zdCBkZXNjcmlwdGlvbiA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjVlbScsXG4gIHdvcmRTcGFjaW5nOiAnMXB4JyxcbiAgY29sb3I6ICcjMDAwJ1xufSlcblxuVGltZWxpbmVJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVJdGVtXG4iXX0=