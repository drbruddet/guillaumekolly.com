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

var _reactParticlesJs = require('react-particles-js');

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullBackground = function (_React$Component) {
  (0, _inherits3.default)(FullBackground, _React$Component);

  function FullBackground() {
    (0, _classCallCheck3.default)(this, FullBackground);
    return (0, _possibleConstructorReturn3.default)(this, (FullBackground.__proto__ || (0, _getPrototypeOf2.default)(FullBackground)).apply(this, arguments));
  }

  (0, _createClass3.default)(FullBackground, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: background },
        _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: {
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: { value: "#63E7AF" },
              line_linked: {
                enable: true,
                distance: 130,
                color: "#000",
                opacity: 0.2,
                width: 2
              },
              move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out'
              },
              retina_detect: true
            }
          } })
      );
    }
  }]);
  return FullBackground;
}(_react2.default.Component);

exports.default = FullBackground;


var background = (0, _css2.default)({
  backgroundColor: '#fff',
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: '0',
  left: '0',
  zIndex: '-1'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiRnVsbEJhY2tncm91bmQiLCJiYWNrZ3JvdW5kIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm9wYWNpdHkiLCJ3aWR0aCIsIm1vdmUiLCJzcGVlZCIsImRpcmVjdGlvbiIsInJhbmRvbSIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJyZXRpbmFfZGV0ZWN0IiwiQ29tcG9uZW50IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiekluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7OzZCQUVWO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXQyxVQUFoQjtBQUNFLG9FQUFXLFFBQU8sT0FBbEIsRUFBMEIsT0FBTSxPQUFoQyxFQUF3QyxRQUFRO0FBQzlDQyx1QkFBVztBQUNUQyxzQkFBUTtBQUNOQyx1QkFBTyxHQUREO0FBRU5DLHlCQUFTO0FBQ1BDLDBCQUFRLElBREQ7QUFFUEMsOEJBQVk7QUFGTDtBQUZILGVBREM7QUFRVEMscUJBQU8sRUFBRUosT0FBTyxTQUFULEVBUkU7QUFTVEssMkJBQWE7QUFDWEgsd0JBQVEsSUFERztBQUVYSSwwQkFBVSxHQUZDO0FBR1hGLHVCQUFPLE1BSEk7QUFJWEcseUJBQVMsR0FKRTtBQUtYQyx1QkFBTztBQUxJLGVBVEo7QUFnQlRDLG9CQUFNO0FBQ0pQLHdCQUFRLElBREo7QUFFSlEsdUJBQU8sQ0FGSDtBQUdKQywyQkFBVyxNQUhQO0FBSUpDLHdCQUFRLEtBSko7QUFLSkMsMEJBQVUsS0FMTjtBQU1KQywwQkFBVTtBQU5OLGVBaEJHO0FBd0JUQyw2QkFBZTtBQXhCTjtBQURtQyxXQUFoRDtBQURGLE9BREY7QUFnQ0Q7OztFQW5DeUMsZ0JBQU1DLFM7O2tCQUE3QnBCLGM7OztBQXNDckIsSUFBTUMsYUFBYSxtQkFBSTtBQUNyQm9CLG1CQUFpQixNQURJO0FBRXJCQyxZQUFVLE9BRlc7QUFHckJWLFNBQU8sTUFIYztBQUlyQlcsVUFBUSxPQUphO0FBS3JCQyxPQUFLLEdBTGdCO0FBTXJCQyxRQUFNLEdBTmU7QUFPckJDLFVBQVE7QUFQYSxDQUFKLENBQW5CIiwiZmlsZSI6IkZ1bGxCYWNrZ3JvdW5kLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbEJhY2tncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2JhY2tncm91bmR9PlxuICAgICAgICA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17e1xuICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiAyMDAsXG4gICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjogeyB2YWx1ZTogXCIjNjNFN0FGXCIgfSxcbiAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlzdGFuY2U6IDEzMCxcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjIsXG4gICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdmU6IHtcbiAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzcGVlZDogMyxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJldGluYV9kZXRlY3Q6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJhY2tncm91bmQgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMHZoJyxcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICcwJyxcbiAgekluZGV4OiAnLTEnLFxufSlcbiJdfQ==