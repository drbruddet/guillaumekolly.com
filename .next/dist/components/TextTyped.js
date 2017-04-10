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
  children: _react.PropTypes.array.isRequired
};

var TextTyped = function TextTyped(props) {
  return _react2.default.createElement(
    'div',
    { className: props.style },
    _react2.default.createElement(
      _reactTypist2.default,
      { avgTypingDelay: 50,
        stdTypingDelay: 20,
        startDelay: 1000,
        cursor: { hideWhenDone: true } },
      props.children
    )
  );
};

TextTyped.propTypes = propTypes;
exports.default = TextTyped;