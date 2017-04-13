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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJza2lsbEJsb2NrIiwieWVsbG93Iiwic29jaWFsIiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwicmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kIiwiUGFyYWxsYXhCbG9ja1N0eWxlIiwibWVudSIsImJsb2NrIiwiYnV0dG9uIiwiYXBwbGljYXRpb24iLCJjdl9wZGZfdXJsIiwicHJvcHMiLCJjb25maWciLCJleHBlcmllbmNlcyIsInByb2plY3RzIiwiZWR1Y2F0aW9uIiwibWV0YSIsInJlc3VtZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJyZW5kZXJQYXJhbGxheEJsb2NrIiwicmVuZGVyU2tpbGxzIiwicmVuZGVyVGltZWxpbmUiLCJyZW5kZXJGaW5kTWUiLCJyZW5kZXJNZW51SWNvbnMiLCJwYXJ0aWNsZXMiLCJzb2NpYWxzIiwiQ29tcG9uZW50IiwicGFyYWxsYXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ3b3JkV3JhcCIsInRleHQiLCJ0ZXh0SnVzdGlmeSIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3NlY29uZGFyeSIsInNlY29uZGFyeSIsIm1hcmtlciIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwidGltZV9saW5lX3RpdGxlIiwic3VidGl0bGUiLCJsaWdodF90ZXh0IiwiY29udGFpbmVyQmVmb3JlIiwidGltZV9saW5lIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwiYm90dG9tIiwiZGlzcGxheSIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyU3BhY2luZyIsImxldHRlclNwYWNpbmciLCJ3aGl0ZSIsIm1hcmdpbkJvdHRvbSIsInZlcnRpY2FsQWxpZ24iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm9yZGVyIiwiY29tcG9uZW50IiwibGluayIsInRleHREZWNvcmF0aW9uIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzttQ0FlaUI7QUFDYixhQUNFO0FBQUE7QUFBQSxVQUFHLFdBQVdBLFVBQWQ7QUFBQTtBQUVFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQUZGO0FBQUE7QUFHRTtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FIRjtBQUFBO0FBSUU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBSkY7QUFBQTtBQU1FO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQU5GO0FBQUE7QUFRRztBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FSSDtBQUFBO0FBU0U7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBVEY7QUFBQTtBQVVFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQVZGO0FBQUE7QUFXRTtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FYRjtBQUFBO0FBYUU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBYkY7QUFBQTtBQWVFO0FBQUE7QUFBQSxZQUFRLHNCQUFSO0FBQUE7QUFBQSxTQWZGO0FBQUE7QUFpQlc7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBakJYO0FBQUE7QUFrQkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBbEJGO0FBQUE7QUFvQkU7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBcEJGO0FBQUE7QUFx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Z0Msb0JBQWdCLE1BRk47QUFHVnBDLFdBQU8sYUFBTUMsTUFBTixDQUFhQyxLQUhWO0FBSVZKLGNBQVUsT0FKQTtBQUtWdUMsZ0JBQVksTUFMRjtBQU1WLGNBQVUsRUFBRUQsZ0JBQWdCLGNBQWxCLEVBTkE7QUFPVixpQ0FBNkI7QUFDM0J0QyxnQkFBVSxPQURpQjtBQUUzQjBCLGVBQVMsV0FGa0I7QUFHM0JwQixjQUFRO0FBSG1CLEtBUG5CO0FBWVYsZ0NBQTRCLEVBQUVOLFVBQVUsT0FBWjtBQVpsQixHQUFOO0FBZE8sQ0FBZiIsImZpbGUiOiJyZXN1bWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvbXlyZXN1bWUnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwZXJpZW5jZXM6ICBleHBlcmllbmNlcyxcbiAgICAgIHByb2plY3RzOiAgICAgcHJvamVjdHMsXG4gICAgICBlZHVjYXRpb246ICAgIGVkdWNhdGlvbixcbiAgICAgIGNvbmZpZzogICAgICAgY29uZmlnLFxuICAgICAgcGFydGljbGVzOiAgICBwYXJ0aWNsZXMsXG4gICAgICBzb2NpYWxzOiAgICAgIHNvY2lhbHNcbiAgICB9XG4gIH1cblxuICByZW5kZXJTa2lsbHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT17c2tpbGxCbG9ja30+XG4gICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SHRtbDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Q3NzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdCBjb21wb25lbnRzPC9zdHJvbmc+LFxuICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGgmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TWV0ZW9yPC9zdHJvbmc+LlxuICAgICAgICBJJ20gcGFzc2lvbmF0ZSBhYm91dCB0aGUgJ01FUk4nIHN0YWNrJnRoaW5zcDtcbiAgICAgICAgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5FeHByZXNzSnM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJlYWN0SnM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk5vZGVKczwvc3Ryb25nPikuXG4gICAgICAgIEkgYWxzbyBjb2RlIHNvbWUgYmFja2VuZCB3b3JrIHVzaW5nJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJ1YnkgT24gUmFpbHM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgYW5kIGVuam95IHVzaW5nIHRoZSB0ZXJtLCBJIGtub3cmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U2hlbGwgc2NyaXB0aW5nPC9zdHJvbmc+IHRvJnRoaW5zcDtcbiAgICAgICAgbWFrZSBteSBsaWZlIGVhc2llci4gRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGFcbiAgICAgICAgbG90IHdpdGggPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PklsbHVzdHJhdG9yPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5QaG90b3Nob3A8L3N0cm9uZz4uXG4gICAgICAgIFNraWxsZWQgd2l0aCBjc3MgcHJlLXByb2Nlc3NvcnMgYW5kIGZyYW1ld29ya3MsIGxpa2UmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Qm9vdHN0cmFwPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TZW1hbnRpYy11aTwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U3R5bHVzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TY3NzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IYW1sPC9zdHJvbmc+LiBJIGFsc28gcGxheSB3aXRoIHRlbXBsYXRpbmdcbiAgICAgICAgbGlrZSA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SmFkZTwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJsYXplPC9zdHJvbmc+XG4gICAgICAgICZuYnNwO3dpdGggbXkgTWV0ZW9yIGFwcHMuIEknbSBmbHVlbnQgd2l0aCBTcWwgKFxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TXlTcWw8L3N0cm9uZz4gLyZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Qb3N0Z3JlU3FsPC9zdHJvbmc+KVxuICAgICAgICBhbmQgbm9TcWwgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+KS5cbiAgICAgICAgSSBiZWxpZXZlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5jb2RlIGhhcyB0byBjbGVhbjwvc3Ryb25nPiwgbGlrZVxuICAgICAgICBhIGRlc2lnbiBoYXMgdG8gYmUmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+YWNjZXNzaWJsZTwvc3Ryb25nPi5cbiAgICAgICAgSSdtIGZhbiBvZiA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R2l0PC9zdHJvbmc+IGFuZCB1c2UmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R2l0aHViPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CaXRidWNrZXQ8L3N0cm9uZz4uIFJlY2VudGx5LFxuICAgICAgICBJJ20gbGVhcm5pbmcgdG8gcGxheSB3aXRoJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJlZHV4PC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5XZWJwYWNrPC9zdHJvbmc+LCBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R3JhcGhRbDwvc3Ryb25nPiBhbmQgSSdtIGxvdmluZyBpdCFcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5GcmVuY2ggbmF0aXZlPC9zdHJvbmc+JnRoaW5zcDtcbiAgICAgICAgYW5kIEknbSA8c3Ryb25nIGNsYXNzTmFtZT17Y3NzKF90YWcsIHllbGxvdyl9PmZsdWVudCBpbiBFbmdsaXNoPC9zdHJvbmc+LlxuICAgICAgPC9wPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZpbmRNZSgpIHtcbiAgICByZXR1cm4gPE1lbnUgbGlua3M9e3NvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gIH1cblxuICByZW5kZXJUaW1lbGluZShpdGVtcykge1xuICAgIHJldHVybiA8VGltZWxpbmUgaXRlbXM9e2l0ZW1zfSBzdHlsZT17dGltZWxpbmVTdHlsZX0gLz5cbiAgfVxuXG4gIHJlbmRlclBhcmFsbGF4QmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gPFBhcnRpY2xlcyBoZWlnaHQ9XCIxMDB2aFwiIHdpZHRoPVwiMTAwdndcIiBwYXJhbXM9e3BhcnRpY2xlc30gLz5cbiAgfVxuXG4gIHJlbmRlclBhcmFsbGF4QmxvY2sodGl0bGUsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcmFsbGF4QmxvY2tcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBiYWNrZ3JvdW5kPXt0aGlzLnJlbmRlclBhcmFsbGF4QmFja2dyb3VuZCgpfVxuICAgICAgICBzdHlsZT17UGFyYWxsYXhCbG9ja1N0eWxlfVxuICAgICAgPlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvUGFyYWxsYXhCbG9jaz5cbiAgICApXG4gIH1cblxuICByZW5kZXJNZW51SWNvbnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51LmJsb2NrfT5cbiAgICAgICAgPEJ1dHRvbkxpbmtcbiAgICAgICAgICBzdHlsZT17bWVudS5idXR0b259XG4gICAgICAgICAgdXJsPXtjb25maWcuYXBwbGljYXRpb24uY3ZfcGRmX3VybH1cbiAgICAgICAgICB0aXRsZT0nRG93bmxvYWQgQ1YnXG4gICAgICAgICAgYWx0PVwiRG93bmxvYWQgUERGIFJlc3VtZVwiXG4gICAgICAgICAgYmxhbms9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25MaW5rXG4gICAgICAgICAgc3R5bGU9e21lbnUuYnV0dG9ufVxuICAgICAgICAgIHVybD1cIi9jb250YWN0XCJcbiAgICAgICAgICB0aXRsZT1cIkNvbnRhY3RcIlxuICAgICAgICAgIGFsdD1cIkNvbnRhY3QgTWVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5yZXN1bWVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZEJsb2NcbiAgICAgICAgICB0aXRsZT17bWV0YS50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc31cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAxIC4gU2tpbGxzXCIsIHRoaXMucmVuZGVyU2tpbGxzKCkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDIgLiBXb3JrIEV4cGVyaWVuY2VzXCIsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUaW1lbGluZShleHBlcmllbmNlcykpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDMgLiBQZXJzb25hbCBQcm9qZWN0c1wiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUocHJvamVjdHMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjA0IC4gRWR1Y2F0aW9uXCIsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUaW1lbGluZShlZHVjYXRpb24pKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjA1IC4gRmluZCBNZVwiLCB0aGlzLnJlbmRlckZpbmRNZSgpKX1cbiAgICAgICAge3RoaXMucmVuZGVyTWVudUljb25zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgUGFyYWxsYXhCbG9ja1N0eWxlID0ge1xuICBwYXJhbGxheDogc3R5bGUoe1xuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZGRkJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBoZWlnaHQ6ICcxMDBweCcgfVxuICB9KSxcbiAgdGl0bGU6IHN0eWxlKHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBmb250U2l6ZTogJzIuM2VtJyxcbiAgICBsaW5lSGVpZ2h0OiAnMi41ZW0nLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgcGFkZGluZ1RvcDogJzMwcHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnMS4zZW0nLCBsaW5lSGVpZ2h0OiAnMS41ZW0nIH1cbiAgfSksXG4gIGNvbnRlbnQ6IHN0eWxlKHsgbWFyZ2luOiAnNSUgYXV0bycgfSlcbn1cblxuY29uc3Qgc2tpbGxCbG9jayA9IGNzcyh7XG4gIHdpZHRoOiAnNTAlJyxcbiAgbWFyZ2luOiAnNjBweCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgbGluZUhlaWdodDogJzEuOGVtJyxcbiAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgZm9udFNpemU6ICcxLjFlbScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IHdpZHRoOiAnNzAlJyB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIHdpZHRoOiAnODQlJyxcbiAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICB0ZXh0SnVzdGlmeTogJ2ludGVyLWNsdXN0ZXInLFxuICB9XG59KVxuXG5jb25zdCB5ZWxsb3cgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19zZWNvbmRhcnksXG4gICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeSB9XG59KVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHsgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgdGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGUgfSxcbiAgc3VidGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0IH0sXG4gIGRlc2NyaXB0aW9uOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCB9LFxuICBjb250YWluZXJCZWZvcmU6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lIH1cbn1cblxuY29uc3QgbWVudSA9IHtcbiAgYmxvY2s6IGNzcyh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnMyUnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgd2lkdGg6ICcxMjBweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgYm90dG9tOiAnMSUnLFxuICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgIGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogJzRweCcsXG4gICAgICB3aWR0aDogJzk4JScsXG4gICAgICBsZWZ0OiAnMSUnXG4gICAgfVxuICB9KSxcbiAgYnV0dG9uOiBjc3Moe1xuICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDRlbScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgd2lkdGg6ICc0NSUnXG4gICAgfSxcbiAgICAnPiBhJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGJvcmRlcjogJzRweCBzb2xpZCAnICsgdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgfSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgICc+IGEnOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnkgfVxuICAgIH0sXG4gIH0pXG59XG5cbmNvbnN0IHNvY2lhbCA9IHtcbiAgY29tcG9uZW50OiBzdHlsZSh7XG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnOTk5JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcxMCUgYXV0bycsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHRvcDogJ2NhbGMoODBweCAvIDIpJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJ2NhbGMoNSUgKyAxMTBweCknXG4gICAgfVxuICB9KSxcbiAgbGluazogc3R5bGUoe1xuICAgIG1hcmdpbjogJzAgMSUgMCAxJScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMS44ZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMS41ZW0nLFxuICAgICAgZGlzcGxheTogJ2xpc3QtaXRlbScsXG4gICAgICBtYXJnaW46ICcyMHB4IGF1dG8nXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEuM2VtJyB9XG4gIH0pXG59XG4iXX0=