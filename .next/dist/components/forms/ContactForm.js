'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Theme = require('../layout/Theme');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/forms/ContactForm.js';


var propTypes = {
  sendTo: _propTypes2.default.string.isRequired
};

var ContactForm = function ContactForm(props) {
  var _React$createElement;

  return _react2.default.createElement('div', { className: 'formblock', 'data-jsx': 823214057,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 823214057,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'CONTACT ME'), _react2.default.createElement('form', { action: props.sendTo, method: 'POST', 'data-jsx': 823214057,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_Input2.default, (_React$createElement = { name: true, type: 'text' }, (0, _defineProperty3.default)(_React$createElement, 'name', 'name'), (0, _defineProperty3.default)(_React$createElement, 'style', 'name'), (0, _defineProperty3.default)(_React$createElement, '__source', {
    fileName: _jsxFileName,
    lineNumber: 18
  }), _React$createElement)), _react2.default.createElement(_Input2.default, { email: true, type: 'email', name: 'email', style: 'email', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(_Input2.default, { subject: true, type: 'text', name: 'subject', style: 'subject', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement(_TextArea2.default, { message: true, name: 'message', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('input', { type: 'hidden', name: '_next', value: '/', 'data-jsx': 823214057,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(_Button2.default, { type: 'submit', value: 'Send', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 823214057,
    css: '.formblock[data-jsx="823214057"] {padding: 2em;width: 80%;margin: 0 auto;text-align: center;}.title[data-jsx="823214057"] {font-size: 400%;color: ' + _Theme.theme.colors.white + '      }@media(max-width: 1240px) {.formblock[data-jsx="823214057"] {padding: 2em;width: 80%;}.title[data-jsx="823214057"] {font-size: 200%;}}@media(max-width: 640px) {.formblock[data-jsx="823214057"] {padding: 1em;width: 90%;height: 100%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUNFLGtDQUNHLGFBQ0YsV0FDSSxlQUNJLG1CQUNwQixDQUVPLDhCQUNVLGdCQUVqQix5Q0FFMEIsMkJBQ2Isa0NBQWMsYUFBWSxXQUFFLENBQ2hDLDhCQUFpQixnQkFBRSxDQUM1QixDQUV5QiwwQkFDWixrQ0FBYyxhQUFZLFdBQWMsYUFBRSxDQUN2RCIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm1zL0NvbnRhY3RGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9sYXlvdXQvVGhlbWUnXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vVGV4dEFyZWEnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHNlbmRUbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT0nZm9ybWJsb2NrJz5cbiAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+Q09OVEFDVCBNRTwvaDE+XG4gICAgPGZvcm0gYWN0aW9uPXtwcm9wcy5zZW5kVG99IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxJbnB1dCBuYW1lIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBzdHlsZT0nbmFtZScgLz5cbiAgICAgIDxJbnB1dCBlbWFpbCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBzdHlsZT0nZW1haWwnIC8+XG4gICAgICA8SW5wdXQgc3ViamVjdCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdWJqZWN0XCIgc3R5bGU9J3N1YmplY3QnIC8+XG4gICAgICA8VGV4dEFyZWEgbWVzc2FnZSBuYW1lPVwibWVzc2FnZVwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbmV4dFwiIHZhbHVlPVwiL1wiIC8+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxuICAgIDwvZm9ybT5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mb3JtYmxvY2sge1xuICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpIHtcbiAgICAgICAgLmZvcm1ibG9jayB7IHBhZGRpbmc6IDJlbTsgd2lkdGg6IDgwJTsgfVxuICAgICAgICAudGl0bGUgeyBmb250LXNpemU6IDIwMCU7IH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgLmZvcm1ibG9jayB7IHBhZGRpbmc6IDFlbTsgd2lkdGg6IDkwJTsgaGVpZ2h0OiAxMDAlOyB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cblxuQ29udGFjdEZvcm0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxuIl19 */\n/*@ sourceURL=components/forms/ContactForm.js */'
  }));
};

ContactForm.propTypes = propTypes;
exports.default = ContactForm;