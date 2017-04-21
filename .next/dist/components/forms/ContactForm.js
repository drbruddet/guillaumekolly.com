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

  return _react2.default.createElement('div', { className: 'formblock', 'data-jsx': 3722880297,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 3722880297,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'CONTACT ME'), _react2.default.createElement('form', { action: props.sendTo, method: 'POST', 'data-jsx': 3722880297,
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
  }), _react2.default.createElement('input', { type: 'hidden', name: '_next', value: '/', 'data-jsx': 3722880297,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(_Button2.default, { type: 'submit', value: 'Send', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 3722880297,
    css: '.formblock[data-jsx="3722880297"] {padding: 2em;width: 80%;margin: 0 auto;text-align: center;}.title[data-jsx="3722880297"] {font-size: 400%;color: ' + _Theme.theme.colors.white + ' }@media(max-width: 1240px) {.formblock[data-jsx="3722880297"] {padding: 2em;width: 80%;}.title[data-jsx="3722880297"] {font-size: 200%;}}@media(max-width: 640px) {.formblock[data-jsx="3722880297"] {padding: 1em;width: 90%;height: 100%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUNFLG1DQUNHLGFBQ0YsV0FDSSxlQUNJLG1CQUNwQixDQUNPLCtCQUFpQixnQkFBcUMsb0NBRW5DLDJCQUNiLG1DQUFjLGFBQVksV0FBRSxDQUNoQywrQkFBaUIsZ0JBQUUsQ0FDNUIsQ0FFeUIsMEJBQ1osbUNBQWMsYUFBWSxXQUFjLGFBQUUsQ0FDdkQiLCJmaWxlIjoiY29tcG9uZW50cy9mb3Jtcy9Db250YWN0Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vbGF5b3V0L1RoZW1lJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBzZW5kVG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuXG5jb25zdCBDb250YWN0Rm9ybSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9J2Zvcm1ibG9jayc+XG4gICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPkNPTlRBQ1QgTUU8L2gxPlxuICAgIDxmb3JtIGFjdGlvbj17cHJvcHMuc2VuZFRvfSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8SW5wdXQgbmFtZSB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgc3R5bGU9J25hbWUnIC8+XG4gICAgICA8SW5wdXQgZW1haWwgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgc3R5bGU9J2VtYWlsJyAvPlxuICAgICAgPElucHV0IHN1YmplY3QgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIHN0eWxlPSdzdWJqZWN0JyAvPlxuICAgICAgPFRleHRBcmVhIG1lc3NhZ2UgbmFtZT1cIm1lc3NhZ2VcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX25leHRcIiB2YWx1ZT1cIi9cIiAvPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cbiAgICA8L2Zvcm0+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZm9ybWJsb2NrIHtcbiAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7IGZvbnQtc2l6ZTogNDAwJTsgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfSB9XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyNDBweCkge1xuICAgICAgICAuZm9ybWJsb2NrIHsgcGFkZGluZzogMmVtOyB3aWR0aDogODAlOyB9XG4gICAgICAgIC50aXRsZSB7IGZvbnQtc2l6ZTogMjAwJTsgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAuZm9ybWJsb2NrIHsgcGFkZGluZzogMWVtOyB3aWR0aDogOTAlOyBoZWlnaHQ6IDEwMCU7IH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG5Db250YWN0Rm9ybS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXG4iXX0= */\n/*@ sourceURL=components/forms/ContactForm.js */'
  }));
};

ContactForm.propTypes = propTypes;
exports.default = ContactForm;