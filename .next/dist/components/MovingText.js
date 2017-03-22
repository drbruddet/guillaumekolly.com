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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovingText = function (_React$Component) {
  (0, _inherits3.default)(MovingText, _React$Component);

  function MovingText(props) {
    (0, _classCallCheck3.default)(this, MovingText);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MovingText.__proto__ || (0, _getPrototypeOf2.default)(MovingText)).call(this, props));

    _this.init();
    return _this;
  }

  (0, _createClass3.default)(MovingText, [{
    key: 'init',
    value: function init() {
      this.state = {
        mousePos: { x: 0, y: 0 }
      };
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(e) {
      this.setState({
        mousePos: {
          x: e.pageX - window.innerWidth / 2,
          y: e.pageY - window.innerHeight / 2
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          movingtext = _props.movingtext;


      var offset = {
        transform: 'translate3d( ' + this.state.mousePos.x / -100 + 'px, ' + this.state.mousePos.y / -100 + 'px, 0 )',
        textShadow: -this.state.mousePos.x / -90 + 'px ' + this.state.mousePos.y / 100 + 'px rgba(99, 231, 175, 0.9)'
      };

      return _react2.default.createElement(
        'div',
        { className: backgroundSize, onMouseMove: this.mouseMove.bind(this) },
        _react2.default.createElement(
          'h1',
          { className: title },
          'I\'m ',
          _react2.default.createElement(
            'span',
            { className: movingtitle, style: offset },
            'Guillaume Kolly'
          ),
          '.'
        )
      );
    }
  }]);
  return MovingText;
}(_react2.default.Component);

MovingText.propTypes = {
  text: _react.PropTypes.string,
  movingtext: _react.PropTypes.string.isRequired
};
exports.default = MovingText;


var backgroundSize = (0, _css2.default)({
  height: '100vh',
  width: 'calc(100vw - 30px)',
  position: 'absolute',
  top: '0',
  left: '30px'
});

var title = (0, _css2.default)({
  whiteSpace: 'nowrap',
  position: 'absolute',
  fontSize: '4em',
  right: '10%',
  top: '30%'
});

var movingtitle = (0, _css2.default)({
  display: 'inline-block',
  color: '#2b2b2b',
  willChange: 'transform'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpbmdUZXh0IiwicHJvcHMiLCJpbml0Iiwic3RhdGUiLCJtb3VzZVBvcyIsIngiLCJ5IiwiZSIsInNldFN0YXRlIiwicGFnZVgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVkiLCJpbm5lckhlaWdodCIsInRleHQiLCJtb3Zpbmd0ZXh0Iiwib2Zmc2V0IiwidHJhbnNmb3JtIiwidGV4dFNoYWRvdyIsImJhY2tncm91bmRTaXplIiwibW91c2VNb3ZlIiwiYmluZCIsInRpdGxlIiwibW92aW5ndGl0bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aGl0ZVNwYWNlIiwiZm9udFNpemUiLCJyaWdodCIsImRpc3BsYXkiLCJjb2xvciIsIndpbGxDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxVOzs7QUFPbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsSUFBTDtBQUZpQjtBQUdsQjs7OzsyQkFFTTtBQUNMLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBVSxFQUFFQyxHQUFHLENBQUwsRUFBUUMsR0FBRyxDQUFYO0FBREMsT0FBYjtBQUdEOzs7OEJBRVNDLEMsRUFBRztBQUNYLFdBQUtDLFFBQUwsQ0FBYztBQUNaSixrQkFBVTtBQUNSQyxhQUFHRSxFQUFFRSxLQUFGLEdBQVdDLE9BQU9DLFVBQVAsR0FBb0IsQ0FEMUI7QUFFUkwsYUFBR0MsRUFBRUssS0FBRixHQUFXRixPQUFPRyxXQUFQLEdBQXFCO0FBRjNCO0FBREUsT0FBZDtBQU1EOzs7NkJBRVE7QUFBQSxtQkFDc0IsS0FBS1osS0FEM0I7QUFBQSxVQUNDYSxJQURELFVBQ0NBLElBREQ7QUFBQSxVQUNPQyxVQURQLFVBQ09BLFVBRFA7OztBQUdQLFVBQUlDLFNBQVM7QUFDWEMscUNBQTJCLEtBQUtkLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsQ0FBcEIsR0FBd0IsQ0FBQyxHQUFwRCxZQUE4RCxLQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0JFLENBQXBCLEdBQXdCLENBQUMsR0FBdkYsWUFEVztBQUVYWSxvQkFBZSxDQUFFLEtBQUtmLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsQ0FBdEIsR0FBMEIsQ0FBQyxFQUExQyxXQUFrRCxLQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0JFLENBQXBCLEdBQXdCLEdBQTFFO0FBRlcsT0FBYjs7QUFLQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdhLGNBQWhCLEVBQWdDLGFBQWEsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQTdDO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBV0MsS0FBZjtBQUFBO0FBQTBCO0FBQUE7QUFBQSxjQUFNLFdBQVdDLFdBQWpCLEVBQThCLE9BQU9QLE1BQXJDO0FBQUE7QUFBQSxXQUExQjtBQUFBO0FBQUE7QUFERixPQURGO0FBS0Q7OztFQXhDcUMsZ0JBQU1RLFM7O0FBQXpCeEIsVSxDQUVaeUIsUyxHQUFZO0FBQ2pCWCxRQUFNLGlCQUFVWSxNQURDO0FBRWpCWCxjQUFZLGlCQUFVVyxNQUFWLENBQWlCQztBQUZaLEM7a0JBRkEzQixVOzs7QUEyQ3JCLElBQU1tQixpQkFBaUIsbUJBQUk7QUFDekJTLFVBQVEsT0FEaUI7QUFFekJDLFNBQU8sb0JBRmtCO0FBR3pCQyxZQUFVLFVBSGU7QUFJekJDLE9BQUssR0FKb0I7QUFLekJDLFFBQU07QUFMbUIsQ0FBSixDQUF2Qjs7QUFRQSxJQUFNVixRQUFRLG1CQUFJO0FBQ2hCVyxjQUFZLFFBREk7QUFFaEJILFlBQVUsVUFGTTtBQUdoQkksWUFBVSxLQUhNO0FBSWhCQyxTQUFPLEtBSlM7QUFLaEJKLE9BQUs7QUFMVyxDQUFKLENBQWQ7O0FBUUEsSUFBTVIsY0FBYyxtQkFBSTtBQUN0QmEsV0FBUyxjQURhO0FBRXRCQyxTQUFPLFNBRmU7QUFHdEJDLGNBQVk7QUFIVSxDQUFKLENBQXBCIiwiZmlsZSI6Ik1vdmluZ1RleHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1vdmluZ3RleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW91c2VQb3M6IHsgeDogMCwgeTogMCB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdXNlUG9zOiB7XG4gICAgICAgIHg6IGUucGFnZVggLSAod2luZG93LmlubmVyV2lkdGggLyAyKSxcbiAgICAgICAgeTogZS5wYWdlWSAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZXh0LCBtb3Zpbmd0ZXh0IH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgb2Zmc2V0ID0ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy54IC8gLTEwMH1weCwgJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgLyAtMTAwfXB4LCAwIClgLFxuICAgICAgdGV4dFNoYWRvdzogYCR7LSB0aGlzLnN0YXRlLm1vdXNlUG9zLnggLyAtOTB9cHggJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgLyAxMDB9cHggcmdiYSg5OSwgMjMxLCAxNzUsIDAuOSlgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYWNrZ3JvdW5kU2l6ZX0gb25Nb3VzZU1vdmU9e3RoaXMubW91c2VNb3ZlLmJpbmQodGhpcyl9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXt0aXRsZX0+SSdtIDxzcGFuIGNsYXNzTmFtZT17bW92aW5ndGl0bGV9IHN0eWxlPXtvZmZzZXR9Pkd1aWxsYXVtZSBLb2xseTwvc3Bhbj4uPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBiYWNrZ3JvdW5kU2l6ZSA9IGNzcyh7XG4gIGhlaWdodDogJzEwMHZoJyxcbiAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gMzBweCknLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICczMHB4Jyxcbn0pXG5cbmNvbnN0IHRpdGxlID0gY3NzKHtcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBmb250U2l6ZTogJzRlbScsXG4gIHJpZ2h0OiAnMTAlJyxcbiAgdG9wOiAnMzAlJyxcbn0pXG5cbmNvbnN0IG1vdmluZ3RpdGxlID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIGNvbG9yOiAnIzJiMmIyYicsXG4gIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG59KVxuIl19