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
        _react2.default.createElement(_HeadBloc2.default, null),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
        _react2.default.createElement(_MovingText2.default, {
          beforetext: 'Hi, I\'m ',
          movingtext: 'Guillaume Kolly',
          aftertext: '.',
          style: movingText }),
        _react2.default.createElement(
          _TextTyped2.default,
          { style: texttyped },
          'I\u2019m a full stack developer born and raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. I also have skills with Photoshop / Illustrator. Do not hezitate to ',
          _react2.default.createElement(
            _link2.default,
            { href: '#' },
            _react2.default.createElement(
              'a',
              null,
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
  top: 'calc(30% + 4em + 3em)'
});

var movingText = {
  background: (0, _glamor.style)({
    height: '100vh',
    width: 'calc(100vw - 30px)',
    position: 'absolute',
    top: '0',
    left: '30px'
  }),
  fixedtitle: (0, _glamor.style)({
    position: 'absolute',
    fontSize: '4em',
    right: '10%',
    top: '30%'
  }),
  movingtitle: (0, _glamor.style)({
    color: '#2b2b2b'
  }),
  movingtitlebackground: 'rgba(99, 231, 175, 0.9)'
};

var social = {
  component: (0, _glamor.style)({
    display: 'inline-block',
    margin: '5px 10px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none'
  }),
  link: (0, _glamor.style)({
    margin: '0 10px 0 0',
    textDecoration: 'none',
    color: '#000',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0b3AiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwibGVmdCIsImZpeGVkdGl0bGUiLCJtb3Zpbmd0aXRsZSIsImNvbG9yIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiY29tcG9uZW50IiwiZGlzcGxheSIsIm1hcmdpbiIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsInRleHRUcmFuc2Zvcm0iLCJ6SW5kZXgiLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVFXO0FBQUEsVUFDQ0EsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7OztBQUdQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0UsU0FBaEI7QUFDRSwrREFERjtBQUVFLHFFQUZGO0FBR0Usd0RBQU0sT0FBT0YsT0FBYixFQUFzQixPQUFPRyxNQUE3QixHQUhGO0FBSUU7QUFDRSxzQkFBVyxXQURiO0FBRUUsc0JBQVcsaUJBRmI7QUFHRSxxQkFBVSxHQUhaO0FBSUUsaUJBQU9DLFVBSlQsR0FKRjtBQVNFO0FBQUE7QUFBQSxZQUFXLE9BQU9DLFNBQWxCO0FBQUE7QUFNSztBQUFBO0FBQUEsY0FBTSxNQUFLLEdBQVg7QUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWYsV0FOTDtBQUFBO0FBQUE7QUFURixPQURGO0FBb0JEOzs7c0NBM0J5QjtBQUN4QixhQUFPLEVBQUVMLDBCQUFGLEVBQVA7QUFDRDs7O0VBSjBCLGdCQUFNTSxTOzs7OztBQWdDbkMsSUFBTUQsWUFBWSxtQkFBSTtBQUNwQkUsU0FBTyxPQURhO0FBRXBCQyxZQUFVLFVBRlU7QUFHcEJDLFNBQU8sS0FIYTtBQUlwQkMsWUFBVSxNQUpVO0FBS3BCQyxjQUFZLEtBTFE7QUFNcEJDLE9BQUs7QUFOZSxDQUFKLENBQWxCOztBQVNBLElBQU1SLGFBQWE7QUFDakJTLGNBQVksbUJBQU07QUFDaEJDLFlBQVEsT0FEUTtBQUVoQlAsV0FBTyxvQkFGUztBQUdoQkMsY0FBVSxVQUhNO0FBSWhCSSxTQUFLLEdBSlc7QUFLaEJHLFVBQU07QUFMVSxHQUFOLENBREs7QUFRakJDLGNBQVksbUJBQU07QUFDaEJSLGNBQVUsVUFETTtBQUVoQkUsY0FBVSxLQUZNO0FBR2hCRCxXQUFPLEtBSFM7QUFJaEJHLFNBQUs7QUFKVyxHQUFOLENBUks7QUFjakJLLGVBQWEsbUJBQU07QUFDakJDLFdBQU87QUFEVSxHQUFOLENBZEk7QUFpQmpCQyx5QkFBdUI7QUFqQk4sQ0FBbkI7O0FBb0JBLElBQU1oQixTQUFTO0FBQ2JpQixhQUFXLG1CQUFNO0FBQ2ZDLGFBQVMsY0FETTtBQUVmQyxZQUFRLFVBRk87QUFHZkMscUJBQWlCLFVBSEY7QUFJZkMsZUFBVyxrQ0FKSTtBQUtmQyxtQkFBZSxXQUxBO0FBTWZDLFlBQVEsR0FOTztBQU9mQyxvQkFBZ0I7QUFQRCxHQUFOLENBREU7QUFVYkMsUUFBTSxtQkFBTTtBQUNWTixZQUFRLFlBREU7QUFFVkssb0JBQWdCLE1BRk47QUFHVlQsV0FBTyxNQUhHO0FBSVYsY0FBVTtBQUNSUyxzQkFBZ0I7QUFEUjtBQUpBLEdBQU47QUFWTyxDQUFmOztBQW9CQSxJQUFNekIsWUFBWSxtQkFBSTtBQUNwQlksVUFBUSxPQURZO0FBRXBCUCxTQUFPLE9BRmE7QUFHcEJDLFlBQVU7QUFIVSxDQUFKLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgVGV4dFR5cGVkIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dFR5cGVkJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb2NpYWxzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkQmxvYyAvPlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPE1lbnUgbGlua3M9e3NvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gICAgICAgIDxNb3ZpbmdUZXh0XG4gICAgICAgICAgYmVmb3JldGV4dD1cIkhpLCBJJ20gXCJcbiAgICAgICAgICBtb3Zpbmd0ZXh0PVwiR3VpbGxhdW1lIEtvbGx5XCJcbiAgICAgICAgICBhZnRlcnRleHQ9XCIuXCJcbiAgICAgICAgICBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgPFRleHRUeXBlZCBzdHlsZT17dGV4dHR5cGVkfT5cbiAgICAgICAgICBJ4oCZbSBhIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyIGJvcm4gYW5kIHJhaXNlZCBpbiB0aGUgRnJlbmNoIEFscHMsXG4gICAgICAgICAgYnV0IEnigJltIGN1cnJlbnRseSBsaXZpbmcgaW4gTHlvbiAtIEZyYW5jZS4gSeKAmW0gZmx1ZW50IGluXG4gICAgICAgICAgTm9kZSAvIE1ldGVvciAvIEpTIC8gUmVhY3QsIGJ1dCBJ4oCZbSByZWNlbnRseSBzdGFydGVkXG4gICAgICAgICAgZXhwZXJpbWVudGluZyB3aXRoIEdyYXBoUUwsIFJlZHV4IGFuZCBXZWJwYWNrLiBJIGFsc29cbiAgICAgICAgICBoYXZlIHNraWxscyB3aXRoIFBob3Rvc2hvcCAvIElsbHVzdHJhdG9yLiBEbyBub3QgaGV6aXRhdGVcbiAgICAgICAgICB0byA8TGluayBocmVmPVwiI1wiPjxhPmNvbnRhY3QgbWU8L2E+PC9MaW5rPi5cbiAgICAgICAgPC9UZXh0VHlwZWQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgdGV4dHR5cGVkID0gY3NzKHtcbiAgd2lkdGg6ICc3MDJweCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzEwJScsXG4gIGZvbnRTaXplOiAnMThweCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjcnLFxuICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDNlbSknXG59KVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBiYWNrZ3JvdW5kOiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHdpZHRoOiAnY2FsYygxMDB2dyAtIDMwcHgpJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwJyxcbiAgICBsZWZ0OiAnMzBweCcsXG4gIH0pLFxuICBmaXhlZHRpdGxlOiBzdHlsZSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZm9udFNpemU6ICc0ZW0nLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICB0b3A6ICczMCUnLFxuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogJyMyYjJiMmInLFxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiAncmdiYSg5OSwgMjMxLCAxNzUsIDAuOSknXG59XG5cbmNvbnN0IHNvY2lhbCA9IHtcbiAgY29tcG9uZW50OiBzdHlsZSh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnNXB4IDEwcHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnMScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJ1xuICB9KSxcbiAgbGluazogc3R5bGUoe1xuICAgIG1hcmdpbjogJzAgMTBweCAwIDAnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6ICcjMDAwJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnLFxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59KVxuIl19