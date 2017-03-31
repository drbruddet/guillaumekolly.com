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

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Input = require('../components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = require('../components/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Button = require('../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Theme = require('../components/layout/Theme');

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
        null,
        _react2.default.createElement(_HeadBloc2.default, { title: 'Guillaume Kolly | Contact',
          description: 'Guillaume Kolly | Full stack developer living in Lyon. Contact Me here.' }),
        _react2.default.createElement(
          'section',
          { className: (0, _css2.default)(halfside, left) },
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
            ' or\xA0',
            _react2.default.createElement(
              _link2.default,
              { href: '#' },
              _react2.default.createElement(
                'a',
                { className: _Theme._tag },
                'download it'
              )
            ),
            '.'
          )
        ),
        _react2.default.createElement(
          'section',
          { className: (0, _css2.default)(halfside, right) },
          _react2.default.createElement(
            'div',
            { className: formblock },
            _react2.default.createElement(
              'h1',
              { className: title },
              'CONTACT ME'
            ),
            _react2.default.createElement(
              'form',
              { action: 'https://formspree.io/guillaume.kolly@gmail.com' },
              _react2.default.createElement(_Input2.default, { type: 'text', name: 'name', style: name }),
              _react2.default.createElement(_Input2.default, { type: 'email', name: 'email', style: email }),
              _react2.default.createElement(_Input2.default, { type: 'text', name: 'subject', style: subject }),
              _react2.default.createElement(_TextArea2.default, { name: 'message', style: message }),
              _react2.default.createElement('input', { type: 'hidden', name: '_next', value: 'http://localhost:3000' }),
              _react2.default.createElement(_Button2.default, { type: 'submit', value: 'Send', style: _Theme._button })
            )
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


var name = (0, _css2.default)({ float: 'right', width: '45%' });
var email = (0, _css2.default)({ float: 'right', width: '45%', marginRight: '10%' });
var subject = (0, _css2.default)({ width: '100%' });
var message = (0, _css2.default)({ float: 'none' });

var halfside = (0, _css2.default)({
  width: '50%',
  height: '100vh',
  position: 'absolute',
  top: '0',
  '@media(max-width: 600px)': { width: '100%' }
});

var left = (0, _css2.default)({
  left: '0',
  background: 'transparent',
  '@media(max-width: 600px)': { height: '160px' }
});

var right = (0, _css2.default)({
  right: '0',
  background: _Theme.theme.colors.teal,
  zIndex: '999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media(max-width: 600px)': {
    top: 'calc(160px + 20px)',
    left: '0',
    height: '100%',
    position: 'relative'
  }
});

var formblock = (0, _css2.default)({
  padding: '2em',
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
  '@media(max-width: 1240px)': {
    padding: '2em',
    width: '80%'
  },
  '@media(max-width: 600px)': {
    padding: '1em',
    width: '90%',
    height: '100%'
  }
});

var title = (0, _css2.default)({
  fontSize: '400%',
  color: _Theme.theme.colors.white,
  '@media(max-width: 1240px)': { fontSize: '200%' },
  '@media(max-width: 600px)': { fontSize: '200%' }
});

var social = {
  component: (0, _glamor.style)({
    textTransform: 'uppercase',
    zIndex: '999',
    position: 'relative',
    top: '50%',
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
    '@media(max-width: 600px)': { top: 'calc(80px / 2)' }
  }),
  link: (0, _glamor.style)({
    margin: '0 3% 0 0',
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
    '@media(max-width: 600px)': {
      fontSize: '0.9em',
      margin: '5px auto'
    }
  })
};

var resume = (0, _css2.default)({
  position: 'relative',
  top: 'calc(50% + 20px)',
  textAlign: 'center',
  '@media(max-width: 600px)': {
    fontSize: '0.8em',
    margin: '5px auto',
    top: '70px'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsic29jaWFscyIsInByb3BzIiwiaGFsZnNpZGUiLCJsZWZ0Iiwic29jaWFsIiwicmVzdW1lIiwicmlnaHQiLCJmb3JtYmxvY2siLCJ0aXRsZSIsIm5hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwiQ29tcG9uZW50IiwiZmxvYXQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJiYWNrZ3JvdW5kIiwiY29sb3JzIiwidGVhbCIsInpJbmRleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwibWFyZ2luIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJjb2xvciIsIndoaXRlIiwiY29tcG9uZW50IiwidGV4dFRyYW5zZm9ybSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImJsYWNrIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUFBLFVBQ0NBLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDREQUFVLE9BQU0sMkJBQWhCO0FBQ0UsdUJBQVkseUVBRGQsR0FERjtBQUdFO0FBQUE7QUFBQSxZQUFTLFdBQVcsbUJBQUlFLFFBQUosRUFBY0MsSUFBZCxDQUFwQjtBQUNFLHVFQURGO0FBRUUsMERBQU0sT0FBT0gsT0FBYixFQUFzQixPQUFPSSxNQUE3QixHQUZGO0FBR0U7QUFBQTtBQUFBLGNBQUssV0FBV0MsTUFBaEI7QUFBQTtBQUVFO0FBQUE7QUFBQSxnQkFBTSxjQUFOLEVBQWUsTUFBSyxTQUFwQjtBQUE4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RixVQUFVLE1BQVosRUFIYjtBQUloQiw4QkFBNEIsRUFBRUEsVUFBVSxNQUFaO0FBSlosQ0FBSixDQUFkOztBQU9BLElBQU0xQixTQUFTO0FBQ2I2QixhQUFXLG1CQUFNO0FBQ2ZDLG1CQUFlLFdBREE7QUFFZlgsWUFBUSxLQUZPO0FBR2ZMLGNBQVUsVUFISztBQUlmQyxTQUFLLEtBSlU7QUFLZkssYUFBUyxPQUxNO0FBTWZJLFlBQVEsUUFOTztBQU9mQyxlQUFXLFFBUEk7QUFRZixnQ0FBNEIsRUFBRVYsS0FBSyxnQkFBUDtBQVJiLEdBQU4sQ0FERTtBQVdiZ0IsUUFBTSxtQkFBTTtBQUNWUCxZQUFRLFVBREU7QUFFVlEsb0JBQWdCLE1BRk47QUFHVkwsV0FBTyxhQUFNVixNQUFOLENBQWFnQixLQUhWO0FBSVZQLGNBQVUsT0FKQTtBQUtWUSxnQkFBWSxNQUxGO0FBTVYsY0FBVSxFQUFFRixnQkFBZ0IsY0FBbEIsRUFOQTtBQU9WLGlDQUE2QjtBQUMzQk4sZ0JBQVUsS0FEaUI7QUFFM0JOLGVBQVMsV0FGa0I7QUFHM0JJLGNBQVE7QUFIbUIsS0FQbkI7QUFZVixnQ0FBNEI7QUFDMUJFLGdCQUFVLE9BRGdCO0FBRTFCRixjQUFRO0FBRmtCO0FBWmxCLEdBQU47QUFYTyxDQUFmOztBQThCQSxJQUFNdkIsU0FBUyxtQkFBSTtBQUNqQmEsWUFBVSxVQURPO0FBRWpCQyxPQUFLLGtCQUZZO0FBR2pCVSxhQUFXLFFBSE07QUFJakIsOEJBQTRCO0FBQzFCQyxjQUFVLE9BRGdCO0FBRTFCRixZQUFRLFVBRmtCO0FBRzFCVCxTQUFLO0FBSHFCO0FBSlgsQ0FBSixDQUFmIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgRnVsbEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9GdWxsQmFja2dyb3VuZCdcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0J1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dEFyZWEnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX3RhZywgX2J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHsgc29jaWFsczogc29jaWFscyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb2NpYWxzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jIHRpdGxlPVwiR3VpbGxhdW1lIEtvbGx5IHwgQ29udGFjdFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJHdWlsbGF1bWUgS29sbHkgfCBGdWxsIHN0YWNrIGRldmVsb3BlciBsaXZpbmcgaW4gTHlvbi4gQ29udGFjdCBNZSBoZXJlLlwiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzKGhhbGZzaWRlLCBsZWZ0ICl9PlxuICAgICAgICAgIDxGdWxsQmFja2dyb3VuZCAvPlxuICAgICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17c29jaWFsfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyZXN1bWV9PlxuICAgICAgICAgICAgWW91IGNhbiBhbHNvIHdhdGNoIG15Jm5ic3A7XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL3Jlc3VtZVwiPjxhIGNsYXNzTmFtZT17X3RhZ30+b25saW5lIHJlc3VtZTwvYT48L0xpbms+IG9yJm5ic3A7XG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPjxhIGNsYXNzTmFtZT17X3RhZ30+ZG93bmxvYWQgaXQ8L2E+PC9MaW5rPi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NzcyhoYWxmc2lkZSwgcmlnaHQpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWJsb2NrfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3RpdGxlfT5DT05UQUNUIE1FPC9oMT5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2d1aWxsYXVtZS5rb2xseUBnbWFpbC5jb21cIj5cbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBzdHlsZT17bmFtZX0gLz5cbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHN0eWxlPXtlbWFpbH0gLz5cbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBzdHlsZT17c3ViamVjdH0gLz5cbiAgICAgICAgICAgICAgPFRleHRBcmVhIG5hbWU9XCJtZXNzYWdlXCIgc3R5bGU9e21lc3NhZ2V9IC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9uZXh0XCIgdmFsdWU9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiBzdHlsZT17X2J1dHRvbn0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG5hbWUgPSBjc3MoeyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc0NSUnIH0pXG5jb25zdCBlbWFpbCA9IGNzcyh7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzQ1JScsIG1hcmdpblJpZ2h0OiAnMTAlJyB9KVxuY29uc3Qgc3ViamVjdCA9IGNzcyh7IHdpZHRoOiAnMTAwJScgfSlcbmNvbnN0IG1lc3NhZ2UgPSBjc3MoeyBmbG9hdDogJ25vbmUnIH0pXG5cbmNvbnN0IGhhbGZzaWRlID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgd2lkdGg6ICcxMDAlJyB9XG59KVxuXG5jb25zdCBsZWZ0ID0gY3NzKHtcbiAgbGVmdDogJzAnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzogeyBoZWlnaHQ6ICcxNjBweCcsIH1cbn0pXG5cbmNvbnN0IHJpZ2h0ID0gY3NzKHtcbiAgcmlnaHQ6ICcwJyxcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnRlYWwsXG4gIHpJbmRleDogJzk5OScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICB0b3A6ICdjYWxjKDE2MHB4ICsgMjBweCknLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfVxufSlcblxuY29uc3QgZm9ybWJsb2NrID0gY3NzKHtcbiAgcGFkZGluZzogJzJlbScsXG4gIHdpZHRoOiAnODAlJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgcGFkZGluZzogJzJlbScsXG4gICAgd2lkdGg6ICc4MCUnLFxuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgIHBhZGRpbmc6ICcxZW0nLFxuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfVxufSlcblxuY29uc3QgdGl0bGUgPSBjc3Moe1xuICBmb250U2l6ZTogJzQwMCUnLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgZm9udFNpemU6ICcyMDAlJywgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgZm9udFNpemU6ICcyMDAlJywgfVxufSlcblxuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgdG9wOiAnY2FsYyg4MHB4IC8gMiknLCB9XG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAzJSAwIDAnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBtYXJnaW46ICc1cHggYXV0bycsXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZXN1bWUgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdG9wOiAnY2FsYyg1MCUgKyAyMHB4KScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nLFxuICAgIHRvcDogJzcwcHgnLFxuICB9XG59KVxuIl19