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

var ParallaxBlock = function ParallaxBlock(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactParallax.Parallax,
      { strength: props.strength ? props.strength : 600 },
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
exports.default = ParallaxBlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFyYWxsYXhCbG9jay5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ0aXRsZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJiYWNrZ3JvdW5kIiwib2JqZWN0Iiwic3RyZW5ndGgiLCJudW1iZXIiLCJzdHlsZSIsIlBhcmFsbGF4QmxvY2siLCJwcm9wcyIsInBhcmFsbGF4IiwiY29udGVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsU0FBWSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEYjtBQUVoQkMsY0FBWSxpQkFBVUMsTUFBVixDQUFpQkYsVUFGYjtBQUdoQkcsWUFBWSxpQkFBVUMsTUFITjtBQUloQkMsU0FBWSxpQkFBVUg7QUFKTixDQUFsQjs7QUFPQSxJQUFNSSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxTQUNwQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBVSxVQUFXQSxNQUFNSixRQUFOLEdBQWlCSSxNQUFNSixRQUF2QixHQUFrQyxHQUF2RDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWNJLGNBQU1OLFVBQXBCO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBV00sTUFBTUYsS0FBTixDQUFZRyxRQUE1QjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVdELE1BQU1GLEtBQU4sQ0FBWVAsS0FBM0I7QUFBQTtBQUFvQ1MsZ0JBQU1ULEtBQTFDO0FBQUE7QUFBQTtBQURGO0FBRkYsS0FERjtBQU9FO0FBQUE7QUFBQSxRQUFLLFdBQVdTLE1BQU1GLEtBQU4sQ0FBWUksT0FBNUI7QUFBQTtBQUF1Q0YsWUFBTUcsUUFBN0M7QUFBQTtBQUFBO0FBUEYsR0FEb0I7QUFBQSxDQUF0Qjs7QUFXQUosY0FBY1QsU0FBZCxHQUEwQkEsU0FBMUI7a0JBQ2VTLGEiLCJmaWxlIjoiUGFyYWxsYXhCbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJhbGxheCwgQmFja2dyb3VuZCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4J1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYmFja2dyb3VuZDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzdHJlbmd0aDogICBQcm9wVHlwZXMubnVtYmVyLFxuICBzdHlsZTogICAgICBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmNvbnN0IFBhcmFsbGF4QmxvY2sgPSAocHJvcHMpID0+XG4gIDxkaXY+XG4gICAgPFBhcmFsbGF4IHN0cmVuZ3RoPXsgcHJvcHMuc3RyZW5ndGggPyBwcm9wcy5zdHJlbmd0aCA6IDYwMCB9PlxuICAgICAgPEJhY2tncm91bmQ+IHtwcm9wcy5iYWNrZ3JvdW5kfSA8L0JhY2tncm91bmQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuc3R5bGUucGFyYWxsYXh9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtwcm9wcy5zdHlsZS50aXRsZX0+IHtwcm9wcy50aXRsZX0gPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFyYWxsYXg+XG4gICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLnN0eWxlLmNvbnRlbnR9PiB7cHJvcHMuY2hpbGRyZW59IDwvZGl2PlxuICA8L2Rpdj5cblxuUGFyYWxsYXhCbG9jay5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IFBhcmFsbGF4QmxvY2tcbiJdfQ==