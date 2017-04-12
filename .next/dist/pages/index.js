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

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Theme = require('../components/layout/Theme');

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

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

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
      var _props = this.props,
          config = _props.config,
          socials = _props.socials;

      var meta = config.meta.index;

      return _react2.default.createElement(
        'div',
        { className: container },
        _react2.default.createElement(_HeadBloc2.default, { title: meta.title,
          description: meta.description,
          keywords: meta.keywords }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: verticalMenu }),
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
            'FULL STACK DEVELOPER'
          ),
          ' born & raised in the French Alps, but I\u2019m currently working in Lyon - France. I\u2019m fluent in the Javascript Stack ( Meteor / Node / Html / Css / React ) and I\u2019ve recently started experimenting with Webpack, Redux, GraphQL. I\u2019m a tech enthusiast constantly improve my skills and stay up-to-date with new methods and technology. Writing readable, elegant and clean code is as important as making a clean design. You can take a look on\xA0',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/resume' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'my resume'
            )
          ),
          '\xA0for more, and do not hesitate to\xA0',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/contact' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
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
      return {
        socials: _socials2.default,
        config: _config2.default
      };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var texttyped = (0, _css.css)({
  width: '598px',
  position: 'absolute',
  right: '10%',
  fontSize: '1.1em',
  lineHeight: '1.5em',
  letterSpacing: '-0.3px',
  textAlign: 'justify',
  textJustify: 'inter-word',
  top: 'calc(30% + 7.2em)',
  color: _Theme.theme.colors.black,
  '@media(max-width: 1240px)': {
    fontSize: '1em',
    width: '467px',
    top: 'calc(30% + 4em + 4em)'
  },
  '@media(max-width: 640px)': {
    width: '335px',
    top: 'calc(30% + 2.3em)',
    right: '9%',
    marginBottom: '20px'
  },
  '@media(max-width: 440px)': {
    minWidth: '240px',
    width: 'calc(80%)',
    top: 'calc(10% + 2.5em)',
    right: '5%',
    fontSize: '0.8em'
  }
});

var movingText = {
  background: (0, _css.style)({
    height: '100vh',
    width: 'calc(100vw - 55px)',
    position: 'absolute',
    top: '0',
    left: '55px',
    fontFamily: _Theme.theme.font.title,
    '@media(max-width: 640px)': { left: '30px', width: 'calc(100vw - 30px)' }
  }),
  beforetext: (0, _css.style)({
    position: 'absolute',
    fontSize: '15em',
    right: '28.6%',
    letterSpacing: '-0.07em',
    top: '30%',
    color: _Theme.theme.colors.almost_white,
    '@media(max-width: 1240px)': { fontSize: '10em', top: '34%', right: '40%' },
    '@media(max-width: 640px)': { fontSize: '8em', top: '21%', right: '20%' },
    '@media(max-width: 440px)': { display: 'none' }
  }),
  fixedtitle: (0, _css.style)({
    position: 'absolute',
    fontSize: '6em',
    right: '10%',
    top: '30%',
    letterSpacing: '-6px',
    '@media(max-width: 640px)': { top: '20%', fontSize: '3em' },
    '@media(max-width: 440px)': { top: '0', right: '5%', letterSpacing: '0' }
  }),
  movingtitle: (0, _css.style)({
    color: _Theme.theme.colors.black,
    display: 'inline-block',
    letterSpacing: '-6px',
    '@media(max-width: 1240px)': { fontSize: '0.85em' },
    '@media(max-width: 640px)': { letterSpacing: '-3px' }
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-70',
    shadow_mouse_pos_y: '80'
  }
};

var verticalMenu = {
  component: (0, _css.css)({
    display: 'inline-block',
    margin: '20px 30px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none',
    '@media(max-width: 640px)': {
      whiteSpace: 'nowrap',
      left: '8px',
      top: '10px',
      margin: '0',
      position: 'absolute'
    }
  }),
  link: (0, _css.css)({
    margin: '0 10px 0 0',
    fontSize: '140%',
    textDecoration: 'none',
    color: _Theme.theme.colors.black,
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 640px)': { fontSize: '100%' }
  })
};

var container = (0, _css.css)({ height: '100vh', width: '100vw', position: 'relative' });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29uZmlnIiwic29jaWFscyIsIm1ldGEiLCJpbmRleCIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInZlcnRpY2FsTWVudSIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwibWFyZ2luQm90dG9tIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwibGVmdCIsImZvbnRGYW1pbHkiLCJmb250IiwiYmVmb3JldGV4dCIsImFsbW9zdF93aGl0ZSIsImRpc3BsYXkiLCJmaXhlZHRpdGxlIiwibW92aW5ndGl0bGUiLCJtb3Zpbmd0aXRsZWJhY2tncm91bmQiLCJwcmltYXJ5IiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtX21vdXNlX3Bvc194IiwidHJhbnNmb3JtX21vdXNlX3Bvc195Iiwic2hhZG93X21vdXNlX3Bvc194Iiwic2hhZG93X21vdXNlX3Bvc195IiwiY29tcG9uZW50IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwidGV4dFRyYW5zZm9ybSIsInpJbmRleCIsInRleHREZWNvcmF0aW9uIiwid2hpdGVTcGFjZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVdXO0FBQUEsbUJBQ3FCLEtBQUtBLEtBRDFCO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEs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QUVsQyxVQUFVLE1BQVo7QUFOcEIsR0FBSjtBQWpCYSxDQUFyQjs7QUEyQkEsSUFBTVgsWUFBWSxjQUFJLEVBQUV1QixRQUFRLE9BQVYsRUFBbUJmLE9BQU8sT0FBMUIsRUFBbUNDLFVBQVUsVUFBN0MsRUFBSixDQUFsQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MsIHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNb3ZpbmdUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aW5nVGV4dCdcbmltcG9ydCBUZXh0VHlwZWQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0VHlwZWQnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc29jaWFsczogc29jaWFscyxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBzb2NpYWxzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLmluZGV4XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT17bWV0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9IC8+XG4gICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3ZlcnRpY2FsTWVudX0gLz5cbiAgICAgICAgPE1vdmluZ1RleHQgYmVmb3JldGV4dD1cIkhpLCBJJ20gXCJcbiAgICAgICAgICAgICAgICAgICAgbW92aW5ndGV4dD1cIkd1aWxsYXVtZSBLb2xseVwiXG4gICAgICAgICAgICAgICAgICAgIGFmdGVydGV4dD1cIi5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgPFRleHRUeXBlZCBzdHlsZT17dGV4dHR5cGVkfT5cbiAgICAgICAgICBJ4oCZbSBhIDxzdHJvbmc+RlVMTCBTVEFDSyBERVZFTE9QRVI8L3N0cm9uZz4gYm9ybiAmIHJhaXNlZCBpbiB0aGVcbiAgICAgICAgICBGcmVuY2ggQWxwcywgYnV0IEnigJltIGN1cnJlbnRseSB3b3JraW5nIGluIEx5b24gLSBGcmFuY2UuIEnigJltIGZsdWVudFxuICAgICAgICAgIGluIHRoZSBKYXZhc2NyaXB0IFN0YWNrICggTWV0ZW9yIC8gTm9kZSAvIEh0bWwgLyBDc3MgLyBSZWFjdCApIGFuZFxuICAgICAgICAgIEnigJl2ZSByZWNlbnRseSBzdGFydGVkIGV4cGVyaW1lbnRpbmcgd2l0aCBXZWJwYWNrLCBSZWR1eCwgR3JhcGhRTC5cbiAgICAgICAgICBJ4oCZbSBhIHRlY2ggZW50aHVzaWFzdCBjb25zdGFudGx5IGltcHJvdmUgbXkgc2tpbGxzIGFuZCBzdGF5XG4gICAgICAgICAgdXAtdG8tZGF0ZSB3aXRoIG5ldyBtZXRob2RzIGFuZCB0ZWNobm9sb2d5LiBXcml0aW5nIHJlYWRhYmxlLCBlbGVnYW50XG4gICAgICAgICAgYW5kIGNsZWFuIGNvZGUgaXMgYXMgaW1wb3J0YW50IGFzIG1ha2luZyBhIGNsZWFuIGRlc2lnbi5cbiAgICAgICAgICBZb3UgY2FuIHRha2UgYSBsb29rIG9uJm5ic3A7XG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj48YSBjbGFzc05hbWU9e190YWd9Pm15IHJlc3VtZTwvYT48L0xpbms+XG4gICAgICAgICAgJm5ic3A7Zm9yIG1vcmUsIGFuZCBkbyBub3QgaGVzaXRhdGUgdG8mbmJzcDtcbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2NvbnRhY3RcIj48YSBjbGFzc05hbWU9e190YWd9PmNvbnRhY3QgbWU8L2E+PC9MaW5rPi5cbiAgICAgICAgPC9UZXh0VHlwZWQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgdGV4dHR5cGVkID0gY3NzKHtcbiAgd2lkdGg6ICc1OThweCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzEwJScsXG4gIGZvbnRTaXplOiAnMS4xZW0nLFxuICBsaW5lSGVpZ2h0OiAnMS41ZW0nLFxuICBsZXR0ZXJTcGFjaW5nOiAnLTAuM3B4JyxcbiAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gIHRleHRKdXN0aWZ5OiAnaW50ZXItd29yZCcsXG4gIHRvcDogJ2NhbGMoMzAlICsgNy4yZW0pJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgZm9udFNpemU6ICcxZW0nLFxuICAgIHdpZHRoOiAnNDY3cHgnLFxuICAgIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgNGVtKSdcbiAgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB3aWR0aDogJzMzNXB4JyxcbiAgICB0b3A6ICdjYWxjKDMwJSArIDIuM2VtKScsXG4gICAgcmlnaHQ6ICc5JScsXG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCdcbiAgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSc6IHtcbiAgICBtaW5XaWR0aDogJzI0MHB4JyxcbiAgICB3aWR0aDogJ2NhbGMoODAlKScsXG4gICAgdG9wOiAnY2FsYygxMCUgKyAyLjVlbSknLFxuICAgIHJpZ2h0OiAnNSUnLFxuICAgIGZvbnRTaXplOiAnMC44ZW0nXG4gIH0sXG59KVxuXG5jb25zdCBtb3ZpbmdUZXh0ID0ge1xuICBiYWNrZ3JvdW5kOiBzdHlsZSh7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHdpZHRoOiAnY2FsYygxMDB2dyAtIDU1cHgpJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwJyxcbiAgICBsZWZ0OiAnNTVweCcsXG4gICAgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBsZWZ0OiAnMzBweCcsIHdpZHRoOiAnY2FsYygxMDB2dyAtIDMwcHgpJyB9XG4gIH0pLFxuICBiZWZvcmV0ZXh0OiBzdHlsZSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZm9udFNpemU6ICcxNWVtJyxcbiAgICByaWdodDogJzI4LjYlJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDdlbScsXG4gICAgdG9wOiAnMzAlJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmFsbW9zdF93aGl0ZSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgZm9udFNpemU6ICcxMGVtJywgdG9wOiAnMzQlJywgcmlnaHQ6ICc0MCUnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgZm9udFNpemU6ICc4ZW0nLCB0b3A6ICcyMSUnLCByaWdodDogJzIwJScgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNDQwcHgpJzogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgfSksXG4gIGZpeGVkdGl0bGU6IHN0eWxlKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBmb250U2l6ZTogJzZlbScsXG4gICAgcmlnaHQ6ICcxMCUnLFxuICAgIHRvcDogJzMwJScsXG4gICAgbGV0dGVyU3BhY2luZzogJy02cHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IHRvcDogJzIwJScsIGZvbnRTaXplOiAnM2VtJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA0NDBweCknOiB7IHRvcDogJzAnLCByaWdodDogJzUlJywgbGV0dGVyU3BhY2luZzogJzAnIH0sXG4gIH0pLFxuICBtb3Zpbmd0aXRsZTogc3R5bGUoe1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbGV0dGVyU3BhY2luZzogJy02cHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBmb250U2l6ZTogJzAuODVlbScgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBsZXR0ZXJTcGFjaW5nOiAnLTNweCcgfSxcbiAgfSksXG4gIG1vdmluZ3RpdGxlYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIGFuaW1hdGlvbjoge1xuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeDogJy0xMDAnLFxuICAgIHRyYW5zZm9ybV9tb3VzZV9wb3NfeTogJy0xMDAnLFxuICAgIHNoYWRvd19tb3VzZV9wb3NfeDogJy03MCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc195OiAnODAnLFxuICB9XG59XG5cbmNvbnN0IHZlcnRpY2FsTWVudSA9IHtcbiAgY29tcG9uZW50OiBjc3Moe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1hcmdpbjogJzIwcHggMzBweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGxlZnQ6ICc4cHgnLFxuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICBtYXJnaW46ICcwJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfVxuICB9KSxcbiAgbGluazogY3NzKHtcbiAgICBtYXJnaW46ICcwIDEwcHggMCAwJyxcbiAgICBmb250U2l6ZTogJzE0MCUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEwMCUnIH1cbiAgfSlcbn1cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHsgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDogJzEwMHZ3JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSlcbiJdfQ==