"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

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
    key: "init",
    value: function init() {
      this.state = { mousePos: { x: 0, y: 0 } };
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(e) {
      this.setState({
        mousePos: {
          x: e.pageX - window.innerWidth / 2,
          y: e.pageY - window.innerHeight / 2
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          beforetext = _props.beforetext,
          aftertext = _props.aftertext,
          movingtext = _props.movingtext,
          style = _props.style;

      var offset = {
        transform: "translate3d( " + this.state.mousePos.x / this.props.style.animation.transform_mouse_pos_x + "px,\n        " + this.state.mousePos.y / this.props.style.animation.transform_mouse_pos_y + "px, 0 )",

        textShadow: -this.state.mousePos.x / this.props.style.animation.shadow_mouse_pos_x + "px\n        " + this.state.mousePos.y / this.props.style.animation.shadow_mouse_pos_y + "px\n        " + this.props.style.movingtitlebackground
      };

      return _react2.default.createElement(
        "div",
        { className: style.background, onMouseMove: this.mouseMove.bind(this) },
        _react2.default.createElement(
          "span",
          { className: style.beforetext },
          " ",
          beforetext,
          " "
        ),
        _react2.default.createElement(
          "h1",
          { style: { whiteSpace: 'nowrap' }, className: style.fixedtitle },
          _react2.default.createElement(
            "span",
            { className: style.movingtitle, style: offset },
            movingtext
          ),
          aftertext
        )
      );
    }
  }]);
  return MovingText;
}(_react2.default.Component);

MovingText.propTypes = {
  beforetext: _react.PropTypes.string,
  aftertext: _react.PropTypes.string,
  movingtext: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};
MovingText.defaultProps = {
  style: null,
  beforetext: "",
  aftertext: ""
};
exports.default = MovingText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpbmdUZXh0IiwicHJvcHMiLCJpbml0Iiwic3RhdGUiLCJtb3VzZVBvcyIsIngiLCJ5IiwiZSIsInNldFN0YXRlIiwicGFnZVgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVkiLCJpbm5lckhlaWdodCIsImJlZm9yZXRleHQiLCJhZnRlcnRleHQiLCJtb3Zpbmd0ZXh0Iiwic3R5bGUiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJ0ZXh0U2hhZG93Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYmFja2dyb3VuZCIsIm1vdXNlTW92ZSIsImJpbmQiLCJ3aGl0ZVNwYWNlIiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxVOzs7QUFlbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsSUFBTDtBQUZpQjtBQUdsQjs7OzsyQkFFTTtBQUNMLFdBQUtDLEtBQUwsR0FBYSxFQUFFQyxVQUFVLEVBQUVDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQVgsRUFBWixFQUFiO0FBQ0Q7Ozs4QkFFU0MsQyxFQUFHO0FBQ1gsV0FBS0MsUUFBTCxDQUFjO0FBQ1pKLGtCQUFVO0FBQ1JDLGFBQUdFLEVBQUVFLEtBQUYsR0FBV0MsT0FBT0MsVUFBUCxHQUFvQixDQUQxQjtBQUVSTCxhQUFHQyxFQUFFSyxLQUFGLEdBQVdGLE9BQU9HLFdBQVAsR0FBcUI7QUFGM0I7QUFERSxPQUFkO0FBTUQ7Ozs2QkFFUTtBQUFBLG1CQUM4QyxLQUFLWixLQURuRDtBQUFBLFVBQ0NhLFVBREQsVUFDQ0EsVUFERDtBQUFBLFVBQ2FDLFNBRGIsVUFDYUEsU0FEYjtBQUFBLFVBQ3dCQyxVQUR4QixVQUN3QkEsVUFEeEI7QUFBQSxVQUNvQ0MsS0FEcEMsVUFDb0NBLEtBRHBDOztBQUVQLFVBQU1DLFNBQVM7QUFDYkMscUNBQTJCLEtBQUtoQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLENBQXBCLEdBQ3pCLEtBQUtKLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUJHLFNBQWpCLENBQTJCQyxxQkFEN0IscUJBRUksS0FBS2xCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FDRixLQUFLTCxLQUFMLENBQVdnQixLQUFYLENBQWlCRyxTQUFqQixDQUEyQkUscUJBSDdCLFlBRGE7O0FBTWJDLG9CQUFlLENBQUUsS0FBS3BCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsQ0FBdEIsR0FDYixLQUFLSixLQUFMLENBQVdnQixLQUFYLENBQWlCRyxTQUFqQixDQUEyQkksa0JBRDdCLG9CQUVJLEtBQUtyQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JFLENBQXBCLEdBQ0YsS0FBS0wsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkcsU0FBakIsQ0FBMkJLLGtCQUg3QixvQkFJSSxLQUFLeEIsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQlM7QUFWUixPQUFmOztBQWFBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV1QsTUFBTVUsVUFBdEIsRUFBa0MsYUFBYSxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBL0M7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFXWixNQUFNSCxVQUF2QjtBQUFBO0FBQXFDQSxvQkFBckM7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSSxPQUFPLEVBQUNnQixZQUFZLFFBQWIsRUFBWCxFQUFtQyxXQUFXYixNQUFNYyxVQUFwRDtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVdkLE1BQU1lLFdBQXZCLEVBQW9DLE9BQU9kLE1BQTNDO0FBQW9ERjtBQUFwRCxXQURGO0FBRUdEO0FBRkg7QUFGRixPQURGO0FBU0Q7OztFQXpEcUMsZ0JBQU1rQixTOztBQUF6QmpDLFUsQ0FFWmtDLFMsR0FBWTtBQUNqQnBCLGNBQVksaUJBQVVxQixNQURMO0FBRWpCcEIsYUFBWSxpQkFBVW9CLE1BRkw7QUFHakJuQixjQUFZLGlCQUFVbUIsTUFBVixDQUFpQkMsVUFIWjtBQUlqQm5CLFNBQVksaUJBQVVvQjtBQUpMLEM7QUFGQXJDLFUsQ0FTWnNDLFksR0FBZTtBQUNwQnJCLFNBQVksSUFEUTtBQUVwQkgsY0FBWSxFQUZRO0FBR3BCQyxhQUFZO0FBSFEsQztrQkFUSGYsVSIsImZpbGUiOiJNb3ZpbmdUZXh0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBiZWZvcmV0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFmdGVydGV4dDogIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW92aW5ndGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGU6ICAgICAgbnVsbCxcbiAgICBiZWZvcmV0ZXh0OiBcIlwiLFxuICAgIGFmdGVydGV4dDogIFwiXCJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbW91c2VQb3M6IHsgeDogMCwgeTogMCB9IH1cbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3VzZVBvczoge1xuICAgICAgICB4OiBlLnBhZ2VYIC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMiksXG4gICAgICAgIHk6IGUucGFnZVkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYmVmb3JldGV4dCwgYWZ0ZXJ0ZXh0LCBtb3Zpbmd0ZXh0LCBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9mZnNldCA9IHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCAke3RoaXMuc3RhdGUubW91c2VQb3MueCAvXG4gICAgICAgIHRoaXMucHJvcHMuc3R5bGUuYW5pbWF0aW9uLnRyYW5zZm9ybV9tb3VzZV9wb3NfeH1weCxcbiAgICAgICAgJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgL1xuICAgICAgICB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi50cmFuc2Zvcm1fbW91c2VfcG9zX3l9cHgsIDAgKWAsXG5cbiAgICAgIHRleHRTaGFkb3c6IGAkey0gdGhpcy5zdGF0ZS5tb3VzZVBvcy54IC9cbiAgICAgICAgdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24uc2hhZG93X21vdXNlX3Bvc194fXB4XG4gICAgICAgICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy55IC9cbiAgICAgICAgdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24uc2hhZG93X21vdXNlX3Bvc195fXB4XG4gICAgICAgICR7dGhpcy5wcm9wcy5zdHlsZS5tb3Zpbmd0aXRsZWJhY2tncm91bmR9YFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmFja2dyb3VuZH0gb25Nb3VzZU1vdmU9e3RoaXMubW91c2VNb3ZlLmJpbmQodGhpcyl9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmJlZm9yZXRleHR9PiB7YmVmb3JldGV4dH0gPC9zcGFuPlxuICAgICAgICA8aDEgc3R5bGU9e3t3aGl0ZVNwYWNlOiAnbm93cmFwJ319IGNsYXNzTmFtZT17c3R5bGUuZml4ZWR0aXRsZX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5tb3Zpbmd0aXRsZX0gc3R5bGU9e29mZnNldH0+e21vdmluZ3RleHR9PC9zcGFuPlxuICAgICAgICAgIHthZnRlcnRleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==