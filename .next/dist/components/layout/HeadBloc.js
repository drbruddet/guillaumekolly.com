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

var _head = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _glamor = require('glamor');

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
      var title = this.props.title;
      var description = this.props.description ? this.props.description : this.props.title;

      return _react2.default.createElement(
        _head2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
        _react2.default.createElement('meta', { name: 'description', content: description }),
        _react2.default.createElement('meta', { name: 'keywords', content: 'guillaume, kolly, frontend, backend, full stack, developer, web, javascript, reactJS, Meteor, Js, NextJS, Webpack' }),
        _react2.default.createElement('meta', { name: 'copyright', content: 'Guillaume Kolly' })
      );
    }
  }]);
  return _class;
}(_react2.default.Component);

_class.propTypes = {
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string
};
exports.default = _class;


_glamor.css.global('html, body', {
  padding: '0',
  margin: '0',
  border: '0',
  fontFamily: 'sans-serif',
  lineHeight: '1.15',
  fontSize: '1em',
  fontWeight: '300',
  fontStyle: 'normal',
  textDecoration: 'none',
  textShadow: '0',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwicHJvcHMiLCJkZXNjcmlwdGlvbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJnbG9iYWwiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRTaGFkb3ciLCJXZWJraXRGb250U21vb3RoaW5nIiwiTW96T3N4Rm9udFNtb290aGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OzZCQVNZO0FBQ1IsVUFBTUEsUUFBUSxLQUFLQyxLQUFMLENBQVdELEtBQXpCO0FBQ0EsVUFBTUUsY0FBYyxLQUFLRCxLQUFMLENBQVdDLFdBQVgsR0FDaEIsS0FBS0QsS0FBTCxDQUFXQyxXQURLLEdBRWhCLEtBQUtELEtBQUwsQ0FBV0QsS0FGZjs7QUFJQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFRQTtBQUFSLFNBREY7QUFFRSxnREFBTSxTQUFRLE9BQWQsR0FGRjtBQUdFLGdEQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHVDQUE5QixHQUhGO0FBSUUsZ0RBQU0sTUFBSyxhQUFYLEVBQXlCLFNBQVNFLFdBQWxDLEdBSkY7QUFLRSxnREFBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSxtSEFBOUIsR0FMRjtBQU1FLGdEQUFNLE1BQUssV0FBWCxFQUF1QixTQUFRLGlCQUEvQjtBQU5GLE9BREY7QUFVRDs7O0VBdkIwQixnQkFBTUMsUzs7T0FFMUJDLFMsR0FBWTtBQUNqQkosU0FBTyxpQkFBVUssTUFBVixDQUFpQkMsVUFEUDtBQUVqQkosZUFBYSxpQkFBVUc7QUFGTixDOzs7O0FBd0JyQixZQUFJRSxNQUFKLENBQVcsWUFBWCxFQUEwQjtBQUN4QkMsV0FBUyxHQURlO0FBRXhCQyxVQUFRLEdBRmdCO0FBR3hCQyxVQUFRLEdBSGdCO0FBSXhCQyxjQUFZLFlBSlk7QUFLeEJDLGNBQVksTUFMWTtBQU14QkMsWUFBVSxLQU5jO0FBT3hCQyxjQUFZLEtBUFk7QUFReEJDLGFBQVcsUUFSYTtBQVN4QkMsa0JBQWdCLE1BVFE7QUFVeEJDLGNBQVksR0FWWTtBQVd4QkMsdUJBQXFCLGFBWEc7QUFZeEJDLHVCQUFxQjtBQVpHLENBQTFCIiwiZmlsZSI6IkhlYWRCbG9jLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ndWlsbGF1bWVrb2xseS9Eb2N1bWVudHMvTmV4dEpTL2d1aWxsYXVtZWtvbGx5LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLnByb3BzLmRlc2NyaXB0aW9uXG4gICAgICA/IHRoaXMucHJvcHMuZGVzY3JpcHRpb25cbiAgICAgIDogdGhpcy5wcm9wcy50aXRsZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nZ3VpbGxhdW1lLCBrb2xseSwgZnJvbnRlbmQsIGJhY2tlbmQsIGZ1bGwgc3RhY2ssIGRldmVsb3Blciwgd2ViLCBqYXZhc2NyaXB0LCByZWFjdEpTLCBNZXRlb3IsIEpzLCBOZXh0SlMsIFdlYnBhY2snIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J2NvcHlyaWdodCcgY29udGVudD0nR3VpbGxhdW1lIEtvbGx5JyAvPlxuICAgICAgPC9IZWFkPlxuICAgIClcbiAgfVxufVxuXG5jc3MuZ2xvYmFsKCdodG1sLCBib2R5JywgIHtcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgYm9yZGVyOiAnMCcsXG4gIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgbGluZUhlaWdodDogJzEuMTUnLFxuICBmb250U2l6ZTogJzFlbScsXG4gIGZvbnRXZWlnaHQ6ICczMDAnLFxuICBmb250U3R5bGU6ICdub3JtYWwnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0ZXh0U2hhZG93OiAnMCcsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxufSlcbiJdfQ==