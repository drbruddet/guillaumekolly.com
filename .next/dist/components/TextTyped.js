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
            avgTypingSpeed: 10,
            stdTypingDelay: 30,
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
  style: _react.PropTypes.object,
  children: _react.PropTypes.array.isRequired
};
exports.default = TextTyped;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGV4dFR5cGVkLmpzIl0sIm5hbWVzIjpbIlRleHRUeXBlZCIsInByb3BzIiwic3R5bGUiLCJjaGlsZHJlbiIsImhpZGVXaGVuRG9uZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs2QkFPVjtBQUFBLG1CQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ0NDLEtBREQsVUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFFBRFIsVUFDUUEsUUFEUjs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXRCxLQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFnQixFQURsQjtBQUVFLDRCQUFnQixFQUZsQjtBQUdFLHdCQUFZLElBSGQ7QUFJRSxvQkFBUSxFQUFFRSxjQUFjLElBQWhCLEVBSlY7QUFNR0Q7QUFOSDtBQURGLE9BREY7QUFhRDs7O0VBdkJvQyxnQkFBTUUsUzs7QUFBeEJMLFMsQ0FFWk0sUyxHQUFZO0FBQ2pCSixTQUFPLGlCQUFVSyxNQURBO0FBRWpCSixZQUFVLGlCQUFVSyxLQUFWLENBQWdCQztBQUZULEM7a0JBRkFULFMiLCJmaWxlIjoiVGV4dFR5cGVkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgVHlwaXN0IGZyb20gJ3JlYWN0LXR5cGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dFR5cGVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0+XG4gICAgICAgIDxUeXBpc3RcbiAgICAgICAgICBhdmdUeXBpbmdTcGVlZD17MTB9XG4gICAgICAgICAgc3RkVHlwaW5nRGVsYXk9ezMwfVxuICAgICAgICAgIHN0YXJ0RGVsYXk9ezEwMDB9XG4gICAgICAgICAgY3Vyc29yPXt7IGhpZGVXaGVuRG9uZTogdHJ1ZSB9fT5cblxuICAgICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICA8L1R5cGlzdD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19