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
        return _react2.default.createElement(
          _link2.default,
          { key: i, href: link.url },
          _react2.default.createElement(
            'a',
            { target: '_blank' },
            link.name
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJNZW51IiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidXJsIiwibmFtZSIsInJlbmRlckxpbmtzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7OztrQ0FNTDtBQUNaLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFzQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxlQUMzQjtBQUFBO0FBQUEsWUFBTSxLQUFLQSxDQUFYLEVBQWMsTUFBT0QsS0FBS0UsR0FBMUI7QUFDRTtBQUFBO0FBQUEsY0FBRyxRQUFPLFFBQVY7QUFBcUJGLGlCQUFLRztBQUExQjtBQURGLFNBRDJCO0FBQUEsT0FBdEIsQ0FBUDtBQUtEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNHLGFBQUtDLFdBQUw7QUFESCxPQURGO0FBS0Q7OztFQXBCK0IsZ0JBQU1DLFM7O0FBQW5CVCxJLENBRVpVLFMsR0FBWTtBQUNqQlIsU0FBTyxpQkFBVVMsS0FBVixDQUFnQkM7QUFETixDO2tCQUZBWixJIiwiZmlsZSI6Ik1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyTGlua3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubGlua3MubWFwKCAobGluaywgaSkgPT4gKFxuICAgICAgPExpbmsga2V5PXtpfSBocmVmPXsgbGluay51cmwgfT5cbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+eyBsaW5rLm5hbWUgfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJMaW5rcygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=