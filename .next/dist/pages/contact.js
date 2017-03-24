'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _css, _style;

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css3 = _interopRequireDefault(_css2);

var _glamor = require('glamor');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

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

var centeredbox = (0, _css3.default)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiY2VudGVyZWRib3giLCJmb3JtYmxvY2siLCJmb3Jtc3R5bGUiLCJuYW1lIiwiaW5wdXQiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwidGV4dGFlcmFtZXJnZSIsInN1Ym1pdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiIsIk1zVGV4dFNpemVBZGp1c3QiLCJXZWJraXRUZXh0U2l6ZUFkanVzdCIsInBvc2l0aW9uIiwicGFkZGluZyIsInRleHRBbGlnbiIsInpJbmRleCIsImJhY2tncm91bmQiLCJjb2xvciIsImZsb2F0IiwibWFyZ2luUmlnaHQiLCJmb250IiwibGluZUhlaWdodCIsImJvcmRlckJvdHRvbSIsImZvbnRTaXplIiwib3V0bGluZSIsInJlc2l6ZSIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBSyxXQUFXQSxXQUFoQjtBQUNFO0FBQ0UsYUFBTSwyQkFEUjtBQUVFLG1CQUFZO0FBRmQsTUFERjtBQUtFLGlFQUxGO0FBTUU7QUFBQTtBQUFBLFFBQUssV0FBV0MsU0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBTSxRQUFPLGdEQUFiO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBV0MsVUFBVUMsSUFBMUI7QUFDRSxtREFBTyxTQUFRLE1BQWYsR0FERjtBQUVFLG1EQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLFdBQVdELFVBQVVFLEtBQXBELEVBQTJELGFBQVksTUFBdkU7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBV0YsVUFBVUcsS0FBMUI7QUFDRSxtREFBTyxTQUFRLE9BQWYsR0FERjtBQUVFLG1EQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLFVBQXpCLEVBQW9DLFdBQVdILFVBQVVFLEtBQXpELEVBQWdFLGFBQVksT0FBNUU7QUFGRixTQUxGO0FBU0U7QUFBQTtBQUFBLFlBQUssV0FBV0YsVUFBVUksT0FBMUI7QUFDRSxtREFBTyxTQUFRLFNBQWYsR0FERjtBQUVFLG1EQUFPLE1BQUssU0FBWixFQUFzQixNQUFLLFVBQTNCLEVBQXNDLFdBQVdKLFVBQVVFLEtBQTNELEVBQWtFLGFBQVksU0FBOUU7QUFGRixTQVRGO0FBYUU7QUFBQTtBQUFBLFlBQUssV0FBV0YsVUFBVUssT0FBMUI7QUFDRSxtREFBTyxTQUFRLFNBQWYsR0FERjtBQUVFLHNEQUFVLFdBQVdDLGFBQXJCLEVBQW9DLE1BQUssTUFBekMsRUFBZ0QsTUFBSyxVQUFyRCxFQUFnRSxhQUFZLFNBQTVFLEVBQXNGLE1BQUssSUFBM0YsRUFBZ0csTUFBSyxHQUFyRyxFQUF5RyxjQUF6RztBQUZGLFNBYkY7QUFrQkUsaURBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssT0FBMUIsRUFBa0MsT0FBTSx1QkFBeEMsR0FsQkY7QUFtQkU7QUFBQTtBQUFBLFlBQUssV0FBV04sVUFBVU8sTUFBMUI7QUFDRSxtREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxNQUEzQjtBQURGO0FBbkJGO0FBRkY7QUFORixHQURhO0FBQUEsQzs7QUFtQ2YsSUFBTVQsY0FBYyxtQkFBSTtBQUN0QlUsV0FBUyxNQURhO0FBRXRCQyxjQUFZLFFBRlU7QUFHdEJDLGtCQUFnQixRQUhNO0FBSXRCQyxTQUFPLE9BSmU7QUFLdEJDLFVBQVE7QUFMYyxDQUFKLENBQXBCOztBQVFBLElBQU1iLFlBQVk7QUFDaEJjLFVBQVEsbUJBRFE7QUFFaEJDLFVBQVEsUUFGUTtBQUdoQkMsb0JBQWtCLE1BSEY7QUFJaEJDLHdCQUFzQixNQUpOO0FBS2hCQyxZQUFVLFVBTE07QUFNaEJDLFdBQVMsS0FOTztBQU9oQlAsU0FBTyxLQVBTO0FBUWhCUSxhQUFXLFFBUks7QUFTaEJDLFVBQVEsR0FUUTtBQVVoQkMsY0FBWSxhQVZJO0FBV2hCQyxTQUFPO0FBWFMsaURBWVIsR0FaUSxxREFhSixNQWJJLHVDQWNoQiwyQkFkZ0IsRUFjYTtBQUMzQkosV0FBUyxLQURrQjtBQUUzQlAsU0FBTztBQUZvQixDQWRiLHVDQWtCaEIsMEJBbEJnQixFQWtCWTtBQUMxQk8sV0FBUyxLQURpQjtBQUUxQlAsU0FBTztBQUZtQixDQWxCWixTQUFsQjs7QUF3QkEsSUFBTVgsWUFBWTtBQUNoQkMsUUFBTSxtQkFBTSxFQUFFc0IsT0FBTyxPQUFULEVBQWtCWixPQUFPLEtBQXpCLEVBQU4sQ0FEVTtBQUVoQlIsU0FBTyxtQkFBTSxFQUFFb0IsT0FBTyxPQUFULEVBQWtCWixPQUFPLEtBQXpCLEVBQWdDYSxhQUFhLEtBQTdDLEVBQU4sQ0FGUztBQUdoQnBCLFdBQVMsbUJBQU0sRUFBRU8sT0FBTyxNQUFULEVBQU4sQ0FITztBQUloQk4sV0FBUyxtQkFBTSxFQUFFa0IsT0FBTyxNQUFULEVBQU4sQ0FKTzs7QUFNaEJyQixTQUFPO0FBQ0x1QixVQUFNLFNBREQ7QUFFTFgsWUFBUSxHQUZIO0FBR0xZLGdCQUFZLFFBSFA7QUFJTEwsZ0JBQVksTUFKUDtBQUtMUixZQUFRLE1BTEg7QUFNTmMsa0JBQWMsbUJBTlI7QUFPTkMsY0FBVTtBQVBKLHFEQVFFLGlCQVJGLG9EQVNHLGVBVEgsa0RBVUMsTUFWRCw0REFXVyxZQVhYLHlEQVlRLFlBWlIsd0RBYU8sWUFiUCx1REFjTSxZQWROLHNEQWVLLFlBZkwsNkRBZ0JZLFVBaEJaLDBEQWlCUyxVQWpCVCx5REFrQlEsVUFsQlIsd0RBbUJPLFVBbkJQLHVEQW9CTSxVQXBCTix5Q0FxQkwsUUFyQkssRUFxQks7QUFDUkMsYUFBUyxNQUREO0FBRVJYLGFBQVM7QUFGRCxHQXJCTCxXQU5TOztBQWlDaEJYLFVBQVEsbUJBQU0sRUFBRVksV0FBVyxRQUFiLEVBQU47QUFqQ1EsQ0FBbEI7O0FBb0NBLElBQU1iLGdCQUFnQixtQkFBTU4sVUFBVUUsS0FBaEIsRUFBdUI7QUFDM0NVLFVBQVEsT0FEbUM7QUFFM0NrQixVQUFRLE1BRm1DO0FBRzNDbkIsU0FBTyxNQUhvQztBQUkzQ2UsY0FBWSxNQUorQjtBQUszQ0ssWUFBVTtBQUxpQyxDQUF2QixDQUF0QiIsImZpbGUiOiJjb250YWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSwgbWVyZ2UgfSBmcm9tICdnbGFtb3InXG5cbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBGdWxsQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0Z1bGxCYWNrZ3JvdW5kJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y2VudGVyZWRib3h9PlxuICAgIDxIZWFkQmxvY1xuICAgICAgdGl0bGU9XCJHdWlsbGF1bWUgS29sbHkgfCBDb250YWN0XCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIENvbnRhY3QgTWUgaGVyZS5cIlxuICAgIC8+XG4gICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1ibG9ja30+XG4gICAgICA8aDE+Q09OVEFDVCBNRTwvaDE+XG4gICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9ndWlsbGF1bWUua29sbHlAZ21haWwuY29tXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3Jtc3R5bGUubmFtZX0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGNsYXNzTmFtZT17Zm9ybXN0eWxlLmlucHV0fSBwbGFjZWhvbGRlcj1cIm5hbWVcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybXN0eWxlLmVtYWlsfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cIl9yZXBseXRvXCIgY2xhc3NOYW1lPXtmb3Jtc3R5bGUuaW5wdXR9IHBsYWNlaG9sZGVyPVwiZW1haWxcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybXN0eWxlLnN1YmplY3R9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3ViamVjdFwiPjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJqZWN0XCIgbmFtZT1cIl9zdWJqZWN0XCIgY2xhc3NOYW1lPXtmb3Jtc3R5bGUuaW5wdXR9IHBsYWNlaG9sZGVyPVwic3ViamVjdFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3Jtc3R5bGUubWVzc2FnZX0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+PC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXt0ZXh0YWVyYW1lcmdlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJfbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI1XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9uZXh0XCIgdmFsdWU9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIi8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3Jtc3R5bGUuc3VibWl0fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuY29uc3QgY2VudGVyZWRib3ggPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG59KVxuXG5jb25zdCBmb3JtYmxvY2sgPSBjc3Moe1xuICBib3JkZXI6ICdzb2xpZCA1cHggIzJiMmIyYicsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIE1zVGV4dFNpemVBZGp1c3Q6ICcxMDAlJyxcbiAgV2Via2l0VGV4dFNpemVBZGp1c3Q6ICcxMDAlJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHBhZGRpbmc6ICcyZW0nLFxuICB3aWR0aDogJzMwJScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHpJbmRleDogJzEnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJyMyNDI0MjQnLFxuICB6SW5kZXg6ICcxJyxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMmVtJyxcbiAgICB3aWR0aDogJzUwJScsXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgcGFkZGluZzogJzFlbScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfVxufSlcblxuY29uc3QgZm9ybXN0eWxlID0ge1xuICBuYW1lOiBzdHlsZSh7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzQ1JScgfSksXG4gIGVtYWlsOiBzdHlsZSh7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzQ1JScsIG1hcmdpblJpZ2h0OiAnMTAlJyB9KSxcbiAgc3ViamVjdDogc3R5bGUoeyB3aWR0aDogJzEwMCUnIH0pLFxuICBtZXNzYWdlOiBzdHlsZSh7IGZsb2F0OiAnbm9uZScgfSksXG5cbiAgaW5wdXQ6IHN0eWxlKHtcbiAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgbWFyZ2luOiAnMCcsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuXHQgIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCAjMmIyYjJiJyxcblx0ICBmb250U2l6ZTogJzFlbScsXG5cdCAgbWFyZ2luOiAnMGVtIDAgMS44NzVlbSAwJyxcblx0ICBwYWRkaW5nOiAnMCAwIDAuODc1ZW0gMCcsXG5cdCAgd2lkdGg6ICcxMDAlJyxcblx0ICBXZWJraXRCb3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0ICBNb3pCb3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0ICBNc0JveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHQgIE9Cb3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0ICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0ICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuXHQgIE1velRyYW5zaXRpb246ICdhbGwgMC4zcycsXG5cdCAgTXNUcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuXHQgIE9UcmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuXHQgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gICAgJzpmb2N1cyc6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHBhZGRpbmc6ICcwIDAgMC44NzVlbSAwJyxcbiAgICB9XG4gIH0pLFxuXG4gIHN1Ym1pdDogc3R5bGUoeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0pLFxufVxuXG5jb25zdCB0ZXh0YWVyYW1lcmdlID0gbWVyZ2UoZm9ybXN0eWxlLmlucHV0LCB7XG4gIGhlaWdodDogJzE1MHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGxpbmVIZWlnaHQ6ICcxNTAlJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbn0pXG4iXX0=