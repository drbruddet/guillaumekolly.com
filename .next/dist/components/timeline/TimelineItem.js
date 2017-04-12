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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVJdGVtLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsIml0ZW0iLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3R5bGUiLCJUaW1lbGluZUl0ZW0iLCJwcm9wcyIsInRpbWVsaW5lQmxvY2siLCJzaWRlIiwibWFya2VyIiwidGltZWxpbmVDb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwiekluZGV4IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwibGluZUhlaWdodCIsIndvcmRTcGFjaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxRQUFNLGlCQUFVQyxNQUFWLENBQWlCQyxVQURQO0FBRWhCQyxTQUFPLGlCQUFVRjtBQUZELENBQWxCOztBQUtBLElBQU1HLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsU0FDbkI7QUFBQTtBQUFBLE1BQUssV0FBVyxtQkFBSUMsYUFBSixFQUFtQkQsTUFBTUUsSUFBekIsQ0FBaEI7QUFDRSwyQ0FBSyxXQUFXLG1CQUFJQyxNQUFKLEVBQVlILE1BQU1GLEtBQU4sQ0FBWUssTUFBeEIsQ0FBaEIsR0FERjtBQUVFO0FBQUE7QUFBQSxRQUFLLFdBQVdDLGVBQWhCO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVyxtQkFBSUMsS0FBSixFQUFXTCxNQUFNRixLQUFOLENBQVlPLEtBQXZCLENBQWY7QUFBK0NMLGNBQU1MLElBQU4sQ0FBV1U7QUFBMUQsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFNLFdBQVcsbUJBQUlDLFFBQUosRUFBY04sTUFBTUYsS0FBTixDQUFZUSxRQUExQixDQUFqQjtBQUNHTixjQUFNTCxJQUFOLENBQVdXO0FBRGQsT0FGRjtBQUtFO0FBQUE7QUFBQSxVQUFHLFdBQVcsbUJBQUlDLFdBQUosRUFBaUJQLE1BQU1GLEtBQU4sQ0FBWVMsV0FBN0IsQ0FBZDtBQUNHUCxjQUFNTCxJQUFOLENBQVdZO0FBRGQ7QUFMRjtBQUZGLEdBRG1CO0FBQUEsQ0FBckI7O0FBY0EsSUFBTU4sZ0JBQWdCO0FBQ3BCTyxTQUFPO0FBRGEsZ0RBRWIsc0JBRmEsZ0RBR2IsaUJBSGEsa0RBSVgsYUFKVyxrREFLWCxjQUxXLGtEQU1YLFVBTlcsa0RBT1gsTUFQVyx3REFRTCxTQVJLLCtEQVNFLGVBVEYscURBVVIsU0FWUSx5REFXSixlQVhJLGdEQVliLE1BWmEsdUNBYXBCLHNDQWJvQixFQWFvQjtBQUN0Q0MsZ0JBQWMsTUFEd0I7QUFFdENELFNBQU87QUFGK0IsQ0FicEIsU0FBdEI7O0FBbUJBLElBQU1MLFNBQVMsbUJBQUk7QUFDakJLLFNBQU8sTUFEVTtBQUVqQkUsVUFBUSxNQUZTO0FBR2pCQyxnQkFBYyxLQUhHO0FBSWpCQyxVQUFRLG1CQUpTO0FBS2pCQyxjQUFZLE1BTEs7QUFNakJDLGFBQVcsTUFOTTtBQU9qQkMsVUFBUTtBQVBTLENBQUosQ0FBZjs7QUFVQSxJQUFNWCxrQkFBa0IsbUJBQUk7QUFDMUJJLFNBQU8sS0FEbUI7QUFFMUJRLFdBQVM7QUFGaUIsQ0FBSixDQUF4Qjs7QUFLQSxJQUFNWCxRQUFRLG1CQUFJO0FBQ2hCUyxhQUFXLEtBREs7QUFFaEJMLGdCQUFjLEtBRkU7QUFHaEJRLFlBQVUsTUFITTtBQUloQkMsY0FBWSxLQUpJO0FBS2hCQyxTQUFPO0FBTFMsQ0FBSixDQUFkOztBQVFBLElBQU1iLFdBQVcsbUJBQUk7QUFDbkJXLFlBQVUsTUFEUztBQUVuQkUsU0FBTztBQUZZLENBQUosQ0FBakI7O0FBS0EsSUFBTVosY0FBYyxtQkFBSTtBQUN0QlUsWUFBVSxNQURZO0FBRXRCRyxjQUFZLE9BRlU7QUFHdEJDLGVBQWEsS0FIUztBQUl0QkYsU0FBTztBQUplLENBQUosQ0FBcEI7O0FBT0FwQixhQUFhTCxTQUFiLEdBQXlCQSxTQUF6QjtrQkFDZUssWSIsImZpbGUiOiJUaW1lbGluZUl0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9sYXlvdXQvVGhlbWUnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgaXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuY29uc3QgVGltZWxpbmVJdGVtID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHRpbWVsaW5lQmxvY2ssIHByb3BzLnNpZGUpfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKG1hcmtlciwgcHJvcHMuc3R5bGUubWFya2VyKX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17dGltZWxpbmVDb250ZW50fT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e2Nzcyh0aXRsZSwgcHJvcHMuc3R5bGUudGl0bGUpfT57cHJvcHMuaXRlbS50aXRsZX08L2gzPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3Moc3VidGl0bGUsIHByb3BzLnN0eWxlLnN1YnRpdGxlKX0+XG4gICAgICAgIHtwcm9wcy5pdGVtLnN1YnRpdGxlfVxuICAgICAgPC9zcGFuPlxuICAgICAgPHAgY2xhc3NOYW1lPXtjc3MoZGVzY3JpcHRpb24sIHByb3BzLnN0eWxlLmRlc2NyaXB0aW9uKX0+XG4gICAgICAgIHtwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuY29uc3QgdGltZWxpbmVCbG9jayA9IGNzcyh7XG4gIHdpZHRoOiAnLXdlYmtpdC1jYWxjKDUwJSArIDhweCknLFxuICB3aWR0aDogJy1tb3otY2FsYyg1MCUgKyA4cHgpJyxcbiAgd2lkdGg6ICdjYWxjKDUwJSArIDhweCknLFxuICBkaXNwbGF5OiAnLXdlYmtpdC1ib3gnLFxuICBkaXNwbGF5OiAnLXdlYmtpdC1mbGV4JyxcbiAgZGlzcGxheTogJy1tb3otYm94JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBXZWJraXRCb3hQYWNrOiAnanVzdGlmeScsXG4gIFdlYmtpdEp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIE1vekJveFBhY2s6ICdqdXN0aWZ5JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgY2xlYXI6ICdib3RoJyxcbiAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICBtYXJnaW5Cb3R0b206ICczMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9XG59KVxuXG5jb25zdCBtYXJrZXIgPSBjc3Moe1xuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICcxMHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgYm9yZGVyOiAnMnB4IHNvbGlkICNGNUY3RkEnLFxuICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gIG1hcmdpblRvcDogJzEwcHgnLFxuICB6SW5kZXg6ICc4ODgnXG59KVxuXG5jb25zdCB0aW1lbGluZUNvbnRlbnQgPSBjc3Moe1xuICB3aWR0aDogJzk1JScsXG4gIHBhZGRpbmc6ICcwIDE1cHgnXG59KVxuXG5jb25zdCB0aXRsZSA9IGNzcyh7XG4gIG1hcmdpblRvcDogJzVweCcsXG4gIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gIGZvbnRTaXplOiAnMjVweCcsXG4gIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICBjb2xvcjogJyMwMDAnXG59KVxuXG5jb25zdCBzdWJ0aXRsZSA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTVweCcsXG4gIGNvbG9yOiAnIzAwMCdcbn0pXG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gY3NzKHtcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgbGluZUhlaWdodDogJzEuNWVtJyxcbiAgd29yZFNwYWNpbmc6ICcxcHgnLFxuICBjb2xvcjogJyMwMDAnXG59KVxuXG5UaW1lbGluZUl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUl0ZW1cbiJdfQ==