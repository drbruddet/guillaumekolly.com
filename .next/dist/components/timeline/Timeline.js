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

var _TimelineItem = require('./TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

var _Theme = require('../layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/timeline/Timeline.js';


var propTypes = {
  items: _propTypes2.default.array.isRequired,
  type: _propTypes2.default.string
};

var defaultProps = {
  type: ""
};

var renderTimelineItems = function renderTimelineItems(items, type) {
  return items.map(function (item, i) {
    switch (type) {
      case "right":
        return _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        });
        break;
      case "left":
        return _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: 'left', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        });
        break;
      default:
        return i % 2 === 0 ? _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }) : _react2.default.createElement(_TimelineItem2.default, { key: i, item: item, side: 'left', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        });
        break;
    }
  });
};

var Timeline = function Timeline(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 2716784595,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2716784595,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('div', { className: 'containerbefore', 'data-jsx': 2716784595,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), renderTimelineItems(props.items, props.type)), _react2.default.createElement(_style2.default, {
    styleId: 2716784595,
    css: '.container[data-jsx="2716784595"] {width: 80%;padding: 50px 0;margin: 50px auto;position: relative;overflow: hidden;}.containerbefore[data-jsx="2716784595"] {content: \'\';position: absolute;background: ' + _Theme.theme.colors.time_line + ';top: 0;left: 50%;margin-left: -1px;width: 2px;height: 100%;z-index: 1;}@media screen and (max-width: 768px) {.containerbefore[data-jsx="2716784595"] {left: 8px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NnQixBQUNFLG1DQUNDLFdBQ0ssZ0JBQ0Usa0JBQ0MsbUJBQ0YsaUJBQ2xCLENBRWlCLHlDQUNKLFlBQ08sbUJBQ3FCLHdDQUNqQyxPQUNHLFVBQ1Esa0JBQ1AsV0FDRSxhQUNGLFdBQ1osQ0FFcUMsc0NBQ2xCLHlDQUFXLFVBQUUsQ0FDaEMiLCJmaWxlIjoiY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnLi9UaW1lbGluZUl0ZW0nXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAgIFwiXCJcbn1cblxuY29uc3QgcmVuZGVyVGltZWxpbmVJdGVtcyA9IChpdGVtcywgdHlwZSkgPT4ge1xuICByZXR1cm4gaXRlbXMubWFwKCAoaXRlbSwgaSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHJldHVybiA8VGltZWxpbmVJdGVtIGtleT17aX0gaXRlbT17aXRlbX0gc2lkZT0ncmlnaHQnIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICByZXR1cm4gPFRpbWVsaW5lSXRlbSBrZXk9e2l9IGl0ZW09e2l0ZW19IHNpZGU9J2xlZnQnIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKGkgJSAyID09PSAwKVxuICAgICAgICAgID8gPFRpbWVsaW5lSXRlbSBrZXk9e2l9IGl0ZW09e2l0ZW19IHNpZGU9J3JpZ2h0JyAvPlxuICAgICAgICAgIDogPFRpbWVsaW5lSXRlbSBrZXk9e2l9IGl0ZW09e2l0ZW19IHNpZGU9J2xlZnQnIC8+XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBUaW1lbGluZSA9IChwcm9wcykgPT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXJiZWZvcmUnIC8+XG4gICAgICB7cmVuZGVyVGltZWxpbmVJdGVtcyhwcm9wcy5pdGVtcywgcHJvcHMudHlwZSl9XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyYmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMudGltZV9saW5lfTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5jb250YWluZXJiZWZvcmUgeyBsZWZ0OiA4cHg7IH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG5UaW1lbGluZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcblRpbWVsaW5lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVcbiJdfQ== */\n/*@ sourceURL=components/timeline/Timeline.js */'
  }));
};

Timeline.propTypes = propTypes;
Timeline.defaultProps = defaultProps;
exports.default = Timeline;