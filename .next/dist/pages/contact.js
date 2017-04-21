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
        'data-jsx': 827751440
      }, _react2.default.createElement(_HeadBloc2.default, {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords
      }), _react2.default.createElement('section', { className: 'halfside left', 'data-jsx': 827751440
      }, _react2.default.createElement(_FullBackground2.default, null), _react2.default.createElement('div', { className: 'center', 'data-jsx': 827751440
      }, _react2.default.createElement(_Menu2.default, { horizontal: true, links: socials }), _react2.default.createElement('div', { className: 'resume', 'data-jsx': 827751440
      }, 'You can also watch my\xA0', _react2.default.createElement(_link2.default, { prefetch: true, href: '/resume' }, _react2.default.createElement('a', { className: 'tag', 'data-jsx': 827751440
      }, 'online resume')), '\xA0or\xA0', _react2.default.createElement(_link2.default, { href: config.application.cv_pdf_url }, _react2.default.createElement('a', { target: '_blank', className: 'tag', 'data-jsx': 827751440
      }, 'download it')), '.'))), _react2.default.createElement('section', { className: 'halfside right', 'data-jsx': 827751440
      }, _react2.default.createElement(_ContactForm2.default, { sendTo: sendTo })), _react2.default.createElement(_style2.default, {
        styleId: 827751440,
        css: '.halfside[data-jsx="827751440"] {width: 50%;height: 100vh;position: absolute;top: 0;}.center[data-jsx="827751440"] {height: 100%;width: 100%;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;text-align: center;position: relative;}.resume[data-jsx="827751440"] {letter-spacing: 0.024em;margin-top: 20px;}.left[data-jsx="827751440"] {left: 0;background: transparent;}.right[data-jsx="827751440"] {right: 0;background: ' + _Theme.theme.colors.primary + ';z-index: 999;display:-webkit-flex; display:flex;align-items: center;justify-content: center;}@media screen and (max-width: 1240px) {.resume[data-jsx="827751440"] {padding: 0 0.2em;}}@media screen and (max-width: 840px) {.center[data-jsx="827751440"] {height: 400px;}.left[data-jsx="827751440"] {margin-top: 0;left: 0;height: 400px;}.resume[data-jsx="827751440"] {font-size: 1.2em;}.halfside[data-jsx="827751440"] {width: 100%;}.right[data-jsx="827751440"] {position: relative;top: 400px;left: 0;height: 100%;display:-webkit-inline-flex; display:inline-flex;}}@media screen and (max-width: 640px) {.center[data-jsx="827751440"] {height: 160px;}.left[data-jsx="827751440"] {height: 160px;}.resume[data-jsx="827751440"] {font-size: 0.9em;}.right[data-jsx="827751440"] {top: 160px;}}'
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