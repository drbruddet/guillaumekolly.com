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
    zIndex: '999',
    position: 'fixed',
    top: '50%',
    left: '3%',
    width: '120px',
    height: '50px',
    '@media(max-width: 640px)': {
      top: 'auto',
      bottom: '2%',
      left: '1%',
      width: '100%'
    }
  }),
  button: (0, _css.css)({
    width: '120px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJza2lsbEJsb2NrIiwieWVsbG93Iiwic29jaWFsIiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwicmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kIiwiUGFyYWxsYXhCbG9ja1N0eWxlIiwibWVudSIsImJsb2NrIiwiYnV0dG9uIiwiYXBwbGljYXRpb24iLCJjdl9wZGZfdXJsIiwicHJvcHMiLCJjb25maWciLCJleHBlcmllbmNlcyIsInByb2plY3RzIiwiZWR1Y2F0aW9uIiwibWV0YSIsInJlc3VtZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJyZW5kZXJQYXJhbGxheEJsb2NrIiwicmVuZGVyU2tpbGxzIiwicmVuZGVyVGltZWxpbmUiLCJyZW5kZXJGaW5kTWUiLCJyZW5kZXJNZW51SWNvbnMiLCJwYXJ0aWNsZXMiLCJzb2NpYWxzIiwiQ29tcG9uZW50IiwicGFyYWxsYXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ0ZXh0IiwidGV4dEp1c3RpZnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc19zZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJtYXJrZXIiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsInRpbWVfbGluZV90aXRsZSIsInN1YnRpdGxlIiwibGlnaHRfdGV4dCIsImNvbnRhaW5lckJlZm9yZSIsInRpbWVfbGluZSIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsImJvcmRlciIsImxldHRlclNwYWNpbmciLCJ3aGl0ZSIsImNvbXBvbmVudCIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJsaW5rIiwidGV4dERlY29yYXRpb24i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QUUxQk0sY0FBUTtBQUZrQjtBQVpsQixHQUFOO0FBZE8sQ0FBZiIsImZpbGUiOiJyZXN1bWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvcmVzdW1lJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzLFxuICAgICAgc29jaWFsczogICAgICBzb2NpYWxzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9e3NraWxsQmxvY2t9PlxuICAgICAgICBIaWdobHkgc2tpbGxlZCBpbiBjcmVhdGluZyBwZXJmb3JtYW50JnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pkh0bWw8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkNzczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3QgY29tcG9uZW50czwvc3Ryb25nPixcbiAgICAgICAgSSBwbGF5IGEgbG90IHNpbmNlIG92ZXIgdGhhbiBvbmUgeWVhciB3aXRoJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1ldGVvcjwvc3Ryb25nPi5cbiAgICAgICAgSSdtIHBhc3Npb25hdGUgYWJvdXQgdGhlICdNRVJOJyBzdGFjayZ0aGluc3A7XG4gICAgICAgICg8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TW9uZ29EYjwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+RXhwcmVzc0pzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdEpzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Ob2RlSnM8L3N0cm9uZz4pLlxuICAgICAgICBJIGFsc28gY29kZSBzb21lIGJhY2tlbmQgd29yayB1c2luZyZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SdWJ5IE9uIFJhaWxzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIGFuZCBlbmpveSB1c2luZyB0aGUgdGVybSwgSSBrbm93JnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNoZWxsIHNjcmlwdGluZzwvc3Ryb25nPiB0byZ0aGluc3A7XG4gICAgICAgIG1ha2UgbXkgbGlmZSBlYXNpZXIuIEV4cGVyaWVuY2VkIHdpdGggZGVzaWduLCBJJ20gcGxheWluZyBhXG4gICAgICAgIGxvdCB3aXRoIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5JbGx1c3RyYXRvcjwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UGhvdG9zaG9wPC9zdHJvbmc+LlxuICAgICAgICBTa2lsbGVkIHdpdGggY3NzIHByZS1wcm9jZXNzb3JzIGFuZCBmcmFtZXdvcmtzLCBsaWtlJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJvb3RzdHJhcDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U2VtYW50aWMtdWk8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlN0eWx1czwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U2Nzczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SGFtbDwvc3Ryb25nPi4gSSBhbHNvIHBsYXkgd2l0aCB0ZW1wbGF0aW5nXG4gICAgICAgIGxpa2UgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkphZGU8L3N0cm9uZz4gLyZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CbGF6ZTwvc3Ryb25nPlxuICAgICAgICAmbmJzcDt3aXRoIG15IE1ldGVvciBhcHBzLiBJJ20gZmx1ZW50IHdpdGggU3FsIChcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk15U3FsPC9zdHJvbmc+IC8mdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UG9zdGdyZVNxbDwvc3Ryb25nPilcbiAgICAgICAgYW5kIG5vU3FsICg8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TW9uZ29EYjwvc3Ryb25nPikuXG4gICAgICAgIEkgYmVsaWV2ZSA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Y29kZSBoYXMgdG8gY2xlYW48L3N0cm9uZz4sIGxpa2VcbiAgICAgICAgYSBkZXNpZ24gaGFzIHRvIGJlJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PnJlc3BvbnNpdmU8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdDwvc3Ryb25nPiBhbmQgdXNlJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdGh1Yjwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Qml0YnVja2V0PC9zdHJvbmc+LiBSZWNlbnRseSxcbiAgICAgICAgSSdtIGxlYXJuaW5nIHRvIHBsYXkgd2l0aCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWR1eDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+V2VicGFjazwvc3Ryb25nPiwgYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdyYXBoUWw8L3N0cm9uZz4gYW5kIEknbSBsb3ZpbmcgaXQhXG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPXtjc3MoX3RhZywgeWVsbG93KX0+RnJlbmNoIG5hdGl2ZTwvc3Ryb25nPiZ0aGluc3A7XG4gICAgICAgIGFuZCBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5mbHVlbnQgaW4gRW5nbGlzaDwvc3Ryb25nPi5cbiAgICAgIDwvcD5cbiAgICApXG4gIH1cblxuICByZW5kZXJGaW5kTWUoKSB7XG4gICAgcmV0dXJuIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICB9XG5cbiAgcmVuZGVyVGltZWxpbmUoaXRlbXMpIHtcbiAgICByZXR1cm4gPFRpbWVsaW5lIGl0ZW1zPXtpdGVtc30gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJsb2NrKHRpdGxlLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXJhbGxheEJsb2NrIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9e3RoaXMucmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kKCl9XG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17UGFyYWxsYXhCbG9ja1N0eWxlfT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L1BhcmFsbGF4QmxvY2s+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTWVudUljb25zKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudS5ibG9ja30+XG4gICAgICAgIDxCdXR0b25MaW5rIHN0eWxlPXttZW51LmJ1dHRvbn1cbiAgICAgICAgICB1cmw9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfVxuICAgICAgICAgIHRpdGxlPSdEb3dubG9hZCBDVidcbiAgICAgICAgICBhbHQ9XCJEb3dubG9hZCBQREYgUmVzdW1lXCJcbiAgICAgICAgICBibGFuaz17dHJ1ZX0gLz5cbiAgICAgICAgPEJ1dHRvbkxpbmsgc3R5bGU9e21lbnUuYnV0dG9ufVxuICAgICAgICAgIHVybD1cIi9jb250YWN0XCJcbiAgICAgICAgICB0aXRsZT1cIkNvbnRhY3RcIlxuICAgICAgICAgIGFsdD1cIkNvbnRhY3QgTWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5yZXN1bWVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfSAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDEgLiBTa2lsbHNcIiwgdGhpcy5yZW5kZXJTa2lsbHMoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMiAuIFdvcmsgRXhwZXJpZW5jZXNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKGV4cGVyaWVuY2VzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMyAuIFBlcnNvbmFsIFByb2plY3RzXCIsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUaW1lbGluZShwcm9qZWN0cykpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDQgLiBFZHVjYXRpb25cIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKGVkdWNhdGlvbikpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDUgLiBGaW5kIE1lXCIsIHRoaXMucmVuZGVyRmluZE1lKCkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51SWNvbnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBQYXJhbGxheEJsb2NrU3R5bGUgPSB7XG4gIHBhcmFsbGF4OiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNkZGQnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGhlaWdodDogJzEwMHB4JyB9XG4gIH0pLFxuICB0aXRsZTogc3R5bGUoe1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRTaXplOiAnMi4zZW0nLFxuICAgIGxpbmVIZWlnaHQ6ICcyLjVlbScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBwYWRkaW5nVG9wOiAnMzBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICcxLjNlbScsIGxpbmVIZWlnaHQ6ICcxLjVlbScgfVxuICB9KSxcbiAgY29udGVudDogc3R5bGUoeyBtYXJnaW46ICc1JSBhdXRvJyB9KVxufVxuXG5jb25zdCBza2lsbEJsb2NrID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBtYXJnaW46ICc2MHB4IGF1dG8nLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBsaW5lSGVpZ2h0OiAnMS44ZW0nLFxuICBmb250U2l6ZTogJzEuMWVtJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIHdpZHRoOiAnOTAlJyxcbiAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICB0ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnLFxuICB9XG59KVxuXG5jb25zdCB5ZWxsb3cgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19zZWNvbmRhcnksXG4gICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeSB9XG59KVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHsgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgdGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGUgfSxcbiAgc3VidGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0IH0sXG4gIGRlc2NyaXB0aW9uOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCB9LFxuICBjb250YWluZXJCZWZvcmU6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lIH1cbn1cblxuY29uc3QgbWVudSA9IHtcbiAgYmxvY2s6IGNzcyh7XG4gICAgekluZGV4OiAnOTk5JyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICczJScsXG4gICAgd2lkdGg6ICcxMjBweCcsXG4gICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgYm90dG9tOiAnMiUnLFxuICAgICAgbGVmdDogJzElJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfVxuICB9KSxcbiAgYnV0dG9uOiBjc3Moe1xuICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgIGJvcmRlcjogXCI0cHggc29saWQgXCIgKyB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICBmb250U2l6ZTogJzAuNmVtJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDRlbScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB3aWR0aDogJzQ3JScsIG1hcmdpbjogJzElJyB9LFxuICAgICc+IGEnOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2sgfSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICAnPiBhJzogeyBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlIH1cbiAgICB9LFxuICB9KVxufVxuXG5jb25zdCBzb2NpYWwgPSB7XG4gIGNvbXBvbmVudDogc3R5bGUoe1xuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luOiAnMTAlIGF1dG8nLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICB0b3A6ICdjYWxjKDgwcHggLyAyKScsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjYWxjKDUlICsgODBweCknXG4gICAgfVxuICB9KSxcbiAgbGluazogc3R5bGUoe1xuICAgIG1hcmdpbjogJzAgMSUgMCAxJScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMS44ZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMS41ZW0nLFxuICAgICAgZGlzcGxheTogJ2xpc3QtaXRlbScsXG4gICAgICBtYXJnaW46ICcyMHB4IGF1dG8nXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxLjNlbScsXG4gICAgICBtYXJnaW46ICcyMHB4IGF1dG8nXG4gICAgfVxuICB9KVxufVxuIl19