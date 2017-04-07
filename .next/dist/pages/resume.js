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
        ', and enjoy using the term, I know ',
        _react2.default.createElement(
          'strong',
          { className: _Theme._tag },
          'Shell scripting'
        ),
        ' to make my life easier. Experienced with design, I\'m playing a lot with\xA0',
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
          'Scss'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJza2lsbEJsb2NrIiwieWVsbG93Iiwic29jaWFsIiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwicmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kIiwiUGFyYWxsYXhCbG9ja1N0eWxlIiwibWVudSIsImJsb2NrIiwiYnV0dG9uIiwiYXBwbGljYXRpb24iLCJjdl9wZGZfdXJsIiwicHJvcHMiLCJjb25maWciLCJleHBlcmllbmNlcyIsInByb2plY3RzIiwiZWR1Y2F0aW9uIiwibWV0YSIsInJlc3VtZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJyZW5kZXJQYXJhbGxheEJsb2NrIiwicmVuZGVyU2tpbGxzIiwicmVuZGVyVGltZWxpbmUiLCJyZW5kZXJGaW5kTWUiLCJyZW5kZXJNZW51SWNvbnMiLCJwYXJ0aWNsZXMiLCJzb2NpYWxzIiwiQ29tcG9uZW50IiwicGFyYWxsYXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ0ZXh0IiwidGV4dEp1c3RpZnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc19zZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJtYXJrZXIiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsInRpbWVfbGluZV90aXRsZSIsInN1YnRpdGxlIiwibGlnaHRfdGV4dCIsImNvbnRhaW5lckJlZm9yZSIsInRpbWVfbGluZSIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsImJvcmRlciIsImxldHRlclNwYWNpbmciLCJ3aGl0ZSIsImNvbXBvbmVudCIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJsaW5rIiwidGV4dERlY29yYXRpb24i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O0FBQzFCTixnQkFBVSxPQURnQjtBQUUxQk0sY0FBUTtBQUZrQjtBQVpsQixHQUFOO0FBZE8sQ0FBZiIsImZpbGUiOiJyZXN1bWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvcmVzdW1lJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzLFxuICAgICAgc29jaWFsczogICAgICBzb2NpYWxzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9e3NraWxsQmxvY2t9PlxuICAgICAgICBIaWdobHkgc2tpbGxlZCBpbiBjcmVhdGluZyBwZXJmb3JtYW50XG4gICAgICAgICZuYnNwOzxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IdG1sPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Q3NzPC9zdHJvbmc+LFxuICAgICAgICAmbmJzcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3QgY29tcG9uZW50czwvc3Ryb25nPixcbiAgICAgICAgSSBwbGF5IGEgbG90IHNpbmNlIG92ZXIgdGhhbiBvbmUgeWVhciB3aXRoIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5NZXRlb3I8L3N0cm9uZz4uXG4gICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IHRoZSAnTUVSTicgc3RhY2sgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+LFxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+RXhwcmVzc0pzPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3RKczwvc3Ryb25nPixcbiAgICAgICAgJnRoaW5zcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Tm9kZUpzPC9zdHJvbmc+KS5cbiAgICAgICAgSSBhbHNvIGNvZGUgc29tZSBiYWNrZW5kIHdvcmsgdXNpbmcgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJ1YnkgT24gUmFpbHM8L3N0cm9uZz4sXG4gICAgICAgIGFuZCBlbmpveSB1c2luZyB0aGUgdGVybSwgSSBrbm93IDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TaGVsbCBzY3JpcHRpbmc8L3N0cm9uZz4gdG9cbiAgICAgICAgbWFrZSBteSBsaWZlIGVhc2llci4gRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGEgbG90IHdpdGgmbmJzcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PklsbHVzdHJhdG9yPC9zdHJvbmc+IGFuZCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UGhvdG9zaG9wPC9zdHJvbmc+LlxuICAgICAgICBTa2lsbGVkIHdpdGggY3NzIHByZS1wcm9jZXNzb3JzIGFuZCBmcmFtZXdvcmtzLCBsaWtlJm5ic3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Cb290c3RyYXA8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TZW1hbnRpYy11aTwvc3Ryb25nPiwmbmJzcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlN0eWx1czwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNjc3M8L3N0cm9uZz4sJm5ic3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IYW1sPC9zdHJvbmc+LiBJIGFsc28gcGxheSB3aXRoIHRlbXBsYXRpbmcgbGlrZSZuYnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SmFkZTwvc3Ryb25nPiAvIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CbGF6ZTwvc3Ryb25nPlxuICAgICAgICAmbmJzcDt3aXRoIG15IE1ldGVvciBhcHBzLiBJJ20gZmx1ZW50IHdpdGggU3FsIChcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk15U3FsPC9zdHJvbmc+IC8gPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBvc3RncmVTcWw8L3N0cm9uZz4pXG4gICAgICAgIGFuZCBub1NxbCAoPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1vbmdvRGI8L3N0cm9uZz4pLlxuICAgICAgICBJIGJlbGlldmUgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmNvZGUgaGFzIHRvIGNsZWFuPC9zdHJvbmc+LCBsaWtlIGEgZGVzaWduIGhhcyB0byBiZSZuYnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdDwvc3Ryb25nPiBhbmQgdXNlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXRodWI8L3N0cm9uZz4gYW5kXG4gICAgICAgICZuYnNwOzxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CaXRidWNrZXQ8L3N0cm9uZz4uIFJlY2VudGx5LCBJJ20gbGVhcm5pbmcgdG8gcGxheSB3aXRoJm5ic3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWR1eDwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PldlYnBhY2s8L3N0cm9uZz4sIGFuZCZuYnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R3JhcGhRbDwvc3Ryb25nPiBhbmQgSSdtIGxvdmluZyBpdCFcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5GcmVuY2ggbmF0aXZlPC9zdHJvbmc+IGFuZCBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5mbHVlbnQgaW4gRW5nbGlzaDwvc3Ryb25nPi5cbiAgICAgIDwvcD5cbiAgICApXG4gIH1cblxuICByZW5kZXJGaW5kTWUoKSB7XG4gICAgcmV0dXJuIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICB9XG5cbiAgcmVuZGVyVGltZWxpbmUoaXRlbXMpIHtcbiAgICByZXR1cm4gPFRpbWVsaW5lIGl0ZW1zPXtpdGVtc30gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJsb2NrKHRpdGxlLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXJhbGxheEJsb2NrIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9e3RoaXMucmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kKCl9XG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17UGFyYWxsYXhCbG9ja1N0eWxlfT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L1BhcmFsbGF4QmxvY2s+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTWVudUljb25zKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudS5ibG9ja30+XG4gICAgICAgIDxCdXR0b25MaW5rIHN0eWxlPXttZW51LmJ1dHRvbn1cbiAgICAgICAgICB1cmw9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfVxuICAgICAgICAgIHRpdGxlPSdEb3dubG9hZCBDVidcbiAgICAgICAgICBhbHQ9XCJEb3dubG9hZCBQREYgUmVzdW1lXCJcbiAgICAgICAgICBibGFuaz17dHJ1ZX0gLz5cbiAgICAgICAgPEJ1dHRvbkxpbmsgc3R5bGU9e21lbnUuYnV0dG9ufVxuICAgICAgICAgIHVybD1cIi9jb250YWN0XCJcbiAgICAgICAgICB0aXRsZT1cIkNvbnRhY3RcIlxuICAgICAgICAgIGFsdD1cIkNvbnRhY3QgTWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5yZXN1bWVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e21ldGEudGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufSBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAxIC4gU2tpbGxzXCIsIHRoaXMucmVuZGVyU2tpbGxzKCkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDIgLiBXb3JrIEV4cGVyaWVuY2VzXCIsIHRoaXMucmVuZGVyVGltZWxpbmUoZXhwZXJpZW5jZXMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAzIC4gUGVyc29uYWwgUHJvamVjdHNcIiwgdGhpcy5yZW5kZXJUaW1lbGluZShwcm9qZWN0cykpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDQgLiBFZHVjYXRpb25cIiwgdGhpcy5yZW5kZXJUaW1lbGluZShlZHVjYXRpb24pKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjA1IC4gRmluZCBNZVwiLCB0aGlzLnJlbmRlckZpbmRNZSgpKX1cbiAgICAgICAge3RoaXMucmVuZGVyTWVudUljb25zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgUGFyYWxsYXhCbG9ja1N0eWxlID0ge1xuICBwYXJhbGxheDogc3R5bGUoe1xuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZGRkJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBoZWlnaHQ6ICcxMDBweCcgfVxuICB9KSxcbiAgdGl0bGU6IHN0eWxlKHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBmb250U2l6ZTogJzIuM2VtJyxcbiAgICBsaW5lSGVpZ2h0OiAnMi41ZW0nLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgcGFkZGluZ1RvcDogJzMwcHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnMS4zZW0nLCBsaW5lSGVpZ2h0OiAnMS41ZW0nIH1cbiAgfSksXG4gIGNvbnRlbnQ6IHN0eWxlKHsgbWFyZ2luOiAnNSUgYXV0bycgfSlcbn1cblxuY29uc3Qgc2tpbGxCbG9jayA9IGNzcyh7XG4gIHdpZHRoOiAnNTAlJyxcbiAgbWFyZ2luOiAnNjBweCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgbGluZUhlaWdodDogJzEuOGVtJyxcbiAgZm9udFNpemU6ICcxLjFlbScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB3aWR0aDogJzkwJScsXG4gICAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gICAgdGV4dEp1c3RpZnk6ICdpbnRlci13b3JkJyxcbiAgfVxufSlcblxuY29uc3QgeWVsbG93ID0gY3NzKHtcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudHJhbnNfc2Vjb25kYXJ5LFxuICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnkgfVxufSlcblxuY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgbWFya2VyOiB7IGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5IH0sXG4gIHRpdGxlOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lX3RpdGxlIH0sXG4gIHN1YnRpdGxlOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRfdGV4dCB9LFxuICBkZXNjcmlwdGlvbjogeyBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQgfSxcbiAgY29udGFpbmVyQmVmb3JlOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRpbWVfbGluZSB9XG59XG5cbmNvbnN0IG1lbnUgPSB7XG4gIGJsb2NrOiBjc3Moe1xuICAgIHpJbmRleDogJzk5OScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnMyUnLFxuICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgIGhlaWdodDogJzUwcHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICB0b3A6ICdhdXRvJyxcbiAgICAgIGJvdHRvbTogJzIlJyxcbiAgICAgIGxlZnQ6ICcxJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH1cbiAgfSksXG4gIGJ1dHRvbjogY3NzKHtcbiAgICB3aWR0aDogJzEyMHB4JyxcbiAgICBib3JkZXI6IFwiNHB4IHNvbGlkIFwiICsgdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgZm9udFNpemU6ICcwLjZlbScsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA0ZW0nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgd2lkdGg6ICc0NyUnLCBtYXJnaW46ICcxJScgfSxcbiAgICAnPiBhJzogeyBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrIH0sXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgJz4gYSc6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSB9XG4gICAgfSxcbiAgfSlcbn1cblxuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbjogJzEwJSBhdXRvJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgICAgdG9wOiAnY2FsYyg4MHB4IC8gMiknLFxuICAgICAgbWFyZ2luQm90dG9tOiAnY2FsYyg1JSArIDgwcHgpJ1xuICAgIH1cbiAgfSksXG4gIGxpbms6IHN0eWxlKHtcbiAgICBtYXJnaW46ICcwIDElIDAgMSUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuOGVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzEuNWVtJyxcbiAgICAgIGRpc3BsYXk6ICdsaXN0LWl0ZW0nLFxuICAgICAgbWFyZ2luOiAnMjBweCBhdXRvJ1xuICAgIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMS4zZW0nLFxuICAgICAgbWFyZ2luOiAnMjBweCBhdXRvJ1xuICAgIH1cbiAgfSlcbn1cbiJdfQ==