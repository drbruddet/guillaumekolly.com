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

var _Theme = require('./layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/Menu.js';


var propTypes = {
  links: _propTypes2.default.array.isRequired
};

var renderLinks = function renderLinks(links) {
  return links.map(function (link, i) {
    return link.type === "email" ? _react2.default.createElement('a', { key: i, href: link.url, className: 'link', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, link.name) : _react2.default.createElement(_link2.default, { key: i, href: link.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement('a', { target: '_blank', className: 'link', __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, link.name));
  });
};

var Menu = function Menu(props) {
  return _react2.default.createElement('div', { className: props.vertical ? 'vertical menu' : props.horizontal ? 'horizontal menu' : 'menu', 'data-jsx': 3677328968,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, renderLinks(props.links), _react2.default.createElement(_style2.default, {
    styleId: 1396052925,
    css: '.menu[data-jsx="3677328968"] {text-transform: uppercase;z-index: 1;text-decoration: none;}.vertical[data-jsx="3677328968"] {display: inline-block;margin: 20px 30px;-webkit-transform-origin: left top;-moz-transform-origin: left top;-ms-transform-origin: left top;transform-origin: left top;-webkit-transform: rotate(270deg) translateX(-100%);-moz-transform: rotate(270deg) translateX(-100%);-ms-transform: rotate(270deg) translateX(-100%);transform: rotate(270deg) translateX(-100%);}.horizontal[data-jsx="3677328968"] {display: inline-block;text-align: center;position: relative;}@media(max-width: 1080px) {.horizontal[data-jsx="3677328968"] {font-size: 0.7em;}}@media(max-width: 840px) {.horizontal[data-jsx="3677328968"] {font-size: 1.1em;}}@media(max-width: 640px) {.vertical[data-jsx="3677328968"] {white-space: nowrap;left: 8px;top: 10px;margin: 0;position: absolute;}.horizontal[data-jsx="3677328968"] {font-size: 0.8em;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBQ0QsOEJBQ3FCLDBCQUNmLFdBQ1csc0JBQ3ZCLENBRVUsa0NBQ2Esc0JBQ0osa0JBQ1MsNkhBQ2lCLGlNQUM3QyxDQUVZLG9DQUNXLHNCQUNILG1CQUNBLG1CQUNwQixDQUUwQiwyQkFDWixvQ0FBa0IsaUJBQUUsQ0FDbEMsQ0FFeUIsMEJBQ1gsb0NBQWtCLGlCQUFFLENBQ2xDLENBRXlCLDBCQUNiLGtDQUNXLG9CQUNWLFVBQ0EsVUFDQSxVQUNTLG1CQUNwQixDQUNZLG9DQUFrQixpQkFBRSxDQUNsQyIsImZpbGUiOiJjb21wb25lbnRzL01lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5jb25zdCByZW5kZXJMaW5rcyA9IChsaW5rcykgPT4ge1xuICByZXR1cm4gbGlua3MubWFwKCAobGluaywgaSkgPT4ge1xuICAgIHJldHVybiBsaW5rLnR5cGUgPT09IFwiZW1haWxcIlxuICAgICAgPyA8YSBrZXk9e2l9IGhyZWY9e2xpbmsudXJsfSBjbGFzc05hbWU9XCJsaW5rXCI+e2xpbmsubmFtZX08L2E+XG4gICAgICA6IDxMaW5rIGtleT17aX0gaHJlZj17bGluay51cmx9PlxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rXCI+e2xpbmsubmFtZX08L2E+XG4gICAgICA8L0xpbms+XG4gIH0pXG59XG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy52ZXJ0aWNhbFxuICA/ICd2ZXJ0aWNhbCBtZW51JyA6IHByb3BzLmhvcml6b250YWwgPyAnaG9yaXpvbnRhbCBtZW51JyA6ICdtZW51J30+XG4gICAge3JlbmRlckxpbmtzKHByb3BzLmxpbmtzKX1cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnUge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudmVydGljYWwge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW46IDIwcHggMzBweDtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvcml6b250YWwge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogMTA4MHB4KSB7XG4gICAgICAgICAgLmhvcml6b250YWwgeyBmb250LXNpemU6IDAuN2VtOyB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA4NDBweCkge1xuICAgICAgICAgIC5ob3Jpem9udGFsIHsgZm9udC1zaXplOiAxLjFlbTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAudmVydGljYWwge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvcml6b250YWwgeyBmb250LXNpemU6IDAuOGVtOyB9XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLmxpbmsge1xuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTQwJTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAzNDBweCkge1xuICAgICAgICAubGluayB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG5cbk1lbnUucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBNZW51XG4iXX0= */\n/*@ sourceURL=components/Menu.js */'
  }), _react2.default.createElement(_style2.default, {
    styleId: 793713392,
    css: '\n      .link {\n        margin: 0 10px 0 0;\n        font-size: 140%;\n        text-decoration: none;\n        color: ' + _Theme.theme.colors.black + ';\n        cursor: pointer;\n      }\n\n      .link:hover {\n        text-decoration: line-through;\n      }\n\n      @media(max-width: 640px) {\n        .link {\n          font-size: 100%;\n          width: 100%;\n          margin: auto 5px;\n        }\n      }\n\n      @media(max-width: 340px) {\n        .link {\n          font-size: 0.8em;\n        }\n      }\n    '
  }));
};

Menu.propTypes = propTypes;
exports.default = Menu;