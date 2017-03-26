import React, { PropTypes } from 'react'
import css from 'next/css'

export default class MovingText extends React.Component {

  static propTypes = {
    beforetext: PropTypes.string,
    aftertext:  PropTypes.string,
    movingtext: PropTypes.string.isRequired,
    style:      PropTypes.object
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
    const { beforetext, aftertext, movingtext, style } = this.props

    let offset = {
      transform: `translate3d( ${this.state.mousePos.x / this.props.style.animation.transform_mouse_pos_x}px,
        ${this.state.mousePos.y / this.props.style.animation.transform_mouse_pos_y}px, 0 )`,
      textShadow: `${- this.state.mousePos.x / this.props.style.animation.shadow_mouse_pos_x}px
        ${this.state.mousePos.y / this.props.style.animation.shadow_mouse_pos_y}px
        ${this.props.style.movingtitlebackground}`
    }

    return (
      <div className={style.background}
          onMouseMove={ this.mouseMove.bind(this) } >
        <h1 style={{whiteSpace: 'nowrap'}} className={style.fixedtitle}>
          {beforetext}

          <span style={{display: 'inline-block',
                  willChange: 'transform'}}
                className={style.movingtitle}
                style={offset}>
            {movingtext}
          </span>

          {aftertext}
        </h1>
      </div>
    )
  }
}
