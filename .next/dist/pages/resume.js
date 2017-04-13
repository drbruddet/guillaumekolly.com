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

var Resume = function (_React$Component) {
  (0, _inherits3.default)(Resume, _React$Component);

  function Resume() {
    (0, _classCallCheck3.default)(this, Resume);
    return (0, _possibleConstructorReturn3.default)(this, (Resume.__proto__ || (0, _getPrototypeOf2.default)(Resume)).apply(this, arguments));
  }

  (0, _createClass3.default)(Resume, [{
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
        {
          title: title,
          background: this.renderParallaxBackground(),
          style: ParallaxBlockStyle
        },
        content
      );
    }
  }, {
    key: 'renderMenuIcons',
    value: function renderMenuIcons() {
      return _react2.default.createElement(
        'div',
        { className: menu.block },
        _react2.default.createElement(_ButtonLink2.default, {
          style: menu.button,
          url: _config2.default.application.cv_pdf_url,
          title: 'Download CV',
          alt: 'Download PDF Resume',
          blank: true
        }),
        _react2.default.createElement(_ButtonLink2.default, {
          style: menu.button,
          url: '/contact',
          title: 'Contact',
          alt: 'Contact Me'
        })
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
        _react2.default.createElement(_HeadBloc2.default, {
          title: meta.title,
          description: meta.description,
          keywords: meta.keywords
        }),
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
  return Resume;
}(_react2.default.Component);

exports.default = Resume;


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
  wordWrap: 'break-word',
  fontSize: '1.1em',
  color: _Theme.theme.colors.text,
  '@media(max-width: 1240px)': { width: '70%' },
  '@media(max-width: 640px)': {
    width: '84%',
    textAlign: 'justify',
    textJustify: 'inter-cluster'
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
    zIndex: '999',
    width: '120px',
    '@media(max-width: 640px)': {
      top: 'auto',
      bottom: '1%',
      display: 'table',
      borderCollapse: 'separate',
      borderSpacing: '4px',
      width: '98%',
      left: '1%'
    }
  }),
  button: (0, _css.css)({
    fontSize: '1em',
    letterSpacing: '-0.04em',
    textAlign: 'center',
    backgroundColor: _Theme.theme.colors.white,
    width: '100%',
    marginBottom: '5px',
    '@media(max-width: 640px)': {
      display: 'table-cell',
      verticalAlign: 'middle',
      width: '45%'
    },
    '> a': {
      color: _Theme.theme.colors.black,
      display: 'block',
      padding: '10px',
      boxSizing: 'border-box',
      border: '4px solid ' + _Theme.theme.colors.primary
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJSZXN1bWUiLCJza2lsbEJsb2NrIiwieWVsbG93Iiwic29jaWFsIiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwicmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kIiwiUGFyYWxsYXhCbG9ja1N0eWxlIiwibWVudSIsImJsb2NrIiwiYnV0dG9uIiwiYXBwbGljYXRpb24iLCJjdl9wZGZfdXJsIiwicHJvcHMiLCJjb25maWciLCJleHBlcmllbmNlcyIsInByb2plY3RzIiwiZWR1Y2F0aW9uIiwibWV0YSIsInJlc3VtZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJyZW5kZXJQYXJhbGxheEJsb2NrIiwicmVuZGVyU2tpbGxzIiwicmVuZGVyVGltZWxpbmUiLCJyZW5kZXJGaW5kTWUiLCJyZW5kZXJNZW51SWNvbnMiLCJwYXJ0aWNsZXMiLCJzb2NpYWxzIiwiQ29tcG9uZW50IiwicGFyYWxsYXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ3b3JkV3JhcCIsInRleHQiLCJ0ZXh0SnVzdGlmeSIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3NlY29uZGFyeSIsInNlY29uZGFyeSIsIm1hcmtlciIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwidGltZV9saW5lX3RpdGxlIiwic3VidGl0bGUiLCJsaWdodF90ZXh0IiwiY29udGFpbmVyQmVmb3JlIiwidGltZV9saW5lIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwiYm90dG9tIiwiZGlzcGxheSIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyU3BhY2luZyIsImxldHRlclNwYWNpbmciLCJ3aGl0ZSIsIm1hcmdpbkJvdHRvbSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm9yZGVyIiwiY29tcG9uZW50IiwibGluayIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7O21DQWFKO0FBQ2IsYUFDRTtBQUFBO0FBQUEsVUFBRyxXQUFXQyxVQUFkO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FGRjtBQUFBO0FBR0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBSEY7QUFBQTtBQUlFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQUpGO0FBQUE7QUFNRTtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FORjtBQUFBO0FBUUc7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBUkg7QUFBQTtBQVNFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQVRGO0FBQUE7QUFVRTtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FWRjtBQUFBO0FBV0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBWEY7QUFBQTtBQWFFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQWJGO0FBQUE7QUFlRTtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FmRjtBQUFBO0FBaUJXO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQWpCWDtBQUFBO0FBa0JFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQWxCRjtBQUFBO0FBb0JFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFB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QUFNO0FBQ1YvQixZQUFRLFdBREU7QUFFVmdDLG9CQUFnQixNQUZOO0FBR1ZwQyxXQUFPLGFBQU1DLE1BQU4sQ0FBYUMsS0FIVjtBQUlWSixjQUFVLE9BSkE7QUFLVnVDLGdCQUFZLE1BTEY7QUFNVixjQUFVLEVBQUVELGdCQUFnQixjQUFsQixFQU5BO0FBT1YsaUNBQTZCO0FBQzNCdEMsZ0JBQVUsT0FEaUI7QUFFM0IwQixlQUFTLFdBRmtCO0FBRzNCcEIsY0FBUTtBQUhtQixLQVBuQjtBQVlWLGdDQUE0QixFQUFFTixVQUFVLE9BQVo7QUFabEIsR0FBTjtBQWRPLENBQWYiLCJmaWxlIjoicmVzdW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX3RhZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IFBhcmFsbGF4QmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJhbGxheEJsb2NrJ1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmUnXG5pbXBvcnQgQnV0dG9uTGluayBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkxpbmsnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5pbXBvcnQgcGFydGljbGVzIGZyb20gJy4uL2RhdGEvcGFydGljbGVzJ1xuaW1wb3J0IHsgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSBmcm9tICcuLi9kYXRhL215cmVzdW1lJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBleHBlcmllbmNlczogIGV4cGVyaWVuY2VzLFxuICAgICAgcHJvamVjdHM6ICAgICBwcm9qZWN0cyxcbiAgICAgIGVkdWNhdGlvbjogICAgZWR1Y2F0aW9uLFxuICAgICAgY29uZmlnOiAgICAgICBjb25maWcsXG4gICAgICBwYXJ0aWNsZXM6ICAgIHBhcnRpY2xlcyxcbiAgICAgIHNvY2lhbHM6ICAgICAgc29jaWFsc1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNraWxscygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHAgY2xhc3NOYW1lPXtza2lsbEJsb2NrfT5cbiAgICAgICAgSGlnaGx5IHNraWxsZWQgaW4gY3JlYXRpbmcgcGVyZm9ybWFudCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IdG1sPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Dc3M8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJlYWN0IGNvbXBvbmVudHM8L3N0cm9uZz4sXG4gICAgICAgIEkgcGxheSBhIGxvdCBzaW5jZSBvdmVyIHRoYW4gb25lIHllYXIgd2l0aCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5NZXRlb3I8L3N0cm9uZz4uXG4gICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IHRoZSAnTUVSTicgc3RhY2smdGhpbnNwO1xuICAgICAgICAoPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1vbmdvRGI8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkV4cHJlc3NKczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3RKczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Tm9kZUpzPC9zdHJvbmc+KS5cbiAgICAgICAgSSBhbHNvIGNvZGUgc29tZSBiYWNrZW5kIHdvcmsgdXNpbmcmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UnVieSBPbiBSYWlsczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICBhbmQgZW5qb3kgdXNpbmcgdGhlIHRlcm0sIEkga25vdyZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TaGVsbCBzY3JpcHRpbmc8L3N0cm9uZz4gdG8mdGhpbnNwO1xuICAgICAgICBtYWtlIG15IGxpZmUgZWFzaWVyLiBFeHBlcmllbmNlZCB3aXRoIGRlc2lnbiwgSSdtIHBsYXlpbmcgYVxuICAgICAgICBsb3Qgd2l0aCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SWxsdXN0cmF0b3I8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBob3Rvc2hvcDwvc3Ryb25nPi5cbiAgICAgICAgU2tpbGxlZCB3aXRoIGNzcyBwcmUtcHJvY2Vzc29ycyBhbmQgZnJhbWV3b3JrcywgbGlrZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Cb290c3RyYXA8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNlbWFudGljLXVpPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TdHlsdXM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNjc3M8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkhhbWw8L3N0cm9uZz4uIEkgYWxzbyBwbGF5IHdpdGggdGVtcGxhdGluZ1xuICAgICAgICBsaWtlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5KYWRlPC9zdHJvbmc+IC8mdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+QmxhemU8L3N0cm9uZz5cbiAgICAgICAgJm5ic3A7d2l0aCBteSBNZXRlb3IgYXBwcy4gSSdtIGZsdWVudCB3aXRoIFNxbCAoXG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5NeVNxbDwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBvc3RncmVTcWw8L3N0cm9uZz4pXG4gICAgICAgIGFuZCBub1NxbCAoPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1vbmdvRGI8L3N0cm9uZz4pLlxuICAgICAgICBJIGJlbGlldmUgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmNvZGUgaGFzIHRvIGNsZWFuPC9zdHJvbmc+LCBsaWtlXG4gICAgICAgIGEgZGVzaWduIGhhcyB0byBiZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5yZXNwb25zaXZlPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5hY2Nlc3NpYmxlPC9zdHJvbmc+LlxuICAgICAgICBJJ20gZmFuIG9mIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXQ8L3N0cm9uZz4gYW5kIHVzZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXRodWI8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJpdGJ1Y2tldDwvc3Ryb25nPi4gUmVjZW50bHksXG4gICAgICAgIEknbSBsZWFybmluZyB0byBwbGF5IHdpdGgmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVkdXg8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PldlYnBhY2s8L3N0cm9uZz4sIGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HcmFwaFFsPC9zdHJvbmc+IGFuZCBJJ20gbG92aW5nIGl0IVxuICAgICAgICA8YnIvPjxici8+XG4gICAgICAgIEknbSA8c3Ryb25nIGNsYXNzTmFtZT17Y3NzKF90YWcsIHllbGxvdyl9PkZyZW5jaCBuYXRpdmU8L3N0cm9uZz4mdGhpbnNwO1xuICAgICAgICBhbmQgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPXtjc3MoX3RhZywgeWVsbG93KX0+Zmx1ZW50IGluIEVuZ2xpc2g8L3N0cm9uZz4uXG4gICAgICA8L3A+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRmluZE1lKCkge1xuICAgIHJldHVybiA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgfVxuXG4gIHJlbmRlclRpbWVsaW5lKGl0ZW1zKSB7XG4gICAgcmV0dXJuIDxUaW1lbGluZSBpdGVtcz17aXRlbXN9IHN0eWxlPXt0aW1lbGluZVN0eWxlfSAvPlxuICB9XG5cbiAgcmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17cGFydGljbGVzfSAvPlxuICB9XG5cbiAgcmVuZGVyUGFyYWxsYXhCbG9jayh0aXRsZSwgY29udGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWxsYXhCbG9ja1xuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGJhY2tncm91bmQ9e3RoaXMucmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kKCl9XG4gICAgICAgIHN0eWxlPXtQYXJhbGxheEJsb2NrU3R5bGV9XG4gICAgICA+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9QYXJhbGxheEJsb2NrPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlck1lbnVJY29ucygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnUuYmxvY2t9PlxuICAgICAgICA8QnV0dG9uTGlua1xuICAgICAgICAgIHN0eWxlPXttZW51LmJ1dHRvbn1cbiAgICAgICAgICB1cmw9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfVxuICAgICAgICAgIHRpdGxlPVwiRG93bmxvYWQgQ1ZcIlxuICAgICAgICAgIGFsdD1cIkRvd25sb2FkIFBERiBSZXN1bWVcIlxuICAgICAgICAgIGJsYW5rPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uTGlua1xuICAgICAgICAgIHN0eWxlPXttZW51LmJ1dHRvbn1cbiAgICAgICAgICB1cmw9XCIvY29udGFjdFwiXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBhbHQ9XCJDb250YWN0IE1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEucmVzdW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMSAuIFNraWxsc1wiLCB0aGlzLnJlbmRlclNraWxscygpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAyIC4gV29yayBFeHBlcmllbmNlc1wiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZXhwZXJpZW5jZXMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAzIC4gUGVyc29uYWwgUHJvamVjdHNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKHByb2plY3RzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNCAuIEVkdWNhdGlvblwiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZWR1Y2F0aW9uKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNSAuIEZpbmQgTWVcIiwgdGhpcy5yZW5kZXJGaW5kTWUoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlck1lbnVJY29ucygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IFBhcmFsbGF4QmxvY2tTdHlsZSA9IHtcbiAgcGFyYWxsYXg6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2RkZCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgaGVpZ2h0OiAnMTAwcHgnIH1cbiAgfSksXG4gIHRpdGxlOiBzdHlsZSh7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFNpemU6ICcyLjNlbScsXG4gICAgbGluZUhlaWdodDogJzIuNWVtJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIHBhZGRpbmdUb3A6ICczMHB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEuM2VtJywgbGluZUhlaWdodDogJzEuNWVtJyB9XG4gIH0pLFxuICBjb250ZW50OiBzdHlsZSh7IG1hcmdpbjogJzUlIGF1dG8nIH0pXG59XG5cbmNvbnN0IHNraWxsQmxvY2sgPSBjc3Moe1xuICB3aWR0aDogJzUwJScsXG4gIG1hcmdpbjogJzYwcHggYXV0bycsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGxpbmVIZWlnaHQ6ICcxLjhlbScsXG4gIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gIGZvbnRTaXplOiAnMS4xZW0nLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQsXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyB3aWR0aDogJzcwJScgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB3aWR0aDogJzg0JScsXG4gICAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gICAgdGV4dEp1c3RpZnk6ICdpbnRlci1jbHVzdGVyJyxcbiAgfVxufSlcblxuY29uc3QgeWVsbG93ID0gY3NzKHtcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudHJhbnNfc2Vjb25kYXJ5LFxuICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnkgfVxufSlcblxuY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgbWFya2VyOiB7IGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5IH0sXG4gIHRpdGxlOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lX3RpdGxlIH0sXG4gIHN1YnRpdGxlOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRfdGV4dCB9LFxuICBkZXNjcmlwdGlvbjogeyBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQgfSxcbiAgY29udGFpbmVyQmVmb3JlOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRpbWVfbGluZSB9XG59XG5cbmNvbnN0IG1lbnUgPSB7XG4gIGJsb2NrOiBjc3Moe1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzMlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICB0b3A6ICdhdXRvJyxcbiAgICAgIGJvdHRvbTogJzElJyxcbiAgICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgICBib3JkZXJDb2xsYXBzZTogJ3NlcGFyYXRlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6ICc0cHgnLFxuICAgICAgd2lkdGg6ICc5OCUnLFxuICAgICAgbGVmdDogJzElJ1xuICAgIH1cbiAgfSksXG4gIGJ1dHRvbjogY3NzKHtcbiAgICBmb250U2l6ZTogJzFlbScsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA0ZW0nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIHdpZHRoOiAnNDUlJ1xuICAgIH0sXG4gICAgJz4gYSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBib3JkZXI6ICc0cHggc29saWQgJyArIHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIH0sXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICAnPiBhJzogeyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5IH1cbiAgICB9LFxuICB9KVxufVxuXG5jb25zdCBzb2NpYWwgPSB7XG4gIGNvbXBvbmVudDogc3R5bGUoe1xuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luOiAnMTAlIGF1dG8nLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICB0b3A6ICdjYWxjKDgwcHggLyAyKScsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjYWxjKDUlICsgMTEwcHgpJ1xuICAgIH1cbiAgfSksXG4gIGxpbms6IHN0eWxlKHtcbiAgICBtYXJnaW46ICcwIDElIDAgMSUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuOGVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzEuNWVtJyxcbiAgICAgIGRpc3BsYXk6ICdsaXN0LWl0ZW0nLFxuICAgICAgbWFyZ2luOiAnMjBweCBhdXRvJ1xuICAgIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICcxLjNlbScgfVxuICB9KVxufVxuIl19