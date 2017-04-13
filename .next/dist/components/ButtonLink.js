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
  blank: _react.PropTypes.bool,
  alt: _react.PropTypes.string,
  style: _react.PropTypes.object
};

var defaultProps = {
  alt: "",
  black: false,
  style: null
};

var ButtonLink = function ButtonLink(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _css2.default)(button, props.style) },
    _react2.default.createElement(
      _link2.default,
      { href: props.url },
      _react2.default.createElement(
        'a',
        { target: "_blank" ? props.blank : "", alt: props.alt },
        props.title
      )
    )
  );
};

var button = (0, _css2.default)({
  background: 'transparent',
  fontSize: '1.3em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  WebkitTransition: 'all 600ms',
  MozTransition: 'all 600ms',
  OTransition: 'all 600ms',
  MsTransition: 'all 600ms',
  transition: 'all 600ms',
  '> a': {
    color: '#000',
    textDecoration: 'none',
    width: '100%',
    height: '100%'
  },
  ':hover': { '> a': { color: '#fff', backgroundColor: '#000' } }
});

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;
exports.default = ButtonLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uTGluay5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ1cmwiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidGl0bGUiLCJibGFuayIsImJvb2wiLCJhbHQiLCJzdHlsZSIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImJsYWNrIiwiQnV0dG9uTGluayIsInByb3BzIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjdXJzb3IiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwiTXNUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxPQUFRLGlCQUFVQyxNQUFWLENBQWlCQyxVQURUO0FBRWhCQyxTQUFRLGlCQUFVRixNQUFWLENBQWlCQyxVQUZUO0FBR2hCRSxTQUFRLGlCQUFVQyxJQUhGO0FBSWhCQyxPQUFRLGlCQUFVTCxNQUpGO0FBS2hCTSxTQUFRLGlCQUFVQztBQUxGLENBQWxCOztBQVFBLElBQU1DLGVBQWU7QUFDbkJILE9BQUssRUFEYztBQUVuQkksU0FBTyxLQUZZO0FBR25CSCxTQUFPO0FBSFksQ0FBckI7O0FBTUEsSUFBTUksYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxTQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFXLG1CQUFJQyxNQUFKLEVBQVlELE1BQU1MLEtBQWxCLENBQWhCO0FBQ0U7QUFBQTtBQUFBLFFBQU0sTUFBTUssTUFBTVosR0FBbEI7QUFDRTtBQUFBO0FBQUEsVUFBRyxRQUFRLFdBQVdZLE1BQU1SLEtBQWpCLEdBQXlCLEVBQXBDLEVBQXdDLEtBQUtRLE1BQU1OLEdBQW5EO0FBQ0dNLGNBQU1UO0FBRFQ7QUFERjtBQURGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBU0EsSUFBTVUsU0FBUyxtQkFBSTtBQUNqQkMsY0FBWSxhQURLO0FBRWpCQyxZQUFVLE9BRk87QUFHakJDLGNBQVksTUFISztBQUlqQkMsaUJBQWUsV0FKRTtBQUtqQkMsVUFBUSxTQUxTO0FBTWpCQyxvQkFBa0IsV0FORDtBQU9qQkMsaUJBQWUsV0FQRTtBQVFqQkMsZUFBYSxXQVJJO0FBU2pCQyxnQkFBYyxXQVRHO0FBVWpCQyxjQUFZLFdBVks7QUFXakIsU0FBTztBQUNMQyxXQUFPLE1BREY7QUFFTEMsb0JBQWdCLE1BRlg7QUFHTEMsV0FBTyxNQUhGO0FBSUxDLFlBQVE7QUFKSCxHQVhVO0FBaUJqQixZQUFVLEVBQUUsT0FBTyxFQUFFSCxPQUFPLE1BQVQsRUFBaUJJLGlCQUFpQixNQUFsQyxFQUFUO0FBakJPLENBQUosQ0FBZjs7QUFvQkFqQixXQUFXWixTQUFYLEdBQXVCQSxTQUF2QjtBQUNBWSxXQUFXRixZQUFYLEdBQTBCQSxZQUExQjtrQkFDZUUsVSIsImZpbGUiOiJCdXR0b25MaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgdXJsOiAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBibGFuazogIFByb3BUeXBlcy5ib29sLFxuICBhbHQ6ICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiAgUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6IFwiXCIsXG4gIGJsYWNrOiBmYWxzZSxcbiAgc3R5bGU6IG51bGxcbn1cblxuY29uc3QgQnV0dG9uTGluayA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e2NzcyhidXR0b24sIHByb3BzLnN0eWxlKX0+XG4gICAgPExpbmsgaHJlZj17cHJvcHMudXJsfT5cbiAgICAgIDxhIHRhcmdldD17XCJfYmxhbmtcIiA/IHByb3BzLmJsYW5rIDogXCJcIn0gYWx0PXtwcm9wcy5hbHR9PlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICA8L2Rpdj5cblxuY29uc3QgYnV0dG9uID0gY3NzKHtcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgZm9udFNpemU6ICcxLjNlbScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgTW96VHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIE9UcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gICc+IGEnOiB7XG4gICAgY29sb3I6ICcjMDAwJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH0sXG4gICc6aG92ZXInOiB7ICc+IGEnOiB7IGNvbG9yOiAnI2ZmZicsIGJhY2tncm91bmRDb2xvcjogJyMwMDAnIH0gfVxufSlcblxuQnV0dG9uTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbkJ1dHRvbkxpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5leHBvcnQgZGVmYXVsdCBCdXR0b25MaW5rXG4iXX0=