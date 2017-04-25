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

var _reactParallax = require('react-parallax');

var _Theme = require('../components/layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/ParallaxBlock.js';


var propTypes = {
  title: _propTypes2.default.string.isRequired,
  background: _propTypes2.default.object.isRequired,
  strength: _propTypes2.default.number
};

var defaultProps = {
  strength: 600
};

var ParallaxBlock = function ParallaxBlock(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 1973745885,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_reactParallax.Parallax, { strength: props.strength, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_reactParallax.Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, ' ', props.background, ' '), _react2.default.createElement('div', { className: 'parallax', 'data-jsx': 1973745885,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('h2', { className: 'title', 'data-jsx': 1973745885,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, ' ', props.title, ' '))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 1973745885,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, ' ', props.children, ' '), _react2.default.createElement(_style2.default, {
    styleId: 1973745885,
    css: '.parallax[data-jsx="1973745885"] {height: 200px;border-top: 1px solid #ddd;}.title[data-jsx="1973745885"] {text-align: center;font-family: ' + _Theme.theme.font.title + ';text-transform: uppercase;font-size: 2.3em;line-height: 2.5em;color: ' + _Theme.theme.colors.black + ';padding-top: 30px;}@media(max-width: 640px) {.parallax[data-jsx="1973745885"] {height: 100px;}.title[data-jsx="1973745885"] {font-size: 1.3em;line-height: 1.5em;}}.content[data-jsx="1973745885"] {margin: 5% auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFyYWxsYXhCbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmdCLEFBQ0csa0NBQ0ssY0FDYSwyQkFDNUIsQ0FFTywrQkFDYSxtQkFDc0IseUNBQ2YsMEJBQ1QsaUJBQ0UsbUJBQ2dCLG1DQUNqQixrQkFDbkIsQ0FFeUIsMEJBQ2Isa0NBQWUsY0FBRSxDQUNwQiwrQkFBa0IsaUJBQW9CLG1CQUFFLENBQ2pELENBRVMsaUNBQ1MsZ0JBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvUGFyYWxsYXhCbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYXJhbGxheCwgQmFja2dyb3VuZCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4J1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYmFja2dyb3VuZDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzdHJlbmd0aDogICBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgc3RyZW5ndGg6IDYwMFxufVxuXG5jb25zdCBQYXJhbGxheEJsb2NrID0gKHByb3BzKSA9PlxuICA8ZGl2PlxuICAgIDxQYXJhbGxheCBzdHJlbmd0aD17cHJvcHMuc3RyZW5ndGh9PlxuICAgICAgPEJhY2tncm91bmQ+IHtwcm9wcy5iYWNrZ3JvdW5kfSA8L0JhY2tncm91bmQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFyYWxsYXgnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSc+IHtwcm9wcy50aXRsZX0gPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFyYWxsYXg+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPiB7cHJvcHMuY2hpbGRyZW59IDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGFyYWxsYXgge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250LnRpdGxlfTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4zZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgIC5wYXJhbGxheCB7IGhlaWdodDogMTAwcHg7IH1cbiAgICAgICAgICAudGl0bGUgeyBmb250LXNpemU6IDEuM2VtOyBsaW5lLWhlaWdodDogMS41ZW07IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG5cblBhcmFsbGF4QmxvY2sucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5QYXJhbGxheEJsb2NrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuZXhwb3J0IGRlZmF1bHQgUGFyYWxsYXhCbG9ja1xuIl19 */\n/*@ sourceURL=components/ParallaxBlock.js */'
  }));
};

ParallaxBlock.propTypes = propTypes;
ParallaxBlock.defaultProps = defaultProps;
exports.default = ParallaxBlock;