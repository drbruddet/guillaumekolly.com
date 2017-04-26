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

var Resume = function (_React$Component) {
  (0, _inherits3.default)(Resume, _React$Component);

  function Resume() {
    (0, _classCallCheck3.default)(this, Resume);

    return (0, _possibleConstructorReturn3.default)(this, (Resume.__proto__ || (0, _getPrototypeOf2.default)(Resume)).apply(this, arguments));
  }

  (0, _createClass3.default)(Resume, [{
    key: 'renderSkills',
    value: function renderSkills() {
      return _react2.default.createElement('p', { className: 'skillblock', 'data-jsx': 966290402
      }, 'Highly skilled in creating performant\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Html'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Css'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'React components'), ', I play a lot since over than one year with\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Meteor'), '. I\'m passionate about the \'MERN\' stack\u2009 (', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'MongoDb'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'ExpressJs'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'ReactJs'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'NodeJs'), '). I also code some backend work using\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Ruby On Rails'), ',\u2009 and enjoy using the term, I know\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Shell scripting'), ' to\u2009 make my life easier. Experienced with design, I\'m playing a lot with ', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Illustrator'), ' and\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Photoshop'), '. Skilled with css pre-processors and frameworks, like\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Bootstrap'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Semantic-ui'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Stylus'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Scss'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Haml'), '. I also play with templating like ', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Jade'), ' /\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Blaze'), '\xA0with my Meteor apps. I\'m fluent with Sql (', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'MySql'), ' /\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'PostgreSql'), ') and noSql (', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'MongoDb'), '). I believe ', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'code has to clean'), ', like a design has to be\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'responsive'), ' and\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'accessible'), '. I\'m fan of ', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Git'), ' and use\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Github'), ' and\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Bitbucket'), '. Recently, I\'m learning to play with\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Redux'), ',\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'Webpack'), ', and\u2009', _react2.default.createElement('a', { className: 'tag', 'data-jsx': 966290402
      }, 'GraphQl'), ' and I\'m loving it!', _react2.default.createElement('br', {
        'data-jsx': 966290402
      }), _react2.default.createElement('br', {
        'data-jsx': 966290402
      }), 'I\'m ', _react2.default.createElement('a', { className: 'tag yellow', 'data-jsx': 966290402
      }, 'French native'), '\u2009 and I\'m ', _react2.default.createElement('a', { className: 'tag yellow', 'data-jsx': 966290402
      }, 'fluent in English'), '.', _react2.default.createElement(_style2.default, {
        styleId: 966290402,
        css: '.skillblock[data-jsx="966290402"] {width: 50%;margin: 60px auto;text-align: center;line-height: 1.8em;word-wrap: break-word;font-size: 1.1em;color: ' + _Theme.theme.colors.text + ';}@media screen and (max-width: 1240px) {.skillblock[data-jsx="966290402"] {width: 70%;}}@media screen and (max-width: 640px) {.skillblock[data-jsx="966290402"] {width: 84%;text-align: justify;text-justify: inter-cluster;margin: 30px auto;}}'
      }));
    }
  }, {
    key: 'renderFindMe',
    value: function renderFindMe() {
      return _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1179720951
      }, _react2.default.createElement(_Menu2.default, { links: _socials2.default }), _react2.default.createElement(_style2.default, {
        styleId: 1179720951,
        css: '.menu[data-jsx="1179720951"] {margin: 30px auto 80px auto;text-align: center;}'
      }));
    }
  }, {
    key: 'renderTimeline',
    value: function renderTimeline(items) {
      return _react2.default.createElement(_Timeline2.default, { items: items });
    }
  }, {
    key: 'renderParallaxBackground',
    value: function renderParallaxBackground() {
      return _react2.default.createElement(_reactParticlesJs2.default, { height: '100vh', width: '100vw', params: _particles2.default });
    }
  }, {
    key: 'renderParallaxBlock',
    value: function renderParallaxBlock(title, content) {
      return _react2.default.createElement(_ParallaxBlock2.default, { title: title, background: this.renderParallaxBackground() }, content);
    }
  }, {
    key: 'renderMenuIcons',
    value: function renderMenuIcons() {
      return _react2.default.createElement('div', { className: 'menu', 'data-jsx': 1552607662
      }, _react2.default.createElement(_ButtonLink2.default, { table: true,
        url: _config2.default.application.cv_pdf_url,
        title: 'Download CV',
        alt: 'Download PDF Resume',
        blank: true
      }), _react2.default.createElement(_ButtonLink2.default, { table: true,
        url: '/contact',
        title: 'Contact',
        alt: 'Contact Me'
      }), _react2.default.createElement(_style2.default, {
        styleId: 1552607662,
        css: '.menu[data-jsx="1552607662"] {position: fixed;;top: 50%;left: 3%;z-index: 999;width: 150px;}@media screen and (max-width: 640px) {.menu[data-jsx="1552607662"] {top: auto;bottom: 1px;display: table;border-collapse: separate;border-spacing: 4px;width: 98%;left: 1%;}}'
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

      return _react2.default.createElement('div', null, _react2.default.createElement(_HeadBloc2.default, {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords
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