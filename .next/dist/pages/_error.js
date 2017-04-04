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

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

var _ButtonLink = require('../components/ButtonLink');

var _ButtonLink2 = _interopRequireDefault(_ButtonLink);

var _Theme = require('../components/layout/Theme');

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
        _react2.default.createElement(_HeadBloc2.default, { title: title, description: meta.description, keywords: meta.keywords }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(
          'div',
          { className: verticalyCentered },
          _react2.default.createElement(
            'h2',
            { className: errorText },
            'The page your looking for can\'t be found.',
            this.renderError()
          ),
          _react2.default.createElement(_MovingText2.default, { movingtext: movingtextstringify, style: movingText }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/', title: 'Home', alt: 'Home Page', style: button }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/resume', title: 'Resume', alt: 'Resume Page', style: button }),
          _react2.default.createElement(_ButtonLink2.default, { url: '/contact', title: 'Contact', alt: 'Contact Page', style: button })
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
  width: '160px',
  border: "4px solid " + _Theme.theme.colors.primary,
  ':hover': {
    backgroundColor: _Theme.theme.colors.primary,
    color: _Theme.theme.colors.white,
    '> a': { color: _Theme.theme.colors.white }
  },
  '> a': {
    color: _Theme.theme.colors.black
  }
});

var movingText = {
  background: (0, _css2.default)({
    height: '100%',
    width: '100%'
  }),
  movingtitle: (0, _css2.default)({
    color: _Theme.theme.colors.black,
    fontSize: '1000%',
    '@media(max-width: 640px)': { fontSize: '300%' }
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
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '90%'
  }
});

var verticalyCentered = (0, _css2.default)({
  padding: '2em',
  maxWidth: '50%',
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: _Theme.theme.colors.black
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1ldGEiLCJjb25maWciLCJlcnJvciIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ2ZXJ0aWNhbHlDZW50ZXJlZCIsImVycm9yVGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImJ1dHRvbiIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJib3JkZXIiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aGl0ZSIsImJsYWNrIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIm1vdmluZ3RpdGxlIiwiZm9udFNpemUiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJzaGFkb3dfbW91c2VfcG9zX3giLCJzaGFkb3dfbW91c2VfcG9zX3kiLCJwYWRkaW5nIiwibWFyZ2luIiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7OztrQ0FZTDtBQUNaLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxVQUFYLHFDQUVILCtCQUZKO0FBR0Q7Ozs2QkFFUztBQUNSLFVBQU1DLE9BQU8sS0FBS0YsS0FBTCxDQUFXRyxNQUFYLENBQWtCRCxJQUFsQixDQUF1QkUsS0FBcEM7QUFDQSxVQUFNQyxRQUFXSCxLQUFLRyxLQUFoQixTQUF5QixLQUFLTCxLQUFMLENBQVdDLFVBQXBDLG9CQUFOO0FBQ0EsVUFBTUssc0JBQXNCQyxPQUFPLEtBQUtQLEtBQUwsQ0FBV0MsVUFBbEIsQ0FBNUI7O0FBRUEsYUFDRTtBQUFBO0FBQUEsVUFBSyw4QkFBTDtBQUNFLDREQUFVLE9BQU9JLEtBQWpCLEVBQXdCLGFBQWFILEtBQUtNLFdBQTFDLEVBQXVELFVBQVVOLEtBQUtPLFFBQXRFLEdBREY7QUFFRSxxRUFGRjtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVdDLGlCQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFJLFdBQVdDLFNBQWY7QUFBQTtBQUVHLGlCQUFLQyxXQUFMO0FBRkgsV0FERjtBQUtFLGdFQUFZLFlBQVlOLG1CQUF4QixFQUE2QyxPQUFPTyxVQUFwRCxHQUxGO0FBTUUsZ0VBQVksS0FBSSxHQUFoQixFQUFvQixPQUFNLE1BQTFCLEVBQWlDLEtBQUksV0FBckMsRUFBaUQsT0FBT0MsTUFBeEQsR0FORjtBQU9FLGdFQUFZLEtBQUksU0FBaEIsRUFBMEIsT0FBTSxRQUFoQyxFQUF5QyxLQUFJLGFBQTdDLEVBQTJELE9BQU9BLE1BQWxFLEdBUEY7QUFRRSxnRUFBWSxLQUFJLFVBQWhCLEVBQTJCLE9BQU0sU0FBakMsRUFBMkMsS0FBSSxjQUEvQyxFQUE4RCxPQUFPQSxNQUFyRTtBQVJGO0FBSEYsT0FERjtBQWdCRDs7OzBDQXJDNkM7QUFBQSxVQUFwQkMsR0FBb0IsUUFBcEJBLEdBQW9CO0FBQUEsVUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUM1QyxVQUFNZixhQUFhYyxNQUNmQSxJQUFJZCxVQURXLEdBRWRlLGNBQWNBLFlBQVlDLE1BQTFCLEdBQW1DLElBRnhDO0FBR0EsYUFBTztBQUNMaEIsOEJBREs7QUFFTEU7QUFGSyxPQUFQO0FBSUQ7OztFQVZnQyxnQkFBTWUsUzs7a0JBQXBCbkIsSzs7O0FBMENyQixJQUFNZSxTQUFTLG1CQUFJO0FBQ2pCSyxTQUFPLE9BRFU7QUFFakJDLFVBQVEsZUFBZSxhQUFNQyxNQUFOLENBQWFDLE9BRm5CO0FBR2pCLFlBQVU7QUFDUkMscUJBQWlCLGFBQU1GLE1BQU4sQ0FBYUMsT0FEdEI7QUFFUkUsV0FBTyxhQUFNSCxNQUFOLENBQWFJLEtBRlo7QUFHUixXQUFPLEVBQUVELE9BQU8sYUFBTUgsTUFBTixDQUFhSSxLQUF0QjtBQUhDLEdBSE87QUFRakIsU0FBTztBQUNMRCxXQUFPLGFBQU1ILE1BQU4sQ0FBYUs7QUFEZjtBQVJVLENBQUosQ0FBZjs7QUFhQSxJQUFNYixhQUFhO0FBQ2pCYyxjQUFZLG1CQUFJO0FBQ2RDLFlBQVEsTUFETTtBQUVkVCxXQUFPO0FBRk8sR0FBSixDQURLO0FBS2pCVSxlQUFhLG1CQUFJO0FBQ2ZMLFdBQU8sYUFBTUgsTUFBTixDQUFhSyxLQURMO0FBRWZJLGNBQVUsT0FGSztBQUdmLGdDQUE0QixFQUFFQSxVQUFVLE1BQVo7QUFIYixHQUFKLENBTEk7QUFVakJDLHlCQUF1QixhQUFNVixNQUFOLENBQWFDLE9BVm5CO0FBV2pCVSxhQUFXO0FBQ1RDLDJCQUF1QixNQURkO0FBRVRDLDJCQUF1QixNQUZkO0FBR1RDLHdCQUFvQixLQUhYO0FBSVRDLHdCQUFvQjtBQUpYO0FBWE0sQ0FBbkI7O0FBbUJBLElBQU16QixZQUFZLG1CQUFJO0FBQ3BCbUIsWUFBVSxNQURVO0FBRXBCTyxXQUFTLEdBRlc7QUFHcEJDLFVBQVEsR0FIWTtBQUlwQiw4QkFBNEI7QUFDMUJSLGNBQVU7QUFEZ0I7QUFKUixDQUFKLENBQWxCOztBQVNBLElBQU1wQixvQkFBb0IsbUJBQUk7QUFDNUIyQixXQUFTLEtBRG1CO0FBRTVCRSxZQUFVLEtBRmtCO0FBRzVCQyxhQUFXLFFBSGlCO0FBSTVCQyxVQUFRLEdBSm9CO0FBSzVCZCxjQUFZLGFBTGdCO0FBTTVCSCxTQUFPLGFBQU1ILE1BQU4sQ0FBYUs7QUFOUSxDQUFKLENBQTFCIiwiZmlsZSI6Il9lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNb3ZpbmdUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aW5nVGV4dCdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCB7IHRoZW1lLCBfY2VudGVyZWRCb3ggfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVzLCBqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc1xuICAgICAgPyByZXMuc3RhdHVzQ29kZVxuICAgICAgOiAoanNvblBhZ2VSZXMgPyBqc29uUGFnZVJlcy5zdGF0dXMgOiBudWxsKVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXJFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zdGF0dXNDb2RlXG4gICAgICA/IGAgQW4gZXJyb3Igb2NjdXJyZWQgb24gc2VydmVyLmBcbiAgICAgIDogJyBBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQuJ1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBtZXRhID0gdGhpcy5wcm9wcy5jb25maWcubWV0YS5lcnJvclxuICAgIGNvbnN0IHRpdGxlID0gYCR7bWV0YS50aXRsZX0gJHt0aGlzLnByb3BzLnN0YXR1c0NvZGV9IFBhZ2Ugbm90IGZvdW5kYFxuICAgIGNvbnN0IG1vdmluZ3RleHRzdHJpbmdpZnkgPSBTdHJpbmcodGhpcy5wcm9wcy5zdGF0dXNDb2RlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtfY2VudGVyZWRCb3h9PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn0ga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dmVydGljYWx5Q2VudGVyZWR9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Vycm9yVGV4dH0+XG4gICAgICAgICAgICBUaGUgcGFnZSB5b3VyIGxvb2tpbmcgZm9yIGNhbid0IGJlIGZvdW5kLlxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXJyb3IoKX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxNb3ZpbmdUZXh0IG1vdmluZ3RleHQ9e21vdmluZ3RleHRzdHJpbmdpZnl9IHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9cIiB0aXRsZT1cIkhvbWVcIiBhbHQ9XCJIb21lIFBhZ2VcIiBzdHlsZT17YnV0dG9ufSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9yZXN1bWVcIiB0aXRsZT1cIlJlc3VtZVwiIGFsdD1cIlJlc3VtZSBQYWdlXCIgc3R5bGU9e2J1dHRvbn0gLz5cbiAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvY29udGFjdFwiIHRpdGxlPVwiQ29udGFjdFwiIGFsdD1cIkNvbnRhY3QgUGFnZVwiIHN0eWxlPXtidXR0b259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJ1dHRvbiA9IGNzcyh7XG4gIHdpZHRoOiAnMTYwcHgnLFxuICBib3JkZXI6IFwiNHB4IHNvbGlkIFwiICsgdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICc+IGEnOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUgfVxuICB9LFxuICAnPiBhJzoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gIH1cbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IGNzcyh7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSksXG4gIG1vdmluZ3RpdGxlOiBjc3Moe1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgZm9udFNpemU6ICcxMDAwJScsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICczMDAlJyB9XG4gIH0pLFxuICBtb3Zpbmd0aXRsZWJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICBhbmltYXRpb246IHtcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3g6ICctMTAwJyxcbiAgICB0cmFuc2Zvcm1fbW91c2VfcG9zX3k6ICctMTAwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3g6ICctMjAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeTogJzIwJyxcbiAgfSxcbn1cblxuY29uc3QgZXJyb3JUZXh0ID0gY3NzKHtcbiAgZm9udFNpemU6ICcxNDAlJyxcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzkwJSdcbiAgfVxufSlcblxuY29uc3QgdmVydGljYWx5Q2VudGVyZWQgPSBjc3Moe1xuICBwYWRkaW5nOiAnMmVtJyxcbiAgbWF4V2lkdGg6ICc1MCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbn0pXG4iXX0=