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

var _style = require('next/node_modules/styled-jsx/style.js');

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

var _jsxFileName = '/Users/guillaumekolly/Documents/Applications/react/guillaumekolly.com/pages/_error.js?entry';


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

      return _react2.default.createElement('div', { className: 'centeredbox', 'data-jsx': 2673744756,
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
      }), _react2.default.createElement('div', { className: 'verticalycentered', 'data-jsx': 2673744756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('h2', { className: 'errortext', 'data-jsx': 2673744756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'The page your looking for can\'t be found.', _react2.default.createElement('br', {
        'data-jsx': 2673744756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), this.renderError()), _react2.default.createElement('div', { className: 'statuscode', 'data-jsx': 2673744756,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, movingtextstringify), _react2.default.createElement('div', { className: 'buttonlink', 'data-jsx': 2673744756,
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
        styleId: 2673744756,
        css: '.centeredbox[data-jsx="2673744756"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100vw;height:100vh}.verticalycentered[data-jsx="2673744756"]{-webkit-text-align:center;text-align:center;z-index:1;background:transparent;color:' + _Theme.theme.colors.black + '}.statuscode[data-jsx="2673744756"]{font-size:20em;line-height:1em;max-width:480px}.buttonlink[data-jsx="2673744756"]{width:100%;max-width:480px;margin:auto}.errortext[data-jsx="2673744756"]{font-size:140%;width:100%;margin:0 auto;line-height:130%;color:' + _Theme.theme.colors.light_text + '}@media screen and (max-width:640px){.errortext[data-jsx="2673744756"]{font-size:100%}.statuscode[data-jsx="2673744756"]{font-size:5em}.verticalycentered[data-jsx="2673744756"]{width:100%;margin-top:30px}.buttonlink[data-jsx="2673744756"]{width:90%}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRG9CLEFBRzRCLEFBRUssQUFFSCxBQUVKLEFBRUksQUFFWSxBQUEyQyxBQUErQyxBQUF3RCxXQUFDLENBSnBJLEFBSTRGLEdBQS9ELENBTnpCLEFBSUwsQUFFYixZQUYwQyxDQUZELEFBSWtFLElBTjFELFNBRUssQ0FFb0IsR0FOM0QsSUFFK0MsT0FGVCxJQU11RSxpQkFSekcsR0FFb0YsZ0JBTWtDLG9CQU5yQiwwREFGM0QsdUdBQTJCLGFBQTRCLGNBQWEiLCJmaWxlIjoicGFnZXMvX2Vycm9yLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvQXBwbGljYXRpb25zL3JlYWN0L2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25MaW5rJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXMsIGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzXG4gICAgICA/IHJlcy5zdGF0dXNDb2RlXG4gICAgICA6IChqc29uUGFnZVJlcyA/IGpzb25QYWdlUmVzLnN0YXR1cyA6IG51bGwpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGUsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXR1c0NvZGVcbiAgICAgID8gYCBBbiBlcnJvciBvY2N1cnJlZCBvbiBzZXJ2ZXIuYFxuICAgICAgOiAnIEFuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudC4nXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IG1ldGEgPSB0aGlzLnByb3BzLmNvbmZpZy5tZXRhLmVycm9yXG4gICAgY29uc3QgdGl0bGUgPSBgJHttZXRhLnRpdGxlfSAke3RoaXMucHJvcHMuc3RhdHVzQ29kZX0gUGFnZSBub3QgZm91bmRgXG4gICAgY29uc3QgbW92aW5ndGV4dHN0cmluZ2lmeSA9IFN0cmluZyh0aGlzLnByb3BzLnN0YXR1c0NvZGUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZGJveFwiPlxuICAgICAgICA8SGVhZEJsb2NcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9XG4gICAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLmNvbmZpZ31cbiAgICAgICAgLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWx5Y2VudGVyZWRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZXJyb3J0ZXh0XCI+XG4gICAgICAgICAgICBUaGUgcGFnZSB5b3VyIGxvb2tpbmcgZm9yIGNhbid0IGJlIGZvdW5kLjxici8+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJFcnJvcigpfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXNjb2RlXCI+e21vdmluZ3RleHRzdHJpbmdpZnl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25saW5rXCI+XG4gICAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvXCIgdGl0bGU9XCJIb21lXCIgYWx0PVwiSG9tZSBQYWdlXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9yZXN1bWVcIiB0aXRsZT1cIlJlc3VtZVwiIGFsdD1cIlJlc3VtZSBQYWdlXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9jb250YWN0XCIgdGl0bGU9XCJDb250YWN0XCIgYWx0PVwiQ29udGFjdCBQYWdlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNlbnRlcmVkYm94IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZlcnRpY2FseWNlbnRlcmVkIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1c2NvZGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwZW07XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b25saW5rIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmVycm9ydGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTQwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0X3RleHR9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAuZXJyb3J0ZXh0IHsgZm9udC1zaXplOiAxMDAlOyB9XG4gICAgICAgICAgICAgIC5zdGF0dXNjb2RlIHsgZm9udC1zaXplOiA1ZW07IH1cbiAgICAgICAgICAgICAgLnZlcnRpY2FseWNlbnRlcmVkIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDMwcHg7IH1cbiAgICAgICAgICAgICAgLmJ1dHRvbmxpbmsgeyB3aWR0aDogOTAlOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/_error.js?entry */'
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