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

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/timeline/TimelineItem.js';


var propTypes = {
  item: _propTypes2.default.object.isRequired,
  side: _propTypes2.default.string
};

var defaultProps = {
  side: ""
};

var giveClass = function giveClass(side) {
  return side == "right" ? 'timelineblock right' : 'timelineblock left';
};

var TimelineItem = function TimelineItem(props) {
  return _react2.default.createElement('div', { className: giveClass(props.side), 'data-jsx': 643135529,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('div', { className: 'marker', 'data-jsx': 643135529,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('div', { className: 'timelinecontent', 'data-jsx': 643135529,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 643135529,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.item.title), _react2.default.createElement('span', { className: 'subtitle', 'data-jsx': 643135529,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, props.item.subtitle), _react2.default.createElement('p', { className: 'description', 'data-jsx': 643135529,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, props.item.description)), _react2.default.createElement(_style2.default, {
    styleId: 643135529,
    css: '.timelineblock[data-jsx="643135529"] {width: calc(50% + 8px);width: -webkit-calc(50% + 8px);width: -moz-calc(50% + 8px);display: -webkit-box;display:-webkit-inline-flex; display:inline-flex;display: -moz-box;display:-webkit-flex; display:flex;-webkit-box-pack: justify;-webkit-justify-content: space-between;-moz-box-pack: justify;justify-content: space-between;clear: both;}.left[data-jsx="643135529"] {float: left;direction: rtl;}.right[data-jsx="643135529"] {float: right;}.marker[data-jsx="643135529"] {width: 10px;height: 10px;border-radius: 50%;border: 2px solid #F5F7FA;margin-top: 10px;z-index: 888;background: ' + _Theme.theme.colors.primary + ';}.timelinecontent[data-jsx="643135529"] {width: 95%;padding: 0 15px;}.title[data-jsx="643135529"] {margin-top: 5px;margin-bottom: 5px;font-size: 25px;font-weight: 500;color: ' + _Theme.theme.colors.time_line_title + ';}.subtitle[data-jsx="643135529"] {font-size: 15px;color: ' + _Theme.theme.colors.light_text + ';}.description[data-jsx="643135529"] {font-size: 14px;line-height: 1.5em;word-spacing: 1px;color: ' + _Theme.theme.colors.text + ';}@media screen and (max-width: 768px) {.timelineblock[data-jsx="643135529"] {margin-bottom: 30px;width: 100%;}.left[data-jsx="643135529"] {float: none;direction: ltr;}.right[data-jsx="643135529"] {float: none;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFDTSxzQ0FDUyx1QkFDUSwrQkFDSCw0QkFDUCxxQkFDQyxpREFDSixrQkFDSixtQ0FDWSwwQkFDYSx1Q0FDaEIsdUJBQ1EsK0JBQ25CLFlBQ2IsQ0FFTSw2QkFBYSxZQUFnQixlQUFFLENBQzlCLDhCQUFjLGFBQUUsQ0FFZiwrQkFDSyxZQUNDLGFBQ00sbUJBQ08sMEJBQ1QsaUJBQ0osYUFDMkIsd0NBQ3pDLENBRWlCLHdDQUNMLFdBQ0ssZ0JBQ2pCLENBRU8sOEJBQ1UsZ0JBQ0csbUJBQ0gsZ0JBQ0MsaUJBQ2tCLG1DQUNwQyxDQUVVLGlDQUNPLGdCQUNtQixtQ0FDcEMsQ0FFYSxvQ0FDSSxnQkFDRyxtQkFDRCxrQkFDaUIsbUNBQ3BDLENBRXFDLHNDQUNwQixzQ0FBcUIsb0JBQWEsWUFBRSxDQUM3Qyw2QkFBYSxZQUFnQixlQUFFLENBQzlCLDhCQUFhLFlBQUUsQ0FDeEIiLCJmaWxlIjoiY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZUl0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNpZGU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBzaWRlOiBcIlwiXG59XG5cbmNvbnN0IGdpdmVDbGFzcyA9IChzaWRlKSA9PiB7XG4gIHJldHVybiBzaWRlID09IFwicmlnaHRcIiA/ICd0aW1lbGluZWJsb2NrIHJpZ2h0JyA6ICd0aW1lbGluZWJsb2NrIGxlZnQnXG59XG5cbmNvbnN0IFRpbWVsaW5lSXRlbSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e2dpdmVDbGFzcyhwcm9wcy5zaWRlKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9J21hcmtlcicgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmVjb250ZW50Jz5cbiAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57cHJvcHMuaXRlbS50aXRsZX08L2gzPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzdWJ0aXRsZSc+e3Byb3BzLml0ZW0uc3VidGl0bGV9PC9zcGFuPlxuICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+e3Byb3BzLml0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpbWVsaW5lYmxvY2sge1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgKyA4cHgpO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDUwJSArIDhweCk7XG4gICAgICAgIHdpZHRoOiAtbW96LWNhbGMoNTAlICsgOHB4KTtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuXG4gICAgICAubGVmdCB7IGZsb2F0OiBsZWZ0OyBkaXJlY3Rpb246IHJ0bDsgfVxuICAgICAgLnJpZ2h0IHsgZmxvYXQ6IHJpZ2h0OyB9XG5cbiAgICAgIC5tYXJrZXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGNUY3RkE7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHotaW5kZXg6IDg4ODtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGV9O1xuICAgICAgfVxuXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodF90ZXh0fTtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHdvcmQtc3BhY2luZzogMXB4O1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dH07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC50aW1lbGluZWJsb2NrIHsgbWFyZ2luLWJvdHRvbTogMzBweDsgd2lkdGg6IDEwMCU7IH1cbiAgICAgICAgLmxlZnQgeyBmbG9hdDogbm9uZTsgZGlyZWN0aW9uOiBsdHI7IH1cbiAgICAgICAgLnJpZ2h0IHsgZmxvYXQ6IG5vbmU7IH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG5UaW1lbGluZUl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5UaW1lbGluZUl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUl0ZW1cbiJdfQ== */\n/*@ sourceURL=components/timeline/TimelineItem.js */'
  }));
};

TimelineItem.propTypes = propTypes;
TimelineItem.defaultProps = defaultProps;
exports.default = TimelineItem;