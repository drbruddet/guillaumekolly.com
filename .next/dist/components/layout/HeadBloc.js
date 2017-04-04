'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string
};

var HeadBloc = function HeadBloc(props) {
  return _react2.default.createElement(
    _head2.default,
    null,
    _react2.default.createElement(
      'title',
      null,
      props.title
    ),
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
    _react2.default.createElement('meta', { name: 'description', content: props.description }),
    _react2.default.createElement('meta', { name: 'keywords', content: props.keywords }),
    _react2.default.createElement('meta', { name: 'copyright', content: 'Guillaume Kolly' })
  );
};

_glamor.css.global('html, body', {
  padding: '0',
  margin: '0',
  border: '0',
  fontFamily: 'sans-serif',
  lineHeight: '1.15',
  fontSize: '1em',
  fontWeight: '300',
  fontStyle: 'normal',
  textDecoration: 'none',
  textShadow: '0',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
});

HeadBloc.propTypes = propTypes;
exports.default = HeadBloc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInRpdGxlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiSGVhZEJsb2MiLCJwcm9wcyIsImtleXdvcmRzIiwiZ2xvYmFsIiwicGFkZGluZyIsIm1hcmdpbiIsImJvcmRlciIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0U2hhZG93IiwiV2Via2l0Rm9udFNtb290aGluZyIsIk1vek9zeEZvbnRTbW9vdGhpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFNBQWMsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBRGY7QUFFaEJDLGVBQWMsaUJBQVVGO0FBRlIsQ0FBbEI7O0FBS0EsSUFBTUcsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFRQSxZQUFNTDtBQUFkLEtBREY7QUFFRSw0Q0FBTSxTQUFRLE9BQWQsR0FGRjtBQUdFLDRDQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHVDQUE5QixHQUhGO0FBSUUsNENBQU0sTUFBSyxhQUFYLEVBQXlCLFNBQVNLLE1BQU1GLFdBQXhDLEdBSkY7QUFLRSw0Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBU0UsTUFBTUMsUUFBckMsR0FMRjtBQU1FLDRDQUFNLE1BQUssV0FBWCxFQUF1QixTQUFRLGlCQUEvQjtBQU5GLEdBRGU7QUFBQSxDQUFqQjs7QUFVQSxZQUFJQyxNQUFKLENBQVcsWUFBWCxFQUEwQjtBQUN4QkMsV0FBUyxHQURlO0FBRXhCQyxVQUFRLEdBRmdCO0FBR3hCQyxVQUFRLEdBSGdCO0FBSXhCQyxjQUFZLFlBSlk7QUFLeEJDLGNBQVksTUFMWTtBQU14QkMsWUFBVSxLQU5jO0FBT3hCQyxjQUFZLEtBUFk7QUFReEJDLGFBQVcsUUFSYTtBQVN4QkMsa0JBQWdCLE1BVFE7QUFVeEJDLGNBQVksR0FWWTtBQVd4QkMsdUJBQXFCLGFBWEc7QUFZeEJDLHVCQUFxQjtBQVpHLENBQTFCOztBQWVBZixTQUFTTCxTQUFULEdBQXFCQSxTQUFyQjtrQkFDZUssUSIsImZpbGUiOiJIZWFkQmxvYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdGl0bGU6ICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiAgUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBIZWFkQmxvYyA9IChwcm9wcykgPT5cbiAgPEhlYWQ+XG4gICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbn0gLz5cbiAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD17cHJvcHMua2V5d29yZHN9IC8+XG4gICAgPG1ldGEgbmFtZT0nY29weXJpZ2h0JyBjb250ZW50PSdHdWlsbGF1bWUgS29sbHknIC8+XG4gIDwvSGVhZD5cblxuY3NzLmdsb2JhbCgnaHRtbCwgYm9keScsICB7XG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gIGJvcmRlcjogJzAnLFxuICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gIGxpbmVIZWlnaHQ6ICcxLjE1JyxcbiAgZm9udFNpemU6ICcxZW0nLFxuICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgdGV4dFNoYWRvdzogJzAnLFxuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICBNb3pPc3hGb250U21vb3RoaW5nOiAnZ3JheXNjYWxlJyxcbn0pXG5cbkhlYWRCbG9jLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgSGVhZEJsb2NcbiJdfQ==