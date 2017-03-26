'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _css;

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css3 = _interopRequireDefault(_css2);

var _glamor = require('glamor');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _Input = require('../components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = require('../components/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: centeredbox },
    _react2.default.createElement(_HeadBloc2.default, {
      title: 'Guillaume Kolly | Contact',
      description: 'Guillaume Kolly | Full stack developer living in Lyon. Contact Me here.'
    }),
    _react2.default.createElement(_FullBackground2.default, null),
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
        _react2.default.createElement(_Input2.default, { type: 'text', name: 'name', style: name }),
        _react2.default.createElement(_Input2.default, { type: 'email', name: 'email', style: email }),
        _react2.default.createElement(_Input2.default, { type: 'text', name: 'subject', style: subject }),
        _react2.default.createElement(_TextArea2.default, { name: 'message', style: message }),
        _react2.default.createElement('input', { type: 'hidden', name: '_next', value: 'http://localhost:3000' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { type: 'submit', value: 'Send' })
        )
      )
    )
  );
};

var name = (0, _css3.default)({ float: 'right', width: '45%' });
var email = (0, _css3.default)({ float: 'right', width: '45%', marginRight: '10%' });
var subject = (0, _css3.default)({ width: '100%' });
var message = (0, _css3.default)({ float: 'none' });

var formblock = (0, _css3.default)((_css = {
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
  color: '#242424'
}, (0, _defineProperty3.default)(_css, 'zIndex', '1'), (0, _defineProperty3.default)(_css, 'background', '#fff'), (0, _defineProperty3.default)(_css, '@media(max-width: 1240px)', {
  padding: '2em',
  width: '50%'
}), (0, _defineProperty3.default)(_css, '@media(max-width: 600px)', {
  padding: '1em',
  width: '100%'
}), _css));

var centeredbox = (0, _css3.default)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiY2VudGVyZWRib3giLCJmb3JtYmxvY2siLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsImZsb2F0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImJvcmRlciIsIm1hcmdpbiIsIk1zVGV4dFNpemVBZGp1c3QiLCJXZWJraXRUZXh0U2l6ZUFkanVzdCIsInBvc2l0aW9uIiwicGFkZGluZyIsInRleHRBbGlnbiIsInpJbmRleCIsImJhY2tncm91bmQiLCJjb2xvciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBSyxXQUFXQSxXQUFoQjtBQUNFO0FBQ0UsYUFBTSwyQkFEUjtBQUVFLG1CQUFZO0FBRmQsTUFERjtBQUtFLGlFQUxGO0FBTUU7QUFBQTtBQUFBLFFBQUssV0FBV0MsU0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBTSxRQUFPLGdEQUFiO0FBQ0UseURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsT0FBT0MsSUFBdEMsR0FERjtBQUVFLHlEQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE9BQXpCLEVBQWlDLE9BQU9DLEtBQXhDLEdBRkY7QUFHRSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxTQUF4QixFQUFrQyxPQUFPQyxPQUF6QyxHQUhGO0FBSUUsNERBQVUsTUFBSyxTQUFmLEVBQXlCLE9BQU9DLE9BQWhDLEdBSkY7QUFLRSxpREFBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxPQUExQixFQUFrQyxPQUFNLHVCQUF4QyxHQUxGO0FBTUU7QUFBQTtBQUFBO0FBQ0UsbURBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sTUFBM0I7QUFERjtBQU5GO0FBRkY7QUFORixHQURhO0FBQUEsQzs7QUFzQmYsSUFBTUgsT0FBTyxtQkFBSSxFQUFFSSxPQUFPLE9BQVQsRUFBa0JDLE9BQU8sS0FBekIsRUFBSixDQUFiO0FBQ0EsSUFBTUosUUFBUSxtQkFBSSxFQUFFRyxPQUFPLE9BQVQsRUFBa0JDLE9BQU8sS0FBekIsRUFBZ0NDLGFBQWEsS0FBN0MsRUFBSixDQUFkO0FBQ0EsSUFBTUosVUFBVSxtQkFBSSxFQUFFRyxPQUFPLE1BQVQsRUFBSixDQUFoQjtBQUNBLElBQU1GLFVBQVUsbUJBQUksRUFBRUMsT0FBTyxNQUFULEVBQUosQ0FBaEI7O0FBRUEsSUFBTUwsWUFBWTtBQUNoQlEsVUFBUSxtQkFEUTtBQUVoQkMsVUFBUSxRQUZRO0FBR2hCQyxvQkFBa0IsTUFIRjtBQUloQkMsd0JBQXNCLE1BSk47QUFLaEJDLFlBQVUsVUFMTTtBQU1oQkMsV0FBUyxLQU5PO0FBT2hCUCxTQUFPLEtBUFM7QUFRaEJRLGFBQVcsUUFSSztBQVNoQkMsVUFBUSxHQVRRO0FBVWhCQyxjQUFZLGFBVkk7QUFXaEJDLFNBQU87QUFYUyxpREFZUixHQVpRLHFEQWFKLE1BYkksdUNBY2hCLDJCQWRnQixFQWNhO0FBQzNCSixXQUFTLEtBRGtCO0FBRTNCUCxTQUFPO0FBRm9CLENBZGIsdUNBa0JoQiwwQkFsQmdCLEVBa0JZO0FBQzFCTyxXQUFTLEtBRGlCO0FBRTFCUCxTQUFPO0FBRm1CLENBbEJaLFNBQWxCOztBQXdCQSxJQUFNUCxjQUFjLG1CQUFJO0FBQ3RCbUIsV0FBUyxNQURhO0FBRXRCQyxjQUFZLFFBRlU7QUFHdEJDLGtCQUFnQixRQUhNO0FBSXRCZCxTQUFPLE9BSmU7QUFLdEJlLFVBQVE7QUFMYyxDQUFKLENBQXBCIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlLCBtZXJnZSB9IGZyb20gJ2dsYW1vcidcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL1RleHRBcmVhJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWRib3h9PlxuICAgIDxIZWFkQmxvY1xuICAgICAgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHkgfCBDb250YWN0XCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIENvbnRhY3QgTWUgaGVyZS5cIlxuICAgIC8+XG4gICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1ibG9ja30+XG4gICAgICA8aDE+Q09OVEFDVCBNRTwvaDE+XG4gICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9ndWlsbGF1bWUua29sbHlAZ21haWwuY29tXCI+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgc3R5bGU9e25hbWV9Lz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHN0eWxlPXtlbWFpbH0vPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIHN0eWxlPXtzdWJqZWN0fS8+XG4gICAgICAgIDxUZXh0QXJlYSBuYW1lPVwibWVzc2FnZVwiIHN0eWxlPXttZXNzYWdlfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbmV4dFwiIHZhbHVlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5jb25zdCBuYW1lID0gY3NzKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJyB9KVxuY29uc3QgZW1haWwgPSBjc3MoeyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc0NSUnLCBtYXJnaW5SaWdodDogJzEwJScgfSlcbmNvbnN0IHN1YmplY3QgPSBjc3MoeyB3aWR0aDogJzEwMCUnIH0pXG5jb25zdCBtZXNzYWdlID0gY3NzKHsgZmxvYXQ6ICdub25lJyB9KVxuXG5jb25zdCBmb3JtYmxvY2sgPSBjc3Moe1xuICBib3JkZXI6ICdzb2xpZCA1cHggIzJiMmIyYicsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIE1zVGV4dFNpemVBZGp1c3Q6ICcxMDAlJyxcbiAgV2Via2l0VGV4dFNpemVBZGp1c3Q6ICcxMDAlJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHBhZGRpbmc6ICcyZW0nLFxuICB3aWR0aDogJzMwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHpJbmRleDogJzEnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJyMyNDI0MjQnLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMmVtJyxcbiAgICB3aWR0aDogJzUwJScsXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgcGFkZGluZzogJzFlbScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfVxufSlcblxuY29uc3QgY2VudGVyZWRib3ggPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG59KVxuIl19