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
        _react2.default.createElement(_Menu2.default, { links: this.props.socials, style: social }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnRhaW5lciIsInByb3BzIiwic29jaWFscyIsInNvY2lhbCIsImludHJvZHVjdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJDb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImJvcmRlciIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0EsU0FBaEI7QUFDRSwrREFERjtBQUVFLHdEQUFNLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxPQUF4QixFQUFpQyxPQUFPQyxNQUF4QyxHQUZGO0FBR0U7QUFBQTtBQUFBLFlBQVMsV0FBV0MsWUFBcEI7QUFDRSx1REFBSSxPQUFNLGlCQUFWO0FBQ0UsbUJBQU8sRUFBRUMsT0FBTyxNQUFULEVBQWlCQyxVQUFVLEtBQTNCLEVBRFQsR0FERjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUhGLE9BREY7QUFhRDs7O3NDQWxCeUI7QUFDeEIsYUFBTyxFQUFFSiwwQkFBRixFQUFQO0FBQ0Q7OztFQUowQixnQkFBTUssUzs7Ozs7QUF1Qm5DLElBQU1KLFNBQVMsbUJBQUk7QUFDakJLLFdBQVMsY0FEUTtBQUVqQkMsVUFBUSxVQUZTO0FBR2pCQyxtQkFBaUIsVUFIQTtBQUlqQkMsYUFBVyxrQ0FKTTtBQUtqQkMsaUJBQWUsV0FMRTtBQU1qQkMsa0JBQWdCO0FBTkMsQ0FBSixDQUFmOztBQVNBLElBQU1ULGVBQWUsbUJBQUk7QUFDdkJVLFlBQVUsVUFEYTtBQUV2QkMsU0FBTyxLQUZnQjtBQUd2QkMsT0FBSyxLQUhrQjtBQUl2QkMsVUFBUTtBQUplLENBQUosQ0FBckI7O0FBT0EsSUFBTWpCLFlBQVksbUJBQUk7QUFDcEJrQixhQUFXLE9BRFM7QUFFcEJKLFlBQVU7QUFGVSxDQUFKLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBIMSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL0gxJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL1BhcmFncmFwaCdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHNvY2lhbHM6IHNvY2lhbHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXt0aGlzLnByb3BzLnNvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17aW50cm9kdWN0aW9ufT5cbiAgICAgICAgICA8SDEgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMDAwJywgZm9udFNpemU6ICc0ZW0nIH19IC8+XG4gICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgIFRleHQgb2YgdGhlIHBhcmFncmFwaFxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc29jaWFsID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIG1hcmdpbjogJzVweCAxMHB4JyxcbiAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG59KVxuXG5jb25zdCBpbnRyb2R1Y3Rpb24gPSBjc3Moe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcyMCUnLFxuICB0b3A6ICczMCUnLFxuICBib3JkZXI6ICcxcHggc29saWQgYmx1ZScsXG59KVxuXG5jb25zdCBjb250YWluZXIgPSBjc3Moe1xuICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxufSlcbiJdfQ==