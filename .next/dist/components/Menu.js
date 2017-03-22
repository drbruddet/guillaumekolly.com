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
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.style },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJNZW51IiwicHJvcHMiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJpIiwidHlwZSIsImEiLCJ1cmwiLCJuYW1lIiwic3R5bGUiLCJyZW5kZXJMaW5rcyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm1hcmdpbiIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7a0NBTUw7QUFDWixhQUFPLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDeEMsWUFBSUQsS0FBS0UsSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCLGlCQUFPO0FBQUE7QUFBQSxjQUFHLEtBQUtELENBQVIsRUFBVyxXQUFXRSxDQUF0QixFQUF5QixNQUFPSCxLQUFLSSxHQUFyQztBQUE2Q0osaUJBQUtLO0FBQWxELFdBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFDRTtBQUFBO0FBQUEsY0FBTSxLQUFLSixDQUFYLEVBQWMsTUFBT0QsS0FBS0ksR0FBMUI7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsV0FBV0QsQ0FBZCxFQUFpQixRQUFPLFFBQXhCO0FBQW1DSCxtQkFBS0s7QUFBeEM7QUFERixXQURGO0FBS0Q7QUFDRixPQVZNLENBQVA7QUFXRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLEtBQUtSLEtBQUwsQ0FBV1MsS0FBM0I7QUFDRyxhQUFLQyxXQUFMO0FBREgsT0FERjtBQUtEOzs7RUExQitCLGdCQUFNQyxTOztBQUFuQlosSSxDQUVaYSxTLEdBQVk7QUFDakJYLFNBQU8saUJBQVVZLEtBQVYsQ0FBZ0JDO0FBRE4sQztrQkFGQWYsSTs7O0FBNkJyQixJQUFNTyxJQUFJLG1CQUFJO0FBQ1pTLFVBQVEsWUFESTtBQUVaQyxrQkFBZ0IsTUFGSjtBQUdaQyxTQUFPLE1BSEs7QUFJWixZQUFVO0FBQ1JELG9CQUFnQjtBQURSO0FBSkUsQ0FBSixDQUFWIiwiZmlsZSI6Ik1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsaW5rczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlckxpbmtzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmxpbmtzLm1hcCggKGxpbmssIGkpID0+IHtcbiAgICAgIGlmIChsaW5rLnR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgICAgcmV0dXJuIDxhIGtleT17aX0gY2xhc3NOYW1lPXthfSBocmVmPXsgbGluay51cmwgfT57IGxpbmsubmFtZSB9PC9hPlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9eyBsaW5rLnVybCB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXthfSB0YXJnZXQ9XCJfYmxhbmtcIj57IGxpbmsubmFtZSB9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAge3RoaXMucmVuZGVyTGlua3MoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBhID0gY3NzKHtcbiAgbWFyZ2luOiAnMCAxMHB4IDAgMCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGNvbG9yOiAnIzAwMCcsXG4gICc6aG92ZXInOiB7XG4gICAgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnLFxuICB9XG59KVxuIl19