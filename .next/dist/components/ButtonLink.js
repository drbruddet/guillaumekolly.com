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
  margin: '5px 5px 5px 5px',
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
  '> a': {
    color: '#000',
    textDecoration: 'none',
    display: 'block',
    padding: '10px',
    width: '100%',
    height: '100%',
    border: "4px solid #000"
  },
  ':hover': { '> a': { color: '#fff', backgroundColor: '#000' } }
});

ButtonLink.propTypes = propTypes;
exports.default = ButtonLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uTGluay5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ1cmwiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidGl0bGUiLCJibGFuayIsImJvb2wiLCJhbHQiLCJzdHlsZSIsIm9iamVjdCIsIkJ1dHRvbkxpbmsiLCJwcm9wcyIsImJ1dHRvbiIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXkiLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsT0FBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBUSxpQkFBVUYsTUFBVixDQUFpQkMsVUFGVDtBQUdoQkUsU0FBUSxpQkFBVUMsSUFIRjtBQUloQkMsT0FBUSxpQkFBVUwsTUFKRjtBQUtoQk0sU0FBUSxpQkFBVUM7QUFMRixDQUFsQjs7QUFRQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2pCO0FBQUE7QUFBQSxNQUFLLFdBQVcsbUJBQUlDLE1BQUosRUFBWUQsTUFBTUgsS0FBbEIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBTSxNQUFNRyxNQUFNVixHQUFsQjtBQUNFO0FBQUE7QUFBQSxVQUFHLFFBQVEsV0FBV1UsTUFBTU4sS0FBakIsR0FBeUIsRUFBcEMsRUFBd0MsS0FBS00sTUFBTUosR0FBbkQ7QUFDR0ksY0FBTVA7QUFEVDtBQURGO0FBREYsR0FEaUI7QUFBQSxDQUFuQjs7QUFTQSxJQUFNUSxTQUFTLG1CQUFJO0FBQ2pCQyxVQUFRLGlCQURTO0FBRWpCQyxjQUFZLGFBRks7QUFHakJDLGlCQUFlLFFBSEU7QUFJakJDLFlBQVUsT0FKTztBQUtqQkMsY0FBWSxNQUxLO0FBTWpCQyxpQkFBZSxXQU5FO0FBT2pCQyxVQUFRLFNBUFM7QUFRakJDLG9CQUFrQixXQVJEO0FBU2pCQyxpQkFBZSxXQVRFO0FBVWpCQyxlQUFhLFdBVkk7QUFXakJDLGdCQUFjLFdBWEc7QUFZakJDLGNBQVksV0FaSztBQWFqQixTQUFPO0FBQ0xDLFdBQU8sTUFERjtBQUVMQyxvQkFBZ0IsTUFGWDtBQUdMQyxhQUFTLE9BSEo7QUFJTEMsYUFBUyxNQUpKO0FBS0xDLFdBQU8sTUFMRjtBQU1MQyxZQUFRLE1BTkg7QUFPTEMsWUFBUTtBQVBILEdBYlU7QUFzQmpCLFlBQVUsRUFBRSxPQUFPLEVBQUVOLE9BQU8sTUFBVCxFQUFpQk8saUJBQWlCLE1BQWxDLEVBQVQ7QUF0Qk8sQ0FBSixDQUFmOztBQXlCQXRCLFdBQVdWLFNBQVgsR0FBdUJBLFNBQXZCO2tCQUNlVSxVIiwiZmlsZSI6IkJ1dHRvbkxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB1cmw6ICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6ICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJsYW5rOiAgUHJvcFR5cGVzLmJvb2wsXG4gIGFsdDogICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6ICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBCdXR0b25MaW5rID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGJ1dHRvbiwgcHJvcHMuc3R5bGUpfT5cbiAgICA8TGluayBocmVmPXtwcm9wcy51cmx9PlxuICAgICAgPGEgdGFyZ2V0PXtcIl9ibGFua1wiID8gcHJvcHMuYmxhbmsgOiBcIlwifSBhbHQ9e3Byb3BzLmFsdH0+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIDwvZGl2PlxuXG5jb25zdCBidXR0b24gPSBjc3Moe1xuICBtYXJnaW46ICc1cHggNXB4IDVweCA1cHgnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBsZXR0ZXJTcGFjaW5nOiAnMC4xMmVtJyxcbiAgZm9udFNpemU6ICcxLjNlbScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgTW96VHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gIE9UcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgTXNUcmFuc2l0aW9uOiAnYWxsIDYwMG1zJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCA2MDBtcycsXG4gICc+IGEnOiB7XG4gICAgY29sb3I6ICcjMDAwJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzEwcHgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjMDAwXCIsXG4gIH0sXG4gICc6aG92ZXInOiB7ICc+IGEnOiB7IGNvbG9yOiAnI2ZmZicsIGJhY2tncm91bmRDb2xvcjogJyMwMDAnIH0gfVxufSlcblxuQnV0dG9uTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkxpbmtcbiJdfQ==