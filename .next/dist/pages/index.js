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

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _H = require('../components/utils/H1');

var _H2 = _interopRequireDefault(_H);

var _Paragraph = require('../components/utils/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _socials = require('../data/socials');

var _socials2 = _interopRequireDefault(_socials);

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
      var socials = this.props.socials;


      return _react2.default.createElement(
        'div',
        { className: container },
        _react2.default.createElement(_HeadBloc2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
        _react2.default.createElement(
          'section',
          { className: introduction },
          _react2.default.createElement(_H2.default, { title: 'Guillaume Kolly',
            style: { color: '#000', fontSize: '4em' } }),
          _react2.default.createElement(
            _Paragraph2.default,
            null,
            'Text of the paragraph'
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return { socials: _socials2.default };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var social = (0, _css2.default)({
  display: 'inline-block',
  margin: '5px 10px',
  transformOrigin: 'left top',
  transform: 'rotate(270deg) translateX(-100%)',
  textTransform: 'uppercase',
  textDecoration: 'none'
});

var introduction = (0, _css2.default)({
  position: 'absolute',
  right: '20%',
  top: '30%',
  border: '1px solid blue'
});

var container = (0, _css2.default)({
  minHeight: '100vh',
  position: 'relative'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsImludHJvZHVjdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJDb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImJvcmRlciIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUFBLFVBQ0NBLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdFLFNBQWhCO0FBQ0UsK0RBREY7QUFFRSx3REFBTSxPQUFPRixPQUFiLEVBQXNCLE9BQU9HLE1BQTdCLEdBRkY7QUFHRTtBQUFBO0FBQUEsWUFBUyxXQUFXQyxZQUFwQjtBQUNFLHVEQUFJLE9BQU0saUJBQVY7QUFDRSxtQkFBTyxFQUFFQyxPQUFPLE1BQVQsRUFBaUJDLFVBQVUsS0FBM0IsRUFEVCxHQURGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBSEYsT0FERjtBQWFEOzs7c0NBcEJ5QjtBQUN4QixhQUFPLEVBQUVOLDBCQUFGLEVBQVA7QUFDRDs7O0VBSjBCLGdCQUFNTyxTOzs7OztBQXlCbkMsSUFBTUosU0FBUyxtQkFBSTtBQUNqQkssV0FBUyxjQURRO0FBRWpCQyxVQUFRLFVBRlM7QUFHakJDLG1CQUFpQixVQUhBO0FBSWpCQyxhQUFXLGtDQUpNO0FBS2pCQyxpQkFBZSxXQUxFO0FBTWpCQyxrQkFBZ0I7QUFOQyxDQUFKLENBQWY7O0FBU0EsSUFBTVQsZUFBZSxtQkFBSTtBQUN2QlUsWUFBVSxVQURhO0FBRXZCQyxTQUFPLEtBRmdCO0FBR3ZCQyxPQUFLLEtBSGtCO0FBSXZCQyxVQUFRO0FBSmUsQ0FBSixDQUFyQjs7QUFPQSxJQUFNZixZQUFZLG1CQUFJO0FBQ3BCZ0IsYUFBVyxPQURTO0FBRXBCSixZQUFVO0FBRlUsQ0FBSixDQUFsQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgSDEgZnJvbSAnLi4vY29tcG9uZW50cy91dGlscy9IMSdcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy91dGlscy9QYXJhZ3JhcGgnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4geyBzb2NpYWxzOiBzb2NpYWxzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2ludHJvZHVjdGlvbn0+XG4gICAgICAgICAgPEgxIHRpdGxlPVwiR3VpbGxhdW1lIEtvbGx5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRTaXplOiAnNGVtJyB9fSAvPlxuICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICBUZXh0IG9mIHRoZSBwYXJhZ3JhcGhcbiAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHNvY2lhbCA9IGNzcyh7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBtYXJnaW46ICc1cHggMTBweCcsXG4gIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgdHJhbnNmb3JtOiAncm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSknLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJ1xufSlcblxuY29uc3QgaW50cm9kdWN0aW9uID0gY3NzKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnMjAlJyxcbiAgdG9wOiAnMzAlJyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnLFxufSlcblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbn0pXG4iXX0=