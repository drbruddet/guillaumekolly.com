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

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
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
  return Index;
}(_react2.default.Component);

exports.default = Index;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjb25maWciLCJzb2NpYWxzIiwibWV0YSIsImluZGV4IiwiY29udGFpbmVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwidmVydGljYWxNZW51IiwibW92aW5nVGV4dCIsInRleHR0eXBlZCIsIkNvbXBvbmVudCIsIndpZHRoIiwicG9zaXRpb24iLCJyaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJ0ZXh0SnVzdGlmeSIsInRvcCIsImNvbG9yIiwiY29sb3JzIiwiYmxhY2siLCJtYXJnaW5Cb3R0b20iLCJtaW5XaWR0aCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJsZWZ0IiwiZm9udEZhbWlseSIsImZvbnQiLCJiZWZvcmV0ZXh0IiwiYWxtb3N0X3doaXRlIiwiZGlzcGxheSIsImZpeGVkdGl0bGUiLCJtb3Zpbmd0aXRsZSIsIm1vdmluZ3RpdGxlYmFja2dyb3VuZCIsInByaW1hcnkiLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJzaGFkb3dfbW91c2VfcG9zX3giLCJzaGFkb3dfbW91c2VfcG9zX3kiLCJjb21wb25lbnQiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwidGV4dERlY29yYXRpb24iLCJ3aGl0ZVNwYWNlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs2QkFTVjtBQUFBLG1CQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLE9BRFQsVUFDU0EsT0FEVDs7QUFFUCxVQUFNQyxPQUFPRixPQUFPRSxJQUFQLENBQVlDLEtBQXpCOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0MsU0FBaEI7QUFDRTtBQUNFLGlCQUFPRixLQUFLRyxLQURkO0FBRUUsdUJBQWFILEtBQUtJLFdBRnBCO0FBR0Usb0JBQVVKLEtBQUtLO0FBSGpCLFVBREY7QUFNRSxxRUFORjtBQU9FLHdEQUFNLE9BQU9OLE9BQWIsRUFBc0IsT0FBT08sWUFBN0IsR0FQRjtBQVFFO0FBQ0Usc0JBQVcsV0FEYjtBQUVFLHNCQUFXLGlCQUZiO0FBR0UscUJBQVUsR0FIWjtBQUlFLGlCQUFPQztBQUpULFVBUkY7QUFjRTtBQUFBO0FBQUEsWUFBVyxPQUFPQyxTQUFsQjtBQUFBO0FBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSO0FBQUE7QUFTRTtBQUFBO0FBQUEsY0FBTSxjQUFOLEVBQWUsTUFBSyxTQUFwQjtBQUE4QjtBQUFBO0FBQUEsZ0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQTlCLFdBVEY7QUFBQTtBQVdFO0FBQUE7QUFBQSxjQUFNLGNBQU4sRUFBZSxNQUFLLFVBQXBCO0FBQStCO0FBQUE7QUFBQSxnQkFBRyxzQkFBSDtBQUFBO0FBQUE7QUFBL0IsV0FYRjtBQUFBO0FBQUE7QUFkRixPQURGO0FBOEJEOzs7c0NBekN5QjtBQUN4QixhQUFPO0FBQ0xULGtDQURLO0FBRUxEO0FBRkssT0FBUDtBQUlEOzs7RUFQZ0MsZ0JBQU1XLFM7O2tCQUFwQmIsSzs7O0FBOENyQixJQUFNWSxZQUFZLGNBQUk7QUFDcEJFLFNBQU8sT0FEYTtBQUVwQkMsWUFBVSxVQUZVO0FBR3BCQyxTQUFPLEtBSGE7QUFJcEJDLFlBQVUsT0FKVTtBQUtwQkMsY0FBWSxPQUxRO0FBTXBCQyxpQkFBZSxRQU5LO0FBT3BCQyxhQUFXLFNBUFM7QUFRcEJDLGVBQWEsWUFSTztBQVNwQkMsT0FBSyxtQkFUZTtBQVVwQkMsU0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBVkE7QUFXcEIsK0JBQTZCO0FBQzNCUixjQUFVLEtBRGlCO0FBRTNCSCxXQUFPLE9BRm9CO0FBRzNCUSxTQUFLO0FBSHNCLEdBWFQ7QUFnQnBCLDhCQUE0QjtBQUMxQlIsV0FBTyxPQURtQjtBQUUxQlEsU0FBSyxtQkFGcUI7QUFHMUJOLFdBQU8sSUFIbUI7QUFJMUJVLGtCQUFjO0FBSlksR0FoQlI7QUFzQnBCLDhCQUE0QjtBQUMxQkMsY0FBVSxPQURnQjtBQUUxQmIsV0FBTyxXQUZtQjtBQUcxQlEsU0FBSyxtQkFIcUI7QUFJMUJOLFdBQU8sSUFKbUI7QUFLMUJDLGNBQVU7QUFMZ0I7QUF0QlIsQ0FBSixDQUFsQjs7QUErQkEsSUFBTU4sYUFBYTtBQUNqQmlCLGNBQVksZ0JBQU07QUFDaEJDLFlBQVEsT0FEUTtBQUVoQmYsV0FBTyxvQkFGUztBQUdoQkMsY0FBVSxVQUhNO0FBSWhCTyxTQUFLLEdBSlc7QUFLaEJRLFVBQU0sTUFMVTtBQU1oQkMsZ0JBQVksYUFBTUMsSUFBTixDQUFXekIsS0FOUDtBQU9oQixnQ0FBNEIsRUFBRXVCLE1BQU0sTUFBUixFQUFnQmhCLE9BQU8sb0JBQXZCO0FBUFosR0FBTixDQURLO0FBVWpCbUIsY0FBWSxnQkFBTTtBQUNoQmxCLGNBQVUsVUFETTtBQUVoQkUsY0FBVSxNQUZNO0FBR2hCRCxXQUFPLE9BSFM7QUFJaEJHLG1CQUFlLFNBSkM7QUFLaEJHLFNBQUssS0FMVztBQU1oQkMsV0FBTyxhQUFNQyxNQUFOLENBQWFVLFlBTko7QUFPaEIsaUNBQTZCLEVBQUVqQixVQUFVLE1BQVosRUFBb0JLLEtBQUssS0FBekIsRUFBZ0NOLE9BQU8sS0FBdkMsRUFQYjtBQVFoQixnQ0FBNEIsRUFBRUMsVUFBVSxLQUFaLEVBQW1CSyxLQUFLLEtBQXhCLEVBQStCTixPQUFPLEtBQXRDLEVBUlo7QUFTaEIsZ0NBQTRCLEVBQUVtQixTQUFTLE1BQVg7QUFUWixHQUFOLENBVks7QUFxQmpCQyxjQUFZLGdCQUFNO0FBQ2hCckIsY0FBVSxVQURNO0FBRWhCRSxjQUFVLEtBRk07QUFHaEJELFdBQU8sS0FIUztBQUloQk0sU0FBSyxLQUpXO0FBS2hCSCxtQkFBZSxNQUxDO0FBTWhCLGdDQUE0QixFQUFFRyxLQUFLLEtBQVAsRUFBY0wsVUFBVSxLQUF4QixFQU5aO0FBT2hCLGdDQUE0QixFQUFFSyxLQUFLLEdBQVAsRUFBWU4sT0FBTyxJQUFuQixFQUF5QkcsZUFBZSxHQUF4QztBQVBaLEdBQU4sQ0FyQks7QUE4QmpCa0IsZUFBYSxnQkFBTTtBQUNqQmQsV0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBREg7QUFFakJVLGFBQVMsY0FGUTtBQUdqQmhCLG1CQUFlLE1BSEU7QUFJakIsaUNBQTZCLEVBQUVGLFVBQVUsUUFBWixFQUpaO0FBS2pCLGdDQUE0QixFQUFFRSxlQUFlLE1BQWpCO0FBTFgsR0FBTixDQTlCSTtBQXFDakJtQix5QkFBdUIsYUFBTWQsTUFBTixDQUFhZSxPQXJDbkI7QUFzQ2pCQyxhQUFXO0FBQ1RDLDJCQUF1QixNQURkO0FBRVRDLDJCQUF1QixNQUZkO0FBR1RDLHdCQUFvQixLQUhYO0FBSVRDLHdCQUFvQjtBQUpYO0FBdENNLENBQW5COztBQThDQSxJQUFNbEMsZUFBZTtBQUNuQm1DLGFBQVcsY0FBSTtBQUNiVixhQUFTLGNBREk7QUFFYlcsWUFBUSxXQUZLO0FBR2JDLHFCQUFpQixVQUhKO0FBSWJDLGVBQVcsa0NBSkU7QUFLYkMsbUJBQWUsV0FMRjtBQU1iQyxZQUFRLEdBTks7QUFPYkMsb0JBQWdCLE1BUEg7QUFRYixnQ0FBNEI7QUFDMUJDLGtCQUFZLFFBRGM7QUFFMUJ0QixZQUFNLEtBRm9CO0FBRzFCUixXQUFLLE1BSHFCO0FBSTFCd0IsY0FBUSxHQUprQjtBQUsxQi9CLGdCQUFVO0FBTGdCO0FBUmYsR0FBSixDQURRO0FBaUJuQnNDLFFBQU0sY0FBSTtBQUNSUCxZQUFRLFlBREE7QUFFUjdCLGNBQVUsTUFGRjtBQUdSa0Msb0JBQWdCLE1BSFI7QUFJUjVCLFdBQU8sYUFBTUMsTUFBTixDQUFhQyxLQUpaO0FBS1IsY0FBVSxFQUFFMEIsZ0JBQWdCLGNBQWxCLEVBTEY7QUFNUixnQ0FBNEIsRUFBRWxDLFVBQVUsTUFBWjtBQU5wQixHQUFKO0FBakJhLENBQXJCOztBQTJCQSxJQUFNWCxZQUFZLGNBQUksRUFBRXVCLFFBQVEsT0FBVixFQUFtQmYsT0FBTyxPQUExQixFQUFtQ0MsVUFBVSxVQUE3QyxFQUFKLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IFRleHRUeXBlZCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRUeXBlZCdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb2NpYWxzOiBzb2NpYWxzLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEuaW5kZXhcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3ZlcnRpY2FsTWVudX0gLz5cbiAgICAgICAgPE1vdmluZ1RleHRcbiAgICAgICAgICBiZWZvcmV0ZXh0PVwiSGksIEknbSBcIlxuICAgICAgICAgIG1vdmluZ3RleHQ9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgIGFmdGVydGV4dD1cIi5cIlxuICAgICAgICAgIHN0eWxlPXttb3ZpbmdUZXh0fVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFR5cGVkIHN0eWxlPXt0ZXh0dHlwZWR9PlxuICAgICAgICAgIEnigJltIGEgPHN0cm9uZz5GVUxMIFNUQUNLIERFVkVMT1BFUjwvc3Ryb25nPiBib3JuICYgcmFpc2VkIGluIHRoZVxuICAgICAgICAgIEZyZW5jaCBBbHBzLCBidXQgSeKAmW0gY3VycmVudGx5IHdvcmtpbmcgaW4gTHlvbiAtIEZyYW5jZS4gSeKAmW0gZmx1ZW50XG4gICAgICAgICAgaW4gdGhlIEphdmFzY3JpcHQgU3RhY2sgKCBNZXRlb3IgLyBOb2RlIC8gSHRtbCAvIENzcyAvIFJlYWN0ICkgYW5kXG4gICAgICAgICAgSeKAmXZlIHJlY2VudGx5IHN0YXJ0ZWQgZXhwZXJpbWVudGluZyB3aXRoIFdlYnBhY2ssIFJlZHV4LCBHcmFwaFFMLlxuICAgICAgICAgIEnigJltIGEgdGVjaCBlbnRodXNpYXN0IGNvbnN0YW50bHkgaW1wcm92ZSBteSBza2lsbHMgYW5kIHN0YXlcbiAgICAgICAgICB1cC10by1kYXRlIHdpdGggbmV3IG1ldGhvZHMgYW5kIHRlY2hub2xvZ3kuIFdyaXRpbmcgcmVhZGFibGUsIGVsZWdhbnRcbiAgICAgICAgICBhbmQgY2xlYW4gY29kZSBpcyBhcyBpbXBvcnRhbnQgYXMgbWFraW5nIGEgY2xlYW4gZGVzaWduLlxuICAgICAgICAgIFlvdSBjYW4gdGFrZSBhIGxvb2sgb24mbmJzcDtcbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL3Jlc3VtZVwiPjxhIGNsYXNzTmFtZT17X3RhZ30+bXkgcmVzdW1lPC9hPjwvTGluaz5cbiAgICAgICAgICAmbmJzcDtmb3IgbW9yZSwgYW5kIGRvIG5vdCBoZXNpdGF0ZSB0byZuYnNwO1xuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT17X3RhZ30+Y29udGFjdCBtZTwvYT48L0xpbms+LlxuICAgICAgICA8L1RleHRUeXBlZD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCB0ZXh0dHlwZWQgPSBjc3Moe1xuICB3aWR0aDogJzU5OHB4JyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnMTAlJyxcbiAgZm9udFNpemU6ICcxLjFlbScsXG4gIGxpbmVIZWlnaHQ6ICcxLjVlbScsXG4gIGxldHRlclNwYWNpbmc6ICctMC4zcHgnLFxuICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgdGV4dEp1c3RpZnk6ICdpbnRlci13b3JkJyxcbiAgdG9wOiAnY2FsYygzMCUgKyA3LjJlbSknLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzFlbScsXG4gICAgd2lkdGg6ICc0NjdweCcsXG4gICAgdG9wOiAnY2FsYygzMCUgKyA0ZW0gKyA0ZW0pJ1xuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIHdpZHRoOiAnMzM1cHgnLFxuICAgIHRvcDogJ2NhbGMoMzAlICsgMi4zZW0pJyxcbiAgICByaWdodDogJzklJyxcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4J1xuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNDQwcHgpJzoge1xuICAgIG1pbldpZHRoOiAnMjQwcHgnLFxuICAgIHdpZHRoOiAnY2FsYyg4MCUpJyxcbiAgICB0b3A6ICdjYWxjKDEwJSArIDIuNWVtKScsXG4gICAgcmlnaHQ6ICc1JScsXG4gICAgZm9udFNpemU6ICcwLjhlbSdcbiAgfSxcbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gNTVweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICc1NXB4JyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGxlZnQ6ICczMHB4Jywgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gMzBweCknIH1cbiAgfSksXG4gIGJlZm9yZXRleHQ6IHN0eWxlKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBmb250U2l6ZTogJzE1ZW0nLFxuICAgIHJpZ2h0OiAnMjguNiUnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4wN2VtJyxcbiAgICB0b3A6ICczMCUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYWxtb3N0X3doaXRlLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBmb250U2l6ZTogJzEwZW0nLCB0b3A6ICczNCUnLCByaWdodDogJzQwJScgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzhlbScsIHRvcDogJzIxJScsIHJpZ2h0OiAnMjAlJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA0NDBweCknOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICB9KSxcbiAgZml4ZWR0aXRsZTogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnNmVtJyxcbiAgICByaWdodDogJzEwJScsXG4gICAgdG9wOiAnMzAlJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTZweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgdG9wOiAnMjAlJywgZm9udFNpemU6ICczZW0nIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSc6IHsgdG9wOiAnMCcsIHJpZ2h0OiAnNSUnLCBsZXR0ZXJTcGFjaW5nOiAnMCcgfSxcbiAgfSksXG4gIG1vdmluZ3RpdGxlOiBzdHlsZSh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTZweCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IGZvbnRTaXplOiAnMC44NWVtJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGxldHRlclNwYWNpbmc6ICctM3B4JyB9LFxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTcwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICc4MCcsXG4gIH1cbn1cblxuY29uc3QgdmVydGljYWxNZW51ID0ge1xuICBjb21wb25lbnQ6IGNzcyh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnMjBweCAzMHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSknLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgbGVmdDogJzhweCcsXG4gICAgICB0b3A6ICcxMHB4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9XG4gIH0pLFxuICBsaW5rOiBjc3Moe1xuICAgIG1hcmdpbjogJzAgMTBweCAwIDAnLFxuICAgIGZvbnRTaXplOiAnMTQwJScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgICc6aG92ZXInOiB7IHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnMTAwJScgfVxuICB9KVxufVxuXG5jb25zdCBjb250YWluZXIgPSBjc3MoeyBoZWlnaHQ6ICcxMDB2aCcsIHdpZHRoOiAnMTAwdncnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9KVxuIl19