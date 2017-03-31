'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._button = exports._tag = exports.theme = undefined;

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
  backgroundColor: theme.colors.trans_teal,
  textDecoration: 'none',
  ':hover': {
    transform: 'scale(1.05, 1.4)',
    transitionDelay: '0s',
    transitionDuration: '0.2s',
    backgroundColor: theme.colors.teal
  }
});

var _button = (0, _css2.default)({
  background: theme.colors.white,
  color: theme.colors.teal
});

exports.theme = theme;
exports._tag = _tag;
exports._button = _button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L1RoZW1lLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiX3RhZyIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImZvbnRXZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3RlYWwiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRlYWwiLCJfYnV0dG9uIiwiYmFja2dyb3VuZCIsIndoaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsdUJBQU47O0FBRUEsSUFBTUMsT0FBTyxtQkFBSTtBQUNmQyxTQUFPRixNQUFNRyxNQUFOLENBQWFDLElBREw7QUFFZkMsY0FBWSxLQUZHO0FBR2ZDLGNBQVksMkJBSEc7QUFJZkMsZ0JBQWMsS0FKQztBQUtmQyxXQUFTLGlCQUxNO0FBTWZDLG1CQUFpQlQsTUFBTUcsTUFBTixDQUFhTyxVQU5mO0FBT2ZDLGtCQUFnQixNQVBEO0FBUWYsWUFBVTtBQUNSQyxlQUFXLGtCQURIO0FBRVJDLHFCQUFpQixJQUZUO0FBR1JDLHdCQUFvQixNQUhaO0FBSVJMLHFCQUFpQlQsTUFBTUcsTUFBTixDQUFhWTtBQUp0QjtBQVJLLENBQUosQ0FBYjs7QUFnQkEsSUFBTUMsVUFBVSxtQkFBSTtBQUNsQkMsY0FBWWpCLE1BQU1HLE1BQU4sQ0FBYWUsS0FEUDtBQUVsQmhCLFNBQU9GLE1BQU1HLE1BQU4sQ0FBYVk7QUFGRixDQUFKLENBQWhCOztRQUtTZixLLEdBQUFBLEs7UUFBT0MsSSxHQUFBQSxJO1FBQU1lLE8sR0FBQUEsTyIsImZpbGUiOiJUaGVtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IG15X3RoZW1lIGZyb20gJy4uLy4uL2RhdGEvdGhlbWUnXG5cbmNvbnN0IHRoZW1lID0gbXlfdGhlbWVcblxuY29uc3QgX3RhZyA9IGNzcyh7XG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbiAgZm9udFdlaWdodDogJzcwMCcsXG4gIHRyYW5zaXRpb246ICdhbGwgMC40cyAwLjJzIGVhc2UtaW4tb3V0JyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgcGFkZGluZzogJzFweCAzcHggMXB4IDNweCcsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zX3RlYWwsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICc6aG92ZXInOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wNSwgMS40KScsXG4gICAgdHJhbnNpdGlvbkRlbGF5OiAnMHMnLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuMnMnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRlYWwsXG4gIH1cbn0pXG5cbmNvbnN0IF9idXR0b24gPSBjc3Moe1xuICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGVhbCxcbn0pXG5cbmV4cG9ydCB7IHRoZW1lLCBfdGFnLCBfYnV0dG9uIH1cbiJdfQ==