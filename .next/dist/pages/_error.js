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
  width: '150px',
  border: "4px solid " + _Theme.theme.colors.primary,
  '> a': { color: _Theme.theme.colors.black },
  ':hover': {
    backgroundColor: _Theme.theme.colors.primary,
    color: _Theme.theme.colors.white,
    '> a': { color: _Theme.theme.colors.white }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1ldGEiLCJjb25maWciLCJlcnJvciIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ2ZXJ0aWNhbHlDZW50ZXJlZCIsImVycm9yVGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImJ1dHRvbiIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJib3JkZXIiLCJjb2xvcnMiLCJwcmltYXJ5IiwiY29sb3IiLCJibGFjayIsImJhY2tncm91bmRDb2xvciIsIndoaXRlIiwiZm9udFNpemUiLCJtb3Zpbmd0aXRsZSIsImxpbmVIZWlnaHQiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJzaGFkb3dfbW91c2VfcG9zX3giLCJzaGFkb3dfbW91c2VfcG9zX3kiLCJtYXJnaW4iLCJsaWdodF90ZXh0IiwidGV4dEFsaWduIiwiekluZGV4IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7O2tDQVlMO0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLFVBQVgscUNBRUgsK0JBRko7QUFHRDs7OzZCQUVTO0FBQ1IsVUFBTUMsT0FBTyxLQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JELElBQWxCLENBQXVCRSxLQUFwQztBQUNBLFVBQU1DLFFBQVdILEtBQUtHLEtBQWhCLFNBQXlCLEtBQUtMLEtBQUwsQ0FBV0MsVUFBcEMsb0JBQU47QUFDQSxVQUFNSyxzQkFBc0JDLE9BQU8sS0FBS1AsS0FBTCxDQUFXQyxVQUFsQixDQUE1Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLDhCQUFMO0FBQ0UsNERBQVUsT0FBT0ksS0FBakI7QUFDVSx1QkFBYUgsS0FBS00sV0FENUI7QUFFVSxvQkFBVU4sS0FBS08sUUFGekIsR0FERjtBQUlFLHFFQUpGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBV0MsaUJBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBV0MsU0FBZjtBQUFBO0FBQzJDLHFEQUQzQztBQUVHLGlCQUFLQyxXQUFMO0FBRkgsV0FERjtBQUtFLGdFQUFZLFlBQVlOLG1CQUF4QixFQUE2QyxPQUFPTyxVQUFwRCxHQUxGO0FBTUUsZ0VBQVksS0FBSSxHQUFoQjtBQUNZLG1CQUFNLE1BRGxCO0FBRVksaUJBQUksV0FGaEI7QUFHWSxtQkFBT0MsTUFIbkIsR0FORjtBQVVFLGdFQUFZLEtBQUksU0FBaEI7QUFDWSxtQkFBTSxRQURsQjtBQUVZLGlCQUFJLGFBRmhCO0FBR1ksbUJBQU9BLE1BSG5CLEdBVkY7QUFjRSxnRUFBWSxLQUFJLFVBQWhCO0FBQ1ksbUJBQU0sU0FEbEI7QUFFWSxpQkFBSSxjQUZoQjtBQUdZLG1CQUFPQSxNQUhuQjtBQWRGO0FBTEYsT0FERjtBQTJCRDs7OzBDQWhENkM7QUFBQSxVQUFwQkMsR0FBb0IsUUFBcEJBLEdBQW9CO0FBQUEsVUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUM1QyxVQUFNZixhQUFhYyxNQUNmQSxJQUFJZCxVQURXLEdBRWRlLGNBQWNBLFlBQVlDLE1BQTFCLEdBQW1DLElBRnhDO0FBR0EsYUFBTztBQUNMaEIsOEJBREs7QUFFTEU7QUFGSyxPQUFQO0FBSUQ7OztFQVZnQyxnQkFBTWUsUzs7a0JBQXBCbkIsSzs7O0FBcURyQixJQUFNZSxTQUFTLG1CQUFJO0FBQ2pCSyxTQUFPLE9BRFU7QUFFakJDLFVBQVEsZUFBZSxhQUFNQyxNQUFOLENBQWFDLE9BRm5CO0FBR2pCLFNBQU8sRUFBRUMsT0FBTyxhQUFNRixNQUFOLENBQWFHLEtBQXRCLEVBSFU7QUFJakIsWUFBVTtBQUNSQyxxQkFBaUIsYUFBTUosTUFBTixDQUFhQyxPQUR0QjtBQUVSQyxXQUFPLGFBQU1GLE1BQU4sQ0FBYUssS0FGWjtBQUdSLFdBQU8sRUFBRUgsT0FBTyxhQUFNRixNQUFOLENBQWFLLEtBQXRCO0FBSEMsR0FKTztBQVNqQiw4QkFBNEIsRUFBRVAsT0FBTyxLQUFULEVBQWdCUSxVQUFVLEtBQTFCO0FBVFgsQ0FBSixDQUFmOztBQVlBLElBQU1kLGFBQWE7QUFDakJlLGVBQWEsbUJBQUk7QUFDZkwsV0FBTyxhQUFNRixNQUFOLENBQWFHLEtBREw7QUFFZkcsY0FBVSxPQUZLO0FBR2ZFLGdCQUFZLEtBSEc7QUFJZixnQ0FBNEIsRUFBRUYsVUFBVSxNQUFaO0FBSmIsR0FBSixDQURJO0FBT2pCRyx5QkFBdUIsYUFBTVQsTUFBTixDQUFhQyxPQVBuQjtBQVFqQlMsYUFBVztBQUNUQywyQkFBdUIsTUFEZDtBQUVUQywyQkFBdUIsTUFGZDtBQUdUQyx3QkFBb0IsS0FIWDtBQUlUQyx3QkFBb0I7QUFKWDtBQVJNLENBQW5COztBQWdCQSxJQUFNeEIsWUFBWSxtQkFBSTtBQUNwQmdCLFlBQVUsTUFEVTtBQUVwQlIsU0FBTyxNQUZhO0FBR3BCaUIsVUFBUSxRQUhZO0FBSXBCUCxjQUFZLE1BSlE7QUFLcEJOLFNBQU8sYUFBTUYsTUFBTixDQUFhZ0IsVUFMQTtBQU1wQiw4QkFBNEIsRUFBRVYsVUFBVSxNQUFaO0FBTlIsQ0FBSixDQUFsQjs7QUFTQSxJQUFNakIsb0JBQW9CLG1CQUFJO0FBQzVCNEIsYUFBVyxRQURpQjtBQUU1QkMsVUFBUSxHQUZvQjtBQUc1QkMsY0FBWSxhQUhnQjtBQUk1QmpCLFNBQU8sYUFBTUYsTUFBTixDQUFhRztBQUpRLENBQUosQ0FBMUIiLCJmaWxlIjoiX2Vycm9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCB7IHRoZW1lLCBfY2VudGVyZWRCb3ggfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25MaW5rJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXMsIGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzXG4gICAgICA/IHJlcy5zdGF0dXNDb2RlXG4gICAgICA6IChqc29uUGFnZVJlcyA/IGpzb25QYWdlUmVzLnN0YXR1cyA6IG51bGwpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGUsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXR1c0NvZGVcbiAgICAgID8gYCBBbiBlcnJvciBvY2N1cnJlZCBvbiBzZXJ2ZXIuYFxuICAgICAgOiAnIEFuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudC4nXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IG1ldGEgPSB0aGlzLnByb3BzLmNvbmZpZy5tZXRhLmVycm9yXG4gICAgY29uc3QgdGl0bGUgPSBgJHttZXRhLnRpdGxlfSAke3RoaXMucHJvcHMuc3RhdHVzQ29kZX0gUGFnZSBub3QgZm91bmRgXG4gICAgY29uc3QgbW92aW5ndGV4dHN0cmluZ2lmeSA9IFN0cmluZyh0aGlzLnByb3BzLnN0YXR1c0NvZGUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e19jZW50ZXJlZEJveH0+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfSAvPlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ZlcnRpY2FseUNlbnRlcmVkfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtlcnJvclRleHR9PlxuICAgICAgICAgICAgVGhlIHBhZ2UgeW91ciBsb29raW5nIGZvciBjYW4ndCBiZSBmb3VuZC48YnIvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXJyb3IoKX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxNb3ZpbmdUZXh0IG1vdmluZ3RleHQ9e21vdmluZ3RleHRzdHJpbmdpZnl9IHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9cIlxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSG9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSG9tZSBQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9ufSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHVybD1cIi9yZXN1bWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzdW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJSZXN1bWUgUGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvbn0gLz5cbiAgICAgICAgICA8QnV0dG9uTGluayB1cmw9XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDb250YWN0IFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJ1dHRvbiA9IGNzcyh7XG4gIHdpZHRoOiAnMTUwcHgnLFxuICBib3JkZXI6IFwiNHB4IHNvbGlkIFwiICsgdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICc+IGEnOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssIH0sXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICc+IGEnOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUgfVxuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB3aWR0aDogJzgwJScsIGZvbnRTaXplOiAnMWVtJyB9XG59KVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBtb3Zpbmd0aXRsZTogY3NzKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMTAwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICc5MCUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnNjAwJScgfVxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTIwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICcyMCcsXG4gIH0sXG59XG5cbmNvbnN0IGVycm9yVGV4dCA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTQwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIGxpbmVIZWlnaHQ6ICcxMzAlJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEwMCUnIH1cbn0pXG5cbmNvbnN0IHZlcnRpY2FseUNlbnRlcmVkID0gY3NzKHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgekluZGV4OiAnMScsXG4gIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG59KVxuIl19