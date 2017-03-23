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
        _react2.default.createElement(_FullBackground2.default, { style: background }),
        _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
        _react2.default.createElement(_MovingText2.default, {
          beforetext: 'Hi, I\'m ',
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
          ' born & raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. I also have skills with Photoshop / Illustrator. Do not hezitate to ',
          _react2.default.createElement(
            _link2.default,
            { href: '#' },
            _react2.default.createElement(
              'a',
              { className: 'a' },
              'contact me'
            )
          ),
          '. ',
          _react2.default.createElement('br', null),
          'PS: This website is made with NextJS / ReactJS / Glamor.'
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
    color: '#2b2b2b'
  }),
  movingtitlebackground: 'rgba(99, 231, 175, 0.8)'
};

var social = {
  component: (0, _glamor.style)({
    display: 'inline-block',
    margin: '15px 20px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none'
  }),
  link: (0, _glamor.style)({
    margin: '0 10px 0 0',
    textDecoration: 'none',
    color: '#000',
    ':hover': {
      textDecoration: 'line-through'
    }
  })
};

var background = (0, _css2.default)({
  zIndex: '-1'
});

var container = (0, _css2.default)({
  height: '100vh',
  width: '100vw',
  position: 'relative'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJwcm9wcyIsImNvbnRhaW5lciIsImJhY2tncm91bmQiLCJzb2NpYWwiLCJtb3ZpbmdUZXh0IiwidGV4dHR5cGVkIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJwb3NpdGlvbiIsInJpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJoZWlnaHQiLCJsZWZ0IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwiY29sb3IiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJjb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInpJbmRleCIsInRleHREZWNvcmF0aW9uIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBUVc7QUFBQSxVQUNDQSxPQURELEdBQ2EsS0FBS0MsS0FEbEIsQ0FDQ0QsT0FERDs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXRSxTQUFoQjtBQUNFLCtEQURGO0FBRUUsa0VBQWdCLE9BQU9DLFVBQXZCLEdBRkY7QUFHRSx3REFBTSxPQUFPSCxPQUFiLEVBQXNCLE9BQU9JLE1BQTdCLEdBSEY7QUFJRTtBQUNFLHNCQUFXLFdBRGI7QUFFRSxzQkFBVyxpQkFGYjtBQUdFLHFCQUFVLEdBSFo7QUFJRSxpQkFBT0MsVUFKVCxHQUpGO0FBU0U7QUFBQTtBQUFBLFlBQVcsT0FBT0MsU0FBbEI7QUFBQTtBQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUjtBQUFBO0FBTUs7QUFBQTtBQUFBLGNBQU0sTUFBSyxHQUFYO0FBQWU7QUFBQTtBQUFBLGdCQUFHLFdBQVUsR0FBYjtBQUFBO0FBQUE7QUFBZixXQU5MO0FBQUE7QUFNNEQsbURBTjVEO0FBQUE7QUFBQTtBQVRGLE9BREY7QUFxQkQ7OztzQ0E1QnlCO0FBQ3hCLGFBQU8sRUFBRU4sMEJBQUYsRUFBUDtBQUNEOzs7RUFKMEIsZ0JBQU1PLFM7Ozs7O0FBaUNuQyxJQUFNRCxZQUFZLG1CQUFJO0FBQ3BCRSxTQUFPLE9BRGE7QUFFcEJDLFlBQVUsVUFGVTtBQUdwQkMsU0FBTyxLQUhhO0FBSXBCQyxZQUFVLE1BSlU7QUFLcEJDLGNBQVksS0FMUTtBQU1wQkMsYUFBVyxTQU5TO0FBT3BCQyxlQUFhLFlBUE87QUFRcEJDLE9BQUs7QUFSZSxDQUFKLENBQWxCOztBQVdBLElBQU1WLGFBQWE7QUFDakJGLGNBQVksbUJBQU07QUFDaEJhLFlBQVEsT0FEUTtBQUVoQlIsV0FBTyxvQkFGUztBQUdoQkMsY0FBVSxVQUhNO0FBSWhCTSxTQUFLLEdBSlc7QUFLaEJFLFVBQU07QUFMVSxHQUFOLENBREs7QUFRakJDLGNBQVksbUJBQU07QUFDaEJULGNBQVUsVUFETTtBQUVoQkUsY0FBVSxLQUZNO0FBR2hCRCxXQUFPLEtBSFM7QUFJaEJLLFNBQUs7QUFKVyxHQUFOLENBUks7QUFjakJJLGVBQWEsbUJBQU07QUFDakJDLFdBQU87QUFEVSxHQUFOLENBZEk7QUFpQmpCQyx5QkFBdUI7QUFqQk4sQ0FBbkI7O0FBb0JBLElBQU1qQixTQUFTO0FBQ2JrQixhQUFXLG1CQUFNO0FBQ2ZDLGFBQVMsY0FETTtBQUVmQyxZQUFRLFdBRk87QUFHZkMscUJBQWlCLFVBSEY7QUFJZkMsZUFBVyxrQ0FKSTtBQUtmQyxtQkFBZSxXQUxBO0FBTWZDLFlBQVEsR0FOTztBQU9mQyxvQkFBZ0I7QUFQRCxHQUFOLENBREU7QUFVYkMsUUFBTSxtQkFBTTtBQUNWTixZQUFRLFlBREU7QUFFVkssb0JBQWdCLE1BRk47QUFHVlQsV0FBTyxNQUhHO0FBSVYsY0FBVTtBQUNSUyxzQkFBZ0I7QUFEUjtBQUpBLEdBQU47QUFWTyxDQUFmOztBQW9CQSxJQUFNMUIsYUFBYSxtQkFBSTtBQUNyQnlCLFVBQVE7QUFEYSxDQUFKLENBQW5COztBQUlBLElBQU0xQixZQUFZLG1CQUFJO0FBQ3BCYyxVQUFRLE9BRFk7QUFFcEJSLFNBQU8sT0FGYTtBQUdwQkMsWUFBVTtBQUhVLENBQUosQ0FBbEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNb3ZpbmdUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aW5nVGV4dCdcbmltcG9ydCBUZXh0VHlwZWQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0VHlwZWQnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4geyBzb2NpYWxzOiBzb2NpYWxzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvY2lhbHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cbiAgICAgICAgPEhlYWRCbG9jIC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCBzdHlsZT17YmFja2dyb3VuZH0vPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgPE1vdmluZ1RleHRcbiAgICAgICAgICBiZWZvcmV0ZXh0PVwiSGksIEknbSBcIlxuICAgICAgICAgIG1vdmluZ3RleHQ9XCJHdWlsbGF1bWUgS29sbHlcIlxuICAgICAgICAgIGFmdGVydGV4dD1cIi5cIlxuICAgICAgICAgIHN0eWxlPXttb3ZpbmdUZXh0fSAvPlxuICAgICAgICA8VGV4dFR5cGVkIHN0eWxlPXt0ZXh0dHlwZWR9PlxuICAgICAgICAgIEnigJltIGEgPHN0cm9uZz5GdWxsIFN0YWNrIERldmVsb3Blcjwvc3Ryb25nPiBib3JuICYgcmFpc2VkXG4gICAgICAgICAgaW4gdGhlIEZyZW5jaCBBbHBzLCBidXQgSeKAmW0gY3VycmVudGx5IGxpdmluZyBpbiBMeW9uIC0gRnJhbmNlLlxuICAgICAgICAgIEnigJltIGZsdWVudCBpbiBOb2RlIC8gTWV0ZW9yIC8gSlMgLyBSZWFjdCwgYnV0IEnigJltIHJlY2VudGx5XG4gICAgICAgICAgc3RhcnRlZCBleHBlcmltZW50aW5nIHdpdGggR3JhcGhRTCwgUmVkdXggYW5kIFdlYnBhY2suIEkgYWxzb1xuICAgICAgICAgIGhhdmUgc2tpbGxzIHdpdGggUGhvdG9zaG9wIC8gSWxsdXN0cmF0b3IuIERvIG5vdCBoZXppdGF0ZVxuICAgICAgICAgIHRvIDxMaW5rIGhyZWY9XCIjXCI+PGEgY2xhc3NOYW1lPSdhJz5jb250YWN0IG1lPC9hPjwvTGluaz4uIDxici8+XG4gICAgICAgICAgUFM6IFRoaXMgd2Vic2l0ZSBpcyBtYWRlIHdpdGggTmV4dEpTIC8gUmVhY3RKUyAvIEdsYW1vci5cbiAgICAgICAgPC9UZXh0VHlwZWQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgdGV4dHR5cGVkID0gY3NzKHtcbiAgd2lkdGg6ICc3MDJweCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzEwJScsXG4gIGZvbnRTaXplOiAnMThweCcsXG4gIGxpbmVIZWlnaHQ6ICcxLjcnLFxuICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgdGV4dEp1c3RpZnk6ICdpbnRlci13b3JkJyxcbiAgdG9wOiAnY2FsYygzMCUgKyA0ZW0gKyAzZW0pJ1xufSlcblxuY29uc3QgbW92aW5nVGV4dCA9IHtcbiAgYmFja2dyb3VuZDogc3R5bGUoe1xuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICB3aWR0aDogJ2NhbGMoMTAwdncgLSA1MHB4KScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMCcsXG4gICAgbGVmdDogJzUwcHgnXG4gIH0pLFxuICBmaXhlZHRpdGxlOiBzdHlsZSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZm9udFNpemU6ICc0ZW0nLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICB0b3A6ICczMCUnXG4gIH0pLFxuICBtb3Zpbmd0aXRsZTogc3R5bGUoe1xuICAgIGNvbG9yOiAnIzJiMmIyYidcbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogJ3JnYmEoOTksIDIzMSwgMTc1LCAwLjgpJ1xufVxuXG5jb25zdCBzb2NpYWwgPSB7XG4gIGNvbXBvbmVudDogc3R5bGUoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1hcmdpbjogJzE1cHggMjBweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAxMHB4IDAgMCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCdcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGJhY2tncm91bmQgPSBjc3Moe1xuICB6SW5kZXg6ICctMScsXG59KVxuXG5jb25zdCBjb250YWluZXIgPSBjc3Moe1xuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufSlcbiJdfQ==