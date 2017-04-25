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
  return _react2.default.createElement('div', { className: giveClass(props.side), 'data-jsx': 1756301545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('div', { className: 'marker', 'data-jsx': 1756301545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('div', { className: 'timelinecontent', 'data-jsx': 1756301545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('h3', { className: 'title', 'data-jsx': 1756301545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.item.title), _react2.default.createElement('span', { className: 'subtitle', 'data-jsx': 1756301545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, props.item.subtitle), _react2.default.createElement('p', { className: 'description', 'data-jsx': 1756301545,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, props.item.description)), _react2.default.createElement(_style2.default, {
    styleId: 1756301545,
    css: '.timelineblock[data-jsx="1756301545"] {width: calc(50% + 8px);width: -webkit-calc(50% + 8px);width: -moz-calc(50% + 8px);display: -webkit-box;display:-webkit-inline-flex; display:inline-flex;display: -moz-box;display:-webkit-flex; display:flex;-webkit-box-pack: justify;-webkit-justify-content: space-between;-moz-box-pack: justify;justify-content: space-between;clear: both;}.left[data-jsx="1756301545"] {float: left;direction: rtl;}.right[data-jsx="1756301545"] {float: right;}.marker[data-jsx="1756301545"] {width: 10px;height: 10px;border-radius: 50%;border: 2px solid #F5F7FA;margin-top: 10px;z-index: 888;background: ' + _Theme.theme.colors.primary + ';}.timelinecontent[data-jsx="1756301545"] {width: 95%;padding: 0 15px;}.title[data-jsx="1756301545"] {margin-top: 5px;margin-bottom: 5px;font-size: 25px;font-weight: 500;color: ' + _Theme.theme.colors.time_line_title + ';}.subtitle[data-jsx="1756301545"] {font-size: 15px;color: ' + _Theme.theme.colors.light_text + ';}.description[data-jsx="1756301545"] {font-size: 14px;line-height: 1.5em;word-spacing: 1px;color: ' + _Theme.theme.colors.text + ';}@media screen and (max-width: 768px) {.timelineblock[data-jsx="1756301545"] {margin-bottom: 30px;width: 100%;}.left[data-jsx="1756301545"] {float: none;direction: ltr;}.right[data-jsx="1756301545"] {float: none;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFDTSx1Q0FDUyx1QkFDUSwrQkFDSCw0QkFDUCxxQkFDQyxpREFDSixrQkFDSixtQ0FDWSwwQkFDYSx1Q0FDaEIsdUJBQ1EsK0JBQ25CLFlBQ2IsQ0FFTSw4QkFDTyxZQUNHLGVBQ2hCLENBRU8sK0JBQ08sYUFDZCxDQUVRLGdDQUNLLFlBQ0MsYUFDTSxtQkFDTywwQkFDVCxpQkFDSixhQUMyQix3Q0FDekMsQ0FFaUIseUNBQ0wsV0FDSyxnQkFDakIsQ0FFTywrQkFDVSxnQkFDRyxtQkFDSCxnQkFDQyxpQkFDa0IsbUNBQ3BDLENBRVUsa0NBQ08sZ0JBQ21CLG1DQUNwQyxDQUVhLHFDQUNJLGdCQUNHLG1CQUNELGtCQUNpQixtQ0FDcEMsQ0FFcUMsc0NBQ3BCLHVDQUFxQixvQkFBYSxZQUFFLENBQzdDLDhCQUFhLFlBQWdCLGVBQUUsQ0FDOUIsK0JBQWEsWUFBRSxDQUN4QiIsImZpbGUiOiJjb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGl0ZW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2lkZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHNpZGU6IFwiXCJcbn1cblxuY29uc3QgZ2l2ZUNsYXNzID0gKHNpZGUpID0+IHtcbiAgcmV0dXJuIHNpZGUgPT0gXCJyaWdodFwiID8gJ3RpbWVsaW5lYmxvY2sgcmlnaHQnIDogJ3RpbWVsaW5lYmxvY2sgbGVmdCdcbn1cblxuY29uc3QgVGltZWxpbmVJdGVtID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Z2l2ZUNsYXNzKHByb3BzLnNpZGUpfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWFya2VyJyAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lbGluZWNvbnRlbnQnPlxuICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPntwcm9wcy5pdGVtLnRpdGxlfTwvaDM+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J3N1YnRpdGxlJz57cHJvcHMuaXRlbS5zdWJ0aXRsZX08L3NwYW4+XG4gICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57cHJvcHMuaXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGltZWxpbmVibG9jayB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSArIDhweCk7XG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoNTAlICsgOHB4KTtcbiAgICAgICAgd2lkdGg6IC1tb3otY2FsYyg1MCUgKyA4cHgpO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICB9XG5cbiAgICAgIC5sZWZ0IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgfVxuXG4gICAgICAucmlnaHQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC5tYXJrZXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGNUY3RkE7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHotaW5kZXg6IDg4ODtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGV9O1xuICAgICAgfVxuXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodF90ZXh0fTtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHdvcmQtc3BhY2luZzogMXB4O1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dH07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC50aW1lbGluZWJsb2NrIHsgbWFyZ2luLWJvdHRvbTogMzBweDsgd2lkdGg6IDEwMCU7IH1cbiAgICAgICAgLmxlZnQgeyBmbG9hdDogbm9uZTsgZGlyZWN0aW9uOiBsdHI7IH1cbiAgICAgICAgLnJpZ2h0IHsgZmxvYXQ6IG5vbmU7IH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG5UaW1lbGluZUl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5UaW1lbGluZUl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUl0ZW1cbiJdfQ== */\n/*@ sourceURL=components/timeline/TimelineItem.js */'
  }));
};

TimelineItem.propTypes = propTypes;
TimelineItem.defaultProps = defaultProps;
exports.default = TimelineItem;