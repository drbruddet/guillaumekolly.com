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

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/forms/Input.js';


var propTypes = {
  type: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string
};

var Input = function Input(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 3444613253,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('label', { htmlFor: props.name, 'data-jsx': 3444613253,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('input', {
    type: props.type,
    name: props.name,
    className: 'input',
    placeholder: props.placeholder ? props.placeholder : props.name,
    required: true,
    'data-jsx': 3444613253,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('span', { className: 'animation', 'data-jsx': 3444613253,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 3444613253,
    css: '.input[data-jsx="3444613253"] {font: inherit;margin: 0;line-height: normal;background: none;border: none;border-bottom: solid 2px ' + _Theme.theme.colors.white + ';font-size: 1em;box-shadow: none;-moz-box-shadow: none;-webkit-box-shadow: none;margin: 0 0 1.875em 0;padding: 0 0 0.875em 0;width: 100%;}[data-jsx="3444613253"]::-webkit-input-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3444613253"]::-moz-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3444613253"]:-ms-input-placeholder {color: ' + _Theme.theme.colors.black + ';}[data-jsx="3444613253"]:-moz-placeholder {color: ' + _Theme.theme.colors.black + ';}.input[data-jsx="3444613253"]:focus {outline: none;padding: 0 0 0.875em 0;}.input[data-jsx="3444613253"]:focus ~ span[data-jsx="3444613253"] {margin-left: -50px;}.name[data-jsx="3444613253"] {float: right;width: 45%;}.email[data-jsx="3444613253"] {float: right;width: 45%;margin-right: 10%;}.subject[data-jsx="3444613253"] {width: 100%;}.animation[data-jsx="3444613253"] {-webkit-transition: all 0.5s linear;-moz-transition: all 0.5s linear;-ms-transition: all 0.5s linear;-o-transition: all 0.5s linear;-webkit-transition: all 0.5s linear;-moz-transition: all 0.5s linear;-ms-transition: all 0.5s linear;transition: all 0.5s linear;content: \'\';}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJnQixBQUNBLCtCQUNRLGNBQ0osVUFDVSxvQkFDSCxpQkFDSixhQUN3QyxxREFDdEMsZUFDRSxpQkFDSyxzQkFDRyx5QkFDSCxzQkFDQyx1QkFDWCxZQUNiLENBRTRCLG9EQUFvQyxtQ0FBRSxDQUMvQywyQ0FBb0MsbUNBQUUsQ0FDbEMsK0NBQW9DLG1DQUFFLENBQzNDLDBDQUFvQyxtQ0FBRSxDQUUzQyxxQ0FBZSxjQUF3Qix1QkFBRSxDQUNsQyxtRUFBb0IsbUJBQUUsQ0FDcEMsOEJBQWMsYUFBWSxXQUFFLENBQzNCLCtCQUFjLGFBQVksV0FBbUIsa0JBQUUsQ0FDN0MsaUNBQWEsWUFBRSxDQUViLG1DQUMwQixvQ0FDSCxpQ0FDRCxnQ0FDRCwrQkFDSCxpSUFDaEIsWUFDYiIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL0lucHV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9sYXlvdXQvVGhlbWUnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdHlwZTogICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6ICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogIFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgSW5wdXQgPSAocHJvcHMpID0+XG4gIDxkaXY+XG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9IC8+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPXtwcm9wcy50eXBlfVxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIGNsYXNzTmFtZT0naW5wdXQnXG4gICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IHByb3BzLm5hbWV9XG4gICAgICByZXF1aXJlZFxuICAgIC8+XG4gICAgPHNwYW4gY2xhc3NOYW1lPSdhbmltYXRpb24nIC8+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxLjg3NWVtIDA7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDAuODc1ZW0gMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307IH1cbiAgICAgICAgOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTsgfVxuICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTsgfVxuICAgICAgICA6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307IH1cblxuICAgICAgICAuaW5wdXQ6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyBwYWRkaW5nOiAwIDAgMC44NzVlbSAwOyB9XG4gICAgICAgIC5pbnB1dDpmb2N1cyB+IHNwYW4geyBtYXJnaW4tbGVmdDogLTUwcHg7IH1cbiAgICAgICAgLm5hbWUgeyBmbG9hdDogcmlnaHQ7IHdpZHRoOiA0NSU7IH1cbiAgICAgICAgLmVtYWlsIHsgZmxvYXQ6IHJpZ2h0OyB3aWR0aDogNDUlOyBtYXJnaW4tcmlnaHQ6IDEwJTsgfVxuICAgICAgICAuc3ViamVjdCB7IHdpZHRoOiAxMDAlOyB9XG5cbiAgICAgICAgLmFuaW1hdGlvbiB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG5JbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iXX0= */\n/*@ sourceURL=components/forms/Input.js */'
  }));
};

Input.propTypes = propTypes;
exports.default = Input;