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
      required: true })
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
}), _css));

TextArea.propTypes = propTypes;
exports.default = TextArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGV4dEFyZWEuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwib2JqZWN0IiwiY29scyIsIm51bWJlciIsInJhd3MiLCJUZXh0QXJlYSIsInByb3BzIiwidGV4dGFyZWEiLCJyb3dzIiwiZm9udCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJvdXRsaW5lIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsUUFBYyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEZjtBQUVoQkMsZUFBYyxpQkFBVUYsTUFGUjtBQUdoQkcsU0FBYyxpQkFBVUMsTUFIUjtBQUloQkMsUUFBYyxpQkFBVUMsTUFKUjtBQUtoQkMsUUFBYyxpQkFBVUQ7QUFMUixDQUFsQjs7QUFRQSxJQUFNRSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQUssV0FBV0EsTUFBTU4sS0FBdEI7QUFDRSw2Q0FBTyxTQUFTTSxNQUFNVixJQUF0QixHQURGO0FBRUUsZ0RBQVUsV0FBV1csUUFBckI7QUFDVSxZQUFLLE1BRGY7QUFFVSxZQUFNRCxNQUFNVixJQUZ0QjtBQUdVLG1CQUFhVSxNQUFNUCxXQUFOLEdBQW9CTyxNQUFNUCxXQUExQixHQUF3Q08sTUFBTVYsSUFIckU7QUFJVSxZQUFNVSxNQUFNSixJQUFOLEdBQWFJLE1BQU1KLElBQW5CLEdBQTBCLEVBSjFDO0FBS1UsWUFBTUksTUFBTUUsSUFBTixHQUFhRixNQUFNRSxJQUFuQixHQUEwQixDQUwxQztBQU1VLG9CQU5WO0FBRkYsR0FEZTtBQUFBLENBQWpCOztBQWFBLElBQU1ELFdBQVc7QUFDZkUsUUFBTSxTQURTO0FBRWZDLFVBQVEsR0FGTztBQUdmQyxjQUFZLFFBSEc7QUFJZkMsY0FBWSxNQUpHO0FBS2ZDLFVBQVEsTUFMTztBQU1mQyxnQkFBYyxnQkFOQztBQU9mQyxZQUFVO0FBUEssaURBUVAsaUJBUk8sa0RBU04sZUFUTSxnREFVUixNQVZRLDBEQVdFLFlBWEYsdURBWUQsWUFaQyxzREFhRixZQWJFLHFEQWNILFlBZEcsb0RBZUosWUFmSSwyREFnQkcsVUFoQkgsd0RBaUJBLFVBakJBLHVEQWtCRCxVQWxCQyxzREFtQkYsVUFuQkUscURBb0JILFVBcEJHLGlEQXFCUCxPQXJCTyxpREFzQlAsTUF0Qk8sZ0RBdUJSLE1BdkJRLHFEQXdCSCxNQXhCRyxtREF5QkwsTUF6QkssdUNBMEJmLFFBMUJlLEVBMEJMO0FBQ1JDLFdBQVMsTUFERDtBQUVSQyxXQUFTO0FBRkQsQ0ExQkssU0FBakI7O0FBZ0NBWixTQUFTVixTQUFULEdBQXFCQSxTQUFyQjtrQkFDZVUsUSIsImZpbGUiOiJUZXh0QXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sczogICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICByYXdzOiAgICAgICAgIFByb3BUeXBlcy5udW1iZXJcbn1cblxuY29uc3QgVGV4dEFyZWEgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZX0+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9PjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIGNsYXNzTmFtZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8gcHJvcHMucGxhY2Vob2xkZXIgOiBwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICBjb2xzPXtwcm9wcy5jb2xzID8gcHJvcHMuY29scyA6IDMwfVxuICAgICAgICAgICAgICByb3dzPXtwcm9wcy5yb3dzID8gcHJvcHMucm93cyA6IDV9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgIDwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuXG5jb25zdCB0ZXh0YXJlYSA9IGNzcyh7XG4gIGZvbnQ6ICdpbmhlcml0JyxcbiAgbWFyZ2luOiAnMCcsXG4gIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJCb3R0b206ICdzb2xpZCAycHggI2ZmZicsXG4gIGZvbnRTaXplOiAnMWVtJyxcbiAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcbiAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB3aWR0aDogJzEwMCUnLFxuICBXZWJraXRCb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgTW96Qm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE1zQm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIE9Cb3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE1velRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIE1zVHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gIGhlaWdodDogJzE1MHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGxpbmVIZWlnaHQ6ICcxNTAlJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICB9XG59KVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG4iXX0=