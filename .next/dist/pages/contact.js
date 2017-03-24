'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _style;

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _glamor = require('glamor');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: centeredbox },
    _react2.default.createElement(_HeadBloc2.default, {
      title: 'Guillaume Kolly | Contact',
      description: 'Guillaume Kolly | Full stack developer living in Lyon. Contact Me here.'
    }),
    _react2.default.createElement(
      'div',
      { className: formblock },
      _react2.default.createElement(
        'h1',
        null,
        'CONTACT ME'
      ),
      _react2.default.createElement(
        'form',
        { action: 'https://formspree.io/guillaume.kolly@gmail.com' },
        _react2.default.createElement(
          'div',
          { className: formstyle.name },
          _react2.default.createElement('label', { htmlFor: 'name' }),
          _react2.default.createElement('input', { type: 'text', name: 'name', className: formstyle.input, placeholder: 'name' })
        ),
        _react2.default.createElement(
          'div',
          { className: formstyle.email },
          _react2.default.createElement('label', { htmlFor: 'email' }),
          _react2.default.createElement('input', { type: 'email', name: '_replyto', className: formstyle.input, placeholder: 'email' })
        ),
        _react2.default.createElement(
          'div',
          { className: formstyle.subject },
          _react2.default.createElement('label', { htmlFor: 'subject' }),
          _react2.default.createElement('input', { type: 'subject', name: '_subject', className: formstyle.input, placeholder: 'subject' })
        ),
        _react2.default.createElement(
          'div',
          { className: formstyle.message },
          _react2.default.createElement('label', { htmlFor: 'message' }),
          _react2.default.createElement('textarea', { className: textaeramerge, type: 'text', name: '_message', placeholder: 'message', cols: '30', rows: '5', required: true })
        ),
        _react2.default.createElement('input', { type: 'hidden', name: '_next', value: 'http://localhost:3000' }),
        _react2.default.createElement(
          'div',
          { className: formstyle.submit },
          _react2.default.createElement('input', { type: 'submit', value: 'Send' })
        )
      )
    )
  );
};

var centeredbox = (0, _css2.default)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
});

var formblock = (0, _css2.default)({
  border: 'solid 5px #2b2b2b',
  margin: '0 auto',
  MsTextSizeAdjust: '100%',
  WebkitTextSizeAdjust: '100%',
  position: 'relative',
  padding: '2em',
  width: '30%',
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: '#242424',
  '@media(max-width: 1240px)': {
    padding: '2em',
    width: '50%'
  },
  '@media(max-width: 600px)': {
    padding: '1em',
    width: '100%'
  }
});

var formstyle = {
  name: (0, _glamor.style)({ float: 'right', width: '45%' }),
  email: (0, _glamor.style)({ float: 'right', width: '45%', marginRight: '10%' }),
  subject: (0, _glamor.style)({ width: '100%' }),
  message: (0, _glamor.style)({ float: 'none' }),

  input: (0, _glamor.style)((_style = {
    font: 'inherit',
    margin: '0',
    lineHeight: 'normal',
    background: 'none',
    border: 'none',
    borderBottom: 'solid 2px #2b2b2b',
    fontSize: '1em'
  }, (0, _defineProperty3.default)(_style, 'margin', '0em 0 1.875em 0'), (0, _defineProperty3.default)(_style, 'padding', '0 0 0.875em 0'), (0, _defineProperty3.default)(_style, 'width', '100%'), (0, _defineProperty3.default)(_style, 'WebkitBoxSizing', 'border-box'), (0, _defineProperty3.default)(_style, 'MozBoxSizing', 'border-box'), (0, _defineProperty3.default)(_style, 'MsBoxSizing', 'border-box'), (0, _defineProperty3.default)(_style, 'OBoxSizing', 'border-box'), (0, _defineProperty3.default)(_style, 'boxSizing', 'border-box'), (0, _defineProperty3.default)(_style, 'WebkitTransition', 'all 0.3s'), (0, _defineProperty3.default)(_style, 'MozTransition', 'all 0.3s'), (0, _defineProperty3.default)(_style, 'MsTransition', 'all 0.3s'), (0, _defineProperty3.default)(_style, 'OTransition', 'all 0.3s'), (0, _defineProperty3.default)(_style, 'transition', 'all 0.3s'), (0, _defineProperty3.default)(_style, ':focus', {
    outline: 'none',
    padding: '0 0 0.875em 0'
  }), _style)),

  submit: (0, _glamor.style)({ textAlign: 'center' })
};

var textaeramerge = (0, _glamor.merge)(formstyle.input, {
  height: '150px',
  resize: 'none',
  width: '100%',
  lineHeight: '150%',
  overflow: 'auto'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiY2VudGVyZWRib3giLCJmb3JtYmxvY2siLCJmb3Jtc3R5bGUiLCJuYW1lIiwiaW5wdXQiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwidGV4dGFlcmFtZXJnZSIsInN1Ym1pdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiIsIk1zVGV4dFNpemVBZGp1c3QiLCJXZWJraXRUZXh0U2l6ZUFkanVzdCIsInBvc2l0aW9uIiwicGFkZGluZyIsInRleHRBbGlnbiIsInpJbmRleCIsImJhY2tncm91bmQiLCJjb2xvciIsImZsb2F0IiwibWFyZ2luUmlnaHQiLCJmb250IiwibGluZUhlaWdodCIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwib3V0bGluZSIsInJlc2l6ZSIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7OztrQkFFZTtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQUssV0FBV0EsV0FBaEI7QUFDRTtBQUNFLGFBQU0sMkJBRFI7QUFFRSxtQkFBWTtBQUZkLE1BREY7QUFLRTtBQUFBO0FBQUEsUUFBSyxXQUFXQyxTQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFNLFFBQU8sZ0RBQWI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFXQyxVQUFVQyxJQUExQjtBQUNFLG1EQUFPLFNBQVEsTUFBZixHQURGO0FBRUUsbURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsV0FBV0QsVUFBVUUsS0FBcEQsRUFBMkQsYUFBWSxNQUF2RTtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUEsWUFBSyxXQUFXRixVQUFVRyxLQUExQjtBQUNFLG1EQUFPLFNBQVEsT0FBZixHQURGO0FBRUUsbURBQU8s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QU8sTUFIb0M7QUFJM0NlLGNBQVksTUFKK0I7QUFLM0NLLFlBQVU7QUFMaUMsQ0FBdkIsQ0FBdEIiLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IHsgc3R5bGUsIG1lcmdlIH0gZnJvbSAnZ2xhbW9yJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtjZW50ZXJlZGJveH0+XG4gICAgPEhlYWRCbG9jXG4gICAgICB0aXRsZT1cIkd1aWxsYXVtZSBLb2xseSB8IENvbnRhY3RcIlxuICAgICAgZGVzY3JpcHRpb249XCJHdWlsbGF1bWUgS29sbHkgfCBGdWxsIHN0YWNrIGRldmVsb3BlciBsaXZpbmcgaW4gTHlvbi4gQ29udGFjdCBNZSBoZXJlLlwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWJsb2NrfT5cbiAgICAgIDxoMT5DT05UQUNUIE1FPC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2d1aWxsYXVtZS5rb2xseUBnbWFpbC5jb21cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1zdHlsZS5uYW1lfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj48L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgY2xhc3NOYW1lPXtmb3Jtc3R5bGUuaW5wdXR9IHBsYWNlaG9sZGVyPVwibmFtZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3Jtc3R5bGUuZW1haWx9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj48L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiX3JlcGx5dG9cIiBjbGFzc05hbWU9e2Zvcm1zdHlsZS5pbnB1dH0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3Jtc3R5bGUuc3ViamVjdH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJqZWN0XCI+PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1YmplY3RcIiBuYW1lPVwiX3N1YmplY3RcIiBjbGFzc05hbWU9e2Zvcm1zdHlsZS5pbnB1dH0gcGxhY2Vob2xkZXI9XCJzdWJqZWN0XCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1zdHlsZS5tZXNzYWdlfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj48L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e3RleHRhZXJhbWVyZ2V9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIl9tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJtZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjVcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX25leHRcIiB2YWx1ZT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1zdHlsZS5zdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5jb25zdCBjZW50ZXJlZGJveCA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIGhlaWdodDogJzEwMHZoJyxcbn0pXG5cbmNvbnN0IGZvcm1ibG9jayA9IGNzcyh7XG4gIGJvcmRlcjogJ3NvbGlkIDVweCAjMmIyYjJiJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgTXNUZXh0U2l6ZUFkanVzdDogJzEwMCUnLFxuICBXZWJraXRUZXh0U2l6ZUFkanVzdDogJzEwMCUnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgcGFkZGluZzogJzJlbScsXG4gIHdpZHRoOiAnMzAlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgekluZGV4OiAnMScsXG4gIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gIGNvbG9yOiAnIzI0MjQyNCcsXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgIHBhZGRpbmc6ICcyZW0nLFxuICAgIHdpZHRoOiAnNTAlJyxcbiAgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMWVtJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9XG59KVxuXG5jb25zdCBmb3Jtc3R5bGUgPSB7XG4gIG5hbWU6IHN0eWxlKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJyB9KSxcbiAgZW1haWw6IHN0eWxlKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJywgbWFyZ2luUmlnaHQ6ICcxMCUnIH0pLFxuICBzdWJqZWN0OiBzdHlsZSh7IHdpZHRoOiAnMTAwJScgfSksXG4gIG1lc3NhZ2U6IHN0eWxlKHsgZmxvYXQ6ICdub25lJyB9KSxcblxuICBpbnB1dDogc3R5bGUoe1xuICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICBtYXJnaW46ICcwJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG5cdCAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4ICMyYjJiMmInLFxuXHQgIGZvbnRTaXplOiAnMWVtJyxcblx0ICBtYXJnaW46ICcwZW0gMCAxLjg3NWVtIDAnLFxuXHQgIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcblx0ICB3aWR0aDogJzEwMCUnLFxuXHQgIFdlYmtpdEJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHQgIE1vekJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHQgIE1zQm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdCAgT0JveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHQgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHQgIFdlYmtpdFRyYW5zaXRpb246ICdhbGwgMC4zcycsXG5cdCAgTW96VHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcblx0ICBNc1RyYW5zaXRpb246ICdhbGwgMC4zcycsXG5cdCAgT1RyYW5zaXRpb246ICdhbGwgMC4zcycsXG5cdCAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgICAnOmZvY3VzJzoge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgcGFkZGluZzogJzAgMCAwLjg3NWVtIDAnLFxuICAgIH1cbiAgfSksXG5cbiAgc3VibWl0OiBzdHlsZSh7IHRleHRBbGlnbjogJ2NlbnRlcicgfSksXG59XG5cbmNvbnN0IHRleHRhZXJhbWVyZ2UgPSBtZXJnZShmb3Jtc3R5bGUuaW5wdXQsIHtcbiAgaGVpZ2h0OiAnMTUwcHgnLFxuICByZXNpemU6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbGluZUhlaWdodDogJzE1MCUnLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxufSlcbiJdfQ==