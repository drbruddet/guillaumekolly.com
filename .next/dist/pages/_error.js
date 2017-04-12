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

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

var _ButtonLink = require('../components/ButtonLink');

var _ButtonLink2 = _interopRequireDefault(_ButtonLink);

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'renderError',
    value: function renderError() {
      return this.props.statusCode ? ' An error occurred on server.' : ' An error occurred on client.';
    }
  }, {
    key: 'render',
    value: function render() {
      var meta = this.props.config.meta.error;
      var title = meta.title + ' ' + this.props.statusCode + ' Page not found';
      var movingtextstringify = String(this.props.statusCode);

      return _react2.default.createElement(
        'div',
        { className: _Theme._centeredBox },
        _react2.default.createElement(_HeadBloc2.default, { title: title,
          description: meta.description,
          keywords: meta.keywords }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(
          'div',
          { className: verticalyCentered },
          _react2.default.createElement(
            'h2',
            { className: errorText },
            'The page your looking for can\'t be found.',
            _react2.default.createElement('br', null),
            this.renderError()
          ),
          _react2.default.createElement(_MovingText2.default, { movingtext: movingtextstringify, style: movingText }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/',
            title: 'Home',
            alt: 'Home Page',
            style: button }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/resume',
            title: 'Resume',
            alt: 'Resume Page',
            style: button }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/contact',
            title: 'Contact',
            alt: 'Contact Page',
            style: button })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          jsonPageRes = _ref.jsonPageRes;

      var statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
      return {
        statusCode: statusCode,
        config: _config2.default
      };
    }
  }]);
  return Error;
}(_react2.default.Component);

exports.default = Error;


var button = (0, _css2.default)({
  width: '60%',
  textAlign: 'center',
  margin: '10px auto',
  '> a': {
    color: _Theme.theme.colors.black,
    border: "4px solid " + _Theme.theme.colors.primary },
  ':hover': {
    color: _Theme.theme.colors.white,
    '> a': { backgroundColor: _Theme.theme.colors.primary }
  },
  '@media(max-width: 640px)': { width: '80%', fontSize: '1em' }
});

var movingText = {
  movingtitle: (0, _css2.default)({
    color: _Theme.theme.colors.black,
    fontSize: '1000%',
    lineHeight: '90%',
    '@media(max-width: 640px)': { fontSize: '600%' }
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-20',
    shadow_mouse_pos_y: '20'
  }
};

var errorText = (0, _css2.default)({
  fontSize: '140%',
  width: '100%',
  margin: '0 auto',
  lineHeight: '130%',
  color: _Theme.theme.colors.light_text,
  '@media(max-width: 640px)': { fontSize: '100%' }
});

var verticalyCentered = (0, _css2.default)({
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: _Theme.theme.colors.black
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1ldGEiLCJjb25maWciLCJlcnJvciIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ2ZXJ0aWNhbHlDZW50ZXJlZCIsImVycm9yVGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImJ1dHRvbiIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiYm9yZGVyIiwicHJpbWFyeSIsIndoaXRlIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJtb3Zpbmd0aXRsZSIsImxpbmVIZWlnaHQiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJzaGFkb3dfbW91c2VfcG9zX3giLCJzaGFkb3dfbW91c2VfcG9zX3kiLCJsaWdodF90ZXh0IiwiekluZGV4IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7O2tDQVlMO0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLFVBQVgscUNBRUgsK0JBRko7QUFHRDs7OzZCQUVTO0FBQ1IsVUFBTUMsT0FBTyxLQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JELElBQWxCLENBQXVCRSxLQUFwQztBQUNBLFVBQU1DLFFBQVdILEtBQUtHLEtBQWhCLFNBQXlCLEtBQUtMLEtBQUwsQ0FBV0MsVUFBcEMsb0JBQU47QUFDQSxVQUFNSyxzQkFBc0JDLE9BQU8sS0FBS1AsS0FBTCxDQUFXQyxVQUFsQixDQUE1Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLDhCQUFMO0FBQ0UsNERBQVUsT0FBT0ksS0FBakI7QUFDVSx1QkFBYUgsS0FBS00sV0FENUI7QUFFVSxvQkFBVU4sS0FBS08sUUFGekIsR0FERjtBQUlFLHFFQUpGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBV0MsaUJBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBV0MsU0FBZjtBQUFBO0FBQzJDLHFEQUQzQztBQUVHLGlCQUFLQyxXQUFMO0FBRkgsV0FERjtBQUtFLGdFQUFZLFlBQVlOLG1CQUF4QixFQUE2QyxPQUFPTyxVQUFwRCxHQUxGO0FBTUUsZ0VBQVksS0FBSSxHQUFoQjtBQUNZLG1CQUFNLE1BRGxCO0FBRVksaUJBQUksV0FGaEI7QUFHWSxtQkFBT0MsTUFIbkIsR0FORjtBQVVFLGdFQUFZLEtBQUksU0FBaEI7QUFDWSxtQkFBTSxRQURsQjtBQUVZLGlCQUFJLGFBRmhCO0FBR1ksbUJBQU9BLE1BSG5CLEdBVkY7QUFjRSxnRUFBWSxLQUFJLFVBQWhCO0FBQ1ksbUJBQU0sU0FEbEI7QUFFWSxpQkFBSSxjQUZoQjtBQUdZLG1CQUFPQSxNQUhuQjtBQWRGO0FBTEYsT0FERjtBQTJCRDs7OzBDQWhENkM7QUFBQSxVQUFwQkMsR0FBb0IsUUFBcEJBLEdBQW9CO0FBQUEsVUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUM1QyxVQUFNZixhQUFhYyxNQUNmQSxJQUFJZCxVQURXLEdBRWRlLGNBQWNBLFlBQVlDLE1BQTFCLEdBQW1DLElBRnhDO0FBR0EsYUFBTztBQUNMaEIsOEJBREs7QUFFTEU7QUFGSyxPQUFQO0FBSUQ7OztFQVZnQyxnQkFBTWUsUzs7a0JBQXBCbkIsSzs7O0FBcURyQixJQUFNZSxTQUFTLG1CQUFJO0FBQ2pCSyxTQUFPLEtBRFU7QUFFakJDLGFBQVcsUUFGTTtBQUdqQkMsVUFBUSxXQUhTO0FBSWpCLFNBQU87QUFDTEMsV0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBRGY7QUFFTEMsWUFBUSxlQUFlLGFBQU1GLE1BQU4sQ0FBYUcsT0FGL0IsRUFKVTtBQU9qQixZQUFVO0FBQ1JKLFdBQU8sYUFBTUMsTUFBTixDQUFhSSxLQURaO0FBRVIsV0FBTyxFQUFFQyxpQkFBaUIsYUFBTUwsTUFBTixDQUFhRyxPQUFoQztBQUZDLEdBUE87QUFXakIsOEJBQTRCLEVBQUVQLE9BQU8sS0FBVCxFQUFnQlUsVUFBVSxLQUExQjtBQVhYLENBQUosQ0FBZjs7QUFjQSxJQUFNaEIsYUFBYTtBQUNqQmlCLGVBQWEsbUJBQUk7QUFDZlIsV0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBREw7QUFFZkssY0FBVSxPQUZLO0FBR2ZFLGdCQUFZLEtBSEc7QUFJZixnQ0FBNEIsRUFBRUYsVUFBVSxNQUFaO0FBSmIsR0FBSixDQURJO0FBT2pCRyx5QkFBdUIsYUFBTVQsTUFBTixDQUFhRyxPQVBuQjtBQVFqQk8sYUFBVztBQUNUQywyQkFBdUIsTUFEZDtBQUVUQywyQkFBdUIsTUFGZDtBQUdUQyx3QkFBb0IsS0FIWDtBQUlUQyx3QkFBb0I7QUFKWDtBQVJNLENBQW5COztBQWdCQSxJQUFNMUIsWUFBWSxtQkFBSTtBQUNwQmtCLFlBQVUsTUFEVTtBQUVwQlYsU0FBTyxNQUZhO0FBR3BCRSxVQUFRLFFBSFk7QUFJcEJVLGNBQVksTUFKUTtBQUtwQlQsU0FBTyxhQUFNQyxNQUFOLENBQWFlLFVBTEE7QUFNcEIsOEJBQTRCLEVBQUVULFVBQVUsTUFBWjtBQU5SLENBQUosQ0FBbEI7O0FBU0EsSUFBTW5CLG9CQUFvQixtQkFBSTtBQUM1QlUsYUFBVyxRQURpQjtBQUU1Qm1CLFVBQVEsR0FGb0I7QUFHNUJDLGNBQVksYUFIZ0I7QUFJNUJsQixTQUFPLGFBQU1DLE1BQU4sQ0FBYUM7QUFKUSxDQUFKLENBQTFCIiwiZmlsZSI6Il9lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX2NlbnRlcmVkQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNb3ZpbmdUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aW5nVGV4dCdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVzLCBqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc1xuICAgICAgPyByZXMuc3RhdHVzQ29kZVxuICAgICAgOiAoanNvblBhZ2VSZXMgPyBqc29uUGFnZVJlcy5zdGF0dXMgOiBudWxsKVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXJFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zdGF0dXNDb2RlXG4gICAgICA/IGAgQW4gZXJyb3Igb2NjdXJyZWQgb24gc2VydmVyLmBcbiAgICAgIDogJyBBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQuJ1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBtZXRhID0gdGhpcy5wcm9wcy5jb25maWcubWV0YS5lcnJvclxuICAgIGNvbnN0IHRpdGxlID0gYCR7bWV0YS50aXRsZX0gJHt0aGlzLnByb3BzLnN0YXR1c0NvZGV9IFBhZ2Ugbm90IGZvdW5kYFxuICAgIGNvbnN0IG1vdmluZ3RleHRzdHJpbmdpZnkgPSBTdHJpbmcodGhpcy5wcm9wcy5zdGF0dXNDb2RlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtfY2VudGVyZWRCb3h9PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt2ZXJ0aWNhbHlDZW50ZXJlZH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17ZXJyb3JUZXh0fT5cbiAgICAgICAgICAgIFRoZSBwYWdlIHlvdXIgbG9va2luZyBmb3IgY2FuJ3QgYmUgZm91bmQuPGJyLz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckVycm9yKCl9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TW92aW5nVGV4dCBtb3Zpbmd0ZXh0PXttb3Zpbmd0ZXh0c3RyaW5naWZ5fSBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhvbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkhvbWUgUGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvbn0gLz5cbiAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvcmVzdW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlc3VtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUmVzdW1lIFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b259IC8+XG4gICAgICAgICAgPEJ1dHRvbkxpbmsgdXJsPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ29udGFjdCBQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBidXR0b24gPSBjc3Moe1xuICB3aWR0aDogJzYwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICc+IGEnOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBib3JkZXI6IFwiNHB4IHNvbGlkIFwiICsgdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICc+IGEnOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnkgfVxuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB3aWR0aDogJzgwJScsIGZvbnRTaXplOiAnMWVtJyB9XG59KVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBtb3Zpbmd0aXRsZTogY3NzKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMTAwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICc5MCUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnNjAwJScgfVxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTIwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICcyMCcsXG4gIH0sXG59XG5cbmNvbnN0IGVycm9yVGV4dCA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTQwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIGxpbmVIZWlnaHQ6ICcxMzAlJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEwMCUnIH1cbn0pXG5cbmNvbnN0IHZlcnRpY2FseUNlbnRlcmVkID0gY3NzKHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgekluZGV4OiAnMScsXG4gIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG59KVxuIl19