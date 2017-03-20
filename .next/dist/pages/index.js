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
        null,
        _react2.default.createElement(_HeadBloc2.default, null),
        _react2.default.createElement(_Menu2.default, { links: this.props.socials,
          style: {
            display: 'inline-block',
            margin: '10px 10px',
            transformOrigin: 'left top',
            transform: 'rotate(270deg) translateX(-100%)',
            textTransform: 'uppercase',
            textDecoration: 'none'
          } }),
        _react2.default.createElement(_H2.default, { title: 'Guillaume Kolly',
          style: { color: '#000', fontSize: '4em' } }),
        _react2.default.createElement(
          _Paragraph2.default,
          null,
          'Text of the paragraph'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic29jaWFscyIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImZvbnRTaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsK0RBREY7QUFFRSx3REFBTSxPQUFPLEtBQUtBLEtBQUwsQ0FBV0MsT0FBeEI7QUFDRSxpQkFBTztBQUNMQyxxQkFBUyxjQURKO0FBRUxDLG9CQUFRLFdBRkg7QUFHTEMsNkJBQWlCLFVBSFo7QUFJTEMsdUJBQVcsa0NBSk47QUFLTEMsMkJBQWUsV0FMVjtBQU1MQyw0QkFBZ0I7QUFOWCxXQURULEdBRkY7QUFXRSxxREFBSSxPQUFNLGlCQUFWO0FBQ0UsaUJBQU8sRUFBRUMsT0FBTyxNQUFULEVBQWlCQyxVQUFVLEtBQTNCLEVBRFQsR0FYRjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiRixPQURGO0FBbUJEOzs7c0NBeEJ5QjtBQUN4QixhQUFPLEVBQUVSLDBCQUFGLEVBQVA7QUFDRDs7O0VBSjBCLGdCQUFNUyxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEgxIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvSDEnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvUGFyYWdyYXBoJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyAvPlxuICAgICAgICA8TWVudSBsaW5rcz17dGhpcy5wcm9wcy5zb2NpYWxzfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogJzEwcHggMTBweCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgICAgICAgICB9fSAvPlxuICAgICAgICA8SDEgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcsIGZvbnRTaXplOiAnNGVtJyB9fSAvPlxuICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgIFRleHQgb2YgdGhlIHBhcmFncmFwaFxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19