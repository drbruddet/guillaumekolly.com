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

var _myresume = require('../data/myresume');

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
        experiences: _myresume.experiences,
        projects: _myresume.projects,
        education: _myresume.education,
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
  '@media(max-width: 640px)': { width: '90%' }
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
      width: '90%',
      display: 'table',
      borderCollapse: 'separate',
      borderSpacing: '4px'
    }
  }),
  button: (0, _css.css)({
    fontSize: '1em',
    letterSpacing: '-0.04em',
    textAlign: 'center',
    width: '120px',
    backgroundColor: _Theme.theme.colors.white,
    '@media(max-width: 640px)': { display: 'table-cell' },
    '> a': {
      color: _Theme.theme.colors.black,
      border: "4px solid " + _Theme.theme.colors.primary },
    ':hover': {
      color: _Theme.theme.colors.white,
      '> a': { backgroundColor: _Theme.theme.colors.primary }
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
      marginBottom: 'calc(5% + 110px)'
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
    '@media(max-width: 640px)': { fontSize: '1.3em' }
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJza2lsbEJsb2NrIiwieWVsbG93Iiwic29jaWFsIiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwicmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kIiwiUGFyYWxsYXhCbG9ja1N0eWxlIiwibWVudSIsImJsb2NrIiwiYnV0dG9uIiwiYXBwbGljYXRpb24iLCJjdl9wZGZfdXJsIiwicHJvcHMiLCJjb25maWciLCJleHBlcmllbmNlcyIsInByb2plY3RzIiwiZWR1Y2F0aW9uIiwibWV0YSIsInJlc3VtZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJyZW5kZXJQYXJhbGxheEJsb2NrIiwicmVuZGVyU2tpbGxzIiwicmVuZGVyVGltZWxpbmUiLCJyZW5kZXJGaW5kTWUiLCJyZW5kZXJNZW51SWNvbnMiLCJwYXJ0aWNsZXMiLCJzb2NpYWxzIiwiQ29tcG9uZW50IiwicGFyYWxsYXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNfc2Vjb25kYXJ5Iiwic2Vjb25kYXJ5IiwibWFya2VyIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJ0aW1lX2xpbmVfdGl0bGUiLCJzdWJ0aXRsZSIsImxpZ2h0X3RleHQiLCJjb250YWluZXJCZWZvcmUiLCJ0aW1lX2xpbmUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJyaWdodCIsImJvdHRvbSIsImRpc3BsYXkiLCJib3JkZXJDb2xsYXBzZSIsImJvcmRlclNwYWNpbmciLCJsZXR0ZXJTcGFjaW5nIiwid2hpdGUiLCJib3JkZXIiLCJjb21wb25lbnQiLCJtYXJnaW5Cb3R0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QVUsT0FBWjtBQVpsQixHQUFOO0FBZE8sQ0FBZiIsImZpbGUiOiJyZXN1bWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvbXlyZXN1bWUnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwZXJpZW5jZXM6ICBleHBlcmllbmNlcyxcbiAgICAgIHByb2plY3RzOiAgICAgcHJvamVjdHMsXG4gICAgICBlZHVjYXRpb246ICAgIGVkdWNhdGlvbixcbiAgICAgIGNvbmZpZzogICAgICAgY29uZmlnLFxuICAgICAgcGFydGljbGVzOiAgICBwYXJ0aWNsZXMsXG4gICAgICBzb2NpYWxzOiAgICAgIHNvY2lhbHNcbiAgICB9XG4gIH1cblxuICByZW5kZXJTa2lsbHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT17c2tpbGxCbG9ja30+XG4gICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SHRtbDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Q3NzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdCBjb21wb25lbnRzPC9zdHJvbmc+LFxuICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGgmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TWV0ZW9yPC9zdHJvbmc+LlxuICAgICAgICBJJ20gcGFzc2lvbmF0ZSBhYm91dCB0aGUgJ01FUk4nIHN0YWNrJnRoaW5zcDtcbiAgICAgICAgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5FeHByZXNzSnM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJlYWN0SnM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk5vZGVKczwvc3Ryb25nPikuXG4gICAgICAgIEkgYWxzbyBjb2RlIHNvbWUgYmFja2VuZCB3b3JrIHVzaW5nJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJ1YnkgT24gUmFpbHM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgYW5kIGVuam95IHVzaW5nIHRoZSB0ZXJtLCBJIGtub3cmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U2hlbGwgc2NyaXB0aW5nPC9zdHJvbmc+IHRvJnRoaW5zcDtcbiAgICAgICAgbWFrZSBteSBsaWZlIGVhc2llci4gRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGFcbiAgICAgICAgbG90IHdpdGggPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PklsbHVzdHJhdG9yPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5QaG90b3Nob3A8L3N0cm9uZz4uXG4gICAgICAgIFNraWxsZWQgd2l0aCBjc3MgcHJlLXByb2Nlc3NvcnMgYW5kIGZyYW1ld29ya3MsIGxpa2UmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Qm9vdHN0cmFwPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TZW1hbnRpYy11aTwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U3R5bHVzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TY3NzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IYW1sPC9zdHJvbmc+LiBJIGFsc28gcGxheSB3aXRoIHRlbXBsYXRpbmdcbiAgICAgICAgbGlrZSA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SmFkZTwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJsYXplPC9zdHJvbmc+XG4gICAgICAgICZuYnNwO3dpdGggbXkgTWV0ZW9yIGFwcHMuIEknbSBmbHVlbnQgd2l0aCBTcWwgKFxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TXlTcWw8L3N0cm9uZz4gLyZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Qb3N0Z3JlU3FsPC9zdHJvbmc+KVxuICAgICAgICBhbmQgbm9TcWwgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+KS5cbiAgICAgICAgSSBiZWxpZXZlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5jb2RlIGhhcyB0byBjbGVhbjwvc3Ryb25nPiwgbGlrZVxuICAgICAgICBhIGRlc2lnbiBoYXMgdG8gYmUmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+YWNjZXNzaWJsZTwvc3Ryb25nPi5cbiAgICAgICAgSSdtIGZhbiBvZiA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R2l0PC9zdHJvbmc+IGFuZCB1c2UmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R2l0aHViPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CaXRidWNrZXQ8L3N0cm9uZz4uIFJlY2VudGx5LFxuICAgICAgICBJJ20gbGVhcm5pbmcgdG8gcGxheSB3aXRoJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJlZHV4PC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5XZWJwYWNrPC9zdHJvbmc+LCBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R3JhcGhRbDwvc3Ryb25nPiBhbmQgSSdtIGxvdmluZyBpdCFcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5GcmVuY2ggbmF0aXZlPC9zdHJvbmc+JnRoaW5zcDtcbiAgICAgICAgYW5kIEknbSA8c3Ryb25nIGNsYXNzTmFtZT17Y3NzKF90YWcsIHllbGxvdyl9PmZsdWVudCBpbiBFbmdsaXNoPC9zdHJvbmc+LlxuICAgICAgPC9wPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZpbmRNZSgpIHtcbiAgICByZXR1cm4gPE1lbnUgbGlua3M9e3NvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gIH1cblxuICByZW5kZXJUaW1lbGluZShpdGVtcykge1xuICAgIHJldHVybiA8VGltZWxpbmUgaXRlbXM9e2l0ZW1zfSBzdHlsZT17dGltZWxpbmVTdHlsZX0gLz5cbiAgfVxuXG4gIHJlbmRlclBhcmFsbGF4QmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gPFBhcnRpY2xlcyBoZWlnaHQ9XCIxMDB2aFwiIHdpZHRoPVwiMTAwdndcIiBwYXJhbXM9e3BhcnRpY2xlc30gLz5cbiAgfVxuXG4gIHJlbmRlclBhcmFsbGF4QmxvY2sodGl0bGUsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcmFsbGF4QmxvY2sgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17dGhpcy5yZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKX1cbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtQYXJhbGxheEJsb2NrU3R5bGV9PlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvUGFyYWxsYXhCbG9jaz5cbiAgICApXG4gIH1cblxuICByZW5kZXJNZW51SWNvbnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51LmJsb2NrfT5cbiAgICAgICAgPEJ1dHRvbkxpbmsgc3R5bGU9e21lbnUuYnV0dG9ufVxuICAgICAgICAgIHVybD17Y29uZmlnLmFwcGxpY2F0aW9uLmN2X3BkZl91cmx9XG4gICAgICAgICAgdGl0bGU9J0Rvd25sb2FkIENWJ1xuICAgICAgICAgIGFsdD1cIkRvd25sb2FkIFBERiBSZXN1bWVcIlxuICAgICAgICAgIGJsYW5rPXt0cnVlfSAvPlxuICAgICAgICA8QnV0dG9uTGluayBzdHlsZT17bWVudS5idXR0b259XG4gICAgICAgICAgdXJsPVwiL2NvbnRhY3RcIlxuICAgICAgICAgIHRpdGxlPVwiQ29udGFjdFwiXG4gICAgICAgICAgYWx0PVwiQ29udGFjdCBNZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLnJlc3VtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT17bWV0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMSAuIFNraWxsc1wiLCB0aGlzLnJlbmRlclNraWxscygpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAyIC4gV29yayBFeHBlcmllbmNlc1wiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZXhwZXJpZW5jZXMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAzIC4gUGVyc29uYWwgUHJvamVjdHNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKHByb2plY3RzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNCAuIEVkdWNhdGlvblwiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZWR1Y2F0aW9uKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNSAuIEZpbmQgTWVcIiwgdGhpcy5yZW5kZXJGaW5kTWUoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlck1lbnVJY29ucygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IFBhcmFsbGF4QmxvY2tTdHlsZSA9IHtcbiAgcGFyYWxsYXg6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2RkZCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgaGVpZ2h0OiAnMTAwcHgnIH1cbiAgfSksXG4gIHRpdGxlOiBzdHlsZSh7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFNpemU6ICcyLjNlbScsXG4gICAgbGluZUhlaWdodDogJzIuNWVtJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIHBhZGRpbmdUb3A6ICczMHB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEuM2VtJywgbGluZUhlaWdodDogJzEuNWVtJyB9XG4gIH0pLFxuICBjb250ZW50OiBzdHlsZSh7IG1hcmdpbjogJzUlIGF1dG8nIH0pXG59XG5cbmNvbnN0IHNraWxsQmxvY2sgPSBjc3Moe1xuICB3aWR0aDogJzUwJScsXG4gIG1hcmdpbjogJzYwcHggYXV0bycsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGxpbmVIZWlnaHQ6ICcxLjhlbScsXG4gIGZvbnRTaXplOiAnMS4xZW0nLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IHdpZHRoOiAnOTAlJyB9XG59KVxuXG5jb25zdCB5ZWxsb3cgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19zZWNvbmRhcnksXG4gICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeSB9XG59KVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHsgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgdGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGUgfSxcbiAgc3VidGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0IH0sXG4gIGRlc2NyaXB0aW9uOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCB9LFxuICBjb250YWluZXJCZWZvcmU6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lIH1cbn1cblxuY29uc3QgbWVudSA9IHtcbiAgYmxvY2s6IGNzcyh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnMyUnLFxuICAgIGhlaWdodDogJzUwcHgnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgd2lkdGg6ICcxMjBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIGxlZnQ6ICcyJScsXG4gICAgICByaWdodDogJzIlJyxcbiAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgYm90dG9tOiAnMSUnLFxuICAgICAgd2lkdGg6ICc5MCUnLFxuICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgIGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogJzRweCcsXG4gICAgfVxuICB9KSxcbiAgYnV0dG9uOiBjc3Moe1xuICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDRlbScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB3aWR0aDogJzEyMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBkaXNwbGF5OiAndGFibGUtY2VsbCcgfSxcbiAgICAnPiBhJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICAgIGJvcmRlcjogXCI0cHggc29saWQgXCIgKyB0aGVtZS5jb2xvcnMucHJpbWFyeSx9LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgJz4gYSc6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSB9XG4gICAgfSxcbiAgfSlcbn1cblxuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbjogJzEwJSBhdXRvJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgICAgdG9wOiAnY2FsYyg4MHB4IC8gMiknLFxuICAgICAgbWFyZ2luQm90dG9tOiAnY2FsYyg1JSArIDExMHB4KSdcbiAgICB9XG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAxJSAwIDElJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgZm9udFNpemU6ICcxLjhlbScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICc6aG92ZXInOiB7IHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxLjVlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzIwcHggYXV0bydcbiAgICB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnMS4zZW0nIH1cbiAgfSlcbn1cbiJdfQ==