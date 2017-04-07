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
    'button',
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
  '> a': { color: '#000', textDecoration: 'none', padding: '10px' }
});

ButtonLink.propTypes = propTypes;
exports.default = ButtonLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uTGluay5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ1cmwiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidGl0bGUiLCJibGFuayIsImJvb2wiLCJhbHQiLCJzdHlsZSIsIm9iamVjdCIsIkJ1dHRvbkxpbmsiLCJwcm9wcyIsImJ1dHRvbiIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwibGV0dGVyU3BhY2luZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjdXJzb3IiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwiTXNUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsT0FBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBUSxpQkFBVUYsTUFBVixDQUFpQkMsVUFGVDtBQUdoQkUsU0FBUSxpQkFBVUMsSUFIRjtBQUloQkMsT0FBUSxpQkFBVUwsTUFKRjtBQUtoQk0sU0FBUSxpQkFBVUM7QUFMRixDQUFsQjs7QUFRQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2pCO0FBQUE7QUFBQSxNQUFRLFdBQVcsbUJBQUlDLE1BQUosRUFBWUQsTUFBTUgsS0FBbEIsQ0FBbkI7QUFDRTtBQUFBO0FBQUEsUUFBTSxNQUFNRyxNQUFNVixHQUFsQjtBQUNFO0FBQUE7QUFBQSxVQUFHLFFBQVEsV0FBV1UsTUFBTU4sS0FBakIsR0FBeUIsRUFBcEMsRUFBd0MsS0FBS00sTUFBTUosR0FBbkQ7QUFDR0ksY0FBTVA7QUFEVDtBQURGO0FBREYsR0FEaUI7QUFBQSxDQUFuQjs7QUFTQSxJQUFNUSxTQUFTLG1CQUFJO0FBQ2pCQyxVQUFRLGlCQURTO0FBRWpCQyxXQUFTLFVBRlE7QUFHakJDLFVBQVEsZ0JBSFM7QUFJakJDLGNBQVksYUFKSztBQUtqQkMsaUJBQWUsUUFMRTtBQU1qQkMsWUFBVSxPQU5PO0FBT2pCQyxjQUFZLE1BUEs7QUFRakJDLGlCQUFlLFdBUkU7QUFTakJDLFVBQVEsU0FUUztBQVVqQkMsb0JBQWtCLFdBVkQ7QUFXakJDLGlCQUFlLFdBWEU7QUFZakJDLGVBQWEsV0FaSTtBQWFqQkMsZ0JBQWMsV0FiRztBQWNqQkMsY0FBWSxXQWRLO0FBZWpCLFlBQVU7QUFDUkMscUJBQWlCLE1BRFQ7QUFFUkMsV0FBTyxNQUZDO0FBR1IsV0FBTyxFQUFFQSxPQUFPLE1BQVQ7QUFIQyxHQWZPO0FBb0JqQixTQUFPLEVBQUVBLE9BQU8sTUFBVCxFQUFpQkMsZ0JBQWdCLE1BQWpDLEVBQXlDZixTQUFTLE1BQWxEO0FBcEJVLENBQUosQ0FBZjs7QUF1QkFKLFdBQVdWLFNBQVgsR0FBdUJBLFNBQXZCO2tCQUNlVSxVIiwiZmlsZSI6IkJ1dHRvbkxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB1cmw6ICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6ICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJsYW5rOiAgUHJvcFR5cGVzLmJvb2wsXG4gIGFsdDogICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBCdXR0b25MaW5rID0gKHByb3BzKSA9PlxuICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzKGJ1dHRvbiwgcHJvcHMuc3R5bGUpfT5cbiAgICA8TGluayBocmVmPXtwcm9wcy51cmx9PlxuICAgICAgPGEgdGFyZ2V0PXtcIl9ibGFua1wiID8gcHJvcHMuYmxhbmsgOiBcIlwifSBhbHQ9e3Byb3BzLmFsdH0+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIDwvYnV0dG9uPlxuXG5jb25zdCBidXR0b24gPSBjc3Moe1xuICBtYXJnaW46ICc1cHggNXB4IDVweCA1cHgnLFxuICBwYWRkaW5nOiAnMTVweCA1cHgnLFxuICBib3JkZXI6IFwiNHB4IHNvbGlkICMwMDBcIixcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgbGV0dGVyU3BhY2luZzogJzAuMTJlbScsXG4gIGZvbnRTaXplOiAnMS4zZW0nLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgV2Via2l0VHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIE1velRyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICBPVHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIE1zVHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIHRyYW5zaXRpb246ICdhbGwgNjAwbXMnLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgJz4gYSc6IHsgY29sb3I6ICcjZmZmJ31cbiAgfSxcbiAgJz4gYSc6IHsgY29sb3I6ICcjMDAwJywgdGV4dERlY29yYXRpb246ICdub25lJywgcGFkZGluZzogJzEwcHgnIH1cbn0pXG5cbkJ1dHRvbkxpbmsucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBCdXR0b25MaW5rXG4iXX0=