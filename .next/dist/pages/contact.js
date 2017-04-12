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
        _react2.default.createElement(_HeadBloc2.default, { title: meta.title,
          description: meta.description,
          keywords: meta.keywords }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzb2NpYWxzIiwiY29uZmlnIiwibWV0YSIsImNvbnRhY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJoYWxmc2lkZSIsImxlZnQiLCJzb2NpYWwiLCJyZXN1bWUiLCJhcHBsaWNhdGlvbiIsImN2X3BkZl91cmwiLCJyaWdodCIsImVtYWlsIiwiY29udGFjdEZvcm0iLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwibWFyZ2luIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRGYW1pbHkiLCJmb250IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBV1c7QUFBQSxtQkFDcUIsS0FBS0EsS0FEMUI7QUFBQSxVQUNDQyxPQURELFVBQ0NBLE9BREQ7QUFBQSxVQUNVQyxNQURWLFVBQ1VBLE1BRFY7O0FBRVAsVUFBTUMsT0FBT0QsT0FBT0MsSUFBUCxDQUFZQyxPQUF6Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFLDREQUFVLE9BQU9ELEtBQUtFLEtBQXRCO0FBQ1UsdUJBQWFGLEtBQUtHLFdBRDVCO0FBRVUsb0JBQVVILEtBQUtJLFFBRnpCLEdBREY7QUFJRTtBQUFBO0FBQUEsWUFBUyxX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cy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvQ29udGFjdEZvcm0nXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc29jaWFsczogc29jaWFscyxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscywgY29uZmlnIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLmNvbnRhY3RcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfSAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NzcyhoYWxmc2lkZSwgbGVmdCApfT5cbiAgICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVzdW1lfT5cbiAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB3YXRjaCBteSZuYnNwO1xuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtfdGFnfT5vbmxpbmUgcmVzdW1lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgJm5ic3A7b3ImbmJzcDtcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfT5cbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtfdGFnfT5kb3dubG9hZCBpdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MoaGFsZnNpZGUsIHJpZ2h0KX0+XG4gICAgICAgICAgPENvbnRhY3RGb3JtIHNlbmRUbz17Y29uZmlnLmFwcGxpY2F0aW9uLmVtYWlsfSBzdHlsZT17Y29udGFjdEZvcm19Lz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHNvY2lhbCA9IHtcbiAgY29tcG9uZW50OiBzdHlsZSh7XG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnOTk5JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IHRvcDogJzQwcHgnIH0sXG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAxJSAwIDElJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgZm9udFNpemU6ICcxLjJlbScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICc6aG92ZXInOiB7IHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2xpc3QtaXRlbScsXG4gICAgICBtYXJnaW46ICcxMHB4IGF1dG8nLFxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgcmVzdW1lID0gY3NzKHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHRvcDogJ2NhbGMoNTAlICsgMjBweCknLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBsZXR0ZXJTcGFjaW5nOiAnMC4wMjRlbScsXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBwYWRkaW5nOiAnMCAwLjJlbScgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICBtYXJnaW46ICc1cHggYXV0bycsXG4gICAgdG9wOiAnNzBweCcsXG4gIH1cbn0pXG5cbmNvbnN0IGhhbGZzaWRlID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgd2lkdGg6ICcxMDAlJyB9XG59KVxuXG5jb25zdCBsZWZ0ID0gY3NzKHsgbGVmdDogJzAnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIH0pXG5cbmNvbnN0IHJpZ2h0ID0gY3NzKHtcbiAgcmlnaHQ6ICcwJyxcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIHpJbmRleDogJzk5OScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB0b3A6ICcyNDBweCcsXG4gICAgbGVmdDogJzAnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxufSlcblxuY29uc3QgY29udGFjdEZvcm0gPSB7XG4gIHRpdGxlOiBzdHlsZSh7IGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQudGl0bGUsIG1hcmdpbkJvdHRvbTogJzEuNWVtJyB9KVxufVxuIl19