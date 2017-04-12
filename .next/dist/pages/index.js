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
        _react2.default.createElement(_HeadBloc2.default, { title: meta.title,
          description: meta.description,
          keywords: meta.keywords }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: verticalMenu }),
        _react2.default.createElement(_MovingText2.default, { beforetext: 'Hi, I\'m ',
          movingtext: 'Guillaume Kolly',
          aftertext: '.',
          style: movingText }),
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
    width: '240px',
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
    '@media(max-width: 1240px)': { fontSize: '0.8em' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29uZmlnIiwic29jaWFscyIsIm1ldGEiLCJpbmRleCIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInZlcnRpY2FsTWVudSIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImxlZnQiLCJmb250RmFtaWx5IiwiZm9udCIsImJlZm9yZXRleHQiLCJhbG1vc3Rfd2hpdGUiLCJkaXNwbGF5IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSIsImNvbXBvbmVudCIsIm1hcmdpbiIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsInRleHRUcmFuc2Zvcm0iLCJ6SW5kZXgiLCJ0ZXh0RGVjb3JhdGlvbiIsIndoaXRlU3BhY2UiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFXVztBQUFBLG1CQUNxQixLQUFLQSxLQUQxQjtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLE9BRFQs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LENBQXJCOztBQTJCQSxJQUFNWCxZQUFZLGNBQUksRUFBRXNCLFFBQVEsT0FBVixFQUFtQmQsT0FBTyxPQUExQixFQUFtQ0MsVUFBVSxVQUE3QyxFQUFKLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IFRleHRUeXBlZCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRUeXBlZCdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb2NpYWxzOiBzb2NpYWxzLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEuaW5kZXhcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17dmVydGljYWxNZW51fSAvPlxuICAgICAgICA8TW92aW5nVGV4dCBiZWZvcmV0ZXh0PVwiSGksIEknbSBcIlxuICAgICAgICAgICAgICAgICAgICBtb3Zpbmd0ZXh0PVwiR3VpbGxhdW1lIEtvbGx5XCJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJ0ZXh0PVwiLlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICA8VGV4dFR5cGVkIHN0eWxlPXt0ZXh0dHlwZWR9PlxuICAgICAgICAgIEnigJltIGEgPHN0cm9uZz5GVUxMIFNUQUNLIERFVkVMT1BFUjwvc3Ryb25nPiBib3JuICYgcmFpc2VkIGluIHRoZVxuICAgICAgICAgIEZyZW5jaCBBbHBzLCBidXQgSeKAmW0gY3VycmVudGx5IHdvcmtpbmcgaW4gTHlvbiAtIEZyYW5jZS4gSeKAmW0gZmx1ZW50XG4gICAgICAgICAgaW4gdGhlIEphdmFzY3JpcHQgU3RhY2sgKCBNZXRlb3IgLyBOb2RlIC8gSHRtbCAvIENzcyAvIFJlYWN0ICkgYW5kXG4gICAgICAgICAgSeKAmXZlIHJlY2VudGx5IHN0YXJ0ZWQgZXhwZXJpbWVudGluZyB3aXRoIFdlYnBhY2ssIFJlZHV4LCBHcmFwaFFMLlxuICAgICAgICAgIEnigJltIGEgdGVjaCBlbnRodXNpYXN0IGNvbnN0YW50bHkgaW1wcm92ZSBteSBza2lsbHMgYW5kIHN0YXlcbiAgICAgICAgICB1cC10by1kYXRlIHdpdGggbmV3IG1ldGhvZHMgYW5kIHRlY2hub2xvZ3kuIFdyaXRpbmcgcmVhZGFibGUsIGVsZWdhbnRcbiAgICAgICAgICBhbmQgY2xlYW4gY29kZSBpcyBhcyBpbXBvcnRhbnQgYXMgbWFraW5nIGEgY2xlYW4gZGVzaWduLlxuICAgICAgICAgIFlvdSBjYW4gdGFrZSBhIGxvb2sgb24mbmJzcDtcbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL3Jlc3VtZVwiPjxhIGNsYXNzTmFtZT17X3RhZ30+bXkgcmVzdW1lPC9hPjwvTGluaz5cbiAgICAgICAgICAmbmJzcDtmb3IgbW9yZSwgYW5kIGRvIG5vdCBoZXNpdGF0ZSB0byZuYnNwO1xuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT17X3RhZ30+Y29udGFjdCBtZTwvYT48L0xpbms+LlxuICAgICAgICA8L1RleHRUeXBlZD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCB0ZXh0dHlwZWQgPSBjc3Moe1xuICB3aWR0aDogJzU5OHB4JyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnMTAlJyxcbiAgZm9udFNpemU6ICcxLjFlbScsXG4gIGxpbmVIZWlnaHQ6ICcxLjVlbScsXG4gIGxldHRlclNwYWNpbmc6ICctMC4zcHgnLFxuICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgdGV4dEp1c3RpZnk6ICdpbnRlci13b3JkJyxcbiAgdG9wOiAnY2FsYygzMCUgKyA3LjJlbSknLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzFlbScsXG4gICAgd2lkdGg6ICc0NjdweCcsXG4gICAgdG9wOiAnY2FsYygzMCUgKyA0ZW0gKyA0ZW0pJyxcbiAgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB3aWR0aDogJzMzNXB4JyxcbiAgICB0b3A6ICdjYWxjKDMwJSArIDIuM2VtKScsXG4gICAgcmlnaHQ6ICc5JScsXG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCdcbiAgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSc6IHtcbiAgICB3aWR0aDogJzI0MHB4JyxcbiAgICB0b3A6ICdjYWxjKDEwJSArIDIuNWVtKScsXG4gICAgcmlnaHQ6ICc1JScsXG4gICAgZm9udFNpemU6ICcwLjhlbSdcbiAgfSxcbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gNTVweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICc1NXB4JyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGxlZnQ6ICczMHB4Jywgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gMzBweCknIH1cbiAgfSksXG4gIGJlZm9yZXRleHQ6IHN0eWxlKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBmb250U2l6ZTogJzE1ZW0nLFxuICAgIHJpZ2h0OiAnMjguNiUnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4wN2VtJyxcbiAgICB0b3A6ICczMCUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYWxtb3N0X3doaXRlLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBmb250U2l6ZTogJzEwZW0nLCB0b3A6ICczNCUnLCByaWdodDogJzQwJScgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzhlbScsIHRvcDogJzIxJScsIHJpZ2h0OiAnMjAlJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA0NDBweCknOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICB9KSxcbiAgZml4ZWR0aXRsZTogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnNmVtJyxcbiAgICByaWdodDogJzEwJScsXG4gICAgdG9wOiAnMzAlJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTZweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgdG9wOiAnMjAlJywgZm9udFNpemU6ICczZW0nIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSc6IHsgdG9wOiAnMCcsIHJpZ2h0OiAnNSUnLCBsZXR0ZXJTcGFjaW5nOiAnMCcgfSxcbiAgfSksXG4gIG1vdmluZ3RpdGxlOiBzdHlsZSh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTZweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IGZvbnRTaXplOiAnMC44ZW0nLCB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGxldHRlclNwYWNpbmc6ICctM3B4Jyx9LFxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTcwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICc4MCcsXG4gIH1cbn1cblxuY29uc3QgdmVydGljYWxNZW51ID0ge1xuICBjb21wb25lbnQ6IGNzcyh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnMjBweCAzMHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSknLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgbGVmdDogJzhweCcsXG4gICAgICB0b3A6ICcxMHB4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgfVxuICB9KSxcbiAgbGluazogY3NzKHtcbiAgICBtYXJnaW46ICcwIDEwcHggMCAwJyxcbiAgICBmb250U2l6ZTogJzE0MCUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEwMCUnIH1cbiAgfSlcbn1cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHsgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDogJzEwMHZ3JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSlcbiJdfQ==