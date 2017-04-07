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
}, (0, _defineProperty3.default)(_css, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_css, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'WebkitBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MozBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'MsBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'OBoxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'boxSizing', 'border-box'), (0, _defineProperty3.default)(_css, 'WebkitTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MozTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'MsTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'OTransition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'transition', 'all 0.3s'), (0, _defineProperty3.default)(_css, 'height', '150px'), (0, _defineProperty3.default)(_css, 'resize', 'none'), (0, _defineProperty3.default)(_css, 'width', '100%'), (0, _defineProperty3.default)(_css, 'lineHeight', '150%'), (0, _defineProperty3.default)(_css, 'overflow', 'auto'), (0, _defineProperty3.default)(_css, ':focus', {
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

TextArea.propTypes = propTypes;
exports.default = TextArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJhd3MiLCJUZXh0QXJlYSIsInByb3BzIiwidGV4dGFyZWEiLCJyb3dzIiwiYW5pbWF0aW9uIiwiZm9udCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJvdXRsaW5lIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk1zVHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFFBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLGVBQWMsaUJBQVVGLE1BRlI7QUFHaEJHLFNBQWMsaUJBQVVDLE1BSFI7QUFJaEJDLFFBQWMsaUJBQVVDLE1BSlI7QUFLaEJDLFFBQWMsaUJBQVVEO0FBTFIsQ0FBbEI7O0FBUUEsSUFBTUUsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1OLEtBQXRCO0FBQ0UsNkNBQU8sU0FBU00sTUFBTVYsSUFBdEIsR0FERjtBQUVFLGdEQUFVLFdBQVdXLFFBQXJCO0FBQ1UsWUFBSyxNQURmO0FBRVUsWUFBTUQsTUFBTVYsSUFGdEI7QUFHVSxtQkFBYVUsTUFBTVAsV0FBTixHQUFvQk8sTUFBTVAsV0FBMUIsR0FBd0NPLE1BQU1WLElBSHJFO0FBSVUsWUFBTVUsTUFBTUosSUFBTixHQUFhSSxNQUFNSixJQUFuQixHQUEwQixFQUoxQztBQUtVLFlBQU1JLE1BQU1FLElBQU4sR0FBYUYsTUFBTUUsSUFBbkIsR0FBMEIsQ0FMMUM7QUFNVSxvQkFOVixHQUZGO0FBVUUsNENBQU0sV0FBV0MsU0FBakI7QUFWRixHQURlO0FBQUEsQ0FBakI7O0FBY0EsSUFBTUYsV0FBVztBQUNmRyxRQUFNLFNBRFM7QUFFZkMsVUFBUSxHQUZPO0FBR2ZDLGNBQVksUUFIRztBQUlmQyxjQUFZLE1BSkc7QUFLZkMsVUFBUSxNQUxPO0FBTWZDLGdCQUFjLGdCQU5DO0FBT2ZDLFlBQVU7QUFQSyxpREFRUCxpQkFSTyxrREFTTixlQVRNLGdEQVVSLE1BVlEsMERBV0UsWUFYRix1REFZRCxZQVpDLHNEQWFGLFlBYkUscURBY0gsWUFkRyxvREFlSixZQWZJLDJEQWdCRyxVQWhCSCx3REFpQkEsVUFqQkEsdURBa0JELFVBbEJDLHNEQW1CRixVQW5CRSxxREFvQkgsVUFwQkcsaURBcUJQLE9BckJPLGlEQXNCUCxNQXRCTyxnREF1QlIsTUF2QlEscURBd0JILE1BeEJHLG1EQXlCTCxNQXpCSyx1Q0EwQmYsUUExQmUsRUEwQkw7QUFDUkMsV0FBUyxNQUREO0FBRVJDLFdBQVM7QUFGRCxDQTFCSyx1Q0E4QmYsZUE5QmUsRUE4QkU7QUFDZkMsY0FBWTtBQURHLENBOUJGLFNBQWpCOztBQW1DQSxJQUFNVixZQUFZLG1CQUFJO0FBQ3BCVyxvQkFBa0IsaUJBREU7QUFFcEJDLGlCQUFlLGlCQUZLO0FBR3BCQyxnQkFBYyxpQkFITTtBQUlwQkMsZUFBYSxpQkFKTztBQUtwQkMsY0FBWSxpQkFMUTtBQU1wQkMsV0FBUztBQU5XLENBQUosQ0FBbEI7O0FBU0FwQixTQUFTVixTQUFULEdBQXFCQSxTQUFyQjtrQkFDZVUsUSIsImZpbGUiOiJUZXh0QXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sczogICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICByYXdzOiAgICAgICAgIFByb3BUeXBlcy5udW1iZXJcbn1cblxuY29uc3QgVGV4dEFyZWEgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIGNsYXNzTmFtZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICBjb2xzPXtwcm9wcy5jb2xzID8gcHJvcHMuY29scyA6IDMwfVxuICAgICAgICAgICAgICByb3dzPXtwcm9wcy5yb3dzID8gcHJvcHMucm93cyA6IDV9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgIDwvdGV4dGFyZWE+XG4gICAgPHNwYW4gY2xhc3NOYW1lPXthbmltYXRpb259Lz5cbiAgPC9kaXY+XG5cbmNvbnN0IHRleHRhcmVhID0gY3NzKHtcbiAgZm9udDogJ2luaGVyaXQnLFxuICBtYXJnaW46ICcwJyxcbiAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCAjZmZmJyxcbiAgZm9udFNpemU6ICcxZW0nLFxuICBtYXJnaW46ICcwZW0gMCAxLjg3NWVtIDAnLFxuICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIFdlYmtpdEJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBNb3pCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgTXNCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgT0JveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgTW96VHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICBPVHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgaGVpZ2h0OiAnMTUwcHgnLFxuICByZXNpemU6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbGluZUhlaWdodDogJzE1MCUnLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxuICAnOmZvY3VzJzoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG4gIH0sXG4gICc6Zm9jdXMgfiBzcGFuJzoge1xuICAgIG1hcmdpbkxlZnQ6ICctNTBweCdcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uID0gY3NzKHtcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIE1velRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBNc1RyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBPVHJhbnNpdGlvbjogJ2FsbCAwLjVzIGxpbmVhcicsXG4gIHRyYW5zaXRpb246ICdhbGwgMC41cyBsaW5lYXInLFxuICBjb250ZW50OiAnJyxcbn0pXG5cblRleHRBcmVhLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcbiJdfQ==