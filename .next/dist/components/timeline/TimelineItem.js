'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _css;

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css3 = _interopRequireDefault(_css2);

var _Theme = require('../layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  item: _react.PropTypes.object.isRequired,
  style: _react.PropTypes.object
};

var TimelineItem = function TimelineItem(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _css3.default)(timelineBlock, props.side) },
    _react2.default.createElement('div', { className: (0, _css3.default)(marker, props.style.marker) }),
    _react2.default.createElement(
      'div',
      { className: timelineContent },
      _react2.default.createElement(
        'h3',
        { className: (0, _css3.default)(title, props.style.title) },
        props.item.title
      ),
      _react2.default.createElement(
        'span',
        { className: (0, _css3.default)(subtitle, props.style.subtitle) },
        props.item.subtitle
      ),
      _react2.default.createElement(
        'p',
        { className: (0, _css3.default)(description, props.style.description) },
        props.item.description
      )
    )
  );
};

var timelineBlock = (0, _css3.default)((_css = {
  width: '-webkit-calc(50% + 8px)'
}, (0, _defineProperty3.default)(_css, 'width', '-moz-calc(50% + 8px)'), (0, _defineProperty3.default)(_css, 'width', 'calc(50% + 8px)'), (0, _defineProperty3.default)(_css, 'display', '-webkit-box'), (0, _defineProperty3.default)(_css, 'display', '-webkit-flex'), (0, _defineProperty3.default)(_css, 'display', '-moz-box'), (0, _defineProperty3.default)(_css, 'display', 'flex'), (0, _defineProperty3.default)(_css, 'WebkitBoxPack', 'justify'), (0, _defineProperty3.default)(_css, 'WebkitJustifyContent', 'space-between'), (0, _defineProperty3.default)(_css, 'MozBoxPack', 'justify'), (0, _defineProperty3.default)(_css, 'justifyContent', 'space-between'), (0, _defineProperty3.default)(_css, 'clear', 'both'), (0, _defineProperty3.default)(_css, '@media screen and (max-width: 768px)', {
  marginBottom: '30px',
  width: '100%'
}), _css));

var marker = (0, _css3.default)({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  border: '2px solid #F5F7FA',
  background: '#000',
  marginTop: '10px',
  zIndex: '888'
});

var timelineContent = (0, _css3.default)({
  width: '95%',
  padding: '0 15px'
});

var title = (0, _css3.default)({
  marginTop: '5px',
  marginBottom: '5px',
  fontSize: '25px',
  fontWeight: '500',
  color: '#000'
});

var subtitle = (0, _css3.default)({
  fontSize: '15px',
  color: '#000'
});

var description = (0, _css3.default)({
  fontSize: '14px',
  lineHeight: '1.5em',
  wordSpacing: '1px',
  color: '#000'
});

TimelineItem.propTypes = propTypes;
exports.default = TimelineItem;