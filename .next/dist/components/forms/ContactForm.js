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

var defaultProps = {
  style: null
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
      { action: props.sendTo, method: 'POST' },
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
ContactForm.defaultProps = defaultProps;
exports.default = ContactForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybXMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwic2VuZFRvIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN0eWxlIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsImZvcm1ibG9jayIsInRpdGxlIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiY29sb3JzIiwid2hpdGUiLCJmbG9hdCIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxVQUFRLGlCQUFVQyxNQUFWLENBQWlCQyxVQURUO0FBRWhCQyxTQUFPLGlCQUFVQztBQUZELENBQWxCOztBQUtBLElBQU1DLGVBQWU7QUFDbkJGLFNBQU87QUFEWSxDQUFyQjs7QUFJQSxJQUFNRyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLFdBQVcsbUJBQUlDLFNBQUosRUFBZUQsTUFBTUosS0FBckIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFXLG1CQUFJTSxLQUFKLEVBQVdGLE1BQU1KLEtBQU4sQ0FBWU0sS0FBdkIsQ0FBZjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFFBQVFGLE1BQU1QLE1BQXBCLEVBQTRCLFFBQU8sTUFBbkM7QUFDRSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixPQUFPVSxJQUF0QyxHQURGO0FBRUUsdURBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssT0FBekIsRUFBaUMsT0FBT0MsS0FBeEMsR0FGRjtBQUdFLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFNBQXhCLEVBQWtDLE9BQU9DLE9BQXpDLEdBSEY7QUFJRSwwREFBVSxNQUFLLFNBQWYsRUFBeUIsT0FBT0MsT0FBaEMsR0FKRjtBQUtFLCtDQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLE9BQTFCLEVBQWtDLE9BQU0sR0FBeEMsR0FMRjtBQU1FLHdEQUFRLE1BQUssUUFBYixFQUFzQixPQUFNLE1BQTVCLEVBQW1DLHFCQUFuQztBQU5GO0FBRkYsR0FEa0I7QUFBQSxDQUFwQjs7QUFhQSxJQUFNTCxZQUFZLG1CQUFJO0FBQ3BCTSxXQUFTLEtBRFc7QUFFcEJDLFNBQU8sS0FGYTtBQUdwQkMsVUFBUSxRQUhZO0FBSXBCQyxhQUFXLFFBSlM7QUFLcEIsK0JBQTZCO0FBQzNCSCxhQUFTLEtBRGtCO0FBRTNCQyxXQUFPO0FBRm9CLEdBTFQ7QUFTcEIsOEJBQTRCO0FBQzFCRCxhQUFTLEtBRGlCO0FBRTFCQyxXQUFPLEtBRm1CO0FBRzFCRyxZQUFRO0FBSGtCO0FBVFIsQ0FBSixDQUFsQjs7QUFnQkEsSUFBTVQsUUFBUSxtQkFBSTtBQUNoQlUsWUFBVSxNQURNO0FBRWhCQyxTQUFPLGFBQU1DLE1BQU4sQ0FBYUMsS0FGSjtBQUdoQiwrQkFBNkIsRUFBRUgsVUFBVSxNQUFaLEVBSGI7QUFJaEIsOEJBQTRCLEVBQUVBLFVBQVUsTUFBWjtBQUpaLENBQUosQ0FBZDs7QUFPQSxJQUFNVCxPQUFPLG1CQUFJLEVBQUVhLE9BQU8sT0FBVCxFQUFrQlIsT0FBTyxLQUF6QixFQUFKLENBQWI7QUFDQSxJQUFNSixRQUFRLG1CQUFJLEVBQUVZLE9BQU8sT0FBVCxFQUFrQlIsT0FBTyxLQUF6QixFQUFnQ1MsYUFBYSxLQUE3QyxFQUFKLENBQWQ7QUFDQSxJQUFNWixVQUFVLG1CQUFJLEVBQUVHLE9BQU8sTUFBVCxFQUFKLENBQWhCO0FBQ0EsSUFBTUYsVUFBVSxtQkFBSSxFQUFFVSxPQUFPLE1BQVQsRUFBSixDQUFoQjs7QUFFQWpCLFlBQVlQLFNBQVosR0FBd0JBLFNBQXhCO0FBQ0FPLFlBQVlELFlBQVosR0FBMkJBLFlBQTNCO2tCQUNlQyxXIiwiZmlsZSI6IkNvbnRhY3RGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnbmV4dC9jc3MnXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vVGV4dEFyZWEnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX2J1dHRvbiB9IGZyb20gJy4uL2xheW91dC9UaGVtZSdcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBzZW5kVG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZTogbnVsbFxufVxuXG5jb25zdCBDb250YWN0Rm9ybSA9IChwcm9wcykgPT5cbiAgPGRpdiBjbGFzc05hbWU9e2Nzcyhmb3JtYmxvY2ssIHByb3BzLnN0eWxlKX0+XG4gICAgPGgxIGNsYXNzTmFtZT17Y3NzKHRpdGxlLCBwcm9wcy5zdHlsZS50aXRsZSl9PkNPTlRBQ1QgTUU8L2gxPlxuICAgIDxmb3JtIGFjdGlvbj17cHJvcHMuc2VuZFRvfSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHN0eWxlPXtuYW1lfSAvPlxuICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHN0eWxlPXtlbWFpbH0gLz5cbiAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdWJqZWN0XCIgc3R5bGU9e3N1YmplY3R9IC8+XG4gICAgICA8VGV4dEFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBzdHlsZT17bWVzc2FnZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9uZXh0XCIgdmFsdWU9XCIvXCIgLz5cbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIHN0eWxlPXtfYnV0dG9ufSAvPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG5cbmNvbnN0IGZvcm1ibG9jayA9IGNzcyh7XG4gIHBhZGRpbmc6ICcyZW0nLFxuICB3aWR0aDogJzgwJScsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzoge1xuICAgIHBhZGRpbmc6ICcyZW0nLFxuICAgIHdpZHRoOiAnODAlJyxcbiAgfSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICBwYWRkaW5nOiAnMWVtJyxcbiAgICB3aWR0aDogJzkwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH1cbn0pXG5cbmNvbnN0IHRpdGxlID0gY3NzKHtcbiAgZm9udFNpemU6ICc0MDAlJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IGZvbnRTaXplOiAnMjAwJScsIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2MDBweCknOiB7IGZvbnRTaXplOiAnMjAwJScsIH1cbn0pXG5cbmNvbnN0IG5hbWUgPSBjc3MoeyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICc0NSUnIH0pXG5jb25zdCBlbWFpbCA9IGNzcyh7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzQ1JScsIG1hcmdpblJpZ2h0OiAnMTAlJyB9KVxuY29uc3Qgc3ViamVjdCA9IGNzcyh7IHdpZHRoOiAnMTAwJScgfSlcbmNvbnN0IG1lc3NhZ2UgPSBjc3MoeyBmbG9hdDogJ25vbmUnIH0pXG5cbkNvbnRhY3RGb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlc1xuQ29udGFjdEZvcm0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxuIl19