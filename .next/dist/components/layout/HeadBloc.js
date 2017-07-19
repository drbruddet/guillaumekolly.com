'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Theme = require('./Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/Applications/react/guillaumekolly.com/components/layout/HeadBloc.js';


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
    'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, props.title), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: favicon("apple-touch-icon.png"), 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon("favicon-32x32.png"), 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon("favicon-16x16.png"), 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement('link', { rel: 'manifest', href: favicon("manifest.json"), 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('link', { rel: 'mask-icon', href: favicon("safari-pinned-tab.svg"), color: '#04b3b0', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('link', { rel: 'shortcut icon', href: favicon("favicon.ico"), 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement('meta', { name: 'msapplication-config', content: favicon("browserconfig.xml"), 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), _react2.default.createElement('meta', { name: 'theme-color', content: '#ffffff', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), _react2.default.createElement('meta', { name: 'description', content: props.description, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement('meta', { name: 'subject', content: props.config.application.subject, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement('meta', { name: 'keywords', content: props.keywords, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement('meta', { name: 'copyright', content: props.config.application.title, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement('meta', { name: 'language', content: props.config.application.lang, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement('meta', { name: 'author', content: props.config.application.owner, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement('meta', { name: 'designer', content: props.config.application.owner, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement('meta', { name: 'owner', content: props.config.application.owner, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement('meta', { name: 'url', content: props.config.application.url, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), _react2.default.createElement('meta', { name: 'identifier-URL', content: props.config.application.url, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement('meta', { name: 'coverage', content: 'Worldwide', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), _react2.default.createElement('meta', { name: 'distribution', content: 'Global', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), _react2.default.createElement('meta', { name: 'rating', content: 'General', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), _react2.default.createElement('meta', { name: 'subtitle', content: props.config.application.subtitle, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), _react2.default.createElement('meta', { name: 'target', content: 'all', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: props.config.application.title, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), _react2.default.createElement('meta', { name: 'apple-touch-fullscreen', content: 'yes', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black', 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: '\n  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n  ga(\'create\', \'UA-98215510-1\', \'auto\'); ga(\'send\', \'pageview\');' }, 'data-jsx': 1288171829,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 1288171829,
    css: '@font-face{font-family:' + _Theme.theme.font.paragraph + ';src:url(' + fonts + ' + ' + _Theme.theme.font.paragraph_src + ') format(\'truetype\')}@font-face{font-family:' + _Theme.theme.font.title + ';src:url(' + fonts + ' + ' + _Theme.theme.font.title_src + ') format(\'truetype\')}html,body{padding:0;margin:0;border:0;line-height:1.3em;font-size:1em;-webkit-text-shadow:none;text-shadow:none;font-weight:400;-webkit-font-smoothing:antialiazed;-moz-osx-font-smoothing:grayscale}.tag{color:' + _Theme.theme.colors.black + ';font-weight:700;-webkit-transition:all 0.4s 0.2s ease-in-out;transition:all 0.4s 0.2s ease-in-out;border-radius:5px;padding:1px 3px;background-color:' + _Theme.theme.colors.trans_primary + ';-webkit-text-decoration:none;text-decoration:none;cursor:pointer;z-index:999}.tag:hover{-webkit-transform:scale(1.05, 1.4);-ms-transform:scale(1.05, 1.4);transform:scale(1.05, 1.4);-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.2s;transition-duration:0.2s;background-color:' + _Theme.theme.colors.primary + '}.yellow{background-color:' + _Theme.theme.colors.trans_secondary + '}.yellow:hover{background-color:' + _Theme.theme.colors.secondary + '}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEdUIsQUFHb0QsQUFFQSxBQUUvQixBQUV5QixBQUVSLEFBRW1CLEFBRUMsV0FSakIsVUFBb0IsVUFBNkIsS0FFakIsTUFOOEUsQUFFQSxLQVFyRixDQUVDLEVBUmdELEdBRU0sWUFGc0IsK0JBSTFFLGFBSnFHLGlCQUE4QyxLQUp4RCxBQUVBLE1BSVYsU0FFN0MsVUFGd0UsTUFGb0YsV0FFM0Isd0JBRm9DLFNBSTVHLGNBRndHLGlDQUUvRixtQkFGeUgsZ0JBQXVCLGFBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9BcHBsaWNhdGlvbnMvcmVhY3QvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vVGhlbWUnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdGl0bGU6ICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgY29uZmlnOiAgICAgICBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBkZXNjcmlwdGlvbjogXCJHdWlsbGF1bWUgS29sbHlcIlxufVxuXG5jb25zdCBmb250cyAgID0gXCIuLi8uLi9cIiArIHRoZW1lLmZvbnQucmVwb3NpdG9yeVxuXG5jb25zdCBmYXZpY29uID0gKHVybCkgPT4ge1xuICByZXR1cm4gXCIuLi8uLi9zdGF0aWMvZmF2aWNvbi9cIiArIHVybFxufVxuXG5jb25zdCBIZWFkQmxvYyA9IChwcm9wcykgPT5cbiAgPEhlYWQ+XG4gICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9e2Zhdmljb24oXCJhcHBsZS10b3VjaC1pY29uLnBuZ1wiKX0gLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPXtmYXZpY29uKFwiZmF2aWNvbi0zMngzMi5wbmdcIil9IC8+XG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj17ZmF2aWNvbihcImZhdmljb24tMTZ4MTYucG5nXCIpfSAvPlxuICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj17ZmF2aWNvbihcIm1hbmlmZXN0Lmpzb25cIil9IC8+XG4gICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj17ZmF2aWNvbihcInNhZmFyaS1waW5uZWQtdGFiLnN2Z1wiKX0gY29sb3I9XCIjMDRiM2IwXCIgLz5cbiAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17ZmF2aWNvbihcImZhdmljb24uaWNvXCIpfSAvPlxuICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9e2Zhdmljb24oXCJicm93c2VyY29uZmlnLnhtbFwiKX0gLz5cbiAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxuICAgIDxtZXRhIG5hbWU9XCJzdWJqZWN0XCIgY29udGVudD17cHJvcHMuY29uZmlnLmFwcGxpY2F0aW9uLnN1YmplY3R9IC8+XG4gICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17cHJvcHMua2V5d29yZHN9IC8+XG4gICAgPG1ldGEgbmFtZT1cImNvcHlyaWdodFwiIGNvbnRlbnQ9e3Byb3BzLmNvbmZpZy5hcHBsaWNhdGlvbi50aXRsZX0gLz5cbiAgICA8bWV0YSBuYW1lPSdsYW5ndWFnZScgY29udGVudD17cHJvcHMuY29uZmlnLmFwcGxpY2F0aW9uLmxhbmd9IC8+XG4gICAgPG1ldGEgbmFtZT0nYXV0aG9yJyBjb250ZW50PXtwcm9wcy5jb25maWcuYXBwbGljYXRpb24ub3duZXJ9IC8+XG4gICAgPG1ldGEgbmFtZT0nZGVzaWduZXInIGNvbnRlbnQ9e3Byb3BzLmNvbmZpZy5hcHBsaWNhdGlvbi5vd25lcn0gLz5cbiAgICA8bWV0YSBuYW1lPSdvd25lcicgY29udGVudD17cHJvcHMuY29uZmlnLmFwcGxpY2F0aW9uLm93bmVyfSAvPlxuICAgIDxtZXRhIG5hbWU9J3VybCcgY29udGVudD17cHJvcHMuY29uZmlnLmFwcGxpY2F0aW9uLnVybH0gLz5cbiAgICA8bWV0YSBuYW1lPSdpZGVudGlmaWVyLVVSTCcgY29udGVudD17cHJvcHMuY29uZmlnLmFwcGxpY2F0aW9uLnVybH0gLz5cbiAgICA8bWV0YSBuYW1lPSdjb3ZlcmFnZScgY29udGVudD0nV29ybGR3aWRlJyAvPlxuICAgIDxtZXRhIG5hbWU9J2Rpc3RyaWJ1dGlvbicgY29udGVudD0nR2xvYmFsJyAvPlxuICAgIDxtZXRhIG5hbWU9J3JhdGluZycgY29udGVudD0nR2VuZXJhbCcgLz5cbiAgICA8bWV0YSBuYW1lPSdzdWJ0aXRsZScgY29udGVudD17cHJvcHMuY29uZmlnLmFwcGxpY2F0aW9uLnN1YnRpdGxlfSAvPlxuICAgIDxtZXRhIG5hbWU9J3RhcmdldCcgY29udGVudD0nYWxsJyAvPlxuICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLmNvbmZpZy5hcHBsaWNhdGlvbi50aXRsZX0gLz5cbiAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJyBjb250ZW50PSd5ZXMnIC8+XG4gICAgPG1ldGEgbmFtZT0nYXBwbGUtdG91Y2gtZnVsbHNjcmVlbicgY29udGVudD0neWVzJyAvPlxuICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGUnIGNvbnRlbnQ9J2JsYWNrJyAvPlxuXG4gICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYFxuICAoZnVuY3Rpb24oaSxzLG8sZyxyLGEsbSl7aVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J109cjtpW3JdPWlbcl18fGZ1bmN0aW9uKCl7XG4gIChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuICBtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG4gIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnKTtcbiAgZ2EoJ2NyZWF0ZScsICdVQS05ODIxNTUxMC0xJywgJ2F1dG8nKTsgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtgfX0gLz5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnQucGFyYWdyYXBofTtcbiAgICAgICAgICBzcmM6IHVybCgke2ZvbnRzfSArICR7dGhlbWUuZm9udC5wYXJhZ3JhcGhfc3JjfSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC50aXRsZX07XG4gICAgICAgICAgc3JjOiB1cmwoJHtmb250c30gKyAke3RoZW1lLmZvbnQudGl0bGVfc3JjfSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhemVkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICAudGFnIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMXB4IDNweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy50cmFuc19wcmltYXJ5fTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWc6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS40KTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnllbGxvdyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMudHJhbnNfc2Vjb25kYXJ5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC55ZWxsb3c6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvSGVhZD5cblxuSGVhZEJsb2MucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5IZWFkQmxvYy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcbmV4cG9ydCBkZWZhdWx0IEhlYWRCbG9jXG4iXX0= */\n/*@ sourceURL=components/layout/HeadBloc.js */'
  }));
};

HeadBloc.propTypes = propTypes;
HeadBloc.defaultProps = defaultProps;
exports.default = HeadBloc;