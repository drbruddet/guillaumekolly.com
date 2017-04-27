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

      return _react2.default.createElement('div', { className: 'centeredbox', 'data-jsx': 2673744756
      }, _react2.default.createElement(_HeadBloc2.default, {
        title: title,
        description: meta.description,
        keywords: meta.keywords,
        config: this.props.config
      }), _react2.default.createElement(_FullBackground2.default, null), _react2.default.createElement('div', { className: 'verticalycentered', 'data-jsx': 2673744756
      }, _react2.default.createElement('h2', { className: 'errortext', 'data-jsx': 2673744756
      }, 'The page your looking for can\'t be found.', _react2.default.createElement('br', {
        'data-jsx': 2673744756
      }), this.renderError()), _react2.default.createElement('div', { className: 'statuscode', 'data-jsx': 2673744756
      }, movingtextstringify), _react2.default.createElement('div', { className: 'buttonlink', 'data-jsx': 2673744756
      }, _react2.default.createElement(_ButtonLink2.default, { url: '/', title: 'Home', alt: 'Home Page' }), _react2.default.createElement(_ButtonLink2.default, { url: '/resume', title: 'Resume', alt: 'Resume Page' }), _react2.default.createElement(_ButtonLink2.default, { url: '/contact', title: 'Contact', alt: 'Contact Page' }))), _react2.default.createElement(_style2.default, {
        styleId: 2673744756,
        css: '.centeredbox[data-jsx="2673744756"] {display:-webkit-flex; display:flex;align-items: center;justify-content: center;width: 100vw;height: 100vh;}.verticalycentered[data-jsx="2673744756"] {text-align: center;z-index: 1;background: transparent;color: ' + _Theme.theme.colors.black + ';}.statuscode[data-jsx="2673744756"] {font-size: 20em;line-height: 1em;max-width: 480px;}.buttonlink[data-jsx="2673744756"] {width: 100%;max-width: 480px;margin: auto;}.errortext[data-jsx="2673744756"] {font-size: 140%;width: 100%;margin: 0 auto;line-height: 130%;color: ' + _Theme.theme.colors.light_text + ';}@media screen and (max-width: 640px) {.errortext[data-jsx="2673744756"] {font-size: 100%;}.statuscode[data-jsx="2673744756"] {font-size: 5em;}.verticalycentered[data-jsx="2673744756"] {width: 100%;margin-top: 30px;}.buttonlink[data-jsx="2673744756"] {width: 90%;}}'
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