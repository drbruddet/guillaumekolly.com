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

var Contact = function (_React$Component) {
  (0, _inherits3.default)(Contact, _React$Component);

  function Contact() {
    (0, _classCallCheck3.default)(this, Contact);
    return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
  }

  (0, _createClass3.default)(Contact, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          socials = _props.socials,
          config = _props.config;

      var meta = config.meta.contact;
      var sendTo = config.application.mailServer + config.application.email;

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
          _react2.default.createElement(_ContactForm2.default, { sendTo: sendTo, style: contactForm })
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
  return Contact;
}(_react2.default.Component);

exports.default = Contact;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiQ29udGFjdCIsInByb3BzIiwic29jaWFscyIsImNvbmZpZyIsIm1ldGEiLCJjb250YWN0Iiwic2VuZFRvIiwiYXBwbGljYXRpb24iLCJtYWlsU2VydmVyIiwiZW1haWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJoYWxmc2lkZSIsImxlZnQiLCJzb2NpYWwiLCJyZXN1bWUiLCJjdl9wZGZfdXJsIiwicmlnaHQiLCJjb250YWN0Rm9ybSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInRleHRUcmFuc2Zvcm0iLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInRvcCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJtYXJnaW4iLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udEZhbWlseSIsImZvbnQiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7OzZCQVNWO0FBQUEsbUJBQ3FCLEtBQUtDLEtBRDFCO0FBQUEsVUFDQ0MsT0FERCxVQUNDQSxPQUREO0FBQUEsVUFDVUMsTUFEVixVQUNVQSxNQURWOztBQUVQLFVBQU1DLE9BQU9ELE9BQU9DLElBQVAsQ0FBWUMsT0FBekI7QUFDQSxVQUFNQyxTQUFTSCxPQUFPSSxXQUFQLENBQW1CQyxVQUFuQixHQUFnQ0wsT0FBT0ksV0FBUCxDQUFtQkUsS0FBbEU7O0FBRUEsYUFDRTtB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LFlBQVksYUFBTUMsSUFBTixDQUFXbkMsS0FBekIsRUFBZ0NvQyxjQUFjLE9BQTlDLEVBQU47QUFEVyxDQUFwQiIsImZpbGUiOiJjb250YWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvQ29udGFjdEZvcm0nXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb2NpYWxzOiBzb2NpYWxzLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb2NpYWxzLCBjb25maWcgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEuY29udGFjdFxuICAgIGNvbnN0IHNlbmRUbyA9IGNvbmZpZy5hcHBsaWNhdGlvbi5tYWlsU2VydmVyICsgY29uZmlnLmFwcGxpY2F0aW9uLmVtYWlsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzKGhhbGZzaWRlLCBsZWZ0KX0+XG4gICAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgPE1lbnUgbGlua3M9e3NvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Jlc3VtZX0+XG4gICAgICAgICAgICBZb3UgY2FuIGFsc28gd2F0Y2ggbXkmbmJzcDtcbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcmVzdW1lXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17X3RhZ30+b25saW5lIHJlc3VtZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICZuYnNwO29yJm5ic3A7XG4gICAgICAgICAgICA8TGluayBocmVmPXtjb25maWcuYXBwbGljYXRpb24uY3ZfcGRmX3VybH0+XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17X3RhZ30+ZG93bmxvYWQgaXQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzKGhhbGZzaWRlLCByaWdodCl9PlxuICAgICAgICAgIDxDb250YWN0Rm9ybSBzZW5kVG89e3NlbmRUb30gc3R5bGU9e2NvbnRhY3RGb3JtfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSc6IHsgdG9wOiAnNDBweCcgfSxcbiAgfSksXG4gIGxpbms6IHN0eWxlKHtcbiAgICBtYXJnaW46ICcwIDElIDAgMSUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZXN1bWUgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdG9wOiAnY2FsYyg1MCUgKyAyMHB4KScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGxldHRlclNwYWNpbmc6ICcwLjAyNGVtJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IHBhZGRpbmc6ICcwIDAuMmVtJyB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgIG1hcmdpbjogJzVweCBhdXRvJyxcbiAgICB0b3A6ICc3MHB4JyxcbiAgfVxufSlcblxuY29uc3QgaGFsZnNpZGUgPSBjc3Moe1xuICB3aWR0aDogJzUwJScsXG4gIGhlaWdodDogJzEwMHZoJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogJzAnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB3aWR0aDogJzEwMCUnIH1cbn0pXG5cbmNvbnN0IGxlZnQgPSBjc3MoeyBsZWZ0OiAnMCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcgfSlcblxuY29uc3QgcmlnaHQgPSBjc3Moe1xuICByaWdodDogJzAnLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgekluZGV4OiAnOTk5JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzoge1xuICAgIHRvcDogJzI0MHB4JyxcbiAgICBsZWZ0OiAnMCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG59KVxuXG5jb25zdCBjb250YWN0Rm9ybSA9IHtcbiAgdGl0bGU6IHN0eWxlKHsgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSwgbWFyZ2luQm90dG9tOiAnMS41ZW0nIH0pXG59XG4iXX0=