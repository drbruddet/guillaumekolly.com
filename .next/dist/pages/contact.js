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

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

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
      var _props = this.props,
          socials = _props.socials,
          config = _props.config;

      var meta = config.meta.contact;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeadBloc2.default, { title: meta.title, description: meta.description, keywords: meta.keywords }),
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
              { href: config.application.cv_pdf_url },
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
          _react2.default.createElement(_ContactForm2.default, { sendTo: config.application.email })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        socials: _socials2.default,
        config: _config2.default
      };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzb2NpYWxzIiwiY29uZmlnIiwibWV0YSIsImNvbnRhY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJoYWxmc2lkZSIsImxlZnQiLCJzb2NpYWwiLCJyZXN1bWUiLCJhcHBsaWNhdGlvbiIsImN2X3BkZl91cmwiLCJyaWdodCIsImVtYWlsIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwidGV4dFRyYW5zZm9ybSIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiZGlzcGxheSIsIm1hcmdpbiIsInRleHRBbGlnbiIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiY29sb3JzIiwiYmxhY2siLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFXVztBQUFBLG1CQUNxQixLQUFLQSxLQUQxQjtBQUFBLFVBQ0NDLE9BREQsVUFDQ0EsT0FERDtBQUFBLFVBQ1VDLE1BRFYsVUFDVUEsTUFEVjs7QUFFUCxVQUFNQyxPQUFPRCxPQUFPQyxJQUFQLENBQVlDLE9BQXpCOztBQUVBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNERBQVUsT0FBT0QsS0FBS0UsS0FBdEIsRUFBNkIsYUFBYUYsS0FBS0csV0FBL0MsRUFBNEQsVUFBVUgsS0FBS0ksUUFBM0UsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFTLFdBQVcsbUJBQUlDLFFBQUosRUFBY0MsSUFBZCxDQUFwQjtBQUNFLHVFQURGO0FBRUUsMERBQU0sT0FBT1IsT0FBYixFQUFzQixPQUFPUyxNQUE3QixHQUZGO0FBR0U7QUFBQTtBQUFBLGNBQUssV0FBV0MsTUFBaEI7QUFBQTtBQUVFO0FBQUE7QUFBQSxnQkFBTSxjQUFOLEVBQWUsTUFBSyxTQUFwQjtBQUE4QjtBQUFBO0FBQUEsa0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQTlCLGFBRkY7QUFBQTtBQUdFO0FBQUE7QUFBQSxnQkFBTSxNQUFNVCxPQUFPVSxXQUFQLENBQW1CQyxVQUEvQjtBQUEyQztBQUFBO0FBQUEsa0JBQUcsc0JBQUg7QUFBQTtBQUFBO0FBQTNDLGFBSEY7QUFBQTtBQUFBO0FBSEYsU0FGRjtBQVdFO0FBQUE7QUFBQSxZQUFTLFdBQVcsbUJBQUlMLFFBQUosRUFBY00sS0FBZCxDQUFwQjtBQUNFLGlFQUFhLFFBQVFaLE9BQU9VLFdBQVAsQ0FBbUJHLEtBQXhDO0FBREY7QUFYRixPQURGO0FBaUJEOzs7c0NBNUJ5QjtBQUN4QixhQUFPO0FBQ0xkLGtDQURLO0FBRUxDO0FBRkssT0FBUDtBQUlEOzs7RUFQMEIsZ0JBQU1jLFM7O0FBaUNuQzs7OztBQUNBLElBQU1OLFNBQVM7QUFDYk8sYUFBVyxtQkFBTTtBQUNmQyxtQkFBZSxXQURBO0FBRWZDLFlBQVEsS0FGTztBQUdmQyxjQUFVLFVBSEs7QUFJZkMsU0FBSyxLQUpVO0FBS2ZDLGFBQVMsT0FMTTtBQU1mQyxZQUFRLFFBTk87QUFPZkMsZUFBVyxRQVBJO0FBUWYsZ0NBQTRCLEVBQUVILEtBQUssZ0JBQVA7QUFSYixHQUFOLENBREU7QUFXYkksUUFBTSxtQkFBTTtBQUNWRixZQUFRLFVBREU7QUFFVkcsb0JBQWdCLE1BRk47QUFHVkMsV0FBTyxhQUFNQyxNQUFOLENBQWFDLEtBSFY7QUFJVkMsY0FBVSxPQUpBO0FBS1ZDLGdCQUFZLE1BTEY7QUFNVixjQUFVLEVBQUVMLGdCQUFnQixjQUFsQixFQU5BO0FBT1YsaUNBQTZCO0FBQzNCSSxnQkFBVSxLQURpQjtBQUUzQlIsZUFBUyxXQUZrQjtBQUczQkMsY0FBUTtBQUhtQixLQVBuQjtBQVlWLGdDQUE0QjtBQUMxQk8sZ0JBQVUsT0FEZ0I7QUFFMUJQLGNBQVE7QUFGa0I7QUFabEIsR0FBTjtBQVhPLENBQWY7O0FBOEJBLElBQU1aLFNBQVMsbUJBQUk7QUFDakJTLFlBQVUsVUFETztBQUVqQkMsT0FBSyxrQkFGWTtBQUdqQkcsYUFBVyxRQUhNO0FBSWpCLDhCQUE0QjtBQUMxQk0sY0FBVSxPQURnQjtBQUUxQlAsWUFBUSxVQUZrQjtBQUcxQkYsU0FBSztBQUhxQjtBQUpYLENBQUosQ0FBZjs7QUFXQTtBQUNBLElBQU1iLFdBQVcsbUJBQUk7QUFDbkJ3QixTQUFPLEtBRFk7QUFFbkJDLFVBQVEsT0FGVztBQUduQmIsWUFBVSxVQUhTO0FBSW5CQyxPQUFLLEdBSmM7QUFLbkIsOEJBQTRCLEVBQUVXLE9BQU8sTUFBVDtBQUxULENBQUosQ0FBakI7O0FBUUEsSUFBTXZCLE9BQU8sbUJBQUk7QUFDZkEsUUFBTSxHQURTO0FBRWZ5QixjQUFZLGFBRkc7QUFHZiw4QkFBNEIsRUFBRUQsUUFBUSxPQUFWO0FBSGIsQ0FBSixDQUFiOztBQU1BLElBQU1uQixRQUFRLG1CQUFJO0FBQ2hCQSxTQUFPLEdBRFM7QUFFaEJvQixjQUFZLGFBQU1OLE1BQU4sQ0FBYU8sT0FGVDtBQUdoQmhCLFVBQVEsS0FIUTtBQUloQkcsV0FBUyxNQUpPO0FBS2hCYyxjQUFZLFFBTEk7QUFNaEJDLGtCQUFnQixRQU5BO0FBT2hCLDhCQUE0QjtBQUMxQmhCLFNBQUssb0JBRHFCO0FBRTFCWixVQUFNLEdBRm9CO0FBRzFCd0IsWUFBUSxNQUhrQjtBQUkxQmIsY0FBVTtBQUpnQjtBQVBaLENBQUosQ0FBZCIsImZpbGUiOiJjb250YWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vZGF0YS9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc29jaWFsczogc29jaWFscyxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29jaWFscywgY29uZmlnIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLmNvbnRhY3RcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e21ldGEudGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufSBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MoaGFsZnNpZGUsIGxlZnQgKX0+XG4gICAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgPE1lbnUgbGlua3M9e3NvY2lhbHN9IHN0eWxlPXtzb2NpYWx9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Jlc3VtZX0+XG4gICAgICAgICAgICBZb3UgY2FuIGFsc28gd2F0Y2ggbXkmbmJzcDtcbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcmVzdW1lXCI+PGEgY2xhc3NOYW1lPXtfdGFnfT5vbmxpbmUgcmVzdW1lPC9hPjwvTGluaz4gb3ImbmJzcDtcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfT48YSBjbGFzc05hbWU9e190YWd9PmRvd25sb2FkIGl0PC9hPjwvTGluaz4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MoaGFsZnNpZGUsIHJpZ2h0KX0+XG4gICAgICAgICAgPENvbnRhY3RGb3JtIHNlbmRUbz17Y29uZmlnLmFwcGxpY2F0aW9uLmVtYWlsfS8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBTT0NJQUwgQU5EIFJFU1VNRSBsaW5rc1xuY29uc3Qgc29jaWFsID0ge1xuICBjb21wb25lbnQ6IHN0eWxlKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB6SW5kZXg6ICc5OTknLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgdG9wOiAnY2FsYyg4MHB4IC8gMiknLCB9XG4gIH0pLFxuICBsaW5rOiBzdHlsZSh7XG4gICAgbWFyZ2luOiAnMCAzJSAwIDAnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJzpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBtYXJnaW46ICc1cHggYXV0bycsXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZXN1bWUgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdG9wOiAnY2FsYyg1MCUgKyAyMHB4KScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgbWFyZ2luOiAnNXB4IGF1dG8nLFxuICAgIHRvcDogJzcwcHgnLFxuICB9XG59KVxuXG4vLyBDT05UQUlORVIgU0VUVElOR1NcbmNvbnN0IGhhbGZzaWRlID0gY3NzKHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgd2lkdGg6ICcxMDAlJyB9XG59KVxuXG5jb25zdCBsZWZ0ID0gY3NzKHtcbiAgbGVmdDogJzAnLFxuICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzogeyBoZWlnaHQ6ICcxNjBweCcsIH1cbn0pXG5cbmNvbnN0IHJpZ2h0ID0gY3NzKHtcbiAgcmlnaHQ6ICcwJyxcbiAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gIHpJbmRleDogJzk5OScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICB0b3A6ICdjYWxjKDE2MHB4ICsgMjBweCknLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfVxufSlcbiJdfQ==