'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactParticlesJs = require('react-particles-js');

var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _ParallaxBlock = require('../components/ParallaxBlock');

var _ParallaxBlock2 = _interopRequireDefault(_ParallaxBlock);

var _Timeline = require('../components/timeline/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _ButtonLink = require('../components/ButtonLink');

var _ButtonLink2 = _interopRequireDefault(_ButtonLink);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

var _particles = require('../data/particles');

var _particles2 = _interopRequireDefault(_particles);

var _myresume = require('../data/myresume');

var _socials = require('../data/socials');

var _socials2 = _interopRequireDefault(_socials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/pages/resume.js?entry';


var Resume = function (_React$Component) {
  (0, _inherits3.default)(Resume, _React$Component);

  function Resume() {
    (0, _classCallCheck3.default)(this, Resume);

    return (0, _possibleConstructorReturn3.default)(this, (Resume.__proto__ || (0, _getPrototypeOf2.default)(Resume)).apply(this, arguments));
  }

  (0, _createClass3.default)(Resume, [{
    key: 'renderSkills',
    value: function renderSkills() {
      return _react2.default.createElement('p', { className: 'skillblock', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Highly skilled in creating performant\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Html'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Css'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'React components'), ', I play a lot since over than one year with\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Meteor'), '. I\'m passionate about the \'MERN\' stack\u2009 (', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'MongoDb'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'ExpressJs'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'ReactJs'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'NodeJs'), '). I also code some backend work using\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Ruby On Rails'), ',\u2009 and enjoy using the term, I know\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Shell scripting'), ' to\u2009 make my life easier. Experienced with design, I\'m playing a lot with ', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Illustrator'), ' and\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Photoshop'), '. Skilled with css pre-processors and frameworks, like\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Bootstrap'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Semantic-ui'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Stylus'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Scss'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Haml'), '. I also play with templating like ', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Jade'), ' /\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Blaze'), '\xA0with my Meteor apps. I\'m fluent with Sql (', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'MySql'), ' /\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'PostgreSql'), ') and noSql (', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'MongoDb'), '). I believe ', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'code has to clean'), ', like a design has to be\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'responsive'), ' and\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'accessible'), '. I\'m fan of ', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Git'), ' and use\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Github'), ' and\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Bitbucket'), '. Recently, I\'m learning to play with\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Redux'), ',\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Webpack'), ', and\u2009', _react2.default.createElement('strong', { className: 'tag', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'GraphQl'), ' and I\'m loving it!', _react2.default.createElement('br', {
        'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), 'I\'m ', _react2.default.createElement('strong', { className: 'tag yellow', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'French native'), '\u2009 and I\'m ', _react2.default.createElement('strong', { className: 'tag yellow', 'data-jsx': 1117249730,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'fluent in English'), '.', _react2.default.createElement(_style2.default, {
        styleId: 1117249730,
        css: '.skillblock[data-jsx="1117249730"] {width: 50%;margin: 60px auto;text-align: center;line-height: 1.8em;word-wrap: break-word;font-size: 1.1em;color: ' + _Theme.theme.colors.text + ';}@media(max-width: 1240px) {.skillblock[data-jsx="1117249730"] {width: 70%;}}@media(max-width: 640px) {.skillblock[data-jsx="1117249730"] {width: 84%;text-align: justify;text-justify: inter-cluster;margin: 30px auto;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRW9CLEFBQ0ssb0NBQ0EsV0FDTyxrQkFDQyxtQkFDQSxtQkFDRyxzQkFDTCxpQkFDa0IsbUNBQ3BDLENBRTBCLDJCQUNaLG9DQUFZLFdBQUUsQ0FDNUIsQ0FFeUIsMEJBQ1gsb0NBQ0EsV0FDUyxvQkFDUSw0QkFDVixrQkFDbkIsQ0FDRiIsImZpbGUiOiJwYWdlcy9yZXN1bWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvbXlyZXN1bWUnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzLFxuICAgICAgc29jaWFsczogICAgICBzb2NpYWxzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJza2lsbGJsb2NrXCI+XG4gICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkh0bWw8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5Dc3M8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5SZWFjdCBjb21wb25lbnRzPC9zdHJvbmc+LFxuICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGgmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPk1ldGVvcjwvc3Ryb25nPi5cbiAgICAgICAgSSdtIHBhc3Npb25hdGUgYWJvdXQgdGhlICdNRVJOJyBzdGFjayZ0aGluc3A7XG4gICAgICAgICg8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPk1vbmdvRGI8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5FeHByZXNzSnM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5SZWFjdEpzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+Tm9kZUpzPC9zdHJvbmc+KS5cbiAgICAgICAgSSBhbHNvIGNvZGUgc29tZSBiYWNrZW5kIHdvcmsgdXNpbmcmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlJ1YnkgT24gUmFpbHM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgYW5kIGVuam95IHVzaW5nIHRoZSB0ZXJtLCBJIGtub3cmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlNoZWxsIHNjcmlwdGluZzwvc3Ryb25nPiB0byZ0aGluc3A7XG4gICAgICAgIG1ha2UgbXkgbGlmZSBlYXNpZXIuIEV4cGVyaWVuY2VkIHdpdGggZGVzaWduLCBJJ20gcGxheWluZyBhXG4gICAgICAgIGxvdCB3aXRoIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+SWxsdXN0cmF0b3I8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5QaG90b3Nob3A8L3N0cm9uZz4uXG4gICAgICAgIFNraWxsZWQgd2l0aCBjc3MgcHJlLXByb2Nlc3NvcnMgYW5kIGZyYW1ld29ya3MsIGxpa2UmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkJvb3RzdHJhcDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlNlbWFudGljLXVpPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+U3R5bHVzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+U2Nzczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkhhbWw8L3N0cm9uZz4uIEkgYWxzbyBwbGF5IHdpdGggdGVtcGxhdGluZ1xuICAgICAgICBsaWtlIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+SmFkZTwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5CbGF6ZTwvc3Ryb25nPlxuICAgICAgICAmbmJzcDt3aXRoIG15IE1ldGVvciBhcHBzLiBJJ20gZmx1ZW50IHdpdGggU3FsIChcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5NeVNxbDwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5Qb3N0Z3JlU3FsPC9zdHJvbmc+KVxuICAgICAgICBhbmQgbm9TcWwgKDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+TW9uZ29EYjwvc3Ryb25nPikuXG4gICAgICAgIEkgYmVsaWV2ZSA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPmNvZGUgaGFzIHRvIGNsZWFuPC9zdHJvbmc+LCBsaWtlXG4gICAgICAgIGEgZGVzaWduIGhhcyB0byBiZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5HaXQ8L3N0cm9uZz4gYW5kIHVzZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+R2l0aHViPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+Qml0YnVja2V0PC9zdHJvbmc+LiBSZWNlbnRseSxcbiAgICAgICAgSSdtIGxlYXJuaW5nIHRvIHBsYXkgd2l0aCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+UmVkdXg8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5XZWJwYWNrPC9zdHJvbmc+LCBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkdyYXBoUWw8L3N0cm9uZz4gYW5kIEknbSBsb3ZpbmcgaXQhXG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnIHllbGxvd1wiPkZyZW5jaCBuYXRpdmU8L3N0cm9uZz4mdGhpbnNwO1xuICAgICAgICBhbmQgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnIHllbGxvd1wiPmZsdWVudCBpbiBFbmdsaXNoPC9zdHJvbmc+LlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2tpbGxibG9jayB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyNDBweCkge1xuICAgICAgICAgICAgICAuc2tpbGxibG9jayB7IHdpZHRoOiA3MCU7IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLnNraWxsYmxvY2sge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLWNsdXN0ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9wPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZpbmRNZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWVudSB7IG1hcmdpbjogMzBweCBhdXRvIDgwcHggYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclRpbWVsaW5lKGl0ZW1zKSB7XG4gICAgcmV0dXJuIDxUaW1lbGluZSBpdGVtcz17aXRlbXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJsb2NrKHRpdGxlLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXJhbGxheEJsb2NrIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZD17dGhpcy5yZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKX0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9QYXJhbGxheEJsb2NrPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlck1lbnVJY29ucygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxCdXR0b25MaW5rIHRhYmxlXG4gICAgICAgICAgdXJsPXtjb25maWcuYXBwbGljYXRpb24uY3ZfcGRmX3VybH1cbiAgICAgICAgICB0aXRsZT1cIkRvd25sb2FkIENWXCJcbiAgICAgICAgICBhbHQ9XCJEb3dubG9hZCBQREYgUmVzdW1lXCJcbiAgICAgICAgICBibGFuaz17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbkxpbmsgdGFibGVcbiAgICAgICAgICB1cmw9XCIvY29udGFjdFwiXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBhbHQ9XCJDb250YWN0IE1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7O1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgbGVmdDogMyU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDElO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEucmVzdW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMSAuIFNraWxsc1wiLCB0aGlzLnJlbmRlclNraWxscygpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAyIC4gV29yayBFeHBlcmllbmNlc1wiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZXhwZXJpZW5jZXMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAzIC4gUGVyc29uYWwgUHJvamVjdHNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKHByb2plY3RzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNCAuIEVkdWNhdGlvblwiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZWR1Y2F0aW9uKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNSAuIEZpbmQgTWVcIiwgdGhpcy5yZW5kZXJGaW5kTWUoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlck1lbnVJY29ucygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/resume.js?entry */'
      }));
    }
  }, {
    key: 'renderFindMe',
    value: function renderFindMe() {
      return _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1557781213,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_Menu2.default, { links: _socials2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1557781213,
        css: '.menu[data-jsx="1557781213"] {margin: 30px auto 80px auto;text-align: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR29CLEFBQ0QsOEJBQTZCLDRCQUFvQixtQkFBRSIsImZpbGUiOiJwYWdlcy9yZXN1bWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvbXlyZXN1bWUnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzLFxuICAgICAgc29jaWFsczogICAgICBzb2NpYWxzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJza2lsbGJsb2NrXCI+XG4gICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkh0bWw8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5Dc3M8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5SZWFjdCBjb21wb25lbnRzPC9zdHJvbmc+LFxuICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGgmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPk1ldGVvcjwvc3Ryb25nPi5cbiAgICAgICAgSSdtIHBhc3Npb25hdGUgYWJvdXQgdGhlICdNRVJOJyBzdGFjayZ0aGluc3A7XG4gICAgICAgICg8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPk1vbmdvRGI8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5FeHByZXNzSnM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5SZWFjdEpzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+Tm9kZUpzPC9zdHJvbmc+KS5cbiAgICAgICAgSSBhbHNvIGNvZGUgc29tZSBiYWNrZW5kIHdvcmsgdXNpbmcmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlJ1YnkgT24gUmFpbHM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgYW5kIGVuam95IHVzaW5nIHRoZSB0ZXJtLCBJIGtub3cmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlNoZWxsIHNjcmlwdGluZzwvc3Ryb25nPiB0byZ0aGluc3A7XG4gICAgICAgIG1ha2UgbXkgbGlmZSBlYXNpZXIuIEV4cGVyaWVuY2VkIHdpdGggZGVzaWduLCBJJ20gcGxheWluZyBhXG4gICAgICAgIGxvdCB3aXRoIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+SWxsdXN0cmF0b3I8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5QaG90b3Nob3A8L3N0cm9uZz4uXG4gICAgICAgIFNraWxsZWQgd2l0aCBjc3MgcHJlLXByb2Nlc3NvcnMgYW5kIGZyYW1ld29ya3MsIGxpa2UmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkJvb3RzdHJhcDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlNlbWFudGljLXVpPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+U3R5bHVzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+U2Nzczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkhhbWw8L3N0cm9uZz4uIEkgYWxzbyBwbGF5IHdpdGggdGVtcGxhdGluZ1xuICAgICAgICBsaWtlIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+SmFkZTwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5CbGF6ZTwvc3Ryb25nPlxuICAgICAgICAmbmJzcDt3aXRoIG15IE1ldGVvciBhcHBzLiBJJ20gZmx1ZW50IHdpdGggU3FsIChcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5NeVNxbDwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5Qb3N0Z3JlU3FsPC9zdHJvbmc+KVxuICAgICAgICBhbmQgbm9TcWwgKDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+TW9uZ29EYjwvc3Ryb25nPikuXG4gICAgICAgIEkgYmVsaWV2ZSA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPmNvZGUgaGFzIHRvIGNsZWFuPC9zdHJvbmc+LCBsaWtlXG4gICAgICAgIGEgZGVzaWduIGhhcyB0byBiZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5HaXQ8L3N0cm9uZz4gYW5kIHVzZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+R2l0aHViPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+Qml0YnVja2V0PC9zdHJvbmc+LiBSZWNlbnRseSxcbiAgICAgICAgSSdtIGxlYXJuaW5nIHRvIHBsYXkgd2l0aCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+UmVkdXg8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5XZWJwYWNrPC9zdHJvbmc+LCBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkdyYXBoUWw8L3N0cm9uZz4gYW5kIEknbSBsb3ZpbmcgaXQhXG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnIHllbGxvd1wiPkZyZW5jaCBuYXRpdmU8L3N0cm9uZz4mdGhpbnNwO1xuICAgICAgICBhbmQgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnIHllbGxvd1wiPmZsdWVudCBpbiBFbmdsaXNoPC9zdHJvbmc+LlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2tpbGxibG9jayB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyNDBweCkge1xuICAgICAgICAgICAgICAuc2tpbGxibG9jayB7IHdpZHRoOiA3MCU7IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLnNraWxsYmxvY2sge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLWNsdXN0ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9wPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZpbmRNZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWVudSB7IG1hcmdpbjogMzBweCBhdXRvIDgwcHggYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclRpbWVsaW5lKGl0ZW1zKSB7XG4gICAgcmV0dXJuIDxUaW1lbGluZSBpdGVtcz17aXRlbXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJsb2NrKHRpdGxlLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXJhbGxheEJsb2NrIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZD17dGhpcy5yZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKX0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9QYXJhbGxheEJsb2NrPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlck1lbnVJY29ucygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxCdXR0b25MaW5rIHRhYmxlXG4gICAgICAgICAgdXJsPXtjb25maWcuYXBwbGljYXRpb24uY3ZfcGRmX3VybH1cbiAgICAgICAgICB0aXRsZT1cIkRvd25sb2FkIENWXCJcbiAgICAgICAgICBhbHQ9XCJEb3dubG9hZCBQREYgUmVzdW1lXCJcbiAgICAgICAgICBibGFuaz17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbkxpbmsgdGFibGVcbiAgICAgICAgICB1cmw9XCIvY29udGFjdFwiXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBhbHQ9XCJDb250YWN0IE1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7O1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgbGVmdDogMyU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDElO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEucmVzdW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMSAuIFNraWxsc1wiLCB0aGlzLnJlbmRlclNraWxscygpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAyIC4gV29yayBFeHBlcmllbmNlc1wiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZXhwZXJpZW5jZXMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAzIC4gUGVyc29uYWwgUHJvamVjdHNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKHByb2plY3RzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNCAuIEVkdWNhdGlvblwiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZWR1Y2F0aW9uKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNSAuIEZpbmQgTWVcIiwgdGhpcy5yZW5kZXJGaW5kTWUoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlck1lbnVJY29ucygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/resume.js?entry */'
      }));
    }
  }, {
    key: 'renderTimeline',
    value: function renderTimeline(items) {
      return _react2.default.createElement(_Timeline2.default, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      });
    }
  }, {
    key: 'renderParallaxBackground',
    value: function renderParallaxBackground() {
      return _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: _particles2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      });
    }
  }, {
    key: 'renderParallaxBlock',
    value: function renderParallaxBlock(title, content) {
      return _react2.default.createElement(_ParallaxBlock2.default, { title: title, background: this.renderParallaxBackground(), __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, content);
    }
  }, {
    key: 'renderMenuIcons',
    value: function renderMenuIcons() {
      return _react2.default.createElement('div', { className: 'menu', 'data-jsx': 801448809,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_ButtonLink2.default, { table: true,
        url: _config2.default.application.cv_pdf_url,
        title: 'Download CV',
        alt: 'Download PDF Resume',
        blank: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement(_ButtonLink2.default, { table: true,
        url: '/contact',
        title: 'Contact',
        alt: 'Contact Me',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 801448809,
        css: '.menu[data-jsx="801448809"] {position: fixed;;top: 50%;left: 3%;z-index: 999;width: 150px;}@media(max-width: 640px) {.menu[data-jsx="801448809"] {top: auto;bottom: 1px;display: table;border-collapse: separate;border-spacing: 4px;width: 98%;left: 1%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSm9CLEFBQ0QsNkJBQ1csZ0JBQUMsQ0FDUixTQUNBLFNBQ0ksYUFDQSxhQUNkLENBRXlCLDBCQUNqQiw2QkFDSyxVQUNFLFlBQ0csZUFDVywwQkFDTixvQkFDVCxXQUNGLFNBQ1YsQ0FDRiIsImZpbGUiOiJwYWdlcy9yZXN1bWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvbXlyZXN1bWUnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzLFxuICAgICAgc29jaWFsczogICAgICBzb2NpYWxzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJza2lsbGJsb2NrXCI+XG4gICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkh0bWw8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5Dc3M8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5SZWFjdCBjb21wb25lbnRzPC9zdHJvbmc+LFxuICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGgmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPk1ldGVvcjwvc3Ryb25nPi5cbiAgICAgICAgSSdtIHBhc3Npb25hdGUgYWJvdXQgdGhlICdNRVJOJyBzdGFjayZ0aGluc3A7XG4gICAgICAgICg8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPk1vbmdvRGI8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5FeHByZXNzSnM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5SZWFjdEpzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+Tm9kZUpzPC9zdHJvbmc+KS5cbiAgICAgICAgSSBhbHNvIGNvZGUgc29tZSBiYWNrZW5kIHdvcmsgdXNpbmcmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlJ1YnkgT24gUmFpbHM8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgYW5kIGVuam95IHVzaW5nIHRoZSB0ZXJtLCBJIGtub3cmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlNoZWxsIHNjcmlwdGluZzwvc3Ryb25nPiB0byZ0aGluc3A7XG4gICAgICAgIG1ha2UgbXkgbGlmZSBlYXNpZXIuIEV4cGVyaWVuY2VkIHdpdGggZGVzaWduLCBJJ20gcGxheWluZyBhXG4gICAgICAgIGxvdCB3aXRoIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+SWxsdXN0cmF0b3I8L3N0cm9uZz4gYW5kJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5QaG90b3Nob3A8L3N0cm9uZz4uXG4gICAgICAgIFNraWxsZWQgd2l0aCBjc3MgcHJlLXByb2Nlc3NvcnMgYW5kIGZyYW1ld29ya3MsIGxpa2UmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkJvb3RzdHJhcDwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPlNlbWFudGljLXVpPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+U3R5bHVzPC9zdHJvbmc+LCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+U2Nzczwvc3Ryb25nPiwmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkhhbWw8L3N0cm9uZz4uIEkgYWxzbyBwbGF5IHdpdGggdGVtcGxhdGluZ1xuICAgICAgICBsaWtlIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+SmFkZTwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5CbGF6ZTwvc3Ryb25nPlxuICAgICAgICAmbmJzcDt3aXRoIG15IE1ldGVvciBhcHBzLiBJJ20gZmx1ZW50IHdpdGggU3FsIChcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5NeVNxbDwvc3Ryb25nPiAvJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5Qb3N0Z3JlU3FsPC9zdHJvbmc+KVxuICAgICAgICBhbmQgbm9TcWwgKDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+TW9uZ29EYjwvc3Ryb25nPikuXG4gICAgICAgIEkgYmVsaWV2ZSA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPmNvZGUgaGFzIHRvIGNsZWFuPC9zdHJvbmc+LCBsaWtlXG4gICAgICAgIGEgZGVzaWduIGhhcyB0byBiZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+cmVzcG9uc2l2ZTwvc3Ryb25nPiBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPmFjY2Vzc2libGU8L3N0cm9uZz4uXG4gICAgICAgIEknbSBmYW4gb2YgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5HaXQ8L3N0cm9uZz4gYW5kIHVzZSZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+R2l0aHViPC9zdHJvbmc+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+Qml0YnVja2V0PC9zdHJvbmc+LiBSZWNlbnRseSxcbiAgICAgICAgSSdtIGxlYXJuaW5nIHRvIHBsYXkgd2l0aCZ0aGluc3A7XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnXCI+UmVkdXg8L3N0cm9uZz4sJnRoaW5zcDtcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWdcIj5XZWJwYWNrPC9zdHJvbmc+LCBhbmQmdGhpbnNwO1xuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRhZ1wiPkdyYXBoUWw8L3N0cm9uZz4gYW5kIEknbSBsb3ZpbmcgaXQhXG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnIHllbGxvd1wiPkZyZW5jaCBuYXRpdmU8L3N0cm9uZz4mdGhpbnNwO1xuICAgICAgICBhbmQgSSdtIDxzdHJvbmcgY2xhc3NOYW1lPVwidGFnIHllbGxvd1wiPmZsdWVudCBpbiBFbmdsaXNoPC9zdHJvbmc+LlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2tpbGxibG9jayB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyNDBweCkge1xuICAgICAgICAgICAgICAuc2tpbGxibG9jayB7IHdpZHRoOiA3MCU7IH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLnNraWxsYmxvY2sge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLWNsdXN0ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9wPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZpbmRNZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWVudSB7IG1hcmdpbjogMzBweCBhdXRvIDgwcHggYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclRpbWVsaW5lKGl0ZW1zKSB7XG4gICAgcmV0dXJuIDxUaW1lbGluZSBpdGVtcz17aXRlbXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIDxQYXJ0aWNsZXMgaGVpZ2h0PVwiMTAwdmhcIiB3aWR0aD1cIjEwMHZ3XCIgcGFyYW1zPXtwYXJ0aWNsZXN9IC8+XG4gIH1cblxuICByZW5kZXJQYXJhbGxheEJsb2NrKHRpdGxlLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXJhbGxheEJsb2NrIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZD17dGhpcy5yZW5kZXJQYXJhbGxheEJhY2tncm91bmQoKX0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9QYXJhbGxheEJsb2NrPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlck1lbnVJY29ucygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxCdXR0b25MaW5rIHRhYmxlXG4gICAgICAgICAgdXJsPXtjb25maWcuYXBwbGljYXRpb24uY3ZfcGRmX3VybH1cbiAgICAgICAgICB0aXRsZT1cIkRvd25sb2FkIENWXCJcbiAgICAgICAgICBhbHQ9XCJEb3dubG9hZCBQREYgUmVzdW1lXCJcbiAgICAgICAgICBibGFuaz17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbkxpbmsgdGFibGVcbiAgICAgICAgICB1cmw9XCIvY29udGFjdFwiXG4gICAgICAgICAgdGl0bGU9XCJDb250YWN0XCJcbiAgICAgICAgICBhbHQ9XCJDb250YWN0IE1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7O1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgbGVmdDogMyU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDElO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEucmVzdW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMSAuIFNraWxsc1wiLCB0aGlzLnJlbmRlclNraWxscygpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAyIC4gV29yayBFeHBlcmllbmNlc1wiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZXhwZXJpZW5jZXMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAzIC4gUGVyc29uYWwgUHJvamVjdHNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKHByb2plY3RzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNCAuIEVkdWNhdGlvblwiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZWR1Y2F0aW9uKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNSAuIEZpbmQgTWVcIiwgdGhpcy5yZW5kZXJGaW5kTWUoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlck1lbnVJY29ucygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/resume.js?entry */'
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          experiences = _props.experiences,
          projects = _props.projects,
          education = _props.education;

      var meta = config.meta.resume;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement(_HeadBloc2.default, {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), this.renderParallaxBlock("01 . Skills", this.renderSkills()), this.renderParallaxBlock("02 . Work Experiences", this.renderTimeline(experiences)), this.renderParallaxBlock("03 . Personal Projects", this.renderTimeline(projects)), this.renderParallaxBlock("04 . Education", this.renderTimeline(education)), this.renderParallaxBlock("05 . Find Me", this.renderFindMe()), this.renderMenuIcons());
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        experiences: _myresume.experiences,
        projects: _myresume.projects,
        education: _myresume.education,
        config: _config2.default,
        particles: _particles2.default,
        socials: _socials2.default
      };
    }
  }]);

  return Resume;
}(_react2.default.Component);

exports.default = Resume;