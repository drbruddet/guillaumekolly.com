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
  return _react2.default.createElement('div', { className: props.vertical ? 'vertical menu' : props.horizontal ? 'horizontal menu' : 'menu', 'data-jsx': 769624864,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, renderLinks(props.links), _react2.default.createElement(_style2.default, {
    styleId: 2456388221,
    css: '.menu[data-jsx="769624864"] {text-transform: uppercase;z-index: 1;text-decoration: none;}.vertical[data-jsx="769624864"] {display: inline-block;margin: 20px 30px;-webkit-transform-origin: left top;-moz-transform-origin: left top;-ms-transform-origin: left top;transform-origin: left top;-webkit-transform: rotate(270deg) translateX(-100%);-moz-transform: rotate(270deg) translateX(-100%);-ms-transform: rotate(270deg) translateX(-100%);transform: rotate(270deg) translateX(-100%);}.horizontal[data-jsx="769624864"] {display: inline-block;text-align: center;position: relative;}@media(max-width: 1080px) {.horizontal[data-jsx="769624864"] {font-size: 0.7em;}}@media(max-width: 840px) {.horizontal[data-jsx="769624864"] {font-size: 1.1em;}}@media(max-width: 640px) {.vertical[data-jsx="769624864"] {white-space: nowrap;left: 8px;top: 10px;margin: 0;position: absolute;}.horizontal[data-jsx="769624864"] {font-size: 0.8em;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBQ0QsNkJBQ3FCLDBCQUNmLFdBQ1csc0JBQ3ZCLENBRVUsaUNBQ2Esc0JBQ0osa0JBQ1MsNkhBQ2lCLGlNQUM3QyxDQUVZLG1DQUNXLHNCQUNILG1CQUNBLG1CQUNwQixDQUUwQiwyQkFDWixtQ0FBa0IsaUJBQUUsQ0FDbEMsQ0FFeUIsMEJBQ1gsbUNBQWtCLGlCQUFFLENBQ2xDLENBRXlCLDBCQUNiLGlDQUNXLG9CQUNWLFVBQ0EsVUFDQSxVQUNTLG1CQUNwQixDQUNZLG1DQUNNLGlCQUNsQixDQUNGIiwiZmlsZSI6ImNvbXBvbmVudHMvTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9sYXlvdXQvVGhlbWUnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgbGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmNvbnN0IHJlbmRlckxpbmtzID0gKGxpbmtzKSA9PiB7XG4gIHJldHVybiBsaW5rcy5tYXAoIChsaW5rLCBpKSA9PiB7XG4gICAgcmV0dXJuIGxpbmsudHlwZSA9PT0gXCJlbWFpbFwiXG4gICAgICA/IDxhIGtleT17aX0gaHJlZj17bGluay51cmx9IGNsYXNzTmFtZT1cImxpbmtcIj57bGluay5uYW1lfTwvYT5cbiAgICAgIDogPExpbmsga2V5PXtpfSBocmVmPXtsaW5rLnVybH0+XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImxpbmtcIj57bGluay5uYW1lfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgfSlcbn1cblxuY29uc3QgTWVudSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnZlcnRpY2FsXG4gID8gJ3ZlcnRpY2FsIG1lbnUnIDogcHJvcHMuaG9yaXpvbnRhbCA/ICdob3Jpem9udGFsIG1lbnUnIDogJ21lbnUnfT5cbiAgICB7cmVuZGVyTGlua3MocHJvcHMubGlua3MpfVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52ZXJ0aWNhbCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAzMHB4O1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9yaXpvbnRhbCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgICAgICAgICAuaG9yaXpvbnRhbCB7IGZvbnQtc2l6ZTogMC43ZW07IH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgLmhvcml6b250YWwgeyBmb250LXNpemU6IDEuMWVtOyB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIC52ZXJ0aWNhbCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG9yaXpvbnRhbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLmxpbmsge1xuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTQwJTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubGluazpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyB9XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cblxuTWVudS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiJdfQ== */\n/*@ sourceURL=components/Menu.js */'
  }), _react2.default.createElement(_style2.default, {
    styleId: 1060780824,
    css: '\n      .link {\n        margin: 0 10px 0 0;\n        font-size: 140%;\n        text-decoration: none;\n        color: ' + _Theme.theme.colors.black + ';\n        cursor: pointer;\n      }\n      .link:hover { text-decoration: line-through; }\n\n      @media(max-width: 640px) {\n        .link {\n          font-size: 100%;\n          display: list-item;\n          list-style-type: none;\n          width: 100%;\n          margin: 5px auto;\n        }\n      }\n    '
  }));
};

Menu.propTypes = propTypes;
exports.default = Menu;