'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._vertical_menu = exports._button = exports._tag = exports.theme = undefined;

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

var _vertical_menu = {
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

exports.theme = theme;
exports._tag = _tag;
exports._button = _button;
exports._vertical_menu = _vertical_menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L1RoZW1lLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiX3RhZyIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImZvbnRXZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3ByaW1hcnkiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInByaW1hcnkiLCJfYnV0dG9uIiwiYmFja2dyb3VuZCIsIndoaXRlIiwiX3ZlcnRpY2FsX21lbnUiLCJjb21wb25lbnQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtT3JpZ2luIiwidGV4dFRyYW5zZm9ybSIsInpJbmRleCIsImxpbmsiLCJibGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHVCQUFOOztBQUVBLElBQU1DLE9BQU8sbUJBQUk7QUFDZkMsU0FBT0YsTUFBTUcsTUFBTixDQUFhQyxJQURMO0FBRWZDLGNBQVksS0FGRztBQUdmQyxjQUFZLDJCQUhHO0FBSWZDLGdCQUFjLEtBSkM7QUFLZkMsV0FBUyxpQkFMTTtBQU1mQyxtQkFBaUJULE1BQU1HLE1BQU4sQ0FBYU8sYUFOZjtBQU9mQyxrQkFBZ0IsTUFQRDtBQVFmLFlBQVU7QUFDUkMsZUFBVyxrQkFESDtBQUVSQyxxQkFBaUIsSUFGVDtBQUdSQyx3QkFBb0IsTUFIWjtBQUlSTCxxQkFBaUJULE1BQU1HLE1BQU4sQ0FBYVk7QUFKdEI7QUFSSyxDQUFKLENBQWI7O0FBZ0JBLElBQU1DLFVBQVUsbUJBQUk7QUFDbEJDLGNBQVlqQixNQUFNRyxNQUFOLENBQWFlLEtBRFA7QUFFbEJoQixTQUFPRixNQUFNRyxNQUFOLENBQWFZO0FBRkYsQ0FBSixDQUFoQjs7QUFLQSxJQUFNSSxpQkFBaUI7QUFDckJDLGFBQVcsbUJBQUk7QUFDYkMsYUFBUyxjQURJO0FBRWJDLFlBQVEsV0FGSztBQUdiQyxxQkFBaUIsVUFISjtBQUliWCxlQUFXLGtDQUpFO0FBS2JZLG1CQUFlLFdBTEY7QUFNYkMsWUFBUSxHQU5LO0FBT2JkLG9CQUFnQjtBQVBILEdBQUosQ0FEVTtBQVVyQmUsUUFBTSxtQkFBSTtBQUNSSixZQUFRLFlBREE7QUFFUlgsb0JBQWdCLE1BRlI7QUFHUlQsV0FBT0YsTUFBTUcsTUFBTixDQUFhd0IsS0FIWjtBQUlSLGNBQVU7QUFDUmhCLHNCQUFnQjtBQURSO0FBSkYsR0FBSjtBQVZlLENBQXZCOztRQW9CU1gsSyxHQUFBQSxLO1FBQU9DLEksR0FBQUEsSTtRQUFNZSxPLEdBQUFBLE87UUFBU0csYyxHQUFBQSxjIiwiZmlsZSI6IlRoZW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgbXlfdGhlbWUgZnJvbSAnLi4vLi4vZGF0YS90aGVtZSdcblxuY29uc3QgdGhlbWUgPSBteV90aGVtZVxuXG5jb25zdCBfdGFnID0gY3NzKHtcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LFxuICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIDAuMnMgZWFzZS1pbi1vdXQnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBwYWRkaW5nOiAnMXB4IDNweCAxcHggM3B4JyxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudHJhbnNfcHJpbWFyeSxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgJzpob3Zlcic6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjA1LCAxLjQpJyxcbiAgICB0cmFuc2l0aW9uRGVsYXk6ICcwcycsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC4ycycsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfVxufSlcblxuY29uc3QgX2J1dHRvbiA9IGNzcyh7XG4gIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxufSlcblxuY29uc3QgX3ZlcnRpY2FsX21lbnUgPSB7XG4gIGNvbXBvbmVudDogY3NzKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW46ICcxNXB4IDIwcHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnMScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJ1xuICB9KSxcbiAgbGluazogY3NzKHtcbiAgICBtYXJnaW46ICcwIDEwcHggMCAwJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJ1xuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IHsgdGhlbWUsIF90YWcsIF9idXR0b24sIF92ZXJ0aWNhbF9tZW51IH1cbiJdfQ==