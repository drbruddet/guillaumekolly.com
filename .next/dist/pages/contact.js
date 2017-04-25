'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _ContactForm = require('../components/forms/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

var _socials = require('../data/socials');

var _socials2 = _interopRequireDefault(_socials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/pages/contact.js?entry';


var Contact = function (_React$Component) {
  (0, _inherits3.default)(Contact, _React$Component);

  function Contact() {
    (0, _classCallCheck3.default)(this, Contact);

    return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
  }

  (0, _createClass3.default)(Contact, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          socials = _props.socials,
          config = _props.config;

      var meta = config.meta.contact;
      var sendTo = config.application.mailServer + config.application.email;

      return _react2.default.createElement('div', {
        'data-jsx': 827751440,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_HeadBloc2.default, {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('section', { className: 'halfside left', 'data-jsx': 827751440,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_FullBackground2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('div', { className: 'center', 'data-jsx': 827751440,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_Menu2.default, { horizontal: true, links: socials, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement('div', { className: 'resume', 'data-jsx': 827751440,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'You can also watch my\xA0', _react2.default.createElement(_link2.default, { prefetch: true, href: '/resume', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('a', { className: 'tag', 'data-jsx': 827751440,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'online resume')), '\xA0or\xA0', _react2.default.createElement(_link2.default, { href: config.application.cv_pdf_url, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('a', { className: 'tag', target: '_blank', 'data-jsx': 827751440,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'download it')), '.'))), _react2.default.createElement('section', { className: 'halfside right', 'data-jsx': 827751440,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_ContactForm2.default, { sendTo: sendTo, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: 827751440,
        css: '.halfside[data-jsx="827751440"] {width: 50%;height: 100vh;position: absolute;top: 0;}.center[data-jsx="827751440"] {height: 100%;width: 100%;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;text-align: center;position: relative;}.resume[data-jsx="827751440"] {letter-spacing: 0.024em;margin-top: 20px;}.left[data-jsx="827751440"] {left: 0;background: transparent;}.right[data-jsx="827751440"] {right: 0;background: ' + _Theme.theme.colors.primary + ';z-index: 999;display:-webkit-flex; display:flex;align-items: center;justify-content: center;}@media screen and (max-width: 1240px) {.resume[data-jsx="827751440"] {padding: 0 0.2em;}}@media screen and (max-width: 840px) {.center[data-jsx="827751440"] {height: 400px;}.left[data-jsx="827751440"] {margin-top: 0;left: 0;height: 400px;}.resume[data-jsx="827751440"] {font-size: 1.2em;}.halfside[data-jsx="827751440"] {width: 100%;}.right[data-jsx="827751440"] {position: relative;top: 400px;left: 0;height: 100%;display:-webkit-inline-flex; display:inline-flex;}}@media screen and (max-width: 640px) {.center[data-jsx="827751440"] {height: 160px;}.left[data-jsx="827751440"] {height: 160px;}.resume[data-jsx="827751440"] {font-size: 0.9em;}.right[data-jsx="827751440"] {top: 160px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURvQixBQUNDLGlDQUNFLFdBQ0csY0FDSyxtQkFDWixPQUNSLENBRVEsK0JBQ00sYUFDRCxZQUNFLG1DQUNTLGtGQUNILG9CQUNJLHdCQUNMLG1CQUNBLG1CQUNwQixDQUVRLCtCQUNpQix3QkFDUCxpQkFDbEIsQ0FFTSw2QkFDRyxRQUNnQix3QkFDekIsQ0FFTyw4QkFDRyxTQUMrQix3Q0FDM0IsYUFDQyxtQ0FDTSxvQkFDSSx3QkFDekIsQ0FFc0MsdUNBQzVCLCtCQUFrQixpQkFBRSxDQUM5QixDQUVxQyxzQ0FDM0IsK0JBQWUsY0FBRSxDQUNuQiw2QkFBZSxjQUFTLFFBQWUsY0FBRSxDQUN2QywrQkFBa0IsaUJBQUUsQ0FDbEIsaUNBQWEsWUFBRSxDQUNsQiw4QkFDYSxtQkFDUixXQUNILFFBQ0ssYUFDUSxpREFDdEIsQ0FDRixDQUVxQyxzQ0FDM0IsK0JBQWUsY0FBRSxDQUNuQiw2QkFBZSxjQUFFLENBQ2YsK0JBQWtCLGlCQUFFLENBQ3JCLDhCQUFZLFdBQUUsQ0FDdkIiLCJmaWxlIjoicGFnZXMvY29udGFjdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1zL0NvbnRhY3RGb3JtJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc29jaWFsczogc29jaWFscyxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscywgY29uZmlnIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLmNvbnRhY3RcbiAgICBjb25zdCBzZW5kVG8gPSBjb25maWcuYXBwbGljYXRpb24ubWFpbFNlcnZlciArIGNvbmZpZy5hcHBsaWNhdGlvbi5lbWFpbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfVxuICAgICAgICAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hhbGZzaWRlIGxlZnQnPlxuICAgICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TWVudSBob3Jpem9udGFsIGxpbmtzPXtzb2NpYWxzfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VtZSc+XG4gICAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB3YXRjaCBteSZuYnNwO1xuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL3Jlc3VtZVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPm9ubGluZSByZXN1bWU8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgJm5ic3A7b3ImbmJzcDtcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17Y29uZmlnLmFwcGxpY2F0aW9uLmN2X3BkZl91cmx9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiIHRhcmdldD1cIl9ibGFua1wiPmRvd25sb2FkIGl0PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdoYWxmc2lkZSByaWdodCc+XG4gICAgICAgICAgPENvbnRhY3RGb3JtIHNlbmRUbz17c2VuZFRvfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oYWxmc2lkZSB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlc3VtZSB7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjRlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQwcHgpIHtcbiAgICAgICAgICAgIC5yZXN1bWUgeyBwYWRkaW5nOiAwIDAuMmVtOyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgIC5jZW50ZXIgeyBoZWlnaHQ6IDQwMHB4OyB9XG4gICAgICAgICAgICAubGVmdCB7IG1hcmdpbi10b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogNDAwcHg7IH1cbiAgICAgICAgICAgIC5yZXN1bWUgeyBmb250LXNpemU6IDEuMmVtOyB9XG4gICAgICAgICAgICAuaGFsZnNpZGUgeyB3aWR0aDogMTAwJTsgfVxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDQwMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAuY2VudGVyIHsgaGVpZ2h0OiAxNjBweDsgfVxuICAgICAgICAgICAgLmxlZnQgeyBoZWlnaHQ6IDE2MHB4OyB9XG4gICAgICAgICAgICAucmVzdW1lIHsgZm9udC1zaXplOiAwLjllbTsgfVxuICAgICAgICAgICAgLnJpZ2h0IHsgdG9wOiAxNjBweDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/contact.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        socials: _socials2.default,
        config: _config2.default
      };
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;