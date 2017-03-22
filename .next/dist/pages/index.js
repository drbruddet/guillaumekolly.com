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
      return _react2.default.createElement(
        'div',
        { className: container },
        _react2.default.createElement(_HeadBloc2.default, null),
        _react2.default.createElement(_Menu2.default, { links: this.props.socials,
          style: {
            display: 'inline-block',
            margin: '5px 10px',
            transformOrigin: 'left top',
            transform: 'rotate(270deg) translateX(-100%)',
            textTransform: 'uppercase',
            textDecoration: 'none'
          } }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnRhaW5lciIsInByb3BzIiwic29jaWFscyIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJpbnRyb2R1Y3Rpb24iLCJjb2xvciIsImZvbnRTaXplIiwiQ29tcG9uZW50IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImJvcmRlciIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0EsU0FBaEI7QUFDRSwrREFERjtBQUVFLHdEQUFNLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxPQUF4QjtBQUNFLGlCQUFPO0FBQ0xDLHFCQUFTLGNBREo7QUFFTEMsb0JBQVEsVUFGSDtBQUdMQyw2QkFBaUIsVUFIWjtBQUlMQyx1QkFBVyxrQ0FKTjtBQUtMQywyQkFBZSxXQUxWO0FBTUxDLDRCQUFnQjtBQU5YLFdBRFQsR0FGRjtBQVdFO0FBQUE7QUFBQSxZQUFTLFdBQVdDLFlBQXBCO0FBQ0UsdURBQUksT0FBTSxpQkFBVjtBQUNFLG1CQUFPLEVBQUVDLE9BQU8sTUFBVCxFQUFpQkMsVUFBVSxLQUEzQixFQURULEdBREY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFYRixPQURGO0FBcUJEOzs7c0NBMUJ5QjtBQUN4QixhQUFPLEVBQUVULDBCQUFGLEVBQVA7QUFDRDs7O0VBSjBCLGdCQUFNVSxTOzs7OztBQStCbkMsSUFBTUgsZUFBZSxtQkFBSTtBQUN2QkksWUFBVSxVQURhO0FBRXZCQyxTQUFPLEtBRmdCO0FBR3ZCQyxPQUFLLEtBSGtCO0FBSXZCQyxVQUFRO0FBSmUsQ0FBSixDQUFyQjs7QUFPQSxJQUFNaEIsWUFBWSxtQkFBSTtBQUNwQmlCLGFBQVcsT0FEUztBQUVwQkosWUFBVTtBQUZVLENBQUosQ0FBbEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEgxIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvSDEnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvUGFyYWdyYXBoJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxuICAgICAgICA8SGVhZEJsb2MgLz5cbiAgICAgICAgPE1lbnUgbGlua3M9e3RoaXMucHJvcHMuc29jaWFsc31cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46ICc1cHggMTBweCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgICAgICAgICB9fSAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2ludHJvZHVjdGlvbn0+XG4gICAgICAgICAgPEgxIHRpdGxlPVwiR3VpbGxhdW1lIEtvbGx5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRTaXplOiAnNGVtJyB9fSAvPlxuICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICBUZXh0IG9mIHRoZSBwYXJhZ3JhcGhcbiAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGludHJvZHVjdGlvbiA9IGNzcyh7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzIwJScsXG4gIHRvcDogJzMwJScsXG4gIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcbn0pXG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7XG4gIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59KVxuIl19