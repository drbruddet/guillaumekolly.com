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
  return _react2.default.createElement('div', { className: props.table ? "buttonlink fixed" : "buttonlink", 'data-jsx': 68172265
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: props.url }, _react2.default.createElement('a', { target: "_blank" ? props.blank : "", alt: props.alt, 'data-jsx': 68172265
  }, props.title)), _react2.default.createElement(_style2.default, {
    styleId: 68172265,
    css: '.buttonlink[data-jsx="68172265"] {font-size: 1.1em;letter-spacing: -0.04em;font-weight: bold;text-transform: uppercase;text-align: center;background-color: ' + _Theme.theme.colors.white + ';margin: 10px auto;width: 100%;cursor: pointer;-webkit-transition: all 600ms;-moz-transition: all 600ms;-o-transition: all 600ms;-ms-transition: all 600ms;-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}.buttonlink[data-jsx="68172265"]:hover {color: white;background-color: ' + _Theme.theme.colors.primary + ';}.buttonlink[data-jsx="68172265"] > a[data-jsx="68172265"] {color: ' + _Theme.theme.colors.black + ';border: 4px solid ' + _Theme.theme.colors.primary + ';display: block;padding: 10px;box-sizing: border-box;text-decoration: none;width: 100%;height: 100%;}@media screen and (max-width: 640px) {.buttonlink[data-jsx="68172265"] {width: 80%;font-size: 1em;padding: 0;line-height: 0.8em;}.fixed[data-jsx="68172265"] {display: table-cell;vertical-align: middle;width: 45%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmdCLEFBQ0ssa0NBQ00saUJBQ08sd0JBQ04sa0JBQ1EsMEJBQ1AsbUJBQzJCLDhDQUM1QixrQkFDTixZQUNJLGdCQUNjLDhCQUNILDJCQUNGLHlCQUNDLDBCQUNKLHlHQUN2QixDQUVrQix3Q0FDSixhQUNpQyw4Q0FDL0MsQ0FFZ0IsMkRBQ29CLG1DQUNXLDhDQUMvQixlQUNELGNBQ1MsdUJBQ0Qsc0JBQ1YsWUFDQyxhQUNkLENBRXFDLHNDQUN2QixrQ0FDQSxXQUNJLGVBQ0osV0FDUSxtQkFDcEIsQ0FDTyw2QkFBcUIsb0JBQXdCLHVCQUFZLFdBQUUsQ0FDcEUiLCJmaWxlIjoiY29tcG9uZW50cy9CdXR0b25MaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB1cmw6ICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6ICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJsYW5rOiAgUHJvcFR5cGVzLmJvb2wsXG4gIGFsdDogICAgUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogICAgXCJcIixcbiAgYmxhY2s6ICBmYWxzZVxufVxuXG5jb25zdCBCdXR0b25MaW5rID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMudGFibGUgPyBcImJ1dHRvbmxpbmsgZml4ZWRcIiA6IFwiYnV0dG9ubGlua1wifT5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPXtwcm9wcy51cmx9PlxuICAgICAgPGEgdGFyZ2V0PXtcIl9ibGFua1wiID8gcHJvcHMuYmxhbmsgOiBcIlwifSBhbHQ9e3Byb3BzLmFsdH0+e3Byb3BzLnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idXR0b25saW5rIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbmxpbms6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b25saW5rID4gYSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgLmJ1dHRvbmxpbmsge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpeGVkIHsgZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgd2lkdGg6IDQ1JTsgfVxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cblxuQnV0dG9uTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbkJ1dHRvbkxpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5leHBvcnQgZGVmYXVsdCBCdXR0b25MaW5rXG4iXX0= */\n/*@ sourceURL=components/ButtonLink.js */'
  }));
};

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;
exports.default = ButtonLink;