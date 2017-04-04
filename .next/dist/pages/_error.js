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

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _glamor = require('glamor');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

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
        { className: centeredbox },
        _react2.default.createElement(_HeadBloc2.default, { title: title, description: meta.description, keywords: meta.keywords }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(
          'div',
          { className: centeredvert },
          _react2.default.createElement(
            'h2',
            { className: errortext },
            'The page your looking for can\'t be found.',
            this.renderError()
          ),
          _react2.default.createElement(_MovingText2.default, { movingtext: movingtextstringify, style: movingText }),
          _react2.default.createElement(
            _link2.default,
            { href: '/' },
            _react2.default.createElement(
              'a',
              { className: link },
              'Home Page'
            )
          )
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


var movingText = {
  background: (0, _glamor.style)({
    height: '100%',
    width: '100%'
  }),
  movingtitle: (0, _glamor.style)({
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

var errortext = (0, _css2.default)({
  fontSize: '140%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': { fontSize: '90%' }
});

var errornumber = (0, _css2.default)({
  fontSize: '2000%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '600%',
    padding: '20px 10px',
    margin: 'auto'
  }
});

var link = (0, _css2.default)({
  color: '#242424',
  textDecoration: 'none',
  border: '3px solid #242424',
  padding: '10px'
});

var centeredbox = (0, _css2.default)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
});

var centeredvert = (0, _css2.default)({
  padding: '2em',
  maxWidth: '50%',
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: _Theme.theme.colors.black
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsIm1ldGEiLCJjb25maWciLCJlcnJvciIsInRpdGxlIiwibW92aW5ndGV4dHN0cmluZ2lmeSIsIlN0cmluZyIsImNlbnRlcmVkYm94IiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImNlbnRlcmVkdmVydCIsImVycm9ydGV4dCIsInJlbmRlckVycm9yIiwibW92aW5nVGV4dCIsImxpbmsiLCJyZXMiLCJqc29uUGFnZVJlcyIsInN0YXR1cyIsIkNvbXBvbmVudCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1vdmluZ3RpdGxlIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSIsInBhZGRpbmciLCJtYXJnaW4iLCJlcnJvcm51bWJlciIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwiekluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7a0NBWUw7QUFDWixhQUFPLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxxQ0FFSCwrQkFGSjtBQUdEOzs7NkJBRVM7QUFDUixVQUFNQyxPQUFPLEtBQUtGLEtBQUwsQ0FBV0csTUFBWCxDQUFrQkQsSUFBbEIsQ0FBdUJFLEtBQXBDO0FBQ0EsVUFBTUMsUUFBV0gsS0FBS0csS0FBaEIsU0FBeUIsS0FBS0wsS0FBTCxDQUFXQyxVQUFwQyxvQkFBTjtBQUNBLFVBQU1LLHNCQUFzQkMsT0FBTyxLQUFLUCxLQUFMLENBQVdDLFVBQWxCLENBQTVCOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV08sV0FBaEI7QUFDRSw0REFBVSxPQUFPSCxLQUFqQixFQUF3QixhQUFhSCxLQUFLTyxXQUExQyxFQUF1RCxVQUFVUCxLQUFLUSxRQUF0RSxHQURGO0FBRUUscUVBRkY7QUFHRTtBQUFBO0FBQUEsWUFBSyxXQUFXQyxZQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFJLFdBQVdDLFNBQWY7QUFBQTtBQUVHLGlCQUFLQyxXQUFMO0FBRkgsV0FERjtBQUtFLGdFQUFZLFlBQVlQLG1CQUF4QixFQUE2QyxPQUFPUSxVQUFwRCxHQUxGO0FBTUU7QUFBQTtBQUFBLGNBQU0sTUFBSyxHQUFYO0FBQWU7QUFBQTtBQUFBLGdCQUFHLFdBQVdDLElBQWQ7QUFBQTtBQUFBO0FBQWY7QUFORjtBQUhGLE9BREY7QUFjRDs7OzBDQW5DNkM7QUFBQSxVQUFwQkMsR0FBb0IsUUFBcEJBLEdBQW9CO0FBQUEsVUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUM1QyxVQUFNaEIsYUFBYWUsTUFDZkEsSUFBSWYsVUFEVyxHQUVkZ0IsY0FBY0EsWUFBWUMsTUFBMUIsR0FBbUMsSUFGeEM7QUFHQSxhQUFPO0FBQ0xqQiw4QkFESztBQUVMRTtBQUZLLE9BQVA7QUFJRDs7O0VBVmdDLGdCQUFNZ0IsUzs7a0JBQXBCcEIsSzs7O0FBd0NyQixJQUFNZSxhQUFhO0FBQ2pCTSxjQUFZLG1CQUFNO0FBQ2hCQyxZQUFRLE1BRFE7QUFFaEJDLFdBQU87QUFGUyxHQUFOLENBREs7QUFLakJDLGVBQWEsbUJBQU07QUFDakJDLFdBQU8sYUFBTUMsTUFBTixDQUFhQyxLQURIO0FBRWpCQyxjQUFVLE9BRk87QUFHakIsZ0NBQTRCLEVBQUVBLFVBQVUsTUFBWjtBQUhYLEdBQU4sQ0FMSTtBQVVqQkMseUJBQXVCLGFBQU1ILE1BQU4sQ0FBYUksT0FWbkI7QUFXakJDLGFBQVc7QUFDVEMsMkJBQXVCLE1BRGQ7QUFFVEMsMkJBQXVCLE1BRmQ7QUFHVEMsd0JBQW9CLEtBSFg7QUFJVEMsd0JBQW9CO0FBSlg7QUFYTSxDQUFuQjs7QUFtQkEsSUFBTXRCLFlBQVksbUJBQUk7QUFDcEJlLFlBQVUsTUFEVTtBQUVwQlEsV0FBUyxHQUZXO0FBR3BCQyxVQUFRLEdBSFk7QUFJcEIsOEJBQTRCLEVBQUVULFVBQVUsS0FBWjtBQUpSLENBQUosQ0FBbEI7O0FBT0EsSUFBTVUsY0FBYyxtQkFBSTtBQUN0QlYsWUFBVSxPQURZO0FBRXRCUSxXQUFTLEdBRmE7QUFHdEJDLFVBQVEsR0FIYztBQUl0Qiw4QkFBNEI7QUFDMUJULGNBQVUsTUFEZ0I7QUFFMUJRLGFBQVMsV0FGaUI7QUFHMUJDLFlBQVE7QUFIa0I7QUFKTixDQUFKLENBQXBCOztBQVdBLElBQU1yQixPQUFPLG1CQUFJO0FBQ2ZTLFNBQU8sU0FEUTtBQUVmYyxrQkFBZ0IsTUFGRDtBQUdmQyxVQUFRLG1CQUhPO0FBSWZKLFdBQVM7QUFKTSxDQUFKLENBQWI7O0FBT0EsSUFBTTNCLGNBQWMsbUJBQUk7QUFDdEJnQyxXQUFTLE1BRGE7QUFFdEJDLGNBQVksUUFGVTtBQUd0QkMsa0JBQWdCLFFBSE07QUFJdEJwQixTQUFPLE9BSmU7QUFLdEJELFVBQVE7QUFMYyxDQUFKLENBQXBCOztBQVFBLElBQU1WLGVBQWUsbUJBQUk7QUFDdkJ3QixXQUFTLEtBRGM7QUFFdkJRLFlBQVUsS0FGYTtBQUd2QkMsYUFBVyxRQUhZO0FBSXZCQyxVQUFRLEdBSmU7QUFLdkJ6QixjQUFZLGFBTFc7QUFNdkJJLFNBQU8sYUFBTUMsTUFBTixDQUFhQztBQU5HLENBQUosQ0FBckIiLCJmaWxlIjoiX2Vycm9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXMsIGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzXG4gICAgICA/IHJlcy5zdGF0dXNDb2RlXG4gICAgICA6IChqc29uUGFnZVJlcyA/IGpzb25QYWdlUmVzLnN0YXR1cyA6IG51bGwpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGUsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnN0YXR1c0NvZGVcbiAgICAgID8gYCBBbiBlcnJvciBvY2N1cnJlZCBvbiBzZXJ2ZXIuYFxuICAgICAgOiAnIEFuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudC4nXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IG1ldGEgPSB0aGlzLnByb3BzLmNvbmZpZy5tZXRhLmVycm9yXG4gICAgY29uc3QgdGl0bGUgPSBgJHttZXRhLnRpdGxlfSAke3RoaXMucHJvcHMuc3RhdHVzQ29kZX0gUGFnZSBub3QgZm91bmRgXG4gICAgY29uc3QgbW92aW5ndGV4dHN0cmluZ2lmeSA9IFN0cmluZyh0aGlzLnByb3BzLnN0YXR1c0NvZGUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NlbnRlcmVkYm94fT5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259IGtleXdvcmRzPXttZXRhLmtleXdvcmRzfSAvPlxuICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NlbnRlcmVkdmVydH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17ZXJyb3J0ZXh0fT5cbiAgICAgICAgICAgIFRoZSBwYWdlIHlvdXIgbG9va2luZyBmb3IgY2FuJ3QgYmUgZm91bmQuXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJFcnJvcigpfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE1vdmluZ1RleHQgbW92aW5ndGV4dD17bW92aW5ndGV4dHN0cmluZ2lmeX0gc3R5bGU9e21vdmluZ1RleHR9IC8+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e2xpbmt9PkhvbWUgUGFnZTwvYT48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMTAwMCUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnMzAwJScgfVxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTIwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICcyMCcsXG4gIH0sXG59XG5cbmNvbnN0IGVycm9ydGV4dCA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMTQwJScsXG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnOTAlJyB9XG59KVxuXG5jb25zdCBlcnJvcm51bWJlciA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMjAwMCUnLFxuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnNjAwJScsXG4gICAgcGFkZGluZzogJzIwcHggMTBweCcsXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gIH1cbn0pXG5cbmNvbnN0IGxpbmsgPSBjc3Moe1xuICBjb2xvcjogJyMyNDI0MjQnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBib3JkZXI6ICczcHggc29saWQgIzI0MjQyNCcsXG4gIHBhZGRpbmc6ICcxMHB4Jyxcbn0pXG5cbmNvbnN0IGNlbnRlcmVkYm94ID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxufSlcblxuY29uc3QgY2VudGVyZWR2ZXJ0ID0gY3NzKHtcbiAgcGFkZGluZzogJzJlbScsXG4gIG1heFdpZHRoOiAnNTAlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgekluZGV4OiAnMScsXG4gIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG59KVxuIl19