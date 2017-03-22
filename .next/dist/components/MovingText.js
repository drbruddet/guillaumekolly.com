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
        textShadow: -this.state.mousePos.x / -90 + 'px ' + this.state.mousePos.y / 100 + 'px rgba(0, 0, 0, 0.3)'
      };

      return _react2.default.createElement(
        'div',
        { className: move, onMouseMove: this.mouseMove.bind(this) },
        _react2.default.createElement(
          'h1',
          { className: title },
          'I\'m ',
          _react2.default.createElement(
            'span',
            { className: moving, style: offset },
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


var move = (0, _css2.default)({
  height: '100vh',
  width: 'calc(100vh - 30px)',
  position: 'absolute',
  top: '0',
  left: '0',
  marginLeft: '30px'
});

var title = (0, _css2.default)({
  whiteSpace: 'nowrap',
  fontSize: '4em'
});

var moving = (0, _css2.default)({
  display: 'inline-block',
  color: '#0000ff',
  willChange: 'transform'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpbmdUZXh0IiwicHJvcHMiLCJpbml0Iiwic3RhdGUiLCJtb3VzZVBvcyIsIngiLCJ5IiwiZSIsInNldFN0YXRlIiwicGFnZVgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVkiLCJpbm5lckhlaWdodCIsInRleHQiLCJtb3Zpbmd0ZXh0Iiwib2Zmc2V0IiwidHJhbnNmb3JtIiwidGV4dFNoYWRvdyIsIm1vdmUiLCJtb3VzZU1vdmUiLCJiaW5kIiwidGl0bGUiLCJtb3ZpbmciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJtYXJnaW5MZWZ0Iiwid2hpdGVTcGFjZSIsImZvbnRTaXplIiwiZGlzcGxheSIsImNvbG9yIiwid2lsbENoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFU7OztBQU9uQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhJQUNYQSxLQURXOztBQUVqQixVQUFLQyxJQUFMO0FBRmlCO0FBR2xCOzs7OzJCQUVNO0FBQ0wsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFVLEVBQUVDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQVg7QUFEQyxPQUFiO0FBR0Q7Ozs4QkFFU0MsQyxFQUFHO0FBQ1gsV0FBS0MsUUFBTCxDQUFjO0FBQ1pKLGtCQUFVO0FBQ1JDLGFBQUdFLEVBQUVFLEtBQUYsR0FBV0MsT0FBT0MsVUFBUCxHQUFvQixDQUQxQjtBQUVSTCxhQUFHQyxFQUFFSyxLQUFGLEdBQVdGLE9BQU9HLFdBQVAsR0FBcUI7QUFGM0I7QUFERSxPQUFkO0FBTUQ7Ozs2QkFFUTtBQUFBLG1CQUNzQixLQUFLWixLQUQzQjtBQUFBLFVBQ0NhLElBREQsVUFDQ0EsSUFERDtBQUFBLFVBQ09DLFVBRFAsVUFDT0EsVUFEUDs7O0FBR1AsVUFBSUMsU0FBUztBQUNYQyxxQ0FBMkIsS0FBS2QsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxDQUFwQixHQUF3QixDQUFDLEdBQXBELFlBQThELEtBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsQ0FBQyxHQUF2RixZQURXO0FBRVhZLG9CQUFlLENBQUUsS0FBS2YsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxDQUF0QixHQUEwQixDQUFDLEVBQTFDLFdBQWtELEtBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsR0FBMUU7QUFGVyxPQUFiOztBQUtBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV2EsSUFBaEIsRUFBc0IsYUFBYSxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbkM7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFXQyxLQUFmO0FBQUE7QUFBMEI7QUFBQTtBQUFBLGNBQU0sV0FBV0MsTUFBakIsRUFBeUIsT0FBT1AsTUFBaEM7QUFBQTtBQUFBLFdBQTFCO0FBQUE7QUFBQTtBQURGLE9BREY7QUFLRDs7O0VBeENxQyxnQkFBTVEsUzs7QUFBekJ4QixVLENBRVp5QixTLEdBQVk7QUFDakJYLFFBQU0saUJBQVVZLE1BREM7QUFFakJYLGNBQVksaUJBQVVXLE1BQVYsQ0FBaUJDO0FBRlosQztrQkFGQTNCLFU7OztBQTJDckIsSUFBTW1CLE9BQU8sbUJBQUk7QUFDZlMsVUFBUSxPQURPO0FBRWZDLFNBQU8sb0JBRlE7QUFHZkMsWUFBVSxVQUhLO0FBSWZDLE9BQUssR0FKVTtBQUtmQyxRQUFNLEdBTFM7QUFNZkMsY0FBWTtBQU5HLENBQUosQ0FBYjs7QUFTQSxJQUFNWCxRQUFRLG1CQUFJO0FBQ2hCWSxjQUFZLFFBREk7QUFFaEJDLFlBQVU7QUFGTSxDQUFKLENBQWQ7O0FBS0EsSUFBTVosU0FBUyxtQkFBSTtBQUNqQmEsV0FBUyxjQURRO0FBRWpCQyxTQUFPLFNBRlU7QUFHakJDLGNBQVk7QUFISyxDQUFKLENBQWYiLCJmaWxlIjoiTW92aW5nVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW92aW5ndGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3VzZVBvczogeyB4OiAwLCB5OiAwIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW91c2VQb3M6IHtcbiAgICAgICAgeDogZS5wYWdlWCAtICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpLFxuICAgICAgICB5OiBlLnBhZ2VZIC0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRleHQsIG1vdmluZ3RleHQgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBvZmZzZXQgPSB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCggJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnggLyAtMTAwfXB4LCAke3RoaXMuc3RhdGUubW91c2VQb3MueSAvIC0xMDB9cHgsIDAgKWAsXG4gICAgICB0ZXh0U2hhZG93OiBgJHstIHRoaXMuc3RhdGUubW91c2VQb3MueCAvIC05MH1weCAke3RoaXMuc3RhdGUubW91c2VQb3MueSAvIDEwMH1weCByZ2JhKDAsIDAsIDAsIDAuMylgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttb3ZlfSBvbk1vdXNlTW92ZT17dGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3RpdGxlfT5JJ20gPHNwYW4gY2xhc3NOYW1lPXttb3Zpbmd9IHN0eWxlPXtvZmZzZXR9Pkd1aWxsYXVtZSBLb2xseTwvc3Bhbj4uPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtb3ZlID0gY3NzKHtcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICB3aWR0aDogJ2NhbGMoMTAwdmggLSAzMHB4KScsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgbGVmdDogJzAnLFxuICBtYXJnaW5MZWZ0OiAnMzBweCcsXG59KVxuXG5jb25zdCB0aXRsZSA9IGNzcyh7XG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICBmb250U2l6ZTogJzRlbScsXG59KVxuXG5jb25zdCBtb3ZpbmcgPSBjc3Moe1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgY29sb3I6ICcjMDAwMGZmJyxcbiAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbn0pXG4iXX0=