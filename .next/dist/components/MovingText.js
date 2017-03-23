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
      this.state = { mousePos: { x: 0, y: 0 } };
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
        {
          className: this.props.style,
          onMouseMove: this.mouseMove.bind(this) },
        _react2.default.createElement(
          'h1',
          { className: title },
          'I\'m\xA0',
          _react2.default.createElement(
            'span',
            { className: movingtitle,
              style: offset },
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
  movingtext: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};
exports.default = MovingText;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpbmdUZXh0IiwicHJvcHMiLCJpbml0Iiwic3RhdGUiLCJtb3VzZVBvcyIsIngiLCJ5IiwiZSIsInNldFN0YXRlIiwicGFnZVgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVkiLCJpbm5lckhlaWdodCIsInRleHQiLCJtb3Zpbmd0ZXh0Iiwib2Zmc2V0IiwidHJhbnNmb3JtIiwidGV4dFNoYWRvdyIsInN0eWxlIiwibW91c2VNb3ZlIiwiYmluZCIsInRpdGxlIiwibW92aW5ndGl0bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwid2hpdGVTcGFjZSIsInBvc2l0aW9uIiwiZm9udFNpemUiLCJyaWdodCIsInRvcCIsImRpc3BsYXkiLCJjb2xvciIsIndpbGxDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxVOzs7QUFRbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsSUFBTDtBQUZpQjtBQUdsQjs7OzsyQkFFTTtBQUNMLFdBQUtDLEtBQUwsR0FBYSxFQUFFQyxVQUFVLEVBQUVDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQVgsRUFBWixFQUFiO0FBQ0Q7Ozs4QkFFU0MsQyxFQUFHO0FBQ1gsV0FBS0MsUUFBTCxDQUFjO0FBQ1pKLGtCQUFVO0FBQ1JDLGFBQUdFLEVBQUVFLEtBQUYsR0FBV0MsT0FBT0MsVUFBUCxHQUFvQixDQUQxQjtBQUVSTCxhQUFHQyxFQUFFSyxLQUFGLEdBQVdGLE9BQU9HLFdBQVAsR0FBcUI7QUFGM0I7QUFERSxPQUFkO0FBTUQ7Ozs2QkFFUTtBQUFBLG1CQUNzQixLQUFLWixLQUQzQjtBQUFBLFVBQ0NhLElBREQsVUFDQ0EsSUFERDtBQUFBLFVBQ09DLFVBRFAsVUFDT0EsVUFEUDs7O0FBR1AsVUFBSUMsU0FBUztBQUNYQyxxQ0FBMkIsS0FBS2QsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxDQUFwQixHQUF3QixDQUFDLEdBQXBELFlBQThELEtBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsQ0FBQyxHQUF2RixZQURXO0FBRVhZLG9CQUFlLENBQUUsS0FBS2YsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxDQUF0QixHQUEwQixDQUFDLEVBQTFDLFdBQWtELEtBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsR0FBMUU7QUFGVyxPQUFiOztBQUtBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQVcsS0FBS0wsS0FBTCxDQUFXa0IsS0FEeEI7QUFFRSx1QkFBYyxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FGaEI7QUFHRTtBQUFBO0FBQUEsWUFBSSxXQUFXQyxLQUFmO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFXQyxXQUFqQjtBQUNFLHFCQUFPUCxNQURUO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFBQTtBQUhGLE9BREY7QUFXRDs7O0VBN0NxQyxnQkFBTVEsUzs7QUFBekJ4QixVLENBRVp5QixTLEdBQVk7QUFDakJYLFFBQU0saUJBQVVZLE1BREM7QUFFakJYLGNBQVksaUJBQVVXLE1BQVYsQ0FBaUJDLFVBRlo7QUFHakJSLFNBQU8saUJBQVVTO0FBSEEsQztrQkFGQTVCLFU7OztBQWdEckIsSUFBTXNCLFFBQVEsbUJBQUk7QUFDaEJPLGNBQVksUUFESTtBQUVoQkMsWUFBVSxVQUZNO0FBR2hCQyxZQUFVLEtBSE07QUFJaEJDLFNBQU8sS0FKUztBQUtoQkMsT0FBSztBQUxXLENBQUosQ0FBZDs7QUFRQSxJQUFNVixjQUFjLG1CQUFJO0FBQ3RCVyxXQUFTLGNBRGE7QUFFdEJDLFNBQU8sU0FGZTtBQUd0QkMsY0FBWTtBQUhVLENBQUosQ0FBcEIiLCJmaWxlIjoiTW92aW5nVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW92aW5ndGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhdGUgPSB7IG1vdXNlUG9zOiB7IHg6IDAsIHk6IDAgfSB9XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW91c2VQb3M6IHtcbiAgICAgICAgeDogZS5wYWdlWCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpLFxuICAgICAgICB5OiBlLnBhZ2VZIC0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRleHQsIG1vdmluZ3RleHQgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBvZmZzZXQgPSB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCggJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnggLyAtMTAwfXB4LCAke3RoaXMuc3RhdGUubW91c2VQb3MueSAvIC0xMDB9cHgsIDAgKWAsXG4gICAgICB0ZXh0U2hhZG93OiBgJHstIHRoaXMuc3RhdGUubW91c2VQb3MueCAvIC05MH1weCAke3RoaXMuc3RhdGUubW91c2VQb3MueSAvIDEwMH1weCByZ2JhKDk5LCAyMzEsIDE3NSwgMC45KWBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgIG9uTW91c2VNb3ZlPXsgdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSB9ID5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17dGl0bGV9PkknbSZuYnNwO1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bW92aW5ndGl0bGV9XG4gICAgICAgICAgICBzdHlsZT17b2Zmc2V0fT5HdWlsbGF1bWUgS29sbHlcbiAgICAgICAgICA8L3NwYW4+LlxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHRpdGxlID0gY3NzKHtcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBmb250U2l6ZTogJzRlbScsXG4gIHJpZ2h0OiAnMTAlJyxcbiAgdG9wOiAnMzAlJyxcbn0pXG5cbmNvbnN0IG1vdmluZ3RpdGxlID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIGNvbG9yOiAnIzJiMmIyYicsXG4gIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG59KVxuIl19