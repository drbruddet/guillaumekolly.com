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

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

var _ButtonLink = require('../components/ButtonLink');

var _ButtonLink2 = _interopRequireDefault(_ButtonLink);

var _Theme = require('../components/layout/Theme');

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

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
      var meta = this.props.config.meta.error;
      var title = meta.title + ' ' + this.props.statusCode + ' Page not found';
      var movingtextstringify = String(this.props.statusCode);

      return _react2.default.createElement(
        'div',
        { className: centeredbox },
        _react2.default.createElement(_HeadBloc2.default, { title: title, description: meta.description, keywords: meta.keywords }),
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
          _react2.default.createElement(_MovingText2.default, { movingtext: movingtextstringify, style: movingText }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/', title: 'Home', alt: 'Home Page', style: button }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/resume', title: 'Resume', alt: 'Resume Page', style: button }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/contact', title: 'Contact', alt: 'Contact Page', style: button })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          jsonPageRes = _ref.jsonPageRes;

      var statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
      return {
        statusCode: statusCode,
        config: _config2.default
      };
    }
  }]);
  return Error;
}(_react2.default.Component);

exports.default = Error;


var movingText = {
  background: (0, _css2.default)({
    height: '100%',
    width: '100%'
  }),
  movingtitle: (0, _css2.default)({
    color: _Theme.theme.colors.black,
    fontSize: '1000%',
    '@media(max-width: 640px)': { fontSize: '300%' }
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
  '@media(max-width: 640px)': { fontSize: '90%' }
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

var button = (0, _css2.default)({
  width: '160px',
  border: "4px solid " + _Theme.theme.colors.primary,
  ':hover': {
    backgroundColor: _Theme.theme.colors.primary,
    color: _Theme.theme.colors.white,
    '> a': { color: _Theme.theme.colors.white }
  },
  '> a': {
    color: _Theme.theme.colors.black
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1ldGEiLCJjb25maWciLCJlcnJvciIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImNlbnRlcmVkYm94IiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImNlbnRlcmVkdmVydCIsImVycm9ydGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImJ1dHRvbiIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibW92aW5ndGl0bGUiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiZm9udFNpemUiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJwcmltYXJ5IiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwicGFkZGluZyIsIm1hcmdpbiIsImVycm9ybnVtYmVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwiekluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwid2hpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7OztrQ0FZTDtBQUNaLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxVQUFYLHFDQUVILCtCQUZKO0FBR0Q7Ozs2QkFFUztBQUNSLFVBQU1DLE9BQU8sS0FBS0YsS0FBTCxDQUFXRyxNQUFYLENBQWtCRCxJQUFsQixDQUF1QkUsS0FBcEM7QUFDQSxVQUFN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QUZuQjtBQUdqQixZQUFVO0FBQ1JnQixxQkFBaUIsYUFBTXBCLE1BQU4sQ0FBYUksT0FEdEI7QUFFUkwsV0FBTyxhQUFNQyxNQUFOLENBQWFxQixLQUZaO0FBR1IsV0FBTyxFQUFFdEIsT0FBTyxhQUFNQyxNQUFOLENBQWFxQixLQUF0QjtBQUhDLEdBSE87QUFRakIsU0FBTztBQUNMdEIsV0FBTyxhQUFNQyxNQUFOLENBQWFDO0FBRGY7QUFSVSxDQUFKLENBQWYiLCJmaWxlIjoiX2Vycm9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25MaW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVzLCBqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc1xuICAgICAgPyByZXMuc3RhdHVzQ29kZVxuICAgICAgOiAoanNvblBhZ2VSZXMgPyBqc29uUGFnZVJlcy5zdGF0dXMgOiBudWxsKVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXJFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zdGF0dXNDb2RlXG4gICAgICA/IGAgQW4gZXJyb3Igb2NjdXJyZWQgb24gc2VydmVyLmBcbiAgICAgIDogJyBBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQuJ1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBtZXRhID0gdGhpcy5wcm9wcy5jb25maWcubWV0YS5lcnJvclxuICAgIGNvbnN0IHRpdGxlID0gYCR7bWV0YS50aXRsZX0gJHt0aGlzLnByb3BzLnN0YXR1c0NvZGV9IFBhZ2Ugbm90IGZvdW5kYFxuICAgIGNvbnN0IG1vdmluZ3RleHRzdHJpbmdpZnkgPSBTdHJpbmcodGhpcy5wcm9wcy5zdGF0dXNDb2RlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjZW50ZXJlZGJveH0+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufSBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjZW50ZXJlZHZlcnR9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Vycm9ydGV4dH0+XG4gICAgICAgICAgICBUaGUgcGFnZSB5b3VyIGxvb2tpbmcgZm9yIGNhbid0IGJlIGZvdW5kLlxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXJyb3IoKX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxNb3ZpbmdUZXh0IG1vdmluZ3RleHQ9e21vdmluZ3RleHRzdHJpbmdpZnl9IHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9cIiB0aXRsZT1cIkhvbWVcIiBhbHQ9XCJIb21lIFBhZ2VcIiBzdHlsZT17YnV0dG9ufSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9yZXN1bWVcIiB0aXRsZT1cIlJlc3VtZVwiIGFsdD1cIlJlc3VtZSBQYWdlXCIgc3R5bGU9e2J1dHRvbn0gLz5cbiAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvY29udGFjdFwiIHRpdGxlPVwiQ29udGFjdFwiIGFsdD1cIkNvbnRhY3QgUGFnZVwiIHN0eWxlPXtidXR0b259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IGNzcyh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSksXG4gIG1vdmluZ3RpdGxlOiBjc3Moe1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgZm9udFNpemU6ICcxMDAwJScsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICczMDAlJyB9XG4gIH0pLFxuICBtb3Zpbmd0aXRsZWJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICBhbmltYXRpb246IHtcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3g6ICctMTAwJyxcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3k6ICctMTAwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3g6ICctMjAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeTogJzIwJyxcbiAgfSxcbn1cblxuY29uc3QgZXJyb3J0ZXh0ID0gY3NzKHtcbiAgZm9udFNpemU6ICcxNDAlJyxcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICc5MCUnIH1cbn0pXG5cbmNvbnN0IGVycm9ybnVtYmVyID0gY3NzKHtcbiAgZm9udFNpemU6ICcyMDAwJScsXG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgZm9udFNpemU6ICc2MDAlJyxcbiAgICBwYWRkaW5nOiAnMjBweCAxMHB4JyxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgfVxufSlcblxuY29uc3QgY2VudGVyZWRib3ggPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG59KVxuXG5jb25zdCBjZW50ZXJlZHZlcnQgPSBjc3Moe1xuICBwYWRkaW5nOiAnMmVtJyxcbiAgbWF4V2lkdGg6ICc1MCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbn0pXG5cbmNvbnN0IGJ1dHRvbiA9IGNzcyh7XG4gIHdpZHRoOiAnMTYwcHgnLFxuICBib3JkZXI6IFwiNHB4IHNvbGlkIFwiICsgdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICc+IGEnOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUgfVxuICB9LFxuICAnPiBhJzoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gIH1cbn0pXG4iXX0=