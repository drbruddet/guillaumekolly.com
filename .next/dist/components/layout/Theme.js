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
    textDecoration: 'none'
  }),
  link: (0, _css2.default)({
    margin: '0 10px 0 0',
    fontSize: '140%',
    textDecoration: 'none',
    color: theme.colors.black,
    ':hover': { textDecoration: 'line-through' }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L1RoZW1lLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiX3RhZyIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImZvbnRXZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3ByaW1hcnkiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInByaW1hcnkiLCJfYnV0dG9uIiwiYmFja2dyb3VuZCIsIndoaXRlIiwiX3ZlcnRpY2FsTWVudSIsImNvbXBvbmVudCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwibGluayIsImZvbnRTaXplIiwiYmxhY2siLCJfY2VudGVyZWRCb3giLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHVCQUFOOztBQUVBLElBQU1DLE9BQU8sbUJBQUk7QUFDZkMsU0FBT0YsTUFBTUcsTUFBTixDQUFhQyxJQURMO0FBRWZDLGNBQVksS0FGRztBQUdmQyxjQUFZLDJCQUhHO0FBSWZDLGdCQUFjLEtBSkM7QUFLZkMsV0FBUyxpQkFMTTtBQU1mQyxtQkFBaUJULE1BQU1HLE1BQU4sQ0FBYU8sYUFOZjtBQU9mQyxrQkFBZ0IsTUFQRDtBQVFmLFlBQVU7QUFDUkMsZUFBVyxrQkFESDtBQUVSQyxxQkFBaUIsSUFGVDtBQUdSQyx3QkFBb0IsTUFIWjtBQUlSTCxxQkFBaUJULE1BQU1HLE1BQU4sQ0FBYVk7QUFKdEI7QUFSSyxDQUFKLENBQWI7O0FBZ0JBLElBQU1DLFVBQVUsbUJBQUk7QUFDbEJDLGNBQVlqQixNQUFNRyxNQUFOLENBQWFlLEtBRFA7QUFFbEJoQixTQUFPRixNQUFNRyxNQUFOLENBQWFZO0FBRkYsQ0FBSixDQUFoQjs7QUFLQSxJQUFNSSxnQkFBZ0I7QUFDcEJDLGFBQVcsbUJBQUk7QUFDYkMsYUFBUyxjQURJO0FBRWJDLFlBQVEsV0FGSztBQUdiQyxxQkFBaUIsVUFISjtBQUliWCxlQUFXLGtDQUpFO0FBS2JZLG1CQUFlLFdBTEY7QUFNYkMsWUFBUSxHQU5LO0FBT2JkLG9CQUFnQjtBQVBILEdBQUosQ0FEUztBQVVwQmUsUUFBTSxtQkFBSTtBQUNSSixZQUFRLFlBREE7QUFFUkssY0FBVSxNQUZGO0FBR1JoQixvQkFBZ0IsTUFIUjtBQUlSVCxXQUFPRixNQUFNRyxNQUFOLENBQWF5QixLQUpaO0FBS1IsY0FBVSxFQUFFakIsZ0JBQWdCLGNBQWxCO0FBTEYsR0FBSjtBQVZjLENBQXRCOztBQW1CQSxJQUFNa0IsZUFBZSxtQkFBSTtBQUN2QlIsV0FBUyxNQURjO0FBRXZCUyxjQUFZLFFBRlc7QUFHdkJDLGtCQUFnQixRQUhPO0FBSXZCQyxTQUFPLE9BSmdCO0FBS3ZCQyxVQUFRO0FBTGUsQ0FBSixDQUFyQjs7UUFRU2pDLEssR0FBQUEsSztRQUFPQyxJLEdBQUFBLEk7UUFBTWUsTyxHQUFBQSxPO1FBQVNHLGEsR0FBQUEsYTtRQUFlVSxZLEdBQUFBLFkiLCJmaWxlIjoiVGhlbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCBteV90aGVtZSBmcm9tICcuLi8uLi9kYXRhL3RoZW1lJ1xuXG5jb25zdCB0aGVtZSA9IG15X3RoZW1lXG5cbmNvbnN0IF90YWcgPSBjc3Moe1xuICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQsXG4gIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuNHMgMC4ycyBlYXNlLWluLW91dCcsXG4gIGJvcmRlclJhZGl1czogJzVweCcsXG4gIHBhZGRpbmc6ICcxcHggM3B4IDFweCAzcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19wcmltYXJ5LFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAnOmhvdmVyJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMDUsIDEuNCknLFxuICAgIHRyYW5zaXRpb25EZWxheTogJzBzJyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcwLjJzJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICB9XG59KVxuXG5jb25zdCBfYnV0dG9uID0gY3NzKHtcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLndoaXRlLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG59KVxuXG5jb25zdCBfdmVydGljYWxNZW51ID0ge1xuICBjb21wb25lbnQ6IGNzcyh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnMjBweCAzMHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtMTAwJSknLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgfSksXG4gIGxpbms6IGNzcyh7XG4gICAgbWFyZ2luOiAnMCAxMHB4IDAgMCcsXG4gICAgZm9udFNpemU6ICcxNDAlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH1cbiAgfSlcbn1cblxuY29uc3QgX2NlbnRlcmVkQm94ID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxufSlcblxuZXhwb3J0IHsgdGhlbWUsIF90YWcsIF9idXR0b24sIF92ZXJ0aWNhbE1lbnUsIF9jZW50ZXJlZEJveCB9XG4iXX0=