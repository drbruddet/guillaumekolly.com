'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  type: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};

var Button = function Button(props) {
  return _react2.default.createElement('input', { type: props.type, value: props.value, className: (0, _css2.default)(button, props.style) });
};

var button = (0, _css2.default)({
  background: '#fff',
  color: '#000',
  padding: '10px 5px',
  border: 'none',
  width: '100%',
  fontSize: '1.1em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer'
});

Button.propTypes = propTypes;
exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInR5cGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJzdHlsZSIsIm9iamVjdCIsIkJ1dHRvbiIsInByb3BzIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlciIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsUUFBUSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVoQkMsU0FBUSxpQkFBVUYsTUFBVixDQUFpQkMsVUFGVDtBQUdoQkUsU0FBUSxpQkFBVUM7QUFIRixDQUFsQjs7QUFNQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2IseUNBQU8sTUFBTUEsTUFBTVAsSUFBbkIsRUFBeUIsT0FBT08sTUFBTUosS0FBdEMsRUFBNkMsV0FBVyxtQkFBSUssTUFBSixFQUFZRCxNQUFNSCxLQUFsQixDQUF4RCxHQURhO0FBQUEsQ0FBZjs7QUFHQSxJQUFNSSxTQUFTLG1CQUFJO0FBQ2pCQyxjQUFZLE1BREs7QUFFakJDLFNBQU8sTUFGVTtBQUdqQkMsV0FBUyxVQUhRO0FBSWpCQyxVQUFRLE1BSlM7QUFLakJDLFNBQU8sTUFMVTtBQU1qQkMsWUFBVSxPQU5PO0FBT2pCQyxjQUFZLE1BUEs7QUFRakJDLGlCQUFlLFdBUkU7QUFTakJDLFVBQVE7QUFUUyxDQUFKLENBQWY7O0FBWUFYLE9BQU9QLFNBQVAsR0FBbUJBLFNBQW5CO2tCQUNlTyxNIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHR5cGU6ICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3R5bGU6ICBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+XG4gIDxpbnB1dCB0eXBlPXtwcm9wcy50eXBlfSB2YWx1ZT17cHJvcHMudmFsdWV9IGNsYXNzTmFtZT17Y3NzKGJ1dHRvbiwgcHJvcHMuc3R5bGUpfSAvPlxuXG5jb25zdCBidXR0b24gPSBjc3Moe1xuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGNvbG9yOiAnIzAwMCcsXG4gIHBhZGRpbmc6ICcxMHB4IDVweCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBmb250U2l6ZTogJzEuMWVtJyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG59KVxuXG5CdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ==