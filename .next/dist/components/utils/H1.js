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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = function (_React$Component) {
  (0, _inherits3.default)(H1, _React$Component);

  function H1() {
    (0, _classCallCheck3.default)(this, H1);
    return (0, _possibleConstructorReturn3.default)(this, (H1.__proto__ || (0, _getPrototypeOf2.default)(H1)).apply(this, arguments));
  }

  (0, _createClass3.default)(H1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        this.props,
        this.props.title
      );
    }
  }]);
  return H1;
}(_react2.default.Component);

H1.propTypes = {
  title: _react.PropTypes.string.isRequired
};
H1.defaultProps = {
  title: 'Title H1'
};
exports.default = H1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMvSDEuanMiXSwibmFtZXMiOlsiSDEiLCJwcm9wcyIsInRpdGxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxFOzs7Ozs7Ozs7OzZCQVVWO0FBQ1AsYUFDRTtBQUFBO0FBQVEsYUFBS0MsS0FBYjtBQUNHLGFBQUtBLEtBQUwsQ0FBV0M7QUFEZCxPQURGO0FBS0Q7OztFQWhCNkIsZ0JBQU1DLFM7O0FBQWpCSCxFLENBRVpJLFMsR0FBWTtBQUNqQkYsU0FBTyxpQkFBVUcsTUFBVixDQUFpQkM7QUFEUCxDO0FBRkFOLEUsQ0FNWk8sWSxHQUFlO0FBQ3BCTCxTQUFPO0FBRGEsQztrQkFOSEYsRSIsImZpbGUiOiJIMS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEgxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICdUaXRsZSBIMSdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgxIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICA8L2gxPlxuICAgIClcbiAgfVxufVxuIl19