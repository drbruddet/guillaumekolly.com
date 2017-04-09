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
      { avgTypingSpeed: 200,
        stdTypingDelay: 20,
        startDelay: 1000,
        cursor: { hideWhenDone: true } },
      props.children
    )
  );
};

TextTyped.propTypes = propTypes;
exports.default = TextTyped;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGV4dFR5cGVkLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInN0eWxlIiwib2JqZWN0IiwiY2hpbGRyZW4iLCJhcnJheSIsImlzUmVxdWlyZWQiLCJUZXh0VHlwZWQiLCJwcm9wcyIsImhpZGVXaGVuRG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsU0FBVSxpQkFBVUMsTUFESjtBQUVoQkMsWUFBVSxpQkFBVUMsS0FBVixDQUFnQkM7QUFGVixDQUFsQjs7QUFLQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFLLFdBQVdBLE1BQU1OLEtBQXRCO0FBQ0U7QUFBQTtBQUFBLFFBQVEsZ0JBQWdCLEdBQXhCO0FBQ1Esd0JBQWdCLEVBRHhCO0FBRVEsb0JBQVksSUFGcEI7QUFHUSxnQkFBUSxFQUFFTyxjQUFjLElBQWhCLEVBSGhCO0FBSUdELFlBQU1KO0FBSlQ7QUFERixHQURnQjtBQUFBLENBQWxCOztBQVVBRyxVQUFVTixTQUFWLEdBQXNCQSxTQUF0QjtrQkFDZU0sUyIsImZpbGUiOiJUZXh0VHlwZWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFR5cGlzdCBmcm9tICdyZWFjdC10eXBpc3QnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgc3R5bGU6ICAgIFByb3BUeXBlcy5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn1cblxuY29uc3QgVGV4dFR5cGVkID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGV9PlxuICAgIDxUeXBpc3QgYXZnVHlwaW5nU3BlZWQ9ezIwMH1cbiAgICAgICAgICAgIHN0ZFR5cGluZ0RlbGF5PXsyMH1cbiAgICAgICAgICAgIHN0YXJ0RGVsYXk9ezEwMDB9XG4gICAgICAgICAgICBjdXJzb3I9e3sgaGlkZVdoZW5Eb25lOiB0cnVlIH19ID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1R5cGlzdD5cbiAgPC9kaXY+XG5cblRleHRUeXBlZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFRleHRUeXBlZFxuIl19