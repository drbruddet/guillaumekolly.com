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
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.renderLinks = function (links) {
      return links.map(function (link, i) {
        if (link.type === 'email') {
          return _react2.default.createElement(
            'a',
            { key: i, className: a, href: link.url },
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          links = _props.links,
          style = _props.style;


      return _react2.default.createElement(
        'div',
        { className: style },
        this.renderLinks(links)
      );
    }
  }]);
  return Menu;
}(_react2.default.Component);

Menu.propTypes = {
  links: _react.PropTypes.array.isRequired,
  style: _react.PropTypes.object
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJNZW51IiwicmVuZGVyTGlua3MiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidHlwZSIsImEiLCJ1cmwiLCJuYW1lIiwicHJvcHMiLCJzdHlsZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsIm1hcmdpbiIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3dNQU9uQkMsVyxHQUFjLFVBQUNDLEtBQUQsRUFBVztBQUN2QixhQUFPQSxNQUFNQyxHQUFOLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDN0IsWUFBSUQsS0FBS0UsSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCLGlCQUFPO0FBQUE7QUFBQSxjQUFHLEtBQUtELENBQVIsRUFBVyxXQUFXRSxDQUF0QixFQUF5QixNQUFPSCxLQUFLSSxHQUFyQztBQUE2Q0osaUJBQUtLO0FBQWxELFdBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFDRTtBQUFBO0FBQUEsY0FBTSxLQUFLSixDQUFYLEVBQWMsTUFBT0QsS0FBS0ksR0FBMUI7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsV0FBV0QsQ0FBZCxFQUFpQixRQUFPLFFBQXhCO0FBQW1DSCxtQkFBS0s7QUFBeEM7QUFERixXQURGO0FBS0Q7QUFDRixPQVZNLENBQVA7QUFXRCxLOzs7Ozs2QkFFUTtBQUFBLG1CQUNrQixLQUFLQyxLQUR2QjtBQUFBLFVBQ0NSLEtBREQsVUFDQ0EsS0FERDtBQUFBLFVBQ1FTLEtBRFIsVUFDUUEsS0FEUjs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXQSxLQUFoQjtBQUNHLGFBQUtWLFdBQUwsQ0FBaUJDLEtBQWpCO0FBREgsT0FERjtBQUtEOzs7RUE3QitCLGdCQUFNVSxTOztBQUFuQlosSSxDQUVaYSxTLEdBQVk7QUFDakJYLFNBQU8saUJBQVVZLEtBQVYsQ0FBZ0JDLFVBRE47QUFFakJKLFNBQU8saUJBQVVLO0FBRkEsQztrQkFGQWhCLEk7OztBQWdDckIsSUFBTU8sSUFBSSxtQkFBSTtBQUNaVSxVQUFRLFlBREk7QUFFWkMsa0JBQWdCLE1BRko7QUFHWkMsU0FBTyxNQUhLO0FBSVosWUFBVTtBQUNSRCxvQkFBZ0I7QUFEUjtBQUpFLENBQUosQ0FBViIsImZpbGUiOiJNZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICByZW5kZXJMaW5rcyA9IChsaW5rcykgPT4ge1xuICAgIHJldHVybiBsaW5rcy5tYXAoIChsaW5rLCBpKSA9PiB7XG4gICAgICBpZiAobGluay50eXBlID09PSAnZW1haWwnKSB7XG4gICAgICAgIHJldHVybiA8YSBrZXk9e2l9IGNsYXNzTmFtZT17YX0gaHJlZj17IGxpbmsudXJsIH0+eyBsaW5rLm5hbWUgfTwvYT5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXsgbGluay51cmwgfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YX0gdGFyZ2V0PVwiX2JsYW5rXCI+eyBsaW5rLm5hbWUgfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlua3MsIHN0eWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfT5cbiAgICAgICAge3RoaXMucmVuZGVyTGlua3MobGlua3MpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGEgPSBjc3Moe1xuICBtYXJnaW46ICcwIDEwcHggMCAwJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgY29sb3I6ICcjMDAwJyxcbiAgJzpob3Zlcic6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcsXG4gIH1cbn0pXG4iXX0=