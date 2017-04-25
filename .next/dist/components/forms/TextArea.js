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

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/forms/TextArea.js';


var propTypes = {
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string,
  cols: _propTypes2.default.number,
  rows: _propTypes2.default.number
};

var defaultProps = {
  cols: 30,
  rows: 5
};

var TextArea = function TextArea(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 3289696822,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('label', { htmlFor: props.name, 'data-jsx': 3289696822,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('textarea', {
    className: 'textarea',
    type: 'text',
    name: props.name,
    placeholder: props.placeholder ? props.placeholder : props.name,
    cols: props.cols,
    rows: props.rows,
    required: true,
    'data-jsx': 3289696822,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('span', { className: 'animation', 'data-jsx': 3289696822,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 3289696822,
    css: '.textarea[data-jsx="3289696822"] {font: inherit;margin: 0;background: none;border: none;border-bottom: solid 2px ' + _Theme.theme.colors.white + ';;font-size: 1em;box-shadow: none;-moz-box-shadow: none;-webkit-box-shadow: none;margin: 0 0 1.875em 0;padding: 0 0 0.875em 0;width: 100%;height: 150px;resize: none;line-height: \'150%\',          overflow: auto;}[data-jsx="3289696822"]::-webkit-input-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3289696822"]::-moz-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3289696822"]:-ms-input-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3289696822"]:-moz-placeholder {color: ' + _Theme.theme.colors.black + ';}.textarea[data-jsx="3289696822"]:focus {outline: none;padding: 0 0 0.875em 0;}.textarea[data-jsx="3289696822"]:focus ~ span[data-jsx="3289696822"] {margin-left: -50px;}.message[data-jsx="3289696822"] {float: none;}.animation[data-jsx="3289696822"] {-webkit-transition: all 0.5s linear;-moz-transition: all 0.5s linear;-ms-transition: all 0.5s linear;-o-transition: all 0.5s linear;-webkit-transition: all 0.5s linear;-moz-transition: all 0.5s linear;-ms-transition: all 0.5s linear;transition: all 0.5s linear;content: \'\';}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvVGV4dEFyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JnQixBQUNHLGtDQUNLLGNBQ0osVUFDTyxpQkFDSixhQUN3QyxxREFBQyxDQUN2QyxlQUNFLGlCQUNLLHNCQUNHLHlCQUNILHNCQUNDLHVCQUNYLFlBQ0UsY0FDRCxhQUVFLDZDQUNoQixDQUU0QixvREFBb0MsbUNBQUUsQ0FDL0MsMkNBQW9DLG1DQUFFLENBQ2xDLCtDQUFvQyxtQ0FBRSxDQUMzQywwQ0FBb0MsbUNBQUUsQ0FFeEMsd0NBQWUsY0FBd0IsdUJBQUUsQ0FDbEMsc0VBQW9CLG1CQUFFLENBQ3BDLGlDQUFhLFlBQUUsQ0FFYixtQ0FDMEIsb0NBQ0gsaUNBQ0QsZ0NBQ0QsK0JBQ0gsaUlBQ2hCLFlBQ2IiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy9UZXh0QXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vbGF5b3V0L1RoZW1lJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbHM6ICAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgcm93czogICAgICAgICBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgY29sczogMzAsXG4gIHJvd3M6IDVcbn1cblxuY29uc3QgVGV4dEFyZWEgPSAocHJvcHMpID0+XG4gIDxkaXY+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9IC8+XG4gICAgPHRleHRhcmVhXG4gICAgICBjbGFzc05hbWU9J3RleHRhcmVhJ1xuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlciA/IHByb3BzLnBsYWNlaG9sZGVyIDogcHJvcHMubmFtZX1cbiAgICAgIGNvbHM9e3Byb3BzLmNvbHN9XG4gICAgICByb3dzPXtwcm9wcy5yb3dzfVxuICAgICAgcmVxdWlyZWRcbiAgICAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT0nYW5pbWF0aW9uJy8+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50ZXh0YXJlYSB7XG4gICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICR7dGhlbWUuY29sb3JzLndoaXRlfTs7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEuODc1ZW0gMDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMC44NzVlbSAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAnMTUwJScsXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9OyB9XG4gICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307IH1cbiAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307IH1cbiAgICAgICAgOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9OyB9XG5cbiAgICAgICAgLnRleHRhcmVhOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgcGFkZGluZzogMCAwIDAuODc1ZW0gMDsgfVxuICAgICAgICAudGV4dGFyZWE6Zm9jdXMgfiBzcGFuIHsgbWFyZ2luLWxlZnQ6IC01MHB4OyB9XG4gICAgICAgIC5tZXNzYWdlIHsgZmxvYXQ6IG5vbmU7IH1cblxuICAgICAgICAuYW5pbWF0aW9uIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cblxuICBUZXh0QXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbiAgZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcbiJdfQ== */\n/*@ sourceURL=components/forms/TextArea.js */'
  }));
};

TextArea.propTypes = propTypes;
exports.default = TextArea;