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

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Timeline = require('../components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

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
            { className: (0, _css.css)(_Theme._tag, yellow) },
            'French native'
          ),
          ' and I\'m ',
          _react2.default.createElement(
            'strong',
            { className: (0, _css.css)(_Theme._tag, yellow) },
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


var skillBlock = (0, _css.css)({
  width: '50%',
  margin: '60px auto',
  textAlign: 'center',
  lineHeight: '1.8em',
  fontSize: '1.1em',
  color: _Theme.theme.colors.text
});

var yellow = (0, _css.css)({
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

var title = (0, _css.css)({
  textAlign: 'center',
  fontFamily: "'Roboto', sans-serif",
  textTransform: 'uppercase'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbmZpZyIsImV4cGVyaWVuY2VzIiwicHJvamVjdHMiLCJlZHVjYXRpb24iLCJtZXRhIiwicmVzdW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwic2tpbGxCbG9jayIsInllbGxvdyIsInRpbWVsaW5lU3R5bGUiLCJDb21wb25lbnQiLCJ3aWR0aCIsIm1hcmdpbiIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3NlY29uZGFyeSIsInNlY29uZGFyeSIsIm1hcmtlciIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwidGltZV9saW5lX3RpdGxlIiwic3VidGl0bGUiLCJsaWdodF90ZXh0IiwiY29udGFpbmVyQmVmb3JlIiwidGltZV9saW5lIiwiZm9udEZhbWlseSIsInRleHRUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7NkJBYVc7QUFBQSxtQkFDOEMsS0FBS0EsS0FEbkQ7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxXQURULFVBQ1NBLFdBRFQ7QUFBQSxVQUNzQkMsUUFEdEIsVUFDc0JBLFFBRHRCO0FBQUEsVUFDZ0NDLFNBRGhDLFVBQ2dDQSxTQURoQzs7QUFFUCxVQUFNQyxPQUFPSixPQUFPSSxJQUFQLENBQVlDLE1BQXpCOztBQUVBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNERBQVUsT0FBT0QsS0FBS0UsS0FBdEIsRUFBNkIsYUFBYUYsS0FBS0csV0FBL0MsRUFBNEQsVUFBVUgsS0FBS0ksUUFBM0UsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFJLFdBQVdGLEtBQWY7QUFBQTtBQUFBLFNBRkY7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LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVsaW5lJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHsgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSBmcm9tICcuLi9kYXRhL3Jlc3VtZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBleHBlcmllbmNlczogIGV4cGVyaWVuY2VzLFxuICAgICAgcHJvamVjdHM6ICAgICBwcm9qZWN0cyxcbiAgICAgIGVkdWNhdGlvbjogICAgZWR1Y2F0aW9uLFxuICAgICAgY29uZmlnOiAgICAgICBjb25maWcsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5yZXN1bWVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e21ldGEudGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufSBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dGl0bGV9PiAwMS4gU2tpbGxzIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c2tpbGxCbG9ja30+XG4gICAgICAgICAgSGlnaGx5IHNraWxsZWQgaW4gY3JlYXRpbmcgcGVyZm9ybWFudFxuICAgICAgICAgICZuYnNwOzxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IdG1sPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Q3NzPC9zdHJvbmc+LFxuICAgICAgICAgICZuYnNwOzxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdCBjb21wb25lbnRzPC9zdHJvbmc+LFxuICAgICAgICAgIEkgcGxheSBhIGxvdCBzaW5jZSBvdmVyIHRoYW4gb25lIHllYXIgd2l0aCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TWV0ZW9yPC9zdHJvbmc+LlxuICAgICAgICAgIEkgZXhwZXJpZW5jZWQgYSBsb3QgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJ1YnkgT24gUmFpbHM8L3N0cm9uZz4uXG4gICAgICAgICAgSSdtIHBhc3Npb25hdGUgYWJvdXQgdGhlICdNRVJOJyBzdGFjayAoPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1vbmdvRGI8L3N0cm9uZz4sXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkV4cHJlc3NKczwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJlYWN0SnM8L3N0cm9uZz4sXG4gICAgICAgICAgJnRoaW5zcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Tm9kZUpzPC9zdHJvbmc+KS5cbiAgICAgICAgICBFeHBlcmllbmNlZCB3aXRoIGRlc2lnbiwgSSdtIHBsYXlpbmcgYSBsb3Qgd2l0aFxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5JbGx1c3RyYXRvcjwvc3Ryb25nPiBhbmQgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBob3Rvc2hvcDwvc3Ryb25nPi5cbiAgICAgICAgICBTa2lsbGVkIHdpdGggY3NzIHByZS1wcm9jZXNzb3JzIGFuZCBmcmFtZXdvcmtzLCBsaWtlXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJvb3RzdHJhcDwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNlbWFudGljLXVpPC9zdHJvbmc+LFxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TdHlsdXM8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TYXNzPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SGFtbDwvc3Ryb25nPi5cbiAgICAgICAgICBJIGFsc28gcGxheSBhIGxvdCB3aXRoIHRlbXBsYXRpbmcgbGlrZVxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5KYWRlPC9zdHJvbmc+IG9yIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CbGF6ZSA8L3N0cm9uZz5cbiAgICAgICAgICB3aXRoIG15IE1ldGVvciBhcHBzLiBJJ20gZmx1ZW50IHdpdGggU3FsIChcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TXlTcWw8L3N0cm9uZz4gLyA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UG9zdGdyZVNxbDwvc3Ryb25nPilcbiAgICAgICAgICBhbmQgbm9TcWwgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+ICkuXG4gICAgICAgICAgSSBiZWxpZXZlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5jb2RlIGhhcyB0byBjbGVhbjwvc3Ryb25nPiwgbGlrZSBhIGRlc2lnbiBoYXMgdG8gYmVcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgICAgSSdtIGZhbiBvZiA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R2l0PC9zdHJvbmc+IGFuZCB1c2UgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdGh1Yjwvc3Ryb25nPiBhbmRcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Qml0YnVja2V0PC9zdHJvbmc+LiBSZWNlbnRseSwgSSBsZWFybmVkIHRvIHBsYXlpbmcgd2l0aFxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWR1eDwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PldlYnBhY2s8L3N0cm9uZz4sIGFuZFxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HcmFwaFFsPC9zdHJvbmc+IGFuZCBsb3ZlIGl0IVxuICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5GcmVuY2ggbmF0aXZlPC9zdHJvbmc+IGFuZCBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5mbHVlbnQgaW4gRW5nbGlzaDwvc3Ryb25nPi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt0aXRsZX0+IDAyLiBXb3JrIEV4cGVyaWVuY2VzIDwvaDI+XG4gICAgICAgIDxUaW1lbGluZSBpdGVtcz17ZXhwZXJpZW5jZXN9IHN0eWxlPXt0aW1lbGluZVN0eWxlfSAvPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt0aXRsZX0+IDAzLiBQZXJzb25hbCBQcm9qZWN0cyA8L2gyPlxuICAgICAgICA8VGltZWxpbmUgaXRlbXM9e3Byb2plY3RzfSBzdHlsZT17dGltZWxpbmVTdHlsZX0gLz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dGl0bGV9PiAwNC4gRWR1Y2F0aW9uIDwvaDI+XG4gICAgICAgIDxUaW1lbGluZSBpdGVtcz17ZWR1Y2F0aW9ufSBzdHlsZT17dGltZWxpbmVTdHlsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBza2lsbEJsb2NrID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBtYXJnaW46ICc2MHB4IGF1dG8nLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBsaW5lSGVpZ2h0OiAnMS44ZW0nLFxuICBmb250U2l6ZTogJzEuMWVtJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LFxuICAvL3RleHRBbGlnbjogJ2p1c3RpZnknLFxuICAvL3RleHRKdXN0aWZ5OiAnaW50ZXItd29yZCdcbn0pXG5cbmNvbnN0IHllbGxvdyA9IGNzcyh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zX3NlY29uZGFyeSxcbiAgJzpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5IH1cbn0pXG5cbmNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gIG1hcmtlcjogeyBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSB9LFxuICB0aXRsZTogeyBjb2xvcjogdGhlbWUuY29sb3JzLnRpbWVfbGluZV90aXRsZSB9LFxuICBzdWJ0aXRsZTogeyBjb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0X3RleHQgfSxcbiAgZGVzY3JpcHRpb246IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0IH0sXG4gIGNvbnRhaW5lckJlZm9yZTogeyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmUgfVxufVxuXG5jb25zdCB0aXRsZSA9IGNzcyh7XG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG59KVxuIl19