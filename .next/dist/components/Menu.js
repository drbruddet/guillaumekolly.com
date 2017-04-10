'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  links: _react.PropTypes.array.isRequired,
  style: _react.PropTypes.object
};

var renderLinks = function renderLinks(links, style) {
  return links.map(function (link, i) {
    return link.type === 'email' ? _react2.default.createElement(
      'a',
      { key: i, className: style.link, href: link.url },
      link.name
    ) : _react2.default.createElement(
      _link2.default,
      { key: i, href: link.url },
      _react2.default.createElement(
        'a',
        { className: style.link, target: '_blank' },
        link.name
      )
    );
  });
};

var Menu = function Menu(props) {
  return _react2.default.createElement(
    'div',
    { className: props.style.component },
    renderLinks(props.links, props.style)
  );
};

Menu.propTypes = propTypes;
exports.default = Menu;