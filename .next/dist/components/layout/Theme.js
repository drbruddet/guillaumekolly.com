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
    margin: '20px 30px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none',
    '@media(max-width: 640px)': { margin: '10px 10px' }
  }),
  link: (0, _css2.default)({
    margin: '0 10px 0 0',
    fontSize: '140%',
    textDecoration: 'none',
    color: theme.colors.black,
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 640px)': { fontSize: '100%' }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L1RoZW1lLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiX3RhZyIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImZvbnRXZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3ByaW1hcnkiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInByaW1hcnkiLCJfYnV0dG9uIiwiYmFja2dyb3VuZCIsIndoaXRlIiwiX3ZlcnRpY2FsTWVudSIsImNvbXBvbmVudCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwibGluayIsImZvbnRTaXplIiwiYmxhY2siLCJfY2VudGVyZWRCb3giLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHVCQUFOOztBQUVBLElBQU1DLE9BQU8sbUJBQUk7QUFDZkMsU0FBT0YsTUFBTUcsTUFBTixDQUFhQyxJQURMO0FBRWZDLGNBQVksS0FGRztBQUdmQyxjQUFZLDJCQUhHO0FBSWZDLGdCQUFjLEtBSkM7QUFLZkMsV0FBUyxpQkFMTTtBQU1mQyxtQkFBaUJULE1BQU1HLE1BQU4sQ0FBYU8sYUFOZjtBQU9mQyxrQkFBZ0IsTUFQRDtBQVFmLFlBQVU7QUFDUkMsZUFBVyxrQkFESDtBQUVSQyxxQkFBaUIsSUFGVDtBQUdSQyx3QkFBb0IsTUFIWjtBQUlSTCxxQkFBaUJULE1BQU1HLE1BQU4sQ0FBYVk7QUFKdEI7QUFSSyxDQUFKLENBQWI7O0FBZ0JBLElBQU1DLFVBQVUsbUJBQUk7QUFDbEJDLGNBQVlqQixNQUFNRyxNQUFOLENBQWFlLEtBRFA7QUFFbEJoQixTQUFPRixNQUFNRyxNQUFOLENBQWFZO0FBRkYsQ0FBSixDQUFoQjs7QUFLQSxJQUFNSSxnQkFBZ0I7QUFDcEJDLGFBQVcsbUJBQUk7QUFDYkMsYUFBUyxjQURJO0FBRWJDLFlBQVEsV0FGSztBQUdiQyxxQkFBaUIsVUFISjtBQUliWCxlQUFXLGtDQUpFO0FBS2JZLG1CQUFlLFdBTEY7QUFNYkMsWUFBUSxHQU5LO0FBT2JkLG9CQUFnQixNQVBIO0FBUWIsZ0NBQTRCLEVBQUVXLFFBQVEsV0FBVjtBQVJmLEdBQUosQ0FEUztBQVdwQkksUUFBTSxtQkFBSTtBQUNSSixZQUFRLFlBREE7QUFFUkssY0FBVSxNQUZGO0FBR1JoQixvQkFBZ0IsTUFIUjtBQUlSVCxXQUFPRixNQUFNRyxNQUFOLENBQWF5QixLQUpaO0FBS1IsY0FBVSxFQUFFakIsZ0JBQWdCLGNBQWxCLEVBTEY7QUFNUixnQ0FBNEIsRUFBRWdCLFVBQVUsTUFBWjtBQU5wQixHQUFKO0FBWGMsQ0FBdEI7O0FBcUJBLElBQU1FLGVBQWUsbUJBQUk7QUFDdkJSLFdBQVMsTUFEYztBQUV2QlMsY0FBWSxRQUZXO0FBR3ZCQyxrQkFBZ0IsUUFITztBQUl2QkMsU0FBTyxPQUpnQjtBQUt2QkMsVUFBUTtBQUxlLENBQUosQ0FBckI7O1FBUVNqQyxLLEdBQUFBLEs7UUFBT0MsSSxHQUFBQSxJO1FBQU1lLE8sR0FBQUEsTztRQUFTRyxhLEdBQUFBLGE7UUFBZVUsWSxHQUFBQSxZIiwiZmlsZSI6IlRoZW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgbXlfdGhlbWUgZnJvbSAnLi4vLi4vZGF0YS90aGVtZSdcblxuY29uc3QgdGhlbWUgPSBteV90aGVtZVxuXG5jb25zdCBfdGFnID0gY3NzKHtcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LFxuICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIDAuMnMgZWFzZS1pbi1vdXQnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBwYWRkaW5nOiAnMXB4IDNweCAxcHggM3B4JyxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudHJhbnNfcHJpbWFyeSxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgJzpob3Zlcic6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjA1LCAxLjQpJyxcbiAgICB0cmFuc2l0aW9uRGVsYXk6ICcwcycsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC4ycycsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfVxufSlcblxuY29uc3QgX2J1dHRvbiA9IGNzcyh7XG4gIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxufSlcblxuY29uc3QgX3ZlcnRpY2FsTWVudSA9IHtcbiAgY29tcG9uZW50OiBjc3Moe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1hcmdpbjogJzIwcHggMzBweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IG1hcmdpbjogJzEwcHggMTBweCcgfVxuICB9KSxcbiAgbGluazogY3NzKHtcbiAgICBtYXJnaW46ICcwIDEwcHggMCAwJyxcbiAgICBmb250U2l6ZTogJzE0MCUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICAnOmhvdmVyJzogeyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzEwMCUnIH1cbiAgfSlcbn1cblxuY29uc3QgX2NlbnRlcmVkQm94ID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxufSlcblxuZXhwb3J0IHsgdGhlbWUsIF90YWcsIF9idXR0b24sIF92ZXJ0aWNhbE1lbnUsIF9jZW50ZXJlZEJveCB9XG4iXX0=