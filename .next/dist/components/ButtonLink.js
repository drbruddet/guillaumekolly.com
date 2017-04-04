'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  url: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  alt: _react.PropTypes.string,
  style: _react.PropTypes.object
};

var ButtonLink = function ButtonLink(props) {
  return _react2.default.createElement(
    'button',
    { className: (0, _css2.default)(button, props.style) },
    _react2.default.createElement(
      _link2.default,
      { href: props.url },
      _react2.default.createElement(
        'a',
        { alt: props.alt },
        props.title
      )
    )
  );
};

var button = (0, _css2.default)({
  margin: '5px 5px 5px 5px',
  padding: '15px 5px',
  border: "4px solid #000",
  background: 'transparent',
  letterSpacing: '0.12em',
  fontSize: '1.3em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  WebkitTransition: 'all 600ms',
  MozTransition: 'all 600ms',
  OTransition: 'all 600ms',
  MsTransition: 'all 600ms',
  transition: 'all 600ms',
  ':hover': {
    backgroundColor: '#000',
    color: '#fff',
    '> a': { color: '#fff' }
  },
  '> a': {
    color: '#000',
    textDecoration: 'none',
    padding: '10px'
  }
});

ButtonLink.propTypes = propTypes;
exports.default = ButtonLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uTGluay5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ1cmwiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidGl0bGUiLCJhbHQiLCJzdHlsZSIsIm9iamVjdCIsIkJ1dHRvbkxpbmsiLCJwcm9wcyIsImJ1dHRvbiIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwibGV0dGVyU3BhY2luZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjdXJzb3IiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwiTXNUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsT0FBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBUSxpQkFBVUYsTUFBVixDQUFpQkMsVUFGVDtBQUdoQkUsT0FBUSxpQkFBVUgsTUFIRjtBQUloQkksU0FBUSxpQkFBVUM7QUFKRixDQUFsQjs7QUFPQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2pCO0FBQUE7QUFBQSxNQUFRLFdBQVcsbUJBQUlDLE1BQUosRUFBWUQsTUFBTUgsS0FBbEIsQ0FBbkI7QUFDRTtBQUFBO0FBQUEsUUFBTSxNQUFNRyxNQUFNUixHQUFsQjtBQUF1QjtBQUFBO0FBQUEsVUFBRyxLQUFLUSxNQUFNSixHQUFkO0FBQW9CSSxjQUFNTDtBQUExQjtBQUF2QjtBQURGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBS0EsSUFBTU0sU0FBUyxtQkFBSTtBQUNqQkMsVUFBUSxpQkFEUztBQUVqQkMsV0FBUyxVQUZRO0FBR2pCQyxVQUFRLGdCQUhTO0FBSWpCQyxjQUFZLGFBSks7QUFLakJDLGlCQUFlLFFBTEU7QUFNakJDLFlBQVUsT0FOTztBQU9qQkMsY0FBWSxNQVBLO0FBUWpCQyxpQkFBZSxXQVJFO0FBU2pCQyxVQUFRLFNBVFM7QUFVakJDLG9CQUFrQixXQVZEO0FBV2pCQyxpQkFBZSxXQVhFO0FBWWpCQyxlQUFhLFdBWkk7QUFhakJDLGdCQUFjLFdBYkc7QUFjakJDLGNBQVksV0FkSztBQWVqQixZQUFVO0FBQ1JDLHFCQUFpQixNQURUO0FBRVJDLFdBQU8sTUFGQztBQUdSLFdBQU8sRUFBRUEsT0FBTyxNQUFUO0FBSEMsR0FmTztBQW9CakIsU0FBTztBQUNMQSxXQUFPLE1BREY7QUFFTEMsb0JBQWdCLE1BRlg7QUFHTGYsYUFBUztBQUhKO0FBcEJVLENBQUosQ0FBZjs7QUEyQkFKLFdBQVdSLFNBQVgsR0FBdUJBLFNBQXZCO2tCQUNlUSxVIiwiZmlsZSI6IkJ1dHRvbkxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB1cmw6ICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6ICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFsdDogICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBCdXR0b25MaW5rID0gKHByb3BzKSA9PlxuICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzKGJ1dHRvbiwgcHJvcHMuc3R5bGUpfT5cbiAgICA8TGluayBocmVmPXtwcm9wcy51cmx9PjxhIGFsdD17cHJvcHMuYWx0fT57cHJvcHMudGl0bGV9PC9hPjwvTGluaz5cbiAgPC9idXR0b24+XG5cbmNvbnN0IGJ1dHRvbiA9IGNzcyh7XG4gIG1hcmdpbjogJzVweCA1cHggNXB4IDVweCcsXG4gIHBhZGRpbmc6ICcxNXB4IDVweCcsXG4gIGJvcmRlcjogXCI0cHggc29saWQgIzAwMFwiLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBsZXR0ZXJTcGFjaW5nOiAnMC4xMmVtJyxcbiAgZm9udFNpemU6ICcxLjNlbScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgTW96VHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIE9UcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICAnPiBhJzogeyBjb2xvcjogJyNmZmYnfVxuICB9LFxuICAnPiBhJzoge1xuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gIH1cbn0pXG5cbkJ1dHRvbkxpbmsucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBCdXR0b25MaW5rXG4iXX0=