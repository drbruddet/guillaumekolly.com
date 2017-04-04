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

var _glamor = require('glamor');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Timeline = require('../components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _Theme = require('../components/layout/Theme');

var _resume = require('../data/resume');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          experiences = _props.experiences,
          projects = _props.projects,
          education = _props.education;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeadBloc2.default, {
          title: 'Guillaume Kolly | About me',
          description: 'Guillaume Kolly | Full stack developer living in Lyon. Everything to know about me here.'
        }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 01. Skills '
        ),
        _react2.default.createElement('p', { className: skillBlock }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 02. Work Experiences '
        ),
        _react2.default.createElement(_Timeline2.default, { items: experiences, style: timelineStyle }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 03. Personal Projects '
        ),
        _react2.default.createElement(_Timeline2.default, { items: projects, style: timelineStyle }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 04. Education '
        ),
        _react2.default.createElement(_Timeline2.default, { items: education, style: timelineStyle })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        experiences: _resume.experiences,
        projects: _resume.projects,
        education: _resume.education
      };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var skillBlock = (0, _css2.default)({
  width: '50%',
  margin: '60px auto',
  textAlign: 'center',
  lineHeight: '1.8em',
  fontSize: '1.1em',
  color: _Theme.theme.colors.text
});

var yellow = (0, _css2.default)({
  backgroundColor: _Theme.theme.colors.trans_secondary,
  ':hover': { backgroundColor: _Theme.theme.colors.secondary }
});

var timelineStyle = {
  marker: { background: _Theme.theme.colors.primary },
  title: { color: _Theme.theme.colors.time_line_title },
  subtitle: { color: _Theme.theme.colors.light_text },
  description: { color: _Theme.theme.colors.text },
  containerBefore: { backgroundColor: _Theme.theme.colors.time_line }
};

var title = (0, _css2.default)({
  textAlign: 'center',
  textTransform: 'uppercase'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImV4cGVyaWVuY2VzIiwicHJvamVjdHMiLCJlZHVjYXRpb24iLCJ0aXRsZSIsInNraWxsQmxvY2siLCJ0aW1lbGluZVN0eWxlIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImNvbG9ycyIsInRleHQiLCJ5ZWxsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc19zZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJtYXJrZXIiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsInRpbWVfbGluZV90aXRsZSIsInN1YnRpdGxlIiwibGlnaHRfdGV4dCIsImRlc2NyaXB0aW9uIiwiY29udGFpbmVyQmVmb3JlIiwidGltZV9saW5lIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs2QkFZVztBQUFBLG1CQUNzQyxLQUFLQSxLQUQzQztBQUFBLFVBQ0NDLFdBREQsVUFDQ0EsV0FERDtBQUFBLFVBQ2NDLFFBRGQsVUFDY0EsUUFEZDtBQUFBLFVBQ3dCQyxTQUR4QixVQUN3QkEsU0FEeEI7OztBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxpQkFBTSw0QkFEUjtBQUVFLHVCQUFZO0FBRmQsVUFERjtBQUtFO0FBQUE7QUFBQSxZQUFJLFdBQVdDLEtBQWY7QUFBQTtBQUFBLFNBTEY7QUFNRSw2Q0FBRyxXQUFXQyxVQUFkLEdBTkY7QUFTRTtBQUFBO0FBQUEsWUFBSSxXQUFXRCxLQUFmO0FBQUE7QUFBQSxTQVRGO0FBVUUsNERBQVUsT0FBT0gsV0FBakIsRUFBOEIsT0FBT0ssYUFBckMsR0FWRjtBQVdFO0FBQUE7QUFBQSxZQUFJLFdBQVdGLEtBQWY7QUFBQTtBQUFBLFNBWEY7QUFZRSw0REFBVSxPQUFPRixRQUFqQixFQUEyQixPQUFPSSxhQUFsQyxHQVpGO0FBYUU7QUFBQTtBQUFBLFlBQUksV0FBV0YsS0FBZjtBQUFBO0FBQUEsU0FiRjtBQWNFLDREQUFVLE9BQU9ELFNBQWpCLEVBQTRCLE9BQU9HLGFBQW5DO0FBZEYsT0FERjtBQWtCRDs7O3NDQTdCeUI7QUFDeEIsYUFBTztBQUNMTCx3Q0FESztBQUVMQyxrQ0FGSztBQUdMQztBQUhLLE9BQVA7QUFLRDs7O0VBUjBCLGdCQUFNSSxTOzs7OztBQWtDbkMsSUFBTUYsYUFBYSxtQkFBSTtBQUNyQkcsU0FBTyxLQURjO0FBRXJCQyxVQUFRLFdBRmE7QUFHckJDLGFBQVcsUUFIVTtBQUlyQkMsY0FBWSxPQUpTO0FBS3JCQyxZQUFVLE9BTFc7QUFNckJDLFNBQU8sYUFBTUMsTUFBTixDQUFhQztBQU5DLENBQUosQ0FBbkI7O0FBV0EsSUFBTUMsU0FBUyxtQkFBSTtBQUNqQkMsbUJBQWlCLGFBQU1ILE1BQU4sQ0FBYUksZUFEYjtBQUVqQixZQUFVLEVBQUVELGlCQUFpQixhQUFNSCxNQUFOLENBQWFLLFNBQWhDO0FBRk8sQ0FBSixDQUFmOztBQUtBLElBQU1iLGdCQUFnQjtBQUNwQmMsVUFBUSxFQUFFQyxZQUFZLGFBQU1QLE1BQU4sQ0FBYVEsT0FBM0IsRUFEWTtBQUVwQmxCLFNBQU8sRUFBRVMsT0FBTyxhQUFNQyxNQUFOLENBQWFTLGVBQXRCLEVBRmE7QUFHcEJDLFlBQVUsRUFBRVgsT0FBTyxhQUFNQyxNQUFOLENBQWFXLFVBQXRCLEVBSFU7QUFJcEJDLGVBQWEsRUFBRWIsT0FBTyxhQUFNQyxNQUFOLENBQWFDLElBQXRCLEVBSk87QUFLcEJZLG1CQUFpQixFQUFFVixpQkFBaUIsYUFBTUgsTUFBTixDQUFhYyxTQUFoQztBQUxHLENBQXRCOztBQVFBLElBQU14QixRQUFRLG1CQUFJO0FBQ2hCTSxhQUFXLFFBREs7QUFFaEJtQixpQkFBZTtBQUZDLENBQUosQ0FBZCIsImZpbGUiOiJyZXN1bWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnZ2xhbW9yJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lbGluZSdcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCB7IGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gZnJvbSAnLi4vZGF0YS9yZXN1bWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwZXJpZW5jZXM6ICBleHBlcmllbmNlcyxcbiAgICAgIHByb2plY3RzOiAgICAgcHJvamVjdHMsXG4gICAgICBlZHVjYXRpb246ICAgIGVkdWNhdGlvbixcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPVwiR3VpbGxhdW1lIEtvbGx5IHwgQWJvdXQgbWVcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIEV2ZXJ5dGhpbmcgdG8ga25vdyBhYm91dCBtZSBoZXJlLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3RpdGxlfT4gMDEuIFNraWxscyA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3NraWxsQmxvY2t9PlxuICAgICAgICAgIFxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3RpdGxlfT4gMDIuIFdvcmsgRXhwZXJpZW5jZXMgPC9oMj5cbiAgICAgICAgPFRpbWVsaW5lIGl0ZW1zPXtleHBlcmllbmNlc30gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3RpdGxlfT4gMDMuIFBlcnNvbmFsIFByb2plY3RzIDwvaDI+XG4gICAgICAgIDxUaW1lbGluZSBpdGVtcz17cHJvamVjdHN9IHN0eWxlPXt0aW1lbGluZVN0eWxlfSAvPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt0aXRsZX0+IDA0LiBFZHVjYXRpb24gPC9oMj5cbiAgICAgICAgPFRpbWVsaW5lIGl0ZW1zPXtlZHVjYXRpb259IHN0eWxlPXt0aW1lbGluZVN0eWxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHNraWxsQmxvY2sgPSBjc3Moe1xuICB3aWR0aDogJzUwJScsXG4gIG1hcmdpbjogJzYwcHggYXV0bycsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGxpbmVIZWlnaHQ6ICcxLjhlbScsXG4gIGZvbnRTaXplOiAnMS4xZW0nLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQsXG4gIC8vdGV4dEFsaWduOiAnanVzdGlmeScsXG4gIC8vdGV4dEp1c3RpZnk6ICdpbnRlci13b3JkJ1xufSlcblxuY29uc3QgeWVsbG93ID0gY3NzKHtcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudHJhbnNfc2Vjb25kYXJ5LFxuICAnOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnkgfVxufSlcblxuY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgbWFya2VyOiB7IGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5IH0sXG4gIHRpdGxlOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lX3RpdGxlIH0sXG4gIHN1YnRpdGxlOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRfdGV4dCB9LFxuICBkZXNjcmlwdGlvbjogeyBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQgfSxcbiAgY29udGFpbmVyQmVmb3JlOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRpbWVfbGluZSB9XG59XG5cbmNvbnN0IHRpdGxlID0gY3NzKHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG59KVxuIl19