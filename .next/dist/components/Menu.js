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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_React$Component) {
  (0, _inherits3.default)(Menu, _React$Component);

  function Menu() {
    (0, _classCallCheck3.default)(this, Menu);
    return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
  }

  (0, _createClass3.default)(Menu, [{
    key: 'renderLinks',
    value: function renderLinks() {
      return this.props.links.map(function (link, i) {
        if (link.type === 'email') {
          return _react2.default.createElement(
            'a',
            { className: a, href: link.url },
            link.name
          );
        } else {
          return _react2.default.createElement(
            _link2.default,
            { key: i, href: link.url },
            _react2.default.createElement(
              'a',
              { className: a, target: '_blank' },
              link.name
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        this.props,
        this.renderLinks()
      );
    }
  }]);
  return Menu;
}(_react2.default.Component);

Menu.propTypes = {
  links: _react.PropTypes.array.isRequired
};
exports.default = Menu;


var a = (0, _css2.default)({
  margin: '0 10px 0 0',
  textDecoration: 'none',
  color: '#000',
  ':hover': {
    textDecoration: 'line-through'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJNZW51IiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidHlwZSIsImEiLCJ1cmwiLCJuYW1lIiwicmVuZGVyTGlua3MiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJtYXJnaW4iLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7O2tDQU1MO0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3hDLFlBQUlELEtBQUtFLElBQUwsS0FBYyxPQUFsQixFQUEyQjtBQUN6QixpQkFBTztBQUFBO0FBQUEsY0FBRyxXQUFXQyxDQUFkLEVBQWlCLE1BQU9ILEtBQUtJLEdBQTdCO0FBQXFDSixpQkFBS0s7QUFBMUMsV0FBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUNFO0FBQUE7QUFBQSxjQUFNLEtBQUtKLENBQVgsRUFBYyxNQUFPRCxLQUFLSSxHQUExQjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFXRCxDQUFkLEVBQWlCLFFBQU8sUUFBeEI7QUFBbUNILG1CQUFLSztBQUF4QztBQURGLFdBREY7QUFLRDtBQUNGLE9BVk0sQ0FBUDtBQVdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBUyxhQUFLUixLQUFkO0FBQ0csYUFBS1MsV0FBTDtBQURILE9BREY7QUFLRDs7O0VBMUIrQixnQkFBTUMsUzs7QUFBbkJYLEksQ0FFWlksUyxHQUFZO0FBQ2pCVixTQUFPLGlCQUFVVyxLQUFWLENBQWdCQztBQUROLEM7a0JBRkFkLEk7OztBQTZCckIsSUFBTU8sSUFBSSxtQkFBSTtBQUNaUSxVQUFRLFlBREk7QUFFWkMsa0JBQWdCLE1BRko7QUFHWkMsU0FBTyxNQUhLO0FBSVosWUFBVTtBQUNSRCxvQkFBZ0I7QUFEUjtBQUpFLENBQUosQ0FBViIsImZpbGUiOiJNZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXJMaW5rcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5saW5rcy5tYXAoIChsaW5rLCBpKSA9PiB7XG4gICAgICBpZiAobGluay50eXBlID09PSAnZW1haWwnKSB7XG4gICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9e2F9IGhyZWY9eyBsaW5rLnVybCB9PnsgbGluay5uYW1lIH08L2E+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17IGxpbmsudXJsIH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2F9IHRhcmdldD1cIl9ibGFua1wiPnsgbGluay5uYW1lIH08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpbmtzKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYSA9IGNzcyh7XG4gIG1hcmdpbjogJzAgMTBweCAwIDAnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBjb2xvcjogJyMwMDAnLFxuICAnOmhvdmVyJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyxcbiAgfVxufSlcbiJdfQ==