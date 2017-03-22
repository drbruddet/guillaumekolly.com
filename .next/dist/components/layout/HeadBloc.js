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

exports.default = function () {
  return _react2.default.createElement(
    _head2.default,
    null,
    _react2.default.createElement(
      'title',
      null,
      'Guillaume Kolly'
    ),
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
    _react2.default.createElement('meta', { name: 'description', content: 'Guillaume Kolly, <strong>full stack developer</strong> based in Lyon - France.' }),
    _react2.default.createElement('meta', { name: 'keywords', content: 'guillaume, kolly, frontend, backend, full stack, developer, web, javascript, reactJS, Meteor, Js, NextJS, Webpack' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXIiLCJmb250RmFtaWx5IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsInRleHREZWNvcmF0aW9uIiwidGV4dFNoYWRvdyIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJNb3pPc3hGb250U21vb3RoaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztrQkFFZTtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUUsNENBQU0sU0FBUSxPQUFkLEdBRkY7QUFHRSw0Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSx1Q0FBOUIsR0FIRjtBQUlFLDRDQUFNLE1BQUssYUFBWCxFQUF5QixTQUFRLGdGQUFqQyxHQUpGO0FBS0UsNENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsbUhBQTlCLEdBTEY7QUFNRSw0Q0FBTSxNQUFLLFdBQVgsRUFBdUIsU0FBUSxpQkFBL0I7QUFORixHQURhO0FBQUEsQzs7QUFVZixZQUFJQSxNQUFKLENBQVcsWUFBWCxFQUEwQjtBQUN4QkMsV0FBUyxHQURlO0FBRXhCQyxVQUFRLEdBRmdCO0FBR3hCQyxVQUFRLEdBSGdCO0FBSXhCQyxjQUFZLFlBSlk7QUFLeEJDLGNBQVksTUFMWTtBQU14QkMsWUFBVSxLQU5jO0FBT3hCQyxjQUFZLEtBUFk7QUFReEJDLGFBQVcsUUFSYTtBQVN4QkMsa0JBQWdCLE1BVFE7QUFVeEJDLGNBQVksR0FWWTtBQVd4QkMsdUJBQXFCLGFBWEc7QUFZeEJDLHVCQUFxQjtBQVpHLENBQTFCIiwiZmlsZSI6IkhlYWRCbG9jLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT5cbiAgPEhlYWQ+XG4gICAgPHRpdGxlPkd1aWxsYXVtZSBLb2xseTwvdGl0bGU+XG4gICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0d1aWxsYXVtZSBLb2xseSwgPHN0cm9uZz5mdWxsIHN0YWNrIGRldmVsb3Blcjwvc3Ryb25nPiBiYXNlZCBpbiBMeW9uIC0gRnJhbmNlLicgLz5cbiAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nZ3VpbGxhdW1lLCBrb2xseSwgZnJvbnRlbmQsIGJhY2tlbmQsIGZ1bGwgc3RhY2ssIGRldmVsb3Blciwgd2ViLCBqYXZhc2NyaXB0LCByZWFjdEpTLCBNZXRlb3IsIEpzLCBOZXh0SlMsIFdlYnBhY2snIC8+XG4gICAgPG1ldGEgbmFtZT0nY29weXJpZ2h0JyBjb250ZW50PSdHdWlsbGF1bWUgS29sbHknIC8+XG4gIDwvSGVhZD5cblxuY3NzLmdsb2JhbCgnaHRtbCwgYm9keScsICB7XG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gIGJvcmRlcjogJzAnLFxuICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gIGxpbmVIZWlnaHQ6ICcxLjE1JyxcbiAgZm9udFNpemU6ICcxZW0nLFxuICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgdGV4dFNoYWRvdzogJzAnLFxuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICBNb3pPc3hGb250U21vb3RoaW5nOiAnZ3JheXNjYWxlJyxcbn0pXG4iXX0=