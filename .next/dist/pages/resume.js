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

var _ParallaxBlock = require('../components/ParallaxBlock');

var _ParallaxBlock2 = _interopRequireDefault(_ParallaxBlock);

var _reactParticlesJs = require('react-particles-js');

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

var _particles = require('../data/particles');

var _particles2 = _interopRequireDefault(_particles);

var _resume = require('../data/resume');

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
      );
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
        this.renderParallaxBlock("04 . Education", this.renderTimeline(education))
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
        particles: _particles2.default
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
    borderTop: '1px solid #ddd'
  }),
  title: (0, _css.style)({
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    textTransform: 'uppercase',
    fontSize: '2.3em',
    paddingTop: '70px'
  }),
  content: (0, _css.style)({
    margin: '5% auto'
  })
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJza2lsbEJsb2NrIiwieWVsbG93IiwiaXRlbXMiLCJ0aW1lbGluZVN0eWxlIiwidGl0bGUiLCJjb250ZW50IiwiZ2V0UGFyYWxsYXhCZyIsIlBhcmFsbGF4QmxvY2tTdHlsZSIsInByb3BzIiwiY29uZmlnIiwiZXhwZXJpZW5jZXMiLCJwcm9qZWN0cyIsImVkdWNhdGlvbiIsIm1ldGEiLCJyZXN1bWUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwicmVuZGVyUGFyYWxsYXhCbG9jayIsInJlbmRlclNraWxscyIsInJlbmRlclRpbWVsaW5lIiwicGFydGljbGVzIiwiQ29tcG9uZW50IiwicGFyYWxsYXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwibGluZUhlaWdodCIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3NlY29uZGFyeSIsInNlY29uZGFyeSIsIm1hcmtlciIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwidGltZV9saW5lX3RpdGxlIiwic3VidGl0bGUiLCJsaWdodF90ZXh0IiwiY29udGFpbmVyQmVmb3JlIiwidGltZV9saW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O21DQWVpQjtBQUNiLGFBQ0U7QUFBQTtBQUFBLFVBQUcsV0FBV0EsVUFBZDtBQUFBO0FBRVE7QUFBQTtBQUFBLFlBQVEsc0JBQVI7QUFBQTtBQUFBLFNBRlI7QUFBQTtBQUVnRDtBQUFBO0FBQUEsWUFBUSxzQkFBUjtBQUFBO0FBQUEsU0FGaEQ7QUFBQTtBQUdR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UyxnQkFBTTtBQUNiMEIsWUFBUTtBQURLLEdBQU47QUFiZ0IsQ0FBM0I7O0FBa0JBLElBQU0vQixhQUFhLGNBQUk7QUFDckJ3QixTQUFPLEtBRGM7QUFFckJPLFVBQVEsV0FGYTtBQUdyQkwsYUFBVyxRQUhVO0FBSXJCTSxjQUFZLE9BSlM7QUFLckJILFlBQVUsT0FMVztBQU1yQkksU0FBTyxhQUFNQyxNQUFOLENBQWFDO0FBTkMsQ0FBSixDQUFuQjs7QUFTQSxJQUFNbEMsU0FBUyxjQUFJO0FBQ2pCbUMsbUJBQWlCLGFBQU1GLE1BQU4sQ0FBYUcsZUFEYjtBQUVqQixZQUFVLEVBQUVELGlCQUFpQixhQUFNRixNQUFOLENBQWFJLFNBQWhDO0FBRk8sQ0FBSixDQUFmOztBQUtBLElBQU1uQyxnQkFBZ0I7QUFDcEJvQyxVQUFRLEVBQUVDLFlBQVksYUFBTU4sTUFBTixDQUFhTyxPQUEzQixFQURZO0FBRXBCckMsU0FBTyxFQUFFNkIsT0FBTyxhQUFNQyxNQUFOLENBQWFRLGVBQXRCLEVBRmE7QUFHcEJDLFlBQVUsRUFBRVYsT0FBTyxhQUFNQyxNQUFOLENBQWFVLFVBQXRCLEVBSFU7QUFJcEI3QixlQUFhLEVBQUVrQixPQUFPLGFBQU1DLE1BQU4sQ0FBYUMsSUFBdEIsRUFKTztBQUtwQlUsbUJBQWlCLEVBQUVULGlCQUFpQixhQUFNRixNQUFOLENBQWFZLFNBQWhDO0FBTEcsQ0FBdEIiLCJmaWxlIjoicmVzdW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVsaW5lJ1xuaW1wb3J0IFBhcmFsbGF4QmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJhbGxheEJsb2NrJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5pbXBvcnQgcGFydGljbGVzIGZyb20gJy4uL2RhdGEvcGFydGljbGVzJ1xuaW1wb3J0IHsgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSBmcm9tICcuLi9kYXRhL3Jlc3VtZSdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9e3NraWxsQmxvY2t9PlxuICAgICAgICBIaWdobHkgc2tpbGxlZCBpbiBjcmVhdGluZyBwZXJmb3JtYW50XG4gICAgICAgICZuYnNwOzxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IdG1sPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Q3NzPC9zdHJvbmc+LFxuICAgICAgICAmbmJzcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3QgY29tcG9uZW50czwvc3Ryb25nPixcbiAgICAgICAgSSBwbGF5IGEgbG90IHNpbmNlIG92ZXIgdGhhbiBvbmUgeWVhciB3aXRoIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5NZXRlb3I8L3N0cm9uZz4uXG4gICAgICAgIEkgZXhwZXJpZW5jZWQgYSBsb3QgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlJ1YnkgT24gUmFpbHM8L3N0cm9uZz4uXG4gICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IHRoZSAnTUVSTicgc3RhY2sgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+LFxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+RXhwcmVzc0pzPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3RKczwvc3Ryb25nPixcbiAgICAgICAgJnRoaW5zcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Tm9kZUpzPC9zdHJvbmc+KS5cbiAgICAgICAgRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGEgbG90IHdpdGhcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PklsbHVzdHJhdG9yPC9zdHJvbmc+IGFuZCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UGhvdG9zaG9wPC9zdHJvbmc+LlxuICAgICAgICBTa2lsbGVkIHdpdGggY3NzIHByZS1wcm9jZXNzb3JzIGFuZCBmcmFtZXdvcmtzLCBsaWtlXG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Cb290c3RyYXA8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TZW1hbnRpYy11aTwvc3Ryb25nPixcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlN0eWx1czwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlNhc3M8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5IYW1sPC9zdHJvbmc+LlxuICAgICAgICBJIGFsc28gcGxheSBhIGxvdCB3aXRoIHRlbXBsYXRpbmcgbGlrZVxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SmFkZTwvc3Ryb25nPiBvciA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+QmxhemUgPC9zdHJvbmc+XG4gICAgICAgIHdpdGggbXkgTWV0ZW9yIGFwcHMuIEknbSBmbHVlbnQgd2l0aCBTcWwgKFxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TXlTcWw8L3N0cm9uZz4gLyA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UG9zdGdyZVNxbDwvc3Ryb25nPilcbiAgICAgICAgYW5kIG5vU3FsICg8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TW9uZ29EYjwvc3Ryb25nPiApLlxuICAgICAgICBJIGJlbGlldmUgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmNvZGUgaGFzIHRvIGNsZWFuPC9zdHJvbmc+LCBsaWtlIGEgZGVzaWduIGhhcyB0byBiZVxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdDwvc3Ryb25nPiBhbmQgdXNlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXRodWI8L3N0cm9uZz4gYW5kXG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5CaXRidWNrZXQ8L3N0cm9uZz4uIFJlY2VudGx5LCBJIGxlYXJuZWQgdG8gcGxheWluZyB3aXRoXG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWR1eDwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PldlYnBhY2s8L3N0cm9uZz4sIGFuZFxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R3JhcGhRbDwvc3Ryb25nPiBhbmQgbG92ZSBpdCFcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5GcmVuY2ggbmF0aXZlPC9zdHJvbmc+IGFuZCBJJ20gPHN0cm9uZyBjbGFzc05hbWU9e2NzcyhfdGFnLCB5ZWxsb3cpfT5mbHVlbnQgaW4gRW5nbGlzaDwvc3Ryb25nPi5cbiAgICAgIDwvcD5cbiAgICApXG4gIH1cblxuICByZW5kZXJUaW1lbGluZShpdGVtcykge1xuICAgIHJldHVybiA8VGltZWxpbmUgaXRlbXM9e2l0ZW1zfSBzdHlsZT17dGltZWxpbmVTdHlsZX0gLz5cbiAgfVxuXG4gIGdldFBhcmFsbGF4QmcoKSB7XG4gICAgcmV0dXJuIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJsb2NrKHRpdGxlLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXJhbGxheEJsb2NrICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17dGhpcy5nZXRQYXJhbGxheEJnKCl9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1BhcmFsbGF4QmxvY2tTdHlsZX0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9QYXJhbGxheEJsb2NrPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEucmVzdW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXttZXRhLnRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn0ga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMSAuIFNraWxsc1wiLCB0aGlzLnJlbmRlclNraWxscygpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAyIC4gV29yayBFeHBlcmllbmNlc1wiLCB0aGlzLnJlbmRlclRpbWVsaW5lKGV4cGVyaWVuY2VzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMyAuIFBlcnNvbmFsIFByb2plY3RzXCIsIHRoaXMucmVuZGVyVGltZWxpbmUocHJvamVjdHMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjA0IC4gRWR1Y2F0aW9uXCIsIHRoaXMucmVuZGVyVGltZWxpbmUoZWR1Y2F0aW9uKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgUGFyYWxsYXhCbG9ja1N0eWxlID0ge1xuICBwYXJhbGxheDogc3R5bGUoe1xuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZGRkJyxcbiAgfSksXG4gIHRpdGxlOiBzdHlsZSh7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFNpemU6ICcyLjNlbScsXG4gICAgcGFkZGluZ1RvcDogJzcwcHgnXG4gIH0pLFxuICBjb250ZW50OiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnNSUgYXV0bydcbiAgfSlcbn1cblxuY29uc3Qgc2tpbGxCbG9jayA9IGNzcyh7XG4gIHdpZHRoOiAnNTAlJyxcbiAgbWFyZ2luOiAnNjBweCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgbGluZUhlaWdodDogJzEuOGVtJyxcbiAgZm9udFNpemU6ICcxLjFlbScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbn0pXG5cbmNvbnN0IHllbGxvdyA9IGNzcyh7XG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zX3NlY29uZGFyeSxcbiAgJzpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5IH1cbn0pXG5cbmNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gIG1hcmtlcjogeyBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSB9LFxuICB0aXRsZTogeyBjb2xvcjogdGhlbWUuY29sb3JzLnRpbWVfbGluZV90aXRsZSB9LFxuICBzdWJ0aXRsZTogeyBjb2xvcjogdGhlbWUuY29sb3JzLmxpZ2h0X3RleHQgfSxcbiAgZGVzY3JpcHRpb246IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0IH0sXG4gIGNvbnRhaW5lckJlZm9yZTogeyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmUgfVxufVxuIl19