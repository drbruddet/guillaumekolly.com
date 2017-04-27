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
  description: _propTypes2.default.string,
  config: _propTypes2.default.object.isRequired
};

var defaultProps = {
  description: "Guillaume Kolly"
};

var fonts = "../../" + _Theme.theme.font.repository;

var favicon = function favicon(url) {
  return "../../static/favicon/" + url;
};

var HeadBloc = function HeadBloc(props) {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('title', {
    'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, props.title), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: favicon("apple-touch-icon.png"), 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon("favicon-32x32.png"), 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon("favicon-16x16.png"), 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement('link', { rel: 'manifest', href: favicon("manifest.json"), 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('link', { rel: 'mask-icon', href: favicon("safari-pinned-tab.svg"), color: '#04b3b0', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('link', { rel: 'shortcut icon', href: favicon("favicon.ico"), 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement('meta', { name: 'msapplication-config', content: favicon("browserconfig.xml"), 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), _react2.default.createElement('meta', { name: 'theme-color', content: '#ffffff', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), _react2.default.createElement('meta', { name: 'description', content: props.description, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement('meta', { name: 'subject', content: props.config.application.subject, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement('meta', { name: 'keywords', content: props.keywords, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement('meta', { name: 'copyright', content: props.config.application.title, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement('meta', { name: 'language', content: props.config.application.lang, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement('meta', { name: 'author', content: props.config.application.owner, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement('meta', { name: 'designer', content: props.config.application.owner, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement('meta', { name: 'owner', content: props.config.application.owner, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement('meta', { name: 'url', content: props.config.application.url, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), _react2.default.createElement('meta', { name: 'identifier-URL', content: props.config.application.url, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement('meta', { name: 'coverage', content: 'Worldwide', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), _react2.default.createElement('meta', { name: 'distribution', content: 'Global', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), _react2.default.createElement('meta', { name: 'rating', content: 'General', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), _react2.default.createElement('meta', { name: 'subtitle', content: props.config.application.subtitle, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), _react2.default.createElement('meta', { name: 'target', content: 'all', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: props.config.application.title, 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), _react2.default.createElement('meta', { name: 'apple-touch-fullscreen', content: 'yes', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black', 'data-jsx': 4058285137,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 4058285137,
    css: '\n        @font-face {\n          font-family: ' + _Theme.theme.font.paragraph + ';\n          src: url(' + fonts + ' + ' + _Theme.theme.font.paragraph_src + ') format(\'truetype\');\n        }\n\n        @font-face {\n          font-family: ' + _Theme.theme.font.title + ';\n          src: url(' + fonts + ' + ' + _Theme.theme.font.title_src + ') format(\'truetype\');\n        }\n\n        html, body {\n          padding: 0;\n          margin: 0;\n          border: 0;\n          line-height: 1.3em;\n          font-size: 1em;\n          text-shadow: 0;\n          font-weight: 400;\n          -webkit-font-smoothing: antialiazed;\n          -moz-osx-font-smoothing: grayscale;\n          font-family: ' + _Theme.theme.font.paragraph_flag + ';\n        }\n\n        .tag {\n          color: ' + _Theme.theme.colors.black + ';\n          font-weight: 700;\n          transition: all 0.4s 0.2s ease-in-out;\n          border-radius: 5px;\n          padding: 1px 3px;\n          background-color: ' + _Theme.theme.colors.trans_primary + ';\n          text-decoration: none;\n          cursor: pointer;\n          z-index: 999;\n        }\n\n        .tag:hover {\n          transform: scale(1.05, 1.4);\n          transition-delay: 0s;\n          transition-duration: 0.2s;\n          background-color: ' + _Theme.theme.colors.primary + ';\n        }\n\n        .yellow {\n          background-color: ' + _Theme.theme.colors.trans_secondary + ';\n        }\n\n        .yellow:hover {\n          background-color: ' + _Theme.theme.colors.secondary + ';\n        }\n    '
  }));
};

HeadBloc.propTypes = propTypes;
HeadBloc.defaultProps = defaultProps;
exports.default = HeadBloc;