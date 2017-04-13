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

var _reactParticlesJs = require('react-particles-js');

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

var _particles = require('../data/particles');

var _particles2 = _interopRequireDefault(_particles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullBackground = function (_React$Component) {
  (0, _inherits3.default)(FullBackground, _React$Component);

  function FullBackground() {
    (0, _classCallCheck3.default)(this, FullBackground);
    return (0, _possibleConstructorReturn3.default)(this, (FullBackground.__proto__ || (0, _getPrototypeOf2.default)(FullBackground)).apply(this, arguments));
  }

  (0, _createClass3.default)(FullBackground, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;


      return _react2.default.createElement(
        'div',
        {
          className: style,
          style: {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0'
          }
        },
        _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: _particles2.default })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return { particles: _particles2.default };
    }
  }]);
  return FullBackground;
}(_react2.default.Component);

FullBackground.propTypes = {
  style: _react.PropTypes.object
};
exports.default = FullBackground;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRnVsbEJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiRnVsbEJhY2tncm91bmQiLCJzdHlsZSIsInByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInBhcnRpY2xlcyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs2QkFVVjtBQUFBLFVBQ0NDLEtBREQsR0FDVyxLQUFLQyxLQURoQixDQUNDRCxLQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFXQSxLQURiO0FBRUUsaUJBQU87QUFDTEUsc0JBQVUsT0FETDtBQUVMQyxtQkFBTyxPQUZGO0FBR0xDLG9CQUFRLE9BSEg7QUFJTEMsaUJBQUssR0FKQTtBQUtMQyxrQkFBTSxHQUxEO0FBTUxDLG1CQUFPLEdBTkY7QUFPTEMsb0JBQVE7QUFQSDtBQUZUO0FBWUUsb0VBQVcsUUFBTyxPQUFsQixFQUEwQixPQUFNLE9BQWhDLEVBQXdDLDJCQUF4QztBQVpGLE9BREY7QUFnQkQ7OztzQ0F2QnlCO0FBQ3hCLGFBQU8sRUFBRUMsOEJBQUYsRUFBUDtBQUNEOzs7RUFSeUMsZ0JBQU1DLFM7O0FBQTdCWCxjLENBRVpZLFMsR0FBWTtBQUNqQlgsU0FBTyxpQkFBVVk7QUFEQSxDO2tCQUZBYixjIiwiZmlsZSI6IkZ1bGxCYWNrZ3JvdW5kLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJ1xuXG5pbXBvcnQgcGFydGljbGVzIGZyb20gJy4uL2RhdGEvcGFydGljbGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsQmFja2dyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgcGFydGljbGVzOiBwYXJ0aWNsZXMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgIGJvdHRvbTogJzAnXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==