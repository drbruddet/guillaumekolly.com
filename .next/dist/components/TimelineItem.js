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
      { className: (0, _css3.default)(timelineBlock, timelineBlockRight) },
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

var timelineBlockLeft = (0, _css3.default)({
  float: 'left',
  direction: 'rtl',
  '@media screen and (max-width: 768px)': {
    float: 'none',
    direction: 'ltr'
  }
});

var timelineBlockRight = (0, _css3.default)({
  float: 'right',
  '@media screen and (max-width: 768px)': {
    float: 'none'
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZWxpbmVJdGVtLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsIml0ZW0iLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiVGltZWxpbmVJdGVtIiwicHJvcHMiLCJ0aW1lbGluZUJsb2NrIiwidGltZWxpbmVCbG9ja1JpZ2h0IiwibWFya2VyIiwidGltZWxpbmVDb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJ0aW1lbGluZUJsb2NrTGVmdCIsImZsb2F0IiwiZGlyZWN0aW9uIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIm1hcmdpblRvcCIsInpJbmRleCIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ3b3JkU3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsUUFBTSxpQkFBVUMsTUFBVixDQUFpQkM7QUFEUCxDQUFsQjs7QUFJQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ25CO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVcsbUJBQUlDLGFBQUosRUFBbUJDLGtCQUFuQixDQUFoQjtBQUNFLDZDQUFLLFdBQVdDLE1BQWhCLEdBREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFXQyxlQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVdDLEtBQWY7QUFBdUJMLGdCQUFNSixJQUFOLENBQVdTO0FBQWxDLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBTSxXQUFXQyxRQUFqQjtBQUE0Qk4sZ0JBQU1KLElBQU4sQ0FBV1U7QUFBdkMsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFHLFdBQVdDLFdBQWQ7QUFBNEJQLGdCQUFNSixJQUFOLENBQVdXO0FBQXZDO0FBSEY7QUFGRjtBQURGLEdBRG1CO0FBQUEsQ0FBckI7O0FBWUEsSUFBTU4sZ0JBQWdCO0FBQ3BCTyxTQUFPO0FBRGEsZ0RBRWIsc0JBRmEsZ0RBR2IsaUJBSGEsa0RBSVgsYUFKVyxrREFLWCxjQUxXLGtEQU1YLFVBTlcsa0RBT1gsTUFQVyx3REFRTCxTQVJLLCtEQVNFLGVBVEYscURBVVIsU0FWUSx5REFXSixlQVhJLGdEQVliLE1BWmEsdUNBYXBCLHNDQWJvQixFQWFvQjtBQUN0Q0MsZ0JBQWMsTUFEd0I7QUFFdENELFNBQU87QUFGK0IsQ0FicEIsU0FBdEI7O0FBbUJBLElBQU1FLG9CQUFvQixtQkFBSTtBQUM1QkMsU0FBTyxNQURxQjtBQUU1QkMsYUFBVyxLQUZpQjtBQUc1QiwwQ0FBd0M7QUFDdENELFdBQU8sTUFEK0I7QUFFdENDLGVBQVc7QUFGMkI7QUFIWixDQUFKLENBQTFCOztBQVNBLElBQU1WLHFCQUFxQixtQkFBSTtBQUM3QlMsU0FBTyxPQURzQjtBQUU3QiwwQ0FBd0M7QUFDdENBLFdBQU87QUFEK0I7QUFGWCxDQUFKLENBQTNCOztBQU9BLElBQU1SLFNBQVMsbUJBQUk7QUFDakJLLFNBQU8sTUFEVTtBQUVqQkssVUFBUSxNQUZTO0FBR2pCQyxnQkFBYyxLQUhHO0FBSWpCQyxVQUFRLG1CQUpTO0FBS2pCQyxjQUFZLFNBTEs7QUFNakJDLGFBQVcsTUFOTTtBQU9qQkMsVUFBUTtBQVBTLENBQUosQ0FBZjs7QUFVQSxJQUFNZCxrQkFBa0IsbUJBQUk7QUFDMUJJLFNBQU8sS0FEbUI7QUFFMUJXLFdBQVMsUUFGaUI7QUFHMUJDLFNBQU87QUFIbUIsQ0FBSixDQUF4Qjs7QUFNQSxJQUFNZixRQUFRLG1CQUFJO0FBQ2hCWSxhQUFXLEtBREs7QUFFaEJSLGdCQUFjLEtBRkU7QUFHaEJZLFlBQVUsTUFITTtBQUloQkMsY0FBWTtBQUpJLENBQUosQ0FBZDs7QUFPQSxJQUFNaEIsV0FBVyxtQkFBSTtBQUNuQmUsWUFBVSxNQURTO0FBRW5CRCxTQUFPO0FBRlksQ0FBSixDQUFqQjs7QUFLQSxJQUFNYixjQUFjLG1CQUFJO0FBQ3RCYyxZQUFVLE1BRFk7QUFFdEJFLGNBQVksT0FGVTtBQUd0QkMsZUFBYSxLQUhTO0FBSXRCSixTQUFPO0FBSmUsQ0FBSixDQUFwQjs7QUFPQXJCLGFBQWFKLFNBQWIsR0FBeUJBLFNBQXpCO2tCQUNlSSxZIiwiZmlsZSI6IlRpbWVsaW5lSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGl0ZW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn1cblxuY29uc3QgVGltZWxpbmVJdGVtID0gKHByb3BzKSA9PlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3ModGltZWxpbmVCbG9jaywgdGltZWxpbmVCbG9ja1JpZ2h0KX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFya2VyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbWVsaW5lQ29udGVudH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3RpdGxlfT57cHJvcHMuaXRlbS50aXRsZX08L2gzPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N1YnRpdGxlfT57cHJvcHMuaXRlbS5zdWJ0aXRsZX08L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17ZGVzY3JpcHRpb259Pntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuY29uc3QgdGltZWxpbmVCbG9jayA9IGNzcyh7XG4gIHdpZHRoOiAnLXdlYmtpdC1jYWxjKDUwJSArIDhweCknLFxuICB3aWR0aDogJy1tb3otY2FsYyg1MCUgKyA4cHgpJyxcbiAgd2lkdGg6ICdjYWxjKDUwJSArIDhweCknLFxuICBkaXNwbGF5OiAnLXdlYmtpdC1ib3gnLFxuICBkaXNwbGF5OiAnLXdlYmtpdC1mbGV4JyxcbiAgZGlzcGxheTogJy1tb3otYm94JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBXZWJraXRCb3hQYWNrOiAnanVzdGlmeScsXG4gIFdlYmtpdEp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIE1vekJveFBhY2s6ICdqdXN0aWZ5JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgY2xlYXI6ICdib3RoJyxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICBtYXJnaW5Cb3R0b206ICczMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9XG59KVxuXG5jb25zdCB0aW1lbGluZUJsb2NrTGVmdCA9IGNzcyh7XG4gIGZsb2F0OiAnbGVmdCcsXG4gIGRpcmVjdGlvbjogJ3J0bCcsXG4gICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgZmxvYXQ6ICdub25lJyxcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICB9XG59KVxuXG5jb25zdCB0aW1lbGluZUJsb2NrUmlnaHQgPSBjc3Moe1xuICBmbG9hdDogJ3JpZ2h0JyxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICBmbG9hdDogJ25vbmUnXG4gIH1cbn0pXG5cbmNvbnN0IG1hcmtlciA9IGNzcyh7XG4gIHdpZHRoOiAnMTZweCcsXG4gIGhlaWdodDogJzE2cHgnLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBib3JkZXI6ICcycHggc29saWQgI0Y1RjdGQScsXG4gIGJhY2tncm91bmQ6ICcjNEZDMUU5JyxcbiAgbWFyZ2luVG9wOiAnMTBweCcsXG4gIHpJbmRleDogJzk5OTknXG59KVxuXG5jb25zdCB0aW1lbGluZUNvbnRlbnQgPSBjc3Moe1xuICB3aWR0aDogJzk1JScsXG4gIHBhZGRpbmc6ICcwIDE1cHgnLFxuICBjb2xvcjogJyM2NjYnXG59KVxuXG5jb25zdCB0aXRsZSA9IGNzcyh7XG4gIG1hcmdpblRvcDogJzVweCcsXG4gIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gIGZvbnRTaXplOiAnMjVweCcsXG4gIGZvbnRXZWlnaHQ6ICc1MDAnXG59KVxuXG5jb25zdCBzdWJ0aXRsZSA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTVweCcsXG4gIGNvbG9yOiAnI2E0YTRhNCdcbn0pXG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gY3NzKHtcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgbGluZUhlaWdodDogJzEuNWVtJyxcbiAgd29yZFNwYWNpbmc6ICcxcHgnLFxuICBjb2xvcjogJyM4ODgnXG59KVxuXG5UaW1lbGluZUl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUl0ZW1cbiJdfQ==