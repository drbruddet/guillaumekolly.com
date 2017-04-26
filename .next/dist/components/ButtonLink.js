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
  return _react2.default.createElement('div', { className: props.table ? 'buttonlink fixed' : 'buttonlink', 'data-jsx': 1364179150,
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
    css: '.buttonlink[data-jsx="1364179150"] {font-size: 1.1em;letter-spacing: -0.04em;font-weight: bold;text-transform: uppercase;text-align: center;background-color: ' + _Theme.theme.colors.white + ';margin: 10px auto;width: 100%;cursor: pointer;-webkit-transition: all 600ms;-moz-transition: all 600ms;-o-transition: all 600ms;-ms-transition: all 600ms;-webkit-transition: all 600ms;-moz-transition: all 600ms;-ms-transition: all 600ms;transition: all 600ms;}.buttonlink[data-jsx="1364179150"]:hover {color: white;background-color: ' + _Theme.theme.colors.primary + ';}.buttonlink[data-jsx="1364179150"] > a[data-jsx="1364179150"] {color: ' + _Theme.theme.colors.black + ';border: 4px solid ' + _Theme.theme.colors.primary + ';display: block;padding: 10px;box-sizing: border-box;text-decoration: none;width: 100%;height: 100%;}@media(max-width: 640px) {.buttonlink[data-jsx="1364179150"] {width: 80%;font-size: 1em;padding: 0;line-height: 0.8em;}.fixed[data-jsx="1364179150"] {display: table-cell;vertical-align: middle;width: 45%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmdCLEFBQ0ssb0NBQ00saUJBQ08sd0JBQ04sa0JBQ1EsMEJBQ1AsbUJBQzJCLDhDQUM1QixrQkFDTixZQUNJLGdCQUNjLDhCQUNILDJCQUNGLHlCQUNDLDBCQUNKLHlHQUN2QixDQUVrQiwwQ0FDSixhQUNpQyw4Q0FDL0MsQ0FFZ0IsK0RBQ29CLG1DQUNXLDhDQUMvQixlQUNELGNBQ1MsdUJBQ0Qsc0JBQ1YsWUFDQyxhQUNkLENBRXlCLDBCQUNYLG9DQUNBLFdBQ0ksZUFDSixXQUNRLG1CQUNwQixDQUNPLCtCQUFxQixvQkFBd0IsdUJBQVksV0FBRSxDQUNwRSIsImZpbGUiOiJjb21wb25lbnRzL0J1dHRvbkxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHVybDogICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYmxhbms6ICBQcm9wVHlwZXMuYm9vbCxcbiAgYWx0OiAgICBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAgICBcIlwiLFxuICBibGFjazogIGZhbHNlXG59XG5cbmNvbnN0IEJ1dHRvbkxpbmsgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy50YWJsZSA/ICdidXR0b25saW5rIGZpeGVkJyA6ICdidXR0b25saW5rJ30+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17cHJvcHMudXJsfT5cbiAgICAgIDxhIHRhcmdldD17XCJfYmxhbmtcIiA/IHByb3BzLmJsYW5rIDogXCJcIn0gYWx0PXtwcm9wcy5hbHR9Pntwcm9wcy50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYnV0dG9ubGluayB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b25saW5rOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9ubGluayA+IGEge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIC5idXR0b25saW5rIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maXhlZCB7IGRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHdpZHRoOiA0NSU7IH1cbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG5cbkJ1dHRvbkxpbmsucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5CdXR0b25MaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uTGlua1xuIl19 */\n/*@ sourceURL=components/ButtonLink.js */'
  }));
};

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;
exports.default = ButtonLink;