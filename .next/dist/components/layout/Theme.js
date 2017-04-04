'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._centeredBox = exports._verticalMenu = exports._button = exports._tag = exports.theme = undefined;

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _theme = require('../../data/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = _theme2.default;

var _tag = (0, _css2.default)({
  color: theme.colors.text,
  fontWeight: '700',
  transition: 'all 0.4s 0.2s ease-in-out',
  borderRadius: '5px',
  padding: '1px 3px 1px 3px',
  backgroundColor: theme.colors.trans_primary,
  textDecoration: 'none',
  ':hover': {
    transform: 'scale(1.05, 1.4)',
    transitionDelay: '0s',
    transitionDuration: '0.2s',
    backgroundColor: theme.colors.primary
  }
});

var _button = (0, _css2.default)({
  background: theme.colors.white,
  color: theme.colors.primary
});

var _verticalMenu = {
  component: (0, _css2.default)({
    display: 'inline-block',
    margin: '15px 20px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none'
  }),
  link: (0, _css2.default)({
    margin: '0 10px 0 0',
    textDecoration: 'none',
    color: theme.colors.black,
    ':hover': {
      textDecoration: 'line-through'
    }
  })
};

var _centeredBox = (0, _css2.default)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
});

exports.theme = theme;
exports._tag = _tag;
exports._button = _button;
exports._verticalMenu = _verticalMenu;
exports._centeredBox = _centeredBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L1RoZW1lLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiX3RhZyIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImZvbnRXZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3ByaW1hcnkiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInByaW1hcnkiLCJfYnV0dG9uIiwiYmFja2dyb3VuZCIsIndoaXRlIiwiX3ZlcnRpY2FsTWVudSIsImNvbXBvbmVudCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwibGluayIsImJsYWNrIiwiX2NlbnRlcmVkQm94IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSx1QkFBTjs7QUFFQSxJQUFNQyxPQUFPLG1CQUFJO0FBQ2ZDLFNBQU9GLE1BQU1HLE1BQU4sQ0FBYUMsSUFETDtBQUVmQyxjQUFZLEtBRkc7QUFHZkMsY0FBWSwyQkFIRztBQUlmQyxnQkFBYyxLQUpDO0FBS2ZDLFdBQVMsaUJBTE07QUFNZkMsbUJBQWlCVCxNQUFNRyxNQUFOLENBQWFPLGFBTmY7QUFPZkMsa0JBQWdCLE1BUEQ7QUFRZixZQUFVO0FBQ1JDLGVBQVcsa0JBREg7QUFFUkMscUJBQWlCLElBRlQ7QUFHUkMsd0JBQW9CLE1BSFo7QUFJUkwscUJBQWlCVCxNQUFNRyxNQUFOLENBQWFZO0FBSnRCO0FBUkssQ0FBSixDQUFiOztBQWdCQSxJQUFNQyxVQUFVLG1CQUFJO0FBQ2xCQyxjQUFZakIsTUFBTUcsTUFBTixDQUFhZSxLQURQO0FBRWxCaEIsU0FBT0YsTUFBTUcsTUFBTixDQUFhWTtBQUZGLENBQUosQ0FBaEI7O0FBS0EsSUFBTUksZ0JBQWdCO0FBQ3BCQyxhQUFXLG1CQUFJO0FBQ2JDLGFBQVMsY0FESTtBQUViQyxZQUFRLFdBRks7QUFHYkMscUJBQWlCLFVBSEo7QUFJYlgsZUFBVyxrQ0FKRTtBQUtiWSxtQkFBZSxXQUxGO0FBTWJDLFlBQVEsR0FOSztBQU9iZCxvQkFBZ0I7QUFQSCxHQUFKLENBRFM7QUFVcEJlLFFBQU0sbUJBQUk7QUFDUkosWUFBUSxZQURBO0FBRVJYLG9CQUFnQixNQUZSO0FBR1JULFdBQU9GLE1BQU1HLE1BQU4sQ0FBYXdCLEtBSFo7QUFJUixjQUFVO0FBQ1JoQixzQkFBZ0I7QUFEUjtBQUpGLEdBQUo7QUFWYyxDQUF0Qjs7QUFvQkEsSUFBTWlCLGVBQWUsbUJBQUk7QUFDdkJQLFdBQVMsTUFEYztBQUV2QlEsY0FBWSxRQUZXO0FBR3ZCQyxrQkFBZ0IsUUFITztBQUl2QkMsU0FBTyxPQUpnQjtBQUt2QkMsVUFBUTtBQUxlLENBQUosQ0FBckI7O1FBUVNoQyxLLEdBQUFBLEs7UUFBT0MsSSxHQUFBQSxJO1FBQU1lLE8sR0FBQUEsTztRQUFTRyxhLEdBQUFBLGE7UUFBZVMsWSxHQUFBQSxZIiwiZmlsZSI6IlRoZW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgbXlfdGhlbWUgZnJvbSAnLi4vLi4vZGF0YS90aGVtZSdcblxuY29uc3QgdGhlbWUgPSBteV90aGVtZVxuXG5jb25zdCBfdGFnID0gY3NzKHtcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LFxuICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIDAuMnMgZWFzZS1pbi1vdXQnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBwYWRkaW5nOiAnMXB4IDNweCAxcHggM3B4JyxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudHJhbnNfcHJpbWFyeSxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgJzpob3Zlcic6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjA1LCAxLjQpJyxcbiAgICB0cmFuc2l0aW9uRGVsYXk6ICcwcycsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC4ycycsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfVxufSlcblxuY29uc3QgX2J1dHRvbiA9IGNzcyh7XG4gIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxufSlcblxuY29uc3QgX3ZlcnRpY2FsTWVudSA9IHtcbiAgY29tcG9uZW50OiBjc3Moe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1hcmdpbjogJzE1cHggMjBweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gIH0pLFxuICBsaW5rOiBjc3Moe1xuICAgIG1hcmdpbjogJzAgMTBweCAwIDAnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBfY2VudGVyZWRCb3ggPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG59KVxuXG5leHBvcnQgeyB0aGVtZSwgX3RhZywgX2J1dHRvbiwgX3ZlcnRpY2FsTWVudSwgX2NlbnRlcmVkQm94IH1cbiJdfQ==