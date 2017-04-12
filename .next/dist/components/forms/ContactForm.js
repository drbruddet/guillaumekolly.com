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
      _react2.default.createElement('input', { type: 'hidden', name: '_next', value: '/' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwic2VuZFRvIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN0eWxlIiwib2JqZWN0Iiwic2VuZFRvQWRkcmVzcyIsImVtYWlsIiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsImZvcm1ibG9jayIsInRpdGxlIiwibmFtZSIsInN1YmplY3QiLCJtZXNzYWdlIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luIiwidGV4dEFsaWduIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImNvbG9ycyIsIndoaXRlIiwiZmxvYXQiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsVUFBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBTyxpQkFBVUM7QUFGRCxDQUFsQjs7QUFLQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxTQUFXLDBCQUEwQkEsS0FBckM7QUFBQSxDQUF0Qjs7QUFFQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLFdBQVcsbUJBQUlDLFNBQUosRUFBZUQsTUFBTUwsS0FBckIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFXLG1CQUFJTyxLQUFKLEVBQVdGLE1BQU1MLEtBQU4sQ0FBWU8sS0FBdkIsQ0FBZjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFFBQVFMLGNBQWNHLE1BQU1SLE1BQXBCLENBQWQsRUFBMkMsUUFBTyxNQUFsRDtBQUNFLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLE9BQU9XLElBQXRDLEdBREY7QUFFRSx1REFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxPQUFPTCxLQUF4QyxHQUZGO0FBR0UsdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsT0FBT00sT0FBekMsR0FIRjtBQUlFLDBEQUFVLE1BQUssU0FBZixFQUF5QixPQUFPQyxPQUFoQyxHQUpGO0FBS0UsK0NBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssT0FBMUIsRUFBa0MsT0FBTSxHQUF4QyxHQUxGO0FBTUUsd0RBQVEsTUFBSyxRQUFiLEVBQXNCLE9BQU0sTUFBNUIsRUFBbUMscUJBQW5DO0FBTkY7QUFGRixHQURrQjtBQUFBLENBQXBCOztBQWFBLElBQU1KLFlBQVksbUJBQUk7QUFDcEJLLFdBQVMsS0FEVztBQUVwQkMsU0FBTyxLQUZhO0FBR3BCQyxVQUFRLFFBSFk7QUFJcEJDLGFBQVcsUUFKUztBQUtwQiwrQkFBNkI7QUFDM0JILGFBQVMsS0FEa0I7QUFFM0JDLFdBQU87QUFGb0IsR0FMVDtBQVNwQiw4QkFBNEI7QUFDMUJELGFBQVMsS0FEaUI7QUFFMUJDLFdBQU8sS0FGbUI7QUFHMUJHLFlBQVE7QUFIa0I7QUFUUixDQUFKLENBQWxCOztBQWdCQSxJQUFNUixRQUFRLG1CQUFJO0FBQ2hCUyxZQUFVLE1BRE07QUFFaEJDLFNBQU8sYUFBTUMsTUFBTixDQUFhQyxLQUZKO0FBR2hCLCtCQUE2QixFQUFFSCxVQUFVLE1BQVosRUFIYjtBQUloQiw4QkFBNEIsRUFBRUEsVUFBVSxNQUFaO0FBSlosQ0FBSixDQUFkOztBQU9BLElBQU1SLE9BQU8sbUJBQUksRUFBRVksT0FBTyxPQUFULEVBQWtCUixPQUFPLEtBQXpCLEVBQUosQ0FBYjtBQUNBLElBQU1ULFFBQVEsbUJBQUksRUFBRWlCLE9BQU8sT0FBVCxFQUFrQlIsT0FBTyxLQUF6QixFQUFnQ1MsYUFBYSxLQUE3QyxFQUFKLENBQWQ7QUFDQSxJQUFNWixVQUFVLG1CQUFJLEVBQUVHLE9BQU8sTUFBVCxFQUFKLENBQWhCO0FBQ0EsSUFBTUYsVUFBVSxtQkFBSSxFQUFFVSxPQUFPLE1BQVQsRUFBSixDQUFoQjs7QUFFQWhCLFlBQVlSLFNBQVosR0FBd0JBLFNBQXhCO2tCQUNlUSxXIiwiZmlsZSI6IkNvbnRhY3RGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vVGV4dEFyZWEnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX2J1dHRvbiB9IGZyb20gJy4uL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBzZW5kVG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuY29uc3Qgc2VuZFRvQWRkcmVzcyA9IChlbWFpbCkgPT4gXCJodHRwczovL2Zvcm1zcHJlZS5pby9cIiArIGVtYWlsXG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKHByb3BzKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGZvcm1ibG9jaywgcHJvcHMuc3R5bGUpfT5cbiAgICA8aDEgY2xhc3NOYW1lPXtjc3ModGl0bGUsIHByb3BzLnN0eWxlLnRpdGxlKX0+Q09OVEFDVCBNRTwvaDE+XG4gICAgPGZvcm0gYWN0aW9uPXtzZW5kVG9BZGRyZXNzKHByb3BzLnNlbmRUbyl9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgc3R5bGU9e25hbWV9IC8+XG4gICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgc3R5bGU9e2VtYWlsfSAvPlxuICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBzdHlsZT17c3ViamVjdH0gLz5cbiAgICAgIDxUZXh0QXJlYSBuYW1lPVwibWVzc2FnZVwiIHN0eWxlPXttZXNzYWdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX25leHRcIiB2YWx1ZT1cIi9cIiAvPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgc3R5bGU9e19idXR0b259IC8+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cblxuY29uc3QgZm9ybWJsb2NrID0gY3NzKHtcbiAgcGFkZGluZzogJzJlbScsXG4gIHdpZHRoOiAnODAlJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgcGFkZGluZzogJzJlbScsXG4gICAgd2lkdGg6ICc4MCUnLFxuICB9LFxuICAnQG1lZGlhKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgIHBhZGRpbmc6ICcxZW0nLFxuICAgIHdpZHRoOiAnOTAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfVxufSlcblxuY29uc3QgdGl0bGUgPSBjc3Moe1xuICBmb250U2l6ZTogJzQwMCUnLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAnQG1lZGlhKG1heC13aWR0aDogMTI0MHB4KSc6IHsgZm9udFNpemU6ICcyMDAlJywgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHsgZm9udFNpemU6ICcyMDAlJywgfVxufSlcblxuY29uc3QgbmFtZSA9IGNzcyh7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzQ1JScgfSlcbmNvbnN0IGVtYWlsID0gY3NzKHsgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnNDUlJywgbWFyZ2luUmlnaHQ6ICcxMCUnIH0pXG5jb25zdCBzdWJqZWN0ID0gY3NzKHsgd2lkdGg6ICcxMDAlJyB9KVxuY29uc3QgbWVzc2FnZSA9IGNzcyh7IGZsb2F0OiAnbm9uZScgfSlcblxuQ29udGFjdEZvcm0ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxuIl19