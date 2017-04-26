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

      return _react2.default.createElement('div', { className: 'background', onMouseMove: this.mouseMove.bind(this), 'data-jsx': 2153418690
      }, _react2.default.createElement('span', { className: 'beforetext', 'data-jsx': 2153418690
      }, ' ', beforetext, ' '), _react2.default.createElement('h1', { className: 'fixedtitle', 'data-jsx': 2153418690
      }, _react2.default.createElement('span', { className: 'movingtext', style: offset, 'data-jsx': 2153418690
      }, movingtext), aftertext), _react2.default.createElement(_style2.default, {
        styleId: 2153418690,
        css: '.background[data-jsx="2153418690"] {height: 100vh;width: calc(100vw - 55px);position: absolute;top: 0;left: 55px;font-family: ' + _Theme.theme.font.title + ';}.beforetext[data-jsx="2153418690"] {position: absolute;font-size: 15em;right: 28.6%;letter-spacing: -0.07em;top: 30%;color: ' + _Theme.theme.colors.almost_white + ';}.fixedtitle[data-jsx="2153418690"] {position: absolute;font-size: 6em;right: 10%;top: 30%;letterSpacing: -6px;white-space: nowrap;color: ' + _Theme.theme.colors.black + ';}.movingtext[data-jsx="2153418690"] {display: inline-block;letter-spacing: -6px;color: ' + _Theme.theme.colors.black + ';}@media(max-width: 1240px) {.beforetext[data-jsx="2153418690"] {font-size: 10em;top: 34%;right: 40%;}.movingtext[data-jsx="2153418690"] {font-size: 0.85em;}}@media(max-width: 640px) {.background[data-jsx="2153418690"] {left: 30px;width: calc(100vw - 30px);}.beforetext[data-jsx="2153418690"] {font-size: 8em;top: 21%;right: 20%;}.fixedtitle[data-jsx="2153418690"] {top: 20%;font-size: 3em;}.movingtext[data-jsx="2153418690"] {letter-spacing: -3px;}}@media(max-width: 440px) {.beforetext[data-jsx="2153418690"] {display: none;}.fixedtitle[data-jsx="2153418690"] {top: 0;right: 5%;letter-spacing: 0;}}'
      }));
    }
  }]);

  return MovingText;
}(_react2.default.Component);

MovingText.defaultProps = {
  beforetext: "",
  aftertext: ""
};
exports.default = MovingText;