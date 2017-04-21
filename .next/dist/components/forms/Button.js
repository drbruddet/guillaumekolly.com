'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Theme = require('../layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/forms/Button.js';


var propTypes = {
  type: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired
};

var Button = function Button(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 4113665355,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('input', { type: props.type, value: props.value, 'data-jsx': 4113665355,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 4113665355,
    css: 'input[data-jsx="4113665355"] {color: ' + _Theme.theme.colors.white + ';float: left;padding: 15px 5px;border: 4px solid ' + _Theme.theme.colors.white + ';background: transparent;letter-spacing: 0.12em;width: 100%;font-size: 1.3em;font-weight: bold;text-transform: uppercase;cursor: pointer;-webkit-transition: all 600ms;-moz-transition: all 600ms;-o-transition: all 600ms;-ms-transition: all 600ms;-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}input[data-jsx="4113665355"]:hover {background-color: ' + _Theme.theme.colors.white + ';color: ' + _Theme.theme.colors.primary + ';}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUNELDhCQUM4QixtQ0FDdkIsWUFDTSxrQkFDNEIsOENBQ3RCLHdCQUNELHVCQUNYLFlBQ0ssaUJBQ0Msa0JBQ1EsMEJBQ1YsZ0JBQ2MsOEJBQ0gsMkJBQ0YseUJBQ0MsMEJBQ0oseUdBQ3ZCLENBQ1ksb0NBQ21DLDhDQUNYLG1DQUNwQyIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL0J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHR5cGU6ICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+XG4gIDxkaXY+XG4gICAgPGlucHV0IHR5cGU9e3Byb3BzLnR5cGV9IHZhbHVlPXtwcm9wcy52YWx1ZX0gLz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG4gICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG5CdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */\n/*@ sourceURL=components/forms/Button.js */'
  }));
};

Button.propTypes = propTypes;
exports.default = Button;