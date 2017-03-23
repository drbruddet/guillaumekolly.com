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

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

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
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
        _react2.default.createElement(_MovingText2.default, {
          text: 'I\'m',
          movingtext: 'Guillaume Kolly',
          style: backgroundSize }),
        _react2.default.createElement(
          _TextTyped2.default,
          { style: text },
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


var backgroundSize = (0, _css2.default)({
  height: '100vh',
  width: 'calc(100vw - 30px)',
  position: 'absolute',
  top: '0',
  left: '30px'
});

var social = (0, _css2.default)({
  display: 'inline-block',
  margin: '5px 10px',
  transformOrigin: 'left top',
  transform: 'rotate(270deg) translateX(-100%)',
  textTransform: 'uppercase',
  zIndex: '1',
  textDecoration: 'none'
});

var text = (0, _css2.default)({
  width: '602px',
  position: 'absolute',
  right: '10%',
  top: 'calc(30% + 4em + 4em)'
});

var container = (0, _css2.default)({
  height: '100vh',
  width: '100vw',
  position: 'relative'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsInNvY2lhbCIsImJhY2tncm91bmRTaXplIiwidGV4dCIsIkNvbXBvbmVudCIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiZGlzcGxheSIsIm1hcmdpbiIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsInRleHRUcmFuc2Zvcm0iLCJ6SW5kZXgiLCJ0ZXh0RGVjb3JhdGlvbiIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUFBLFVBQ0NBLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdFLFNBQWhCO0FBQ0UsK0RBREY7QUFFRSxxRUFGRjtBQUdFLHdEQUFNLE9BQU9GLE9BQWIsRUFBc0IsT0FBT0csTUFBN0IsR0FIRjtBQUlFO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLHNCQUFXLGlCQUZiO0FBR0UsaUJBQU9DLGNBSFQsR0FKRjtBQVFFO0FBQUE7QUFBQSxZQUFXLE9BQU9DLElBQWxCO0FBQUE7QUFNSztBQUFBO0FBQUEsY0FBTSxNQUFLLEdBQVg7QUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWYsV0FOTDtBQUFBO0FBQUE7QUFSRixPQURGO0FBbUJEOzs7c0NBMUJ5QjtBQUN4QixhQUFPLEVBQUVMLDBCQUFGLEVBQVA7QUFDRDs7O0VBSjBCLGdCQUFNTSxTOzs7OztBQStCbkMsSUFBTUYsaUJBQWlCLG1CQUFJO0FBQ3pCRyxVQUFRLE9BRGlCO0FBRXpCQyxTQUFPLG9CQUZrQjtBQUd6QkMsWUFBVSxVQUhlO0FBSXpCQyxPQUFLLEdBSm9CO0FBS3pCQyxRQUFNO0FBTG1CLENBQUosQ0FBdkI7O0FBUUEsSUFBTVIsU0FBUyxtQkFBSTtBQUNqQlMsV0FBUyxjQURRO0FBRWpCQyxVQUFRLFVBRlM7QUFHakJDLG1CQUFpQixVQUhBO0FBSWpCQyxhQUFXLGtDQUpNO0FBS2pCQyxpQkFBZSxXQUxFO0FBTWpCQyxVQUFRLEdBTlM7QUFPakJDLGtCQUFnQjtBQVBDLENBQUosQ0FBZjs7QUFVQSxJQUFNYixPQUFPLG1CQUFJO0FBQ2ZHLFNBQU8sT0FEUTtBQUVmQyxZQUFVLFVBRks7QUFHZlUsU0FBTyxLQUhRO0FBSWZULE9BQUs7QUFKVSxDQUFKLENBQWI7O0FBT0EsSUFBTVIsWUFBWSxtQkFBSTtBQUNwQkssVUFBUSxPQURZO0FBRXBCQyxTQUFPLE9BRmE7QUFHcEJDLFlBQVU7QUFIVSxDQUFKLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1vdmluZ1RleHQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpbmdUZXh0J1xuaW1wb3J0IFRleHRUeXBlZCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRUeXBlZCdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHNvY2lhbHM6IHNvY2lhbHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxuICAgICAgICA8SGVhZEJsb2MgLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICAgICAgICA8TW92aW5nVGV4dFxuICAgICAgICAgIHRleHQ9XCJJJ21cIlxuICAgICAgICAgIG1vdmluZ3RleHQ9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kU2l6ZX0gLz5cbiAgICAgICAgPFRleHRUeXBlZCBzdHlsZT17dGV4dH0+XG4gICAgICAgICAgSeKAmW0gYSBmdWxsIHN0YWNrIGRldmVsb3BlciBib3JuIGFuZCByYWlzZWQgaW4gdGhlIEZyZW5jaCBBbHBzLFxuICAgICAgICAgIGJ1dCBJ4oCZbSBjdXJyZW50bHkgbGl2aW5nIGluIEx5b24gLSBGcmFuY2UuIEnigJltIGZsdWVudCBpblxuICAgICAgICAgIE5vZGUgLyBNZXRlb3IgLyBKUyAvIFJlYWN0LCBidXQgSeKAmW0gcmVjZW50bHkgc3RhcnRlZFxuICAgICAgICAgIGV4cGVyaW1lbnRpbmcgd2l0aCBHcmFwaFFMLCBSZWR1eCBhbmQgV2VicGFjay4gSSBhbHNvXG4gICAgICAgICAgaGF2ZSBza2lsbHMgd2l0aCBQaG90b3Nob3AgLyBJbGx1c3RyYXRvci4gRG8gbm90IGhleml0YXRlXG4gICAgICAgICAgdG8gPExpbmsgaHJlZj1cIiNcIj48YT5jb250YWN0IG1lPC9hPjwvTGluaz4uXG4gICAgICAgIDwvVGV4dFR5cGVkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGJhY2tncm91bmRTaXplID0gY3NzKHtcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICB3aWR0aDogJ2NhbGMoMTAwdncgLSAzMHB4KScsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgbGVmdDogJzMwcHgnLFxufSlcblxuY29uc3Qgc29jaWFsID0gY3NzKHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIG1hcmdpbjogJzVweCAxMHB4JyxcbiAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICB6SW5kZXg6ICcxJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJ1xufSlcblxuY29uc3QgdGV4dCA9IGNzcyh7XG4gIHdpZHRoOiAnNjAycHgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICB0b3A6ICdjYWxjKDMwJSArIDRlbSArIDRlbSknXG59KVxuXG5jb25zdCBjb250YWluZXIgPSBjc3Moe1xuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbn0pXG4iXX0=