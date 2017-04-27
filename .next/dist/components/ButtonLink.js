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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Theme = require('../components/layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/ButtonLink.js';


var propTypes = {
  url: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  blank: _propTypes2.default.bool,
  alt: _propTypes2.default.string
};

var defaultProps = {
  alt: "",
  black: false
};

var ButtonLink = function ButtonLink(props) {
  return _react2.default.createElement('div', { className: props.table ? "buttonlink fixed" : "buttonlink", 'data-jsx': 1364179150,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: props.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', { target: "_blank" ? props.blank : "", alt: props.alt, 'data-jsx': 1364179150,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.title)), _react2.default.createElement(_style2.default, {
    styleId: 1364179150,
    css: '.buttonlink[data-jsx="1364179150"] {font-size: 1.1em;letter-spacing: -0.04em;font-weight: bold;text-transform: uppercase;text-align: center;background-color: ' + _Theme.theme.colors.white + ';margin: 10px auto;width: 100%;cursor: pointer;-webkit-transition: all 600ms;-moz-transition: all 600ms;-o-transition: all 600ms;-ms-transition: all 600ms;-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}.buttonlink[data-jsx="1364179150"]:hover {color: white;background-color: ' + _Theme.theme.colors.primary + ';}.buttonlink[data-jsx="1364179150"] > a[data-jsx="1364179150"] {color: ' + _Theme.theme.colors.black + ';border: 4px solid ' + _Theme.theme.colors.primary + ';display: block;padding: 10px;box-sizing: border-box;text-decoration: none;width: 100%;height: 100%;}@media(max-width: 640px) {.buttonlink[data-jsx="1364179150"] {width: 80%;font-size: 1em;padding: 0;line-height: 0.8em;}.fixed[data-jsx="1364179150"] {display: table-cell;vertical-align: middle;width: 45%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmdCLEFBQ0ssb0NBQ00saUJBQ08sd0JBQ04sa0JBQ1EsMEJBQ1AsbUJBQzJCLDhDQUM1QixrQkFDTixZQUNJLGdCQUNjLDhCQUNILDJCQUNGLHlCQUNDLDBCQUNKLHlHQUN2QixDQUVrQiwwQ0FDSixhQUNpQyw4Q0FDL0MsQ0FFZ0IsK0RBQ29CLG1DQUNXLDhDQUMvQixlQUNELGNBQ1MsdUJBQ0Qsc0JBQ1YsWUFDQyxhQUNkLENBRXlCLDBCQUNYLG9DQUNBLFdBQ0ksZUFDSixXQUNRLG1CQUNwQixDQUNPLCtCQUFxQixvQkFBd0IsdUJBQVksV0FBRSxDQUNwRSIsImZpbGUiOiJjb21wb25lbnRzL0J1dHRvbkxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHVybDogICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYmxhbms6ICBQcm9wVHlwZXMuYm9vbCxcbiAgYWx0OiAgICBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAgICBcIlwiLFxuICBibGFjazogIGZhbHNlXG59XG5cbmNvbnN0IEJ1dHRvbkxpbmsgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy50YWJsZSA/IFwiYnV0dG9ubGluayBmaXhlZFwiIDogXCJidXR0b25saW5rXCJ9PlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e3Byb3BzLnVybH0+XG4gICAgICA8YSB0YXJnZXQ9e1wiX2JsYW5rXCIgPyBwcm9wcy5ibGFuayA6IFwiXCJ9IGFsdD17cHJvcHMuYWx0fT57cHJvcHMudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJ1dHRvbmxpbmsge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG4gICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9ubGluazpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbmxpbmsgPiBhIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAuYnV0dG9ubGluayB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZml4ZWQgeyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB3aWR0aDogNDUlOyB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG5CdXR0b25MaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuQnV0dG9uTGluay5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkxpbmtcbiJdfQ== */\n/*@ sourceURL=components/ButtonLink.js */'
  }));
};

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;
exports.default = ButtonLink;