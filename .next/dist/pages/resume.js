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

var _reactParticlesJs = require('react-particles-js');

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _ParallaxBlock = require('../components/ParallaxBlock');

var _ParallaxBlock2 = _interopRequireDefault(_ParallaxBlock);

var _Timeline = require('../components/timeline/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _ButtonLink = require('../components/ButtonLink');

var _ButtonLink2 = _interopRequireDefault(_ButtonLink);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

var _particles = require('../data/particles');

var _particles2 = _interopRequireDefault(_particles);

var _resume = require('../data/resume');

var _socials = require('../data/socials');

var _socials2 = _interopRequireDefault(_socials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'renderSkills',
    value: function renderSkills() {
      return _react2.default.createElement(
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
        '). I also code some backend work using ',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Ruby On Rails'
        ),
        '. Experienced with design, I\'m playing a lot with\xA0',
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
        '. Skilled with css pre-processors and frameworks, like\xA0',
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
        ',\xA0',
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
        ',\xA0',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Haml'
        ),
        '. I also play with templating like\xA0',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Jade'
        ),
        ' / ',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Blaze'
        ),
        '\xA0with my Meteor apps. I\'m fluent with Sql (',
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
        '). I believe ',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'code has to clean'
        ),
        ', like a design has to be\xA0',
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
        ' and \xA0',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Bitbucket'
        ),
        '. Recently, I\'m learning to play with\xA0',
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
        ', and\xA0',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'GraphQl'
        ),
        ' and I\'m loving it!',
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
      );
    }
  }, {
    key: 'renderFindMe',
    value: function renderFindMe() {
      return _react2.default.createElement(_Menu2.default, { links: _socials2.default, style: social });
    }
  }, {
    key: 'renderTimeline',
    value: function renderTimeline(items) {
      return _react2.default.createElement(_Timeline2.default, { items: items, style: timelineStyle });
    }
  }, {
    key: 'getParallaxBg',
    value: function getParallaxBg() {
      return _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: _particles2.default });
    }
  }, {
    key: 'renderParallaxBlock',
    value: function renderParallaxBlock(title, content) {
      return _react2.default.createElement(
        _ParallaxBlock2.default,
        { title: title,
          background: this.getParallaxBg(),
          style: ParallaxBlockStyle },
        content
      );
    }
  }, {
    key: 'renderMenuIcons',
    value: function renderMenuIcons() {
      return _react2.default.createElement(
        'div',
        { className: menu.block },
        _react2.default.createElement(_ButtonLink2.default, { style: menu.button,
          url: _config2.default.application.cv_pdf_url,
          title: 'Download CV',
          alt: 'Download PDF Resume' }),
        _react2.default.createElement(_ButtonLink2.default, { style: menu.button,
          url: '/contact',
          title: 'Contact',
          alt: 'Contact Me' })
      );
    }
  }, {
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
        this.renderParallaxBlock("01 . Skills", this.renderSkills()),
        this.renderParallaxBlock("02 . Work Experiences", this.renderTimeline(experiences)),
        this.renderParallaxBlock("03 . Personal Projects", this.renderTimeline(projects)),
        this.renderParallaxBlock("04 . Education", this.renderTimeline(education)),
        this.renderParallaxBlock("05 . Find Me", this.renderFindMe()),
        this.renderMenuIcons()
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        experiences: _resume.experiences,
        projects: _resume.projects,
        education: _resume.education,
        config: _config2.default,
        particles: _particles2.default,
        socials: _socials2.default
      };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var ParallaxBlockStyle = {
  parallax: (0, _css.style)({
    height: '200px',
    width: '100%',
    borderTop: '1px solid #ddd',
    '@media(max-width: 640px)': { height: '100px' }
  }),
  title: (0, _css.style)({
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    textTransform: 'uppercase',
    fontSize: '2.3em',
    lineHeight: '2.5em',
    color: _Theme.theme.colors.black,
    paddingTop: '30px',
    '@media(max-width: 640px)': { fontSize: '1.3em', lineHeight: '1.5em' }
  }),
  content: (0, _css.style)({ margin: '5% auto' })
};

var skillBlock = (0, _css.css)({
  width: '50%',
  margin: '60px auto',
  textAlign: 'center',
  lineHeight: '1.8em',
  fontSize: '1.1em',
  color: _Theme.theme.colors.text,
  '@media(max-width: 640px)': {
    width: '90%',
    textAlign: 'justify',
    textJustify: 'inter-word'
  }
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

var menu = {
  block: (0, _css.css)({
    zIndex: '999',
    position: 'fixed',
    top: '50%',
    left: '3%',
    width: '110px',
    height: '50px',
    '@media(max-width: 640px)': {
      top: 'auto',
      bottom: '2%',
      left: '1%',
      width: '100%'
    }
  }),
  button: (0, _css.css)({
    width: '110px',
    border: "4px solid " + _Theme.theme.colors.primary,
    fontSize: '0.6em',
    letterSpacing: '-0.04em',
    textAlign: 'center',
    backgroundColor: _Theme.theme.colors.white,
    '@media(max-width: 640px)': { width: '47%', margin: '1%' },
    '> a': { color: _Theme.theme.colors.black },
    ':hover': {
      backgroundColor: _Theme.theme.colors.primary,
      color: _Theme.theme.colors.white,
      '> a': { color: _Theme.theme.colors.white }
    }
  })
};

var social = {
  component: (0, _css.style)({
    textTransform: 'uppercase',
    zIndex: '999',
    position: 'relative',
    top: '50%',
    textAlign: 'center',
    display: 'block',
    margin: '10% auto',
    '@media(max-width: 640px)': {
      top: 'calc(80px / 2)',
      marginBottom: 'calc(5% + 80px)'
    }
  }),
  link: (0, _css.style)({
    margin: '0 1% 0 1%',
    textDecoration: 'none',
    color: _Theme.theme.colors.black,
    fontSize: '1.8em',
    fontWeight: 'bold',
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 1240px)': {
      fontSize: '1.5em',
      display: 'list-item',
      margin: '20px auto'
    },
    '@media(max-width: 640px)': {
      fontSize: '1.3em',
      margin: '20px auto'
    }
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJza2lsbEJsb2NrIiwieWVsbG93Iiwic29jaWFsIiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwiZ2V0UGFyYWxsYXhCZyIsIlBhcmFsbGF4QmxvY2tTdHlsZSIsIm1lbnUiLCJibG9jayIsImJ1dHRvbiIsImFwcGxpY2F0aW9uIiwiY3ZfcGRmX3VybCIsInByb3BzIiwiY29uZmlnIiwiZXhwZXJpZW5jZXMiLCJwcm9qZWN0cyIsImVkdWNhdGlvbiIsIm1ldGEiLCJyZXN1bWUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwicmVuZGVyUGFyYWxsYXhCbG9jayIsInJlbmRlclNraWxscyIsInJlbmRlclRpbWVsaW5lIiwicmVuZGVyRmluZE1lIiwicmVuZGVyTWVudUljb25zIiwicGFydGljbGVzIiwic29jaWFscyIsIkNvbXBvbmVudCIsInBhcmFsbGF4IiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJUb3AiLCJ0ZXh0QWxpZ24iLCJmb250RmFtaWx5IiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwiY29sb3JzIiwiYmxhY2siLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwidGV4dCIsInRleHRKdXN0aWZ5IiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNfc2Vjb25kYXJ5Iiwic2Vjb25kYXJ5IiwibWFya2VyIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJ0aW1lX2xpbmVfdGl0bGUiLCJzdWJ0aXRsZSIsImxpZ2h0X3RleHQiLCJjb250YWluZXJCZWZvcmUiLCJ0aW1lX2xpbmUiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJib3JkZXIiLCJsZXR0ZXJTcGFjaW5nIiwid2hpdGUiLCJjb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdo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InNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MsIHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBQYXJhbGxheEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvUGFyYWxsYXhCbG9jaydcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lJ1xuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25MaW5rJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHBhcnRpY2xlcyBmcm9tICcuLi9kYXRhL3BhcnRpY2xlcydcbmltcG9ydCB7IGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gZnJvbSAnLi4vZGF0YS9yZXN1bWUnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwZXJpZW5jZXM6ICBleHBlcmllbmNlcyxcbiAgICAgIHByb2plY3RzOiAgICAgcHJvamVjdHMsXG4gICAgICBlZHVjYXRpb246ICAgIGVkdWNhdGlvbixcbiAgICAgIGNvbmZpZzogICAgICAgY29uZmlnLFxuICAgICAgcGFydGljbGVzOiAgICBwYXJ0aWNsZXMsXG4gICAgICBzb2NpYWxzOiAgICAgIHNvY2lhbHNcbiAgICB9XG4gIH1cblxuICByZW5kZXJTa2lsbHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT17c2tpbGxCbG9ja30+XG4gICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnRcbiAgICAgICAgJm5ic3A7PHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pkh0bWw8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Dc3M8L3N0cm9uZz4sXG4gICAgICAgICZuYnNwOzxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdCBjb21wb25lbnRzPC9zdHJvbmc+LFxuICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGggPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1ldGVvcjwvc3Ryb25nPi5cbiAgICAgICAgSSdtIHBhc3Npb25hdGUgYWJvdXQgdGhlICdNRVJOJyBzdGFjayAoPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1vbmdvRGI8L3N0cm9uZz4sXG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5FeHByZXNzSnM8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdEpzPC9zdHJvbmc+LFxuICAgICAgICAmdGhpbnNwOzxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Ob2RlSnM8L3N0cm9uZz4pLlxuICAgICAgICBJIGFsc28gY29kZSBzb21lIGJhY2tlbmQgd29yayB1c2luZyA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UnVieSBPbiBSYWlsczwvc3Ryb25nPi5cbiAgICAgICAgRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGEgbG90IHdpdGgmbmJzcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PklsbHVzdHJhdG9yPC9zdHJvbmc+IGFuZCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UGhvdG9zaG9wPC9zdHJvbmc+LlxuICAgICAgICBTa2lsbGVkIHdpdGggY3NzIHByZS1wcm9jZXNzb3JzIGFuZCBmcmFtZXdvcmtzLCBsaWtlJm5ic3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Cb290c3RyYXA8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TZW1hbnRpYy11aTwvc3Ryb25nPiwmbmJzcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlN0eWx1czwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNhc3M8L3N0cm9uZz4sJm5ic3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IYW1sPC9zdHJvbmc+LiBJIGFsc28gcGxheSB3aXRoIHRlbXBsYXRpbmcgbGlrZSZuYnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SmFkZTwvc3Ryb25nPiAvIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CbGF6ZTwvc3Ryb25nPlxuICAgICAgICAmbmJzcDt3aXRoIG15IE1ldGVvciBhcHBzLiBJJ20gZmx1ZW50IHdpdGggU3FsIChcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk15U3FsPC9zdHJvbmc+IC8gPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBvc3RncmVTcWw8L3N0cm9uZz4pXG4gICAgICAgIGFuZCBub1NxbCAoPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1vbmdvRGI8L3N0cm9uZz4pLlxuICAgICAgICBJIGJlbGlldmUgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmNvZGUgaGFzIHRvIGNsZWFuPC9zdHJvbmc+LCBsaWtlIGEgZGVzaWduIGhhcyB0byBiZSZuYnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdDwvc3Ryb25nPiBhbmQgdXNlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXRodWI8L3N0cm9uZz4gYW5kXG4gICAgICAgICZuYnNwOzxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CaXRidWNrZXQ8L3N0cm9uZz4uIFJlY2VudGx5LCBJJ20gbGVhcm5pbmcgdG8gcGxheSB3aXRoJm5ic3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWR1eDwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PldlYnBhY2s8L3N0cm9uZz4sIGFuZCZuYnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R3JhcGhRbDwvc3Ryb25nPiBhbmQgSSdtIGxvdmluZyBpdCFcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5GcmVuY2ggbmF0aXZlPC9zdHJvbmc+IGFuZCBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5mbHVlbnQgaW4gRW5nbGlzaDwvc3Ryb25nPi5cbiAgICAgIDwvcD5cbiAgICApXG4gIH1cblxuICByZW5kZXJGaW5kTWUoKSB7XG4gICAgcmV0dXJuIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICB9XG5cbiAgcmVuZGVyVGltZWxpbmUoaXRlbXMpIHtcbiAgICByZXR1cm4gPFRpbWVsaW5lIGl0ZW1zPXtpdGVtc30gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gIH1cblxuICBnZXRQYXJhbGxheEJnKCkge1xuICAgIHJldHVybiA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17cGFydGljbGVzfSAvPlxuICB9XG5cbiAgcmVuZGVyUGFyYWxsYXhCbG9jayh0aXRsZSwgY29udGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWxsYXhCbG9jayAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9e3RoaXMuZ2V0UGFyYWxsYXhCZygpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtQYXJhbGxheEJsb2NrU3R5bGV9PlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvUGFyYWxsYXhCbG9jaz5cbiAgICApXG4gIH1cblxuICByZW5kZXJNZW51SWNvbnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51LmJsb2NrfT5cbiAgICAgICAgPEJ1dHRvbkxpbmsgc3R5bGU9e21lbnUuYnV0dG9ufVxuICAgICAgICAgIHVybD17Y29uZmlnLmFwcGxpY2F0aW9uLmN2X3BkZl91cmx9XG4gICAgICAgICAgdGl0bGU9J0Rvd25sb2FkIENWJ1xuICAgICAgICAgIGFsdD1cIkRvd25sb2FkIFBERiBSZXN1bWVcIiAvPlxuICAgICAgICA8QnV0dG9uTGluayBzdHlsZT17bWVudS5idXR0b259XG4gICAgICAgICAgdXJsPVwiL2NvbnRhY3RcIlxuICAgICAgICAgIHRpdGxlPVwiQ29udGFjdFwiXG4gICAgICAgICAgYWx0PVwiQ29udGFjdCBNZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLnJlc3VtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT17bWV0YS50aXRsZX0gZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259IGtleXdvcmRzPXttZXRhLmtleXdvcmRzfSAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDEgLiBTa2lsbHNcIiwgdGhpcy5yZW5kZXJTa2lsbHMoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMiAuIFdvcmsgRXhwZXJpZW5jZXNcIiwgdGhpcy5yZW5kZXJUaW1lbGluZShleHBlcmllbmNlcykpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDMgLiBQZXJzb25hbCBQcm9qZWN0c1wiLCB0aGlzLnJlbmRlclRpbWVsaW5lKHByb2plY3RzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNCAuIEVkdWNhdGlvblwiLCB0aGlzLnJlbmRlclRpbWVsaW5lKGVkdWNhdGlvbikpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDUgLiBGaW5kIE1lXCIsIHRoaXMucmVuZGVyRmluZE1lKCkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51SWNvbnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBQYXJhbGxheEJsb2NrU3R5bGUgPSB7XG4gIHBhcmFsbGF4OiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNkZGQnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGhlaWdodDogJzEwMHB4JyB9XG4gIH0pLFxuICB0aXRsZTogc3R5bGUoe1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRTaXplOiAnMi4zZW0nLFxuICAgIGxpbmVIZWlnaHQ6ICcyLjVlbScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBwYWRkaW5nVG9wOiAnMzBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICcxLjNlbScsIGxpbmVIZWlnaHQ6ICcxLjVlbScgfVxuICB9KSxcbiAgY29udGVudDogc3R5bGUoeyBtYXJnaW46ICc1JSBhdXRvJyB9KVxufVxuXG5jb25zdCBza2lsbEJsb2NrID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBtYXJnaW46ICc2MHB4IGF1dG8nLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBsaW5lSGVpZ2h0OiAnMS44ZW0nLFxuICBmb250U2l6ZTogJzEuMWVtJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICB0ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnLFxuICB9XG59KVxuXG5jb25zdCB5ZWxsb3cgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19zZWNvbmRhcnksXG4gICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeSB9XG59KVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHsgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgdGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGUgfSxcbiAgc3VidGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0IH0sXG4gIGRlc2NyaXB0aW9uOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCB9LFxuICBjb250YWluZXJCZWZvcmU6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lIH1cbn1cblxuY29uc3QgbWVudSA9IHtcbiAgYmxvY2s6IGNzcyh7XG4gICAgekluZGV4OiAnOTk5JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICczJScsXG4gICAgd2lkdGg6ICcxMTBweCcsXG4gICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgYm90dG9tOiAnMiUnLFxuICAgICAgbGVmdDogJzElJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfVxuICB9KSxcbiAgYnV0dG9uOiBjc3Moe1xuICAgIHdpZHRoOiAnMTEwcHgnLFxuICAgIGJvcmRlcjogXCI0cHggc29saWQgXCIgKyB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICBmb250U2l6ZTogJzAuNmVtJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDRlbScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB3aWR0aDogJzQ3JScsIG1hcmdpbjogJzElJyB9LFxuICAgICc+IGEnOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2sgfSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICAnPiBhJzogeyBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlIH1cbiAgICB9LFxuICB9KVxufVxuXG5jb25zdCBzb2NpYWwgPSB7XG4gIGNvbXBvbmVudDogc3R5bGUoe1xuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luOiAnMTAlIGF1dG8nLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICB0b3A6ICdjYWxjKDgwcHggLyAyKScsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjYWxjKDUlICsgODBweCknXG4gICAgfVxuICB9KSxcbiAgbGluazogc3R5bGUoe1xuICAgIG1hcmdpbjogJzAgMSUgMCAxJScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMS44ZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMS41ZW0nLFxuICAgICAgZGlzcGxheTogJ2xpc3QtaXRlbScsXG4gICAgICBtYXJnaW46ICcyMHB4IGF1dG8nXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxLjNlbScsXG4gICAgICBtYXJnaW46ICcyMHB4IGF1dG8nXG4gICAgfVxuICB9KVxufVxuIl19