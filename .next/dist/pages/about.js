'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _glamor = require('glamor');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Timeline = require('../components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _experiences = require('../data/experiences');

var _experiences2 = _interopRequireDefault(_experiences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var experiences = this.props.experiences;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeadBloc2.default, {
          title: 'Guillaume Kolly | About me',
          description: 'Guillaume Kolly | Full stack developer living in Lyon. Everything to know about me here.'
        }),
        _react2.default.createElement(_Timeline2.default, { items: experiences, style: timelineStyle })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return { experiences: _experiences2.default };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var timelineStyle = {
  marker: {
    background: 'rgba(99, 231, 175, 1)'
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbImV4cGVyaWVuY2VzIiwicHJvcHMiLCJ0aW1lbGluZVN0eWxlIiwiQ29tcG9uZW50IiwibWFya2VyIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVFXO0FBQUEsVUFDQ0EsV0FERCxHQUNpQixLQUFLQyxLQUR0QixDQUNDRCxXQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsaUJBQU0sNEJBRFI7QUFFRSx1QkFBWTtBQUZkLFVBREY7QUFLRSw0REFBVSxPQUFPQSxXQUFqQixFQUE4QixPQUFPRSxhQUFyQztBQUxGLE9BREY7QUFTRDs7O3NDQWhCeUI7QUFDeEIsYUFBTyxFQUFFRixrQ0FBRixFQUFQO0FBQ0Q7OztFQUowQixnQkFBTUcsUzs7Ozs7QUFxQm5DLElBQU1ELGdCQUFnQjtBQUNwQkUsVUFBUTtBQUNOQyxnQkFBWTtBQUROO0FBRFksQ0FBdEIiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlLCBtZXJnZSB9IGZyb20gJ2dsYW1vcidcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvVGltZWxpbmUnXG5cbmltcG9ydCBleHBlcmllbmNlcyBmcm9tICcuLi9kYXRhL2V4cGVyaWVuY2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgZXhwZXJpZW5jZXM6IGV4cGVyaWVuY2VzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGV4cGVyaWVuY2VzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHkgfCBBYm91dCBtZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJHdWlsbGF1bWUgS29sbHkgfCBGdWxsIHN0YWNrIGRldmVsb3BlciBsaXZpbmcgaW4gTHlvbi4gRXZlcnl0aGluZyB0byBrbm93IGFib3V0IG1lIGhlcmUuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRpbWVsaW5lIGl0ZW1zPXtleHBlcmllbmNlc30gc3R5bGU9e3RpbWVsaW5lU3R5bGV9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSg5OSwgMjMxLCAxNzUsIDEpJyxcbiAgfVxufVxuIl19