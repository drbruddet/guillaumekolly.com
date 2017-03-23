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
    color: '#2b2b2b',
    fontSize: '1000%',
    '@media(max-width: 640px)': {
      fontSize: '300%'
    }
  }),
  movingtitlebackground: 'rgba(99, 231, 175, 0.8)',
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
  color: '#242424'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImNlbnRlcmVkYm94IiwiY2VudGVyZWR2ZXJ0IiwiZXJyb3J0ZXh0IiwicmVuZGVyRXJyb3IiLCJtb3ZpbmdUZXh0IiwibGluayIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibW92aW5ndGl0bGUiLCJjb2xvciIsImZvbnRTaXplIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwicGFkZGluZyIsIm1hcmdpbiIsImVycm9ybnVtYmVyIiwidGV4dERlY29yYXRpb24iLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7a0NBU0w7QUFDWixhQUFPLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxxQ0FFSCwrQkFGSjtBQUdEOzs7NkJBRVM7QUFDUixVQUFNQywrQkFBNkIsS0FBS0YsS0FBTCxDQUFXQyxVQUF4QyxvQkFBTjtBQUNBLFVBQU1FLHNCQUFzQkMsT0FBTyxLQUFLSixLQUFMLENBQVdDLFVBQWxCLENBQTVCOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0ksV0FBaEI7QUFDRTtBQUNFLGlCQUFPSCxLQURUO0FBRUUsdUJBQVk7QUFGZCxVQURGO0FBS0UscUVBTEY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFXSSxZQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFJLFdBQVdDLFNBQWY7QUFBQTtBQUVHLGlCQUFLQyxXQUFMO0FBRkgsV0FERjtBQUtFO0FBQ0Usd0JBQVlMLG1CQURkO0FBRUUsbUJBQU9NLFVBRlQsR0FMRjtBQVFFO0FBQUE7QUFBQSxjQUFNLE1BQUssR0FBWDtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFXQyxJQUFkO0FBQUE7QUFBQTtBQURGO0FBUkY7QUFORixPQURGO0FBcUJEOzs7MENBdEM2QztBQUFBLFVBQXBCQyxHQUFvQixRQUFwQkEsR0FBb0I7QUFBQSxVQUFmQyxXQUFlLFFBQWZBLFdBQWU7O0FBQzVDLFVBQU1YLGFBQWFVLE1BQ2ZBLElBQUlWLFVBRFcsR0FFZFcsY0FBY0EsWUFBWUMsTUFBMUIsR0FBbUMsSUFGeEM7QUFHQSxhQUFPLEVBQUVaLHNCQUFGLEVBQVA7QUFDRDs7O0VBUGdDLGdCQUFNYSxTOztrQkFBcEJmLEs7OztBQTJDckIsSUFBTVUsYUFBYTtBQUNqQk0sY0FBWSxtQkFBTTtBQUNoQkMsWUFBUSxNQURRO0FBRWhCQyxXQUFPO0FBRlMsR0FBTixDQURLO0FBS2pCQyxlQUFhLG1CQUFNO0FBQ2pCQyxXQUFPLFNBRFU7QUFFakJDLGNBQVUsT0FGTztBQUdqQixnQ0FBNEI7QUFDMUJBLGdCQUFVO0FBRGdCO0FBSFgsR0FBTixDQUxJO0FBWWpCQyx5QkFBdUIseUJBWk47QUFhakJDLGFBQVc7QUFDVEMsMkJBQXVCLE1BRGQ7QUFFVEMsMkJBQXVCLE1BRmQ7QUFHVEMsd0JBQW9CLEtBSFg7QUFJVEMsd0JBQW9CO0FBSlg7QUFiTSxDQUFuQjs7QUFxQkEsSUFBTW5CLFlBQVksbUJBQUk7QUFDcEJhLFlBQVUsTUFEVTtBQUVwQk8sV0FBUyxHQUZXO0FBR3BCQyxVQUFRLEdBSFk7QUFJcEIsOEJBQTRCO0FBQzFCUixjQUFVO0FBRGdCO0FBSlIsQ0FBSixDQUFsQjs7QUFTQSxJQUFNUyxjQUFjLG1CQUFJO0FBQ3RCVCxZQUFVLE9BRFk7QUFFdEJPLFdBQVMsR0FGYTtBQUd0QkMsVUFBUSxHQUhjO0FBSXRCLDhCQUE0QjtBQUMxQlIsY0FBVSxNQURnQjtBQUUxQk8sYUFBUyxXQUZpQjtBQUcxQkMsWUFBUTtBQUhrQjtBQUpOLENBQUosQ0FBcEI7O0FBV0EsSUFBTWxCLE9BQU8sbUJBQUk7QUFDZlMsU0FBTyxTQURRO0FBRWZXLGtCQUFnQixNQUZEO0FBR2ZDLFVBQVEsbUJBSE87QUFJZkosV0FBUztBQUpNLENBQUosQ0FBYjs7QUFPQSxJQUFNdEIsY0FBYyxtQkFBSTtBQUN0QjJCLFdBQVMsTUFEYTtBQUV0QkMsY0FBWSxRQUZVO0FBR3RCQyxrQkFBZ0IsUUFITTtBQUl0QmpCLFNBQU8sT0FKZTtBQUt0QkQsVUFBUTtBQUxjLENBQUosQ0FBcEI7O0FBUUEsSUFBTVYsZUFBZSxtQkFBSTtBQUN2QnFCLFdBQVMsS0FEYztBQUV2QlEsWUFBVSxLQUZhO0FBR3ZCQyxhQUFXLFFBSFk7QUFJdkJDLFVBQVEsR0FKZTtBQUt2QnRCLGNBQVksYUFMVztBQU12QkksU0FBTztBQU5nQixDQUFKLENBQXJCIiwiZmlsZSI6Il9lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICdnbGFtb3InXG5cbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXMsIGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzXG4gICAgICA/IHJlcy5zdGF0dXNDb2RlXG4gICAgICA6IChqc29uUGFnZVJlcyA/IGpzb25QYWdlUmVzLnN0YXR1cyA6IG51bGwpXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG4gIH1cblxuICByZW5kZXJFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zdGF0dXNDb2RlXG4gICAgICA/IGAgQW4gZXJyb3Igb2NjdXJyZWQgb24gc2VydmVyLmBcbiAgICAgIDogJyBBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQuJ1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGBHdWlsbGF1bWUga29sbHkgfCAke3RoaXMucHJvcHMuc3RhdHVzQ29kZX0gUGFnZSBub3QgZm91bmRgO1xuICAgIGNvbnN0IG1vdmluZ3RleHRzdHJpbmdpZnkgPSBTdHJpbmcodGhpcy5wcm9wcy5zdGF0dXNDb2RlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWRib3h9PlxuICAgICAgICA8SGVhZEJsb2NcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249XCJHdWlsbGF1bWUgS29sbHkncyBXZWJzaXRlLiBEbyBub3QgaGVzaXRhdGUgdG8gY29udGFjdCBtZS5cIlxuICAgICAgICAvPlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NlbnRlcmVkdmVydH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17ZXJyb3J0ZXh0fT5cbiAgICAgICAgICAgIFRoZSBwYWdlIHlvdXIgbG9va2luZyBmb3IgY2FuJ3QgYmUgZm91bmQuXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJFcnJvcigpfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE1vdmluZ1RleHRcbiAgICAgICAgICAgIG1vdmluZ3RleHQ9e21vdmluZ3RleHRzdHJpbmdpZnl9XG4gICAgICAgICAgICBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rfT5HbyBCYWNrIEhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBiYWNrZ3JvdW5kOiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSksXG4gIG1vdmluZ3RpdGxlOiBzdHlsZSh7XG4gICAgY29sb3I6ICcjMmIyYjJiJyxcbiAgICBmb250U2l6ZTogJzEwMDAlJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICczMDAlJyxcbiAgICB9XG4gIH0pLFxuICBtb3Zpbmd0aXRsZWJhY2tncm91bmQ6ICdyZ2JhKDk5LCAyMzEsIDE3NSwgMC44KScsXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy0yMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnMjAnLFxuICB9LFxufVxuXG5jb25zdCBlcnJvcnRleHQgPSBjc3Moe1xuICBmb250U2l6ZTogJzE0MCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnOTAlJyxcbiAgfVxufSlcblxuY29uc3QgZXJyb3JudW1iZXIgPSBjc3Moe1xuICBmb250U2l6ZTogJzIwMDAlJyxcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzYwMCUnLFxuICAgIHBhZGRpbmc6ICcyMHB4IDEwcHgnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICB9XG59KVxuXG5jb25zdCBsaW5rID0gY3NzKHtcbiAgY29sb3I6ICcjMjQyNDI0JyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgYm9yZGVyOiAnM3B4IHNvbGlkICMyNDI0MjQnLFxuICBwYWRkaW5nOiAnMTBweCcsXG59KVxuXG5jb25zdCBjZW50ZXJlZGJveCA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIGhlaWdodDogJzEwMHZoJyxcbn0pXG5cbmNvbnN0IGNlbnRlcmVkdmVydCA9IGNzcyh7XG4gIHBhZGRpbmc6ICcyZW0nLFxuICBtYXhXaWR0aDogJzUwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHpJbmRleDogJzEnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJyMyNDI0MjQnLFxufSlcbiJdfQ==