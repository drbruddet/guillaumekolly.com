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

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Timeline = require('../components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _Theme = require('../components/layout/Theme');

var _resume = require('../data/resume');

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
          experiences = _props.experiences,
          projects = _props.projects,
          education = _props.education;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeadBloc2.default, {
          title: 'Guillaume Kolly | About me',
          description: 'Guillaume Kolly | Full stack developer living in Lyon. Everything to know about me here.'
        }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 01. Skills '
        ),
        _react2.default.createElement(
          'p',
          { className: skillBlock },
          'Highly skilled in creating performant \xA0',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Html'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Css'
          ),
          ', \xA0',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'React components'
          ),
          ', I play a lot since over than one year with ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Meteor'
          ),
          '. I experienced a lot ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Ruby On Rails'
          ),
          '. I\'m passionate about the \'MERN\' stack (',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'MongoDb'
          ),
          ',',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'ExpressJs'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'ReactJs'
          ),
          ', \u2009',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'NodeJs'
          ),
          '). Experienced with design, I\'m playing a lot with',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Illustrator'
          ),
          ' and ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Photoshop'
          ),
          '. Skilled with css pre-processors and frameworks, like',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Bootstrap'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Semantic-ui'
          ),
          ',',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Stylus'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Sass'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Haml'
          ),
          '. I also play a lot with templating like',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Jade'
          ),
          ' or ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Blaze '
          ),
          'with my Meteor apps. I\'m fluent with Sql (',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'MySql'
          ),
          ' / ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'PostgreSql'
          ),
          ') and noSql (',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'MongoDb'
          ),
          ' ). I believe ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'code has to clean'
          ),
          ', like a design has to be',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'responsive'
          ),
          ' and ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'accessible'
          ),
          '. I\'m fan of ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Git'
          ),
          ' and use ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Github'
          ),
          ' and',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Bitbucket'
          ),
          '. Recently, I learned to playing with',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Redux'
          ),
          ', ',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'Webpack'
          ),
          ', and',
          _react2.default.createElement(
            'strong',
            { className: _Theme._tag },
            'GraphQl'
          ),
          ' and love it!',
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          'I\'m ',
          _react2.default.createElement(
            'strong',
            { className: (0, _css2.default)(_Theme._tag, yellow) },
            'French native'
          ),
          ' and I\'m ',
          _react2.default.createElement(
            'strong',
            { className: (0, _css2.default)(_Theme._tag, yellow) },
            'fluent in English'
          ),
          '.'
        ),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 02. Work Experiences '
        ),
        _react2.default.createElement(_Timeline2.default, { items: experiences, style: timelineStyle }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 03. Personal Projects '
        ),
        _react2.default.createElement(_Timeline2.default, { items: projects, style: timelineStyle }),
        _react2.default.createElement(
          'h2',
          { className: title },
          ' 04. Education '
        ),
        _react2.default.createElement(_Timeline2.default, { items: education, style: timelineStyle })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        experiences: _resume.experiences,
        projects: _resume.projects,
        education: _resume.education
      };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var skillBlock = (0, _css2.default)({
  width: '50%',
  margin: '60px auto',
  textAlign: 'center',
  lineHeight: '1.8em',
  fontSize: '1.1em',
  color: _Theme.theme.colors.text
});

var yellow = (0, _css2.default)({
  backgroundColor: _Theme.theme.colors.trans_secondary,
  ':hover': { backgroundColor: _Theme.theme.colors.secondary }
});

var timelineStyle = {
  marker: { background: _Theme.theme.colors.primary },
  title: { color: _Theme.theme.colors.time_line_title },
  subtitle: { color: _Theme.theme.colors.light_text },
  description: { color: _Theme.theme.colors.text },
  containerBefore: { backgroundColor: _Theme.theme.colors.time_line }
};

var title = (0, _css2.default)({
  textAlign: 'center',
  textTransform: 'uppercase'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImV4cGVyaWVuY2VzIiwicHJvamVjdHMiLCJlZHVjYXRpb24iLCJ0aXRsZSIsInNraWxsQmxvY2siLCJ5ZWxsb3ciLCJ0aW1lbGluZVN0eWxlIiwiQ29tcG9uZW50Iiwid2lkdGgiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImNvbG9ycyIsInRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc19zZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJtYXJrZXIiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsInRpbWVfbGluZV90aXRsZSIsInN1YnRpdGxlIiwibGlnaHRfdGV4dCIsImRlc2NyaXB0aW9uIiwiY29udGFpbmVyQmVmb3JlIiwidGltZV9saW5lIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs2QkFZVztBQUFBLG1CQUNzQyxLQUFLQSxLQUQzQztBQUFBLFVBQ0NDLFdBREQsVUFDQ0EsV0FERDtBQUFBLFVBQ2NDLFFBRGQsVUFDY0EsUUFEZDtBQUFBLFVBQ3dCQyxTQUR4QixVQUN3QkEsU0FEeEI7OztBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxpQkFBTSw0QkFEUjtBQUVFLHVCQUFZO0FBRmQsVUFERjtBQUtFO0FBQUE7QUFBQSxZQUFJLFdBQVdDLEtBQWY7QUFBQTtBQUFBLFNBTEY7QUFNRTtBQUFBO0FBQUEsWUFBRyxXQUFXQyxVQUFkO0FBQUE7QUFFUTtBQUFBO0FBQUEsY0FBUSxzQkFBUjtBQUFBO0FBQUEsV0FGUjtBQUFBO0FBRWdEO0FBQUE7QUFBQSxjQUFRLHNCQUFSO0FBQUE7QUFBQSxXQUZoRDtBQUFBO0FBR1E7QUFBQTtBQUFBLGNBQVEsc0JBQVI7QUFB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TztBQUNMTix3Q0FESztBQUVMQyxrQ0FGSztBQUdMQztBQUhLLE9BQVA7QUFLRDs7O0VBUjBCLGdCQUFNSyxTOzs7OztBQTJEbkMsSUFBTUgsYUFBYSxtQkFBSTtBQUNyQkksU0FBTyxLQURjO0FBRXJCQyxVQUFRLFdBRmE7QUFHckJDLGFBQVcsUUFIVTtBQUlyQkMsY0FBWSxPQUpTO0FBS3JCQyxZQUFVLE9BTFc7QUFNckJDLFNBQU8sYUFBTUMsTUFBTixDQUFhQztBQU5DLENBQUosQ0FBbkI7O0FBV0EsSUFBTVYsU0FBUyxtQkFBSTtBQUNqQlcsbUJBQWlCLGFBQU1GLE1BQU4sQ0FBYUcsZUFEYjtBQUVqQixZQUFVLEVBQUVELGlCQUFpQixhQUFNRixNQUFOLENBQWFJLFNBQWhDO0FBRk8sQ0FBSixDQUFmOztBQUtBLElBQU1aLGdCQUFnQjtBQUNwQmEsVUFBUSxFQUFFQyxZQUFZLGFBQU1OLE1BQU4sQ0FBYU8sT0FBM0IsRUFEWTtBQUVwQmxCLFNBQU8sRUFBRVUsT0FBTyxhQUFNQyxNQUFOLENBQWFRLGVBQXRCLEVBRmE7QUFHcEJDLFlBQVUsRUFBRVYsT0FBTyxhQUFNQyxNQUFOLENBQWFVLFVBQXRCLEVBSFU7QUFJcEJDLGVBQWEsRUFBRVosT0FBTyxhQUFNQyxNQUFOLENBQWFDLElBQXRCLEVBSk87QUFLcEJXLG1CQUFpQixFQUFFVixpQkFBaUIsYUFBTUYsTUFBTixDQUFhYSxTQUFoQztBQUxHLENBQXRCOztBQVFBLElBQU14QixRQUFRLG1CQUFJO0FBQ2hCTyxhQUFXLFFBREs7QUFFaEJrQixpQkFBZTtBQUZDLENBQUosQ0FBZCIsImZpbGUiOiJyZXN1bWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnZ2xhbW9yJ1xuXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lbGluZSdcblxuaW1wb3J0IHsgdGhlbWUsIF90YWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCB7IGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gZnJvbSAnLi4vZGF0YS9yZXN1bWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwZXJpZW5jZXM6ICBleHBlcmllbmNlcyxcbiAgICAgIHByb2plY3RzOiAgICAgcHJvamVjdHMsXG4gICAgICBlZHVjYXRpb246ICAgIGVkdWNhdGlvbixcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPVwiR3VpbGxhdW1lIEtvbGx5IHwgQWJvdXQgbWVcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR3VpbGxhdW1lIEtvbGx5IHwgRnVsbCBzdGFjayBkZXZlbG9wZXIgbGl2aW5nIGluIEx5b24uIEV2ZXJ5dGhpbmcgdG8ga25vdyBhYm91dCBtZSBoZXJlLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3RpdGxlfT4gMDEuIFNraWxscyA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3NraWxsQmxvY2t9PlxuICAgICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnRcbiAgICAgICAgICAmbmJzcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SHRtbDwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkNzczwvc3Ryb25nPixcbiAgICAgICAgICAmbmJzcDs8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVhY3QgY29tcG9uZW50czwvc3Ryb25nPixcbiAgICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGggPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk1ldGVvcjwvc3Ryb25nPi5cbiAgICAgICAgICBJIGV4cGVyaWVuY2VkIGEgbG90IDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SdWJ5IE9uIFJhaWxzPC9zdHJvbmc+LlxuICAgICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IHRoZSAnTUVSTicgc3RhY2sgKDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Nb25nb0RiPC9zdHJvbmc+LFxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5FeHByZXNzSnM8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5SZWFjdEpzPC9zdHJvbmc+LFxuICAgICAgICAgICZ0aGluc3A7PHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk5vZGVKczwvc3Ryb25nPikuXG4gICAgICAgICAgRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGEgbG90IHdpdGhcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SWxsdXN0cmF0b3I8L3N0cm9uZz4gYW5kIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5QaG90b3Nob3A8L3N0cm9uZz4uXG4gICAgICAgICAgU2tpbGxlZCB3aXRoIGNzcyBwcmUtcHJvY2Vzc29ycyBhbmQgZnJhbWV3b3JrcywgbGlrZVxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5Cb290c3RyYXA8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5TZW1hbnRpYy11aTwvc3Ryb25nPixcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U3R5bHVzPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+U2Fzczwvc3Ryb25nPiwgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkhhbWw8L3N0cm9uZz4uXG4gICAgICAgICAgSSBhbHNvIHBsYXkgYSBsb3Qgd2l0aCB0ZW1wbGF0aW5nIGxpa2VcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+SmFkZTwvc3Ryb25nPiBvciA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+QmxhemUgPC9zdHJvbmc+XG4gICAgICAgICAgd2l0aCBteSBNZXRlb3IgYXBwcy4gSSdtIGZsdWVudCB3aXRoIFNxbCAoXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9Pk15U3FsPC9zdHJvbmc+IC8gPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PlBvc3RncmVTcWw8L3N0cm9uZz4pXG4gICAgICAgICAgYW5kIG5vU3FsICg8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+TW9uZ29EYjwvc3Ryb25nPiApLlxuICAgICAgICAgIEkgYmVsaWV2ZSA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+Y29kZSBoYXMgdG8gY2xlYW48L3N0cm9uZz4sIGxpa2UgYSBkZXNpZ24gaGFzIHRvIGJlXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PnJlc3BvbnNpdmU8L3N0cm9uZz4gYW5kIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5hY2Nlc3NpYmxlPC9zdHJvbmc+LlxuICAgICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkdpdDwvc3Ryb25nPiBhbmQgdXNlIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5HaXRodWI8L3N0cm9uZz4gYW5kXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e190YWd9PkJpdGJ1Y2tldDwvc3Ryb25nPi4gUmVjZW50bHksIEkgbGVhcm5lZCB0byBwbGF5aW5nIHdpdGhcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+UmVkdXg8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPXtfdGFnfT5XZWJwYWNrPC9zdHJvbmc+LCBhbmRcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17X3RhZ30+R3JhcGhRbDwvc3Ryb25nPiBhbmQgbG92ZSBpdCFcbiAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPXtjc3MoX3RhZywgeWVsbG93KX0+RnJlbmNoIG5hdGl2ZTwvc3Ryb25nPiBhbmQgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPXtjc3MoX3RhZywgeWVsbG93KX0+Zmx1ZW50IGluIEVuZ2xpc2g8L3N0cm9uZz4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dGl0bGV9PiAwMi4gV29yayBFeHBlcmllbmNlcyA8L2gyPlxuICAgICAgICA8VGltZWxpbmUgaXRlbXM9e2V4cGVyaWVuY2VzfSBzdHlsZT17dGltZWxpbmVTdHlsZX0gLz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dGl0bGV9PiAwMy4gUGVyc29uYWwgUHJvamVjdHMgPC9oMj5cbiAgICAgICAgPFRpbWVsaW5lIGl0ZW1zPXtwcm9qZWN0c30gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3RpdGxlfT4gMDQuIEVkdWNhdGlvbiA8L2gyPlxuICAgICAgICA8VGltZWxpbmUgaXRlbXM9e2VkdWNhdGlvbn0gc3R5bGU9e3RpbWVsaW5lU3R5bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc2tpbGxCbG9jayA9IGNzcyh7XG4gIHdpZHRoOiAnNTAlJyxcbiAgbWFyZ2luOiAnNjBweCBhdXRvJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgbGluZUhlaWdodDogJzEuOGVtJyxcbiAgZm9udFNpemU6ICcxLjFlbScsXG4gIGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCxcbiAgLy90ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgLy90ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnXG59KVxuXG5jb25zdCB5ZWxsb3cgPSBjc3Moe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc19zZWNvbmRhcnksXG4gICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeSB9XG59KVxuXG5jb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICBtYXJrZXI6IHsgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLnByaW1hcnkgfSxcbiAgdGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy50aW1lX2xpbmVfdGl0bGUgfSxcbiAgc3VidGl0bGU6IHsgY29sb3I6IHRoZW1lLmNvbG9ycy5saWdodF90ZXh0IH0sXG4gIGRlc2NyaXB0aW9uOiB7IGNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dCB9LFxuICBjb250YWluZXJCZWZvcmU6IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMudGltZV9saW5lIH1cbn1cblxuY29uc3QgdGl0bGUgPSBjc3Moe1xuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbn0pXG4iXX0=