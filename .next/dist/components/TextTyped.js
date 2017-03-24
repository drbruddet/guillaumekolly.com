'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactTypist = require('react-typist');

var _reactTypist2 = _interopRequireDefault(_reactTypist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  style: _react.PropTypes.object,
  children: _react.PropTypes.array.isRequired
};

var TextTyped = function TextTyped(props) {
  return _react2.default.createElement(
    'div',
    { className: props.style },
    _react2.default.createElement(
      _reactTypist2.default,
      {
        avgTypingSpeed: 10,
        stdTypingDelay: 30,
        startDelay: 1000,
        cursor: { hideWhenDone: true } },
      props.children
    )
  );
};

TextTyped.propTypes = propTypes;
exports.default = TextTyped;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGV4dFR5cGVkLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInN0eWxlIiwib2JqZWN0IiwiY2hpbGRyZW4iLCJhcnJheSIsImlzUmVxdWlyZWQiLCJUZXh0VHlwZWQiLCJwcm9wcyIsImhpZGVXaGVuRG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsU0FBVSxpQkFBVUMsTUFESjtBQUVoQkMsWUFBVSxpQkFBVUMsS0FBVixDQUFnQkM7QUFGVixDQUFsQjs7QUFLQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1OLEtBQXRCO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBQWdCLEVBRGxCO0FBRUUsd0JBQWdCLEVBRmxCO0FBR0Usb0JBQVksSUFIZDtBQUlFLGdCQUFRLEVBQUVPLGNBQWMsSUFBaEIsRUFKVjtBQU1HRCxZQUFNSjtBQU5UO0FBREYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFZQUcsVUFBVU4sU0FBVixHQUFzQkEsU0FBdEI7a0JBQ2VNLFMiLCJmaWxlIjoiVGV4dFR5cGVkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUeXBpc3QgZnJvbSAncmVhY3QtdHlwaXN0J1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHN0eWxlOiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59XG5cbmNvbnN0IFRleHRUeXBlZCA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlfT5cbiAgICA8VHlwaXN0XG4gICAgICBhdmdUeXBpbmdTcGVlZD17MTB9XG4gICAgICBzdGRUeXBpbmdEZWxheT17MzB9XG4gICAgICBzdGFydERlbGF5PXsxMDAwfVxuICAgICAgY3Vyc29yPXt7IGhpZGVXaGVuRG9uZTogdHJ1ZSB9fSA+XG5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1R5cGlzdD5cbiAgPC9kaXY+XG5cblRleHRUeXBlZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRUeXBlZFxuIl19