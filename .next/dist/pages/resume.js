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
        'Highly skilled in creating performant\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Html'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Css'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'React components'
        ),
        ', I play a lot since over than one year with\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Meteor'
        ),
        '. I\'m passionate about the \'MERN\' stack\u2009 (',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'MongoDb'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'ExpressJs'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'ReactJs'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'NodeJs'
        ),
        '). I also code some backend work using\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Ruby On Rails'
        ),
        ',\u2009 and enjoy using the term, I know\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Shell scripting'
        ),
        ' to\u2009 make my life easier. Experienced with design, I\'m playing a lot with ',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Illustrator'
        ),
        ' and\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Photoshop'
        ),
        '. Skilled with css pre-processors and frameworks, like\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Bootstrap'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Semantic-ui'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Stylus'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Scss'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Haml'
        ),
        '. I also play with templating like ',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Jade'
        ),
        ' /\u2009',
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
        ' /\u2009',
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
        ', like a design has to be\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'responsive'
        ),
        ' and\u2009',
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
        ' and use\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Github'
        ),
        ' and\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Bitbucket'
        ),
        '. Recently, I\'m learning to play with\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Redux'
        ),
        ',\u2009',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Webpack'
        ),
        ', and\u2009',
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
        '\u2009 and I\'m ',
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
    key: 'renderParallaxBackground',
    value: function renderParallaxBackground() {
      return _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: _particles2.default });
    }
  }, {
    key: 'renderParallaxBlock',
    value: function renderParallaxBlock(title, content) {
      return _react2.default.createElement(
        _ParallaxBlock2.default,
        { title: title,
          background: this.renderParallaxBackground(),
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
          alt: 'Download PDF Resume',
          blank: true }),
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
        _react2.default.createElement(_HeadBloc2.default, { title: meta.title,
          description: meta.description,
          keywords: meta.keywords }),
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
    position: 'fixed',
    top: '50%',
    left: '3%',
    height: '50px',
    zIndex: '999',
    width: '120px',
    '@media(max-width: 640px)': {
      left: '2%',
      right: '2%',
      top: 'auto',
      bottom: '1%',
      width: '96%',
      display: 'table',
      borderCollapse: 'separate',
      borderSpacing: '4px'
    }
  }),
  button: (0, _css.css)({
    border: "4px solid " + _Theme.theme.colors.primary,
    fontSize: '1em',
    letterSpacing: '-0.04em',
    width: '120px',
    textAlign: 'center',
    backgroundColor: _Theme.theme.colors.white,
    '@media(max-width: 640px)': { display: 'table-cell' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJza2lsbEJsb2NrIiwieWVsbG93Iiwic29jaWFsIiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwicmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kIiwiUGFyYWxsYXhCbG9ja1N0eWxlIiwibWVudSIsImJsb2NrIiwiYnV0dG9uIiwiYXBwbGljYXRpb24iLCJjdl9wZGZfdXJsIiwicHJvcHMiLCJjb25maWciLCJleHBlcmllbmNlcyIsInByb2plY3RzIiwiZWR1Y2F0aW9uIiwibWV0YSIsInJlc3VtZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJyZW5kZXJQYXJhbGxheEJsb2NrIiwicmVuZGVyU2tpbGxzIiwicmVuZGVyVGltZWxpbmUiLCJyZW5kZXJGaW5kTWUiLCJyZW5kZXJNZW51SWNvbnMiLCJwYXJ0aWNsZXMiLCJzb2NpYWxzIiwiQ29tcG9uZW50IiwicGFyYWxsYXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ0ZXh0IiwidGV4dEp1c3RpZnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc19zZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJtYXJrZXIiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsInRpbWVfbGluZV90aXRsZSIsInN1YnRpdGxlIiwibGlnaHRfdGV4dCIsImNvbnRhaW5lckJlZm9yZSIsInRpbWVfbGluZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInpJbmRleCIsInJpZ2h0IiwiYm90dG9tIiwiZGlzcGxheSIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyU3BhY2luZyIsImJvcmRlciIsImxldHRlclNwYWNpbmciLCJ3aGl0ZSIsImNvbXBvbmVu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NkI7QUFDM0JuQyxnQkFBVSxPQURpQjtBQUUzQjBCLGVBQVMsV0FGa0I7QUFHM0JwQixjQUFRO0FBSG1CLEtBUG5CO0FBWVYsZ0NBQTRCO0FBQzFCTixnQkFBVSxPQURnQjtBQUUxQk0sY0FBUTtBQUZrQjtBQVpsQixHQUFOO0FBZE8sQ0FBZiIsImZpbGUiOiJyZXN1bWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvcmVzdW1lJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzLFxuICAgICAgc29jaWFsczogICAgICBzb2NpYWxzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9e3NraWxsQmxvY2t9PlxuICAgICAgICBIaWdobHkgc2tpbGxlZCBpbiBjcmVhdGluZyBwZXJmb3JtYW50JnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pkh0bWw8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkNzczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3QgY29tcG9uZW50czwvc3Ryb25nPixcbiAgICAgICAgSSBwbGF5IGEgbG90IHNpbmNlIG92ZXIgdGhhbiBvbmUgeWVhciB3aXRoJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1ldGVvcjwvc3Ryb25nPi5cbiAgICAgICAgSSdtIHBhc3Npb25hdGUgYWJvdXQgdGhlICdNRVJOJyBzdGFjayZ0aGluc3A7XG4gICAgICAgICg8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TW9uZ29EYjwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+RXhwcmVzc0pzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdEpzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Ob2RlSnM8L3N0cm9uZz4pLlxuICAgICAgICBJIGFsc28gY29kZSBzb21lIGJhY2tlbmQgd29yayB1c2luZyZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SdWJ5IE9uIFJhaWxzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIGFuZCBlbmpveSB1c2luZyB0aGUgdGVybSwgSSBrbm93JnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNoZWxsIHNjcmlwdGluZzwvc3Ryb25nPiB0byZ0aGluc3A7XG4gICAgICAgIG1ha2UgbXkgbGlmZSBlYXNpZXIuIEV4cGVyaWVuY2VkIHdpdGggZGVzaWduLCBJJ20gcGxheWluZyBhXG4gICAgICAgIGxvdCB3aXRoIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5JbGx1c3RyYXRvcjwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UGhvdG9zaG9wPC9zdHJvbmc+LlxuICAgICAgICBTa2lsbGVkIHdpdGggY3NzIHByZS1wcm9jZXNzb3JzIGFuZCBmcmFtZXdvcmtzLCBsaWtlJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJvb3RzdHJhcDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U2VtYW50aWMtdWk8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlN0eWx1czwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U2Nzczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SGFtbDwvc3Ryb25nPi4gSSBhbHNvIHBsYXkgd2l0aCB0ZW1wbGF0aW5nXG4gICAgICAgIGxpa2UgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkphZGU8L3N0cm9uZz4gLyZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CbGF6ZTwvc3Ryb25nPlxuICAgICAgICAmbmJzcDt3aXRoIG15IE1ldGVvciBhcHBzLiBJJ20gZmx1ZW50IHdpdGggU3FsIChcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk15U3FsPC9zdHJvbmc+IC8mdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UG9zdGdyZVNxbDwvc3Ryb25nPilcbiAgICAgICAgYW5kIG5vU3FsICg8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TW9uZ29EYjwvc3Ryb25nPikuXG4gICAgICAgIEkgYmVsaWV2ZSA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Y29kZSBoYXMgdG8gY2xlYW48L3N0cm9uZz4sIGxpa2VcbiAgICAgICAgYSBkZXNpZ24gaGFzIHRvIGJlJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PnJlc3BvbnNpdmU8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdDwvc3Ryb25nPiBhbmQgdXNlJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdGh1Yjwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Qml0YnVja2V0PC9zdHJvbmc+LiBSZWNlbnRseSxcbiAgICAgICAgSSdtIGxlYXJuaW5nIHRvIHBsYXkgd2l0aCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWR1eDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+V2VicGFjazwvc3Ryb25nPiwgYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdyYXBoUWw8L3N0cm9uZz4gYW5kIEknbSBsb3ZpbmcgaXQhXG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPXtjc3MoX3RhZywgeWVsbG93KX0+RnJlbmNoIG5hdGl2ZTwvc3Ryb25nPiZ0aGluc3A7XG4gICAgICAgIGFuZCBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5mbHVlbnQgaW4gRW5nbGlzaDwvc3Ryb25nPi5cbiAgICAgIDwvcD5cbiAgICApXG4gIH1cblxuICByZW5kZXJGaW5kTWUoKSB7XG4gICAgcmV0dXJuIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICB9XG5cbiAgcmVuZGVyVGltZWxpbmUoaXRlbXMpIHtcbiAgICByZXR1cm4gPFRpbWVsaW5lIGl0ZW1zPXtpdGVtc30gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJsb2NrKHRpdGxlLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXJhbGxheEJsb2NrIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9e3RoaXMucmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kKCl9XG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17UGFyYWxsYXhCbG9ja1N0eWxlfT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L1BhcmFsbGF4QmxvY2s+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTWVudUljb25zKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudS5ibG9ja30+XG4gICAgICAgIDxCdXR0b25MaW5rIHN0eWxlPXttZW51LmJ1dHRvbn1cbiAgICAgICAgICB1cmw9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfVxuICAgICAgICAgIHRpdGxlPSdEb3dubG9hZCBDVidcbiAgICAgICAgICBhbHQ9XCJEb3dubG9hZCBQREYgUmVzdW1lXCJcbiAgICAgICAgICBibGFuaz17dHJ1ZX0gLz5cbiAgICAgICAgPEJ1dHRvbkxpbmsgc3R5bGU9e21lbnUuYnV0dG9ufVxuICAgICAgICAgIHVybD1cIi9jb250YWN0XCJcbiAgICAgICAgICB0aXRsZT1cIkNvbnRhY3RcIlxuICAgICAgICAgIGFsdD1cIkNvbnRhY3QgTWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5yZXN1bWVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfSAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDEgLiBTa2lsbHNcIiwgdGhpcy5yZW5kZXJTa2lsbHMoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMiAuIFdvcmsgRXhwZXJpZW5jZXNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKGV4cGVyaWVuY2VzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMyAuIFBlcnNvbmFsIFByb2plY3RzXCIsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUaW1lbGluZShwcm9qZWN0cykpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDQgLiBFZHVjYXRpb25cIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKGVkdWNhdGlvbikpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDUgLiBGaW5kIE1lXCIsIHRoaXMucmVuZGVyRmluZE1lKCkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51SWNvbnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBQYXJhbGxheEJsb2NrU3R5bGUgPSB7XG4gIHBhcmFsbGF4OiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNkZGQnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGhlaWdodDogJzEwMHB4JyB9XG4gIH0pLFxuICB0aXRsZTogc3R5bGUoe1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRTaXplOiAnMi4zZW0nLFxuICAgIGxpbmVIZWlnaHQ6ICcyLjVlbScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBwYWRkaW5nVG9wOiAnMzBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICcxLjNlbScsIGxpbmVIZWlnaHQ6ICcxLjVlbScgfVxuICB9KSxcbiAgY29udGVudDogc3R5bGUoeyBtYXJnaW46ICc1JSBhdXRvJyB9KVxufVxuXG5jb25zdCBza2lsbEJsb2NrID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBtYXJnaW46ICc2MHB4IGF1dG8nLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBsaW5lSGVpZ2h0OiAnMS44ZW0nLFxuICBmb250U2l6ZTogJzEuMWVtJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICB0ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnLFxuICB9XG59KVxuXG5jb25zdCB5ZWxsb3cgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19zZWNvbmRhcnksXG4gICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeSB9XG59KVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHsgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgdGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGUgfSxcbiAgc3VidGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0IH0sXG4gIGRlc2NyaXB0aW9uOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCB9LFxuICBjb250YWluZXJCZWZvcmU6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lIH1cbn1cblxuY29uc3QgbWVudSA9IHtcbiAgYmxvY2s6IGNzcyh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnMyUnLFxuICAgIGhlaWdodDogJzUwcHgnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgd2lkdGg6ICcxMjBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIGxlZnQ6ICcyJScsXG4gICAgICByaWdodDogJzIlJyxcbiAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgYm90dG9tOiAnMSUnLFxuICAgICAgd2lkdGg6ICc5NiUnLFxuICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgIGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogJzRweCcsXG4gICAgfVxuICB9KSxcbiAgYnV0dG9uOiBjc3Moe1xuICAgIGJvcmRlcjogXCI0cHggc29saWQgXCIgKyB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICBmb250U2l6ZTogJzFlbScsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA0ZW0nLFxuICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZGlzcGxheTogJ3RhYmxlLWNlbGwnIH0sXG4gICAgJz4gYSc6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayB9LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgICc+IGEnOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUgfVxuICAgIH0sXG4gIH0pXG59XG5cbmNvbnN0IHNvY2lhbCA9IHtcbiAgY29tcG9uZW50OiBzdHlsZSh7XG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnOTk5JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcxMCUgYXV0bycsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHRvcDogJ2NhbGMoODBweCAvIDIpJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJ2NhbGMoNSUgKyA4MHB4KSdcbiAgICB9XG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAxJSAwIDElJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgZm9udFNpemU6ICcxLjhlbScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICc6aG92ZXInOiB7IHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxLjVlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzIwcHggYXV0bydcbiAgICB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzEuM2VtJyxcbiAgICAgIG1hcmdpbjogJzIwcHggYXV0bydcbiAgICB9XG4gIH0pXG59XG4iXX0=