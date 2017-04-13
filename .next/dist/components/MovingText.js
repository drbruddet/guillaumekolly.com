'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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
          beforetext = _props.beforetext,
          aftertext = _props.aftertext,
          movingtext = _props.movingtext,
          style = _props.style;


      var offset = {
        transform: 'translate3d( ' + this.state.mousePos.x / this.props.style.animation.transform_mouse_pos_x + 'px,\n        ' + this.state.mousePos.y / this.props.style.animation.transform_mouse_pos_y + 'px, 0 )',

        textShadow: -this.state.mousePos.x / this.props.style.animation.shadow_mouse_pos_x + 'px\n        ' + this.state.mousePos.y / this.props.style.animation.shadow_mouse_pos_y + 'px\n        ' + this.props.style.movingtitlebackground
      };

      return _react2.default.createElement(
        'div',
        {
          className: style.background,
          onMouseMove: this.mouseMove.bind(this)
        },
        _react2.default.createElement(
          'span',
          { className: style.beforetext },
          ' ',
          beforetext,
          ' '
        ),
        _react2.default.createElement(
          'h1',
          { style: { whiteSpace: 'nowrap' }, className: style.fixedtitle },
          _react2.default.createElement(
            'span',
            (0, _defineProperty3.default)({
              style: { display: 'inline-block', willChange: 'transform' },
              className: style.movingtitle
            }, 'style', offset),
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
exports.default = MovingText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpbmdUZXh0IiwicHJvcHMiLCJpbml0Iiwic3RhdGUiLCJtb3VzZVBvcyIsIngiLCJ5IiwiZSIsInNldFN0YXRlIiwicGFnZVgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVkiLCJpbm5lckhlaWdodCIsImJlZm9yZXRleHQiLCJhZnRlcnRleHQiLCJtb3Zpbmd0ZXh0Iiwic3R5bGUiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJ0ZXh0U2hhZG93Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYmFja2dyb3VuZCIsIm1vdXNlTW92ZSIsImJpbmQiLCJ3aGl0ZVNwYWNlIiwiZml4ZWR0aXRsZSIsImRpc3BsYXkiLCJ3aWxsQ2hhbmdlIiwibW92aW5ndGl0bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxVOzs7QUFTbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsSUFBTDtBQUZpQjtBQUdsQjs7OzsyQkFFTTtBQUNMLFdBQUtDLEtBQUwsR0FBYSxFQUFFQyxVQUFVLEVBQUVDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQVgsRUFBWixFQUFiO0FBQ0Q7Ozs4QkFFU0MsQyxFQUFHO0FBQ1gsV0FBS0MsUUFBTCxDQUFjO0FBQ1pKLGtCQUFVO0FBQ1JDLGFBQUdFLEVBQUVFLEtBQUYsR0FBV0MsT0FBT0MsVUFBUCxHQUFvQixDQUQxQjtBQUVSTCxhQUFHQyxFQUFFSyxLQUFGLEdBQVdGLE9BQU9HLFdBQVAsR0FBcUI7QUFGM0I7QUFERSxPQUFkO0FBTUQ7Ozs2QkFFUTtBQUFBLG1CQUM4QyxLQUFLWixLQURuRDtBQUFBLFVBQ0NhLFVBREQsVUFDQ0EsVUFERDtBQUFBLFVBQ2FDLFNBRGIsVUFDYUEsU0FEYjtBQUFBLFVBQ3dCQyxVQUR4QixVQUN3QkEsVUFEeEI7QUFBQSxVQUNvQ0MsS0FEcEMsVUFDb0NBLEtBRHBDOzs7QUFHUCxVQUFJQyxTQUFTO0FBQ1hDLHFDQUEyQixLQUFLaEIsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxDQUFwQixHQUN6QixLQUFLSixLQUFMLENBQVdnQixLQUFYLENBQWlCRyxTQUFqQixDQUEyQkMscUJBRDdCLHFCQUVJLEtBQUtsQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JFLENBQXBCLEdBQ0YsS0FBS0wsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkcsU0FBakIsQ0FBMkJFLHFCQUg3QixZQURXOztBQU1YQyxvQkFBZSxDQUFFLEtBQUtwQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLENBQXRCLEdBQ2IsS0FBS0osS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkcsU0FBakIsQ0FBMkJJLGtCQUQ3QixvQkFFSSxLQUFLckIsS0FBTCxDQUFXQyxRQUFYLENBQW9CRSxDQUFwQixHQUNGLEtBQUtMLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUJHLFNBQWpCLENBQTJCSyxrQkFIN0Isb0JBSUksS0FBS3hCLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUJTO0FBVlYsT0FBYjs7QUFhQSxhQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFXVCxNQUFNVSxVQURuQjtBQUVFLHVCQUFjLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQjtBQUZoQjtBQUlFO0FBQUE7QUFBQSxZQUFNLFdBQVdaLE1BQU1ILFVBQXZCO0FBQUE7QUFBcUNBLG9CQUFyQztBQUFBO0FBQUEsU0FKRjtBQUtFO0FBQUE7QUFBQSxZQUFJLE9BQU8sRUFBQ2dCLFlBQVksUUFBYixFQUFYLEVBQW1DLFdBQVdiLE1BQU1jLFVBQXBEO0FBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQU8sRUFBQ0MsU0FBUyxjQUFWLEVBQTBCQyxZQUFZLFdBQXRDLEVBRFQ7QUFFRSx5QkFBV2hCLE1BQU1pQjtBQUZuQix3QkFHU2hCLE1BSFQ7QUFLR0Y7QUFMSCxXQURGO0FBUUdEO0FBUkg7QUFMRixPQURGO0FBa0JEOzs7RUE3RHFDLGdCQUFNb0IsUzs7QUFBekJuQyxVLENBRVpvQyxTLEdBQVk7QUFDakJ0QixjQUFZLGlCQUFVdUIsTUFETDtBQUVqQnRCLGFBQVksaUJBQVVzQixNQUZMO0FBR2pCckIsY0FBWSxpQkFBVXFCLE1BQVYsQ0FBaUJDLFVBSFo7QUFJakJyQixTQUFZLGlCQUFVc0I7QUFKTCxDO2tCQUZBdkMsVSIsImZpbGUiOiJNb3ZpbmdUZXh0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBiZWZvcmV0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFmdGVydGV4dDogIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW92aW5ndGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbW91c2VQb3M6IHsgeDogMCwgeTogMCB9IH1cbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3VzZVBvczoge1xuICAgICAgICB4OiBlLnBhZ2VYIC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMiksXG4gICAgICAgIHk6IGUucGFnZVkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYmVmb3JldGV4dCwgYWZ0ZXJ0ZXh0LCBtb3Zpbmd0ZXh0LCBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IG9mZnNldCA9IHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCAke3RoaXMuc3RhdGUubW91c2VQb3MueCAvXG4gICAgICAgIHRoaXMucHJvcHMuc3R5bGUuYW5pbWF0aW9uLnRyYW5zZm9ybV9tb3VzZV9wb3NfeH1weCxcbiAgICAgICAgJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgL1xuICAgICAgICB0aGlzLnByb3BzLnN0eWxlLmFuaW1hdGlvbi50cmFuc2Zvcm1fbW91c2VfcG9zX3l9cHgsIDAgKWAsXG5cbiAgICAgIHRleHRTaGFkb3c6IGAkey0gdGhpcy5zdGF0ZS5tb3VzZVBvcy54IC9cbiAgICAgICAgdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24uc2hhZG93X21vdXNlX3Bvc194fXB4XG4gICAgICAgICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy55IC9cbiAgICAgICAgdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24uc2hhZG93X21vdXNlX3Bvc195fXB4XG4gICAgICAgICR7dGhpcy5wcm9wcy5zdHlsZS5tb3Zpbmd0aXRsZWJhY2tncm91bmR9YFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYmFja2dyb3VuZH1cbiAgICAgICAgb25Nb3VzZU1vdmU9eyB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpIH1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5iZWZvcmV0ZXh0fT4ge2JlZm9yZXRleHR9IDwvc3Bhbj5cbiAgICAgICAgPGgxIHN0eWxlPXt7d2hpdGVTcGFjZTogJ25vd3JhcCd9fSBjbGFzc05hbWU9e3N0eWxlLmZpeGVkdGl0bGV9PlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ319XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm1vdmluZ3RpdGxlfVxuICAgICAgICAgICAgc3R5bGU9e29mZnNldH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bW92aW5ndGV4dH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge2FmdGVydGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19