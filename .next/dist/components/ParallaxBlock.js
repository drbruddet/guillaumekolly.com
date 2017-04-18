'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactParallax = require('react-parallax');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  title: _react.PropTypes.string.isRequired,
  background: _react.PropTypes.object.isRequired,
  strength: _react.PropTypes.number,
  style: _react.PropTypes.object
};

var defaultProps = {
  strength: 600,
  style: null
};

var ParallaxBlock = function ParallaxBlock(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactParallax.Parallax,
      { strength: props.strength },
      _react2.default.createElement(
        _reactParallax.Background,
        null,
        ' ',
        props.background,
        ' '
      ),
      _react2.default.createElement(
        'div',
        { className: props.style.parallax },
        _react2.default.createElement(
          'h2',
          { className: props.style.title },
          ' ',
          props.title,
          ' '
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: props.style.content },
      ' ',
      props.children,
      ' '
    )
  );
};

ParallaxBlock.propTypes = propTypes;
ParallaxBlock.defaultProps = defaultProps;
exports.default = ParallaxBlock;