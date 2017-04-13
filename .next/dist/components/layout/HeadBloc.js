'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _glamor = require('glamor');

var _Theme = require('./Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string
};

var defaultProps = {
  description: "Guillaume Kolly"
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
    _react2.default.createElement('meta', { name: 'copyright', content: 'Guillaume Kolly' }),
    _react2.default.createElement(
      'style',
      null,
      ' @import url(',
      _Theme.theme.font.import,
      '); '
    )
  );
};

_glamor.css.global('html, body', {
  padding: '0',
  margin: '0',
  border: '0',
  lineHeight: '1.3em',
  fontSize: '1em',
  textShadow: '0',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontFamily: _Theme.theme.font.paragraph
});

HeadBloc.propTypes = propTypes;
HeadBloc.defaultProps = defaultProps;
exports.default = HeadBloc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInRpdGxlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFByb3BzIiwiSGVhZEJsb2MiLCJwcm9wcyIsImtleXdvcmRzIiwiZm9udCIsImltcG9ydCIsImdsb2JhbCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXIiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0U2hhZG93IiwiV2Via2l0Rm9udFNtb290aGluZyIsIk1vek9zeEZvbnRTbW9vdGhpbmciLCJmb250RmFtaWx5IiwicGFyYWdyYXBoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxTQUFjLGlCQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRWhCQyxlQUFjLGlCQUFVRjtBQUZSLENBQWxCOztBQUtBLElBQU1HLGVBQWU7QUFDbkJELGVBQWE7QUFETSxDQUFyQjs7QUFJQSxJQUFNRSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVFBLFlBQU1OO0FBQWQsS0FERjtBQUVFLDRDQUFNLFNBQVEsT0FBZCxHQUZGO0FBR0UsNENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsdUNBQTlCLEdBSEY7QUFJRSw0Q0FBTSxNQUFLLGFBQVgsRUFBeUIsU0FBU00sTUFBTUgsV0FBeEMsR0FKRjtBQUtFLDRDQUFNLE1BQUssVUFBWCxFQUFzQixTQUFTRyxNQUFNQyxRQUFyQyxHQUxGO0FBTUUsNENBQU0sTUFBSyxXQUFYLEVBQXVCLFNBQVEsaUJBQS9CLEdBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFxQixtQkFBTUMsSUFBTixDQUFXQyxNQUFoQztBQUFBO0FBQUE7QUFQRixHQURlO0FBQUEsQ0FBakI7O0FBV0EsWUFBSUMsTUFBSixDQUFXLFlBQVgsRUFBMEI7QUFDeEJDLFdBQVMsR0FEZTtBQUV4QkMsVUFBUSxHQUZnQjtBQUd4QkMsVUFBUSxHQUhnQjtBQUl4QkMsY0FBWSxPQUpZO0FBS3hCQyxZQUFVLEtBTGM7QUFNeEJDLGNBQVksR0FOWTtBQU94QkMsdUJBQXFCLGFBUEc7QUFReEJDLHVCQUFxQixXQVJHO0FBU3hCQyxjQUFZLGFBQU1YLElBQU4sQ0FBV1k7QUFUQyxDQUExQjs7QUFZQWYsU0FBU04sU0FBVCxHQUFxQkEsU0FBckI7QUFDQU0sU0FBU0QsWUFBVCxHQUF3QkEsWUFBeEI7a0JBQ2VDLFEiLCJmaWxlIjoiSGVhZEJsb2MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vVGhlbWUnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdGl0bGU6ICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiAgUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGRlc2NyaXB0aW9uOiBcIkd1aWxsYXVtZSBLb2xseVwiXG59XG5cbmNvbnN0IEhlYWRCbG9jID0gKHByb3BzKSA9PlxuICA8SGVhZD5cbiAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XG4gICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17cHJvcHMua2V5d29yZHN9IC8+XG4gICAgPG1ldGEgbmFtZT1cImNvcHlyaWdodFwiIGNvbnRlbnQ9XCJHdWlsbGF1bWUgS29sbHlcIiAvPlxuICAgIDxzdHlsZT4gQGltcG9ydCB1cmwoe3RoZW1lLmZvbnQuaW1wb3J0fSk7IDwvc3R5bGU+XG4gIDwvSGVhZD5cblxuY3NzLmdsb2JhbCgnaHRtbCwgYm9keScsICB7XG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gIGJvcmRlcjogJzAnLFxuICBsaW5lSGVpZ2h0OiAnMS4zZW0nLFxuICBmb250U2l6ZTogJzFlbScsXG4gIHRleHRTaGFkb3c6ICcwJyxcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgTW96T3N4Rm9udFNtb290aGluZzogJ2dyYXlzY2FsZScsXG4gIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQucGFyYWdyYXBoLFxufSlcblxuSGVhZEJsb2MucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5IZWFkQmxvYy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcbmV4cG9ydCBkZWZhdWx0IEhlYWRCbG9jXG4iXX0=