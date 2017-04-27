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

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _ButtonLink = require('../components/ButtonLink');

var _ButtonLink2 = _interopRequireDefault(_ButtonLink);

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/pages/_error.js?entry';


var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);

    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'renderError',
    value: function renderError() {
      return this.props.statusCode ? ' An error occurred on server.' : ' An error occurred on client.';
    }
  }, {
    key: 'render',
    value: function render() {
      var meta = this.props.config.meta.error;
      var title = meta.title + ' ' + this.props.statusCode + ' Page not found';
      var movingtextstringify = String(this.props.statusCode);

      return _react2.default.createElement('div', { className: 'centeredbox', 'data-jsx': 3922891251,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_HeadBloc2.default, {
        title: title,
        description: meta.description,
        keywords: meta.keywords,
        config: this.props.config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_FullBackground2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('div', { className: 'verticalycentered', 'data-jsx': 3922891251,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('h2', { className: 'errortext', 'data-jsx': 3922891251,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'The page your looking for can\'t be found.', _react2.default.createElement('br', {
        'data-jsx': 3922891251,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), this.renderError()), _react2.default.createElement('div', { className: 'statuscode', 'data-jsx': 3922891251,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, movingtextstringify), _react2.default.createElement('div', { className: 'buttonlink', 'data-jsx': 3922891251,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_ButtonLink2.default, { url: '/', title: 'Home', alt: 'Home Page', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_ButtonLink2.default, { url: '/resume', title: 'Resume', alt: 'Resume Page', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_ButtonLink2.default, { url: '/contact', title: 'Contact', alt: 'Contact Page', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: 3922891251,
        css: '.centeredbox[data-jsx="3922891251"] {display:-webkit-flex; display:flex;align-items: center;justify-content: center;width: 100vw;height: 100vh;}.verticalycentered[data-jsx="3922891251"] {text-align: center;z-index: 1;background: transparent;color: ' + _Theme.theme.colors.black + ';}.statuscode[data-jsx="3922891251"] {font-size: 20em;line-height: 1em;max-width: 480px;}.buttonlink[data-jsx="3922891251"] {width: 100%;max-width: 480px;margin: auto;}.errortext[data-jsx="3922891251"] {font-size: 140%;width: 100%;margin: 0 auto;line-height: 130%;color: ' + _Theme.theme.colors.light_text + ';}@media(max-width: 640px) {.errortext[data-jsx="3922891251"] {font-size: 100%;}.statuscode[data-jsx="3922891251"] {font-size: 5em;}.verticalycentered[data-jsx="3922891251"] {width: 100%;margin-top: 30px;}.buttonlink[data-jsx="3922891251"] {width: 90%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRG9CLEFBQ00scUNBQ0UsbUNBQ00sb0JBQ0ksd0JBQ1gsYUFDQyxjQUNmLENBRW1CLDJDQUNDLG1CQUNSLFdBQ2Esd0JBQ1csbUNBQ3BDLENBRVksb0NBQ0ssZ0JBQ0MsaUJBQ0EsaUJBQ2xCLENBRVksb0NBQ0MsWUFDSyxpQkFDSixhQUNkLENBRVcsbUNBQ00sZ0JBQ0osWUFDRyxlQUNHLGtCQUNpQixtQ0FDcEMsQ0FFeUIsMEJBQ1osbUNBQWlCLGdCQUFFLENBQ2xCLG9DQUFnQixlQUFFLENBQ1gsMkNBQWEsWUFBa0IsaUJBQUUsQ0FDeEMsb0NBQVksV0FBRSxDQUM1QiIsImZpbGUiOiJwYWdlcy9fZXJyb3IuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgQnV0dG9uTGluayBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkxpbmsnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcywganNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNcbiAgICAgID8gcmVzLnN0YXR1c0NvZGVcbiAgICAgIDogKGpzb25QYWdlUmVzID8ganNvblBhZ2VSZXMuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZSxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc3RhdHVzQ29kZVxuICAgICAgPyBgIEFuIGVycm9yIG9jY3VycmVkIG9uIHNlcnZlci5gXG4gICAgICA6ICcgQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50LidcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbWV0YSA9IHRoaXMucHJvcHMuY29uZmlnLm1ldGEuZXJyb3JcbiAgICBjb25zdCB0aXRsZSA9IGAke21ldGEudGl0bGV9ICR7dGhpcy5wcm9wcy5zdGF0dXNDb2RlfSBQYWdlIG5vdCBmb3VuZGBcbiAgICBjb25zdCBtb3Zpbmd0ZXh0c3RyaW5naWZ5ID0gU3RyaW5nKHRoaXMucHJvcHMuc3RhdHVzQ29kZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkYm94XCI+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc31cbiAgICAgICAgICBjb25maWc9e3RoaXMucHJvcHMuY29uZmlnfVxuICAgICAgICAvPlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbHljZW50ZXJlZFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJlcnJvcnRleHRcIj5cbiAgICAgICAgICAgIFRoZSBwYWdlIHlvdXIgbG9va2luZyBmb3IgY2FuJ3QgYmUgZm91bmQuPGJyLz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckVycm9yKCl9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c2NvZGVcIj57bW92aW5ndGV4dHN0cmluZ2lmeX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmxpbmtcIj5cbiAgICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9cIiB0aXRsZT1cIkhvbWVcIiBhbHQ9XCJIb21lIFBhZ2VcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdXJsPVwiL3Jlc3VtZVwiIHRpdGxlPVwiUmVzdW1lXCIgYWx0PVwiUmVzdW1lIFBhZ2VcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdXJsPVwiL2NvbnRhY3RcIiB0aXRsZT1cIkNvbnRhY3RcIiBhbHQ9XCJDb250YWN0IFBhZ2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2VudGVyZWRib3gge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmVydGljYWx5Y2VudGVyZWQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhdHVzY29kZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvbmxpbmsge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXJyb3J0ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNDAlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHRfdGV4dH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgIC5lcnJvcnRleHQgeyBmb250LXNpemU6IDEwMCU7IH1cbiAgICAgICAgICAgICAgLnN0YXR1c2NvZGUgeyBmb250LXNpemU6IDVlbTsgfVxuICAgICAgICAgICAgICAudmVydGljYWx5Y2VudGVyZWQgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogMzBweDsgfVxuICAgICAgICAgICAgICAuYnV0dG9ubGluayB7IHdpZHRoOiA5MCU7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/_error.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          jsonPageRes = _ref.jsonPageRes;

      var statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
      return {
        statusCode: statusCode,
        config: _config2.default
      };
    }
  }]);

  return Error;
}(_react2.default.Component);

exports.default = Error;