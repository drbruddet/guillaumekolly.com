'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Theme = require('./layout/Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  sendTo: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};

var sendToAddress = function sendToAddress(email) {
  return "https://formspree.io/" + email;
};

var ContactForm = function ContactForm(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _css2.default)(formblock, props.style) },
    _react2.default.createElement(
      'h1',
      { className: (0, _css2.default)(title, props.style.title) },
      'CONTACT ME'
    ),
    _react2.default.createElement(
      'form',
      { action: sendToAddress(props.sendTo), method: 'POST' },
      _react2.default.createElement(_Input2.default, { type: 'text', name: 'name', style: name }),
      _react2.default.createElement(_Input2.default, { type: 'email', name: 'email', style: email }),
      _react2.default.createElement(_Input2.default, { type: 'text', name: 'subject', style: subject }),
      _react2.default.createElement(_TextArea2.default, { name: 'message', style: message }),
      _react2.default.createElement('input', { type: 'hidden', name: '_next', value: 'http://localhost:3000' }),
      _react2.default.createElement(_Button2.default, { type: 'submit', value: 'Send', style: _Theme._button })
    )
  );
};

var formblock = (0, _css2.default)({
  padding: '2em',
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
  '@media(max-width: 1240px)': {
    padding: '2em',
    width: '80%'
  },
  '@media(max-width: 600px)': {
    padding: '1em',
    width: '90%',
    height: '100%'
  }
});

var title = (0, _css2.default)({
  fontSize: '400%',
  color: _Theme.theme.colors.white,
  '@media(max-width: 1240px)': { fontSize: '200%' },
  '@media(max-width: 600px)': { fontSize: '200%' }
});

var name = (0, _css2.default)({ float: 'right', width: '45%' });
var email = (0, _css2.default)({ float: 'right', width: '45%', marginRight: '10%' });
var subject = (0, _css2.default)({ width: '100%' });
var message = (0, _css2.default)({ float: 'none' });

ContactForm.propTypes = propTypes;
exports.default = ContactForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwic2VuZFRvIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN0eWxlIiwib2JqZWN0Iiwic2VuZFRvQWRkcmVzcyIsImVtYWlsIiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsImZvcm1ibG9jayIsInRpdGxlIiwibmFtZSIsInN1YmplY3QiLCJtZXNzYWdlIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImNvbG9ycyIsIndoaXRlIiwiZmxvYXQiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsVUFBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBTyxpQkFBVUM7QUFGRCxDQUFsQjs7QUFLQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxTQUFXLDBCQUEwQkEsS0FBckM7QUFBQSxDQUF0Qjs7QUFFQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLFdBQVcsbUJBQUlDLFNBQUosRUFBZUQsTUFBTUwsS0FBckIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFXLG1CQUFJTyxLQUFKLEVBQVdGLE1BQU1MLEtBQU4sQ0FBWU8sS0FBdkIsQ0FBZjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFFBQVFMLGNBQWNHLE1BQU1SLE1BQXBCLENBQWQsRUFBMkMsUUFBTyxNQUFsRDtBQUNFLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLE9BQU9XLElBQXRDLEdBREY7QUFFRSx1REFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxPQUFPTCxLQUF4QyxHQUZGO0FBR0UsdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsT0FBT00sT0FBekMsR0FIRjtBQUlFLDBEQUFVLE1BQUssU0FBZixFQUF5QixPQUFPQyxPQUFoQyxHQUpGO0FBS0UsK0NBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssT0FBMUIsRUFBa0MsT0FBTSx1QkFBeEMsR0FMRjtBQU1FLHdEQUFRLE1BQUssUUFBYixFQUFzQixPQUFNLE1BQTVCLEVBQW1DLHFCQUFuQztBQU5GO0FBRkYsR0FEa0I7QUFBQSxDQUFwQjs7QUFhQSxJQUFNSixZQUFZLG1CQUFJO0FBQ3BCSyxXQUFTLEtBRFc7QUFFcEJDLFNBQU8sS0FGYTtBQUdwQkMsVUFBUSxRQUhZO0FBSXBCQyxhQUFXLFFBSlM7QUFLcEIsK0JBQTZCO0FBQzNCSCxhQUFTLEtBRGtCO0FBRTNCQyxXQUFPO0FBRm9CLEdBTFQ7QUFTcEIsOEJBQTRCO0FBQzFCRCxhQUFTLEtBRGlCO0FBRTFCQyxXQUFPLEtBRm1CO0FBRzFCRyxZQUFRO0FBSGtCO0FBVFIsQ0FBSixDQUFsQjs7QUFnQkEsSUFBTVIsUUFBUSxtQkFBSTtBQUNoQlMsWUFBVSxNQURNO0FBRWhCQyxTQUFPLGFBQU1DLE1BQU4sQ0FBYUMsS0FGSjtBQUdoQiwrQkFBNkIsRUFBRUgsVUFBVSxNQUFaLEVBSGI7QUFJaEIsOEJBQTRCLEVBQUVBLFVBQVUsTUFBWjtBQUpaLENBQUosQ0FBZDs7QUFPQSxJQUFNUixPQUFPLG1CQUFJLEVBQUVZLE9BQU8sT0FBVCxFQUFrQlIsT0FBTyxLQUF6QixFQUFKLENBQWI7QUFDQSxJQUFNVCxRQUFRLG1CQUFJLEVBQUVpQixPQUFPLE9BQVQsRUFBa0JSLE9BQU8sS0FBekIsRUFBZ0NTLGFBQWEsS0FBN0MsRUFBSixDQUFkO0FBQ0EsSUFBTVosVUFBVSxtQkFBSSxFQUFFRyxPQUFPLE1BQVQsRUFBSixDQUFoQjtBQUNBLElBQU1GLFVBQVUsbUJBQUksRUFBRVUsT0FBTyxNQUFULEVBQUosQ0FBaEI7O0FBRUFoQixZQUFZUixTQUFaLEdBQXdCQSxTQUF4QjtrQkFDZVEsVyIsImZpbGUiOiJDb250YWN0Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuaW1wb3J0IHsgdGhlbWUsIF9idXR0b24gfSBmcm9tICcuL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBzZW5kVG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuY29uc3Qgc2VuZFRvQWRkcmVzcyA9IChlbWFpbCkgPT4gXCJodHRwczovL2Zvcm1zcHJlZS5pby9cIiArIGVtYWlsXG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGZvcm1ibG9jaywgcHJvcHMuc3R5bGUpfT5cbiAgICA8aDEgY2xhc3NOYW1lPXtjc3ModGl0bGUsIHByb3BzLnN0eWxlLnRpdGxlKX0+Q09OVEFDVCBNRTwvaDE+XG4gICAgPGZvcm0gYWN0aW9uPXtzZW5kVG9BZGRyZXNzKHByb3BzLnNlbmRUbyl9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgc3R5bGU9e25hbWV9IC8+XG4gICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgc3R5bGU9e2VtYWlsfSAvPlxuICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBzdHlsZT17c3ViamVjdH0gLz5cbiAgICAgIDxUZXh0QXJlYSBuYW1lPVwibWVzc2FnZVwiIHN0eWxlPXttZXNzYWdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX25leHRcIiB2YWx1ZT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiIC8+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiBzdHlsZT17X2J1dHRvbn0gLz5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuXG5jb25zdCBmb3JtYmxvY2sgPSBjc3Moe1xuICBwYWRkaW5nOiAnMmVtJyxcbiAgd2lkdGg6ICc4MCUnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMmVtJyxcbiAgICB3aWR0aDogJzgwJScsXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgcGFkZGluZzogJzFlbScsXG4gICAgd2lkdGg6ICc5MCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9XG59KVxuXG5jb25zdCB0aXRsZSA9IGNzcyh7XG4gIGZvbnRTaXplOiAnNDAwJScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBmb250U2l6ZTogJzIwMCUnLCB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzogeyBmb250U2l6ZTogJzIwMCUnLCB9XG59KVxuXG5jb25zdCBuYW1lID0gY3NzKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJyB9KVxuY29uc3QgZW1haWwgPSBjc3MoeyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc0NSUnLCBtYXJnaW5SaWdodDogJzEwJScgfSlcbmNvbnN0IHN1YmplY3QgPSBjc3MoeyB3aWR0aDogJzEwMCUnIH0pXG5jb25zdCBtZXNzYWdlID0gY3NzKHsgZmxvYXQ6ICdub25lJyB9KVxuXG5Db250YWN0Rm9ybS5wcm9wVHlwZXMgPSBwcm9wVHlwZXNcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXG4iXX0=