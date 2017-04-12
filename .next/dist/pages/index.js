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
        _react2.default.createElement(_Menu2.default, { links: socials, style: _Theme._verticalMenu }),
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
  top: 'calc(30% + 4em + 3.2em)',
  color: _Theme.theme.colors.black,
  '@media(max-width: 1240px)': {
    fontSize: '1em',
    width: '467px',
    top: 'calc(30% + 4em + 4em)'
  },
  '@media(max-width: 640px)': { width: '280px', top: '50px' }
});

var movingText = {
  background: (0, _css.style)({
    height: 'calc(100vh)',
    width: 'calc(100vw - 55px)',
    position: 'absolute',
    top: '0',
    left: '50px',
    fontFamily: _Theme.theme.font.title
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
    '@media(max-width: 640px)': { top: '30px' }
  }),
  movingtitle: (0, _css.style)({
    color: _Theme.theme.colors.black,
    letterSpacing: '-6px',
    '@media(max-width: 1240px)': { fontSize: '0.8em' },
    '@media(max-width: 640px)': { fontSize: '0.47em', letterSpacing: '-4px' }
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-70',
    shadow_mouse_pos_y: '80'
  }
};

var container = (0, _css.css)({ height: '100vh', width: '100vw', position: 'relative' });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29uZmlnIiwic29jaWFscyIsIm1ldGEiLCJpbmRleCIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImxlZnQiLCJmb250RmFtaWx5IiwiZm9udCIsImJlZm9yZXRleHQiLCJhbG1vc3Rfd2hpdGUiLCJkaXNwbGF5IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBV1c7QUFBQSxtQkFDcUIsS0FBS0EsS0FEMUI7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxPQURULFVBQ1NBLE9BRFQ7O0FBRVAsVUFBTUMsT0FBT0YsT0FBT0UsSUFBUCxDQUFZQyxLQUF6Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdDLFNBQWhCO0FBQ0UsNERBQVUsT0FBT0YsS0FBS0csS0FBdEI7QUFDVSx1QkFBYUgsS0FBS0ksV0FENUI7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QUpYO0FBbkNNLENBQW5COztBQTJDQSxJQUFNbkMsWUFBWSxjQUFJLEVBQUVvQixRQUFRLE9BQVYsRUFBbUJiLE9BQU8sT0FBMUIsRUFBbUNDLFVBQVUsVUFBN0MsRUFBSixDQUFsQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MsIHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnLCBfdmVydGljYWxNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNb3ZpbmdUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aW5nVGV4dCdcbmltcG9ydCBUZXh0VHlwZWQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0VHlwZWQnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc29jaWFsczogc29jaWFscyxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBzb2NpYWxzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLmluZGV4XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT17bWV0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e192ZXJ0aWNhbE1lbnV9IC8+XG4gICAgICAgIDxNb3ZpbmdUZXh0IGJlZm9yZXRleHQ9XCJIaSwgSSdtIFwiXG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ3RleHQ9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgICAgICAgICAgICBhZnRlcnRleHQ9XCIuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e21vdmluZ1RleHR9IC8+XG4gICAgICAgIDxUZXh0VHlwZWQgc3R5bGU9e3RleHR0eXBlZH0+XG4gICAgICAgICAgSeKAmW0gYSA8c3Ryb25nPkZVTEwgU1RBQ0sgREVWRUxPUEVSPC9zdHJvbmc+IGJvcm4gJiByYWlzZWQgaW4gdGhlXG4gICAgICAgICAgRnJlbmNoIEFscHMsIGJ1dCBJ4oCZbSBjdXJyZW50bHkgd29ya2luZyBpbiBMeW9uIC0gRnJhbmNlLiBJ4oCZbSBmbHVlbnRcbiAgICAgICAgICBpbiB0aGUgSmF2YXNjcmlwdCBTdGFjayAoIE1ldGVvciAvIE5vZGUgLyBIdG1sIC8gQ3NzIC8gUmVhY3QgKSBhbmRcbiAgICAgICAgICBJ4oCZdmUgcmVjZW50bHkgc3RhcnRlZCBleHBlcmltZW50aW5nIHdpdGggV2VicGFjaywgUmVkdXgsIEdyYXBoUUwuXG4gICAgICAgICAgSeKAmW0gYSB0ZWNoIGVudGh1c2lhc3QgY29uc3RhbnRseSBpbXByb3ZlIG15IHNraWxscyBhbmQgc3RheVxuICAgICAgICAgIHVwLXRvLWRhdGUgd2l0aCBuZXcgbWV0aG9kcyBhbmQgdGVjaG5vbG9neS4gV3JpdGluZyByZWFkYWJsZSwgZWxlZ2FudFxuICAgICAgICAgIGFuZCBjbGVhbiBjb2RlIGlzIGFzIGltcG9ydGFudCBhcyBtYWtpbmcgYSBjbGVhbiBkZXNpZ24uXG4gICAgICAgICAgWW91IGNhbiB0YWtlIGEgbG9vayBvbiZuYnNwO1xuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcmVzdW1lXCI+PGEgY2xhc3NOYW1lPXtfdGFnfT5teSByZXN1bWU8L2E+PC9MaW5rPlxuICAgICAgICAgICZuYnNwO2ZvciBtb3JlLCBhbmQgZG8gbm90IGhlc2l0YXRlIHRvJm5ic3A7XG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9jb250YWN0XCI+PGEgY2xhc3NOYW1lPXtfdGFnfT5jb250YWN0IG1lPC9hPjwvTGluaz4uXG4gICAgICAgIDwvVGV4dFR5cGVkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHRleHR0eXBlZCA9IGNzcyh7XG4gIHdpZHRoOiAnNTk4cHgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICBmb250U2l6ZTogJzEuMWVtJyxcbiAgbGluZUhlaWdodDogJzEuNWVtJyxcbiAgbGV0dGVyU3BhY2luZzogJy0wLjNweCcsXG4gIHRleHRBbGlnbjogJ2p1c3RpZnknLFxuICB0ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnLFxuICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDMuMmVtKScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICB3aWR0aDogJzQ2N3B4JyxcbiAgICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDRlbSknLFxuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB3aWR0aDogJzI4MHB4JywgdG9wOiAnNTBweCcgfSxcbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICdjYWxjKDEwMHZoKScsXG4gICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gNTVweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICc1MHB4JyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICB9KSxcbiAgYmVmb3JldGV4dDogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnMTVlbScsXG4gICAgcmlnaHQ6ICcyOC42JScsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3ZW0nLFxuICAgIHRvcDogJzMwJScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5hbG1vc3Rfd2hpdGUsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IGZvbnRTaXplOiAnMTBlbScsIHRvcDogJzM0JScsIHJpZ2h0OiAnNDAlJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnOGVtJywgdG9wOiAnMjElJywgcmlnaHQ6ICcyMCUnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gIH0pLFxuICBmaXhlZHRpdGxlOiBzdHlsZSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZm9udFNpemU6ICc2ZW0nLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICB0b3A6ICczMCUnLFxuICAgIGxldHRlclNwYWNpbmc6ICctNnB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB0b3A6ICczMHB4JyB9LFxuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGxldHRlclNwYWNpbmc6ICctNnB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgZm9udFNpemU6ICcwLjhlbScsIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICcwLjQ3ZW0nLCBsZXR0ZXJTcGFjaW5nOiAnLTRweCcsfSxcbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy03MCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnODAnLFxuICB9XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7IGhlaWdodDogJzEwMHZoJywgd2lkdGg6ICcxMDB2dycsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH0pXG4iXX0=