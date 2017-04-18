'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactTypist = require('react-typist');

var _reactTypist2 = _interopRequireDefault(_reactTypist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  style: _react.PropTypes.object,
  children: _react.PropTypes.array.isRequired,
  avgTypingDelay: _react.PropTypes.number,
  stdTypingDelay: _react.PropTypes.number,
  startDelay: _react.PropTypes.number,
  hideWhenDone: _react.PropTypes.bool
};

var defaultProps = {
  style: null,
  avgTypingDelay: 50,
  stdTypingDelay: 20,
  startDelay: 1000,
  hideWhenDone: true
};

var TextTyped = function TextTyped(props) {
  return _react2.default.createElement(
    'div',
    { className: props.style },
    _react2.default.createElement(
      _reactTypist2.default,
      {
        avgTypingDelay: props.avgTypingDelay,
        stdTypingDelay: props.stdTypingDelay,
        startDelay: props.startDelay,
        cursor: { hideWhenDone: props.hideWhenDone }
      },
      props.children
    )
  );
};

TextTyped.propTypes = propTypes;
TextTyped.defaultProps = defaultProps;
exports.default = TextTyped;