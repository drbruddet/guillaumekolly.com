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
        { className: style.background,
          onMouseMove: this.mouseMove.bind(this) },
        _react2.default.createElement(
          'span',
          { className: style.beforetext },
          beforetext
        ),
        _react2.default.createElement(
          'h1',
          { style: { whiteSpace: 'nowrap' }, className: style.fixedtitle },
          _react2.default.createElement(
            'span',
            (0, _defineProperty3.default)({ style: { display: 'inline-block',
                willChange: 'transform' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpbmdUZXh0IiwicHJvcHMiLCJpbml0Iiwic3RhdGUiLCJtb3VzZVBvcyIsIngiLCJ5IiwiZSIsInNldFN0YXRlIiwicGFnZVgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFnZVkiLCJpbm5lckhlaWdodCIsImJlZm9yZXRleHQiLCJhZnRlcnRleHQiLCJtb3Zpbmd0ZXh0Iiwic3R5bGUiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3giLCJ0cmFuc2Zvcm1fbW91c2VfcG9zX3kiLCJ0ZXh0U2hhZG93Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwiYmFja2dyb3VuZCIsIm1vdXNlTW92ZSIsImJpbmQiLCJ3aGl0ZVNwYWNlIiwiZml4ZWR0aXRsZSIsImRpc3BsYXkiLCJ3aWxsQ2hhbmdlIiwibW92aW5ndGl0bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxVOzs7QUFTbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsSUFBTDtBQUZpQjtBQUdsQjs7OzsyQkFFTTtBQUNMLFdBQUtDLEtBQUwsR0FBYSxFQUFFQyxVQUFVLEVBQUVDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQVgsRUFBWixFQUFiO0FBQ0Q7Ozs4QkFFU0MsQyxFQUFHO0FBQ1gsV0FBS0MsUUFBTCxDQUFjO0FBQ1pKLGtCQUFVO0FBQ1JDLGFBQUdFLEVBQUVFLEtBQUYsR0FBV0MsT0FBT0MsVUFBUCxHQUFvQixDQUQxQjtBQUVSTCxhQUFHQyxFQUFFSyxLQUFGLEdBQVdGLE9BQU9HLFdBQVAsR0FBcUI7QUFGM0I7QUFERSxPQUFkO0FBTUQ7Ozs2QkFFUTtBQUFBLG1CQUM4QyxLQUFLWixLQURuRDtBQUFBLFVBQ0NhLFVBREQsVUFDQ0EsVUFERDtBQUFBLFVBQ2FDLFNBRGIsVUFDYUEsU0FEYjtBQUFBLFVBQ3dCQyxVQUR4QixVQUN3QkEsVUFEeEI7QUFBQSxVQUNvQ0MsS0FEcEMsVUFDb0NBLEtBRHBDOzs7QUFHUCxVQUFJQyxTQUFTO0FBQ1hDLHFDQUEyQixLQUFLaEIsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxDQUFwQixHQUF3QixLQUFLSixLQUFMLENBQVdnQixLQUFYLENBQWlCRyxTQUFqQixDQUEyQkMscUJBQTlFLHFCQUNJLEtBQUtsQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JFLENBQXBCLEdBQXdCLEtBQUtMLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUJHLFNBQWpCLENBQTJCRSxxQkFEdkQsWUFEVztBQUdYQyxvQkFBZSxDQUFFLEtBQUtwQixLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLENBQXRCLEdBQTBCLEtBQUtKLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBaUJHLFNBQWpCLENBQTJCSSxrQkFBcEUsb0JBQ0ksS0FBS3JCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsQ0FBcEIsR0FBd0IsS0FBS0wsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkcsU0FBakIsQ0FBMkJLLGtCQUR2RCxvQkFFSSxLQUFLeEIsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQlM7QUFMVixPQUFiOztBQVFBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV1QsTUFBTVUsVUFBdEI7QUFDSSx1QkFBYyxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FEbEI7QUFFRTtBQUFBO0FBQUEsWUFBTSxXQUFXWixNQUFNSCxVQUF2QjtBQUFvQ0E7QUFBcEMsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFJLE9BQU8sRUFBQ2dCLFlBQVksUUFBYixFQUFYLEVBQW1DLFdBQVdiLE1BQU1jLFVBQXBEO0FBQ0U7QUFBQTtBQUFBLDRDQUFNLE9BQU8sRUFBQ0MsU0FBUyxjQUFWO0FBQ0xDLDRCQUFZLFdBRFAsRUFBYjtBQUVNLHlCQUFXaEIsTUFBTWlCO0FBRnZCLHdCQUdhaEIsTUFIYjtBQUlHRjtBQUpILFdBREY7QUFRR0Q7QUFSSDtBQUhGLE9BREY7QUFnQkQ7OztFQXREcUMsZ0JBQU1vQixTOztBQUF6Qm5DLFUsQ0FFWm9DLFMsR0FBWTtBQUNqQnRCLGNBQVksaUJBQVV1QixNQURMO0FBRWpCdEIsYUFBWSxpQkFBVXNCLE1BRkw7QUFHakJyQixjQUFZLGlCQUFVcUIsTUFBVixDQUFpQkMsVUFIWjtBQUlqQnJCLFNBQVksaUJBQVVzQjtBQUpMLEM7a0JBRkF2QyxVIiwiZmlsZSI6Ik1vdmluZ1RleHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGJlZm9yZXRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWZ0ZXJ0ZXh0OiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtb3Zpbmd0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3R5bGU6ICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN0YXRlID0geyBtb3VzZVBvczogeyB4OiAwLCB5OiAwIH0gfVxuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdXNlUG9zOiB7XG4gICAgICAgIHg6IGUucGFnZVggLSAod2luZG93LmlubmVyV2lkdGggLyAyKSxcbiAgICAgICAgeTogZS5wYWdlWSAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBiZWZvcmV0ZXh0LCBhZnRlcnRleHQsIG1vdmluZ3RleHQsIHN0eWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgb2Zmc2V0ID0ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy54IC8gdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24udHJhbnNmb3JtX21vdXNlX3Bvc194fXB4LFxuICAgICAgICAke3RoaXMuc3RhdGUubW91c2VQb3MueSAvIHRoaXMucHJvcHMuc3R5bGUuYW5pbWF0aW9uLnRyYW5zZm9ybV9tb3VzZV9wb3NfeX1weCwgMCApYCxcbiAgICAgIHRleHRTaGFkb3c6IGAkey0gdGhpcy5zdGF0ZS5tb3VzZVBvcy54IC8gdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24uc2hhZG93X21vdXNlX3Bvc194fXB4XG4gICAgICAgICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy55IC8gdGhpcy5wcm9wcy5zdHlsZS5hbmltYXRpb24uc2hhZG93X21vdXNlX3Bvc195fXB4XG4gICAgICAgICR7dGhpcy5wcm9wcy5zdHlsZS5tb3Zpbmd0aXRsZWJhY2tncm91bmR9YFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmFja2dyb3VuZH1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykgfSA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYmVmb3JldGV4dH0+e2JlZm9yZXRleHR9PC9zcGFuPlxuICAgICAgICA8aDEgc3R5bGU9e3t3aGl0ZVNwYWNlOiAnbm93cmFwJ319IGNsYXNzTmFtZT17c3R5bGUuZml4ZWR0aXRsZX0+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm1vdmluZ3RpdGxlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtvZmZzZXR9PlxuICAgICAgICAgICAge21vdmluZ3RleHR9XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAge2FmdGVydGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19