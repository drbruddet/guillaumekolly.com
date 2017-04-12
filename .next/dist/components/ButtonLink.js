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
exports.default = ButtonLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uTGluay5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ1cmwiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidGl0bGUiLCJibGFuayIsImJvb2wiLCJhbHQiLCJzdHlsZSIsIm9iamVjdCIsIkJ1dHRvbkxpbmsiLCJwcm9wcyIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiY3Vyc29yIiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsIk1zVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsT0FBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBUSxpQkFBVUYsTUFBVixDQUFpQkMsVUFGVDtBQUdoQkUsU0FBUSxpQkFBVUMsSUFIRjtBQUloQkMsT0FBUSxpQkFBVUwsTUFKRjtBQUtoQk0sU0FBUSxpQkFBVUM7QUFMRixDQUFsQjs7QUFRQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2pCO0FBQUE7QUFBQSxNQUFLLFdBQVcsbUJBQUlDLE1BQUosRUFBWUQsTUFBTUgsS0FBbEIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBTSxNQUFNRyxNQUFNVixHQUFsQjtBQUNFO0FBQUE7QUFBQSxVQUFHLFFBQVEsV0FBV1UsTUFBTU4sS0FBakIsR0FBeUIsRUFBcEMsRUFBd0MsS0FBS00sTUFBTUosR0FBbkQ7QUFDR0ksY0FBTVA7QUFEVDtBQURGO0FBREYsR0FEaUI7QUFBQSxDQUFuQjs7QUFTQSxJQUFNUSxTQUFTLG1CQUFJO0FBQ2pCQyxjQUFZLGFBREs7QUFFakJDLFlBQVUsT0FGTztBQUdqQkMsY0FBWSxNQUhLO0FBSWpCQyxpQkFBZSxXQUpFO0FBS2pCQyxVQUFRLFNBTFM7QUFNakJDLG9CQUFrQixXQU5EO0FBT2pCQyxpQkFBZSxXQVBFO0FBUWpCQyxlQUFhLFdBUkk7QUFTakJDLGdCQUFjLFdBVEc7QUFVakJDLGNBQVksV0FWSztBQVdqQixTQUFPO0FBQ0xDLFdBQU8sTUFERjtBQUVMQyxvQkFBZ0IsTUFGWDtBQUdMQyxXQUFPLE1BSEY7QUFJTEMsWUFBUTtBQUpILEdBWFU7QUFpQmpCLFlBQVUsRUFBRSxPQUFPLEVBQUVILE9BQU8sTUFBVCxFQUFpQkksaUJBQWlCLE1BQWxDLEVBQVQ7QUFqQk8sQ0FBSixDQUFmOztBQW9CQWpCLFdBQVdWLFNBQVgsR0FBdUJBLFNBQXZCO2tCQUNlVSxVIiwiZmlsZSI6IkJ1dHRvbkxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB1cmw6ICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6ICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJsYW5rOiAgUHJvcFR5cGVzLmJvb2wsXG4gIGFsdDogICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBCdXR0b25MaW5rID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGJ1dHRvbiwgcHJvcHMuc3R5bGUpfT5cbiAgICA8TGluayBocmVmPXtwcm9wcy51cmx9PlxuICAgICAgPGEgdGFyZ2V0PXtcIl9ibGFua1wiID8gcHJvcHMuYmxhbmsgOiBcIlwifSBhbHQ9e3Byb3BzLmFsdH0+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIDwvZGl2PlxuXG5jb25zdCBidXR0b24gPSBjc3Moe1xuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBmb250U2l6ZTogJzEuM2VtJyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICBNb3pUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgT1RyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICBNc1RyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICB0cmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgJz4gYSc6IHtcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgJzpob3Zlcic6IHsgJz4gYSc6IHsgY29sb3I6ICcjZmZmJywgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcgfSB9XG59KVxuXG5CdXR0b25MaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uTGlua1xuIl19