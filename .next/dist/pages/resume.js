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
      return _react2.default.createElement('p', { className: 'skillblock', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Highly skilled in creating performant\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Html'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Css'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'React components'), ', I play a lot since over than one year with\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Meteor'), '. I\'m passionate about the \'MERN\' stack\u2009 (', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'MongoDb'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'ExpressJs'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'ReactJs'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'NodeJs'), '). I also code some backend work using\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Ruby On Rails'), ',\u2009 and enjoy using the term, I know\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Shell scripting'), ' to\u2009 make my life easier. Experienced with design, I\'m playing a lot with ', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Illustrator'), ' and\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Photoshop'), '. Skilled with css pre-processors and frameworks, like\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Bootstrap'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Semantic-ui'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Stylus'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Scss'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Haml'), '. I also play with templating like ', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Jade'), ' /\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Blaze'), '\xA0with my Meteor apps. I\'m fluent with Sql (', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'MySql'), ' /\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'PostgreSql'), ') and noSql (', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'MongoDb'), '). I believe ', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'code has to clean'), ', like a design has to be\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'responsive'), ' and\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'accessible'), '. I\'m fan of ', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Git'), ' and use\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Github'), ' and\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Bitbucket'), '. Recently, I\'m learning to play with\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Redux'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Webpack'), ', and\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'GraphQl'), ' and I\'m loving it!', _react2.default.createElement('br', {
        'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), 'I\'m ', _react2.default.createElement('a', { className: 'tag yellow', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'French native'), '\u2009 and I\'m ', _react2.default.createElement('a', { className: 'tag yellow', 'data-jsx': 966290402,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'fluent in English'), '.', _react2.default.createElement(_style2.default, {
        styleId: 966290402,
        css: '.skillblock[data-jsx="966290402"] {width: 50%;margin: 60px auto;text-align: center;line-height: 1.8em;word-wrap: break-word;font-size: 1.1em;color: ' + _Theme.theme.colors.text + ';}@media screen and (max-width: 1240px) {.skillblock[data-jsx="966290402"] {width: 70%;}}@media screen and (max-width: 640px) {.skillblock[data-jsx="966290402"] {width: 84%;text-align: justify;text-justify: inter-cluster;margin: 30px auto;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RW9CLEFBQ0ssbUNBQ0EsV0FDTyxrQkFDQyxtQkFDQSxtQkFDRyxzQkFDTCxpQkFDa0IsbUNBQ3BDLENBRXNDLHVDQUN4QixtQ0FBWSxXQUFFLENBQzVCLENBRXFDLHNDQUN2QixtQ0FDQSxXQUNTLG9CQUNRLDRCQUNWLGtCQUNuQixDQUNGIiwiZmlsZSI6InBhZ2VzL3Jlc3VtZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3VpbGxhdW1la29sbHkvRG9jdW1lbnRzL05leHRKUy9ndWlsbGF1bWVrb2xseS5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9UaGVtZSdcbmltcG9ydCBIZWFkQmxvYyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkQmxvYydcbmltcG9ydCBQYXJhbGxheEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvUGFyYWxsYXhCbG9jaydcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lJ1xuaW1wb3J0IEJ1dHRvbkxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25MaW5rJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHBhcnRpY2xlcyBmcm9tICcuLi9kYXRhL3BhcnRpY2xlcydcbmltcG9ydCB7IGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gZnJvbSAnLi4vZGF0YS9teXJlc3VtZSdcbmltcG9ydCBzb2NpYWxzIGZyb20gJy4uL2RhdGEvc29jaWFscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwZXJpZW5jZXM6ICBleHBlcmllbmNlcyxcbiAgICAgIHByb2plY3RzOiAgICAgcHJvamVjdHMsXG4gICAgICBlZHVjYXRpb246ICAgIGVkdWNhdGlvbixcbiAgICAgIGNvbmZpZzogICAgICAgY29uZmlnLFxuICAgICAgcGFydGljbGVzOiAgICBwYXJ0aWNsZXMsXG4gICAgICBzb2NpYWxzOiAgICAgIHNvY2lhbHNcbiAgICB9XG4gIH1cblxuICByZW5kZXJTa2lsbHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT1cInNraWxsYmxvY2tcIj5cbiAgICAgICAgSGlnaGx5IHNraWxsZWQgaW4gY3JlYXRpbmcgcGVyZm9ybWFudCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkh0bWw8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkNzczwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UmVhY3QgY29tcG9uZW50czwvYT4sXG4gICAgICAgIEkgcGxheSBhIGxvdCBzaW5jZSBvdmVyIHRoYW4gb25lIHllYXIgd2l0aCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPk1ldGVvcjwvYT4uXG4gICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IHRoZSAnTUVSTicgc3RhY2smdGhpbnNwO1xuICAgICAgICAoPGEgY2xhc3NOYW1lPVwidGFnXCI+TW9uZ29EYjwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+RXhwcmVzc0pzPC9hPiwmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5SZWFjdEpzPC9hPiwmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5Ob2RlSnM8L2E+KS5cbiAgICAgICAgSSBhbHNvIGNvZGUgc29tZSBiYWNrZW5kIHdvcmsgdXNpbmcmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5SdWJ5IE9uIFJhaWxzPC9hPiwmdGhpbnNwO1xuICAgICAgICBhbmQgZW5qb3kgdXNpbmcgdGhlIHRlcm0sIEkga25vdyZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlNoZWxsIHNjcmlwdGluZzwvYT4gdG8mdGhpbnNwO1xuICAgICAgICBtYWtlIG15IGxpZmUgZWFzaWVyLiBFeHBlcmllbmNlZCB3aXRoIGRlc2lnbiwgSSdtIHBsYXlpbmcgYVxuICAgICAgICBsb3Qgd2l0aCA8YSBjbGFzc05hbWU9XCJ0YWdcIj5JbGx1c3RyYXRvcjwvYT4gYW5kJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UGhvdG9zaG9wPC9hPi5cbiAgICAgICAgU2tpbGxlZCB3aXRoIGNzcyBwcmUtcHJvY2Vzc29ycyBhbmQgZnJhbWV3b3JrcywgbGlrZSZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkJvb3RzdHJhcDwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+U2VtYW50aWMtdWk8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlN0eWx1czwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+U2NzczwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+SGFtbDwvYT4uIEkgYWxzbyBwbGF5IHdpdGggdGVtcGxhdGluZ1xuICAgICAgICBsaWtlIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkphZGU8L2E+IC8mdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5CbGF6ZTwvYT5cbiAgICAgICAgJm5ic3A7d2l0aCBteSBNZXRlb3IgYXBwcy4gSSdtIGZsdWVudCB3aXRoIFNxbCAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPk15U3FsPC9hPiAvJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UG9zdGdyZVNxbDwvYT4pXG4gICAgICAgIGFuZCBub1NxbCAoPGEgY2xhc3NOYW1lPVwidGFnXCI+TW9uZ29EYjwvYT4pLlxuICAgICAgICBJIGJlbGlldmUgPGEgY2xhc3NOYW1lPVwidGFnXCI+Y29kZSBoYXMgdG8gY2xlYW48L2E+LCBsaWtlXG4gICAgICAgIGEgZGVzaWduIGhhcyB0byBiZSZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPnJlc3BvbnNpdmU8L2E+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPmFjY2Vzc2libGU8L2E+LlxuICAgICAgICBJJ20gZmFuIG9mIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkdpdDwvYT4gYW5kIHVzZSZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkdpdGh1YjwvYT4gYW5kJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+Qml0YnVja2V0PC9hPi4gUmVjZW50bHksXG4gICAgICAgIEknbSBsZWFybmluZyB0byBwbGF5IHdpdGgmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5SZWR1eDwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+V2VicGFjazwvYT4sIGFuZCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkdyYXBoUWw8L2E+IGFuZCBJJ20gbG92aW5nIGl0IVxuICAgICAgICA8YnIvPjxici8+XG4gICAgICAgIEknbSA8YSBjbGFzc05hbWU9XCJ0YWcgeWVsbG93XCI+RnJlbmNoIG5hdGl2ZTwvYT4mdGhpbnNwO1xuICAgICAgICBhbmQgSSdtIDxhIGNsYXNzTmFtZT1cInRhZyB5ZWxsb3dcIj5mbHVlbnQgaW4gRW5nbGlzaDwvYT4uXG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNraWxsYmxvY2sge1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDYwcHggYXV0bztcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHR9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQwcHgpIHtcbiAgICAgICAgICAgICAgLnNraWxsYmxvY2sgeyB3aWR0aDogNzAlOyB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgIC5za2lsbGJsb2NrIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODQlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgdGV4dC1qdXN0aWZ5OiBpbnRlci1jbHVzdGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvcD5cbiAgICApXG4gIH1cblxuICByZW5kZXJGaW5kTWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICA8TWVudSBsaW5rcz17c29jaWFsc30gLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDgwcHggYXV0bztcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJUaW1lbGluZShpdGVtcykge1xuICAgIHJldHVybiA8VGltZWxpbmUgaXRlbXM9e2l0ZW1zfSAvPlxuICB9XG5cbiAgcmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiA8UGFydGljbGVzIGhlaWdodD1cIjEwMHZoXCIgd2lkdGg9XCIxMDB2d1wiIHBhcmFtcz17cGFydGljbGVzfSAvPlxuICB9XG5cbiAgcmVuZGVyUGFyYWxsYXhCbG9jayh0aXRsZSwgY29udGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFyYWxsYXhCbG9jayB0aXRsZT17dGl0bGV9IGJhY2tncm91bmQ9e3RoaXMucmVuZGVyUGFyYWxsYXhCYWNrZ3JvdW5kKCl9PlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvUGFyYWxsYXhCbG9jaz5cbiAgICApXG4gIH1cblxuICByZW5kZXJNZW51SWNvbnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICA8QnV0dG9uTGluayB0YWJsZVxuICAgICAgICAgIHVybD17Y29uZmlnLmFwcGxpY2F0aW9uLmN2X3BkZl91cmx9XG4gICAgICAgICAgdGl0bGU9XCJEb3dubG9hZCBDVlwiXG4gICAgICAgICAgYWx0PVwiRG93bmxvYWQgUERGIFJlc3VtZVwiXG4gICAgICAgICAgYmxhbms9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25MaW5rIHRhYmxlXG4gICAgICAgICAgdXJsPVwiL2NvbnRhY3RcIlxuICAgICAgICAgIHRpdGxlPVwiQ29udGFjdFwiXG4gICAgICAgICAgYWx0PVwiQ29udGFjdCBNZVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7O1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgbGVmdDogMyU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDElO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgZXhwZXJpZW5jZXMsIHByb2plY3RzLCBlZHVjYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtZXRhID0gY29uZmlnLm1ldGEucmVzdW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRCbG9jXG4gICAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e21ldGEuZGVzY3JpcHRpb259XG4gICAgICAgICAga2V5d29yZHM9e21ldGEua2V5d29yZHN9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMSAuIFNraWxsc1wiLCB0aGlzLnJlbmRlclNraWxscygpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAyIC4gV29yayBFeHBlcmllbmNlc1wiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZXhwZXJpZW5jZXMpKX1cbiAgICAgICAge3RoaXMucmVuZGVyUGFyYWxsYXhCbG9jayhcIjAzIC4gUGVyc29uYWwgUHJvamVjdHNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKHByb2plY3RzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNCAuIEVkdWNhdGlvblwiLFxuICAgICAgICAgIHRoaXMucmVuZGVyVGltZWxpbmUoZWR1Y2F0aW9uKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwNSAuIEZpbmQgTWVcIiwgdGhpcy5yZW5kZXJGaW5kTWUoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlck1lbnVJY29ucygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/resume.js?entry */'
      }));
    }
  }, {
    key: 'renderFindMe',
    value: function renderFindMe() {
      return _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1179720951,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_Menu2.default, { links: _socials2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1179720951,
        css: '.menu[data-jsx="1179720951"] {margin: 30px auto 80px auto;text-align: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2R29CLEFBQ0QsOEJBQ3VCLDRCQUNULG1CQUNwQiIsImZpbGUiOiJwYWdlcy9yZXN1bWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvbXlyZXN1bWUnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzLFxuICAgICAgc29jaWFsczogICAgICBzb2NpYWxzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJza2lsbGJsb2NrXCI+XG4gICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnQmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5IdG1sPC9hPiwmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5Dc3M8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlJlYWN0IGNvbXBvbmVudHM8L2E+LFxuICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGgmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5NZXRlb3I8L2E+LlxuICAgICAgICBJJ20gcGFzc2lvbmF0ZSBhYm91dCB0aGUgJ01FUk4nIHN0YWNrJnRoaW5zcDtcbiAgICAgICAgKDxhIGNsYXNzTmFtZT1cInRhZ1wiPk1vbmdvRGI8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkV4cHJlc3NKczwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UmVhY3RKczwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+Tm9kZUpzPC9hPikuXG4gICAgICAgIEkgYWxzbyBjb2RlIHNvbWUgYmFja2VuZCB3b3JrIHVzaW5nJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UnVieSBPbiBSYWlsczwvYT4sJnRoaW5zcDtcbiAgICAgICAgYW5kIGVuam95IHVzaW5nIHRoZSB0ZXJtLCBJIGtub3cmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5TaGVsbCBzY3JpcHRpbmc8L2E+IHRvJnRoaW5zcDtcbiAgICAgICAgbWFrZSBteSBsaWZlIGVhc2llci4gRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGFcbiAgICAgICAgbG90IHdpdGggPGEgY2xhc3NOYW1lPVwidGFnXCI+SWxsdXN0cmF0b3I8L2E+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlBob3Rvc2hvcDwvYT4uXG4gICAgICAgIFNraWxsZWQgd2l0aCBjc3MgcHJlLXByb2Nlc3NvcnMgYW5kIGZyYW1ld29ya3MsIGxpa2UmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5Cb290c3RyYXA8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlNlbWFudGljLXVpPC9hPiwmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5TdHlsdXM8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlNjc3M8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkhhbWw8L2E+LiBJIGFsc28gcGxheSB3aXRoIHRlbXBsYXRpbmdcbiAgICAgICAgbGlrZSA8YSBjbGFzc05hbWU9XCJ0YWdcIj5KYWRlPC9hPiAvJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+QmxhemU8L2E+XG4gICAgICAgICZuYnNwO3dpdGggbXkgTWV0ZW9yIGFwcHMuIEknbSBmbHVlbnQgd2l0aCBTcWwgKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5NeVNxbDwvYT4gLyZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlBvc3RncmVTcWw8L2E+KVxuICAgICAgICBhbmQgbm9TcWwgKDxhIGNsYXNzTmFtZT1cInRhZ1wiPk1vbmdvRGI8L2E+KS5cbiAgICAgICAgSSBiZWxpZXZlIDxhIGNsYXNzTmFtZT1cInRhZ1wiPmNvZGUgaGFzIHRvIGNsZWFuPC9hPiwgbGlrZVxuICAgICAgICBhIGRlc2lnbiBoYXMgdG8gYmUmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5yZXNwb25zaXZlPC9hPiBhbmQmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5hY2Nlc3NpYmxlPC9hPi5cbiAgICAgICAgSSdtIGZhbiBvZiA8YSBjbGFzc05hbWU9XCJ0YWdcIj5HaXQ8L2E+IGFuZCB1c2UmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5HaXRodWI8L2E+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkJpdGJ1Y2tldDwvYT4uIFJlY2VudGx5LFxuICAgICAgICBJJ20gbGVhcm5pbmcgdG8gcGxheSB3aXRoJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UmVkdXg8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPldlYnBhY2s8L2E+LCBhbmQmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5HcmFwaFFsPC9hPiBhbmQgSSdtIGxvdmluZyBpdCFcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICBJJ20gPGEgY2xhc3NOYW1lPVwidGFnIHllbGxvd1wiPkZyZW5jaCBuYXRpdmU8L2E+JnRoaW5zcDtcbiAgICAgICAgYW5kIEknbSA8YSBjbGFzc05hbWU9XCJ0YWcgeWVsbG93XCI+Zmx1ZW50IGluIEVuZ2xpc2g8L2E+LlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5za2lsbGJsb2NrIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI0MHB4KSB7XG4gICAgICAgICAgICAgIC5za2lsbGJsb2NrIHsgd2lkdGg6IDcwJTsgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAuc2tpbGxibG9jayB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg0JTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgIHRleHQtanVzdGlmeTogaW50ZXItY2x1c3RlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3A+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRmluZE1lKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgPE1lbnUgbGlua3M9e3NvY2lhbHN9IC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byA4MHB4IGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyVGltZWxpbmUoaXRlbXMpIHtcbiAgICByZXR1cm4gPFRpbWVsaW5lIGl0ZW1zPXtpdGVtc30gLz5cbiAgfVxuXG4gIHJlbmRlclBhcmFsbGF4QmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gPFBhcnRpY2xlcyBoZWlnaHQ9XCIxMDB2aFwiIHdpZHRoPVwiMTAwdndcIiBwYXJhbXM9e3BhcnRpY2xlc30gLz5cbiAgfVxuXG4gIHJlbmRlclBhcmFsbGF4QmxvY2sodGl0bGUsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcmFsbGF4QmxvY2sgdGl0bGU9e3RpdGxlfSBiYWNrZ3JvdW5kPXt0aGlzLnJlbmRlclBhcmFsbGF4QmFja2dyb3VuZCgpfT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L1BhcmFsbGF4QmxvY2s+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTWVudUljb25zKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgPEJ1dHRvbkxpbmsgdGFibGVcbiAgICAgICAgICB1cmw9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfVxuICAgICAgICAgIHRpdGxlPVwiRG93bmxvYWQgQ1ZcIlxuICAgICAgICAgIGFsdD1cIkRvd25sb2FkIFBERiBSZXN1bWVcIlxuICAgICAgICAgIGJsYW5rPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uTGluayB0YWJsZVxuICAgICAgICAgIHVybD1cIi9jb250YWN0XCJcbiAgICAgICAgICB0aXRsZT1cIkNvbnRhY3RcIlxuICAgICAgICAgIGFsdD1cIkNvbnRhY3QgTWVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOztcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDMlO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgICAgICBib3R0b206IDFweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLnJlc3VtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDEgLiBTa2lsbHNcIiwgdGhpcy5yZW5kZXJTa2lsbHMoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMiAuIFdvcmsgRXhwZXJpZW5jZXNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKGV4cGVyaWVuY2VzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMyAuIFBlcnNvbmFsIFByb2plY3RzXCIsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUaW1lbGluZShwcm9qZWN0cykpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDQgLiBFZHVjYXRpb25cIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKGVkdWNhdGlvbikpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDUgLiBGaW5kIE1lXCIsIHRoaXMucmVuZGVyRmluZE1lKCkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51SWNvbnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/resume.js?entry */'
      }));
    }
  }, {
    key: 'renderTimeline',
    value: function renderTimeline(items) {
      return _react2.default.createElement(_Timeline2.default, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      });
    }
  }, {
    key: 'renderParallaxBackground',
    value: function renderParallaxBackground() {
      return _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: _particles2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      });
    }
  }, {
    key: 'renderParallaxBlock',
    value: function renderParallaxBlock(title, content) {
      return _react2.default.createElement(_ParallaxBlock2.default, { title: title, background: this.renderParallaxBackground(), __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, content);
    }
  }, {
    key: 'renderMenuIcons',
    value: function renderMenuIcons() {
      return _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1552607662,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_ButtonLink2.default, { table: true,
        url: _config2.default.application.cv_pdf_url,
        title: 'Download CV',
        alt: 'Download PDF Resume',
        blank: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement(_ButtonLink2.default, { table: true,
        url: '/contact',
        title: 'Contact',
        alt: 'Contact Me',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1552607662,
        css: '.menu[data-jsx="1552607662"] {position: fixed;;top: 50%;left: 3%;z-index: 999;width: 150px;}@media screen and (max-width: 640px) {.menu[data-jsx="1552607662"] {top: auto;bottom: 1px;display: table;border-collapse: separate;border-spacing: 4px;width: 98%;left: 1%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VtZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSm9CLEFBQ0QsOEJBQ1csZ0JBQUMsQ0FDUixTQUNBLFNBQ0ksYUFDQSxhQUNkLENBRXFDLHNDQUM3Qiw4QkFDSyxVQUNFLFlBQ0csZUFDVywwQkFDTixvQkFDVCxXQUNGLFNBQ1YsQ0FDRiIsImZpbGUiOiJwYWdlcy9yZXN1bWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWUnXG5pbXBvcnQgSGVhZEJsb2MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZEJsb2MnXG5pbXBvcnQgUGFyYWxsYXhCbG9jayBmcm9tICcuLi9jb21wb25lbnRzL1BhcmFsbGF4QmxvY2snXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uTGluaydcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9kYXRhL2NvbmZpZydcbmltcG9ydCBwYXJ0aWNsZXMgZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnXG5pbXBvcnQgeyBleHBlcmllbmNlcywgcHJvamVjdHMsIGVkdWNhdGlvbiB9IGZyb20gJy4uL2RhdGEvbXlyZXN1bWUnXG5pbXBvcnQgc29jaWFscyBmcm9tICcuLi9kYXRhL3NvY2lhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVyaWVuY2VzOiAgZXhwZXJpZW5jZXMsXG4gICAgICBwcm9qZWN0czogICAgIHByb2plY3RzLFxuICAgICAgZWR1Y2F0aW9uOiAgICBlZHVjYXRpb24sXG4gICAgICBjb25maWc6ICAgICAgIGNvbmZpZyxcbiAgICAgIHBhcnRpY2xlczogICAgcGFydGljbGVzLFxuICAgICAgc29jaWFsczogICAgICBzb2NpYWxzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2tpbGxzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJza2lsbGJsb2NrXCI+XG4gICAgICAgIEhpZ2hseSBza2lsbGVkIGluIGNyZWF0aW5nIHBlcmZvcm1hbnQmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5IdG1sPC9hPiwmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5Dc3M8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlJlYWN0IGNvbXBvbmVudHM8L2E+LFxuICAgICAgICBJIHBsYXkgYSBsb3Qgc2luY2Ugb3ZlciB0aGFuIG9uZSB5ZWFyIHdpdGgmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5NZXRlb3I8L2E+LlxuICAgICAgICBJJ20gcGFzc2lvbmF0ZSBhYm91dCB0aGUgJ01FUk4nIHN0YWNrJnRoaW5zcDtcbiAgICAgICAgKDxhIGNsYXNzTmFtZT1cInRhZ1wiPk1vbmdvRGI8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkV4cHJlc3NKczwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UmVhY3RKczwvYT4sJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+Tm9kZUpzPC9hPikuXG4gICAgICAgIEkgYWxzbyBjb2RlIHNvbWUgYmFja2VuZCB3b3JrIHVzaW5nJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UnVieSBPbiBSYWlsczwvYT4sJnRoaW5zcDtcbiAgICAgICAgYW5kIGVuam95IHVzaW5nIHRoZSB0ZXJtLCBJIGtub3cmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5TaGVsbCBzY3JpcHRpbmc8L2E+IHRvJnRoaW5zcDtcbiAgICAgICAgbWFrZSBteSBsaWZlIGVhc2llci4gRXhwZXJpZW5jZWQgd2l0aCBkZXNpZ24sIEknbSBwbGF5aW5nIGFcbiAgICAgICAgbG90IHdpdGggPGEgY2xhc3NOYW1lPVwidGFnXCI+SWxsdXN0cmF0b3I8L2E+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlBob3Rvc2hvcDwvYT4uXG4gICAgICAgIFNraWxsZWQgd2l0aCBjc3MgcHJlLXByb2Nlc3NvcnMgYW5kIGZyYW1ld29ya3MsIGxpa2UmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5Cb290c3RyYXA8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlNlbWFudGljLXVpPC9hPiwmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5TdHlsdXM8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlNjc3M8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkhhbWw8L2E+LiBJIGFsc28gcGxheSB3aXRoIHRlbXBsYXRpbmdcbiAgICAgICAgbGlrZSA8YSBjbGFzc05hbWU9XCJ0YWdcIj5KYWRlPC9hPiAvJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+QmxhemU8L2E+XG4gICAgICAgICZuYnNwO3dpdGggbXkgTWV0ZW9yIGFwcHMuIEknbSBmbHVlbnQgd2l0aCBTcWwgKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5NeVNxbDwvYT4gLyZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPlBvc3RncmVTcWw8L2E+KVxuICAgICAgICBhbmQgbm9TcWwgKDxhIGNsYXNzTmFtZT1cInRhZ1wiPk1vbmdvRGI8L2E+KS5cbiAgICAgICAgSSBiZWxpZXZlIDxhIGNsYXNzTmFtZT1cInRhZ1wiPmNvZGUgaGFzIHRvIGNsZWFuPC9hPiwgbGlrZVxuICAgICAgICBhIGRlc2lnbiBoYXMgdG8gYmUmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5yZXNwb25zaXZlPC9hPiBhbmQmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5hY2Nlc3NpYmxlPC9hPi5cbiAgICAgICAgSSdtIGZhbiBvZiA8YSBjbGFzc05hbWU9XCJ0YWdcIj5HaXQ8L2E+IGFuZCB1c2UmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5HaXRodWI8L2E+IGFuZCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPkJpdGJ1Y2tldDwvYT4uIFJlY2VudGx5LFxuICAgICAgICBJJ20gbGVhcm5pbmcgdG8gcGxheSB3aXRoJnRoaW5zcDtcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCI+UmVkdXg8L2E+LCZ0aGluc3A7XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiPldlYnBhY2s8L2E+LCBhbmQmdGhpbnNwO1xuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIj5HcmFwaFFsPC9hPiBhbmQgSSdtIGxvdmluZyBpdCFcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICBJJ20gPGEgY2xhc3NOYW1lPVwidGFnIHllbGxvd1wiPkZyZW5jaCBuYXRpdmU8L2E+JnRoaW5zcDtcbiAgICAgICAgYW5kIEknbSA8YSBjbGFzc05hbWU9XCJ0YWcgeWVsbG93XCI+Zmx1ZW50IGluIEVuZ2xpc2g8L2E+LlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5za2lsbGJsb2NrIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI0MHB4KSB7XG4gICAgICAgICAgICAgIC5za2lsbGJsb2NrIHsgd2lkdGg6IDcwJTsgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAuc2tpbGxibG9jayB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg0JTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgIHRleHQtanVzdGlmeTogaW50ZXItY2x1c3RlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3A+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRmluZE1lKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgPE1lbnUgbGlua3M9e3NvY2lhbHN9IC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byA4MHB4IGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyVGltZWxpbmUoaXRlbXMpIHtcbiAgICByZXR1cm4gPFRpbWVsaW5lIGl0ZW1zPXtpdGVtc30gLz5cbiAgfVxuXG4gIHJlbmRlclBhcmFsbGF4QmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gPFBhcnRpY2xlcyBoZWlnaHQ9XCIxMDB2aFwiIHdpZHRoPVwiMTAwdndcIiBwYXJhbXM9e3BhcnRpY2xlc30gLz5cbiAgfVxuXG4gIHJlbmRlclBhcmFsbGF4QmxvY2sodGl0bGUsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcmFsbGF4QmxvY2sgdGl0bGU9e3RpdGxlfSBiYWNrZ3JvdW5kPXt0aGlzLnJlbmRlclBhcmFsbGF4QmFja2dyb3VuZCgpfT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L1BhcmFsbGF4QmxvY2s+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTWVudUljb25zKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgPEJ1dHRvbkxpbmsgdGFibGVcbiAgICAgICAgICB1cmw9e2NvbmZpZy5hcHBsaWNhdGlvbi5jdl9wZGZfdXJsfVxuICAgICAgICAgIHRpdGxlPVwiRG93bmxvYWQgQ1ZcIlxuICAgICAgICAgIGFsdD1cIkRvd25sb2FkIFBERiBSZXN1bWVcIlxuICAgICAgICAgIGJsYW5rPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uTGluayB0YWJsZVxuICAgICAgICAgIHVybD1cIi9jb250YWN0XCJcbiAgICAgICAgICB0aXRsZT1cIkNvbnRhY3RcIlxuICAgICAgICAgIGFsdD1cIkNvbnRhY3QgTWVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOztcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDMlO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgICAgICBib3R0b206IDFweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIGV4cGVyaWVuY2VzLCBwcm9qZWN0cywgZWR1Y2F0aW9uIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YSA9IGNvbmZpZy5tZXRhLnJlc3VtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkQmxvY1xuICAgICAgICAgIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGtleXdvcmRzPXttZXRhLmtleXdvcmRzfVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDEgLiBTa2lsbHNcIiwgdGhpcy5yZW5kZXJTa2lsbHMoKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMiAuIFdvcmsgRXhwZXJpZW5jZXNcIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKGV4cGVyaWVuY2VzKSl9XG4gICAgICAgIHt0aGlzLnJlbmRlclBhcmFsbGF4QmxvY2soXCIwMyAuIFBlcnNvbmFsIFByb2plY3RzXCIsXG4gICAgICAgICAgdGhpcy5yZW5kZXJUaW1lbGluZShwcm9qZWN0cykpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDQgLiBFZHVjYXRpb25cIixcbiAgICAgICAgICB0aGlzLnJlbmRlclRpbWVsaW5lKGVkdWNhdGlvbikpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQYXJhbGxheEJsb2NrKFwiMDUgLiBGaW5kIE1lXCIsIHRoaXMucmVuZGVyRmluZE1lKCkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJNZW51SWNvbnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/resume.js?entry */'
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
          lineNumber: 181
        }
      }, _react2.default.createElement(_HeadBloc2.default, {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
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