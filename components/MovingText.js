import React from 'react'
import PropTypes from 'prop-types'

import { theme } from './layout/Theme'

export default class MovingText extends React.Component {

  static propTypes = {
    beforetext: PropTypes.string,
    aftertext:  PropTypes.string,
    movingtext: PropTypes.string.isRequired,
  }

  static defaultProps = {
    beforetext: "",
    aftertext:  ""
  }

  constructor(props) {
    super(props)
    this.init()
  }

  init() {
    this.state = { mousePos: { x: 0, y: 0 } }
  }

  mouseMove(e) {
    this.setState({
      mousePos: {
        x: e.pageX - (window.innerWidth / 2),
        y: e.pageY - (window.innerHeight / 2)
      }
    })
  }

  render() {
    const { beforetext, aftertext, movingtext } = this.props
    const offset = {
      transform: `translate3d( ${this.state.mousePos.x / -100}px,
        ${this.state.mousePos.y / -100}px, 0 )`,
      textShadow: `${- this.state.mousePos.x / -70}px
        ${this.state.mousePos.y / 80}px ${theme.colors.primary}`
    }

    return (
      <div className="background" onMouseMove={this.mouseMove.bind(this)}>
        <span className="beforetext"> {beforetext} </span>
        <h1 className="fixedtitle">
          <span className="movingtext" style={offset}>{movingtext}</span>
          {aftertext}
        </h1>

        <style jsx>{`
            .background {
              height: 100vh;
              width: calc(100vw - 55px);
              position: absolute;
              top: 0;
              left: 55px;
              font-family: ${theme.font.title_flag};
              font-weight: 900;
            }

            .beforetext {
              position: absolute;
              font-size: 15em;
              right: 28.6%;
              letter-spacing: -0.07em;
              top: 30%;
              color: ${theme.colors.almost_white};
            }

            .fixedtitle {
              position: absolute;
              font-size: 6em;
              right: 10%;
              top: 30%;
              letter-spacing: -6px;
              white-space: nowrap;
              color: ${theme.colors.black};
            }

            .movingtext {
              display: inline-block;
              letter-spacing: -6px;
              color: ${theme.colors.black};
            }

            @media screen and (max-width: 1240px) {
              .beforetext { font-size: 10em; top: 34%; right: 40%; }
              .movingtext { font-size: 0.85em; }
            }
            @media screen and (max-width: 640px) {
              .background { left: 30px; width: calc(100vw - 30px); }
              .beforetext { font-size: 8em; top: 21%; right: 20%; }
              .fixedtitle { top: 20%; font-size: 3em; }
              .movingtext { letter-spacing: -3px; }
            }
            @media screen and (max-width: 440px) {
              .beforetext { display: none; }
              .fixedtitle { top: 0; right: 5%; letter-spacing: 0; }
            }
        `}</style>
      </div>
    )
  }
}
