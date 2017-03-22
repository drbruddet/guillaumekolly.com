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

var _reactTypist = require('react-typist');

var _reactTypist2 = _interopRequireDefault(_reactTypist);

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _H = require('../components/utils/H1');

var _H2 = _interopRequireDefault(_H);

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
            _reactTypist2.default,
            { className: 'Typist',
              avgTypingSpeed: 40,
              startDelay: 1000,
              cursor: { hideWhenDone: true } },
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
  width: '500px',
  letterSpacing: '-0.6px',
  '@media only screen and (min-width: 200px) and (max-width: 640px)': {
    width: '80%',
    right: '10px',
    top: '5%'
  }
});

var container = (0, _css2.default)({
  minHeight: '100vh',
  position: 'relative'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsImludHJvZHVjdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJoaWRlV2hlbkRvbmUiLCJDb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIndpZHRoIiwibGV0dGVyU3BhY2luZyIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVFXO0FBQUEsVUFDQ0EsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7OztBQUdQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0UsU0FBaEI7QUFDRSwrREFERjtBQUVFLHdEQUFNLE9BQU9GLE9BQWIsRUFBc0IsT0FBT0csTUFBN0IsR0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFTLFdBQVdDLFlBQXBCO0FBQ0UsdURBQUksT0FBTSxpQkFBVjtBQUNFLG1CQUFPLEVBQUVDLE9BQU8sTUFBVCxFQUFpQkMsVUFBVSxLQUEzQixFQURULEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBUSxXQUFVLFFBQWxCO0FBQ0UsOEJBQWdCLEVBRGxCO0FBRUUsMEJBQVksSUFGZDtBQUdFLHNCQUFRLEVBQUVDLGNBQWMsSUFBaEIsRUFIVjtBQUFBO0FBU0s7QUFBQTtBQUFBLGdCQUFNLE1BQUssR0FBWDtBQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZixhQVRMO0FBQUE7QUFBQTtBQUhGO0FBSEYsT0FERjtBQXFCRDs7O3NDQTVCeUI7QUFDeEIsYUFBTyxFQUFFUCwwQkFBRixFQUFQO0FBQ0Q7OztFQUowQixnQkFBTVEsUzs7Ozs7QUFpQ25DLElBQU1MLFNBQVMsbUJBQUk7QUFDakJNLFdBQVMsY0FEUTtBQUVqQkMsVUFBUSxVQUZTO0FBR2pCQyxtQkFBaUIsVUFIQTtBQUlqQkMsYUFBVyxrQ0FKTTtBQUtqQkMsaUJBQWUsV0FMRTtBQU1qQkMsa0JBQWdCO0FBTkMsQ0FBSixDQUFmOztBQVNBLElBQU1WLGVBQWUsbUJBQUk7QUFDdkJXLFlBQVUsVUFEYTtBQUV2QkMsU0FBTyxLQUZnQjtBQUd2QkMsT0FBSyxLQUhrQjtBQUl2QkMsU0FBTyxPQUpnQjtBQUt2QkMsaUJBQWUsUUFMUTtBQU12QixzRUFBb0U7QUFDbEVELFdBQU8sS0FEMkQ7QUFFbEVGLFdBQU8sTUFGMkQ7QUFHbEVDLFNBQUs7QUFINkQ7QUFON0MsQ0FBSixDQUFyQjs7QUFhQSxJQUFNZixZQUFZLG1CQUFJO0FBQ3BCa0IsYUFBVyxPQURTO0FBRXBCTCxZQUFVO0FBRlUsQ0FBSixDQUFsQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFR5cGlzdCBmcm9tICdyZWFjdC10eXBpc3QnXG5cbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBIMSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL0gxJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb2NpYWxzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkQmxvYyAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtpbnRyb2R1Y3Rpb259PlxuICAgICAgICAgIDxIMSB0aXRsZT1cIkd1aWxsYXVtZSBLb2xseVwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyMwMDAnLCBmb250U2l6ZTogJzRlbScgfX0gLz5cbiAgICAgICAgICA8VHlwaXN0IGNsYXNzTmFtZT1cIlR5cGlzdFwiXG4gICAgICAgICAgICBhdmdUeXBpbmdTcGVlZD17NDB9XG4gICAgICAgICAgICBzdGFydERlbGF5PXsxMDAwfVxuICAgICAgICAgICAgY3Vyc29yPXt7IGhpZGVXaGVuRG9uZTogdHJ1ZSB9fT5cbiAgICAgICAgICAgIEnigJltIGEgZnVsbCBzdGFjayBkZXZlbG9wZXIgYm9ybiBhbmQgcmFpc2VkIGluIHRoZSBGcmVuY2ggQWxwcyxcbiAgICAgICAgICAgIGJ1dCBJ4oCZbSBjdXJyZW50bHkgbGl2aW5nIGluIEx5b24gLSBGcmFuY2UuIEnigJltIGZsdWVudCBpblxuICAgICAgICAgICAgTm9kZSAvIE1ldGVvciAvIEpTIC8gUmVhY3QsIGJ1dCBJ4oCZbSByZWNlbnRseSBzdGFydGVkXG4gICAgICAgICAgICBleHBlcmltZW50aW5nIHdpdGggR3JhcGhRTCwgUmVkdXggYW5kIFdlYnBhY2suIEkgYWxzb1xuICAgICAgICAgICAgaGF2ZSBza2lsbHMgd2l0aCBQaG90b3Nob3AgLyBJbGx1c3RyYXRvci4gRG8gbm90IGhleml0YXRlXG4gICAgICAgICAgICB0byA8TGluayBocmVmPVwiI1wiPjxhPmNvbnRhY3QgbWU8L2E+PC9MaW5rPi5cbiAgICAgICAgICA8L1R5cGlzdD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHNvY2lhbCA9IGNzcyh7XG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBtYXJnaW46ICc1cHggMTBweCcsXG4gIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgdHJhbnNmb3JtOiAncm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSknLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJ1xufSlcblxuY29uc3QgaW50cm9kdWN0aW9uID0gY3NzKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnMjAlJyxcbiAgdG9wOiAnMzAlJyxcbiAgd2lkdGg6ICc1MDBweCcsXG4gIGxldHRlclNwYWNpbmc6ICctMC42cHgnLFxuICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDBweCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB3aWR0aDogJzgwJScsXG4gICAgcmlnaHQ6ICcxMHB4JyxcbiAgICB0b3A6ICc1JScsXG4gIH1cbn0pXG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7XG4gIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59KVxuIl19