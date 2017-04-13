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

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

var _TextTyped = require('../components/TextTyped');

var _TextTyped2 = _interopRequireDefault(_TextTyped);

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

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
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          socials = _props.socials;

      var meta = config.meta.index;

      return _react2.default.createElement(
        'div',
        { className: container },
        _react2.default.createElement(_HeadBloc2.default, {
          title: meta.title,
          description: meta.description,
          keywords: meta.keywords
        }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: verticalMenu }),
        _react2.default.createElement(_MovingText2.default, {
          beforetext: 'Hi, I\'m ',
          movingtext: 'Guillaume Kolly',
          aftertext: '.',
          style: movingText
        }),
        _react2.default.createElement(
          _TextTyped2.default,
          { style: texttyped },
          'I\u2019m a ',
          _react2.default.createElement(
            'strong',
            null,
            'FULL STACK DEVELOPER'
          ),
          ' born & raised in the French Alps, but I\u2019m currently working in Lyon - France. I\u2019m fluent in the Javascript Stack ( Meteor / Node / Html / Css / React ) and I\u2019ve recently started experimenting with Webpack, Redux, GraphQL. I\u2019m a tech enthusiast constantly improve my skills and stay up-to-date with new methods and technology. Writing readable, elegant and clean code is as important as making a clean design. You can take a look on\xA0',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/resume' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'my resume'
            )
          ),
          '\xA0for more, and do not hesitate to\xA0',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/contact' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'contact me'
            )
          ),
          '.'
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        socials: _socials2.default,
        config: _config2.default
      };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var texttyped = (0, _css.css)({
  width: '598px',
  position: 'absolute',
  right: '10%',
  fontSize: '1.1em',
  lineHeight: '1.5em',
  letterSpacing: '-0.3px',
  textAlign: 'justify',
  textJustify: 'inter-word',
  top: 'calc(30% + 7.2em)',
  color: _Theme.theme.colors.black,
  '@media(max-width: 1240px)': {
    fontSize: '1em',
    width: '467px',
    top: 'calc(30% + 4em + 4em)'
  },
  '@media(max-width: 640px)': {
    width: '335px',
    top: 'calc(30% + 2.3em)',
    right: '9%',
    marginBottom: '20px'
  },
  '@media(max-width: 440px)': {
    minWidth: '240px',
    width: 'calc(80%)',
    top: 'calc(10% + 2.5em)',
    right: '5%',
    fontSize: '0.8em'
  }
});

var movingText = {
  background: (0, _css.style)({
    height: '100vh',
    width: 'calc(100vw - 55px)',
    position: 'absolute',
    top: '0',
    left: '55px',
    fontFamily: _Theme.theme.font.title,
    '@media(max-width: 640px)': { left: '30px', width: 'calc(100vw - 30px)' }
  }),
  beforetext: (0, _css.style)({
    position: 'absolute',
    fontSize: '15em',
    right: '28.6%',
    letterSpacing: '-0.07em',
    top: '30%',
    color: _Theme.theme.colors.almost_white,
    '@media(max-width: 1240px)': { fontSize: '10em', top: '34%', right: '40%' },
    '@media(max-width: 640px)': { fontSize: '8em', top: '21%', right: '20%' },
    '@media(max-width: 440px)': { display: 'none' }
  }),
  fixedtitle: (0, _css.style)({
    position: 'absolute',
    fontSize: '6em',
    right: '10%',
    top: '30%',
    letterSpacing: '-6px',
    '@media(max-width: 640px)': { top: '20%', fontSize: '3em' },
    '@media(max-width: 440px)': { top: '0', right: '5%', letterSpacing: '0' }
  }),
  movingtitle: (0, _css.style)({
    color: _Theme.theme.colors.black,
    display: 'inline-block',
    letterSpacing: '-6px',
    '@media(max-width: 1240px)': { fontSize: '0.85em' },
    '@media(max-width: 640px)': { letterSpacing: '-3px' }
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-70',
    shadow_mouse_pos_y: '80'
  }
};

var verticalMenu = {
  component: (0, _css.css)({
    display: 'inline-block',
    margin: '20px 30px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none',
    '@media(max-width: 640px)': {
      whiteSpace: 'nowrap',
      left: '8px',
      top: '10px',
      margin: '0',
      position: 'absolute'
    }
  }),
  link: (0, _css.css)({
    margin: '0 10px 0 0',
    fontSize: '140%',
    textDecoration: 'none',
    color: _Theme.theme.colors.black,
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 640px)': { fontSize: '100%' }
  })
};

var container = (0, _css.css)({ height: '100vh', width: '100vw', position: 'relative' });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29uZmlnIiwic29jaWFscyIsIm1ldGEiLCJpbmRleCIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInZlcnRpY2FsTWVudSIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwibWFyZ2luQm90dG9tIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwibGVmdCIsImZvbnRGYW1pbHkiLCJmb250IiwiYmVmb3JldGV4dCIsImFsbW9zdF93aGl0ZSIsImRpc3BsYXkiLCJmaXhlZHRpdGxlIiwibW92aW5ndGl0bGUiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJwcmltYXJ5IiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwiY29tcG9uZW50IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInpJbmRleCIsInRleHREZWNvcmF0aW9uIiwid2hpdGVTcGFjZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVdXO0FBQUEsbUJBQ3FCLEtBQUtBLEtBRDFCO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEs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VUFBVSxNQUFaO0FBTnBCLEdBQUo7QUFqQmEsQ0FBckI7O0FBMkJBLElBQU1YLFlBQVksY0FBSSxFQUFFdUIsUUFBUSxPQUFWLEVBQW1CZixPQUFPLE9BQTFCLEVBQW1DQyxVQUFVLFVBQTdDLEVBQUosQ0FBbEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX3RhZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgVGV4dFR5cGVkIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dFR5cGVkJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvY2lhbHM6IHNvY2lhbHMsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5pbmRleFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxuICAgICAgICA8SGVhZEJsb2NcbiAgICAgICAgICB0aXRsZT17bWV0YS50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc31cbiAgICAgICAgLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17dmVydGljYWxNZW51fSAvPlxuICAgICAgICA8TW92aW5nVGV4dFxuICAgICAgICAgIGJlZm9yZXRleHQ9XCJIaSwgSSdtIFwiXG4gICAgICAgICAgbW92aW5ndGV4dD1cIkd1aWxsYXVtZSBLb2xseVwiXG4gICAgICAgICAgYWZ0ZXJ0ZXh0PVwiLlwiXG4gICAgICAgICAgc3R5bGU9e21vdmluZ1RleHR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0VHlwZWQgc3R5bGU9e3RleHR0eXBlZH0+XG4gICAgICAgICAgSeKAmW0gYSA8c3Ryb25nPkZVTEwgU1RBQ0sgREVWRUxPUEVSPC9zdHJvbmc+IGJvcm4gJiByYWlzZWQgaW4gdGhlXG4gICAgICAgICAgRnJlbmNoIEFscHMsIGJ1dCBJ4oCZbSBjdXJyZW50bHkgd29ya2luZyBpbiBMeW9uIC0gRnJhbmNlLiBJ4oCZbSBmbHVlbnRcbiAgICAgICAgICBpbiB0aGUgSmF2YXNjcmlwdCBTdGFjayAoIE1ldGVvciAvIE5vZGUgLyBIdG1sIC8gQ3NzIC8gUmVhY3QgKSBhbmRcbiAgICAgICAgICBJ4oCZdmUgcmVjZW50bHkgc3RhcnRlZCBleHBlcmltZW50aW5nIHdpdGggV2VicGFjaywgUmVkdXgsIEdyYXBoUUwuXG4gICAgICAgICAgSeKAmW0gYSB0ZWNoIGVudGh1c2lhc3QgY29uc3RhbnRseSBpbXByb3ZlIG15IHNraWxscyBhbmQgc3RheVxuICAgICAgICAgIHVwLXRvLWRhdGUgd2l0aCBuZXcgbWV0aG9kcyBhbmQgdGVjaG5vbG9neS4gV3JpdGluZyByZWFkYWJsZSwgZWxlZ2FudFxuICAgICAgICAgIGFuZCBjbGVhbiBjb2RlIGlzIGFzIGltcG9ydGFudCBhcyBtYWtpbmcgYSBjbGVhbiBkZXNpZ24uXG4gICAgICAgICAgWW91IGNhbiB0YWtlIGEgbG9vayBvbiZuYnNwO1xuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcmVzdW1lXCI+PGEgY2xhc3NOYW1lPXtfdGFnfT5teSByZXN1bWU8L2E+PC9MaW5rPlxuICAgICAgICAgICZuYnNwO2ZvciBtb3JlLCBhbmQgZG8gbm90IGhlc2l0YXRlIHRvJm5ic3A7XG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9jb250YWN0XCI+PGEgY2xhc3NOYW1lPXtfdGFnfT5jb250YWN0IG1lPC9hPjwvTGluaz4uXG4gICAgICAgIDwvVGV4dFR5cGVkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHRleHR0eXBlZCA9IGNzcyh7XG4gIHdpZHRoOiAnNTk4cHgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICBmb250U2l6ZTogJzEuMWVtJyxcbiAgbGluZUhlaWdodDogJzEuNWVtJyxcbiAgbGV0dGVyU3BhY2luZzogJy0wLjNweCcsXG4gIHRleHRBbGlnbjogJ2p1c3RpZnknLFxuICB0ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnLFxuICB0b3A6ICdjYWxjKDMwJSArIDcuMmVtKScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICB3aWR0aDogJzQ2N3B4JyxcbiAgICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDRlbSknXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgd2lkdGg6ICczMzVweCcsXG4gICAgdG9wOiAnY2FsYygzMCUgKyAyLjNlbSknLFxuICAgIHJpZ2h0OiAnOSUnLFxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA0NDBweCknOiB7XG4gICAgbWluV2lkdGg6ICcyNDBweCcsXG4gICAgd2lkdGg6ICdjYWxjKDgwJSknLFxuICAgIHRvcDogJ2NhbGMoMTAlICsgMi41ZW0pJyxcbiAgICByaWdodDogJzUlJyxcbiAgICBmb250U2l6ZTogJzAuOGVtJ1xuICB9LFxufSlcblxuY29uc3QgbW92aW5nVGV4dCA9IHtcbiAgYmFja2dyb3VuZDogc3R5bGUoe1xuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICB3aWR0aDogJ2NhbGMoMTAwdncgLSA1NXB4KScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMCcsXG4gICAgbGVmdDogJzU1cHgnLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgbGVmdDogJzMwcHgnLCB3aWR0aDogJ2NhbGMoMTAwdncgLSAzMHB4KScgfVxuICB9KSxcbiAgYmVmb3JldGV4dDogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnMTVlbScsXG4gICAgcmlnaHQ6ICcyOC42JScsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3ZW0nLFxuICAgIHRvcDogJzMwJScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5hbG1vc3Rfd2hpdGUsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IGZvbnRTaXplOiAnMTBlbScsIHRvcDogJzM0JScsIHJpZ2h0OiAnNDAlJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnOGVtJywgdG9wOiAnMjElJywgcmlnaHQ6ICcyMCUnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gIH0pLFxuICBmaXhlZHRpdGxlOiBzdHlsZSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZm9udFNpemU6ICc2ZW0nLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICB0b3A6ICczMCUnLFxuICAgIGxldHRlclNwYWNpbmc6ICctNnB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB0b3A6ICcyMCUnLCBmb250U2l6ZTogJzNlbScgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNDQwcHgpJzogeyB0b3A6ICcwJywgcmlnaHQ6ICc1JScsIGxldHRlclNwYWNpbmc6ICcwJyB9LFxuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGxldHRlclNwYWNpbmc6ICctNnB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgZm9udFNpemU6ICcwLjg1ZW0nIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgbGV0dGVyU3BhY2luZzogJy0zcHgnIH0sXG4gIH0pLFxuICBtb3Zpbmd0aXRsZWJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICBhbmltYXRpb246IHtcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3g6ICctMTAwJyxcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3k6ICctMTAwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3g6ICctNzAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeTogJzgwJyxcbiAgfVxufVxuXG5jb25zdCB2ZXJ0aWNhbE1lbnUgPSB7XG4gIGNvbXBvbmVudDogY3NzKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW46ICcyMHB4IDMwcHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnMScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBsZWZ0OiAnOHB4JyxcbiAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH1cbiAgfSksXG4gIGxpbms6IGNzcyh7XG4gICAgbWFyZ2luOiAnMCAxMHB4IDAgMCcsXG4gICAgZm9udFNpemU6ICcxNDAlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICcxMDAlJyB9XG4gIH0pXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7IGhlaWdodDogJzEwMHZoJywgd2lkdGg6ICcxMDB2dycsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH0pXG4iXX0=