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
  item: _react.PropTypes.object.isRequired
};

var TimelineItem = function TimelineItem(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: (0, _css3.default)(timelineBlock, props.style) },
      _react2.default.createElement('div', { className: marker }),
      _react2.default.createElement(
        'div',
        { className: timelineContent },
        _react2.default.createElement(
          'h3',
          { className: title },
          props.item.title
        ),
        _react2.default.createElement(
          'span',
          { className: subtitle },
          props.item.subtitle
        ),
        _react2.default.createElement(
          'p',
          { className: description },
          props.item.description
        )
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
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  border: '2px solid #F5F7FA',
  background: '#4FC1E9',
  marginTop: '10px',
  zIndex: '9999'
});

var timelineContent = (0, _css3.default)({
  width: '95%',
  padding: '0 15px',
  color: '#666'
});

var title = (0, _css3.default)({
  marginTop: '5px',
  marginBottom: '5px',
  fontSize: '25px',
  fontWeight: '500'
});

var subtitle = (0, _css3.default)({
  fontSize: '15px',
  color: '#a4a4a4'
});

var description = (0, _css3.default)({
  fontSize: '14px',
  lineHeight: '1.5em',
  wordSpacing: '1px',
  color: '#888'
});

TimelineItem.propTypes = propTypes;
exports.default = TimelineItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZWxpbmVJdGVtLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsIml0ZW0iLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiVGltZWxpbmVJdGVtIiwicHJvcHMiLCJ0aW1lbGluZUJsb2NrIiwic3R5bGUiLCJtYXJrZXIiLCJ0aW1lbGluZUNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmQiLCJtYXJnaW5Ub3AiLCJ6SW5kZXgiLCJwYWRkaW5nIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0Iiwid29yZFNwYWNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQU0saUJBQVVDLE1BQVYsQ0FBaUJDO0FBRFAsQ0FBbEI7O0FBSUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFXLG1CQUFJQyxhQUFKLEVBQW1CRCxNQUFNRSxLQUF6QixDQUFoQjtBQUNFLDZDQUFLLFdBQVdDLE1BQWhCLEdBREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFXQyxlQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVdDLEtBQWY7QUFBdUJMLGdCQUFNSixJQUFOLENBQVdTO0FBQWxDLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBTSxXQUFXQyxRQUFqQjtBQUE0Qk4sZ0JBQU1KLElBQU4sQ0FBV1U7QUFBdkMsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFHLFdBQVdDLFdBQWQ7QUFBNEJQLGdCQUFNSixJQUFOLENBQVdXO0FBQXZDO0FBSEY7QUFGRjtBQURGLEdBRG1CO0FBQUEsQ0FBckI7O0FBWUEsSUFBTU4sZ0JBQWdCO0FBQ3BCTyxTQUFPO0FBRGEsZ0RBRWIsc0JBRmEsZ0RBR2IsaUJBSGEsa0RBSVgsYUFKVyxrREFLWCxjQUxXLGtEQU1YLFVBTlcsa0RBT1gsTUFQVyx3REFRTCxTQVJLLCtEQVNFLGVBVEYscURBVVIsU0FWUSx5REFXSixlQVhJLGdEQVliLE1BWmEsdUNBYXBCLHNDQWJvQixFQWFvQjtBQUN0Q0MsZ0JBQWMsTUFEd0I7QUFFdENELFNBQU87QUFGK0IsQ0FicEIsU0FBdEI7O0FBb0JBLElBQU1MLFNBQVMsbUJBQUk7QUFDakJLLFNBQU8sTUFEVTtBQUVqQkUsVUFBUSxNQUZTO0FBR2pCQyxnQkFBYyxLQUhHO0FBSWpCQyxVQUFRLG1CQUpTO0FBS2pCQyxjQUFZLFNBTEs7QUFNakJDLGFBQVcsTUFOTTtBQU9qQkMsVUFBUTtBQVBTLENBQUosQ0FBZjs7QUFVQSxJQUFNWCxrQkFBa0IsbUJBQUk7QUFDMUJJLFNBQU8sS0FEbUI7QUFFMUJRLFdBQVMsUUFGaUI7QUFHMUJDLFNBQU87QUFIbUIsQ0FBSixDQUF4Qjs7QUFNQSxJQUFNWixRQUFRLG1CQUFJO0FBQ2hCUyxhQUFXLEtBREs7QUFFaEJMLGdCQUFjLEtBRkU7QUFHaEJTLFlBQVUsTUFITTtBQUloQkMsY0FBWTtBQUpJLENBQUosQ0FBZDs7QUFPQSxJQUFNYixXQUFXLG1CQUFJO0FBQ25CWSxZQUFVLE1BRFM7QUFFbkJELFNBQU87QUFGWSxDQUFKLENBQWpCOztBQUtBLElBQU1WLGNBQWMsbUJBQUk7QUFDdEJXLFlBQVUsTUFEWTtBQUV0QkUsY0FBWSxPQUZVO0FBR3RCQyxlQUFhLEtBSFM7QUFJdEJKLFNBQU87QUFKZSxDQUFKLENBQXBCOztBQU9BbEIsYUFBYUosU0FBYixHQUF5QkEsU0FBekI7a0JBQ2VJLFkiLCJmaWxlIjoiVGltZWxpbmVJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgaXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuXG5jb25zdCBUaW1lbGluZUl0ZW0gPSAocHJvcHMpID0+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh0aW1lbGluZUJsb2NrLCBwcm9wcy5zdHlsZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e21hcmtlcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aW1lbGluZUNvbnRlbnR9PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXt0aXRsZX0+e3Byb3BzLml0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdWJ0aXRsZX0+e3Byb3BzLml0ZW0uc3VidGl0bGV9PC9zcGFuPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2Rlc2NyaXB0aW9ufT57cHJvcHMuaXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbmNvbnN0IHRpbWVsaW5lQmxvY2sgPSBjc3Moe1xuICB3aWR0aDogJy13ZWJraXQtY2FsYyg1MCUgKyA4cHgpJyxcbiAgd2lkdGg6ICctbW96LWNhbGMoNTAlICsgOHB4KScsXG4gIHdpZHRoOiAnY2FsYyg1MCUgKyA4cHgpJyxcbiAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcbiAgZGlzcGxheTogJy13ZWJraXQtZmxleCcsXG4gIGRpc3BsYXk6ICctbW96LWJveCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgV2Via2l0Qm94UGFjazogJ2p1c3RpZnknLFxuICBXZWJraXRKdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBNb3pCb3hQYWNrOiAnanVzdGlmeScsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGNsZWFyOiAnYm90aCcsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMzBweCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfVxufSlcblxuXG5jb25zdCBtYXJrZXIgPSBjc3Moe1xuICB3aWR0aDogJzE2cHgnLFxuICBoZWlnaHQ6ICcxNnB4JyxcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgYm9yZGVyOiAnMnB4IHNvbGlkICNGNUY3RkEnLFxuICBiYWNrZ3JvdW5kOiAnIzRGQzFFOScsXG4gIG1hcmdpblRvcDogJzEwcHgnLFxuICB6SW5kZXg6ICc5OTk5J1xufSlcblxuY29uc3QgdGltZWxpbmVDb250ZW50ID0gY3NzKHtcbiAgd2lkdGg6ICc5NSUnLFxuICBwYWRkaW5nOiAnMCAxNXB4JyxcbiAgY29sb3I6ICcjNjY2J1xufSlcblxuY29uc3QgdGl0bGUgPSBjc3Moe1xuICBtYXJnaW5Ub3A6ICc1cHgnLFxuICBtYXJnaW5Cb3R0b206ICc1cHgnLFxuICBmb250U2l6ZTogJzI1cHgnLFxuICBmb250V2VpZ2h0OiAnNTAwJ1xufSlcblxuY29uc3Qgc3VidGl0bGUgPSBjc3Moe1xuICBmb250U2l6ZTogJzE1cHgnLFxuICBjb2xvcjogJyNhNGE0YTQnXG59KVxuXG5jb25zdCBkZXNjcmlwdGlvbiA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjVlbScsXG4gIHdvcmRTcGFjaW5nOiAnMXB4JyxcbiAgY29sb3I6ICcjODg4J1xufSlcblxuVGltZWxpbmVJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVJdGVtXG4iXX0=