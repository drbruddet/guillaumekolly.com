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

var _glamor = require('glamor');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Timeline = require('../components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _Theme = require('../components/layout/Theme');

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

var _resume = require('../data/resume');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          experiences = _props.experiences,
          projects = _props.projects,
          education = _props.education;

      var meta = config.meta.resume;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeadBloc2.default, { title: meta.title, description: meta.description, keywords: meta.keywords }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 01. Skills '
        ),
        _react2.default.createElement(
          'p',
          { className: skillBlock },
          'Highly skilled in creating performant \xA0',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Html'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Css'
          ),
          ', \xA0',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'React components'
          ),
          ', I play a lot since over than one year with ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Meteor'
          ),
          '. I experienced a lot ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Ruby On Rails'
          ),
          '. I\'m passionate about the \'MERN\' stack (',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'MongoDb'
          ),
          ',',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'ExpressJs'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'ReactJs'
          ),
          ', \u2009',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'NodeJs'
          ),
          '). Experienced with design, I\'m playing a lot with',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Illustrator'
          ),
          ' and ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Photoshop'
          ),
          '. Skilled with css pre-processors and frameworks, like',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Bootstrap'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Semantic-ui'
          ),
          ',',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Stylus'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Sass'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Haml'
          ),
          '. I also play a lot with templating like',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Jade'
          ),
          ' or ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Blaze '
          ),
          'with my Meteor apps. I\'m fluent with Sql (',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'MySql'
          ),
          ' / ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'PostgreSql'
          ),
          ') and noSql (',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'MongoDb'
          ),
          ' ). I believe ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'code has to clean'
          ),
          ', like a design has to be',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'responsive'
          ),
          ' and ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'accessible'
          ),
          '. I\'m fan of ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Git'
          ),
          ' and use ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Github'
          ),
          ' and',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Bitbucket'
          ),
          '. Recently, I learned to playing with',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Redux'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Webpack'
          ),
          ', and',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'GraphQl'
          ),
          ' and love it!',
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          'I\'m ',
          _react2.default.createElement(
            'strong',
            { className: (0, _css2.default)(_Theme._tag, yellow) },
            'French native'
          ),
          ' and I\'m ',
          _react2.default.createElement(
            'strong',
            { className: (0, _css2.default)(_Theme._tag, yellow) },
            'fluent in English'
          ),
          '.'
        ),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 02. Work Experiences '
        ),
        _react2.default.createElement(_Timeline2.default, { items: experiences, style: timelineStyle }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 03. Personal Projects '
        ),
        _react2.default.createElement(_Timeline2.default, { items: projects, style: timelineStyle }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 04. Education '
        ),
        _react2.default.createElement(_Timeline2.default, { items: education, style: timelineStyle })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        experiences: _resume.experiences,
        projects: _resume.projects,
        education: _resume.education,
        config: _config2.default
      };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var skillBlock = (0, _css2.default)({
  width: '50%',
  margin: '60px auto',
  textAlign: 'center',
  lineHeight: '1.8em',
  fontSize: '1.1em',
  color: _Theme.theme.colors.text
});

var yellow = (0, _css2.default)({
  backgroundColor: _Theme.theme.colors.trans_secondary,
  ':hover': { backgroundColor: _Theme.theme.colors.secondary }
});

var timelineStyle = {
  marker: { background: _Theme.theme.colors.primary },
  title: { color: _Theme.theme.colors.time_line_title },
  subtitle: { color: _Theme.theme.colors.light_text },
  description: { color: _Theme.theme.colors.text },
  containerBefore: { backgroundColor: _Theme.theme.colors.time_line }
};

var title = (0, _css2.default)({
  textAlign: 'center',
  textTransform: 'uppercase'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbmZpZyIsImV4cGVyaWVuY2VzIiwicHJvamVjdHMiLCJlZHVjYXRpb24iLCJtZXRhIiwicmVzdW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwic2tpbGxCbG9jayIsInllbGxvdyIsInRpbWVsaW5lU3R5bGUiLCJDb21wb25lbnQiLCJ3aWR0aCIsIm1hcmdpbiIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3NlY29uZGFyeSIsInNlY29uZGFyeSIsIm1hcmtlciIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwidGltZV9saW5lX3RpdGxlIiwic3VidGl0bGUiLCJsaWdodF90ZXh0IiwiY29udGFpbmVyQmVmb3JlIiwidGltZV9saW5lIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OzZCQWFXO0FBQUEsbUJBQzhDLEtBQUtBLEtBRG5EO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsVUFDU0MsV0FEVCxVQUNTQSxXQURUO0FBQUEsVUFDc0JDLFFBRHRCLFVBQ3NCQSxRQUR0QjtBQUFBLFVBQ2dDQyxTQURoQyxVQUNnQ0EsU0FEaEM7O0FBRVAsVUFBTUMsT0FBT0osT0FBT0ksSUFBUCxDQUFZQyxNQUF6Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFLDREQUFVLE9BQU9ELEtBQUtFLEtBQXRCLEVBQTZCLGFBQWFGLEtBQUtHLFdBQS9DLEVBQTRELFVBQVVILEtBQUtJLFFBQTNFLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSSxXQUFXRixLQUFmO0FBQUE7QUFBQSxTQUZGO0FBR0U7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VXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICdnbGFtb3InXG5cbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVsaW5lJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX3RhZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCB7IGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gZnJvbSAnLi4vZGF0YS9yZXN1bWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwZXJpZW5jZXM6ICBleHBlcmllbmNlcyxcbiAgICAgIHByb2plY3RzOiAgICAgcHJvamVjdHMsXG4gICAgICBlZHVjYXRpb246ICAgIGVkdWNhdGlvbixcbiAgICAgIGNvbmZpZzogICAgICAgY29uZmlnLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEucmVzdW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXttZXRhLnRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn0ga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3RpdGxlfT4gMDEuIFNraWxscyA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3NraWxsQmxvY2t9PlxuICAgICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnRcbiAgICAgICAgICAmbmJzcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SHRtbDwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkNzczwvc3Ryb25nPixcbiAgICAgICAgICAmbmJzcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3QgY29tcG9uZW50czwvc3Ryb25nPixcbiAgICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGggPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1ldGVvcjwvc3Ryb25nPi5cbiAgICAgICAgICBJIGV4cGVyaWVuY2VkIGEgbG90IDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SdWJ5IE9uIFJhaWxzPC9zdHJvbmc+LlxuICAgICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IHRoZSAnTUVSTicgc3RhY2sgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+LFxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5FeHByZXNzSnM8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdEpzPC9zdHJvbmc+LFxuICAgICAgICAgICZ0aGluc3A7PHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk5vZGVKczwvc3Ryb25nPikuXG4gICAgICAgICAgRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGEgbG90IHdpdGhcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SWxsdXN0cmF0b3I8L3N0cm9uZz4gYW5kIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5QaG90b3Nob3A8L3N0cm9uZz4uXG4gICAgICAgICAgU2tpbGxlZCB3aXRoIGNzcyBwcmUtcHJvY2Vzc29ycyBhbmQgZnJhbWV3b3JrcywgbGlrZVxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Cb290c3RyYXA8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TZW1hbnRpYy11aTwvc3Ryb25nPixcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U3R5bHVzPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U2Fzczwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkhhbWw8L3N0cm9uZz4uXG4gICAgICAgICAgSSBhbHNvIHBsYXkgYSBsb3Qgd2l0aCB0ZW1wbGF0aW5nIGxpa2VcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SmFkZTwvc3Ryb25nPiBvciA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+QmxhemUgPC9zdHJvbmc+XG4gICAgICAgICAgd2l0aCBteSBNZXRlb3IgYXBwcy4gSSdtIGZsdWVudCB3aXRoIFNxbCAoXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk15U3FsPC9zdHJvbmc+IC8gPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBvc3RncmVTcWw8L3N0cm9uZz4pXG4gICAgICAgICAgYW5kIG5vU3FsICg8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TW9uZ29EYjwvc3Ryb25nPiApLlxuICAgICAgICAgIEkgYmVsaWV2ZSA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Y29kZSBoYXMgdG8gY2xlYW48L3N0cm9uZz4sIGxpa2UgYSBkZXNpZ24gaGFzIHRvIGJlXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PnJlc3BvbnNpdmU8L3N0cm9uZz4gYW5kIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5hY2Nlc3NpYmxlPC9zdHJvbmc+LlxuICAgICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdDwvc3Ryb25nPiBhbmQgdXNlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXRodWI8L3N0cm9uZz4gYW5kXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJpdGJ1Y2tldDwvc3Ryb25nPi4gUmVjZW50bHksIEkgbGVhcm5lZCB0byBwbGF5aW5nIHdpdGhcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVkdXg8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5XZWJwYWNrPC9zdHJvbmc+LCBhbmRcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R3JhcGhRbDwvc3Ryb25nPiBhbmQgbG92ZSBpdCFcbiAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPXtjc3MoX3RhZywgeWVsbG93KX0+RnJlbmNoIG5hdGl2ZTwvc3Ryb25nPiBhbmQgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPXtjc3MoX3RhZywgeWVsbG93KX0+Zmx1ZW50IGluIEVuZ2xpc2g8L3N0cm9uZz4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dGl0bGV9PiAwMi4gV29yayBFeHBlcmllbmNlcyA8L2gyPlxuICAgICAgICA8VGltZWxpbmUgaXRlbXM9e2V4cGVyaWVuY2VzfSBzdHlsZT17dGltZWxpbmVTdHlsZX0gLz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dGl0bGV9PiAwMy4gUGVyc29uYWwgUHJvamVjdHMgPC9oMj5cbiAgICAgICAgPFRpbWVsaW5lIGl0ZW1zPXtwcm9qZWN0c30gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3RpdGxlfT4gMDQuIEVkdWNhdGlvbiA8L2gyPlxuICAgICAgICA8VGltZWxpbmUgaXRlbXM9e2VkdWNhdGlvbn0gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc2tpbGxCbG9jayA9IGNzcyh7XG4gIHdpZHRoOiAnNTAlJyxcbiAgbWFyZ2luOiAnNjBweCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgbGluZUhlaWdodDogJzEuOGVtJyxcbiAgZm9udFNpemU6ICcxLjFlbScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbiAgLy90ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgLy90ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnXG59KVxuXG5jb25zdCB5ZWxsb3cgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19zZWNvbmRhcnksXG4gICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeSB9XG59KVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHsgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgdGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGUgfSxcbiAgc3VidGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0IH0sXG4gIGRlc2NyaXB0aW9uOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCB9LFxuICBjb250YWluZXJCZWZvcmU6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lIH1cbn1cblxuY29uc3QgdGl0bGUgPSBjc3Moe1xuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbn0pXG4iXX0=