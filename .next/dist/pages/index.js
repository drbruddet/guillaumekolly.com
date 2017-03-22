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

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _TextTyped = require('../components/TextTyped');

var _TextTyped2 = _interopRequireDefault(_TextTyped);

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
          _TextTyped2.default,
          { style: textIntroduction },
          'I\u2019m a full stack developer born and raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. I also have skills with Photoshop / Illustrator. Do not hezitate to ',
          _react2.default.createElement(
            _link2.default,
            { href: '#' },
            _react2.default.createElement(
              'a',
              null,
              'contact me'
            )
          ),
          '.'
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

var textIntroduction = (0, _css2.default)({
  position: 'absolute',
  right: '15%',
  top: '30%',
  width: '30%',
  '@media only screen and (min-width: 200px) and (max-width: 640px)': {
    width: '80%',
    right: '10px',
    top: '20%'
  }
});

var container = (0, _css2.default)({
  minHeight: '100vh',
  position: 'relative'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsInRleHRJbnRyb2R1Y3Rpb24iLCJDb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIndpZHRoIiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVFXO0FBQUEsVUFDQ0EsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7OztBQUdQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0UsU0FBaEI7QUFDRSwrREFERjtBQUVFLHdEQUFNLE9BQU9GLE9BQWIsRUFBc0IsT0FBT0csTUFBN0IsR0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFXLE9BQU9DLGdCQUFsQjtBQUFBO0FBTUs7QUFBQTtBQUFBLGNBQU0sTUFBSyxHQUFYO0FBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmLFdBTkw7QUFBQTtBQUFBO0FBSEYsT0FERjtBQWNEOzs7c0NBckJ5QjtBQUN4QixhQUFPLEVBQUVKLDBCQUFGLEVBQVA7QUFDRDs7O0VBSjBCLGdCQUFNSyxTOzs7OztBQTBCbkMsSUFBTUYsU0FBUyxtQkFBSTtBQUNqQkcsV0FBUyxjQURRO0FBRWpCQyxVQUFRLFVBRlM7QUFHakJDLG1CQUFpQixVQUhBO0FBSWpCQyxhQUFXLGtDQUpNO0FBS2pCQyxpQkFBZSxXQUxFO0FBTWpCQyxrQkFBZ0I7QUFOQyxDQUFKLENBQWY7O0FBU0EsSUFBTVAsbUJBQW1CLG1CQUFJO0FBQzNCUSxZQUFVLFVBRGlCO0FBRTNCQyxTQUFPLEtBRm9CO0FBRzNCQyxPQUFLLEtBSHNCO0FBSTNCQyxTQUFPLEtBSm9CO0FBSzNCLHNFQUFvRTtBQUNsRUEsV0FBTyxLQUQyRDtBQUVsRUYsV0FBTyxNQUYyRDtBQUdsRUMsU0FBSztBQUg2RDtBQUx6QyxDQUFKLENBQXpCOztBQVlBLElBQU1aLFlBQVksbUJBQUk7QUFDcEJjLGFBQVcsT0FEUztBQUVwQkosWUFBVTtBQUZVLENBQUosQ0FBbEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IFRleHRUeXBlZCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRUeXBlZCdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHNvY2lhbHM6IHNvY2lhbHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxuICAgICAgICA8SGVhZEJsb2MgLz5cbiAgICAgICAgPE1lbnUgbGlua3M9e3NvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gICAgICAgIDxUZXh0VHlwZWQgc3R5bGU9e3RleHRJbnRyb2R1Y3Rpb259ID5cbiAgICAgICAgICBJ4oCZbSBhIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyIGJvcm4gYW5kIHJhaXNlZCBpbiB0aGUgRnJlbmNoIEFscHMsXG4gICAgICAgICAgYnV0IEnigJltIGN1cnJlbnRseSBsaXZpbmcgaW4gTHlvbiAtIEZyYW5jZS4gSeKAmW0gZmx1ZW50IGluXG4gICAgICAgICAgTm9kZSAvIE1ldGVvciAvIEpTIC8gUmVhY3QsIGJ1dCBJ4oCZbSByZWNlbnRseSBzdGFydGVkXG4gICAgICAgICAgZXhwZXJpbWVudGluZyB3aXRoIEdyYXBoUUwsIFJlZHV4IGFuZCBXZWJwYWNrLiBJIGFsc29cbiAgICAgICAgICBoYXZlIHNraWxscyB3aXRoIFBob3Rvc2hvcCAvIElsbHVzdHJhdG9yLiBEbyBub3QgaGV6aXRhdGVcbiAgICAgICAgICB0byA8TGluayBocmVmPVwiI1wiPjxhPmNvbnRhY3QgbWU8L2E+PC9MaW5rPi5cbiAgICAgICAgPC9UZXh0VHlwZWQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc29jaWFsID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIG1hcmdpbjogJzVweCAxMHB4JyxcbiAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG59KVxuXG5jb25zdCB0ZXh0SW50cm9kdWN0aW9uID0gY3NzKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnMTUlJyxcbiAgdG9wOiAnMzAlJyxcbiAgd2lkdGg6ICczMCUnLFxuICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDBweCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB3aWR0aDogJzgwJScsXG4gICAgcmlnaHQ6ICcxMHB4JyxcbiAgICB0b3A6ICcyMCUnLFxuICB9XG59KVxuXG5jb25zdCBjb250YWluZXIgPSBjc3Moe1xuICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxufSlcbiJdfQ==