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

var _css2 = _interopRequireDefault(_css);

var _glamor = require('glamor');

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

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

var _socials = require('../data/socials');

var _socials2 = _interopRequireDefault(_socials);

var _Theme = require('../components/layout/Theme');

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
      var socials = this.props.socials;


      return _react2.default.createElement(
        'div',
        { className: container },
        _react2.default.createElement(_HeadBloc2.default, {
          title: 'Guillaume Kolly',
          description: 'Guillaume Kolly | Full stack developer living in Lyon.'
        }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
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
            'Full Stack Developer'
          ),
          ' born & raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. You can discover ',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/resume' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'my resume here'
            )
          ),
          '. Do not hezitate to ',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/contact' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'contact me'
            )
          ),
          '. ',
          _react2.default.createElement('br', null),
          'PS: This website is made with NextJS / ReactJS / Glamor.'
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return { socials: _socials2.default };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var texttyped = (0, _css2.default)({
  width: '702px',
  position: 'absolute',
  right: '10%',
  fontSize: '18px',
  lineHeight: '1.7',
  textAlign: 'justify',
  textJustify: 'inter-word',
  top: 'calc(30% + 4em + 3em)'
});

var movingText = {
  background: (0, _glamor.style)({
    height: '100vh',
    width: 'calc(100vw - 50px)',
    position: 'absolute',
    top: '0',
    left: '50px'
  }),
  fixedtitle: (0, _glamor.style)({
    position: 'absolute',
    fontSize: '4em',
    right: '10%',
    top: '30%'
  }),
  movingtitle: (0, _glamor.style)({
    color: _Theme.theme.colors.text
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-70',
    shadow_mouse_pos_y: '80'
  }
};

var social = {
  component: (0, _glamor.style)({
    display: 'inline-block',
    margin: '15px 20px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none'
  }),
  link: (0, _glamor.style)({
    margin: '0 10px 0 0',
    textDecoration: 'none',
    color: _Theme.theme.colors.black,
    ':hover': {
      textDecoration: 'line-through'
    }
  })
};

var container = (0, _css2.default)({
  height: '100vh',
  width: '100vw',
  position: 'relative'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0SnVzdGlmeSIsInRvcCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJsZWZ0IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwiY29sb3IiLCJjb2xvcnMiLCJ0ZXh0IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSIsImNvbXBvbmVudCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwidGV4dERlY29yYXRpb24iLCJsaW5rIiwiYmxhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OzZCQVFXO0FBQUEsVUFDQ0EsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7OztBQUdQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0UsU0FBaEI7QUFDRTtBQUNFLGlCQUFNLGlCQURSO0FBRUUsdUJBQVk7QUFGZCxVQURGO0FBS0UscUVBTEY7QUFNRSx3REFBTSxPQUFPRixPQUFiLEVBQXNCLE9BQU9HLE1BQTdCLEdBTkY7QUFPRSw4REFBWSxZQUFXLFdBQXZCO0FBQ1ksc0JBQVcsaUJBRHZCO0FBRVkscUJBQVUsR0FGdEI7QUFHWSxpQkFBT0MsVUFIbkIsR0FQRjtBQVdFO0FBQUE7QUFBQSxZQUFXLE9BQU9DLFNBQWxCO0FBQUE7QUFDUTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFI7QUFBQTtBQUttQjtBQUFBO0FBQUEsY0FBTSxjQUFOLEVBQWUsTUFBSyxTQUFwQjtBQUE4QjtBQUFBO0FBQUEsZ0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQTlCLFdBTG5CO0FBQUE7QUFNSztBQUFBO0FBQUEsY0FBTSxjQUFOLEVBQWUsTUFBSyxVQUFwQjtBQUErQjtBQUFBO0FBQUEsZ0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQS9CLFdBTkw7QUFBQTtBQU0rRSxtREFOL0U7QUFBQTtBQUFBO0FBWEYsT0FERjtBQXVCRDs7O3NDQTlCeUI7QUFDeEIsYUFBTyxFQUFFTCwwQkFBRixFQUFQO0FBQ0Q7OztFQUowQixnQkFBTU0sUzs7Ozs7QUFtQ25DLElBQU1ELFlBQVksbUJBQUk7QUFDcEJFLFNBQU8sT0FEYTtBQUVwQkMsWUFBVSxVQUZVO0FBR3BCQyxTQUFPLEtBSGE7QUFJcEJDLFlBQVUsTUFKVTtBQUtwQkMsY0FBWSxLQUxRO0FBTXBCQyxhQUFXLFNBTlM7QUFPcEJDLGVBQWEsWUFQTztBQVFwQkMsT0FBSztBQVJlLENBQUosQ0FBbEI7O0FBV0EsSUFBTVYsYUFBYTtBQUNqQlcsY0FBWSxtQkFBTTtBQUNoQkMsWUFBUSxPQURRO0FBRWhCVCxXQUFPLG9CQUZTO0FBR2hCQyxjQUFVLFVBSE07QUFJaEJNLFNBQUssR0FKVztBQUtoQkcsVUFBTTtBQUxVLEdBQU4sQ0FESztBQVFqQkMsY0FBWSxtQkFBTTtBQUNoQlYsY0FBVSxVQURNO0FBRWhCRSxjQUFVLEtBRk07QUFHaEJELFdBQU8sS0FIUztBQUloQkssU0FBSztBQUpXLEdBQU4sQ0FSSztBQWNqQkssZUFBYSxtQkFBTTtBQUNqQkMsV0FBTyxhQUFNQyxNQUFOLENBQWFDO0FBREgsR0FBTixDQWRJO0FBaUJqQkMseUJBQXVCLGFBQU1GLE1BQU4sQ0FBYUcsT0FqQm5CO0FBa0JqQkMsYUFBVztBQUNUQywyQkFBdUIsTUFEZDtBQUVUQywyQkFBdUIsTUFGZDtBQUdUQyx3QkFBb0IsS0FIWDtBQUlUQyx3QkFBb0I7QUFKWDtBQWxCTSxDQUFuQjs7QUEwQkEsSUFBTTFCLFNBQVM7QUFDYjJCLGFBQVcsbUJBQU07QUFDZkMsYUFBUyxjQURNO0FBRWZDLFlBQVEsV0FGTztBQUdmQyxxQkFBaUIsVUFIRjtBQUlmQyxlQUFXLGtDQUpJO0FBS2ZDLG1CQUFlLFdBTEE7QUFNZkMsWUFBUSxHQU5PO0FBT2ZDLG9CQUFnQjtBQVBELEdBQU4sQ0FERTtBQVViQyxRQUFNLG1CQUFNO0FBQ1ZOLFlBQVEsWUFERTtBQUVWSyxvQkFBZ0IsTUFGTjtBQUdWakIsV0FBTyxhQUFNQyxNQUFOLENBQWFrQixLQUhWO0FBSVYsY0FBVTtBQUNSRixzQkFBZ0I7QUFEUjtBQUpBLEdBQU47QUFWTyxDQUFmOztBQW9CQSxJQUFNbkMsWUFBWSxtQkFBSTtBQUNwQmMsVUFBUSxPQURZO0FBRXBCVCxTQUFPLE9BRmE7QUFHcEJDLFlBQVU7QUFIVSxDQUFKLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgVGV4dFR5cGVkIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dFR5cGVkJ1xuXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5pbXBvcnQgeyB0aGVtZSwgX3RhZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb2NpYWxzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPVwiR3VpbGxhdW1lIEtvbGx5XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkd1aWxsYXVtZSBLb2xseSB8IEZ1bGwgc3RhY2sgZGV2ZWxvcGVyIGxpdmluZyBpbiBMeW9uLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgPE1vdmluZ1RleHQgYmVmb3JldGV4dD1cIkhpLCBJJ20gXCJcbiAgICAgICAgICAgICAgICAgICAgbW92aW5ndGV4dD1cIkd1aWxsYXVtZSBLb2xseVwiXG4gICAgICAgICAgICAgICAgICAgIGFmdGVydGV4dD1cIi5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgPFRleHRUeXBlZCBzdHlsZT17dGV4dHR5cGVkfT5cbiAgICAgICAgICBJ4oCZbSBhIDxzdHJvbmc+RnVsbCBTdGFjayBEZXZlbG9wZXI8L3N0cm9uZz4gYm9ybiAmIHJhaXNlZFxuICAgICAgICAgIGluIHRoZSBGcmVuY2ggQWxwcywgYnV0IEnigJltIGN1cnJlbnRseSBsaXZpbmcgaW4gTHlvbiAtIEZyYW5jZS5cbiAgICAgICAgICBJ4oCZbSBmbHVlbnQgaW4gTm9kZSAvIE1ldGVvciAvIEpTIC8gUmVhY3QsIGJ1dCBJ4oCZbSByZWNlbnRseVxuICAgICAgICAgIHN0YXJ0ZWQgZXhwZXJpbWVudGluZyB3aXRoIEdyYXBoUUwsIFJlZHV4IGFuZCBXZWJwYWNrLlxuICAgICAgICAgIFlvdSBjYW4gZGlzY292ZXIgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj48YSBjbGFzc05hbWU9e190YWd9Pm15IHJlc3VtZSBoZXJlPC9hPjwvTGluaz4uIERvIG5vdCBoZXppdGF0ZVxuICAgICAgICAgIHRvIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT17X3RhZ30+Y29udGFjdCBtZTwvYT48L0xpbms+LiA8YnIvPlxuICAgICAgICAgIFBTOiBUaGlzIHdlYnNpdGUgaXMgbWFkZSB3aXRoIE5leHRKUyAvIFJlYWN0SlMgLyBHbGFtb3IuXG4gICAgICAgIDwvVGV4dFR5cGVkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHRleHR0eXBlZCA9IGNzcyh7XG4gIHdpZHRoOiAnNzAycHgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICBmb250U2l6ZTogJzE4cHgnLFxuICBsaW5lSGVpZ2h0OiAnMS43JyxcbiAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gIHRleHRKdXN0aWZ5OiAnaW50ZXItd29yZCcsXG4gIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgM2VtKSdcbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gNTBweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICc1MHB4J1xuICB9KSxcbiAgZml4ZWR0aXRsZTogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnNGVtJyxcbiAgICByaWdodDogJzEwJScsXG4gICAgdG9wOiAnMzAlJ1xuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHRcbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy03MCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnODAnLFxuICB9XG59XG5cbmNvbnN0IHNvY2lhbCA9IHtcbiAgY29tcG9uZW50OiBzdHlsZSh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnMTVweCAyMHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSknLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgfSksXG4gIGxpbms6IHN0eWxlKHtcbiAgICBtYXJnaW46ICcwIDEwcHggMCAwJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJ1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbn0pXG4iXX0=