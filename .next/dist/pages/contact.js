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

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _ContactForm = require('../components/forms/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

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
          socials = _props.socials,
          config = _props.config;

      var meta = config.meta.contact;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeadBloc2.default, {
          title: meta.title,
          description: meta.description,
          keywords: meta.keywords
        }),
        _react2.default.createElement(
          'section',
          { className: (0, _css.css)(halfside, left) },
          _react2.default.createElement(_FullBackground2.default, null),
          _react2.default.createElement(_Menu2.default, { links: socials, style: social }),
          _react2.default.createElement(
            'div',
            { className: resume },
            'You can also watch my\xA0',
            _react2.default.createElement(
              _link2.default,
              { prefetch: true, href: '/resume' },
              _react2.default.createElement(
                'a',
                { className: _Theme._tag },
                'online resume'
              )
            ),
            '\xA0or\xA0',
            _react2.default.createElement(
              _link2.default,
              { href: config.application.cv_pdf_url },
              _react2.default.createElement(
                'a',
                { target: '_blank', className: _Theme._tag },
                'download it'
              )
            ),
            '.'
          )
        ),
        _react2.default.createElement(
          'section',
          { className: (0, _css.css)(halfside, right) },
          _react2.default.createElement(_ContactForm2.default, { sendTo: config.application.email, style: contactForm })
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


var social = {
  component: (0, _css.style)({
    textTransform: 'uppercase',
    zIndex: '999',
    position: 'relative',
    top: '50%',
    textAlign: 'center',
    display: 'block',
    margin: '0 auto',
    '@media(max-width: 640px)': { top: '40px' }
  }),
  link: (0, _css.style)({
    margin: '0 1% 0 1%',
    textDecoration: 'none',
    color: _Theme.theme.colors.black,
    fontSize: '1.2em',
    fontWeight: 'bold',
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 1240px)': {
      fontSize: '1em',
      display: 'list-item',
      margin: '10px auto'
    }
  })
};

var resume = (0, _css.css)({
  position: 'relative',
  top: 'calc(50% + 20px)',
  textAlign: 'center',
  letterSpacing: '0.024em',
  '@media(max-width: 1240px)': { padding: '0 0.2em' },
  '@media(max-width: 640px)': {
    fontSize: '0.9em',
    margin: '5px auto',
    top: '70px'
  }
});

var halfside = (0, _css.css)({
  width: '50%',
  height: '100vh',
  position: 'absolute',
  top: '0',
  '@media(max-width: 640px)': { width: '100%' }
});

var left = (0, _css.css)({ left: '0', background: 'transparent' });

var right = (0, _css.css)({
  right: '0',
  background: _Theme.theme.colors.primary,
  zIndex: '999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media(max-width: 640px)': {
    top: '240px',
    left: '0',
    height: '100%',
    position: 'relative'
  }
});

var contactForm = {
  title: (0, _css.style)({ fontFamily: _Theme.theme.font.title, marginBottom: '1.5em' })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzb2NpYWxzIiwiY29uZmlnIiwibWV0YSIsImNvbnRhY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJoYWxmc2lkZSIsImxlZnQiLCJzb2NpYWwiLCJyZXN1bWUiLCJhcHBsaWNhdGlvbiIsImN2X3BkZl91cmwiLCJyaWdodCIsImVtYWlsIiwiY29udGFjdEZvcm0iLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwibWFyZ2luIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRGYW1pbHkiLCJmb250IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBV1c7QUFBQSxtQkFDcUIsS0FBS0EsS0FEMUI7QUFBQSxVQUNDQyxPQURELFVBQ0NBLE9BREQ7QUFBQSxVQUNVQyxNQURWLFVBQ1VBLE1BRFY7O0FBRVAsVUFBTUMsT0FBT0QsT0FBT0MsSUFBUCxDQUFZQyxPQUF6Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsaUJBQU9ELEtBQUtFLEtBRGQ7QUFFRSx1QkFBYUYsS0FBS0csV0FGcEI7QUFHRSxvQkFBVUgsS0FBS0k7QUFIakIsVUFERjtBQU1FO0FBQUE7QUFBQSxZQUFTLFdB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L2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX3RhZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3Jtcy9Db250YWN0Rm9ybSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb2NpYWxzOiBzb2NpYWxzLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb2NpYWxzLCBjb25maWcgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEuY29udGFjdFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfVxuICAgICAgICAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NzcyhoYWxmc2lkZSwgbGVmdCApfT5cbiAgICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVzdW1lfT5cbiAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB3YXRjaCBteSZuYnNwO1xuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtfdGFnfT5vbmxpbmUgcmVzdW1lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgJm5ic3A7b3ImbmJzcDtcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfT5cbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtfdGFnfT5kb3dubG9hZCBpdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MoaGFsZnNpZGUsIHJpZ2h0KX0+XG4gICAgICAgICAgPENvbnRhY3RGb3JtIHNlbmRUbz17Y29uZmlnLmFwcGxpY2F0aW9uLmVtYWlsfSBzdHlsZT17Y29udGFjdEZvcm19IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzb2NpYWwgPSB7XG4gIGNvbXBvbmVudDogc3R5bGUoe1xuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB0b3A6ICc0MHB4JyB9LFxuICB9KSxcbiAgbGluazogc3R5bGUoe1xuICAgIG1hcmdpbjogJzAgMSUgMCAxJScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsYWNrLFxuICAgIGZvbnRTaXplOiAnMS4yZW0nLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdsaXN0LWl0ZW0nLFxuICAgICAgbWFyZ2luOiAnMTBweCBhdXRvJyxcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHJlc3VtZSA9IGNzcyh7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB0b3A6ICdjYWxjKDUwJSArIDIwcHgpJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgbGV0dGVyU3BhY2luZzogJzAuMDI0ZW0nLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgcGFkZGluZzogJzAgMC4yZW0nIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nLFxuICAgIHRvcDogJzcwcHgnLFxuICB9XG59KVxuXG5jb25zdCBoYWxmc2lkZSA9IGNzcyh7XG4gIHdpZHRoOiAnNTAlJyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IHdpZHRoOiAnMTAwJScgfVxufSlcblxuY29uc3QgbGVmdCA9IGNzcyh7IGxlZnQ6ICcwJywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyB9KVxuXG5jb25zdCByaWdodCA9IGNzcyh7XG4gIHJpZ2h0OiAnMCcsXG4gIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICB6SW5kZXg6ICc5OTknLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgdG9wOiAnMjQwcHgnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbn0pXG5cbmNvbnN0IGNvbnRhY3RGb3JtID0ge1xuICB0aXRsZTogc3R5bGUoeyBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLCBtYXJnaW5Cb3R0b206ICcxLjVlbScgfSlcbn1cbiJdfQ==