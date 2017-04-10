'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _glamor = require('glamor');

var _Theme = require('./Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string
};

var HeadBloc = function HeadBloc(props) {
  return _react2.default.createElement(
    _head2.default,
    null,
    _react2.default.createElement(
      'title',
      null,
      props.title
    ),
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
    _react2.default.createElement('meta', { name: 'description', content: props.description }),
    _react2.default.createElement('meta', { name: 'keywords', content: props.keywords }),
    _react2.default.createElement('meta', { name: 'copyright', content: 'Guillaume Kolly' }),
    _react2.default.createElement(
      'style',
      null,
      ' @import url(',
      _Theme.theme.font.import,
      '); '
    )
  );
};

_glamor.css.global('html, body', {
  padding: '0',
  margin: '0',
  border: '0',
  lineHeight: '1.3em',
  fontSize: '1em',
  textShadow: '0',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontFamily: _Theme.theme.font.paragraph
});

HeadBloc.propTypes = propTypes;
exports.default = HeadBloc;