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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJza2lsbEJsb2NrIiwieWVsbG93Iiwic29jaWFsIiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwicmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kIiwiUGFyYWxsYXhCbG9ja1N0eWxlIiwibWVudSIsImJsb2NrIiwiYnV0dG9uIiwiYXBwbGljYXRpb24iLCJjdl9wZGZfdXJsIiwicHJvcHMiLCJjb25maWciLCJleHBlcmllbmNlcyIsInByb2plY3RzIiwiZWR1Y2F0aW9uIiwibWV0YSIsInJlc3VtZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJyZW5kZXJQYXJhbGxheEJsb2NrIiwicmVuZGVyU2tpbGxzIiwicmVuZGVyVGltZWxpbmUiLCJyZW5kZXJGaW5kTWUiLCJyZW5kZXJNZW51SWNvbnMiLCJwYXJ0aWNsZXMiLCJzb2NpYWxzIiwiQ29tcG9uZW50IiwicGFyYWxsYXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ3b3JkV3JhcCIsInRleHQiLCJ0ZXh0SnVzdGlmeSIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3NlY29uZGFyeSIsInNlY29uZGFyeSIsIm1hcmtlciIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwidGltZV9saW5lX3RpdGxlIiwic3VidGl0bGUiLCJsaWdodF90ZXh0IiwiY29udGFpbmVyQmVmb3JlIiwidGltZV9saW5lIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwiYm90dG9tIiwiZGlzcGxheSIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyU3BhY2luZyIsImxldHRlclNwYWNpbmciLCJ3aGl0ZSIsIm1hcmdpbkJvdHRvbSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm9yZGVyIiwiY29tcG9uZW50IiwibGluayIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzttQ0FlaUI7QUFDYixhQUNFO0FBQUE7QUFBQSxVQUFHLFdBQVdBLFVBQWQ7QUFBQTtBQUVFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQUZGO0FBQUE7QUFHRTtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FIRjtBQUFBO0FBSUU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBSkY7QUFBQTtBQU1FO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQU5GO0FBQUE7QUFRRztBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FSSDtBQUFBO0FBU0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBVEY7QUFBQTtBQVVFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQVZGO0FBQUE7QUFXRTtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FYRjtBQUFBO0FBYUU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBYkY7QUFBQTtBQWVFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQWZGO0FBQUE7QUFpQlc7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBakJYO0FBQUE7QUFrQkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBbEJGO0FBQUE7QUFvQkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBcEJGO0FBQUE7QUFxQkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBckJGO0FBQUE7QUFzQkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBdEJGO0FBQUE7QUF1QkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBdkJGO0FBQUE7QUF3QkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBeEJGO0FBQUE7QUF5Qk87QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBekJQO0FBQUE7QUEwQkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBMUJGO0FBQUE7QUE0QkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBNUJGO0FBQUE7QUE2QkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBN0JGO0FBQUE7QUE4QmE7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBOUJiO0FBQUE7QUErQlk7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBL0JaO0FBQUE7QUFpQ0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBakNGO0FBQUE7QUFrQ0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBbENGO0FBQUE7QUFtQ2E7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBbkNiO0FBQUE7QUFvQ0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBcENGO0FBQUE7QUFxQ0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBckNGO0FBQUE7QUF1Q0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBdkNGO0FBQUE7QUF3Q0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBeENGO0FBQUE7QUF5Q0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBekNGO0FBQUE7QUEwQ0UsaURBMUNGO0FBMENPLGlEQTFDUDtBQUFBO0FBMkNNO0FBQUE7QUFBQSxZQUFRLFdBQVcsMkJBQVVDLE1BQVYsQ0FBbkI7QUFBQTtBQUFBLFNBM0NOO0FBQUE7QUE0Q1U7QUFBQTtBQUFBLFlBQVEsV0FBVywyQkFBVUEsTUFBVixDQUFuQjtBQUFBO0FBQUEsU0E1Q1Y7QUFBQTtBQUFBLE9BREY7QUFnREQ7OzttQ0FFYztBQUNiLGFBQU8sZ0RBQU0sd0JBQU4sRUFBc0IsT0FBT0MsTUFBN0IsR0FBUDtBQUNEOzs7bUNBRWNDLEssRUFBTztBQUNwQixhQUFPLG9EQUFVLE9BQU9BLEtBQWpCLEVBQXdCLE9BQU9DLGFBQS9CLEdBQVA7QUFDRDs7OytDQUUwQjtBQUN6QixhQUFPLDREQUFXLFFBQU8sT0FBbEIsRUFBMEIsT0FBTSxPQUFoQyxFQUF3QywyQkFBeEMsR0FBUDtBQUNEOzs7d0NBRW1CQyxLLEVBQU9DLE8sRUFBUztBQUNsQyxhQUNFO0FBQUE7QUFBQSxVQUFlLE9BQU9ELEtBQXRCO0FBQ2Usc0JBQVksS0FBS0Usd0JBQUwsRUFEM0I7QUFFZSxpQkFBT0Msa0JBRnRCO0FBR0dGO0FBSEgsT0FERjtBQU9EOzs7c0NBRWlCO0FBQ2hCLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0csS0FBS0MsS0FBckI7QUFDRSw4REFBWSxPQUFPRCxLQUFLRSxNQUF4QjtBQUNFLGVBQUssaUJBQU9DLFdBQVAsQ0FBbUJDLFVBRDFCO0FBRUUsaUJBQU0sYUFGUjtBQUdFLGVBQUkscUJBSE47QUFJRSxpQkFBTyxJQUpULEdBREY7QUFNRSw4REFBWSxPQUFPSixLQUFLRSxNQUF4QjtBQUNFLGVBQUksVUFETjtBQUVFLGlCQUFNLFNBRlI7QUFHRSxlQUFJLFlBSE47QUFORixPQURGO0FBYUQ7Ozs2QkFFUTtBQUFBLG1CQUM4QyxLQUFLRyxLQURuRDtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLFdBRFQsVUFDU0EsV0FEVDtBQUFBLFVBQ3NCQyxRQUR0QixVQUNzQkEsUUFEdEI7QUFBQSxVQUNnQ0MsU0FEaEMsVUFDZ0NBLFNBRGhDOztBQUVQLFVBQU1DLE9BQU9KLE9BQU9JLElBQVAsQ0FBWUMsTUFBekI7O0FBRUEsYUFDRTtBQUFBO0FBQUE7QUFDRSw0REFBVSxPQUFPRCxLQUFLZCxLQUF0QjtBQUNVLHVCQUFhYyxLQUFLRSxXQUQ1QjtBQUVVLG9CQUFVRixLQUFLRyxRQUZ6QixHQURGO0FBSUcsYUFBS0MsbUJBQUwsQ0FBeUIsYUFBekIsRUFBd0MsS0FBS0MsWUFBTCxFQUF4QyxDQUpIO0FBS0csYUFBS0QsbUJBQUwsQ0FBeUIsdUJBQXpCLEVBQ0MsS0FBS0UsY0FBTCxDQUFvQlQsV0FBcEIsQ0FERCxDQUxIO0FBT0csYUFBS08sbUJBQUwsQ0FBeUIsd0JBQXpCLEVBQ0MsS0FBS0UsY0FBTCxDQUFvQlIsUUFBcEIsQ0FERCxDQVBIO0FBU0csYUFBS00sbUJBQUwsQ0FBeUIsZ0JBQXpCLEVBQ0MsS0FBS0UsY0FBTCxDQUFvQlAsU0FBcEIsQ0FERCxDQVRIO0FBV0csYUFBS0ssbUJBQUwsQ0FBeUIsY0FBekIsRUFBeUMsS0FBS0csWUFBTCxFQUF6QyxDQVhIO0FBWUcsYUFBS0MsZUFBTDtBQVpILE9BREY7QUFnQkQ7OztzQ0F4SHlCO0FBQ3hCLGFBQU87QUFDTFgsMENBREs7QUFFTEMsb0NBRks7QUFHTEMsc0NBSEs7QUFJTEgsZ0NBSks7QUFLTGEsc0NBTEs7QUFNTEM7QUFOSyxPQUFQO0FBUUQ7OztFQVgwQixnQkFBTUMsUzs7Ozs7QUE2SG5DLElBQU10QixxQkFBcUI7QUFDekJ1QixZQUFVLGdCQUFNO0FBQ2RDLFlBQVEsT0FETTtBQUVkQyxXQUFPLE1BRk87QUFHZEMsZUFBVyxnQkFIRztBQUlkLGdDQUE0QixFQUFFRixRQUFRLE9BQVY7QUFKZCxHQUFOLENBRGU7QUFPekIzQixTQUFPLGdCQUFNO0FBQ1g4QixlQUFXLFFBREE7QUFFWEMsZ0JBQVksc0JBRkQ7QUFHWEMsbUJBQWUsV0FISjtBQUlYQyxjQUFVLE9BSkM7QUFLWEMsZ0JBQVksT0FMRDtBQU1YQyxXQUFPLGFBQU1DLE1BQU4sQ0FBYUMsS0FOVDtBQU9YQyxnQkFBWSxNQVBEO0FBUVgsZ0NBQTRCLEVBQUVMLFVBQVUsT0FBWixFQUFxQkMsWUFBWSxPQUFqQztBQVJqQixHQUFOLENBUGtCO0FBaUJ6QmpDLFdBQVMsZ0JBQU0sRUFBRXNDLFFBQVEsU0FBVixFQUFOO0FBakJnQixDQUEzQjs7QUFvQkEsSUFBTTVDLGFBQWEsY0FBSTtBQUNyQmlDLFNBQU8sS0FEYztBQUVyQlcsVUFBUSxXQUZhO0FBR3JCVCxhQUFXLFFBSFU7QUFJckJJLGNBQVksT0FKUztBQUtyQk0sWUFBVSxZQUxXO0FBTXJCUCxZQUFVLE9BTlc7QUFPckJFLFNBQU8sYUFBTUMsTUFBTixDQUFhSyxJQVBDO0FBUXJCLCtCQUE2QixFQUFFYixPQUFPLEtBQVQsRUFSUjtBQVNyQiw4QkFBNEI7QUFDMUJBLFdBQU8sS0FEbUI7QUFFMUJFLGVBQVcsU0FGZTtBQUcxQlksaUJBQWE7QUFIYTtBQVRQLENBQUosQ0FBbkI7O0FBZ0JBLElBQU05QyxTQUFTLGNBQUk7QUFDakIrQyxtQkFBaUIsYUFBTVAsTUFBTixDQUFhUSxlQURiO0FBRWpCLFlBQVUsRUFBRUQsaUJBQWlCLGFBQU1QLE1BQU4sQ0FBYVMsU0FBaEM7QUFGTyxDQUFKLENBQWY7O0FBS0EsSUFBTTlDLGdCQUFnQjtBQUNwQitDLFVBQVEsRUFBRUMsWUFBWSxhQUFNWCxNQUFOLENBQWFZLE9BQTNCLEVBRFk7QUFFcEJoRCxTQUFPLEVBQUVtQyxPQUFPLGFBQU1DLE1BQU4sQ0FBYWEsZUFBdEIsRUFGYTtBQUdwQkMsWUFBVSxFQUFFZixPQUFPLGFBQU1DLE1BQU4sQ0FBYWUsVUFBdEIsRUFIVTtBQUlwQm5DLGVBQWEsRUFBRW1CLE9BQU8sYUFBTUMsTUFBTixDQUFhSyxJQUF0QixFQUpPO0FBS3BCVyxtQkFBaUIsRUFBRVQsaUJBQWlCLGFBQU1QLE1BQU4sQ0FBYWlCLFNBQWhDO0FBTEcsQ0FBdEI7O0FBUUEsSUFBTWpELE9BQU87QUFDWEMsU0FBTyxjQUFJO0FBQ1RpRCxjQUFVLE9BREQ7QUFFVEMsU0FBSyxLQUZJO0FBR1RDLFVBQU0sSUFIRztBQUlUQyxZQUFRLEtBSkM7QUFLVDdCLFdBQU8sT0FMRTtBQU1ULGdDQUE0QjtBQUMxQjJCLFdBQUssTUFEcUI7QUFFMUJHLGNBQVEsSUFGa0I7QUFHMUJDLGVBQVMsT0FIaUI7QUFJMUJDLHNCQUFnQixVQUpVO0FBSzFCQyxxQkFBZSxLQUxXO0FBTTFCakMsYUFBTyxLQU5tQjtBQU8xQjRCLFlBQU07QUFQb0I7QUFObkIsR0FBSixDQURJO0FBaUJYbEQsVUFBUSxjQUFJO0FBQ1YyQixjQUFVLEtBREE7QUFFVjZCLG1CQUFlLFNBRkw7QUFHVmhDLGVBQVcsUUFIRDtBQUlWYSxxQkFBaUIsYUFBTVAsTUFBTixDQUFhMkIsS0FKcEI7QUFLVm5DLFdBQU8sTUFMRztBQU1Wb0Msa0JBQWMsS0FOSjtBQU9WLGdDQUE0QjtBQUMxQkwsZUFBUyxZQURpQjtBQUUxQk0scUJBQWUsUUFGVztBQUcxQnJDLGFBQU87QUFIbUIsS0FQbEI7QUFZVixXQUFPO0FBQ0xPLGFBQU8sYUFBTUMsTUFBTixDQUFhQyxLQURmO0FBRUxzQixlQUFTLE9BRko7QUFHTE8sZUFBUyxNQUhKO0FBSUxDLGlCQUFXLFlBSk47QUFLTEMsY0FBUSxlQUFlLGFBQU1oQyxNQUFOLENBQWFZO0FBTC9CLEtBWkc7QUFtQlYsY0FBVTtBQUNSYixhQUFPLGFBQU1DLE1BQU4sQ0FBYTJCLEtBRFo7QUFFUixhQUFPLEVBQUVwQixpQkFBaUIsYUFBTVAsTUFBTixDQUFhWSxPQUFoQztBQUZDO0FBbkJBLEdBQUo7QUFqQkcsQ0FBYjs7QUEyQ0EsSUFBTW5ELFNBQVM7QUFDYndFLGFBQVcsZ0JBQU07QUFDZnJDLG1CQUFlLFdBREE7QUFFZnlCLFlBQVEsS0FGTztBQUdmSCxjQUFVLFVBSEs7QUFJZkMsU0FBSyxLQUpVO0FBS2Z6QixlQUFXLFFBTEk7QUFNZjZCLGFBQVMsT0FOTTtBQU9mcEIsWUFBUSxVQVBPO0FBUWYsZ0NBQTRCO0FBQzFCZ0IsV0FBSyxnQkFEcUI7QUFFMUJTLG9CQUFjO0FBRlk7QUFSYixHQUFOLENBREU7QUFjYk0sUUFBTSxnQkFBTTtBQUNWL0IsWUFBUSxXQURFO0FBRVZnQyxvQkFBZ0IsTUFGTjtBQUdWcEMsV0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBSFY7QUFJVkosY0FBVSxPQUpBO0FBS1Z1QyxnQkFBWSxNQUxGO0FBTVYsY0FBVSxFQUFFRCxnQkFBZ0IsY0FBbEIsRUFOQTtBQU9WLGlDQUE2QjtBQUMzQnRDLGdCQUFVLE9BRGlCO0FBRTNCMEIsZUFBUyxXQUZrQjtBQUczQnBCLGNBQVE7QUFIbUIsS0FQbkI7QUFZVixnQ0FBNEIsRUFBRU4sVUFBVSxPQUFaO0FBWmxCLEdBQU47QUFkTyxDQUFmIiwiZmlsZSI6InJlc3VtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MsIHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBQYXJhbGxheEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvUGFyYWxsYXhCbG9jaydcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lJ1xuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25MaW5rJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHBhcnRpY2xlcyBmcm9tICcuLi9kYXRhL3BhcnRpY2xlcydcbmltcG9ydCB7IGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gZnJvbSAnLi4vZGF0YS9teXJlc3VtZSdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBleHBlcmllbmNlczogIGV4cGVyaWVuY2VzLFxuICAgICAgcHJvamVjdHM6ICAgICBwcm9qZWN0cyxcbiAgICAgIGVkdWNhdGlvbjogICAgZWR1Y2F0aW9uLFxuICAgICAgY29uZmlnOiAgICAgICBjb25maWcsXG4gICAgICBwYXJ0aWNsZXM6ICAgIHBhcnRpY2xlcyxcbiAgICAgIHNvY2lhbHM6ICAgICAgc29jaWFsc1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNraWxscygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHAgY2xhc3NOYW1lPXtza2lsbEJsb2NrfT5cbiAgICAgICAgSGlnaGx5IHNraWxsZWQgaW4gY3JlYXRpbmcgcGVyZm9ybWFudCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IdG1sPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Dc3M8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJlYWN0IGNvbXBvbmVudHM8L3N0cm9uZz4sXG4gICAgICAgIEkgcGxheSBhIGxvdCBzaW5jZSBvdmVyIHRoYW4gb25lIHllYXIgd2l0aCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5NZXRlb3I8L3N0cm9uZz4uXG4gICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IHRoZSAnTUVSTicgc3RhY2smdGhpbnNwO1xuICAgICAgICAoPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1vbmdvRGI8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkV4cHJlc3NKczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3RKczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Tm9kZUpzPC9zdHJvbmc+KS5cbiAgICAgICAgSSBhbHNvIGNvZGUgc29tZSBiYWNrZW5kIHdvcmsgdXNpbmcmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UnVieSBPbiBSYWlsczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICBhbmQgZW5qb3kgdXNpbmcgdGhlIHRlcm0sIEkga25vdyZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TaGVsbCBzY3JpcHRpbmc8L3N0cm9uZz4gdG8mdGhpbnNwO1xuICAgICAgICBtYWtlIG15IGxpZmUgZWFzaWVyLiBFeHBlcmllbmNlZCB3aXRoIGRlc2lnbiwgSSdtIHBsYXlpbmcgYVxuICAgICAgICBsb3Qgd2l0aCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SWxsdXN0cmF0b3I8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBob3Rvc2hvcDwvc3Ryb25nPi5cbiAgICAgICAgU2tpbGxlZCB3aXRoIGNzcyBwcmUtcHJvY2Vzc29ycyBhbmQgZnJhbWV3b3JrcywgbGlrZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Cb290c3RyYXA8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNlbWFudGljLXVpPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TdHlsdXM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNjc3M8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkhhbWw8L3N0cm9uZz4uIEkgYWxzbyBwbGF5IHdpdGggdGVtcGxhdGluZ1xuICAgICAgICBsaWtlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5KYWRlPC9zdHJvbmc+IC8mdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+QmxhemU8L3N0cm9uZz5cbiAgICAgICAgJm5ic3A7d2l0aCBteSBNZXRlb3IgYXBwcy4gSSdtIGZsdWVudCB3aXRoIFNxbCAoXG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5NeVNxbDwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBvc3RncmVTcWw8L3N0cm9uZz4pXG4gICAgICAgIGFuZCBub1NxbCAoPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1vbmdvRGI8L3N0cm9uZz4pLlxuICAgICAgICBJIGJlbGlldmUgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmNvZGUgaGFzIHRvIGNsZWFuPC9zdHJvbmc+LCBsaWtlXG4gICAgICAgIGEgZGVzaWduIGhhcyB0byBiZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5yZXNwb25zaXZlPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5hY2Nlc3NpYmxlPC9zdHJvbmc+LlxuICAgICAgICBJJ20gZmFuIG9mIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXQ8L3N0cm9uZz4gYW5kIHVzZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXRodWI8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJpdGJ1Y2tldDwvc3Ryb25nPi4gUmVjZW50bHksXG4gICAgICAgIEknbSBsZWFybmluZyB0byBwbGF5IHdpdGgmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVkdXg8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PldlYnBhY2s8L3N0cm9uZz4sIGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HcmFwaFFsPC9zdHJvbmc+IGFuZCBJJ20gbG92aW5nIGl0IVxuICAgICAgICA8YnIvPjxici8+XG4gICAgICAgIEknbSA8c3Ryb25nIGNsYXNzTmFtZT17Y3NzKF90YWcsIHllbGxvdyl9PkZyZW5jaCBuYXRpdmU8L3N0cm9uZz4mdGhpbnNwO1xuICAgICAgICBhbmQgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPXtjc3MoX3RhZywgeWVsbG93KX0+Zmx1ZW50IGluIEVuZ2xpc2g8L3N0cm9uZz4uXG4gICAgICA8L3A+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRmluZE1lKCkge1xuICAgIHJldHVybiA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgfVxuXG4gIHJlbmRlclRpbWVsaW5lKGl0ZW1zKSB7XG4gICAgcmV0dXJuIDxUaW1lbGluZSBpdGVtcz17aXRlbXN9IHN0eWxlPXt0aW1lbGluZVN0eWxlfSAvPlxuICB9XG5cbiAgcmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17cGFydGljbGVzfSAvPlxuICB9XG5cbiAgcmVuZGVyUGFyYWxsYXhCbG9jayh0aXRsZSwgY29udGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWxsYXhCbG9jayB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXt0aGlzLnJlbmRlclBhcmFsbGF4QmFja2dyb3VuZCgpfVxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1BhcmFsbGF4QmxvY2tTdHlsZX0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9QYXJhbGxheEJsb2NrPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlck1lbnVJY29ucygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnUuYmxvY2t9PlxuICAgICAgICA8QnV0dG9uTGluayBzdHlsZT17bWVudS5idXR0b259XG4gICAgICAgICAgdXJsPXtjb25maWcuYXBwbGljYXRpb24uY3ZfcGRmX3VybH1cbiAgICAgICAgICB0aXRsZT0nRG93bmxvYWQgQ1YnXG4gICAgICAgICAgYWx0PVwiRG93bmxvYWQgUERGIFJlc3VtZVwiXG4gICAgICAgICAgYmxhbms9e3RydWV9IC8+XG4gICAgICAgIDxCdXR0b25MaW5rIHN0eWxlPXttZW51LmJ1dHRvbn1cbiAgICAgICAgICB1cmw9XCIvY29udGFjdFwiXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBhbHQ9XCJDb250YWN0IE1lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEucmVzdW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAxIC4gU2tpbGxzXCIsIHRoaXMucmVuZGVyU2tpbGxzKCkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDIgLiBXb3JrIEV4cGVyaWVuY2VzXCIsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUaW1lbGluZShleHBlcmllbmNlcykpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDMgLiBQZXJzb25hbCBQcm9qZWN0c1wiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUocHJvamVjdHMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjA0IC4gRWR1Y2F0aW9uXCIsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUaW1lbGluZShlZHVjYXRpb24pKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjA1IC4gRmluZCBNZVwiLCB0aGlzLnJlbmRlckZpbmRNZSgpKX1cbiAgICAgICAge3RoaXMucmVuZGVyTWVudUljb25zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgUGFyYWxsYXhCbG9ja1N0eWxlID0ge1xuICBwYXJhbGxheDogc3R5bGUoe1xuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZGRkJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBoZWlnaHQ6ICcxMDBweCcgfVxuICB9KSxcbiAgdGl0bGU6IHN0eWxlKHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBmb250U2l6ZTogJzIuM2VtJyxcbiAgICBsaW5lSGVpZ2h0OiAnMi41ZW0nLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgcGFkZGluZ1RvcDogJzMwcHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnMS4zZW0nLCBsaW5lSGVpZ2h0OiAnMS41ZW0nIH1cbiAgfSksXG4gIGNvbnRlbnQ6IHN0eWxlKHsgbWFyZ2luOiAnNSUgYXV0bycgfSlcbn1cblxuY29uc3Qgc2tpbGxCbG9jayA9IGNzcyh7XG4gIHdpZHRoOiAnNTAlJyxcbiAgbWFyZ2luOiAnNjBweCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgbGluZUhlaWdodDogJzEuOGVtJyxcbiAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgZm9udFNpemU6ICcxLjFlbScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IHdpZHRoOiAnNzAlJyB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIHdpZHRoOiAnODQlJyxcbiAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICB0ZXh0SnVzdGlmeTogJ2ludGVyLWNsdXN0ZXInLFxuICB9XG59KVxuXG5jb25zdCB5ZWxsb3cgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19zZWNvbmRhcnksXG4gICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeSB9XG59KVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHsgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgdGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGUgfSxcbiAgc3VidGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0IH0sXG4gIGRlc2NyaXB0aW9uOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCB9LFxuICBjb250YWluZXJCZWZvcmU6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lIH1cbn1cblxuY29uc3QgbWVudSA9IHtcbiAgYmxvY2s6IGNzcyh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnMyUnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgd2lkdGg6ICcxMjBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgYm90dG9tOiAnMSUnLFxuICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgIGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogJzRweCcsXG4gICAgICB3aWR0aDogJzk4JScsXG4gICAgICBsZWZ0OiAnMSUnXG4gICAgfVxuICB9KSxcbiAgYnV0dG9uOiBjc3Moe1xuICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDRlbScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgd2lkdGg6ICc0NSUnXG4gICAgfSxcbiAgICAnPiBhJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGJvcmRlcjogJzRweCBzb2xpZCAnICsgdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgfSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgICc+IGEnOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnkgfVxuICAgIH0sXG4gIH0pXG59XG5cbmNvbnN0IHNvY2lhbCA9IHtcbiAgY29tcG9uZW50OiBzdHlsZSh7XG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnOTk5JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcxMCUgYXV0bycsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHRvcDogJ2NhbGMoODBweCAvIDIpJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJ2NhbGMoNSUgKyAxMTBweCknXG4gICAgfVxuICB9KSxcbiAgbGluazogc3R5bGUoe1xuICAgIG1hcmdpbjogJzAgMSUgMCAxJScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMS44ZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMS41ZW0nLFxuICAgICAgZGlzcGxheTogJ2xpc3QtaXRlbScsXG4gICAgICBtYXJnaW46ICcyMHB4IGF1dG8nXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEuM2VtJyB9XG4gIH0pXG59XG4iXX0=