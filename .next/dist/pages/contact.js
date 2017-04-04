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

var _ContactForm = require('../components/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

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
          _react2.default.createElement(_ContactForm2.default, { sendTo: 'guillaume.kolly@gmail.com' })
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

// SOCIAL AND RESUME links


exports.default = _class;
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

// CONTAINER SETTINGS
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
  background: _Theme.theme.colors.primary,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsic29jaWFscyIsInByb3BzIiwiaGFsZnNpZGUiLCJsZWZ0Iiwic29jaWFsIiwicmVzdW1lIiwicmlnaHQiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJkaXNwbGF5IiwibWFyZ2luIiwidGV4dEFsaWduIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRVztBQUFBLFVBQ0NBLE9BREQsR0FDYSxLQUFLQyxLQURsQixDQUNDRCxPQUREOzs7QUFHUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDREQUFVLE9BQU0sMkJBQWhCO0FBQ0UsdUJBQVkseUVBRGQsR0FERjtBQUdFO0FBQUE7QUFBQSxZQUFTLFdBQVcsbUJBQUlFLFFBQUosRUFBY0MsSUFBZCxDQUFwQjtBQUNFLHVFQURGO0FBRUUsMERBQU0sT0FBT0gsT0FBYixFQUFzQixPQUFPSSxNQUE3QixHQUZGO0FBR0U7QUFBQTtBQUFBLGNBQUssV0FBV0MsTUFBaEI7QUFBQTtBQUVFO0FBQUE7QUFBQSxnQkFBTSxjQUFOLEVBQWUsTUFBSyxTQUFwQjtBQUE4QjtBQUFBO0FBQUEsa0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQTlCLGFBRkY7QUFBQTtBQUdFO0FBQUE7QUFBQSxnQkFBTSxNQUFLLEdBQVg7QUFBZTtBQUFBO0FBQUEsa0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQWYsYUFIRjtBQUFBO0FBQUE7QUFIRixTQUhGO0FBWUU7QUFBQTtBQUFBLFlBQVMsV0FBVyxtQkFBSUgsUUFBSixFQUFjSSxLQUFkLENBQXBCO0FBQ0UsaUVBQWEsUUFBTywyQkFBcEI7QUFERjtBQVpGLE9BREY7QUFrQkQ7OztzQ0F6QnlCO0FBQ3hCLGFBQU8sRUFBRU4sMEJBQUYsRUFBUDtBQUNEOzs7RUFKMEIsZ0JBQU1PLFM7O0FBOEJuQzs7OztBQUNBLElBQU1ILFNBQVM7QUFDYkksYUFBVyxtQkFBTTtBQUNmQyxtQkFBZSxXQURBO0FBRWZDLFlBQVEsS0FGTztBQUdmQyxjQUFVLFVBSEs7QUFJZkMsU0FBSyxLQUpVO0FBS2ZDLGFBQVMsT0FMTTtBQU1mQyxZQUFRLFFBTk87QUFPZkMsZUFBVyxRQVBJO0FBUWYsZ0NBQTRCLEVBQUVILEtBQUssZ0JBQVA7QUFSYixHQUFOLENBREU7QUFXYkksUUFBTSxtQkFBTTtBQUNWRixZQUFRLFVBREU7QUFFVkcsb0JBQWdCLE1BRk47QUFHVkMsV0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBSFY7QUFJVkMsY0FBVSxPQUpBO0FBS1ZDLGdCQUFZLE1BTEY7QUFNVixjQUFVLEVBQUVMLGdCQUFnQixjQUFsQixFQU5BO0FBT1YsaUNBQTZCO0FBQzNCSSxnQkFBVSxLQURpQjtBQUUzQlIsZUFBUyxXQUZrQjtBQUczQkMsY0FBUTtBQUhtQixLQVBuQjtBQVlWLGdDQUE0QjtBQUMxQk8sZ0JBQVUsT0FEZ0I7QUFFMUJQLGNBQVE7QUFGa0I7QUFabEIsR0FBTjtBQVhPLENBQWY7O0FBOEJBLElBQU1ULFNBQVMsbUJBQUk7QUFDakJNLFlBQVUsVUFETztBQUVqQkMsT0FBSyxrQkFGWTtBQUdqQkcsYUFBVyxRQUhNO0FBSWpCLDhCQUE0QjtBQUMxQk0sY0FBVSxPQURnQjtBQUUxQlAsWUFBUSxVQUZrQjtBQUcxQkYsU0FBSztBQUhxQjtBQUpYLENBQUosQ0FBZjs7QUFXQTtBQUNBLElBQU1WLFdBQVcsbUJBQUk7QUFDbkJxQixTQUFPLEtBRFk7QUFFbkJDLFVBQVEsT0FGVztBQUduQmIsWUFBVSxVQUhTO0FBSW5CQyxPQUFLLEdBSmM7QUFLbkIsOEJBQTRCLEVBQUVXLE9BQU8sTUFBVDtBQUxULENBQUosQ0FBakI7O0FBUUEsSUFBTXBCLE9BQU8sbUJBQUk7QUFDZkEsUUFBTSxHQURTO0FBRWZzQixjQUFZLGFBRkc7QUFHZiw4QkFBNEIsRUFBRUQsUUFBUSxPQUFWO0FBSGIsQ0FBSixDQUFiOztBQU1BLElBQU1sQixRQUFRLG1CQUFJO0FBQ2hCQSxTQUFPLEdBRFM7QUFFaEJtQixjQUFZLGFBQU1OLE1BQU4sQ0FBYU8sT0FGVDtBQUdoQmhCLFVBQVEsS0FIUTtBQUloQkcsV0FBUyxNQUpPO0FBS2hCYyxjQUFZLFFBTEk7QUFNaEJDLGtCQUFnQixRQU5BO0FBT2hCLDhCQUE0QjtBQUMxQmhCLFNBQUssb0JBRHFCO0FBRTFCVCxVQUFNLEdBRm9CO0FBRzFCcUIsWUFBUSxNQUhrQjtBQUkxQmIsY0FBVTtBQUpnQjtBQVBaLENBQUosQ0FBZCIsImZpbGUiOiJjb250YWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHJldHVybiB7IHNvY2lhbHM6IHNvY2lhbHMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvYyB0aXRsZT1cIkd1aWxsYXVtZSBLb2xseSB8IENvbnRhY3RcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIENvbnRhY3QgTWUgaGVyZS5cIiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NzcyhoYWxmc2lkZSwgbGVmdCApfT5cbiAgICAgICAgICA8RnVsbEJhY2tncm91bmQgLz5cbiAgICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gc3R5bGU9e3NvY2lhbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVzdW1lfT5cbiAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB3YXRjaCBteSZuYnNwO1xuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj48YSBjbGFzc05hbWU9e190YWd9Pm9ubGluZSByZXN1bWU8L2E+PC9MaW5rPiBvciZuYnNwO1xuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBjbGFzc05hbWU9e190YWd9PmRvd25sb2FkIGl0PC9hPjwvTGluaz4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MoaGFsZnNpZGUsIHJpZ2h0KX0+XG4gICAgICAgICAgPENvbnRhY3RGb3JtIHNlbmRUbz1cImd1aWxsYXVtZS5rb2xseUBnbWFpbC5jb21cIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBTT0NJQUwgQU5EIFJFU1VNRSBsaW5rc1xuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgdG9wOiAnY2FsYyg4MHB4IC8gMiknLCB9XG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAzJSAwIDAnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBtYXJnaW46ICc1cHggYXV0bycsXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZXN1bWUgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdG9wOiAnY2FsYyg1MCUgKyAyMHB4KScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nLFxuICAgIHRvcDogJzcwcHgnLFxuICB9XG59KVxuXG4vLyBDT05UQUlORVIgU0VUVElOR1NcbmNvbnN0IGhhbGZzaWRlID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgd2lkdGg6ICcxMDAlJyB9XG59KVxuXG5jb25zdCBsZWZ0ID0gY3NzKHtcbiAgbGVmdDogJzAnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzogeyBoZWlnaHQ6ICcxNjBweCcsIH1cbn0pXG5cbmNvbnN0IHJpZ2h0ID0gY3NzKHtcbiAgcmlnaHQ6ICcwJyxcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIHpJbmRleDogJzk5OScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICB0b3A6ICdjYWxjKDE2MHB4ICsgMjBweCknLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfVxufSlcbiJdfQ==