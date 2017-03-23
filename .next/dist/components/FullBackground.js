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
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#000"
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#000",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            retina_detect: true
          } })
      );
    }
  }]);
  return FullBackground;
}(_react2.default.Component);

exports.default = FullBackground;


var background = (0, _css2.default)({
  backgroundColor: 'transparent',
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: '0',
  left: '0',
  zIndex: '-1'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiRnVsbEJhY2tncm91bmQiLCJiYWNrZ3JvdW5kIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJzcGVlZCIsIm9wYWNpdHlfbWluIiwic3luYyIsInNpemUiLCJzaXplX21pbiIsImxpbmVfbGlua2VkIiwiZGlzdGFuY2UiLCJ3aWR0aCIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicmV0aW5hX2RldGVjdCIsIkNvbXBvbmVudCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs2QkFFVjtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0MsVUFBaEI7QUFDRSxvRUFBVyxRQUFPLE9BQWxCLEVBQTBCLE9BQU0sT0FBaEMsRUFBd0MsUUFBUTtBQUM5Q0MsdUJBQVc7QUFDUEMsc0JBQVE7QUFDTkMsdUJBQU8sRUFERDtBQUVOQyx5QkFBUztBQUNQQywwQkFBUSxJQUREO0FBRVBDLDhCQUFZO0FBRkw7QUFGSCxlQUREO0FBUVBDLHFCQUFPO0FBQ0xKLHVCQUFPO0FBREYsZUFSQTtBQVdQSyx1QkFBUztBQUNQTCx1QkFBTyxHQURBO0FBRVBNLHdCQUFRLEtBRkQ7QUFHUEMsc0JBQU07QUFDSkwsMEJBQVEsS0FESjtBQUVKTSx5QkFBTyxDQUZIO0FBR0pDLCtCQUFhLEdBSFQ7QUFJSkMsd0JBQU07QUFKRjtBQUhDLGVBWEY7QUFxQlBDLG9CQUFNO0FBQ0pYLHVCQUFPLENBREg7QUFFSk0sd0JBQVEsSUFGSjtBQUdKQyxzQkFBTTtBQUNKTCwwQkFBUSxLQURKO0FBRUpNLHlCQUFPLEVBRkg7QUFHSkksNEJBQVUsR0FITjtBQUlKRix3QkFBTTtBQUpGO0FBSEYsZUFyQkM7QUErQlBHLDJCQUFhO0FBQ1hYLHdCQUFRLElBREc7QUFFWFksMEJBQVUsR0FGQztBQUdYVix1QkFBTyxNQUhJO0FBSVhDLHlCQUFTLEdBSkU7QUFLWFUsdUJBQU87QUFMSSxlQS9CTjtBQXNDUEMsb0JBQU07QUFDSmQsd0JBQVEsSUFESjtBQUVKTSx1QkFBTyxDQUZIO0FBR0pTLDJCQUFXLE1BSFA7QUFJSlgsd0JBQVEsS0FKSjtBQUtKWSwwQkFBVSxLQUxOO0FBTUpDLDBCQUFVLEtBTk47QUFPSkMsd0JBQVEsS0FQSjtBQVFKQyx5QkFBUztBQUNQbkIsMEJBQVEsS0FERDtBQUVQb0IsMkJBQVMsR0FGRjtBQUdQQywyQkFBUztBQUhGO0FBUkw7QUF0Q0MsYUFEbUM7QUFzRDVDQywyQkFBZTtBQXRENkIsV0FBaEQ7QUFERixPQURGO0FBNEREOzs7RUEvRHlDLGdCQUFNQyxTOztrQkFBN0I3QixjOzs7QUFrRXJCLElBQU1DLGFBQWEsbUJBQUk7QUFDckI2QixtQkFBaUIsYUFESTtBQUVyQkMsWUFBVSxPQUZXO0FBR3JCWixTQUFPLE1BSGM7QUFJckJhLFVBQVEsT0FKYTtBQUtyQkMsT0FBSyxHQUxnQjtBQU1yQkMsUUFBTSxHQU5lO0FBT3JCQyxVQUFRO0FBUGEsQ0FBSixDQUFuQiIsImZpbGUiOiJGdWxsQmFja2dyb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxCYWNrZ3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYWNrZ3JvdW5kfT5cbiAgICAgICAgPFBhcnRpY2xlcyBoZWlnaHQ9XCIxMDB2aFwiIHdpZHRoPVwiMTAwdndcIiBwYXJhbXM9e3tcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDgwLFxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCIjMDAwXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAwLjUsXG4gICAgICAgICAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbmltOiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5X21pbjogMC4xLFxuICAgICAgICAgICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgICAgICAgICByYW5kb206IHRydWUsXG4gICAgICAgICAgICAgICAgYW5pbToge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHNwZWVkOiA0MCxcbiAgICAgICAgICAgICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgICAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vdmU6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDYsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvdXRfbW9kZTogXCJvdXRcIixcbiAgICAgICAgICAgICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICByb3RhdGVYOiA2MDAsXG4gICAgICAgICAgICAgICAgICByb3RhdGVZOiAxMjAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmV0aW5hX2RldGVjdDogdHJ1ZVxuICAgICAgICB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJhY2tncm91bmQgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHRvcDogJzAnLFxuICBsZWZ0OiAnMCcsXG4gIHpJbmRleDogJy0xJyxcbn0pXG4iXX0=