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

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _glamor = require('glamor');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

var _Theme = require('../components/layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'renderError',
    value: function renderError() {
      return this.props.statusCode ? ' An error occurred on server.' : ' An error occurred on client.';
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Guillaume kolly | ' + this.props.statusCode + ' Page not found';
      var movingtextstringify = String(this.props.statusCode);

      return _react2.default.createElement(
        'div',
        { className: centeredbox },
        _react2.default.createElement(_HeadBloc2.default, {
          title: title,
          description: 'Guillaume Kolly\'s Website. Do not hesitate to contact me.'
        }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(
          'div',
          { className: centeredvert },
          _react2.default.createElement(
            'h2',
            { className: errortext },
            'The page your looking for can\'t be found.',
            this.renderError()
          ),
          _react2.default.createElement(_MovingText2.default, {
            movingtext: movingtextstringify,
            style: movingText }),
          _react2.default.createElement(
            _link2.default,
            { href: '/' },
            _react2.default.createElement(
              'a',
              { className: link },
              'Go Back Home'
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          jsonPageRes = _ref.jsonPageRes;

      var statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
      return { statusCode: statusCode };
    }
  }]);
  return Error;
}(_react2.default.Component);

exports.default = Error;


var movingText = {
  background: (0, _glamor.style)({
    height: '100%',
    width: '100%'
  }),
  movingtitle: (0, _glamor.style)({
    color: _Theme.theme.colors.black,
    fontSize: '1000%',
    '@media(max-width: 640px)': {
      fontSize: '300%'
    }
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-20',
    shadow_mouse_pos_y: '20'
  }
};

var errortext = (0, _css2.default)({
  fontSize: '140%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '90%'
  }
});

var errornumber = (0, _css2.default)({
  fontSize: '2000%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '600%',
    padding: '20px 10px',
    margin: 'auto'
  }
});

var link = (0, _css2.default)({
  color: '#242424',
  textDecoration: 'none',
  border: '3px solid #242424',
  padding: '10px'
});

var centeredbox = (0, _css2.default)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
});

var centeredvert = (0, _css2.default)({
  padding: '2em',
  maxWidth: '50%',
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: _Theme.theme.colors.black
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImNlbnRlcmVkYm94IiwiY2VudGVyZWR2ZXJ0IiwiZXJyb3J0ZXh0IiwicmVuZGVyRXJyb3IiLCJtb3ZpbmdUZXh0IiwibGluayIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibW92aW5ndGl0bGUiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiZm9udFNpemUiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJwcmltYXJ5IiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwicGFkZGluZyIsIm1hcmdpbiIsImVycm9ybnVtYmVyIiwidGV4dERlY29yYXRpb24iLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7a0NBU0w7QUFDWixhQUFPLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxxQ0FFSCwrQkFGSjtBQUdEOzs7NkJBRVM7QUFDUixVQUFNQywrQkFBNkIsS0FBS0YsS0FBTCxDQUFXQyxVQUF4QyxvQkFBTjtBQUNBLFVBQU1FLHNCQUFzQkMsT0FBTyxLQUFLSixLQUFMLENBQVdDLFVBQWxCLENBQTVCOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0ksV0FBaEI7QUFDRTtBQUNFLGlCQUFPSCxLQURUO0FBRUUsdUJBQVk7QUFGZCxVQURGO0FBS0UscUVBTEY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFXSSxZQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFJLFdBQVdDLFNBQWY7QUFBQTtBQUVHLGlCQUFLQyxXQUFMO0FBRkgsV0FERjtBQUtFO0FBQ0Usd0JBQVlMLG1CQURkO0FBRUUsbUJBQU9NLFVBRlQsR0FMRjtBQVFFO0FBQUE7QUFBQSxjQUFNLE1BQUssR0FBWDtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFXQyxJQUFkO0FBQUE7QUFBQTtBQURGO0FBUkY7QUFORixPQURGO0FBcUJEOzs7MENBdEM2QztBQUFBLFVBQXBCQyxHQUFvQixRQUFwQkEsR0FBb0I7QUFBQSxVQUFmQyxXQUFlLFFBQWZBLFdBQWU7O0FBQzVDLFVBQU1YLGFBQWFVLE1BQ2ZBLElBQUlWLFVBRFcsR0FFZFcsY0FBY0EsWUFBWUMsTUFBMUIsR0FBbUMsSUFGeEM7QUFHQSxhQUFPLEVBQUVaLHNCQUFGLEVBQVA7QUFDRDs7O0VBUGdDLGdCQUFNYSxTOztrQkFBcEJmLEs7OztBQTJDckIsSUFBTVUsYUFBYTtBQUNqQk0sY0FBWSxtQkFBTTtBQUNoQkMsWUFBUSxNQURRO0FBRWhCQyxXQUFPO0FBRlMsR0FBTixDQURLO0FBS2pCQyxlQUFhLG1CQUFNO0FBQ2pCQyxXQUFPLGFBQU1DLE1BQU4sQ0FBYUMsS0FESDtBQUVqQkMsY0FBVSxPQUZPO0FBR2pCLGdDQUE0QjtBQUMxQkEsZ0JBQVU7QUFEZ0I7QUFIWCxHQUFOLENBTEk7QUFZakJDLHlCQUF1QixhQUFNSCxNQUFOLENBQWFJLE9BWm5CO0FBYWpCQyxhQUFXO0FBQ1RDLDJCQUF1QixNQURkO0FBRVRDLDJCQUF1QixNQUZkO0FBR1RDLHdCQUFvQixLQUhYO0FBSVRDLHdCQUFvQjtBQUpYO0FBYk0sQ0FBbkI7O0FBcUJBLElBQU10QixZQUFZLG1CQUFJO0FBQ3BCZSxZQUFVLE1BRFU7QUFFcEJRLFdBQVMsR0FGVztBQUdwQkMsVUFBUSxHQUhZO0FBSXBCLDhCQUE0QjtBQUMxQlQsY0FBVTtBQURnQjtBQUpSLENBQUosQ0FBbEI7O0FBU0EsSUFBTVUsY0FBYyxtQkFBSTtBQUN0QlYsWUFBVSxPQURZO0FBRXRCUSxXQUFTLEdBRmE7QUFHdEJDLFVBQVEsR0FIYztBQUl0Qiw4QkFBNEI7QUFDMUJULGNBQVUsTUFEZ0I7QUFFMUJRLGFBQVMsV0FGaUI7QUFHMUJDLFlBQVE7QUFIa0I7QUFKTixDQUFKLENBQXBCOztBQVdBLElBQU1yQixPQUFPLG1CQUFJO0FBQ2ZTLFNBQU8sU0FEUTtBQUVmYyxrQkFBZ0IsTUFGRDtBQUdmQyxVQUFRLG1CQUhPO0FBSWZKLFdBQVM7QUFKTSxDQUFKLENBQWI7O0FBT0EsSUFBTXpCLGNBQWMsbUJBQUk7QUFDdEI4QixXQUFTLE1BRGE7QUFFdEJDLGNBQVksUUFGVTtBQUd0QkMsa0JBQWdCLFFBSE07QUFJdEJwQixTQUFPLE9BSmU7QUFLdEJELFVBQVE7QUFMYyxDQUFKLENBQXBCOztBQVFBLElBQU1WLGVBQWUsbUJBQUk7QUFDdkJ3QixXQUFTLEtBRGM7QUFFdkJRLFlBQVUsS0FGYTtBQUd2QkMsYUFBVyxRQUhZO0FBSXZCQyxVQUFRLEdBSmU7QUFLdkJ6QixjQUFZLGFBTFc7QUFNdkJJLFNBQU8sYUFBTUMsTUFBTixDQUFhQztBQU5HLENBQUosQ0FBckIiLCJmaWxlIjoiX2Vycm9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcywganNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNcbiAgICAgID8gcmVzLnN0YXR1c0NvZGVcbiAgICAgIDogKGpzb25QYWdlUmVzID8ganNvblBhZ2VSZXMuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbiAgfVxuXG4gIHJlbmRlckVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXR1c0NvZGVcbiAgICAgID8gYCBBbiBlcnJvciBvY2N1cnJlZCBvbiBzZXJ2ZXIuYFxuICAgICAgOiAnIEFuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudC4nXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHRpdGxlID0gYEd1aWxsYXVtZSBrb2xseSB8ICR7dGhpcy5wcm9wcy5zdGF0dXNDb2RlfSBQYWdlIG5vdCBmb3VuZGA7XG4gICAgY29uc3QgbW92aW5ndGV4dHN0cmluZ2lmeSA9IFN0cmluZyh0aGlzLnByb3BzLnN0YXR1c0NvZGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjZW50ZXJlZGJveH0+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkd1aWxsYXVtZSBLb2xseSdzIFdlYnNpdGUuIERvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IG1lLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWR2ZXJ0fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtlcnJvcnRleHR9PlxuICAgICAgICAgICAgVGhlIHBhZ2UgeW91ciBsb29raW5nIGZvciBjYW4ndCBiZSBmb3VuZC5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckVycm9yKCl9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TW92aW5nVGV4dFxuICAgICAgICAgICAgbW92aW5ndGV4dD17bW92aW5ndGV4dHN0cmluZ2lmeX1cbiAgICAgICAgICAgIHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmt9PkdvIEJhY2sgSG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMTAwMCUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzMwMCUnLFxuICAgIH1cbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy0yMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnMjAnLFxuICB9LFxufVxuXG5jb25zdCBlcnJvcnRleHQgPSBjc3Moe1xuICBmb250U2l6ZTogJzE0MCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnOTAlJyxcbiAgfVxufSlcblxuY29uc3QgZXJyb3JudW1iZXIgPSBjc3Moe1xuICBmb250U2l6ZTogJzIwMDAlJyxcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzYwMCUnLFxuICAgIHBhZGRpbmc6ICcyMHB4IDEwcHgnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICB9XG59KVxuXG5jb25zdCBsaW5rID0gY3NzKHtcbiAgY29sb3I6ICcjMjQyNDI0JyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgYm9yZGVyOiAnM3B4IHNvbGlkICMyNDI0MjQnLFxuICBwYWRkaW5nOiAnMTBweCcsXG59KVxuXG5jb25zdCBjZW50ZXJlZGJveCA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIGhlaWdodDogJzEwMHZoJyxcbn0pXG5cbmNvbnN0IGNlbnRlcmVkdmVydCA9IGNzcyh7XG4gIHBhZGRpbmc6ICcyZW0nLFxuICBtYXhXaWR0aDogJzUwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHpJbmRleDogJzEnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxufSlcbiJdfQ==