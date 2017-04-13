'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactParallax = require('react-parallax');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  title: _react.PropTypes.string.isRequired,
  background: _react.PropTypes.object.isRequired,
  strength: _react.PropTypes.number,
  style: _react.PropTypes.object
};

var defaultProps = {
  strength: 600,
  style: null
};

var ParallaxBlock = function ParallaxBlock(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactParallax.Parallax,
      { strength: props.strength },
      _react2.default.createElement(
        _reactParallax.Background,
        null,
        ' ',
        props.background,
        ' '
      ),
      _react2.default.createElement(
        'div',
        { className: props.style.parallax },
        _react2.default.createElement(
          'h2',
          { className: props.style.title },
          ' ',
          props.title,
          ' '
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: props.style.content },
      ' ',
      props.children,
      ' '
    )
  );
};

ParallaxBlock.propTypes = propTypes;
ParallaxBlock.defaultProps = defaultProps;
exports.default = ParallaxBlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFyYWxsYXhCbG9jay5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ0aXRsZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJiYWNrZ3JvdW5kIiwib2JqZWN0Iiwic3RyZW5ndGgiLCJudW1iZXIiLCJzdHlsZSIsImRlZmF1bHRQcm9wcyIsIlBhcmFsbGF4QmxvY2siLCJwcm9wcyIsInBhcmFsbGF4IiwiY29udGVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsU0FBWSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEYjtBQUVoQkMsY0FBWSxpQkFBVUMsTUFBVixDQUFpQkYsVUFGYjtBQUdoQkcsWUFBWSxpQkFBVUMsTUFITjtBQUloQkMsU0FBWSxpQkFBVUg7QUFKTixDQUFsQjs7QUFPQSxJQUFNSSxlQUFlO0FBQ25CSCxZQUFVLEdBRFM7QUFFbkJFLFNBQU87QUFGWSxDQUFyQjs7QUFLQSxJQUFNRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxTQUNwQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBVSxVQUFVQSxNQUFNTCxRQUExQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWNLLGNBQU1QLFVBQXBCO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBV08sTUFBTUgsS0FBTixDQUFZSSxRQUE1QjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVdELE1BQU1ILEtBQU4sQ0FBWVAsS0FBM0I7QUFBQTtBQUFvQ1UsZ0JBQU1WLEtBQTFDO0FBQUE7QUFBQTtBQURGO0FBRkYsS0FERjtBQU9FO0FBQUE7QUFBQSxRQUFLLFdBQVdVLE1BQU1ILEtBQU4sQ0FBWUssT0FBNUI7QUFBQTtBQUF1Q0YsWUFBTUcsUUFBN0M7QUFBQTtBQUFBO0FBUEYsR0FEb0I7QUFBQSxDQUF0Qjs7QUFXQUosY0FBY1YsU0FBZCxHQUEwQkEsU0FBMUI7QUFDQVUsY0FBY0QsWUFBZCxHQUE2QkEsWUFBN0I7a0JBQ2VDLGEiLCJmaWxlIjoiUGFyYWxsYXhCbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJhbGxheCwgQmFja2dyb3VuZCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4J1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYmFja2dyb3VuZDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzdHJlbmd0aDogICBQcm9wVHlwZXMubnVtYmVyLFxuICBzdHlsZTogICAgICBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgc3RyZW5ndGg6IDYwMCxcbiAgc3R5bGU6IG51bGxcbn1cblxuY29uc3QgUGFyYWxsYXhCbG9jayA9IChwcm9wcykgPT5cbiAgPGRpdj5cbiAgICA8UGFyYWxsYXggc3RyZW5ndGg9e3Byb3BzLnN0cmVuZ3RofT5cbiAgICAgIDxCYWNrZ3JvdW5kPiB7cHJvcHMuYmFja2dyb3VuZH0gPC9CYWNrZ3JvdW5kPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlLnBhcmFsbGF4fT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17cHJvcHMuc3R5bGUudGl0bGV9PiB7cHJvcHMudGl0bGV9IDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhcmFsbGF4PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZS5jb250ZW50fT4ge3Byb3BzLmNoaWxkcmVufSA8L2Rpdj5cbiAgPC9kaXY+XG5cblBhcmFsbGF4QmxvY2sucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5QYXJhbGxheEJsb2NrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuZXhwb3J0IGRlZmF1bHQgUGFyYWxsYXhCbG9ja1xuIl19