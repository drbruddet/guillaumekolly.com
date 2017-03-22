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

var _reactTypist = require('react-typist');

var _reactTypist2 = _interopRequireDefault(_reactTypist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextTyped = function (_React$Component) {
  (0, _inherits3.default)(TextTyped, _React$Component);

  function TextTyped() {
    (0, _classCallCheck3.default)(this, TextTyped);
    return (0, _possibleConstructorReturn3.default)(this, (TextTyped.__proto__ || (0, _getPrototypeOf2.default)(TextTyped)).apply(this, arguments));
  }

  (0, _createClass3.default)(TextTyped, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: style },
        _react2.default.createElement(
          _reactTypist2.default,
          {
            className: 'Typist',
            avgTypingSpeed: 5,
            startDelay: 1000,
            cursor: { hideWhenDone: true } },
          children
        )
      );
    }
  }]);
  return TextTyped;
}(_react2.default.Component);

TextTyped.propTypes = {
  children: _react.PropTypes.array.isRequired
};
exports.default = TextTyped;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGV4dFR5cGVkLmpzIl0sIm5hbWVzIjpbIlRleHRUeXBlZCIsInByb3BzIiwic3R5bGUiLCJjaGlsZHJlbiIsImhpZGVXaGVuRG9uZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs2QkFNVjtBQUFBLG1CQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ0NDLEtBREQsVUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFFBRFIsVUFDUUEsUUFEUjs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXRCxLQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFVLFFBRFo7QUFFRSw0QkFBZ0IsQ0FGbEI7QUFHRSx3QkFBWSxJQUhkO0FBSUUsb0JBQVEsRUFBRUUsY0FBYyxJQUFoQixFQUpWO0FBTUdEO0FBTkg7QUFERixPQURGO0FBYUQ7OztFQXRCb0MsZ0JBQU1FLFM7O0FBQXhCTCxTLENBRVpNLFMsR0FBWTtBQUNqQkgsWUFBVSxpQkFBVUksS0FBVixDQUFnQkM7QUFEVCxDO2tCQUZBUixTIiwiZmlsZSI6IlRleHRUeXBlZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IFR5cGlzdCBmcm9tICdyZWFjdC10eXBpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRUeXBlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGV9PlxuICAgICAgICA8VHlwaXN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiVHlwaXN0XCJcbiAgICAgICAgICBhdmdUeXBpbmdTcGVlZD17NX1cbiAgICAgICAgICBzdGFydERlbGF5PXsxMDAwfVxuICAgICAgICAgIGN1cnNvcj17eyBoaWRlV2hlbkRvbmU6IHRydWUgfX0+XG5cbiAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgPC9UeXBpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==