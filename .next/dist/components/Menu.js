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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.renderLinks = function (links, style) {
      return links.map(function (link, i) {
        if (link.type === 'email') {
          return _react2.default.createElement(
            'a',
            { key: i, className: style.link, href: link.url },
            link.name
          );
        } else {
          return _react2.default.createElement(
            _link2.default,
            { key: i, href: link.url },
            _react2.default.createElement(
              'a',
              { className: style.link, target: '_blank' },
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
        { className: style.component },
        this.renderLinks(links, style)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJNZW51IiwicmVuZGVyTGlua3MiLCJsaW5rcyIsInN0eWxlIiwibWFwIiwibGluayIsImkiLCJ0eXBlIiwidXJsIiwibmFtZSIsInByb3BzIiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7Ozt3TUFPbkJDLFcsR0FBYyxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDOUIsYUFBT0QsTUFBTUUsR0FBTixDQUFXLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzdCLFlBQUlELEtBQUtFLElBQUwsS0FBYyxPQUFsQixFQUEyQjtBQUN6QixpQkFBTztBQUFBO0FBQUEsY0FBRyxLQUFLRCxDQUFSLEVBQVcsV0FBV0gsTUFBTUUsSUFBNUIsRUFBa0MsTUFBT0EsS0FBS0csR0FBOUM7QUFBc0RILGlCQUFLSTtBQUEzRCxXQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQ0U7QUFBQTtBQUFBLGNBQU0sS0FBS0gsQ0FBWCxFQUFjLE1BQU9ELEtBQUtHLEdBQTFCO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLFdBQVdMLE1BQU1FLElBQXBCLEVBQTBCLFFBQU8sUUFBakM7QUFBNENBLG1CQUFLSTtBQUFqRDtBQURGLFdBREY7QUFLRDtBQUNGLE9BVk0sQ0FBUDtBQVdELEs7Ozs7OzZCQUVRO0FBQUEsbUJBQ2tCLEtBQUtDLEtBRHZCO0FBQUEsVUFDQ1IsS0FERCxVQUNDQSxLQUREO0FBQUEsVUFDUUMsS0FEUixVQUNRQSxLQURSOzs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdBLE1BQU1RLFNBQXRCO0FBQ0csYUFBS1YsV0FBTCxDQUFpQkMsS0FBakIsRUFBd0JDLEtBQXhCO0FBREgsT0FERjtBQUtEOzs7RUE3QitCLGdCQUFNUyxTOztBQUFuQlosSSxDQUVaYSxTLEdBQVk7QUFDakJYLFNBQU8saUJBQVVZLEtBQVYsQ0FBZ0JDLFVBRE47QUFFakJaLFNBQU8saUJBQVVhO0FBRkEsQztrQkFGQWhCLEkiLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgcmVuZGVyTGlua3MgPSAobGlua3MsIHN0eWxlKSA9PiB7XG4gICAgcmV0dXJuIGxpbmtzLm1hcCggKGxpbmssIGkpID0+IHtcbiAgICAgIGlmIChsaW5rLnR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgICAgcmV0dXJuIDxhIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPXsgbGluay51cmwgfT57IGxpbmsubmFtZSB9PC9hPlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9eyBsaW5rLnVybCB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57IGxpbmsubmFtZSB9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsaW5rcywgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29tcG9uZW50fT5cbiAgICAgICAge3RoaXMucmVuZGVyTGlua3MobGlua3MsIHN0eWxlKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19