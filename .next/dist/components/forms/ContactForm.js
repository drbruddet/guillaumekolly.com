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

var _Theme = require('../layout/Theme');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwic2VuZFRvIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN0eWxlIiwib2JqZWN0Iiwic2VuZFRvQWRkcmVzcyIsImVtYWlsIiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsImZvcm1ibG9jayIsInRpdGxlIiwibmFtZSIsInN1YmplY3QiLCJtZXNzYWdlIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImNvbG9ycyIsIndoaXRlIiwiZmxvYXQiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsVUFBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBTyxpQkFBVUM7QUFGRCxDQUFsQjs7QUFLQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxTQUFXLDBCQUEwQkEsS0FBckM7QUFBQSxDQUF0Qjs7QUFFQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLFdBQVcsbUJBQUlDLFNBQUosRUFBZUQsTUFBTUwsS0FBckIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFXLG1CQUFJTyxLQUFKLEVBQVdGLE1BQU1MLEtBQU4sQ0FBWU8sS0FBdkIsQ0FBZjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFFBQVFMLGNBQWNHLE1BQU1SLE1BQXBCLENBQWQsRUFBMkMsUUFBTyxNQUFsRDtBQUNFLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLE9BQU9XLElBQXRDLEdBREY7QUFFRSx1REFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxPQUFPTCxLQUF4QyxHQUZGO0FBR0UsdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsT0FBT00sT0FBekMsR0FIRjtBQUlFLDBEQUFVLE1BQUssU0FBZixFQUF5QixPQUFPQyxPQUFoQyxHQUpGO0FBS0UsK0NBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssT0FBMUIsRUFBa0MsT0FBTSx1QkFBeEMsR0FMRjtBQU1FLHdEQUFRLE1BQUssUUFBYixFQUFzQixPQUFNLE1BQTVCLEVBQW1DLHFCQUFuQztBQU5GO0FBRkYsR0FEa0I7QUFBQSxDQUFwQjs7QUFhQSxJQUFNSixZQUFZLG1CQUFJO0FBQ3BCSyxXQUFTLEtBRFc7QUFFcEJDLFNBQU8sS0FGYTtBQUdwQkMsVUFBUSxRQUhZO0FBSXBCQyxhQUFXLFFBSlM7QUFLcEIsK0JBQTZCO0FBQzNCSCxhQUFTLEtBRGtCO0FBRTNCQyxXQUFPO0FBRm9CLEdBTFQ7QUFTcEIsOEJBQTRCO0FBQzFCRCxhQUFTLEtBRGlCO0FBRTFCQyxXQUFPLEtBRm1CO0FBRzFCRyxZQUFRO0FBSGtCO0FBVFIsQ0FBSixDQUFsQjs7QUFnQkEsSUFBTVIsUUFBUSxtQkFBSTtBQUNoQlMsWUFBVSxNQURNO0FBRWhCQyxTQUFPLGFBQU1DLE1BQU4sQ0FBYUMsS0FGSjtBQUdoQiwrQkFBNkIsRUFBRUgsVUFBVSxNQUFaLEVBSGI7QUFJaEIsOEJBQTRCLEVBQUVBLFVBQVUsTUFBWjtBQUpaLENBQUosQ0FBZDs7QUFPQSxJQUFNUixPQUFPLG1CQUFJLEVBQUVZLE9BQU8sT0FBVCxFQUFrQlIsT0FBTyxLQUF6QixFQUFKLENBQWI7QUFDQSxJQUFNVCxRQUFRLG1CQUFJLEVBQUVpQixPQUFPLE9BQVQsRUFBa0JSLE9BQU8sS0FBekIsRUFBZ0NTLGFBQWEsS0FBN0MsRUFBSixDQUFkO0FBQ0EsSUFBTVosVUFBVSxtQkFBSSxFQUFFRyxPQUFPLE1BQVQsRUFBSixDQUFoQjtBQUNBLElBQU1GLFVBQVUsbUJBQUksRUFBRVUsT0FBTyxNQUFULEVBQUosQ0FBaEI7O0FBRUFoQixZQUFZUixTQUFaLEdBQXdCQSxTQUF4QjtrQkFDZVEsVyIsImZpbGUiOiJDb250YWN0Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuaW1wb3J0IHsgdGhlbWUsIF9idXR0b24gfSBmcm9tICcuLi9sYXlvdXQvVGhlbWUnXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgc2VuZFRvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmNvbnN0IHNlbmRUb0FkZHJlc3MgPSAoZW1haWwpID0+IFwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vXCIgKyBlbWFpbFxuXG5jb25zdCBDb250YWN0Rm9ybSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e2Nzcyhmb3JtYmxvY2ssIHByb3BzLnN0eWxlKX0+XG4gICAgPGgxIGNsYXNzTmFtZT17Y3NzKHRpdGxlLCBwcm9wcy5zdHlsZS50aXRsZSl9PkNPTlRBQ1QgTUU8L2gxPlxuICAgIDxmb3JtIGFjdGlvbj17c2VuZFRvQWRkcmVzcyhwcm9wcy5zZW5kVG8pfSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHN0eWxlPXtuYW1lfSAvPlxuICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHN0eWxlPXtlbWFpbH0gLz5cbiAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdWJqZWN0XCIgc3R5bGU9e3N1YmplY3R9IC8+XG4gICAgICA8VGV4dEFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBzdHlsZT17bWVzc2FnZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9uZXh0XCIgdmFsdWU9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiAvPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgc3R5bGU9e19idXR0b259IC8+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cblxuY29uc3QgZm9ybWJsb2NrID0gY3NzKHtcbiAgcGFkZGluZzogJzJlbScsXG4gIHdpZHRoOiAnODAlJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgcGFkZGluZzogJzJlbScsXG4gICAgd2lkdGg6ICc4MCUnLFxuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgIHBhZGRpbmc6ICcxZW0nLFxuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfVxufSlcblxuY29uc3QgdGl0bGUgPSBjc3Moe1xuICBmb250U2l6ZTogJzQwMCUnLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgZm9udFNpemU6ICcyMDAlJywgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgZm9udFNpemU6ICcyMDAlJywgfVxufSlcblxuY29uc3QgbmFtZSA9IGNzcyh7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzQ1JScgfSlcbmNvbnN0IGVtYWlsID0gY3NzKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJywgbWFyZ2luUmlnaHQ6ICcxMCUnIH0pXG5jb25zdCBzdWJqZWN0ID0gY3NzKHsgd2lkdGg6ICcxMDAlJyB9KVxuY29uc3QgbWVzc2FnZSA9IGNzcyh7IGZsb2F0OiAnbm9uZScgfSlcblxuQ29udGFjdEZvcm0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxuIl19