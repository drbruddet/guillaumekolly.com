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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Theme = require('./Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/layout/HeadBloc.js';


var propTypes = {
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string
};

var defaultProps = {
  description: "Guillaume Kolly"
};

var fonts = "../../" + _Theme.theme.font.repository;

var HeadBloc = function HeadBloc(props) {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('title', {
    'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.title), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: '../../static/favicon.png', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement('meta', { name: 'description', content: props.description, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement('meta', { name: 'keywords', content: props.keywords, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement('meta', { name: 'copyright', content: 'Guillaume Kolly', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 4058285137,
    css: '\n        @font-face {\n          font-family: ' + _Theme.theme.font.paragraph + ';\n          src: url(' + fonts + ' + ' + _Theme.theme.font.paragraph_src + ') format(\'truetype\');\n        }\n\n        @font-face {\n          font-family: ' + _Theme.theme.font.title + ';\n          src: url(' + fonts + ' + ' + _Theme.theme.font.title_src + ') format(\'truetype\');\n        }\n\n        html, body {\n          padding: 0;\n          margin: 0;\n          border: 0;\n          line-height: 1.3em;\n          font-size: 1em;\n          text-shadow: 0;\n          font-weight: 400;\n          -webkit-font-smoothing: antialiazed;\n          -moz-osx-font-smoothing: grayscale;\n          font-family: ' + _Theme.theme.font.paragraph_flag + ';\n        }\n\n        .tag {\n          color: ' + _Theme.theme.colors.black + ';\n          font-weight: 700;\n          transition: all 0.4s 0.2s ease-in-out;\n          border-radius: 5px;\n          padding: 1px 3px;\n          background-color: ' + _Theme.theme.colors.trans_primary + ';\n          text-decoration: none;\n          cursor: pointer;\n          z-index: 999;\n        }\n\n        .tag:hover {\n          transform: scale(1.05, 1.4);\n          transition-delay: 0s;\n          transition-duration: 0.2s;\n          background-color: ' + _Theme.theme.colors.primary + ';\n        }\n\n        .yellow {\n          background-color: ' + _Theme.theme.colors.trans_secondary + ';\n        }\n\n        .yellow:hover {\n          background-color: ' + _Theme.theme.colors.secondary + ';\n        }\n    '
  }));
};

HeadBloc.propTypes = propTypes;
HeadBloc.defaultProps = defaultProps;
exports.default = HeadBloc;