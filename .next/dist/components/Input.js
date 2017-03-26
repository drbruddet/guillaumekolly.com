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
      placeholder: props.placeholder ? props.placeholder : props.name
    })
  );
};

var input = (0, _css3.default)((_css = {
  font: 'inherit',
  margin: '0',
  lineHeight: 'normal',
  background: 'none',
  border: 'none',
  borderBottom: 'solid 2px #2b2b2b',
  fontSize: '1em'
}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'WebkitBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MozBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MsBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'OBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'boxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'WebkitTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MozTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MsTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'OTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'transition', 'all 0.3s'), (0, _defineProperty3.default)(_css, ':focus', {
  outline: 'none',
  padding: '0 0 0.875em 0'
}), _css));

Input.propTypes = propTypes;
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidHlwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm9iamVjdCIsIklucHV0IiwicHJvcHMiLCJpbnB1dCIsImZvbnQiLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwib3V0bGluZSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLFFBQWMsaUJBQVVGLE1BQVYsQ0FBaUJDLFVBRmY7QUFHaEJFLGVBQWMsaUJBQVVILE1BSFI7QUFJaEJJLFNBQWMsaUJBQVVDO0FBSlIsQ0FBbEI7O0FBT0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1ILEtBQXRCO0FBQ0UsNkNBQU8sU0FBU0csTUFBTUwsSUFBdEIsR0FERjtBQUVFLDZDQUFRLE1BQU1LLE1BQU1SLElBQXBCO0FBQ1EsWUFBTVEsTUFBTUwsSUFEcEI7QUFFUSxpQkFBV00sS0FGbkI7QUFHUSxtQkFBYUQsTUFBTUosV0FBTixHQUFvQkksTUFBTUosV0FBMUIsR0FBd0NJLE1BQU1MO0FBSG5FO0FBRkYsR0FEWTtBQUFBLENBQWQ7O0FBVUEsSUFBTU0sUUFBUTtBQUNaQyxRQUFNLFNBRE07QUFFWkMsVUFBUSxHQUZJO0FBR1pDLGNBQVksUUFIQTtBQUlaQyxjQUFZLE1BSkE7QUFLWkMsVUFBUSxNQUxJO0FBTVpDLGdCQUFjLG1CQU5GO0FBT1pDLFlBQVU7QUFQRSxpREFRSixpQkFSSSxrREFTSCxlQVRHLGdEQVVMLE1BVkssMERBV0ssWUFYTCx1REFZRSxZQVpGLHNEQWFDLFlBYkQscURBY0EsWUFkQSxvREFlRCxZQWZDLDJEQWdCTSxVQWhCTix3REFpQkcsVUFqQkgsdURBa0JFLFVBbEJGLHNEQW1CQyxVQW5CRCxxREFvQkEsVUFwQkEsdUNBcUJaLFFBckJZLEVBcUJGO0FBQ1JDLFdBQVMsTUFERDtBQUVSQyxXQUFTO0FBRkQsQ0FyQkUsU0FBZDs7QUEyQkFYLE1BQU1SLFNBQU4sR0FBa0JBLFNBQWxCO2tCQUNlUSxLIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdHlwZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuY29uc3QgSW5wdXQgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPGlucHV0ICB0eXBlPXtwcm9wcy50eXBlfVxuICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IHByb3BzLm5hbWV9XG4gICAgLz5cbiAgPC9kaXY+XG5cbmNvbnN0IGlucHV0ID0gY3NzKHtcbiAgZm9udDogJ2luaGVyaXQnLFxuICBtYXJnaW46ICcwJyxcbiAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCAjMmIyYjJiJyxcbiAgZm9udFNpemU6ICcxZW0nLFxuICBtYXJnaW46ICcwZW0gMCAxLjg3NWVtIDAnLFxuICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIFdlYmtpdEJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBNb3pCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgTXNCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgT0JveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgTW96VHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICBPVHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9XG59KVxuXG5JbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iXX0=