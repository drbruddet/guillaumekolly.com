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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L1RoZW1lLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiX3RhZyIsImNvbG9yIiwiY29sb3JzIiwidGV4dCIsImZvbnRXZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRyYW5zX3ByaW1hcnkiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInByaW1hcnkiLCJfYnV0dG9uIiwiYmFja2dyb3VuZCIsIndoaXRlIiwiX3ZlcnRpY2FsTWVudSIsImNvbXBvbmVudCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwibGluayIsImJsYWNrIiwiX2NlbnRlcmVkQm94IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSx1QkFBTjs7QUFFQSxJQUFNQyxPQUFPLG1CQUFJO0FBQ2ZDLFNBQU9GLE1BQU1HLE1BQU4sQ0FBYUMsSUFETDtBQUVmQyxjQUFZLEtBRkc7QUFHZkMsY0FBWSwyQkFIRztBQUlmQyxnQkFBYyxLQUpDO0FBS2ZDLFdBQVMsaUJBTE07QUFNZkMsbUJBQWlCVCxNQUFNRyxNQUFOLENBQWFPLGFBTmY7QUFPZkMsa0JBQWdCLE1BUEQ7QUFRZixZQUFVO0FBQ1JDLGVBQVcsa0JBREg7QUFFUkMscUJBQWlCLElBRlQ7QUFHUkMsd0JBQW9CLE1BSFo7QUFJUkwscUJBQWlCVCxNQUFNRyxNQUFOLENBQWFZO0FBSnRCO0FBUkssQ0FBSixDQUFiOztBQWdCQSxJQUFNQyxVQUFVLG1CQUFJO0FBQ2xCQyxjQUFZakIsTUFBTUcsTUFBTixDQUFhZSxLQURQO0FBRWxCaEIsU0FBT0YsTUFBTUcsTUFBTixDQUFhWTtBQUZGLENBQUosQ0FBaEI7O0FBS0EsSUFBTUksZ0JBQWdCO0FBQ3BCQyxhQUFXLG1CQUFJO0FBQ2JDLGFBQVMsY0FESTtBQUViQyxZQUFRLFdBRks7QUFHYkMscUJBQWlCLFVBSEo7QUFJYlgsZUFBVyxrQ0FKRTtBQUtiWSxtQkFBZSxXQUxGO0FBTWJDLFlBQVEsR0FOSztBQU9iZCxvQkFBZ0I7QUFQSCxHQUFKLENBRFM7QUFVcEJlLFFBQU0sbUJBQUk7QUFDUkosWUFBUSxZQURBO0FBRVJYLG9CQUFnQixNQUZSO0FBR1JULFdBQU9GLE1BQU1HLE1BQU4sQ0FBYXdCLEtBSFo7QUFJUixjQUFVLEVBQUVoQixnQkFBZ0IsY0FBbEI7QUFKRixHQUFKO0FBVmMsQ0FBdEI7O0FBa0JBLElBQU1pQixlQUFlLG1CQUFJO0FBQ3ZCUCxXQUFTLE1BRGM7QUFFdkJRLGNBQVksUUFGVztBQUd2QkMsa0JBQWdCLFFBSE87QUFJdkJDLFNBQU8sT0FKZ0I7QUFLdkJDLFVBQVE7QUFMZSxDQUFKLENBQXJCOztRQVFTaEMsSyxHQUFBQSxLO1FBQU9DLEksR0FBQUEsSTtRQUFNZSxPLEdBQUFBLE87UUFBU0csYSxHQUFBQSxhO1FBQWVTLFksR0FBQUEsWSIsImZpbGUiOiJUaGVtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IG15X3RoZW1lIGZyb20gJy4uLy4uL2RhdGEvdGhlbWUnXG5cbmNvbnN0IHRoZW1lID0gbXlfdGhlbWVcblxuY29uc3QgX3RhZyA9IGNzcyh7XG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbiAgZm9udFdlaWdodDogJzcwMCcsXG4gIHRyYW5zaXRpb246ICdhbGwgMC40cyAwLjJzIGVhc2UtaW4tb3V0JyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgcGFkZGluZzogJzFweCAzcHggMXB4IDNweCcsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zX3ByaW1hcnksXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICc6aG92ZXInOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wNSwgMS40KScsXG4gICAgdHJhbnNpdGlvbkRlbGF5OiAnMHMnLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuMnMnLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIH1cbn0pXG5cbmNvbnN0IF9idXR0b24gPSBjc3Moe1xuICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbn0pXG5cbmNvbnN0IF92ZXJ0aWNhbE1lbnUgPSB7XG4gIGNvbXBvbmVudDogY3NzKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW46ICcxNXB4IDIwcHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgekluZGV4OiAnMScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJ1xuICB9KSxcbiAgbGluazogY3NzKHtcbiAgICBtYXJnaW46ICcwIDEwcHggMCAwJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH1cbiAgfSlcbn1cblxuY29uc3QgX2NlbnRlcmVkQm94ID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxufSlcblxuZXhwb3J0IHsgdGhlbWUsIF90YWcsIF9idXR0b24sIF92ZXJ0aWNhbE1lbnUsIF9jZW50ZXJlZEJveCB9XG4iXX0=