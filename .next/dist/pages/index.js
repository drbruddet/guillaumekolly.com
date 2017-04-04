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

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

var _Theme = require('../components/layout/Theme');

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
      var _props = this.props,
          config = _props.config,
          socials = _props.socials;

      var meta = config.meta.index;

      return _react2.default.createElement(
        'div',
        { className: container },
        _react2.default.createElement(_HeadBloc2.default, { title: meta.title, description: meta.description, keywords: meta.keywords }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: _Theme._verticalMenu }),
        _react2.default.createElement(_MovingText2.default, { beforetext: 'Hi, I\'m ',
          movingtext: 'Guillaume Kolly',
          aftertext: '.',
          style: movingText }),
        _react2.default.createElement(
          _TextTyped2.default,
          { style: texttyped },
          'I\u2019m a ',
          _react2.default.createElement(
            'strong',
            null,
            'Full Stack Developer'
          ),
          ' born & raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. You can discover',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/resume' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'my resume here'
            )
          ),
          '. Do not hezitate to ',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/contact' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'contact me'
            )
          ),
          '.',
          _react2.default.createElement('br', null),
          'PS: This website is made with NextJS / ReactJS / Glamor.'
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        socials: _socials2.default,
        config: _config2.default
      };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var texttyped = (0, _css2.default)({
  width: '702px',
  position: 'absolute',
  right: '10%',
  fontSize: '18px',
  lineHeight: '1.7',
  textAlign: 'justify',
  textJustify: 'inter-word',
  top: 'calc(30% + 4em + 3em)'
});

var movingText = {
  background: (0, _glamor.style)({
    height: '100vh',
    width: 'calc(100vw - 50px)',
    position: 'absolute',
    top: '0',
    left: '50px'
  }),
  fixedtitle: (0, _glamor.style)({
    position: 'absolute',
    fontSize: '4em',
    right: '10%',
    top: '30%'
  }),
  movingtitle: (0, _glamor.style)({
    color: _Theme.theme.colors.text
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-70',
    shadow_mouse_pos_y: '80'
  }
};

var container = (0, _css2.default)({
  height: '100vh',
  width: '100vw',
  position: 'relative'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29uZmlnIiwic29jaWFscyIsIm1ldGEiLCJpbmRleCIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0SnVzdGlmeSIsInRvcCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJsZWZ0IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwiY29sb3IiLCJjb2xvcnMiLCJ0ZXh0IiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs2QkFXVztBQUFBLG1CQUNxQixLQUFLQSxLQUQxQjtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLE9BRFQsVUFDU0EsT0FEVDs7QUFFUCxVQUFNQyxPQUFPRixPQUFPRSxJQUFQLENBQVlDLEtBQXpCOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0MsU0FBaEI7QUFDRSw0REFBVSxPQUFPRixLQUFLRyxLQUF0QixFQUE2QixhQUFhSCxLQUFLSSxXQUEvQyxFQUE0RCxVQUFVSixLQUFLSyxRQUEzRSxHQURGO0FBRUUscUVBRkY7QUFHRSx3REFBTSxPQUFPTixPQUFiLEVBQXNCLDJCQUF0QixHQUhGO0FBSUUsOERBQVksWUFBVyxXQUF2QjtBQUNZLHNCQUFXLGlCQUR2QjtBQUVZLHFCQUFVLEdBRnRCO0FBR1ksaUJBQU9PLFVBSG5CLEdBSkY7QUFRRTtBQUFBO0FBQUEsWUFBVyxPQUFPQyxTQUFsQjtBQUFBO0FBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURSO0FBQUE7QUFLRTtBQUFBO0FBQUEsY0FBTSxjQUFOLEVBQWUsTUFBSyxTQUFwQjtBQUE4QjtBQUFBO0FBQUEsZ0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQTlCLFdBTEY7QUFBQTtBQU1xQjtBQUFBO0FBQUEsY0FBTSxjQUFOLEVBQWUsTUFBSyxVQUFwQjtBQUErQjtBQUFBO0FBQUEsZ0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQS9CLFdBTnJCO0FBQUE7QUFPRSxtREFQRjtBQUFBO0FBQUE7QUFSRixPQURGO0FBb0JEOzs7c0NBL0J5QjtBQUN4QixhQUFPO0FBQ0xSLGtDQURLO0FBRUxEO0FBRkssT0FBUDtBQUlEOzs7RUFQMEIsZ0JBQU1VLFM7Ozs7O0FBb0NuQyxJQUFNRCxZQUFZLG1CQUFJO0FBQ3BCRSxTQUFPLE9BRGE7QUFFcEJDLFlBQVUsVUFGVTtBQUdwQkMsU0FBTyxLQUhhO0FBSXBCQyxZQUFVLE1BSlU7QUFLcEJDLGNBQVksS0FMUTtBQU1wQkMsYUFBVyxTQU5TO0FBT3BCQyxlQUFhLFlBUE87QUFRcEJDLE9BQUs7QUFSZSxDQUFKLENBQWxCOztBQVdBLElBQU1WLGFBQWE7QUFDakJXLGNBQVksbUJBQU07QUFDaEJDLFlBQVEsT0FEUTtBQUVoQlQsV0FBTyxvQkFGUztBQUdoQkMsY0FBVSxVQUhNO0FBSWhCTSxTQUFLLEdBSlc7QUFLaEJHLFVBQU07QUFMVSxHQUFOLENBREs7QUFRakJDLGNBQVksbUJBQU07QUFDaEJWLGNBQVUsVUFETTtBQUVoQkUsY0FBVSxLQUZNO0FBR2hCRCxXQUFPLEtBSFM7QUFJaEJLLFNBQUs7QUFKVyxHQUFOLENBUks7QUFjakJLLGVBQWEsbUJBQU07QUFDakJDLFdBQU8sYUFBTUMsTUFBTixDQUFhQztBQURILEdBQU4sQ0FkSTtBQWlCakJDLHlCQUF1QixhQUFNRixNQUFOLENBQWFHLE9BakJuQjtBQWtCakJDLGFBQVc7QUFDVEMsMkJBQXVCLE1BRGQ7QUFFVEMsMkJBQXVCLE1BRmQ7QUFHVEMsd0JBQW9CLEtBSFg7QUFJVEMsd0JBQW9CO0FBSlg7QUFsQk0sQ0FBbkI7O0FBMEJBLElBQU03QixZQUFZLG1CQUFJO0FBQ3BCZ0IsVUFBUSxPQURZO0FBRXBCVCxTQUFPLE9BRmE7QUFHcEJDLFlBQVU7QUFIVSxDQUFKLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgVGV4dFR5cGVkIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dFR5cGVkJ1xuXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHsgdGhlbWUsIF90YWcsIF92ZXJ0aWNhbE1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb2NpYWxzOiBzb2NpYWxzLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEuaW5kZXhcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXttZXRhLnRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn0ga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e192ZXJ0aWNhbE1lbnV9IC8+XG4gICAgICAgIDxNb3ZpbmdUZXh0IGJlZm9yZXRleHQ9XCJIaSwgSSdtIFwiXG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ3RleHQ9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgICAgICAgICAgICBhZnRlcnRleHQ9XCIuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e21vdmluZ1RleHR9IC8+XG4gICAgICAgIDxUZXh0VHlwZWQgc3R5bGU9e3RleHR0eXBlZH0+XG4gICAgICAgICAgSeKAmW0gYSA8c3Ryb25nPkZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9zdHJvbmc+IGJvcm4gJiByYWlzZWRcbiAgICAgICAgICBpbiB0aGUgRnJlbmNoIEFscHMsIGJ1dCBJ4oCZbSBjdXJyZW50bHkgbGl2aW5nIGluIEx5b24gLSBGcmFuY2UuXG4gICAgICAgICAgSeKAmW0gZmx1ZW50IGluIE5vZGUgLyBNZXRlb3IgLyBKUyAvIFJlYWN0LCBidXQgSeKAmW0gcmVjZW50bHlcbiAgICAgICAgICBzdGFydGVkIGV4cGVyaW1lbnRpbmcgd2l0aCBHcmFwaFFMLCBSZWR1eCBhbmQgV2VicGFjay4gWW91IGNhbiBkaXNjb3ZlclxuICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcmVzdW1lXCI+PGEgY2xhc3NOYW1lPXtfdGFnfT5teSByZXN1bWUgaGVyZTwvYT48L0xpbms+LlxuICAgICAgICAgIERvIG5vdCBoZXppdGF0ZSB0byA8TGluayBwcmVmZXRjaCBocmVmPVwiL2NvbnRhY3RcIj48YSBjbGFzc05hbWU9e190YWd9PmNvbnRhY3QgbWU8L2E+PC9MaW5rPi5cbiAgICAgICAgICA8YnIvPlBTOiBUaGlzIHdlYnNpdGUgaXMgbWFkZSB3aXRoIE5leHRKUyAvIFJlYWN0SlMgLyBHbGFtb3IuXG4gICAgICAgIDwvVGV4dFR5cGVkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHRleHR0eXBlZCA9IGNzcyh7XG4gIHdpZHRoOiAnNzAycHgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICBmb250U2l6ZTogJzE4cHgnLFxuICBsaW5lSGVpZ2h0OiAnMS43JyxcbiAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gIHRleHRKdXN0aWZ5OiAnaW50ZXItd29yZCcsXG4gIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgM2VtKSdcbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gNTBweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICc1MHB4J1xuICB9KSxcbiAgZml4ZWR0aXRsZTogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnNGVtJyxcbiAgICByaWdodDogJzEwJScsXG4gICAgdG9wOiAnMzAlJ1xuICB9KSxcbiAgbW92aW5ndGl0bGU6IHN0eWxlKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHRcbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy03MCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnODAnLFxuICB9XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNzcyh7XG4gIGhlaWdodDogJzEwMHZoJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuIl19