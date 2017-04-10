'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

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

      return _react2.default.createElement(
        'div',
        { className: _Theme._centeredBox },
        _react2.default.createElement(_HeadBloc2.default, { title: title,
          description: meta.description,
          keywords: meta.keywords }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(
          'div',
          { className: verticalyCentered },
          _react2.default.createElement(
            'h2',
            { className: errorText },
            'The page your looking for can\'t be found.',
            _react2.default.createElement('br', null),
            this.renderError()
          ),
          _react2.default.createElement(_MovingText2.default, { movingtext: movingtextstringify, style: movingText }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/',
            title: 'Home',
            alt: 'Home Page',
            style: button }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/resume',
            title: 'Resume',
            alt: 'Resume Page',
            style: button }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/contact',
            title: 'Contact',
            alt: 'Contact Page',
            style: button })
        )
      );
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


var button = (0, _css2.default)({
  width: '60%',
  textAlign: 'center',
  margin: '10px auto',
  border: "4px solid " + _Theme.theme.colors.primary,
  '> a': { color: _Theme.theme.colors.black },
  ':hover': {
    backgroundColor: _Theme.theme.colors.primary,
    color: _Theme.theme.colors.white,
    '> a': { color: _Theme.theme.colors.white }
  },
  '@media(max-width: 640px)': { width: '80%', fontSize: '1em' }
});

var movingText = {
  movingtitle: (0, _css2.default)({
    color: _Theme.theme.colors.black,
    fontSize: '1000%',
    lineHeight: '90%',
    '@media(max-width: 640px)': { fontSize: '600%' }
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-20',
    shadow_mouse_pos_y: '20'
  }
};

var errorText = (0, _css2.default)({
  fontSize: '140%',
  width: '100%',
  margin: '0 auto',
  lineHeight: '130%',
  color: _Theme.theme.colors.light_text,
  '@media(max-width: 640px)': { fontSize: '100%' }
});

var verticalyCentered = (0, _css2.default)({
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: _Theme.theme.colors.black
});