'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Theme = require('./layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/components/MovingText.js';


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
          movingtext = _props.movingtext;

      var offset = {
        transform: 'translate3d( ' + this.state.mousePos.x / -100 + 'px,\n        ' + this.state.mousePos.y / -100 + 'px, 0 )',
        textShadow: -this.state.mousePos.x / -70 + 'px\n        ' + this.state.mousePos.y / 80 + 'px ' + _Theme.theme.colors.primary
      };

      return _react2.default.createElement('div', { className: 'background', onMouseMove: this.mouseMove.bind(this), 'data-jsx': 2153418690,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('span', { className: 'beforetext', 'data-jsx': 2153418690,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, ' ', beforetext, ' '), _react2.default.createElement('h1', { className: 'fixedtitle', 'data-jsx': 2153418690,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('span', { className: 'movingtext', style: offset, 'data-jsx': 2153418690,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, movingtext), aftertext), _react2.default.createElement(_style2.default, {
        styleId: 2153418690,
        css: '.background[data-jsx="2153418690"] {height: 100vh;width: calc(100vw - 55px);position: absolute;top: 0;left: 55px;font-family: ' + _Theme.theme.font.title + ';}.beforetext[data-jsx="2153418690"] {position: absolute;font-size: 15em;right: 28.6%;letter-spacing: -0.07em;top: 30%;color: ' + _Theme.theme.colors.almost_white + ';}.fixedtitle[data-jsx="2153418690"] {position: absolute;font-size: 6em;right: 10%;top: 30%;letterSpacing: -6px;white-space: nowrap;color: ' + _Theme.theme.colors.black + ';}.movingtext[data-jsx="2153418690"] {display: inline-block;letter-spacing: -6px;color: ' + _Theme.theme.colors.black + ';}@media(max-width: 1240px) {.beforetext[data-jsx="2153418690"] {font-size: 10em;top: 34%;right: 40%;}.movingtext[data-jsx="2153418690"] {font-size: 0.85em;}}@media(max-width: 640px) {.background[data-jsx="2153418690"] {left: 30px;width: calc(100vw - 30px);}.beforetext[data-jsx="2153418690"] {font-size: 8em;top: 21%;right: 20%;}.fixedtitle[data-jsx="2153418690"] {top: 20%;font-size: 3em;}.movingtext[data-jsx="2153418690"] {letter-spacing: -3px;}}@media(max-width: 440px) {.beforetext[data-jsx="2153418690"] {display: none;}.fixedtitle[data-jsx="2153418690"] {top: 0;right: 5%;letter-spacing: 0;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aW5nVGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRG9CLEFBQ0ssb0NBQ0csY0FDWSwwQkFDUCxtQkFDWixPQUNJLFdBQzhCLHlDQUMxQyxDQUVZLG9DQUNRLG1CQUNILGdCQUNILGFBQ1csd0JBQ2YsU0FDMEIsbUNBQ3BDLENBRVksb0NBQ1EsbUJBQ0osZUFDSixXQUNGLFNBQ1csb0JBQ0Esb0JBQ2UsbUNBQ3BDLENBRVksb0NBQ1csc0JBQ0QscUJBQ2MsbUNBQ3BDLENBRTBCLDJCQUNaLG9DQUFpQixnQkFBVSxTQUFZLFdBQUUsQ0FDekMsb0NBQW1CLGtCQUFFLENBQ25DLENBQ3lCLDBCQUNYLG9DQUFZLFdBQTJCLDBCQUFFLENBQ3pDLG9DQUFnQixlQUFVLFNBQVksV0FBRSxDQUN4QyxvQ0FBVSxTQUFnQixlQUFFLENBQzVCLG9DQUFzQixxQkFBRSxDQUN0QyxDQUN5QiwwQkFDWCxvQ0FBZSxjQUFFLENBQ2pCLG9DQUFRLE9BQVcsVUFBbUIsa0JBQUUsQ0FDdEQiLCJmaWxlIjoiY29tcG9uZW50cy9Nb3ZpbmdUZXh0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL2xheW91dC9UaGVtZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBiZWZvcmV0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFmdGVydGV4dDogIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW92aW5ndGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBiZWZvcmV0ZXh0OiBcIlwiLFxuICAgIGFmdGVydGV4dDogIFwiXCJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbW91c2VQb3M6IHsgeDogMCwgeTogMCB9IH1cbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3VzZVBvczoge1xuICAgICAgICB4OiBlLnBhZ2VYIC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMiksXG4gICAgICAgIHk6IGUucGFnZVkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYmVmb3JldGV4dCwgYWZ0ZXJ0ZXh0LCBtb3Zpbmd0ZXh0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb2Zmc2V0ID0ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoICR7dGhpcy5zdGF0ZS5tb3VzZVBvcy54IC8gLTEwMH1weCxcbiAgICAgICAgJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgLyAtMTAwfXB4LCAwIClgLFxuICAgICAgdGV4dFNoYWRvdzogYCR7LSB0aGlzLnN0YXRlLm1vdXNlUG9zLnggLyAtNzB9cHhcbiAgICAgICAgJHt0aGlzLnN0YXRlLm1vdXNlUG9zLnkgLyA4MH1weCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmQnIG9uTW91c2VNb3ZlPXt0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiZWZvcmV0ZXh0Jz4ge2JlZm9yZXRleHR9IDwvc3Bhbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nZml4ZWR0aXRsZSc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtb3Zpbmd0ZXh0JyBzdHlsZT17b2Zmc2V0fT57bW92aW5ndGV4dH08L3NwYW4+XG4gICAgICAgICAge2FmdGVydGV4dH1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNTVweCk7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiA1NXB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250LnRpdGxlfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJlZm9yZXRleHQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVlbTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDI4LjYlO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDdlbTtcbiAgICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5hbG1vc3Rfd2hpdGV9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZml4ZWR0aXRsZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2ZW07XG4gICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgIHRvcDogMzAlO1xuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAtNnB4O1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW92aW5ndGV4dCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC02cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyNDBweCkge1xuICAgICAgICAgICAgICAuYmVmb3JldGV4dCB7IGZvbnQtc2l6ZTogMTBlbTsgdG9wOiAzNCU7IHJpZ2h0OiA0MCU7IH1cbiAgICAgICAgICAgICAgLm1vdmluZ3RleHQgeyBmb250LXNpemU6IDAuODVlbTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLmJhY2tncm91bmQgeyBsZWZ0OiAzMHB4OyB3aWR0aDogY2FsYygxMDB2dyAtIDMwcHgpOyB9XG4gICAgICAgICAgICAgIC5iZWZvcmV0ZXh0IHsgZm9udC1zaXplOiA4ZW07IHRvcDogMjElOyByaWdodDogMjAlOyB9XG4gICAgICAgICAgICAgIC5maXhlZHRpdGxlIHsgdG9wOiAyMCU7IGZvbnQtc2l6ZTogM2VtOyB9XG4gICAgICAgICAgICAgIC5tb3Zpbmd0ZXh0IHsgbGV0dGVyLXNwYWNpbmc6IC0zcHg7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gICAgICAgICAgICAgIC5iZWZvcmV0ZXh0IHsgZGlzcGxheTogbm9uZTsgfVxuICAgICAgICAgICAgICAuZml4ZWR0aXRsZSB7IHRvcDogMDsgcmlnaHQ6IDUlOyBsZXR0ZXItc3BhY2luZzogMDsgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/MovingText.js */'
      }));
    }
  }]);

  return MovingText;
}(_react2.default.Component);

MovingText.propTypes = {
  beforetext: _propTypes2.default.string,
  aftertext: _propTypes2.default.string,
  movingtext: _propTypes2.default.string.isRequired
};
MovingText.defaultProps = {
  beforetext: "",
  aftertext: ""
};
exports.default = MovingText;