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
    '@media(max-width: 640px)': { top: 'calc(80px / 2)' }
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
    },
    '@media(max-width: 640px)': {
      fontSize: '0.9em',
      margin: '5px auto'
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
    fontSize: '0.8em',
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

var left = (0, _css.css)({
  left: '0',
  background: 'transparent',
  '@media(max-width: 640px)': { height: '160px' }
});

var right = (0, _css.css)({
  right: '0',
  background: _Theme.theme.colors.primary,
  zIndex: '999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media(max-width: 640px)': {
    top: 'calc(160px + 20px)',
    left: '0',
    height: '100%',
    position: 'relative'
  }
});

var contactForm = {
  title: (0, _css.style)({
    fontFamily: _Theme.theme.font.title,
    marginBottom: '1.5em'
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzb2NpYWxzIiwiY29uZmlnIiwibWV0YSIsImNvbnRhY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJoYWxmc2lkZSIsImxlZnQiLCJzb2NpYWwiLCJyZXN1bWUiLCJhcHBsaWNhdGlvbiIsImN2X3BkZl91cmwiLCJyaWdodCIsImVtYWlsIiwiY29udGFjdEZvcm0iLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwibWFyZ2luIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRGYW1pbHkiLCJmb250IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBV1c7QUFBQSxtQkFDcUIsS0FBS0EsS0FEMUI7QUFBQSxVQUNDQyxPQURELFVBQ0NBLE9BREQ7QUFBQSxVQUNVQyxNQURWLFVBQ1VBLE1BRFY7O0FBRVAsVUFBTUMsT0FBT0QsT0FBT0MsSUFBUCxDQUFZQyxPQUF6Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFLDREQUFVLE9BQU9ELEtBQUtFLEtBQXRCO0FBQ1UsdUJBQWFGLEtBQUtHLFdBRDVCO0FBRVUsb0JBQVVILEtBQUtJLFFBRnpCLEdBREY7QUFJRTtBQUFBO0FBQUEsWUFBUyxX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TixDQUFXckMsS0FEWjtBQUVYc0Msa0JBQWM7QUFGSCxHQUFOO0FBRFcsQ0FBcEIiLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MsIHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IHRoZW1lLCBfdGFnIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1zL0NvbnRhY3RGb3JtJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvY2lhbHM6IHNvY2lhbHMsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvY2lhbHMsIGNvbmZpZyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5jb250YWN0XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MoaGFsZnNpZGUsIGxlZnQgKX0+XG4gICAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgPE1lbnUgbGlua3M9e3NvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Jlc3VtZX0+XG4gICAgICAgICAgICBZb3UgY2FuIGFsc28gd2F0Y2ggbXkmbmJzcDtcbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcmVzdW1lXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17X3RhZ30+b25saW5lIHJlc3VtZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICZuYnNwO29yJm5ic3A7XG4gICAgICAgICAgICA8TGluayBocmVmPXtjb25maWcuYXBwbGljYXRpb24uY3ZfcGRmX3VybH0+XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17X3RhZ30+ZG93bmxvYWQgaXQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzKGhhbGZzaWRlLCByaWdodCl9PlxuICAgICAgICAgIDxDb250YWN0Rm9ybSBzZW5kVG89e2NvbmZpZy5hcHBsaWNhdGlvbi5lbWFpbH0gc3R5bGU9e2NvbnRhY3RGb3JtfS8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzb2NpYWwgPSB7XG4gIGNvbXBvbmVudDogc3R5bGUoe1xuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzk5OScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB0b3A6ICdjYWxjKDgwcHggLyAyKScsIH0sXG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAxJSAwIDElJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgZm9udFNpemU6ICcxLjJlbScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICc6aG92ZXInOiB7IHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2xpc3QtaXRlbScsXG4gICAgICBtYXJnaW46ICcxMHB4IGF1dG8nLFxuICAgIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgbWFyZ2luOiAnNXB4IGF1dG8nLFxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgcmVzdW1lID0gY3NzKHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHRvcDogJ2NhbGMoNTAlICsgMjBweCknLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBsZXR0ZXJTcGFjaW5nOiAnMC4wMjRlbScsXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBwYWRkaW5nOiAnMCAwLjJlbScgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICBmb250U2l6ZTogJzAuOGVtJyxcbiAgICBtYXJnaW46ICc1cHggYXV0bycsXG4gICAgdG9wOiAnNzBweCcsXG4gIH1cbn0pXG5cbmNvbnN0IGhhbGZzaWRlID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgd2lkdGg6ICcxMDAlJyB9XG59KVxuXG5jb25zdCBsZWZ0ID0gY3NzKHtcbiAgbGVmdDogJzAnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBoZWlnaHQ6ICcxNjBweCcsIH1cbn0pXG5cbmNvbnN0IHJpZ2h0ID0gY3NzKHtcbiAgcmlnaHQ6ICcwJyxcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIHpJbmRleDogJzk5OScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHtcbiAgICB0b3A6ICdjYWxjKDE2MHB4ICsgMjBweCknLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbn0pXG5cbmNvbnN0IGNvbnRhY3RGb3JtID0ge1xuICB0aXRsZTogc3R5bGUoe1xuICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgbWFyZ2luQm90dG9tOiAnMS41ZW0nXG4gIH0pLFxufVxuIl19