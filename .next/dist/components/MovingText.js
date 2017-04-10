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
          ' ',
          beforetext,
          ' '
        ),
        _react2.default.createElement(
          'h1',
          { style: { whiteSpace: 'nowrap' }, className: style.fixedtitle },
          _react2.default.createElement(
            'span',
            (0, _defineProperty3.default)({ style: { display: 'inline-block', willChange: 'transform' },
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