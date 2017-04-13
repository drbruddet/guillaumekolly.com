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
        _react2.default.createElement(_HeadBloc2.default, {
          title: title,
          description: meta.description,
          keywords: meta.keywords
        }),
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
          _react2.default.createElement(_ButtonLink2.default, {
            url: '/',
            title: 'Home',
            alt: 'Home Page',
            style: button
          }),
          _react2.default.createElement(_ButtonLink2.default, {
            url: '/resume',
            title: 'Resume',
            alt: 'Resume Page',
            style: button
          }),
          _react2.default.createElement(_ButtonLink2.default, {
            url: '/contact',
            title: 'Contact',
            alt: 'Contact Page',
            style: button
          })
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
  fontSize: '1.2em',
  letterSpacing: '-0.02em',
  textAlign: 'center',
  backgroundColor: _Theme.theme.colors.white,
  margin: '10px auto',
  width: '100%',
  '@media(max-width: 640px)': { width: '80%', fontSize: '1em' },
  '> a': {
    color: _Theme.theme.colors.black,
    border: '4px solid ' + _Theme.theme.colors.primary,
    display: 'block',
    padding: '10px',
    boxSizing: 'border-box'
  },
  ':hover': {
    color: _Theme.theme.colors.white,
    '> a': { backgroundColor: _Theme.theme.colors.primary }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1ldGEiLCJjb25maWciLCJlcnJvciIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ2ZXJ0aWNhbHlDZW50ZXJlZCIsImVycm9yVGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImJ1dHRvbiIsInJlcyIsImpzb25QYWdlUmVzIiwic3RhdHVzIiwiQ29tcG9uZW50IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwid2hpdGUiLCJtYXJnaW4iLCJ3aWR0aCIsImNvbG9yIiwiYmxhY2siLCJib3JkZXIiLCJwcmltYXJ5IiwiZGlzcGxheSIsInBhZGRpbmciLCJib3hTaXppbmciLCJtb3Zpbmd0aXRsZSIsImxpbmVIZWlnaHQiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJzaGFkb3dfbW91c2VfcG9zX3giLCJzaGFkb3dfbW91c2VfcG9zX3kiLCJsaWdodF90ZXh0IiwiekluZGV4IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7O2tDQVlMO0FBQ1osYUFBTyxLQUFLQyxLQUFMLENBQVdDLFVBQVgscUNBRUgsK0JBRko7QUFHRDs7OzZCQUVTO0FBQ1IsVUFBTUMsT0FBTyxLQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JELElBQWxCLENBQXVCRSxLQUFwQztBQUNBLFVBQU1DLFFBQVdILEtBQUtHLEtBQWhC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O0FBSTVCakIsU0FBTyxhQUFNSixNQUFOLENBQWFLO0FBSlEsQ0FBSixDQUExQiIsImZpbGUiOiJfZXJyb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IHsgdGhlbWUsIF9jZW50ZXJlZEJveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgQnV0dG9uTGluayBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkxpbmsnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcywganNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNcbiAgICAgID8gcmVzLnN0YXR1c0NvZGVcbiAgICAgIDogKGpzb25QYWdlUmVzID8ganNvblBhZ2VSZXMuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZSxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc3RhdHVzQ29kZVxuICAgICAgPyBgIEFuIGVycm9yIG9jY3VycmVkIG9uIHNlcnZlci5gXG4gICAgICA6ICcgQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50LidcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbWV0YSA9IHRoaXMucHJvcHMuY29uZmlnLm1ldGEuZXJyb3JcbiAgICBjb25zdCB0aXRsZSA9IGAke21ldGEudGl0bGV9ICR7dGhpcy5wcm9wcy5zdGF0dXNDb2RlfSBQYWdlIG5vdCBmb3VuZGBcbiAgICBjb25zdCBtb3Zpbmd0ZXh0c3RyaW5naWZ5ID0gU3RyaW5nKHRoaXMucHJvcHMuc3RhdHVzQ29kZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17X2NlbnRlcmVkQm94fT5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfVxuICAgICAgICAvPlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ZlcnRpY2FseUNlbnRlcmVkfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtlcnJvclRleHR9PlxuICAgICAgICAgICAgVGhlIHBhZ2UgeW91ciBsb29raW5nIGZvciBjYW4ndCBiZSBmb3VuZC48YnIvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyRXJyb3IoKX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxNb3ZpbmdUZXh0IG1vdmluZ3RleHQ9e21vdmluZ3RleHRzdHJpbmdpZnl9IHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rXG4gICAgICAgICAgICB1cmw9XCIvXCJcbiAgICAgICAgICAgIHRpdGxlPVwiSG9tZVwiXG4gICAgICAgICAgICBhbHQ9XCJIb21lIFBhZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e2J1dHRvbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25MaW5rXG4gICAgICAgICAgICB1cmw9XCIvcmVzdW1lXCJcbiAgICAgICAgICAgIHRpdGxlPVwiUmVzdW1lXCJcbiAgICAgICAgICAgIGFsdD1cIlJlc3VtZSBQYWdlXCJcbiAgICAgICAgICAgIHN0eWxlPXtidXR0b259XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uTGlua1xuICAgICAgICAgICAgdXJsPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICAgIGFsdD1cIkNvbnRhY3QgUGFnZVwiXG4gICAgICAgICAgICBzdHlsZT17YnV0dG9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJ1dHRvbiA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMS4yZW0nLFxuICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDJlbScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICBtYXJnaW46ICcxMHB4IGF1dG8nLFxuICB3aWR0aDogJzEwMCUnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB3aWR0aDogJzgwJScsIGZvbnRTaXplOiAnMWVtJyB9LFxuICAnPiBhJzoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgYm9yZGVyOiAnNHB4IHNvbGlkICcgKyB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICc+IGEnOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnkgfVxuICB9XG59KVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBtb3Zpbmd0aXRsZTogY3NzKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMTAwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICc5MCUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnNjAwJScgfVxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTIwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICcyMCcsXG4gIH0sXG59XG5cbmNvbnN0IGVycm9yVGV4dCA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTQwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIGxpbmVIZWlnaHQ6ICcxMzAlJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEwMCUnIH1cbn0pXG5cbmNvbnN0IHZlcnRpY2FseUNlbnRlcmVkID0gY3NzKHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgekluZGV4OiAnMScsXG4gIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG59KVxuIl19